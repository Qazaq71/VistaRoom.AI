# ADR-015 — Multi-Image Perception Boundary

## 1. Title
ADR-015: Multi-Image Perception Boundary — Bounded, Same-Operation 1–6 ImageAsset Capture Set for Producing StructuredScene v0

## 2. Status
**Accepted**

**Author:** VistaRoom AI Architecture Governance
**Accepted by:** Project Owner (Nurlan). Acceptance date: 2026-07-22. Repository persistence authorized directly to main. Push not authorized; Project Owner performs push manually.
**Date prepared:** 2026-07-22
**Related:** ADR-014 (Accepted, predecessor — partially superseded by this ADR, Section 5 multi-view exclusion only; all other ADR-014 decisions, boundaries and exclusions remain Accepted and unchanged), ADR-012 (Accepted), ADR-013 (Accepted, revalidated by this ADR — see Section 4.9 and the accompanying Phase 3 consolidated report), ADR-011, ADR-010.
**Next after this:** Continued Supporting Contracts 1–10 drafting cycle and Implementation Package preparation, both per the separately accepted Work Plan and both gated on their own separate authorizations; not initiated by this ADR.

## 3. Context

ADR-014 (Accepted, 2026-07-10) defined the Perception Boundary for producing a single `StructuredScene v0` instance from a single photo, explicitly deferring "Multi-view / video / 3D reconstruction strategy" (ADR-014 §5, Out of Scope) as a whole.

A separate, later, binding Project Owner Decision (recorded in the Root Impact Analysis and Work Plan governance cycle, and operationalized in the in-place corrections to Full-Platform Vision Architecture Revision 5, commit `f57b3f8cf34757997e6d1e2f23e67629083687f2`, and Candidate A Bounded Scope Decision Revision 5, commit `565a3a03294086f319ccec5ff2e77afb5af8a9e1`) requires the current bounded operation to accept a governed capture set of **1–6 `ImageAsset` objects per RoomCase**, all depicting the same physical room, fused into one consolidated `PerceptionResult` — while explicitly *not* activating persistent, cross-session, or multi-room capability (that remains Track E, "PLANNED — NOT OPENED").

This is a narrower question than the one ADR-014 §5 deferred as a whole. ADR-014's exclusion covered, without distinguishing them, at least three different capabilities:

1. **Temporary, same-operation, non-persistent fusion of 1–6 images of one room** — the subject of this ADR.
2. **Persistent, cross-session accumulation of multi-view evidence for one room** — remains Track E, out of scope here (Section 5).
3. **Video-derived spatial evidence, panorama stitching, and full 3D reconstruction** — remains out of scope here (Section 5), unchanged from ADR-014 §5.

This ADR answers only: *what perception boundary is required when the input side of ADR-014's contract is a governed 1–6 `ImageAsset` capture set of one physical room, within one bounded operation, and the output side remains a single `StructuredScene v0` instance conforming to ADR-013?*

This ADR does not select a concrete model, provider, API, or vendor. It does not reopen Mechanism Class B (already selected, Perception Mechanism Selection and Evaluation Architecture Revision 3, Part AC, Decision 2, Accepted 2026-07-14) or Perception Mechanism Selection and Evaluation Architecture Revision 3 itself, which is being corrected in place, separately, as part of the same Phase 3 package as this ADR (accompanying consolidated report).

## 4. Decision

### 4.1 Multi-Image Perception Boundary Definition

The **Multi-Image Perception Boundary** partially supersedes the ADR-014 Perception Boundary, and only to the following exact extent: **ADR-015 partially supersedes ADR-014 Section 5 only with respect to the multi-view exclusion.** All other decisions, boundaries, and exclusions of ADR-014 remain Accepted and unchanged, in force, and not reopened by this ADR. This applies for the specific case where the input side is a governed capture set of 1–6 `ImageAsset` objects belonging to one `RoomCase`, and the output side remains a single `StructuredScene v0` instance conforming to ADR-013, delivered as one consolidated `PerceptionResult` per the extended outcome contract (Section 4.7; Perception Mechanism Architecture Rev3, Part N, as corrected).

### 4.1.1 Precise Supersession Scope

```text
This ADR permits ONLY:
  bounded, same-operation processing of 1–6 ImageAsset objects
  depicting one physical room, within one RoomCase, within one
  operation, producing one consolidated PerceptionResult.

This ADR does NOT supersede ADR-014 as a whole. Every ADR-014
  decision, boundary, and exclusion not named in this ADR remains
  Accepted and unchanged (Sections 4.2–4.10, Section 5, Section 6,
  Section 7 of ADR-014, in full).

This ADR does NOT activate:
  - persistent multi-view evidence accumulation;
  - cross-session memory;
  - multi-room execution (Operation.RoomCase remains exactly 1);
  - any Track E capability;
  - video-derived spatial evidence;
  - panorama stitching;
  - 3D reconstruction.

This ADR's normative priority over ADR-014 Section 5's historical
  multi-view exclusion applies ONLY within the narrow range defined
  above — bounded, same-operation, non-persistent, 1–6-image, single-
  room processing. Outside that exact range, ADR-014 Section 5's
  exclusion remains fully in force, unmodified.
```

Everything ADR-014 §4.1 already states about the boundary being a **contract, not a pipeline** — specifying obligations on output, not steps of computation — applies unchanged here, extended only to make explicit that the contract's input side may now be a set of 1 to 6 images rather than exactly one.

### 4.2 Input and Output Boundary

**Input side (extends ADR-014 §4.2):**
- A governed capture set of 1–6 `ImageAsset` objects, all depicting the same physical room in a materially consistent state (Bounded Scope Rev5, Section 8A.1) — required, replacing ADR-014's "a photo of a room (required)."
- Optional user-provided context or details, as ADR-014 §4.2, applicable to the RoomCase as a whole.
- `SpaceTypeId`, where already available, as a reference input — not re-derived by this boundary, unchanged from ADR-014 §4.2.

**Output side (unchanged from ADR-014 §4.2):**
- A single `StructuredScene v0` instance conforming to ADR-013. Multi-image input does not produce multiple scene instances, one per image; it produces exactly one, fused, consolidated instance per RoomCase.

No output is acceptable that does not conform to the ADR-013 contract. As under ADR-014, the perception mechanism does not get to introduce new node, relation, or attribute categories to work around a multi-image limitation — such a need is a signal to revisit ADR-013, not to bypass it silently. This ADR's own revalidation of ADR-013 (Section 4.9) found no such need.

### 4.3 Functional Decomposition — C.1, MultiImageFusion, C.2, C.3

Consistent with Perception Mechanism Selection and Evaluation Architecture Revision 3, Part C, as corrected in this same Phase 3 package:

```text
1–6 ImageAsset (RoomCase)
→ C.1 perception interpretation, invoked once per ImageAsset
→ MultiImageFusion / FusionConsistencyStage (new functional stage,
    Perception Mechanism Architecture Rev3 Part C.1.5) — trivial when
    the capture set contains exactly one ImageAsset
→ FusedRoomCandidate
→ C.2 candidate conformance / normalization (existing Step 2, Class B)
→ C.3 final boundary validation (Step 5, existing Boundary Validator,
    unchanged topology, extended invariant set — Section 4.7)
→ one consolidated PerceptionResult
```

C.1's own contract (one image in, one interpretation and its evidence out) is unchanged by this ADR; it is invoked multiple times, not redefined. MultiImageFusion is a new functional stage, not a replacement for any of C.1, C.2, or C.3, and does not require image access itself — it operates over the per-image observations C.1 has already produced.

MultiImageFusion is responsible for:
- **SameRoomAssessment** — confirming all `ImageAsset` objects in the capture set depict one physical room;
- **CrossViewEntityCorrespondence** — linking observations of the same object/element across views into one claim, without duplicating it;
- **Contradiction Analysis** — detecting and preserving (not hiding) contradictions between images;
- **duplicate suppression and near-duplicate down-weighting** — near-duplicates are weighted down in fusion and must never artificially increase confidence;
- **temporal/material consistency checking** — detecting before/after pairs and material rearrangement of the room between frames.

Provider invocation topology (one call per image, one call for the whole set, or a hybrid) is explicitly not fixed by this ADR and remains provider-neutral, consistent with ADR-014 §4.10's deferral of concrete model/provider/API selection. The sole architectural invariant is that every observation, claim, evidence item, diagnostic, contradiction record, and entity correspondence remains traceable to the specific `ImageAsset` identities it derives from, regardless of invocation topology.

### 4.4 Acceptable Mechanism Classes

Unchanged from ADR-014 §4.4 in form. Of the four listed classes, **Hybrid VLM + heuristic validation (Class B)** is the mechanism class actually selected and binding for the current Candidate A cycle (Perception Mechanism Selection and Evaluation Architecture Revision 3, Part AC, Decision 2) — this ADR does not reopen that selection, and does not itself select among the four classes; it narrows the input/output contract for whichever class is in force, as ADR-014 already did.

### 4.5 Hard Constraints on Any Multi-Image Perception Mechanism

In addition to the six hard constraints already stated in ADR-014 §4.5 (which apply per `ImageAsset`, unchanged), any mechanism crossing this boundary must additionally:

7. Perform an explicit `SameRoomAssessment` before fusing evidence from more than one `ImageAsset` into a single claim; a claim must never be constructed by silently assuming same-room identity across images.
8. Preserve, not silently resolve, genuine contradictions between images (Section 4.3) — an unresolved contradiction must remain visible in the output's diagnostics, not be hidden by picking one side.
9. Never allow exact or near-duplicate images to increase the confidence of a claim beyond what a single instance of that evidence would justify.
10. Maintain claim-to-image traceability — every claim in the output `StructuredScene v0`, via its `PerceptionEvidenceArtifact` (Perception Mechanism Architecture Rev3, Part M, as corrected), must be traceable to the specific `ImageAsset` identity or identities that produced it.
11. Treat a technical failure of one `ImageAsset` within an otherwise valid 1–6 capture set as a per-image diagnostic (`ImageAssetProcessingDiagnostic`, Perception Mechanism Architecture Rev3, Part M.6), not automatically as an operation-level `FailureResult`, provided the remaining images are sufficient for a valid outcome.

These constraints apply identically regardless of provider invocation topology (Section 4.3) and regardless of whether Mechanism Class B or, in principle, any other class from Section 4.4 is in force.

### 4.6 Confidence, Partial Data, and Provenance Handling

The four-way provenance distinction of ADR-014 §4.6 (visually observed facts, user-provided hints, inferred assumptions, unknown/not inferable) is unchanged and now applies per `ImageAsset` at the C.1 stage. At the MultiImageFusion stage, an additional distinction is required: a claim's evidence may now derive from a single `ImageAsset` or from multiple `ImageAsset` objects in agreement. This does not create a new confidence category in ADR-013's three-way confidence model — it is carried entirely within `PerceptionEvidenceArtifact`'s per-claim, possibly-multiple source-image-identifier field (Perception Mechanism Architecture Rev3, Part M.2, as corrected), not within `StructuredScene v0` itself.

Provenance and confidence remain distinct, exactly as ADR-014 §4.6 requires; multi-image fusion must not collapse "confirmed by multiple images" into a higher confidence tier without an explicit, documented calibration basis — no such basis is established by this ADR (Section 4.10).

### 4.7 Boundary Validation and Failure Modes

Boundary validation (Section 4.7, ADR-014) is extended, not replaced, with the following additional checks, performed by C.3 (Boundary Validator, Step 5, unchanged topology):

- source-image reference validity — every `imageAssetId` referenced by a claim exists in the capture set;
- capture-set cardinality — exactly 1 `RoomCase`, 1–6 `ImageAsset`;
- same-room invariant — `SameRoomAssessment` completed successfully;
- capture-set temporal/material consistency — no unresolved before/after or material-rearrangement violation reached C.3 undetected;
- contradiction preservation — `ContradictionRecord`s produced by MultiImageFusion were not silently dropped;
- claim-to-image lineage completeness (Section 4.5, item 10).

**Failure modes, extended:**
- A capture set of 0 or more than 6 `ImageAsset` objects is classified as `UnsupportedInput` before C.1 is invoked at all — outside the `PerceptionResult` family entirely (Perception Mechanism Architecture Rev3, Part N, as corrected; Bounded Scope Rev5, Section 8C). It is not a `RejectedResult`, `FailureResult`, or `InsufficientEvidenceResult`.
- Mixed-room sets, before/after pairs, and material state changes detected at `FusionConsistencyStage` produce `RejectedResult`, not a silently fused `SceneResult`.
- Same-room identity that cannot be confirmed, or aggregate evidence that is insufficient after fusion, produces `InsufficientEvidenceResult` at the fusion stage, by the same reasoning ADR-014 §4.7 already applies at the single-image stage.
- A single technically failed `ImageAsset` within an otherwise sufficient 1–6 set does not, by itself, produce `FailureResult` (Section 4.5, item 11).

### 4.8 Interaction with Room Analyzer

Unchanged from ADR-014 §4.8. This ADR does not redefine, re-derive, or duplicate SpaceType classification, and does not alter the ADR-013 Room node / `SpaceTypeId` invariant.

### 4.9 ADR-013 Revalidation Result

As required by this Phase 3 correction, ADR-013 (`StructuredScene v0` schema) was revalidated in full against the 1–6 `ImageAsset` model:

```text
Conclusion: CONTENT CHANGE NOT REQUIRED.

Basis:
- Claim-level traceability to multiple source images is carried
  entirely within PerceptionEvidenceArtifact (Perception Mechanism
  Architecture Rev3, Part M.2, as corrected — source image
  identifier(s), plural, additive), not within StructuredScene v0
  itself (ADR-013 §4.4, Identity attribute — already sufficient,
  unchanged, per Perception Mechanism Architecture Rev3, Part M.4).
- C.3 boundary validation can check claim-to-image lineage through
  PerceptionEvidenceArtifact without inspecting or changing
  StructuredScene v0's own structure (Section 4.7 above).
- The Composite Space Profile (kitchen_living_room, Bounded Scope Rev5
  Section 6.3) is represented through the existing Room node
  SpaceTypeId reference mechanism (ADR-013 §4.2), not through a new
  node/relation/attribute category.
- Reproducibility and diagnosability requirements are met through the
  existing, now-extended PerceptionEvidenceArtifact model (Perception
  Mechanism Architecture Rev3, Part M.2, M.6, as corrected), not
  through schema changes.

Therefore: ADR-013's content is not modified by this ADR or by this
Phase 3 correction. This conclusion supersedes the provisional,
schema-extensibility-only observation made earlier in this
architecture-correction cycle (which conflated "the schema permits
additive extension" with "an extension is needed" — the two are
independent questions, and this revalidation resolves the second one
in the negative).
```

### 4.10 Deferred Decisions

In addition to everything already deferred by ADR-014 §4.10 (concrete model/provider/API/vendor selection; pipeline implementation; provider API integration; storage/database/serialization/API design; production monitoring; benchmark construction; annotation tooling; numeric performance/latency/cost/accuracy/benchmark-size/pass-fail thresholds), this ADR additionally defers:

- The exact provider invocation topology for the 1–6 `ImageAsset` set (Section 4.3).
- The exact evidentiary threshold for `SameRoomAssessment` confidence, for near-duplicate down-weighting magnitude, and for the Composite Space Profile's two-component evidence sufficiency (Bounded Scope Rev5, Section 6.3, Risk R-8) — all reserved for the Evaluation Threshold Plan / Contract 6 / Contract 7 / corpus calibration, not decided here.
- Persistent, cross-session, or multi-room capability of any kind (Track E) — remains fully deferred (Section 5).
- Corpus creation, annotation, provider/model evaluation, and Implementation Package preparation — none authorized by this ADR.

## 5. Out of Scope

Everything already out of scope under ADR-014 §5 remains out of scope here, **except** that "Multi-view ... strategy" is now partially superseded (Section 4.1, Section 4.1.1): the specific case of temporary, same-operation, non-persistent fusion of 1–6 images of one room is in scope (Section 4), while the remainder of the historical multi-view exclusion stays fully in force:

- Selecting a concrete model, API, vendor, or provider.
- Implementing image recognition, CV/VLM pipeline code, object detection/segmentation.
- Prompt design for VLM extraction; model training, fine-tuning, or data strategy.
- Provider API integration; storage, database, serialization, or API design; TypeScript interfaces.
- Benchmark construction; annotation tooling; production monitoring.
- UI changes; generation pipeline changes; Prompt Engine integration; Project Memory implementation.
- Changing ADR-013 node/relation/attribute categories; expanding the StructuredScene schema (Section 4.9 — revalidated, not required).
- Changing ADR-012 Query Suite or evaluation dimensions.
- Precise metric geometry; SKU/product matching.
- **Persistent, cross-session multi-view evidence accumulation for one room** (Track E — "PLANNED — NOT OPENED," Full-Platform Vision Architecture Rev5 §11.1, as corrected).
- **Multiple physical rooms within one operation** (`RoomCase[1..N]` activation — architectural capacity reserved, not activated; Track E).
- Whole-home topology; cross-room design consistency; Project Memory; 2.5D/3D processing; full 3D reconstruction; video-derived spatial evidence; panorama stitching — all remain Track E or otherwise out of scope, unchanged from ADR-014 §5.
- Numeric performance, latency, cost, accuracy, benchmark-size, or pass/fail thresholds.
- Corpus preparation, creation, annotation, or provider/model evaluation of any kind.
- Implementation Package; Project Context or Roadmap updates.

## 6. Consequences

**Positive**
- Closes the specific ADR-014 §5 exclusion that the current binding 1–6-image bounded operation would otherwise leave unaddressed, without reopening or weakening the rest of ADR-014.
- Keeps the multi-image case decoupled from concrete provider/model choice and from Track E's persistent/multi-room capabilities, preserving the same "architecture decoupled from technology" property ADR-014 established for the single-image case.
- Confirms, through explicit revalidation rather than assumption, that ADR-013 does not require content changes — avoiding an unnecessary schema-successor cycle.
- Makes MultiImageFusion, `FusionConsistencyStage`, and the extended hard constraints (Section 4.5) explicit and reviewable, rather than left implicit in downstream documents (Bounded Scope Rev5, Perception Mechanism Architecture Rev3) that would otherwise reference an ADR-level boundary that does not itself say anything about multi-image input.

**Trade-offs**
- Leaves exact provider invocation topology, evidentiary thresholds, and Composite Space Profile calibration undefined — later documents (Evaluation Threshold Plan successor, Contract 6, Contract 7) must still resolve these.
- As with ADR-014, boundary validation checks structure, lineage, and presence of required fields, not semantic correctness or quality of the fusion itself — that remains ADR-012's Evaluation Contract's role, now exercised over a fused, multi-image-derived scene rather than a single-image one.

**Risks if this ADR is weakened**
- If the hard constraints in Section 4.5 (particularly same-room assessment, contradiction preservation, and duplicate-confidence protection) are not enforced, multi-image fusion risks silently producing overconfident or falsely consolidated scenes from images that do not, in fact, depict a materially consistent single room — reproducing at a structural level the exact hallucination/overconfidence risk ADR-014 and Perception Mechanism Architecture Rev3 already flag for the single-image case.
- If claim-to-image traceability (Section 4.5, item 10) is dropped, diagnosability and future Controlled Learning compatibility (Vision Architecture Rev5 §16.2, as corrected) are directly undermined.

## 7. Compliance & Constraints

- Does not select a concrete model, provider, API, vendor, or implementation.
- Does not reopen Mechanism Class B (Perception Mechanism Selection and Evaluation Architecture Rev3, Part AC, Decision 2).
- Does not modify ADR-013 (revalidated, content change not required, Section 4.9).
- Does not modify ADR-012's Query Suite or evaluation dimensions.
- Does not modify ADR-010, ADR-011, or the C8 Architecture Assessment.
- Does not activate Track E, persistent storage, cross-session memory, Project Memory, whole-home topology, multi-room execution, or 2.5D/3D processing.
- Does not define numeric performance, latency, cost, accuracy, benchmark-size, or pass/fail thresholds.
- Does not create an Implementation Package or authorize implementation.
- Does not update Project Context or Roadmap.
- Does not edit ADR-014; ADR-014 remains Accepted, historical, and in force in full, except for the narrow, exact partial supersession of its Section 5 multi-view exclusion defined in Section 4.1.1 above.

## 8. Related Documents

- ADR-014 — Perception Boundary (Accepted, 2026-07-10) — predecessor; partially superseded by this ADR with respect to the Section 5 multi-view exclusion only (Section 4.1.1); all other ADR-014 decisions, boundaries and exclusions remain Accepted and unchanged.
- ADR-012 — C8 Evaluation Contract (Accepted).
- ADR-013 — StructuredScene / Scene Graph Schema v0 (Accepted; revalidated by this ADR, Section 4.9; content unchanged).
- ADR-011, ADR-010.
- Perception Mechanism Selection and Evaluation Architecture Revision 3 (Accepted, 2026-07-14; in-place corrected in this same Phase 3 package — Part C, Part M, Part N).
- Candidate A Bounded Scope Decision Revision 5 (Accepted, 2026-07-18; in-place corrected, commit `565a3a03294086f319ccec5ff2e77afb5af8a9e1`).
- Full-Platform Vision Architecture Revision 5 (Accepted, 2026-07-21; in-place corrected, commit `f57b3f8cf34757997e6d1e2f23e67629083687f2`).

## 9. Open Questions

- Exact provider invocation topology for the 1–6 `ImageAsset` capture set (one call per image, one call for the set, or hybrid) — deferred to a future, separately authorized provider/model evaluation (Section 4.10).
- Exact evidentiary thresholds for `SameRoomAssessment`, near-duplicate down-weighting magnitude, and Composite Space Profile two-component sufficiency — deferred to the Evaluation Threshold Plan successor, Contract 6, and Contract 7 (Section 4.10; Bounded Scope Rev5, Risk R-8).
- Whether the 10 currently Open Evaluation Threshold Plan Revision 15 support-floor rows (inherited finding, now scaled to 34 categories) interact with any of this ADR's hard constraints in a way that requires a future cross-check — not addressed here, flagged for the Evaluation Threshold Plan successor.
- Whether a future Contract 3 (Relation Type × Room Type Applicability) needs to state anything additional about relation applicability across a fused, multi-image scene versus a single-image one — deferred, not addressed by this ADR.
