# VistaRoom AI — Project Context v2.4

```text
Version: 2.4
Status: ACCEPTED — PROJECT OWNER
Accepted source revision: Draft Revision 3
Acceptance date: 2026-07-17
Targeted factual correction applied: exact Contracts 1–10 Plan Rev4
    persistence commit inserted (confirmed: fc1c1aaef6afecc831d8227408dc6e6cef994935);
    resolved verification-prerequisite sentence removed from §10.2
Document Type: Project Baseline
Owner: Platform Architecture
Prepared by: Claude (Chief Software Architect / Specification Partner)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-17
Supersedes: Project Context v2.3
Historical predecessor: Project Context v2.2
Strategic Baseline: Living Strategic Roadmap v1.4 — Accepted, including
    Owner-Approved Amendment (2026-07-16) and Owner-Approved Amendment
    "Module-Completion-First" — Revision 5 (2026-07-17)
Repository Baseline Reference: 33b1142faf42b322fb4453e5830bca535e98996a
Repository persistence: PERSISTED
Persistence commit: RECORDED IN GIT HISTORY
No new full consolidated review required: this is a factual correction
    within already-reviewed Draft Revision 3, not a new architectural
    or governance revision
```

Project Context v2.4 принят Project Owner 2026-07-17 и является authoritative current project-state baseline VistaRoom AI. Он заменяет Project Context v2.3, который сохраняется как historical baseline.

---

## 1. Project Status

```text
Gate 1 — Closed.
Gate 2 — Closed within the accepted representation-first C8 scope.
Living Strategic Roadmap v1.4 — Accepted.
Owner-Approved Roadmap Amendment (2026-07-16) — Accepted.
Owner-Approved Roadmap Amendment "Module-Completion-First" Revision 5
    (2026-07-17) — Accepted, persisted.
Module Completion and Sequencing Policy — Revision 4 — Accepted, persisted.
Post-Gate 2 Candidate A architecture baseline documents — Accepted
    to the current authorized extent (see §10).
Current Primary Active Module — Bounded Room Understanding / Spatial
    Perception.
Current Primary Active Module lifecycle state — ARCHITECTURE CYCLE
    IN PROGRESS.
Next engineering stage (Supporting Contracts 1–10 drafting) — Not started.
Next-stage implementation — Not authorized.
```

---

## 2. Current Product Maturity

Без изменения смысла, зафиксированного в Project Context v2.3:

```text
Stage 1 foundation is operational.
Stage 2 representation foundation is implemented (StructuredScene,
structural validation, evaluation), while real-image perception
remains incomplete — Stage 2 is not yet fully reached.
```

С даты v2.3 не произошло изменений в фактически работающем продукте (production behavior); произошли исключительно governance- и architecture-события, описанные в §10–§12.

---

## 3. Strategic Direction

Без изменений относительно v2.3 (Living Strategic Roadmap v1.4, Strategic Ambition, принято 2026-07-13):

```text
Build VistaRoom AI into a full AI Interior Designer
and a potential category-leading interior design platform.
```

С 2026-07-17 стратегическое исполнение проекта дополнительно регулируется постоянным принципом:

```text
Module-Completion-First
```

установленным Module Completion and Sequencing Policy — Revision 4 (Accepted, 2026-07-17) и операционализированным в Roadmap через Owner-Approved Amendment "Module-Completion-First" — Revision 5 (Accepted, 2026-07-17). Подробности — §11–§12.

---

## 4. Architecture Status

### 4.1 Architecture Freeze

Без изменений: ADR-000–ADR-006 — Architecture Freeze baseline, Completed and unchanged. ADR-007–ADR-014 не изменяют и не переоткрывают этот baseline.

### 4.2 Gate 1 / Gate 2

Без изменений относительно v2.3 (см. §5–§8 ниже, воспроизведены без переоткрытия).

### 4.3 Post-Gate 2 Candidate A Architecture Cycle

Новое с даты v2.3. Подробное содержание — §10.

---

## 5. Gate 1 Closure

```text
Gate 1: Closed.
Closure authority: docs/engineering-decisions/reviews/Gate1-Closure-Review.md
Owner Decision date: 2026-07-09
```

Не переоткрывается.

---

## 6. Gate 2 Closure

```text
Gate 2: Closed within the accepted representation-first C8 scope.
Closure authority: docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md
Owner Decision date: 2026-07-13
```

Не переоткрывается. Perception implementation (VLM Interpretation Sub-component) в рамках Gate 2 не реализована — признано Owner explicitly и не является closure blocker'ом.

---

## 7. Representation and Perception Boundary

Без изменений относительно v2.3:

```text
Representation: How the system stores and describes a scene.
Perception: How the system obtains that description from an image.
```

Production pipeline "Real room photo → VLM interpretation → Scene Candidate → normalization → validation → StructuredScene" по-прежнему **не реализован**.

---

## 8. Gate 2 Engineering State

Без изменений относительно v2.3 (Steps 1–2, 5–7 Completed; Step 3 Deferred; Step 4 resolved через Step 5).

---

## 9. Post–Gate 2 Comparative Architecture Assessment — Resolution

Project Context v2.3 (§18) фиксировал, что Post–Gate 2 comparative Architecture Assessment между Candidate A (Spatial Perception), Candidate B (Project & Asset Foundation) и Candidate C (Designer Intelligence Foundation) **не начата**.

С даты v2.3 Assessment было проведено и принято:

```text
Document:
Post–Gate 2 Comparative Next-Stage Architecture Assessment — Revision 3

Repository path:
docs/engineering-decisions/reviews/
Post-Gate2-Comparative-Next-Stage-Architecture-Assessment-Rev3.md

Status:
ACCEPTED — PROJECT OWNER, 2026-07-14

Persistence commit:
0bd4a5a5d49e037f8a7dca8c62e8ba0b60e827b2

Resolution:
Candidate A — Spatial Perception / VLM Interpretation — selected
as the next architecture cycle.

Candidates B and C:
Remain Planned; not selected and not opened.
```

Это Assessment является selection authority для выбора Candidate A. Настоящий Project Context фиксирует результат, но не переоткрывает сравнительную оценку или Owner Decision.

---

## 10. Post-Gate 2 Candidate A Governance Cycle

### 10.1 Selection Authority

Выбор Candidate A основан на принятом документе:

| Документ | Repository path | Revision | Status |
|---|---|---|---|
| Post–Gate 2 Comparative Next-Stage Architecture Assessment | `docs/engineering-decisions/reviews/Post-Gate2-Comparative-Next-Stage-Architecture-Assessment-Rev3.md` | Rev3 | Accepted and persisted, 2026-07-14; commit `0bd4a5a5d49e037f8a7dca8c62e8ba0b60e827b2` |

Отдельный Owner Decision выбрал Candidate A — Spatial Perception / VLM Interpretation — как следующий architecture cycle. Этот выбор не переоткрывается настоящим Context.

### 10.2 Candidate A Architecture Baseline

Следующие документы имеют подтверждённые acceptance и repository states и формируют текущий Candidate A architecture baseline:

| Документ | Repository path | Revision | Acceptance state | Repository state |
|---|---|---|---|---|
| Perception Mechanism Selection and Evaluation Architecture | `docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md` | Rev3 | Accepted, 2026-07-14 | Persisted; commit `328d5fbf9a6a1a02f187db7d3456bcf193a62392` |
| Candidate A Bounded Scope Decision | `docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev3.md` | Rev3 | Accepted, 2026-07-14 | Persisted; commit `b9825395a49eb153354805d5c317d091228bcf0e` |
| Candidate A Evaluation Threshold and Acceptance Plan | `docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev13.md` | Rev13 | Accepted, 2026-07-15 | Persisted; commit `635dd169fa57c2c1cc02b0021d2930ade0a6cdb1` |
| Candidate A Test Data Handling Decision | `docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev9.md` | Rev9 | Accepted, 2026-07-16 | Persisted; commit `b2f2d5b3b8c40d0081324333887e1f26eafa5170` |
| Candidate A Supporting Contracts 1–10 Preparation and Dependency Plan | `docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev4.md` | Rev4 | Accepted, 2026-07-16 | Persisted; commit `fc1c1aaef6afecc831d8227408dc6e6cef994935` |

Ключевые принятые архитектурные решения (не переоткрываются здесь):

```text
Selected Mechanism Class: B (Hybrid VLM + heuristic validation).
Three-function boundary model: C.1 (perception interpretation) /
    C.2 (candidate conformance/normalization) / C.3 (final boundary
    validation, existing Boundary Validator).
Grounding evidence boundary: PerceptionEvidenceArtifact.
Operation-level outcome envelope: PerceptionResult — four outcomes
    (SceneResult / InsufficientEvidenceResult / FailureResult /
    RejectedResult).
Bounded Scope: single photo, single room, single operation,
    Tier 1 room types (living room, bedroom, kitchen, bathroom),
    residential-first, licensed/synthetic/staged sources only,
    real user photos excluded.
Corpus-before-provider sequence; absolute prohibition on disclosing
    held-out ground truth to any evaluated provider.
Contracts 1–10: preparation and dependency plan accepted; drafting
    of the contracts themselves NOT authorized; Contract 10 identity-
    alignment prerequisite (sourceImageId ↔ inputArtifactId/
    sourceAssetId) NOT resolved.
```

Каждый из перечисленных документов сохраняет собственный полный non-authorization boundary (ADR creation, corpus/fixture creation, provider contact/invocation, Implementation Package, implementation — everywhere explicitly not authorized).

---

## 11. Module Completion and Sequencing Policy

```text
Document: VistaRoom AI Module Completion and Sequencing Policy — Revision 4
Repository path: docs/engineering-decisions/reviews/
    Module-Completion-and-Sequencing-Policy-Rev4.md
Status: ACCEPTED — PROJECT OWNER, 2026-07-17
Persistence commit: 3f750ea7a3c79e423f525406a35d89857ac5d702
Metadata-sync commit: 4040d77c16cc86e806ee80d36b483d453ee2ddce
```

Принятый постоянный принцип:

```text
Module-Completion-First — VistaRoom AI должен иметь один Primary
Active Module, доводить его до полного Module Closure в принятом
Bounded Scope и только после этого открывать следующий Major Module,
кроме отдельно принятого Owner Exception.
```

Policy устанавливает: определение Major Module; правило одного Primary Active Module; 18-состояний lifecycle model (Identified → Post-Closure Governance Complete); Transition Authority Classes O/R/A/E; Remediation States; Control States (Suspended, Authorization Withdrawn, Evaluation Invalidated, Module Terminated); Universal Module Closure Requirements; обязательность отдельного Module Applicability Profile для каждого Primary Active Module; Bounded Scope Change Control; Cross-Cutting Dependency rules (девять условий, §15); Owner-Authorized Exception Workstream; Temporary Multi-Module Exception; полный Non-Authorization boundary.

Текущее применение (Annex A Policy Rev4): Primary Active Module — Bounded Room Understanding / Spatial Perception; lifecycle state — Architecture Cycle In Progress; Module Applicability Profile — preliminary, требует отдельной подготовки и принятия.

---

## 12. Roadmap Amendments

### 12.1 Owner-Approved Roadmap Amendment (2026-07-16)

Фиксирует Mandatory Next Sequence After Supporting Contracts 1–10:

```text
Supporting Contracts 1–10 accepted
→ Combined Diagnosability & Security Compatibility Assessment
→ Project Owner checkpoint on Assessment Criteria
→ one retrospective compatibility pass
→ AI Brain Diagnosability Architecture
→ Security Architecture Baseline
→ mandatory Diagnosability ↔ Security cross-check
→ Phase-1 Scope Decision / Execution Profile
→ Section 22 data-governance artifacts 1–7, 9–10
→ Tier 1 Corpus Preparation Authorization
```

Также фиксирует Hard Security Stop.

Этот раздел Project Context является synchronization copy. Единственным нормативным источником указанной последовательности и Hard Security Stop остаётся Owner-Approved Roadmap Amendment от 2026-07-16. Он не переоткрывается.

### 12.2 Owner-Approved Roadmap Amendment "Module-Completion-First" — Revision 5 (2026-07-17)

```text
Status: OWNER-APPROVED ROADMAP AMENDMENT
Acceptance date / Effective date: 2026-07-17
Initial persistence commit: a6e0982c00107b74ed203b1dc2b4645585339bda
Metadata-correction commit: 066f41cbd4cc226f1813b74e151afcdd8143418f
Content-integrity correction commit: 33b1142faf42b322fb4453e5830bca535e98996a
```

Применяет Module-Completion-First к структуре Roadmap Tracks A–H. Устанавливает различие `Strategic Track ≠ Major Module`.

Track A — Spatial Perception — является стратегическим контейнером, внутри которого расположен текущий Primary Active Module:

```text
Bounded Room Understanding / Spatial Perception
```

Сам Track A не является Primary Active Module.

Tracks B–H имеют статус `PLANNED`; ни один bounded Major Module в них не выбран. Историческая формулировка о независимом начале Track C сохранена физически, но не создаёт самостоятельной execution authorization. Roadmap остаётся v1.4. Amendment Revision 5 не переупорядочивает и не ослабляет Amendment от 2026-07-16.

---

## 13. Current Platform Capabilities

Без изменений относительно v2.3 (§9): operational foundation — image generation/editing, Prompt Pipeline, Formatter integration, StructuredScene representation, structural validation, staged evaluation. Deferred/not implemented — Prompt Reasoning, real-image spatial perception, semantic scene truth validation, Designer Intelligence, multi-view consistency, project memory, professional workflow, commerce.

---

## 14. Strategic Tracks A–H

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

С 2026-07-17 применяется Module-Completion-First (§11–§12): Track A содержит текущий bounded Primary Active Module (Bounded Room Understanding / Spatial Perception); Tracks B–H — `PLANNED`, архитектурно и практически не открыты. Существенная работа над Track C (или любым другим треком) до Module Closure Track A допускается только через Cross-Cutting Dependency, Owner-Authorized Exception Workstream или Temporary Multi-Module Exception (Policy Rev4 §§15, 17–18).

---

## 15. Lightweight Project & Asset Direction

Без изменений относительно v2.3 — architecture not assessed, schema not approved, implementation scope not authorized (соответствует Track B, Planned).

---

## 16. Explicitly Deferred, Not Implemented and Not Authorized Scope

### Deferred (без изменений относительно v2.3)

Prompt Engine; full refinePromptDraft lifecycle; ADR-009 Resolution Phase; Step 3 confidence/provenance propagation; Evaluation Harness Q4/Q5/Q10/Q11.

### Not implemented (без изменений)

Real-image perception; live VLM interpretation; production photo → StructuredScene; semantic-truth validation; full Designer Intelligence; multi-view consistency; project memory.

### Not authorized (обновлено)

```text
Whole-home generation; full Project Mode; automatic room grouping;
cross-room consistency; full multi-room graph; 3D reconstruction;
mass editing.

Tracks B–H implementation (any).
Supporting Contracts 1–10 drafting.
Contract 10 identity-alignment resolution.
Contract 11.
Module Applicability Profile drafting (Candidate A).
Combined Diagnosability & Security Compatibility Assessment.
AI Brain Diagnosability Architecture.
Security Architecture Baseline.
Phase-1 Scope Decision / Execution Profile.
Section 22 data-governance artifacts.
Tier 1 Corpus Preparation.
Provider/model contact, invocation, evaluation, selection.
Governed-data exposure.
ADR creation. Implementation Package. Implementation. Deployment.

Clerk. Stripe. Other authentication/payment/database providers.
Marketplace integration. Shopping cart.
```

---

## 17. Current Repository State

```text
Branch: main
origin/main HEAD: 33b1142faf42b322fb4453e5830bca535e98996a
Commit message: docs: normalize roadmap persistence governance wording
local main / origin/main synchronization: reported by Claude Code
Local working tree: reported clean by Claude Code
```

Источники подтверждения разделены:

```text
origin/main HEAD, commit history and repository content:
independently verified by Claude Project through GitHub read-only access
(raw.githubusercontent.com and api.github.com).

Local main synchronization and clean working tree:
reported by Claude Code through local Git commands (git rev-parse,
git status --short); Claude Project has not independently re-executed
these local commands and treats this as a reported, not self-verified,
fact.
```

GitHub Raw/API не рассматриваются как источник проверки локального working tree.

---

## 18. Documentation State and Known Drift

Без изменений относительно v2.3: ADR_INDEX не регистрирует ADR-010–014; Architecture Status содержит устаревшую milestone-метку.

**Новые known drift-элементы, обнаруженные с даты v2.3:**

```text
Candidate A Evaluation Threshold and Acceptance Plan — Revision 13:
  metadata "Repository persistence: Not authorized" не синхронизирована
  с фактом персистированности документа в репозитории (файл доступен
  по authoritative path). Отдельно: §25 документа сохраняет заголовок
  "Proposed Project Owner Decisions" и формулировку "Accept Revision 13,
  request Revision 14, or reject", хотя метаданные документа
  указывают Accepted.

Perception Mechanism Selection and Evaluation Architecture — Revision 3:
  metadata "Repository persistence: Authorized... Not committed or
  pushed by this action" не синхронизирована с фактом персистированности.

Candidate A Bounded Scope Decision — Revision 3:
  metadata "Repository persistence: Not yet performed" не
  синхронизирована с фактом персистированности.
```

Классификация:

```text
Candidate A Evaluation Threshold and Acceptance Plan — Revision 13:
metadata drift + stale pre-acceptance decision wording.

Perception Mechanism Selection and Evaluation Architecture — Revision 3:
metadata drift.

Candidate A Bounded Scope Decision — Revision 3:
metadata drift.
```

Все перечисленные элементы являются non-blocking documentation drift. Они не затрагивают нормативное содержание принятых решений и не являются основанием для переоткрытия этих документов.

Настоящий Project Context только регистрирует drift. Он не авторизует remediation, metadata synchronization или изменение указанных документов. Любая будущая correction требует отдельного documentation-synchronization решения и отдельной repository authorization.

Не подтверждено независимо в рамках подготовки этой версии: наличие или отсутствие аналогичного metadata drift в Post–Gate 2 Comparative Assessment Rev3 и в Contracts 1–10 Preparation and Dependency Plan Rev4 — не проверялось целенаправленно; их отсутствие в списке не следует читать как подтверждение отсутствия drift.

---

## 19. Architecture and Documentation Principles

Без изменений относительно v2.2/v2.3: Architecture First; Capability First; Single Source of Truth; Decision Governance; Documentation Neutrality; Knowledge/Provider Independence.

---

## 20. Documentation Ecosystem

Без изменений относительно v2.3, с добавлением нового governance-слоя между Roadmap и PCS:

```text
Platform Vision
        ↓
Living Strategic Roadmap (+ append-only amendments)
        ↓
Module Completion and Sequencing Policy  ← new sequencing layer
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

---

## 21. Developer Studio

Без изменений относительно v2.3.

---

## 22. Current Objective

```text
Synchronize the project-state baseline through Project Context v2.4.
```

Assessment/selection уже выполнены (§9) — Candidate A выбран. Настоящий Context не выбирает и не переоткрывает это решение.

```text
This Project Context does not authorize Supporting Contracts 1–10
drafting, Contract 10 identity-alignment resolution, Module
Applicability Profile drafting, or any implementation.
```

---

## 23. Next Governance Sequence

```text
1. Project Context v2.4 — consolidated review.
2. Project Owner Acceptance of Project Context v2.4.
3. Separate subsequent repository persistence authorization.
4. Persist accepted Project Context v2.4.
5. Separate Project Owner authorization for Supporting Contracts 1–10
   Drafting Cycle (per Contracts 1–10 Preparation and Dependency Plan
   Rev4, §9 — acceptance of that Plan alone does not authorize drafting).
6. Supporting Contracts 1–10 preparation, review and acceptance.
7. Combined Diagnosability & Security Compatibility Assessment.
8. Project Owner checkpoint on Assessment Criteria.
9. One retrospective compatibility pass.
10. AI Brain Diagnosability Architecture.
11. Security Architecture Baseline.
12. Mandatory Diagnosability ↔ Security cross-check.
13. Phase-1 Scope Decision / Execution Profile.
14. Section 22 data-governance artifacts 1–7, 9–10.
15. Tier 1 Corpus Preparation Authorization.
```

Шаги 7–15 являются synchronization copy полной Mandatory Next Sequence. Единственным нормативным источником остаётся Owner-Approved Roadmap Amendment от 2026-07-16.

Module Applicability Profile для текущего Primary Active Module `Bounded Room Understanding / Spatial Perception` является обязательным governance artifact по Policy Rev4 §12. Его подготовка и Acceptance требуют отдельной Project Owner authorization.

```text
Open sequencing decision:
The exact insertion point of the Candidate A Module Applicability
Profile must be resolved by a separate Project Owner Decision before:

1. Supporting Contracts 1–10 drafting begins; or
2. the first lifecycle transition for which Policy Revision 4
   requires an accepted Module Applicability Profile;

whichever occurs earlier.
```

Это stop-condition определяет срок принятия sequencing-решения, но само по себе не требует завершить Module Applicability Profile до начала Supporting Contracts 1–10. После определения места профиль должен быть подготовлен и принят не позднее Module Closure и до любого lifecycle transition, для которого Policy Rev4 требует завершённый Module Applicability Profile.

---

## 24. Baseline Policy

```text
Project Context v2.4, после Acceptance, становится authoritative
current project-state baseline, заменяя Project Context v2.3.

Repository persistence остаётся отдельно контролируемым действием,
не входит в Project Owner Acceptance настоящего Context и требует
отдельной последующей явной авторизации.
```

---

## 25. References

```text
docs/project/Project Context v2.3.md
docs/roadmap/Living-Strategic-Roadmap-v1.4.md
docs/engineering-decisions/reviews/Living-Strategic-Roadmap-v1.4-Decision-Record.md
docs/engineering-decisions/reviews/Post-Gate2-Comparative-Next-Stage-Architecture-Assessment-Rev3.md
docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md
docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev3.md
docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev13.md
docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev9.md
docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev4.md
docs/engineering-decisions/reviews/Module-Completion-and-Sequencing-Policy-Rev4.md
docs/engineering-decisions/reviews/Roadmap-v1.4-Module-Completion-First-Rev5-Owner-Acceptance.md
docs/engineering-decisions/reviews/Gate1-Closure-Review.md
docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md
docs/adr/ADR-010-Room-Analyzer-SpaceType-StructuredScene-Boundary.md
docs/adr/ADR-011-C8-Boundary-Representation.md
docs/adr/ADR-012-C8-Evaluation-Contract.md
docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md
docs/adr/ADR-014-Perception-Boundary.md
docs/adr/ADR_INDEX.md
```

---

## 26. Version History

```text
Project Context v2.3 — accepted current project-state baseline
    (2026-07-14), Gate 1/Gate 2 closure, Roadmap v1.4 baseline.
Project Context v2.4 — Draft Revision 3 synchronizes Post-Gate 2
    Candidate A selection and full architecture cycle (Perception
    Mechanism Rev3, Bounded Scope Rev3, Evaluation Threshold Rev13,
    Test Data Handling Rev9, Contracts 1–10 Plan Rev4), Module
    Completion and Sequencing Policy Rev4, and Roadmap Amendments
    (2026-07-16, Module-Completion-First Rev5); registers known
    documentation drift; does not select next engineering track
    beyond already-accepted Candidate A baseline; does not authorize
    Supporting Contracts 1–10 drafting or implementation. A targeted
    factual correction was applied in place (Contracts 1–10 Plan Rev4
    persistence commit confirmed and inserted; §17 wording softened
    to distinguish Claude-Project-verified facts from Claude-Code-
    reported facts) — this does not constitute a new revision.
```

---

# Required Project Owner Decisions

1. Принять или отклонить Project Context v2.4 в целом.
2. Подтвердить, что v2.4 заменяет Project Context v2.3 как authoritative baseline после Acceptance.
3. Подтвердить корректность §9 (Post-Gate 2 Comparative Assessment resolution и выбор Candidate A).
4. Подтвердить корректность §10, включая подтверждённый commit `fc1c1aaef6afecc831d8227408dc6e6cef994935` для Contracts 1–10 Plan Rev4 (разделение Selection Authority и Candidate A architecture baseline) без переоткрытия содержания перечисленных accepted documents.
5. Подтвердить корректность §11–§12 (Policy Rev4 и оба Roadmap Amendments) как точного отражения принятого состояния.
6. Подтвердить регистрацию и классификацию known drift-элементов (§18), включая явную оговорку о непроверенных Post-Gate2 Assessment Rev3 и Contracts 1–10 Plan Rev4, без авторизации их remediation.
7. Подтвердить полную Next Governance Sequence (§23), включая отсутствие автоматической авторизации Supporting Contracts 1–10 drafting.
8. Подтвердить обязательность отдельной подготовки и Acceptance Module Applicability Profile, а также stop-condition: точное место профиля должно быть определено отдельным Owner Decision до начала Supporting Contracts 1–10 drafting либо до первого lifecycle transition, требующего accepted profile, в зависимости от того, что наступит раньше.

Repository persistence находится вне настоящего Acceptance decision и может быть авторизована только отдельной последующей явной инструкцией Project Owner.

---

# Drafting Report

**Единственная фактическая правка, применённая внутри Draft Revision 3 (не новая ревизия):** §10.2, строка Contracts 1–10 Plan Rev4 — заменена временная формулировка "Present at authoritative repository path; exact persistence commit must be independently confirmed" на подтверждённое значение "Persisted; commit `fc1c1aaef6afecc831d8227408dc6e6cef994935`"; следующее за таблицей предложение о verification prerequisite удалено, так как оно закрыто.

**Ранее внесённая правка §17** (формулировка о локальной синхронизации как "reported by Claude Code", а не как самостоятельно подтверждённая Claude Project) и **оговорка §18** о непроверенном drift Post-Gate2 Assessment Rev3 / Contracts Plan Rev4 — сохранены без изменений.

**Repository:** файлы не создавались/не изменялись, commit/push не выполнялись, repository persistence не авторизована.

---

# Final Status

```text
Project Context v2.4:
ACCEPTED — PROJECT OWNER

Accepted source:
Draft Revision 3

Acceptance date:
2026-07-17

Authoritative baseline:
Project Context v2.4

Superseded baseline:
Project Context v2.3

Blocking findings:
0

Open verification prerequisites:
0

Repository persistence:
PERSISTED
```
