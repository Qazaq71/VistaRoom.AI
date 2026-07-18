# Candidate A Bounded Scope Decision — Revision 5 (Proposed Successor to Revision 3; Correction-Only Successor to the Revision 4 Draft) — Adding Toilet Room as the Fifth Active Room Type

```text
Document type: Proposed Owner Governance Scope Decision (not an ADR,
    not an Implementation Package) — standalone successor candidate
Status: Draft — Verification Passed; Awaiting Project Owner Acceptance. Not Accepted.
Revision: 5 (proposed successor revision; does not modify, replace or
    supersede Revision 3 unless and until separately accepted by the
    Project Owner)
Relationship to Revision 4: Revision 4 was a draft successor
    candidate. It was never accepted and is not itself authoritative.
    This Revision 5 is a strictly correction-only, standalone
    successor to the Revision 4 draft, prepared in response to a full
    consolidated review of Revision 4 (verdict: REVISE — TARGETED
    CORRECTION REQUIRED; 0 blocking findings; 2 mandatory findings).
    Revision 4 has not been edited, moved or deleted by this document
    (Section 16).
Relationship to Revision 3: Revision 3 remains the sole authoritative
    Bounded Scope Decision until this Revision 5 is separately
    accepted. Revision 3 has not been edited, moved or deleted by
    this document.
Prepared by: Claude (Chief Software Architect / Specification Partner)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-18
Accepted by: Not yet accepted
Acceptance date: Not applicable
Accepted architecture baseline referenced (unchanged, not reopened):
    Perception Mechanism Selection and Evaluation Architecture,
    Revision 3 (Accepted, 2026-07-14)
Repository: Qazaq71/VistaRoom.AI, branch main
Repository persistence: Completed for verification access only in
    commit bc860f54d797ee8cdb2b2201f61676b3c295528a. This persistence
    does not constitute Project Owner acceptance.
Implementation: Not authorized by this document
```

---

## 1. Document Metadata

Covered above. In addition:

```text
Trigger for this draft: A full consolidated review of the Revision 4
    draft (docs/engineering-decisions/reviews/
    Candidate-A-Bounded-Scope-Decision-Rev4.md) returned a verdict of
    REVISE — TARGETED CORRECTION REQUIRED, with 0 blocking findings
    and 2 mandatory findings. This Revision 5 is prepared as a
    strictly correction-only, standalone successor draft closing
    those 2 mandatory findings (Section 2A, C-01 and C-02) plus a
    closed set of three Owner-approved strengthening improvements
    (Section 2A, S-01 through S-03), per explicit drafting
    instruction. Revision 4's own underlying trigger — an explicit
    Project Owner Decision to evaluate adding toilet room as a fifth
    active room type to the Candidate A bounded scope — remains the
    ultimate origin of this document chain and is not reopened.
Nature of this document: A complete, standalone, self-contained
    successor candidate. It is not a diff, patch or amendment note
    against Revision 3 or Revision 4. It restates every Revision 3
    and Revision 4 provision it does not change, so that it can be
    read, reviewed and (if accepted) adopted without reference to
    Revision 3's or Revision 4's text.
Scope of change from Revision 4: Exactly the six changelog items
    listed in Section 2A. No other Revision 4 provision — including
    every provision Revision 4 itself carried forward unchanged from
    Revision 3 — is reopened by this Revision 5.
```

---

## 2. Revision 4 Change Summary (Historical — Restated Unchanged, Relative to Revision 3)

The following is carried forward from Revision 4 without change. It describes the Revision 3 → Revision 4 scope change and is restated here only so this document remains fully standalone. The Revision 4 → Revision 5 changelog is a separate, new section (Section 2A) immediately below.

```text
Changed (Revision 3 -> Revision 4):
- Segment "Residential-first" active room types: 4 -> 5.
- New room type added: toilet room.
- New normative distinction added: bathroom vs. toilet room
  (Section 7).
- New two-stage status model introduced for toilet room only:
  "Accepted as the fifth bounded room type" (scope-level) vs.
  "Operational evaluation activation: Pending Rev13 alignment"
  (corpus/metric/threshold-level). See Section 6 and Section 9.

Not changed (verified by full re-reading of the five source
documents named in Section 4, not by summary or recollection):
- Segment: Residential-first.
- One image / one room / one operation boundary.
- Licensed / synthetic / deliberately staged data only; real user
  photos excluded.
- Multi-image, multi-view, panorama, floor plan, video exclusions.
- Mechanism Class B, PerceptionResult four-outcome architecture,
  PerceptionEvidenceArtifact grounding boundary.
- Evidence boundaries (Rev3 Part G).
- Provider/model sequencing (Rev3 Part L).
- Privacy / test-data three-decision boundary (Rev3 Part M; Rev9).
- Absence of implementation, corpus, provider or ADR authorization.
- Every numeric threshold, metric definition, corpus count, and
  fixture count in Evaluation Threshold and Acceptance Plan
  Revision 13 (not reopened; see Section 9 for what is instead
  recorded as an open dependency).
- Every purpose/boundary/dependency statement in Contracts 1–10
  Preparation and Dependency Plan Revision 4 (not reopened; see
  Section 10 for what is instead recorded as an open dependency).
- Every rule in Candidate A Test Data Handling Decision Revision 9
  (not reopened; its single room-type citation is noted in Section 9
  as a future textual-alignment item only).

Not authorized by this change (see Section 14 for the full list):
- Any corpus, annotation, metric, or evaluation use of toilet room.
- Any edit to Rev13, the Contracts Plan, Rev9, or the Module
  Applicability Profile.
- Repository persistence of this document.
- A new "combined bathroom" room type. Combined (bath+toilet)
  spaces remain inside the existing bathroom room type, with an
  explicit clarifying note (Section 7).
```

---

## 2A. Revision 5 Changelog (Relative to Revision 4)

This is the complete and exclusive list of substantive changes made by this Revision 5 relative to the Revision 4 draft. No other substantive change was made.

```text
1. Qualification of the FreeSpaceRegion precedent (Mandatory
   correction C-01). Section 6.2 no longer describes the toilet-room
   two-stage status model and the FreeSpaceRegion Deferred-status
   precedent as "structurally the same pattern." FreeSpaceRegion is
   now qualified as a capability-level deferral inside an
   already-fixed corpus population — directionally supportive but not
   a full structural match — distinct from toilet room's
   corpus-population-axis deferral, which changes the room-type grid,
   per-room floors, denominators and corpus totals. Section 12, R-4,
   is updated to match.

2. Owner Decision dependency-order correction (Mandatory correction
   C-02). Section 13 is restructured so that Decision 2 confirms the
   two-stage status model on its own terms before Decision 3 adds
   toilet room as the fifth bounded room type under that
   already-confirmed model. Revision 4's bundling of these two
   determinations into a single Decision 2, and its overlapping
   separate Decision 5, are both resolved. All subsequent Owner
   Decisions and every internal cross-reference to a Decision number
   are renumbered and corrected accordingly (Section 6.2, Section 12
   R-4, Section 13, Section 16).

3. Atomic split of the bathroom/toilet-room decision (Strengthening
   improvement S-01). Revision 4's bundled Decision 4 is split into
   three atomic Owner Decisions (new Decisions 5, 6 and 7): the
   normative bathroom/toilet-room distinction; the confirmation that
   no separate "combined bathroom" active room type is introduced;
   and the classification precedence rule, confirmed as a
   scope-definition rule only, not an annotation contract provision.

4. Risk register acknowledgment decision (Strengthening improvement
   S-02). A new Owner Decision (Decision 10) is added, confirming that
   the risks in Section 12 have been reviewed and that no additional
   mitigation is required at this governance stage beyond the
   controls already stated in this document. This Decision does not
   authorize corpus, implementation, or downstream work (Section 14).

5. Recommended five-room-with-deferred-toilet drafting model for
   Contracts 3 and 7 (Strengthening improvement S-03). A new Section
   10.1 records an explicit, non-binding recommendation that
   Contracts 3 and 7 be designed for the five-room target model from
   the outset, with toilet-room rows, cells or population entries
   marked Deferred / evaluation-activation-pending until the separate
   Rev13 alignment decision is accepted, and with no toilet-room
   corpus, annotation, metric or evaluation obligation created before
   that alignment. This closes the open sequencing question
   previously left fully undecided in Revision 4 (Section 12, R-2),
   as a recommendation for future drafting governance — not as
   drafting authorization. Section 10's Contract 3 and Contract 7
   table rows, and Section 13 Decision 9, are updated to reference it.

6. Cross-session governance coordination / reconciliation note for the
   existing unaccepted Preparation Plan Revision 5 draft (new Section
   11.3). This Revision 5 records that a separate, local,
   not-accepted and not-persisted draft — Candidate A Contracts 1–10
   Preparation and Dependency Plan Revision 5 — exists from a
   different working session and must not be accepted independently
   without reconciliation against this document once accepted. This
   Revision 5 does not import, edit, or rely on that draft's text.

No other section, provision, boundary, precedent, exclusion, status
model, or authorization statement carried forward from Revision 4 is
changed by this Revision 5.
```

---

## 3. Purpose

This document proposes a complete, standalone successor to the accepted Candidate A Bounded Scope Decision Revision 3, whose sole substantive change relative to Revision 3 is to add `toilet room` as a fifth active room type within the already-accepted `Residential-first` segment, in response to an explicit Project Owner Decision to do so. Relative to the intervening Revision 4 draft, this document is strictly correction-only (Section 2A).

Its purpose is fourfold:

1. Define the exact scope change (Sections 5–8) precisely enough that it can be evaluated and accepted or rejected on its own terms, without requiring the reader to reconstruct intent from a diff against Revision 3.
2. Perform and record a full impact analysis (Sections 9–10) against every document whose content is, by explicit prior governance, keyed to the four-room-type matrix — so that acceptance of this Revision 5 does not silently invalidate, contradict, or leave ambiguous any provision of Evaluation Threshold and Acceptance Plan Revision 13, the Contracts 1–10 Preparation and Dependency Plan Revision 4, Candidate A Test Data Handling Decision Revision 9, or the Module Applicability Profile Revision 13.
3. Establish the minimum correct governance sequence (Section 11) and the explicit non-authorization boundary (Section 14) so that accepting this Revision 5 cannot be read, by omission, as authorizing toilet-room corpus creation, annotation, metric definition, or evaluation before a separate alignment decision closes the gap identified in Section 9.
4. Close, as a strictly correction-only successor, the two mandatory findings identified by the consolidated review of Revision 4 (Section 2A, C-01 and C-02), together with a closed set of three Owner-approved strengthening improvements (Section 2A, S-01 through S-03), without reopening any Revision 4 provision not named in Section 2A.

This document does not itself decide how Revision 13 (or its successor) will be updated to operationalize toilet room. That decision is out of scope here and is explicitly reserved (Section 9, Section 12).

---

## 4. Imported Authoritative Baselines

The following five documents were retrieved by direct directory listing and read in full (not from chat summary or recollection) as the mandatory impact-analysis basis for the underlying scope change. This baseline set is unchanged from Revision 4; it was not re-verified line-by-line for this Revision 5 because none of the six changelog items in Section 2A touches any provision of these documents.

```text
1. docs/engineering-decisions/reviews/
   Candidate-A-Bounded-Scope-Decision-Rev3.md
   (Accepted, Project Owner, 2026-07-14; 1004 lines; read in full.)

2. docs/engineering-decisions/reviews/
   Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev13.md
   (Accepted, Project Owner, 2026-07-15; 839 lines; read in full.)

3. docs/engineering-decisions/reviews/
   Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev4.md
   (Accepted, Project Owner, 2026-07-16; 521 lines; read in full.
   Note: the document named in the originating request as
   "...-Rev6.md" does not exist in the repository. Directory listing
   confirms the actual latest revision on disk is Revision 4 of this
   Plan, under the file name above.)

4. docs/engineering-decisions/reviews/
   Candidate-A-Module-Applicability-Profile-Rev13.md
   (Accepted, Project Owner, 2026-07-17; 528 lines; read in full.)

5. docs/engineering-decisions/reviews/
   Candidate-A-Test-Data-Handling-Decision-Rev9.md
   (Accepted, Project Owner, 2026-07-16; 1869 lines. Sections 0–11
   (lines 1–762) read in full; the remainder (lines 763–1869) verified
   by full-text search for every room-type keyword, with zero
   additional matches beyond the single citation already captured in
   the first read.)
```

In addition to this baseline set, this Revision 5 was prepared directly against two further documents that are not themselves accepted baselines: the Revision 4 draft itself (same directory; Draft, Not Accepted; superseded as the active proposal by this document, Section 16), and the consolidated review record of Revision 4 that produced the correction set closed by Section 2A. Neither is treated as an authoritative baseline in the sense of Section 9/9A/9C — they govern only what changed in this document, not the underlying scope-change impact analysis, which is unchanged from Revision 4.

No other document was substituted for the five baselines above, and none was read only as a chat summary or excerpt.

---

## 5. Revised Bounded Input Scope

The following is Revision 3, Part E (Exact Input Scope) restated in full, unchanged in every respect except the room-type list, which moves to Section 6 below:

```text
Segment: Residential-first (unchanged).

Included:
One image only.
Single room.
Ordinary perspective room photograph (not panorama, not floor plan).
Original image retained as provenance root.
Optional user-provided context, with explicit provenance tag.
Optional SpaceTypeId reference input (not re-derived).
Preprocessing traceability — every transform traceable to the
    original image.
Minimum readability validation.
Unsupported-input classification.

Explicitly excluded:
Real user photos.
Multiple images per operation.
Multi-view fusion.
Panorama stitching.
360-degree panoramas.
Floor plans.
Video.
Video frames as a separate input mode.
Cross-image reasoning.
Whole-home image sets.

Boundary outcomes (Rev3 Part F, unchanged, not reopened):
FailureResult, InsufficientEvidenceResult, and Partial SceneResult
    retain their Rev3 Part E.4 definitions unchanged.
```

No provision of Revision 3, Part E, is expanded, narrowed, or reinterpreted by this Revision 5. The only input-scope change made by this document is the room-type count and list, addressed next.

---

## 6. Five Active Room Types

The accepted Segment remains `Residential-first`. The number of active room types changes from four to five.

```text
1. living room       — unchanged, as defined by Revision 3.
2. bedroom           — unchanged, as defined by Revision 3.
3. kitchen           — unchanged, as defined by Revision 3.
4. bathroom          — unchanged in name and normative content,
                        but see Section 7 for the newly explicit
                        distinction from toilet room.
5. toilet room       — new. Defined normatively in Section 7.
```

### 6.1 Two-stage status of toilet room

```text
toilet room:
  Scope status:        Accepted as the fifth bounded room type
                        (upon acceptance of this Revision 5).
  Evaluation status:    Operational evaluation activation is Pending
                        Rev13 population / metric / corpus alignment
                        (Section 9). Toilet room is not, as of this
                        Revision 5, part of any active corpus,
                        annotation, metric, or evaluation population.
```

This is a "scope accepted, operationalization deferred" model, not a "proposed, not yet accepted" model. Toilet room is, upon acceptance of this Revision 5, a real member of the accepted bounded-scope room-type list — not a dormant vocabulary entry and not merely a proposed target — while its concrete evaluation obligations (corpus cells, threshold rows, relation-applicability rows) remain unactivated until a separate alignment event (Section 9, Section 11).

### 6.2 Precedent basis for this two-stage model, and its limits

This separation — between an accepted scope-level fact and a deferred, not-yet-quantified operational consequence — is informed by two precedents already present in the accepted baseline. This Revision 5 corrects Revision 4's characterization of the second of these as a complete structural match; it is not.

```text
Precedent 1 — Rev3 Part I.6 / Part K: Revision 3 fixed the room-type
    LIST (four rooms) but explicitly did not fix the numeric corpus
    count per room type — that was left to a later, separately
    accepted Evaluation Threshold and Acceptance Plan. The same
    division of labor (scope decision names WHAT; threshold plan
    decides HOW MUCH/WHEN) is used here for the fifth room type. This
    precedent is a full structural match: both cases separate a
    scope-level WHAT decision from a threshold-level HOW MUCH/WHEN
    decision, without changing the size or shape of an already-fixed
    corpus population.

Precedent 2 — Rev3 Part H.3 (FreeSpaceRegion), qualified: FreeSpaceRegion
    is an accepted category in the Operational Bounded Coverage Matrix
    with an explicit "Deferred" status — accepted as a real category,
    with production and evaluation obligations deliberately not
    activated. This precedent is directionally supportive but not a
    full structural match to the toilet-room case.

    FreeSpaceRegion represents capability-level deferral within an
    already-fixed corpus population: deferring it does not change the
    room-type grid, per-room floors, denominators, or corpus totals
    that Rev13 already fixes.

    Toilet room represents a corpus-population-axis deferral, because
    its activation changes the room-type grid, per-room floors,
    denominators and total corpus counts (Section 9.1) — a
    structurally larger-consequence kind of deferral than
    FreeSpaceRegion's.

    Decision 2 (Section 13) therefore does not rely on FreeSpaceRegion
    as a complete precedent for the toilet-room two-stage model. It
    separately confirms the internal consistency of the two-stage
    toilet-room status model on its own terms, informed by, but not
    solely resting on, this precedent.
```

Taken together: Precedent 1 fully supports the general governance pattern of separating a scope-level WHAT decision from a threshold-level HOW MUCH/WHEN decision. Precedent 2 supports, directionally but not completely, the narrower idea that an accepted category can carry a real "Deferred" operational status without full activation. These precedents support the two-stage model's overall shape without amounting to a full structural precedent for a corpus-population-axis deferral specifically — the toilet-room case is the first instance of that more consequential kind of deferral in the accepted document set (see also Risk R-1, Section 12). Section 13, Decision 2, therefore presents this assessment for explicit Owner confirmation as a substantive governance judgment, not as a formality already fully settled by precedent.

A further and distinct timing difference from these precedents is flagged as a genuine first-of-its-kind situation, not resolved by precedent alone: this is the first time a scope change is proposed *after* a numbered, Accepted Evaluation Threshold and Acceptance Plan (Rev13) already exists and already encodes the previous room-type count into fixed totals (63 development / 103 held-out images; see Section 9). Previously, the room-type list was fixed once (Rev3) before Rev13 was first prepared, so no such version-skew window existed. This is recorded as Risk R-1 in Section 12, not silently absorbed into the precedent argument above.

---

## 7. Normative Bathroom / Toilet-Room Distinction

### 7.1 `bathroom`

A room whose primary function includes bathing or showering.

It may contain:

- a bathtub;
- a shower;
- a washbasin;
- a toilet, if this is a combined space.

### 7.2 `toilet room`

A separate sanitary room whose primary function is to house a toilet.

It:

- typically does not contain a bathtub;
- may not contain a shower;
- may contain a small washbasin;
- must not be automatically merged with `bathroom` into one room type.

### 7.3 Combined (bath + toilet) spaces

No separate active room type `combined bathroom` is introduced by this Revision 5. A combined bath-and-toilet space continues to be classified as `bathroom` (Section 7.1, fourth bullet — "a toilet, if this is a combined space"), exactly as already implied by Revision 3's bathroom definition. Nothing in the baseline documents analyzed in Section 4 requires or implies a separate `combined bathroom` room type as a necessary consequence of adding `toilet room`; this Revision 5 therefore does not introduce one.

### 7.4 Classification precedence rule

Where a photographed room could arguably fit either definition (for example, a small room with only a toilet and a washbasin but no visible tub or shower stall), the following precedence applies for scope-definition purposes only:

```text
1. If a bathtub or shower is visibly present -> bathroom.
2. If neither a bathtub nor a shower is visibly present, and a
   toilet is the primary visible fixture -> toilet room.
3. If a toilet is present together with a bathtub or shower in the
   same room -> bathroom (combined space, Section 7.3).
```

This precedence rule is a scope-definition clarification only. It is not an annotation instruction, an annotation-contract provision, or a semantic-case rule — those remain the sole responsibility of the future Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract (Contract 7) and are not authorized, drafted, or anticipated here beyond this bounded clarification (Section 14).

---

## 8. Preserved Exclusions and Unchanged Boundaries

The following Revision 3 provisions are preserved without change, verified by the full re-reading recorded in Section 4:

```text
- One photograph per operation (Rev3 Part E.2).
- One room per operation (Rev3 Part E.2).
- One operation boundary (Rev3 Part D, Part E).
- Licensed / synthetic / deliberately staged data only (Rev3 Part
  E.2, Part I.3, Part M).
- Prohibition on real user photographs (Rev3 Part E.3, Part M.2).
- Exclusion of multi-image, panorama, floor plan and video input
  (Rev3 Part E.3).
- Accepted PerceptionResult four-outcome operation matrix (Rev3
  Part F) — SceneResult / InsufficientEvidenceResult / FailureResult
  / RejectedResult, unchanged.
- Accepted evidence boundaries (Rev3 Part G — EvidenceReference
  union, BoundingBoxReference mandatory normalized form).
- Accepted provider/model sequencing and eligibility boundary (Rev3
  Part L).
- Accepted privacy/test-data three-decision boundary (Rev3 Part M;
  operationalized by Test Data Handling Decision Rev9).
- Absence of implementation authorization (Rev3 Part O, Part T).
- Absence of repository persistence for Revision 3, Revision 4, and
  this Revision 5.
```

No provision in this list is expanded, narrowed, reinterpreted, or made conditional on toilet room by this Revision 5. The full impact analysis in Sections 9–10 identifies the only provisions that a fifth room type does, in fact, touch — everything not named there is unaffected by inference from silence, not by omission.

---

## 9. Rev13 (Evaluation Threshold and Acceptance Plan) Impact Analysis

Evaluation Threshold and Acceptance Plan Revision 13 is **not modified, reopened, or reinterpreted** by this document. The following is a complete inventory of the Rev13 provisions whose text is keyed to a four-room-type count, together with the precise effect of a five-room accepted scope on each. This analysis is unchanged from Revision 4 (Section 2A confirms it is not a corrected item). Every citation below is to the actual accepted Rev13 text read in Section 4.

### 9.1 Directly room-count-keyed provisions

```text
§2, Fixed accepted inputs, bullet "Room types: living room, bedroom,
    kitchen and bathroom." — This sentence is now a textually
    accurate description of the room types Rev13 was written against,
    but no longer a complete description of the accepted Bounded
    Scope room-type list once this Revision 5 is accepted. Rev13's
    own text is not wrong; it is scoped to the four legacy room
    types only, and that scoping becomes explicit rather than
    implicit the moment Revision 5 is accepted.

§10.1, Ordinary grid — "Four room types x six scenario families...
    Development contains two unique images per cell (48); held-out
    contains three (72)." This is the single most directly affected
    provision. It defines a fixed 4x6 grid. Toilet room is NOT added
    as a fifth row of this grid by this Revision 5. Until a separate
    Rev13 alignment decision (Section 11) extends this grid, toilet
    room has zero ordinary-grid cells, zero development images, and
    zero held-out images.

§10.2, Special groups — low-information (3/6), empty-or-near-empty
    (2/5), meaningful partial-scene (5/10), genuine insufficient-
    evidence (5/10). These groups are pooled cross-room, not
    partitioned per room type (consistent with Rev3 Part I.2's
    "обязательные cross-room scenario groups" framing). They are
    therefore NOT directly room-count-keyed and require no numeric
    change merely because a fifth room type is accepted. They would
    only be affected if a future Rev13 successor chooses to draw
    toilet-room images into these pools, which this Revision 5 does
    not decide.

Corpus totals — "Totals remain 63 development and 103 held-out
    unique semantic images" (§10.2). These totals are arithmetic
    outputs of the 4x6 ordinary grid (48) plus the four special-group
    minimums (15 development; 31 held-out held-out-side). They are
    accurate descriptions of the CURRENT (four-room) Rev13 corpus and
    remain accurate as a description of Rev13 as it stands. They do
    not automatically become "65" or any other number by virtue of
    this Revision 5 — no corpus recalculation is performed or implied
    here (Section 14).

§16, Coverage inventory and sealing readiness — relation GT support
    floors ("Adjacency: 20 overall and >=5 per applicable room type
    across >=3 scenes"; similarly for Containment and Blocking, 15
    overall / >=4 per applicable room type). These floors are stated
    generically as "per applicable room type," so they do not name a
    fixed count of rooms in their own text — but their overall
    figures (20, 15, 15) were sized against a four-room applicable
    population. If toilet room is later made relation-applicable,
    the overall floors may need re-derivation; this Revision 5 does
    not perform that re-derivation.

§6.3, Category correctness support rule — "at least four matched
    pairs overall and at least four matched pairs in every room type
    for which a category floor is reported." This rule is already
    written generically per room type and would apply automatically
    to toilet room once (and only once) a category floor is reported
    for it — which requires the corpus/threshold alignment this
    Revision 5 defers.

§18, Pre-acceptance score-stability appendix — every "overall /
    room" pair (ENT-SE-P, ENT-SE-R, ENT-OBJ-P, ENT-OBJ-R,
    ENT-SE/OBJ-CAT, ENT-HALL, ENT-SEV-HALL, Relation F1 rows,
    REL-*-UNSUP, Unknown Blocking, SPACETYPE) is written generically
    ("per applicable room") and would extend automatically in FORM
    to a fifth room type, but every numeric boundary in this table
    (e.g. SPACETYPE ">=0.95 per room", minimum N=4/5/8/10/20 lattices)
    was derived against a four-room population and is not
    re-derived, validated, or extended to toilet room by this
    Revision 5.

§19, Metric Registry — every "per room" aggregation instruction
    (e.g. ENT-SE-P: "Wilson 95%; micro-pooled overall and per-room")
    is mechanically room-count-agnostic in its aggregation RULE, but
    every fixed numeric threshold in the same rows (e.g. ENT-SE-P
    ">=0.80 overall; >=0.70 per applicable room") was set against the
    four-room population and is not re-derived here.
```

### 9.2 Provisions confirmed NOT materially affected

```text
- §3 (governance classes, denominator class contract) — room-count
  independent.
- §4 (geometry, evidence contracts) — room-count independent.
- §7 (relation identity, matching, exhaustive taxonomy) — the
  matching LOGIC is room-count independent; only the room-type
  APPLICABILITY of specific relation types (owned by future
  Contract 3, not by Rev13 itself) is room-count-dependent.
- §8 (unknown/determinability contract) — room-count independent.
- §9 (ordinal confidence and calibration) — room-count independent.
- §12 (fixture suites) — fixture subtypes are operational/technical
  (provider timeout, malformed response, unreadable input, C.2/C.3
  rejection reasons) and are not keyed to room type at all. Adding a
  fifth room type has no effect on fixture counts or subtypes.
- §14 (partial-scene / unseen-claim contract), §17 (aggregation and
  uncertainty), §20–§27 — room-count independent as written.
```

### 9.3 Resulting status of Rev13

Rev13 remains internally consistent and fully valid as an accepted description of the evaluation plan for the four legacy room types. It does not become incorrect, contradicted, or partially void upon acceptance of this Revision 5. It becomes, instead, explicitly incomplete relative to the newly accepted five-room scope — a gap this Revision 5 names precisely (Section 9.1) rather than leaving implicit, and prohibits from being silently closed by ordinary corpus or annotation work (Section 11, Section 14).

This Revision 5 does not decide whether that gap should be closed by (a) a full successor revision to Rev13 that re-derives the grid, totals, and per-room floors for five rooms, or (b) a narrower supplemental alignment decision that adds toilet-room-specific population and threshold rows without reopening the four-room figures already accepted. Both remain structurally possible under the governance model read in Section 4; the choice is reserved to the Project Owner and/or the architect preparing that future document (Section 12, open issue). This is distinct from, and not resolved by, the Contracts 3/7 drafting-model recommendation in Section 10.1, which addresses a different question (how the future contracts should be shaped now, not how Rev13 itself will later be closed).

---

## 9A. Module Applicability Profile Rev13 — Additional Identified Dependency

The Module Applicability Profile Revision 13 (Section 4, baseline 4) was independently found to be room-count-dependent and is recorded here for completeness. This finding is unchanged from Revision 4.

```text
Section 2, "Current Bounded Scope / Included now" — lists "living
    room; bedroom; kitchen; bathroom" as part of the current bounded
    scope description.
IMPL-04 (matrix row) — "Implemented/testable support for four room
    types, one-image/one-room/one-operation boundary..." — names
    "four room types" as an explicit completion criterion for Full
    bounded-scope implementation readiness.
EVAL-01 (matrix row) — "Verified results for all four room types..."
    — same dependency, for Formal full bounded-scope evaluation
    evidence.
```

This Revision 5 does **not** edit the Module Applicability Profile. It records that, once Revision 5 is accepted, IMPL-04 and EVAL-01's "four room types" language will describe the legacy subset only, mirroring the Rev13 gap in Section 9.3, and that the Module Applicability Profile will itself need a future, separately authorized alignment pass. This is listed as an additional traceability item (Section 15) and an additional open issue (Section 12), not as a defect requiring correction inside this document.

---

## 9C. Candidate A Test Data Handling Decision Rev9 — Impact Confirmation

Rev9 was fully verified (Section 4, baseline 5). It contains exactly one room-type citation. This finding is unchanged from Revision 4.

```text
§2, Fixed accepted inputs, item 5: "Tier 1 room types: living room,
    bedroom, kitchen and bathroom."
```

This is a citation of the Bounded Scope Decision's room-type list, not an independent normative rule about room types — Rev9 governs data handling (acquisition, licensing, privacy, storage, sealing, provider exposure), and none of its normative sections (Sections 3–22, verified by full-text search per Section 4) key any rule, count, or threshold to the number or identity of room types. The only effect of this Revision 5 on Rev9 is that the §2 item 5 citation becomes, like the equivalent Rev13 and Module Applicability Profile citations, a description of the legacy four-room subset rather than the complete accepted list. This is a textual-alignment item only (Section 15), carrying no governance risk on its own, and is not corrected here because Rev9 is not authorized to be edited by this document (Section 14).

---

## 10. Supporting Contracts 1–10 Impact Analysis

None of Contracts 1–10 has been drafted yet (Contracts 1–10 Preparation and Dependency Plan Rev4, read in Section 4; confirmed Not Started by Module Applicability Profile Rev13, matrix row CON-01). This analysis addresses the **future scope and acceptance boundary** each contract will need to honor once drafted, not an edit to an existing contract text. The findings themselves are unchanged from Revision 4; the Contract 3 and Contract 7 rows are updated only to point to the new Section 10.1 recommendation (Section 2A, item 5).

| Contract | Room-type dependency found | Effect of accepting this Revision 5 |
|---|---|---|
| Contract 1 — Category Vocabulary and Synonym Contract | Its own acceptance boundary (Preparation Plan §2) states it "does not redefine the four permitted room types, which are fixed by Bounded Scope Decision Rev3." | This boundary sentence will need to be re-stated against Revision 5 (five room types, fixed by this document once accepted) at the time Contract 1 is actually drafted. No new category/subtype vocabulary is required by toilet room itself — `toilet` already exists as a fixture-level concept nested under bathroom in the accepted domain model; whether it needs a distinct top-level Object subtype is a Contract 1 drafting question, not decided here. |
| Contract 2 — Relation Annotation and Applicability Contract | Defines relation semantics in general, not per room type. | Not materially affected. Room-type-specific applicability is explicitly Contract 3's job (Preparation Plan §2, Contract 2 acceptance boundary), not Contract 2's. |
| Contract 3 — Relation Type × Room Type Applicability Matrix | Directly and entirely room-count-keyed: "Operationalize, for each of the four permitted room types... which relation types and endpoint combinations are applicable." | Most directly affected future contract. Section 10.1 records an explicit, non-binding recommendation that this contract be designed for the five-room target model from the outset, with toilet-room rows marked Deferred until Rev13 alignment. This is a recommendation for future drafting governance only; it does not authorize drafting (Section 12, R-2; Section 13, Decision 9). |
| Contract 4 — Best-Effort Evidence, Provenance and Determinability Annotation Contract | Room-type independent (keyed to evidence kind, provenance enum, best-effort field taxonomy). | Not affected. |
| Contract 5 — Confidence Generation and Normalization Contract | Room-type independent. | Not affected. |
| Contract 6 — Unknown/Determinability Annotation and Pairing Contract | Annotation-unit pairing is keyed to entity subtype, confidence and provenance fields, not room type directly. | Not materially affected; corpus composition (which rooms actually appear) is a downstream consequence of Contract 7/corpus authorization, not of Contract 6 itself. |
| Contract 7 — Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract | Directly and entirely room-count-keyed: "the four-room-type x six-scenario-family ordinary grid" and the corpus totals (63/103) "cited, not decided" from Rev13. | Second most directly affected future contract. Section 10.1 records the same recommendation as for Contract 3: design for the five-room target model from the outset, with toilet-room population entries marked Deferred / evaluation-activation-pending until Rev13 alignment. Recommendation only, not drafting authorization (Section 12, R-2; Section 13, Decision 9). |
| Contract 8 — Unseen-Claim Evaluation Artifact Contract | Depends on Contract 7's case population, not on room type directly. | Indirectly affected only insofar as Contract 7 is affected; no independent room-type dependency identified. |
| Contract 9 — Operational and Contract Violation Fixture Subtype Registry | Fixture subtypes (provider timeout, malformed response, unreadable input, C.2/C.3 rejection reasons) are operation-level and room-type-independent, confirmed by full re-reading of Rev13 §12.1–§12.4. | Not materially affected. Listed here, as required, precisely to record that the check was performed and found negative. |
| Contract 10 — Conformance Field Inventory and Validation Contract | Integration layer; imports Contracts 1, 2, 4, 5, 6, 8, 9 and Rev9 identity fields. Does not itself enumerate room types (its Room-related field requirement is "exactly one Room," not a per-room-type rule). | Not directly affected; inherits any Contract 1/3/7 changes only through its normal import mechanism. No independent action required at Contract 10 level. |

Nothing in this Section 10 authorizes drafting, revising, or finalizing any of Contracts 1–10, and nothing here modifies the Preparation and Dependency Plan Revision 4's dependency graph, terminology table, or preparation order (Section 14).

### 10.1 Recommended drafting model for Contracts 3 and 7 (non-binding recommendation)

```text
Contracts 3 and 7 should be designed for the five-room target model
from the outset.

Rows, cells or population entries related to toilet room must be
marked Deferred / evaluation-activation-pending until the separate
Rev13 alignment decision is accepted.

No toilet-room corpus, annotation, metric or evaluation obligation is
created before that alignment.
```

Rationale: Module-Completion-First; prevention of a subsequent rewrite of Contract 3 and Contract 7 to retrofit a fifth room; and preservation of an honest operational block on toilet-room activity until Rev13 alignment, made structurally visible in the contracts themselves rather than only in this Bounded Scope Decision.

This is a recommendation for future drafting governance. It is not drafting authorization. It does not advance, shorten, or bypass the separate, explicit Project Owner authorization required before Contracts 1–10 drafting may begin (Section 11.2, step 8; Section 14).

---

## 11. Activation and Sequencing Rules

### 11.1 Immediate rule upon acceptance of this Revision 5

```text
Toilet room MUST NOT be used in:
- Tier 1 corpus preparation or creation;
- annotation of any kind;
- any Layer 3 metric computation;
- any threshold, category-floor, or relation-applicability
  determination;
- any formal or development-stage evaluation run;

until a separate Rev13 alignment decision (Section 9.3) or successor
revision explicitly activates it. This prohibition exists
independently of, and in addition to, the pre-existing prohibition
on any corpus/evaluation work absent separate authorization (Rev3
Part O; Rev13 §26; Rev9 throughout).
```

### 11.2 Minimum governance sequence

This sequence is unchanged from Revision 4, updated only to reference Revision 5 in place of Revision 4 where the sequence names this document.

```text
1. Bounded Scope Decision Rev5 — drafting (this document).
2. One full consolidated pre-review pass (Section 17, self-performed;
   an independent architect review is a separate, later governance
   event not performed by this document). Note: an independent
   consolidated review of the prior Revision 4 draft has already
   occurred and is what produced the correction set closed by this
   Revision 5 (Section 2A).
3. Project Owner review and, if accepted, Project Owner Acceptance
   of Revision 5.
4. Separate, explicit repository persistence authorization for
   Revision 5 (not granted by acceptance alone; not granted here).
5. Upon (3) and, where the Project Owner requires it, upon (4):
   Revision 5 supersedes Revision 3 in full (Section 16).
6. Rev13 alignment: a separate Project Owner-authorized governance
   event deciding whether toilet-room evaluation operationalization
   is closed by (a) a full Rev13 successor revision re-deriving the
   grid/totals/floors for five room types, or (b) a narrower
   supplemental alignment decision adding toilet-room-specific rows
   without reopening the four-room figures. This choice is not made
   by this Revision 5 (Section 9.3, Section 12).
7. A corresponding synchronization pass on the Contracts 1–10
   Preparation and Dependency Plan (its own next revision, not
   "Contract 1 Revision 2," since no Contract 1 draft yet exists) —
   updating, at minimum, Contract 1's and Contract 3's stated
   acceptance-boundary text to reference the correct room-type count
   and, where the Rev13 alignment in step 6 has already resolved the
   Contract 3 sequencing question, reflecting that resolution and the
   Section 10.1 recommendation. See also Section 11.3.
8. Separate, explicit Project Owner authorization to begin drafting
   Contracts 1–10 (already a required, independent, not-yet-granted
   step per Preparation Plan Rev4 §9 and Module Applicability Profile
   Rev13, CON-01; this Revision 5 does not change that gating and
   does not itself grant it).
9. Contract 1 (and the rest of Contracts 1–10, in the dependency
   order already fixed by the Preparation Plan) drafted for the
   first time, incorporating the then-current, correctly-aligned
   room-type count and, for Contracts 3 and 7, the Section 10.1
   recommendation.
10. Separately, at a Project Owner-determined point no later than
    required by the Module Applicability Profile's own sequence: a
    future alignment pass on the Module Applicability Profile's
    "four room types" citations (Section 9A), as its own governance
    event.
```

Step 6 does not have to occur strictly before step 7 or step 8 if the Project Owner prefers to authorize Contracts 1–10 drafting against the legacy four-room scope first and reconcile toilet room later — that ordering choice remains open and is not resolved by this Revision 5 (Section 12, R-2). The Section 10.1 recommendation addresses the shape Contracts 3 and 7 should take *when* drafted, not *when* drafting itself may begin.

### 11.3 Cross-session governance coordination — Preparation Plan Revision 5 draft (unaccepted, non-authoritative)

A separate, local, unaccepted and unpersisted draft exists from a different working session: `Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev5.md` (not present in this repository as of this document's preparation date — Section 4 confirms only Preparation Plan Revision 4 exists on disk). That draft had already attempted to revise Contract 1 and downstream boundaries around a "Master Vocabulary" model.

```text
The existing unaccepted Preparation Plan Revision 5 draft must not be
accepted independently without reconciliation.

After acceptance of this Bounded Scope Decision successor, a new
combined Preparation Plan successor revision must reconcile:

- the Master Vocabulary / Active Evaluation Profile model;
- the five-room target scope;
- toilet room evaluation-activation-pending status;
- Contract 3 and Contract 7 deferred rows/cells;
- downstream Contract 1, 3, 6, 7, 8, 9 and 10 boundaries.

The prior unaccepted Plan Revision 5 remains non-authoritative source
material only.
```

This Revision 5 does not import, edit, or otherwise act on that draft's text (Section 14). It is recorded here only so the two independent working threads are not later reconciled by accident or omission.

---

## 12. Risks and Unresolved Issues

```text
R-1 (governance novelty, not a defect): This is the first scope
    change proposed after an Accepted, numbered Evaluation Threshold
    and Acceptance Plan (Rev13) already existed and already encoded
    the prior room-type count into fixed totals. No prior precedent
    in the accepted document set covers exactly this sequencing.
    Mitigation: Section 9 names the exact affected provisions and
    Section 11.1 imposes an explicit interim prohibition, so the
    novelty does not translate into silent scope creep.

R-2 (open sequencing question; partially addressed by
    recommendation, not decided): Whether Contract 3 and Contract 7
    should be drafted for the first time against the legacy four
    rooms (with toilet room added by a later contract revision) or
    against five rooms from the outset (with toilet-room rows marked
    Deferred, mirroring the FreeSpaceRegion pattern as qualified in
    Section 6.2) is addressed by an explicit, non-binding
    recommendation in Section 10.1 (five-room target model, deferred
    toilet-room rows). The recommendation does not itself authorize
    drafting, and the separate question of WHEN Contracts 1–10
    drafting may begin remains fully reserved to the Project Owner
    (Section 11.2, step 8; Section 13, Decision 9).

R-3 (textual, low severity): Three already-accepted documents (Rev13
    §2; Module Applicability Profile §2/IMPL-04/EVAL-01; Rev9 §2 item
    5) contain "four room types" / named-four-room citations that
    will read as describing the legacy subset, not the complete
    accepted list, once this Revision 5 is accepted. None of these
    citations is edited by this document (Section 14). Left
    unaddressed indefinitely, this could confuse a future reader who
    consults only one of these documents in isolation rather than
    together with this Revision 5. Mitigation: Section 15's
    traceability table names all three explicitly.

R-4 (internal-consistency check requested by the drafting
    instructions, corrected in this Revision 5): Whether the
    two-stage "accepted scope / deferred evaluation activation"
    model (Section 6.1) is itself coherent was specifically checked
    (Section 6.2) rather than assumed. Two precedents in the accepted
    baseline were examined: one (Rev3 Part I.6/Part K, numeric-count
    deferral) is a full structural match; the other (Rev3 Part H.3,
    FreeSpaceRegion) is qualified as directionally supportive but not
    a complete structural match, because it is a capability-level
    deferral within an already-fixed corpus population, whereas
    toilet room is a corpus-population-axis deferral. No internal
    contradiction was found on the model's own terms. This is
    recorded as a completed check, not an open issue, but is listed
    here for visibility — Section 13, Decision 2, asks the Project
    Owner to confirm that assessment rather than presenting it as
    self-evidently settled or as fully proven by precedent.

R-5 (unaddressed by design): Whether `toilet` requires a new,
    distinct top-level Object/StructuralElement subtype in the future
    Contract 1 vocabulary, or is adequately covered by an existing
    fixture-level concept, is a Contract 1 drafting question. This
    Revision 5 does not answer it, consistent with the instruction
    not to prepare or prejudge Contracts 1–10 content.
```

No governance conflict requiring an immediate Owner ruling beyond the Owner Decisions already listed in Section 13 was found. R-2 and R-5 are open questions for a *future* governance event, not defects in this Revision 5. Section 13, Decision 10, records the Project Owner's acknowledgment of this full risk register without itself authorizing any additional mitigation, corpus, implementation, or downstream work.

---

## 13. Owner Decision Entries (Proposed)

```text
Decision 1 — Acceptance of Revision 5: Accept / Revise / Reject this
    Revision 5 as the successor candidate to Revision 3, superseding
    the Revision 4 draft as the active proposal under review. (Not
    yet decided.)

Decision 2 — Two-stage status model confirmation: Confirm that the
    "accepted scope / deferred evaluation activation" model (Section
    6.1), as assessed and qualified in Section 6.2, is internally
    consistent with the existing governance architecture and is
    adopted as the applicable status model — confirmed here, on its
    own terms, in advance of and independent from any decision to add
    a specific room type under it.

Decision 3 — Addition of toilet room: Accept toilet room as the
    fifth active room type within the Residential-first segment,
    under the two-stage status model confirmed by Decision 2.

Decision 4 — Preservation of Residential-first: Confirm that the
    accepted segment remains Residential-first and is not expanded,
    narrowed, or reinterpreted by this Revision 5.

Decision 5 — Bathroom / toilet-room normative distinction: Accept
    the normative distinction between `bathroom` (Section 7.1) and
    `toilet room` (Section 7.2) as defined.

Decision 6 — No separate "combined bathroom" room type: Confirm that
    a separate active room type `combined bathroom` is not introduced
    by this Revision 5, and that combined bath-and-toilet spaces
    continue to be classified as `bathroom` (Section 7.3).

Decision 7 — Classification precedence rule: Confirm the
    classification precedence rule (Section 7.4) as a scope-
    definition clarification only — a scope rule, not an annotation
    instruction and not a provision of the future Semantic Case,
    Scenario, Sufficiency and Completeness Annotation Contract
    (Contract 7).

Decision 8 — Rev13 alignment requirement: Confirm that Evaluation
    Threshold and Acceptance Plan Revision 13 is not modified by this
    document, that it remains fully valid for the four legacy room
    types, and that a separate future alignment decision or successor
    revision (Section 9.3, Section 11.2 step 6) is required before
    toilet room may be used in any corpus, annotation, metric, or
    evaluation activity.

Decision 9 — Supporting Contracts impact acknowledgment, including
    recommended Contracts 3/7 drafting model: Confirm the Section 10
    impact findings (Contracts 3 and 7 most directly affected;
    Contracts 1, 2, 4, 5, 6, 8, 10 affected only indirectly or not at
    all; Contract 9 confirmed unaffected), and confirm the Section
    10.1 recommendation — that Contracts 3 and 7 be designed for the
    five-room target model from the outset, with toilet-room rows,
    cells or population entries marked Deferred / evaluation-
    activation-pending until Rev13 alignment — as a recommendation
    for future drafting governance only, without authorizing any
    Contract 1–10 drafting, revision, or acceptance.

Decision 10 — Risk register acknowledgment: Confirm that the risks
    listed in Section 12 have been reviewed and that no additional
    mitigation is required at this governance stage beyond the
    controls already stated in this Decision. This Decision does not
    authorize corpus, implementation, or any downstream work.

Decision 11 — No implementation, schema, corpus or provider
    authorization: Confirm that this Revision 5, like Revision 3 and
    the Revision 4 draft before it, authorizes none of: repository
    persistence, corpus preparation or creation, provider/model
    evaluation or selection, Implementation Package preparation,
    implementation, ADR creation, or any edit to Rev13, the Contracts
    1–10 Preparation and Dependency Plan (including its own existing
    unaccepted Revision 5 draft, Section 11.3), Test Data Handling
    Decision Rev9, or the Module Applicability Profile.
```

---

## 14. Explicit Non-Authorization Boundary

This Revision 5 does not authorize, and repeats/extends the equivalent Revision 3 and Revision 4 boundary (Rev3 Part O; Rev4 Section 14) to explicitly include:

```text
- Modification, deletion, or repository change of Revision 3 or
  Revision 4.
- Repository persistence already completed: verification-access
  persistence of this draft only (commit
  bc860f54d797ee8cdb2b2201f61676b3c295528a). Not authorized: any
  further persistence representing acceptance, finalization,
  supersession synchronization, downstream authorization, or edits to
  other governance documents.
- Staging, commit, or push of any file as a result of this document.
- ADR creation or ADR_INDEX/README modification.
- Any edit to Evaluation Threshold and Acceptance Plan Revision 13.
- Any edit to the Contracts 1–10 Preparation and Dependency Plan,
  including independent acceptance of the existing unaccepted
  Preparation Plan Revision 5 draft without the reconciliation
  described in Section 11.3.
- Any edit to Candidate A Test Data Handling Decision Revision 9.
- Any edit to the Module Applicability Profile Revision 13.
- Drafting, revising, or accepting any of Contracts 1–10, including
  under the Section 10.1 recommended drafting model.
- Corpus recalculation of any kind (the 63/103, 48/72, and per-room
  floor figures in Rev13 are cited, not recomputed, anywhere in this
  document).
- Tier 1 corpus preparation, creation, annotation, or fixture work
  involving toilet room or any other room type.
- Provider/model evaluation, contact, or selection.
- Implementation Package preparation or implementation.
- Any use of toilet room in an active corpus, annotation pass,
  metric computation, threshold determination, or evaluation run
  (Section 11.1).
```

---

## 15. Traceability Table

| Revision 5 provision | Source basis | Status |
|---|---|---|
| Segment retained: Residential-first | Rev3 Part I; Rev13 §2; Rev9 §2 item 5 | Unchanged, cited |
| Room types 1–4 (living room, bedroom, kitchen, bathroom) | Rev3 Part I, Part T Decision 6 | Unchanged, cited |
| Room type 5 (toilet room) — added | Explicit Project Owner Decision (original drafting request); no prior baseline document names toilet room | Carried forward from Revision 4, unchanged |
| Bathroom/toilet-room normative distinction (Section 7) | New in Revision 4; not present in Rev3, Rev13, Preparation Plan, Rev9, or Module Applicability Profile | Carried forward from Revision 4, unchanged |
| One image / one room / one operation; source-class and exclusion boundaries (Sections 5, 8) | Rev3 Part E | Unchanged, restated in full |
| PerceptionResult four-outcome matrix (referenced, not restated in full) | Rev3 Part F | Unchanged, not reopened |
| Evidence boundary (referenced) | Rev3 Part G | Unchanged, not reopened |
| Provider/model sequencing (referenced) | Rev3 Part L | Unchanged, not reopened |
| Privacy/test-data three-decision boundary (referenced) | Rev3 Part M; Rev9 | Unchanged, not reopened |
| Rev13 §2, §10.1, §10.2, §6.3, §16, §18, §19 room-count dependencies | Rev13, read in full (Section 4) | Identified as affected; not modified (Section 9) |
| Rev13 fixture suites (§12) confirmed unaffected | Rev13, read in full (Section 4) | Verified negative finding (Section 9.2) |
| Contract 1, 3, 7 future acceptance-boundary dependency on room count | Contracts 1–10 Preparation and Dependency Plan Rev4, §2 (Section 4) | Identified as affected; not modified (Section 10) |
| Contract 9 confirmed unaffected | Contracts 1–10 Preparation and Dependency Plan Rev4, §2 | Verified negative finding (Section 10) |
| Module Applicability Profile §2, IMPL-04, EVAL-01 room-count dependency | Module Applicability Profile Rev13 (Section 4, baseline 4) | Identified as affected; not modified (Section 9A) |
| Rev9 §2 item 5 room-count citation | Test Data Handling Decision Rev9 (Section 4, baseline 5) | Identified as affected; not modified (Section 9C) |
| Two-stage status model (Section 6.1) precedent basis | Rev3 Part I.6/Part K (full precedent, numeric-count deferral); Rev3 Part H.3 (FreeSpaceRegion, qualified as directionally supportive only) | Corrected in this Revision 5 (Section 6.2; Section 2A, C-01) |
| Corrected governance sequence (Section 11.2) | Preparation Plan Rev4 §0–§9; Module Applicability Profile Rev13 §3, CON-01 | Verified against actual document state; carried forward from Revision 4, unchanged |
| Owner Decision dependency order (Section 13) | Consolidated review of Revision 4, mandatory finding C-02 | Corrected in this Revision 5 (Section 2A, C-02) |
| Atomic split of bathroom/toilet Owner Decisions (Decisions 5–7) | Consolidated review of Revision 4, strengthening improvement S-01 | New in this Revision 5 (Section 2A, S-01) |
| Risk register acknowledgment (Decision 10) | Consolidated review of Revision 4, strengthening improvement S-02 | New in this Revision 5 (Section 2A, S-02) |
| Contracts 3/7 recommended drafting model (Section 10.1) | Consolidated review of Revision 4, strengthening improvement S-03 | New in this Revision 5 (Section 2A, S-03); non-binding recommendation |
| Cross-session reconciliation note for unaccepted Preparation Plan Revision 5 draft (Section 11.3) | Cross-session governance coordination instruction | New in this Revision 5 (Section 2A, item 6) |

---

## 16. Supersession Rule

```text
This Revision 5 does not supersede Revision 3 upon preparation,
publication, or delivery of this document. It is a proposed
successor candidate only.

Revision 3 remains the sole authoritative Candidate A Bounded Scope
Decision, in full, without any modification, until the Project Owner
explicitly accepts this Revision 5.

The Revision 4 draft was never accepted and never became
authoritative. It is not edited, moved, or deleted by this document.
As of this document's preparation date, Revision 4 is superseded as
the active proposal under Project Owner review by this Revision 5;
Revision 4's text remains on disk, unmodified, as a historical draft
only.

Upon explicit Project Owner Acceptance of this Revision 5 (Section
13, Decision 1), and only then, this Revision 5 supersedes Revision 3
in full — directly, not through Revision 4, since Revision 4 never
itself became authoritative. No partial or conditional supersession
is defined: either Revision 5 is accepted and fully replaces Revision
3, or it is not accepted and Revision 3 continues to govern unchanged.

Repository persistence of this Revision 5 (i.e., committing this file
so that it is no longer merely a working draft) is a separate,
explicit authorization, distinct from acceptance itself, exactly as
was true for Revision 3 and the Revision 4 draft.
Neither acceptance nor persistence has occurred as of this document's
preparation date.
```

---

## 17. Pre-Review Completeness Self-Check

This section records a single, self-performed completeness pass against the closed correction set (Section 2A) and the structural completeness of this document as a standalone successor, performed once, without opening a second exploratory round.

```text
[x] Document metadata present, distinguishes Draft/Not-Accepted
    status from Revision 3's Accepted status, and correctly states
    the relationship to the unaccepted Revision 4 draft.
[x] Revision 4 change summary restated unchanged (Section 2); new
    Revision 5 changelog added and limited to exactly six items
    (Section 2A), matching the required changelog scope precisely.
[x] Mandatory correction C-01 fully resolved: Section 6.2 no longer
    presents FreeSpaceRegion as a complete structural precedent; the
    capability-level vs. corpus-population-axis distinction is
    explicit; Section 12 R-4 updated to match; Section 15 updated.
[x] Mandatory correction C-02 fully resolved: Section 13, Decision 2
    (two-stage status model) now precedes and is a precondition for
    Decision 3 (toilet room addition); no decision adds toilet room
    ahead of confirming the status model it depends on.
[x] All Owner Decision numbering checked end-to-end: every in-text
    cross-reference to a Decision number (Section 6.2, Section 12
    R-4, Section 13) uses the corrected Revision 5 numbering; no
    reference to a stale Revision 4 Decision number remains.
[x] Decision ordering checked for dependency safety: Decision 2
    before Decision 3; Decisions 5–7 (bathroom/toilet split) and
    Decision 8 (Rev13 alignment) and Decision 9 (Contracts impact)
    all positioned after Decision 3, the toilet-room addition they
    each presuppose.
[x] Strengthening improvement S-01 applied: former bundled Decision 4
    split into three atomic Decisions (5, 6, 7), each confirming one
    independent architectural fact.
[x] Strengthening improvement S-02 applied: new Decision 10 added,
    confirming Section 12's risk register without authorizing
    corpus, implementation, or downstream work.
[x] Strengthening improvement S-03 applied: new Section 10.1 records
    an explicit, non-binding recommendation for Contracts 3 and 7
    (five-room target model, deferred toilet-room rows); Section 10
    table and Section 12 R-2 updated to reference it; framed
    throughout as a recommendation, not drafting authorization.
[x] Cross-session reconciliation note added (Section 11.3) for the
    existing, unaccepted, unpersisted Preparation Plan Revision 5
    draft; that draft's text is not imported, and it is explicitly
    marked non-authoritative source material only.
[x] All five requested baselines, plus the independently identified
    sixth (Module Applicability Profile), remain correctly cited
    (Section 4); no re-verification was required since none of the
    six changelog items touches their content.
[x] Preserved-unchanged list (Residential-first; five target room
    types; one photo/one room/one operation; licensed/synthetic/
    staged-data boundary; bathroom/toilet-room semantic distinction
    other than the atomic Decision split; toilet-room two-stage
    status; Rev13 alignment requirement; Module Applicability Profile
    impact; dependency/sequencing boundaries other than the Section
    10.1 recommendation; Rev3 supersession rule; full
    non-authorization boundary; no schema/corpus/provider/
    implementation authorization) verified intact throughout.
[x] Explicit non-authorization boundary stated in full, extended to
    cover Revision 4 and the unaccepted Preparation Plan Revision 5
    draft (Section 14).
[x] Traceability table maps every substantive provision, including
    every Revision 5 changelog item, to its source (Section 15).
[x] Supersession rule stated, correctly describing Revision 4 as an
    unaccepted, non-authoritative draft superseded only as the active
    proposal, and Revision 5 as superseding Revision 3 directly upon
    acceptance (Section 16).
[x] No edit, modification, staging, commit, or push was performed
    against Revision 3, Revision 4, Rev13, the Preparation Plan (in
    either revision), Rev9, or the Module Applicability Profile
    during preparation of this document. No Owner Acceptance record
    was created.
```

This self-check does not declare this document Accepted. It records only that the document is internally complete against the required correction set and structure and is ready for Project Owner verification.

---

```text
Document status:
Draft — Verification Passed; Awaiting Project Owner Acceptance.

Not Accepted.
Repository persistence authorized for verification access only;
this does not constitute acceptance.

Revision 3 remains authoritative until this Revision 5 is accepted.
Revision 4 was a draft and is superseded by this Revision 5 draft.

Revision:
5 (proposed successor to Revision 3; correction-only successor to the
Revision 4 draft).

Repository persistence:
Completed for verification access only. Commit:
bc860f54d797ee8cdb2b2201f61676b3c295528a. Does not constitute
Project Owner acceptance.

Toilet room:
Accepted as the fifth bounded room type — PENDING Project Owner
acceptance of this Revision 5. Not yet accepted. Operational
evaluation activation additionally pending a separate future Rev13
alignment decision even after Revision 5 itself is accepted.

Rev13, Contracts 1-10 Preparation and Dependency Plan (both the
accepted Revision 4 and the existing unaccepted Revision 5 draft),
Test Data Handling Decision Rev9, Module Applicability Profile:
Not modified. Not reopened beyond the impact-analysis findings
recorded in Sections 9-10 and 9A/9C, and the non-binding Section 10.1
recommendation.

Schema, corpus, provider, and implementation authorization:
Not granted by this document.
```
