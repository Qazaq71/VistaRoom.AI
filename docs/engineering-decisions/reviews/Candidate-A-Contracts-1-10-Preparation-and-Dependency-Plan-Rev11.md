# Candidate A — Supporting Contracts 1–10 Preparation and Dependency Plan — Revision 11

**Document type:** Preparation-Cycle Planning Document (originally proposed and accepted on 2026-07-18; this exact corrected content remains a candidate pending separate acceptance; not an ADR, supporting contract, or Implementation Package)
**Status:** ACCEPTED — Project Owner, 2026-07-18 (original Revision 11 content); **CORRECTED-IN-PLACE CANDIDATE — LIMITED CLOSURE VERIFICATION AND FINAL DEEP ENGINEERING REVIEW PASSED; AWAITING PROJECT OWNER ACCEPTANCE** — correction prepared 2026-07-23 and final residual/deep verification completed 2026-07-24. This candidate is intended, upon acceptance, to close Finding F-1 and the additional internal-consistency defects identified during the final engineering review. It is NOT itself Owner-accepted and NOT repository-persisted. Revision remains 11; no Revision 12 is created.
**Prepared by:** ChatGPT (historical role attribution recorded in the original Revision 11: Chief Software Architect and Specification Partner); Claude, Chief Software Architect and Specification Partner (2026-07-23 in-place correction); final residual correction and deep verification by ChatGPT, Engineering Architect (2026-07-24)
**Prepared for:** Project Owner Nurlan
**Revision:** 11 (unchanged)
**Supersession:** Revision 11 supersedes accepted Revision 4 in full, effective upon this acceptance (2026-07-18). Revision 4 remains in the repository as a historical baseline. External draft Revisions 5, 6, 7, 8, 9 and 10 remain non-authoritative source material.
**Preparation date:** 2026-07-18; correction prepared 2026-07-23; final residual correction and deep engineering verification completed 2026-07-24
**Repository:** `Qazaq71/VistaRoom.AI`, branch `main`
**Repository persistence:** Completed for the original 2026-07-18 identity; this 2026-07-23/24 corrected candidate is NOT repository-persisted and persistence is NOT authorized by this correction work
**Project Owner acceptance:** Completed for the original identity — Owner Decisions R11.1–R11.12 accepted in full (2026-07-18); this corrected candidate and all proposed Section 10A decisions await separate Project Owner Acceptance
**Contract drafting authorization:** Not granted

---

## 2026-07-23/24 in-place correction candidate — change summary

This candidate correction is intended, upon Project Owner Acceptance of Section 10A, to close Finding F-1 (MAJOR, blocks Contract 3, does not block the active module) from the Final Consolidated Root Architecture Package Review (2026-07-23). The limited closure verification and the final deep engineering review of this exact candidate content have passed. The candidate resynchronizes the Plan to the current accepted architecture and current package-governance state:

```text
Residential-34 (34 active_candidate categories) replaces the historical
    five-active-room-type basis, everywhere this Plan cited it as
    current.
Evaluation Threshold and Acceptance Plan Revision 16 (204-cell grid;
    423 development / 643 held-out RoomCase totals; 690 overall
    held-out evaluation cases) replaces Revision 15 as the current
    external evaluation-baseline owner.
Test Data Handling Decision Revision 10 (Operation -> RoomCase[1] ->
    ImageAsset[1..6]; operationId -> roomCaseId -> imageAssetId <->
    sourceAssetId identity levels) replaces Revision 9 as the current
    external identity/test-data baseline. The exact field/JSON/
    envelope/downstream-implementation alignment remains Contract 10's
    own responsibility; TDH Rev10 fixes only the identity-level model.
Module Applicability Profile Revision 19 replaces Revision 13 as the
    current applicability baseline.
Owner Decisions R11.5, R11.6, and R11.7 (2026-07-18) are explicitly
    superseded or amended by new Section 10A decisions below, each
    tied to its controlling later source. They are not deleted; their
    original text and acceptance remain traceable as historical.
Current package state is synchronized: Contract 1 Rev19 and Contract 2
    Rev10 are already individually Owner-accepted, candidate-locked,
    and repository-persisted; Contracts 3-10 remain not authorized and
    not started. The later complete Contracts 1-10 package review and
    atomic package-acceptance event remain separate future governance
    steps and are not authorized by this correction.
Bounded in-place correction plus limited closure verification is
    recognized as an allowed Owner-authorized correction path; broad
    redesign or a new package identity still requires the review level
    appropriate to its scope.
```

Every other accepted architectural fact in this Revision 11 is preserved unless an explicit current-state synchronization is identified in this candidate. In addition to room-count, grid, population, identity-model, and terminology corrections, the final engineering review synchronizes the application of the package-review/atomic-acceptance topology to the already-completed Contract 1/Contract 2 state and updates the correction-governance wording to the Owner-approved in-place/limited-closure practice.

## Source-status table

| Source | Status | Use in Revision 11 |
|---|---|---|
| Preparation and Dependency Plan Revision 4 | Historical accepted repository baseline; superseded by accepted Revision 11 on 2026-07-18 | Historical source for the dependency, ordering, ownership and package-governance core preserved by Revision 11; no longer the current authoritative Plan |
| External draft Revision 5 | Unaccepted, unpersisted chat-local source material | Earlier two-layer Master Vocabulary / Active Evaluation Profile draft produced in the Claude Project review track and later supplied into the combined external drafting lineage; no byte-for-byte identity claim is made unless independently verified |
| External draft Revision 6 | Unaccepted, unpersisted Project Owner-provided source material | Primary source for the two-layer vocabulary model and related boundary improvements |
| External draft Revision 7 | Unaccepted, unpersisted generated successor draft | Historical generated successor source |
| External draft Revision 8 | Unaccepted, unpersisted generated successor draft | Historical generated successor source |
| External draft Revision 9 | Unaccepted, unpersisted generated successor draft | Historical generated successor source |
| External draft Revision 10 | Unaccepted, unpersisted generated successor draft | Immediate predecessor reviewed in full before Revision 11 |
| Bounded Scope Decision Revision 5 | Accepted, authoritative, and corrected in place within the same Revision 5 lineage | Current controlling bounded-scope baseline: **34-category Residential-34**, `Operation -> RoomCase[1] -> ImageAsset[1..6]`, not the historical five-room/single-image basis. Commit `565a3a03294086f319ccec5ff2e77afb5af8a9e1`; see Section 10A. |
| Evaluation Threshold and Acceptance Plan Revision 15 | Accepted historical predecessor; superseded by Revision 16 | Historical entry only. Evaluation Threshold and Acceptance Plan **Revision 16** (accepted 2026-07-23) is the authoritative 34-category evaluation model, 204-cell grid, RoomCase/evaluation-case cardinalities, and Metric Registry owner. See Section 10A. |
| Test Data Handling Decision Revision 9 | Accepted historical predecessor; superseded by Revision 10 | Historical entry only. Test Data Handling Decision **Revision 10** (accepted 2026-07-23) is the authoritative identity and test-data-governance baseline, fixing the `operationId -> roomCaseId -> imageAssetId <-> sourceAssetId` identity-level model. See Section 10A. |
| Module Applicability Profile Revision 13 | Historical accepted predecessor; superseded by Revision 19 | Historical entry only. Module Applicability Profile **Revision 19** (accepted 2026-07-23) is the current applicability baseline; not edited by this Plan. |
| Contract 1 — Master Vocabulary and Active Evaluation Profile, Revision 19 | Owner-accepted, candidate-locked (C1-REV19-CL-001), repository-persisted | Current authoritative 34-category (Residential-34) Active Evaluation Profile. Not edited by this Plan. |
| Contract 2 — Relation Annotation and Applicability, Revision 10 | Owner-accepted, candidate-locked (C2-REV10-CL-001), repository-persisted | Current authoritative relation-type semantics. Not edited by this Plan. |
| Contract 1 Transfer and Layer 2 Activation Preparation Directive, Corrected Revision 3 | Owner-accepted, authoritative, repository-persisted | Confirms the complete 34-category Layer 2 activation registry (independently reviewed against Contract 1 Rev19 Annex V/S1). Referenced, not edited, by this Plan. |
| Project Context v2.4 — Phase 7 accepted identity | Owner-accepted, authoritative, repository-persisted | Current project-state source: Contracts 1-2 individually complete; Contracts 3-10 not authorized; later atomic Contracts 1-10 acceptance remains a separate, not-yet-authorized step. |
| Living Strategic Roadmap v1.4 — current accepted identity | Owner-accepted, authoritative, repository-persisted | Current mandatory sequencing source after complete Supporting Contracts 1-10 acceptance; referenced, not modified, by this Plan. |

## Governing full-platform principle

VistaRoom AI is being architected as a **full AI Interior Designer and full AI platform**, not as a permanently bounded image generator.

Accordingly:

1. the Master Architecture and VistaRoom Master Vocabulary must remain extensible beyond the current bounded proof;
2. the Candidate A Active Evaluation Profile defines what is operationally active now, not the permanent ceiling of the platform;
3. Phase 1, MVP, bounded scope and evaluation coverage may constrain current activation, testing and implementation, but must not erase foundational categories or force future baseline rewrites merely to activate additional room types, space segments, object families, relations or capabilities;
4. dormant definitions create no corpus, metric, implementation or commercial-rollout obligation;
5. architectural completeness means a stable extensible structure, ownership model, lifecycle and identifier system — not an exhaustive catalogue of every future space or object.

## Authorized scope of Revision 11

Revision 11 is the accepted planning baseline. This in-place correction candidate:

- preserves the accepted Revision 4 dependency-graph core, preparation order, candidate-lock model, consolidated package review and future atomic package-acceptance principle, while synchronizing their current application to the already-completed Contract 1/Contract 2 state and adding the ownership clarifications required by Bounded Scope Decision Rev5 (in-place corrected), Evaluation Threshold Plan Rev16, Test Data Handling Decision Rev10, Module Applicability Profile Rev19, Project Context v2.4, and the two-layer model;
- incorporates the strongest non-authoritative work from external draft Revision 6;
- synchronizes the Plan with accepted Bounded Scope Revision 5 (as in-place corrected, 2026-07-18) and accepted Evaluation Threshold Plan Revision 16 (2026-07-23);
- establishes all 34 Residential-34 active categories, including `kitchen_living_room` (one of the 34, not a 35th category) and the three bedroom specializations (`children_room`, `guest_bedroom`, `primary_bedroom`), per Contract 1 Revision 19 §2.3;
- updates Contract 3 and Contract 7 boundaries to the current accepted 34-category, 204-cell evaluation model;
- carries the full-platform foundation / Active Evaluation Profile distinction across Contracts 1–10;
- preserves all downstream non-authorization boundaries.

Revision 11 does not prepare any Supporting Contract and does not authorize repository persistence, corpus work, provider/model work, schema change, ADR creation, implementation or commercial rollout.

---

## 0. Original 2026-07-18 Revision 11 change summary (historical)

The original 2026-07-18 Revision 11 was the correction successor to external draft Revision 10. The statement below concerns that historical pre-acceptance review cycle only; it does not describe the later Final Consolidated Root Architecture Package Review or this 2026-07-23/24 correction cycle.

1. Corrects two erroneous references from "Test Data Handling Decision Revision 10" to the actual accepted Revision 9. [Historical, 2026-07-18 — superseded: Test Data Handling Decision Revision 10 is now itself the current accepted revision, per the 2026-07-23 correction; see Section 10A.]
2. Clarifies the provenance of external draft Revision 5 as an earlier chat-local two-layer-vocabulary draft from the Claude Project review track, while avoiding an unsupported byte-for-byte identity claim.
3. Rewords the Contract 1 → Contract 3 dependency so Contract 1 owns only the canonical identifier scheme and active category identifiers, while accepted Bounded Scope Rev5 and Evaluation Threshold Plan Rev15 [2026-07-23 correction: now Rev16] retain ownership of current category activation and evaluation counts.
4. Adds an explicit explanation that the 81 Metric Registry IDs are intentionally not restated because their normative content remains exclusively owned by accepted Evaluation Threshold Plan Rev15 [2026-07-23 correction: now Rev16; ID count and classification unchanged].
5. Records the rejected `ArchitecturalFixture` terminology alternative and the reason for preferring `FixedElement`, without pre-deciding schema representation.
6. Preserves without reopening the five-room scope, 30-cell grid, 60/90 ordinary minima, 15/31 special minima, 75/121 totals, fixture totals, Open support-floor state, full-platform foundation, two-layer vocabulary architecture, dependency graph, candidate-lock model, consolidated review and atomic acceptance topology. [Historical, 2026-07-18 — superseded: the five-room scope, 30-cell grid, and 75/121 totals are corrected to Residential-34 / 204-cell / 423-643 by the 2026-07-23/24 correction, Section 10A. Fixture totals, Open support-floor state, full-platform foundation, two-layer vocabulary architecture, dependency graph, candidate-lock model, and the complete-package review/atomic-acceptance principle remain unchanged; their current application is synchronized in Section 8 to recognize Contracts 1–2 as individually complete and Contracts 3–10 as pending.]

[2026-07-23 correction note: the sentence below is preserved as it originally read; it was already stale at the time of Revision 11's own acceptance (2026-07-18), since Revision 11's own header records it as ACCEPTED. It is retained here, unedited, as historical text, and its content is not operative — the header status line is authoritative.]

Revision 11 remains a draft. Revision 4 remains the authoritative Plan baseline until separate Project Owner acceptance.

---

## 1. Purpose and scope

Evaluation Threshold and Acceptance Plan Revision 16 (2026-07-23 correction; historically Revision 15) requires ten Supporting Contracts before Corpus Preparation Authorization. Contract 11 — the Aggregation, Uncertainty and Score-Stability Appendix — remains later because it depends on actual development denominators that do not yet exist.

This Plan does not write Contracts 1–10. It establishes:

1. the exact purpose and acceptance boundary of each contract;
2. the dependency graph between contracts and accepted external baselines;
3. the recommended preparation order;
4. terminology ownership;
5. conflict-resolution rules;
6. the separation between full-platform foundation and current Active Evaluation Profile;
7. boundaries against Contract 11, Test Data Handling Decision Rev10 Section 22 artifacts, Phase-1 implementation and dormant-category activation; [historical 2026-07-18: cited as Rev9]
8. the package-level drafting, review and atomic-acceptance topology;
9. a consolidated validation checklist.

The Plan exists to prevent ten independently drafted contracts from defining shared vocabulary, identity, confidence, provenance, determinability and population concepts inconsistently.

### 1.1 Two-layer architecture

- **Layer 1 — VistaRoom Master Vocabulary:** a versioned, extensible full-platform semantic foundation.
- **Layer 2 — Candidate A Active Evaluation Profile:** the exact vocabulary subset operationally active for the current Residential-first bounded evaluation. Accepted Bounded Scope Revision 5 (as in-place corrected, 2026-07-18) and Evaluation Threshold and Acceptance Plan Revision 16 (2026-07-23 correction; historically Revision 15) remain authoritative for active categories, evaluation populations and fixed counts; Contract 1 may encode and reference those decisions but may not redefine them.

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

the complete 34-category Residential-34 Active Evaluation Profile
(Contract 1 Revision 19, Section 2.3; Bounded Scope Decision Rev5
Section 6, as in-place corrected): living_room, bedroom, children_room,
guest_bedroom, primary_bedroom, kitchen, dining_room,
kitchen_living_room, home_office, library, bathroom, toilet_room,
shower_room, combined_bathroom, entryway, vestibule, hall, corridor,
dressing_room, walk_in_closet, pantry, laundry_room, utility_room,
mechanical_room, staircase_space, stair_hall, attic, mansard_room,
basement, garage, balcony, terrace, veranda, winter_garden.
`kitchen_living_room` is one of the 34, not a 35th category.
`children_room`, `guest_bedroom`, and `primary_bedroom` are separate
Space Subtype identities inheriting `bedroom`'s applicability in full
(Contract 1 Rev19 Annex S1 §S1.1), not folded into `bedroom`.
[Historical, 2026-07-18: this Active Evaluation Profile was originally
five categories (living room, bedroom, kitchen, bathroom, toilet room).
Superseded by the 2026-07-23 correction, Section 10A.]

The active segment remains `Residential-first`. Current top-level node classes remain `Room`, `StructuralElement` and `Object`.

**Acceptance boundary:**

- Contract 1 owns vocabulary identifiers, category membership, synonyms and active/dormant lifecycle. Accepted Bounded Scope Revision 5 (in-place corrected) and Evaluation Threshold and Acceptance Plan Revision 16 externally own the current 34-category Residential-34 activation and evaluation counts [historical 2026-07-18: "Evaluation Threshold Plan Revision 15" and "the current five-room activation and evaluation counts"]. Contract 1 must import those decisions and may not redefine them. Contract 1 does not own confidence, provenance, evidence, annotation pairing, fixture registries or conformance integration.
- Dormant categories create no corpus, annotation, metric, implementation or rollout authorization.
- The current 34-category Residential-34 profile is not the ceiling of VistaRoom AI. [Historical, 2026-07-18: "The current five-room profile is not the ceiling of VistaRoom AI."]
- Contract 1 must not add a new top-level node class.
- `FixedElement` is the recommended canonical semantic concept for fixed/built-in architectural items, but Contract 1 must normatively determine whether it is represented as an `Object` category branch, a classification facet or another schema-compatible semantic role. It must not be treated as a peer top-level class.
- A future activation of dormant categories requires a separate Project Owner decision.

**Dormant-leaf handling priority:**

1. use the exact active leaf when available;
2. otherwise map to an authorized active ancestor or aggregation;
3. otherwise use an authorized active `unknown`/`other` value;
4. exclusion is last resort and only where the Active Evaluation Profile explicitly permits it;
5. every exclusion must be traceable and measurable.

**Directly grounded in:** accepted Bounded Scope Revision 5 (in-place corrected, 2026-07-18); current controlling identity Evaluation Threshold and Acceptance Plan Revision 16 (accepted 2026-07-23) [historical 2026-07-18: "accepted Evaluation Threshold Plan Revision 15"]; and the fixed `StructuredSceneV0` top-level classes.


### Contract 2 — Relation Annotation and Applicability Contract

**Purpose:** Define ground-truth relation semantics — canonical identity, endpoint applicability, obstruction modes, and borderline/inconclusive treatment — for Adjacency, Containment and Blocking relations.

**Directly grounded in:**
- Current controlling identity: Evaluation Threshold and Acceptance Plan Revision 16 (accepted 2026-07-23); historical section reference retained only because Rev16 §2.1 confirms this provision unchanged from Revision 15: Rev15 §7.1 — canonical identity tuples for each relation type.
- Current controlling identity: Evaluation Threshold and Acceptance Plan Revision 16; historical section reference retained only because Rev16 §2.1 confirms this provision unchanged from Revision 15: Rev15 §7.2 — "GT truth, endpoint applicability, obstruction modes, borderline/inconclusive treatment and active-category applicability come only from the accepted Relation Annotation and Applicability Contract and applicability matrix. Applicability cannot be changed after viewing mechanism outputs." [historical 2026-07-18: this quotation read "room-type applicability"; the underlying provision is unchanged, only the stale label is corrected here.]

**Acceptance boundary:** This contract owns relation-type semantics and endpoint applicability rules in general. It explicitly shares its scope with Contract 3, which operationalizes applicability *per active category* — Contract 2 must not duplicate the active-category matrix, only reference it. [historical 2026-07-18: "per room type" / "the room-type matrix"]


### Contract 3 — Relation Type × Active Category Applicability Matrix

**Purpose:** Operationalize, for each of the 34 active Residential-34 categories (Contract 1 Revision 19 §2.3; Bounded Scope Decision Rev5 §6, as in-place corrected), which relation types and endpoint combinations are applicable. [Historical, 2026-07-18: this Purpose statement originally read "for each of the five active room types." Corrected 2026-07-23, Section 10A.]

Active categories: the complete 34-category Residential-34 set as listed in Section 2, Contract 1 above (living_room through winter_garden), including `kitchen_living_room` (one of the 34) and the three bedroom specializations. Per Evaluation Threshold and Acceptance Plan Revision 16 §14: "Directly and entirely category-count-keyed. Must be designed for the full 34-category Residential-34 model from the outset — no partial-category matrix."

**Acceptance boundary:** Contract 3 is a matrix, not a second definition of relation semantics. Contract 2 owns general relation definitions; Contract 3 owns category-specific applicability values, across all 34 categories. This Plan establishes matrix scope only and does not define the values.

**Downstream inheritance note:** The matrix covers only the current Active Evaluation Profile (all 34 Residential-34 categories). It does not extend to dormant Master Vocabulary space types without a separate profile-activation decision.


**[2026-07-23 correction note, applying to every "Rev15 §X" citation in Contracts 4-9 below]:** These citations reference the original Revision 13/15 section numbering for provisions Evaluation Threshold and Acceptance Plan Revision 16 §2.1 itself explicitly confirms as "Unchanged from Revision 15 Section 3.2... Re-confirmed by full re-reading, not by summary": governance classes, geometry/evidence contracts, unknown/determinability contract, ordinal confidence, fixture suites, and Concrete Conformance Field Inventory. Revision 16 does not restate these provisions under new section numbers; it confirms them unchanged and cites the same original numbering used below. These citations are therefore accurate as historical-numbering references to still-current, unaltered content, and the current controlling document identity for all of them is Evaluation Threshold and Acceptance Plan Revision 16 (accepted 2026-07-23), not Revision 15.

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

**Residential-34 impact:** The same entity/value-based annotation rules apply across the accepted 34-category Residential-34 Active Evaluation Profile. Category-count expansion does not change annotation-unit identity. [Historical, 2026-07-18: originally referenced the five-room Active Evaluation Profile; corrected 2026-07-23.]

**Dormant-leaf rule:** Apply Contract 1's priority order: exact active leaf → active ancestor/aggregation → active unknown/other → explicit traceable exclusion as last resort.


### Contract 7 — Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract

**Purpose:** Define the corpus population contract, scenario grid, special groups, lineage, sufficiency, completeness and expected-family determination, across the current normative evaluation unit — one RoomCase (not one ImageAsset; Evaluation Threshold and Acceptance Plan Rev16 §7).

**Current ordinary grid (Evaluation Threshold and Acceptance Plan Revision 16, Section 7.2-7.3; independently verified 2026-07-23):**

```text
34 Residential-34 categories x 6 scenario families = 204 ordinary cells
    (all 204 cells confirmed Applicable; ETAP Rev16 Section 7.2)
development: 2 RoomCases per cell = 408 RoomCases
held-out:    3 RoomCases per cell = 612 RoomCases
```

[Historical, 2026-07-18: "5 active room types x 6 scenario families = 30 ordinary cells; development: 60; held-out: 90." Superseded 2026-07-23 by the figures above.]

**Current special-group minima (ETAP Rev16 Section 8; unchanged in value from Rev13/Rev15, unit-aligned to RoomCase):**

```text
development: 15 RoomCases
held-out:    31 RoomCases
```

**Current total semantic RoomCase populations (ETAP Rev16 Section 9.1):**

```text
development: 423 RoomCases  (408 ordinary-grid + 15 special-group)
held-out:    643 RoomCases  (612 ordinary-grid + 31 special-group)
```

Operational and contract-violation fixture suites remain separate from these totals, and are unchanged (category-count independent; ETAP Rev16 Section 9.1):

```text
operational fixtures:        16 development / 29 held-out
contract-violation fixtures: 12 development / 18 held-out
```

The overall held-out evaluation-case total (semantic RoomCases plus both fixture suites; ETAP Rev16 Section 9.1) is **690** (643 + 29 + 18). This figure denotes exactly that sum and no other quantity; it is not a corpus-image count.

ImageAsset counts (as distinct from RoomCase counts) are not yet fixed: each RoomCase contains 1-6 ImageAssets, giving a mathematical range of 423-2,538 development ImageAssets and 643-3,858 held-out ImageAssets (ETAP Rev16 Section 7.4). The exact single-image/multi-image capture-set distribution remains an open Owner question (ETAP Rev16 Section 17A, Q3) and this Plan does not resolve it.

**Acceptance boundary:** Contract 7 owns scenario/population definitions, lineage and expected-family assignment. It does not reopen accepted counts and does not own unseen-claim vocabulary. Contract 7 must additionally cover the mandatory multi-image evaluation areas named in ETAP Rev16 Section 7.5 (same-room capture-set validation, mixed-room input rejection, cross-view entity matching, deduplication without collapsing distinct objects, contradiction preservation, evidence fusion, per-image and RoomCase-level provenance, and correct behavior for both one-image and multi-image RoomCases).

**Residential-34 impact:** The grid includes all 34 active Residential-34 categories (Section 2, Contract 1 above), not five. It does not extend automatically to dormant Master Vocabulary space types. [Historical, 2026-07-18: "The grid includes living room, bedroom, kitchen, bathroom and toilet room." Superseded 2026-07-23.]

**Metric Registry boundary:** Contract 7 and every other Supporting Contract must preserve the exact 81 Metric Registry IDs and their accepted blocking/diagnostic classifications, now owned by Evaluation Threshold and Acceptance Plan Revision 16 (2026-07-23 correction; historically Revision 15). This Plan does not add, remove, rename or reclassify any metric. The ID count and classification (81 total; categories A-G) are unchanged from Rev15 to Rev16.

The 81 Metric Registry IDs are intentionally not restated in this Preparation Plan. Their normative content remains exclusively owned by accepted Evaluation Threshold and Acceptance Plan Revision 16; this Plan enforces only non-alteration and correct downstream reference.


### Contract 8 — Unseen-Claim Evaluation Artifact Contract

**Purpose:** Define the sealed vocabulary of allowed/prohibited unseen-space claim codes referenced by every `UnseenClaimRecord` on a meaningful partial-scene case.

**Directly grounded in:**
- Rev15 §14.2 — "The sealed case annotation contains allowed and prohibited unseen-space claim codes." "There is no `Not Scorable` result; absence is FAIL."
- Rev15 §14.1 — meaningful partial-scene case criteria (precision/recall thresholds, subtype-correctness thresholds) provide the case population this contract's records apply to.

**Acceptance boundary:** Owns the claim-code vocabulary and the per-assertion `UnseenClaimRecord` field set. Depends on Contract 7 for which cases are "meaningful partial-scene" cases in the first place; must not redefine that determination.

**Downstream inheritance note (Revision 11; corrected 2026-07-23):** Claim codes reference only categories active in the accepted 34-category Residential-34 Active Evaluation Profile. Toilet-room, and all other 33 categories' context, is therefore valid where relevant. This Plan does not invent or enumerate new claim codes; Contract 8 owns that work. [Historical, 2026-07-18: originally referenced the five-room Active Evaluation Profile.]


### Contract 9 — Operational and Contract Violation Fixture Subtype Registry

**Purpose:** Register the exact fixture subtypes, per-subtype development/held-out counts, expected results, reason codes, retryability, and prohibited-outcome lists for the Failure, C.2 operational-rejection, C.3 general-rejection, and Contract Violation fixture suites.

**Directly grounded in:**
- Rev15 §12.1–§12.4 — the four fixture tables (subtype ID, dev/HO counts, expected result/reason, retryability, prohibited outcomes) and the fixed totals: Operational 16 development / 29 held-out; Contract Violation 12 development / 18 held-out; "every listed subtype is critical and has a 1.00 subtype floor. Suites are disjoint."

**Acceptance boundary:** A registry of already-fixed fixture subtypes and counts (this plan does not reopen these numbers — the current controlling identity, Evaluation Threshold and Acceptance Plan Revision 16, fixes them exactly, confirming them unchanged from historical Revision 15 §12) [historical 2026-07-18: "Rev15 fixes them exactly"]. Contract 9 exclusively owns fixture subtype IDs, expected results, reason codes, retryability and prohibited-outcome lists. Where a subtype refers to category vocabulary from Contract 1, it cites Contract 1. Contract 9 does not depend on, import from, or defer naming to Contract 10. Contract 10 later imports Contract 9's locked registry and validates the fields that carry those values.

**Downstream inheritance note (Revision 11; corrected 2026-07-23):** The word "fixture" in this contract's title and content refers exclusively to test fixtures (operational and contract-violation test cases), as accepted in Evaluation Threshold and Acceptance Plan Revision 16 (historically Revision 15 §12; fixture totals and definitions unchanged between the two). This is categorically distinct from the Contract 1 `FixedElement` semantic concept. Residential-34 activation (34 categories, not five) does not by itself change the fixed operational-fixture totals (16 development / 29 held-out) or contract-violation totals (12 development / 18 held-out), and this Plan does not invent category-specific fixture counts. [Historical, 2026-07-18: originally read "Five-room activation."]


### Contract 10 — Conformance Field Inventory and Validation Contract

**Purpose:** Define the concrete, field-by-field conformance requirements for the C.1 candidate, the post-C.2/pre-C.3 StructuredScene artifact, and the final result envelope, integrating the identity, confidence, provenance and vocabulary fields defined by the other contracts into one zero-tolerance validation contract.

**Directly grounded in:**
- Evaluation Threshold and Acceptance Plan Revision 16 (2026-07-23 correction; historically Revision 15) §13.1–§13.3 — the three field inventories, each naming required fields (schema version, `operationId`/`roomCaseId`/`imageAssetId`/`sourceAssetId` identity per Test Data Handling Decision Rev10 §3.3.0, node/relation ID uniqueness, required confidence/provenance enums, required EvidenceReference) and stating that "presence, enum/range, cardinality and identity mismatch are zero-tolerance conformance failures." [Historical, 2026-07-18: the identity field was originally cited as `operationId`/`sourceImageId` per Rev9's single-image model.]

**Acceptance boundary:** This is the integration layer. It must import exactly the field names, enum values and identity conventions locked by upstream owners, including Contracts 1, 2, 4, 5, 6, 8 and 9 and external identity rules from Test Data Handling Decision Rev10 (2026-07-23 correction; historically Rev9). It owns only conformance-field presence, conditionality, cardinality, range/enum validation, identity consistency and failure behavior; it does not own the underlying semantic definitions or fixture reason-code vocabulary. Test Data Handling Decision Rev10 Section 3.3.0 already fixes the identity-level model (`operationId` -> `roomCaseId` -> `imageAssetId` <-> `sourceAssetId`); Contract 10 may not begin normative drafting until the Owner-approved exact field-name/JSON/envelope/downstream-implementation alignment recorded in Sections 3, 5 and 7 is separately resolved, and it may not be finalized until all named upstream contracts are locked. Because of this, it is structurally the final contract in the package, not merely a convenient last drafting step. [Historical, 2026-07-18: this boundary originally described the entire identity-alignment question, not only the field/JSON/envelope layer, as unresolved; the identity-level model itself is now fixed by TDH Rev10, per this correction.]

**Downstream inheritance note (Revision 11; corrected 2026-07-23):** All 34 accepted Residential-34 Active Evaluation Profile categories, including `kitchen_living_room` and the three bedroom specializations, are valid current-profile values. A dormant Master Vocabulary category remains invalid in a current bounded-proof artifact unless separately activated. Contract 10 must preserve this distinction as a zero-tolerance conformance rule. The identity-level model (`operationId`/`roomCaseId`/`imageAssetId`/`sourceAssetId`) is now fixed by Test Data Handling Decision Rev10 §3.3.0; only the exact field-name/JSON/envelope/downstream-implementation alignment remains an open prerequisite for Contract 10, and must not be inferred by this Plan. [Historical, 2026-07-18: originally described "the five accepted Active Evaluation Profile room types" and treated the entire identity question as unresolved.]

---


## 2A. Full-platform foundation / current active-profile responsibility matrix

| Contract | Full-platform foundation responsibility | Current Active Evaluation Profile responsibility |
|---|---|---|
| 1 | Own extensible Master Vocabulary structure, identifiers, lifecycle, localization and future activation hooks | Encode the externally accepted 34-category Residential-34 active subset and current category membership without redefining Bounded Scope Rev5 (as in-place corrected) or Evaluation Threshold Plan Rev16 [historical 2026-07-18: "five-room active subset"] |
| 2 | Define stable relation semantics capable of future profile reuse | Apply those semantics to relation endpoints available in the current active vocabulary |
| 3 | Preserve a matrix structure extensible to future activated categories | Provide values for all 34 active Residential-34 categories only (Contract 1 Revision 19 §2.3; Bounded Scope Decision Rev5 §6, as in-place corrected) [historical 2026-07-18: "the five currently active room types only"] |
| 4 | Define reusable evidence, provenance and determinability-evidence concepts | Apply them to fields and capabilities active in the current evaluation |
| 5 | Define reusable ordinal confidence generation and normalization | Apply only to confidence-bearing values active in the current profile |
| 6 | Define reusable pairing, sealing and adjudication rules | Evaluate current active entities/values and apply the dormant-leaf fallback priority |
| 7 | Define reusable population, lineage, sufficiency and completeness mechanics | Use the accepted 204-cell, 408/612, 15/31 and 423/643 RoomCase model (ETAP Rev16) [historical 2026-07-18: "30-cell, 60/90, 15/31 and 75/121 model"] |
| 8 | Define reusable unseen-claim artifact structure | Use claim codes applicable to the current active profile; do not invent dormant-category claims |
| 9 | Define stable test-fixture registry ownership and validation semantics | Preserve accepted 16/29 and 12/18 totals; do not invent room-specific counts |
| 10 | Define reusable conformance integration and failure behavior | Accept all 34 active Residential-34 category values, reject dormant values, and preserve the still-open field/JSON/envelope alignment prerequisite (identity-level model already fixed by TDH Rev10 §3.3.0) [historical 2026-07-18: "active five-room values" and "the unresolved identity prerequisite" as entirely open] |

This matrix does not add dependency edges by itself. Every normative import still must appear in Section 3 or be explicitly marked non-normative/no-lock in Sections 3 and 5.

---

## 3. Dependency model

The package is a directed multi-parent dependency graph, not a single-root tree. Contract 1 is foundational for vocabulary structure and category membership, but accepted Bounded Scope Revision 5 (as in-place corrected, 2026-07-18) and Evaluation Threshold and Acceptance Plan Revision 16 (2026-07-23 correction; historically Revision 15) remain the external owners of current category activation (34 Residential-34 categories) and evaluation counts (204-cell grid). Contracts 4 and 5 are independent normative roots for evidence/provenance and confidence. External accepted baselines and unresolved Owner prerequisites are first-class source nodes.

### 3.1 Dependency edge table

Revision 11 preserves the accepted Revision 4 dependency-graph core and preparation logic. It adds only the direct vocabulary/profile and external-baseline edges required to synchronize the graph with the currently accepted Bounded Scope Rev5 (in-place corrected) / Evaluation Threshold Plan Rev16 / Test Data Handling Decision Rev10 and the two-layer model. Existing dependency-strength values are unchanged; each added edge uses the existing taxonomy.

| Upstream source | Downstream contract | Dependency content | Dependency strength | Required readiness/gate before downstream finalization |
|---|---|---|---|---|
| Contract 1 | Contract 2 | vocabulary import — **Active Evaluation Profile subset of** category/subtype vocabulary used by relation endpoints and examples | Finalization dependency | Contract 1 candidate-locked for downstream drafting; locked before Contract 2 finalization |
| Contract 2 | Contract 3 | definition import — canonical relation identity and general applicability semantics | Finalization dependency | Contract 2 candidate-locked for drafting; locked before Contract 3 finalization |
| Contract 1 | Contract 3 | active-profile vocabulary import — canonical identifier scheme for all 34 Residential-34 categories whose activation and count are externally fixed by Bounded Scope Rev5 (in-place corrected) and Evaluation Threshold Plan Rev16, plus active category identifiers used by the applicability matrix [historical 2026-07-18: "the five room types"] | Finalization dependency | Contract 1 candidate-locked for drafting; locked before Contract 3 finalization; Contract 1 does not own category activation |
| Bounded Scope Decision Rev5 (in-place corrected) | Contract 3 | external-baseline reference — 34 active Residential-34 categories [historical 2026-07-18: "fixed five active room types"] | External-baseline dependency | accepted external baseline; no redefinition permitted |
| Contract 1 | Contract 6 | vocabulary import — **Active Evaluation Profile subset of** entity subtype vocabulary used by determinability units | Finalization dependency | Contract 1 locked before Contract 6 finalization |
| Contract 4 | Contract 5 | provenance-model import — confidence source/transformation rules must not conflict with the owned provenance enum and evidence/provenance distinctions | Finalization dependency | Contract 4 locked before Contract 5 finalization |
| Contract 4 | Contract 6 | evidence/provenance import — determinability evidence basis, provenance enum, best-effort field identity | Finalization dependency | Contract 4 locked before Contract 6 finalization |
| Contract 5 | Contract 6 | confidence import — confidence enum and source/transformation dimensions | Finalization dependency | Contract 5 locked before Contract 6 finalization |
| Contract 1 | Contract 7 | active-profile vocabulary import — canonical room/category identifiers and active aggregation values used by scenario, sufficiency and completeness annotation | Finalization dependency | Contract 1 locked before Contract 7 finalization |
| Contracts 2 and 3 | Contract 7 | population/scoring dependency — relation semantics and active-category applicability used by relation-based semantic-case rules | Finalization dependency | Contracts 2 and 3 locked before Contract 7 finalization |
| Bounded Scope Decision Rev5 (in-place corrected) | Contract 7 | external-baseline reference — 34 active Residential-34 categories and the Operation/RoomCase[1]/ImageAsset[1..6] bounded input scope [historical 2026-07-18: "fixed five active room types"] | External-baseline dependency | accepted external baseline |
| Evaluation Threshold and Acceptance Plan Rev16 | Contract 7 | external-baseline reference — 204-cell grid, 408/612 ordinary RoomCase minima, 15/31 special-group minima, 423/643 total RoomCase populations, and Metric Registry preservation [historical 2026-07-18: "30-cell grid... 75/121 totals", Revision 15] | External-baseline dependency | accepted external baseline; counts and metric identities may not be redefined |
| Test Data Handling Decision Rev10 (external identity baseline) | Contract 7 | external identity reference — `lineageId`, `roomCaseId`, and governed-asset identity used to trace the no-cross-subset lineage rule without redefining it [historical 2026-07-18: cited as Rev9] | External-baseline dependency | accepted external baseline |
| Contract 7 | Contract 8 | population dependency — meaningful-partial-scene and expected-family determination | Finalization dependency | Contract 7 locked before Contract 8 finalization |
| Contract 1 | Contract 8 | active-profile vocabulary import — canonical active category identifiers available to unseen-claim codes and records | Finalization dependency | Contract 1 locked before Contract 8 finalization |
| Contract 1 | Contract 9 | vocabulary reference — **Active Evaluation Profile subset of** severe-structural-hallucination-eligible subtype names where applicable | Finalization dependency | Contract 1 locked before Contract 9 finalization |
| Contract 5 | Contract 9 | confidence-model reference — any fixture expectation involving required confidence state or prohibited confidence outcome must use Contract 5 terminology | Finalization dependency | Contract 5 locked before Contract 9 finalization |
| Test Data Handling Decision Rev10 (external identity baseline) | Contract 9 | external fixture-identity reference — `fixtureId`, `fixtureLineageId` and governed-operation identity used without redefining them [historical 2026-07-18: cited as Rev9] | External-baseline dependency | accepted external baseline |
| Contract 1 | Contract 10 | integration import — **Active Evaluation Profile subset of** category/subtype vocabulary | Finalization dependency | Contract 1 locked before Contract 10 finalization |
| Contract 2 | Contract 10 | integration import — canonical relation identity and endpoint semantics represented in conformance fields | Finalization dependency | Contract 2 locked before Contract 10 finalization |
| Contract 4 | Contract 10 | integration import — evidence kind, provenance and best-effort evidence fields | Finalization dependency | Contract 4 locked before Contract 10 finalization |
| Contract 5 | Contract 10 | integration import — confidence fields and enums | Finalization dependency | Contract 5 locked before Contract 10 finalization |
| Contract 6 | Contract 10 | integration import — determinability/pairing outcome requirements where represented in conformance inventory | Finalization dependency | Contract 6 locked before Contract 10 finalization |
| Contract 8 | Contract 10 | integration import — `UnseenClaimRecord` field set and per-assertion validation where represented in conformance inventory | Finalization dependency | Contract 8 locked before Contract 10 finalization |
| Contract 9 | Contract 10 | registry import — fixture subtype IDs, reason codes, expected results and prohibited outcomes | Finalization dependency | Contract 9 locked before Contract 10 finalization |
| Test Data Handling Decision Rev10 (external identity baseline) | Contract 10 | external identity import — governed `operationId`/`roomCaseId`/`imageAssetId`/`sourceAssetId` identity (Rev10 §3.3.0) and conditional field rules are referenced, never redefined [historical 2026-07-18: cited as Rev9, single-image identity] | External-baseline dependency | accepted external baseline |
| Evaluation Threshold and Acceptance Plan Rev16 | Contract 10 | external conformance/evaluation baseline — all 34 active Residential-34 category values, field inventories, Metric Registry identity and zero-tolerance conformance requirements [historical 2026-07-18: "active five-room values", Revision 15] | External-baseline dependency | accepted external baseline; no metric or threshold redefinition permitted |
| Test Data Handling Decision Rev10 §3.3.0 (identity-level model fixed); remaining field/JSON/envelope alignment | Contract 10 | identity-alignment prerequisite — the `operationId` -> `roomCaseId` -> `imageAssetId` <-> `sourceAssetId` identity-level model is fixed by TDH Rev10; the exact field names, schema representation, envelope serialization, and downstream-implementation alignment remain Contract 10's own responsibility [historical 2026-07-18: described as an entirely open relationship between Rev15 `sourceImageId` and Rev9 `inputArtifactId`] | Acceptance dependency | explicit Project Owner decision required before any normative Contract 10 field/JSON/envelope drafting begins; the identity-level model itself is no longer an open Owner question |

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

- **Relation cluster:** Contract 1 and Contract 2 feed Contract 3; Contracts 1–3 feed Contract 7 where vocabulary, relation semantics and active-category applicability meet; Contract 2 also feeds Contract 10.
- **Evidence/confidence/determinability cluster:** Contract 4 feeds Contracts 5, 6 and 10; Contract 5 feeds Contracts 6, 9 and 10; Contract 6 also feeds Contract 10.
- **Semantic-case cluster:** Contract 7 imports Contract 1 active vocabulary (34 Residential-34 categories), Contracts 2–3 relation/applicability rules, Bounded Scope Rev5 (in-place corrected)/Evaluation Threshold Plan Rev16 population baselines and Test Data Handling Decision Rev10 lineage identity [historical 2026-07-18: "Rev5/Rev15" and "Rev9"]. Contract 7 then feeds Contract 8, which also imports Contract 1 active vocabulary; Contract 8 feeds Contract 10 where unseen-claim records are represented.
- **Fixture/integration cluster:** Contract 9 imports Test Data Handling Decision Rev10 fixture identity [historical 2026-07-18: "Rev9"] and owns fixture registries; Contract 10 imports that registry. No reverse Contract 10 → Contract 9 dependency exists.
- **Identity sources:** Test Data Handling Decision Rev10 is the accepted external identity owner for Contracts 7, 9 and 10, fixing the `operationId`/`roomCaseId`/`imageAssetId`/`sourceAssetId` identity-level model (§3.3.0); the separate exact field/JSON/envelope alignment remains a pre-draft Owner/Contract-10 prerequisite [historical 2026-07-18: cited as Rev9, single-image `sourceImageId`].
- **Integration layer:** Contract 10 is structurally non-finalizable until all named upstream locks are complete and cannot begin normative drafting until the identity-alignment prerequisite is accepted.
- **Master Vocabulary / Active Evaluation Profile boundary (Revision 11):** Contract 1 owns the Master Vocabulary and the Active Evaluation Profile. Every current-package edge sourced from Contract 1 imports the Active Evaluation Profile subset only. The Master Vocabulary remains the extensible full-platform foundation and is consulted when a future, separately authorized profile activation is proposed.

---


## 4. Recommended preparation order

Preserved from accepted Revision 4 and external draft Revision 6; no ordering change is proposed by Revision 11.

```text
1. Contract 1  — Master Vocabulary and Active Evaluation Profile Contract
2. Contract 2  — Relation Annotation and Applicability Contract
3. Contract 3  — Relation Type × Active Category Applicability Matrix [historical 2026-07-18: "Active Room Type Applicability Matrix"]
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

This order now governs the remaining Contracts 3–10 drafting and finalization cycle. Contract 1 Rev19 and Contract 2 Rev10 are already individually Owner-accepted, candidate-locked, and repository-persisted under later, separately authorized decisions; they are imported as fixed upstream inputs and are not redrafted or reopened by this Plan correction. Their individual completion does not constitute the later atomic Contracts 1–10 package-acceptance event: after Contracts 3–10 are complete, one consolidated package review must cover all ten contracts, followed by a separately authorized atomic package-acceptance decision. Contract 10 may not begin normative drafting until the identity-alignment prerequisite in Sections 3 and 7 has an explicit Owner-approved resolution. After that gate, it may be drafted, but it may not be finalized until Contracts 1, 2, 4, 5, 6, 8 and 9 are locked or otherwise confirmed as the applicable accepted upstream identities. Contract 3 affects Contract 10 transitively through Contract 7 and Contract 8 where active-category applicability shapes semantic-case populations and unseen-claim records represented in the conformance inventory.

---


## 5. Terminology and ownership table

| Shared term / field | Owning source | Current consumers |
|---|---|---|
| VistaRoom Master Vocabulary | Contract 1 | Future profile activations; current contracts through the Active Profile only |
| Active Evaluation Profile vocabulary membership and lifecycle | Contract 1 | Contracts 2, 3, 6, 7, 8, 9, 10 |
| Current Residential-34 (34-category) activation and evaluation counts | External — accepted Bounded Scope Rev5 (in-place corrected) and Evaluation Threshold and Acceptance Plan Rev16 [historical 2026-07-18: "Current five-room activation", Revision 15] | Contracts 1, 3, 7, 10 |
| Category/subtype vocabulary and synonyms | Contract 1 | 2, 6, 9, 10 |
| `FixedElement` semantic concept | Contract 1 | Current package only through active categories; never Contract 9 test-fixture terminology |
| Relation identity and general applicability semantics | Contract 2 | 3, 7, 10 |
| Active-category-specific applicability values [historical 2026-07-18: "Room-type-specific applicability values"] | Contract 3 | 7 |
| Evidence kind, provenance and determinability evidence basis | Contract 4 | 5, 6, 10 |
| Confidence enum and normalization | Contract 5 | 6, 9, 10 |
| Annotation-unit pairing and determinability outcomes | Contract 6 | 10 |
| Scenario mechanics, lineage, sufficiency, completeness, expected-family | Contract 7 | 8, later Contract 11 |
| Fixed 204-cell / 408–612 / 15–31 / 423–643 RoomCase population values and 81 Metric Registry identity | External — Evaluation Threshold and Acceptance Plan Rev16 [historical 2026-07-18: "30-cell / 60-90 / 15-31 / 75-121", Revision 15] | Contracts 7, 10, later Contract 11 |
| Unseen-claim vocabulary and `UnseenClaimRecord` | Contract 8 | 10 |
| Fixture subtype IDs, counts, reason codes and prohibited outcomes | Contract 9 | 10, later Contract 11 |
| Conformance presence, cardinality, enum/range and identity validation | Contract 10 | — |
| Operation/RoomCase/ImageAsset identity (`operationId`/`roomCaseId`/`imageAssetId`/`sourceAssetId`) | Test Data Handling Decision Rev10 §3.3.0 [historical 2026-07-18: cited as Rev9, single-image `operationId`/`sourceImageId`] | 7, 9, 10 |
| Exact field-name/JSON/envelope/downstream-implementation alignment of the identity levels TDH Rev10 already fixed | Contract 10 (remaining Owner-approved prerequisite; identity-level model itself is no longer open) | Contract 10 |

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
   against the actual authoritative source (for example Bounded Scope
   Rev5, Test Data Handling Decision Rev10, Evaluation Threshold Plan
   Rev16, or another accepted baseline). It must not be silently
   resolved by the contract drafters.
```

This mirrors the lesson from Candidate A Test Data Handling Decision: shared boundaries (there, provider-track identity; here, node/relation/value identity and vocabulary) must have exactly one normative home, established before drafting, not reconciled after divergent drafts already exist.

---


## 7. Boundaries and later dependencies

### 7.1 Contract 11 and Open support floors

Ten relation/category-sensitive support-floor dispositions remain Open under Evaluation Threshold and Acceptance Plan Revision 16 (2026-07-23 correction; historically Revision 15) — now explicitly re-proven non-formulaic at 34-category scale (ETAP Rev16 Section 11). Their identities and Open status are authoritative; their numerical values are intentionally unresolved.

Contracts 1–10:

- must preserve that Open state;
- must not invent numerical support floors;
- may define the required identities, populations and annotation rules needed for later calculation;
- must defer numerical resolution to Contract 11 using actual development denominators.

This Plan does not authorize corpus creation or evaluation execution.

### 7.2 Test Data Handling Decision Revision 10

Test Data Handling Decision Revision 10 (2026-07-23 correction; historically Revision 9) remains the sole owner of governed operation, input, asset, fixture and lineage identity, now expressed as `operationId` -> `roomCaseId` -> `imageAssetId` <-> `sourceAssetId` (Rev10 §3.3.0). Contracts 7, 9 and 10 reference those identities without redefining them. [Historical, 2026-07-18: cited as Rev9's single-image `operationId`/`sourceImageId` model.]

### 7.3 Contract 10 identity prerequisite

Test Data Handling Decision Rev10 §3.3.0 already fixes the identity-level model (`operationId` -> `roomCaseId` -> `imageAssetId` <-> `sourceAssetId`; `sourceAssetId` never set-valued). Before normative Contract 10 drafting, the Project Owner must separately resolve only the remaining exact field names, schema representation, and envelope/serialization alignment of that already-fixed model — not the identity-level relationship itself, which is no longer open. This Plan does not infer the exact field-level convention or pre-decide Contract 10's schema representation. [Historical, 2026-07-18: this section described the entire relationship between Rev15 `sourceImageId` and Rev9 `inputArtifactId` / conditional `sourceAssetId` as unresolved; the identity-level model itself has since been fixed by TDH Rev10, per this 2026-07-23 correction.]

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

### 7.6 Current governance sequence and state

```text
[Historical, 2026-07-18: "1. Evaluation Threshold Plan Revision 15
acceptance and persistence — COMPLETE. 2. Preparation and Dependency
Plan successor — CURRENT STEP. 3. Module Applicability Profile
successor — LATER, SEPARATE AUTHORIZATION. 4. Contract 1 drafting —
LATER, SEPARATE AUTHORIZATION." Superseded in full by the current
sequence and state below.]

1. Phase 6 root-architecture package — CLOSED:
   - Contract 1 Rev19 — Owner-accepted, candidate-locked,
     repository-persisted;
   - Contract 2 Rev10 — Owner-accepted, candidate-locked,
     repository-persisted;
   - Evaluation Threshold and Acceptance Plan Rev16 — Owner-accepted,
     authoritative, repository-persisted;
   - Test Data Handling Decision Rev10 — Owner-accepted,
     authoritative, repository-persisted;
   - Module Applicability Profile Rev19 — Owner-accepted,
     authoritative, repository-persisted;
   - Transfer and Layer 2 Activation Preparation Directive,
     Corrected Rev3 — Owner-accepted, authoritative,
     repository-persisted.
2. Phase 7 Project Context v2.4 / Living Strategic Roadmap v1.4
   synchronization and persistence — CLOSED.
3. One Final Consolidated Review of the Current Root Architecture
   Package — COMPLETED; verdict CORRECTIONS REQUIRED because of F-1
   against this Plan Rev11.
4. This Rev11 in-place correction candidate — LIMITED CLOSURE
   VERIFICATION PASSED; FINAL DEEP ENGINEERING REVIEW PASSED;
   awaiting separate Project Owner Acceptance and separate repository-
   persistence authorization.
5. Contract 3 / Contracts 3–10 drafting — NOT AUTHORIZED, NOT STARTED.
6. Atomic Contracts 1–10 package acceptance — NOT AUTHORIZED,
   NOT COMPLETED; it requires Contracts 3–10 first.
7. Contract 11 and all downstream Diagnosability/Security, Phase-1,
   data-governance, corpus, provider/model, implementation, Layer 2
   effective activation and active_locked work — NOT AUTHORIZED.
```

Contracts 1 and 2 are no longer "no repository-backed draft"; both are individually complete, Owner-accepted, candidate-locked, and repository-persisted (see the source-status table above). Contracts 3–10 remain not started and not authorized. The final complete-package review and atomic Contracts 1–10 acceptance remain future steps and are not implied by the individual completion of Contracts 1–2. [Historical, 2026-07-18: "No repository-backed Contract 1 draft currently exists... The next authorized repository-track Contract 1 work will therefore be treated as the first verified draft." Superseded — Contract 1 Revision 19 is now complete.]

---

## 8. Package drafting, review and acceptance topology

This Section is prospective for the remaining Contracts 3–10 cycle and the later complete Contracts 1–10 package event. It becomes executable only after separate explicit Project Owner authorization. Contract 1 Rev19 and Contract 2 Rev10 are already individually Owner-accepted, candidate-locked, and repository-persisted; they are fixed upstream inputs, not work authorized by this Section. Acceptance of this corrected Plan does not authorize Contract 3 or any other downstream drafting.

### 8.1 Drafting, candidate-lock and stabilization

Once Contracts 3–10 drafting is separately authorized:

1. Contract 1 Rev19 and Contract 2 Rev10 are imported as the accepted, candidate-locked upstream identities. They are not redrafted or reopened without a separate explicit Project Owner decision.
2. Contracts 3–10 are drafted in the dependency order of Section 4.
3. An upstream contract may reach **candidate-lock** for downstream drafting, but candidate-lock is a distinct state and is not, by itself, equivalent to Project Owner acceptance. Where both states exist, both must be recorded separately.
4. A candidate-lock must record at minimum:
   - `candidateLockId`;
   - contract number and revision;
   - content hash;
   - exact definitions/sections treated as provisionally frozen;
   - known unresolved issues;
   - lock date;
   - locking authority;
   - superseded candidate-lock, if any;
   - affected downstream contracts.
5. Candidate-lock may be established only by the designated package preparation authority under the separately granted drafting authorization. It permits downstream consultation and drafting, not final atomic package acceptance.
6. Any change to a candidate-locked definition creates a superseding candidate-lock and triggers revalidation of every affected downstream contract listed by Section 3. Any reopening of accepted Contract 1 or Contract 2 additionally requires explicit Project Owner authorization.
7. A remaining contract becomes **locked** only when its candidate text is complete for the package identity and all upstream finalization dependencies are satisfied.
8. Contract 10 normative drafting cannot begin before the Owner-approved identity-alignment prerequisite. Contract 10 is finalized last after all of its named upstream contracts are locked or confirmed as the applicable accepted identities.

### 8.2 One consolidated package review

After Contracts 3–10 are complete, so that the complete set of Contracts 1–10 exists as one identified package:

- perform one full deep end-to-end review of all ten contracts together with the final terminology table and dependency matrix;
- issue one complete consolidated report and one closed findings matrix mapped to affected contracts;
- do not mark any Contract 3–10 identity as finally accepted within the complete package before that review closes;
- retain Contract 1 Rev19 and Contract 2 Rev10 as the already-accepted upstream identities during review unless a specific finding and separate Project Owner decision authorize reopening them;
- after the consolidated report, the Project Owner may authorize either: (a) a bounded in-place correction with one limited closure verification, or (b) a successor/new package identity with the full review level required by the scope of change;
- do not append new findings against an unchanged reviewed identity unless new evidence appears or a new/corrected identity is supplied.

### 8.3 Owner acceptance event

After the complete package passes consolidated review and any authorized closure verification, the Project Owner may authorize one atomic Contracts 1–10 package-acceptance event containing ten explicit contract decisions. The earlier individual acceptance of Contract 1 Rev19 and Contract 2 Rev10 remains valid and traceable; the later atomic event establishes the authoritative status of the complete ten-contract package and prevents downstream contracts from being accepted against changed upstream definitions. This atomic event is not authorized by this Plan correction.

Reopening after atomic package acceptance requires a new fact, a changed authoritative baseline, or an explicit successor/reopening decision by the Project Owner.

### 8.4 Required common supporting-contract skeleton

Contracts 3–10 must use the following minimum structure:

1. Document metadata and revision status.
2. Purpose and acceptance boundary.
3. Imported authoritative definitions and locked versions.
4. Owned definitions.
5. Normative rules.
6. Non-normative examples, clearly labeled.
7. Validation and failure rules.
8. Dependency and candidate-lock prerequisites.
9. Traceability to Evaluation Threshold and Acceptance Plan Rev16 (historically Rev15 where explicitly identified) and external accepted baselines.
10. Conflicts, unresolved issues and escalation path.
11. Owner Decision entries.
12. Explicit non-authorization boundary.

Contract 1 Rev19 and Contract 2 Rev10 are not structurally redrafted by this requirement. They are checked for cross-package compatibility during the consolidated package review. Contract 1's already-accepted Layer 1 / Layer 2 separation and bounded-completeness rules remain the applicable upstream baseline.

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
[ ] Every threshold, count and population figure traces to Evaluation Threshold and Acceptance Plan Rev16; any Rev15 section citation is explicitly historical lineage.
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
[ ] Contract 1 Rev19 and Contract 2 Rev10 exact accepted/candidate-lock identities were verified and imported without silent reopening.
[ ] Contract 3 was checked against Contract 1 Rev19, Contract 2 Rev10 and accepted Bounded Scope Rev5.
[ ] Contract 5 was checked against final Contract 4.
[ ] Contract 6 was checked against Contract 1 Rev19 and final Contracts 4 and 5.
[ ] Contract 7 was checked against Contract 1 Rev19, Contract 2 Rev10, final Contract 3, accepted Bounded Scope Rev5,
    accepted Evaluation Threshold and Acceptance Plan Rev16, and accepted Test Data Handling Decision Rev10 lineage identity.
[ ] Contract 8 was checked against Contract 1 Rev19 and final Contract 7.
[ ] Contract 9 was checked against Contract 1 Rev19, final Contract 5 and accepted Test Data Handling Decision Rev10 fixture identity.
[ ] Contract 10 was checked against Contract 1 Rev19, Contract 2 Rev10, final Contracts 4, 5, 6, 8 and 9,
    accepted Test Data Handling Decision Rev10 identity, accepted Evaluation Threshold and Acceptance Plan Rev16 conformance/evaluation baselines,
    and the Owner-approved exact field/JSON/envelope alignment resolution (identity-level model already fixed by TDH Rev10 §3.3.0).
[ ] Contract 9 contains no dependency on Contract 10.
[ ] The identity-level model (`operationId`/`roomCaseId`/`imageAssetId`/`sourceAssetId`) is fixed by Test Data Handling Decision Rev10 §3.3.0, and the remaining exact field/JSON/envelope alignment checkpoint was Owner-approved before
    any normative Contract 10 drafting began.
[ ] Every Contract 1-sourced edge imports only the Active Evaluation Profile subset for current execution.
[ ] Dormant-leaf handling follows exact leaf → active ancestor → active unknown/other → explicit traceable exclusion.

CANDIDATE-LOCK GOVERNANCE
[ ] Every candidate-lock has an ID, revision, hash, frozen-definition
    scope, unresolved-issue list, authority and downstream impact list.
[ ] Every superseding candidate-lock identifies the prior lock.
[ ] Every affected downstream contract was revalidated.
[ ] Candidate-lock and Project Owner acceptance are recorded as distinct states; neither is inferred from the other.

BOUNDARY DISCIPLINE
[ ] No contract defines a Test Data Handling Decision Rev10 Section 22 data-governance artifact.
[ ] No contract specifies a Phase-1 implementation mechanism.
[ ] No contract prepares or anticipates Contract 11 content beyond imports.
[ ] No Contract 1–10 assigns a numerical value to any of the ten Open support-floor dispositions.
[ ] Every contract carries the required non-authorization statement.
[ ] No contract other than Contract 1 defines a dormant Master Vocabulary
    category, and Contract 1's dormant categories carry the Section 7.5
    non-authorization boundary.

PACKAGE GOVERNANCE
[ ] A separate explicit Project Owner authorization exists for Contracts 3–10 drafting.
[ ] Contract 1 Rev19 and Contract 2 Rev10 are treated as already-completed, accepted, candidate-locked upstream identities and are not redrafted without explicit authorization.
[ ] Contracts 3–10 use the common skeleton in Section 8.4.
[ ] No Contract 3–10 is marked finally accepted within the complete package before consolidated package review and closure.
[ ] The complete Contracts 1–10 package has one package identity and one terminology table.
[ ] One consolidated package review covers all ten contracts and cross-links.
[ ] Any bounded correction follows explicit Owner authorization and one limited closure verification; broader redesign receives the review level appropriate to the new identity.
[ ] Final complete-package acceptance is one separately authorized atomic governance event with ten explicit decisions.
```

---


## 9. Explicit non-authorization restatement

Revision 11 is already the accepted, repository-persisted preparation and dependency Plan in its original 2026-07-18 identity. Upon separate Project Owner Acceptance, this corrected in-place identity becomes the current authoritative Revision 11 content; Revision 4 remains historical. Acceptance of this corrected identity does not itself authorize any downstream work.

Acceptance of this corrected Revision 11 identity alone does not authorize:

- redrafting or reopening Contract 1 Rev19 or Contract 2 Rev10;
- drafting Contract 3 or Contracts 3–10;
- Contract 11;
- a further Module Applicability Profile successor (Revision 19 is already complete and remains the current baseline);
- Phase-1 or Execution Profile preparation;
- Test Data Handling Decision Rev10 Section 22 artifacts;
- corpus or fixture creation;
- annotation;
- provider contact, invocation, evaluation or selection;
- schema changes or a new top-level node class;
- ADR creation;
- Implementation Package preparation;
- implementation;
- production or commercial rollout;
- Layer 2 effective activation or `active_locked` transition;
- atomic Contracts 1–10 package acceptance;
- repository persistence of this corrected Plan identity or any contract.

A separate explicit Project Owner authorization is required before Contract 3 or any Contracts 3–10 drafting begins. No new Contract 3–10 candidate-lock may be created under this Plan alone. Existing Contract 1 and Contract 2 candidate-locks remain unchanged.

---

## 10. Proposed Owner Decisions (historical, 2026-07-18; preserved verbatim, non-operative where superseded by Section 10A)

- **Decision R11.1:** Accept Preparation and Dependency Plan Revision 11.
- **Decision R11.2:** Supersede accepted Revision 4 upon acceptance and preserve external draft Revisions 5, 6, 7, 8, 9 and 10 as non-authoritative source material.
- **Decision R11.3:** Adopt the VistaRoom Master Vocabulary / Candidate A Active Evaluation Profile two-layer architecture, with Contract 1 owning vocabulary membership/lifecycle while accepted Rev5/Rev15 retain ownership of current room activation and evaluation counts. **[Amended by Section 10A, Amendment R11.3-A: "Rev5/Rev15" now denotes Bounded Scope Rev5 (in-place corrected) and Evaluation Threshold Plan Rev16; the two-layer architecture itself is unchanged and remains operative.]**
- **Decision R11.4:** Adopt the full-platform foundation rule: current bounded scope is an activation boundary, not the architectural ceiling of VistaRoom AI. **[Still fully operative, unchanged.]**
- **Decision R11.5:** Confirm the five active room types: living room, bedroom, kitchen, bathroom and toilet room. **[SUPERSEDED — see Section 10A, Decision R11.5-S.]**
- **Decision R11.6:** Confirm the 30-cell ordinary grid, 60/90 ordinary minima, 15/31 special minima and 75/121 total semantic-image populations. **[SUPERSEDED — see Section 10A, Decision R11.6-S.]**
- **Decision R11.7:** Confirm operational fixture totals 16/29 and contract-violation fixture totals 12/18 remain separate and unchanged. **[AMENDED — see Section 10A, Decision R11.7-A. The fixture totals themselves are confirmed unchanged; the amendment concerns only the identity-model context in which they are stated.]**
- **Decision R11.8:** Confirm `FixedElement` as the canonical semantic term, while leaving its exact schema-compatible representation to Contract 1 under the existing `Object` top-level class. **[Still fully operative, unchanged.]**
- **Decision R11.9:** Confirm the dormant-category lifecycle, bounded-completeness rule and traceable dormant-leaf fallback priority. **[Still fully operative, unchanged.]**
- **Decision R11.10:** Confirm preservation of all 81 Metric Registry IDs and their blocking/diagnostic classifications, and confirm that the ten Open support-floor dispositions remain numerically unresolved until Contract 11 uses actual development denominators. **[Still fully operative; ID count and classification unchanged between Rev15 and Rev16 (independently verified 2026-07-23); the ten Open dispositions remain Open, now re-proven non-formulaic at 34-category scale, ETAP Rev16 Section 11.]**
- **Decision R11.11:** Accept the dependency graph as revised by the required Rev5/Rev15 and two-layer synchronization edges, while preserving the preparation order, candidate-lock model, consolidated package review, atomic acceptance topology and Contract 10 identity prerequisite. **[Amended by Section 10A, Amendment R11.11-A: the dependency graph is resynchronized to Bounded Scope Rev5 (in-place corrected), Evaluation Threshold Plan Rev16 and Test Data Handling Decision Rev10. Its current application now recognizes Contract 1 Rev19 and Contract 2 Rev10 as individually Owner-accepted, candidate-locked, repository-persisted upstream identities; Contracts 3–10 remain pending; the later complete-package review and atomic Contracts 1–10 acceptance remain separate future governance steps.]**
- **Decision R11.12:** Confirm that Module Applicability Profile synchronization and Contract drafting each require separate explicit Project Owner authorization. **[Still fully operative; Module Applicability Profile synchronization is now complete (Revision 19, accepted 2026-07-23); Contract drafting remains separately not authorized.]**

Upon its original acceptance (2026-07-18), Revision 11 became the authoritative Plan baseline, superseding Revision 4. This remains true. The corrections in Section 10A below are themselves subject to separate Project Owner Acceptance before they become operative; until that acceptance, this Section 10 (historical) and Section 10A (proposed correction) together describe, respectively, what was decided in 2026-07-18 and what is proposed to supersede or amend it on 2026-07-23.

---

## 10A. Owner Decisions — 2026-07-23/24 In-Place Correction (Proposed; technical closure verified, effective closure pending Project Owner Acceptance)

These decisions are proposed to the Project Owner to make effective the technically verified closure of Finding F-1 and the additional internal-consistency corrections identified during the final engineering review. They do not take effect until separately accepted. Upon acceptance, they supersede or amend the historical Section 10 decisions named below; none of Section 10 is deleted or retroactively described as never having been decided.

- **Amendment R11.3-A (amends R11.3):** Confirm that the two-layer VistaRoom Master Vocabulary / Candidate A Active Evaluation Profile architecture remains unchanged. Replace the historical current-source reference `Rev5/Rev15` with Bounded Scope Decision Rev5 as corrected in place and Evaluation Threshold and Acceptance Plan Rev16. Contract 1 Rev19 owns vocabulary membership and lifecycle; Bounded Scope Rev5 and ETAP Rev16 remain the external owners of current Residential-34 activation and evaluation cardinalities. No vocabulary, activation, or threshold decision is newly created by this amendment.

- **Decision R11.5-S (supersedes R11.5):** Confirm that the currently active Layer 2 Active Evaluation Profile is the complete 34-category Residential-34 set (Bounded Scope Decision Rev5, in-place corrected, Section 6, Decision 19; Contract 1 Revision 19, Section 2.3), not the five categories named in the original R11.5. `kitchen_living_room` is one of the 34, not a 35th category; `children_room`, `guest_bedroom`, and `primary_bedroom` are separate Space Subtype identities inheriting `bedroom`'s applicability in full (Contract 1 Rev19 Annex S1 §S1.1). Controlling later source: Bounded Scope Decision Rev5 (in-place correction, commit `565a3a03294086f319ccec5ff2e77afb5af8a9e1`, accepted 2026-07-18); Contract 1 Revision 19 (accepted 2026-07-22).

- **Decision R11.6-S (supersedes R11.6):** Confirm that the currently accepted ordinary evaluation grid is 34 categories x 6 scenario families = 204 cells (all 204 confirmed Applicable), with ordinary-grid RoomCase minima of 408 development / 612 held-out, special-group minima of 15 development / 31 held-out (unchanged in value), and total semantic RoomCase populations of 423 development / 643 held-out — replacing the 30-cell / 60-90 / 75-121 figures in the original R11.6. The normative evaluation unit is one RoomCase, not one ImageAsset; ImageAsset counts remain a separate, not-yet-fixed mathematical range (423-2,538 development; 643-3,858 held-out), pending the capture-set distribution question reserved by Evaluation Threshold Plan Rev16 Section 17A, Q3. Controlling later source: Evaluation Threshold and Acceptance Plan Revision 16, Sections 7-9 (accepted 2026-07-23).

- **Decision R11.7-A (amends R11.7):** Confirm that operational fixture totals (16 development / 29 held-out) and contract-violation fixture totals (12 development / 18 held-out) remain separate and unchanged in value from the original R11.7 — these totals are category-count independent and unaffected by the Residential-34 correction. The amendment is limited to context: these totals are now owned by Evaluation Threshold and Acceptance Plan Revision 16 (not Revision 15), and the "RoomCase" terminology used elsewhere in this corrected Plan does not apply to fixture-suite counts, which remain fixture-unit counts as originally defined. Controlling later source: Evaluation Threshold and Acceptance Plan Revision 16, Section 9.1 (accepted 2026-07-23).

- **Decision R11.13 (new):** Confirm that Test Data Handling Decision Revision 10 (accepted 2026-07-23) fixes the identity-level model `operationId` -> `roomCaseId` -> `imageAssetId` <-> `sourceAssetId` (Section 3.3.0), replacing the single-image `operationId`/`sourceImageId` model referenced throughout the original Revision 11 text as "Rev9." The exact field names, schema representation, envelope serialization, and downstream-implementation alignment of this already-fixed identity-level model remain Contract 10's own responsibility and a still-open Owner-approved prerequisite (Sections 3, 5, 7 of this Plan) — the identity-level relationship itself is no longer an open question. Controlling later source: Test Data Handling Decision Revision 10, Section 3.3.0 (accepted 2026-07-23).

- **Decision R11.14 (new):** Confirm that Module Applicability Profile Revision 19 (accepted 2026-07-23) is the current applicability baseline referenced by this Plan, replacing Revision 13. Controlling later source: Module Applicability Profile Revision 19 (accepted 2026-07-23).

- **Decision R11.15 (new):** Confirm that Contract 3's purpose (Section 2 above) is to operationalize relation-type applicability for all 34 active Residential-34 categories, not five, and that Contract 7's population contract (Section 2 above) must import the 204-cell grid and 423/643 RoomCase totals, not the historical 30-cell/75/121 figures. Controlling later source: Evaluation Threshold and Acceptance Plan Revision 16, Section 14 (Supporting Contracts 1-10 Impact Matrix).

- **Decision R11.16 (new — current package-state and acceptance-topology synchronization):** Confirm that Contract 1 Revision 19 and Contract 2 Revision 10 are already individually Owner-accepted, candidate-locked, and repository-persisted upstream identities; Contracts 3–10 remain not authorized and not started. Confirm that the later complete Contracts 1–10 package review and atomic package-acceptance event remain separate future governance steps, not completed or authorized by the individual Contract 1/Contract 2 decisions. Contract 1 and Contract 2 are not redrafted or reopened without a separate explicit Project Owner decision. Controlling current-state sources: accepted Project Context v2.4, Phase 7 synchronized state and next-governance sequence; Module Applicability Profile Rev19 (CON-01 and mandatory sequence).

- **Amendment R11.11-A (amends R11.11):** Confirm that the dependency graph remains operative with its preparation order, candidate-lock model, consolidated complete-package review, atomic complete-package acceptance topology, and Contract 10 identity prerequisite preserved. Resynchronize its controlling external sources to Bounded Scope Rev5 as corrected in place, Evaluation Threshold and Acceptance Plan Rev16, and Test Data Handling Decision Rev10. Apply the graph to the current state recorded in Decision R11.16: Contracts 1–2 are fixed accepted upstream identities, while Contracts 3–10 remain pending and separately unauthorized.

- **Decision R11.17 (new — correction-governance synchronization):** Confirm that, after one complete consolidated review, a bounded correction may be applied in place under explicit Project Owner authorization and closed by one limited verification when the correction scope is narrow and fully enumerated; a broad redesign or new package identity receives the review level appropriate to that new scope. No new finding may be added against an unchanged reviewed identity without new evidence. This decision aligns this Plan with the Owner-established one-pass consolidated-review and in-place-correction practice and does not weaken the requirement for a full review of the completed Contracts 1–10 package.

None of Amendments/Decisions R11.3-A, R11.5-S, R11.6-S, R11.7-A, R11.11-A, R11.13, R11.14, R11.15, R11.16, or R11.17 authorizes Contract 3 drafting, Contracts 3–10 drafting, Contract 11 drafting, atomic Contracts 1–10 acceptance, corpus work, provider/model work, implementation, Layer 2 effective activation, or `active_locked` transition. Contract drafting authorization remains a separate, later, explicit Project Owner decision (Decision R11.12, unchanged).

Upon acceptance of this Section 10A, the corrected Revision 11 (this document) becomes the authoritative Plan baseline for the facts listed above, in place of the original 2026-07-18 text they supersede or amend. Revision 4 remains historical. No new Revision 12 is created by this acceptance.

---

## 11. Candidate correction status summary

```text
Original Revision 11 acceptance status:
ACCEPTED — Project Owner, 2026-07-18

Original repository persistence:
COMPLETED

Original Project Owner decisions:
R11.1-R11.12 accepted in full

2026-07-23/24 in-place correction status:
CORRECTED-IN-PLACE CANDIDATE
LIMITED CLOSURE VERIFICATION: PASSED
FINAL DEEP ENGINEERING REVIEW: PASSED
PROJECT OWNER ACCEPTANCE OF SECTION 10A: PENDING

Finding F-1 technical closure:
VERIFIED IN THIS CANDIDATE
EFFECTIVE CLOSURE PENDING PROJECT OWNER ACCEPTANCE

Additional final-review internal-consistency defects:
CORRECTED AND VERIFIED IN THIS CANDIDATE
EFFECTIVE STATUS PENDING PROJECT OWNER ACCEPTANCE

Correction repository persistence:
NOT PERFORMED
NOT AUTHORIZED

Contract 3 / Contracts 3-10 drafting authorization:
NOT GRANTED
NOT STARTED

Atomic Contracts 1-10 package acceptance:
NOT AUTHORIZED
NOT COMPLETED

Current authoritative Plan content pending Section 10A acceptance:
Revision 11 as accepted on 2026-07-18 and repository-persisted

Proposed authoritative Plan content upon Section 10A acceptance:
Revision 11 as corrected in place and finally verified on 2026-07-24
(this exact candidate identity)

Supersedes:
Revision 4 (unchanged historical relationship)

Revision 4 remains:
Historical baseline

Revision 12:
NOT CREATED — this is an in-place correction of Revision 11
```

