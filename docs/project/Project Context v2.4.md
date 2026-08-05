# VistaRoom AI — Project Context v2.4 (In-Place Current-State Synchronization — 2026-08-05)

```text
Version: 2.4
Status: ACCEPTED — PROJECT OWNER NURLAN — 2026-08-05
Correction type: IN-PLACE CURRENT-STATE SYNCHRONIZATION (2026-08-05) —
    Contracts 9–10 completion; Contracts 1–10 atomic Owner acceptance;
    AI Brain Diagnosability Architecture Rev1 acceptance and persistence;
    Security Architecture Baseline Rev1 acceptance and persistence;
    Combined Diagnosability & Security Compatibility Assessment Rev1
    (which discharged the Owner Criteria Checkpoint, the retrospective
    compatibility pass, the compatibility matrix and the mandatory
    Diagnosability ↔ Security cross-check) — PASS, accepted, persisted
Version bump: NONE
Document Type: Project Baseline
Owner: Platform Architecture
Prepared by: Claude Cowork (Governance Reconciliation Executor /
    Documentation Custodian)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-08-05
Trigger: In-place synchronization of the sole active canonical Project
    Context v2.4 with the Project Owner-confirmed project state on
    2026-08-05, after completion of the sequence: Supporting Contracts
    1–10 → atomic Owner acceptance → Combined Diagnosability & Security
    Compatibility Assessment → Owner Criteria Checkpoint → retrospective
    compatibility pass → AI Brain Diagnosability Architecture Rev1 →
    Security Architecture Baseline Rev1 → mandatory Diagnosability ↔
    Security cross-check → independent review PASS → Project Owner
    acceptance → repository persistence. This is a status / sequencing /
    current-state synchronization only; it designs no new architecture
    and does not open Phase-1.
Prior identity note: the immediately preceding in-place identity of this
    same v2.4 document was the "In-Place Reconciliation — Supporting
    Contract 8 Closure" draft (prepared 2026-07-29). Earlier repository-
    persisted v2.4 identities (Phase 7, committed 2026-07-24, commit
    94398e947264c24b5db2ecb19fb8d29325a5faa1; and the accepted 654-line
    identity, 2026-07-17) remain in Git history, unmodified, and are not
    deleted or retroactively invalidated. This synchronization is a
    distinct, later in-place correction of the same v2.4 document.
Authoritative baseline (PC-SYNC-01): this synchronized draft was rebuilt
    from the accepted, repository-persisted Project Context v2.4 baseline —
    path C:\Users\user\Documents\GitHub\VistaRoom.AI\docs\project\Project
    Context v2.4.md, SHA-256
    2425564cd9c59bd4997845e3346100e588fccc2884fae910c99cc79d7cac4539.
    Only source-confirmed 2026-08-05 current-state changes were re-applied
    on top of that baseline (see Change Summary). The earlier unaccepted
    Cowork draft (SHA-256 f38b1c9c…) was used only as a change-list, not as
    an authoritative source; its text was byte-identical to the accepted
    baseline (differing only by CRLF vs LF line endings), so no unverified
    text change was inherited. This draft carries the repository baseline's
    LF line endings.
Pre-persistence synchronization baseline (PC-SYNC-03): branch main;
    HEAD = origin/main = 87f32eb17720d574c178874145dea383f8b9a72b;
    ahead/behind 0/0; tracked working tree clean; pre-existing .claude/
    untracked and unchanged. This is the repository baseline against which
    this Cowork draft was prepared, BEFORE any transfer or commit of this
    Project Context; it is NOT asserted to remain HEAD after this draft is
    persisted. Values are Project Owner-confirmed / independently verified;
    Claude Cowork performed no Git operation and ran no git command. After
    a future transfer, the resulting commit becomes the subsequent
    repository state and must be recorded separately from Claude Code's
    actual data.
Repository persistence authorization: GRANTED — THIS ACCEPTED PROJECT
    CONTEXT V2.4 IDENTITY ONLY — 2026-08-05.
Staging authorization: GRANTED — THIS ACCEPTED DOCUMENT ONLY — 2026-08-05.
Commit authorization: GRANTED — ONE COMMIT CONTAINING THIS DOCUMENT ONLY
    — 2026-08-05.
Push authorization: GRANTED — ORDINARY PUSH OF THAT COMMIT TO MAIN —
    2026-08-05.
These four authorizations permit Claude Code to persist, stage, commit
    and push this one accepted document only; they are NOT YET EXECUTED.
    No transfer, staging, commit or push has been performed by Claude
    Cowork, and no future commit hash is asserted here. Until Claude Code
    executes the authorized commit, the current repository-persisted
    Project Context content remains in place.
Latest independent review (first correction review — historical):
    CHANGES_REQUIRED — ChatGPT Work — 2026-08-05.
Repeat independent review: COMPLETE — PASS — ChatGPT Work — 2026-08-05.
Correction cycle (PC-SYNC-01, PC-SYNC-02, PC-SYNC-03): COMPLETE.
Project Owner acceptance of corrected Project Context: COMPLETE —
    ACCEPTED — 2026-08-05.
Phase-1 authorization: NOT GRANTED. Implementation authorization: NOT GRANTED.
```

This document is an in-place synchronization of the Project Context v2.4 identity. The document version remains 2.4; this is not a new document and does not create a successor-version relationship. Prior repository-persisted v2.4 identities are not deleted or retroactively invalidated by this draft — they remain in Git history and the current repository-persisted Project Context content remains authoritative until this synchronized identity is separately reviewed, accepted, and authorized for persistence.

Начиная с этой reconciliation, `Project Context v2.4.md` формально закрепляется как **sole active canonical Project Context** и **single living version** проекта, с in-place updates only (см. новый раздел "Project Context Version Governance" ниже). Project Context.md, v2.2 и v2.3 зафиксированы как Historical/Superseded/Inactive и не могут использоваться как current или fallback baseline.

---

## Change Summary — Project Context v2.4 — In-Place Current-State Synchronization (2026-08-05)

```text
Immediately preceding in-place v2.4 identity:
the "In-Place Reconciliation — Supporting Contract 8 Closure" draft
(prepared 2026-07-29). The current repository-persisted v2.4 content
remains an earlier committed identity until this synchronized identity
is separately accepted and persisted.

This synchronized v2.4 byte identity:
exact line count, byte count and SHA-256 reported in this session's
chat output after all synchronization edits were applied — not
fabricated here.

Document version:
UNCHANGED — remains 2.4.
```

Changes made in this synchronization pass (current-state only — no architectural content redefined):

```text
Changed (updated to current confirmed state, 2026-08-05):

- Header / Document Control: reframed from the 2026-07-29 Supporting
  Contract 8 closure reconciliation to this 2026-08-05 current-state
  synchronization. (The synchronization pass initially produced a review
  draft; after the correction cycle and repeat independent review PASS,
  the Project Owner accepted this identity on 2026-08-05 — see Document
  Control and Final Status for the current accepted status, the granted
  persistence/staging/commit/push authorizations, and the preserved
  Phase-1 / implementation NOT GRANTED.) Stale MAJOR-01/MAJOR-02
  correction-cycle wait-states from the 2026-07-29 identity are not
  carried as current status (they survive only as historical Version
  History detail).
- §1 Project Status: Supporting Contracts 9 and 10 recorded COMPLETE —
  Owner-accepted, candidate-locked (C9-REV1-CL-001, C10-REV1-CL-001),
  repository-persisted; Supporting Contracts 1–10 recorded COMPLETE —
  accepted by the Project Owner as ONE ATOMIC PACKAGE (2026-07-31,
  baseline commit 3e5f1318…, package review PASS, 0 open findings);
  Contract 11 remains NOT AUTHORIZED / NOT OPENED; the Combined
  Diagnosability & Security compatibility sequence recorded COMPLETE —
  PASS — ACCEPTED — REPOSITORY-PERSISTED; the stale "atomic set = FALSE"
  and "Contracts 9/10 NOT OPENED" statements corrected; F-01 recorded as
  a MINOR / OPEN / non-blocking source-side finding of the accepted
  Diagnosability Architecture Rev1.
- §10.2 Candidate A Architecture Baseline table: extended with rows for
  Supporting Contracts 9 and 10, Candidate Locks C9/C10, the Contracts
  1–10 Atomic Package Acceptance record, AI Brain Diagnosability
  Architecture Rev1, Security Architecture Baseline Rev1, and the
  Combined Diagnosability & Security Compatibility Assessment Rev1 — as
  compact status/reference rows, not architectural copies.
- §10.5: closing note updated — the full Diagnosability and Security
  architectures, and their mandatory cross-check, are now COMPLETE for
  the current compatibility cycle (full Controlled Learning Architecture
  remains a separate, not-yet-opened cycle).
- §12.1: sequence progress annotated against the Owner-Approved Roadmap
  Amendment 2026-07-16 (completed steps through the mandatory cross-check
  marked COMPLETE; Phase-1 Scope Decision / Execution Profile is the next
  step and remains NOT AUTHORIZED); §12.1 remains a synchronization copy.
- §16 Not Authorized: items now provably complete removed from the
  current list (Contracts 9–10 drafting; Contracts 1–10 atomic
  acceptance; Combined Assessment; Diagnosability Architecture; Security
  Baseline; mandatory cross-check), preserved only as Historical —
  superseded; all remaining prohibitions retained.
- §17 Repository State: reframed as the Pre-Persistence Synchronization
  Baseline (PC-SYNC-03) — HEAD = origin/main =
  87f32eb17720d574c178874145dea383f8b9a72b recorded as the baseline
  against which this draft was prepared, explicitly NOT asserted to remain
  HEAD after persistence; newly repository-persisted artifacts listed
  compactly; git values recorded as Project Owner-confirmed / independently
  verified, NOT self-verified by Claude Cowork; no future commit hash
  invented.
- Correction cycle (2026-08-05) closing independent-review verdict
  CHANGES_REQUIRED: PC-SYNC-01 — this draft rebuilt from the accepted
  repository baseline (SHA-256 2425564c…), re-applying only source-confirmed
  current-state changes (the earlier unaccepted Cowork draft, identical text
  but CRLF, used only as a change-list); PC-SYNC-02 — the stale "one final
  consolidated review of the complete root architecture package" gate in §16
  moved to Historical — superseded, leaving exactly one next formal gate
  (Phase-1); PC-SYNC-03 — §17 reframed as pre-persistence baseline.
- §22 Current Objective: updated to the current 2026-08-05 objective
  (in-place current-state synchronization); prior objectives preserved
  as Historical.
- §23 Next Governance Sequence: completed steps marked COMPLETE; the
  single next real formal gate is Phase-1 Scope Decision / Execution
  Profile — NOT AUTHORIZED, NOT OPENED; all downstream steps remain
  unauthorized.
- §26 Version History: one new entry appended for this synchronization;
  historical entries preserved and not rewritten.
- Required Project Owner Decisions, Drafting Report, Final Status:
  updated to this synchronization's scope; false self-performed-Git
  claims removed (Claude Cowork ran no Git command).

Verbatim preserved, unchanged (no reopening):
- §2–§9, §10.1, §10.3, §10.4, §10.6, §11–§15, §18–§21, §24–§25, and the
  "Project Context Version Governance" section (Gate 1/Gate 2 closure,
  Residential-34, Operation/RoomCase/ImageAsset architecture, canonical
  platform boundaries, Module Completion and Sequencing Policy, Roadmap
  Amendments, known documentation drift, principles, documentation
  ecosystem, Developer Studio, Baseline Policy, References, and the
  version-governance rules) — not reopened by this synchronization.
```

This Change Summary is the complete and exclusive basis for every current-state difference introduced by this synchronization pass. No accepted source document is edited by this Project Context, and no new architecture, contract, ADR, ACS, PCS, or Owner Decision is introduced.

---

## Project Context Version Governance

```text
Canonical document:
docs/project/Project Context v2.4.md

Version model:
SINGLE LIVING VERSION

Update model:
IN-PLACE UPDATES ONLY

Current authority:
Project Context v2.4 is the sole active canonical Project Context line.

New version files:
PROHIBITED — no Project Context v2.5, v3.0, or any successor version
file may be created. All future changes are made in place, in this
exact document, at this exact filename and repository path.
```

Predecessor version-line status (Project Owner decision):

```text
docs/project/Project Context.md:
HISTORICAL
INACTIVE

docs/project/Project Context v2.2.md:
SUPERSEDED
INACTIVE

docs/project/Project Context v2.3.md:
SUPERSEDED
INACTIVE
```

These three files are not edited by this or any future reconciliation under this policy. They are not a current baseline, not a fallback baseline, and cannot be cited as a source of current project state. They are preserved only as historical repository evidence.

Rules:

```text
1. Future changes are made only in place, in the text of
   `Project Context v2.4.md`.
2. Filename, version number, and canonical repository path do not
   change.
3. v2.5, v3.0, and any subsequent version files are not created.
4. Previous versions cannot be used as a current or fallback baseline.
5. Git history preserves the change history of `v2.4` across all
   in-place corrections.
6. A substantive text change creates a new exact byte identity of the
   same `v2.4` document — not a new version.
7. A new exact identity requires a governance cycle proportional to
   the scale of the change (independent review, Project Owner
   Acceptance, and separate repository-persistence authorization, as
   applicable).
8. Version-line authority and exact-byte acceptance state are distinct
   and must be stated separately: v2.4 is the sole active version line
   at all times; a specific edited byte identity of v2.4 is Owner-
   accepted only when explicitly accepted.
9. The presence of a draft byte identity at the canonical path does
   not, by itself, constitute Project Owner Acceptance of that
   identity.
10. Only explicit Project Owner Acceptance makes a specific exact
    identity the accepted one.
```

Applied to this document's current state: this reconciliation is an in-place edit of `Project Context v2.4.md`, made under this policy. Version authority (this is the sole active Project Context) is unconditional and immediate. Exact-byte authority (this specific edited content being the "accepted" content) is not yet established — see Final Status below.

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
    synchronization) — CLOSED (drafting cycle complete; superseded in
    place by this later reconciliation — see header Prior identity note
    and §26).

Supporting Contract 3 — Relation Type × Active Category Applicability
    Matrix, Revision 1 (Correction Cycle 7) — Owner-accepted,
    candidate-locked (C3-REV1-CL-001), repository-persisted.
Supporting Contract 4 — Best-Effort Evidence, Provenance and
    Determinability Annotation Contract, Revision 1 (Consolidated
    Correction Cycle 7) — Owner-accepted, candidate-locked
    (C4-REV1-CL-001), repository-persisted.
Supporting Contract 5 — Confidence Generation and Normalization
    Contract, Revision 1 (Correction Cycle 3) — Owner-accepted,
    candidate-locked (C5-REV1-CL-001), repository-persisted.
Supporting Contract 6 — Unknown/Determinability Annotation and Pairing
    Contract, Revision 1 (Correction Cycle 1) — Owner-accepted,
    candidate-locked (C6-REV1-CL-001), repository-persisted.
Supporting Contract 7 — Semantic Case, Scenario, Sufficiency and
    Completeness Annotation Contract, Revision 1 (Correction Cycle 1) —
    Owner-accepted, candidate-locked (C7-REV1-CL-001), repository-
    persisted.
Supporting Contract 8 — Unseen-Claim Evaluation Artifact, Revision 1 —
    Owner-accepted, technically review-closed, candidate-locked
    (C8-REV1-CL-001), repository-persisted.

Supporting Contract 9 — Operational and Contract Violation Fixture
    Subtype Registry, Revision 1 — COMPLETE — Owner-accepted,
    candidate-locked (C9-REV1-CL-001), repository-persisted.
Supporting Contract 10 — Conformance Field Inventory and Validation
    Contract, Revision 1 — COMPLETE — Owner-accepted, candidate-locked
    (C10-REV1-CL-001), repository-persisted.
Supporting Contract 11 — NOT AUTHORIZED, NOT OPENED.
Supporting Contracts 1-10 accepted (atomic set) — TRUE — COMPLETE,
    accepted by the Project Owner as one atomic, technically compatible,
    immutable package (2026-07-31; accepted baseline commit
    3e5f1318005e088143b7075d0e790df5379336be; package review PASS;
    0 open findings). [Historical predecessor wording — superseded
    2026-08-05: "FALSE (Contracts 1-8 individually complete; Contracts
    9-10 not opened)."]

Current Primary Active Module — Bounded Room Understanding / Spatial
    Perception.
Current Primary Active Module lifecycle state — ARCHITECTURE CYCLE
    IN PROGRESS.
Next Major Module — NOT SELECTED; NOT AUTHORIZED TO OPEN BEFORE CURRENT
    MODULE CLOSURE.
Next-stage implementation — Not authorized.
Layer 2 effective activation — Not authorized.
active_locked transition — Not authorized, for any category.

Combined Diagnosability & Security compatibility sequence — COMPLETE —
    PASS — ACCEPTED — REPOSITORY-PERSISTED. One consolidated document,
    Combined-Diagnosability-Security-Compatibility-Assessment-Rev1.md,
    discharged the Owner Criteria Checkpoint, the Combined Compatibility
    Assessment, the retrospective compatibility pass, the compatibility
    matrix and the mandatory Diagnosability ↔ Security cross-check, with
    Final Verdict PASS (independent review PASS — ChatGPT Work,
    2026-08-05; Owner-accepted 2026-08-05; repository-persisted).
AI Brain Diagnosability Architecture, Revision 1 — ACCEPTED BY PROJECT
    OWNER (2026-08-04), repository-persisted.
Security Architecture Baseline, Revision 1 — ACCEPTED — PROJECT OWNER
    NURLAN (2026-08-04), repository-persisted.

Known current source-side finding (not a Project Context defect):
    F-01 — MINOR, OPEN, non-blocking to compatibility — an
    identity/citation-precision item in the accepted AI Brain
    Diagnosability Architecture Rev1 (resultSealId vs.
    SealVerificationResult.verificationId). Its closure requires a
    separate, explicitly authorized correction cycle of that accepted
    document; it does not change the Combined Assessment verdict (PASS)
    and is not corrected or closed by this Project Context.

Next formal governance step — Phase-1 Scope Decision / Execution Profile
    — NOT YET AUTHORIZED, NOT OPENED.
Section 22 data-governance artifacts 1–7 and 9–10, Tier 1 Corpus
    Preparation, provider/model evaluation, implementation, real-user
    data — NOT AUTHORIZED, NOT OPENED.

Tracks B-H — PLANNED, NOT OPENED, NOT AUTHORIZED.
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
| Supporting Contract 3 — Relation Type × Active Category Applicability Matrix | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-3-Relation-Type-Active-Category-Applicability-Matrix-Rev1.md` | Rev1 (Correction Cycle 7) | Owner-accepted, candidate-locked `C3-REV1-CL-001`, 2026-07-26 | Persisted; commit `25dde61afba7fc6f88bc5fc397648beebd5ca310` |
| Candidate Lock C3-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C3-REV1-CL-001.md` | — | Issued | Persisted; commit `96de25971c221cb8b6236fa8719e064eefe257e1` |
| Supporting Contract 4 — Best-Effort Evidence, Provenance and Determinability Annotation Contract | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-4-Best-Effort-Evidence-Provenance-and-Determinability-Annotation-Rev1.md` | Rev1 (Consolidated Correction Cycle 7) | Owner-accepted, candidate-locked `C4-REV1-CL-001`, 2026-07-27 | Persisted; commit `a9d9395a37fcb045b4f76ec31f3da235dcdfb27a` |
| Candidate Lock C4-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C4-REV1-CL-001.md` | — | Issued (the artifact preserves its pre-persistence issuance snapshot, stating "NOT REPOSITORY-PERSISTED"; subsequent repository persistence is established by Git commit history and does not require or permit mutation of the locked artifact) | Persisted; commit `a9d9395a37fcb045b4f76ec31f3da235dcdfb27a` |
| Supporting Contract 5 — Confidence Generation and Normalization Contract | `docs/engineering-decisions/reviews/Supporting-Contract-5-Confidence-Normalization-Rev1-CC3.md` | Rev1 (Correction Cycle 3) | Owner-accepted, candidate-locked `C5-REV1-CL-001`, 2026-07-27 | Persisted; commit `b0246c04660c38c42927e584abc1bb218fac7cdf` |
| Candidate Lock C5-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C5-REV1-CL-001.md` | — | Issued | Persisted; commit `b0246c04660c38c42927e584abc1bb218fac7cdf` |
| Supporting Contract 6 — Unknown/Determinability Annotation and Pairing Contract | `docs/engineering-decisions/reviews/Supporting-Contract-6-Determinability-Pairing-Rev1-Correction-Cycle-1.md` | Rev1 (Correction Cycle 1) | Owner-accepted ("Утверждаю Supporting Contract 6 Rev1 CC1"), candidate-locked `C6-REV1-CL-001`, 2026-07-27 | Persisted; commit `2489c79bd947861b78c827eec8f3b2e82b0f1608` |
| Candidate Lock C6-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C6-REV1-CL-001.md` | — | Issued | Persisted; commit `2489c79bd947861b78c827eec8f3b2e82b0f1608` |
| Supporting Contract 7 — Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract | `docs/engineering-decisions/reviews/Supporting-Contract-7-Semantic-Case-Scenario-Sufficiency-Completeness-Rev1-Correction-Cycle-1.md` | Rev1 (Correction Cycle 1) | Owner-accepted, candidate-locked `C7-REV1-CL-001`, 2026-07-28 | Persisted; commit `82fa094aaa09ada2bac28b55bea674981760a474` |
| Candidate Lock C7-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C7-REV1-CL-001.md` | — | Issued | Persisted; commit `82fa094aaa09ada2bac28b55bea674981760a474` |
| Supporting Contract 8 — Unseen-Claim Evaluation Artifact | `docs/engineering-decisions/reviews/Supporting-Contract-8-Unseen-Claim-Evaluation-Artifact-Rev1.md` | Rev1 | Owner-accepted, technically review-closed, candidate-locked `C8-REV1-CL-001`, 2026-07-28 | Persisted; commit `97537cf85f956847d764ec91d0e3b00977fdc08d`; byte identity: 1827 lines / 327005 bytes / SHA-256 `95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7` |
| Candidate Lock C8-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C8-REV1-CL-001.md` | — | Issued | Persisted; commit `97537cf85f956847d764ec91d0e3b00977fdc08d`; independently verified: 294 lines / 8853 bytes / SHA-256 `c38a77173a7595c36500f1e451265b7a34110ddea21d510c376cf062b958fb35` |
| Supporting Contract 9 — Operational and Contract Violation Fixture Subtype Registry | `docs/engineering-decisions/reviews/Supporting-Contract-9-Operational-and-Contract-Violation-Fixture-Subtype-Registry-Rev1.md` | Rev1 | Owner-accepted, candidate-locked `C9-REV1-CL-001`; member of the accepted Contracts 1–10 atomic package | Persisted at accepted baseline commit `3e5f1318005e088143b7075d0e790df5379336be` |
| Candidate Lock C9-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C9-REV1-CL-001.md` | — | Issued | Persisted at baseline commit `3e5f1318005e088143b7075d0e790df5379336be` |
| Supporting Contract 10 — Conformance Field Inventory and Validation Contract | `docs/engineering-decisions/reviews/Supporting-Contract-10-Conformance-Field-Inventory-and-Validation-Contract-Rev1.md` | Rev1 | Owner-accepted, candidate-locked `C10-REV1-CL-001`; member of the accepted Contracts 1–10 atomic package | Persisted at accepted baseline commit `3e5f1318005e088143b7075d0e790df5379336be` |
| Candidate Lock C10-REV1-CL-001 | `docs/engineering-decisions/reviews/Candidate-Lock-C10-REV1-CL-001.md` | — | Issued | Persisted at baseline commit `3e5f1318005e088143b7075d0e790df5379336be` |
| Contracts 1–10 Atomic Package Acceptance (Project Owner Decision) | `docs/engineering-decisions/reviews/Project-Owner-Decision-Contracts-1-10-Atomic-Package-Acceptance.md` | — | ACCEPTED — Project Owner, 2026-07-31; one atomic, technically compatible, immutable package; package review PASS; 0 open findings | Accepted baseline commit `3e5f1318005e088143b7075d0e790df5379336be` |
| AI Brain Diagnosability Architecture | `docs/engineering-decisions/reviews/AI-Brain-Diagnosability-Architecture-Rev1.md` | Rev1 | ACCEPTED — Project Owner, 2026-08-04 | Persisted; commit `becfc04a3209a57b281cd924da93cb41e7429a73`; accepted SHA-256 `8E4C5B4F6BDA4881A14C2A6005D4F0206B592DCCDE792377E6B49C11A64247D8`. Known source-side finding F-01 (MINOR, OPEN, non-blocking) — see §1. |
| Security Architecture Baseline | `docs/engineering-decisions/reviews/Security-Architecture-Baseline-Rev1.md` | Rev1 | ACCEPTED — Project Owner Nurlan, 2026-08-04 | Persisted; current repository SHA-256 `8023425753F99CAC4AC2CC1D8AF3BC33AF908E66E26DB8DF63F1034150D76A22`; latest commit `f1cde3b329249bf9a5e6fbd69964bc242ff2e3b5` ("docs: remove trailing blank lines from Security Architecture Baseline") |
| Combined Diagnosability & Security Compatibility Assessment | `docs/engineering-decisions/reviews/Combined-Diagnosability-Security-Compatibility-Assessment-Rev1.md` | Rev1 | ACCEPTED — Project Owner Nurlan, 2026-08-05; independent review PASS (ChatGPT Work, 2026-08-05); Final Verdict PASS; matrix 29 Owner-approved criteria / 5 CR-E3 evidence sub-rows / 34 rows; tally PASS 29, CONFLICT 0, GAP 0, NOT_APPLICABLE 0, OWNER_DECISION_REQUIRED 0. Discharged Owner Criteria Checkpoint, retrospective compatibility pass, compatibility matrix and mandatory Diagnosability ↔ Security cross-check. | Persisted; commit `87f32eb17720d574c178874145dea383f8b9a72b` ("docs: add accepted Diagnosability Security Compatibility Assessment Rev1"); SHA-256 `B74242EB0AA8BB412E2E8F50048D522A6CC9EDFA91F9453B8F3D6B9BDF1B1EAA` |

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
Contracts 1-10: all ten drafted, reviewed, accepted, candidate-locked,
    repository-persisted, and accepted by the Project Owner as one atomic,
    technically compatible, immutable package (2026-07-31; §10.2 table
    above; §1). [Historical predecessor wording — superseded 2026-08-05:
    "Contracts 1-8 (of 1-10) ... Contracts 9-10: not drafted, not
    authorized, not opened."] Contract 10 identity-alignment (sourceImageId
    / inputArtifactId / sourceAssetId / imageAssetId / roomCaseId) is
    owned and validated within the accepted Contract 10 conformance model.
```

Каждый из перечисленных документов сохраняет собственный полный non-authorization boundary (Contracts 9-11 drafting, corpus/fixture creation, provider contact/invocation, Implementation Package, implementation, active_locked transition, Layer 2 effective activation — everywhere explicitly not authorized).

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

Это не авторизует: user-feedback collection, analytics, training, automatic model/rule updates, automatic production-behavior changes, rollout, real-user-data use. User feedback не может напрямую изменять production behavior. [Current-state note, 2026-08-05: полная AI Brain Diagnosability Architecture Rev1 и полный Security Architecture Baseline Rev1 приняты (2026-08-04) и repository-persisted, а обязательный Diagnosability ↔ Security cross-check выполнен и закрыт с verdict PASS через Combined Diagnosability & Security Compatibility Assessment Rev1 (принят 2026-08-05); см. §1, §10.2, §12.1. Полная Controlled Learning Architecture остаётся отдельным, ещё не начатым governance-циклом.] [Historical predecessor wording — superseded 2026-08-05: "Полная Diagnosability Architecture, полная Security Architecture и полная Controlled Learning Architecture остаются отдельными, ещё не начатыми governance-циклами (§23, шаг 5)."]

### 10.6 Canonical Platform Boundaries — Controlled Learning, Bilingual Foundation, Exclusions (Correction Cycle 1, new)

Синхронизировано с Correction Cycle 1 (2026-07-29), закрывающим finding MAJOR-02 внешнего независимого review этой identity (FINAL VERDICT: FAIL, 2 MAJOR findings; pre-correction identity 1179 lines / 74460 bytes / SHA-256 `17627991845ad1b198d3fe00a3303cee58d8cec64202a1105b8323dd82ac1954`). Эти declarations фиксируют уже обязательные Project Owner / platform boundaries; они не являются новыми предложениями, не переопределяют §10.5, и не проектируют реализацию, схемы или pipeline.

```text
Controlled Learning State:
LEARNING-READY
NOT LEARNING-ACTIVE

Permitted minimum compatibility foundation (see also §10.5):
model versioning; rule-set versioning; contract versioning;
provider-configuration versioning; provenance hooks; evidence hooks.

Explicitly prohibited:
feedback collection for learning; learning analytics; model training on
production-user data; use of real-user data; autonomous production
behavior changes; automatic prompt mutation; automatic rule mutation;
automatic model/provider mutation; automatic promotion of learned
behavior into production.

Subjective personal taste and Personalization Only signals must never
be treated as evidence for global model learning.
```

```text
Bilingual Foundation:
Canonical internal language: English
Full derived locale: Russian
Stable IDs: Language-neutral
Missing translation behavior: Mandatory English fallback

A single global language switch covers: UI; dialogue; expert
explanations; decision explanations; specifications; color names.

Missing Russian translation must not break the interface. The system
must fall back to canonical English content.
```

```text
Pantone palettes and Pantone-dependent platform behavior:
EXCLUDED — final Project Owner Decision. Not deferred, not planned,
not optional. Provider-neutral color architecture may exist but must
not depend on Pantone.

Collaborative multi-user preference compromise:
EXCLUDED. Excludes searching for, negotiating, or computing a
compromise between the preferences of multiple users. Distinct from,
and not to be conflated with, ordinary single-user personalization.
```

Настоящая секция не авторизует и не проектирует: feedback schemas; learning pipelines; analytics architecture; training architecture; model update mechanisms; production promotion workflows; translation schemas; localization database architecture; UI implementation; locale file structures; translation workflow; multi-user collaboration architecture.

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

Прогресс по этой последовательности на 2026-08-05 (только синхронизация статуса; не изменяет и не переупорядочивает нормативную последовательность):

```text
Supporting Contracts 1–10 accepted — COMPLETE (2026-07-31)
Combined Diagnosability & Security Compatibility Assessment — COMPLETE
Project Owner checkpoint on Assessment Criteria — COMPLETE
One retrospective compatibility pass — COMPLETE
AI Brain Diagnosability Architecture — COMPLETE (accepted 2026-08-04)
Security Architecture Baseline — COMPLETE (accepted 2026-08-04)
Mandatory Diagnosability ↔ Security cross-check — COMPLETE — PASS
Phase-1 Scope Decision / Execution Profile — NEXT — NOT AUTHORIZED, NOT OPENED
Section 22 data-governance artifacts 1–7, 9–10 — NOT AUTHORIZED
Tier 1 Corpus Preparation Authorization — NOT AUTHORIZED
```

Steps 2–7 of the sequence above (Combined Assessment, Owner Criteria Checkpoint, retrospective pass, and the mandatory cross-check) were discharged together by one consolidated document under an explicit Project Owner Variant-A decision — Combined-Diagnosability-Security-Compatibility-Assessment-Rev1.md (Final Verdict PASS; accepted 2026-08-05; §10.2).

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
Contract 11 drafting.
A new Candidate Lock ID for Contract 1 or Contract 2.
Repository persistence, commit, or push beyond what has already
    occurred for the exact identities recorded in §10.2 and beyond the
    separately authorized persistence of the Combined Assessment Rev1.
Layer 2 effective activation.
active_locked transition, for any of the 34 Residential-34 categories.
Full Controlled Learning Architecture.
Phase-1 Scope Decision / Execution Profile.

[Historical — superseded 2026-08-05: the following items previously
    appeared in this Not-Authorized list and are now COMPLETE (accepted,
    repository-persisted); they are retained here only as historical
    evidence and are no longer current prohibitions — see §1, §10.2,
    §12.1: "Contracts 9–10 drafting"; "Combined Diagnosability & Security
    Compatibility Assessment"; "AI Brain Diagnosability Architecture";
    "Security Architecture Baseline"; and the mandatory Diagnosability ↔
    Security cross-check. Also superseded earlier: "Module Applicability
    Profile drafting (Candidate A)" — Revision 19 Accepted 2026-07-23.]
Section 22 data-governance artifacts (Test Data Handling Rev10 §22).
Tier 1 Corpus Preparation, corpus creation, synthetic corpus
    generation, staged corpus capture.
Real-user-data use.
Provider/model contact, invocation, evaluation, selection.
Governed-data exposure.
Bounded proof execution.
ADR creation. Implementation Package. Implementation. Deployment.
Production activation.

[Historical — superseded 2026-08-05: "One final consolidated review of
    the complete root architecture package (next after Phase 7; §23)."
    No longer a current or future formal gate — the required Contracts
    1–10 package review and the Diagnosability/Security compatibility
    sequence are COMPLETE (§1, §10.2, §23). The single next formal gate is
    the separate Project Owner decision on Phase-1 (§23).]

Clerk. Stripe. Other authentication/payment/database providers.
Marketplace integration. Shopping cart.
```

---

## 17. Repository State — Pre-Persistence Synchronization Baseline (PC-SYNC-03)

```text
This section records the PRE-PERSISTENCE synchronization baseline — the
repository state against which this Cowork draft was prepared, BEFORE any
transfer or commit of this Project Context. It is NOT asserted to remain
HEAD after this draft is persisted; once this Project Context is
transferred and committed, that new commit becomes the subsequent
repository state and must be recorded separately from Claude Code's
actual data (no future commit hash is invented here).

Branch: main
Pre-persistence baseline HEAD = origin/main:
    87f32eb17720d574c178874145dea383f8b9a72b
Last commit message: docs: add accepted Diagnosability Security
    Compatibility Assessment Rev1
Ahead/behind origin/main: 0/0
Tracked working tree: clean
.claude/: pre-existing, untracked, unchanged, not committed
    (Tracked working tree clean; pre-existing .claude/ remains untracked
    and unchanged.)

Recently repository-persisted artifacts (see §10.2 for full identities):
- Supporting Contracts 1–10 atomic package + Candidate Locks C1–C10 —
  accepted baseline commit 3e5f1318005e088143b7075d0e790df5379336be.
- AI Brain Diagnosability Architecture Rev1 — commit
  becfc04a3209a57b281cd924da93cb41e7429a73.
- Security Architecture Baseline Rev1 — latest commit
  f1cde3b329249bf9a5e6fbd69964bc242ff2e3b5.
- Combined Diagnosability & Security Compatibility Assessment Rev1 —
  commit 87f32eb17720d574c178874145dea383f8b9a72b (the current
  pre-persistence baseline HEAD; will be superseded by the commit that
  later persists this Project Context).

Historical HEAD references (preserved for traceability):
- 2026-07-24 Phase 7 identity's last commit:
  94398e947264c24b5db2ecb19fb8d29325a5faa1 ("docs: correct Transfer
  Directive filename").
- 2026-07-28 Contract 8 closure commit:
  97537cf85f956847d764ec91d0e3b00977fdc08d.
```

Источник подтверждения:

```text
The repository state above is applied as Project Owner-confirmed and
independently verified fact. Claude Cowork performed no Git operation
and no Git verification for this synchronization; it does not claim to
have run any git command. The exact repository-state verification was
performed outside this Cowork task (Claude Code / Project Owner
confirmation).
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
Historical (Phase 7, 2026-07-23): Synchronize the project-state
baseline in place within Project Context v2.4 (same version, corrected
byte identity), reflecting completed Phase 6 and the accepted,
repository-persisted Contract 1 Transfer and Layer 2 Activation
Preparation Directive.

Historical (2026-07-29): Synchronize the project-state baseline in
place within the same Project Context v2.4 document, reflecting the
Owner-accepted, candidate-locked, repository-persisted closure of
Supporting Contracts 3-8 (§1, §10.2).

Current (this synchronization, 2026-08-05): Synchronize the
project-state baseline in place within the same Project Context v2.4
document, reflecting the confirmed completion of Supporting Contracts
9-10, the Contracts 1-10 atomic Owner acceptance (2026-07-31), the
acceptance and repository persistence of AI Brain Diagnosability
Architecture Rev1 and Security Architecture Baseline Rev1 (2026-08-04),
and the accepted, repository-persisted Combined Diagnosability &
Security Compatibility Assessment Rev1 (2026-08-05, Final Verdict PASS)
which discharged the Owner Criteria Checkpoint, the retrospective
compatibility pass, the compatibility matrix and the mandatory
Diagnosability ↔ Security cross-check. Status / sequencing /
current-state synchronization only.
```

Assessment/selection уже выполнены (§9) — Candidate A выбран. Настоящий Context не выбирает и не переоткрывает это решение, равно как и Phase 6 content (§10.2), Transfer Directive content, или содержание принятых Supporting Contracts 1-8 — все они уже отдельно приняты.

```text
This Project Context does not authorize Contract 11 drafting, Layer 2
effective activation, active_locked transition, the Phase-1 Scope
Decision / Execution Profile, Section 22 data-governance artifacts,
Tier 1 Corpus Preparation, corpus preparation, provider/model work,
real-user-data use, implementation, deployment, or the opening of the
next Major Module. It records — but does not itself re-authorize —
the already-completed Supporting Contracts 1-10 atomic acceptance and
the completed, accepted Diagnosability/Security compatibility sequence
(§1, §10.2, §12.1). [Historical predecessor wording, superseded
2026-08-05: "does not authorize Supporting Contracts 9-10 drafting ...
the Diagnosability/Security compatibility sequence ..." — those steps
are now complete, accepted, and repository-persisted.]
```

---

## 23. Next Governance Sequence

```text
1. Supporting Contracts 1–10 — COMPLETE. All ten Owner-accepted,
   candidate-locked, repository-persisted, and accepted as one atomic,
   technically compatible, immutable package (2026-07-31; §1, §10.2).
2. Combined Diagnosability & Security Compatibility Assessment — COMPLETE.
   One consolidated document (Combined Assessment Rev1) discharged the
   Owner Criteria Checkpoint, the retrospective compatibility pass, the
   compatibility matrix, and the mandatory Diagnosability ↔ Security
   cross-check; Final Verdict PASS; independent review PASS; Owner-accepted
   and repository-persisted (2026-08-05; §10.2).
3. AI Brain Diagnosability Architecture Rev1 — COMPLETE. Accepted
   2026-08-04, repository-persisted. Known source-side finding F-01
   (MINOR, OPEN, non-blocking) requires a separate authorized correction
   cycle of that accepted document (§1).
4. Security Architecture Baseline Rev1 — COMPLETE. Accepted 2026-08-04,
   repository-persisted.
5. Phase-1 Scope Decision / Execution Profile — NEXT FORMAL GATE —
   NOT AUTHORIZED, NOT OPENED.
6. Section 22 data-governance artifacts 1–7, 9–10 (Test Data Handling
   Decision Rev10) — NOT AUTHORIZED.
7. Tier 1 Corpus Preparation Authorization — NOT AUTHORIZED.
8. Corpus preparation, annotation, versioning, and sealing — NOT
   AUTHORIZED.
9. Separately authorized provider/model evaluation sequence — NOT
   AUTHORIZED.
10. Provider/model selection and privacy/retention decision — NOT
    AUTHORIZED.
11. Separately authorized Implementation Package and implementation —
    NOT AUTHORIZED.
12. Formal Spatial Perception verification / bounded proof execution,
    only after its own explicit authorization — NOT AUTHORIZED.
13. Module Closure (Bounded Room Understanding / Spatial Perception) —
    NOT ACHIEVED. The next Major Module is not selected and is not
    authorized to open before current-module closure.
```

Шаги 5 и 6 являются synchronization copy соответствующих частей Owner-Approved Roadmap Amendment (2026-07-16) и Test Data Handling Decision Rev10 §22. Единственным нормативным источником точной формулировки и порядка остаются сами эти документы; при расхождении применяется Documentation Synchronization Stop (см. Roadmap Amendment Rev5 §A.10-A.11), и нормативный источник имеет приоритет.

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
    active_locked transition, or implementation. Committed 2026-07-24,
    commit 94398e947264c24b5db2ecb19fb8d29325a5faa1.
Project Context v2.4, in-place reconciliation — Supporting Contract 8
    closure — Draft, prepared 2026-07-29. Version remains 2.4; this
    reconciliation changes the exact byte identity only; no v2.5 or any
    other new version was created. Synchronizes §1, §10.2, §16, §17,
    §23 to reflect the drafted, Owner-accepted, candidate-locked,
    repository-persisted closure of Supporting Contracts 3, 4, 5, 6, 7,
    and 8 (Candidate Locks C3-REV1-CL-001 through C8-REV1-CL-001),
    which occurred after the Phase 7 identity above was committed and
    were not yet reflected in this document. Registers Supporting
    Contracts 9, 10, and 11 as NOT AUTHORIZED, NOT OPENED. Corrects the
    Phase 7 identity's stale self-referential "repository persistence:
    NOT PERFORMED" statement (independently confirmed committed via
    `git log`). Adds a new normative "Project Context Version
    Governance" section establishing this document as the sole active
    canonical Project Context / single living version, in-place-
    updates-only, per explicit Project Owner decision, and formally
    classifying Project Context.md as Historical/Inactive and Project
    Context v2.2.md / v2.3.md as Superseded/Inactive. Does not select a
    next engineering track; does not authorize Supporting Contracts 9
    or 10 drafting, the Combined Diagnosability & Security
    Compatibility Assessment, AI Brain Diagnosability Architecture,
    Security Architecture Baseline, Phase-1 Scope Decision / Execution
    Profile, Section 22 downstream artifacts, Tier 1 Corpus Preparation
    Authorization, Layer 2 effective activation, active_locked
    transition, or implementation. Repository persistence of this
    exact identity: NOT PERFORMED, NOT AUTHORIZED (see Final Status).
Project Context v2.4, in-place current-state synchronization —
    2026-08-05 — Draft, prepared 2026-08-05. Version remains 2.4; this
    synchronization changes the exact byte identity only; no v2.5 or any
    other new version was created. Synchronizes §1, §10.2, §10.5, §12.1,
    §16, §17, §22, §23, §26 and Final Status to reflect the confirmed
    completion of Supporting Contracts 9-10, the Contracts 1-10 atomic
    Owner acceptance (2026-07-31, baseline commit
    3e5f1318005e088143b7075d0e790df5379336be), the acceptance and
    repository persistence of AI Brain Diagnosability Architecture Rev1
    (2026-08-04, commit becfc04a3209a57b281cd924da93cb41e7429a73) and
    Security Architecture Baseline Rev1 (2026-08-04, latest commit
    f1cde3b329249bf9a5e6fbd69964bc242ff2e3b5), and the accepted,
    repository-persisted Combined Diagnosability & Security Compatibility
    Assessment Rev1 (2026-08-05, commit
    87f32eb17720d574c178874145dea383f8b9a72b, Final Verdict PASS) which
    discharged the Owner Criteria Checkpoint, the retrospective
    compatibility pass, the compatibility matrix and the mandatory
    Diagnosability ↔ Security cross-check. Records F-01 as a MINOR / open /
    non-blocking source-side finding of the accepted Diagnosability
    Architecture. Pre-persistence synchronization baseline: HEAD =
    origin/main = 87f32eb17720d574c178874145dea383f8b9a72b (the baseline
    against which this draft was prepared; not asserted to remain HEAD
    after persistence), applied as Project Owner-confirmed / independently
    verified fact (Claude Cowork ran no Git command). Rebuilt from the
    accepted repository baseline SHA-256 2425564c… (PC-SYNC-01). Does not select the next Major Module; does not
    authorize Contract 11, the Phase-1 Scope Decision / Execution Profile,
    Section 22 artifacts, corpus preparation, provider/model work,
    real-user data, implementation, deployment, Layer 2 activation, or
    active_locked transition. This synchronized identity is a DRAFT;
    repository persistence of this exact identity: NOT PERFORMED, NOT
    GRANTED. The current repository-persisted Project Context content
    remains authoritative until this identity is separately reviewed,
    accepted, and persisted.
```

---

# Required Project Owner Decisions

1. Принять или отклонить эту точную in-place synchronized Project Context v2.4 identity (byte identity в §Final Status).
2. Подтвердить, что version bump не произошёл — документ остаётся Project Context v2.4 (sole active canonical, in-place only).
3. Подтвердить корректность §1 и §10.2 в части Supporting Contracts 9 и 10 (COMPLETE — accepted, candidate-locked C9-REV1-CL-001 / C10-REV1-CL-001, repository-persisted) и Contracts 1–10 atomic acceptance (2026-07-31, baseline commit `3e5f1318…`), без переоткрытия содержания принятых документов.
4. Подтвердить корректность отражения принятых и repository-persisted AI Brain Diagnosability Architecture Rev1 (2026-08-04, commit `becfc04a…`) и Security Architecture Baseline Rev1 (2026-08-04, commit `f1cde3b3…`), а также принятого и repository-persisted Combined Diagnosability & Security Compatibility Assessment Rev1 (2026-08-05, commit `87f32eb1…`, Final Verdict PASS), закрывшего Owner Criteria Checkpoint, retrospective pass, compatibility matrix и mandatory cross-check.
5. Подтвердить, что F-01 записан как MINOR / OPEN / non-blocking source-side finding принятой Diagnosability Architecture Rev1 и НЕ закрыт этим Project Context.
6. Подтвердить обновлённые §16 (Not Authorized) и §23 (Next Governance Sequence): завершённые шаги (Contracts 9–10, atomic acceptance, Combined Assessment, Diagnosability, Security, cross-check) вынесены из текущих запретов как Historical — superseded; Contract 11, Phase-1, Section 22, corpus, provider/model, implementation, Layer 2, active_locked и следующий Major Module остаются NOT AUTHORIZED.
7. Подтвердить §17 (Repository State — Pre-Persistence Synchronization Baseline): pre-persistence baseline HEAD = origin/main = `87f32eb17720d574c178874145dea383f8b9a72b` (НЕ утверждается как HEAD после persistence — persisting commit станет последующим repository state и фиксируется отдельно по данным Claude Code); tracked working tree clean; pre-existing `.claude/` untracked и unchanged; значения применены как Project Owner-confirmed / independently verified (Claude Cowork Git не выполнял, будущий commit hash не выдуман).
8. Подтвердить, что раздел "Project Context Version Governance" сохранён без ослабления: v2.4 — sole active canonical / single living version / in-place only; Project Context.md — Historical/Inactive; v2.2/v2.3 — Superseded/Inactive; v2.5/v3.0 не создаются.
9. Подтвердить, что данная синхронизация не выбирает следующий Major Module, не открывает Phase-1 и не переоткрывает содержание принятых архитектур, контрактов и Combined Assessment.
10. Подтверждено (2026-08-05): repository persistence, staging, commit (один commit с этим документом) и обычный push этого commit в `main` РАЗРЕШЕНЫ Project Owner только для этой единственной принятой идентичности Project Context v2.4. Эти разрешения ещё НЕ исполнены — их выполнит Claude Code; Claude Cowork Git-операций не выполняет.

Repository persistence, staging, commit и push этой принятой идентичности разрешены Project Owner (2026-08-05) только для этого одного документа; они авторизованы, но ещё не выполнены и будут выполнены Claude Code.

---

# Drafting Report

Этот документ подготовлен как in-place synchronized byte identity существующего Project Context v2.4 (не как новый документ и не как новая версия), под явным Project Owner decision о единственной active canonical version и in-place-only updates для `Project Context v2.4.md`.

Базовым текстом послужила текущая Cowork-копия `Project Context v2.4.md`, исходная идентичность которой проверена перед редактированием (1276 строк / 82 431 байт / SHA-256 `f38b1c9c55c5540df8e8cac5a17b53eda510125bf7b9f7ce10ac77d41a52d492` — точное совпадение с ожидаемым значением задания), с последующими точечными current-state правками поверх неё. Это сохраняет byte-for-byte все секции, не требующие изменения.

Подтверждённые фактические значения — завершение Supporting Contracts 9–10; Contracts 1–10 atomic acceptance (2026-07-31, baseline commit `3e5f1318…`); принятие и repository persistence AI Brain Diagnosability Architecture Rev1 (2026-08-04, commit `becfc04a…`, SHA `8E4C5B4F…`) и Security Architecture Baseline Rev1 (2026-08-04, commit `f1cde3b3…`, SHA `8023425753…`); принятие и repository persistence Combined Assessment Rev1 (2026-08-05, commit `87f32eb1…`, SHA `B74242EB…`, Final Verdict PASS); состояние репозитория HEAD = origin/main = `87f32eb1…`, tracked working tree clean, `.claude/` untracked/unchanged — применены как Project Owner-confirmed и independently verified facts. **Claude Cowork не выполнял ни одной Git-операции и никакой Git-проверки и не заявляет, что запускал какие-либо git-команды.** Точная проверка состояния репозитория выполнена вне настоящей Cowork-задачи (Claude Code / подтверждение Project Owner).

Изменения ограничены current-state синхронизацией §1, §10.2, §10.5, §12.1, §16, §17, §22, §23, §26, а также разделов Required Project Owner Decisions, Drafting Report и Final Status. Никакая новая архитектура, категория, activation state, gate, contract, ADR, ACS, PCS или Owner Decision не введены — все содержательные факты уже отдельно приняты в цитируемых документах. Никакая новая версия документа не создана; ни один другой файл не изменён; F-01 записан, но не закрыт; принятые архитектуры, Supporting Contracts и Combined Assessment не изменялись.

**Repository:** изменена только Cowork-копия `docs/project/Project Context v2.4.md`; commit/push/staging Claude Cowork не выполнял. Repository persistence, staging, commit и push этой принятой идентичности РАЗРЕШЕНЫ Project Owner (2026-08-05, только этот документ), но ещё НЕ выполнены — их выполнит Claude Code.

---

# Final Status

```text
Project Context v2.4:
ACCEPTED — PROJECT OWNER NURLAN — 2026-08-05

Synchronization:
COMPLETE (current-state, 2026-08-05)

Correction cycle (PC-SYNC-01, PC-SYNC-02, PC-SYNC-03):
COMPLETE

Latest independent review (first correction review — historical):
CHANGES_REQUIRED — ChatGPT Work — 2026-08-05

Repeat independent review:
COMPLETE — PASS — ChatGPT Work — 2026-08-05

Deep self-review:
COMPLETE

Project Owner acceptance of corrected Project Context:
COMPLETE — ACCEPTED — 2026-08-05

Repository persistence authorization:
GRANTED — THIS ACCEPTED PROJECT CONTEXT V2.4 IDENTITY ONLY — 2026-08-05

Staging authorization:
GRANTED — THIS ACCEPTED DOCUMENT ONLY — 2026-08-05

Commit authorization:
GRANTED — ONE COMMIT CONTAINING THIS DOCUMENT ONLY — 2026-08-05

Push authorization:
GRANTED — ORDINARY PUSH OF THAT COMMIT TO MAIN — 2026-08-05

Execution state:
NOT YET EXECUTED — persistence, staging, commit and push are authorized
but have NOT been performed; they will be carried out by Claude Code. No
future commit hash is asserted here; Claude Cowork ran no Git command.

Phase-1 authorization:
NOT GRANTED

Implementation authorization:
NOT GRANTED

Version bump:
NONE

Version authority (per Project Context Version Governance, above):
Project Context v2.4 is the sole active canonical Project Context
version line, effective at all times, independent of exact-byte
acceptance state.

Exact-byte authority:
this specific edited byte identity has been Project Owner-accepted
(2026-08-05) after repeat independent review PASS. Repository persistence,
staging, commit and push of this one accepted identity are authorized but
NOT YET EXECUTED; the current repository-persisted Project Context content
remains in place until Claude Code executes the authorized commit that
persists this accepted identity.

Authoritative rebuild baseline (PC-SYNC-01):
accepted repository Project Context v2.4 —
C:\Users\user\Documents\GitHub\VistaRoom.AI\docs\project\Project Context
v2.4.md, SHA-256
2425564cd9c59bd4997845e3346100e588fccc2884fae910c99cc79d7cac4539. This
draft was rebuilt from that baseline, re-applying only source-confirmed
current-state changes; LF line endings preserved. The earlier unaccepted
Cowork draft (f38b1c9c…) was a change-list only (identical text, CRLF).

Supporting Contracts 1-10:
COMPLETE — accepted by the Project Owner as one atomic, technically
compatible, immutable package (2026-07-31; baseline commit
3e5f1318005e088143b7075d0e790df5379336be; package review PASS; 0 open
findings). Contract 9 (C9-REV1-CL-001) and Contract 10
(C10-REV1-CL-001): Owner-accepted, candidate-locked, repository-
persisted (§1, §10.2).

Supporting Contract 11:
NOT AUTHORIZED, NOT OPENED

AI Brain Diagnosability Architecture Rev1:
ACCEPTED — Project Owner, 2026-08-04 — repository-persisted (commit
becfc04a3209a57b281cd924da93cb41e7429a73).

Security Architecture Baseline Rev1:
ACCEPTED — Project Owner Nurlan, 2026-08-04 — repository-persisted
(latest commit f1cde3b329249bf9a5e6fbd69964bc242ff2e3b5).

Combined Diagnosability & Security Compatibility Assessment Rev1:
ACCEPTED — Project Owner Nurlan, 2026-08-05 — independent review PASS
(ChatGPT Work, 2026-08-05) — Final Verdict PASS — repository-persisted
(commit 87f32eb17720d574c178874145dea383f8b9a72b). Discharged the Owner
Criteria Checkpoint, the retrospective compatibility pass, the
compatibility matrix and the mandatory Diagnosability ↔ Security
cross-check.

Known current source-side finding:
F-01 — MINOR — OPEN — non-blocking to compatibility — an
identity/citation-precision item in the accepted AI Brain
Diagnosability Architecture Rev1. Closure requires a separate,
explicitly authorized correction cycle of that accepted document. Not
closed by this Project Context; does not change the Combined Assessment
verdict (PASS).

Pre-persistence synchronization baseline (Project Owner-confirmed /
independently verified; Claude Cowork ran no Git command):
Tracked working tree clean; pre-existing .claude/ remains untracked and
unchanged. Pre-persistence baseline HEAD = origin/main =
87f32eb17720d574c178874145dea383f8b9a72b; ahead/behind 0/0. This is NOT
asserted to remain HEAD after this Project Context is persisted; the
persisting commit becomes the subsequent repository state, recorded
separately from Claude Code's actual data (no future commit hash invented
here).

Next formal gate:
Phase-1 Scope Decision / Execution Profile — NOT AUTHORIZED — NOT
OPENED. Next Major Module — NOT SELECTED; not authorized to open before
current-module closure.

Final line count, byte count, and SHA-256 of this exact synchronized
identity:
reported in this session's chat output after post-edit verification —
not fabricated or estimated here.

Repository persistence:
NOT PERFORMED
NOT GRANTED
```
