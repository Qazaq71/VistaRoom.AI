# ADR-007 — StructuredScene / ProjectDesignContext: Null Placeholder Until Upstream Capabilities Exist

## Status

Accepted
Accepted by: Project Owner
Date: 2026-07-08

Documentation-only. Не меняет код, не проектирует Room Analyzer или Project Composer, не реализует mapping.

## 1. Context

ACS-004 (Prompt Intelligence) фиксирует `structuredScene` и `projectDesignContext` как **обязательные** входы `buildPromptDraft()`:
buildPromptDraft(
structuredScene: StructuredScene,
projectDesignContext: ProjectDesignContext,
domainDecisions: DomainDecision[]
) => PromptDraft

Source review установил:

- **`StructuredScene`** (ACS-002, Scene Intelligence) производится `analyzeRoom(photo) => StructuredScene`. Схема (`spaceType`, `objects`, `lighting`, `geometry`, `constraints`) зафиксирована в ACS-004 только как ориентир, явно не финализирована. Требует Room Analyzer — анализ фотографии помещения. Ни ACS-002, ни Room Analyzer не реализованы в коде проекта.
- **`ProjectDesignContext`** (ACS-003, AI Orchestration) производится `composeProjectContext(structuredScenes: StructuredScene[], userPreferences?) => ProjectDesignContext`, сам зависит от уже готовых `StructuredScene[]`. Описан только словесно ("стиль, палитра, материалы"), без формального типа. ACS-003 не реализована в коде проекта.
- Смежная сущность **`SpatialPromptContext`** (`prompt-integration/`, ADR-004/DS-7.4) — реально существует в коде, но архитектурно не является заменой ни `StructuredScene`, ни `ProjectDesignContext`. Составляется из `SpaceType` + Spatial Knowledge, не читает `RoomContext`, не читает фото, нигде не импортируется — полностью изолирована от production pipeline (её собственный README, §18).
- Production pipeline (`route.ts`) сегодня — единичный запрос на одно помещение: фотография загружается в blob и передаётся провайдеру напрямую, без анализа в структурированную сцену; концепции "проекта из нескольких помещений" в production-коде не существует.

## 2. Architectural Constraint

**Gate 1 сознательно интегрирует ACS-004 (потребителя) раньше, чем ACS-002 и ACS-003 (производителей) существуют в коде.**

Это не побочный эффект нехватки mapping-логики — это описание фактического порядка, в котором строилась архитектура: Formatter/Prompt Builder/Rule Engine (ACS-004) были доведены до production integration в Step 3 (ADR-005 Integration) до того, как Scene Intelligence и AI Orchestration получили хоть какую-то реализацию. `null` в `structuredScene`/`projectDesignContext` — прямое следствие этого порядка, а не независимая техническая деталь.

## 3. Decision

Для текущей реализации Gate 1 передача `null` в качестве `structuredScene` и `projectDesignContext` является допустимым архитектурным решением до появления реализованных upstream capabilities, обусловленным Architectural Constraint (раздел 2), а не техническим долгом или недосмотром.

Source review подтверждает три факта: производителя сейчас нет; `null` используется; это сделано осознанно в Gate 1. Source review не доказывает, что `null` — единственно верный контракт на всё время существования этого ограничения: через полгода может появиться иной временный источник данных (например, частичная реализация Room Analyzer, дающая неполный `StructuredScene`). Этот ADR фиксирует текущее состояние как допустимое, а не как единственно возможное впредь.

## 4. Что должно стать производителями этих объектов в будущем

| Объект | Будущий производитель | Текущий статус |
|---|---|---|
| `StructuredScene` | Room Analyzer внутри Scene Intelligence (ACS-002) | Не реализован; ACS-002 существует только как документ |
| `ProjectDesignContext` | `composeProjectContext()` внутри AI Orchestration (ACS-003) | Не реализован; ACS-003 существует только как документ; зависит от `StructuredScene[]` |

## 5. Exit Conditions

Данный ADR подлежит пересмотру после появления одной или обеих upstream capabilities — не обязательно одновременно. Возможны разные траектории: например, сначала может появиться Room Analyzer и `StructuredScene`, а Prompt Builder начнёт использовать только его, оставляя `projectDesignContext` как `null` дольше; либо порядок будет обратным. Source review не даёт оснований запрещать частичное подключение.

Конкретная стратегия замены `null` — на что именно и когда — определяется отдельным ADR Integration в момент, когда соответствующая upstream capability реализована. Этот ADR фиксирует только причину текущего ограничения, не сценарий его снятия.

## 6. Non-goals

Этот ADR **не**:
- проектирует Room Analyzer;
- проектирует реализацию `composeProjectContext()`;
- проектирует временный stopgap-адаптер из `room`/`style`/`details`;
- меняет какой-либо код;
- затрагивает ADR-006 Integration;
- пересматривает `SpatialPromptContext` или ADR-004;
- фиксирует конкретную стратегию или порядок замены `null` (см. раздел 5 — это будущий ADR Integration).

## 7. Relation to existing ADRs

| ADR | Связь |
|---|---|
| ADR-004 | `SpatialPromptContext` — отдельная модель, не пересекается с scope этого ADR; проверено и подтверждено source review. |
| ADR-005 | Formatter принимает `FormatterPromptDraft`, собранный из `domainDecisions[]`; `structuredScene`/`projectDesignContext` не декомпозируются в `elements[]` — не меняется этим ADR. |
| ADR-006 | Не начинается до принятия этого ADR (порядок, согласованный владельцем). |

## 8. Consequences

- Этот ADR не узаконивает комментарий в `route.ts` ("Gate 1 limitation: structuredScene/projectDesignContext mapping — открытый архитектурный вопрос") — он объясняет архитектурную причину, по которой этот комментарий существует: Gate 1 сознательно внедрил потребителя (ACS-004) раньше производителей (ACS-002/ACS-003).
- `buildPromptDraft(null, null, domainDecisions)` остаётся неизменным в коде — этот ADR ничего не меняет технически.
- Будущая работа над ACS-002/ACS-003 получает явно зафиксированную причину текущего состояния, но не предрешает, как именно и в каком порядке `null` будет заменён — это решает отдельный будущий ADR Integration.
- Гэп из резюме памяти ("structuredScene/projectDesignContext mapping — open gap requiring a dedicated ADR") закрывается этим документом на уровне причины; сам mapping и порядок его появления остаются будущей, отдельной задачей.
