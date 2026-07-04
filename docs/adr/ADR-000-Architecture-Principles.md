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
