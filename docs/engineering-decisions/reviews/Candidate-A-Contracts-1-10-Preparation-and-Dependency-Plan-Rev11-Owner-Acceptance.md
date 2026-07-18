# VistaRoom AI — Candidate A Contracts 1–10 Preparation and Dependency Plan — Revision 11 — Owner Acceptance Record

```text
Document type: Owner Acceptance Record (not an ADR; not an
    Implementation Package)
Decision authority: Project Owner — Nurlan
Acceptance date: 2026-07-18
Document accepted: Candidate A — Supporting Contracts 1–10 Preparation
    and Dependency Plan — Revision 11
Source: docs/engineering-decisions/reviews/
    Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md
```

## 1. Document Acceptance

The Project Owner accepts Candidate A — Supporting Contracts 1–10 Preparation and Dependency Plan — Revision 11 in full.

```text
Candidate A Contracts 1–10 Preparation and Dependency Plan — Revision 11:
ACCEPTED — PROJECT OWNER
Acceptance date: 2026-07-18
```

Acceptance is full and unconditional, not partial or provisional. All twelve Owner Decision entries recorded in Revision 11, Section 10 — R11.1 through R11.12 — are explicitly accepted in full, as proposed.

## 2. Explicit Acceptance of Owner Decisions R11.1–R11.12

```text
Decision R11.1  — Acceptance of Preparation and Dependency Plan Revision 11
Decision R11.2  — Supersession of accepted Revision 4; preservation of
                  external draft Revisions 5, 6, 7, 8, 9 and 10 as
                  non-authoritative source material
Decision R11.3  — Adoption of the VistaRoom Master Vocabulary /
                  Candidate A Active Evaluation Profile two-layer
                  architecture
Decision R11.4  — Full-platform foundation rule (current bounded scope
                  is an activation boundary, not the architectural
                  ceiling)
Decision R11.5  — Confirmation of five active room types: living room,
                  bedroom, kitchen, bathroom, toilet room
Decision R11.6  — Confirmation of the 30-cell ordinary grid, 60/90
                  ordinary minima, 15/31 special minima and 75/121
                  total semantic-image populations
Decision R11.7  — Confirmation that operational fixture totals (16/29)
                  and contract-violation fixture totals (12/18) remain
                  separate and unchanged
Decision R11.8  — Confirmation of `FixedElement` as the canonical
                  semantic term, with exact schema-compatible
                  representation deferred to Contract 1
Decision R11.9  — Confirmation of the dormant-category lifecycle,
                  bounded-completeness rule and traceable dormant-leaf
                  fallback priority
Decision R11.10 — Preservation of all 81 Metric Registry IDs and their
                  blocking/diagnostic classifications; confirmation
                  that the ten Open support-floor dispositions remain
                  numerically unresolved until Contract 11
Decision R11.11 — Acceptance of the revised dependency graph, with the
                  preparation order, candidate-lock model, consolidated
                  package review, atomic acceptance topology and
                  Contract 10 identity prerequisite preserved
                  unchanged
Decision R11.12 — Confirmation that Module Applicability Profile
                  synchronization and Contract 1–10 drafting each
                  require their own separate, explicit Project Owner
                  authorization
```

## 3. Supersession of Revision 4

Effective on the acceptance date above:

```text
Candidate A Contracts 1–10 Preparation and Dependency Plan — Revision
11 supersedes Candidate A Contracts 1–10 Preparation and Dependency
Plan — Revision 4 in full.

Revision 4 remains in the repository, unmodified, as the historical
baseline document. It is not deleted, edited, or moved by this
acceptance. It ceases to be the authoritative Preparation and
Dependency Plan as of this acceptance, but its text remains the
historical record of the prior accepted preparation/dependency model.

External draft Revisions 5, 6, 7, 8, 9 and 10 were never accepted,
never persisted to this repository, and never became authoritative.
They remain non-authoritative source material only, as recorded in
Revision 11's own Source-status table and Decision R11.2. This
acceptance does not change their status.
```

## 4. Accepted Architectural Decisions

The Project Owner explicitly confirms the following, as recorded in Revision 11:

```text
1. VistaRoom Master Vocabulary (Layer 1) / Candidate A Active
   Evaluation Profile (Layer 2) two-layer architecture (Revision 11,
   Section 1.1, Section 2 Contract 1).

2. Full-platform-foundation principle: the current bounded scope is
   an activation boundary, not the permanent architectural ceiling of
   VistaRoom AI (Revision 11, "Governing full-platform principle").

3. Current bounded evaluation is explicitly an activation boundary,
   not a ceiling — dormant Master Vocabulary categories remain
   available for future, separately authorized activation without
   requiring a baseline rewrite.

4. Five active room types within the Residential-first segment:
   - living room
   - bedroom
   - kitchen
   - bathroom
   - toilet room
   (Revision 11, Section 2, Contract 1 Layer 2; consistent with
   accepted Bounded Scope Decision Rev5 and Evaluation Threshold Plan
   Rev15, which remain the external owners of this activation and are
   not reopened by this acceptance.)

5. Evaluation arithmetic (Revision 11, Section 2, Contract 7; sourced
   from and unchanged relative to accepted Evaluation Threshold Plan
   Rev15):
   - 30 ordinary cells (5 room types x 6 scenario families)
   - 60 development ordinary images
   - 90 held-out ordinary images
   - 15 development special-group images
   - 31 held-out special-group images
   - 75 total unique development semantic images
   - 121 total unique held-out semantic images

6. Operational fixture totals: 16 development / 29 held-out
   (Revision 11, Section 2, Contract 9; unchanged from Rev15 §12).

7. Contract-violation fixture totals: 12 development / 18 held-out
   (Revision 11, Section 2, Contract 9; unchanged from Rev15 §12).

8. Fixture suites (items 6–7) remain separate from, and are not
   summed into, the 75/121 semantic-image totals (item 5).

9. `FixedElement` is confirmed as the canonical semantic term for
   fixed/built-in architectural items (Revision 11, Section 5A).
   This term is chosen specifically to avoid collision with Contract
   9's distinct test-fixture meaning of "fixture."

10. The exact schema-compatible representation of `FixedElement`
    (Object category branch, classification facet, or other role)
    remains an open drafting question expressly deferred to Contract
    1. This acceptance does not pre-decide that representation and
    does not authorize a new top-level node class.

11. Dormant-category lifecycle: dormant Master Vocabulary categories
    create no corpus, annotation, metric, implementation or
    commercial-rollout obligation until a separate, future Project
    Owner activation decision (Revision 11, "Governing full-platform
    principle," item 4; Section 7.5).

12. Bounded-completeness rule: Contract 1 must define an
    architecturally complete structure (identifiers, hierarchy,
    synonym/localization handling, lifecycle, versioning, deprecation,
    dormant/active states, minimum foundational families) without
    being required to enumerate every future space or object type
    (Revision 11, Section 1.2).

13. Traceable dormant-leaf fallback priority: exact active leaf ->
    active ancestor/aggregation -> active unknown/other -> explicit,
    traceable, measurable exclusion as last resort (Revision 11,
    Section 2, Contract 1, "Dormant-leaf handling priority").

14. All 81 Metric Registry IDs and their blocking/diagnostic
    classifications are preserved unchanged and remain exclusively
    owned by accepted Evaluation Threshold Plan Rev15. Revision 11
    intentionally does not restate them and does not add, remove,
    rename or reclassify any metric ID (Revision 11, Section 2
    Contract 7; Section 8.5 checklist).

15. The ten relation/room-sensitive support-floor dispositions
    identified as Open by accepted Evaluation Threshold Plan Rev15
    remain numerically unresolved. Contracts 1–10 must preserve that
    Open state and must not invent numerical support floors.
    Numerical resolution remains deferred to Contract 11, using actual
    development denominators, once they exist (Revision 11, Section
    7.1).

16. Revised dependency graph (Revision 11, Section 3), adding the
    vocabulary/profile and external-baseline synchronization edges
    required by accepted Bounded Scope Rev5, accepted Evaluation
    Threshold Plan Rev15 and the two-layer model, while preserving the
    Revision 4 dependency-graph core.

17. Preparation order (Revision 11, Section 4): Contracts 1 through
    10 in the same sequence as accepted Revision 4, unchanged.

18. Candidate-lock model (Revision 11, Section 8.1): unchanged from
    accepted Revision 4.

19. Consolidated package review (Revision 11, Section 8.2): unchanged
    — one full deep end-to-end review of Contracts 1–10 together,
    one consolidated report, no separate authoritative declaration of
    any single contract before that review closes.

20. Atomic package acceptance (Revision 11, Section 8.3): unchanged —
    the Project Owner accepts the completed package in one governance
    event containing ten explicit contract decisions.

21. Contract 10 `sourceImageId` identity-alignment prerequisite
    (Revision 11, Section 3.1, Section 7.3): unchanged. Before
    normative Contract 10 drafting, the Project Owner must separately
    resolve the relationship between Rev15 `sourceImageId` and Rev9
    `inputArtifactId` / conditional `sourceAssetId`. This acceptance
    does not resolve, infer, or create a dual-identity convention for
    that prerequisite.
```

## 5. Non-Authorization Confirmation

This acceptance and its repository persistence do not authorize any of the following, all of which remain governed by their own separate, future, explicit Project Owner authorization:

```text
Module Applicability Profile synchronization or any edit to the
    Module Applicability Profile Revision 13;
Contract 1 drafting;
Contracts 2–10 drafting, revision or acceptance;
Contract 11 preparation;
Phase-1 Scope Decision or Execution Profile preparation;
Any edit to, or preparation of, Candidate A Test Data Handling
    Decision Revision 9 Section 22 data-governance artifacts;
Corpus preparation or creation;
Fixture creation;
Annotation;
Provider contact;
Provider invocation;
Provider/model evaluation;
Provider/model selection;
Schema changes;
Creation of a new top-level node class;
ADR creation or ADR_INDEX/README modification;
Implementation Package preparation;
Implementation;
Production deployment;
Commercial rollout;
Any edit to accepted Bounded Scope Decision Revision 5, accepted
    Evaluation Threshold and Acceptance Plan Revision 15, or accepted
    Candidate A Test Data Handling Decision Revision 9;
Any repository change beyond this explicitly authorized persistence
    task (i.e., beyond the two files this record and Revision 11
    itself comprise).
```

## 6. Repository Effect

```text
Repository persistence of Revision 11 creates a repository-backed
authoritative record of a Project Owner acceptance decision that has
already been made. Persistence itself does not create a new
architectural decision, does not expand the accepted scope beyond
what Revision 11 already states, and does not authorize any item
listed in Section 5 above.

Revision 4 remains on disk, byte-for-byte unchanged, as the historical
Preparation and Dependency Plan baseline. Revision 11 is, as of this
acceptance, the current authoritative Plan baseline.
```

## 7. Scope of This Record

```text
This Owner Acceptance record authorizes:
- acceptance of Candidate A Contracts 1–10 Preparation and Dependency
  Plan Revision 11;
- explicit acceptance of Owner Decisions R11.1–R11.12 as recorded in
  Revision 11, Section 10;
- supersession of Revision 4 by Revision 11, with Revision 4 retained
  on disk as a historical baseline;
- the narrowly scoped status-metadata normalization made to
  Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md
  as a direct consequence of this acceptance (Status, Repository
  persistence, Project Owner acceptance, Current authoritative Plan
  baseline, Supersedes, and Revision 4 historical-status fields only;
  no substantive content changed);
- repository persistence of exactly these two files.

This Owner Acceptance record does not authorize any item listed in
Section 5 above.
```
