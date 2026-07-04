# Builder

## Ответственность

Builder отвечает за сборку/дополнение `PromptContext` перед тем, как он
попадёт в Rules и Formatter: заполнение значений по умолчанию, слияние
данных стиля, вывод производных полей под-контекстов.

Контракт: `PromptBuilder` (см. `../types.ts`).

- Получает: `Readonly<PromptContext>`
- Возвращает: `PromptContext` (новый экземпляр)

## Чего Builder не делает

- **Не строит строки.** Ни `positivePrompt`, ни `negativePrompt`, ни
  любая другая строка не появляется внутри Builder — это ответственность
  Formatter (`../formatter/README.md`).
- **Не знает про GPT/OpenAI/FLUX/Gemini/Claude/ComfyUI** — вообще ни про
  одну конкретную AI-модель или провайдера (ADR-000 Principle 14). Только
  про `PromptContext`.
- **Не знает про Formatter.** Builder ничего не импортирует из
  `../formatter` и не вызывает его — Pipeline (`../pipeline`) решает, что
  вызывать после Builder, сам Builder об этом не знает.
- **Никогда не вызывает Rules и не знает про Rule Engine** (`ADR-000`
  [Principle 17 — Builder не вызывает Rules](../../../../../docs/adr/ADR-000-Architecture-Principles.md),
  DS-6.2.1). Builder ничего не импортирует из `../rules` и не знает про
  `PromptRule`, `PromptRuleSet` или `PromptPipeline`. Builder только
  создаёт/нормализует `PromptContext` и возвращает его — где заканчивается
  его работа и начинается Rule Engine (`../rules`), решает исключительно
  Pipeline, а не Builder.
- **Не знает про Style Registry, Developer Studio, Generation Engine,
  Provider, API, React, Next.js** — только про `PromptContext`
  (`src/lib/interior/prompt-domain`).
- **Не содержит бизнес-правил трансформации** — это ответственность Rules
  (`../rules/README.md`).
- **Не мутирует входной `PromptContext`** — возвращает новый экземпляр
  ([ADR-000 Principle 15 — PromptContext immutable](../../../../../docs/adr/ADR-000-Architecture-Principles.md)).
  Контракт `PromptBuilder.build` принимает `Readonly<PromptContext>`;
  разрешённый паттерн — `return { ...context, ... }`, запрещённый —
  `context.style = ...`.

## Реализация (DS-6.2)

### `PromptBuilder.ts` — `DefaultPromptBuilder`

Первая реализация контракта `PromptBuilder`. На этом этапе она ничего не
"улучшает" — это **identity builder**:

```ts
class DefaultPromptBuilder implements PromptBuilder {
  build(context: Readonly<PromptContext>): PromptContext {
    return { ...context };
  }
}
```

Она:

- создаёт новый `PromptContext` (новый объект, `{ ...context }`);
- копирует все существующие поля без изменений;
- не читает и не изменяет входной объект — только читает его для
  копирования;
- не добавляет значения по умолчанию, не выводит производные поля, не
  сливает данные стиля — это будущая работа (DS-6.3+, Rule Engine и
  последующие Builder).

Это осознанно неполная реализация: цель DS-6.2 — доказать, что контракт
`PromptBuilder` (`Readonly<PromptContext>` → новый `PromptContext`)
работает end-to-end, прежде чем добавлять любую реальную логику
обогащения.

### `PromptBuilderFactory.ts` — `createPromptBuilder()`

```ts
function createPromptBuilder(): PromptBuilder {
  return new DefaultPromptBuilder();
}
```

На DS-6.2 всегда возвращает `DefaultPromptBuilder` — других реализаций
ещё нет. Это подготовка к будущим Builder, каждый из которых будет
специализирован под конкретный `PromptGenerationMode`/сценарий:

- `InteriorPromptBuilder`
- `FurniturePromptBuilder`
- `ReplacePromptBuilder`
- `CleanRoomPromptBuilder`
- `RoomAnalysisPromptBuilder`

Когда они появятся, `createPromptBuilder()` станет диспетчером
(например, по `PromptGenerationMode` или другому полю `PromptContext`),
и ни один вызывающий код не должен будет измениться — сигнатура
`createPromptBuilder(): PromptBuilder` уже рассчитана на это.

## Зависимости

`PromptBuilder.ts` и `PromptBuilderFactory.ts` импортируют только:

- `../../prompt-domain` (`PromptContext`) — type-only;
- `../types` (`PromptBuilder` interface) — type-only;
- друг друга (`PromptBuilderFactory.ts` → `PromptBuilder.ts`).

Ничего больше. В частности — никакого React, Next.js, Provider,
Generation Engine, Developer Studio, Benchmark или Formatter.

## Статус

DS-6.1: только контракт `PromptBuilder` в `../types.ts`.

**DS-6.2 (текущий этап): первая реализация.**

- `PromptBuilder.ts` — `DefaultPromptBuilder` (identity builder).
- `PromptBuilderFactory.ts` — `createPromptBuilder()`, всегда
  возвращающая `DefaultPromptBuilder`.

Не подключено ни к чему: публичный сайт, API, `buildEditPrompt()`,
`prompts.ts`, Prompt Domain, Generation Engine, Provider, Developer
Studio и Benchmark не затронуты. Builder не вызывается из production-кода.

DS-6.2.1 (Rule Engine Preparation): реализация Builder (`PromptBuilder.ts`,
`PromptBuilderFactory.ts`) не менялась — этап только зафиксировал границу
"Builder не вызывает Rules" (`ADR-000` Principle 17) в документации, до
того как появится Rule Engine.

DS-6.3/6.3.1 (Rule Engine), DS-6.4/6.4.1/6.4.2 (Knowledge Core) и DS-6.4.3
(ADR-000 Principle 19) не меняли `builder/**` — см. `../README.md` и
`docs/ARCHITECTURE.md`.

## Реализация (DS-6.5, revised DS-6.5.1) — PromptDraft / PromptDraftBuilder

DS-6.5 added a **parallel, still-unwired** entry point into Prompt
Engine, separate from `PromptBuilder`/`DefaultPromptBuilder` above: a
`PromptContext` → `PromptDraft` compiler stage. It is explicitly not an
enrichment of `PromptContext` — `PromptContext` itself is untouched by
this stage and remains untouched after DS-6.5.1 (Principle 15 continues
to apply to it).

DS-6.5's first cut introduced nine independent "Section" types
(`StyleSection`, `RoomSection`, `MaterialSection`, `FurnitureSection`,
`LightingSection`, `DecorSection`, `ConstraintSection`, `NegativeSection`,
`MetadataSection`, under `./sections/`) that structurally re-declared the
fields of the matching Prompt Domain context. That stage's own
"Architecture Review — DS-6.5" section (kept in git history, removed from
this file) flagged this as an ADR-000 Principle 19 (Composition over
Duplication) violation. **DS-6.5.1 (this revision) removes `./sections/`
entirely and replaces it with direct composition.**

### `PromptDraft.ts` — the AST, now a composition of existing contexts

```ts
type PromptDraft = {
  readonly room: RoomContext;
  readonly style: StyleContext;
  readonly materials: MaterialContext;
  readonly furniture: FurnitureContext;
  readonly lighting: LightingContext;
  readonly decor: DecorContext;
  readonly constraints: ConstraintContext;
  readonly negative: NegativePromptContext;
  readonly metadata: PromptMetadata;
};
```

Every field's type is imported unchanged from `../../prompt-domain` — no
new type is declared for any of the nine slots. `PromptDraft` is a
**container**, not a domain model: it names the same nine concerns
`PromptContext` already has (under the same keys, except `negative` for
`context.negativePrompt` — a rename kept for readability; the *type*
is still exactly `NegativePromptContext`). `metadata` is typed
`PromptMetadata` (not the narrower `MetadataContext`) because that is the
actual type of `PromptContext.metadata` — narrowing it here would drop
`qualityLevel` for no reason.

No field anywhere is a `string`, a `string[]` that assembles into one, or
a template literal. There is no `join()`, `concat()`, template string, or
`+=` anywhere in `PromptDraft.ts` or `PromptDraftBuilder.ts`.

### `PromptDraftBuilder.ts` — the identity compiler

```ts
class PromptDraftBuilder {
  build(context: Readonly<PromptContext>): PromptDraft {
    return {
      room: context.room,
      style: context.style,
      materials: context.materials,
      furniture: context.furniture,
      lighting: context.lighting,
      decor: context.decor,
      constraints: context.constraints,
      negative: context.negativePrompt,
      metadata: context.metadata,
    };
  }
}
```

It does exactly one thing: places each `PromptContext` sub-context onto
the matching `PromptDraft` key — referential composition, not a
field-by-field copy (DS-6.5's version copied each field individually into
a new section object; DS-6.5.1 removes that indirection since the section
types it copied into no longer exist). No defaults, no derived fields, no
merging, no rule logic, no deep clone. It does not implement the existing
`PromptBuilder` interface (`../types.ts`) — that contract's return type
is `PromptContext`, not `PromptDraft`; this remains a deliberately
separate, parallel contract for a different artifact.

`PromptDraftBuilder` imports only:

- `../../prompt-domain` (`PromptContext` and, via `PromptDraft.ts`, its
  sub-context types) — type-only;
- `./PromptDraft` — its own output type.

Nothing else. No Rule Engine (`../rules/**`), no Formatter
(`../formatter/**`), no Pipeline (`../pipeline/**`), no Knowledge Base
(`../../knowledge/**`), no Developer Studio, no React, no API, and (since
DS-6.5.1) no `./sections/**` — that directory no longer exists.

### Статус

`PromptDraft`/`PromptDraftBuilder` are re-exported from
`prompt-engine/index.ts` as of DS-6.5.1 (type-only for `PromptDraft`,
value + type for `PromptDraftBuilder`) so Formatter (DS-6.6) can import
them from the module root — this is the one intentional deviation from
the DS-6.1–DS-6.4.3 precedent of not re-exporting implementations, made
because DS-6.5.1 explicitly asked for it. Neither is called from any
production code, from `RuleEngine`/`DefaultRuleEngine`, or from
`PromptBuilderFactory.ts`. Следующий этап — **DS-6.6 Formatter**.

## Architecture Review — DS-6.5.1

Ревизия, запрошенная как обязательная часть DS-6.5.1. Отвечает на
вопросы из этапа; ничего в коде не менялось по итогам самой ревизии — все
изменения, которые она подтверждает, уже сделаны разделами выше.

**1. Устранено ли дублирование между `PromptDraft` и `PromptContext`?**

Да. `PromptDraft` больше не объявляет ни одного нового поля — каждый его
ключ (`room`, `style`, `materials`, `furniture`, `lighting`, `decor`,
`constraints`, `negative`, `metadata`) типизирован напрямую существующим
Prompt Domain типом (`RoomContext`, `StyleContext`, ...,
`NegativePromptContext`, `PromptMetadata`), импортированным, а не
переобъявленным. `PromptDraftBuilder` присваивает эти поля по ссылке
(`room: context.room`), а не копирует их значения в новую форму.

**2. Остались ли Section-модели?**

Нет. `builder/sections/` удалена целиком (все девять файлов:
`StyleSection.ts`, `RoomSection.ts`, `MaterialSection.ts`,
`FurnitureSection.ts`, `LightingSection.ts`, `DecorSection.ts`,
`ConstraintSection.ts`, `NegativeSection.ts`, `MetadataSection.ts`), не
оставлено пустых файлов-заглушек, и ни один из них не переэкспортируется
из `PromptDraft.ts`, `index.ts` или где-либо ещё.

**3. `PromptDraft` теперь является композицией существующих Context?**

Да. Все девять полей — это existing Prompt Domain sub-context types,
использованные как есть. `PromptDraft` не описывает новую предметную
область — он лишь называет девять слотов, под которыми существующие
контексты становятся доступны как единый AST-объект для будущих Rule
Engine/Formatter шагов.

**4. Есть ли новые модели, которые дублируют Prompt Domain?**

Нет. Единственный новый тип, введённый DS-6.5/DS-6.5.1 — сам
`PromptDraft` (контейнер), и он не дублирует ничего: не переопределяет ни
одного поля ни одного контекста, только группирует их. Никакой второй
`PromptDraft`-подобный тип нигде не создан.

**5. Подтверждается ли Principle 19?**

Да. Проверка по порядку (Feature → Entity → Relation → Context →
Registry) для "нового" функционала DS-6.5.1 показывает: существующие
Prompt Domain `Context`-типы полностью выражают то, что было нужно
`PromptDraft` — новая модель не потребовалась ни для одной из девяти
секций. Единственная причина, по которой `PromptDraft` как тип
существует — это агрегирующий контейнер (аналог AST-узла верхнего
уровня), а не параллельная предметная модель; это не нарушает Principle
19, так как сам принцип запрещает дублирование существующих
Entity/Feature/Relation/Context, а не любое агрегирование их в новый
контейнер.
