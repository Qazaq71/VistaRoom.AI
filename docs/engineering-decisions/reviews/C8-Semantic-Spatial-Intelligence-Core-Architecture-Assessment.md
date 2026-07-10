# C8 — Semantic Spatial Intelligence Core Architecture Assessment

**Тип документа:** Architecture Assessment
**Статус:** Accepted as readiness artifact. Final Gate 2 scope — NOT approved, remains Pending.
**Соответствует:** Gate 2 Readiness Requirement 2 (Formal C8 Architecture Assessment)
**Предшествующие документы:** Gate2-Candidate-Assessment.md, C3-ADR-004-Gap-Review.md, ADR-010 (Accepted)
**Данный документ не является:** Roadmap, Implementation Package, ADR, финальным утверждением Gate 2 scope

---

## Owner Decision

**Option C — Accepted.**

Minimal coherent C8 slice принимается как readiness direction для Gate 2. Финальный Gate 2 scope не утверждён и требует staged ADR sequence (см. ниже) до утверждения.

Примечание для traceability: наименование "Option C" здесь — решение Owner, зафиксированное в его собственной формулировке. Оно ближе всего к Menu Option B из раздела 8 предыдущей версии данного документа (minimal coherent slice as Gate 2), но не идентично ни одному из вариантов A–D дословно, так как Owner Decision дополнительно вводит обязательный staged ADR sequence как условие. Раздел 8 сохранён ниже как reference menu, а не как источник решения.

**Clarifications, зафиксированные Owner:**

1. Representation ADR и Scene Graph Schema ADR **не объединяются**. Это решения разного уровня:
   - **C8 Boundary / Representation ADR** — определяет архитектурную роль и границу C8 как capability.
   - **Scene Graph Schema ADR** — определяет конкретную схему данных, и принимается только после утверждения границы.
2. **Perception Boundary не идёт первым.** Принцип: механизм perception не выбирается до того, как определено, что именно C8 должна представлять и как будет оцениваться корректность этого представления.
3. Требуется **отдельный C8 Boundary ADR**. ADR-010 разрешил только узкую границу Room Analyzer / SpaceType / StructuredScene.spaceType и не определяет полную границу capability C8.

**Confirmed ADR sequence:**

1. C8 Boundary / Representation ADR
2. Scene Graph Schema ADR — либо, если преждевременно, Evaluation Contract ADR
3. Evaluation Contract ADR
4. Perception Boundary ADR

**Next required document:** C8 Boundary / Representation ADR. Не пишется в рамках данного документа.

---

## 0. Scope этой оценки

**В scope:**
- Определение C8 как platform capability
- Оценка пригодности C8 как стратегического центра Gate 2
- Идентификация архитектурных решений, необходимых до утверждения final Gate 2 scope
- Определение необходимых новых ADR (без их написания)
- Определение необходимых ACS/PCS/Project Context updates
- Определение minimal coherent Gate 2 scope candidate
- Явное перечисление того, что остаётся вне scope
- Owner Decision options

**Вне scope (независимо от результата):**
- Roadmap
- Implementation Package
- Code planning
- Утверждение final Gate 2 scope
- Написание содержимого новых ADR
- Расширение C8 на marketplace, budget, AI Agent, multi-room workspace, furniture sizing, full product workspace
- Переоткрытие Architecture Freeze (ADR-000–006)
- Изменение принятых ADR (включая ADR-004, ADR-007, ADR-010)
- Изменение Roadmap или Project Context на данном этапе

---

## 1. Что такое C8 как platform capability

C8 (Semantic Spatial Intelligence Core) — capability, преобразующая фото помещения (при известном SpaceType) в структурированное машиночитаемое представление семантического и пространственного содержимого этого помещения (StructuredScene), пригодное для использования другими capabilities платформы.

Связь с существующей архитектурой:
- Прямо опирается на границу, зафиксированную в ADR-010: Room Analyzer, ответственность scene analysis (photo → StructuredScene, с использованием уже определённого SpaceTypeId).
- StructuredScene и ProjectDesignContext сейчас передаются как `null` (ADR-007, явный архитектурный gap, не оплошность). C8 — это capability, которая должна заполнить именно этот gap.

Явно не входит в определение C8:
- Object detection / furniture sizing / placement — потенциальные потребители StructuredScene, не сама capability
- Marketplace, budget, AI Agent, multi-room workspace, full product workspace
- Prompt Engine lifecycle (остаётся отдельной, ранее deferred capability)

---

## 2. Может ли C8 быть стратегическим центром Gate 2

**Аргументы за:**
- Закрывает placeholder ADR-007, являющийся текущим архитектурным разрывом
- Является предпосылкой для любой layout-aware или context-aware генерации
- Соответствует заявленному стратегическому направлению (AI Interior Designer)

**Риски:**
- Не определён механизм Perception (CV / hybrid / LLM-reasoning над изображением) — влияет на инфраструктурные зависимости и объём работ
- Не существует Scene Graph schema — полная формализация может оказаться крупнее, чем размер, приемлемый для одного gate
- Риск превращения Gate 2 в открытое исследовательское направление вместо ограниченного инкремента (нарушение паттерна Gate 1, где ADR-006 был реализован как узкий bounded slice)

**Вывод (подтверждён Owner Decision):** C8 принимается как readiness direction для Gate 2 через minimal coherent slice, при условии staged ADR sequence. Полная реализация C8 gate-размеру не соответствует и final scope не утверждён.

---

## 3. Архитектурные решения, необходимые до утверждения final Gate 2 scope

1. **C8 Boundary / Representation** — архитектурная роль и граница C8 как capability; минимальная схема StructuredScene, достаточная для замены `null` placeholder на реальный контракт — **первый шаг, зафиксирован Owner как приоритетный**
2. **Scene Graph Schema** — конкретная схема данных после утверждения границы (п.1); либо, если преждевременно, сначала Evaluation Contract
3. **Evaluation Contract** — как проверяется корректность StructuredScene / что считается "done" для scene-analysis ответственности Room Analyzer
4. **Perception Boundary** — что производит StructuredScene: CV-модель, hybrid-подход, эвристика, либо LLM-based reasoning над изображением; определяется **последним**, после того как определено, что представляется и как оценивается — **прямое указание Owner: механизм perception не выбирается раньше**
5. **Consumer Contract** — как Prompt Engine (deferred) и другие потенциальные потребители будут использовать StructuredScene; требует ли это фиксации контракта уже сейчас, или можно отложить до реализации Prompt Engine — открытый вопрос, не входит в подтверждённую последовательность, требует отдельного рассмотрения

Без решения по п.1 нельзя приступать к пп. 2–4. Final Gate 2 scope не может быть утверждён до прохождения staged ADR sequence.

---

## 4. Требуются ли новые ADR

| Кандидат | Оценка | Комментарий |
|---|---|---|
| C8 Boundary / Representation ADR | Требуется, первый в последовательности | Определяет архитектурную роль и границу C8; отдельный документ, не объединяется со Scene Graph Schema ADR — **решение Owner** |
| Scene Graph Schema ADR | Требуется, второй в последовательности | Конкретная схема данных; принимается только после C8 Boundary / Representation ADR; либо после него — Evaluation Contract ADR, если Scene Graph преждевременен |
| Evaluation Contract ADR | Требуется, третий в последовательности | Фиксирует, что считается корректным output границы Room Analyzer (scene analysis) |
| Perception Boundary ADR | Требуется, последний в последовательности | Определяет механизм photo → StructuredScene и внешние зависимости; **намеренно не идёт первым** |

Вопрос об объединении Representation ADR и Scene Graph Schema ADR — **закрыт Owner Decision**: документы разного уровня, не объединяются.

**Architecture Decision Required (остаётся открытым, не решается в рамках данного документа):**
- Consumer Contract: фиксируется ли контракт потребления StructuredScene Prompt Engine уже в рамках staged ADR sequence, или откладывается до реализации Prompt Engine

---

## 5. Необходимые обновления ACS/PCS/Project Context

- **Новый ACS-документ(ы):** ACS для StructuredScene / Scene Graph Capability Spec — создаётся после принятия соответствующих ADR, не раньше
- **PCS update:** регистрация C8 как platform capability с определённой границей (Capability First принцип требует, чтобы capability была зафиксирована в PCS до реализации AI-модуля)
- **Project Context:** version bump (кандидат v2.3) после принятия новых ADR — фиксация границы C8 в baseline, по аналогии с тем, как v2.2 зафиксировал Gate 1 Governance Additions

**На данном этапе Project Context и Roadmap не изменяются.** Обновления откладываются до принятия C8 Boundary / Representation ADR.

---

## 6. Minimal coherent Gate 2 scope candidate

Предлагаемый ограниченный слой C8, пригодный по размеру для Gate 2 (по аналогии с тем, как Gate 1 ограничился bounded formatter slice, а не полным Prompt Engine):

- StructuredScene schema v0 — минимальный набор полей (representation-only)
- C8 Boundary / Representation decision — зафиксирована архитектурная граница capability
- Room Analyzer, ответственность scene analysis — реально работающая (не `null`) для узкого набора полей, end-to-end

Явно **не входит** в minimal coherent slice:
- Полная Scene Graph schema
- Object detection
- Furniture sizing/placement
- Выбор perception-механизма (следует после Representation и Evaluation Contract)

Этот кандидат отражает readiness direction, принятую Owner, но сам final scope Gate 2 остаётся неутверждённым до прохождения staged ADR sequence.

---

## 7. Явные исключения (вне scope независимо от финального решения по Gate 2)

- Marketplace, budget, AI Agent, multi-room workspace, furniture sizing/placement, full product workspace — по прямому указанию Owner, фиксируются как постоянные исключения
- Prompt Engine full lifecycle — остаётся deferred (Gate 1 deferred item, не затрагивается C8)
- Resolution Phase (ADR-009 Decision 2) — остаётся deferred, не связан с C8
- Полный CV pipeline / object detection — вне minimal slice, если не будет отдельно поднят Owner

---

## 8. Reference menu (историческая часть, не источник решения)

Приведено для traceability; решение Owner зафиксировано выше в разделе Owner Decision и не сводится дословно ни к одному из пунктов ниже.

- **Menu Option A — Full C8 as Gate 2.** Representation + Perception + Evaluation + Scene Graph целиком. Высокий scope, риск scope creep.
- **Menu Option B — Minimal coherent slice as Gate 2.** Полная Scene Graph Schema ADR и Evaluation Contract ADR откладываются за пределы Gate 2.
- **Menu Option C — Defer C8 entirely.** Возврат к сравнению кандидатов C1–C7.
- **Menu Option D — Split C8 across gates.** Representation Boundary / minimal slice → Gate 2; Perception mechanism + полная Scene Graph → отдельный будущий gate.

---

## Post-Assessment Refinement Note (Sequence Synchronization)

Данный раздел добавлен после принятия assessment и не изменяет его статус.

Ранее зафиксированная в этом документе последовательность (раздел "Confirmed ADR sequence" / Owner Decision) допускала, что Scene Graph Schema ADR может идти до Evaluation Contract ADR. Эта последовательность уточнена и заменена следующей, подтверждённой в ходе работы над ADR-011:

1. ADR-011 — C8 Boundary / Representation ADR
2. ADR-012 — C8 Evaluation Contract ADR
3. ADR-013 — StructuredScene / Scene Graph Schema v0 ADR
4. ADR-014 — Perception Boundary ADR
5. Final Gate 2 Scope Decision
6. Implementation Package

Уточнение:
- Статус assessment не меняется — остаётся **Accepted as readiness artifact**.
- Final Gate 2 scope остаётся **Pending**.
- Roadmap и Project Context не изменяются данным уточнением.

## Итог

Assessment принят как readiness artifact (Owner Decision: Option C). Final Gate 2 scope не утверждён и остаётся Pending до прохождения staged ADR sequence. Следующий обязательный документ — **C8 Boundary / Representation ADR**; его содержимое не пишется в рамках данного документа. ADR-010 и Architecture Freeze (ADR-000–006) сохраняются без изменений. Project Context и Roadmap на данном этапе не изменяются.
