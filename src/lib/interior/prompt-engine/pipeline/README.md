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

Это относится и к `RuleSet` (`../rules/README.md`, DS-6.2.1): группировка
правил в `RuleSet` — организационное понятие, оно не переносит
ответственность за порядок ни на сам `RuleSet`, ни на правила внутри
него. Если `PromptRuleSet` несёт поле `priority`, это **metadata**,
которую в будущем сможет прочитать только Pipeline (`ADR-000` Principle
18) — сам `RuleSet` и правила внутри него эту metadata не используют.
Сортировка/использование `priority` пока не реализованы нигде, в том
числе здесь.

## Builder не часть последовательности правил

Builder (`../builder/README.md`) вызывается Pipeline **до** Rules и
никогда — Rules или Pipeline не встраивают вызовы Builder внутрь
последовательности правил. Сам Builder не знает о существовании Rules
или Pipeline (`ADR-000` Principle 17) — знание о том, что после Builder
идут Rules, принадлежит исключительно Pipeline.

## Статус

Foundation (DS-6.1): только контракт `PromptPipeline` в `../types.ts`.
Реализация, связывающая Builder → Rules → Formatter, не создана.

DS-6.2.1 (Rule Engine Preparation): зафиксировано (без реализации), что
Pipeline — единственное место, знающее и о порядке отдельных Rules, и о
том, как в эту последовательность в будущем впишется группировка через
`RuleSet` и metadata `priority`. Следующий этап — **DS-6.3 Rule Engine
Foundation**.
