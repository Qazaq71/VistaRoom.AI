# Gate 1 — Prompt Pipeline: Инженерное ТЗ для Claude Code

**Status:** Approved Engineering Specification

**Component:** Prompt Builder + Rule Engine

**Governance:** Governance Review completed.
See: [Gate1-Prompt-Builder-Rule-Engine-Governance-Review.md](./Gate1-Prompt-Builder-Rule-Engine-Governance-Review.md)

**Gate Status:** Gate 1 remains In Progress.
This specification covers only Prompt Builder + Rule Engine.

**Revision:** 2 (см. раздел 9 "Architecture Compliance Revisions" — технические изменения относительно Revision 1)
**Базовые документы:** ACS-004 (Prompt Intelligence), ADR-005 (Formatter decisionTrace Contract), ACS-002/003/006/007/008/009
**Дата:** 2026-07-07

---

## 1. Подтверждённый Scope Gate 1

Prompt Pipeline = **Prompt Builder + Rule Engine** (два из четырёх компонентов ACS-004).

Formatter (третий компонент) уже реализован по ADR-005 — **не трогаем**.
Prompt Engine (четвёртый компонент, полный жизненный цикл + `refinePromptDraft`) — **не реализуем в Gate 1**.

Функциональный scope не изменился относительно Revision 1. Изменения Revision 2 касаются исключительно именования, границ защиты Track-1 и формы сигнала ошибки — см. раздел 9.

```
buildPromptDraft(structuredScene, projectDesignContext, domainDecisions[]) => FormatterPromptDraft
applyRules(promptDraft, ruleSet) => FormatterPromptDraft
```

---

## 2. Явные решения, принятые для Gate 1

| № | Решение |
|---|---|
| 1 | Hardcoded приоритет доменов (Style/Material/Color/Layout) в Rule Engine **не вводится**. |
| 2 | Rule Engine **не решает** семантические конфликты между Material/Color/Layout. |
| 3 | Rule Engine в Gate 1 выполняет **только deterministic structural rules** (валидация формы данных, не содержания). |
| 4 | Входной порядок `domainDecisions[]` **сохраняется** — Rule Engine не переупорядочивает записи. |
| 5 | Material ↔ Color conflict priority — **open architectural question**, не закрывается в Gate 1. |
| 6 | Layout **не включается** в общий conflict-priority механизм — его единственный задокументированный конфликт (с Furniture) разрешается в `resolveFurnitureLayoutConflict()` (ACS-003, AI Orchestration), вне Rule Engine. |
| 7 | Маппинг `structuredScene`/`projectDesignContext` → `elements[]` **не вводится** в Gate 1 — фиксируется как архитектурный пробел (см. раздел 5). |
| 8 | Тесты ACS-004 на разрешение конфликтов Rule Engine — **явное deferred scope** для Gate 1, не реализуются даже как заглушка. |
| 9 | Структурная невалидность (`missing element`/`missing value`) сигнализируется как **явное возвращаемое значение**, а не исключение — см. раздел 3.4 и раздел 9 (Error Handling). Это применение уже существующего в проекте паттерна (ACS-002 `ErrorNotFound`, ADR-005 `sourceRule: null`), а не новый механизм. |

---

## 3. Точный контракт для реализации

### 3.1 Типы (новый файл `acs004-prompt-builder-rules.types.ts`)

Независимые от Track-1, по аналогии с `formatter.types.ts` (ADR-005 прецедент — новые имена, без коллизий с legacy `PromptDraft`/`PromptResult`). Функции (`buildPromptDraft`, `applyRules`) сохраняют имена из ACS-004 Public Contract без изменений (тот же выбор, что и `format()` в ADR-005) — коллизии Revision 1 устранены на уровне **типов и директории**, не на уровне имён функций (см. раздел 9, п. 3).

```ts
/**
 * Один элемент решения от Domain Intelligence модуля (ACS-004 Inputs,
 * domainDecisions[]). Структурно идентичен FormatterPromptElement,
 * но объявлен отдельно — Prompt Pipeline не импортирует внутренние типы
 * Formatter напрямую, только конвертирует в них на выходе buildPromptDraft.
 */
export interface DomainDecision {
  readonly element: string;
  readonly value: string;
  readonly sourceRule?: string | null;
}

/**
 * Минимальный деструктурный RuleSet для Gate 1. Не содержит приоритетов
 * доменов и не разрешает семантические конфликты (см. решения №1-3 выше).
 * Валидирует только форму каждого DomainDecision.
 *
 * Имя намеренно префиксовано `Acs004` (а не просто `RuleSet`) — Track-1
 * уже объявляет `PromptRuleSet` в `prompt-engine/types.ts` для не связанной
 * с этим сущности. Revision 1 использовала имя `RuleSet` без префикса, что
 * создавало смысловую, хоть и не компиляционную, коллизию — устранено в
 * Revision 2 (см. раздел 9, п. 3).
 */
export interface StructuralRule {
  readonly name: string;
  readonly validate: (decision: DomainDecision) => StructuralViolation | null;
}

export interface StructuralViolation {
  readonly element: string;
  readonly reason: string; // например, "missing value", "empty element"
}

export interface Acs004RuleSet {
  readonly rules: readonly StructuralRule[];
}

/**
 * Явный отказ вместо домысленного результата — тот же принцип, что уже
 * применён в ACS-002 (`ErrorNotFound`) и в ADR-005 (`sourceRule: null`).
 * Не является исключением: это обычное возвращаемое значение,
 * альтернативное `FormatterPromptDraft` в объединении типов, которое
 * возвращает `applyRules` (раздел 3.4).
 */
export interface StructuralValidationFailure {
  readonly violations: readonly StructuralViolation[];
}
```

### 3.2 Реализация (новый файл `acs004-prompt-builder-rules.ts`)

```ts
import type { FormatterPromptDraft, FormatterPromptElement } from "../formatter/formatter.types";
import type {
  Acs004RuleSet,
  DomainDecision,
  StructuralValidationFailure,
} from "./acs004-prompt-builder-rules.types";

/**
 * Gate 1: собирает FormatterPromptDraft ИСКЛЮЧИТЕЛЬНО из domainDecisions[].
 * structuredScene и projectDesignContext принимаются по контракту ACS-004
 * (Public Contract требует эти параметры), но НЕ декомпозируются в elements —
 * см. раздел 5 (Open Architectural Gap), это осознанное ограничение Gate 1,
 * а не упущение.
 */
export function buildPromptDraft(
  structuredScene: unknown,       // opaque для Gate 1, см. раздел 5
  projectDesignContext: unknown,  // opaque для Gate 1, см. раздел 5
  domainDecisions: DomainDecision[]
): FormatterPromptDraft {
  const elements: FormatterPromptElement[] = domainDecisions.map((d) => ({
    element: d.element,
    value: d.value,
    sourceRule: d.sourceRule,
  }));
  return { elements };
}

/**
 * Gate 1: только структурная валидация. НЕ разрешает семантические
 * конфликты между элементами (решения №1-3, раздел 2). Порядок elements[]
 * сохраняется без изменений (решение №4).
 *
 * Возвращает FormatterPromptDraft при отсутствии нарушений, либо явное
 * значение StructuralValidationFailure при их наличии — не бросает
 * исключение (решение №9, раздел 9). Это то же самое, "явный отказ вместо
 * домысленного результата", что ACS-002 применяет через
 * `RegionDescriptor | ErrorNotFound`.
 */
export function applyRules(
  promptDraft: FormatterPromptDraft,
  ruleSet: Acs004RuleSet
): FormatterPromptDraft | StructuralValidationFailure {
  const violations = promptDraft.elements.flatMap((element) =>
    ruleSet.rules
      .map((rule) => rule.validate(element))
      .filter((violation): violation is NonNullable<typeof violation> => violation !== null)
  );

  if (violations.length > 0) {
    return { violations };
  }

  return promptDraft; // порядок и содержимое не изменяются
}
```

### 3.3 Минимальный RuleSet по умолчанию

```ts
export const GATE1_DEFAULT_RULESET: Acs004RuleSet = {
  rules: [
    {
      name: "non-empty-element",
      validate: (d) => (!d.element ? { element: d.element, reason: "missing element" } : null),
    },
    {
      name: "non-empty-value",
      validate: (d) => (!d.value ? { element: d.element, reason: "missing value" } : null),
    },
  ],
};
```

### 3.4 Различение результата `applyRules`

Вызывающий код различает успех/отказ по наличию поля `violations` (симметрично тому, как потребитель `deriveMaskRegion` в ACS-002 различает `RegionDescriptor`/`ErrorNotFound` по форме значения, а не по типу исключения):

```ts
function isStructuralValidationFailure(
  result: FormatterPromptDraft | StructuralValidationFailure
): result is StructuralValidationFailure {
  return "violations" in result;
}
```

---

## 4. Точки соприкосновения с Formatter (уже реализован)

`buildPromptDraft()` → `applyRules()` → **вход в существующий** `format()` (ADR-005, не изменяется):

```ts
import { format } from "../formatter/formatter";

const draft = buildPromptDraft(structuredScene, projectDesignContext, domainDecisions);
const validated = applyRules(draft, GATE1_DEFAULT_RULESET);

if (isStructuralValidationFailure(validated)) {
  // явная обработка отказа — вызывающий код решает, что делать
  // (Gate 1 не определяет UX/retry-политику, только форму сигнала)
} else {
  const result = format(validated, providerTarget); // существующий Formatter, без изменений
}
```

---

## 5. Open Architectural Gap — требует отдельного решения, НЕ закрывается этим ТЗ

**Проблема:** ACS-004 Public Contract требует `structuredScene` и `projectDesignContext` как обязательные входы `buildPromptDraft()`, но:
- ACS-002 сама помечает схему `structuredScene` (`spaceType`, `objects`, `lighting`, `geometry`, `constraints`) как *«ориентир... не окончательно зафиксированная схема»*.
- `ProjectDesignContext` (ACS-003) не имеет ни одного формально названного поля ни в одном документе — только текстовое описание («выбранный стиль, палитра, материалы»).

**Что это означает:** контракт `buildPromptDraft()` из ACS-004 **не может быть реализован полностью** до устранения этого пробела — Gate 1 реализует только частичный контракт (domainDecisions-часть).

**Минимальное предложение по закрытию (для решения, не для реализации сейчас):**

Новый ADR (номер присваивается Decision Governance), рабочее название: *«ADR — StructuredScene/ProjectDesignContext to PromptDraft Element Mapping»*. Должен зафиксировать:
1. Финальную схему `StructuredScene` (перевести из статуса «ориентир» ACS-002 в утверждённую) и формальную схему `ProjectDesignContext` (отсутствует полностью — нужно создать).
2. Явное правило: какие поля этих двух объектов становятся элементами `promptString`, а какие используются только для `mode`/`maskRegion` в Generation Intelligence (ADR-006) и в промпт не попадают.
3. Правило `sourceRule` для элементов, не являющихся решением Domain Intelligence (например, `spaceType` — это наблюдение Scene Intelligence, а не правило; `sourceRule` для таких элементов, по-видимому, всегда `null`, но это тоже должно быть зафиксировано явно, а не молчаливо).

**До закрытия этого ADR:** Gate 1 Prompt Pipeline работает только с `domainDecisions[]`. Это ограничение, а не финальное архитектурное решение. Это не затронуто Revision 2 — тот же открытый вопрос, что и в Revision 1.

---

## 6. Файлы к созданию

```
src/lib/interior/prompt-engine/acs004-prompt-builder-rules/
  ├── acs004-prompt-builder-rules.types.ts
  ├── acs004-prompt-builder-rules.ts
  ├── acs004-prompt-builder-rules.contract.test.ts
  └── README.md   (аналогично formatter/README.md — Track-1/Track-2 секции)
```

Директория переименована из `prompt-pipeline/` (Revision 1) в `acs004-prompt-builder-rules/` — причина см. раздел 9, п. 2.

### Track-1 — полный список защищённых путей (не трогать)

Track-1 внутри `src/lib/interior/prompt-engine/` — это не только `types.ts` и `builder/`, как было указано в Revision 1. Полный перечень, подтверждённый по фактическому состоянию репозитория:

```
src/lib/interior/prompt-engine/types.ts
src/lib/interior/prompt-engine/index.ts
src/lib/interior/prompt-engine/README.md
src/lib/interior/prompt-engine/builder/**
src/lib/interior/prompt-engine/rules/**
src/lib/interior/prompt-engine/pipeline/**
src/lib/interior/prompt-engine/templates/**
src/lib/interior/prompt-engine/validators/**
```

`formatter/formatter.ts` и `formatter/formatter.types.ts` (ADR-005, Gate 1, уже реализованы) — тоже не трогаются, но не входят в "Track-1" в узком смысле (это уже реализованный Track-2/Gate-1 артефакт; правило то же — не изменять). `formatter/README.md` может быть **дополнен** (не переписан) новой секцией, аналогично тому, как он уже документирует Track-1 vs ADR-005, если потребуется сослаться на новый модуль — но и это не обязательно для данного ТЗ.

Ничего из вышеуказанных путей не создаётся, не изменяется и не удаляется этим ТЗ.

---

## 7. Контрактные тесты (`acs004-prompt-builder-rules.contract.test.ts`)

1. `buildPromptDraft`: каждый элемент `domainDecisions[]` попадает в `elements[]` 1:1, без потерь и без изменения порядка.
2. `buildPromptDraft`: `sourceRule` копируется как есть (включая `undefined`) — нормализация в `null` остаётся зоной ответственности `format()`, не дублируется здесь.
3. `buildPromptDraft`: `structuredScene`/`projectDesignContext` не декомпозируются в `elements[]` — явный тест, подтверждающий текущее ограничение (раздел 5), а не случайное упущение.
4. `applyRules`: не изменяет порядок и значения `elements[]` при отсутствии структурных нарушений (подтверждает решения №2–4, раздел 2), возвращает исходный `FormatterPromptDraft`.
5. `applyRules`: возвращает `StructuralValidationFailure` (`{ violations }`), а **не бросает исключение**, при отсутствии `element` или `value` у любого элемента.
6. `applyRules`: не бросает ничего — контрактный тест явно проверяет отсутствие throw (`expect(() => applyRules(...)).not.toThrow()`), закрепляя решение №9.
7. `applyRules`: **не тестирует** разрешение конфликтов между доменами — явно задокументированное отклонение от ACS-004 Tests (решение №8, раздел 2).
8. Track-1 unchanged: `git diff --name-only HEAD -- <полный список из раздела 6>` + SHA-256 до/после для каждого файла из полного списка (не только `types.ts`/`builder/*`, как в прецеденте Formatter — там список тоже должен быть по факту расширен, но это отдельная, необязательная для данного ТЗ правка существующего теста).

---

## 8. Что явно НЕ входит в эту реализацию

- `Prompt Engine` (оркестрация полного жизненного цикла, `refinePromptDraft`).
- Разрешение конфликтов Material ↔ Color (open question, решение №5).
- Маппинг `structuredScene`/`projectDesignContext` (open gap, раздел 5).
- Любые изменения `formatter.ts`/`formatter.types.ts` (ADR-005 остаётся неизменным).
- Любые изменения Track-1 (полный список — раздел 6).
- Механизм исключений (`throw`/`Error`-подклассы) для сигнализации ошибок — Gate 1 использует только явные возвращаемые значения (решение №9).

---

## 9. Architecture Compliance Revisions (Revision 2)

Ниже описаны технические изменения относительно Revision 1: уточнение границ защищаемых путей Track-1, переименование директории во избежание коллизии, устранение коллизий имён типов и приведение обработки ошибок к паттерну, уже используемому в проекте. Функциональный scope Gate 1, ADR-005, ACS-004 Public Contract и Track-1 Legacy не изменены ни в одном пункте.

### 1. Track-1 Protection — список защищённых путей расширен

**Проблема:** Revision 1 указывала «не трогать `types.ts`, `builder/`», но не упоминала `rules/` (уже содержит `RuleEngine.ts`, `DefaultRuleEngine.ts`, `RuleRegistry.ts` — собственный Track-1 Rule Engine), `pipeline/`, `templates/`, `validators/`, `index.ts`. Контрактный тест по прецеденту Formatter (`TRACK1_PATHS`) тоже проверяет только `types.ts`/`builder/*` — расширение защиты не покрывалось бы автоматически.

**Изменение:** раздел 6 теперь перечисляет полный, проверенный по факту репозитория список защищённых путей Track-1 (`types.ts`, `index.ts`, `README.md`, `builder/**`, `rules/**`, `pipeline/**`, `templates/**`, `validators/**`). Раздел 7, п. 8 — контрактный тест ссылается на этот полный список, а не на укороченный.

**Причина:** без явного перечисления `rules/**`/`pipeline/**` реализация могла случайно затронуть уже существующий Track-1 Rule Engine или Pipeline README, а автоматическая проверка (git diff) не поймала бы это, так как копировала бы узкий список прецедента.

### 2. Directory Collision — `prompt-pipeline/` → `acs004-prompt-builder-rules/`

**Проблема:** Track-1 уже содержит директорию `src/lib/interior/prompt-engine/pipeline/` — оркестратор `PromptPipeline` (Builder → Rules → Formatter, ADR-000 Principle 16). Новая директория `prompt-pipeline/` (Revision 1) называется почти идентично, но обозначает другую вещь (только Builder+Rule Engine из ACS-004, без Formatter и без полной оркестрации) — высокий риск путаницы у будущего читателя/агента.

**Изменение:** директория переименована в `src/lib/interior/prompt-engine/acs004-prompt-builder-rules/`; файлы внутри — `acs004-prompt-builder-rules.types.ts`, `acs004-prompt-builder-rules.ts`, `acs004-prompt-builder-rules.contract.test.ts`.

**Причина выбора имени:** префикс `acs004-` однозначно привязывает директорию к исходному документу-контракту (как `ADR-005`/`ACS-004` уже используются как якоря именования в проекте), а сама директория явно перечисляет оба входящих в неё компонента (`prompt-builder-rules`) вместо использования обобщённого слова "pipeline", которое уже занято Track-1 для другого понятия. Ни одно из существующих имён директорий (`builder`, `rules`, `formatter`, `pipeline`, `templates`, `validators`) не пересекается по подстроке с новым именем.

### 3. Type / Function Name Collision

**Проблема:** тип `RuleSet` (Revision 1) не совпадает по имени с Track-1 `PromptRuleSet`, но достаточно близок по смыслу и расположению (соседняя директория одного модуля), чтобы создавать двусмысленность при чтении кода. Функции `buildPromptDraft`/`applyRules` совпадают по имени с ACS-004 Public Contract (это литеральные имена из контракта) и с методом `RuleEngine.applyRules` (Track-1) только по слову, не по модулю/сигнатуре импорта.

**Изменение:**
- `RuleSet` → `Acs004RuleSet` (раздел 3.1) — устраняет смысловую коллизию с `PromptRuleSet`, не меняя роль типа в контракте (по-прежнему второй параметр `applyRules`).
- `buildPromptDraft` и `applyRules` **оставлены без изменений** — они являются именами из ACS-004 Public Contract, и их переименование было бы изменением контракта (что запрещено требованием). Это тот же выбор, что уже сделан в ADR-005: `format()` (Formatter) намеренно не переименовывался, несмотря на одноимённый метод `PromptFormatter.format` в Track-1 — разграничение там достигается только через отдельные типы (`FormatterPromptDraft` и т.д.) и раздельные модули, без переименования функций. Revision 2 применяет тот же принцип: коллизии устраняются на уровне типов и расположения файлов, а не имён экспортируемых функций контракта.

**Причина:** переименование `buildPromptDraft`/`applyRules` вышло бы за рамки требования "не менять ACS-004 Public Contract"; переименование `RuleSet` в `Acs004RuleSet` не меняет контракт (это внутренний TypeScript-тип реализации, не название функции контракта), но убирает двусмысленность.

### 4. Error Handling — приведено к существующему паттерну

**Проблема:** Revision 1 вводила `class StructuralValidationError extends Error`, бросаемый через `throw`. Ни один существующий файл в `prompt-engine/**` не использует исключения — весь модуль (Builder, Rules, Formatter, Track-1 и Track-2/ADR-005) построен на чистых функциях, возвращающих новое значение. Существующий в проекте паттерн для "явного отказа" — возврат значения, а не исключение (ACS-002 `deriveMaskRegion(...) => RegionDescriptor | ErrorNotFound`; ADR-005 `sourceRule: null` вместо домысленного значения).

**Изменение:** `applyRules` (раздел 3.2) возвращает `FormatterPromptDraft | StructuralValidationFailure` вместо того, чтобы бросать исключение. `StructuralValidationFailure` (раздел 3.1) — новый тип, аналогичный по роли `ErrorNotFound` из ACS-002. Добавлен type guard `isStructuralValidationFailure` (раздел 3.4) для различения результата на стороне вызывающего кода. Раздел 4 (глю-код) и раздел 7 (тесты, пп. 5–6) обновлены соответственно.

**Причина:** это не новый механизм обработки ошибок — это применение уже существующего, задокументированного в ADR-005 принципа ("явный отказ вместо домысленного результата", со ссылкой на ACS-002 `ErrorNotFound") к новому месту контракта, где раньше (Revision 1) был внедрён несвойственный проекту `throw`.

---

## Источники

1. ACS-004 — Prompt Intelligence (загружен в этом диалоге).
2. ADR-005 — Formatter decisionTrace Contract.
3. ADR-006 — Generation Intelligence Mode Contract.
4. ACS-002 — Scene Intelligence (источник паттерна `ErrorNotFound`, использованного в разделе 9, п. 4).
5. ACS-003 — AI Orchestration.
6. ACS-006 — Layout & Ergonomics Intelligence.
7. ACS-007 — Material Intelligence.
8. ACS-008 — Color Intelligence.
9. ACS-009 — Style Intelligence.
10. `formatter.ts` / `formatter.types.ts` (актуальная реализация ADR-005 в репозитории).
11. `prompt-engine/rules/RuleEngine.ts`, `DefaultRuleEngine.ts`, `RuleRegistry.ts`, `pipeline/README.md`, `builder/**`, `types.ts`, `index.ts` — фактическое состояние Track-1 в репозитории, проверенное перед подготовкой Revision 2.
12. Технический разбор реализации (данный диалог) — источник всех правок раздела 9.
13. Явные решения владельца проекта в этом диалоге (разделы 2, 5 — где отмечено как решение, а не факт из документов).

---

## Current Status

Completed:
- Prompt Builder
- Rule Engine

Not included in this specification:
- Prompt Engine
- ADR-005 Integration
- ADR-006 Integration
