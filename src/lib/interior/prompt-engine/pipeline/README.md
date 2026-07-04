# Pipeline

## Ответственность

Pipeline — единственная точка оркестрации Prompt Engine. Он описывает
порядок прохождения `PromptContext` через остальные слои и не содержит
собственной бизнес-логики:

```
Builder
  ↓
Rules
  ↓
Formatter
```

Контракт: `PromptPipeline` (см. `../types.ts`).

- Получает: `PromptContext`
- Возвращает: `PromptResult`

## Чего Pipeline не делает

- Не строит строки промпта само — делегирует Formatter.
- Не изменяет `PromptContext` само — делегирует Builder/Rules.
- Не знает про Generation Engine, Provider, API, React, Developer Studio,
  Benchmark.

## Статус

Foundation (DS-6.1): только контракт `PromptPipeline` в `../types.ts`.
Реализация, связывающая Builder → Rules → Formatter, не создана.
