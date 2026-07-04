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

Следующий этап — DS-6.3 Rule Engine (`../rules`).
