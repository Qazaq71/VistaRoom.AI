# Candidate A Evaluation Threshold and Acceptance Plan — Revision 14 (Proposed Successor to Revision 13 — Five-Room Evaluation-Methodology Alignment)

```text
Document type: Proposed Owner Governance Decision (not an ADR; not an
    Implementation Package) — standalone successor candidate
Status: Draft — Awaiting Project Owner Review. Not Accepted.
Revision: 14 (proposed successor to Revision 13; does not modify,
    replace or supersede Revision 13 unless and until separately
    accepted by the Project Owner)
Relationship to Revision 13: Revision 13 remains the sole
    authoritative Evaluation Threshold and Acceptance Plan, in full,
    without any modification, until the Project Owner explicitly
    accepts this Revision 14. Revision 13 is not edited, moved or
    deleted by this document.
Trigger: Candidate A Bounded Scope Decision Revision 5 (Accepted,
    Project Owner, 2026-07-18) added `toilet room` as a fifth active
    room type within the Residential-first segment, under a two-stage
    status model: scope accepted immediately; operational evaluation
    activation explicitly deferred to "a separate Rev13 alignment
    decision or successor revision" (Rev5 §6.1, §9.3, §11.1, §11.2
    step 6). This Revision 14 is that alignment decision, prepared as
    a full successor revision under Rev5's option (a) (Rev5 §9.3).
Prepared by: Claude (Chief Software Architect / Specification Partner)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-18
Repository: Qazaq71/VistaRoom.AI, branch main
Repository persistence: Authorized and completed for review access only.
    This persistence does not constitute Project Owner acceptance;
    Revision 13 remains authoritative until separate acceptance of
    Revision 14.
Implementation: Not authorized by this document
Corpus creation or annotation: Not authorized by this document
Contract 1-10 drafting: Not authorized by this document
```

---

## 1. Revision 14 Change Summary

This is a complete, standalone successor candidate to Revision 13, not a diff or patch note. It restates every Revision 13 provision it does not change, so it can be read, reviewed and (if accepted) adopted without reference to Revision 13's text.

```text
Changed (Revision 13 -> Revision 14):
- §2, Fixed accepted inputs: room-type list extended from four to
  five ("living room, bedroom, kitchen, bathroom" -> "living room,
  bedroom, kitchen, bathroom, toilet room"), carrying the two-stage
  status model from Bounded Scope Rev5 into the evaluation plan for
  the first time.
- §10.1, Ordinary grid: 4 room types x 6 scenario families (24 cells)
  -> 5 room types x 6 scenario families (30 cells). Development
  48 -> 60 images; held-out 72 -> 90 images.
- §10.2, Corpus totals: 63 development / 103 held-out -> 75
  development / 121 held-out unique semantic images. Special-group
  minimums (15 dev / 31 HO) are UNCHANGED — they are cross-room
  pooled, not room-partitioned (Section 4 below).
- §15.1, Annotation-quality room-cell definition: "four room types"
  corrected to "five room types." This provision was NOT named in
  Bounded Scope Rev5's own Rev13 impact inventory (Rev5 §9.1); it is
  an additional finding from this Revision 14's own full re-reading
  of Rev13 (Section 3 below).
- §16, Coverage inventory: relation GT support floors (Adjacency
  20/5; Containment 15/4; Blocking 15/4) are flagged NOT
  re-derivable by formula (Section 9 below) and are left OPEN,
  pending a future Owner Decision informed by actual development
  denominators — consistent with Rev13 §5.2 step 6's existing
  "contract 11 uses actual development denominators" model.
- §18, Score-stability appendix and §19, Metric Registry: every
  "overall / per room" figure is inventoried by category (Section 10
  below); NO numeric threshold is changed by this document. Ten
  Blocking rows with an explicit overall+per-room GT/support count
  are flagged as requiring re-derivation before toilet-room
  activation of those specific rows; the remaining Blocking and all
  Diagnostic room-sensitive rows extend automatically in FORM.
  The literal held-out semantic population figure "103" appearing in
  the §18 "Unexpected rates" row is updated to "121" (Section 10.4).
- Room types 5 (toilet room): operational evaluation activation
  status changes from "not part of any active corpus, annotation,
  metric, or evaluation population" (Rev5 §6.1) to "active for
  evaluation-methodology purposes" upon acceptance of this Revision
  14 — while corpus creation, annotation, provider/model evaluation
  and implementation remain separately not authorized (Section 19).

Not changed (verified by full re-reading of Revision 13 and the
seven other baselines named in Section 2, not by summary or
recollection):
- Governance classes, denominator-class contract (§3).
- Geometry, node/relation/attribute evidence contracts (§4).
- Supporting-contract list and governance route structure (§5),
  except that Section 12 below records the Contract 1-10 and
  Contract 11 sequencing implications of this Revision 14.
- Entity matching, accounting, deterministic error taxonomy (§6),
  except that §6.3's category-correctness support rule is confirmed
  to extend automatically to toilet room once a category floor is
  reported for it (Section 5 below).
- Relation identity, assignment, exhaustive taxonomy (§7) — the
  matching LOGIC; room-type APPLICABILITY of specific relation types
  remains Contract 3's job, not Rev13's or this Revision 14's
  (Section 6 below).
- Unknown/determinability contract (§8), ordinal confidence and
  calibration (§9), fixture suites and exact subtype registry (§12),
  Concrete Conformance Field Inventory (§13), partial-scene and
  Unseen-Claim contract (§14), aggregation and uncertainty contract
  (§17), latency/cost accounting (§20), formal execution and recovery
  (§21), Completion/Evaluation Result rules (§22), Required Evaluation
  Report contract (§23) — all room-count independent, reconfirmed by
  this Revision 14's own re-reading (Section 3.2 below).
- Every fixed fixture count and subtype (§12.1-12.4): Operational 16
  development / 29 held-out; Contract Violation 12 development / 18
  held-out. Confirmed room-count independent.
- The Revision 10 -> 11 -> 12 -> 13 closed correction-coverage
  history (§24, §24a, §24b): retained unmodified as the historical
  record of Rev13's own drafting.

Not authorized by this change (see Section 19 for the full list):
- Any corpus, annotation, metric, or formal evaluation use of toilet
  room. Toilet room becomes evaluable-in-methodology only, not
  evaluable-in-practice: no Tier 1 corpus preparation, annotation, or
  Layer 3 metric computation may occur before separate Corpus
  Preparation Authorization (Rev13 §5.2 step 4), which this document
  does not grant.
- Re-derivation of any per-room-type GT/support overall count flagged
  Open in Section 9 or Section 10.
- Drafting, revising or finalizing any of Contracts 1-10 or Contract
  11.
- Any edit to the Contracts 1-10 Preparation and Dependency Plan, the
  Module Applicability Profile, or Candidate A Test Data Handling
  Decision Revision 9.
- Repository persistence, corpus/fixture creation, provider/model
  evaluation, Implementation Package preparation, implementation, ADR
  creation.
```

---

## 2. Purpose

This document proposes a complete, standalone successor to the accepted Candidate A Evaluation Threshold and Acceptance Plan Revision 13. Its sole substantive purpose is to translate the accepted five-room bounded scope (Candidate A Bounded Scope Decision Revision 5) into the evaluation-methodology layer that Revision 13 governs, in direct response to Revision 5's own explicit deferral: *"Toilet room is not, as of this Revision 5, part of any active corpus, annotation, metric, or evaluation population"* until *"a separate Rev13 alignment decision or successor revision explicitly activates it"* (Rev5 §6.1, §11.1).

Its purpose is sixfold:

1. Recompute, and internally reconcile, every fixed count, grid, denominator and total in Revision 13 that is keyed to the room-type count (Sections 4, 8, 9, 10), so that no four-room figure is left silently adjacent to a five-room model.
2. Perform a complete impact analysis against the six other authoritative documents named in Section 3, so that acceptance of this Revision 14 does not silently contradict or leave ambiguous any provision of the Contracts 1-10 Preparation and Dependency Plan Revision 4, the Module Applicability Profile Revision 13, or Test Data Handling Decision Revision 9.
3. Determine, and normatively fix, whether all thirty room-type x scenario-family grid cells are applicable, or whether some require Owner-level exclusion (Section 4), rather than mechanically assuming symmetry.
4. Determine which per-room-type thresholds and support floors extend automatically by their already-generic wording, and which cannot be honestly re-derived without actual corpus data — naming each explicitly rather than silently carrying forward a four-room-fitted number as if it already covered five rooms (Section 9, Section 10).
5. Define the minimum evaluation-level dependencies this five-room model creates for the future Supporting Contracts 1-10 and Contract 11 (Sections 6, 12, 13), without drafting, prejudging, or authorizing any of them.
6. Establish the exact non-authorization boundary (Section 19) and governance sequence (Section 17) so that accepting this Revision 14 activates toilet room for evaluation-methodology purposes only — never for corpus creation, annotation, provider/model evaluation, or implementation.

This document does not reopen Bounded Scope Decision Revision 5, the normative bathroom/toilet-room distinction it defines, or any of Revision 13's room-count-independent provisions. It does not decide provider/model selection, corpus content, or implementation.

---

## 3. Imported Authoritative Baselines

The following documents were retrieved by direct directory listing (`docs/engineering-decisions/reviews/`) and read in full — not from chat summary or recollection — as the mandatory basis for this alignment. Directory listing confirms the exact paths and that no higher-numbered revision of any of these documents exists on disk.

```text
1. docs/engineering-decisions/reviews/
   Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev13.md
   (Accepted, Project Owner, 2026-07-15; 839 lines; read in full,
   including the complete 81-row Metric Registry, §18 stability
   appendix and Owner Decisions 1-32.)

2. docs/engineering-decisions/reviews/
   Candidate-A-Bounded-Scope-Decision-Rev5.md
   (Accepted, Project Owner, 2026-07-18; commit
   9578c3f73dd72ae122fe523909bce721fc1ede93; 1079 lines; read in full.)

3. docs/engineering-decisions/reviews/
   Candidate-A-Bounded-Scope-Decision-Rev5-Owner-Acceptance.md
   (Owner Acceptance record, 2026-07-18; 137 lines; read in full.)

4. docs/engineering-decisions/reviews/
   Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev4.md
   (Accepted, Project Owner, 2026-07-16; 521 lines; read in full.
   Directory listing confirms no Revision 5 or 6 of this Plan exists
   in the repository; the "Rev5" draft referenced inside Bounded
   Scope Rev5 §11.3 as cross-session material is confirmed, by this
   Revision 14's own directory listing, not to be present on disk.)

5. docs/engineering-decisions/reviews/
   Candidate-A-Module-Applicability-Profile-Rev13.md
   (Accepted, Project Owner, 2026-07-17; 529 lines; read in full,
   including the complete 80-row Applicability Matrix.)

6. docs/engineering-decisions/reviews/
   Candidate-A-Module-Applicability-Profile-Rev13-Owner-Acceptance.md
   (Owner Acceptance record, 2026-07-17; 72 lines; read in full.)

7. docs/engineering-decisions/reviews/
   Candidate-A-Test-Data-Handling-Decision-Rev9.md
   (Accepted, Project Owner, 2026-07-16; 1869 lines. Full section-
   header structure read; §2 "Fixed accepted inputs" and §22
   "Required future supporting artifacts" read in full; remainder
   verified by full-text search for every room-type keyword — one
   match found, §2 item 5, identical to the single citation already
   identified by Bounded Scope Rev5 §9C. No normative rule, count or
   threshold elsewhere in Rev9 is keyed to room-type identity or
   count, confirmed independently by this search rather than by
   citing Rev5's finding alone.)

8. docs/engineering-decisions/reviews/
   Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md
   (Accepted, Project Owner, 2026-07-14; 1383 lines. Checked by
   full-text search for every room-type keyword: zero matches. This
   document is confirmed room-count independent and is not reopened
   by this Revision 14.)

9. docs/engineering-decisions/reviews/
   Candidate-A-Bounded-Scope-Decision-Rev3.md
   (Accepted, Project Owner, 2026-07-14; superseded by Bounded Scope
   Decision Rev5 effective 2026-07-18, per Rev5 §16 and the Rev5
   Owner Acceptance record §3. Retained on disk, unmodified, as the
   historical record of the prior four-room accepted scope. Checked
   by full-text search for every room-type keyword to confirm the
   historical four-room baseline this Revision 14 supersedes at the
   evaluation-methodology layer.)
```

**Local drafts confirmed absent from the repository, and therefore not usable as sources:** `Candidate-A-Bounded-Scope-Decision-Rev4.md` and `Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev5.md`. Both are referenced inside Bounded Scope Rev5's own text (§1, §11.3) as historical or cross-session artifacts, but neither file exists on disk in this repository as of this document's preparation date, confirmed by this Revision 14's own directory listing performed independently of Rev5's claim.

No other document was substituted for the nine baselines above, and none was read only as a chat summary or excerpt.

### 3.1 Additional finding beyond Bounded Scope Rev5's own inventory

Bounded Scope Rev5 §9.1 names seven directly room-count-keyed Rev13 provisions (§2; §10.1; §10.2 corpus totals; §6.3; §16; §18; §19). This Revision 14's own full re-reading of Rev13 (baseline 1 above) identifies one additional directly room-count-keyed provision not named there:

```text
Rev13 §15.1: "A room cell means one of the four room types, not
    room x scenario. Applicability is pre-sealed."
```

This sentence defines the unit of analysis for the annotation-quality family x room-type applicability and transition matrix (§15) and the AQ-* Metric Registry rows (§19). It is corrected by this Revision 14 (Section 10.3 below). It is recorded here as a correction to, not a criticism of, Rev5's own inventory — Rev5's purpose was the bounded-scope layer, not an exhaustive keyword audit of Rev13's evaluation-methodology text.

### 3.2 Provisions confirmed not materially affected

Reconfirmed by this Revision 14's own full reading, consistent with Bounded Scope Rev5 §9.2: Rev13 §3 (governance classes, denominator-class contract), §4 (geometry, evidence contracts), §7 (relation matching logic — as distinct from room-type applicability, which is Contract 3's job), §8 (unknown/determinability contract structure), §9 (ordinal confidence and calibration), §12 (fixture suites), §13 (Concrete Conformance Field Inventory), §14 (partial-scene/unseen-claim contract), §17 (aggregation and uncertainty), §20-§23 (latency/cost, execution/recovery, completion rules, report contract), §24/§24a/§24b (historical correction coverage) are room-count independent as written and are not modified by this Revision 14.

---

## 4. Five-Room Evaluation Scope

The accepted Bounded Scope (Rev5, Section 6, as confirmed by the Rev5 Owner Acceptance record §4) names five active room types within the Residential-first segment:

```text
1. living room
2. bedroom
3. kitchen
4. bathroom
5. toilet room
```

This Revision 14 imports this list by reference. It does not redefine, expand, or reinterpret it. Rev13 §2's bullet — *"Room types: living room, bedroom, kitchen and bathroom"* — is replaced in this successor by:

```text
Room types: living room, bedroom, kitchen, bathroom and toilet room.
```

### 4.1 Effect of acceptance on toilet room's two-stage status

Bounded Scope Rev5 §6.1 establishes a two-stage status for toilet room:

```text
Scope status:       Accepted as the fifth bounded room type (already
                     effective, Rev5 acceptance, 2026-07-18).
Evaluation status:   Operational evaluation activation is Pending
                     Rev13 population/metric/corpus alignment.
```

Upon Project Owner acceptance of this Revision 14, and only then, the evaluation status changes from *Pending* to *Active for evaluation-methodology purposes*. This is a narrower activation than full operational readiness: it means toilet room's grid cells, denominators, and applicable metric rows are fixed and internally consistent (Sections 8-10 below) and toilet room may be referenced normatively in future Contracts 1-10 and Contract 11 drafting. It does **not** mean corpus preparation, annotation, provider/model evaluation, or implementation involving toilet room may begin — those remain gated by the unchanged Rev13 §5.2 governance route and the explicit non-authorization boundary (Section 19).

```text
toilet room, upon acceptance of this Revision 14:
  Bounded scope:                 accepted (Rev5, unchanged)
  Evaluation-methodology status: active (this Revision 14)
  Corpus creation:                still not authorized
  Provider/model evaluation:      still not authorized
  Implementation:                 still not authorized
```

### 4.2 Residential-first preserved; no new segment activated

The accepted segment remains `Residential-first`. This Revision 14 does not expand, narrow, or reinterpret it, and does not activate any other segment. This mirrors Rev5 Decision 4 and is restated here as an explicit boundary of this document (Section 18, Decision 3).

---

## 5. Bathroom / Toilet-Room Evaluation Distinction

Bounded Scope Rev5 §7 defines the normative distinction between `bathroom` and `toilet room`. This Revision 14 imports it by reference in full and does not redefine it:

```text
bathroom: a room whose primary function includes bathing or
    showering. May contain a bathtub, a shower, a washbasin, or a
    toilet if combined.

toilet room: a separate sanitary room whose primary function is to
    house a toilet. Typically does not contain a bathtub; may not
    contain a shower; may contain a small washbasin. Must not be
    automatically merged with bathroom into one room type.

Classification precedence (Rev5 §7.4, scope-definition rule only):
1. Bathtub or shower visibly present -> bathroom.
2. Neither present, toilet is the primary visible fixture -> toilet
   room.
3. Toilet present together with a bathtub or shower in the same
   room -> bathroom (combined space).

No separate "combined bathroom" room type exists (Rev5 §7.3,
confirmed unchanged by this Revision 14).
```

### 5.1 Evaluation-dataset handling of the bath/toilet boundary

Rev5 §7.4 is explicit that the classification precedence rule is *"a scope-definition clarification only... not an annotation instruction... those remain the sole responsibility of the future Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract (Contract 7)"*. This Revision 14 does not draft Contract 7. It records, as a minimum evaluation-level requirement Contract 7 must satisfy once drafted, the concrete case categories the five-room scenario grid must be able to classify without ambiguity:

| Case | Classification under Rev5 §7.4 | Evaluation-corpus treatment required of future Contract 7 |
|---|---|---|
| Bathroom with a combined toilet (bathtub/shower + toilet in one room) | `bathroom` (Rev5 §7.3) | Included in the `bathroom` cells of the grid (Section 8), not a toilet-room cell. Must not be double-counted. |
| Toilet room without a washbasin | `toilet room` | Included in `toilet room` cells. Ordinary case, not automatically a special group. |
| Toilet room with a small washbasin | `toilet room` | Included in `toilet room` cells. Presence of a washbasin alone does not reclassify to `bathroom` per Rev5 §7.2's "may contain a small washbasin." |
| Compact WC (toilet room, minimal fixtures, small footprint) | `toilet room` | Ordinary `toilet room` case unless it independently meets Rev13 §10.2 special-group criteria (e.g., empty-or-near-empty), which is Contract 7's determination, not predetermined here. |
| Visually ambiguous sanitary room (no bathtub/shower visible, toilet visible, unclear if a tub/shower exists outside frame) | Governed by Rev5 §7.4 rule 2 on visible evidence only — `toilet room` if no bathtub/shower is visible in-frame | This is a visible-evidence classification, not a "completeness: partial" case per se; Contract 7 must state explicitly that classification precedence uses only in-frame visible evidence, consistent with Rev13 §10.4's sufficiency/completeness model, which this Revision 14 does not alter. |
| Cropped image where the bath/shower is outside the frame | Ambiguity is possible; Rev5 does not resolve this case explicitly | Flagged as an open ambiguity-handling item for Contract 7 (Section 7 below), not resolved by this Revision 14. |
| Combined sanitary room (any bath+toilet arrangement) | `bathroom` (Rev5 §7.3, no separate room type) | Same as row 1. |

This table names the case categories; it does not adjudicate them beyond what Rev5 §7.4 already states, and it is not a substitute for Contract 7's pairing/adjudication rules (Rev13 §5.1 item 7).

---

## 6. Relation Applicability Impact

Rev13 §7.2 states: *"GT truth, endpoint applicability, obstruction modes, borderline/inconclusive treatment and room-type applicability come only from the accepted Relation Annotation and Applicability Contract and applicability matrix"* — i.e., Contract 2 and Contract 3, neither of which is drafted (Module Applicability Profile Rev13, matrix row CON-01: `Not Started`). This Revision 14 does not draft, prejudge, or predetermine Contract 3's room-type applicability matrix. It fixes only the evaluation-level requirements that follow mechanically from the room-count change.

```text
Relation types in scope (unchanged, Rev13 §7): Adjacency,
Containment, Blocking.
```

| Relation type | Applicable to toilet room? | Basis |
|---|---|---|
| Adjacency | **Not decided by this document.** Contract 3's job. | Toilet room is a small, typically single-function room; adjacency relations (e.g., toilet-wall, washbasin-wall) are plausible but endpoint-specific applicability requires Contract 3's matrix, not assumed here. |
| Containment | **Not decided by this document.** Contract 3's job. | Same reasoning; e.g., whether "toilet paper holder contained-by wall" or similar is a modeled Containment pair is a Contract 2/3 vocabulary-and-applicability question. |
| Blocking | **Not decided by this document.** Contract 3's job. | Same reasoning. |

### 6.1 What this Revision 14 does fix: the evaluation-level consequence, conditional on future applicability

If, and only if, a future Contract 3 makes any relation type applicable to toilet room, the following Rev13 provisions already apply automatically by their existing generic wording, and are not re-derived or changed by this Revision 14:

```text
- Rev13 §7.1-§7.4 canonical identity, matching, and exhaustive
  taxonomy logic — room-count independent (Section 3.2).
- Rev13 §6.3 category-correctness support rule ("at least four
  matched pairs... in every room type for which a category floor is
  reported") — extends automatically once a floor is reported for
  toilet room.
```

The following do **not** extend automatically and are left explicitly Open, pending a future Owner Decision informed by actual development denominators (Section 9 below), because their overall figures were not derived by a room-count-independent formula:

```text
- Rev13 §16 relation GT support floors (Adjacency 20 overall/>=5 per
  applicable room across >=3 scenes; Containment and Blocking 15
  overall/>=4 per applicable room across >=3 scenes).
- Rev13 §18/§19 REL-ADJ-F1, REL-CONT-F1, REL-BLOCK-F1 overall+per-room
  GT support figures (Section 9, Section 10.1 below).
```

**Floors that cannot yet be finalized before Contract 3:** every relation-applicability-dependent floor above (Adjacency, Containment, Blocking GT support and F1 support) cannot be finalized until Contract 3 determines whether the relation type is applicable to toilet room at all. A floor for a not-applicable relation type is meaningless. This Revision 14 therefore states these floors as conditionally deferred twice over: once on Contract 3's applicability determination, and again (if applicable) on the re-derivation named in Section 9.

---

## 7. Ambiguity and Classification Rules

This Revision 14 defines evaluation-level classification rules for the disputed cases enumerated in Section 5.1, to the extent that Rev13's existing sufficiency/completeness/inconclusive model (§10.4, §8.2) already resolves them without modification, and names the residue as an open item for Contract 7.

### 7.1 Resolved by unmodified Rev13 provisions (no change required)

```text
- "When is a case insufficient evidence?" Rev13 §10.4's existing
  sufficiency criterion (visible evidence for Room plus at least one
  independent required entity/evidence unit) applies identically to
  toilet room; a toilet room with, e.g., only a doorframe visible and
  no toilet visible is IE-expected under the existing rule, with no
  room-type-specific carve-out needed.
- "When is a label inconclusive?" Rev13 §8.2's existing
  `determinable`/`not-determinable`/`inconclusive` sealing model
  applies identically; inconclusive annotation units are excluded
  before sealing and replaced, per the existing rule, regardless of
  room type.
- "How is a partial image handled?" Rev13 §10.4's existing
  completeness criterion (edge-continuation cues) applies identically;
  no new criterion is created for toilet room by this Revision 14.
- "How is label leakage avoided?" Out of scope for Rev13 and this
  Revision 14; this is an annotation-procedure question for the
  future Semantic Case Annotation Contract (Contract 7) and, where
  relevant, the annotator-facing guidance layer, not an evaluation-
  threshold question.
```

### 7.2 Not resolved here — named as an open Contract 7 item

```text
- When is a room considered `bathroom` vs. `toilet room` specifically
  in the cropped/ambiguous case named in Section 5.1 (bath/shower
  possibly present but outside frame)? Rev5 §7.4's precedence rule is
  written for the fully-visible case. This Revision 14 does not
  extend or reinterpret Rev5 §7.4; it records that Contract 7 must
  state whether such a case is (a) classified as toilet room on
  strictly visible evidence, consistent with Rev13's existing
  visible-evidence sufficiency model, or (b) treated as inconclusive
  and excluded/replaced under the existing §8.2 model. Both options
  are structurally available under already-accepted rules; choosing
  between them is Contract 7's determination, not this document's.
- "When is a case replaced rather than adjudicated?" is entirely a
  Contract 7 procedural question (Rev13 §5.1 item 7) and is not
  touched here.
```

No annotation contract is drafted by this Section. It states requirements Contract 7 must satisfy, consistent with the non-binding-recommendation model Bounded Scope Rev5 §10.1 already established for Contracts 3 and 7.

---

## 8. Ordinary Grid Recalculation

Rev13 §10.1: *"Four room types x six scenario families... Development contains two unique images per cell (48); held-out contains three (72))."*

### 8.1 Scenario-family applicability check (not assumed)

The six scenario families are: normal readable; moderate clutter; partial occlusion; partial-room framing; lighting variation; camera-angle variation. Each was checked against toilet room specifically, rather than assuming uniform applicability:

| Scenario family | Applicable to toilet room? | Rationale |
|---|---|---|
| Normal readable | Yes | No room-type-specific barrier; a clearly lit, unobstructed toilet-room photograph is a standard case. |
| Moderate clutter | Yes | Toilet rooms commonly contain towels, cleaning supplies, toiletries, bins — clutter is plausible and photographically realistic. |
| Partial occlusion | Yes | Doors, towels, or fixtures can occlude parts of the room exactly as in other room types. |
| Partial-room framing | Yes | Toilet rooms are frequently small, making partial/cropped framing at least as likely as in larger rooms, not less. |
| Lighting variation | Yes | No room-type-specific exclusion; toilet rooms are frequently windowless, making lighting variation (artificial-light-only cases) a realistic and important scenario, not a hypothetical one. |
| Camera-angle variation | Yes | No room-type-specific barrier. |

**No room-type-specific exclusion applies to any of the six scenario families for toilet room, and no `not-applicable` cell is required.** This finding is fixed normatively by this Revision 14 (Section 18, Decision 4), consistent with the instruction to fix it only if the full check supports it — which it does here — rather than defaulting to symmetry unexamined.

### 8.2 Recomputed grid

```text
Old (Rev13, 4 room types):
  4 room types x 6 scenario families = 24 cells
  development: 24 x 2/cell = 48
  held-out:    24 x 3/cell = 72

New (five-room, this Revision 14):
  5 room types x 6 scenario families = 30 cells
  development: 30 x 2/cell = 60
  held-out:    30 x 3/cell = 90
```

Per-cell minimums (development 2, held-out 3) are **unchanged** — this Revision 14 does not alter the per-cell minimum, only the number of cells.

### 8.3 Sufficiency and completeness impact

Rev13 §10.4's sufficiency/completeness/expected-family criteria are room-count independent (Section 3.2) and require no change. The larger cell count increases the total population to which these criteria apply, but not their content.

---

## 9. Special-Group Treatment

Rev13 §10.2 special-group minimums:

```text
low-information:            3 development / 6 held-out
empty or near-empty:        2 development / 5 held-out
meaningful partial-scene:   5 development / 10 held-out
genuine insufficient-evidence: 5 development / 10 held-out
```

### 9.1 Are these room-partitioned?

No. Bounded Scope Rev5 §9.1 already established, and this Revision 14 independently reconfirms by re-reading Rev13 §10.2 and Rev3 Part I.2's "обязательные cross-room scenario groups" framing (cited in Rev5 §9.1), that these four groups are **pooled cross-room, not partitioned per room type**. They are therefore not directly room-count-keyed and require **no numeric change** merely because a fifth room type is accepted.

```text
Special-group minimums, five-room model: UNCHANGED.
development: 3 + 2 + 5 + 5 = 15  (same as Rev13)
held-out:    6 + 5 + 10 + 10 = 31 (same as Rev13)
```

### 9.2 Consequence of pooling: composition, not count, changes

Because these groups are pooled cross-room, toilet-room images may now be drawn into them without altering their fixed minimum counts — the *pool* they are drawn from now includes a fifth room type, but the *minimum size* of each pool does not increase. This is recorded as an explicit clarification, not left implicit, because it is exactly the kind of silent scope-widening the drafting instructions warn against: the special groups are not expanded to require *additional* toilet-room-specific instances on top of the existing 15/31 — toilet-room images simply become eligible members of the same fixed-size pools.

### 9.3 Global vs. per-room-type; no double-counting

Special-group membership (Section 9) and ordinary-grid membership (Section 8) remain mutually exclusive for minimum counts (Rev13 §10.2, unchanged: *"Ordinary and special primary buckets are mutually exclusive for minimum counts. Secondary labels never increase minimum counts."*). A toilet-room image that qualifies as, e.g., empty-or-near-empty is counted toward the special-group minimum, not toward the toilet-room ordinary-grid cells, and vice versa — exactly the same rule that already governs the four other room types, requiring no room-type-specific carve-out.

### 9.4 No toilet-room-specific special case created

This Revision 14 does not create a toilet-room-specific special group (e.g., no separate "compact WC" bucket). Section 5.1's compact-WC row is explicitly an ordinary case unless it independently meets an existing special-group criterion — no new special group is introduced merely because a fifth room type exists, consistent with the instruction not to expand special groups without independent justification.

---

## 10. Revised Corpus Totals

### 10.1 Reconciliation table

| Item | Old Rev13 value (4-room) | Five-room value | Reason | Affected Rev13 section(s) |
|---|---:|---:|---|---|
| Ordinary-grid cells | 24 | 30 | 5 room types x 6 scenario families, all 30 cells confirmed applicable (Section 8.1) | §10.1 |
| Ordinary-grid development images | 48 | 60 | 30 cells x 2/cell | §10.1 |
| Ordinary-grid held-out images | 72 | 90 | 30 cells x 3/cell | §10.1 |
| Special-group development images | 15 | 15 (unchanged) | Cross-room pooled, not room-partitioned (Section 9) | §10.2 |
| Special-group held-out images | 31 | 31 (unchanged) | Same | §10.2 |
| **Total development unique semantic images** | **63** | **75** | 60 + 15 | §10.2 |
| **Total held-out unique semantic images** | **103** | **121** | 90 + 31 | §10.2 |
| Operational fixture suite (Failure + C.2 + C.3 general) development/held-out | 16 / 29 | 16 / 29 (unchanged) | Room-count independent — fixture subtypes are operational/technical (provider timeout, malformed response, input errors, C.2/C.3 rejection reasons), confirmed by full re-reading of §12.1-§12.3 | §12.1-§12.3 |
| Contract Violation fixture suite development/held-out | 12 / 18 | 12 / 18 (unchanged) | Same — room-count independent, confirmed by re-reading §12.4 | §12.4 |
| **Overall evaluation population** (semantic corpus + all fixture suites, held-out side) | 103 + 29 + 18 = 150 | 121 + 29 + 18 = 168 | Sum of held-out semantic total and held-out fixture totals; fixture totals unaffected | §10-§12 (this row is this Revision 14's own reconciliation, not a Rev13-stated aggregate — Rev13 does not itself sum semantic and fixture populations into one figure, and this Revision 14 does not introduce that as a new normative total, only as an explanatory reconciliation) |

No arithmetic in this section is left in prose only; every figure above is derived from the table itself.

### 10.2 Lineage rule — unaffected

Rev13 §10.3's lineage rule (*"All images from one physical/staged room or generation session... belong wholly to one subset. No lineage crosses development/held-out"*) is room-count independent and unaffected. It applies identically to toilet-room image lineage.

### 10.3 §15.1 annotation-quality room-cell definition — corrected

As identified in Section 3.1, Rev13 §15.1's sentence *"A room cell means one of the four room types, not room x scenario"* is corrected:

```text
Revised: "A room cell means one of the five room types, not room x
scenario."
```

The per-cell support minimums stated in §15.2 (category agreement >=10 paired labels; entity match/IoU >=8 instances/annotator and >=4 matched pairs; relation agreement >=6 identities and >=3 matched identities; inconclusive rate >=10 units) are **unchanged in value**. They apply automatically to a fifth room-type stratum wherever an applicable cell exists for toilet room, by the already-generic "family x room type" wording of §15.1-§15.2. This is a textual and cell-count correction only, not a threshold change.

### 10.4 §18/§19 literal semantic-population figure — corrected

Rev13 §18's "Unexpected rates" row states: *"sealed semantic N=103 or eligible subset."* Because the total held-out unique semantic population changes from 103 to 121 (Section 10.1), this literal figure is corrected:

```text
Revised: "sealed semantic N=121 or eligible subset."
```

This is the one place in the §18 stability appendix where a literal room-count-derived number appears outside a generic "overall/per room" pattern, and it is mechanically implied by the corpus-total recalculation in Section 10.1 rather than requiring an independent Owner judgment. All other §18/§19 room-sensitive figures are inventoried, not mechanically recalculated, in Section 9 (Threshold Feasibility) and Section 10 of the required-structure numbering, which follows next.

---

## 11. Per-Room Floors and Support

This section is the required "Threshold feasibility analysis" (see Section 12 heading below for the numbered continuation) and directly answers the drafting instruction to check every per-room floor, Metric Registry row and threshold for satisfiability after scope expansion, rather than assuming symmetry.

### 11.1 Category-correctness support rule (§6.3) — extends automatically

```text
Rev13 §6.3: "at least four matched pairs overall and at least four
matched pairs in every room type for which a category floor is
reported."
```

This rule is already written generically per room type. It applies automatically to toilet room once (and only once) a category floor is actually reported for it — which requires the corpus/annotation work this Revision 14 does not authorize. No re-derivation is needed; this is confirmed unchanged.

### 11.2 Relation GT support floors (§16) — NOT re-derivable by formula

```text
Rev13 §16:
  Adjacency:   20 overall and >=5 per applicable room type across
               >=3 scenes
  Containment: 15 overall and >=4 per applicable room type across
               >=3 scenes
  Blocking:    15 overall and >=4 per applicable room type across
               >=3 scenes
```

**Arithmetic check performed, not assumed:** if these overall figures were a simple product of (per-room floor) x (room count = 4), the results would be Adjacency 4x5=20 (matches exactly), Containment 4x4=16 (does NOT match the stated 15), Blocking 4x4=16 (does NOT match the stated 15). The pattern is internally inconsistent — Adjacency's overall figure happens to equal the product, Containment's and Blocking's do not (each is one below the product). This proves the three overall floors were **not** derived by one uniform per-room-count formula; each was independently sized as a reasonable pooled minimum for a four-room evaluation population. Consequently, no mechanical extrapolation (e.g., "scale by 5/4," or "add one room's worth") can be honestly applied to produce a five-room overall figure — doing so would risk both an unjustified increase in evidentiary burden and, in the other direction, an unjustified weakening of an accepted gate.

**Disposition:** these three overall+per-room floor pairs are left explicitly **Open**, not re-derived here, and require a future Owner Decision informed by actual development denominators — consistent with the existing Rev13 §5.2 step 6 model, where Contract 11 itself is deliberately sequenced *after* development corpus/fixture creation for exactly this reason (fitting thresholds to real data rather than guessing). This is also gated a second time by Contract 3's relation-applicability determination for toilet room (Section 6.1).

### 11.3 Ten Blocking Metric Registry rows with the same open-support pattern

The same "explicit overall + per-room GT/support count, not a clean multiple of room count" pattern recurs in ten §19 Metric Registry rows beyond the three relation-F1 rows above. Full inventory and disposition is in Section 12 (Threshold Feasibility Analysis) below.

### 11.4 Rows confirmed satisfiable without re-derivation

Nine room-sensitive Blocking rows use only a "zero produced => FAIL" terminal rule with no explicit corpus-GT overall/per-room count to re-derive; their percentage thresholds apply automatically to a fifth room stratum as soon as the mechanism produces any toilet-room output, with no re-derivation needed. Full list in Section 12.

---

## 12. Threshold Feasibility Analysis

Every room-sensitive Blocking Metric Registry row (19 of the 81 total rows, Section 13.1) is checked individually below, per the drafting instruction, rather than only at the category level.

| Metric ID | Old population (4-room fitted) | New population (5-room) | Support requirement | Threshold (unchanged) | Still satisfiable? | Change required? |
|---|---|---|---|---|---|---|
| ENT-SE-P | mechanism-output, produced N lattice | Same lattice, +1 room stratum | none (zero-produced => FAIL only) | >=0.80 overall; >=0.70 per room | Yes | No — extends automatically |
| ENT-SE-R | GT 20 overall / 8 per room | Unresolved — 4x8=32 != 20; not a clean multiple | 20 overall / 8/room (unchanged, unresolved for 5th room) | >=0.75 overall; >=0.65 per room | **Open** | **Yes — Owner Decision required (Section 18, Decision 8)** |
| ENT-OBJ-P | mechanism-output | +1 room stratum | none | >=0.75 overall; >=0.65 per room | Yes | No |
| ENT-OBJ-R | GT 30 overall / 10 per room | Unresolved — 4x10=40 != 30 | 30 overall / 10/room (unresolved) | >=0.65 overall; >=0.55 per room | **Open** | **Yes — Owner Decision required** |
| ENT-SE-CAT | matched-pairs, §6.3 generic rule | +1 room stratum, rule already generic | >=4 matched pairs/room (§6.3) | >=0.85 overall; >=0.75 per room | Yes | No — §6.3 extends automatically (Section 11.1) |
| ENT-OBJ-CAT | same | same | same | >=0.85 overall; >=0.75 per room | Yes | No |
| ENT-HALL | mechanism-output | +1 room stratum | none | <=0.10 overall; <=0.15 per room | Yes | No |
| ENT-SEV-HALL | mechanism-output | +1 room stratum | none | <=0.05 overall; <=0.08 per room | Yes | No |
| REL-ADJ-F1 | GT 20 overall / 5 per applicable room | Unresolved — matches 4x5=20 by coincidence, still not a proven formula (Section 11.2) | 20/5 (unresolved) | >=0.65 overall; >=0.55 per applicable room | **Open** (and gated by Contract 3 applicability, Section 6.1) | **Yes — Owner Decision required** |
| REL-ADJ-UNSUP | mechanism-output | +1 room stratum | none | <=0.15 overall; <=0.20 per applicable room | Yes (once relation-applicable) | No, but gated by Contract 3 |
| REL-CONT-F1 | GT 15 overall / 4 per applicable room | Unresolved — 4x4=16 != 15 | 15/4 (unresolved) | >=0.65 overall; >=0.55 per applicable room | **Open** (gated by Contract 3) | **Yes — Owner Decision required** |
| REL-CONT-UNSUP | mechanism-output | +1 room stratum | none | <=0.15 overall; <=0.20 per applicable room | Yes (once relation-applicable) | No, but gated by Contract 3 |
| REL-BLOCK-F1 | GT 15 overall / 4 per applicable room | Unresolved — 4x4=16 != 15 | 15/4 (unresolved) | >=0.55 overall; >=0.45 per applicable room | **Open** (gated by Contract 3) | **Yes — Owner Decision required** |
| REL-BLOCK-UNSUP | mechanism-output | +1 room stratum | none | <=0.15 overall; <=0.20 per applicable room | Yes (once relation-applicable) | No, but gated by Contract 3 |
| UNK-SUBTYPE-UNDER | GT support 15 overall / 4 per room | Unresolved — 4x4=16 != 15 | 15/4 (unresolved) | <=0.15 overall; <=0.25 per room | **Open** | **Yes — Owner Decision required** |
| UNK-SUBTYPE-OVER | same | same | same | <=0.15 overall; <=0.25 per room | **Open** | **Yes — Owner Decision required** |
| UNK-CONF-UNDER | same | same | same | <=0.15 overall; <=0.25 per room | **Open** | **Yes — Owner Decision required** |
| UNK-PROV-OVER | same | same | same | <=0.15 overall; <=0.25 per room | **Open** | **Yes — Owner Decision required** |
| SPACETYPE | min 20 overall / 5 per room | matches 4x5=20 by coincidence, not a proven formula | 20/5 (unresolved) | >=0.98 overall; >=0.95 per room | **Open** | **Yes — Owner Decision required** |

**Summary:** 9 of 19 room-sensitive Blocking rows are satisfiable without re-derivation (percentage thresholds over mechanism-output populations with no explicit corpus-GT count). 10 of 19 carry an explicit overall+per-room GT/support count that was fitted to a four-room population and is **not** honestly extensible by formula; these are left Open pending a future Owner Decision using actual development denominators, per Section 11.2's arithmetic proof. This finding is not weakened, and no threshold is loosened, to make toilet room "pass" by default — consistent with the explicit instruction not to treat low support as an automatic pass.

**No Blocking metric is silently made Not Applicable for toilet room by this analysis.** Every row above remains applicable in principle to toilet room; ten of them simply cannot be finally quantified for toilet room until the Section 18 Decision 8/9 Owner Decisions are resolved with real data.

---

## 13. Revised Metric Registry

All 81 Rev13 §19 Metric IDs are accounted for below by category. No metric ID is renamed, added, or removed by this Revision 14 — a requirement explicit in the drafting instructions ("не меняй metric IDs без необходимости"). Category assignment is exhaustive and disjoint; totals are cross-checked against Rev13's own stated count of 81.

### 13.1 Category A — Room-sensitive Blocking (19 rows)

`ENT-SE-P, ENT-SE-R, ENT-OBJ-P, ENT-OBJ-R, ENT-SE-CAT, ENT-OBJ-CAT, ENT-HALL, ENT-SEV-HALL, REL-ADJ-F1, REL-ADJ-UNSUP, REL-CONT-F1, REL-CONT-UNSUP, REL-BLOCK-F1, REL-BLOCK-UNSUP, UNK-SUBTYPE-UNDER, UNK-SUBTYPE-OVER, UNK-CONF-UNDER, UNK-PROV-OVER, SPACETYPE`

Aggregation rule ("Wilson 95%; micro-pooled overall and per-room") is room-count agnostic and extends automatically in form. Numeric thresholds are unchanged. Ten of these nineteen rows carry an overall+per-room support count requiring the Section 12 Open disposition; the remaining nine are satisfiable without change. Full row-by-row disposition: Section 12.

### 13.2 Category B — Room-sensitive Diagnostic (35 rows)

`ENT-SE-F1, ENT-OBJ-F1, REL-ADJ-COND, REL-CONT-COND, REL-BLOCK-COND, REL-EVIDENCE, UNK-BEATTR-UNDER, UNK-BEATTR-OVER, CAL-SE-DET, CAL-OBJ-DET, CAL-SE-CAT, CAL-OBJ-CAT, CAL-REL-ADJ, CAL-REL-CONT, CAL-REL-BLOCK, BE-PLACE-COUNT, BE-PLACE-EVID, BE-PLACE-CONF, BE-PLACE-PROV, BE-PLACE-FALSEOBS, BE-EXTENT-COUNT, BE-EXTENT-EVID, BE-EXTENT-CONF, BE-EXTENT-PROV, BE-EXTENT-FALSEOBS, BE-AFFORD-COUNT, BE-AFFORD-EVID, BE-AFFORD-CONF, BE-AFFORD-PROV, BE-AFFORD-FALSEOBS, BE-ILLUM-COUNT, BE-ILLUM-EVID, BE-ILLUM-CONF, BE-ILLUM-PROV, BE-ILLUM-FALSEOBS`

Threshold is `none` for every row in this category (Diagnostic governance class). There is nothing to re-derive: each row extends automatically to report a fifth room stratum once toilet-room mechanism output exists. No change required.

### 13.3 Category C — Annotation-quality family x room-type (5 rows)

`AQ-CATEGORY-AGREE, AQ-ENTITY-MATCH, AQ-MEAN-IOU, AQ-RELATION-AGREE, AQ-INCONCLUSIVE`

Governed by the corrected §15.1 room-cell definition (Section 10.3). Per-cell support minimums (>=10 paired labels; >=8 instances/annotator and >=4 matched pairs; >=6 identities and >=3 matched identities; >=10 units, respectively) are unchanged in value; the count of applicable cells extends from four to five. No threshold change.

### 13.4 Category D — Population-sensitive, not room-partitioned (7 rows)

`INS-SENS, INS-SPEC, PARTIAL, UNEXP-FAIL, UNEXP-C2, UNEXP-C3, UNEXP-COMB`

Denominators are semantic-case populations (IE-expected, SceneResult-expected, partial-scene, all-semantic-cases) that grow with the ordinary-grid expansion (Section 8, Section 10). Percentage thresholds are unchanged. Minimum-N floors stated as absolute floors (INS-SENS N=10, INS-SPEC N=20, PARTIAL N=10) are unchanged — they were already floors, not exact counts, and the larger five-room population comfortably continues to satisfy them. The one literal population figure in this category's §18 row ("sealed semantic N=103") is corrected to 121 per Section 10.4.

### 13.5 Category E — Fixture-controlled (4 rows)

`FIX-FAIL, FIX-C2, FIX-C3, CVF-C3`

Confirmed room-count independent (Section 10.1). No change.

### 13.6 Category F — Zero-tolerance conformance/grounding (9 rows)

`C1-CANDIDATE, POSTC2-OP, POSTC2-ROOM, POSTC2-ELEM, POSTVAL-OP, POSTVAL-ROOM, POSTVAL-ELEM, GROUND-NODE, PARTIAL-CLAIM-CONFORM`

Rule (`=1.00`, zero-tolerance over the sealed operation population) is unaffected. The population these rows apply to grows with the corpus (Section 10.1), but the rule itself does not change.

### 13.7 Category G — Mandatory Non-blocking (2 rows)

`LATENCY, COST`

Population- and outcome-based, not room-partitioned normatively. Unaffected.

### 13.8 Total cross-check

```text
Category A (Blocking, room-sensitive):        19
Category B (Diagnostic, room-sensitive):       35
Category C (Annotation-quality, room x family): 5
Category D (Population-sensitive, pooled):      7
Category E (Fixture-controlled):                4
Category F (Zero-tolerance conformance):        9
Category G (Mandatory Non-blocking):            2
                                              ----
Total:                                         81
```

Matches Rev13 §19's own stated total ("Total concrete Metric IDs: 81") exactly. No metric ID is double-counted or omitted.

---

## 14. Contract 11 Implications

Contract 11 (Aggregation, Uncertainty and Score-Stability Appendix) is not prepared, drafted, or prejudged by this Revision 14, consistent with Rev13 §5.2 step 6 (Contract 11 is prepared *after* development corpus/fixture creation, using actual development denominators) and the Contracts 1-10 Preparation and Dependency Plan Rev4 §7 boundary against contract 11.

This Revision 14 fixes:

```text
1. Five-room denominators (Section 10.1's reconciliation table) will
   be Contract 11's structural input once real development
   denominators exist — not the fixed totals in this document, which
   remain design-time targets, not actual measured counts.
2. The ten Open Blocking-row support floors named in Section 12
   cannot be finalized before Contract 11 exists, because Contract 11
   is precisely the mechanism Rev13 already designates for fitting
   thresholds to actual denominators rather than guessing them.
3. No premature aggregation decision is made here. This Revision 14
   does not decide whether the ten Open floors will ultimately be
   resolved upward, downward, or unchanged — that determination
   requires real corpus data and is explicitly reserved.
4. Rev13 §5.2's governance route is otherwise unchanged by this
   Revision 14 (Section 17 below).
```

---

## 15. Supporting Contracts 1-10 Impact Matrix

None of Contracts 1-10 has been drafted (confirmed by Module Applicability Profile Rev13, matrix row CON-01: `Not Started`). This matrix addresses the **future scope and acceptance boundary** each contract will need to honor once drafted, updated for the evaluation-methodology alignment this Revision 14 performs — distinct from, and in addition to, Bounded Scope Rev5 §10's scope-layer impact analysis.

| Contract | Rev14-specific evaluation-methodology impact |
|---|---|
| **Contract 1** — Category Vocabulary and Synonym Contract | Active Evaluation Profile must include toilet room. Minimum evaluation dependencies named in Section 16 below. Master Vocabulary reconciliation (if pursued) remains a separate future task, not performed here. |
| **Contract 2** — Relation Annotation and Applicability Contract | Relation semantics remain generic (Section 6). Toilet-specific applicability examples may be informative once drafted, but Contract 2's purpose is not changed by toilet room's addition — it does not need to be redrafted merely because a fifth room exists. |
| **Contract 3** — Relation Type x Room Type Applicability Matrix | Must target the five-room model (Bounded Scope Rev5 §10.1 recommendation, reaffirmed here). Toilet-room rows may be held Deferred until Contract 3's own drafting resolves relation applicability (Section 6) — this Revision 14 does not decide that applicability, only that the matrix's target shape is five rooms, not four. |
| **Contract 4** — Best-Effort Evidence, Provenance and Determinability Annotation Contract | Room-type independent. Not affected by this Revision 14. |
| **Contract 5** — Confidence Generation and Normalization Contract | Room-type independent. Not affected. |
| **Contract 6** — Unknown/Determinability Annotation and Pairing Contract | Annotation-unit pairing is keyed to entity subtype/confidence/provenance fields, not room type directly. Must support toilet-room cases once they exist, but pairing semantics themselves are not redefined by this Revision 14. |
| **Contract 7** — Semantic Case, Scenario, Sufficiency and Completeness Annotation Contract | Most directly affected. Must recompute the 5x6 grid (Section 8), incorporate the corrected corpus totals (Section 10), and resolve the ambiguity items named in Section 7.2. Lineage rules (Rev13 §10.3) are unaffected and must not be redefined by Contract 7. |
| **Contract 8** — Unseen-Claim Evaluation Artifact Contract | Depends on Contract 7's five-room case population; toilet-room unseen-claim cases become possible once Contract 7 exists, but this Revision 14 does not create or authorize them. No independent room-type dependency beyond that inheritance. |
| **Contract 9** — Operational and Contract Violation Fixture Subtype Registry | Confirmed unaffected — fixture subtypes are operational/technical and room-count independent (Section 10.1). No toilet-specific failure fixtures are created by this Revision 14; whether any are needed is Contract 9's own future determination, not decided here. |
| **Contract 10** — Conformance Field Inventory and Validation Contract | Five-room conformance profile follows automatically once Contracts 1, 3, 7 are updated for five rooms (integration layer, Preparation Plan Rev4 §2). Toilet room is considered active for Contract 10's purposes only after this Revision 14 is accepted **and** the later Contract 1 lock — consistent with the Preparation Plan's existing candidate-lock/finalization model, unchanged by this Revision 14. |

No drafting, revision, or acceptance of any Contract 1-10 is authorized by this Section or by this Revision 14 as a whole (Section 19).

---

## 16. Category Vocabulary Dependencies

This Revision 14 does not draft Contract 1. It names the minimum evaluation-level vocabulary dependencies toilet-room evaluation will require, for the Active Evaluation Profile to be internally consistent — and explicitly defers the full vocabulary contract to the future Contract 1 and any future Preparation Plan successor.

| Candidate item | Type | Already covered by existing (four-room) vocabulary? | Confidence | Disposition |
|---|---|---|---|---|
| `toilet` (fixture) | Object subtype | Likely already implied as a fixture-level concept nested under bathroom (Rev5 §9.1, R-5) | High that a concept exists; open whether it needs a distinct top-level Object subtype | Contract 1 drafting question, not decided here (mirrors Rev5's own R-5 finding) |
| Toilet cistern | Object subtype (candidate) | No | Medium | Candidate only |
| Flush plate / flush mechanism | Object subtype (candidate) | No | Medium | Candidate only |
| Toilet seat | Object subtype (candidate) | No | Low-medium — may be redundant with `toilet` as a single fixture unit | Candidate only; Contract 1 to determine granularity |
| Toilet paper holder | Object subtype (candidate) | No | Medium | Candidate only |
| Washbasin, where present | Object subtype | Likely already exists (shared with bathroom) | High | Reuse existing bathroom vocabulary; no new entry expected |
| Bidet, where present | Object subtype (candidate) | No | Low | Candidate only; low expected corpus frequency in Residential-first |
| Urinal, if residential scope permits it | Object subtype (candidate) | No | **Very low** | Flagged as likely out of scope for Residential-first (urinals are atypical in residential sanitary rooms); Contract 1 to confirm exclusion rather than silently include it |
| Fixed sanitary elements (umbrella term) | Category-level concept | Partially — "fixed fixture" concepts likely already exist generically | Medium | Contract 1 to determine whether a dedicated umbrella subtype is needed or whether existing generic categories suffice |
| Door, wall, floor, ceiling | StructuralElement subtypes | Yes — already generic, room-type-independent | High | No new vocabulary needed |
| Ventilation-related visible elements (e.g., extractor fan, vent grille) | Object subtype (candidate) | Uncertain — plausible relevance is not toilet-room-specific (kitchens and bathrooms may need this too) | Medium | Candidate only; if needed, likely a general-purpose subtype, not toilet-room-specific |

**No new top-level node class is introduced by this Revision 14.** Every candidate item above is a subtype-level or field-level consideration for the future Contract 1, not a schema-level change. This table does not write Contract 1; it names dependencies Contract 1 must resolve and explicitly defers the full vocabulary decision.

---

## 17. Governance Sequence

The following sequence is this Revision 14's own proposal, checked against the authoritative dependency structure of the imported baselines (Section 3) rather than asserted unchecked.

```text
1. Draft Evaluation Threshold and Acceptance Plan Revision 14 (this
   document).
2. One full consolidated review pass (self-performed pre-review,
   Section 20; an independent architect/Chief-Architect review, as
   Rev13 §27 itself requests for Rev13, is a separate later
   governance event, not performed by this document).
3. Project Owner review and, if accepted, Project Owner Acceptance
   of Revision 14.
4. Separate, explicit repository persistence authorization for
   Revision 14 (not granted by acceptance alone; not granted here).
5. Upon (3), Revision 14 supersedes Revision 13 in full as the
   accepted Evaluation Threshold and Acceptance Plan (Section 22).
6. A combined Preparation Plan successor revision, reconciling (per
   Bounded Scope Rev5 §11.3, unresolved by this Revision 14 and
   restated here): the five-room target scope; toilet-room evaluation
   activation; Contract 3 and Contract 7 five-room structure with
   deferred toilet-room applicability rows where Contract 3 has not
   yet resolved applicability; downstream Contract 1, 6, 8, 9, 10
   boundaries; and the pre-existing, unaccepted, non-authoritative
   Preparation Plan "Revision 5" draft material (Bounded Scope Rev5
   §11.3), which must not be accepted independently without this
   reconciliation.
7. A separate Module Applicability Profile successor synchronization
   pass, correcting the "four room types" language in §2, IMPL-04 and
   EVAL-01 (Section 18 below), and, at the Project Owner's discretion,
   the broader Bounded-Scope-Rev3-citation staleness noted in Section
   18.
8. Separate, explicit Project Owner authorization to begin drafting
   Contracts 1-10 (already a required, independent, not-yet-granted
   step per Preparation Plan Rev4 §9 and Module Applicability Profile
   Rev13 §17 item 9; this Revision 14 does not change that gating and
   does not itself grant it).
9. Contracts 1-9 drafted in the dependency order already fixed by the
   Preparation Plan Rev4 §4, incorporating the five-room model and,
   for Contracts 3 and 7, the toilet-room-Deferred-rows recommendation
   (Bounded Scope Rev5 §10.1, reaffirmed by this Revision 14 Section
   15).
10. Contract 10, after its own identity-alignment Owner checkpoint
    (Preparation Plan Rev4 §7, Module Applicability Profile Rev13
    CON-02) and after Contracts 1, 2, 4, 5, 6, 8, 9 are locked.
```

### 17.1 Ordering of step 6 vs. step 7 — assessed, not assumed

The drafting instructions ask this Revision 14 to specifically evaluate whether the Module Applicability Profile successor synchronization should precede or follow the combined Preparation Plan successor. This Revision 14's assessment:

```text
The Preparation Plan successor (step 6) is a preparation/dependency
document that directly gates Contract drafting (step 8-9) — its
content (dependency graph, terminology ownership, preparation order)
is operationally load-bearing for what happens next.

The Module Applicability Profile's "four room types" citations
(§2, IMPL-04, EVAL-01) are Pre-Closure Requirement / evidence-
criterion text that is only actually checked at Practical Completion
(IMPL-04) and Formal Module Evaluation (EVAL-01) — both many
lifecycle stages downstream of Contract drafting (Module
Applicability Profile Rev13 §3, Mandatory Sequence). Nothing in the
Mandatory Sequence gates Contract drafting on a Module Applicability
Profile synchronization pass.

Recommendation (non-binding, Owner's to confirm or reject): step 7
(Module Applicability Profile synchronization) does not need to
precede step 6 (Preparation Plan successor) or step 8 (Contract
drafting authorization). It may proceed in parallel with, or after,
steps 6-9, provided it is completed before IMPL-04 and EVAL-01 are
actually evaluated as closure evidence. This is a scheduling
convenience finding, not a dependency-graph requirement discovered in
the source documents themselves — the source documents are silent on
relative ordering between these two synchronization passes.
```

This Revision 14 does not itself perform either synchronization pass (Section 19).

**No document beyond this Revision 14 is started automatically by this document's acceptance.** Steps 6-10 above are a proposed sequence, not authorizations.

---

## 18. Owner Decision Entries (Proposed)

```text
Decision 1 — Acceptance of Revision 14: Accept / Revise / Reject this
    Revision 14 as the successor Evaluation Threshold and Acceptance
    Plan to Revision 13. (Not yet decided.)

Decision 2 — Five-room evaluation scope: Confirm that the evaluation-
    methodology layer (this Plan) now targets five room types —
    living room, bedroom, kitchen, bathroom, toilet room — consistent
    with, and not reopening, Bounded Scope Decision Rev5.

Decision 3 — Operational activation of toilet room for evaluation
    methodology: Confirm that, upon acceptance of this Revision 14,
    toilet room's evaluation status changes from "Pending Rev13
    alignment" (Rev5 §6.1) to "active for evaluation-methodology
    purposes" (Section 4.1) — explicitly NOT activating corpus
    creation, annotation, provider/model evaluation, or
    implementation, which remain separately gated (Section 19).

Decision 4 — 5x6 ordinary grid and scenario-family applicability:
    Confirm the five-room x six-scenario-family grid (30 cells,
    Section 8) and confirm that all six scenario families are
    applicable to toilet room with no `not-applicable` cell required
    (Section 8.1).

Decision 5 — Development per-cell minimum: Confirm the per-cell
    development minimum remains 2 images (unchanged from Rev13),
    yielding 60 ordinary-grid development images (Section 8.2).

Decision 6 — Held-out per-cell minimum: Confirm the per-cell held-out
    minimum remains 3 images (unchanged from Rev13), yielding 90
    ordinary-grid held-out images (Section 8.2).

Decision 7 — Revised ordinary-grid and corpus totals: Confirm the
    revised totals — 60 development / 90 held-out ordinary-grid
    images; 75 development / 121 held-out total unique semantic
    images (Section 10.1) — as the design-time corpus target,
    explicitly not as an authorization to create this corpus.

Decision 8 — Relation GT support floor re-derivation requirement:
    Confirm that the Adjacency (20/5), Containment (15/4) and Blocking
    (15/4) relation GT support floors (Rev13 §16) cannot be honestly
    extended to toilet room by formula (Section 11.2's arithmetic
    proof) and must be left Open pending a future Owner Decision using
    actual development denominators, gated additionally by Contract
    3's relation-applicability determination for toilet room.

Decision 9 — Ten-row Blocking support-floor re-derivation
    requirement: Confirm that ENT-SE-R, ENT-OBJ-R, REL-ADJ-F1,
    REL-CONT-F1, REL-BLOCK-F1, UNK-SUBTYPE-UNDER, UNK-SUBTYPE-OVER,
    UNK-CONF-UNDER, UNK-PROV-OVER and SPACETYPE (Section 12) each
    carry an explicit overall+per-room GT/support count that is not a
    provably consistent function of room count, and are left Open on
    the same basis as Decision 8, without weakening any of their
    current four-room-fitted numeric thresholds.

Decision 10 — Special-group treatment: Confirm that the four special
    groups (low-information, empty-or-near-empty, meaningful partial-
    scene, genuine insufficient-evidence) remain pooled cross-room
    with unchanged minimums (15 development / 31 held-out total,
    Section 9), and that toilet-room images become eligible pool
    members without increasing pool size.

Decision 11 — Per-room floor applicability confirmation: Confirm that
    the category-correctness support rule (Rev13 §6.3) and the
    annotation-quality per-cell support minimums (Rev13 §15.2, as
    corrected by Section 10.3) extend automatically to a fifth room
    stratum with no numeric change, while the ten Decision 8/9 floors
    remain Open.

Decision 12 — Relation applicability treatment: Confirm that Adjacency,
    Containment and Blocking applicability to toilet room is not
    decided by this Revision 14 and remains reserved to the future
    Contract 2/Contract 3 drafting cycle (Section 6), and that the
    relation-related Decision 8 floors are additionally gated on that
    future determination.

Decision 13 — Bathroom/toilet classification boundary: Confirm that
    the evaluation-dataset case-handling table (Section 5.1) correctly
    operationalizes Bounded Scope Rev5 §7's normative bathroom/
    toilet-room distinction for evaluation-corpus purposes, without
    reopening Rev5 §7 itself.

Decision 14 — Ambiguous-case handling: Confirm the disposition in
    Section 7 — sufficiency, inconclusive and partial-image handling
    extend unchanged from Rev13; the cropped/ambiguous bath-or-toilet
    case (Section 7.2) is named as an open item reserved to the future
    Contract 7, not resolved here.

Decision 15 — Threshold satisfiability: Confirm the Section 12
    row-by-row feasibility analysis (9 of 19 room-sensitive Blocking
    rows satisfiable without change; 10 of 19 left Open) as the
    accurate and complete disposition of every room-sensitive Blocking
    Metric Registry row.

Decision 16 — Metric Registry synchronization: Confirm the Section 13
    categorization of all 81 Metric IDs (Categories A-G, cross-checked
    to Rev13's own stated total of 81) as the synchronized Metric
    Registry disposition, including the corrected §15.1 room-cell
    definition (Section 10.3) and the corrected §18 semantic-
    population figure (103 -> 121, Section 10.4).

Decision 17 — Contract 11 dependency: Confirm that Contract 11 is not
    prepared, drafted, or prejudged by this Revision 14 (Section 14),
    and that the ten Open support-floor determinations (Decisions 8-9)
    are reserved to Contract 11's own future use of actual development
    denominators.

Decision 18 — Supporting Contracts impact: Confirm the Section 15
    impact matrix for Contracts 1-10, including that Contract 3 and
    Contract 7 are most directly affected and should target the
    five-room model with toilet-room rows Deferred where Contract 3
    applicability is not yet resolved, without authorizing any
    Contract 1-10 drafting.

Decision 19 — Module Applicability Profile synchronization
    requirement: Confirm that a future, separately authorized Module
    Applicability Profile successor must correct the "four room
    types" language in §2, IMPL-04 and EVAL-01 (Section 18 of this
    document's own body — cross-reference to the Applicability Matrix
    section, not this Owner Decision list), and acknowledge the
    additional Bounded-Scope-Rev3-citation staleness found in
    BASE-00A, BASE-01, GOV-03, PROV-01 and PROV-05 as a lower-priority,
    separate synchronization item.

Decision 20 — Preparation Plan successor requirement: Confirm the
    Section 17 governance-sequence requirement for a combined
    Preparation Plan successor revision reconciling the five-room
    model, toilet-room evaluation-activation status, Contract 3/7
    deferred rows, and the unaccepted cross-session Preparation Plan
    "Revision 5" draft material named in Bounded Scope Rev5 §11.3.

Decision 21 — Category vocabulary dependencies acknowledgment:
    Confirm the Section 16 minimum evaluation-dependency inventory as
    informative for the future Contract 1, without authorizing Contract
    1 drafting and without treating any candidate item (Section 16) as
    a decided vocabulary addition.

Decision 22 — Non-authorization of execution: Confirm that this
    Revision 14, like Revision 13 before it, authorizes none of:
    repository persistence, corpus preparation or creation, annotation,
    provider/model evaluation or selection, Implementation Package
    preparation, implementation, ADR creation, or any edit to the
    Contracts 1-10 Preparation and Dependency Plan, the Module
    Applicability Profile, or Test Data Handling Decision Revision 9.
```

Methodology acceptance (Decisions 1-4, 10-18), corpus authorization, implementation authorization, and repository persistence (Decision 22) are kept as distinct, non-overlapping decisions, per the explicit drafting instruction not to mix these categories.

---

## 19. Explicit Non-Authorization Boundary

This Revision 14 does not authorize:

```text
- Modification, deletion, or repository change of Revision 13.
- Repository persistence of this Revision 14 or of any acceptance
  record referencing it.
- Staging, commit, or push of any file as a result of this document.
- ADR creation or ADR_INDEX/README modification.
- Any edit to Bounded Scope Decision Revision 5.
- Any edit to the Contracts 1-10 Preparation and Dependency Plan
  Revision 4.
- Any edit to Candidate A Test Data Handling Decision Revision 9.
- Any edit to the Module Applicability Profile Revision 13.
- Drafting, revising, or accepting any of Contracts 1-10.
- Drafting, revising, or accepting Contract 11.
- Re-derivation, resolution, loosening, or tightening of any of the
  ten Open support-floor pairs named in Section 12/Decisions 8-9 —
  these remain explicitly unresolved by this document.
- Corpus recalculation beyond the arithmetic reconciliation performed
  in Section 10 (the 75/121, 60/90, and unchanged 15/31 figures are
  design-time targets computed here for the first time as this
  Revision's own successor arithmetic — they are not a recalculation
  of an existing accepted corpus, since no five-room corpus has ever
  been accepted; no further recalculation beyond this document's own
  Section 10 is authorized).
- Tier 1 corpus preparation, creation, annotation, or fixture work
  involving toilet room or any other room type.
- Provider/model evaluation, contact, or selection.
- Implementation Package preparation or implementation.
- Any use of toilet room in an active corpus, annotation pass, metric
  computation, threshold determination, or evaluation run.
- Schema change of any kind.
- Any Module Applicability Profile or Preparation Plan successor
  synchronization pass (Section 17, steps 6-7) — named as required
  future steps, not performed here.
```

---

## 20. Traceability Matrix

| Revision 14 provision | Source basis | Status |
|---|---|---|
| Five room types (living room, bedroom, kitchen, bathroom, toilet room) | Bounded Scope Rev5 §6, confirmed by Rev5 Owner Acceptance §4 | Imported unchanged |
| Toilet room two-stage status and this document's role as the Rev13-alignment successor | Bounded Scope Rev5 §6.1, §9.3, §11.1, §11.2 step 6 | Direct trigger for this Revision 14 |
| Bathroom/toilet-room normative distinction (Section 5) | Bounded Scope Rev5 §7 | Imported unchanged; evaluation-dataset case table is this Revision 14's own addition |
| Relation applicability reservation to Contract 2/3 (Section 6) | Rev13 §7.2; Preparation Plan Rev4 §2 Contract 2/3 acceptance boundaries | Reaffirmed, not reopened |
| 5x6 ordinary grid, 30 cells, 60/90 images (Section 8) | Rev13 §10.1, read in full (Section 3) | Recomputed by this Revision 14 |
| Special-group pooling and unchanged 15/31 minimums (Section 9) | Rev13 §10.2; Bounded Scope Rev5 §9.1 | Reconfirmed independently (Section 9.1) |
| Corpus totals 75 development / 121 held-out (Section 10.1) | Derived from Sections 8-9 | New arithmetic, this Revision 14 |
| §15.1 "four room types" -> "five room types" correction (Section 10.3) | Rev13 §15.1, identified by this Revision 14's own full reading (Section 3.1), not named in Bounded Scope Rev5 §9.1 | New finding, this Revision 14 |
| §18 semantic-population figure 103 -> 121 correction (Section 10.4) | Rev13 §18 "Unexpected rates" row | Mechanically implied by Section 10.1 |
| Relation GT support floor non-formulaic proof (Section 11.2) | Rev13 §16, arithmetic check performed by this Revision 14 | New analysis, this Revision 14 |
| Ten-row Blocking support-floor Open disposition (Section 12) | Rev13 §18/§19, row-by-row check performed by this Revision 14 | New analysis, this Revision 14 |
| 81-row Metric Registry categorization (Section 13) | Rev13 §19, read in full and categorized by this Revision 14 | New categorization, cross-checked to Rev13's stated total |
| Contract 1-10 impact matrix (Section 15) | Preparation Plan Rev4 §2; Bounded Scope Rev5 §10 (scope-layer precedent) | Extended to the evaluation-methodology layer by this Revision 14 |
| Category vocabulary dependency inventory (Section 16) | Bounded Scope Rev5 §9.1 R-5; drafting-instruction candidate list | New inventory, this Revision 14; explicitly non-binding |
| Governance sequence and step 6/7 ordering assessment (Section 17) | Preparation Plan Rev4 §0-§9; Module Applicability Profile Rev13 §3, §17 item 9 | Assessed against actual document state, not assumed |
| Module Applicability Profile IMPL-04/EVAL-01/§2 and BASE-00A/BASE-01/GOV-03/PROV-01/PROV-05 citation staleness | Module Applicability Profile Rev13, read in full (Section 3) | Identified as affected; not modified (this Revision 14 does not edit the Profile) |

---

## 21. Supersession Rule

```text
This Revision 14 does not supersede Revision 13 upon preparation,
publication, or delivery of this document. It is a proposed successor
candidate only.

Revision 13 remains the sole authoritative Candidate A Evaluation
Threshold and Acceptance Plan, in full, without any modification,
until the Project Owner explicitly accepts this Revision 14.

Upon explicit Project Owner Acceptance of this Revision 14 (Section
18, Decision 1), and only then, this Revision 14 supersedes Revision
13 in full. No partial or conditional supersession is defined: either
Revision 14 is accepted and fully replaces Revision 13, or it is not
accepted and Revision 13 continues to govern unchanged.

Repository persistence of this Revision 14 (i.e., committing this
file so that it is no longer merely a working draft) is a separate,
explicit authorization, distinct from acceptance itself, exactly as
was true for Revision 13 and for Bounded Scope Decision Revision 5.

Neither acceptance nor persistence has occurred as of this document's
preparation date.
```

---

## 22. Risks and Unresolved Issues

```text
R-1 (structural, acknowledged not mitigated further here): Ten
    Blocking Metric Registry support floors (Section 12, Decisions
    8-9) cannot be finalized by this document. Until a future Owner
    Decision resolves them using actual development denominators,
    toilet room's evaluation methodology is internally consistent but
    incomplete for those ten rows specifically. This is treated as an
    honest gap, not silently closed by assumption — consistent with
    the explicit instruction not to invent a resolution.

R-2 (sequencing, informative only): Relation applicability for toilet
    room (Section 6) is doubly gated — first by the not-yet-drafted
    Contract 3, then by the R-1 support-floor determination for any
    relation type Contract 3 finds applicable. This creates a two-step
    dependency chain for Adjacency/Containment/Blocking evaluation
    readiness that does not exist for entity-level (StructuralElement/
    Object) metrics, which depend only on R-1-equivalent floors
    (ENT-SE-R, ENT-OBJ-R) and not on a separate applicability
    determination.

R-3 (textual, low severity, inherited and extended from Bounded Scope
    Rev5 R-3): The Module Applicability Profile's "four room types"
    citations (§2, IMPL-04, EVAL-01) and the broader Bounded-Scope-
    Rev3-citation staleness (BASE-00A, BASE-01, GOV-03, PROV-01,
    PROV-05, Section 18 Decision 19) remain uncorrected until a future,
    separately authorized Profile successor. Left unaddressed
    indefinitely, this could confuse a future reader consulting only
    the Profile in isolation. Mitigation: Section 20's traceability
    table and Section 18 Decision 19 name all affected entries
    explicitly.

R-4 (open ambiguity-handling item, not resolved by design): The
    cropped/ambiguous bathroom-vs-toilet-room case named in Section
    7.2 (bath/shower possibly present but outside the visible frame)
    is not resolved by Bounded Scope Rev5 §7.4 or by this Revision 14.
    It is reserved to the future Contract 7. This Revision 14 does not
    prejudge which of the two structurally available resolutions
    (visible-evidence classification vs. inconclusive exclusion)
    Contract 7 should choose.

R-5 (unaddressed by design, inherited from Bounded Scope Rev5 R-5):
    Whether `toilet` requires a new, distinct top-level Object/
    StructuralElement subtype, or is adequately covered by an existing
    fixture-level concept, remains a Contract 1 drafting question
    (Section 16). Several additional candidate vocabulary items
    (Section 16) carry the same open disposition, most notably the
    very-low-confidence `urinal` candidate, which this Revision 14
    flags as likely out of Residential-first scope without deciding
    the question.

R-6 (governance-sequence judgment call, not a defect): The relative
    ordering of the future Module Applicability Profile
    synchronization pass and the future combined Preparation Plan
    successor (Section 17.1) is this Revision 14's own non-binding
    recommendation, not a dependency-graph fact discovered in the
    source documents — the sources are silent on this specific
    ordering question. The Project Owner may reorder these two future
    steps without contradicting anything in this Revision 14.
```

---

## 23. Pre-Review Completeness Self-Check

```text
[x] Document metadata present; correctly distinguishes Draft/
    Not-Accepted status from Revision 13's Accepted status.
[x] Change summary (Section 1) enumerates every substantive change
    against Revision 13, and every provision NOT changed, verified by
    full re-reading rather than recollection.
[x] All nine baselines named in the originating request located by
    direct directory listing, read (in full or by the documented
    hybrid full-read/full-text-search method for the two largest,
    least room-count-relevant documents), and cited with exact paths,
    revision status and line counts (Section 3).
[x] Two local drafts named in the originating chain of documents
    (Bounded Scope Rev4; Preparation Plan "Rev5") confirmed absent
    from the repository by direct directory listing, not assumed
    absent from memory (Section 3).
[x] One additional room-count-keyed Rev13 provision (§15.1) found by
    this Revision 14's own full reading, beyond Bounded Scope Rev5's
    own inventory, and corrected (Section 3.1, Section 10.3).
[x] Five-room scope imported by reference, not redefined (Section 4).
[x] Bathroom/toilet-room distinction imported by reference; evaluation-
    dataset case table added as this Revision 14's own contribution,
    without redefining Rev5 §7 (Section 5).
[x] Relation applicability explicitly reserved to Contract 2/3, not
    decided here; the evaluation-level consequence of a future
    "applicable" determination is stated without prejudging it
    (Section 6).
[x] Ambiguity/classification rules separated into "resolved by
    unmodified Rev13 provisions" vs. "open Contract 7 item," not
    conflated (Section 7).
[x] All six scenario families individually checked against toilet
    room, not assumed uniformly applicable; finding (all six
    applicable, no not-applicable cell) is fixed normatively as
    instructed (Section 8.1).
[x] Ordinary-grid arithmetic (30 cells; 60 dev; 90 HO) shown in a
    table, not left in prose only (Section 8.2).
[x] Special-group pooling verified independently (not merely cited
    from Rev5) against Rev13 §10.2's own text and Rev3 Part I.2's
    cross-room framing; unchanged 15/31 minimums confirmed, not
    assumed (Section 9).
[x] Full old/new corpus-total reconciliation table with a Reason and
    Affected-Section column for every row, as required (Section
    10.1). No corpus arithmetic left in prose only.
[x] §15.1 and §18 literal-figure corrections identified and applied,
    distinct from each other and from the ten Open support floors
    (Sections 10.3, 10.4).
[x] Per-room floor applicability checked per family (category
    correctness, AQ families, relation GT support, ten specific
    Blocking rows), not treated as one undifferentiated question
    (Sections 11, 12).
[x] Relation GT support floors' non-formulaic nature proven by
    explicit arithmetic (4x5=20 matches; 4x4=16 does not match the
    stated 15, twice), not merely asserted (Section 11.2).
[x] Every room-sensitive Blocking Metric Registry row (19 of 81)
    individually tabulated with old/new population, support
    requirement, threshold, satisfiability and change-required
    columns, as required (Section 12).
[x] No threshold silently loosened; no room-type treated as
    automatically passing due to low support (Section 12, explicit
    statement).
[x] All 81 Metric Registry rows accounted for by exhaustive, disjoint
    category, cross-checked against Rev13's own stated total of 81
    (Section 13.8).
[x] Contract 11 explicitly not prepared, drafted, or prejudged;
    five-room denominators named as its future structural input only
    (Section 14).
[x] Supporting Contracts 1-10 impact matrix covers all ten contracts
    individually, distinguishing the evaluation-methodology-layer
    impact from Bounded Scope Rev5's own scope-layer impact analysis
    (Section 15).
[x] Category vocabulary dependencies named as candidates only, with an
    explicit confidence rating per item and no schema-level
    (top-level node class) addition, per the explicit constraint
    (Section 16).
[x] Governance sequence checked against actual Mandatory Sequence text
    in the Module Applicability Profile rather than assumed; the
    specific step 6/7 ordering question was analyzed with a stated
    rationale and flagged as this document's own non-binding
    recommendation, not a discovered fact (Section 17, Section 17.1).
[x] Owner Decision entries kept atomic; methodology acceptance, corpus
    authorization, implementation authorization and repository
    persistence are not mixed within a single decision (Section 18).
[x] Explicit non-authorization boundary restates and extends the
    Revision 13 / Bounded Scope Rev5 boundary pattern, naming every
    prohibited action from the original drafting instructions
    (Section 19).
[x] Traceability matrix maps every substantive provision, including
    every new finding and every new arithmetic result, to its source
    (Section 20).
[x] Supersession rule stated in the same pattern as Bounded Scope
    Rev5 §16, correctly describing Revision 13 as unmodified pending
    acceptance (Section 21).
[x] Risks and unresolved issues distinguish structural gaps (R-1, R-2)
    from textual/inherited items (R-3, R-5) from genuine open
    ambiguity-handling and sequencing judgment calls (R-4, R-6), not
    conflated into one undifferentiated list (Section 22).
[x] No edit, modification, staging, commit, or push was performed
    against Revision 13, Bounded Scope Decision Revision 5, the
    Contracts 1-10 Preparation and Dependency Plan, Test Data Handling
    Decision Revision 9, or the Module Applicability Profile during
    preparation of this document. No Owner Acceptance record was
    created.
[x] Document is not declared Accepted. Status remains Draft — Awaiting
    Project Owner Review throughout.
```

This self-check does not declare this document Accepted. It records only that the document is internally complete against the required structure and analysis depth, and is ready for Project Owner review — performed once, in one consolidated pass, without deferring analysis that could be completed now to a later revision, per the explicit drafting instruction.

---

```text
Document status:
Draft — Awaiting Project Owner Review.
Not Accepted.
Repository persistence: Authorized and completed for review access only.
This persistence does not constitute Project Owner acceptance. Revision 13
remains authoritative until separate acceptance of Revision 14.

Revision:
14 (proposed successor to Evaluation Threshold and Acceptance Plan
Revision 13).

Toilet room:
Bounded scope: accepted (Bounded Scope Decision Rev5, unchanged by
this document).
Evaluation-methodology status upon acceptance of this Revision 14:
active — grid cells, denominators and applicable Metric Registry
categories fixed and internally consistent, subject to the ten
explicitly Open support-floor determinations (Section 12).
Corpus creation: still not authorized.
Provider/model evaluation: still not authorized.
Implementation: still not authorized.

Revision 13, Bounded Scope Decision Revision 5, Contracts 1-10
Preparation and Dependency Plan Revision 4, Test Data Handling
Decision Revision 9, Module Applicability Profile Revision 13:
Not modified. Not reopened beyond the impact-analysis findings
recorded in Sections 3, 6, 14-17, 20.

Schema, corpus, provider, and implementation authorization:
Not granted by this document.

Repository changes performed:
NO.
```
