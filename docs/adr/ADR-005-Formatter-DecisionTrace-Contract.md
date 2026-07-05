# ADR-005 — Formatter decisionTrace Contract

## Status

Accepted. Формализует контракт, уже полностью описанный в
[ACS-004 — Prompt Intelligence](../platform/acs/ACS-004-Prompt-Intelligence.md),
как решение **R4** [Architecture Freeze
Resolution](../architecture/audits/Architecture-Freeze-Resolution.md).
Реализация `src/lib/interior/prompt-engine/formatter/` (сегодня содержит
только `README.md`) остаётся инженерной задачей Gate 1 (**R3** того же
документа) и не входит в область этого ADR.

Провизорный номер этого решения в `ADR-Backlog-Consolidated.md` был
«ADR-010» («Formatter: обязательный `decisionTrace` + закрытие
исторического пробела»). Номер переприсвоен на **ADR-005** решением R4,
так как это решение закрывается первым по фактическому приоритету
(единственный Blocker для старта Gate 1), а не по порядку перечисления в
backlog.

## Problem

По данным более раннего архитектурного аудита проекта, Formatter —
компонент, превращающий структурированные данные (`PromptDraft`) в
финальную промпт-строку — не был реализован, при этом называясь
«следующим этапом» 7+ раз подряд в предыдущей архитектуре (AI Core до
перехода на Roadmap v1.x). Одновременно PCS-008 (Design Reasoning) не
может формулировать объяснения решений пользователю, если Domain
Intelligence и Prompt Intelligence не сохраняют причину каждого решения в
прослеживаемом виде — эта зависимость была зафиксирована в PCS-008 как
незакрытая.

Без формального контракта, фиксирующего форму `decisionTrace` как
обязательную часть вывода Formatter, есть риск, что реализация Gate 1
повторит прежний паттерн: Formatter будет либо снова отложен, либо
реализован без прослеживаемости, что заблокирует PCS-008 на
неопределённый срок.

## Context

Prompt Intelligence (ACS-004) состоит из четырёх компонентов по Roadmap
v1.3: Prompt Builder, Formatter, Rule Engine, Prompt Reasoning. Formatter
— единственный из них, конвертирующий `PromptDraft` в финальный
`promptString`, пригодный для конкретного провайдера генерации
(`providerTarget`, сегодня — `gpt-image-2/edit`).

ACS-004 уже фиксирует явную архитектурную связь с PCS-008: Design
Reasoning не может работать, если Prompt Intelligence не сохраняет
источник каждого решения. Решение по этой связи уже принято в ACS-004 —
этот ADR формализует его как архитектурный контракт, а не пересматривает
его.

`src/lib/interior/prompt-engine/formatter/` в текущем состоянии
репозитория содержит только `README.md` — это подтверждено Architecture
Freeze Resolution (R3) как ожидаемое состояние на данном этапе, а не
отклонение.

## Decision

Formatter обязан возвращать не только `promptString`, но и параллельный
`decisionTrace` — список записей, каждая из которых прослеживает один
элемент промпта до источника решения, либо явно фиксирует отсутствие
источника.

Это не опциональная возможность, а обязательная часть контракта. Если для
какого-то элемента промпта источник решения не передан от Domain
Intelligence модуля, Formatter обязан пометить этот элемент как
`sourceRule: null`, а не подставлять правдоподобное объяснение
самостоятельно. Это тот же принцип «явный отказ вместо домысленного
результата», уже применённый в ACS-002 (`ErrorNotFound`) и зафиксированный
как требование в PCS-008.

## Consequences

- Formatter не может считаться реализованным по контракту Gate 1, если он
  возвращает только `promptString` без `decisionTrace` — это будет
  нарушением данного ADR, а не допустимым частичным решением.
- PCS-008 (Design Reasoning) получает формальную точку опоры: активация
  её потребления `decisionTrace` остаётся отложенной до появления ACS
  Domain Intelligence модулей (как уже зафиксировано в PCS-008), но сам
  контракт со стороны Formatter больше не является открытым вопросом.
- Rule Engine и Prompt Reasoning (остальные компоненты ACS-004) не
  затрагиваются этим ADR — их Performance Expectations (детерминированная
  логика или LLM-вызов) остаются открытым вопросом ACS-004, не решаемым
  здесь.
- Открытый технический вопрос ACS-004 про `hexToColorDescription` (HEX →
  описательные названия цветов для `flux-pro/v1/canny`, актуальность для
  `gpt-image-2/edit` не подтверждена повторно) не решается этим ADR и
  остаётся отдельной задачей, предшествующей реализации Formatter, но не
  частью данного контракта.

## Public Contract

Функциональный контракт Formatter, без привязки к конкретному
языку/фреймворку (согласно ACS-004 Public Contract):

```
format(
  promptDraft: PromptDraft,
  providerTarget: string
) => {
  promptString: string,
  decisionTrace: DecisionRecord[]   // sourceRule: string | null
}

refinePromptDraft(
  previousPromptDraft: PromptDraft,
  refinementInstruction: RefinementInstruction   // от Quality Intelligence, ACS-010
) => PromptDraft   // повторно проходит через applyRules() и format()
```

`refinePromptDraft` не является отдельным механизмом форматирования — она
переиспользует уже существующие `applyRules()` и `format()`, добавляя
инструкцию доработки как дополнительное ограничение к исходному
`PromptDraft`, а не строя промпт заново с нуля.

## decisionTrace Contract

Каждая запись `decisionTrace` имеет вид:

```
{
  element: string,           // например, "материал пола"
  value: string,             // например, "дуб"
  sourceRule: string | null  // например, "Style_Japandi_Material_Rule_04", либо null
}
```

Правила контракта:

- `decisionTrace` обязателен для каждого элемента промпта, попавшего в
  `promptString` — не только для «интересных» или спорных элементов.
- Если Domain Intelligence модуль не передал `sourceRule` для элемента,
  Formatter обязан явно записать `sourceRule: null`. Подстановка
  правдоподобного, но не выведенного из реальных данных объяснения
  запрещена.
- `decisionTrace` — не побочный лог, а часть публичного вывода `format()`,
  проверяемая контрактными тестами наравне с `promptString` (согласно
  ACS-004, раздел Tests: «`decisionTrace` присутствует для каждого
  элемента промпта; элементы без источника помечены `sourceRule: null`, а
  не заполнены произвольно»).

## Provider

Formatter — компонент Prompt Intelligence (ACS-004), исполняющий именно
эту функцию контракта. Он не является отдельным AI Capability верхнего
уровня — это один из четырёх компонентов ACS-004 (наряду с Prompt
Builder, Rule Engine, Prompt Reasoning).

## Consumers

- **Generation Intelligence (ACS-001)** — прямой потребитель
  `promptString` как обязательного поля своего входного контракта
  (`promptString` в `generate()`, ACS-001 Public Contract).
- **Design Reasoning (PCS-008)** — потребитель `decisionTrace`; активация
  этого потребления отложена до появления ACS Domain Intelligence
  модулей (зафиксировано в PCS-008, подтверждено в ACS-004 Consumers).
- **Quality Intelligence (ACS-010)** — потребитель `refinePromptDraft` при
  доработке результата после обнаружения расхождения в сгенерированном
  изображении (решение уже зафиксировано в ACS-004 Dependencies).

## Dependencies

Восходящие (согласно ACS-004 Dependencies):

- Scene Intelligence (ACS-002) — источник `structuredScene`.
- AI Orchestration (ACS-003) — источник `projectDesignContext` и порядка
  вызова.
- Domain Intelligence модули (Style/Material/Color/Layout Intelligence —
  ACS-005–009) — источник `domainDecisions`, каждое со ссылкой на
  `sourceRule`.

Запрещённые зависимости (согласно ACS-004): Formatter (как часть Prompt
Intelligence) не имеет права вызывать Provider Layer напрямую, минуя
Generation Intelligence, и не имеет права самостоятельно обращаться к
Domain Intelligence модулям в обход AI Orchestration.

## Non-goals

Formatter **не отвечает** за (согласно ACS-004 Non-responsibilities):

- содержание решений о стиле, материалах, цвете, расстановке — это Domain
  Intelligence;
- вызов провайдера генерации — это Generation Intelligence (ACS-001);
- анализ фото и геометрию помещения — это Scene Intelligence (ACS-002);
- формулирование текста объяснений для пользователя — это Design
  Reasoning (PCS-008), которая только потребляет `decisionTrace`,
  произведённый Formatter, но формулирует объяснение самостоятельно.

Этот ADR также не решает:

- выбор между детерминированной логикой и LLM-вызовом для Rule
  Engine/Prompt Reasoning (открытый вопрос ACS-004 Performance
  Expectations);
- актуальность `hexToColorDescription` для `gpt-image-2/edit` (открытый
  вопрос ACS-004 Extension Points);
- расширение bridge за пределы узла, зафиксированного в R1 Architecture
  Freeze Resolution (см. Bridge Mapping ниже).

## Bridge Mapping Track1 ↔ Track2

Согласно решению **R1** Architecture Freeze Resolution: полный мост между
всеми 20 PCS/ACS и Track 1 не строится — это было бы избыточным
редизайном. Строится только узкая мэппинг-таблица для узла, задействованного
в Gate 1:

```
Track 1                          Track 2
────────────────────────────     ──────────────────────────
Prompt Engine                →   ACS-004 Prompt Intelligence
Formatter
```

Других соответствий этот ADR не устанавливает.
