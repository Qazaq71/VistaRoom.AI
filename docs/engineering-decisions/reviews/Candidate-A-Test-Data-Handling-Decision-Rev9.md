# Candidate A Test Data Handling Decision — Revision 9

**Document type:** Accepted Owner Governance Decision (not an ADR; not an Implementation Package)  
**Revision type:** Targeted clarification revision (governance-history citation and non-normative boundary correction)  
**Status:** Accepted by Project Owner — 2026-07-16  
**Revision:** 9  
**Supersedes:** Revision 8 in full (not accepted). Revisions 1–7 not accepted; each superseded in turn.  
**Prepared by:** Claude Project, Chief Software Architect and specification/review partner  
**Prepared for:** Project Owner Nurlan  
**Preparation date:** 2026-07-16  
**Repository:** `Qazaq71/VistaRoom.AI`, branch `main`  
**Repository persistence:** Authorized by Project Owner — 2026-07-16  
**Corpus creation or annotation:** Not authorized  
**Synthetic source generation:** Not authorized  
**Provider/model contact or data exposure:** Not authorized  
**Provider/model evaluation:** Not authorized  
**Supporting-contract preparation:** Not authorized  
**Data-governance artifact preparation:** Not authorized  
**Any authorization or clearance issuance:** Not authorized  
**Phase-1 Scope Decision or Execution Profile preparation:** Not authorized  
**Implementation:** Not authorized

---

## 0. Revision 2 changelog (against Revision 1)

Revision 1 was independently reviewed against the accepted baseline (Candidate A Bounded Scope Decision Rev3; Candidate A Evaluation Threshold and Acceptance Plan Rev13; Perception Mechanism Selection and Evaluation Architecture Rev3). Two findings were identified and are resolved in this revision:

1. **Finding 1 (substantive scope gap).** Bounded Scope Decision Rev3, Part M.1, explicitly requires this Decision to cover *diagnostic crops, raw provider output, `VlmSceneCandidate`, `StructuredSceneV0`, `PerceptionEvidenceArtifact`, evaluation reports, and local storage* as named governed categories. Revision 1 covered only corpus-preparation objects (source images, annotations, manifests) and did not name these perception-execution and evaluation-execution artifacts explicitly. Resolved by: new Section 3.3 (Perception-execution and evaluation artifacts), new Section 8A (Local execution storage), and explicit retention-class mapping added to Section 17.1.
2. **Finding 2 (cross-document sequencing gap).** Evaluation Threshold and Acceptance Plan Rev13, §5.2, requires that supporting contracts **1–10** (Rev13 §5.1) be accepted and locked *before* Tier 1 Corpus Preparation Authorization, while contract 11 is locked later, before held-out sealing, using actual development denominators. Revision 1's Section 20 admission gate did not state this dependency. Resolved by: explicit precondition added to Section 20 and Section 15.1.

No other content is changed. This changelog exists for traceability only; the Owner review of Revision 2 should treat it as a complete, self-contained document rather than a diff against Revision 1.  

### 0A. Revision 3 changelog (against Revision 2)

Revision 2 received one full independent consolidated review (external), identifying four mandatory, acceptance-blocking corrections. All four are verified against the accepted baseline and resolved in this revision as a **targeted correction revision** — no new exploratory redesign is introduced.

1. **Finding 1 (substantive, self-contradiction).** Revision 2's Section 20 stated that *all eleven* Rev13 supporting contracts must be locked before Corpus Preparation Authorization, while Section 23, Decision 15 and this changelog's own Finding 2 correctly referred to *contracts 1–10*. This is logically unworkable: Rev13, §5.2, step 6 requires contract 11 (Aggregation, Uncertainty and Score-Stability Appendix) to be prepared *using actual development denominators*, which do not exist before Corpus Preparation. Resolved by: Section 20 now requires contracts 1–10 only before Corpus Preparation, with an explicit note that contract 11 is a precondition for held-out sealing (Section 15.1) instead; Section 0, Section 15.1, Section 20, Section 23 and Decision 15 corrected for consistency.
2. **Finding 2 (substantive, identity model).** Revision 2's Section 3.3 required every listed artifact — including corpus-level, run-level or multi-operation artifacts such as evaluation reports, aggregate Layer 3 reports, Closure/Readiness artifacts and provider logs spanning multiple operations — to carry a single operation-level identity (`parentAssetId`, `operationId`). This is not satisfiable without fabricated identifiers for aggregate objects. Resolved by: Section 3.3 now defines two distinct identity classes — operation-scoped artifacts and run/corpus-scoped artifacts — each with its own required identity fields.
3. **Finding 3 (editorial, stale revision reference).** Decision 1 and Section 25 in Revision 2 still referred to accepting "Revision 1," despite the document being Revision 2. Resolved by: both references corrected to the current revision number; a full-text check confirms no other stray "Revision 1" acceptance language remains.
4. **Finding 4 (governance consistency, seal/execution boundary).** Revision 2 carried forward Revision 1's Section 15.2 seal contents including "authorized provider/model configuration when later applicable" inside the Held-Out Data Seal, even though provider/model selection (Rev13 §5.2, step 9) occurs *after* held-out sealing (step 8). This conflated two independent lock boundaries. Resolved by: Section 15.2 now defines only the Held-Out Data Seal (data, annotations, fixtures, contracts, manifests, hashes); a new Section 15.2A defines a separate Formal Evaluation Configuration Lock for provider/model/configuration identity, fixed after Provider/Model Evaluation Authorization and before the first formal held-out invocation, without altering or requiring resealing of the corpus.

This changelog exists for traceability only; Revision 3 is fully self-contained and should be reviewed as such.  

### 0B. Revision 4 changelog (against Revision 3)

Revision 3 underwent an Owner-directed replacement consolidated review after prior review attempts were determined not to have satisfied the Project Owner's single-pass consolidated-review standard; that replacement review covered the complete data lifecycle (source acquisition through implementation/runtime transition) and identified nine mandatory findings and five recommended improvements. By explicit Project Owner direction, all nine findings and all five improvements are addressed in this revision, classified as follows.

**Baseline-mandated corrections** (required because Revision 3 conflicted with an already-accepted baseline document):

- **Finding 1** — Rev13, §21, explicitly requires "one locked mechanism, prompt, adapter, provider/model, scoring version and supporting-contract set" per formal held-out execution, and requires a fresh held-out subset for new inference after a completed run. Revision 3's single mutable Formal Evaluation Configuration Lock (§15.2A) did not satisfy this. Resolved by: immutable, per-candidate, per-configuration, per-run lock model (Section 15.2A).
- **Finding 3** — Rev13's own sequencing (contract 11 prepared before formal execution, using development denominators that predate any `evaluationRunId`) is incompatible with Revision 3's two-class identity model, which forced corpus-level and run-level artifacts into one class. Resolved by: three-class identity model — operation-scoped, evaluation-run-scoped, corpus-scoped (Section 3.3).

**Internal-consistency corrections** (required to make Revision 3's own stated rules operable, without contradicting any accepted baseline):

- **Finding 5** — Section 22's eleven data-governance artifacts were not bound to specific governance gates, making Section 20's admission gate declarative rather than enforceable. Resolved by: explicit staged binding of each artifact to a specific gate (Sections 20, 15.1, 16.2A).
- **Finding 6** — Section 17.1's single retention-class dimension could not simultaneously express artifact type, data subset, and held-out sensitivity. Resolved by: four independent classification dimensions (Section 17.1B).
- **Finding 7** — Section 17.2 delegated all retention durations to a single future Corpus Preparation Plan, including provider-specific durations that cannot be known before a provider is even assessed. Resolved by: three-phase retention governance split (Section 17.2).
- **Finding 8** — Section 3.3's prior wording ("must not be admitted... until amended") left produced-but-unclassified artifacts outside governance entirely. Resolved by: automatic default-deny/quarantine rule for unknown artifacts (Section 3.3.5).
- **Finding 9** — Section 16.1's default-deny rule, read literally, blocks the external AI generation calls needed to create synthetic corpus source images before any Provider/Model Evaluation Authorization exists — a sequencing deadlock against the already-accepted permitted synthetic source class (Bounded Scope Rev3). Resolved by: separate governance tracks for Synthetic Source Generation Provider and Perception Evaluation Provider (Section 16.0).

**New proposed Owner Decisions** (substantive new rules, not corrections of an existing conflict — presented for explicit acceptance):

- **Finding 2** — new distinction between Evaluation-Time Provider Exposure Clearance (bounded, pre-selection) and Selected-Provider Privacy/Retention Decision (post-selection, runtime) (Section 16.2A).
- **Finding 4** — new absolute, non-overridable prohibition on disclosing held-out ground truth, expected outcomes, annotations, scoring records, and answer-bearing manifests to the evaluated provider/model (Section 16.4).

**Recommended improvements** (additive, do not change existing rules): expanded audit trail (Section 18); expanded incident taxonomy (Section 19); invalidation scope extended to every affected corpus/fixture/artifact version, not only sealed held-out subsets (Section 6.3); explicit provider-log taxonomy replacing the ambiguous single "provider logs" term (Sections 3.3, 16.5, 17.1B); approval-and-expiry governance for the `eligible-with-restrictions` status (Section 5).

Per Project Owner direction, Revision 4 is classified as a **substantive consolidation and architecture-hardening revision**, not a targeted correction revision, given the scope of these changes. Revision 4 does not expand the accepted Candidate A bounded scope, redefine Rev13 metrics or thresholds, select a provider/model, prepare supporting contracts, create corpus assets, contact providers, perform implementation, or make repository changes.

This changelog exists for traceability only; Revision 4 is fully self-contained and must be reviewed as a complete document, not as a diff against Revision 3.  

### 0C. Revision 5 changelog (against Revision 4)

Revision 4 received one full independent consolidated review of the complete document, identifying fourteen mandatory findings and three recommended improvements. Several of these were newly introduced by Revision 4's own additions; several others were pre-existing since Revision 1 and became material only once Revision 4's stricter identity and classification model exposed them. Per Project Owner confirmation, all fourteen findings and three improvements are resolved here, and this revision was additionally prepared by re-reading the complete document section by section rather than only the sections changed by prior revisions.

- **Finding 1** — §15.2A stated both "one `configurationLockId` per run" and "a new lock before each... invocation," which are contradictory. Resolved: one immutable lock is created before the first held-out invocation of a run; every operation in that run references the same `configurationLockId`.
- **Finding 2** — no rule prevented multiple candidates from being run against the same held-out subset before any was marked complete. Resolved: a held-out subset is allocated to exactly one lock/run and is consumed on first inference, regardless of that run's later completion status; new comparisons require a fresh subset.
- **Finding 3** — development-stage provider calls could not satisfy the operation-scoped requirement for a `configurationLockId`, because that lock only exists after Provider/Model Evaluation Authorization. Resolved: a separate `developmentExecutionConfigurationId` (Section 16.6) governs development-stage calls; `configurationLockId` is reserved for formal held-out execution only. (Revision 5 described this identity as "mutable," which was imprecise and is corrected in Revision 6, Correction 1: each `developmentExecutionConfigurationId` snapshot is itself immutable, and a new snapshot is created on configuration change.)
- **Finding 4** — Section 16.0 placed synthetic source generation "before Tier 1 Corpus Preparation," conflicting with Rev13 §5.2's placement of all corpus creation at step 5, after Corpus Preparation Authorization (step 4). Resolved: only due-diligence and clearance preparation may occur before authorization; actual generation occurs only after Tier 1 Corpus Preparation Authorization, under a Synthetic Source Generation Authorization issued subordinate to that authorized cycle.
- **Finding 5** — Decision 11's unscoped "no external provider exposure" language contradicted the newly-introduced Synthetic Source Generation Provider track. Resolved: Decision 11 is scoped explicitly to the Perception Evaluation Provider.
- **Finding 6** — §5 stated "only `eligible` assets may be admitted" immediately alongside rules admitting `eligible-with-restrictions` assets — a direct, long-standing contradiction dating to Revision 1. Resolved: both statuses are explicitly admissible under stated conditions; quarantined, rejected and expired assets are prohibited. New Asset Eligibility Record fields added.
- **Finding 7** — held-out preprocessed images and diagnostic crops were mapped to `held-out-sealed` even though Section 3.3.1 defines them as produced during runtime perception execution, after sealing — an object cannot be in a seal before it exists. Resolved: pre-sealed deterministic derivatives remain `held-out-sealed`; runtime-generated derivatives are reclassified as `evaluation-output` / `held-out-sensitive`. Section 15.2's "all held-out derivatives" is narrowed to precomputed, sealed-manifest derivatives only.
- **Finding 8** — `incident` was listed as a protection-classification value alongside sensitivity levels, which could overwrite and lose a `held-out-sensitive` classification during an incident. Resolved: protection classification (ordinary/restricted/held-out-sensitive) is separated from handling status (active/quarantined/incident-under-review/invalidated/retired/deleted); incidents never downgrade inherited protection classification.
- **Finding 9** — `fixture` was listed as a data-subset value alongside development/held-out, even though Rev13 fixtures themselves have development and held-out members. Resolved: data subset (development/held-out/none) is separated from population kind (semantic-case/operational-fixture/contract-violation-fixture/non-population-artifact).
- **Finding 10** — provider-account audit records were forced into either evaluation-run-scoped or corpus-scoped identity, but such records can span multiple runs, multiple corpus versions, or predate any corpus. Resolved: a fourth identity class, governance/audit-scoped (Section 3.3.4), is introduced.
- **Finding 11** — §7.5's personal-data-incident invalidation scope ("sealed subsets... when applicable") was narrower than §6.3's license-incident scope, despite privacy incidents being able to affect the same or broader derived artifacts. Resolved: §7.5 now mirrors §6.3's full invalidation scope and additionally requires suspension of any clearance and run results if data was already sent to a provider.
- **Finding 12** — §14.1 required a held-out manifest hash for every corpus version regardless of status, making early `draft`/`development-active` versions impossible to satisfy honestly. Resolved: manifest-hash requirements are now status-dependent.
- **Finding 13** — §16.3's minimum provider controls applied only to held-out exposure, leaving development exposure of the same governed licensed/synthetic/staged data without a minimum gate. Resolved: the minimum provider rule now applies to any governed-data exposure, with additional stricter requirements reserved for held-out.
- **Finding 14** — corrected as described above.

**Recommended improvements**: Section 16.0.1 now covers prompt-only and reference-image generation requests, not only "source image or edit request" (Improvement 1); Section 9.1 now maps new governance functions (clearance approval, configuration-lock custody, incident coordination, deletion execution) to existing roles (Improvement 2); Decision 18 now states the full pre-Corpus-Preparation package sequence rather than naming only the Rev13 supporting contracts (Improvement 3).

This changelog exists for traceability only; Revision 5 is fully self-contained and must be reviewed as a complete document.  

### 0D. Revision 6 changelog (against Revision 5)

Revision 5 received one full independent consolidated review of the complete document, identifying eight mandatory corrections and two recommended improvements. Revision 5 did not pass this review cleanly — as with Revisions 2 through 5 before it, correcting one set of defects exposed or introduced a further set, several of them latent since earlier revisions. Revision 6 is prepared after this one full consolidated review of Revision 5, re-reading the complete document rather than only the previously changed sections.

**Identity consistency:**

- **Correction 1** — Section 16.6 described `developmentExecutionConfigurationId` as "mutable" while simultaneously requiring a new value on every configuration change — an internally contradictory description of what is actually a versioned-immutable-snapshot pattern. Resolved: each `developmentExecutionConfigurationId` snapshot is now explicitly immutable once created, with a defined minimum field set and a `supersedesId` chain; stale "mutable" framing corrected in Section 0C and Decision 28.
- **Correction 3** — Section 3.3.1 required `sourceAssetId` and `lineageId` for every operation-scoped artifact, which contract-violation fixtures and rejected/non-image operations cannot honestly satisfy. Resolved: a general `inputArtifactId` is required for every operation; `sourceAssetId`, `fixtureId`, `lineageId`, and `fixtureLineageId` become conditional, present only where they genuinely apply, with fabrication explicitly prohibited.
- **Correction 4** — configuration identity was required only when an artifact "resulted from" external execution, omitting artifacts prepared for or submitted to a provider before any response exists. Resolved: the rule now covers any artifact submitted to, produced for, produced by, or derived from an external provider invocation, applied from the moment of submission.

**Provider-track lifecycle integration:**

- **Correction 5** — the Synthetic Source Generation Provider track (introduced in Revision 4) was not integrated into exposure logging, retention, or Section 22 gating to the same depth as the Perception Evaluation Provider track. Resolved: a new Source-Generation Provider Exposure Record (Section 16.0.2) parallels the Perception Provider Exposure Record (Section 16.5); Section 17.2 retention governance and Section 22 artifact 11 now explicitly cover both tracks independently.

**Sealing/allocation integrity:**

- **Correction 7** — Revision 5's one-to-one held-out subset consumption rule (Section 15.2A) did not require subsets to be defined and sealed before provider/model outputs are known, leaving room for post-hoc, candidate-aware subset selection. Resolved: a new Held-Out Subset Allocation Manifest (Section 14.4) is required within the Held-Out Data Seal, with disjointness, immutability, and no-cherry-picking rules, and consumption tracked per subset.

**Invalidation symmetry:**

- **Correction 6** — Decision 14 claimed Section 6.3 and Section 7.5 had identical invalidation scope, but Section 6.3 remained narrower (no clearance suspension, run invalidation, external-recipient identification, or provider deletion initiation). Resolved: Section 6.3 expanded to full parity with Section 7.5; both are now genuinely symmetrical, differing only in incident-specific triggers.

**Owner Decision and normative consistency:**

- **Correction 2** — Section 17.1B required exactly one population kind and one data subset per artifact, which governance/audit-scoped aggregates (Section 3.3.4) spanning multiple runs, corpus versions, or both development and held-out data cannot satisfy. Resolved: atomic artifacts keep single values; aggregate artifacts use set-valued `populationKinds[]` / `dataSubsets[]`, with held-out presence always triggering held-out-sensitive protection.
- **Correction 8** — Decision 15 named only Rev13 contracts 1–10 as the minimum Corpus Preparation evidence, omitting the Section 22 data-governance artifacts that Section 20 itself also requires; Section 21's provider-training prohibition covered only held-out data even though Section 16.3 (Revision 5) already extended the minimum provider rule to all governed data; Decision 17's non-authorization boundary did not name several authorizations and clearances introduced by Revisions 4–5. Resolved: Decision 15 now names both dependencies explicitly; Section 21 now prohibits training on any submitted governed data; Decision 17, Section 25, and the document metadata now enumerate the full current set of non-authorizations.

**Auditability improvements:**

- **Improvement 1** — Section 15.2A's "changing a Formal Evaluation Configuration Lock does not invalidate the seal" wording was replaced with an accurate description: creating a new lock does not itself require resealing provided its fresh subset already exists in the current seal; otherwise new sealing/resealing governance is required.
- **Improvement 2** — Sections 18 and 19 expanded to explicitly cover `developmentExecutionConfigurationId` creation/supersession, held-out subset creation/allocation/consumption, duplicate or overlapping subset allocation, attempted reuse of a consumed subset, synthetic-provider invocation, wrong-track clearance use, provider exposure records missing authorization/clearance IDs, broken synthetic generation lineage, provider-bound artifacts missing configuration identity, and fixture operations linked to fabricated source identity.

This changelog exists for traceability only; Revision 6 is fully self-contained and must be reviewed as a complete document, not as a diff against Revision 5.  

### 0E. Revision 7 changelog (against Revision 6)

Revision 6 has not yet undergone its own independent consolidated review; the four changes below originate from Project Owner-directed refinement following discussion of non-blocking improvements raised informally after Revision 6's preparation. They are **not** corrections of defects found by an independent review of Revision 6, and they are **not** baseline corrections — they are narrow clarifications and a boundary hardening, explicitly scoped to avoid introducing any new exploratory redesign. All corrections and provisions accepted through Revision 6 remain unchanged.

1. **Held-Out Subset Allocation integrity boundary (Section 14.4).** Added a clarification that a future Phase-1 Scope Decision or Phase-1 Execution Profile may simplify the *implementation mechanism* used to satisfy the Section 14.4 rules (e.g., fewer subsets, manual CSV/JSON manifests, logical zone separation, combined early-stage roles), but explicitly may not waive, weaken, override, or defer the rules themselves (pre-engagement formation, disjointness, immutability, no cherry-picking, no reuse, fresh-subset-must-already-exist). No exception to the rules was introduced.
2. **Text-only synthetic generation identity example (Section 3.3.1).** Added a worked example: a synthetic generation request with no reference image has no `sourceAssetId` and none may be fabricated; identity instead rests on the generation request/prompt identity, applicable configuration identity, generation `operationId`, and Section 4.2 generation lineage. This is a clarification only; it does not alter Section 16.0.1 synthetic-source authorization or clearance requirements.
3. **Wrong provider-governance track as an incident (Section 16.0).** Added an explicit normative rule that using one provider-governance track's authorization, clearance, or exposure-record schema for the other is a data-governance incident under Section 19, requiring the full existing incident procedure (suspension, quarantine, impact assessment, Owner notification) rather than silent reclassification. Section 18 (audit trail), Section 19 (incident taxonomy), Section 21 (prohibited shortcuts), and Section 23 (traceability) updated accordingly.
4. **Non-normative Phase-1 note (Section 22A).** Added a clearly labeled, non-normative note recording that a future Phase-1 Scope Decision or Phase-1 Execution Profile should define a minimum conformant implementation profile for the first bounded corpus cycle, while being explicitly unable to override this Decision, weaken any requirement, bypass any governance gate, or proceed without separate Project Owner authorization to prepare and accept. This section grants no authorization and is not itself a Phase-1 document.

This changelog exists for traceability only; Revision 7 is fully self-contained and must be reviewed as a complete document, not as a diff against Revision 6.  

### 0F. Revision 8 changelog (against Revision 7)

Revision 7 was reviewed by Grok (independent consolidated review, review date 2026-07-16), which identified eight mandatory, acceptance-blocking findings and two recommended improvements against the complete Revision 7 document. This set was independently corroborated by Claude Project's own full consolidated review of Revision 7, conducted separately and arriving at the same architectural defects. Revision 8 resolves that complete set as a **substantive consistency, lifecycle-integration and sealing-ledger correction revision**. It was prepared by re-reading the complete document and integrating the corrections across normative sections, governance sequencing, traceability, Owner Decisions, completeness checks and internal references rather than patching isolated paragraphs.

**Provider-track configuration identity:**

- **Finding 1** — the Revision 7 text-only synthetic-generation example incorrectly required a Perception Evaluation Provider identity (`developmentExecutionConfigurationId` or `configurationLockId`) for a Synthetic Source Generation Provider invocation, while wrong-track substitution was itself classified as an incident. Resolved by introducing an immutable, versioned `sourceGenerationConfigurationId` dedicated to the Synthetic Source Generation Provider track (Sections 3.3.1, 16.0.1–16.0.2). Each external invocation now carries exactly one configuration identity belonging to its own track.

**Sealed subset definitions versus operational allocation state:**

- **Finding 2** — mutable allocation and consumption fields were embedded inside the immutable Held-Out Data Seal. Resolved by splitting the prior manifest into: (a) an immutable **Held-Out Subset Definition Manifest** included in the seal; and (b) an append-only, tamper-evident **Held-Out Subset Allocation and Consumption Ledger** outside the sealed content (Section 14.4).
- **Finding 3** — the prior `allocated and unconsumed before lock creation` wording created a circular precondition between subset allocation and Formal Evaluation Configuration Lock creation. Resolved by an atomic binding procedure that creates `evaluationRunId`, `configurationLockId`, and the subset-binding ledger event as one governed transaction, followed by a separate consumption event at first inference (Sections 14.4, 15.2A).

**Retention-model accuracy:**

- **Finding 4** — Revision 7 called retention governance “three-phase” while listing four governance objects, two of which are parallel provider-track branches. Resolved by a three-layer model with two independent Layer-2 branches: corpus-side retention; Source-Generation and Evaluation-Time provider retention branches; selected-provider runtime retention (Section 17.2).

**Phase-1 sequencing:**

- **Finding 5** — Decision 18 placed the Phase-1 Scope Decision after the data-governance artifacts whose implementation form it is meant to profile. Resolved: following supporting-contract preparation, the Phase-1 Scope Decision or Execution Profile must be accepted before the final preparation and acceptance of the pre-corpus data-governance artifacts that conform to it (Decision 18; Section 22A).

**Provider minimum controls:**

- **Finding 6** — the provider-minimum rule used only development/held-out terminology and did not explicitly bind the Synthetic Source Generation Provider track. Resolved: minimum controls now apply expressly to any governed-data exposure under either track, with track-specific additions for synthetic generation (Section 16.3; Decisions 12, 26, 32).

**Consume-on-first-inference consistency:**

- **Finding 7** — Section 21 prohibited subset reuse only after a completed run, weaker than the governing consume-on-first-inference rule. Resolved: reuse is prohibited after first inference regardless of whether the consuming run is complete, incomplete, failed, aborted or invalidated.

**Classification cardinality:**

- **Finding 8** — Section 3.3.7 associated set-valued classification too narrowly with the governance/audit identity class even though run-scoped and corpus-scoped aggregates may also cover multiple populations or subsets. Resolved: classification cardinality is now determined by actual scope, independently of identity class (Sections 3.3.7, 17.1B).

**Recommended improvements:**

- **Improvement 1** — the sealing model now avoids circular identity between `sealId` and content hashes: immutable subset definitions use a preassigned non-content-derived `sealRecordId`; the final content-derived `sealHash` is recorded in an external immutable seal envelope after all component hashes are computed (Sections 14.4, 15.2).
- **Improvement 2** — audit and incident taxonomies now cover immutable-definition modification, missing binding/consumption ledger entries, lock creation without atomic binding, unauthorized binding release, duplicate lock-to-subset binding, seal/ledger identity mismatch, and wrong source-generation configuration identity (Sections 18–19).

Revision 8 does not alter the accepted Candidate A bounded scope, Rev13 metrics or thresholds, corpus-size requirements, provider/model selection status, or any non-authorization boundary. This changelog exists for traceability only; Revision 8 is fully self-contained and must be reviewed as a complete document, not as a diff against Revision 7.

### 0G. Revision 9 changelog (against Revision 8)

Revision 8 received one full independent consolidated review from Claude Project, which identified two mandatory findings, both resolved here as a **targeted clarification revision**. No other content is changed; all ten corrections and two improvements accepted through Revision 8 remain unchanged.

1. **Finding 1 — unverifiable governance-history claim (§0F).** Revision 8 asserted "two independent consolidated reviews" of Revision 7 without an accompanying verbatim artifact for either review. Resolved: §0F now cites the actual verbatim Grok independent consolidated review (dated 2026-07-16) by name and date, and states plainly that Claude Project's own separate full review of Revision 7 corroborated the same set, rather than asserting an unattributed "two reviews converged" claim.
2. **Finding 2 — §22A contained normative sequencing language despite being labeled non-normative.** Section 22A stated it "grants no authorization and waives no requirement," while simultaneously requiring, in "must" language, that the Phase-1 document "must be prepared and accepted after... but before..." — duplicating the sequencing rule that properly lives in Decision 18, with a risk of future divergence between the two. Resolved: Section 22A is now purely descriptive of what a future Phase-1 document may address and may not do; the sequencing rule (Phase-1 document accepted before final preparation/acceptance of the pre-corpus data-governance artifacts it profiles) is stated solely in Decision 18.

This changelog exists for traceability only; Revision 9 is fully self-contained and must be reviewed as a complete document, not as a diff against Revision 8.

---

## 1. Purpose and governance position

This document proposes the authoritative test-data governance boundary for the first bounded Candidate A perception proof.

It defines the rules that must govern acquisition, eligibility, licensing, privacy, storage, access, provenance, transformation, annotation handling, development/held-out separation, lineage isolation, versioning, immutability, sealing, auditability, deletion, incident response and controlled provider exposure for all test images, fixtures and derived evaluation artifacts.

This document does not:

- create, collect, purchase, download, generate, stage, annotate or modify any corpus asset;
- authorize real user photographs or personal data;
- authorize contact with, upload to or testing of any provider/model;
- select a provider/model;
- authorize supporting-contract preparation;
- authorize Tier 1 Corpus Preparation;
- authorize fixture creation;
- authorize repository changes, ADR creation, Implementation Package preparation or implementation;
- define the Phase-1 implementation subset;
- alter the accepted Candidate A bounded scope or Evaluation Threshold and Acceptance Plan Revision 13.

Acceptance of this document would satisfy only governance sequence step 2: **Test Data Handling Decision**.

---

## 2. Fixed accepted inputs

The following accepted facts are not reopened:

1. Mechanism Class B — Hybrid VLM plus heuristic validation.
2. One perspective room image, one room, one operation.
3. Permitted source classes: licensed, synthetic and deliberately staged.
4. Excluded: real user photos, personal data, multi-image input, multi-view fusion, panoramas, floor plans, video, cross-image reasoning and whole-home image sets.
5. Tier 1 room types: living room, bedroom, kitchen and bathroom.
6. Corpus and fixtures must be prepared, annotated, quality-checked, versioned and sealed before formal provider/model acceptance evaluation.
7. Development and held-out assets must be separated by lineage.
8. No provider/model evaluation may begin before separate Owner authorization.
9. Evaluation artifacts and supporting contracts remain governed by Revision 13 and later separately accepted contracts.

---

## 3. Scope of governed data

### 3.1 In-scope asset classes

This Decision governs:

- original semantic corpus images;
- licensed-source records;
- synthetic generation source records;
- staged-scene capture records;
- permitted preprocessing derivatives;
- thumbnails and previews;
- canonical geometry derivatives;
- masks, crops, polygons and bounding boxes;
- image hashes and perceptual hashes;
- lineage records;
- annotation files;
- adjudication records;
- evidence artifacts;
- expected-outcome records;
- corpus manifests;
- fixture inputs and expected outputs;
- audit logs;
- sealing manifests;
- provider-exposure records;
- deletion and incident records.

### 3.2 Out-of-scope data

The following are prohibited for this Candidate A proof:

- photos submitted by actual VistaRoom AI users;
- production telemetry containing user content;
- scraped private or access-controlled images;
- images obtained by bypassing paywalls, authentication, robots restrictions or technical controls;
- images with unresolved copyright or licensing status;
- images containing directly identifying personal information;
- images intentionally depicting people;
- images containing readable documents, screens, mail, financial information, medical information or government identifiers;
- images captured from private premises without documented authorization;
- datasets whose terms prohibit machine-learning evaluation, transformation, annotation or third-party processing required by the intended workflow.

### 3.3 Perception-execution and evaluation artifacts

In addition to corpus-preparation assets (Section 3.1), this Decision governs the artifacts produced during bounded proof execution and formal evaluation, as required by Candidate A Bounded Scope Decision Rev3, Part M.1. These artifacts fall into **four** identity classes. A three-class model is insufficient because governance/audit artifacts such as provider-account activity logs can span multiple formal runs, multiple corpus versions, multiple providers, or predate any corpus — they cannot be forced into an operation, run, or corpus identity without fabricating a field (Section 3.3.4).

#### 3.3.1 Operation-scoped artifacts

Each of the following describes the output of, input to, or record of exactly one governed operation and must carry operation-level identity:

- **preprocessed image** — the normalized/derived image actually submitted for perception at execution time, distinct from any precomputed derivative already enumerated in a sealed manifest (Section 15.2);
- **diagnostic crops / diagnostic input crop** — region-level image derivatives produced during perception execution for evidence or debugging purposes, distinct from corpus-preparation crops under Section 3.1 and from any precomputed derivative already enumerated in a sealed manifest;
- **request payload** — the assembled input package submitted for one operation, before any provider response;
- **raw provider output** — the unmodified response payload returned by a VLM/AI provider for a given operation;
- **`VlmSceneCandidate`** — the Mechanism Class B intermediate candidate produced from raw provider output before conformance-normalization (C.2);
- **`StructuredSceneV0`** — the accepted production scene-graph instance resulting from a successful operation (evaluation copies only; this Decision does not modify the `StructuredSceneV0` schema itself);
- **`PerceptionEvidenceArtifact`** — the evaluation-only grounding/diagnostic artifact defined by Perception Mechanism Selection and Evaluation Architecture Rev3, Part M.2;
- **prompt trace** — the record of prompt/configuration actually sent to a provider for one operation;
- **adapter request record** — the project-controlled record of the outbound adapter call for one operation;
- **platform adapter log entry** — the project-controlled adapter/platform log record for one operation (see Section 3.3.5);
- **provider-returned metadata** — request IDs and usage metadata returned for one operation (see Section 3.3.5).

**Operation-input identity.** Every operation-scoped artifact must carry:

- `operationId` — the identity of the governed operation itself;
- `inputArtifactId` — required for every operation, including fixture-backed, malformed, missing-image, unsupported, pre-admission-rejected, or text-only generation inputs;
- `sourceAssetId` — required only when an admitted governed image asset is actually used; never fabricated or used as a placeholder;
- `fixtureId` — required when the operation is fixture-backed;
- `lineageId` — required where an eligible source/image lineage exists;
- `fixtureLineageId` (or equivalent governed fixture identity) — required where fixture lineage applies;
- `subset`, where a development/held-out relationship applies;
- `producingStage`;
- `timestamp`;
- `contentHash`.

Every operation must remain traceable to a real governed input, fixture, or generation-request identity. No fabricated `sourceAssetId`, `lineageId`, `fixtureId`, or `fixtureLineageId` may be created to satisfy a field that genuinely does not apply.

**Example — text-only synthetic generation.** A synthetic generation request with no reference image has no `sourceAssetId`; none may be fabricated. Its identity rests on the generation request/prompt identity, `operationId`, immutable `sourceGenerationConfigurationId` (Sections 16.0.1–16.0.2), and the synthetic generation lineage required by Section 4.2. Where a reference or source image is used, its governed `sourceAssetId` and `lineageId` must also be recorded.

**Track-specific configuration identity.** Any artifact submitted to, produced for, produced by, or derived from an external provider invocation must reference exactly one immutable configuration identity belonging to the applicable provider track:

- `sourceGenerationConfigurationId` — Synthetic Source Generation Provider invocation;
- `developmentExecutionConfigurationId` — development-stage Perception Evaluation Provider invocation;
- `configurationLockId` — formal held-out Perception Evaluation Provider invocation.

No cross-track substitution is permitted. An artifact prepared for submission carries the applicable configuration identity from the moment it is bound for that invocation, not only after a response is received. An artifact with no external provider involvement carries none of these three identities.

Runtime-produced held-out-subset artifacts under this section are `evaluation-output` retention / `held-out-sensitive` protection (Section 17.1B), not `held-out-sealed`; only derivatives already enumerated and hashed in the Held-Out Data Seal at sealing time carry `held-out-sealed` retention (Section 15.2).

#### 3.3.2 Evaluation-run-scoped artifacts

Each of the following describes an aggregate tied to one specific completed or in-progress formal held-out evaluation run, under one `configurationLockId` (Section 15.2A), and must carry run-level identity:

- **formal-run evaluation report** — Layer 3 metric outputs produced against the sealed held-out subset for one formal execution;
- **Closure/Readiness artifact** tied to a specific formal run;
- **execution-level acceptance-decision evidence**.

Every evaluation-run-scoped artifact must carry:

- `evaluationRunId`;
- `configurationLockId`;
- `sealedManifestHash`;
- `includedOperationManifest` or a reference to the operation population it covers;
- `scoringVersion`;
- `supportingContractVersions`;
- `timestamp`;
- `contentHash`;
- `supersessionIdentity`, where the artifact replaces a prior run-scoped report.

#### 3.3.3 Corpus-scoped artifacts

Each of the following describes an aggregate over a corpus version or development population, exists independently of any formal held-out run, and must carry corpus-level identity:

- **development-stage evaluation report** — Layer 3 metric outputs or diagnostics computed against development data before any formal held-out execution;
- **Rev13 contract 11 (Aggregation, Uncertainty and Score-Stability Appendix)** and its supporting evidence, prepared using actual development denominators before held-out sealing (Sections 15.1, 20);
- **corpus manifest** and corpus-level aggregate statistics produced before sealing.

Every corpus-scoped artifact must carry:

- `corpusVersion`;
- `developmentManifestHash` or `sealedManifestHash`, as applicable;
- `supportingContractVersions`;
- `artifactPurpose`;
- `timestamp`;
- `contentHash`;
- `supersessionIdentity`, where the artifact replaces a prior corpus-scoped report or appendix version.

Contract 11 and any artifact prepared under it must remain corpus-scoped and must never be assigned an `evaluationRunId`, since no formal held-out run exists at the point contract 11 is locked.

#### 3.3.4 Governance/audit-scoped artifacts

Each of the following describes an aggregate that may span multiple formal runs, multiple corpus versions, multiple providers, or a time period independent of any single run or corpus version, and must carry governance/audit-level identity rather than being forced into Sections 3.3.1–3.3.3:

- **provider-account or workspace audit record** supplied by a provider, covering general account activity rather than exactly one artifact-scoped object;
- **clearance issuance/expiration record** (Evaluation-Time Provider Exposure Clearance, Source-Generation Provider Exposure Clearance);
- **cross-run or cross-corpus-version summary record**.

Every governance/audit-scoped artifact must carry:

- `governanceArtifactId`;
- `providerAccountOrWorkspaceId`, where applicable;
- `coveredTimeRange`;
- `coveredProvidersOrServices`;
- `relatedOperationManifestIds`, where applicable;
- `relatedEvaluationRunIds`, where applicable;
- `relatedCorpusVersions`, where applicable;
- `clearanceIds`, where applicable;
- `timestamp`;
- `contentHash`.

#### 3.3.5 Provider-log taxonomy

The generic term "provider logs" is not used as a governed category by itself. It is resolved into four distinct objects, each assigned to the identity class that matches its actual scope:

- **platform adapter log** — the project's own adapter/platform-side log of a request; normally available; operation-scoped (Section 3.3.1) unless intentionally aggregated;
- **provider-returned metadata** — request IDs, usage metadata, and similar data returned directly in a provider response; operation-scoped (Section 3.3.1);
- **provider-account audit record** — account- or workspace-level activity logs supplied by the provider; always governance/audit-scoped (Section 3.3.4), because such records routinely span multiple runs, corpus versions, or providers and cannot be reliably reduced to a single run or corpus identity;
- **provider-internal log** — the provider's own internal system logs, available only when contractually disclosed; classified by whichever scope its content actually describes, and additionally subject to Section 16 provider due-diligence rules.

#### 3.3.6 Unknown and unclassified artifacts

An artifact produced from governed data that does not clearly fit Section 3.3.1, 3.3.2, 3.3.3 or 3.3.4 is not thereby excused from governance. Any new, unknown, or unclassified artifact produced from governed data is automatically governed from the moment it is produced. It must be immediately quarantined under the strictest protection classification (Section 17.1B) inherited from any governed input that contributed to it, and must not be used, disclosed, further processed, or deleted outside the incident-and-classification procedure (Section 19) until it is formally classified into one of the four identity classes above, either under this Decision or a successor revision. Treating an unclassified artifact as outside this Decision's scope is prohibited.

#### 3.3.7 Common handling rules

Regardless of identity class, every artifact in Section 3.3 must:

- be assigned exactly one artifact type, one protection classification, one retention class, and one handling status under Section 17.1B;
- use classification cardinality determined by the artifact's actual scope, independently of whether it is operation-scoped, run-scoped, corpus-scoped, or governance/audit-scoped:
  - an atomic, single-scope artifact carries exactly one `populationKind` and one `dataSubset` value where applicable;
  - any aggregate or multi-scope artifact carries non-empty set-valued `populationKinds[]` and `dataSubsets[]` whenever it genuinely spans multiple populations or both development and held-out data;
- inherit at least `held-out-sensitive` protection whenever any included population, subset, source, derivative, or operation is held-out-sensitive;
- follow the same zone-separation, access-control, encryption, audit-trail and deletion rules defined elsewhere in this Decision, applied to the zone in which it is produced or stored;
- never be used to satisfy held-out sealing preconditions unless it is itself part of the sealed content under Section 15.2.

Identity class and classification cardinality are independent concepts. A corpus-scoped development report, contract-11 evidence package, or run-scoped aggregate may require set-valued classification just as a governance/audit-scoped record may. `none` and `non-population-artifact` may be used only when the corresponding relationship genuinely does not apply, never to hide mixed coverage.

This Decision does not define evaluation metrics, contract structure or acceptance thresholds associated with these artifacts; those remain governed by Evaluation Threshold and Acceptance Plan Rev13 and its supporting contracts. This Decision governs only their handling as data.

---

## 4. Authoritative source classes

Every semantic corpus image must belong to exactly one primary source class.

### 4.1 Licensed image

A licensed image is eligible only when a retained license record proves that the project may:

- store the image;
- create technical derivatives;
- annotate it;
- use it for internal model/provider evaluation;
- retain evaluation records;
- disclose it to an external provider only if later separately authorized and permitted by the license;
- use it for the required project duration.

“Royalty-free,” “free,” “publicly available,” “found online” or “downloadable” is not sufficient evidence of eligibility.

### 4.2 Synthetic image

A synthetic image is eligible only when:

- the generation source and tool/model are identified;
- the generation date, prompt/configuration lineage and output identity are recorded;
- the tool/provider terms permit the intended storage, annotation and evaluation use;
- the image is not created from an unapproved real-person reference;
- the image contains no knowingly reproduced private or identifying content;
- all source inputs used to generate or edit it are independently eligible;
- its entire generation lineage is assigned to one corpus subset.

Synthetic images must not be represented as photographs of real properties.

### 4.3 Deliberately staged image

A staged image is eligible only when:

- the scene was arranged specifically for controlled project use;
- the location owner or authorized controller granted documented permission;
- the photographer or rights holder granted documented permission;
- no real user workflow supplied the image;
- no person is intentionally depicted;
- visible identifying content is removed before corpus admission;
- alternate angles and all derivatives remain within one lineage and one subset.

### 4.4 Source class precedence

When an asset could fit more than one class, the most direct rights-bearing origin controls:

1. staged capture of a real room;
2. synthetic generation or synthetic edit;
3. third-party licensed image.

A transformed licensed photo remains licensed-source lineage, not synthetic lineage.

---

## 5. Mandatory Asset Eligibility Record

No image may enter a candidate corpus workspace without an Asset Eligibility Record.

Required fields:

- `assetId`;
- `sourceClass`;
- `sourceUriOrInternalOrigin`;
- `sourceAcquisitionDate`;
- `rightsHolderOrProvider`;
- `licenseOrPermissionRecordId`;
- `permittedUses`;
- `prohibitedUses`;
- `thirdPartyProcessingAllowed`;
- `retentionConstraint`;
- `deletionConstraint`;
- `territorialConstraint`, if any;
- `attributionRequirement`, if any;
- `originalFileHash`;
- `perceptualHash`;
- `lineageId`;
- `candidateSubset`;
- `privacyScreeningStatus`;
- `eligibilityReviewer`;
- `eligibilityDecision`;
- `decisionTimestamp`;
- `decisionReason`;
- `recordSchemaVersion`;
- `restrictionSetId`, when the decision is `eligible-with-restrictions`;
- `restrictionApprovalId`, when the decision is `eligible-with-restrictions`;
- `restrictionExpiry`, when the decision is `eligible-with-restrictions`;
- `allowedZones`;
- `externalExposureAllowed`;
- `heldOutAllowed`.

Allowed eligibility decisions:

- `eligible`;
- `eligible-with-restrictions`;
- `quarantined`;
- `rejected`;
- `expired`.

Assets admitted to corpus preparation must have a decision of either `eligible`, or `eligible-with-restrictions` with an accepted, active, restriction-compatible workflow recorded per Section 5.1. `Quarantined`, `rejected`, and `expired` assets are prohibited from admission. `Eligible-with-restrictions` assets additionally cannot be uploaded to any external provider unless `externalExposureAllowed` is true and a separate clearance covers them.

### 5.1 `Eligible-with-restrictions` approval and expiry

- Only the `DataEligibilityReviewer` role (Section 9.1), and not the original submitter, may approve a restriction-compatible workflow for an `eligible-with-restrictions` asset.
- The specific restriction (e.g., development-only use, no external provider exposure, attribution required, time-limited use) must be recorded in `prohibitedUses` and `decisionReason`, in machine-checkable form where practical.
- Admission to the Development Workspace requires the restriction to be compatible with development-only handling; admission to the Held-Out Sealing Vault additionally requires Project Owner confirmation that the specific restriction does not conflict with sealing, evaluation, or (if applicable) Evaluation-Time Provider Exposure Clearance terms (Section 16.2A).
- Every `eligible-with-restrictions` record must carry an explicit expiry date or expiry condition; on expiry, the asset automatically reverts to `expired` and re-enters the Section 6.3 expiration/revocation procedure unless a reviewer re-confirms eligibility before the expiry date.
- Removal or relaxation of a restriction requires the same `DataEligibilityReviewer` approval and a new `decisionTimestamp`; it is never inferred from silence or from the asset having been used without incident.

---

## 6. Licensing and permission evidence

### 6.1 Required evidence

At least one retained authoritative evidence object is required:

- executed license;
- purchase receipt plus applicable license terms;
- provider terms snapshot plus asset-generation record;
- signed location/photographer permission;
- public-domain determination with source and legal basis;
- internally authored synthetic/staged rights declaration.

### 6.2 License snapshot rule

The exact license or terms version applicable at acquisition must be retained as a dated snapshot or immutable reference. A current web page alone is insufficient because terms may change.

### 6.3 Expiration and revocation

If rights expire, are revoked or become uncertain:

1. affected assets enter quarantine;
2. no new use or provider exposure is allowed;
3. all derivatives and lineage-linked records are identified, including lineage-linked backups and local copies (Section 8A);
4. determine whether any external provider received the asset or a derivative;
5. every affected development corpus version, held-out subset, fixture, derivative, provider exposure record, evaluation output, and evaluation report is invalidated — invalidation is not limited to sealed held-out subsets;
6. every affected formal run result is invalidated;
7. if the asset or a derivative was already sent to a provider: suspend the applicable clearance (Evaluation-Time Provider Exposure Clearance or Source-Generation Provider Exposure Clearance); identify the external recipient(s); initiate provider-side deletion or remediation where rights no longer permit continued processing;
8. create an incident record and preserve incident evidence;
9. the Project Owner is notified;
10. replacement or deletion follows the accepted remediation decision.

Section 6.3 and Section 7.5 are semantically symmetrical in invalidation and remediation scope; only incident-specific triggers and evidence differ.

### 6.4 No silent license substitution

A new license, changed provider terms or assumed fair-use theory may not silently cure an ineligible asset. A new eligibility decision is required.

---

## 7. Privacy and personal-data boundary

### 7.1 Prohibited personal data

The corpus must not intentionally contain:

- faces or identifiable bodies;
- names, addresses, phone numbers or email addresses;
- vehicle license plates;
- readable family photographs;
- readable screens or documents;
- access codes, QR codes, account identifiers or security credentials;
- precise geolocation metadata;
- camera-owner identifiers;
- biometric or health-related information;
- any content that could reasonably identify an occupant.

### 7.2 Metadata sanitization

Before corpus admission, image metadata must be inspected and sanitized. At minimum remove or neutralize:

- GPS;
- device serial numbers;
- owner/author names;
- software user identifiers;
- embedded comments;
- original local paths;
- timestamps not required for governance.

The original metadata-bearing file must not be retained unless a documented legal or evidentiary reason requires it. When retained, it must be quarantined in a more restricted rights-evidence location and excluded from corpus execution.

### 7.3 Visual privacy screening

Every staged and licensed real-image candidate requires visual screening for identifying content. Automated screening may assist but does not replace recorded human eligibility review.

### 7.4 Redaction rule

Redaction is permitted only when:

- rights to the underlying image are already valid;
- redaction does not materially alter the semantic case;
- the transformation is recorded;
- the redacted derivative receives a new asset ID;
- the original remains quarantined or is deleted according to rights and retention requirements.

Redaction cannot convert a real user photo into an eligible test image.

### 7.5 Discovery of personal data after admission

On discovery:

1. quarantine the asset and its lineage immediately;
2. suspend provider exposure and evaluation use;
3. identify all copies, derivatives and logs, including lineage-linked backups and local copies (Section 8A);
4. determine whether any external provider received it, and identify the external recipient(s);
5. create an incident record and preserve incident evidence;
6. delete, replace or remediate only through an authorized decision;
7. invalidate every affected development corpus version, held-out subset, fixture, derivative, provider exposure record, evaluation output, evaluation report, and affected formal run result — invalidation is not limited to sealed subsets;
8. if the asset or a derivative was already sent to a provider: suspend the applicable clearance (Evaluation-Time Provider Exposure Clearance or Source-Generation Provider Exposure Clearance); invalidate the results of any run that used it; initiate provider-side deletion or remediation where rights no longer permit continued processing; pending incident resolution;
9. the Project Owner is notified.

Section 6.3 and Section 7.5 are semantically symmetrical in invalidation and remediation scope; only incident-specific triggers and evidence differ.

---

## 8. Corpus zones and storage architecture

Exactly five logical zones are defined:

1. **Intake Quarantine** — unapproved source assets and rights records.
2. **Eligible Source Vault** — approved originals and authoritative rights evidence.
3. **Development Workspace** — authorized development-subset assets and mutable annotations.
4. **Held-Out Sealing Vault** — immutable sealed held-out assets, annotations and manifests.
5. **Evaluation Output Vault** — authorized run outputs, reports and provider-exposure evidence.

Zone separation may be logical or physical, but access policy, auditability and object identity must make cross-zone movement explicit and reviewable.

No asset may move directly from Intake Quarantine to the Held-Out Sealing Vault.

### 8A. Local execution storage

Perception-execution and evaluation artifacts (Section 3.3) produced on any local machine, development container or CI runner during proof execution are governed data and must not be treated as informal working files.

- Local storage of these artifacts is permitted only for the minimum duration required to complete the operation, transformation, or evaluation run in progress.
- Local copies must reside in a location logically associated with the correct zone (Development Workspace or Evaluation Output Vault) and must not be synchronized to unmanaged personal storage, personal messaging, or public locations.
- Local copies containing held-out images, held-out expected outcomes, or held-out `PerceptionEvidenceArtifact` content are subject to the same held-out access restrictions as Section 9.3, regardless of machine.
- Local copies must be registered where practical (Section 12.2 style identity for derivatives; operation ID for execution artifacts) and securely removed once the corresponding object is durably stored in its zone or is no longer required.
- Raw provider output and prompt traces must not be left in ad hoc local log files outside the governed audit trail (Section 18).

This section defines a data-handling minimum only; it does not define the platform-wide Security Architecture referenced in Section 10.

---

## 9. Access control

### 9.1 Least privilege

Access must be granted by role and task necessity.

Minimum roles:

- `DataEligibilityReviewer`;
- `CorpusPreparer`;
- `Annotator`;
- `Adjudicator`;
- `HeldOutCustodian`;
- `EvaluationExecutor`;
- `Auditor`;
- `ProjectOwner`.

New governance functions introduced by this Decision are mapped to these existing roles rather than creating new human roles; the Corpus Storage and Access Matrix (Section 22, artifact 4) must record the mapping explicitly:

- **ClearanceApprover** (Evaluation-Time Provider Exposure Clearance, Section 16.2A; Source-Generation Provider Exposure Clearance, Section 16.0.1) — `ProjectOwner`, or a delegate explicitly recorded in the Matrix;
- **ConfigurationLockCustodian** (Section 15.2A) — `HeldOutCustodian`;
- **IncidentCoordinator** (Section 19) — `Auditor`, unless the Matrix designates otherwise;
- **DeletionExecutor** (Section 17.4) — `CorpusPreparer` for development-working data, `HeldOutCustodian` for held-out-sealed and held-out-sensitive data, subject to Section 9.2 authorization requirements.

### 9.2 Separation of duties

The same individual may hold multiple roles during early project stages only when all actions remain individually logged. However:

- an annotator must not unilaterally seal held-out data;
- an evaluation executor must not modify held-out inputs or ground truth;
- a provider/model evaluator must not receive unrestricted browsing access to held-out annotations;
- deletion of sealed data requires Project Owner authorization or a previously accepted emergency rule.

### 9.3 Held-out access

Before formal execution, held-out access is limited to:

- designated corpus preparation personnel before sealing;
- designated adjudicators;
- Held-Out Custodian;
- Auditor;
- Project Owner.

After sealing, ordinary development work must not expose held-out images, expected outcomes, annotations or aggregate clues that enable tuning.

### 9.4 Credential handling

Storage credentials, provider keys and encryption secrets must never be stored in corpus manifests, annotations, prompts or repository documents.

---

## 10. Encryption, backup and transport

- All governed data must be encrypted in transit.
- Storage containing original images, annotations, rights records or held-out material must be encrypted at rest.
- Backups must preserve zone classification and access restrictions.
- Held-out backups must be covered by the same sealing identity and audit rules as primary storage.
- Unencrypted transfer through personal messaging, public links or unmanaged removable media is prohibited.
- Temporary local copies must be minimized, registered where practical and securely removed after use.

This Decision defines data-handling requirements, not the platform-wide Security Architecture.

---

## 11. Development and held-out separation

### 11.1 Lineage isolation

Every asset and derivative must carry a `lineageId`.

All assets from the same:

- physical room;
- staged session;
- generation session;
- source photograph;
- edit chain;
- burst or alternate-angle capture;
- near-duplicate family;
- materially shared synthetic seed or base image

must belong wholly to either development or held-out, never both.

### 11.2 Near-duplicate control

Exact hashes and perceptual similarity checks must be run before sealing. Suspected cross-subset near-duplicates require human review.

### 11.3 No tuning leakage

Held-out images, annotations, expected outcomes and metric-level failure examples must not be used to:

- refine prompts;
- tune adapters;
- change heuristics;
- choose confidence mapping;
- change preprocessing;
- amend category vocabulary;
- alter thresholds;
- train annotators for the same sealed evaluation;
- select a provider/model before the formal authorized run.

### 11.4 Aggregate leakage

Before formal execution, even aggregate held-out statistics may be disclosed only when required for sealing readiness and when they cannot reveal semantic answers or enable mechanism tuning.

---

## 12. Transformations and derivatives

### 12.1 Permitted preprocessing

A transformation is permitted only when it is:

- required by an accepted corpus or evaluation contract;
- deterministic or fully versioned;
- reproducible;
- traceable to the original;
- applied consistently according to a locked rule;
- not chosen after viewing provider/model outputs.

Examples may include:

- decoding;
- orientation correction;
- approved metadata removal;
- approved format conversion;
- approved resolution normalization;
- approved privacy redaction;
- canonical evidence derivative creation.

### 12.2 Transformation record

Every derivative requires:

- parent asset ID;
- transformation ID;
- tool and version;
- parameters;
- operator or automated stage;
- timestamp;
- output hash;
- purpose;
- subset and lineage identity.

### 12.3 Prohibited transformations

Without a separately accepted contract:

- semantic object removal or insertion;
- relighting intended to improve model performance;
- geometry correction;
- crop selection based on model output;
- manual enhancement targeted to a particular provider;
- post-sealing transformation changes;
- selective quality improvement of held-out failures.

---

## 13. Annotation-data handling

### 13.1 Annotation identity

Every annotation record must identify:

- asset ID;
- lineage ID;
- subset;
- annotation contract version;
- annotator pseudonymous ID;
- annotation timestamp;
- source and derivative version;
- annotation status;
- adjudication status;
- final ground-truth version.

### 13.2 Annotator privacy

Annotator employment, contact or payment information must not be stored inside corpus annotation payloads. Use pseudonymous internal IDs.

### 13.3 Disagreement records

Raw annotations, disagreement records and adjudication decisions must be retained through sealing and evaluation completion because they support annotation-quality evidence and auditability.

### 13.4 No hidden correction

Ground truth may not be silently edited. Every change creates a new version and an auditable reason.

---

## 14. Versioning and manifests

### 14.1 Corpus version

A corpus version must at all times identify:

- semantic version or immutable version ID;
- annotation contract versions;
- supporting-contract versions;
- source eligibility record versions;
- creation timestamp;
- responsible roles;
- status.

Manifest-hash fields are status-dependent and must never be fabricated or left as placeholders:

- `draft` — no manifest hash is required yet; the corpus version identity alone is required.
- `development-active` — `developmentManifestHash` is required; `heldOutManifestHash` and `fixtureManifestHashes` must not yet exist and must not be recorded.
- `ready-for-sealing-review` — `developmentManifestHash` remains required; a `candidateHeldOutManifestHash` and candidate `fixtureManifestHashes` are required, marked candidate/unsealed.
- `sealed` — `developmentManifestHash`, `heldOutManifestHash` and `fixtureManifestHashes` are all required and immutable; `sealId` is required (Section 15.2).
- `invalidated` / `retired` — the manifest hashes that existed at the time of invalidation or retirement are retained unchanged for audit purposes; no new hash may be introduced.

Allowed corpus statuses:

- `draft`;
- `development-active`;
- `ready-for-sealing-review`;
- `sealed`;
- `invalidated`;
- `retired`.

### 14.2 Asset immutability

An asset’s bytes, identity or lineage cannot be changed in place. Any content change creates a new asset ID and version.

### 14.3 Manifest completeness

A sealing manifest must enumerate every governed object required to reproduce the evaluation population, including image, annotation, evidence, expected-outcome and fixture identities.

### 14.4 Held-Out Subset Definition and Allocation Governance

Formal-evaluation held-out subsets must be defined and sealed before any provider/model candidate is engaged and before any provider output is viewed. Their immutable content definition is separated from later operational allocation and consumption state.

#### 14.4.1 Immutable Held-Out Subset Definition Manifest

Every Held-Out Data Seal must include one or more immutable Held-Out Subset Definition Manifests, each recording:

- `heldOutSubsetId`;
- member asset identities;
- fixture identities;
- subset hash;
- population composition;
- lineage-isolation proof;
- overlap-check result against every other subset in the same seal;
- sealing timestamp;
- preassigned `sealRecordId`;
- definition version;
- manifest content hash.

Rules:

- Intended formal-evaluation subsets are formed before provider engagement and before provider outputs are viewed.
- All subsets within a seal are pairwise disjoint.
- Membership, fixture identities, population composition and hashes are immutable once sealed.
- Candidate-aware or output-aware subset construction and cherry-picking are prohibited.
- A fresh subset for a new comparison must already exist in an accepted seal; otherwise new sealing/resealing governance under Section 15.3 is required.
- The manifest contains no mutable allocation, binding, consumption, run-status, lock-status, or release fields.

#### 14.4.2 Append-only Held-Out Subset Allocation and Consumption Ledger

Operational allocation and consumption state is recorded outside the immutable Held-Out Data Seal in an append-only or otherwise tamper-evident ledger. Each ledger entry records:

- `ledgerEntryId`;
- `heldOutSubsetId`;
- `sealRecordId` and final `sealHash`;
- event type: `binding-created`, `first-inference-consumed`, `binding-released`, `run-invalidated`, `subset-retired`, or corrective event;
- `configurationLockId`, where applicable;
- `evaluationRunId`, where applicable;
- event timestamp;
- event authority;
- event reason;
- event hash;
- previous-entry hash or equivalent tamper-evident linkage.

Derived operational states are:

- `available` — sealed, not bound, not consumed, not retired;
- `bound` — atomically linked to exactly one `configurationLockId` and `evaluationRunId`, but no inference has occurred;
- `consumed` — first inference has occurred; permanent non-reuse applies regardless of later run status;
- `invalidated` — governance invalidation applies; the subset remains non-reusable if ever consumed;
- `retired` — withdrawn from future binding by authorized governance.

A bound-but-unconsumed subset may return to `available` only through an explicit Project Owner-authorized `binding-released` ledger event, and only when no inference, provider submission, or provider-side processing occurred. Release never changes sealed membership or hashes.

#### 14.4.3 Atomic binding and consumption procedure

For each formal held-out run:

1. Select one `available` subset already present in the accepted seal.
2. Create the new `evaluationRunId` and immutable `configurationLockId` as part of the same governed transaction.
3. Append one atomic `binding-created` event linking `heldOutSubsetId`, `configurationLockId`, and `evaluationRunId`.
4. Confirm no other active or historical binding conflicts with the subset and that it has never been consumed.
5. Before the first provider submission, verify the binding event and configuration lock hashes.
6. At the first inference/provider submission, append `first-inference-consumed`; from that moment the subset is permanently non-reusable for any other candidate, configuration, or run, regardless of whether the run later completes, fails, aborts, or is invalidated.

No lock may exist as executable for a formal run without the corresponding atomic binding ledger entry. No consumption state may be represented by rewriting a sealed manifest.

#### 14.4.4 Seal identity and hash ordering

To avoid circular identity between a manifest and the seal that contains it:

- `sealRecordId` is a preassigned, non-content-derived immutable identifier used inside component manifests;
- component manifests are hashed independently;
- after all component hashes are fixed, an external immutable Seal Envelope records `sealRecordId`, component hashes, final content-derived `sealHash`, sealing timestamp and sealing authority;
- `sealHash` is not embedded back into already-hashed component manifests;
- allocation/consumption ledger entries reference both `sealRecordId` and final `sealHash`.

#### 14.4.5 Phase-1 implementation boundary

A future Phase-1 Scope Decision or Execution Profile may simplify only the implementation mechanism: fewer pre-sealed subsets, manual CSV/JSON manifests and ledger, logical zones, manual binding records, or combined roles with complete auditability. It may not weaken pre-engagement formation, disjointness, immutability, no cherry-picking, atomic binding, consume-on-first-inference, permanent non-reuse, or fresh-subset-already-sealed requirements.

---

## 15. Held-out sealing

### 15.1 Preconditions

Held-out sealing is prohibited until:

1. this Decision is accepted;
2. supporting contracts 1–10 (locked before Corpus Preparation, Section 20) remain locked, **and** contract 11 (Aggregation, Uncertainty and Score-Stability Appendix) is separately prepared and locked using actual development denominators (Rev13, §5.2, step 6), as a corpus-scoped artifact under Section 3.3.3;
3. the Held-Out Sealing Procedure (Section 22, artifact 8) is prepared, reviewed, accepted and version-locked;
4. Tier 1 Corpus Preparation has been separately authorized;
5. source eligibility is complete;
6. privacy screening is complete;
7. development/held-out lineage isolation is verified;
8. required corpus minimums and fixture counts are met;
9. annotation-quality prerequisites are satisfied;
10. unresolved cases are repaired, replaced or excluded under accepted rules;
11. exact manifests and hashes are produced;
12. access-control roles are assigned;
13. no known license or retention conflict remains;
14. Project Owner confirms seal readiness.

### 15.2 Seal contents — Held-Out Data Seal

The Held-Out Data Seal must cover:

- all held-out image bytes;
- all precomputed held-out derivatives included in the sealed manifest (Section 3.3.1 notes runtime-produced derivatives are excluded, since they do not yet exist at sealing time);
- all annotations and expected outcomes;
- all fixture inputs and expected outputs;
- one or more immutable Held-Out Subset Definition Manifests (Section 14.4.1), covering every held-out subset intended for formal evaluation;
- all relevant contract versions;
- all component manifests and component hashes;
- an external immutable Seal Envelope containing the preassigned `sealRecordId`, final content-derived `sealHash`, sealing timestamp and sealing authority (Section 14.4.4).

Provider/model configuration is deliberately excluded from the Held-Out Data Seal: at first sealing, no provider/model has yet been authorized (Rev13, §5.2, steps 8–9 occur in that order), and corpus data must not require resealing merely because an evaluation configuration is later chosen. See Section 15.2A.

### 15.2A Formal Evaluation Configuration Lock and atomic subset binding

Rev13, §21, permits exactly one formal held-out execution for one locked mechanism, prompt, adapter, provider/model, scoring version and supporting-contract set. This Decision therefore requires one immutable Formal Evaluation Configuration Lock per candidate, per configuration, per formal run, atomically bound to one already-sealed held-out subset.

After Provider/Model Evaluation Authorization and before any held-out provider submission, one governed transaction must:

1. select one `available` subset from the accepted Held-Out Data Seal;
2. create the new `evaluationRunId`;
3. create the immutable Formal Evaluation Configuration Lock;
4. append the `binding-created` event required by Section 14.4.3.

The lock records:

- `configurationLockId`;
- `evaluationRunId`;
- `evaluationCandidateId`;
- `mechanismVersion`;
- provider, model and endpoint;
- adapter version;
- prompt-configuration hash;
- preprocessing version;
- retry-policy version;
- scoring version;
- supporting-contract versions;
- execution-environment identity;
- `heldOutSubsetId`;
- `sealRecordId` and `sealHash`;
- binding-ledger entry ID;
- `lockedAt`;
- locking authority.

Rules:

- Every operation in the run references the same `configurationLockId` and `evaluationRunId`.
- Changing any locked field requires a new lock, new run, and a different `available` subset.
- The lock is not executable until the atomic binding event exists and validates against the seal and ledger.
- At first provider submission/inference, the subset becomes `consumed` through an append-only ledger event.
- A consumed subset is never reused for another candidate, configuration, lock, or run, whether the consuming run is complete, incomplete, failed, aborted or invalidated.
- A new lock does not itself require resealing when its subset already exists in the unchanged accepted seal and is `available`; otherwise new sealing/resealing governance is required.
- A bound-but-unconsumed subset may be released only under the narrow Owner-authorized conditions in Section 14.4.2.
- Neither binding nor consumption modifies the Held-Out Data Seal.

### 15.3 Post-sealing change

Any change to sealed content creates one of two outcomes:

- authorized resealing with a new version before formal execution; or
- invalidation of the affected subset after execution begins.

No silent patching is allowed.

---

## 16. External provider boundary

### 16.0 Provider governance tracks

Two structurally distinct categories of external AI provider interaction can occur across the Candidate A lifecycle, and this Decision governs them as separate tracks so that one authorization can never be read as covering the other:

1. **Synthetic Source Generation Provider** — an external AI image-generation tool used to create or edit a synthetic corpus source asset (Section 4.2). Due diligence and clearance preparation may occur at any time, but actual generation may occur only *after* Tier 1 Corpus Preparation Authorization, as part of an authorized preparation cycle (Section 16.0.1) — corpus asset creation, including synthetic generation, is step 5 of the Rev13 §5.2 sequence, after Corpus Preparation Authorization (step 4), not before it.
2. **Perception Evaluation Provider** — the VLM/AI provider whose perception mechanism is the subject of Candidate A assessment (Sections 16.1–16.6). Contact occurs in two authorized stages: development-stage assessment/stabilization (Section 16.1, Section 16.6), and the formal held-out run under Provider/Model Evaluation Authorization (Section 16.1, Section 15.2A).

Authorization of one track never authorizes, implies, or substitutes for the other. Section 16.1's default-deny rule applies to the Perception Evaluation Provider track; it does not prohibit synthetic-source generation calls once that separate track is authorized.

**Wrong-track use is an incident.** Using the authorization, clearance, or exposure-record schema of one track for the other is a data-governance incident under Section 19, not a paperwork error to be corrected after the fact. This includes, without limitation: using Perception Evaluation Provider authorization or clearance to cover synthetic-source generation; using Synthetic Source Generation authorization or clearance to cover perception assessment; using an Evaluation-Time Provider Exposure Clearance where a Source-Generation Provider Exposure Clearance is required, or vice versa; and recording an invocation under the wrong provider-exposure schema (Section 16.0.2 vs Section 16.5). The required response follows the existing Section 19 incident procedure in full, including suspension of the invocation/workflow, quarantine of resulting artifacts, impact assessment, and Project Owner notification — no lesser remediation (e.g., silent reclassification of the record) satisfies this requirement.

#### 16.0.1 Synthetic Source Generation Provider governance and configuration identity

Before Tier 1 Corpus Preparation Authorization, only provider due diligence and preparation of a Source-Generation Provider Exposure Clearance may occur. No prompt, reference image, source image, generation request or edit request may be sent.

After Tier 1 Corpus Preparation Authorization, and before any external generation invocation:

1. the Project Owner must separately grant a Synthetic Source Generation Authorization subordinate to the authorized Corpus Preparation cycle;
2. the Source-Generation Provider Exposure Clearance must be confirmed valid;
3. an immutable, versioned `sourceGenerationConfigurationId` snapshot must be created or selected.

Each `sourceGenerationConfigurationId` records:

- `sourceGenerationConfigurationId`;
- provider, tool/model/version and endpoint where applicable;
- prompt/configuration hash;
- generation parameters;
- reference/source-image configuration where applicable;
- safety/content-policy settings;
- retry-policy version;
- execution-environment identity;
- creation timestamp;
- `supersedesId`, where applicable;
- recording/approving authority.

Any governed change creates a new identity; existing snapshots and outputs are never edited in place. This identity belongs only to the Synthetic Source Generation Provider track and must never be substituted with `developmentExecutionConfigurationId` or `configurationLockId`.

#### 16.0.2 Source-Generation Provider Exposure Record

Every Synthetic Source Generation Provider invocation must record:

- `operationId` and `inputArtifactId`;
- `authorizationId`;
- `clearanceId`;
- `sourceGenerationConfigurationId`;
- provider/tool/model/version and endpoint where applicable;
- request/prompt hash;
- reference/source asset IDs and lineages where applicable, never fabricated;
- generation lineage required by Section 4.2;
- `outputAssetId` and output hash;
- provider-side retention/deletion terms and status;
- request and response timestamps;
- generated-asset eligibility linkage.

This record is distinct from the Perception Provider Exposure Record and cannot substitute for it.

### 16.1 Default rule (Perception Evaluation Provider)

Two distinct authorizations gate Perception Evaluation Provider contact, corresponding to the two contact stages in Section 16.0(2):

- **Development/Candidate Assessment Authorization** — required before any development-subset governed image is sent to a candidate Perception Evaluation Provider for adapter/prompt/preprocessing stabilization or candidate assessment (Section 16.6). Distinct from, and does not imply, the authorization below.
- **Provider/Model Evaluation Authorization** (Rev13, §5.2, step 9) — required before any held-out image is sent, and before the formal held-out run under a Formal Evaluation Configuration Lock (Section 15.2A).

No governed image of either subset may be sent to an external Perception Evaluation Provider (Section 16.0) without the authorization corresponding to that subset.

### 16.2 Provider due diligence required before exposure

Before first upload to a perception-evaluation candidate — development or held-out — a provider-specific decision must record:

- exact provider and service;
- exact model and endpoint;
- data-use and training policy;
- retention period;
- deletion capability;
- human-review policy;
- subprocessors and processing regions where available;
- account/workspace controls;
- API logging behavior;
- contractual confidentiality;
- incident-notification terms;
- license compatibility;
- whether zero-retention or equivalent control is available;
- whether prompts, images and outputs may be used for service improvement.

This due-diligence record is formalized as the Evaluation-Time Provider Exposure Clearance defined in Section 16.2A.

### 16.2A Evaluation-Time Provider Exposure Clearance and its boundary with the Selected-Provider Privacy/Retention Decision

Two distinct, sequential decisions govern provider privacy and retention across the lifecycle, and this Decision authorizes neither of them — it only defines their boundary and required content.

**A. Evaluation-Time Provider Exposure Clearance.** Required before any data is sent to a given evaluation candidate (Section 16.2), and required per candidate. Bounded to the assessment itself:

- provider/model/endpoint identity;
- permitted data categories and whether development or held-out exposure is in scope;
- training opt-out status;
- evaluation-time retention (Section 17.2);
- deletion capability and deadline;
- human-review policy;
- subprocessors/processing regions;
- license compatibility;
- account/workspace controls;
- clearance expiry date;
- an explicit prohibition on any production use of the clearance.

**B. Selected-Provider Privacy/Retention Decision.** Required only after Project Owner Provider/Model Selection (a distinct, later governance step). Covers future implementation/runtime operation: production data handling, the real-user-photo boundary, runtime retention and deletion, logging, support access, incident obligations, regions/subprocessors, and contractual/security controls.

`Evaluation-Time Provider Exposure Clearance does not constitute, replace, or pre-authorize the Selected-Provider Privacy/Retention Decision.` This Decision does not itself issue a clearance to any provider; issuing one requires separate Owner authorization at the time a specific evaluation candidate is engaged.

### 16.3 Minimum provider rule for both governance tracks

A provider is ineligible for any governed-data exposure under either provider track when it:

- may train on submitted prompts, images, outputs, references or derivatives without an accepted opt-out;
- has undefined or unacceptable retention;
- cannot support required deletion or contractual controls;
- allows uncontrolled human review;
- conflicts with source licenses or permitted uses;
- prevents auditability of provider/tool/model/version/configuration;
- exposes data beyond the authorized purpose.

For the Synthetic Source Generation Provider track, the minimum additionally covers prompt/reference/source-image handling, output-ownership and reuse rights, generated-output retention, and generation-provenance availability. For the Perception Evaluation Provider track, the minimum applies to development and held-out exposure, with stricter held-out requirements established by the Evaluation-Time Provider Exposure Clearance.

### 16.4 Minimum disclosure and absolute ground-truth non-disclosure

Only the minimum required image and operation payload may be sent to a Perception Evaluation Provider candidate.

Held-out ground truth, expected outcomes, annotations, scoring records, and any answer-bearing manifest must never be disclosed to the evaluated provider/model. No separate authorization, technical-necessity claim, or exception may override this rule within the bounded Candidate A evaluation. If any technical service genuinely requires access to labels for a purpose other than being the subject of evaluation, that service must not be the same evaluated provider/model, and must be governed as a distinct controlled data processor under a separate architecture and separate Owner authorization — it is out of scope for this Decision.

Rights records and internal manifests not covered by the absolute prohibition above may be disclosed only when technically necessary and separately authorized, consistent with Section 16.2A minimum-disclosure due diligence.

### 16.5 Perception Provider Exposure Record

Every external invocation to a Perception Evaluation Provider must record:

- `operationId`;
- `inputArtifactId`;
- `sourceAssetId`, when an admitted semantic image asset is involved (never fabricated when none exists);
- `fixtureId`, when the invocation is fixture-backed;
- subset;
- provider;
- model;
- endpoint;
- exactly one of `developmentExecutionConfigurationId` (Section 16.6) or `configurationLockId` (Section 15.2A), matching whether the invocation is development-stage or formal-run — recorded from the moment the payload is bound for submission, not only upon response;
- account/workspace;
- request timestamp;
- response timestamp;
- request configuration hash;
- response artifact hash;
- retention mode;
- deletion request/status when applicable;
- retry linkage;
- operator or execution job identity;
- authorization ID (Development/Candidate Assessment Authorization or Provider/Model Evaluation Authorization, Section 16.1);
- clearance ID (Evaluation-Time Provider Exposure Clearance, Section 16.2A).

### 16.6 Development execution configuration and stabilization

Provider adapters, prompts, retries and preprocessing must be stabilized on development data, under a **Development/Candidate Assessment Authorization** (Section 16.1) — never under a Formal Evaluation Configuration Lock, which does not yet exist at this stage.

Each development-stage configuration in use is identified by an immutable, versioned `developmentExecutionConfigurationId` snapshot. Development configurations may evolve, but each individual `developmentExecutionConfigurationId` is immutable once created; any change to provider, model, endpoint, adapter, prompt, preprocessing, retry policy, execution environment, or other governed configuration creates a new `developmentExecutionConfigurationId` rather than editing the existing one in place.

Every `developmentExecutionConfigurationId` snapshot must record:

- `developmentExecutionConfigurationId`;
- provider;
- model;
- endpoint;
- adapter version;
- prompt/configuration hash;
- preprocessing version;
- retry-policy version;
- execution-environment identity;
- creation timestamp;
- `supersedesId`, where this snapshot replaces a prior one;
- approving or recording authority.

A `developmentExecutionConfigurationId`:

- does not consume a held-out subset (Section 15.2A) — held-out subset consumption applies only to `configurationLockId`;
- does not create formal-run finality — it carries no `evaluationRunId` and does not trigger the fresh-subset rule in Section 15.2A;
- must never be used as, substituted for, or referenced by an `evaluationRunId` or `configurationLockId`;
- and its historical snapshots, and the outputs bound to them, are never edited in place — only superseded by a new snapshot referencing `supersedesId`;
- must be recorded on every operation-scoped artifact (Section 3.3.1) and provider exposure record (Section 16.5) produced during development-stage stabilization.

Held-out exposure occurs only in the separately authorized formal run, under a Formal Evaluation Configuration Lock (Section 15.2A), after development-stage stabilization is complete.

---

## 17. Retention and deletion

### 17.1 Retention classes

Every governed object must have one retention class:

- `rights-evidence`;
- `source-original`;
- `development-working`;
- `held-out-sealed`;
- `evaluation-output`;
- `audit-log`;
- `quarantine`;
- `incident-record`.

### 17.1A Retention class mapping for perception-execution and evaluation artifacts

The Section 3.3 artifact types are mapped to Section 17.1 retention classes as follows; a Corpus Preparation Plan or later contract may refine but not remove this mapping:

| Artifact (Section 3.3) | Retention class |
|---|---|
| Preprocessed image / diagnostic crop, pre-sealed (enumerated in the sealed manifest, Section 15.2) | `development-working` or `held-out-sealed`, matching its subset |
| Preprocessed image / diagnostic crop, runtime-generated (produced during execution, after any sealing) | `evaluation-output` (never `held-out-sealed`, regardless of subset — see Section 3.3.1) |
| Raw provider output | `evaluation-output` |
| `VlmSceneCandidate` | `evaluation-output` |
| `StructuredSceneV0` (evaluation copy) | `evaluation-output` |
| `PerceptionEvidenceArtifact` | `evaluation-output` |
| Platform adapter log / provider-returned metadata | `evaluation-output` |
| Provider-account audit record / governance-audit-scoped artifacts | `audit-log` |
| Prompt traces | `evaluation-output` |
| Formal-run / development-stage evaluation reports | `evaluation-output` |

Exact durations for each class remain governed by Section 17.2 and are not set by this Decision.

### 17.1B Classification model (independent of retention class)

A single retention class cannot express data sensitivity, population membership, or processing state, because these are independent properties: a raw provider output produced from held-out input is simultaneously an `evaluation-output` (how long it is kept) and held-out-sensitive (who may access it, per Sections 9.3 and 11.3) — and a `fixture` is a population kind that itself has development and held-out members (Rev13), not an alternative to the development/held-out subset. A further complication is that aggregate artifacts in any identity class — including run-scoped, corpus-scoped and governance/audit-scoped records — may genuinely span multiple population kinds and both data subsets at once, and cannot honestly be forced into one value of each. Every governed object must therefore be classified along six independent dimensions:

1. **Artifact type** — the Section 3.3 / Section 3.1 category (e.g., `raw-provider-output`, `StructuredSceneV0`, `annotation`, `source-image`);
2. **Population kind** — for an atomic, single-scope artifact, exactly one value; for any aggregate or multi-scope artifact, regardless of identity class, a non-empty set `populationKinds[]` containing one or more of:
   - `semantic-case`;
   - `operational-fixture`;
   - `contract-violation-fixture`;
   - `non-population-artifact` — used only when population membership genuinely does not apply (e.g., a manifest, log, or clearance record that is not itself a corpus population member), never as a way to avoid listing actual population coverage;
3. **Data subset** — for an atomic, single-scope artifact, exactly one value; for an aggregate artifact, a non-empty set `dataSubsets[]` containing one or more of:
   - `development`;
   - `held-out`;
   - `none` — used only when no subset relationship genuinely exists, never to obscure mixed development/held-out coverage; an artifact touching any held-out data must include `held-out` in `dataSubsets[]` and must never use `none` while held-out data is in scope;
4. **Protection classification** — one of:
   - `ordinary` — no held-out sensitivity;
   - `restricted` — access-limited but not held-out-sensitive (e.g., rights-evidence, annotator identity);
   - `held-out-sensitive` — applies whenever `dataSubsets[]` contains `held-out` (or, for atomic artifacts, whenever `subset` is `held-out`); subject to Sections 9.3 and 11.3 access and no-tuning-leakage rules regardless of retention class or handling status;
5. **Retention class** — the Section 17.1 class governing storage duration;
6. **Handling status** — one of `active`, `quarantined`, `incident-under-review`, `invalidated`, `retired`, or `deleted`, describing current processing state independently of the other five dimensions.

Every derivative or output must inherit the strictest protection classification present in its lineage, and this inheritance is never weakened by a change in handling status: an incident never downgrades a `held-out-sensitive` classification to `ordinary` or `restricted`, it only changes the object's handling status to `incident-under-review` (or `quarantined`) while the protection classification is retained unchanged.

Example (atomic artifact): a raw provider output produced from a held-out-subset input under active incident review is `artifactType: raw-provider-output`, `populationKind: semantic-case`, `subset: held-out`, `protectionClass: held-out-sensitive`, `retentionClass: evaluation-output`, `handlingStatus: incident-under-review`.

Example (aggregate artifact): a provider-account audit record covering both development and held-out operational-fixture and semantic-case activity across two formal runs is `artifactType: provider-account-audit-record`, `populationKinds: [semantic-case, operational-fixture]`, `dataSubsets: [development, held-out]`, `protectionClass: held-out-sensitive` (because `held-out` is present), `retentionClass: audit-log`, `handlingStatus: active` — all six fields are recorded, with dimensions 2 and 3 set-valued because the artifact genuinely spans multiple populations and subsets, and neither `retentionClass` nor `handlingStatus` overrides `protectionClass`.

### 17.2 Retention governance layers

Exact durations are not invented by this Decision. Retention is governed through three lifecycle layers, with two independent provider-track branches in Layer 2:

1. **Layer 1 — Corpus/Data Retention and Deletion Schedule.** Required before corpus creation begins. Covers originals, licenses, annotations, manifests, development-working data, held-out-sealed data, quarantine, local copies and project-controlled audit evidence.
2. **Layer 2A — Source-Generation Provider Exposure Clearance retention terms.** Per synthetic-generation provider, before any generation request. Covers provider-side prompt/reference/source-image retention, generated-output retention, deletion deadlines, subprocessors and provider-account audit evidence.
3. **Layer 2B — Evaluation-Time Provider Exposure Clearance retention terms.** Per perception-evaluation candidate, before any development or held-out exposure. Covers provider-side image/prompt/output retention, deletion deadlines, subprocessors and provider-account audit evidence.
4. **Layer 3 — Selected-Provider Privacy/Retention Decision.** After Project Owner Provider/Model Selection, covering future implementation/runtime retention and real-user-data handling.

Layers 2A and 2B are parallel, track-specific branches rather than sequential substitutes. No indefinite retention by default is permitted. Layer 1 must not invent provider-specific durations governed by Layer 2A, Layer 2B or Layer 3.

### 17.3 Deletion triggers

Deletion or irreversible retirement is required when:

- license or permission requires it;
- source eligibility is revoked;
- personal data cannot be safely remediated;
- retention expires;
- the Project Owner orders deletion;
- provider-specific obligations require deletion;
- an asset is rejected and no audit reason justifies continued quarantine.

### 17.4 Deletion record

Deletion must record object IDs, scope, authority, method, timestamp, backup treatment, provider deletion status and any lawful retention exception.

### 17.5 Cryptographic erasure

Where direct deletion from immutable backups is impractical, documented cryptographic erasure or key destruction may satisfy deletion only if the Security Architecture and storage design later confirm it is effective.

---

## 18. Audit trail

The append-only or otherwise tamper-evident audit trail must capture all acquisition, eligibility, privacy, transformation, annotation, access, sealing, provider-exposure, deletion, incident and Owner-decision events, including:

- immutable Held-Out Subset Definition Manifest creation and hashing;
- Seal Envelope creation, `sealRecordId` assignment and final `sealHash`;
- allocation-ledger binding, consumption, release, invalidation and retirement events;
- atomic creation/linking of `evaluationRunId`, `configurationLockId` and `heldOutSubsetId`;
- first provider submission/inference that consumes a subset;
- creation and supersession of `sourceGenerationConfigurationId` and `developmentExecutionConfigurationId`;
- Source-Generation and Perception Provider Exposure Records;
- clearances and authorizations for both tracks;
- local-copy and backup creation/deletion;
- provider deletion request and confirmation;
- attempted or actual ground-truth disclosure;
- corpus-version invalidation and cross-zone movement;
- wrong-track or wrong-configuration-identity use.

Corrections create linked corrective entries rather than overwriting history.

## 19. Incident handling

A data incident includes the previously defined privacy, licensing, access, leakage, provider, deletion and sealing failures, and additionally:

- modification or attempted modification of an immutable Held-Out Subset Definition Manifest;
- missing, corrupted or non-tamper-evident allocation/consumption ledger entries;
- creation or execution of a Formal Evaluation Configuration Lock without atomic subset binding;
- failure to append the consumption event at first provider submission/inference;
- unauthorized release of a bound subset;
- duplicate binding, overlapping subset definitions, or two locks bound to one subset;
- mismatch between sealed subset identity/hash and ledger identity;
- reuse or attempted reuse of any consumed subset regardless of run status;
- wrong provider-track authorization, clearance, exposure schema or configuration identity;
- Synthetic Source Generation invocation without `sourceGenerationConfigurationId` or with a perception-track identity;
- provider exposure record missing required authorization, clearance or configuration identity;
- broken generation lineage or fabricated source/fixture identity;
- unregistered local/backup copy, provider retention breach, or unconfirmed deletion.

Required response:

1. contain and quarantine;
2. preserve evidence;
3. identify affected assets, derivatives, subsets, runs, locks, ledger entries and external recipients;
4. suspend related activity;
5. assess seal, binding and result validity;
6. notify the Project Owner;
7. record remediation through append-only corrective governance;
8. delete, replace, reseal, release, retire or invalidate only through authorized governance.

## 20. Corpus-preparation admission gate

Tier 1 Corpus Preparation may be considered ready for separate authorization only when this Decision is accepted, supporting contracts **1–10** of Evaluation Threshold and Acceptance Plan Rev13, Section 5.1, are accepted and locked (Rev13, §5.2, step 3), **and** data-governance artifacts 1, 2, 3, 4, 5, 6, 7, 9 and 10 of Section 22 are each prepared, reviewed, accepted, and version-locked — not merely drafted or "ready to implement." The proposed preparation package must additionally demonstrate:

- eligible source strategy for all three permitted source classes actually intended for use;
- storage-zone design consistent with the locked Corpus Storage and Access Matrix (Section 22, artifact 4);
- access-role assignment consistent with the locked matrix;
- annotation identity and adjudication records design;
- provider-exposure prohibition before authorization (Section 16.1);
- confirmation that a Source-Generation Provider Exposure Clearance (Section 16.0.1) has been prepared if synthetic sourcing is intended for this preparation cycle — the Synthetic Source Generation Authorization itself is granted only after this gate is passed, per Section 16.0.1.

Acceptance of this Decision, by itself, does not pass this gate; the Rev13 contracts 1–10 dependency and the Section 22 artifact-locking dependency stated above must both be independently satisfied. If the Project Owner retains a Phase-1 Scope Decision or Execution Profile in the sequence, that document must also be accepted before the final acceptance/version-locking of the pre-corpus data-governance artifacts and before this gate may be considered, per Decision 18 (Section 22A describes the non-normative content of that future document only, not its sequencing).

Contract 11 (Aggregation, Uncertainty and Score-Stability Appendix) and Section 22 artifact 8 (Held-Out Sealing Procedure) are deliberately **not** included in this gate. Per Rev13, §5.2, steps 5–6, contract 11 is prepared and locked only after development corpus/fixture creation and annotation-quality repair, using actual development denominators that do not exist before Corpus Preparation. Both are instead preconditions for held-out sealing under Section 15.1. Section 22 artifact 11 (Provider Exposure and Deletion Log schema) and the applicable clearance (Source-Generation Provider Exposure Clearance, Section 16.0.1, or Evaluation-Time Provider Exposure Clearance, Section 16.2A) are preconditions for first exposure under the relevant provider track, not for Corpus Preparation.

---

## 21. Prohibited shortcuts

The following are explicitly prohibited:

- using web search results as an image corpus without asset-level rights evidence;
- treating absence of a watermark as permission;
- treating subscription access as proof of evaluation rights;
- mixing development and held-out derivatives;
- manually selecting only model-successful held-out cases;
- replacing held-out failures after outputs are viewed;
- changing annotations after model outputs are viewed without invalidation;
- uploading test images to consumer chat interfaces;
- sharing held-out data through public links;
- storing provider keys with corpus files;
- allowing a provider to train on any submitted governed data without an accepted opt-out (held-out data is subject to additional, stricter controls per Section 16.3);
- using production user photos "temporarily";
- postponing provenance reconstruction until after corpus creation;
- accepting undocumented staged images;
- deleting audit evidence to make a dataset appear compliant;
- sending a source image to a Synthetic Source Generation Provider (Section 16.0.1) without a separate Synthetic Source Generation Authorization;
- treating an Evaluation-Time Provider Exposure Clearance as satisfying the Selected-Provider Privacy/Retention Decision, or vice versa;
- disclosing held-out ground truth, expected outcomes, annotations, or scoring records to an evaluated provider/model under any authorization (Section 16.4);
- reusing a held-out subset for another candidate, configuration, lock, or run after its first provider submission/inference, regardless of whether the consuming run is complete, incomplete, failed, aborted or invalidated; or reusing a Formal Evaluation Configuration Lock for a different run (Sections 14.4, 15.2A);
- treating an unclassified derived artifact as outside this Decision's scope instead of quarantining it (Section 3.3.6);
- using one provider-governance track's authorization, clearance, exposure-record schema, or configuration identity for the other, or silently reclassifying a misrecorded invocation instead of treating it as an incident (Sections 3.3.1, 16.0);
- rewriting sealed subset definitions to represent allocation or consumption instead of using the append-only ledger (Section 14.4).

---

## 22. Required future supporting artifacts

This Decision does not prepare them, but the following future artifacts are required, each bound to a specific governance gate:

| # | Artifact | Required (prepared, reviewed, accepted, version-locked) before |
|---|---|---|
| 1 | Test Data Source and License Register template | Tier 1 Corpus Preparation Authorization (Section 20) |
| 2 | Asset Eligibility Record schema | Tier 1 Corpus Preparation Authorization (Section 20) |
| 3 | Privacy Screening Procedure | Tier 1 Corpus Preparation Authorization (Section 20) |
| 4 | Corpus Storage and Access Matrix | Tier 1 Corpus Preparation Authorization (Section 20) |
| 5 | Lineage and Near-Duplicate Control Procedure | Tier 1 Corpus Preparation Authorization (Section 20) |
| 6 | Transformation Registry schema | Tier 1 Corpus Preparation Authorization (Section 20) |
| 7 | Corpus Manifest and Versioning Contract | Tier 1 Corpus Preparation Authorization (Section 20) |
| 8 | Held-Out Sealing Procedure, including immutable Held-Out Subset Definition Manifests, Seal Envelope/hash ordering, and the append-only Allocation and Consumption Ledger procedure (Section 14.4) | Held-out sealing (Section 15.1) |
| 9 | Corpus/Data Retention and Deletion Schedule | Tier 1 Corpus Preparation Authorization (Section 20) |
| 10 | Data Incident Procedure | Tier 1 Corpus Preparation Authorization (Section 20) |
| 11 | Provider Exposure and Deletion Log schema | Must be accepted and version-locked before the first external provider exposure of **either** provider track (Synthetic Source Generation Provider or Perception Evaluation Provider), together with the clearance applicable to that specific track (Source-Generation Provider Exposure Clearance, Section 16.0.1, or Evaluation-Time Provider Exposure Clearance, Section 16.2A) |

These data-governance artifacts are distinct from the eleven evaluation supporting contracts defined by Revision 13. Where overlap exists, one accepted artifact may satisfy both only through explicit traceability. "Readiness to implement" an artifact is not sufficient at any gate above; the artifact itself must be accepted and version-locked before the corresponding gate is passed.

---

## 22A. Non-normative note for a future Phase-1 Scope Decision

**This section is non-normative.** It grants no authorization and waives no requirement. It does not itself state or govern sequencing — the required sequencing of Phase-1 preparation relative to supporting contracts and the Section 22 data-governance artifacts is stated solely in Decision 18, so that a single normative statement of that sequence exists and cannot diverge from a duplicate.

A future Phase-1 Scope Decision or Execution Profile should define the minimum conformant implementation profile for the first bounded corpus cycle, including manual versus automated artifacts, logical zones, combined roles, bounded subset counts, and lightweight but complete manifests, ledger and audit records.

The future Phase-1 document cannot override this Decision, weaken licensing/privacy/lineage/sealing/provider/audit rules, bypass any governance gate, or authorize execution. Separate authorization is required both to prepare and to accept it.

## 23. Decision traceability

| Decision area | Accepted baseline dependency | Proposed effect |
|---|---|---|
| Permitted source classes | Bounded Scope Rev3 | Operational eligibility rules |
| No real user photos/personal data | Bounded Scope Rev3 / Rev13 | Absolute prohibition and incident rule |
| Corpus before provider evaluation | Bounded Scope Rev3 / Rev13 | Provider exposure default deny |
| Development/held-out separation | Rev13 | Lineage isolation and access rules |
| Versioning and sealing | Rev13 | Immutable manifests and seal procedure |
| Evidence/provenance | Mechanism Architecture / Rev13 | Asset and transformation lineage |
| Provider privacy/retention | Governance sequence | Due diligence before exposure |
| Corpus preparation readiness | Confirmed sequence | Admission gate only; no authorization |
| Perception-execution and evaluation artifact handling | Bounded Scope Rev3, Part M.1 | Explicit scope, zones, retention mapping (Sections 3.3, 8A, 17.1A) |
| Corpus preparation gated on Rev13 contracts 1–10 | Evaluation Threshold and Acceptance Plan Rev13, §5.2 | Explicit precondition added to Section 20 |
| Contract 11 gated on held-out sealing, not Corpus Preparation | Evaluation Threshold and Acceptance Plan Rev13, §5.2, steps 5–6 | Explicit precondition in Section 15.1; contradiction with Section 20 removed (Rev3) |
| Four-class artifact identity: operation / evaluation-run / corpus / governance-audit scoped | Internal consistency requirement / Rev13 §5.2 (contract 11 timing) | Section 3.3.1–3.3.4 (Rev3 Finding 3; Rev4 Finding 10 added governance/audit class) |
| Held-Out Data Seal excludes provider/model configuration | Evaluation Threshold and Acceptance Plan Rev13, §5.2, steps 8–9 | Section 15.2 restricted to precomputed data only; Section 15.2A adds separate Formal Evaluation Configuration Lock (Rev3; narrowed further in Rev5 Finding 7) |
| Immutable, one-per-run evaluation lock with one-to-one subset consumption | Evaluation Threshold and Acceptance Plan Rev13, §21 | `configurationLockId` model in Section 15.2A (Rev4 Finding 1; corrected wording and subset-consumption rule added in Rev5 Findings 1–2) |
| Development-stage execution identity separate from formal lock | Internal consistency requirement | `developmentExecutionConfigurationId` in Sections 3.3.1, 16.1, 16.6 (Rev5 Finding 3) |
| Synthetic source generation occurs after Corpus Preparation Authorization, not before | Evaluation Threshold and Acceptance Plan Rev13, §5.2, steps 4–5 | Section 16.0.1 phased due-diligence/generation split (Rev5 Finding 4, correcting Rev4 Finding 9) |
| Decision 11 scoped to Perception Evaluation Provider only | Internal consistency requirement | Section 24, Decision 11 (Rev5 Finding 5) |
| Eligible / eligible-with-restrictions admission rule made consistent | Internal consistency requirement | Section 5 (Rev5 Finding 6, correcting a Revision 1 defect) |
| Pre-sealed vs runtime-generated held-out derivatives | Internal consistency requirement | Sections 3.3.1, 15.2, 17.1A (Rev5 Finding 7) |
| Protection classification independent of handling status | Internal consistency requirement | Section 17.1B (Rev5 Finding 8, correcting a Revision 4 defect) |
| Data subset independent of population kind (fixture) | Rev13 (development/held-out fixture subtypes) | Section 17.1B (Rev5 Finding 9, correcting a Revision 4 defect) |
| Governance/audit-scoped artifact class | Internal consistency requirement | Section 3.3.4 (Rev5 Finding 10) |
| Privacy-incident invalidation scope matches license-incident scope | Internal consistency requirement | Section 7.5 (Rev5 Finding 11, correcting a Revision 1 defect) |
| Status-dependent corpus manifest-hash requirements | Internal consistency requirement | Section 14.1 (Rev5 Finding 12, correcting a Revision 1 defect) |
| Minimum provider rule applies to all governed-data exposure | Internal consistency requirement | Section 16.3 (Rev5 Finding 13, correcting a Revision 1 defect) |
| Data-governance artifacts bound to explicit gates | Internal consistency requirement | Section 22 gate table; Sections 20, 15.1, 16.2A (Rev4 Finding 5) |
| Six-dimension classification (type/population kind/subset/protection/retention/handling status), with set-valued population kind/subset for aggregates | Internal consistency requirement | Section 17.1B (Rev4 Finding 6; expanded in Rev5 Findings 8–9; set-valued fields added in Rev6 Correction 2) |
| Three-layer retention governance with parallel Layer-2 provider branches | Internal consistency requirement | Section 17.2 (Rev8 Finding 4) |
| Default-deny/quarantine for unclassified artifacts | Internal consistency requirement | Section 3.3.6 (Rev4 Finding 8) |
| Synthetic Source Generation Provider vs Perception Evaluation Provider tracks, fully integrated logging/retention/gating | Bounded Scope Rev3 (permitted synthetic source class) / internal sequencing | Section 16.0, 16.0.2, 16.5, 17.2, 22 (Rev4 Finding 9; sequencing corrected in Rev5 Finding 4; full lifecycle integration in Rev6 Correction 5) |
| Evaluation-Time Provider Exposure Clearance vs Selected-Provider Privacy/Retention Decision | New proposed Owner Decision | Section 16.2A (Rev4 Finding 2) |
| Absolute non-disclosure of held-out ground truth to evaluated provider | New proposed Owner Decision | Section 16.4 (Rev4 Finding 4) |
| Immutable, versioned development configuration identity | Internal consistency requirement | Section 16.6 (Rev6 Correction 1, correcting a Rev5 self-contradiction) |
| Generalized operation-input identity for fixtures/rejected operations | Internal consistency requirement | Section 3.3.1 (Rev6 Correction 3) |
| Configuration identity from submission, not only on result | Internal consistency requirement | Section 3.3.1 (Rev6 Correction 4) |
| Immutable Held-Out Subset Definition Manifests plus append-only Allocation and Consumption Ledger | Internal consistency requirement | Sections 14.4, 15.2A (Rev8 Findings 2–3) |
| Genuinely symmetrical license/privacy invalidation scope | Internal consistency requirement | Sections 6.3, 7.5 (Rev6 Correction 6, correcting a Rev5 Decision 14 accuracy gap) |
| Decision 15 requires both Rev13 contracts 1–10 and Section 22 pre-corpus artifacts | Internal consistency requirement | Section 24, Decision 15 (Rev6 Correction 8) |
| Provider-training prohibition covers all governed data | Internal consistency requirement | Section 21 (Rev6 Correction 8) |
| Non-authorization boundary names all Rev4–Rev6 authorizations/clearances | Internal consistency requirement | Section 24, Decision 17; Section 25 (Rev6 Correction 8) |
| Held-Out subset integrity boundary vs Phase-1 implementation simplification | Owner-directed clarification / Rev8 sequencing correction | Section 14.4.5 (integrity boundary); Decision 18 (sequencing only, per Rev9 Finding 2) |
| Text-only synthetic generation identity with dedicated sourceGenerationConfigurationId | Internal consistency requirement | Sections 3.3.1, 16.0.1–16.0.2 (Rev8 Finding 1) |
| Wrong provider-governance track use is a data-governance incident | Owner-directed clarification (non-blocking) | Section 16.0; Sections 18, 19, 21 (Rev7 Change 3) |
| Non-normative Phase-1 note: grants no authorization, cannot weaken this Decision | Owner-directed clarification (non-blocking) | Section 22A (Rev7 Change 4) |
| Provider minimum controls explicitly cover both provider tracks | Internal consistency requirement | Section 16.3; Decisions 12, 26, 32 (Rev8 Finding 6) |
| Classification cardinality independent of identity class | Internal consistency requirement | Sections 3.3.7, 17.1B; Decision 30 (Rev8 Finding 8) |
| Seal identity/hash ordering avoids circular dependency | Auditability improvement | Sections 14.4.4, 15.2 (Rev8 Improvement 1) |
| Consume-on-first-inference prohibition consistent in shortcuts | Internal consistency requirement | Section 21 (Rev8 Finding 7) |
| Governance-history claim cited to verbatim source, not asserted unattributed | Governance-integrity requirement | Section 0F (Rev9 Finding 1) |
| §22A non-normative in substance, not only in label; sequencing stated once, in Decision 18 | Internal consistency requirement | Section 22A; Section 20; Decision 35 (Rev9 Finding 2) |

---

## 24. Owner Decision Record

The Project Owner is asked to decide each item explicitly.

### Decision 1 — Document acceptance

Recommended:

`ACCEPT Candidate A Test Data Handling Decision Revision 9 as the authoritative test-data governance boundary for the bounded Candidate A proof.`

### Decision 2 — Source classes

Recommended:

`ACCEPT licensed, synthetic and deliberately staged as the only permitted primary source classes, subject to asset-level eligibility evidence.`

### Decision 3 — Real-user and personal-data prohibition

Recommended:

`ACCEPT the absolute prohibition on real user photos and intentional personal data for this proof.`

### Decision 4 — Asset Eligibility Record

Recommended:

`ACCEPT a mandatory asset-level eligibility record before corpus admission, and CONFIRM that both eligible assets and eligible-with-restrictions assets with an accepted, active, restriction-compatible workflow (Section 5.1) may be admitted, while quarantined, rejected, and expired assets remain prohibited.`

### Decision 5 — Rights evidence

Recommended:

`ACCEPT license/permission snapshots and no silent rights substitution.`

### Decision 6 — Corpus zones

Recommended:

`ACCEPT the five-zone logical storage model.`

### Decision 7 — Least privilege and separation of duties

Recommended:

`ACCEPT role-based access, held-out restrictions and logged early-stage role overlap.`

### Decision 8 — Lineage isolation

Recommended:

`ACCEPT whole-lineage assignment to exactly one subset and near-duplicate review.`

### Decision 9 — Transformation governance

Recommended:

`ACCEPT versioned, reproducible transformations and prohibition of output-driven post hoc changes.`

### Decision 10 — Versioning and sealing

Recommended:

`ACCEPT immutable asset identities, complete manifests including immutable Held-Out Subset Definition Manifests and the external Seal Envelope (Sections 14.4, 15.2), status-dependent manifest-hash requirements that never fabricate a hash for a manifest that does not yet exist (Section 14.1), append-only allocation/consumption state outside the seal, and no silent post-sealing patching.`

### Decision 11 — External provider default deny

Recommended:

`ACCEPT that no governed image may be exposed to a Perception Evaluation Provider before the authorization matching its subset (Development/Candidate Assessment Authorization for development data, or Provider/Model Evaluation Authorization for held-out data, Section 16.1) and an Evaluation-Time Provider Exposure Clearance (Section 16.2A). This Decision does not govern, and is not satisfied or overridden by, Synthetic Source Generation Provider authorization (Section 16.0.1, Decision 26).`

### Decision 12 — Provider minimum controls

Recommended:

`ACCEPT that the minimum provider controls in Section 16.3 apply to any governed-data exposure under either provider track: prompts/reference/source images and generated outputs for the Synthetic Source Generation Provider track, and development/held-out inputs and outputs for the Perception Evaluation Provider track; and ACCEPT the track-specific additional source-generation and held-out controls.`

### Decision 13 — Retention governance

Recommended:

`ACCEPT the three-layer retention model in Section 17.2: Layer 1 corpus-side retention; parallel Layer 2A Source-Generation Provider and Layer 2B Evaluation-Time Provider clearance-retention branches; and Layer 3 Selected-Provider runtime retention, with no branch substituting for another and no indefinite retention by default.`

### Decision 14 — Deletion and incident handling

Recommended:

`ACCEPT auditable deletion, quarantine, and incident response rules, with an invalidation scope that is identical for license/rights incidents (Section 6.3) and privacy incidents (Section 7.5) — covering every affected development corpus version, held-out subset, fixture, derivative, provider exposure record, evaluation output and report, plus suspension of any clearance and run results if data was already sent to a provider.`

### Decision 15 — Corpus Preparation admission gate

Recommended:

`ACCEPT Section 20, including the explicit dependency on both (a) acceptance and locking of Evaluation Threshold and Acceptance Plan Rev13 supporting contracts 1–10, and (b) acceptance and version-locking of Section 22 data-governance artifacts 1, 2, 3, 4, 5, 6, 7, 9 and 10 — and the explicit exclusion of contract 11 and artifact 8, which instead gate held-out sealing under Section 15.1 — as the minimum governance evidence required before separate Tier 1 Corpus Preparation Authorization may be considered. Neither (a) nor (b) alone is sufficient; both are required.`

### Decision 16 — Future data-governance artifacts

Recommended:

`ACCEPT the eleven artifacts in Section 22 as required future preparation outputs, each explicitly bound to a specific governance gate per the Section 22 table (artifacts 1–7 and 9–10 before Corpus Preparation Authorization; artifact 8, including immutable subset definitions, Seal Envelope/hash ordering and the append-only allocation/consumption procedure, before held-out sealing; artifact 11 before first provider exposure under either provider track), without authorizing their preparation by this Decision.`

### Decision 17 — Non-authorization boundary

Recommended:

`CONFIRM that acceptance does not authorize: supporting-contract preparation (Rev13 contracts 1–11); data-governance artifact preparation (Section 22, artifacts 1–11); corpus or fixture creation and annotation; Development/Candidate Assessment Authorization; Provider/Model Evaluation Authorization; Synthetic Source Generation Authorization; Evaluation-Time Provider Exposure Clearance; Source-Generation Provider Exposure Clearance; provider contact or exposure under either provider track (Section 16.0); repository persistence; ADR work; Phase-1 Scope Decision or Execution Profile preparation, unless separately authorized; Implementation Package; or implementation.`

### Decision 18 — Next governance step

Recommended:

`After acceptance and separately authorized persistence: (1) prepare the required supporting contracts 1–10, or an Owner-authorized preparation cycle for them; (2) prepare and accept the Phase-1 Scope Decision or Execution Profile before final preparation and acceptance of the pre-corpus data-governance artifacts whose implementation form it profiles; (3) prepare, review, accept and version-lock Section 22 artifacts 1–7 and 9–10 in conformance with the accepted Phase-1 profile; and only then consider Tier 1 Corpus Preparation Authorization. Supporting contracts and the Phase-1 document may proceed in parallel only by separate Owner authorization. This Decision authorizes none of these preparations.`

### Decision 19 — Perception-execution and evaluation artifact scope

Recommended:

`ACCEPT Sections 3.3, 8A and 17.1A as the governance boundary for diagnostic crops, raw provider output, VlmSceneCandidate, StructuredSceneV0 (evaluation copies), PerceptionEvidenceArtifact, the platform adapter log / provider-returned metadata / provider-account audit record / provider-internal log taxonomy (Section 3.3.5), prompt traces and evaluation reports, as required by Candidate A Bounded Scope Decision Rev3, Part M.1. This Decision does not define evaluation metrics, contract structure or acceptance thresholds for these artifacts, which remain governed by Evaluation Threshold and Acceptance Plan Rev13.`

### Decision 20 — Operation-scoped, evaluation-run-scoped, corpus-scoped and governance/audit-scoped artifact identity

Recommended:

`ACCEPT the four-class identity model in Sections 3.3.1–3.3.4, distinguishing single-operation artifacts (operationId plus inputArtifactId-based identity, with conditional sourceAssetId/fixtureId/lineageId/fixtureLineageId per Section 3.3.1, so that fixture-backed and rejected non-image operations remain traceable without fabricated fields), formal-run aggregates (evaluationRunId/configurationLockId-based identity), corpus-level aggregates including Rev13 contract 11 (corpusVersion-based identity), and governance/audit aggregates that span multiple runs, corpus versions, or providers (governanceArtifactId-based identity), and CONFIRM that no artifact may be assigned invented or placeholder identity values.`

### Decision 21 — Held-Out Data Seal / Formal Evaluation Configuration Lock separation

Recommended:

`ACCEPT that the Held-Out Data Seal covers precomputed corpus data, annotations, fixtures, contracts, immutable Held-Out Subset Definition Manifests, component hashes and the external Seal Envelope; that mutable allocation/consumption state remains outside the seal in an append-only ledger; and that provider/model/configuration identity is fixed in a separate Formal Evaluation Configuration Lock atomically bound through that ledger (Sections 14.4, 15.2–15.2A).`

### Decision 22 — Immutable formal lock, atomic subset binding and consumption

Recommended:

`ACCEPT the Section 15.2A model: one immutable configurationLockId and one evaluationRunId per formal run, created in the same governed transaction as an append-only binding event to one available, already-sealed heldOutSubsetId; first provider submission/inference appends the permanent consumption event; a consumed subset is never reused regardless of run status; and binding/consumption never modifies the Held-Out Data Seal.`

### Decision 23 — Evaluation-Time Provider Exposure Clearance / Selected-Provider Privacy/Retention Decision boundary

Recommended (new proposed Owner Decision):

`ACCEPT the distinction in Section 16.2A between the Evaluation-Time Provider Exposure Clearance (per evaluation candidate, bounded to the assessment) and the future Selected-Provider Privacy/Retention Decision (post-selection, runtime), and CONFIRM that acceptance of this Decision does not itself issue a clearance to any provider.`

### Decision 24 — Absolute non-disclosure of held-out ground truth to the evaluated provider

Recommended (new proposed Owner Decision):

`ACCEPT the absolute, non-overridable prohibition in Section 16.4 on disclosing held-out ground truth, expected outcomes, annotations, and scoring records to the evaluated provider/model, with no authorization able to override this rule within the bounded Candidate A evaluation.`

### Decision 25 — Default-deny and quarantine for unclassified artifacts

Recommended:

`ACCEPT that any new, unknown, or unclassified artifact produced from governed data is automatically governed and must be quarantined under its strictest inherited protection classification (Section 17.1B) until formally classified under Section 3.3, rather than being treated as outside this Decision's scope.`

### Decision 26 — Synthetic Source Generation Provider / Perception Evaluation Provider separation

Recommended:

`ACCEPT the two independent provider tracks, each with its own authorization, clearance, exposure record, retention branch and immutable configuration identity: sourceGenerationConfigurationId for synthetic generation; developmentExecutionConfigurationId for development perception assessment; configurationLockId for formal held-out perception evaluation. Cross-track substitution is prohibited and is an incident.`

### Decision 27 — Recommended improvements

Recommended:

`ACCEPT the expanded audit trail (Section 18), expanded incident taxonomy (Section 19), invalidation scope extended to every affected corpus/fixture/artifact version (Section 6.3), the explicit provider-log taxonomy (Section 3.3.5), and the approval-and-expiry governance for eligible-with-restrictions assets (Section 5.1), as additive refinements that do not alter any previously accepted rule.`

### Decision 28 — Development execution identity separate from Formal Evaluation Configuration Lock

Recommended:

`ACCEPT the separation in Sections 3.3.1, 16.1 and 16.6 between the immutable, versioned developmentExecutionConfigurationId snapshot (development-stage stabilization, under Development/Candidate Assessment Authorization — a new snapshot is created on any configuration change, never edited in place) and the immutable configurationLockId (Section 15.2A, formal held-out run only), and CONFIRM that development-stage provider calls never require, and never carry, a Formal Evaluation Configuration Lock, and never consume a held-out subset.`

### Decision 29 — Revision 5 improvements

Recommended:

`ACCEPT that Section 16.0.1 covers prompt-only and reference-image generation requests, not only source-image or edit requests, and ACCEPT the mapping of new governance functions (clearance approval, configuration-lock custody, incident coordination, deletion execution) to existing roles in Section 9.1, as additive refinements that do not alter any previously accepted rule.`

### Decision 30 — Classification cardinality independent of identity class

Recommended:

`ACCEPT that atomic single-scope artifacts use single population/subset values, while any aggregate or multi-scope artifact — run-scoped, corpus-scoped, or governance/audit-scoped — uses populationKinds[] and dataSubsets[] according to actual coverage; and CONFIRM that any held-out coverage requires held-out-sensitive protection.`

### Decision 31 — Track-specific provider-bound configuration identity

Recommended:

`ACCEPT that every provider-bound artifact carries exactly one immutable identity from the applicable track from the point it is bound for submission: sourceGenerationConfigurationId, developmentExecutionConfigurationId, or configurationLockId; no cross-track substitution or fabricated identity is permitted.`

### Decision 32 — Complete two-track provider exposure, retention and minimum controls

Recommended:

`ACCEPT the Source-Generation and Perception Provider Exposure Records, their distinct authorization/clearance/configuration identities, the parallel Layer-2 retention branches, the common minimum provider controls in Section 16.3, and Section 22 artifact 11 as the precondition for first exposure under either track.`

### Decision 33 — Immutable subset definitions and append-only allocation/consumption governance

Recommended:

`ACCEPT immutable Held-Out Subset Definition Manifests inside the Held-Out Data Seal; an external Seal Envelope with non-circular seal identity/hash ordering; and a separate append-only Allocation and Consumption Ledger with atomic binding, consume-on-first-inference, permanent non-reuse, and narrowly governed release of bound-but-never-submitted subsets.`

### Decision 34 — Revision 6 improvements carried forward

Recommended:

`ACCEPT the corrected new-lock wording and the expanded audit/incident coverage from Revision 6, as further integrated and hardened by Revision 8.`

### Decision 35 — Revision 7 clarifications carried forward

Recommended:

`ACCEPT the unweakened Phase-1 integrity boundary, the text-only synthetic-generation no-fabricated-source rule as corrected to use sourceGenerationConfigurationId, wrong-track use as an incident, and the non-normative Phase-1 note (Section 22A) as purely descriptive, with sequencing stated solely in Decision 18.`

### Decision 36 — Revision 8 corrections and improvements

Recommended:

`ACCEPT the eight Revision 8 corrections and two improvements: dedicated source-generation configuration identity; immutable subset definitions separated from the append-only allocation/consumption ledger; atomic subset binding; accurate three-layer retention model with two provider branches; Phase-1 sequencing before profiled artifacts; minimum provider controls for both tracks; consume-on-first-inference consistency; classification cardinality independent of identity class; non-circular seal hashing; and expanded ledger/configuration incidents.`

### Decision 37 — Revision 9 governance-integrity corrections

Recommended:

`ACCEPT that Section 0F cites the verbatim Grok independent consolidated review (dated 2026-07-16) by name and date, rather than an unattributed "two reviews converged" claim; and ACCEPT that Section 22A is purely descriptive and non-normative, with the Phase-1 sequencing rule stated solely in Decision 18, so that no duplicate normative statement of that sequence can diverge from it.`

---

## 25. Recommended governance outcome

Recommended outcome for Revision 9:

```text
STATUS:
Accepted by Project Owner — 2026-07-16.

GOVERNANCE EFFECT:
Candidate A Test Data Handling Decision Revision 9 is authoritative.

STILL NOT AUTHORIZED:
- corpus or fixture creation;
- annotation;
- acquisition or purchase of images;
- staged photography;
- synthetic source generation or synthetic-source provider contact;
- provider/model contact, evaluation, or exposure of any kind, under either provider track;
- Development/Candidate Assessment Authorization;
- Provider/Model Evaluation Authorization;
- Synthetic Source Generation Authorization;
- issuance of any Evaluation-Time Provider Exposure Clearance or Source-Generation Provider Exposure Clearance;
- preparation of supporting contracts (Rev13 contracts 1–11);
- preparation of the eleven data-governance artifacts (Section 22);
- repository persistence;
- ADR creation;
- Phase-1 Scope Decision or Execution Profile preparation, unless separately authorized;
- Implementation Package;
- implementation.
```

---

## 26. Internal completeness check

| Required area | Covered |
|---|---|
| Permitted image sources | Yes |
| Licensing requirements | Yes |
| Real-user-photo prohibition | Yes |
| Personal-data prohibition | Yes |
| Storage | Yes |
| Access control | Yes |
| Development/held-out separation | Yes |
| Versioning | Yes |
| Immutability | Yes |
| Sealing | Yes |
| Audit trail | Yes |
| Provenance and lineage | Yes |
| External provider rules | Yes |
| Held-out leakage prohibition | Yes |
| Retention | Yes |
| Deletion | Yes |
| Incident response | Yes |
| Corpus-preparation admission criteria | Yes |
| Perception-execution and evaluation artifact scope (Bounded Scope Rev3 Part M.1) | Yes (new in Rev2 — Sections 3.3, 8A, 17.1A) |
| Rev13 supporting-contract dependency in admission gate | Yes (new in Rev2, corrected in Rev3 — Section 20) |
| Contract 11 timing distinct from contracts 1–10 | Yes (new in Rev3 — Sections 15.1, 20) |
| Four-class artifact identity: operation / evaluation-run / corpus / governance-audit scoped | Yes (three-class in Rev4 — Sections 3.3.1–3.3.3; fourth class added in Rev5 Finding 10 — Section 3.3.4) |
| Held-Out Data Seal / Formal Evaluation Configuration Lock separation | Yes (new in Rev3 — Sections 15.2, 15.2A; lock model hardened in Rev4; wording contradiction and subset-consumption gap fixed in Rev5 Findings 1–2) |
| No stale revision-number references in Decisions/outcome | Yes (corrected in Rev3, Rev4, and Rev5 — Decision 1, Section 25) |
| Immutable, one-per-run evaluation lock with one-to-one subset consumption | Yes (new in Rev4 — Section 15.2A, Decision 22; corrected in Rev5 Findings 1–2; integrated with sealed Allocation Manifest in Rev6 Correction 7) |
| Development-stage execution identity separate from formal lock, itself internally consistent | Yes (new in Rev5 Finding 3 — Sections 3.3.1, 16.1, 16.6, Decision 28; "mutable" self-contradiction corrected in Rev6 Correction 1) |
| Synthetic source generation sequenced after Corpus Preparation Authorization | Yes (corrected in Rev5 Finding 4 — Section 16.0.1, Decision 26) |
| Decision 11 scoped to Perception Evaluation Provider only | Yes (corrected in Rev5 Finding 5 — Section 24) |
| Eligible / eligible-with-restrictions admission rule internally consistent | Yes (corrected in Rev5 Finding 6, a Revision-1-origin defect — Section 5, Decision 4) |
| Pre-sealed vs runtime-generated held-out derivative retention | Yes (corrected in Rev5 Finding 7 — Sections 3.3.1, 15.2, 17.1A) |
| Protection classification independent of handling status | Yes (corrected in Rev5 Finding 8, a Rev4-origin defect — Section 17.1B, Decision 13) |
| Data subset independent of population kind (fixture) | Yes (corrected in Rev5 Finding 9, a Rev4-origin defect — Section 17.1B, Decision 13) |
| Governance/audit-scoped artifact class for cross-run/cross-corpus provider records | Yes (new in Rev5 Finding 10 — Section 3.3.4, Decision 20) |
| Privacy-incident invalidation scope matches license-incident scope | Yes (corrected in Rev5 Finding 11, a Revision-1-origin defect — Section 7.5, Decision 14) |
| Status-dependent corpus manifest-hash requirements | Yes (corrected in Rev5 Finding 12, a Revision-1-origin defect — Section 14.1, Decision 10) |
| Minimum provider rule applies to all governed-data exposure, not only held-out | Yes (corrected in Rev5 Finding 13, a Revision-1-origin defect — Section 16.3, Decision 12) |
| Accurate governance history in changelog (no false "clean single review" framing) | Yes (corrected in Rev5 Finding 14 — Section 0B) |
| Data-governance artifacts bound to explicit gates | Yes (new in Rev4 — Section 22 table, Decisions 15–16) |
| Six-dimension classification (type/population kind/subset/protection/retention/handling status) | Yes (four-dimension in Rev4 — Section 17.1B, Decision 13; expanded to six in Rev5 Findings 8–9) |
| Three-layer retention governance with parallel Source-Generation and Evaluation-Time provider branches | Yes (corrected in Rev8 Finding 4 — Section 17.2, Decision 13) |
| Default-deny/quarantine for unclassified artifacts | Yes (new in Rev4 — Section 3.3.6, Decision 25) |
| Synthetic Source Generation Provider / Perception Evaluation Provider separation | Yes (new in Rev4 — Section 16.0, Decision 26; sequencing corrected in Rev5) |
| Evaluation-Time Provider Exposure Clearance / Selected-Provider Privacy/Retention Decision boundary (new Owner Decision) | Yes (new in Rev4 — Section 16.2A, Decision 23) |
| Absolute non-disclosure of held-out ground truth to evaluated provider (new Owner Decision) | Yes (new in Rev4 — Section 16.4, Decision 24) |
| Provider-log taxonomy | Yes (new in Rev4 — Section 3.3.4; renumbered to 3.3.5 in Rev5 after the governance/audit-scoped class was inserted at 3.3.4) |
| Eligible-with-restrictions approval and expiry | Yes (new in Rev4 — Section 5.1) |
| Invalidation scope across every affected corpus/fixture/artifact version, consistent for license and privacy incidents | Yes (new in Rev4 — Section 6.3; extended to Section 7.5 in Rev5 Finding 11) |
| Prompt-only / reference-image generation requests covered by synthetic-source authorization | Yes (new in Rev5, Improvement 1 — Section 16.0.1) |
| New governance functions mapped to existing roles | Yes (new in Rev5, Improvement 2 — Section 9.1) |
| Decision 18 states full pre-Corpus-Preparation package sequence | Yes (new in Rev5, Improvement 3 — Decision 18) |
| Full document re-read for latent defects beyond the reviewed findings | Yes (Rev5 and Rev6 preparation method — Sections 0C, 0D) |
| Immutable, versioned development configuration snapshot (no mutable/immutable contradiction) | Yes (new in Rev6 Correction 1 — Section 16.6, Decision 28) |
| Aggregate set-valued classification based on actual multi-scope cardinality, independent of identity class | Yes (corrected in Rev8 Finding 8 — Sections 3.3.7, 17.1B, Decision 30) |
| Generalized operation-input identity for fixtures and rejected/non-image operations | Yes (new in Rev6 Correction 3 — Section 3.3.1, Decision 20) |
| Configuration identity required from submission, not only on execution result | Yes (new in Rev6 Correction 4 — Section 3.3.1, Decision 31) |
| Complete Synthetic Source Generation Provider exposure logging and retention, parallel to Perception Evaluation Provider | Yes (new in Rev6 Correction 5 — Sections 16.0.2, 17.2, 22, Decision 32) |
| Genuinely symmetrical license/privacy invalidation scope (not merely claimed symmetrical) | Yes (corrected in Rev6 Correction 6 — Sections 6.3, 7.5, Decision 14) |
| Immutable Held-Out Subset Definition Manifests separated from append-only Allocation/Consumption Ledger | Yes (corrected in Rev8 Findings 2–3 — Sections 14.4, 15.2A, Decision 33) |
| Decision 15 names both Rev13 contracts 1–10 and Section 22 pre-corpus artifacts as required | Yes (corrected in Rev6 Correction 8 — Decision 15) |
| Provider-training prohibition covers all governed data, not only held-out | Yes (corrected in Rev6 Correction 8 — Section 21) |
| Non-authorization boundary names all authorizations/clearances introduced through Rev6 | Yes (corrected in Rev6 Correction 8 — Decision 17, Section 25, metadata) |
| Accurate "did not pass cleanly" governance history through Rev5 | Yes (Rev6 changelog — Section 0D) |
| "Changing a lock" wording replaced with accurate "creating a new lock" wording | Yes (new in Rev6, Improvement 1 — Section 15.2A) |
| Audit/incident coverage for development-configuration, subset-allocation, and dual-track provider identities | Yes (new in Rev6, Improvement 2 — Sections 18, 19) |
| Held-Out Subset integrity rules unweakened; Phase-1 note limited to implementation mechanism | Yes (new in Rev7, Change 1 — Section 14.4) |
| Text-only synthetic generation identity example without fabricated sourceAssetId | Yes (new in Rev7, Change 2 — Section 3.3.1) |
| Wrong provider-governance track use classified as an incident | Yes (new in Rev7, Change 3 — Sections 16.0, 18, 19, 21) |
| Non-normative Phase-1 note grants no authorization and cannot weaken this Decision | Yes (new in Rev7, Change 4 — Section 22A) |
| No Phase-1 exception introduced into held-out subset integrity | Verified — Section 14.4.5 permits implementation simplification only; integrity rules remain absolute |
| Dedicated immutable sourceGenerationConfigurationId for synthetic-provider invocations | Yes (Rev8 Finding 1 — Sections 3.3.1, 16.0.1–16.0.2) |
| Atomic subset binding and consume-on-first-inference ledger | Yes (Rev8 Findings 2–3 — Sections 14.4, 15.2A) |
| Seal identity/hash ordering avoids circular dependency | Yes (Rev8 Improvement 1 — Sections 14.4.4, 15.2) |
| Phase-1 Profile sequenced before final acceptance of profiled data-governance artifacts | Yes (Rev8 Finding 5 — Decision 18; Section 22A corrected in Rev9 to be purely descriptive, with sequencing stated solely in Decision 18) |
| Minimum provider controls explicitly cover both tracks | Yes (Rev8 Finding 6 — Section 16.3) |
| Section 21 matches permanent non-reuse from first inference | Yes (Rev8 Finding 7) |
| Expanded incidents for manifest/ledger/configuration failures | Yes (Rev8 Improvement 2 — Sections 18–19) |
| Governance-history claim in changelog cited to a verbatim, attributable source | Yes (corrected in Rev9 Finding 1 — Section 0F) |
| Section 22A purely descriptive; sequencing stated once, only in Decision 18 | Yes (corrected in Rev9 Finding 2 — Sections 20, 22A, Decision 35) |
| Explicit non-authorizations | Yes |
| Owner Decisions | Yes |
