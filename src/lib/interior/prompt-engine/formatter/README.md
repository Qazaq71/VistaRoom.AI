# Formatter

## Ответственность

Formatter — единственное место во всём Prompt Engine, где в будущем
появится логика построения текстовых строк. Он превращает финальный,
уже собранный и проверенный `PromptContext` в `PromptResult`
(`positivePrompt` + `negativePrompt`), готовый для Generation Engine.

Контракт: `PromptFormatter` (см. `../types.ts`).

- Получает: `PromptContext`
- Возвращает: `PromptResult`

## Чего Formatter не делает

- Не изменяет `PromptContext` — это ответственность Builder
  (`../builder/README.md`) и Rules (`../rules/README.md`). Formatter
  только читает `PromptContext` (`ADR-000`
  [Principle 15 — PromptContext immutable](../../../../../docs/adr/ADR-000-Architecture-Principles.md)).
  Контракт `PromptFormatter.format` принимает `Readonly<PromptContext>`.
- Не знает про Provider, API, Generation Engine, React, Developer Studio
  — как и весь Prompt Engine, он AI-agnostic (`ADR-000` Principle 14).
- Не хранит собственную копию данных о стилях — использует то, что уже
  есть в `PromptContext`.

## Статус

Foundation (DS-6.1): контракт `PromptFormatter` и тип `PromptResult` в
`../types.ts` — Track-1, `PromptContext` → `PromptResult`. Этот путь
считается **legacy**: он не изменяется и не реализуется здесь; миграция
Track-1 на новый контракт находится вне scope текущего Gate.

## ADR-005 Formatter (Gate 1)

Параллельно с Track-1 в этой директории реализован независимый контракт
по [ADR-005](../../../../../docs/adr/ADR-005-Formatter-DecisionTrace-Contract.md):
`format(promptDraft: FormatterPromptDraft, providerTarget: string):
FormatterResult` (`formatter.types.ts`, `formatter.ts`). Он использует
новые типы (`FormatterPromptDraft`, `FormatterPromptElement`,
`DecisionRecord`, `FormatterResult`) — не переиспользует и не изменяет
Track-1 `PromptDraft`/`PromptFormatter`/`PromptResult`. `FormatterResult`
обязательно содержит `decisionTrace` наравне с `promptString` (ADR-005
decisionTrace Contract).
