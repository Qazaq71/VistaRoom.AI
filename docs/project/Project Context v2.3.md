# Project Context v2.3 — VistaRoom AI

```text
Version: 2.3
Status: Accepted
Document Type: Project Baseline
Owner: Platform Architecture
Accepted by: Project Owner
Acceptance Date: 2026-07-14
Supersedes: Project Context v2.2
Strategic Baseline: Living Strategic Roadmap v1.4 — Accepted
Repository Baseline Reference: 4d6f33d462ab528f6cc4195d0cceb3845dc05414
```

Project Context v2.3 является текущим authoritative project-state baseline проекта в governance-смысле. Project Context v2.2 superseded. Repository persistence настоящего документа является отдельно контролируемым действием.

---

## 1. Project Status

```text
Gate 1 — Closed.
Gate 2 — Closed within the accepted representation-first C8 scope.
Living Strategic Roadmap v1.4 — Accepted.
Living Strategic Roadmap v1.3 — Superseded.
Next engineering stage — Not selected.
Next-stage implementation — Not authorized.
```

Проект завершил Gate 1 и Gate 2 в границах, принятых для каждого Gate соответственно.

Strategic Roadmap проекта — Living Strategic Roadmap v1.4, формально принятая Project Owner 13.07.2026 и заменяющая Living Strategic Roadmap v1.3 как действующий стратегический baseline.

---

## 2. Current Product Maturity

```text
Current maturity position:
Stage 1 foundation is operational.
Stage 2 representation foundation is implemented (StructuredScene,
structural validation, evaluation), while real-image perception
remains incomplete — Stage 2 is not yet fully reached.
```

**Что продукт реально делает сегодня:** поддерживает генерацию и редактирование интерьерных изображений на основе пользовательского изображения и выбранных дизайн-настроек. Это operational foundation Stage 1 — AI Visualizer.

**Что уже поддерживает архитектура, но не работает end-to-end на реальном фото:** структурированное представление сцены (`StructuredSceneV0`), его структурная валидация и staged-оценка по Canonical Query Suite — реализованы и верифицированы, но производятся из уже сформированной кандидатной структуры сцены, а не из живого фотографического входа. Это архитектурный фундамент Stage 2 (Spatially Aware Generator), не завершённый Stage 2 целиком.

**Что не реализовано:** восприятие реального фото (real-image perception) — компонент, преобразующий фотографию помещения в кандидатную структуру сцены, — в Gate 2 не создавался ни на одном из семи шагов Implementation Package.

Настоящий документ не заявляет, что VistaRoom AI уже является полноценным AI Interior Designer. Полная продуктовая лестница зрелости (Stage 1–7) зафиксирована Living Strategic Roadmap v1.4 и не пересматривается здесь.

---

## 3. Strategic Direction

```text
Build VistaRoom AI into a full AI Interior Designer
and a potential category-leading interior design platform.
```

Это принятая Project Owner долгосрочная стратегическая цель (Living Strategic Roadmap v1.4, раздел Strategic Ambition, принято 13.07.2026), а не утверждение о текущем положении на рынке или о завершённости продукта. Категорийное лидерство рассматривается как долгосрочный целевой ориентир.

Генеративные модели изображений (независимо от конкретного провайдера) рассматриваются как заменяемый provider/infrastructure слой (Generation Intelligence, Level 3 Roadmap v1.4). Устойчивое конкурентное преимущество платформы строится не вокруг какой-либо конкретной генеративной модели, а вокруг собственного intelligence layer, состоящего из следующих компонентов:

```text
User Understanding
Spatial Understanding
Designer Reasoning
Planning and Ergonomics
Controlled Editing
Consistency
Project Memory
Implementation Support
```

Перечисление этих компонентов фиксирует принятую стратегическую модель устойчивого преимущества и не означает, что каждый из них уже полностью реализован или отдельно оценён.

---

## 4. Architecture Status

### 4.1 Architecture Freeze

```text
ADR-000 through ADR-006: Architecture Freeze baseline.
Status: Completed and unchanged.
```

ADR-007–ADR-014 не изменяют и не переоткрывают замороженный baseline ADR-000–ADR-006. Они являются последующими governance и architecture records, созданными поверх неизменённого Architecture Freeze baseline.

### 4.2 Gate 1 Architecture and Integration

```text
Prompt Builder: Implemented.
Rule Engine: Implemented.
Formatter: Implemented and integrated.
Bridge Layer: Implemented.
Prompt Pipeline: Completed.
ADR-005 Integration: Completed and verified.
ADR-006 Implementation Package v1.0: Completed and verified within accepted scope.
Prompt Engine: Deferred.
Full refinePromptDraft / reasoning / orchestration lifecycle: Not implemented.
ADR-009 Resolution Phase: Deferred and requires a separate future engineering
design and Implementation Package.
```

### 4.3 Gate 2 Representation Foundation

```text
StructuredSceneV0 representation: Implemented.
Candidate → normalization flow: Implemented within the heuristic-validation
boundary.
Structural validation: Implemented.
Boundary Validator: Implemented within structural/schema-conformance scope.
Semantic-truth validation: Not implemented.
Evaluation Harness: Implemented as a staged subset.
Real-image perception: Not implemented.
Live VLM interpretation: Not implemented.
Production room photo → Scene Candidate: Not implemented.
Production room photo → StructuredScene: Not implemented.
```

Архитектурная граница этой части зафиксирована принятой цепочкой ADR-010 (Room Analyzer / SpaceType / StructuredScene boundary), ADR-011 (C8 как representation capability, не perception-провайдер), ADR-012 (Evaluation Contract, Canonical Query Suite Q1–Q11), ADR-013 (конкретная схема `StructuredSceneV0`), ADR-014 (Perception Boundary, допустимые классы механизмов и их обязательные ограничения).

---

## 5. Gate 1 Closure

```text
Gate 1: Closed.
Closure authority: docs/engineering-decisions/reviews/Gate1-Closure-Review.md
Owner Decision date: 2026-07-09
```

Gate 1 закрыл интеграционный фундамент Prompt Pipeline и ADR-005/ADR-006 integration в пределах принятого для Gate 1 scope. Полное содержание закрытия — в самом Closure Review; настоящий документ не дублирует его.

---

## 6. Gate 2 Closure

```text
Gate 2: Closed within the accepted representation-first C8 scope.
Closure authority: docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md
Owner Decision date: 2026-07-13
```

Закрытие Gate 2 означает:

- representation foundation (`StructuredSceneV0`) завершён;
- structural validation foundation (Boundary Validator) завершён;
- staged evaluation foundation (Evaluation Harness, Q1–Q3, Q6–Q9) создан;
- согласованный scope Final Gate 2 Scope Decision выполнен либо формально dispositioned (Step 3 — deferred, Step 4 — resolved через Step 5);
- **perception implementation (VLM Interpretation Sub-component) в рамках Gate 2 не была реализована** — Owner explicitly это признал и принял как не являющееся closure blocker'ом (Gate2-C8-Closure-Review.md, §18, Owner Interpretation Acknowledgement).

Закрытие Gate 2 **не означает** завершение полного Spatial Perception и **не означает** полное достижение Stage 2 продуктовой зрелости. Формулировка "Gate 2 fully completed" без указания scope-ограничения (representation-first) не используется нигде в настоящем документе и не должна использоваться далее без этой оговорки.

---

## 7. Representation and Perception Boundary

```text
Representation: How the system stores and describes a scene.
Perception: How the system obtains that description from an image.
```

**Текущий реализованный boundary:**

```text
Scene Candidate
    → normalization
    → structural validation
    → StructuredScene
```

**Не реализованный production pipeline:**

```text
Real room photo
    → VLM interpretation
    → Scene Candidate
    → normalization
    → validation
    → StructuredScene
```

Вторая цепочка (начиная с реальной фотографии помещения и включая шаг VLM interpretation) в Gate 2 не была построена ни на одном из семи шагов принятого Implementation Package. Реализованный и протестированный код начинается с уже сформированной кандидатной структуры сцены, а не с фотографии. Это архитектурное разграничение зафиксировано ADR-011 (C8 как representation, не perception) и подтверждено фактическим содержанием реализации по Gate2-C8-Closure-Review.md, разделы 3, 5 (Step 2), 10.

---

## 8. Gate 2 Engineering State

```text
Step 1 — StructuredScene types and tests: Completed.
Step 2 — Candidate normalization / heuristic validation: Completed.
Step 3 — Confidence/provenance propagation beyond normalization boundary:
    Deferred by Owner Decision. Not implemented.
Step 4 — Partial-scene handling: Reduced to documentation clarification;
    residual structural behavior covered through Step 5.
Step 5 — Boundary Validator: Completed within structural/schema scope.
Step 6 — Evaluation Harness: Completed and technically Accepted within
    staged subset.
Step 7 — Governance cycle and closure readiness: Completed and Accepted.
```

Настоящий документ не заявляет, что все evaluation dimensions ADR-012 или все вопросы Canonical Query Suite Q1–Q11 измерены.

В текущем staged Evaluation Harness поддерживаются: Q1, Q2, Q3, Q6, Q7, Q8 и Q9.

Q4, Q5, Q10 и Q11 остаются Deferred.

Численные пороги evaluation dimensions остаются provisional и non-binding на уровне ADR-012.

---

## 9. Current Platform Capabilities

### Operational or implemented foundation

```text
Image generation and editing.
Prompt Pipeline.
Formatter integration.
Generation Intelligence integration within accepted Gate 1 scope.
StructuredScene representation foundation.
Structural validation.
Staged evaluation tooling.
```

Developer Studio рассматривается отдельно в §17 и намеренно не включён в этот перечень как отдельный closure-verified capability status.

### Deferred or not implemented

```text
Prompt Reasoning.
Real-image spatial perception.
Semantic scene truth validation.
Designer Intelligence.
Automatic semantic object selection and mask generation.
Object-level semantic editing without manual region selection.
Multi-view consistency.
Project memory.
Professional workflow.
Commerce and implementation support.
```

Product behavior (то, что фактически видит и может использовать пользователь сегодня) и architecture foundation (то, что реализовано на уровне представления и валидации данных, но ещё не доведено до production photo-to-scene pipeline) в этом разделе разделены сознательно и не должны смешиваться в дальнейшем изложении.

---

## 10. Strategic Tracks A–H

```text
Track A — Spatial Perception
Track B — Project & Asset Foundation
Track C — Designer Intelligence
Track D — Editing and Continuity
Track E — MultiView and Project Memory
Track F — Professional Workflow
Track G — Implementation and Commerce
Track H — Platform Operations
```

```text
Tracks A–H are strategic development directions.
They are not an automatically authorized implementation sequence.
Each track requires:
Architecture Assessment → Owner Decision → Implementation Package →
separate implementation authorization.
```

Настоящий документ не выбирает и не рекомендует какой-либо из треков A–H как следующий к реализации. Их относительное перечисление (A, затем B, и т.д.) отражает порядок, в котором они зафиксированы в Living Strategic Roadmap v1.4, и не подразумевает приоритет.

---

## 11. Lightweight Project & Asset Direction

Стратегически принятое (но архитектурно не оценённое) направление:

```text
Project
Room
RoomView
ImageAsset
UploadBatch
```

Возможные будущие границы, зарезервированные, но не спроектированные:

```text
StyleProfile
Versioning
Editing
MultiView
Project Memory
```

```text
Architecture: Not assessed.
Schema: Not approved.
Persistence strategy: Not selected.
Implementation scope: Not authorized.
```

Это направление не является принятой архитектурой и не должно интерпретироваться как таковая ни в одном последующем документе, пока не пройдёт собственный цикл Architecture Assessment → Owner Decision → Implementation Package.

---

## 12. Explicitly Deferred, Not Implemented and Not Authorized Scope

### Deferred

```text
Prompt Engine.
Full refinePromptDraft lifecycle.
Reasoning and orchestration.
ADR-009 Resolution Phase.
Confidence/provenance propagation beyond the normalization boundary (Step 3).
Deferred Evaluation Harness questions (Q4, Q5, Q10, Q11).
```

### Not implemented

```text
Real-image perception.
Live VLM interpretation.
Production photo → StructuredScene.
Semantic-truth validation.
Full Designer Intelligence.
Automatic semantic object selection and mask generation.
Object-level semantic editing without manual region selection.
Multi-view consistency.
Project memory.
```

### Not authorized

```text
Whole-home generation.
Full Project Mode.
Automatic room grouping.
Cross-room consistency as near-term implementation.
Full multi-room graph.
3D reconstruction.
Mass editing.

Spatial Perception implementation.
Project & Asset Foundation implementation.
Designer Intelligence implementation.
Editing Intelligence implementation.
MultiView implementation.
Project Memory implementation.
Professional Workflow implementation.
Implementation & Commerce.

Clerk.
Stripe.
Other authentication providers.
Payment providers.
Database or storage providers.
Marketplace integration.
Shopping cart.
```

```text
Post–Gate 2 Architecture Assessment: Not started.
Next-stage selection: Not made.
Next-stage Implementation Package: Not prepared.
Next-stage implementation: Not authorized.
```

---

## 13. Current Repository State

```text
Branch: main
HEAD: 4d6f33d462ab528f6cc4195d0cceb3845dc05414
Short HEAD: 4d6f33d
Commit message: docs(roadmap): persist accepted Living Strategic Roadmap v1.4
local main / origin/main: synchronized
Working tree: clean
```

Repository state was verified by Claude Code (a separate implementation executor with direct repository access) and reported via session synchronization. Claude Project does not claim direct live git access; primary-source document reading for this Context was performed via direct read-only retrieval of raw repository file contents from branch `main` (public GitHub raw content and contents API), not via execution of `git` commands.

---

## 14. Documentation State and Known Drift

```text
Project Context v2.2: stale current-state snapshot.
ADR_INDEX: does not register ADR-010 through ADR-014.
ADR_INDEX Architecture Status: stale milestone label
    ("Spatial Intelligence Foundation Complete (A2)").
Living Strategic Roadmap v1.3: superseded historical document.
README: not a governance baseline.
```

```text
Classification:
documentation synchronization drift;
not an unresolved architecture contradiction;
not a blocker for preparing Project Context v2.3.
```

**Project Context v2.2 — formal validity vs. content freshness:**

```text
Project Context v2.2 is superseded by Project Context v2.3
as the authoritative current project-state baseline.

Its content remains a historical snapshot of the project state
before the later accepted Gate 1, Gate 2 and Roadmap decisions.
```

Дополнительно:

```text
Living Strategic Roadmap v1.4 contains residual pre-acceptance wording
describing itself as Proposed (within its own "Decision Governance"
section). The Decision Record and subsequent Owner acceptance
(2026-07-13) resolve the formal status.
Classification: non-blocking internal documentation drift.
```

```text
According to the completed Claude Code repository inventory,
no separate repository document was identified that records
the later Owner authorization for staging, commit and push
of Roadmap v1.4.

Classification:
repository-level traceability gap.

This does not prove that chat-level authorization was absent.
```

Ни один из перечисленных пунктов не используется в настоящем документе как основание для отмены принятия Roadmap v1.4 или закрытия Gate 1/Gate 2 — оба решения зафиксированы соответствующими Owner Decision в первоисточниках и не переоткрываются здесь.

---

## 15. Architecture and Documentation Principles

Сохраняются без изменения смысла, зафиксированного в Project Context v2.2:

- **Architecture First** — архитектура управляет кодом, код не изменяет архитектуру.
- **Capability First** — Capability → AI → Code.
- **Single Source of Truth** — каждая логика описывается только в одном месте; расхождение документации между уровнями Roadmap/PCS/ACS/ADR/ED не допускается.
- **Decision Governance** — архитектурные изменения проходят через ADR → Decision Governance → Roadmap Update; инженерные — через Engineering Decision (ED), не заменяющий ADR.
- **Documentation Neutrality** — нормативная документация фиксирует только принятые решения и проверенные факты, без личных мнений, самооценок и мотивационных формулировок.
- **Knowledge / Provider Independence** — Knowledge Layer независим от Provider Layer; замена AI-провайдера не должна требовать изменения Knowledge Packs, Prompt Intelligence, Domain Intelligence, Platform Architecture.

---

## 16. Documentation Ecosystem

```text
Platform Vision
        ↓
Living Strategic Roadmap
        ↓
Platform Capability Specifications
        ↓
AI Capability Specifications
        ↓
Architecture Decision Records
        ↓
Engineering Decisions
        ↓
Implementation Packages
        ↓
Implementation
        ↓
Contract Tests and Evaluation
```

Governance documents form a separate logical governance layer, regardless of their physical repository directory. They define decision, review, acceptance and responsibility boundaries and do not replace ADR, ED or Implementation Packages.

---

## 17. Developer Studio

Developer Studio остаётся инженерной платформой управления развитием VistaRoom AI. Назначение:

```text
Capability management.
Architecture navigation.
Knowledge navigation.
Decision governance support.
Benchmark.
Evaluation.
Performance analysis.
Prompt Intelligence development.
Engineering diagnostics.
```

Не все потенциальные модули Developer Studio реализованы полностью на текущий момент; данный раздел фиксирует назначение платформы, а не подтверждённый полный перечень готовых модулей.

---

## 18. Current Objective

```text
Synchronize the project-state baseline through Project Context v2.3,
then conduct a separate Post–Gate 2 comparative
Next-Stage Architecture Assessment.
```

Assessment должен рассмотреть, как минимум, следующих кандидатов:

```text
Candidate A — Spatial Perception / VLM Interpretation
Candidate B — Project & Asset Foundation
Candidate C — Designer Intelligence Foundation
```

```text
This Project Context does not select a candidate.
The comparative Architecture Assessment has not started.
No implementation is authorized.
```

---

## 19. Next Governance Sequence

```text
1. Project Context v2.3 accepted by Project Owner.
2. Separate repository persistence authorization.
3. Persist accepted Project Context v2.3.
4. Conduct Post–Gate 2 comparative Architecture Assessment.
5. Owner selects or defers the next engineering track.
6. Prepare a separate Implementation Package.
7. Begin implementation only after explicit Owner authorization.
```

Принятие текста настоящего документа Owner'ом и последующая repository persistence — раздельные, не подразумевающие друг друга события.

---

## 20. Baseline Policy

```text
Project Context v2.3 is the authoritative current project-state baseline.

Project Context v2.3 supersedes Project Context v2.2.

Repository persistence remains a separately controlled action
and requires explicit authorization.
```

---

## 21. References

```text
docs/project/Project Context v2.2.md
docs/roadmap/Living-Strategic-Roadmap-v1.4.md
docs/engineering-decisions/reviews/Living-Strategic-Roadmap-v1.4-Decision-Record.md
docs/engineering-decisions/reviews/Gate1-Closure-Review.md
docs/engineering-decisions/reviews/Gate2-Candidate-Assessment.md
docs/engineering-decisions/reviews/C8-Semantic-Spatial-Intelligence-Core-Architecture-Assessment.md
docs/adr/ADR-010-Room-Analyzer-SpaceType-StructuredScene-Boundary.md
docs/adr/ADR-011-C8-Boundary-Representation.md
docs/adr/ADR-012-C8-Evaluation-Contract.md
docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md
docs/adr/ADR-014-Perception-Boundary.md
docs/engineering-decisions/reviews/Final-Gate-2-Scope-Decision-C8.md
docs/implementation/Gate2-C8-Implementation-Package-v1.0.md
docs/engineering-decisions/reviews/Gate2-C8-Step6-Scope-Decision.md
docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md
docs/engineering-decisions/reviews/Gate2-C8-Step7-Closure-Readiness.md
docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md
docs/adr/ADR_INDEX.md
```

---

## 22. Version History

```text
Project Context v2.0 — переход от Architecture Freeze к инженерной реализации.
Project Context v2.1 — начало инженерной реализации, ADR-005 Formatter
    Foundation, Vitest, Engineering Decisions.
Project Context v2.2 — завершение Prompt Pipeline, ADR-005/ADR-006
    Integration через Gate 1 Governance Additions.
Project Context v2.3 — accepted current project-state baseline.
```

Настоящая версия:

- синхронизирует state baseline после закрытия Gate 1;
- фиксирует закрытие Gate 2 within representation-first C8 scope;
- фиксирует Living Strategic Roadmap v1.4 как accepted strategic baseline, заменяющий v1.3;
- отражает текущую продуктовую зрелость: Stage 1 operational, Stage 2 не достигнут полностью;
- вводит явное архитектурное разделение representation и perception;
- фиксирует implemented, deferred, not implemented и not authorized scope по состоянию на дату документа;
- **не выбирает** следующий engineering track и не авторизует implementation.
