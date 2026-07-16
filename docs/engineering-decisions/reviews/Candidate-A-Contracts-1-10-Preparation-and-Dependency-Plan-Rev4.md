# Candidate A — Revision 13 Supporting Contracts 1–10 Preparation and Dependency Plan — Revision 4

**Document type:** Accepted Preparation-Cycle Planning Document (not an ADR; not a supporting contract itself; not an Implementation Package)
**Status:** Accepted by Project Owner — 2026-07-16
**Prepared by:** ChatGPT (GPT-5.6 Thinking), architecture specification and review partner
**Prepared for:** Project Owner Nurlan
**Revision:** 4
**Supersedes:** Revision 3 in full (not accepted). Revisions 1–2 were not accepted and were superseded by later revisions.
**Preparation date:** 2026-07-16
**Repository:** `Qazaq71/VistaRoom.AI`, branch `main`
**Repository persistence:** Authorized by Project Owner — 2026-07-16
**Authorized scope of this document:** Preparation and Dependency Plan only, per explicit Project Owner authorization (2026-07-16), scoped to:

> identifying the exact purpose, dependency, required content and acceptance boundary of each supporting contract 1–10; defining their preparation order and dependency graph; preparing the future Contracts 1–10 drafting cycle for subsequent independent consolidated review and Project Owner acceptance; preserving full consistency with Candidate A Evaluation Threshold and Acceptance Plan Revision 13 and Candidate A Test Data Handling Decision Revision 9.

**This document does not authorize:**

- preparation of contract 11;
- Phase-1 Scope Decision or Execution Profile preparation;
- Section 22 data-governance artifact preparation;
- corpus or fixture creation;
- annotation;
- provider contact or governed-data exposure;
- provider/model evaluation;
- repository persistence;
- ADR creation;
- Implementation Package;
- implementation.

This document does not weaken, reinterpret, or add to any accepted Rev13 threshold, metric, population rule, or governance gate. Every content claim below is traced to a specific Rev13 section; where this plan proposes structure (order, cross-reference conventions, conflict rules), that is explicitly marked as this document's own proposal, not an existing Rev13 requirement.

---

## 0. Revision 2 changelog (against Revision 1)

Revision 1 received two independent reviews. The Project Owner-designated consolidated review identified five mandatory findings and two recommended improvements; an independent Grok review identified no mandatory findings and two additional recommended improvements. Revision 2 resolves the complete closed correction set selected for this revision without preparing any supporting contract.

1. **Dependency model corrected.** The prior single-root tree and the statement that Contract 1 was the sole foundational node are replaced by an explicit multi-parent dependency-edge table distinguishing definition-import, population, integration, external-baseline and finalization dependencies.
2. **Contract 9 / Contract 10 cycle removed.** Contract 9 exclusively owns fixture subtype IDs, expected results, reason codes, retryability and prohibited outcomes. Contract 10 imports and validates those values after Contract 9 is locked; Contract 9 no longer depends on future Contract 10 field names.
3. **Identity ownership clarified.** Rev9 remains the sole owner of governed operation/input/asset identity. Contract 10 owns only conformance presence, conditionality, mapping and validation requirements. `sourceImageId` versus Rev9 `inputArtifactId` / `sourceAssetId` is recorded as a mandatory baseline-alignment question to resolve before Contract 10 drafting rather than silently decided by this Plan.
4. **Review and acceptance topology fixed.** Contracts may be drafted sequentially, but none receives final authoritative acceptance before one consolidated cross-contract package review. The Project Owner then accepts the package in one acceptance event, with ten explicit contract decisions if desired.
5. **Determinability ownership split.** Contract 4 owns determinability evidence basis; Contract 6 owns annotation-unit identity, pairing, outcome states, sealing, adjudication and inconclusive handling.
6. **Dependency edge types and finalization locks added.** Every material edge now states what is consumed and what must be locked before downstream finalization.
7. **Common supporting-contract skeleton added.** A required package template is defined for Contracts 1–10.
8. **Contract 10 finalization constraint strengthened.** Contract 10 may be drafted late but cannot be finalized until Contracts 1, 4, 5, 6 and 9 and the identity-alignment resolution are locked.
9. **Terminology table completed.** `expected-family` ownership is explicitly assigned to Contract 7 and consumed by Contract 8; `UnseenClaimRecord` structure is explicitly assigned to Contract 8.

This changelog is for traceability only. Revision 2 is self-contained and must be reviewed as a complete document, not as a delta against Revision 1.

---

## 0A. Revision 3 changelog (against Revision 2)

Revision 2 received one independent review from Claude Project, which identified one mandatory finding: Section 3.2 declares a four-value dependency-strength taxonomy (Draft / Finalization / Acceptance / External-baseline dependency), but the Section 3.1 edge table never applies any of those four values — its "Dependency type" column instead names *what is imported* (e.g., "vocabulary import," "confidence import"), not *how strictly* the edge constrains downstream finalization. This is a strictly targeted correction revision resolving only that finding.

1. **Section 3.1 column split.** The single "Dependency type" column is replaced by two columns: "Dependency content" (retaining every existing content label — vocabulary import, definition import, evidence/provenance import, confidence import, population/scoring dependency, population dependency, vocabulary reference, integration import, registry import, external identity dependency — unchanged) and "Dependency strength" (assigning exactly one value from the Section 3.2 taxonomy to every edge).
2. **Strength assignment.** Every edge whose "Required state before downstream finalization" reads "Contract N locked" is assigned **Finalization dependency**. Every edge sourced from an already-accepted external document (Bounded Scope Decision Rev3) is assigned **External-baseline dependency**. The Rev9 → Contract 10 edge is assigned **Acceptance dependency**, because what actually gates Contract 10's finalization is not merely that Rev9 already exists (that part is External-baseline in substance) but that the specific `sourceImageId` alignment resolution must be separately accepted by the Project Owner before Contract 10 may finalize; the content column for that row now states both facts explicitly rather than collapsing them into one label.
3. **Draft dependency explained, not fabricated.** No existing edge in Section 3.1 is genuinely a standalone Draft dependency distinct from its own Finalization/Acceptance requirement — Section 8.1's candidate-lock mechanism already describes every edge as passing through a provisional, consultative Draft-dependency stage before its named Finalization or Acceptance requirement applies. Section 3.2 is amended with one clarifying sentence stating this, so that the Draft dependency type is explained rather than left silently unused. No new edge was invented to force its use.
4. **Section 8.5 checklist updated.** The Dependency Integrity block now includes an explicit check that every edge carries both a content label and a taxonomy-conformant strength value.

No purpose or acceptance boundary of any Contract 1–10, no dependency edge, no recommended preparation order, no terminology ownership, no identity-alignment checkpoint, no determinability split, no Contract 9/10 direction, no package-level review/acceptance topology, no boundary against Contract 11/Rev9 Section 22/Phase-1, and no non-authorization boundary is changed by this revision.

This changelog is for traceability only. Revision 3 is self-contained and must be reviewed as a complete document, not as a delta against Revision 2.

---

## 0B. Revision 4 changelog (against Revision 3)

Revision 3 received one full consolidated review and a corroborating independent Grok assessment. Revision 4 resolves the complete closed correction set: four mandatory findings and two recommended improvements. It does not prepare any Supporting Contract 1–10 and does not authorize the next drafting cycle.

1. **Dependency table and terminology table synchronized bidirectionally.** Missing material edges are added for Contract 2 → Contract 10, Contract 4 → Contract 5, Contract 5 → Contract 9 and Contract 8 → Contract 10. Section 8.5 now requires two-way verification between Sections 3 and 5.
2. **Dependency strength separated from readiness lifecycle.** `Draft dependency` is removed from the strength taxonomy. Strength now consists only of Finalization, Acceptance and External-baseline dependency. Draft, candidate-lock, locked, accepted external baseline and Owner-resolved prerequisite are defined separately as readiness states.
3. **Identity alignment made one unambiguous pre-draft Owner prerequisite.** Rev9 remains an accepted external identity baseline. A separate Owner-approved `sourceImageId` alignment resolution is represented as its own Acceptance dependency and must exist before any normative Contract 10 drafting begins. Only an empty non-normative skeleton and issue placeholder may exist before that checkpoint.
4. **Automatic drafting authorization removed.** Acceptance of this Plan makes it authoritative only as a preparation/dependency model. Drafting Contracts 1–10 requires a separate explicit Project Owner authorization, whether issued in the same governance event or later.
5. **Candidate-lock formally defined.** Section 8.1 now defines the minimum governance record, authority, stability boundary, supersession rule and downstream revalidation effect of candidate-lock.
6. **Cross-table validation strengthened.** The checklist now requires every consuming relationship in Section 5 to map to a Section 3 edge or be explicitly marked non-normative/no-lock, and every Section 3 edge to map to an owned/imported concept or explicit external prerequisite.

No purpose or acceptance boundary of Contracts 1–10, preparation order, determinability split, Contract 9 → Contract 10 direction, package-level review topology, boundary against Contract 11/Rev9 Section 22/Phase-1, or repository/implementation non-authorization is reopened.

This changelog is for traceability only. Revision 4 is self-contained and must be reviewed as a complete document, not as a delta against Revision 3.

---

## 1. Purpose and scope

Rev13, §5.1, names ten contracts required before Corpus Preparation Authorization (a separate, eleventh contract — the Aggregation, Uncertainty and Score-Stability Appendix — is prepared later, per §5.2, using development denominators that do not yet exist). This plan does not write those ten contracts. It establishes, before any of them is drafted:

1. the exact purpose and acceptance boundary of each contract (Section 2);
2. the dependency graph between them (Section 3);
3. a recommended preparation order that respects that graph (Section 4);
4. a terminology cross-reference table naming, for each shared term or field, exactly one owning contract (Section 5);
5. a conflict-resolution rule for terminology disputes (Section 6);
6. explicit boundaries against contract 11, Rev9 Section 22 data-governance artifacts, and the future Phase-1 Scope Decision (Section 7);
7. a consolidated validation checklist to apply to the finished package before it is submitted for review (Section 8).

The reason this plan exists as a separate step, rather than starting directly on ten large documents: Candidate A Test Data Handling Decision took nine revisions substantially because shared concepts (provider-track identity, held-out subset state, classification dimensions) were defined independently in different sections and drifted apart before anyone checked them against each other. Contracts 1–10 share far more surface area with each other than the Test Data Handling sections did — vocabulary, confidence, provenance, and unknown-handling all reference the same underlying node/relation identity. Fixing the terminology ownership and dependency order before drafting is cheaper than reconciling ten independently-drafted contracts afterward.

---

## 2. Purpose and acceptance boundary of each contract

Each entry below cites the exact Rev13 provision(s) that define what the contract must contain and what already-accepted rules it must not touch.

### Contract 1 — Category Vocabulary and Synonym Contract

**Purpose:** Lock the enumerated vocabulary of StructuralElement and Object top-level categories and subtypes, and the synonym/mapping rules a provider's free-text or near-vocabulary output must resolve to, before any category-level metric can be computed.

**Directly grounded in:**
- Rev13 §6.3 — "Category correctness uses matched Pass-2 pairs **and the locked vocabulary**."
- Rev13 §6.2 — the `GENUINE_HALLUCINATION` severe-structural-hallucination definition names specific locked subtypes ("wall, door, window, opening, column, stair/open vertical circulation, major fixed partition or structural boundary") that must already exist in this vocabulary.
- Rev13 §13.2 — required node fields include "allowed locked subtype/category or allowed unknown value," which presupposes this contract's enumeration.

**Acceptance boundary:** This contract defines the vocabulary only — category/subtype names, synonym resolution rules, and the closed list of severe-structural-hallucination subtypes. It does not define confidence, provenance, evidence, or fixture content (Contracts 4–6, 9), and it does not redefine the four permitted room types, which are fixed by Bounded Scope Decision Rev3 and are out of scope for this contract to alter.

### Contract 2 — Relation Annotation and Applicability Contract

**Purpose:** Define ground-truth relation semantics — canonical identity, endpoint applicability, obstruction modes, and borderline/inconclusive treatment — for Adjacency, Containment and Blocking relations.

**Directly grounded in:**
- Rev13 §7.1 — canonical identity tuples for each relation type.
- Rev13 §7.2 — "GT truth, endpoint applicability, obstruction modes, borderline/inconclusive treatment and room-type applicability come only from the accepted Relation Annotation and Applicability Contract and applicability matrix. Applicability cannot be changed after viewing mechanism outputs."

**Acceptance boundary:** This contract owns relation-type semantics and endpoint applicability rules in general. It explicitly shares its scope with Contract 3, which operationalizes applicability *per room type* — Contract 2 must not duplicate the room-type matrix, only reference it.

### Contract 3 — Relation Type × Room Type Applicability Matrix

**Purpose:** Operationalize, for each of the four permitted room types (Bounded Scope Rev3), which relation types and endpoint combinations are applicable, as the concrete matrix referenced by Contract 2 and by Rev13 §7.2.

**Directly grounded in:**
- Rev13 §7.2 — "room-type applicability" as part of the same sentence governing Contract 2, naming an "applicability matrix" as a named artifact distinct from the contract prose itself.

**Acceptance boundary:** A matrix, not a second definition of relation semantics. If this matrix and Contract 2's prose ever appear to disagree, Contract 2 is authoritative for *definitions* and this matrix is authoritative for *room-type-specific applicability values* — this ownership split is carried into Section 5.

### Contract 4 — Best-Effort Evidence, Provenance and Determinability Annotation Contract

**Purpose:** Define the evidence kinds, provenance enum, and best-effort field taxonomy that ground `AttributeEvidenceArtifact` entries and the provenance values used throughout node/relation/value annotation.

**Directly grounded in:**
- Rev13 §4.4 — the `AttributeEvidenceArtifact` contract: evidence kind (`image-region|pixel-cue|explicit-inference-basis`), provenance enum (`visually-observed|deterministic-derived|heuristic-inferred|provider-inferred`), and the "capability and field ID" identity for best-effort values.
- Rev13 §13.2 — required node fields include a "required provenance enum," which this contract must define consistently with §4.4's provenance enum.

**Acceptance boundary:** Owns the provenance enum, evidence-kind taxonomy, best-effort field taxonomy, and the evidence basis required to support a determinability judgment. It does not own determinability outcome states, annotation-unit pairing, sealing, adjudication or inconclusive handling; those belong exclusively to Contract 6. It also does not own the confidence enum (Contract 5). Contracts 4–6 annotate the same underlying nodes/relations/values and therefore form the package's most interdependent cluster (Section 3).

### Contract 5 — Confidence Generation and Normalization Contract

**Purpose:** Define how ordinal confidence values are generated and normalized, consistent with the accepted ordinal (not probabilistic) model.

**Directly grounded in:**
- Rev13 §9 — "The accepted model is ordinal, not probabilistic. ECE and Brier are excluded."
- Rev13 §9.1 — the two independent dimensions (source: `provider-supplied|heuristic-generated|missing`; transformation: `unchanged|deterministic-normalized|not-applicable`).
- Rev13 §9.2 — "Heuristic confidence is prohibited unless the locked Confidence Generation and Normalization Contract exists" — i.e., Rev13 itself makes this contract's existence a precondition for a category of confidence value being usable at all.

**Acceptance boundary:** Owns the confidence enum and its source/transformation dimensions only. Must not reintroduce probabilistic framing (ECE/Brier) — this is a hard boundary against reopening an already-decided modeling choice, not a drafting preference.

### Contract 6 — Unknown/Determinability Annotation and Pairing Contract

**Purpose:** Define the annotation-unit pairing procedure and the `determinable` / `not-determinable` / `inconclusive` sealing states for entity subtype, confidence, provenance, and best-effort fields.

**Directly grounded in:**
- Rev13 §8.1 — first-iteration scope limited to matched entity subtype, required confidence state, required provenance state; `UNK-NODETYPE-*` explicitly removed.
- Rev13 §8.2 — one annotation unit per matched subtype / confidence-bearing value / provenance-bearing value / best-effort field; pairing rules per unit type; sealing into `determinable`/`not-determinable`/`inconclusive`.

**Acceptance boundary:** Owns annotation-unit identity, pairing procedure, determinability outcome states (`determinable`, `not-determinable`, `inconclusive`), sealing, adjudication and inconclusive-outcome handling. It consumes, but does not redefine, the subtype vocabulary (Contract 1), determinability evidence basis and provenance enum (Contract 4), and confidence enum (Contract 5). Contract 6 is a consumer of those definitions, not a co-owner of them.

### Contract 7 — Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract

**Purpose:** Define the corpus population contract — the four-room-type × six-scenario-family ordinary grid, special groups, lineage rule, and sufficiency/completeness/expected-family determination.

**Directly grounded in:**
- Rev13 §10.1 — the ordinary grid and its six scenario families, with development/held-out per-cell minimums (2/3).
- Rev13 §10.2 — special-group minimums (low-information 3/6, empty-or-near-empty 2/5, meaningful partial-scene 5/10, genuine insufficient-evidence 5/10) and mutual exclusivity of ordinary/special primary buckets; corpus totals of 63 development / 103 held-out unique semantic images.
- Rev13 §10.3 — lineage: "All images from one physical/staged room or generation session... belong wholly to one subset. No lineage crosses development/held-out."
- Rev13 §10.4 — sufficiency, completeness and expected-family criteria, with "all criteria, edge markers, expected-family assignment, ambiguity adjudication and replacement rules" residing in this contract.
- Rev13 §11 — expected-outcome population definitions (IE sensitivity/specificity denominators) depend directly on this contract's sealed expected-family assignments.

**Acceptance boundary:** Owns semantic-case population definitions and the corpus count/lineage rules already fixed by Rev13 (this plan does not reopen the 63/103 figures — they are cited, not decided, here). Does not own the unseen-claim vocabulary (Contract 8), which depends on this contract's case definitions but is a separate evaluation artifact.

### Contract 8 — Unseen-Claim Evaluation Artifact Contract

**Purpose:** Define the sealed vocabulary of allowed/prohibited unseen-space claim codes referenced by every `UnseenClaimRecord` on a meaningful partial-scene case.

**Directly grounded in:**
- Rev13 §14.2 — "The sealed case annotation contains allowed and prohibited unseen-space claim codes." "There is no `Not Scorable` result; absence is FAIL."
- Rev13 §14.1 — meaningful partial-scene case criteria (precision/recall thresholds, subtype-correctness thresholds) provide the case population this contract's records apply to.

**Acceptance boundary:** Owns the claim-code vocabulary and the per-assertion `UnseenClaimRecord` field set. Depends on Contract 7 for which cases are "meaningful partial-scene" cases in the first place; must not redefine that determination.

### Contract 9 — Operational and Contract Violation Fixture Subtype Registry

**Purpose:** Register the exact fixture subtypes, per-subtype development/held-out counts, expected results, reason codes, retryability, and prohibited-outcome lists for the Failure, C.2 operational-rejection, C.3 general-rejection, and Contract Violation fixture suites.

**Directly grounded in:**
- Rev13 §12.1–§12.4 — the four fixture tables (subtype ID, dev/HO counts, expected result/reason, retryability, prohibited outcomes) and the fixed totals: Operational 16 development / 29 held-out; Contract Violation 12 development / 18 held-out; "every listed subtype is critical and has a 1.00 subtype floor. Suites are disjoint."

**Acceptance boundary:** A registry of already-fixed fixture subtypes and counts (this plan does not reopen these numbers — Rev13 fixes them exactly). Contract 9 exclusively owns fixture subtype IDs, expected results, reason codes, retryability and prohibited-outcome lists. Where a subtype refers to category vocabulary from Contract 1, it cites Contract 1. Contract 9 does not depend on, import from, or defer naming to Contract 10. Contract 10 later imports Contract 9's locked registry and validates the fields that carry those values.

### Contract 10 — Conformance Field Inventory and Validation Contract

**Purpose:** Define the concrete, field-by-field conformance requirements for the C.1 candidate, the post-C.2/pre-C.3 StructuredScene artifact, and the final result envelope, integrating the identity, confidence, provenance and vocabulary fields defined by the other contracts into one zero-tolerance validation contract.

**Directly grounded in:**
- Rev13 §13.1–§13.3 — the three field inventories, each naming required fields (schema version, `operationId`/`sourceImageId` identity, node/relation ID uniqueness, required confidence/provenance enums, required EvidenceReference) and stating that "presence, enum/range, cardinality and identity mismatch are zero-tolerance conformance failures."

**Acceptance boundary:** This is the integration layer. It must import exactly the field names, enum values and identity conventions locked by upstream owners, including Contracts 1, 2, 4, 5, 6, 8 and 9 and external identity rules from Rev9. It owns only conformance-field presence, conditionality, cardinality, range/enum validation, identity consistency and failure behavior; it does not own the underlying semantic definitions or fixture reason-code vocabulary. Contract 10 may not begin normative drafting until the Owner-approved identity-alignment prerequisite recorded in Sections 3, 5 and 7 is satisfied, and it may not be finalized until all named upstream contracts are locked. Because of this, it is structurally the final contract in the package, not merely a convenient last drafting step.

---

## 3. Dependency model

The package is a directed multi-parent dependency graph, not a single-root tree. Contract 1 is foundational only for category/subtype vocabulary; Contracts 4 and 5 are independent normative roots for evidence/provenance and confidence. External accepted baselines and unresolved Owner prerequisites are first-class source nodes.

### 3.1 Dependency edge table

| Upstream source | Downstream contract | Dependency content | Dependency strength | Required readiness/gate before downstream finalization |
|---|---|---|---|---|
| Contract 1 | Contract 2 | vocabulary import — category/subtype vocabulary used by relation endpoints and examples | Finalization dependency | Contract 1 candidate-locked for downstream drafting; locked before Contract 2 finalization |
| Contract 2 | Contract 3 | definition import — canonical relation identity and general applicability semantics | Finalization dependency | Contract 2 candidate-locked for drafting; locked before Contract 3 finalization |
| Bounded Scope Decision Rev3 | Contract 3 | external-baseline reference — fixed four room types | External-baseline dependency | accepted external baseline; no redefinition permitted |
| Contract 1 | Contract 6 | vocabulary import — entity subtype vocabulary used by determinability units | Finalization dependency | Contract 1 locked before Contract 6 finalization |
| Contract 4 | Contract 5 | provenance-model import — confidence source/transformation rules must not conflict with the owned provenance enum and evidence/provenance distinctions | Finalization dependency | Contract 4 locked before Contract 5 finalization |
| Contract 4 | Contract 6 | evidence/provenance import — determinability evidence basis, provenance enum, best-effort field identity | Finalization dependency | Contract 4 locked before Contract 6 finalization |
| Contract 5 | Contract 6 | confidence import — confidence enum and source/transformation dimensions | Finalization dependency | Contract 5 locked before Contract 6 finalization |
| Contracts 2 and 3 | Contract 7 | population/scoring dependency — relation semantics and room-type applicability used by relation-based semantic-case rules | Finalization dependency | Contracts 2 and 3 locked before Contract 7 finalization |
| Bounded Scope Decision Rev3 | Contract 7 | external-baseline reference — fixed four room types and bounded input scope | External-baseline dependency | accepted external baseline |
| Rev9 (external identity baseline) | Contract 7 | external identity reference — `lineageId` and governed-asset identity used to trace the no-cross-subset lineage rule without redefining it | External-baseline dependency | accepted external baseline |
| Contract 7 | Contract 8 | population dependency — meaningful-partial-scene and expected-family determination | Finalization dependency | Contract 7 locked before Contract 8 finalization |
| Contract 1 | Contract 9 | vocabulary reference — severe-structural-hallucination-eligible subtype names where applicable | Finalization dependency | Contract 1 locked before Contract 9 finalization |
| Contract 5 | Contract 9 | confidence-model reference — any fixture expectation involving required confidence state or prohibited confidence outcome must use Contract 5 terminology | Finalization dependency | Contract 5 locked before Contract 9 finalization |
| Rev9 (external identity baseline) | Contract 9 | external fixture-identity reference — `fixtureId`, `fixtureLineageId` and governed-operation identity used without redefining them | External-baseline dependency | accepted external baseline |
| Contract 1 | Contract 10 | integration import — category/subtype vocabulary | Finalization dependency | Contract 1 locked before Contract 10 finalization |
| Contract 2 | Contract 10 | integration import — canonical relation identity and endpoint semantics represented in conformance fields | Finalization dependency | Contract 2 locked before Contract 10 finalization |
| Contract 4 | Contract 10 | integration import — evidence kind, provenance and best-effort evidence fields | Finalization dependency | Contract 4 locked before Contract 10 finalization |
| Contract 5 | Contract 10 | integration import — confidence fields and enums | Finalization dependency | Contract 5 locked before Contract 10 finalization |
| Contract 6 | Contract 10 | integration import — determinability/pairing outcome requirements where represented in conformance inventory | Finalization dependency | Contract 6 locked before Contract 10 finalization |
| Contract 8 | Contract 10 | integration import — `UnseenClaimRecord` field set and per-assertion validation where represented in conformance inventory | Finalization dependency | Contract 8 locked before Contract 10 finalization |
| Contract 9 | Contract 10 | registry import — fixture subtype IDs, reason codes, expected results and prohibited outcomes | Finalization dependency | Contract 9 locked before Contract 10 finalization |
| Rev9 (external identity baseline) | Contract 10 | external identity import — governed operation/input/asset identity and conditional field rules are referenced, never redefined | External-baseline dependency | accepted external baseline |
| Owner-approved `sourceImageId` alignment resolution | Contract 10 | identity-alignment prerequisite — exact relationship between Rev13 `sourceImageId` and Rev9 `inputArtifactId` / conditional `sourceAssetId` | Acceptance dependency | explicit Project Owner decision required before any normative Contract 10 drafting begins |

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

- **Relation cluster:** Contracts 2 → 3; Contracts 2–3 feed Contract 7, and Contract 2 also feeds Contract 10.
- **Evidence/confidence/determinability cluster:** Contract 4 feeds Contracts 5, 6 and 10; Contract 5 feeds Contracts 6, 9 and 10; Contract 6 also feeds Contract 10.
- **Semantic-case cluster:** Contract 7 imports Rev9 lineage identity, then feeds Contract 8; Contract 8 feeds Contract 10 where unseen-claim records are represented.
- **Fixture/integration cluster:** Contract 9 imports Rev9 fixture identity and owns fixture registries; Contract 10 imports that registry. No reverse Contract 10 → Contract 9 dependency exists.
- **Identity sources:** Rev9 is the accepted external identity owner for Contracts 7, 9 and 10; the separate `sourceImageId` alignment decision is a pre-draft Owner prerequisite for Contract 10.
- **Integration layer:** Contract 10 is structurally non-finalizable until all named upstream locks are complete and cannot begin normative drafting until the identity-alignment prerequisite is accepted.

---

## 4. Recommended preparation order

```text
1. Contract 1  — Category Vocabulary and Synonym Contract
2. Contract 2  — Relation Annotation and Applicability Contract
3. Contract 3  — Relation Type × Room Type Applicability Matrix
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

This order governs drafting and finalization, not ten separate final acceptance cycles. Upstream contracts may be drafted and internally stabilized before downstream contracts, but no Contract 1–10 receives final authoritative acceptance or version lock until the complete package has passed the package-level review topology in Section 8. Contract 10 may not begin normative drafting until the identity-alignment prerequisite in Sections 3 and 7 has an explicit Owner-approved resolution. After that gate, it may be drafted, but it may not be finalized until Contracts 1, 2, 4, 5, 6, 8 and 9 are locked within the candidate package. Contract 3 affects Contract 10 indirectly through Contract 7 only where room-type applicability is represented by imported semantic-case rules.

---

## 5. Terminology cross-reference table

For every shared term or field appearing in more than one contract's scope, exactly one contract is designated the **owning contract** — the authoritative source of its definition. Any other contract referencing the term must cite the owning contract rather than restate or paraphrase the definition.

| Shared term / field | Owning contract | Consuming contracts | Rev13 source |
|---|---|---|---|
| Category / subtype vocabulary and synonyms | Contract 1 | 2, 6, 9, 10 | §6.3, §6.2, §13.2 |
| Severe-structural-hallucination-eligible subtype list | Contract 1 | 9 | §6.2 |
| Relation canonical identity (Adjacency/Containment/Blocking tuples) | Contract 2 | 3, 7, 10 | §7.1 |
| Relation endpoint applicability, obstruction modes, borderline/inconclusive treatment | Contract 2 | 3, 7 | §7.2 |
| Relation Type × Room Type applicability values | Contract 3 | 7 (matrix is the authority for room-type-specific values; Contract 2 remains authority for underlying definitions) | §7.2 |
| Evidence kind enum (`image-region|pixel-cue|explicit-inference-basis`) | Contract 4 | 10 | §4.4 |
| Provenance enum (`visually-observed|deterministic-derived|heuristic-inferred|provider-inferred`) | Contract 4 | 5, 6, 10 | §4.4, §13.2 |
| Best-effort field identity (capability + owner ID + field ID) | Contract 4 | 6, 10 | §4.4, §8.2 |
| Determinability evidence basis | Contract 4 | 6, 10 | §4.4, §8.2 |
| Confidence enum and source/transformation dimensions | Contract 5 | 6, 9 (calibration references), 10 | §9.1 |
| Annotation-unit pairing identity (per subtype/confidence/provenance/best-effort field) | Contract 6 | — | §8.2 |
| Determinability outcome states (`determinable` / `not-determinable` / `inconclusive`) | Contract 6 | 10 | §8.2 |
| Determinability pairing, sealing, adjudication and inconclusive handling | Contract 6 | 10 | §8.2 |
| Room-type population (4 room types) | *External — Bounded Scope Decision Rev3* | 3, 7 | (cited, not owned, by any Rev13 supporting contract) |
| Ordinary grid / scenario families / special-group minimums / corpus totals (63 dev / 103 held-out) | Contract 7 | 11 (external, later) | §10.1, §10.2 |
| Lineage rule (one physical/staged room or generation session → one subset) | Contract 7 | — (cross-references Rev9 `lineageId` field without redefining it; see Section 7) | §10.3 |
| Sufficiency / completeness determination | Contract 7 | 8, 11 (external, later) | §10.4, §11 |
| `expected-family` determination | Contract 7 | 8, 11 (external, later) | §10.4, §11 |
| Unseen-space claim-code vocabulary | Contract 8 | — | §14.2 |
| `UnseenClaimRecord` field set and per-assertion validation | Contract 8 | 10 where represented in conformance inventory | §14.2 |
| Fixture subtype IDs, reason codes, dev/HO counts, retryability | Contract 9 | 10 | §12.1–§12.4 |
| Operational/Contract-Violation fixture totals (16/29 operational; 12/18 contract-violation) | Contract 9 | 11 (external, later) | §12.4 |
| Governed operation/input/asset identities (`operationId`, `inputArtifactId`, conditional `sourceAssetId`, `fixtureId`, lineage fields) | *External — Candidate A Test Data Handling Decision Rev9* | Contracts 7, 9 and 10 | Rev9 §3.3.1 |
| Conformance presence, conditionality, cardinality and cross-field validation of imported identity fields | Contract 10 | — | Rev13 §13.1–§13.3; imports Rev9 identity |
| `sourceImageId` alignment with Rev9 `inputArtifactId` / `sourceAssetId` | **External prerequisite — separate Project Owner resolution required** | Contract 10 | Rev13 §13.1–§13.3; Rev9 §3.3.1 |
| Node/relation ID uniqueness and schema-version requirements | Contract 10 | — | §13.1–§13.3 |

Where this table lists an "External" owner (room-type population; underlying operation/asset identity), no contract 1–10 may redefine that concept — it may only reference it.

---

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
   reveals an actual gap or contradiction in Rev13 itself must be
   raised to the Project Owner as a named finding against Rev13 —
   it must not be silently resolved by the contract drafters.
```

This mirrors the lesson from Candidate A Test Data Handling Decision: shared boundaries (there, provider-track identity; here, node/relation/value identity and vocabulary) must have exactly one normative home, established before drafting, not reconciled after divergent drafts already exist.

---

## 7. Boundaries against contract 11, Rev9 Section 22 artifacts, and the future Phase-1 Profile

### Against contract 11 (Aggregation, Uncertainty and Score-Stability Appendix)

Contract 11 is explicitly out of scope for this preparation cycle. Per Rev13 §5.2, step 6, contract 11 is prepared *after* development corpus/fixture creation, using actual development denominators that do not exist yet. Several contracts above (7, 9) define the population counts and totals that contract 11 will later consume — this plan records that dependency (Section 5, "external, later") without preparing contract 11 itself.

### Against Candidate A Test Data Handling Decision Rev9, Section 22 data-governance artifacts

Contracts 1–10 are **methodology contracts** — they define what is measured, how ground truth is annotated, and how conformance is validated. Rev9 Section 22 artifacts are **data-governance artifacts** — they define how corpus data is sourced, stored, accessed, retained, and protected. These are categorically distinct layers, and this plan does not merge them. Two points of genuine interaction are flagged for cross-reference, not merger:

- Contract 7's lineage rule (§10.3, "no lineage crosses development/held-out") describes a *semantic-case population* rule. Rev9's `lineageId` field (§3.3.1) is the *governed-asset* identity mechanism that implements traceability for that rule. Contract 7 must reference Rev9's `lineageId` as the implementing mechanism, not redefine lineage tracking independently.
- Contract 9's fixture population counts interact with Rev9's fixture-identity fields (`fixtureId`, `fixtureLineageId`, §3.3.1) in the same way — Contract 9 owns *what fixtures exist and in what numbers*; Rev9 owns *how a fixture-backed operation is identified as governed data*.

Rev9 Section 22 artifacts 1–7, 9–10 remain not authorized for preparation by this plan or by the contracts it sequences.

### Identity alignment prerequisite before Contract 10

Rev13 §13 uses `sourceImageId` in its conformance inventory, while Rev9 §3.3.1 governs operation inputs through `inputArtifactId` and conditionally applicable `sourceAssetId`, `fixtureId` and lineage fields. This Plan does not silently declare those names equivalent.

The alignment is a **pre-draft Project Owner checkpoint** for Contract 10. Before any normative Contract 10 drafting begins, the Project Owner must approve an explicit resolution stating whether `sourceImageId` is: (a) a distinct evaluation reference with a defined mapping to Rev9 identities; (b) an obsolete alias normalized to one Rev9 field; or (c) evidence of a baseline conflict requiring a successor decision.

Once Contract drafting has been separately authorized but before that checkpoint, only an empty non-normative Contract 10 skeleton and an issue placeholder may exist. No field inventory, mapping rule, validation rule or dual-identity convention may be drafted or inferred.

### Against the future Phase-1 Scope Decision / Execution Profile

Per the already-recorded sequencing (Living Strategic Roadmap v1.4, Owner-approved amendment), the Phase-1 Profile is prepared later and must define the *minimum conformant implementation* of an already-stable methodology — not the reverse. Contracts 1–10 must therefore remain implementation-agnostic: they define annotation and validation rules, not tooling, storage format, or degree of automation. Where a contract might be tempted to specify *how* annotation is performed (e.g., "using tool X" or "with N annotators"), that specification belongs in the future Phase-1 Profile, not in the contract itself — the same rule-versus-mechanism separation already established for the Held-Out Subset Allocation Manifest in Rev9 §14.4.5 applies here by the same logic.

---

## 8. Package drafting, review and acceptance topology

All activities in this Section are prospective and become executable only after a separate explicit Project Owner authorization to draft Contracts 1–10. Acceptance of this Plan alone does not activate them.

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
- corrections produce a new package revision and require one complete review of that new package version under the standing one-pass rule.

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
9. Traceability to Rev13 and external accepted baselines.
10. Conflicts, unresolved issues and escalation path.
11. Owner Decision entries.
12. Explicit non-authorization boundary.

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

TRACEABILITY
[ ] Every threshold, count and population figure traces to Rev13.
[ ] No contract narrows, widens or reinterprets an accepted rule.
[ ] External baseline imports cite exact accepted documents/versions.

DEPENDENCY INTEGRITY
[ ] Every Section 3 edge is represented in the final package.
[ ] Every Section 3.1 edge carries one Dependency content label and one
    strength value drawn only from Section 3.2.
[ ] Every consuming-contract relationship in Section 5 has a matching
    Section 3 edge, unless explicitly marked non-normative/no-lock.
[ ] Every Section 3 edge maps to an owned/imported concept in Section 5
    or to an explicit external-baseline/Owner-prerequisite explanation.
[ ] Readiness states use only Section 3.3 terminology.
[ ] Downstream contracts were revalidated after every upstream change.
[ ] Contract 5 was checked against final Contract 4.
[ ] Contract 6 was checked against final Contracts 1, 4 and 5.
[ ] Contract 7 was checked against final Contracts 2 and 3 and accepted Rev9 lineage identity.
[ ] Contract 8 was checked against final Contract 7.
[ ] Contract 9 was checked against final Contracts 1 and 5 and accepted Rev9 fixture identity.
[ ] Contract 10 was checked against final Contracts 1, 2, 4, 5, 6, 8 and 9.
[ ] Contract 9 contains no dependency on Contract 10.
[ ] The `sourceImageId` alignment checkpoint was Owner-approved before
    any normative Contract 10 drafting began.

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
[ ] Every contract carries the required non-authorization statement.

PACKAGE GOVERNANCE
[ ] A separate explicit Project Owner drafting authorization exists.
[ ] All ten contracts use the common skeleton in Section 8.4.
[ ] No contract is marked finally Accepted before package review.
[ ] The complete package has one version identity and one terminology table.
[ ] One consolidated package review covers all ten contracts and cross-links.
[ ] Owner acceptance is one atomic governance event with ten explicit decisions.
```

---

## 9. Explicit non-authorization restatement

This Preparation and Dependency Plan is a planning artifact. It has been accepted by the Project Owner (2026-07-16) and is the authoritative preparation, dependency, terminology-ownership, readiness and package-review model for future Contracts 1–10.

**Acceptance of this Plan alone does not authorize drafting Contracts 1–10.** Drafting may begin only after a separate explicit Project Owner authorization. That authorization may be issued in the same governance event as Plan acceptance or in a later event, but it must be stated separately and unambiguously.

Acceptance of this Plan does not authorize:

- treating any purpose/boundary description in Section 2 as itself an accepted contract;
- drafting any Contract 1–10 without the separate authorization described above;
- preparation of Contract 11;
- preparation of the Phase-1 Scope Decision or Execution Profile;
- preparation of Rev9 Section 22 data-governance artifacts;
- corpus or fixture creation, annotation, provider contact, provider invocation or provider/model evaluation;
- repository persistence of this Plan or of any future contract;
- ADR creation, Implementation Package preparation or implementation.

Until the Project Owner separately authorizes drafting, the only permissible use of this Plan is governance review, Owner decision preparation and future-work sequencing. No candidate-lock may be created and no Contract 1–10 skeleton or content may be prepared under this Plan alone.
