# Candidate Lock Issuance Record

## Candidate Lock Identity

```text
Candidate Lock ID:
C8-REV1-CL-001

Candidate Lock status:
ISSUED

Lock validity:
VALID

Project:
VistaRoom AI

Project Owner:
Nurlan

Active Track:
Track A — Spatial Perception

Active Module:
Bounded Room Understanding / VLM Interpretation

Issuance date:
2026-07-28
```

## Lock Subject

```text
Contract:
Supporting Contract 8 Revision 1

Canonical filename:
Supporting-Contract-8-Unseen-Claim-Evaluation-Artifact-Rev1.md

Locked lines:
1827

Locked bytes:
327005

Locked SHA-256:
95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7
```

This lock binds only the exact canonical filename and exact byte identity stated above.

It does not bind and is not satisfied by any predecessor Contract 8 draft, predecessor SHA identity (including but not limited to `32066bfe5a4ee2adf23878a6c8b869e6f6638b06c0d8688f1f36f5cd2cc1c096`, `9769ad2adfccb219ed6413ff770e59802a571777a37a2225c8719c7f452e38d3`, or `08127e3f512e8b2e2385dc6d383c520f827bfa7fa7a678187c01f5b473229459`), review report, verification report, summary, transcript, attachment with different bytes, or similarly named file.

The upload-mechanism filename attached to this task (`Supporting-Contract-8-Unseen-Claim-Evaluation-Artifact-Rev1_7_.md`) differed from the canonical governance filename. Independent byte verification confirmed that the attachment is byte-identical to the accepted canonical identity. The lock binds the canonical filename, not the transient upload filename.

## Project Owner Authority

```text
Acceptance decision:
"Я принимаю документ Контракт 8."

Accepted exact identity:
1827 lines / 327005 bytes / SHA-256
95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7.

Candidate Lock instruction:
"Готовь промпт для подготовку и выпуск Candidate Lock."
```

These decisions authorize verification of the accepted exact identity, verification of completed independent review closure, preparation and issuance of Candidate Lock C8-REV1-CL-001, and creation of exactly one external Candidate Lock record.

These decisions do not authorize repository persistence, staging, commit, push, Contract 9 preparation, Contract 10 preparation, Contract 11 preparation, corpus creation or population, fixture creation, annotation, provider/model contact, invocation, evaluation or selection, implementation, schema migration, deployment, Controlled Learning activation, Combined Diagnosability & Security Compatibility Assessment, AI Brain Diagnosability Architecture, Security Architecture Baseline, or Tracks B–H.

No additional Project Owner acceptance is requested for this already accepted exact identity.

## Independent Review Evidence

### Full consolidated review

```text
Review type:
VALID EXTERNAL FULL INDEPENDENT CONSOLIDATED REVIEW

Reviewed predecessor:
1827 lines / 327005 bytes

SHA-256:
32066bfe5a4ee2adf23878a6c8b869e6f6638b06c0d8688f1f36f5cd2cc1c096

Findings:
BLOCKER 0
MAJOR 0
MINOR 1
IMPROVEMENT 0

Sole finding:
MINOR-01 — incorrect byte count in §3 for the Contracts 1-10
Preparation and Dependency Plan Rev11 source-table row (57476 stated;
95277 authoritative).
```

### Closure verification

```text
Verification type:
LIMITED EXTERNAL INDEPENDENT CLOSURE VERIFICATION

Corrected exact identity:
1827 lines / 327005 bytes

SHA-256:
95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7

MINOR-01:
CLOSED

Exact delta:
57476 → 95277 (one logical table cell; independently confirmed via
full diff against the predecessor: exactly 2 diff lines, 0 unexpected
changes, 899 lines / SHA-256 `3a078240af...` unchanged on that row)

Unexpected changes:
0

Final findings:
BLOCKER 0
MAJOR 0
MINOR 0
IMPROVEMENT 0

TECHNICALLY REVIEW-CLOSED:
YES
```

The current governing verdict for the exact accepted identity (`95fa71f4...`) is the closure verification's PASS — 0 BLOCKER / 0 MAJOR / 0 MINOR / 0 IMPROVEMENT. The predecessor's FAIL verdict applies only to the superseded predecessor identity (`32066bfe...`) and is not the current state of the locked subject.

## Identity Verification Evidence

```text
Canonical filename:
Supporting-Contract-8-Unseen-Claim-Evaluation-Artifact-Rev1.md

Lines:
1827

Bytes:
327005

SHA-256:
95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7

UTF-8:
VALID

Final newline:
PRESENT

Identity result:
MATCH
```

## Lock Assertions

1. Supporting Contract 8 Revision 1, exact identity 1827 lines / 327005 bytes / SHA-256 `95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7`, is Owner-accepted.
2. The independent consolidated review chain for this exact identity is complete (full consolidated review followed by limited closure verification of the sole finding).
3. Current findings equal 0 BLOCKER / 0 MAJOR / 0 MINOR.
4. This exact identity is technically review-closed.
5. Candidate Lock `C8-REV1-CL-001` is issued and valid.
6. Any change to even one byte of the locked artifact creates a new, unlocked identity distinct from `C8-REV1-CL-001`.
7. This lock does not modify Supporting Contract 8.
8. This lock does not correct, reinterpret, or restate Supporting Contract 8's normative content.
9. This lock stabilizes the exact artifact identity for downstream dependency consultation only.
10. Repository persistence of the locked artifact and of this Candidate Lock record has not been performed.
11. Supporting Contract 8 is not `CLOSURE-COMPLETE` until Supporting Contract 8 and this Candidate Lock record are both atomically persisted to the repository.
12. This Candidate Lock does not open Contract 9 or Contract 10.
13. The strategic predicate "Supporting Contracts 1-10 accepted" remains not satisfied.
14. This Candidate Lock does not authorize the Diagnosability/Security governance sequence.
15. Controlled Learning remains `LEARNING-READY / NOT LEARNING-ACTIVE`.

## Dependency and Change-Control Rules

```text
Any byte-level change to the locked Contract 8 artifact invalidates
identity equality with C8-REV1-CL-001.

A changed artifact requires:
1. a new exact identity;
2. dependency-impact classification;
3. review appropriate to the change;
4. explicit Project Owner acceptance;
5. a new or superseding Candidate Lock decision.

This lock must never be silently rebound to another SHA-256.

Any accepted upstream change that materially affects Contract 8
requires explicit dependency-impact review.

Until compatibility is reconfirmed, this Candidate Lock must not be
treated as dependency-valid for newly affected downstream work.

Non-material unrelated changes do not automatically invalidate this
lock.
```

## Scope Preservation

```text
Operation
→ RoomCase[exactly 1]
→ ImageAsset[1..6]
→ one consolidated PerceptionResult
```

Preserved boundaries: residential only; Residential-34; one materially unchanged physical room; licensed, synthetic and staged sources only; no real-user photographs; no real-user data; no whole-home graph; no floor plans; no video; no panorama; no 2.5D/3D; no cross-session fusion; no commercial property; no Pantone; no collaborative preference compromise; English canonical; Russian full derived locale; language-neutral stable IDs; mandatory English fallback; `LEARNING-READY / NOT LEARNING-ACTIVE`.

This Candidate Lock does not add new norms to Contract 8. It only fixes the already-accepted exact identity.

## Downstream Non-Authorization

This Candidate Lock does not authorize:

- repository persistence;
- staging;
- commit;
- push;
- Contract 9 preparation;
- Contract 10 preparation;
- Contract 11 preparation;
- corpus creation or population;
- fixture creation;
- annotation;
- provider/model activity;
- implementation;
- schema migration;
- deployment;
- Controlled Learning activation;
- Combined Diagnosability & Security Compatibility Assessment;
- AI Brain Diagnosability Architecture;
- Security Architecture Baseline;
- Tracks B–H.

## Repository Status

```text
Repository preflight performed:
YES — this task has confirmed repository read access.

origin/main:
82fa094aaa09ada2bac28b55bea674981760a474

Ahead/behind:
0/0

Collision search result:
NOT FOUND — no repository-persisted Contract 8 artifact and no
Candidate-Lock-C8-REV1-CL-001.md exist anywhere in origin/main's tree.

Contract 8 repository persistence:
NOT PERFORMED

Candidate Lock repository persistence:
NOT PERFORMED

Repository changes performed by this task:
NONE
```

## Final Candidate Lock State

```text
Supporting Contract 8 Revision 1:
OWNER-ACCEPTED
TECHNICALLY REVIEW-CLOSED
CANDIDATE-LOCKED — C8-REV1-CL-001
NOT REPOSITORY-PERSISTED
NOT YET CLOSURE-COMPLETE

Candidate Lock C8-REV1-CL-001:
ISSUED
VALID
NOT REPOSITORY-PERSISTED

Contract 9:
NOT AUTHORIZED
NOT OPENED

Contract 10:
NOT AUTHORIZED
NOT OPENED

Contract 11:
NOT AUTHORIZED
NOT OPENED
```
