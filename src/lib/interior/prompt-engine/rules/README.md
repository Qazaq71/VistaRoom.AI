# Rules — Rule Engine Foundation + Diagnostics & Metadata

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
interface PromptRuleMetadata {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly enabled: boolean;
  readonly priority: number;
}

interface PromptRule {
  readonly metadata: PromptRuleMetadata;
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

### `metadata` (DS-6.3.1)

Каждое правило обязано иметь `metadata` — полностью `readonly` объект:

- `id`, `name`, `description` — только документация. Ничто в Rule Engine
  их не читает и не использует для принятия решений.
- `enabled` — зарезервировано на будущее (например, для Pipeline, который
  сможет пропускать отключённые правила). На DS-6.3.1 нигде не читается.
- `priority` — зарезервировано на будущее (сортировка/приоритизация
  правил). На DS-6.3.1 нигде не читается и не используется для
  сортировки — как и `priority` на `PromptRuleSet` (`ADR-000` Principle
  18), это metadata для будущего Pipeline, а не логика самого правила.

Правило **не имеет права** читать `enabled`/`priority` — ни своё, ни
чужое — чтобы изменить своё поведение: это превратило бы metadata в
бизнес-логику правила, что запрещено той же логикой, что и Principle 18.

На DS-6.3.1 **ни одно настоящее правило не реализовано** — ни
`LightingRule`, ни `MaterialRule`, ни `FurnitureRule`, ни `StyleRule`.
Это будущая работа DS-6.4 (Universal Interior Knowledge Base).

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

## 8. Diagnostics (DS-6.3.1)

Четыре дополнительных типа-контракта в `../types.ts`, подготавливающих
Rule Engine к будущему анализу качества, без единой строки реализации:
`RuleResult`, `RuleDiagnostics`, `RuleMetrics`, `RuleTraceOptions`.

**Ничего из этого раздела не используется нигде в коде.** `RuleEngine` и
`DefaultRuleEngine` продолжают работать так же, как в DS-6.3— напрямую с
`PromptContext`, без diagnostics, без metrics, без trace.

### `RuleResult`

```ts
interface RuleResult {
  context: PromptContext;
  diagnostics?: RuleDiagnostics[];
  warnings?: string[];
  metrics?: RuleMetrics;
}
```

Будущая, более богатая альтернатива тому, что сегодня возвращает
`RuleEngine.applyRules` (голый `PromptContext`). Пока `RuleEngine`
работает напрямую с `PromptContext` — `RuleResult` нигде не
возвращается и не принимается.

### `RuleDiagnostics`

```ts
type RuleDiagnosticSeverity = "info" | "warning" | "error";

interface RuleDiagnostics {
  readonly ruleId: string;
  readonly message: string;
  readonly severity: RuleDiagnosticSeverity;
}
```

Заметка, которую в будущем правило могло бы прикрепить к своему
результату (например: "это правило не нашло что нормализовать"). Ни одно
правило не производит `RuleDiagnostics` — правил ещё нет.

### `RuleMetrics`

```ts
interface RuleMetrics {
  readonly executionTime: number;
  readonly changes: number;
}
```

Замеры одного прогона правила — сколько заняло по времени, сколько полей
изменило. Ничего их не вычисляет.

### `RuleTraceOptions`

```ts
interface RuleTraceOptions {
  readonly enableTrace: boolean;
}
```

Будущий флаг для запроса трассировки — как именно менялся `PromptContext`
на каждом шаге `RuleSet`. `RuleEngine`/`DefaultRuleEngine` не принимают
такую опцию и не пишут trace никуда.

### Для чего это всё

`RuleResult`, `RuleDiagnostics`, `RuleMetrics`, `RuleTraceOptions` и
`PromptRuleMetadata` — контракты, рассчитанные на будущих потребителей
**за пределами** самого Rule Engine:

- **Developer Studio** — чтобы показать, какие правила сработали, с
  каким результатом, за какое время.
- **Benchmark** — чтобы сравнивать поведение Rule Engine между версиями
  правил/RuleSet.
- **Будущий анализ качества Prompt Engine** — метрики и diagnostics как
  сырьё для оценки того, что делают правила, без необходимости менять
  сам Rule Engine ради логирования.

Rule Engine (`RuleEngine.ts`, `DefaultRuleEngine.ts`) не знает ни об одном
из этих потребителей и не меняется под них — он остаётся тем же простым
`applyRules(context, ruleSet): PromptContext`, что и в DS-6.3.

## 9. Зависимости файлов

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

**DS-6.3 — Rule Engine Foundation:**

- `RuleEngine.ts` — контракт `RuleEngine.applyRules(context, ruleSet)`.
- `DefaultRuleEngine.ts` — первая реализация: последовательно применяет
  `ruleSet.rules`, корректно работает и при пустом массиве правил.
- `RuleRegistry.ts` — `getRuleSet(id)`, с единственным зарегистрированным
  `DEFAULT_RULE_SET` (пустой `RuleSet`).

**DS-6.3.1 (текущий этап) — Rule Engine Diagnostics & Metadata:**

- `../types.ts` — `PromptRule` расширен обязательным `readonly metadata:
  PromptRuleMetadata` (`id`, `name`, `description`, `enabled`,
  `priority` — все `readonly`); добавлены `RuleResult`,
  `RuleDiagnostics`, `RuleDiagnosticSeverity`, `RuleMetrics`,
  `RuleTraceOptions` — см. раздел 8 выше.
- `RuleEngine.ts`/`DefaultRuleEngine.ts`/`RuleRegistry.ts` — **не
  изменялись**. Поведение Rule Engine то же самое, что в DS-6.3: работает
  напрямую с `PromptContext`, не читает `metadata`, не производит и не
  принимает `RuleResult`/`RuleDiagnostics`/`RuleMetrics`, не пишет trace.
- Это чисто архитектурное расширение контракта на будущее — Developer
  Studio, Benchmark, будущий анализ качества Prompt Engine.

Настоящих правил (`LightingRule`, `MaterialRule`, `FurnitureRule`,
`StyleRule` и т.п.) по-прежнему нет — они появятся в DS-6.4 (Universal
Interior Knowledge Base). Rule Engine не подключён к Pipeline, Formatter,
Provider, Generation Engine, Developer Studio, Benchmark или
production-коду (`buildEditPrompt()`, `prompts.ts`).

Следующий этап — **DS-6.4 Universal Interior Knowledge Base**.
