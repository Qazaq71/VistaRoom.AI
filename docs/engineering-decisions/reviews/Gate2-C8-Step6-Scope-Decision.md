# Gate 2 C8 Implementation Package v1.0 — Step 6 Scope Decision

**Status:** Accepted  
**Accepted by:** Project Owner  
**Acceptance date:** 2026-07-11  
**Selected option:** A — Proceed as one narrow implementation step

## 1. Purpose

This Scope Decision defines the precise and minimal scope of Step 6 within the accepted Gate 2 C8 Implementation Package v1.0.

Step 6 implements one focused internal Evaluation Harness capable of evaluating the queryability of the current `StructuredSceneV0` representation against the staged ADR-012 Canonical Query Suite Q1–Q11.

The harness evaluates deterministic behavior on synthetic `StructuredSceneV0` fixtures. It does not evaluate whether a scene accurately represents a real photograph, does not measure real-world perception accuracy, and does not establish semantic truth against image evidence.

Step 6 implements isolated internal evaluators for synthetic `StructuredSceneV0` fixtures. These evaluators are not production query services and are not integrated into runtime routes, Room Analyzer orchestration, UI, or downstream consumers.

The purpose of Step 6 is to produce executable Closure Evidence demonstrating:

- honest staged Q1–Q11 reporting;
- grounded evaluator behavior;
- explicit confidence and incompleteness handling;
- no silent ADR-012 rollback;
- no expansion of the accepted Gate 2 scope.

## 2. Is Step 6 still needed?

**Yes.** Step 6 is required as one narrow implementation step.

The Final Gate 2 Scope Decision and the accepted Implementation Package require a minimal internal Evaluation Harness capable of executing supported queries and recording an honest status for all ADR-012 Q1–Q11 queries.

Without an executable harness, Gate 2 would have no objective Closure Evidence for the staged Q1–Q11 policy, grounded query behavior, supported/deferred/unsupported reporting, or confirmation that ADR-012 was not narrowed during implementation.

Step 6 therefore cannot be replaced by documentation alone.

## 3. In Scope

Step 6 is limited to one focused, independent Evaluation Harness module.

The accepted future implementation scope includes:

- public entry point accepting runtime `unknown`;
- mandatory Step 5 Boundary Validator invocation as the first action;
- structured separation of boundary rejection from successful evaluation;
- complete Q1–Q11 registry in stable canonical order;
- explicit capability status for every query;
- explicit execution outcome for every supported query;
- evaluators only for the approved staged supported subset;
- query-specific input and answer contracts;
- typed grounding references and runtime grounding validation;
- explicit confidence propagation and incompleteness disclosure;
- bounded harness-level vocabulary for Q6–Q9;
- synthetic `StructuredSceneV0` fixtures only;
- staged report fixture suitable for Final Gate 2 Closure Review;
- diagnostic-only `PerceptionFidelity`;
- traceability from query to evaluator, scene fields, relations and grounding;
- human-readable Closure Review summary;
- contract tests and regression verification.

Implementation was subsequently authorized, completed and technically accepted under later governance actions. The execution trace, including recorded authorization process deviations, is maintained in `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md` §20.

## 4. Out of Scope

Step 6 does not include or authorize:

- invocation of Step 2 `hybrid-validation`;
- candidate-to-scene normalization;
- real room photos or image-based semantic truth evaluation;
- real VLM/LLM calls or provider/model integration;
- Room Analyzer orchestration;
- production query services, production routes, UI or downstream integration;
- changes to Step 1, Step 2 or Step 5;
- changes to `StructuredSceneV0`;
- new node, relation or attribute categories;
- new closed enums in the Step 1 schema;
- precise metric geometry, distance calculations, path planning or ergonomics;
- layout optimization, design scoring or placement recommendations;
- full explanation generation;
- scene-diff algorithms or full Project Memory;
- production benchmark platform;
- numeric PerceptionFidelity, thresholds, calibration or synthetic accuracy proxies;
- Project Context or Roadmap changes;
- reopening ADR-011–ADR-014;
- creation of ADR-015;
- creation of a new Implementation Package version unless separately approved by the Owner.

Step 6 does not measure:

- Query Accuracy;
- Graph / Relation Consistency;
- Explanation Faithfulness;
- Version / Before-After Consistency;
- Human Understanding Review.

These ADR-012 dimensions remain unmeasured and deferred to a future Engineering Decision or separately authorized evaluation package.

## 5. Boundary with Step 1 — StructuredSceneV0

Step 1 owns the schema/type contract, including `StructuredSceneV0`, schema version, node/relation categories, identity, `Observed<T>`, confidence/provenance states, versioning primitives and all field definitions.

Step 6 is a read-only consumer and must not add, remove, reinterpret, normalize, repair, enrich or mutate any Step 1 data.

Node attributes using `Observed<T>` include:

- `spaceTypeId`;
- `spatialExtent`;
- `typeLabel`;
- `approximatePlacement`;
- `affordances`;
- `illuminationRelevance`.

Plain relation fields include:

- `id`;
- `category`;
- `fromNodeId`;
- `toNodeId`;
- `confidence`;
- `provenance`;
- `blockingType` on Blocking relations.

`blockingType` is a required plain string, not `Observed<T>`.

## 6. Boundary with Step 2 — Hybrid VLM + heuristic validation

Step 2 owns candidate-to-`StructuredSceneV0` normalization. Step 6 does not invoke Step 2.

Step 6 accepts runtime `unknown`, sends it first through Step 5, and evaluates it only after structural acceptance.

Step 6 must not import or reproduce `validateAndNormalizeCandidateScene`, `normalizeObserved`, candidate exclusion rules, defaults or heuristic normalization behavior.

## 7. Boundary with Step 3 deferral

Step 3 remains explicitly deferred. Step 6 does not implement a new confidence/provenance propagation subsystem. It only reads and reports confidence/provenance already present in accepted `StructuredSceneV0` data.

## 8. Boundary with Step 4 resolution

Step 4 is resolved through Step 1 representation, Step 2 normalization and Step 5 validation.

Partial `StructuredSceneV0` is first-class. Unknown data is not a structural error and must not be forced into known values, treated as false, treated as empty, or treated as proof of absence.

## 9. Boundary with Step 5 — Mandatory Boundary Validator

Step 5 is the mandatory first structural guard for every Evaluation Harness invocation.

The public Step 6 entry point accepts `unknown` and must first call:

```ts
validateStructuredSceneBoundary(scene: unknown): BoundaryValidationResult
```

If Step 5 rejects the input:

- return `accepted: false`;
- preserve Step 5 diagnostics;
- return `report: null`;
- run no query evaluator;
- generate no Q1–Q11 execution report;
- fabricate no answer or grounding.

Step 6 must not duplicate Step 5 structural rules, repair, normalize, enrich, mutate, reinterpret or suppress diagnostics.

## 10. Evaluation Harness Contract

### 10.1 Public entry point

```ts
evaluate(input: EvaluationHarnessInput): EvaluationHarnessResult
```

### 10.2 EvaluationHarnessInput

```ts
interface EvaluationHarnessInput {
  readonly scene: unknown;
  readonly queryParameters?: {
    readonly Q3?: {
      readonly nodeId?: string;
    };
  };
}
```

Query-specific parameters are external harness inputs and are not part of `StructuredSceneV0`.

For Q3, `nodeId` must be explicit and must exist. Missing or invalid `nodeId` produces `insufficient_scene_data`; the harness must not choose a node for the caller.

### 10.3 EvaluationHarnessResult

```ts
type EvaluationHarnessResult =
  | {
      readonly accepted: false;
      readonly boundaryDiagnostics: readonly BoundaryViolation[];
      readonly report: null;
    }
  | {
      readonly accepted: true;
      readonly boundaryDiagnostics: readonly [];
      readonly report: EvaluationReport;
    };
```

Rejected input never contains a report. Accepted input contains a complete Q1–Q11 report.

### 10.4 EvaluationReport

The report must:

- contain Q1–Q11 exactly once;
- preserve stable canonical order;
- include capability status for every query;
- include execution outcome only where allowed;
- include `PerceptionFidelity`;
- include staged subset and traceability metadata.

## 11. Capability Status and Execution Outcome

Allowed capability statuses:

- `supported`;
- `deferred`;
- `unsupported`.

Allowed execution outcomes for supported queries:

- `answered`;
- `insufficient_scene_data`.

### Required invariants

**Supported + answered** must contain query-specific structured answer, non-empty validated grounding, explicit confidence information, explicit completeness status and no fabricated facts.

**Supported + insufficient_scene_data** must contain reason and reason code, with no fabricated answer, grounding or negative conclusion from unknown data.

**Deferred / unsupported** must contain reason and reason code, with no evaluator execution, execution outcome, answer or grounding.

No query is currently classified as unsupported.

## 12. Grounding Contract

Every `answered` result must be grounded in actual accepted scene data.

```ts
type GroundingReference =
  | { readonly kind: "node"; readonly nodeId: string }
  | { readonly kind: "node_attribute"; readonly nodeId: string; readonly attribute: string }
  | { readonly kind: "relation"; readonly relationId: string }
  | { readonly kind: "relation_attribute"; readonly relationId: string; readonly attribute: string };
```

Runtime validation must ensure referenced IDs and attribute paths exist, removed/excluded/non-existent elements are never referenced, and `answered` never has empty or invalid grounding.

Grounding alone is not sufficient for confidence reporting when uncertainty would otherwise require re-reading the source scene.

## 13. Confidence and Known/Unknown Handling

### 13.1 Known branches

Both are usable:

- `known_with_confidence`;
- `known_with_uncertainty`.

Both contain `value`. Uncertainty must be explicitly reported.

### 13.2 Unknown branch

`unknown_not_inferable` contains no `value` and must not be treated as false, empty, default, failed literal match or proof of absence.

### 13.3 Literal matching

Literal matching is allowed on known values of:

- `typeLabel.value`;
- entries of `affordances.value`.

Unknown values do not participate in positive or negative matching.

### 13.4 Boolean evaluation

`illuminationRelevance` is `Observed<boolean>`. It is evaluated only on a known branch through:

```ts
illuminationRelevance.value === true
```

Unknown must not be treated as false.

### 13.5 Partial answers

Unknown data does not automatically force `insufficient_scene_data`. A partial grounded answer is allowed when sufficient known evidence remains, but it must disclose incompleteness and must not claim exhaustive coverage. Otherwise return `insufficient_scene_data`.

## 14. Relation-level Confidence and Provenance Gating

Applies to Q3, Q6 and Q9.

- `unknown_not_inferable`: relation cannot support `answered`; if it is the only evidence, return `insufficient_scene_data`.
- `known_with_uncertainty`: relation may support `answered`, but confidence and provenance must be explicit in the structured answer.
- `known_with_confidence`: normal processing, subject to all other boundaries.

Exact `blockingType` never overrides unknown relation confidence.

## 15. QueryResult Confidence and Completeness Invariant

Nodes have no general node-level confidence. Confidence exists on node attributes via `Observed<T>` and on relations as a plain field.

If any node attribute or relation used as evidence has confidence other than `known_with_confidence`, the answer must explicitly represent that state. For uncertain relations, provenance must also be explicit.

```ts
type AnswerCompleteness =
  | "complete_for_known_scene_data"
  | "partial_due_to_unknown_scene_data";
```

A partial answer must never be described as complete.

## 16. Approved Staged Subset Q1–Q11

### Supported

- Q1 — Room identity and approximate spatial extent
- Q2 — Inventory of structural elements and design-relevant objects
- Q3 — Spatial relations between elements
- Q6 — Natural-light blocking
- Q7 — Lighting affordances
- Q8 — Object affordances
- Q9 — Explicit clearance or traffic conflicts

### Deferred

- Q4 — Traffic path feasibility
- Q5 — Largest free-space estimate
- Q10 — Graph-grounded explanation of suboptimal or notable placement
- Q11 — Consistency / version diff

### Unsupported

None.

Deferred queries remain in the registry, traceable, represented in every report, unexecuted and explicitly justified.

## 17. Query-specific Boundaries

### Q1 — Room identity and approximate spatial extent

Uses the Room node, `spaceTypeId` and `spatialExtent`. May return partial answer with confidence disclosure. Must not duplicate classification, convert qualitative size to meters, invent numeric dimensions or claim exact geometry.

### Q2 — Inventory

Returns all accepted `Object` and `StructuralElement` nodes. May report ID, category, actual known `typeLabel`, confidence/provenance and explicit unknown label status. Must not apply semantic importance filtering, infer labels, create synonyms or claim completeness while omitting unknown items.

### Q3 — Spatial relations for a given node

Requires explicit `Q3.nodeId`. Returns only direct Adjacency, Containment and Blocking relations where the node is an endpoint. No automatic node selection, transitive reasoning, placement-derived relation inference or use of unknown-confidence relations.

### Q4 — Traffic feasibility

**Deferred.** No path connectivity, route traversal or geometric feasibility evaluator.

### Q5 — Free-space estimate

**Deferred.** `qualitativeSize` is an open string with no numeric area, ordering or comparison function. Step 6 must not invent an ordering such as `small < medium < large`.

### Q6 — Natural-light blocking

May answer only when:

1. Blocking relation has exact `blockingType === "light"`;
2. relation passes confidence gating;
3. one endpoint is a `StructuralElement`;
4. that element has known `typeLabel.value === "window"`;
5. grounding cites relation, blocking type and window node/attribute.

No synonyms, inferred windows, physical light calculations, significance estimates or negative conclusions from missing evidence.

### Q7 — Lighting affordances

May identify illumination through exact `"illumination"` in known `affordances.value` or known `illuminationRelevance.value === true`. Must report uncertainty and partiality. No synonyms, type-based inference, visual inference or unknown-as-false handling.

### Q8 — Object affordances

Groups exact known affordance tags from `Object.affordances.value`. No ontology expansion, synonym normalization, type-based inference, missing-value inference or unknown-as-empty behavior.

### Q9 — Explicit traffic or clearance conflicts

May answer only for exact `blockingType === "traffic"` or `"clearance"` with usable relation confidence. No distance, path or ergonomic calculations, placement-derived inference, synonyms, fuzzy matching or “no conflicts” conclusion from missing evidence.

### Q10 — Explanation

**Deferred.** No rules for “suboptimal”, “notable”, design-quality judgment or explanation-generation semantics.

### Q11 — Consistency / Versioning

**Deferred.** Versioning primitives exist, but no two-scene contract, diff algorithm or history storage. Use:

```text
reasonCode: "versioning_readiness_demonstrated"
```

## 18. Bounded Literal Vocabulary

Exact harness-level values:

```text
typeLabel: "window"
affordances: "illumination"
blockingType: "light"
blockingType: "traffic"
blockingType: "clearance"
```

This is a Step 6 harness-level bounded subset of existing open-vocabulary strings. It does not create an enum, close Step 1 vocabulary, modify `StructuredSceneV0`, modify validators, authorize schema expansion, synonyms, fuzzy matching or semantic normalization.

`illuminationRelevance.value === true` is a boolean rule, not part of the string vocabulary.

## 19. PerceptionFidelity Contract

```ts
{
  status: "not_measured",
  role: "diagnostic_only",
  reason: "Real-photo perception fidelity is outside Step 6 synthetic representation-queryability evaluation."
}
```

Step 6 must not produce a numeric score, threshold, calibration, synthetic substitute, placeholder, query-success proxy or fixture-coverage proxy for perception accuracy.

## 20. Required Deliverables

- Evaluation Harness implementation and public entry point;
- `EvaluationHarnessInput`;
- `EvaluationHarnessResult`;
- `EvaluationReport`;
- strict `QueryResult`;
- capability status and execution outcome types;
- typed `GroundingReference` and runtime grounding validator;
- complete stable Q1–Q11 registry;
- staged subset configuration;
- query-specific input and answer contracts;
- confidence and completeness disclosure contracts;
- reason/reason-code vocabulary;
- bounded literal vocabulary documentation;
- supported-query evaluators;
- synthetic complete, partial, uncertain, unknown, invalid-grounding and boundary-rejection fixtures;
- staged Q1–Q11 report fixture;
- `PerceptionFidelity` diagnostic contract;
- query → evaluator → field/relation → grounding traceability;
- human-readable Closure Review summary;
- contract tests.

## 21. Required Tests and Verification

### Registry and report

- Q1–Q11 exactly once, stable order;
- statuses match staged subset;
- supported queries have evaluators;
- deferred queries do not execute;
- unsupported list empty;
- deferred queries contain reason and reason code.

### Boundary behavior

- Step 5 called first;
- no evaluator before acceptance;
- rejection returns `accepted: false`, preserves diagnostics and has `report: null`;
- arbitrary `unknown` never throws.

### Result invariants

- answered has query-specific answer, non-empty valid grounding, uncertainty disclosure and completeness disclosure;
- insufficient has reason/reason code and no fabricated answer or grounding;
- deferred has no evaluator outcome, answer or grounding.

### Grounding

- valid node/relation/attribute references accepted;
- invalid IDs/paths rejected;
- removed/excluded elements cannot be grounded;
- answered cannot have empty grounding.

### Confidence behavior

- known-with-confidence usable;
- known-with-uncertainty usable only with disclosure;
- unknown has no readable value and is not treated as false/empty or used in positive/negative matching;
- partial answers do not claim completeness;
- unknown-confidence relations cannot support answered;
- uncertain relations require confidence and provenance disclosure;
- exact `blockingType` does not override confidence.

### Query-specific tests

Q1: known/partial/insufficient cases; no metric conversion.  
Q2: complete inventory, unknown labels, no semantic filtering or inferred types.  
Q3: valid/missing/invalid nodeId, direct-only relations, no transitive inference, confidence gating.  
Q6: exact `light`, exact known `window`, uncertain/unknown relation handling, no negative inference.  
Q7: exact `illumination`, boolean true branch, uncertain/unknown handling, no synonyms.  
Q8: exact affordance grouping, uncertainty/unknown handling, no ontology.  
Q9: exact `traffic`/`clearance`, uncertainty/unknown handling, no negative inference, distance or ergonomics.

### PerceptionFidelity

- exact `not_measured` / `diagnostic_only`;
- no numeric score, threshold, proxy or query-success substitution.

### Regression verification

```bash
npx tsc --noEmit
npx vitest run
git diff -- src/lib/interior/structured-scene/types.ts
git diff -- src/lib/interior/structured-scene/hybrid-validation
git diff -- src/lib/interior/structured-scene/boundary-validator
git diff -- docs/adr/ADR-011-C8-Boundary-Representation.md
git diff -- docs/adr/ADR-012-C8-Evaluation-Contract.md
git diff -- docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md
git diff -- docs/adr/ADR-014-Perception-Boundary.md
git status
```

Required confirmations: Steps 1/2/5 unmodified; ADR-011–014 unmodified; production routes/UI unmodified; no Project Context/Roadmap changes; full diff and exact git status provided.

## 22. Risks if Step 6 is skipped

No executable Closure Evidence, staged report, grounding validation, confidence validation or proof against silent ADR-012 narrowing.

## 23. Risks if Step 6 duplicates Step 5

Two structural sources of truth, divergent behavior, hidden normalization and masked defects.

**Mitigation:** Step 6 calls Step 5 first, consumes diagnostics and defines no structural validation, repair or normalization rules.

## 24. Risks if Step 6 expands into semantic truth validation

Synthetic fixtures could be misrepresented as real-world understanding; Room Analyzer logic could leak in; temporary perception could become permanent; Gate 2 could expand into open-ended CV benchmarking.

**Hard constraint:** Step 6 evaluates only representation queryability and grounded deterministic behavior on synthetic accepted scenes.

## 25. Risks if confidence is mishandled

Unknown relations may be reported as facts, `blockingType` may override uncertainty, unknown attributes may become false, partial answers may appear complete, and ADR-012/ADR-014 may be violated.

**Mitigation:** known-branch gating, relation-confidence gating, explicit confidence/completeness reporting and strict tests.

## 26. Known Documentation Gap — Non-blocking

`Gate 2 C8 Implementation Package Scope Proposal` is referenced as an Accepted predecessor in Implementation Package §1 and §3, but no standalone file exists in repository HEAD.

This is a known traceability gap. It does not alter accepted ADRs, the Final Scope Decision, the Implementation Package or Steps 1/2/5, and does not block Owner acceptance of Step 6. No reconstruction of the missing document is authorized.

## 27. Selected Option

**Selected option: A — Proceed as one narrow implementation step.**

This option was accepted by the Project Owner on 2026-07-11. Step 6 was subsequently implemented, independently reviewed, corrected where required, technically accepted, committed and synchronized with `origin/main`.

The accepted implementation remained one focused internal module with the mandatory Step 5 guard, full Q1–Q11 registry, staged reporting, supported evaluators for Q1/Q2/Q3/Q6/Q7/Q8/Q9, strict QueryResult invariants, typed grounding, confidence/completeness disclosure, bounded vocabulary, diagnostic-only PerceptionFidelity, synthetic fixtures and Closure Review evidence.

## 28. Historical Authorization Boundary

At the time this Scope Decision existed in Proposed form, it did not authorize:

- preparation of a Claude Code execution prompt;
- generation of Step 6 implementation code;
- modification of repository files;
- commit;
- push;
- execution of any Step 6 implementation workflow.

Those actions required separate explicit Owner Decisions.

The later creation of this canonical Accepted repository file is not a new acceptance of the Step 6 scope. It only brings the physical repository documentation into alignment with the Owner Decision already made on 2026-07-11.

The execution and push authorization process deviations recorded in `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md` §20 are not retroactive authorizations. The actions remain procedurally unauthorized at the time they occurred, while their technical results are recorded separately.

No new Implementation Package version is created by this document.

## 29. Final Decision and Current State

- Scope Decision status: **Accepted**
- Accepted by: **Project Owner**
- Acceptance date: **2026-07-11**
- Selected option: **A — Proceed as one narrow implementation step**
- Canonical repository-file creation: **Documentation normalization of the Owner Decision already made on 2026-07-11; not a new acceptance of scope**
- Step 6 implementation: **Completed and technically Accepted**
- Architect implementation review: **Passed**
- Implementation commit:
  `5d10783025f7c407bec6df021409f6b5e261f6ad`
- Governance follow-up commit:
  `586b568cc5571db5af99c6cec130428fb29d840b`
- Repository synchronization before this uncommitted documentation update:
  `main == origin/main`
- Step 1, Step 2 and Step 5: **Unmodified by the Step 6 implementation**
- ADR-011–ADR-014: **Unmodified**
- Production routes, UI and Room Analyzer integration: **Not included**
- Real VLM/LLM calls and real-image evaluation: **Not included**

The Step 6 governance trace contains three recorded process deviations:

1. Step 6 — Execution Authorization Process Deviation
2. Step 6 — first push authorization deviation for implementation commit
3. Step 6 — second push authorization deviation for the governance-only commit

The two push actions remain unauthorized at the time they occurred, even after adoption of the expanded governance record. Neither this document nor the §20 record retroactively authorizes them.

The process-deviation details and disposition are maintained in:

`docs/implementation/Gate2-C8-Implementation-Package-v1.0.md` §20.
