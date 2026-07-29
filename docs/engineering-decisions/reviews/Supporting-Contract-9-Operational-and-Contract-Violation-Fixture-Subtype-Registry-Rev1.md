# Supporting Contract 9 — Operational and Contract Violation Fixture Subtype Registry
## Revision 1 — Correction Cycle 7

```text
Project: VistaRoom AI
Project Owner: Nurlan
Active Track: Track A — Spatial Perception
Primary Active Module: Bounded Room Understanding / VLM Interpretation
Canonical filename:
Supporting-Contract-9-Operational-and-Contract-Violation-Fixture-Subtype-Registry-Rev1.md

Current status:
DRAFT
PREPARATION AUTHORIZED
CORRECTION CYCLE 7 APPLIED
FULL PROJECT-OWNER-AUTHORIZED NON-INDEPENDENT ADVERSARIAL TECHNICAL REVIEW COMPLETED
TECHNICALLY REVIEW-CLOSED
READY FOR PROJECT OWNER ACCEPTANCE

Project Owner acceptance: NOT PERFORMED
Candidate Lock: NOT ISSUED
Candidate Lock ID: NOT RESERVED
Repository persistence: NOT AUTHORIZED, NOT PERFORMED
Fixture creation: NOT AUTHORIZED, NOT PERFORMED
Corpus creation: NOT AUTHORIZED, NOT PERFORMED
Annotation execution: NOT AUTHORIZED, NOT PERFORMED
Contract 10: NOT AUTHORIZED, NOT OPENED
Contract 11: NOT AUTHORIZED, NOT OPENED
Implementation: NOT AUTHORIZED
Controlled Learning: LEARNING-READY / NOT LEARNING-ACTIVE
```

---


# 1. Document Identity, Authorization and Governance State

## 1.1 Document identity

```text
Document type: Supporting Contract
Contract number: 9
Revision: 1
Correction cycle: 7
Preparation date: 2026-07-29
Correction date: 2026-07-29
Repository baseline used by the original draft:
a4b8044a0c6e20d3d2c7d905a8df837b7ed2c055
Original review subject identity:
1946 lines / 122896 bytes /
SHA-256 abb63fe4cfcc7c31e3104d6d9779b55311959f63ab2542a08915a0bc8046c598
Original verdict after full internal adversarial review: FAIL
Corrected identity: calculated externally after final write; not embedded to avoid self-hash recursion.
```

## 1.2 Authorization chain

The Project Owner authorized preparation of Supporting Contract 9. That authorization permits drafting this contract only. It does not authorize invention or reopening of upstream-fixed evaluation facts. No explicit Project Owner acceptance of the original draft's "first normative author of the granular decomposition" claim exists; that claim is removed.

## 1.3 Current upstream state

```text
Supporting Contracts 1–8: CLOSURE-COMPLETE
Supporting Contract 9: TECHNICALLY REVIEW-CLOSED / AWAITING PROJECT OWNER ACCEPTANCE
Supporting Contract 10: NOT AUTHORIZED / NOT OPENED
Supporting Contract 11: NOT AUTHORIZED / NOT OPENED
Supporting Contracts 1–10 accepted predicate: FALSE
Combined Diagnosability & Security Compatibility Assessment: NOT AUTHORIZED
AI Brain Diagnosability Architecture: NOT AUTHORIZED
Security Architecture Baseline: NOT AUTHORIZED
```

## 1.4 Correction Cycle 1 change summary

| Finding | Correction |
|---|---|
| BLOCKER-01 | Removed the unsupported claim that a new Project Owner Decision authorized Contract 9 to invent a new granular decomposition. Restored the accepted ETAP Rev13 → Rev15 → Rev16 preservation chain: subtype semantics, counts, expected results, reason tokens, retryability and prohibited outcomes are fixed inputs; Contract 9 registers them without reopening them. |
| BLOCKER-02 | Replaced the unauthorized 22-entry registry with the fixed 18-entry registry: 4 Failure + 4 C.2 + 4 C.3 + 6 Contract Violation. |
| MAJOR-01 | Restored fixed per-row allocations and exact aggregate totals: Failure 8/13, C.2 4/8, C.3 4/8, operational 16/29, Contract Violation 12/18. |
| MAJOR-02 | Restored exact imported reason tokens and fixed retryability meanings; removed c9.reason aliases that changed normative identities. |
| MAJOR-03 | Removed unauthorized subtypes: preprocessing-failure, provider-auth-error, provider-rate-limit, and unresolvable-cross-view-contradiction. |
| MAJOR-04 | Corrected the upstream state of Contract 7 to OWNER-ACCEPTED / CANDIDATE-LOCKED / REPOSITORY-PERSISTED / CLOSURE-COMPLETE. |
| MAJOR-05 | Separated mixed-room negative validation from Contract 9 subtype ownership; no new Contract 9 subtype/count is created for it. |
| MAJOR-06 | Rebuilt EN/RU localization as actual inline coverage instead of narrative claims that contradicted the tables. |
| MAJOR-07 | Rebuilt rule → validation → failure → exactly-one-primary-escalation traceability; post-result-mutation maps to the Hard Security Stop. |
| MAJOR-08 | Replaced incomplete/omitted source identities with exact path, lines, bytes and SHA-256 for every normative source used. |
| MAJOR-09 | Removed self-correcting table prose and stale numeric cells; every authoritative table now contains only final values. |
| IMPROVEMENT-01 | Introduced c9.entry.* registry-entry identities separate from imported fixtureSubtypeToken values, avoiding ownership ambiguity while preserving fixed upstream tokens. |
| IMPROVEMENT-02 | Added explicit fixed/imported/Contract-9-owned/reserved-for-Contract-10/reserved-for-Contract-11 classification. |

No repository file was created, modified, staged, committed or pushed by Correction Cycle 1.

## 1.5 Correction Cycle 2 change summary

| Finding | Correction |
|---|---|
| MAJOR-10 | Replaced the ambiguous lifecycle arrow chain that allowed `review-failed` to appear to flow directly into `owner-accepted`. Added explicit valid and invalid transition matrices, including the correction loop back to independent review. |
| MAJOR-11 | Rebuilt §39.2 as an actual Result × Stage × Reason × Entry matrix. The previous table was mislabeled as Reason × Stage × Entry while its first two columns contained stage and result and omitted reason entirely. |
| MAJOR-12 | Replaced the prose-only §40.1 with a complete 18-row entry-level source trace matrix. |
| MAJOR-13 | Historical CC2 narrowed the claimed granular-row recovery range from `Rev10–Rev15` to `Rev11–Rev15`. That intermediate formulation is superseded by Correction Cycles 3 and 6: ETAP Rev13 is the exact accepted row source, while ETAP Rev15 and Rev16 provide the accepted preservation chain. ETAP Rev10 remains an aggregate and reason-token source, not the complete granular registry source. |
| MAJOR-14 | Restored the exact fixed stage token `provider` for `F-PROVIDER-TIMEOUT`; `provider invocation` remains descriptive prose only. |
| MAJOR-15 | Restored the exact fixed stage token `C.1` for `F-PROVIDER-MALFORMED`; `C.1 adapter` remains descriptive trigger prose only. |
| IMPROVEMENT-03 | Clarified Contract-9 ownership of canonical Contract Violation subtype tokens without claiming that no historical uppercase labels ever existed. |

No repository file was created, modified, staged, committed or pushed by Correction Cycle 2. This corrected artifact remains external to the repository pending independent review, Owner acceptance, Candidate Lock authorization and repository-persistence authorization.

## 1.6 Correction Cycle 3 change summary

| Finding | Correction |
|---|---|
| MAJOR-16 | Corrected the fixture-registry continuity claim. ETAP Rev13 carries the accepted exact row-level registry; ETAP Rev15 explicitly reconfirms that the fixture registry is unchanged; ETAP Rev16 again preserves fixture-suite definitions. Preparation Plan Rev11 assigns Contract 9 registry ownership and dependency direction but is not represented as independently restating all rows. |
| MAJOR-17 | Separated canonical fixture subtype identity from Contract-9 document trace identity. The fixed subtype token is the canonical semantic subtype identity; `c9.entry.*` is a Contract-9-local registry-row trace key and cannot replace or rename the subtype token downstream. |
| MAJOR-18 | Removed unconditional `fixtureLineageId` and lineage requirements. TDH Rev10 remains authoritative: fixture and lineage identifiers are required only where their applicability predicates are satisfied, and no identity may be fabricated. |
| MAJOR-19 | Removed Contract-9-owned fixture-ID lifecycle rules from retry and replacement semantics. Contract 9 preserves retryability meaning but does not decide whether a retry or replacement reuses or changes `fixtureId`, `fixtureLineageId` or other TDH-owned identities. |
| MAJOR-20 | Made all three Contract Violation missing/invalid trigger pairs deterministic and disjoint. Zero Room is exclusively `CV-MISSING-ROOM`; two-or-more Room nodes are exclusively `CV-INVALID-ROOM-CARDINALITY`; missing and invalid confidence/provenance are likewise mutually exclusive. |
| MAJOR-21 | Partitioned the four C.3 general-rejection triggers so schema version, operation identity, image/asset/input-set identity and residual non-identity result metadata cannot claim the same primary fixture row. |
| MAJOR-22 | Reclassified the one-image/multi-image/non-image matrix as eligibility only. Eligibility creates no new fixture subtype, no mandatory image-form quota and no multiplication of the fixed 16/29 or 12/18 populations. Unsupported non-image C.3 expansion was removed. |
| IMPROVEMENT-04 | Clarified that retryability comparison is semantic evaluation classification; its eventual field or serialization representation remains reserved for Contract 10. |
| IMPROVEMENT-05 | Tightened mixed-room wording to accepted bounded-scope/TDH/ADR-015 authority without assigning unverified population ownership to Contract 7. |

No repository file was created, modified, staged, committed or pushed by Correction Cycle 3. This corrected artifact remains external to the repository pending independent review, Owner acceptance, Candidate Lock authorization and repository-persistence authorization.

## 1.7 Correction Cycle 4 change summary

| Finding | Correction |
|---|---|
| MINOR-01 | Corrected the byte count for `Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md` in §3.1 from `57476` to the independently verified `95277`. The existing 899-line count and SHA-256 `3a078240afdbc49fffbdfbc7a1c4e76ac6bf49ccf06a5f3621de314934878c0b` remain unchanged. |

No semantic registry row, subtype token, count, expected result, stage, reason, retryability meaning, prohibited outcome, rule, validation, failure, escalation, lifecycle transition, Contract 10/11 boundary or scope rule was changed by Correction Cycle 4. No repository file was created, modified, staged, committed or pushed.

## 1.8 Correction Cycle 5 change summary

`MINOR-01` corrected the §43 mechanical self-report from `Markdown tables: 32` to the independently reproduced value `Markdown tables: 33`. No registry row, subtype token, count, expected result, stage, reason, retryability meaning, prohibited outcome, rule, validation, failure, escalation, localization identity, lifecycle transition, Contract 10/11 boundary or scope rule was changed.

No repository file was created, modified, staged, committed or pushed by Correction Cycle 5. This corrected artifact remains external to the repository pending completion of review, Project Owner acceptance, Candidate Lock authorization and repository-persistence authorization.

## 1.9 Correction Cycle 6 change summary

`MINOR-02` corrected overstated historical traceability in §40.1. The twelve operational entry rows no longer claim independently verified exact-row presence across ETAP Revisions 11–15. Each row now identifies ETAP Rev13 as the exact accepted row source and ETAP Rev15/Rev16 as the accepted preservation chain. §3.3 now explicitly records that Rev11–12 are historical predecessor references that are not independently byte-verifiable in the current repository snapshot.

No fixture subtype token, count, expected result, stage, reason token, retryability meaning, prohibited outcome, rule, validation, failure, escalation, localization identity, lifecycle transition, Contract 10/11 boundary or scope rule was changed. No repository file was created, modified, staged, committed or pushed by Correction Cycle 6.

## 1.10 Correction Cycle 7 change summary

Correction Cycle 7 closes the complete Project-Owner-directed adversarial review of Correction Cycle 6.

- **BLOCKER-03 — security precedence:** `post-result-mutation` is moved to first comparison precedence and always triggers `c9.escalation.security-stop`, independent of other simultaneously observed defects.
- **MAJOR-23 — TDH identity lifecycle overreach:** removed the claims that replacement creates a new `fixtureId` and that every retry necessarily creates a new Operation identity. Retry/replacement attempts must be separately traceable, while exact `operationId`, `fixtureId`, `fixtureLineageId`, `lineageId` and source-identity disposition remain controlled by TDH Rev10 and future separately authorized fixture-preparation/execution rules.
- **MAJOR-24 — Contract Violation reason-token provenance:** separated ETAP Rev13's accepted semantic-row/count authority from its explicit incorporation of the six exact Contract Violation reason tokens from historical ETAP Rev10 §12.2. ETAP Rev15/Rev16 remain the accepted preservation chain and current authority.
- **MAJOR-25 — bilingual semantic completeness:** completed RU normative semantics for subtype triggers, retryability meanings, prohibited outcomes, lifecycle transition conditions, comparison conditions, and examples/counterexamples.
- **MAJOR-26 — review-route closure:** added a narrowly scoped Project Owner reviewer-availability exception for this exact Contract 9 acceptance-readiness cycle. It permits disclosed full non-independent adversarial technical review when no independent reviewer is available, without misrepresenting independence and without waiving Project Owner acceptance, Candidate Lock or repository-persistence gates.
- **MAJOR-27 — normative source identity completeness:** added the exact accepted Module Completion and Sequencing Policy Revision 4 source identity required by §3.2 precedence.
- **MINOR-03 — ownership wording:** corrected the C.2 multi-image/mixed-room source attribution so Contract 7 is not represented as the sole owner of bounded-scope rejection semantics.
- **MINOR-04 — suite-stage summary:** replaced the non-normative English-only phrase `mixed imported stages` in the Failure suite row with the exact language-neutral stage set `provider / C.1 / preprocessing`.
- **MINOR-05 — validation-registry scope accuracy:** removed the overbroad claim that every normative sentence maps to a `c9.rule.*` identity. The document now distinguishes the 41-rule acceptance registry from separately normative entry, lifecycle, comparison and imported-boundary tables, avoiding false one-to-one coverage and redundant rule duplication.
- **MAJOR-28 — current-state synchronization:** replaced the stale `DRAFTING OPEN` state in §1.3 with `TECHNICALLY REVIEW-CLOSED / AWAITING PROJECT OWNER ACCEPTANCE`, aligning the upstream-state block with the lifecycle ledger, header and final status.
- **BLOCKER-04 — comparison precedence completeness:** replaced grouped precedence buckets with an explicit total order for all 15 `c9.comparison.*` identities, including `wrong registry entry or suite attribution`. Lineage, source, fixture-identity and subset defects now have distinct precedence positions, eliminating unresolved primary-outcome branches when multiple defects coexist.
- **MAJOR-29 — TDH fixture-identity applicability:** corrected §18 so every future fixture execution requires `operationId`, `inputArtifactId`, `fixtureId` and `fixtureLineageId` because fixture governance applies, while `roomCaseId`, image identities and photographic `lineageId` remain operation-type/applicability dependent. Removed wording that incorrectly made fixture identity optional for an object already classified as a fixture.
- **BLOCKER-05 — PASS complement completeness:** expanded `c9.comparison.pass` so PASS is available only after all fourteen non-PASS predicates are false, including source identity, registry entry/suite attribution, count uniqueness and post-result immutability.
- **MAJOR-30 — upstream closure validation scope:** synchronized `c9.rule.040`, its validation and failure from the historical Contract-7-only wording to truthful reporting of Supporting Contracts 1–8 closure, review-route authority and this artifact's lifecycle state.
- **MINOR-06 — security wording precision:** narrowed §33 from generic `provider invocation` to `unauthorized provider invocation`, preserving future separately authorized provider activity while retaining the current Hard Security Stop.
- **MINOR-07 — retryability comparison wording:** aligned the comparison failure text with the registry's evaluation-classified retryability semantics and removed the misleading implication of a required observed runtime field.
- **MINOR-08 — content-hash duplicate wording:** replaced the absolute claim that any hash collision is a duplicate with deterministic duplicate handling for equal governed content and mandatory collision adjudication for unequal bytes.

No fixture subtype token, count, expected result, stage, reason token, retryability meaning, criticality, floor or Contract 10/11 boundary is changed.

## 1.11 Project Owner reviewer-availability exception and technical closure

The Project Owner explicitly stated that no independent reviewer is available and directed this architecture partner to perform the complete deep review, correct every confirmed defect and bring the artifact to acceptance readiness. For this exact Contract 9 Correction Cycle 7 identity only, technical review closure may therefore use a disclosed **Project-Owner-authorized non-independent adversarial technical review**.

This exception:

- does not claim external or organizational independence;
- applies only to the exact byte identity produced by Correction Cycle 7;
- requires complete semantic, source-lineage, mechanical, localization, security, lifecycle and boundary review;
- requires 0 open BLOCKER / MAJOR / MINOR findings;
- does not perform or imply Project Owner acceptance;
- does not authorize Candidate Lock, repository persistence, Contract 10, Contract 11, fixture/corpus work, provider activity, implementation, Diagnosability Architecture or Security Architecture;
- does not create a general waiver for any other contract or future correction identity.

The complete rerun recorded by this correction satisfies the technical-review requirement for Project Owner consideration of this exact identity.


# 2. Purpose and Acceptance Boundary

Contract 9 is the normative registry that materializes the already-fixed operational and contract-violation fixture subtype set into one closed, localized, traceable contract.

It registers:

- fixture suite identities;
- one Contract-9 registry-entry identity for each fixed fixture subtype;
- each fixed operational subtype token and one Contract-9 canonical subtype token for each of the six fixed Contract Violation semantic rows; these canonical tokens preserve the accepted semantic label, count, reason family and expected behavior and do not treat historical labels as current stable IDs unless the accepted continuity chain fixes them;
- fixed development and held-out counts;
- fixed expected result family and stage;
- fixed reason token;
- fixed retryability meaning;
- fully materialized prohibited outcomes;
- identity, lineage, validation, lifecycle, localization and traceability rules.

Contract 9 does **not** reopen or redesign the fixture taxonomy. Accepted ETAP Revision 13 contains the exact row-level fixture registry. ETAP Revision 15 explicitly reconfirms that the fixture suites and exact subtype registry are room-count independent and unchanged; ETAP Revision 16 again preserves fixture-suite definitions while becoming the current Residential-34 evaluation baseline. Preparation Plan Revision 11 assigns Contract 9 ownership of the fixture registry and establishes the one-way Contract 9 → Contract 10 dependency; it is not treated as a substitute for the exact ETAP rows. Contract 9 owns registry materialization and its internal governance trace identities, not a new evaluation plan.

Contract 9 is not a fixture corpus, fixture instance set, annotation package, held-out subset, executable test suite, provider run, JSON schema, API schema, database schema, TypeScript interface, implementation package, aggregation contract or deployment authorization.


# 3. Authoritative Sources and Precedence

## 3.1 Exact source identity table

| Source | Revision | Exact path/artifact | Lines | Bytes | SHA-256 | State |
|---|---|---|---|---|---|---|
| Project Context | v2.4 Correction Cycle 2 | `docs/project/Project Context v2.4.md` | 1276 | 81155 | `2425564cd9c59bd4997845e3346100e588fccc2884fae910c99cc79d7cac4539` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Living Strategic Roadmap | v1.4 | `docs/roadmap/Living-Strategic-Roadmap-v1.4.md` | 1516 | 78761 | `ff2b93d7b8d4dc11eb871d3ff72c5522f4aa664744b9c3e59ce5c9cfd68727b0` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Module Completion and Sequencing Policy | Rev4 | `docs/engineering-decisions/reviews/Module-Completion-and-Sequencing-Policy-Rev4.md` | 1616 | 56201 | `787e4713c791efde6c7977c489aa033169e0dcac16b8df974929476d7b839b98` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Contracts 1–10 Preparation and Dependency Plan | Rev11 | `docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md` | 899 | 95277 | `3a078240afdbc49fffbdfbc7a1c4e76ac6bf49ccf06a5f3621de314934878c0b` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Evaluation Threshold and Acceptance Plan | Rev16 | `docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev16.md` | 869 | 53824 | `2adea2f97decd734717a2d6a277b96fa75296bfdc6a6f9669ec9b729c69367d2` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Evaluation Threshold and Acceptance Plan | Rev15 historical preservation bridge | `docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev15.md` | 1438 | 95866 | `b6437ad9dcaf9107ca96b0985b7ed8f84250768224ab38a83248b66c98bb7a75` | OWNER-ACCEPTED / REPOSITORY-PERSISTED / SUPERSEDED BY REV16 |
| Evaluation Threshold and Acceptance Plan | Rev13 exact fixture-row source | `docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev13.md` | 838 | 72290 | `0a8dab90451d6b5e55725f2bc9660cad0c74788a68993e1c40d7335b90e8957d` | OWNER-ACCEPTED / REPOSITORY-PERSISTED / HISTORICAL SOURCE PRESERVED BY REV15/REV16 |
| Test Data Handling Decision | Rev10 | `docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev10.md` | 2132 | 171633 | `472fe038ed20fac83d1e63e9c32e2eef13201fa8fd16b39612debf25a69abb64` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Module Applicability Profile | Rev19 | `docs/engineering-decisions/reviews/Candidate-A-Module-Applicability-Profile-Rev19.md` | 1048 | 77548 | `032e684f2ab331502695c6a0d04faec92ed2d3394830722bb4f559472d39ca17` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Bounded Scope Decision | Rev5 corrected | `docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev5.md` | 2080 | 119875 | `bc4236150ed012d68096eb630760f44380a8e154a0c5d18f06147dd52ed1d122` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Perception Mechanism Selection and Evaluation Architecture | Rev3 corrected | `docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md` | 1490 | 89285 | `242aa5849c1560b78d18d5efb8de6e8c9f42baf9c62fa3346426a380ed1ceb41` | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| ADR-013 — StructuredScene Schema v0 | ADR-013 | `docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md` | 187 | 17043 | `9428341ff11d2a3cb5af271ca274b3468d9578c2759d27b54b49f59800592ea6` | ACCEPTED / REPOSITORY-PERSISTED |
| ADR-014 — Perception Boundary | ADR-014 | `docs/adr/ADR-014-Perception-Boundary.md` | 202 | 17272 | `d1cf89b6e2d4700d9f2252d2daf1c2de713c99e37e03967e32393cbe0dd32f8c` | ACCEPTED / REPOSITORY-PERSISTED |
| ADR-015 — Multi-Image Perception Boundary | ADR-015 | `docs/adr/ADR-015-Multi-Image-Perception-Boundary.md` | 259 | 24237 | `b5e03fb60384f151df01b91abf15d20b919054a038a76a4e04c412f956d6cd6a` | ACCEPTED / REPOSITORY-PERSISTED |
| Supporting Contract 1 — Master Vocabulary | Rev19 | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md` | 5788 | 1048939 | `d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329` | OWNER-ACCEPTED / CANDIDATE-LOCKED C1-REV19-CL-001 / REPOSITORY-PERSISTED |
| Supporting Contract 2 — Relations | Rev10 | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-2-Relation-Annotation-and-Applicability-Rev10.md` | 1532 | 80311 | `758bf9b99873f977600365e131b7dc1c166fcf71fe9ac8262294a1ca4e549177` | OWNER-ACCEPTED / CANDIDATE-LOCKED C2-REV10-CL-001 / REPOSITORY-PERSISTED |
| Supporting Contract 3 — Applicability Matrix | Rev1 CC7 | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-3-Relation-Type-Active-Category-Applicability-Matrix-Rev1.md` | 1236 | 71870 | `0c2263cffbe59ee33727060f710f1c42d4478684cea8fa97ebbb6530b4992180` | OWNER-ACCEPTED / CANDIDATE-LOCKED C3-REV1-CL-001 / REPOSITORY-PERSISTED |
| Supporting Contract 4 — Evidence and Provenance | Rev1 CC7 | `docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-4-Best-Effort-Evidence-Provenance-and-Determinability-Annotation-Rev1.md` | 2567 | 258378 | `b3ab4e7af3ba816d6a8c24a5d7cd39e7fabf53f90c54370d9002948098244f73` | OWNER-ACCEPTED / CANDIDATE-LOCKED C4-REV1-CL-001 / REPOSITORY-PERSISTED |
| Supporting Contract 5 — Confidence | Rev1 CC3 | `docs/engineering-decisions/reviews/Supporting-Contract-5-Confidence-Normalization-Rev1-CC3.md` | 1974 | 165770 | `cf2796ae890c75f952d88ef9786c3fd694140ec0a5040e59bcf8a16a3ba67d43` | OWNER-ACCEPTED / CANDIDATE-LOCKED C5-REV1-CL-001 / REPOSITORY-PERSISTED |
| Supporting Contract 6 — Determinability Pairing | Rev1 CC1 | `docs/engineering-decisions/reviews/Supporting-Contract-6-Determinability-Pairing-Rev1-Correction-Cycle-1.md` | 2216 | 436061 | `245d52fe123331f66d12a7244ab80571ef69b3b81ef7c4018d4c2ae7360d6136` | OWNER-ACCEPTED / CANDIDATE-LOCKED C6-REV1-CL-001 / REPOSITORY-PERSISTED |
| Supporting Contract 7 — Semantic Case | Rev1 CC1 | `docs/engineering-decisions/reviews/Supporting-Contract-7-Semantic-Case-Scenario-Sufficiency-Completeness-Rev1-Correction-Cycle-1.md` | 2608 | 401211 | `59e6d3a753f1ee4c48f3c434d4a9459a73105c9b1c23e0ce906f86320b6fd03d` | OWNER-ACCEPTED / CANDIDATE-LOCKED C7-REV1-CL-001 / REPOSITORY-PERSISTED |
| Supporting Contract 8 — Unseen Claims | Rev1 | `docs/engineering-decisions/reviews/Supporting-Contract-8-Unseen-Claim-Evaluation-Artifact-Rev1.md` | 1827 | 327005 | `95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7` | OWNER-ACCEPTED / CANDIDATE-LOCKED C8-REV1-CL-001 / REPOSITORY-PERSISTED |
| Full-Platform Vision Architecture | Rev5 | `VistaRoom-AI-Full-Platform-Vision-Architecture-Rev5.md` | 1715 | 48518 | `fbd5ec47f9033c24e0677b586515b439bf94165286fa227895b115e1fc68e467` | OWNER-ACCEPTED / CURRENT VISION BASELINE |
| Consolidated Full Feature Vision | Rev5 | `VistaRoom-AI-Consolidated-Feature-Vision-Rev5.md` | 769 | 44827 | `294196fccbf666ab82105e3dabda083b60243af957449033bad505b2b6833228` | OWNER-ACCEPTED / CURRENT FEATURE BASELINE |

## 3.2 Precedence

1. Explicit Project Owner decisions.
2. Project Context v2.4 and Living Strategic Roadmap v1.4.
3. Accepted Module Completion and Sequencing Policy and accepted Roadmap amendments.
4. Accepted and Candidate-Locked Supporting Contracts 1–8.
5. Accepted Preparation Plan Rev11, ETAP Rev16, TDH Rev10, MAP Rev19, Bounded Scope Rev5 and accepted ADRs.
6. Accepted Perception Mechanism Rev3.
7. This Contract 9 corrected draft.

## 3.3 Fixture-registry continuity rule

The current ETAP Rev16 exact identity is the controlling evaluation-plan identity. Its change summary explicitly leaves fixture-suite definitions unchanged. ETAP Rev13 §12.1–§12.3 is the direct accepted exact-row source for the twelve operational entries. ETAP Rev13 §12.4 is the accepted semantic-row and 2/3-count source for the six Contract Violation entries and explicitly incorporates their exact reason codes from its historical Revision 10 predecessor. ETAP Rev15 and ETAP Rev16 independently preserve the fixture suites and aggregate populations unchanged. Preparation Plan Rev11 supplies Contract 9 ownership and dependency direction; it does not independently recreate the row table.

Historical ETAP Rev10 §12.2 is an incorporated predecessor content source for the six Contract Violation reason tokens. It is not a current controlling source and no exact repository blob for that historical draft is present at the current repository checkpoint; therefore it is not misrepresented as a current exact source-identity row in §3.1. The accepted ETAP Rev13 incorporation-by-reference is the controlling governance evidence for those tokens.

Any exact current-source mismatch triggers `c9.escalation.source-revalidation` and blocks review. ETAP Rev13 is the accepted registry source, ETAP Rev15 is the accepted preservation bridge, and ETAP Rev16 is the current evaluation authority. Revisions 11–12 are historical predecessor references reported by the later accepted ETAP continuity chain but are not independently byte-verifiable in the current repository snapshot. Illustrative architecture prose is never a registry source.


# 4. Contract Ownership Boundary

## 4.1 Externally fixed and imported

| Item | Owner | Contract 9 treatment |
|---|---|---|
| Four suite families and ETAP metric IDs | ETAP Rev16 | Imported unchanged |
| Eighteen fixed fixture semantic subtypes | ETAP Rev13 exact registry, preserved by ETAP Rev15 and Rev16 | Imported unchanged |
| Per-row development/held-out counts | ETAP Rev13 exact registry, preserved by ETAP Rev15 and Rev16 | Imported unchanged |
| Operational expected result/stage/reason/retryability/prohibited outcomes | ETAP Rev13 §12.1–§12.3, preserved by ETAP Rev15 and Rev16 | Imported unchanged and fully materialized |
| Contract Violation expected result/stage/count/prohibited outcomes | ETAP Rev13 §12.4, preserved by ETAP Rev15 and Rev16 | Imported unchanged and fully materialized |
| Six Contract Violation reason tokens | ETAP Rev13 §12.4 incorporation of historical ETAP Rev10 §12.2 | Imported unchanged; historical incorporated-source limitation disclosed in §3.3 |
| Per-subtype CRITICAL and floor 1.00 | ETAP Rev16 | Imported unchanged |
| Operation/RoomCase/ImageAsset/fixture/lineage identities | TDH Rev10 | Referenced, not redefined |
| Residential-34 vocabulary | Contract 1 | Referenced, not redefined |
| Confidence semantics | Contract 5 | Referenced, not redefined |
| Evidence/provenance semantics | Contract 4 | Referenced, not redefined |
| Semantic-case and multi-image population ownership | Contract 7 | Referenced, not redefined |
| Unseen-claim evaluation | Contract 8 | Excluded from Contract 9 ownership |

## 4.2 Contract-9-owned

- `c9.suite.*` identities;
- `c9.entry.*` document-local registry-row trace identities; they are not canonical fixture subtype identities and do not replace the fixed subtype tokens;
- Contract-9 canonical subtype tokens for the six fixed Contract Violation semantic rows where the controlling source exposes names/reasons but not a stable uppercase token;
- `c9.retryability.*` semantic classification identities that preserve, rather than alter, the fixed retryability meanings; their future field/serialization representation remains reserved for Contract 10;
- `c9.prohibited.*` materialized prohibited-set identities;
- lifecycle, comparison, rule, validation, failure, escalation and localization identities;
- registry integrity and traceability.

## 4.3 Reserved boundaries

`Contract 10` owns concrete field presence, final property names, serialization, cardinality/range validation and conformance representation. `Contract 11` owns aggregation, score-stability and support-floor aggregation. Neither contract is opened here.


# 5. Runtime, Domain and Residential-34 Boundary

```text
Operation
→ RoomCase[exactly 1]
→ ImageAsset[1..6]
→ one consolidated PerceptionResult
```

In scope: one materially unchanged residential room; one-image and same-room multi-image RoomCases; same-room validation, cross-view matching, deduplication without collapsing distinct entities, contradiction preservation, evidence fusion and per-image/RoomCase provenance.

Mixed-room input is a negative validation case. It is not a valid RoomCase and must not receive a fabricated `roomCaseId`. It is governed by Bounded Scope Rev5, ADR-015 and TDH Rev10 identity rules; it does not create an additional Contract 9 subtype or count.

Excluded: commercial property, real-user photographs, real-user data, whole-home graphs, floor plans, video, panorama, 2.5D/3D, cross-session fusion and multiple valid rooms in one Operation.

Authorized future fixture source classes: `LICENSED`, `SYNTHETIC`, `STAGED` only.

Residential-34 remains 34 categories exactly. `kitchen_living_room` is one Named Composite Space Profile and not a 35th category. `primary_bedroom`, `guest_bedroom` and `children_room` remain specializations of `bedroom`. Category activation does not multiply fixture counts.


# 6. Test Fixture versus Contract-1 FixedElement Terminology

`fixture` in this contract means a controlled evaluation test case. It never means Contract 1 `FixedElement`, plumbing fixture, lighting fixture, built-in element or interior object.

```text
Contract 9 test-fixture namespace: c9.*
Contract 1 semantic namespace: c1.*
```

No `c1.*` identity may be reused as a Contract 9 fixture identity.


# 7. Contract-9 Semantic Model

## 7.1 Entity classes

- `FixtureSuite`: one of four closed suite identities.
- `FixtureRegistryEntry`: one Contract-9 row binding a fixed fixture subtype to all required semantics. Its `c9.entry.*` identity is a document-local trace key.
- `Fixture subtype token`: the canonical semantic fixture subtype identity imported from ETAP for the twelve operational rows or assigned by Contract 9 to the six fixed Contract Violation semantic rows. This token, not `c9.entry.*`, is the downstream subtype identity.
- `RetryabilityIdentity`: one closed Contract-9 identity preserving a fixed retryability meaning.
- `ProhibitedOutcomeSet`: one materialized prohibited set per entry.
- `FixtureInstance`: future separately authorized controlled test case; not created here.
- `FixtureExecution`: future Operation using a fixture instance; not performed here.
- `FixtureComparison`: future expected-versus-observed comparison; semantic outcomes are defined here, execution is not.

## 7.2 Closed entry index

| Entry ID | Fixture subtype token | Suite | EN label | RU label | Dev | HO | Expected | Stage | Reason | Retryability | Prohibited set |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `c9.entry.001` | `F-PROVIDER-TIMEOUT` | `c9.suite.failure` | Provider Timeout | Тайм-аут провайдера | 2 | 3 | `FailureResult` | `provider` | `provider.timeout` | `c9.retryability.retryable-under-unchanged-locked-rule` | `c9.prohibited.001` |
| `c9.entry.002` | `F-PROVIDER-MALFORMED` | `c9.suite.failure` | Malformed Provider Response | Некорректный ответ провайдера | 2 | 3 | `FailureResult` | `C.1` | `provider.malformed_response` | `c9.retryability.mechanism-change-required` | `c9.prohibited.002` |
| `c9.entry.003` | `F-INPUT-UNREADABLE` | `c9.suite.failure` | Unreadable or Corrupt Input | Нечитаемые или повреждённые входные данные | 2 | 4 | `FailureResult` | `preprocessing` | `input.unreadable` | `c9.retryability.input-replacement-required` | `c9.prohibited.003` |
| `c9.entry.004` | `F-INPUT-UNSUPPORTED` | `c9.suite.failure` | Unsupported Encoding or Payload | Неподдерживаемая кодировка или структура данных | 2 | 3 | `FailureResult` | `preprocessing` | `input.unsupported` | `c9.retryability.input-replacement-required` | `c9.prohibited.004` |
| `c9.entry.005` | `C2-MISSING-ROOM-CANDIDATE` | `c9.suite.c2-operational-rejection` | Missing Room Candidate | Отсутствует кандидат Room | 1 | 2 | `RejectedResult` | `C.2` | `c2.room.missing_candidate` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.005` |
| `c9.entry.006` | `C2-DUPLICATE-NODE-ID` | `c9.suite.c2-operational-rejection` | Duplicate Node ID | Дублирующийся ID узла | 1 | 2 | `RejectedResult` | `C.2` | `c2.node.duplicate_id` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.006` |
| `c9.entry.007` | `C2-DANGLING-REL-ENDPOINT` | `c9.suite.c2-operational-rejection` | Dangling Relation Endpoint | Оборванная конечная точка связи | 1 | 2 | `RejectedResult` | `C.2` | `c2.relation.dangling_endpoint` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.007` |
| `c9.entry.008` | `C2-INVALID-CANDIDATE-GEOMETRY` | `c9.suite.c2-operational-rejection` | Invalid Candidate Geometry | Некорректная геометрия кандидата | 1 | 2 | `RejectedResult` | `C.2` | `c2.geometry.invalid` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.008` |
| `c9.entry.009` | `C3-SCHEMA-VERSION-MISMATCH` | `c9.suite.c3-general-rejection` | Schema-Version Mismatch | Несовпадение версии схемы | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.schema_version` | `c9.retryability.artifact-correction-required` | `c9.prohibited.009` |
| `c9.entry.010` | `C3-OPERATION-ID-MISMATCH` | `c9.suite.c3-general-rejection` | Operation-ID Mismatch | Несовпадение ID операции | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.operation_identity` | `c9.retryability.artifact-correction-required` | `c9.prohibited.010` |
| `c9.entry.011` | `C3-IMAGE-ID-MISMATCH` | `c9.suite.c3-general-rejection` | Image/Asset Identity Mismatch | Несовпадение ID изображения или актива | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.image_identity` | `c9.retryability.artifact-correction-required` | `c9.prohibited.011` |
| `c9.entry.012` | `C3-INVALID-RESULT-METADATA` | `c9.suite.c3-general-rejection` | Invalid Result Metadata | Некорректные метаданные результата | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.result_metadata` | `c9.retryability.artifact-correction-required` | `c9.prohibited.012` |
| `c9.entry.013` | `CV-MISSING-ROOM` | `c9.suite.contract-violation` | Missing Room | Отсутствует Room | 2 | 3 | `RejectedResult` | `C.3` | `c3.room.missing` | `c9.retryability.artifact-correction-required` | `c9.prohibited.013` |
| `c9.entry.014` | `CV-INVALID-ROOM-CARDINALITY` | `c9.suite.contract-violation` | Invalid Room Cardinality | Некорректная кратность Room | 2 | 3 | `RejectedResult` | `C.3` | `c3.room.invalid_cardinality` | `c9.retryability.artifact-correction-required` | `c9.prohibited.014` |
| `c9.entry.015` | `CV-MISSING-CONFIDENCE` | `c9.suite.contract-violation` | Missing Confidence | Отсутствует confidence | 2 | 3 | `RejectedResult` | `C.3` | `c3.confidence.missing` | `c9.retryability.artifact-correction-required` | `c9.prohibited.015` |
| `c9.entry.016` | `CV-INVALID-CONFIDENCE` | `c9.suite.contract-violation` | Invalid Confidence | Некорректный confidence | 2 | 3 | `RejectedResult` | `C.3` | `c3.confidence.invalid` | `c9.retryability.artifact-correction-required` | `c9.prohibited.016` |
| `c9.entry.017` | `CV-MISSING-PROVENANCE` | `c9.suite.contract-violation` | Missing Provenance | Отсутствует provenance | 2 | 3 | `RejectedResult` | `C.3` | `c3.provenance.missing` | `c9.retryability.artifact-correction-required` | `c9.prohibited.017` |
| `c9.entry.018` | `CV-INVALID-PROVENANCE` | `c9.suite.contract-violation` | Invalid Provenance | Некорректный provenance | 2 | 3 | `RejectedResult` | `C.3` | `c3.provenance.invalid` | `c9.retryability.artifact-correction-required` | `c9.prohibited.018` |

Exactly 18 entries are defined. Each belongs to exactly one suite.


# 8. Fixture Suite Registry

| Suite ID | ETAP metric | EN | RU | Entries | Dev | HO | Expected family | Stage |
|---|---|---|---|---|---|---|---|---|
| `c9.suite.failure` | `FIX-FAIL` | Failure fixtures | Fixture-испытания отказа | 4 | 8 | 13 | `FailureResult` | `provider` / `C.1` / `preprocessing` |
| `c9.suite.c2-operational-rejection` | `FIX-C2` | C.2 operational-rejection fixtures | Fixture-испытания отклонения C.2 | 4 | 4 | 8 | `RejectedResult` | C.2 |
| `c9.suite.c3-general-rejection` | `FIX-C3` | C.3 general-rejection fixtures | Fixture-испытания общего отклонения C.3 | 4 | 4 | 8 | `RejectedResult` | C.3 |
| `c9.suite.contract-violation` | `CVF-C3` | Contract Violation fixtures | Fixture-испытания нарушения контракта | 6 | 12 | 18 | `RejectedResult` | C.3 |

```text
Failure: 4 entries / 8 development / 13 held-out
C.2: 4 entries / 4 development / 8 held-out
C.3: 4 entries / 4 development / 8 held-out
Operational subtotal: 12 entries / 16 development / 29 held-out
Contract Violation: 6 entries / 12 development / 18 held-out
Grand total: 18 entries / 28 development / 47 held-out
```

All entries are `CRITICAL`; every per-subtype floor is `1.00`; suites are disjoint.


# 9. Failure Fixture Subtype Registry

These four rows are fixed. No preprocessing-failure, provider-auth-error or provider-rate-limit subtype is added. Those may be operational failure causes in broader architecture prose, but they are not members of the fixed Contract 9 fixture registry.

| Entry | Subtype token | EN | RU | Trigger predicate EN | Trigger predicate RU | Dev | HO | Expected | Stage | Reason | Retryability | Prohibited set |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `c9.entry.001` | `F-PROVIDER-TIMEOUT` | Provider Timeout | Тайм-аут провайдера | The provider invocation does not return within the accepted bounded time window. | Вызов провайдера не возвращает результат в пределах принятого ограниченного временного окна. | 2 | 3 | `FailureResult` | `provider` | `provider.timeout` | `c9.retryability.retryable-under-unchanged-locked-rule` | `c9.prohibited.001` |
| `c9.entry.002` | `F-PROVIDER-MALFORMED` | Malformed Provider Response | Некорректный ответ провайдера | The C.1 adapter receives a provider response that cannot be parsed as a valid mechanism response. | Адаптер C.1 получает ответ провайдера, который невозможно разобрать как корректный ответ механизма. | 2 | 3 | `FailureResult` | `C.1` | `provider.malformed_response` | `c9.retryability.mechanism-change-required` | `c9.prohibited.002` |
| `c9.entry.003` | `F-INPUT-UNREADABLE` | Unreadable or Corrupt Input | Нечитаемые или повреждённые входные данные | Preprocessing cannot decode the supplied input artifact because it is unreadable or corrupt. | Предварительная обработка не может декодировать входной артефакт, поскольку он нечитаем или повреждён. | 2 | 4 | `FailureResult` | `preprocessing` | `input.unreadable` | `c9.retryability.input-replacement-required` | `c9.prohibited.003` |
| `c9.entry.004` | `F-INPUT-UNSUPPORTED` | Unsupported Encoding or Payload | Неподдерживаемая кодировка или структура данных | Preprocessing decodes the artifact envelope but the encoding or payload type is unsupported. | Предварительная обработка декодирует оболочку артефакта, но кодировка или тип полезной нагрузки не поддерживается. | 2 | 3 | `FailureResult` | `preprocessing` | `input.unsupported` | `c9.retryability.input-replacement-required` | `c9.prohibited.004` |


# 10. C.2 Operational-Rejection Fixture Subtype Registry

These four rows are fixed. Same-room multi-image contradiction handling and mixed-room rejection remain governed by Bounded Scope Rev5, ADR-015, TDH Rev10 and the applicable ETAP/Contract 7 population boundaries; they do not create a fifth C.2 fixture subtype.

| Entry | Subtype token | EN | RU | Trigger predicate EN | Trigger predicate RU | Dev | HO | Expected | Stage | Reason | Retryability | Prohibited set |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `c9.entry.005` | `C2-MISSING-ROOM-CANDIDATE` | Missing Room Candidate | Отсутствует кандидат Room | The C.1 candidate contains no Room candidate required for C.2 normalization. | Кандидат C.1 не содержит кандидата Room, обязательного для нормализации C.2. | 1 | 2 | `RejectedResult` | `C.2` | `c2.room.missing_candidate` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.005` |
| `c9.entry.006` | `C2-DUPLICATE-NODE-ID` | Duplicate Node ID | Дублирующийся ID узла | Two or more candidate nodes carry the same node identity. | Два или более узла-кандидата имеют один и тот же идентификатор узла. | 1 | 2 | `RejectedResult` | `C.2` | `c2.node.duplicate_id` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.006` |
| `c9.entry.007` | `C2-DANGLING-REL-ENDPOINT` | Dangling Relation Endpoint | Оборванная конечная точка связи | A candidate relation references a node identity absent from the candidate. | Связь-кандидат ссылается на идентификатор узла, отсутствующий в кандидате. | 1 | 2 | `RejectedResult` | `C.2` | `c2.relation.dangling_endpoint` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.007` |
| `c9.entry.008` | `C2-INVALID-CANDIDATE-GEOMETRY` | Invalid Candidate Geometry | Некорректная геометрия кандидата | Candidate geometry is structurally invalid under the accepted C.2 conformance boundary. | Геометрия кандидата структурно недопустима в принятой границе соответствия C.2. | 1 | 2 | `RejectedResult` | `C.2` | `c2.geometry.invalid` | `c9.retryability.artifact-or-mechanism-correction-required` | `c9.prohibited.008` |


# 11. C.3 General-Rejection Fixture Subtype Registry

These four rows are fixed. TDH Rev10 updates semantic interpretation of image/asset identity to RoomCase/ImageAsset[1..6], but does not change the fixed subtype count or the reason token `c3.general.image_identity`.

| Entry | Subtype token | EN | RU | Trigger predicate EN | Trigger predicate RU | Dev | HO | Expected | Stage | Reason | Retryability | Prohibited set |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `c9.entry.009` | `C3-SCHEMA-VERSION-MISMATCH` | Schema-Version Mismatch | Несовпадение версии схемы | The final boundary declares a schema version that is absent from or unequal to the accepted schema-version identity for the governed operation; operation and image/asset identities are evaluated by separate entries. | Финальная граница объявляет отсутствующую или не совпадающую с принятой версию схемы для управляемой операции; identity операции и изображения/актива проверяются отдельными записями. | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.schema_version` | `c9.retryability.artifact-correction-required` | `c9.prohibited.009` |
| `c9.entry.010` | `C3-OPERATION-ID-MISMATCH` | Operation-ID Mismatch | Несовпадение ID операции | The result `operationId` is absent or does not equal the executing Operation identity; schema-version and image/asset/input-set identities are evaluated by separate entries. | `operationId` результата отсутствует или не совпадает с identity выполняемой Operation; версия схемы и identities изображения/актива/input-set проверяются отдельными записями. | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.operation_identity` | `c9.retryability.artifact-correction-required` | `c9.prohibited.010` |
| `c9.entry.011` | `C3-IMAGE-ID-MISMATCH` | Image/Asset Identity Mismatch | Несовпадение ID изображения или актива | At least one applicable TDH-owned image/asset/input-set binding (`roomCaseId`, `inputSetId`, `sourceAssetId`, `imageAssetId` or contributing-image identity set) is absent, fabricated, contains an unexpected member or does not match the governed input; `operationId` is excluded and evaluated by `C3-OPERATION-ID-MISMATCH`. | Хотя бы одна применимая TDH-связка изображения/актива/input-set (`roomCaseId`, `inputSetId`, `sourceAssetId`, `imageAssetId` или набор contributing-image identities) отсутствует, сфабрикована, содержит неожиданный элемент либо не совпадает с управляемым входом; `operationId` исключён и проверяется записью `C3-OPERATION-ID-MISMATCH`. | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.image_identity` | `c9.retryability.artifact-correction-required` | `c9.prohibited.011` |
| `c9.entry.012` | `C3-INVALID-RESULT-METADATA` | Invalid Result Metadata | Некорректные метаданные результата | Required non-identity final-result metadata is missing or structurally invalid after excluding schema version, Operation identity, image/asset/input-set identity, Room cardinality, confidence and provenance, each of which has its own fixed primary subtype. | Обязательные неидентификационные метаданные финального результата отсутствуют или структурно недопустимы после исключения версии схемы, identity Operation, identities изображения/актива/input-set, кардинальности Room, confidence и provenance, для каждого из которых существует отдельный primary subtype. | 1 | 2 | `RejectedResult` | `C.3` | `c3.general.result_metadata` | `c9.retryability.artifact-correction-required` | `c9.prohibited.012` |


# 12. Contract Violation Fixture Subtype Registry

These six semantic subtypes, counts and reason tokens are fixed. Contract 9 assigns uppercase canonical fixtureSubtypeToken values only to provide stable registry tokens; it does not change the six fixed semantic rows.

| Entry | Subtype token | EN | RU | Trigger predicate EN | Trigger predicate RU | Dev | HO | Expected | Stage | Reason | Retryability | Prohibited set |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `c9.entry.013` | `CV-MISSING-ROOM` | Missing Room | Отсутствует Room | A post-C.2 artifact subject to C.3 conformance contains zero Room nodes where exactly one is required. | Артефакт после C.2, подлежащий проверке соответствия C.3, содержит ноль узлов Room при требовании ровно одного. | 2 | 3 | `RejectedResult` | `C.3` | `c3.room.missing` | `c9.retryability.artifact-correction-required` | `c9.prohibited.013` |
| `c9.entry.014` | `CV-INVALID-ROOM-CARDINALITY` | Invalid Room Cardinality | Некорректная кратность Room | A post-C.2 artifact contains two or more Room nodes. Zero Room nodes are exclusively `CV-MISSING-ROOM` and cannot be classified here. | Артефакт после C.2 содержит два или более узла Room. Ноль узлов Room относится исключительно к `CV-MISSING-ROOM` и не может классифицироваться здесь. | 2 | 3 | `RejectedResult` | `C.3` | `c3.room.invalid_cardinality` | `c9.retryability.artifact-correction-required` | `c9.prohibited.014` |
| `c9.entry.015` | `CV-MISSING-CONFIDENCE` | Missing Confidence | Отсутствует confidence | A confidence value required by Contract 5 is absent. A present but invalid value is exclusively `CV-INVALID-CONFIDENCE`. | Обязательное по Contract 5 значение confidence отсутствует. Присутствующее, но недопустимое значение относится исключительно к `CV-INVALID-CONFIDENCE`. | 2 | 3 | `RejectedResult` | `C.3` | `c3.confidence.missing` | `c9.retryability.artifact-correction-required` | `c9.prohibited.015` |
| `c9.entry.016` | `CV-INVALID-CONFIDENCE` | Invalid Confidence | Некорректный confidence | A required confidence value is present but violates the accepted Contract 5 ordinal vocabulary or semantic constraints. Absence is exclusively `CV-MISSING-CONFIDENCE`. | Обязательное значение confidence присутствует, но нарушает принятую порядковую лексику или семантические ограничения Contract 5. Отсутствие относится исключительно к `CV-MISSING-CONFIDENCE`. | 2 | 3 | `RejectedResult` | `C.3` | `c3.confidence.invalid` | `c9.retryability.artifact-correction-required` | `c9.prohibited.016` |
| `c9.entry.017` | `CV-MISSING-PROVENANCE` | Missing Provenance | Отсутствует provenance | A provenance value required by Contract 4 is absent. A present but invalid value is exclusively `CV-INVALID-PROVENANCE`. | Обязательное по Contract 4 значение provenance отсутствует. Присутствующее, но недопустимое значение относится исключительно к `CV-INVALID-PROVENANCE`. | 2 | 3 | `RejectedResult` | `C.3` | `c3.provenance.missing` | `c9.retryability.artifact-correction-required` | `c9.prohibited.017` |
| `c9.entry.018` | `CV-INVALID-PROVENANCE` | Invalid Provenance | Некорректный provenance | A required provenance value is present but violates the accepted Contract 4 provenance/evidence semantics. Absence is exclusively `CV-MISSING-PROVENANCE`. | Обязательное значение provenance присутствует, но нарушает принятые семантики provenance/evidence Contract 4. Отсутствие относится исключительно к `CV-MISSING-PROVENANCE`. | 2 | 3 | `RejectedResult` | `C.3` | `c3.provenance.invalid` | `c9.retryability.artifact-correction-required` | `c9.prohibited.018` |

Primary trigger ownership is deterministic. Within C.3, entries 009–012 partition schema version, `operationId`, image/asset/input-set binding and residual non-identity result metadata. Within Contract Violation, each missing/invalid pair is mutually exclusive. A future fixture instance must be constructed so exactly one primary subtype predicate is true. An observation may be secondary evidence only when it does not satisfy another subtype predicate; otherwise the fixture is ambiguous, invalid for sealing and must be corrected or replaced.


# 13. Development and Held-Out Count Architecture

| Entry | Subtype | Dev | HO | Criticality | Floor | Counting unit |
|---|---|---|---|---|---|---|
| `c9.entry.001` | `F-PROVIDER-TIMEOUT` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.002` | `F-PROVIDER-MALFORMED` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.003` | `F-INPUT-UNREADABLE` | 2 | 4 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.004` | `F-INPUT-UNSUPPORTED` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.005` | `C2-MISSING-ROOM-CANDIDATE` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.006` | `C2-DUPLICATE-NODE-ID` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.007` | `C2-DANGLING-REL-ENDPOINT` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.008` | `C2-INVALID-CANDIDATE-GEOMETRY` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.009` | `C3-SCHEMA-VERSION-MISMATCH` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.010` | `C3-OPERATION-ID-MISMATCH` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.011` | `C3-IMAGE-ID-MISMATCH` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.012` | `C3-INVALID-RESULT-METADATA` | 1 | 2 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.013` | `CV-MISSING-ROOM` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.014` | `CV-INVALID-ROOM-CARDINALITY` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.015` | `CV-MISSING-CONFIDENCE` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.016` | `CV-INVALID-CONFIDENCE` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.017` | `CV-MISSING-PROVENANCE` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |
| `c9.entry.018` | `CV-INVALID-PROVENANCE` | 2 | 3 | CRITICAL | 1.00 | one fixture instance per count |

Development and held-out subsets are disjoint. A fixture instance cannot contribute to two entries, two suites or both subsets. One RoomCase-backed fixture instance counts once regardless of whether it contains one or six ImageAssets. Duplicate content hashes inside one entry/subset are prohibited. A replacement is a distinct governed fixture instance for counting and traceability purposes; exact `operationId`, `fixtureId`, `fixtureLineageId`, `lineageId` and source-identity disposition remain controlled by TDH Rev10 and future separately authorized fixture-preparation/execution rules. The minimum count must remain satisfied.


# 14. Expected Result and Stage Architecture

| Entry | Expected result | Expected stage | Expected reason | Pass requirement |
|---|---|---|---|---|
| `c9.entry.001` | `FailureResult` | `provider` | `provider.timeout` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.002` | `FailureResult` | `C.1` | `provider.malformed_response` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.003` | `FailureResult` | `preprocessing` | `input.unreadable` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.004` | `FailureResult` | `preprocessing` | `input.unsupported` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.005` | `RejectedResult` | `C.2` | `c2.room.missing_candidate` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.006` | `RejectedResult` | `C.2` | `c2.node.duplicate_id` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.007` | `RejectedResult` | `C.2` | `c2.relation.dangling_endpoint` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.008` | `RejectedResult` | `C.2` | `c2.geometry.invalid` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.009` | `RejectedResult` | `C.3` | `c3.general.schema_version` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.010` | `RejectedResult` | `C.3` | `c3.general.operation_identity` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.011` | `RejectedResult` | `C.3` | `c3.general.image_identity` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.012` | `RejectedResult` | `C.3` | `c3.general.result_metadata` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.013` | `RejectedResult` | `C.3` | `c3.room.missing` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.014` | `RejectedResult` | `C.3` | `c3.room.invalid_cardinality` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.015` | `RejectedResult` | `C.3` | `c3.confidence.missing` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.016` | `RejectedResult` | `C.3` | `c3.confidence.invalid` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.017` | `RejectedResult` | `C.3` | `c3.provenance.missing` | exact four-part match: result + stage + reason + retryability |
| `c9.entry.018` | `RejectedResult` | `C.3` | `c3.provenance.invalid` | exact four-part match: result + stage + reason + retryability |

No `PARTIAL PASS`, `Not Scorable`, warning-only success, equivalent-result substitution or unresolved final comparison state is permitted. A correct family at the wrong stage fails. A correct stage with a wrong reason fails. A correct reason on a prohibited result family fails.


# 15. Reason-Code Registry

| Reason token | Owning entry | Stage | EN fixture meaning | RU fixture meaning | Classification |
|---|---|---|---|---|---|
| `provider.timeout` | `c9.entry.001` | `provider` | Provider Timeout | Тайм-аут провайдера | Imported fixed token |
| `provider.malformed_response` | `c9.entry.002` | `C.1` | Malformed Provider Response | Некорректный ответ провайдера | Imported fixed token |
| `input.unreadable` | `c9.entry.003` | `preprocessing` | Unreadable or Corrupt Input | Нечитаемые или повреждённые входные данные | Imported fixed token |
| `input.unsupported` | `c9.entry.004` | `preprocessing` | Unsupported Encoding or Payload | Неподдерживаемая кодировка или структура данных | Imported fixed token |
| `c2.room.missing_candidate` | `c9.entry.005` | `C.2` | Missing Room Candidate | Отсутствует кандидат Room | Imported fixed token |
| `c2.node.duplicate_id` | `c9.entry.006` | `C.2` | Duplicate Node ID | Дублирующийся ID узла | Imported fixed token |
| `c2.relation.dangling_endpoint` | `c9.entry.007` | `C.2` | Dangling Relation Endpoint | Оборванная конечная точка связи | Imported fixed token |
| `c2.geometry.invalid` | `c9.entry.008` | `C.2` | Invalid Candidate Geometry | Некорректная геометрия кандидата | Imported fixed token |
| `c3.general.schema_version` | `c9.entry.009` | `C.3` | Schema-Version Mismatch | Несовпадение версии схемы | Imported fixed token |
| `c3.general.operation_identity` | `c9.entry.010` | `C.3` | Operation-ID Mismatch | Несовпадение ID операции | Imported fixed token |
| `c3.general.image_identity` | `c9.entry.011` | `C.3` | Image/Asset Identity Mismatch | Несовпадение ID изображения или актива | Imported fixed token |
| `c3.general.result_metadata` | `c9.entry.012` | `C.3` | Invalid Result Metadata | Некорректные метаданные результата | Imported fixed token |
| `c3.room.missing` | `c9.entry.013` | `C.3` | Missing Room | Отсутствует Room | Imported fixed token |
| `c3.room.invalid_cardinality` | `c9.entry.014` | `C.3` | Invalid Room Cardinality | Некорректная кратность Room | Imported fixed token |
| `c3.confidence.missing` | `c9.entry.015` | `C.3` | Missing Confidence | Отсутствует confidence | Imported fixed token |
| `c3.confidence.invalid` | `c9.entry.016` | `C.3` | Invalid Confidence | Некорректный confidence | Imported fixed token |
| `c3.provenance.missing` | `c9.entry.017` | `C.3` | Missing Provenance | Отсутствует provenance | Imported fixed token |
| `c3.provenance.invalid` | `c9.entry.018` | `C.3` | Invalid Provenance | Некорректный provenance | Imported fixed token |

The reason tokens are imported exactly. Contract 9 does not prepend `c9.reason.*`, normalize punctuation, merge tokens or create aliases. Final representation of a reason value belongs to Contract 10.


# 16. Retryability Registry

| Retryability ID | EN | RU | Normative meaning EN | Normative meaning RU | Assigned entries |
|---|---|---|---|---|---|
| `c9.retryability.retryable-under-unchanged-locked-rule` | Retryable under unchanged locked retry rule | Повтор разрешён по неизменённому зафиксированному правилу | The failure condition is retryable under the unchanged locked retry rule; every executed attempt must be separately traceable under TDH and execution governance. Contract 9 does not decide `operationId` reuse/replacement or TDH-owned fixture, source or lineage identity disposition. | Условие отказа допускает повтор по неизменённому зафиксированному правилу; каждая выполненная попытка должна иметь отдельную трассировку согласно TDH и governance выполнения. Contract 9 не решает вопрос повторного использования или замены `operationId`, fixture-, source- или lineage-identities. | `c9.entry.001` |
| `c9.retryability.mechanism-change-required` | Not retryable without mechanism change | Повтор невозможен без изменения механизма | The same triggering condition must not be expected to pass until the mechanism/adapter is corrected and the applicable version/configuration evidence changes. Fixture and lineage identity disposition remains TDH-owned. | Нельзя ожидать успешного прохождения того же trigger-условия, пока механизм/адаптер не исправлен и не изменены применимые evidence версии/конфигурации. Распоряжение fixture- и lineage-identities остаётся у TDH. | `c9.entry.002` |
| `c9.retryability.input-replacement-required` | Input replacement required | Требуется замена входного артефакта | The same input artifact is not a valid remediation target; an eligible replacement must be separately governed and traceable under TDH Rev10. Contract 9 does not prescribe the replacement identifier lifecycle. | Тот же входной артефакт не является допустимой целью remediation; допустимая замена должна отдельно управляться и трассироваться по TDH Rev10. Contract 9 не определяет lifecycle идентификаторов замены. | `c9.entry.003`; `c9.entry.004` |
| `c9.retryability.artifact-or-mechanism-correction-required` | Artifact or mechanism correction required | Требуется исправление артефакта или механизма | A deterministic C.2 rejection remains correct until the malformed candidate artifact or producing mechanism is corrected. | Детерминированное отклонение C.2 остаётся корректным, пока не исправлен некорректный артефакт-кандидат или производящий механизм. | `c9.entry.005`; `c9.entry.006`; `c9.entry.007`; `c9.entry.008` |
| `c9.retryability.artifact-correction-required` | Artifact correction required | Требуется исправление артефакта | A deterministic C.3 rejection remains correct until the evaluated artifact/envelope is corrected. | Детерминированное отклонение C.3 остаётся корректным, пока не исправлен проверяемый артефакт или envelope. | `c9.entry.009`; `c9.entry.010`; `c9.entry.011`; `c9.entry.012`; `c9.entry.013`; `c9.entry.014`; `c9.entry.015`; `c9.entry.016`; `c9.entry.017`; `c9.entry.018` |

Retryability does not authorize provider activity and does not define a runtime field. It is a semantic evaluation classification. Every executed attempt must be separately traceable, but whether `operationId`, `fixtureId`, `fixtureLineageId`, source identity or other TDH-owned identities are reused or replaced is determined by TDH Rev10 and future separately authorized fixture-preparation/execution rules, never by Contract 9.


# 17. Prohibited Outcome Architecture

| Prohibited set ID | Entry | EN label | RU label | Complete prohibited outcomes EN | Complete prohibited outcomes RU |
|---|---|---|---|---|---|
| `c9.prohibited.001` | `c9.entry.001` | Prohibited outcomes for F-PROVIDER-TIMEOUT | Запрещённые исходы для F-PROVIDER-TIMEOUT | SceneResult; InsufficientEvidenceResult; RejectedResult at any stage; FailureResult with any stage/reason other than the required combination. | SceneResult; InsufficientEvidenceResult; RejectedResult на любом этапе; FailureResult с любой комбинацией этапа/причины, кроме требуемой. |
| `c9.prohibited.002` | `c9.entry.002` | Prohibited outcomes for F-PROVIDER-MALFORMED | Запрещённые исходы для F-PROVIDER-MALFORMED | SceneResult; InsufficientEvidenceResult; RejectedResult at any stage; FailureResult with any stage/reason other than the required combination. | SceneResult; InsufficientEvidenceResult; RejectedResult на любом этапе; FailureResult с любой комбинацией этапа/причины, кроме требуемой. |
| `c9.prohibited.003` | `c9.entry.003` | Prohibited outcomes for F-INPUT-UNREADABLE | Запрещённые исходы для F-INPUT-UNREADABLE | Every primary result other than FailureResult at preprocessing with reason input.unreadable. | Любой первичный результат, кроме FailureResult на этапе preprocessing с причиной input.unreadable. |
| `c9.prohibited.004` | `c9.entry.004` | Prohibited outcomes for F-INPUT-UNSUPPORTED | Запрещённые исходы для F-INPUT-UNSUPPORTED | Every primary result other than FailureResult at preprocessing with reason input.unsupported. | Любой первичный результат, кроме FailureResult на этапе preprocessing с причиной input.unsupported. |
| `c9.prohibited.005` | `c9.entry.005` | Prohibited outcomes for C2-MISSING-ROOM-CANDIDATE | Запрещённые исходы для C2-MISSING-ROOM-CANDIDATE | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.3; RejectedResult at C.2 with a reason other than c2.room.missing_candidate. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.3; RejectedResult на C.2 с причиной, отличной от c2.room.missing_candidate. |
| `c9.prohibited.006` | `c9.entry.006` | Prohibited outcomes for C2-DUPLICATE-NODE-ID | Запрещённые исходы для C2-DUPLICATE-NODE-ID | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.3; RejectedResult at C.2 with a reason other than c2.node.duplicate_id. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.3; RejectedResult на C.2 с причиной, отличной от c2.node.duplicate_id. |
| `c9.prohibited.007` | `c9.entry.007` | Prohibited outcomes for C2-DANGLING-REL-ENDPOINT | Запрещённые исходы для C2-DANGLING-REL-ENDPOINT | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.3; RejectedResult at C.2 with a reason other than c2.relation.dangling_endpoint. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.3; RejectedResult на C.2 с причиной, отличной от c2.relation.dangling_endpoint. |
| `c9.prohibited.008` | `c9.entry.008` | Prohibited outcomes for C2-INVALID-CANDIDATE-GEOMETRY | Запрещённые исходы для C2-INVALID-CANDIDATE-GEOMETRY | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.3; RejectedResult at C.2 with a reason other than c2.geometry.invalid. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.3; RejectedResult на C.2 с причиной, отличной от c2.geometry.invalid. |
| `c9.prohibited.009` | `c9.entry.009` | Prohibited outcomes for C3-SCHEMA-VERSION-MISMATCH | Запрещённые исходы для C3-SCHEMA-VERSION-MISMATCH | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.general.schema_version. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.general.schema_version. |
| `c9.prohibited.010` | `c9.entry.010` | Prohibited outcomes for C3-OPERATION-ID-MISMATCH | Запрещённые исходы для C3-OPERATION-ID-MISMATCH | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.general.operation_identity. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.general.operation_identity. |
| `c9.prohibited.011` | `c9.entry.011` | Prohibited outcomes for C3-IMAGE-ID-MISMATCH | Запрещённые исходы для C3-IMAGE-ID-MISMATCH | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.general.image_identity; fabricated replacement identity. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.general.image_identity; сфабрикованный заменяющий идентификатор. |
| `c9.prohibited.012` | `c9.entry.012` | Prohibited outcomes for C3-INVALID-RESULT-METADATA | Запрещённые исходы для C3-INVALID-RESULT-METADATA | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.general.result_metadata. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.general.result_metadata. |
| `c9.prohibited.013` | `c9.entry.013` | Prohibited outcomes for CV-MISSING-ROOM | Запрещённые исходы для CV-MISSING-ROOM | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.room.missing; fabricated Room insertion. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.room.missing; сфабрикованная вставка Room. |
| `c9.prohibited.014` | `c9.entry.014` | Prohibited outcomes for CV-INVALID-ROOM-CARDINALITY | Запрещённые исходы для CV-INVALID-ROOM-CARDINALITY | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.room.invalid_cardinality; silent Room collapse. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.room.invalid_cardinality; скрытое схлопывание Room. |
| `c9.prohibited.015` | `c9.entry.015` | Prohibited outcomes for CV-MISSING-CONFIDENCE | Запрещённые исходы для CV-MISSING-CONFIDENCE | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.confidence.missing; fabricated default confidence. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.confidence.missing; сфабрикованное значение confidence по умолчанию. |
| `c9.prohibited.016` | `c9.entry.016` | Prohibited outcomes for CV-INVALID-CONFIDENCE | Запрещённые исходы для CV-INVALID-CONFIDENCE | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.confidence.invalid; silent coercion. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.confidence.invalid; скрытое приведение значения. |
| `c9.prohibited.017` | `c9.entry.017` | Prohibited outcomes for CV-MISSING-PROVENANCE | Запрещённые исходы для CV-MISSING-PROVENANCE | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.provenance.missing; fabricated provenance. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.provenance.missing; сфабрикованный provenance. |
| `c9.prohibited.018` | `c9.entry.018` | Prohibited outcomes for CV-INVALID-PROVENANCE | Запрещённые исходы для CV-INVALID-PROVENANCE | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult at C.2; RejectedResult at C.3 with a reason other than c3.provenance.invalid; silent coercion. | SceneResult; InsufficientEvidenceResult; FailureResult; RejectedResult на C.2; RejectedResult на C.3 с причиной, отличной от c3.provenance.invalid; скрытое приведение значения. |

Process-level comparison defects—missing result, multiple primary results, identity mismatch, double count and post-result mutation—are handled by Section 26 and are not substituted for the entry-level prohibited-outcome sets.


# 18. Fixture Identity and Lineage Compatibility

TDH Rev10 remains the owner of `operationId`, `inputArtifactId`, `roomCaseId`, `inputSetId`, `sourceAssetId`, `imageAssetId`, contributing-image identity sets, `fixtureId`, `fixtureLineageId`, `lineageId`, subset identity, producing stage, timestamp and content hash.

Every future Contract-9 fixture execution is fixture-governed and therefore carries `operationId`, `inputArtifactId`, `fixtureId` and `fixtureLineageId`. `subset`, `producingStage`, `timestamp` and `contentHash` are carried where required by the TDH common handling model. The table below adds the operation-form-specific identities; it does not weaken those common requirements.

| Fixture form | Additional required identity behavior |
|---|---|
| Valid one-image RoomCase | One valid `roomCaseId`; one atomic `imageAssetId` ↔ `sourceAssetId` pair; complete one-member contributing-image set; photographic `lineageId`; no fabricated identity |
| Valid same-room multi-image RoomCase | One valid `roomCaseId`; 1–6 distinct atomic `imageAssetId` ↔ `sourceAssetId` pairs; complete unique contributing-image set; applicable photographic `lineageId` values; no fabricated identity |
| Mixed-room negative input set | `inputSetId`; 2–6 atomic per-image identities and the complete contributing-input-image set; no valid `roomCaseId`; no fabricated identity |
| Non-image/preprocessing failure artifact | `inputArtifactId` remains the governed input identity; RoomCase/ImageAsset/photographic-lineage identities are absent unless genuinely applicable and are never fabricated |

Development and held-out instances never share one fixture lineage. Equal governed content within one entry/subset is duplicate support, not additional support. If equal content hashes are observed for unequal bytes, the collision is quarantined and adjudicated rather than silently counted as either duplicate or additional support.


# 19. One-Image, Multi-Image and Mixed-Room Eligibility

This section records input-form eligibility, not mandatory coverage. `ELIGIBLE` means a future separately authorized fixture may use that form when the fixed trigger can be constructed without changing its subtype semantics and without fabricating TDH-owned identities. It creates no separate quota, no new subtype and no multiplication of fixed counts.

| Entry family | One-image RoomCase | Same-room multi-image RoomCase | Mixed-room negative | Non-image artifact | Eligibility rule |
|---|---|---|---|---|---|
| `c9.entry.001`–`c9.entry.002` | ELIGIBLE | ELIGIBLE | EXCLUDED | EXCLUDED | Provider failure is input-form-neutral only inside a valid one-room Operation. |
| `c9.entry.003`–`c9.entry.004` | ELIGIBLE | ELIGIBLE for an atomic member or governed input envelope | EXCLUDED | CONDITIONALLY ELIGIBLE | Non-image eligibility exists only for the malformed/unsupported input artifact itself and must not fabricate RoomCase/ImageAsset identity. |
| `c9.entry.005`–`c9.entry.008` | ELIGIBLE | ELIGIBLE | EXCLUDED | EXCLUDED | C.2 candidate rejection requires a valid one-room Operation context; image count does not change the subtype. |
| `c9.entry.009`–`c9.entry.012` | ELIGIBLE | ELIGIBLE | EXCLUDED | EXCLUDED IN THE CURRENT RUNTIME | C.3 general rejection is evaluated on a governed Operation/RoomCase result boundary; this contract does not open a separate non-image runtime path. |
| `c9.entry.013`–`c9.entry.018` | ELIGIBLE | ELIGIBLE | EXCLUDED | EXCLUDED | Contract Violation fixtures apply to a governed post-C.2/C.3 artifact for one valid RoomCase. |

Mixed-room rejection remains a separate negative validation area under Bounded Scope Rev5, ADR-015 and TDH Rev10. It is not represented by an invented Contract 9 subtype and does not consume the fixed 16/29 operational budget. A future corpus plan may distribute eligible fixture forms only under separate authorization; Contract 9 sets no per-form minimum.

# 20. Residential-34 and Active Vocabulary Compatibility

No Contract 9 entry is category-specific. A future fixture instance may use only an active Contract 1 Residential-34 identity when category context is needed. Dormant Master Vocabulary values, commercial categories and a 34-times count multiplier are prohibited.

The four Owner-confirmed forms remain unchanged: `kitchen_living_room` is a Named Composite Space Profile; `primary_bedroom`, `guest_bedroom` and `children_room` are specializations of `bedroom`.


# 21. Contract-5 Confidence Compatibility

`CV-MISSING-CONFIDENCE` and `CV-INVALID-CONFIDENCE` test compliance with Contract 5. They do not redefine confidence states, sources, transformations or ordinal semantics. `c3.confidence.invalid` means the observed value is outside the accepted Contract 5 vocabulary or violates its semantic constraints. Contract 9 does not introduce probabilistic confidence, ECE or Brier behavior.


# 22. Contract-8 Compatibility Boundary

Contract 8 owns unseen-claim vocabulary, expectations, produced claim records and claim-level comparison. Contract 9 contains no unseen-claim subtype, no `UnseenClaimRecord`, no claim score and no claim lifecycle. Contract 9 fixture outcomes may be consumed separately by ETAP; they do not replace Contract 8 facts.


# 23. Evaluation Metric and Threshold Boundary

The only ETAP metric IDs directly associated with this registry are `FIX-FAIL`, `FIX-C2`, `FIX-C3` and `CVF-C3`. ETAP Rev16 exclusively owns metric class, threshold, denominator, zero-denominator handling, confidence interval/statistical behavior and blocking/diagnostic classification.

Contract 9 emits no aggregate score. It defines only the sealed fixture-level expected facts and deterministic comparison outcome required by those metrics.


# 24. Fixture Registry versus Fixture Instance Boundary

```text
FixtureRegistryEntry: defined here.
FixtureInstance: future separately authorized data artifact.
FixtureExecution: future separately authorized Operation.
FixtureObservedResult: future produced result.
FixtureComparison: future deterministic comparison under Section 26.
FixtureAggregate: future Contract 11 concern.
```

This contract creates no fixture instance, image, malformed payload, corpus record, annotation, held-out subset or evaluation run.


# 25. Registry Lifecycle, Immutability and Supersession

| Lifecycle ID | EN | RU |
|---|---|---|
| `c9.lifecycle.draft` | Draft | Черновик |
| `c9.lifecycle.internally-reviewed` | Internally reviewed | Внутренне проверен |
| `c9.lifecycle.correction-cycle-draft` | Correction-cycle draft | Черновик цикла исправлений |
| `c9.lifecycle.ready-for-independent-review` | Ready for independent review | Готов к независимой проверке |
| `c9.lifecycle.review-failed` | Review failed | Проверка не пройдена |
| `c9.lifecycle.technically-review-closed` | Technically review-closed | Техническая проверка закрыта |
| `c9.lifecycle.owner-accepted` | Owner-accepted | Принят Project Owner |
| `c9.lifecycle.candidate-locked` | Candidate-locked | Зафиксирован Candidate Lock |
| `c9.lifecycle.repository-persisted` | Repository-persisted | Сохранён в репозитории |
| `c9.lifecycle.closure-complete` | Closure-complete | Закрытие завершено |
| `c9.lifecycle.superseded` | Superseded | Заменён преемником |
| `c9.lifecycle.invalidated` | Invalidated | Признан недействительным |

## 25.1 Valid transition matrix

| From | To | Required condition / authority EN | Required condition / authority RU |
|---|---|---|---|
| `c9.lifecycle.draft` | `c9.lifecycle.internally-reviewed` | Full internal semantic and mechanical review completed. | Полная внутренняя семантическая и механическая проверка завершена. |
| `c9.lifecycle.internally-reviewed` | `c9.lifecycle.ready-for-independent-review` | No known internal BLOCKER/MAJOR/MINOR remains and exact byte identity is fixed. | Известных внутренних BLOCKER/MAJOR/MINOR не осталось; exact byte identity зафиксирована. |
| `c9.lifecycle.internally-reviewed` | `c9.lifecycle.correction-cycle-draft` | Internal findings require correction within the still-open drafting authorization. | Внутренние находки требуют исправления в пределах открытой drafting-авторизации. |
| `c9.lifecycle.correction-cycle-draft` | `c9.lifecycle.internally-reviewed` | Correction scope applied and the complete internal review rerun. | Исправления внесены; полный внутренний review повторён. |
| `c9.lifecycle.ready-for-independent-review` | `c9.lifecycle.review-failed` | Valid independent review reports at least one BLOCKER, MAJOR or MINOR. | Валидный независимый review выявил хотя бы один BLOCKER, MAJOR или MINOR. |
| `c9.lifecycle.review-failed` | `c9.lifecycle.correction-cycle-draft` | Correction is explicitly authorized, or remains within the existing open pre-acceptance drafting authorization. | Исправление явно авторизовано либо остаётся в пределах существующей pre-acceptance drafting-авторизации. |
| `c9.lifecycle.ready-for-independent-review` | `c9.lifecycle.technically-review-closed` | Valid independent review returns 0 BLOCKER / 0 MAJOR / 0 MINOR. | Валидный независимый review вернул 0 BLOCKER / 0 MAJOR / 0 MINOR. |
| `c9.lifecycle.internally-reviewed` | `c9.lifecycle.technically-review-closed` | An explicit Project Owner reviewer-availability exception authorizes a disclosed full non-independent adversarial technical review of the exact byte identity; every mandatory pass completes and 0 BLOCKER / 0 MAJOR / 0 MINOR remain. | Явное Project Owner reviewer-availability exception авторизует раскрытый полный non-independent adversarial technical review exact byte identity; все обязательные passes завершены и остаётся 0 BLOCKER / 0 MAJOR / 0 MINOR. |
| `c9.lifecycle.technically-review-closed` | `c9.lifecycle.owner-accepted` | Project Owner explicitly accepts the exact byte identity. | Project Owner явно принимает exact byte identity. |
| `c9.lifecycle.owner-accepted` | `c9.lifecycle.candidate-locked` | Separate Candidate Lock preparation and issuance authorization. | Отдельно авторизованы подготовка и выпуск Candidate Lock. |
| `c9.lifecycle.candidate-locked` | `c9.lifecycle.repository-persisted` | Separate atomic repository-persistence authorization and successful persistence. | Отдельно авторизовано атомарное сохранение в репозитории и оно успешно выполнено. |
| `c9.lifecycle.repository-persisted` | `c9.lifecycle.closure-complete` | Lock identity, committed blob and remote blob are verified identical. | Identity lock, committed blob и remote blob подтверждены как идентичные. |
| `c9.lifecycle.closure-complete` | `c9.lifecycle.superseded` | A separately accepted successor becomes controlling. | Отдельно принятый successor становится controlling. |
| any non-invalidated state | `c9.lifecycle.invalidated` | Explicit Project Owner invalidation decision. | Явное решение Project Owner об invalidation. |

## 25.2 Invalid direct transitions

The following direct transitions are prohibited:

```text
c9.lifecycle.review-failed → c9.lifecycle.owner-accepted
c9.lifecycle.review-failed → c9.lifecycle.candidate-locked
c9.lifecycle.review-failed → c9.lifecycle.repository-persisted
c9.lifecycle.ready-for-independent-review → c9.lifecycle.owner-accepted
c9.lifecycle.technically-review-closed → c9.lifecycle.repository-persisted
c9.lifecycle.owner-accepted → c9.lifecycle.repository-persisted
    without an intervening Candidate Lock where this governance package requires one
c9.lifecycle.invalidated → any valid state
    without a new explicit Project Owner decision and a new governed identity
```

Any byte change after Candidate Lock creates a new unlocked identity and triggers dependency revalidation.

Current state after Correction Cycle 7 full Project-Owner-authorized non-independent adversarial technical review: `c9.lifecycle.technically-review-closed`. The external independent review route was not performed and is not claimed; the exact reviewer-availability exception in §1.11 is the authority for this technical closure. Next gate: explicit Project Owner acceptance decision for the exact byte identity.


# 26. Deterministic Fixture Comparison Semantics

| Comparison ID | EN | RU | Deterministic condition EN | Deterministic condition RU | Primary failure |
|---|---|---|---|---|---|
| `c9.comparison.pass` | PASS | ПРОЙДЕНО | All fourteen non-PASS predicates are false: no post-result mutation, lineage crossover, source-identity mismatch, fixture-identity mismatch, subset mismatch, wrong entry/suite attribution, missing or multiple primary result, wrong family/stage/reason/retryability, prohibited outcome or double count exists. | Все четырнадцать non-PASS predicates ложны: отсутствуют post-result mutation, пересечение lineage, несовпадение source identity, несовпадение fixture identity, несовпадение subset, неверная attribution записи/suite, отсутствие или множественность primary result, неверные family/stage/reason/retryability, запрещённый исход и двойной учёт. | NONE |
| `c9.comparison.result-missing` | Result missing | Результат отсутствует | No primary result exists. | Первичный результат отсутствует. | `c9.failure.comparison-result-missing` |
| `c9.comparison.multiple-results` | Multiple primary results | Несколько первичных результатов | More than one primary result exists. | Существует более одного первичного результата. | `c9.failure.comparison-multiple-results` |
| `c9.comparison.wrong-family` | Wrong result family | Неверное семейство результата | Observed family differs from the entry requirement. | Наблюдаемое семейство отличается от требования записи. | `c9.failure.comparison-wrong-family` |
| `c9.comparison.wrong-stage` | Wrong stage | Неверный этап | Observed stage differs from the entry requirement. | Наблюдаемый этап отличается от требования записи. | `c9.failure.comparison-wrong-stage` |
| `c9.comparison.wrong-reason` | Wrong or missing reason | Причина отсутствует или неверна | Reason is absent or does not equal the entry requirement. | Причина отсутствует или не совпадает с требованием записи. | `c9.failure.comparison-wrong-reason` |
| `c9.comparison.wrong-retryability` | Wrong retryability | Неверная retryability | The evaluation-classified retryability meaning differs from the entry requirement; Contract 9 does not require a particular runtime field or serialization. | Классифицированное для оценки значение retryability отличается от требования записи; Contract 9 не требует конкретного runtime field или serialization. | `c9.failure.comparison-wrong-retryability` |
| `c9.comparison.prohibited-outcome` | Prohibited outcome | Запрещённый исход | An outcome listed in the entry prohibited set is present. | Присутствует исход, включённый в prohibited set записи. | `c9.failure.comparison-prohibited-outcome` |
| `c9.comparison.identity-mismatch` | Fixture identity mismatch | Несовпадение идентичности fixture | Fixture identity does not match the compared instance. | Identity fixture не совпадает со сравниваемым экземпляром. | `c9.failure.comparison-identity-mismatch` |
| `c9.comparison.lineage-crossover` | Lineage crossover | Пересечение lineage | Development and held-out lineage separation is violated. | Нарушено разделение lineage между development и held-out. | `c9.failure.lineage-crossover` |
| `c9.comparison.subset-mismatch` | Subset mismatch | Несовпадение subset | Declared subset does not equal governed population role. | Объявленный subset не совпадает с governed population role. | `c9.failure.comparison-subset-mismatch` |
| `c9.comparison.wrong-entry` | Wrong registry entry | Неверная запись реестра | Fixture is attributed to the wrong entry or suite. | Fixture отнесён к неверной записи или suite. | `c9.failure.comparison-wrong-entry` |
| `c9.comparison.double-count` | Double count | Двойной учёт | One fixture instance is counted more than once. | Один экземпляр fixture учтён более одного раза. | `c9.failure.counting-duplication` |
| `c9.comparison.post-result-mutation` | Post-result mutation | Мутация результата после фиксации | A sealed observed result or comparison is mutated. | Зафиксированный наблюдаемый результат или comparison изменён после фиксации. | `c9.failure.post-result-mutation` |
| `c9.comparison.source-identity-mismatch` | Source identity mismatch | Несовпадение identity источника | A governing source differs from the exact identity cited by this contract. | Governing source отличается от exact identity, указанной этим контрактом. | `c9.failure.comparison-source-identity-mismatch` |

Comparison precedence:

1. post-result mutation;
2. lineage crossover;
3. source identity mismatch;
4. fixture identity mismatch;
5. subset mismatch;
6. wrong registry entry or suite attribution;
7. result missing;
8. multiple primary results;
9. wrong result family;
10. wrong stage;
11. wrong reason;
12. wrong retryability;
13. prohibited outcome;
14. double count;
15. PASS.

Every fixture comparison terminates in exactly one primary `c9.comparison.*` outcome. `post-result-mutation` has highest precedence and always triggers the Hard Security Stop. Multiple detected defects are preserved as secondary evidence but do not create multiple primary comparison outcomes; any independently applicable mandatory security or held-out-confidentiality stop remains enforceable and cannot be suppressed by comparison precedence.


# 27. Adjudication

Adjudication is allowed only for genuine source conflict, ownership ambiguity or identity lineage ambiguity. It cannot override an explicit fixed ETAP Rev13 value preserved by Rev15 and Rev16, alter a count to balance arithmetic or convert a failed required fixture into Not Scorable.

A future adjudication record must contain trigger, evidence, governing source identities, decision, authority, affected entry, resulting state, correction/successor requirement and immutable trace. Project Owner is not the routine fixture-case adjudicator; only an unresolved governance authority question escalates to `c9.escalation.project-owner-decision-required`.


# 28. Exclusion, Replacement and Revalidation

Invalid fixture instances are excluded and replaced only under future separately authorized data handling. Exclusion without replacement cannot leave any per-entry minimum unsatisfied. The replacement must be a distinct governed fixture instance with immutable replacement reason and trace; exact `fixtureId`, `fixtureLineageId` and lineage disposition remain controlled by TDH Rev10 and must never be fabricated.

A registry-entry semantic change after Candidate Lock requires a new exact Contract 9 identity, dependency-impact review, full technical review under an explicitly authorized review route, Owner acceptance and a new/superseding Candidate Lock. No locked row is edited silently.


# 29. Contract-10 Boundary

Contract 10 remains `NOT AUTHORIZED / NOT OPENED`. Contract 9 does not define final property names, JSON, API, wire format, database schema, TypeScript interfaces, enum serialization, field ordering, concrete presence/cardinality/range validation or runtime validator code. Contract 10 may later import the 18 canonical subtype tokens and their fixed reason/retryability/prohibited semantics after Contract 9 is locked. `c9.entry.*` may be retained as trace metadata only; it must not replace the subtype token or pre-decide a schema field.


# 30. Contract-11 Boundary

Contract 11 remains `NOT AUTHORIZED / NOT OPENED`. Contract 9 does not define aggregation, uncertainty aggregation, score stability, metric recombination, cross-run statistics, zero/low-support resolution or final corpus reporting. It exposes only fixture-level expected facts and comparison outcomes.


# 31. EN/RU Localization

English is canonical. Russian is a complete derived locale. Stable IDs and fixed imported tokens are language-neutral. English fallback is mandatory.

| Identity class | Targets | EN present | RU present | Missing | Duplicate | Orphan |
|---|---|---|---|---|---|---|
| `c9.suite.*` | 4 | 4 | 4 | 0 | 0 | 0 |
| `c9.entry.*` | 18 | 18 | 18 | 0 | 0 | 0 |
| `c9.retryability.*` | 5 | 5 | 5 | 0 | 0 | 0 |
| `c9.prohibited.*` | 18 | 18 | 18 | 0 | 0 | 0 |
| `c9.lifecycle.*` | 12 | 12 | 12 | 0 | 0 | 0 |
| `c9.comparison.*` | 15 | 15 | 15 | 0 | 0 | 0 |
| `c9.rule.*` | 41 | 41 | 41 | 0 | 0 | 0 |
| `c9.validation.*` | 41 | 41 | 41 | 0 | 0 | 0 |
| `c9.failure.*` | 52 | 52 | 52 | 0 | 0 | 0 |
| `c9.escalation.*` | 14 | 14 | 14 | 0 | 0 | 0 |

Suite, entry, retryability, prohibited-outcome, lifecycle, comparison, rule, validation, failure, escalation and normative-example tables carry canonical EN plus semantically equivalent RU labels and normative meanings. Every subtype trigger, retryability meaning, prohibited set, lifecycle transition condition, comparison condition and example/counterexample boundary has explicit RU coverage. No localization is asserted by narrative-only substitution.


# 32. Diagnosability Compatibility Foundation

Minimum compatibility only: contract version, source identity, suite, entry, subtype token, expected result/stage/reason, retryability, prohibited set, fixture identity, lineage, subset, validation, failure, escalation, comparison outcome and immutable trace.

No full Diagnosability Architecture is designed. Secrets, credentials, held-out ground truth and prohibited payloads are never diagnostic content.


# 33. Security Compatibility Foundation

Hard Security Stop remains active. Security-compatible facts include source eligibility, real-user-data prohibition, fixture identity integrity, lineage/subset isolation, held-out confidentiality, RoomCase isolation, mixed-room negative handling, tamper-detection compatibility, safe failure and authorization trace.

`c9.failure.post-result-mutation`, fabricated identity, unauthorized provider invocation, real-user-data admission and unauthorized downstream work all use `c9.escalation.security-stop` as their primary escalation.


# 34. Controlled Learning Boundary

```text
LEARNING-READY
NOT LEARNING-ACTIVE
```

Allowed: contract/rule/provider-configuration version references, traceability, immutable evaluation history, no-regression and rollback compatibility. Prohibited: feedback collection, analytics, training, automatic subtype/count/reason/threshold mutation, production behavior change, real-user-data learning and autonomous self-modification.


# 35. Normative Rule Registry

| Rule ID | EN statement | RU statement | Scope | Severity | Validation |
|---|---|---|---|---|---|
| `c9.rule.001` | The four fixture suites are present exactly once. | Четыре fixture-suite присутствуют ровно по одному разу. | registry | BLOCKER | `c9.validation.001` |
| `c9.rule.002` | The registry contains exactly 18 fixture entries. | Реестр содержит ровно 18 fixture-записей. | registry | BLOCKER | `c9.validation.002` |
| `c9.rule.003` | Every `c9.entry.*` trace identity is unique and remains distinct from the canonical fixture subtype token. | Каждый trace-идентификатор `c9.entry.*` уникален и отделён от канонического fixture subtype token. | identity | BLOCKER | `c9.validation.003` |
| `c9.rule.004` | Every canonical fixture subtype token is unique and no `c9.entry.*` identity may replace it. | Каждый канонический fixture subtype token уникален; `c9.entry.*` не может его заменить. | identity | BLOCKER | `c9.validation.004` |
| `c9.rule.005` | Every entry belongs to exactly one suite. | Каждая запись принадлежит ровно одной suite. | ownership | BLOCKER | `c9.validation.005` |
| `c9.rule.006` | Failure suite contains exactly the four fixed failure subtypes. | Failure suite содержит ровно четыре зафиксированных subtype. | registry | BLOCKER | `c9.validation.006` |
| `c9.rule.007` | C.2 suite contains exactly the four fixed C.2 subtypes. | C.2 suite содержит ровно четыре зафиксированных subtype. | registry | BLOCKER | `c9.validation.007` |
| `c9.rule.008` | C.3 suite contains exactly the four fixed C.3 subtypes. | C.3 suite содержит ровно четыре зафиксированных subtype. | registry | BLOCKER | `c9.validation.008` |
| `c9.rule.009` | Contract Violation suite contains exactly the six fixed semantic subtypes. | Contract Violation suite содержит ровно шесть зафиксированных семантических subtype. | registry | BLOCKER | `c9.validation.009` |
| `c9.rule.010` | Operational development count equals 16. | Количество operational development равно 16. | counts | BLOCKER | `c9.validation.010` |
| `c9.rule.011` | Operational held-out count equals 29. | Количество operational held-out равно 29. | counts | BLOCKER | `c9.validation.011` |
| `c9.rule.012` | Contract Violation development count equals 12. | Количество Contract Violation development равно 12. | counts | BLOCKER | `c9.validation.012` |
| `c9.rule.013` | Contract Violation held-out count equals 18. | Количество Contract Violation held-out равно 18. | counts | BLOCKER | `c9.validation.013` |
| `c9.rule.014` | Every per-row development/held-out allocation equals the fixed source allocation. | Каждое распределение development/held-out совпадает с зафиксированным источником. | counts | BLOCKER | `c9.validation.014` |
| `c9.rule.015` | Every entry is CRITICAL. | Каждая запись имеет CRITICAL. | criticality | BLOCKER | `c9.validation.015` |
| `c9.rule.016` | Every entry has floor 1.00. | Каждая запись имеет floor 1.00. | threshold | BLOCKER | `c9.validation.016` |
| `c9.rule.017` | Every entry has exactly one fixed expected result family. | Каждая запись имеет ровно одно зафиксированное ожидаемое семейство результата. | outcome | BLOCKER | `c9.validation.017` |
| `c9.rule.018` | Every entry has the exact fixed expected stage. | Каждая запись имеет точный зафиксированный ожидаемый этап. | outcome | BLOCKER | `c9.validation.018` |
| `c9.rule.019` | Every entry preserves the exact fixed reason token. | Каждая запись сохраняет точный зафиксированный reason token. | reason | BLOCKER | `c9.validation.019` |
| `c9.rule.020` | Every entry preserves the fixed retryability meaning. | Каждая запись сохраняет зафиксированное значение retryability. | retryability | BLOCKER | `c9.validation.020` |
| `c9.rule.021` | Every entry has a complete, non-empty prohibited-outcome set. | Каждая запись имеет полный непустой набор запрещённых исходов. | outcome | BLOCKER | `c9.validation.021` |
| `c9.rule.022` | No entry prohibits its own required result/stage/reason combination. | Ни одна запись не запрещает собственную требуемую комбинацию result/stage/reason. | outcome | BLOCKER | `c9.validation.022` |
| `c9.rule.023` | Suites are pairwise disjoint, subtype trigger definitions are non-overlapping, and every future fixture instance satisfies exactly one primary subtype predicate. | Suite попарно не пересекаются, trigger-определения subtype не перекрываются, и каждый будущий fixture instance удовлетворяет ровно одному primary subtype predicate. | ownership | BLOCKER | `c9.validation.023` |
| `c9.rule.024` | One fixture instance contributes to one entry and one subset count only. | Один экземпляр fixture учитывается только в одной записи и одном subset. | counts | BLOCKER | `c9.validation.024` |
| `c9.rule.025` | Future fixture instances use LICENSED, SYNTHETIC or STAGED sources only. | Будущие fixture используют только LICENSED, SYNTHETIC или STAGED источники. | security | BLOCKER | `c9.validation.025` |
| `c9.rule.026` | Real-user photographs and real-user data remain prohibited. | Реальные фотографии и данные пользователей остаются запрещёнными. | security | BLOCKER | `c9.validation.026` |
| `c9.rule.027` | No identity is fabricated; every TDH-owned identity is required exactly when its TDH applicability predicate is satisfied, including mandatory `fixtureId` and `fixtureLineageId` for a fixture-governed execution. | Никакой идентификатор не фабрикуется; каждый identity, принадлежащий TDH, обязателен ровно при выполнении его TDH applicability predicate, включая обязательные `fixtureId` и `fixtureLineageId` для fixture-governed execution. | identity | BLOCKER | `c9.validation.027` |
| `c9.rule.028` | Development and held-out instances have disjoint lineage. | Development и held-out экземпляры имеют раздельный lineage. | data | BLOCKER | `c9.validation.028` |
| `c9.rule.029` | A mixed-room negative has inputSetId and no fabricated roomCaseId. | Mixed-room negative имеет inputSetId и не имеет сфабрикованного roomCaseId. | identity | BLOCKER | `c9.validation.029` |
| `c9.rule.030` | A fixture instance is counted once regardless of eligible input form or ImageAsset count; eligibility creates no per-form quota. | Fixture учитывается один раз независимо от допустимой формы входа или количества ImageAsset; eligibility не создаёт квоту по форме. | counts | BLOCKER | `c9.validation.030` |
| `c9.rule.031` | Residential-34 does not multiply fixture counts or create category-specific subtypes. | Residential-34 не умножает fixture counts и не создаёт category-specific subtype. | scope | BLOCKER | `c9.validation.031` |
| `c9.rule.032` | Contract 9 test-fixture identities never reuse Contract 1 FixedElement identities. | Contract 9 test-fixture identities не используют Contract 1 FixedElement identities. | terminology | BLOCKER | `c9.validation.032` |
| `c9.rule.033` | No final field, JSON, wire, API, database or TypeScript schema is defined. | Не определяется финальная field/JSON/wire/API/database/TypeScript schema. | boundary | BLOCKER | `c9.validation.033` |
| `c9.rule.034` | No aggregation, score-stability or support-floor aggregation is defined. | Не определяется aggregation, score-stability или support-floor aggregation. | boundary | BLOCKER | `c9.validation.034` |
| `c9.rule.035` | Every exposed c9 identity has canonical EN and complete RU localization. | Каждый экспонируемый c9 identity имеет канонический EN и полный RU перевод. | localization | MAJOR | `c9.validation.035` |
| `c9.rule.036` | Every normative source row has exact path, lines, bytes and SHA-256. | Каждая normative source row содержит точные path, lines, bytes и SHA-256. | traceability | MAJOR | `c9.validation.036` |
| `c9.rule.037` | Candidate-locked content cannot be mutated in place. | Candidate-locked content нельзя изменять in-place. | lifecycle | BLOCKER | `c9.validation.037` |
| `c9.rule.038` | Controlled Learning remains LEARNING-READY and NOT LEARNING-ACTIVE. | Controlled Learning остаётся LEARNING-READY и NOT LEARNING-ACTIVE. | learning | BLOCKER | `c9.validation.038` |
| `c9.rule.039` | Contract 10/11, fixtures, corpus, provider activity and implementation remain unauthorized. | Contract 10/11, fixtures, corpus, provider activity и implementation остаются неавторизованными. | governance | BLOCKER | `c9.validation.039` |
| `c9.rule.040` | The document reports Supporting Contracts 1–8 closure, review-route authority and its own lifecycle state truthfully. | Документ правдиво отражает closure Supporting Contracts 1–8, authority маршрута проверки и собственный lifecycle state. | governance | BLOCKER | `c9.validation.040` |
| `c9.rule.041` | A sealed fixture result and its recorded comparison outcome cannot be mutated. | Зафиксированный fixture result и записанный comparison outcome нельзя изменять. | security | BLOCKER | `c9.validation.041` |

These 41 rules form the closed Contract-9 acceptance-validation registry. Entry-level fixture facts are governed by §§7–17, lifecycle transitions by §25, deterministic comparison outcomes by §26, and imported upstream scope/ownership boundaries by their cited accepted sources; those closed tables and imported boundaries remain normative without being redundantly assigned additional rule IDs. No claim is made that every normative sentence maps one-to-one to a `c9.rule.*` identity. Rule IDs are sequential `c9.rule.001`–`c9.rule.041` without gaps.


# 36. Validation Registry

| Validation ID | EN trigger | RU trigger | Phase/scope | Severity | Rule | Primary failure |
|---|---|---|---|---|---|---|
| `c9.validation.001` | Validate: The four fixture suites are present exactly once. | Проверка: Четыре fixture-suite присутствуют ровно по одному разу. | registry | BLOCKER | `c9.rule.001` | `c9.failure.suite-registry-incomplete` |
| `c9.validation.002` | Validate: The registry contains exactly 18 fixture entries. | Проверка: Реестр содержит ровно 18 fixture-записей. | registry | BLOCKER | `c9.rule.002` | `c9.failure.entry-count-mismatch` |
| `c9.validation.003` | Validate: Every `c9.entry.*` trace identity is unique and remains distinct from the canonical fixture subtype token. | Проверка: Каждый trace-идентификатор `c9.entry.*` уникален и отделён от канонического fixture subtype token. | identity | BLOCKER | `c9.rule.003` | `c9.failure.duplicate-entry-id` |
| `c9.validation.004` | Validate: Every canonical fixture subtype token is unique and no `c9.entry.*` identity may replace it. | Проверка: Каждый канонический fixture subtype token уникален; `c9.entry.*` не может его заменить. | identity | BLOCKER | `c9.rule.004` | `c9.failure.duplicate-subtype-token` |
| `c9.validation.005` | Validate: Every entry belongs to exactly one suite. | Проверка: Каждая запись принадлежит ровно одной suite. | ownership | BLOCKER | `c9.rule.005` | `c9.failure.multiple-suite-assignment` |
| `c9.validation.006` | Validate: Failure suite contains exactly the four fixed failure subtypes. | Проверка: Failure suite содержит ровно четыре зафиксированных subtype. | registry | BLOCKER | `c9.rule.006` | `c9.failure.failure-registry-drift` |
| `c9.validation.007` | Validate: C.2 suite contains exactly the four fixed C.2 subtypes. | Проверка: C.2 suite содержит ровно четыре зафиксированных subtype. | registry | BLOCKER | `c9.rule.007` | `c9.failure.c2-registry-drift` |
| `c9.validation.008` | Validate: C.3 suite contains exactly the four fixed C.3 subtypes. | Проверка: C.3 suite содержит ровно четыре зафиксированных subtype. | registry | BLOCKER | `c9.rule.008` | `c9.failure.c3-registry-drift` |
| `c9.validation.009` | Validate: Contract Violation suite contains exactly the six fixed semantic subtypes. | Проверка: Contract Violation suite содержит ровно шесть зафиксированных семантических subtype. | registry | BLOCKER | `c9.rule.009` | `c9.failure.cv-registry-drift` |
| `c9.validation.010` | Validate: Operational development count equals 16. | Проверка: Количество operational development равно 16. | counts | BLOCKER | `c9.rule.010` | `c9.failure.operational-dev-total-mismatch` |
| `c9.validation.011` | Validate: Operational held-out count equals 29. | Проверка: Количество operational held-out равно 29. | counts | BLOCKER | `c9.rule.011` | `c9.failure.operational-ho-total-mismatch` |
| `c9.validation.012` | Validate: Contract Violation development count equals 12. | Проверка: Количество Contract Violation development равно 12. | counts | BLOCKER | `c9.rule.012` | `c9.failure.cv-dev-total-mismatch` |
| `c9.validation.013` | Validate: Contract Violation held-out count equals 18. | Проверка: Количество Contract Violation held-out равно 18. | counts | BLOCKER | `c9.rule.013` | `c9.failure.cv-ho-total-mismatch` |
| `c9.validation.014` | Validate: Every per-row development/held-out allocation equals the fixed source allocation. | Проверка: Каждое распределение development/held-out совпадает с зафиксированным источником. | counts | BLOCKER | `c9.rule.014` | `c9.failure.per-row-count-drift` |
| `c9.validation.015` | Validate: Every entry is CRITICAL. | Проверка: Каждая запись имеет CRITICAL. | criticality | BLOCKER | `c9.rule.015` | `c9.failure.criticality-mismatch` |
| `c9.validation.016` | Validate: Every entry has floor 1.00. | Проверка: Каждая запись имеет floor 1.00. | threshold | BLOCKER | `c9.rule.016` | `c9.failure.floor-mismatch` |
| `c9.validation.017` | Validate: Every entry has exactly one fixed expected result family. | Проверка: Каждая запись имеет ровно одно зафиксированное ожидаемое семейство результата. | outcome | BLOCKER | `c9.rule.017` | `c9.failure.expected-family-mismatch` |
| `c9.validation.018` | Validate: Every entry has the exact fixed expected stage. | Проверка: Каждая запись имеет точный зафиксированный ожидаемый этап. | outcome | BLOCKER | `c9.rule.018` | `c9.failure.expected-stage-mismatch` |
| `c9.validation.019` | Validate: Every entry preserves the exact fixed reason token. | Проверка: Каждая запись сохраняет точный зафиксированный reason token. | reason | BLOCKER | `c9.rule.019` | `c9.failure.reason-token-drift` |
| `c9.validation.020` | Validate: Every entry preserves the fixed retryability meaning. | Проверка: Каждая запись сохраняет зафиксированное значение retryability. | retryability | BLOCKER | `c9.rule.020` | `c9.failure.retryability-drift` |
| `c9.validation.021` | Validate: Every entry has a complete, non-empty prohibited-outcome set. | Проверка: Каждая запись имеет полный непустой набор запрещённых исходов. | outcome | BLOCKER | `c9.rule.021` | `c9.failure.prohibited-set-incomplete` |
| `c9.validation.022` | Validate: No entry prohibits its own required result/stage/reason combination. | Проверка: Ни одна запись не запрещает собственную требуемую комбинацию result/stage/reason. | outcome | BLOCKER | `c9.rule.022` | `c9.failure.self-prohibition` |
| `c9.validation.023` | Validate: Suites are pairwise disjoint, subtype trigger definitions are non-overlapping, and every future fixture instance satisfies exactly one primary subtype predicate. | Проверка: Suite попарно не пересекаются, trigger-определения subtype не перекрываются, и каждый будущий fixture instance удовлетворяет ровно одному primary subtype predicate. | ownership | BLOCKER | `c9.rule.023` | `c9.failure.suite-overlap` |
| `c9.validation.024` | Validate: One fixture instance contributes to one entry and one subset count only. | Проверка: Один экземпляр fixture учитывается только в одной записи и одном subset. | counts | BLOCKER | `c9.rule.024` | `c9.failure.counting-duplication` |
| `c9.validation.025` | Validate: Future fixture instances use LICENSED, SYNTHETIC or STAGED sources only. | Проверка: Будущие fixture используют только LICENSED, SYNTHETIC или STAGED источники. | security | BLOCKER | `c9.rule.025` | `c9.failure.ineligible-source` |
| `c9.validation.026` | Validate: Real-user photographs and real-user data remain prohibited. | Проверка: Реальные фотографии и данные пользователей остаются запрещёнными. | security | BLOCKER | `c9.rule.026` | `c9.failure.real-user-data-admission` |
| `c9.validation.027` | Validate: No identity is fabricated; every TDH-owned identity is required exactly when its TDH applicability predicate is satisfied, including mandatory `fixtureId` and `fixtureLineageId` for a fixture-governed execution. | Проверка: Никакой идентификатор не фабрикуется; каждый identity, принадлежащий TDH, обязателен ровно при выполнении его TDH applicability predicate, включая обязательные `fixtureId` и `fixtureLineageId` для fixture-governed execution. | identity | BLOCKER | `c9.rule.027` | `c9.failure.fabricated-identity` |
| `c9.validation.028` | Validate: Development and held-out instances have disjoint lineage. | Проверка: Development и held-out экземпляры имеют раздельный lineage. | data | BLOCKER | `c9.rule.028` | `c9.failure.lineage-crossover` |
| `c9.validation.029` | Validate: A mixed-room negative has inputSetId and no fabricated roomCaseId. | Проверка: Mixed-room negative имеет inputSetId и не имеет сфабрикованного roomCaseId. | identity | BLOCKER | `c9.rule.029` | `c9.failure.mixed-room-roomcase-fabrication` |
| `c9.validation.030` | Validate: A fixture instance is counted once regardless of eligible input form or ImageAsset count; eligibility creates no per-form quota. | Проверка: Fixture учитывается один раз независимо от допустимой формы входа или количества ImageAsset; eligibility не создаёт квоту по форме. | counts | BLOCKER | `c9.rule.030` | `c9.failure.image-count-inflation` |
| `c9.validation.031` | Validate: Residential-34 does not multiply fixture counts or create category-specific subtypes. | Проверка: Residential-34 не умножает fixture counts и не создаёт category-specific subtype. | scope | BLOCKER | `c9.rule.031` | `c9.failure.category-count-inflation` |
| `c9.validation.032` | Validate: Contract 9 test-fixture identities never reuse Contract 1 FixedElement identities. | Проверка: Contract 9 test-fixture identities не используют Contract 1 FixedElement identities. | terminology | BLOCKER | `c9.rule.032` | `c9.failure.namespace-collision` |
| `c9.validation.033` | Validate: No final field, JSON, wire, API, database or TypeScript schema is defined. | Проверка: Не определяется финальная field/JSON/wire/API/database/TypeScript schema. | boundary | BLOCKER | `c9.rule.033` | `c9.failure.contract10-leakage` |
| `c9.validation.034` | Validate: No aggregation, score-stability or support-floor aggregation is defined. | Проверка: Не определяется aggregation, score-stability или support-floor aggregation. | boundary | BLOCKER | `c9.rule.034` | `c9.failure.contract11-leakage` |
| `c9.validation.035` | Validate: Every exposed c9 identity has canonical EN and complete RU localization. | Проверка: Каждый экспонируемый c9 identity имеет канонический EN и полный RU перевод. | localization | MAJOR | `c9.rule.035` | `c9.failure.localization-incomplete` |
| `c9.validation.036` | Validate: Every normative source row has exact path, lines, bytes and SHA-256. | Проверка: Каждая normative source row содержит точные path, lines, bytes и SHA-256. | traceability | MAJOR | `c9.rule.036` | `c9.failure.source-identity-incomplete` |
| `c9.validation.037` | Validate: Candidate-locked content cannot be mutated in place. | Проверка: Candidate-locked content нельзя изменять in-place. | lifecycle | BLOCKER | `c9.rule.037` | `c9.failure.post-lock-mutation` |
| `c9.validation.038` | Validate: Controlled Learning remains LEARNING-READY and NOT LEARNING-ACTIVE. | Проверка: Controlled Learning остаётся LEARNING-READY и NOT LEARNING-ACTIVE. | learning | BLOCKER | `c9.rule.038` | `c9.failure.learning-activation` |
| `c9.validation.039` | Validate: Contract 10/11, fixtures, corpus, provider activity and implementation remain unauthorized. | Проверка: Contract 10/11, fixtures, corpus, provider activity и implementation остаются неавторизованными. | governance | BLOCKER | `c9.rule.039` | `c9.failure.downstream-authorization-leak` |
| `c9.validation.040` | Validate: The document reports Supporting Contracts 1–8 closure, review-route authority and its own lifecycle state truthfully. | Проверка: Документ правдиво отражает closure Supporting Contracts 1–8, authority маршрута проверки и собственный lifecycle state. | governance | BLOCKER | `c9.rule.040` | `c9.failure.governance-state-false` |
| `c9.validation.041` | Validate: A sealed fixture result and its recorded comparison outcome cannot be mutated. | Проверка: Зафиксированный fixture result и записанный comparison outcome нельзя изменять. | security | BLOCKER | `c9.rule.041` | `c9.failure.post-result-mutation` |

Each validation references exactly one primary rule and one primary failure. A validation may collect secondary evidence but does not change the one-primary-failure mapping.


# 37. Failure Registry

| Failure ID | EN definition | RU definition | Severity | Primary escalation |
|---|---|---|---|---|
| `c9.failure.suite-registry-incomplete` | Violation of c9.rule.001: The four fixture suites are present exactly once. | Нарушение c9.rule.001: Четыре fixture-suite присутствуют ровно по одному разу. | BLOCKER | `c9.escalation.registry-correction` |
| `c9.failure.entry-count-mismatch` | Violation of c9.rule.002: The registry contains exactly 18 fixture entries. | Нарушение c9.rule.002: Реестр содержит ровно 18 fixture-записей. | BLOCKER | `c9.escalation.registry-correction` |
| `c9.failure.duplicate-entry-id` | Violation of c9.rule.003: Every `c9.entry.*` trace identity is unique and remains distinct from the canonical fixture subtype token. | Нарушение c9.rule.003: Каждый trace-идентификатор `c9.entry.*` уникален и отделён от канонического fixture subtype token. | BLOCKER | `c9.escalation.identity-governance` |
| `c9.failure.duplicate-subtype-token` | Violation of c9.rule.004: Every canonical fixture subtype token is unique and no `c9.entry.*` identity may replace it. | Нарушение c9.rule.004: Каждый канонический fixture subtype token уникален; `c9.entry.*` не может его заменить. | BLOCKER | `c9.escalation.identity-governance` |
| `c9.failure.multiple-suite-assignment` | Violation of c9.rule.005: Every entry belongs to exactly one suite. | Нарушение c9.rule.005: Каждая запись принадлежит ровно одной suite. | BLOCKER | `c9.escalation.registry-correction` |
| `c9.failure.failure-registry-drift` | Violation of c9.rule.006: Failure suite contains exactly the four fixed failure subtypes. | Нарушение c9.rule.006: Failure suite содержит ровно четыре зафиксированных subtype. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.c2-registry-drift` | Violation of c9.rule.007: C.2 suite contains exactly the four fixed C.2 subtypes. | Нарушение c9.rule.007: C.2 suite содержит ровно четыре зафиксированных subtype. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.c3-registry-drift` | Violation of c9.rule.008: C.3 suite contains exactly the four fixed C.3 subtypes. | Нарушение c9.rule.008: C.3 suite содержит ровно четыре зафиксированных subtype. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.cv-registry-drift` | Violation of c9.rule.009: Contract Violation suite contains exactly the six fixed semantic subtypes. | Нарушение c9.rule.009: Contract Violation suite содержит ровно шесть зафиксированных семантических subtype. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.operational-dev-total-mismatch` | Violation of c9.rule.010: Operational development count equals 16. | Нарушение c9.rule.010: Количество operational development равно 16. | BLOCKER | `c9.escalation.count-reconciliation-stop` |
| `c9.failure.operational-ho-total-mismatch` | Violation of c9.rule.011: Operational held-out count equals 29. | Нарушение c9.rule.011: Количество operational held-out равно 29. | BLOCKER | `c9.escalation.count-reconciliation-stop` |
| `c9.failure.cv-dev-total-mismatch` | Violation of c9.rule.012: Contract Violation development count equals 12. | Нарушение c9.rule.012: Количество Contract Violation development равно 12. | BLOCKER | `c9.escalation.count-reconciliation-stop` |
| `c9.failure.cv-ho-total-mismatch` | Violation of c9.rule.013: Contract Violation held-out count equals 18. | Нарушение c9.rule.013: Количество Contract Violation held-out равно 18. | BLOCKER | `c9.escalation.count-reconciliation-stop` |
| `c9.failure.per-row-count-drift` | Violation of c9.rule.014: Every per-row development/held-out allocation equals the fixed source allocation. | Нарушение c9.rule.014: Каждое распределение development/held-out совпадает с зафиксированным источником. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.criticality-mismatch` | Violation of c9.rule.015: Every entry is CRITICAL. | Нарушение c9.rule.015: Каждая запись имеет CRITICAL. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.floor-mismatch` | Violation of c9.rule.016: Every entry has floor 1.00. | Нарушение c9.rule.016: Каждая запись имеет floor 1.00. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.expected-family-mismatch` | Violation of c9.rule.017: Every entry has exactly one fixed expected result family. | Нарушение c9.rule.017: Каждая запись имеет ровно одно зафиксированное ожидаемое семейство результата. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.expected-stage-mismatch` | Violation of c9.rule.018: Every entry has the exact fixed expected stage. | Нарушение c9.rule.018: Каждая запись имеет точный зафиксированный ожидаемый этап. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.reason-token-drift` | Violation of c9.rule.019: Every entry preserves the exact fixed reason token. | Нарушение c9.rule.019: Каждая запись сохраняет точный зафиксированный reason token. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.retryability-drift` | Violation of c9.rule.020: Every entry preserves the fixed retryability meaning. | Нарушение c9.rule.020: Каждая запись сохраняет зафиксированное значение retryability. | BLOCKER | `c9.escalation.etap-authority-stop` |
| `c9.failure.prohibited-set-incomplete` | Violation of c9.rule.021: Every entry has a complete, non-empty prohibited-outcome set. | Нарушение c9.rule.021: Каждая запись имеет полный непустой набор запрещённых исходов. | BLOCKER | `c9.escalation.registry-correction` |
| `c9.failure.self-prohibition` | Violation of c9.rule.022: No entry prohibits its own required result/stage/reason combination. | Нарушение c9.rule.022: Ни одна запись не запрещает собственную требуемую комбинацию result/stage/reason. | BLOCKER | `c9.escalation.registry-correction` |
| `c9.failure.suite-overlap` | Violation of c9.rule.023: Suites are pairwise disjoint, subtype trigger definitions are non-overlapping, and every future fixture instance satisfies exactly one primary subtype predicate. | Нарушение c9.rule.023: Suite попарно не пересекаются, trigger-определения subtype не перекрываются, и каждый будущий fixture instance удовлетворяет ровно одному primary subtype predicate. | BLOCKER | `c9.escalation.registry-correction` |
| `c9.failure.counting-duplication` | Violation of c9.rule.024: One fixture instance contributes to one entry and one subset count only. | Нарушение c9.rule.024: Один экземпляр fixture учитывается только в одной записи и одном subset. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.ineligible-source` | Violation of c9.rule.025: Future fixture instances use LICENSED, SYNTHETIC or STAGED sources only. | Нарушение c9.rule.025: Будущие fixture используют только LICENSED, SYNTHETIC или STAGED источники. | BLOCKER | `c9.escalation.security-stop` |
| `c9.failure.real-user-data-admission` | Violation of c9.rule.026: Real-user photographs and real-user data remain prohibited. | Нарушение c9.rule.026: Реальные фотографии и данные пользователей остаются запрещёнными. | BLOCKER | `c9.escalation.security-stop` |
| `c9.failure.fabricated-identity` | Violation of c9.rule.027: No identity is fabricated; every TDH-owned identity is required exactly when its TDH applicability predicate is satisfied, including mandatory fixture identity for a fixture-governed execution. | Нарушение c9.rule.027: Никакой идентификатор не фабрикуется; каждый identity, принадлежащий TDH, обязателен ровно при выполнении его TDH applicability predicate, включая обязательную fixture identity для fixture-governed execution. | BLOCKER | `c9.escalation.security-stop` |
| `c9.failure.lineage-crossover` | Violation of c9.rule.028: Development and held-out instances have disjoint lineage. | Нарушение c9.rule.028: Development и held-out экземпляры имеют раздельный lineage. | BLOCKER | `c9.escalation.held-out-confidentiality-stop` |
| `c9.failure.mixed-room-roomcase-fabrication` | Violation of c9.rule.029: A mixed-room negative has inputSetId and no fabricated roomCaseId. | Нарушение c9.rule.029: Mixed-room negative имеет inputSetId и не имеет сфабрикованного roomCaseId. | BLOCKER | `c9.escalation.security-stop` |
| `c9.failure.image-count-inflation` | Violation of c9.rule.030: A fixture instance is counted once regardless of eligible input form or ImageAsset count; eligibility creates no per-form quota. | Нарушение c9.rule.030: Fixture учитывается один раз независимо от допустимой формы входа или количества ImageAsset; eligibility не создаёт квоту по форме. | BLOCKER | `c9.escalation.count-reconciliation-stop` |
| `c9.failure.category-count-inflation` | Violation of c9.rule.031: Residential-34 does not multiply fixture counts or create category-specific subtypes. | Нарушение c9.rule.031: Residential-34 не умножает fixture counts и не создаёт category-specific subtype. | BLOCKER | `c9.escalation.dependency-revalidation` |
| `c9.failure.namespace-collision` | Violation of c9.rule.032: Contract 9 test-fixture identities never reuse Contract 1 FixedElement identities. | Нарушение c9.rule.032: Contract 9 test-fixture identities не используют Contract 1 FixedElement identities. | BLOCKER | `c9.escalation.upstream-contract-stop` |
| `c9.failure.contract10-leakage` | Violation of c9.rule.033: No final field, JSON, wire, API, database or TypeScript schema is defined. | Нарушение c9.rule.033: Не определяется финальная field/JSON/wire/API/database/TypeScript schema. | BLOCKER | `c9.escalation.contract10-stop` |
| `c9.failure.contract11-leakage` | Violation of c9.rule.034: No aggregation, score-stability or support-floor aggregation is defined. | Нарушение c9.rule.034: Не определяется aggregation, score-stability или support-floor aggregation. | BLOCKER | `c9.escalation.contract11-stop` |
| `c9.failure.localization-incomplete` | Violation of c9.rule.035: Every exposed c9 identity has canonical EN and complete RU localization. | Нарушение c9.rule.035: Каждый экспонируемый c9 identity имеет канонический EN и полный RU перевод. | MAJOR | `c9.escalation.localization-remediation` |
| `c9.failure.source-identity-incomplete` | Violation of c9.rule.036: Every normative source row has exact path, lines, bytes and SHA-256. | Нарушение c9.rule.036: Каждая normative source row содержит точные path, lines, bytes и SHA-256. | MAJOR | `c9.escalation.source-revalidation` |
| `c9.failure.post-lock-mutation` | Violation of c9.rule.037: Candidate-locked content cannot be mutated in place. | Нарушение c9.rule.037: Candidate-locked content нельзя изменять in-place. | BLOCKER | `c9.escalation.identity-governance` |
| `c9.failure.learning-activation` | Violation of c9.rule.038: Controlled Learning remains LEARNING-READY and NOT LEARNING-ACTIVE. | Нарушение c9.rule.038: Controlled Learning остаётся LEARNING-READY и NOT LEARNING-ACTIVE. | BLOCKER | `c9.escalation.security-stop` |
| `c9.failure.downstream-authorization-leak` | Violation of c9.rule.039: Contract 10/11, fixtures, corpus, provider activity and implementation remain unauthorized. | Нарушение c9.rule.039: Contract 10/11, fixtures, corpus, provider activity и implementation остаются неавторизованными. | BLOCKER | `c9.escalation.security-stop` |
| `c9.failure.governance-state-false` | Violation of c9.rule.040: The document reports Supporting Contracts 1–8 closure, review-route authority and its own lifecycle state truthfully. | Нарушение c9.rule.040: Документ правдиво отражает closure Supporting Contracts 1–8, authority маршрута проверки и собственный lifecycle state. | BLOCKER | `c9.escalation.project-owner-decision-required` |
| `c9.failure.post-result-mutation` | Violation of c9.rule.041: A sealed fixture result and its recorded comparison outcome cannot be mutated. | Нарушение c9.rule.041: Зафиксированный fixture result и записанный comparison outcome нельзя изменять. | BLOCKER | `c9.escalation.security-stop` |
| `c9.failure.comparison-result-missing` | An observed fixture execution has no primary result. | У наблюдаемого fixture execution отсутствует первичный результат. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-multiple-results` | An observed fixture execution has more than one primary result. | У наблюдаемого fixture execution более одного первичного результата. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-wrong-family` | Observed result family differs from the fixed entry expectation. | Наблюдаемое семейство результата не совпадает с зафиксированным expectation записи. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-wrong-stage` | Observed result stage differs from the fixed entry expectation. | Наблюдаемый этап результата не совпадает с зафиксированным expectation записи. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-wrong-reason` | Observed reason is missing or differs from the fixed reason token. | Наблюдаемый reason отсутствует или отличается от зафиксированного reason token. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-wrong-retryability` | The evaluation-classified retryability meaning differs from the fixed registry meaning. | Классифицированное для оценки значение retryability отличается от зафиксированного значения реестра. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-prohibited-outcome` | An observed outcome belongs to the entry prohibited-outcome set. | Наблюдаемый исход входит в prohibited-outcome set записи. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-identity-mismatch` | Observed fixture identity differs from the fixture instance under comparison. | Наблюдаемый fixture identity отличается от сравниваемого fixture instance. | BLOCKER | `c9.escalation.identity-governance` |
| `c9.failure.comparison-subset-mismatch` | Observed subset differs from the governed population role. | Наблюдаемый subset отличается от governed population role. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-wrong-entry` | The fixture is attributed to the wrong registry entry or suite. | Fixture отнесён к неверной registry entry или suite. | BLOCKER | `c9.escalation.fixture-governance` |
| `c9.failure.comparison-source-identity-mismatch` | A governing source byte identity differs from the identity bound by this contract. | Byte identity governing source отличается от identity, зафиксированной контрактом. | BLOCKER | `c9.escalation.source-revalidation` |

Every failure has exactly one primary escalation. The registry contains 41 rule/validation failures plus 11 execution-comparison failures; three comparison outcomes reuse existing failures (`lineage-crossover`, `counting-duplication`, `post-result-mutation`). `c9.failure.downstream-authorization-leak` uses the Hard Security Stop as its primary escalation; Contract-10/11 boundary details are secondary evidence, not additional primary escalations. `c9.failure.post-lock-mutation` is distinct from comparison-time post-result mutation; the latter is captured by `c9.comparison.post-result-mutation` and escalates through the security rule path when detected.


# 38. Escalation Registry

| Escalation ID | EN | RU | Required handling | Used by primary failures |
|---|---|---|---|---|
| `c9.escalation.registry-correction` | Registry correction | Исправление реестра | Correct this same canonical Contract 9 draft and rerun the full internal verification. | `c9.failure.suite-registry-incomplete`; `c9.failure.entry-count-mismatch`; `c9.failure.multiple-suite-assignment`; `c9.failure.prohibited-set-incomplete`; `c9.failure.self-prohibition`; `c9.failure.suite-overlap` |
| `c9.escalation.identity-governance` | Identity governance stop | Стоп управления идентичностью | Stop use of the affected identity and reconcile its owner and uniqueness. | `c9.failure.duplicate-entry-id`; `c9.failure.duplicate-subtype-token`; `c9.failure.post-lock-mutation`; `c9.failure.comparison-identity-mismatch` |
| `c9.escalation.etap-authority-stop` | ETAP registry authority stop | Стоп по authority реестра ETAP | Stop; restore ETAP Rev13 §12.1–§12.4, including its incorporation of the six historical ETAP Rev10 Contract Violation reason tokens, as preserved by Rev15 and Rev16 without reinterpretation. | `c9.failure.failure-registry-drift`; `c9.failure.c2-registry-drift`; `c9.failure.c3-registry-drift`; `c9.failure.cv-registry-drift`; `c9.failure.per-row-count-drift`; `c9.failure.criticality-mismatch`; `c9.failure.floor-mismatch`; `c9.failure.reason-token-drift`; `c9.failure.retryability-drift` |
| `c9.escalation.count-reconciliation-stop` | Count reconciliation stop | Стоп сверки количества | Stop; recompute every row and fixed aggregate before proceeding. | `c9.failure.operational-dev-total-mismatch`; `c9.failure.operational-ho-total-mismatch`; `c9.failure.cv-dev-total-mismatch`; `c9.failure.cv-ho-total-mismatch`; `c9.failure.image-count-inflation` |
| `c9.escalation.fixture-governance` | Fixture governance correction | Исправление fixture governance | Correct the entry/comparison semantics before any fixture preparation. | `c9.failure.expected-family-mismatch`; `c9.failure.expected-stage-mismatch`; `c9.failure.counting-duplication`; `c9.failure.comparison-result-missing`; `c9.failure.comparison-multiple-results`; `c9.failure.comparison-wrong-family`; `c9.failure.comparison-wrong-stage`; `c9.failure.comparison-wrong-reason`; `c9.failure.comparison-wrong-retryability`; `c9.failure.comparison-prohibited-outcome`; `c9.failure.comparison-subset-mismatch`; `c9.failure.comparison-wrong-entry` |
| `c9.escalation.security-stop` | Hard Security Stop | Жёсткий security stop | Halt immediately; do not create data, invoke providers, persist secrets or continue downstream work. | `c9.failure.ineligible-source`; `c9.failure.real-user-data-admission`; `c9.failure.fabricated-identity`; `c9.failure.mixed-room-roomcase-fabrication`; `c9.failure.learning-activation`; `c9.failure.downstream-authorization-leak`; `c9.failure.post-result-mutation` |
| `c9.escalation.held-out-confidentiality-stop` | Held-out confidentiality stop | Стоп конфиденциальности held-out | Halt and preserve held-out isolation; no ground truth disclosure or lineage crossover. | `c9.failure.lineage-crossover` |
| `c9.escalation.dependency-revalidation` | Dependency revalidation | Повторная проверка зависимости | Revalidate the affected upstream/downstream dependency before continuation. | `c9.failure.category-count-inflation` |
| `c9.escalation.upstream-contract-stop` | Upstream contract authority stop | Стоп по authority upstream contract | Restore the importing boundary; do not redefine the upstream-owned semantic. | `c9.failure.namespace-collision` |
| `c9.escalation.contract10-stop` | Contract 10 boundary stop | Стоп границы Contract 10 | Remove representation/schema content; Contract 10 remains unopened. | `c9.failure.contract10-leakage` |
| `c9.escalation.contract11-stop` | Contract 11 boundary stop | Стоп границы Contract 11 | Remove aggregation content; Contract 11 remains unopened. | `c9.failure.contract11-leakage` |
| `c9.escalation.localization-remediation` | Localization remediation | Исправление локализации | Complete semantically equivalent EN/RU coverage before technical review closure. | `c9.failure.localization-incomplete` |
| `c9.escalation.source-revalidation` | Source revalidation | Повторная проверка источников | Recompute exact source identities and reconcile any mismatch. | `c9.failure.source-identity-incomplete`; `c9.failure.comparison-source-identity-mismatch` |
| `c9.escalation.project-owner-decision-required` | Project Owner decision required | Требуется решение Project Owner | Stop and request a new explicit Owner decision; do not infer authority. | `c9.failure.governance-state-false` |

No escalation is unused. Project Owner escalation is reserved for an actual governance-authority conflict and is not used for routine drafting defects.


# 39. Compatibility and Decision Matrices

## 39.1 Suite × entry

| Suite | Entries |
|---|---|
| `c9.suite.failure` | `c9.entry.001`; `c9.entry.002`; `c9.entry.003`; `c9.entry.004` |
| `c9.suite.c2-operational-rejection` | `c9.entry.005`; `c9.entry.006`; `c9.entry.007`; `c9.entry.008` |
| `c9.suite.c3-general-rejection` | `c9.entry.009`; `c9.entry.010`; `c9.entry.011`; `c9.entry.012` |
| `c9.suite.contract-violation` | `c9.entry.013`; `c9.entry.014`; `c9.entry.015`; `c9.entry.016`; `c9.entry.017`; `c9.entry.018` |

## 39.2 Result × stage × reason × entry

| Entry | Expected result | Expected stage | Expected reason |
|---|---|---|---|
| `c9.entry.001` | `FailureResult` | `provider` | `provider.timeout` |
| `c9.entry.002` | `FailureResult` | `C.1` | `provider.malformed_response` |
| `c9.entry.003` | `FailureResult` | `preprocessing` | `input.unreadable` |
| `c9.entry.004` | `FailureResult` | `preprocessing` | `input.unsupported` |
| `c9.entry.005` | `RejectedResult` | `C.2` | `c2.room.missing_candidate` |
| `c9.entry.006` | `RejectedResult` | `C.2` | `c2.node.duplicate_id` |
| `c9.entry.007` | `RejectedResult` | `C.2` | `c2.relation.dangling_endpoint` |
| `c9.entry.008` | `RejectedResult` | `C.2` | `c2.geometry.invalid` |
| `c9.entry.009` | `RejectedResult` | `C.3` | `c3.general.schema_version` |
| `c9.entry.010` | `RejectedResult` | `C.3` | `c3.general.operation_identity` |
| `c9.entry.011` | `RejectedResult` | `C.3` | `c3.general.image_identity` |
| `c9.entry.012` | `RejectedResult` | `C.3` | `c3.general.result_metadata` |
| `c9.entry.013` | `RejectedResult` | `C.3` | `c3.room.missing` |
| `c9.entry.014` | `RejectedResult` | `C.3` | `c3.room.invalid_cardinality` |
| `c9.entry.015` | `RejectedResult` | `C.3` | `c3.confidence.missing` |
| `c9.entry.016` | `RejectedResult` | `C.3` | `c3.confidence.invalid` |
| `c9.entry.017` | `RejectedResult` | `C.3` | `c3.provenance.missing` |
| `c9.entry.018` | `RejectedResult` | `C.3` | `c3.provenance.invalid` |

## 39.3 Disjointness

All six pairwise suite intersections are empty. All 18 subtype tokens are unique. All 18 entry IDs are unique. All future fixture instances are single-count units.

## 39.4 Scope matrix

| Dimension | Contract 9 status |
|---|---|
| Residential-34 | Imported, no count multiplication |
| One-image RoomCase | Eligible where fixed trigger applies; no separate quota |
| Same-room multi-image RoomCase | Eligible where fixed trigger applies; no separate quota |
| Mixed-room negative | Referenced external validation area; no C9 subtype/count |
| Commercial | Excluded |
| Real-user data/photos | Prohibited |
| Whole-home/floor plan/video/panorama/2.5D/3D | Excluded |
| Contract 10 representation | Reserved, unopened |
| Contract 11 aggregation | Reserved, unopened |


# 40. Traceability Matrices

## 40.1 Entry-level source trace

| Entry | Fixed fixture-row authority | Imported semantic authority | Identity / lineage authority | Contract-9-owned materialization |
|---|---|---|---|---|
| `c9.entry.001` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | Perception Mechanism `FailureResult`; fixed reason `provider.timeout`; fixed retryability meaning | TDH Rev10 | `c9.entry.001`, suite binding, EN/RU labels, `c9.prohibited.001`, lifecycle and traceability |
| `c9.entry.002` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | Perception Mechanism `FailureResult`; fixed reason `provider.malformed_response`; fixed retryability meaning | TDH Rev10 | `c9.entry.002`, suite binding, EN/RU labels, `c9.prohibited.002`, lifecycle and traceability |
| `c9.entry.003` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | Perception Mechanism `FailureResult`; fixed reason `input.unreadable`; fixed retryability meaning | TDH Rev10 | `c9.entry.003`, suite binding, EN/RU labels, `c9.prohibited.003`, lifecycle and traceability |
| `c9.entry.004` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | Perception Mechanism `FailureResult`; fixed reason `input.unsupported`; fixed retryability meaning | TDH Rev10 | `c9.entry.004`, suite binding, EN/RU labels, `c9.prohibited.004`, lifecycle and traceability |
| `c9.entry.005` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.2 rejection boundary; fixed reason `c2.room.missing_candidate`; fixed retryability meaning | TDH Rev10 | `c9.entry.005`, suite binding, EN/RU labels, `c9.prohibited.005`, lifecycle and traceability |
| `c9.entry.006` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.2 rejection boundary; fixed reason `c2.node.duplicate_id`; fixed retryability meaning | TDH Rev10 | `c9.entry.006`, suite binding, EN/RU labels, `c9.prohibited.006`, lifecycle and traceability |
| `c9.entry.007` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.2 rejection boundary; fixed reason `c2.relation.dangling_endpoint`; fixed retryability meaning; Contract 2 relation identity remains imported | TDH Rev10 | `c9.entry.007`, suite binding, EN/RU labels, `c9.prohibited.007`, lifecycle and traceability |
| `c9.entry.008` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.2 rejection boundary; fixed reason `c2.geometry.invalid`; fixed retryability meaning | TDH Rev10 | `c9.entry.008`, suite binding, EN/RU labels, `c9.prohibited.008`, lifecycle and traceability |
| `c9.entry.009` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.3 boundary rejection; fixed reason `c3.general.schema_version`; fixed retryability meaning | TDH Rev10 | `c9.entry.009`, suite binding, EN/RU labels, `c9.prohibited.009`, lifecycle and traceability |
| `c9.entry.010` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.3 boundary rejection; fixed reason `c3.general.operation_identity`; fixed retryability meaning | TDH Rev10 operation identity | `c9.entry.010`, suite binding, EN/RU labels, `c9.prohibited.010`, lifecycle and traceability |
| `c9.entry.011` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.3 boundary rejection; fixed reason `c3.general.image_identity`; current RoomCase/ImageAsset semantic interpretation | TDH Rev10 RoomCase/ImageAsset identity model | `c9.entry.011`, suite binding, EN/RU labels, `c9.prohibited.011`, lifecycle and traceability |
| `c9.entry.012` | ETAP Rev13 exact accepted row, preserved unchanged by ETAP Rev15 and Rev16 | C.3 boundary rejection; fixed reason `c3.general.result_metadata`; fixed retryability meaning | TDH Rev10 result metadata identity model | `c9.entry.012`, suite binding, EN/RU labels, `c9.prohibited.012`, lifecycle and traceability |
| `c9.entry.013` | ETAP Rev13 §12.4 semantic row and 2/3 count; exact reason `c3.room.missing` incorporated there from historical ETAP Rev10 §12.2; preserved by ETAP Rev15 and Rev16 | Exactly-one-Room conformance; fixed reason `c3.room.missing` | TDH Rev10 | Canonical token `CV-MISSING-ROOM`, `c9.entry.013`, EN/RU labels, `c9.prohibited.013`, lifecycle and traceability |
| `c9.entry.014` | ETAP Rev13 §12.4 semantic row and 2/3 count; exact reason `c3.room.invalid_cardinality` incorporated there from historical ETAP Rev10 §12.2; preserved by ETAP Rev15 and Rev16 | Exactly-one-Room conformance; fixed reason `c3.room.invalid_cardinality` | TDH Rev10 | Canonical token `CV-INVALID-ROOM-CARDINALITY`, `c9.entry.014`, EN/RU labels, `c9.prohibited.014`, lifecycle and traceability |
| `c9.entry.015` | ETAP Rev13 §12.4 semantic row and 2/3 count; exact reason `c3.confidence.missing` incorporated there from historical ETAP Rev10 §12.2; preserved by ETAP Rev15 and Rev16 | Contract 5 confidence obligation; fixed reason `c3.confidence.missing` | TDH Rev10 | Canonical token `CV-MISSING-CONFIDENCE`, `c9.entry.015`, EN/RU labels, `c9.prohibited.015`, lifecycle and traceability |
| `c9.entry.016` | ETAP Rev13 §12.4 semantic row and 2/3 count; exact reason `c3.confidence.invalid` incorporated there from historical ETAP Rev10 §12.2; preserved by ETAP Rev15 and Rev16 | Contract 5 confidence obligation; fixed reason `c3.confidence.invalid` | TDH Rev10 | Canonical token `CV-INVALID-CONFIDENCE`, `c9.entry.016`, EN/RU labels, `c9.prohibited.016`, lifecycle and traceability |
| `c9.entry.017` | ETAP Rev13 §12.4 semantic row and 2/3 count; exact reason `c3.provenance.missing` incorporated there from historical ETAP Rev10 §12.2; preserved by ETAP Rev15 and Rev16 | Contract 4 provenance obligation; fixed reason `c3.provenance.missing` | TDH Rev10 | Canonical token `CV-MISSING-PROVENANCE`, `c9.entry.017`, EN/RU labels, `c9.prohibited.017`, lifecycle and traceability |
| `c9.entry.018` | ETAP Rev13 §12.4 semantic row and 2/3 count; exact reason `c3.provenance.invalid` incorporated there from historical ETAP Rev10 §12.2; preserved by ETAP Rev15 and Rev16 | Contract 4 provenance obligation; fixed reason `c3.provenance.invalid` | TDH Rev10 | Canonical token `CV-INVALID-PROVENANCE`, `c9.entry.018`, EN/RU labels, `c9.prohibited.018`, lifecycle and traceability |

## 40.2 Rule → validation → failure → escalation

| Primary source class | Rule | Validation | Failure | Escalation |
|---|---|---|---|---|
| Contract 9 registry governance | `c9.rule.001` | `c9.validation.001` | `c9.failure.suite-registry-incomplete` | `c9.escalation.registry-correction` |
| Contract 9 registry governance | `c9.rule.002` | `c9.validation.002` | `c9.failure.entry-count-mismatch` | `c9.escalation.registry-correction` |
| Contract 9 registry governance | `c9.rule.003` | `c9.validation.003` | `c9.failure.duplicate-entry-id` | `c9.escalation.identity-governance` |
| Contract 9 registry governance | `c9.rule.004` | `c9.validation.004` | `c9.failure.duplicate-subtype-token` | `c9.escalation.identity-governance` |
| Contract 9 registry governance | `c9.rule.005` | `c9.validation.005` | `c9.failure.multiple-suite-assignment` | `c9.escalation.registry-correction` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.006` | `c9.validation.006` | `c9.failure.failure-registry-drift` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.007` | `c9.validation.007` | `c9.failure.c2-registry-drift` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.008` | `c9.validation.008` | `c9.failure.c3-registry-drift` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.009` | `c9.validation.009` | `c9.failure.cv-registry-drift` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.010` | `c9.validation.010` | `c9.failure.operational-dev-total-mismatch` | `c9.escalation.count-reconciliation-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.011` | `c9.validation.011` | `c9.failure.operational-ho-total-mismatch` | `c9.escalation.count-reconciliation-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.012` | `c9.validation.012` | `c9.failure.cv-dev-total-mismatch` | `c9.escalation.count-reconciliation-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.013` | `c9.validation.013` | `c9.failure.cv-ho-total-mismatch` | `c9.escalation.count-reconciliation-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.014` | `c9.validation.014` | `c9.failure.per-row-count-drift` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.015` | `c9.validation.015` | `c9.failure.criticality-mismatch` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.016` | `c9.validation.016` | `c9.failure.floor-mismatch` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.017` | `c9.validation.017` | `c9.failure.expected-family-mismatch` | `c9.escalation.fixture-governance` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.018` | `c9.validation.018` | `c9.failure.expected-stage-mismatch` | `c9.escalation.fixture-governance` |
| ETAP Rev13 exact registry; Contract Violation reasons incorporated from historical ETAP Rev10; preserved by ETAP Rev15 and Rev16 | `c9.rule.019` | `c9.validation.019` | `c9.failure.reason-token-drift` | `c9.escalation.etap-authority-stop` |
| ETAP Rev13 exact registry preserved by ETAP Rev15 and Rev16 | `c9.rule.020` | `c9.validation.020` | `c9.failure.retryability-drift` | `c9.escalation.etap-authority-stop` |
| Contract 9 registry governance | `c9.rule.021` | `c9.validation.021` | `c9.failure.prohibited-set-incomplete` | `c9.escalation.registry-correction` |
| Contract 9 registry governance | `c9.rule.022` | `c9.validation.022` | `c9.failure.self-prohibition` | `c9.escalation.registry-correction` |
| Contract 9 registry governance | `c9.rule.023` | `c9.validation.023` | `c9.failure.suite-overlap` | `c9.escalation.registry-correction` |
| TDH Rev10 | `c9.rule.024` | `c9.validation.024` | `c9.failure.counting-duplication` | `c9.escalation.fixture-governance` |
| Contract 1 / scope governance | `c9.rule.025` | `c9.validation.025` | `c9.failure.ineligible-source` | `c9.escalation.security-stop` |
| Contract 1 / scope governance | `c9.rule.026` | `c9.validation.026` | `c9.failure.real-user-data-admission` | `c9.escalation.security-stop` |
| TDH Rev10 | `c9.rule.027` | `c9.validation.027` | `c9.failure.fabricated-identity` | `c9.escalation.security-stop` |
| TDH Rev10 | `c9.rule.028` | `c9.validation.028` | `c9.failure.lineage-crossover` | `c9.escalation.held-out-confidentiality-stop` |
| TDH Rev10 | `c9.rule.029` | `c9.validation.029` | `c9.failure.mixed-room-roomcase-fabrication` | `c9.escalation.security-stop` |
| TDH Rev10 | `c9.rule.030` | `c9.validation.030` | `c9.failure.image-count-inflation` | `c9.escalation.count-reconciliation-stop` |
| Contract 1 / scope governance | `c9.rule.031` | `c9.validation.031` | `c9.failure.category-count-inflation` | `c9.escalation.dependency-revalidation` |
| Contract 1 / scope governance | `c9.rule.032` | `c9.validation.032` | `c9.failure.namespace-collision` | `c9.escalation.upstream-contract-stop` |
| Contract 9 registry governance | `c9.rule.033` | `c9.validation.033` | `c9.failure.contract10-leakage` | `c9.escalation.contract10-stop` |
| Contract 9 registry governance | `c9.rule.034` | `c9.validation.034` | `c9.failure.contract11-leakage` | `c9.escalation.contract11-stop` |
| Contract 9 registry governance | `c9.rule.035` | `c9.validation.035` | `c9.failure.localization-incomplete` | `c9.escalation.localization-remediation` |
| Contract 9 registry governance | `c9.rule.036` | `c9.validation.036` | `c9.failure.source-identity-incomplete` | `c9.escalation.source-revalidation` |
| Contract 9 registry governance | `c9.rule.037` | `c9.validation.037` | `c9.failure.post-lock-mutation` | `c9.escalation.identity-governance` |
| Contract 9 registry governance | `c9.rule.038` | `c9.validation.038` | `c9.failure.learning-activation` | `c9.escalation.security-stop` |
| Contract 9 registry governance | `c9.rule.039` | `c9.validation.039` | `c9.failure.downstream-authorization-leak` | `c9.escalation.security-stop` |
| Contract 9 registry governance | `c9.rule.040` | `c9.validation.040` | `c9.failure.governance-state-false` | `c9.escalation.project-owner-decision-required` |
| Contract 9 registry governance | `c9.rule.041` | `c9.validation.041` | `c9.failure.post-result-mutation` | `c9.escalation.security-stop` |

The rule matrix is complete, not representative: 41 rules and 41 validations are explicitly mapped to 41 registry/governance failures. Section 26 additionally maps every non-PASS comparison outcome to one primary failure; 11 are comparison-specific and three reuse existing failures. All failures map to one of 14 escalation identities.


# 41. Examples and Counterexamples

| Subtype | Normative example boundary EN | Normative example boundary RU | Required result EN | Required result RU | Counterexample boundary EN | Counterexample boundary RU |
|---|---|---|---|---|---|---|
| `F-PROVIDER-TIMEOUT` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: The provider invocation does not return within the accepted bounded time window. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Вызов провайдера не возвращает результат в пределах принятого ограниченного временного окна. | Expected FailureResult at provider, reason provider.timeout, retryability c9.retryability.retryable-under-unchanged-locked-rule. | Ожидается FailureResult на этапе provider, причина provider.timeout, retryability c9.retryability.retryable-under-unchanged-locked-rule. | Counterexample: any outcome in c9.prohibited.001 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.001 либо любой неверный stage/reason. |
| `F-PROVIDER-MALFORMED` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: The C.1 adapter receives a provider response that cannot be parsed as a valid mechanism response. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Адаптер C.1 получает ответ провайдера, который невозможно разобрать как корректный ответ механизма. | Expected FailureResult at C.1, reason provider.malformed_response, retryability c9.retryability.mechanism-change-required. | Ожидается FailureResult на этапе C.1, причина provider.malformed_response, retryability c9.retryability.mechanism-change-required. | Counterexample: any outcome in c9.prohibited.002 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.002 либо любой неверный stage/reason. |
| `F-INPUT-UNREADABLE` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: Preprocessing cannot decode the supplied input artifact because it is unreadable or corrupt. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Предварительная обработка не может декодировать входной артефакт, поскольку он нечитаем или повреждён. | Expected FailureResult at preprocessing, reason input.unreadable, retryability c9.retryability.input-replacement-required. | Ожидается FailureResult на этапе preprocessing, причина input.unreadable, retryability c9.retryability.input-replacement-required. | Counterexample: any outcome in c9.prohibited.003 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.003 либо любой неверный stage/reason. |
| `F-INPUT-UNSUPPORTED` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: Preprocessing decodes the artifact envelope but the encoding or payload type is unsupported. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Предварительная обработка декодирует оболочку артефакта, но кодировка или тип полезной нагрузки не поддерживается. | Expected FailureResult at preprocessing, reason input.unsupported, retryability c9.retryability.input-replacement-required. | Ожидается FailureResult на этапе preprocessing, причина input.unsupported, retryability c9.retryability.input-replacement-required. | Counterexample: any outcome in c9.prohibited.004 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.004 либо любой неверный stage/reason. |
| `C2-MISSING-ROOM-CANDIDATE` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: The C.1 candidate contains no Room candidate required for C.2 normalization. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Кандидат C.1 не содержит кандидата Room, обязательного для нормализации C.2. | Expected RejectedResult at C.2, reason c2.room.missing_candidate, retryability c9.retryability.artifact-or-mechanism-correction-required. | Ожидается RejectedResult на этапе C.2, причина c2.room.missing_candidate, retryability c9.retryability.artifact-or-mechanism-correction-required. | Counterexample: any outcome in c9.prohibited.005 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.005 либо любой неверный stage/reason. |
| `C2-DUPLICATE-NODE-ID` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: Two or more candidate nodes carry the same node identity. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Два или более узла-кандидата имеют один и тот же идентификатор узла. | Expected RejectedResult at C.2, reason c2.node.duplicate_id, retryability c9.retryability.artifact-or-mechanism-correction-required. | Ожидается RejectedResult на этапе C.2, причина c2.node.duplicate_id, retryability c9.retryability.artifact-or-mechanism-correction-required. | Counterexample: any outcome in c9.prohibited.006 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.006 либо любой неверный stage/reason. |
| `C2-DANGLING-REL-ENDPOINT` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: A candidate relation references a node identity absent from the candidate. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Связь-кандидат ссылается на идентификатор узла, отсутствующий в кандидате. | Expected RejectedResult at C.2, reason c2.relation.dangling_endpoint, retryability c9.retryability.artifact-or-mechanism-correction-required. | Ожидается RejectedResult на этапе C.2, причина c2.relation.dangling_endpoint, retryability c9.retryability.artifact-or-mechanism-correction-required. | Counterexample: any outcome in c9.prohibited.007 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.007 либо любой неверный stage/reason. |
| `C2-INVALID-CANDIDATE-GEOMETRY` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: Candidate geometry is structurally invalid under the accepted C.2 conformance boundary. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Геометрия кандидата структурно недопустима в принятой границе соответствия C.2. | Expected RejectedResult at C.2, reason c2.geometry.invalid, retryability c9.retryability.artifact-or-mechanism-correction-required. | Ожидается RejectedResult на этапе C.2, причина c2.geometry.invalid, retryability c9.retryability.artifact-or-mechanism-correction-required. | Counterexample: any outcome in c9.prohibited.008 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.008 либо любой неверный stage/reason. |
| `C3-SCHEMA-VERSION-MISMATCH` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: The final boundary declares a schema version that is absent from or unequal to the accepted schema-version identity for the governed operation; operation and image/asset identities are evaluated by separate entries. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Финальная граница объявляет отсутствующую или не совпадающую с принятой версию схемы для управляемой операции; identity операции и изображения/актива проверяются отдельными записями. | Expected RejectedResult at C.3, reason c3.general.schema_version, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.general.schema_version, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.009 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.009 либо любой неверный stage/reason. |
| `C3-OPERATION-ID-MISMATCH` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: The result `operationId` is absent or does not equal the executing Operation identity; schema-version and image/asset/input-set identities are evaluated by separate entries. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: `operationId` результата отсутствует или не совпадает с identity выполняемой Operation; версия схемы и identities изображения/актива/input-set проверяются отдельными записями. | Expected RejectedResult at C.3, reason c3.general.operation_identity, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.general.operation_identity, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.010 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.010 либо любой неверный stage/reason. |
| `C3-IMAGE-ID-MISMATCH` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: At least one applicable TDH-owned image/asset/input-set binding (`roomCaseId`, `inputSetId`, `sourceAssetId`, `imageAssetId` or contributing-image identity set) is absent, fabricated, contains an unexpected member or does not match the governed input; `operationId` is excluded and evaluated by `C3-OPERATION-ID-MISMATCH`. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Хотя бы одна применимая TDH-связка изображения/актива/input-set (`roomCaseId`, `inputSetId`, `sourceAssetId`, `imageAssetId` или набор contributing-image identities) отсутствует, сфабрикована, содержит неожиданный элемент либо не совпадает с управляемым входом; `operationId` исключён и проверяется записью `C3-OPERATION-ID-MISMATCH`. | Expected RejectedResult at C.3, reason c3.general.image_identity, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.general.image_identity, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.011 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.011 либо любой неверный stage/reason. |
| `C3-INVALID-RESULT-METADATA` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: Required non-identity final-result metadata is missing or structurally invalid after excluding schema version, Operation identity, image/asset/input-set identity, Room cardinality, confidence and provenance, each of which has its own fixed primary subtype. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Обязательные неидентификационные метаданные финального результата отсутствуют или структурно недопустимы после исключения версии схемы, identity Operation, identities изображения/актива/input-set, кардинальности Room, confidence и provenance, для каждого из которых существует отдельный primary subtype. | Expected RejectedResult at C.3, reason c3.general.result_metadata, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.general.result_metadata, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.012 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.012 либо любой неверный stage/reason. |
| `CV-MISSING-ROOM` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: A post-C.2 artifact subject to C.3 conformance contains zero Room nodes where exactly one is required. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Артефакт после C.2, подлежащий проверке соответствия C.3, содержит ноль узлов Room при требовании ровно одного. | Expected RejectedResult at C.3, reason c3.room.missing, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.room.missing, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.013 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.013 либо любой неверный stage/reason. |
| `CV-INVALID-ROOM-CARDINALITY` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: A post-C.2 artifact contains two or more Room nodes. Zero Room nodes are exclusively `CV-MISSING-ROOM` and cannot be classified here. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Артефакт после C.2 содержит два или более узла Room. Ноль узлов Room относится исключительно к `CV-MISSING-ROOM` и не может классифицироваться здесь. | Expected RejectedResult at C.3, reason c3.room.invalid_cardinality, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.room.invalid_cardinality, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.014 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.014 либо любой неверный stage/reason. |
| `CV-MISSING-CONFIDENCE` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: A confidence value required by Contract 5 is absent. A present but invalid value is exclusively `CV-INVALID-CONFIDENCE`. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Обязательное по Contract 5 значение confidence отсутствует. Присутствующее, но недопустимое значение относится исключительно к `CV-INVALID-CONFIDENCE`. | Expected RejectedResult at C.3, reason c3.confidence.missing, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.confidence.missing, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.015 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.015 либо любой неверный stage/reason. |
| `CV-INVALID-CONFIDENCE` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: A required confidence value is present but violates the accepted Contract 5 ordinal vocabulary or semantic constraints. Absence is exclusively `CV-MISSING-CONFIDENCE`. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Обязательное значение confidence присутствует, но нарушает принятую порядковую лексику или семантические ограничения Contract 5. Отсутствие относится исключительно к `CV-MISSING-CONFIDENCE`. | Expected RejectedResult at C.3, reason c3.confidence.invalid, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.confidence.invalid, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.016 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.016 либо любой неверный stage/reason. |
| `CV-MISSING-PROVENANCE` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: A provenance value required by Contract 4 is absent. A present but invalid value is exclusively `CV-INVALID-PROVENANCE`. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Обязательное по Contract 4 значение provenance отсутствует. Присутствующее, но недопустимое значение относится исключительно к `CV-INVALID-PROVENANCE`. | Expected RejectedResult at C.3, reason c3.provenance.missing, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.provenance.missing, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.017 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.017 либо любой неверный stage/reason. |
| `CV-INVALID-PROVENANCE` | Hypothetical LICENSED/SYNTHETIC/STAGED fixture satisfying trigger: A required provenance value is present but violates the accepted Contract 4 provenance/evidence semantics. Absence is exclusively `CV-MISSING-PROVENANCE`. | Гипотетическая fixture из LICENSED/SYNTHETIC/STAGED источника, удовлетворяющая trigger: Обязательное значение provenance присутствует, но нарушает принятые семантики provenance/evidence Contract 4. Отсутствие относится исключительно к `CV-MISSING-PROVENANCE`. | Expected RejectedResult at C.3, reason c3.provenance.invalid, retryability c9.retryability.artifact-correction-required. | Ожидается RejectedResult на этапе C.3, причина c3.provenance.invalid, retryability c9.retryability.artifact-correction-required. | Counterexample: any outcome in c9.prohibited.018 or any wrong stage/reason. | Контрпример: любой исход из c9.prohibited.018 либо любой неверный stage/reason. |

No row contains an actual fixture payload, image, credential, held-out ground truth or provider request.


# 42. Authority Gaps

```text
Open semantic authority gaps: 0
Documented historical provenance limitations: 1
```

The historical limitation is narrow and disclosed: ETAP Rev13 §12.4 incorporates the six exact Contract Violation reason codes from its Revision 10 predecessor, while no exact repository blob for that historical predecessor is present at the current checkpoint. This does not leave the current semantic authority open because accepted ETAP Rev13 performs the normative incorporation and ETAP Rev15/Rev16 preserve the fixture suite.

The previous claim that absence of a pre-existing granular registry authorized Contract 9 to invent a new taxonomy was invalid. ETAP Rev13, together with the explicit Rev15 and Rev16 preservation statements, resolves the authority: fixed subtype semantics and counts are imported; Preparation Plan Rev11 assigns Contract 9 registry ownership; Contract 9 registers the fixed rows without reopening them. Contract-10 identity-field alignment remains a future Contract 10 prerequisite and is not an Authority Gap inside Contract 9.


# 43. Mechanical Verification

```text
Canonical filename:
Supporting-Contract-9-Operational-and-Contract-Violation-Fixture-Subtype-Registry-Rev1.md

Top-level numbered sections: 46
Source identity rows: 24
Fixture suites: 4
Fixture registry entries: 18
Failure entries: 4
C.2 entries: 4
C.3 entries: 4
Contract Violation entries: 6
Operational development total: 16
Operational held-out total: 29
Contract Violation development total: 12
Contract Violation held-out total: 18
Retryability identities: 5
Prohibited-outcome sets: 18
Lifecycle identities: 12
Comparison outcomes: 15
Rules: 41
Validations: 41
Primary failures: 52
Escalations: 14
Markdown tables: 33
Markdown table structural errors: 0
Code-fence markers: 26
Balanced code fences: YES
Undefined c9.* references: 0
Duplicate stable-ID definitions: 0
Unused escalations: 0
Unresolved drafting-marker tokens: 0
Malformed Unicode replacement characters: 0
Trailing-whitespace lines: 0
Blank matrix cells: 0
Contract 10 schema definitions: 0
Contract 11 aggregation definitions: 0
Fixture instances created: 0
Corpus records created: 0
Annotations created: 0
Provider invocations: 0
Repository modifications: 0
```

The final line count, byte count and SHA-256 are calculated after this section is inserted. The document does not embed its own SHA-256, avoiding self-referential identity recursion.



# 44. Candidate-Lock Prerequisites and Downstream Dependency Impact

```text
Candidate Lock: NOT ISSUED
Candidate Lock ID: NOT RESERVED
Possible future pattern: C9-REV1-CL-001
Pattern status: NOT RESERVED / NOT ISSUED / NOT EFFECTIVE
```

Prerequisites: technical-review closure of the exact corrected byte identity under an explicitly authorized review route; closure of all BLOCKER/MAJOR/MINOR findings; explicit Project Owner acceptance; separate Candidate Lock authorization; exact filename/lines/bytes/SHA binding; separate repository-persistence authorization. For this exact Correction Cycle 7 identity, the technical-review prerequisite is satisfied only through the disclosed Project Owner reviewer-availability exception in §1.11; no external independence is claimed.

Contract 10 may later import 18 canonical subtype tokens, fixed reason tokens, five retryability meanings and 18 prohibited sets. `c9.entry.*` remains a Contract-9 trace identity unless a later authorized representation contract explicitly carries it as non-canonical trace metadata. Contract 11 may later consume sealed fixture-level comparison facts. Neither downstream contract is opened.


# 45. Final Draft Status

```text
Supporting Contract 9 Revision 1:
CORRECTION CYCLE 7
FULL PROJECT-OWNER-AUTHORIZED NON-INDEPENDENT ADVERSARIAL TECHNICAL REVIEW COMPLETED
TECHNICALLY REVIEW-CLOSED
READY FOR PROJECT OWNER ACCEPTANCE
KNOWN BLOCKER/MAJOR/MINOR FINDINGS IN THIS CORRECTED TEXT: 0
EXTERNAL INDEPENDENT REVIEW: NOT PERFORMED / NOT CLAIMED
PROJECT OWNER REVIEWER-AVAILABILITY EXCEPTION: APPLIED TO THIS EXACT IDENTITY ONLY
PROJECT OWNER ACCEPTANCE: NOT PERFORMED
CANDIDATE LOCK: NOT ISSUED
REPOSITORY PERSISTENCE: NOT AUTHORIZED / NOT PERFORMED

Contracts 1–8: CLOSURE-COMPLETE / NOT REOPENED
Contract 10: NOT AUTHORIZED / NOT OPENED
Contract 11: NOT AUTHORIZED / NOT OPENED
Fixture/corpus/annotation/provider/implementation activity: NOT AUTHORIZED / NOT PERFORMED
Controlled Learning: LEARNING-READY / NOT LEARNING-ACTIVE
```

Next required gate: explicit Project Owner review and possible acceptance of the exact corrected byte identity calculated after final write.


# 46. Closed Drafting Declaration

This Correction Cycle 7 Revision 1 contract preserves the accepted fixed fixture registry: four Failure subtypes, four C.2 subtypes, four C.3 subtypes and six Contract Violation subtypes, with exact fixed counts, expected result families, stages, reason tokens, retryability meanings, prohibited outcomes, CRITICAL status, floor 1.00 and suite disjointness.

The original draft's unsupported first-authorship claim and its 22-entry replacement taxonomy are removed. Contracts 1–8 are not reopened. ETAP Rev16 remains the controlling evaluation baseline; ETAP Rev13 §12.1–§12.4 is the accepted registry source, including §12.4's incorporation of the six historical ETAP Rev10 Contract Violation reason tokens, and is preserved by Rev15/Rev16; Preparation Plan Rev11 remains the registry-ownership and dependency authority. TDH Rev10 remains the identity/lineage owner. No fixture instance, corpus record, annotation, held-out subset, provider request, schema, code, implementation artifact, Candidate Lock or repository change was created.

Contract 10 and Contract 11 remain unopened. Controlled Learning remains learning-ready and not learning-active. The Project-Owner-authorized non-independent adversarial technical review of this exact identity is complete, all confirmed findings are closed, and the artifact is ready for explicit Project Owner acceptance consideration. No external independence is claimed.
