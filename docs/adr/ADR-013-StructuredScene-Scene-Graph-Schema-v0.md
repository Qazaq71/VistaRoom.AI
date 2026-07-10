# ADR-013 — StructuredScene / Scene Graph Schema v0

## 1. Title
ADR-013: StructuredScene / Scene Graph Schema v0 — Minimal Representation Structure Satisfying ADR-012

## 2. Status
**Accepted**

**Author:** VistaRoom AI Architecture Governance
**Accepted by:** Project Owner
**Date:** 2026-07-10
**Related:** ADR-011 (Accepted), ADR-012 (Accepted), ADR-010, ADR-007, ADR-004, C8 Architecture Assessment
**Next after this:** ADR-014 — Perception Boundary ADR

## 3. Context

ADR-011 defined C8 as a representation capability and established seven minimum expressiveness classes. ADR-012 translated those classes into a normative Canonical Query Suite (Q1–Q11), a Grounding Requirement, and a set of normative evaluation dimensions (Query Accuracy, Graph/Relation Consistency, Explanation Faithfulness, Version/Before-After Consistency, Human Understanding Review in principle), while deferring the concrete schema to this ADR.

This ADR answers: *what is the minimal schema for StructuredScene v0 sufficient to support Q1–Q11, the Grounding Requirement, and the normative evaluation dimensions from ADR-012 — and no more?*

This ADR operates strictly at the architecture-contract level. It fixes the categories of nodes, relations, and attributes required, along with confidence, versioning, and grounding structure. It does not fix concrete field names, types, storage, or serialization, except where naming is unavoidable to state the contract.

## 4. Decision

### 4.1 Schema Design Principles

- Evaluation-driven: every element exists to satisfy ADR-012, not for theoretical completeness.
- Minimal but not thin: sufficient for Q1–Q11, grounding, explanation, relation consistency, and version comparison.
- Mandatory traceability: every node, relation, and attribute category must map to at least one ADR-012 query or normative evaluation dimension (see 4.8). Elements without traceability are excluded.
- Confidence-aware by design.
- Version-aware by design.
- Partial StructuredScene is first-class: absence of an optional attribute (null / unknown / not inferable) is a normal, valid state, not an error.
- Open-vocabulary where appropriate: object types, material hints, style hints, and affordances use extensible category sets rather than closed enumerations.
- No premature geometry precision: spatial attributes are expressed at the precision Q1–Q11 requires ("approximate," "if inferable"), not survey-grade precision.
- No premature implementation contract: this ADR fixes conceptual shape, not code-level representation.
- Extensibility must be additive. Breaking changes to v0 are not allowed without a new major schema version.

### 4.2 Node Categories

StructuredScene v0 requires the following node categories. These are architectural categories; internal composition (exact attributes) is addressed in 4.4.

| Node Category | Purpose | Traces to |
|---|---|---|
| **Room** (scene root) | Carries room identity, SpaceTypeId reference (per ADR-010; not redefined here), and approximate spatial extent | Q1 |
| **StructuralElement** | Architectural boundary elements — walls, doors, windows, openings — relevant to relations, traffic, and light | Q3, Q4, Q6 |
| **Object** | Design-relevant movable or fixed items (furniture, fixtures, décor) | Q2, Q3, Q7, Q8, Q9, Q10 |
| **FreeSpaceRegion** | Representation of navigable / unoccupied floor area | Q4, Q5, Q9 |

**Room node / SpaceTypeId invariant:** The Room node may reference SpaceTypeId, but does not perform or duplicate room classification. `StructuredScene.spaceType` remains a reference, not an independent classifier. This preserves the ADR-004 invariant that RoomContext/SpaceType classification and StructuredScene never collapse into each other, in either direction.

No other node category is required to satisfy Q1–Q11. Additional node categories (e.g., for multi-room graphs, SKU-linked objects, or precise geometry) are out of scope and deferred to future gates.

### 4.3 Relation Categories

| Relation Category | Purpose | Traces to |
|---|---|---|
| **Adjacency** | Two elements are spatially next to one another | Q3 |
| **Containment** | One element is spatially within or bounded by another (e.g., object within a region) | Q3 |
| **Blocking** (parameterized by an open-vocabulary blocking-type: e.g. physical/traffic, light, clearance) | One element obstructs another with respect to a specific concern | Q3, Q4, Q6, Q9 |

No additional relation category is accepted in v0 unless it is explicitly traced to ADR-012 Q1–Q11 or a normative evaluation dimension. Adjacency, Containment, and parameterized Blocking are the approved minimal v0 relation categories. Affordance and illumination may be represented as attributes in v0 unless future review demonstrates that relation-level modeling is required.

This is consistent with ADR-012's clarification that Q9 is a refinement of ADR-011 classes 3 and 4, not an independent expressiveness class.

### 4.4 Attribute Categories

Attribute categories describe *what kind of information* each node/relation must be able to carry to satisfy Q1–Q11. Exact attribute names, data types, units, and serialization details are out of scope of this ADR and are fixed only where unavoidable to state the contract.

| Attribute Category | Applies to | Purpose | Traces to |
|---|---|---|---|
| **Identity** | Nodes and relations | Stable reference so nodes/relations can be cited in explanations and compared across versions | Grounding, Q10, Q11 |
| **Type / Category label** (open-vocabulary) | StructuralElement, Object | What kind of element it is; supports element identification for inventory, reference-point resolution, light-relevance, and affordance classification | Q2, Q4, Q6, Q7, Q8 |
| **Spatial extent** (approximate) | Room, FreeSpaceRegion | Approximate size/area, reported "if inferable" | Q1, Q5 |
| **Approximate spatial placement** | StructuralElement, Object, FreeSpaceRegion | Relative / coarse placement sufficient to support adjacency, blocking, traffic feasibility, natural-light blocking, and grounded placement explanations; not precise geometry | Q3, Q4, Q6, Q9, Q10 |
| **Affordance** (open-vocabulary tag set) | Object | What functional role an object can serve (seating, storage, illumination, surface support) | Q7, Q8 |
| **Illumination relevance** | StructuralElement (e.g., windows), Object | Whether an element is a light source or light-relevant | Q6, Q7 |

Approximate spatial placement is distinct from, and must not be conflated with, precise metric geometry or exact real-world measurements — both of which remain explicitly out of scope (Section 5).

No attribute category beyond Identity, Type/Category label, Spatial extent, Approximate spatial placement, Affordance, and Illumination relevance is required for Q1–Q11.

### 4.5 Confidence Model

Every node, relation, and attribute value in StructuredScene v0 must be capable of carrying a confidence indication. The schema must distinguish at least three states for any given piece of information: **known with confidence**, **known with uncertainty (confidence reported)**, and **unknown / not inferable**. The last state must be distinguishable from "known to be absent" — absence of information is not the same as absence of the thing itself.

This satisfies ADR-012's requirement that answers report confidence where not full, and supports the "if inferable" wording used throughout the Canonical Query Suite.

### 4.6 Versioning Model

StructuredScene v0 must carry sufficient identity and continuity information to support Q11 (structural differences between two versions of the same room) and ADR-011's version-awareness requirement, without implementing full Project Memory.

At minimum, the schema must support:
- A means of identifying a given StructuredScene instance as belonging to a specific room over time (continuity of identity).
- A means of ordering or distinguishing one instance from a prior instance of the same room (sequence/succession).
- Stable node and relation identity (per 4.4 Identity attribute, now extended to relations) across versions, so that a diff between two versions can refer to "the same" node or relation, or identify it as added/removed/changed.

The concrete diffing algorithm, storage of version history, and any "Project Memory" capability are out of scope; this ADR fixes only the representational primitives that make such comparison possible.

**Schema-version awareness:** StructuredScene v0 must be schema-version-aware at the architecture-contract level. Exact `schemaVersion` field naming, value format, and serialization semantics are deferred to Implementation Package.

### 4.7 Grounding Support Structure

To satisfy ADR-012's Grounding Requirement and support Q10 (explanation), every answer derived from StructuredScene must be traceable to specific node(s) and/or relation(s) via their Identity attribute. The schema must therefore ensure that:
- Every node and relation has a stable identity (4.4).
- Explanations (Q10) are expected to reference such identities rather than being freestanding text disconnected from the graph.

No explanation-generation mechanism is specified here — only the structural precondition that makes grounded explanation possible.

### 4.8 Traceability Matrix

| Schema Element | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Evaluation Dimension(s) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Room node | ✓ | | | | | | | | | | | Query Accuracy |
| StructuralElement node | | | ✓ | ✓ | | ✓ | | | | | | Graph/Relation Consistency |
| Object node | | ✓ | ✓ | | | | ✓ | ✓ | ✓ | ✓ | | Query Accuracy, Explanation Faithfulness |
| FreeSpaceRegion node | | | | ✓ | ✓ | | | | ✓ | | | Graph/Relation Consistency |
| Adjacency relation | | | ✓ | | | | | | | ✓ | | Graph/Relation Consistency, Explanation Faithfulness |
| Containment relation | | | ✓ | | | | | | | ✓ | | Graph/Relation Consistency, Explanation Faithfulness |
| Blocking relation | | | ✓ | ✓ | | ✓ | | | ✓ | ✓ | | Graph/Relation Consistency, Explanation Faithfulness |
| Identity attribute (nodes & relations) | | | | | | | | | | ✓ | ✓ | Grounding Requirement, Explanation Faithfulness, Version/Before-After Consistency |
| Type/Category attribute | | ✓ | | ✓ | | ✓ | ✓ | ✓ | | | | Query Accuracy |
| Spatial extent attribute | ✓ | | | | ✓ | | | | | | | Query Accuracy |
| Approximate spatial placement attribute | | | ✓ | ✓ | | ✓ | | | ✓ | ✓ | | Graph/Relation Consistency, Explanation Faithfulness |
| Affordance attribute | | | | | | | ✓ | ✓ | | ✓ | | Query Accuracy, Explanation Faithfulness |
| Illumination relevance attribute | | | | | | ✓ | ✓ | | | ✓ | | Query Accuracy, Explanation Faithfulness |
| Confidence model | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | Query Accuracy, Grounding Requirement |
| Versioning model | | | | | | | | | | | ✓ | Version/Before-After Consistency |
| Grounding support structure | | | | | | | | | | ✓ | | Grounding Requirement, Explanation Faithfulness |

Every schema element listed in 4.2–4.7 has at least one traceability mapping above. No element in this ADR lacks a mapping. Q10 (explanation) is grounded not only in the Object node and Identity/Grounding Support Structure, but also in Adjacency, Containment, and Blocking relations, Approximate spatial placement, and, where relevant, Affordance and Illumination relevance attributes.

### 4.9 Extensibility Principles for Future Gates

- New node, relation, or attribute categories may be added in future gates without breaking v0 consumers, provided additions are additive (new optional elements), not modifications to existing element meaning.
- Open-vocabulary categories (Type/Category label, Affordance) are designed to absorb new values without schema changes.
- Any change that would alter the meaning or shape of an existing v0 element requires a new major schema version, not an in-place revision of v0.
- StructuredScene v0 must be schema-version-aware at the architecture-contract level, per 4.6. Exact naming, value format, and serialization of the version identifier are deferred to Implementation Package (see Section 9).

## 5. Out of Scope

Perception mechanism or how the schema is filled (ADR-014); full CV pipeline; object detection / instance segmentation implementation; precise metric geometry or exact real-world measurements; SKU / catalog / product identity; product-fit reasoning; full rich affordance ontology beyond Q7–Q8; furniture planning, layout optimization, recommended placement, design scoring; multi-room / whole-home graph; temporal scene evolution beyond simple versioning; downstream consumer contracts; Prompt Engine integration; storage implementation, database design, serialization format, API design, TypeScript implementation interfaces; annotation tooling; benchmark construction; Implementation Package; Project Context or Roadmap updates.

## 6. Consequences

**Positive**
- Provides ADR-012 with a schema architecture sufficient to support the Canonical Query Suite and normative evaluation dimensions, with full traceability.
- Keeps the schema minimal, reducing rework risk before real perception data or evaluation results exist.
- Preserves partial/uncertain data as first-class, matching the realistic output of any near-term perception mechanism (temporary or eventual).
- Leaves ADR-014 (perception) and future Consumer Contract work unconstrained by premature schema commitments.
- Extending Identity to relations and adding Approximate spatial placement closes the grounding gap for Q10 and strengthens Q11 comparability without adding new node/relation categories.

**Trade-offs**
- Category-level specification (not concrete fields) means implementation still requires further engineering decisions before code can be written — this is intentional and deferred to Implementation Package.
- The single parameterized Blocking relation trades some conceptual simplicity for reduced relation-type proliferation; consumers must interpret the blocking-type parameter rather than relying on distinct relation types.
- Deferring Affordance and Illumination to attribute-level (rather than relation-level) modeling is a deliberate minimality choice; it may require revisiting if future evaluation shows relation-level modeling is necessary.

**Risks if this ADR is weakened**
- If node/relation/attribute categories are added without traceability to ADR-012, the schema drifts back toward "theoretically complete" rather than evaluation-driven, reopening the scope-creep risk flagged in the ADR-013 Scope Proposal.
- If confidence or versioning primitives are dropped or under-specified, Q11 and the Grounding Requirement become unsatisfiable regardless of node/relation completeness.
- If schema-version-awareness is dropped entirely (rather than deferred at the naming level only), future schema evolution risks breaking v0 consumers without a detectable version boundary.

## 7. Compliance & Constraints

- Does not specify perception mechanism (ADR-014).
- Does not include full CV pipeline, object detection/instance segmentation implementation, precise geometry, SKU/catalog/product identity, furniture planning/layout optimization, multi-room graph, annotation tooling, or benchmark construction.
- Does not define storage, database, API, serialization, or TypeScript implementation interfaces.
- Does not create an Implementation Package.
- Does not update Project Context or Roadmap.
- Does not modify ADR-004, ADR-007, ADR-010, ADR-011, ADR-012, or the C8 Architecture Assessment.
- Does not reopen Architecture Freeze (ADR-000–006).
- Preserves the ADR-004 invariant: Room node / SpaceTypeId reference does not perform or duplicate room classification.
- Every schema element in this ADR carries traceability to ADR-012 (Section 4.8); no untraced elements are introduced.

## 8. Related Documents

- ADR-011 — C8 Boundary / Representation (Accepted)
- ADR-012 — C8 Evaluation Contract (Accepted)
- ADR-010, ADR-007, ADR-004
- C8 Architecture Assessment (Accepted as readiness artifact)

## 9. Open Questions

- Exact naming, value format, and serialization semantics of schema version identifier — deferred to Implementation Package.
- Whether the single parameterized Blocking relation (with open-vocabulary blocking-type) is sufficient long-term, or whether future gates will require it to split into distinct relation categories.
- Whether Affordance and Illumination relevance should remain attribute-level in future gates, or whether evidence from evaluation (ADR-012) will require promoting either to relation-level modeling.
- Whether Consumer Contract formalization (flagged as open in ADR-011) should influence attribute-category naming before Implementation Package, or remain fully independent.
- Whether Affordance vocabulary governance (who defines/extends the open vocabulary) needs its own future Engineering Decision.
