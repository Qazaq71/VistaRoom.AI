# Gate 2 C8 — Step 7 Closure Review Readiness Artefact

**Status: Prepared for Closure Review**

**Governing Scope Decision:** `docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md` (Revision 5, Accepted, Owner Decision: Accepted, 2026-07-13).

**Prepared:** 2026-07-13, under Owner authorization to begin and complete Step 7 implementation.

---

## 1. Disclaimer

This artefact is not the Final Gate 2 Closure Review. It does not close Gate 2. It does not
constitute Project Owner acceptance of Step 7, Gate 2 implementation, or Gate 2 closure.

## 2. Product-Scope Boundary Clarification

Closure of Gate 2 C8 records architectural traceability for StructuredSceneV0, its validation
boundaries, and the Evaluation Contract. It does not define the product scope of a future Project
Mode Lite package and does not change, remove, or re-authorize the existing Partial Edit, Clear,
mask, or inpainting capabilities.

---

## 3. Eight-Block Traceability Matrix

### Block A — Node Categories (ADR-013 §4.2)

| Node Category | Purpose (ADR-013 §4.2) | Traces to (ADR-013 §4.2) | Staged status of traced queries (Step 6 registry) |
|---|---|---|---|
| **Room** (scene root) | Carries room identity, SpaceTypeId reference (ADR-010), approximate spatial extent | Q1 | Q1 supported |
| **StructuralElement** | Architectural boundary elements (walls, doors, windows, openings) relevant to relations, traffic, light | Q3, Q4, Q6 | Q3 supported, Q4 deferred, Q6 supported |
| **Object** | Design-relevant movable/fixed items (furniture, fixtures, décor) | Q2, Q3, Q7, Q8, Q9, Q10 | Q2, Q3, Q7, Q8, Q9 supported; Q10 deferred |
| **FreeSpaceRegion** | Representation of navigable / unoccupied floor area | Q4, Q5, Q9 | Q4, Q5 deferred; Q9 supported (see Block C note — Q9's current evaluator does not read FreeSpaceRegion nodes) |

### Block B — Relation Categories (ADR-013 §4.3)

| Relation Category | Purpose (ADR-013 §4.3) | Traces to (ADR-013 §4.3) | Staged status of traced queries (Step 6 registry) |
|---|---|---|---|
| **Adjacency** | Two elements spatially next to one another | Q3 | Q3 supported |
| **Containment** | One element spatially within/bounded by another | Q3 | Q3 supported |
| **Blocking** (parameterized by open-vocabulary blocking-type, e.g. physical/traffic, light, clearance) | One element obstructs another with respect to a specific concern | Q3, Q4, Q6, Q9 | Q3, Q6, Q9 supported; Q4 deferred |

### Block C — Attributes Consumed by Implemented Evaluators (Q1, Q2, Q3, Q6, Q7, Q8, Q9)

One row per field actually read by the current evaluator source, built exclusively from explicit
field access observed in `evaluation-harness/evaluators/{q1,q2,q3,q6,q7,q8,q9}.ts` and
`evaluators/shared.ts`.

| Query | `StructuredSceneV0` field / path | Node or relation category | ADR-013 representation reference | Confidence/provenance dependency | Grounding dependency | Support status |
|---|---|---|---|---|---|---|
| Q1 | `RoomNode.spaceTypeId` | Room | §4.2 Room node (SpaceTypeId reference) | `isKnown` / `toEvidence` (shared.ts) — `Observed<T>` gating | `{kind:"node"}`, `{kind:"node_attribute", attribute:"spaceTypeId"}` | Supported |
| Q1 | `RoomNode.spatialExtent` | Room | §4.4 Spatial extent attribute | `isKnown` / `toEvidence` | `{kind:"node"}`, `{kind:"node_attribute", attribute:"spatialExtent"}` | Supported |
| Q2 | `ObjectNode.typeLabel` / `StructuralElementNode.typeLabel` | Object, StructuralElement | §4.4 Type/Category label attribute | `isKnown` / `toEvidence` | `{kind:"node"}`, `{kind:"node_attribute", attribute:"typeLabel"}` | Supported |
| Q2 | `node.category` (`"Object"` \| `"StructuralElement"`) | Object, StructuralElement | §4.2 Node category discriminator | n/a (structural filter, not an `Observed<T>`) | n/a | Supported |
| Q3 | `relation.fromNodeId` / `relation.toNodeId` / `relation.category` | Adjacency, Containment, Blocking | §4.3 Relation categories | `relationEvidence` (shared.ts) — confidence/provenance gating | `{kind:"node"}`, `{kind:"relation"}` | Supported |
| Q3 | `BlockingRelation.blockingType` | Blocking | §4.3 parameterized Blocking | `relationEvidence` | included via `{kind:"relation"}` (item-level, no separate `relation_attribute` reference emitted) | Supported |
| Q6 | `BlockingRelation.blockingType === "light"` | Blocking | §4.3 parameterized Blocking | `relationEvidence` | `{kind:"relation"}`, `{kind:"relation_attribute", attribute:"blockingType"}` | Supported |
| Q6 | `StructuralElementNode.typeLabel === "window"` | StructuralElement | §4.4 Type/Category label attribute | `isKnown` / `toEvidence` | `{kind:"node"}`, `{kind:"node_attribute", attribute:"typeLabel"}` | Supported |
| Q7 | `ObjectNode.affordances` (contains `"illumination"`) | Object | §4.4 Affordance attribute | `isKnown` / `toEvidence` | `{kind:"node"}`, `{kind:"node_attribute", attribute:"affordances"}` | Supported |
| Q7 | `ObjectNode.illuminationRelevance` | Object | §4.4 Illumination relevance attribute | `isKnown` / `toEvidence` | `{kind:"node"}`, `{kind:"node_attribute", attribute:"illuminationRelevance"}` | Supported |
| Q8 | `ObjectNode.affordances` (grouped by tag value) | Object | §4.4 Affordance attribute | `isKnown` / `toEvidence` | `{kind:"node"}`, `{kind:"node_attribute", attribute:"affordances"}` | Supported |
| Q9 | `BlockingRelation.blockingType` (`"traffic"` \| `"clearance"`) | Blocking | §4.3 parameterized Blocking | `relationEvidence` | `{kind:"relation"}`, `{kind:"relation_attribute", attribute:"blockingType"}` | Supported |

**Note on Block A / FreeSpaceRegion:** ADR-013 §4.2 traces FreeSpaceRegion to Q4, Q5, Q9. The
current Q9 evaluator (`q9-explicit-conflicts.ts`) reads only `BlockingRelation` fields
(`blockingType`, `fromNodeId`, `toNodeId`) and does not filter or read `FreeSpaceRegion` nodes.
FreeSpaceRegion's Q9 trace is an architectural (ADR-013) mapping, not a claim about current
evaluator field access; it is not restated as a Block C row because no Q9 evaluator code path
reads a `FreeSpaceRegion` field.

### Block D — Deferred Queries (Q4, Q5, Q10, Q11)

Sourced verbatim from `evaluation-harness/registry.ts` (Step 6 Scope Decision §9 / Implementation
Package §13 staged reporting requirement).

| Query | Reason code | Reason |
|---|---|---|
| Q4 | `traffic_path_analysis_out_of_scope` | Traffic feasibility requires path connectivity, route traversal, and geometric feasibility reasoning that StructuredScene v0 and this staged harness do not implement. |
| Q5 | `free_space_ordering_not_defined` | Free space comparison requires an ordering rule over `qualitativeSize` (an open string), which would require inventing size semantics (e.g. small < medium < large) not defined by ADR-013. |
| Q10 | `design_judgment_out_of_scope` | Explaining why a placement is suboptimal or notable requires design-judgment rules (e.g. for "suboptimal", "notable") that are out of scope for Step 6. |
| Q11 | `versioning_readiness_demonstrated` | Versioning readiness primitives (`roomId`, `sceneId`, `sequence`, stable node/relation identity) exist in StructuredScene v0, but a two-scene input contract, diff algorithm, and history storage are not implemented by this harness. |

### Block E — Unsupported Queries

`UNSUPPORTED_QUERY_IDS` (`evaluation-harness/registry.ts`) is empty. Per
`UNSUPPORTED_QUERY_EXPLANATION`: "Unsupported is empty because each Q1-Q11 query remains part of
the accepted ADR-012 contract. Queries that are not executable in the current staged slice are
deferred rather than permanently excluded." There is no current unsupported-query state.

### Block F — Boundary Validator Violation-Code Traceability

Maps every code in `BOUNDARY_VIOLATION_CODES` (`boundary-validator/types.ts`, read-only primary
source) to the corresponding ADR-014 §4.7 check category: "structural/schema conformance to
ADR-013 (correct node/relation/attribute categories, no untraced or invented fields)" or
"presence of the required confidence and provenance information."

| `BoundaryViolationCode` | ADR-014 §4.7 check category | Detail |
|---|---|---|
| `not_an_object` | Structural/schema conformance | Root value must be a non-null, non-array object |
| `unsupported_field_expansion` | Structural/schema conformance | No untraced/invented fields beyond the closed key set at root, node, relation, or `Observed<T>` level |
| `missing_schema_version` | Structural/schema conformance | `schemaVersion` presence (ADR-013 §4.6 schema-version awareness; Implementation Package §8 engineering convention) |
| `unsupported_schema_version` | Structural/schema conformance | `schemaVersion` value matches the supported literal |
| `missing_identity` | Structural/schema conformance | Required identity and continuity fields must be present and structurally valid: node/relation `id`, relation `fromNodeId` / `toNodeId`, and root `roomId`, `sceneId`, `sequence` (ADR-013 §4.4 Identity; §4.6 Versioning Model) |
| `invalid_nodes_collection` | Structural/schema conformance | `nodes` must be an array |
| `invalid_relations_collection` | Structural/schema conformance | `relations` must be an array |
| `unsupported_node_category` | Structural/schema conformance | Node category must be in the closed ADR-013 §4.2 list |
| `unsupported_relation_category` | Structural/schema conformance | Relation category must be in the closed ADR-013 §4.3 list |
| `missing_confidence` | Presence of required confidence information | `confidence` present and a recognized state (ADR-013 §4.5) |
| `missing_provenance` | Presence of required provenance information | `provenance` present and a recognized state (ADR-014 §4.6) |
| `invented_certainty` | Presence of required confidence/provenance information (consistency) | Known/unknown confidence-provenance pairing must agree, and a "known" branch must carry a structurally valid `value` — prevents fabricated certainty (ADR-014 §4.5 hard constraint 5) |
| `missing_blocking_type` | Structural/schema conformance | `Blocking` relations require a non-empty `blockingType` (ADR-013 §4.3 parameterized Blocking) |

### Block G — Grounding Requirement Traceability

`evaluation-harness/grounding.ts` (`validateGroundingReferences`) implements ADR-012 §4.3
Grounding Requirement: it checks that every `GroundingReference` emitted by an evaluator
(`node`, `node_attribute`, `relation`, `relation_attribute`) actually resolves to a real node or
relation in the accepted `StructuredSceneV0` via its Identity attribute (ADR-013 §4.4, §4.7
Grounding Support Structure), and, for attribute-kind references, to an attribute that the
referenced node/relation's category actually carries (per `NODE_CATEGORY_ATTRIBUTES` /
`RELATION_CATEGORY_ATTRIBUTES`, derived from ADR-013 §4.4 attribute-category-to-node/relation
associations). It is distinct from Step 5 Boundary Validator schema conformance: it checks
truthfulness of grounding, not structural conformance of the scene as a whole.

### Block H — Temporary Hybrid Mechanism Traceability

`hybrid-validation/validate.ts` implements the **Heuristic Validation Sub-component** of the
ADR-014 §4.4 "Hybrid VLM + heuristic validation" mechanism class, matching the Implementation
Package §5 mechanism declaration and §7 two-sub-component decomposition. Its
temporary/bounded/replaceable status is:

- **Declared temporary:** module header states "TEMPORARY / BOUNDED / REPLACEABLE" and "This
  mechanism is not a permanent perception architecture" (ADR-014 §4.3 Temporary Path Decision —
  explicit labeling requirement).
- **Bounded:** `HEURISTIC_VALIDATION_STATUS = "temporary_bounded_replaceable"` is a checked
  constant ("checked by contract tests" per its own comment), and the module performs pure data
  transformation only — no I/O, no network calls, no provider/model/vendor dependency.
- **Replaceable:** header states "it is expected to be replaced (ADR-014)," consistent with
  ADR-014 §4.9 Replacement / Formalization Criteria.

---

## 4. Regression Evidence (Immediate Pre-Execution Baseline, §14)

- `npx tsc --noEmit`: passed, zero errors.
- `npx vitest run`: 9 test files passed, 140 tests passed, 0 failed.
- Historical gap state at baseline: `boundary-validator/validate.ts` and
  `evaluation-harness/grounding.ts` both carried zero ADR references — confirmed present, both
  closed by this Step 7 implementation (§3 Block F, Block G above; TRACE comments added to both
  files).

## 5. Evidence Consolidation Reference (Implementation Package §18)

This artefact consolidates existing evidence already established in Steps 1, 2, 5, and 6, per the
Implementation Package §18 Closure Evidence Required list:

- Explicit supported/deferred/unsupported list per Q1–Q11 — Blocks C, D, E above.
- Traceability matrix (nodes/relations/attributes → Q1–Q11) — Blocks A–C above.
- Regression test results — §4 above.
- Mechanism-temporary marking confirmation — Block H above.

No new capability, architectural decision, or closure decision is introduced by this artefact.
