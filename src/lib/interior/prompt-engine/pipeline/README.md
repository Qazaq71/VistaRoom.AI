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

## Единственный оркестратор порядка правил

`PromptPipeline` — единственное место во всём Prompt Engine, где
определяется порядок выполнения правил (`ADR-000`
[Principle 16 — Prompt Rules независимы](../../../../../docs/adr/ADR-000-Architecture-Principles.md)).
Сами Rules ничего не знают о порядке и друг о друге; Pipeline —
единственный, кто решает, в какой последовательности вызывать Builder →
Rules → Formatter.

## Статус

Foundation (DS-6.1): только контракт `PromptPipeline` в `../types.ts`.
Реализация, связывающая Builder → Rules → Formatter, не создана.
