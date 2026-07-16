# Candidate A Evaluation Threshold and Acceptance Plan — Revision 13

**Document type:** Proposed Owner Governance Decision (not an ADR; not an Implementation Package)  
**Status:** Accepted — Project Owner, 2026-07-15  
**Revision:** 13  
**Prepared by:** Claude, Chief Software Architect (targeted correction pass on Revision 12)  
**Prepared for:** Project Owner Nurlan  
**Preparation date:** 2026-07-15  
**Repository:** `Qazaq71/VistaRoom.AI`, branch `main`  
**Repository persistence:** Not authorized  
**Implementation:** Not authorized

---

## 1. Purpose, supersession and governance position

Revision 13 is the complete standalone evaluation-governance proposal for the first bounded Candidate A perception proof. It supersedes Revision 12 in full as a proposal only and resolves the single closed Finding D from the independent final review of Revision 12 (a self-referential, logically incorrect cross-reference — "unless Section 19 states otherwise" — appearing inside Section 19 itself, in 34 Metric Registry rows, where the normative aggregation and uncertainty rule is actually defined in Section 17). No other content of Revision 12 is reopened.

Revision 13 does not select a provider/model, create or annotate a corpus, create fixtures, modify the repository, create or number an ADR, prepare an Implementation Package, authorize implementation, or automatically authorize any next governance artifact.

---

## 2. Fixed accepted inputs

The following accepted inputs are not reopened:

- Mechanism Class B — Hybrid VLM plus heuristic validation.
- Topology: image → C.1 → `VlmSceneCandidate` → C.2 → `StructuredSceneV0` → C.3 → `PerceptionResult` → evaluation.
- Outcomes: `SceneResult`, `InsufficientEvidenceResult`, `FailureResult`, `RejectedResult`.
- One licensed/synthetic/staged perspective room image, one room, one operation.
- No real user photos, multi-image, multi-view, panorama, floor plan, video, cross-image or whole-home input.
- Required first-iteration capabilities: Room, StructuralElement, Object, Adjacency, Containment, Blocking, Type/Category, Confidence and Provenance.
- FreeSpaceRegion acceptance remains deferred.
- Approximate placement, spatial extent, affordance and illumination relevance remain Diagnostic and non-blocking.
- Room types: living room, bedroom, kitchen and bathroom.
- Corpus and fixtures must be prepared, annotated, quality-checked, versioned and sealed before formal provider/model acceptance evaluation.

---

## 3. Governance model, lifecycle, denominator classes and result rules

### 3.1 Governance classes

Exactly three governance classes exist:

1. **Blocking** — contributes PASS/FAIL/INCONCLUSIVE to the technical Evaluation Result.
2. **Diagnostic** — must be reported but does not directly determine technical PASS/FAIL.
3. **Mandatory Non-blocking** — must be measured and reported but has no acceptance threshold.

### 3.2 Lifecycle roles

Lifecycle role is independent of governance class:

- **Pre-execution sealing prerequisite** — evaluated before held-out execution. Failure prevents sealing and execution but creates no fourth governance class.
- **Formal evaluation** — evaluated during the authorized held-out run.

Annotation-quality metrics are Diagnostic with lifecycle role `Pre-execution sealing prerequisite`. Their lifecycle outcomes are `Acceptable`, `Repair Required` and `Corpus Invalid`.

### 3.3 Execution states and metric results

Execution state is exactly one of:

- `Scored`;
- `Zero Denominator`;
- `Insufficient Pre-Sealing Support`;
- `Post-Sealing Invalidated`;
- `Architecturally Not Applicable`.

Metric result is exactly one of:

- `PASS`;
- `FAIL`;
- `INCONCLUSIVE`;
- `Diagnostic Result`;
- `Reported Value`;
- `Not Applicable`.

A Blocking metric never becomes Diagnostic after execution. A mechanism-caused zero denominator for a Blocking output-controlled metric is FAIL unless its registry row explicitly defines a stricter terminal rule. Companion metrics may expose anti-abstention behavior but never substitute PASS for an unmeasured Blocking property.

### 3.4 Denominator Class Contract

| Class | Source and locking | Measurability | Zero/support rule |
|---|---|---|---|
| `Corpus` | fixed entirely by sealed corpus/annotation or fixed expected-operation population | measurable before mechanism output except numerator | insufficient pre-sealing support requires repair; mechanism output cannot remove units |
| `Mechanism-output` | units exist only when mechanism emits eligible values | measurable after output | mechanism-caused zero is handled by the metric row; for Blocking rows default is FAIL |
| `Composite` | combines sealed GT/expected units with produced units or matched pairs | partly fixed before run, completed after output | sealed support failure requires repair; output-created absence follows row rule |
| `Fixture-controlled` | exact sealed fixture suite and subtype registry | fully fixed before run | missing fixture count prohibits sealing; wrong output is scored |
| `Input-configuration` | exact authorized operation/configuration population | fixed before run | every attempted operation remains in denominator regardless of result |

No metric may change denominator class after held-out outputs are viewed.

---

## 4. Geometry, node evidence, relation evidence and attribute evidence

### 4.1 Canonical geometry

All geometry uses normalized source-image coordinates `[0,1] × [0,1]`, origin upper-left. Canonical entity geometry is the axis-aligned visible-region bounding box. Geometry must be finite, tied to the exact source image, clipped in bounds, non-empty and at least 2×2 source pixels after clipping.

`IoU(A,B)=area(A∩B)/area(A∪B)`. Entity correspondence requires `IoU >= 0.50`.

### 4.2 Reference conversion

- `PolygonReference`: canonical box is min/max of valid polygon vertices after clipping.
- `MaskReference`: canonical box is the min/max source-pixel extent of non-zero mask pixels, normalized by source dimensions.
- `CropReference`: canonical box is the crop rectangle mapped to source-image coordinates.
- `NormalizedProviderReference`: permitted only when its locked adapter contract exposes a provider-neutral finite rectangle `(xMin,yMin,xMax,yMax)`, source-image identity and adapter-version identity. Any provider reference without this normalized payload is invalid for the bounded proof.

Conversion failure makes the evidence/geometry unit invalid; no provider-specific hidden conversion may be introduced after sealing.

### 4.3 Node and relation evidence

A valid node `EvidenceReference` contains artifact ID, node ID, source-image ID, allowed reference kind, canonical geometry and non-empty payload. Every produced required node, including an unknown-valued node, is in the grounding denominator.

A diagnostic `RelationEvidenceArtifact` contains artifact ID, relation ID, evidence references for both endpoints and exactly one evidence category from `geometric|visual|inferential`. Missing/invalid relation evidence affects `REL-EVIDENCE` only and never determines relation TP validity.

### 4.4 Attribute Evidence Contract

Every produced best-effort value eligible for an `EVID` metric must reference an `AttributeEvidenceArtifact` with:

- artifact ID;
- capability and field ID;
- owner node/relation/value ID;
- source-image ID;
- evidence kind `image-region|pixel-cue|explicit-inference-basis`;
- valid canonical geometry for image-region/pixel-cue, or a non-empty versioned inference-basis code;
- provenance enum `visually-observed|deterministic-derived|heuristic-inferred|provider-inferred`;
- schema version and producing-stage identity.

Missing, malformed, cross-image or unsupported evidence is invalid. `AttributeEvidenceArtifact` is an evaluation artifact and does not modify the accepted `StructuredSceneV0` schema.

---

## 5. Supporting contracts and governance sequence

### 5.1 Required locked contracts

Before annotation sealing, the following versioned contracts must be accepted and locked:

1. Category Vocabulary and Synonym Contract.
2. Relation Annotation and Applicability Contract.
3. Relation Type × Room Type Applicability Matrix.
4. Best-Effort Evidence, Provenance and Determinability Annotation Contract.
5. Confidence Generation and Normalization Contract.
6. Unknown/Determinability Annotation and Pairing Contract.
7. Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract.
8. Unseen-Claim Evaluation Artifact Contract.
9. Operational and Contract Violation Fixture Subtype Registry.
10. Conformance Field Inventory and Validation Contract.
11. Aggregation, Uncertainty and Score-Stability Appendix.

### 5.2 Governance route

The required sequence is:

1. Project Owner decision on this Threshold Plan.
2. Test Data Handling Decision.
3. Separate preparation and Owner acceptance of contracts 1–10.
4. Tier 1 Corpus Preparation Authorization.
5. Development corpus/fixture creation and annotation.
6. Annotation-quality repair and preparation of contract 11 using actual development denominators.
7. Owner confirmation that all prerequisites are accepted and lockable.
8. Held-out sealing.
9. Provider/Model Evaluation Authorization.
10. One formal held-out execution.

Corpus preparation may not begin before contracts 1–10 are accepted. A change to any locked contract after held-out sealing invalidates the affected held-out subset and requires Owner-authorized resealing or a fresh subset.

---

## 6. Entity matching, accounting and deterministic error taxonomy

### 6.1 Authoritative Pass-2 accounting

TP/FP/FN uses class-restricted deterministic one-to-one maximum-IoU bipartite matching per scene. Candidate edges require valid geometry, IoU ≥0.50 and equal top-level node class. The assignment maximizes:

1. number of matches;
2. total IoU;
3. lexicographically smallest ordered sequence of `(GT ID, produced ID)`.

Matched produced entities are TP; unmatched produced entities are FP; unmatched GT entities are FN.

### 6.2 Diagnostic taxonomy for unmatched produced entities

The taxonomy does not modify Pass-2 TP/FP/FN. Every unmatched produced entity receives exactly one class in this order:

1. `NODE_CLASS_MISMATCH` — it has IoU ≥0.50 with an unmatched GT entity of another top-level class; choose highest IoU, then lexicographic IDs.
2. `DUPLICATE_PREDICTION` — it has IoU ≥0.50 with a GT entity already owned by a Pass-2 TP of the same top-level class.
3. `OTHER_SPATIAL_CORRESPONDENCE` — it has IoU ≥0.20 with any GT entity not used by rules 1–2.
4. `GENUINE_HALLUCINATION` — none of rules 1–3 applies.

A severe structural hallucination is a `GENUINE_HALLUCINATION` StructuralElement whose locked subtype is wall, door, window, opening, column, stair/open vertical circulation, major fixed partition or structural boundary.

### 6.3 Category correctness

Category correctness uses matched Pass-2 pairs and the locked vocabulary. The removed coverage gates are not retained because they were mathematically identical to recall. Category-evaluable support is instead explicit: at least four matched pairs overall and at least four matched pairs in every room type for which a category floor is reported. Failure to reach support because of mechanism output makes the corresponding Blocking category metric FAIL.

`ENT-SE-F1` and `ENT-OBJ-F1` are restored as Diagnostic composite metrics.

---

## 7. Relation identity, assignment and exhaustive taxonomy

### 7.1 Canonical identity

- Adjacency: `(Adjacency,min(A,B),max(A,B))`.
- Containment: `(Containment,container,contained)`.
- Blocking: `(Blocking,blocker,blocked)`.

Only one GT relation per canonical identity is allowed. Duplicate GT identity blocks sealing.

### 7.2 GT truth

GT truth, endpoint applicability, obstruction modes, borderline/inconclusive treatment and room-type applicability come only from the accepted Relation Annotation and Applicability Contract and applicability matrix. Applicability cannot be changed after viewing mechanism outputs.

### 7.3 Frozen global matching

Produced endpoints first map through authoritative entity Pass-2. Relations are then matched globally and one-to-one per scene in three frozen levels:

1. exact canonical identity;
2. same relation type and same endpoint set but reversed direction for a directed type;
3. same mapped endpoint set but wrong relation type.

Each level maximizes match cardinality, then uses lexicographic `(GT relation ID, produced relation ID)` tie-break; matches freeze before the next level.

### 7.4 Exhaustive produced-relation classification

Every produced relation receives exactly one class, in this order:

- `V` — exact TP from level 1;
- `D` — matched at level 2, wrong direction;
- `T` — matched at level 3, wrong type;
- `DUP` — duplicates the canonical identity of an earlier frozen produced match;
- `U1` — exactly one endpoint lacks authoritative entity mapping;
- `U2` — both endpoints lack authoritative entity mapping;
- `U3` — both endpoints map to valid entities but no GT relation with that endpoint set exists;
- `OTHER_FP` — any remaining produced relation.

Accounting: `V` is TP; `D` and `T` are FP plus corresponding GT FN; `DUP`, `U1`, `U2`, `U3` and `OTHER_FP` are FP; every unassigned GT is FN.

`REL-*-UNSUP` numerator is `U1+U2+U3`; it intentionally excludes wrong type, wrong direction, duplicates and `OTHER_FP`, which remain visible in the mandatory taxonomy report.

---

## 8. Unknown and determinability contract

### 8.1 First-iteration scope

Blocking unknown handling applies only to:

- matched entity subtype;
- required confidence state;
- required provenance state.

`UNK-NODETYPE-*` is removed because a schema-valid final `StructuredSceneV0` node cannot have an unknown top-level discriminator without a separately accepted pre-schema representation.

### 8.2 Annotation units and pairing

The locked Unknown/Determinability Annotation and Pairing Contract defines one annotation unit per:

- matched StructuralElement subtype;
- matched Object subtype;
- every required confidence-bearing value;
- every required provenance-bearing value;
- each produced best-effort field by capability.

For entity subtype, pairing is the authoritative Pass-2 pair. For required confidence/provenance, pairing uses the owning required node/relation/value identity. For best-effort fields, pairing uses capability + owner ID + field ID.

Each annotation unit is sealed as `determinable`, `not-determinable` or `inconclusive`. Inconclusive units are excluded before sealing and replaced when needed for minimum support. Missing required produced value is not “unknown”; it is a conformance failure and, for Blocking unknown metrics, a failed paired unit.

StructuralElement and Object subtype unknown rates are reported separately inside the `UNK-SUBTYPE-*` report row; the overall result fails if either family or any room floor fails. Confidence and provenance are reported separately by owning value family so one large family cannot mask another.

---

## 9. Ordinal confidence and calibration

The accepted model is ordinal, not probabilistic. ECE and Brier are excluded.

### 9.1 Source and transformation dimensions

Confidence has two independent dimensions:

- source: `provider-supplied|heuristic-generated|missing`;
- transformation: `unchanged|deterministic-normalized|not-applicable`.

A value belongs to exactly one source and one transformation category. “Provider-supplied and normalized” is represented as source=`provider-supplied`, transformation=`deterministic-normalized`, not as competing populations.

### 9.2 Exact calibration targets

Seven Diagnostic metrics exist:

- StructuralElement detection: matched produced=correct; unmatched produced=incorrect.
- Object detection: matched produced=correct; unmatched produced=incorrect.
- StructuralElement category: locked subtype correct on a matched pair.
- Object category: locked subtype correct on a matched pair.
- Adjacency, Containment and Blocking: produced assertion is an exact TP for that relation type.

For every metric report by source × transformation:

- count in `known-with-confidence`, `known-with-uncertainty`, `unknown`;
- empirical correctness in every non-empty state;
- monotonicity;
- ordinal gap = high correctness − uncertain correctness;
- unknown-state count and correctness where correctness is defined.

If high or uncertain state count is zero, its statistic is `Not Applicable`; the metric remains a Diagnostic Result. Heuristic confidence is prohibited unless the locked Confidence Generation and Normalization Contract exists.

---

## 10. Semantic case and corpus contract

### 10.1 Ordinary grid

Four room types × six scenario families:

- normal readable;
- moderate clutter;
- partial occlusion;
- partial-room framing;
- lighting variation;
- camera-angle variation.

The Semantic Case Annotation Contract defines objective inclusion/exclusion examples, primary-label precedence and ambiguity handling for every family. Development contains two unique images per cell (48); held-out contains three (72).

### 10.2 Special groups

Development/held-out minimums:

- low-information: 3/6;
- empty or near-empty: 2/5;
- meaningful partial-scene: 5/10;
- genuine insufficient-evidence: 5/10.

Ordinary and special primary buckets are mutually exclusive for minimum counts. Secondary labels never increase minimum counts. Totals remain 63 development and 103 held-out unique semantic images.

### 10.3 Lineage

All images from one physical/staged room or generation session, including alternate angles and every derivative, belong wholly to one subset. No lineage crosses development/held-out.

### 10.4 Sufficiency, completeness and expected family

A SceneResult-expected case requires visible evidence for Room plus at least one independent required entity/evidence unit; one cue cannot satisfy both units.

An IE-expected case lacks that minimum because of crop, darkness, blur, resolution or absent content.

Completeness is `full` when no locked edge-continuation cue or other enumerated criterion indicates a meaningful required entity/structure continues beyond frame. It is `partial` when at least one enumerated edge-continuation criterion is satisfied.

All criteria, edge markers, expected-family assignment, ambiguity adjudication and replacement rules reside in the locked Semantic Case Annotation Contract. Unresolved cases are excluded and replaced before sealing.

---

## 11. Expected-outcome populations

IE sensitivity denominator is every sealed IE-expected semantic case. IE specificity denominator is every sealed SceneResult-expected semantic case.

`UNEXP-COMB` is the rate of any produced result family different from the sealed expected family. It includes false SceneResult on IE-expected cases, false IE on SceneResult-expected cases, and unexpected Failure/C.2 rejection/C.3 rejection on either family.

No produced output may change a case’s sealed expected family.

---

## 12. Fixture suites and exact subtype registry

### 12.1 Failure fixtures

| Subtype ID | Dev/HO | Expected | Stage | Reason | Retryability | Prohibited |
|---|---:|---|---|---|---|---|
| `F-PROVIDER-TIMEOUT` | 2/3 | FailureResult | provider | `provider.timeout` | retryable under unchanged locked retry rule | Scene/IE/Rejected |
| `F-PROVIDER-MALFORMED` | 2/3 | FailureResult | C.1 | `provider.malformed_response` | not retryable without mechanism change | Scene/IE/Rejected |
| `F-INPUT-UNREADABLE` | 2/4 | FailureResult | preprocessing | `input.unreadable` | input replacement required | any other |
| `F-INPUT-UNSUPPORTED` | 2/3 | FailureResult | preprocessing | `input.unsupported` | input replacement required | any other |

### 12.2 C.2 operational rejection fixtures

| Subtype ID | Dev/HO | Expected reason | Prohibited |
|---|---:|---|---|
| `C2-MISSING-ROOM-CANDIDATE` | 1/2 | `c2.room.missing_candidate` | Scene/IE/Failure/C.3 rejection |
| `C2-DUPLICATE-NODE-ID` | 1/2 | `c2.node.duplicate_id` | same |
| `C2-DANGLING-REL-ENDPOINT` | 1/2 | `c2.relation.dangling_endpoint` | same |
| `C2-INVALID-CANDIDATE-GEOMETRY` | 1/2 | `c2.geometry.invalid` | same |

All expect `RejectedResult` at C.2 and are not retryable without artifact/mechanism correction.

### 12.3 General C.3 operational rejection fixtures

| Subtype ID | Dev/HO | Expected reason | Prohibited |
|---|---:|---|---|
| `C3-SCHEMA-VERSION-MISMATCH` | 1/2 | `c3.general.schema_version` | Scene/IE/Failure/C.2 rejection |
| `C3-OPERATION-ID-MISMATCH` | 1/2 | `c3.general.operation_identity` | same |
| `C3-IMAGE-ID-MISMATCH` | 1/2 | `c3.general.image_identity` | same |
| `C3-INVALID-RESULT-METADATA` | 1/2 | `c3.general.result_metadata` | same |

All expect `RejectedResult` at C.3 and are not retryable without artifact correction.

### 12.4 Contract Violation fixtures

Six subtypes—missing Room, invalid Room cardinality, missing confidence, invalid confidence, missing provenance and invalid provenance—each have 2 development and 3 held-out fixtures, with the exact reason codes from Revision 10. All expect C.3 `RejectedResult`; all prohibited outcomes are SceneResult, IE, Failure and C.2 rejection.

Totals remain:

- Operational: 16 development / 29 held-out;
- Contract Violation: 12 development / 18 held-out.

Every listed subtype is critical and has a 1.00 subtype floor. Suites are disjoint.

---

## 13. Concrete Conformance Field Inventory

### 13.1 C.1 candidate

Required fields:

- `candidateSchemaVersion`: non-empty locked enum;
- `operationId`, `sourceImageId`: exact input identity;
- `roomCandidate`: exactly one parseable room candidate;
- `nodes[]`: unique IDs, allowed candidate kind, parseable geometry/reference;
- `relations[]`: unique IDs and existing candidate endpoint IDs;
- candidate confidence/provenance fields where the candidate contract requires them.

C.1 is Diagnostic only.

### 13.2 Post-C.2/pre-C.3 StructuredScene artifact

Required operation fields:

- `schemaVersion = structured-scene.v0`;
- exact `operationId` and `sourceImageId`;
- exactly one Room;
- unique node IDs;
- unique relation IDs;
- all relation endpoints exist.

Required node fields:

- ID;
- top-level discriminator;
- allowed locked subtype/category or allowed unknown value;
- required ordinal confidence enum;
- required provenance enum;
- required node EvidenceReference.

Required relation fields:

- ID;
- relation type;
- valid endpoint IDs and direction where applicable;
- required ordinal confidence;
- required provenance.

### 13.3 Final result envelope

A SceneResult-claiming output must be parseable and contain:

- exact operation/image identity;
- result family=`SceneResult`;
- valid validation-stage metadata;
- one valid StructuredSceneV0 artifact;
- no forbidden extra result-family payload.

Malformed or non-parseable SceneResult claims remain in every operation-level conformance denominator and fail.

For every field, presence, enum/range, cardinality and identity mismatch are zero-tolerance conformance failures. AttributeEvidenceArtifact, RelationEvidenceArtifact and UnseenClaimRecord remain evaluation artifacts and are scored by their own metrics.

---

## 14. Partial-scene and Unseen-Claim contract

### 14.1 Per-case semantic success

For each meaningful partial case:

- StructuralElement precision ≥0.80 and recall ≥0.75 if StructuralElement GT exists; any produced StructuralElement with no GT yields precision failure.
- Object precision ≥0.80 and recall ≥0.75 if Object GT exists; any produced Object with no GT yields precision failure.
- A class with neither GT nor produced entities is Not Applicable and cannot compensate another class.
- Room is evaluated by exactly-one-Room conformance, not entity precision/recall.
- StructuralElement and Object subtype correctness each ≥0.80 when at least five matched pairs exist; with 1–4 pairs every matched subtype must be correct; with zero pairs and positive GT the case fails.
- Every applicable relation type with GT has case F1 ≥0.55; if no GT of that type exists, any produced assertion of that type fails the case.
- Any severe structural hallucination fails the case.
- All conformance, grounding and unseen-claim requirements pass.

### 14.2 UnseenClaimRecord

Every semantic assertion emitted on a meaningful partial case exposes one evaluation record:

- assertion ID and assertion kind;
- owner node/relation/value ID;
- `claimsUnobservedSpace: true|false`;
- optional claim code from the sealed case vocabulary;
- source operation/image identity;
- producing-stage and contract version.

The sealed case annotation contains allowed and prohibited unseen-space claim codes. Missing, malformed or unpaired records fail `PARTIAL-CLAIM-CONFORM`. A prohibited claim or an unpermitted `true` value fails PARTIAL.

The artifact is evaluation-facing and does not modify StructuredSceneV0. There is no `Not Scorable` result; absence is FAIL.

---

## 15. Annotation quality applicability, formulas and transitions

### 15.1 Cells and families

A room cell means one of the four room types, not room×scenario. Applicability is pre-sealed.

Families:

- category: StructuralElement subtype and Object subtype reported separately;
- entity matching/IoU: StructuralElement and Object separately;
- relation agreement: Adjacency, Containment and Blocking separately;
- inconclusive rate: reported separately for entity, category, relation, sufficiency/completeness and best-effort annotation families.

No combined family score may mask a failing family/cell.

### 15.2 Formulas

- Category agreement = agreeing jointly evaluable labels / jointly evaluable paired labels.
- Entity match = `2M/(N1+N2)`.
- Mean IoU = sum IoU over M / M.
- Relation agreement = `M/(N1+N2−M)`.
- Inconclusive = inconclusive units / all units within the same family and room type.

Minimum support per applicable family × room type:

- category agreement ≥10 paired labels;
- entity match/IoU ≥8 instances per annotator and ≥4 matched pairs;
- relation agreement ≥6 identities across annotators and ≥3 matched identities;
- inconclusive rate ≥10 units.

Thresholds remain those of Revision 10. Any applicable cell below support is `Repair Required`. Every applicable cell must be Acceptable before sealing. A failed cell after one documented repair cycle is `Corpus Invalid`.

---

## 16. Coverage inventory and sealing readiness

Before sealing, a versioned inventory reports actual overall and room-type counts for every corpus-controlled denominator, GT-bearing scene, supplied SpaceTypeId operation, expected-result family, annotation-quality family/cell, relation applicability cell and fixture subtype.

Relation GT support:

- Adjacency: 20 overall and ≥5 per applicable room type across ≥3 scenes;
- Containment: 15 overall and ≥4 per applicable room type across ≥3 scenes;
- Blocking: 15 overall and ≥4 per applicable room type across ≥3 scenes.

An applicable cell below support requires corpus expansion. Applicability cannot be changed after annotation or output inspection.

---

## 17. Aggregation and uncertainty contract

Unless a row explicitly says otherwise:

- TP/FP/FN and binary proportions are micro-pooled overall and separately micro-pooled per room type.
- Room floors are never macro-averaged with overall results.
- F1 is computed from pooled TP/FP/FN, not an average of scene F1.
- Wilson intervals use 95% confidence.
- Scene bootstrap uses 2,000 resamples, scene as the resampling unit, and reports a 95% percentile interval.
- A scene with zero eligible units contributes no unit to that metric but remains visible in the zero-eligible-scene count.
- A mechanism-caused global zero denominator follows the row terminal rule.
- Diagnostic count metrics use counts/distributions, not Wilson intervals.

---

## 18. Complete pre-acceptance score-stability appendix

The following table is normative before threshold acceptance; the sealed appendix substitutes actual denominators without changing rules.

| Blocking family | Minimum denominator / boundary | Passing boundary | One-error sensitivity |
|---|---|---|---|
| ENT-SE-P | produced N=1,2,4,5,8,10,20,50 | `ceil(.80N)` overall; `ceil(.70N)` room | recompute after one FP |
| ENT-SE-R | GT 20 overall; 8 room | 15/20; 6/8 | one FN: 14/20 fails; 5/8 fails |
| ENT-OBJ-P | produced N lattice | `ceil(.75N)` overall; `ceil(.65N)` room | recompute after one FP |
| ENT-OBJ-R | GT 30 overall; 10 room | 20/30; 6/10 | one FN may cross boundary; exact lattice reported |
| ENT-SE/OBJ-CAT | matched N=4,5,8,10,20 | `ceil(.85N)` overall; `ceil(.75N)` room; at N=4 room 3/4 | one wrong label recomputed |
| ENT-HALL | produced N lattice | errors ≤`floor(.10N)` overall and `floor(.15N)` room | first permitted error appears at N=10 overall |
| ENT-SEV-HALL | produced N lattice | errors ≤`floor(.05N)` overall and `floor(.08N)` room | at N<13 room and N<20 overall zero errors |
| Relation F1 | GT N=20/5 Adj; 15/4 Cont/Block | enumerate TP/FP/FN combinations satisfying thresholds | add one FP and one FN separately |
| REL-*-UNSUP | produced N lattice | errors ≤`floor(.15N)` overall / `.20N` room | N=5 room permits one; N=5 overall permits zero |
| Unknown Blocking | sealed pairs N=4,5,8,10,15,20 | errors ≤`floor(.15N)` overall / `.25N` room | exact family/room lattice |
| INS-SENS | N=10 | 7/10 | 6/10 fails |
| INS-SPEC | N=20 | 17/20 | 16/20 fails |
| PARTIAL | N=10 | 8/10 | 7/10 fails |
| Unexpected rates | sealed semantic N=103 or eligible subset | exact `floor(threshold×N)` | next error fails |
| SPACETYPE | N=20 overall,5 room | 20/20;5/5 at current denominators | first error fails current floor |
| FIX-FAIL | 13 overall plus exact subtype counts | overall ≥12/13 AND every subtype 1.00 | any subtype error makes metric FAIL even if overall passes |
| FIX-C2 | 8 overall,2/subtype | overall ≥7/8 AND every subtype 2/2 | any error fails subtype and metric |
| FIX-C3 | 8 overall,2/subtype | 8/8 and every subtype 2/2 | first error fails |
| CVF-C3 | 18 overall,3/subtype | 18/18 and every subtype 3/3 | first error fails |
| Zero-tolerance conformance/grounding/claim | actual eligible denominator | all units correct | first error fails |

Threshold rationale: these are bounded-proof operational gates, not production claims. They prioritize catastrophic-error control, anti-abstention behavior and room-type non-compensation while acknowledging small first-proof samples. No threshold may change after held-out outputs are viewed.

---

## 19. Metric Registry and row-level Integrity/Traceability Matrix

| Metric ID | Governance class | Lifecycle role | Exact boundary/unit | Numerator or statistic / denominator | Denominator class | Threshold | Zero/support terminal rule | Uncertainty | Report row | Owner Decision |
|---|---|---|---|---|---|---|---|---|---|---|
| ENT-SE-P | Blocking | Formal evaluation | Layer 3 / produced StructuralElement | TP/(TP+FP), Pass-2 entity accounting | Mechanism-output | >=0.80 overall; >=0.70 per applicable room | zero produced => FAIL; nonzero any N scored | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-SE-P | OD-06 |
| ENT-SE-R | Blocking | Formal evaluation | Layer 3 / GT StructuralElement | TP/(TP+FN), Pass-2 entity accounting | Corpus | >=0.75 overall; >=0.65 per room | GT support below 20 overall or 8/room => repair before sealing | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-SE-R | OD-06 |
| ENT-SE-F1 | Diagnostic | Formal evaluation | Layer 3 / StructuralElement TP, FP and FN | 2TP/(2TP+FP+FN), Pass-2 entity accounting | Composite | none | GT zero and produced zero => Diagnostic: no eligible entities; otherwise score | scene bootstrap, 95%, 2000 resamples | ER-ENT-SE-F1 | OD-07 |
| ENT-OBJ-P | Blocking | Formal evaluation | Layer 3 / produced Object | TP/(TP+FP), Pass-2 entity accounting | Mechanism-output | >=0.75 overall; >=0.65 per room | zero produced => FAIL | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-OBJ-P | OD-06 |
| ENT-OBJ-R | Blocking | Formal evaluation | Layer 3 / GT Object | TP/(TP+FN), Pass-2 entity accounting | Corpus | >=0.65 overall; >=0.55 per room | GT support below 30 overall or 10/room => repair | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-OBJ-R | OD-06 |
| ENT-OBJ-F1 | Diagnostic | Formal evaluation | Layer 3 / Object TP, FP and FN | 2TP/(2TP+FP+FN), Pass-2 entity accounting | Composite | none | GT zero and produced zero => Diagnostic: no eligible entities; otherwise score | scene bootstrap, 95%, 2000 resamples | ER-ENT-OBJ-F1 | OD-07 |
| ENT-SE-CAT | Blocking | Formal evaluation | Layer 3 / matched StructuralElement pairs | correct locked subtype / matched pairs | Mechanism-output | >=0.85 overall; >=0.75 per room | coverage gate failure => FAIL; zero pairs => FAIL | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-SE-CAT | OD-08 |
| ENT-OBJ-CAT | Blocking | Formal evaluation | Layer 3 / matched Object pairs | correct locked subtype / matched pairs | Mechanism-output | >=0.85 overall; >=0.75 per room | coverage gate failure => FAIL; zero pairs => FAIL | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-OBJ-CAT | OD-08 |
| ENT-HALL | Blocking | Formal evaluation | Layer 3 / produced required entities | entities classified genuine hallucination by Section 6.2 / all produced required entities | Mechanism-output | <=0.10 overall; <=0.15 per room | zero produced required entities => FAIL; every unmatched entity must receive exactly one taxonomy class | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-HALL | OD-06 |
| ENT-SEV-HALL | Blocking | Formal evaluation | Layer 3 / produced StructuralElement | severe StructuralElements classified genuine hallucination by Section 6.2 / all produced StructuralElements | Mechanism-output | <=0.05 overall; <=0.08 per room | zero produced StructuralElements => FAIL; every unmatched StructuralElement must receive exactly one taxonomy class | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-ENT-SEV-HALL | OD-06 |
| REL-ADJ-F1 | Blocking | Formal evaluation | Layer 3 / Adjacency GT and produced relations | 2TP/(2TP+FP+FN), deterministic relation assignment | Composite | >=0.65 overall; >=0.55 per applicable room | GT support <20 overall or <5/applicable room => repair; zero produced with GT => FAIL | scene bootstrap 95%, 2000 resamples, scene as resampling unit | ER-REL-ADJ-F1 | OD-09 |
| REL-ADJ-UNSUP | Blocking | Formal evaluation | Layer 3 / produced Adjacency assertions | Section 7.4 classes U1-U3 / all produced assertions of type | Mechanism-output | <=0.15 overall; <=0.20 per applicable room | zero produced assertions of this type => FAIL; every produced assertion must receive exactly one Section 7.4 class | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-REL-ADJ-UNSUP | OD-09 |
| REL-ADJ-COND | Diagnostic | Formal evaluation | Layer 3 / produced endpoint-evaluable Adjacency assertions | exact TP / produced nonduplicate assertions with both endpoints matched | Mechanism-output | none | zero denominator => Diagnostic: no evaluable assertions | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-REL-ADJ-COND | OD-09 |
| REL-CONT-F1 | Blocking | Formal evaluation | Layer 3 / Containment GT and produced relations | 2TP/(2TP+FP+FN), deterministic relation assignment | Composite | >=0.65 overall; >=0.55 per applicable room | GT support <15 overall or <4/applicable room => repair; zero produced with GT => FAIL | scene bootstrap 95%, 2000 resamples, scene as resampling unit | ER-REL-CONT-F1 | OD-09 |
| REL-CONT-UNSUP | Blocking | Formal evaluation | Layer 3 / produced Containment assertions | Section 7.4 classes U1-U3 / all produced assertions of type | Mechanism-output | <=0.15 overall; <=0.20 per applicable room | zero produced assertions of this type => FAIL; every produced assertion must receive exactly one Section 7.4 class | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-REL-CONT-UNSUP | OD-09 |
| REL-CONT-COND | Diagnostic | Formal evaluation | Layer 3 / produced endpoint-evaluable Containment assertions | exact TP / produced nonduplicate assertions with both endpoints matched | Mechanism-output | none | zero denominator => Diagnostic: no evaluable assertions | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-REL-CONT-COND | OD-09 |
| REL-BLOCK-F1 | Blocking | Formal evaluation | Layer 3 / Blocking GT and produced relations | 2TP/(2TP+FP+FN), deterministic relation assignment | Composite | >=0.55 overall; >=0.45 per applicable room | GT support <15 overall or <4/applicable room => repair; zero produced with GT => FAIL | scene bootstrap 95%, 2000 resamples, scene as resampling unit | ER-REL-BLOCK-F1 | OD-09 |
| REL-BLOCK-UNSUP | Blocking | Formal evaluation | Layer 3 / produced Blocking assertions | Section 7.4 classes U1-U3 / all produced assertions of type | Mechanism-output | <=0.15 overall; <=0.20 per applicable room | zero produced assertions of this type => FAIL; every produced assertion must receive exactly one Section 7.4 class | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-REL-BLOCK-UNSUP | OD-09 |
| REL-BLOCK-COND | Diagnostic | Formal evaluation | Layer 3 / produced endpoint-evaluable Blocking assertions | exact TP / produced nonduplicate assertions with both endpoints matched | Mechanism-output | none | zero denominator => Diagnostic: no evaluable assertions | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-REL-BLOCK-COND | OD-09 |
| REL-EVIDENCE | Diagnostic | Formal evaluation | Layer 3 / produced relations | schema-valid RelationEvidenceArtifact / produced relations | Mechanism-output | none | zero produced => report zero | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-REL-EVIDENCE | OD-04 |
| UNK-SUBTYPE-UNDER | Blocking | Formal evaluation | Layer 3 / sealed determinability pairs under the locked Unknown/Determinability Annotation and Pairing Contract | determinable matched entity subtypes emitted unknown / eligible field-specific sealed determinability pairs | Composite | <=0.15 overall; <=0.25 per room | GT support <15 overall or <4/room => repair; missing required produced value or no pair caused by mechanism => FAIL | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNK-SUBTYPE-UNDER | OD-10 |
| UNK-SUBTYPE-OVER | Blocking | Formal evaluation | Layer 3 / sealed determinability pairs under the locked Unknown/Determinability Annotation and Pairing Contract | non-determinable matched entity subtypes forced concrete / eligible field-specific sealed determinability pairs | Composite | <=0.15 overall; <=0.25 per room | GT support <15 overall or <4/room => repair; missing required produced value or no pair caused by mechanism => FAIL | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNK-SUBTYPE-OVER | OD-10 |
| UNK-CONF-UNDER | Blocking | Formal evaluation | Layer 3 / sealed determinability pairs under the locked Unknown/Determinability Annotation and Pairing Contract | determinable required values assigned unknown confidence state / eligible field-specific sealed determinability pairs | Composite | <=0.15 overall; <=0.25 per room | GT support <15 overall or <4/room => repair; missing required produced value or no pair caused by mechanism => FAIL | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNK-CONF-UNDER | OD-10 |
| UNK-PROV-OVER | Blocking | Formal evaluation | Layer 3 / sealed determinability pairs under the locked Unknown/Determinability Annotation and Pairing Contract | non-observed values labelled visually observed / eligible field-specific sealed determinability pairs | Composite | <=0.15 overall; <=0.25 per room | GT support <15 overall or <4/room => repair; missing required produced value or no pair caused by mechanism => FAIL | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNK-PROV-OVER | OD-10 |
| UNK-BEATTR-UNDER | Diagnostic | Formal evaluation | Layer 3 / field-specific best-effort values paired under the locked Unknown/Determinability Contract | determinable produced values emitted unknown / field-specific paired produced values | Composite | none | zero produced values => Diagnostic zero-output record by capability and field | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNK-BEATTR-UNDER | OD-10 |
| UNK-BEATTR-OVER | Diagnostic | Formal evaluation | Layer 3 / field-specific best-effort values paired under the locked Unknown/Determinability Contract | non-determinable produced values forced concrete / field-specific paired produced values | Composite | none | zero produced values => Diagnostic zero-output record by capability and field | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNK-BEATTR-OVER | OD-10 |
| INS-SENS | Blocking | Formal evaluation | Operation / all sealed IE-expected semantic cases | InsufficientEvidenceResult / all IE-expected cases | Corpus | >=0.70 | minimum 10 IE-expected held-out cases; below => repair | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-INS-SENS | OD-14 |
| INS-SPEC | Blocking | Formal evaluation | Operation / all SceneResult-expected semantic cases | not InsufficientEvidenceResult / all SceneResult-expected cases | Corpus | >=0.85 | minimum 20; below => repair | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-INS-SPEC | OD-14 |
| PARTIAL | Blocking | Formal evaluation | Operation / meaningful partial-scene cases | cases satisfying all Section 14.1 binary conditions / all partial cases | Corpus | >=0.80 | minimum 10; below => repair | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-PARTIAL | OD-18 |
| PARTIAL-CLAIM-CONFORM | Blocking | Formal evaluation | Evaluation artifact / every assertion emitted on meaningful partial-scene cases | schema-valid UnseenClaimRecord values / all eligible emitted assertions | Mechanism-output | =1.00 | missing artifact or zero exposed assertions when semantic assertions exist => FAIL | exact zero-tolerance | ER-PARTIAL-CLAIM-CONFORM | OD-19 |
| UNEXP-FAIL | Blocking | Formal evaluation | Operation / all semantic cases whose expected result is not FailureResult | unexpected FailureResult / eligible cases | Corpus | <=0.10 | population fixed at sealing | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNEXP-FAIL | OD-14 |
| UNEXP-C2 | Blocking | Formal evaluation | Operation / all semantic cases | unexpected C.2 RejectedResult / all semantic cases | Corpus | <=0.10 | population fixed at sealing | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNEXP-C2 | OD-14 |
| UNEXP-C3 | Blocking | Formal evaluation | Operation / all semantic cases | unexpected C.3 RejectedResult / all semantic cases | Corpus | <=0.10 | population fixed at sealing | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNEXP-C3 | OD-14 |
| UNEXP-COMB | Blocking | Formal evaluation | Operation / all semantic cases | result family != sealed expected result family / all semantic cases | Corpus | <=0.15 | includes false SceneResult on IE-expected cases | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-UNEXP-COMB | OD-14 |
| SPACETYPE | Blocking | Formal evaluation | Operation / all supplied-reference operations | exactly preserved supplied SpaceTypeId / all supplied-reference operations | Input-configuration | >=0.98 overall; >=0.95 per room | any non-SceneResult or missing/different produced value = failure; min 20 overall/5 room | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-SPACETYPE | OD-29 |
| FIX-FAIL | Blocking | Formal evaluation | Operational failure fixtures | correct result+stage+locked reason family+retryability / all held-out failure fixtures | Fixture-controlled | >=0.90 overall; each critical subtype =1.00 | 13 held-out fixtures required | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-FIX-FAIL | OD-15 |
| FIX-C2 | Blocking | Formal evaluation | Operational C.2 rejection fixtures | correct result+stage+reason / all held-out C.2 fixtures | Fixture-controlled | >=0.85 overall; each subtype =1.00 | 8 held-out required | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-FIX-C2 | OD-15 |
| FIX-C3 | Blocking | Formal evaluation | Operational general C.3 rejection fixtures | correct result+stage+reason / all held-out general C.3 fixtures | Fixture-controlled | >=0.90 overall; each subtype =1.00 | 8 held-out required | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-FIX-C3 | OD-15 |
| CVF-C3 | Blocking | Formal evaluation | Contract-violation C.3 fixtures | correct result+stage+reason / all held-out contract fixtures | Fixture-controlled | =1.00 overall and per subtype | 18 held-out, 3 per six subtypes | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-CVF-C3 | OD-16 |
| C1-CANDIDATE | Diagnostic | Formal evaluation | C.1 VlmSceneCandidate | parseable candidate required fields / candidate units | Mechanism-output | none | zero candidate => Diagnostic zero-output | Wilson 95%; micro-pooled overall and per-room unless Section 17 states otherwise | ER-C1-CANDIDATE | OD-17 |
| POSTC2-OP | Blocking | Formal evaluation | post-C.2/pre-C.3 operation | operations with parseable post-C.2 artifact / all sealed SceneResult-expected semantic operations | Corpus | =1.00 | any missing or unparseable artifact => FAIL | Wilson diagnostic interval | ER-POSTC2-OP | OD-17 |
| POSTC2-ROOM | Blocking | Formal evaluation | post-C.2/pre-C.3 operation | operations with exactly one schema-valid Room / all sealed SceneResult-expected semantic operations | Corpus | =1.00 | any missing artifact or invalid Room cardinality => FAIL | Wilson diagnostic interval | ER-POSTC2-ROOM | OD-17 |
| POSTC2-ELEM | Blocking | Formal evaluation | post-C.2/pre-C.3 values | conformant required units / all required units exposed or required by the sealed SceneResult-expected operation population | Composite | =1.00 | missing artifact or missing required unit contributes a failed unit; empty population caused by mechanism => FAIL | Wilson diagnostic interval | ER-POSTC2-ELEM | OD-17 |
| POSTVAL-OP | Blocking | Formal evaluation | final output / every operation that attempts or is expected to return SceneResult | valid parseable SceneResult envelope / all sealed SceneResult-expected operations | Corpus | =1.00 | Failure, Rejected, IE, malformed or non-parseable SceneResult envelope => FAIL | Wilson diagnostic interval | ER-POSTVAL-OP | OD-17 |
| POSTVAL-ROOM | Blocking | Formal evaluation | final output / every sealed SceneResult-expected operation | operations containing exactly one valid Room / all sealed SceneResult-expected operations | Corpus | =1.00 | any non-SceneResult, malformed envelope or invalid Room cardinality => FAIL | Wilson diagnostic interval | ER-POSTVAL-ROOM | OD-17 |
| POSTVAL-ELEM | Blocking | Formal evaluation | final output / all required units from sealed SceneResult-expected operations | conformant required units / required units exposed or required by every eligible operation | Composite | =1.00 | missing/non-SceneResult operation contributes failed required operation-level units; zero caused by mechanism => FAIL | Wilson diagnostic interval | ER-POSTVAL-ELEM | OD-17 |
| GROUND-NODE | Blocking | Formal evaluation | final output / required nodes from all sealed SceneResult-expected operations | required nodes with valid in-bounds node evidence / required produced or expected nodes under the conformance inventory | Composite | =1.00 | missing SceneResult, missing required node population or any invalid/missing evidence => FAIL | Wilson diagnostic interval | ER-GROUND-NODE | OD-17 |
| CAL-SE-DET | Diagnostic | Formal evaluation | post-C.2/pre-C.3 confidence-bearing values | per-state count, empirical correctness against [Pass-2 StructuralElement detection correctness: matched produced=1; unmatched produced=0], monotonicity, ordinal gap and unknown-state rate; reported by source and transformation dimensions | Mechanism-output | none | zero total eligible values => Diagnostic zero-output; absent high/uncertain state => state statistic Not Applicable, metric remains Diagnostic Result | scene bootstrap, 95%, 2000 resamples where both states exist | ER-CAL-SE-DET | OD-11 |
| CAL-OBJ-DET | Diagnostic | Formal evaluation | post-C.2/pre-C.3 confidence-bearing values | per-state count, empirical correctness against [Pass-2 Object detection correctness: matched produced=1; unmatched produced=0], monotonicity, ordinal gap and unknown-state rate; reported by source and transformation dimensions | Mechanism-output | none | zero total eligible values => Diagnostic zero-output; absent high/uncertain state => state statistic Not Applicable, metric remains Diagnostic Result | scene bootstrap, 95%, 2000 resamples where both states exist | ER-CAL-OBJ-DET | OD-11 |
| CAL-SE-CAT | Diagnostic | Formal evaluation | post-C.2/pre-C.3 confidence-bearing values | per-state count, empirical correctness against [matched StructuralElement locked-subtype correctness], monotonicity, ordinal gap and unknown-state rate; reported by source and transformation dimensions | Mechanism-output | none | zero total eligible values => Diagnostic zero-output; absent high/uncertain state => state statistic Not Applicable, metric remains Diagnostic Result | scene bootstrap, 95%, 2000 resamples where both states exist | ER-CAL-SE-CAT | OD-11 |
| CAL-OBJ-CAT | Diagnostic | Formal evaluation | post-C.2/pre-C.3 confidence-bearing values | per-state count, empirical correctness against [matched Object locked-subtype correctness], monotonicity, ordinal gap and unknown-state rate; reported by source and transformation dimensions | Mechanism-output | none | zero total eligible values => Diagnostic zero-output; absent high/uncertain state => state statistic Not Applicable, metric remains Diagnostic Result | scene bootstrap, 95%, 2000 resamples where both states exist | ER-CAL-OBJ-CAT | OD-11 |
| CAL-REL-ADJ | Diagnostic | Formal evaluation | post-C.2/pre-C.3 confidence-bearing values | per-state count, empirical correctness against [exact Adjacency TP correctness among produced Adjacency assertions], monotonicity, ordinal gap and unknown-state rate; reported by source and transformation dimensions | Mechanism-output | none | zero total eligible values => Diagnostic zero-output; absent high/uncertain state => state statistic Not Applicable, metric remains Diagnostic Result | scene bootstrap, 95%, 2000 resamples where both states exist | ER-CAL-REL-ADJ | OD-11 |
| CAL-REL-CONT | Diagnostic | Formal evaluation | post-C.2/pre-C.3 confidence-bearing values | per-state count, empirical correctness against [exact Containment TP correctness among produced Containment assertions], monotonicity, ordinal gap and unknown-state rate; reported by source and transformation dimensions | Mechanism-output | none | zero total eligible values => Diagnostic zero-output; absent high/uncertain state => state statistic Not Applicable, metric remains Diagnostic Result | scene bootstrap, 95%, 2000 resamples where both states exist | ER-CAL-REL-CONT | OD-11 |
| CAL-REL-BLOCK | Diagnostic | Formal evaluation | post-C.2/pre-C.3 confidence-bearing values | per-state count, empirical correctness against [exact Blocking TP correctness among produced Blocking assertions], monotonicity, ordinal gap and unknown-state rate; reported by source and transformation dimensions | Mechanism-output | none | zero total eligible values => Diagnostic zero-output; absent high/uncertain state => state statistic Not Applicable, metric remains Diagnostic Result | scene bootstrap, 95%, 2000 resamples where both states exist | ER-CAL-REL-BLOCK | OD-11 |
| BE-PLACE-COUNT | Diagnostic | Formal evaluation | Layer 3 / produced approximate placement values | produced value count | Mechanism-output | none | zero produced => Diagnostic zero-output | count and empirical distribution; no Wilson interval | ER-BE-PLACE-COUNT | OD-30 |
| BE-PLACE-EVID | Diagnostic | Formal evaluation | Layer 3 / produced approximate placement values | values with valid AttributeEvidenceArtifact under Section 4.4 / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-PLACE-EVID | OD-30 |
| BE-PLACE-CONF | Diagnostic | Formal evaluation | Layer 3 / produced approximate placement values | values with valid confidence state / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-PLACE-CONF | OD-30 |
| BE-PLACE-PROV | Diagnostic | Formal evaluation | Layer 3 / produced approximate placement values | values with provenance enum allowed by the locked Best-Effort Evidence, Provenance and Determinability Annotation Contract / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-PLACE-PROV | OD-30 |
| BE-PLACE-FALSEOBS | Diagnostic | Formal evaluation | Layer 3 / produced approximate placement values | values incorrectly labelled visually observed under the locked best-effort determinability/provenance annotation / provenance-annotated produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-PLACE-FALSEOBS | OD-30 |
| BE-EXTENT-COUNT | Diagnostic | Formal evaluation | Layer 3 / produced spatial extent values | produced value count | Mechanism-output | none | zero produced => Diagnostic zero-output | count and empirical distribution; no Wilson interval | ER-BE-EXTENT-COUNT | OD-30 |
| BE-EXTENT-EVID | Diagnostic | Formal evaluation | Layer 3 / produced spatial extent values | values with valid AttributeEvidenceArtifact under Section 4.4 / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-EXTENT-EVID | OD-30 |
| BE-EXTENT-CONF | Diagnostic | Formal evaluation | Layer 3 / produced spatial extent values | values with valid confidence state / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-EXTENT-CONF | OD-30 |
| BE-EXTENT-PROV | Diagnostic | Formal evaluation | Layer 3 / produced spatial extent values | values with provenance enum allowed by the locked Best-Effort Evidence, Provenance and Determinability Annotation Contract / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-EXTENT-PROV | OD-30 |
| BE-EXTENT-FALSEOBS | Diagnostic | Formal evaluation | Layer 3 / produced spatial extent values | values incorrectly labelled visually observed under the locked best-effort determinability/provenance annotation / provenance-annotated produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-EXTENT-FALSEOBS | OD-30 |
| BE-AFFORD-COUNT | Diagnostic | Formal evaluation | Layer 3 / produced affordance values | produced value count | Mechanism-output | none | zero produced => Diagnostic zero-output | count and empirical distribution; no Wilson interval | ER-BE-AFFORD-COUNT | OD-30 |
| BE-AFFORD-EVID | Diagnostic | Formal evaluation | Layer 3 / produced affordance values | values with valid AttributeEvidenceArtifact under Section 4.4 / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-AFFORD-EVID | OD-30 |
| BE-AFFORD-CONF | Diagnostic | Formal evaluation | Layer 3 / produced affordance values | values with valid confidence state / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-AFFORD-CONF | OD-30 |
| BE-AFFORD-PROV | Diagnostic | Formal evaluation | Layer 3 / produced affordance values | values with provenance enum allowed by the locked Best-Effort Evidence, Provenance and Determinability Annotation Contract / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-AFFORD-PROV | OD-30 |
| BE-AFFORD-FALSEOBS | Diagnostic | Formal evaluation | Layer 3 / produced affordance values | values incorrectly labelled visually observed under the locked best-effort determinability/provenance annotation / provenance-annotated produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-AFFORD-FALSEOBS | OD-30 |
| BE-ILLUM-COUNT | Diagnostic | Formal evaluation | Layer 3 / produced illumination relevance values | produced value count | Mechanism-output | none | zero produced => Diagnostic zero-output | count and empirical distribution; no Wilson interval | ER-BE-ILLUM-COUNT | OD-30 |
| BE-ILLUM-EVID | Diagnostic | Formal evaluation | Layer 3 / produced illumination relevance values | values with valid AttributeEvidenceArtifact under Section 4.4 / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-ILLUM-EVID | OD-30 |
| BE-ILLUM-CONF | Diagnostic | Formal evaluation | Layer 3 / produced illumination relevance values | values with valid confidence state / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-ILLUM-CONF | OD-30 |
| BE-ILLUM-PROV | Diagnostic | Formal evaluation | Layer 3 / produced illumination relevance values | values with provenance enum allowed by the locked Best-Effort Evidence, Provenance and Determinability Annotation Contract / produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-ILLUM-PROV | OD-30 |
| BE-ILLUM-FALSEOBS | Diagnostic | Formal evaluation | Layer 3 / produced illumination relevance values | values incorrectly labelled visually observed under the locked best-effort determinability/provenance annotation / provenance-annotated produced values | Mechanism-output | none | zero produced => Diagnostic zero-output | Wilson 95% for binary proportion | ER-BE-ILLUM-FALSEOBS | OD-30 |
| AQ-CATEGORY-AGREE | Diagnostic | Pre-execution sealing prerequisite | Annotation corpus | agreements / jointly evaluable paired labels | Corpus | >=0.75 | apply Section 15 family×room-type support and transition matrix; any applicable cell below support => Repair Required | exact cell score plus 95% Wilson for proportions; descriptive distribution for IoU | ER-AQ-CATEGORY-AGREE | OD-20 |
| AQ-ENTITY-MATCH | Diagnostic | Pre-execution sealing prerequisite | Annotation corpus | 2M/(N1+N2), deterministic annotator entity matching | Corpus | >=0.70 | apply Section 15 family×room-type support and transition matrix; any applicable cell below support => Repair Required | exact cell score plus 95% Wilson for proportions; descriptive distribution for IoU | ER-AQ-ENTITY-MATCH | OD-20 |
| AQ-MEAN-IOU | Diagnostic | Pre-execution sealing prerequisite | Annotation corpus | mean IoU over M matched annotator entity pairs | Corpus | >=0.60 | apply Section 15 family×room-type support and transition matrix; any applicable cell below support => Repair Required | exact cell score plus 95% Wilson for proportions; descriptive distribution for IoU | ER-AQ-MEAN-IOU | OD-20 |
| AQ-RELATION-AGREE | Diagnostic | Pre-execution sealing prerequisite | Annotation corpus | M/(N1+N2-M), relation identity Jaccard | Corpus | >=0.70 | apply Section 15 family×room-type support and transition matrix; any applicable cell below support => Repair Required | exact cell score plus 95% Wilson for proportions; descriptive distribution for IoU | ER-AQ-RELATION-AGREE | OD-20 |
| AQ-INCONCLUSIVE | Diagnostic | Pre-execution sealing prerequisite | Annotation corpus | inconclusive units / all annotation units | Corpus | <=0.20 | apply Section 15 family×room-type support and transition matrix; any applicable cell below support => Repair Required | exact cell score plus 95% Wilson for proportions; descriptive distribution for IoU | ER-AQ-INCONCLUSIVE | OD-20 |
| LATENCY | Mandatory Non-blocking | Formal evaluation | authorized held-out semantic-corpus operations; fixture suites reported separately | end-to-end first-attempt and total-with-retries median,p90,p95,p99,range; cold/warm and retry strata | Input-configuration | none | always reported; no successful SceneResult does not remove operation latency | empirical distribution and bootstrap 95% interval by operation | ER-LATENCY | OD-25 |
| COST | Mandatory Non-blocking | Formal evaluation | authorized held-out semantic-corpus operations; fixture suites reported separately | provider-billed and platform-attributable cost per attempted operation, per outcome, per successful SceneResult and projected 1000 operations; retries included separately and in total | Input-configuration | none | always reported; zero successful SceneResult => cost/successful SceneResult reported undefined plus total cost | empirical distribution; currency and billing basis locked before run | ER-COST | OD-25 |

Total concrete Metric IDs: **81**. Wildcards and grouped IDs are prohibited. Every row has one exact `ER-<Metric ID>` report identity.

---

## 20. Latency and cost accounting

Latency/cost use authorized held-out semantic-corpus operations. Operational and contract fixtures are reported in separate diagnostic strata and never pooled into primary product latency/cost.

Latency records first attempt, total including authorized retries, cold/warm status, cache status and result family.

Cost records provider-billed and platform-attributable components in the currency and price schedule locked before execution. It reports per attempted operation, per outcome, per successful SceneResult and projected 1,000 operations. Zero successful SceneResult does not erase total cost; cost/success is reported undefined.

---

## 21. Formal execution and recovery

One formal held-out execution is permitted for one locked mechanism, prompt, adapter, provider/model, scoring version and supporting-contract set.

Statuses:

1. Technical interruption — no result; attempt unconsumed only under unchanged configuration, hidden labels, no human inspection and a preaccepted rerun rule.
2. Compromised/invalidated — no result; attempt consumed; subset invalidated; fresh subset and Owner authorization required.
3. Completed INCONCLUSIVE — unforeseen post-sealing validity defect prevents trustworthy result; attempt consumed.
4. Completed PASS/FAIL — normal result; attempt consumed.

Pure deterministic rescoring of preserved unchanged raw outputs may reuse the subset. New inference after a completed run requires a fresh held-out subset.

---

## 22. Completion, Evaluation Result and Owner Acceptance

Completion requires:

- all prerequisites Acceptable;
- every supporting contract and version locked;
- one authorized run completed PASS/FAIL or INCONCLUSIVE;
- every Metric Registry row produced its required record;
- actual score-stability appendix and traceability checks completed.

Technical interruption or compromised attempt is not Completion.

Evaluation Result:

- PASS: every Blocking metric PASS;
- FAIL: at least one Blocking metric FAIL;
- INCONCLUSIVE: no Blocking metric FAIL and at least one is INCONCLUSIVE solely because of unforeseen post-sealing invalidation.

Owner Acceptance is separate and never automatic from technical PASS.

---

## 23. Required Evaluation Report

The report contains one exact row per Section 19 Metric ID, all locked configuration/corpus/fixture/contract versions, sealing evidence, actual score-stability appendix, assignments, error taxonomies, confidence source×transformation populations, annotation-quality cells, execution status, Completion and overall Evaluation Result.

It must state:

**“This report does not constitute Project Owner Acceptance.”**

---

## 24. Revision 10 → Revision 11 closed correction coverage

| Audit finding | Revision 11 resolution |
|---:|---|
| 1 | Restored `ENT-SE-F1` and `ENT-OBJ-F1` (Sections 6.3, 19). |
| 2 | Added Denominator Class Contract and corrected post-C.2/post-validation classes (Sections 3.4, 19). |
| 3 | Added deterministic entity taxonomy (6.2). |
| 4 | Removed duplicate coverage metrics; support is tied directly to category metrics (6.3, 19). |
| 5 | Defined provider-neutral NormalizedProviderReference conversion (4.2). |
| 6 | Added Attribute Evidence Contract (4.4). |
| 7 | Added exhaustive relation classification order (7.4). |
| 8 | Removed incompatible `UNK-NODETYPE-*` (8.1). |
| 9 | Added field-specific determinability pairing (8.2). |
| 10 | Defined confidence source/transformation and exact targets/zero-state rules (9). |
| 11 | Added explicit Semantic Case Annotation Contract (10). |
| 12 | Added supporting-contract governance sequence (5.2). |
| 13 | Defined class-specific PARTIAL formula and zero paths (14.1). |
| 14 | Defined UnseenClaimRecord and separate conformance metric (14.2, 19). |
| 15 | Enumerated C.2/C.3 operational fixture subtypes (12.2–12.3). |
| 16 | Added concrete field-by-field conformance inventory (13). |
| 17 | Anchored post-validation denominators to all sealed SceneResult-expected operations (13.3, 19). |
| 18 | Added AQ family×room applicability/aggregation matrix (15). |
| 19 | Added complete pre-acceptance stability appendix (18). |
| 20 | Corrected fixture examples: subtype error makes whole metric FAIL (18). |
| 21 | COUNT uses count/distribution; proportions use Wilson (17, 19). |
| 22 | Defined latency/cost populations and retry/currency treatment (20). |
| 23 | Added aggregation and uncertainty contract (17). |
| 24 | Replaced unsupported correction declarations with exact section/row mappings (this section). |

---

## 24a. Revision 11 → Revision 12 closed correction coverage

Three findings from the Chief Architect review of Revision 11, resolved in full; no other Revision 11 content reopened.

| Finding | Severity | Revision 11 defect | Revision 12 resolution |
|---|---|---|---|
| A | Critical | The `Owner Decision` column in the Section 19 Metric Registry (81 rows) was systematically misattributed: nearly every `OD-XX` reference pointed to a Decision (§25) whose actual text addressed an unrelated topic (e.g. `ENT-SE-CAT` → `OD-09`, a relation-taxonomy decision; `CVF-C3` → `OD-25`, a latency/cost decision). No Decision text existed at all for `SPACETYPE` or the `BE-*` best-effort rows. | Recomputed all 81 `Owner Decision` references against the actual text of each numbered Decision in §25 (see full mapping applied to Section 19). Added two new Decisions — 29 (`SPACETYPE` zero-tolerance) and 30 (best-effort Diagnostic scope) — and renumbered the former Decisions 29–30 to 31–32. Verified: every one of the 81 rows now cites a Decision whose subject matter matches the row's content. |
| B | Moderate | The `PARTIAL` row (§19) cited "Section 15 binary conditions" for its success formula; the actual conditions are defined in Section 14.1, not Section 15 (Annotation quality). | Corrected the cross-reference to "Section 14.1". |
| C | Minor | The locked contract named in §5.1 item 4 ("Best-Effort Evidence, Provenance and Determinability Annotation Contract") was cited under a different name ("Attribute Evidence and Provenance Contract") in the four `BE-*-PROV` rows. | Unified all four `BE-*-PROV` rows to cite the contract by its §5.1 name. |

---

## 24b. Revision 12 → Revision 13 closed correction coverage

One finding from the independent final Chief Architect review of Revision 12, resolved in full; no other Revision 12 content reopened.

| Finding | Severity | Revision 12 defect | Revision 13 resolution |
|---|---|---|---|
| D | Moderate | 34 Metric Registry rows (§19) contained the self-referential, logically empty cross-reference "unless Section 19 states otherwise" — appearing inside Section 19 itself, while the normative aggregation and uncertainty rule it invokes is actually defined in Section 17. | Replaced all 34 occurrences of "unless Section 19 states otherwise" with "unless Section 17 states otherwise". No other text changed. |

---

## 25. Proposed Project Owner Decisions

1. Accept Revision 13, request Revision 14, or reject.
2. Confirm exactly three governance classes and denominator-class contract.
3. Accept geometry and reference-conversion contract.
4. Accept node, relation and Attribute Evidence contracts.
5. Require and sequence the eleven supporting contracts/artifacts.
6. Accept entity Pass-2 assignment and deterministic diagnostic taxonomy.
7. Restore Entity F1 diagnostics and remove redundant coverage metrics.
8. Accept category correctness support rule.
9. Accept canonical relation identity, assignment and exhaustive taxonomy.
10. Accept restricted Blocking unknown scope and determinability pairing.
11. Accept ordinal confidence source/transformation model and seven targets.
12. Accept semantic scenario, sufficiency, completeness and lineage contract.
13. Accept corpus counts and mutually exclusive primary buckets.
14. Accept IE and unexpected-outcome populations.
15. Accept exact Operational Fixture Subtype Registry.
16. Accept Contract Violation Fixture counts and subtype floors.
17. Accept concrete Conformance Field Inventory.
18. Accept class-specific PARTIAL success rules.
19. Accept UnseenClaimRecord and `PARTIAL-CLAIM-CONFORM`.
20. Accept annotation-quality family×room applicability and transitions.
21. Accept coverage inventory and relation support floors.
22. Accept aggregation and uncertainty contract.
23. Accept complete pre-acceptance score-stability appendix.
24. Accept the 81-row Metric/Integrity/Traceability Matrix.
25. Accept latency/cost accounting.
26. Accept execution/recovery policy.
27. Accept Completion/Evaluation/Owner Acceptance separation.
28. Accept Evaluation Report contract.
29. Accept SpaceTypeId preservation as an explicit zero-tolerance Blocking gate (`SPACETYPE`).
30. Accept the four best-effort capabilities' Diagnostic-only metrics (produced-value count, evidence presence, confidence-state validity, provenance validity, false visually-observed provenance) as the complete first-iteration measurement set for approximate placement, spatial extent, affordance and illumination relevance.
31. Confirm explicit non-authorizations.
32. Separately authorize or do not authorize preparation of the Test Data Handling Decision and supporting-contract governance package.

---

## 26. Explicit non-authorization statement

Revision 13 does not authorize repository modification, staging/commit/push, ADR creation/numbering, ADR_INDEX/README/Project Context/Roadmap changes, corpus or fixture creation, supporting-contract preparation without separate authorization, real user photos, provider/model evaluation or selection, Test Data Handling Decision acceptance, Implementation Package, implementation, validator changes, Candidate B/C work, or automatic preparation of the next artifact.

---

## 27. Architect review request

The Chief Architect is requested to verify the complete standalone Revision 13 against the accepted baseline in one full consolidated pass and determine whether it can be recommended for Project Owner acceptance.
