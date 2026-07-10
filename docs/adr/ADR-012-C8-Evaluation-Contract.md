# ADR-012 — C8 Evaluation Contract

## 1. Title
ADR-012: C8 Evaluation Contract — Defining and Measuring Spatial Understanding

## 2. Status
**Accepted**

**Author:** VistaRoom AI Architecture Governance
**Input source:** External strategic review + Owner Direction
**Accepted by:** Project Owner
**Date:** 2026-07-10
**Related:** ADR-011 (Accepted), ADR-010, ADR-007, C8 Architecture Assessment
**Next after this:** ADR-013 — StructuredScene / Scene Graph Schema v0

## 3. Context

ADR-011 established the boundary of C8 (Semantic Spatial Intelligence Core) as a representation capability and required that it be value-oriented and queryable. It defined seven minimum expressiveness classes but explicitly deferred concrete evaluation criteria, query suite, metrics, and exit conditions to a separate decision.

Without an Evaluation Contract:
- There is no defined criterion for when C8's representation constitutes genuine spatial understanding rather than a structured caption of an image.
- ADR-013 (Scene Graph Schema) has no evidence-based basis for what expressiveness it must support.
- Gate 2 risks closing as a governance formality without a demonstrable product-relevant capability.

This ADR defines the normative evaluation contract for C8's representation boundary, and separately identifies provisional calibration targets that are not binding at ADR level.

## 4. Decision

### 4.1 Evaluation Principle

A StructuredScene that cannot reliably answer a defined set of elementary spatial questions and produce graph-grounded explanations does not constitute spatial understanding. It remains a structured caption of an image.

Evaluation of C8 is mechanism-agnostic: it evaluates the representation and its queryability, not the process that produced it.

### 4.2 Canonical Query Suite

The following queries form the normative minimum expressiveness that any StructuredScene produced by C8 must be able to support, in continuity with the seven classes defined in ADR-011.

| ID | Query Class | Query (bounded wording) | Expected Answer Type |
|----|---|---|---|
| Q1 | Room identity | Room type + approximate spatial extent when inferable + confidence | spaceType + approx extent (if inferable) + confidence |
| Q2 | Inventory | What are the key structural elements and design-relevant objects present? | List of objects with type/category |
| Q3 | Spatial relations | Which objects are adjacent to / blocking / containing a given element? | List + relation type |
| Q4 | Traffic feasibility | Is there a clear path between two reference points (e.g. main door and main window) that can be identified in the StructuredScene? | Yes/No + blockers if any |
| Q5 | Free space | Largest free zone / approximate free area, if inferable | Estimate (if inferable) + confidence |
| Q6 | Natural light | What objects, if any, significantly block natural light from the main window(s)? | List of blockers + relation |
| Q7 | Lighting affordances | Which objects provide illumination? | List |
| Q8 | Object affordances | Which objects provide seating / storage / illumination / surface support? | Grouped list by affordance |
| Q9 | Constraint awareness | Obvious clearance or traffic conflicts, if inferable | Yes/No + details, if inferable |
| Q10 | Explanation | Why is the placement of object X (a known object from StructuredScene) suboptimal or notable? | Short graph-grounded natural language explanation |
| Q11 | Consistency / Versioning | What structural differences exist between two StructuredScene versions of the same room? | Diff summary (added/removed/changed relations & objects) — does not require full Project Memory implementation |

**Clarification (Q9 traceability):** Q9 is treated as a natural refinement of ADR-011 Query Capability classes 3 and 4, not as a new independent expressiveness class.

**Wording note:** Answers are scoped by "if inferable" / "approximate" where geometric precision is not guaranteed by the representation boundary. This ADR does not commit to exact object-level geometry.

### 4.3 Grounding Requirement

All answers to the Canonical Query Suite must be grounded in the StructuredScene — derived from its actual structure and content, not generated as free-form inference disconnected from the representation. Where confidence is not full, it must be reported rather than omitted.

### 4.4 Normative Evaluation Dimensions

The following are binding at ADR level:

- **Canonical Query Suite** (4.2) — the representation must be able to support answers to Q1–Q11.
- **Grounding Requirement** (4.3) — answers must be traceable to the StructuredScene.
- **Query Accuracy** — as an evaluation dimension (percentage of correct/acceptable answers against a reference), without a fixed numeric threshold.
- **Graph / Relation Consistency** — as an evaluation dimension covering the accuracy and completeness of spatial relations, free space estimate, and basic constraints.
- **Explanation Faithfulness** — as an evaluation dimension for Q10-class answers: whether the explanation is grounded in the graph rather than fabricated.
- **Version / Before-After Consistency** — as an evaluation dimension for Q11-class answers.
- **Requirement on ADR-013:** the Scene Graph Schema defined in ADR-013 must be expressive enough to support these dimensions and the Canonical Query Suite.
- **Mechanism-agnostic evaluation principle:** evaluation applies to the representation's queryability, independent of which perception mechanism (temporary or eventual) produced it.

PerceptionFidelity (accuracy of raw entity/attribute extraction relative to the source photo) may be tracked as a **diagnostic/supporting metric only**. It is not part of the primary Gate 2 acceptance criteria, consistent with C8 being a representation capability rather than a perception provider (ADR-011; Perception Boundary remains ADR-014).

A **Human Understanding Review** dimension — qualitative assessment of whether the representation and its explanations are understandable and plausible to a human reviewer — is included as a normative dimension in principle, with its exact form (scale, pilot size, participant criteria) left as provisional (4.5). The dimension itself is normative: C8 must be evaluable by humans for understandability. The scale, protocol, and pilot size remain provisional (see 4.5).

### 4.5 Provisional Metrics / Calibration Targets

The following are **not binding ADR-level requirements**. They are provisional starting points for calibration, subject to revision by future Engineering Decision, Implementation Package, or final Gate 2 scope approval.

**Illustrative composite metric (provisional, not adopted as binding):**

A composite score may be useful during calibration but is not required by this contract. Individual dimensions may be evaluated independently. Example (fully provisional):

```
SUS = w1 × GraphFidelity
    + w2 × QueryAccuracy
    + w3 × ExplanationFaithfulness
    + w4 × HumanUnderstandingScore
```

(PerceptionFidelity may be tracked separately as diagnostic input, not as a weighted component of the primary acceptance score.)

Weights (w1–w4) and any numeric threshold on the composite are provisional and not fixed by this ADR.

**Illustrative provisional targets** (recommended starting points only, subject to revision):
- QueryAccuracy on Q1–Q9: provisional target in the range of "high majority correct" — exact percentage deferred.
- Explanation Faithfulness (Q10): provisional target — exact percentage deferred.
- HumanUnderstandingScore: provisional target on a Likert-type scale — exact mean deferred.
- Correction rate per room: provisional target — exact ceiling deferred.
- Annotated benchmark scale: a recommended starting point is on the order of dozens of annotated rooms — exact count deferred.
- Human pilot scale: a recommended starting point includes a small number of real users, ideally including some design-experienced reviewers — exact count and composition deferred.

None of the above figures are ADR-level commitments. They exist to inform, not constrain, the future Engineering Decision or Implementation Package that will operationalize this contract.

### 4.6 Evaluation Protocol

Evaluation of C8's representation boundary is expected to draw on the following categories of activity. Exact operational parameters (sample sizes, tooling, participant counts) are not fixed here and are deferred to future Engineering Decision / Implementation Package.

1. **Annotated benchmark** — a set of rooms with reference (gold) StructuredScene and reference answers to the Canonical Query Suite, used for automated comparison.
2. **Automated evaluation** — running the Query Suite against the benchmark and computing the normative evaluation dimensions (4.4).
3. **Human review layer** — qualitative review of representation and explanation quality by human evaluators, feeding the Human Understanding Review dimension.
4. **Correction feedback collection** — a mechanism for capturing corrections or disagreements between the representation and human judgment, to inform iteration.

### 4.7 Provisional Gate 2 Closure Criteria (Non-binding)

The following is a **provisional, non-binding sketch** of what a future Gate 2 closure decision might reference, pending calibration through 4.5 and 4.6. It is not an exit-criteria commitment made by this ADR.

| Candidate criterion | Status |
|---|---|
| Canonical Query Suite (Q1–Q11) supportable by representation | Normative (4.2) |
| Grounding Requirement met | Normative (4.3) |
| Query Accuracy above a calibrated threshold | Provisional |
| Explanation Faithfulness above a calibrated threshold | Provisional |
| Human Understanding Review conducted and above a calibrated threshold | Provisional |
| Version/before-after comparison functionally demonstrated | Provisional |
| Room Analyzer produces valid StructuredScene across benchmark cases | Provisional |

Final Gate 2 closure criteria remain subject to the Final Gate 2 Scope Decision, not to this ADR alone.

### 4.8 Temporary Perception Handling

Until Perception Boundary ADR (ADR-014) is accepted, C8 may use any temporary mechanism (e.g., LLM-based visual reasoning, hybrid, heuristic) to produce StructuredScene, provided the representation can be evaluated against this Evaluation Contract. The contract itself does not select, endorse, or exclude any specific mechanism.

## 5. Evaluation Non-goals

This ADR explicitly does not:
- Define the concrete StructuredScene / Scene Graph schema (deferred to ADR-013).
- Choose perception technology — CV, LLM-based, or hybrid (deferred to ADR-014).
- Define annotation tooling.
- Require production-grade benchmark infrastructure.
- Require a public user study.
- Require exact object-level geometry.
- Require downstream Prompt Engine integration.
- Create an Implementation Package.
- Update Project Context or Roadmap.

## 6. Consequences

**Positive**
- Establishes a measurable, mechanism-agnostic definition of what "spatial understanding" means for C8, without prematurely fixing numeric thresholds.
- Gives ADR-013 a concrete expressiveness target (the Canonical Query Suite and normative dimensions) to design against.
- Prevents Gate 2 from closing on a thin "non-null output" basis alone.
- Keeps calibration (metrics, weights, sample sizes) separate from architecture, allowing revision without reopening this ADR.

**Trade-offs**
- Leaves exact acceptance thresholds unresolved until a future Engineering Decision or Implementation Package defines them.
- Requires that ADR-013's schema be expressive enough to support the Query Suite, which constrains its design space.

**Risks if this ADR is weakened**
- Gate 2 could close as a governance formality without evidence of real spatial understanding.
- ADR-013 could be under- or over-specified without a defined evaluation target to design against.

## 7. Compliance & Constraints

- Does not define the concrete StructuredScene schema (ADR-013).
- Does not choose perception technology (ADR-014).
- Does not reopen Architecture Freeze (ADR-000–006) or modify ADR-004, ADR-007, ADR-010, or ADR-011.
- Does not modify the C8 Architecture Assessment.
- Does not create ADR-013 or ADR-014.
- Does not create an Implementation Package.
- Does not update Project Context or Roadmap.
- Numeric thresholds, weights, and operational sample sizes in this document are provisional and non-binding; they carry no ADR-level authority until separately calibrated and approved.

## 8. Related Documents

- ADR-011 — C8 Boundary / Representation (Accepted)
- C8 Architecture Assessment (Accepted as readiness artifact)
- Gate2-Candidate-Assessment
- ADR-010, ADR-007

## 9. Open Questions

- Exact composite metric formula and weights (if a composite metric is adopted at all) — deferred to future calibration.
- Exact numeric thresholds for Query Accuracy, Explanation Faithfulness, Human Understanding Review, and correction rate — deferred to future Engineering Decision / Implementation Package.
- Exact benchmark scale and human pilot scale/composition — deferred to future Engineering Decision / Implementation Package.
- Whether a Human Understanding Review is feasible at Gate 2 scale, or should be deferred further — open for Owner input.
- Whether Consumer Contract formalization (flagged as open in ADR-011) should be addressed before or alongside ADR-013 — remains unresolved, not addressed by this ADR.
