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

Foundation (DS-6.1): только контракт `PromptFormatter` и тип
`PromptResult` в `../types.ts`. Никакой строковой логики не написано.
Реализация появится в одном из следующих этапов DS-6.x.
