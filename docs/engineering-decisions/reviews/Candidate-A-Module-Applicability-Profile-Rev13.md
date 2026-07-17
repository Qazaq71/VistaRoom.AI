# VistaRoom AI — Candidate A Module Applicability Profile — Revision 13

```text
Document type: Module Applicability Profile
Policy basis: Module Completion and Sequencing Policy Rev4 §12
Status: ACCEPTED — PROJECT OWNER
Acceptance date: 2026-07-17
Primary Active Module: Bounded Room Understanding / Spatial Perception
Strategic placement: Track A — Spatial Perception
Current lifecycle state: ARCHITECTURE CYCLE IN PROGRESS
Prepared for: Project Owner — Nurlan
Preparation date: 2026-07-17
Revision lineage: Revision 13 replaces Proposed Revision 12
Repository persistence: AUTHORIZED AND COMPLETED
Downstream work: NOT AUTHORIZED
```

## 1. Strategic Purpose

The current bounded module exists to establish the governed spatial-understanding foundation of the future VistaRoom AI Interior Designer.

The accepted strategic platform ambition is to build VistaRoom AI into a full AI Interior Designer and a potential category-leading interior-design platform.

For this Primary Active Module, the following purpose statement is proposed for separate acceptance with this Profile:

> Transform one governed room image into a grounded, validated,
> uncertainty-aware and provenance-carrying spatial representation
> that can be safely consumed by future reasoning, design, editing,
> ergonomics, explanation, consistency and project-level intelligence modules.

The one-image/one-room/one-operation boundary limits current execution volume. It must not create an architectural dead end for future multi-view, project-level, Designer Intelligence or controlled-editing capabilities.

Forward compatibility means preserving extension paths, identities, versioning and consumer boundaries. It does not authorize or require implementation of those future capabilities inside the current module.

This Profile does not expand current implementation scope. It defines present closure obligations and future-compatibility obligations separately.

A matrix entry does not imply a standalone document. Shared accepted packages, decisions, tests and evidence may close multiple entries.

`CON-07` through `CON-10` and `COMPAT-01` are cross-contract and architecture-readiness acceptance criteria. They do not create new Contracts 12–15, open another Major Module or authorize separate architecture work. They may be closed through the accepted Contracts 1–10 package, its consolidated review and explicitly authorized compatibility evidence. The already-governed future Contract 11 remains a separate later requirement and is represented by `CON-12`.

## 2. Current Bounded Scope

```text
Included now:
one image;
one room;
one operation;
living room;
bedroom;
kitchen;
bathroom;
residential-first;
licensed, synthetic or deliberately staged sources only.

Excluded from current implementation:
real user or production-user photos;
multi-image and multi-view;
panoramas;
floor plans;
video;
whole-home reasoning;
3D reconstruction;
project memory;
Designer Intelligence;
Tracks B–H implementation.
```

Phase-1 completion does not automatically equal Module Closure. Full closure requires evidence for the unchanged bounded scope unless the Project Owner formally changes it under Policy Rev4 §14.

## 3. Mandatory Sequence

```text
Profile Acceptance
→ separate authorization for Supporting Contracts 1–10 drafting cycle
→ Contracts 1–9
→ Contract 10 identity-alignment Owner checkpoint
→ Contract 10
→ atomic Contracts 1–10 acceptance
→ Combined Diagnosability & Security Compatibility Assessment
→ Owner checkpoint on Assessment Criteria
→ one retrospective compatibility pass
→ AI Brain Diagnosability Architecture
→ Security Architecture Baseline
→ Diagnosability ↔ Security cross-check
→ Phase-1 Scope Decision / Execution Profile
→ Section 22 artifacts 1–7, 9–10
→ Tier 1 Corpus Preparation Authorization
```

Downstream corpus/evaluation sequence:

```text
authorized corpus preparation and development denominators
→ Contract 11 — Aggregation, Uncertainty and Score-Stability Appendix
→ Section 22 artifact 8 before held-out sealing
→ held-out sealing
→ Section 22 artifact 11 before first provider exposure under either
   provider-governance track
→ provider-selection evaluation gates
```

Contract 10 identity alignment blocks only Contract 10 drafting.

C.3 revalidation may begin after Contracts acceptance and must finish before Authorization for Implementation. The accepted Execution Profile may require it before Implementation Package acceptance.

## 4. Status and Authority Model

```text
Applicability:
Applicable / Not Applicable / Deferred / Conditional

State:
Completed / Partially Completed / Not Started /
Active Control / Deferred / Not Triggered / N/A

Authorization:
Authorized / Not Authorized / Not Required /
Conditional / Completed under prior authority

Transition Authority Classes — Policy Rev4 §7:
O — Project Owner Decision
R — Accepted Review Outcome
A — Authorized Assessor or Architect Certification
E — Evidence-Based Administrative Status
```

For complex requirements, authority is separated into:

- Start authority;
- Completion-evidence authority;
- Acceptance or lifecycle-transition authority.

No class substitutes for another.

## 5. Risk-Based Applicability Basis

| Domain | Relevant risk surfaces | AI-designer relevance | Applicability |
|---|---|---|---|
| Spatial contracts and semantic boundaries | integration; failure impact; user impact; persistence | Future design reasoning depends on stable, semantically correct scene facts | Applicable |
| Security and provider controls | attack; access; external exposure; provider interaction | External AI providers and future real project assets create direct platform risk | Applicable |
| Privacy and governed data | data; privacy; persistence; provider interaction | Future user-room images and project history require enforceable retention/deletion boundaries | Applicable |
| Diagnosability and operational readiness | operational criticality; failure impact; user impact | Undetected perception errors can corrupt downstream design decisions | Applicable |
| Schema evolution and forward compatibility | integration; persistence; user impact | Long-lived projects and future AI-designer modules must consume older results safely | Applicable |
| Controlled test/staging execution | integration; access; external exposure | May be needed for governed proof execution | Conditional |
| Production deployment | external exposure; persistence; operational criticality | Not required to close the current bounded module | Not Applicable now |

`RISK-01` requires this rationale to be accepted as part of the Profile. The matrix applies these conclusions to specific closure areas.

## 6. Policy Rev4 Coverage Map

| Policy area | Exact reference | Stable Profile reference | Result |
|---|---|---|---|
| Primary Active Module identity and purpose | Policy Rev4 §§5.2, 8.2; §11 item 1; Annex A.1 | BASE-00–BASE-02 including BASE-00A | Covered |
| Lifecycle model and progression | Policy Rev4 §§6–8; Annex A.3 | LIFE-01–LIFE-09, PROV-01–PROV-05, CLOSE-01–CLOSE-04, GOV-02 | Covered |
| Transition Authority Classes | Policy Rev4 §7 | §4 and matrix authority columns | Covered |
| Remediation States | Policy Rev4 §9 | GOV-05, EVAL-02 | Covered |
| Control States | Policy Rev4 §10 | GOV-06 | Covered |
| Universal Module Closure Requirements | Policy Rev4 §11 items 1–15 | BASE, RISK, CON, XSEC, LIFE, DATA, SEC, PROV, IMPL, OPS, EVAL, CLOSE and GOV-02 entries | Covered |
| Module Applicability Profile dimensions | Policy Rev4 §12.2 | CON, XSEC, DATA, SEC, PROV, IMPL, OPS, DEPLOY, EVAL and CLOSE entries | Covered |
| Risk-based applicability | Policy Rev4 §12.3 | §5 and RISK-01 | Covered |
| Module-specific sequence precedence | Policy Rev4 §13; Annex A.5 | §3 and §12 | Covered |
| Bounded Scope Change Control | Policy Rev4 §14 | §2, IMPL-04, EVAL-01, GOV-03, COMPAT-01 | Covered |
| Cross-Cutting Dependencies | Policy Rev4 §15 | XSEC-01–XSEC-11, DATA-01–DATA-08, SEC-01–SEC-02 | Covered |
| Parallel Major-Module Work Prohibition | Policy Rev4 §16 | GOV-04 | Covered |
| Owner-Authorized Exception Workstream | Policy Rev4 §17 | GOV-07 | Covered |
| Temporary Multi-Module Exception | Policy Rev4 §18 | GOV-08 | Covered |
| Residual Risk Acceptance | Policy Rev4 §19 | CLOSE-03 | Covered |
| Closure Process | Policy Rev4 §20 | CLOSE-01–CLOSE-04 | Covered |
| Post-Closure Governance Completion | Policy Rev4 §§20.3, 21 | GOV-02 | Covered |
| Opening next Primary Active Module | Policy Rev4 §22 | GOV-02 | Covered |
| Substantive Review Rule | Policy Rev4 §23 | External consolidated review record; not embedded in Profile | Covered |
| Non-Authorization boundary | Policy Rev4 §24; Annex A.9 | §15 | Covered |
| Hard Security Stop | Annex A.6; Roadmap Amendment 2026-07-16 | DATA-04–DATA-08, SEC-01–SEC-02, PROV-06–PROV-08 | Covered |

## 7. Section 22 Artifact Boundary

The authoritative Section 22 artifacts are:

1. Test Data Source and License Register template.
2. Asset Eligibility Record schema.
3. Privacy Screening Procedure.
4. Corpus Storage and Access Matrix.
5. Lineage and Near-Duplicate Control Procedure.
6. Transformation Registry schema.
7. Corpus Manifest and Versioning Contract.
8. Held-Out Sealing Procedure.
9. Retention and Deletion Schedule.
10. Data Incident Procedure.
11. Provider Exposure and Deletion Log schema.

Gate binding:

- artifacts 1–7 and 9–10: accepted and version-locked before Tier 1 Corpus Preparation Authorization;
- artifact 8: accepted before held-out sealing;
- artifact 11: accepted before first provider exposure under either provider-governance track;
- Contract 11 is not Section 22 artifact 11 and remains separately excluded from the current Contracts 1–10 cycle.

This Profile does not prepare or rename these artifacts.

## 8. Applicability Matrix

| ID | Requirement / State | Source | Applicability | State | Authorization | Item Category | Completion point | Evidence | Start | Completion | Acceptance/transition | Blocking | Current compliance |
|---|---|---|---|---|---|---|---|---|:---:|:---:|:---:|:---:|---|
| BASE-00 | Accepted strategic platform ambition | Project Context v2.4; Roadmap v1.4 | Applicable | Completed | Completed under prior authority | Pre-Closure Requirement | Already satisfied | VistaRoom AI full AI Interior Designer and category-leading platform ambition | — | — | O | No | Satisfied |
| BASE-00A | Candidate A module-purpose statement | This Profile; accepted strategic ambition; Bounded Scope Rev3 | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Closed by Project Owner Acceptance of this Profile | Accepted module-purpose statement linking bounded perception to future reasoning, design, editing, ergonomics, explanation, consistency and project intelligence | — | A → R | O | Yes | Proposed in this Profile |
| BASE-01 | Accepted module identity and bounded scope | Candidate A Bounded Scope Decision Rev3; Policy Rev4 §§5.2, 14 | Applicable | Completed | Completed under prior authority | Pre-Closure Requirement | Already satisfied | Accepted bounded scope and exclusions | — | — | O | No | Satisfied |
| BASE-02 | Core Candidate A mechanism and boundary decisions | Perception Mechanism Rev3 | Applicable | Completed | Completed under prior authority | Pre-Closure Requirement | Already satisfied | Accepted Class B mechanism, evidence boundary and outcome model | — | — | O | No | Satisfied |
| BASE-03 | Evaluation thresholds and acceptance criteria | Threshold Plan Rev13 | Applicable | Completed | Completed under prior authority | Pre-Closure Requirement | Already satisfied at governance level | Accepted Rev13 | — | — | O | No | Satisfied |
| BASE-04 | Test-data governance baseline | Test Data Handling Rev9 | Applicable | Completed | Completed under prior authority | Pre-Closure Requirement | Already satisfied at governance level | Accepted Rev9 | — | — | O | No | Satisfied |
| BASE-05 | Existing C.3 structural validator for Gate 2 scope | Gate 2 Step 5; Gate 2 Closure Review | Applicable | Completed | Completed under prior authority | Pre-Closure Requirement | Already satisfied for Gate 2 scope | Existing code and tests | — | A | R | No | Satisfied |
| RISK-01 | Risk-based applicability basis | Policy Rev4 §12.3 | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Closed by Project Owner Acceptance of this Profile | Accepted applicability rationale covering attack, data, access, integration, external exposure, operational criticality, failure impact, privacy impact, user impact, provider interaction and persistence | O | A | O | Yes | Open |
| CON-01 | Supporting Contracts 1–10 | Contracts Plan Rev4; Policy Rev4 §11 item 4 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Architectural Readiness | Atomic consolidated acceptance of Contracts 1–10 | O | A → R | O | Yes | Open |
| CON-02 | Contract 10 identity alignment | Contracts Plan Rev4 §§3.1, 7 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before normative drafting of Contract 10 | Explicit Owner checkpoint | — | — | O | Yes | Open |
| CON-03 | PerceptionEvidenceArtifact contract and implementation | Perception Mechanism Rev3 | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Contract before Architectural Readiness; implementation before Practical Completion | Accepted contract and passing tests | O | A → R | O | Yes | Open |
| CON-04 | PerceptionResult contract and implementation | Perception Mechanism Rev3 | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Contract before Architectural Readiness; implementation before Practical Completion | Accepted contract and passing tests | O | A → R | O | Yes | Open |
| CON-05 | Confidence contract and propagation | Perception Mechanism Rev3 | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Contract before Architectural Readiness; implementation before Practical Completion | Accepted confidence semantics and propagation tests | O | A → R | O | Yes | Open |
| CON-06 | Provenance contract and propagation | Perception Mechanism Rev3; Rev9 | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Contract before Architectural Readiness; implementation before Practical Completion | Accepted provenance contract and lineage tests | O | A → R | O | Yes | Open |
| CON-07 | Observation / inference / design-judgment separation | Candidate A boundaries; future Designer Intelligence boundary | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Architectural Readiness | Normative layer separation, claim-level provenance and tests preventing design-judgment leakage into perception output | O | A → R | O | Yes | Open |
| CON-08 | Downstream consumer usability contract | Strategic AI Designer architecture; Candidate A boundaries | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Architectural Readiness | Consumer-facing guarantees/non-guarantees, stable identities, unknown semantics and fixture proving downstream reasoning can consume results without hidden provider state | O | A → R | O | Yes | Open |
| CON-09 | Schema evolution and compatibility | StructuredScene v0; long-term project architecture | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Architectural Readiness | Versioning, additive/breaking-change rules, migration responsibility, old-result readability, unsupported-version handling and compatibility tests | O | A → R | O | Yes | Open |
| CON-10 | Explainability readiness | Evidence/confidence/provenance boundaries; future Designer Intelligence | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Architectural Readiness | Evidence references, uncertainty, provenance and reason codes sufficient for future explainable design reasoning | O | A → R | O | Yes | Open |
| CON-11 | C.3 revalidation against final Contracts 1–10 | Contracts Plan Rev4; Policy Rev4 §13 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | No later than before Authorization for Implementation; Execution Profile may require earlier | Revalidation report, passing tests and required extensions | O | A | R | Yes | Open |
| XSEC-01 | Combined Diagnosability & Security Compatibility Assessment | Roadmap Amendment 2026-07-16; Policy Rev4 §15 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Immediately after Contracts 1–10 acceptance | Accepted combined assessment | O | A → R | O | Yes | Open |
| XSEC-02 | Owner checkpoint on assessment criteria | Roadmap Amendment 2026-07-16 | Applicable | Not Started | Not Authorized | Lifecycle Transition | Before retrospective compatibility pass | Explicit Owner Decision | — | — | O | Yes | Open |
| XSEC-03 | One retrospective compatibility pass | Roadmap Amendment 2026-07-16 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After Owner checkpoint | One consolidated accepted report | O | A | R | Yes | Open |
| XSEC-04 | AI Brain Diagnosability Architecture | Roadmap Amendment 2026-07-16; Policy Rev4 §12.2 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After retrospective pass | Accepted diagnosability architecture | O | A | O | Yes | Open |
| XSEC-05 | Security Architecture Baseline | Roadmap Amendment 2026-07-16; Policy Rev4 §12.2 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After Diagnosability Architecture | Accepted security baseline | O | A | O | Yes | Open |
| XSEC-06 | Diagnosability ↔ Security cross-check | Roadmap Amendment 2026-07-16 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After both architectures | Accepted cross-check | O | A → R | O | Yes | Open |
| XSEC-07 | Phase-1 Scope Decision / Execution Profile | Roadmap Amendment 2026-07-16; Policy Rev4 §§13–14 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After cross-check | Explicit Owner acceptance | — | — | O | Yes | Open |
| XSEC-08 | Section 22 data-governance artifacts 1–7, 9–10 | Test Data Handling Rev9 §22; Roadmap Amendment 2026-07-16 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Tier 1 Corpus Preparation Authorization | Accepted artifact package; artifact 8 / Contract 11 remains excluded | O | A → R | O | Yes | Open |
| CON-12 | Future Contract 11 — Aggregation, Uncertainty and Score-Stability Appendix | Threshold Plan Rev13 §5.2; Test Data Handling Rev9 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After development denominators exist and before held-out sealing/formal evaluation | Accepted Contract 11 using actual development denominators | O | A → R | O | Yes | Open |
| XSEC-10 | Section 22 artifact 8 — Held-Out Sealing Procedure | Test Data Handling Rev9 §22 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before held-out sealing | Accepted and version-locked Held-Out Sealing Procedure, including required allocation/seal controls | O | A → R | O | Yes | Open |
| XSEC-11 | Section 22 artifact 11 — Provider Exposure and Deletion Log schema | Test Data Handling Rev9 §22 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before first provider exposure under either provider-governance track | Accepted and version-locked provider exposure/deletion logging schema | O | A → R | O | Yes | Open |
| XSEC-09 | Cross-cutting dependency compliance rule | Policy Rev4 §15 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before any cross-cutting work begins | Traceability, bounded scope, no standalone capability expansion, explicit stop condition, Hard Security Stop compliance and no Module-Completion-First bypass | O | A → R | O | Yes | Open |
| LIFE-01 | Architectural Readiness determination | Policy Rev4 §§8.4–8.5; §11 items 1–5 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After all architecture-readiness prerequisites close | Explicit Architecturally Ready transition for this module | — | A → R | O | Yes | Open |
| LIFE-02 | Authorization for Implementation Preparation | Policy Rev4 §§8.5–8.6; §11 item 6; accepted Candidate A sequence | Applicable | Not Started | Not Authorized | Lifecycle Transition | After Architectural Readiness, provider/model selection, provider-specific pre-package decision and required prerequisites | Explicit Owner authorization | — | — | O | Yes | Open |
| LIFE-03 | Implementation Preparation Complete | Policy Rev4 §8.7; §11 item 6 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After accepted Implementation Package | Accepted completion determination | — | A | R | Yes | Open |
| LIFE-04 | Authorization for Implementation | Policy Rev4 §§8.7–8.8; §11 item 7 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After Implementation Preparation Complete, C.3 revalidation and pre-implementation controls | Explicit Owner authorization | — | — | O | Yes | Open |
| LIFE-05 | Implementation In Progress status | Policy Rev4 §8.8 | Applicable | Not Started | Not Authorized | Lifecycle Transition | At actual start of authorized implementation | Administrative status record | — | E | — | Yes | Open |
| LIFE-06 | Practical Completion determination | Policy Rev4 §§8.10–8.11; §11 items 7–9 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After implementation-readiness evidence closes | Technical certification followed by accepted Practical Completion review outcome | — | A | R | Yes | Open |
| LIFE-07 | Authorization for Formal Module Evaluation | Policy Rev4 §§8.11–8.12; §11 item 10 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After Practical Completion | Explicit Owner authorization | — | — | O | Yes | Open |
| LIFE-08 | Formal Module Evaluation In Progress status | Policy Rev4 §8.12 | Applicable | Not Started | Not Authorized | Lifecycle Transition | At start of authorized formal module evaluation | Administrative status record | — | E | — | Yes | Open |
| LIFE-09 | Formal Module Evaluation Passed / Failed | Policy Rev4 §§8.13–8.14; §11 item 10 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After formal module evaluation | Accepted evaluation outcome | — | A | R | Yes | Open |
| DATA-01 | Tier 1 corpus preparation and held-out sealing | Rev9; mandatory sequence | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After Section 22 artifacts and corpus authorization | Versioned corpus, source rights, split, sealing, lineage, retention and deletion controls | O | E → A | R | Yes | Open |
| DATA-02 | Annotation governance and quality | Policy Rev4 §12.2; Rev9; Threshold Plan Rev13 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before corpus acceptance and provider evaluation | Annotation ontology, guidance, annotator qualification, disagreement/adjudication, versioning, correction history, balance and held-out annotation isolation | O | A | R | Yes | Open |
| DATA-03 | Provider-selection evaluation harness readiness | Threshold Plan Rev13; existing harness | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Before Provider-Selection Evaluation Authorization | Versioned harness, implemented metrics and reproducibility check | O | A | R | Yes | Open |
| DATA-04 | Evaluation-Time Provider Exposure Clearance — per candidate | Test Data Handling Rev9 Layer 2B | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before any development or held-out exposure to that candidate | Candidate-specific retention/deletion terms, subprocessors, provider-account audit controls and approved exposure boundary | O | A → R | O | Yes | Open |
| DATA-05 | Audit and evaluation trace | Rev9; Threshold Plan Rev13; Policy Rev4 §12.2 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before provider evaluation and continuously through closure | Trace of data, provider/model, prompts, metrics, versions, decisions and results | O | E → A | R | Yes | Open |
| DATA-06 | Evaluation-time incident handling | Rev9; Security Baseline | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Provider-Selection Evaluation | Stop, classification, escalation, evidence preservation, wrong-track handling and reauthorization rules | O | A | R | Yes | Open |
| DATA-08 | Synthetic Source Generation Provider track applicability | Test Data Handling Rev9 §§16.0–16.0.2; permitted synthetic source class | Conditional | Not Triggered | Not Authorized | Conditional Governance | Only if external synthetic-source generation is used | Separate source-generation authorization/clearance, track-specific configuration identity, exposure record, lineage, retention/deletion and wrong-track incident controls | O | A → R | O | Conditional | Not triggered |
| SEC-01 | Pre-evaluation security gate | Hard Security Stop; Roadmap Amendment 2026-07-16 | Applicable | Active Control | Not Authorized | Active Control | Before provider-selection evaluation invocation | Security Baseline, DATA-04 clearances, held-out controls, audit/incident readiness and explicit evaluation authorization | — | A | O | Yes | Active; not yet due |
| PROV-01 | Authorization for Provider-Selection Evaluation | Bounded Scope Rev3; Policy Rev4 §7.1 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After corpus, harness, audit, incident and security prerequisites | Explicit Owner authorization | — | — | O | Yes | Open |
| PROV-02 | Provider-Selection Evaluation In Progress status | Policy lifecycle model | Applicable | Not Started | Not Authorized | Lifecycle Transition | At start of authorized candidate evaluation | Administrative status and invocation audit | — | E | — | Yes | Open |
| PROV-03 | Provider-Selection Evaluation completion | Threshold Plan Rev13 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Comparative Assessment | Reproducible candidate results and nondisclosure evidence | — | E → A | — | Yes | Open |
| PROV-04 | Provider/Model Comparative Assessment | Bounded Scope Rev3; Threshold Plan Rev13 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After candidate evaluation completion | Accepted comparative assessment and recommendation | O | A | R | Yes | Open |
| PROV-05 | Project Owner Provider/Model Selection | Bounded Scope Rev3; Policy Rev4 §7.1 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After Comparative Assessment | Explicit Owner selection | — | — | O | Yes | Open |
| PROV-06 | Selected-provider privacy, retention and deletion decision | Rev9 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After selection and before Implementation Preparation authorization | Accepted decision covering retention, deletion deadline/verification, subprocessors, training/reuse prohibition, account auditability and incident obligations | O | A → R | O | Yes | Open |
| PROV-07 | Selected-provider package assumptions | Provider selection; future Implementation Package | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Implementation Preparation authorization | Stable provider interface, capability, rate-limit, cost and configuration assumptions needed to prepare the package | O | A | R | Yes | Open |
| PROV-08 | Selected-provider secrets and access controls | Security Baseline; Execution Profile | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Authorization for Implementation | Verified credentials, least privilege, access rotation and environment separation | O | A | R | Yes | Open |
| DATA-07 | Selected-provider/module-runtime incident handling | Security Baseline; Execution Profile | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Authorization for Implementation | Runtime/provider incident classification, safe stop, escalation, recovery and evidence procedure | O | A | R | Yes | Open |
| SEC-02 | Post-selection provider-use security gate | Hard Security Stop; Roadmap Amendment 2026-07-16 | Applicable | Active Control | Not Authorized | Active Control | Before selected-provider use in authorized implementation or bounded proof execution | PROV-06, PROV-08, DATA-05, DATA-07 and applicable Execution Profile controls complete; explicit authorization | — | A | O | Yes | Active; not yet due |
| IMPL-01 | Implementation Package preparation | Policy Rev4 §§8.6–8.7 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | After Authorization for Implementation Preparation | Complete package with traceability to accepted architecture, provider assumptions and controls | O | E → A | R | Yes | Open |
| IMPL-02 | Bounded implementation and contract tests | Policy Rev4 §11 items 7–9 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Practical Completion | Merged code, traceability and passing contract tests | O | E → A | R | Yes | Open |
| IMPL-03 | Bounded-module evaluation harness integration | Threshold Plan Rev13; existing harness | Applicable | Partially Completed | Not Authorized | Pre-Closure Requirement | Before Practical Completion | Integrated reproducible harness; shared foundation is not double-counted as a separate completed deliverable | O | A | R | Yes | Open |
| IMPL-04 | Full bounded-scope implementation readiness | Bounded Scope Rev3; Policy Rev4 §14 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Practical Completion | Implemented/testable support for four room types, one-image/one-room/one-operation boundary, allowed sources, excluded-input rejection, all outcomes and evidence/confidence/provenance paths | O | A | R | Yes | Open |
| OPS-01 | Bounded operational readiness | Policy Rev4 §12.2; Diagnosability/Security baselines; Execution Profile | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Practical Completion | Structured logging, diagnostic events, controlled failure paths, timeout/retry policy, provider outage handling, rejection behavior, safe stop, correlation IDs and runtime health indicators | O | A | R | Yes | Open |
| IMPL-05 | Controlled test/staging execution applicability | Execution Profile | Conditional | Not Triggered | Not Authorized | Conditional Governance | Only if required by Execution Profile | Authorized controlled environment with applicable security, audit and data controls | O | A | R | Conditional | Not triggered |
| DEPLOY-01 | Production deployment applicability | Policy Rev4 §12.2 | Not Applicable | N/A | Not Required | Not Applicable | Not required for current Module Closure | Current closure target is a governed demonstrable prototype; production deployment requires separate future authorization | — | — | O | No | Not applicable |
| EVAL-01 | Formal full bounded-scope evaluation evidence | Threshold Plan Rev13; Bounded Scope Rev3 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | During Formal Module Evaluation | Verified results for all four room types, source/input boundaries, semantic-truth thresholds, all four outcomes and evidence/confidence/provenance behavior | — | A | R | Yes | Open |
| EVAL-02 | Formal Evaluation Failed remediation branch | Policy Rev4 §§8.14, 9, 10 | Conditional | Not Triggered | Not Authorized | Conditional Governance | If Formal Module Evaluation fails | Finding classification, impact/integrity assessment, Owner decision on remediation/scope change/suspension/termination and separate re-evaluation authorization | — | A → R | O | Conditional | Not triggered |
| CLOSE-01 | Closure Readiness Review | Policy Rev4 §§8.15–8.16, 20.1 | Applicable | Not Started | Not Authorized | Closure Control | After Evaluation Passed and all blockers close | Accepted CLOSURE READY review outcome | — | R | — | Yes | Open |
| CLOSE-02 | Closure Ready state | Policy Rev4 §§8.16–8.17 | Applicable | Not Started | Not Authorized | Lifecycle Transition | After accepted Closure Readiness Review | Closure Ready status | — | R | — | Yes | Open |
| CLOSE-03 | Residual Risk Disposition | Policy Rev4 §§19, 20.1 | Applicable | Not Started | Not Authorized | Closure Control | Before Module Closure Decision | Explicit Owner acceptance or confirmation of no residual risks | — | — | O | Yes | Open |
| CLOSE-04 | Module Closure Decision | Policy Rev4 §§8.17, 20.2 | Applicable | Not Started | Not Authorized | Terminal Event | After Closure Ready and residual-risk disposition | Explicit Owner Acceptance | — | — | O | No | Open |
| GOV-01 | Routine documentation drift / metadata hygiene | Project Context v2.4 §18 | Deferred | Deferred | Not Authorized | Deferred Non-Blocking | Only through separate synchronization authorization | No Module Closure evidence required | O | A → R | — | No | Deferred |
| GOV-02 | Post-closure authoritative synchronization | Policy Rev4 §§20.3, 21–22 | Applicable | Not Started | Not Authorized | Post-Closure Gate | After Module Closure and before next-module selection | Context/Roadmap/traceability synchronization | O | E → A | R | No | Open |
| GOV-03 | Future capability implementation exclusions | Bounded Scope Rev3; Policy Rev4 §14 | Not Applicable | N/A | Not Required | Not Applicable | N/A | Multi-view, whole-home, 3D, project memory, Designer Intelligence and Tracks B–H implementation remain outside current module | — | — | O | No | Not applicable |
| COMPAT-01 | Forward compatibility with future AI-designer modules | Strategic AI Designer goal; Project Context v2.4 | Applicable | Not Started | Not Authorized | Pre-Closure Requirement | Before Architectural Readiness | No architectural dead end for Project/Room/RoomView/ImageAsset identities, multi-view evolution, project memory, Designer Intelligence or controlled editing | O | A → R | O | Yes | Open |
| GOV-04 | Parallel Major-Module Work Prohibition | Policy Rev4 §16 | Applicable | Active Control | Not Required | Active Control | Throughout current module lifecycle | Evidence that no second Primary Active Module is opened without valid §17 or §18 exception | — | E/R | O | Yes | Active; currently satisfied |
| GOV-05 | Remediation States | Policy Rev4 §9 | Conditional | Not Triggered | Conditional | Conditional Governance | If a remediation condition is triggered | Owner-authorized remediation, technical completion evidence, accepted revalidation and explicit next-state decision | O | A → R | O | Conditional | Not triggered |
| GOV-06 | Control States | Policy Rev4 §10 | Conditional | Not Triggered | Conditional | Conditional Governance | If invoked | Explicit control-state decision and consequences | — | — | O | Conditional | Not triggered |
| GOV-07 | Owner-Authorized Exception Workstream | Policy Rev4 §17 | Conditional | Not Triggered | Not Authorized | Conditional Governance | Only by separate Owner Decision | Bounded exception and expiry/closure conditions | — | — | O | Conditional | Not triggered |
| GOV-08 | Temporary Multi-Module Exception | Policy Rev4 §18 | Conditional | Not Triggered | Not Authorized | Conditional Governance | Only by separate Owner Decision | Exception decision and reconciliation plan | — | — | O | Conditional | Not triggered |

## 9. Architectural Readiness and Future Compatibility

`ARCHITECTURALLY READY` may be determined only after:

- Contracts 1–10 are accepted;
- the mandatory Diagnosability/Security sequence through cross-check is complete;
- the Phase-1 Execution Profile is accepted;
- all architecture-readiness prerequisites assigned by that Profile are closed;
- identity and dependency conflicts are closed;
- traceability is confirmed;
- no blocking architecture findings remain;
- downstream consumer usability, schema evolution, explainability readiness and forward compatibility are accepted.

Operational Section 22 artifacts may close after Architectural Readiness but before Corpus Preparation Authorization only when the accepted Execution Profile explicitly permits this.

Contract 11 and Section 22 artifact 8 are later pre-held-out-sealing requirements, not Architectural Readiness prerequisites. Section 22 artifact 11 is a pre-first-provider-exposure requirement.

## 10. Cross-Cutting Dependency Rule

Every XSEC, DATA, SEC and provider-support activity must:

1. have direct traceability to closure of this module;
2. have a separately authorized bounded scope where Policy requires;
3. avoid creating an independent platform capability;
4. avoid unlimited foundation work;
5. avoid expanding implementation scope;
6. have a defined closure condition and stop point;
7. stop after accepted closure evidence;
8. comply with the Hard Security Stop;
9. require new authorization for any expansion;
10. avoid bypassing Module-Completion-First.

## 11. Provider and Security Gates

If an external provider is used to generate synthetic corpus sources, DATA-08 applies as a separate provider-governance track. Its authorization, clearance, configuration identity and exposure records cannot substitute for the Perception Evaluation Provider track.

Before any provider exposure under either provider-governance track:

- XSEC-11 Provider Exposure and Deletion Log schema accepted.

Before any perception-evaluation provider candidate receives development or held-out data:

- DATA-04 per-candidate clearance;
- DATA-05 audit trace;
- DATA-06 evaluation incident handling;
- sealed corpus and held-out controls;
- SEC-01;
- explicit Provider-Selection Evaluation Authorization.

After provider selection:

**Before Implementation Preparation authorization**

- PROV-06 provider-specific privacy/retention/deletion decision;
- PROV-07 stable provider package assumptions.

**Before Authorization for Implementation or bounded proof execution**

- PROV-08 secrets/access controls;
- DATA-07 runtime incident handling;
- DATA-05 active audit trace;
- SEC-02;
- applicable Execution Profile controls.

“Bounded proof execution” means explicitly authorized execution of the implemented bounded module for evidence generation. It is not production deployment.

## 12. Lifecycle and Failure Branches

```text
Accepted Profile
→ Contracts cycle and atomic acceptance
→ mandatory Diagnosability/Security sequence
→ Architectural Readiness
→ authorized corpus preparation and development denominators
→ Contract 11
→ artifact 8 and held-out sealing
→ artifact 11 before first provider exposure
→ governed Provider-Selection Evaluation
→ Comparative Assessment
→ Owner Provider/Model Selection
→ provider-specific pre-package controls
→ Authorization for Implementation Preparation
→ Implementation Package
→ Implementation Preparation Complete
→ pre-implementation controls and C.3 revalidation
→ Authorization for Implementation
→ implementation, tests and bounded operational readiness
→ Practical Completion
→ Authorization for Formal Module Evaluation
→ Formal Module Evaluation
```

```text
Evaluation Passed
→ Closure Readiness Review
→ Closure Ready
→ Residual Risk Disposition
→ Module Closure Decision
→ Post-Closure Governance Complete
```

```text
Evaluation Failed
→ EVAL-02 remediation branch
→ finding classification
→ impact and evaluation-integrity assessment
→ Owner decision:
   remediation / scope change / suspension / termination
→ separate authorization before re-evaluation
```

## 13. Classification and Reconciliation

```text
Total matrix entries: 80

Fully satisfied: 6
BASE-00, BASE-01, BASE-02, BASE-03, BASE-04, BASE-05

Partially satisfied: 8
BASE-00A, RISK-01, CON-03, CON-04, CON-05, CON-06, DATA-03, IMPL-03

Open pre-closure / lifecycle: 49
CON-01, CON-02, CON-07, CON-08, CON-09, CON-10, CON-11, XSEC-01, XSEC-02, XSEC-03, XSEC-04, XSEC-05, XSEC-06, XSEC-07, XSEC-08, CON-12, XSEC-10, XSEC-11, XSEC-09, LIFE-01, LIFE-02, LIFE-03, LIFE-04, LIFE-05, LIFE-06, LIFE-07, LIFE-08, LIFE-09, DATA-01, DATA-02, DATA-04, DATA-05, DATA-06, PROV-01, PROV-02, PROV-03, PROV-04, PROV-05, PROV-06, PROV-07, PROV-08, DATA-07, IMPL-01, IMPL-02, IMPL-04, OPS-01, EVAL-01, CLOSE-02, COMPAT-01

Active controls: 3
SEC-01, SEC-02, GOV-04

Closure controls: 2
CLOSE-01, CLOSE-03

Terminal event: 1
CLOSE-04

Deferred non-blocking: 1
GOV-01

Post-closure gate: 1
GOV-02

Not applicable: 2
DEPLOY-01, GOV-03

Conditional / not triggered: 7
DATA-08, IMPL-05, EVAL-02, GOV-05, GOV-06, GOV-07, GOV-08

Reconciliation total: 80
```

Every stable ID appears once and belongs to exactly one classification category.

## 14. Module Closure Conditions

Module Closure requires:

1. accepted strategic purpose and bounded scope;
2. all Applicable pre-closure requirements completed;
3. all active controls satisfied at their lifecycle points;
4. Contracts 1–10 atomically accepted;
5. Architectural Readiness determined;
6. downstream-consumer, schema-evolution, explainability and future-compatibility requirements accepted;
7. mandatory Diagnosability/Security sequence completed;
8. corpus and annotation governance completed;
9. Contract 11 accepted using actual development denominators;
10. artifact 8 accepted before held-out sealing and artifact 11 accepted before first provider exposure;
11. held-out, audit, incident, retention and deletion controls completed;
12. Provider-Selection Evaluation, Comparative Assessment and Owner Selection completed;
13. provider-specific package and implementation controls completed;
14. Implementation Preparation and Implementation separately authorized;
15. C.3 revalidated;
16. bounded implementation, contract tests and operational readiness completed;
17. Practical Completion determined;
18. Formal Module Evaluation separately authorized and passed;
19. full bounded-scope evaluation evidence accepted;
20. Closure Readiness Review returned `CLOSURE READY`;
21. residual risks accepted or confirmed absent;
22. Project Owner issued Module Closure Acceptance.

Production deployment is not required.


## 15. Non-Authorization

This Proposed Revision 13 does not authorize:

```text
Supporting Contracts drafting or acceptance;
Contract 10 identity decision;
Contract 11 drafting or acceptance;
Section 22 artifacts 8 or 11 preparation;
Diagnosability/Security assessment or architecture work;
Phase-1 Execution Profile;
Section 22 artifacts;
Architectural Readiness determination;
corpus, annotation, fixtures, harness or metric work;
synthetic-source provider authorization, clearance, invocation or generation;
provider exposure, invocation or evaluation;
Provider/Model Comparative Assessment drafting or acceptance;
provider/model selection;
privacy/retention/deletion decisions;
separate drafting of additional supporting contracts beyond the already-governed Contracts 1–11;
separate compatibility-assessment, downstream-consumer-contract,
schema-evolution, explainability-readiness or design-judgment-boundary
artifacts unless explicitly authorized;
schema migration implementation;
downstream-consumer implementation;
explainability implementation;
operational-readiness implementation;
credentials, secrets or access configuration;
incident-response implementation;
C.3 revalidation;
Implementation Package;
implementation;
formal evaluation;
bounded proof execution;
controlled staging execution;
production deployment;
repository persistence.
```

## 16. Revision 13 Change Record

Revision 13 is a non-substantive cleanup of Proposed Revision 12 except for making the already-present Owner decision route explicit.

Changes:

1. Matrix column header `Class` renamed to `Item Category`.
2. Required Project Owner Decisions now explicitly call for conscious acceptance of `CON-07`, `CON-08`, `CON-09`, `CON-10` and `COMPAT-01` as new normative requirements.
3. All 80 stable-ID matrix entries, their content, classifications, evidence, authority mapping, blocking status and current compliance remain unchanged.
4. Mandatory Sequence, Policy Coverage Map, closure conditions and Non-Authorization boundaries remain unchanged.
5. `GOV-05` remains aggregated; no per-phase remediation split was introduced.

## 17. Required Project Owner Decisions

1. Accept, revise or reject Proposed Revision 13.
2. Explicitly accept `CON-07`, `CON-08`, `CON-09`, `CON-10` and `COMPAT-01` as new normative architecture-readiness and forward-compatibility requirements for Candidate A. Confirm that these requirements protect the future full AI Interior Designer architecture, do not expand the current bounded implementation scope and do not authorize implementation of future modules.
3. Confirm the strategic purpose and full-AI-designer compatibility obligations.
4. Confirm the risk-based applicability basis.
5. Confirm the stable-ID matrix and Policy Coverage Map.
6. Confirm Phase-1 does not automatically equal Module Closure.
7. Confirm provider/security gates, separate provider-governance tracks and authority boundaries.
8. Confirm production deployment is outside current Module Closure.
9. Confirm initial Contracts drafting scope is Contracts 1–9 and Contract 10 remains gated.
10. Confirm repository persistence requires separate authorization.
