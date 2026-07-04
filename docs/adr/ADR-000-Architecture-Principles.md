# ADR-000 — Architecture Principles

## Status

Accepted. This is the top-level architectural constitution for VisataRoom
AI's AI Core; ADR-001, ADR-002, and ADR-003 are concrete applications of
these principles, not separate rules.

## Context

By DS-5.2, several independent architectural boundaries had accumulated
across `src/lib/interior/**` (Style Registry, Prompt Domain) and
`src/app/developer/**` (Developer Studio, Generation Engine, Benchmark),
each documented in its own README, but with no single place stating the
principles all of them are instances of. This ADR is that place. It
does not introduce new rules — it names the rules that ADR-001/002/003
and the module READMEs were already each independently enforcing.

## Principles

1. **Domain не знает UI.** Domain code (`src/domain/**`,
   `src/lib/interior/prompt-domain/**`, `src/lib/interior/styles/**`)
   contains no React, no hooks, no components, no `"use client"`. It must
   compile and run identically in a server context with zero UI
   dependencies.

2. **Developer Studio использует AI Core, но не определяет его.**
   `src/app/developer/**` is a *consumer* of Style Registry, Prompt
   Domain, and (its own) Generation Engine — it may read from them, but
   the domain models themselves must never import from
   `src/app/developer/**`. Developer Studio is where AI Core is exercised
   and benchmarked, not where it is designed.

3. **Style Registry — единственный источник знаний о стилях.**
   `INTERIOR_STYLE_REGISTRY` (`src/lib/interior/styles`) is the one place
   that knows what interior styles exist, their display names, prompt
   fragments, and categories. Nothing else — not Benchmark, not Developer
   Studio, not a future Prompt Engine — redefines style data; they only
   reference this registry (as `BenchmarkService.ts` and `StyleContext.ts`
   already do).

4. **Prompt Domain содержит только данные.** `PromptContext` and its
   sub-contexts (`src/lib/interior/prompt-domain/**`) are pure types and
   plain data — no methods, no formatting, no string assembly, no
   business logic. Assembling a final prompt string is explicitly not
   this layer's job.

5. **Prompt Engine работает только с PromptContext.** When Prompt Engine
   is built (Phase 6, not started), its only input contract is
   `PromptContext`. It must not reach around it to read Style Registry,
   Developer Studio config, or request/response shapes directly — those
   all flow into it *through* `PromptContext`.

6. **Formatter — единственное место генерации текста.** Whatever
   component eventually turns `PromptContext` into an actual prompt
   string (referred to as a Formatter/Prompt Engine concern) is the only
   place that concatenates or formats prompt text. No other layer
   (Provider, Generation Engine, Style Registry) should build prompt
   strings of its own.

7. **Generation Engine не знает о стилях.** `GenerationEngine`
   (`src/app/developer/engines/GenerationEngine`) accepts an already-built
   `prompt: string` on `GenerationRequest` — it has no knowledge of style
   IDs, categories, or the Style Registry. It only knows how to submit a
   request to a provider and shape the response.

8. **Provider — интеграция с AI.** "Provider" is reserved exclusively for
   adapters that call a real external AI/model vendor API (`ImageProvider`
   in production, `GenerationProvider` in Developer Studio). See
   ADR-001.

9. **Source — источник данных.** "Source" is reserved for where
   data/images/benchmark inputs come from (storage/location), never for
   AI vendor integration. See ADR-001 (`BenchmarkSource`).

10. **Один термин = одна концепция.** A given word is used for exactly
    one concept across the codebase. When the same word would otherwise
    mean two things (as it did for "Provider" and, orthogonally, for
    "mode" — see ADR-003 Contract 2), one of the two gets a different
    name rather than sharing the word.

11. **Минимизировать magic strings.** A string literal that is compared,
    branched on, or reused in more than one place should have exactly one
    named owner (a `const`, a union type, or both) that every call site
    imports, instead of being retyped independently at each site. See
    ADR-002 (`MY_STYLE_ID`) and the DS-5.2 cleanup below
    (`DEVELOPER_ROOT_PATH`, `BenchmarkSource`).

12. **Избегать циклических импортов.** Dependencies flow one direction:
    Style Registry → Prompt Domain → (future) Prompt Engine → Generation
    Engine → Provider → Model, and separately Developer Studio →
    Benchmark → Generation Engine. Nothing lower in a chain imports back
    up it.

13. **Domain важнее UI.** When a UI convenience and a domain-boundary rule
    conflict, the domain boundary wins — UI code adapts to the domain
    model, not the other way around.

14. **Prompt Engine — AI-agnostic.** `src/lib/interior/prompt-engine/**`
    (Phase 6) does not know about GPT, OpenAI, FLUX, Gemini, Claude,
    ComfyUI, or any local model. It works only with `PromptContext`.
    Which specific AI model/vendor is used is exclusively Provider's
    concern (Principle 8) — Prompt Engine never branches on it.

15. **PromptContext immutable.** Builder, Rules, and Pipeline
    (`src/lib/interior/prompt-engine/**`) never mutate an existing
    `PromptContext`. Every step returns a *new* `PromptContext` instance.
    Forbidden: `context.style = ...` or any other mutation of an
    existing instance. Allowed: `return { ...context, ... }`.

16. **Prompt Rules независимы.** A `PromptRule` does not know about other
    rules, does not call other rules, and does not depend on execution
    order. `PromptPipeline` is the single place that decides the sequence
    rules run in — no rule, Builder, or Formatter sequences them.

17. **Builder не вызывает Rules.** `PromptBuilder`
    (`src/lib/interior/prompt-engine/builder/**`) only creates or
    normalizes a `PromptContext` and returns it. It never imports, calls,
    or otherwise depends on `PromptRule`, `PromptRuleSet`, or
    `PromptPipeline` — it does not know Rule Engine exists. Where
    Builder's job ends and Rule Engine's job begins is a hard boundary,
    not a stylistic convention.

18. **Rule priority — metadata, не логика.** If a `priority` field is
    introduced anywhere in Prompt Engine (e.g. on `PromptRuleSet`), it
    exists purely as data `PromptPipeline` may read to decide sequencing.
    It must never be branched on inside a `PromptRule.apply()`
    implementation, and no rule may read another rule's priority — doing
    so would violate Principle 16. Ordering logic itself still lives
    exclusively in `PromptPipeline`.

19. **Composition over Duplication.** `Feature`, `Entity`, `Relation`, and
    `Context` (`knowledge/core/**`, `prompt-domain/**`) are the base
    building blocks of AI Core. New functionality must combine existing
    blocks — a new independent model is allowed only when it both (a)
    describes a genuinely new problem domain and (b) cannot be expressed
    through an existing Entity/Feature/Relation/Context/Registry. See
    "Update — DS-6.4.3" below for the full rule, examples, and exceptions.

20. **Evolution over Rewrite.** AI Core architecture changes by
    incremental migration, not disruptive rewrite. A new implementation
    is introduced *alongside* the one it will eventually replace —
    through an adapter, a compatibility layer, a staged migration, or
    plain temporary coexistence — and the old implementation keeps
    working until the new one has actually taken over. Breaking a
    working layer outright is acceptable only when no reasonable
    compatibility strategy exists, or when the long-term architectural
    benefit clearly outweighs the migration cost. See "Update — DS-6.5.3"
    below for the full rule, examples, and the pre-breaking-change
    checklist.

21. **Design Domain — верхняя пространственная ось.** `Design Domain`
    (`src/lib/interior/design-domain/**`, Phase 7) is the topmost node of
    AI Core's spatial hierarchy — above Space Type, and above Style.
    Space Type always sits one level below Design Domain and references
    it by `DesignDomainId`, never the reverse. Style must never rise
    above Design Domain: Style stays an orthogonal axis (Principle 3)
    that applies *within* any Design Domain/Space Type, not a layer that
    gates or contains one. See "Update — DS-7.1" below for the full rule
    and rationale.

22. **Evolution through Composition.** New capability on any AI Core
    model — Design Domain, Space Type, Knowledge, Prompt Domain, Prompt
    Engine, Room Analyzer, Material Engine, Style Engine, Furniture
    Planner, Object Detection, Automatic Masks, and future modules — is
    added by extending existing structure before introducing a new
    top-level property or a new independent model. The single official
    evaluation order is: reuse an existing model; if the model already
    has a `metadata` field, extend it; otherwise (or if metadata cannot
    express it) express the capability through composition; otherwise
    add a registry entry — changing a top-level contract is the last
    resort, considered only when none of the above can express the new
    capability. This does not replace Principles 3, 19, or 20 — it names
    the single ordered process those three principles already implied
    together. See "Update — DS-7.1.1a" below for the consolidated,
    single official Decision Flow, the AI Core Evolution Axiom, and
    worked examples (superseding the two slightly different orderings
    first drafted in "Update — DS-7.1.1").

## Consequences

- ADR-001 (Provider Terminology), ADR-002 (MY_STYLE Identifier), and
  ADR-003 (PromptContext Contracts) are read as concrete instances of
  principles 8–11 above, not independent decisions.
- `docs/AI_CORE_CHECKLIST.md` operationalizes these principles as a
  pre-flight checklist for every future architectural stage (starting
  with DS-6).
- These principles are not enforced by tooling (no lint rule, no CI
  check) as of DS-5.2 — they are enforced by review discipline only.
  Adding automated enforcement (e.g. an import-boundary lint rule) is a
  candidate for a future stage, not decided here.

## Update — DS-6.1.1 Prompt Engine Architecture Contracts

Principles 14–16 added ahead of DS-6.2 (the first Prompt Engine
implementation stage), to name the guarantees Prompt Engine's contracts
must hold before any Builder/Rules/Formatter code is written:
AI-agnosticism (14), `PromptContext` immutability (15), and Rule
independence (16). No implementation changed. The only code effect is
type-only: `PromptBuilder.build`, `PromptRule.apply`,
`PromptFormatter.format`, `PromptValidator.validate`,
`PromptTemplate.apply`, and `PromptPipeline.run`
(`src/lib/interior/prompt-engine/types.ts`) now take
`Readonly<PromptContext>` instead of `PromptContext`, so a future
implementation cannot satisfy the contract while mutating its input —
return types are unchanged (still a plain `PromptContext`/`PromptResult`,
signalling "return a new instance"). `docs/AI_CORE_CHECKLIST.md` gained
matching checks.

## Update — DS-6.2.1 Rule Engine Preparation

Ahead of DS-6.3 (named "Rule Engine Foundation" as of this update), two
more principles are added — Builder/Rule Engine boundary (17) and rule
priority as metadata, not logic (18) — and the `RuleSet` concept is named
for the first time. No implementation changed; this is documentation and
one additive type.

`PromptRuleSet` (`src/lib/interior/prompt-engine/types.ts`) is introduced
as a **type-only** contract: a named, logical grouping of independent
`PromptRule`s (`{ id, name, rules: PromptRule[], priority?: number }`).
Grouping rules into a `PromptRuleSet` does not give them any knowledge of
each other or of execution order — Principle 16 (Rules независимы) still
holds for every rule inside a set, and the optional `priority` field is
governed by Principle 18 above (Pipeline-facing metadata only, no sorting
logic implemented). No `PromptRuleSet` is implemented; `InteriorRuleSet`,
`LightingRuleSet`, `FurnitureRuleSet`, `MaterialRuleSet`, `DecorRuleSet`,
`ConstraintRuleSet`, and `MyStyleRuleSet` are named in
`rules/README.md` as future instances only.

## Update — DS-6.4.3 Principle 19: Composition over Duplication

Documentation-only stage, no code changed. Adds Principle 19 above and
elaborates it here in full: motivation, the rule itself, examples of
compliance/violation, allowed exceptions, and practical consequences for
every future AI Core stage.

### Мотивация

По итогам Knowledge Core (DS-6.4/6.4.1/6.4.2) в AI Core накопился
устойчивый набор строительных блоков — `Feature`, `Entity`, `Relation`,
`Context` — каждый из которых уже прошёл собственную ревизию
масштабируемости (DS-6.4.2 §5) и рассчитан на переиспользование за
пределами интерьерного домена. Principle 19 фиксирует явное правило,
которое до сих пор соблюдалось по факту, но нигде не было названо: любая
новая функциональность AI Core должна строиться через **композицию** этих
существующих сущностей. Новые независимые модели создаются только тогда,
когда существующие сущности принципиально не способны выразить новую
предметную область.

### Основное правило

`Feature`, `Entity`, `Relation` и `Context` — базовые строительные блоки
AI Core. Новые возможности должны **комбинировать** существующие блоки, а
не создавать параллельные модели данных, которые описывают то же самое
другими словами.

### Что считается правильным

Новые продукты и домены собираются из существующих строительных блоков,
а не порождают собственную параллельную иерархию типов:

```
Style
  ↓
Feature
  ↓
Knowledge
  ↓
Rule
  ↓
Prompt
```

```
Room       → Feature
Brand      → Feature
Landscape  → Feature
Hotel      → Feature
```

Т.е. новая предметная область (комната, бренд, ландшафт, отель, ...)
выражается через существующий `Feature`/`Entity`/`Relation`/`Context`, а
не через свой собственный тип с тем же назначением.

### Что считается нарушением

- `MaterialContextV2` — если уже существует `MaterialFeature`.
- `AdvancedLighting` — если можно расширить `LightingFeature`.
- `PromptStyle` — если уже существует `StyleKnowledge`.
- `FurnitureRule2` — если правило можно добавить в существующий
  `RuleSet`.

Общий признак нарушения: новый тип не добавляет новую предметную
область, а повторяет назначение уже существующего блока под другим
именем — это дублирование, а не композиция.

### Допустимые исключения

Новая модель допускается, только если выполняются **оба** условия
одновременно:

1. Она описывает новую предметную область.
2. Её невозможно выразить через существующие
   Entity/Feature/Relation/Context.

Если выполняется только одно из условий — новая модель не создаётся;
вместо этого расширяется существующий блок (новым полем, новым
`FeatureType`, новым `RelationType`).

### Практические последствия

Перед созданием любого нового класса/типа разработчик обязан
последовательно проверить, можно ли использовать вместо него:

1. существующий `Feature`;
2. существующий `Entity`;
3. существующий `Relation`;
4. существующий `Context`;
5. существующий `Registry`.

Только после того, как все пять пунктов дали отрицательный ответ,
допускается создание новой модели.

### Связь с другими принципами

Principle 19 усиливает:

- **Principle 1** (Domain не знает UI) — композиция удерживает новую
  функциональность внутри существующих доменных границ вместо того,
  чтобы каждый новый домен изобретал собственные структуры данных.
- **Principle 3** (Style Registry — единственный источник знаний о
  стилях) — тот же дух Single Source of Truth, применённый ко всем
  строительным блокам AI Core, не только к стилям: у каждой концепции
  должен быть один, переиспользуемый источник, а не несколько
  параллельных.
- **Principle 5** (Prompt Engine работает только с `PromptContext`) —
  domain separation: новый домен подключается через существующий
  контракт (`Context`/`Feature`), а не читает и не порождает свою
  отдельную форму данных в обход него.
- **Principle 11** (Минимизировать magic strings) — тот же Knowledge-
  first принцип "один источник на концепцию", распространённый с
  строковых литералов на целые модели данных.
- **Principle 15** (`PromptContext` immutable) — композиция существующих
  блоков не отменяет иммутабельность; если новый `Context` всё же
  оправдан исключением выше, он обязан следовать тому же правилу.
- **Principle 18** (Rule priority — metadata, не логика) — то же различие
  между "расширить существующее" и "изобрести параллельное" применяется
  к правилам: новое правило расширяет существующий `RuleSet`, а не
  порождает `FurnitureRule2`.

`docs/AI_CORE_CHECKLIST.md` gained a matching check. No implementation
changed.

## Update — DS-6.5.2 PromptDraft Evolution Strategy (Documentation Only)

Documentation-only stage, no code changed. Follows DS-6.5 (`PromptDraft`
introduced with independent Section models) and DS-6.5.1 (Section models
removed; `PromptDraft` rewritten as a fixed composition of the nine
existing Prompt Domain contexts, per Principle 19). This update records
where that fixed composition could stop being the right shape, and — just
as importantly — commits to *not* changing it now.

### Future Evolution

Today's `PromptDraft` (`src/lib/interior/prompt-engine/builder/PromptDraft.ts`)
is a closed, enumerated composition:

```
PromptDraft
  ├── room: RoomContext
  ├── style: StyleContext
  ├── materials: MaterialContext
  ├── furniture: FurnitureContext
  ├── lighting: LightingContext
  ├── decor: DecorContext
  ├── constraints: ConstraintContext
  ├── negative: NegativePromptContext
  └── metadata: PromptMetadata
```

For today's scope — one vertical (interior), nine domains — this is the
correct shape, for the reasons in the Decision Record below. It is
**not** expected to stay correct at arbitrary scale. If VisataRoom AI's
AI Core grows to cover materially more verticals and domains beyond
interior — illustrative examples: Landscape, Exterior, Hospitality,
Retail, Office, Yacht, Aircraft, Exhibition, Smart Home, HVAC, Acoustics,
Accessibility, Brand Identity, Lighting Scenarios — a fixed, enumerated
field list on `PromptDraft` stops scaling: every new vertical would mean
editing the `PromptDraft` type itself, and most concrete drafts would
carry mostly-irrelevant fields for domains that vertical doesn't use.

At that point — and only at that point — an open, registry-shaped
composition becomes the better trade-off, for example (illustrative, not
a spec):

```
PromptDraft
  ↓
Domain Registry
  ↓
Map<DomainId, PromptContext>
```

or an equivalent structure named `DomainComposition` or
`PromptDomainGraph` — something where `PromptDraft` holds a lookup over
domain contexts instead of one named field per domain, so adding a
vertical means registering a new `DomainId`, not editing `PromptDraft`'s
type. The exact shape is intentionally left open; naming it precisely now
would be designing ahead of the need it's meant to serve.

**This is explicitly not a recommendation for the current implementation.**
It is not refactoring work, not technical debt, and not a defect in
today's architecture. It is a documented direction `PromptDraft` may take
*if and when* domain count makes it necessary — nothing more. Until that
objective necessity exists, today's fixed, enumerated `PromptDraft`
(DS-6.5.1) is the reference design, not a stopgap awaiting replacement.

### Decision Record — why this is not decided now

The registry-shaped alternative above is deliberately **not** adopted at
DS-6.5.2, for reasons that hold as long as the domain count stays where
it is today:

- Only nine domains exist today — a `Map<DomainId, PromptContext>` earns
  its complexity at a domain count this stage hasn't reached.
- The static, enumerated model is simpler to read, write, and reason
  about than a generic registry/graph.
- Every field on `PromptDraft` is compiler-checked by name and type
  (`context.room: RoomContext`, not `map.get("room") as RoomContext`) —
  a registry shape trades this away for flexibility not yet needed.
  Weaker typing is not an acceptable trade for a problem that does not
  exist yet.
- One less layer of indirection between `PromptContext` and `PromptDraft`
  means `PromptDraftBuilder` stays a five-line, obviously-correct
  composition (DS-6.5.1) instead of a lookup/registration mechanism.
- Compilation and maintenance stay cheap: no new abstraction
  (`DomainRegistry`, `DomainId` union, graph traversal) exists yet for
  anyone to learn, test, or keep in sync with `PromptContext`.

For all of these reasons, the current fixed-composition `PromptDraft`
(DS-6.5.1) remains the reference design. This decision is revisited only
when a concrete new vertical (not a hypothetical one) makes the fixed
field list demonstrably too large to maintain — see "Future Evolution"
above for the trigger condition. `docs/ARCHITECTURE.md` (Phase 6.5.2) and
`docs/AI_CORE_CHECKLIST.md` gained matching entries. No implementation
changed.

## Update — DS-6.5.3 Principle 20: Evolution over Rewrite

Documentation-only stage, no code changed. Adds Principle 20 above and
elaborates it here in full: motivation, the rule itself, good/bad
examples from this project's own history, and a checklist to run before
any breaking architectural change. (Requested as "DS-6.5.2" — renamed to
DS-6.5.3 in this document's history because DS-6.5.2 was already used for
the "PromptDraft Evolution Strategy" update directly above; keeping one
stage number per concept follows Principle 10, "Один термин = одна
концепция", applied to stage numbering itself.)

### Мотивация

Principle 15 (`PromptContext` immutable) and Principle 19 (Composition
over Duplication) both describe how a single step or a single new model
should behave. Neither says anything about how the architecture as a
whole is allowed to *change over time* — and by DS-6.5.1, every stage
that has actually shipped in this project has, in practice, already
answered that question the same way: something new was added next to
what existed, not instead of it, until the new thing was proven and the
old thing could be safely retired (or simply never was, because it still
had a job). Principle 20 names that pattern explicitly so it stops being
an unstated habit and starts being a rule reviewers can hold new work to.

### Основное правило

Architectural evolution favors incremental migration over disruptive
rewrite. Whenever reasonably possible, an existing implementation keeps
working — through an adapter, a compatibility layer, a staged migration,
or plain temporary coexistence of old and new — while the new
implementation is introduced, exercised, and proven alongside it. Old and
new representations may coexist for as long as the migration takes; nothing
requires collapsing them into one on day one. A breaking change — removing
or replacing a working layer outright, with no coexistence window — is
acceptable only when:

- there is no reasonable compatibility strategy, **or**
- the long-term architectural benefit clearly outweighs the migration
  cost.

Both are judgment calls, not checkboxes — which is exactly why the
checklist below exists: to force that judgment to be argued explicitly
before a breaking change is made, not asserted after the fact.

### Хорошие примеры (уже в этом проекте)

Every one of these is a real, already-shipped stage, not a hypothetical:

- **Style Registry появился раньше полной миграции.** `INTERIOR_STYLE_REGISTRY`
  (Phase 4) was built as the new single source of truth for style data
  while the older, scattered `STYLE_DISPLAY`/`STYLE_DESCRIPTIONS`/
  `MOCK_STYLES` kept existing until each caller was ready to move —
  no atomic flip-the-switch rewrite.
- **Prompt Domain существовал отдельно.** `PromptContext` (Phase 5, DS-5)
  was designed and built while `buildEditPrompt()`/`prompts.ts`
  (production) kept running unmodified — the new domain model didn't
  require production to change to exist.
- **Prompt Engine строился поверх существующего production.** DS-6.1
  onward built Builder/Rules/Formatter/Pipeline as pure `PromptContext`
  →`PromptContext`/`PromptResult` contracts, callable from anywhere,
  without touching `buildEditPrompt()`, `prompts.ts`, or the public site
  — production and the new engine coexist today, deliberately.
- **`PromptDraft` сначала стал новой моделью, не ломая `PromptContext`.**
  DS-6.5/DS-6.5.1 added a whole new intermediate representation without
  changing a single field, type, or contract of `PromptContext` — the
  existing `PromptBuilder`/`PromptContext` path still works exactly as
  it did before `PromptDraft` existed.
- **Knowledge Core развивается отдельно до подключения.** DS-6.4/6.4.1/6.4.2
  built `KnowledgeEntity`/`KnowledgeFeature`/`KnowledgeGraph` fully
  isolated under `knowledge/core/**`, explicitly not wired into Prompt
  Domain, Prompt Engine, or production — proven in isolation before any
  future stage connects it.
- **Feature Foundation создан заранее.** The `<Domain>Feature` types
  (`knowledge/core/Feature.ts`) were built and the older `<Domain>Knowledge`
  types were only turned into aliases afterward (DS-6.4.2) — the
  consuming `registry.ts` files never had to change.
- **Rule Engine подключается постепенно.** `RuleEngine`/`DefaultRuleEngine`
  (DS-6.3) work against `PromptContext` today and are not yet retargeted
  to `PromptDraft` (DS-6.5.1) — that retargeting is future work, done
  when Formatter needs it, not forced now just because `PromptDraft`
  exists.

### Плохие примеры (что запретил бы Principle 20)

- ✗ Deleting `PromptContext` and rewriting Prompt Domain, Prompt Engine,
  and production all at once instead of introducing any new shape
  alongside it.
- ✗ Replacing Style Registry with no compatibility period — cutting over
  every caller in one commit instead of letting old and new style sources
  coexist until each caller migrates.
- ✗ Deleting `DefaultPromptBuilder`/`PromptBuilder` before `PromptDraft`
  and whatever consumes it are actually ready to fully replace that path.
- ✗ Breaking `buildEditPrompt()`/`prompts.ts` or the public API just to
  make room for a new internal model, when the new model could instead be
  built to not require that.
- ✗ A "let's just rewrite it properly this time" pass across Prompt
  Engine/Prompt Domain/Knowledge Core in one stage, instead of the
  incremental, one-layer-at-a-time stages (DS-6.1 → DS-6.5.1) this
  project has actually used.

### Checklist перед Breaking Rewrite

Before introducing a change that breaks or replaces a working
implementation instead of letting it coexist, answer these in order:

1. Можно ли использовать существующую модель/слой вместо новой?
2. Можно ли добавить Adapter/compatibility layer вместо прямой замены?
3. Можно ли выполнить миграцию поэтапно, а не одним шагом?
4. Можно ли какое-то время поддерживать обе реализации параллельно?
5. Является ли полный Rewrite действительно единственным вариантом?

A breaking rewrite is justified only when the honest answer to all five
is "no" — and that reasoning should be written down (in the ADR update or
stage doc for that change), not just asserted.

### Связь с другими принципами

- **Principle 15** (`PromptContext` immutable) — Principle 20 is the
  same discipline at a larger grain: where 15 says a single step must
  not mutate its input and must return a new instance, 20 says an
  architectural migration must not mutate the existing system in place
  either — it grows a new instance alongside the old one.
- **Principle 19** (Composition over Duplication) — the two principles
  govern different axes of the same instinct to avoid destructive
  change: 19 stops you from building a *parallel model* that duplicates
  an existing one; 20 stops you from *destroying* an existing
  implementation before its replacement has actually earned that. A
  change can satisfy 19 (compose, don't duplicate) and still violate 20
  if it rips out the old implementation on the same commit instead of
  coexisting through a migration window.
- **Principle 12** (Избегать циклических импортов) — staged coexistence
  under Principle 20 must not introduce a cyclical dependency between the
  old and new implementation while both exist; an adapter/compatibility
  layer depends on both, never the reverse.
- **Principle 2** (Developer Studio использует AI Core, но не определяет
  его) — Developer Studio is exactly where a new implementation
  introduced under Principle 20 gets exercised and benchmarked against
  the old one before any production cutover, per Phase 1/2's original
  purpose.

`docs/ARCHITECTURE.md` and `docs/AI_CORE_CHECKLIST.md` gained matching
sections/checks. `src/lib/interior/prompt-engine/README.md` gained a
short "Architecture Evolution" note applying this principle to
Builder/Rules/Formatter/Pipeline specifically. No implementation
changed.

## Update — DS-7.1 Design Domain Foundation

Adds Principle 21 above and opens **Phase 7 — Spatial Intelligence**, a
new, independent axis of AI Core alongside the Style/Knowledge/Prompt
Engine chain built so far. This update introduces one new, fully
isolated module — `src/lib/interior/design-domain/**` — and elaborates
the spatial hierarchy rule in full.

### Мотивация

Every AI Core module built through DS-6.5.3 answers "how is this
space styled?" (Style, Knowledge, Prompt Engine). None of them answer a
logically prior question: "what kind of space is this in the first
place?" — a hotel room and a living room can share the same style
(`minimalist`) but belong to entirely different categories of space,
with different constraints, different typical Space Types, and
eventually different Knowledge. Phase 7 starts answering that prior
question, layer by layer:

```
Design Domain
  ↓
Space Type
  ↓
Style
  ↓
Knowledge
  ↓
Prompt Engine
```

DS-7.1 builds only the first, topmost layer — `Design Domain` — and
nothing below it. Space Type (DS-7.2), its Knowledge integration
(DS-7.3), and its Prompt Engine integration (DS-7.4) are named as future
stages, not built now, per Principle 20 (Evolution over Rewrite):
introduce one layer, prove it, then build the next on top of it.

### Основное правило

`Design Domain` is the topmost node of the spatial hierarchy — above
Space Type, and above Style:

- **Space Type sits below Design Domain, not beside it.** A Space Type
  (a concrete room/object kind — "living room", "hotel room", "operating
  room") only makes sense *within* a Design Domain, because the set of
  meaningful Space Types differs per domain. When Space Type is built
  (DS-7.2), it will reference `DesignDomainId`
  (`src/lib/interior/design-domain/types.ts`) — Design Domain will never
  reference a Space Type back (would violate Principle 12, cyclical
  imports).
- **Style never rises above Design Domain.** Style (Principle 3) remains
  an orthogonal axis — "in what visual language is this space
  rendered?" — applicable *within* any Design Domain/Space Type. Style
  must never become a gate, container, or prerequisite for a Design
  Domain or Space Type to exist; doing so would collapse two independent
  axes (spatial category vs. visual language) into one, violating
  Principle 10 (Один термин = одна концепция).
- **Design Domain does not know about anything below it.** Consistent
  with Principle 1 (Domain не знает UI) and Principle 5 (Prompt Engine
  работает только с `PromptContext`), `design-domain/**` does not import
  Space Type (not yet built), Style Registry, Knowledge, Prompt Domain,
  or Prompt Engine — a new top-of-hierarchy layer is not required to know
  about the layers that will eventually sit below it.

### Что построено на DS-7.1

`src/lib/interior/design-domain/` — types (`DesignDomainId`,
`DesignDomain`, `DesignDomainMetadata`, `DesignDomainRegistry`), 11
top-level categories (`domains.ts`: `residential`, `commercial`,
`hospitality`, `public`, `outdoor`, `industrial`, `entertainment`,
`transportation`, `healthcare`, `education`, `mixed_use`), and a plain
lookup registry (`registry.ts`: `DESIGN_DOMAIN_REGISTRY`,
`getDesignDomain`, `getAllDesignDomains`) — by analogy with Style
Registry (DS-4) and Knowledge Registry (DS-6.4). No Space Types, no
business logic, no connection to any existing AI Core module.

### Связь с другими принципами

- **Principle 3** (Style Registry — единственный источник знаний о
  стилях) — Principle 21 keeps Style's ownership of *style* data intact;
  it only clarifies that Style is not, and must never become, the layer
  spatial categorization is expressed through.
- **Principle 12** (Избегать циклических импортов) — the spatial
  hierarchy's dependency direction (Design Domain → Space Type → Style →
  Knowledge → Prompt Engine) is a direct extension of the existing
  dependency chain; Design Domain sits at its new topmost point and
  nothing below it may import back up to it.
- **Principle 19** (Composition over Duplication) — Space Type (DS-7.2)
  is expected to reference `DesignDomainId` rather than inventing its own
  parallel spatial categorization.
- **Principle 20** (Evolution over Rewrite) — Phase 7 is built one
  isolated layer at a time (Design Domain now, Space Type/Knowledge
  Integration/Prompt Integration later), the same incremental pattern
  already used for Style Registry → Prompt Domain → Prompt Engine →
  Knowledge Base.

`docs/ARCHITECTURE.md` gained a new "Phase 7 — Spatial Intelligence"
section (renumbering the not-yet-started "Prompt Lab"/"Production
Integration"/"Architecture Refactoring 2.0" stages from Phase 7–9 to
Phase 8–10 — no code depended on those numbers).
`docs/AI_CORE_CHECKLIST.md` gained matching isolation checks. Prompt
Engine, Prompt Domain, Knowledge, Rule Engine, Builder, Formatter,
Pipeline, Style Registry, Developer Studio, Benchmark, the public site,
the API, and Production are untouched — `design-domain/**` is not
imported from anywhere. Space Type is intentionally not part of this
stage — it is DS-7.2.

## Update — DS-7.1.1 Design Domain Evolution Foundation

Documentation-only stage, no code/runtime change. Adds Principle 22
above and elaborates it here in full. `src/lib/interior/design-domain/`
(`types.ts`, `domains.ts`, `registry.ts`, `index.ts`) is **not modified**
— `DesignDomainMetadata` (`{ priority, enabled, notes? }`) already
existed as of DS-7.1 and already satisfied "an extension point with no
real fields yet"; there was nothing to add.

### Мотивация

DS-7.1 built `Design Domain` as the topmost node of the spatial
hierarchy and gave it a `metadata` field, but never stated *why* that
field exists or *how* the module is expected to grow. Without that
statement, the natural failure mode for any small, stable top-level
contract is incremental erosion: each future stage (DS-7.2 onward, or an
unrelated future module) adds "just one more field" directly to
`DesignDomain` because there's no documented alternative, and the
contract that every consumer (Space Type, Style, a future Room Analyzer,
Material Engine, ...) depends on keeps changing shape. DS-7.1.1 closes
that gap *before* DS-7.2 starts, by naming `metadata` as the official
extension point and writing down the order in which any AI Core model —
not only Design Domain — should be extended.

### Основное правило

Future evolution should extend `DesignDomain` through composition and
metadata before introducing new top-level properties. Breaking changes
to the `DesignDomain` contract should be considered only when composition
can no longer express the new capability.

Generalized to the rest of AI Core (Principle 22): any new capability on
any model is evaluated in this order, stopping at the first step that
can express it —

```
Reuse
  ↓
Metadata (only if the model already has it)
  ↓
Composition
  ↓
Registry
  ↓
Top-level Contract
```

`Metadata` is checked immediately after `Reuse`, ahead of composing a new
object, for any model that already has an established `metadata` field —
Design Domain, since DS-7.1 — because extending an existing field is
cheaper than composing a new one. For a model with no `metadata` field,
that step is skipped entirely, not reordered, and the flow falls through
to `Composition` (Principle 19).

> **Note (DS-7.1.1a):** an earlier draft of this section additionally
> showed a second, general-purpose ordering with `Composition` ahead of
> `Metadata`. That second ordering has been retired — this is now the
> single official AI Core Decision Flow, with no alternate version
> anywhere in this document. See "Update — DS-7.1.1a" below for the full
> consolidation, the Metadata-vs-Composition distinction, the
> no-`metadata` exception, and worked examples.

### Illustrative examples (not a roadmap, not implemented)

To show `metadata` can absorb domain-specific growth without touching
`DesignDomain`'s top-level shape:

```
Commercial  → metadata → capabilities → branding / zoning / workflow /
                                          accessibility / signage
Residential → metadata → capabilities → comfort / decor / lighting /
                                          storage
Outdoor     → metadata → capabilities → terrain / vegetation /
                                          irrigation / landscape
```

None of `capabilities`, `generation`, `analysis`, `providers`,
`operations`, `quality`, `defaults`, `roomAnalyzerHints`,
`renderingHints`, `aiHints`, or the examples above are implemented on
DS-7.1.1 or scheduled for a specific future stage — they exist only to
demonstrate that the current `metadata` extension point is sufficient for
this class of growth.

### Универсальность

`Design Domain` deliberately carries no interior-specific field or
literal. The contract (`id`, `displayName`, `description`, `icon`,
`metadata`) is equally usable for Interior, Landscape, Architecture,
Retail, Hospitality, Marine, Aircraft, Exhibition, Urban, Infrastructure,
Industrial, Smart Building, Healthcare, Education, and any future
vertical — each would reuse the same `DesignDomain`/`DesignDomainMetadata`
contract with different `metadata` content, not a parallel contract.

### Связь с другими принципами

Principle 22 does not replace Principles 3, 19, or 20 — it names the one
ordered process those three already implied together:

- **Principle 3** (Style Registry — единственный источник знаний о
  стилях) — the same Single Source of Truth discipline: growth happens
  in one place (the existing model's `metadata`), not in a second,
  competing source.
- **Principle 19** (Composition over Duplication) — supplies the
  `Composition` step directly; Principle 22 places it in a concrete
  sequence relative to `Reuse`, `Metadata`, `Registry`, and `Top-level
  Contract` rather than leaving it as the only named option.
- **Principle 20** (Evolution over Rewrite) — the same incremental
  instinct applied to a single model's own field list, not just to
  whole-layer migrations: extend what exists, alongside it, before
  replacing its shape.

### Architecture Review — DS-7.1.1

Confirmed unchanged: `design-domain/**` still does not import Prompt
Engine, Prompt Domain, Knowledge, Knowledge Core, Style Registry, Space
Type, Developer Studio, Benchmark, the API, or Production, and nothing
outside `design-domain/**` imports it. The strategy documented here
requires no migration, no refactor, and no public API change, and is
fully compatible with DS-7.2, DS-7.3, DS-7.4, and any future Spatial
Intelligence stage — it constrains *how* those stages should extend
`Design Domain` (and every other AI Core model), not what they build.

`docs/ARCHITECTURE.md` gained a short "Phase 7.1.1" note under Phase 7.
`src/lib/interior/design-domain/README.md` gained matching sections
("Evolution Strategy", "Evolution through Composition", "Decision Flow",
"General AI Core Rule", "Future Capability", "Универсальность"). Prompt
Engine, Prompt Domain, Knowledge, Knowledge Core, Rule Engine, Formatter,
Pipeline, Builder, `PromptDraft`, Style Registry, Developer Studio,
Benchmark, Production, the API, and the UI are untouched. `npm run build`
passes.

## Update — DS-7.1.1a AI Core Evolution Consolidation

Documentation-only stage, no code/runtime change. DS-7.1.1 introduced
Principle 22 correctly in spirit but presented **two** slightly different
step orderings for the same idea (a Design Domain-specific flow with
`Metadata` before `Composition`, and a "general" flow with `Composition`
before `Metadata`), reconciled only by a paragraph explaining why they
differed. DS-7.1.1a is the consolidation stage that removes that
duplication: from this point on, AI Core has exactly **one** official
Decision Flow, stated once, with no alternate version anywhere in this
document. Principle 22 and the DS-7.1.1 section above were edited in
place to match (see the corrected text and the note inserted there); this
section is the full elaboration.

### 1. The single official Decision Flow

```
Need new capability
        ↓
Reuse existing model?             ── YES ──▶ Reuse
        │ NO
        ↓
Can existing metadata express it? ── YES ──▶ Metadata
        │ NO
        ↓
Can composition express it?       ── YES ──▶ Composition
        │ NO
        ↓
Can a Registry express it?        ── YES ──▶ Registry
        │ NO
        ↓
Create new Top-level Contract
```

This is the only Decision Flow in AI Core documentation. It applies to
every model, with one conditional step: "Can existing metadata express
it?" only applies to models that already have a `metadata` field — see
§3 below for models that don't.

### 2. Metadata vs. Composition — different problems

The two middle steps are not interchangeable, and neither one is "the
default" — each solves a different problem:

- **Metadata extends an existing model.** It adds descriptive/operational
  information *to* a single model that already exists, without changing
  its identity or creating a new object (e.g. `DesignDomain.metadata`
  growing a `capabilities` field — the domain is still the same domain).
- **Composition combines existing models.** It builds a new, larger
  structure *out of* other already-existing models, each keeping its own
  identity (e.g. `PromptContext` being made of `RoomContext` +
  `StyleContext` + ... — the whole is new, but nothing inside it is).

Because they solve different problems, they are not ordered by
preference — they're ordered by *applicability*: `Metadata` is evaluated
first only when it is actually on the table (the model already supports
it), because extending a field that already exists is strictly cheaper
than composing a new object. When a model has no `metadata` field, there
is nothing to evaluate at that step, so the flow moves on to
`Composition` — see §3.

### 3. Models without metadata — the exception

If a model has no `metadata` field, its Decision Flow simplifies to:

```
Reuse
  ↓
Composition
  ↓
Registry
  ↓
Top-level Contract
```

The `Metadata` step is not reordered here — it is absent, because
`metadata` does not exist for that model to extend. Examples of models
that are `metadata`-less today, and therefore always start their
evolution at `Composition`:

- **`PromptContext`** (`src/lib/interior/prompt-domain`) — pure data
  composed of `RoomContext`/`StyleContext`/`MaterialContext`/... sub-
  contexts; no `metadata` field.
- **`KnowledgeFeature`** (`src/lib/interior/knowledge/core/Feature.ts`) —
  composition of `KnowledgeEntity` + `domain: FeatureType`; no `metadata`
  field.
- **`KnowledgeRelation`** (`src/lib/interior/knowledge/core/Relation.ts`)
  — `{ from, to, type, weight? }`; no `metadata` field.
- **Style Registry** (`INTERIOR_STYLE_REGISTRY`,
  `src/lib/interior/styles`) — `InteriorStyle` entries have no `metadata`
  field; growth happens by adding entries to the registry (§4).

### 4. Real examples, with reasoning

| Model | Mechanism | Why |
|---|---|---|
| `DesignDomain` | **Metadata** | Already has an established `metadata` field (DS-7.1) — new domain-specific capability (`capabilities`, `generation`, ...) extends it directly, per `design-domain/README.md` "Evolution Strategy". |
| `PromptContext` | **Composition** | Has no `metadata` field; is already, and is meant to remain, a composition of sub-contexts (`RoomContext`, `StyleContext`, ...) — a new domain is added as a new sub-context, not a new field on the top-level type. |
| `KnowledgeFeature` | **Composition** | Has no `metadata` field; is defined as `KnowledgeEntity` + `domain` — new feature domains are added by extending `FeatureType` (Principle 19), not by changing `KnowledgeFeature`'s own shape. |
| Style Registry (`INTERIOR_STYLE_REGISTRY`) | **Registry** | Growth is "add one more reusable entry" (a new `InteriorStyle`), not "add a field to every style" — the registry array is the unit of extension, exactly what `Registry` in the Decision Flow names. |
| `PromptDraft` | **Composition** | Has no `metadata` field; DS-6.5.1 rewrote it as a fixed composition of the nine Prompt Domain contexts by reference — the same composition-first reasoning as `PromptContext`. |

### 5. Principle relationships — one responsibility each

No two Principles below overlap; each answers a different question:

| Principle | Question it answers |
|---|---|
| **3** — Style Registry, единственный источник знаний о стилях | **Ownership** — who owns a given piece of data? |
| **19** — Composition over Duplication | **Reuse** — how do new features combine what already exists? |
| **20** — Evolution over Rewrite | **Migration** — how does the system change over time without breaking? |
| **21** — Design Domain, верхняя пространственная ось | **Spatial architecture** — what is the shape of the specific Design Domain → Space Type → Style hierarchy? |
| **22** — Evolution through Composition | **Model evolution** — in what order should any single model be extended? |

Principle 21 is the concrete spatial-hierarchy instance that Principle 22
was later generalized from; Principle 22 is the general mechanism that
Principle 21 (and every future model) must follow when it grows. Neither
duplicates Principle 3, 19, or 20 — each of 21/22 depends on them (see
§9) without restating them.

### 6. AI Core Evolution Axiom

> **AI Core Evolution Axiom**
>
> Metadata enriches an existing model.
> Composition combines existing models.
> Registry organizes reusable models.
> Top-level contract changes are the last resort.

This axiom is a one-line distillation of Principle 22 and the Decision
Flow in §1 — it is **not** a new Principle (see §10, Architecture
Maturity). It exists purely as the memorable, quotable form of the same
single rule, for use in review discussions and future module READMEs.

### 7. What the Axiom means

- **Metadata adds information** to a model that already exists, without
  changing what the model fundamentally is.
- **Composition creates larger structures from existing models** — the
  new whole is built out of parts that already have their own identity
  and contract.
- **Registry provides reusable organization** — a place where instances
  of an existing model are collected and looked up, without changing the
  model's shape.
- **Top-level Contract changes only when every previous mechanism
  becomes insufficient** — i.e. only after `Reuse`, `Metadata` (if
  applicable), `Composition`, and `Registry` have all been tried and
  failed to express the new capability.

### 8. Architect Decision Tree (official, compact form)

The same Decision Flow from §1, in the compact form used for quick
reference during review — not a second flow, just a terser rendering of
the one in §1:

```
Need new capability
  ↓
Reuse existing model?
  ↓
Metadata?
  ↓
Composition?
  ↓
Registry?
  ↓
Top-level Contract
```

This is the official decision algorithm for every future AI Core module.

### 9. Principle Dependency Graph

The Principles most relevant to model evolution form one coherent chain,
not five independent rules:

```
Principle 3   (Ownership)
  ↓
Principle 19  (Reuse)
  ↓
Principle 20  (Migration)
  ↓
Principle 21  (Spatial architecture)
  ↓
Principle 22  (Model evolution)
  ↓
AI Core Evolution Axiom
```

Reading the chain: once a concept has exactly one owner (3), new needs
must compose with that owner rather than duplicate it (19); composing
in place, rather than replacing what exists, is how the whole
architecture is allowed to change over time (20); Design Domain (21) is
the first concrete spatial model built under that discipline; Principle
22 generalizes the specific mechanism 21 used (`metadata`-first, then
composition) into a rule for every model; the Axiom (§6) is that same
rule compressed to four lines. No step in this chain repeats what an
earlier step already established.

### 10. Architecture Maturity

As of DS-7.1.1a, AI Core's architectural methodology is considered
**stable**. This is a deliberate, named milestone, not an incidental
side effect of writing enough documentation:

- Future modules (Space Type, Room Analyzer, Material Engine, Style
  Engine, Furniture Planner, Object Detection, Automatic Masks, the
  Provider Layer, Generation Engine, and anything not yet named) are
  expected to follow Principles 1–22 and the Decision Flow (§1) **by
  default** — restating them is not required for each new module's own
  README, only applying them.
- **New Principles are introduced only when a fundamentally new
  architectural concept appears** — one that genuinely cannot be
  expressed as an instance of an existing Principle. Principle 21 (a new
  spatial hierarchy) and Principle 22 (a new evolution mechanism) each
  met that bar; most future stages will not.
- **Local implementation details must never create new Principles.** A
  new field, a new helper function, a new file layout, or a
  module-specific convention is documentation for that module — it does
  not get promoted to ADR-000 unless it is a genuinely new axiom the
  entire AI Core must follow.

### 11. Universal AI Core Rule

The Decision Flow (§1) and the Axiom (§6) are **not** specific to Design
Domain — that was only where the pattern was first named (DS-7.1.1).
They apply automatically, with no further documentation required per
module, to: Prompt Engine, Knowledge Core, Room Analyzer, Material
Engine, Furniture Planner, Style Engine, Object Detection, Automatic
Masks, the Provider Layer, Generation Engine, and every future AI module.
This is the default evolution methodology for the whole platform, not an
opt-in convention.

### Architecture Review — DS-7.1.1a

- **No contradictory Decision Flows** — the dual ordering introduced in
  DS-7.1.1 has been corrected in place (Principle 22 and the DS-7.1.1
  section above) and is fully superseded by §1 here.
- **No duplicated evolution strategies** — `design-domain/README.md`
  (§8–§10 there) now states the strategy once and points here for the
  full elaboration, rather than restating a second version.
- **No Principle conflicts** — §5 confirms Principles 3/19/20/21/22 each
  answer a distinct question with no overlap.
- **No documentation inconsistencies found** — `docs/ARCHITECTURE.md`,
  `docs/AI_CORE_CHECKLIST.md`, `design-domain/README.md`, and this ADR
  now use identical terminology (`Reuse → Metadata → Composition →
  Registry → Top-level Contract`) for the one official flow.
  `src/lib/interior/prompt-engine/README.md` was reviewed and found
  already consistent — it does not describe a Decision Flow of its own,
  so there was nothing to reconcile there, and it was not modified (out
  of scope for this stage per the forbidden list below).
- Confirmed unchanged: `design-domain/**` (`types.ts`, `domains.ts`,
  `registry.ts`, `index.ts`) — this stage touched documentation only.
  `design-domain/**` still does not import Prompt Engine, Prompt Domain,
  Knowledge, Knowledge Core, Style Registry, Space Type, Developer
  Studio, Benchmark, the API, or Production.

### Final Architecture Assessment

As of DS-7.1.1a, AI Core has:

- ✓ Stable architectural philosophy (Principles 1–22, one responsibility
  each — §5).
- ✓ Stable evolution methodology (Principle 22 + the Axiom — §6).
- ✓ Stable decision process (one official Decision Flow — §1, §8).
- ✓ Stable documentation (ADR-000, `docs/ARCHITECTURE.md`,
  `docs/AI_CORE_CHECKLIST.md`, `design-domain/README.md` all consistent).
- ✓ Stable Principle hierarchy (§9, Principle Dependency Graph).
- ✓ Stable architectural vocabulary (`Reuse`/`Metadata`/`Composition`/
  `Registry`/`Top-level Contract` used identically everywhere they
  appear).

`docs/ARCHITECTURE.md` gained a short "Phase 7.1.1a" note under Phase 7.
`docs/AI_CORE_CHECKLIST.md` gained matching consolidation checks.
`design-domain/README.md` §8–§10 were corrected to point at the single
flow here instead of restating a second version. Prompt Engine, Prompt
Domain, Knowledge Core, Knowledge Registry, Rule Engine, Formatter,
Pipeline, Builder, `PromptDraft`, Style Registry, Developer Studio,
Benchmark, Production, the API, the UI, and SpaceType are untouched — no
runtime behavior changed anywhere. `npm run build` passes.
