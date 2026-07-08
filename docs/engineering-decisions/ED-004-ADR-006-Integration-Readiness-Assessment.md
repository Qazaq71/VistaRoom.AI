# ED-004 — ADR-006 Integration Readiness Assessment

## Status

Accepted
Accepted by: Project Owner
Date: 2026-07-08
Revision: 3

## Related Documents

- [ADR-006 — Generation Intelligence Mode Contract](../adr/ADR-006-Generation-Intelligence-Mode-Contract.md)
- [ADR-008 — Generation Intelligence Architectural Boundaries](../adr/ADR-008-Generation-Intelligence-Architectural-Boundaries.md) 
  — использует установленные здесь факты как основу.

## Problem

ADR-006 (Generation Intelligence Mode Contract) описывает синхронный Public 
Contract: generate(params) => { status: "success"|"error", resultImage?, actualCost, actualLatency, ... } Source review (7 файлов: ADR-006, ACS-001, route.ts, InteriorService.ts, 
ImageProvider.ts, OpenAIImageProvider.ts, createImageProvider.ts) выявил 
расхождения между этим контрактом и текущим состоянием production-кода. 
Документ фиксирует эти расхождения как установленные факты, без предрешения 
способа их устранения.

## Findings / Assessment

1. Production pipeline работает через асинхронную постановку в очередь fal.ai 
   — `OpenAIImageProvider.submit()` возвращает `{ requestId, statusUrl, 
   responseUrl }`, а не синхронный результат генерации (`status`/`resultImage`/
   `actualCost`/`actualLatency`), описанный в ADR-006 Public Contract.
2. Физического модуля, реализующего ACS-001 Generation Intelligence как 
   отдельный тестируемый компонент, в коде не существует. `InteriorService` 
   — чистый passthrough (`return this.provider.submit(request)`), без логики 
   режимов, инвариантов или разграничения `mode`.
3. Инвариант ADR-006 Decision ("отклонять несогласованный вызов при 
   `FULL_GENERATION`+маска или `PARTIAL_EDIT`/`INPAINTING` без маски") не 
   реализован ни в `route.ts`, ни в `InteriorService`, ни в 
   `OpenAIImageProvider`.
4. Терминология `mode` в ADR-006/ACS-001 (`FULL_GENERATION`/`PARTIAL_EDIT`/
   `INPAINTING`) не совпадает 1:1 с терминологией кода (`'style'/'partial'/
   'clear'` как `mode`, `'redesign'/'replace'/'erase'` как `operation`) — 
   прямой маппинг не зафиксирован ни в одном документе.
5. `qualityTier` и `size` (Dimensions), обязательные параметры Public 
   Contract ADR-006, не передаются через пайплайн как явные параметры 
   вызова: `qualityTier` захардкожен константой в `OpenAIImageProvider`, 
   `size` частично представлен `aspectRatio`, но не как отдельная сущность.
6. `mode === 'clear'` (erase) не описан в ADR-006 mode-enum вообще; у него 
   отдельный путь в коде (`ERASE_FALLBACK_PROMPT`), не покрытый ADR-006.

Способ устранения этих расхождений (адаптация контракта под async-модель, 
ревизия ADR-006, создание нового модуля или иной путь) не определён этим 
документом и требует отдельного owner decision.

## Non-goals

- Этот документ не решает, как именно расхождения будут устранены.
- Не создаёт и не проектирует модуль Generation Intelligence.
- Не переоткрывает ADR-005 или ADR-007.
- Не решает backlog-пункты (negative prompt gap, Material↔Color priority, 
  hexToColorDescription relevance).

## Consequences

Implementation work по ADR-006 Integration не начинается до утверждения owner 
scope и соответствующего Integration Decision. `route.ts` не модифицируется в 
рамках этого документа. Настоящий документ не рассматривает 
`mode === 'clear'`. Вопрос остаётся открытым до отдельного owner decision.
