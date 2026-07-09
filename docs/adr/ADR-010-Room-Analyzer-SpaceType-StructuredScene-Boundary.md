# ADR-010 — Room Analyzer / SpaceType / StructuredScene Boundary

## 1. Status Block

| Поле | Значение |
|---|---|
| **Status** | Accepted |
| **Accepted by** | Nurlan (Project Owner) |
| **Acceptance Date** | 2026-07-09 |
| **Date** | 2026-07-09 |
| **Author** | Claude (Chief Software Architect / Specification Partner) |
| **Approval Authority** | Nurlan (Project Owner) |
| **Supersedes** | — (не заменяет ADR-004 или ADR-007) |
| **Amends** | — (не переписывает ADR-004 или ADR-007) |
| **Related** | ADR-004, ADR-005, ADR-007, ACS-004, C3 — ADR-004 Gap Review (`df0b2d1`) |
| **Trigger** | Architecture Decision Required, confirmed в C3 ADR-004 Gap Review, раздел 7 |

---

## 2. Context

C3 ADR-004 Gap Review (Accepted, `df0b2d1`) установил следующие факты на основании текста принятых документов:

- **ADR-004** определяет `RoomContext` (сырой пользовательский ввод, `roomType: string`) и `SpaceType` (классифицированная модель, `DesignDomainId`) как две независимые сущности с жёстким architectural invariant: они никогда не схлопываются друг в друга. Механизм отображения `RoomContext → SpaceType` сознательно оставлен неопределённым (§8, Future Evolution: "a Rule Engine, an AI Classifier, a Vision Analyzer, Manual Mapping, an ML Classifier, or some combination"). Раздел "Update — DS-7.4" уточняет: выбор конкретного механизма, производящего `SpaceTypeId` из `RoomContext`, "remains a future Room Analyzer's job... and is still not implemented".
- **ADR-004 (DS-7.4)** ввёл в код `SpatialPromptAdapter`/`SpatialPromptContext` — независимую модель, композирующую `SpaceType` + Spatial Knowledge, ссылающуюся на `SpaceTypeId`/`DesignDomainId` по идентификатору, а не по значению. `SpatialPromptAdapter.adapt(spaceTypeId: SpaceTypeId)` принимает уже классифицированный `SpaceTypeId`, никогда не `RoomContext` — сам маппинг не реализует. Она реализована, но не подключена: `RoomContext → SpaceType` mapping не реализован, поэтому `SpatialPromptContext` изолирован от production pipeline.
- **ADR-007** определяет `StructuredScene`, производимую `analyzeRoom(photo) => StructuredScene`, с не финализированной схемой-ориентиром `(spaceType, objects, lighting, geometry, constraints)`, и `ProjectDesignContext`, производимую `composeProjectContext(...)`. Оба producer'а не реализованы. ADR-007 (раздел 4, таблица будущих производителей) явно размещает Room Analyzer **внутри Scene Intelligence (ACS-002)**: *"StructuredScene | Room Analyzer внутри Scene Intelligence (ACS-002) | Не реализован"*. ADR-007 также явно фиксирует, что `SpatialPromptContext` не является заменой ни для `StructuredScene`, ни для `ProjectDesignContext`, не читает `RoomContext` и не читает фото.
- Оба документа (ADR-004 и ADR-007) независимо ссылаются на один и тот же нереализованный компонент — **Room Analyzer** — но ни один не устанавливает явно, идёт ли речь об одном компоненте или о двух, и как формальная модель `SpaceType` (ADR-004) соотносится с полем `spaceType` в схеме-ориентире `StructuredScene` (ADR-007).

Это и есть подтверждённый gap, который разрешает настоящий ADR.

---

## 3. Problem

Без явного решения данного вопроса невозможно спроектировать producer `StructuredScene`/`SpaceType` (предпосылка для C8 — Semantic Spatial Intelligence Core), поскольку:

1. Неизвестно, следует ли строить один компонент Room Analyzer или два отдельных.
2. Неизвестно, должна ли классификация `SpaceType` дублироваться внутри `StructuredScene`, ссылаться на неё, или существовать как полностью независимая логика.
3. Без решения этого вопроса любая реализация рискует случайно нарушить invariant ADR-004 (`RoomContext`/`SpaceType` никогда не схлопываются) или создать две параллельные, рассинхронизированные классификации пространства.

---

## 4. Decision

**Room Analyzer — это единая архитектурная capability-граница (не два отдельных, не связанных друг с другом компонента), состоящая из двух ответственностей:**

1. **Classification responsibility:** `RoomContext → SpaceType` / `SpaceTypeId`. Может быть вызвана независимо от анализа фото — соответствует уже реализованному ожиданию `SpatialPromptContext` (DS-7.4), которая потребляет `SpaceTypeId` без чтения фото или `StructuredScene`.
2. **Scene analysis responsibility:** `photo → StructuredScene`. Требует фото. Внутри себя использует тот же `SpaceTypeId`, что и classification responsibility — не порождает вторую, независимую классификацию.

Таким образом, `StructuredScene.spaceType` **не является отдельным, самостоятельно определяемым полем со своей схемой** — это ссылка (`SpaceTypeId`), указывающая на тот же `SpaceType`, который определён и зафиксирован ADR-004. Это соответствует уже принятому в проекте архитектурному стилю композиции по ссылке, а не по значению (тот же паттерн, что `SpatialPromptContext` уже использует для `SpaceTypeId`/`DesignDomainId`).

**Является ли Room Analyzer одним физическим модулем или несколькими кооперирующими подкомпонентами (например, отдельный Classifier + отдельный Scene Analyzer, объединённые общим Room Analyzer namespace/facade) — не фиксируется этим ADR.** Это implementation-level решение, оставленное для будущего Implementation Package / C8 architecture work, а не архитектурный вопрос данного уровня.

---

## 5. Boundary Definitions

| Сущность | Определение (после этого ADR) | Источник |
|---|---|---|
| `RoomContext` | Сырой пользовательский ввод, `roomType: string`, без классификации. Не изменяется. | ADR-004 (unchanged) |
| `SpaceType` | Независимая классифицированная модель пространства, `DesignDomainId`-based. Не изменяется. | ADR-004 (unchanged) |
| `SpaceTypeId` | Идентификатор, ссылающийся на конкретный экземпляр `SpaceType`. Единая точка истины для классификации пространства во всей системе. | ADR-004 (unchanged), уточнена роль этим ADR |
| `SpatialPromptContext` | Независимая композиционная модель, ссылающаяся на `SpaceTypeId`/`DesignDomainId`/`KnowledgeFeature` по ссылке. Не читает `RoomContext`, не читает фото. Не заменяет `StructuredScene`/`ProjectDesignContext`. | ADR-004/ADR-007 (unchanged), инвариант подтверждён |
| `StructuredScene` | Структурированное представление сцены, производимое `analyzeRoom(photo)`. Поле `spaceType` **типизировано как `SpaceTypeId`** (ссылка), не как независимая классификация. Остальная схема (`objects`, `lighting`, `geometry`, `constraints`) остаётся не финализированной — вне scope этого ADR. | ADR-007, уточнено этим ADR |
| `ProjectDesignContext` | Не изменяется этим ADR. | ADR-007 (unchanged) |
| `Room Analyzer` | Единая capability-граница с двумя ответственностями: classification (`RoomContext → SpaceTypeId`) и scene analysis (`photo → StructuredScene`), использующими один и тот же `SpaceTypeId`. Не реализован. | Определяется этим ADR |

---

## 6. Relationship Model RoomContext ──(classification, Room Analyzer)──▶ SpaceType ──▶ SpaceTypeId
│
┌───────────────┼───────────────┐
▼                               ▼
SpatialPromptContext                StructuredScene.spaceType
(существует, изолирован,             (ссылка, не дубль-схема)
ссылается на SpaceTypeId)
Photo ──(scene analysis, Room Analyzer)──▶ StructuredScene { spaceType: SpaceTypeId, objects, lighting, geometry, constraints }
ProjectDesignContext ──(composeProjectDesignContext)──▶ (не затрагивается этим ADR) Ключевое свойство модели: **один producer классификации (`SpaceTypeId`), два потребителя ссылки** (`SpatialPromptContext` и `StructuredScene.spaceType`). Не два producer'а одного и того же понятия. Это подтверждается тем, что ADR-007 уже размещает Room Analyzer внутри Scene Intelligence (ACS-002) как единственного producer'а `StructuredScene`, а не как отдельный, второй классификатор.

---

## 7. Invariants

Настоящий ADR фиксирует следующие architectural invariants:

1. **`RoomContext` never becomes `SpaceType`. `SpaceType` never becomes `RoomContext`.** Любая связь между ними остаётся явной (Mapping/Adapter), а не прямым слиянием — invariant ADR-004 сохраняется без изменений в обе стороны. Это распространяется и на `StructuredScene`: `SpaceType`/`SpaceTypeId` не схлопывается в `StructuredScene` и не становится внутри неё независимой, конкурирующей классификацией — остаётся той же самой ссылкой на единственный источник истины.
2. Во всей системе существует ровно один producer значений `SpaceTypeId`. Дублирующая, независимая логика классификации пространства в двух разных местах не допускается.
3. `StructuredScene.spaceType` обязано быть типизировано как ссылка на `SpaceTypeId`, а не как независимо определяемое поле со своей схемой.
4. `SpatialPromptContext` остаётся независимой моделью: может потреблять/ссылаться на `SpaceType`, но никогда не становится заменой `StructuredScene` или `ProjectDesignContext` — invariant ADR-007 сохраняется без изменений.
5. Room Analyzer — единая capability-граница на архитектурном уровне; физическое разбиение на подкомпоненты — implementation-level решение, не фиксируемое здесь.
6. Поскольку Room Analyzer остаётся нереализованным, decision ADR-007 о передаче `null` в качестве `structuredScene`/`projectDesignContext` остаётся в силе без изменений до появления реализованных upstream capabilities.

---

## 8. Consequences

**Положительные:**
- Устраняет риск дублирующей, рассинхронизированной классификации пространства в двух местах системы.
- Разблокирует Readiness Requirement 2 (формальная архитектурная оценка C8) после принятия этого ADR.
- Не требует изменения уже принятых ADR-004/ADR-005/ADR-007 — граница фиксируется рядом с ними, а не через их переписывание.
- `SpatialPromptContext` (уже реализованный, но изолированный код) получает чёткий путь интеграции: как только Room Analyzer реализует classification responsibility, `SpatialPromptContext` может быть подключён без изменения своей текущей архитектуры.

**Издержки / открытые следствия:**
- Схема-ориентир `StructuredScene` в ADR-007 технически нуждается в уточняющей пометке (`spaceType: SpaceTypeId`, а не свободное поле) — этот ADR фиксирует это как решение, но не редактирует текст ADR-007 напрямую (см. раздел 9, Out of Scope, и раздел 10).
- Данный ADR не устраняет неопределённость full Scene Graph схемы (`objects`, `lighting`, `geometry`, `constraints`) — она остаётся не финализированной, как и была.
- Room Analyzer остаётся нереализованным; этот ADR — предпосылка для будущего Implementation Package, не сама реализация.

---

## 9. Out of Scope

Явно вне scope этого ADR (сознательно, не по недосмотру):

- Полная схема Functional Scene Graph / Scene Understanding (относится к C8 в целом).
- Полная архитектура Room Digital Twin.
- Выбор модели Perception-слоя (компьютерное зрение, ручная разметка, гибрид).
- Реализация object detection.
- Реализация furniture sizing.
- Prompt Engine lifecycle (C2).
- Resolution Phase implementation (C1).
- Provider integration.
- Любой code-level Implementation Package.
- Пересмотр ADR-000–006 (Architecture Freeze) — не затрагивается.
- Прямое редактирование текста ADR-004 или ADR-007.

---

## 10. Impacted Documents

| Документ | Влияние |
|---|---|
| ADR-004 | Не изменяется. Invariant (`RoomContext`/`SpaceType` never collapse) явно подтверждён и распространён на `StructuredScene`. |
| ADR-007 | Не изменяется этим ADR. **Рекомендуется** отдельная будущая уточняющая пометка о типе поля `spaceType` (`SpaceTypeId`, не независимая схема) — отдельный шаг, не выполняемый здесь. |
| ACS-004 | Не изменяется. `buildPromptDraft(structuredScene, ...)` остаётся валидным контрактом; типизация `spaceType` внутри `StructuredScene` уточняется на уровне ADR-010, не ACS-004. |
| Gate 2 Candidate Assessment | Readiness Requirement 2 переходит из Blocked в состояние, готовое к формальной оценке C8, после принятия этого ADR (обновление — отдельный шаг, ранее решено делать одним пакетом). |
| C3 — ADR-004 Gap Review | Не изменяется; этот ADR — прямой ответ на её раздел 7. |

---

## 11. Open Questions / Future Work

Явно не решается здесь, остаётся для будущих шагов:

1. Является ли Room Analyzer одним физическим модулем или набором кооперирующих подкомпонентов (Classifier + Scene Analyzer) — implementation-level вопрос.
2. Выбор Perception-механизма для `photo → StructuredScene` (CV-модель, гибрид, и т.д.) — отдельный архитектурный вопрос, вероятно отдельный ADR.
3. Полная финализация схемы `StructuredScene` (`objects`, `lighting`, `geometry`, `constraints`) — предмет будущего Scene Graph ADR в рамках C8, не этого документа.
4. Формальное обновление схемы-ориентира в ADR-007 (пометка `spaceType: SpaceTypeId`) — рекомендуется как отдельный governance-шаг после принятия этого ADR.
5. Момент и способ синхронизации Gate 2 Candidate Assessment (Readiness Requirements) с принятием этого ADR.
