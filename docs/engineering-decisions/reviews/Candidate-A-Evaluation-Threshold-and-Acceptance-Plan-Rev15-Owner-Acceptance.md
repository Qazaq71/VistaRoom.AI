# VistaRoom AI — Candidate A Evaluation Threshold and Acceptance Plan — Revision 15 — Owner Acceptance Record

```text
Document type: Owner Acceptance Record (not an ADR; not an
    Implementation Package)
Decision authority: Project Owner — Nurlan
Acceptance date: 2026-07-18
Document accepted: Candidate A Evaluation Threshold and Acceptance
    Plan — Revision 15
Source: docs/engineering-decisions/reviews/
    Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev15.md
Commit at acceptance: 4163d939f9bbafde26e188bd324fb666aceec637
```

## 1. Document Acceptance

The Project Owner accepts Candidate A Evaluation Threshold and Acceptance Plan — Revision 15 in full.

```text
Candidate A Evaluation Threshold and Acceptance Plan — Revision 15:
ACCEPTED — PROJECT OWNER
Acceptance date: 2026-07-18
Commit at acceptance: 4163d939f9bbafde26e188bd324fb666aceec637
```

## 2. Explicit Acceptance of Owner Decisions 1–23

The Project Owner explicitly accepts all twenty-three Owner Decision entries recorded in Revision 15, Section 18, as proposed:

```text
Decision 1  — Acceptance of Revision 15
Decision 2  — Five-room evaluation scope
Decision 3  — Operational activation of toilet room for evaluation
              methodology (methodology-only; corpus, annotation,
              provider/model evaluation and implementation remain
              separately gated)
Decision 4  — 5x6 ordinary grid and scenario-family applicability
              (30 cells; all six scenario families applicable)
Decision 5  — Development per-cell minimum (2, unchanged)
Decision 6  — Held-out per-cell minimum (3, unchanged)
Decision 7  — Revised ordinary-grid and corpus totals (60/90
              ordinary-grid; 75/121 total unique semantic images)
Decision 8  — Relation GT support floor re-derivation requirement
              (Adjacency 20/5, Containment 15/4, Blocking 15/4 left
              Open, gated additionally by Contract 3)
Decision 9  — Ten-row Blocking support-floor re-derivation
              requirement (ENT-SE-R, ENT-OBJ-R, REL-ADJ-F1,
              REL-CONT-F1, REL-BLOCK-F1, UNK-SUBTYPE-UNDER,
              UNK-SUBTYPE-OVER, UNK-CONF-UNDER, UNK-PROV-OVER,
              SPACETYPE — left Open without weakening current
              thresholds)
Decision 10 — Special-group treatment (four pooled groups, unchanged
              15 development / 31 held-out minimums)
Decision 11 — Per-room floor applicability confirmation (§6.3 and
              §15.2 support minimums extend automatically; Decision
              8/9 floors remain Open)
Decision 12 — Relation applicability treatment (Adjacency,
              Containment, Blocking applicability to toilet room
              reserved to future Contract 2/Contract 3)
Decision 13 — Bathroom/toilet classification boundary confirmation
              for evaluation-corpus purposes
Decision 14 — Ambiguous-case handling (sufficiency, inconclusive,
              partial-image handling unchanged; cropped bath/toilet
              case reserved to future Contract 7)
Decision 15 — Threshold satisfiability (9 of 19 room-sensitive
              Blocking rows satisfiable without change; 10 of 19
              left Open)
Decision 16 — Metric Registry synchronization (all 81 Metric IDs
              categorized; §15.1 and §18 population-figure
              corrections confirmed)
Decision 17 — Contract 11 dependency (not prepared or prejudged; the
              ten Open support-floor determinations reserved to
              Contract 11's future use of actual development
              denominators)
Decision 18 — Supporting Contracts impact (Section 15 matrix;
              Contract 3 and Contract 7 most directly affected; no
              Contract 1-10 drafting authorized)
Decision 19 — Module Applicability Profile synchronization
              requirement (future successor must correct "four room
              types" language in §2, IMPL-04, EVAL-01)
Decision 20 — Preparation Plan successor requirement (combined
              successor revision required, reconciling five-room
              model, toilet-room activation, and Contract 3/7
              deferred rows)
Decision 21 — Category vocabulary dependencies acknowledgment
              (Section 16 inventory informative only; no Contract 1
              drafting authorized)
Decision 22 — Non-authorization of execution (repository
              persistence, corpus, annotation, provider/model
              evaluation, Implementation Package, implementation,
              ADR creation, and edits to Preparation Plan / Module
              Applicability Profile / Test Data Handling Decision
              Rev9 all remain not authorized by Revision 15 itself)
Decision 23 — Sequencing between the combined Preparation Plan
              successor and the Module Applicability Profile
              successor: Preparation Plan successor first, then
              Module Applicability Profile successor, then Contract 1
              drafting (subject to its own separate authorization)
```

## 3. Supersession of Revision 13

Per Revision 15, Section 21, Project Owner Acceptance of this document is the triggering event for supersession. Effective on the acceptance date above:

```text
Candidate A Evaluation Threshold and Acceptance Plan — Revision 15
supersedes Candidate A Evaluation Threshold and Acceptance Plan —
Revision 13 in full (not through the unaccepted Revision 14 draft).

Revision 13 remains on disk, unmodified, as the historical baseline
document. It is not deleted, edited, or moved by this acceptance. It
ceases to be the authoritative Evaluation Threshold and Acceptance
Plan as of this acceptance, but its text remains the historical
record of the prior accepted four-room evaluation methodology.

Revision 14 was never accepted, never became authoritative, and is
not affected by this acceptance beyond its pre-existing status as a
reviewed, superseded, non-authoritative draft retained for historical
review traceability.
```

## 4. Five-Room Evaluation Scope

The Project Owner confirms the evaluation-methodology layer now targets five active room types, consistent with, and not reopening, Bounded Scope Decision Rev5:

```text
1. living room
2. bedroom
3. kitchen
4. bathroom
5. toilet room
```

Toilet room's evaluation-methodology status changes, upon this acceptance, from "Pending Rev13 alignment" to "active for evaluation-methodology purposes" — methodology-only. Corpus creation, annotation, provider/model evaluation and implementation involving toilet room remain separately not authorized.

## 5. Ordinary-Grid Arithmetic

```text
5 room types x 6 scenario families = 30 cells (all confirmed
    applicable; no not-applicable cell required)
Development: 30 cells x 2/cell = 60 images
Held-out:    30 cells x 3/cell = 90 images
```

## 6. Special-Group Minimums

```text
Pooled cross-room, not room-partitioned; unchanged from Revision 13:
low-information:               3 development / 6 held-out
empty or near-empty:           2 development / 5 held-out
meaningful partial-scene:      5 development / 10 held-out
genuine insufficient-evidence: 5 development / 10 held-out
Totals: 15 development / 31 held-out
```

## 7. Total Development / Held-Out Populations

```text
Total development unique semantic images: 75 (60 ordinary-grid + 15
    special-group)
Total held-out unique semantic images:    121 (90 ordinary-grid + 31
    special-group)
```

## 8. Metric Registry — 81 IDs Confirmed

The Project Owner confirms all 81 Metric Registry IDs, categorized across Categories A–G (Revision 15, Section 13), cross-checked to Revision 13's own stated total of 81. No Metric ID is renamed, added, or removed by Revision 15.

## 9. Threshold and Blocking-Class Preservation

```text
No numeric threshold is changed by Revision 15. No governance class
(Blocking, Diagnostic, Mandatory Non-blocking, Zero-tolerance) is
changed by Revision 15. All current thresholds and blocking/
diagnostic classifications, as stated in Revision 13 and carried
forward unchanged in Revision 15, are confirmed preserved.
```

## 10. Open Relation and Room-Sensitive Support-Floor Dispositions

The Project Owner confirms the following remain explicitly Open, not resolved by this acceptance, pending a future Owner Decision informed by actual development denominators, and (for relation floors) additionally gated by Contract 3's applicability determination:

```text
- Relation GT support floors: Adjacency (20 overall / >=5 per
  applicable room), Containment (15 overall / >=4 per applicable
  room), Blocking (15 overall / >=4 per applicable room).
- Ten Blocking Metric Registry rows: ENT-SE-R, ENT-OBJ-R, REL-ADJ-F1,
  REL-CONT-F1, REL-BLOCK-F1, UNK-SUBTYPE-UNDER, UNK-SUBTYPE-OVER,
  UNK-CONF-UNDER, UNK-PROV-OVER, SPACETYPE.
```

No support floor is loosened, tightened, or re-derived by this acceptance.

## 11. Decision 23 Sequencing

The Project Owner confirms the following governance sequence, additional to and independent of Decisions 19 and 20:

```text
1. Accept and persist Evaluation Threshold and Acceptance Plan
   Revision 15 (this acceptance).
2. Prepare and accept the combined Preparation Plan successor
   revision.
3. Prepare and accept the Module Applicability Profile successor
   synchronization pass.
4. Begin Contract 1 drafting (subject to its own separate,
   not-yet-granted Project Owner authorization).
```

This acceptance does not itself authorize steps 2–4.

## 12. Non-Authorization Confirmation

This acceptance record does not authorize any of the following, all of which remain governed by their own separate, future, explicit Project Owner authorization:

```text
Preparation Plan successor drafting;
Module Applicability Profile successor drafting;
Contracts 1-11 drafting;
Corpus preparation;
Image acquisition or generation;
Annotation;
Held-out sealing;
Provider/model evaluation or selection;
Schema changes;
ADR creation;
Implementation Package preparation;
Implementation;
Production or commercial rollout.
```

## 13. Scope of This Record

```text
This Owner Acceptance record authorizes:
- acceptance of Candidate A Evaluation Threshold and Acceptance Plan
  Revision 15;
- explicit acceptance of Owner Decisions 1-23 as recorded in
  Revision 15, Section 18;
- supersession of Revision 13 by Revision 15, with Revision 13
  retained on disk as a historical baseline;
- the metadata-only status/acceptance synchronization made to
  Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev15.md as a
  direct consequence of this acceptance;
- repository persistence of exactly these two files.

This Owner Acceptance record does not authorize any item listed in
Section 12 above.
```
