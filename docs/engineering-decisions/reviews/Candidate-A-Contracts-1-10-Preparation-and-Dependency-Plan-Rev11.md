# Candidate A — Supporting Contracts 1–10 Preparation and Dependency Plan — Revision 11

**Document type:** Proposed Preparation-Cycle Planning Document (not an ADR; not a supporting contract itself; not an Implementation Package)  
**Status:** ACCEPTED — Project Owner, 2026-07-18  
**Prepared by:** ChatGPT, Chief Software Architect and Specification Partner  
**Prepared for:** Project Owner Nurlan  
**Revision:** 11  
**Supersession:** Revision 11 supersedes accepted Revision 4 in full, effective upon this acceptance (2026-07-18). Revision 4 remains in the repository as a historical baseline. External draft Revisions 5, 6, 7, 8, 9 and 10 remain non-authoritative source material.  
**Preparation date:** 2026-07-18  
**Repository:** `Qazaq71/VistaRoom.AI`, branch `main`  
**Repository persistence:** Completed  
**Project Owner acceptance:** Completed — Owner Decisions R11.1–R11.12 accepted in full  
**Contract drafting authorization:** Not granted  

## Source-status table

| Source | Status | Use in Revision 11 |
|---|---|---|
| Preparation and Dependency Plan Revision 4 | Accepted repository baseline | Authoritative dependency, ordering, ownership and package-governance baseline |
| External draft Revision 5 | Unaccepted, unpersisted chat-local source material | Earlier two-layer Master Vocabulary / Active Evaluation Profile draft produced in the Claude Project review track and later supplied into the combined external drafting lineage; no byte-for-byte identity claim is made unless independently verified |
| External draft Revision 6 | Unaccepted, unpersisted Project Owner-provided source material | Primary source for the two-layer vocabulary model and related boundary improvements |
| External draft Revision 7 | Unaccepted, unpersisted generated successor draft | Historical generated successor source |
| External draft Revision 8 | Unaccepted, unpersisted generated successor draft | Historical generated successor source |
| External draft Revision 9 | Unaccepted, unpersisted generated successor draft | Historical generated successor source |
| External draft Revision 10 | Unaccepted, unpersisted generated successor draft | Immediate predecessor reviewed in full before Revision 11 |
| Bounded Scope Decision Revision 5 | Accepted | Authoritative five-room bounded-scope baseline |
| Evaluation Threshold and Acceptance Plan Revision 15 | Accepted | Authoritative five-room evaluation model, counts, metric registry and Open-floor state |
| Test Data Handling Decision Revision 9 | Accepted | Authoritative identity and test-data-governance baseline |
| Module Applicability Profile Revision 13 | Accepted, pending later synchronization | Current applicability baseline; not edited by this Plan |

## Governing full-platform principle

VistaRoom AI is being architected as a **full AI Interior Designer and full AI platform**, not as a permanently bounded image generator.

Accordingly:

1. the Master Architecture and VistaRoom Master Vocabulary must remain extensible beyond the current bounded proof;
2. the Candidate A Active Evaluation Profile defines what is operationally active now, not the permanent ceiling of the platform;
3. Phase 1, MVP, bounded scope and evaluation coverage may constrain current activation, testing and implementation, but must not erase foundational categories or force future baseline rewrites merely to activate additional room types, space segments, object families, relations or capabilities;
4. dormant definitions create no corpus, metric, implementation or commercial-rollout obligation;
5. architectural completeness means a stable extensible structure, ownership model, lifecycle and identifier system — not an exhaustive catalogue of every future space or object.

## Authorized scope of Revision 11

Revision 11 is a standalone combined successor proposal that:

- preserves the accepted Revision 4 dependency-graph core, preparation order, candidate-lock model, consolidated package review and atomic acceptance topology, while adding only the synchronization edges and ownership clarifications required by accepted Rev5/Rev15 and the two-layer model;
- incorporates the strongest non-authoritative work from external draft Revision 6;
- synchronizes the Plan with accepted Bounded Scope Revision 5 and accepted Evaluation Threshold Plan Revision 15;
- establishes five active room types, including `toilet room`;
- updates Contract 3 and Contract 7 boundaries to the accepted five-room evaluation model;
- carries the full-platform foundation / Active Evaluation Profile distinction across Contracts 1–10;
- preserves all downstream non-authorization boundaries.

Revision 11 does not prepare any Supporting Contract and does not authorize repository persistence, corpus work, provider/model work, schema change, ADR creation, implementation or commercial rollout.

---

## 0. Revision 11 change summary

Revision 11 is the correction successor to external draft Revision 10. It preserves the substantive Revision 10 architecture and closes the complete findings set from the independent Chief Architect consolidated review.

1. Corrects two erroneous references from “Test Data Handling Decision Revision 10” to the actual accepted Revision 9.
2. Clarifies the provenance of external draft Revision 5 as an earlier chat-local two-layer-vocabulary draft from the Claude Project review track, while avoiding an unsupported byte-for-byte identity claim.
3. Rewords the Contract 1 → Contract 3 dependency so Contract 1 owns only the canonical identifier scheme and active category identifiers, while accepted Bounded Scope Rev5 and Evaluation Threshold Plan Rev15 retain ownership of room-type activation and counts.
4. Adds an explicit explanation that the 81 Metric Registry IDs are intentionally not restated because their normative content remains exclusively owned by accepted Evaluation Threshold Plan Rev15.
5. Records the rejected `ArchitecturalFixture` terminology alternative and the reason for preferring `FixedElement`, without pre-deciding schema representation.
6. Preserves without reopening the five-room scope, 30-cell grid, 60/90 ordinary minima, 15/31 special minima, 75/121 totals, fixture totals, Open support-floor state, full-platform foundation, two-layer vocabulary architecture, dependency graph, candidate-lock model, consolidated review and atomic acceptance topology.

Revision 11 remains a draft. Revision 4 remains the authoritative Plan baseline until separate Project Owner acceptance.

---

## 1. Purpose and scope

Evaluation Threshold Plan Revision 15 requires ten Supporting Contracts before Corpus Preparation Authorization. Contract 11 — the Aggregation, Uncertainty and Score-Stability Appendix — remains later because it depends on actual development denominators that do not yet exist.

This Plan does not write Contracts 1–10. It establishes:

1. the exact purpose and acceptance boundary of each contract;
2. the dependency graph between contracts and accepted external baselines;
3. the recommended preparation order;
4. terminology ownership;
5. conflict-resolution rules;
6. the separation between full-platform foundation and current Active Evaluation Profile;
7. boundaries against Contract 11, Rev9 Section 22 artifacts, Phase-1 implementation and dormant-category activation;
8. the package-level drafting, review and atomic-acceptance topology;
9. a consolidated validation checklist.

The Plan exists to prevent ten independently drafted contracts from defining shared vocabulary, identity, confidence, provenance, determinability and population concepts inconsistently.

### 1.1 Two-layer architecture

- **Layer 1 — VistaRoom Master Vocabulary:** a versioned, extensible full-platform semantic foundation.
- **Layer 2 — Candidate A Active Evaluation Profile:** the exact vocabulary subset operationally active for the current Residential-first bounded evaluation. Accepted Bounded Scope Revision 5 and Evaluation Threshold Plan Revision 15 remain authoritative for active room types, evaluation populations and fixed counts; Contract 1 may encode and reference those decisions but may not redefine them.

The two layers are coupled but not interchangeable. Layer 1 prevents architectural truncation; Layer 2 prevents uncontrolled execution scope.

### 1.2 Bounded-completeness rule

Contract 1 must define an architecturally complete structure: canonical identifiers, category-family hierarchy, synonym/localization handling, lifecycle, versioning, deprecation, dormant/active states and minimum foundational families. It is not required to enumerate every future commercial, public, industrial or specialized space and object before Contract 1 can close.

---

## 2. Purpose and acceptance boundary of each contract

### Contract 1 — Master Vocabulary and Active Evaluation Profile Contract

**Purpose:** Define two explicit normative layers.

#### Layer 1 — VistaRoom Master Vocabulary

A wide, versioned, extensible platform vocabulary for current and future space types, `StructuralElement`, `Object`, furniture, equipment and fixed/built-in semantic families. It owns:

- canonical identifier structure;
- category and family hierarchy;
- synonyms, aliases and localization;
- active/dormant/deprecated lifecycle;
- versioning, freezing and migration rules;
- aggregation and fallback relationships;
- minimum foundational residential and non-residential extension points.

The Master Vocabulary is an extensible architecture, not an obligation to enumerate every future category.

#### Layer 2 — Candidate A Active Evaluation Profile

The subset operationally active for the accepted Candidate A bounded evaluation:

1. living room;
2. bedroom;
3. kitchen;
4. bathroom;
5. toilet room.

The active segment remains `Residential-first`. Current top-level node classes remain `Room`, `StructuralElement` and `Object`.

**Acceptance boundary:**

- Contract 1 owns vocabulary identifiers, category membership, synonyms and active/dormant lifecycle. Accepted Bounded Scope Revision 5 and Evaluation Threshold Plan Revision 15 externally own the current five-room activation and evaluation counts. Contract 1 must import those decisions and may not redefine them. Contract 1 does not own confidence, provenance, evidence, annotation pairing, fixture registries or conformance integration.
- Dormant categories create no corpus, annotation, metric, implementation or rollout authorization.
- The current five-room profile is not the ceiling of VistaRoom AI.
- Contract 1 must not add a new top-level node class.
- `FixedElement` is the recommended canonical semantic concept for fixed/built-in architectural items, but Contract 1 must normatively determine whether it is represented as an `Object` category branch, a classification facet or another schema-compatible semantic role. It must not be treated as a peer top-level class.
- A future activation of dormant categories requires a separate Project Owner decision.

**Dormant-leaf handling priority:**

1. use the exact active leaf when available;
2. otherwise map to an authorized active ancestor or aggregation;
3. otherwise use an authorized active `unknown`/`other` value;
4. exclusion is last resort and only where the Active Evaluation Profile explicitly permits it;
5. every exclusion must be traceable and measurable.

**Directly grounded in:** accepted Bounded Scope Revision 5, accepted Evaluation Threshold Plan Revision 15 and the fixed `StructuredSceneV0` top-level classes.


### Contract 2 — Relation Annotation and Applicability Contract

**Purpose:** Define ground-truth relation semantics — canonical identity, endpoint applicability, obstruction modes, and borderline/inconclusive treatment — for Adjacency, Containment and Blocking relations.

**Directly grounded in:**
- Rev15 §7.1 — canonical identity tuples for each relation type.
- Rev15 §7.2 — "GT truth, endpoint applicability, obstruction modes, borderline/inconclusive treatment and room-type applicability come only from the accepted Relation Annotation and Applicability Contract and applicability matrix. Applicability cannot be changed after viewing mechanism outputs."

**Acceptance boundary:** This contract owns relation-type semantics and endpoint applicability rules in general. It explicitly shares its scope with Contract 3, which operationalizes applicability *per room type* — Contract 2 must not duplicate the room-type matrix, only reference it.


### Contract 3 — Relation Type × Active Room Type Applicability Matrix

**Purpose:** Operationalize, for each of the five active room types, which relation types and endpoint combinations are applicable.

Active room types:

1. living room;
2. bedroom;
3. kitchen;
4. bathroom;
5. toilet room.

**Acceptance boundary:** Contract 3 is a matrix, not a second definition of relation semantics. Contract 2 owns general relation definitions; Contract 3 owns room-type-specific applicability values. This Plan establishes matrix scope only and does not define the values.

**Downstream inheritance note:** The matrix covers only the current Active Evaluation Profile. It does not extend to dormant Master Vocabulary space types without a separate profile-activation decision.


### Contract 4 — Best-Effort Evidence, Provenance and Determinability Annotation Contract

**Purpose:** Define the evidence kinds, provenance enum, and best-effort field taxonomy that ground `AttributeEvidenceArtifact` entries and the provenance values used throughout node/relation/value annotation.

**Directly grounded in:**
- Rev15 §4.4 — the `AttributeEvidenceArtifact` contract: evidence kind (`image-region|pixel-cue|explicit-inference-basis`), provenance enum (`visually-observed|deterministic-derived|heuristic-inferred|provider-inferred`), and the "capability and field ID" identity for best-effort values.
- Rev15 §13.2 — required node fields include a "required provenance enum," which this contract must define consistently with §4.4's provenance enum.

**Acceptance boundary:** Owns the provenance enum, evidence-kind taxonomy, best-effort field taxonomy, and the evidence basis required to support a determinability judgment. It does not own determinability outcome states, annotation-unit pairing, sealing, adjudication or inconclusive handling; those belong exclusively to Contract 6. It also does not own the confidence enum (Contract 5). Contracts 4–6 annotate the same underlying nodes/relations/values and therefore form the package's most interdependent cluster (Section 3).

### Contract 5 — Confidence Generation and Normalization Contract

**Purpose:** Define how ordinal confidence values are generated and normalized, consistent with the accepted ordinal (not probabilistic) model.

**Directly grounded in:**
- Rev15 §9 — "The accepted model is ordinal, not probabilistic. ECE and Brier are excluded."
- Rev15 §9.1 — the two independent dimensions (source: `provider-supplied|heuristic-generated|missing`; transformation: `unchanged|deterministic-normalized|not-applicable`).
- Rev15 §9.2 — "Heuristic confidence is prohibited unless the locked Confidence Generation and Normalization Contract exists" — i.e., Rev15 itself makes this contract's existence a precondition for a category of confidence value being usable at all.

**Acceptance boundary:** Owns the confidence enum and its source/transformation dimensions only. Must not reintroduce probabilistic framing (ECE/Brier) — this is a hard boundary against reopening an already-decided modeling choice, not a drafting preference.


### Contract 6 — Unknown/Determinability Annotation and Pairing Contract

**Purpose:** Define annotation-unit pairing and the `determinable` / `not-determinable` / `inconclusive` sealing states for entity subtype, confidence, provenance and best-effort fields.

**Acceptance boundary:** Contract 6 owns annotation-unit identity, pairing, sealing, adjudication and inconclusive handling. It consumes, but does not redefine, Contract 1 vocabulary, Contract 4 evidence/provenance and Contract 5 confidence.

**Five-room impact:** The same entity/value-based annotation rules apply across the accepted five-room Active Evaluation Profile. Room-count expansion does not change annotation-unit identity.

**Dormant-leaf rule:** Apply Contract 1's priority order: exact active leaf → active ancestor/aggregation → active unknown/other → explicit traceable exclusion as last resort.


### Contract 7 — Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract

**Purpose:** Define the corpus population contract, scenario grid, special groups, lineage, sufficiency, completeness and expected-family determination.

**Accepted ordinary grid:**

```text
5 active room types × 6 scenario families = 30 ordinary cells
development: 2 per cell = 60
held-out:   3 per cell = 90
```

**Accepted special-group minima:**

```text
development: 15
held-out:    31
```

**Accepted total unique semantic-image populations:**

```text
development: 75
held-out:    121
```

Operational and contract-violation fixture suites remain separate from these totals:

```text
operational fixtures:        16 development / 29 held-out
contract-violation fixtures: 12 development / 18 held-out
```

**Acceptance boundary:** Contract 7 owns scenario/population definitions, lineage and expected-family assignment. It does not reopen accepted counts and does not own unseen-claim vocabulary.

**Five-room impact:** The grid includes living room, bedroom, kitchen, bathroom and toilet room. It does not extend automatically to dormant Master Vocabulary space types.

**Metric Registry boundary:** Contract 7 and every other Supporting Contract must preserve the exact 81 Metric Registry IDs and their accepted blocking/diagnostic classifications from Evaluation Threshold Plan Revision 15. This Plan does not add, remove, rename or reclassify any metric.

The 81 Metric Registry IDs are intentionally not restated in this Preparation Plan. Their normative content remains exclusively owned by accepted Evaluation Threshold Plan Revision 15; this Plan enforces only non-alteration and correct downstream reference.


### Contract 8 — Unseen-Claim Evaluation Artifact Contract

**Purpose:** Define the sealed vocabulary of allowed/prohibited unseen-space claim codes referenced by every `UnseenClaimRecord` on a meaningful partial-scene case.

**Directly grounded in:**
- Rev15 §14.2 — "The sealed case annotation contains allowed and prohibited unseen-space claim codes." "There is no `Not Scorable` result; absence is FAIL."
- Rev15 §14.1 — meaningful partial-scene case criteria (precision/recall thresholds, subtype-correctness thresholds) provide the case population this contract's records apply to.

**Acceptance boundary:** Owns the claim-code vocabulary and the per-assertion `UnseenClaimRecord` field set. Depends on Contract 7 for which cases are "meaningful partial-scene" cases in the first place; must not redefine that determination.

**Downstream inheritance note (Revision 11):** Claim codes reference only categories active in the accepted five-room Active Evaluation Profile. Toilet-room context is therefore valid where relevant. This Plan does not invent or enumerate new claim codes; Contract 8 owns that work.


### Contract 9 — Operational and Contract Violation Fixture Subtype Registry

**Purpose:** Register the exact fixture subtypes, per-subtype development/held-out counts, expected results, reason codes, retryability, and prohibited-outcome lists for the Failure, C.2 operational-rejection, C.3 general-rejection, and Contract Violation fixture suites.

**Directly grounded in:**
- Rev15 §12.1–§12.4 — the four fixture tables (subtype ID, dev/HO counts, expected result/reason, retryability, prohibited outcomes) and the fixed totals: Operational 16 development / 29 held-out; Contract Violation 12 development / 18 held-out; "every listed subtype is critical and has a 1.00 subtype floor. Suites are disjoint."

**Acceptance boundary:** A registry of already-fixed fixture subtypes and counts (this plan does not reopen these numbers — Rev15 fixes them exactly). Contract 9 exclusively owns fixture subtype IDs, expected results, reason codes, retryability and prohibited-outcome lists. Where a subtype refers to category vocabulary from Contract 1, it cites Contract 1. Contract 9 does not depend on, import from, or defer naming to Contract 10. Contract 10 later imports Contract 9's locked registry and validates the fields that carry those values.

**Downstream inheritance note (Revision 11):** The word "fixture" in this contract's title and content refers exclusively to test fixtures (operational and contract-violation test cases), as accepted in Rev15 §12. This is categorically distinct from the Contract 1 `FixedElement` semantic concept. Five-room activation does not by itself change the fixed operational-fixture totals (16 development / 29 held-out) or contract-violation totals (12 development / 18 held-out), and this Plan does not invent toilet-room-specific fixture counts.


### Contract 10 — Conformance Field Inventory and Validation Contract

**Purpose:** Define the concrete, field-by-field conformance requirements for the C.1 candidate, the post-C.2/pre-C.3 StructuredScene artifact, and the final result envelope, integrating the identity, confidence, provenance and vocabulary fields defined by the other contracts into one zero-tolerance validation contract.

**Directly grounded in:**
- Rev15 §13.1–§13.3 — the three field inventories, each naming required fields (schema version, `operationId`/`sourceImageId` identity, node/relation ID uniqueness, required confidence/provenance enums, required EvidenceReference) and stating that "presence, enum/range, cardinality and identity mismatch are zero-tolerance conformance failures."

**Acceptance boundary:** This is the integration layer. It must import exactly the field names, enum values and identity conventions locked by upstream owners, including Contracts 1, 2, 4, 5, 6, 8 and 9 and external identity rules from Rev9. It owns only conformance-field presence, conditionality, cardinality, range/enum validation, identity consistency and failure behavior; it does not own the underlying semantic definitions or fixture reason-code vocabulary. Contract 10 may not begin normative drafting until the Owner-approved identity-alignment prerequisite recorded in Sections 3, 5 and 7 is satisfied, and it may not be finalized until all named upstream contracts are locked. Because of this, it is structurally the final contract in the package, not merely a convenient last drafting step.

**Downstream inheritance note (Revision 11):** The five accepted Active Evaluation Profile room types, including `toilet room`, are valid current-profile values. A dormant Master Vocabulary category remains invalid in a current bounded-proof artifact unless separately activated. Contract 10 must preserve this distinction as a zero-tolerance conformance rule. The unresolved `sourceImageId` alignment prerequisite remains unchanged and must not be inferred by this Plan.

---


## 2A. Full-platform foundation / current active-profile responsibility matrix

| Contract | Full-platform foundation responsibility | Current Active Evaluation Profile responsibility |
|---|---|---|
| 1 | Own extensible Master Vocabulary structure, identifiers, lifecycle, localization and future activation hooks | Encode the externally accepted five-room active subset and current category membership without redefining Rev5/Rev15 |
| 2 | Define stable relation semantics capable of future profile reuse | Apply those semantics to relation endpoints available in the current active vocabulary |
| 3 | Preserve a matrix structure extensible to future activated room types | Provide values for the five currently active room types only |
| 4 | Define reusable evidence, provenance and determinability-evidence concepts | Apply them to fields and capabilities active in the current evaluation |
| 5 | Define reusable ordinal confidence generation and normalization | Apply only to confidence-bearing values active in the current profile |
| 6 | Define reusable pairing, sealing and adjudication rules | Evaluate current active entities/values and apply the dormant-leaf fallback priority |
| 7 | Define reusable population, lineage, sufficiency and completeness mechanics | Use the accepted 30-cell, 60/90, 15/31 and 75/121 model |
| 8 | Define reusable unseen-claim artifact structure | Use claim codes applicable to the current active profile; do not invent dormant-category claims |
| 9 | Define stable test-fixture registry ownership and validation semantics | Preserve accepted 16/29 and 12/18 totals; do not invent room-specific counts |
| 10 | Define reusable conformance integration and failure behavior | Accept active five-room values, reject dormant values and preserve the unresolved identity prerequisite |

This matrix does not add dependency edges by itself. Every normative import still must appear in Section 3 or be explicitly marked non-normative/no-lock in Sections 3 and 5.

---

## 3. Dependency model

The package is a directed multi-parent dependency graph, not a single-root tree. Contract 1 is foundational for vocabulary structure and category membership, but accepted Bounded Scope Revision 5 and Evaluation Threshold Plan Revision 15 remain the external owners of current room activation and evaluation counts. Contracts 4 and 5 are independent normative roots for evidence/provenance and confidence. External accepted baselines and unresolved Owner prerequisites are first-class source nodes.

### 3.1 Dependency edge table

Revision 11 preserves the accepted Revision 4 dependency-graph core and preparation logic. It adds only the direct vocabulary/profile and external-baseline edges required to synchronize the graph with accepted Rev5/Rev15 and the two-layer model. Existing dependency-strength values are unchanged; each added edge uses the existing taxonomy.

| Upstream source | Downstream contract | Dependency content | Dependency strength | Required readiness/gate before downstream finalization |
|---|---|---|---|---|
| Contract 1 | Contract 2 | vocabulary import — **Active Evaluation Profile subset of** category/subtype vocabulary used by relation endpoints and examples | Finalization dependency | Contract 1 candidate-locked for downstream drafting; locked before Contract 2 finalization |
| Contract 2 | Contract 3 | definition import — canonical relation identity and general applicability semantics | Finalization dependency | Contract 2 candidate-locked for drafting; locked before Contract 3 finalization |
| Contract 1 | Contract 3 | active-profile vocabulary import — canonical identifier scheme for the five room types whose activation and count are externally fixed by Bounded Scope Rev5 and Evaluation Threshold Plan Rev15, plus active category identifiers used by the applicability matrix | Finalization dependency | Contract 1 candidate-locked for drafting; locked before Contract 3 finalization; Contract 1 does not own room-type activation |
| Bounded Scope Decision Rev5 | Contract 3 | external-baseline reference — fixed five active room types | External-baseline dependency | accepted external baseline; no redefinition permitted |
| Contract 1 | Contract 6 | vocabulary import — **Active Evaluation Profile subset of** entity subtype vocabulary used by determinability units | Finalization dependency | Contract 1 locked before Contract 6 finalization |
| Contract 4 | Contract 5 | provenance-model import — confidence source/transformation rules must not conflict with the owned provenance enum and evidence/provenance distinctions | Finalization dependency | Contract 4 locked before Contract 5 finalization |
| Contract 4 | Contract 6 | evidence/provenance import — determinability evidence basis, provenance enum, best-effort field identity | Finalization dependency | Contract 4 locked before Contract 6 finalization |
| Contract 5 | Contract 6 | confidence import — confidence enum and source/transformation dimensions | Finalization dependency | Contract 5 locked before Contract 6 finalization |
| Contract 1 | Contract 7 | active-profile vocabulary import — canonical room/category identifiers and active aggregation values used by scenario, sufficiency and completeness annotation | Finalization dependency | Contract 1 locked before Contract 7 finalization |
| Contracts 2 and 3 | Contract 7 | population/scoring dependency — relation semantics and room-type applicability used by relation-based semantic-case rules | Finalization dependency | Contracts 2 and 3 locked before Contract 7 finalization |
| Bounded Scope Decision Rev5 | Contract 7 | external-baseline reference — fixed five active room types and bounded input scope | External-baseline dependency | accepted external baseline |
| Evaluation Threshold Plan Rev15 | Contract 7 | external-baseline reference — 30-cell grid, 60/90 ordinary minima, 15/31 special minima, 75/121 totals and Metric Registry preservation | External-baseline dependency | accepted external baseline; counts and metric identities may not be redefined |
| Rev9 (external identity baseline) | Contract 7 | external identity reference — `lineageId` and governed-asset identity used to trace the no-cross-subset lineage rule without redefining it | External-baseline dependency | accepted external baseline |
| Contract 7 | Contract 8 | population dependency — meaningful-partial-scene and expected-family determination | Finalization dependency | Contract 7 locked before Contract 8 finalization |
| Contract 1 | Contract 8 | active-profile vocabulary import — canonical active category identifiers available to unseen-claim codes and records | Finalization dependency | Contract 1 locked before Contract 8 finalization |
| Contract 1 | Contract 9 | vocabulary reference — **Active Evaluation Profile subset of** severe-structural-hallucination-eligible subtype names where applicable | Finalization dependency | Contract 1 locked before Contract 9 finalization |
| Contract 5 | Contract 9 | confidence-model reference — any fixture expectation involving required confidence state or prohibited confidence outcome must use Contract 5 terminology | Finalization dependency | Contract 5 locked before Contract 9 finalization |
| Rev9 (external identity baseline) | Contract 9 | external fixture-identity reference — `fixtureId`, `fixtureLineageId` and governed-operation identity used without redefining them | External-baseline dependency | accepted external baseline |
| Contract 1 | Contract 10 | integration import — **Active Evaluation Profile subset of** category/subtype vocabulary | Finalization dependency | Contract 1 locked before Contract 10 finalization |
| Contract 2 | Contract 10 | integration import — canonical relation identity and endpoint semantics represented in conformance fields | Finalization dependency | Contract 2 locked before Contract 10 finalization |
| Contract 4 | Contract 10 | integration import — evidence kind, provenance and best-effort evidence fields | Finalization dependency | Contract 4 locked before Contract 10 finalization |
| Contract 5 | Contract 10 | integration import — confidence fields and enums | Finalization dependency | Contract 5 locked before Contract 10 finalization |
| Contract 6 | Contract 10 | integration import — determinability/pairing outcome requirements where represented in conformance inventory | Finalization dependency | Contract 6 locked before Contract 10 finalization |
| Contract 8 | Contract 10 | integration import — `UnseenClaimRecord` field set and per-assertion validation where represented in conformance inventory | Finalization dependency | Contract 8 locked before Contract 10 finalization |
| Contract 9 | Contract 10 | registry import — fixture subtype IDs, reason codes, expected results and prohibited outcomes | Finalization dependency | Contract 9 locked before Contract 10 finalization |
| Rev9 (external identity baseline) | Contract 10 | external identity import — governed operation/input/asset identity and conditional field rules are referenced, never redefined | External-baseline dependency | accepted external baseline |
| Evaluation Threshold Plan Rev15 | Contract 10 | external conformance/evaluation baseline — active five-room values, field inventories, Metric Registry identity and zero-tolerance conformance requirements | External-baseline dependency | accepted external baseline; no metric or threshold redefinition permitted |
| Owner-approved `sourceImageId` alignment resolution | Contract 10 | identity-alignment prerequisite — exact relationship between Rev15 `sourceImageId` and Rev9 `inputArtifactId` / conditional `sourceAssetId` | Acceptance dependency | explicit Project Owner decision required before any normative Contract 10 drafting begins |

Every edge carries exactly one content label and exactly one dependency-strength value. Readiness state and timing gates are recorded separately in the final column and governed by Section 3.3.

### 3.2 Dependency strength taxonomy

Every edge in Section 3.1 uses exactly one of these three values:

- **Finalization dependency:** downstream drafting may use an upstream candidate-lock, but the downstream contract cannot be finalized until the upstream contract is locked in the candidate package.
- **Acceptance dependency:** a named prerequisite requires explicit Project Owner acceptance. Where the edge states a pre-draft gate, no normative downstream drafting may begin before that acceptance.
- **External-baseline dependency:** the source is already accepted outside Contracts 1–10 and may only be referenced, never redefined.

### 3.3 Readiness lifecycle and gate states

Readiness is a separate axis from dependency strength:

- **draft:** unstable working text; consultative only; no imported definition may be treated as stable;
- **candidate-lock:** a specifically identified revision/hash whose named definitions are provisionally frozen for downstream drafting; not authoritative acceptance;
- **locked:** final form within the candidate package, eligible for package review; later change requires downstream revalidation;
- **accepted external baseline:** an already authoritative source outside the package;
- **Owner-resolved prerequisite:** an explicit Project Owner decision required by an Acceptance dependency.

A Finalization edge normally progresses from draft consultation to candidate-lock and then locked. An External-baseline edge begins at accepted external baseline. An Acceptance edge is satisfied only by the named Owner-resolved prerequisite.

### 3.4 Cluster reading

- **Relation cluster:** Contract 1 and Contract 2 feed Contract 3; Contracts 1–3 feed Contract 7 where vocabulary, relation semantics and room applicability meet; Contract 2 also feeds Contract 10.
- **Evidence/confidence/determinability cluster:** Contract 4 feeds Contracts 5, 6 and 10; Contract 5 feeds Contracts 6, 9 and 10; Contract 6 also feeds Contract 10.
- **Semantic-case cluster:** Contract 7 imports Contract 1 active vocabulary, Contracts 2–3 relation/applicability rules, Rev5/Rev15 population baselines and Rev9 lineage identity. Contract 7 then feeds Contract 8, which also imports Contract 1 active vocabulary; Contract 8 feeds Contract 10 where unseen-claim records are represented.
- **Fixture/integration cluster:** Contract 9 imports Rev9 fixture identity and owns fixture registries; Contract 10 imports that registry. No reverse Contract 10 → Contract 9 dependency exists.
- **Identity sources:** Rev9 is the accepted external identity owner for Contracts 7, 9 and 10; the separate `sourceImageId` alignment decision is a pre-draft Owner prerequisite for Contract 10.
- **Integration layer:** Contract 10 is structurally non-finalizable until all named upstream locks are complete and cannot begin normative drafting until the identity-alignment prerequisite is accepted.
- **Master Vocabulary / Active Evaluation Profile boundary (Revision 11):** Contract 1 owns the Master Vocabulary and the Active Evaluation Profile. Every current-package edge sourced from Contract 1 imports the Active Evaluation Profile subset only. The Master Vocabulary remains the extensible full-platform foundation and is consulted when a future, separately authorized profile activation is proposed.

---


## 4. Recommended preparation order

Preserved from accepted Revision 4 and external draft Revision 6; no ordering change is proposed by Revision 11.

```text
1. Contract 1  — Master Vocabulary and Active Evaluation Profile Contract
2. Contract 2  — Relation Annotation and Applicability Contract
3. Contract 3  — Relation Type × Active Room Type Applicability Matrix
4. Contract 4  — Best-Effort Evidence, Provenance and Determinability Annotation Contract
5. Contract 5  — Confidence Generation and Normalization Contract
6. Contract 6  — Unknown/Determinability Annotation and Pairing Contract
7. Contract 7  — Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract
8. Contract 8  — Unseen-Claim Evaluation Artifact Contract
9. Contract 9  — Operational and Contract Violation Fixture Subtype Registry
10. Contract 10 — Conformance Field Inventory and Validation Contract
```

**Rationale for placing Contract 9 ninth despite weak coupling:** its fixture reason codes (e.g., `c2.room.missing_candidate`, `c3.general.schema_version`) are most legible when the annotation contracts that define the underlying valid-vs-invalid conditions (Contracts 1–8) already exist, and Contract 10 — which must cite Contract 9's reason codes — comes immediately after, so drafting 9 right before 10 keeps the two most cross-referencing final contracts adjacent in the work sequence.

**Rationale for placing Contract 10 last:** it is explicitly the integration/enforcement layer (Section 2). Drafting it before its inputs are locked would force it to either invent placeholder field names (risking exactly the kind of drift that cost nine revisions on Test Data Handling Decision) or remain incomplete pending the others. Neither is acceptable for a "zero-tolerance conformance" contract.

This order governs drafting and finalization, not ten separate final acceptance cycles. Upstream contracts may be drafted and internally stabilized before downstream contracts, but no Contract 1–10 receives final authoritative acceptance or version lock until the complete package has passed the package-level review topology in Section 8. Contract 10 may not begin normative drafting until the identity-alignment prerequisite in Sections 3 and 7 has an explicit Owner-approved resolution. After that gate, it may be drafted, but it may not be finalized until Contracts 1, 2, 4, 5, 6, 8 and 9 are locked within the candidate package. Contract 3 affects Contract 10 transitively through Contract 7 and Contract 8 where room-type applicability shapes semantic-case populations and unseen-claim records represented in the conformance inventory.

---


## 5. Terminology and ownership table

| Shared term / field | Owning source | Current consumers |
|---|---|---|
| VistaRoom Master Vocabulary | Contract 1 | Future profile activations; current contracts through the Active Profile only |
| Active Evaluation Profile vocabulary membership and lifecycle | Contract 1 | Contracts 2, 3, 6, 7, 8, 9, 10 |
| Current five-room activation and evaluation counts | External — accepted Bounded Scope Rev5 and Evaluation Threshold Plan Rev15 | Contracts 1, 3, 7, 10 |
| Category/subtype vocabulary and synonyms | Contract 1 | 2, 6, 9, 10 |
| `FixedElement` semantic concept | Contract 1 | Current package only through active categories; never Contract 9 test-fixture terminology |
| Relation identity and general applicability semantics | Contract 2 | 3, 7, 10 |
| Room-type-specific applicability values | Contract 3 | 7 |
| Evidence kind, provenance and determinability evidence basis | Contract 4 | 5, 6, 10 |
| Confidence enum and normalization | Contract 5 | 6, 9, 10 |
| Annotation-unit pairing and determinability outcomes | Contract 6 | 10 |
| Scenario mechanics, lineage, sufficiency, completeness, expected-family | Contract 7 | 8, later Contract 11 |
| Fixed 30-cell / 60–90 / 15–31 / 75–121 population values and 81 Metric Registry identity | External — Evaluation Threshold Plan Rev15 | Contracts 7, 10, later Contract 11 |
| Unseen-claim vocabulary and `UnseenClaimRecord` | Contract 8 | 10 |
| Fixture subtype IDs, counts, reason codes and prohibited outcomes | Contract 9 | 10, later Contract 11 |
| Conformance presence, cardinality, enum/range and identity validation | Contract 10 | — |
| Operation/input/asset identity | Test Data Handling Decision Rev9 | 7, 9, 10 |
| `sourceImageId` alignment | Separate Project Owner prerequisite | Contract 10 |

No non-owning contract may restate or fork an owned definition.

### 5A. `FixedElement` terminology decision

`FixedElement` is the recommended canonical term for built-in and fixed architectural items because it avoids collision with Contract 9's test-fixture meaning of “fixture.”

The alternative term `ArchitecturalFixture` was considered and rejected for the current contract family because “fixture” is already a normative testing term in Contract 9. Reusing it for semantic room elements would create avoidable cross-contract ambiguity. This rejection concerns terminology only and does not pre-decide the final schema-compatible representation.

Acceptance of this Plan confirms the term, but not its exact schema-compatible representation. Contract 1 must choose one normative representation under the existing `Object` top-level class and must not use “category branch”, “facet” and “role” interchangeably without a decision.


## 6. Conflict-resolution rule

If, during drafting or review, two contracts appear to define the same term, field, or enum differently:

```text
1. Consult this table (Section 5) for the designated owning contract.
2. The owning contract's definition is authoritative.
3. The non-owning contract must be corrected to cite the owning
   contract, not the reverse — even if the non-owning contract was
   drafted first or is more detailed.
4. If the term is not yet in this table, it must be added — naming
   an owning contract — before either contract proceeds to review.
5. No contract may resolve an apparent conflict by introducing a
   third, new definition that neither original contract stated.
6. Any conflict that cannot be resolved by (1)–(5) because it
   reveals an actual gap or contradiction in an accepted external
   baseline must be raised to the Project Owner as a named finding
   against the actual authoritative source (for example Rev5, Rev9,
   Rev15 or another accepted baseline). It must not be silently
   resolved by the contract drafters.
```

This mirrors the lesson from Candidate A Test Data Handling Decision: shared boundaries (there, provider-track identity; here, node/relation/value identity and vocabulary) must have exactly one normative home, established before drafting, not reconciled after divergent drafts already exist.

---


## 7. Boundaries and later dependencies

### 7.1 Contract 11 and Open support floors

Ten relation/room-sensitive support-floor dispositions remain Open under Evaluation Threshold Plan Revision 15. Their identities and Open status are authoritative; their numerical values are intentionally unresolved.

Contracts 1–10:

- must preserve that Open state;
- must not invent numerical support floors;
- may define the required identities, populations and annotation rules needed for later calculation;
- must defer numerical resolution to Contract 11 using actual development denominators.

This Plan does not authorize corpus creation or evaluation execution.

### 7.2 Test Data Handling Decision Revision 9

Rev9 remains the sole owner of governed operation, input, asset, fixture and lineage identity. Contracts 7, 9 and 10 reference those identities without redefining them.

### 7.3 Contract 10 identity prerequisite

Before normative Contract 10 drafting, the Project Owner must separately resolve the relationship between Rev15 `sourceImageId` and Rev9 `inputArtifactId` / conditional `sourceAssetId`. This Plan does not infer equivalence or create a dual-identity convention.

### 7.4 Phase-1 / Execution Profile

Contracts 1–10 define methodology and conformance, not implementation tooling, storage mechanisms or automation degree. A future Phase-1 or Execution Profile selects a minimum implementation of an already stable methodology.

### 7.5 Dormant-category non-authorization

The existence of a dormant category does not authorize:

- corpus or annotation work;
- metrics or thresholds;
- provider/model evaluation;
- schema changes;
- implementation;
- commercial rollout.

### 7.6 Current governance sequence

```text
1. Evaluation Threshold Plan Revision 15 acceptance and persistence — COMPLETE
2. Preparation and Dependency Plan successor — CURRENT STEP
3. Module Applicability Profile successor — LATER, SEPARATE AUTHORIZATION
4. Contract 1 drafting — LATER, SEPARATE AUTHORIZATION
```

No repository-backed Contract 1 draft currently exists. Any external or chat-local draft may be used only after it is supplied and independently verified. The next authorized repository-track Contract 1 work will therefore be treated as the first verified draft.

---

## 8. Package drafting, review and acceptance topology

All activities in this Section are prospective and become executable only after a separate explicit Project Owner authorization to draft Contracts 1–10. Acceptance of this Plan alone does not activate them. The underlying topology is preserved from Revision 4; Revision 11 only clarifies its application to the current baselines.

### 8.1 Drafting, candidate-lock and stabilization

Once drafting is separately authorized:

1. Contracts 1–10 are drafted in the dependency order of Section 4.
2. An upstream contract may reach **candidate-lock** for downstream drafting, but candidate-lock is not authoritative Project Owner acceptance.
3. A candidate-lock must record at minimum:
   - `candidateLockId`;
   - contract number and revision;
   - content hash;
   - exact definitions/sections treated as provisionally frozen;
   - known unresolved issues;
   - lock date;
   - locking authority;
   - superseded candidate-lock, if any;
   - affected downstream contracts.
4. Candidate-lock may be established only by the designated package preparation authority under the separately granted drafting authorization. It permits downstream consultation and drafting, not final acceptance.
5. Any change to a candidate-locked definition creates a superseding candidate-lock and triggers revalidation of every downstream contract listed by Section 3.
6. A contract becomes **locked** only when its candidate text is complete for the package revision and all upstream finalization dependencies are satisfied.
7. Contract 10 normative drafting cannot begin before the Owner-approved identity-alignment prerequisite. Contract 10 is finalized last after all of its named upstream contracts are locked.

### 8.2 One consolidated package review

After all ten contracts are complete as one versioned package:

- perform one full deep end-to-end review of Contracts 1–10 together with the final terminology table and dependency matrix;
- issue one consolidated report and one closed findings matrix mapped to affected contracts;
- do not separately declare any contract authoritative before that package review closes;
- a closed findings set may be corrected only in a new package revision; that new version receives one complete consolidated review. No additional findings may be appended to the same reviewed version without new facts.

### 8.3 Owner acceptance event

After a package version passes consolidated review, the Project Owner may accept it in one governance event containing ten explicit contract decisions. The package becomes authoritative atomically so that no downstream contract is accepted against a later-changed upstream definition. Reopening after acceptance requires a new fact, a new baseline revision or an explicit successor governance decision.

### 8.4 Required common supporting-contract skeleton

Every Contract 1–10 must use the following minimum structure:

1. Document metadata and revision status.
2. Purpose and acceptance boundary.
3. Imported authoritative definitions and locked versions.
4. Owned definitions.
5. Normative rules.
6. Non-normative examples, clearly labeled.
7. Validation and failure rules.
8. Dependency and candidate-lock prerequisites.
9. Traceability to Rev15 and external accepted baselines.
10. Conflicts, unresolved issues and escalation path.
11. Owner Decision entries.
12. Explicit non-authorization boundary.

Contract 1 additionally requires an explicit Layer 1 / Layer 2 separation and bounded-completeness statement.

### 8.5 Consolidated validation checklist

Before the completed package is submitted for review:

```text
TERMINOLOGY
[ ] Every shared term has exactly one normative owner, including
    external owners and explicitly unresolved alignment issues.
[ ] `expected-family`, UnseenClaimRecord, determinability evidence
    basis and determinability outcome states are assigned as in Section 5.
[ ] No contract restates another owner's definition instead of citing it.
[ ] No enum, field name or identity convention has competing forms.
[ ] Master Vocabulary and `FixedElement` terminology (Section 5A) is used
    consistently and is not confused with Contract 9 test-fixture terminology.

TRACEABILITY
[ ] Every threshold, count and population figure traces to Rev15.
[ ] The exact 81 Metric Registry IDs and their blocking/diagnostic classifications are preserved.
[ ] No contract narrows, widens or reinterprets an accepted rule.
[ ] No current Active Evaluation Profile constraint is expressed as a permanent Master Architecture ceiling.
[ ] External baseline imports cite exact accepted documents/versions.

DEPENDENCY INTEGRITY
[ ] Every Section 3 edge is represented in the final package.
[ ] Every Section 3.1 edge carries one Dependency content label and one
    strength value drawn only from Section 3.2.
[ ] Every consuming-contract relationship in Section 5 has a direct
    Section 3 edge, unless the exact relationship is explicitly documented
    as transitive or non-normative/no-lock in both Sections 3 and 5.
[ ] Every Section 3 edge maps to an owned/imported concept in Section 5
    or to an explicit external-baseline/Owner-prerequisite explanation.
[ ] Every normative relationship in Section 2A maps to Section 3 and Section 5,
    or is explicitly marked non-normative/no-lock.
[ ] Readiness states use only Section 3.3 terminology.
[ ] Downstream contracts were revalidated after every upstream change.
[ ] Contract 2 was checked against the final Contract 1 active-profile vocabulary.
[ ] Contract 3 was checked against final Contracts 1 and 2 and accepted Bounded Scope Rev5.
[ ] Contract 5 was checked against final Contract 4.
[ ] Contract 6 was checked against final Contracts 1, 4 and 5.
[ ] Contract 7 was checked against final Contracts 1, 2 and 3, accepted Bounded Scope Rev5,
    accepted Evaluation Threshold Plan Rev15 and accepted Rev9 lineage identity.
[ ] Contract 8 was checked against final Contracts 1 and 7.
[ ] Contract 9 was checked against final Contracts 1 and 5 and accepted Rev9 fixture identity.
[ ] Contract 10 was checked against final Contracts 1, 2, 4, 5, 6, 8 and 9,
    accepted Rev9 identity, accepted Rev15 conformance/evaluation baselines
    and the Owner-approved `sourceImageId` alignment resolution.
[ ] Contract 9 contains no dependency on Contract 10.
[ ] The `sourceImageId` alignment checkpoint was Owner-approved before
    any normative Contract 10 drafting began.
[ ] Every Contract 1-sourced edge imports only the Active Evaluation Profile subset for current execution.
[ ] Dormant-leaf handling follows exact leaf → active ancestor → active unknown/other → explicit traceable exclusion.

CANDIDATE-LOCK GOVERNANCE
[ ] Every candidate-lock has an ID, revision, hash, frozen-definition
    scope, unresolved-issue list, authority and downstream impact list.
[ ] Every superseding candidate-lock identifies the prior lock.
[ ] Every affected downstream contract was revalidated.
[ ] No candidate-lock is represented as Project Owner acceptance.

BOUNDARY DISCIPLINE
[ ] No contract defines a Rev9 Section 22 data-governance artifact.
[ ] No contract specifies a Phase-1 implementation mechanism.
[ ] No contract prepares or anticipates Contract 11 content beyond imports.
[ ] No Contract 1–10 assigns a numerical value to any of the ten Open support-floor dispositions.
[ ] Every contract carries the required non-authorization statement.
[ ] No contract other than Contract 1 defines a dormant Master Vocabulary
    category, and Contract 1's dormant categories carry the Section 7.5
    non-authorization boundary.

PACKAGE GOVERNANCE
[ ] A separate explicit Project Owner drafting authorization exists.
[ ] Contract 1 is treated as the first verified repository-track draft unless an external draft is separately supplied and verified.
[ ] All ten contracts use the common skeleton in Section 8.4.
[ ] No contract is marked finally Accepted before package review.
[ ] The complete package has one version identity and one terminology table.
[ ] One consolidated package review covers all ten contracts and cross-links.
[ ] Owner acceptance is one atomic governance event with ten explicit decisions.
```

---


## 9. Explicit non-authorization restatement

Revision 11 is a planning artifact. If accepted, it becomes the authoritative preparation, dependency, terminology-ownership, readiness and package-review model for Contracts 1–10 and supersedes Revision 4.

Acceptance of Revision 11 alone does not authorize:

- drafting or redrafting Contracts 1–10;
- Contract 11;
- the Module Applicability Profile successor;
- Phase-1 or Execution Profile preparation;
- Rev9 Section 22 artifacts;
- corpus or fixture creation;
- annotation;
- provider contact, invocation, evaluation or selection;
- schema changes or a new top-level node class;
- ADR creation;
- Implementation Package preparation;
- implementation;
- production or commercial rollout;
- repository persistence of this Plan or any contract.

A separate explicit Project Owner authorization is required before Contract drafting begins. No candidate-lock may be created under this Plan alone.

---

## 10. Proposed Owner Decisions

- **Decision R11.1:** Accept Preparation and Dependency Plan Revision 11.
- **Decision R11.2:** Supersede accepted Revision 4 upon acceptance and preserve external draft Revisions 5, 6, 7, 8, 9 and 10 as non-authoritative source material.
- **Decision R11.3:** Adopt the VistaRoom Master Vocabulary / Candidate A Active Evaluation Profile two-layer architecture, with Contract 1 owning vocabulary membership/lifecycle while accepted Rev5/Rev15 retain ownership of current room activation and evaluation counts.
- **Decision R11.4:** Adopt the full-platform foundation rule: current bounded scope is an activation boundary, not the architectural ceiling of VistaRoom AI.
- **Decision R11.5:** Confirm the five active room types: living room, bedroom, kitchen, bathroom and toilet room.
- **Decision R11.6:** Confirm the 30-cell ordinary grid, 60/90 ordinary minima, 15/31 special minima and 75/121 total semantic-image populations.
- **Decision R11.7:** Confirm operational fixture totals 16/29 and contract-violation fixture totals 12/18 remain separate and unchanged.
- **Decision R11.8:** Confirm `FixedElement` as the canonical semantic term, while leaving its exact schema-compatible representation to Contract 1 under the existing `Object` top-level class.
- **Decision R11.9:** Confirm the dormant-category lifecycle, bounded-completeness rule and traceable dormant-leaf fallback priority.
- **Decision R11.10:** Confirm preservation of all 81 Metric Registry IDs and their blocking/diagnostic classifications, and confirm that the ten Open support-floor dispositions remain numerically unresolved until Contract 11 uses actual development denominators.
- **Decision R11.11:** Accept the dependency graph as revised by the required Rev5/Rev15 and two-layer synchronization edges, while preserving the preparation order, candidate-lock model, consolidated package review, atomic acceptance topology and Contract 10 identity prerequisite.
- **Decision R11.12:** Confirm that Module Applicability Profile synchronization and Contract drafting each require separate explicit Project Owner authorization.

Upon acceptance, Revision 11 becomes the authoritative Plan baseline. Until then, Revision 4 remains authoritative.

---

## 11. Draft status summary

```text
Status: ACCEPTED — Project Owner, 2026-07-18
Repository persistence: Completed
Project Owner acceptance: Completed — Owner Decisions R11.1–R11.12 accepted in full
Contract drafting authorization: Not granted
Current authoritative Plan baseline: Revision 11
Supersedes: Revision 4
Revision 4 remains: Historical baseline
```
