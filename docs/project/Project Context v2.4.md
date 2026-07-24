# VistaRoom AI — Project Context v2.4 (Phase 7 In-Place Synchronization Correction)

```text
Version: 2.4
Status: CORRECTED DRAFT — AWAITING LIMITED INDEPENDENT CLOSURE
    VERIFICATION OF PC-1 AND PC-2 AND PROJECT OWNER ACCEPTANCE
Correction type: IN-PLACE PHASE 7 STATE SYNCHRONIZATION
Version bump: NONE
Accepted source revision: Draft Revision 3
Acceptance date (of the existing accepted identity below): 2026-07-17
Existing accepted byte identity: 654 lines, SHA-256
    a6c2ae24658c625b267331db603015d4d25ba33b3bec524251f9744efc2184f1
    (Accepted, Project Owner, 2026-07-17) — remains the current
    authoritative Project Context identity until this corrected
    identity is separately, explicitly accepted by the Project Owner.
Targeted factual correction previously applied to the existing accepted
    identity (preserved as history, not reopened): exact Contracts
    1–10 Plan Rev4 persistence commit inserted (confirmed:
    fc1c1aaef6afecc831d8227408dc6e6cef994935); resolved
    verification-prerequisite sentence removed from §10.2
Document Type: Project Baseline
Owner: Platform Architecture
Prepared by: Claude (Chief Software Architect / Specification Partner)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-23
Trigger: Phase 7 — one-time synchronization of Project Context and
    Living Strategic Roadmap, authorized by the Project Owner, 2026-07-23,
    following closure of Phase 6 (Candidate A root architecture package)
    and repository persistence of the corrected Contract 1 Transfer and
    Layer 2 Activation Preparation Directive. Corrected per explicit
    Project Owner instruction, 2026-07-23, to an in-place synchronization
    of the existing Project Context v2.4 identity rather than a new
    v2.5 successor document. Further corrected, 2026-07-23, to close
    independent review findings PC-1 (self-identity placeholders) and
    PC-2 (compressed historical sections; restored verbatim below).
Proposed corrected byte identity: exact final line count is stated in
    the Change Summary identity block and in Final Status below,
    computed after all PC-1/PC-2 corrections were applied. The exact
    SHA-256 of this exact final byte content cannot be stated inside
    the file itself (embedding a file's own hash inside the file
    changes the file's bytes, which changes the hash — a recursive
    condition with no fixed point) and is therefore not stated here;
    it is recorded externally, in the correction report accompanying
    this drafting cycle. No promise that the SHA-256 appears inside
    this file is made anywhere in this document.
Strategic Baseline: Living Strategic Roadmap v1.4 — Accepted, including
    Owner-Approved Amendment (2026-07-16), Owner-Approved Amendment
    "Module-Completion-First" Revision 5 (2026-07-17), and this Phase 7
    synchronization's companion in-place state-synchronization addition
    to the same Roadmap v1.4 identity (2026-07-23, frozen at 1516
    lines, SHA-256 ff2b93d7b8d4dc11eb871d3ff72c5522f4aa664744b9c3e59ce5c9cfd68727b0,
    independently reviewed with 0 findings, not re-edited by this task)
Repository Baseline Reference: HEAD 36a8b229883d9473a84ad5b3181806458bfbe3dc
Repository persistence of this corrected identity: NOT PERFORMED —
    NOT AUTHORIZED
A full independent consolidated review of the prior exact pair
    (800-line Project Context / 1516-line Roadmap identities) has
    already occurred and returned two findings, PC-1 and PC-2, both
    addressed by this correction below. Drafting to close PC-1/PC-2 is
    complete; this exact identity now awaits one limited independent
    closure verification of PC-1 and PC-2 (not a further full
    consolidated review) before Project Owner Acceptance.
```

This document is the existing accepted Project Context v2.4 (654 lines, SHA-256 `a6c2ae24...4f1`), corrected in place under Phase 7 authorization. The document version remains 2.4. This is not a new document and does not create a successor-version relationship. The existing accepted 654-line byte identity is not edited, deleted, or reopened by this draft — it remains authoritative in Git history and as the current authoritative Project Context until this corrected identity is separately accepted.

Project Context v2.4 принят Project Owner 2026-07-17 и является authoritative current project-state baseline VistaRoom AI. Он заменяет Project Context v2.3, который сохраняется как historical baseline. Настоящая corrected identity не заменяет этот статус — предыдущая accepted 654-строчная identity остаётся authoritative до отдельного явного Acceptance этой corrected identity.

---

## Change Summary — Project Context v2.4 — Phase 7 In-Place Synchronization Correction

```text
Existing accepted v2.4 byte identity:
654 lines, SHA-256 a6c2ae24658c625b267331db603015d4d25ba33b3bec524251f9744efc2184f1
(Accepted, Project Owner, 2026-07-17) — remains authoritative until
the corrected identity below is separately accepted.

Proposed corrected v2.4 byte identity:
line count stated in Final Status below (SHA-256 recorded externally
in the correction report only, per §13's non-recursive-hash rule — not
embedded in this file).

Document version:
UNCHANGED — remains 2.4 in both identities.

Historical preservation:
The existing 654-line byte identity remains preserved in Git history,
unmodified, and is not retroactively described as unaccepted, invalid,
or superseded by a new version number.
```

This Change Summary uses precise, auditable distinctions rather than a blanket "unchanged" label, per the correction of finding PC-2:

```text
Changed (updated to current state):

- §1 Project Status: Phase 6 (Candidate A root architecture successor
  package) recorded CLOSED and Owner-accepted; Contract 1 Rev19 /
  Contract 2 Rev10 recorded completed, candidate-locked,
  repository-persisted; Transfer Directive Corrected Revision 3
  recorded Owner-accepted, repository-persisted; Phase 7 recorded as
  current authorized work.
- §10.2 Candidate A Architecture Baseline table: updated from the
  historical Rev3/Rev13/Rev9/Rev4 baseline to the current authoritative
  Rev19/Rev10/Rev16/Rev10/Rev19/Corrected-Rev3 baseline.
- §16 Not Authorized: extended to the current, wider boundary.
- §17 Current Repository State: updated to HEAD 36a8b229883d9473a84ad5b3181806458bfbe3dc.
- §22/§23: updated to the current post-Phase-6 objective and sequence.
- §24: correction-framing sentence added; original policy statement preserved.
- §25 References: updated to cite current authoritative documents.

New (added, not present in the accepted identity):
- New §10.3 Residential-34 confirmation.
- New §10.4 Operation / RoomCase / ImageAsset[1..6] architecture.
- New §10.5 Cross-cutting compatibility foundation.
- New dated entry in §18 for the Contracts 1-10 Preparation Plan Rev11
  drift item, added after (not replacing) the three original drift items.
- New v2.4-correction entry in §26 Version History, added after (not
  replacing) the existing v2.3/v2.4 entries.
- New `Required Project Owner Decisions` (rewritten for this
  correction cycle; see below), `Drafting Report`, and `Final Status`
  sections, replacing the prior identically-named sections' content
  (both of which already existed in the accepted identity and are
  cycle-specific by nature).

Verbatim preserved, with only an explicitly identified current-state
addition appended after the original text (not interleaved, not
paraphrased):
- §9 Post–Gate 2 Comparative Architecture Assessment — Resolution:
  original text preserved in full; no addition needed (already
  historical and complete).
- §11 Module Completion and Sequencing Policy: original text, including
  both commit hashes, preserved in full; one clause appended noting
  Module Applicability Profile Rev19's acceptance.
- §12 Roadmap Amendments: original §12.1/§12.2 structure and full text,
  including all three commit hashes, preserved in full; a new
  "§12.3 Phase 7 State Synchronization (2026-07-23)" subsection
  appended after the original two.
- §14 Strategic Tracks A–H: original text, including the "Policy Rev4
  §§15, 17–18" cross-reference and "С 2026-07-17" framing, preserved
  in full; no addition needed.
- §18 Documentation State and Known Drift: original three drift items
  preserved in full, including their quoted stale-metadata text; a
  fourth, clearly separated, dated new item appended.

Verbatim preserved, unchanged:
- §2 Current Product Maturity, §3 Strategic Direction, §4.1-4.2, §5-8
  (Gate 1/Gate 2 closure, Representation/Perception boundary — with one
  narrow addition noted directly in §7 as a bracketed current-state
  note, not a rewrite), §13 Current Platform Capabilities, §15
  Lightweight Project & Asset Direction, §19 Architecture and
  Documentation Principles, §20 Documentation Ecosystem, §21 Developer
  Studio — production behavior has not changed since the accepted
  identity.
```

This correction set is the complete and exclusive basis for every difference between the existing accepted v2.4 byte identity and this corrected v2.4 draft. The existing accepted 654-line byte identity is not edited, moved, or deleted by this document.

---



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
    to the current authorized extent, now including the completed
    Phase 6 successor package (see §10).

Supporting Contract 1 — Master Vocabulary, Revision 19 — Owner-accepted,
    candidate-locked (C1-REV19-CL-001), repository-persisted.
Supporting Contract 2 — Relation Annotation and Applicability,
    Revision 10 — Owner-accepted, candidate-locked (C2-REV10-CL-001),
    repository-persisted.
Evaluation Threshold and Acceptance Plan, Revision 16 — Owner-accepted,
    authoritative, repository-persisted.
Test Data Handling Decision, Revision 10 — Owner-accepted, authoritative,
    repository-persisted.
Module Applicability Profile, Revision 19 — Owner-accepted, authoritative,
    repository-persisted.
Contract 1 Transfer and Layer 2 Activation Preparation Directive,
    Corrected Revision 3 — Owner-accepted, authoritative,
    repository-persisted (independent verification: 0 blocker, 0 major,
    0 minor, 0 improvement; 0 regression findings).

Phase 6 (Candidate A root architecture successor package) — CLOSED.
Phase 7 (one-time Project Context / Living Strategic Roadmap
    synchronization) — AUTHORIZED, 2026-07-23; drafting and local
    validation only; this document is that drafting work product.

Current Primary Active Module — Bounded Room Understanding / Spatial
    Perception.
Current Primary Active Module lifecycle state — ARCHITECTURE CYCLE
    IN PROGRESS.
Next engineering stage (Supporting Contracts 3-10 drafting) — Not
    started, not authorized.
Next-stage implementation — Not authorized.
Layer 2 effective activation — Not authorized.
active_locked transition — Not authorized, for any category.
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

Production pipeline "Real room photo → VLM interpretation → Scene Candidate → normalization → validation → StructuredScene" по-прежнему **не реализован**. [Current-state note, added 2026-07-23: принятая архитектурная модель ввода (§10.4) теперь явно допускает от одного до шести governed фото на один `RoomCase`; это не меняет статус реализации — perception implementation остаётся не реализованной.]

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

### 10.2 Candidate A Architecture Baseline (updated for Phase 6 closure and the accepted Transfer Directive)

Следующие документы имеют подтверждённые acceptance и repository states и формируют текущий Candidate A architecture baseline:

| Документ | Repository path | Revision | Acceptance state | Repository state |
|---|---|---|---|---|
| Perception Mechanism Selection and Evaluation Architecture | `docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md` | Rev3 (corrected for the multi-image perception boundary) | Accepted, 2026-07-14; correction accepted 2026-07-22 | Persisted |
| Candidate A Bounded Scope Decision | `docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev5.md` | Rev5, in-place corrected to Residential-34 / RoomCase / ImageAsset[1..6] (Section 2B) | Accepted, 2026-07-14; correction accepted 2026-07-18 | Persisted; correction commit `565a3a03294086f319ccec5ff2e77afb5af8a9e1` |
| ADR-015 — Multi-Image Perception Boundary | `docs/adr/ADR-015-Multi-Image-Perception-Boundary.md` | ADR-015 | Accepted, 2026-07-22 | Persisted |
| Supporting Contract 1 — Master Vocabulary and Active Evaluation Profile | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md` | Rev19 | Owner-accepted, candidate-locked `C1-REV19-CL-001`, 2026-07-22 | Persisted |
| Supporting Contract 2 — Relation Annotation and Applicability | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-2-Relation-Annotation-and-Applicability-Rev10.md` | Rev10 | Owner-accepted, candidate-locked `C2-REV10-CL-001`, 2026-07-22 | Persisted |
| Candidate A Evaluation Threshold and Acceptance Plan | `docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev16.md` | Rev16 | Accepted, 2026-07-23 | Persisted |
| Candidate A Test Data Handling Decision | `docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev10.md` | Rev10 | Accepted, 2026-07-23 (F-01, F-02 closed on independent verification) | Persisted |
| Candidate A Module Applicability Profile | `docs/engineering-decisions/reviews/Candidate-A-Module-Applicability-Profile-Rev19.md` | Rev19 | Accepted, 2026-07-23 | Persisted |
| Contract 1 Transfer and Layer 2 Activation Preparation Directive | `docs/engineering-decisions/reviews/VistaRoom-Contract-1-Transfer-and-Layer-2-Activation-Preparation-Directive-Rev3-Corrected.md` | Corrected Revision 3 | Accepted, 2026-07-23 (independent verification: 0 blocker/major/minor/improvement, 0 regressions) | Persisted; commit `787ef43d17aecc46b113542bff11ce9b9b1233b6` |
| Candidate A Contracts 1–10 Preparation and Dependency Plan | `docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md` | Rev11 | Accepted, 2026-07-18 | Persisted; own room-count language not yet synchronized to Residential-34 (known drift, §18) |
| Owner Acceptance and Repository Persistence Record (Contracts 1-2, Phase 6, corrected Transfer Directive) | `docs/engineering-decisions/reviews/VistaRoom-Contracts-1-2-and-Phase-6-Owner-Acceptance-and-Repository-Persistence-Record.md` | — | Authoritative governance record | Persisted |

Историческая ревизия Rev13/Rev9/Rev4 (Evaluation Threshold Plan, Test Data Handling Decision, Contracts 1-10 Plan) и Rev3 Bounded Scope Decision до in-place correction (accepted 2026-07-14/15/16, commits `635dd169fa57c2c1cc02b0021d2930ade0a6cdb1`, `b2f2d5b3b8c40d0081324333887e1f26eafa5170`, `fc1c1aaef6afecc831d8227408dc6e6cef994935`, `b9825395a49eb153354805d5c317d091228bcf0e` соответственно, и историческая Rev3 Perception Mechanism, commit `328d5fbf9a6a1a02f187db7d3456bcf193a62392`) — остаются historical, superseded, не переоткрываются; их commit-хеши сохранены здесь для полной provenance traceability.

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
Bounded Scope: Operation → RoomCase[exactly 1] → ImageAsset[1..6] →
    one consolidated PerceptionResult; Residential-34 (34 active
    categories, residential-first); licensed/synthetic/staged sources
    only; real user photos excluded. [Historical predecessor scope,
    superseded 2026-07-18: single photo, single room, single operation,
    Tier 1 room types (living room, bedroom, kitchen, bathroom).]
Corpus-before-provider sequence; absolute prohibition on disclosing
    held-out ground truth to any evaluated provider.
Contracts 1 and 2 (of 1-10): drafted, reviewed, accepted,
    candidate-locked, repository-persisted. Contracts 3-10: not
    drafted, not authorized. Contract 10 identity-alignment
    prerequisite (sourceImageId / inputArtifactId / sourceAssetId /
    imageAssetId / roomCaseId) partially resolved by Test Data Handling
    Decision Rev10 Section 3.3.0 (identity-level model fixed); exact
    field/JSON/envelope alignment remains Contract 10's own downstream
    responsibility.
```

Каждый из перечисленных документов сохраняет собственный полный non-authorization boundary (Contracts 3-10/11 drafting, corpus/fixture creation, provider contact/invocation, Implementation Package, implementation, active_locked transition, Layer 2 effective activation — everywhere explicitly not authorized).

### 10.3 Residential-34 (new in this correction)

```text
Active current category model: Residential-34 (34 active_candidate
    residential categories).

living_room, bedroom, children_room, guest_bedroom, primary_bedroom,
kitchen, dining_room, kitchen_living_room, home_office, library,
bathroom, toilet_room, shower_room, combined_bathroom, entryway,
vestibule, hall, corridor, dressing_room, walk_in_closet, pantry,
laundry_room, utility_room, mechanical_room, staircase_space,
stair_hall, attic, mansard_room, basement, garage, balcony, terrace,
veranda, winter_garden.
```

`kitchen_living_room` — один из 34 (не 35-я категория), Composite Space Profile. `bedroom` остаётся самостоятельной канонической идентичностью; `children_room`, `guest_bedroom`, `primary_bedroom` — отдельные Annex S1 Space Subtype идентичности, наследующие applicability родителя (`bedroom`) полностью и без исключений (Contract 1 Rev19, Annex S1 §S1.1), но не сворачивающиеся в `bedroom`. Commercial, public и специализированные пространства остаются в full-platform Master Vocabulary foundation (Contract 1 Rev19), но не активны на текущей residential-стадии. Ни одна из 34 категорий не имеет статуса `active_locked`.

### 10.4 Operation / RoomCase / ImageAsset[1..6] Architecture (new in this correction)

```text
Operation
└── RoomCase[exactly 1]
    ├── ImageAsset[1..6]
    └── one consolidated PerceptionResult
```

Одна операция относится к одной физической или намеренно staged комнате (`RoomCase`). Одна `RoomCase` содержит от одного до шести `ImageAsset`, все — одна и та же комната в одном материально неизменённом состоянии. Каждое изображение сохраняет собственную atomic identity и provenance (`imageAssetId` ↔ `sourceAssetId`, 1:1:1; `sourceAssetId` не становится set-valued). В активный scope входят: same-room validation, cross-view matching, deduplication, contradiction preservation, evidence fusion, один consolidated `PerceptionResult`. Mixed-room input — negative validation case, не valid `RoomCase`. Вне текущего runtime scope: множественные физические комнаты в одной операции, persistent cross-session multi-view, whole-home reasoning, project memory, video, floor plans, panoramas, 2.5D/3D reconstruction.

### 10.5 Cross-Cutting Compatibility Foundation (new in this correction)

Синхронизировано с Candidate A Bounded Scope Decision Rev5 §§8F-8H и с gate placement, зафиксированным в Module Applicability Profile Rev19 и Test Data Handling Decision Rev10. Текущий Spatial Perception cycle включает только минимальный compatibility foundation, необходимый, чтобы не создавать architectural rework для будущего controlled learning:

```text
Diagnosability compatibility (minimum foundation):
traceability; evidence provenance; failure classification;
reproducibility; version identity; diagnostic observability hooks;
immutable history; no-regression verification; rollback compatibility.

Security compatibility (minimum foundation):
data-use eligibility; consent hooks; provenance integrity;
provider-boundary controls; retention/deletion compatibility;
authorization boundaries; tamper-evident history.

Controlled Learning compatibility (minimum foundation):
model/rule/contract versioning; provenance and evidence;
reproducibility; future-feedback linkage; consent/data-use eligibility
hooks; immutable history; no-regression evaluation; rollback
compatibility.
```

Это не авторизует: user-feedback collection, analytics, training, automatic model/rule updates, automatic production-behavior changes, rollout, real-user-data use. User feedback не может напрямую изменять production behavior. Полная Diagnosability Architecture, полная Security Architecture и полная Controlled Learning Architecture остаются отдельными, ещё не начатыми governance-циклами (§23, шаг 5).

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

Текущее применение (Annex A Policy Rev4): Primary Active Module — Bounded Room Understanding / Spatial Perception; lifecycle state — Architecture Cycle In Progress; Module Applicability Profile — preliminary, требует отдельной подготовки и принятия. [Current-state note, added 2026-07-23: Module Applicability Profile — Revision 19, Accepted, 2026-07-23 (см. §10.2); таким образом это требование Policy Rev4 теперь удовлетворено, и профиль более не "preliminary."]

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

### 12.3 Phase 7 State Synchronization (2026-07-23, new in this correction)

Phase 7 (эта in-place corrected Project Context v2.4 и парная, отдельно frozen, прошедшая независимый consolidated review с нулевыми findings Living Strategic Roadmap v1.4 identity, 1516 строк, SHA-256 `ff2b93d7b8d4dc11eb871d3ff72c5522f4aa664744b9c3e59ce5c9cfd68727b0`) добавляет исключительно state-snapshot синхронизацию (новая датированная секция внутри самого Roadmap v1.4, датированная 2026-07-23) и не создаёт нового permanent sequencing rule, не переоткрывает и не изменяет ни §12.1, ни §12.2, ни один из двух датированных Amendments, и не создаёт новую версию ни одного документа.

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

Real-image perception; live VLM interpretation; production photo(s) → StructuredScene; semantic-truth validation; full Designer Intelligence; multi-view consistency (cross-session); project memory.

### Not authorized (updated 2026-07-23 for Phase 6 closure and Phase 7)

```text
Whole-home generation; full Project Mode; automatic room grouping;
cross-room consistency; full multi-room graph; 3D reconstruction;
mass editing.

Tracks B–H implementation (any).
Contract 3 drafting.
Contracts 3–10 drafting. [Historical predecessor item, superseded
    2026-07-22: "Supporting Contracts 1–10 drafting" — Contracts 1 and
    2 are now complete, accepted, candidate-locked, repository-
    persisted; Contracts 3–10 remain the current not-authorized item.]
Contract 11 drafting.
A new Candidate Lock ID for Contract 1 or Contract 2.
Module Applicability Profile drafting (Candidate A). [Historical item,
    superseded 2026-07-23: Module Applicability Profile Revision 19 is
    now Accepted — see §10.2.]
Repository persistence, commit, or push beyond what has already
    occurred for the exact identities recorded in §10.2.
Layer 2 effective activation.
active_locked transition, for any of the 34 Residential-34 categories.
Combined Diagnosability & Security Compatibility Assessment.
AI Brain Diagnosability Architecture.
Security Architecture Baseline.
Full Controlled Learning Architecture.
Phase-1 Scope Decision / Execution Profile.
Section 22 data-governance artifacts (Test Data Handling Rev10 §22).
Tier 1 Corpus Preparation, corpus creation, synthetic corpus
    generation, staged corpus capture.
Real-user-data use.
Provider/model contact, invocation, evaluation, selection.
Governed-data exposure.
Bounded proof execution.
ADR creation. Implementation Package. Implementation. Deployment.
Production activation.

One final consolidated review of the complete root architecture
    package (next after Phase 7; §23).

Clerk. Stripe. Other authentication/payment/database providers.
Marketplace integration. Shopping cart.
```

---

## 17. Current Repository State

```text
Branch: main
origin/main HEAD: 36a8b229883d9473a84ad5b3181806458bfbe3dc
Last commit message: docs(governance): record accepted corrected
    transfer directive state
Historical HEAD at existing accepted v2.4 identity's preparation
    (2026-07-17): 33b1142faf42b322fb4453e5830bca535e98996a
    ("docs: normalize roadmap persistence governance wording")
```

Источники подтверждения разделены, с обновлением методологии относительно существующей accepted identity:

```text
origin/main HEAD, commit history and repository content:
independently verified by Claude Project through live git fetch
against the authoritative Qazaq71/VistaRoom.AI remote.

Local main synchronization and clean working tree:
independently verified by Claude Project this session via git status
--short and git rev-parse, in the working clone used for this
synchronization.
```

Это отличается от существующей accepted v2.4 identity, где локальная синхронизация была "reported by Claude Code, not self-verified." В рамках Phase 6 review и Phase 7 подготовки Claude Project самостоятельно выполнял `git fetch`/`git rev-parse`/`git status --short` в собственной working copy репозитория.

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

**Historical drift items above:** three items, all from the accepted 654-line identity (2026-07-17), preserved verbatim above, unremediated, non-blocking.

**Newly registered current drift item (added 2026-07-23, Phase 7):**

```text
Candidate A Contracts 1-10 Preparation and Dependency Plan — Revision
11: its own text still describes a five-active-room-type Active
Evaluation Profile (per the independent review of Evaluation Threshold
Plan Rev16, Section 14/Risk R-2). This has not yet been synchronized
to the Residential-34 model. This is a separate, later synchronization
item, not performed by Phase 6, Phase 7, or this document, and not
blocking Phase 7 acceptance.
```

Не подтверждено независимо в рамках подготовки Phase 7: полный status-drift audit всех остальных ранее принятых Candidate A документов — не проверялось целенаправленно за пределами того, что уже обнаружено в ходе независимых review Phase 6 и Transfer Directive.

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
Synchronize the project-state baseline in place within Project
Context v2.4 (same version, corrected byte identity), reflecting
completed Phase 6 (Candidate A root architecture successor package)
and the accepted, repository-persisted Contract 1 Transfer and Layer 2
Activation Preparation Directive.
```

Assessment/selection уже выполнены (§9) — Candidate A выбран. Настоящий Context не выбирает и не переоткрывает это решение, равно как и Phase 6 content (§10.2) или Transfer Directive content — все они уже отдельно приняты.

```text
This Project Context does not authorize Contracts 3-10 drafting,
Contract 11 drafting, Layer 2 effective activation, active_locked
transition, the Diagnosability/Security compatibility sequence, Phase-1
Scope Decision, corpus preparation, provider/model work, or
implementation.
```

---

## 23. Next Governance Sequence

```text
1. Phase 7 — one-time synchronization of Project Context (this
   document) and Living Strategic Roadmap — IN PROGRESS (drafting
   complete; full independent consolidated review completed with two
   findings, PC-1 and PC-2, both closed by this correction; awaiting
   one limited independent closure verification of PC-1 and PC-2, then
   separate Project Owner Acceptance).
2. One final consolidated review of the complete root architecture
   package — NOT STARTED; follows Phase 7 acceptance.
3. Separately authorized Contracts 3–10 drafting cycle — NOT AUTHORIZED.
4. Atomic Contracts 1–10 acceptance — NOT AUTHORIZED (Contracts 1-2
   individually complete; the atomic set requires Contracts 3-10 first).
5. Mandatory Diagnosability and Security compatibility sequence
   (Combined Diagnosability & Security Compatibility Assessment →
   Assessment Criteria checkpoint → one retrospective compatibility
   pass → AI Brain Diagnosability Architecture → Security Architecture
   Baseline → mandatory cross-check) — NOT AUTHORIZED; required after
   step 4 and before step 6 (Owner-Approved Roadmap Amendment,
   2026-07-16; Module Applicability Profile Rev19).
6. Phase-1 Scope Decision / Execution Profile — NOT AUTHORIZED.
7. Section 22 data-governance artifacts 1–7, 9–10 (Test Data Handling
   Decision Rev10) — NOT AUTHORIZED.
8. Tier 1 Corpus Preparation Authorization — NOT AUTHORIZED.
9. Corpus preparation, annotation, versioning, and sealing — NOT
   AUTHORIZED.
10. Separately authorized provider/model evaluation sequence — NOT
    AUTHORIZED.
11. Provider/model selection and privacy/retention decision — NOT
    AUTHORIZED.
12. Separately authorized Implementation Package and implementation —
    NOT AUTHORIZED.
13. Bounded proof execution, only after its own explicit authorization
    — NOT AUTHORIZED.
```

Шаги 5 и 7 являются synchronization copy соответствующих частей Owner-Approved Roadmap Amendment (2026-07-16) и Test Data Handling Decision Rev10 §22. Единственным нормативным источником точной формулировки и порядка остаются сами эти документы; при расхождении применяется Documentation Synchronization Stop (см. Roadmap Amendment Rev5 §A.10-A.11), и нормативный источник имеет приоритет.

Module Applicability Profile для текущего Primary Active Module — Revision 19, Accepted, устраняет open sequencing decision, зафиксированный в предыдущей accepted v2.4 identity §23 (место профиля больше не требует отдельного решения — профиль подготовлен и принят).

[Historical predecessor sequence, superseded 2026-07-23 — preserved for traceability:

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

Steps 1-4 above are complete (this Project Context corrected identity is that consolidated review's subject); steps 5-6's "Supporting Contracts 1-10" framing is superseded by the current "Contracts 1 and 2 complete, Contracts 3-10 not authorized" state (§1, §10.2); steps 7-15 map onto the current sequence's steps 5-13 above.]

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

[Current-state note, added 2026-07-23: этот open sequencing decision разрешён — Module Applicability Profile Revision 19 подготовлен и принят 2026-07-23 (см. §10.2), до начала Contracts 3-10 drafting. Historical block above preserved for traceability, not reopened.]

---

## 24. Baseline Policy

```text
Original (existing accepted identity, preserved): Project Context
v2.4, после Acceptance, становится authoritative current project-state
baseline, заменяя Project Context v2.3. Repository persistence
остаётся отдельно контролируемым действием, не входит в Project Owner
Acceptance настоящего Context и требует отдельной последующей явной
авторизации.

Current-state addition (2026-07-23): After explicit Project Owner
Acceptance of this corrected identity, the new exact corrected Project
Context v2.4 byte identity becomes the current authoritative Project
Context identity. The previous accepted Project Context v2.4 byte
identity (654 lines, SHA-256
a6c2ae24658c625b267331db603015d4d25ba33b3bec524251f9744efc2184f1)
remains preserved in Git history and is not deleted, invalidated, or
retroactively described as unaccepted. The document version remains
2.4 throughout; no version bump occurs. Repository persistence remains
a separately controlled action, not included in this Acceptance, and
requires a further explicit subsequent authorization.
```

---

## 25. References

```text
docs/project/Project Context v2.3.md
docs/roadmap/Living-Strategic-Roadmap-v1.4.md
docs/engineering-decisions/reviews/Living-Strategic-Roadmap-v1.4-Decision-Record.md
docs/engineering-decisions/reviews/Post-Gate2-Comparative-Next-Stage-Architecture-Assessment-Rev3.md
docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md
docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev5.md
docs/adr/ADR-015-Multi-Image-Perception-Boundary.md
docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md
docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-2-Relation-Annotation-and-Applicability-Rev10.md
docs/engineering-decisions/reviews/Candidate-Lock-C1-REV19-CL-001.md
docs/engineering-decisions/reviews/Candidate-Lock-C2-REV10-CL-001.md
docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev16.md
docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev10.md
docs/engineering-decisions/reviews/Candidate-A-Module-Applicability-Profile-Rev19.md
docs/engineering-decisions/reviews/VistaRoom-Contract-1-Transfer-and-Layer-2-Activation-Preparation-Directive-Rev3-Corrected.md
docs/engineering-decisions/reviews/VistaRoom-Contracts-1-2-and-Phase-6-Owner-Acceptance-and-Repository-Persistence-Record.md
docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md
docs/engineering-decisions/reviews/Module-Completion-and-Sequencing-Policy-Rev4.md
docs/engineering-decisions/reviews/Roadmap-v1.4-Module-Completion-First-Rev5-Owner-Acceptance.md
docs/engineering-decisions/reviews/Gate1-Closure-Review.md
docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md
docs/adr/ADR_INDEX.md
```

[Historical predecessor reference list, superseded 2026-07-23 for the items replaced above — preserved for traceability: `docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md` (unchanged, still current), `docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev3.md` (superseded by Rev5 in-place correction, listed above), `docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev13.md` (superseded by Rev16, listed above), `docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev9.md` (superseded by Rev10, listed above), `docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev4.md` (superseded by Rev11, listed above), `docs/adr/ADR-010-Room-Analyzer-SpaceType-StructuredScene-Boundary.md`, `docs/adr/ADR-011-C8-Boundary-Representation.md`, `docs/adr/ADR-012-C8-Evaluation-Contract.md`, `docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md`, `docs/adr/ADR-014-Perception-Boundary.md` (all five ADRs remain current and applicable; also still directly relevant and not superseded).]

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
    reported facts) — this does not constitute a new revision. Accepted
    2026-07-17, byte identity 654 lines, SHA-256
    a6c2ae24658c625b267331db603015d4d25ba33b3bec524251f9744efc2184f1.
    This byte identity remains preserved in Git history and remains
    authoritative until the corrected identity below is separately
    accepted.
Project Context v2.4, Phase 7 in-place synchronization correction —
    Draft, prepared 2026-07-23 under Phase 7 authorization. Version
    remains 2.4; Phase 7 synchronization changes the exact byte identity
    only; no v2.5 or any other new version was created. Synchronizes
    completed Phase 6 (Bounded Scope Rev5 in-place correction, ADR-015,
    Contract 1 Rev19, Contract 2 Rev10, Evaluation Threshold Plan Rev16,
    Test Data Handling Decision Rev10, Module Applicability Profile
    Rev19) and the accepted, repository-persisted Contract 1 Transfer
    and Layer 2 Activation Preparation Directive, Corrected Revision 3.
    Adds Residential-34, Operation/RoomCase/ImageAsset[1..6], and
    cross-cutting compatibility foundation sections (§10.3-10.5).
    Updates the non-authorization boundary (§16) and next governance
    sequence (§23), preserving each historical predecessor block for
    traceability. Restores, in a second correction pass (closing
    findings PC-1 and PC-2 from independent review), all commit hashes
    and structural detail from the existing accepted identity that an
    earlier correction pass had compressed, and removes all unresolved
    self-identity placeholders. Does not select a next engineering
    track beyond already-accepted Candidate A baseline; does not
    authorize Contracts 3–10 drafting, Layer 2 effective activation,
    active_locked transition, or implementation.
```

---

# Required Project Owner Decisions

1. Принять или отклонить эту точную corrected Project Context v2.4 identity (byte identity в §Final Status).
2. Подтвердить, что version bump не произошёл — документ остаётся Project Context v2.4.
3. Подтвердить, что после Acceptance corrected v2.4 identity заменяет предыдущую v2.4 byte identity как current authoritative content — и только после Acceptance.
4. Подтвердить, что предыдущая accepted v2.4 byte identity (654 строки, SHA-256 `a6c2ae24...4f1`) остаётся historical в Git, не удалена и не признана retroactively unaccepted.
5. Подтвердить корректность §10.2 (обновлённая Candidate A Architecture Baseline table, включая Rev19/Rev10/Rev16/Rev10/Rev19 и Transfer Directive Corrected Revision 3), §10.3 (Residential-34), §10.4 (Operation/RoomCase/ImageAsset[1..6]) и §10.5 (cross-cutting compatibility foundation) как точного отражения принятого состояния, без переоткрытия содержания перечисленных accepted documents.
6. Подтвердить обновлённый §16 (Not Authorized) и §23 (Next Governance Sequence) как точных, без пропущенных или переставленных gate.
7. Подтвердить регистрацию нового known-drift элемента (§18: Contracts 1-10 Preparation Plan Rev11's own five-room text), добавленного после трёх исторических пунктов, без авторизации его remediation.
8. Подтвердить, что Module Applicability Profile Rev19's acceptance разрешает open sequencing decision, зафиксированный в предыдущей v2.4 identity §23.
9. Подтвердить восстановление всех 11 исторических commit-хешей и полной структуры §§9/11/12/14/18 в их оригинальном виде (закрытие independent-review finding PC-2), с current-state дополнениями, ясно обособленными от оригинального текста.
10. Подтвердить, что все self-identity placeholders удалены и заменены фактическими значениями (закрытие independent-review finding PC-1).
11. Подтвердить, что repository persistence этой corrected identity остаётся отдельно неавторизованной и требует последующей явной инструкции.

Repository persistence находится вне настоящего Acceptance decision и может быть авторизована только отдельной последующей явной инструкцией Project Owner.

---

# Drafting Report

Этот документ подготовлен как in-place corrected byte identity существующего Project Context v2.4 (не как новый документ и не как новая версия), в рамках Phase 7 authorization (2026-07-23), скорректированный по прямому указанию Project Owner (2026-07-23) отказаться от подхода "новый successor v2.5" в пользу in-place synchronization той же version 2.4, и повторно скорректированный (2026-07-23) для закрытия independent-review findings PC-1 и PC-2.

Эта вторая корректировка была построена методологически иначе, чем первая: вместо переписывания секций по памяти, базовым текстом послужила точная копия принятой 654-строчной accepted identity (`a6c2ae24...4f1`), прочитанная напрямую из живого репозитория, с последующими точечными правками (str_replace) поверх неё. Это гарантирует byte-for-byte сохранность всех секций, не требующих изменения, и восстанавливает все 11 исторических commit-хешей, полную структуру §§9/11/12/14/18, и убирает оба self-identity placeholder (PC-1).

Изменения ограничены: синхронизацией с текущим Owner-accepted, candidate-locked (где применимо) и repository-persisted состоянием Candidate A root architecture package (§10.2), добавлением Residential-34 (§10.3), Operation/RoomCase/ImageAsset[1..6] (§10.4) и cross-cutting compatibility foundation (§10.5) секций, обновлением non-authorization boundary (§16) и next governance sequence (§23), и восстановлением исторического содержания, ранее по ошибке сжатого. Никакая новая архитектура, категория, activation state, gate, contract или Owner Decision не введены — все содержательные факты уже отдельно приняты в цитируемых документах. Никакая новая версия документа не создана.

**Repository:** файлы не создавались/не изменялись в репозитории, commit/push не выполнялись, repository persistence не авторизована.

---

# Final Status

```text
Project Context v2.4 corrected identity:
CORRECTED DRAFT — AWAITING LIMITED INDEPENDENT CLOSURE VERIFICATION
OF PC-1 AND PC-2 AND PROJECT OWNER ACCEPTANCE

Phase 7 state:
drafting: COMPLETE
full independent consolidated review: COMPLETED — CORRECTIONS REQUIRED (PC-1, PC-2)
PC-1/PC-2 correction: COMPLETED — CLAIMED, AWAITING VERIFICATION
limited independent closure verification: NOT YET PERFORMED
Project Owner Acceptance: NOT YET PERFORMED
repository persistence: NOT AUTHORIZED

Version bump:
NONE

Current authoritative identity:
the previously accepted 654-line Project Context v2.4 (SHA-256
a6c2ae24658c625b267331db603015d4d25ba33b3bec524251f9744efc2184f1)
remains authoritative until this corrected v2.4 identity is separately
accepted

PC-1 (self-identity placeholders):
CLOSED — no unresolved self-identity placeholder remains; the exact
final line count is stated below, and the exact full SHA-256 is
recorded externally in the correction report

PC-2 (compressed historical sections):
CLOSED — all 11 original commit hashes restored in their original
sections (§9, §11, §12); full §12.1/§12.2 structure restored; full
§18 historical drift text restored; §14's "Policy Rev4 §§15, 17-18"
and "С 2026-07-17" framing confirmed intact

Final line count of this exact corrected identity:
1039

Final SHA-256 of this exact corrected identity:
recorded externally, in the correction report accompanying this
drafting cycle only (not embedded in this file — embedding a file's
own hash inside itself is a recursive condition with no fixed point;
this paragraph makes no promise that the hash appears inside this file)

Blocking findings:
Not yet assessed (further independent review not performed)

Repository persistence:
NOT PERFORMED
NOT AUTHORIZED
```
