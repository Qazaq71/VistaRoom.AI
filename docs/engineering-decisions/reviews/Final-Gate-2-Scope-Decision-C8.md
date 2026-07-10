# Final Gate 2 Scope Decision — Semantic Spatial Intelligence Core (C8)

## 1. Title
Final Gate 2 Scope Decision: Approved Implementation Scope for C8 Readiness (ADR-011–014)

## 2. Status
**Accepted**

**Author:** VistaRoom AI Architecture Governance
**Accepted by:** Project Owner
**Date:** 2026-07-10
**Type:** Owner Governance Decision (not an ADR, not an Implementation Package)
**Related:** C8 Architecture Assessment (Accepted, readiness artifact), ADR-011 (Accepted), ADR-012 (Accepted), ADR-013 (Accepted), ADR-014 (Accepted)
**Next after this:** Implementation Package

## 3. Purpose

This document converts the accepted C8 readiness architecture (C8 Architecture Assessment, ADR-011, ADR-012, ADR-013, ADR-014) into an approved Gate 2 implementation scope. It answers: *what is the minimal coherent Gate 2 implementation scope based on ADR-011, ADR-012, ADR-013, and ADR-014?*

This is a scope decision, not a new architectural decision. It does not reopen, extend, or reinterpret any accepted ADR. It selects and bounds what will actually be built in Gate 2, from within the space those ADRs already define.

## 4. Accepted Basis

- **C8 Architecture Assessment** — established C8 as a viable readiness direction for Gate 2 via a minimal coherent slice, explicitly value-oriented rather than governance-only, and staged the ADR sequence that followed.
- **ADR-011 (C8 Boundary / Representation)** — defined C8 as a representation/queryability capability, distinct from perception, Prompt Engine/Prompt Intelligence, and Generation Intelligence. Established the minimum value-oriented slice requirement, version-awareness, and lightweight downstream consumer guidance.
- **ADR-012 (C8 Evaluation Contract)** — defined the Canonical Query Suite (Q1–Q11), the Grounding Requirement, and the normative evaluation dimensions (Query Accuracy, Graph/Relation Consistency, Explanation Faithfulness, Version/Before-After Consistency, Human Understanding Review in principle), while keeping metrics, weights, and thresholds provisional.
- **ADR-013 (StructuredScene / Scene Graph Schema v0)** — defined the minimal schema (node, relation, attribute categories; confidence model; versioning model; grounding support structure) sufficient to support Q1–Q11, with full traceability.
- **ADR-014 (Perception Boundary)** — defined the architecture contract between photo input and ADR-013-compliant output, permitted a temporary/bounded perception mechanism from four closed mechanism classes, and fixed hard constraints (schema conformance, evaluability, confidence propagation, no hallucination, grounding support) that apply regardless of mechanism.

Together, these four ADRs fully specify *what* Gate 2 must represent, *how* it will be evaluated, *what shape* the data takes, and *what boundary* perception must satisfy. What remains is a scope decision: which parts of this specified space are built now, and which are explicitly deferred.

## 5. Decision Summary

Gate 2 implements a working, evaluable, end-to-end path from a room photo to an ADR-013-compliant StructuredScene v0, produced via a temporary/bounded perception mechanism (ADR-014), evaluable against the full ADR-012 Canonical Query Suite (Q1–Q11) — with implementation closure permitted to use a staged subset of queries, provided the conditions in Section 9 are met. No permanent perception mechanism, no schema expansion, and no ADR-012 rollback occur in Gate 2.

## 6. Gate 2 In Scope

- Room Analyzer scene-analysis path (ADR-010 responsibility; ADR-014 boundary) capable of producing a non-null StructuredScene v0 from a room photo.
- Optional user-provided context as supporting input, with provenance distinction (visually observed / user-provided / inferred / unknown).
- ADR-013-compliant StructuredScene v0 representation (node, relation, attribute categories; confidence model; versioning model; grounding support structure).
- A temporary/bounded perception mechanism selected from the ADR-014 recognized mechanism classes (LLM/VLM-based, hybrid VLM+heuristic, CV-based, or heuristic/temporary bounded), explicitly labeled temporary.
- Confidence and provenance handling, per ADR-013 §4.5 and ADR-014 §4.6.
- Partial StructuredScene support (unknown/not-inferable as first-class, non-error state).
- Boundary validation for ADR-013 schema conformance and required confidence/provenance presence (ADR-014 §4.7) — structural checks only, not content-quality evaluation.
- A minimal internal evaluation harness aligned with ADR-012 — sufficient to run or record status against the Canonical Query Suite, not a production benchmark platform.
- Query/evaluation support against ADR-012 Canonical Query Suite Q1–Q11, with staged implementation closure governed by Section 9.
- Versioning foundation sufficient for basic before/after comparison (Q11), not full Project Memory.
- Traceability from query answers/explanations to specific StructuredScene nodes, relations, and attributes (Grounding Requirement).
- Internal/developer-facing validation path. UI/product exposure is out of scope unless separately approved by Owner.

## 7. Gate 2 Out of Scope

- Permanent / production-grade perception mechanism selection.
- Full CV pipeline.
- Concrete model/provider/vendor commitment.
- Model training, fine-tuning, or data strategy.
- Object detection / segmentation implementation beyond whatever Implementation Package explicitly chooses as the temporary mechanism.
- Precise metric geometry.
- SKU/product matching.
- Furniture sizing / "will it fit" reasoning.
- Layout optimization / recommended placement / design scoring.
- Full Project Memory.
- Multi-room / whole-home graph.
- 3D reconstruction / video / multi-view.
- Prompt Engine full lifecycle.
- Generation Intelligence changes.
- Consumer Contract formalization.
- Marketplace, budget assistant, AI Agent behavior.
- Production monitoring.
- Annotation platform.
- Public user study.
- Roadmap / Project Context updates, unless separately approved.
- Anything that reopens ADR-011, ADR-012, ADR-013, or ADR-014.

## 8. Gate 2 Acceptance Criteria

(Architecture-level, non-numeric. No SUS, accuracy, latency, cost, benchmark-size, or pass/fail thresholds are set here — those remain provisional per ADR-012.)

- StructuredScene v0 can be produced end-to-end from a room photo.
- Output conforms to ADR-013.
- The temporary perception path is documented as temporary and replaceable, per ADR-014 §4.9.
- Confidence and provenance are present on produced elements.
- Unknown / not-inferable values are handled without hallucination.
- Boundary validation distinguishes valid partial output from failure.
- The minimal evaluation harness can execute supported queries and record supported / deferred / unsupported status for every ADR-012 Q1–Q11 query.
- Query answers and explanations are grounded in specific StructuredScene nodes, relations, and attributes where supported.
- Versioning primitives support basic before/after comparison readiness (Q11), even if full diffing logic is not exercised in Gate 2.
- No ADR-013 schema changes are required to reach closure.
- No ADR-012 Evaluation Contract changes are required to reach closure.
- No permanent perception mechanism is selected by this decision or by Gate 2 closure.

## 9. Q1–Q11 Scope Decision: Staged Closure with Full Traceability

**Decision proposed for Owner approval:** Gate 2 requires StructuredScene v0 to remain evaluable against all ADR-012 Q1–Q11, while allowing implementation closure to rely on an explicitly listed staged subset demonstrated end-to-end, provided all conditions below are met.

**Conditions:**

- The subset actually demonstrated is explicitly listed at closure time.
- Every omitted query is recorded as traceable and deferred, not removed or silently dropped from scope.
- Schema support for all Q1–Q11 remains intact (ADR-013 is not narrowed to fit only the demonstrated subset).
- The evaluation harness can honestly record unsupported/deferred query status, rather than reporting false coverage.
- The Final Gate 2 Closure Review explicitly confirms no ADR-012 rollback occurred — i.e., that staging is a sequencing choice, not a quiet reduction of what "spatial understanding" means.

**Rationale:** This is agreed as the sound path, and no alternative is proposed. ADR-012 was written specifically to prevent Gate 2 from closing as a governance formality without real spatial understanding (see ADR-012 §6, "Risks if this ADR is weakened"). Requiring immediate full support for all eleven queries risks turning Gate 2 into an open-ended R&D effort — the exact failure mode the C8 Architecture Assessment and ADR-011 warned against ("Gate 2 becomes an open-ended research direction instead of a bounded increment"). Conversely, allowing silent narrowing of the query set would let Gate 2 close while quietly rolling back an Accepted contract. Staged closure with explicit, traceable, honestly-recorded deferral threads this: it bounds Gate 2's implementation effort without weakening ADR-012's definition of what "done" means for C8 as a whole.

## 10. Deferred Items

- Permanent perception mechanism decision.
- Numeric evaluation thresholds and calibration (SUS weights, accuracy targets, correction-rate ceilings, benchmark/pilot scale).
- Production benchmark platform.
- UI/product exposure.
- Full Project Memory.
- Consumer Contract formalization.
- Implementation Package details (storage, API, serialization, TypeScript interfaces, concrete provider/model choice).
- Post-Gate 2 perception formalization (transition from temporary to permanent mechanism).

## 11. Implementation Package Instructions

Once this Scope Decision is Accepted, the Implementation Package must:
- Select one (or a stated combination) of the four ADR-014 mechanism classes as the temporary Gate 2 perception path, explicitly labeled temporary.
- Implement StructuredScene v0 production conforming to ADR-013, with boundary validation per ADR-014 §4.7.
- Implement the minimal internal evaluation harness against ADR-012 Q1–Q11, honestly recording supported/deferred/unsupported status per query per Section 9.
- Explicitly list, at the point of proposing Gate 2 closure, which Q1–Q11 subset is demonstrated end-to-end and which are deferred, for Final Gate 2 Closure Review.
- Any unsupported query must be explicitly justified and reviewed during Gate 2 Closure Review; unsupported must not be used as a silent permanent exclusion from ADR-012.
- Not introduce any change to ADR-011, ADR-012, ADR-013, or ADR-014 content; any need to do so must be escalated as a new architectural gap, not resolved inside the Implementation Package.
- Not touch Project Context or Roadmap except as separately approved by Owner.

## 12. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Staged closure quietly becomes permanent narrowing of Q1–Q11 | Mandatory explicit listing of deferred queries + Final Gate 2 Closure Review confirmation of no ADR-012 rollback (Section 9) |
| Temporary perception mechanism becomes permanent by default | ADR-014 §4.9 replacement criteria remain binding; Implementation Package must label the mechanism as temporary |
| Implementation Package silently expands schema to cover a perception limitation | ADR-013 traceability requirement remains binding; any such need must be escalated, not resolved locally |
| Evaluation harness reports false/optimistic coverage | Harness must record honest per-query status (supported/deferred/unsupported), not aggregate pass/fail only |
| Scope creep into UI, Consumer Contract, or Project Memory during implementation | Out of Scope list (Section 7) is binding; any expansion requires separate Owner approval |

## 13. Related Documents

- C8 Architecture Assessment (Accepted as readiness artifact)
- ADR-011 — C8 Boundary / Representation (Accepted)
- ADR-012 — C8 Evaluation Contract (Accepted)
- ADR-013 — StructuredScene / Scene Graph Schema v0 (Accepted)
- ADR-014 — Perception Boundary (Accepted)
- ADR-010, ADR-004, ADR-007

## 14. Owner Decision

**Status: Accepted**
**Accepted by: Project Owner**
**Date: 2026-07-10**

The Final Gate 2 Scope Decision is accepted as the approved Gate 2 implementation scope, on the acceptance basis summarized in the Owner review (accepted basis points 1–9, covering: governance-decision status; consolidation of the accepted C8 readiness chain; approved Gate 2 In Scope, Out of Scope, and Acceptance Criteria; approved Section 9 staged-closure decision; approved Implementation Package Instructions; and approved Deferred Items, Risks and Mitigations, and Related Documents).

The Implementation Package may now be created following this decision, but must not modify ADR-011, ADR-012, ADR-013, ADR-014, or the C8 Architecture Assessment.
