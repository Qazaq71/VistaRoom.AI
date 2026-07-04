# Rules — Rule Engine Foundation

## 1. Ответственность

Rules — набор небольших, композируемых шагов трансформации
`PromptContext`, применяемых между Builder и Formatter (нормализация,
ограничения, доменные корректировки). Каждое правило решает одну задачу
и не знает о других правилах.

Контракт правила: `PromptRule` (см. `../types.ts`).

- Получает: `Readonly<PromptContext>`
- Возвращает: `PromptContext` (новый экземпляр)

С DS-6.3 в этой директории появился также **Rule Engine** —
универсальный механизм, который умеет прогонять `PromptContext` через
все правила одного `RuleSet` по порядку. Сам он тоже не содержит ни
одного настоящего правила.

## 2. PromptRule — контракт одного правила

```ts
interface PromptRule {
  apply(context: Readonly<PromptContext>): PromptContext;
}
```

- Не строит строки промпта — это ответственность Formatter
  (`../formatter/README.md`).
- Не выполняет первичную сборку контекста — это ответственность Builder
  (`../builder/README.md`).
- Не знает про Style Registry, Developer Studio, Generation Engine,
  Provider, API, React.
- Не знает о других правилах, не вызывает их и не зависит от порядка
  выполнения (`ADR-000` [Principle 16 — Prompt Rules независимы](../../../../../docs/adr/ADR-000-Architecture-Principles.md)).
  Последовательность применения правил определяет только Rule Engine —
  который, в свою очередь, вызывается Pipeline (`../pipeline/README.md`).
- Не мутирует входной `PromptContext` — возвращает новый экземпляр
  (`ADR-000` Principle 15).

На DS-6.3 **ни одно настоящее правило не реализовано** — ни
`LightingRule`, ни `MaterialRule`, ни `FurnitureRule`, ни `StyleRule`.
Это будущая работа DS-6.4 (Universal Interior Rules).

## 3. RuleSet — группа правил

```ts
interface PromptRuleSet {
  id: string;
  name: string;
  rules: PromptRule[];
  priority?: number;
}
```

`RuleSet` — логическая группа независимых `PromptRule`, объединённых по
смыслу (например, все правила про освещение). Это **организационное**
понятие: правила внутри `RuleSet` по-прежнему ничего не знают друг о
друге и не зависят от порядка выполнения (`ADR-000` Principle 16
продолжает действовать внутри набора). `priority` — опциональная
metadata для Pipeline, не бизнес-логика правила (`ADR-000` Principle 18);
на DS-6.3 она нигде не читается и не используется для сортировки.

Будущие конкретные `RuleSet` (ни один пока не реализован, кроме
`DEFAULT_RULE_SET` — см. ниже):

- `InteriorRuleSet`
- `LightingRuleSet`
- `FurnitureRuleSet`
- `MaterialRuleSet`
- `DecorRuleSet`
- `ConstraintRuleSet`
- `MyStyleRuleSet`

## 4. Rule Engine (DS-6.3)

Контракт: `RuleEngine` (`./RuleEngine.ts`).

```ts
interface RuleEngine {
  applyRules(
    context: Readonly<PromptContext>,
    ruleSet: PromptRuleSet
  ): PromptContext;
}
```

- Получает: `Readonly<PromptContext>` + `PromptRuleSet`
- Возвращает: `PromptContext` (новый экземпляр)

Это отдельный, более узкий контракт, чем `PromptPipeline`
(`../types.ts`): `PromptPipeline` в будущем будет оркестровать весь
проход Builder → Rules → Formatter, а `RuleEngine` отвечает только за
шаг "Rules" внутри этого прохода — прогон одного `RuleSet` от начала до
конца.

### `DefaultRuleEngine` — первая реализация

```ts
class DefaultRuleEngine implements RuleEngine {
  applyRules(context: Readonly<PromptContext>, ruleSet: PromptRuleSet): PromptContext {
    return ruleSet.rules.reduce<PromptContext>(
      (currentContext, rule) => rule.apply(currentContext),
      { ...context },
    );
  }
}
```

Как это работает:

1. Стартует с копии входного `PromptContext` (`{ ...context }`) — сам
   входной объект никогда не трогается.
2. Проходит по `ruleSet.rules` по порядку массива (`Array.reduce`).
3. Каждое правило получает `PromptContext`, возвращённый предыдущим
   правилом (`currentContext`), и возвращает новый.
4. Возвращает результат последнего правила.

Если `ruleSet.rules.length === 0` (единственный сценарий, возможный на
DS-6.3 — см. `RuleRegistry.ts`), `reduce` не выполняет ни одной итерации
и возвращает начальное значение — то есть новый `PromptContext`,
идентичный по данным входному, без единого изменения. `DefaultRuleEngine`
корректно работает и в этом случае, и (когда правила появятся) в общем
случае — реализация не завязана на то, что правил пока нет.

## 5. Rule Registry (DS-6.3)

`./RuleRegistry.ts` — простая фабрика, возвращающая зарегистрированные
`RuleSet` по `id`:

```ts
function getRuleSet(id: string): PromptRuleSet | undefined;
```

На DS-6.3 зарегистрирован ровно один `RuleSet` —
`DEFAULT_RULE_SET` (`id: "default"`), с пустым массивом `rules: []`. Он
существует, чтобы доказать, что `RuleEngine`/`RuleRegistry` работают
end-to-end до появления настоящих правил. `getRuleSet` для неизвестного
`id` возвращает `undefined` — это не фабрика, создающая `RuleSet` "на
лету", а таблица уже зарегистрированных наборов.

## 6. Место Rule Engine в конвейере

```
Prompt Domain (PromptContext)
      ↓
Builder            (../builder)  — создаёт/нормализует PromptContext
      ↓
Rule Engine        (./)          — applyRules(context, ruleSet): PromptContext
      ↓
Formatter          (../formatter) — PromptContext → PromptResult (строки)
```

`Pipeline` (`../pipeline`) остаётся единственным местом, которое решает,
в каком порядке вызывать Builder, Rule Engine и Formatter, и с каким
`RuleSet` вызывать `RuleEngine.applyRules`. Rule Engine сам себя не
подключает к Pipeline — на DS-6.3 такого подключения ещё нет.

## 7. Чего Rule Engine НЕ знает и не делает

- **Не знает про Formatter.** Ни `RuleEngine.ts`, ни `DefaultRuleEngine.ts`,
  ни `RuleRegistry.ts` не импортируют ничего из `../formatter` и не
  строят `positivePrompt`/`negativePrompt` — вообще ни одной строки
  промпта.
- **Не знает про Prompt как строку.** Rule Engine работает только с
  `PromptContext` (данные), никогда со строкой промпта.
- **Ничего не знает про GPT, OpenAI, FLUX, Gemini, Claude, ComfyUI** или
  любую AI-модель (`ADR-000` Principle 14).
- **Не знает про Builder.** Rule Engine получает уже готовый
  `PromptContext` как аргумент — он не импортирует и не вызывает
  `../builder`.
- **Не знает про Pipeline, Provider, Generation Engine, Developer
  Studio, Benchmark, React, Next.js.**
- **Не мутирует `PromptContext`.** `DefaultRuleEngine.applyRules`
  принимает `Readonly<PromptContext>` и на каждом шаге возвращает новый
  объект (`ADR-000` Principle 15).

## 8. Зависимости файлов

- `RuleEngine.ts` — импортирует только `../../prompt-domain`
  (`PromptContext`, type-only) и `../types` (`PromptRuleSet`, type-only).
- `DefaultRuleEngine.ts` — то же плюс `./RuleEngine` (интерфейс).
- `RuleRegistry.ts` — импортирует только `../types` (`PromptRuleSet`,
  type-only).

Ничего больше — ни React, ни Next.js, ни Builder, ни Formatter, ни
Pipeline, ни Provider, ни Generation Engine, ни Developer Studio, ни
Benchmark.

## Статус

Foundation (DS-6.1): только контракт `PromptRule` в `../types.ts`.

DS-6.2.1 (Rule Engine Preparation): добавлен тип-контракт `PromptRuleSet`
(группировка + опциональная metadata `priority`), зафиксированы границы
Builder/Rule Engine. Реализации не было.

**DS-6.3 (текущий этап) — Rule Engine Foundation:**

- `RuleEngine.ts` — контракт `RuleEngine.applyRules(context, ruleSet)`.
- `DefaultRuleEngine.ts` — первая реализация: последовательно применяет
  `ruleSet.rules`, корректно работает и при пустом массиве правил.
- `RuleRegistry.ts` — `getRuleSet(id)`, с единственным зарегистрированным
  `DEFAULT_RULE_SET` (пустой `RuleSet`).

Настоящих правил (`LightingRule`, `MaterialRule`, `FurnitureRule`,
`StyleRule` и т.п.) по-прежнему нет — они появятся в DS-6.4 (Universal
Interior Rules). Rule Engine не подключён к Pipeline, Formatter,
Provider, Generation Engine, Developer Studio, Benchmark или
production-коду (`buildEditPrompt()`, `prompts.ts`).

Следующий этап — **DS-6.4 Universal Interior Rules**.
