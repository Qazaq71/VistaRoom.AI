# Context Manifest — VistaRoom Development Orchestrator (Architecture Workflow Package)

## Status

Informational record. Not an ADR, not a PCS/ACS, not an Engineering Decision. Produced by Claude Cowork as a required artifact of the Architecture Workflow (see the main architecture document, §25 Prompt and Task Model, and §19 Artifact Model). Revision 2 (2026-08-01) — updated per Engineering Review finding **ORCH-REV-008** (source provenance was, for at least one source, characterized in a way that overstated how deeply it was actually read) and **ORCH-REV-004** (document-level source hashes required for the Baseline Reconciliation Gate). See `Revision-Report.md` / `Finding-Disposition-Report.md`.

**Revision 3 (2026-08-01) — baseline correction (`OWNER-CORRECTION-PC-2.4`), unrelated to ORCH-REV-001–008.** Per direct Project Owner instruction, **Project Context v2.4** is now recorded as **final, approved, canonical, authoritative** (`trust_level: highest`), and **Project Context v2.3** as **superseded / historical** (`binding: false`) — see the new §Project Context Authority below. `docs/project/Project Context v2.4.md` was read **in full** for this revision (1276 lines / 82431 bytes), correcting its `source_use_mode` from `DIRECT_HEADER_ONLY` to `DIRECT_FULL`. See `Source-Gap-Report.md` §G2 Resolution History and `Revision-Report-Revision-2-to-3.md`.

## Purpose

This manifest records, for every source document Claude Cowork actually drew on while authoring the *VistaRoom Development Orchestrator* architecture package, its path, status, version, trust level, freshness, and the reason it was included. It exists so that a later reader (owner, Claude Code, Claude Project, ChatGPT, or a future orchestrator run) can verify what informed this package without re-reading the whole corpus, and so any conflict or staleness in the underlying sources is visible rather than silently absorbed into the new document.

This manifest was produced from the **safe working copy only** (`C:\Users\user\Documents\Cowork\VistaRoom-AI-Safe-2026-08-01`). See `Source-Gap-Report.md` for the governing limitation: **the safe copy contains no `.git` directory** (`git status` returns `fatal: not a git repository`), so branch, base commit hash, and freshness relative to the main VistaRoom AI repository could not be established by Claude Cowork for this manifest or for any source listed below. Every "commit hash" and "committed or uncommitted" field is therefore `N/A — no VCS in safe copy` rather than a guessed value.

## Field Definitions

- **document / path** — identity and location inside the safe copy.
- **status** — status as declared inside the document itself (approved / active / accepted / draft / deprecated / superseded / unknown), not inferred.
- **version / revision** — as declared in the document, if any.
- **commit hash** — always `N/A — no .git in safe copy` (see Source Gap Report, Gap G1).
- **sections used** — which parts actually informed the new document (token-economy discipline; full-file ingestion was avoided where a subset sufficed).
- **reason for inclusion** — why this source was needed.
- **trust level** — `high` (formally accepted/active governance source), `medium` (informational/historical but not contradicted), `low` (draft, superseded, or self-described as unauthorized).
- **committed or uncommitted** — always `cannot determine — no .git in safe copy`.
- **freshness** — Cowork's assessment given internal dates only (no git timestamps available).
- **conflicts** — cross-reference to Source Gap Report items where relevant.
- **excluded content reason** — for sources that were only partially used.
- **source_use_mode** *(new, Revision 2, ORCH-REV-008)* — one of: `DIRECT_FULL` (the document itself was opened and read in full), `DIRECT_PARTIAL` (the document itself was opened and specific sections were read directly), `DIRECT_HEADER_ONLY` (the document itself was opened, only its header/status block was read), `DIRECT_INDEX_ENTRY` (the document's own registry/index row was read, not the document's body), `INDIRECT_SUMMARY` (the document was **not** opened at all — its content was learned only via another document's summary/narrative of it), `METADATA_ONLY` (only the document's existence, path, and declared status were established, no content of any kind). A source may carry a combination (e.g., ADR-000 below is `INDIRECT_SUMMARY + METADATA_ONLY`).
- **document_sha256** *(new, Revision 2, ORCH-REV-004)* — SHA-256 of the source document's content, for Baseline Reconciliation Gate comparison (main document §31B). **Honesty rule:** no SHA-256 was actually computed for any source in this authoring session (no hashing tool was used) — every entry below is the literal string `UNAVAILABLE — not computed by Claude Cowork in this session; to be populated by Claude Code from the primary repository before promotion`, never a fabricated hex value.

---

## Source Use Mode Summary (Revision 2, new, ORCH-REV-008)

This table is the authoritative, per-source honesty record required by ORCH-REV-008. It supersedes any looser phrase used elsewhere in this package or in `External-Review-Context-Package.md` (e.g. Revision 1's "read in depth") — where this table and prose elsewhere disagree, this table governs. The Tier 1/2/3 tables below retain their original "reason for inclusion" framing but should be read together with this table for an honest access-depth picture.

| Document | source_use_mode | Direct source | Intermediary source (if indirect) | Sections actually read | Sections relied upon | Verified directly? | Confidence |
|---|---|---|---|---|---|---|---|
| `docs/ARCHITECTURE.md` | `DIRECT_FULL` | itself | — | Full document | Phases 1–7.1.3d, ADR reference chain, Principle history narrative | Yes | High |
| `docs/adr/ADR_INDEX.md` | `DIRECT_PARTIAL` | itself | — | Registry table, Areas table, Maturity summary | Which ADRs exist and their declared status | Yes | High |
| `docs/adr/ADR_MAP.md` | `DIRECT_PARTIAL` | itself | — | Architecture Map chain, Future placeholders section | Which architecture areas lack an ADR | Yes | High |
| **`docs/adr/ADR-000-Architecture-Principles.md`** | **`INDIRECT_SUMMARY` + `METADATA_ONLY`** *(corrected in Revision 2 — was implicitly overstated in Revision 1)* | **not opened directly** | `docs/ARCHITECTURE.md`'s DS-7.x narrative summary of ADR-000's Principles; `docs/adr/ADR_INDEX.md`'s registry row for ADR-000 (status/version metadata) | None of ADR-000's own 1112 lines were read by Claude Cowork | Principle list (1–22) *as summarized by* `ARCHITECTURE.md`; Status/Version fields *as tabulated by* `ADR_INDEX.md` | **No** — the Principle text was never compared against ADR-000's own body text | **Medium** — downgraded from Revision 1's implicit "high/full" framing; if `ARCHITECTURE.md`'s summary of any Principle is itself imprecise or stale relative to ADR-000's actual current text, this package inherits that imprecision without having had a way to detect it |
| `docs/templates/*` (README + 5 templates) | `DIRECT_FULL` | itself | — | Full documents | Metadata/header/status-field conventions | Yes | High |
| `docs/governance/Architecture-Engineering-Responsibility-Model.md` | `DIRECT_FULL` | itself | — | Full document | ADR vs. engineering-artifact boundary | Yes | High |
| `docs/governance/ADR-Authoring-Convention.md` | `DIRECT_FULL` | itself | — | Full document | ADR lifecycle, naming convention | Yes | High |
| `docs/governance/ADR-Numbering-Policy.md` | `DIRECT_FULL` | itself | — | Full document | Numbering non-reservation rule | Yes | High |
| `docs/architecture/audits/Architecture-Freeze-Resolution.md` | `DIRECT_FULL` | itself | — | Full document | R1–R9 review/decision discipline | Yes | High |
| `docs/architecture/milestones/Architecture-Freeze-Completed.md` | `DIRECT_FULL` | itself | — | Full document | Freeze scope (ADR-000…006, PCS/ACS 001–010) | Yes | High |
| `package.json` / `tsconfig.json` / `next.config.js` / `README.md` (root) | `DIRECT_FULL` | itself | — | Full files | Technology stack facts | Yes | High |
| `.env.example` | `DIRECT_PARTIAL` | itself | — | Variable names and comments only | Secret category names, never values | Yes | High |
| `docs/project/Project Context v2.3.md` | `DIRECT_FULL` *(upgraded in Revision 3 from Revision 1/2's `DIRECT_PARTIAL` — read in full for the Revision 3 v2.3-vs-v2.4 comparison)* | itself | — | Full document (600 lines) | Historical baseline content, used only to identify material differences from v2.4 (§Project Context Authority below); **no longer used as a source of current binding requirements** | Yes | High for status and content; **superseded/historical as of Revision 3** |
| `docs/project/Project Context v2.4.md` | `DIRECT_FULL` *(upgraded in Revision 3 from Revision 1/2's `DIRECT_HEADER_ONLY` — read in full: header, body §1–26, Project Context Version Governance, Required Project Owner Decisions, Drafting Report, Final Status)* | itself | — | Full document (1276 lines) | **Authoritative current project-state baseline, per direct Project Owner instruction (`OWNER-CORRECTION-PC-2.4`)** — Gate 1/2 closure, Post-Gate 2 Candidate A selection and governance cycle, Module Completion and Sequencing Policy, Residential-34, Operation/RoomCase/ImageAsset architecture, Controlled Learning/Bilingual/exclusion boundaries | Yes | **High** for status and content |
| `docs/roadmap/Living-Strategic-Roadmap-v1.4.md` | `DIRECT_PARTIAL` | itself | — | Header, Mission, Strategic Ambition, Document Ecosystem sections | Accepted status, strategic framing | Yes | High |
| ADR-001…ADR-015 (individual files) | `METADATA_ONLY` | `docs/adr/ADR_INDEX.md`, `docs/adr/ADR_MAP.md` | — | Not opened individually | Status/area/dependency fields from the registry only | No | Medium — registry internally believed consistent, not independently spot-checked |
| PCS-001…010 / ACS-001…010 | `METADATA_ONLY` | `docs/architecture/milestones/Architecture-Freeze-Completed.md` (reference list) | — | Not opened | Existence and Freeze status only | No | Low-Medium — sufficient only for the narrow claim made (they exist and are frozen), not for any content claim |

**Document-level source hashes:** every source above has `document_sha256: UNAVAILABLE — not computed by Claude Cowork in this session; to be populated by Claude Code from the primary repository before promotion` (Revision 2, ORCH-REV-004; main document §31B) — **with two exceptions, new in Revision 3**: `Project Context v2.3.md` and `Project Context v2.4.md` were actually hashed by Claude Cowork this session (binary-safe `sha256sum` / `hashlib.sha256`, cross-checked with two independent tools, both agree):

```text
Project Context v2.3.md — 600 lines, 26800 bytes,
    SHA-256 9baf53578a95ed25a9baa370d627129e29630cbc0c26cc7b3421f316bd52cf68
Project Context v2.4.md — 1276 lines, 82431 bytes,
    SHA-256 f38b1c9c55c5540df8e8cac5a17b53eda510125bf7b9f7ce10ac77d41a52d492
```

These are genuine, computed values, not fabricated placeholders — see §Project Context Authority below for how they are used. Every other source in this table still has `document_sha256: UNAVAILABLE`; this is a genuine, real, and continuing gap for those sources, not a placeholder to be quietly forgotten — it still feeds directly into the Baseline Reconciliation Gate (§31C), which will very likely return `UNKNOWN` for this package's current change set as a direct consequence (this is unaffected by the two hashes above — the Gate needs the *primary repository's* current hashes to compare against, and this workspace still has no Git access to obtain them, per G1).

---

## Project Context Authority (Revision 3, new — `OWNER-CORRECTION-PC-2.4`)

Per direct Project Owner instruction (2026-08-01), superseding the Revision 1/2 interpretation recorded in Tier 2 below:

```yaml
document: "Project Context v2.4"
path: "docs/project/Project Context v2.4.md"
status: "Approved / Final / Canonical"
authority_basis: "Confirmed directly by Project Owner"
trust_level: "highest"
binding: true
supersedes:
  - "docs/project/Project Context v2.3.md"
```

```yaml
document: "Project Context v2.3"
path: "docs/project/Project Context v2.3.md"
status: "Superseded / Historical"
binding: false
use_allowed_for:
  - "historical comparison"
  - "change history"
use_forbidden_for:
  - "current binding requirements"
  - "current project state"
  - "current architecture baseline"
```

**Note on v2.4's own internal self-description.** `Project Context v2.4.md`'s own header and "Final Status" section still self-describe as an "IN-PLACE CORRECTED DRAFT ... AWAITING ... PROJECT OWNER ACCEPTANCE" as of the document's own last in-place edit. The `status: "Approved / Final / Canonical"` above reflects the **direct Project Owner instruction to Claude Cowork** (`OWNER-CORRECTION-PC-2.4`), which is later and, for this package's purposes, controlling — it is not a claim that v2.4's own internal text has been rewritten to match (this package does not edit `docs/project/*`). See `Source-Gap-Report.md` §G2 Resolution History for the full honesty record of this distinction.

---

## Tier 1 — Primary Sources (read in full or near-full depth, per the Source Use Mode Summary table above — note ADR-000 has been relocated out of this tier in Revision 2, see below)

| Document | Path | Status (declared) | Version/Revision | Commit hash | Sections used | Reason for inclusion | Trust level | Committed/uncommitted | Freshness | Conflicts | Excluded content |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Architecture Roadmap (`ARCHITECTURE.md`) | `docs/ARCHITECTURE.md` | Living document, no single status field (phase log) | Phases 1–10, through DS-7.1.3d | N/A — no .git | Full document (Phases 1–7.1.3d, Architecture Decisions index, ADR reference chain) | Primary source of AI Core structure, module boundaries, ADR Principle history (Principles 1–22), evolution methodology | high | cannot determine | Internal dates through DS-7.1.3d; no later phase entries found in safe copy | None found internally | None — read in full |
| README.md (project root) | `README.md` | N/A (product readme) | N/A | N/A — no .git | Full document | Confirms tech stack claims (Next.js, Fal.ai, Vercel Blob, rate limiting), security model of the *product* (API key never leaves server) — used as ground truth for §17 Technology Decisions and §37 Security Architecture framing | high | cannot determine | Undated; consistent with package.json | None | None |
| ADR_INDEX.md | `docs/adr/ADR_INDEX.md` | Governance registry (per-ADR status inside) | N/A (index) | N/A — no .git | ADR Registry table, Architecture Areas table, Architecture Coverage/Maturity summary (via `ARCHITECTURE.md` DS-7.1.3c/d narrative) | Single source of truth for which ADRs exist/status (ADR-000…ADR-015), used to scope ADR Proposal List numbering discipline | high | cannot determine | Reflects state through ADR-015 (2026-07-22 per ARCHITECTURE.md); may not reflect main branch HEAD (see Gap G1) | Numbering must be re-verified against live main-branch `ADR_INDEX.md` before real ADR creation (ADR-Numbering-Policy §5) | Full per-ADR "History"/"Related ADRs" prose not read line-by-line; registry tables were sufficient |
| ADR_MAP.md | `docs/adr/ADR_MAP.md` | Visual map, no metadata of its own by design | N/A | N/A — no .git | Architecture Map chain, Future placeholders section | Confirms which architecture areas have no ADR yet (Knowledge, Production, Developer, Benchmark) — informs §44 Developer Studio Integration Path | high | cannot determine | Consistent with ADR_INDEX | None | Full ADR Dependency Tree prose skimmed, not transcribed |
| README.md (root of `docs/templates/`) + all 5 templates | `docs/templates/{README,ADR_TEMPLATE,PCS_TEMPLATE,ACS_TEMPLATE,DECISION_RECORD_TEMPLATE,KNOWLEDGE_PACK_TEMPLATE}.md` | Canonical (per README) | N/A | N/A — no .git | Full documents | Determines the metadata/header/status-field conventions used for every new file in this package | high | cannot determine | No dates; treated as stable convention | None | None — read in full |
| Architecture-Engineering-Responsibility-Model.md | `docs/governance/Architecture-Engineering-Responsibility-Model.md` | Accepted (Project Owner, 2026-07-09) | N/A | N/A — no .git | Full document | Defines ADR vs. engineering-artifact boundary; directly informs the ADR Proposal List's discipline (architecture only, no implementation mechanism) and MVP Handoff separation | high | cannot determine | 2026-07-09; no newer version found | None | None |
| ADR-Authoring-Convention.md | `docs/governance/ADR-Authoring-Convention.md` | Governance convention (no explicit Accepted block, referenced as binding by ADR-Numbering-Policy) | N/A | N/A — no .git | Full document | Status-block format, ADR lifecycle, naming convention — used for ADR Proposal List formatting | high | cannot determine | No date field; internally consistent with ADR-007 precedent | None | None |
| ADR-Numbering-Policy.md | `docs/governance/ADR-Numbering-Policy.md` | Accepted (Project Owner, 2026-07-08, Revision 2) | Rev 2 | N/A — no .git | Full document | Governs how ADR numbers are (not) reserved; directly shapes the disclaimer language in ADR Proposal List | high | cannot determine | 2026-07-08 | None | None |
| Architecture-Freeze-Resolution.md | `docs/architecture/audits/Architecture-Freeze-Resolution.md` | Утверждено (Architecture Review завершён) | N/A | N/A — no .git | Full document | Establishes the project's actual review/decision discipline (R1–R9), used as a structural precedent for this package's own review/consolidation model (§26 Review and Revision Model) | high | cannot determine | Undated header; referenced as preceding Architecture-Freeze-Completed (2026-07-05) | None | None |
| Architecture-Freeze-Completed.md | `docs/architecture/milestones/Architecture-Freeze-Completed.md` | Completed | N/A | N/A — no .git | Full document | Confirms VistaRoom AI's own architecture is frozen (ADR-000…006, PCS/ACS 001–010) and that further architecture change goes through Decision Governance/ADR — sets the bar the Orchestrator's own Architecture Workflow must meet | high | cannot determine | 2026-07-05 | None | None |
| package.json / tsconfig.json / next.config.js | project root | N/A (config) | name: spaceai, version 1.0.0 | N/A — no .git | Full files | Ground truth for §17 Technology Decisions (Next.js 14.2.5, React 18, TypeScript 5 strict, Vitest, Tailwind, Fal.ai, Vercel Blob, Upstash Redis) | high | cannot determine | No date; internally consistent | None | None |
| .env.example (categories only) | project root | N/A | N/A | N/A — no .git | Variable *names* and comments only | Confirms secret categories (FAL_API_KEY, BLOB_READ_WRITE_TOKEN, UPSTASH_REDIS_REST_URL/TOKEN, DAILY_LIMIT*) for §32 Secret Exclusion and Scanning — **no values were read as values, and none are reproduced beyond category names** | high | cannot determine | No date | None | Actual values never present in safe copy by design; not applicable |

## Tier 1B — Indirect Sources (Revision 2, new, ORCH-REV-008) — never opened directly; known only via another document's summary or a registry

**Why this tier exists.** Revision 1 placed ADR-000 in Tier 1 ("read in full or near-full depth") despite its own "excluded content" cell already admitting it was not read line-by-line. That placement, combined with `External-Review-Context-Package.md`'s Revision-1 phrase "read in depth," overstated how this source was actually used. Tier 1B exists to hold sources like this honestly, separated from sources that actually were opened directly.

| Document | Path | `source_use_mode` | Direct/intermediary source | What was actually established | What was NOT established | Trust level | Confidence |
|---|---|---|---|---|---|---|---|
| ADR-000 — Architecture Principles | `docs/adr/ADR-000-Architecture-Principles.md` | `INDIRECT_SUMMARY` + `METADATA_ONLY` | `docs/ARCHITECTURE.md`'s DS-7.x narrative (summary of Principles 1–22); `docs/adr/ADR_INDEX.md`'s registry row (status: Active per index, version 7.1, area ownership) | That VistaRoom AI has 22 named architectural Principles, their one-line descriptions as paraphrased by `ARCHITECTURE.md`, and ADR-000's registry-level status/version | ADR-000's own exact wording for any Principle; any nuance, caveat, or scope-limitation stated only in ADR-000's own body (1112 lines, not opened); whether `ARCHITECTURE.md`'s summary is itself fully faithful to ADR-000's current text | high (as a governance source in the abstract) | **Medium** for this package's characterization of ADR-000's content specifically — the source itself may be high-trust, but this package's *knowledge* of it is indirect |

This is the same underlying research this package always did — nothing about *what was read* has changed in Revision 2. What changed is that the record now says so accurately, and no sentence in this package (main document, this manifest, or `External-Review-Context-Package.md`) claims ADR-000 was "read in depth," "read in full," or implicitly treats it as a Tier 1 direct-read source any longer.

## Tier 2 — Governance / Status Sources (headers, tables, and targeted sections read; not read cover-to-cover)

| Document | Path | Status (declared) | Version | Trust level | Reason for inclusion | Freshness / conflicts |
|---|---|---|---|---|---|---|
| Project Context.md (v2.1) | `docs/project/Project Context.md` | Active (Current Baseline) *as declared in its own header — superseded in practice, see below* | 2.1 | low (superseded) | Header read to establish version chain | 2026-07-06; superseded by v2.2 per v2.3's own "Supersedes" field |
| Project Context v2.2.md | `docs/project/Project Context v2.2.md` | Active (Current Baseline) *as declared — superseded in practice* | 2.2 | low (superseded) | Header read to establish version chain | 2026-07-09; superseded by v2.3 |
| Project Context v2.3.md *(historical as of Revision 3)* | `docs/project/Project Context v2.3.md` | **Accepted** by Project Owner, 2026-07-14 — **now Superseded/Historical** per `OWNER-CORRECTION-PC-2.4` (Revision 3) | 2.3 | **low — historical/superseded; no longer treated as authoritative** (was high for Revision 1/2) | Full document read in Revision 3 (600 lines) for the v2.3-vs-v2.4 material-difference comparison; declares itself the "authoritative project-state baseline in the governance sense" **as of its own 2026-07-14 acceptance, since superseded**; supersedes v2.2, cites Repository Baseline Reference `4d6f33d462ab528f6cc4195d0cceb3845dc05414` | **RESOLVED** — see Source Gap Report G2 Resolution History. v2.4 is now confirmed authoritative by direct Project Owner instruction; v2.3 is retained only for historical comparison/change history, never for current binding requirements |
| **Project Context v2.4.md** | `docs/project/Project Context v2.4.md` | Internally self-described as "IN-PLACE CORRECTED DRAFT... AWAITING... PROJECT OWNER ACCEPTANCE" — **but confirmed Approved / Final / Canonical by direct, separate Project Owner instruction to Claude Cowork (`OWNER-CORRECTION-PC-2.4`, Revision 3)** | 2.4 | **highest — the sole authoritative Project Context baseline for this package, per direct Owner instruction** | Full document read in Revision 3 (1276 lines): header, Change Summary, Project Context Version Governance, §1–26 body, Required Project Owner Decisions, Drafting Report, Final Status | **RESOLVED** — see Source Gap Report G2 Resolution History. The internal draft self-description and the direct Owner confirmation to this package are both true and are not in conflict for this package's purposes: the direct instruction controls this package's baseline determination, per the governing baseline-correction instructions' explicit priority rule |
| Living-Strategic-Roadmap-v1.3.md | `docs/roadmap/Living-Strategic-Roadmap-v1.3.md` | Superseded (per v1.4's own header) | 1.3 | low (superseded) | Header + Mission section read for continuity | Superseded 2026-07-13 |
| **Living-Strategic-Roadmap-v1.4.md** | `docs/roadmap/Living-Strategic-Roadmap-v1.4.md` | **Accepted** by Project Owner, 2026-07-13 | 1.4 | **high — treated as authoritative Roadmap** | Header, Mission, Strategic Ambition, Document Ecosystem sections read | Unambiguous — no conflicting acceptance claim exists for a later version; treated as current without qualification |
| ADR-001 … ADR-015 (individual files) | `docs/adr/ADR-00{1..9}*.md`, `ADR-01{0..5}*.md` | Mixed (Active/Proposed/Accepted per ADR_INDEX registry) | per registry | medium | Not read individually; status/area/dependency data taken from ADR_INDEX and ADR_MAP registry tables only | Registry believed internally consistent (DS-7.1.3d "Final Consistency Review" claims this); individual files not independently verified |
| ADR-Backlog-Consolidated.md | `docs/adr/ADR-Backlog-Consolidated.md` | Working backlog, explicitly non-binding numbering | N/A | medium | Header + Part 1 table skimmed to confirm numbering-collision precedent (own document explicitly warns its numbers are proposals, not facts) | Consistent with ADR-Numbering-Policy |
| AI_CORE_CHECKLIST.md | `docs/AI_CORE_CHECKLIST.md` | Checklist, no status field | N/A | medium | Not read; existence and purpose (pre-stage verification checklist) noted from ARCHITECTURE.md references only | Excluded — product-code-level checklist, not orchestrator-relevant; see Source Gap Report exclusions |
| Developer Studio README + 7 sub-READMEs | `docs/developer-studio/**/README.md` | Stub/placeholder (all "что здесь хранится" style, no content yet) | N/A | medium | Full (all are ~15 lines) | Confirms Developer Studio (architecture-explorer, benchmark, dashboards, decision-dashboard, experiments, knowledge-explorer, prompt-lab) is currently **documentation scaffolding only, no implemented tool** — directly informs §44 Developer Studio Integration Path (nothing to integrate with yet beyond a folder convention) |
| Governance README + decision-playbook/records/reviews/scorecards READMEs | `docs/governance/{README,decision-playbook/README,records/README,reviews/README,scorecards/README}.md` | Structural stubs | N/A | medium | Full (short files) | Confirms folder-purpose conventions used to decide where Change Set Manifest / ADR Proposal List content should *not* go (e.g., real Decision Records belong in `governance/records/`, not created here) | None |
| Engineering Decisions README | `docs/engineering-decisions/README.md` | Process definition | N/A | high | Full document | Defines ED vs. ADR boundary — confirms this package correctly produces an *ADR Proposal List*, not EDs, since orchestrator questions are architectural | None |
| Historical-Documentation-Gaps.md | `docs/engineering-decisions/Historical-Documentation-Gaps.md` | Informational record | N/A | high (as precedent) | Header + ED-003 case study read | **Directly validates this package's own no-git-history handling**: the project's own governance culture already treats an unverifiable git history (`git log --all --full-history` returning nothing) as a fact to be recorded, not silently reconstructed — same principle applied here to the safe copy's missing `.git` | Used as methodological precedent, not as a content source |
| ED-004 — ADR-006 Integration Readiness Assessment | `docs/engineering-decisions/ED-004-ADR-006-Integration-Readiness-Assessment.md` | Accepted (Project Owner, 2026-07-08, Rev 3) | Rev 3 | medium | Header + Problem section | Confirms production code can diverge from an Accepted ADR's stated contract and that this is handled by a dedicated ED, not silently — reinforces the orchestrator's own Conflict Detector / Source Gap Report design | None |
| ADR-Numbering-Policy / ADR-Authoring-Convention cross-checked against ADR_INDEX table | multiple | — | — | high | — | Used together to write ADR Proposal List's numbering disclaimer | — |

## Tier 3 — Skimmed Only (title/header/status field, not read in depth) — with reason

| Document(s) | Path | Why skimmed rather than deep-read |
|---|---|---|
| PCS-001…010, ACS-001…010 | `docs/platform/{pcs,acs}/*.md` | Content is product-capability specification (interior-design domain), not orchestrator-relevant; their *existence and Freeze status* (confirmed via Architecture-Freeze-Completed.md reference list) was sufficient for §8 "Existing VistaRoom Context" traceability. Deep-reading twenty ~150-line domain documents would violate the task's minimal-sufficient-context requirement for a tool that does not touch product domain logic. |
| `docs/engineering-decisions/reviews/*` (72 files: Candidate-A/Candidate-Lock chain, Gate1/Gate2 closure reviews, Supporting Contracts 1–10, two Full-Platform-Vision-Architecture Owner Acceptance decisions) | `docs/engineering-decisions/reviews/` | This is a large, self-contained governance/evaluation history for a *different* initiative (spatial/semantic perception evaluation, Gate 2 / Contract 8 closure, Full-Platform Vision). Only the two "Full-Platform-Vision-Architecture" Owner Acceptance headers (Rev3, Rev5) were opened, to confirm a broader accepted vision baseline exists (Rev5, accepted 2026-07-21) beyond the Roadmap — noted in Source Gap Report as informational context, not load-bearing for this package. The remaining 70 files were not opened; their subject matter (perception/evaluation contracts) does not bear on an internal tooling/orchestrator architecture. |
| `docs/reviews/source-review-mode-operation-2026-07-09.md` (988 lines) | `docs/reviews/` | Raw code-level source-review data dump (file contents + grep results) about `mode`/`operation` dispatch in generation code. Orthogonal to orchestrator architecture; first ~80 lines skimmed to confirm this, then excluded. |
| `docs/implementation/*` (ADR-005/006 implementation packages, Gate2-C8 package) | `docs/implementation/` | File listing only. These are engineering implementation packages for *product* ADRs, useful as a *structural precedent* for what this package's own "MVP Implementation Handoff" should look like, but not read for content — the convention (not the content) was the reason for inclusion, observed via filenames and the templates/governance docs already read. |
| `docs/references/{competitors,providers,research,standards}` | `docs/references/` | Confirmed via task brief description as "mostly empty READMEs"; not opened — no orchestrator-relevant content expected. |
| `docs/archive/`, `docs/adr/archive/`, `docs/platform/{acs,pcs}/archive/` | various | Archived/deprecated by definition; not used as a source of active requirements, per the task's explicit instruction not to treat deprecated documents as current. |
| `docs/platform/knowledge-packs/`, `docs/platform/capabilities/` | `docs/platform/` | READMEs only (structural stubs, confirmed empty of content) — no orchestrator relevance. |
| `src/**` (app, config, domain, hooks, lib, providers, services, types) | `src/` | Skimmed at directory-structure level only (via `find -maxdepth 3`), per task instruction ("this task is documentation not code review"). Used solely to corroborate package.json's technology claims (Next.js app router, `src/lib/interior/**` domain modules, `src/providers/image/**` provider layer) for §17 Technology Decisions framing (the *product's* own provider-adapter pattern for image generation is cited as an existing internal precedent for this package's Provider Adapter Registry design). |
| `.clineignore`, `.gitignore` | project root | Read in full (short files) — used to confirm the *product's* own excluded-path conventions (`.env*`, `node_modules`, build output) as a baseline the Orchestrator's own Allowed Path Policy should not weaken. |
| `STAGE_2.5_MANUAL_TEST_CHECKLIST.md` | project root | Not opened — filename indicates a product QA checklist unrelated to orchestrator architecture; excluded per minimal-sufficient-context discipline. |

## Tier 4 — Explicitly Not Available / Out of Bounds

| Item | Reason |
|---|---|
| Git history of VistaRoom AI (log, branches, tags, diffs) | No `.git` directory exists anywhere in the safe copy or its parents (confirmed: `git status` → `fatal: not a git repository`). This is the primary, blocking gap — see Source Gap Report G1. Not available to Claude Cowork under any circumstance in this workspace. |
| Main VistaRoom AI local folder (outside the safe copy) | Out of access boundary per task instructions §2; not read, not searched, not assumed to contain anything. |
| `.env.local`, real API keys, tokens | Confirmed absent from the safe copy by design (task brief, §1); not searched for, not required for this documentation task. |
| Anything above `C:\Users\user\Documents\Cowork\VistaRoom-AI-Safe-2026-08-01` on the filesystem | Out of access boundary; not read. |

---

*Produced by Claude Cowork, Document Author role, as part of the Architecture Workflow for the VistaRoom Development Orchestrator. Revision 2 (2026-08-01) — see `Revision-Report.md` / `Finding-Disposition-Report.md` for the ORCH-REV-004/008 changes. Revision 3 (2026-08-01) — baseline correction `OWNER-CORRECTION-PC-2.4`; see `Revision-Report-Revision-2-to-3.md` and `Source-Gap-Report.md` for all conflicts and gaps summarized here in table form. **G2 is resolved as of Revision 3; G1 remains open.***
