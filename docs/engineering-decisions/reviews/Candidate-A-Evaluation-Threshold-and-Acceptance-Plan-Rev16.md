# Candidate A Evaluation Threshold and Acceptance Plan — Revision 16 (Residential-34 Alignment Successor to Revision 15)

```text
Document type: Proposed Owner Governance Decision (not an ADR; not an
    Implementation Package) — standalone successor candidate
Status: Draft — Awaiting Project Owner Review
Prepared by: Claude (Chief Software Architect / Specification Partner)
Engineering correction and consolidated review: ChatGPT, Engineering Architect
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-23
Repository: Qazaq71/VistaRoom.AI, branch main
Repository persistence: NOT PERFORMED — not authorized by this document
Supersedes: Revision 15 (Accepted, Project Owner, 2026-07-18) — not
    modified, not reopened, remains the sole authoritative Evaluation
    Threshold and Acceptance Plan until this Revision 16 is separately
    accepted by the Project Owner
Revision 15: Historical baseline pending this Revision 16's acceptance
Trigger: Candidate A Bounded Scope Decision Revision 5, in-place
    corrected (Section 2B) to a 34-category / 1-6 ImageAsset bounded
    model, names this document as one of three required Phase 6
    successor documents (Evaluation Threshold Plan, Test Data Handling
    Decision, Module Applicability Profile). This Revision 16 is that
    successor for the Evaluation Threshold and Acceptance Plan.
Implementation: Not authorized by this document
Corpus creation or annotation: Not authorized by this document
Contract 1-10 drafting/re-drafting: Not authorized by this document
    (Contract 1 Revision 19 and Contract 2 Revision 10 are imported as
    already-completed, Owner-accepted, candidate-locked inputs; neither
    is redrafted, revalidated, or reopened by this document)
Numeric acceptance-threshold changes: Not performed by this document
    except where explicitly flagged as mechanical corpus/grid
    cardinality recomputation (Sections 7 and 9); see Section 0
    for the governing distinction
```

---

## 0. Governing distinction: corpus/grid cardinalities vs. metric acceptance thresholds

Per explicit Project Owner Decision (2026-07-22), this Revision 16 draws a hard line between two classes of number that could otherwise be confused:

```text
Corpus / grid cardinalities:
the arithmetic is mechanically recomputed from N applicable cells ×
fixed per-cell minimum after the Project Owner accepts the corrected
normative grid unit as RoomCase (Decision 5). The unit correction is a
methodology decision; the resulting multiplication is not a separately
invented numeric threshold.

Metric acceptance thresholds (percentage/rate/count gates in the
Metric Registry, Section 12):
NOT changed by this document. Any genuinely new threshold value
that later proves necessary is raised to the Project Owner as a
separate, compact, named question (Section 17A) — not decided,
invented, or silently adjusted here.
```

This distinction governs every numeric change in this document. Where a number changes because the grid grew (e.g. RoomCase cardinality), it is marked "mechanical recomputation." Where a number is a percentage/count *gate* that a result must clear, it is marked "unchanged" unless Section 17A explicitly raises it as an open question.

---

## Revision 16 Change Summary

This is a complete, standalone successor candidate to Revision 15, not a diff or patch note. It restates every Revision 15 provision it does not change, so it can be read, reviewed and (if accepted) adopted without reference to Revision 15's text.

```text
Changed (Revision 15 -> Revision 16):

- Title and scope: "Five-Room Evaluation Scope" replaced throughout by
  "Residential-34 Evaluation Scope." The historical toilet-room
  two-stage activation model does not recur: Bounded Scope Rev5's
  in-place correction places all 34 categories at active_candidate,
  and acceptance of this Revision 16 performs the evaluation-methodology
  alignment for the full set (Section 3).

- Evaluation unit: the inherited image-count formula is made compatible
  with the accepted Operation / RoomCase / ImageAsset[1..6] model.
  One ordinary-grid unit is now one RoomCase, not one ImageAsset.
  RoomCase cardinalities are mechanically recomputed; the resulting
  ImageAsset population is not fixed until the open capture-set
  distribution question is resolved (Sections 7.3-7.5, Section 17A).

- Section 7 (Ordinary RoomCase Grid and Capture-Set Coverage): full
  scenario-family applicability check recorded as an explicit 34 x 6
  matrix, per Project Owner Decision 1. Result: 204 applicable cells.
  Ordinary-grid minima are 408 development RoomCases and 612 held-out
  RoomCases (Section 7.3). Multi-image acceptance areas are named in
  Section 7.5 without inventing metric IDs or numeric thresholds.

- Section 8 (Special-Group Treatment): re-confirmed unchanged at
  15 development / 31 held-out RoomCases, cross-category pooled.

- Section 9 (Revised Corpus Totals): totals are expressed as RoomCases,
  not unique images: 423 development semantic RoomCases, 643 held-out
  semantic RoomCases, and 690 held-out evaluation cases including
  fixture suites. ImageAsset totals are variable because every valid
  RoomCase contains 1-6 ImageAssets.

- Sections 10-11 (Per-Category Floors and Threshold Feasibility): the
  ten Metric Registry rows already left Open by Revision 15 remain Open,
  generalized to 34 categories. No threshold is invented or loosened.

- Section 12 (Revised Metric Registry): all 81 IDs re-inventoried;
  no ID added, removed, or renamed. Descriptive category coverage and
  the literal held-out semantic population are synchronized.

- Section 14 (Supporting Contracts 1-10 Impact Matrix): Contract 1
  Revision 19 and Contract 2 Revision 10 are recorded as completed,
  Owner-accepted, candidate-locked inputs; neither is reopened.

- Section 15 (Category Vocabulary Dependencies): synchronized with
  Contract 1 Revision 19 by reference only. Any remaining serialization
  or schema-field alignment belongs downstream to Contract 10, not to
  further Contract 1 drafting.

- Section 16 (Governance Sequence): updated to the actual root-up
  sequence through Phase 6, followed by one Project Context/Roadmap
  synchronization and one final consolidated root-package review.

- Section 17 (Owner Decisions and Open Questions): updated for the
  Residential-34 / RoomCase model. Open numeric/support questions and
  open multi-image distribution/metric questions remain in one compact
  list; no separate document is created.

- Header metadata records the Engineering Architect correction and
  consolidated-review role for the in-place Revision 16 update.

Not changed:
- Mechanism Class B, denominator classes, geometry/evidence contracts,
  entity accounting, deterministic error taxonomy, relation identity,
  unknown/determinability, confidence/calibration, fixture-suite
  definitions, or the 81 Metric Registry IDs.
- Existing percentage/rate/count acceptance thresholds. Any genuinely
  new threshold requires a separate Project Owner decision.
```

---

## 1. Purpose

Unchanged from Revision 15 Section 2: this document defines the evaluation-methodology consequences — grid sizing, corpus totals, per-room floor feasibility, and Metric Registry scope — of an accepted Bounded Scope change, without itself authorizing corpus creation, annotation, provider/model evaluation, or implementation.

---

## 2. Imported Authoritative Baselines

```text
1. Candidate A Bounded Scope Decision Revision 5 (Accepted, Project
   Owner, 2026-07-18; in-place corrected to the 34-category / 1-6
   ImageAsset model, Section 2B) — owns room-category activation,
   input/capture-set model, and outcome model. Not reopened.
2. Perception Mechanism Selection and Evaluation Architecture Revision
   3 (Accepted, 2026-07-14; corrected for the multi-image perception
   boundary alongside ADR-015) — owns Mechanism Class B and the
   evidence/confidence/provenance contracts. Not reopened.
3. Evaluation Threshold and Acceptance Plan Revision 15 (Accepted,
   Project Owner, 2026-07-18) — this document's own direct predecessor.
4. Candidate A Supporting Contract 1 — Master Vocabulary and Active
   Evaluation Profile, Revision 19 (candidate-locked, C1-REV19-CL-001,
   SHA-256 d899a13e...329) — owns Layer 1/Layer 2 vocabulary identity
   and the 34-category Active Evaluation Profile list (Section 2.3).
   Imported by reference; not restated or forked.
5. Candidate A Supporting Contract 2 — Relation Annotation and
   Applicability, Revision 10 (candidate-locked, C2-REV10-CL-001,
   SHA-256 758bf9b9...177) — owns relation-type semantics in general.
   Not revalidated or reopened by this document.
6. Candidate A Contracts 1-10 Preparation and Dependency Plan Revision
   11 (Accepted, Project Owner, 2026-07-18) — owns contract drafting
   order and terminology ownership. Referenced in Section 15; its own
   room-count language remains a separate, later synchronization item
   not performed by this document (Section 21, Risk R-2).
7. Candidate A Test Data Handling Decision Revision 9 (Accepted,
   Project Owner, 2026-07-16) — owns data-governance rules for
   evaluation artifacts. This document's own successor (Test Data
   Handling Decision Revision 10) has been prepared as Phase 6 item B,
   after this document, and is reviewed as a separate successor.
```

### 2.1 Provisions confirmed not materially affected

Unchanged from Revision 15 Section 3.2: governance classes, geometry/evidence contracts, unknown/determinability contract, ordinal confidence, fixture suites, Concrete Conformance Field Inventory, partial-scene handling. Re-confirmed by full re-reading, not by summary.

---

## 3. Residential-34 Evaluation Scope

```text
Old (Revision 15): five active room types (living room, bedroom,
kitchen, bathroom, toilet room), under a two-stage status model that
separated Bounded-Scope acceptance from evaluation-methodology
activation.

New (this Revision 16): all 34 Residential-34 categories (Bounded Scope
Rev5 Section 6; Contract 1 Rev19 Section 2.3), each an active_candidate
Canonical Space Type or Composite Space Profile, each receiving its own
explicit evaluation-methodology row in this document (Section 7.2).
```

The 34 categories:

```text
living_room          bedroom              children_room
guest_bedroom        primary_bedroom      kitchen
dining_room          kitchen_living_room  home_office
library              bathroom             toilet_room
shower_room           combined_bathroom    entryway
vestibule             hall                 corridor
dressing_room         walk_in_closet       pantry
laundry_room          utility_room         mechanical_room
staircase_space       stair_hall           attic
mansard_room          basement             garage
balcony               terrace              veranda
winter_garden
```

`kitchen_living_room` is one of the 34 (not a 35th) — an active named Composite Space Profile (`living_room` + `kitchen`). `bedroom`, `children_room`, `guest_bedroom`, and `primary_bedroom` are four separate active categories, not one category with three sub-variants folded together (Owner Decision 3, 2026-07-22; Contract 1 Rev19 Section 2.3). Both facts are carried into the grid as four/one separate rows respectively (Section 7.2), not merged.

### 3.1 No two-stage activation gate for this transition

Revision 14/15's two-stage model existed because Bounded Scope Rev5's *original* text deferred toilet room's evaluation-methodology status pending "a separate Rev13 alignment decision or successor revision." Bounded Scope Rev5's in-place correction (Section 2B) does not restate that deferral for the 34-category transition; instead it names this document (Phase 6, item A) as the vehicle that itself performs the alignment. Accordingly, upon acceptance of this Revision 16, evaluation-methodology status for all 34 categories becomes active in the same act — there is no intermediate "scope accepted, evaluation not yet aligned" state to track separately, unlike the historical toilet-room case.

### 3.2 Residential-first preserved; no new segment activated

Unchanged from Revision 15 Section 4.2: the active segment remains Residential-first. No commercial, public, or specialized-domain segment is activated by this document.

---

## 4. Sanitary-Category Evaluation Distinction

Revision 15 Section 5 distinguished bathroom from toilet room for evaluation purposes (fixture-count expectations, category-correctness support). Bounded Scope Rev5 Section 7 extends the sanitary distinction to four canonical categories: `bathroom`, `toilet_room`, `shower_room`, `combined_bathroom`. This document extends Revision 15's evaluation-dataset handling identically to all four:

```text
Each of the four sanitary categories receives its own ordinary-grid
row (Section 7.2) and its own category-correctness support accounting
(Section 10.1), on the same terms already established for
bathroom/toilet_room in Revision 15 — no new rule is invented; the
existing rule is applied to two additional siblings.
```

---

## 5. Relation Applicability Impact

Unchanged from Revision 15 Section 6: which relation types (Adjacency, Containment, Blocking) apply to which of the 34 categories is Contract 3's job, not this document's or Contract 2's. This document fixes only the evaluation-level *consequence* of relation applicability once Contract 3 determines it (Section 12), conditionally, exactly as Revision 15 did for the five-room case.

---

## 6. Ambiguity and Classification Rules

Unchanged from Revision 15 Section 7: resolved by unmodified Revision 13 provisions; the one item left open there (borderline classification for atypical layouts) remains an open Contract 7 item, now scoped to 34 categories rather than five. No new rule is created by this document.

---

## 7. Ordinary RoomCase Grid and Capture-Set Coverage

Revision 15 inherited the earlier formula as "two unique images per cell" for development and "three" for held-out. That wording is no longer sufficient after adoption of the accepted model:

```text
Operation
└── RoomCase[exactly 1]
    ├── ImageAsset[1..6]
    └── one consolidated PerceptionResult
```

For Revision 16, the normative ordinary-grid unit is therefore **one RoomCase**, not one ImageAsset. Each RoomCase contains 1-6 governed ImageAssets depicting the same physical/staged room in the same material state. RoomCase counts and ImageAsset counts must be reported separately.

The six scenario families remain unchanged: normal readable; moderate clutter; partial occlusion; partial-room framing; lighting variation; camera-angle variation.

### 7.1 Scenario-family applicability method

Per Project Owner Decision 1 (2026-07-22), every category × scenario-family combination is checked explicitly. `Not Applicable` is permitted only where a family is architecturally meaningless or impossible for the category. Where a family is possible for a valid subset of real instances, it is `Applicable`; category-specific capture guidance belongs to Contract 7 rather than to an applicability exception.

Evidentiary clusters are retained only as rationale aids:

```text
1. Primary living/work spaces
2. Sanitary/wet rooms
3. Transitional/circulation spaces
4. Storage/utility/technical spaces
5. Roof/basement spaces
6. Vehicle/semi-outdoor spaces
```

The prior cluster rationales remain valid: clutter, occlusion, partial framing, lighting variation, and camera-angle variation are meaningful for each cluster, including narrow circulation spaces, windowless utility rooms, irregular roof/basement spaces, and natural-light-dominant semi-outdoor spaces.

### 7.2 Explicit 34 × 6 applicability matrix

`A` = Applicable. No cell is assigned `Not Applicable`.

| # | Category | Cluster | Normal readable | Moderate clutter | Partial occlusion | Partial-room framing | Lighting variation | Camera-angle variation | Rationale note |
|---:|---|---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| 1 | living_room | 1 | A | A | A | A | A | A | Baseline case, unchanged from Rev13 |
| 2 | bedroom | 1 | A | A | A | A | A | A | Baseline case, unchanged from Rev13 |
| 3 | children_room | 1 | A | A | A | A | A | A | Bedroom specialization; separate category |
| 4 | guest_bedroom | 1 | A | A | A | A | A | A | Bedroom specialization; separate category |
| 5 | primary_bedroom | 1 | A | A | A | A | A | A | Bedroom specialization; separate category |
| 6 | kitchen | 1 | A | A | A | A | A | A | Baseline case, unchanged from Rev13 |
| 7 | dining_room | 1 | A | A | A | A | A | A | Furnished occupied space |
| 8 | kitchen_living_room | 1 | A | A | A | A | A | A | Composite Space Profile; one of the 34 |
| 9 | home_office | 1 | A | A | A | A | A | A | Furnished work space |
| 10 | library | 1 | A | A | A | A | A | A | Furnished work/storage space |
| 11 | bathroom | 2 | A | A | A | A | A | A | Sanitary/wet-room profile |
| 12 | toilet_room | 2 | A | A | A | A | A | A | Individually confirmed in Rev15 |
| 13 | shower_room | 2 | A | A | A | A | A | A | Sanitary/wet-room profile |
| 14 | combined_bathroom | 2 | A | A | A | A | A | A | Sanitary/wet-room profile |
| 15 | entryway | 3 | A | A | A | A | A | A | Transitional space |
| 16 | vestibule | 3 | A | A | A | A | A | A | Transitional space |
| 17 | hall | 3 | A | A | A | A | A | A | Transitional/circulation space |
| 18 | corridor | 3 | A | A | A | A | A | A | Partial framing especially salient |
| 19 | dressing_room | 4 | A | A | A | A | A | A | Storage space |
| 20 | walk_in_closet | 4 | A | A | A | A | A | A | Frequently windowless |
| 21 | pantry | 4 | A | A | A | A | A | A | Frequently windowless |
| 22 | laundry_room | 4 | A | A | A | A | A | A | Utility space |
| 23 | utility_room | 4 | A | A | A | A | A | A | Utility space |
| 24 | mechanical_room | 4 | A | A | A | A | A | A | Equipment creates ordinary clutter/occlusion |
| 25 | staircase_space | 3 | A | A | A | A | A | A | Vertical circulation; partial framing salient |
| 26 | stair_hall | 3 | A | A | A | A | A | A | Circulation space |
| 27 | attic | 5 | A | A | A | A | A | A | Irregular geometry; variable lighting |
| 28 | mansard_room | 5 | A | A | A | A | A | A | Roof-space geometry |
| 29 | basement | 5 | A | A | A | A | A | A | Frequently windowless |
| 30 | garage | 6 | A | A | A | A | A | A | Vehicles/tools create clutter and occlusion |
| 31 | balcony | 6 | A | A | A | A | A | A | Natural-light-dominant semi-outdoor space |
| 32 | terrace | 6 | A | A | A | A | A | A | Natural-light-dominant semi-outdoor space |
| 33 | veranda | 6 | A | A | A | A | A | A | Semi-outdoor/partly enclosed space |
| 34 | winter_garden | 6 | A | A | A | A | A | A | Glazed enclosure; lighting variation salient |

**Finding:** all 204 cells are Applicable. The matrix records each cell independently; the cluster rationale does not merge or replace category-level findings.

### 7.3 Recomputed ordinary grid — RoomCase counts

```text
Old Revision 15 wording:
  5 categories × 6 families = 30 cells
  development: 30 × 2 = 60 grid units
  held-out:    30 × 3 = 90 grid units

Residential-34 Revision 16:
  34 categories × 6 families = 204 cells
  development: 204 × 2 RoomCases/cell = 408 RoomCases
  held-out:    204 × 3 RoomCases/cell = 612 RoomCases
```

The per-cell minima 2 and 3 are unchanged. Only the number of applicable category × family cells changes. These are **RoomCase cardinalities**, not ImageAsset cardinalities.

### 7.4 ImageAsset cardinality and capture-set distribution

Every valid ordinary-grid RoomCase contains 1-6 ImageAssets. Accordingly:

```text
development ordinary grid: 408-2448 ImageAssets in principle
held-out ordinary grid:    612-3672 ImageAssets in principle
```

These are unconstrained mathematical ranges, not conforming corpus requirements; the final minimum will exceed the lower bound because both single-image and multi-image populations are mandatory. This Revision 16 does not silently choose how many RoomCases must use cardinalities 1, 2, 3, 4, 5, or 6. The required distribution across single-image and multi-image RoomCases remains an explicit Owner question in Section 17A, Q3.

A corpus consisting only of single-image RoomCases would satisfy the category × family grid but would **not** satisfy the accepted multi-image bounded scope. Therefore formal evaluation readiness additionally requires a separately accepted capture-set distribution that includes both single-image and multi-image RoomCases in development and held-out populations.

### 7.5 Mandatory multi-image evaluation areas

The evaluation methodology must cover, at minimum:

1. same-room capture-set validation;
2. mixed-room input rejection;
3. cross-view entity matching;
4. re-observation deduplication without collapsing genuinely distinct objects;
5. contradiction preservation;
6. evidence fusion across contributing ImageAssets;
7. per-image and RoomCase-level provenance;
8. one consolidated PerceptionResult for the operation;
9. correct behavior for both one-image and multi-image RoomCases.

These areas are mandatory evaluation obligations, but this Revision 16 does not invent numeric pass thresholds or new Metric Registry IDs for them. Their mapping to existing metrics, or authorization of additional IDs/thresholds if genuinely necessary, remains Section 17A, Q4.

### 7.6 Sufficiency and completeness impact

Revision 15's sufficiency/completeness/expected-family criteria remain unchanged in content. They now apply to RoomCases. Contract 7 must later define annotation and sufficiency rules for capture sets and the mandatory multi-image areas above; this document does not authorize Contract 7 drafting.

---

## 8. Special-Group Treatment

Rev13 §10.2 special-group minimums:

```text
low-information:               3 development / 6 held-out RoomCases
empty or near-empty:           2 development / 5 held-out RoomCases
meaningful partial-scene:      5 development / 10 held-out RoomCases
genuine insufficient-evidence: 5 development / 10 held-out RoomCases
```

Unchanged from Revision 15 §9: these four groups are pooled cross-room, not partitioned per category (Bounded Scope Rev5 §9.1; Rev13 §10.2; Rev3 Part I.2). They are not room-count-keyed and require no numeric change at 34 categories.

```text
Special-group RoomCase minimums, Residential-34 model: UNCHANGED.
development: 3 + 2 + 5 + 5 = 15 RoomCases
held-out:    6 + 5 + 10 + 10 = 31 RoomCases
```

The pool from which these groups are drawn now includes all 34 categories; the fixed minimum size of each pool does not increase (Rev15 §9.2's reasoning, generalized without modification). Special-group membership and ordinary-grid membership remain mutually exclusive for minimum counts (Rev13 §10.2, unchanged). No category-specific special group is created merely because 29 additional categories exist (Rev15 §9.4's reasoning, generalized).


---

## 9. Revised Corpus Totals

### 9.1 Reconciliation table

| Item | Rev15 value (5-category) | Residential-34 value | Reason | Affected section(s) |
|---|---:|---:|---|---|
| Ordinary-grid cells | 30 | 204 | Explicit 34 × 6 matrix; all cells Applicable | §7.2-§7.3 |
| Ordinary-grid development population | 60 images | 408 RoomCases | 204 cells × 2 RoomCases/cell after unit alignment | §7.3 |
| Ordinary-grid held-out population | 90 images | 612 RoomCases | 204 cells × 3 RoomCases/cell after unit alignment | §7.3 |
| Special-group development population | 15 images | 15 RoomCases | Per-group minima unchanged; unit aligned to RoomCase | §8 |
| Special-group held-out population | 31 images | 31 RoomCases | Per-group minima unchanged; unit aligned to RoomCase | §8 |
| **Total development semantic population** | **75 images** | **423 RoomCases** | 408 + 15 | §9 |
| **Total held-out semantic population** | **121 images** | **643 RoomCases** | 612 + 31 | §9 |
| Development semantic ImageAssets | not separately specified | variable: 423-2538 mathematical range | 1-6 ImageAssets per semantic RoomCase; distribution remains Q3 | §7.4, §17A |
| Held-out semantic ImageAssets | not separately specified | variable: 643-3858 mathematical range | 1-6 ImageAssets per semantic RoomCase; distribution remains Q3 | §7.4, §17A |
| Operational fixture suite (Failure + C.2 + C.3 general) development/held-out | 16 / 29 | 16 / 29 (unchanged) | Category-count independent; inherited ETAP fixture definitions | Accepted ETAP baseline: Rev13 §12.1-§12.3, carried by Rev15 |
| Contract Violation fixture suite development/held-out | 12 / 18 | 12 / 18 (unchanged) | Category-count independent | Accepted ETAP baseline: Rev13 §12.4, carried by Rev15 |
| **Overall held-out evaluation cases** (semantic RoomCases + fixture cases) | 121 + 29 + 18 = 168 | 643 + 29 + 18 = 690 | Fixture cases remain separate from semantic RoomCases | This Revision 16 reconciliation |

RoomCase arithmetic is fully reconciled above. ImageAsset counts remain variable by design and must be reported separately once Q3 is resolved.

### 9.2 Lineage rule — unaffected

Rev13 §10.3's lineage rule ("all images from one physical/staged room or generation session... belong wholly to one subset") is category-count independent and unaffected. It applies identically across all 34 categories.

### 9.3 §15.1 annotation-quality room-cell definition — corrected

Rev13 §15.1: *"A room cell means one of the four room types, not room x scenario."* Revision 15 corrected this to "five room types." This Revision 16 corrects it again:

```text
Revised: "A room cell means one of the 34 Residential-34 categories,
not category x scenario."
```

The per-cell support minimums stated in §15.2 (category agreement >=10 paired labels; entity match/IoU >=8 instances/annotator and >=4 matched pairs; relation agreement >=6 identities and >=3 matched identities; inconclusive rate >=10 units) are **unchanged in value**. They apply automatically to all 34 category strata wherever an applicable cell exists, by the already-generic "family x room type" wording of §15.1-§15.2. Textual and cell-count correction only, not a threshold change.

### 9.4 §18/§19 literal semantic-population figure — corrected

Rev13 §18's "Unexpected rates" row states a literal sealed-semantic-population figure, corrected by Revision 15 from 103 to 121. Because the total held-out semantic RoomCase population changes from 121 to 643 (Section 9.1), this figure is corrected a second time:

```text
Revised: "sealed semantic RoomCase N=643 or eligible subset."
```

This remains the one place in the §18 stability appendix where a literal category-count-derived number appears outside a generic "overall/per category" pattern. The numeric recomputation follows Section 9.1, while the denominator-unit migration from image to RoomCase follows Decision 5 and the operation-level PerceptionResult model; neither changes the percentage/rate threshold itself.

---

## 10. Per-Category Floors and Support

This section directly answers the drafting instruction to check every per-category floor, Metric Registry row, and threshold for satisfiability after scope expansion, rather than assuming symmetry.

### 10.1 Category-correctness support rule (§6.3) — extends automatically

```text
Rev13 §6.3: "at least four matched pairs overall and at least four
matched pairs in every room type for which a category floor is
reported."
```

Already written generically per category; applies automatically to all 34 categories once (and only once) a category floor is actually reported for each — which requires corpus/annotation work this document does not authorize. No re-derivation needed; confirmed unchanged, now for 34 rather than 5.

### 10.2 Relation GT support floors (§16) — NOT re-derivable by formula, now proven even less so

```text
Rev13 §16:
  Adjacency:   20 overall and >=5 per applicable room type across >=3 scenes
  Containment: 15 overall and >=4 per applicable room type across >=3 scenes
  Blocking:    15 overall and >=4 per applicable room type across >=3 scenes
```

Revision 15 §11.2 already proved these three overall figures were not derived by one uniform per-room-count formula at the 4-room baseline: Adjacency's overall figure (20) happens to equal 4 x 5, but Containment's and Blocking's (15) do not equal 4 x 4 (=16). At 34 categories the same test is even more decisive: no single per-category floor, multiplied by 34, reproduces any of the three stated overall figures (5 x 34 = 170 != 20; 4 x 34 = 136 != 15, twice). This confirms, more strongly than at 5 categories, that these figures were sized as pooled minimums for a specific historical evaluation population, not as a formula that generalizes.

**Disposition:** these three overall+per-category floor pairs remain **Open**, exactly as in Revision 15, now explicitly carried forward to 34 categories. No mechanical extrapolation is applied. Resolution requires a future Owner Decision informed by actual development denominators (Contract 11), consistent with Rev13 §5.2 step 6. Also gated a second time by Contract 3's relation-applicability determination per category (Section 5).

### 10.3 The same ten-row open-support pattern, generalized

The same pattern recurs in the same ten §19 Metric Registry rows identified in Revision 15 (three relation-F1 rows above, plus ENT-SE-R, ENT-OBJ-R, SPACETYPE, UNK-SUBTYPE-UNDER, UNK-SUBTYPE-OVER, UNK-CONF-UNDER, UNK-PROV-OVER). Full inventory in Section 12.

### 10.4 Rows confirmed satisfiable without re-derivation

The same nine room-sensitive Blocking rows identified in Revision 15 use only a "zero produced => FAIL" terminal rule with no explicit corpus-GT overall/per-category count to re-derive; their percentage thresholds apply automatically to all 34 category strata as soon as the mechanism produces output for that category, with no re-derivation needed. Full list in Section 12.


---

## 11. Threshold Feasibility Analysis

Every room-sensitive Blocking Metric Registry row (19 of the 81 total, Section 12.1) is checked individually below, per the drafting instruction, rather than only at the category level. "34x" arithmetic is shown explicitly wherever a row carries an explicit overall+per-category GT/support count, to demonstrate — not merely assert — non-formulaic status at the new scale.

| Metric ID | Overall/per-category GT or support (unchanged since Rev13/15) | 34x arithmetic check | Threshold (unchanged) | Still satisfiable? | Change required? |
|---|---|---|---|---|---|
| ENT-SE-P | none (zero-produced => FAIL only) | n/a | >=0.80 overall; >=0.70 per category | Yes | No — extends automatically |
| ENT-SE-R | GT 20 overall / 8 per room | 34 x 8 = 272 != 20 | >=0.75 overall; >=0.65 per category | **Open** | **Yes — Owner Decision (Section 17A, Q1)** |
| ENT-OBJ-P | none | n/a | >=0.75 overall; >=0.65 per category | Yes | No |
| ENT-OBJ-R | GT 30 overall / 10 per room | 34 x 10 = 340 != 30 | >=0.65 overall; >=0.55 per category | **Open** | **Yes — Owner Decision (Q1)** |
| ENT-SE-CAT | >=4 matched pairs/category (§6.3, generic) | n/a — rule already generic | >=0.85 overall; >=0.75 per category | Yes | No — §6.3 extends automatically (Section 10.1) |
| ENT-OBJ-CAT | same | n/a | >=0.85 overall; >=0.75 per category | Yes | No |
| ENT-HALL | none | n/a | <=0.10 overall; <=0.15 per category | Yes | No |
| ENT-SEV-HALL | none | n/a | <=0.05 overall; <=0.08 per category | Yes | No |
| REL-ADJ-F1 | GT 20 overall / 5 per applicable category | 34 x 5 = 170 != 20 | >=0.65 overall; >=0.55 per applicable category | **Open** (gated by Contract 3, Section 5) | **Yes — Owner Decision (Q1)** |
| REL-ADJ-UNSUP | none | n/a | <=0.15 overall; <=0.20 per applicable category | Yes (once relation-applicable) | No, but gated by Contract 3 |
| REL-CONT-F1 | GT 15 overall / 4 per applicable category | 34 x 4 = 136 != 15 | >=0.65 overall; >=0.55 per applicable category | **Open** (gated) | **Yes — Owner Decision (Q1)** |
| REL-CONT-UNSUP | none | n/a | <=0.15 overall; <=0.20 per applicable category | Yes (gated) | No, but gated |
| REL-BLOCK-F1 | GT 15 overall / 4 per applicable category | 34 x 4 = 136 != 15 | >=0.55 overall; >=0.45 per applicable category | **Open** (gated) | **Yes — Owner Decision (Q1)** |
| REL-BLOCK-UNSUP | none | n/a | <=0.15 overall; <=0.20 per applicable category | Yes (gated) | No, but gated |
| UNK-SUBTYPE-UNDER | GT support 15 overall / 4 per category | 34 x 4 = 136 != 15 | <=0.15 overall; <=0.25 per category | **Open** | **Yes — Owner Decision (Q1)** |
| UNK-SUBTYPE-OVER | same | same | <=0.15 overall; <=0.25 per category | **Open** | **Yes — Owner Decision (Q1)** |
| UNK-CONF-UNDER | same | same | <=0.15 overall; <=0.25 per category | **Open** | **Yes — Owner Decision (Q1)** |
| UNK-PROV-OVER | same | same | <=0.15 overall; <=0.25 per category | **Open** | **Yes — Owner Decision (Q1)** |
| SPACETYPE | min 20 overall / 5 per category | 34 x 5 = 170 != 20 | >=0.98 overall; >=0.95 per category | **Open** | **Yes — Owner Decision (Q1)** |

**Summary:** 9 of 19 room-sensitive Blocking rows remain satisfiable without re-derivation (percentage thresholds over mechanism-output populations with no explicit corpus-GT count). The same 10 of 19 identified in Revision 15 carry an explicit overall+per-category GT/support count that was fitted to a 4-category population and is, at 34 categories, even more clearly not honestly extensible by formula. These are consolidated into a single open question (Section 17A, Q1) for the Project Owner, per explicit instruction not to invent a resolution and not to create a separate document for it. No threshold is loosened and no category is treated as automatically passing due to low support.

**No Blocking metric is silently made Not Applicable for any of the 34 categories by this analysis.** Every row above remains applicable in principle across the full Residential-34 set; the ten Open rows simply cannot be finally quantified per-category until Section 17A, Q1 is resolved with real data (Contract 11).


---

## 12. Revised Metric Registry

All 81 Rev13 §19 Metric IDs are accounted for below by category. No metric ID is renamed, added, or removed by this Revision 16 (Project Owner instruction, 2026-07-22: "не менять 81 Metric Registry ID без обнаруженного прямого конфликта идентичности" — no such conflict was found). Category assignment is exhaustive and disjoint; totals are cross-checked against Rev13's own stated count of 81.

### 12.1 Category A — Category-sensitive Blocking (19 rows)

`ENT-SE-P, ENT-SE-R, ENT-OBJ-P, ENT-OBJ-R, ENT-SE-CAT, ENT-OBJ-CAT, ENT-HALL, ENT-SEV-HALL, REL-ADJ-F1, REL-ADJ-UNSUP, REL-CONT-F1, REL-CONT-UNSUP, REL-BLOCK-F1, REL-BLOCK-UNSUP, UNK-SUBTYPE-UNDER, UNK-SUBTYPE-OVER, UNK-CONF-UNDER, UNK-PROV-OVER, SPACETYPE`

Aggregation rule ("Wilson 95%; micro-pooled overall and per-category") is category-count agnostic and extends automatically in form. Numeric thresholds are unchanged. Ten of these nineteen rows carry an overall+per-category support count requiring the Section 17A, Q1 disposition; the remaining nine are satisfiable without change. Full row-by-row disposition: Section 11.

### 12.2 Category B — Category-sensitive Diagnostic (35 rows)

`ENT-SE-F1, ENT-OBJ-F1, REL-ADJ-COND, REL-CONT-COND, REL-BLOCK-COND, REL-EVIDENCE, UNK-BEATTR-UNDER, UNK-BEATTR-OVER, CAL-SE-DET, CAL-OBJ-DET, CAL-SE-CAT, CAL-OBJ-CAT, CAL-REL-ADJ, CAL-REL-CONT, CAL-REL-BLOCK, BE-PLACE-COUNT, BE-PLACE-EVID, BE-PLACE-CONF, BE-PLACE-PROV, BE-PLACE-FALSEOBS, BE-EXTENT-COUNT, BE-EXTENT-EVID, BE-EXTENT-CONF, BE-EXTENT-PROV, BE-EXTENT-FALSEOBS, BE-AFFORD-COUNT, BE-AFFORD-EVID, BE-AFFORD-CONF, BE-AFFORD-PROV, BE-AFFORD-FALSEOBS, BE-ILLUM-COUNT, BE-ILLUM-EVID, BE-ILLUM-CONF, BE-ILLUM-PROV, BE-ILLUM-FALSEOBS`

Threshold is `none` for every row (Diagnostic governance class). Each row extends automatically to report each of the 34 category strata once mechanism output exists for that category. No change required.

### 12.3 Category C — Annotation-quality family x category (5 rows)

`AQ-CATEGORY-AGREE, AQ-ENTITY-MATCH, AQ-MEAN-IOU, AQ-RELATION-AGREE, AQ-INCONCLUSIVE`

Governed by the corrected §15.1 category-cell definition (Section 9.3). Per-cell support minimums (>=10 paired labels; >=8 instances/annotator and >=4 matched pairs; >=6 identities and >=3 matched identities; >=10 units, respectively) are unchanged in value; the count of applicable cells extends from five to 34. No threshold change.

### 12.4 Category D — Population-sensitive, not category-partitioned (7 rows)

`INS-SENS, INS-SPEC, PARTIAL, UNEXP-FAIL, UNEXP-C2, UNEXP-C3, UNEXP-COMB`

Denominators are semantic-case populations that grow with the ordinary-grid expansion (Section 7, Section 9). Percentage thresholds are unchanged. Minimum-N floors (INS-SENS N=10, INS-SPEC N=20, PARTIAL N=10) are unchanged — already floors, not exact counts, and comfortably satisfied by the larger Residential-34 population. The one literal population figure in this category's §18 row ("sealed semantic N=121") is corrected to 643 per Section 9.4.

### 12.5 Category E — Fixture-controlled (4 rows)

`FIX-FAIL, FIX-C2, FIX-C3, CVF-C3`

Confirmed category-count independent (Section 9.1). No change.

### 12.6 Category F — Zero-tolerance conformance/grounding (9 rows)

`C1-CANDIDATE, POSTC2-OP, POSTC2-ROOM, POSTC2-ELEM, POSTVAL-OP, POSTVAL-ROOM, POSTVAL-ELEM, GROUND-NODE, PARTIAL-CLAIM-CONFORM`

Rule (`=1.00`, zero-tolerance over the sealed operation population) is unaffected. The population these rows apply to grows with the corpus (Section 9.1); the rule itself does not change.

### 12.7 Category G — Mandatory Non-blocking (2 rows)

`LATENCY, COST`

Population- and outcome-based, not category-partitioned normatively. Unaffected.

### 12.8 Total cross-check

```text
Category A (Blocking, category-sensitive):         19
Category B (Diagnostic, category-sensitive):        35
Category C (Annotation-quality, category x family):  5
Category D (Population-sensitive, pooled):           7
Category E (Fixture-controlled):                     4
Category F (Zero-tolerance conformance):             9
Category G (Mandatory Non-blocking):                 2
                                                    ----
Total:                                              81
```

Matches Rev13 §19's own stated total exactly. No metric ID is double-counted or omitted.

---

## 13. Contract 11 Implications

Unchanged in kind from Revision 15 §14: Contract 11 (Aggregation, Uncertainty and Score-Stability Appendix) is not prepared, drafted, or prejudged by this document. Residential-34 denominators (Section 9.1) are named as its future structural input only, once actual development corpus/fixture data exist.


---

## 14. Supporting Contracts 1-10 Impact Matrix

| Contract | Status as of this Revision 16 | Impact of Residential-34 alignment |
|---|---|---|
| Contract 1 — Master Vocabulary and Active Evaluation Profile | **Completed.** Revision 19, candidate-locked (C1-REV19-CL-001, SHA-256 d899a13e...329). Not redrafted by this document. | Already encodes the 34-category Active Evaluation Profile (Section 2.3) and imports Bounded Scope Rev5's activation set. This Revision 16 is downstream of, and consistent with, that already-completed contract; no conflict found. |
| Contract 2 — Relation Annotation and Applicability | **Completed.** Revision 10, candidate-locked (C2-REV10-CL-001, SHA-256 758bf9b9...177). Not revalidated or reopened by this document (Project Owner instruction, 2026-07-22). | Owns relation-type semantics in general; room-type-specific applicability remains Contract 3's job (Section 5). No impact from this Revision 16 on Contract 2's own content. |
| Contract 3 — Relation Type x Category Applicability Matrix | Not yet drafted. | Directly and entirely category-count-keyed. Must be designed for the full 34-category Residential-34 model from the outset — no partial-category matrix. This is a recommendation for future drafting governance only; it does not authorize drafting. |
| Contract 4 — Best-Effort Evidence, Provenance and Determinability Annotation | Not yet drafted. | Not directly category-count-keyed (evidence/provenance semantics are generic). No special Residential-34 impact beyond the general vocabulary import from Contract 1. |
| Contract 5 — Confidence Generation and Normalization | Not yet drafted. | Not category-count-keyed. No special impact. |
| Contract 6 — Unknown/Determinability Annotation and Pairing | Not yet drafted. | Not category-count-keyed. No special impact. |
| Contract 7 — Semantic Case, Scenario, Sufficiency and Completeness Annotation | Not yet drafted. | Directly and entirely category-count-keyed: must import the 204-cell ordinary grid (Section 7) and the 34-category corpus totals (Section 9), not the historical 5-category figures. Recommendation only, not drafting authorization. |
| Contract 8 — Unseen-Claim Evaluation Artifact | Not yet drafted. | Not category-count-keyed. No special impact. |
| Contract 9 — Operational and Contract Violation Fixture Subtype Registry | Not yet drafted. | Fixture totals (16/29 operational, 12/18 contract-violation) are category-count independent (Section 9.1); no impact. |
| Contract 10 — Conformance Field Inventory and Validation | Not yet drafted; gated on the `sourceImageId`/`inputArtifactId`/`sourceAssetId`/`imageAssetId`/`roomCaseId` identity-alignment prerequisite (Owner Decision 2, 2026-07-22; Test Data Handling Rev10, prepared as Phase 6 item B). | Must import the multi-image (`ImageAsset[1..6]` per `RoomCase`) identity model once Test Data Handling Rev10 establishes it. Not decided by this document. |

---

## 15. Category Vocabulary Dependencies

Unchanged in kind from Revision 15 §16: category/subtype vocabulary is owned by Contract 1, not restated here. Synchronized by reference:

```text
Contract 1 Revision 19 (candidate-locked, C1-REV19-CL-001):
- owns the 34-category Layer 2 Active Evaluation Profile (Section 2.3);
- owns the FixedElement terminology decision (chosen over
  ArchitecturalFixture to avoid collision with Contract 9's
  test-fixture meaning); final field-level serialization and conformance
  alignment remain downstream Contract 10 responsibilities, not further
  Contract 1 drafting;
- owns Canonical Space Type identifiers (e.g.
  space.residential.kitchen_living_room) and the Composite Space
  Profile / bedroom-specialization model (Section 3 above).
```

This document imports Contract 1's category list and status by reference only; it does not restate, fork, or reinterpret any Contract 1 definition, consistent with the conflict-resolution rule in Contracts 1-10 Preparation Plan Rev11 Section 6.

---

## 16. Governance Sequence

Updated to the actual root-up sequence, replacing Revision 15 §17's five-room-transition-specific sequence:

```text
1. Freeze the unified 34-category / 1-6 ImageAsset target model — DONE
2. Correct Vision Architecture (Full-Platform Vision Architecture Rev5,
   Consolidated Feature Vision Rev5) — DONE, persisted
3. Correct Bounded Scope in-place (Rev5, Section 2B) — DONE, persisted
4. Correct Mechanism Architecture and ADR boundary (Perception
   Mechanism Architecture Rev3 correction; ADR-015) — DONE, persisted
5. Prepare Contract 1 Revision 19 — DONE, candidate-locked
   (C1-REV19-CL-001), not yet repository-persisted
6. Revalidate Contract 2 (Revision 10) — DONE, candidate-locked
   (C2-REV10-CL-001), not yet repository-persisted
7. Synchronize Evaluation Threshold Plan (this document, Revision 16),
   Test Data Handling Decision Revision 10 and Module Applicability
   Profile Revision 19 — all three Phase 6 drafts are now prepared and
   under consolidated review — IN PROGRESS
8. Synchronize Project Context and Living Strategic Roadmap once
   — NOT STARTED
9. Perform one final consolidated review of the entire root package
   — NOT STARTED
```

This document does not perform or authorize steps 8-9; it records them only to preserve the accepted sequence and is limited to its own portion of step 7.

---

## 17. Owner Decision Entries (Proposed)

```text
Decision 1 — Residential-34 evaluation scope accepted; no historical
    toilet-room two-stage gate applies (Section 3).
Decision 2 — All four sanitary categories retain separate evaluation
    identity (Section 4).
Decision 3 — Relation-type × category applicability remains Contract 3's
    responsibility (Section 5).
Decision 4 — The explicit 34 × 6 matrix records all 204 cells as
    Applicable (Section 7.2).
Decision 5 — One ordinary-grid unit is one RoomCase. The ordinary grid
    contains 408 development and 612 held-out RoomCases (Section 7.3).
Decision 6 — ImageAsset cardinality is tracked separately from RoomCase
    cardinality; this document does not silently choose a 1-6 capture-set
    distribution (Section 7.4, Q3).
Decision 7 — Mandatory multi-image evaluation areas are fixed in
    Section 7.5; no metric IDs or numeric thresholds are invented (Q4).
Decision 8 — Special-group minima remain 15 development and 31 held-out
    RoomCases, cross-category pooled (Section 8).
Decision 9 — Semantic totals are 423 development and 643 held-out
    RoomCases; overall held-out evaluation cases total 690 including
    fixture suites (Section 9).
Decision 10 — Ten room-sensitive Blocking rows remain Open; no support
    floor or threshold is invented (Q1/Q2).
Decision 11 — All 81 Metric Registry IDs are preserved.
Decision 12 — Contract 1 Rev19 and Contract 2 Rev10 are imported as
    completed, Owner-accepted, candidate-locked inputs and not reopened.
Decision 13 — Repository persistence, corpus creation, provider/model
    evaluation, Contract drafting, and implementation remain unauthorized.
```

### 17A. Open Questions for the Project Owner (single consolidated list; no separate document)

```text
Q1. The ten listed Metric Registry rows carry overall+per-category
    GT/support counts that cannot be re-derived honestly for 34
    categories. They remain Open pending Contract 11 and actual
    development denominators. No numeric value is proposed here.

Q2. After Contract 3 determines relation-type applicability, the
    per-applicable-category language of REL-ADJ-F1, REL-CONT-F1 and
    REL-BLOCK-F1 must be checked against the actual applicable subset.

Q3. What capture-set cardinality distribution is required across
    ImageAsset counts 1, 2, 3, 4, 5 and 6 for development and held-out
    RoomCases? This Revision establishes that both single-image and
    multi-image populations are mandatory but does not invent their
    numeric allocation.

Q4. Should the mandatory multi-image areas in Section 7.5 be mapped to
    existing Metric Registry IDs, or do any require separately
    authorized new IDs and numeric thresholds? No new ID or threshold
    is created by this Revision 16.
```

All four questions are explicitly Open; none is answered, guessed, or defaulted by this document.

---

## 18. Explicit Non-Authorization Boundary

This document does NOT authorize, and no provision of it may be read to authorize:

```text
- Repository persistence, commit, or push of this document or of
  Contract 1 Revision 19 / Contract 2 Revision 10.
- Corpus creation, image acquisition, licensing, synthetic generation,
  or staged capture of any kind.
- Annotation of any corpus, development or held-out.
- Provider/model evaluation, invocation, or exposure of any kind.
- Implementation of any code, schema, or pipeline component.
- Production activation, deployment, or real-user-data use of any
  kind.
- Contract 1, Contract 2, Contract 3, or any other Supporting
  Contract drafting, redrafting, or revalidation.
- A new Candidate Lock ID for Contract 1 or Contract 2.
- Resolution of Section 17A, Q1, Q2, Q3 or Q4.
- active_locked status for any of the 34 categories (remain
  active_candidate; Bounded Scope Rev5 Decision 19, unchanged).
```

---

## 19. Traceability Matrix

| Provision | Source | Status |
|---|---|---|
| 34-category Residential-34 scope | Bounded Scope Rev5 §6; Contract 1 Rev19 §2.3 | Imported, not redecided |
| 204-cell scenario-family applicability finding | This document, Section 7.1-7.2 (new analysis) | New finding, this Revision 16 |
| Recomputed grid (408 dev / 612 HO RoomCases) | Section 7.3, derived from Section 7.2 | Mechanical recomputation |
| Special-group minimums unchanged (15/31) | Rev13 §10.2; Rev15 §9; Section 8 (re-confirmed) | Unchanged |
| Revised case totals (423 dev / 643 HO semantic RoomCases / 690 held-out cases overall) | Section 9.1 | Mechanical recomputation |
| ImageAsset distribution and multi-image acceptance mapping | Sections 7.4-7.5; Section 17A Q3-Q4 | Open; not silently invented |
| Ten Open Metric Registry rows | Rev15 §12 (identified there); Section 11 (re-proven at 34x scale) | Carried forward, generalized |
| 81 Metric Registry IDs preserved | Rev13 §19; Rev15 §13; Section 12 (this document) | Unchanged |
| Contract 1 Rev19 / Contract 2 Rev10 status | Candidate Lock records C1-REV19-CL-001, C2-REV10-CL-001 (SHA-256 verified) | Imported, not redecided |
| Governance sequence | Project Owner instruction, 2026-07-22 | Imported, not redecided |
| Section 17A open questions Q1-Q4 | This document | Raised, not resolved |

---

## 20. Supersession Rule

```text
Revision 16 supersedes Revision 15, effective only upon separate,
explicit Project Owner acceptance of this Revision 16. Until that
acceptance, Revision 15 remains the sole authoritative Evaluation
Threshold and Acceptance Plan, in full, without modification.

Revision 15 is not edited, moved, or deleted by this document.
```

---

## 21. Risks and Unresolved Issues

```text
R-1. Ten Metric Registry support-floor rows remain Open pending actual
    development denominators and Contract 11 (Section 17A Q1).

R-2. Contracts 1-10 Preparation and Dependency Plan Revision 11 still
    contains historical five-room language. It is a later in-place
    synchronization item under the accepted root-up sequence and does
    not block this document's own review.

R-3. Relation-type applicability by category remains a Contract 3
    responsibility (Section 17A Q2).

R-4. The numeric distribution of ImageAsset cardinalities 1-6 across
    development and held-out RoomCases remains open (Q3). Until fixed,
    RoomCase totals are normative but ImageAsset totals are not.

R-5. The mapping of mandatory multi-image evaluation areas to existing
    or separately authorized new Metric Registry IDs remains open (Q4).
    Formal multi-image evaluation cannot be declared fully specified
    until this is resolved.
```

---

## 22. Pre-Review Completeness Self-Check

```text
[x] All 34 categories represented in an explicit six-column
    scenario-family matrix: 204 independently visible cells.
[x] All 204 applicability cells are Applicable; no shortcut table that
    collapses six families into one boolean remains.
[x] Evaluation unit explicitly defined as RoomCase, distinct from
    ImageAsset; 408/612 and 423/643 are no longer called image counts.
[x] ImageAsset ranges shown only as mathematical consequences, not
    requirements; distribution remains Q3.
[x] Mandatory same-room, mixed-room rejection, cross-view matching,
    deduplication, contradiction, fusion, provenance and consolidated-
    result evaluation areas named; metric mapping remains Q4.
[x] RoomCase arithmetic reconciled: 204 cells; 408/612 ordinary;
    423/643 semantic; 690 held-out cases including fixture suites.
[x] All 19 room-sensitive Blocking rows individually inventoried.
[x] All 81 Metric Registry IDs accounted for; none added or removed.
[x] No existing numeric acceptance threshold silently changed.
[x] Contract 1 Rev19 / Contract 2 Rev10 imported, not reopened.
[x] Internal section references and fixture-suite source references
    corrected to the sections and baseline that actually contain them.
[x] Q1-Q4 consolidated in this document; no new auxiliary artifact.
[x] Non-authorization and supersession boundaries preserved.
[x] Document remains Draft — Awaiting Project Owner Review.
```

This self-check is an integrity record, not Owner Acceptance.

---

```text
Document status:
Draft — Awaiting Project Owner Review.

Revision 16 does not supersede Revision 15 until separately accepted.
Revision 15 remains on disk, unmodified, as the current authoritative
baseline (Section 20).

Toilet room and all 34 Residential-34 categories:
Bounded scope: accepted (Bounded Scope Decision Rev5, unchanged by
this document).
Evaluation-methodology status upon acceptance of this Revision 16:
active for all 34 categories. RoomCase grid cardinalities are fixed;
ImageAsset distribution, multi-image metric mapping, and the inherited
support-floor questions remain explicitly Open in Section 17A Q1-Q4.
Corpus creation: still not authorized.
Provider/model evaluation: still not authorized.
Implementation: still not authorized.

Revision 15, Bounded Scope Decision Revision 5, Contracts 1-10
Preparation and Dependency Plan Revision 11, Test Data Handling
Decision Revision 9, Module Applicability Profile Revision 18:
Not modified. Not reopened beyond the impact-analysis findings
recorded in this document.

Schema, corpus, provider, and implementation authorization:
Not granted by this document.

Repository changes performed during preparation of this Revision 16:
NO.

Repository persistence of this Revision 16:
NOT PERFORMED. Not authorized by this document.

File state (this Revision 16):
Draft, local to this session only. Not committed. Not pushed.
```
