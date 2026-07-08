# ADR-008 — Generation Intelligence Architectural Boundaries

## Status

Accepted
Accepted by: Project Owner
Date: 2026-07-08
Revision: 3

## Related Documents

- [ADR-006 — Generation Intelligence Mode Contract](./ADR-006-Generation-Intelligence-Mode-Contract.md) 
  — фиксирует контракт ACS-001, чьи границы интеграции определяет настоящий ADR.
- ED-004 — ADR-006 Integration Readiness Assessment (Accepted, 2026-07-08) — 
  источник фактов, на которых основан настоящий документ.
- ACS-001 — Generation Intelligence.

## Purpose

Определить архитектурные границы интеграции ACS-001 Generation Intelligence в 
текущей архитектуре VistaRoom AI. Документ отвечает только на шесть вопросов, 
поставленных владельцем, определяет рамки, а не изменяет действующий Public 
Contract ADR-006, и не содержит implementation-решений, кода или проектирования 
новых модулей/интерфейсов.

## Context

Опирается на установленные факты ED-004 (Accepted, 2026-07-08): физического 
модуля Generation Intelligence в коде нет; production pipeline асинхронен 
(fal.ai queue); mask-инвариант ADR-006 нигде не реализован; терминология `mode` 
в коде не совпадает 1:1 с enum ADR-006; `mode === 'clear'` не покрыт ADR-006 
вообще. Настоящий документ не пересматривает эти факты и не заменяет 
действующий контракт ADR-006 — он определяет границы, в которых будущее 
Integration Decision будет разворачиваться.

---

## 1. Архитектурная граница ACS-001 (Generation Intelligence)

Граница ACS-001 определяется как логический сегмент между получением готового 
`promptString` (результат Prompt Intelligence/ADR-005) и вызовом Provider Layer. 
Эта граница на сегодня не воплощена как отдельный модуль — она распределена 
между диспетчеризацией по `mode` в `route.ts` и вызовом провайдера. Решение: 
для целей интеграции эта граница признаётся существующей архитектурно, но не 
выделенной физически — вопрос о выделении её в отдельный модуль относится к 
будущему implementation-этапу, а не к этому документу.

## 2. Public Contract ACS-001 внутри production pipeline

Current production pipeline реализует асинхронную queue-модель, которая не 
совпадает с Public Contract ADR-006. Настоящий документ не определяет, каким 
образом это расхождение будет устранено, и не заменяет действующий контракт 
ADR-006 каким-либо иным контрактом. Устранение расхождения (адаптация ADR-006, 
ревизия контракта или иной путь) остаётся предметом отдельного owner decision.

## 3. Граница между Generation Intelligence и Provider Layer (async boundary)

Для целей Gate 1 архитектурная граница между Generation Intelligence и Provider 
Layer проходит в области передачи запроса провайдеру. Конкретная реализация 
этой архитектурной границы определяется последующим Implementation Package.

## 4. Соотношение production-режимов (`style`, `partial`, `clear`) с моделью ADR-006

Mapping production mode ↔ ADR-006 выходит за рамки настоящего документа и будет 
определён отдельным owner decision.

## 5. Место mask invariant, описанного ADR-006

Mask invariant относится к области ответственности Generation Intelligence. 
Конкретный механизм реализации определяется отдельно.

## 6. Что сознательно остаётся вне scope Gate 1

- Выделение Generation Intelligence в отдельный физический модуль.
- Реализация (код, механизм) mask invariant.
- Mapping production mode ↔ ADR-006 enum.
- Формализация `qualityTier` и `size` как явных параметров вызова.
- Устранение расхождения Public Contract ADR-006 ↔ async pipeline.
- Backlog-пункты (negative prompt gap, Material↔Color priority, 
  hexToColorDescription relevance) — не затрагиваются.

## Non-goals

Документ не содержит Implementation Package, не проектирует классы/интерфейсы, 
не предлагает diff, не переоткрывает ADR-005, ADR-007 или ED-004, не заменяет и 
не изменяет действующий Public Contract ADR-006.

## Consequences

Документ определяет архитектурные границы и область рассмотрения интеграции 
ACS-001 Generation Intelligence для Gate 1. Implementation work не начинается в 
рамках этого документа — она требует отдельного Implementation Package, который 
может быть подготовлен только после Accepted-статуса этого решения.
