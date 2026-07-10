# ADR-014 — Perception Boundary

## 1. Title
ADR-014: Perception Boundary — Acceptable Mechanisms for Producing StructuredScene v0

## 2. Status
**Accepted**

**Author:** VistaRoom AI Architecture Governance
**Accepted by:** Project Owner
**Date:** 2026-07-10
**Related:** ADR-011 (Accepted), ADR-012 (Accepted), ADR-013 (Accepted), ADR-010, C8 Architecture Assessment
**Next after this:** Final Gate 2 Scope Decision

## 3. Context

ADR-011 established C8 as a representation capability, distinct from perception. ADR-012 defined the Evaluation Contract that any StructuredScene must satisfy. ADR-013 defined the minimal schema (StructuredScene v0) that the representation must conform to. All three ADRs deferred the question of *how* StructuredScene v0 is actually produced from a photo to this ADR.

This ADR answers: *what perception boundary is allowed for producing StructuredScene v0 in Gate 2 readiness, and under what constraints may a temporary/bounded perception mechanism be used?*

ADR-014 does not select a concrete model, provider, API, or implementation. It defines the architectural interface, the classes of acceptable mechanisms, the hard constraints any mechanism must satisfy, and the conditions under which a temporary mechanism is acceptable for Gate 2.

## 4. Decision

### 4.1 Perception Boundary Definition

The **Perception Boundary** is the architectural interface at which photo input (optionally supported by user-provided context) is transformed into a StructuredScene v0 instance conforming to ADR-013. Everything on the input side of this boundary (image capture, user-provided hints) and everything on the output side (the StructuredScene v0 instance and its downstream consumers) is out of scope of this ADR. This ADR governs only the boundary itself: what must be true of any mechanism that crosses it.

The boundary is defined as a **contract**, not a pipeline: it specifies obligations on output, not steps of computation.

### 4.2 Input and Output Boundary

**Input side:**
- A photo of a room (required).
- Optional user-provided context or details (e.g., stated room purpose, known dimensions, or other hints the user chooses to supply).
- SpaceTypeId, where already available from Room Analyzer classification (ADR-010), as a reference input — not re-derived by this boundary.

**Output side:**
- A single StructuredScene v0 instance conforming to ADR-013: node categories (Room, StructuralElement, Object, FreeSpaceRegion), relation categories (Adjacency, Containment, parameterized Blocking), attribute categories (Identity, Type/Category label, Spatial extent, Approximate spatial placement, Affordance, Illumination relevance), the confidence model, the versioning model, and the grounding support structure.

No output is acceptable that does not conform to the ADR-013 contract. The perception mechanism does not get to introduce new node, relation, or attribute categories to work around a limitation — such a need is a signal to revisit ADR-013, not to bypass it silently.

### 4.3 Temporary Path Decision

**A temporary, bounded perception mechanism is permitted for Gate 2.**

This is consistent with ADR-011 (which allowed a temporary mechanism if "explicitly marked as temporary and bounded") and ADR-012 §4.8 (Temporary Perception Handling, mechanism-agnostic evaluation).

The decision is conditioned on all of the following:
- The mechanism is explicitly labeled as temporary in any implementation artifact that uses it (not silently treated as final).
- The mechanism satisfies all hard constraints in 4.5.
- The mechanism's output is evaluable under ADR-012 without modification to the Evaluation Contract.
- The mechanism is replaceable per the criteria in 4.9, without requiring changes to ADR-013 schema, downstream consumers, or the ADR-012 Evaluation Contract.

No permanent perception mechanism is selected or endorsed by this ADR. The choice of a permanent mechanism, if and when made, is a future decision outside this ADR's scope.

### 4.4 Acceptable Mechanism Classes

The following mechanism *classes* are architecturally acceptable, at the class level only — no specific model, provider, or API within a class is selected or excluded by name:

- **LLM/VLM-based visual reasoning** — a language model with visual input capability reasons directly over the photo to produce StructuredScene v0 content.
- **Hybrid VLM + heuristic validation** — VLM-based extraction combined with rule-based or heuristic checks that validate or constrain the output.
- **CV-based** — traditional or learned computer-vision techniques (e.g., detection, segmentation) mapped into StructuredScene v0 categories.
- **Heuristic or other temporary bounded mechanism** — any simpler mechanism (including manual/mocked output for early testing) that satisfies 4.5, explicitly labeled temporary.

For Gate 2 readiness, the recognized acceptable mechanism classes are the four listed above. A mechanism class not listed here is not automatically accepted by this ADR; it may be considered only through a future Engineering Decision or architectural review, and only if it satisfies Sections 4.3 and 4.5. This preserves future flexibility without allowing the Perception Boundary to expand silently.

### 4.5 Hard Constraints on Any Perception Mechanism

Regardless of mechanism class, any perception mechanism crossing this boundary must:

1. Produce output conforming to ADR-013 (StructuredScene v0) — no untraced fields, no bypassed categories.
2. Produce output that is evaluable under the ADR-012 Evaluation Contract (Canonical Query Suite, Grounding Requirement, normative evaluation dimensions).
3. Propagate confidence into the ADR-013 confidence model (known with confidence / known with uncertainty / unknown-not-inferable) for every node, relation, and attribute it produces.
4. Preserve partial StructuredScene as valid — a mechanism must not force-fill unknown or non-inferable values to appear complete.
5. Not hallucinate unknown or non-inferable values — where information cannot be visually or contextually grounded, it must be represented as unknown/not-inferable, not fabricated.
6. Support grounding to specific nodes, relations, and attributes (ADR-013 §4.7) where applicable, so that explanations (Q10) and query answers can cite the underlying representation.

These constraints apply identically to temporary and eventual/permanent mechanisms; the Evaluation Contract and schema conformance obligations do not relax for a temporary path.

### 4.6 Confidence, Partial Data, and Provenance Handling

Any mechanism must distinguish, for each piece of output it produces, among four provenance categories:

- **Visually observed facts** — directly evidenced in the photo.
- **User-provided hints** — supplied by the user as context, not derived from the photo.
- **Inferred assumptions** — reasoned from visual and/or contextual evidence but not directly observed (e.g., "likely a dining room based on furniture arrangement").
- **Unknown / not inferable** — no sufficient basis to produce a value.

This four-way distinction maps onto the ADR-013 confidence model: visually observed facts and user-provided hints typically map to "known with confidence" (subject to the mechanism's own certainty); inferred assumptions map to "known with uncertainty" with confidence reported; and values with no basis map to "unknown / not inferable," which must be preserved as a valid, non-error state.

Provenance is a property of how a value was obtained; confidence is a property of how sure the mechanism is about that value. Both must be preserved — collapsing provenance into confidence (or vice versa) discards information that the evaluation contract and future consumers may need.

### 4.7 Boundary Validation and Failure Modes

**Boundary validation** — performed before a StructuredScene v0 instance is accepted as output of the perception boundary — checks:
- Structural/schema conformance to ADR-013 (correct node/relation/attribute categories, no untraced or invented fields).
- Presence of the required confidence and provenance information for produced elements.

Boundary validation checks structural/schema conformance and required confidence/provenance presence; it does not replace ADR-012 evaluation. Whether the *content* of a StructuredScene instance is accurate, useful, or passes evaluation thresholds is a question for ADR-012's Evaluation Contract, not for boundary validation.

**Failure modes** (architecture-level, not implementation-level):
- If a mechanism cannot produce a schema-conformant output at all, the boundary must fail explicitly rather than emit a non-conformant or silently degraded StructuredScene.
- If a mechanism can produce a partial but conformant output (some elements unknown/not-inferable), this is a valid, non-failure outcome per the partial-StructuredScene-first-class principle.
- Fallback behavior (e.g., retry, degrade to a simpler mechanism class, surface an error to a downstream consumer) is an implementation concern deferred to Implementation Package; this ADR only requires that failure be distinguishable from a valid partial output.

### 4.8 Interaction with Room Analyzer

Per ADR-010, Room Analyzer has two responsibilities: classification (RoomContext → SpaceType/SpaceTypeId) and scene analysis (photo → StructuredScene, using SpaceTypeId). The Perception Boundary defined in this ADR governs the **scene analysis** responsibility only.

This ADR does not redefine, re-derive, or duplicate SpaceType classification. SpaceTypeId, where available, is treated as a reference input into the Perception Boundary (per 4.2), consistent with the ADR-013 Room node / SpaceTypeId invariant (StructuredScene.spaceType remains a reference, not an independent classifier).

### 4.9 Replacement / Formalization Criteria

A temporary perception mechanism must be replaceable or formalized when any of the following hold:

- The mechanism's output, evaluated under ADR-012, does not meet the (separately calibrated, non-ADR-014) evaluation targets over a meaningful sample.
- A permanent mechanism decision is made in a future engineering decision or gate.
- The temporary mechanism's limitations begin to pressure ADR-013's schema (a signal that schema revisits, not mechanism-side workarounds, are needed).

Replacement must not require changes to: ADR-013 node/relation/attribute categories, the ADR-012 Evaluation Contract, or downstream consumer expectations established under ADR-011 §7 (Prompt Intelligence, Generation Intelligence, Reasoning Layer, Project Memory). If a candidate replacement mechanism would require such changes, that is itself a signal that the replacement decision needs its own architectural review, not a routine swap.

### 4.10 Deferred Decisions

The following are explicitly deferred beyond this ADR:
- Selection of a concrete model, provider, API, or vendor.
- CV/VLM pipeline implementation, prompt design for VLM extraction, model training/fine-tuning/data strategy.
- Provider API integration; storage, database, serialization, or API design; TypeScript interfaces.
- Production monitoring, benchmark construction, annotation tooling.
- Numeric performance targets, latency targets, cost targets, accuracy thresholds, benchmark size, or evaluation pass/fail thresholds (these belong to ADR-012 calibration / future Engineering Decision, not to this ADR).
- Final Gate 2 Scope Decision and Implementation Package.

## 5. Out of Scope

- Selecting a concrete model, API, vendor, or provider (including, without limitation, any specific named LLM, VLM, or CV model/vendor).
- Implementing image recognition; writing CV or VLM pipeline code.
- Object detection / segmentation implementation.
- Prompt design for VLM extraction.
- Model training, fine-tuning, or data strategy.
- Provider API integration.
- Storage, database, serialization, or API design; TypeScript interfaces.
- Benchmark construction; annotation tooling; production monitoring.
- UI changes; generation pipeline changes; Prompt Engine integration; Project Memory implementation.
- Changing ADR-013 node/relation/attribute categories; expanding the StructuredScene schema.
- Changing ADR-012 Query Suite or evaluation dimensions.
- Precise metric geometry; SKU/product matching.
- Multi-view / video / 3D reconstruction strategy.
- Numeric performance targets, latency targets, cost targets, accuracy thresholds, benchmark size, or evaluation pass/fail thresholds.
- Final Gate 2 Scope Decision.
- Implementation Package.
- Project Context or Roadmap updates.

## 6. Consequences

**Positive**
- Unblocks a working, evaluable path to producing real (non-null) StructuredScene v0 for Gate 2, using any of several acceptable mechanism classes.
- Keeps perception technology choice decoupled from architecture, preserving flexibility to change or upgrade the mechanism without reopening ADR-011/012/013.
- Enforces that even a temporary mechanism must meet the same schema, evaluation, confidence, and grounding obligations as any future permanent mechanism — preventing quietly permanent technical debt.
- Provenance/confidence separation gives downstream consumers and evaluators the information needed to interpret StructuredScene output honestly.
- Closing the mechanism-class list against silent expansion (4.4) ensures that any future mechanism class requires explicit governance review rather than being adopted by default.

**Trade-offs**
- Leaves the concrete mechanism, its cost, and its performance characteristics undefined — Implementation Package and/or a future engineering decision must still resolve these before real deployment.
- Boundary validation checks structure and presence of confidence/provenance, not correctness or quality; a schema-conformant but low-quality mechanism is not automatically caught by this ADR alone — that is ADR-012's role.
- A closed mechanism-class list means a genuinely novel mechanism class cannot be adopted without an additional governance step, even if it would otherwise satisfy 4.3 and 4.5.

**Risks if this ADR is weakened**
- If temporary mechanisms are not required to meet the full hard-constraint set (4.5), Gate 2 risks accepting a StructuredScene producer that cannot actually be evaluated under ADR-012, reproducing the "governance win without product value" failure mode already flagged in prior ADRs.
- If replacement criteria (4.9) are dropped, a temporary mechanism risks becoming permanent by default, contrary to the explicit Owner instruction that temporary paths be bounded and replaceable.
- If the mechanism-class list (4.4) were left open-ended, the Perception Boundary could expand silently through implementation choices rather than through explicit architectural review.

## 7. Compliance & Constraints

- Does not select a concrete model, provider, API, vendor, or implementation.
- Does not define CV/VLM pipeline implementation or prompt design for VLM extraction.
- Does not define storage, database, API, serialization, or TypeScript interfaces.
- Does not add production monitoring, benchmark construction, annotation tooling, UI changes, generation pipeline changes, Prompt Engine integration, or Project Memory implementation.
- Does not change ADR-013 node/relation/attribute categories or expand the StructuredScene schema.
- Does not change ADR-012 Query Suite or evaluation dimensions.
- Does not define numeric performance, latency, cost, accuracy, benchmark-size, or pass/fail thresholds.
- Does not modify ADR-004, ADR-007, ADR-010, ADR-011, ADR-012, ADR-013, or the C8 Architecture Assessment.
- Does not reopen Architecture Freeze (ADR-000–006).
- Does not create an Implementation Package.
- Does not update Project Context or Roadmap.
- Preserves the ADR-010 boundary: SpaceType classification is not redefined or duplicated by this ADR.
- Mechanism classes acceptable under this ADR are limited to those enumerated in 4.4; adoption of any other class requires a future Engineering Decision or architectural review.

## 8. Related Documents

- ADR-011 — C8 Boundary / Representation (Accepted)
- ADR-012 — C8 Evaluation Contract (Accepted)
- ADR-013 — StructuredScene / Scene Graph Schema v0 (Accepted)
- ADR-010, ADR-004
- C8 Architecture Assessment (Accepted as readiness artifact)

## 9. Open Questions

- Which of the four acceptable mechanism classes (4.4) will actually be used for Gate 2's temporary path — deferred to Implementation Package or a future engineering decision.
- Exact operational thresholds that trigger replacement under 4.9 (e.g., what "does not meet evaluation targets over a meaningful sample" means numerically) — deferred to future calibration under ADR-012's provisional metrics framework.
- Whether a single mechanism class will be used end-to-end for Gate 2, or whether a hybrid combination across classes will be adopted — deferred.
- Whether failure-mode fallback behavior (4.7) should itself become a future Engineering Decision before Implementation Package begins.
- Whether Consumer Contract formalization (flagged as open in ADR-011) has any bearing on how provenance/confidence should be surfaced to downstream consumers — remains open, not addressed by this ADR.
