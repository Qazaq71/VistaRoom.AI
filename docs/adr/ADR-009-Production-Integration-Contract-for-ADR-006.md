# ADR-009 — Production Integration Contract for ADR-006 Generation Intelligence

## Status

**Accepted**
Accepted by: Project Owner
Date: 2026-07-09

## Related Documents

- [ADR-006 — Generation Intelligence Mode Contract](../adr/ADR-006-Generation-Intelligence-Mode-Contract.md) — Public Contract, чьё расхождение с production-кодом устраняет этот документ.
- [ADR-008 — Generation Intelligence Architectural Boundaries](../adr/ADR-008-Generation-Intelligence-Architectural-Boundaries.md) — сознательно оставил пять вопросов открытыми (раздел 6); этот ADR закрывает их.
- ED-004 — ADR-006 Integration Readiness Assessment (Accepted) — источник фактов из первичного source review.
- Source review `route.ts` + расширенный source review по всей кодовой базе (эта сессия, 2026-07-09) — источник фактов Decision 1.
- ADR-003 — PromptContext Contracts (Proposed) — Contract 2 concerns a separate, orthogonal entity: `PromptGenerationMode` / `generationMode` (style source: catalog vs. custom). It does not overlap with Decision 1 of this ADR, which concerns only `InteriorMode` / `InteriorOperation` dispatch.

## Purpose

Формализовать контракт между Public Contract ADR-006 и фактическим состоянием production pipeline. Документ отвечает **только** на пять вопросов, оставленных открытыми ADR-008 §6. Не переоткрывает ADR-006 Mode Contract как таковой, не проектирует код, не заменяет ED-004.

## Context

Факты из ED-004: производственный pipeline асинхронен (fal.ai queue); физического модуля Generation Intelligence нет; mask-инвариант нигде не реализован; `mode`/`operation` в коде не совпадают 1:1 с enum ADR-006; `qualityTier` захардкожен, `size` представлен `aspectRatio`; `mode === 'clear'` не покрыт ADR-006.

Дополнительный факт, установленный узким source review `route.ts`, впоследствии расширенным на всю кодовую базу (эта сессия, 2026-07-09): первоначальное предположение о жёсткой связи `mode ↔ operation` по трём фиксированным парам опровергнуто. Диспетчеризация построена как условная цепочка с безусловным fallback, а не как явная таблица соответствий. Расширенный review подтвердил: это единственная точка такой диспетчеризации в проекте — второй, дублирующей или переопределяющей логики не найдено.

---

## Decision 1 — Mode / Operation Dispatch (Fallback-Based)

Source review `route.ts` показал: `operation` определяется не по значению `mode` изолированно, а диспетчеризацией вида:

```
if (mode === 'clear' && есть маска)        → operation: 'erase'
else if (mode === 'partial' && есть маска) → operation: 'replace'
else                                        → operation: 'redesign'   // безусловный fallback
```

Ветка `redesign` — **fallback**, срабатывающий во всех случаях, не покрытых двумя явными условиями выше, включая:
- `mode === 'style'`;
- `mode === 'partial'` или `mode === 'clear'`, заявленные, но без маски;
- любое нераспознанное значение `mode` (поле читается из формы как свободная строка, без рантайм-валидации по enum).

Соответствие ADR-006 enum, зафиксированное этим документом, ограничено только фактически проверяемыми условиями:

| Условие в коде | Соответствие ADR-006 |
|---|---|
| `mode === 'clear'` **и** маска присутствует | вне scope ADR-006 (см. Decision 5) |
| `mode === 'partial'` **и** маска присутствует | `PARTIAL_EDIT` |
| fallback-ветка `redesign` (все прочие случаи, включая `mode === 'style'`) | `FULL_GENERATION` |

`INPAINTING` не имеет production-вызывающей стороны в зафиксированной диспетчеризации — это фиксируется как факт, а не устраняется расширением production-кода.

Этот документ не устанавливает жёсткую таблицу пар "значение mode → значение operation" — такой связи в коде не существует. Он фиксирует фактическое условное поведение fallback-цепочки как есть.

## Decision 2 — Sync/Async Reconciliation

Public Contract ADR-006 описывает результат **завершённой** генерации, а не немедленный ответ вызова. Он применяется в точке **resolution** очереди, а не в точке **submission**.

Модель фиксируется как двухфазная на уровне контракта:
- **Submission phase** — постановка в очередь fal.ai; форму этой фазы ADR-006 не описывает и не обязан описывать.
- **Resolution phase** — момент, когда результат генерации становится известен; на этом этапе форма ответа обязана соответствовать Public Contract ADR-006 без исключений.

Данный ADR намеренно не определяет механизм получения resolution. Выбор конкретного подхода к реализации остаётся вне scope этого документа.

## Decision 3 — Mask Invariant Mechanism

Валидация инварианта — явная синхронная проверка, выполняемая **до** передачи запроса Provider Layer, на границе, зафиксированной ADR-008 §1 (сегодня — внутри диспетчеризации по `mode` в `route.ts`).

Validation failures shall be represented explicitly rather than relying on implicit runtime behavior. Конкретная форма этого представления (union-тип, объект результата, иной механизм) данным ADR не определяется — это решение Implementation Package.

**Прямая связь с Decision 1:** source review дополнительно устанавливает, что сегодня отсутствие этой проверки означает не явный отказ, а молчаливый переход в fallback-ветку `redesign`. Вызов с `mode === 'partial'` без маски — по духу ADR-006 невалидный вызов, но фактически код не отклоняет его, а исполняет как `FULL_GENERATION`/`redesign`. То же для `mode === 'clear'` без маски.

## Decision 4 — `qualityTier` / `size` Formalization

- `qualityTier` передаётся как явный параметр вызова, соответствующий форме Public Contract ADR-006.
- `size: Dimensions` формируется на границе Generation Intelligence как производное представление, соответствующее Public Contract ADR-006; существующее использование `aspectRatio` этим ADR не отменяется.

Данный ADR не определяет конкретное представление типа `Dimensions`.

## Decision 5 — Place of `mode === 'clear'`

Decision 5 определяет **намеренную архитектурную классификацию** erase-пути: `mode === 'clear'` в сочетании с наличием маски (production `operation: 'erase'`) исключается из scope Mode Contract ADR-006. Он не расширяет enum `mode` ADR-006 и не подчиняется mask-инварианту ADR-006, поскольку не является вызовом Generation Intelligence в смысле этого контракта.

Decision 1 отдельно документирует **фактическое диспетчерское поведение** production-кода: случай `mode === 'clear'` без маски фактически достигает fallback-ветки и исполняется как `redesign`/`FULL_GENERATION`.

То, что текущее производственное поведение достигает fallback `FULL_GENERATION` в этом случае, **не переопределяет** архитектурную классификацию, установленную настоящим Decision. Расхождение между намеренной классификацией erase-пути и фактическим поведением диспетчеризации без маски фиксируется как факт (см. Decision 1/3) и не устраняется этим ADR.

Формальное архитектурное место erase-пути (за пределами исключения из scope ADR-006) этим ADR не определяется — потребует отдельного будущего ADR.

---

## Non-goals

Этот ADR не:
- проектирует код или интерфейсы Implementation Package;
- редактирует текст Public Contract ADR-006;
- переоткрывает ADR-005, ADR-007, ED-004;
- решает backlog-пункты (negative prompt gap, Material↔Color priority, hexToColorDescription relevance);
- определяет конкретную форму представления validation failures (Decision 3), конкретный механизм resolution (Decision 2) или представление `Dimensions` (Decision 4);
- вводит рантайм-исправление найденного в Decision 3/5 расхождения между намерением и фактическим поведением — это фиксация факта, а не изменение текущего кода.

## Consequences

After acceptance of this ADR, the architectural questions identified by ADR-008 §6 are considered resolved within the scope defined by this document.

Implementation Package may still require engineering choices necessary to realize these decisions. Such choices must remain within the architectural boundaries established by ADR-006, ADR-008 and this ADR.

If implementation requires changing those boundaries, work shall stop until a new ADR or ED is accepted.

## Traceability Note for future Implementation Package

`OpenAIImageProvider.ts` contains a provider-layer behavior point where `operation === 'erase'` affects fallback prompt selection. This is not a second dispatch point and not an ADR-009 decision, but it must be included in the Implementation Package traceability table.
