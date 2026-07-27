# Supporting Contract 5 — Confidence Generation and Normalization Contract

## Candidate A — Bounded Room Understanding / Spatial Perception
## Revision 1 — Correction Cycle 3

```text
Document type:
Supporting Contract candidate

Status:
DRAFT
PREPARATION AUTHORIZED
CORRECTION CYCLE 3 AUTHORIZED BY PROJECT OWNER
BOUNDED RU LOCALIZATION CORRECTIONS APPLIED
READY FOR LIMITED CLOSURE AND NO-REGRESSION VERIFICATION

Original Revision 1 identity:
1136 lines
74267 bytes
SHA-256:
7d57baea1448f36dd7b34e91b3005b230bf99d88218e45355f82c2c9dbb4dcef

Correction Cycle 1 predecessor identity:
1935 lines
163967 bytes
SHA-256:
c037ac2165b67eb7c1eefb6bc64308f2b5b39d89512bbf1143708903183fddc6

Correction Cycle 2 predecessor identity:
1962 lines
164280 bytes
SHA-256:
b416894d895c3bfbabeeb9960d0db3beffe30094369133f5b399690fd33f5c14

PROJECT OWNER ACCEPTANCE:
NOT PERFORMED

CANDIDATE LOCK:
NOT ISSUED

REPOSITORY PERSISTENCE:
NOT AUTHORIZED
NOT PERFORMED

CONTRACT 6:
NOT AUTHORIZED
NOT OPENED

CONTRACTS 6-10:
NOT AUTHORIZED
NOT OPENED

IMPLEMENTATION:
NOT AUTHORIZED

Repository action:
NONE

Commit / Push:
NOT PERFORMED
```

## 1. Document identity, authorization and governance state

This document preserves the logical identity **Supporting Contract 5,
Revision 1** and creates **Correction Cycle 3** as a new review artifact.
It succeeds Correction Cycle 2 only within the unaccepted Draft lineage.
It does not create Revision 2 and does not supersede any accepted or
candidate-locked Contract 5 artifact, because none exists.

```text
Original preparation authorization date:
2026-07-27

Original Project Owner instruction:
"Напиши промпт для Клод проект подготовки Supporting Contract 5."

Correction Cycle 2 authorization:
Project Owner instruction in the active VistaRoom AI project
conversation:
"Исправь найденную ошибку и создай новый документ. Потом приведи
ограниченную clause verification."

Correction Cycle 2 corrections:
the stale Project Context v2.4 SHA-256 citation identified as
C5R1CC1-MINOR-1 was corrected;
the independently recomputed Markdown-table count was corrected from
19 to 28 without changing any table content.

Correction Cycle 3 authorization:
Project Owner instruction in the active VistaRoom AI project
conversation:
"Создай новый документ с учетом найденых ошибок"

Authorized Correction Cycle 3 scope:
correct the RU localization semantics for c5.escalation.001-007;
restore the explicit NaN/non-finite scope in the RU label and definition
for c5.failure.019 and c5.validation.019;
create one new Correction Cycle 3 artifact;
do not change any other Contract-5 semantic architecture.

Repository baseline:
origin/main =
a9d9395a37fcb045b4f76ec31f3da235dcdfb27a

Branch:
main

Ahead/behind:
0/0

Strict working tree:
CLEAN

Untracked entries:
0

Contract 5 collision:
NONE
```

Correction Cycle 1 closed the preliminary findings against the original
Revision 1 draft and underwent one full independent consolidated review.

Correction Cycle 2 closed:

```text
C5R1CC1-MINOR-1:
stale Project Context v2.4 SHA-256 citation;

C5R1CC2-PREFREEZE-MINOR-1:
stale Markdown-table count.
```

A subsequent full end-to-end pre-acceptance audit of the exact
Correction Cycle 2 identity found:

```text
MAJOR-C5-CC2-1:
c5.loc.158-164 used one generic RU definition for seven distinct
escalation actions and therefore failed EN/RU semantic equivalence;

MINOR-C5-CC2-2:
the RU label and definitions for c5.validation.019 and c5.failure.019
omitted the explicit NaN/non-finite scope.
```

Correction Cycle 3 changes only the affected RU localization cells.
No confidence state, source, transformation, signal type, record type,
method class, normalization-profile semantic component, compatibility
matrix, normative rule, validation identity, failure identity,
escalation identity, example, authority gap, ownership boundary,
runtime boundary or non-authorization boundary is changed.

This bounded correction does not replace the required limited closure
and no-regression verification of this exact delivered byte identity.

This authorization does not constitute Project Owner acceptance,
Candidate Lock issuance, repository persistence, Contract 6 preparation,
Contracts 6-10 opening, implementation, corpus, provider/model, or
Diagnosability/Security Architecture authorization.

## 2. Purpose and acceptance boundary

### 2.1 Purpose

Contract 5 defines how ordinal confidence values are generated,
represented, normalized, traced, validated and versioned, consistent
with the accepted ordinal (not probabilistic) confidence model. It
creates a stable, reusable full-platform confidence foundation within
the current Track A perception boundary.

### 2.2 Acceptance boundary

Contract 5 is not: a probability-calibration framework; a provider
benchmarking document; a model-selection framework; a learning system;
a determinability contract; an evidence/provenance contract; a final
JSON serialization contract; an implementation plan.

Contract 5, upon eventual acceptance, does not by itself authorize:
Candidate Lock issuance; repository persistence; Contract 6 preparation
or Contracts 6-10 opening; implementation; corpus/provider/model work;
Diagnosability or Security Architecture.

## 3. Authoritative inputs and precedence

| Source | Canonical path/artifact | SHA-256 | Status |
| --- | --- | --- | --- |
| Supporting Contract 1 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md | d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329 | OWNER-ACCEPTED/CANDIDATE-LOCKED/REPOSITORY-PERSISTED/CLOSURE-COMPLETE |
| Supporting Contract 2 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-2-Relation-Annotation-and-Applicability-Rev10.md | 758bf9b99873f977600365e131b7dc1c166fcf71fe9ac8262294a1ca4e549177 | OWNER-ACCEPTED/CANDIDATE-LOCKED/REPOSITORY-PERSISTED/CLOSURE-COMPLETE |
| Supporting Contract 3 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-3-Relation-Type-Active-Category-Applicability-Matrix-Rev1.md | 0c2263cffbe59ee33727060f710f1c42d4478684cea8fa97ebbb6530b4992180 | OWNER-ACCEPTED/CANDIDATE-LOCKED/REPOSITORY-PERSISTED/CLOSURE-COMPLETE |
| Supporting Contract 4 CC7 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-4-Best-Effort-Evidence-Provenance-and-Determinability-Annotation-Rev1.md | b3ab4e7af3ba816d6a8c24a5d7cd39e7fabf53f90c54370d9002948098244f73 | OWNER-ACCEPTED/REVIEW-CLOSED/CANDIDATE-LOCKED — C4-REV1-CL-001/REPOSITORY-PERSISTED/CLOSURE-COMPLETE |
| Candidate Lock C4-REV1-CL-001 | docs/engineering-decisions/reviews/Candidate-Lock-C4-REV1-CL-001.md | 8661b8a3576bf5109e71c02aca04c10c0b90ed9dd9e067c8045d4efee09cec0c | ISSUED/VALID/INDEPENDENTLY REVIEW-CLOSED/REPOSITORY-PERSISTED |
| ETAP Rev16 | docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev16.md | 2adea2f97decd734717a2d6a277b96fa75296bfdc6a6f9669ec9b729c69367d2 | OWNER-ACCEPTED/REPOSITORY-PERSISTED |
| Rev11 Dependency Plan | docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md | 3a078240afdbc49fffbdfbc7a1c4e76ac6bf49ccf06a5f3621de314934878c0b | OWNER-ACCEPTED/REPOSITORY-PERSISTED |
| MAP Rev19 | docs/engineering-decisions/reviews/Candidate-A-Module-Applicability-Profile-Rev19.md | 032e684f2ab331502695c6a0d04faec92ed2d3394830722bb4f559472d39ca17 | OWNER-ACCEPTED/REPOSITORY-PERSISTED |
| TDH Rev10 | docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev10.md | 472fe038ed20fac83d1e63e9c32e2eef13201fa8fd16b39612debf25a69abb64 | OWNER-ACCEPTED/REPOSITORY-PERSISTED |
| Bounded Scope Rev5 | docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev5.md | bc4236150ed012d68096eb630760f44380a8e154a0c5d18f06147dd52ed1d122 | ACCEPTED/REPOSITORY-PERSISTED |
| Perception Mechanism Rev3 | docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md | 242aa5849c1560b78d18d5efb8de6e8c9f42baf9c62fa3346426a380ed1ceb41 | OWNER-ACCEPTED/REPOSITORY-PERSISTED |
| ADR-013 | docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md | 9428341ff11d2a3cb5af271ca274b3468d9578c2759d27b54b49f59800592ea6 | ACCEPTED |
| ADR-014 | docs/adr/ADR-014-Perception-Boundary.md | d1cf89b6e2d4700d9f2252d2daf1c2de713c99e37e03967e32393cbe0dd32f8c | ACCEPTED |
| ADR-015 | docs/adr/ADR-015-Multi-Image-Perception-Boundary.md | b5e03fb60384f151df01b91abf15d20b919054a038a76a4e04c412f956d6cd6a | ACCEPTED/REPOSITORY-PERSISTED |
| Project Context v2.4 | docs/project/Project Context v2.4.md | 3409d1a78e8703fc0671559dde9de9936b42ddb02918533d4ee5e02ed415835c | OWNER-ACCEPTED/REPOSITORY-PERSISTED |
| Living Strategic Roadmap v1.4 | docs/roadmap/Living-Strategic-Roadmap-v1.4.md | ff2b93d7b8d4dc11eb871d3ff72c5522f4aa664744b9c3e59ce5c9cfd68727b0 | OWNER-ACCEPTED/REPOSITORY-PERSISTED |
| Full-Platform Vision Architecture Rev5 | VistaRoom-AI-Full-Platform-Vision-Architecture-Rev5.md | fbd5ec47f9033c24e0677b586515b439bf94165286fa227895b115e1fc68e467 | OWNER-ACCEPTED |
| Consolidated Feature Vision Rev5 | VistaRoom-AI-Consolidated-Feature-Vision-Rev5.md | 294196fccbf666ab82105e3dabda083b60243af957449033bad505b2b6833228 | OWNER-ACCEPTED |

Rev11 remains authoritative for Contract sequencing and ownership, but
its known historical room-count wording is non-authoritative wherever
it conflicts with Project Context v2.4, MAP Rev19, ETAP Rev16 and the
accepted Residential-34 state.

### 3.1 StructuredScene confidence lineage (verified against current sources)

```text
ADR-013 §4.5: "the schema must distinguish at least three states...
known with confidence, known with uncertainty (confidence reported),
and unknown/not inferable."

Contract 2 Rev10 (quoting the current implementation source,
src/lib/interior/structured-scene/types.ts):
"ConfidenceState = known_with_confidence | known_with_uncertainty |
unknown_not_inferable (ADR-013 §4.5) — closed, three states...
Observed<T>: unknown branch carries confidence/provenance =
unknown_not_inferable and no value field. No invented value is ever
produced for unknown."

Contract 2 Rev10 also quotes evaluators/shared.ts: "relationEvidence: a
relation is usable only if both confidence and provenance are not
unknown_not_inferable," and q3-spatial-relations.ts: "Unknown-confidence
or unknown-provenance relations are excluded from 'usable' results...
not silently dropped from the scene — they remain in scene.relations
but never participate in an answered outcome."

Contract 5 imports ConfidenceState unchanged from ADR-013 §4.5 (as
Contract 2 Rev10 already does at its own §3.1/§3.58) and does not
rename, restate as owned, or add a fourth state.
```

Precedence: explicit Project Owner decisions; Project Context v2.4;
Living Strategic Roadmap v1.4; accepted module sequencing; accepted and
candidate-locked Contracts 1-4; ETAP Rev16; this candidate. A lower
source cannot silently redefine a higher source.

## 4. Contract ownership and terminology boundaries

### 4.1 Contract 5 owns

```text
stable semantic identities mapped to the accepted ordinal confidence
   states without changing ADR-013 wire literals;
confidence source identities;
confidence transformation identities;
raw confidence signal-type identities;
Contract-5 record-type identities;
confidence assertion semantics;
generation-method class and instance-identity rules;
normalization-profile and mapping-rule identity rules;
deterministic normalization and decision-boundary semantics;
confidence revision/history semantics;
Contract-5 validation, failure, escalation and normative-rule
   registries;
Contract-5 EN/RU localization.
```

### 4.2 Contract 5 does not own

```text
Contract 1: vocabulary and category identities.
Contract 2: relation truth and directionality.
Contract 3: relation applicability.
Contract 4: evidence, provenance, best-effort field identities,
   producing-stage semantics and determinability evidence bases.
Contract 6: determinability outcomes, pairing, sealing and adjudication.
Contract 7: scenario/population/sufficiency/completeness.
Contract 8: unseen-claim vocabulary.
Contract 9: fixture subtype and reason-code registry.
Contract 10: final serialization, concrete field inventory and
   conformance envelope.
ETAP Rev16: evaluation metric identities, classifications, denominators,
   empirical correctness reporting and acceptance thresholds.
Provider governance: provider selection, contracts, commercial terms
   and operational integration.
Track C: design intent, recommendations and design reasoning.
ADR-013/ADR-014: StructuredSceneV0 schema and the schema-level
   ConfidenceState/ProvenanceState wire definitions imported unchanged.
```

### 4.3 Stable-ID discipline

Stable IDs are language-neutral, immutable after acceptance, and never
reassigned. Tokens, labels, provider names and implementation names do
not replace stable IDs. Concrete provider/model/configuration identities
remain external referenced identities and are not embedded in
Contract-5 semantic IDs.

Contract 5 defines identity syntax where concrete instances are not yet
authorized. Identity syntax is normative; it does not instantiate or
activate a method, profile or mapping rule.

## 5. Accepted ordinal confidence model

```text
Confidence model: ORDINAL, NOT PROBABILISTIC.
ECE: EXCLUDED. Brier score: EXCLUDED.
```

Prohibited: probability semantics as the canonical meaning; percentage
confidence as canonical meaning; global probabilistic calibration;
expected calibration error; Brier score; Bayesian posterior
interpretation; probability aggregation as the platform confidence
contract.

A provider may expose a numeric score, but that raw score remains a
provider-specific input signal (§9). It is never represented as a
platform-wide calibrated probability unless a future, separately
authorized architecture changes the accepted model.

Empirical correctness (ETAP-owned, §19) is an evaluation result about
how often a state was later found correct; it is not the runtime
semantic meaning of the state and is never used to redefine it.

## 6. Stable identity architecture

```text
Contract semantic identity:
c5.candidate-a.1.0.0-candidate

Document lineage:
Supporting Contract 5 Revision 1 — Correction Cycle 3

Concrete generation methods instantiated:
0

Concrete normalization profiles instantiated:
0

Concrete mapping rules instantiated:
0
```

### 6.1 Namespace registry

| Namespace | Governs |
|---|---|
| `c5.state.*` | Confidence state identities (§7) |
| `c5.source.*` | Confidence source identities (§8) |
| `c5.transformation.*` | Confidence transformation identities (§9) |
| `c5.recordtype.*` | Contract-5 record types (§6.2) |
| `c5.signaltype.*` | Raw confidence signal types (§6.3) |
| `c5.methodclass.*` | Generation method classes (§11) |
| `c5.method.*` | Concrete governed generation-method identities (§6.4) |
| `c5.lifecycle.*` | Method/profile lifecycle identities (§12) |
| `c5.profile.*` | Concrete governed normalization-profile identities (§6.4) |
| `c5.mappingrule.*` | Profile-owned mapping-rule identities (§6.4) |
| `c5.boundaryclosure.*` | Numeric interval closure identities (§12) |
| `c5.orderdirection.*` | Ordered-domain direction identities (§12) |
| `c5.inputexceptionpolicy.*` | Input-exception policy identities (§12) |
| `c5.validationscope.*` | Validation scope identities (§24) |
| `c5.validationphase.*` | Validation phase identities (§24) |
| `c5.validation.*` | Validation identities (§24) |
| `c5.failure.*` | Failure identities (§24) |
| `c5.escalation.*` | Escalation identities (§24) |
| `c5.rule.*` | Normative rule identities (§25) |
| `c5.loc.*` | Localization identities (§26) |

Contract 5 does not use ETAP metric IDs as Contract-5 semantic IDs and
does not use provider or model names as stable Contract-5 IDs.

### 6.2 Record-type registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.recordtype.001 | confidence-assertion | Confidence assertion | Утверждение уверенности |
| c5.recordtype.002 | confidence-source-signal | Confidence source signal | Исходный сигнал уверенности |
| c5.recordtype.003 | confidence-generation-method | Confidence generation method | Метод формирования уверенности |
| c5.recordtype.004 | confidence-normalization-profile | Confidence normalization profile | Профиль нормализации уверенности |
| c5.recordtype.005 | confidence-mapping-rule | Confidence mapping rule | Правило отображения уверенности |

The record type identifies the semantic record class. It does not fix a
Contract-10 JSON field name or storage representation.

### 6.3 Raw signal-type registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.signaltype.001 | canonical-ordinal | Canonical ordinal signal | Канонический ординальный сигнал |
| c5.signaltype.002 | categorical | Categorical confidence signal | Категориальный сигнал уверенности |
| c5.signaltype.003 | numeric | Numeric confidence signal | Числовой сигнал уверенности |
| c5.signaltype.004 | no-signal | No confidence signal | Отсутствие сигнала уверенности |

`c5.signaltype.001-.003` are source-neutral input-shape identities and
may be used with provider-supplied or authorized heuristic-generated
signals. `c5.signaltype.004` is valid only with `c5.source.003` and
`c5.transformation.003`.

### 6.4 Governed instance identity rules

Concrete identities use opaque language-neutral keys assigned once:

```text
Generation method:
c5.method.<opaque-key>

Normalization profile:
c5.profile.<opaque-key>

Mapping rule:
c5.mappingrule.<profile-opaque-key>.<three-digit-sequence>
```

Requirements:

```text
opaque-key:
lowercase ASCII a-z, digits and hyphen;
3-64 characters;
does not contain a provider, model, room category, locale, lifecycle
state, semantic version or mutable configuration value.

method/profile identity:
stable across revisions of the same governed lineage.

method/profile revision:
separate immutable revision identity and version field.

mapping-rule identity:
unique inside one profile lineage;
never reassigned to a different input domain or output state.

all concrete instances:
must carry recordTypeIdentity, lifecycleIdentity, version,
integrityReference and predecessor/supersession linkage where
applicable.

zero concrete instances:
means the architecture is complete but no production method, profile or
mapping rule is authorized or active.
```

Unknown or malformed instance identities fail validation; no draft may
invent a profile or method ID merely to make an example executable.

## 7. Confidence state registry

| Stable ID | Wire token (ADR-013 §4.5) | EN | RU | Definition |
|---|---|---|---|---|
| c5.state.001 | known_with_confidence | Known with confidence | Известно с уверенностью | The subject's value is known with no reported uncertainty at the accepted ordinal level. |
| c5.state.002 | known_with_uncertainty | Known with uncertainty | Известно с неопределённостью | The subject's value is known but is explicitly reported as uncertain at the accepted ordinal level. |
| c5.state.003 | unknown_not_inferable | Unknown / not inferable | Неизвестно / не выводимо | No value is asserted; the subject is not known and not inferable from available evidence. Never contains an invented produced value. |

```text
Invariants:
c5.state.001-003 are a one-to-one, unmodified mapping onto ADR-013
   §4.5's three wire literals; Contract 5 does not rename them.
No fourth "borderline" state exists.
c5.state.003 is distinguishable from a missing-required-value
   conformance failure (Contract-10-owned): the former is a valid,
   asserted epistemic state; the latter is a structural defect in a
   record that must have carried some value.
Human-readable aliases (e.g. "high"/"uncertain") may be used only where
   they map unambiguously to one of the three states above; they never
   form a second competing enum.
```

The state dimension reports the canonical ordinal result only. It does
not encode who produced the confidence, whether normalization occurred,
or what evidence/provenance supports the owning assertion; those are
independent dimensions governed elsewhere in this Contract and
Contract 4.

Canonical ordinal order for normalization and ETAP monotonicity:

```text
c5.state.003 unknown_not_inferable
<
c5.state.002 known_with_uncertainty
<
c5.state.001 known_with_confidence
```

This order is semantic and ordinal only. It does not assign probability,
percentage, distance equality or Bayesian meaning to adjacent states.

`unknown_not_inferable` is an epistemic no-value state, not a
low-confidence known value and not an assertion that the underlying
subject is false.

## 8. Confidence source registry

| Stable ID | Token | EN | RU | Definition |
|---|---|---|---|---|
| c5.source.001 | provider-supplied | Provider-supplied | Предоставлено провайдером | The confidence originates from an external provider/model's own output for this assertion. |
| c5.source.002 | heuristic-generated | Heuristic-generated | Сформировано эвристикой | The confidence originates from a named, versioned Contract-5-governed heuristic. |
| c5.source.003 | missing | Missing | Отсутствует | No confidence signal exists for this assertion. |

## 9. Confidence transformation registry

| Stable ID | Token | EN | RU | Definition |
| --- | --- | --- | --- | --- |
| c5.transformation.001 | unchanged | Unchanged | Без изменений | The source produced a canonical ordinal state directly and no normalization profile was applied. |
| c5.transformation.002 | deterministic-normalized | Deterministically normalized | Детерминированно нормализовано | A named, versioned normalization profile deterministically mapped a governed input signal to a canonical ordinal state. |
| c5.transformation.003 | not-applicable | Not applicable | Неприменимо | No transformation concept applies because no confidence signal exists; valid only with source=missing. |

```text
Required invariants:
every governed confidence assertion has exactly one source state and
   exactly one transformation state;
source and transformation are orthogonal dimensions;
provider-supplied + deterministic-normalized is valid;
heuristic-generated + unchanged is conditionally valid when an
   authorized named heuristic directly produces a canonical ordinal;
heuristic-generated + deterministic-normalized is conditionally valid
   when the generation and normalization sequence is fully traceable;
missing is never disguised as provider-supplied or heuristic-generated;
not-applicable is never used as a generic unknown bucket.
```

Generation and transformation are not synonyms. A heuristic may generate
a canonical ordinal directly (`unchanged`) or generate an intermediate
signal that a registered profile then normalizes
(`deterministic-normalized`).

## 10. Confidence assertion, source-signal and revision model

### 10.1 Confidence assertion identity

```text
confidenceAssertionIdentity =
operationIdentity +
roomCaseIdentity +
subjectIdentity +
subjectKindIdentity +
assertionRevisionIdentity
```

The tuple is semantic, not a final serialization prescription.

| Semantic component | Cardinality | Requirement |
| --- | --- | --- |
| recordTypeIdentity | exactly 1 | `c5.recordtype.001`. |
| confidenceAssertionIdentity | exactly 1 | Unique within one consolidated PerceptionResult revision. |
| subjectIdentity | exactly 1 | Resolvable node/relation/value assertion revision; Contract 5 does not mint it. |
| subjectKindIdentity | exactly 1 | Imported Contract-4 target-kind identity. |
| stateIdentity | exactly 1 | One `c5.state.*` value. |
| sourceIdentity | exactly 1 | One `c5.source.*` value. |
| transformationIdentity | exactly 1 | One `c5.transformation.*` value. |
| signalTypeIdentities | 1..N | For non-missing assertions, cardinality equals `sourceSignalIdentities` and each signal has one compatible type; for source=missing, exactly one `c5.signaltype.004`. |
| sourceSignalIdentities | 0..N conditional | One or more for non-missing assertions; zero only for source=missing. Multiple identities preserve multi-view lineage. |
| generationMethodIdentity | 0..1 conditional | Required for every non-missing assertion. |
| normalizationProfileIdentity | 0..1 conditional | Required exactly when transformation=deterministic-normalized. |
| mappingRuleIdentity | 0..1 conditional | Required exactly when a profile maps an input to a state. |
| producerIdentityAndVersion | 0..N conditional | Provider/model/config or heuristic/config identities. |
| operationIdentity | exactly 1 | Current Operation. |
| roomCaseIdentity | exactly 1 | The one RoomCase of the operation. |
| producingStageIdentity | exactly 1 | Imported Contract-4-compatible producing stage. |
| contractSemanticVersion | exactly 1 | Contract-5 semantic model version. |
| assertionRevisionIdentity | exactly 1 | Immutable assertion revision. |
| predecessorAssertionIdentity | 0..1 conditional | Required for supersession. |
| traceReference | exactly 1 | Diagnostic trace reference without hidden chain-of-thought. |
| integrityReference | exactly 1 | Tamper/integrity compatibility reference. |
| historyReference | exactly 1 | Immutable revision-history reference. |

### 10.2 Source-signal record

A non-missing source signal uses `c5.recordtype.002` and records:

```text
sourceSignalIdentity;
sourceIdentity;
signalTypeIdentity;
generationMethodIdentity;
original raw type/domain;
raw signal or governed unavailability reason;
producer/provider/model/rule/configuration identities and versions;
operationIdentity;
roomCaseIdentity;
contributing ImageAsset identity or identities;
producingStageIdentity;
integrityReference;
immutable revision identity.
```

Raw signal preservation is required where legally and technically
available. When it is unavailable, the record preserves the reason and
does not fabricate a value.

### 10.3 Method, profile and mapping records

```text
generation-method record:
c5.recordtype.003 + c5.method.* identity.

normalization-profile record:
c5.recordtype.004 + c5.profile.* identity.

mapping-rule record:
c5.recordtype.005 + c5.mappingrule.* identity.
```

Each record carries one immutable version, lifecycle, integrity
reference and predecessor/supersession linkage. A later interpretation
or configuration creates a new revision; no accepted history is
rewritten retroactively.

### 10.4 Confidence-bearing subject applicability

Eligible owning subjects are imported, never minted, and include:

```text
node assertions already represented by StructuredSceneV0;
relation assertions already represented by StructuredSceneV0;
node, relation and value annotations whose owning contract permits a
confidence dimension;
Contract-4-owned produced best-effort values;
other current StructuredSceneV0 values that already carry confidence.
```

Ineligible targets:

```text
Contract-4 evidence artifacts as substitutes for the owning assertion;
provenance records as substitutes for the owning assertion;
a no-value record where the upstream owner prohibits a produced value;
a subject outside the one current RoomCase;
a whole-home, cross-room or cross-session aggregate;
a newly invented Contract-1 category, Contract-2 relation or
Contract-4 field.
```

Confidence is metadata about an eligible assertion. It is not itself the
assertion's evidence, provenance or future Contract-6 determinability
outcome.

## 11. Generation method architecture

| Stable ID | Token | EN | RU | Validity | Definition |
| --- | --- | --- | --- | --- | --- |
| c5.methodclass.001 | provider-native-ordinal-passthrough | Provider-native ordinal passthrough | Прямая передача провайдерского ординала | VALID | A provider directly returns one accepted canonical ordinal state; transformation=unchanged. |
| c5.methodclass.002 | provider-categorical-mapping | Provider categorical mapping | Отображение категориального сигнала провайдера | CONDITIONALLY VALID | A provider category requires a registered profile and mapping rule. |
| c5.methodclass.003 | provider-numeric-score-deterministic-normalization | Provider numeric-score deterministic normalization | Детерминированная нормализация числового сигнала провайдера | CONDITIONALLY VALID | A provider numeric signal requires a registered profile and mapping rule. |
| c5.methodclass.004 | named-heuristic-generation | Named heuristic generation | Формирование по именованной эвристике | RESERVED — NOT CURRENTLY ACTIVE | A named, versioned reproducible heuristic produces a canonical ordinal or intermediate governed signal; inactive until lock and separate authorization. |
| c5.methodclass.005 | missing-no-signal | Missing / no signal | Отсутствие сигнала | VALID | No confidence signal exists; source=missing, signaltype=no-signal, transformation=not-applicable. |

No method class is a provider integration or a concrete method instance.
Concrete methods require `c5.method.*` identities under §6.4.

```text
Provider-native ordinal passthrough:
VALID when the provider literal maps 1:1 to a registered c5.state.*
identity.

Provider categorical/numeric mapping:
CONDITIONALLY VALID only with a registered active profile and mapping
rule scoped to the exact signal domain.

Named heuristic generation:
RESERVED and NOT CURRENTLY ACTIVE.
A future authorized heuristic may:
1. directly produce a canonical ordinal -> transformation=unchanged; or
2. produce a governed intermediate signal -> transformation=
   deterministic-normalized through a registered profile.

Missing/no signal:
VALID only as source=missing + signaltype=no-signal +
transformation=not-applicable + state=unknown_not_inferable.
```

## 12. Deterministic normalization-profile architecture

### 12.1 Lifecycle registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.lifecycle.001 | active | Active | Активен |
| c5.lifecycle.002 | reserved | Reserved | Зарезервирован |
| c5.lifecycle.003 | deprecated | Deprecated | Устарел |

The lifecycle registry applies to both generation methods and
normalization profiles.

### 12.2 Boundary-closure registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.boundaryclosure.001 | lower-inclusive-upper-exclusive | Lower-inclusive / upper-exclusive | Нижняя включена / верхняя исключена |
| c5.boundaryclosure.002 | lower-exclusive-upper-inclusive | Lower-exclusive / upper-inclusive | Нижняя исключена / верхняя включена |
| c5.boundaryclosure.003 | both-inclusive | Both-inclusive | Обе границы включены |
| c5.boundaryclosure.004 | both-exclusive | Both-exclusive | Обе границы исключены |

A numeric mapping rule declares exactly one closure identity for every
bounded interval. Unbounded ends are declared explicitly and do not
invent a numeric sentinel.

### 12.3 Ordered-domain direction registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.orderdirection.001 | higher-input-higher-confidence | Higher input means higher confidence | Большее входное значение означает большую уверенность |
| c5.orderdirection.002 | lower-input-higher-confidence | Lower input means higher confidence | Меньшее входное значение означает большую уверенность |
| c5.orderdirection.003 | declared-categorical-order | Declared categorical order | Заданный категориальный порядок |
| c5.orderdirection.004 | not-applicable | Order direction not applicable | Направление порядка неприменимо |

For numeric domains, a profile declares whether higher or lower input
values correspond to higher canonical ordinal confidence. For
categorical domains, the profile declares the complete category order.
`not-applicable` is valid only for domains that are not ordered.

### 12.4 Input-exception policy registry

| Stable ID | Token | EN | RU | Effect |
| --- | --- | --- | --- | --- |
| c5.inputexceptionpolicy.001 | reject-as-validation-failure | Reject as validation failure | Отклонить как ошибку валидации | Invalid/out-of-range/unregistered input creates a validation failure and produces no ordinal state. |
| c5.inputexceptionpolicy.002 | map-to-missing-source | Map to missing source | Отобразить как отсутствующий источник | A recognized absence of signal becomes source=missing; it is not used for invalid numeric or categorical input. |

### 12.5 Normalization-profile semantic model

| Semantic component | Cardinality | Requirement |
| --- | --- | --- |
| recordTypeIdentity | exactly 1 | `c5.recordtype.004`. |
| profileIdentity | exactly 1 | One immutable `c5.profile.*` identity. |
| profileRevisionIdentity | exactly 1 | Immutable revision. |
| lifecycleIdentity | exactly 1 | One `c5.lifecycle.*` value. |
| sourceSignalTypeIdentity | exactly 1 | One `c5.signaltype.001-.003`; no-signal is invalid for normalization. |
| producerConfigurationScope | 0..N conditional | External provider/model/configuration or heuristic/configuration identities; absent only for a source-neutral reserved profile. |
| inputDomainDeclaration | exactly 1 | Numeric range or categorical/ordinal domain. |
| targetStateRegistry | exactly 1 | References only `c5.state.001-.003` in the order defined by §7. |
| mappingRuleIdentities | 1..N | Registered `c5.mappingrule.*` identities. |
| orderDirectionIdentity | exactly 1 | One `c5.orderdirection.*` identity compatible with the input domain. |
| outOfRangePolicy | exactly 1 | One `c5.inputexceptionpolicy.*` value. |
| missingInputPolicy | exactly 1 | One input-exception policy. |
| invalidValuePolicy | exactly 1 | One input-exception policy. |
| monotonicityDeclaration | exactly 1 | Required for ordered input domains and evaluated against `orderDirectionIdentity`. |
| tieBehavior | exactly 1 | Deterministic boundary behavior. |
| roundingRule | exactly 1 | Explicit rule or explicit no-rounding declaration. |
| profileVersion | exactly 1 | Immutable semantic version. |
| integrityReference | exactly 1 | Integrity reference. |
| predecessorProfileRevisionIdentity | 0..1 conditional | Required for supersession. |
| enLabel / ruLabel | exactly 1 each | EN canonical and RU derived locale. |

### 12.6 Mapping-rule semantic model

| Semantic component | Cardinality | Requirement |
| --- | --- | --- |
| recordTypeIdentity | exactly 1 | `c5.recordtype.005`. |
| mappingRuleIdentity | exactly 1 | One `c5.mappingrule.*` identity owned by one profile lineage. |
| inputPredicate | exactly 1 | Categorical membership or numeric interval. |
| boundaryClosureIdentity | 0..1 conditional | Required for bounded numeric intervals. |
| outputStateIdentity | exactly 1 | One `c5.state.*` identity. |
| ruleSequence | exactly 1 | Unique deterministic order inside the profile. |
| ruleVersion | exactly 1 | Immutable version. |
| integrityReference | exactly 1 | Integrity reference. |

Determinism requires that identical governed inputs, method/profile
versions and configuration identities produce the same ordinal result.
For an ordered domain, mapping rules must follow the declared direction,
be monotonic, non-overlapping and gap-free when total coverage is
declared. Any change creates a new revision with predecessor linkage.

No concrete method, profile or mapping rule is instantiated or activated
by this Correction Cycle.

## 13. Compatibility matrices

### 13.1 Source × transformation

| Source \ Transformation | unchanged | deterministic-normalized | not-applicable |
|---|---|---|---|
| provider-supplied | VALID — native canonical ordinal | VALID — registered profile required | INVALID |
| heuristic-generated | CONDITIONALLY VALID — authorized named heuristic directly returns canonical ordinal | CONDITIONALLY VALID — authorized heuristic plus registered profile | INVALID |
| missing | INVALID | INVALID | VALID — only valid missing pairing |

### 13.2 Confidence state × source

| State \ Source | provider-supplied | heuristic-generated | missing |
|---|---|---|---|
| known_with_confidence | VALID | CONDITIONALLY VALID after heuristic gates | INVALID |
| known_with_uncertainty | VALID | CONDITIONALLY VALID after heuristic gates | INVALID |
| unknown_not_inferable | VALID when the source explicitly reports unknown | CONDITIONALLY VALID after heuristic gates | VALID and REQUIRED for no-signal fallback |

### 13.3 Raw signal type × source

| Raw signal type \ Source | provider-supplied | heuristic-generated | missing |
|---|---|---|---|
| canonical-ordinal | VALID | CONDITIONALLY VALID after heuristic gates | INVALID |
| categorical | VALID | CONDITIONALLY VALID after heuristic gates | INVALID |
| numeric | VALID | CONDITIONALLY VALID after heuristic gates | INVALID |
| no-signal | INVALID | INVALID | VALID |

### 13.4 Raw signal type × transformation

| Raw signal type \ Transformation | unchanged | deterministic-normalized | not-applicable |
|---|---|---|---|
| canonical-ordinal | VALID | INVALID — already canonical | INVALID |
| categorical | INVALID | VALID with registered profile and mapping rule | INVALID |
| numeric | INVALID | VALID with registered profile and mapping rule | INVALID |
| no-signal | INVALID | INVALID | VALID |

### 13.5 Combined invariants

```text
source=missing ->
signaltype=no-signal ->
transformation=not-applicable ->
state=unknown_not_inferable.

A provider or authorized heuristic that explicitly reports the canonical
unknown ordinal uses:
source=provider-supplied or heuristic-generated;
signaltype=canonical-ordinal;
transformation=unchanged;
state=unknown_not_inferable.

A categorical unknown token uses:
signaltype=categorical;
transformation=deterministic-normalized;
a registered profile and mapping rule;
state=unknown_not_inferable.

A heuristic directly producing a canonical state may use unchanged only
after Contract 5 is candidate-locked and that exact method is separately
authorized.

No valid combination permits source=missing with a known state.
No categorical or numeric signal may bypass deterministic normalization.
No provenance identity changes the validity classifications above.
```

## 14. Provider-supplied confidence rules

```text
c5.rule.015:
preserve the raw provider signal where legally and technically
available; otherwise preserve a governed unavailability reason.

c5.rule.016:
record one registered source-neutral signal type, original type/domain
and exact provider/model/configuration identities.

c5.rule.017:
never silently convert provider categorical or numeric signals to a
canonical ordinal; conversion requires a registered active profile and
mapping rule.

Provider-supplied no-signal:
represented as source=missing and signaltype=no-signal, not as
provider-supplied with an absent value.

Provider numeric values:
remain provider-specific signals and are never described as platform
probabilities or calibration percentages.
```

## 15. Heuristic-generated confidence rules

```text
c5.rule.018:
a named, registered and versioned c5.method.* identity is required.

c5.rule.019:
exact governed input identities are required.

c5.rule.020:
Contract-4-compatible evidence and provenance references are required.

c5.rule.021:
the method must be reproducible under one immutable configuration
identity and version.

c5.rule.022:
hidden, self-modifying or automatically retuned heuristic confidence is
prohibited.

c5.rule.023:
heuristic-generated confidence is inactive until Contract 5 is
candidate-locked and the exact method receives separate authorization.

Direct ordinal output:
after all gates pass, transformation=unchanged is valid.

Intermediate heuristic signal:
after all gates pass, deterministic-normalized is valid only through a
registered profile and mapping rule.
```

This section defines compatibility semantics only. It does not authorize
or instantiate a heuristic method.

## 16. Missing and unknown confidence rules

```text
c5.rule.024:
missing confidence is explicit; source=missing is never silently omitted.

c5.rule.025:
confidence is never invented from provenance alone.

c5.rule.026:
confidence is never inferred from evidence quantity alone.

c5.rule.027:
confidence is never inferred from cross-view agreement alone.

c5.rule.028:
source=missing requires signaltype=no-signal,
transformation=not-applicable and state=unknown_not_inferable.
```

The dimensions remain distinct:

```text
source=missing:
there is no provider or heuristic confidence signal.

state=unknown_not_inferable:
the canonical schema-level ordinal result records that no confidence
value is known/inferable and carries no invented produced value.

future Contract-6 determinability outcome:
not defined by this Contract.
```

A provider explicitly returning an unknown token is not `source=missing`;
it is a provider-supplied signal mapped or passed through to
`unknown_not_inferable`.

A missing required field in a future Contract-10 envelope is a
conformance failure, not the valid `unknown_not_inferable` state.

## 17. Multi-image confidence behavior

```text
Operation
→ RoomCase[exactly 1]
→ ImageAsset[1..6]
→ one consolidated PerceptionResult
```

Normative behavior:

```text
c5.rule.029:
preserve every per-view source signal, confidence assertion and revision
lineage.

c5.rule.030:
preserve evidence/provenance through Contract-4 references; do not
duplicate Contract-4 evidence records.

c5.rule.031:
a final consolidated confidence requires a registered generation method
or normalization profile plus explicit mapping rules and source
attribution. Arithmetic averaging and majority vote are not defaults.

c5.rule.032:
cross-view agreement never automatically upgrades confidence or
provenance.

c5.rule.033:
cross-view contradiction remains visible and is not silently averaged.

c5.rule.034:
missing per-view confidence is never imputed from another view.

c5.rule.035:
mixed-room and changed-room-state fusion are invalid.
```

Source attribution for a future consolidated assertion must be declared
by its governed method/profile:

```text
all contributing confidence signals missing:
final source=missing, transformation=not-applicable,
state=unknown_not_inferable.

provider-supplied contributions, with or without explicit missing
contributions:
final source may remain provider-supplied only under an explicit
registered consolidation profile; every missing contribution remains
visible in lineage.

any heuristic contribution or mixed provider/heuristic sources:
no final source attribution is assumed by this Contract; consolidation
remains inactive until a separately authorized method/profile defines
the attribution and contradiction policy.
```

No concrete multi-view confidence profile exists in this candidate.
Whole-home, cross-room and cross-session confidence fusion are outside
scope.

## 18. Contract 4 provenance/evidence compatibility

### 18.1 Provenance-independence matrix

Contract-4 provenance records how the owning assertion was produced.
Contract-5 source records where the confidence signal came from. These
dimensions are independent.

| Contract-4 provenance | Contract-5 source eligibility | Contract-5 transformation eligibility | Governing condition |
|---|---|---|---|
| visually-observed | provider-supplied; heuristic-generated when authorized; missing | determined only by §13 source rules | Provenance does not imply or prohibit a confidence source. |
| deterministic-derived | provider-supplied; heuristic-generated when authorized; missing | determined only by §13 source rules | deterministic-derived is not deterministic-normalized. |
| heuristic-inferred | provider-supplied; heuristic-generated when authorized; missing | determined only by §13 source rules | heuristic-inferred provenance is not heuristic-generated confidence. |
| provider-inferred | provider-supplied; heuristic-generated when authorized; missing | determined only by §13 source rules | provider-inferred provenance is not provider-supplied confidence. |

### 18.2 Hard rules

```text
c5.rule.036:
provider-inferred provenance is not equivalent to provider-supplied
confidence.

c5.rule.037:
heuristic-inferred provenance is distinct from heuristic-generated
confidence.

c5.rule.038:
deterministic-derived provenance is distinct from
deterministic-normalized confidence.

c5.rule.039:
producing-stage identity and confidence-source identity are jointly
traceable without being conflated.

c5.rule.040:
provenance never implies confidence.

c5.rule.041:
confidence never substitutes for evidence.

c5.rule.042:
confidence never substitutes for provenance.

c5.rule.043:
more evidence does not automatically mean higher confidence.
```

Contract 5 imports Contract 4 evidence-kind, provenance,
AttributeEvidenceArtifact, EvidenceRelationshipRecord and
EvidenceSetRecord concepts by reference only. It does not fork or
redefine their registries.

## 19. ETAP Rev16 calibration and reporting alignment

```text
Contract 5 preserves and aligns with ETAP Rev16's confidence evaluation
model without changing any ETAP metric ID, without converting a
Diagnostic metric to Blocking, and without creating ECE or Brier
metrics.

ETAP Rev16 owns seven Diagnostic confidence-calibration target families.
Their exact metric identities, classifications, denominators and pass/fail
thresholds are imported by reference and are not restated or renumbered here.
Contract-5 alignment covers:
reporting by confidence source x transformation;
count in every c5.state.* value;
empirical correctness in every non-empty state;
monotonicity;
ordinal gap;
unknown-state count;
unknown-state correctness where defined;
Not-Applicable behavior for empty states;
heuristic-confidence lock prerequisite (c5.rule.023 directly supports
   this ETAP prerequisite by prohibiting active heuristic use before
   Contract 5 candidate-lock and separate method authorization).

Empirical correctness (§5) remains an evaluation result, never the
runtime semantic meaning of a c5.state.* value.
```

## 20. StructuredSceneV0 and evaluator compatibility

```text
Verified current facts (§3.1):
ConfidenceState = known_with_confidence | known_with_uncertainty |
   unknown_not_inferable (ADR-013 §4.5), imported unchanged.
Observed<T> unknown branch: no invented value; confidence =
   unknown_not_inferable; provenance = unknown_not_inferable.
StructuredScene relations carry confidence and provenance.
Current relation usability (evaluators/shared.ts relationEvidence,
   quoted by Contract 2 Rev10): unknown confidence or unknown
   provenance excludes a relation from an "answered" evaluator outcome
   while the relation remains present in scene.relations.

q9-explicit-conflicts remains independently authoritative for explicit
conflict preservation. Confidence generation or normalization does not
resolve, suppress or downgrade an explicit conflict.

Contract 5 does not change current Q3 or Q9 evaluator behavior.

IMPLEMENTATION-NOT-AUTHORIZED note: any future implication that a
c5.state.* value should alter evaluator "usable" logic beyond the
current relationEvidence rule is not authorized by this Contract and
requires separate implementation authorization.
```

## 21. Residential-34 and full-platform compatibility

```text
Contract 5 is category-agnostic in its confidence mechanics; no
category-specific confidence enum is created. Residential-34 (34
active categories), kitchen_living_room (Named Composite Space
Profile), and the three bedroom specializations (children_room,
guest_bedroom, primary_bedroom) are preserved by reference to Contracts
1 and 3, not restated or altered here.

The architecture is designed for reuse across future reasoning,
explanation, controlled editing, project memory and provider
interchangeability, without opening Track C design reasoning and
without being reduced to a disposable MVP mapping table (§28 discusses
the deliberately incomplete concrete-profile population as a disclosed
authority gap, not a design shortcut).
```

## 22. Controlled Learning compatibility boundary

```text
Status: LEARNING-READY, NOT LEARNING-ACTIVE.

Allowed: versioned confidence methods; versioned normalization
profiles; reproducible configuration; provenance/evidence hooks;
evaluation hooks; immutable history; rollback compatibility.

Prohibited: online calibration; automatic threshold updates; automatic
profile changes; feedback-driven production changes; training from
user data; learning analytics; global learning from personalization;
self-modifying heuristic confidence.

A future governed profile version may replace another only through
explicit governance, evaluation and deployment authority (c5.rule.013).
```

## 23. Contract 6/9/10 downstream compatibility

```text
Contract 6 (not authorized, not opened): would import the c5.state.*
   enum and the source/transformation dimensions; would not import
   Contract-5 internal profile mechanics.
Contract 9 (not authorized, not opened): would import Contract-5
   terminology for fixture expectations involving required or
   prohibited confidence outcomes.
Contract 10 (not authorized, not opened): would import Contract-5
   confidence fields and enums for conformance integration; owns final
   field names and envelope.

Contract 5 does not draft any of their internal architecture and does
not create any of their stable IDs.
```

## 24. Validation, failure and escalation registries

### 24.1 Validation scope registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.validationscope.001 | contract-definition | Contract definition | Определение контракта |
| c5.validationscope.002 | registry-lint | Registry lint | Проверка целостности реестра |
| c5.validationscope.003 | confidence-assertion-instance | Confidence assertion instance | Экземпляр утверждения уверенности |
| c5.validationscope.004 | normalization-profile-instance | Normalization profile instance | Экземпляр профиля нормализации |
| c5.validationscope.005 | cross-cutting-ownership | Cross-cutting / ownership | Сквозные / границы владения |
| c5.validationscope.006 | localization | Localization | Локализация |

### 24.2 Validation phase registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.validationphase.001 | authoring-lint | Authoring lint | Проверка при составлении |
| c5.validationphase.002 | pre-consolidation | Pre-consolidation | До консолидации |
| c5.validationphase.003 | consolidation | Consolidation | Консолидация |
| c5.validationphase.004 | post-consolidation | Post-consolidation | После консолидации |
| c5.validationphase.005 | serialization-conformance | Serialization conformance | Соответствие сериализации |

### 24.3 Validation-to-failure registry

| Validation | Meaning | Scope | Phase | Primary failure |
| --- | --- | --- | --- | --- |
| c5.validation.001 | Unknown confidence-state identity | c5.validationscope.002 | c5.validationphase.002 | c5.failure.001 |
| c5.validation.002 | Unknown source identity | c5.validationscope.002 | c5.validationphase.002 | c5.failure.002 |
| c5.validation.003 | Unknown transformation identity | c5.validationscope.002 | c5.validationphase.002 | c5.failure.003 |
| c5.validation.004 | Missing required source dimension | c5.validationscope.003 | c5.validationphase.002 | c5.failure.004 |
| c5.validation.005 | Missing required transformation dimension | c5.validationscope.003 | c5.validationphase.002 | c5.failure.005 |
| c5.validation.006 | Invalid source/transformation combination | c5.validationscope.003 | c5.validationphase.003 | c5.failure.006 |
| c5.validation.007 | not-applicable used outside source=missing | c5.validationscope.003 | c5.validationphase.003 | c5.failure.007 |
| c5.validation.008 | Provider signal without provider/model/config traceability | c5.validationscope.003 | c5.validationphase.003 | c5.failure.008 |
| c5.validation.009 | Normalization asserted without profile identity | c5.validationscope.003 | c5.validationphase.003 | c5.failure.009 |
| c5.validation.010 | Unknown or unregistered normalization profile | c5.validationscope.004 | c5.validationphase.002 | c5.failure.010 |
| c5.validation.011 | Inactive or deprecated profile used for a new assertion | c5.validationscope.004 | c5.validationphase.003 | c5.failure.011 |
| c5.validation.012 | Profile/source-domain mismatch | c5.validationscope.004 | c5.validationphase.003 | c5.failure.012 |
| c5.validation.013 | Non-deterministic normalization | c5.validationscope.004 | c5.validationphase.001 | c5.failure.013 |
| c5.validation.014 | Non-monotonic ordered mapping | c5.validationscope.004 | c5.validationphase.001 | c5.failure.014 |
| c5.validation.015 | Overlapping decision boundaries | c5.validationscope.004 | c5.validationphase.001 | c5.failure.015 |
| c5.validation.016 | Gapped decision boundaries where total coverage is required | c5.validationscope.004 | c5.validationphase.001 | c5.failure.016 |
| c5.validation.017 | Ambiguous boundary closure | c5.validationscope.004 | c5.validationphase.001 | c5.failure.017 |
| c5.validation.018 | Out-of-range input without declared policy outcome | c5.validationscope.003 | c5.validationphase.003 | c5.failure.018 |
| c5.validation.019 | Invalid numeric input (NaN or non-finite) | c5.validationscope.003 | c5.validationphase.003 | c5.failure.019 |
| c5.validation.020 | Unregistered categorical input | c5.validationscope.003 | c5.validationphase.003 | c5.failure.020 |
| c5.validation.021 | Raw provider signal discarded without governed reason | c5.validationscope.003 | c5.validationphase.003 | c5.failure.021 |
| c5.validation.022 | Heuristic confidence without named/versioned method | c5.validationscope.003 | c5.validationphase.003 | c5.failure.022 |
| c5.validation.023 | Heuristic confidence used before Contract 5 lock and method authorization | c5.validationscope.005 | c5.validationphase.003 | c5.failure.023 |
| c5.validation.024 | Confidence inferred from provenance alone | c5.validationscope.005 | c5.validationphase.003 | c5.failure.024 |
| c5.validation.025 | Confidence used as evidence | c5.validationscope.005 | c5.validationphase.003 | c5.failure.025 |
| c5.validation.026 | Confidence inferred solely from cross-view agreement | c5.validationscope.005 | c5.validationphase.003 | c5.failure.026 |
| c5.validation.027 | Cross-room confidence fusion | c5.validationscope.005 | c5.validationphase.003 | c5.failure.027 |
| c5.validation.028 | Changed-room-state confidence fusion | c5.validationscope.005 | c5.validationphase.003 | c5.failure.028 |
| c5.validation.029 | Revision-history break | c5.validationscope.003 | c5.validationphase.004 | c5.failure.029 |
| c5.validation.030 | Semantic-version mismatch | c5.validationscope.001 | c5.validationphase.001 | c5.failure.030 |
| c5.validation.031 | Integrity-reference mismatch | c5.validationscope.003 | c5.validationphase.004 | c5.failure.031 |
| c5.validation.032 | Localization label/definition missing, duplicate or orphan | c5.validationscope.006 | c5.validationphase.001 | c5.failure.032 |
| c5.validation.033 | Ownership-boundary violation | c5.validationscope.005 | c5.validationphase.001 | c5.failure.033 |
| c5.validation.034 | Contract-6 outcome leakage | c5.validationscope.005 | c5.validationphase.001 | c5.failure.034 |
| c5.validation.035 | Contract-10 serialization leakage | c5.validationscope.005 | c5.validationphase.001 | c5.failure.035 |
| c5.validation.036 | Controlled Learning activation attempted | c5.validationscope.005 | c5.validationphase.001 | c5.failure.036 |
| c5.validation.037 | Unauthorized implementation or provider activity claimed | c5.validationscope.005 | c5.validationphase.001 | c5.failure.037 |
| c5.validation.038 | Uncovered normative rule | c5.validationscope.001 | c5.validationphase.001 | c5.failure.038 |
| c5.validation.039 | Invalid confidence-state/source combination | c5.validationscope.003 | c5.validationphase.003 | c5.failure.039 |
| c5.validation.040 | Unknown Contract-5 record type | c5.validationscope.002 | c5.validationphase.002 | c5.failure.040 |
| c5.validation.041 | Malformed method/profile/mapping identity | c5.validationscope.002 | c5.validationphase.002 | c5.failure.041 |
| c5.validation.042 | Missing or unknown raw confidence signal type | c5.validationscope.003 | c5.validationphase.002 | c5.failure.042 |
| c5.validation.043 | Required escalation target missing from registry | c5.validationscope.001 | c5.validationphase.001 | c5.failure.043 |
| c5.validation.044 | Unknown or unregistered mapping-rule identity | c5.validationscope.004 | c5.validationphase.002 | c5.failure.044 |
| c5.validation.045 | Required generation-method identity missing or unknown | c5.validationscope.003 | c5.validationphase.002 | c5.failure.045 |
| c5.validation.046 | Inactive or deprecated method used for a new assertion | c5.validationscope.003 | c5.validationphase.003 | c5.failure.046 |
| c5.validation.047 | Multi-view consolidation without governed profile/method | c5.validationscope.003 | c5.validationphase.003 | c5.failure.047 |
| c5.validation.048 | Invalid raw-signal-type/source combination | c5.validationscope.003 | c5.validationphase.003 | c5.failure.048 |
| c5.validation.049 | Non-normative example uses an unregistered identity or invented threshold/token | c5.validationscope.001 | c5.validationphase.001 | c5.failure.049 |
| c5.validation.050 | Duplicate stable-ID definition | c5.validationscope.002 | c5.validationphase.001 | c5.failure.050 |
| c5.validation.051 | Undefined stable-ID reference | c5.validationscope.002 | c5.validationphase.001 | c5.failure.051 |
| c5.validation.052 | Registry sequence gap, duplicate or out-of-order identity | c5.validationscope.002 | c5.validationphase.001 | c5.failure.052 |
| c5.validation.053 | Signal-type/source-signal lineage cardinality mismatch | c5.validationscope.003 | c5.validationphase.002 | c5.failure.053 |
| c5.validation.054 | Missing or invalid normalization order direction | c5.validationscope.004 | c5.validationphase.001 | c5.failure.054 |
| c5.validation.055 | Invalid raw-signal-type/transformation combination | c5.validationscope.003 | c5.validationphase.003 | c5.failure.055 |

Every validation maps to exactly one primary failure. Independent
failures may coexist for one invalid record when separate invariants are
violated.

### 24.4 Failure registry

| Stable ID | Token | EN | RU |
| --- | --- | --- | --- |
| c5.failure.001 | unknown-confidence-state | Unknown confidence-state identity | Неизвестный идентификатор состояния уверенности |
| c5.failure.002 | unknown-source-identity | Unknown source identity | Неизвестный идентификатор источника |
| c5.failure.003 | unknown-transformation-identity | Unknown transformation identity | Неизвестный идентификатор преобразования |
| c5.failure.004 | missing-source-dimension | Missing required source dimension | Отсутствует обязательное измерение источника |
| c5.failure.005 | missing-transformation-dimension | Missing required transformation dimension | Отсутствует обязательное измерение преобразования |
| c5.failure.006 | invalid-source-transformation-combination | Invalid source/transformation combination | Недопустимая комбинация источник/преобразование |
| c5.failure.007 | not-applicable-misuse | not-applicable used outside source=missing | Использование not-applicable вне source=missing |
| c5.failure.008 | provider-signal-untraceable | Provider signal without provider/model/config traceability | Сигнал провайдера без трассируемости |
| c5.failure.009 | normalization-without-profile | Normalization asserted without profile identity | Нормализация без идентификатора профиля |
| c5.failure.010 | unknown-profile | Unknown or unregistered normalization profile | Неизвестный или незарегистрированный профиль |
| c5.failure.011 | inactive-profile-use | Inactive or deprecated profile used for a new assertion | Использование неактивного или устаревшего профиля |
| c5.failure.012 | profile-domain-mismatch | Profile/source-domain mismatch | Несоответствие профиля и домена источника |
| c5.failure.013 | non-deterministic-normalization | Non-deterministic normalization | Недетерминированная нормализация |
| c5.failure.014 | non-monotonic-mapping | Non-monotonic ordered mapping | Немонотонное упорядоченное отображение |
| c5.failure.015 | overlapping-boundaries | Overlapping decision boundaries | Пересекающиеся границы решения |
| c5.failure.016 | gapped-boundaries | Gapped decision boundaries where total coverage is required | Разрывы границ при требовании полного покрытия |
| c5.failure.017 | ambiguous-boundary-closure | Ambiguous boundary closure | Неоднозначная замкнутость границы |
| c5.failure.018 | out-of-range-input | Out-of-range input without declared policy outcome | Входное значение вне диапазона без заданной политики |
| c5.failure.019 | invalid-numeric-input | Invalid numeric input (NaN or non-finite) | Недопустимое числовое значение (NaN или не конечное число) |
| c5.failure.020 | unregistered-categorical-input | Unregistered categorical input | Незарегистрированное категориальное значение |
| c5.failure.021 | raw-signal-discarded | Raw provider signal discarded without governed reason | Исходный сигнал провайдера отброшен без основания |
| c5.failure.022 | heuristic-without-method | Heuristic confidence without named/versioned method | Эвристическая уверенность без именованного метода |
| c5.failure.023 | heuristic-before-lock | Heuristic confidence used before Contract 5 lock and method authorization | Эвристика использована до лока и авторизации метода |
| c5.failure.024 | confidence-from-provenance | Confidence inferred from provenance alone | Уверенность выведена только из происхождения |
| c5.failure.025 | confidence-as-evidence | Confidence used as evidence | Уверенность использована как свидетельство |
| c5.failure.026 | confidence-from-agreement-only | Confidence inferred solely from cross-view agreement | Уверенность выведена только из согласия ракурсов |
| c5.failure.027 | cross-room-fusion | Cross-room confidence fusion | Слияние уверенности между комнатами |
| c5.failure.028 | changed-room-state-fusion | Changed-room-state confidence fusion | Слияние уверенности при изменённом состоянии комнаты |
| c5.failure.029 | revision-history-break | Revision-history break | Разрыв истории ревизий |
| c5.failure.030 | semantic-version-mismatch | Semantic-version mismatch | Несоответствие семантической версии |
| c5.failure.031 | integrity-reference-mismatch | Integrity-reference mismatch | Несоответствие ссылки целостности |
| c5.failure.032 | localization-failure | Localization label/definition missing, duplicate or orphan | Пропуск, дубликат или сирота метки/определения локализации |
| c5.failure.033 | ownership-violation | Ownership-boundary violation | Нарушение границы владения |
| c5.failure.034 | contract6-outcome-leak | Contract-6 outcome leakage | Утечка исхода Contract 6 |
| c5.failure.035 | contract10-serialization-leak | Contract-10 serialization leakage | Утечка сериализации Contract 10 |
| c5.failure.036 | learning-activation-attempted | Controlled Learning activation attempted | Попытка активации Controlled Learning |
| c5.failure.037 | unauthorized-activity-claimed | Unauthorized implementation or provider activity claimed | Заявлена неавторизованная деятельность |
| c5.failure.038 | uncovered-normative-rule | Uncovered normative rule | Непокрытое нормативное правило |
| c5.failure.039 | invalid-state-source-combination | Invalid confidence-state/source combination | Недопустимая комбинация состояния и источника |
| c5.failure.040 | unknown-record-type | Unknown Contract-5 record type | Неизвестный тип записи Contract 5 |
| c5.failure.041 | malformed-governed-instance-identity | Malformed method/profile/mapping identity | Некорректный идентификатор метода, профиля или правила |
| c5.failure.042 | missing-or-unknown-raw-signal-type | Missing or unknown raw confidence signal type | Отсутствует или неизвестен тип исходного сигнала уверенности |
| c5.failure.043 | missing-required-escalation | Required escalation target missing from registry | Обязательная эскалация отсутствует в реестре |
| c5.failure.044 | unknown-mapping-rule | Unknown or unregistered mapping-rule identity | Неизвестное или незарегистрированное правило отображения |
| c5.failure.045 | missing-generation-method | Required generation-method identity missing or unknown | Отсутствует обязательный идентификатор метода формирования |
| c5.failure.046 | inactive-method-use | Inactive or deprecated method used for a new assertion | Использование неактивного или устаревшего метода |
| c5.failure.047 | multi-view-profile-missing | Multi-view consolidation without governed profile/method | Консолидация ракурсов без управляемого профиля или метода |
| c5.failure.048 | invalid-signal-source-combination | Invalid raw-signal-type/source combination | Недопустимая комбинация типа сигнала и источника |
| c5.failure.049 | unregistered-example-identity | Non-normative example uses an unregistered identity or invented threshold/token | Ненормативный пример использует незарегистрированный идентификатор или выдуманный порог |
| c5.failure.050 | duplicate-stable-id | Duplicate stable-ID definition | Дублирующее определение стабильного идентификатора |
| c5.failure.051 | undefined-stable-id-reference | Undefined stable-ID reference | Ссылка на неопределённый стабильный идентификатор |
| c5.failure.052 | registry-sequence-defect | Registry sequence gap, duplicate or out-of-order identity | Дефект последовательности реестра: разрыв, дубликат или неверный порядок |
| c5.failure.053 | signal-lineage-cardinality-mismatch | Signal-type/source-signal lineage cardinality mismatch | Несоответствие кардинальности типов сигналов и ссылок на сигналы |
| c5.failure.054 | missing-or-invalid-order-direction | Missing or invalid normalization order direction | Отсутствует или недопустимо направление порядка нормализации |
| c5.failure.055 | invalid-signal-transformation-combination | Invalid raw-signal-type/transformation combination | Недопустимая комбинация типа исходного сигнала и преобразования |

### 24.5 Escalation registry

| Stable ID | Token | EN | RU | Trigger / action |
| --- | --- | --- | --- | --- |
| c5.escalation.001 | unresolvable-c5-semantics | Unresolvable Contract-5-owned semantics | Неразрешимая семантика Contract 5 | Return to the Project Owner rather than inventing semantics. |
| c5.escalation.002 | upstream-identity-drift | Upstream identity drift | Дрейф идентичности вышестоящего источника | Freeze affected use and require a future Contract 5 correction. |
| c5.escalation.003 | normalization-profile-conflict | Normalization-profile conflict | Конфликт профиля нормализации | Prevent activation until one governed profile scope is authoritative. |
| c5.escalation.004 | provider-domain-ambiguity | Provider-domain ambiguity | Неоднозначность домена провайдера | Do not guess a mapping; require source-domain clarification. |
| c5.escalation.005 | cross-view-contradiction | Cross-view contradiction | Противоречие между ракурсами | Preserve contradiction and defer adjudication to future Contract 6 authority. |
| c5.escalation.006 | ownership-boundary-conflict | Ownership-boundary conflict | Конфликт границы владения | Do not redefine upstream or downstream contract-owned semantics. |
| c5.escalation.007 | unauthorized-learning-activation | Unauthorized learning activation | Неавторизованная активация обучения | Block the action, preserve evidence, and require explicit future governance. |

Mandatory escalation coverage is complete:

```text
unresolvable Contract-5 semantics;
upstream identity drift;
normalization-profile conflict;
provider-domain ambiguity;
cross-view contradiction;
ownership-boundary conflict;
unauthorized learning activation.
```

## 25. Normative rule registry and coverage

### 25.1 Complete rule registry

| Rule | Normative summary | Primary location | Validation coverage |
| --- | --- | --- | --- |
| c5.rule.001 | State identities map 1:1 to the three accepted ADR-013 wire literals. | §7 | c5.validation.001, c5.validation.002, c5.validation.003 |
| c5.rule.002 | No fourth or competing canonical confidence state exists. | §7 | c5.validation.001 |
| c5.rule.003 | Every confidence assertion has exactly one source and one transformation dimension. | §9 | c5.validation.004, c5.validation.005 |
| c5.rule.004 | not-applicable is valid only with source=missing. | §9/§13 | c5.validation.007 |
| c5.rule.005 | Missing confidence is never disguised as provider-supplied or heuristic-generated. | §8/§16 | c5.validation.004, c5.validation.039, c5.validation.048 |
| c5.rule.006 | Only source/transformation combinations classified valid or conditionally valid in §13 may be asserted. | §13 | c5.validation.006 |
| c5.rule.007 | Confidence assertion revisions are immutable and superseded only by linked revisions. | §10 | c5.validation.029 |
| c5.rule.008 | Contract 5 references but never mints the owning subject identity. | §10 | c5.validation.033 |
| c5.rule.009 | Method classes define semantics only and do not create provider integrations. | §11 | c5.validation.037 |
| c5.rule.010 | Normalization is deterministic for identical governed inputs and one profile version. | §12 | c5.validation.013 |
| c5.rule.011 | Invalid, missing or out-of-range inputs follow an explicit registered exception policy; no silent coercion. | §12 | c5.validation.018, c5.validation.019, c5.validation.020 |
| c5.rule.012 | Numeric mapping rules are monotonic, non-overlapping, and gap-free when total coverage is declared. | §12 | c5.validation.014, c5.validation.015, c5.validation.016, c5.validation.017 |
| c5.rule.013 | Method and profile changes create new immutable revisions with predecessor/supersession linkage. | §10/§12 | c5.validation.011, c5.validation.029, c5.validation.030 |
| c5.rule.014 | Heuristic-generation method class remains reserved and inactive until Contract 5 lock plus separate method authorization. | §11/§15 | c5.validation.023, c5.validation.046 |
| c5.rule.015 | Raw provider confidence signals are preserved where legally and technically available, or a governed unavailability reason is recorded. | §14 | c5.validation.021 |
| c5.rule.016 | Every provider signal records its registered raw signal type and provider/model/configuration traceability. | §14 | c5.validation.008, c5.validation.042, c5.validation.048 |
| c5.rule.017 | Provider categorical or numeric signals require a registered profile before ordinal conversion. | §14 | c5.validation.009, c5.validation.010, c5.validation.012 |
| c5.rule.018 | Heuristic confidence requires a named, registered, versioned method identity. | §15 | c5.validation.022, c5.validation.045 |
| c5.rule.019 | Heuristic generation records exact governed input identities. | §15 | c5.validation.022 |
| c5.rule.020 | Heuristic generation preserves Contract-4-compatible evidence and provenance references. | §15/§18 | c5.validation.008, c5.validation.033 |
| c5.rule.021 | Heuristic generation is reproducible under an immutable configuration identity. | §15 | c5.validation.022, c5.validation.031 |
| c5.rule.022 | Hidden or self-modifying heuristic confidence is prohibited. | §15/§22 | c5.validation.036 |
| c5.rule.023 | No active heuristic confidence is usable before the lock and separate method authorization gate. | §15 | c5.validation.023, c5.validation.046 |
| c5.rule.024 | Missing confidence is represented explicitly as source=missing. | §16 | c5.validation.004, c5.validation.039 |
| c5.rule.025 | Confidence is never inferred from provenance alone. | §16/§18 | c5.validation.024 |
| c5.rule.026 | Confidence is never inferred from evidence quantity alone. | §16/§18 | c5.validation.024, c5.validation.025 |
| c5.rule.027 | Confidence is never inferred solely from cross-view agreement. | §16/§17 | c5.validation.026 |
| c5.rule.028 | source=missing requires state=unknown_not_inferable and transformation=not-applicable. | §13/§16 | c5.validation.006, c5.validation.007, c5.validation.039, c5.validation.048 |
| c5.rule.029 | Per-view confidence contributions and revision lineage are preserved. | §17 | c5.validation.029 |
| c5.rule.030 | Per-view evidence/provenance remains referenced through Contract 4 without duplication. | §17/§18 | c5.validation.033 |
| c5.rule.031 | Final multi-view confidence requires a registered method/profile and mapping rule; averaging and majority vote are not implicit defaults. | §17 | c5.validation.009, c5.validation.044, c5.validation.045, c5.validation.047, c5.validation.053 |
| c5.rule.032 | Cross-view agreement never automatically upgrades confidence or provenance. | §17 | c5.validation.026 |
| c5.rule.033 | Cross-view contradiction remains visible and is not silently averaged away. | §17 | c5.validation.026, c5.validation.047 |
| c5.rule.034 | Missing per-view confidence is never silently imputed from other views. | §17 | c5.validation.024, c5.validation.047 |
| c5.rule.035 | Mixed-room and changed-room-state confidence fusion are invalid. | §17 | c5.validation.027, c5.validation.028 |
| c5.rule.036 | provider-inferred provenance is not equivalent to provider-supplied confidence. | §18 | c5.validation.024, c5.validation.033 |
| c5.rule.037 | heuristic-inferred provenance is distinct from heuristic-generated confidence. | §18 | c5.validation.024, c5.validation.033 |
| c5.rule.038 | deterministic-derived provenance is distinct from deterministic-normalized confidence. | §18 | c5.validation.024, c5.validation.033 |
| c5.rule.039 | Producing-stage identity and confidence-source identity are jointly traceable and never conflated. | §10/§18 | c5.validation.008, c5.validation.033 |
| c5.rule.040 | Provenance never implies confidence. | §18 | c5.validation.024 |
| c5.rule.041 | Confidence never substitutes for evidence. | §18 | c5.validation.025 |
| c5.rule.042 | Confidence never substitutes for provenance. | §18 | c5.validation.024, c5.validation.033 |
| c5.rule.043 | More evidence does not automatically mean higher confidence. | §18 | c5.validation.024, c5.validation.025 |
| c5.rule.044 | Every normative rule has validation coverage or an explicit contract-definition rationale; every validation is covered by at least one rule. | §25 | c5.validation.038, c5.validation.050, c5.validation.051, c5.validation.052 |
| c5.rule.045 | Every governed record uses one registered c5.recordtype.* identity; method/profile/mapping instance IDs follow the immutable syntax in §6. | §6/§10/§12 | c5.validation.040, c5.validation.041, c5.validation.050, c5.validation.051 |
| c5.rule.046 | Only state/source combinations classified in §13 may be asserted. | §13 | c5.validation.039 |
| c5.rule.047 | Every raw source signal uses one registered c5.signaltype.* identity compatible with its source, and assertion signal-type lineage cardinality matches source-signal lineage. | §6/§14 | c5.validation.042, c5.validation.048, c5.validation.053 |
| c5.rule.048 | Every non-missing assertion resolves a registered generation method; every normalized assertion resolves a registered profile and mapping rule. | §10/§12 | c5.validation.009, c5.validation.010, c5.validation.044, c5.validation.045 |
| c5.rule.049 | A heuristic method producing a canonical ordinal directly may use transformation=unchanged only after all heuristic activation gates pass. | §13/§15 | c5.validation.006, c5.validation.023, c5.validation.045, c5.validation.046 |
| c5.rule.050 | Contract-4 provenance categories do not restrict confidence source/transformation eligibility; Contract-5 matrices and traceability gates do. | §18 | c5.validation.024, c5.validation.033 |
| c5.rule.051 | Multi-view consolidation is inactive until a governed method/profile with explicit source attribution and contradiction policy exists. | §17/§28 | c5.validation.047 |
| c5.rule.052 | The escalation registry includes every mandatory escalation class, including unauthorized learning activation. | §24 | c5.validation.043 |
| c5.rule.053 | Every exposed stable target has one EN/RU label and one EN/RU definition; no missing, duplicate or orphan localization is permitted. | §26 | c5.validation.032 |
| c5.rule.054 | Non-normative examples use registered registry identities and tokens only; no invented provider threshold, category token, method ID or profile ID is introduced. | §27 | c5.validation.049 |
| c5.rule.055 | Contract 5 does not leak Contract-6 outcomes, Contract-10 serialization names, or claim unauthorized implementation/provider activity. | §4/§20/§23/§30 | c5.validation.034, c5.validation.035, c5.validation.037 |
| c5.rule.056 | The canonical ordinal order is c5.state.003 < c5.state.002 < c5.state.001; the order is semantic and not probabilistic. | §7 | c5.validation.001, c5.validation.014 |
| c5.rule.057 | Every ordered normalization profile declares one c5.orderdirection.* identity consistent with its signal domain and mapping rules. | §12 | c5.validation.014, c5.validation.054 |
| c5.rule.058 | Only raw-signal-type/transformation combinations classified in §13 may be asserted. | §13 | c5.validation.055 |

### 25.2 Bidirectional coverage invariants

```text
Normative rules:
c5.rule.001-058
sequential
no gaps
no duplicates

Validations:
c5.validation.001-055
sequential
no gaps
no duplicates

Rule -> validation:
every rule maps to one or more validations.

Validation -> rule:
every validation appears in one or more rule mappings.

Validation -> failure:
exactly one primary failure per validation.

Failure localization:
every c5.failure.* identity has exactly one EN/RU localization row with
labels and definitions.
```

`c5.rule.044` is the explicit bidirectional and registry-integrity
self-check and is defined in this section, not in §24.

## 26. EN/RU localization registry

English is canonical. Russian is the complete derived locale. Stable
IDs are language-neutral. English fallback applies if a future Russian
translation is unavailable; this candidate contains no missing Russian
label or definition.

| Loc ID | Target | EN label | RU label | EN definition | RU definition |
| --- | --- | --- | --- | --- | --- |
| c5.loc.001 | c5.state.001 | Known with confidence | Известно с уверенностью | The subject value is known with no reported uncertainty at the accepted ordinal level. | Значение субъекта известно без заявленной неопределённости на принятом ординальном уровне. |
| c5.loc.002 | c5.state.002 | Known with uncertainty | Известно с неопределённостью | The subject value is known but explicitly reported as uncertain at the accepted ordinal level. | Значение субъекта известно, но явно отмечено как неопределённое на принятом ординальном уровне. |
| c5.loc.003 | c5.state.003 | Unknown / not inferable | Неизвестно / не выводимо | No value is asserted; the subject is unknown and not inferable from available evidence. | Значение не утверждается; субъект неизвестен и не выводим из доступных свидетельств. |
| c5.loc.004 | c5.source.001 | Provider-supplied | Предоставлено провайдером | The confidence signal originated from an external provider or model output. | Сигнал уверенности получен из результата внешнего провайдера или модели. |
| c5.loc.005 | c5.source.002 | Heuristic-generated | Сформировано эвристикой | The confidence signal originated from a named, versioned governed heuristic. | Сигнал уверенности сформирован именованной версионированной управляемой эвристикой. |
| c5.loc.006 | c5.source.003 | Missing | Отсутствует | No provider or heuristic confidence signal exists. | Сигнал уверенности от провайдера или эвристики отсутствует. |
| c5.loc.007 | c5.transformation.001 | Unchanged | Без изменений | A canonical ordinal state was produced directly and no normalization profile was applied. | Каноническое ординальное состояние получено напрямую без применения профиля нормализации. |
| c5.loc.008 | c5.transformation.002 | Deterministically normalized | Детерминированно нормализовано | A named, versioned profile deterministically mapped an input signal to a canonical ordinal state. | Именованный версионированный профиль детерминированно отобразил входной сигнал в каноническое ординальное состояние. |
| c5.loc.009 | c5.transformation.003 | Not applicable | Неприменимо | No transformation applies because no confidence signal exists. | Преобразование неприменимо, поскольку сигнал уверенности отсутствует. |
| c5.loc.010 | c5.recordtype.001 | Confidence assertion | Утверждение уверенности | Record carrying one governed confidence assertion and its revision lineage. | Запись, содержащая управляемое утверждение уверенности и историю его ревизий. |
| c5.loc.011 | c5.recordtype.002 | Confidence source signal | Исходный сигнал уверенности | Record preserving one raw confidence source signal and its traceability. | Запись, сохраняющая исходный сигнал уверенности и его трассируемость. |
| c5.loc.012 | c5.recordtype.003 | Confidence generation method | Метод формирования уверенности | Record defining one governed confidence-generation method lineage. | Запись, определяющая линию управляемого метода формирования уверенности. |
| c5.loc.013 | c5.recordtype.004 | Confidence normalization profile | Профиль нормализации уверенности | Record defining one governed normalization-profile lineage. | Запись, определяющая линию управляемого профиля нормализации. |
| c5.loc.014 | c5.recordtype.005 | Confidence mapping rule | Правило отображения уверенности | Record defining one deterministic mapping rule owned by a profile. | Запись, определяющая одно детерминированное правило отображения, принадлежащее профилю. |
| c5.loc.015 | c5.signaltype.001 | Canonical ordinal signal | Канонический ординальный сигнал | The source signal is one of the canonical ordinal confidence states. | Исходный сигнал является одним из канонических ординальных состояний уверенности. |
| c5.loc.016 | c5.signaltype.002 | Categorical confidence signal | Категориальный сигнал уверенности | The source signal is a categorical value whose domain is explicitly declared. | Исходный сигнал является категориальным значением с явно заданным доменом. |
| c5.loc.017 | c5.signaltype.003 | Numeric confidence signal | Числовой сигнал уверенности | The source signal is a numeric value whose domain is explicitly declared. | Исходный сигнал является числовым значением с явно заданным доменом. |
| c5.loc.018 | c5.signaltype.004 | No confidence signal | Отсутствие сигнала уверенности | No confidence signal exists for the assertion. | Для утверждения отсутствует сигнал уверенности. |
| c5.loc.019 | c5.methodclass.001 | Provider-native ordinal passthrough | Прямая передача провайдерского ординала | Passes through a provider-native canonical ordinal without normalization. | Передаёт нативный канонический ординал провайдера без нормализации. |
| c5.loc.020 | c5.methodclass.002 | Provider categorical mapping | Отображение категориального сигнала провайдера | Maps a provider categorical signal through a governed profile. | Отображает категориальный сигнал провайдера через управляемый профиль. |
| c5.loc.021 | c5.methodclass.003 | Provider numeric-score deterministic normalization | Детерминированная нормализация числового сигнала провайдера | Normalizes a provider numeric signal through a governed deterministic profile. | Нормализует числовой сигнал провайдера через управляемый детерминированный профиль. |
| c5.loc.022 | c5.methodclass.004 | Named heuristic generation | Формирование по именованной эвристике | Uses a named, versioned heuristic to produce a canonical ordinal or intermediate signal. | Использует именованную версионированную эвристику для формирования канонического ординала или промежуточного сигнала. |
| c5.loc.023 | c5.methodclass.005 | Missing / no signal | Отсутствие сигнала | Represents the absence of any confidence signal. | Представляет отсутствие какого-либо сигнала уверенности. |
| c5.loc.024 | c5.lifecycle.001 | Active | Активен | The governed method or profile may be used within its authorized scope. | Управляемый метод или профиль может использоваться в пределах авторизованного скоупа. |
| c5.loc.025 | c5.lifecycle.002 | Reserved | Зарезервирован | The identity is registered but cannot be used actively. | Идентификатор зарегистрирован, но не может использоваться активно. |
| c5.loc.026 | c5.lifecycle.003 | Deprecated | Устарел | The identity remains traceable but cannot be used for new assertions. | Идентификатор сохраняется для трассируемости, но не может использоваться для новых утверждений. |
| c5.loc.027 | c5.boundaryclosure.001 | Lower-inclusive / upper-exclusive | Нижняя включена / верхняя исключена | Numeric interval includes its lower boundary and excludes its upper boundary. | Числовой интервал включает нижнюю границу и исключает верхнюю. |
| c5.loc.028 | c5.boundaryclosure.002 | Lower-exclusive / upper-inclusive | Нижняя исключена / верхняя включена | Numeric interval excludes its lower boundary and includes its upper boundary. | Числовой интервал исключает нижнюю границу и включает верхнюю. |
| c5.loc.029 | c5.boundaryclosure.003 | Both-inclusive | Обе границы включены | Numeric interval includes both boundaries. | Числовой интервал включает обе границы. |
| c5.loc.030 | c5.boundaryclosure.004 | Both-exclusive | Обе границы исключены | Numeric interval excludes both boundaries. | Числовой интервал исключает обе границы. |
| c5.loc.031 | c5.orderdirection.001 | Higher input means higher confidence | Большее входное значение означает большую уверенность | The profile declares that larger ordered input values correspond to higher canonical ordinal confidence. | Профиль объявляет, что большие упорядоченные входные значения соответствуют большей канонической ординальной уверенности. |
| c5.loc.032 | c5.orderdirection.002 | Lower input means higher confidence | Меньшее входное значение означает большую уверенность | The profile declares that smaller ordered input values correspond to higher canonical ordinal confidence. | Профиль объявляет, что меньшие упорядоченные входные значения соответствуют большей канонической ординальной уверенности. |
| c5.loc.033 | c5.orderdirection.003 | Declared categorical order | Заданный категориальный порядок | The profile declares the complete order of categorical input values. | Профиль объявляет полный порядок категориальных входных значений. |
| c5.loc.034 | c5.orderdirection.004 | Order direction not applicable | Направление порядка неприменимо | No input ordering applies to this profile domain. | К домену этого профиля не применяется порядок входных значений. |
| c5.loc.035 | c5.inputexceptionpolicy.001 | Reject as validation failure | Отклонить как ошибку валидации | Rejects invalid input, records a validation failure, and produces no ordinal state. | Отклоняет недопустимый вход, фиксирует ошибку валидации и не формирует ординальное состояние. |
| c5.loc.036 | c5.inputexceptionpolicy.002 | Map to missing source | Отобразить как отсутствующий источник | Maps a recognized absence of signal to the explicit missing-source path. | Отображает распознанное отсутствие сигнала в явный путь отсутствующего источника. |
| c5.loc.037 | c5.validationscope.001 | Contract definition | Определение контракта | Validation applies to Contract-5 document definitions. | Валидация применяется к определениям документа Contract 5. |
| c5.loc.038 | c5.validationscope.002 | Registry lint | Проверка целостности реестра | Validation applies to stable registries and identity references. | Валидация применяется к стабильным реестрам и ссылкам на идентификаторы. |
| c5.loc.039 | c5.validationscope.003 | Confidence assertion instance | Экземпляр утверждения уверенности | Validation applies to one confidence-assertion instance. | Валидация применяется к одному экземпляру утверждения уверенности. |
| c5.loc.040 | c5.validationscope.004 | Normalization profile instance | Экземпляр профиля нормализации | Validation applies to one normalization-profile or mapping instance. | Валидация применяется к одному экземпляру профиля нормализации или правила отображения. |
| c5.loc.041 | c5.validationscope.005 | Cross-cutting / ownership | Сквозные / границы владения | Validation applies across ownership, runtime, governance or learning boundaries. | Валидация применяется к границам владения, рантайма, governance или обучения. |
| c5.loc.042 | c5.validationscope.006 | Localization | Локализация | Validation applies to EN/RU localization completeness and uniqueness. | Валидация применяется к полноте и уникальности локализации EN/RU. |
| c5.loc.043 | c5.validationphase.001 | Authoring lint | Проверка при составлении | Validation runs while the contract or registry is authored. | Валидация выполняется при составлении контракта или реестра. |
| c5.loc.044 | c5.validationphase.002 | Pre-consolidation | До консолидации | Validation runs before confidence contributions are consolidated. | Валидация выполняется до консолидации вкладов уверенности. |
| c5.loc.045 | c5.validationphase.003 | Consolidation | Консолидация | Validation runs while a consolidated confidence assertion is produced. | Валидация выполняется при формировании консолидированного утверждения уверенности. |
| c5.loc.046 | c5.validationphase.004 | Post-consolidation | После консолидации | Validation runs after consolidation and revision finalization. | Валидация выполняется после консолидации и фиксации ревизии. |
| c5.loc.047 | c5.validationphase.005 | Serialization conformance | Соответствие сериализации | Validation runs at the future Contract-10 serialization-conformance boundary. | Валидация выполняется на будущей границе соответствия сериализации Contract 10. |
| c5.loc.048 | c5.validation.001 | Validation: Unknown confidence-state identity | Проверка: Неизвестный идентификатор состояния уверенности | Checks whether the following invalid condition is present: Unknown confidence-state identity. | Проверяет наличие следующего недопустимого условия: Неизвестный идентификатор состояния уверенности. |
| c5.loc.049 | c5.validation.002 | Validation: Unknown source identity | Проверка: Неизвестный идентификатор источника | Checks whether the following invalid condition is present: Unknown source identity. | Проверяет наличие следующего недопустимого условия: Неизвестный идентификатор источника. |
| c5.loc.050 | c5.validation.003 | Validation: Unknown transformation identity | Проверка: Неизвестный идентификатор преобразования | Checks whether the following invalid condition is present: Unknown transformation identity. | Проверяет наличие следующего недопустимого условия: Неизвестный идентификатор преобразования. |
| c5.loc.051 | c5.validation.004 | Validation: Missing required source dimension | Проверка: Отсутствует обязательное измерение источника | Checks whether the following invalid condition is present: Missing required source dimension. | Проверяет наличие следующего недопустимого условия: Отсутствует обязательное измерение источника. |
| c5.loc.052 | c5.validation.005 | Validation: Missing required transformation dimension | Проверка: Отсутствует обязательное измерение преобразования | Checks whether the following invalid condition is present: Missing required transformation dimension. | Проверяет наличие следующего недопустимого условия: Отсутствует обязательное измерение преобразования. |
| c5.loc.053 | c5.validation.006 | Validation: Invalid source/transformation combination | Проверка: Недопустимая комбинация источник/преобразование | Checks whether the following invalid condition is present: Invalid source/transformation combination. | Проверяет наличие следующего недопустимого условия: Недопустимая комбинация источник/преобразование. |
| c5.loc.054 | c5.validation.007 | Validation: not-applicable used outside source=missing | Проверка: Использование not-applicable вне source=missing | Checks whether the following invalid condition is present: not-applicable used outside source=missing. | Проверяет наличие следующего недопустимого условия: Использование not-applicable вне source=missing. |
| c5.loc.055 | c5.validation.008 | Validation: Provider signal without provider/model/config traceability | Проверка: Сигнал провайдера без трассируемости | Checks whether the following invalid condition is present: Provider signal without provider/model/config traceability. | Проверяет наличие следующего недопустимого условия: Сигнал провайдера без трассируемости. |
| c5.loc.056 | c5.validation.009 | Validation: Normalization asserted without profile identity | Проверка: Нормализация без идентификатора профиля | Checks whether the following invalid condition is present: Normalization asserted without profile identity. | Проверяет наличие следующего недопустимого условия: Нормализация без идентификатора профиля. |
| c5.loc.057 | c5.validation.010 | Validation: Unknown or unregistered normalization profile | Проверка: Неизвестный или незарегистрированный профиль | Checks whether the following invalid condition is present: Unknown or unregistered normalization profile. | Проверяет наличие следующего недопустимого условия: Неизвестный или незарегистрированный профиль. |
| c5.loc.058 | c5.validation.011 | Validation: Inactive or deprecated profile used for a new assertion | Проверка: Использование неактивного или устаревшего профиля | Checks whether the following invalid condition is present: Inactive or deprecated profile used for a new assertion. | Проверяет наличие следующего недопустимого условия: Использование неактивного или устаревшего профиля. |
| c5.loc.059 | c5.validation.012 | Validation: Profile/source-domain mismatch | Проверка: Несоответствие профиля и домена источника | Checks whether the following invalid condition is present: Profile/source-domain mismatch. | Проверяет наличие следующего недопустимого условия: Несоответствие профиля и домена источника. |
| c5.loc.060 | c5.validation.013 | Validation: Non-deterministic normalization | Проверка: Недетерминированная нормализация | Checks whether the following invalid condition is present: Non-deterministic normalization. | Проверяет наличие следующего недопустимого условия: Недетерминированная нормализация. |
| c5.loc.061 | c5.validation.014 | Validation: Non-monotonic ordered mapping | Проверка: Немонотонное упорядоченное отображение | Checks whether the following invalid condition is present: Non-monotonic ordered mapping. | Проверяет наличие следующего недопустимого условия: Немонотонное упорядоченное отображение. |
| c5.loc.062 | c5.validation.015 | Validation: Overlapping decision boundaries | Проверка: Пересекающиеся границы решения | Checks whether the following invalid condition is present: Overlapping decision boundaries. | Проверяет наличие следующего недопустимого условия: Пересекающиеся границы решения. |
| c5.loc.063 | c5.validation.016 | Validation: Gapped decision boundaries where total coverage is required | Проверка: Разрывы границ при требовании полного покрытия | Checks whether the following invalid condition is present: Gapped decision boundaries where total coverage is required. | Проверяет наличие следующего недопустимого условия: Разрывы границ при требовании полного покрытия. |
| c5.loc.064 | c5.validation.017 | Validation: Ambiguous boundary closure | Проверка: Неоднозначная замкнутость границы | Checks whether the following invalid condition is present: Ambiguous boundary closure. | Проверяет наличие следующего недопустимого условия: Неоднозначная замкнутость границы. |
| c5.loc.065 | c5.validation.018 | Validation: Out-of-range input without declared policy outcome | Проверка: Входное значение вне диапазона без заданной политики | Checks whether the following invalid condition is present: Out-of-range input without declared policy outcome. | Проверяет наличие следующего недопустимого условия: Входное значение вне диапазона без заданной политики. |
| c5.loc.066 | c5.validation.019 | Validation: Invalid numeric input (NaN or non-finite) | Проверка: Недопустимое числовое значение (NaN или не конечное число) | Checks whether the following invalid condition is present: Invalid numeric input (NaN or non-finite). | Проверяет наличие следующего недопустимого условия: числовое входное значение является NaN или не является конечным. |
| c5.loc.067 | c5.validation.020 | Validation: Unregistered categorical input | Проверка: Незарегистрированное категориальное значение | Checks whether the following invalid condition is present: Unregistered categorical input. | Проверяет наличие следующего недопустимого условия: Незарегистрированное категориальное значение. |
| c5.loc.068 | c5.validation.021 | Validation: Raw provider signal discarded without governed reason | Проверка: Исходный сигнал провайдера отброшен без основания | Checks whether the following invalid condition is present: Raw provider signal discarded without governed reason. | Проверяет наличие следующего недопустимого условия: Исходный сигнал провайдера отброшен без основания. |
| c5.loc.069 | c5.validation.022 | Validation: Heuristic confidence without named/versioned method | Проверка: Эвристическая уверенность без именованного метода | Checks whether the following invalid condition is present: Heuristic confidence without named/versioned method. | Проверяет наличие следующего недопустимого условия: Эвристическая уверенность без именованного метода. |
| c5.loc.070 | c5.validation.023 | Validation: Heuristic confidence used before Contract 5 lock and method authorization | Проверка: Эвристика использована до лока и авторизации метода | Checks whether the following invalid condition is present: Heuristic confidence used before Contract 5 lock and method authorization. | Проверяет наличие следующего недопустимого условия: Эвристика использована до лока и авторизации метода. |
| c5.loc.071 | c5.validation.024 | Validation: Confidence inferred from provenance alone | Проверка: Уверенность выведена только из происхождения | Checks whether the following invalid condition is present: Confidence inferred from provenance alone. | Проверяет наличие следующего недопустимого условия: Уверенность выведена только из происхождения. |
| c5.loc.072 | c5.validation.025 | Validation: Confidence used as evidence | Проверка: Уверенность использована как свидетельство | Checks whether the following invalid condition is present: Confidence used as evidence. | Проверяет наличие следующего недопустимого условия: Уверенность использована как свидетельство. |
| c5.loc.073 | c5.validation.026 | Validation: Confidence inferred solely from cross-view agreement | Проверка: Уверенность выведена только из согласия ракурсов | Checks whether the following invalid condition is present: Confidence inferred solely from cross-view agreement. | Проверяет наличие следующего недопустимого условия: Уверенность выведена только из согласия ракурсов. |
| c5.loc.074 | c5.validation.027 | Validation: Cross-room confidence fusion | Проверка: Слияние уверенности между комнатами | Checks whether the following invalid condition is present: Cross-room confidence fusion. | Проверяет наличие следующего недопустимого условия: Слияние уверенности между комнатами. |
| c5.loc.075 | c5.validation.028 | Validation: Changed-room-state confidence fusion | Проверка: Слияние уверенности при изменённом состоянии комнаты | Checks whether the following invalid condition is present: Changed-room-state confidence fusion. | Проверяет наличие следующего недопустимого условия: Слияние уверенности при изменённом состоянии комнаты. |
| c5.loc.076 | c5.validation.029 | Validation: Revision-history break | Проверка: Разрыв истории ревизий | Checks whether the following invalid condition is present: Revision-history break. | Проверяет наличие следующего недопустимого условия: Разрыв истории ревизий. |
| c5.loc.077 | c5.validation.030 | Validation: Semantic-version mismatch | Проверка: Несоответствие семантической версии | Checks whether the following invalid condition is present: Semantic-version mismatch. | Проверяет наличие следующего недопустимого условия: Несоответствие семантической версии. |
| c5.loc.078 | c5.validation.031 | Validation: Integrity-reference mismatch | Проверка: Несоответствие ссылки целостности | Checks whether the following invalid condition is present: Integrity-reference mismatch. | Проверяет наличие следующего недопустимого условия: Несоответствие ссылки целостности. |
| c5.loc.079 | c5.validation.032 | Validation: Localization label/definition missing, duplicate or orphan | Проверка: Пропуск, дубликат или сирота метки/определения локализации | Checks whether the following invalid condition is present: Localization label/definition missing, duplicate or orphan. | Проверяет наличие следующего недопустимого условия: Пропуск, дубликат или сирота метки/определения локализации. |
| c5.loc.080 | c5.validation.033 | Validation: Ownership-boundary violation | Проверка: Нарушение границы владения | Checks whether the following invalid condition is present: Ownership-boundary violation. | Проверяет наличие следующего недопустимого условия: Нарушение границы владения. |
| c5.loc.081 | c5.validation.034 | Validation: Contract-6 outcome leakage | Проверка: Утечка исхода Contract 6 | Checks whether the following invalid condition is present: Contract-6 outcome leakage. | Проверяет наличие следующего недопустимого условия: Утечка исхода Contract 6. |
| c5.loc.082 | c5.validation.035 | Validation: Contract-10 serialization leakage | Проверка: Утечка сериализации Contract 10 | Checks whether the following invalid condition is present: Contract-10 serialization leakage. | Проверяет наличие следующего недопустимого условия: Утечка сериализации Contract 10. |
| c5.loc.083 | c5.validation.036 | Validation: Controlled Learning activation attempted | Проверка: Попытка активации Controlled Learning | Checks whether the following invalid condition is present: Controlled Learning activation attempted. | Проверяет наличие следующего недопустимого условия: Попытка активации Controlled Learning. |
| c5.loc.084 | c5.validation.037 | Validation: Unauthorized implementation or provider activity claimed | Проверка: Заявлена неавторизованная деятельность | Checks whether the following invalid condition is present: Unauthorized implementation or provider activity claimed. | Проверяет наличие следующего недопустимого условия: Заявлена неавторизованная деятельность. |
| c5.loc.085 | c5.validation.038 | Validation: Uncovered normative rule | Проверка: Непокрытое нормативное правило | Checks whether the following invalid condition is present: Uncovered normative rule. | Проверяет наличие следующего недопустимого условия: Непокрытое нормативное правило. |
| c5.loc.086 | c5.validation.039 | Validation: Invalid confidence-state/source combination | Проверка: Недопустимая комбинация состояния и источника | Checks whether the following invalid condition is present: Invalid confidence-state/source combination. | Проверяет наличие следующего недопустимого условия: Недопустимая комбинация состояния и источника. |
| c5.loc.087 | c5.validation.040 | Validation: Unknown Contract-5 record type | Проверка: Неизвестный тип записи Contract 5 | Checks whether the following invalid condition is present: Unknown Contract-5 record type. | Проверяет наличие следующего недопустимого условия: Неизвестный тип записи Contract 5. |
| c5.loc.088 | c5.validation.041 | Validation: Malformed method/profile/mapping identity | Проверка: Некорректный идентификатор метода, профиля или правила | Checks whether the following invalid condition is present: Malformed method/profile/mapping identity. | Проверяет наличие следующего недопустимого условия: Некорректный идентификатор метода, профиля или правила. |
| c5.loc.089 | c5.validation.042 | Validation: Missing or unknown raw confidence signal type | Проверка: Отсутствует или неизвестен тип исходного сигнала уверенности | Checks whether the following invalid condition is present: Missing or unknown raw confidence signal type. | Проверяет наличие следующего недопустимого условия: Отсутствует или неизвестен тип исходного сигнала уверенности. |
| c5.loc.090 | c5.validation.043 | Validation: Required escalation target missing from registry | Проверка: Обязательная эскалация отсутствует в реестре | Checks whether the following invalid condition is present: Required escalation target missing from registry. | Проверяет наличие следующего недопустимого условия: Обязательная эскалация отсутствует в реестре. |
| c5.loc.091 | c5.validation.044 | Validation: Unknown or unregistered mapping-rule identity | Проверка: Неизвестное или незарегистрированное правило отображения | Checks whether the following invalid condition is present: Unknown or unregistered mapping-rule identity. | Проверяет наличие следующего недопустимого условия: Неизвестное или незарегистрированное правило отображения. |
| c5.loc.092 | c5.validation.045 | Validation: Required generation-method identity missing or unknown | Проверка: Отсутствует обязательный идентификатор метода формирования | Checks whether the following invalid condition is present: Required generation-method identity missing or unknown. | Проверяет наличие следующего недопустимого условия: Отсутствует обязательный идентификатор метода формирования. |
| c5.loc.093 | c5.validation.046 | Validation: Inactive or deprecated method used for a new assertion | Проверка: Использование неактивного или устаревшего метода | Checks whether the following invalid condition is present: Inactive or deprecated method used for a new assertion. | Проверяет наличие следующего недопустимого условия: Использование неактивного или устаревшего метода. |
| c5.loc.094 | c5.validation.047 | Validation: Multi-view consolidation without governed profile/method | Проверка: Консолидация ракурсов без управляемого профиля или метода | Checks whether the following invalid condition is present: Multi-view consolidation without governed profile/method. | Проверяет наличие следующего недопустимого условия: Консолидация ракурсов без управляемого профиля или метода. |
| c5.loc.095 | c5.validation.048 | Validation: Invalid raw-signal-type/source combination | Проверка: Недопустимая комбинация типа сигнала и источника | Checks whether the following invalid condition is present: Invalid raw-signal-type/source combination. | Проверяет наличие следующего недопустимого условия: Недопустимая комбинация типа сигнала и источника. |
| c5.loc.096 | c5.validation.049 | Validation: Non-normative example uses an unregistered identity or invented threshold/token | Проверка: Ненормативный пример использует незарегистрированный идентификатор или выдуманный порог | Checks whether the following invalid condition is present: Non-normative example uses an unregistered identity or invented threshold/token. | Проверяет наличие следующего недопустимого условия: Ненормативный пример использует незарегистрированный идентификатор или выдуманный порог. |
| c5.loc.097 | c5.validation.050 | Validation: Duplicate stable-ID definition | Проверка: Дублирующее определение стабильного идентификатора | Checks whether the following invalid condition is present: Duplicate stable-ID definition. | Проверяет наличие следующего недопустимого условия: Дублирующее определение стабильного идентификатора. |
| c5.loc.098 | c5.validation.051 | Validation: Undefined stable-ID reference | Проверка: Ссылка на неопределённый стабильный идентификатор | Checks whether the following invalid condition is present: Undefined stable-ID reference. | Проверяет наличие следующего недопустимого условия: Ссылка на неопределённый стабильный идентификатор. |
| c5.loc.099 | c5.validation.052 | Validation: Registry sequence gap, duplicate or out-of-order identity | Проверка: Дефект последовательности реестра: разрыв, дубликат или неверный порядок | Checks whether the following invalid condition is present: Registry sequence gap, duplicate or out-of-order identity. | Проверяет наличие следующего недопустимого условия: Дефект последовательности реестра: разрыв, дубликат или неверный порядок. |
| c5.loc.100 | c5.validation.053 | Validation: Signal-type/source-signal lineage cardinality mismatch | Проверка: Несоответствие кардинальности типов сигналов и ссылок на сигналы | Checks whether the following invalid condition is present: Signal-type/source-signal lineage cardinality mismatch. | Проверяет наличие следующего недопустимого условия: Несоответствие кардинальности типов сигналов и ссылок на сигналы. |
| c5.loc.101 | c5.validation.054 | Validation: Missing or invalid normalization order direction | Проверка: Отсутствует или недопустимо направление порядка нормализации | Checks whether the following invalid condition is present: Missing or invalid normalization order direction. | Проверяет наличие следующего недопустимого условия: Отсутствует или недопустимо направление порядка нормализации. |
| c5.loc.102 | c5.validation.055 | Validation: Invalid raw-signal-type/transformation combination | Проверка: Недопустимая комбинация типа исходного сигнала и преобразования | Checks whether the following invalid condition is present: Invalid raw-signal-type/transformation combination. | Проверяет наличие следующего недопустимого условия: Недопустимая комбинация типа исходного сигнала и преобразования. |
| c5.loc.103 | c5.failure.001 | Unknown confidence-state identity | Неизвестный идентификатор состояния уверенности | Primary failure raised when the following condition is detected: Unknown confidence-state identity. | Основная ошибка, возникающая при обнаружении условия: Неизвестный идентификатор состояния уверенности. |
| c5.loc.104 | c5.failure.002 | Unknown source identity | Неизвестный идентификатор источника | Primary failure raised when the following condition is detected: Unknown source identity. | Основная ошибка, возникающая при обнаружении условия: Неизвестный идентификатор источника. |
| c5.loc.105 | c5.failure.003 | Unknown transformation identity | Неизвестный идентификатор преобразования | Primary failure raised when the following condition is detected: Unknown transformation identity. | Основная ошибка, возникающая при обнаружении условия: Неизвестный идентификатор преобразования. |
| c5.loc.106 | c5.failure.004 | Missing required source dimension | Отсутствует обязательное измерение источника | Primary failure raised when the following condition is detected: Missing required source dimension. | Основная ошибка, возникающая при обнаружении условия: Отсутствует обязательное измерение источника. |
| c5.loc.107 | c5.failure.005 | Missing required transformation dimension | Отсутствует обязательное измерение преобразования | Primary failure raised when the following condition is detected: Missing required transformation dimension. | Основная ошибка, возникающая при обнаружении условия: Отсутствует обязательное измерение преобразования. |
| c5.loc.108 | c5.failure.006 | Invalid source/transformation combination | Недопустимая комбинация источник/преобразование | Primary failure raised when the following condition is detected: Invalid source/transformation combination. | Основная ошибка, возникающая при обнаружении условия: Недопустимая комбинация источник/преобразование. |
| c5.loc.109 | c5.failure.007 | not-applicable used outside source=missing | Использование not-applicable вне source=missing | Primary failure raised when the following condition is detected: not-applicable used outside source=missing. | Основная ошибка, возникающая при обнаружении условия: Использование not-applicable вне source=missing. |
| c5.loc.110 | c5.failure.008 | Provider signal without provider/model/config traceability | Сигнал провайдера без трассируемости | Primary failure raised when the following condition is detected: Provider signal without provider/model/config traceability. | Основная ошибка, возникающая при обнаружении условия: Сигнал провайдера без трассируемости. |
| c5.loc.111 | c5.failure.009 | Normalization asserted without profile identity | Нормализация без идентификатора профиля | Primary failure raised when the following condition is detected: Normalization asserted without profile identity. | Основная ошибка, возникающая при обнаружении условия: Нормализация без идентификатора профиля. |
| c5.loc.112 | c5.failure.010 | Unknown or unregistered normalization profile | Неизвестный или незарегистрированный профиль | Primary failure raised when the following condition is detected: Unknown or unregistered normalization profile. | Основная ошибка, возникающая при обнаружении условия: Неизвестный или незарегистрированный профиль. |
| c5.loc.113 | c5.failure.011 | Inactive or deprecated profile used for a new assertion | Использование неактивного или устаревшего профиля | Primary failure raised when the following condition is detected: Inactive or deprecated profile used for a new assertion. | Основная ошибка, возникающая при обнаружении условия: Использование неактивного или устаревшего профиля. |
| c5.loc.114 | c5.failure.012 | Profile/source-domain mismatch | Несоответствие профиля и домена источника | Primary failure raised when the following condition is detected: Profile/source-domain mismatch. | Основная ошибка, возникающая при обнаружении условия: Несоответствие профиля и домена источника. |
| c5.loc.115 | c5.failure.013 | Non-deterministic normalization | Недетерминированная нормализация | Primary failure raised when the following condition is detected: Non-deterministic normalization. | Основная ошибка, возникающая при обнаружении условия: Недетерминированная нормализация. |
| c5.loc.116 | c5.failure.014 | Non-monotonic ordered mapping | Немонотонное упорядоченное отображение | Primary failure raised when the following condition is detected: Non-monotonic ordered mapping. | Основная ошибка, возникающая при обнаружении условия: Немонотонное упорядоченное отображение. |
| c5.loc.117 | c5.failure.015 | Overlapping decision boundaries | Пересекающиеся границы решения | Primary failure raised when the following condition is detected: Overlapping decision boundaries. | Основная ошибка, возникающая при обнаружении условия: Пересекающиеся границы решения. |
| c5.loc.118 | c5.failure.016 | Gapped decision boundaries where total coverage is required | Разрывы границ при требовании полного покрытия | Primary failure raised when the following condition is detected: Gapped decision boundaries where total coverage is required. | Основная ошибка, возникающая при обнаружении условия: Разрывы границ при требовании полного покрытия. |
| c5.loc.119 | c5.failure.017 | Ambiguous boundary closure | Неоднозначная замкнутость границы | Primary failure raised when the following condition is detected: Ambiguous boundary closure. | Основная ошибка, возникающая при обнаружении условия: Неоднозначная замкнутость границы. |
| c5.loc.120 | c5.failure.018 | Out-of-range input without declared policy outcome | Входное значение вне диапазона без заданной политики | Primary failure raised when the following condition is detected: Out-of-range input without declared policy outcome. | Основная ошибка, возникающая при обнаружении условия: Входное значение вне диапазона без заданной политики. |
| c5.loc.121 | c5.failure.019 | Invalid numeric input (NaN or non-finite) | Недопустимое числовое значение (NaN или не конечное число) | Primary failure raised when the following condition is detected: Invalid numeric input (NaN or non-finite). | Основная ошибка, возникающая, когда числовое входное значение является NaN или не является конечным. |
| c5.loc.122 | c5.failure.020 | Unregistered categorical input | Незарегистрированное категориальное значение | Primary failure raised when the following condition is detected: Unregistered categorical input. | Основная ошибка, возникающая при обнаружении условия: Незарегистрированное категориальное значение. |
| c5.loc.123 | c5.failure.021 | Raw provider signal discarded without governed reason | Исходный сигнал провайдера отброшен без основания | Primary failure raised when the following condition is detected: Raw provider signal discarded without governed reason. | Основная ошибка, возникающая при обнаружении условия: Исходный сигнал провайдера отброшен без основания. |
| c5.loc.124 | c5.failure.022 | Heuristic confidence without named/versioned method | Эвристическая уверенность без именованного метода | Primary failure raised when the following condition is detected: Heuristic confidence without named/versioned method. | Основная ошибка, возникающая при обнаружении условия: Эвристическая уверенность без именованного метода. |
| c5.loc.125 | c5.failure.023 | Heuristic confidence used before Contract 5 lock and method authorization | Эвристика использована до лока и авторизации метода | Primary failure raised when the following condition is detected: Heuristic confidence used before Contract 5 lock and method authorization. | Основная ошибка, возникающая при обнаружении условия: Эвристика использована до лока и авторизации метода. |
| c5.loc.126 | c5.failure.024 | Confidence inferred from provenance alone | Уверенность выведена только из происхождения | Primary failure raised when the following condition is detected: Confidence inferred from provenance alone. | Основная ошибка, возникающая при обнаружении условия: Уверенность выведена только из происхождения. |
| c5.loc.127 | c5.failure.025 | Confidence used as evidence | Уверенность использована как свидетельство | Primary failure raised when the following condition is detected: Confidence used as evidence. | Основная ошибка, возникающая при обнаружении условия: Уверенность использована как свидетельство. |
| c5.loc.128 | c5.failure.026 | Confidence inferred solely from cross-view agreement | Уверенность выведена только из согласия ракурсов | Primary failure raised when the following condition is detected: Confidence inferred solely from cross-view agreement. | Основная ошибка, возникающая при обнаружении условия: Уверенность выведена только из согласия ракурсов. |
| c5.loc.129 | c5.failure.027 | Cross-room confidence fusion | Слияние уверенности между комнатами | Primary failure raised when the following condition is detected: Cross-room confidence fusion. | Основная ошибка, возникающая при обнаружении условия: Слияние уверенности между комнатами. |
| c5.loc.130 | c5.failure.028 | Changed-room-state confidence fusion | Слияние уверенности при изменённом состоянии комнаты | Primary failure raised when the following condition is detected: Changed-room-state confidence fusion. | Основная ошибка, возникающая при обнаружении условия: Слияние уверенности при изменённом состоянии комнаты. |
| c5.loc.131 | c5.failure.029 | Revision-history break | Разрыв истории ревизий | Primary failure raised when the following condition is detected: Revision-history break. | Основная ошибка, возникающая при обнаружении условия: Разрыв истории ревизий. |
| c5.loc.132 | c5.failure.030 | Semantic-version mismatch | Несоответствие семантической версии | Primary failure raised when the following condition is detected: Semantic-version mismatch. | Основная ошибка, возникающая при обнаружении условия: Несоответствие семантической версии. |
| c5.loc.133 | c5.failure.031 | Integrity-reference mismatch | Несоответствие ссылки целостности | Primary failure raised when the following condition is detected: Integrity-reference mismatch. | Основная ошибка, возникающая при обнаружении условия: Несоответствие ссылки целостности. |
| c5.loc.134 | c5.failure.032 | Localization label/definition missing, duplicate or orphan | Пропуск, дубликат или сирота метки/определения локализации | Primary failure raised when the following condition is detected: Localization label/definition missing, duplicate or orphan. | Основная ошибка, возникающая при обнаружении условия: Пропуск, дубликат или сирота метки/определения локализации. |
| c5.loc.135 | c5.failure.033 | Ownership-boundary violation | Нарушение границы владения | Primary failure raised when the following condition is detected: Ownership-boundary violation. | Основная ошибка, возникающая при обнаружении условия: Нарушение границы владения. |
| c5.loc.136 | c5.failure.034 | Contract-6 outcome leakage | Утечка исхода Contract 6 | Primary failure raised when the following condition is detected: Contract-6 outcome leakage. | Основная ошибка, возникающая при обнаружении условия: Утечка исхода Contract 6. |
| c5.loc.137 | c5.failure.035 | Contract-10 serialization leakage | Утечка сериализации Contract 10 | Primary failure raised when the following condition is detected: Contract-10 serialization leakage. | Основная ошибка, возникающая при обнаружении условия: Утечка сериализации Contract 10. |
| c5.loc.138 | c5.failure.036 | Controlled Learning activation attempted | Попытка активации Controlled Learning | Primary failure raised when the following condition is detected: Controlled Learning activation attempted. | Основная ошибка, возникающая при обнаружении условия: Попытка активации Controlled Learning. |
| c5.loc.139 | c5.failure.037 | Unauthorized implementation or provider activity claimed | Заявлена неавторизованная деятельность | Primary failure raised when the following condition is detected: Unauthorized implementation or provider activity claimed. | Основная ошибка, возникающая при обнаружении условия: Заявлена неавторизованная деятельность. |
| c5.loc.140 | c5.failure.038 | Uncovered normative rule | Непокрытое нормативное правило | Primary failure raised when the following condition is detected: Uncovered normative rule. | Основная ошибка, возникающая при обнаружении условия: Непокрытое нормативное правило. |
| c5.loc.141 | c5.failure.039 | Invalid confidence-state/source combination | Недопустимая комбинация состояния и источника | Primary failure raised when the following condition is detected: Invalid confidence-state/source combination. | Основная ошибка, возникающая при обнаружении условия: Недопустимая комбинация состояния и источника. |
| c5.loc.142 | c5.failure.040 | Unknown Contract-5 record type | Неизвестный тип записи Contract 5 | Primary failure raised when the following condition is detected: Unknown Contract-5 record type. | Основная ошибка, возникающая при обнаружении условия: Неизвестный тип записи Contract 5. |
| c5.loc.143 | c5.failure.041 | Malformed method/profile/mapping identity | Некорректный идентификатор метода, профиля или правила | Primary failure raised when the following condition is detected: Malformed method/profile/mapping identity. | Основная ошибка, возникающая при обнаружении условия: Некорректный идентификатор метода, профиля или правила. |
| c5.loc.144 | c5.failure.042 | Missing or unknown raw confidence signal type | Отсутствует или неизвестен тип исходного сигнала уверенности | Primary failure raised when the following condition is detected: Missing or unknown raw confidence signal type. | Основная ошибка, возникающая при обнаружении условия: Отсутствует или неизвестен тип исходного сигнала уверенности. |
| c5.loc.145 | c5.failure.043 | Required escalation target missing from registry | Обязательная эскалация отсутствует в реестре | Primary failure raised when the following condition is detected: Required escalation target missing from registry. | Основная ошибка, возникающая при обнаружении условия: Обязательная эскалация отсутствует в реестре. |
| c5.loc.146 | c5.failure.044 | Unknown or unregistered mapping-rule identity | Неизвестное или незарегистрированное правило отображения | Primary failure raised when the following condition is detected: Unknown or unregistered mapping-rule identity. | Основная ошибка, возникающая при обнаружении условия: Неизвестное или незарегистрированное правило отображения. |
| c5.loc.147 | c5.failure.045 | Required generation-method identity missing or unknown | Отсутствует обязательный идентификатор метода формирования | Primary failure raised when the following condition is detected: Required generation-method identity missing or unknown. | Основная ошибка, возникающая при обнаружении условия: Отсутствует обязательный идентификатор метода формирования. |
| c5.loc.148 | c5.failure.046 | Inactive or deprecated method used for a new assertion | Использование неактивного или устаревшего метода | Primary failure raised when the following condition is detected: Inactive or deprecated method used for a new assertion. | Основная ошибка, возникающая при обнаружении условия: Использование неактивного или устаревшего метода. |
| c5.loc.149 | c5.failure.047 | Multi-view consolidation without governed profile/method | Консолидация ракурсов без управляемого профиля или метода | Primary failure raised when the following condition is detected: Multi-view consolidation without governed profile/method. | Основная ошибка, возникающая при обнаружении условия: Консолидация ракурсов без управляемого профиля или метода. |
| c5.loc.150 | c5.failure.048 | Invalid raw-signal-type/source combination | Недопустимая комбинация типа сигнала и источника | Primary failure raised when the following condition is detected: Invalid raw-signal-type/source combination. | Основная ошибка, возникающая при обнаружении условия: Недопустимая комбинация типа сигнала и источника. |
| c5.loc.151 | c5.failure.049 | Non-normative example uses an unregistered identity or invented threshold/token | Ненормативный пример использует незарегистрированный идентификатор или выдуманный порог | Primary failure raised when the following condition is detected: Non-normative example uses an unregistered identity or invented threshold/token. | Основная ошибка, возникающая при обнаружении условия: Ненормативный пример использует незарегистрированный идентификатор или выдуманный порог. |
| c5.loc.152 | c5.failure.050 | Duplicate stable-ID definition | Дублирующее определение стабильного идентификатора | Primary failure raised when the following condition is detected: Duplicate stable-ID definition. | Основная ошибка, возникающая при обнаружении условия: Дублирующее определение стабильного идентификатора. |
| c5.loc.153 | c5.failure.051 | Undefined stable-ID reference | Ссылка на неопределённый стабильный идентификатор | Primary failure raised when the following condition is detected: Undefined stable-ID reference. | Основная ошибка, возникающая при обнаружении условия: Ссылка на неопределённый стабильный идентификатор. |
| c5.loc.154 | c5.failure.052 | Registry sequence gap, duplicate or out-of-order identity | Дефект последовательности реестра: разрыв, дубликат или неверный порядок | Primary failure raised when the following condition is detected: Registry sequence gap, duplicate or out-of-order identity. | Основная ошибка, возникающая при обнаружении условия: Дефект последовательности реестра: разрыв, дубликат или неверный порядок. |
| c5.loc.155 | c5.failure.053 | Signal-type/source-signal lineage cardinality mismatch | Несоответствие кардинальности типов сигналов и ссылок на сигналы | Primary failure raised when the following condition is detected: Signal-type/source-signal lineage cardinality mismatch. | Основная ошибка, возникающая при обнаружении условия: Несоответствие кардинальности типов сигналов и ссылок на сигналы. |
| c5.loc.156 | c5.failure.054 | Missing or invalid normalization order direction | Отсутствует или недопустимо направление порядка нормализации | Primary failure raised when the following condition is detected: Missing or invalid normalization order direction. | Основная ошибка, возникающая при обнаружении условия: Отсутствует или недопустимо направление порядка нормализации. |
| c5.loc.157 | c5.failure.055 | Invalid raw-signal-type/transformation combination | Недопустимая комбинация типа исходного сигнала и преобразования | Primary failure raised when the following condition is detected: Invalid raw-signal-type/transformation combination. | Основная ошибка, возникающая при обнаружении условия: Недопустимая комбинация типа исходного сигнала и преобразования. |
| c5.loc.158 | c5.escalation.001 | Unresolvable Contract-5-owned semantics | Неразрешимая семантика Contract 5 | Governance escalation used when this condition cannot be resolved locally. Return to the Project Owner rather than inventing semantics. | Governance-эскалация применяется, когда семантику Contract 5 невозможно разрешить локально. Следует обратиться к Project Owner, а не изобретать новую семантику. |
| c5.loc.159 | c5.escalation.002 | Upstream identity drift | Дрейф идентичности вышестоящего источника | Governance escalation used when this condition cannot be resolved locally. Freeze affected use and require a future Contract 5 correction. | Governance-эскалация применяется при дрейфе вышестоящей идентичности. Необходимо заморозить затронутое использование и потребовать будущую коррекцию Contract 5. |
| c5.loc.160 | c5.escalation.003 | Normalization-profile conflict | Конфликт профиля нормализации | Governance escalation used when this condition cannot be resolved locally. Prevent activation until one governed profile scope is authoritative. | Governance-эскалация применяется при конфликте профилей нормализации. Активация запрещается до определения единственного авторитетного управляемого профиля для соответствующего скоупа. |
| c5.loc.161 | c5.escalation.004 | Provider-domain ambiguity | Неоднозначность домена провайдера | Governance escalation used when this condition cannot be resolved locally. Do not guess a mapping; require source-domain clarification. | Governance-эскалация применяется при неоднозначности домена сигнала провайдера. Нельзя угадывать отображение; требуется уточнение исходного домена. |
| c5.loc.162 | c5.escalation.005 | Cross-view contradiction | Противоречие между ракурсами | Governance escalation used when this condition cannot be resolved locally. Preserve contradiction and defer adjudication to future Contract 6 authority. | Governance-эскалация применяется при неразрешимом противоречии между ракурсами. Противоречие сохраняется, а вынесение решения откладывается до будущей авторизации Contract 6. |
| c5.loc.163 | c5.escalation.006 | Ownership-boundary conflict | Конфликт границы владения | Governance escalation used when this condition cannot be resolved locally. Do not redefine upstream or downstream contract-owned semantics. | Governance-эскалация применяется при конфликте границы владения. Нельзя переопределять семантику, принадлежащую вышестоящим или нижестоящим контрактам. |
| c5.loc.164 | c5.escalation.007 | Unauthorized learning activation | Неавторизованная активация обучения | Governance escalation used when this condition cannot be resolved locally. Block the action, preserve evidence, and require explicit future governance. | Governance-эскалация применяется при попытке неавторизованной активации обучения. Действие блокируется, свидетельства сохраняются, а дальнейшие шаги требуют явного будущего governance-решения. |

Localization requirements:

```text
one row per exposed stable target;
one EN label and one RU label per row;
one EN definition and one RU definition per row;
no duplicate target;
no missing target;
no orphan target;
method/profile/mapping instance labels and definitions are required when
such concrete instances are later created; this candidate creates zero
such instances;
normative rule prose is not exposed as a separate UI-labelled stable
target and therefore has no separate c5.loc row.
```

## 27. Examples — explicitly non-normative

All examples use registered registry identities and tokens only. No
provider-specific threshold, provider category literal, concrete
`c5.method.*`, `c5.profile.*` or `c5.mappingrule.*` identity is invented.

```text
NON-NORMATIVE EXAMPLE — provider ordinal passthrough:
state=c5.state.001;
source=c5.source.001;
transformation=c5.transformation.001;
signaltype=c5.signaltype.001;
methodclass=c5.methodclass.001.

NON-NORMATIVE EXAMPLE — provider numeric normalization:
a governed input of signaltype=c5.signaltype.003 is processed under
methodclass=c5.methodclass.003 and transformation=c5.transformation.002.
A concrete profile and mapping-rule identity would be mandatory, but no
such identity is instantiated by this candidate.

NON-NORMATIVE EXAMPLE — provider categorical mapping:
signaltype=c5.signaltype.002;
source=c5.source.001;
transformation=c5.transformation.002;
methodclass=c5.methodclass.002.
No provider category token or mapping boundary is invented here.

NON-NORMATIVE EXAMPLE — heuristic direct ordinal:
after future lock and separate method authorization, a named method of
class c5.methodclass.004 may produce c5.state.002 directly with
source=c5.source.002 and transformation=c5.transformation.001.

NON-NORMATIVE EXAMPLE — heuristic intermediate signal:
after future authorization, c5.methodclass.004 may produce a governed
intermediate signal that is normalized using
c5.transformation.002. Concrete method/profile/mapping identities remain
mandatory and are not invented here.

NON-NORMATIVE EXAMPLE — missing confidence:
state=c5.state.003;
source=c5.source.003;
transformation=c5.transformation.003;
signaltype=c5.signaltype.004;
methodclass=c5.methodclass.005.

NON-NORMATIVE EXAMPLE — provider explicitly reports unknown:
canonical ordinal path:
state=c5.state.003;
source=c5.source.001;
signaltype=c5.signaltype.001;
transformation=c5.transformation.001.

categorical path:
state=c5.state.003;
source=c5.source.001;
signaltype=c5.signaltype.002;
transformation=c5.transformation.002;
a registered profile and mapping rule are required.

NON-NORMATIVE EXAMPLE — one-view confidence:
one ImageAsset contributes one source-signal record and one confidence
assertion with full lineage.

NON-NORMATIVE EXAMPLE — multi-view agreement without automatic upgrade:
two views agree on c5.state.001; agreement alone does not create a new
state, provenance upgrade or unregistered consolidation profile.

NON-NORMATIVE EXAMPLE — multi-view contradiction:
one view carries c5.state.001 and another c5.state.002; both remain
traceable and no silent averaging occurs.

NON-NORMATIVE EXAMPLE — invalid probability interpretation:
interpreting c5.state.001 as a percentage probability is prohibited.

NON-NORMATIVE EXAMPLE — invalid provenance inference:
provenance=visually-observed does not imply c5.state.001 or any
c5.source.* identity.

NON-NORMATIVE EXAMPLE — invalid confidence-as-evidence:
a confidence assertion cannot replace a Contract-4 evidence artifact.
```

## 28. Open authority gaps and rejected alternatives

| Gap ID | Gap | Why not blocking | Future authority required | Owner of resolution | Inactive until resolved |
|---|---|---|---|---|---|
| AG-1 | No accepted universal provider numeric cut points | §12 defines governed profile and mapping-rule architecture without inventing thresholds | Source-grounded Contract 5 correction plus explicit Owner authority | Future Contract 5 revision | Any universal or provider-specific numeric mapping |
| AG-2 | No selected provider/model | Contract 5 is provider-neutral | Separate provider governance | Provider governance | Provider contact, integration or invocation |
| AG-3 | No authorized concrete heuristic method | Class and identity rules are complete; zero method instances is explicit | Contract 5 lock plus separate method authorization | Future Contract 5 governance | `c5.methodclass.004` active use |
| AG-4 | No authorized concrete normalization profile or mapping rule | Architecture and identity syntax are complete | Source-grounded Contract 5 correction and separate activation authority | Future Contract 5 governance | Any `c5.profile.*` or `c5.mappingrule.*` activation |
| AG-5 | No governed mixed provider/heuristic multi-view source-attribution policy | §17 preserves inputs and prohibits guessing | Separately authorized method/profile after evidence and evaluation | Future Contract 5 governance | Mixed-source consolidated confidence |
| AG-6 | No Contract 6 pairing/sealing model | Contract 5 defines compatibility hooks only | Contract 6 preparation authorization | Future Contract 6 | Determinability pairing, sealing and adjudication |
| AG-7 | No Contract 10 serialization names | Semantic components are defined without wire-field ownership | Contract 10 preparation authorization | Future Contract 10 | Final JSON names and envelope |
| AG-8 | No provider deployment authority | Outside Contract 5 ownership | Separate operational/provider governance | Provider governance | Production provider/model use |

Rejected alternatives:

```text
combined source+transformation enum;
probability or percentage semantics;
ECE or Brier ownership;
empirical correctness as runtime state meaning;
source=missing with a known state;
heuristic-generated + unchanged treated as universally invalid;
provenance categories used to prohibit otherwise valid confidence
sources;
automatic multi-view averaging or majority vote;
invented concrete profile/method IDs for examples;
automatic learning or self-modifying profile boundaries.
```

## 29. Review-readiness and Candidate Lock prerequisites

This Correction Cycle is internally review-complete and ready for one
full independent consolidated review. It is not ready for Candidate Lock
or Owner acceptance merely because internal passes passed.

Objective prerequisites for a future first Candidate Lock:

```text
one full independent consolidated review of this exact byte identity;
all BLOCKER, MAJOR and MINOR findings closed;
a final no-regression closure verification;
exact artifact identity frozen;
state/source/transformation and signal-type registries complete;
record-type and instance-identity rules complete;
generation and normalization semantics complete;
all compatibility matrices complete;
all concrete profile/method authority gaps accurately inactive;
Contract-4 compatibility passed;
ETAP Rev16 alignment passed;
validation/failure/escalation registries complete;
rule/validation/failure bidirectional coverage passed;
EN/RU localization complete;
all mechanical checks passed;
explicit Project Owner acceptance;
separate Candidate Lock issuance authority.
```

Preparation and internal review do not authorize Candidate Lock,
repository persistence or Contract 6.

## 30. Explicit non-authorization boundary

This draft does not authorize: Project Owner acceptance; Candidate Lock
issuance; repository persistence; Contract 6 preparation; Contracts
6-10 opening; Contract 11; Phase-1 Scope Decision/Execution Profile;
Section 22 artifacts; Tier 1 Corpus Preparation; corpus creation;
fixture creation; annotation; provider/model contact, invocation,
evaluation, or selection; implementation; Implementation Package;
schema migration; deployment; production activation; real-user-photo
processing; real-user-data use; whole-home runtime; cross-room runtime;
video; panorama; floor plans; 2.5D; 3D; commercial scope; Layer 2
activation; Tracks B-H; learning-active behavior; feedback collection;
training; automatic production changes; Diagnosability Architecture;
Security Architecture.

## 31. Machine-verification appendix

Recomputed from the completed Correction Cycle 3 artifact:

```text
Final document lines:
1974

Final document bytes:
165770

Final document SHA-256:
computed externally after final write; not embedded to avoid a
self-referential hash mutation.

Top-level sections:
32
sequential §1-§32

Authoritative source rows:
18
all paths explicit
all SHA-256 values 64 hexadecimal characters

Markdown tables:
28

Table structural errors:
0

Code fences:
88
balanced pairs: 44

Defining stable targets localized:
164

Confidence states:
3

Confidence sources:
3

Confidence transformations:
3

Record types:
5

Raw signal types:
4

Method classes:
5

Concrete method identities:
0

Concrete normalization profiles:
0

Concrete mapping rules:
0

Lifecycle identities:
3

Boundary-closure identities:
4

Order-direction identities:
4

Input-exception policies:
2

Validation scopes:
6

Validation phases:
5

Normative rules:
58
c5.rule.001-058
sequential, 0 gaps, 0 duplicates

Validations:
55
c5.validation.001-055
sequential, 0 gaps, 0 duplicates

Failures:
55
c5.failure.001-055
sequential, 0 gaps, 0 duplicates
1:1 primary mapping from validations

Escalations:
7
c5.escalation.001-007

Localization rows:
164
c5.loc.001-164
EN labels complete
RU labels complete
EN definitions complete
RU definitions complete
0 missing
0 duplicate target
0 orphan

Rule -> validation uncovered:
0

Validation -> rule uncovered:
0

Undefined stable-ID references:
0

Defined but unclassified stable IDs:
0

Broken internal section references:
0

Unresolved drafting tokens:
0

Stale current-state markers:
0

Malformed Unicode replacement characters:
0
```

Internal review passes completed:

```text
1. source identity and governance verification;
2. ordinal-model and canonical-state-order review;
3. ownership, applicability and dependency review;
4. record-type and governed-instance identity review;
5. source/transformation/state/signal compatibility review;
6. normalization determinism, interval closure and order-direction review;
7. provider, heuristic and activation-gate review;
8. multi-image lineage, source attribution and contradiction review;
9. Contract-4 evidence/provenance independence review;
10. ETAP, StructuredScene and Q3/Q9 evaluator no-regression review;
11. rule/validation/failure/escalation bidirectional coverage review;
12. EN/RU label and definition completeness review;
13. authority-gap and non-normative example review;
14. adversarial cross-reference, status and Markdown mechanics review.
```

These internal passes do not replace independent consolidated review.

## 32. Closing status

```text
Supporting Contract 5, Revision 1 — Correction Cycle 3:
DRAFT
PREPARATION AUTHORIZED
CORRECTION CYCLE 3 AUTHORIZED
BOUNDED RU LOCALIZATION CORRECTIONS APPLIED
READY FOR LIMITED CLOSURE AND NO-REGRESSION VERIFICATION

PROJECT OWNER ACCEPTANCE:
NOT PERFORMED

CANDIDATE LOCK:
NOT ISSUED

REPOSITORY PERSISTENCE:
NOT AUTHORIZED
NOT PERFORMED

CONTRACT 6:
NOT AUTHORIZED
NOT OPENED

CONTRACTS 6-10:
NOT AUTHORIZED
NOT OPENED

IMPLEMENTATION:
NOT AUTHORIZED
NOT PERFORMED

Repository:
UNCHANGED
```

Required next step:

```text
freeze this exact Correction Cycle 3 identity;
perform limited closure and no-regression verification of
MAJOR-C5-CC2-1 and MINOR-C5-CC2-2;
perform final Claude Project exact-byte acceptance-readiness review;
obtain explicit Project Owner acceptance;
make a separate Candidate Lock decision;
make a separate repository-persistence decision.
```

This document does not authorize Contract 6 or any downstream action.
