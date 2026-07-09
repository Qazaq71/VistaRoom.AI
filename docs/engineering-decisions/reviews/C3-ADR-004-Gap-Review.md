# C3 — ADR-004 Gap Review

**Document Type:** Architecture Gap Review
**Status:** Accepted
**Date:** 2026-07-09
**Baseline Reference:** Project Context v2.2; Gate 2 Candidate Assessment (`d3c393e`), Readiness Requirement 1
**Prepared by:** Claude (Chief Software Architect / Specification Partner)
**Approval Authority:** Nurlan (Project Owner)

---

## 1. Purpose

Настоящий документ выполняет Readiness Requirement 1, зафиксированное в Owner Decision по Gate 2 Candidate Assessment (раздел 10.1): gap review терминологии ADR-004 (`RoomContext`/`SpaceType`/`SpatialPromptContext`) относительно принятого Gate 1 baseline (ADR-005, ACS-004, ADR-007) и относительно направления C8 (Semantic Spatial Intelligence Core).

**Источник материала:** фрагменты документов извлечены Claude Code из репозитория (read-only, без интерпретации) — ADR-004, ADR-005, ACS-004, ADR-007, Gate 2 Candidate Assessment, Project Context v2.2. Настоящий анализ построен на этих фрагментах, а не на полном построчном прочтении файлов данным экземпляром — что соответствует ограничению, уже зафиксированному в Gate 2 Candidate Assessment (раздел 1).

**Scope:** определить (а) есть ли контрактное противоречие между терминологией ADR-004 и принятыми ADR-005/ACS-004/ADR-007; (б) есть ли нерешённый архитектурный gap, требующий Architecture Decision Required; (в) как это влияет на C8.

Документ не вводит новое архитектурное решение и не проектирует его содержание.

---

## 2. Terminology Map (по извлечённым фрагментам)

| Термин | ADR-004 | ADR-005 | ACS-004 | ADR-007 |
|---|---|---|---|---|
| `RoomContext` | Core subject — raw user input, `roomType: string`, не классификация | не упоминается | не упоминается | упоминается (в контрасте с `SpatialPromptContext`) |
| `SpaceType` | Core subject — классифицированная модель, `DesignDomainId` | не упоминается | не упоминается | упоминается |
| `SpatialPromptContext` | DS-7.4, реализован в коде, но не подключён (Prompt Engine его не потребляет) | не упоминается | не упоминается | упоминается — явно не заменяет `StructuredScene`/`ProjectDesignContext` |
| `StructuredScene` | не упоминается | параметр `buildPromptDraft` (тип, без схемы) | параметр `buildPromptDraft` (тип, без схемы) | Core subject — производится `analyzeRoom(photo)`, схема "ориентир, не финализирована" |
| `ProjectDesignContext` | не упоминается | параметр `buildPromptDraft` (тип, без схемы) | параметр `buildPromptDraft` (тип, без схемы) | Core subject — производится `composeProjectContext(...)`, без формального типа |

**Наблюдение:** ADR-004 и ADR-007 — единственные два документа, где все пять терминов со-встречаются. ADR-005 и ACS-004 используют `StructuredScene`/`ProjectDesignContext` исключительно как типизированные имена параметров, не определяя их схему и не упоминая `RoomContext`/`SpaceType`/`SpatialPromptContext` вовсе.

---

## 3. Contract Boundary Analysis

### 3.1 Прямого контрактного противоречия не обнаружено

ADR-005 и ACS-004 нигде не ссылаются на `RoomContext`, `SpaceType` или `SpatialPromptContext` — соответственно, они не могут им противоречить на уровне текста. Это разрешает часть вопроса, зафиксированного в Gate 2 Candidate Assessment как "unconfirmed connection": **связи в явном виде нет, но и противоречия нет — потому что связь нигде не установлена**.

### 3.2 ADR-007 уже частично провёл этот review

ADR-007 явно фиксирует: *"ADR-004 | SpatialPromptContext — отдельная модель, не пересекается с scope этого ADR; проверено и подтверждено source review."* Это означает, что для пары `SpatialPromptContext` ↔ `StructuredScene`/`ProjectDesignContext` non-overlap уже был формально проверен и принят ранее, в рамках ADR-007. C3 не находит оснований пересматривать этот вывод — он уже находится в принятом документе.

---

## 4. Confirmed Gap — Room Analyzer / SpaceType ↔ StructuredScene

Это ключевая находка данного review, ранее не зафиксированная в явном виде.

**Наблюдение:** оба документа — ADR-004 и ADR-007 — независимо называют один и тот же будущий компонент, **Room Analyzer**, как нереализованный producer:

- ADR-004 (§8, Future Evolution): "Multiple mechanisms could eventually implement the `RoomContext → SpaceType` mapping — a Rule Engine, an AI Classifier, a Vision Analyzer, Manual Mapping, an ML Classifier... remains a future Room Analyzer's job."
- ADR-007 (Context): "`StructuredScene`... производится `analyzeRoom(photo) => StructuredScene`... Требует Room Analyzer — анализ фотографии помещения."

**Ни один документ не устанавливает**, является ли это одним и тем же компонентом с двумя выходами (`SpaceType` и `StructuredScene`), двумя разными компонентами со случайно совпавшим названием, или одним компонентом, производящим `StructuredScene`, внутри которой `SpaceType` — лишь одно из полей.

Это усиливается тем, что схема-ориентир `StructuredScene` в ADR-007 включает поле `spaceType` (строчное, неформальное упоминание в списке `spaceType, objects, lighting, geometry, constraints`) — при этом **нигде не установлено**, является ли это поле тем же формальным `SpaceType`-моделем, который определён в ADR-004 (с `DesignDomainId`, классифицированной таксономией), простым текстовым дублем без связи, или чем-то третьим.

**Вывод:** это не терминологическое совпадение и не контрактное противоречие — это **архитектурно нерешённый вопрос**, у которого есть конкретный текстовый след в двух принятых ADR, а не гипотетическое допущение.

---

## 5. Secondary Finding — терминологическая несогласованность "Prompt Engine" (non-blocking)

Обнаружено (не относится к Architecture Decision Required, фиксируется как документационная гигиена):

- ADR-004 использует "Prompt Engine" как терминальный узел Phase 7 hierarchy и как Track-1 label в bridge-таблице ADR-005.
- ACS-004 не использует термин "Prompt Engine" вовсе — везде "Prompt Intelligence".
- Project Context v2.2 и Gate 2 Candidate Assessment используют "Prompt Engine" для обозначения C2 — deferred full-lifecycle capability (`refinePromptDraft`).

Это три разных референта под одним именем в разных документах. Поскольку ни один из этих документов функционально не взаимодействует через этот термин (он не используется как вызываемый контракт, только как label/название), это не создаёт контрактного риска — но создаёт риск путаницы при дальнейшей работе над C2 и C8 одновременно. Рекомендация: рассмотреть как отдельный ED (terminology alignment / glossary), не как ADR.

---

## 6. Impact on C8

Находка раздела 4 напрямую и материально влияет на C8 (Semantic Spatial Intelligence Core):

- C8 предполагает построение producer'а для `StructuredScene`/`ProjectDesignContext` (см. Gate 2 Candidate Assessment §8.5) — то есть именно того компонента, который ADR-004 и ADR-007 оба называют "Room Analyzer", не определяя его архитектуру.
- C8 не может быть спроектирован без явного решения: является ли `SpaceType` (ADR-004) входом, частью или отдельной от `StructuredScene.spaceType` (ADR-007) сущностью.
- Это подтверждает — не как гипотезу, а на основании текста двух принятых документов — предварительный вывод Gate 2 Candidate Assessment §8.7 о необходимости нового ADR по теме "Scene Graph Schema & Producer Architecture", и сужает его: этот ADR должен явно разрешить отношение `SpaceType` (ADR-004) ↔ `StructuredScene.spaceType` (ADR-007), а не только определить схему scene graph "с нуля".

---

## 7. Architecture Decision Required — Determination

**Confirmed.**

В отличие от раздела 8.7 Gate 2 Candidate Assessment, где это фиксировалось как предварительный assessment finding, данный C3 gap review основывается на прямом текстовом анализе двух принятых ADR (ADR-004, ADR-007) и подтверждает: связь между `RoomContext → SpaceType` (ADR-004) и `RoomContext/photo → StructuredScene` (ADR-007, через Room Analyzer) архитектурно не определена ни в одном принятом документе.

Новое ADR должно как минимум разрешить:
1. Является ли Room Analyzer из ADR-004 §8 и Room Analyzer из ADR-007 одним компонентом.
2. Как (и является ли) `SpaceType` (ADR-004) связан с полем `spaceType` в схеме-ориентире `StructuredScene` (ADR-007).
3. Архитектуру producer'а `StructuredScene`/`ProjectDesignContext` в целом (что уже было предусмотрено в §8.7 Gate 2 Candidate Assessment).

Настоящий документ не формулирует содержание этого ADR и не выбирает архитектурный подход — это остаётся отдельным шагом, следующим за Owner Decision по итогам этого review.

---

## 8. Explicit Non-Decision

Настоящий gap review:
- не принимает решение о содержании нового ADR;
- не создаёт Roadmap;
- не создаёт Implementation Package;
- не переоткрывает Architecture Freeze (ADR-000–006) — находка относится к ADR-007/ADR-004 (Gate 1 Governance Additions layer), не к замороженному слою;
- не завершает Readiness Requirement 2 (Gate 2 Candidate Assessment §10.1) самостоятельно — Requirement 2 требует отдельной, более широкой формальной оценки C8 в целом, для которой находки этого документа являются входными данными, а не заменой.

---

## 9. Owner Decision

**Решение:** ☑ Accepted — C3 finding принят
**Дата:** 2026-07-09

Владелец проекта подтвердил находки настоящего review без изменений:

1. **Readiness Requirement 1 (C3 — ADR-004 gap review) — Completed.**
2. **ADR-004 ↔ ADR-005/ACS-004 — контрактного противоречия нет**, поскольку терминологические множества этих документов не пересекаются в тексте (раздел 3.1).
3. **ADR-004 ↔ ADR-007 — подтверждён конкретный архитектурный gap** (раздел 4): оба документа независимо ссылаются на будущий Room Analyzer, не определяя, один ли это компонент, и как `SpaceType` (ADR-004) соотносится с `StructuredScene.spaceType` (ADR-007).
4. **Architecture Decision Required — подтверждён** (раздел 7).
5. **Readiness Requirement 2 (формальная архитектурная оценка C8) — Blocked** до подготовки и принятия нового ADR, разрешающего связь между: Room Analyzer, `RoomContext`, `SpaceType`, `SpatialPromptContext`, `StructuredScene`, `StructuredScene.spaceType` и будущим C8.
6. Implementation planning не начинается.
7. Roadmap не создаётся.
8. Architecture Freeze не переоткрывается ad hoc.
9. Содержание будущего ADR не разрешается внутри настоящего документа (см. раздел 10 — только рабочее название и scope).

### 9.1 Updated Readiness Requirements Status

| # | Требование | Статус |
|---|---|---|
| 1 | C3 — ADR-004 gap review | **Completed** |
| 2 | C8 оценивается на предмет требуемых архитектурных решений | **Blocked** — до подготовки и принятия нового ADR (раздел 10) |
| 3 | Подготовка требуемого ADR (Architecture Decision Required, раздел 7) | Pending — следующий шаг |
| 4 | Обновления ACS/PCS/ADR/Project Context | Pending — зависит от содержания нового ADR |
| 5 | Финальная оценка scope Gate 2 | Pending — зависит от п. 1–4 |

---

## 10. Next Required Artifact (название и scope — рекомендация, не содержание ADR)

**Working title:** ADR-010 — Room Analyzer / SpaceType / StructuredScene Boundary

**Предлагаемый scope (только рамки, не содержание решения):**
- Разрешить, является ли Room Analyzer из ADR-004 §8 (future evolution, `RoomContext → SpaceType` mapping mechanism) и Room Analyzer из ADR-007 (producer `analyzeRoom(photo) => StructuredScene`) одним компонентом, двумя разными компонентами, или одним компонентом с уточнением ответственности.
- Разрешить отношение `SpaceType` (ADR-004, формальная классифицированная модель с `DesignDomainId`) к полю `spaceType` в схеме-ориентире `StructuredScene` (ADR-007) — идентичны, одно вложено в другое, или независимы.
- Зафиксировать эту границу как architectural invariant, аналогично тому, как ADR-004 зафиксировал границу `RoomContext`/`SpaceType`.

**Явно вне scope этого будущего ADR** (чтобы не расширять его до полной архитектуры Scene Graph):
- Полная схема Functional Scene Graph / Scene Understanding (это относится к C8 в целом, после снятия блокировки).
- Perception-слой (источник данных: CV, ручная разметка, гибрид) — отдельная, ещё не оценённая зависимость (Gate 2 Candidate Assessment §8.10).
- Пересмотр ADR-000–006 (Architecture Freeze) — вне scope, не переоткрывается.

Настоящий раздел предлагает только рамки будущего документа. Содержание, формулировки решения и структура самого ADR-010 не разрабатываются здесь.
