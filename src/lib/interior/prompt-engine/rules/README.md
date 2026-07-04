# Rules

## Ответственность

Rules — набор небольших, композируемых шагов трансформации
`PromptContext`, применяемых между Builder и Formatter (нормализация,
ограничения, доменные корректировки). Каждое правило решает одну задачу
и не знает о других правилах.

Контракт: `PromptRule` (см. `../types.ts`).

- Получает: `PromptContext`
- Возвращает: `PromptContext`

## Чего Rules не делают

- Не строят строки промпта — это ответственность Formatter
  (`../formatter/README.md`).
- Не выполняют первичную сборку контекста — это ответственность Builder
  (`../builder/README.md`).
- Не знают про Style Registry, Developer Studio, Generation Engine,
  Provider, API, React.
- Не знают о других правилах, не вызывают их и не зависят от порядка
  выполнения (`ADR-000` [Principle 16 — Prompt Rules независимы](../../../../../docs/adr/ADR-000-Architecture-Principles.md)).
  Последовательность применения правил определяет только Pipeline
  (`../pipeline/README.md`).
- Не мутируют входной `PromptContext` — возвращают новый экземпляр
  (`ADR-000` Principle 15). Контракт `PromptRule.apply` принимает
  `Readonly<PromptContext>`.

## RuleSet (DS-6.2.1, концепция, без реализации)

`RuleSet` — логическая группа независимых `PromptRule`, объединённых по
смыслу (например, все правила про освещение). Это **организационное**
понятие, а не механизм связи между правилами: правила внутри `RuleSet`
по-прежнему ничего не знают друг о друге и не зависят от порядка
выполнения (`ADR-000` Principle 16 продолжает действовать внутри набора).

Тип-контракт `PromptRuleSet` (см. `../types.ts`) добавлен на DS-6.2.1:

```ts
interface PromptRuleSet {
  id: string;
  name: string;
  rules: PromptRule[];
  priority?: number;
}
```

Будущие конкретные `RuleSet` (ни один из них пока не реализован):

- `InteriorRuleSet`
- `LightingRuleSet`
- `FurnitureRuleSet`
- `MaterialRuleSet`
- `DecorRuleSet`
- `ConstraintRuleSet`
- `MyStyleRuleSet`

## Rule priority (DS-6.2.1, только зафиксировано)

`PromptRule` не определяет порядок выполнения сам — это всегда решает
Pipeline (`../pipeline/README.md`, `ADR-000` Principle 16). Опциональное
поле `priority?: number` на `PromptRuleSet` — это **metadata для
Pipeline**, а не бизнес-логика внутри правила (`ADR-000` Principle 18):

- ни одно правило не читает `priority` — ни своё, ни чужое;
- сортировка/использование `priority` не реализованы — поле существует
  только как тип, готовый к будущему Pipeline.

## Статус

Foundation (DS-6.1): только контракт `PromptRule` в `../types.ts`.

DS-6.2.1 (текущий этап, Rule Engine Preparation): добавлен тип-контракт
`PromptRuleSet` (группировка + опциональная metadata `priority`) и
зафиксированы правила выше. Конкретные правила и `RuleSet` по-прежнему
**не реализованы** — ни одного `PromptRule`, ни одного `RuleEngine`, ни
одного `RuleRegistry`.

Следующий этап — **DS-6.3 Rule Engine Foundation**.
