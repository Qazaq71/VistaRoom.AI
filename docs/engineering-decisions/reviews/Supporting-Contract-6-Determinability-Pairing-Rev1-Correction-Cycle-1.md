# Supporting Contract 6 — Unknown/Determinability Annotation and Pairing Contract

## Candidate A — Bounded Room Understanding / Spatial Perception
## Revision 1 — Correction Cycle 1

```text
Document type:
Supporting Contract candidate

Canonical external filename:
Supporting-Contract-6-Determinability-Pairing-Rev1-Correction-Cycle-1.md

Status:
DRAFT
PREPARATION AUTHORIZED
CORRECTION CYCLE 1 AUTHORIZED BY PROJECT OWNER
FULL MULTI-PASS END-TO-END REVIEW COMPLETED
ALL IDENTIFIED CORRECTIONS INTEGRATED
READY FOR ONE FULL INDEPENDENT CONSOLIDATED REVIEW

Original Revision 1 predecessor identity:
1190 lines
82766 bytes
SHA-256:
fa2ce96b664e8e124cb9bf18d68bb5f4ead1e406e88ce6a863999cd329a0c7c3

PROJECT OWNER ACCEPTANCE:
NOT PERFORMED

CANDIDATE LOCK:
NOT ISSUED

REPOSITORY PERSISTENCE:
NOT AUTHORIZED
NOT PERFORMED

CONTRACT 7:
NOT AUTHORIZED
NOT OPENED

CONTRACTS 7–10:
NOT AUTHORIZED
NOT OPENED

IMPLEMENTATION:
NOT AUTHORIZED

Repository action:
NONE

Commit / Push:
NOT PERFORMED
```
## 1. Document Identity, Authorization and Governance State

This document preserves the logical identity **Supporting Contract 6,
Revision 1** and creates **Correction Cycle 1** as the corrected successor
to the initial draft. It does not create Revision 2.

```text
Original preparation authorization:
Project Owner Nurlan — "Пиши промпт на подготовку Supporting Contract 6."

Correction Cycle 1 authority:
Project Owner Nurlan — "Проведи сквозную проверку этого документа столько
раз, сколько раз тебе понадобится, чтобы выявить все возможные ошибки и
неточности. Если найдешь ошибки, исправь их и подготовь новый документ."

Authorized correction scope:
review the complete predecessor identity;
compare it against accepted Contracts 1–5 and governing project sources;
correct every identified architectural, semantic, localization and
mechanical defect;
produce one new corrected Contract 6 artifact;
do not modify the repository;
do not open Contract 7.
```

### 1.1 Consolidated predecessor finding set

| Finding ID | Severity | Predecessor defect | Correction location | Result |
|---|---|---|---|---|
| C6R1-01 | MAJOR | Contract-4 basis-record scope was overgeneralized to all four unit families. | §4, §7, §10 | CLOSED — direct Contract-4 record consumption is restricted to best-effort assessments; other unit types use a Contract-6 bridge record that references but does not redefine Contract-4 basis IDs. |
| C6R1-02 | MAJOR | Basis .002, .013 and .014 were mapped to outcomes through invalid shortcuts. | §10, §19.5 | CLOSED — candidate contradiction, duplicate normalization and excluded-modality invalidation are separated from terminal outcomes. |
| C6R1-03 | MAJOR | Inconclusive outcome contradicted fail-to-adjudicate handling. | §9, §16, §17 | CLOSED — inconclusive is a completed semantic disposition; unable-to-complete leaves the unit unsealed and has no outcome. |
| C6R1-04 | MAJOR | Entity-subtype sealing required one resolved subtype even for not-determinable or inconclusive. | §6, §13 | CLOSED — exactly one subtype is required only for determinable; other outcomes preserve zero resolved subtype plus complete candidate/basis history. |
| C6R1-05 | MAJOR | Multi-valued fields lacked member-level identity and closure rules. | §5–§8, §12, §14 | CLOSED — assessment/member granularity and parent/member sealing prerequisites are explicit. |
| C6R1-06 | MAJOR | Owned record, scope, pairing-state, disposition, basis-effect and multi-view registries were missing. | §4–§5 | CLOSED — all owned semantic families now have closed c6.* registries. |
| C6R1-07 | MAJOR | Compatibility and lifecycle matrices were partial while claiming completeness. | §19 | CLOSED — every required matrix is explicit; lifecycle is a complete 5×5 transition matrix and all conditional cells state conditions. |
| C6R1-08 | MAJOR | Rule/validation/failure coverage was asserted without complete bidirectional mappings, severity and handling. | §20–§23 | CLOSED — 64 rules, 87 validations and 87 primary failures are fully mapped; severity, phase, scope, handling and escalation are explicit. |
| C6R1-09 | MAJOR | Localization covered labels only and omitted definitions, rules and matrix semantics. | §28 | CLOSED — every exposed Contract-6 target has one EN/RU label-and-definition row with EN fallback. |
| C6R1-10 | MAJOR | Contract-4 field basis applicability and .016 conditions were stated incorrectly. | §10.4, §12 | CLOSED — exact field applicability from accepted Contract 4 CC7 is imported; .016 is limited to fields .003/.006/.007/.008 under field-specific conditions. |
| C6R1-11 | MINOR | Authoritative source count claimed 21 while the table contained 23 rows. | §3 | CLOSED — source count corrected to 23. |
| C6R1-12 | MINOR | A subsection under §12 was mislabeled as §10.3. | §12.3 | CLOSED — section hierarchy corrected. |
| C6R1-13 | MINOR | Normative matrices used bare .NNN shorthand and free-text dispositions. | §19 | CLOSED — full stable IDs and c6.compatdisposition.* identities are used. |
| C6R1-14 | MINOR | Repository preflight text repeated an unverifiable scratch-file statement. | §1.3 | CLOSED — the corrected artifact records only the known repository checkpoint and declares repository state re-verification mandatory for the independent review. |

All findings above are closed in this exact Correction Cycle 1 artifact. This
is an internal consolidated review result and does not substitute for the
required independent review of the corrected byte identity.

### 1.2 Governance baseline

```text
Contracts 1–5:
OWNER-ACCEPTED
CANDIDATE-LOCKED
REPOSITORY-PERSISTED
CLOSURE-COMPLETE

Contract 6:
PREPARATION AUTHORIZED
CORRECTION CYCLE 1 DRAFT
NOT OWNER-ACCEPTED
NOT CANDIDATE-LOCKED
NOT REPOSITORY-PERSISTED

Contract 7 and Contracts 7–10:
NOT AUTHORIZED
NOT OPENED

Supporting Contracts 1–10 accepted:
NOT SATISFIED
```

### 1.3 Repository boundary

The last confirmed repository checkpoint used by the predecessor was
`origin/main = b0246c04660c38c42927e584abc1bb218fac7cdf`, branch `main`,
ahead/behind `0/0`. This correction task performs no live repository mutation
and makes no claim about untracked scratch files. The independent review must
re-run repository preflight and reconcile any later commit before approval.
## 2. Purpose and Acceptance Boundary

### 2.1 Purpose

Contract 6 defines the normative semantic architecture for:

- annotation-unit records and immutable revision identity;
- unit-family-specific pairing and member granularity;
- the closed determinability outcomes `determinable`,
  `not-determinable`, and `inconclusive`;
- outcome derivation from imported evidence-basis semantics;
- sealing, adjudication, supersession and invalidation;
- multi-view contradiction preservation;
- validation, failure, escalation and EN/RU localization.

The governed unit families are:

1. matched entity subtype;
2. confidence-bearing value;
3. provenance-bearing value;
4. best-effort field assessment and its value members.

### 2.2 Acceptance boundary

Contract 6 does not own final serialization, ETAP thresholds, implementation,
corpus construction, provider/model selection, annotation labor workflow,
Contract-7 sufficiency, Contract-8 unseen-claim vocabulary, Contract-9
fixture semantics, Contract-10 conformance, Track-C design reasoning,
learning activation, Diagnosability Architecture or Security Architecture.

Acceptance of this Contract, when separately issued by Project Owner, would
not itself authorize Candidate Lock issuance, repository persistence,
implementation or Contract 7.
## 3. Authoritative Sources and Precedence

The corrected source register contains **23** authoritative rows.

| Source | Canonical path | SHA-256 | Status |
|---|---|---|---|
| Contract 1 Rev19 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-1-Master-Vocabulary-Rev19.md | d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329 | OWNER-ACCEPTED / CANDIDATE-LOCKED — C1-REV19-CL-001 / REPOSITORY-PERSISTED |
| Candidate Lock C1-REV19-CL-001 | docs/engineering-decisions/reviews/Candidate-Lock-C1-REV19-CL-001.md | ef57a41e2e12cffdb5b09ef13a90f8904ffbbdc1992efc882913cb6b4b7d3fa5 | ISSUED / VALID / REPOSITORY-PERSISTED |
| Contract 2 Rev10 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-2-Relation-Annotation-and-Applicability-Rev10.md | 758bf9b99873f977600365e131b7dc1c166fcf71fe9ac8262294a1ca4e549177 | OWNER-ACCEPTED / CANDIDATE-LOCKED — C2-REV10-CL-001 / REPOSITORY-PERSISTED |
| Candidate Lock C2-REV10-CL-001 | docs/engineering-decisions/reviews/Candidate-Lock-C2-REV10-CL-001.md | 7b07a11a3451ffbc80681d19c4e453a2c330935373103e9d921512aee6058f86 | ISSUED / VALID / REPOSITORY-PERSISTED |
| Contract 3 Rev1 CC7 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-3-Relation-Type-Active-Category-Applicability-Matrix-Rev1.md | 0c2263cffbe59ee33727060f710f1c42d4478684cea8fa97ebbb6530b4992180 | OWNER-ACCEPTED / CANDIDATE-LOCKED — C3-REV1-CL-001 / REPOSITORY-PERSISTED |
| Candidate Lock C3-REV1-CL-001 | docs/engineering-decisions/reviews/Candidate-Lock-C3-REV1-CL-001.md | 39f0800d214a9bc405d39d4a0acd6a694ce8099c76c5d78e95e8fe351ea9af24 | ISSUED / VALID / REPOSITORY-PERSISTED |
| Contract 4 Rev1 CC7 | docs/engineering-decisions/reviews/Candidate-A-Supporting-Contract-4-Best-Effort-Evidence-Provenance-and-Determinability-Annotation-Rev1.md | b3ab4e7af3ba816d6a8c24a5d7cd39e7fabf53f90c54370d9002948098244f73 | OWNER-ACCEPTED / CANDIDATE-LOCKED — C4-REV1-CL-001 / REPOSITORY-PERSISTED |
| Candidate Lock C4-REV1-CL-001 | docs/engineering-decisions/reviews/Candidate-Lock-C4-REV1-CL-001.md | 8661b8a3576bf5109e71c02aca04c10c0b90ed9dd9e067c8045d4efee09cec0c | ISSUED / VALID / REPOSITORY-PERSISTED |
| Contract 5 Rev1 CC3 | docs/engineering-decisions/reviews/Supporting-Contract-5-Confidence-Normalization-Rev1-CC3.md | cf2796ae890c75f952d88ef9786c3fd694140ec0a5040e59bcf8a16a3ba67d43 | OWNER-ACCEPTED / CANDIDATE-LOCKED — C5-REV1-CL-001 / REPOSITORY-PERSISTED |
| Candidate Lock C5-REV1-CL-001 | docs/engineering-decisions/reviews/Candidate-Lock-C5-REV1-CL-001.md | c91bb9f2a573c21dc48148d2546b176d94889e967b8d4f69f488126926b2d804 | ISSUED / VALID / REPOSITORY-PERSISTED |
| Contracts 1–10 Preparation and Dependency Plan Rev11 | docs/engineering-decisions/reviews/Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11.md | 3a078240afdbc49fffbdfbc7a1c4e76ac6bf49ccf06a5f3621de314934878c0b | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Evaluation Threshold and Acceptance Plan Rev16 | docs/engineering-decisions/reviews/Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev16.md | 2adea2f97decd734717a2d6a277b96fa75296bfdc6a6f9669ec9b729c69367d2 | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Module Applicability Profile Rev19 | docs/engineering-decisions/reviews/Candidate-A-Module-Applicability-Profile-Rev19.md | 032e684f2ab331502695c6a0d04faec92ed2d3394830722bb4f559472d39ca17 | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Test Data Handling Decision Rev10 | docs/engineering-decisions/reviews/Candidate-A-Test-Data-Handling-Decision-Rev10.md | 472fe038ed20fac83d1e63e9c32e2eef13201fa8fd16b39612debf25a69abb64 | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Bounded Scope Decision Rev5 | docs/engineering-decisions/reviews/Candidate-A-Bounded-Scope-Decision-Rev5.md | bc4236150ed012d68096eb630760f44380a8e154a0c5d18f06147dd52ed1d122 | ACCEPTED / REPOSITORY-PERSISTED |
| Perception Mechanism Architecture Rev3 | docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-Evaluation-Architecture-Rev3.md | 242aa5849c1560b78d18d5efb8de6e8c9f42baf9c62fa3346426a380ed1ceb41 | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| ADR-013 | docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md | 9428341ff11d2a3cb5af271ca274b3468d9578c2759d27b54b49f59800592ea6 | ACCEPTED |
| ADR-014 | docs/adr/ADR-014-Perception-Boundary.md | d1cf89b6e2d4700d9f2252d2daf1c2de713c99e37e03967e32393cbe0dd32f8c | ACCEPTED |
| ADR-015 | docs/adr/ADR-015-Multi-Image-Perception-Boundary.md | b5e03fb60384f151df01b91abf15d20b919054a038a76a4e04c412f956d6cd6a | ACCEPTED / REPOSITORY-PERSISTED |
| Project Context v2.4 | docs/project/Project Context v2.4.md | 3409d1a78e8703fc0671559dde9de9936b42ddb02918533d4ee5e02ed415835c | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Living Strategic Roadmap v1.4 | docs/roadmap/Living-Strategic-Roadmap-v1.4.md | ff2b93d7b8d4dc11eb871d3ff72c5522f4aa664744b9c3e59ce5c9cfd68727b0 | OWNER-ACCEPTED / REPOSITORY-PERSISTED |
| Full-Platform Vision Architecture Rev5 | VistaRoom-AI-Full-Platform-Vision-Architecture-Rev5.md | fbd5ec47f9033c24e0677b586515b439bf94165286fa227895b115e1fc68e467 | OWNER-ACCEPTED |
| Consolidated Full Feature Vision Rev5 | VistaRoom-AI-Consolidated-Feature-Vision-Rev5.md | 294196fccbf666ab82105e3dabda083b60243af957449033bad505b2b6833228 | OWNER-ACCEPTED |

The following exact imported identities are mandatory:

```text
Contract 4 Rev1 CC7:
2567 lines
258378 bytes
SHA-256:
b3ab4e7af3ba816d6a8c24a5d7cd39e7fabf53f90c54370d9002948098244f73

Contract 5 Rev1 CC3:
1974 lines
165770 bytes
SHA-256:
cf2796ae890c75f952d88ef9786c3fd694140ec0a5040e59bcf8a16a3ba67d43

Project Context v2.4:
SHA-256:
3409d1a78e8703fc0671559dde9de9936b42ddb02918533d4ee5e02ed415835c
```

Precedence is:

1. explicit Project Owner decisions;
2. Project Context v2.4;
3. Living Strategic Roadmap v1.4;
4. accepted and Candidate-locked Contracts 1–5;
5. accepted ADRs and module decisions;
6. this Contract-6 candidate.

A lower source cannot silently redefine a higher source.
## 4. Imported Definitions and Ownership Map

### 4.1 Contract-6-owned record types

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.recordtype.001 | annotation-unit-record | Annotation-unit record | Запись единицы аннотации | Represents one Contract-6-governed determinability subject at one immutable revision. | Представляет один управляемый Contract 6 субъект определимости в одной неизменяемой ревизии. |
| c6.recordtype.002 | pairing-record | Pairing record | Запись сопоставления | Binds one annotation unit to the exact imported participants and identity keys required by its unit type. | Связывает одну единицу аннотации с точными импортированными участниками и ключами идентичности, требуемыми её типом. |
| c6.recordtype.003 | basis-link-record | Basis-link record | Запись связи с базисом | Links an annotation unit to Contract-4-owned determinability-basis identities and their resolvable evidence references without redefining those identities. | Связывает единицу аннотации с принадлежащими Contract 4 идентификаторами базиса определимости и разрешимыми ссылками на свидетельства без переопределения этих идентификаторов. |
| c6.recordtype.004 | outcome-decision-record | Outcome-decision record | Запись решения об исходе | Records exactly one Contract-6 outcome for one sealable annotation-unit revision and preserves its derivation or adjudication basis. | Фиксирует ровно один исход Contract 6 для одной запечатываемой ревизии единицы аннотации и сохраняет базис вывода или вынесенного решения. |
| c6.recordtype.005 | sealing-record | Sealing record | Запись запечатывания | Records the lifecycle transition, authority reference, integrity reference and immutable history of sealing, supersession or invalidation. | Фиксирует переход жизненного цикла, ссылку на полномочие, ссылку целостности и неизменяемую историю запечатывания, замещения или признания недействительным. |
| c6.recordtype.006 | adjudication-record | Adjudication record | Запись разрешения неоднозначности | Records one governed adjudication attempt, the complete retained basis, rationale, authority reference and disposition. | Фиксирует одну управляемую попытку разрешения неоднозначности, полный сохранённый базис, обоснование, ссылку на полномочие и результат. |

### 4.2 Exact ownership

Contract 6 owns:

- `c6.recordtype.*`, `c6.unittype.*`, `c6.unitgranularity.*`,
  `c6.viewscope.*`;
- pairing, pairing-state and outcome identities;
- Contract-6 basis-link semantics;
- sealing lifecycle and adjudication;
- Contract-6 validation, failure, escalation and localization.

Contract 6 imports without redefining:

- Contract-1 subtype/category identities and Residential-34 profile;
- Contract-4 evidence, provenance, best-effort field/value/assessment,
  evidence-set and `c4.determinabilitybasis.001–016` meanings;
- Contract-5 confidence state/source/transformation/signal identities;
- Operation, RoomCase, ImageAsset and consolidated PerceptionResult
  identities from the accepted runtime boundary.

### 4.3 Corrected Contract-4 record boundary

`DeterminabilityEvidenceBasisRecord` is a Contract-4 record scoped to one
`BestEffortFieldAssessmentRecord`. Contract 6 consumes that exact record
directly **only** for `c6.unittype.004`.

For entity-subtype, confidence and provenance units, Contract 6 uses
`c6.recordtype.003` (`basis-link-record`). This bridge record:

- references exact imported `c4.determinabilitybasis.*` identities;
- references resolvable upstream evidence/provenance records;
- does not claim to be a Contract-4 `DeterminabilityEvidenceBasisRecord`;
- does not change any Contract-4 basis meaning;
- does not fabricate a best-effort field assessment;
- is invalid when the imported basis cannot be grounded for the unit subject.

### 4.4 Non-ownership

Contract 6 does not redefine Contracts 1–5, ETAP, provider governance,
Contract 7–10 or Track C. A Contract-6 outcome never replaces an imported
value, confidence state, provenance value or evidence record.
## 5. Contract-6 Semantic Model

### 5.1 Semantic-model version registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.semanticmodelversion.001 | contract6-semantic-model-v1-cc1 | Contract 6 semantic model v1 — CC1 candidate | Семантическая модель Contract 6 v1 — кандидат CC1 | Identifies the corrected Revision-1 semantic model candidate; it becomes authoritative only after explicit Project Owner acceptance. | Идентифицирует исправленную кандидатную семантическую модель Revision 1; она становится авторитетной только после явного принятия Project Owner. |

### 5.2 Unit granularity

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.unitgranularity.001 | assessment-level | Assessment level | Уровень оценки | The unit governs the complete candidate set or field assessment. | Единица управляет полным набором кандидатов или оценкой поля. |
| c6.unitgranularity.002 | member-level | Member level | Уровень элемента | The unit governs one candidate subtype, one scalar value, one tag or one role member inside an assessment. | Единица управляет одним кандидатом подтипа, одним скалярным значением, одним тегом или одной ролью внутри оценки. |

### 5.3 View scope

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.viewscope.001 | per-view | Per-view scope | Скоуп отдельного ракурса | The record describes one contribution originating from exactly one admitted ImageAsset and is never independently sealed. | Запись описывает один вклад, происходящий ровно из одного допущенного ImageAsset, и никогда не запечатывается самостоятельно. |
| c6.viewscope.002 | consolidated | Consolidated scope | Консолидированный скоуп | The record consolidates admitted contributions inside one RoomCase and is the only scope eligible for a sealed outcome. | Запись консолидирует допущенные вклады внутри одного RoomCase и является единственным скоупом, допускающим запечатанный исход. |

### 5.4 Pairing state

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.pairingstate.001 | complete | Complete pairing | Полное сопоставление | Every required participant resolves exactly once and all identity equalities hold. | Каждый обязательный участник разрешается ровно один раз, и все равенства идентичностей соблюдены. |
| c6.pairingstate.002 | incomplete | Incomplete pairing | Неполное сопоставление | At least one required participant is absent or unresolved. | Как минимум один обязательный участник отсутствует или не разрешается. |
| c6.pairingstate.003 | duplicate | Duplicate pairing | Дублирующее сопоставление | More than one active participant occupies a cardinality-one pairing position. | Более одного активного участника занимает позицию сопоставления с кардинальностью один. |
| c6.pairingstate.004 | valid-conflict | Complete pairing with valid conflict | Полное сопоставление с действительным конфликтом | Participants resolve correctly, but retained valid evidence supports incompatible semantic interpretations. | Участники разрешаются корректно, но сохранённые действительные свидетельства поддерживают несовместимые семантические интерпретации. |
| c6.pairingstate.005 | invalid | Invalid pairing | Недопустимое сопоставление | The pairing violates Operation, RoomCase, material-state, revision, scope, applicability or ownership boundaries. | Сопоставление нарушает границы Operation, RoomCase, материального состояния, ревизии, скоупа, применимости или владения. |

### 5.5 Compatibility disposition

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.compatdisposition.001 | allowed | Allowed | Разрешено | The combination is valid when ordinary traceability and integrity requirements hold. | Комбинация действительна при соблюдении обычных требований прослеживаемости и целостности. |
| c6.compatdisposition.002 | conditionally-allowed | Conditionally allowed | Условно разрешено | The combination is valid only under the exact condition stated in the matrix cell. | Комбинация действительна только при точном условии, указанном в ячейке матрицы. |
| c6.compatdisposition.003 | invalid | Invalid | Недопустимо | The combination is prohibited and blocks sealing. | Комбинация запрещена и блокирует запечатывание. |
| c6.compatdisposition.004 | not-applicable | Not applicable | Неприменимо | The dimension does not apply to this semantic subject. | Измерение не применяется к данному семантическому субъекту. |

### 5.6 Basis effect

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.basiseffect.001 | supports-specific-result | Supports a specific result | Поддерживает конкретный результат | Contract-4 basis .001 supports a specific candidate but does not by itself prove uniqueness across the complete candidate set. | Базис Contract 4 .001 поддерживает конкретного кандидата, но сам по себе не доказывает его уникальность во всём наборе кандидатов. |
| c6.basiseffect.002 | contradicts-specific-result | Contradicts a specific result | Противоречит конкретному результату | Contract-4 basis .002 eliminates or weakens a specific candidate and requires candidate-set re-evaluation; it is not a direct unit outcome. | Базис Contract 4 .002 исключает или ослабляет конкретного кандидата и требует повторной оценки набора кандидатов; он не является прямым исходом единицы. |
| c6.basiseffect.003 | coverage-limitation | Coverage limitation | Ограничение покрытия | Contract-4 bases .003-.006 may support not-determinable only when no valid specific result or unresolved contradiction remains. | Базисы Contract 4 .003-.006 могут поддерживать исход «неопределимо» только при отсутствии действительного конкретного результата и неразрешённого противоречия. |
| c6.basiseffect.004 | valid-contradiction | Valid contradiction | Действительное противоречие | Contract-4 basis .007 requires preserved conflict and governed adjudication before a terminal outcome. | Базис Contract 4 .007 требует сохранения конфликта и управляемого разрешения до конечного исхода. |
| c6.basiseffect.005 | invalid-evidence-or-runtime | Invalid evidence or runtime | Недопустимое свидетельство или среда выполнения | Contract-4 bases .008-.012, .014 and .015 make the unit unsealable until corrected; they are not determinability outcomes. | Базисы Contract 4 .008-.012, .014 и .015 делают единицу незапечатываемой до исправления; они не являются исходами определимости. |
| c6.basiseffect.006 | duplicate-normalization | Duplicate normalization | Нормализация дубликатов | Contract-4 basis .013 requires duplicate collapse to one support unit followed by complete re-derivation. | Базис Contract 4 .013 требует сведения дубликатов к одной единице поддержки с последующим полным повторным выводом. |
| c6.basiseffect.007 | sufficient-negative-result | Sufficient negative result | Достаточный отрицательный результат | Contract-4 basis .016 may support a determinable negative or empty result only for fields and imported domains that explicitly permit it. | Базис Contract 4 .016 может поддерживать определимый отрицательный или пустой результат только для полей и импортированных доменов, которые явно это допускают. |

### 5.7 Multi-view state

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.multiviewstate.001 | consistent | Consistent views | Согласованные ракурсы | Admitted views support one compatible semantic interpretation. | Допущенные ракурсы поддерживают одну совместимую семантическую интерпретацию. |
| c6.multiviewstate.002 | complementary | Complementary views | Дополняющие ракурсы | Admitted views add non-conflicting evidence or distinct compatible members. | Допущенные ракурсы добавляют непротиворечивые свидетельства или разные совместимые элементы. |
| c6.multiviewstate.003 | duplicate-only | Duplicate-only views | Только дублирующие ракурсы | The apparent support is duplicate or overlapping and must be normalized before derivation. | Видимая поддержка является дублирующей или перекрывающейся и должна быть нормализована до вывода. |
| c6.multiviewstate.004 | contradictory | Contradictory views | Противоречивые ракурсы | Admitted views support incompatible interpretations of the same semantic aspect. | Допущенные ракурсы поддерживают несовместимые интерпретации одного семантического аспекта. |
| c6.multiviewstate.005 | invalid-context | Invalid view context | Недопустимый контекст ракурсов | The view set crosses RoomCase, Operation, material state or an excluded modality boundary. | Набор ракурсов пересекает границу RoomCase, Operation, материального состояния или исключённой модальности. |

Every owned stable ID is language-neutral and immutable after eventual
acceptance. No token or localized label substitutes for an ID.
## 6. Annotation-Unit Type Registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.unittype.001 | entity-subtype-unit | Entity-subtype unit | Единица подтипа сущности | Governs determinability of a matched entity's Contract-1-owned subtype assignment without minting subtype vocabulary. | Управляет определимостью назначения подтипа сопоставленной сущности, принадлежащего Contract 1, без создания словаря подтипов. |
| c6.unittype.002 | confidence-unit | Confidence unit | Единица уверенности | Governs determinability of one Contract-5 ConfidenceAssertion revision without changing its state, source or transformation. | Управляет определимостью одной ревизии ConfidenceAssertion из Contract 5 без изменения её состояния, источника или преобразования. |
| c6.unittype.003 | provenance-unit | Provenance unit | Единица происхождения | Governs determinability of one Contract-4 ProvenanceAttachmentRecord revision without changing the imported provenance value. | Управляет определимостью одной ревизии ProvenanceAttachmentRecord из Contract 4 без изменения импортированного значения происхождения. |
| c6.unittype.004 | best-effort-field-unit | Best-effort-field unit | Единица best-effort поля | Governs determinability of one Contract-4 BestEffortFieldAssessmentRecord and, where required, its individual value or tag members. | Управляет определимостью одной записи BestEffortFieldAssessmentRecord из Contract 4 и, когда требуется, её отдельных значений или тегов. |

### 6.1 Complete unit-family contract

| Unit type | Token | Semantic subject | Required imports | Allowed granularity | Cardinality | Pairing rule | Allowed outcomes | Outcome-specific invariant |
|---|---|---|---|---|---|---|---|---|
| c6.unittype.001 | entity-subtype-unit | Matched entity subtype assignment | Contract-1 subtype candidates; Contract-6 basis-link record | assessment-level required; member-level conditional per candidate | Exactly 1 assessment per matched entity revision; 0..N candidate members | c6.pairingrule.001 | All three outcomes at assessment level | Determinable: exactly one resolved subtype. Not-determinable/inconclusive: zero resolved subtype. |
| c6.unittype.002 | confidence-unit | One Contract-5 ConfidenceAssertion revision | ConfidenceAssertion; Contract-6 basis-link record to subject evidence | assessment-level only | Exactly 1 unit per ConfidenceAssertion revision | c6.pairingrule.002 | All three outcomes | Outcome concerns determinability of the assertion annotation, never rewrites its c5 state/source/transformation. |
| c6.unittype.003 | provenance-unit | One Contract-4 ProvenanceAttachmentRecord revision | ProvenanceAttachmentRecord; Contract-6 basis-link record to imported evidence | assessment-level only | Exactly 1 unit per provenance-bearing annotation revision | c6.pairingrule.003 | All three outcomes | Outcome concerns determinability of the provenance annotation, never replaces provenance. |
| c6.unittype.004 | best-effort-field-unit | One Contract-4 BestEffortFieldAssessmentRecord and its value members | Exact Contract-4 assessment, value revisions and DeterminabilityEvidenceBasisRecord | assessment-level required; member-level conditional for produced/candidate values | Exactly 1 assessment unit per applicable owner+field; 0..N member units according to imported field cardinality | c6.pairingrule.004 | All three outcomes | Direct Contract-4 basis-record consumption is permitted only here; parent sealing requires member closure. |

### 6.2 Corrected subtype cardinality

For `c6.unittype.001`:

- `determinable` requires exactly one resolved Contract-1 subtype;
- `not-determinable` requires zero resolved subtype and a complete,
  traceable basis showing why no subtype can be determined;
- `inconclusive` requires zero resolved subtype and preserved incompatible
  candidates plus a completed inconclusive adjudication;
- no unknown substitute namespace is minted.
## 7. Annotation-Unit Identity Model

### 7.1 Semantic components

| Semantic component | Cardinality | Normative requirement |
|---|---|---|
| annotationUnitIdentity | exactly 1 | Deterministic semantic identity for one immutable Contract-6 annotation-unit revision. |
| recordTypeIdentity | exactly 1 | One c6.recordtype.001 for the unit itself. |
| operationIdentity | exactly 1 | Must match every linked participant and evidence reference. |
| roomCaseIdentity | exactly 1 | Exactly one RoomCase; cross-RoomCase pairing is invalid. |
| subjectIdentity | exactly 1 | Resolvable imported subject revision identity. |
| subjectKindIdentity | exactly 1 | Resolvable imported subject-kind identity; Contract 6 does not mint upstream subject kinds. |
| unitTypeIdentity | exactly 1 | One c6.unittype.* identity. |
| unitGranularityIdentity | exactly 1 | One c6.unitgranularity.* identity compatible with unit type. |
| viewScopeIdentity | exactly 1 | One c6.viewscope.* identity. |
| importedSemanticIdentity | 1..N conditional | Subtype candidate, ConfidenceAssertion, provenance attachment, field assessment or value identity as required by unit type. |
| memberIdentity | 0..1 conditional | Mandatory for member-level units; prohibited for pure assessment-level unit types. |
| revisionIdentity | exactly 1 | Immutable revision identity. |
| predecessorAnnotationUnitIdentity | 0..1 | Mandatory on supersession; no cycles. |
| basisLinkRecordIdentity | exactly 1 | One resolvable c6.recordtype.003 or direct Contract-4 determinability record link under §10.1. |
| pairingRecordIdentity | exactly 1 | One c6.recordtype.002. |
| outcomeDecisionRecordIdentity | 0..1 | Exactly 1 only after a terminal outcome is decided. |
| sealingRecordIdentity | 0..1 | Exactly 1 only when sealed. |
| adjudicationRecordIdentity | 0..1 conditional | Required when an adjudication trigger occurs. |
| traceReference | exactly 1 | Diagnostic trace without hidden chain-of-thought. |
| integrityReference | exactly 1 | Content/integrity compatibility reference. |
| historyReference | exactly 1 | Immutable revision history. |

### 7.2 Identity invariants

Identity construction must prevent:

- duplicate active units;
- subject rebinding;
- cross-Operation or cross-RoomCase pairing;
- mixed physical rooms or material states;
- per-view/consolidated identity collapse;
- assessment/member identity collapse;
- cyclic supersession;
- same-revision double sealing;
- post-seal mutation.

Component labels are semantic only. Contract 10 owns final wire names.
## 8. Pairing Architecture

### 8.1 Pairing-rule registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.pairingrule.001 | entity-subtype-pairing | Entity-subtype pairing | Сопоставление подтипа сущности | Pairs one matched entity assessment with its Contract-1 subtype candidate members using Operation, RoomCase, entity, revision and scope equality. | Сопоставляет одну оценку сопоставленной сущности с её кандидатами подтипа Contract 1 по равенству Operation, RoomCase, сущности, ревизии и скоупа. |
| c6.pairingrule.002 | confidence-pairing | Confidence pairing | Сопоставление уверенности | Pairs one eligible subject revision with exactly one compatible Contract-5 ConfidenceAssertion revision. | Сопоставляет одну допустимую ревизию субъекта ровно с одной совместимой ревизией ConfidenceAssertion из Contract 5. |
| c6.pairingrule.003 | provenance-pairing | Provenance pairing | Сопоставление происхождения | Pairs one provenance-bearing annotation revision with exactly one compatible Contract-4 ProvenanceAttachmentRecord revision. | Сопоставляет одну ревизию аннотации, несущей происхождение, ровно с одной совместимой ревизией ProvenanceAttachmentRecord из Contract 4. |
| c6.pairingrule.004 | best-effort-field-pairing | Best-effort-field pairing | Сопоставление best-effort поля | Pairs one Contract-4 field assessment with its zero or more imported value members and its exact assessment-level basis record. | Сопоставляет одну оценку поля Contract 4 с её нулём или более импортированными элементами значений и точной записью базиса уровня оценки. |

### 8.2 Unit-family pairing procedures

| Pairing rule | Unit type | Participants | Required identity equality | Cardinality | Missing handling | Duplicate handling | Conflict handling |
|---|---|---|---|---|---|---|---|
| c6.pairingrule.001 | c6.unittype.001 | Matched entity assessment ↔ 0..N subtype candidate members | operation, RoomCase, entity, revision, consolidated scope | 1 assessment : 0..N candidates; determinable requires exactly 1 selected candidate | Missing candidate-set record = incomplete; empty evaluated set may support not-determinable only with valid basis | Duplicate candidate identity normalized or invalid if semantics differ | Conflicting candidates preserved and adjudicated |
| c6.pairingrule.002 | c6.unittype.002 | Subject annotation ↔ ConfidenceAssertion revision | operation, RoomCase, subject, subject kind, assertion revision | exactly 1:1 | Missing assertion = incomplete/unsealable | Duplicate same revision = duplicate/invalid | Contract-5 internal conflict remains upstream-owned; no c5 value rewrite |
| c6.pairingrule.003 | c6.unittype.003 | Target annotation revision ↔ ProvenanceAttachmentRecord | operation, RoomCase, target, target kind, provenance revision | exactly 1:1 | Missing provenance record = incomplete/unsealable | Duplicate provenance attachment = duplicate/invalid | Provenance/evidence conflict preserved; no provenance rewrite |
| c6.pairingrule.004 | c6.unittype.004 | BestEffortFieldAssessmentRecord ↔ 0..N value members ↔ exact Contract-4 basis record | operation, RoomCase, owner, field, assessment revision | 1 assessment : 0..N values under imported field cardinality | Missing applicable assessment or basis record = incomplete/unsealable | Duplicate assessment/value revision = duplicate/invalid | Value/member conflict preserved; assessment outcome sealed only after member closure |

### 8.3 Pairing-record requirements

Each `c6.recordtype.002` resolves:

```text
pairingRecordIdentity;
annotationUnitIdentity;
pairingRuleIdentity;
pairingStateIdentity;
participantIdentities[1..N];
requiredIdentityEqualityResults[1..N];
duplicateNormalizationReferences[0..N];
conflictReferences[0..N];
revisionIdentity;
predecessorPairingRecordIdentity[0..1];
traceReference;
integrityReference;
historyReference.
```

Pairing is never based only on display label, provider order, array position
or image index.
## 9. Determinability Outcome Registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.outcome.001 | determinable | Determinable | Определимо | Valid, traceable and non-contradictory retained basis supports exactly one admissible semantic result, including an explicitly supported negative or empty result where the imported domain permits it. | Действительный, прослеживаемый и непротиворечивый сохранённый базис поддерживает ровно один допустимый семантический результат, включая явно подтверждённый отрицательный или пустой результат там, где это допускает импортированный домен. |
| c6.outcome.002 | not-determinable | Not determinable | Неопределимо | Valid retained basis shows that no admissible result can be determined from the admitted coverage, without unresolved contradiction and without an invalid record defect. | Действительный сохранённый базис показывает, что по допущенному покрытию нельзя определить ни один допустимый результат, при отсутствии неразрешённого противоречия и дефекта недействительной записи. |
| c6.outcome.003 | inconclusive | Inconclusive | Неоднозначно | Valid retained evidence remains irreducibly conflicting or ambiguous, and a completed governed adjudication explicitly affirms that ambiguity as the terminal semantic result. | Действительные сохранённые свидетельства остаются неустранимо противоречивыми или неоднозначными, и завершённое управляемое разрешение явно подтверждает эту неоднозначность как конечный семантический результат. |

### 9.1 Outcome invariants

The three outcomes are:

- mutually exclusive at one sealed annotation-unit revision;
- collectively complete for a **sealable** unit;
- non-probabilistic;
- not confidence levels;
- not quality scores;
- not ETAP pass/fail results.

No fourth outcome is permitted.

### 9.2 Completed inconclusive versus process failure

`c6.outcome.003` is a completed semantic decision over valid, complete,
retained evidence. It may be sealed only when governed adjudication
affirmatively selects `c6.adjudicationdisposition.003`.

`c6.adjudicationdisposition.004` (`unable-to-complete`) is not an outcome.
It leaves the unit unsealed and triggers escalation. Timeout, missing
authority, invalid evidence or incomplete pairing never silently become
`inconclusive`.
## 10. Outcome Derivation from Contract-4 Basis

### 10.1 Basis-link record models

For `c6.unittype.004`, the unit links the exact Contract-4
`DeterminabilityEvidenceBasisRecord` and its `fieldAssessmentIdentity`.

For `c6.unittype.001–003`, one `c6.recordtype.003` contains:

```text
basisLinkRecordIdentity;
annotationUnitIdentity;
basisIdentities[1..N];
linkedEvidenceOrProvenanceIdentities[1..N];
roomCaseIdentity;
operationIdentity;
unitSubjectIdentity;
basisApplicabilityRationale;
revisionIdentity;
predecessorBasisLinkRecordIdentity[0..1];
traceReference;
integrityReference;
historyReference.
```

The bridge cannot create a new basis ID, reinterpret a basis or pretend that
a non-field unit has a Contract-4 field assessment.

### 10.2 Imported basis-effect model

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.basiseffect.001 | supports-specific-result | Supports a specific result | Поддерживает конкретный результат | Contract-4 basis .001 supports a specific candidate but does not by itself prove uniqueness across the complete candidate set. | Базис Contract 4 .001 поддерживает конкретного кандидата, но сам по себе не доказывает его уникальность во всём наборе кандидатов. |
| c6.basiseffect.002 | contradicts-specific-result | Contradicts a specific result | Противоречит конкретному результату | Contract-4 basis .002 eliminates or weakens a specific candidate and requires candidate-set re-evaluation; it is not a direct unit outcome. | Базис Contract 4 .002 исключает или ослабляет конкретного кандидата и требует повторной оценки набора кандидатов; он не является прямым исходом единицы. |
| c6.basiseffect.003 | coverage-limitation | Coverage limitation | Ограничение покрытия | Contract-4 bases .003-.006 may support not-determinable only when no valid specific result or unresolved contradiction remains. | Базисы Contract 4 .003-.006 могут поддерживать исход «неопределимо» только при отсутствии действительного конкретного результата и неразрешённого противоречия. |
| c6.basiseffect.004 | valid-contradiction | Valid contradiction | Действительное противоречие | Contract-4 basis .007 requires preserved conflict and governed adjudication before a terminal outcome. | Базис Contract 4 .007 требует сохранения конфликта и управляемого разрешения до конечного исхода. |
| c6.basiseffect.005 | invalid-evidence-or-runtime | Invalid evidence or runtime | Недопустимое свидетельство или среда выполнения | Contract-4 bases .008-.012, .014 and .015 make the unit unsealable until corrected; they are not determinability outcomes. | Базисы Contract 4 .008-.012, .014 и .015 делают единицу незапечатываемой до исправления; они не являются исходами определимости. |
| c6.basiseffect.006 | duplicate-normalization | Duplicate normalization | Нормализация дубликатов | Contract-4 basis .013 requires duplicate collapse to one support unit followed by complete re-derivation. | Базис Contract 4 .013 требует сведения дубликатов к одной единице поддержки с последующим полным повторным выводом. |
| c6.basiseffect.007 | sufficient-negative-result | Sufficient negative result | Достаточный отрицательный результат | Contract-4 basis .016 may support a determinable negative or empty result only for fields and imported domains that explicitly permit it. | Базис Contract 4 .016 может поддерживать определимый отрицательный или пустой результат только для полей и импортированных доменов, которые явно это допускают. |

### 10.3 Complete basis-to-outcome compatibility matrix

| Contract-4 basis | Token | Basis effect | Determinable disposition | Determinable condition | Not-determinable disposition | Not-determinable condition | Inconclusive disposition | Inconclusive condition |
|---|---|---|---|---|---|---|---|---|
| c4.determinabilitybasis.001 | positive-supporting-evidence | c6.basiseffect.001 | c6.compatdisposition.002 | Exactly one admissible result remains after complete candidate/member-set evaluation and no unresolved valid contradiction exists. | c6.compatdisposition.003 | Positive support is not evidence that no result can be determined. | c6.compatdisposition.003 | Positive support alone is not unresolved ambiguity. |
| c4.determinabilitybasis.002 | negative-or-contradictory-evidence | c6.basiseffect.002 | c6.compatdisposition.002 | After contradicted candidates are eliminated, exactly one admissible result remains. | c6.compatdisposition.002 | All admissible candidates are validly eliminated and the unit-specific domain permits the resulting absence conclusion. | c6.compatdisposition.002 | Valid incompatible candidates remain after complete re-evaluation and governed adjudication affirms inconclusive. |
| c4.determinabilitybasis.003 | missing-observation-coverage | c6.basiseffect.003 | c6.compatdisposition.003 | Missing observation coverage cannot directly support a specific result. | c6.compatdisposition.002 | No valid specific result or unresolved contradiction remains and coverage is insufficient. | c6.compatdisposition.003 | Mere absence of coverage is not ambiguity. |
| c4.determinabilitybasis.004 | occlusion | c6.basiseffect.003 | c6.compatdisposition.003 | Occlusion cannot directly support a specific result. | c6.compatdisposition.002 | No valid specific result or unresolved contradiction remains and occlusion blocks determination. | c6.compatdisposition.003 | Occlusion alone is not conflicting evidence. |
| c4.determinabilitybasis.005 | out-of-frame-limitation | c6.basiseffect.003 | c6.compatdisposition.003 | Out-of-frame limitation cannot directly support a specific result. | c6.compatdisposition.002 | No valid specific result or unresolved contradiction remains and all relevant content is out of frame. | c6.compatdisposition.003 | Out-of-frame limitation alone is not ambiguity. |
| c4.determinabilitybasis.006 | insufficient-resolution-or-visual-quality | c6.basiseffect.003 | c6.compatdisposition.003 | Insufficient quality cannot directly support a specific result. | c6.compatdisposition.002 | No valid specific result or unresolved contradiction remains and quality is insufficient. | c6.compatdisposition.003 | Low quality alone is not conflicting evidence. |
| c4.determinabilitybasis.007 | cross-view-inconsistency | c6.basiseffect.004 | c6.compatdisposition.002 | Governed adjudication resolves the cross-view conflict to exactly one result. | c6.compatdisposition.002 | Governed adjudication determines that no result is supportable. | c6.compatdisposition.002 | Complete valid conflict remains and adjudication affirmatively seals inconclusive. |
| c4.determinabilitybasis.008 | source-lineage-failure | c6.basiseffect.005 | c6.compatdisposition.003 | Source-lineage failure makes the unit unsealable. | c6.compatdisposition.003 | Source-lineage failure is a record defect, not not-determinable. | c6.compatdisposition.003 | Source-lineage failure is not a semantic ambiguity outcome. |
| c4.determinabilitybasis.009 | unsupported-inference | c6.basiseffect.005 | c6.compatdisposition.003 | Unsupported inference makes the unit unsealable. | c6.compatdisposition.003 | Unsupported inference is a record defect, not not-determinable. | c6.compatdisposition.003 | Unsupported inference is not a valid ambiguity outcome. |
| c4.determinabilitybasis.010 | provider-only-assertion-without-sufficient-grounding | c6.basiseffect.005 | c6.compatdisposition.003 | Ungrounded provider assertion makes the unit unsealable. | c6.compatdisposition.003 | Ungrounded provider assertion is invalid evidence, not not-determinable. | c6.compatdisposition.003 | Ungrounded provider assertion is not a valid ambiguity outcome. |
| c4.determinabilitybasis.011 | derivation-chain-break | c6.basiseffect.005 | c6.compatdisposition.003 | Derivation-chain break makes the unit unsealable. | c6.compatdisposition.003 | Derivation-chain break is invalid evidence, not not-determinable. | c6.compatdisposition.003 | Derivation-chain break is not a valid ambiguity outcome. |
| c4.determinabilitybasis.012 | evidence-integrity-failure | c6.basiseffect.005 | c6.compatdisposition.003 | Evidence-integrity failure makes the unit unsealable. | c6.compatdisposition.003 | Evidence-integrity failure is invalid evidence, not not-determinable. | c6.compatdisposition.003 | Evidence-integrity failure is not a valid ambiguity outcome. |
| c4.determinabilitybasis.013 | duplicate-only-support | c6.basiseffect.006 | c6.compatdisposition.002 | After duplicates collapse to one support unit, complete re-derivation leaves exactly one result. | c6.compatdisposition.002 | After duplicate normalization, no sufficient unique support remains and no conflict remains. | c6.compatdisposition.002 | After duplicate normalization, valid incompatible support remains and adjudication affirms inconclusive. |
| c4.determinabilitybasis.014 | unsupported-source-modality | c6.basiseffect.005 | c6.compatdisposition.003 | Excluded source modality cannot support a Contract-6 result. | c6.compatdisposition.003 | Excluded source modality is a runtime violation, not not-determinable. | c6.compatdisposition.003 | Excluded source modality is not a valid ambiguity outcome. |
| c4.determinabilitybasis.015 | mixed-room-or-material-state-source | c6.basiseffect.005 | c6.compatdisposition.003 | Mixed room/material state cannot support a Contract-6 result. | c6.compatdisposition.003 | Mixed room/material state is a runtime violation, not not-determinable. | c6.compatdisposition.003 | Mixed room/material state is not a valid ambiguity outcome. |
| c4.determinabilitybasis.016 | sufficient-negative-evidence | c6.basiseffect.007 | c6.compatdisposition.002 | Only for c4.besteffort.field.003/.006/.007/.008 and an imported domain that explicitly permits the negative/empty result, with exact assessment evidence grounding. | c6.compatdisposition.003 | A supported negative/empty value is a determined result, not absence of determinability. | c6.compatdisposition.003 | Sufficient negative evidence alone is not ambiguity. |

### 10.4 Exact Contract-4 field applicability

| Field ID | Applicable basis IDs | Special .016 boundary | Contract-6 consumption |
|---|---|---|---|
| c4.besteffort.field.001 | .001–.015 as applicable | No .016 | Direct Contract-4 DeterminabilityEvidenceBasisRecord only. |
| c4.besteffort.field.002 | .001–.015 as applicable | No .016 | Direct Contract-4 DeterminabilityEvidenceBasisRecord only. |
| c4.besteffort.field.003 | .001–.016 as applicable | .016 may support no attachment value when sufficient negative evidence is grounded. | Direct Contract-4 record; negative result is determinable, not not-determinable. |
| c4.besteffort.field.004 | .001–.015 as applicable | No .016 | Direct Contract-4 record; missing boundary/scale/profile evidence handled without fabricated extent. |
| c4.besteffort.field.005 | .001–.015 as applicable | No .016 | Same as field .004 for FreeSpaceRegion. |
| c4.besteffort.field.006 | .001–.016 as applicable | .016 distinguishes a supported zero-tag assessment from missing coverage. | Applied at assessment and per-tag member level. |
| c4.besteffort.field.007 | .001–.016 as applicable | .016 may support not-relevant; missing evidence yields zero value, not false. | Base state remains Contract-4-owned. |
| c4.besteffort.field.008 | .001–.016 as applicable | .016 may support a grounded empty role set; role absence never implies not-relevant. | Applied per role member and parent assessment. |

### 10.5 Anti-shortcut rules

Outcome derivation never:

- treats `.001` as proof of uniqueness without complete candidate/member-set
  evaluation;
- maps `.002` directly to inconclusive;
- maps `.013` directly to not-determinable before duplicate normalization;
- maps `.014` or `.015` to an outcome;
- uses evidence quantity, confidence or provenance as an outcome shortcut;
- treats `.016` as generic absence or missing coverage.
## 11. Confidence Compatibility

Contract 6 consumes the Contract-5 ordinal model unchanged.

### 11.1 Confidence state × outcome

| Contract-5 state | Contract-6 outcome | Disposition | Exact condition |
|---|---|---|---|
| c5.state.001 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; known_with_confidence does not establish determinability. |
| c5.state.001 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; known_with_confidence does not establish determinability. |
| c5.state.001 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; known_with_confidence does not establish determinability. |
| c5.state.002 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; known_with_uncertainty is not inconclusive. |
| c5.state.002 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; known_with_uncertainty is not inconclusive. |
| c5.state.002 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; known_with_uncertainty is not inconclusive. |
| c5.state.003 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; unknown_not_inferable is not automatically not-determinable. |
| c5.state.003 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; unknown_not_inferable is not automatically not-determinable. |
| c5.state.003 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only when Contract-6 basis independently supports the outcome; unknown_not_inferable is not automatically not-determinable. |

### 11.2 Confidence source × outcome

| Contract-5 source | Contract-6 outcome | Disposition | Exact condition |
|---|---|---|---|
| c5.source.001 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only with independently valid basis; provider-supplied metadata does not decide the outcome. |
| c5.source.001 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only with independently valid basis; provider-supplied metadata does not decide the outcome. |
| c5.source.001 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only with independently valid basis; provider-supplied metadata does not decide the outcome. |
| c5.source.002 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only with independently valid basis and only while the exact heuristic method remains authorized under Contract 5; Contract 6 does not activate it. |
| c5.source.002 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only with independently valid basis and only while the exact heuristic method remains authorized under Contract 5; Contract 6 does not activate it. |
| c5.source.002 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only with independently valid basis and only while the exact heuristic method remains authorized under Contract 5; Contract 6 does not activate it. |
| c5.source.003 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only with independently valid basis; missing confidence metadata does not decide the outcome. |
| c5.source.003 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only with independently valid basis; missing confidence metadata does not decide the outcome. |
| c5.source.003 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only with independently valid basis; missing confidence metadata does not decide the outcome. |

### 11.3 Hard invariants

- confidence does not decide determinability by itself;
- determinability never edits a `ConfidenceAssertion`;
- `known_with_confidence` is not evidence sufficiency;
- `known_with_uncertainty` is not `inconclusive`;
- `unknown_not_inferable` is not automatically `not-determinable`;
- missing confidence metadata is not a Contract-6 outcome;
- Contract 6 does not activate heuristic confidence.
## 12. Provenance and Best-Effort Compatibility

### 12.1 Provenance × outcome

| Contract-4 provenance | Contract-6 outcome | Disposition | Exact condition |
|---|---|---|---|
| c4.provenance.001 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.001 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.001 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.002 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.002 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.002 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.003 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.003 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.003 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.004 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.004 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |
| c4.provenance.004 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only when the complete Contract-6 basis independently supports the outcome; provenance never decides determinability by itself. |

Provenance never implies determinability, and determinability never replaces
or upgrades provenance.

### 12.2 Best-effort assessment/member model

The parent `best-effort-field-unit` corresponds to one
`BestEffortFieldAssessmentRecord`. Member-level units correspond to produced
or explicitly evaluated candidate value members.

Parent sealing rules:

- every active produced member has one resolved member unit;
- every member is sealed or superseded;
- scalar imported cardinality is preserved;
- multi-value tags/roles remain separately traceable;
- a supported zero-value assessment uses exact Contract-4 basis/evidence
  semantics;
- an unresolved member conflict blocks a deterministic parent result;
- no member may disappear silently from the parent history.

### 12.3 Contract-4 field boundary

All eight accepted fields are active; no reserved field exists. Contract 6
does not invent a ninth field. Field/value applicability, cardinality and
domain remain Contract-4-owned.
## 13. Entity-Subtype Pairing

Entity-subtype pairing consumes matched entity identity and Contract-1-owned
subtype candidates without minting vocabulary.

Distinct conditions:

- **candidate absence**: no subtype candidate was proposed;
- **unsupported candidate**: a proposed subtype is outside accepted
  applicability;
- **ambiguous candidate set**: multiple admissible candidates remain;
- **cross-view subtype conflict**: view-grounded candidates conflict;
- **entity merge/split conflict**: candidate identity depends on unresolved
  cross-view entity correspondence;
- **duplicate candidate**: the same semantic candidate was repeated.

Determinable sealing selects exactly one candidate. Not-determinable and
inconclusive seal zero subtype values and retain the complete candidate and
basis history. Commercial/dormant vocabulary leaves and ad hoc
`UNK-NODETYPE-*` namespaces are prohibited.
## 14. Multi-Image Pairing and Consolidation

Runtime remains:

```text
Operation
→ RoomCase[exactly 1]
→ ImageAsset[1..6]
→ one consolidated PerceptionResult
```

### 14.1 Multi-view state registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.multiviewstate.001 | consistent | Consistent views | Согласованные ракурсы | Admitted views support one compatible semantic interpretation. | Допущенные ракурсы поддерживают одну совместимую семантическую интерпретацию. |
| c6.multiviewstate.002 | complementary | Complementary views | Дополняющие ракурсы | Admitted views add non-conflicting evidence or distinct compatible members. | Допущенные ракурсы добавляют непротиворечивые свидетельства или разные совместимые элементы. |
| c6.multiviewstate.003 | duplicate-only | Duplicate-only views | Только дублирующие ракурсы | The apparent support is duplicate or overlapping and must be normalized before derivation. | Видимая поддержка является дублирующей или перекрывающейся и должна быть нормализована до вывода. |
| c6.multiviewstate.004 | contradictory | Contradictory views | Противоречивые ракурсы | Admitted views support incompatible interpretations of the same semantic aspect. | Допущенные ракурсы поддерживают несовместимые интерпретации одного семантического аспекта. |
| c6.multiviewstate.005 | invalid-context | Invalid view context | Недопустимый контекст ракурсов | The view set crosses RoomCase, Operation, material state or an excluded modality boundary. | Набор ракурсов пересекает границу RoomCase, Operation, материального состояния или исключённой модальности. |

### 14.2 Multi-view invariants

- each per-view contribution retains one exact ImageAsset/source lineage;
- per-view units are never independently sealed;
- the consolidated unit is a separate identity;
- duplicate views/support are normalized before derivation;
- complementary views may add evidence without upgrading provenance or
  confidence automatically;
- contradictions are preserved;
- majority vote, averaging and ungoverned best-view selection are prohibited;
- mixed room/material state and excluded modality are invalid/unsealable;
- additional images never automatically upgrade an outcome.
## 15. Sealing Lifecycle

### 15.1 Lifecycle registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.lifecycle.001 | unsealed-draft | Unsealed draft | Незапечатанный черновик | The annotation-unit revision is mutable only through creation of new internal draft revisions and is not eligible as a final result. | Ревизия единицы аннотации изменяется только созданием новых внутренних черновых ревизий и не является конечным результатом. |
| c6.lifecycle.002 | ready-for-sealing | Ready for sealing | Готово к запечатыванию | All mandatory pairing, basis, outcome and integrity prerequisites have passed. | Все обязательные предпосылки сопоставления, базиса, исхода и целостности пройдены. |
| c6.lifecycle.003 | sealed | Sealed | Запечатано | Exactly one immutable outcome is effective for the annotation-unit revision. | Для ревизии единицы аннотации действует ровно один неизменяемый исход. |
| c6.lifecycle.004 | superseded | Superseded | Заменено | A later immutable revision replaces the record for current use while preserving the historical sealed record. | Более поздняя неизменяемая ревизия заменяет запись для текущего использования, сохраняя историческую запечатанную запись. |
| c6.lifecycle.005 | invalidated | Invalidated | Признано недействительным | The historical record is retained but cannot be used as a current valid result because an integrity, authority or upstream-drift condition invalidated it. | Историческая запись сохраняется, но не может использоваться как текущий действительный результат из-за условия целостности, полномочий или дрейфа вышестоящего источника. |

### 15.2 Sealing prerequisites

A unit enters `c6.lifecycle.002` only when:

- identity and pairing are complete;
- basis links are complete and valid;
- no invalid/unsealable condition remains;
- member-level closure is complete where applicable;
- exactly one terminal outcome is supported or completed by adjudication;
- all trace, integrity and history references resolve.

A sealed unit has exactly one immutable outcome-decision record and one
sealing record. Correction creates a successor revision; reopening or
in-place mutation is prohibited.
## 16. Adjudication Architecture

### 16.1 Trigger registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.adjudicationtrigger.001 | valid-basis-conflict | Valid basis conflict | Конфликт действительных базисов | Valid retained basis supports incompatible outcomes or candidate members. | Действительный сохранённый базис поддерживает несовместимые исходы или элементы-кандидаты. |
| c6.adjudicationtrigger.002 | candidate-ambiguity | Candidate ambiguity | Неоднозначность кандидатов | Two or more admissible candidate members remain equally supported after ordinary derivation. | Два или более допустимых элемента-кандидата остаются равно поддержанными после обычного вывода. |
| c6.adjudicationtrigger.003 | cross-view-contradiction | Cross-view contradiction | Противоречие между ракурсами | Same-RoomCase views preserve incompatible observations of the same semantic aspect. | Ракурсы одного RoomCase сохраняют несовместимые наблюдения одного семантического аспекта. |
| c6.adjudicationtrigger.004 | derivation-non-uniqueness | Derivation non-uniqueness | Неуникальность вывода | The closed derivation matrices yield more than one valid terminal candidate without an invalid record defect. | Закрытые матрицы вывода дают более одного действительного конечного кандидата без дефекта недействительной записи. |
| c6.adjudicationtrigger.005 | governance-referral | Governance referral | Передача на governance-решение | A Contract-6 escalation explicitly refers a valid but unresolved semantic case to governed adjudication. | Эскалация Contract 6 явно передаёт действительный, но неразрешённый семантический случай на управляемое разрешение. |

### 16.2 Disposition registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.adjudicationdisposition.001 | affirm-determinable | Affirm determinable | Подтвердить «определимо» | Confirms exactly one result supported by the complete retained basis and records the decisive rationale. | Подтверждает ровно один результат, поддержанный полным сохранённым базисом, и фиксирует решающее обоснование. |
| c6.adjudicationdisposition.002 | affirm-not-determinable | Affirm not determinable | Подтвердить «неопределимо» | Confirms that valid coverage-limitation basis prevents any admissible result and that no unresolved contradiction remains. | Подтверждает, что действительный базис ограничения покрытия не позволяет получить допустимый результат и неразрешённых противоречий не осталось. |
| c6.adjudicationdisposition.003 | affirm-inconclusive | Affirm inconclusive | Подтвердить «неоднозначно» | Confirms that complete valid evidence remains irreducibly conflicting or ambiguous and preserves every conflict. | Подтверждает, что полные действительные свидетельства остаются неустранимо противоречивыми или неоднозначными, и сохраняет каждый конфликт. |
| c6.adjudicationdisposition.004 | unable-to-complete | Unable to complete adjudication | Невозможно завершить разрешение | Records a process or authority failure; the unit remains unsealed and no Contract-6 outcome is assigned. | Фиксирует сбой процесса или полномочий; единица остаётся незапечатанной, и исход Contract 6 не назначается. |

### 16.3 Adjudication record

Each `c6.recordtype.006` resolves:

```text
adjudicationRecordIdentity;
annotationUnitIdentity;
triggerIdentity;
completeRetainedBasisIdentities[1..N];
completeCandidateOrMemberIdentities[0..N];
adjudicatorAuthorityReference;
dispositionIdentity;
rationale;
revisionIdentity;
predecessorAdjudicationRecordIdentity[0..1];
traceReference;
integrityReference;
historyReference.
```

The Project Owner is not the routine annotation adjudicator. Contract 6
defines the semantic authority reference but does not invent staffing, UI or
annotation labor workflow.

`unable-to-complete` has no terminal outcome and leaves the unit unsealed.
## 17. Inconclusive Handling

`inconclusive` is valid only when:

1. pairing and imported identities are complete;
2. retained evidence is valid;
3. incompatible interpretations are genuinely supported;
4. contradictions remain preserved;
5. governed adjudication explicitly affirms inconclusive;
6. one immutable outcome-decision and sealing record are created.

The following are not automatically inconclusive:

- missing participant;
- missing basis record;
- invalid evidence;
- excluded modality;
- mixed RoomCase/material state;
- timeout;
- absent adjudicator authority;
- failed adjudication;
- unsupported source/domain;
- unresolvable upstream identity.

Those conditions block sealing or escalate.
## 18. Missing, Invalid and Unsealable Conditions

Outcome states are distinct from process and record defects.

Invalid/unsealable classes include:

- unknown or duplicate Contract-6 stable ID;
- missing/duplicate/rebound annotation-unit identity;
- missing or incompatible pairing participant;
- unresolvable subtype, ConfidenceAssertion, provenance, assessment, value,
  evidence or basis identity;
- invalid Contract-4 basis applicability;
- invalid use of basis `.016`;
- cross-Operation, cross-RoomCase or mixed material state;
- excluded input modality;
- duplicate view/support not normalized;
- conflicting evidence silently removed;
- per-view sealing;
- duplicate outcome or sealing record;
- invalid/cyclic supersession;
- post-seal mutation;
- incomplete localization;
- ownership, Contract-10, ETAP, implementation, learning or downstream
  authorization leak.

An invalid unit receives no Contract-6 outcome.
## 19. Compatibility and Derivation Matrices

### 19.1 Unit type × required import

| Unit type | Contract 1 | Contract 4 | Contract 5 | Runtime identities | Condition |
|---|---|---|---|---|---|
| c6.unittype.001 | required: subtype candidates | required through c6 basis-link references only | not applicable | Operation + RoomCase + entity | Contract-4 field-assessment record is prohibited for this unit. |
| c6.unittype.002 | not applicable | required through c6 basis-link references only | required: ConfidenceAssertion | Operation + RoomCase + subject | Contract-5 assertion remains immutable. |
| c6.unittype.003 | not applicable | required: ProvenanceAttachmentRecord plus c6 basis-link | not applicable | Operation + RoomCase + target | Provenance remains Contract-4-owned. |
| c6.unittype.004 | not applicable | required: field assessment/value/basis record | conditional: confidence attached to produced value | Operation + RoomCase + owner | Direct Contract-4 determinability record consumption is allowed only here. |

### 19.2 Unit type × granularity

| Unit type | Assessment level | Member level | Condition |
|---|---|---|---|
| c6.unittype.001 | c6.compatdisposition.001 | c6.compatdisposition.002 | Member level is used per subtype candidate when a candidate set exists. |
| c6.unittype.002 | c6.compatdisposition.001 | c6.compatdisposition.004 | ConfidenceAssertion is one assessment-level annotation unit. |
| c6.unittype.003 | c6.compatdisposition.001 | c6.compatdisposition.004 | Provenance attachment is one assessment-level annotation unit. |
| c6.unittype.004 | c6.compatdisposition.001 | c6.compatdisposition.002 | Member level is required for produced/candidate values and multi-value tags/roles. |

### 19.3 Unit type × pairing rule

| Unit type | Pairing rule |
|---|---|
| c6.unittype.001 | c6.pairingrule.001 |
| c6.unittype.002 | c6.pairingrule.002 |
| c6.unittype.003 | c6.pairingrule.003 |
| c6.unittype.004 | c6.pairingrule.004 |

### 19.4 Unit type × outcome

| Unit type | Outcome | Disposition | Condition |
|---|---|---|---|
| c6.unittype.001 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.001 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.001 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.002 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.002 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.002 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.003 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.003 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.003 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.004 | c6.outcome.001 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.004 | c6.outcome.002 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |
| c6.unittype.004 | c6.outcome.003 | c6.compatdisposition.002 | Allowed only after all unit-type-specific pairing, basis, granularity, adjudication and sealing prerequisites pass. |

### 19.5 Contract-4 basis × outcome

The complete matrix is normative in §10.3 and is not duplicated with
different wording here.

### 19.6 Confidence state × outcome

The complete matrix is normative in §11.1.

### 19.7 Confidence source × outcome

The complete matrix is normative in §11.2.

### 19.8 Provenance × outcome

The complete matrix is normative in §12.1.

### 19.9 Pairing state × sealing eligibility

| Pairing state | Disposition | Exact condition |
|---|---|---|
| c6.pairingstate.001 | c6.compatdisposition.001 | Eligible after basis completeness, outcome uniqueness/adjudication and all other sealing prerequisites pass. |
| c6.pairingstate.002 | c6.compatdisposition.003 | Ineligible; missing required participant or identity. |
| c6.pairingstate.003 | c6.compatdisposition.003 | Ineligible until exact duplicates are normalized or semantic duplicates are corrected. |
| c6.pairingstate.004 | c6.compatdisposition.002 | Eligible only after complete governed adjudication returns a terminal outcome. |
| c6.pairingstate.005 | c6.compatdisposition.003 | Ineligible; invalid cross-context, revision, integrity or ownership state. |

### 19.10 Complete lifecycle transition matrix — 5 × 5

| From lifecycle | To lifecycle | Disposition | Exact condition |
|---|---|---|---|
| c6.lifecycle.001 | c6.lifecycle.001 | c6.compatdisposition.003 | In-place self-transition would hide a revision or sealing event; create a new immutable revision where applicable. |
| c6.lifecycle.001 | c6.lifecycle.002 | c6.compatdisposition.001 | All readiness prerequisites are satisfied. |
| c6.lifecycle.001 | c6.lifecycle.003 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.001 | c6.lifecycle.004 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.001 | c6.lifecycle.005 | c6.compatdisposition.001 | A draft defect or invalid upstream dependency is recorded. |
| c6.lifecycle.002 | c6.lifecycle.001 | c6.compatdisposition.002 | A pre-seal check fails; create a new draft revision, preserving history. |
| c6.lifecycle.002 | c6.lifecycle.002 | c6.compatdisposition.003 | In-place self-transition would hide a revision or sealing event; create a new immutable revision where applicable. |
| c6.lifecycle.002 | c6.lifecycle.003 | c6.compatdisposition.001 | Exactly one terminal outcome and one valid sealing record exist. |
| c6.lifecycle.002 | c6.lifecycle.004 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.002 | c6.lifecycle.005 | c6.compatdisposition.001 | A sealing prerequisite fails materially. |
| c6.lifecycle.003 | c6.lifecycle.001 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.003 | c6.lifecycle.002 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.003 | c6.lifecycle.003 | c6.compatdisposition.003 | In-place self-transition would hide a revision or sealing event; create a new immutable revision where applicable. |
| c6.lifecycle.003 | c6.lifecycle.004 | c6.compatdisposition.001 | A separately created successor revision becomes active. |
| c6.lifecycle.003 | c6.lifecycle.005 | c6.compatdisposition.001 | A material defect or upstream invalidation is recorded without mutating history. |
| c6.lifecycle.004 | c6.lifecycle.001 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.004 | c6.lifecycle.002 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.004 | c6.lifecycle.003 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.004 | c6.lifecycle.004 | c6.compatdisposition.001 | Historical superseded state remains immutable. |
| c6.lifecycle.004 | c6.lifecycle.005 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.005 | c6.lifecycle.001 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.005 | c6.lifecycle.002 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.005 | c6.lifecycle.003 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.005 | c6.lifecycle.004 | c6.compatdisposition.003 | Transition is not defined by the closed lifecycle; direct mutation, reopening or history reversal is prohibited. |
| c6.lifecycle.005 | c6.lifecycle.005 | c6.compatdisposition.001 | Historical invalidated state remains immutable. |

### 19.11 Adjudication trigger × disposition — 5 × 4

| Trigger | Disposition target | Compatibility | Exact condition |
|---|---|---|---|
| c6.adjudicationtrigger.001 | c6.adjudicationdisposition.001 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.001 | c6.adjudicationdisposition.002 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.001 | c6.adjudicationdisposition.003 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.001 | c6.adjudicationdisposition.004 | c6.compatdisposition.002 | Allowed only when authority, evidence or rule completeness prevents a defensible semantic disposition; unit remains unsealed and escalates. |
| c6.adjudicationtrigger.002 | c6.adjudicationdisposition.001 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.002 | c6.adjudicationdisposition.002 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.002 | c6.adjudicationdisposition.003 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.002 | c6.adjudicationdisposition.004 | c6.compatdisposition.002 | Allowed only when authority, evidence or rule completeness prevents a defensible semantic disposition; unit remains unsealed and escalates. |
| c6.adjudicationtrigger.003 | c6.adjudicationdisposition.001 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.003 | c6.adjudicationdisposition.002 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.003 | c6.adjudicationdisposition.003 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.003 | c6.adjudicationdisposition.004 | c6.compatdisposition.002 | Allowed only when authority, evidence or rule completeness prevents a defensible semantic disposition; unit remains unsealed and escalates. |
| c6.adjudicationtrigger.004 | c6.adjudicationdisposition.001 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.004 | c6.adjudicationdisposition.002 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.004 | c6.adjudicationdisposition.003 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.004 | c6.adjudicationdisposition.004 | c6.compatdisposition.002 | Allowed only when authority, evidence or rule completeness prevents a defensible semantic disposition; unit remains unsealed and escalates. |
| c6.adjudicationtrigger.005 | c6.adjudicationdisposition.001 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.005 | c6.adjudicationdisposition.002 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.005 | c6.adjudicationdisposition.003 | c6.compatdisposition.002 | Allowed only when the complete retained valid basis and written rationale support this exact terminal disposition. |
| c6.adjudicationtrigger.005 | c6.adjudicationdisposition.004 | c6.compatdisposition.002 | Allowed only when authority, evidence or rule completeness prevents a defensible semantic disposition; unit remains unsealed and escalates. |

### 19.12 Multi-view state × outcome/sealing

| Multi-view state | Compatibility | Allowed outcome | Sealing condition |
|---|---|---|---|
| c6.multiviewstate.001 | c6.compatdisposition.002 | Any terminal outcome supported by complete basis | Eligible after ordinary pairing and basis checks. |
| c6.multiviewstate.002 | c6.compatdisposition.002 | Any terminal outcome after duplicate normalization | Ineligible before duplicate collapse and complete re-derivation. |
| c6.multiviewstate.003 | c6.compatdisposition.002 | Any terminal outcome supported by combined non-conflicting basis | Eligible after every contribution and identity remains traceable. |
| c6.multiviewstate.004 | c6.compatdisposition.002 | Outcome only through governed adjudication | Ineligible before contradiction-preserving adjudication completes. |
| c6.multiviewstate.005 | c6.compatdisposition.003 | No outcome | Invalid/unsealable because RoomCase, material-state, lineage or admitted-input boundary failed. |

Every conditional cell uses `c6.compatdisposition.002` and states an exact
condition. No matrix cell is blank.
## 20. Normative Rules

| Rule ID | EN title | RU title | EN definition | RU definition | Validation coverage |
|---|---|---|---|---|---|
| c6.rule.001 | Complete annotation-unit identity | Полная идентичность единицы аннотации | Every annotation-unit revision resolves one record type, Operation, RoomCase, subject, subject kind, unit type, granularity, view scope, revision, trace, integrity and history reference; conditional member and predecessor identities follow their declared cardinalities. | Каждая ревизия единицы аннотации разрешает один тип записи, Operation, RoomCase, субъект, вид субъекта, тип единицы, гранулярность, скоуп ракурса, ревизию, ссылки трассировки, целостности и истории; условные идентификаторы элемента и предшественника соблюдают объявленные кардинальности. | c6.validation.003, c6.validation.004 |
| c6.rule.002 | Stable identity immutability | Неизменяемость стабильной идентичности | Accepted stable IDs and sealed instance identities are never silently reassigned, rebound or reused for different semantics. | Принятые стабильные ID и запечатанные идентичности экземпляров никогда скрытно не переназначаются, не перепривязываются и не используются для иной семантики. | c6.validation.005 |
| c6.rule.003 | Closed view-scope registry | Закрытый реестр скоупов ракурса | Every annotation unit uses exactly one c6.viewscope identity; no unregistered per-view or consolidated literal is accepted. | Каждая единица аннотации использует ровно один идентификатор c6.viewscope; незарегистрированные значения отдельного или консолидированного ракурса не допускаются. | c6.validation.006 |
| c6.rule.004 | Closed unit-granularity registry | Закрытый реестр гранулярности единицы | Every annotation unit uses exactly one c6.unitgranularity identity and satisfies its unit-type-specific applicability. | Каждая единица аннотации использует ровно один идентификатор c6.unitgranularity и соблюдает его применимость к конкретному типу единицы. | c6.validation.007 |
| c6.rule.005 | No duplicate or rebound unit | Запрет дубликата и перепривязки единицы | The same active semantic identity tuple occurs at most once; subject rebinding or same-revision duplicate creation is invalid. | Один и тот же активный кортеж семантической идентичности встречается не более одного раза; перепривязка субъекта или создание дубликата той же ревизии недопустимы. | c6.validation.008, c6.validation.009 |
| c6.rule.006 | Record-type conformance | Соответствие типу записи | Every Contract-6 record resolves one c6.recordtype identity and satisfies the semantic components owned by that record class. | Каждая запись Contract 6 разрешает один идентификатор c6.recordtype и удовлетворяет семантическим компонентам, принадлежащим этому классу записи. | c6.validation.010 |
| c6.rule.007 | Unit-type-specific pairing key | Ключ сопоставления по типу единицы | Each unit type uses only its registered pairing rule and the exact Operation, RoomCase, subject, revision, scope and conditional member equalities declared in §8. | Каждый тип единицы использует только зарегистрированное правило сопоставления и точные равенства Operation, RoomCase, субъекта, ревизии, скоупа и условного элемента, объявленные в §8. | c6.validation.011, c6.validation.012 |
| c6.rule.008 | Cross-context pairing prohibited | Запрет сквозного сопоставления контекстов | Participants from different Operations, RoomCases, physical rooms or materially different room states are never paired. | Участники из разных Operations, RoomCases, физических комнат или материально различающихся состояний комнаты никогда не сопоставляются. | c6.validation.013, c6.validation.014, c6.validation.015 |
| c6.rule.009 | Positional pairing prohibited | Запрет позиционного сопоставления | Display label, array position, provider order and image index alone are never valid pairing keys. | Отображаемая метка, позиция массива, порядок провайдера и индекс изображения сами по себе никогда не являются действительными ключами сопоставления. | c6.validation.016 |
| c6.rule.010 | Pairing completeness and state | Полнота и состояние сопоставления | Every pairing resolves exactly one c6.pairingstate; only complete or complete-with-valid-conflict states may proceed beyond pairing, subject to §19. | Каждое сопоставление разрешает ровно одно состояние c6.pairingstate; только полное состояние или полное состояние с действительным конфликтом может пройти дальше, с учётом §19. | c6.validation.017, c6.validation.018 |
| c6.rule.011 | Unit-type cardinality | Кардинальность по типу единицы | Participant and member cardinalities follow the unit-type table in §6; a cardinality-one slot never contains zero or more than one active participant. | Кардинальности участников и элементов соответствуют таблице типов единиц в §6; позиция с кардинальностью один никогда не содержит ноль или более одного активного участника. | c6.validation.019, c6.validation.020 |
| c6.rule.012 | Entity-subtype candidate-set semantics | Семантика набора кандидатов подтипа | An entity-subtype assessment may contain zero or more candidate-member units; a determinable sealed assessment has exactly one resolved active subtype, while not-determinable or inconclusive assessments have no resolved subtype and preserve the exhausted or conflicting candidate set. | Оценка подтипа сущности может содержать ноль или более единиц-кандидатов; запечатанная оценка «определимо» имеет ровно один разрешённый активный подтип, а оценки «неопределимо» или «неоднозначно» не имеют разрешённого подтипа и сохраняют исчерпанный или конфликтующий набор кандидатов. | c6.validation.021, c6.validation.022, c6.validation.023 |
| c6.rule.013 | Confidence-unit semantic boundary | Семантическая граница единицы уверенности | A confidence unit governs whether one imported ConfidenceAssertion revision is determinable from its own governed signals and trace; it never decides the truth of the underlying subject and never rewrites Contract-5 dimensions. | Единица уверенности управляет тем, определима ли одна импортированная ревизия ConfidenceAssertion по её управляемым сигналам и трассировке; она никогда не решает истинность базового субъекта и не переписывает измерения Contract 5. | c6.validation.024, c6.validation.025 |
| c6.rule.014 | Provenance-unit semantic boundary | Семантическая граница единицы происхождения | A provenance unit governs whether one imported ProvenanceAttachmentRecord revision is determinable from immediate-stage lineage; it never changes the imported provenance value or substitutes for evidence. | Единица происхождения управляет тем, определима ли одна импортированная ревизия ProvenanceAttachmentRecord по происхождению непосредственного этапа; она никогда не изменяет импортированное значение происхождения и не заменяет свидетельства. | c6.validation.026, c6.validation.027 |
| c6.rule.015 | Best-effort assessment and member semantics | Семантика оценки и элементов best-effort поля | A best-effort assessment-level unit pairs exactly one Contract-4 assessment and basis record; scalar, extent, tag and role members use member-level units where values exist, and a summary outcome never hides an unresolved member conflict. | Единица уровня оценки best-effort поля сопоставляет ровно одну оценку и запись базиса Contract 4; скалярные, размерные, теговые и ролевые элементы используют единицы уровня элемента при наличии значений, а итоговый исход никогда не скрывает неразрешённый конфликт элементов. | c6.validation.028, c6.validation.029, c6.validation.030 |
| c6.rule.016 | Closed outcome registry | Закрытый реестр исходов | Exactly three Contract-6 outcomes exist: determinable, not-determinable and inconclusive; no alias, fourth outcome or renamed substitute is valid. | Существуют ровно три исхода Contract 6: «определимо», «неопределимо» и «неоднозначно»; псевдоним, четвёртый исход или переименованный заменитель недопустимы. | c6.validation.031 |
| c6.rule.017 | Outcome exclusivity and completeness | Взаимоисключаемость и полнота исходов | One sealed annotation-unit revision carries exactly one outcome; an unsealable or unable-to-complete record carries no outcome. | Одна запечатанная ревизия единицы аннотации несёт ровно один исход; незапечатываемая запись или запись с незавершённым разрешением не несёт исхода. | c6.validation.032, c6.validation.033 |
| c6.rule.018 | Determinable predicate | Предикат «определимо» | Determinable requires one unique admissible result supported by complete valid retained basis, including a permitted supported negative or empty result. | Исход «определимо» требует одного уникального допустимого результата, поддержанного полным действительным сохранённым базисом, включая разрешённый подтверждённый отрицательный или пустой результат. | c6.validation.034 |
| c6.rule.019 | Not-determinable predicate | Предикат «неопределимо» | Not-determinable requires valid coverage-limitation basis, no admissible supported result, no unresolved valid contradiction and no invalid record defect. | Исход «неопределимо» требует действительного базиса ограничения покрытия, отсутствия допустимого поддержанного результата, отсутствия неразрешённого действительного противоречия и отсутствия дефекта недействительной записи. | c6.validation.035 |
| c6.rule.020 | Inconclusive predicate | Предикат «неоднозначно» | Inconclusive requires complete valid evidence, irreducible conflict or ambiguity and a completed adjudication disposition affirming inconclusive; process failure alone is not inconclusive. | Исход «неоднозначно» требует полных действительных свидетельств, неустранимого конфликта или неоднозначности и завершённого результата разрешения, подтверждающего неоднозначность; один лишь сбой процесса не является неоднозначностью. | c6.validation.036, c6.validation.050 |
| c6.rule.021 | Invalid is not an outcome | Недействительность не является исходом | Missing, malformed, cross-context, integrity-failed or authorization-invalid records block sealing and are never converted to any Contract-6 outcome. | Отсутствующие, повреждённые, сквозные, нарушающие целостность или полномочия записи блокируют запечатывание и никогда не преобразуются в исход Contract 6. | c6.validation.037 |
| c6.rule.022 | Best-effort basis source | Источник базиса best-effort поля | Best-effort field units consume the exact Contract-4 DeterminabilityEvidenceBasisRecord linked to the same BestEffortFieldAssessmentRecord and never fabricate a second basis record. | Единицы best-effort поля используют точную запись DeterminabilityEvidenceBasisRecord Contract 4, связанную с той же BestEffortFieldAssessmentRecord, и никогда не создают вторую запись базиса. | c6.validation.038, c6.validation.039 |
| c6.rule.023 | Non-best-effort basis linkage | Связь базиса для прочих единиц | Entity-subtype, confidence and provenance units use a Contract-6 basis-link record that references exact c4.determinabilitybasis identities and resolvable upstream evidence; it does not claim a Contract-4 field-assessment record exists for those subjects. | Единицы подтипа сущности, уверенности и происхождения используют запись связи базиса Contract 6, которая ссылается на точные идентификаторы c4.determinabilitybasis и разрешимые вышестоящие свидетельства; она не утверждает наличие записи оценки поля Contract 4 для этих субъектов. | c6.validation.040, c6.validation.041 |
| c6.rule.024 | Field-specific basis applicability | Применимость базиса по полю | Best-effort basis identities follow the accepted Contract-4 §10.3 field matrix; .016 is permitted only for c4.besteffort.field.003, .006, .007 and .008 under their imported conditions. | Идентификаторы базиса best-effort поля следуют принятой матрице Contract 4 §10.3; .016 разрешён только для c4.besteffort.field.003, .006, .007 и .008 при их импортированных условиях. | c6.validation.042, c6.validation.043 |
| c6.rule.025 | Positive support is candidate-specific | Положительная поддержка относится к кандидату | Basis .001 supports one specific candidate or result but does not prove uniqueness until the complete candidate/member set is evaluated. | Базис .001 поддерживает одного конкретного кандидата или результат, но не доказывает уникальность до оценки полного набора кандидатов или элементов. | c6.validation.044 |
| c6.rule.026 | Negative or contradictory evidence is candidate-specific | Отрицательное или противоречащее свидетельство относится к кандидату | Basis .002 contradicts a specific claim and triggers candidate-set re-evaluation; it never maps directly to inconclusive or not-determinable. | Базис .002 противоречит конкретному утверждению и запускает повторную оценку набора кандидатов; он никогда напрямую не отображается в «неоднозначно» или «неопределимо». | c6.validation.045 |
| c6.rule.027 | Coverage limitation derivation | Вывод из ограничения покрытия | Bases .003-.006 may support not-determinable only when no valid supported result, valid conflict or invalid evidence defect remains. | Базисы .003-.006 могут поддерживать «неопределимо» только когда не остаётся действительного поддержанного результата, действительного конфликта или дефекта недопустимого свидетельства. | c6.validation.046 |
| c6.rule.028 | Cross-view inconsistency requires adjudication | Несогласованность между ракурсами требует разрешения | Basis .007 preserves every conflicting contribution and requires governed adjudication before a terminal determinability outcome. | Базис .007 сохраняет каждый конфликтующий вклад и требует управляемого разрешения до конечного исхода определимости. | c6.validation.047 |
| c6.rule.029 | Evidence-integrity bases block sealing | Базисы нарушения свидетельств блокируют запечатывание | Bases .008-.012 block sealing until the imported lineage, inference, provider grounding, derivation chain or integrity defect is corrected. | Базисы .008-.012 блокируют запечатывание до исправления импортированного дефекта происхождения, вывода, обоснования провайдера, цепочки деривации или целостности. | c6.validation.048 |
| c6.rule.030 | Duplicate-only support is normalized then rederived | Поддержка только дубликатами нормализуется и пересчитывается | Basis .013 requires duplicate collapse to one support unit followed by complete re-derivation; it is not a direct outcome. | Базис .013 требует сведения дубликатов к одной единице поддержки с последующим полным повторным выводом; он не является прямым исходом. | c6.validation.049 |
| c6.rule.031 | Unsupported modality and mixed context are invalid | Неподдерживаемая модальность и смешанный контекст недопустимы | Bases .014 and .015 are hard runtime violations and make the unit invalid/unsealable; they never produce not-determinable. | Базисы .014 и .015 являются жёсткими нарушениями runtime и делают единицу недействительной и незапечатываемой; они никогда не дают исход «неопределимо». | c6.validation.051, c6.validation.052 |
| c6.rule.032 | Sufficient-negative basis is conditional | Достаточный отрицательный базис условен | Basis .016 supports determinable only for an imported domain that permits an explicit negative or evidence-supported empty result and, for no-value assessments, has the mandatory assessment-target evidence set. | Базис .016 поддерживает «определимо» только для импортированного домена, допускающего явный отрицательный или подтверждённый свидетельствами пустой результат, и для оценки без значения имеет обязательный набор свидетельств, нацеленный на оценку. | c6.validation.053, c6.validation.054 |
| c6.rule.033 | Confidence never determines outcome by itself | Уверенность сама не определяет исход | No Contract-5 state, source, transformation or signal type alone determines a Contract-6 outcome. | Ни одно состояние, источник, преобразование или тип сигнала Contract 5 само по себе не определяет исход Contract 6. | c6.validation.055 |
| c6.rule.034 | Outcome never rewrites confidence | Исход не переписывает уверенность | Contract-6 derivation, adjudication and sealing never edit or normalize the linked ConfidenceAssertion. | Вывод, разрешение и запечатывание Contract 6 никогда не изменяют и не нормализуют связанную ConfidenceAssertion. | c6.validation.056 |
| c6.rule.035 | Provenance never determines outcome by itself | Происхождение само не определяет исход | No Contract-4 provenance value alone determines a Contract-6 outcome or substitutes for basis and evidence. | Ни одно значение происхождения Contract 4 само по себе не определяет исход Contract 6 и не заменяет базис и свидетельства. | c6.validation.057 |
| c6.rule.036 | Outcome never rewrites provenance | Исход не переписывает происхождение | Contract-6 derivation, adjudication and sealing never edit the linked provenance identity, producing stage or parent lineage. | Вывод, разрешение и запечатывание Contract 6 никогда не изменяют связанную идентичность происхождения, производящий этап или родительское происхождение. | c6.validation.058 |
| c6.rule.037 | Evidence quantity is not sufficiency | Количество свидетельств не является достаточностью | Counts of images, contributions, agreeing views or repeated signals never establish determinability without the qualitative basis and candidate-set requirements. | Количество изображений, вкладов, согласующихся ракурсов или повторяющихся сигналов никогда не устанавливает определимость без качественного базиса и требований к набору кандидатов. | c6.validation.059 |
| c6.rule.038 | Entity outcome cardinality | Кардинальность исхода подтипа сущности | Entity-subtype determinable requires exactly one resolved subtype; not-determinable and inconclusive prohibit a resolved subtype on that revision. | «Определимо» для подтипа сущности требует ровно одного разрешённого подтипа; «неопределимо» и «неоднозначно» запрещают разрешённый подтип в этой ревизии. | c6.validation.021, c6.validation.022 |
| c6.rule.039 | Multi-valued member closure | Закрытие элементов многозначного поля | A multi-tag or multi-role assessment summary may seal only after every active member unit is sealed or explicitly superseded, and no unresolved member conflict is hidden. | Итог многотеговой или многоролевой оценки может быть запечатан только после запечатывания или явного замещения каждой активной единицы-элемента и при отсутствии скрытого неразрешённого конфликта элементов. | c6.validation.029, c6.validation.030 |
| c6.rule.040 | Supported empty result | Подтверждённый пустой результат | A determinable empty best-effort result requires imported field semantics permitting emptiness, basis .016 and the Contract-4 assessment-target evidence-set grounding. | Определимый пустой результат best-effort требует импортированной семантики поля, допускающей пустоту, базиса .016 и установленного Contract 4 набора свидетельств, нацеленного на оценку. | c6.validation.053, c6.validation.054 |
| c6.rule.041 | Per-view lineage preserved | Происхождение по ракурсам сохраняется | Every per-view contribution retains one admitted ImageAsset identity and its atomic source lineage; consolidated units reference rather than replace contributions. | Каждый вклад отдельного ракурса сохраняет один допущенный идентификатор ImageAsset и его атомарное происхождение источника; консолидированные единицы ссылаются на вклады, а не заменяют их. | c6.validation.060 |
| c6.rule.042 | Only consolidated scope may seal | Запечатывается только консолидированный скоуп | A c6.viewscope.001 per-view unit never carries a sealed outcome; only c6.viewscope.002 is sealing-eligible. | Единица c6.viewscope.001 отдельного ракурса никогда не несёт запечатанный исход; запечатывание допускается только для c6.viewscope.002. | c6.validation.061 |
| c6.rule.043 | Same-room and material-state gate | Гейт одной комнаты и материального состояния | Multi-image pairing requires same-room validation and one materially unchanged room state before any consolidation. | Многоракурсное сопоставление требует проверки одной комнаты и одного материально неизменного состояния комнаты до любой консолидации. | c6.validation.013, c6.validation.015 |
| c6.rule.044 | No automatic consolidation shortcut | Запрет автоматического упрощения консолидации | Majority vote, averaging, automatic best-view selection and automatic outcome upgrade from additional images are prohibited unless a future separately accepted rule authorizes an exact method. | Голосование большинством, усреднение, автоматический выбор лучшего ракурса и автоматическое повышение исхода из-за дополнительных изображений запрещены без будущего отдельно принятого точного правила. | c6.validation.062 |
| c6.rule.045 | Contradiction preservation | Сохранение противоречия | No contribution, candidate, basis identity or conflict rationale is deleted or downgraded to force a cleaner result. | Ни один вклад, кандидат, идентификатор базиса или обоснование конфликта не удаляется и не понижается для получения более удобного результата. | c6.validation.063 |
| c6.rule.046 | Sealing prerequisites | Предпосылки запечатывания | Sealing requires consolidated scope, complete pairing, applicable and valid basis, one derivable or adjudicated outcome, complete integrity references and no blocking failure. | Запечатывание требует консолидированного скоупа, полного сопоставления, применимого и действительного базиса, одного выведенного или подтверждённого исхода, полных ссылок целостности и отсутствия блокирующего сбоя. | c6.validation.064, c6.validation.065 |
| c6.rule.047 | One sealed outcome per revision | Один запечатанный исход на ревизию | Exactly one sealed outcome-decision record exists for one annotation-unit revision. | Для одной ревизии единицы аннотации существует ровно одна запечатанная запись решения об исходе. | c6.validation.032 |
| c6.rule.048 | Post-seal immutability | Неизменяемость после запечатывания | A sealed identity, outcome, basis set, participant set and rationale are immutable. | Запечатанные идентичность, исход, набор базисов, набор участников и обоснование неизменяемы. | c6.validation.066 |
| c6.rule.049 | Supersession creates a new revision | Замещение создаёт новую ревизию | A correction creates one new immutable revision with exactly one valid predecessor and marks the prior current revision superseded without deleting history. | Исправление создаёт одну новую неизменяемую ревизию ровно с одним действительным предшественником и помечает предыдущую текущую ревизию заменённой без удаления истории. | c6.validation.067 |
| c6.rule.050 | Invalidation preserves history | Признание недействительным сохраняет историю | Invalidation removes current-use eligibility but preserves the historical record, outcome, evidence, reason and integrity chain. | Признание недействительным исключает использование как текущего результата, но сохраняет историческую запись, исход, свидетельства, причину и цепочку целостности. | c6.validation.068 |
| c6.rule.051 | Governed reopening only | Повторное открытие только по полномочию | A sealed revision is never reopened in place; governed correction creates a new revision under an explicit authorized role reference, not routine Project Owner adjudication. | Запечатанная ревизия никогда не открывается повторно на месте; управляемое исправление создаёт новую ревизию по явной ссылке на уполномоченную роль, а не через обычное разрешение Project Owner. | c6.validation.069 |
| c6.rule.052 | Adjudication trigger required | Требуется триггер разрешения | Every adjudication record resolves one registered trigger and applies only to a valid semantic conflict or ambiguity, not to an invalid record defect. | Каждая запись разрешения имеет один зарегистрированный триггер и применяется только к действительному семантическому конфликту или неоднозначности, а не к дефекту недействительной записи. | c6.validation.070, c6.validation.071 |
| c6.rule.053 | Adjudication evidence and rationale | Свидетельства и обоснование разрешения | Adjudication sees the complete retained evidence, basis, confidence and provenance references, invents no evidence and records authority, rationale and immutable history. | Разрешение видит полные сохранённые ссылки на свидетельства, базис, уверенность и происхождение, не изобретает свидетельства и фиксирует полномочие, обоснование и неизменяемую историю. | c6.validation.072, c6.validation.073, c6.validation.074 |
| c6.rule.054 | Closed adjudication dispositions | Закрытые результаты разрешения | Exactly four adjudication dispositions exist; the three affirming dispositions assign their corresponding outcome only when their predicates pass, while unable-to-complete assigns no outcome. | Существуют ровно четыре результата разрешения; три подтверждающих результата назначают соответствующий исход только при выполнении их предикатов, а «невозможно завершить» не назначает исход. | c6.validation.075, c6.validation.076 |
| c6.rule.055 | Inconclusive differs from unable-to-complete | Неоднозначность отличается от невозможности завершить | Affirm-inconclusive is a completed semantic decision over valid complete evidence; unable-to-complete is a process or authority failure that leaves the unit unsealed. | Подтверждение неоднозначности является завершённым семантическим решением по действительным полным свидетельствам; невозможность завершить является сбоем процесса или полномочий и оставляет единицу незапечатанной. | c6.validation.036, c6.validation.050 |
| c6.rule.056 | No silent not-determinable fallback | Запрет скрытого перехода к «неопределимо» | No missing participant, invalid evidence, unsupported modality, timeout, adjudication failure or unknown combination silently becomes not-determinable. | Ни один отсутствующий участник, недопустимое свидетельство, неподдерживаемая модальность, тайм-аут, сбой разрешения или неизвестная комбинация скрытно не становится исходом «неопределимо». | c6.validation.035, c6.validation.051, c6.validation.077 |
| c6.rule.057 | Runtime and input boundary | Граница runtime и входных данных | The runtime is one Operation, exactly one RoomCase, one to six admitted licensed/synthetic/staged ImageAssets and one consolidated PerceptionResult; real user photos, commercial scope, whole-home, floor plans, video, panorama, 2.5D, 3D and cross-session fusion are prohibited. | Runtime состоит из одной Operation, ровно одного RoomCase, от одного до шести допущенных лицензированных, синтетических или staged ImageAssets и одного консолидированного PerceptionResult; реальные пользовательские фото, коммерческий скоуп, whole-home, планы этажей, видео, панорама, 2.5D, 3D и межсессионное слияние запрещены. | c6.validation.078, c6.validation.079 |
| c6.rule.058 | Bilingual foundation | Двуязычный фундамент | English is canonical, Russian is a complete derived locale, stable IDs are language-neutral and missing Russian content falls back to English without interface breakage. | Английский является каноническим, русский — полной производной локалью, стабильные ID языково нейтральны, а отсутствующий русский контент использует fallback на английский без поломки интерфейса. | c6.validation.080, c6.validation.081 |
| c6.rule.059 | Controlled Learning boundary | Граница Controlled Learning | Contract 6 remains LEARNING-READY and NOT LEARNING-ACTIVE; no automatic outcome, mapping, adjudication-policy or production behavior change is authorized. | Contract 6 остаётся LEARNING-READY и NOT LEARNING-ACTIVE; автоматическое изменение исходов, отображений, политики разрешения или production-поведения не авторизовано. | c6.validation.082 |
| c6.rule.060 | Ownership boundary | Граница владения | Contract 6 owns pairing, outcomes, sealing and adjudication only; it never redefines Contracts 1-5, ETAP, provider governance or Track C semantics. | Contract 6 владеет только сопоставлением, исходами, запечатыванием и разрешением; он никогда не переопределяет семантику Contracts 1-5, ETAP, governance провайдеров или Track C. | c6.validation.083 |
| c6.rule.061 | Contract-10 boundary | Граница Contract 10 | Contract 6 defines semantic identities and cardinalities only; final JSON, API, database, protobuf, TypeScript and envelope encoding remain Contract-10-owned and unopened. | Contract 6 определяет только семантические идентичности и кардинальности; окончательные JSON, API, база данных, protobuf, TypeScript и кодирование envelope принадлежат Contract 10 и не открыты. | c6.validation.084 |
| c6.rule.062 | ETAP and implementation boundary | Граница ETAP и реализации | Contract 6 neither redefines ETAP metrics and thresholds nor authorizes code, corpus, fixture, annotation, provider/model or deployment work. | Contract 6 не переопределяет метрики и пороги ETAP и не авторизует код, корпус, fixture, аннотацию, работу с провайдером/моделью или deployment. | c6.validation.085 |
| c6.rule.063 | Complete rule coverage | Полное покрытие правил | Every normative rule has one or more validation references or an explicit definition-only rationale; every validation maps to exactly one primary failure. | Каждое нормативное правило имеет одну или более ссылок на проверки либо явное обоснование «только определение»; каждая проверка сопоставлена ровно с одним основным сбоем. | c6.validation.086, c6.validation.001, c6.validation.002 |
| c6.rule.064 | Governance stop conditions | Governance-стоп-условия | Contract 7 and Contracts 7-10 remain unauthorized and unopened; acceptance, Candidate Lock, persistence, implementation, Diagnosability and Security Architecture require separate explicit authority. | Contract 7 и Contracts 7-10 остаются неавторизованными и неоткрытыми; принятие, Candidate Lock, persistence, реализация, Diagnosability и Security Architecture требуют отдельного явного полномочия. | c6.validation.087 |

Rule IDs are sequential `c6.rule.001–064`. Every rule has at least one
validation reference.
## 21. Validation Architecture

### 21.1 Validation-scope registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.validationscope.001 | contract-definition | Contract definition | Определение контракта | Checks stable registries, ownership, source fidelity and authorization boundaries. | Проверяет стабильные реестры, владение, соответствие источникам и границы полномочий. |
| c6.validationscope.002 | annotation-unit-instance | Annotation-unit instance | Экземпляр единицы аннотации | Checks one annotation-unit identity, scope, granularity and subject binding. | Проверяет идентичность, скоуп, гранулярность и привязку субъекта одной единицы аннотации. |
| c6.validationscope.003 | pairing-instance | Pairing instance | Экземпляр сопоставления | Checks participant cardinality, equality keys and pairing completeness. | Проверяет кардинальность участников, ключи равенства и полноту сопоставления. |
| c6.validationscope.004 | basis-and-derivation | Basis and derivation | Базис и вывод | Checks basis applicability, classification, combination and outcome derivation. | Проверяет применимость, классификацию, комбинацию базиса и вывод исхода. |
| c6.validationscope.005 | multi-image-consolidation | Multi-image consolidation | Многоракурсная консолидация | Checks per-view lineage, same-room boundaries, duplicate handling and conflict preservation. | Проверяет происхождение по ракурсам, границы одной комнаты, обработку дубликатов и сохранение конфликтов. |
| c6.validationscope.006 | sealing-and-lifecycle | Sealing and lifecycle | Запечатывание и жизненный цикл | Checks sealing prerequisites, lifecycle transitions, immutability and supersession. | Проверяет предпосылки запечатывания, переходы жизненного цикла, неизменяемость и замещение. |
| c6.validationscope.007 | adjudication | Adjudication | Разрешение неоднозначности | Checks trigger, authority, evidence visibility, rationale and disposition. | Проверяет триггер, полномочие, видимость свидетельств, обоснование и результат. |
| c6.validationscope.008 | localization | Localization | Локализация | Checks complete EN/RU semantic equivalence and English fallback. | Проверяет полную семантическую эквивалентность EN/RU и fallback на английский. |
| c6.validationscope.009 | cross-cutting-governance | Cross-cutting governance | Сквозное governance | Checks runtime, domain, ownership, Controlled Learning and downstream stop conditions. | Проверяет runtime, домен, владение, Controlled Learning и стоп-условия нижестоящих шагов. |

### 21.2 Validation-phase registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.validationphase.001 | authoring-lint | Authoring lint | Проверка при подготовке | Runs over the Contract definition before review. | Выполняется над определением Contract до проверки. |
| c6.validationphase.002 | pre-pairing | Pre-pairing | До сопоставления | Runs before participants are paired. | Выполняется до сопоставления участников. |
| c6.validationphase.003 | pairing | Pairing | Сопоставление | Runs while participant identities and cardinalities are resolved. | Выполняется при разрешении идентичностей и кардинальностей участников. |
| c6.validationphase.004 | derivation | Derivation | Вывод | Runs while basis effects and candidate-set outcomes are derived. | Выполняется при выводе эффектов базиса и исходов набора кандидатов. |
| c6.validationphase.005 | sealing | Sealing | Запечатывание | Runs before a consolidated outcome revision becomes sealed. | Выполняется до запечатывания консолидированной ревизии исхода. |
| c6.validationphase.006 | post-sealing | Post-sealing | После запечатывания | Runs on mutation, supersession, invalidation and history operations. | Выполняется при мутации, замещении, признании недействительным и операциях истории. |

### 21.3 Validation registry

| Validation ID | Token | EN label | RU label | EN definition | RU definition | Scope | Phase | Severity | Required handling | Escalation | Primary failure |
|---|---|---|---|---|---|---|---|---|---|---|---|
| c6.validation.001 | unknown-stable-id | Unknown Contract-6 stable ID | Неизвестный стабильный ID Contract 6 | A Contract-6-owned identity does not resolve to the closed registry that owns it. | Идентификатор, принадлежащий Contract 6, не разрешается в закрытом реестре-владельце. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.001 |
| c6.validation.002 | duplicate-stable-id | Duplicate Contract-6 stable ID | Дублирующий стабильный ID Contract 6 | The same Contract-6 stable ID is defined more than once or assigned to different semantics. | Один и тот же стабильный ID Contract 6 определён более одного раза или назначен разной семантике. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.002 |
| c6.validation.003 | missing-identity-component | Missing annotation-unit identity component | Отсутствующий компонент идентичности единицы аннотации | A mandatory semantic component of the annotation-unit identity is absent. | Обязательный семантический компонент идентичности единицы аннотации отсутствует. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.003 |
| c6.validation.004 | invalid-conditional-identity-cardinality | Invalid conditional identity cardinality | Недопустимая условная кардинальность идентичности | A conditional member or predecessor identity violates its declared cardinality. | Условный идентификатор элемента или предшественника нарушает объявленную кардинальность. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.004 |
| c6.validation.005 | identity-reassignment | Stable identity reassignment | Переназначение стабильной идентичности | An accepted or sealed identity is rebound to another subject or semantic meaning. | Принятая или запечатанная идентичность перепривязывается к другому субъекту или семантическому значению. | c6.validationscope.002 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 | c6.failure.005 |
| c6.validation.006 | invalid-view-scope | Invalid view-scope identity | Недопустимый идентификатор скоупа ракурса | The view scope is missing, unregistered or incompatible with the record. | Скоуп ракурса отсутствует, не зарегистрирован или несовместим с записью. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.006 |
| c6.validation.007 | invalid-unit-granularity | Invalid unit-granularity identity | Недопустимый идентификатор гранулярности единицы | The unit granularity is missing, unregistered or not allowed for the unit type. | Гранулярность единицы отсутствует, не зарегистрирована или не разрешена для типа единицы. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.007 |
| c6.validation.008 | duplicate-active-unit | Duplicate active annotation unit | Дублирующая активная единица аннотации | Two active records use the same complete semantic identity tuple. | Две активные записи используют один и тот же полный кортеж семантической идентичности. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.008 |
| c6.validation.009 | silent-subject-rebinding | Silent subject rebinding | Скрытая перепривязка субъекта | An existing annotation-unit revision changes its subject identity instead of creating a new revision. | Существующая ревизия единицы аннотации изменяет идентичность субъекта вместо создания новой ревизии. | c6.validationscope.002 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 | c6.failure.009 |
| c6.validation.010 | recordtype-conformance-failure | Record-type conformance failure | Нарушение соответствия типу записи | A Contract-6 record lacks its record type or omits a mandatory component of that record class. | Запись Contract 6 не имеет типа записи или пропускает обязательный компонент этого класса. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.010 |
| c6.validation.011 | wrong-pairing-rule | Wrong pairing rule for unit type | Неверное правило сопоставления для типа единицы | A unit type is paired through a rule other than its registered c6.pairingrule identity. | Тип единицы сопоставляется по правилу, отличному от зарегистрированного идентификатора c6.pairingrule. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.011 |
| c6.validation.012 | pairing-key-mismatch | Pairing key mismatch | Несовпадение ключа сопоставления | One or more required identity-equality components differ across pairing participants. | Один или более обязательных компонентов равенства идентичностей различаются между участниками сопоставления. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.012 |
| c6.validation.013 | cross-operation-pairing | Cross-Operation pairing | Сопоставление между Operations | Pairing participants reference different Operation identities. | Участники сопоставления ссылаются на разные идентификаторы Operation. | c6.validationscope.003 | c6.validationphase.003 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.013 |
| c6.validation.014 | cross-roomcase-pairing | Cross-RoomCase pairing | Сопоставление между RoomCases | Pairing participants reference different RoomCase identities or physical rooms. | Участники сопоставления ссылаются на разные идентификаторы RoomCase или физические комнаты. | c6.validationscope.003 | c6.validationphase.003 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.014 |
| c6.validation.015 | mixed-material-state-pairing | Mixed material-state pairing | Сопоставление смешанных материальных состояний | Pairing participants belong to materially different room states. | Участники сопоставления относятся к материально различным состояниям комнаты. | c6.validationscope.003 | c6.validationphase.003 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.015 |
| c6.validation.016 | positional-pairing | Positional or label-only pairing | Позиционное сопоставление или сопоставление только по метке | Display label, array position, provider order or image index is used as the sole pairing key. | Отображаемая метка, позиция массива, порядок провайдера или индекс изображения используется как единственный ключ сопоставления. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.016 |
| c6.validation.017 | missing-pairing-state | Missing pairing state | Отсутствующее состояние сопоставления | A pairing record does not resolve exactly one c6.pairingstate identity. | Запись сопоставления не разрешает ровно один идентификатор c6.pairingstate. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.017 |
| c6.validation.018 | ineligible-pairing-state-progression | Ineligible pairing state progression | Недопустимое продвижение состояния сопоставления | An incomplete, duplicate or invalid pairing proceeds to derivation or sealing. | Неполное, дублирующее или недопустимое сопоставление переходит к выводу или запечатыванию. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.018 |
| c6.validation.019 | missing-cardinality-one-participant | Missing cardinality-one participant | Отсутствующий участник с кардинальностью один | A participant slot declared exactly one contains no active participant. | Позиция участника с кардинальностью ровно один не содержит активного участника. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.019 |
| c6.validation.020 | duplicate-cardinality-one-participant | Duplicate cardinality-one participant | Дублирующий участник с кардинальностью один | A participant slot declared exactly one contains more than one active participant. | Позиция участника с кардинальностью ровно один содержит более одного активного участника. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.020 |
| c6.validation.021 | determinable-subtype-cardinality | Determinable subtype cardinality violation | Нарушение кардинальности определимого подтипа | A determinable entity-subtype assessment does not resolve exactly one active subtype. | Оценка подтипа сущности с исходом «определимо» не разрешает ровно один активный подтип. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.021 |
| c6.validation.022 | resolved-subtype-on-nondeterminable-outcome | Resolved subtype on non-determinable or inconclusive outcome | Разрешённый подтип при исходе «неопределимо» или «неоднозначно» | A not-determinable or inconclusive entity-subtype revision still carries a resolved subtype. | Ревизия подтипа сущности с исходом «неопределимо» или «неоднозначно» всё ещё содержит разрешённый подтип. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.022 |
| c6.validation.023 | lost-subtype-candidate-set | Lost subtype candidate set | Потерянный набор кандидатов подтипа | An unresolved entity-subtype outcome discards the exhausted or conflicting candidate set and its basis. | Неразрешённый исход подтипа сущности отбрасывает исчерпанный или конфликтующий набор кандидатов и его базис. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.023 |
| c6.validation.024 | confidence-unit-truth-substitution | Confidence unit substitutes for subject truth | Единица уверенности подменяет истинность субъекта | A confidence-unit outcome is used as the truth result of the underlying subject. | Исход единицы уверенности используется как результат истинности базового субъекта. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.024 |
| c6.validation.025 | confidence-dimension-mutation | Contract-5 confidence dimension mutation | Мутация измерения уверенности Contract 5 | Contract 6 changes a linked confidence state, source, transformation or signal type. | Contract 6 изменяет связанное состояние, источник, преобразование или тип сигнала уверенности. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.004 | c6.failure.025 |
| c6.validation.026 | provenance-unit-evidence-substitution | Provenance unit substitutes for evidence | Единица происхождения подменяет свидетельство | A provenance-unit outcome is used in place of required evidence or basis. | Исход единицы происхождения используется вместо требуемого свидетельства или базиса. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.026 |
| c6.validation.027 | provenance-mutation | Contract-4 provenance mutation | Мутация происхождения Contract 4 | Contract 6 changes a linked provenance identity, producing stage or parent lineage. | Contract 6 изменяет связанную идентичность происхождения, производящий этап или родительскую цепочку. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 | c6.failure.027 |
| c6.validation.028 | best-effort-assessment-basis-mismatch | Best-effort assessment/basis mismatch | Несовпадение оценки best-effort и базиса | The linked DeterminabilityEvidenceBasisRecord does not resolve to the same Contract-4 field assessment. | Связанная DeterminabilityEvidenceBasisRecord не разрешается к той же оценке поля Contract 4. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.028 |
| c6.validation.029 | unsealed-multivalue-member | Unsealed active multi-value member | Незапечатанный активный элемент многозначного поля | A multi-value assessment summary is sealed while an active member unit is unsealed. | Итог многозначной оценки запечатывается, когда активная единица-элемент остаётся незапечатанной. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.029 |
| c6.validation.030 | hidden-member-conflict | Hidden multi-value member conflict | Скрытый конфликт элемента многозначного поля | A field summary seals while a retained member conflict is unresolved or omitted. | Итог поля запечатывается при неразрешённом или опущенном сохранённом конфликте элемента. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.030 |
| c6.validation.031 | invalid-outcome-registry | Invalid outcome identity or count | Недопустимая идентичность или количество исходов | An unregistered, aliased, renamed or fourth Contract-6 outcome is introduced. | Вводится незарегистрированный, псевдонимный, переименованный или четвёртый исход Contract 6. | c6.validationscope.001 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.031 |
| c6.validation.032 | duplicate-sealed-outcome | Duplicate sealed outcome | Дублирующий запечатанный исход | More than one sealed outcome-decision record exists for one annotation-unit revision. | Для одной ревизии единицы аннотации существует более одной запечатанной записи решения об исходе. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.032 |
| c6.validation.033 | outcome-on-unsealable-record | Outcome assigned to unsealable record | Исход назначен незапечатываемой записи | An invalid or unable-to-complete record carries a Contract-6 outcome. | Недействительная запись или запись с невозможностью завершить несёт исход Contract 6. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.033 |
| c6.validation.034 | determinable-without-unique-supported-result | Determinable without one unique supported result | «Определимо» без одного уникального поддержанного результата | The determinable outcome is assigned without exactly one admissible result supported by complete valid basis. | Исход «определимо» назначен без ровно одного допустимого результата, поддержанного полным действительным базисом. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.034 |
| c6.validation.035 | invalid-not-determinable-fallback | Invalid not-determinable fallback | Недопустимый переход к «неопределимо» | Not-determinable is assigned despite a supported result, unresolved valid contradiction, invalid record defect or absent coverage-limitation basis. | Исход «неопределимо» назначен при наличии поддержанного результата, неразрешённого действительного противоречия, дефекта недействительной записи или отсутствии базиса ограничения покрытия. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.035 |
| c6.validation.036 | inconclusive-without-completed-adjudication | Inconclusive without completed adjudication | «Неоднозначно» без завершённого разрешения | Inconclusive is assigned without complete valid evidence and a completed affirm-inconclusive disposition. | Исход «неоднозначно» назначен без полных действительных свидетельств и завершённого результата, подтверждающего неоднозначность. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.036 |
| c6.validation.037 | invalid-record-coerced-to-outcome | Invalid record coerced to outcome | Недействительная запись преобразована в исход | A missing, malformed, integrity-failed or authorization-invalid record is converted to an outcome. | Отсутствующая, повреждённая, нарушающая целостность или полномочия запись преобразуется в исход. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.037 |
| c6.validation.038 | missing-best-effort-basis-record | Missing Contract-4 basis record | Отсутствующая запись базиса Contract 4 | A best-effort field assessment lacks its required Contract-4 DeterminabilityEvidenceBasisRecord. | Оценка best-effort поля не имеет обязательной записи DeterminabilityEvidenceBasisRecord Contract 4. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.038 |
| c6.validation.039 | duplicate-best-effort-basis-record | Duplicate Contract-4 basis record | Дублирующая запись базиса Contract 4 | More than one active basis record resolves to the same Contract-4 field assessment revision. | К одной ревизии оценки поля Contract 4 разрешается более одной активной записи базиса. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.039 |
| c6.validation.040 | missing-nonbest-effort-basis-link | Missing Contract-6 basis-link record | Отсутствующая запись связи базиса Contract 6 | An entity-subtype, confidence or provenance unit lacks its required Contract-6 basis-link record. | Единица подтипа сущности, уверенности или происхождения не имеет обязательной записи связи базиса Contract 6. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.040 |
| c6.validation.041 | basis-link-redefines-contract4 | Basis-link redefines Contract-4 basis | Запись связи переопределяет базис Contract 4 | A Contract-6 basis-link changes the meaning or ID of an imported c4.determinabilitybasis entry. | Запись связи Contract 6 изменяет значение или ID импортированной записи c4.determinabilitybasis. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 | c6.failure.041 |
| c6.validation.042 | field-basis-applicability-violation | Field-specific basis applicability violation | Нарушение применимости базиса по полю | A best-effort assessment uses a basis ID not allowed by the accepted Contract-4 field matrix. | Оценка best-effort поля использует ID базиса, не разрешённый принятой матрицей полей Contract 4. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.042 |
| c6.validation.043 | invalid-sufficient-negative-field | Invalid use of sufficient-negative basis | Недопустимое использование достаточного отрицательного базиса | Basis .016 is used for a field or imported domain that does not permit an explicit negative or supported empty result. | Базис .016 используется для поля или импортированного домена, не допускающего явный отрицательный или подтверждённый пустой результат. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.043 |
| c6.validation.044 | positive-basis-uniqueness-shortcut | Positive basis treated as unique result | Положительный базис принят за уникальный результат | Basis .001 is used to seal determinable before the complete candidate/member set is evaluated. | Базис .001 используется для запечатывания «определимо» до оценки полного набора кандидатов или элементов. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.044 |
| c6.validation.045 | negative-basis-direct-outcome | Negative/contradictory basis mapped directly to outcome | Отрицательный или противоречащий базис напрямую отображён в исход | Basis .002 is mapped directly to inconclusive or not-determinable without candidate-set re-evaluation. | Базис .002 напрямую отображается в «неоднозначно» или «неопределимо» без повторной оценки набора кандидатов. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.045 |
| c6.validation.046 | coverage-limitation-outcome-conflict | Invalid coverage-limitation derivation | Недопустимый вывод из ограничения покрытия | Bases .003-.006 produce not-determinable while a supported result, valid contradiction or invalid evidence defect remains. | Базисы .003-.006 дают «неопределимо», когда остаётся поддержанный результат, действительное противоречие или дефект недопустимого свидетельства. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.046 |
| c6.validation.047 | cross-view-outcome-without-adjudication | Cross-view outcome without adjudication | Исход по противоречию между ракурсами без разрешения | Basis .007 produces a terminal outcome before governed adjudication completes. | Базис .007 даёт конечный исход до завершения управляемого разрешения. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.047 |
| c6.validation.048 | integrity-basis-used-as-outcome | Integrity-failure basis used as outcome | Базис нарушения целостности использован как исход | One of bases .008-.012 is converted to an outcome instead of blocking sealing. | Один из базисов .008-.012 преобразуется в исход вместо блокировки запечатывания. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.048 |
| c6.validation.049 | duplicate-basis-not-normalized | Duplicate-only support not normalized | Поддержка только дубликатами не нормализована | Basis .013 is mapped to an outcome before duplicate collapse and full re-derivation. | Базис .013 отображается в исход до сведения дубликатов и полного повторного вывода. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.049 |
| c6.validation.050 | unable-to-complete-coerced-to-inconclusive | Unable-to-complete coerced to inconclusive | Невозможность завершить преобразована в «неоднозначно» | The unable-to-complete adjudication disposition is converted to inconclusive instead of leaving the unit unsealed. | Результат разрешения «невозможно завершить» преобразуется в «неоднозначно» вместо сохранения незапечатанного состояния. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.050 |
| c6.validation.051 | unsupported-modality-as-outcome | Unsupported modality converted to outcome | Неподдерживаемая модальность преобразована в исход | Basis .014 produces not-determinable or another outcome instead of invalid/unsealable. | Базис .014 даёт «неопределимо» или другой исход вместо состояния недействительности и незапечатываемости. | c6.validationscope.009 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.051 |
| c6.validation.052 | mixed-context-basis-as-outcome | Mixed-context basis converted to outcome | Базис смешанного контекста преобразован в исход | Basis .015 produces an outcome instead of invalid/unsealable. | Базис .015 даёт исход вместо состояния недействительности и незапечатываемости. | c6.validationscope.009 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.052 |
| c6.validation.053 | unsupported-empty-result | Unsupported empty result marked determinable | Неподдержанный пустой результат отмечен как определимый | An empty or negative result is marked determinable without imported-domain permission and basis .016. | Пустой или отрицательный результат отмечен как «определимо» без разрешения импортированного домена и базиса .016. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.053 |
| c6.validation.054 | missing-assessment-evidence-set | Missing assessment-target evidence set for .016 | Отсутствующий набор свидетельств уровня оценки для .016 | A no-value assessment uses basis .016 without the mandatory Contract-4 assessment-target evidence set. | Оценка без значения использует базис .016 без обязательного набора свидетельств Contract 4, нацеленного на оценку. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.054 |
| c6.validation.055 | confidence-shortcut | Confidence used as determinability shortcut | Уверенность использована как сокращённый путь к определимости | A Contract-5 dimension alone determines a Contract-6 outcome. | Измерение Contract 5 само по себе определяет исход Contract 6. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.055 |
| c6.validation.056 | outcome-rewrites-confidence | Outcome rewrites confidence | Исход переписывает уверенность | Contract-6 processing edits the linked ConfidenceAssertion. | Обработка Contract 6 изменяет связанную ConfidenceAssertion. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.004 | c6.failure.056 |
| c6.validation.057 | provenance-shortcut | Provenance used as determinability shortcut | Происхождение использовано как сокращённый путь к определимости | A Contract-4 provenance value alone determines a Contract-6 outcome. | Значение происхождения Contract 4 само по себе определяет исход Contract 6. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.057 |
| c6.validation.058 | outcome-rewrites-provenance | Outcome rewrites provenance | Исход переписывает происхождение | Contract-6 processing edits provenance, producing stage or parent lineage. | Обработка Contract 6 изменяет происхождение, производящий этап или родительскую цепочку. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 | c6.failure.058 |
| c6.validation.059 | evidence-quantity-shortcut | Evidence quantity used as sufficiency | Количество свидетельств использовано как достаточность | Image, contribution, agreement or signal count substitutes for qualitative basis and candidate-set evaluation. | Количество изображений, вкладов, согласий или сигналов заменяет качественный базис и оценку набора кандидатов. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.059 |
| c6.validation.060 | lost-per-view-lineage | Lost per-view lineage | Потерянное происхождение отдельного ракурса | A consolidated unit cannot resolve every retained per-view contribution and atomic source pair. | Консолидированная единица не может разрешить каждый сохранённый вклад отдельного ракурса и атомарную пару источников. | c6.validationscope.005 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.060 |
| c6.validation.061 | per-view-sealed-outcome | Per-view unit carries sealed outcome | Единица отдельного ракурса несёт запечатанный исход | A c6.viewscope.001 record is sealed or assigned a terminal outcome. | Запись c6.viewscope.001 запечатана или ей назначен конечный исход. | c6.validationscope.005 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.061 |
| c6.validation.062 | automatic-consolidation-shortcut | Automatic consolidation shortcut | Автоматическое упрощение консолидации | Majority vote, averaging, automatic best-view selection or image-count outcome upgrade is applied without accepted method authority. | Голосование большинством, усреднение, автоматический выбор лучшего ракурса или повышение исхода по числу изображений применяется без принятого полномочия метода. | c6.validationscope.005 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.062 |
| c6.validation.063 | silent-contradiction-removal | Silent contradiction removal | Скрытое удаление противоречия | A retained conflict, candidate, basis or rationale is removed or downgraded to force an outcome. | Сохранённый конфликт, кандидат, базис или обоснование удаляется или понижается для принудительного получения исхода. | c6.validationscope.005 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.005 | c6.failure.063 |
| c6.validation.064 | seal-with-incomplete-prerequisites | Sealing with incomplete prerequisites | Запечатывание с неполными предпосылками | Sealing occurs without consolidated scope, complete pairing, valid basis, one outcome, integrity references or blocking-failure clearance. | Запечатывание выполняется без консолидированного скоупа, полного сопоставления, действительного базиса, одного исхода, ссылок целостности или устранения блокирующего сбоя. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.064 |
| c6.validation.065 | seal-invalid-basis-combination | Sealing with invalid basis combination | Запечатывание с недопустимой комбинацией базисов | A basis combination classified invalid or unresolved is sealed without correction or adjudication. | Комбинация базисов, классифицированная как недопустимая или неразрешённая, запечатывается без исправления или разрешения. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.065 |
| c6.validation.066 | post-seal-mutation | Post-seal mutation | Мутация после запечатывания | A sealed identity, outcome, basis, participant set or rationale is edited in place. | Запечатанная идентичность, исход, базис, набор участников или обоснование изменяется на месте. | c6.validationscope.006 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 | c6.failure.066 |
| c6.validation.067 | invalid-supersession-chain | Invalid supersession chain | Недопустимая цепочка замещения | A successor has zero or multiple predecessors, a cycle, an unresolved predecessor or deleted history. | Преемник имеет ноль или несколько предшественников, цикл, неразрешимого предшественника или удалённую историю. | c6.validationscope.006 | c6.validationphase.006 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.067 |
| c6.validation.068 | invalidation-history-loss | Invalidation history loss | Потеря истории при признании недействительным | Invalidation deletes or obscures the historical outcome, evidence, reason or integrity chain. | Признание недействительным удаляет или скрывает исторический исход, свидетельства, причину или цепочку целостности. | c6.validationscope.006 | c6.validationphase.006 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.068 |
| c6.validation.069 | unauthorized-reopening | Unauthorized reopening | Неавторизованное повторное открытие | A sealed revision is reopened or edited without a new revision and explicit authorized role reference. | Запечатанная ревизия открывается повторно или изменяется без новой ревизии и явной ссылки на уполномоченную роль. | c6.validationscope.006 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 | c6.failure.069 |
| c6.validation.070 | missing-adjudication-trigger | Missing adjudication trigger | Отсутствующий триггер разрешения | An adjudication record does not resolve exactly one registered trigger. | Запись разрешения не разрешает ровно один зарегистрированный триггер. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.070 |
| c6.validation.071 | adjudicating-invalid-record | Invalid record sent to adjudication | Недействительная запись направлена на разрешение | Adjudication is used to bypass a missing, malformed, cross-context or integrity-invalid record defect. | Разрешение используется для обхода отсутствующего, повреждённого, сквозного или нарушающего целостность дефекта записи. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.071 |
| c6.validation.072 | missing-adjudication-authority | Missing adjudication authority reference | Отсутствующая ссылка на полномочие разрешения | An adjudication record lacks its governed authority reference. | Запись разрешения не имеет управляемой ссылки на полномочие. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.072 |
| c6.validation.073 | missing-adjudication-rationale | Missing adjudication rationale | Отсутствующее обоснование разрешения | An adjudication disposition lacks a non-empty rationale tied to the retained basis and evidence. | Результат разрешения не имеет непустого обоснования, связанного с сохранённым базисом и свидетельствами. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.073 |
| c6.validation.074 | invented-adjudication-evidence | Adjudication invents evidence | Разрешение изобретает свидетельства | Adjudication adds unsupported evidence or removes retained evidence from the decision basis. | Разрешение добавляет неподдержанные свидетельства или удаляет сохранённые свидетельства из базиса решения. | c6.validationscope.007 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.005 | c6.failure.074 |
| c6.validation.075 | invalid-adjudication-disposition | Invalid adjudication disposition | Недопустимый результат разрешения | An unregistered adjudication disposition is used or an affirming disposition violates its outcome predicate. | Используется незарегистрированный результат разрешения или подтверждающий результат нарушает предикат исхода. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.075 |
| c6.validation.076 | unable-disposition-assigns-outcome | Unable-to-complete assigns outcome | «Невозможно завершить» назначает исход | The unable-to-complete disposition assigns any Contract-6 outcome or permits sealing. | Результат «невозможно завершить» назначает какой-либо исход Contract 6 или допускает запечатывание. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.076 |
| c6.validation.077 | timeout-to-outcome-fallback | Timeout or non-completion converted to outcome | Тайм-аут или незавершённость преобразованы в исход | Elapsed time or non-completion automatically becomes not-determinable, inconclusive or another outcome. | Истечение времени или незавершённость автоматически становится «неопределимо», «неоднозначно» или другим исходом. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.077 |
| c6.validation.078 | runtime-input-boundary-violation | Runtime or input boundary violation | Нарушение границы runtime или входных данных | The operation includes more than one RoomCase, zero or more than six images, excluded modality, cross-session fusion or another forbidden runtime shape. | Операция включает более одного RoomCase, ноль или более шести изображений, исключённую модальность, межсессионное слияние или другую запрещённую форму runtime. | c6.validationscope.009 | c6.validationphase.002 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.078 |
| c6.validation.079 | domain-or-source-boundary-violation | Domain or source boundary violation | Нарушение границы домена или источника | Commercial scope, real user photographs or an unauthorized source class is admitted. | Допускается коммерческий скоуп, реальные пользовательские фотографии или неавторизованный класс источника. | c6.validationscope.009 | c6.validationphase.002 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.079 |
| c6.validation.080 | missing-localization-target | Missing EN/RU localization target | Отсутствующая цель локализации EN/RU | An exposed Contract-6 stable target lacks a localization row or one required EN/RU field. | Открытая стабильная цель Contract 6 не имеет строки локализации или одного обязательного поля EN/RU. | c6.validationscope.008 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.080 |
| c6.validation.081 | localization-semantic-mismatch | EN/RU semantic mismatch or invalid fallback | Семантическое несовпадение EN/RU или неверный fallback | The RU label/definition loses or changes the canonical EN action, or fallback is not canonical English. | Русская метка или определение теряет либо изменяет каноническое действие EN, или fallback не является каноническим английским. | c6.validationscope.008 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.081 |
| c6.validation.082 | controlled-learning-activation | Controlled Learning activation attempted | Попытка активации Controlled Learning | Automatic outcome, mapping, adjudication-policy, feedback-learning or production-behavior mutation is activated. | Активируется автоматическое изменение исхода, отображения, политики разрешения, обучение по feedback или production-поведение. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.009 | c6.failure.082 |
| c6.validation.083 | ownership-boundary-violation | Ownership-boundary violation | Нарушение границы владения | Contract 6 redefines an identity or semantic rule owned by Contracts 1-5, ETAP, provider governance or Track C. | Contract 6 переопределяет идентичность или семантическое правило, принадлежащее Contracts 1-5, ETAP, governance провайдеров или Track C. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 | c6.failure.083 |
| c6.validation.084 | contract10-serialization-leak | Contract-10 serialization leakage | Утечка сериализации Contract 10 | A final JSON, API, database, protobuf, TypeScript, envelope or wire name is fixed. | Фиксируется окончательное имя JSON, API, базы данных, protobuf, TypeScript, envelope или wire. | c6.validationscope.009 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 | c6.failure.084 |
| c6.validation.085 | implementation-or-etap-authorization-leak | Implementation or ETAP authorization leakage | Утечка полномочий реализации или ETAP | The Contract redefines ETAP metrics or authorizes code, corpus, fixtures, annotation, provider/model or deployment activity. | Contract переопределяет метрики ETAP или авторизует код, корпус, fixtures, аннотацию, работу с провайдером/моделью или deployment. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.008 | c6.failure.085 |
| c6.validation.086 | rule-coverage-defect | Normative rule coverage defect | Дефект покрытия нормативного правила | A normative rule has neither validation mapping nor explicit definition-only rationale, or a validation lacks exactly one primary failure. | Нормативное правило не имеет ни сопоставления с проверкой, ни явного обоснования «только определение», либо проверка не имеет ровно одного основного сбоя. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE | c6.failure.086 |
| c6.validation.087 | unauthorized-downstream-or-governance-step | Unauthorized downstream or governance step | Неавторизованный нижестоящий или governance-шаг | The document claims Contract 7-10 opening, acceptance, Candidate Lock, persistence, implementation, Diagnosability or Security Architecture without separate authority. | Документ заявляет открытие Contracts 7-10, принятие, Candidate Lock, persistence, реализацию, Diagnosability или Security Architecture без отдельного полномочия. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.008 | c6.failure.087 |

### 21.4 Rule → validation coverage

| Rule ID | Validation IDs |
|---|---|
| c6.rule.001 | c6.validation.003, c6.validation.004 |
| c6.rule.002 | c6.validation.005 |
| c6.rule.003 | c6.validation.006 |
| c6.rule.004 | c6.validation.007 |
| c6.rule.005 | c6.validation.008, c6.validation.009 |
| c6.rule.006 | c6.validation.010 |
| c6.rule.007 | c6.validation.011, c6.validation.012 |
| c6.rule.008 | c6.validation.013, c6.validation.014, c6.validation.015 |
| c6.rule.009 | c6.validation.016 |
| c6.rule.010 | c6.validation.017, c6.validation.018 |
| c6.rule.011 | c6.validation.019, c6.validation.020 |
| c6.rule.012 | c6.validation.021, c6.validation.022, c6.validation.023 |
| c6.rule.013 | c6.validation.024, c6.validation.025 |
| c6.rule.014 | c6.validation.026, c6.validation.027 |
| c6.rule.015 | c6.validation.028, c6.validation.029, c6.validation.030 |
| c6.rule.016 | c6.validation.031 |
| c6.rule.017 | c6.validation.032, c6.validation.033 |
| c6.rule.018 | c6.validation.034 |
| c6.rule.019 | c6.validation.035 |
| c6.rule.020 | c6.validation.036, c6.validation.050 |
| c6.rule.021 | c6.validation.037 |
| c6.rule.022 | c6.validation.038, c6.validation.039 |
| c6.rule.023 | c6.validation.040, c6.validation.041 |
| c6.rule.024 | c6.validation.042, c6.validation.043 |
| c6.rule.025 | c6.validation.044 |
| c6.rule.026 | c6.validation.045 |
| c6.rule.027 | c6.validation.046 |
| c6.rule.028 | c6.validation.047 |
| c6.rule.029 | c6.validation.048 |
| c6.rule.030 | c6.validation.049 |
| c6.rule.031 | c6.validation.051, c6.validation.052 |
| c6.rule.032 | c6.validation.053, c6.validation.054 |
| c6.rule.033 | c6.validation.055 |
| c6.rule.034 | c6.validation.056 |
| c6.rule.035 | c6.validation.057 |
| c6.rule.036 | c6.validation.058 |
| c6.rule.037 | c6.validation.059 |
| c6.rule.038 | c6.validation.021, c6.validation.022 |
| c6.rule.039 | c6.validation.029, c6.validation.030 |
| c6.rule.040 | c6.validation.053, c6.validation.054 |
| c6.rule.041 | c6.validation.060 |
| c6.rule.042 | c6.validation.061 |
| c6.rule.043 | c6.validation.013, c6.validation.015 |
| c6.rule.044 | c6.validation.062 |
| c6.rule.045 | c6.validation.063 |
| c6.rule.046 | c6.validation.064, c6.validation.065 |
| c6.rule.047 | c6.validation.032 |
| c6.rule.048 | c6.validation.066 |
| c6.rule.049 | c6.validation.067 |
| c6.rule.050 | c6.validation.068 |
| c6.rule.051 | c6.validation.069 |
| c6.rule.052 | c6.validation.070, c6.validation.071 |
| c6.rule.053 | c6.validation.072, c6.validation.073, c6.validation.074 |
| c6.rule.054 | c6.validation.075, c6.validation.076 |
| c6.rule.055 | c6.validation.036, c6.validation.050 |
| c6.rule.056 | c6.validation.035, c6.validation.051, c6.validation.077 |
| c6.rule.057 | c6.validation.078, c6.validation.079 |
| c6.rule.058 | c6.validation.080, c6.validation.081 |
| c6.rule.059 | c6.validation.082 |
| c6.rule.060 | c6.validation.083 |
| c6.rule.061 | c6.validation.084 |
| c6.rule.062 | c6.validation.085 |
| c6.rule.063 | c6.validation.086, c6.validation.001, c6.validation.002 |
| c6.rule.064 | c6.validation.087 |

### 21.5 Validation → rule coverage

| Validation ID | Rule IDs |
|---|---|
| c6.validation.001 | c6.rule.063 |
| c6.validation.002 | c6.rule.063 |
| c6.validation.003 | c6.rule.001 |
| c6.validation.004 | c6.rule.001 |
| c6.validation.005 | c6.rule.002 |
| c6.validation.006 | c6.rule.003 |
| c6.validation.007 | c6.rule.004 |
| c6.validation.008 | c6.rule.005 |
| c6.validation.009 | c6.rule.005 |
| c6.validation.010 | c6.rule.006 |
| c6.validation.011 | c6.rule.007 |
| c6.validation.012 | c6.rule.007 |
| c6.validation.013 | c6.rule.008, c6.rule.043 |
| c6.validation.014 | c6.rule.008 |
| c6.validation.015 | c6.rule.008, c6.rule.043 |
| c6.validation.016 | c6.rule.009 |
| c6.validation.017 | c6.rule.010 |
| c6.validation.018 | c6.rule.010 |
| c6.validation.019 | c6.rule.011 |
| c6.validation.020 | c6.rule.011 |
| c6.validation.021 | c6.rule.012, c6.rule.038 |
| c6.validation.022 | c6.rule.012, c6.rule.038 |
| c6.validation.023 | c6.rule.012 |
| c6.validation.024 | c6.rule.013 |
| c6.validation.025 | c6.rule.013 |
| c6.validation.026 | c6.rule.014 |
| c6.validation.027 | c6.rule.014 |
| c6.validation.028 | c6.rule.015 |
| c6.validation.029 | c6.rule.015, c6.rule.039 |
| c6.validation.030 | c6.rule.015, c6.rule.039 |
| c6.validation.031 | c6.rule.016 |
| c6.validation.032 | c6.rule.017, c6.rule.047 |
| c6.validation.033 | c6.rule.017 |
| c6.validation.034 | c6.rule.018 |
| c6.validation.035 | c6.rule.019, c6.rule.056 |
| c6.validation.036 | c6.rule.020, c6.rule.055 |
| c6.validation.037 | c6.rule.021 |
| c6.validation.038 | c6.rule.022 |
| c6.validation.039 | c6.rule.022 |
| c6.validation.040 | c6.rule.023 |
| c6.validation.041 | c6.rule.023 |
| c6.validation.042 | c6.rule.024 |
| c6.validation.043 | c6.rule.024 |
| c6.validation.044 | c6.rule.025 |
| c6.validation.045 | c6.rule.026 |
| c6.validation.046 | c6.rule.027 |
| c6.validation.047 | c6.rule.028 |
| c6.validation.048 | c6.rule.029 |
| c6.validation.049 | c6.rule.030 |
| c6.validation.050 | c6.rule.020, c6.rule.055 |
| c6.validation.051 | c6.rule.031, c6.rule.056 |
| c6.validation.052 | c6.rule.031 |
| c6.validation.053 | c6.rule.032, c6.rule.040 |
| c6.validation.054 | c6.rule.032, c6.rule.040 |
| c6.validation.055 | c6.rule.033 |
| c6.validation.056 | c6.rule.034 |
| c6.validation.057 | c6.rule.035 |
| c6.validation.058 | c6.rule.036 |
| c6.validation.059 | c6.rule.037 |
| c6.validation.060 | c6.rule.041 |
| c6.validation.061 | c6.rule.042 |
| c6.validation.062 | c6.rule.044 |
| c6.validation.063 | c6.rule.045 |
| c6.validation.064 | c6.rule.046 |
| c6.validation.065 | c6.rule.046 |
| c6.validation.066 | c6.rule.048 |
| c6.validation.067 | c6.rule.049 |
| c6.validation.068 | c6.rule.050 |
| c6.validation.069 | c6.rule.051 |
| c6.validation.070 | c6.rule.052 |
| c6.validation.071 | c6.rule.052 |
| c6.validation.072 | c6.rule.053 |
| c6.validation.073 | c6.rule.053 |
| c6.validation.074 | c6.rule.053 |
| c6.validation.075 | c6.rule.054 |
| c6.validation.076 | c6.rule.054 |
| c6.validation.077 | c6.rule.056 |
| c6.validation.078 | c6.rule.057 |
| c6.validation.079 | c6.rule.057 |
| c6.validation.080 | c6.rule.058 |
| c6.validation.081 | c6.rule.058 |
| c6.validation.082 | c6.rule.059 |
| c6.validation.083 | c6.rule.060 |
| c6.validation.084 | c6.rule.061 |
| c6.validation.085 | c6.rule.062 |
| c6.validation.086 | c6.rule.063 |
| c6.validation.087 | c6.rule.064 |

All 87 validations are reachable from at least one normative rule.
## 22. Failure Registry

| Failure ID | Token | EN label | RU label | EN definition | RU definition | Scope | Phase | Severity | Required handling | Escalation |
|---|---|---|---|---|---|---|---|---|---|---|
| c6.failure.001 | unknown-stable-id | Unknown Contract-6 stable ID | Неизвестный стабильный ID Contract 6 | A Contract-6-owned identity does not resolve to the closed registry that owns it. | Идентификатор, принадлежащий Contract 6, не разрешается в закрытом реестре-владельце. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.002 | duplicate-stable-id | Duplicate Contract-6 stable ID | Дублирующий стабильный ID Contract 6 | The same Contract-6 stable ID is defined more than once or assigned to different semantics. | Один и тот же стабильный ID Contract 6 определён более одного раза или назначен разной семантике. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.003 | missing-identity-component | Missing annotation-unit identity component | Отсутствующий компонент идентичности единицы аннотации | A mandatory semantic component of the annotation-unit identity is absent. | Обязательный семантический компонент идентичности единицы аннотации отсутствует. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.004 | invalid-conditional-identity-cardinality | Invalid conditional identity cardinality | Недопустимая условная кардинальность идентичности | A conditional member or predecessor identity violates its declared cardinality. | Условный идентификатор элемента или предшественника нарушает объявленную кардинальность. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.005 | identity-reassignment | Stable identity reassignment | Переназначение стабильной идентичности | An accepted or sealed identity is rebound to another subject or semantic meaning. | Принятая или запечатанная идентичность перепривязывается к другому субъекту или семантическому значению. | c6.validationscope.002 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 |
| c6.failure.006 | invalid-view-scope | Invalid view-scope identity | Недопустимый идентификатор скоупа ракурса | The view scope is missing, unregistered or incompatible with the record. | Скоуп ракурса отсутствует, не зарегистрирован или несовместим с записью. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.007 | invalid-unit-granularity | Invalid unit-granularity identity | Недопустимый идентификатор гранулярности единицы | The unit granularity is missing, unregistered or not allowed for the unit type. | Гранулярность единицы отсутствует, не зарегистрирована или не разрешена для типа единицы. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.008 | duplicate-active-unit | Duplicate active annotation unit | Дублирующая активная единица аннотации | Two active records use the same complete semantic identity tuple. | Две активные записи используют один и тот же полный кортеж семантической идентичности. | c6.validationscope.002 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.009 | silent-subject-rebinding | Silent subject rebinding | Скрытая перепривязка субъекта | An existing annotation-unit revision changes its subject identity instead of creating a new revision. | Существующая ревизия единицы аннотации изменяет идентичность субъекта вместо создания новой ревизии. | c6.validationscope.002 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 |
| c6.failure.010 | recordtype-conformance-failure | Record-type conformance failure | Нарушение соответствия типу записи | A Contract-6 record lacks its record type or omits a mandatory component of that record class. | Запись Contract 6 не имеет типа записи или пропускает обязательный компонент этого класса. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.011 | wrong-pairing-rule | Wrong pairing rule for unit type | Неверное правило сопоставления для типа единицы | A unit type is paired through a rule other than its registered c6.pairingrule identity. | Тип единицы сопоставляется по правилу, отличному от зарегистрированного идентификатора c6.pairingrule. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.012 | pairing-key-mismatch | Pairing key mismatch | Несовпадение ключа сопоставления | One or more required identity-equality components differ across pairing participants. | Один или более обязательных компонентов равенства идентичностей различаются между участниками сопоставления. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.013 | cross-operation-pairing | Cross-Operation pairing | Сопоставление между Operations | Pairing participants reference different Operation identities. | Участники сопоставления ссылаются на разные идентификаторы Operation. | c6.validationscope.003 | c6.validationphase.003 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.014 | cross-roomcase-pairing | Cross-RoomCase pairing | Сопоставление между RoomCases | Pairing participants reference different RoomCase identities or physical rooms. | Участники сопоставления ссылаются на разные идентификаторы RoomCase или физические комнаты. | c6.validationscope.003 | c6.validationphase.003 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.015 | mixed-material-state-pairing | Mixed material-state pairing | Сопоставление смешанных материальных состояний | Pairing participants belong to materially different room states. | Участники сопоставления относятся к материально различным состояниям комнаты. | c6.validationscope.003 | c6.validationphase.003 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.016 | positional-pairing | Positional or label-only pairing | Позиционное сопоставление или сопоставление только по метке | Display label, array position, provider order or image index is used as the sole pairing key. | Отображаемая метка, позиция массива, порядок провайдера или индекс изображения используется как единственный ключ сопоставления. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.017 | missing-pairing-state | Missing pairing state | Отсутствующее состояние сопоставления | A pairing record does not resolve exactly one c6.pairingstate identity. | Запись сопоставления не разрешает ровно один идентификатор c6.pairingstate. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.018 | ineligible-pairing-state-progression | Ineligible pairing state progression | Недопустимое продвижение состояния сопоставления | An incomplete, duplicate or invalid pairing proceeds to derivation or sealing. | Неполное, дублирующее или недопустимое сопоставление переходит к выводу или запечатыванию. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.019 | missing-cardinality-one-participant | Missing cardinality-one participant | Отсутствующий участник с кардинальностью один | A participant slot declared exactly one contains no active participant. | Позиция участника с кардинальностью ровно один не содержит активного участника. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.020 | duplicate-cardinality-one-participant | Duplicate cardinality-one participant | Дублирующий участник с кардинальностью один | A participant slot declared exactly one contains more than one active participant. | Позиция участника с кардинальностью ровно один содержит более одного активного участника. | c6.validationscope.003 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.021 | determinable-subtype-cardinality | Determinable subtype cardinality violation | Нарушение кардинальности определимого подтипа | A determinable entity-subtype assessment does not resolve exactly one active subtype. | Оценка подтипа сущности с исходом «определимо» не разрешает ровно один активный подтип. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.022 | resolved-subtype-on-nondeterminable-outcome | Resolved subtype on non-determinable or inconclusive outcome | Разрешённый подтип при исходе «неопределимо» или «неоднозначно» | A not-determinable or inconclusive entity-subtype revision still carries a resolved subtype. | Ревизия подтипа сущности с исходом «неопределимо» или «неоднозначно» всё ещё содержит разрешённый подтип. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.023 | lost-subtype-candidate-set | Lost subtype candidate set | Потерянный набор кандидатов подтипа | An unresolved entity-subtype outcome discards the exhausted or conflicting candidate set and its basis. | Неразрешённый исход подтипа сущности отбрасывает исчерпанный или конфликтующий набор кандидатов и его базис. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.024 | confidence-unit-truth-substitution | Confidence unit substitutes for subject truth | Единица уверенности подменяет истинность субъекта | A confidence-unit outcome is used as the truth result of the underlying subject. | Исход единицы уверенности используется как результат истинности базового субъекта. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.025 | confidence-dimension-mutation | Contract-5 confidence dimension mutation | Мутация измерения уверенности Contract 5 | Contract 6 changes a linked confidence state, source, transformation or signal type. | Contract 6 изменяет связанное состояние, источник, преобразование или тип сигнала уверенности. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.004 |
| c6.failure.026 | provenance-unit-evidence-substitution | Provenance unit substitutes for evidence | Единица происхождения подменяет свидетельство | A provenance-unit outcome is used in place of required evidence or basis. | Исход единицы происхождения используется вместо требуемого свидетельства или базиса. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.027 | provenance-mutation | Contract-4 provenance mutation | Мутация происхождения Contract 4 | Contract 6 changes a linked provenance identity, producing stage or parent lineage. | Contract 6 изменяет связанную идентичность происхождения, производящий этап или родительскую цепочку. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 |
| c6.failure.028 | best-effort-assessment-basis-mismatch | Best-effort assessment/basis mismatch | Несовпадение оценки best-effort и базиса | The linked DeterminabilityEvidenceBasisRecord does not resolve to the same Contract-4 field assessment. | Связанная DeterminabilityEvidenceBasisRecord не разрешается к той же оценке поля Contract 4. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.029 | unsealed-multivalue-member | Unsealed active multi-value member | Незапечатанный активный элемент многозначного поля | A multi-value assessment summary is sealed while an active member unit is unsealed. | Итог многозначной оценки запечатывается, когда активная единица-элемент остаётся незапечатанной. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.030 | hidden-member-conflict | Hidden multi-value member conflict | Скрытый конфликт элемента многозначного поля | A field summary seals while a retained member conflict is unresolved or omitted. | Итог поля запечатывается при неразрешённом или опущенном сохранённом конфликте элемента. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.031 | invalid-outcome-registry | Invalid outcome identity or count | Недопустимая идентичность или количество исходов | An unregistered, aliased, renamed or fourth Contract-6 outcome is introduced. | Вводится незарегистрированный, псевдонимный, переименованный или четвёртый исход Contract 6. | c6.validationscope.001 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.032 | duplicate-sealed-outcome | Duplicate sealed outcome | Дублирующий запечатанный исход | More than one sealed outcome-decision record exists for one annotation-unit revision. | Для одной ревизии единицы аннотации существует более одной запечатанной записи решения об исходе. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.033 | outcome-on-unsealable-record | Outcome assigned to unsealable record | Исход назначен незапечатываемой записи | An invalid or unable-to-complete record carries a Contract-6 outcome. | Недействительная запись или запись с невозможностью завершить несёт исход Contract 6. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.034 | determinable-without-unique-supported-result | Determinable without one unique supported result | «Определимо» без одного уникального поддержанного результата | The determinable outcome is assigned without exactly one admissible result supported by complete valid basis. | Исход «определимо» назначен без ровно одного допустимого результата, поддержанного полным действительным базисом. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.035 | invalid-not-determinable-fallback | Invalid not-determinable fallback | Недопустимый переход к «неопределимо» | Not-determinable is assigned despite a supported result, unresolved valid contradiction, invalid record defect or absent coverage-limitation basis. | Исход «неопределимо» назначен при наличии поддержанного результата, неразрешённого действительного противоречия, дефекта недействительной записи или отсутствии базиса ограничения покрытия. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.036 | inconclusive-without-completed-adjudication | Inconclusive without completed adjudication | «Неоднозначно» без завершённого разрешения | Inconclusive is assigned without complete valid evidence and a completed affirm-inconclusive disposition. | Исход «неоднозначно» назначен без полных действительных свидетельств и завершённого результата, подтверждающего неоднозначность. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.037 | invalid-record-coerced-to-outcome | Invalid record coerced to outcome | Недействительная запись преобразована в исход | A missing, malformed, integrity-failed or authorization-invalid record is converted to an outcome. | Отсутствующая, повреждённая, нарушающая целостность или полномочия запись преобразуется в исход. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.038 | missing-best-effort-basis-record | Missing Contract-4 basis record | Отсутствующая запись базиса Contract 4 | A best-effort field assessment lacks its required Contract-4 DeterminabilityEvidenceBasisRecord. | Оценка best-effort поля не имеет обязательной записи DeterminabilityEvidenceBasisRecord Contract 4. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.039 | duplicate-best-effort-basis-record | Duplicate Contract-4 basis record | Дублирующая запись базиса Contract 4 | More than one active basis record resolves to the same Contract-4 field assessment revision. | К одной ревизии оценки поля Contract 4 разрешается более одной активной записи базиса. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.040 | missing-nonbest-effort-basis-link | Missing Contract-6 basis-link record | Отсутствующая запись связи базиса Contract 6 | An entity-subtype, confidence or provenance unit lacks its required Contract-6 basis-link record. | Единица подтипа сущности, уверенности или происхождения не имеет обязательной записи связи базиса Contract 6. | c6.validationscope.004 | c6.validationphase.002 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.041 | basis-link-redefines-contract4 | Basis-link redefines Contract-4 basis | Запись связи переопределяет базис Contract 4 | A Contract-6 basis-link changes the meaning or ID of an imported c4.determinabilitybasis entry. | Запись связи Contract 6 изменяет значение или ID импортированной записи c4.determinabilitybasis. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 |
| c6.failure.042 | field-basis-applicability-violation | Field-specific basis applicability violation | Нарушение применимости базиса по полю | A best-effort assessment uses a basis ID not allowed by the accepted Contract-4 field matrix. | Оценка best-effort поля использует ID базиса, не разрешённый принятой матрицей полей Contract 4. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.043 | invalid-sufficient-negative-field | Invalid use of sufficient-negative basis | Недопустимое использование достаточного отрицательного базиса | Basis .016 is used for a field or imported domain that does not permit an explicit negative or supported empty result. | Базис .016 используется для поля или импортированного домена, не допускающего явный отрицательный или подтверждённый пустой результат. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.044 | positive-basis-uniqueness-shortcut | Positive basis treated as unique result | Положительный базис принят за уникальный результат | Basis .001 is used to seal determinable before the complete candidate/member set is evaluated. | Базис .001 используется для запечатывания «определимо» до оценки полного набора кандидатов или элементов. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.045 | negative-basis-direct-outcome | Negative/contradictory basis mapped directly to outcome | Отрицательный или противоречащий базис напрямую отображён в исход | Basis .002 is mapped directly to inconclusive or not-determinable without candidate-set re-evaluation. | Базис .002 напрямую отображается в «неоднозначно» или «неопределимо» без повторной оценки набора кандидатов. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.046 | coverage-limitation-outcome-conflict | Invalid coverage-limitation derivation | Недопустимый вывод из ограничения покрытия | Bases .003-.006 produce not-determinable while a supported result, valid contradiction or invalid evidence defect remains. | Базисы .003-.006 дают «неопределимо», когда остаётся поддержанный результат, действительное противоречие или дефект недопустимого свидетельства. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.047 | cross-view-outcome-without-adjudication | Cross-view outcome without adjudication | Исход по противоречию между ракурсами без разрешения | Basis .007 produces a terminal outcome before governed adjudication completes. | Базис .007 даёт конечный исход до завершения управляемого разрешения. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.048 | integrity-basis-used-as-outcome | Integrity-failure basis used as outcome | Базис нарушения целостности использован как исход | One of bases .008-.012 is converted to an outcome instead of blocking sealing. | Один из базисов .008-.012 преобразуется в исход вместо блокировки запечатывания. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.049 | duplicate-basis-not-normalized | Duplicate-only support not normalized | Поддержка только дубликатами не нормализована | Basis .013 is mapped to an outcome before duplicate collapse and full re-derivation. | Базис .013 отображается в исход до сведения дубликатов и полного повторного вывода. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.050 | unable-to-complete-coerced-to-inconclusive | Unable-to-complete coerced to inconclusive | Невозможность завершить преобразована в «неоднозначно» | The unable-to-complete adjudication disposition is converted to inconclusive instead of leaving the unit unsealed. | Результат разрешения «невозможно завершить» преобразуется в «неоднозначно» вместо сохранения незапечатанного состояния. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.051 | unsupported-modality-as-outcome | Unsupported modality converted to outcome | Неподдерживаемая модальность преобразована в исход | Basis .014 produces not-determinable or another outcome instead of invalid/unsealable. | Базис .014 даёт «неопределимо» или другой исход вместо состояния недействительности и незапечатываемости. | c6.validationscope.009 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.052 | mixed-context-basis-as-outcome | Mixed-context basis converted to outcome | Базис смешанного контекста преобразован в исход | Basis .015 produces an outcome instead of invalid/unsealable. | Базис .015 даёт исход вместо состояния недействительности и незапечатываемости. | c6.validationscope.009 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.053 | unsupported-empty-result | Unsupported empty result marked determinable | Неподдержанный пустой результат отмечен как определимый | An empty or negative result is marked determinable without imported-domain permission and basis .016. | Пустой или отрицательный результат отмечен как «определимо» без разрешения импортированного домена и базиса .016. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.054 | missing-assessment-evidence-set | Missing assessment-target evidence set for .016 | Отсутствующий набор свидетельств уровня оценки для .016 | A no-value assessment uses basis .016 without the mandatory Contract-4 assessment-target evidence set. | Оценка без значения использует базис .016 без обязательного набора свидетельств Contract 4, нацеленного на оценку. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.055 | confidence-shortcut | Confidence used as determinability shortcut | Уверенность использована как сокращённый путь к определимости | A Contract-5 dimension alone determines a Contract-6 outcome. | Измерение Contract 5 само по себе определяет исход Contract 6. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.056 | outcome-rewrites-confidence | Outcome rewrites confidence | Исход переписывает уверенность | Contract-6 processing edits the linked ConfidenceAssertion. | Обработка Contract 6 изменяет связанную ConfidenceAssertion. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.004 |
| c6.failure.057 | provenance-shortcut | Provenance used as determinability shortcut | Происхождение использовано как сокращённый путь к определимости | A Contract-4 provenance value alone determines a Contract-6 outcome. | Значение происхождения Contract 4 само по себе определяет исход Contract 6. | c6.validationscope.009 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.058 | outcome-rewrites-provenance | Outcome rewrites provenance | Исход переписывает происхождение | Contract-6 processing edits provenance, producing stage or parent lineage. | Обработка Contract 6 изменяет происхождение, производящий этап или родительскую цепочку. | c6.validationscope.009 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 |
| c6.failure.059 | evidence-quantity-shortcut | Evidence quantity used as sufficiency | Количество свидетельств использовано как достаточность | Image, contribution, agreement or signal count substitutes for qualitative basis and candidate-set evaluation. | Количество изображений, вкладов, согласий или сигналов заменяет качественный базис и оценку набора кандидатов. | c6.validationscope.004 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.060 | lost-per-view-lineage | Lost per-view lineage | Потерянное происхождение отдельного ракурса | A consolidated unit cannot resolve every retained per-view contribution and atomic source pair. | Консолидированная единица не может разрешить каждый сохранённый вклад отдельного ракурса и атомарную пару источников. | c6.validationscope.005 | c6.validationphase.003 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.061 | per-view-sealed-outcome | Per-view unit carries sealed outcome | Единица отдельного ракурса несёт запечатанный исход | A c6.viewscope.001 record is sealed or assigned a terminal outcome. | Запись c6.viewscope.001 запечатана или ей назначен конечный исход. | c6.validationscope.005 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.062 | automatic-consolidation-shortcut | Automatic consolidation shortcut | Автоматическое упрощение консолидации | Majority vote, averaging, automatic best-view selection or image-count outcome upgrade is applied without accepted method authority. | Голосование большинством, усреднение, автоматический выбор лучшего ракурса или повышение исхода по числу изображений применяется без принятого полномочия метода. | c6.validationscope.005 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.063 | silent-contradiction-removal | Silent contradiction removal | Скрытое удаление противоречия | A retained conflict, candidate, basis or rationale is removed or downgraded to force an outcome. | Сохранённый конфликт, кандидат, базис или обоснование удаляется или понижается для принудительного получения исхода. | c6.validationscope.005 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.005 |
| c6.failure.064 | seal-with-incomplete-prerequisites | Sealing with incomplete prerequisites | Запечатывание с неполными предпосылками | Sealing occurs without consolidated scope, complete pairing, valid basis, one outcome, integrity references or blocking-failure clearance. | Запечатывание выполняется без консолидированного скоупа, полного сопоставления, действительного базиса, одного исхода, ссылок целостности или устранения блокирующего сбоя. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.065 | seal-invalid-basis-combination | Sealing with invalid basis combination | Запечатывание с недопустимой комбинацией базисов | A basis combination classified invalid or unresolved is sealed without correction or adjudication. | Комбинация базисов, классифицированная как недопустимая или неразрешённая, запечатывается без исправления или разрешения. | c6.validationscope.006 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.066 | post-seal-mutation | Post-seal mutation | Мутация после запечатывания | A sealed identity, outcome, basis, participant set or rationale is edited in place. | Запечатанная идентичность, исход, базис, набор участников или обоснование изменяется на месте. | c6.validationscope.006 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 |
| c6.failure.067 | invalid-supersession-chain | Invalid supersession chain | Недопустимая цепочка замещения | A successor has zero or multiple predecessors, a cycle, an unresolved predecessor or deleted history. | Преемник имеет ноль или несколько предшественников, цикл, неразрешимого предшественника или удалённую историю. | c6.validationscope.006 | c6.validationphase.006 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.068 | invalidation-history-loss | Invalidation history loss | Потеря истории при признании недействительным | Invalidation deletes or obscures the historical outcome, evidence, reason or integrity chain. | Признание недействительным удаляет или скрывает исторический исход, свидетельства, причину или цепочку целостности. | c6.validationscope.006 | c6.validationphase.006 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.069 | unauthorized-reopening | Unauthorized reopening | Неавторизованное повторное открытие | A sealed revision is reopened or edited without a new revision and explicit authorized role reference. | Запечатанная ревизия открывается повторно или изменяется без новой ревизии и явной ссылки на уполномоченную роль. | c6.validationscope.006 | c6.validationphase.006 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.007 |
| c6.failure.070 | missing-adjudication-trigger | Missing adjudication trigger | Отсутствующий триггер разрешения | An adjudication record does not resolve exactly one registered trigger. | Запись разрешения не разрешает ровно один зарегистрированный триггер. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.071 | adjudicating-invalid-record | Invalid record sent to adjudication | Недействительная запись направлена на разрешение | Adjudication is used to bypass a missing, malformed, cross-context or integrity-invalid record defect. | Разрешение используется для обхода отсутствующего, повреждённого, сквозного или нарушающего целостность дефекта записи. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.072 | missing-adjudication-authority | Missing adjudication authority reference | Отсутствующая ссылка на полномочие разрешения | An adjudication record lacks its governed authority reference. | Запись разрешения не имеет управляемой ссылки на полномочие. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.073 | missing-adjudication-rationale | Missing adjudication rationale | Отсутствующее обоснование разрешения | An adjudication disposition lacks a non-empty rationale tied to the retained basis and evidence. | Результат разрешения не имеет непустого обоснования, связанного с сохранённым базисом и свидетельствами. | c6.validationscope.007 | c6.validationphase.004 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.074 | invented-adjudication-evidence | Adjudication invents evidence | Разрешение изобретает свидетельства | Adjudication adds unsupported evidence or removes retained evidence from the decision basis. | Разрешение добавляет неподдержанные свидетельства или удаляет сохранённые свидетельства из базиса решения. | c6.validationscope.007 | c6.validationphase.004 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.005 |
| c6.failure.075 | invalid-adjudication-disposition | Invalid adjudication disposition | Недопустимый результат разрешения | An unregistered adjudication disposition is used or an affirming disposition violates its outcome predicate. | Используется незарегистрированный результат разрешения или подтверждающий результат нарушает предикат исхода. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.076 | unable-disposition-assigns-outcome | Unable-to-complete assigns outcome | «Невозможно завершить» назначает исход | The unable-to-complete disposition assigns any Contract-6 outcome or permits sealing. | Результат «невозможно завершить» назначает какой-либо исход Contract 6 или допускает запечатывание. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.077 | timeout-to-outcome-fallback | Timeout or non-completion converted to outcome | Тайм-аут или незавершённость преобразованы в исход | Elapsed time or non-completion automatically becomes not-determinable, inconclusive or another outcome. | Истечение времени или незавершённость автоматически становится «неопределимо», «неоднозначно» или другим исходом. | c6.validationscope.007 | c6.validationphase.005 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.078 | runtime-input-boundary-violation | Runtime or input boundary violation | Нарушение границы runtime или входных данных | The operation includes more than one RoomCase, zero or more than six images, excluded modality, cross-session fusion or another forbidden runtime shape. | Операция включает более одного RoomCase, ноль или более шести изображений, исключённую модальность, межсессионное слияние или другую запрещённую форму runtime. | c6.validationscope.009 | c6.validationphase.002 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.079 | domain-or-source-boundary-violation | Domain or source boundary violation | Нарушение границы домена или источника | Commercial scope, real user photographs or an unauthorized source class is admitted. | Допускается коммерческий скоуп, реальные пользовательские фотографии или неавторизованный класс источника. | c6.validationscope.009 | c6.validationphase.002 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.080 | missing-localization-target | Missing EN/RU localization target | Отсутствующая цель локализации EN/RU | An exposed Contract-6 stable target lacks a localization row or one required EN/RU field. | Открытая стабильная цель Contract 6 не имеет строки локализации или одного обязательного поля EN/RU. | c6.validationscope.008 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.081 | localization-semantic-mismatch | EN/RU semantic mismatch or invalid fallback | Семантическое несовпадение EN/RU или неверный fallback | The RU label/definition loses or changes the canonical EN action, or fallback is not canonical English. | Русская метка или определение теряет либо изменяет каноническое действие EN, или fallback не является каноническим английским. | c6.validationscope.008 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.082 | controlled-learning-activation | Controlled Learning activation attempted | Попытка активации Controlled Learning | Automatic outcome, mapping, adjudication-policy, feedback-learning or production-behavior mutation is activated. | Активируется автоматическое изменение исхода, отображения, политики разрешения, обучение по feedback или production-поведение. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.009 |
| c6.failure.083 | ownership-boundary-violation | Ownership-boundary violation | Нарушение границы владения | Contract 6 redefines an identity or semantic rule owned by Contracts 1-5, ETAP, provider governance or Track C. | Contract 6 переопределяет идентичность или семантическое правило, принадлежащее Contracts 1-5, ETAP, governance провайдеров или Track C. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 |
| c6.failure.084 | contract10-serialization-leak | Contract-10 serialization leakage | Утечка сериализации Contract 10 | A final JSON, API, database, protobuf, TypeScript, envelope or wire name is fixed. | Фиксируется окончательное имя JSON, API, базы данных, protobuf, TypeScript, envelope или wire. | c6.validationscope.009 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.006 |
| c6.failure.085 | implementation-or-etap-authorization-leak | Implementation or ETAP authorization leakage | Утечка полномочий реализации или ETAP | The Contract redefines ETAP metrics or authorizes code, corpus, fixtures, annotation, provider/model or deployment activity. | Contract переопределяет метрики ETAP или авторизует код, корпус, fixtures, аннотацию, работу с провайдером/моделью или deployment. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.008 |
| c6.failure.086 | rule-coverage-defect | Normative rule coverage defect | Дефект покрытия нормативного правила | A normative rule has neither validation mapping nor explicit definition-only rationale, or a validation lacks exactly one primary failure. | Нормативное правило не имеет ни сопоставления с проверкой, ни явного обоснования «только определение», либо проверка не имеет ровно одного основного сбоя. | c6.validationscope.001 | c6.validationphase.001 | MAJOR | Block the affected operation or sealing step; preserve evidence and report the primary failure. | NONE |
| c6.failure.087 | unauthorized-downstream-or-governance-step | Unauthorized downstream or governance step | Неавторизованный нижестоящий или governance-шаг | The document claims Contract 7-10 opening, acceptance, Candidate Lock, persistence, implementation, Diagnosability or Security Architecture without separate authority. | Документ заявляет открытие Contracts 7-10, принятие, Candidate Lock, persistence, реализацию, Diagnosability или Security Architecture без отдельного полномочия. | c6.validationscope.009 | c6.validationphase.001 | BLOCKER | Block the affected operation or sealing step; preserve evidence and report the primary failure. | c6.escalation.008 |

Validation-to-primary-failure mapping is exactly 1:1:
`c6.validation.NNN → c6.failure.NNN`.
## 23. Escalation Registry

| Stable ID | Token | EN label | RU label | EN definition | RU definition |
|---|---|---|---|---|---|
| c6.escalation.001 | unresolvable-c6-semantics | Unresolvable Contract-6 semantics | Неразрешимая семантика Contract 6 | A Contract-6-owned decision cannot be completed without inventing semantics absent from accepted sources; block the affected unit, preserve all evidence and request explicit governance authority. | Решение, принадлежащее Contract 6, невозможно завершить без изобретения семантики, отсутствующей в принятых источниках; заблокировать затронутую единицу, сохранить все свидетельства и запросить явное governance-полномочие. |
| c6.escalation.002 | upstream-identity-drift | Upstream identity drift | Дрейф идентичности вышестоящего источника | An imported Contract-1–5 identity or meaning changed materially; invalidate current use, preserve historical sealed records and require an authorized compatibility review. | Импортированный идентификатор или значение Contract 1–5 существенно изменилось; признать текущее использование недействительным, сохранить исторические запечатанные записи и потребовать авторизованную проверку совместимости. |
| c6.escalation.003 | contract4-basis-conflict | Contract-4 basis conflict | Конфликт базисов Contract 4 | A valid basis combination is not covered or appears semantically incompatible; do not guess an outcome, retain the complete basis set and route to governed adjudication or Contract-6 correction authority. | Действительная комбинация базисов не покрыта или выглядит семантически несовместимой; не угадывать исход, сохранить полный набор базисов и направить на управляемое разрешение либо к полномочию корректировки Contract 6. |
| c6.escalation.004 | contract5-compatibility-conflict | Contract-5 compatibility conflict | Конфликт совместимости с Contract 5 | A confidence identity or revision cannot be classified without redefining Contract 5; block the affected pairing and request upstream clarification. | Идентификатор или ревизию уверенности невозможно классифицировать без переопределения Contract 5; заблокировать затронутое сопоставление и запросить уточнение вышестоящего источника. |
| c6.escalation.005 | unresolved-valid-contradiction | Unresolved valid contradiction | Неразрешённое действительное противоречие | Valid complete evidence remains contradictory and authorized adjudication cannot complete; leave the unit unsealed, preserve contradiction and await explicit authority. | Действительные полные свидетельства остаются противоречивыми, а авторизованное разрешение невозможно завершить; оставить единицу незапечатанной, сохранить противоречие и ожидать явного полномочия. |
| c6.escalation.006 | ownership-boundary-conflict | Ownership-boundary conflict | Конфликт границы владения | A proposed rule would redefine an identity owned by Contracts 1–5, ETAP, Contract 10 or another unopened consumer; reject the proposal and return it to the owning authority. | Предлагаемое правило переопределяет идентификатор, принадлежащий Contracts 1–5, ETAP, Contract 10 или другому неоткрытому потребителю; отклонить предложение и вернуть его владельцу полномочия. |
| c6.escalation.007 | post-seal-mutation | Post-seal mutation detected | Обнаружена мутация после запечатывания | A sealed unit, outcome, pairing, basis link or adjudication record was modified in place; block use and require an immutable successor revision. | Запечатанная единица, исход, сопоставление, ссылка базиса или запись разрешения изменена на месте; заблокировать использование и потребовать неизменяемую последующую ревизию. |
| c6.escalation.008 | unauthorized-downstream-activation | Unauthorized downstream activation | Неавторизованная активация нижестоящего шага | Contract 7–10, implementation, corpus, provider/model work or persistence is treated as authorized without an explicit Owner decision; stop immediately and restore the governance boundary. | Contract 7–10, реализация, корпус, работа с провайдером/моделью или persistence считаются авторизованными без явного решения Owner; немедленно остановить действие и восстановить governance-границу. |
| c6.escalation.009 | unauthorized-learning-diagnosability-security-activation | Unauthorized learning, diagnosability or security activation | Неавторизованная активация обучения, диагностируемости или безопасности | Any automatic learning behavior or the blocked Diagnosability/Security architecture step is entered before the Supporting Contracts 1–10 predicate is satisfied; stop and preserve the current non-activating compatibility hooks only. | Любое автоматическое обучающее поведение либо заблокированный шаг архитектуры Diagnosability/Security начат до выполнения предиката Supporting Contracts 1–10; остановить действие и сохранить только текущие неактивирующие compatibility hooks. |

### 23.1 Failure → escalation mapping

| Failure ID | Escalation | Handling |
|---|---|---|
| c6.failure.001 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.002 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.003 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.004 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.005 | c6.escalation.007 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.006 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.007 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.008 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.009 | c6.escalation.007 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.010 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.011 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.012 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.013 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.014 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.015 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.016 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.017 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.018 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.019 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.020 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.021 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.022 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.023 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.024 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.025 | c6.escalation.004 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.026 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.027 | c6.escalation.006 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.028 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.029 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.030 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.031 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.032 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.033 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.034 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.035 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.036 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.037 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.038 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.039 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.040 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.041 | c6.escalation.006 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.042 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.043 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.044 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.045 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.046 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.047 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.048 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.049 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.050 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.051 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.052 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.053 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.054 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.055 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.056 | c6.escalation.004 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.057 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.058 | c6.escalation.006 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.059 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.060 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.061 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.062 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.063 | c6.escalation.005 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.064 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.065 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.066 | c6.escalation.007 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.067 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.068 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.069 | c6.escalation.007 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.070 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.071 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.072 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.073 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.074 | c6.escalation.005 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.075 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.076 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.077 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.078 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.079 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.080 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.081 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.082 | c6.escalation.009 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.083 | c6.escalation.006 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.084 | c6.escalation.006 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.085 | c6.escalation.008 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.086 | NONE | Block the affected operation or sealing step; preserve evidence and report the primary failure. |
| c6.failure.087 | c6.escalation.008 | Block the affected operation or sealing step; preserve evidence and report the primary failure. |

`NONE` means the failure is blocked and corrected locally under its required
handling; it does not mean the failure is ignored.
## 24. Contract-10 Compatibility Boundary

Contract 10 is not authorized and is not opened.

Contract 6 owns semantic identities, applicability and cardinalities.
Contract 10 may later encode them, but must not weaken or redefine them.

This Contract does not fix:

- JSON property names or nesting;
- wire-object names;
- API/database/protobuf/TypeScript schema;
- serialization order;
- envelope placement;
- final conformance syntax.

All component labels in this document are semantic labels only.
## 25. ETAP and Implementation Compatibility

Contract 6 does not redefine ETAP metric identities, classifications,
denominators, populations, thresholds, corpus counts, test splits or fixture
counts.

Implementation inspection is compatibility evidence only. This Contract does
not authorize code changes, schema migration, evaluator modification, corpus,
fixture, annotation, provider/model invocation, deployment or production
activation.

Any future Contract-6 metric is ETAP-owned and requires an authorized ETAP
revision.
## 26. Runtime, Domain and Security Boundaries

```text
Operation
→ RoomCase[exactly 1]
→ ImageAsset[1..6]
→ one consolidated PerceptionResult
```

Permitted:

- one physical, materially unchanged residential room;
- same-room validation;
- cross-view entity matching;
- contradiction preservation and evidence fusion inside one RoomCase;
- licensed, synthetic and staged sources.

Prohibited:

- real user photographs or real-user-data processing;
- commercial property;
- whole-home graph;
- floor plans;
- video;
- panorama;
- 2.5D or 3D reconstruction;
- cross-session fusion;
- Tracks B–H.

All 34 Residential categories remain active simultaneously.
`kitchen_living_room` remains a Named Composite Space Profile.
`primary_bedroom`, `guest_bedroom` and `children_room` remain bedroom
specializations.

No Diagnosability Architecture or Security Architecture is designed or
authorized here.
## 27. Controlled Learning Compatibility

```text
LEARNING-READY
NOT LEARNING-ACTIVE
```

Allowed non-activating compatibility hooks:

- versioned contract, rule, basis and adjudication-policy identities;
- provider-configuration and confidence-model version references;
- trace, evidence, provenance, integrity and immutable history;
- evaluation and rollback compatibility.

Prohibited:

- automatic outcome recalibration;
- automatic basis or mapping changes;
- automatic adjudication-policy changes;
- feedback-driven production mutation;
- training from user data;
- learning analytics;
- personalization as a global learning signal;
- self-modifying determinability behavior.
## 28. EN/RU Localization Registry

English is canonical. Russian is a complete derived locale. Stable IDs are
language-neutral. Missing Russian content falls back to English without
breaking the interface.

| Localization ID | Target | EN label | RU label | EN definition | RU definition | Fallback |
|---|---|---|---|---|---|---|
| c6.loc.001 | c6.semanticmodelversion.001 | Contract 6 semantic model v1 — CC1 candidate | Семантическая модель Contract 6 v1 — кандидат CC1 | Identifies the corrected Revision-1 semantic model candidate; it becomes authoritative only after explicit Project Owner acceptance. | Идентифицирует исправленную кандидатную семантическую модель Revision 1; она становится авторитетной только после явного принятия Project Owner. | EN |
| c6.loc.002 | c6.recordtype.001 | Annotation-unit record | Запись единицы аннотации | Represents one Contract-6-governed determinability subject at one immutable revision. | Представляет один управляемый Contract 6 субъект определимости в одной неизменяемой ревизии. | EN |
| c6.loc.003 | c6.recordtype.002 | Pairing record | Запись сопоставления | Binds one annotation unit to the exact imported participants and identity keys required by its unit type. | Связывает одну единицу аннотации с точными импортированными участниками и ключами идентичности, требуемыми её типом. | EN |
| c6.loc.004 | c6.recordtype.003 | Basis-link record | Запись связи с базисом | Links an annotation unit to Contract-4-owned determinability-basis identities and their resolvable evidence references without redefining those identities. | Связывает единицу аннотации с принадлежащими Contract 4 идентификаторами базиса определимости и разрешимыми ссылками на свидетельства без переопределения этих идентификаторов. | EN |
| c6.loc.005 | c6.recordtype.004 | Outcome-decision record | Запись решения об исходе | Records exactly one Contract-6 outcome for one sealable annotation-unit revision and preserves its derivation or adjudication basis. | Фиксирует ровно один исход Contract 6 для одной запечатываемой ревизии единицы аннотации и сохраняет базис вывода или вынесенного решения. | EN |
| c6.loc.006 | c6.recordtype.005 | Sealing record | Запись запечатывания | Records the lifecycle transition, authority reference, integrity reference and immutable history of sealing, supersession or invalidation. | Фиксирует переход жизненного цикла, ссылку на полномочие, ссылку целостности и неизменяемую историю запечатывания, замещения или признания недействительным. | EN |
| c6.loc.007 | c6.recordtype.006 | Adjudication record | Запись разрешения неоднозначности | Records one governed adjudication attempt, the complete retained basis, rationale, authority reference and disposition. | Фиксирует одну управляемую попытку разрешения неоднозначности, полный сохранённый базис, обоснование, ссылку на полномочие и результат. | EN |
| c6.loc.008 | c6.unittype.001 | Entity-subtype unit | Единица подтипа сущности | Governs determinability of a matched entity's Contract-1-owned subtype assignment without minting subtype vocabulary. | Управляет определимостью назначения подтипа сопоставленной сущности, принадлежащего Contract 1, без создания словаря подтипов. | EN |
| c6.loc.009 | c6.unittype.002 | Confidence unit | Единица уверенности | Governs determinability of one Contract-5 ConfidenceAssertion revision without changing its state, source or transformation. | Управляет определимостью одной ревизии ConfidenceAssertion из Contract 5 без изменения её состояния, источника или преобразования. | EN |
| c6.loc.010 | c6.unittype.003 | Provenance unit | Единица происхождения | Governs determinability of one Contract-4 ProvenanceAttachmentRecord revision without changing the imported provenance value. | Управляет определимостью одной ревизии ProvenanceAttachmentRecord из Contract 4 без изменения импортированного значения происхождения. | EN |
| c6.loc.011 | c6.unittype.004 | Best-effort-field unit | Единица best-effort поля | Governs determinability of one Contract-4 BestEffortFieldAssessmentRecord and, where required, its individual value or tag members. | Управляет определимостью одной записи BestEffortFieldAssessmentRecord из Contract 4 и, когда требуется, её отдельных значений или тегов. | EN |
| c6.loc.012 | c6.unitgranularity.001 | Assessment level | Уровень оценки | The unit governs the complete candidate set or field assessment. | Единица управляет полным набором кандидатов или оценкой поля. | EN |
| c6.loc.013 | c6.unitgranularity.002 | Member level | Уровень элемента | The unit governs one candidate subtype, one scalar value, one tag or one role member inside an assessment. | Единица управляет одним кандидатом подтипа, одним скалярным значением, одним тегом или одной ролью внутри оценки. | EN |
| c6.loc.014 | c6.viewscope.001 | Per-view scope | Скоуп отдельного ракурса | The record describes one contribution originating from exactly one admitted ImageAsset and is never independently sealed. | Запись описывает один вклад, происходящий ровно из одного допущенного ImageAsset, и никогда не запечатывается самостоятельно. | EN |
| c6.loc.015 | c6.viewscope.002 | Consolidated scope | Консолидированный скоуп | The record consolidates admitted contributions inside one RoomCase and is the only scope eligible for a sealed outcome. | Запись консолидирует допущенные вклады внутри одного RoomCase и является единственным скоупом, допускающим запечатанный исход. | EN |
| c6.loc.016 | c6.outcome.001 | Determinable | Определимо | Valid, traceable and non-contradictory retained basis supports exactly one admissible semantic result, including an explicitly supported negative or empty result where the imported domain permits it. | Действительный, прослеживаемый и непротиворечивый сохранённый базис поддерживает ровно один допустимый семантический результат, включая явно подтверждённый отрицательный или пустой результат там, где это допускает импортированный домен. | EN |
| c6.loc.017 | c6.outcome.002 | Not determinable | Неопределимо | Valid retained basis shows that no admissible result can be determined from the admitted coverage, without unresolved contradiction and without an invalid record defect. | Действительный сохранённый базис показывает, что по допущенному покрытию нельзя определить ни один допустимый результат, при отсутствии неразрешённого противоречия и дефекта недействительной записи. | EN |
| c6.loc.018 | c6.outcome.003 | Inconclusive | Неоднозначно | Valid retained evidence remains irreducibly conflicting or ambiguous, and a completed governed adjudication explicitly affirms that ambiguity as the terminal semantic result. | Действительные сохранённые свидетельства остаются неустранимо противоречивыми или неоднозначными, и завершённое управляемое разрешение явно подтверждает эту неоднозначность как конечный семантический результат. | EN |
| c6.loc.019 | c6.pairingrule.001 | Entity-subtype pairing | Сопоставление подтипа сущности | Pairs one matched entity assessment with its Contract-1 subtype candidate members using Operation, RoomCase, entity, revision and scope equality. | Сопоставляет одну оценку сопоставленной сущности с её кандидатами подтипа Contract 1 по равенству Operation, RoomCase, сущности, ревизии и скоупа. | EN |
| c6.loc.020 | c6.pairingrule.002 | Confidence pairing | Сопоставление уверенности | Pairs one eligible subject revision with exactly one compatible Contract-5 ConfidenceAssertion revision. | Сопоставляет одну допустимую ревизию субъекта ровно с одной совместимой ревизией ConfidenceAssertion из Contract 5. | EN |
| c6.loc.021 | c6.pairingrule.003 | Provenance pairing | Сопоставление происхождения | Pairs one provenance-bearing annotation revision with exactly one compatible Contract-4 ProvenanceAttachmentRecord revision. | Сопоставляет одну ревизию аннотации, несущей происхождение, ровно с одной совместимой ревизией ProvenanceAttachmentRecord из Contract 4. | EN |
| c6.loc.022 | c6.pairingrule.004 | Best-effort-field pairing | Сопоставление best-effort поля | Pairs one Contract-4 field assessment with its zero or more imported value members and its exact assessment-level basis record. | Сопоставляет одну оценку поля Contract 4 с её нулём или более импортированными элементами значений и точной записью базиса уровня оценки. | EN |
| c6.loc.023 | c6.pairingstate.001 | Complete pairing | Полное сопоставление | Every required participant resolves exactly once and all identity equalities hold. | Каждый обязательный участник разрешается ровно один раз, и все равенства идентичностей соблюдены. | EN |
| c6.loc.024 | c6.pairingstate.002 | Incomplete pairing | Неполное сопоставление | At least one required participant is absent or unresolved. | Как минимум один обязательный участник отсутствует или не разрешается. | EN |
| c6.loc.025 | c6.pairingstate.003 | Duplicate pairing | Дублирующее сопоставление | More than one active participant occupies a cardinality-one pairing position. | Более одного активного участника занимает позицию сопоставления с кардинальностью один. | EN |
| c6.loc.026 | c6.pairingstate.004 | Complete pairing with valid conflict | Полное сопоставление с действительным конфликтом | Participants resolve correctly, but retained valid evidence supports incompatible semantic interpretations. | Участники разрешаются корректно, но сохранённые действительные свидетельства поддерживают несовместимые семантические интерпретации. | EN |
| c6.loc.027 | c6.pairingstate.005 | Invalid pairing | Недопустимое сопоставление | The pairing violates Operation, RoomCase, material-state, revision, scope, applicability or ownership boundaries. | Сопоставление нарушает границы Operation, RoomCase, материального состояния, ревизии, скоупа, применимости или владения. | EN |
| c6.loc.028 | c6.compatdisposition.001 | Allowed | Разрешено | The combination is valid when ordinary traceability and integrity requirements hold. | Комбинация действительна при соблюдении обычных требований прослеживаемости и целостности. | EN |
| c6.loc.029 | c6.compatdisposition.002 | Conditionally allowed | Условно разрешено | The combination is valid only under the exact condition stated in the matrix cell. | Комбинация действительна только при точном условии, указанном в ячейке матрицы. | EN |
| c6.loc.030 | c6.compatdisposition.003 | Invalid | Недопустимо | The combination is prohibited and blocks sealing. | Комбинация запрещена и блокирует запечатывание. | EN |
| c6.loc.031 | c6.compatdisposition.004 | Not applicable | Неприменимо | The dimension does not apply to this semantic subject. | Измерение не применяется к данному семантическому субъекту. | EN |
| c6.loc.032 | c6.basiseffect.001 | Supports a specific result | Поддерживает конкретный результат | Contract-4 basis .001 supports a specific candidate but does not by itself prove uniqueness across the complete candidate set. | Базис Contract 4 .001 поддерживает конкретного кандидата, но сам по себе не доказывает его уникальность во всём наборе кандидатов. | EN |
| c6.loc.033 | c6.basiseffect.002 | Contradicts a specific result | Противоречит конкретному результату | Contract-4 basis .002 eliminates or weakens a specific candidate and requires candidate-set re-evaluation; it is not a direct unit outcome. | Базис Contract 4 .002 исключает или ослабляет конкретного кандидата и требует повторной оценки набора кандидатов; он не является прямым исходом единицы. | EN |
| c6.loc.034 | c6.basiseffect.003 | Coverage limitation | Ограничение покрытия | Contract-4 bases .003-.006 may support not-determinable only when no valid specific result or unresolved contradiction remains. | Базисы Contract 4 .003-.006 могут поддерживать исход «неопределимо» только при отсутствии действительного конкретного результата и неразрешённого противоречия. | EN |
| c6.loc.035 | c6.basiseffect.004 | Valid contradiction | Действительное противоречие | Contract-4 basis .007 requires preserved conflict and governed adjudication before a terminal outcome. | Базис Contract 4 .007 требует сохранения конфликта и управляемого разрешения до конечного исхода. | EN |
| c6.loc.036 | c6.basiseffect.005 | Invalid evidence or runtime | Недопустимое свидетельство или среда выполнения | Contract-4 bases .008-.012, .014 and .015 make the unit unsealable until corrected; they are not determinability outcomes. | Базисы Contract 4 .008-.012, .014 и .015 делают единицу незапечатываемой до исправления; они не являются исходами определимости. | EN |
| c6.loc.037 | c6.basiseffect.006 | Duplicate normalization | Нормализация дубликатов | Contract-4 basis .013 requires duplicate collapse to one support unit followed by complete re-derivation. | Базис Contract 4 .013 требует сведения дубликатов к одной единице поддержки с последующим полным повторным выводом. | EN |
| c6.loc.038 | c6.basiseffect.007 | Sufficient negative result | Достаточный отрицательный результат | Contract-4 basis .016 may support a determinable negative or empty result only for fields and imported domains that explicitly permit it. | Базис Contract 4 .016 может поддерживать определимый отрицательный или пустой результат только для полей и импортированных доменов, которые явно это допускают. | EN |
| c6.loc.039 | c6.lifecycle.001 | Unsealed draft | Незапечатанный черновик | The annotation-unit revision is mutable only through creation of new internal draft revisions and is not eligible as a final result. | Ревизия единицы аннотации изменяется только созданием новых внутренних черновых ревизий и не является конечным результатом. | EN |
| c6.loc.040 | c6.lifecycle.002 | Ready for sealing | Готово к запечатыванию | All mandatory pairing, basis, outcome and integrity prerequisites have passed. | Все обязательные предпосылки сопоставления, базиса, исхода и целостности пройдены. | EN |
| c6.loc.041 | c6.lifecycle.003 | Sealed | Запечатано | Exactly one immutable outcome is effective for the annotation-unit revision. | Для ревизии единицы аннотации действует ровно один неизменяемый исход. | EN |
| c6.loc.042 | c6.lifecycle.004 | Superseded | Заменено | A later immutable revision replaces the record for current use while preserving the historical sealed record. | Более поздняя неизменяемая ревизия заменяет запись для текущего использования, сохраняя историческую запечатанную запись. | EN |
| c6.loc.043 | c6.lifecycle.005 | Invalidated | Признано недействительным | The historical record is retained but cannot be used as a current valid result because an integrity, authority or upstream-drift condition invalidated it. | Историческая запись сохраняется, но не может использоваться как текущий действительный результат из-за условия целостности, полномочий или дрейфа вышестоящего источника. | EN |
| c6.loc.044 | c6.adjudicationtrigger.001 | Valid basis conflict | Конфликт действительных базисов | Valid retained basis supports incompatible outcomes or candidate members. | Действительный сохранённый базис поддерживает несовместимые исходы или элементы-кандидаты. | EN |
| c6.loc.045 | c6.adjudicationtrigger.002 | Candidate ambiguity | Неоднозначность кандидатов | Two or more admissible candidate members remain equally supported after ordinary derivation. | Два или более допустимых элемента-кандидата остаются равно поддержанными после обычного вывода. | EN |
| c6.loc.046 | c6.adjudicationtrigger.003 | Cross-view contradiction | Противоречие между ракурсами | Same-RoomCase views preserve incompatible observations of the same semantic aspect. | Ракурсы одного RoomCase сохраняют несовместимые наблюдения одного семантического аспекта. | EN |
| c6.loc.047 | c6.adjudicationtrigger.004 | Derivation non-uniqueness | Неуникальность вывода | The closed derivation matrices yield more than one valid terminal candidate without an invalid record defect. | Закрытые матрицы вывода дают более одного действительного конечного кандидата без дефекта недействительной записи. | EN |
| c6.loc.048 | c6.adjudicationtrigger.005 | Governance referral | Передача на governance-решение | A Contract-6 escalation explicitly refers a valid but unresolved semantic case to governed adjudication. | Эскалация Contract 6 явно передаёт действительный, но неразрешённый семантический случай на управляемое разрешение. | EN |
| c6.loc.049 | c6.adjudicationdisposition.001 | Affirm determinable | Подтвердить «определимо» | Confirms exactly one result supported by the complete retained basis and records the decisive rationale. | Подтверждает ровно один результат, поддержанный полным сохранённым базисом, и фиксирует решающее обоснование. | EN |
| c6.loc.050 | c6.adjudicationdisposition.002 | Affirm not determinable | Подтвердить «неопределимо» | Confirms that valid coverage-limitation basis prevents any admissible result and that no unresolved contradiction remains. | Подтверждает, что действительный базис ограничения покрытия не позволяет получить допустимый результат и неразрешённых противоречий не осталось. | EN |
| c6.loc.051 | c6.adjudicationdisposition.003 | Affirm inconclusive | Подтвердить «неоднозначно» | Confirms that complete valid evidence remains irreducibly conflicting or ambiguous and preserves every conflict. | Подтверждает, что полные действительные свидетельства остаются неустранимо противоречивыми или неоднозначными, и сохраняет каждый конфликт. | EN |
| c6.loc.052 | c6.adjudicationdisposition.004 | Unable to complete adjudication | Невозможно завершить разрешение | Records a process or authority failure; the unit remains unsealed and no Contract-6 outcome is assigned. | Фиксирует сбой процесса или полномочий; единица остаётся незапечатанной, и исход Contract 6 не назначается. | EN |
| c6.loc.053 | c6.multiviewstate.001 | Consistent views | Согласованные ракурсы | Admitted views support one compatible semantic interpretation. | Допущенные ракурсы поддерживают одну совместимую семантическую интерпретацию. | EN |
| c6.loc.054 | c6.multiviewstate.002 | Complementary views | Дополняющие ракурсы | Admitted views add non-conflicting evidence or distinct compatible members. | Допущенные ракурсы добавляют непротиворечивые свидетельства или разные совместимые элементы. | EN |
| c6.loc.055 | c6.multiviewstate.003 | Duplicate-only views | Только дублирующие ракурсы | The apparent support is duplicate or overlapping and must be normalized before derivation. | Видимая поддержка является дублирующей или перекрывающейся и должна быть нормализована до вывода. | EN |
| c6.loc.056 | c6.multiviewstate.004 | Contradictory views | Противоречивые ракурсы | Admitted views support incompatible interpretations of the same semantic aspect. | Допущенные ракурсы поддерживают несовместимые интерпретации одного семантического аспекта. | EN |
| c6.loc.057 | c6.multiviewstate.005 | Invalid view context | Недопустимый контекст ракурсов | The view set crosses RoomCase, Operation, material state or an excluded modality boundary. | Набор ракурсов пересекает границу RoomCase, Operation, материального состояния или исключённой модальности. | EN |
| c6.loc.058 | c6.validationscope.001 | Contract definition | Определение контракта | Checks stable registries, ownership, source fidelity and authorization boundaries. | Проверяет стабильные реестры, владение, соответствие источникам и границы полномочий. | EN |
| c6.loc.059 | c6.validationscope.002 | Annotation-unit instance | Экземпляр единицы аннотации | Checks one annotation-unit identity, scope, granularity and subject binding. | Проверяет идентичность, скоуп, гранулярность и привязку субъекта одной единицы аннотации. | EN |
| c6.loc.060 | c6.validationscope.003 | Pairing instance | Экземпляр сопоставления | Checks participant cardinality, equality keys and pairing completeness. | Проверяет кардинальность участников, ключи равенства и полноту сопоставления. | EN |
| c6.loc.061 | c6.validationscope.004 | Basis and derivation | Базис и вывод | Checks basis applicability, classification, combination and outcome derivation. | Проверяет применимость, классификацию, комбинацию базиса и вывод исхода. | EN |
| c6.loc.062 | c6.validationscope.005 | Multi-image consolidation | Многоракурсная консолидация | Checks per-view lineage, same-room boundaries, duplicate handling and conflict preservation. | Проверяет происхождение по ракурсам, границы одной комнаты, обработку дубликатов и сохранение конфликтов. | EN |
| c6.loc.063 | c6.validationscope.006 | Sealing and lifecycle | Запечатывание и жизненный цикл | Checks sealing prerequisites, lifecycle transitions, immutability and supersession. | Проверяет предпосылки запечатывания, переходы жизненного цикла, неизменяемость и замещение. | EN |
| c6.loc.064 | c6.validationscope.007 | Adjudication | Разрешение неоднозначности | Checks trigger, authority, evidence visibility, rationale and disposition. | Проверяет триггер, полномочие, видимость свидетельств, обоснование и результат. | EN |
| c6.loc.065 | c6.validationscope.008 | Localization | Локализация | Checks complete EN/RU semantic equivalence and English fallback. | Проверяет полную семантическую эквивалентность EN/RU и fallback на английский. | EN |
| c6.loc.066 | c6.validationscope.009 | Cross-cutting governance | Сквозное governance | Checks runtime, domain, ownership, Controlled Learning and downstream stop conditions. | Проверяет runtime, домен, владение, Controlled Learning и стоп-условия нижестоящих шагов. | EN |
| c6.loc.067 | c6.validationphase.001 | Authoring lint | Проверка при подготовке | Runs over the Contract definition before review. | Выполняется над определением Contract до проверки. | EN |
| c6.loc.068 | c6.validationphase.002 | Pre-pairing | До сопоставления | Runs before participants are paired. | Выполняется до сопоставления участников. | EN |
| c6.loc.069 | c6.validationphase.003 | Pairing | Сопоставление | Runs while participant identities and cardinalities are resolved. | Выполняется при разрешении идентичностей и кардинальностей участников. | EN |
| c6.loc.070 | c6.validationphase.004 | Derivation | Вывод | Runs while basis effects and candidate-set outcomes are derived. | Выполняется при выводе эффектов базиса и исходов набора кандидатов. | EN |
| c6.loc.071 | c6.validationphase.005 | Sealing | Запечатывание | Runs before a consolidated outcome revision becomes sealed. | Выполняется до запечатывания консолидированной ревизии исхода. | EN |
| c6.loc.072 | c6.validationphase.006 | Post-sealing | После запечатывания | Runs on mutation, supersession, invalidation and history operations. | Выполняется при мутации, замещении, признании недействительным и операциях истории. | EN |
| c6.loc.073 | c6.rule.001 | Complete annotation-unit identity | Полная идентичность единицы аннотации | Every annotation-unit revision resolves one record type, Operation, RoomCase, subject, subject kind, unit type, granularity, view scope, revision, trace, integrity and history reference; conditional member and predecessor identities follow their declared cardinalities. | Каждая ревизия единицы аннотации разрешает один тип записи, Operation, RoomCase, субъект, вид субъекта, тип единицы, гранулярность, скоуп ракурса, ревизию, ссылки трассировки, целостности и истории; условные идентификаторы элемента и предшественника соблюдают объявленные кардинальности. | EN |
| c6.loc.074 | c6.rule.002 | Stable identity immutability | Неизменяемость стабильной идентичности | Accepted stable IDs and sealed instance identities are never silently reassigned, rebound or reused for different semantics. | Принятые стабильные ID и запечатанные идентичности экземпляров никогда скрытно не переназначаются, не перепривязываются и не используются для иной семантики. | EN |
| c6.loc.075 | c6.rule.003 | Closed view-scope registry | Закрытый реестр скоупов ракурса | Every annotation unit uses exactly one c6.viewscope identity; no unregistered per-view or consolidated literal is accepted. | Каждая единица аннотации использует ровно один идентификатор c6.viewscope; незарегистрированные значения отдельного или консолидированного ракурса не допускаются. | EN |
| c6.loc.076 | c6.rule.004 | Closed unit-granularity registry | Закрытый реестр гранулярности единицы | Every annotation unit uses exactly one c6.unitgranularity identity and satisfies its unit-type-specific applicability. | Каждая единица аннотации использует ровно один идентификатор c6.unitgranularity и соблюдает его применимость к конкретному типу единицы. | EN |
| c6.loc.077 | c6.rule.005 | No duplicate or rebound unit | Запрет дубликата и перепривязки единицы | The same active semantic identity tuple occurs at most once; subject rebinding or same-revision duplicate creation is invalid. | Один и тот же активный кортеж семантической идентичности встречается не более одного раза; перепривязка субъекта или создание дубликата той же ревизии недопустимы. | EN |
| c6.loc.078 | c6.rule.006 | Record-type conformance | Соответствие типу записи | Every Contract-6 record resolves one c6.recordtype identity and satisfies the semantic components owned by that record class. | Каждая запись Contract 6 разрешает один идентификатор c6.recordtype и удовлетворяет семантическим компонентам, принадлежащим этому классу записи. | EN |
| c6.loc.079 | c6.rule.007 | Unit-type-specific pairing key | Ключ сопоставления по типу единицы | Each unit type uses only its registered pairing rule and the exact Operation, RoomCase, subject, revision, scope and conditional member equalities declared in §8. | Каждый тип единицы использует только зарегистрированное правило сопоставления и точные равенства Operation, RoomCase, субъекта, ревизии, скоупа и условного элемента, объявленные в §8. | EN |
| c6.loc.080 | c6.rule.008 | Cross-context pairing prohibited | Запрет сквозного сопоставления контекстов | Participants from different Operations, RoomCases, physical rooms or materially different room states are never paired. | Участники из разных Operations, RoomCases, физических комнат или материально различающихся состояний комнаты никогда не сопоставляются. | EN |
| c6.loc.081 | c6.rule.009 | Positional pairing prohibited | Запрет позиционного сопоставления | Display label, array position, provider order and image index alone are never valid pairing keys. | Отображаемая метка, позиция массива, порядок провайдера и индекс изображения сами по себе никогда не являются действительными ключами сопоставления. | EN |
| c6.loc.082 | c6.rule.010 | Pairing completeness and state | Полнота и состояние сопоставления | Every pairing resolves exactly one c6.pairingstate; only complete or complete-with-valid-conflict states may proceed beyond pairing, subject to §19. | Каждое сопоставление разрешает ровно одно состояние c6.pairingstate; только полное состояние или полное состояние с действительным конфликтом может пройти дальше, с учётом §19. | EN |
| c6.loc.083 | c6.rule.011 | Unit-type cardinality | Кардинальность по типу единицы | Participant and member cardinalities follow the unit-type table in §6; a cardinality-one slot never contains zero or more than one active participant. | Кардинальности участников и элементов соответствуют таблице типов единиц в §6; позиция с кардинальностью один никогда не содержит ноль или более одного активного участника. | EN |
| c6.loc.084 | c6.rule.012 | Entity-subtype candidate-set semantics | Семантика набора кандидатов подтипа | An entity-subtype assessment may contain zero or more candidate-member units; a determinable sealed assessment has exactly one resolved active subtype, while not-determinable or inconclusive assessments have no resolved subtype and preserve the exhausted or conflicting candidate set. | Оценка подтипа сущности может содержать ноль или более единиц-кандидатов; запечатанная оценка «определимо» имеет ровно один разрешённый активный подтип, а оценки «неопределимо» или «неоднозначно» не имеют разрешённого подтипа и сохраняют исчерпанный или конфликтующий набор кандидатов. | EN |
| c6.loc.085 | c6.rule.013 | Confidence-unit semantic boundary | Семантическая граница единицы уверенности | A confidence unit governs whether one imported ConfidenceAssertion revision is determinable from its own governed signals and trace; it never decides the truth of the underlying subject and never rewrites Contract-5 dimensions. | Единица уверенности управляет тем, определима ли одна импортированная ревизия ConfidenceAssertion по её управляемым сигналам и трассировке; она никогда не решает истинность базового субъекта и не переписывает измерения Contract 5. | EN |
| c6.loc.086 | c6.rule.014 | Provenance-unit semantic boundary | Семантическая граница единицы происхождения | A provenance unit governs whether one imported ProvenanceAttachmentRecord revision is determinable from immediate-stage lineage; it never changes the imported provenance value or substitutes for evidence. | Единица происхождения управляет тем, определима ли одна импортированная ревизия ProvenanceAttachmentRecord по происхождению непосредственного этапа; она никогда не изменяет импортированное значение происхождения и не заменяет свидетельства. | EN |
| c6.loc.087 | c6.rule.015 | Best-effort assessment and member semantics | Семантика оценки и элементов best-effort поля | A best-effort assessment-level unit pairs exactly one Contract-4 assessment and basis record; scalar, extent, tag and role members use member-level units where values exist, and a summary outcome never hides an unresolved member conflict. | Единица уровня оценки best-effort поля сопоставляет ровно одну оценку и запись базиса Contract 4; скалярные, размерные, теговые и ролевые элементы используют единицы уровня элемента при наличии значений, а итоговый исход никогда не скрывает неразрешённый конфликт элементов. | EN |
| c6.loc.088 | c6.rule.016 | Closed outcome registry | Закрытый реестр исходов | Exactly three Contract-6 outcomes exist: determinable, not-determinable and inconclusive; no alias, fourth outcome or renamed substitute is valid. | Существуют ровно три исхода Contract 6: «определимо», «неопределимо» и «неоднозначно»; псевдоним, четвёртый исход или переименованный заменитель недопустимы. | EN |
| c6.loc.089 | c6.rule.017 | Outcome exclusivity and completeness | Взаимоисключаемость и полнота исходов | One sealed annotation-unit revision carries exactly one outcome; an unsealable or unable-to-complete record carries no outcome. | Одна запечатанная ревизия единицы аннотации несёт ровно один исход; незапечатываемая запись или запись с незавершённым разрешением не несёт исхода. | EN |
| c6.loc.090 | c6.rule.018 | Determinable predicate | Предикат «определимо» | Determinable requires one unique admissible result supported by complete valid retained basis, including a permitted supported negative or empty result. | Исход «определимо» требует одного уникального допустимого результата, поддержанного полным действительным сохранённым базисом, включая разрешённый подтверждённый отрицательный или пустой результат. | EN |
| c6.loc.091 | c6.rule.019 | Not-determinable predicate | Предикат «неопределимо» | Not-determinable requires valid coverage-limitation basis, no admissible supported result, no unresolved valid contradiction and no invalid record defect. | Исход «неопределимо» требует действительного базиса ограничения покрытия, отсутствия допустимого поддержанного результата, отсутствия неразрешённого действительного противоречия и отсутствия дефекта недействительной записи. | EN |
| c6.loc.092 | c6.rule.020 | Inconclusive predicate | Предикат «неоднозначно» | Inconclusive requires complete valid evidence, irreducible conflict or ambiguity and a completed adjudication disposition affirming inconclusive; process failure alone is not inconclusive. | Исход «неоднозначно» требует полных действительных свидетельств, неустранимого конфликта или неоднозначности и завершённого результата разрешения, подтверждающего неоднозначность; один лишь сбой процесса не является неоднозначностью. | EN |
| c6.loc.093 | c6.rule.021 | Invalid is not an outcome | Недействительность не является исходом | Missing, malformed, cross-context, integrity-failed or authorization-invalid records block sealing and are never converted to any Contract-6 outcome. | Отсутствующие, повреждённые, сквозные, нарушающие целостность или полномочия записи блокируют запечатывание и никогда не преобразуются в исход Contract 6. | EN |
| c6.loc.094 | c6.rule.022 | Best-effort basis source | Источник базиса best-effort поля | Best-effort field units consume the exact Contract-4 DeterminabilityEvidenceBasisRecord linked to the same BestEffortFieldAssessmentRecord and never fabricate a second basis record. | Единицы best-effort поля используют точную запись DeterminabilityEvidenceBasisRecord Contract 4, связанную с той же BestEffortFieldAssessmentRecord, и никогда не создают вторую запись базиса. | EN |
| c6.loc.095 | c6.rule.023 | Non-best-effort basis linkage | Связь базиса для прочих единиц | Entity-subtype, confidence and provenance units use a Contract-6 basis-link record that references exact c4.determinabilitybasis identities and resolvable upstream evidence; it does not claim a Contract-4 field-assessment record exists for those subjects. | Единицы подтипа сущности, уверенности и происхождения используют запись связи базиса Contract 6, которая ссылается на точные идентификаторы c4.determinabilitybasis и разрешимые вышестоящие свидетельства; она не утверждает наличие записи оценки поля Contract 4 для этих субъектов. | EN |
| c6.loc.096 | c6.rule.024 | Field-specific basis applicability | Применимость базиса по полю | Best-effort basis identities follow the accepted Contract-4 §10.3 field matrix; .016 is permitted only for c4.besteffort.field.003, .006, .007 and .008 under their imported conditions. | Идентификаторы базиса best-effort поля следуют принятой матрице Contract 4 §10.3; .016 разрешён только для c4.besteffort.field.003, .006, .007 и .008 при их импортированных условиях. | EN |
| c6.loc.097 | c6.rule.025 | Positive support is candidate-specific | Положительная поддержка относится к кандидату | Basis .001 supports one specific candidate or result but does not prove uniqueness until the complete candidate/member set is evaluated. | Базис .001 поддерживает одного конкретного кандидата или результат, но не доказывает уникальность до оценки полного набора кандидатов или элементов. | EN |
| c6.loc.098 | c6.rule.026 | Negative or contradictory evidence is candidate-specific | Отрицательное или противоречащее свидетельство относится к кандидату | Basis .002 contradicts a specific claim and triggers candidate-set re-evaluation; it never maps directly to inconclusive or not-determinable. | Базис .002 противоречит конкретному утверждению и запускает повторную оценку набора кандидатов; он никогда напрямую не отображается в «неоднозначно» или «неопределимо». | EN |
| c6.loc.099 | c6.rule.027 | Coverage limitation derivation | Вывод из ограничения покрытия | Bases .003-.006 may support not-determinable only when no valid supported result, valid conflict or invalid evidence defect remains. | Базисы .003-.006 могут поддерживать «неопределимо» только когда не остаётся действительного поддержанного результата, действительного конфликта или дефекта недопустимого свидетельства. | EN |
| c6.loc.100 | c6.rule.028 | Cross-view inconsistency requires adjudication | Несогласованность между ракурсами требует разрешения | Basis .007 preserves every conflicting contribution and requires governed adjudication before a terminal determinability outcome. | Базис .007 сохраняет каждый конфликтующий вклад и требует управляемого разрешения до конечного исхода определимости. | EN |
| c6.loc.101 | c6.rule.029 | Evidence-integrity bases block sealing | Базисы нарушения свидетельств блокируют запечатывание | Bases .008-.012 block sealing until the imported lineage, inference, provider grounding, derivation chain or integrity defect is corrected. | Базисы .008-.012 блокируют запечатывание до исправления импортированного дефекта происхождения, вывода, обоснования провайдера, цепочки деривации или целостности. | EN |
| c6.loc.102 | c6.rule.030 | Duplicate-only support is normalized then rederived | Поддержка только дубликатами нормализуется и пересчитывается | Basis .013 requires duplicate collapse to one support unit followed by complete re-derivation; it is not a direct outcome. | Базис .013 требует сведения дубликатов к одной единице поддержки с последующим полным повторным выводом; он не является прямым исходом. | EN |
| c6.loc.103 | c6.rule.031 | Unsupported modality and mixed context are invalid | Неподдерживаемая модальность и смешанный контекст недопустимы | Bases .014 and .015 are hard runtime violations and make the unit invalid/unsealable; they never produce not-determinable. | Базисы .014 и .015 являются жёсткими нарушениями runtime и делают единицу недействительной и незапечатываемой; они никогда не дают исход «неопределимо». | EN |
| c6.loc.104 | c6.rule.032 | Sufficient-negative basis is conditional | Достаточный отрицательный базис условен | Basis .016 supports determinable only for an imported domain that permits an explicit negative or evidence-supported empty result and, for no-value assessments, has the mandatory assessment-target evidence set. | Базис .016 поддерживает «определимо» только для импортированного домена, допускающего явный отрицательный или подтверждённый свидетельствами пустой результат, и для оценки без значения имеет обязательный набор свидетельств, нацеленный на оценку. | EN |
| c6.loc.105 | c6.rule.033 | Confidence never determines outcome by itself | Уверенность сама не определяет исход | No Contract-5 state, source, transformation or signal type alone determines a Contract-6 outcome. | Ни одно состояние, источник, преобразование или тип сигнала Contract 5 само по себе не определяет исход Contract 6. | EN |
| c6.loc.106 | c6.rule.034 | Outcome never rewrites confidence | Исход не переписывает уверенность | Contract-6 derivation, adjudication and sealing never edit or normalize the linked ConfidenceAssertion. | Вывод, разрешение и запечатывание Contract 6 никогда не изменяют и не нормализуют связанную ConfidenceAssertion. | EN |
| c6.loc.107 | c6.rule.035 | Provenance never determines outcome by itself | Происхождение само не определяет исход | No Contract-4 provenance value alone determines a Contract-6 outcome or substitutes for basis and evidence. | Ни одно значение происхождения Contract 4 само по себе не определяет исход Contract 6 и не заменяет базис и свидетельства. | EN |
| c6.loc.108 | c6.rule.036 | Outcome never rewrites provenance | Исход не переписывает происхождение | Contract-6 derivation, adjudication and sealing never edit the linked provenance identity, producing stage or parent lineage. | Вывод, разрешение и запечатывание Contract 6 никогда не изменяют связанную идентичность происхождения, производящий этап или родительское происхождение. | EN |
| c6.loc.109 | c6.rule.037 | Evidence quantity is not sufficiency | Количество свидетельств не является достаточностью | Counts of images, contributions, agreeing views or repeated signals never establish determinability without the qualitative basis and candidate-set requirements. | Количество изображений, вкладов, согласующихся ракурсов или повторяющихся сигналов никогда не устанавливает определимость без качественного базиса и требований к набору кандидатов. | EN |
| c6.loc.110 | c6.rule.038 | Entity outcome cardinality | Кардинальность исхода подтипа сущности | Entity-subtype determinable requires exactly one resolved subtype; not-determinable and inconclusive prohibit a resolved subtype on that revision. | «Определимо» для подтипа сущности требует ровно одного разрешённого подтипа; «неопределимо» и «неоднозначно» запрещают разрешённый подтип в этой ревизии. | EN |
| c6.loc.111 | c6.rule.039 | Multi-valued member closure | Закрытие элементов многозначного поля | A multi-tag or multi-role assessment summary may seal only after every active member unit is sealed or explicitly superseded, and no unresolved member conflict is hidden. | Итог многотеговой или многоролевой оценки может быть запечатан только после запечатывания или явного замещения каждой активной единицы-элемента и при отсутствии скрытого неразрешённого конфликта элементов. | EN |
| c6.loc.112 | c6.rule.040 | Supported empty result | Подтверждённый пустой результат | A determinable empty best-effort result requires imported field semantics permitting emptiness, basis .016 and the Contract-4 assessment-target evidence-set grounding. | Определимый пустой результат best-effort требует импортированной семантики поля, допускающей пустоту, базиса .016 и установленного Contract 4 набора свидетельств, нацеленного на оценку. | EN |
| c6.loc.113 | c6.rule.041 | Per-view lineage preserved | Происхождение по ракурсам сохраняется | Every per-view contribution retains one admitted ImageAsset identity and its atomic source lineage; consolidated units reference rather than replace contributions. | Каждый вклад отдельного ракурса сохраняет один допущенный идентификатор ImageAsset и его атомарное происхождение источника; консолидированные единицы ссылаются на вклады, а не заменяют их. | EN |
| c6.loc.114 | c6.rule.042 | Only consolidated scope may seal | Запечатывается только консолидированный скоуп | A c6.viewscope.001 per-view unit never carries a sealed outcome; only c6.viewscope.002 is sealing-eligible. | Единица c6.viewscope.001 отдельного ракурса никогда не несёт запечатанный исход; запечатывание допускается только для c6.viewscope.002. | EN |
| c6.loc.115 | c6.rule.043 | Same-room and material-state gate | Гейт одной комнаты и материального состояния | Multi-image pairing requires same-room validation and one materially unchanged room state before any consolidation. | Многоракурсное сопоставление требует проверки одной комнаты и одного материально неизменного состояния комнаты до любой консолидации. | EN |
| c6.loc.116 | c6.rule.044 | No automatic consolidation shortcut | Запрет автоматического упрощения консолидации | Majority vote, averaging, automatic best-view selection and automatic outcome upgrade from additional images are prohibited unless a future separately accepted rule authorizes an exact method. | Голосование большинством, усреднение, автоматический выбор лучшего ракурса и автоматическое повышение исхода из-за дополнительных изображений запрещены без будущего отдельно принятого точного правила. | EN |
| c6.loc.117 | c6.rule.045 | Contradiction preservation | Сохранение противоречия | No contribution, candidate, basis identity or conflict rationale is deleted or downgraded to force a cleaner result. | Ни один вклад, кандидат, идентификатор базиса или обоснование конфликта не удаляется и не понижается для получения более удобного результата. | EN |
| c6.loc.118 | c6.rule.046 | Sealing prerequisites | Предпосылки запечатывания | Sealing requires consolidated scope, complete pairing, applicable and valid basis, one derivable or adjudicated outcome, complete integrity references and no blocking failure. | Запечатывание требует консолидированного скоупа, полного сопоставления, применимого и действительного базиса, одного выведенного или подтверждённого исхода, полных ссылок целостности и отсутствия блокирующего сбоя. | EN |
| c6.loc.119 | c6.rule.047 | One sealed outcome per revision | Один запечатанный исход на ревизию | Exactly one sealed outcome-decision record exists for one annotation-unit revision. | Для одной ревизии единицы аннотации существует ровно одна запечатанная запись решения об исходе. | EN |
| c6.loc.120 | c6.rule.048 | Post-seal immutability | Неизменяемость после запечатывания | A sealed identity, outcome, basis set, participant set and rationale are immutable. | Запечатанные идентичность, исход, набор базисов, набор участников и обоснование неизменяемы. | EN |
| c6.loc.121 | c6.rule.049 | Supersession creates a new revision | Замещение создаёт новую ревизию | A correction creates one new immutable revision with exactly one valid predecessor and marks the prior current revision superseded without deleting history. | Исправление создаёт одну новую неизменяемую ревизию ровно с одним действительным предшественником и помечает предыдущую текущую ревизию заменённой без удаления истории. | EN |
| c6.loc.122 | c6.rule.050 | Invalidation preserves history | Признание недействительным сохраняет историю | Invalidation removes current-use eligibility but preserves the historical record, outcome, evidence, reason and integrity chain. | Признание недействительным исключает использование как текущего результата, но сохраняет историческую запись, исход, свидетельства, причину и цепочку целостности. | EN |
| c6.loc.123 | c6.rule.051 | Governed reopening only | Повторное открытие только по полномочию | A sealed revision is never reopened in place; governed correction creates a new revision under an explicit authorized role reference, not routine Project Owner adjudication. | Запечатанная ревизия никогда не открывается повторно на месте; управляемое исправление создаёт новую ревизию по явной ссылке на уполномоченную роль, а не через обычное разрешение Project Owner. | EN |
| c6.loc.124 | c6.rule.052 | Adjudication trigger required | Требуется триггер разрешения | Every adjudication record resolves one registered trigger and applies only to a valid semantic conflict or ambiguity, not to an invalid record defect. | Каждая запись разрешения имеет один зарегистрированный триггер и применяется только к действительному семантическому конфликту или неоднозначности, а не к дефекту недействительной записи. | EN |
| c6.loc.125 | c6.rule.053 | Adjudication evidence and rationale | Свидетельства и обоснование разрешения | Adjudication sees the complete retained evidence, basis, confidence and provenance references, invents no evidence and records authority, rationale and immutable history. | Разрешение видит полные сохранённые ссылки на свидетельства, базис, уверенность и происхождение, не изобретает свидетельства и фиксирует полномочие, обоснование и неизменяемую историю. | EN |
| c6.loc.126 | c6.rule.054 | Closed adjudication dispositions | Закрытые результаты разрешения | Exactly four adjudication dispositions exist; the three affirming dispositions assign their corresponding outcome only when their predicates pass, while unable-to-complete assigns no outcome. | Существуют ровно четыре результата разрешения; три подтверждающих результата назначают соответствующий исход только при выполнении их предикатов, а «невозможно завершить» не назначает исход. | EN |
| c6.loc.127 | c6.rule.055 | Inconclusive differs from unable-to-complete | Неоднозначность отличается от невозможности завершить | Affirm-inconclusive is a completed semantic decision over valid complete evidence; unable-to-complete is a process or authority failure that leaves the unit unsealed. | Подтверждение неоднозначности является завершённым семантическим решением по действительным полным свидетельствам; невозможность завершить является сбоем процесса или полномочий и оставляет единицу незапечатанной. | EN |
| c6.loc.128 | c6.rule.056 | No silent not-determinable fallback | Запрет скрытого перехода к «неопределимо» | No missing participant, invalid evidence, unsupported modality, timeout, adjudication failure or unknown combination silently becomes not-determinable. | Ни один отсутствующий участник, недопустимое свидетельство, неподдерживаемая модальность, тайм-аут, сбой разрешения или неизвестная комбинация скрытно не становится исходом «неопределимо». | EN |
| c6.loc.129 | c6.rule.057 | Runtime and input boundary | Граница runtime и входных данных | The runtime is one Operation, exactly one RoomCase, one to six admitted licensed/synthetic/staged ImageAssets and one consolidated PerceptionResult; real user photos, commercial scope, whole-home, floor plans, video, panorama, 2.5D, 3D and cross-session fusion are prohibited. | Runtime состоит из одной Operation, ровно одного RoomCase, от одного до шести допущенных лицензированных, синтетических или staged ImageAssets и одного консолидированного PerceptionResult; реальные пользовательские фото, коммерческий скоуп, whole-home, планы этажей, видео, панорама, 2.5D, 3D и межсессионное слияние запрещены. | EN |
| c6.loc.130 | c6.rule.058 | Bilingual foundation | Двуязычный фундамент | English is canonical, Russian is a complete derived locale, stable IDs are language-neutral and missing Russian content falls back to English without interface breakage. | Английский является каноническим, русский — полной производной локалью, стабильные ID языково нейтральны, а отсутствующий русский контент использует fallback на английский без поломки интерфейса. | EN |
| c6.loc.131 | c6.rule.059 | Controlled Learning boundary | Граница Controlled Learning | Contract 6 remains LEARNING-READY and NOT LEARNING-ACTIVE; no automatic outcome, mapping, adjudication-policy or production behavior change is authorized. | Contract 6 остаётся LEARNING-READY и NOT LEARNING-ACTIVE; автоматическое изменение исходов, отображений, политики разрешения или production-поведения не авторизовано. | EN |
| c6.loc.132 | c6.rule.060 | Ownership boundary | Граница владения | Contract 6 owns pairing, outcomes, sealing and adjudication only; it never redefines Contracts 1-5, ETAP, provider governance or Track C semantics. | Contract 6 владеет только сопоставлением, исходами, запечатыванием и разрешением; он никогда не переопределяет семантику Contracts 1-5, ETAP, governance провайдеров или Track C. | EN |
| c6.loc.133 | c6.rule.061 | Contract-10 boundary | Граница Contract 10 | Contract 6 defines semantic identities and cardinalities only; final JSON, API, database, protobuf, TypeScript and envelope encoding remain Contract-10-owned and unopened. | Contract 6 определяет только семантические идентичности и кардинальности; окончательные JSON, API, база данных, protobuf, TypeScript и кодирование envelope принадлежат Contract 10 и не открыты. | EN |
| c6.loc.134 | c6.rule.062 | ETAP and implementation boundary | Граница ETAP и реализации | Contract 6 neither redefines ETAP metrics and thresholds nor authorizes code, corpus, fixture, annotation, provider/model or deployment work. | Contract 6 не переопределяет метрики и пороги ETAP и не авторизует код, корпус, fixture, аннотацию, работу с провайдером/моделью или deployment. | EN |
| c6.loc.135 | c6.rule.063 | Complete rule coverage | Полное покрытие правил | Every normative rule has one or more validation references or an explicit definition-only rationale; every validation maps to exactly one primary failure. | Каждое нормативное правило имеет одну или более ссылок на проверки либо явное обоснование «только определение»; каждая проверка сопоставлена ровно с одним основным сбоем. | EN |
| c6.loc.136 | c6.rule.064 | Governance stop conditions | Governance-стоп-условия | Contract 7 and Contracts 7-10 remain unauthorized and unopened; acceptance, Candidate Lock, persistence, implementation, Diagnosability and Security Architecture require separate explicit authority. | Contract 7 и Contracts 7-10 остаются неавторизованными и неоткрытыми; принятие, Candidate Lock, persistence, реализация, Diagnosability и Security Architecture требуют отдельного явного полномочия. | EN |
| c6.loc.137 | c6.validation.001 | Unknown Contract-6 stable ID | Неизвестный стабильный ID Contract 6 | A Contract-6-owned identity does not resolve to the closed registry that owns it. | Идентификатор, принадлежащий Contract 6, не разрешается в закрытом реестре-владельце. | EN |
| c6.loc.138 | c6.validation.002 | Duplicate Contract-6 stable ID | Дублирующий стабильный ID Contract 6 | The same Contract-6 stable ID is defined more than once or assigned to different semantics. | Один и тот же стабильный ID Contract 6 определён более одного раза или назначен разной семантике. | EN |
| c6.loc.139 | c6.validation.003 | Missing annotation-unit identity component | Отсутствующий компонент идентичности единицы аннотации | A mandatory semantic component of the annotation-unit identity is absent. | Обязательный семантический компонент идентичности единицы аннотации отсутствует. | EN |
| c6.loc.140 | c6.validation.004 | Invalid conditional identity cardinality | Недопустимая условная кардинальность идентичности | A conditional member or predecessor identity violates its declared cardinality. | Условный идентификатор элемента или предшественника нарушает объявленную кардинальность. | EN |
| c6.loc.141 | c6.validation.005 | Stable identity reassignment | Переназначение стабильной идентичности | An accepted or sealed identity is rebound to another subject or semantic meaning. | Принятая или запечатанная идентичность перепривязывается к другому субъекту или семантическому значению. | EN |
| c6.loc.142 | c6.validation.006 | Invalid view-scope identity | Недопустимый идентификатор скоупа ракурса | The view scope is missing, unregistered or incompatible with the record. | Скоуп ракурса отсутствует, не зарегистрирован или несовместим с записью. | EN |
| c6.loc.143 | c6.validation.007 | Invalid unit-granularity identity | Недопустимый идентификатор гранулярности единицы | The unit granularity is missing, unregistered or not allowed for the unit type. | Гранулярность единицы отсутствует, не зарегистрирована или не разрешена для типа единицы. | EN |
| c6.loc.144 | c6.validation.008 | Duplicate active annotation unit | Дублирующая активная единица аннотации | Two active records use the same complete semantic identity tuple. | Две активные записи используют один и тот же полный кортеж семантической идентичности. | EN |
| c6.loc.145 | c6.validation.009 | Silent subject rebinding | Скрытая перепривязка субъекта | An existing annotation-unit revision changes its subject identity instead of creating a new revision. | Существующая ревизия единицы аннотации изменяет идентичность субъекта вместо создания новой ревизии. | EN |
| c6.loc.146 | c6.validation.010 | Record-type conformance failure | Нарушение соответствия типу записи | A Contract-6 record lacks its record type or omits a mandatory component of that record class. | Запись Contract 6 не имеет типа записи или пропускает обязательный компонент этого класса. | EN |
| c6.loc.147 | c6.validation.011 | Wrong pairing rule for unit type | Неверное правило сопоставления для типа единицы | A unit type is paired through a rule other than its registered c6.pairingrule identity. | Тип единицы сопоставляется по правилу, отличному от зарегистрированного идентификатора c6.pairingrule. | EN |
| c6.loc.148 | c6.validation.012 | Pairing key mismatch | Несовпадение ключа сопоставления | One or more required identity-equality components differ across pairing participants. | Один или более обязательных компонентов равенства идентичностей различаются между участниками сопоставления. | EN |
| c6.loc.149 | c6.validation.013 | Cross-Operation pairing | Сопоставление между Operations | Pairing participants reference different Operation identities. | Участники сопоставления ссылаются на разные идентификаторы Operation. | EN |
| c6.loc.150 | c6.validation.014 | Cross-RoomCase pairing | Сопоставление между RoomCases | Pairing participants reference different RoomCase identities or physical rooms. | Участники сопоставления ссылаются на разные идентификаторы RoomCase или физические комнаты. | EN |
| c6.loc.151 | c6.validation.015 | Mixed material-state pairing | Сопоставление смешанных материальных состояний | Pairing participants belong to materially different room states. | Участники сопоставления относятся к материально различным состояниям комнаты. | EN |
| c6.loc.152 | c6.validation.016 | Positional or label-only pairing | Позиционное сопоставление или сопоставление только по метке | Display label, array position, provider order or image index is used as the sole pairing key. | Отображаемая метка, позиция массива, порядок провайдера или индекс изображения используется как единственный ключ сопоставления. | EN |
| c6.loc.153 | c6.validation.017 | Missing pairing state | Отсутствующее состояние сопоставления | A pairing record does not resolve exactly one c6.pairingstate identity. | Запись сопоставления не разрешает ровно один идентификатор c6.pairingstate. | EN |
| c6.loc.154 | c6.validation.018 | Ineligible pairing state progression | Недопустимое продвижение состояния сопоставления | An incomplete, duplicate or invalid pairing proceeds to derivation or sealing. | Неполное, дублирующее или недопустимое сопоставление переходит к выводу или запечатыванию. | EN |
| c6.loc.155 | c6.validation.019 | Missing cardinality-one participant | Отсутствующий участник с кардинальностью один | A participant slot declared exactly one contains no active participant. | Позиция участника с кардинальностью ровно один не содержит активного участника. | EN |
| c6.loc.156 | c6.validation.020 | Duplicate cardinality-one participant | Дублирующий участник с кардинальностью один | A participant slot declared exactly one contains more than one active participant. | Позиция участника с кардинальностью ровно один содержит более одного активного участника. | EN |
| c6.loc.157 | c6.validation.021 | Determinable subtype cardinality violation | Нарушение кардинальности определимого подтипа | A determinable entity-subtype assessment does not resolve exactly one active subtype. | Оценка подтипа сущности с исходом «определимо» не разрешает ровно один активный подтип. | EN |
| c6.loc.158 | c6.validation.022 | Resolved subtype on non-determinable or inconclusive outcome | Разрешённый подтип при исходе «неопределимо» или «неоднозначно» | A not-determinable or inconclusive entity-subtype revision still carries a resolved subtype. | Ревизия подтипа сущности с исходом «неопределимо» или «неоднозначно» всё ещё содержит разрешённый подтип. | EN |
| c6.loc.159 | c6.validation.023 | Lost subtype candidate set | Потерянный набор кандидатов подтипа | An unresolved entity-subtype outcome discards the exhausted or conflicting candidate set and its basis. | Неразрешённый исход подтипа сущности отбрасывает исчерпанный или конфликтующий набор кандидатов и его базис. | EN |
| c6.loc.160 | c6.validation.024 | Confidence unit substitutes for subject truth | Единица уверенности подменяет истинность субъекта | A confidence-unit outcome is used as the truth result of the underlying subject. | Исход единицы уверенности используется как результат истинности базового субъекта. | EN |
| c6.loc.161 | c6.validation.025 | Contract-5 confidence dimension mutation | Мутация измерения уверенности Contract 5 | Contract 6 changes a linked confidence state, source, transformation or signal type. | Contract 6 изменяет связанное состояние, источник, преобразование или тип сигнала уверенности. | EN |
| c6.loc.162 | c6.validation.026 | Provenance unit substitutes for evidence | Единица происхождения подменяет свидетельство | A provenance-unit outcome is used in place of required evidence or basis. | Исход единицы происхождения используется вместо требуемого свидетельства или базиса. | EN |
| c6.loc.163 | c6.validation.027 | Contract-4 provenance mutation | Мутация происхождения Contract 4 | Contract 6 changes a linked provenance identity, producing stage or parent lineage. | Contract 6 изменяет связанную идентичность происхождения, производящий этап или родительскую цепочку. | EN |
| c6.loc.164 | c6.validation.028 | Best-effort assessment/basis mismatch | Несовпадение оценки best-effort и базиса | The linked DeterminabilityEvidenceBasisRecord does not resolve to the same Contract-4 field assessment. | Связанная DeterminabilityEvidenceBasisRecord не разрешается к той же оценке поля Contract 4. | EN |
| c6.loc.165 | c6.validation.029 | Unsealed active multi-value member | Незапечатанный активный элемент многозначного поля | A multi-value assessment summary is sealed while an active member unit is unsealed. | Итог многозначной оценки запечатывается, когда активная единица-элемент остаётся незапечатанной. | EN |
| c6.loc.166 | c6.validation.030 | Hidden multi-value member conflict | Скрытый конфликт элемента многозначного поля | A field summary seals while a retained member conflict is unresolved or omitted. | Итог поля запечатывается при неразрешённом или опущенном сохранённом конфликте элемента. | EN |
| c6.loc.167 | c6.validation.031 | Invalid outcome identity or count | Недопустимая идентичность или количество исходов | An unregistered, aliased, renamed or fourth Contract-6 outcome is introduced. | Вводится незарегистрированный, псевдонимный, переименованный или четвёртый исход Contract 6. | EN |
| c6.loc.168 | c6.validation.032 | Duplicate sealed outcome | Дублирующий запечатанный исход | More than one sealed outcome-decision record exists for one annotation-unit revision. | Для одной ревизии единицы аннотации существует более одной запечатанной записи решения об исходе. | EN |
| c6.loc.169 | c6.validation.033 | Outcome assigned to unsealable record | Исход назначен незапечатываемой записи | An invalid or unable-to-complete record carries a Contract-6 outcome. | Недействительная запись или запись с невозможностью завершить несёт исход Contract 6. | EN |
| c6.loc.170 | c6.validation.034 | Determinable without one unique supported result | «Определимо» без одного уникального поддержанного результата | The determinable outcome is assigned without exactly one admissible result supported by complete valid basis. | Исход «определимо» назначен без ровно одного допустимого результата, поддержанного полным действительным базисом. | EN |
| c6.loc.171 | c6.validation.035 | Invalid not-determinable fallback | Недопустимый переход к «неопределимо» | Not-determinable is assigned despite a supported result, unresolved valid contradiction, invalid record defect or absent coverage-limitation basis. | Исход «неопределимо» назначен при наличии поддержанного результата, неразрешённого действительного противоречия, дефекта недействительной записи или отсутствии базиса ограничения покрытия. | EN |
| c6.loc.172 | c6.validation.036 | Inconclusive without completed adjudication | «Неоднозначно» без завершённого разрешения | Inconclusive is assigned without complete valid evidence and a completed affirm-inconclusive disposition. | Исход «неоднозначно» назначен без полных действительных свидетельств и завершённого результата, подтверждающего неоднозначность. | EN |
| c6.loc.173 | c6.validation.037 | Invalid record coerced to outcome | Недействительная запись преобразована в исход | A missing, malformed, integrity-failed or authorization-invalid record is converted to an outcome. | Отсутствующая, повреждённая, нарушающая целостность или полномочия запись преобразуется в исход. | EN |
| c6.loc.174 | c6.validation.038 | Missing Contract-4 basis record | Отсутствующая запись базиса Contract 4 | A best-effort field assessment lacks its required Contract-4 DeterminabilityEvidenceBasisRecord. | Оценка best-effort поля не имеет обязательной записи DeterminabilityEvidenceBasisRecord Contract 4. | EN |
| c6.loc.175 | c6.validation.039 | Duplicate Contract-4 basis record | Дублирующая запись базиса Contract 4 | More than one active basis record resolves to the same Contract-4 field assessment revision. | К одной ревизии оценки поля Contract 4 разрешается более одной активной записи базиса. | EN |
| c6.loc.176 | c6.validation.040 | Missing Contract-6 basis-link record | Отсутствующая запись связи базиса Contract 6 | An entity-subtype, confidence or provenance unit lacks its required Contract-6 basis-link record. | Единица подтипа сущности, уверенности или происхождения не имеет обязательной записи связи базиса Contract 6. | EN |
| c6.loc.177 | c6.validation.041 | Basis-link redefines Contract-4 basis | Запись связи переопределяет базис Contract 4 | A Contract-6 basis-link changes the meaning or ID of an imported c4.determinabilitybasis entry. | Запись связи Contract 6 изменяет значение или ID импортированной записи c4.determinabilitybasis. | EN |
| c6.loc.178 | c6.validation.042 | Field-specific basis applicability violation | Нарушение применимости базиса по полю | A best-effort assessment uses a basis ID not allowed by the accepted Contract-4 field matrix. | Оценка best-effort поля использует ID базиса, не разрешённый принятой матрицей полей Contract 4. | EN |
| c6.loc.179 | c6.validation.043 | Invalid use of sufficient-negative basis | Недопустимое использование достаточного отрицательного базиса | Basis .016 is used for a field or imported domain that does not permit an explicit negative or supported empty result. | Базис .016 используется для поля или импортированного домена, не допускающего явный отрицательный или подтверждённый пустой результат. | EN |
| c6.loc.180 | c6.validation.044 | Positive basis treated as unique result | Положительный базис принят за уникальный результат | Basis .001 is used to seal determinable before the complete candidate/member set is evaluated. | Базис .001 используется для запечатывания «определимо» до оценки полного набора кандидатов или элементов. | EN |
| c6.loc.181 | c6.validation.045 | Negative/contradictory basis mapped directly to outcome | Отрицательный или противоречащий базис напрямую отображён в исход | Basis .002 is mapped directly to inconclusive or not-determinable without candidate-set re-evaluation. | Базис .002 напрямую отображается в «неоднозначно» или «неопределимо» без повторной оценки набора кандидатов. | EN |
| c6.loc.182 | c6.validation.046 | Invalid coverage-limitation derivation | Недопустимый вывод из ограничения покрытия | Bases .003-.006 produce not-determinable while a supported result, valid contradiction or invalid evidence defect remains. | Базисы .003-.006 дают «неопределимо», когда остаётся поддержанный результат, действительное противоречие или дефект недопустимого свидетельства. | EN |
| c6.loc.183 | c6.validation.047 | Cross-view outcome without adjudication | Исход по противоречию между ракурсами без разрешения | Basis .007 produces a terminal outcome before governed adjudication completes. | Базис .007 даёт конечный исход до завершения управляемого разрешения. | EN |
| c6.loc.184 | c6.validation.048 | Integrity-failure basis used as outcome | Базис нарушения целостности использован как исход | One of bases .008-.012 is converted to an outcome instead of blocking sealing. | Один из базисов .008-.012 преобразуется в исход вместо блокировки запечатывания. | EN |
| c6.loc.185 | c6.validation.049 | Duplicate-only support not normalized | Поддержка только дубликатами не нормализована | Basis .013 is mapped to an outcome before duplicate collapse and full re-derivation. | Базис .013 отображается в исход до сведения дубликатов и полного повторного вывода. | EN |
| c6.loc.186 | c6.validation.050 | Unable-to-complete coerced to inconclusive | Невозможность завершить преобразована в «неоднозначно» | The unable-to-complete adjudication disposition is converted to inconclusive instead of leaving the unit unsealed. | Результат разрешения «невозможно завершить» преобразуется в «неоднозначно» вместо сохранения незапечатанного состояния. | EN |
| c6.loc.187 | c6.validation.051 | Unsupported modality converted to outcome | Неподдерживаемая модальность преобразована в исход | Basis .014 produces not-determinable or another outcome instead of invalid/unsealable. | Базис .014 даёт «неопределимо» или другой исход вместо состояния недействительности и незапечатываемости. | EN |
| c6.loc.188 | c6.validation.052 | Mixed-context basis converted to outcome | Базис смешанного контекста преобразован в исход | Basis .015 produces an outcome instead of invalid/unsealable. | Базис .015 даёт исход вместо состояния недействительности и незапечатываемости. | EN |
| c6.loc.189 | c6.validation.053 | Unsupported empty result marked determinable | Неподдержанный пустой результат отмечен как определимый | An empty or negative result is marked determinable without imported-domain permission and basis .016. | Пустой или отрицательный результат отмечен как «определимо» без разрешения импортированного домена и базиса .016. | EN |
| c6.loc.190 | c6.validation.054 | Missing assessment-target evidence set for .016 | Отсутствующий набор свидетельств уровня оценки для .016 | A no-value assessment uses basis .016 without the mandatory Contract-4 assessment-target evidence set. | Оценка без значения использует базис .016 без обязательного набора свидетельств Contract 4, нацеленного на оценку. | EN |
| c6.loc.191 | c6.validation.055 | Confidence used as determinability shortcut | Уверенность использована как сокращённый путь к определимости | A Contract-5 dimension alone determines a Contract-6 outcome. | Измерение Contract 5 само по себе определяет исход Contract 6. | EN |
| c6.loc.192 | c6.validation.056 | Outcome rewrites confidence | Исход переписывает уверенность | Contract-6 processing edits the linked ConfidenceAssertion. | Обработка Contract 6 изменяет связанную ConfidenceAssertion. | EN |
| c6.loc.193 | c6.validation.057 | Provenance used as determinability shortcut | Происхождение использовано как сокращённый путь к определимости | A Contract-4 provenance value alone determines a Contract-6 outcome. | Значение происхождения Contract 4 само по себе определяет исход Contract 6. | EN |
| c6.loc.194 | c6.validation.058 | Outcome rewrites provenance | Исход переписывает происхождение | Contract-6 processing edits provenance, producing stage or parent lineage. | Обработка Contract 6 изменяет происхождение, производящий этап или родительскую цепочку. | EN |
| c6.loc.195 | c6.validation.059 | Evidence quantity used as sufficiency | Количество свидетельств использовано как достаточность | Image, contribution, agreement or signal count substitutes for qualitative basis and candidate-set evaluation. | Количество изображений, вкладов, согласий или сигналов заменяет качественный базис и оценку набора кандидатов. | EN |
| c6.loc.196 | c6.validation.060 | Lost per-view lineage | Потерянное происхождение отдельного ракурса | A consolidated unit cannot resolve every retained per-view contribution and atomic source pair. | Консолидированная единица не может разрешить каждый сохранённый вклад отдельного ракурса и атомарную пару источников. | EN |
| c6.loc.197 | c6.validation.061 | Per-view unit carries sealed outcome | Единица отдельного ракурса несёт запечатанный исход | A c6.viewscope.001 record is sealed or assigned a terminal outcome. | Запись c6.viewscope.001 запечатана или ей назначен конечный исход. | EN |
| c6.loc.198 | c6.validation.062 | Automatic consolidation shortcut | Автоматическое упрощение консолидации | Majority vote, averaging, automatic best-view selection or image-count outcome upgrade is applied without accepted method authority. | Голосование большинством, усреднение, автоматический выбор лучшего ракурса или повышение исхода по числу изображений применяется без принятого полномочия метода. | EN |
| c6.loc.199 | c6.validation.063 | Silent contradiction removal | Скрытое удаление противоречия | A retained conflict, candidate, basis or rationale is removed or downgraded to force an outcome. | Сохранённый конфликт, кандидат, базис или обоснование удаляется или понижается для принудительного получения исхода. | EN |
| c6.loc.200 | c6.validation.064 | Sealing with incomplete prerequisites | Запечатывание с неполными предпосылками | Sealing occurs without consolidated scope, complete pairing, valid basis, one outcome, integrity references or blocking-failure clearance. | Запечатывание выполняется без консолидированного скоупа, полного сопоставления, действительного базиса, одного исхода, ссылок целостности или устранения блокирующего сбоя. | EN |
| c6.loc.201 | c6.validation.065 | Sealing with invalid basis combination | Запечатывание с недопустимой комбинацией базисов | A basis combination classified invalid or unresolved is sealed without correction or adjudication. | Комбинация базисов, классифицированная как недопустимая или неразрешённая, запечатывается без исправления или разрешения. | EN |
| c6.loc.202 | c6.validation.066 | Post-seal mutation | Мутация после запечатывания | A sealed identity, outcome, basis, participant set or rationale is edited in place. | Запечатанная идентичность, исход, базис, набор участников или обоснование изменяется на месте. | EN |
| c6.loc.203 | c6.validation.067 | Invalid supersession chain | Недопустимая цепочка замещения | A successor has zero or multiple predecessors, a cycle, an unresolved predecessor or deleted history. | Преемник имеет ноль или несколько предшественников, цикл, неразрешимого предшественника или удалённую историю. | EN |
| c6.loc.204 | c6.validation.068 | Invalidation history loss | Потеря истории при признании недействительным | Invalidation deletes or obscures the historical outcome, evidence, reason or integrity chain. | Признание недействительным удаляет или скрывает исторический исход, свидетельства, причину или цепочку целостности. | EN |
| c6.loc.205 | c6.validation.069 | Unauthorized reopening | Неавторизованное повторное открытие | A sealed revision is reopened or edited without a new revision and explicit authorized role reference. | Запечатанная ревизия открывается повторно или изменяется без новой ревизии и явной ссылки на уполномоченную роль. | EN |
| c6.loc.206 | c6.validation.070 | Missing adjudication trigger | Отсутствующий триггер разрешения | An adjudication record does not resolve exactly one registered trigger. | Запись разрешения не разрешает ровно один зарегистрированный триггер. | EN |
| c6.loc.207 | c6.validation.071 | Invalid record sent to adjudication | Недействительная запись направлена на разрешение | Adjudication is used to bypass a missing, malformed, cross-context or integrity-invalid record defect. | Разрешение используется для обхода отсутствующего, повреждённого, сквозного или нарушающего целостность дефекта записи. | EN |
| c6.loc.208 | c6.validation.072 | Missing adjudication authority reference | Отсутствующая ссылка на полномочие разрешения | An adjudication record lacks its governed authority reference. | Запись разрешения не имеет управляемой ссылки на полномочие. | EN |
| c6.loc.209 | c6.validation.073 | Missing adjudication rationale | Отсутствующее обоснование разрешения | An adjudication disposition lacks a non-empty rationale tied to the retained basis and evidence. | Результат разрешения не имеет непустого обоснования, связанного с сохранённым базисом и свидетельствами. | EN |
| c6.loc.210 | c6.validation.074 | Adjudication invents evidence | Разрешение изобретает свидетельства | Adjudication adds unsupported evidence or removes retained evidence from the decision basis. | Разрешение добавляет неподдержанные свидетельства или удаляет сохранённые свидетельства из базиса решения. | EN |
| c6.loc.211 | c6.validation.075 | Invalid adjudication disposition | Недопустимый результат разрешения | An unregistered adjudication disposition is used or an affirming disposition violates its outcome predicate. | Используется незарегистрированный результат разрешения или подтверждающий результат нарушает предикат исхода. | EN |
| c6.loc.212 | c6.validation.076 | Unable-to-complete assigns outcome | «Невозможно завершить» назначает исход | The unable-to-complete disposition assigns any Contract-6 outcome or permits sealing. | Результат «невозможно завершить» назначает какой-либо исход Contract 6 или допускает запечатывание. | EN |
| c6.loc.213 | c6.validation.077 | Timeout or non-completion converted to outcome | Тайм-аут или незавершённость преобразованы в исход | Elapsed time or non-completion automatically becomes not-determinable, inconclusive or another outcome. | Истечение времени или незавершённость автоматически становится «неопределимо», «неоднозначно» или другим исходом. | EN |
| c6.loc.214 | c6.validation.078 | Runtime or input boundary violation | Нарушение границы runtime или входных данных | The operation includes more than one RoomCase, zero or more than six images, excluded modality, cross-session fusion or another forbidden runtime shape. | Операция включает более одного RoomCase, ноль или более шести изображений, исключённую модальность, межсессионное слияние или другую запрещённую форму runtime. | EN |
| c6.loc.215 | c6.validation.079 | Domain or source boundary violation | Нарушение границы домена или источника | Commercial scope, real user photographs or an unauthorized source class is admitted. | Допускается коммерческий скоуп, реальные пользовательские фотографии или неавторизованный класс источника. | EN |
| c6.loc.216 | c6.validation.080 | Missing EN/RU localization target | Отсутствующая цель локализации EN/RU | An exposed Contract-6 stable target lacks a localization row or one required EN/RU field. | Открытая стабильная цель Contract 6 не имеет строки локализации или одного обязательного поля EN/RU. | EN |
| c6.loc.217 | c6.validation.081 | EN/RU semantic mismatch or invalid fallback | Семантическое несовпадение EN/RU или неверный fallback | The RU label/definition loses or changes the canonical EN action, or fallback is not canonical English. | Русская метка или определение теряет либо изменяет каноническое действие EN, или fallback не является каноническим английским. | EN |
| c6.loc.218 | c6.validation.082 | Controlled Learning activation attempted | Попытка активации Controlled Learning | Automatic outcome, mapping, adjudication-policy, feedback-learning or production-behavior mutation is activated. | Активируется автоматическое изменение исхода, отображения, политики разрешения, обучение по feedback или production-поведение. | EN |
| c6.loc.219 | c6.validation.083 | Ownership-boundary violation | Нарушение границы владения | Contract 6 redefines an identity or semantic rule owned by Contracts 1-5, ETAP, provider governance or Track C. | Contract 6 переопределяет идентичность или семантическое правило, принадлежащее Contracts 1-5, ETAP, governance провайдеров или Track C. | EN |
| c6.loc.220 | c6.validation.084 | Contract-10 serialization leakage | Утечка сериализации Contract 10 | A final JSON, API, database, protobuf, TypeScript, envelope or wire name is fixed. | Фиксируется окончательное имя JSON, API, базы данных, protobuf, TypeScript, envelope или wire. | EN |
| c6.loc.221 | c6.validation.085 | Implementation or ETAP authorization leakage | Утечка полномочий реализации или ETAP | The Contract redefines ETAP metrics or authorizes code, corpus, fixtures, annotation, provider/model or deployment activity. | Contract переопределяет метрики ETAP или авторизует код, корпус, fixtures, аннотацию, работу с провайдером/моделью или deployment. | EN |
| c6.loc.222 | c6.validation.086 | Normative rule coverage defect | Дефект покрытия нормативного правила | A normative rule has neither validation mapping nor explicit definition-only rationale, or a validation lacks exactly one primary failure. | Нормативное правило не имеет ни сопоставления с проверкой, ни явного обоснования «только определение», либо проверка не имеет ровно одного основного сбоя. | EN |
| c6.loc.223 | c6.validation.087 | Unauthorized downstream or governance step | Неавторизованный нижестоящий или governance-шаг | The document claims Contract 7-10 opening, acceptance, Candidate Lock, persistence, implementation, Diagnosability or Security Architecture without separate authority. | Документ заявляет открытие Contracts 7-10, принятие, Candidate Lock, persistence, реализацию, Diagnosability или Security Architecture без отдельного полномочия. | EN |
| c6.loc.224 | c6.failure.001 | Unknown Contract-6 stable ID | Неизвестный стабильный ID Contract 6 | A Contract-6-owned identity does not resolve to the closed registry that owns it. | Идентификатор, принадлежащий Contract 6, не разрешается в закрытом реестре-владельце. | EN |
| c6.loc.225 | c6.failure.002 | Duplicate Contract-6 stable ID | Дублирующий стабильный ID Contract 6 | The same Contract-6 stable ID is defined more than once or assigned to different semantics. | Один и тот же стабильный ID Contract 6 определён более одного раза или назначен разной семантике. | EN |
| c6.loc.226 | c6.failure.003 | Missing annotation-unit identity component | Отсутствующий компонент идентичности единицы аннотации | A mandatory semantic component of the annotation-unit identity is absent. | Обязательный семантический компонент идентичности единицы аннотации отсутствует. | EN |
| c6.loc.227 | c6.failure.004 | Invalid conditional identity cardinality | Недопустимая условная кардинальность идентичности | A conditional member or predecessor identity violates its declared cardinality. | Условный идентификатор элемента или предшественника нарушает объявленную кардинальность. | EN |
| c6.loc.228 | c6.failure.005 | Stable identity reassignment | Переназначение стабильной идентичности | An accepted or sealed identity is rebound to another subject or semantic meaning. | Принятая или запечатанная идентичность перепривязывается к другому субъекту или семантическому значению. | EN |
| c6.loc.229 | c6.failure.006 | Invalid view-scope identity | Недопустимый идентификатор скоупа ракурса | The view scope is missing, unregistered or incompatible with the record. | Скоуп ракурса отсутствует, не зарегистрирован или несовместим с записью. | EN |
| c6.loc.230 | c6.failure.007 | Invalid unit-granularity identity | Недопустимый идентификатор гранулярности единицы | The unit granularity is missing, unregistered or not allowed for the unit type. | Гранулярность единицы отсутствует, не зарегистрирована или не разрешена для типа единицы. | EN |
| c6.loc.231 | c6.failure.008 | Duplicate active annotation unit | Дублирующая активная единица аннотации | Two active records use the same complete semantic identity tuple. | Две активные записи используют один и тот же полный кортеж семантической идентичности. | EN |
| c6.loc.232 | c6.failure.009 | Silent subject rebinding | Скрытая перепривязка субъекта | An existing annotation-unit revision changes its subject identity instead of creating a new revision. | Существующая ревизия единицы аннотации изменяет идентичность субъекта вместо создания новой ревизии. | EN |
| c6.loc.233 | c6.failure.010 | Record-type conformance failure | Нарушение соответствия типу записи | A Contract-6 record lacks its record type or omits a mandatory component of that record class. | Запись Contract 6 не имеет типа записи или пропускает обязательный компонент этого класса. | EN |
| c6.loc.234 | c6.failure.011 | Wrong pairing rule for unit type | Неверное правило сопоставления для типа единицы | A unit type is paired through a rule other than its registered c6.pairingrule identity. | Тип единицы сопоставляется по правилу, отличному от зарегистрированного идентификатора c6.pairingrule. | EN |
| c6.loc.235 | c6.failure.012 | Pairing key mismatch | Несовпадение ключа сопоставления | One or more required identity-equality components differ across pairing participants. | Один или более обязательных компонентов равенства идентичностей различаются между участниками сопоставления. | EN |
| c6.loc.236 | c6.failure.013 | Cross-Operation pairing | Сопоставление между Operations | Pairing participants reference different Operation identities. | Участники сопоставления ссылаются на разные идентификаторы Operation. | EN |
| c6.loc.237 | c6.failure.014 | Cross-RoomCase pairing | Сопоставление между RoomCases | Pairing participants reference different RoomCase identities or physical rooms. | Участники сопоставления ссылаются на разные идентификаторы RoomCase или физические комнаты. | EN |
| c6.loc.238 | c6.failure.015 | Mixed material-state pairing | Сопоставление смешанных материальных состояний | Pairing participants belong to materially different room states. | Участники сопоставления относятся к материально различным состояниям комнаты. | EN |
| c6.loc.239 | c6.failure.016 | Positional or label-only pairing | Позиционное сопоставление или сопоставление только по метке | Display label, array position, provider order or image index is used as the sole pairing key. | Отображаемая метка, позиция массива, порядок провайдера или индекс изображения используется как единственный ключ сопоставления. | EN |
| c6.loc.240 | c6.failure.017 | Missing pairing state | Отсутствующее состояние сопоставления | A pairing record does not resolve exactly one c6.pairingstate identity. | Запись сопоставления не разрешает ровно один идентификатор c6.pairingstate. | EN |
| c6.loc.241 | c6.failure.018 | Ineligible pairing state progression | Недопустимое продвижение состояния сопоставления | An incomplete, duplicate or invalid pairing proceeds to derivation or sealing. | Неполное, дублирующее или недопустимое сопоставление переходит к выводу или запечатыванию. | EN |
| c6.loc.242 | c6.failure.019 | Missing cardinality-one participant | Отсутствующий участник с кардинальностью один | A participant slot declared exactly one contains no active participant. | Позиция участника с кардинальностью ровно один не содержит активного участника. | EN |
| c6.loc.243 | c6.failure.020 | Duplicate cardinality-one participant | Дублирующий участник с кардинальностью один | A participant slot declared exactly one contains more than one active participant. | Позиция участника с кардинальностью ровно один содержит более одного активного участника. | EN |
| c6.loc.244 | c6.failure.021 | Determinable subtype cardinality violation | Нарушение кардинальности определимого подтипа | A determinable entity-subtype assessment does not resolve exactly one active subtype. | Оценка подтипа сущности с исходом «определимо» не разрешает ровно один активный подтип. | EN |
| c6.loc.245 | c6.failure.022 | Resolved subtype on non-determinable or inconclusive outcome | Разрешённый подтип при исходе «неопределимо» или «неоднозначно» | A not-determinable or inconclusive entity-subtype revision still carries a resolved subtype. | Ревизия подтипа сущности с исходом «неопределимо» или «неоднозначно» всё ещё содержит разрешённый подтип. | EN |
| c6.loc.246 | c6.failure.023 | Lost subtype candidate set | Потерянный набор кандидатов подтипа | An unresolved entity-subtype outcome discards the exhausted or conflicting candidate set and its basis. | Неразрешённый исход подтипа сущности отбрасывает исчерпанный или конфликтующий набор кандидатов и его базис. | EN |
| c6.loc.247 | c6.failure.024 | Confidence unit substitutes for subject truth | Единица уверенности подменяет истинность субъекта | A confidence-unit outcome is used as the truth result of the underlying subject. | Исход единицы уверенности используется как результат истинности базового субъекта. | EN |
| c6.loc.248 | c6.failure.025 | Contract-5 confidence dimension mutation | Мутация измерения уверенности Contract 5 | Contract 6 changes a linked confidence state, source, transformation or signal type. | Contract 6 изменяет связанное состояние, источник, преобразование или тип сигнала уверенности. | EN |
| c6.loc.249 | c6.failure.026 | Provenance unit substitutes for evidence | Единица происхождения подменяет свидетельство | A provenance-unit outcome is used in place of required evidence or basis. | Исход единицы происхождения используется вместо требуемого свидетельства или базиса. | EN |
| c6.loc.250 | c6.failure.027 | Contract-4 provenance mutation | Мутация происхождения Contract 4 | Contract 6 changes a linked provenance identity, producing stage or parent lineage. | Contract 6 изменяет связанную идентичность происхождения, производящий этап или родительскую цепочку. | EN |
| c6.loc.251 | c6.failure.028 | Best-effort assessment/basis mismatch | Несовпадение оценки best-effort и базиса | The linked DeterminabilityEvidenceBasisRecord does not resolve to the same Contract-4 field assessment. | Связанная DeterminabilityEvidenceBasisRecord не разрешается к той же оценке поля Contract 4. | EN |
| c6.loc.252 | c6.failure.029 | Unsealed active multi-value member | Незапечатанный активный элемент многозначного поля | A multi-value assessment summary is sealed while an active member unit is unsealed. | Итог многозначной оценки запечатывается, когда активная единица-элемент остаётся незапечатанной. | EN |
| c6.loc.253 | c6.failure.030 | Hidden multi-value member conflict | Скрытый конфликт элемента многозначного поля | A field summary seals while a retained member conflict is unresolved or omitted. | Итог поля запечатывается при неразрешённом или опущенном сохранённом конфликте элемента. | EN |
| c6.loc.254 | c6.failure.031 | Invalid outcome identity or count | Недопустимая идентичность или количество исходов | An unregistered, aliased, renamed or fourth Contract-6 outcome is introduced. | Вводится незарегистрированный, псевдонимный, переименованный или четвёртый исход Contract 6. | EN |
| c6.loc.255 | c6.failure.032 | Duplicate sealed outcome | Дублирующий запечатанный исход | More than one sealed outcome-decision record exists for one annotation-unit revision. | Для одной ревизии единицы аннотации существует более одной запечатанной записи решения об исходе. | EN |
| c6.loc.256 | c6.failure.033 | Outcome assigned to unsealable record | Исход назначен незапечатываемой записи | An invalid or unable-to-complete record carries a Contract-6 outcome. | Недействительная запись или запись с невозможностью завершить несёт исход Contract 6. | EN |
| c6.loc.257 | c6.failure.034 | Determinable without one unique supported result | «Определимо» без одного уникального поддержанного результата | The determinable outcome is assigned without exactly one admissible result supported by complete valid basis. | Исход «определимо» назначен без ровно одного допустимого результата, поддержанного полным действительным базисом. | EN |
| c6.loc.258 | c6.failure.035 | Invalid not-determinable fallback | Недопустимый переход к «неопределимо» | Not-determinable is assigned despite a supported result, unresolved valid contradiction, invalid record defect or absent coverage-limitation basis. | Исход «неопределимо» назначен при наличии поддержанного результата, неразрешённого действительного противоречия, дефекта недействительной записи или отсутствии базиса ограничения покрытия. | EN |
| c6.loc.259 | c6.failure.036 | Inconclusive without completed adjudication | «Неоднозначно» без завершённого разрешения | Inconclusive is assigned without complete valid evidence and a completed affirm-inconclusive disposition. | Исход «неоднозначно» назначен без полных действительных свидетельств и завершённого результата, подтверждающего неоднозначность. | EN |
| c6.loc.260 | c6.failure.037 | Invalid record coerced to outcome | Недействительная запись преобразована в исход | A missing, malformed, integrity-failed or authorization-invalid record is converted to an outcome. | Отсутствующая, повреждённая, нарушающая целостность или полномочия запись преобразуется в исход. | EN |
| c6.loc.261 | c6.failure.038 | Missing Contract-4 basis record | Отсутствующая запись базиса Contract 4 | A best-effort field assessment lacks its required Contract-4 DeterminabilityEvidenceBasisRecord. | Оценка best-effort поля не имеет обязательной записи DeterminabilityEvidenceBasisRecord Contract 4. | EN |
| c6.loc.262 | c6.failure.039 | Duplicate Contract-4 basis record | Дублирующая запись базиса Contract 4 | More than one active basis record resolves to the same Contract-4 field assessment revision. | К одной ревизии оценки поля Contract 4 разрешается более одной активной записи базиса. | EN |
| c6.loc.263 | c6.failure.040 | Missing Contract-6 basis-link record | Отсутствующая запись связи базиса Contract 6 | An entity-subtype, confidence or provenance unit lacks its required Contract-6 basis-link record. | Единица подтипа сущности, уверенности или происхождения не имеет обязательной записи связи базиса Contract 6. | EN |
| c6.loc.264 | c6.failure.041 | Basis-link redefines Contract-4 basis | Запись связи переопределяет базис Contract 4 | A Contract-6 basis-link changes the meaning or ID of an imported c4.determinabilitybasis entry. | Запись связи Contract 6 изменяет значение или ID импортированной записи c4.determinabilitybasis. | EN |
| c6.loc.265 | c6.failure.042 | Field-specific basis applicability violation | Нарушение применимости базиса по полю | A best-effort assessment uses a basis ID not allowed by the accepted Contract-4 field matrix. | Оценка best-effort поля использует ID базиса, не разрешённый принятой матрицей полей Contract 4. | EN |
| c6.loc.266 | c6.failure.043 | Invalid use of sufficient-negative basis | Недопустимое использование достаточного отрицательного базиса | Basis .016 is used for a field or imported domain that does not permit an explicit negative or supported empty result. | Базис .016 используется для поля или импортированного домена, не допускающего явный отрицательный или подтверждённый пустой результат. | EN |
| c6.loc.267 | c6.failure.044 | Positive basis treated as unique result | Положительный базис принят за уникальный результат | Basis .001 is used to seal determinable before the complete candidate/member set is evaluated. | Базис .001 используется для запечатывания «определимо» до оценки полного набора кандидатов или элементов. | EN |
| c6.loc.268 | c6.failure.045 | Negative/contradictory basis mapped directly to outcome | Отрицательный или противоречащий базис напрямую отображён в исход | Basis .002 is mapped directly to inconclusive or not-determinable without candidate-set re-evaluation. | Базис .002 напрямую отображается в «неоднозначно» или «неопределимо» без повторной оценки набора кандидатов. | EN |
| c6.loc.269 | c6.failure.046 | Invalid coverage-limitation derivation | Недопустимый вывод из ограничения покрытия | Bases .003-.006 produce not-determinable while a supported result, valid contradiction or invalid evidence defect remains. | Базисы .003-.006 дают «неопределимо», когда остаётся поддержанный результат, действительное противоречие или дефект недопустимого свидетельства. | EN |
| c6.loc.270 | c6.failure.047 | Cross-view outcome without adjudication | Исход по противоречию между ракурсами без разрешения | Basis .007 produces a terminal outcome before governed adjudication completes. | Базис .007 даёт конечный исход до завершения управляемого разрешения. | EN |
| c6.loc.271 | c6.failure.048 | Integrity-failure basis used as outcome | Базис нарушения целостности использован как исход | One of bases .008-.012 is converted to an outcome instead of blocking sealing. | Один из базисов .008-.012 преобразуется в исход вместо блокировки запечатывания. | EN |
| c6.loc.272 | c6.failure.049 | Duplicate-only support not normalized | Поддержка только дубликатами не нормализована | Basis .013 is mapped to an outcome before duplicate collapse and full re-derivation. | Базис .013 отображается в исход до сведения дубликатов и полного повторного вывода. | EN |
| c6.loc.273 | c6.failure.050 | Unable-to-complete coerced to inconclusive | Невозможность завершить преобразована в «неоднозначно» | The unable-to-complete adjudication disposition is converted to inconclusive instead of leaving the unit unsealed. | Результат разрешения «невозможно завершить» преобразуется в «неоднозначно» вместо сохранения незапечатанного состояния. | EN |
| c6.loc.274 | c6.failure.051 | Unsupported modality converted to outcome | Неподдерживаемая модальность преобразована в исход | Basis .014 produces not-determinable or another outcome instead of invalid/unsealable. | Базис .014 даёт «неопределимо» или другой исход вместо состояния недействительности и незапечатываемости. | EN |
| c6.loc.275 | c6.failure.052 | Mixed-context basis converted to outcome | Базис смешанного контекста преобразован в исход | Basis .015 produces an outcome instead of invalid/unsealable. | Базис .015 даёт исход вместо состояния недействительности и незапечатываемости. | EN |
| c6.loc.276 | c6.failure.053 | Unsupported empty result marked determinable | Неподдержанный пустой результат отмечен как определимый | An empty or negative result is marked determinable without imported-domain permission and basis .016. | Пустой или отрицательный результат отмечен как «определимо» без разрешения импортированного домена и базиса .016. | EN |
| c6.loc.277 | c6.failure.054 | Missing assessment-target evidence set for .016 | Отсутствующий набор свидетельств уровня оценки для .016 | A no-value assessment uses basis .016 without the mandatory Contract-4 assessment-target evidence set. | Оценка без значения использует базис .016 без обязательного набора свидетельств Contract 4, нацеленного на оценку. | EN |
| c6.loc.278 | c6.failure.055 | Confidence used as determinability shortcut | Уверенность использована как сокращённый путь к определимости | A Contract-5 dimension alone determines a Contract-6 outcome. | Измерение Contract 5 само по себе определяет исход Contract 6. | EN |
| c6.loc.279 | c6.failure.056 | Outcome rewrites confidence | Исход переписывает уверенность | Contract-6 processing edits the linked ConfidenceAssertion. | Обработка Contract 6 изменяет связанную ConfidenceAssertion. | EN |
| c6.loc.280 | c6.failure.057 | Provenance used as determinability shortcut | Происхождение использовано как сокращённый путь к определимости | A Contract-4 provenance value alone determines a Contract-6 outcome. | Значение происхождения Contract 4 само по себе определяет исход Contract 6. | EN |
| c6.loc.281 | c6.failure.058 | Outcome rewrites provenance | Исход переписывает происхождение | Contract-6 processing edits provenance, producing stage or parent lineage. | Обработка Contract 6 изменяет происхождение, производящий этап или родительскую цепочку. | EN |
| c6.loc.282 | c6.failure.059 | Evidence quantity used as sufficiency | Количество свидетельств использовано как достаточность | Image, contribution, agreement or signal count substitutes for qualitative basis and candidate-set evaluation. | Количество изображений, вкладов, согласий или сигналов заменяет качественный базис и оценку набора кандидатов. | EN |
| c6.loc.283 | c6.failure.060 | Lost per-view lineage | Потерянное происхождение отдельного ракурса | A consolidated unit cannot resolve every retained per-view contribution and atomic source pair. | Консолидированная единица не может разрешить каждый сохранённый вклад отдельного ракурса и атомарную пару источников. | EN |
| c6.loc.284 | c6.failure.061 | Per-view unit carries sealed outcome | Единица отдельного ракурса несёт запечатанный исход | A c6.viewscope.001 record is sealed or assigned a terminal outcome. | Запись c6.viewscope.001 запечатана или ей назначен конечный исход. | EN |
| c6.loc.285 | c6.failure.062 | Automatic consolidation shortcut | Автоматическое упрощение консолидации | Majority vote, averaging, automatic best-view selection or image-count outcome upgrade is applied without accepted method authority. | Голосование большинством, усреднение, автоматический выбор лучшего ракурса или повышение исхода по числу изображений применяется без принятого полномочия метода. | EN |
| c6.loc.286 | c6.failure.063 | Silent contradiction removal | Скрытое удаление противоречия | A retained conflict, candidate, basis or rationale is removed or downgraded to force an outcome. | Сохранённый конфликт, кандидат, базис или обоснование удаляется или понижается для принудительного получения исхода. | EN |
| c6.loc.287 | c6.failure.064 | Sealing with incomplete prerequisites | Запечатывание с неполными предпосылками | Sealing occurs without consolidated scope, complete pairing, valid basis, one outcome, integrity references or blocking-failure clearance. | Запечатывание выполняется без консолидированного скоупа, полного сопоставления, действительного базиса, одного исхода, ссылок целостности или устранения блокирующего сбоя. | EN |
| c6.loc.288 | c6.failure.065 | Sealing with invalid basis combination | Запечатывание с недопустимой комбинацией базисов | A basis combination classified invalid or unresolved is sealed without correction or adjudication. | Комбинация базисов, классифицированная как недопустимая или неразрешённая, запечатывается без исправления или разрешения. | EN |
| c6.loc.289 | c6.failure.066 | Post-seal mutation | Мутация после запечатывания | A sealed identity, outcome, basis, participant set or rationale is edited in place. | Запечатанная идентичность, исход, базис, набор участников или обоснование изменяется на месте. | EN |
| c6.loc.290 | c6.failure.067 | Invalid supersession chain | Недопустимая цепочка замещения | A successor has zero or multiple predecessors, a cycle, an unresolved predecessor or deleted history. | Преемник имеет ноль или несколько предшественников, цикл, неразрешимого предшественника или удалённую историю. | EN |
| c6.loc.291 | c6.failure.068 | Invalidation history loss | Потеря истории при признании недействительным | Invalidation deletes or obscures the historical outcome, evidence, reason or integrity chain. | Признание недействительным удаляет или скрывает исторический исход, свидетельства, причину или цепочку целостности. | EN |
| c6.loc.292 | c6.failure.069 | Unauthorized reopening | Неавторизованное повторное открытие | A sealed revision is reopened or edited without a new revision and explicit authorized role reference. | Запечатанная ревизия открывается повторно или изменяется без новой ревизии и явной ссылки на уполномоченную роль. | EN |
| c6.loc.293 | c6.failure.070 | Missing adjudication trigger | Отсутствующий триггер разрешения | An adjudication record does not resolve exactly one registered trigger. | Запись разрешения не разрешает ровно один зарегистрированный триггер. | EN |
| c6.loc.294 | c6.failure.071 | Invalid record sent to adjudication | Недействительная запись направлена на разрешение | Adjudication is used to bypass a missing, malformed, cross-context or integrity-invalid record defect. | Разрешение используется для обхода отсутствующего, повреждённого, сквозного или нарушающего целостность дефекта записи. | EN |
| c6.loc.295 | c6.failure.072 | Missing adjudication authority reference | Отсутствующая ссылка на полномочие разрешения | An adjudication record lacks its governed authority reference. | Запись разрешения не имеет управляемой ссылки на полномочие. | EN |
| c6.loc.296 | c6.failure.073 | Missing adjudication rationale | Отсутствующее обоснование разрешения | An adjudication disposition lacks a non-empty rationale tied to the retained basis and evidence. | Результат разрешения не имеет непустого обоснования, связанного с сохранённым базисом и свидетельствами. | EN |
| c6.loc.297 | c6.failure.074 | Adjudication invents evidence | Разрешение изобретает свидетельства | Adjudication adds unsupported evidence or removes retained evidence from the decision basis. | Разрешение добавляет неподдержанные свидетельства или удаляет сохранённые свидетельства из базиса решения. | EN |
| c6.loc.298 | c6.failure.075 | Invalid adjudication disposition | Недопустимый результат разрешения | An unregistered adjudication disposition is used or an affirming disposition violates its outcome predicate. | Используется незарегистрированный результат разрешения или подтверждающий результат нарушает предикат исхода. | EN |
| c6.loc.299 | c6.failure.076 | Unable-to-complete assigns outcome | «Невозможно завершить» назначает исход | The unable-to-complete disposition assigns any Contract-6 outcome or permits sealing. | Результат «невозможно завершить» назначает какой-либо исход Contract 6 или допускает запечатывание. | EN |
| c6.loc.300 | c6.failure.077 | Timeout or non-completion converted to outcome | Тайм-аут или незавершённость преобразованы в исход | Elapsed time or non-completion automatically becomes not-determinable, inconclusive or another outcome. | Истечение времени или незавершённость автоматически становится «неопределимо», «неоднозначно» или другим исходом. | EN |
| c6.loc.301 | c6.failure.078 | Runtime or input boundary violation | Нарушение границы runtime или входных данных | The operation includes more than one RoomCase, zero or more than six images, excluded modality, cross-session fusion or another forbidden runtime shape. | Операция включает более одного RoomCase, ноль или более шести изображений, исключённую модальность, межсессионное слияние или другую запрещённую форму runtime. | EN |
| c6.loc.302 | c6.failure.079 | Domain or source boundary violation | Нарушение границы домена или источника | Commercial scope, real user photographs or an unauthorized source class is admitted. | Допускается коммерческий скоуп, реальные пользовательские фотографии или неавторизованный класс источника. | EN |
| c6.loc.303 | c6.failure.080 | Missing EN/RU localization target | Отсутствующая цель локализации EN/RU | An exposed Contract-6 stable target lacks a localization row or one required EN/RU field. | Открытая стабильная цель Contract 6 не имеет строки локализации или одного обязательного поля EN/RU. | EN |
| c6.loc.304 | c6.failure.081 | EN/RU semantic mismatch or invalid fallback | Семантическое несовпадение EN/RU или неверный fallback | The RU label/definition loses or changes the canonical EN action, or fallback is not canonical English. | Русская метка или определение теряет либо изменяет каноническое действие EN, или fallback не является каноническим английским. | EN |
| c6.loc.305 | c6.failure.082 | Controlled Learning activation attempted | Попытка активации Controlled Learning | Automatic outcome, mapping, adjudication-policy, feedback-learning or production-behavior mutation is activated. | Активируется автоматическое изменение исхода, отображения, политики разрешения, обучение по feedback или production-поведение. | EN |
| c6.loc.306 | c6.failure.083 | Ownership-boundary violation | Нарушение границы владения | Contract 6 redefines an identity or semantic rule owned by Contracts 1-5, ETAP, provider governance or Track C. | Contract 6 переопределяет идентичность или семантическое правило, принадлежащее Contracts 1-5, ETAP, governance провайдеров или Track C. | EN |
| c6.loc.307 | c6.failure.084 | Contract-10 serialization leakage | Утечка сериализации Contract 10 | A final JSON, API, database, protobuf, TypeScript, envelope or wire name is fixed. | Фиксируется окончательное имя JSON, API, базы данных, protobuf, TypeScript, envelope или wire. | EN |
| c6.loc.308 | c6.failure.085 | Implementation or ETAP authorization leakage | Утечка полномочий реализации или ETAP | The Contract redefines ETAP metrics or authorizes code, corpus, fixtures, annotation, provider/model or deployment activity. | Contract переопределяет метрики ETAP или авторизует код, корпус, fixtures, аннотацию, работу с провайдером/моделью или deployment. | EN |
| c6.loc.309 | c6.failure.086 | Normative rule coverage defect | Дефект покрытия нормативного правила | A normative rule has neither validation mapping nor explicit definition-only rationale, or a validation lacks exactly one primary failure. | Нормативное правило не имеет ни сопоставления с проверкой, ни явного обоснования «только определение», либо проверка не имеет ровно одного основного сбоя. | EN |
| c6.loc.310 | c6.failure.087 | Unauthorized downstream or governance step | Неавторизованный нижестоящий или governance-шаг | The document claims Contract 7-10 opening, acceptance, Candidate Lock, persistence, implementation, Diagnosability or Security Architecture without separate authority. | Документ заявляет открытие Contracts 7-10, принятие, Candidate Lock, persistence, реализацию, Diagnosability или Security Architecture без отдельного полномочия. | EN |
| c6.loc.311 | c6.escalation.001 | Unresolvable Contract-6 semantics | Неразрешимая семантика Contract 6 | A Contract-6-owned decision cannot be completed without inventing semantics absent from accepted sources; block the affected unit, preserve all evidence and request explicit governance authority. | Решение, принадлежащее Contract 6, невозможно завершить без изобретения семантики, отсутствующей в принятых источниках; заблокировать затронутую единицу, сохранить все свидетельства и запросить явное governance-полномочие. | EN |
| c6.loc.312 | c6.escalation.002 | Upstream identity drift | Дрейф идентичности вышестоящего источника | An imported Contract-1–5 identity or meaning changed materially; invalidate current use, preserve historical sealed records and require an authorized compatibility review. | Импортированный идентификатор или значение Contract 1–5 существенно изменилось; признать текущее использование недействительным, сохранить исторические запечатанные записи и потребовать авторизованную проверку совместимости. | EN |
| c6.loc.313 | c6.escalation.003 | Contract-4 basis conflict | Конфликт базисов Contract 4 | A valid basis combination is not covered or appears semantically incompatible; do not guess an outcome, retain the complete basis set and route to governed adjudication or Contract-6 correction authority. | Действительная комбинация базисов не покрыта или выглядит семантически несовместимой; не угадывать исход, сохранить полный набор базисов и направить на управляемое разрешение либо к полномочию корректировки Contract 6. | EN |
| c6.loc.314 | c6.escalation.004 | Contract-5 compatibility conflict | Конфликт совместимости с Contract 5 | A confidence identity or revision cannot be classified without redefining Contract 5; block the affected pairing and request upstream clarification. | Идентификатор или ревизию уверенности невозможно классифицировать без переопределения Contract 5; заблокировать затронутое сопоставление и запросить уточнение вышестоящего источника. | EN |
| c6.loc.315 | c6.escalation.005 | Unresolved valid contradiction | Неразрешённое действительное противоречие | Valid complete evidence remains contradictory and authorized adjudication cannot complete; leave the unit unsealed, preserve contradiction and await explicit authority. | Действительные полные свидетельства остаются противоречивыми, а авторизованное разрешение невозможно завершить; оставить единицу незапечатанной, сохранить противоречие и ожидать явного полномочия. | EN |
| c6.loc.316 | c6.escalation.006 | Ownership-boundary conflict | Конфликт границы владения | A proposed rule would redefine an identity owned by Contracts 1–5, ETAP, Contract 10 or another unopened consumer; reject the proposal and return it to the owning authority. | Предлагаемое правило переопределяет идентификатор, принадлежащий Contracts 1–5, ETAP, Contract 10 или другому неоткрытому потребителю; отклонить предложение и вернуть его владельцу полномочия. | EN |
| c6.loc.317 | c6.escalation.007 | Post-seal mutation detected | Обнаружена мутация после запечатывания | A sealed unit, outcome, pairing, basis link or adjudication record was modified in place; block use and require an immutable successor revision. | Запечатанная единица, исход, сопоставление, ссылка базиса или запись разрешения изменена на месте; заблокировать использование и потребовать неизменяемую последующую ревизию. | EN |
| c6.loc.318 | c6.escalation.008 | Unauthorized downstream activation | Неавторизованная активация нижестоящего шага | Contract 7–10, implementation, corpus, provider/model work or persistence is treated as authorized without an explicit Owner decision; stop immediately and restore the governance boundary. | Contract 7–10, реализация, корпус, работа с провайдером/моделью или persistence считаются авторизованными без явного решения Owner; немедленно остановить действие и восстановить governance-границу. | EN |
| c6.loc.319 | c6.escalation.009 | Unauthorized learning, diagnosability or security activation | Неавторизованная активация обучения, диагностируемости или безопасности | Any automatic learning behavior or the blocked Diagnosability/Security architecture step is entered before the Supporting Contracts 1–10 predicate is satisfied; stop and preserve the current non-activating compatibility hooks only. | Любое автоматическое обучающее поведение либо заблокированный шаг архитектуры Diagnosability/Security начат до выполнения предиката Supporting Contracts 1–10; остановить действие и сохранить только текущие неактивирующие compatibility hooks. | EN |

Localization rows: **319**. Every exposed target appears exactly
once; no duplicate or orphan target is permitted.
## 29. Examples and Counterexamples

All examples are non-normative, use licensed/synthetic/staged input, remain
inside one RoomCase and avoid Contract-10 wire design.

### Example A — determinable subtype

The complete candidate set contains one admissible Contract-1 subtype. Its
retained basis includes `.001`; contradicted and duplicate candidates have
been resolved. The assessment seals `c6.outcome.001` and exactly one subtype.

### Example B — not-determinable subtype

The candidate set is complete, zero subtype is selected, retained basis
contains `.003/.004` and no valid candidate or contradiction remains. The
assessment seals `c6.outcome.002`.

### Example C — completed inconclusive subtype

Two valid candidates remain incompatible after complete evidence retention.
Authorized adjudication records `c6.adjudicationdisposition.003`. The
assessment seals `c6.outcome.003` with zero selected subtype.

### Counterexample D — failed adjudication

Adjudicator authority is unavailable. The unit remains unsealed under
`c6.adjudicationdisposition.004`; it does not become inconclusive.

### Example E — supported zero-tag affordance

A Contract-4 field `.006` assessment has zero values, assessment-target
evidence grounding and basis `.016`. The parent result may be determinable as
an explicitly supported empty set.

### Counterexample F — missing coverage is not a supported empty set

A `.006` assessment with basis `.003` is not converted to a zero-tag
determinate result.

### Example G — duplicate-only support

Basis `.013` triggers duplicate normalization. Only after complete
re-derivation may any outcome be assigned.

### Counterexample H — unsupported modality

Basis `.014` makes the unit invalid/unsealable. It is not
not-determinable.

### Example I — multi-valued conflict

Two role-tag members conflict for the same optical aspect. Both remain
traceable. The parent field assessment cannot seal determinable until the
member conflict is adjudicated.

### Example J — supersession

A correction creates a new annotation-unit, pairing, outcome and sealing
revision with predecessor links. The old sealed record becomes superseded and
is never edited in place.
## 30. Authority Gaps and Future Consumers

| Gap ID | Question | Current treatment | Required future authority | Blocks this draft? |
|---|---|---|---|---|
| AG-1 | Exact operational adjudicator role and assignment mechanism | Semantic authorityReference is mandatory; no staffing/UI model is invented. | Separate governance/implementation decision | NO |
| AG-2 | Adjudication timeout and retry policy | Elapsed time never creates an outcome; unable-to-complete remains unsealed. | Separate governance decision or future Contract-6 correction | NO |
| AG-3 | Whether future ETAP needs sealing/adjudication metrics | No metric is invented. | Authorized ETAP revision | NO |
| AG-4 | Contract-7 case-level aggregation of Contract-6 outcomes | Contract 7 remains unopened; no case sufficiency design appears here. | Contract-7 preparation authority | NO |
| AG-5 | Final serialization and envelope placement | Semantic components only. | Contract-10 preparation authority | NO |
| AG-6 | Future Contract-4 field/value extensions | Current 8-field catalogue only; no speculative identity. | Accepted Contract-4 extension plus Contract-6 compatibility review | NO |

Authority gaps are explicit and do not authorize future work.
## 31. Mechanical and Coverage Verification

The corrected artifact was recomputed from its actual content.

```text
Raw lines:
2216

Filesystem bytes:
436061

Top-level sections:
32
sequential §1–§32

Authoritative source rows:
23

Markdown tables:
45

Markdown table structural errors:
0

Code fences:
24
balanced pairs:
12

Semantic-model versions:
1

Record types:
6

Unit types:
4

Unit granularities:
2

View scopes:
2

Outcomes:
3

Pairing rules:
4

Pairing states:
5

Compatibility dispositions:
4

Basis effects:
7

Lifecycle states:
5

Adjudication triggers:
5

Adjudication dispositions:
4

Multi-view states:
5

Validation scopes:
9

Validation phases:
6

Normative rules:
64
c6.rule.001–064
sequential, no gaps

Validations:
87
c6.validation.001–087
sequential, no gaps

Primary failures:
87
c6.failure.001–087
sequential, no gaps
1:1 with validations

Escalations:
9
c6.escalation.001–009

Localization rows:
319
c6.loc.001–319
sequential, no gaps

Localization targets:
319

Missing localization targets:
0

Duplicate localization targets:
0

Orphan localization targets:
0

Uncovered rules:
0

Uncovered validations:
0

Blank matrix cells:
0

Conditional cells without condition:
0

Broken internal § references:
0

Unresolved drafting placeholders:
0

Malformed Unicode replacement characters:
0

Contract-7 architecture:
0

Contract-10 serialization design:
0

Contract-6 implementation authorization:
0

Controlled Learning activation:
0

Contract-6 repository-persistence claim:
0

Downstream authorization leak:
0
```

The artifact does not include its own SHA-256 to avoid self-hash recursion.
Independent review must recompute line count, byte count, SHA-256 and every
mechanical claim from the delivered bytes.
## 32. Governance Status and Next Steps

```text
Supporting Contract 6 Revision 1 — Correction Cycle 1:
DRAFT
PREPARATION AUTHORIZED
FULL MULTI-PASS END-TO-END REVIEW COMPLETE
ALL IDENTIFIED CORRECTIONS INTEGRATED
READY FOR ONE FULL INDEPENDENT CONSOLIDATED REVIEW
NOT OWNER-ACCEPTED
NOT CANDIDATE-LOCKED
NOT REPOSITORY-PERSISTED

Contract 7:
NOT AUTHORIZED
NOT OPENED

Contracts 7–10:
NOT AUTHORIZED
NOT OPENED

Supporting Contracts 1–10 accepted:
NOT SATISFIED

Repository:
UNCHANGED
```

Required next step:

1. freeze this exact corrected byte identity;
2. perform one full independent consolidated review;
3. apply a separately authorized bounded correction cycle if findings exist;
4. complete closure verification;
5. obtain explicit Project Owner acceptance;
6. separately issue Candidate Lock;
7. separately authorize repository persistence.

No later step is implied or authorized by this draft.
