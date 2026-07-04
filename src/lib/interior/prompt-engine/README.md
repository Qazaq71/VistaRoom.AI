# Prompt Engine (DS-6.1 Foundation + DS-6.1.1 Contracts + DS-6.2 Builder MVP + DS-6.2.1 Rule Engine Preparation + DS-6.3 Rule Engine Foundation + DS-6.3.1 Rule Engine Diagnostics & Metadata + DS-6.4/6.4.1/6.4.2 Knowledge Core + DS-6.4.3 Principle 19 + DS-6.5 Prompt Draft / Builder Intelligence Layer + DS-6.5.1 PromptDraft Composition Refactor)

## 1. Что это такое

Prompt Engine — модуль, который в будущем соберёт `PromptContext`
(Prompt Domain, DS-5) в финальный текстовый `positivePrompt` +
`negativePrompt` для Generation Engine. На этом этапе (DS-6.1, Foundation)
он **не генерирует текст** и не содержит ни одной реализации — только
контракты (`interface`/`type`) в `types.ts` и структура директорий с
README, описывающими ответственность каждого будущего слоя.

Prompt Engine работает исключительно с `PromptContext` из
`src/lib/interior/prompt-domain`. Он не знает про GPT, OpenAI, FLUX,
API, React, Developer Studio, Generation Engine, Provider или Benchmark.

## 2. Архитектурная схема

```
Style Registry              (src/lib/interior/styles, DS-4)
  ↓
Prompt Domain                (src/lib/interior/prompt-domain, DS-5) — PromptContext
  ↓
Prompt Builder                (./builder)   — enrich PromptContext → PromptContext
  ↓
Prompt Rules                   (./rules)     — transform PromptContext → PromptContext
  ↓
Prompt Formatter                (./formatter) — PromptContext → PromptResult (строки)
  ↓
Generation Request               (positivePrompt / negativePrompt)
  ↓
Generation Engine
  ↓
Provider
  ↓
Model
```

`Pipeline` (`./pipeline`) — не отдельный слой данных, а оркестратор,
последовательно вызывающий Builder → Rules → Formatter.
`Validators` (`./validators`) и `Templates` (`./templates`) — вспомогательные
контракты, используемые Pipeline/Builder на будущих этапах.

## 2.1. Prompt compilation flow (DS-6.5, revised DS-6.5.1)

С появлением `PromptDraft` (`./builder/PromptDraft.ts`) полный путь от
доменных данных до текста провайдера — это конвейер трансформаций одного
внутреннего представления, а не однократная сборка строки:

```
PromptContext
  ↓          (PromptDraftBuilder — чистая композиция, ссылки без копирования)
PromptDraft   (composed of existing Prompt Domain Context types)
  ↓          (Rules — DS-6.3+, ещё работают над PromptContext,
  ↓           переориентация на PromptDraft не выполнена)
PromptDraft
  ↓          (Formatter — DS-6.6, ещё не реализован)
PromptString  (PromptResult: positivePrompt / negativePrompt)
```

`PromptDraft` — это AST-контейнер: типизированный объект, поля которого —
существующие Prompt Domain контексты (`RoomContext`, `StyleContext`,
`MaterialContext`, `FurnitureContext`, `LightingContext`, `DecorContext`,
`ConstraintContext`, `NegativePromptContext`, `PromptMetadata`), а не
строка, не массив строк и не отдельные Section-модели (DS-6.5 вводил
`StyleSection`/`RoomSection`/... — удалены на DS-6.5.1 как дублирование
Prompt Domain, см. ADR-000 Principle 19). Ни один шаг до Formatter не
производит текст промпта — см. `builder/README.md` "Architecture Review
— DS-6.5.1" за деталями.

## 3. Ответственность каждого слоя

- **Builder** (`./builder`) — дополняет/обогащает `PromptContext`
  (значения по умолчанию, данные стиля, производные поля). Получает и
  возвращает `PromptContext`. Ничего не знает про строки.
- **Rules** (`./rules`) — маленькие композируемые шаги трансформации
  `PromptContext` (ограничения, нормализация, доменные корректировки).
  Получает и возвращает `PromptContext`. Каждое правило несёт
  `readonly metadata` (`PromptRuleMetadata`: `id`, `name`, `description`,
  `enabled`, `priority`, DS-6.3.1) — сейчас только документация/резерв на
  будущее, ничем не используется. Правила можно логически группировать в
  **`RuleSet`** (тип `PromptRuleSet`, DS-6.2.1; например, будущие
  `InteriorRuleSet`, `LightingRuleSet`, `FurnitureRuleSet`,
  `MaterialRuleSet`, `DecorRuleSet`, `ConstraintRuleSet`,
  `MyStyleRuleSet`) — группировка не даёт правилам внутри набора знания
  друг о друге или о порядке выполнения. С DS-6.3 в `./rules` есть также
  **Rule Engine** (`RuleEngine`/`DefaultRuleEngine`/`RuleRegistry`) —
  применяет `PromptRule`ы одного `RuleSet` по порядку. См.
  `rules/README.md`.
- **Formatter** (`./formatter`) — единственное место, где в будущем
  появится логика построения текста. Получает `PromptContext`,
  возвращает `PromptResult` (`positivePrompt`, `negativePrompt`).
- **Pipeline** (`./pipeline`) — оркестратор: Builder → Rules → Formatter.
  Получает `PromptContext`, возвращает `PromptResult`. Не содержит
  собственной бизнес-логики.
- **Validators** (`./validators`) — проверяют корректность/полноту
  `PromptContext`. Не изменяют его, не строят строки.
- **Templates** (`./templates`) — именованные, переиспользуемые формы
  трансформации `PromptContext` (например, набор правил под конкретный
  `PromptGenerationMode`). Получают и возвращают `PromptContext`.

## 4. Почему Prompt Engine не зависит ни от чего кроме Prompt Domain

Каждый слой выше специально ограничен контрактом "`PromptContext` →
`PromptContext`" (Builder, Rules, Templates) или "`PromptContext` →
`PromptResult`" (Formatter, Pipeline). Это гарантирует, что Prompt Engine
можно вызывать одинаково из публичного сайта, Developer Studio, Prompt
Lab (DS-7) или Benchmark — без единой прямой зависимости в обратную
сторону. См. чек-лист [`docs/AI_CORE_CHECKLIST.md`](../../../../docs/AI_CORE_CHECKLIST.md).

## 5. Почему это не PromptContext и не Style Registry

`PromptContext` (Prompt Domain, DS-5) — это данные: "что нужно
сгенерировать". Prompt Engine — это поведение: "как превратить эти
данные в текст для провайдера". Prompt Engine не создаёт свою версию
`PromptContext` и не хранит собственный список стилей — он только
потребляет то, что уже собрано в Prompt Domain / Style Registry.

## 6. Architecture Guarantees (DS-6.1.1 + DS-6.2.1)

Зафиксированные [ADR-000](../../../../docs/adr/ADR-000-Architecture-Principles.md)
принципы 14–18, которые обязана держать любая будущая реализация Builder,
Rules, Formatter и Pipeline:

- **AI-agnostic Engine** (Principle 14). Prompt Engine не знает про GPT,
  OpenAI, FLUX, Gemini, Claude, ComfyUI или локальные модели — только про
  `PromptContext`. Какая именно AI-модель используется — знает только
  Provider.
- **Immutable PromptContext** (Principle 15). Builder, Rules и Pipeline
  никогда не мутируют существующий `PromptContext`. Каждый шаг
  возвращает новый экземпляр. Запрещено: `context.style = ...`.
  Разрешено: `return { ...context, ... }`. На уровне типов это отражено
  тем, что `PromptBuilder.build`, `PromptRule.apply`,
  `PromptFormatter.format`, `PromptValidator.validate`,
  `PromptTemplate.apply` и `PromptPipeline.run` (`types.ts`) принимают
  `Readonly<PromptContext>`.
- **Independent Rules** (Principle 16). Любое правило не знает о других
  правилах, не вызывает другие правила и не зависит от порядка
  выполнения. Единственное место, где определяется последовательность
  применения правил — `PromptPipeline`.
- **Single Formatter** (Principle 6). Строки промпта появляются только
  внутри Formatter — ни Builder, ни Rules, ни Pipeline, ни Validators, ни
  Templates не строят текст.
- **Pipeline orchestration** (Principle 16). `PromptPipeline` — единственный
  оркестратор: он и только он решает, в каком порядке вызывать Builder →
  Rules → Formatter. Сами Rules об этом порядке ничего не знают.
- **Builder не вызывает Rules** (Principle 17, DS-6.2.1). `PromptBuilder`
  только создаёт/нормализует `PromptContext` и не импортирует, не
  вызывает и вообще не знает о `PromptRule`, `PromptRuleSet` или
  `PromptPipeline`. После Builder начинается Rule Engine — но это знает
  только Pipeline, не сам Builder.
- **Rule priority — metadata, не логика** (Principle 18, DS-6.2.1). Если
  где-либо появляется поле `priority` (например, на `PromptRuleSet`),
  это данные, которые может прочитать только `PromptPipeline` для
  сортировки. Ни одно правило не читает свой или чужой `priority`;
  сортировка по нему не реализована.
- **Composition over Duplication** (Principle 19, DS-6.4.3; применено к
  `PromptDraft` в DS-6.5.1). `PromptDraft` — фиксированная композиция
  девяти существующих Prompt Domain контекстов, без Section-моделей. См.
  [ADR-000 "Update — DS-6.5.2 PromptDraft Evolution Strategy"](../../../../docs/adr/ADR-000-Architecture-Principles.md)
  за документированным (но не выполняемым сейчас) направлением будущей
  эволюции этой композиции при значительном росте числа вертикалей —
  это не технический долг и не рекомендация к текущей реализации, а
  зафиксированная возможность на случай объективной необходимости.
- **Evolution over Rewrite** (Principle 20, DS-6.5.3). Архитектура растёт
  постепенной миграцией, а не разрушительным переписыванием. См. "6.1
  Architecture Evolution" ниже за тем, как это применяется конкретно к
  Prompt Engine.

## 6.1. Architecture Evolution (DS-6.5.3)

Prompt Engine развивается эволюционно (ADR-000 Principle 20 — Evolution
over Rewrite), а не через разовое переписывание. Практическое следствие
для этого модуля:

- Builder, Rules, Formatter и Pipeline — независимые контракты
  (`types.ts`), и каждый может заменяться отдельно от остальных: замена
  Formatter не требует переписывать Builder или Rules, и наоборот.
- Новые реализации предпочтительно вводятся **параллельно** существующим,
  а не вместо них, пока миграция не завершена — ровно так уже появился
  `PromptDraft` (DS-6.5/6.5.1) рядом с `PromptBuilder`/`DefaultPromptBuilder`
  (DS-6.2): второй путь не удалён и не изменён, оба существуют
  одновременно.
- Тот же принцип действует и в обратную сторону, для будущих этапов:
  когда Rule Engine (`./rules`) будет переориентирован на `PromptDraft`,
  а Formatter (DS-6.6) — построен, `PromptContext`-ориентированный путь
  (`PromptBuilder`, сегодняшний `RuleEngine.applyRules`) не обязан
  исчезнуть в тот же момент — решение о том, когда и как его свернуть,
  принимается отдельно, с учётом чек-листа Principle 20 (ADR-000), а не
  автоматически при появлении замены.

## 7. Статус на DS-6.1 / DS-6.1.1 / DS-6.2 / DS-6.2.1 / DS-6.3 / DS-6.3.1

DS-6.1 (Foundation) + DS-6.1.1 (Architecture Contracts) — только
структура и контракты:

- `types.ts` — все семь типов (`PromptResult`, `PromptBuilder`,
  `PromptFormatter`, `PromptRule`, `PromptValidator`, `PromptTemplate`,
  `PromptPipeline`), с сигнатурами методов, принимающими
  `Readonly<PromptContext>` (DS-6.1.1, immutability на уровне типов).
- `index.ts` — публичный экспорт этих типов.
- `builder/`, `formatter/`, `rules/`, `pipeline/`, `validators/`,
  `templates/` — по одному `README.md` с описанием ответственности.

**DS-6.2 (текущий этап) — Prompt Builder MVP:**

- `builder/PromptBuilder.ts` — первая реализация контракта
  `PromptBuilder`: `DefaultPromptBuilder`, identity builder (копирует
  `PromptContext` без изменений, ничего не обогащает).
- `builder/PromptBuilderFactory.ts` — `createPromptBuilder()`, пока
  всегда возвращающая `DefaultPromptBuilder`; подготовка к будущим
  специализированным Builder (Interior/Furniture/Replace/CleanRoom/
  RoomAnalysis). См. `builder/README.md`.

`formatter/`, `pipeline/`, `validators/`, `templates/` — всё ещё только
контракты, без реализации.

**DS-6.2.1 — Rule Engine Preparation:**

- `types.ts` — добавлен тип `PromptRuleSet` (`{ id, name, rules:
  PromptRule[], priority?: number }`) — организационная группировка
  `PromptRule`, без реализации; `priority` — опциональная metadata для
  будущего Pipeline, не логика правила.
- `ADR-000` — добавлены Principle 17 (Builder не вызывает Rules) и
  Principle 18 (Rule priority — metadata, не логика).
- `docs/AI_CORE_CHECKLIST.md` — добавлены соответствующие пункты.
- `builder/README.md`, `rules/README.md`, `pipeline/README.md` —
  обновлены: зафиксированы граница Builder/Rule Engine, концепция
  `RuleSet` и статус `priority` как metadata.
- Никакой реализации Rules, RuleEngine, RuleRegistry или сортировки не
  создано.

**DS-6.3 (текущий этап) — Rule Engine Foundation:**

- `rules/RuleEngine.ts` — контракт `RuleEngine.applyRules(context,
  ruleSet)`; отдельный, более узкий контракт, чем `PromptPipeline` — он
  владеет только шагом "Rules" будущего Pipeline.
- `rules/DefaultRuleEngine.ts` — первая реализация: последовательно
  применяет `ruleSet.rules`, корректно работает при пустом массиве
  правил (возвращает новый `PromptContext` без изменений).
- `rules/RuleRegistry.ts` — `getRuleSet(id)`, с единственным
  зарегистрированным `DEFAULT_RULE_SET` (пустой `RuleSet`). См.
  `rules/README.md`.

Настоящих правил (`LightingRule`, `MaterialRule`, `FurnitureRule`,
`StyleRule`) по-прежнему нет — это DS-6.4 (Universal Interior Knowledge
Base). `formatter/`, `pipeline/`, `validators/`, `templates/` — всё ещё
только контракты, без реализации.

**DS-6.3.1 (текущий этап) — Rule Engine Diagnostics & Metadata:**

- `types.ts` — `PromptRule` расширен обязательным `readonly metadata:
  PromptRuleMetadata` (`id`, `name`, `description`, `enabled`,
  `priority` — всё `readonly`). `enabled`/`priority` зарезервированы на
  будущее и нигде не читаются; `id`/`name`/`description` — только
  документация.
- `types.ts` — добавлены `RuleResult` (`context`, опциональные
  `diagnostics`/`warnings`/`metrics`), `RuleDiagnostics` (`ruleId`,
  `message`, `severity: RuleDiagnosticSeverity`), `RuleMetrics`
  (`executionTime`, `changes`), `RuleTraceOptions` (`enableTrace`) —
  контракты для будущего Developer Studio / Benchmark / анализа качества
  Prompt Engine.
- `rules/RuleEngine.ts`, `rules/DefaultRuleEngine.ts`,
  `rules/RuleRegistry.ts` — **не изменялись**. `RuleEngine` продолжает
  работать напрямую с `PromptContext`: не читает `metadata`, не
  производит и не принимает `RuleResult`/`RuleDiagnostics`/`RuleMetrics`,
  не пишет trace. См. `rules/README.md` (раздел "Diagnostics").
- `docs/AI_CORE_CHECKLIST.md` — добавлены пункты, фиксирующие, что
  Rule Engine не использует metadata/diagnostics/trace.

Никакого текста, никакой интеграции. Публичный сайт, API, Developer
Studio, `buildEditPrompt()`, `prompts.ts`, Generation Engine, Provider,
Style Registry, Prompt Domain, Builder, Formatter, Pipeline и Benchmark
не затронуты. Rule Engine не вызывается из production-кода и работает
так же, как в DS-6.3.

DS-6.4/DS-6.4.1/DS-6.4.2 (Knowledge Core) и DS-6.4.3 (ADR-000 Principle
19) — см. `docs/ARCHITECTURE.md` Phase 6.4/6.4.1/6.4.2/6.4.3. Ни один из
них не менял `prompt-engine/**`.

**DS-6.5 — Prompt Draft / Builder Intelligence Layer:**

- `builder/PromptDraft.ts` — новый тип `PromptDraft`: промежуточное
  представление (AST) будущего промпта, изначально объект из девяти
  независимых, строго типизированных Section-моделей (`StyleSection`,
  `RoomSection`, `MaterialSection`, `FurnitureSection`, `LightingSection`,
  `DecorSection`, `ConstraintSection`, `NegativeSection`,
  `MetadataSection`, `builder/sections/*.ts`).
- `builder/PromptDraftBuilder.ts` — `PromptDraftBuilder.build(context)`:
  копировал `Readonly<PromptContext>` в `PromptDraft` поле за полем.

Собственная "Architecture Review — DS-6.5" (проведённая как обязательная
часть этапа) обнаружила, что все девять Section-моделей структурно
дублируют соответствующие Prompt Domain контексты — нарушение ADR-000
Principle 19 (Composition over Duplication). Исправлено на DS-6.5.1 ниже.

**DS-6.5.1 (текущий этап) — PromptDraft Composition Refactor:**

- `builder/sections/*.ts` — **удалены полностью** (все девять файлов), не
  оставлено заглушек.
- `builder/PromptDraft.ts` — переписан: девять полей (`room`, `style`,
  `materials`, `furniture`, `lighting`, `decor`, `constraints`,
  `negative`, `metadata`) теперь типизированы напрямую существующими
  Prompt Domain типами (`RoomContext`, `StyleContext`, `MaterialContext`,
  `FurnitureContext`, `LightingContext`, `DecorContext`,
  `ConstraintContext`, `NegativePromptContext`, `PromptMetadata`) —
  никаких новых Section-типов.
- `builder/PromptDraftBuilder.ts` — переписан: вместо копирования полей
  внутрь новых section-объектов, каждый ключ `PromptDraft` — прямая
  ссылка на соответствующий под-контекст `PromptContext`
  (`room: context.room`, ..., `negative: context.negativePrompt`).
- `index.ts` — впервые реэкспортирует реализацию Builder-слоя:
  `PromptDraft` (type-only) и `PromptDraftBuilder` (класс), в порядке
  подготовки к DS-6.6 Formatter.

`PromptDraftBuilder` по-прежнему не implements существующий контракт
`PromptBuilder` (`./types.ts`) — тот возвращает `PromptContext`, а не
`PromptDraft`; это осознанно отдельный, ещё не подключённый вход. Не
вызывает Rules, Formatter, Pipeline, Knowledge Base — ничего, кроме
`PromptContext` (ADR-000 Principle 14, 15, 17, 19). См.
`builder/README.md` (раздел "Architecture Review — DS-6.5.1").

Публичный сайт, API, `buildEditPrompt()`, `prompts.ts`, Prompt Domain,
Rule Engine, Generation Engine, Provider, Developer Studio и Benchmark не
затронуты. `PromptDraft`/`PromptDraftBuilder` не вызываются ни из
production-кода, ни из `RuleEngine`/`DefaultRuleEngine`,
`PromptBuilderFactory.ts`. Следующий этап — **DS-6.6 Formatter**.
