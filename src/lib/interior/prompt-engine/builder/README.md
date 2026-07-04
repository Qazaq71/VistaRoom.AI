# Builder

## Ответственность

Builder отвечает за сборку/дополнение `PromptContext` перед тем, как он
попадёт в Rules и Formatter: заполнение значений по умолчанию, слияние
данных стиля, вывод производных полей под-контекстов.

Контракт: `PromptBuilder` (см. `../types.ts`).

- Получает: `PromptContext`
- Возвращает: `PromptContext`

## Чего Builder не делает

- Не строит строки промпта — это ответственность Formatter
  (`../formatter/README.md`).
- Не знает про Style Registry, Developer Studio, Generation Engine,
  Provider, API, React — только про `PromptContext`.
- Не содержит бизнес-правил трансформации — это ответственность Rules
  (`../rules/README.md`).
- Не мутирует входной `PromptContext` — возвращает новый экземпляр
  (`ADR-000` [Principle 15 — PromptContext immutable](../../../../../docs/adr/ADR-000-Architecture-Principles.md)).
  Контракт `PromptBuilder.build` принимает `Readonly<PromptContext>`.

## Статус

Foundation (DS-6.1): только контракт `PromptBuilder` в `../types.ts`.
Реализация (`PromptBuilderImpl`) не создана — появится в DS-6.2.
