# Prompt Engine (DS-6.1 Foundation + DS-6.1.1 Architecture Contracts)

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

## 3. Ответственность каждого слоя

- **Builder** (`./builder`) — дополняет/обогащает `PromptContext`
  (значения по умолчанию, данные стиля, производные поля). Получает и
  возвращает `PromptContext`. Ничего не знает про строки.
- **Rules** (`./rules`) — маленькие композируемые шаги трансформации
  `PromptContext` (ограничения, нормализация, доменные корректировки).
  Получает и возвращает `PromptContext`.
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

## 6. Architecture Guarantees (DS-6.1.1)

Зафиксированные [ADR-000](../../../../docs/adr/ADR-000-Architecture-Principles.md)
принципы 14–16, которые обязана держать любая будущая реализация Builder,
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

## 7. Статус на DS-6.1 / DS-6.1.1 (Foundation + Architecture Contracts)

Создана только структура и контракты:

- `types.ts` — все семь типов (`PromptResult`, `PromptBuilder`,
  `PromptFormatter`, `PromptRule`, `PromptValidator`, `PromptTemplate`,
  `PromptPipeline`), с сигнатурами методов, принимающими
  `Readonly<PromptContext>` (DS-6.1.1, immutability на уровне типов).
- `index.ts` — публичный экспорт этих типов.
- `builder/`, `formatter/`, `rules/`, `pipeline/`, `validators/`,
  `templates/` — по одному `README.md` с описанием ответственности,
  без единой строки реализации.

Никакой логики, никакого текста, никакой интеграции. Публичный сайт,
API, Developer Studio, `buildEditPrompt()`, `prompts.ts`, Generation
Engine, Provider, Style Registry, Prompt Domain и Benchmark не
затронуты. Следующий этап — DS-6.2 Prompt Builder (первая реализация).
