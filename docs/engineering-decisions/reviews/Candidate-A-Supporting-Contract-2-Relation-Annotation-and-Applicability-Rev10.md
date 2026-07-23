# Candidate A — Supporting Contract 2
# Relation Annotation and Applicability Contract
## Revision 10 — Targeted Phase 5 Compatibility Correction Successor (pointing to Contract 1 Revision 19)

## 1. Document metadata and governance status

```text
Document type:
Supporting Contract content candidate — targeted correction successor

Contract:
Candidate A — Supporting Contract 2 — Relation Annotation and Applicability Contract

Revision:
10 — Targeted Phase 5 compatibility correction successor to Revision 9; Revision 9 was independently reviewed (Phase 5 Contract 2 Final Compatibility Revalidation) with one MAJOR finding (stale current-tense five-room Layer 2 description in §2.2/§2.3) and one MINOR finding (stale Rev18 upstream dependency snapshot in §1/Annex L), and remains an immutable historical draft

Status:
DRAFT FOR PROJECT OWNER REVIEW — FINAL CONSOLIDATED REVIEW NOT YET PERFORMED — CANDIDATE-LOCK NOT ISSUED

Primary Active Module:
Bounded Room Understanding / Spatial Perception

Prepared for:
Project Owner — Nurlan

Prepared by:
OpenAI ChatGPT — Engineering Architect

Preparation date:
2026-07-20

Repository:
Qazaq71/VistaRoom.AI, branch main

Immutable repository code snapshot:
ea2607a348d9be2259d46945e09fd010d6777969

Current prepared upstream dependency:
Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md
Candidate-lock: C1-REV19-CL-001 — draft, not issued (final independent verification PASSED, BLOCKER 0/MAJOR 0/MINOR 0/IMPROVEMENT 0)
SHA-256: d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329

Historical Contract 2 lock:
C2-REV2-CL-001 — ISSUED; preserved as historical

Historical drafts:
Revision 3 — superseded drafting input; never locked
Revision 4 — rejected as review-ready; never locked
Revision 5 — failed consolidated review; never locked; SHA-256 3d42332b10ab5234b949c727d2ab5c88563b682b609d9c246c7da484f4d7cdb8
Revision 6 — failed consolidated review; never locked; SHA-256 f425769ae85d846537587f93ad36ebad0c57bbd52e1f8e6b3d652c1a4fd58ce6
Revision 7 — independently reviewed; one stale upstreamRevision cell required correction; never locked; SHA-256 4656e91c0f49ed1c3676598ded29c5d699b49820bf6d27d556483eb9adddfc65
Revision 8 — independently reviewed; one stale §1 self-identifying `Revision:` field required correction; never locked; SHA-256 74482f1d5a8d47cf7f22cb40bb666f9e9645e0b87466509fc7371f3e68fc1c3e
Revision 9 — independently reviewed (Phase 5 Contract 2 Final Compatibility Revalidation, exact artifact SHA-256 below); FAIL — CONTENT CHANGE REQUIRED (1 MAJOR, 1 MINOR); never locked; SHA-256 66486a36f3a397b5227f1bf5cfc80db3e09d76549d9d40ff4b64ac0c54661532

Candidate-lock ID reserved:
C2-REV10-CL-001

Candidate-lock issuance:
NOT ISSUED

Repository persistence:
NOT AUTHORIZED

Contract 3 drafting:
NOT AUTHORIZED

Implementation / corpus / provider-model evaluation:
NOT AUTHORIZED
```

### 1.1 Revision lineage and correction scope

Revision 2 remains the last issued historical Contract 2 lock. Revisions 3–9 are preserved immutable historical drafts and are not current authorities.

Revision 10 is a targeted successor to Revision 9, correcting exactly the two findings closed by the Phase 5 Contract 2 Final Compatibility Revalidation review (independent verification against the final, verified Contract 1 Revision 19):

```text
Finding 1 (MAJOR) — §2.2/§2.3 stale current-tense scope description:
Revision 9 stated, in the present tense, that the Layer 2 "current
Candidate A five-room Active Evaluation Profile" and "Current Active
Evaluation Profile inherited from Contract 1" consisted of "five
active room identities — living_room, bedroom, kitchen, bathroom,
toilet_room," directly conflicting with the binding Project Owner
decision that exactly 34 residential categories are active_candidate
under Contract 1 Revision 19. Corrected in §2.2/§2.3 below by
reference to Contract 1 Rev19's own current statement of scope,
consistent with this Contract's own §2.4 rule that Contract 1 content
is referenced, never restated with independent authority.

Finding 2 (MINOR) — §1/Annex L stale upstream dependency snapshot:
Revision 9's self-identifying upstream dependency snapshot (§1, Annex
L) was pinned to Contract 1 Revision 18 (SHA-256
8318333b47a4e98e1e4c7a098a243838fde2257f6a560f93445002399a8aae89),
not the current final-verified Contract 1 Revision 19. Verified during
Phase 5 review as a pure version-pin with no room-specific content
dependency (Annex B.1's generic installationApplicability enum mapping
is confirmed unchanged between Rev18 and Rev19). Corrected in §1 above
and Annex L below to reference Contract 1 Revision 19.
```

No other content, relation semantics, stable IDs, endpoint predicates, applicability rules, truth/candidate policies, lifecycle rules, schemas, or change records are modified. Revision 10 preserves everything from Revision 9 not named above without semantic modification.

The corrected upstream dependency:

```text
upstreamContract:
Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md

upstreamRevision:
19

upstreamCandidateLock:
C1-REV19-CL-001 — draft, not issued (final independent verification PASSED)

upstreamSHA256:
d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329
```

Contract 2 Revision 10 preserves all relation semantics, stable IDs, endpoint predicates, applicability rules, truth/candidate policies, lifecycle rules, schemas, change records and cross-contract boundaries from Revision 9 without semantic modification, except for the two targeted corrections named above.

No Candidate Lock was issued for Revision 9. The entire exact Revision 10 artifact requires one full consolidated review before acceptance or Candidate Lock issuance.



## 2. Purpose and full-platform role

### 2.1 Purpose

Contract 2 defines the ground-truth relation semantics for the three
StructuredScene relation categories — Adjacency, Containment, Blocking
— as the general (room-type-independent) semantic foundation of
VistaRoom AI's spatial-relation understanding. It is the second root
contract of the Supporting Contracts 1–10 cycle and a direct upstream
dependency of Contracts 3, 7 and 10.

Contract 2 is designed as a foundation for the full VistaRoom AI
Interior Designer platform — spatial reasoning, explainability,
controlled editing, catalog intelligence, multi-view room identity,
room memory and whole-project memory — not merely for the current
bounded evaluation. The relation identity model, endpoint predicate
architecture and registries defined here are not artificially narrowed
to the current four-scene bounded proof; only the *active evaluation*
of relations is bounded (§2.3).

### 2.2 Two normative layers

```text
Layer 1 — Full-platform relation semantic foundation:
RelationDefinition, EndpointSemanticPredicate,
GeneralEndpointApplicabilityRule and basis/mode registries defined in
this Contract are provider-independent, room-independent and not
limited to the current bounded profile.

Layer 2 — Current bounded Active Relation Evaluation Profile:
the current evaluation harness and the current Candidate A Active
Evaluation Profile (Contract 1 Rev19 §2.3 — the current, exact
statement of active scope; referenced here, not restated, per §2.4)
exercise only a subset of Layer 1 (§2.3).
```

Layer 1 is never reduced to fit Layer 2. Layer 2 constrains only which
part of Layer 1 is currently subject to formal evaluation, corpus work
or evaluator support.

### 2.3 Current bounded activation

```text
Current Active Evaluation Profile inherited from Contract 1:
the 34 active residential room categories defined by Contract 1
Revision 19, Section 2.3 (referenced here by pointer, not restated
with independent authority, per §2.4 — the count, list and per-
category activation status are exclusively Contract 1's to state).

Current activated relation categories:
Adjacency, Containment, Blocking (all three — this is the complete,
closed StructuredScene relation category set; ADR-013 §4.3).

Current evaluator-supported Blocking modes:
traffic, clearance (Annex F; verified directly in
src/lib/interior/structured-scene/evaluation-harness/evaluators/
q9-explicit-conflicts.ts at the repository snapshot above).

Current schema-valid but not evaluator-supported Blocking mode:
light (present only as an illustrative code comment in
structured-scene/types.ts; not exercised by any fixture or evaluator
at the verified snapshot).

Room-specific applicability values (which relation types/endpoints
apply to which of the 34 room categories inherited from Contract 1
Rev19 §2.3):
NOT decided by this Contract — exclusively Contract 3's scope (§4).

FreeSpaceRegion relations:
schema-valid; formal relation evaluation deferred (§13).
```

### 2.4 Contract 1 ownership boundary

Contract 2 does not redefine, fork or duplicate any Contract 1
normative content: Master Vocabulary, Active Evaluation Profile,
`MasterConceptId`, `ActiveProfileConceptId`, `SpaceProfileConceptId`,
room/entity semantic identities, aliases, normalization, Contract 1
lifecycle definitions, or Contract 1 failure semantics. Every reference
to a Contract 1 identity in this document is a reference, never a
restatement with independent authority.

---

## 3. Authoritative sources and imported obligations

### 3.1 Repository-verified facts (independently checked at this snapshot)

```text
Repository:
Qazaq71/VistaRoom.AI, branch main

Verified HEAD:
ea2607a348d9be2259d46945e09fd010d6777969
(confirmed directly via commits/main.atom immediately before drafting)

src/lib/interior/structured-scene/types.ts (193 lines, fetched in full):
- STRUCTURED_SCENE_RELATION_CATEGORIES = ["Adjacency", "Containment",
  "Blocking"] — closed (ADR-013 §4.3).
- StructuredSceneRelationBase: id (RelationId), category, fromNodeId
  (NodeId), toNodeId (NodeId), confidence (ConfidenceState),
  provenance (ProvenanceState). All three relation interfaces extend
  this identically; BlockingRelation additionally carries
  `blockingType: string` (open vocabulary, per source comment).
- ConfidenceState = known_with_confidence | known_with_uncertainty |
  unknown_not_inferable (ADR-013 §4.5) — closed, three states, no
  separate "borderline" state.
- ProvenanceState = visually_observed | user_provided_hint |
  inferred_assumption | unknown_not_inferable (ADR-014 §4.6) — closed.
- STRUCTURED_SCENE_NODE_CATEGORIES = ["Room", "StructuralElement",
  "Object", "FreeSpaceRegion"] — closed (ADR-013 §4.2).
- RoomNode: spaceTypeId (Observed<SpaceTypeId>), spatialExtent.
- StructuralElementNode/ObjectNode: typeLabel (Observed<string>),
  approximatePlacement, illuminationRelevance (StructuralElementNode
  only in the base fields shown; ObjectNode also carries
  illuminationRelevance and affordances).
- FreeSpaceRegionNode: spatialExtent, approximatePlacement; no
  typeLabel.
- Observed<T>: unknown branch carries confidence/provenance =
  unknown_not_inferable and no `value` field. No invented value is
  ever produced for unknown.

src/lib/interior/structured-scene/evaluation-harness/evaluators/
q3-spatial-relations.ts (70 lines, fetched in full):
- Q3 returns only direct relations where the queried node is
  fromNodeId or toNodeId — "no transitive inference, no relation
  inference from placement, no endpoint-direction rewriting" (source
  comment). Confirms current direct-only relation policy at the
  evaluation-harness level.
- Unknown-confidence or unknown-provenance relations are excluded from
  "usable" results (via `relationEvidence`), not silently dropped from
  the scene — they remain in `scene.relations` but never participate
  in an `answered` outcome.

src/lib/interior/structured-scene/evaluation-harness/evaluators/
q9-explicit-conflicts.ts (fetched in full):
- `isSupportedConflictType` accepts exactly `"traffic"` or
  `"clearance"` (case-sensitive, exact match) as evaluator-supported
  Blocking modes. No other blockingType value is evaluator-supported
  at this snapshot.

src/lib/interior/structured-scene/evaluation-harness/evaluators/
shared.ts (fetched in full):
- `relationEvidence`: a relation is usable only if both confidence and
  provenance are not `unknown_not_inferable`.

src/lib/interior/structured-scene/fixtures/valid-complete.fixture.ts:
- Exercises exactly one Blocking relation, `blockingType: "traffic"`.
  No fixture exercises `"clearance"` or `"light"`.

Not found in the repository at this snapshot:
`"physical"` as any blockingType token, in code, comments or fixtures.
This Contract does not introduce it as a normative or reserved mode
(§13.4).
```

### 3.2 Contract 1 upstream dependency

```text
Current drafting dependency:
Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md

Candidate-lock:
C1-REV19-CL-001 — draft, not issued (final independent verification PASSED)

SHA-256:
d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329
```

Revision 19 is the current drafting dependency but is not yet candidate-locked. The last issued historical upstream lock remains `C1-REV18-CL-001`. Any conflict is resolved by:

1. explicit Project Owner Decision;
2. accepted newer authoritative project document;
3. the exact current drafting dependency for prepared successor content;
4. last issued historical lock for historical-read compatibility only;
5. accepted ADR and verified repository fact.

No unissued draft is misrepresented as candidate-locked.

### 3.3 Accepted authoritative documents

The accepted Roadmap, Project Context, Bounded Scope, Threshold Plan, Test Data Handling, Preparation Plan, Module Applicability Profile and ADRs remain sources subject to the atomic root-transition successor set. This draft authorizes no corpus, implementation or provider work.

### 3.4 Verification limitation

Any unavailable historical source wording must be reported rather than fabricated. A later verified conflict is a new fact requiring a successor revision.

### 3.5 Source priority

Where sources conflict:

1. direct Project Owner Decision;
2. newer accepted authoritative revision;
3. current exact Contract 1 drafting dependency for prepared successor content;
4. last issued historical Contract 1 Candidate Lock for historical compatibility;
5. accepted ADR;
6. independently verified repository fact;
7. non-authoritative draft used only as drafting evidence.

The current drafting dependency and the last issued historical lock are different governance roles and must not be conflated.

## 4. Contract ownership and exclusions

Contract 2 owns exactly: canonical relation identity; directionality;
endpoint roles (general, not room-specific); relation truth semantics;
general endpoint applicability; endpoint semantic predicates;
obstruction/Blocking mode semantics; positive-assertion boundaries;
absent/negative-assertion boundaries; direct-versus-derived relation
policy; borderline relation-specific semantics; unsupported-
representation semantics; relation-level versioning and lifecycle;
stable semantic rule identifiers; relation semantic record/value
definitions; the downstream import contract for Contracts 3, 7 and 10.

```text
Contract 1 owns:
Vocabulary; Master/Profile identities; room and entity semantic
identities; aliases; normalization; vocabulary lifecycle.
Contract 2 references these by ID only.

Contract 3 owns:
Relation Type × Active Room Type × endpoint-combination room-specific
applicability matrix. Contract 2 contains no five-room matrix and no
per-room-type applicability value (§9, §10).

Contract 4 owns:
Evidence-kind vocabulary; provenance vocabulary; evidence artifact
schemas. Contract 2 may state relation-specific evidence obligations
(§10–12) but defines no competing evidence/provenance enum; the
`ProvenanceState` enum itself is imported unchanged from ADR-014
(§3.1), not owned by either Contract 2 or Contract 4.

Contract 5 owns:
Confidence vocabulary; confidence normalization; confidence policy.
The `ConfidenceState` enum is imported unchanged from ADR-013 (§3.1).
Contract 2 uses it but does not define confidence generation policy.

Contract 6 owns:
Generic annotation-unit identity; pairing; determinability states;
adjudication; inconclusive handling; sealing; replacement workflow.
Contract 2 owns relation-specific truth and borderline semantics
(§10–14) but not the generic annotation workflow that processes them.

Contract 7 owns:
Semantic-case and scenario specification; completeness rules.

Contract 8 owns:
Unseen-claim vocabulary and treatment.

Contract 9 owns:
Fixture registry; fixture IDs; expected fixture outcomes and reason
codes.

Contract 10 owns:
Conformance field inventory; presence/enum/identity/cardinality
validation; runtime failure behavior; StructuredScene integration
projection. Contract 2 exports semantic rules and semantic violation
kinds (Annex H) but defines no competing runtime/conformance failure
architecture.

Evaluation Threshold Plan / Contract 11 own:
Metrics; thresholds; support floors; assignment/accounting algorithms.
```

---

## 5. Contract 1 inheritance model

Every endpoint role and applicability rule in this Contract resolves,
for a concrete scene, to a Contract 1 `MasterConceptId` or
`ActiveProfileConceptId` reference — never to a locally invented
vocabulary term. Section 9 defines the general predicate layer as
*functions over* Contract 1 identities and wire-level evidence, not as
a second vocabulary. Where a predicate references a Contract 1
semantic family (e.g. "opening") or state axis (e.g.
`installationApplicability`), that family/axis is used exactly as
Contract 1 defines it (§2.4, §3.2); this Contract adds no member to
it and changes no value of it.

---

## 6. Core relation identity model

### 6.1 Canonical identity tuples

```text
Adjacency:
(Adjacency, min(A, B), max(A, B))
— unordered pair; A and B are the two participating node identities;
min/max ordering uses a fixed deterministic total order over NodeId
strings (ordinal Unicode code-point comparison) applied only for
canonical-identity/deduplication purposes.

Containment:
(Containment, container, contained)
— directed pair; container and contained are distinct, non-symmetric
roles.

Blocking:
(Blocking, blocker, blocked)
— directed pair; blocker and blocked are distinct, non-symmetric
roles. Blocking additionally carries `blockingType` (Annex F) as part
of its full semantic identity: two Blocking relations with the same
(blocker, blocked) pair but different `blockingType` are distinct
relations, not duplicates.
```

### 6.2 Wire representation versus canonical identity

The StructuredSceneV0 wire schema (§3.1) represents every relation
with an ordered pair (`fromNodeId`, `toNodeId`) regardless of category
— there is no unordered wire pair type. For Adjacency, the canonical
identity's `min(A,B)`/`max(A,B)` ordering is a semantic-layer
deduplication and identity rule applied on top of the wire pair; it
does not require or imply a wire-schema change, and it does not permit
silently reordering `fromNodeId`/`toNodeId` at the wire level. For
Containment and Blocking, the wire pair's direction (`fromNodeId` →
`toNodeId`) is normatively required to equal the canonical direction
(container→contained; blocker→blocked, respectively) — §6.4.

### 6.3 Duplicate canonical identity behavior

Within one accepted StructuredScene instance, at most one relation
record may exist per canonical identity (§6.1, including `blockingType`
for Blocking). A second relation record sharing the same canonical
identity is `MASTER_ID_DUP`-class: `RELATION_IDENTITY_DUP`
(Annex H). No silent merge, silent overwrite or silent selection of
"the more confident one" is permitted; this is a validation failure
requiring correction at the annotation/production layer, not a
Contract 2 resolution rule.

### 6.4 Directionality — no silent endpoint reversal

```text
Adjacency:  unordered (canonical identity only; wire fromNodeId/
            toNodeId order carries no independent semantic meaning
            and must not be relied upon to mean anything beyond
            "the two participating nodes").
Containment: container → contained. fromNodeId MUST be the container;
            toNodeId MUST be the contained entity. A record with the
            roles reversed is invalid, not "reverse-Containment."
Blocking:   blocker → blocked. fromNodeId MUST be the blocker;
            toNodeId MUST be the blocked entity/opening/room. A record
            with the roles reversed is invalid, not "reverse-Blocking."
```

No process — annotation, evaluation, or downstream Contract — may
silently rewrite `fromNodeId`/`toNodeId` to "fix" an apparent direction
mismatch. A directionality violation is `DIRECTIONALITY_VIOLATION`
(Annex H) and is corrected only at the producing layer.

---

## 7. Independent state axes

The following axes are independent:

```text
relationTruthStatus:
asserted_positive
— permitted only on RelationSemanticRecord.

borderlineResolutionOutcome:
positive_uncertain | unresolved_not_inferable

candidateAssessmentOutcome:
unresolved_not_inferable
— the only permitted RelationCandidateAssessmentRecord outcome.

generalApplicabilityStatus:
applicable | not_applicable | reserved

schemaRepresentabilityStatus:
representable_via_existing_wire | not_representable_current_schema

evaluatorSupportStatus:
evaluator_supported | schema_valid_not_evaluator_supported |
reserved_not_schema_active

relationDefinitionLifecycleStatus:
reserved | experimental | active | deprecated | retired

blockingModeLifecycleStatus:
reserved | experimental | active | deprecated | retired
— conditional and independent from relationDefinitionLifecycleStatus.

recordValidityStatus:
valid | invalid
```

A positive RelationSemanticRecord may use `known_with_confidence` or `known_with_uncertainty`. It may not use `unknown_not_inferable`.

Record policy is deterministic:

```text
positive_uncertain:
exactly one RelationSemanticRecord;
confidence = known_with_uncertainty;
borderlineReasonId required;
no RelationCandidateAssessmentRecord.

unresolved_not_inferable:
exactly one RelationCandidateAssessmentRecord;
confidence = unknown_not_inferable;
no RelationSemanticRecord and no wire relation.
```

No axis is derived from another.

## 8. Endpoint semantic predicate architecture

Predicates are evidence-based role tests over Contract 1 identities and wire-level node facts.

```text
room_root:
RoomNode.

free_space_region:
FreeSpaceRegionNode; relation applicability reserved in Annex C.

opening_or_passage:
StructuralElement whose Contract 1 identity belongs to the opening family.

light_relevant_opening:
opening_or_passage with illuminationRelevance = true.

movable_obstacle:
StructuralElement/Object mapped by Annex B.1 to `movable`, or mapped
to `instance_resolved` with accepted evidence establishing movability.

fixed_obstacle:
StructuralElement/Object mapped by Annex B.1 to `fixed`, or mapped
to `instance_resolved` with accepted evidence establishing fixed installation.

spatial_container:
RoomNode or another node with directly evidenced enclosing capacity.

contained_entity:
node directly evidenced as spatially held within a spatial_container.

clearance_relevant_endpoint:
blocker role accepts movable_obstacle or fixed_obstacle; blocked role accepts opening_or_passage, room_root, movable_obstacle or fixed_obstacle under the registered clearance mode.
```

No predicate derives movability from a negated equality test.

## 9. General endpoint applicability architecture

General applicability is room-independent and is narrowed later by Contract 3.

```text
Adjacency:
endpoints may satisfy room_root, opening_or_passage, movable_obstacle
or fixed_obstacle.

Containment:
container = room_root or spatial_container;
contained = contained_entity.

Blocking:
blocker = movable_obstacle or fixed_obstacle;
blocked = opening_or_passage, room_root, movable_obstacle or fixed_obstacle;
mode-specific constraints further narrow this set.

FreeSpaceRegion:
explicitly reserved for Adjacency, Containment and Blocking in Annex C.
```

## 10. Adjacency semantics

### 10.1 Accepted observable bases (Annex D)

```text
contact — the two entities' visible boundaries touch with no visible
gap.

shared_boundary — the two entities share a visible architectural
boundary (e.g. two walls meeting at a corner; a wall and the floor it
rises from) without necessarily "touching" in the contact sense.

immediate_uninterrupted_gap — a small, visually confirmable gap
separates the two entities with no third entity, structural element or
opening visible between them.
```

### 10.2 Exclusion rules

```text
third_entity_separation — if a third node is visibly interposed
between the two candidate entities, Adjacency does not hold between
the outer two; at most the two adjacent pairs (each to the middle
entity) may independently qualify.

projection_perspective_artifact — an apparent contact/gap caused only
by camera projection/viewing angle, not by real-world proximity, does
not establish Adjacency. When this cannot be ruled out from available
evidence, the correct outcome is a RelationCandidateAssessmentRecord with `unresolved_not_inferable` (§14.2), not a positive Adjacency assertion.

occlusion — if one candidate entity's boundary relevant to the
Adjacency judgment is occluded by a third entity, the candidate is `unresolved_not_inferable` unless an unoccluded portion independently establishes a positive basis; the unresolved case produces no relation record.

crop — if the image frame cuts off the boundary relevant to the
judgment, the candidate is `unresolved_not_inferable`, never inferred from the visible portion plus assumption.
```

### 10.3 Non-transitivity

Adjacency is not transitive. `(A, B)` and `(B, C)` being Adjacency
does not establish or imply `(A, C)`. No process may derive a third
Adjacency record from two others without an independent evidentiary
basis for that third pair.

### 10.4 Canonical serialization

Per §6.1–6.2: canonical identity uses `min(A,B)`/`max(A,B)` by
NodeId ordinal comparison; the wire record's `fromNodeId`/`toNodeId`
order carries no independent meaning for Adjacency and must not be
used to infer a direction.

---

## 11. Containment semantics

### 11.1 Distinctions required (Annex E)

```text
room_membership — a node is located within a Room's boundary
(container = the RoomNode). This is the coarsest, most common
Containment basis.

full_spatial_containment — the contained entity's visible extent lies
entirely within the container's visible boundary (e.g. an item fully
inside a drawer or cabinet interior).

bounded_volume_containment — the contained entity occupies a
recognizable enclosed volume of the container even if the container's
own boundary is only partially visible (e.g. a book plainly on an
open shelf's bounded volume).
```

### 11.2 Explicitly excluded from Containment (separate concepts)

```text
visible_support — one entity visibly rests on / is held up by another
(e.g. a lamp on a table). This is a support relationship, not
Containment; it is not a currently activated relation category (no
wire category exists for it) and this Contract does not introduce one.

part_of — a component is structurally part of a larger assembly (e.g.
a drawer is part_of a cabinet). Not Containment; not currently
activated.

attachment — one entity is physically fixed/mounted to another (e.g. a
mirror attached to a wall). Not Containment; not currently activated.

overlap — two entities' visible extents intersect without one being
inside the other. Not Containment.

partial_containment — the contained entity is only partly within the
container's visible boundary with no confirmable full/bounded-volume
basis. This is `unresolved_not_inferable` for Containment (§14.2), represented only by a RelationCandidateAssessmentRecord.
```

None of the excluded concepts above may be silently represented as
Containment. They have no current wire representation; introducing one
is out of scope for this Contract (§23).

### 11.3 Container/contained predicates, direction, boundary crossing

Container/contained predicates are defined in §9 (Annex C). Direction
is fixed per §6.4: `fromNodeId` = container, `toNodeId` = contained. A
container's own boundary crossing (e.g. a drawer opening) does not
change Containment identity; it is an evidentiary detail, not a
distinct relation state.

### 11.4 Nesting and cycles

Nesting (a container itself contained by another container) is
representable as two independent direct Containment records (e.g.
drawer→item and cabinet→drawer, if the drawer is itself a modeled
node). A Containment cycle (a node transitively containing itself
through a chain of direct records) is invalid: `CONTAINMENT_CYCLE`
(Annex H). Cycle detection is a general-invariant concern (§18), not a
per-record field.

### 11.5 Direct versus derived Containment

Only direct, independently evidenced Containment records are asserted
under the current Active Relation Evaluation Profile (§15). No
transitive Containment (e.g. inferring room→item from room→cabinet and
cabinet→item) is asserted by this Contract without a separate,
explicitly activated derivation rule (§15.2), which does not currently
exist.

### 11.6 Current v0 representation limits

The current wire schema (§3.1) provides exactly one Containment
relation category with no sub-typing of the Containment basis
(§11.1) at the wire level. `SpatialExtent`/`ApproximatePlacement` are
explicitly qualitative ("no premature geometry precision," ADR-013
§4.1); this Contract's Containment semantics do not require or assume
quantitative geometry beyond what these qualitative fields already
carry.

---

## 12. Blocking semantics

### 12.1 Causal obstruction, defined narrowly

Blocking asserts that the blocker entity causally obstructs a
specific, named concern (Annex F) with respect to the blocked
entity/opening/room, based on directly visible evidence. It is a
qualitative bounded truth claim about *this scene as depicted*, not a
quantitative, simulation-based or code-compliance claim (§12.3).

### 12.2 Not equivalent to

```text
adjacency — two entities being Adjacent does not by itself establish
Blocking; Blocking requires an obstruction judgment specific to a
named mode (Annex F), not mere proximity.

overlap — visual overlap alone (e.g. perspective-caused apparent
overlap) does not establish Blocking without a genuine obstruction
basis.

same-room presence — two entities being in the same Room does not
establish Blocking.

darkness — the mere absence of visible light is not, by itself,
sufficient for a `light` Blocking judgment; it requires a visible
obstruction of a light-relevant opening (§8) by a specific blocker.

typical furniture conflict — a generic expectation of what "usually"
blocks something (a stereotype) is never a substitute for
scene-specific visible evidence.

speculative code compliance — a judgment about whether a scene would
pass a building/accessibility code is not a Blocking judgment.
```

### 12.3 Explicitly separated and not silently imported

```text
qualitative bounded truth (this Contract's scope) — versus:
quantitative ergonomics (e.g. exact clearance measured in cm) — Contract 2 does not own or assert this;
building-code compliance — not owned or asserted here;
pathfinding (multi-step route feasibility) — not owned or asserted here;
light simulation (physically based illumination modeling) — not owned or asserted here.
```

Any future activation of the excluded concepts above requires a
separate Owner Decision and a successor revision or a separately owned
Contract; it is not silently absorbed into Blocking by this Contract.

### 12.4 Blocking modes

Full registry: Annex F. `blockingType` (§3.1, open-vocabulary wire
field) is the exact wire token for the mode. Case-sensitive, exact
match, no normalization beyond the token itself (unlike Contract 1's
text-label preprocessing, which does not apply to this closed,
short, code-like token field). An unregistered `blockingType` token is
`invalid` (`recordValidityStatus`, §7) — it is never silently accepted,
silently dropped, or silently mapped to the nearest registered mode.

### 12.5 Multiple simultaneous Blocking concerns for one ordered pair

An ordered pair `(blocker, blocked)` may simultaneously satisfy more
than one Blocking mode (e.g. both `traffic` and `clearance`). This is
represented as two independent relation records — one per
`blockingType` — sharing the same `(fromNodeId, toNodeId)` but
differing in `blockingType`; per §6.1, these are distinct canonical
identities, not duplicates. This Contract does not permit: a random or
arbitrary choice of a single mode to record; an undeclared compound
token (e.g. `"traffic+clearance"`); or a silent collapse of the two
records into one. Each mode's `truth`, `applicability`,
`representability` and `evaluator support` axes (§7) are independent
per record — one mode being borderline/unresolved never changes
another mode's independently-evidenced status for the same pair.

---

## 13. Blocking mode registry, FreeSpaceRegion and borderline/unsupported-representation treatment

### 13.1 Blocking mode summary

See Annex F for the full registry. Summary:

```text
traffic   — evaluator_supported (Q9), fixture-evidenced.
clearance — evaluator_supported (Q9), not yet fixture-evidenced.
light     — schema_valid_not_evaluator_supported; comment-only example
            in current source; reserved for future evaluator activation.
```

`"physical"` is not introduced by this Contract as any status
(active, reserved or experimental): it has zero evidence in the
verified repository snapshot (§3.1), and inventing it would violate
this Contract's own no-fabrication rule (§23).

### 13.2 FreeSpaceRegion

FreeSpaceRegion is schema-valid but formal relation evaluation is deferred.

Annex C contains explicit reserved rows for:

```text
Adjacency
Containment
Blocking as blocker
Blocking as blocked target
```

No corpus, evaluator activation or implementation duty is created.

### 13.3 Truth versus representability versus borderline (§14.2 detail)

A relation that is deterministically true or false in the depicted
scene, but which the current wire schema cannot represent at all
(`schemaRepresentabilityStatus: not_representable_current_schema`, §7)
— e.g. a support/attachment/part-of fact (§11.2) — is never classified
as epistemically borderline or unresolved. It is a schema-boundary
fact, recorded (where a downstream Contract requires it) as an
explicit representation-limit note, not as a relation record of any
kind under this Contract.

### 13.4 Positive and negative assertions

See §14.1.

---

## 14. Borderline and unsupported-representation treatment

### 14.1 Positive and negative assertions

```text
A relation record = a positive assertion that the canonical relation
holds, under the stated confidence/provenance (§3.1).

Absence of a relation record ≠ a negative fact. The current wire
schema has no "asserted-negative" relation representation. This
Contract does not create one. Downstream Contracts that need a
negative/absent-relation claim (e.g. for completeness scoring) must
define that separately (Contract 6/7/9/11 territory) — Contract 2 does
not authorize or imply it.
```

### 14.2 Relation-specific borderline reasons

Annex G provides one deterministic mapping from each Borderline Reason ID to one outcome, one ConfidenceState and one record type:

```text
positive_uncertain:
confidence = known_with_uncertainty;
exactly one positive RelationSemanticRecord exists;
borderlineReasonId is required;
no RelationCandidateAssessmentRecord exists.

unresolved_not_inferable:
confidence = unknown_not_inferable;
exactly one directed RelationCandidateAssessmentRecord exists;
no positive RelationSemanticRecord and no wire relation exist.
```

A producer may not choose between record types for the same reason. Dual-record output is prohibited.

## 15. Direct/derived relation policy

### 15.1 Current Active Evaluation Profile: direct only

The current Active Relation Evaluation Profile authorizes only direct,
independently evidenced relation records for all three categories.
This is independently confirmed by the current evaluation harness
(§3.1, Q3: "no transitive inference, no relation inference from
placement, no endpoint-direction rewriting"). No relation record may
be produced by inference from placement fields, from another relation,
or from a Master-concept default.

### 15.2 Reserved derivation path

A future "derived GT" mode (e.g. transitive Containment, inferred
Adjacency chains) is architecturally reserved but not activated. Its
activation requires all of: an accepted derivation-rule owner (a named
Contract or ADR); a stable derivation-rule registry with its own
stable IDs; explicit evidence/provenance alignment (consistent with
Contract 4/ADR-014); and an explicit Project Owner activation decision.
None of these preconditions exist at this revision; this Contract
creates no derivation rule and authorizes no derived GT.

### 15.3 Ground-truth basis versus produced diagnostic evidence

Pre-sealed GT annotation basis (Contract 6's future sealed annotation
state) and a produced `RelationEvidenceArtifact` used for diagnostic
evaluation (Contract 4/11 territory) are distinct. Absence of a
produced diagnostic evidence artifact for a sealed GT relation does not
by itself change that relation's TP/FN identity; where the Evaluation
Threshold Plan (Rev15 or successor) establishes a separate diagnostic
metric for evidence-artifact presence, that metric is independent of
GT truth and is not defined by this Contract.


## 16. Relation semantic record model

### 16.1 Layering

```text
RelationSemanticRecord:
positive semantic assertion only.

RelationCandidateAssessmentRecord:
non-asserted unresolved relation-candidate assessment only.

Contract 4:
detailed evidence vocabulary/artifacts.

Contract 5:
confidence generation and normalization.

Contract 10:
wire projection and conformance.
```

### 16.2 RelationSemanticRecord fields

| Field | Type | Required | Nullable | Condition | Invariant |
|---|---|---|---|---|---|
| relationRecordId | RelationRecordId | yes | no | always | unique |
| relationDefinitionId | StableId | yes | no | always | exists in Annex A |
| canonicalIdentity | CanonicalRelationIdentity | yes | no | always | unique per scene |
| fromNodeId | NodeId | yes | no | always | direction per §6.4 |
| toNodeId | NodeId | yes | no | always | direction per §6.4 |
| fromEndpointPredicates | EndpointSemanticPredicateId[] | yes | no | always | each exists in Annex B and satisfies Annex C |
| toEndpointPredicates | EndpointSemanticPredicateId[] | yes | no | always | each exists in Annex B and satisfies Annex C |
| blockingModeId | StableId/null | conditional | yes | Blocking only | exists in Annex F |
| basisId | StableId/null | conditional | yes | resolved Adjacency/Containment | exists in Annex D/E |
| relationTruthStatus | enum | yes | no | always | asserted_positive |
| generalApplicabilityStatus | enum | yes | no | always | a valid positive record MUST equal `applicable` |
| schemaRepresentabilityStatus | enum | yes | no | always | must equal `representable_via_existing_wire` for an accepted positive record |
| evaluatorSupportStatus | enum | yes | no | always | one §7 value |
| relationDefinitionLifecycleStatus | enum | yes | no | always | resolves only from Annex A relationDefinitionId |
| blockingModeLifecycleStatus | enum/null | conditional | yes | Blocking only | resolves only from Annex F blockingModeId |
| recordValidityStatus | enum | yes | no | always | `valid` requires applicable endpoints, correct direction and all invariants |
| borderlineReasonId | StableId/null | conditional | yes | confidence = known_with_uncertainty | Annex G outcome = positive_uncertain |
| confidence | ConfidenceState | yes | no | always | known_with_confidence or known_with_uncertainty only |
| provenance | ProvenanceState | yes | no | always | imported ADR-014 value |
| directOrDerived | enum | yes | no | always | direct only in current profile |
| introducedVersion | SemVer | yes | no | always | immutable history |
| deprecatedVersion | SemVer/null | conditional | yes | deprecated only | >= introducedVersion |
| replacementId | StableId/null | conditional | yes | successor exists | exact different ID |

A record with `generalApplicabilityStatus = not_applicable` or `reserved` cannot be an accepted valid positive semantic record. It may exist only as an invalid diagnostic artifact and must not enter sealed GT or wire output.

### 16.3 CanonicalRelationCandidateIdentity

```text
Adjacency candidate:
(relationDefinitionId, min(fromNodeId,toNodeId), max(fromNodeId,toNodeId))

Containment candidate:
(relationDefinitionId, fromNodeId=proposed_container,
toNodeId=proposed_contained)

Blocking candidate:
(relationDefinitionId, fromNodeId=proposed_blocker,
toNodeId=proposed_blocked, blockingModeId)
```

The candidate identity preserves direction for Containment and Blocking. Opposite directed candidates are distinct.

### 16.4 RelationCandidateAssessmentRecord fields

| Field | Type | Required | Nullable | Invariant |
|---|---|---|---|---|
| candidateAssessmentId | StableId | yes | no | unique |
| relationDefinitionId | StableId | yes | no | exists in Annex A |
| canonicalCandidateIdentity | CanonicalRelationCandidateIdentity | yes | no | category-aware identity per §16.3 |
| fromNodeId | NodeId | yes | no | preserves proposed container/blocker direction where applicable |
| toNodeId | NodeId | yes | no | preserves proposed contained/blocked direction where applicable |
| fromEndpointPredicates | EndpointSemanticPredicateId[] | yes | no | non-empty; each exists in Annex B and is compatible with the candidate relation |
| toEndpointPredicates | EndpointSemanticPredicateId[] | yes | no | non-empty; each exists in Annex B and is compatible with the candidate relation |
| blockingModeId | StableId/null | conditional | yes | Blocking only; included in canonicalCandidateIdentity |
| assessmentOutcome | enum | yes | no | exactly `unresolved_not_inferable` |
| borderlineReasonId | StableId | yes | no | Annex G outcome = unresolved_not_inferable |
| confidence | ConfidenceState | yes | no | exactly unknown_not_inferable |
| provenance | ProvenanceState | yes | no | imported ADR-014 value |
| evidenceRefs | EvidenceRef[] | yes | no | opaque downstream-owned refs |

An `unresolved_not_inferable` assessment produces exactly one RelationCandidateAssessmentRecord, no RelationSemanticRecord and no wire relation. `positive_uncertain` never uses this record type.

## 17. Versioning, lifecycle and migration

### 17.1 RelationDefinitionLifecycleStatus

```text
reserved
experimental
active
deprecated
retired
```

The same closed enum is used in body text, Annex A, Annex F and Annex J.

### 17.2 Allowed transitions

Annex J is normative. `experimental → deprecated` and `deprecated → retired` are explicitly represented. No retired identity returns to active; a new stable ID is required.

### 17.3 Backward readability

Deprecated identities remain historically readable. Retired identities require an explicitly governed historical adapter or archive path.

### 17.4 Migration/change record

Every lifecycle, semantic, applicability, predicate or record-schema change is recorded in Annex K.1 through a `RelationDefinitionChange`.

```text
changeClass:
patch | minor | major

preLockStableIdRule:
Because Revision 6 was never candidate-locked, the current Revision 10 may preserve a stable ID after a major pre-lock correction only when Annex K.1 records the old defect, corrected meaning, version effect and mandatory full review.
```


## 18. Semantic invariants

```text
1. Every RelationSemanticRecord's canonicalIdentity is unique within one accepted StructuredScene instance.
2. fromNodeId/toNodeId direction matches canonical direction for Containment and Blocking; no silent reversal.
3. Every fromEndpointPredicates/toEndpointPredicates entry exists in Annex B and satisfies Annex C.
4. Every valid asserted-positive RelationSemanticRecord has generalApplicabilityStatus = applicable.
5. Every accepted positive record is representable via the current wire schema; representation-limit facts are not positive relation records.
6. Adjacency is non-transitive; no undeclared inference creates a third record.
7. Containment forms no cycle across direct records within one scene.
8. A Blocking record's blockingModeId exists in Annex F; an unregistered token is invalid.
9. Two Blocking records sharing endpoints but differing blockingModeId are distinct; full canonical-identity duplicates are prohibited.
10. relationTruthStatus is asserted_positive only; absence of a record is never a negative assertion.
11. directOrDerived is `direct` for every record under the current profile.
12. relationDefinitionLifecycleStatus resolves only from Annex A; blockingModeLifecycleStatus resolves only from Annex F.
13. `positive_uncertain` produces exactly one RelationSemanticRecord and no CandidateAssessment.
14. `unresolved_not_inferable` produces exactly one directed RelationCandidateAssessmentRecord and no positive/wire relation.
15. FreeSpaceRegion relation records remain unactivated while their Annex C rules are reserved.
16. No endpoint predicate forks or restates Contract 1 vocabulary; predicates resolve through Contract 1 identities or wire fields.
```

## 19. Downstream dependency contract

```text
Contract 3 (Relation Type × Active Room Type Applicability Matrix):
imports RelationDefinition canonical identities, directionality and
general endpoint applicability (Annex A, Annex C) as the ceiling it
narrows per room type. Contract 3 must reference Annex A/C stable IDs,
never restate them.

Contract 7 (Semantic-case and scenario specification):
imports relation semantics (§10–14), borderline reasons (Annex G) and
the direct-only policy (§15) as the ground truth its scenarios must be
consistent with.

Contract 10 (Conformance field inventory, StructuredScene projection):
imports SemanticViolationKind (Annex H) as candidate conformance-check
sources, without this Contract defining Contract 10's own
runtime-failure architecture (§4).
```

Contract 2 exposes no other downstream integration surface. Contracts
4, 5, 6, 8, 9 and 11 interact with Contract 2 only through the
ownership boundaries stated in §4 — none of them import a
Contract-2-owned registry as their own normative source.

---

## 20. Contract-content integrity requirements

The exact Revision 10 artifact must satisfy:

```text
no open drafting placeholders
no undefined normative record types
no missing registry targets
no duplicate stable IDs
no Contract 1 vocabulary fork
no room-specific Contract 3 applicability cells
no silent runtime, corpus, provider or implementation authorization
```

These are validation requirements, not a declaration that final review has already passed.

## 21. Candidate-lock readiness — Revision 10

```text
candidateLockId:
C2-REV10-CL-001 — reserved, not issued

current upstream:
Contract 1 Revision 19
C1-REV19-CL-001 — draft, not issued (final independent verification PASSED)
SHA-256: d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329

last issued historical Contract 2 lock:
C2-REV2-CL-001

contentReadiness:
CORRECTED DRAFT — FINAL CONSOLIDATED REVIEW NOT YET PERFORMED

issuance preconditions:
1. Contract 1 Revision 19 review PASS and C1-REV19-CL-001 issued first.
2. one full end-to-end consolidated review of exact Revision 10.
3. closure of the complete Revision 10 findings set.
4. explicit Project Owner locking-authority designation.
5. exact unchanged Revision 10 SHA-256 confirmation.

frozen scope:
entire exact Revision 10 file.
```

## 22. Atomic package decision entries

Atomic acceptance must confirm:

1. Revision 10 as the Contract 2 successor candidate.
2. C2-REV2-CL-001 remains an issued historical lock.
3. current prepared upstream is Contract 1 Revision 19 at SHA-256 `d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329`.
4. relation identity, directionality, endpoint predicates and applicability registries;
5. explicit obstacle-mobility mapping;
6. positive RelationSemanticRecord versus non-asserted CandidateAssessment separation;
7. deterministic borderline mappings;
8. complete FreeSpaceRegion reservation rows;
9. one closed lifecycle enum and transition graph;
10. no Contract 3, corpus, provider evaluation or implementation authorization.

## 23. Non-authorization boundary

Revision 10 does not authorize repository persistence, candidate-lock issuance, individual acceptance, Contract 3 drafting, corpus work, provider/model evaluation, implementation or deployment.

# Annex A — RelationDefinition Registry

Registry version:

```text
rd.candidate-a.1.0.0-candidate
```

| Relation Definition ID | Wire category | Canonical identity template | Directionality | Lifecycle status | Introduced version |
|---|---|---|---|---|---|
| c2.reldef.001 | Adjacency | (Adjacency, min(A,B), max(A,B)) | unordered | active | rd.candidate-a.1.0.0-candidate |
| c2.reldef.002 | Containment | (Containment, container, contained) | container → contained | active | rd.candidate-a.1.0.0-candidate |
| c2.reldef.003 | Blocking | (Blocking, blocker, blocked, blockingType) | blocker → blocked | active | rd.candidate-a.1.0.0-candidate |

---

# Annex B — EndpointSemanticPredicate Registry

| Predicate ID | Predicate name | Grounding rule | Eligible wire node categories |
|---|---|---|---|
| c2.pred.001 | room_root | node.category = "Room" | Room |
| c2.pred.002 | free_space_region | node.category = "FreeSpaceRegion"; generalApplicabilityStatus = reserved (§13.2) | FreeSpaceRegion |
| c2.pred.003 | opening_or_passage | StructuralElement whose Contract 1 Active Profile concept belongs to the "opening" Master semantic family (§3.2) | StructuralElement |
| c2.pred.004 | light_relevant_opening | c2.pred.003 AND wire `illuminationRelevance` (Observed<boolean>) resolves true | StructuralElement |
| c2.pred.005 | movable_obstacle | StructuralElement/Object whose Contract 1 installationApplicability resolves through Annex B.1 to `movable`, or to `instance_resolved` with accepted instance evidence establishing movability | StructuralElement, Object |
| c2.pred.006 | fixed_obstacle | StructuralElement/Object whose Contract 1 installationApplicability resolves through Annex B.1 to `fixed`, or to `instance_resolved` with accepted instance evidence establishing fixed installation | StructuralElement, Object |
| c2.pred.007 | spatial_container | room_root, or a node whose accepted per-instance evidence shows an internal bounded enclosing reference frame | Room, StructuralElement, Object |
| c2.pred.008 | contained_entity | a node whose accepted per-instance evidence shows it is held within/bounded by a spatial_container | StructuralElement, Object |
| c2.pred.009 | clearance_relevant_endpoint | blocker role: c2.pred.005 ∪ c2.pred.006; blocked role: c2.pred.003 ∪ c2.pred.001 ∪ c2.pred.005 ∪ c2.pred.006 (§8, §12.4) | StructuralElement, Object, Room |

## B.1 Contract 1 Installation Applicability to Obstacle Mobility Mapping Registry

| installationApplicability | obstacleMobilityClass | normativeMeaning |
|---|---|---|
| architectural_surface | fixed | surface is building-fixed; not movable |
| attached_component | fixed | component is attached to a parent assembly |
| building_integrated | fixed | integrated building element |
| installation_state_orthogonal | instance_resolved | mobility is not determined by the Master state alone |
| installed_or_fixed | fixed | explicitly installed or fixed |
| movable_or_freestanding | movable | explicitly movable/freestanding |
| movable_or_installed_profile_specific | instance_resolved | profile/instance evidence must resolve installed versus movable |
| movable_or_mounted | instance_resolved | mounting or mobility must be resolved per instance |
| not_applicable | inapplicable | concept does not participate in obstacle mobility classification |
| profile_specific | instance_resolved | profile/instance evidence must resolve mobility |

`instance_resolved` requires accepted instance evidence. It never defaults to movable or fixed.

# Annex C — GeneralEndpointApplicabilityRule Registry

| Rule ID | Relation Definition ID | Endpoint role (from/container/blocker) | Endpoint role (to/contained/blocked) | generalApplicabilityStatus | Notes |
|---|---|---|---|---|---|
| c2.applic.001 | c2.reldef.001 | c2.pred.001, c2.pred.003, c2.pred.005, c2.pred.006 (any) | c2.pred.001, c2.pred.003, c2.pred.005, c2.pred.006 (any) | applicable | Adjacency is unordered; the same role set applies to both positions |
| c2.applic.002 | c2.reldef.001 | c2.pred.002 | any | reserved | FreeSpaceRegion Adjacency deferred (§13.2) |
| c2.applic.003 | c2.reldef.002 | c2.pred.001, c2.pred.007 | — | applicable | container role |
| c2.applic.004 | c2.reldef.002 | — | c2.pred.008 | applicable | contained role |
| c2.applic.005 | c2.reldef.003 | c2.pred.005, c2.pred.006 | — | applicable | blocker role, all Blocking modes |
| c2.applic.006 | c2.reldef.003 | — | c2.pred.003, c2.pred.001, c2.pred.005, c2.pred.006 | applicable | blocked role, all Blocking modes; fixed and movable endpoints are both permitted where mode semantics allow |
| c2.applic.007 | c2.reldef.003 | c2.pred.009 (blocker sub-check) | c2.pred.009 (blocked sub-check) | applicable | additional constraint, `clearance` mode only (Annex F) |
| c2.applic.008 | c2.reldef.002 | c2.pred.002 | any | reserved | FreeSpaceRegion Containment deferred (§13.2) |
| c2.applic.009 | c2.reldef.003 | c2.pred.002 | any | reserved | FreeSpaceRegion as Blocking blocker deferred (§13.2) |
| c2.applic.010 | c2.reldef.003 | any | c2.pred.002 | reserved | FreeSpaceRegion as blocked endpoint deferred (§13.2) |

# Annex D — AdjacencyBasis Registry

Registry version:

```text
adjb.candidate-a.1.0.0-candidate
```

| Basis ID | Basis name | Definition | Lifecycle status |
|---|---|---|---|
| c2.adjbasis.001 | contact | Visible boundaries touch with no visible gap | active |
| c2.adjbasis.002 | shared_boundary | Visible shared architectural boundary without necessarily touching | active |
| c2.adjbasis.003 | immediate_uninterrupted_gap | Small, visually confirmable gap with no third entity/opening interposed | active |

Exclusion conditions (§10.2) are not independent bases; a candidate
Adjacency failing any exclusion condition (`third_entity_separation`,
`projection_perspective_artifact`, `occlusion`, `crop`) resolves to a
borderline reason in Annex G or to no relation record, never to a row
in this Annex.

---

# Annex E — ContainmentBasis Registry

Registry version:

```text
contb.candidate-a.1.0.0-candidate
```

| Basis ID | Basis name | Definition | Lifecycle status |
|---|---|---|---|
| c2.contbasis.001 | room_membership | Node located within a Room's boundary; container = RoomNode | active |
| c2.contbasis.002 | full_spatial_containment | Contained entity's visible extent lies entirely within the container's visible boundary | active |
| c2.contbasis.003 | bounded_volume_containment | Contained entity occupies a recognizable enclosed volume of the container even if the container's own boundary is only partially visible | active |

`visible_support`, `part_of`, `attachment`, `overlap` and
`partial_containment` are explicitly excluded from this registry
(§11.2); they have no row here and no current wire representation.

---

# Annex F — BlockingMode Registry

Registry version:

```text
bm.candidate-a.1.0.0-candidate
```

| Mode ID | Wire token (blockingType) | Meaning | Blocker predicate | Blocked predicate | evaluatorSupportStatus | Evidence (repository) | Lifecycle status |
|---|---|---|---|---|---|---|---|
| c2.blockmode.001 | traffic | Obstruction of a walkable path through/within the room | c2.pred.005, c2.pred.006 | c2.pred.003, c2.pred.001 | evaluator_supported | q9-explicit-conflicts.ts `isSupportedConflictType`; valid-complete.fixture.ts (fixture-exercised) | active |
| c2.blockmode.002 | clearance | Obstruction of required operating/access clearance for a fixed or movable entity (e.g. door swing, drawer/appliance access) | c2.pred.005, c2.pred.006 | c2.pred.009 | evaluator_supported | q9-explicit-conflicts.ts `isSupportedConflictType` (not yet fixture-exercised) | active |
| c2.blockmode.003 | light | Obstruction of a light-relevant opening's light path | c2.pred.005, c2.pred.006 | c2.pred.004 | schema_valid_not_evaluator_supported | types.ts comment example only; no evaluator or fixture reference found | experimental |

`"physical"` is deliberately absent from this registry (§13.1, §23) —
no repository evidence supports it as any status.

---

# Annex G — RelationSpecificBorderlineReason Registry

| Borderline ID | Relation Definition ID | Reason name | resolutionOutcome | confidenceState | recordPolicy |
|---|---|---|---|---|---|
| c2.borderline.001 | c2.reldef.001 | projection_artifact_partial_evidence | positive_uncertain | known_with_uncertainty | exactly one RelationSemanticRecord; no RelationCandidateAssessmentRecord |
| c2.borderline.002 | c2.reldef.001 | projection_artifact_prevents_determination | unresolved_not_inferable | unknown_not_inferable | exactly one directed RelationCandidateAssessmentRecord; no positive relation or wire record |
| c2.borderline.003 | c2.reldef.001 | occlusion_partial_evidence | positive_uncertain | known_with_uncertainty | exactly one RelationSemanticRecord; no RelationCandidateAssessmentRecord |
| c2.borderline.004 | c2.reldef.001 | occlusion_prevents_determination | unresolved_not_inferable | unknown_not_inferable | exactly one directed RelationCandidateAssessmentRecord; no positive relation or wire record |
| c2.borderline.005 | c2.reldef.001 | crop_partial_evidence | positive_uncertain | known_with_uncertainty | exactly one RelationSemanticRecord; no RelationCandidateAssessmentRecord |
| c2.borderline.006 | c2.reldef.001 | crop_prevents_determination | unresolved_not_inferable | unknown_not_inferable | exactly one directed RelationCandidateAssessmentRecord; no positive relation or wire record |
| c2.borderline.007 | c2.reldef.002 | partial_containment_independent_basis | positive_uncertain | known_with_uncertainty | exactly one RelationSemanticRecord; no RelationCandidateAssessmentRecord |
| c2.borderline.008 | c2.reldef.002 | partial_containment_no_confirmed_basis | unresolved_not_inferable | unknown_not_inferable | exactly one directed RelationCandidateAssessmentRecord; no positive relation or wire record |
| c2.borderline.009 | c2.reldef.003 | obstruction_basis_partial | positive_uncertain | known_with_uncertainty | exactly one RelationSemanticRecord; no RelationCandidateAssessmentRecord |
| c2.borderline.010 | c2.reldef.003 | obstruction_basis_insufficient | unresolved_not_inferable | unknown_not_inferable | exactly one directed RelationCandidateAssessmentRecord; no positive relation or wire record |

# Annex H — SemanticViolationKind Registry

Registry version:

```text
viol.candidate-a.1.0.0-candidate
```

| Violation ID | Kind | Meaning | Owning section |
|---|---|---|---|
| c2.violation.001 | RELATION_IDENTITY_DUP | A second relation record shares an existing canonical identity (§6.1) within one scene | §6.3 |
| c2.violation.002 | DIRECTIONALITY_VIOLATION | fromNodeId/toNodeId direction does not match the canonical direction for Containment/Blocking | §6.4 |
| c2.violation.003 | CONTAINMENT_CYCLE | A chain of direct Containment records forms a cycle | §11.4 |
| c2.violation.004 | UNREGISTERED_BLOCKING_MODE | blockingType is not a row in Annex F | §12.4 |
| c2.violation.005 | ENDPOINT_ROLE_MISMATCH | An endpoint role does not satisfy the Annex C rule for the record's relationDefinitionId | §9, §18 |
| c2.violation.006 | UNDECLARED_COMPOUND_BLOCKING_TOKEN | blockingType is a non-registered compound/concatenated token | §12.5 |
| c2.violation.007 | NEGATIVE_RELATION_ASSERTION_ATTEMPTED | A process attempts to encode relation absence as a positive negative-fact record | §14.1 |

Contract 2 exports these violation kinds as candidate conformance-check
sources for Contract 10 (§4, §19); it does not itself define runtime
failure severity, retry behavior or blocking scope — that architecture
belongs exclusively to Contract 10.

---

# Annex I — RelationRecordSchema Registry

| Record/value type | Normative source | Required core fields | Primary invariants |
|---|---|---|---|
| RelationSemanticRecord | §16.2 | relationRecordId; relationDefinitionId; canonicalIdentity; fromNodeId; toNodeId; fromEndpointPredicates; toEndpointPredicates; relationTruthStatus; generalApplicabilityStatus; schemaRepresentabilityStatus; evaluatorSupportStatus; relationDefinitionLifecycleStatus; blockingModeLifecycleStatus when applicable; recordValidityStatus; confidence; provenance; directOrDerived | positive assertion only; valid requires applicable and representable; direction/predicates satisfy Annex C; positive_uncertain uses this record only |
| CanonicalRelationCandidateIdentity | §16.3 | relationDefinitionId; fromNodeId; toNodeId; blockingModeId when applicable | Adjacency canonicalizes unordered pair; Containment/Blocking preserve direction; opposite directed candidates are distinct |
| RelationCandidateAssessmentRecord | §16.4 | candidateAssessmentId; relationDefinitionId; canonicalCandidateIdentity; fromNodeId; toNodeId; fromEndpointPredicates; toEndpointPredicates; blockingModeId when applicable; assessmentOutcome; borderlineReasonId; confidence; provenance; evidenceRefs | assessmentOutcome exactly unresolved_not_inferable; directed candidate preserved; no positive semantic or wire relation |
| CanonicalRelationIdentity | §6.1 | relationDefinitionId; orderedOrUnorderedNodePair; blockingModeId (Blocking only) | uniqueness key for positive relation identity |
| RelationDefinitionChange | Annex K.1 | changeId; changedId; changeClass; priorDraftMeaning; correctedMeaning; versionEffect; requiredReview | every semantic/schema correction recorded; ID never reused after lock |
| FutureRelationNamespaceEntry | Annex K.2 | namespacePattern; domain; status; purpose | status always reserved; no lifecycle/evaluation/implementation effect |

# Annex J — RelationDefinitionLifecycle Registry

| From | To | Allowed | Authority | Required record |
|---|---|---|---|---|
| reserved | experimental | allowed | Package Preparation Authority under Owner authorization | RelationDefinitionChange |
| experimental | active | allowed | Project Owner activation decision | RelationDefinitionChange |
| experimental | deprecated | allowed | Project Owner accepted abandonment or replacement | RelationDefinitionChange |
| active | deprecated | allowed | Project Owner accepted successor | RelationDefinitionChange |
| deprecated | retired | allowed | Project Owner accepted historical-retirement decision | RelationDefinitionChange |
| deprecated | active | prohibited | none | new stable ID required |
| retired | active | prohibited | none | new stable ID required |
| any | reserved | prohibited | none | ID reuse prohibited |

# Annex K — RelationDefinitionChange and FutureRelationNamespace Reservation Registries

## K.1 RelationDefinitionChange Registry (migration log)

Registry version:

```text
rdc.candidate-a.2.0.0-candidate
```

Revisions 6–8 were never candidate-locked. These rows record semantic corrections first introduced in Revision 7 and carried unchanged through Revision 8 into Revision 9, and into Revision 10; stable-ID preservation remains subject to a full Revision 10 review.

| Change ID | Changed identity | Change class | Prior draft meaning/problem | Carried Revision 9 meaning | Version effect | Required review |
|---|---|---|---|---|---|---|
| c2.change.001 | c2.pred.005 | major | movability inferred by negated equality in earlier draft lineage | explicit Contract 1 installation-state mapping to movable or instance-resolved evidence | pre-lock semantic correction; stable ID preserved; predicate registry candidate version advanced | full Revision 10 consolidated review required |
| c2.change.002 | c2.pred.006 | major | fixed status covered only one exact installation token | explicit mapping covers every fixed and instance-resolved Contract 1 state | pre-lock semantic correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.003 | c2.pred.009 | major | fixed blocked endpoints omitted from clearance predicate | blocked role includes opening, room, movable and fixed obstacles | pre-lock semantic correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.004 | c2.applic.006 | minor | rule absent or narrower in prior unlocked draft | fixed blocked endpoints added | pre-lock applicability correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.005 | c2.applic.008 | minor | rule absent or narrower in prior unlocked draft | FreeSpaceRegion Containment reservation made explicit | pre-lock applicability correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.006 | c2.applic.009 | minor | rule absent or narrower in prior unlocked draft | FreeSpaceRegion Blocking-blocker reservation made explicit | pre-lock applicability correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.007 | c2.applic.010 | minor | rule absent or narrower in prior unlocked draft | FreeSpaceRegion Blocking-target reservation made explicit | pre-lock applicability correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.008 | c2.blockmode.002 | minor | clearance target predicate indirectly omitted fixed targets | clearance uses corrected c2.pred.009 including fixed targets | pre-lock clarification; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.009 | c2.borderline.001 | major | record type was optional or under-specified | exactly one RelationSemanticRecord; no CandidateAssessment | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.010 | c2.borderline.002 | major | record type was optional or under-specified | exactly one directed RelationCandidateAssessmentRecord; no positive/wire relation | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.011 | c2.borderline.003 | major | record type was optional or under-specified | exactly one RelationSemanticRecord; no CandidateAssessment | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.012 | c2.borderline.004 | major | record type was optional or under-specified | exactly one directed RelationCandidateAssessmentRecord; no positive/wire relation | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.013 | c2.borderline.005 | major | record type was optional or under-specified | exactly one RelationSemanticRecord; no CandidateAssessment | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.014 | c2.borderline.006 | major | record type was optional or under-specified | exactly one directed RelationCandidateAssessmentRecord; no positive/wire relation | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.015 | c2.borderline.007 | major | record type was optional or under-specified | exactly one RelationSemanticRecord; no CandidateAssessment | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.016 | c2.borderline.008 | major | record type was optional or under-specified | exactly one directed RelationCandidateAssessmentRecord; no positive/wire relation | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.017 | c2.borderline.009 | major | record type was optional or under-specified | exactly one RelationSemanticRecord; no CandidateAssessment | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.018 | c2.borderline.010 | major | record type was optional or under-specified | exactly one directed RelationCandidateAssessmentRecord; no positive/wire relation | pre-lock truth-model correction; stable ID preserved | full Revision 10 consolidated review required |
| c2.change.019 | RelationSemanticRecord | major | lifecycle and applicability invariants were conflated or incomplete | separate relation/mode lifecycle; valid positive requires applicable and representable | record schema candidate version advanced | full Revision 10 consolidated review required |
| c2.change.020 | CanonicalRelationCandidateIdentity | major | type absent | category-aware identity preserves directed candidate roles | new pre-lock record/value type | full Revision 10 consolidated review required |
| c2.change.021 | RelationCandidateAssessmentRecord | major | undirected NodeIdPair and ambiguous positive_uncertain policy | directed candidate fields; sole outcome unresolved_not_inferable | record schema candidate version advanced | full Revision 10 consolidated review required |
| c2.change.022 | RelationDefinitionLifecycle Registry | minor | transition graph incomplete in prior draft lineage | experimental→deprecated and deprecated→retired explicitly governed | lifecycle registry candidate version advanced | full Revision 10 consolidated review required |

## K.2 FutureRelationNamespace Reservation Registry

Registry version:

```text
resv2.candidate-a.1.0.0-candidate
```

| Namespace reservation | Domain | Status | Purpose |
|---|---|---|---|
| relation.geometry.* | relation | reserved | future quantitative-geometry relation facts |
| relation.support.* | relation | reserved | future visible-support relation (§11.2) |
| relation.attachment.* | relation | reserved | future attachment relation (§11.2) |
| relation.part_of.* | relation | reserved | future part-of/assembly relation (§11.2) |
| relation.pathfinding.* | relation | reserved | future route-feasibility reasoning (§12.3) |
| relation.code_compliance.* | relation | reserved | future building/accessibility-code relation (§12.3) |
| relation.light_simulation.* | relation | reserved | future physically-based light-simulation relation (§12.3) |
| relation.ergonomics.* | relation | reserved | future quantitative-ergonomics relation (§12.3) |

Reservations carry no lifecycle transition of their own until a
successor revision promotes one to a concrete `reserved →
experimental` RelationDefinition/BlockingMode entry (Annex J).

---

# Annex L — Current Upstream Dependency Snapshot

| Field | Current value |
|---|---|
| upstreamContract | Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md |
| upstreamRevision | 19 |
| upstreamCandidateLock | C1-REV19-CL-001 — draft, not issued (final independent verification PASSED) |
| upstreamSHA256 | d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329 |
| lastIssuedHistoricalUpstreamLock | C1-REV18-CL-001 |
| currentDependencyRole | prepared successor dependency; not yet candidate-locked |


# Annex M — Non-normative conformance examples (stable semantic test vectors)

These examples illustrate, and do not extend, Sections 6–18. They are
not fixtures, not corpus material, and authorize no implementation.

**Example 1 — resolved Adjacency.** Two `StructuralElement` nodes,
`wall_A` (fixed_obstacle) and `wall_B` (fixed_obstacle), share a
visible corner. Basis: `c2.adjbasis.002` (shared_boundary). Record:
`relationDefinitionId: c2.reldef.001`, `canonicalIdentity: (Adjacency,
min(wall_A,wall_B), max(wall_A,wall_B))`, `confidence:
known_with_confidence`, `provenance: visually_observed`,
`relationTruthStatus: asserted_positive`.

**Example 2 — resolved Containment.** `Room` node `room_1` (room_root,
spatial_container) visibly bounds `Object` node `sofa_1`
(contained_entity). Basis: `c2.contbasis.001` (room_membership).
Record: `relationDefinitionId: c2.reldef.002`, `fromNodeId: room_1`
(container), `toNodeId: sofa_1` (contained), `confidence:
known_with_confidence`.

**Example 3 — resolved Blocking, traffic.** `Object` node `box_1`
(movable_obstacle) visibly obstructs the walkable path toward `Room`
node `room_1` (room_root). `blockingModeId: c2.blockmode.001`
(traffic). Record: `fromNodeId: box_1` (blocker), `toNodeId: room_1`
(blocked), `confidence: known_with_confidence`.

**Example 4 — resolved Blocking, clearance, same pair as Example 3
under a second concern.** The same `box_1` also visibly obstructs
required clearance for `StructuralElement` node `door_1`
(opening_or_passage, clearance_relevant_endpoint). Second, independent
record: `blockingModeId: c2.blockmode.002` (clearance), `fromNodeId:
box_1`, `toNodeId: door_1`. Per §12.5, this is a distinct canonical
identity from Example 3, not a duplicate, and not a silent collapse.

**Example 5 — unresolved Adjacency candidate.** A candidate Adjacency
between two `Object` nodes is visible only at an oblique camera angle
and projection prevents determination. A
`RelationCandidateAssessmentRecord` is created with
`borderlineReasonId: c2.borderline.002`,
`assessmentOutcome: unresolved_not_inferable` and
`confidence: unknown_not_inferable`. No RelationSemanticRecord and no
wire relation are produced.

**Example 6 — invalid duplicate (rejected, not accepted).** Two
relation records both assert `(Blocking, box_1, door_1, clearance)`.
Second record: `recordValidityStatus: invalid`,
`SemanticViolationKind: c2.violation.001` (RELATION_IDENTITY_DUP). Not
silently merged or overwritten (§6.3, §18.1).

**Example 7 — deferred FreeSpaceRegion.** A visible open floor area
modeled as a `FreeSpaceRegion` node has an apparent Adjacency to a
`Room` boundary. No relation record is produced:
`generalApplicabilityStatus: reserved` (Annex C, `c2.applic.002`); this
is a scope deferral, not a borderline or invalid outcome (§13.2).

---

# Annex N — Traceability matrix

| Contract 2 provision | Current authoritative source |
|---|---|
| StructuredScene relation categories and wire fields | ADR-013 plus verified repository snapshot |
| confidence and provenance wire enums | ADR-013 / ADR-014 |
| Contract 1 endpoint identities and installation applicability | Contract 1 Revision 19, current prepared dependency |
| last issued historical vocabulary lock | C1-REV18-CL-001 |
| relation identity and directionality | this Revision 10 §6 / Annex A |
| obstacle mobility classification | this Revision 10 §8 / Annex B.1 |
| general endpoint applicability | this Revision 10 §9 / Annex C |
| borderline and candidate-assessment handling | this Revision 10 §14 / Annex G |
| record schemas | this Revision 10 §16 / Annex I |
| lifecycle transitions | this Revision 10 §17 / Annex J |

# Annex O — Historical and Current Targeted Metadata Change Record

## O.1 Historical Revision 7 → Revision 8 record

Revision 8 synchronized Contract 2 to Contract 1 Revision 18 and corrected the stale Annex L `upstreamRevision` value. Revision 8 did not change Contract 2 relation semantics.

| Affected location | Revision 7 value/state | Revision 8 correction | Governance effect |
|---|---|---|---|
| §1, §1.1, §3.2, §21–23, Annex L, Annex N | Contract 1 Revision 17; C1-REV17-CL-001; SHA-256 `f32e95b3429cd361b540459115700d6185447688404c2ce971a78ea86355652e` | Contract 1 Revision 18; C1-REV18-CL-001; SHA-256 `8318333b47a4e98e1e4c7a098a243838fde2257f6a560f93445002399a8aae89` | exact upstream synchronization; full Revision 8 review required |
| Annex L `upstreamRevision` | stale value `16` | corrected current value `18` | closed the independently identified upstream-traceability defect |
| document metadata and current self-references | Revision 7 and its unissued reserved lock | Revision 8; C2-REV8-CL-001 | created immutable Revision 8 successor artifact |
| relation semantics and registries | reviewed Revision 7 content | carried unchanged | no semantic version effect |

Revision 8 was independently reviewed and remains an immutable, never-locked historical draft with SHA-256 `74482f1d5a8d47cf7f22cb40bb666f9e9645e0b87466509fc7371f3e68fc1c3e`.

## O.2 Historical Revision 8 → Revision 9 record

Revision 9 closed one isolated stale self-identification defect found by the final independent consolidated review of Revision 8.

| Affected location | Revision 8 value/state | Revision 9 correction | Governance effect |
|---|---|---|---|
| §1 metadata `Revision:` field | stale self-identification as Revision 7 | `9 — Targeted self-metadata correction successor to Revision 8...` | document now identifies its own current revision consistently |
| title, lineage, readiness prerequisites, traceability and current lock references | Revision 8; C2-REV8-CL-001 | Revision 9; C2-REV9-CL-001 | creates a new immutable successor and requires full Revision 9 review |
| upstream dependency | Contract 1 Revision 18; C1-REV18-CL-001; SHA-256 `8318333b47a4e98e1e4c7a098a243838fde2257f6a560f93445002399a8aae89` | unchanged | no upstream or cross-contract semantic change |
| relation semantics, registries, predicates, schemas and lifecycle | reviewed Revision 8 content | carried unchanged | no semantic version effect |

Revision 9 was independently reviewed (Phase 5 Contract 2 Final Compatibility Revalidation) and remains an immutable, never-locked historical draft with SHA-256 `66486a36f3a397b5227f1bf5cfc80db3e09d76549d9d40ff4b64ac0c54661532`. That review found it FAIL — CONTENT CHANGE REQUIRED (1 MAJOR, 1 MINOR), closed by Revision 10 below.

## O.3 Current Revision 9 → Revision 10 targeted correction

Revision 10 closes exactly the two findings from the Phase 5 Contract 2 Final Compatibility Revalidation review of Revision 9 (independent review against the final, verified Contract 1 Revision 19).

| # | Severity | Affected location | Revision 9 value/state | Revision 10 correction | Governance effect |
|---|---|---|---|---|---|
| 1 | MAJOR | §2.2, §2.3 | present-tense claim that the current Layer 2 / inherited Active Evaluation Profile is "five active room identities — living_room, bedroom, kitchen, bathroom, toilet_room" | replaced with a reference to Contract 1 Revision 19 §2.3's own current statement of scope (34 active residential categories), consistent with §2.4's reference-not-restatement rule | removes a direct conflict with the binding Project Owner decision that 34 categories are active_candidate; no relation semantics, registries, or predicates changed |
| 2 | MINOR | §1, Annex L | upstream dependency snapshot pinned to Contract 1 Revision 18 (SHA-256 `8318333b47a4e98e1e4c7a098a243838fde2257f6a560f93445002399a8aae89`) | updated to Contract 1 Revision 19 (SHA-256 `d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329`), including the consequential `lastIssuedHistoricalUpstreamLock` update from `C1-REV12-CL-001` to `C1-REV18-CL-001` (the actual last-issued historical lock relative to the new current pointer) | corrects a pure version-pin/traceability staleness; Annex B.1's generic `installationApplicability` mapping was independently confirmed unchanged between Rev18 and Rev19, so no relation-semantic content is affected |
| — | N/A | relation semantics, registries, predicates, schemas, lifecycle, all Annexes A–K, M, N | reviewed Revision 9 content | carried unchanged | no semantic version effect; no other content, wording, or structure was modified |

Revision 10 does not authorize Candidate Lock issuance, repository persistence, or any downstream action. It requires one full consolidated review before acceptance or Candidate Lock issuance.
