# ACS-004 Prompt Builder + Rule Engine (Gate 1)

## Ответственность

Реализует два из четырёх компонентов ACS-004 (Prompt Intelligence) —
**Prompt Builder** и **Rule Engine** — по контракту ACS-004. Gate 1
implementation follows owner-confirmed decisions after architectural
review (инженерный ТЗ `Gate1-Prompt-Pipeline-TZ.md`, вне репозитория).
Formatter (третий компонент) уже реализован по ADR-005
(`../formatter/`) и не изменяется этим модулем. Prompt Reasoning (четвёртый
компонент) и полный жизненный цикл Prompt Engine (`refinePromptDraft`) не
реализуются в Gate 1.

Контракт (ACS-004 Public Contract):

```
buildPromptDraft(structuredScene, projectDesignContext, domainDecisions[]) => FormatterPromptDraft
applyRules(promptDraft, ruleSet) => FormatterPromptDraft | StructuralValidationFailure
```

Union-return contract for `applyRules` is owner-confirmed post-review.

## Track-1 / Track-2

Эта директория целиком — Track-2/Gate-1 артефакт (ACS-004), по аналогии с
тем, как `../formatter/formatter.ts` реализует ADR-005 параллельно
legacy-контракту `PromptFormatter` из Track-1 (`../types.ts`). У Track-1 нет
собственного эквивалента именно этой директории: `../builder/` и
`../rules/` — отдельные Track-1 контракты (`PromptBuilder`/`PromptContext`,
`RuleEngine`/`PromptRuleSet`), не изменяемые и не используемые здесь.
Данный модуль не импортирует ничего из `../builder/`, `../rules/`,
`../pipeline/`, `../templates/`, `../validators/` и не переиспользует их
типы (`PromptRuleSet`, `PromptRule`, `PromptContext`).

Директория намеренно не называется `prompt-pipeline/` (во избежание
коллизии с уже существующим Track-1 `../pipeline/`, который описывает
оркестратор Builder → Rules → Formatter, ADR-000 Principle 16) — см.
Gate1-Prompt-Pipeline-TZ.md, раздел 9, п. 2. Directory naming and
Acs004RuleSet naming are owner-confirmed governance corrections.

## Что этот модуль НЕ делает (Gate 1 scope)

- Не вводит приоритет доменов (Style/Material/Color/Layout).
- Не разрешает семантические конфликты между Material/Color/Layout —
  только структурная валидация формы (`element`/`value` непусты).
- Не переупорядочивает `domainDecisions[]`.
- Не декомпозирует `structuredScene`/`projectDesignContext` в `elements[]`
  (открытый архитектурный пробел, см. ТЗ раздел 5 — не закрывается здесь).
- Не бросает исключения. `applyRules` возвращает `StructuralValidationFailure`
  как явное значение при нарушениях — тот же принцип "явный отказ вместо
  домысленного результата", что уже применён в ACS-002 (`ErrorNotFound`) и
  ADR-005 (`sourceRule: null`).
- Не изменяет `../formatter/formatter.ts`/`formatter.types.ts` — вызывает
  `format()` как есть, без изменений (см. ТЗ раздел 4).
- Не тестирует и не реализует разрешение конфликтов между решениями
  разных Domain Intelligence модулей — явный deferred scope (ТЗ, решение 8).

## Статус

Gate 1 (утверждённый scope, подтверждён владельцем проекта) — реализовано: `buildPromptDraft`, `applyRules`,
`GATE1_DEFAULT_RULESET`, `isStructuralValidationFailure`. Не подключено ни к
какому production-коду, публичному сайту, API или Generation Engine.

## Governance note

Initial implementation preceded formal approval; this is recorded as a
governance correction.
