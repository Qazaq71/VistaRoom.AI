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

## Реализация (DS-6.5) — PromptDraft / PromptDraftBuilder

DS-6.5 добавляет a **parallel, still-unwired** entry point into Prompt
Engine, separate from `PromptBuilder`/`DefaultPromptBuilder` above: a
`PromptContext` → `PromptDraft` compiler stage. It is explicitly not an
enrichment of `PromptContext` — `PromptContext` itself is untouched by
this stage (Principle 15 continues to apply to it; DS-6.5 just doesn't
touch it at all).

### `PromptDraft.ts` — the AST

`PromptDraft` is the intermediate representation Rule Engine (once
retargeted, not yet) and Formatter (DS-6.6, not yet built) will read and
transform next. It is an object of nine independent, strictly-typed
sections — one per `PromptContext` sub-context:

```ts
type PromptDraft = {
  style: StyleSection;
  room: RoomSection;
  materials: MaterialSection;
  furniture: FurnitureSection;
  lighting: LightingSection;
  decor: DecorSection;
  constraints: ConstraintSection;
  negative: NegativeSection;
  metadata: MetadataSection;
};
```

No field on `PromptDraft` or on any section is a `string`, a `string[]`,
or a template literal that assembles one. There is no `join()`,
`concat()`, template string, or `+=` anywhere in `sections/**`,
`PromptDraft.ts`, or `PromptDraftBuilder.ts`.

### `sections/*.ts` — one model per concern

Each section (`StyleSection`, `RoomSection`, `MaterialSection`,
`FurnitureSection`, `LightingSection`, `DecorSection`,
`ConstraintSection`, `NegativeSection`, `MetadataSection`) is its own
file/type. Deliberate design choice for DS-6.5: **every field on every
section is a direct copy of a field that already exists on the matching
Prompt Domain context** (`StyleContext`, `RoomContext`, `MaterialContext`,
...) — minus each context's `BaseDomainContext` bookkeeping
(`version`/`createdAt`/`metadata`), which belongs to `PromptContext`, not
to the draft AST.

This was a conscious deviation from the illustrative field lists in the
DS-6.5 brief (e.g. `StyleSection.goals`, `RoomSection.roomFeatures`,
`RoomSection.architecture`, `MaterialSection.finishes`/`textures`,
`FurnitureSection.primaryFurniture`/`secondaryFurniture`): none of those
fields exist anywhere in `PromptContext` today, so a no-logic, copy-only
builder cannot populate them without inventing placeholder data. See
"Architecture Review — DS-6.5" below, point 4.

### `PromptDraftBuilder.ts` — the identity compiler

```ts
class PromptDraftBuilder {
  build(context: Readonly<PromptContext>): PromptDraft {
    return {
      style: { generationMode: context.style.generationMode, style: context.style.style, myStyle: context.style.myStyle },
      // ...one property-by-property copy per section, no transformation
    };
  }
}
```

It does exactly one thing: reads each field off `Readonly<PromptContext>`
and places it on the matching `PromptDraft` section. No defaults, no
derived fields, no merging across sections, no rule logic. It does not
implement the existing `PromptBuilder` interface (`../types.ts`) — that
contract's return type is `PromptContext`, not `PromptDraft`; this is a
deliberately separate, parallel contract for a different artifact.

`PromptDraftBuilder` imports only:

- `../../prompt-domain` (`PromptContext` and its sub-context types) —
  type-only;
- `../../styles/types` (`InteriorStyle`, `InteriorMyStyle`, via
  `StyleSection.ts`) — type-only;
- `./PromptDraft` and `./sections/*` — its own output types.

Nothing else. No Rule Engine (`../rules/**`), no Formatter
(`../formatter/**`), no Pipeline (`../pipeline/**`), no Knowledge Base
(`../../knowledge/**`), no Developer Studio, no React, no API.

### Статус

`PromptDraft`/`PromptDraftBuilder` are not called from any production
code, not called from `RuleEngine`/`DefaultRuleEngine`, not exported from
`PromptBuilderFactory.ts`, and not re-exported from
`prompt-engine/index.ts` — consistent with how `DefaultPromptBuilder` and
`DefaultRuleEngine` were introduced in earlier stages. Следующий этап —
**DS-6.6 Formatter**.

## Architecture Review — DS-6.5

Ревизия, запрошенная как обязательная часть DS-6.5. Рекомендации ниже
**не применены к коду** на этом этапе — они зафиксированы как вход для
DS-6.6 (Formatter) и, при необходимости, отдельного этапа очистки
Builder.

**1. Есть ли в `PromptDraft` поля, дублирующие `PromptContext` /
`StyleKnowledge` / `KnowledgeFeature` / `InteriorStyle`?**

Да, структурно. Каждая секция (`StyleSection`, `RoomSection`, ...)
повторяет набор полей соответствующего Prompt Domain контекста
(`StyleContext`, `RoomContext`, ...) практически один в один — это ровно
тот паттерн, который Principle 19 называет нарушением ("`MaterialContextV2`
— если уже существует `MaterialFeature`"), только на один уровень выше:
`StyleSection` рядом с `StyleContext`, `RoomSection` рядом с `RoomContext`,
и так для всех девяти. `StyleSection.style`/`myStyle` также транзитивно
дублируют форму `InteriorStyle`/`InteriorMyStyle` (уже дублируемую и
`StyleContext` — это существующее, принятое решение Prompt Domain, не
новое).

Устранение без изменения кода сейчас: на DS-6.6 заменить каждую
`sections/*.ts` на **тонкую композицию**, а не независимый тип —
`export type StyleSection = StyleContext;` (или `{ context: StyleContext }`,
если секции нужно нести что-то ещё) вместо переобъявления полей. Это
превращает "девять новых моделей" в "девять именованных проекций
существующих контекстов" — сохраняет форму `PromptDraft` (девять секций,
объект, не строка), но убирает дублирование. Само по себе слияние — не
DS-6.5 задача (см. п.3 ниже), а решение для DS-6.6/следующего Builder
этапа.

**2. Достаточно ли `PromptDraft` универсален для будущих вертикалей
(ландшафт, экстерьеры, коммерция, яхты)?**

Частично. Поля, скопированные без изменений с `PromptContext`, наследуют
его существующий уровень универсальности — `RoomContext.roomType: string`
уже не завязан на интерьер жёстко (это может быть "yacht deck",
"landscape plot"), как и `MaterialReference`/`FurnitureReference`
(`id`/`name`/`role`). Единственное по-настоящему интерьер-специфичное
имя — сам файл/тип `RoomSection` и поле `PromptDraft.room` (что для
ландшафта или экстерьера означало бы "помещение", которого может не
быть) — но это то же ограничение, что уже есть в `PromptContext.room`
сегодня, не новое, привнесённое DS-6.5. Ничего в `sections/*.ts` не
добавляет нового, более узкого предположения поверх того, что уже
существует.

**3. Не появилась ли тенденция создавать Section-модели там, где лучше
использовать композицию через существующие Entity/Feature (Principle
19)?**

Да — см. п.1. Задача DS-6.5 явно предписывала "каждая секция — отдельная
модель" (девять файлов, девять типов), и реализация выполнена буквально
так. Но по факту ни одна секция не описывает новую предметную область —
каждая один в один соответствует уже существующему `*Context` из Prompt
Domain. По правилу Principle 19 ("новая модель допускается только если
она (а) описывает новую предметную область и (б) не может быть выражена
через существующую сущность") — ни одна из девяти секций не проходит
пункт (а). Практическое следствие: DS-6.5 реализован как запрошено (для
дать `PromptDraft` его собственную, независимо читаемую форму до
появления Rule Engine/Formatter, работающих над ним), но самих
Section-типов в текущем виде не должно быть более одного релиза — до
DS-6.6 их стоит заменить композицией/алиасами, как в п.1.

**4. Есть ли поля, которые лучше оставить пустыми до DS-6.6, чем
заполнять заглушками?**

Да, и это уже отражено в реализации, а не отложено: иллюстративные поля
из ТЗ DS-6.5 (`StyleSection.goals`, `RoomSection.roomFeatures`,
`RoomSection.architecture`, `MaterialSection.finishes`/`textures`,
`FurnitureSection.primaryFurniture`/`secondaryFurniture`) **не были
добавлены** ни в одну секцию — ни как заглушки (`[]`/`undefined`), ни как
частично реализованные. Ни один из них не существует в `PromptContext`
сегодня; добавление их сейчас потребовало бы либо придумывать данные (что
превращает "identity builder" в builder с логикой), либо всегда
возвращать пустые значения без единого потребителя — оба варианта
запрещены брифом DS-6.5 ("никакой логики", "никакой генерации"). Эти поля
— явный кандидат для DS-6.6+ (Rule Engine/Knowledge-derived enrichment),
не для Builder.

**5. `PromptDraft` — действительно AST, а не скрытая prompt-строка?**

Да. Ни в `PromptDraft.ts`, ни в одном файле `sections/*.ts` нет поля типа
`string`, кроме доменных строковых идентификаторов, которые уже были
строками в `PromptContext` (`RoomSection.roomType`, `RoomSection.roomName`,
`FurnitureSection.layout`, `LightingSection.lightingType`,
`NegativeSection.negativePrompts: string[]`, `MetadataSection.provider`/
`model`/`version`/`createdAt`) — ни одно из них не является частью
собираемого промпта; каждое уже существовало как отдельное поле данных в
соответствующем Prompt Domain контексте до DS-6.5. Ни `join()`,
`concat()`, template string, ни `+=` не встречаются нигде в
`PromptDraft.ts`, `sections/**` или `PromptDraftBuilder.ts` —
подтверждено ручным просмотром каждого файла.
