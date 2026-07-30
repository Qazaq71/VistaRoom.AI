# Candidate A Supporting Contract 10 — Conformance Field Inventory and Validation Contract — Revision 1

```text
Document type: Supporting Contract — final member of Contracts 1–10
Track: Track A — Spatial Perception
Domain: Residential-34
Governance status: DRAFT — CORRECTION CYCLE 5 COMPLETE
Review status: FULL NON-SAMPLED AUTHOR REVIEW COMPLETE
Independent review: NOT YET PERFORMED FOR THIS BYTE IDENTITY
Owner acceptance: NOT PERFORMED
Candidate Lock: NOT ISSUED
Repository persistence: NOT PERFORMED
Preparation date: 2026-07-30
Canonical filename: Supporting-Contract-10-Conformance-Field-Inventory-and-Validation-Contract-Rev1.md
Delivery filename: Supporting-Contract-10-Conformance-Field-Inventory-and-Validation-Contract-Rev1-Correction-Cycle-5.md
Revision: 1 — unchanged; this is an in-revision correction cycle
```

This document supersedes prior draft byte identities of the same Contract 10 Revision 1. It does not reopen Contracts 1–9. It defines only concrete wire representation, applicability, validation lifecycle, handling dispositions, cross-reference rules and sealing behavior owned by Contract 10.


## 0. Correction Cycle 5 — targeted closure repair record

Correction Cycle 5 preserves every Correction Cycle 4 repair and resolves the single admissible MINOR finding produced by the final independent adjudication and coverage-closure review of the exact Correction Cycle 4 byte identity.

| Finding | Resolution in this identity |
| --- | --- |
| M2 — `c10.field.643` cited the Contract-6 pairing-state enum through prose rather than its exact stable-ID namespace | The value/reference constraint for `PairingRecord.pairingStateIdentity` now cites the exact authoritative namespace `c6.pairingstate.*`. No field, validation, failure, cardinality, runtime behavior, ownership boundary or upstream semantic definition is changed. |

The previous construct-registry MAJOR finding is not implemented because final adjudication rejected it as a false positive and ownership overreach. Contract-10-owned `c10.construct.*` identities remain limited to Contract-10-owned sidecar constructs. Upstream-owned constructs continue to be imported through non-owning containment, field, validation, failure and localization registries without duplicate semantic identities.

This is a narrow in-revision correction. The source Correction Cycle 4 byte identity remains unchanged. All Correction Cycle 4 repairs remain normative within this successor draft.

## 1. Authority and exact source manifest

| Source | Lines | Bytes | SHA-256 |
| --- | --- | --- | --- |
| Project Context v2.4 — authoritative source copy | 1276 | 81155 | 2425564cd9c59bd4997845e3346100e588fccc2884fae910c99cc79d7cac4539 |
| Module Completion and Sequencing Policy Rev4 | 1616 | 56201 | 787e4713c791efde6c7977c489aa033169e0dcac16b8df974929476d7b839b98 |
| Living Strategic Roadmap v1.4 — supplied working source copy | 1516 | 78761 | ff2b93d7b8d4dc11eb871d3ff72c5522f4aa664744b9c3e59ce5c9cfd68727b0 |
| Full-Platform Vision Architecture Rev5 — supplied source copy | 1715 | 48518 | fbd5ec47f9033c24e0677b586515b439bf94165286fa227895b115e1fc68e467 |
| Consolidated Full Feature Vision Rev5 | 769 | 44827 | 294196fccbf666ab82105e3dabda083b60243af957449033bad505b2b6833228 |
| Candidate A Bounded Scope Decision Rev5 | 2080 | 119875 | bc4236150ed012d68096eb630760f44380a8e154a0c5d18f06147dd52ed1d122 |
| Perception Mechanism Selection and Evaluation Architecture Rev3 | 1490 | 89285 | 242aa5849c1560b78d18d5efb8de6e8c9f42baf9c62fa3346426a380ed1ceb41 |
| Candidate A Test Data Handling Decision Rev10 | 2132 | 171633 | 472fe038ed20fac83d1e63e9c32e2eef13201fa8fd16b39612debf25a69abb64 |
| Supporting Contract 1 Rev19 | 5788 | 1048939 | d899a13eb46ef099af8fe2d02d616349abac8c95515119eac1c27cc6bce27329 |
| Supporting Contract 2 Rev10 | 1532 | 80311 | 758bf9b99873f977600365e131b7dc1c166fcf71fe9ac8262294a1ca4e549177 |
| Supporting Contract 3 Rev1 | 1236 | 71870 | 0c2263cffbe59ee33727060f710f1c42d4478684cea8fa97ebbb6530b4992180 |
| Supporting Contract 4 Rev1 | 2567 | 258378 | b3ab4e7af3ba816d6a8c24a5d7cd39e7fabf53f90c54370d9002948098244f73 |
| Supporting Contract 5 Rev1 | 1974 | 165770 | cf2796ae890c75f952d88ef9786c3fd694140ec0a5040e59bcf8a16a3ba67d43 |
| Supporting Contract 6 Rev1 | 2216 | 436061 | 245d52fe123331f66d12a7244ab80571ef69b3b81ef7c4018d4c2ae7360d6136 |
| Supporting Contract 7 Rev1 | 2608 | 401211 | 59e6d3a753f1ee4c48f3c434d4a9459a73105c9b1c23e0ce906f86320b6fd03d |
| Supporting Contract 8 Rev1 | 1827 | 327005 | 95fa71f4eb5701254580e8c97f64ac23c4d92778a277c103ec5499ced43c89d7 |
| Supporting Contract 9 Rev1 | 1225 | 191354 | f957be11db0578d10a474d4ec3d9ad61054a427cdc7abba3f81e10755cc1a226 |
| Candidate A Evaluation Threshold and Acceptance Plan Rev16 | 869 | 53824 | 2adea2f97decd734717a2d6a277b96fa75296bfdc6a6f9669ec9b729c69367d2 |
| Candidate A Module Applicability Profile Rev19 | 1048 | 77548 | 032e684f2ab331502695c6a0d04faec92ed2d3394830722bb4f559472d39ca17 |
| Supporting Contracts 1–10 Preparation and Dependency Plan Rev11 | 899 | 95277 | 3a078240afdbc49fffbdfbc7a1c4e76ac6bf49ccf06a5f3621de314934878c0b |

Governance authority order:

```text
1. Explicit Project Owner Decisions
2. Accepted Module Completion and Sequencing Policy Rev4
3. Accepted Living Strategic Roadmap v1.4 and Owner-approved amendments
4. Current Project Context v2.4
5. Accepted governance decisions and Candidate-Locked Contracts 1–9
6. This Contract 10 strictly within its ownership boundary
```

The source manifest is an input identity table. It is not a claim that this draft is accepted or persisted.


## 2. Scope and non-authorization

Current runtime boundary:

```text
Capture-set intake
→ same-room admission
→ PerceptionOperation
   → RoomCase[exactly 1]
      → ImageAsset[1..6]
→ one consolidated PerceptionResult
```

Negative paths before valid RoomCase admission may produce `UnsupportedInput`, `InsufficientEvidenceResult` or `RejectedResult` without fabricating `roomCaseId`.

In scope: one materially unchanged residential room, 1–6 static images, same-room validation, cross-view matching, deduplication, contradiction preservation, evidence fusion, per-image and RoomCase provenance, and one consolidated result.

Out of scope: multiple valid RoomCases per operation, whole-home graph, cross-room reasoning, floor plans, video, panoramas, 2.5D/3D reconstruction, cross-session memory, commercial property, real-user photographs, corpus work, provider evaluation, implementation, Contract 11 and Tracks B–H.


## 3. Ownership and artifact separation

```text
StructuredSceneV0:
  semantic scene graph only — nodes, relations and accepted geometry.

PerceptionEvidenceArtifact:
  semantic grounding, provenance, best-effort assessment, evidence sets,
  confidence and Contract-6 linkage. Separate from the scene graph.

PerceptionOperationDiagnostics / ImageAssetProcessingDiagnostic:
  operational processing trace only. Separate from semantic evidence.

PerceptionResult:
  runtime union only: SceneResult | InsufficientEvidenceResult |
  FailureResult | RejectedResult.

ComparisonOutcome:
  Contract-9 fixture-evaluation result only; never embedded in runtime output.

ConformanceValidationReport:
  Contract-10-owned immutable sidecar. It records validation findings and
  handling dispositions without changing a runtime-result discriminator.

SealVerificationResult:
  Contract-10-owned immutable verification result. It records whether a
  presented seal matches the RFC-8785/SHA-256 recomputation and never mutates
  the target artifact.
```

No artifact absorbs fields owned by another artifact. `ValidationDisposition` is a handling registry, not a fifth `PerceptionResult` variant and not a `ComparisonOutcome`. `c10.failure.*` identities describe Contract-10 representation/conformance defects; exact upstream semantic failures remain linked as causes.

## 4. Canonical JSON hierarchy

```json
{
  "schemaVersion": "c10.schema.perception-operation.v1",
  "operationId": "op-…",
  "operationState": "completed",
  "roomCase": {
    "roomCaseId": "roomcase-…",
    "sameRoomValidationReference": "same-room-…",
    "imageAssets": [
      {
        "imageAssetId": "image-…",
        "sourceAssetId": "source-…",
        "sourceClass": "SYNTHETIC",
        "mediaType": "image/png",
        "contentIntegrityReference": "sha256:<64-lower-hex>",
        "preprocessingLineageReference": "preprocess-…"
      }
    ]
  },
  "resultReference": "result-…"
}
```

This is the sole admitted `PerceptionOperation` lifecycle representation. `roomCase` is embedded exactly once. `imageAssets` is embedded exactly once inside that RoomCase. A mixed-room negative uses `MixedRoomValidationRequest { operationId, inputSetId, imageAssets[2..6] }` and has no `roomCaseId`.

`SceneResult.scene` embeds exactly one `StructuredSceneV0`. Evidence and diagnostics are referenced as separate artifacts and are never duplicated inside `scene`.


## 4A. Exact Contract-4 best-effort field conformance map

| Field identity | Capability | Applicable owner node kinds | Value domain | Active-value cardinality |
| --- | --- | --- | --- | --- |
| c4.besteffort.field.001 | c4.besteffort.capability.001 | StructuralElement \| Object \| FreeSpaceRegion | c4.fieldvaluedomain.001 | 0..1 |
| c4.besteffort.field.002 | c4.besteffort.capability.001 | StructuralElement \| Object | c4.fieldvaluedomain.001 | 0..1 |
| c4.besteffort.field.003 | c4.besteffort.capability.001 | Object | c4.fieldvaluedomain.001 | 0..1 |
| c4.besteffort.field.004 | c4.besteffort.capability.002 | Room | c4.fieldvaluedomain.003 | 0..1 |
| c4.besteffort.field.005 | c4.besteffort.capability.002 | FreeSpaceRegion | c4.fieldvaluedomain.003 | 0..1 |
| c4.besteffort.field.006 | c4.besteffort.capability.003 | Object | c4.fieldvaluedomain.002 | 0..N unique |
| c4.besteffort.field.007 | c4.besteffort.capability.004 | StructuralElement \| Object | c4.fieldvaluedomain.004 | 0..1 |
| c4.besteffort.field.008 | c4.besteffort.capability.004 | StructuralElement \| Object | c4.fieldvaluedomain.002 | 0..N unique |

The table is a representation/conformance import of the exact accepted Contract-4 registry. Contract 4 remains the semantic owner. Contract 10 validates row identity, applicability, value domain and cardinality through `c10.validation.S076`–`S083`; it does not add, remove or reinterpret a field.


## 5. Runtime result wire contract

```text
PerceptionResult =
  SceneResult
  | InsufficientEvidenceResult
  | FailureResult
  | RejectedResult
```

### 5.1 Variant requirements

```text
SceneResult:
  status = scene
  roomCaseId required
  contributingImageAssetIds 1..6
  scene required and embedded
  completeness = full | partial
  evidenceArtifactReference and diagnosticsReference required

InsufficientEvidenceResult:
  status = insufficient-evidence
  scene prohibited
  roomCaseId present only when a valid RoomCase was established
  reasonCategory and recommendedNextAction required

FailureResult:
  status = failure
  scene prohibited
  technicalReasonCategory is exactly one of the four Contract-9 runtime reason tokens
  retryability is the exact Contract-9 identity fixed by that token
  roomCaseId present only if established before the technical failure

RejectedResult:
  status = rejected
  scene prohibited
  rejectionStage required: c10.stage.006 | c10.stage.004 | c10.stage.007
```

### 5.2 Exact FailureResult token set

```text
input.unreadable
input.unsupported
provider.timeout
provider.malformed_response
```

The set above is closed in this Revision 1 wire profile. Provider authentication and rate-limit conditions are impossible in the currently authorized execution boundary because production credentials and provider invocation are prohibited. They may be recorded as operational diagnostic events only. A preprocessing defect that terminates the operation must normalize to `input.unreadable` or `input.unsupported`; Contract 10 does not create a third preprocessing runtime token.

| technicalReasonCategory | retryability |
| --- | --- |
| input.unreadable | c9.retryability.input-replacement-required |
| input.unsupported | c9.retryability.input-replacement-required |
| provider.timeout | c9.retryability.retryable-under-unchanged-locked-rule |
| provider.malformed_response | c9.retryability.mechanism-change-required |

### 5.3 RejectedResult two-branch representation

```text
Branch A — FusionConsistencyStage negative (`c10.stage.006`):
  rejectionStage = c10.stage.006
  inputSetId required
  rejectionContextReference required and resolves to SameRoomValidationRecord
  referenced outcome = mixed-room-rejected | temporal-state-conflict | capture-set-invalid
  roomCaseId prohibited
  contractViolations prohibited
  scene prohibited

Branch B — post-admission C.2/C.3 rejection (`c10.stage.004` or `c10.stage.007`):
  rejectionStage = c10.stage.004 | c10.stage.007
  roomCaseId required
  contractViolations[1..N] required
  inputSetId prohibited
  rejectionContextReference prohibited
  scene prohibited
```

Exact `RejectedResult.contractViolations[]` token set for Branch B:

```text
c2.room.missing_candidate
c2.node.duplicate_id
c2.relation.dangling_endpoint
c2.geometry.invalid
c3.general.schema_version
c3.general.operation_identity
c3.general.image_identity
c3.general.result_metadata
c3.room.missing
c3.room.invalid_cardinality
c3.confidence.missing
c3.confidence.invalid
c3.provenance.missing
c3.provenance.invalid
```

Mixed-room, temporal-state and capture-set-consistency facts are not Contract-9 fixture subtype tokens and are not serialized inside `contractViolations[]`. Their exact negative-validation outcome remains in the referenced `SameRoomValidationRecord`.

### 5.4 Runtime token localization

| Token | EN canonical label | RU derived label |
| --- | --- | --- |
| scene | Scene result | Результат со сценой |
| insufficient-evidence | Insufficient-evidence result | Результат с недостаточными свидетельствами |
| failure | Technical failure result | Результат технического отказа |
| rejected | Contract-rejected result | Результат, отклонённый контрактом |
| FusionConsistencyStage | Fusion-consistency rejection stage | Стадия отклонения согласованности объединения |
| C.2 | Structural-admission rejection stage | Стадия отклонения структурного допуска |
| C.3 | Final-boundary rejection stage | Стадия отклонения финальной границы |
| mixed-room-rejected | Mixed-room set rejected | Набор разных комнат отклонён |
| temporal-state-conflict | Temporal room-state conflict | Конфликт состояния комнаты во времени |
| capture-set-invalid | Capture set invalid | Набор снимков некорректен |
| input.unreadable | Unreadable input | Нечитаемые входные данные |
| input.unsupported | Unsupported input | Неподдерживаемые входные данные |
| provider.timeout | Provider timeout | Тайм-аут провайдера |
| provider.malformed_response | Malformed provider response | Некорректный ответ провайдера |

## 6. Operational stage registry

| Stable ID | EN label | RU label | Role |
| --- | --- | --- | --- |
| c10.stage.001 | Input intake | Приём входных данных | Capture-set shape and media admission |
| c10.stage.002 | Same-room validation | Проверка одной комнаты | Same-room, temporal-state and capture-set consistency |
| c10.stage.003 | C.1 provider candidate production | Формирование кандидата C.1 провайдером | Provider/mechanism candidate production |
| c10.stage.004 | C.2 structural admission | Структурный допуск C.2 | Candidate normalization and structural validation |
| c10.stage.005 | Multi-image fusion | Объединение нескольких изображений | Same-RoomCase evidence consolidation |
| c10.stage.006 | Fusion consistency | Проверка согласованности объединения | Contradiction and material-state consistency |
| c10.stage.007 | C.3 result assembly | Сборка результата C.3 | Runtime union assembly |
| c10.stage.008 | Contract-10 conformance validation | Проверка соответствия Contract 10 | Field and cross-field validation |
| c10.stage.009 | Sealing | Запечатывание | Canonical serialization, hash and immutable finalization |

### Contract-10 schema identity registry

| Schema ID | EN label | RU label | Root construct |
| --- | --- | --- | --- |
| c10.schema.capture-set-intake.v1 | Capture-set intake schema | Схема приёма набора снимков | CaptureSetIntake |
| c10.schema.same-room-validation.v1 | Same-room validation schema | Схема проверки одной комнаты | SameRoomValidationRecord |
| c10.schema.perception-operation.v1 | Perception operation schema | Схема операции восприятия | PerceptionOperation |
| c10.schema.mixed-room-validation-request.v1 | Mixed-room validation request schema | Схема запроса проверки разных комнат | MixedRoomValidationRequest |
| c10.schema.unsupported-input.v1 | Unsupported-input schema | Схема неподдерживаемого входа | UnsupportedInput |
| c10.schema.vlm-scene-candidate.v1 | VLM scene-candidate schema | Схема VLM-кандидата сцены | VlmSceneCandidate |
| c10.schema.structured-scene-v0.v1 | StructuredSceneV0 schema | Схема StructuredSceneV0 | StructuredSceneV0 |
| c10.schema.perception-result.v1 | PerceptionResult schema | Схема PerceptionResult | PerceptionResult |
| c10.schema.perception-operation-diagnostics.v1 | Operation diagnostics schema | Схема диагностики операции | PerceptionOperationDiagnostics |
| c10.schema.image-asset-processing-diagnostic.v1 | Image processing diagnostic schema | Схема диагностики обработки изображения | ImageAssetProcessingDiagnostic |
| c10.schema.perception-evidence-artifact.v1 | Perception evidence schema | Схема свидетельств восприятия | PerceptionEvidenceArtifact |
| c10.schema.contract6-determinability-package.v1 | Contract-6 determinability package schema | Схема пакета определимости Contract 6 | Contract6DeterminabilityPackage |
| c10.schema.contract8-evaluation-package.v1 | Contract-8 evaluation package schema | Схема пакета оценки Contract 8 | Contract8EvaluationPackage |
| c10.schema.comparison-outcome.v1 | Comparison outcome schema | Схема результата сравнения | ComparisonOutcome |
| c10.schema.conformance-validation-report.v1 | Conformance validation report schema | Схема отчёта проверки соответствия | ConformanceValidationReport |
| c10.schema.seal-verification-result.v1 | Seal verification result schema | Схема результата проверки печати | SealVerificationResult |

Every root wire artifact declares exactly one schema identity from this registry. A schema identity is language-neutral and immutable within Revision 1; an incompatible wire change requires a new schema identity.

### Construct containment registry

| Construct | Root-qualified JSONPath / placement |
| --- | --- |
| AdjudicationRecord | $.adjudicationRecords[*] |
| AnnotationUnitRecord | $.annotationUnits[*] |
| AtomicEvidenceContribution | $.attributeEvidenceArtifacts[*].atomicContributions[*] |
| AttributeEvidenceArtifact | $.attributeEvidenceArtifacts[*] |
| BasisLinkRecord | $.basisLinkRecords[*] |
| BestEffortFieldAssessmentRecord | $.bestEffortAssessments[*] |
| BestEffortValueRevision | $.bestEffortValues[*] |
| C8EvaluationRecord | $.records[*] |
| C8LifecycleBundle | $.records[*].lifecycle |
| C8LifecycleTransitionEvent | $.records[*].lifecycle.transitionEvents[*] |
| CandidateNode | $.candidateNodes[*] |
| CandidateRelation | $.candidateRelations[*] |
| CaptureSetIntake | $ (pre-admission intake root) |
| ComparisonOutcome | $ (Contract-9 comparison root) |
| ConfidenceAssertionRecord | $.confidenceAssertions[*] |
| ConfidenceSourceSignalRecord | $.confidenceSourceSignals[*] |
| ConformanceFinding | $.findings[*] |
| SealVerificationResult | $ (Contract-10 seal-verification root) |
| ConformanceValidationReport | $ (Contract-10 report root) |
| Contract6DeterminabilityPackage | $ (Contract-6 package root) |
| Contract6SealingRecord | $.sealingRecords[*] |
| Contract8EvaluationPackage | $ (Contract-8 package root) |
| DeterminabilityEvidenceBasisRecord | $.determinabilityBasisRecords[*] |
| ETAPAssertionProjectionFact | $.projectionFacts[*] |
| EvidenceRelationshipRecord | $.evidenceSets[*].relationshipRecords[*] |
| EvidenceSetRecord | $.evidenceSets[*] |
| FailureResult | $ when status=failure |
| GroundingRecord | $.groundingRecords[*] |
| ImageAsset | $.imageAssets[*] OR $.roomCase.imageAssets[*] |
| ImageAssetProcessingDiagnostic | $ (image diagnostic root) |
| InsufficientEvidenceResult | $ when status=insufficient-evidence |
| MixedRoomValidationRequest | $ (negative request root) |
| OutcomeDecisionRecord | $.outcomeDecisionRecords[*] |
| PairingRecord | $.pairingRecords[*] |
| PerceptionEvidenceArtifact | $ (semantic evidence root) |
| PerceptionOperation | $ (admitted operation root) |
| PerceptionOperationDiagnostics | $ (operation diagnostics root) |
| PerceptionResultCommon | $ (abstract common projection over each runtime variant) |
| ProvenanceAttachmentRecord | $.provenanceAttachments[*] |
| RawMechanismAssertionArtifact | $.rawAssertions[*] |
| RejectedResult | $ when status=rejected |
| RoomCase | $.roomCase |
| SameRoomValidationRecord | $ (same-room sidecar root) |
| SceneNode | $.nodes[*] within StructuredSceneV0 |
| SceneRelation | $.relations[*] within StructuredSceneV0 |
| SceneResult | $ when status=scene |
| StageEvent | $.stageEvents[*] |
| StructuredSceneV0 | $ (C.2 artifact root) OR $.scene in SceneResult |
| UnseenClaimRecord | $.unseenClaimRecords[*] |
| UnsupportedInput | $ (pre-C.1 terminal root) |
| VlmSceneCandidate | $ (C.1 artifact root) |

Every active construct is listed exactly once. A field path in the master inventory is relative to this registered construct placement. `ImageAsset` has two authorized placements because it exists in both pre-admission/negative capture sets and the admitted RoomCase; the same `ImageAsset` wire schema applies in every placement.

These are Contract-10 operational trace identities. They do not replace Contract-4 `producingStageIdentity`. A Contract-4 provenance-bearing record continues to use the Contract-4-owned producing-stage domain. Cross-reference between an operational stage event and a Contract-4 producing stage is permitted but does not merge the registries.

### Contract-10-owned construct identity registry

| Construct identity | EN label | RU label | Ownership/boundary | Schema identity | Lifecycle |
| --- | --- | --- | --- | --- | --- |
| c10.construct.001 | ConformanceValidationReport | Отчёт проверки соответствия | Contract-10-owned immutable sidecar report | c10.schema.conformance-validation-report.v1 | created once per validated target revision; sealed independently |
| c10.construct.002 | ConformanceFinding | Заключение проверки соответствия | One immutable finding inside a ConformanceValidationReport | nested in c10.schema.conformance-validation-report.v1 | created once per failed validation predicate |
| c10.construct.003 | ValidationDispositionRegistry | Реестр диспозиций валидации | Language-neutral registry defining handling of a primary finding | not a wire artifact | immutable within Revision 1 |
| c10.construct.004 | SealVerificationResult | Результат проверки печати | Contract-10-owned immutable result of canonical seal verification | c10.schema.seal-verification-result.v1 | created per verification attempt; never mutates the target artifact |

### Validation disposition registry

| Disposition identity | Wire token | EN label | RU label | Semantic meaning | Terminal | Allowed targets | Relationship to PerceptionResult | Relationship to ConformanceValidationReport | Runtime mutation allowed | Precedence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| c10.disposition.001 | security-stop | Security stop | Остановка по безопасности | Halt processing and execute the exact upstream Hard Security Stop or security escalation chain. | yes | any construct when an authorized security predicate fails | Does not create or mutate a PerceptionResult. | Finding is recorded when safe; processing halts. | no | 0 |
| c10.disposition.002 | report-integrity-terminal | Validation-report integrity terminal | Терминальный отказ целостности отчёта валидации | Terminate validation because the ConformanceValidationReport or ConformanceFinding cannot be trusted. | yes | ConformanceValidationReport, ConformanceFinding | Does not create or mutate a PerceptionResult. | No recursive replacement report is created. | no | 5 |
| c10.disposition.003 | pre-admission-unsupported | Pre-admission unsupported input | Неподдерживаемый вход до допуска | Classify a pre-C.1 intake failure as UnsupportedInput using one exact UnsupportedInput.reason token. | yes | CaptureSetIntake and pre-admission ImageAsset validation only | UnsupportedInput is outside the PerceptionResult family. | The finding remains in the sidecar report and the external UnsupportedInput classification is emitted. | no | 10 |
| c10.disposition.004 | artifact-nonconformant | Artifact nonconformant | Артефакт не соответствует контракту | Mark the target artifact revision nonconformant in the sidecar report without changing its semantic runtime variant. | yes for the target revision | runtime, evidence, diagnostics, identity and auxiliary artifacts | A SceneResult, InsufficientEvidenceResult, FailureResult or RejectedResult remains the observed variant; it is not converted into another variant. | ConformanceValidationReport.valid=false; externalOutcomeToken is absent. | no | 20 |
| c10.disposition.005 | evaluation-artifact-invalid | Evaluation artifact invalid | Артефакт оценки некорректен | Invalidate an evaluator-owned Contract-8 or Contract-9 artifact without assigning runtime blame. | yes for the evaluation artifact revision | Contract8EvaluationPackage, ComparisonOutcome and their nested records | Does not create or mutate a PerceptionResult. | ConformanceValidationReport records the invalid evaluation artifact; externalOutcomeToken is absent unless another authorized comparison-determination rule applies. | no | 35 |
| c10.disposition.006 | comparison-determination | Contract-9 comparison determination | Определение результата сравнения Contract 9 | Produce one exact Contract-9 comparison outcome/failure mapping from a sealed observed result and fixture entry. | yes for one comparison execution | only c10.validation.S069-S072 and c10.validation.S074-S075 | The observed PerceptionResult is referenced and never mutated. | The evaluation trace and any Contract-10 finding are sidecar facts; the exact c9.comparison/c9.failure mapping is external. | no | 40 |

The disposition registry is closed for Revision 1. `c10.disposition.*` is not interchangeable with `PerceptionResult.status`, `c9.comparison.*`, `c9.failure.*` or `c9.escalation.*`.

## 7. Master field inventory — complete active registry

| Field ID | Construct | Canonical JSON path within construct | EN label | RU label | Type | Requiredness | Cardinality | Semantic owner | Allowed values / format | Reference target | Nullable | Unknown-token behavior |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| c10.field.001 | CaptureSetIntake | operationId | CaptureSetIntake.operationId | Поле CaptureSetIntake «operationId» | string | required | 1 | TDH Rev10 | system-assigned governed ID | — | no | reject |
| c10.field.002 | CaptureSetIntake | inputArtifactId | CaptureSetIntake.inputArtifactId | Поле CaptureSetIntake «inputArtifactId» | string | required | 1 | TDH Rev10 | opaque governed ID | governed input artifact | no | reject |
| c10.field.003 | CaptureSetIntake | imageAssets | CaptureSetIntake.imageAssets | Поле CaptureSetIntake «imageAssets» | array<ImageAsset> | required | 0..N | TDH Rev10 | exact count classified by c10.validation.S056/S057 | — | no | reject |
| c10.field.004 | ImageAsset | imageAssetId | ImageAsset.imageAssetId | Поле ImageAsset «imageAssetId» | string | required | 1 | TDH Rev10 | opaque governed ID | one admitted photograph | no | reject |
| c10.field.005 | ImageAsset | sourceAssetId | ImageAsset.sourceAssetId | Поле ImageAsset «sourceAssetId» | string | required | 1 | TDH Rev10 | atomic; never set-valued | one governed source asset | no | reject |
| c10.field.006 | ImageAsset | sourceClass | ImageAsset.sourceClass | Поле ImageAsset «sourceClass» | enum | required | 1 | Bounded Scope Rev5 / Contract 9 | LICENSED \| SYNTHETIC \| STAGED | source-eligibility registry | no | reject |
| c10.field.007 | ImageAsset | mediaType | ImageAsset.mediaType | Поле ImageAsset «mediaType» | string | required | 1 | Bounded Scope Rev5 | supported static-image media type | media-type registry | no | reject |
| c10.field.008 | ImageAsset | contentIntegrityReference | ImageAsset.contentIntegrityReference | Поле ImageAsset «contentIntegrityReference» | string | required | 1 | Contract 4 compatibility | sha256:<64 lower-hex> | source bytes | no | reject |
| c10.field.009 | ImageAsset | preprocessingLineageReference | ImageAsset.preprocessingLineageReference | Поле ImageAsset «preprocessingLineageReference» | string | conditional | 0..1 | PMSEA Part P / Contract 4 | present when preprocessing occurred | preprocessing record | no | reject |
| c10.field.010 | SameRoomValidationRecord | sameRoomValidationId | SameRoomValidationRecord.sameRoomValidationId | Поле SameRoomValidationRecord «sameRoomValidationId» | string | required | 1 | Contract 10 | opaque governed ID | — | no | reject |
| c10.field.011 | SameRoomValidationRecord | operationId | SameRoomValidationRecord.operationId | Поле SameRoomValidationRecord «operationId» | string | required | 1 | TDH Rev10 | must equal intake operationId | CaptureSetIntake.operationId | no | reject |
| c10.field.012 | SameRoomValidationRecord | contributingImageAssetIds | SameRoomValidationRecord.contributingImageAssetIds | Поле SameRoomValidationRecord «contributingImageAssetIds» | array<string> | required | 1..6 | TDH Rev10 | unique IDs | CaptureSetIntake.imageAssets[].imageAssetId | no | reject |
| c10.field.013 | SameRoomValidationRecord | outcome | SameRoomValidationRecord.outcome | Поле SameRoomValidationRecord «outcome» | enum | required | 1 | Bounded Scope Rev5 / PMSEA Part N | same-room-confirmed \| insufficient-evidence \| mixed-room-rejected \| temporal-state-conflict \| capture-set-invalid | — | no | reject |
| c10.field.014 | SameRoomValidationRecord | basisReferences | SameRoomValidationRecord.basisReferences | Поле SameRoomValidationRecord «basisReferences» | array<string> | required | 1..N | Contract 4 compatibility | traceable evidence/basis references | evidence/diagnostic records | no | reject |
| c10.field.015 | SameRoomValidationRecord | roomCaseId | SameRoomValidationRecord.roomCaseId | Поле SameRoomValidationRecord «roomCaseId» | string | conditional | 0..1 | TDH Rev10 | present iff outcome=same-room-confirmed | admitted RoomCase | no | reject |
| c10.field.016 | SameRoomValidationRecord | inputSetId | SameRoomValidationRecord.inputSetId | Поле SameRoomValidationRecord «inputSetId» | string | conditional | 0..1 | TDH Rev10 | required iff outcome is mixed-room-rejected, temporal-state-conflict or capture-set-invalid | negative capture set | no | reject |
| c10.field.017 | PerceptionOperation | operationId | PerceptionOperation.operationId | Поле PerceptionOperation «operationId» | string | required | 1 | TDH Rev10 | must equal intake operationId | CaptureSetIntake.operationId | no | reject |
| c10.field.018 | PerceptionOperation | roomCase | PerceptionOperation.roomCase | Поле PerceptionOperation «roomCase» | RoomCase | required | 1 | TDH Rev10 | exactly one admitted RoomCase | — | no | reject |
| c10.field.019 | RoomCase | roomCaseId | RoomCase.roomCaseId | Поле RoomCase «roomCaseId» | string | required | 1 | TDH Rev10 | opaque governed ID | same-room validation record | no | reject |
| c10.field.020 | RoomCase | imageAssets | RoomCase.imageAssets | Поле RoomCase «imageAssets» | array<ImageAsset> | required | 1..6 | TDH Rev10 | same physical materially unchanged room | CaptureSetIntake.imageAssets | no | reject |
| c10.field.021 | RoomCase | sameRoomValidationReference | RoomCase.sameRoomValidationReference | Поле RoomCase «sameRoomValidationReference» | string | required | 1 | Contract 10 | must resolve to outcome=same-room-confirmed | SameRoomValidationRecord | no | reject |
| c10.field.022 | MixedRoomValidationRequest | operationId | MixedRoomValidationRequest.operationId | Поле MixedRoomValidationRequest «operationId» | string | required | 1 | TDH Rev10 | opaque governed ID | — | no | reject |
| c10.field.023 | MixedRoomValidationRequest | inputSetId | MixedRoomValidationRequest.inputSetId | Поле MixedRoomValidationRequest «inputSetId» | string | required | 1 | TDH Rev10 | negative input-set identity | — | no | reject |
| c10.field.024 | MixedRoomValidationRequest | imageAssets | MixedRoomValidationRequest.imageAssets | Поле MixedRoomValidationRequest «imageAssets» | array<ImageAsset> | required | 2..6 | TDH Rev10 | intentionally not asserted as one RoomCase | — | no | reject |
| c10.field.025 | MixedRoomValidationRequest | roomCaseId | MixedRoomValidationRequest.roomCaseId | Поле MixedRoomValidationRequest «roomCaseId» | prohibited | prohibited | 0 | TDH Rev10 | must be absent | — | no | reject |
| c10.field.026 | UnsupportedInput | operationId | UnsupportedInput.operationId | Поле UnsupportedInput «operationId» | string | required | 1 | TDH Rev10 | system-assigned governed ID | — | no | reject |
| c10.field.027 | UnsupportedInput | inputArtifactId | UnsupportedInput.inputArtifactId | Поле UnsupportedInput «inputArtifactId» | string | conditional | 0..1 | TDH Rev10 | present when an input artifact identity was established | input artifact | no | reject |
| c10.field.028 | UnsupportedInput | reason | UnsupportedInput.reason | Поле UnsupportedInput «reason» | enum | required | 1 | Bounded Scope Rev5 / Contract 10 representation | zero-assets \| too-many-assets \| unsupported-format \| decode-failure \| malformed-envelope | — | no | reject |
| c10.field.029 | UnsupportedInput | observedAssetCount | UnsupportedInput.observedAssetCount | Поле UnsupportedInput «observedAssetCount» | integer | required | 1 | Contract 10 | >=0 | — | no | reject |
| c10.field.030 | PerceptionOperation | operationState | PerceptionOperation.operationState | Поле PerceptionOperation «operationState» | enum | required | 1 | Contract 10 | admitted \| processing \| completed | — | no | reject |
| c10.field.031 | PerceptionOperation | resultReference | PerceptionOperation.resultReference | Поле PerceptionOperation «resultReference» | string | conditional | 0..1 | TDH Rev10 / Contract 10 | absent before completion; exactly one when completed | sealed PerceptionResult | no | reject |
| c10.field.032 | CaptureSetIntake | schemaVersion | CaptureSetIntake.schemaVersion | Поле CaptureSetIntake «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.capture-set-intake.v1 | schema registry | no | reject |
| c10.field.033 | SameRoomValidationRecord | schemaVersion | SameRoomValidationRecord.schemaVersion | Поле SameRoomValidationRecord «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.same-room-validation.v1 | schema registry | no | reject |
| c10.field.034 | PerceptionOperation | schemaVersion | PerceptionOperation.schemaVersion | Поле PerceptionOperation «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.perception-operation.v1 | schema registry | no | reject |
| c10.field.035 | MixedRoomValidationRequest | schemaVersion | MixedRoomValidationRequest.schemaVersion | Поле MixedRoomValidationRequest «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.mixed-room-validation-request.v1 | schema registry | no | reject |
| c10.field.036 | UnsupportedInput | schemaVersion | UnsupportedInput.schemaVersion | Поле UnsupportedInput «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.unsupported-input.v1 | schema registry | no | reject |
| c10.field.100 | VlmSceneCandidate | candidateId | VlmSceneCandidate.candidateId | Поле VlmSceneCandidate «candidateId» | string | required | 1 | TDH Rev10 | opaque governed ID | — | no | reject |
| c10.field.101 | VlmSceneCandidate | operationId | VlmSceneCandidate.operationId | Поле VlmSceneCandidate «operationId» | string | required | 1 | TDH Rev10 | same operation | PerceptionOperation.operationId | no | reject |
| c10.field.102 | VlmSceneCandidate | roomCaseId | VlmSceneCandidate.roomCaseId | Поле VlmSceneCandidate «roomCaseId» | string | required | 1 | TDH Rev10 | same RoomCase | RoomCase.roomCaseId | no | reject |
| c10.field.103 | VlmSceneCandidate | contributingImageAssetIds | VlmSceneCandidate.contributingImageAssetIds | Поле VlmSceneCandidate «contributingImageAssetIds» | array<string> | required | 1..6 | TDH Rev10 | unique; exact RoomCase set | RoomCase.imageAssets[].imageAssetId | no | reject |
| c10.field.104 | VlmSceneCandidate | producingStageIdentity | VlmSceneCandidate.producingStageIdentity | Поле VlmSceneCandidate «producingStageIdentity» | string | required | 1 | Contract 4 | Contract-4 producing-stage registry | — | no | reject |
| c10.field.105 | VlmSceneCandidate | rawProviderOutputReference | VlmSceneCandidate.rawProviderOutputReference | Поле VlmSceneCandidate «rawProviderOutputReference» | string | required | 1 | TDH Rev10 / PMSEA | resolvable provider-neutral reference | raw provider output | no | reject |
| c10.field.106 | VlmSceneCandidate | candidateNodes | VlmSceneCandidate.candidateNodes | Поле VlmSceneCandidate «candidateNodes» | array<CandidateNode> | required | 0..N | Contract 10 | — | — | no | reject |
| c10.field.107 | CandidateNode | candidateNodeId | CandidateNode.candidateNodeId | Поле CandidateNode «candidateNodeId» | string | required | 1 | Contract 10 | unique in candidate | — | no | reject |
| c10.field.108 | CandidateNode | kind | CandidateNode.kind | Поле CandidateNode «kind» | enum | required | 1 | Contract 1 | Room \| StructuralElement \| Object \| FreeSpaceRegion | — | no | reject |
| c10.field.109 | CandidateNode | spaceTypeId | CandidateNode.spaceTypeId | Поле CandidateNode «spaceTypeId» | string | conditional | 0..1 | Contract 1 | Residential-34 active identity; Room only | Contract 1 registry | no | reject |
| c10.field.110 | CandidateNode | typeLabel | CandidateNode.typeLabel | Поле CandidateNode «typeLabel» | Observed<string> | conditional | 0..1 | Contract 1 | StructuralElement/Object only; open governed string | — | no | preserve non-empty open string; do not fabricate alias |
| c10.field.111 | CandidateNode | geometryCandidate | CandidateNode.geometryCandidate | Поле CandidateNode «geometryCandidate» | ADR013GeometryCandidate | conditional | 0..1 | ADR-013 / PMSEA | provider-neutral candidate geometry | — | no | reject |
| c10.field.112 | VlmSceneCandidate | candidateRelations | VlmSceneCandidate.candidateRelations | Поле VlmSceneCandidate «candidateRelations» | array<CandidateRelation> | required | 0..N | Contract 2/3 | absence permitted | — | no | reject |
| c10.field.113 | CandidateRelation | candidateRelationId | CandidateRelation.candidateRelationId | Поле CandidateRelation «candidateRelationId» | string | required | 1 | Contract 10 | unique in candidate | — | no | reject |
| c10.field.114 | CandidateRelation | relationTypeIdentity | CandidateRelation.relationTypeIdentity | Поле CandidateRelation «relationTypeIdentity» | string | required | 1 | Contract 2 | Contract-2 relation identity | Contract 2 registry | no | reject |
| c10.field.115 | CandidateRelation | endpointCandidateNodeIds | CandidateRelation.endpointCandidateNodeIds | Поле CandidateRelation «endpointCandidateNodeIds» | array<string> | required | 2 | Contract 2 | two distinct endpoints | VlmSceneCandidate.candidateNodes[].candidateNodeId | no | reject |
| c10.field.116 | VlmSceneCandidate | schemaVersion | VlmSceneCandidate.schemaVersion | Поле VlmSceneCandidate «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.vlm-scene-candidate.v1 | schema registry | no | reject |
| c10.field.120 | StructuredSceneV0 | sceneId | StructuredSceneV0.sceneId | Поле StructuredSceneV0 «sceneId» | string | required | 1 | Contract 10 | opaque governed ID | — | no | reject |
| c10.field.121 | StructuredSceneV0 | operationId | StructuredSceneV0.operationId | Поле StructuredSceneV0 «operationId» | string | required | 1 | TDH Rev10 | same operation | PerceptionOperation.operationId | no | reject |
| c10.field.122 | StructuredSceneV0 | roomCaseId | StructuredSceneV0.roomCaseId | Поле StructuredSceneV0 «roomCaseId» | string | required | 1 | TDH Rev10 | same RoomCase | RoomCase.roomCaseId | no | reject |
| c10.field.123 | StructuredSceneV0 | contributingImageAssetIds | StructuredSceneV0.contributingImageAssetIds | Поле StructuredSceneV0 «contributingImageAssetIds» | array<string> | required | 1..6 | TDH Rev10 | exact RoomCase set | RoomCase.imageAssets[].imageAssetId | no | reject |
| c10.field.124 | StructuredSceneV0 | sceneRevisionId | StructuredSceneV0.sceneRevisionId | Поле StructuredSceneV0 «sceneRevisionId» | string | required | 1 | Contract 10 | immutable revision ID | — | no | reject |
| c10.field.125 | StructuredSceneV0 | nodes | StructuredSceneV0.nodes | Поле StructuredSceneV0 «nodes» | array<SceneNode> | required | 1..N | ADR-013 / Contract 1 | exactly one Room node | — | no | reject |
| c10.field.126 | SceneNode | nodeId | SceneNode.nodeId | Поле SceneNode «nodeId» | string | required | 1 | ADR-013 / Contract 2 | unique in scene | — | no | reject |
| c10.field.127 | SceneNode | kind | SceneNode.kind | Поле SceneNode «kind» | enum | required | 1 | Contract 1 | Room \| StructuralElement \| Object \| FreeSpaceRegion | — | no | reject |
| c10.field.128 | SceneNode | spaceTypeId | SceneNode.spaceTypeId | Поле SceneNode «spaceTypeId» | Observed<SpaceTypeId> | conditional | 0..1 | Contract 1 | required for Room; prohibited otherwise; Residential-34 | Contract 1 registry | no | reject |
| c10.field.129 | SceneNode | typeLabel | SceneNode.typeLabel | Поле SceneNode «typeLabel» | Observed<string> | conditional | 0..1 | Contract 1 | required for StructuralElement/Object; prohibited for Room/FreeSpaceRegion; open governed string | — | no | preserve non-empty open string; do not fabricate alias |
| c10.field.130 | SceneNode | geometry | SceneNode.geometry | Поле SceneNode «geometry» | ADR013GeometryValue | required | 1 | ADR-013 | must conform to accepted StructuredScene geometry contract | — | no | reject |
| c10.field.131 | StructuredSceneV0 | relations | StructuredSceneV0.relations | Поле StructuredSceneV0 «relations» | array<SceneRelation> | required | 0..N | Contract 2/3 | applicability does not imply existence | — | no | reject |
| c10.field.132 | SceneRelation | relationId | SceneRelation.relationId | Поле SceneRelation «relationId» | string | required | 1 | Contract 10 | unique in scene | — | no | reject |
| c10.field.133 | SceneRelation | relationTypeIdentity | SceneRelation.relationTypeIdentity | Поле SceneRelation «relationTypeIdentity» | string | required | 1 | Contract 2 | Contract-2 relation identity | Contract 2 registry | no | reject |
| c10.field.134 | SceneRelation | endpointNodeIds | SceneRelation.endpointNodeIds | Поле SceneRelation «endpointNodeIds» | array<string> | required | 2 | Contract 2 | two distinct existing nodes | StructuredSceneV0.nodes[].nodeId | no | reject |
| c10.field.135 | SceneRelation | relationRevisionId | SceneRelation.relationRevisionId | Поле SceneRelation «relationRevisionId» | string | required | 1 | Contract 10 | immutable revision ID | — | no | reject |
| c10.field.136 | StructuredSceneV0 | schemaVersion | StructuredSceneV0.schemaVersion | Поле StructuredSceneV0 «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.structured-scene-v0.v1 | schema registry | no | reject |
| c10.field.200 | PerceptionResultCommon | operationId | PerceptionResultCommon.operationId | Поле PerceptionResultCommon «operationId» | string | required | 1 | TDH Rev10 | same operation | operation | no | reject |
| c10.field.201 | PerceptionResultCommon | status | PerceptionResultCommon.status | Поле PerceptionResultCommon «status» | enum | required | 1 | PMSEA Part N | scene \| insufficient-evidence \| failure \| rejected | — | no | reject |
| c10.field.202 | PerceptionResultCommon | roomCaseId | PerceptionResultCommon.roomCaseId | Поле PerceptionResultCommon «roomCaseId» | string | conditional | 0..1 | TDH Rev10 | present iff valid RoomCase established | RoomCase | no | reject |
| c10.field.203 | PerceptionResultCommon | contributingImageAssetIds | PerceptionResultCommon.contributingImageAssetIds | Поле PerceptionResultCommon «contributingImageAssetIds» | array<string> | conditional | 0..6 | TDH Rev10 | 1..6 when ImageAssets admitted; 0 only before admission | ImageAsset IDs | no | reject |
| c10.field.204 | PerceptionResultCommon | diagnosticsReference | PerceptionResultCommon.diagnosticsReference | Поле PerceptionResultCommon «diagnosticsReference» | string | required | 1 | PMSEA Part M.6/N | operational diagnostics only | PerceptionOperationDiagnostics | no | reject |
| c10.field.205 | PerceptionResultCommon | schemaVersion | PerceptionResultCommon.schemaVersion | Поле PerceptionResultCommon «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.perception-result.v1 | schema registry | no | reject |
| c10.field.206 | PerceptionResultCommon | ruleSetVersion | PerceptionResultCommon.ruleSetVersion | Поле PerceptionResultCommon «ruleSetVersion» | string | required | 1 | Contract 1/10 | locked rule-set ID | rule registry | no | reject |
| c10.field.207 | PerceptionResultCommon | contractBundleReference | PerceptionResultCommon.contractBundleReference | Поле PerceptionResultCommon «contractBundleReference» | string | required | 1 | Contract 10 | exact Contracts 1–10 identity bundle | source manifest | no | reject |
| c10.field.208 | PerceptionResultCommon | vocabularyVersion | PerceptionResultCommon.vocabularyVersion | Поле PerceptionResultCommon «vocabularyVersion» | string | required | 1 | Contract 1 | locked vocabulary identity | Contract 1 | no | reject |
| c10.field.209 | PerceptionResultCommon | providerConfigurationVersionReference | PerceptionResultCommon.providerConfigurationVersionReference | Поле PerceptionResultCommon «providerConfigurationVersionReference» | string | conditional | 0..1 | Controlled Learning compatibility | present when provider invoked | provider config | no | reject |
| c10.field.210 | PerceptionResultCommon | sealedAt | PerceptionResultCommon.sealedAt | Поле PerceptionResultCommon «sealedAt» | RFC3339 timestamp | required | 1 | Contract 10 | UTC, fractional seconds optional | — | no | reject |
| c10.field.211 | PerceptionResultCommon | sealIntegrityReference | PerceptionResultCommon.sealIntegrityReference | Поле PerceptionResultCommon «sealIntegrityReference» | string | required | 1 | Contract 10 | sha256:<64 lower-hex> | canonical sealed payload | no | reject |
| c10.field.212 | PerceptionResultCommon | predecessorResultReference | PerceptionResultCommon.predecessorResultReference | Поле PerceptionResultCommon «predecessorResultReference» | string | conditional | 0..1 | Contract 10 | required for superseding correction | prior sealed result | no | reject |
| c10.field.213 | PerceptionResultCommon | resultId | PerceptionResultCommon.resultId | Поле PerceptionResultCommon «resultId» | string | required | 1 | Contract 10 | opaque stable result identity | — | no | reject |
| c10.field.214 | PerceptionResultCommon | resultRevisionId | PerceptionResultCommon.resultRevisionId | Поле PerceptionResultCommon «resultRevisionId» | string | required | 1 | Contract 10 | immutable result revision identity | — | no | reject |
| c10.field.220 | SceneResult | scene | SceneResult.scene | Поле SceneResult «scene» | StructuredSceneV0 | required | 1 | PMSEA Part N.1 | embedded canonical copy | — | no | reject |
| c10.field.221 | SceneResult | completeness | SceneResult.completeness | Поле SceneResult «completeness» | enum | required | 1 | PMSEA Part N.1 / Contract 7 | full \| partial | — | no | reject |
| c10.field.222 | SceneResult | evidenceArtifactReference | SceneResult.evidenceArtifactReference | Поле SceneResult «evidenceArtifactReference» | string | required | 1 | PMSEA Part M/N.1 | separate evidence sidecar | PerceptionEvidenceArtifact | no | reject |
| c10.field.230 | InsufficientEvidenceResult | reasonCategory | InsufficientEvidenceResult.reasonCategory | Поле InsufficientEvidenceResult «reasonCategory» | enum | required | 1 | PMSEA Part N.2 | same-room-unconfirmed \| insufficient-scene-evidence \| fusion-insufficient \| coverage-insufficient | — | no | reject |
| c10.field.231 | InsufficientEvidenceResult | recommendedNextAction | InsufficientEvidenceResult.recommendedNextAction | Поле InsufficientEvidenceResult «recommendedNextAction» | enum | required | 1 | Contract 10 representation of PMSEA field | provide-additional-view \| improve-image-quality \| recapture-same-room \| retry-later \| none | — | no | reject |
| c10.field.240 | FailureResult | technicalReasonCategory | FailureResult.technicalReasonCategory | Поле FailureResult «technicalReasonCategory» | enum | required | 1 | PMSEA Part N.3 / Contract 9 | input.unreadable \| input.unsupported \| provider.timeout \| provider.malformed_response | closed Contract-9 runtime reason set | no | reject |
| c10.field.241 | FailureResult | retryability | FailureResult.retryability | Поле FailureResult «retryability» | enum | required | 1 | Contract 9 | c9.retryability.input-replacement-required \| c9.retryability.retryable-under-unchanged-locked-rule \| c9.retryability.mechanism-change-required | exact retryability identity fixed by selected technicalReasonCategory | no | reject |
| c10.field.250 | RejectedResult | contractViolations | RejectedResult.contractViolations | Поле RejectedResult «contractViolations» | array<string> | conditional | 0..N | PMSEA Part N.4 / Contract 9 | c2.room.missing_candidate \| c2.node.duplicate_id \| c2.relation.dangling_endpoint \| c2.geometry.invalid \| c3.general.schema_version \| c3.general.operation_identity \| c3.general.image_identity \| c3.general.result_metadata \| c3.room.missing \| c3.room.invalid_cardinality \| c3.confidence.missing \| c3.confidence.invalid \| c3.provenance.missing \| c3.provenance.invalid | required 1..N iff rejectionStage is c10.stage.004 or c10.stage.007; prohibited for c10.stage.006 | no | reject |
| c10.field.251 | RejectedResult | inputSetId | RejectedResult.inputSetId | Поле RejectedResult «inputSetId» | string | conditional | 0..1 | TDH Rev10 | required iff rejectionStage=c10.stage.006; prohibited otherwise | negative input set governed by SameRoomValidationRecord | no | reject |
| c10.field.252 | RejectedResult | rejectionStage | RejectedResult.rejectionStage | Поле RejectedResult «rejectionStage» | enum | required | 1 | PMSEA Part N.4 / Contract 10 representation | c10.stage.006 \| c10.stage.004 \| c10.stage.007 | operational stage registry | no | reject |
| c10.field.253 | RejectedResult | rejectionContextReference | RejectedResult.rejectionContextReference | Поле RejectedResult «rejectionContextReference» | string | conditional | 0..1 | Contract 10 | required iff rejectionStage=c10.stage.006; prohibited otherwise | SameRoomValidationRecord with outcome mixed-room-rejected, temporal-state-conflict or capture-set-invalid | no | reject |
| c10.field.260 | PerceptionOperationDiagnostics | diagnosticsId | PerceptionOperationDiagnostics.diagnosticsId | Поле PerceptionOperationDiagnostics «diagnosticsId» | string | required | 1 | PMSEA Part M.6 | opaque governed ID | — | no | reject |
| c10.field.261 | PerceptionOperationDiagnostics | operationId | PerceptionOperationDiagnostics.operationId | Поле PerceptionOperationDiagnostics «operationId» | string | required | 1 | TDH Rev10 | same operation | operation | no | reject |
| c10.field.262 | PerceptionOperationDiagnostics | roomCaseId | PerceptionOperationDiagnostics.roomCaseId | Поле PerceptionOperationDiagnostics «roomCaseId» | string | conditional | 0..1 | TDH Rev10 | present iff valid RoomCase established | RoomCase | no | reject |
| c10.field.263 | PerceptionOperationDiagnostics | stageEvents | PerceptionOperationDiagnostics.stageEvents | Поле PerceptionOperationDiagnostics «stageEvents» | array<StageEvent> | required | 1..N | PMSEA Part M.6 | ordered operational events | — | no | reject |
| c10.field.264 | StageEvent | stageIdentity | StageEvent.stageIdentity | Поле StageEvent «stageIdentity» | string | required | 1 | Contract 4/10 | registered stage ID | stage registry | no | reject |
| c10.field.265 | StageEvent | status | StageEvent.status | Поле StageEvent «status» | enum | required | 1 | Contract 10 | started \| completed \| failed \| skipped | — | no | reject |
| c10.field.266 | StageEvent | startedAt | StageEvent.startedAt | Поле StageEvent «startedAt» | RFC3339 timestamp | required | 1 | Contract 10 | UTC | — | no | reject |
| c10.field.267 | StageEvent | completedAt | StageEvent.completedAt | Поле StageEvent «completedAt» | RFC3339 timestamp | conditional | 0..1 | Contract 10 | required for completed/failed | — | no | reject |
| c10.field.268 | StageEvent | failureCode | StageEvent.failureCode | Поле StageEvent «failureCode» | string | conditional | 0..1 | PMSEA Part M.6 | required iff status=failed | failure registry | no | reject |
| c10.field.269 | PerceptionOperationDiagnostics | imageDiagnosticReferences | PerceptionOperationDiagnostics.imageDiagnosticReferences | Поле PerceptionOperationDiagnostics «imageDiagnosticReferences» | array<string> | required | 0..6 | PMSEA Part M.6 | one per instantiated ImageAsset | ImageAssetProcessingDiagnostic | no | reject |
| c10.field.270 | PerceptionOperationDiagnostics | traceReference | PerceptionOperationDiagnostics.traceReference | Поле PerceptionOperationDiagnostics «traceReference» | string | required | 1 | Diagnosability compatibility | no hidden chain-of-thought | operational trace | no | reject |
| c10.field.271 | PerceptionOperationDiagnostics | integrityReference | PerceptionOperationDiagnostics.integrityReference | Поле PerceptionOperationDiagnostics «integrityReference» | string | required | 1 | Security compatibility | sha256 reference | diagnostic payload | no | reject |
| c10.field.272 | PerceptionOperationDiagnostics | schemaVersion | PerceptionOperationDiagnostics.schemaVersion | Поле PerceptionOperationDiagnostics «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.perception-operation-diagnostics.v1 | schema registry | no | reject |
| c10.field.280 | ImageAssetProcessingDiagnostic | imageDiagnosticId | ImageAssetProcessingDiagnostic.imageDiagnosticId | Поле ImageAssetProcessingDiagnostic «imageDiagnosticId» | string | required | 1 | PMSEA Part M.6 | opaque governed ID | — | no | reject |
| c10.field.281 | ImageAssetProcessingDiagnostic | operationId | ImageAssetProcessingDiagnostic.operationId | Поле ImageAssetProcessingDiagnostic «operationId» | string | required | 1 | TDH Rev10 | same operation | operation | no | reject |
| c10.field.282 | ImageAssetProcessingDiagnostic | imageAssetId | ImageAssetProcessingDiagnostic.imageAssetId | Поле ImageAssetProcessingDiagnostic «imageAssetId» | string | required | 1 | TDH Rev10 | one image | ImageAsset | no | reject |
| c10.field.283 | ImageAssetProcessingDiagnostic | processingStatus | ImageAssetProcessingDiagnostic.processingStatus | Поле ImageAssetProcessingDiagnostic «processingStatus» | enum | required | 1 | PMSEA Part M.6 | admitted \| excluded \| failed | — | no | reject |
| c10.field.284 | ImageAssetProcessingDiagnostic | failureStage | ImageAssetProcessingDiagnostic.failureStage | Поле ImageAssetProcessingDiagnostic «failureStage» | string | conditional | 0..1 | PMSEA Part M.6 | required iff failed | stage registry | no | reject |
| c10.field.285 | ImageAssetProcessingDiagnostic | failureCode | ImageAssetProcessingDiagnostic.failureCode | Поле ImageAssetProcessingDiagnostic «failureCode» | string | conditional | 0..1 | PMSEA Part M.6 | required iff failed | failure registry | no | reject |
| c10.field.286 | ImageAssetProcessingDiagnostic | retryability | ImageAssetProcessingDiagnostic.retryability | Поле ImageAssetProcessingDiagnostic «retryability» | enum | conditional | 0..1 | Contract 9/PMSEA | required iff failed | retryability registry | no | reject |
| c10.field.287 | ImageAssetProcessingDiagnostic | providerTraceReference | ImageAssetProcessingDiagnostic.providerTraceReference | Поле ImageAssetProcessingDiagnostic «providerTraceReference» | string | conditional | 0..1 | PMSEA Part M.6 | present when provider invoked | provider trace | no | reject |
| c10.field.288 | ImageAssetProcessingDiagnostic | preprocessingTraceReference | ImageAssetProcessingDiagnostic.preprocessingTraceReference | Поле ImageAssetProcessingDiagnostic «preprocessingTraceReference» | string | conditional | 0..1 | PMSEA Part M.6 | present when preprocessing occurred | preprocessing trace | no | reject |
| c10.field.289 | ImageAssetProcessingDiagnostic | evidenceAvailability | ImageAssetProcessingDiagnostic.evidenceAvailability | Поле ImageAssetProcessingDiagnostic «evidenceAvailability» | enum | required | 1 | PMSEA Part M.6 | available \| unavailable \| not-applicable | — | no | reject |
| c10.field.290 | ImageAssetProcessingDiagnostic | excludedFromFusionReason | ImageAssetProcessingDiagnostic.excludedFromFusionReason | Поле ImageAssetProcessingDiagnostic «excludedFromFusionReason» | string | conditional | 0..1 | PMSEA Part M.6 | required iff processingStatus=excluded | reason registry | no | reject |
| c10.field.291 | ImageAssetProcessingDiagnostic | schemaVersion | ImageAssetProcessingDiagnostic.schemaVersion | Поле ImageAssetProcessingDiagnostic «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.image-asset-processing-diagnostic.v1 | schema registry | no | reject |
| c10.field.300 | PerceptionEvidenceArtifact | evidenceArtifactId | PerceptionEvidenceArtifact.evidenceArtifactId | Поле PerceptionEvidenceArtifact «evidenceArtifactId» | string | required | 1 | PMSEA Part M | opaque governed ID | — | no | reject |
| c10.field.301 | PerceptionEvidenceArtifact | operationId | PerceptionEvidenceArtifact.operationId | Поле PerceptionEvidenceArtifact «operationId» | string | required | 1 | TDH Rev10 | same operation | operation | no | reject |
| c10.field.302 | PerceptionEvidenceArtifact | roomCaseId | PerceptionEvidenceArtifact.roomCaseId | Поле PerceptionEvidenceArtifact «roomCaseId» | string | required | 1 | TDH Rev10 | same RoomCase | RoomCase | no | reject |
| c10.field.303 | PerceptionEvidenceArtifact | contributingImageAssetIds | PerceptionEvidenceArtifact.contributingImageAssetIds | Поле PerceptionEvidenceArtifact «contributingImageAssetIds» | array<string> | required | 1..6 | TDH Rev10 | exact RoomCase set | ImageAsset IDs | no | reject |
| c10.field.304 | PerceptionEvidenceArtifact | sceneReference | PerceptionEvidenceArtifact.sceneReference | Поле PerceptionEvidenceArtifact «sceneReference» | string | required | 1 | PMSEA Part M | scene ID/revision only; no scene embedding | StructuredSceneV0 | no | reject |
| c10.field.305 | PerceptionEvidenceArtifact | groundingRecords | PerceptionEvidenceArtifact.groundingRecords | Поле PerceptionEvidenceArtifact «groundingRecords» | array<GroundingRecord> | required | 1..N | PMSEA Part M | — | scene elements | no | reject |
| c10.field.306 | GroundingRecord | groundingRecordId | GroundingRecord.groundingRecordId | Поле GroundingRecord «groundingRecordId» | string | required | 1 | Contract 10 | unique in artifact | — | no | reject |
| c10.field.307 | GroundingRecord | targetElementId | GroundingRecord.targetElementId | Поле GroundingRecord «targetElementId» | string | required | 1 | PMSEA Part M | node/relation/attribute identity | StructuredScene or value record | no | reject |
| c10.field.308 | GroundingRecord | imageAssetIds | GroundingRecord.imageAssetIds | Поле GroundingRecord «imageAssetIds» | array<string> | required | 1..6 | PMSEA Part M / TDH | same RoomCase | ImageAsset IDs | no | reject |
| c10.field.309 | GroundingRecord | evidenceReference | GroundingRecord.evidenceReference | Поле GroundingRecord «evidenceReference» | string | required | 1 | PMSEA Part M | normalized bbox/polygon/mask/crop/provider reference | evidence locator | no | reject |
| c10.field.310 | GroundingRecord | evidenceType | GroundingRecord.evidenceType | Поле GroundingRecord «evidenceType» | string | required | 1 | PMSEA Part M | provider-neutral evidence type | evidence type registry | no | reject |
| c10.field.311 | GroundingRecord | confidenceAssertionReference | GroundingRecord.confidenceAssertionReference | Поле GroundingRecord «confidenceAssertionReference» | string | conditional | 0..1 | PMSEA Part O / Contract 5 | present when confidence asserted | ConfidenceAssertionRecord | no | reject |
| c10.field.312 | GroundingRecord | provenanceAttachmentReference | GroundingRecord.provenanceAttachmentReference | Поле GroundingRecord «provenanceAttachmentReference» | string | required | 1 | Contract 4 | exactly one immediate-step provenance | ProvenanceAttachmentRecord | no | reject |
| c10.field.313 | GroundingRecord | mechanismVersionReference | GroundingRecord.mechanismVersionReference | Поле GroundingRecord «mechanismVersionReference» | string | required | 1 | PMSEA Part M/P | versioned mechanism | configuration bundle | no | reject |
| c10.field.314 | GroundingRecord | promptVersionReference | GroundingRecord.promptVersionReference | Поле GroundingRecord «promptVersionReference» | string | conditional | 0..1 | PMSEA Part M/P | present when prompt used | prompt registry | no | reject |
| c10.field.315 | GroundingRecord | preprocessingTransformReference | GroundingRecord.preprocessingTransformReference | Поле GroundingRecord «preprocessingTransformReference» | string | conditional | 0..1 | PMSEA Part M/P | present when preprocessing occurred | preprocessing record | no | reject |
| c10.field.316 | PerceptionEvidenceArtifact | provenanceAttachments | PerceptionEvidenceArtifact.provenanceAttachments | Поле PerceptionEvidenceArtifact «provenanceAttachments» | array<ProvenanceAttachmentRecord> | required | 0..N | Contract 4 | — | — | no | reject |
| c10.field.317 | PerceptionEvidenceArtifact | bestEffortAssessments | PerceptionEvidenceArtifact.bestEffortAssessments | Поле PerceptionEvidenceArtifact «bestEffortAssessments» | array<BestEffortFieldAssessmentRecord> | required | 0..N | Contract 4 | one per applicable field-owner pair | — | no | reject |
| c10.field.318 | PerceptionEvidenceArtifact | attributeEvidenceArtifacts | PerceptionEvidenceArtifact.attributeEvidenceArtifacts | Поле PerceptionEvidenceArtifact «attributeEvidenceArtifacts» | array<AttributeEvidenceArtifact> | required | 0..N | Contract 4 | only for produced values | — | no | reject |
| c10.field.319 | PerceptionEvidenceArtifact | evidenceSets | PerceptionEvidenceArtifact.evidenceSets | Поле PerceptionEvidenceArtifact «evidenceSets» | array<EvidenceSetRecord> | required | 0..N | Contract 4 | — | — | no | reject |
| c10.field.320 | PerceptionEvidenceArtifact | determinabilityBasisRecords | PerceptionEvidenceArtifact.determinabilityBasisRecords | Поле PerceptionEvidenceArtifact «determinabilityBasisRecords» | array<DeterminabilityEvidenceBasisRecord> | required | 0..N | Contract 4 | outcome-neutral | — | no | reject |
| c10.field.321 | PerceptionEvidenceArtifact | confidenceAssertions | PerceptionEvidenceArtifact.confidenceAssertions | Поле PerceptionEvidenceArtifact «confidenceAssertions» | array<ConfidenceAssertionRecord> | required | 0..N | Contract 5 | — | — | no | reject |
| c10.field.322 | PerceptionEvidenceArtifact | contract6PackageReference | PerceptionEvidenceArtifact.contract6PackageReference | Поле PerceptionEvidenceArtifact «contract6PackageReference» | string | conditional | 0..1 | Contract 6 | present when Contract-6 annotations exist | Contract6DeterminabilityPackage | no | reject |
| c10.field.323 | PerceptionEvidenceArtifact | integrityReference | PerceptionEvidenceArtifact.integrityReference | Поле PerceptionEvidenceArtifact «integrityReference» | string | required | 1 | Contract 4 compatibility | sha256 reference | artifact payload | no | reject |
| c10.field.324 | PerceptionEvidenceArtifact | historyReference | PerceptionEvidenceArtifact.historyReference | Поле PerceptionEvidenceArtifact «historyReference» | string | required | 1 | Contract 4 compatibility | immutable revision history | history record | no | reject |
| c10.field.325 | PerceptionEvidenceArtifact | bestEffortValues | PerceptionEvidenceArtifact.bestEffortValues | Поле PerceptionEvidenceArtifact «bestEffortValues» | array<BestEffortValueRevision> | required | 0..N | Contract 4 | immutable produced values | — | no | reject |
| c10.field.326 | PerceptionEvidenceArtifact | confidenceSourceSignals | PerceptionEvidenceArtifact.confidenceSourceSignals | Поле PerceptionEvidenceArtifact «confidenceSourceSignals» | array<ConfidenceSourceSignalRecord> | required | 0..N | Contract 5 | raw/non-missing confidence signals | — | no | reject |
| c10.field.327 | PerceptionEvidenceArtifact | schemaVersion | PerceptionEvidenceArtifact.schemaVersion | Поле PerceptionEvidenceArtifact «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.perception-evidence-artifact.v1 | schema registry | no | reject |
| c10.field.330 | ProvenanceAttachmentRecord | provenanceAttachmentId | ProvenanceAttachmentRecord.provenanceAttachmentId | Поле ProvenanceAttachmentRecord «provenanceAttachmentId» | string | required | 1 | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.331 | ProvenanceAttachmentRecord | targetAnnotationId | ProvenanceAttachmentRecord.targetAnnotationId | Поле ProvenanceAttachmentRecord «targetAnnotationId» | string | required | 1 | Contract 4 | imported Contract-4 domain | annotation/value revision | no | reject |
| c10.field.332 | ProvenanceAttachmentRecord | targetKind | ProvenanceAttachmentRecord.targetKind | Поле ProvenanceAttachmentRecord «targetKind» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.provenancetargetkind.* | no | reject |
| c10.field.333 | ProvenanceAttachmentRecord | provenanceIdentity | ProvenanceAttachmentRecord.provenanceIdentity | Поле ProvenanceAttachmentRecord «provenanceIdentity» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.provenance.* | no | reject |
| c10.field.334 | ProvenanceAttachmentRecord | producingStageIdentity | ProvenanceAttachmentRecord.producingStageIdentity | Поле ProvenanceAttachmentRecord «producingStageIdentity» | string | required | 1 | Contract 4 | imported Contract-4 domain | Contract-4 stage registry | no | reject |
| c10.field.335 | ProvenanceAttachmentRecord | producerIdentityAndVersions | ProvenanceAttachmentRecord.producerIdentityAndVersions | Поле ProvenanceAttachmentRecord «producerIdentityAndVersions» | array<string> | conditional | required for deterministic-derived, heuristic-inferred or provider-inferred provenance; absent or empty only when Contract 4 permits visually-observed provenance | Contract 4 | imported Contract-4 domain | producer/config registry | no | reject |
| c10.field.336 | ProvenanceAttachmentRecord | parentEvidenceOrValueIds | ProvenanceAttachmentRecord.parentEvidenceOrValueIds | Поле ProvenanceAttachmentRecord «parentEvidenceOrValueIds» | array<string> | conditional | 0..N | Contract 4 | imported Contract-4 domain | evidence/value revisions | no | reject |
| c10.field.337 | ProvenanceAttachmentRecord | roomCaseId | ProvenanceAttachmentRecord.roomCaseId | Поле ProvenanceAttachmentRecord «roomCaseId» | string | required | 1 | Contract 4 | imported Contract-4 domain | RoomCase | no | reject |
| c10.field.338 | ProvenanceAttachmentRecord | contractSemanticVersion | ProvenanceAttachmentRecord.contractSemanticVersion | Поле ProvenanceAttachmentRecord «contractSemanticVersion» | string | required | 1 | Contract 4 | imported Contract-4 domain | c4.semanticmodelversion.001 | no | reject |
| c10.field.339 | ProvenanceAttachmentRecord | traceReference | ProvenanceAttachmentRecord.traceReference | Поле ProvenanceAttachmentRecord «traceReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | diagnostic trace | no | reject |
| c10.field.340 | ProvenanceAttachmentRecord | integrityReference | ProvenanceAttachmentRecord.integrityReference | Поле ProvenanceAttachmentRecord «integrityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | record payload | no | reject |
| c10.field.341 | ProvenanceAttachmentRecord | historyReference | ProvenanceAttachmentRecord.historyReference | Поле ProvenanceAttachmentRecord «historyReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable history | no | reject |
| c10.field.350 | BestEffortFieldAssessmentRecord | assessmentId | BestEffortFieldAssessmentRecord.assessmentId | Поле BestEffortFieldAssessmentRecord «assessmentId» | string | required | 1 | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.351 | BestEffortFieldAssessmentRecord | fieldIdentity | BestEffortFieldAssessmentRecord.fieldIdentity | Поле BestEffortFieldAssessmentRecord «fieldIdentity» | string | required | 1 | Contract 4 | imported Contract-4 domain | c4.besteffort.field.* | no | reject |
| c10.field.352 | BestEffortFieldAssessmentRecord | capabilityIdentity | BestEffortFieldAssessmentRecord.capabilityIdentity | Поле BestEffortFieldAssessmentRecord «capabilityIdentity» | string | required | 1 | Contract 4 | imported Contract-4 domain | Contract-4 capability registry | no | reject |
| c10.field.353 | BestEffortFieldAssessmentRecord | ownerId | BestEffortFieldAssessmentRecord.ownerId | Поле BestEffortFieldAssessmentRecord «ownerId» | string | required | 1 | Contract 4 | imported Contract-4 domain | scene subject | no | reject |
| c10.field.354 | BestEffortFieldAssessmentRecord | ownerKind | BestEffortFieldAssessmentRecord.ownerKind | Поле BestEffortFieldAssessmentRecord «ownerKind» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.besteffortownerkind.* | no | reject |
| c10.field.355 | BestEffortFieldAssessmentRecord | roomCaseId | BestEffortFieldAssessmentRecord.roomCaseId | Поле BestEffortFieldAssessmentRecord «roomCaseId» | string | required | 1 | Contract 4 | imported Contract-4 domain | RoomCase | no | reject |
| c10.field.356 | BestEffortFieldAssessmentRecord | linkedValueIds | BestEffortFieldAssessmentRecord.linkedValueIds | Поле BestEffortFieldAssessmentRecord «linkedValueIds» | array<string> | required | 0..N | Contract 4 | imported Contract-4 domain | best-effort values | no | reject |
| c10.field.357 | BestEffortFieldAssessmentRecord | determinabilityBasisRecordId | BestEffortFieldAssessmentRecord.determinabilityBasisRecordId | Поле BestEffortFieldAssessmentRecord «determinabilityBasisRecordId» | string | required | 1 | Contract 4 | imported Contract-4 domain | DeterminabilityEvidenceBasisRecord | no | reject |
| c10.field.358 | BestEffortFieldAssessmentRecord | contractSemanticVersion | BestEffortFieldAssessmentRecord.contractSemanticVersion | Поле BestEffortFieldAssessmentRecord «contractSemanticVersion» | string | required | 1 | Contract 4 | imported Contract-4 domain | c4.semanticmodelversion.001 | no | reject |
| c10.field.359 | BestEffortFieldAssessmentRecord | producingStageIdentity | BestEffortFieldAssessmentRecord.producingStageIdentity | Поле BestEffortFieldAssessmentRecord «producingStageIdentity» | string | required | 1 | Contract 4 | imported Contract-4 domain | Contract-4 stage registry | no | reject |
| c10.field.360 | BestEffortFieldAssessmentRecord | traceReference | BestEffortFieldAssessmentRecord.traceReference | Поле BestEffortFieldAssessmentRecord «traceReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | diagnostic trace | no | reject |
| c10.field.361 | BestEffortFieldAssessmentRecord | integrityReference | BestEffortFieldAssessmentRecord.integrityReference | Поле BestEffortFieldAssessmentRecord «integrityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | record payload | no | reject |
| c10.field.362 | BestEffortFieldAssessmentRecord | historyReference | BestEffortFieldAssessmentRecord.historyReference | Поле BestEffortFieldAssessmentRecord «historyReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable history | no | reject |
| c10.field.370 | AttributeEvidenceArtifact | attributeEvidenceArtifactId | AttributeEvidenceArtifact.attributeEvidenceArtifactId | Поле AttributeEvidenceArtifact «attributeEvidenceArtifactId» | string | required | 1 | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.371 | AttributeEvidenceArtifact | fieldAssessmentId | AttributeEvidenceArtifact.fieldAssessmentId | Поле AttributeEvidenceArtifact «fieldAssessmentId» | string | required | 1 | Contract 4 | imported Contract-4 domain | BestEffortFieldAssessmentRecord | no | reject |
| c10.field.372 | AttributeEvidenceArtifact | bestEffortValueId | AttributeEvidenceArtifact.bestEffortValueId | Поле AttributeEvidenceArtifact «bestEffortValueId» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable value revision | no | reject |
| c10.field.373 | AttributeEvidenceArtifact | ownerId | AttributeEvidenceArtifact.ownerId | Поле AttributeEvidenceArtifact «ownerId» | string | required | 1 | Contract 4 | imported Contract-4 domain | scene subject | no | reject |
| c10.field.374 | AttributeEvidenceArtifact | evidenceKindIdentity | AttributeEvidenceArtifact.evidenceKindIdentity | Поле AttributeEvidenceArtifact «evidenceKindIdentity» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.evidencekind.* | no | reject |
| c10.field.375 | AttributeEvidenceArtifact | provenanceAttachmentId | AttributeEvidenceArtifact.provenanceAttachmentId | Поле AttributeEvidenceArtifact «provenanceAttachmentId» | string | required | 1 | Contract 4 | imported Contract-4 domain | ProvenanceAttachmentRecord | no | reject |
| c10.field.376 | AttributeEvidenceArtifact | roomCaseId | AttributeEvidenceArtifact.roomCaseId | Поле AttributeEvidenceArtifact «roomCaseId» | string | required | 1 | Contract 4 | imported Contract-4 domain | RoomCase | no | reject |
| c10.field.377 | AttributeEvidenceArtifact | atomicContributions | AttributeEvidenceArtifact.atomicContributions | Поле AttributeEvidenceArtifact «atomicContributions» | array<AtomicEvidenceContribution> | required | 1..N | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.378 | AttributeEvidenceArtifact | producingStageIdentity | AttributeEvidenceArtifact.producingStageIdentity | Поле AttributeEvidenceArtifact «producingStageIdentity» | string | required | 1 | Contract 4 | imported Contract-4 domain | Contract-4 stage registry | no | reject |
| c10.field.379 | AttributeEvidenceArtifact | producerIdentityAndVersions | AttributeEvidenceArtifact.producerIdentityAndVersions | Поле AttributeEvidenceArtifact «producerIdentityAndVersions» | array<string> | conditional | required for deterministic-derived, heuristic-inferred or provider-inferred provenance; absent or empty only when Contract 4 permits visually-observed provenance | Contract 4 | imported Contract-4 domain | producer/config registry | no | reject |
| c10.field.380 | AttributeEvidenceArtifact | derivationParentIds | AttributeEvidenceArtifact.derivationParentIds | Поле AttributeEvidenceArtifact «derivationParentIds» | array<string> | conditional | 0..N | Contract 4 | imported Contract-4 domain | prior evidence/value revisions | no | reject |
| c10.field.381 | AttributeEvidenceArtifact | contractSemanticVersion | AttributeEvidenceArtifact.contractSemanticVersion | Поле AttributeEvidenceArtifact «contractSemanticVersion» | string | required | 1 | Contract 4 | imported Contract-4 domain | c4.semanticmodelversion.001 | no | reject |
| c10.field.382 | AttributeEvidenceArtifact | serializationSchemaReference | AttributeEvidenceArtifact.serializationSchemaReference | Поле AttributeEvidenceArtifact «serializationSchemaReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | Contract-10 schema | no | reject |
| c10.field.383 | AttributeEvidenceArtifact | reasonOrTraceReference | AttributeEvidenceArtifact.reasonOrTraceReference | Поле AttributeEvidenceArtifact «reasonOrTraceReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | diagnostic trace | no | reject |
| c10.field.384 | AttributeEvidenceArtifact | integrityReference | AttributeEvidenceArtifact.integrityReference | Поле AttributeEvidenceArtifact «integrityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | record payload | no | reject |
| c10.field.385 | AttributeEvidenceArtifact | dataUseEligibilityReference | AttributeEvidenceArtifact.dataUseEligibilityReference | Поле AttributeEvidenceArtifact «dataUseEligibilityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | eligibility record | no | reject |
| c10.field.386 | AttributeEvidenceArtifact | consentEligibilityReference | AttributeEvidenceArtifact.consentEligibilityReference | Поле AttributeEvidenceArtifact «consentEligibilityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | eligibility/NA record | no | reject |
| c10.field.387 | AttributeEvidenceArtifact | authorizationStateReference | AttributeEvidenceArtifact.authorizationStateReference | Поле AttributeEvidenceArtifact «authorizationStateReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | authorization state | no | reject |
| c10.field.388 | AttributeEvidenceArtifact | retentionDeletionPolicyReference | AttributeEvidenceArtifact.retentionDeletionPolicyReference | Поле AttributeEvidenceArtifact «retentionDeletionPolicyReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | retention/deletion policy | no | reject |
| c10.field.389 | AttributeEvidenceArtifact | safeFailureReference | AttributeEvidenceArtifact.safeFailureReference | Поле AttributeEvidenceArtifact «safeFailureReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | safe-failure disposition | no | reject |
| c10.field.390 | AttributeEvidenceArtifact | tamperEvidentHistoryReference | AttributeEvidenceArtifact.tamperEvidentHistoryReference | Поле AttributeEvidenceArtifact «tamperEvidentHistoryReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable history | no | reject |
| c10.field.391 | AttributeEvidenceArtifact | futureFeedbackLinkReference | AttributeEvidenceArtifact.futureFeedbackLinkReference | Поле AttributeEvidenceArtifact «futureFeedbackLinkReference» | string | conditional | 0..1 | Contract 4 | imported Contract-4 domain | future compatibility only | no | reject |
| c10.field.392 | AttributeEvidenceArtifact | noRegressionEvaluationReference | AttributeEvidenceArtifact.noRegressionEvaluationReference | Поле AttributeEvidenceArtifact «noRegressionEvaluationReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | no-regression lineage | no | reject |
| c10.field.393 | AttributeEvidenceArtifact | rollbackCompatibilityReference | AttributeEvidenceArtifact.rollbackCompatibilityReference | Поле AttributeEvidenceArtifact «rollbackCompatibilityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | rollback compatibility | no | reject |
| c10.field.394 | AttributeEvidenceArtifact | predecessorArtifactId | AttributeEvidenceArtifact.predecessorArtifactId | Поле AttributeEvidenceArtifact «predecessorArtifactId» | string | conditional | 0..1 | Contract 4 | imported Contract-4 domain | prior AEA revision | no | reject |
| c10.field.395 | AttributeEvidenceArtifact | artifactRevisionState | AttributeEvidenceArtifact.artifactRevisionState | Поле AttributeEvidenceArtifact «artifactRevisionState» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.artifactrevisionstate.* | no | reject |
| c10.field.400 | AtomicEvidenceContribution | contributionId | AtomicEvidenceContribution.contributionId | Поле AtomicEvidenceContribution «contributionId» | string | required | 1 | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.401 | AtomicEvidenceContribution | imageAssetId | AtomicEvidenceContribution.imageAssetId | Поле AtomicEvidenceContribution «imageAssetId» | string | required | 1 | Contract 4 | imported Contract-4 domain | ImageAsset | no | reject |
| c10.field.402 | AtomicEvidenceContribution | sourceAssetId | AtomicEvidenceContribution.sourceAssetId | Поле AtomicEvidenceContribution «sourceAssetId» | string | required | 1 | Contract 4 | imported Contract-4 domain | ImageAsset.sourceAssetId | no | reject |
| c10.field.403 | AtomicEvidenceContribution | locatorOrInferenceBasisReference | AtomicEvidenceContribution.locatorOrInferenceBasisReference | Поле AtomicEvidenceContribution «locatorOrInferenceBasisReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | evidence locator/basis | no | reject |
| c10.field.404 | AtomicEvidenceContribution | preprocessingLineageReference | AtomicEvidenceContribution.preprocessingLineageReference | Поле AtomicEvidenceContribution «preprocessingLineageReference» | string | conditional | 0..1 | Contract 4 | imported Contract-4 domain | preprocessing lineage | no | reject |
| c10.field.405 | AtomicEvidenceContribution | integrityReference | AtomicEvidenceContribution.integrityReference | Поле AtomicEvidenceContribution «integrityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | contribution payload | no | reject |
| c10.field.406 | AtomicEvidenceContribution | historyReference | AtomicEvidenceContribution.historyReference | Поле AtomicEvidenceContribution «historyReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable history | no | reject |
| c10.field.407 | AtomicEvidenceContribution | producingStageVersionReference | AtomicEvidenceContribution.producingStageVersionReference | Поле AtomicEvidenceContribution «producingStageVersionReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | stage/version registry | no | reject |
| c10.field.410 | EvidenceSetRecord | evidenceSetId | EvidenceSetRecord.evidenceSetId | Поле EvidenceSetRecord «evidenceSetId» | string | required | 1 | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.411 | EvidenceSetRecord | targetKind | EvidenceSetRecord.targetKind | Поле EvidenceSetRecord «targetKind» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.evidencesettargetkind.* | no | reject |
| c10.field.412 | EvidenceSetRecord | fieldAssessmentId | EvidenceSetRecord.fieldAssessmentId | Поле EvidenceSetRecord «fieldAssessmentId» | string | required | 1 | Contract 4 | imported Contract-4 domain | BestEffortFieldAssessmentRecord | no | reject |
| c10.field.413 | EvidenceSetRecord | bestEffortValueId | EvidenceSetRecord.bestEffortValueId | Поле EvidenceSetRecord «bestEffortValueId» | string | conditional | 0..1 | Contract 4 | imported Contract-4 domain | best-effort value | no | reject |
| c10.field.414 | EvidenceSetRecord | roomCaseId | EvidenceSetRecord.roomCaseId | Поле EvidenceSetRecord «roomCaseId» | string | required | 1 | Contract 4 | imported Contract-4 domain | RoomCase | no | reject |
| c10.field.415 | EvidenceSetRecord | contributionIds | EvidenceSetRecord.contributionIds | Поле EvidenceSetRecord «contributionIds» | array<string> | required | 1..N | Contract 4 | imported Contract-4 domain | AtomicEvidenceContribution | no | reject |
| c10.field.416 | EvidenceSetRecord | distinctImageAssetIds | EvidenceSetRecord.distinctImageAssetIds | Поле EvidenceSetRecord «distinctImageAssetIds» | array<string> | required | 1..6 | Contract 4 | imported Contract-4 domain | ImageAsset | no | reject |
| c10.field.417 | EvidenceSetRecord | fusionOperationIdentity | EvidenceSetRecord.fusionOperationIdentity | Поле EvidenceSetRecord «fusionOperationIdentity» | string | required | 1 | Contract 4 | imported Contract-4 domain | c4.fusionoperation.001 | no | reject |
| c10.field.418 | EvidenceSetRecord | fusionOperationVersion | EvidenceSetRecord.fusionOperationVersion | Поле EvidenceSetRecord «fusionOperationVersion» | string | required | 1 | Contract 4 | imported Contract-4 domain | fusion config | no | reject |
| c10.field.419 | EvidenceSetRecord | fingerprintRuleIdentity | EvidenceSetRecord.fingerprintRuleIdentity | Поле EvidenceSetRecord «fingerprintRuleIdentity» | string | required | 1 | Contract 4 | imported Contract-4 domain | c4.fingerprintrule.* | no | reject |
| c10.field.420 | EvidenceSetRecord | relationshipRecords | EvidenceSetRecord.relationshipRecords | Поле EvidenceSetRecord «relationshipRecords» | array<EvidenceRelationshipRecord> | required | 0..N | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.421 | EvidenceSetRecord | contradictionReferences | EvidenceSetRecord.contradictionReferences | Поле EvidenceSetRecord «contradictionReferences» | array<string> | required | 0..N | Contract 4 | imported Contract-4 domain | contradiction records | no | reject |
| c10.field.422 | EvidenceSetRecord | integrityReference | EvidenceSetRecord.integrityReference | Поле EvidenceSetRecord «integrityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | record payload | no | reject |
| c10.field.423 | EvidenceSetRecord | historyReference | EvidenceSetRecord.historyReference | Поле EvidenceSetRecord «historyReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable history | no | reject |
| c10.field.430 | DeterminabilityEvidenceBasisRecord | determinabilityBasisRecordId | DeterminabilityEvidenceBasisRecord.determinabilityBasisRecordId | Поле DeterminabilityEvidenceBasisRecord «determinabilityBasisRecordId» | string | required | 1 | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.431 | DeterminabilityEvidenceBasisRecord | fieldAssessmentId | DeterminabilityEvidenceBasisRecord.fieldAssessmentId | Поле DeterminabilityEvidenceBasisRecord «fieldAssessmentId» | string | required | 1 | Contract 4 | imported Contract-4 domain | BestEffortFieldAssessmentRecord | no | reject |
| c10.field.432 | DeterminabilityEvidenceBasisRecord | linkedBestEffortValueIds | DeterminabilityEvidenceBasisRecord.linkedBestEffortValueIds | Поле DeterminabilityEvidenceBasisRecord «linkedBestEffortValueIds» | array<string> | required | 0..N | Contract 4 | imported Contract-4 domain | best-effort values | no | reject |
| c10.field.433 | DeterminabilityEvidenceBasisRecord | roomCaseId | DeterminabilityEvidenceBasisRecord.roomCaseId | Поле DeterminabilityEvidenceBasisRecord «roomCaseId» | string | required | 1 | Contract 4 | imported Contract-4 domain | RoomCase | no | reject |
| c10.field.434 | DeterminabilityEvidenceBasisRecord | basisIdentities | DeterminabilityEvidenceBasisRecord.basisIdentities | Поле DeterminabilityEvidenceBasisRecord «basisIdentities» | array<string> | required | 1..N | Contract 4 | imported Contract-4 domain | c4.determinabilitybasis.* | no | reject |
| c10.field.435 | DeterminabilityEvidenceBasisRecord | linkedAttributeEvidenceArtifactIds | DeterminabilityEvidenceBasisRecord.linkedAttributeEvidenceArtifactIds | Поле DeterminabilityEvidenceBasisRecord «linkedAttributeEvidenceArtifactIds» | array<string> | required | 0..N | Contract 4 | imported Contract-4 domain | AEA | no | reject |
| c10.field.436 | DeterminabilityEvidenceBasisRecord | linkedEvidenceSetIds | DeterminabilityEvidenceBasisRecord.linkedEvidenceSetIds | Поле DeterminabilityEvidenceBasisRecord «linkedEvidenceSetIds» | array<string> | required | 0..N | Contract 4 | imported Contract-4 domain | EvidenceSetRecord | no | reject |
| c10.field.437 | DeterminabilityEvidenceBasisRecord | linkedFailureIds | DeterminabilityEvidenceBasisRecord.linkedFailureIds | Поле DeterminabilityEvidenceBasisRecord «linkedFailureIds» | array<string> | required | 0..N | Contract 4 | imported Contract-4 domain | Contract-4 failure IDs | no | reject |
| c10.field.438 | DeterminabilityEvidenceBasisRecord | contractSemanticVersion | DeterminabilityEvidenceBasisRecord.contractSemanticVersion | Поле DeterminabilityEvidenceBasisRecord «contractSemanticVersion» | string | required | 1 | Contract 4 | imported Contract-4 domain | c4.semanticmodelversion.001 | no | reject |
| c10.field.439 | DeterminabilityEvidenceBasisRecord | traceReference | DeterminabilityEvidenceBasisRecord.traceReference | Поле DeterminabilityEvidenceBasisRecord «traceReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | diagnostic trace | no | reject |
| c10.field.440 | DeterminabilityEvidenceBasisRecord | integrityReference | DeterminabilityEvidenceBasisRecord.integrityReference | Поле DeterminabilityEvidenceBasisRecord «integrityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | record payload | no | reject |
| c10.field.441 | DeterminabilityEvidenceBasisRecord | historyReference | DeterminabilityEvidenceBasisRecord.historyReference | Поле DeterminabilityEvidenceBasisRecord «historyReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable history | no | reject |
| c10.field.450 | EvidenceRelationshipRecord | relationshipRecordId | EvidenceRelationshipRecord.relationshipRecordId | Поле EvidenceRelationshipRecord «relationshipRecordId» | string | required | 1 | Contract 4 | imported Contract-4 domain | — | no | reject |
| c10.field.451 | EvidenceRelationshipRecord | evidenceSetId | EvidenceRelationshipRecord.evidenceSetId | Поле EvidenceRelationshipRecord «evidenceSetId» | string | required | 1 | Contract 4 | imported Contract-4 domain | EvidenceSetRecord | no | reject |
| c10.field.452 | EvidenceRelationshipRecord | relationshipIdentity | EvidenceRelationshipRecord.relationshipIdentity | Поле EvidenceRelationshipRecord «relationshipIdentity» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.evidencerelationship.* | no | reject |
| c10.field.453 | EvidenceRelationshipRecord | subjectKindIdentity | EvidenceRelationshipRecord.subjectKindIdentity | Поле EvidenceRelationshipRecord «subjectKindIdentity» | enum | required | 1 | Contract 4 | imported Contract-4 domain | c4.relationshipsubjectkind.* | no | reject |
| c10.field.454 | EvidenceRelationshipRecord | subjectIds | EvidenceRelationshipRecord.subjectIds | Поле EvidenceRelationshipRecord «subjectIds» | array<string> | required | 1..N condition-dependent | Contract 4 | imported Contract-4 domain | AtomicEvidenceContribution or artifact revisions | no | reject |
| c10.field.455 | EvidenceRelationshipRecord | aspectIdentity | EvidenceRelationshipRecord.aspectIdentity | Поле EvidenceRelationshipRecord «aspectIdentity» | string | conditional | 0..1 | Contract 4 | imported Contract-4 domain | field/aspect identity | no | reject |
| c10.field.456 | EvidenceRelationshipRecord | producingRuleAndVersion | EvidenceRelationshipRecord.producingRuleAndVersion | Поле EvidenceRelationshipRecord «producingRuleAndVersion» | string | required | 1 | Contract 4 | imported Contract-4 domain | relationship rule/config | no | reject |
| c10.field.457 | EvidenceRelationshipRecord | roomCaseId | EvidenceRelationshipRecord.roomCaseId | Поле EvidenceRelationshipRecord «roomCaseId» | string | required | 1 | Contract 4 | imported Contract-4 domain | RoomCase | no | reject |
| c10.field.458 | EvidenceRelationshipRecord | integrityReference | EvidenceRelationshipRecord.integrityReference | Поле EvidenceRelationshipRecord «integrityReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | record payload | no | reject |
| c10.field.459 | EvidenceRelationshipRecord | historyReference | EvidenceRelationshipRecord.historyReference | Поле EvidenceRelationshipRecord «historyReference» | string | required | 1 | Contract 4 | imported Contract-4 domain | immutable history | no | reject |
| c10.field.460 | BestEffortValueRevision | bestEffortValueId | BestEffortValueRevision.bestEffortValueId | Поле BestEffortValueRevision «bestEffortValueId» | string | required | 1 | Contract 4 | Contract-4 identity and revision semantics | — | no | reject |
| c10.field.461 | BestEffortValueRevision | fieldAssessmentId | BestEffortValueRevision.fieldAssessmentId | Поле BestEffortValueRevision «fieldAssessmentId» | string | required | 1 | Contract 4 | Contract-4 identity and revision semantics | BestEffortFieldAssessmentRecord | no | reject |
| c10.field.462 | BestEffortValueRevision | valueElementIdentity | BestEffortValueRevision.valueElementIdentity | Поле BestEffortValueRevision «valueElementIdentity» | string | required | 1 | Contract 4 | Contract-4 identity and revision semantics | registered categorical/tag/extent element | no | reject |
| c10.field.463 | BestEffortValueRevision | valueRevisionId | BestEffortValueRevision.valueRevisionId | Поле BestEffortValueRevision «valueRevisionId» | string | required | 1 | Contract 4 | Contract-4 identity and revision semantics | immutable revision | no | reject |
| c10.field.464 | BestEffortValueRevision | valuePayload | BestEffortValueRevision.valuePayload | Поле BestEffortValueRevision «valuePayload» | JSON value or governed reference | required | 1 | Contract 4 | Contract-4 identity and revision semantics | Contract-4 field domain | no | reject |
| c10.field.465 | BestEffortValueRevision | provenanceAttachmentId | BestEffortValueRevision.provenanceAttachmentId | Поле BestEffortValueRevision «provenanceAttachmentId» | string | required | 1 | Contract 4 | Contract-4 identity and revision semantics | ProvenanceAttachmentRecord | no | reject |
| c10.field.466 | BestEffortValueRevision | predecessorValueId | BestEffortValueRevision.predecessorValueId | Поле BestEffortValueRevision «predecessorValueId» | string | conditional | 0..1 | Contract 4 | Contract-4 identity and revision semantics | prior value revision | no | reject |
| c10.field.467 | BestEffortValueRevision | revisionState | BestEffortValueRevision.revisionState | Поле BestEffortValueRevision «revisionState» | enum | required | 1 | Contract 4 | Contract-4 identity and revision semantics | active \| superseded \| invalid | no | reject |
| c10.field.468 | BestEffortValueRevision | integrityReference | BestEffortValueRevision.integrityReference | Поле BestEffortValueRevision «integrityReference» | string | required | 1 | Contract 4 | Contract-4 identity and revision semantics | value payload | no | reject |
| c10.field.469 | BestEffortValueRevision | historyReference | BestEffortValueRevision.historyReference | Поле BestEffortValueRevision «historyReference» | string | required | 1 | Contract 4 | Contract-4 identity and revision semantics | immutable history | no | reject |
| c10.field.500 | ConfidenceAssertionRecord | recordTypeIdentity | ConfidenceAssertionRecord.recordTypeIdentity | Поле ConfidenceAssertionRecord «recordTypeIdentity» | string | required | 1 | Contract 5 | imported Contract-5 domain | c5.recordtype.001 | no | reject |
| c10.field.501 | ConfidenceAssertionRecord | confidenceAssertionId | ConfidenceAssertionRecord.confidenceAssertionId | Поле ConfidenceAssertionRecord «confidenceAssertionId» | string | required | 1 | Contract 5 | imported Contract-5 domain | — | no | reject |
| c10.field.502 | ConfidenceAssertionRecord | subjectId | ConfidenceAssertionRecord.subjectId | Поле ConfidenceAssertionRecord «subjectId» | string | required | 1 | Contract 5 | imported Contract-5 domain | node/relation/value revision | no | reject |
| c10.field.503 | ConfidenceAssertionRecord | subjectKindIdentity | ConfidenceAssertionRecord.subjectKindIdentity | Поле ConfidenceAssertionRecord «subjectKindIdentity» | string | required | 1 | Contract 5 | imported Contract-5 domain | Contract-4 target-kind registry | no | reject |
| c10.field.504 | ConfidenceAssertionRecord | stateIdentity | ConfidenceAssertionRecord.stateIdentity | Поле ConfidenceAssertionRecord «stateIdentity» | enum | required | 1 | Contract 5 | imported Contract-5 domain | c5.state.* | no | reject |
| c10.field.505 | ConfidenceAssertionRecord | sourceIdentity | ConfidenceAssertionRecord.sourceIdentity | Поле ConfidenceAssertionRecord «sourceIdentity» | enum | required | 1 | Contract 5 | imported Contract-5 domain | c5.source.* | no | reject |
| c10.field.506 | ConfidenceAssertionRecord | transformationIdentity | ConfidenceAssertionRecord.transformationIdentity | Поле ConfidenceAssertionRecord «transformationIdentity» | enum | required | 1 | Contract 5 | imported Contract-5 domain | c5.transformation.* | no | reject |
| c10.field.507 | ConfidenceAssertionRecord | signalTypeIdentities | ConfidenceAssertionRecord.signalTypeIdentities | Поле ConfidenceAssertionRecord «signalTypeIdentities» | array<string> | required | 1..N | Contract 5 | imported Contract-5 domain | c5.signaltype.* | no | reject |
| c10.field.508 | ConfidenceAssertionRecord | sourceSignalIds | ConfidenceAssertionRecord.sourceSignalIds | Поле ConfidenceAssertionRecord «sourceSignalIds» | array<string> | conditional | 1..N for non-missing confidence; 0 for Contract-5 missing-source state | Contract 5 | imported Contract-5 domain | ConfidenceSourceSignalRecord | no | reject |
| c10.field.509 | ConfidenceAssertionRecord | generationMethodId | ConfidenceAssertionRecord.generationMethodId | Поле ConfidenceAssertionRecord «generationMethodId» | string | conditional | exactly 1 for every non-missing assertion; 0 only when sourceIdentity=c5.source.003 | Contract 5 | imported Contract-5 domain | generation method registry | no | reject |
| c10.field.510 | ConfidenceAssertionRecord | normalizationProfileId | ConfidenceAssertionRecord.normalizationProfileId | Поле ConfidenceAssertionRecord «normalizationProfileId» | string | conditional | exactly 1 iff transformationIdentity=c5.transformation.002; otherwise 0 | Contract 5 | imported Contract-5 domain | normalization profile registry | no | reject |
| c10.field.511 | ConfidenceAssertionRecord | mappingRuleId | ConfidenceAssertionRecord.mappingRuleId | Поле ConfidenceAssertionRecord «mappingRuleId» | string | conditional | exactly 1 iff a normalization profile maps an input signal to stateIdentity; otherwise 0 | Contract 5 | imported Contract-5 domain | mapping rule registry | no | reject |
| c10.field.512 | ConfidenceAssertionRecord | producerIdentityAndVersions | ConfidenceAssertionRecord.producerIdentityAndVersions | Поле ConfidenceAssertionRecord «producerIdentityAndVersions» | array<string> | conditional | required when source/transformation semantics require a producer, provider, rule, method or configuration identity | Contract 5 | imported Contract-5 domain | producer/config registry | no | reject |
| c10.field.513 | ConfidenceAssertionRecord | operationId | ConfidenceAssertionRecord.operationId | Поле ConfidenceAssertionRecord «operationId» | string | required | 1 | Contract 5 | imported Contract-5 domain | operation | no | reject |
| c10.field.514 | ConfidenceAssertionRecord | roomCaseId | ConfidenceAssertionRecord.roomCaseId | Поле ConfidenceAssertionRecord «roomCaseId» | string | required | 1 | Contract 5 | imported Contract-5 domain | RoomCase | no | reject |
| c10.field.515 | ConfidenceAssertionRecord | producingStageIdentity | ConfidenceAssertionRecord.producingStageIdentity | Поле ConfidenceAssertionRecord «producingStageIdentity» | string | required | 1 | Contract 5 | imported Contract-5 domain | Contract-4 stage registry | no | reject |
| c10.field.516 | ConfidenceAssertionRecord | contractSemanticVersion | ConfidenceAssertionRecord.contractSemanticVersion | Поле ConfidenceAssertionRecord «contractSemanticVersion» | string | required | 1 | Contract 5 | imported Contract-5 domain | Contract-5 semantic version | no | reject |
| c10.field.517 | ConfidenceAssertionRecord | assertionRevisionId | ConfidenceAssertionRecord.assertionRevisionId | Поле ConfidenceAssertionRecord «assertionRevisionId» | string | required | 1 | Contract 5 | imported Contract-5 domain | — | no | reject |
| c10.field.518 | ConfidenceAssertionRecord | predecessorAssertionId | ConfidenceAssertionRecord.predecessorAssertionId | Поле ConfidenceAssertionRecord «predecessorAssertionId» | string | conditional | 0..1 | Contract 5 | imported Contract-5 domain | prior confidence assertion | no | reject |
| c10.field.519 | ConfidenceAssertionRecord | traceReference | ConfidenceAssertionRecord.traceReference | Поле ConfidenceAssertionRecord «traceReference» | string | required | 1 | Contract 5 | imported Contract-5 domain | diagnostic trace | no | reject |
| c10.field.520 | ConfidenceAssertionRecord | integrityReference | ConfidenceAssertionRecord.integrityReference | Поле ConfidenceAssertionRecord «integrityReference» | string | required | 1 | Contract 5 | imported Contract-5 domain | record payload | no | reject |
| c10.field.521 | ConfidenceAssertionRecord | historyReference | ConfidenceAssertionRecord.historyReference | Поле ConfidenceAssertionRecord «historyReference» | string | required | 1 | Contract 5 | imported Contract-5 domain | immutable history | no | reject |
| c10.field.530 | ConfidenceSourceSignalRecord | sourceSignalId | ConfidenceSourceSignalRecord.sourceSignalId | Поле ConfidenceSourceSignalRecord «sourceSignalId» | string | required | 1 | Contract 5 | imported Contract-5 domain | — | no | reject |
| c10.field.531 | ConfidenceSourceSignalRecord | sourceIdentity | ConfidenceSourceSignalRecord.sourceIdentity | Поле ConfidenceSourceSignalRecord «sourceIdentity» | enum | required | 1 | Contract 5 | imported Contract-5 domain | c5.source.* | no | reject |
| c10.field.532 | ConfidenceSourceSignalRecord | signalTypeIdentity | ConfidenceSourceSignalRecord.signalTypeIdentity | Поле ConfidenceSourceSignalRecord «signalTypeIdentity» | enum | required | 1 | Contract 5 | imported Contract-5 domain | c5.signaltype.* | no | reject |
| c10.field.533 | ConfidenceSourceSignalRecord | generationMethodId | ConfidenceSourceSignalRecord.generationMethodId | Поле ConfidenceSourceSignalRecord «generationMethodId» | string | required | 1 | Contract 5 | imported Contract-5 domain | generation method registry | no | reject |
| c10.field.534 | ConfidenceSourceSignalRecord | originalRawTypeDomain | ConfidenceSourceSignalRecord.originalRawTypeDomain | Поле ConfidenceSourceSignalRecord «originalRawTypeDomain» | string | required | 1 | Contract 5 | imported Contract-5 domain | raw type/domain | no | reject |
| c10.field.535 | ConfidenceSourceSignalRecord | rawSignalOrUnavailabilityReason | ConfidenceSourceSignalRecord.rawSignalOrUnavailabilityReason | Поле ConfidenceSourceSignalRecord «rawSignalOrUnavailabilityReason» | JSON value or string | required | 1 | Contract 5 | imported Contract-5 domain | raw signal or governed reason | no | reject |
| c10.field.536 | ConfidenceSourceSignalRecord | producerIdentityAndVersions | ConfidenceSourceSignalRecord.producerIdentityAndVersions | Поле ConfidenceSourceSignalRecord «producerIdentityAndVersions» | array<string> | required | 1..N | Contract 5 | imported Contract-5 domain | producer/provider/model/rule/config | no | reject |
| c10.field.537 | ConfidenceSourceSignalRecord | operationId | ConfidenceSourceSignalRecord.operationId | Поле ConfidenceSourceSignalRecord «operationId» | string | required | 1 | Contract 5 | imported Contract-5 domain | operation | no | reject |
| c10.field.538 | ConfidenceSourceSignalRecord | roomCaseId | ConfidenceSourceSignalRecord.roomCaseId | Поле ConfidenceSourceSignalRecord «roomCaseId» | string | required | 1 | Contract 5 | imported Contract-5 domain | RoomCase | no | reject |
| c10.field.539 | ConfidenceSourceSignalRecord | contributingImageAssetIds | ConfidenceSourceSignalRecord.contributingImageAssetIds | Поле ConfidenceSourceSignalRecord «contributingImageAssetIds» | array<string> | required | 1..6 | Contract 5 | imported Contract-5 domain | ImageAsset IDs | no | reject |
| c10.field.540 | ConfidenceSourceSignalRecord | producingStageIdentity | ConfidenceSourceSignalRecord.producingStageIdentity | Поле ConfidenceSourceSignalRecord «producingStageIdentity» | string | required | 1 | Contract 5 | imported Contract-5 domain | Contract-4 stage registry | no | reject |
| c10.field.541 | ConfidenceSourceSignalRecord | integrityReference | ConfidenceSourceSignalRecord.integrityReference | Поле ConfidenceSourceSignalRecord «integrityReference» | string | required | 1 | Contract 5 | imported Contract-5 domain | record payload | no | reject |
| c10.field.542 | ConfidenceSourceSignalRecord | revisionId | ConfidenceSourceSignalRecord.revisionId | Поле ConfidenceSourceSignalRecord «revisionId» | string | required | 1 | Contract 5 | imported Contract-5 domain | immutable revision | no | reject |
| c10.field.600 | Contract6DeterminabilityPackage | packageId | Contract6DeterminabilityPackage.packageId | Поле Contract6DeterminabilityPackage «packageId» | string | required | 1 | Contract 6 | opaque governed ID | — | no | reject |
| c10.field.601 | Contract6DeterminabilityPackage | operationId | Contract6DeterminabilityPackage.operationId | Поле Contract6DeterminabilityPackage «operationId» | string | required | 1 | Contract 6 / TDH | same operation | operation | no | reject |
| c10.field.602 | Contract6DeterminabilityPackage | roomCaseId | Contract6DeterminabilityPackage.roomCaseId | Поле Contract6DeterminabilityPackage «roomCaseId» | string | required | 1 | Contract 6 / TDH | same RoomCase | RoomCase | no | reject |
| c10.field.603 | Contract6DeterminabilityPackage | annotationUnits | Contract6DeterminabilityPackage.annotationUnits | Поле Contract6DeterminabilityPackage «annotationUnits» | array<AnnotationUnitRecord> | required | 0..N | Contract 6 | — | — | no | reject |
| c10.field.604 | Contract6DeterminabilityPackage | pairingRecords | Contract6DeterminabilityPackage.pairingRecords | Поле Contract6DeterminabilityPackage «pairingRecords» | array<PairingRecord> | required | 0..N | Contract 6 | — | — | no | reject |
| c10.field.605 | Contract6DeterminabilityPackage | basisLinkRecords | Contract6DeterminabilityPackage.basisLinkRecords | Поле Contract6DeterminabilityPackage «basisLinkRecords» | array<BasisLinkRecord> | required | 0..N | Contract 6 | — | — | no | reject |
| c10.field.606 | Contract6DeterminabilityPackage | outcomeDecisionRecords | Contract6DeterminabilityPackage.outcomeDecisionRecords | Поле Contract6DeterminabilityPackage «outcomeDecisionRecords» | array<OutcomeDecisionRecord> | required | 0..N | Contract 6 | — | — | no | reject |
| c10.field.607 | Contract6DeterminabilityPackage | sealingRecords | Contract6DeterminabilityPackage.sealingRecords | Поле Contract6DeterminabilityPackage «sealingRecords» | array<Contract6SealingRecord> | required | 0..N | Contract 6 | — | — | no | reject |
| c10.field.608 | Contract6DeterminabilityPackage | adjudicationRecords | Contract6DeterminabilityPackage.adjudicationRecords | Поле Contract6DeterminabilityPackage «adjudicationRecords» | array<AdjudicationRecord> | required | 0..N | Contract 6 | — | — | no | reject |
| c10.field.609 | Contract6DeterminabilityPackage | integrityReference | Contract6DeterminabilityPackage.integrityReference | Поле Contract6DeterminabilityPackage «integrityReference» | string | required | 1 | Contract 6 | sha256 reference | package payload | no | reject |
| c10.field.610 | AnnotationUnitRecord | annotationUnitId | AnnotationUnitRecord.annotationUnitId | Поле AnnotationUnitRecord «annotationUnitId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.611 | AnnotationUnitRecord | recordTypeIdentity | AnnotationUnitRecord.recordTypeIdentity | Поле AnnotationUnitRecord «recordTypeIdentity» | string | required | 1 | Contract 6 | imported Contract-6 domain | c6.recordtype.001 | no | reject |
| c10.field.612 | AnnotationUnitRecord | operationId | AnnotationUnitRecord.operationId | Поле AnnotationUnitRecord «operationId» | string | required | 1 | Contract 6 | imported Contract-6 domain | operation | no | reject |
| c10.field.613 | AnnotationUnitRecord | roomCaseId | AnnotationUnitRecord.roomCaseId | Поле AnnotationUnitRecord «roomCaseId» | string | required | 1 | Contract 6 | imported Contract-6 domain | RoomCase | no | reject |
| c10.field.614 | AnnotationUnitRecord | subjectId | AnnotationUnitRecord.subjectId | Поле AnnotationUnitRecord «subjectId» | string | required | 1 | Contract 6 | imported Contract-6 domain | imported subject revision | no | reject |
| c10.field.615 | AnnotationUnitRecord | subjectKindIdentity | AnnotationUnitRecord.subjectKindIdentity | Поле AnnotationUnitRecord «subjectKindIdentity» | string | required | 1 | Contract 6 | imported Contract-6 domain | imported subject-kind | no | reject |
| c10.field.616 | AnnotationUnitRecord | unitTypeIdentity | AnnotationUnitRecord.unitTypeIdentity | Поле AnnotationUnitRecord «unitTypeIdentity» | enum | required | 1 | Contract 6 | imported Contract-6 domain | c6.unittype.* | no | reject |
| c10.field.617 | AnnotationUnitRecord | unitGranularityIdentity | AnnotationUnitRecord.unitGranularityIdentity | Поле AnnotationUnitRecord «unitGranularityIdentity» | enum | required | 1 | Contract 6 | imported Contract-6 domain | c6.unitgranularity.* | no | reject |
| c10.field.618 | AnnotationUnitRecord | viewScopeIdentity | AnnotationUnitRecord.viewScopeIdentity | Поле AnnotationUnitRecord «viewScopeIdentity» | enum | required | 1 | Contract 6 | imported Contract-6 domain | c6.viewscope.* | no | reject |
| c10.field.619 | AnnotationUnitRecord | importedSemanticIds | AnnotationUnitRecord.importedSemanticIds | Поле AnnotationUnitRecord «importedSemanticIds» | array<string> | conditional | 1..N exactly when unitTypeIdentity requires imported subtype candidates, confidence assertions, provenance attachments, field assessments or value identities; otherwise 0 | Contract 6 | imported Contract-6 domain | imported semantic records | no | reject |
| c10.field.620 | AnnotationUnitRecord | memberId | AnnotationUnitRecord.memberId | Поле AnnotationUnitRecord «memberId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | member-level subject | no | reject |
| c10.field.621 | AnnotationUnitRecord | revisionId | AnnotationUnitRecord.revisionId | Поле AnnotationUnitRecord «revisionId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.622 | AnnotationUnitRecord | predecessorAnnotationUnitId | AnnotationUnitRecord.predecessorAnnotationUnitId | Поле AnnotationUnitRecord «predecessorAnnotationUnitId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | prior unit revision | no | reject |
| c10.field.623 | AnnotationUnitRecord | basisLinkRecordId | AnnotationUnitRecord.basisLinkRecordId | Поле AnnotationUnitRecord «basisLinkRecordId» | string | required | 1 | Contract 6 | imported Contract-6 domain | BasisLinkRecord or Contract-4 basis record | no | reject |
| c10.field.624 | AnnotationUnitRecord | pairingRecordId | AnnotationUnitRecord.pairingRecordId | Поле AnnotationUnitRecord «pairingRecordId» | string | required | 1 | Contract 6 | imported Contract-6 domain | PairingRecord | no | reject |
| c10.field.625 | AnnotationUnitRecord | outcomeDecisionRecordId | AnnotationUnitRecord.outcomeDecisionRecordId | Поле AnnotationUnitRecord «outcomeDecisionRecordId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | OutcomeDecisionRecord | no | reject |
| c10.field.626 | AnnotationUnitRecord | sealingRecordId | AnnotationUnitRecord.sealingRecordId | Поле AnnotationUnitRecord «sealingRecordId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | Contract6SealingRecord | no | reject |
| c10.field.627 | AnnotationUnitRecord | adjudicationRecordId | AnnotationUnitRecord.adjudicationRecordId | Поле AnnotationUnitRecord «adjudicationRecordId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | AdjudicationRecord | no | reject |
| c10.field.628 | AnnotationUnitRecord | traceReference | AnnotationUnitRecord.traceReference | Поле AnnotationUnitRecord «traceReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | diagnostic trace | no | reject |
| c10.field.629 | AnnotationUnitRecord | integrityReference | AnnotationUnitRecord.integrityReference | Поле AnnotationUnitRecord «integrityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | record payload | no | reject |
| c10.field.630 | AnnotationUnitRecord | historyReference | AnnotationUnitRecord.historyReference | Поле AnnotationUnitRecord «historyReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | immutable history | no | reject |
| c10.field.640 | PairingRecord | pairingRecordId | PairingRecord.pairingRecordId | Поле PairingRecord «pairingRecordId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.641 | PairingRecord | annotationUnitId | PairingRecord.annotationUnitId | Поле PairingRecord «annotationUnitId» | string | required | 1 | Contract 6 | imported Contract-6 domain | AnnotationUnitRecord | no | reject |
| c10.field.642 | PairingRecord | pairingRuleIdentity | PairingRecord.pairingRuleIdentity | Поле PairingRecord «pairingRuleIdentity» | enum | required | 1 | Contract 6 | imported Contract-6 domain | c6.pairingrule.* | no | reject |
| c10.field.643 | PairingRecord | pairingStateIdentity | PairingRecord.pairingStateIdentity | Поле PairingRecord «pairingStateIdentity» | enum | required | 1 | Contract 6 | imported Contract-6 domain | c6.pairingstate.* | no | reject |
| c10.field.644 | PairingRecord | participantIds | PairingRecord.participantIds | Поле PairingRecord «participantIds» | array<string> | required | 1..N | Contract 6 | imported Contract-6 domain | imported participants | no | reject |
| c10.field.645 | PairingRecord | identityEqualityResults | PairingRecord.identityEqualityResults | Поле PairingRecord «identityEqualityResults» | array<boolean> | required | 1..N | Contract 6 | imported Contract-6 domain | pairing requirements | no | reject |
| c10.field.646 | PairingRecord | duplicateNormalizationReferences | PairingRecord.duplicateNormalizationReferences | Поле PairingRecord «duplicateNormalizationReferences» | array<string> | required | 0..N | Contract 6 | imported Contract-6 domain | normalization records | no | reject |
| c10.field.647 | PairingRecord | conflictReferences | PairingRecord.conflictReferences | Поле PairingRecord «conflictReferences» | array<string> | required | 0..N | Contract 6 | imported Contract-6 domain | conflict records | no | reject |
| c10.field.648 | PairingRecord | revisionId | PairingRecord.revisionId | Поле PairingRecord «revisionId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.649 | PairingRecord | predecessorPairingRecordId | PairingRecord.predecessorPairingRecordId | Поле PairingRecord «predecessorPairingRecordId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | prior pairing revision | no | reject |
| c10.field.650 | PairingRecord | traceReference | PairingRecord.traceReference | Поле PairingRecord «traceReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | diagnostic trace | no | reject |
| c10.field.651 | PairingRecord | integrityReference | PairingRecord.integrityReference | Поле PairingRecord «integrityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | record payload | no | reject |
| c10.field.652 | PairingRecord | historyReference | PairingRecord.historyReference | Поле PairingRecord «historyReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | immutable history | no | reject |
| c10.field.655 | Contract6DeterminabilityPackage | schemaVersion | Contract6DeterminabilityPackage.schemaVersion | Поле Contract6DeterminabilityPackage «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.contract6-determinability-package.v1 | schema registry | no | reject |
| c10.field.660 | BasisLinkRecord | basisLinkRecordId | BasisLinkRecord.basisLinkRecordId | Поле BasisLinkRecord «basisLinkRecordId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.661 | BasisLinkRecord | annotationUnitId | BasisLinkRecord.annotationUnitId | Поле BasisLinkRecord «annotationUnitId» | string | required | 1 | Contract 6 | imported Contract-6 domain | AnnotationUnitRecord | no | reject |
| c10.field.662 | BasisLinkRecord | basisIdentities | BasisLinkRecord.basisIdentities | Поле BasisLinkRecord «basisIdentities» | array<string> | required | 1..N | Contract 6 | imported Contract-6 domain | c4.determinabilitybasis.* | no | reject |
| c10.field.663 | BasisLinkRecord | evidenceReferences | BasisLinkRecord.evidenceReferences | Поле BasisLinkRecord «evidenceReferences» | array<string> | required | 1..N | Contract 6 | imported Contract-6 domain | Contract-4 records | no | reject |
| c10.field.664 | BasisLinkRecord | revisionId | BasisLinkRecord.revisionId | Поле BasisLinkRecord «revisionId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.665 | BasisLinkRecord | traceReference | BasisLinkRecord.traceReference | Поле BasisLinkRecord «traceReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | diagnostic trace | no | reject |
| c10.field.666 | BasisLinkRecord | integrityReference | BasisLinkRecord.integrityReference | Поле BasisLinkRecord «integrityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | record payload | no | reject |
| c10.field.667 | BasisLinkRecord | historyReference | BasisLinkRecord.historyReference | Поле BasisLinkRecord «historyReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | immutable history | no | reject |
| c10.field.670 | OutcomeDecisionRecord | outcomeDecisionRecordId | OutcomeDecisionRecord.outcomeDecisionRecordId | Поле OutcomeDecisionRecord «outcomeDecisionRecordId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.671 | OutcomeDecisionRecord | annotationUnitId | OutcomeDecisionRecord.annotationUnitId | Поле OutcomeDecisionRecord «annotationUnitId» | string | required | 1 | Contract 6 | imported Contract-6 domain | AnnotationUnitRecord | no | reject |
| c10.field.672 | OutcomeDecisionRecord | outcomeIdentity | OutcomeDecisionRecord.outcomeIdentity | Поле OutcomeDecisionRecord «outcomeIdentity» | enum | required | 1 | Contract 6 | imported Contract-6 domain | c6.outcome.* | no | reject |
| c10.field.673 | OutcomeDecisionRecord | derivationOrAdjudicationBasisReference | OutcomeDecisionRecord.derivationOrAdjudicationBasisReference | Поле OutcomeDecisionRecord «derivationOrAdjudicationBasisReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | basis/adjudication | no | reject |
| c10.field.674 | OutcomeDecisionRecord | revisionId | OutcomeDecisionRecord.revisionId | Поле OutcomeDecisionRecord «revisionId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.675 | OutcomeDecisionRecord | traceReference | OutcomeDecisionRecord.traceReference | Поле OutcomeDecisionRecord «traceReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | diagnostic trace | no | reject |
| c10.field.676 | OutcomeDecisionRecord | integrityReference | OutcomeDecisionRecord.integrityReference | Поле OutcomeDecisionRecord «integrityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | record payload | no | reject |
| c10.field.677 | OutcomeDecisionRecord | historyReference | OutcomeDecisionRecord.historyReference | Поле OutcomeDecisionRecord «historyReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | immutable history | no | reject |
| c10.field.680 | Contract6SealingRecord | sealingRecordId | Contract6SealingRecord.sealingRecordId | Поле Contract6SealingRecord «sealingRecordId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.681 | Contract6SealingRecord | annotationUnitId | Contract6SealingRecord.annotationUnitId | Поле Contract6SealingRecord «annotationUnitId» | string | required | 1 | Contract 6 | imported Contract-6 domain | AnnotationUnitRecord | no | reject |
| c10.field.682 | Contract6SealingRecord | lifecycleTransitionIdentity | Contract6SealingRecord.lifecycleTransitionIdentity | Поле Contract6SealingRecord «lifecycleTransitionIdentity» | string | required | 1 | Contract 6 | imported Contract-6 domain | c6 lifecycle registry | no | reject |
| c10.field.683 | Contract6SealingRecord | authorityReference | Contract6SealingRecord.authorityReference | Поле Contract6SealingRecord «authorityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | governance authority | no | reject |
| c10.field.684 | Contract6SealingRecord | sealedRevisionId | Contract6SealingRecord.sealedRevisionId | Поле Contract6SealingRecord «sealedRevisionId» | string | required | 1 | Contract 6 | imported Contract-6 domain | annotation revision | no | reject |
| c10.field.685 | Contract6SealingRecord | predecessorSealingRecordId | Contract6SealingRecord.predecessorSealingRecordId | Поле Contract6SealingRecord «predecessorSealingRecordId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | prior sealing record | no | reject |
| c10.field.686 | Contract6SealingRecord | integrityReference | Contract6SealingRecord.integrityReference | Поле Contract6SealingRecord «integrityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | sealed payload | no | reject |
| c10.field.687 | Contract6SealingRecord | historyReference | Contract6SealingRecord.historyReference | Поле Contract6SealingRecord «historyReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | immutable history | no | reject |
| c10.field.690 | AdjudicationRecord | adjudicationRecordId | AdjudicationRecord.adjudicationRecordId | Поле AdjudicationRecord «adjudicationRecordId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.691 | AdjudicationRecord | annotationUnitId | AdjudicationRecord.annotationUnitId | Поле AdjudicationRecord «annotationUnitId» | string | required | 1 | Contract 6 | imported Contract-6 domain | AnnotationUnitRecord | no | reject |
| c10.field.692 | AdjudicationRecord | triggerIdentity | AdjudicationRecord.triggerIdentity | Поле AdjudicationRecord «triggerIdentity» | string | required | 1 | Contract 6 | imported Contract-6 domain | c6 adjudication trigger | no | reject |
| c10.field.693 | AdjudicationRecord | retainedBasisReferences | AdjudicationRecord.retainedBasisReferences | Поле AdjudicationRecord «retainedBasisReferences» | array<string> | required | 1..N | Contract 6 | imported Contract-6 domain | basis/evidence | no | reject |
| c10.field.694 | AdjudicationRecord | rationaleReference | AdjudicationRecord.rationaleReference | Поле AdjudicationRecord «rationaleReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | reviewable rationale; no hidden chain-of-thought | no | reject |
| c10.field.695 | AdjudicationRecord | authorityReference | AdjudicationRecord.authorityReference | Поле AdjudicationRecord «authorityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | adjudication authority | no | reject |
| c10.field.696 | AdjudicationRecord | dispositionIdentity | AdjudicationRecord.dispositionIdentity | Поле AdjudicationRecord «dispositionIdentity» | string | required | 1 | Contract 6 | imported Contract-6 domain | c6 adjudication disposition | no | reject |
| c10.field.697 | AdjudicationRecord | revisionId | AdjudicationRecord.revisionId | Поле AdjudicationRecord «revisionId» | string | required | 1 | Contract 6 | imported Contract-6 domain | — | no | reject |
| c10.field.698 | AdjudicationRecord | predecessorAdjudicationRecordId | AdjudicationRecord.predecessorAdjudicationRecordId | Поле AdjudicationRecord «predecessorAdjudicationRecordId» | string | conditional | 0..1 | Contract 6 | imported Contract-6 domain | prior adjudication | no | reject |
| c10.field.699 | AdjudicationRecord | integrityReference | AdjudicationRecord.integrityReference | Поле AdjudicationRecord «integrityReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | record payload | no | reject |
| c10.field.700 | AdjudicationRecord | historyReference | AdjudicationRecord.historyReference | Поле AdjudicationRecord «historyReference» | string | required | 1 | Contract 6 | imported Contract-6 domain | immutable history | no | reject |
| c10.field.704 | Contract8EvaluationPackage | packageId | Contract8EvaluationPackage.packageId | Поле Contract8EvaluationPackage «packageId» | string | required | 1 | Contract 8 | opaque governed ID | — | no | reject |
| c10.field.705 | Contract8EvaluationPackage | evaluationConfigurationReference | Contract8EvaluationPackage.evaluationConfigurationReference | Поле Contract8EvaluationPackage «evaluationConfigurationReference» | string | required | 1 | Contract 8 | exact evaluation bundle | evaluation config | no | reject |
| c10.field.706 | Contract8EvaluationPackage | rawAssertions | Contract8EvaluationPackage.rawAssertions | Поле Contract8EvaluationPackage «rawAssertions» | array<RawMechanismAssertionArtifact> | required | 0..N | Contract 8 | one per eligible emitted assertion | — | no | reject |
| c10.field.707 | Contract8EvaluationPackage | projectionFacts | Contract8EvaluationPackage.projectionFacts | Поле Contract8EvaluationPackage «projectionFacts» | array<ETAPAssertionProjectionFact> | required | 0..N | Contract 8 | one final or blocked projection per raw assertion | — | no | reject |
| c10.field.708 | Contract8EvaluationPackage | records | Contract8EvaluationPackage.records | Поле Contract8EvaluationPackage «records» | array<C8EvaluationRecord> | required | 0..N | Contract 8 | seven role-specific c8.recordtype.* records | — | no | reject |
| c10.field.709 | Contract8EvaluationPackage | schemaVersion | Contract8EvaluationPackage.schemaVersion | Поле Contract8EvaluationPackage «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.contract8-evaluation-package.v1 | schema registry | no | reject |
| c10.field.710 | RawMechanismAssertionArtifact | rawAssertionId | RawMechanismAssertionArtifact.rawAssertionId | Поле RawMechanismAssertionArtifact «rawAssertionId» | string | required | 1 | Contract 8 | imported Contract-8 domain | — | no | reject |
| c10.field.711 | RawMechanismAssertionArtifact | untouchedPayloadReference | RawMechanismAssertionArtifact.untouchedPayloadReference | Поле RawMechanismAssertionArtifact «untouchedPayloadReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | immutable mechanism output | no | reject |
| c10.field.712 | RawMechanismAssertionArtifact | semanticCaseId | RawMechanismAssertionArtifact.semanticCaseId | Поле RawMechanismAssertionArtifact «semanticCaseId» | string | required | 1 | Contract 8 | imported Contract-8 domain | Contract-7 SemanticCase | no | reject |
| c10.field.713 | RawMechanismAssertionArtifact | roomCaseId | RawMechanismAssertionArtifact.roomCaseId | Поле RawMechanismAssertionArtifact «roomCaseId» | string | required | 1 | Contract 8 | imported Contract-8 domain | RoomCase | no | reject |
| c10.field.714 | RawMechanismAssertionArtifact | contributingImageAssetIds | RawMechanismAssertionArtifact.contributingImageAssetIds | Поле RawMechanismAssertionArtifact «contributingImageAssetIds» | array<string> | required | 1..6 | Contract 8 | imported Contract-8 domain | ImageAsset IDs | no | reject |
| c10.field.715 | RawMechanismAssertionArtifact | rawEmittedCode | RawMechanismAssertionArtifact.rawEmittedCode | Поле RawMechanismAssertionArtifact «rawEmittedCode» | string | conditional | 0..1 | Contract 8 | imported Contract-8 domain | explicit mechanism field only | no | reject |
| c10.field.716 | RawMechanismAssertionArtifact | rawSubject | RawMechanismAssertionArtifact.rawSubject | Поле RawMechanismAssertionArtifact «rawSubject» | string | conditional | 0..1 | Contract 8 | imported Contract-8 domain | explicit mechanism field only | no | reject |
| c10.field.717 | RawMechanismAssertionArtifact | rawTarget | RawMechanismAssertionArtifact.rawTarget | Поле RawMechanismAssertionArtifact «rawTarget» | string | conditional | 0..1 | Contract 8 | imported Contract-8 domain | explicit mechanism field only | no | reject |
| c10.field.718 | RawMechanismAssertionArtifact | rawLocus | RawMechanismAssertionArtifact.rawLocus | Поле RawMechanismAssertionArtifact «rawLocus» | string | conditional | 0..1 | Contract 8 | imported Contract-8 domain | explicit mechanism field only | no | reject |
| c10.field.719 | RawMechanismAssertionArtifact | providerConfigurationReference | RawMechanismAssertionArtifact.providerConfigurationReference | Поле RawMechanismAssertionArtifact «providerConfigurationReference» | string | conditional | exactly 1 iff output was generated by a concrete provider/mechanism configuration; otherwise 0 and prohibited | Contract 8 | imported Contract-8 domain | provider config | no | reject |
| c10.field.720 | RawMechanismAssertionArtifact | evaluationConfigurationReference | RawMechanismAssertionArtifact.evaluationConfigurationReference | Поле RawMechanismAssertionArtifact «evaluationConfigurationReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | evaluation config | no | reject |
| c10.field.721 | RawMechanismAssertionArtifact | normalizationStatus | RawMechanismAssertionArtifact.normalizationStatus | Поле RawMechanismAssertionArtifact «normalizationStatus» | enum | required | 1 | Contract 8 | imported Contract-8 domain | c8.assertionnormalizationstatus.* | no | reject |
| c10.field.722 | RawMechanismAssertionArtifact | producedNormalizedClaimLinks | RawMechanismAssertionArtifact.producedNormalizedClaimLinks | Поле RawMechanismAssertionArtifact «producedNormalizedClaimLinks» | array<string> | conditional | normalizationStatus .001 or .002: 1..N; status .003: 0 and prohibited | Contract 8 | imported Contract-8 domain | Contract-8 claim records | no | reject |
| c10.field.723 | RawMechanismAssertionArtifact | rawMalformedComparisonLink | RawMechanismAssertionArtifact.rawMalformedComparisonLink | Поле RawMechanismAssertionArtifact «rawMalformedComparisonLink» | string | conditional | normalizationStatus .001: 0 and prohibited; status .002 or .003: exactly 1 carrying c8.comparisonresult.016 | Contract 8 | imported Contract-8 domain | c8.comparisonresult.016 comparison | no | reject |
| c10.field.724 | RawMechanismAssertionArtifact | assertionProjectionFactId | RawMechanismAssertionArtifact.assertionProjectionFactId | Поле RawMechanismAssertionArtifact «assertionProjectionFactId» | string | conditional | 0..1 while pre-final blocked; exactly 1 after valid finalization | Contract 8 | imported Contract-8 domain | ETAPAssertionProjectionFact | no | reject |
| c10.field.725 | RawMechanismAssertionArtifact | historyReference | RawMechanismAssertionArtifact.historyReference | Поле RawMechanismAssertionArtifact «historyReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | immutable capture/append-only links | no | reject |
| c10.field.730 | ETAPAssertionProjectionFact | projectionFactId | ETAPAssertionProjectionFact.projectionFactId | Поле ETAPAssertionProjectionFact «projectionFactId» | string | required | 1 | Contract 8 | imported Contract-8 domain | — | no | reject |
| c10.field.731 | ETAPAssertionProjectionFact | rawAssertionId | ETAPAssertionProjectionFact.rawAssertionId | Поле ETAPAssertionProjectionFact «rawAssertionId» | string | required | 1 | Contract 8 | imported Contract-8 domain | RawMechanismAssertionArtifact | no | reject |
| c10.field.732 | ETAPAssertionProjectionFact | normalizedProducedClaimLinks | ETAPAssertionProjectionFact.normalizedProducedClaimLinks | Поле ETAPAssertionProjectionFact «normalizedProducedClaimLinks» | array<string> | required | 0..N | Contract 8 | imported Contract-8 domain | Contract-8 claim records | no | reject |
| c10.field.733 | ETAPAssertionProjectionFact | atomicComparisonLinks | ETAPAssertionProjectionFact.atomicComparisonLinks | Поле ETAPAssertionProjectionFact «atomicComparisonLinks» | array<string> | required | 0..N | Contract 8 | imported Contract-8 domain | Contract-8 comparisons | no | reject |
| c10.field.734 | ETAPAssertionProjectionFact | rawMalformedComparisonLink | ETAPAssertionProjectionFact.rawMalformedComparisonLink | Поле ETAPAssertionProjectionFact «rawMalformedComparisonLink» | string | conditional | 0..1 | Contract 8 | imported Contract-8 domain | raw malformed comparison | no | reject |
| c10.field.735 | ETAPAssertionProjectionFact | projectionResult | ETAPAssertionProjectionFact.projectionResult | Поле ETAPAssertionProjectionFact «projectionResult» | enum | required | 1 | Contract 8 | imported Contract-8 domain | c8.assertionprojectionresult.* | no | reject |
| c10.field.736 | ETAPAssertionProjectionFact | versionConfigurationBundle | ETAPAssertionProjectionFact.versionConfigurationBundle | Поле ETAPAssertionProjectionFact «versionConfigurationBundle» | string | required | 1 | Contract 8 | imported Contract-8 domain | evaluation bundle | no | reject |
| c10.field.737 | ETAPAssertionProjectionFact | etapConsumptionState | ETAPAssertionProjectionFact.etapConsumptionState | Поле ETAPAssertionProjectionFact «etapConsumptionState» | enum | required | 1 | Contract 8 | imported Contract-8 domain | consume-one \| blocked-zero | no | reject |
| c10.field.740 | C8EvaluationRecord | recordId | C8EvaluationRecord.recordId | Поле C8EvaluationRecord «recordId» | string | required | 1 | Contract 8 | imported Contract-8 domain | — | no | reject |
| c10.field.741 | C8EvaluationRecord | recordTypeIdentity | C8EvaluationRecord.recordTypeIdentity | Поле C8EvaluationRecord «recordTypeIdentity» | enum | required | 1 | Contract 8 | imported Contract-8 domain | c8.recordtype.001 \| c8.recordtype.002 \| c8.recordtype.003 \| c8.recordtype.004 \| c8.recordtype.005 \| c8.recordtype.006 \| c8.recordtype.007 | no | reject |
| c10.field.742 | C8EvaluationRecord | semanticCaseId | C8EvaluationRecord.semanticCaseId | Поле C8EvaluationRecord «semanticCaseId» | string | required | 1 | Contract 8 | imported Contract-8 domain | Contract-7 SemanticCase | no | reject |
| c10.field.743 | C8EvaluationRecord | roomCaseId | C8EvaluationRecord.roomCaseId | Поле C8EvaluationRecord «roomCaseId» | string | required | 1 | Contract 8 | imported Contract-8 domain | RoomCase | no | reject |
| c10.field.744 | C8EvaluationRecord | claimCodeIdentity | C8EvaluationRecord.claimCodeIdentity | Поле C8EvaluationRecord «claimCodeIdentity» | string | conditional | record types .001-.003: exactly 1; .004: 0..1 only when safely assignable; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8.claimcode.* | no | reject |
| c10.field.745 | C8EvaluationRecord | dispositionIdentity | C8EvaluationRecord.dispositionIdentity | Поле C8EvaluationRecord «dispositionIdentity» | string | conditional | record types .001-.003: exactly 1; .004: 0..1 only when a governed claim code exists; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8 disposition registry | no | reject |
| c10.field.746 | C8EvaluationRecord | requirementLevelIdentity | C8EvaluationRecord.requirementLevelIdentity | Поле C8EvaluationRecord «requirementLevelIdentity» | string | conditional | record type .001: exactly c8.requirementlevel.001; .002: exactly c8.requirementlevel.002; .003-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8.requirementlevel.001/.002 | no | reject |
| c10.field.747 | C8EvaluationRecord | assertionScopeIdentity | C8EvaluationRecord.assertionScopeIdentity | Поле C8EvaluationRecord «assertionScopeIdentity» | string | conditional | record types .001-.003: exactly 1; .004: 0..1 only when a governed claim code exists; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8 assertion-scope registry | no | reject |
| c10.field.748 | C8EvaluationRecord | subject | C8EvaluationRecord.subject | Поле C8EvaluationRecord «subject» | string | conditional | record types .001-.004: exactly 1 iff the selected claim code requires subject; otherwise 0; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | governed subject | no | reject |
| c10.field.749 | C8EvaluationRecord | target | C8EvaluationRecord.target | Поле C8EvaluationRecord «target» | string | conditional | record types .001-.004: exactly 1 iff the selected claim code requires target/complement; otherwise 0; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | governed target | no | reject |
| c10.field.750 | C8EvaluationRecord | locus | C8EvaluationRecord.locus | Поле C8EvaluationRecord «locus» | string | conditional | record types .001-.004: exactly 1 iff the selected claim code requires locus; diagnostic-only values permitted for case-scope prohibition matching; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | governed locus | no | reject |
| c10.field.751 | C8EvaluationRecord | expectedState | C8EvaluationRecord.expectedState | Поле C8EvaluationRecord «expectedState» | enum | conditional | record types .001-.002: exactly 1; .003-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | expected-presence \| expected-absence | no | reject |
| c10.field.752 | C8EvaluationRecord | rawAssertionId | C8EvaluationRecord.rawAssertionId | Поле C8EvaluationRecord «rawAssertionId» | string | conditional | record type .003: exactly 1; all other record types: 0 and prohibited | Contract 8 | imported Contract-8 domain | RawMechanismAssertionArtifact | no | reject |
| c10.field.753 | C8EvaluationRecord | normalizationTransformationId | C8EvaluationRecord.normalizationTransformationId | Поле C8EvaluationRecord «normalizationTransformationId» | string | conditional | record type .003: exactly 1; all other record types: 0 and prohibited | Contract 8 | imported Contract-8 domain | normalization transformation | no | reject |
| c10.field.754 | C8EvaluationRecord | normalizedAtomicInterpretationId | C8EvaluationRecord.normalizedAtomicInterpretationId | Поле C8EvaluationRecord «normalizedAtomicInterpretationId» | string | conditional | record type .003: exactly 1; all other record types: 0 and prohibited | Contract 8 | imported Contract-8 domain | atomic interpretation | no | reject |
| c10.field.755 | C8EvaluationRecord | expectationOrProhibitionRecordId | C8EvaluationRecord.expectationOrProhibitionRecordId | Поле C8EvaluationRecord «expectationOrProhibitionRecordId» | string | conditional | record type .004: 0..1; required for expectation/prohibition comparison and absent for unmatched-produced or raw-malformed comparison; all other types: prohibited | Contract 8 | imported Contract-8 domain | C8EvaluationRecord | no | reject |
| c10.field.756 | C8EvaluationRecord | matchedProducedRecordId | C8EvaluationRecord.matchedProducedRecordId | Поле C8EvaluationRecord «matchedProducedRecordId» | string | conditional | record type .004: 0..1; all other types: 0 and prohibited | Contract 8 | imported Contract-8 domain | produced claim record | no | reject |
| c10.field.757 | C8EvaluationRecord | rawAssertionDefectLink | C8EvaluationRecord.rawAssertionDefectLink | Поле C8EvaluationRecord «rawAssertionDefectLink» | string | conditional | record type .004: exactly 1 iff primary result is c8.comparisonresult.016; otherwise 0; all other types: prohibited | Contract 8 | imported Contract-8 domain | RawMechanismAssertionArtifact | no | reject |
| c10.field.758 | C8EvaluationRecord | primaryComparisonResultIdentity | C8EvaluationRecord.primaryComparisonResultIdentity | Поле C8EvaluationRecord «primaryComparisonResultIdentity» | string | conditional | record type .004: exactly 1 (pre-final only while adjudication-required, final before sealing); all other types: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8.comparisonresult.* | no | reject |
| c10.field.759 | C8EvaluationRecord | secondaryFailureIdentities | C8EvaluationRecord.secondaryFailureIdentities | Поле C8EvaluationRecord «secondaryFailureIdentities» | array<string> | conditional | record type .004: 0..N; all other types: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8.failure.* | no | reject |
| c10.field.760 | C8EvaluationRecord | evidenceReferences | C8EvaluationRecord.evidenceReferences | Поле C8EvaluationRecord «evidenceReferences» | array<string> | conditional | record types .001-.005: 0..N as type-specific supporting/contradicting evidence; record types .006-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | Contract-4 records | no | reject |
| c10.field.761 | C8EvaluationRecord | contributingImageAssetIds | C8EvaluationRecord.contributingImageAssetIds | Поле C8EvaluationRecord «contributingImageAssetIds» | array<string> | conditional | record types .001-.005: 1..6; record types .006-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | ImageAsset IDs | no | reject |
| c10.field.762 | C8EvaluationRecord | subsetReference | C8EvaluationRecord.subsetReference | Поле C8EvaluationRecord «subsetReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | Contract-7 subset | no | reject |
| c10.field.763 | C8EvaluationRecord | lineageReference | C8EvaluationRecord.lineageReference | Поле C8EvaluationRecord «lineageReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | Contract-7 lineage | no | reject |
| c10.field.764 | C8EvaluationRecord | contractSemanticVersionReference | C8EvaluationRecord.contractSemanticVersionReference | Поле C8EvaluationRecord «contractSemanticVersionReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | c8.versionreferencekind.001 | no | reject |
| c10.field.765 | C8EvaluationRecord | claimVocabularyVersionReference | C8EvaluationRecord.claimVocabularyVersionReference | Поле C8EvaluationRecord «claimVocabularyVersionReference» | string | conditional | record types .001-.004: exactly 1; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8.versionreferencekind.002 | no | reject |
| c10.field.766 | C8EvaluationRecord | ruleRegistryVersionReference | C8EvaluationRecord.ruleRegistryVersionReference | Поле C8EvaluationRecord «ruleRegistryVersionReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | c8.versionreferencekind.003 | no | reject |
| c10.field.767 | C8EvaluationRecord | validationRegistryVersionReference | C8EvaluationRecord.validationRegistryVersionReference | Поле C8EvaluationRecord «validationRegistryVersionReference» | string | required | 1 | Contract 8 | imported Contract-8 domain | c8.versionreferencekind.004 | no | reject |
| c10.field.768 | C8EvaluationRecord | comparisonPolicyVersionReference | C8EvaluationRecord.comparisonPolicyVersionReference | Поле C8EvaluationRecord «comparisonPolicyVersionReference» | string | conditional | record types .004-.005: exactly 1; .001-.003 and .006-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8.versionreferencekind.005 | no | reject |
| c10.field.769 | C8EvaluationRecord | providerConfigurationReference | C8EvaluationRecord.providerConfigurationReference | Поле C8EvaluationRecord «providerConfigurationReference» | string | conditional | record types .003-.004: exactly 1 iff output came from a concrete provider/mechanism configuration; otherwise 0; all other types: prohibited | Contract 8 | imported Contract-8 domain | provider config | no | reject |
| c10.field.770 | C8EvaluationRecord | evaluationConfigurationReference | C8EvaluationRecord.evaluationConfigurationReference | Поле C8EvaluationRecord «evaluationConfigurationReference» | string | conditional | record types .001-.005: exactly 1; .006-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | evaluation config | no | reject |
| c10.field.771 | C8EvaluationRecord | lifecycle | C8EvaluationRecord.lifecycle | Поле C8EvaluationRecord «lifecycle» | C8LifecycleBundle | required | 1 | Contract 8 | imported Contract-8 domain | Contract-8 lifecycle bundle | no | reject |
| c10.field.772 | C8EvaluationRecord | adjudicationRecordId | C8EvaluationRecord.adjudicationRecordId | Поле C8EvaluationRecord «adjudicationRecordId» | string | conditional | record types .001-.004: 0..1 and exactly 1 only when adjudication opens; .005-.007: 0 and prohibited | Contract 8 | imported Contract-8 domain | c8.recordtype.005 | no | reject |
| c10.field.773 | C8EvaluationRecord | replacementRecordId | C8EvaluationRecord.replacementRecordId | Поле C8EvaluationRecord «replacementRecordId» | string | conditional | all record types: 0..1 and exactly 1 in replacement/supersession paths | Contract 8 | imported Contract-8 domain | c8.recordtype.006 | no | reject |
| c10.field.774 | C8LifecycleBundle | lifecycleStateIdentity | C8LifecycleBundle.lifecycleStateIdentity | Поле C8LifecycleBundle «lifecycleStateIdentity» | enum | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | c8.lifecycle.001-.009 | no | reject |
| c10.field.775 | C8LifecycleBundle | recordRevisionId | C8LifecycleBundle.recordRevisionId | Поле C8LifecycleBundle «recordRevisionId» | string | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | immutable revision identity | no | reject |
| c10.field.776 | C8LifecycleBundle | predecessorRecordId | C8LifecycleBundle.predecessorRecordId | Поле C8LifecycleBundle «predecessorRecordId» | string | conditional | 0..1; required for a successor/supersession/replacement revision | Contract 8 | imported Contract-8 lifecycle domain | prior C8 record identity | no | reject |
| c10.field.777 | C8LifecycleBundle | successorRecordId | C8LifecycleBundle.successorRecordId | Поле C8LifecycleBundle «successorRecordId» | string | conditional | 0..1; required when lifecycleStateIdentity=c8.lifecycle.007 | Contract 8 | imported Contract-8 lifecycle domain | sealed successor C8 record identity | no | reject |
| c10.field.778 | C8LifecycleBundle | sealedAt | C8LifecycleBundle.sealedAt | Поле C8LifecycleBundle «sealedAt» | RFC3339 timestamp | conditional | exactly 1 after a seal event; 0 before seal | Contract 8 | imported Contract-8 lifecycle domain | — | no | reject |
| c10.field.779 | C8LifecycleBundle | sealIntegrityReference | C8LifecycleBundle.sealIntegrityReference | Поле C8LifecycleBundle «sealIntegrityReference» | string | conditional | exactly 1 after a seal event; 0 before seal | Contract 8 | imported Contract-8 lifecycle domain | record payload excluding this field | no | reject |
| c10.field.780 | C8LifecycleBundle | historyReference | C8LifecycleBundle.historyReference | Поле C8LifecycleBundle «historyReference» | string | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | immutable lifecycle history | no | reject |
| c10.field.781 | C8LifecycleBundle | exclusionReasonIdentity | C8LifecycleBundle.exclusionReasonIdentity | Поле C8LifecycleBundle «exclusionReasonIdentity» | string | conditional | exactly 1 iff lifecycleStateIdentity=c8.lifecycle.006 | Contract 8 | imported Contract-8 lifecycle domain | governed exclusion reason | no | reject |
| c10.field.782 | C8LifecycleBundle | invalidationReasonIdentity | C8LifecycleBundle.invalidationReasonIdentity | Поле C8LifecycleBundle «invalidationReasonIdentity» | string | conditional | exactly 1 iff lifecycleStateIdentity=c8.lifecycle.008 | Contract 8 | imported Contract-8 lifecycle domain | integrity/security/authority reason | no | reject |
| c10.field.783 | C8LifecycleBundle | replacementReasonIdentity | C8LifecycleBundle.replacementReasonIdentity | Поле C8LifecycleBundle «replacementReasonIdentity» | string | conditional | exactly 1 iff lifecycleStateIdentity=c8.lifecycle.009 or a replacement record is created | Contract 8 | imported Contract-8 lifecycle domain | c8.replacementreason.* | no | reject |
| c10.field.784 | C8LifecycleBundle | transitionEvents | C8LifecycleBundle.transitionEvents | Поле C8LifecycleBundle «transitionEvents» | array<C8LifecycleTransitionEvent> | required | 1..N | Contract 8 | imported Contract-8 lifecycle domain | closed transition history | no | reject |
| c10.field.785 | C8LifecycleTransitionEvent | transitionEventId | C8LifecycleTransitionEvent.transitionEventId | Поле C8LifecycleTransitionEvent «transitionEventId» | string | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | — | no | reject |
| c10.field.786 | C8LifecycleTransitionEvent | fromStateIdentity | C8LifecycleTransitionEvent.fromStateIdentity | Поле C8LifecycleTransitionEvent «fromStateIdentity» | enum | conditional | 0..1; absent only for the initial draft event | Contract 8 | imported Contract-8 lifecycle domain | c8.lifecycle.* | no | reject |
| c10.field.787 | C8LifecycleTransitionEvent | toStateIdentity | C8LifecycleTransitionEvent.toStateIdentity | Поле C8LifecycleTransitionEvent «toStateIdentity» | enum | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | c8.lifecycle.* | no | reject |
| c10.field.788 | C8LifecycleTransitionEvent | transitionDisposition | C8LifecycleTransitionEvent.transitionDisposition | Поле C8LifecycleTransitionEvent «transitionDisposition» | enum | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | ALLOWED \| CONDITIONAL \| NO-OP | no | reject |
| c10.field.789 | C8LifecycleTransitionEvent | conditionEvidenceReferences | C8LifecycleTransitionEvent.conditionEvidenceReferences | Поле C8LifecycleTransitionEvent «conditionEvidenceReferences» | array<string> | conditional | 1..N for CONDITIONAL; 0..N otherwise | Contract 8 | imported Contract-8 lifecycle domain | evidence/adjudication/replacement references | no | reject |
| c10.field.790 | C8LifecycleTransitionEvent | actorRoleReference | C8LifecycleTransitionEvent.actorRoleReference | Поле C8LifecycleTransitionEvent «actorRoleReference» | string | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | governed actor/decider role reference; staffing authority remains Contract-8 Authority Gap | no | reject |
| c10.field.791 | C8LifecycleTransitionEvent | occurredAt | C8LifecycleTransitionEvent.occurredAt | Поле C8LifecycleTransitionEvent «occurredAt» | RFC3339 timestamp | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | — | no | reject |
| c10.field.792 | C8LifecycleTransitionEvent | eventIntegrityReference | C8LifecycleTransitionEvent.eventIntegrityReference | Поле C8LifecycleTransitionEvent «eventIntegrityReference» | string | required | 1 | Contract 8 | imported Contract-8 lifecycle domain | transition event payload | no | reject |
| c10.field.800 | ComparisonOutcome | comparisonId | ComparisonOutcome.comparisonId | Поле ComparisonOutcome «comparisonId» | string | required | 1 | Contract 9 | imported Contract-9 domain | — | no | reject |
| c10.field.801 | ComparisonOutcome | fixtureId | ComparisonOutcome.fixtureId | Поле ComparisonOutcome «fixtureId» | string | required | 1 | Contract 9 | imported Contract-9 domain | governed fixture | no | reject |
| c10.field.802 | ComparisonOutcome | entryIdentity | ComparisonOutcome.entryIdentity | Поле ComparisonOutcome «entryIdentity» | enum | required | 1 | Contract 9 | imported Contract-9 domain | c9.entry.* (18) | no | reject |
| c10.field.803 | ComparisonOutcome | observedResultReference | ComparisonOutcome.observedResultReference | Поле ComparisonOutcome «observedResultReference» | string | required | 1 | Contract 9 | imported Contract-9 domain | sealed PerceptionResult | no | reject |
| c10.field.804 | ComparisonOutcome | comparisonOutcomeIdentity | ComparisonOutcome.comparisonOutcomeIdentity | Поле ComparisonOutcome «comparisonOutcomeIdentity» | enum | required | 1 | Contract 9 | imported Contract-9 domain | c9.comparison.* (15) | no | reject |
| c10.field.805 | ComparisonOutcome | primaryFailureIdentity | ComparisonOutcome.primaryFailureIdentity | Поле ComparisonOutcome «primaryFailureIdentity» | string | conditional | 0..1 | Contract 9 | imported Contract-9 domain | c9.failure.*; absent iff pass | no | reject |
| c10.field.806 | ComparisonOutcome | retryabilityAssessment | ComparisonOutcome.retryabilityAssessment | Поле ComparisonOutcome «retryabilityAssessment» | string | conditional | 0..1 | Contract 9 | imported Contract-9 domain | Contract-9 retryability | no | reject |
| c10.field.807 | ComparisonOutcome | subsetRole | ComparisonOutcome.subsetRole | Поле ComparisonOutcome «subsetRole» | enum | required | 1 | Contract 9 | imported Contract-9 domain | development \| held-out | no | reject |
| c10.field.808 | ComparisonOutcome | sealedAt | ComparisonOutcome.sealedAt | Поле ComparisonOutcome «sealedAt» | RFC3339 timestamp | required | 1 | Contract 9 | imported Contract-9 domain | — | no | reject |
| c10.field.809 | ComparisonOutcome | sealIntegrityReference | ComparisonOutcome.sealIntegrityReference | Поле ComparisonOutcome «sealIntegrityReference» | string | required | 1 | Contract 9 | imported Contract-9 domain | comparison payload | no | reject |
| c10.field.810 | ComparisonOutcome | schemaVersion | ComparisonOutcome.schemaVersion | Поле ComparisonOutcome «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.comparison-outcome.v1 | schema registry | no | reject |
| c10.field.811 | ComparisonOutcome | contractVersionReference | ComparisonOutcome.contractVersionReference | Поле ComparisonOutcome «contractVersionReference» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | exact Contract-9 candidate-lock identity | no | reject |
| c10.field.812 | ComparisonOutcome | governingSourceIdentityReferences | ComparisonOutcome.governingSourceIdentityReferences | Поле ComparisonOutcome «governingSourceIdentityReferences» | array<string> | required | 1..N | Contract 9 | minimum compatibility required by Contract 9 §32 | exact accepted source identities used by the comparison | no | reject |
| c10.field.813 | ComparisonOutcome | suiteIdentity | ComparisonOutcome.suiteIdentity | Поле ComparisonOutcome «suiteIdentity» | enum | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | c9.suite.* | no | reject |
| c10.field.814 | ComparisonOutcome | subtypeToken | ComparisonOutcome.subtypeToken | Поле ComparisonOutcome «subtypeToken» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | exact canonical fixture subtype token fixed by the selected c9.entry.* row | no | reject |
| c10.field.815 | ComparisonOutcome | expectedResultFamily | ComparisonOutcome.expectedResultFamily | Поле ComparisonOutcome «expectedResultFamily» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | exact result family fixed by the selected entry | no | reject |
| c10.field.816 | ComparisonOutcome | expectedStage | ComparisonOutcome.expectedStage | Поле ComparisonOutcome «expectedStage» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | exact stage fixed by the selected entry | no | reject |
| c10.field.817 | ComparisonOutcome | expectedReasonToken | ComparisonOutcome.expectedReasonToken | Поле ComparisonOutcome «expectedReasonToken» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | exact runtime reason/violation token fixed by the selected entry | no | reject |
| c10.field.818 | ComparisonOutcome | expectedRetryabilityIdentity | ComparisonOutcome.expectedRetryabilityIdentity | Поле ComparisonOutcome «expectedRetryabilityIdentity» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | exact c9.retryability.* identity fixed by the selected entry | no | reject |
| c10.field.819 | ComparisonOutcome | prohibitedOutcomeIdentities | ComparisonOutcome.prohibitedOutcomeIdentities | Поле ComparisonOutcome «prohibitedOutcomeIdentities» | array<string> | required | 1..N | Contract 9 | minimum compatibility required by Contract 9 §32 | complete c9.prohibited.* set fixed by the selected entry | no | reject |
| c10.field.820 | ComparisonOutcome | fixtureLineageId | ComparisonOutcome.fixtureLineageId | Поле ComparisonOutcome «fixtureLineageId» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | TDH-governed fixture lineage identity | no | reject |
| c10.field.821 | ComparisonOutcome | observedResultFamily | ComparisonOutcome.observedResultFamily | Поле ComparisonOutcome «observedResultFamily» | string | conditional | exactly 1 iff an observed primary result exists; otherwise 0 | Contract 9 | minimum compatibility required by Contract 9 §32 | observed PerceptionResult family | no | reject |
| c10.field.822 | ComparisonOutcome | observedStage | ComparisonOutcome.observedStage | Поле ComparisonOutcome «observedStage» | string | conditional | exactly 1 iff an observed primary result exists; otherwise 0 | Contract 9 | minimum compatibility required by Contract 9 §32 | observed production/rejection stage | no | reject |
| c10.field.823 | ComparisonOutcome | observedReasonToken | ComparisonOutcome.observedReasonToken | Поле ComparisonOutcome «observedReasonToken» | string | conditional | exactly 1 iff the observed family requires a reason; otherwise 0 | Contract 9 | minimum compatibility required by Contract 9 §32 | observed runtime reason/violation token | no | reject |
| c10.field.824 | ComparisonOutcome | observedRetryabilityIdentity | ComparisonOutcome.observedRetryabilityIdentity | Поле ComparisonOutcome «observedRetryabilityIdentity» | string | conditional | exactly 1 iff retryability is evaluable for the observed result; otherwise 0 | Contract 9 | minimum compatibility required by Contract 9 §32 | evaluation-classified c9.retryability.* identity | no | reject |
| c10.field.825 | ComparisonOutcome | comparisonValidationIdentity | ComparisonOutcome.comparisonValidationIdentity | Поле ComparisonOutcome «comparisonValidationIdentity» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | exact Contract-9 comparison validation/policy identity | no | reject |
| c10.field.826 | ComparisonOutcome | primaryEscalationIdentity | ComparisonOutcome.primaryEscalationIdentity | Поле ComparisonOutcome «primaryEscalationIdentity» | string | conditional | exactly 1 iff comparisonOutcomeIdentity is non-PASS; otherwise 0 | Contract 9 | minimum compatibility required by Contract 9 §32 | c9.escalation.* mapped from primaryFailureIdentity | no | reject |
| c10.field.827 | ComparisonOutcome | secondaryFailureIdentities | ComparisonOutcome.secondaryFailureIdentities | Поле ComparisonOutcome «secondaryFailureIdentities» | array<string> | required | 0..N | Contract 9 | minimum compatibility required by Contract 9 §32 | additional simultaneously true c9.failure.* identities | no | reject |
| c10.field.828 | ComparisonOutcome | countConsumptionIdentity | ComparisonOutcome.countConsumptionIdentity | Поле ComparisonOutcome «countConsumptionIdentity» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | unique fixture/subset count-consumption identity preventing double count | no | reject |
| c10.field.829 | ComparisonOutcome | immutableTraceReference | ComparisonOutcome.immutableTraceReference | Поле ComparisonOutcome «immutableTraceReference» | string | required | 1 | Contract 9 | minimum compatibility required by Contract 9 §32 | comparison evidence and immutable trace | no | reject |
| c10.field.900 | ConformanceValidationReport | reportId | ConformanceValidationReport.reportId | Поле ConformanceValidationReport «reportId» | string | required | 1 | Contract 10 | Contract-10 domain | — | no | reject |
| c10.field.901 | ConformanceValidationReport | targetArtifactId | ConformanceValidationReport.targetArtifactId | Поле ConformanceValidationReport «targetArtifactId» | string | required | 1 | Contract 10 | Contract-10 domain | governed target | no | reject |
| c10.field.902 | ConformanceValidationReport | targetArtifactKind | ConformanceValidationReport.targetArtifactKind | Поле ConformanceValidationReport «targetArtifactKind» | string | required | 1 | Contract 10 | exact canonical construct name from §6 containment registry | Construct containment registry | no | reject |
| c10.field.903 | ConformanceValidationReport | validationBundleVersion | ConformanceValidationReport.validationBundleVersion | Поле ConformanceValidationReport «validationBundleVersion» | string | required | 1 | Contract 10 | Contract-10 domain | Contract-10 validation bundle | no | reject |
| c10.field.904 | ConformanceValidationReport | findings | ConformanceValidationReport.findings | Поле ConformanceValidationReport «findings» | array<ConformanceFinding> | required | 0..N | Contract 10 | Contract-10 domain | — | no | reject |
| c10.field.905 | ConformanceValidationReport | primaryFindingId | ConformanceValidationReport.primaryFindingId | Поле ConformanceValidationReport «primaryFindingId» | string | conditional | 0..1 | Contract 10 | Contract-10 domain | exactly one iff report invalid | no | reject |
| c10.field.906 | ConformanceValidationReport | valid | ConformanceValidationReport.valid | Поле ConformanceValidationReport «valid» | boolean | required | 1 | Contract 10 | Contract-10 domain | — | no | reject |
| c10.field.907 | ConformanceValidationReport | sealedAt | ConformanceValidationReport.sealedAt | Поле ConformanceValidationReport «sealedAt» | RFC3339 timestamp | required | 1 | Contract 10 | Contract-10 domain | — | no | reject |
| c10.field.908 | ConformanceValidationReport | sealIntegrityReference | ConformanceValidationReport.sealIntegrityReference | Поле ConformanceValidationReport «sealIntegrityReference» | string | required | 1 | Contract 10 | Contract-10 domain | report payload | no | reject |
| c10.field.909 | ConformanceValidationReport | schemaVersion | ConformanceValidationReport.schemaVersion | Поле ConformanceValidationReport «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.conformance-validation-report.v1 | schema registry | no | reject |
| c10.field.910 | ConformanceFinding | findingId | ConformanceFinding.findingId | Поле ConformanceFinding «findingId» | string | required | 1 | Contract 10 | Contract-10 domain | — | no | reject |
| c10.field.911 | ConformanceFinding | validationId | ConformanceFinding.validationId | Поле ConformanceFinding «validationId» | string | required | 1 | Contract 10 | Contract-10 domain | c10.validation.* | no | reject |
| c10.field.912 | ConformanceFinding | failureIdentity | ConformanceFinding.failureIdentity | Поле ConformanceFinding «failureIdentity» | string | required | 1 | Contract 10 | Contract-10 domain | c10.failure.* | no | reject |
| c10.field.913 | ConformanceFinding | targetPath | ConformanceFinding.targetPath | Поле ConformanceFinding «targetPath» | string | required | 1 | Contract 10 | Contract-10 domain | field/cross-field path | no | reject |
| c10.field.914 | ConformanceFinding | dispositionIdentity | ConformanceFinding.dispositionIdentity | Поле ConformanceFinding «dispositionIdentity» | enum | required | 1 | Contract 10 | one exact c10.disposition.* identity | Contract-10 disposition registry | no | reject |
| c10.field.915 | ConformanceFinding | externalOutcomeToken | ConformanceFinding.externalOutcomeToken | Поле ConformanceFinding «externalOutcomeToken» | string | conditional | 0..1 | Contract 10 | present only when the disposition requires a governed external output or escalation token | UnsupportedInput reason, Contract-9 comparison mapping, or security escalation token; absent for sidecar-only nonconformance | no | reject |
| c10.field.916 | ConformanceFinding | secondaryEvidenceReferences | ConformanceFinding.secondaryEvidenceReferences | Поле ConformanceFinding «secondaryEvidenceReferences» | array<string> | required | 0..N | Contract 10 | Contract-10 domain | evidence/diagnostics | no | reject |
| c10.field.917 | ConformanceFinding | precedence | ConformanceFinding.precedence | Поле ConformanceFinding «precedence» | integer | required | 1 | Contract 10 | Contract-10 domain | 0..999; lower wins | no | reject |
| c10.field.918 | ConformanceFinding | upstreamFailureIdentities | ConformanceFinding.upstreamFailureIdentities | Поле ConformanceFinding «upstreamFailureIdentities» | array<string> | required | 0..N | Contract 10 | Contract-10 domain | exact upstream semantic failures preserved as causes; never substituted by c10.failure.* | no | reject |
| c10.field.920 | SealVerificationResult | schemaVersion | SealVerificationResult.schemaVersion | Поле SealVerificationResult «schemaVersion» | string | required | 1 | Contract 10 | c10.schema.seal-verification-result.v1 | schema registry | no | reject |
| c10.field.921 | SealVerificationResult | verificationId | SealVerificationResult.verificationId | Поле SealVerificationResult «verificationId» | string | required | 1 | Contract 10 | opaque immutable verification identity | — | no | reject |
| c10.field.922 | SealVerificationResult | targetArtifactId | SealVerificationResult.targetArtifactId | Поле SealVerificationResult «targetArtifactId» | string | required | 1 | Contract 10 | governed artifact identity | verified artifact | no | reject |
| c10.field.923 | SealVerificationResult | targetArtifactKind | SealVerificationResult.targetArtifactKind | Поле SealVerificationResult «targetArtifactKind» | string | required | 1 | Contract 10 | exact canonical construct name from §6 containment registry | Construct containment registry | no | reject |
| c10.field.924 | SealVerificationResult | presentedSealIntegrityReference | SealVerificationResult.presentedSealIntegrityReference | Поле SealVerificationResult «presentedSealIntegrityReference» | string | required | 1 | Contract 10 | sha256:<64 lowercase hex> | target artifact seal field | no | reject |
| c10.field.925 | SealVerificationResult | recomputedSealIntegrityReference | SealVerificationResult.recomputedSealIntegrityReference | Поле SealVerificationResult «recomputedSealIntegrityReference» | string | required | 1 | Contract 10 | sha256:<64 lowercase hex> | RFC-8785 canonical target payload | no | reject |
| c10.field.926 | SealVerificationResult | valid | SealVerificationResult.valid | Поле SealVerificationResult «valid» | boolean | required | 1 | Contract 10 | true iff decoded digest bytes match in constant time | — | no | reject |
| c10.field.927 | SealVerificationResult | verifiedAt | SealVerificationResult.verifiedAt | Поле SealVerificationResult «verifiedAt» | RFC3339 timestamp | required | 1 | Contract 10 | UTC with Z suffix | — | no | reject |
| c10.field.928 | SealVerificationResult | failureIdentity | SealVerificationResult.failureIdentity | Поле SealVerificationResult «failureIdentity» | string | conditional | 0..1 | Contract 10 | required iff valid=false; absent iff valid=true | c10.failure.S037 or c10.failure.S038 | no | reject |
| c10.field.929 | SealVerificationResult | verificationMethodIdentity | SealVerificationResult.verificationMethodIdentity | Поле SealVerificationResult «verificationMethodIdentity» | string | required | 1 | Contract 10 | c10.seal-method.rfc8785-sha256.v1 | seal method registry | no | reject |
| c10.field.950 | PairingRecord | recordTypeIdentity | PairingRecord.recordTypeIdentity | Поле PairingRecord «recordTypeIdentity» | string | required | 1 | Contract 6 | c6.recordtype.002 | — | no | reject |
| c10.field.951 | BasisLinkRecord | recordTypeIdentity | BasisLinkRecord.recordTypeIdentity | Поле BasisLinkRecord «recordTypeIdentity» | string | required | 1 | Contract 6 | c6.recordtype.003 | — | no | reject |
| c10.field.952 | OutcomeDecisionRecord | recordTypeIdentity | OutcomeDecisionRecord.recordTypeIdentity | Поле OutcomeDecisionRecord «recordTypeIdentity» | string | required | 1 | Contract 6 | c6.recordtype.004 | — | no | reject |
| c10.field.953 | Contract6SealingRecord | recordTypeIdentity | Contract6SealingRecord.recordTypeIdentity | Поле Contract6SealingRecord «recordTypeIdentity» | string | required | 1 | Contract 6 | c6.recordtype.005 | — | no | reject |
| c10.field.954 | AdjudicationRecord | recordTypeIdentity | AdjudicationRecord.recordTypeIdentity | Поле AdjudicationRecord «recordTypeIdentity» | string | required | 1 | Contract 6 | c6.recordtype.006 | — | no | reject |
| c10.field.955 | ConfidenceSourceSignalRecord | recordTypeIdentity | ConfidenceSourceSignalRecord.recordTypeIdentity | Поле ConfidenceSourceSignalRecord «recordTypeIdentity» | string | required | 1 | Contract 5 | c5.recordtype.002 | — | no | reject |
| c10.field.956 | AnnotationUnitRecord | multiViewStateIdentity | AnnotationUnitRecord.multiViewStateIdentity | Поле AnnotationUnitRecord «multiViewStateIdentity» | string | conditional | 0..1 | Contract 6 | c6.multiviewstate.* when multi-view applies | — | no | reject |
| c10.field.957 | BasisLinkRecord | operationId | BasisLinkRecord.operationId | Поле BasisLinkRecord «operationId» | string | required | 1 | Contract 6 / TDH | same operation | operation | no | reject |
| c10.field.958 | BasisLinkRecord | roomCaseId | BasisLinkRecord.roomCaseId | Поле BasisLinkRecord «roomCaseId» | string | required | 1 | Contract 6 / TDH | same RoomCase | RoomCase | no | reject |
| c10.field.959 | BasisLinkRecord | unitSubjectId | BasisLinkRecord.unitSubjectId | Поле BasisLinkRecord «unitSubjectId» | string | required | 1 | Contract 6 | same annotation-unit subject | imported subject | no | reject |
| c10.field.960 | BasisLinkRecord | basisApplicabilityRationale | BasisLinkRecord.basisApplicabilityRationale | Поле BasisLinkRecord «basisApplicabilityRationale» | string | required | 1 | Contract 6 | reviewable rationale; no hidden chain-of-thought | — | no | reject |
| c10.field.961 | BasisLinkRecord | predecessorBasisLinkRecordId | BasisLinkRecord.predecessorBasisLinkRecordId | Поле BasisLinkRecord «predecessorBasisLinkRecordId» | string | conditional | 0..1 | Contract 6 | required on supersession | prior basis-link record | no | reject |
| c10.field.962 | AdjudicationRecord | candidateOrMemberIds | AdjudicationRecord.candidateOrMemberIds | Поле AdjudicationRecord «candidateOrMemberIds» | array<string> | required | 0..N | Contract 6 | complete retained candidate/member set | imported candidates/members | no | reject |
| c10.field.963 | AdjudicationRecord | traceReference | AdjudicationRecord.traceReference | Поле AdjudicationRecord «traceReference» | string | required | 1 | Contract 6 | diagnostic trace | — | no | reject |
| c10.field.964 | Contract6SealingRecord | traceReference | Contract6SealingRecord.traceReference | Поле Contract6SealingRecord «traceReference» | string | required | 1 | Contract 6 | diagnostic trace | — | no | reject |
| c10.field.965 | Contract6SealingRecord | revisionId | Contract6SealingRecord.revisionId | Поле Contract6SealingRecord «revisionId» | string | required | 1 | Contract 6 | immutable record revision | — | no | reject |
| c10.field.966 | Contract8EvaluationPackage | unseenClaimRecords | Contract8EvaluationPackage.unseenClaimRecords | Поле Contract8EvaluationPackage «unseenClaimRecords» | array<UnseenClaimRecord> | required | 0..N | Contract 8 | one mechanism-output conformance wrapper per finalized raw assertion | — | no | reject |
| c10.field.967 | UnseenClaimRecord | unseenClaimRecordId | UnseenClaimRecord.unseenClaimRecordId | Поле UnseenClaimRecord «unseenClaimRecordId» | string | required | 1 | Contract 8 | language-neutral immutable identity | — | no | reject |
| c10.field.968 | UnseenClaimRecord | rawAssertionReference | UnseenClaimRecord.rawAssertionReference | Поле UnseenClaimRecord «rawAssertionReference» | string | required | 1 | Contract 8 | exactly one RawMechanismAssertionArtifact | RawMechanismAssertionArtifact | no | reject |
| c10.field.969 | UnseenClaimRecord | assertionProjectionReference | UnseenClaimRecord.assertionProjectionReference | Поле UnseenClaimRecord «assertionProjectionReference» | string | required | 1 | Contract 8 | exactly one valid final ETAPAssertionProjectionFact | ETAPAssertionProjectionFact | no | reject |

Active field count: **531**. Every row is active. No retired field identity is included. Each canonical path is relative to its named construct and resolves through the containment registry in §6.

## 8. Required / conditional / prohibited applicability matrix

| Field ID | Construct | Applicability | Condition | Cardinality | Canonical path |
| --- | --- | --- | --- | --- | --- |
| c10.field.001 | CaptureSetIntake | R | required | 1 | operationId |
| c10.field.002 | CaptureSetIntake | R | required | 1 | inputArtifactId |
| c10.field.003 | CaptureSetIntake | R | required | 0..N | imageAssets |
| c10.field.004 | ImageAsset | R | required | 1 | imageAssetId |
| c10.field.005 | ImageAsset | R | required | 1 | sourceAssetId |
| c10.field.006 | ImageAsset | R | required | 1 | sourceClass |
| c10.field.007 | ImageAsset | R | required | 1 | mediaType |
| c10.field.008 | ImageAsset | R | required | 1 | contentIntegrityReference |
| c10.field.009 | ImageAsset | C | conditional | 0..1 | preprocessingLineageReference |
| c10.field.010 | SameRoomValidationRecord | R | required | 1 | sameRoomValidationId |
| c10.field.011 | SameRoomValidationRecord | R | required | 1 | operationId |
| c10.field.012 | SameRoomValidationRecord | R | required | 1..6 | contributingImageAssetIds |
| c10.field.013 | SameRoomValidationRecord | R | required | 1 | outcome |
| c10.field.014 | SameRoomValidationRecord | R | required | 1..N | basisReferences |
| c10.field.015 | SameRoomValidationRecord | C | conditional | 0..1 | roomCaseId |
| c10.field.016 | SameRoomValidationRecord | C | conditional | 0..1 | inputSetId |
| c10.field.017 | PerceptionOperation | R | required | 1 | operationId |
| c10.field.018 | PerceptionOperation | R | required | 1 | roomCase |
| c10.field.019 | RoomCase | R | required | 1 | roomCaseId |
| c10.field.020 | RoomCase | R | required | 1..6 | imageAssets |
| c10.field.021 | RoomCase | R | required | 1 | sameRoomValidationReference |
| c10.field.022 | MixedRoomValidationRequest | R | required | 1 | operationId |
| c10.field.023 | MixedRoomValidationRequest | R | required | 1 | inputSetId |
| c10.field.024 | MixedRoomValidationRequest | R | required | 2..6 | imageAssets |
| c10.field.025 | MixedRoomValidationRequest | P | prohibited | 0 | roomCaseId |
| c10.field.026 | UnsupportedInput | R | required | 1 | operationId |
| c10.field.027 | UnsupportedInput | C | conditional | 0..1 | inputArtifactId |
| c10.field.028 | UnsupportedInput | R | required | 1 | reason |
| c10.field.029 | UnsupportedInput | R | required | 1 | observedAssetCount |
| c10.field.030 | PerceptionOperation | R | required | 1 | operationState |
| c10.field.031 | PerceptionOperation | C | conditional | 0..1 | resultReference |
| c10.field.032 | CaptureSetIntake | R | required | 1 | schemaVersion |
| c10.field.033 | SameRoomValidationRecord | R | required | 1 | schemaVersion |
| c10.field.034 | PerceptionOperation | R | required | 1 | schemaVersion |
| c10.field.035 | MixedRoomValidationRequest | R | required | 1 | schemaVersion |
| c10.field.036 | UnsupportedInput | R | required | 1 | schemaVersion |
| c10.field.100 | VlmSceneCandidate | R | required | 1 | candidateId |
| c10.field.101 | VlmSceneCandidate | R | required | 1 | operationId |
| c10.field.102 | VlmSceneCandidate | R | required | 1 | roomCaseId |
| c10.field.103 | VlmSceneCandidate | R | required | 1..6 | contributingImageAssetIds |
| c10.field.104 | VlmSceneCandidate | R | required | 1 | producingStageIdentity |
| c10.field.105 | VlmSceneCandidate | R | required | 1 | rawProviderOutputReference |
| c10.field.106 | VlmSceneCandidate | R | required | 0..N | candidateNodes |
| c10.field.107 | CandidateNode | R | required | 1 | candidateNodeId |
| c10.field.108 | CandidateNode | R | required | 1 | kind |
| c10.field.109 | CandidateNode | C | conditional | 0..1 | spaceTypeId |
| c10.field.110 | CandidateNode | C | conditional | 0..1 | typeLabel |
| c10.field.111 | CandidateNode | C | conditional | 0..1 | geometryCandidate |
| c10.field.112 | VlmSceneCandidate | R | required | 0..N | candidateRelations |
| c10.field.113 | CandidateRelation | R | required | 1 | candidateRelationId |
| c10.field.114 | CandidateRelation | R | required | 1 | relationTypeIdentity |
| c10.field.115 | CandidateRelation | R | required | 2 | endpointCandidateNodeIds |
| c10.field.116 | VlmSceneCandidate | R | required | 1 | schemaVersion |
| c10.field.120 | StructuredSceneV0 | R | required | 1 | sceneId |
| c10.field.121 | StructuredSceneV0 | R | required | 1 | operationId |
| c10.field.122 | StructuredSceneV0 | R | required | 1 | roomCaseId |
| c10.field.123 | StructuredSceneV0 | R | required | 1..6 | contributingImageAssetIds |
| c10.field.124 | StructuredSceneV0 | R | required | 1 | sceneRevisionId |
| c10.field.125 | StructuredSceneV0 | R | required | 1..N | nodes |
| c10.field.126 | SceneNode | R | required | 1 | nodeId |
| c10.field.127 | SceneNode | R | required | 1 | kind |
| c10.field.128 | SceneNode | C | conditional | 0..1 | spaceTypeId |
| c10.field.129 | SceneNode | C | conditional | 0..1 | typeLabel |
| c10.field.130 | SceneNode | R | required | 1 | geometry |
| c10.field.131 | StructuredSceneV0 | R | required | 0..N | relations |
| c10.field.132 | SceneRelation | R | required | 1 | relationId |
| c10.field.133 | SceneRelation | R | required | 1 | relationTypeIdentity |
| c10.field.134 | SceneRelation | R | required | 2 | endpointNodeIds |
| c10.field.135 | SceneRelation | R | required | 1 | relationRevisionId |
| c10.field.136 | StructuredSceneV0 | R | required | 1 | schemaVersion |
| c10.field.200 | PerceptionResultCommon | R | required | 1 | operationId |
| c10.field.201 | PerceptionResultCommon | R | required | 1 | status |
| c10.field.202 | PerceptionResultCommon | C | conditional | 0..1 | roomCaseId |
| c10.field.203 | PerceptionResultCommon | C | conditional | 0..6 | contributingImageAssetIds |
| c10.field.204 | PerceptionResultCommon | R | required | 1 | diagnosticsReference |
| c10.field.205 | PerceptionResultCommon | R | required | 1 | schemaVersion |
| c10.field.206 | PerceptionResultCommon | R | required | 1 | ruleSetVersion |
| c10.field.207 | PerceptionResultCommon | R | required | 1 | contractBundleReference |
| c10.field.208 | PerceptionResultCommon | R | required | 1 | vocabularyVersion |
| c10.field.209 | PerceptionResultCommon | C | conditional | 0..1 | providerConfigurationVersionReference |
| c10.field.210 | PerceptionResultCommon | R | required | 1 | sealedAt |
| c10.field.211 | PerceptionResultCommon | R | required | 1 | sealIntegrityReference |
| c10.field.212 | PerceptionResultCommon | C | conditional | 0..1 | predecessorResultReference |
| c10.field.213 | PerceptionResultCommon | R | required | 1 | resultId |
| c10.field.214 | PerceptionResultCommon | R | required | 1 | resultRevisionId |
| c10.field.220 | SceneResult | R | required | 1 | scene |
| c10.field.221 | SceneResult | R | required | 1 | completeness |
| c10.field.222 | SceneResult | R | required | 1 | evidenceArtifactReference |
| c10.field.230 | InsufficientEvidenceResult | R | required | 1 | reasonCategory |
| c10.field.231 | InsufficientEvidenceResult | R | required | 1 | recommendedNextAction |
| c10.field.240 | FailureResult | R | required | 1 | technicalReasonCategory |
| c10.field.241 | FailureResult | R | required | 1 | retryability |
| c10.field.250 | RejectedResult | C | conditional | 0..N | contractViolations |
| c10.field.251 | RejectedResult | C | conditional | 0..1 | inputSetId |
| c10.field.252 | RejectedResult | R | required | 1 | rejectionStage |
| c10.field.253 | RejectedResult | C | conditional | 0..1 | rejectionContextReference |
| c10.field.260 | PerceptionOperationDiagnostics | R | required | 1 | diagnosticsId |
| c10.field.261 | PerceptionOperationDiagnostics | R | required | 1 | operationId |
| c10.field.262 | PerceptionOperationDiagnostics | C | conditional | 0..1 | roomCaseId |
| c10.field.263 | PerceptionOperationDiagnostics | R | required | 1..N | stageEvents |
| c10.field.264 | StageEvent | R | required | 1 | stageIdentity |
| c10.field.265 | StageEvent | R | required | 1 | status |
| c10.field.266 | StageEvent | R | required | 1 | startedAt |
| c10.field.267 | StageEvent | C | conditional | 0..1 | completedAt |
| c10.field.268 | StageEvent | C | conditional | 0..1 | failureCode |
| c10.field.269 | PerceptionOperationDiagnostics | R | required | 0..6 | imageDiagnosticReferences |
| c10.field.270 | PerceptionOperationDiagnostics | R | required | 1 | traceReference |
| c10.field.271 | PerceptionOperationDiagnostics | R | required | 1 | integrityReference |
| c10.field.272 | PerceptionOperationDiagnostics | R | required | 1 | schemaVersion |
| c10.field.280 | ImageAssetProcessingDiagnostic | R | required | 1 | imageDiagnosticId |
| c10.field.281 | ImageAssetProcessingDiagnostic | R | required | 1 | operationId |
| c10.field.282 | ImageAssetProcessingDiagnostic | R | required | 1 | imageAssetId |
| c10.field.283 | ImageAssetProcessingDiagnostic | R | required | 1 | processingStatus |
| c10.field.284 | ImageAssetProcessingDiagnostic | C | conditional | 0..1 | failureStage |
| c10.field.285 | ImageAssetProcessingDiagnostic | C | conditional | 0..1 | failureCode |
| c10.field.286 | ImageAssetProcessingDiagnostic | C | conditional | 0..1 | retryability |
| c10.field.287 | ImageAssetProcessingDiagnostic | C | conditional | 0..1 | providerTraceReference |
| c10.field.288 | ImageAssetProcessingDiagnostic | C | conditional | 0..1 | preprocessingTraceReference |
| c10.field.289 | ImageAssetProcessingDiagnostic | R | required | 1 | evidenceAvailability |
| c10.field.290 | ImageAssetProcessingDiagnostic | C | conditional | 0..1 | excludedFromFusionReason |
| c10.field.291 | ImageAssetProcessingDiagnostic | R | required | 1 | schemaVersion |
| c10.field.300 | PerceptionEvidenceArtifact | R | required | 1 | evidenceArtifactId |
| c10.field.301 | PerceptionEvidenceArtifact | R | required | 1 | operationId |
| c10.field.302 | PerceptionEvidenceArtifact | R | required | 1 | roomCaseId |
| c10.field.303 | PerceptionEvidenceArtifact | R | required | 1..6 | contributingImageAssetIds |
| c10.field.304 | PerceptionEvidenceArtifact | R | required | 1 | sceneReference |
| c10.field.305 | PerceptionEvidenceArtifact | R | required | 1..N | groundingRecords |
| c10.field.306 | GroundingRecord | R | required | 1 | groundingRecordId |
| c10.field.307 | GroundingRecord | R | required | 1 | targetElementId |
| c10.field.308 | GroundingRecord | R | required | 1..6 | imageAssetIds |
| c10.field.309 | GroundingRecord | R | required | 1 | evidenceReference |
| c10.field.310 | GroundingRecord | R | required | 1 | evidenceType |
| c10.field.311 | GroundingRecord | C | conditional | 0..1 | confidenceAssertionReference |
| c10.field.312 | GroundingRecord | R | required | 1 | provenanceAttachmentReference |
| c10.field.313 | GroundingRecord | R | required | 1 | mechanismVersionReference |
| c10.field.314 | GroundingRecord | C | conditional | 0..1 | promptVersionReference |
| c10.field.315 | GroundingRecord | C | conditional | 0..1 | preprocessingTransformReference |
| c10.field.316 | PerceptionEvidenceArtifact | R | required | 0..N | provenanceAttachments |
| c10.field.317 | PerceptionEvidenceArtifact | R | required | 0..N | bestEffortAssessments |
| c10.field.318 | PerceptionEvidenceArtifact | R | required | 0..N | attributeEvidenceArtifacts |
| c10.field.319 | PerceptionEvidenceArtifact | R | required | 0..N | evidenceSets |
| c10.field.320 | PerceptionEvidenceArtifact | R | required | 0..N | determinabilityBasisRecords |
| c10.field.321 | PerceptionEvidenceArtifact | R | required | 0..N | confidenceAssertions |
| c10.field.322 | PerceptionEvidenceArtifact | C | conditional | 0..1 | contract6PackageReference |
| c10.field.323 | PerceptionEvidenceArtifact | R | required | 1 | integrityReference |
| c10.field.324 | PerceptionEvidenceArtifact | R | required | 1 | historyReference |
| c10.field.325 | PerceptionEvidenceArtifact | R | required | 0..N | bestEffortValues |
| c10.field.326 | PerceptionEvidenceArtifact | R | required | 0..N | confidenceSourceSignals |
| c10.field.327 | PerceptionEvidenceArtifact | R | required | 1 | schemaVersion |
| c10.field.330 | ProvenanceAttachmentRecord | R | required | 1 | provenanceAttachmentId |
| c10.field.331 | ProvenanceAttachmentRecord | R | required | 1 | targetAnnotationId |
| c10.field.332 | ProvenanceAttachmentRecord | R | required | 1 | targetKind |
| c10.field.333 | ProvenanceAttachmentRecord | R | required | 1 | provenanceIdentity |
| c10.field.334 | ProvenanceAttachmentRecord | R | required | 1 | producingStageIdentity |
| c10.field.335 | ProvenanceAttachmentRecord | C | conditional | required for deterministic-derived, heuristic-inferred or provider-inferred provenance; absent or empty only when Contract 4 permits visually-observed provenance | producerIdentityAndVersions |
| c10.field.336 | ProvenanceAttachmentRecord | C | conditional | 0..N | parentEvidenceOrValueIds |
| c10.field.337 | ProvenanceAttachmentRecord | R | required | 1 | roomCaseId |
| c10.field.338 | ProvenanceAttachmentRecord | R | required | 1 | contractSemanticVersion |
| c10.field.339 | ProvenanceAttachmentRecord | R | required | 1 | traceReference |
| c10.field.340 | ProvenanceAttachmentRecord | R | required | 1 | integrityReference |
| c10.field.341 | ProvenanceAttachmentRecord | R | required | 1 | historyReference |
| c10.field.350 | BestEffortFieldAssessmentRecord | R | required | 1 | assessmentId |
| c10.field.351 | BestEffortFieldAssessmentRecord | R | required | 1 | fieldIdentity |
| c10.field.352 | BestEffortFieldAssessmentRecord | R | required | 1 | capabilityIdentity |
| c10.field.353 | BestEffortFieldAssessmentRecord | R | required | 1 | ownerId |
| c10.field.354 | BestEffortFieldAssessmentRecord | R | required | 1 | ownerKind |
| c10.field.355 | BestEffortFieldAssessmentRecord | R | required | 1 | roomCaseId |
| c10.field.356 | BestEffortFieldAssessmentRecord | R | required | 0..N | linkedValueIds |
| c10.field.357 | BestEffortFieldAssessmentRecord | R | required | 1 | determinabilityBasisRecordId |
| c10.field.358 | BestEffortFieldAssessmentRecord | R | required | 1 | contractSemanticVersion |
| c10.field.359 | BestEffortFieldAssessmentRecord | R | required | 1 | producingStageIdentity |
| c10.field.360 | BestEffortFieldAssessmentRecord | R | required | 1 | traceReference |
| c10.field.361 | BestEffortFieldAssessmentRecord | R | required | 1 | integrityReference |
| c10.field.362 | BestEffortFieldAssessmentRecord | R | required | 1 | historyReference |
| c10.field.370 | AttributeEvidenceArtifact | R | required | 1 | attributeEvidenceArtifactId |
| c10.field.371 | AttributeEvidenceArtifact | R | required | 1 | fieldAssessmentId |
| c10.field.372 | AttributeEvidenceArtifact | R | required | 1 | bestEffortValueId |
| c10.field.373 | AttributeEvidenceArtifact | R | required | 1 | ownerId |
| c10.field.374 | AttributeEvidenceArtifact | R | required | 1 | evidenceKindIdentity |
| c10.field.375 | AttributeEvidenceArtifact | R | required | 1 | provenanceAttachmentId |
| c10.field.376 | AttributeEvidenceArtifact | R | required | 1 | roomCaseId |
| c10.field.377 | AttributeEvidenceArtifact | R | required | 1..N | atomicContributions |
| c10.field.378 | AttributeEvidenceArtifact | R | required | 1 | producingStageIdentity |
| c10.field.379 | AttributeEvidenceArtifact | C | conditional | required for deterministic-derived, heuristic-inferred or provider-inferred provenance; absent or empty only when Contract 4 permits visually-observed provenance | producerIdentityAndVersions |
| c10.field.380 | AttributeEvidenceArtifact | C | conditional | 0..N | derivationParentIds |
| c10.field.381 | AttributeEvidenceArtifact | R | required | 1 | contractSemanticVersion |
| c10.field.382 | AttributeEvidenceArtifact | R | required | 1 | serializationSchemaReference |
| c10.field.383 | AttributeEvidenceArtifact | R | required | 1 | reasonOrTraceReference |
| c10.field.384 | AttributeEvidenceArtifact | R | required | 1 | integrityReference |
| c10.field.385 | AttributeEvidenceArtifact | R | required | 1 | dataUseEligibilityReference |
| c10.field.386 | AttributeEvidenceArtifact | R | required | 1 | consentEligibilityReference |
| c10.field.387 | AttributeEvidenceArtifact | R | required | 1 | authorizationStateReference |
| c10.field.388 | AttributeEvidenceArtifact | R | required | 1 | retentionDeletionPolicyReference |
| c10.field.389 | AttributeEvidenceArtifact | R | required | 1 | safeFailureReference |
| c10.field.390 | AttributeEvidenceArtifact | R | required | 1 | tamperEvidentHistoryReference |
| c10.field.391 | AttributeEvidenceArtifact | C | conditional | 0..1 | futureFeedbackLinkReference |
| c10.field.392 | AttributeEvidenceArtifact | R | required | 1 | noRegressionEvaluationReference |
| c10.field.393 | AttributeEvidenceArtifact | R | required | 1 | rollbackCompatibilityReference |
| c10.field.394 | AttributeEvidenceArtifact | C | conditional | 0..1 | predecessorArtifactId |
| c10.field.395 | AttributeEvidenceArtifact | R | required | 1 | artifactRevisionState |
| c10.field.400 | AtomicEvidenceContribution | R | required | 1 | contributionId |
| c10.field.401 | AtomicEvidenceContribution | R | required | 1 | imageAssetId |
| c10.field.402 | AtomicEvidenceContribution | R | required | 1 | sourceAssetId |
| c10.field.403 | AtomicEvidenceContribution | R | required | 1 | locatorOrInferenceBasisReference |
| c10.field.404 | AtomicEvidenceContribution | C | conditional | 0..1 | preprocessingLineageReference |
| c10.field.405 | AtomicEvidenceContribution | R | required | 1 | integrityReference |
| c10.field.406 | AtomicEvidenceContribution | R | required | 1 | historyReference |
| c10.field.407 | AtomicEvidenceContribution | R | required | 1 | producingStageVersionReference |
| c10.field.410 | EvidenceSetRecord | R | required | 1 | evidenceSetId |
| c10.field.411 | EvidenceSetRecord | R | required | 1 | targetKind |
| c10.field.412 | EvidenceSetRecord | R | required | 1 | fieldAssessmentId |
| c10.field.413 | EvidenceSetRecord | C | conditional | 0..1 | bestEffortValueId |
| c10.field.414 | EvidenceSetRecord | R | required | 1 | roomCaseId |
| c10.field.415 | EvidenceSetRecord | R | required | 1..N | contributionIds |
| c10.field.416 | EvidenceSetRecord | R | required | 1..6 | distinctImageAssetIds |
| c10.field.417 | EvidenceSetRecord | R | required | 1 | fusionOperationIdentity |
| c10.field.418 | EvidenceSetRecord | R | required | 1 | fusionOperationVersion |
| c10.field.419 | EvidenceSetRecord | R | required | 1 | fingerprintRuleIdentity |
| c10.field.420 | EvidenceSetRecord | R | required | 0..N | relationshipRecords |
| c10.field.421 | EvidenceSetRecord | R | required | 0..N | contradictionReferences |
| c10.field.422 | EvidenceSetRecord | R | required | 1 | integrityReference |
| c10.field.423 | EvidenceSetRecord | R | required | 1 | historyReference |
| c10.field.430 | DeterminabilityEvidenceBasisRecord | R | required | 1 | determinabilityBasisRecordId |
| c10.field.431 | DeterminabilityEvidenceBasisRecord | R | required | 1 | fieldAssessmentId |
| c10.field.432 | DeterminabilityEvidenceBasisRecord | R | required | 0..N | linkedBestEffortValueIds |
| c10.field.433 | DeterminabilityEvidenceBasisRecord | R | required | 1 | roomCaseId |
| c10.field.434 | DeterminabilityEvidenceBasisRecord | R | required | 1..N | basisIdentities |
| c10.field.435 | DeterminabilityEvidenceBasisRecord | R | required | 0..N | linkedAttributeEvidenceArtifactIds |
| c10.field.436 | DeterminabilityEvidenceBasisRecord | R | required | 0..N | linkedEvidenceSetIds |
| c10.field.437 | DeterminabilityEvidenceBasisRecord | R | required | 0..N | linkedFailureIds |
| c10.field.438 | DeterminabilityEvidenceBasisRecord | R | required | 1 | contractSemanticVersion |
| c10.field.439 | DeterminabilityEvidenceBasisRecord | R | required | 1 | traceReference |
| c10.field.440 | DeterminabilityEvidenceBasisRecord | R | required | 1 | integrityReference |
| c10.field.441 | DeterminabilityEvidenceBasisRecord | R | required | 1 | historyReference |
| c10.field.450 | EvidenceRelationshipRecord | R | required | 1 | relationshipRecordId |
| c10.field.451 | EvidenceRelationshipRecord | R | required | 1 | evidenceSetId |
| c10.field.452 | EvidenceRelationshipRecord | R | required | 1 | relationshipIdentity |
| c10.field.453 | EvidenceRelationshipRecord | R | required | 1 | subjectKindIdentity |
| c10.field.454 | EvidenceRelationshipRecord | R | required | 1..N condition-dependent | subjectIds |
| c10.field.455 | EvidenceRelationshipRecord | C | conditional | 0..1 | aspectIdentity |
| c10.field.456 | EvidenceRelationshipRecord | R | required | 1 | producingRuleAndVersion |
| c10.field.457 | EvidenceRelationshipRecord | R | required | 1 | roomCaseId |
| c10.field.458 | EvidenceRelationshipRecord | R | required | 1 | integrityReference |
| c10.field.459 | EvidenceRelationshipRecord | R | required | 1 | historyReference |
| c10.field.460 | BestEffortValueRevision | R | required | 1 | bestEffortValueId |
| c10.field.461 | BestEffortValueRevision | R | required | 1 | fieldAssessmentId |
| c10.field.462 | BestEffortValueRevision | R | required | 1 | valueElementIdentity |
| c10.field.463 | BestEffortValueRevision | R | required | 1 | valueRevisionId |
| c10.field.464 | BestEffortValueRevision | R | required | 1 | valuePayload |
| c10.field.465 | BestEffortValueRevision | R | required | 1 | provenanceAttachmentId |
| c10.field.466 | BestEffortValueRevision | C | conditional | 0..1 | predecessorValueId |
| c10.field.467 | BestEffortValueRevision | R | required | 1 | revisionState |
| c10.field.468 | BestEffortValueRevision | R | required | 1 | integrityReference |
| c10.field.469 | BestEffortValueRevision | R | required | 1 | historyReference |
| c10.field.500 | ConfidenceAssertionRecord | R | required | 1 | recordTypeIdentity |
| c10.field.501 | ConfidenceAssertionRecord | R | required | 1 | confidenceAssertionId |
| c10.field.502 | ConfidenceAssertionRecord | R | required | 1 | subjectId |
| c10.field.503 | ConfidenceAssertionRecord | R | required | 1 | subjectKindIdentity |
| c10.field.504 | ConfidenceAssertionRecord | R | required | 1 | stateIdentity |
| c10.field.505 | ConfidenceAssertionRecord | R | required | 1 | sourceIdentity |
| c10.field.506 | ConfidenceAssertionRecord | R | required | 1 | transformationIdentity |
| c10.field.507 | ConfidenceAssertionRecord | R | required | 1..N | signalTypeIdentities |
| c10.field.508 | ConfidenceAssertionRecord | C | conditional | 1..N for non-missing confidence; 0 for Contract-5 missing-source state | sourceSignalIds |
| c10.field.509 | ConfidenceAssertionRecord | C | conditional | exactly 1 for every non-missing assertion; 0 only when sourceIdentity=c5.source.003 | generationMethodId |
| c10.field.510 | ConfidenceAssertionRecord | C | conditional | exactly 1 iff transformationIdentity=c5.transformation.002; otherwise 0 | normalizationProfileId |
| c10.field.511 | ConfidenceAssertionRecord | C | conditional | exactly 1 iff a normalization profile maps an input signal to stateIdentity; otherwise 0 | mappingRuleId |
| c10.field.512 | ConfidenceAssertionRecord | C | conditional | required when source/transformation semantics require a producer, provider, rule, method or configuration identity | producerIdentityAndVersions |
| c10.field.513 | ConfidenceAssertionRecord | R | required | 1 | operationId |
| c10.field.514 | ConfidenceAssertionRecord | R | required | 1 | roomCaseId |
| c10.field.515 | ConfidenceAssertionRecord | R | required | 1 | producingStageIdentity |
| c10.field.516 | ConfidenceAssertionRecord | R | required | 1 | contractSemanticVersion |
| c10.field.517 | ConfidenceAssertionRecord | R | required | 1 | assertionRevisionId |
| c10.field.518 | ConfidenceAssertionRecord | C | conditional | 0..1 | predecessorAssertionId |
| c10.field.519 | ConfidenceAssertionRecord | R | required | 1 | traceReference |
| c10.field.520 | ConfidenceAssertionRecord | R | required | 1 | integrityReference |
| c10.field.521 | ConfidenceAssertionRecord | R | required | 1 | historyReference |
| c10.field.530 | ConfidenceSourceSignalRecord | R | required | 1 | sourceSignalId |
| c10.field.531 | ConfidenceSourceSignalRecord | R | required | 1 | sourceIdentity |
| c10.field.532 | ConfidenceSourceSignalRecord | R | required | 1 | signalTypeIdentity |
| c10.field.533 | ConfidenceSourceSignalRecord | R | required | 1 | generationMethodId |
| c10.field.534 | ConfidenceSourceSignalRecord | R | required | 1 | originalRawTypeDomain |
| c10.field.535 | ConfidenceSourceSignalRecord | R | required | 1 | rawSignalOrUnavailabilityReason |
| c10.field.536 | ConfidenceSourceSignalRecord | R | required | 1..N | producerIdentityAndVersions |
| c10.field.537 | ConfidenceSourceSignalRecord | R | required | 1 | operationId |
| c10.field.538 | ConfidenceSourceSignalRecord | R | required | 1 | roomCaseId |
| c10.field.539 | ConfidenceSourceSignalRecord | R | required | 1..6 | contributingImageAssetIds |
| c10.field.540 | ConfidenceSourceSignalRecord | R | required | 1 | producingStageIdentity |
| c10.field.541 | ConfidenceSourceSignalRecord | R | required | 1 | integrityReference |
| c10.field.542 | ConfidenceSourceSignalRecord | R | required | 1 | revisionId |
| c10.field.600 | Contract6DeterminabilityPackage | R | required | 1 | packageId |
| c10.field.601 | Contract6DeterminabilityPackage | R | required | 1 | operationId |
| c10.field.602 | Contract6DeterminabilityPackage | R | required | 1 | roomCaseId |
| c10.field.603 | Contract6DeterminabilityPackage | R | required | 0..N | annotationUnits |
| c10.field.604 | Contract6DeterminabilityPackage | R | required | 0..N | pairingRecords |
| c10.field.605 | Contract6DeterminabilityPackage | R | required | 0..N | basisLinkRecords |
| c10.field.606 | Contract6DeterminabilityPackage | R | required | 0..N | outcomeDecisionRecords |
| c10.field.607 | Contract6DeterminabilityPackage | R | required | 0..N | sealingRecords |
| c10.field.608 | Contract6DeterminabilityPackage | R | required | 0..N | adjudicationRecords |
| c10.field.609 | Contract6DeterminabilityPackage | R | required | 1 | integrityReference |
| c10.field.610 | AnnotationUnitRecord | R | required | 1 | annotationUnitId |
| c10.field.611 | AnnotationUnitRecord | R | required | 1 | recordTypeIdentity |
| c10.field.612 | AnnotationUnitRecord | R | required | 1 | operationId |
| c10.field.613 | AnnotationUnitRecord | R | required | 1 | roomCaseId |
| c10.field.614 | AnnotationUnitRecord | R | required | 1 | subjectId |
| c10.field.615 | AnnotationUnitRecord | R | required | 1 | subjectKindIdentity |
| c10.field.616 | AnnotationUnitRecord | R | required | 1 | unitTypeIdentity |
| c10.field.617 | AnnotationUnitRecord | R | required | 1 | unitGranularityIdentity |
| c10.field.618 | AnnotationUnitRecord | R | required | 1 | viewScopeIdentity |
| c10.field.619 | AnnotationUnitRecord | C | conditional | 1..N exactly when unitTypeIdentity requires imported subtype candidates, confidence assertions, provenance attachments, field assessments or value identities; otherwise 0 | importedSemanticIds |
| c10.field.620 | AnnotationUnitRecord | C | conditional | 0..1 | memberId |
| c10.field.621 | AnnotationUnitRecord | R | required | 1 | revisionId |
| c10.field.622 | AnnotationUnitRecord | C | conditional | 0..1 | predecessorAnnotationUnitId |
| c10.field.623 | AnnotationUnitRecord | R | required | 1 | basisLinkRecordId |
| c10.field.624 | AnnotationUnitRecord | R | required | 1 | pairingRecordId |
| c10.field.625 | AnnotationUnitRecord | C | conditional | 0..1 | outcomeDecisionRecordId |
| c10.field.626 | AnnotationUnitRecord | C | conditional | 0..1 | sealingRecordId |
| c10.field.627 | AnnotationUnitRecord | C | conditional | 0..1 | adjudicationRecordId |
| c10.field.628 | AnnotationUnitRecord | R | required | 1 | traceReference |
| c10.field.629 | AnnotationUnitRecord | R | required | 1 | integrityReference |
| c10.field.630 | AnnotationUnitRecord | R | required | 1 | historyReference |
| c10.field.640 | PairingRecord | R | required | 1 | pairingRecordId |
| c10.field.641 | PairingRecord | R | required | 1 | annotationUnitId |
| c10.field.642 | PairingRecord | R | required | 1 | pairingRuleIdentity |
| c10.field.643 | PairingRecord | R | required | 1 | pairingStateIdentity |
| c10.field.644 | PairingRecord | R | required | 1..N | participantIds |
| c10.field.645 | PairingRecord | R | required | 1..N | identityEqualityResults |
| c10.field.646 | PairingRecord | R | required | 0..N | duplicateNormalizationReferences |
| c10.field.647 | PairingRecord | R | required | 0..N | conflictReferences |
| c10.field.648 | PairingRecord | R | required | 1 | revisionId |
| c10.field.649 | PairingRecord | C | conditional | 0..1 | predecessorPairingRecordId |
| c10.field.650 | PairingRecord | R | required | 1 | traceReference |
| c10.field.651 | PairingRecord | R | required | 1 | integrityReference |
| c10.field.652 | PairingRecord | R | required | 1 | historyReference |
| c10.field.655 | Contract6DeterminabilityPackage | R | required | 1 | schemaVersion |
| c10.field.660 | BasisLinkRecord | R | required | 1 | basisLinkRecordId |
| c10.field.661 | BasisLinkRecord | R | required | 1 | annotationUnitId |
| c10.field.662 | BasisLinkRecord | R | required | 1..N | basisIdentities |
| c10.field.663 | BasisLinkRecord | R | required | 1..N | evidenceReferences |
| c10.field.664 | BasisLinkRecord | R | required | 1 | revisionId |
| c10.field.665 | BasisLinkRecord | R | required | 1 | traceReference |
| c10.field.666 | BasisLinkRecord | R | required | 1 | integrityReference |
| c10.field.667 | BasisLinkRecord | R | required | 1 | historyReference |
| c10.field.670 | OutcomeDecisionRecord | R | required | 1 | outcomeDecisionRecordId |
| c10.field.671 | OutcomeDecisionRecord | R | required | 1 | annotationUnitId |
| c10.field.672 | OutcomeDecisionRecord | R | required | 1 | outcomeIdentity |
| c10.field.673 | OutcomeDecisionRecord | R | required | 1 | derivationOrAdjudicationBasisReference |
| c10.field.674 | OutcomeDecisionRecord | R | required | 1 | revisionId |
| c10.field.675 | OutcomeDecisionRecord | R | required | 1 | traceReference |
| c10.field.676 | OutcomeDecisionRecord | R | required | 1 | integrityReference |
| c10.field.677 | OutcomeDecisionRecord | R | required | 1 | historyReference |
| c10.field.680 | Contract6SealingRecord | R | required | 1 | sealingRecordId |
| c10.field.681 | Contract6SealingRecord | R | required | 1 | annotationUnitId |
| c10.field.682 | Contract6SealingRecord | R | required | 1 | lifecycleTransitionIdentity |
| c10.field.683 | Contract6SealingRecord | R | required | 1 | authorityReference |
| c10.field.684 | Contract6SealingRecord | R | required | 1 | sealedRevisionId |
| c10.field.685 | Contract6SealingRecord | C | conditional | 0..1 | predecessorSealingRecordId |
| c10.field.686 | Contract6SealingRecord | R | required | 1 | integrityReference |
| c10.field.687 | Contract6SealingRecord | R | required | 1 | historyReference |
| c10.field.690 | AdjudicationRecord | R | required | 1 | adjudicationRecordId |
| c10.field.691 | AdjudicationRecord | R | required | 1 | annotationUnitId |
| c10.field.692 | AdjudicationRecord | R | required | 1 | triggerIdentity |
| c10.field.693 | AdjudicationRecord | R | required | 1..N | retainedBasisReferences |
| c10.field.694 | AdjudicationRecord | R | required | 1 | rationaleReference |
| c10.field.695 | AdjudicationRecord | R | required | 1 | authorityReference |
| c10.field.696 | AdjudicationRecord | R | required | 1 | dispositionIdentity |
| c10.field.697 | AdjudicationRecord | R | required | 1 | revisionId |
| c10.field.698 | AdjudicationRecord | C | conditional | 0..1 | predecessorAdjudicationRecordId |
| c10.field.699 | AdjudicationRecord | R | required | 1 | integrityReference |
| c10.field.700 | AdjudicationRecord | R | required | 1 | historyReference |
| c10.field.704 | Contract8EvaluationPackage | R | required | 1 | packageId |
| c10.field.705 | Contract8EvaluationPackage | R | required | 1 | evaluationConfigurationReference |
| c10.field.706 | Contract8EvaluationPackage | R | required | 0..N | rawAssertions |
| c10.field.707 | Contract8EvaluationPackage | R | required | 0..N | projectionFacts |
| c10.field.708 | Contract8EvaluationPackage | R | required | 0..N | records |
| c10.field.709 | Contract8EvaluationPackage | R | required | 1 | schemaVersion |
| c10.field.710 | RawMechanismAssertionArtifact | R | required | 1 | rawAssertionId |
| c10.field.711 | RawMechanismAssertionArtifact | R | required | 1 | untouchedPayloadReference |
| c10.field.712 | RawMechanismAssertionArtifact | R | required | 1 | semanticCaseId |
| c10.field.713 | RawMechanismAssertionArtifact | R | required | 1 | roomCaseId |
| c10.field.714 | RawMechanismAssertionArtifact | R | required | 1..6 | contributingImageAssetIds |
| c10.field.715 | RawMechanismAssertionArtifact | C | conditional | 0..1 | rawEmittedCode |
| c10.field.716 | RawMechanismAssertionArtifact | C | conditional | 0..1 | rawSubject |
| c10.field.717 | RawMechanismAssertionArtifact | C | conditional | 0..1 | rawTarget |
| c10.field.718 | RawMechanismAssertionArtifact | C | conditional | 0..1 | rawLocus |
| c10.field.719 | RawMechanismAssertionArtifact | C | conditional | exactly 1 iff output was generated by a concrete provider/mechanism configuration; otherwise 0 and prohibited | providerConfigurationReference |
| c10.field.720 | RawMechanismAssertionArtifact | R | required | 1 | evaluationConfigurationReference |
| c10.field.721 | RawMechanismAssertionArtifact | R | required | 1 | normalizationStatus |
| c10.field.722 | RawMechanismAssertionArtifact | C | conditional | normalizationStatus .001 or .002: 1..N; status .003: 0 and prohibited | producedNormalizedClaimLinks |
| c10.field.723 | RawMechanismAssertionArtifact | C | conditional | normalizationStatus .001: 0 and prohibited; status .002 or .003: exactly 1 carrying c8.comparisonresult.016 | rawMalformedComparisonLink |
| c10.field.724 | RawMechanismAssertionArtifact | C | conditional | 0..1 while pre-final blocked; exactly 1 after valid finalization | assertionProjectionFactId |
| c10.field.725 | RawMechanismAssertionArtifact | R | required | 1 | historyReference |
| c10.field.730 | ETAPAssertionProjectionFact | R | required | 1 | projectionFactId |
| c10.field.731 | ETAPAssertionProjectionFact | R | required | 1 | rawAssertionId |
| c10.field.732 | ETAPAssertionProjectionFact | R | required | 0..N | normalizedProducedClaimLinks |
| c10.field.733 | ETAPAssertionProjectionFact | R | required | 0..N | atomicComparisonLinks |
| c10.field.734 | ETAPAssertionProjectionFact | C | conditional | 0..1 | rawMalformedComparisonLink |
| c10.field.735 | ETAPAssertionProjectionFact | R | required | 1 | projectionResult |
| c10.field.736 | ETAPAssertionProjectionFact | R | required | 1 | versionConfigurationBundle |
| c10.field.737 | ETAPAssertionProjectionFact | R | required | 1 | etapConsumptionState |
| c10.field.740 | C8EvaluationRecord | R | required | 1 | recordId |
| c10.field.741 | C8EvaluationRecord | R | required | 1 | recordTypeIdentity |
| c10.field.742 | C8EvaluationRecord | R | required | 1 | semanticCaseId |
| c10.field.743 | C8EvaluationRecord | R | required | 1 | roomCaseId |
| c10.field.744 | C8EvaluationRecord | C | conditional | record types .001-.003: exactly 1; .004: 0..1 only when safely assignable; .005-.007: 0 and prohibited | claimCodeIdentity |
| c10.field.745 | C8EvaluationRecord | C | conditional | record types .001-.003: exactly 1; .004: 0..1 only when a governed claim code exists; .005-.007: 0 and prohibited | dispositionIdentity |
| c10.field.746 | C8EvaluationRecord | C | conditional | record type .001: exactly c8.requirementlevel.001; .002: exactly c8.requirementlevel.002; .003-.007: 0 and prohibited | requirementLevelIdentity |
| c10.field.747 | C8EvaluationRecord | C | conditional | record types .001-.003: exactly 1; .004: 0..1 only when a governed claim code exists; .005-.007: 0 and prohibited | assertionScopeIdentity |
| c10.field.748 | C8EvaluationRecord | C | conditional | record types .001-.004: exactly 1 iff the selected claim code requires subject; otherwise 0; .005-.007: 0 and prohibited | subject |
| c10.field.749 | C8EvaluationRecord | C | conditional | record types .001-.004: exactly 1 iff the selected claim code requires target/complement; otherwise 0; .005-.007: 0 and prohibited | target |
| c10.field.750 | C8EvaluationRecord | C | conditional | record types .001-.004: exactly 1 iff the selected claim code requires locus; diagnostic-only values permitted for case-scope prohibition matching; .005-.007: 0 and prohibited | locus |
| c10.field.751 | C8EvaluationRecord | C | conditional | record types .001-.002: exactly 1; .003-.007: 0 and prohibited | expectedState |
| c10.field.752 | C8EvaluationRecord | C | conditional | record type .003: exactly 1; all other record types: 0 and prohibited | rawAssertionId |
| c10.field.753 | C8EvaluationRecord | C | conditional | record type .003: exactly 1; all other record types: 0 and prohibited | normalizationTransformationId |
| c10.field.754 | C8EvaluationRecord | C | conditional | record type .003: exactly 1; all other record types: 0 and prohibited | normalizedAtomicInterpretationId |
| c10.field.755 | C8EvaluationRecord | C | conditional | record type .004: 0..1; required for expectation/prohibition comparison and absent for unmatched-produced or raw-malformed comparison; all other types: prohibited | expectationOrProhibitionRecordId |
| c10.field.756 | C8EvaluationRecord | C | conditional | record type .004: 0..1; all other types: 0 and prohibited | matchedProducedRecordId |
| c10.field.757 | C8EvaluationRecord | C | conditional | record type .004: exactly 1 iff primary result is c8.comparisonresult.016; otherwise 0; all other types: prohibited | rawAssertionDefectLink |
| c10.field.758 | C8EvaluationRecord | C | conditional | record type .004: exactly 1 (pre-final only while adjudication-required, final before sealing); all other types: 0 and prohibited | primaryComparisonResultIdentity |
| c10.field.759 | C8EvaluationRecord | C | conditional | record type .004: 0..N; all other types: 0 and prohibited | secondaryFailureIdentities |
| c10.field.760 | C8EvaluationRecord | C | conditional | record types .001-.005: 0..N as type-specific supporting/contradicting evidence; record types .006-.007: 0 and prohibited | evidenceReferences |
| c10.field.761 | C8EvaluationRecord | C | conditional | record types .001-.005: 1..6; record types .006-.007: 0 and prohibited | contributingImageAssetIds |
| c10.field.762 | C8EvaluationRecord | R | required | 1 | subsetReference |
| c10.field.763 | C8EvaluationRecord | R | required | 1 | lineageReference |
| c10.field.764 | C8EvaluationRecord | R | required | 1 | contractSemanticVersionReference |
| c10.field.765 | C8EvaluationRecord | C | conditional | record types .001-.004: exactly 1; .005-.007: 0 and prohibited | claimVocabularyVersionReference |
| c10.field.766 | C8EvaluationRecord | R | required | 1 | ruleRegistryVersionReference |
| c10.field.767 | C8EvaluationRecord | R | required | 1 | validationRegistryVersionReference |
| c10.field.768 | C8EvaluationRecord | C | conditional | record types .004-.005: exactly 1; .001-.003 and .006-.007: 0 and prohibited | comparisonPolicyVersionReference |
| c10.field.769 | C8EvaluationRecord | C | conditional | record types .003-.004: exactly 1 iff output came from a concrete provider/mechanism configuration; otherwise 0; all other types: prohibited | providerConfigurationReference |
| c10.field.770 | C8EvaluationRecord | C | conditional | record types .001-.005: exactly 1; .006-.007: 0 and prohibited | evaluationConfigurationReference |
| c10.field.771 | C8EvaluationRecord | R | required | 1 | lifecycle |
| c10.field.772 | C8EvaluationRecord | C | conditional | record types .001-.004: 0..1 and exactly 1 only when adjudication opens; .005-.007: 0 and prohibited | adjudicationRecordId |
| c10.field.773 | C8EvaluationRecord | C | conditional | all record types: 0..1 and exactly 1 in replacement/supersession paths | replacementRecordId |
| c10.field.774 | C8LifecycleBundle | R | required | 1 | lifecycleStateIdentity |
| c10.field.775 | C8LifecycleBundle | R | required | 1 | recordRevisionId |
| c10.field.776 | C8LifecycleBundle | C | conditional | 0..1; required for a successor/supersession/replacement revision | predecessorRecordId |
| c10.field.777 | C8LifecycleBundle | C | conditional | 0..1; required when lifecycleStateIdentity=c8.lifecycle.007 | successorRecordId |
| c10.field.778 | C8LifecycleBundle | C | conditional | exactly 1 after a seal event; 0 before seal | sealedAt |
| c10.field.779 | C8LifecycleBundle | C | conditional | exactly 1 after a seal event; 0 before seal | sealIntegrityReference |
| c10.field.780 | C8LifecycleBundle | R | required | 1 | historyReference |
| c10.field.781 | C8LifecycleBundle | C | conditional | exactly 1 iff lifecycleStateIdentity=c8.lifecycle.006 | exclusionReasonIdentity |
| c10.field.782 | C8LifecycleBundle | C | conditional | exactly 1 iff lifecycleStateIdentity=c8.lifecycle.008 | invalidationReasonIdentity |
| c10.field.783 | C8LifecycleBundle | C | conditional | exactly 1 iff lifecycleStateIdentity=c8.lifecycle.009 or a replacement record is created | replacementReasonIdentity |
| c10.field.784 | C8LifecycleBundle | R | required | 1..N | transitionEvents |
| c10.field.785 | C8LifecycleTransitionEvent | R | required | 1 | transitionEventId |
| c10.field.786 | C8LifecycleTransitionEvent | C | conditional | 0..1; absent only for the initial draft event | fromStateIdentity |
| c10.field.787 | C8LifecycleTransitionEvent | R | required | 1 | toStateIdentity |
| c10.field.788 | C8LifecycleTransitionEvent | R | required | 1 | transitionDisposition |
| c10.field.789 | C8LifecycleTransitionEvent | C | conditional | 1..N for CONDITIONAL; 0..N otherwise | conditionEvidenceReferences |
| c10.field.790 | C8LifecycleTransitionEvent | R | required | 1 | actorRoleReference |
| c10.field.791 | C8LifecycleTransitionEvent | R | required | 1 | occurredAt |
| c10.field.792 | C8LifecycleTransitionEvent | R | required | 1 | eventIntegrityReference |
| c10.field.800 | ComparisonOutcome | R | required | 1 | comparisonId |
| c10.field.801 | ComparisonOutcome | R | required | 1 | fixtureId |
| c10.field.802 | ComparisonOutcome | R | required | 1 | entryIdentity |
| c10.field.803 | ComparisonOutcome | R | required | 1 | observedResultReference |
| c10.field.804 | ComparisonOutcome | R | required | 1 | comparisonOutcomeIdentity |
| c10.field.805 | ComparisonOutcome | C | conditional | 0..1 | primaryFailureIdentity |
| c10.field.806 | ComparisonOutcome | C | conditional | 0..1 | retryabilityAssessment |
| c10.field.807 | ComparisonOutcome | R | required | 1 | subsetRole |
| c10.field.808 | ComparisonOutcome | R | required | 1 | sealedAt |
| c10.field.809 | ComparisonOutcome | R | required | 1 | sealIntegrityReference |
| c10.field.810 | ComparisonOutcome | R | required | 1 | schemaVersion |
| c10.field.811 | ComparisonOutcome | R | required | 1 | contractVersionReference |
| c10.field.812 | ComparisonOutcome | R | required | 1..N | governingSourceIdentityReferences |
| c10.field.813 | ComparisonOutcome | R | required | 1 | suiteIdentity |
| c10.field.814 | ComparisonOutcome | R | required | 1 | subtypeToken |
| c10.field.815 | ComparisonOutcome | R | required | 1 | expectedResultFamily |
| c10.field.816 | ComparisonOutcome | R | required | 1 | expectedStage |
| c10.field.817 | ComparisonOutcome | R | required | 1 | expectedReasonToken |
| c10.field.818 | ComparisonOutcome | R | required | 1 | expectedRetryabilityIdentity |
| c10.field.819 | ComparisonOutcome | R | required | 1..N | prohibitedOutcomeIdentities |
| c10.field.820 | ComparisonOutcome | R | required | 1 | fixtureLineageId |
| c10.field.821 | ComparisonOutcome | C | conditional | exactly 1 iff an observed primary result exists; otherwise 0 | observedResultFamily |
| c10.field.822 | ComparisonOutcome | C | conditional | exactly 1 iff an observed primary result exists; otherwise 0 | observedStage |
| c10.field.823 | ComparisonOutcome | C | conditional | exactly 1 iff the observed family requires a reason; otherwise 0 | observedReasonToken |
| c10.field.824 | ComparisonOutcome | C | conditional | exactly 1 iff retryability is evaluable for the observed result; otherwise 0 | observedRetryabilityIdentity |
| c10.field.825 | ComparisonOutcome | R | required | 1 | comparisonValidationIdentity |
| c10.field.826 | ComparisonOutcome | C | conditional | exactly 1 iff comparisonOutcomeIdentity is non-PASS; otherwise 0 | primaryEscalationIdentity |
| c10.field.827 | ComparisonOutcome | R | required | 0..N | secondaryFailureIdentities |
| c10.field.828 | ComparisonOutcome | R | required | 1 | countConsumptionIdentity |
| c10.field.829 | ComparisonOutcome | R | required | 1 | immutableTraceReference |
| c10.field.900 | ConformanceValidationReport | R | required | 1 | reportId |
| c10.field.901 | ConformanceValidationReport | R | required | 1 | targetArtifactId |
| c10.field.902 | ConformanceValidationReport | R | required | 1 | targetArtifactKind |
| c10.field.903 | ConformanceValidationReport | R | required | 1 | validationBundleVersion |
| c10.field.904 | ConformanceValidationReport | R | required | 0..N | findings |
| c10.field.905 | ConformanceValidationReport | C | conditional | 0..1 | primaryFindingId |
| c10.field.906 | ConformanceValidationReport | R | required | 1 | valid |
| c10.field.907 | ConformanceValidationReport | R | required | 1 | sealedAt |
| c10.field.908 | ConformanceValidationReport | R | required | 1 | sealIntegrityReference |
| c10.field.909 | ConformanceValidationReport | R | required | 1 | schemaVersion |
| c10.field.910 | ConformanceFinding | R | required | 1 | findingId |
| c10.field.911 | ConformanceFinding | R | required | 1 | validationId |
| c10.field.912 | ConformanceFinding | R | required | 1 | failureIdentity |
| c10.field.913 | ConformanceFinding | R | required | 1 | targetPath |
| c10.field.914 | ConformanceFinding | R | required | 1 | dispositionIdentity |
| c10.field.915 | ConformanceFinding | C | conditional | 0..1 | externalOutcomeToken |
| c10.field.916 | ConformanceFinding | R | required | 0..N | secondaryEvidenceReferences |
| c10.field.917 | ConformanceFinding | R | required | 1 | precedence |
| c10.field.918 | ConformanceFinding | R | required | 0..N | upstreamFailureIdentities |
| c10.field.920 | SealVerificationResult | R | required | 1 | schemaVersion |
| c10.field.921 | SealVerificationResult | R | required | 1 | verificationId |
| c10.field.922 | SealVerificationResult | R | required | 1 | targetArtifactId |
| c10.field.923 | SealVerificationResult | R | required | 1 | targetArtifactKind |
| c10.field.924 | SealVerificationResult | R | required | 1 | presentedSealIntegrityReference |
| c10.field.925 | SealVerificationResult | R | required | 1 | recomputedSealIntegrityReference |
| c10.field.926 | SealVerificationResult | R | required | 1 | valid |
| c10.field.927 | SealVerificationResult | R | required | 1 | verifiedAt |
| c10.field.928 | SealVerificationResult | C | conditional | 0..1 | failureIdentity |
| c10.field.929 | SealVerificationResult | R | required | 1 | verificationMethodIdentity |
| c10.field.950 | PairingRecord | R | required | 1 | recordTypeIdentity |
| c10.field.951 | BasisLinkRecord | R | required | 1 | recordTypeIdentity |
| c10.field.952 | OutcomeDecisionRecord | R | required | 1 | recordTypeIdentity |
| c10.field.953 | Contract6SealingRecord | R | required | 1 | recordTypeIdentity |
| c10.field.954 | AdjudicationRecord | R | required | 1 | recordTypeIdentity |
| c10.field.955 | ConfidenceSourceSignalRecord | R | required | 1 | recordTypeIdentity |
| c10.field.956 | AnnotationUnitRecord | C | conditional | 0..1 | multiViewStateIdentity |
| c10.field.957 | BasisLinkRecord | R | required | 1 | operationId |
| c10.field.958 | BasisLinkRecord | R | required | 1 | roomCaseId |
| c10.field.959 | BasisLinkRecord | R | required | 1 | unitSubjectId |
| c10.field.960 | BasisLinkRecord | R | required | 1 | basisApplicabilityRationale |
| c10.field.961 | BasisLinkRecord | C | conditional | 0..1 | predecessorBasisLinkRecordId |
| c10.field.962 | AdjudicationRecord | R | required | 0..N | candidateOrMemberIds |
| c10.field.963 | AdjudicationRecord | R | required | 1 | traceReference |
| c10.field.964 | Contract6SealingRecord | R | required | 1 | traceReference |
| c10.field.965 | Contract6SealingRecord | R | required | 1 | revisionId |
| c10.field.966 | Contract8EvaluationPackage | R | required | 0..N | unseenClaimRecords |
| c10.field.967 | UnseenClaimRecord | R | required | 1 | unseenClaimRecordId |
| c10.field.968 | UnseenClaimRecord | R | required | 1 | rawAssertionReference |
| c10.field.969 | UnseenClaimRecord | R | required | 1 | assertionProjectionReference |

Legend: `R` required, `C` conditional, `P` prohibited. A field not listed for a construct is `N/A`. Conditional rows include their exact condition in the master field inventory and applicable cross-field rule.

## 9. Field-bound validation registry

| Validation ID | Target | Predicate | PASS condition | FAIL condition | Primary failure identity | Disposition identity | External outcome token | Upstream cause identity | Precedence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| c10.validation.001 | CaptureSetIntake | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.001 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.002 | CaptureSetIntake | inputArtifactId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.002 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.003 | CaptureSetIntake | imageAssets is present, has type array<ImageAsset>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.003 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.004 | ImageAsset | imageAssetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.004 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.005 | ImageAsset | sourceAssetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.005 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.006 | ImageAsset | sourceClass is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.006 | c10.disposition.001 | c9.failure.ineligible-source | c9.failure.ineligible-source | 0 |
| c10.validation.007 | ImageAsset | mediaType is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.007 | c10.disposition.003 | unsupported-format | — | 10 |
| c10.validation.008 | ImageAsset | contentIntegrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.008 | c10.disposition.003 | decode-failure | — | 10 |
| c10.validation.009 | ImageAsset | when its applicability condition is true, preprocessingLineageReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.009 | c10.disposition.004 | — | — | 20 |
| c10.validation.010 | SameRoomValidationRecord | sameRoomValidationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.010 | c10.disposition.004 | — | — | 20 |
| c10.validation.011 | SameRoomValidationRecord | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.011 | c10.disposition.004 | — | — | 20 |
| c10.validation.012 | SameRoomValidationRecord | contributingImageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.012 | c10.disposition.004 | — | — | 20 |
| c10.validation.013 | SameRoomValidationRecord | outcome is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.013 | c10.disposition.004 | — | — | 20 |
| c10.validation.014 | SameRoomValidationRecord | basisReferences is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.014 | c10.disposition.004 | — | — | 20 |
| c10.validation.015 | SameRoomValidationRecord | when its applicability condition is true, roomCaseId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.015 | c10.disposition.004 | — | — | 20 |
| c10.validation.016 | SameRoomValidationRecord | when its applicability condition is true, inputSetId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.016 | c10.disposition.004 | — | — | 20 |
| c10.validation.017 | PerceptionOperation | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.017 | c10.disposition.004 | — | — | 20 |
| c10.validation.018 | PerceptionOperation | roomCase is present, has type RoomCase, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.018 | c10.disposition.004 | — | — | 20 |
| c10.validation.019 | RoomCase | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.019 | c10.disposition.004 | — | — | 20 |
| c10.validation.020 | RoomCase | imageAssets is present, has type array<ImageAsset>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.020 | c10.disposition.004 | — | — | 20 |
| c10.validation.021 | RoomCase | sameRoomValidationReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.021 | c10.disposition.004 | — | — | 20 |
| c10.validation.022 | MixedRoomValidationRequest | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.022 | c10.disposition.004 | — | — | 20 |
| c10.validation.023 | MixedRoomValidationRequest | inputSetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.023 | c10.disposition.004 | — | — | 20 |
| c10.validation.024 | MixedRoomValidationRequest | imageAssets is present, has type array<ImageAsset>, cardinality 2..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.024 | c10.disposition.004 | — | — | 20 |
| c10.validation.025 | MixedRoomValidationRequest | roomCaseId is absent | field absent | field present | c10.failure.025 | c10.disposition.001 | c9.failure.mixed-room-roomcase-fabrication | c9.failure.mixed-room-roomcase-fabrication | 0 |
| c10.validation.026 | UnsupportedInput | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.026 | c10.disposition.004 | — | — | 20 |
| c10.validation.027 | UnsupportedInput | when its applicability condition is true, inputArtifactId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.027 | c10.disposition.004 | — | — | 20 |
| c10.validation.028 | UnsupportedInput | reason is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.028 | c10.disposition.004 | — | — | 20 |
| c10.validation.029 | UnsupportedInput | observedAssetCount is present, has type integer, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.029 | c10.disposition.004 | — | — | 20 |
| c10.validation.030 | PerceptionOperation | operationState is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.030 | c10.disposition.004 | — | — | 20 |
| c10.validation.031 | PerceptionOperation | when its applicability condition is true, resultReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.031 | c10.disposition.004 | — | — | 20 |
| c10.validation.032 | CaptureSetIntake | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.032 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.033 | SameRoomValidationRecord | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.033 | c10.disposition.004 | — | — | 20 |
| c10.validation.034 | PerceptionOperation | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.034 | c10.disposition.004 | — | — | 20 |
| c10.validation.035 | MixedRoomValidationRequest | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.035 | c10.disposition.004 | — | — | 20 |
| c10.validation.036 | UnsupportedInput | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.036 | c10.disposition.004 | — | — | 20 |
| c10.validation.100 | VlmSceneCandidate | candidateId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.100 | c10.disposition.004 | — | — | 20 |
| c10.validation.101 | VlmSceneCandidate | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.101 | c10.disposition.004 | — | — | 20 |
| c10.validation.102 | VlmSceneCandidate | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.102 | c10.disposition.004 | — | — | 20 |
| c10.validation.103 | VlmSceneCandidate | contributingImageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.103 | c10.disposition.004 | — | — | 20 |
| c10.validation.104 | VlmSceneCandidate | producingStageIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.104 | c10.disposition.004 | — | — | 20 |
| c10.validation.105 | VlmSceneCandidate | rawProviderOutputReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.105 | c10.disposition.004 | — | — | 20 |
| c10.validation.106 | VlmSceneCandidate | candidateNodes is present, has type array<CandidateNode>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.106 | c10.disposition.004 | — | — | 20 |
| c10.validation.107 | CandidateNode | candidateNodeId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.107 | c10.disposition.004 | — | — | 20 |
| c10.validation.108 | CandidateNode | kind is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.108 | c10.disposition.004 | — | — | 20 |
| c10.validation.109 | CandidateNode | when its applicability condition is true, spaceTypeId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.109 | c10.disposition.004 | — | — | 20 |
| c10.validation.110 | CandidateNode | when its applicability condition is true, typeLabel satisfies type Observed<string>, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.110 | c10.disposition.004 | — | — | 20 |
| c10.validation.111 | CandidateNode | when its applicability condition is true, geometryCandidate satisfies type ADR013GeometryCandidate, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.111 | c10.disposition.004 | — | — | 20 |
| c10.validation.112 | VlmSceneCandidate | candidateRelations is present, has type array<CandidateRelation>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.112 | c10.disposition.004 | — | — | 20 |
| c10.validation.113 | CandidateRelation | candidateRelationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.113 | c10.disposition.004 | — | — | 20 |
| c10.validation.114 | CandidateRelation | relationTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.114 | c10.disposition.004 | — | — | 20 |
| c10.validation.115 | CandidateRelation | endpointCandidateNodeIds is present, has type array<string>, cardinality 2, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.115 | c10.disposition.004 | — | — | 20 |
| c10.validation.116 | VlmSceneCandidate | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.116 | c10.disposition.004 | — | — | 20 |
| c10.validation.120 | StructuredSceneV0 | sceneId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.120 | c10.disposition.004 | — | — | 20 |
| c10.validation.121 | StructuredSceneV0 | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.121 | c10.disposition.004 | — | — | 20 |
| c10.validation.122 | StructuredSceneV0 | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.122 | c10.disposition.004 | — | — | 20 |
| c10.validation.123 | StructuredSceneV0 | contributingImageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.123 | c10.disposition.004 | — | — | 20 |
| c10.validation.124 | StructuredSceneV0 | sceneRevisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.124 | c10.disposition.004 | — | — | 20 |
| c10.validation.125 | StructuredSceneV0 | nodes is present, has type array<SceneNode>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.125 | c10.disposition.004 | — | — | 20 |
| c10.validation.126 | SceneNode | nodeId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.126 | c10.disposition.004 | — | — | 20 |
| c10.validation.127 | SceneNode | kind is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.127 | c10.disposition.004 | — | — | 20 |
| c10.validation.128 | SceneNode | when its applicability condition is true, spaceTypeId satisfies type Observed<SpaceTypeId>, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.128 | c10.disposition.004 | — | — | 20 |
| c10.validation.129 | SceneNode | when its applicability condition is true, typeLabel satisfies type Observed<string>, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.129 | c10.disposition.004 | — | — | 20 |
| c10.validation.130 | SceneNode | geometry is present, has type ADR013GeometryValue, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.130 | c10.disposition.004 | — | — | 20 |
| c10.validation.131 | StructuredSceneV0 | relations is present, has type array<SceneRelation>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.131 | c10.disposition.004 | — | — | 20 |
| c10.validation.132 | SceneRelation | relationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.132 | c10.disposition.004 | — | — | 20 |
| c10.validation.133 | SceneRelation | relationTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.133 | c10.disposition.004 | — | — | 20 |
| c10.validation.134 | SceneRelation | endpointNodeIds is present, has type array<string>, cardinality 2, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.134 | c10.disposition.004 | — | — | 20 |
| c10.validation.135 | SceneRelation | relationRevisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.135 | c10.disposition.004 | — | — | 20 |
| c10.validation.136 | StructuredSceneV0 | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.136 | c10.disposition.004 | — | — | 20 |
| c10.validation.200 | PerceptionResultCommon | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.200 | c10.disposition.004 | — | — | 20 |
| c10.validation.201 | PerceptionResultCommon | status is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.201 | c10.disposition.004 | — | — | 20 |
| c10.validation.202 | PerceptionResultCommon | when its applicability condition is true, roomCaseId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.202 | c10.disposition.004 | — | — | 20 |
| c10.validation.203 | PerceptionResultCommon | when its applicability condition is true, contributingImageAssetIds satisfies type array<string>, cardinality 0..6, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.203 | c10.disposition.004 | — | — | 20 |
| c10.validation.204 | PerceptionResultCommon | diagnosticsReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.204 | c10.disposition.004 | — | — | 20 |
| c10.validation.205 | PerceptionResultCommon | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.205 | c10.disposition.004 | — | — | 20 |
| c10.validation.206 | PerceptionResultCommon | ruleSetVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.206 | c10.disposition.004 | — | — | 20 |
| c10.validation.207 | PerceptionResultCommon | contractBundleReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.207 | c10.disposition.004 | — | — | 20 |
| c10.validation.208 | PerceptionResultCommon | vocabularyVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.208 | c10.disposition.004 | — | — | 20 |
| c10.validation.209 | PerceptionResultCommon | when its applicability condition is true, providerConfigurationVersionReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.209 | c10.disposition.004 | — | — | 20 |
| c10.validation.210 | PerceptionResultCommon | sealedAt is present, has type RFC3339 timestamp, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.210 | c10.disposition.004 | — | — | 20 |
| c10.validation.211 | PerceptionResultCommon | sealIntegrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.211 | c10.disposition.004 | — | — | 20 |
| c10.validation.212 | PerceptionResultCommon | when its applicability condition is true, predecessorResultReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.212 | c10.disposition.004 | — | — | 20 |
| c10.validation.213 | PerceptionResultCommon | resultId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.213 | c10.disposition.004 | — | — | 20 |
| c10.validation.214 | PerceptionResultCommon | resultRevisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.214 | c10.disposition.004 | — | — | 20 |
| c10.validation.220 | SceneResult | scene is present, has type StructuredSceneV0, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.220 | c10.disposition.004 | — | — | 20 |
| c10.validation.221 | SceneResult | completeness is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.221 | c10.disposition.004 | — | — | 20 |
| c10.validation.222 | SceneResult | evidenceArtifactReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.222 | c10.disposition.004 | — | — | 20 |
| c10.validation.230 | InsufficientEvidenceResult | reasonCategory is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.230 | c10.disposition.004 | — | — | 20 |
| c10.validation.231 | InsufficientEvidenceResult | recommendedNextAction is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.231 | c10.disposition.004 | — | — | 20 |
| c10.validation.240 | FailureResult | technicalReasonCategory is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.240 | c10.disposition.004 | — | c3.general.result_metadata | 20 |
| c10.validation.241 | FailureResult | retryability is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.241 | c10.disposition.004 | — | — | 20 |
| c10.validation.250 | RejectedResult | when its applicability condition is true, contractViolations satisfies type array<string>, cardinality 0..N, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.250 | c10.disposition.004 | — | — | 20 |
| c10.validation.251 | RejectedResult | when its applicability condition is true, inputSetId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.251 | c10.disposition.004 | — | — | 20 |
| c10.validation.252 | RejectedResult | rejectionStage is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.252 | c10.disposition.004 | — | — | 20 |
| c10.validation.253 | RejectedResult | when its applicability condition is true, rejectionContextReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.253 | c10.disposition.004 | — | — | 20 |
| c10.validation.260 | PerceptionOperationDiagnostics | diagnosticsId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.260 | c10.disposition.004 | — | — | 20 |
| c10.validation.261 | PerceptionOperationDiagnostics | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.261 | c10.disposition.004 | — | — | 20 |
| c10.validation.262 | PerceptionOperationDiagnostics | when its applicability condition is true, roomCaseId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.262 | c10.disposition.004 | — | — | 20 |
| c10.validation.263 | PerceptionOperationDiagnostics | stageEvents is present, has type array<StageEvent>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.263 | c10.disposition.004 | — | — | 20 |
| c10.validation.264 | StageEvent | stageIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.264 | c10.disposition.004 | — | — | 20 |
| c10.validation.265 | StageEvent | status is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.265 | c10.disposition.004 | — | — | 20 |
| c10.validation.266 | StageEvent | startedAt is present, has type RFC3339 timestamp, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.266 | c10.disposition.004 | — | — | 20 |
| c10.validation.267 | StageEvent | when its applicability condition is true, completedAt satisfies type RFC3339 timestamp, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.267 | c10.disposition.004 | — | — | 20 |
| c10.validation.268 | StageEvent | when its applicability condition is true, failureCode satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.268 | c10.disposition.004 | — | — | 20 |
| c10.validation.269 | PerceptionOperationDiagnostics | imageDiagnosticReferences is present, has type array<string>, cardinality 0..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.269 | c10.disposition.004 | — | — | 20 |
| c10.validation.270 | PerceptionOperationDiagnostics | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.270 | c10.disposition.004 | — | — | 20 |
| c10.validation.271 | PerceptionOperationDiagnostics | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.271 | c10.disposition.004 | — | — | 20 |
| c10.validation.272 | PerceptionOperationDiagnostics | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.272 | c10.disposition.004 | — | — | 20 |
| c10.validation.280 | ImageAssetProcessingDiagnostic | imageDiagnosticId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.280 | c10.disposition.004 | — | — | 20 |
| c10.validation.281 | ImageAssetProcessingDiagnostic | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.281 | c10.disposition.004 | — | — | 20 |
| c10.validation.282 | ImageAssetProcessingDiagnostic | imageAssetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.282 | c10.disposition.004 | — | — | 20 |
| c10.validation.283 | ImageAssetProcessingDiagnostic | processingStatus is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.283 | c10.disposition.004 | — | — | 20 |
| c10.validation.284 | ImageAssetProcessingDiagnostic | when its applicability condition is true, failureStage satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.284 | c10.disposition.004 | — | — | 20 |
| c10.validation.285 | ImageAssetProcessingDiagnostic | when its applicability condition is true, failureCode satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.285 | c10.disposition.004 | — | — | 20 |
| c10.validation.286 | ImageAssetProcessingDiagnostic | when its applicability condition is true, retryability satisfies type enum, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.286 | c10.disposition.004 | — | — | 20 |
| c10.validation.287 | ImageAssetProcessingDiagnostic | when its applicability condition is true, providerTraceReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.287 | c10.disposition.004 | — | — | 20 |
| c10.validation.288 | ImageAssetProcessingDiagnostic | when its applicability condition is true, preprocessingTraceReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.288 | c10.disposition.004 | — | — | 20 |
| c10.validation.289 | ImageAssetProcessingDiagnostic | evidenceAvailability is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.289 | c10.disposition.004 | — | — | 20 |
| c10.validation.290 | ImageAssetProcessingDiagnostic | when its applicability condition is true, excludedFromFusionReason satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.290 | c10.disposition.004 | — | — | 20 |
| c10.validation.291 | ImageAssetProcessingDiagnostic | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.291 | c10.disposition.004 | — | — | 20 |
| c10.validation.300 | PerceptionEvidenceArtifact | evidenceArtifactId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.300 | c10.disposition.004 | — | — | 20 |
| c10.validation.301 | PerceptionEvidenceArtifact | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.301 | c10.disposition.004 | — | — | 20 |
| c10.validation.302 | PerceptionEvidenceArtifact | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.302 | c10.disposition.004 | — | — | 20 |
| c10.validation.303 | PerceptionEvidenceArtifact | contributingImageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.303 | c10.disposition.004 | — | — | 20 |
| c10.validation.304 | PerceptionEvidenceArtifact | sceneReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.304 | c10.disposition.004 | — | — | 20 |
| c10.validation.305 | PerceptionEvidenceArtifact | groundingRecords is present, has type array<GroundingRecord>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.305 | c10.disposition.004 | — | — | 20 |
| c10.validation.306 | GroundingRecord | groundingRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.306 | c10.disposition.004 | — | — | 20 |
| c10.validation.307 | GroundingRecord | targetElementId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.307 | c10.disposition.004 | — | — | 20 |
| c10.validation.308 | GroundingRecord | imageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.308 | c10.disposition.004 | — | — | 20 |
| c10.validation.309 | GroundingRecord | evidenceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.309 | c10.disposition.004 | — | — | 20 |
| c10.validation.310 | GroundingRecord | evidenceType is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.310 | c10.disposition.004 | — | — | 20 |
| c10.validation.311 | GroundingRecord | when its applicability condition is true, confidenceAssertionReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.311 | c10.disposition.004 | — | — | 20 |
| c10.validation.312 | GroundingRecord | provenanceAttachmentReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.312 | c10.disposition.004 | — | — | 20 |
| c10.validation.313 | GroundingRecord | mechanismVersionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.313 | c10.disposition.004 | — | — | 20 |
| c10.validation.314 | GroundingRecord | when its applicability condition is true, promptVersionReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.314 | c10.disposition.004 | — | — | 20 |
| c10.validation.315 | GroundingRecord | when its applicability condition is true, preprocessingTransformReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.315 | c10.disposition.004 | — | — | 20 |
| c10.validation.316 | PerceptionEvidenceArtifact | provenanceAttachments is present, has type array<ProvenanceAttachmentRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.316 | c10.disposition.004 | — | — | 20 |
| c10.validation.317 | PerceptionEvidenceArtifact | bestEffortAssessments is present, has type array<BestEffortFieldAssessmentRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.317 | c10.disposition.004 | — | — | 20 |
| c10.validation.318 | PerceptionEvidenceArtifact | attributeEvidenceArtifacts is present, has type array<AttributeEvidenceArtifact>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.318 | c10.disposition.004 | — | — | 20 |
| c10.validation.319 | PerceptionEvidenceArtifact | evidenceSets is present, has type array<EvidenceSetRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.319 | c10.disposition.004 | — | — | 20 |
| c10.validation.320 | PerceptionEvidenceArtifact | determinabilityBasisRecords is present, has type array<DeterminabilityEvidenceBasisRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.320 | c10.disposition.004 | — | — | 20 |
| c10.validation.321 | PerceptionEvidenceArtifact | confidenceAssertions is present, has type array<ConfidenceAssertionRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.321 | c10.disposition.004 | — | — | 20 |
| c10.validation.322 | PerceptionEvidenceArtifact | when its applicability condition is true, contract6PackageReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.322 | c10.disposition.004 | — | — | 20 |
| c10.validation.323 | PerceptionEvidenceArtifact | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.323 | c10.disposition.004 | — | — | 20 |
| c10.validation.324 | PerceptionEvidenceArtifact | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.324 | c10.disposition.004 | — | — | 20 |
| c10.validation.325 | PerceptionEvidenceArtifact | bestEffortValues is present, has type array<BestEffortValueRevision>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.325 | c10.disposition.004 | — | — | 20 |
| c10.validation.326 | PerceptionEvidenceArtifact | confidenceSourceSignals is present, has type array<ConfidenceSourceSignalRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.326 | c10.disposition.004 | — | — | 20 |
| c10.validation.327 | PerceptionEvidenceArtifact | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.327 | c10.disposition.004 | — | — | 20 |
| c10.validation.330 | ProvenanceAttachmentRecord | provenanceAttachmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.330 | c10.disposition.004 | — | — | 20 |
| c10.validation.331 | ProvenanceAttachmentRecord | targetAnnotationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.331 | c10.disposition.004 | — | — | 20 |
| c10.validation.332 | ProvenanceAttachmentRecord | targetKind is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.332 | c10.disposition.004 | — | — | 20 |
| c10.validation.333 | ProvenanceAttachmentRecord | provenanceIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.333 | c10.disposition.004 | — | — | 20 |
| c10.validation.334 | ProvenanceAttachmentRecord | producingStageIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.334 | c10.disposition.004 | — | — | 20 |
| c10.validation.335 | ProvenanceAttachmentRecord | when its applicability condition is true, producerIdentityAndVersions satisfies type array<string>, cardinality required for deterministic-derived, heuristic-inferred or provider-inferred provenance; absent or empty only when Contract 4 permits visually-observed provenance, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.335 | c10.disposition.004 | — | — | 20 |
| c10.validation.336 | ProvenanceAttachmentRecord | when its applicability condition is true, parentEvidenceOrValueIds satisfies type array<string>, cardinality 0..N, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.336 | c10.disposition.004 | — | — | 20 |
| c10.validation.337 | ProvenanceAttachmentRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.337 | c10.disposition.004 | — | — | 20 |
| c10.validation.338 | ProvenanceAttachmentRecord | contractSemanticVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.338 | c10.disposition.004 | — | — | 20 |
| c10.validation.339 | ProvenanceAttachmentRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.339 | c10.disposition.004 | — | — | 20 |
| c10.validation.340 | ProvenanceAttachmentRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.340 | c10.disposition.004 | — | — | 20 |
| c10.validation.341 | ProvenanceAttachmentRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.341 | c10.disposition.004 | — | — | 20 |
| c10.validation.350 | BestEffortFieldAssessmentRecord | assessmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.350 | c10.disposition.004 | — | — | 20 |
| c10.validation.351 | BestEffortFieldAssessmentRecord | fieldIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.351 | c10.disposition.004 | — | — | 20 |
| c10.validation.352 | BestEffortFieldAssessmentRecord | capabilityIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.352 | c10.disposition.004 | — | — | 20 |
| c10.validation.353 | BestEffortFieldAssessmentRecord | ownerId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.353 | c10.disposition.004 | — | — | 20 |
| c10.validation.354 | BestEffortFieldAssessmentRecord | ownerKind is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.354 | c10.disposition.004 | — | — | 20 |
| c10.validation.355 | BestEffortFieldAssessmentRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.355 | c10.disposition.004 | — | — | 20 |
| c10.validation.356 | BestEffortFieldAssessmentRecord | linkedValueIds is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.356 | c10.disposition.004 | — | — | 20 |
| c10.validation.357 | BestEffortFieldAssessmentRecord | determinabilityBasisRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.357 | c10.disposition.004 | — | — | 20 |
| c10.validation.358 | BestEffortFieldAssessmentRecord | contractSemanticVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.358 | c10.disposition.004 | — | — | 20 |
| c10.validation.359 | BestEffortFieldAssessmentRecord | producingStageIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.359 | c10.disposition.004 | — | — | 20 |
| c10.validation.360 | BestEffortFieldAssessmentRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.360 | c10.disposition.004 | — | — | 20 |
| c10.validation.361 | BestEffortFieldAssessmentRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.361 | c10.disposition.004 | — | — | 20 |
| c10.validation.362 | BestEffortFieldAssessmentRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.362 | c10.disposition.004 | — | — | 20 |
| c10.validation.370 | AttributeEvidenceArtifact | attributeEvidenceArtifactId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.370 | c10.disposition.004 | — | — | 20 |
| c10.validation.371 | AttributeEvidenceArtifact | fieldAssessmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.371 | c10.disposition.004 | — | — | 20 |
| c10.validation.372 | AttributeEvidenceArtifact | bestEffortValueId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.372 | c10.disposition.004 | — | — | 20 |
| c10.validation.373 | AttributeEvidenceArtifact | ownerId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.373 | c10.disposition.004 | — | — | 20 |
| c10.validation.374 | AttributeEvidenceArtifact | evidenceKindIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.374 | c10.disposition.004 | — | — | 20 |
| c10.validation.375 | AttributeEvidenceArtifact | provenanceAttachmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.375 | c10.disposition.004 | — | — | 20 |
| c10.validation.376 | AttributeEvidenceArtifact | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.376 | c10.disposition.004 | — | — | 20 |
| c10.validation.377 | AttributeEvidenceArtifact | atomicContributions is present, has type array<AtomicEvidenceContribution>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.377 | c10.disposition.004 | — | — | 20 |
| c10.validation.378 | AttributeEvidenceArtifact | producingStageIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.378 | c10.disposition.004 | — | — | 20 |
| c10.validation.379 | AttributeEvidenceArtifact | when its applicability condition is true, producerIdentityAndVersions satisfies type array<string>, cardinality required for deterministic-derived, heuristic-inferred or provider-inferred provenance; absent or empty only when Contract 4 permits visually-observed provenance, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.379 | c10.disposition.004 | — | — | 20 |
| c10.validation.380 | AttributeEvidenceArtifact | when its applicability condition is true, derivationParentIds satisfies type array<string>, cardinality 0..N, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.380 | c10.disposition.004 | — | — | 20 |
| c10.validation.381 | AttributeEvidenceArtifact | contractSemanticVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.381 | c10.disposition.004 | — | — | 20 |
| c10.validation.382 | AttributeEvidenceArtifact | serializationSchemaReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.382 | c10.disposition.004 | — | — | 20 |
| c10.validation.383 | AttributeEvidenceArtifact | reasonOrTraceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.383 | c10.disposition.004 | — | — | 20 |
| c10.validation.384 | AttributeEvidenceArtifact | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.384 | c10.disposition.004 | — | — | 20 |
| c10.validation.385 | AttributeEvidenceArtifact | dataUseEligibilityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.385 | c10.disposition.004 | — | — | 20 |
| c10.validation.386 | AttributeEvidenceArtifact | consentEligibilityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.386 | c10.disposition.004 | — | — | 20 |
| c10.validation.387 | AttributeEvidenceArtifact | authorizationStateReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.387 | c10.disposition.004 | — | — | 20 |
| c10.validation.388 | AttributeEvidenceArtifact | retentionDeletionPolicyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.388 | c10.disposition.004 | — | — | 20 |
| c10.validation.389 | AttributeEvidenceArtifact | safeFailureReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.389 | c10.disposition.004 | — | — | 20 |
| c10.validation.390 | AttributeEvidenceArtifact | tamperEvidentHistoryReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.390 | c10.disposition.004 | — | — | 20 |
| c10.validation.391 | AttributeEvidenceArtifact | when its applicability condition is true, futureFeedbackLinkReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.391 | c10.disposition.004 | — | — | 20 |
| c10.validation.392 | AttributeEvidenceArtifact | noRegressionEvaluationReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.392 | c10.disposition.004 | — | — | 20 |
| c10.validation.393 | AttributeEvidenceArtifact | rollbackCompatibilityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.393 | c10.disposition.004 | — | — | 20 |
| c10.validation.394 | AttributeEvidenceArtifact | when its applicability condition is true, predecessorArtifactId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.394 | c10.disposition.004 | — | — | 20 |
| c10.validation.395 | AttributeEvidenceArtifact | artifactRevisionState is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.395 | c10.disposition.004 | — | — | 20 |
| c10.validation.400 | AtomicEvidenceContribution | contributionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.400 | c10.disposition.004 | — | — | 20 |
| c10.validation.401 | AtomicEvidenceContribution | imageAssetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.401 | c10.disposition.004 | — | — | 20 |
| c10.validation.402 | AtomicEvidenceContribution | sourceAssetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.402 | c10.disposition.004 | — | — | 20 |
| c10.validation.403 | AtomicEvidenceContribution | locatorOrInferenceBasisReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.403 | c10.disposition.004 | — | — | 20 |
| c10.validation.404 | AtomicEvidenceContribution | when its applicability condition is true, preprocessingLineageReference satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.404 | c10.disposition.004 | — | — | 20 |
| c10.validation.405 | AtomicEvidenceContribution | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.405 | c10.disposition.004 | — | — | 20 |
| c10.validation.406 | AtomicEvidenceContribution | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.406 | c10.disposition.004 | — | — | 20 |
| c10.validation.407 | AtomicEvidenceContribution | producingStageVersionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.407 | c10.disposition.004 | — | — | 20 |
| c10.validation.410 | EvidenceSetRecord | evidenceSetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.410 | c10.disposition.004 | — | — | 20 |
| c10.validation.411 | EvidenceSetRecord | targetKind is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.411 | c10.disposition.004 | — | — | 20 |
| c10.validation.412 | EvidenceSetRecord | fieldAssessmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.412 | c10.disposition.004 | — | — | 20 |
| c10.validation.413 | EvidenceSetRecord | when its applicability condition is true, bestEffortValueId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.413 | c10.disposition.004 | — | — | 20 |
| c10.validation.414 | EvidenceSetRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.414 | c10.disposition.004 | — | — | 20 |
| c10.validation.415 | EvidenceSetRecord | contributionIds is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.415 | c10.disposition.004 | — | — | 20 |
| c10.validation.416 | EvidenceSetRecord | distinctImageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.416 | c10.disposition.004 | — | — | 20 |
| c10.validation.417 | EvidenceSetRecord | fusionOperationIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.417 | c10.disposition.004 | — | — | 20 |
| c10.validation.418 | EvidenceSetRecord | fusionOperationVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.418 | c10.disposition.004 | — | — | 20 |
| c10.validation.419 | EvidenceSetRecord | fingerprintRuleIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.419 | c10.disposition.004 | — | — | 20 |
| c10.validation.420 | EvidenceSetRecord | relationshipRecords is present, has type array<EvidenceRelationshipRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.420 | c10.disposition.004 | — | — | 20 |
| c10.validation.421 | EvidenceSetRecord | contradictionReferences is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.421 | c10.disposition.004 | — | — | 20 |
| c10.validation.422 | EvidenceSetRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.422 | c10.disposition.004 | — | — | 20 |
| c10.validation.423 | EvidenceSetRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.423 | c10.disposition.004 | — | — | 20 |
| c10.validation.430 | DeterminabilityEvidenceBasisRecord | determinabilityBasisRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.430 | c10.disposition.004 | — | — | 20 |
| c10.validation.431 | DeterminabilityEvidenceBasisRecord | fieldAssessmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.431 | c10.disposition.004 | — | — | 20 |
| c10.validation.432 | DeterminabilityEvidenceBasisRecord | linkedBestEffortValueIds is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.432 | c10.disposition.004 | — | — | 20 |
| c10.validation.433 | DeterminabilityEvidenceBasisRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.433 | c10.disposition.004 | — | — | 20 |
| c10.validation.434 | DeterminabilityEvidenceBasisRecord | basisIdentities is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.434 | c10.disposition.004 | — | — | 20 |
| c10.validation.435 | DeterminabilityEvidenceBasisRecord | linkedAttributeEvidenceArtifactIds is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.435 | c10.disposition.004 | — | — | 20 |
| c10.validation.436 | DeterminabilityEvidenceBasisRecord | linkedEvidenceSetIds is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.436 | c10.disposition.004 | — | — | 20 |
| c10.validation.437 | DeterminabilityEvidenceBasisRecord | linkedFailureIds is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.437 | c10.disposition.004 | — | — | 20 |
| c10.validation.438 | DeterminabilityEvidenceBasisRecord | contractSemanticVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.438 | c10.disposition.004 | — | — | 20 |
| c10.validation.439 | DeterminabilityEvidenceBasisRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.439 | c10.disposition.004 | — | — | 20 |
| c10.validation.440 | DeterminabilityEvidenceBasisRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.440 | c10.disposition.004 | — | — | 20 |
| c10.validation.441 | DeterminabilityEvidenceBasisRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.441 | c10.disposition.004 | — | — | 20 |
| c10.validation.450 | EvidenceRelationshipRecord | relationshipRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.450 | c10.disposition.004 | — | — | 20 |
| c10.validation.451 | EvidenceRelationshipRecord | evidenceSetId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.451 | c10.disposition.004 | — | — | 20 |
| c10.validation.452 | EvidenceRelationshipRecord | relationshipIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.452 | c10.disposition.004 | — | — | 20 |
| c10.validation.453 | EvidenceRelationshipRecord | subjectKindIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.453 | c10.disposition.004 | — | — | 20 |
| c10.validation.454 | EvidenceRelationshipRecord | subjectIds is present, has type array<string>, cardinality 1..N condition-dependent, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.454 | c10.disposition.004 | — | — | 20 |
| c10.validation.455 | EvidenceRelationshipRecord | when its applicability condition is true, aspectIdentity satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.455 | c10.disposition.004 | — | — | 20 |
| c10.validation.456 | EvidenceRelationshipRecord | producingRuleAndVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.456 | c10.disposition.004 | — | — | 20 |
| c10.validation.457 | EvidenceRelationshipRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.457 | c10.disposition.004 | — | — | 20 |
| c10.validation.458 | EvidenceRelationshipRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.458 | c10.disposition.004 | — | — | 20 |
| c10.validation.459 | EvidenceRelationshipRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.459 | c10.disposition.004 | — | — | 20 |
| c10.validation.460 | BestEffortValueRevision | bestEffortValueId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.460 | c10.disposition.004 | — | — | 20 |
| c10.validation.461 | BestEffortValueRevision | fieldAssessmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.461 | c10.disposition.004 | — | — | 20 |
| c10.validation.462 | BestEffortValueRevision | valueElementIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.462 | c10.disposition.004 | — | — | 20 |
| c10.validation.463 | BestEffortValueRevision | valueRevisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.463 | c10.disposition.004 | — | — | 20 |
| c10.validation.464 | BestEffortValueRevision | valuePayload is present, has type JSON value or governed reference, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.464 | c10.disposition.004 | — | — | 20 |
| c10.validation.465 | BestEffortValueRevision | provenanceAttachmentId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.465 | c10.disposition.004 | — | — | 20 |
| c10.validation.466 | BestEffortValueRevision | when its applicability condition is true, predecessorValueId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.466 | c10.disposition.004 | — | — | 20 |
| c10.validation.467 | BestEffortValueRevision | revisionState is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.467 | c10.disposition.004 | — | — | 20 |
| c10.validation.468 | BestEffortValueRevision | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.468 | c10.disposition.004 | — | — | 20 |
| c10.validation.469 | BestEffortValueRevision | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.469 | c10.disposition.004 | — | — | 20 |
| c10.validation.500 | ConfidenceAssertionRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.500 | c10.disposition.004 | — | — | 20 |
| c10.validation.501 | ConfidenceAssertionRecord | confidenceAssertionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.501 | c10.disposition.004 | — | — | 20 |
| c10.validation.502 | ConfidenceAssertionRecord | subjectId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.502 | c10.disposition.004 | — | — | 20 |
| c10.validation.503 | ConfidenceAssertionRecord | subjectKindIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.503 | c10.disposition.004 | — | — | 20 |
| c10.validation.504 | ConfidenceAssertionRecord | stateIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.504 | c10.disposition.004 | — | — | 20 |
| c10.validation.505 | ConfidenceAssertionRecord | sourceIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.505 | c10.disposition.004 | — | — | 20 |
| c10.validation.506 | ConfidenceAssertionRecord | transformationIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.506 | c10.disposition.004 | — | — | 20 |
| c10.validation.507 | ConfidenceAssertionRecord | signalTypeIdentities is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.507 | c10.disposition.004 | — | — | 20 |
| c10.validation.508 | ConfidenceAssertionRecord | when its applicability condition is true, sourceSignalIds satisfies type array<string>, cardinality 1..N for non-missing confidence; 0 for Contract-5 missing-source state, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.508 | c10.disposition.004 | — | — | 20 |
| c10.validation.509 | ConfidenceAssertionRecord | when its applicability condition is true, generationMethodId satisfies type string, cardinality exactly 1 for every non-missing assertion; 0 only when sourceIdentity=c5.source.003, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.509 | c10.disposition.004 | — | — | 20 |
| c10.validation.510 | ConfidenceAssertionRecord | when its applicability condition is true, normalizationProfileId satisfies type string, cardinality exactly 1 iff transformationIdentity=c5.transformation.002; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.510 | c10.disposition.004 | — | — | 20 |
| c10.validation.511 | ConfidenceAssertionRecord | when its applicability condition is true, mappingRuleId satisfies type string, cardinality exactly 1 iff a normalization profile maps an input signal to stateIdentity; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.511 | c10.disposition.004 | — | — | 20 |
| c10.validation.512 | ConfidenceAssertionRecord | when its applicability condition is true, producerIdentityAndVersions satisfies type array<string>, cardinality required when source/transformation semantics require a producer, provider, rule, method or configuration identity, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.512 | c10.disposition.004 | — | — | 20 |
| c10.validation.513 | ConfidenceAssertionRecord | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.513 | c10.disposition.004 | — | — | 20 |
| c10.validation.514 | ConfidenceAssertionRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.514 | c10.disposition.004 | — | — | 20 |
| c10.validation.515 | ConfidenceAssertionRecord | producingStageIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.515 | c10.disposition.004 | — | — | 20 |
| c10.validation.516 | ConfidenceAssertionRecord | contractSemanticVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.516 | c10.disposition.004 | — | — | 20 |
| c10.validation.517 | ConfidenceAssertionRecord | assertionRevisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.517 | c10.disposition.004 | — | — | 20 |
| c10.validation.518 | ConfidenceAssertionRecord | when its applicability condition is true, predecessorAssertionId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.518 | c10.disposition.004 | — | — | 20 |
| c10.validation.519 | ConfidenceAssertionRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.519 | c10.disposition.004 | — | — | 20 |
| c10.validation.520 | ConfidenceAssertionRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.520 | c10.disposition.004 | — | — | 20 |
| c10.validation.521 | ConfidenceAssertionRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.521 | c10.disposition.004 | — | — | 20 |
| c10.validation.530 | ConfidenceSourceSignalRecord | sourceSignalId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.530 | c10.disposition.004 | — | — | 20 |
| c10.validation.531 | ConfidenceSourceSignalRecord | sourceIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.531 | c10.disposition.004 | — | — | 20 |
| c10.validation.532 | ConfidenceSourceSignalRecord | signalTypeIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.532 | c10.disposition.004 | — | — | 20 |
| c10.validation.533 | ConfidenceSourceSignalRecord | generationMethodId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.533 | c10.disposition.004 | — | — | 20 |
| c10.validation.534 | ConfidenceSourceSignalRecord | originalRawTypeDomain is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.534 | c10.disposition.004 | — | — | 20 |
| c10.validation.535 | ConfidenceSourceSignalRecord | rawSignalOrUnavailabilityReason is present, has type JSON value or string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.535 | c10.disposition.004 | — | — | 20 |
| c10.validation.536 | ConfidenceSourceSignalRecord | producerIdentityAndVersions is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.536 | c10.disposition.004 | — | — | 20 |
| c10.validation.537 | ConfidenceSourceSignalRecord | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.537 | c10.disposition.004 | — | — | 20 |
| c10.validation.538 | ConfidenceSourceSignalRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.538 | c10.disposition.004 | — | — | 20 |
| c10.validation.539 | ConfidenceSourceSignalRecord | contributingImageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.539 | c10.disposition.004 | — | — | 20 |
| c10.validation.540 | ConfidenceSourceSignalRecord | producingStageIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.540 | c10.disposition.004 | — | — | 20 |
| c10.validation.541 | ConfidenceSourceSignalRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.541 | c10.disposition.004 | — | — | 20 |
| c10.validation.542 | ConfidenceSourceSignalRecord | revisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.542 | c10.disposition.004 | — | — | 20 |
| c10.validation.600 | Contract6DeterminabilityPackage | packageId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.600 | c10.disposition.004 | — | — | 20 |
| c10.validation.601 | Contract6DeterminabilityPackage | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.601 | c10.disposition.004 | — | — | 20 |
| c10.validation.602 | Contract6DeterminabilityPackage | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.602 | c10.disposition.004 | — | — | 20 |
| c10.validation.603 | Contract6DeterminabilityPackage | annotationUnits is present, has type array<AnnotationUnitRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.603 | c10.disposition.004 | — | — | 20 |
| c10.validation.604 | Contract6DeterminabilityPackage | pairingRecords is present, has type array<PairingRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.604 | c10.disposition.004 | — | — | 20 |
| c10.validation.605 | Contract6DeterminabilityPackage | basisLinkRecords is present, has type array<BasisLinkRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.605 | c10.disposition.004 | — | — | 20 |
| c10.validation.606 | Contract6DeterminabilityPackage | outcomeDecisionRecords is present, has type array<OutcomeDecisionRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.606 | c10.disposition.004 | — | — | 20 |
| c10.validation.607 | Contract6DeterminabilityPackage | sealingRecords is present, has type array<Contract6SealingRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.607 | c10.disposition.004 | — | — | 20 |
| c10.validation.608 | Contract6DeterminabilityPackage | adjudicationRecords is present, has type array<AdjudicationRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.608 | c10.disposition.004 | — | — | 20 |
| c10.validation.609 | Contract6DeterminabilityPackage | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.609 | c10.disposition.004 | — | — | 20 |
| c10.validation.610 | AnnotationUnitRecord | annotationUnitId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.610 | c10.disposition.004 | — | — | 20 |
| c10.validation.611 | AnnotationUnitRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.611 | c10.disposition.004 | — | — | 20 |
| c10.validation.612 | AnnotationUnitRecord | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.612 | c10.disposition.004 | — | — | 20 |
| c10.validation.613 | AnnotationUnitRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.613 | c10.disposition.004 | — | — | 20 |
| c10.validation.614 | AnnotationUnitRecord | subjectId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.614 | c10.disposition.004 | — | — | 20 |
| c10.validation.615 | AnnotationUnitRecord | subjectKindIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.615 | c10.disposition.004 | — | — | 20 |
| c10.validation.616 | AnnotationUnitRecord | unitTypeIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.616 | c10.disposition.004 | — | — | 20 |
| c10.validation.617 | AnnotationUnitRecord | unitGranularityIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.617 | c10.disposition.004 | — | — | 20 |
| c10.validation.618 | AnnotationUnitRecord | viewScopeIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.618 | c10.disposition.004 | — | — | 20 |
| c10.validation.619 | AnnotationUnitRecord | when its applicability condition is true, importedSemanticIds satisfies type array<string>, cardinality 1..N exactly when unitTypeIdentity requires imported subtype candidates, confidence assertions, provenance attachments, field assessments or value identities; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.619 | c10.disposition.004 | — | — | 20 |
| c10.validation.620 | AnnotationUnitRecord | when its applicability condition is true, memberId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.620 | c10.disposition.004 | — | — | 20 |
| c10.validation.621 | AnnotationUnitRecord | revisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.621 | c10.disposition.004 | — | — | 20 |
| c10.validation.622 | AnnotationUnitRecord | when its applicability condition is true, predecessorAnnotationUnitId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.622 | c10.disposition.004 | — | — | 20 |
| c10.validation.623 | AnnotationUnitRecord | basisLinkRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.623 | c10.disposition.004 | — | — | 20 |
| c10.validation.624 | AnnotationUnitRecord | pairingRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.624 | c10.disposition.004 | — | — | 20 |
| c10.validation.625 | AnnotationUnitRecord | when its applicability condition is true, outcomeDecisionRecordId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.625 | c10.disposition.004 | — | — | 20 |
| c10.validation.626 | AnnotationUnitRecord | when its applicability condition is true, sealingRecordId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.626 | c10.disposition.004 | — | — | 20 |
| c10.validation.627 | AnnotationUnitRecord | when its applicability condition is true, adjudicationRecordId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.627 | c10.disposition.004 | — | — | 20 |
| c10.validation.628 | AnnotationUnitRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.628 | c10.disposition.004 | — | — | 20 |
| c10.validation.629 | AnnotationUnitRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.629 | c10.disposition.004 | — | — | 20 |
| c10.validation.630 | AnnotationUnitRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.630 | c10.disposition.004 | — | — | 20 |
| c10.validation.640 | PairingRecord | pairingRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.640 | c10.disposition.004 | — | — | 20 |
| c10.validation.641 | PairingRecord | annotationUnitId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.641 | c10.disposition.004 | — | — | 20 |
| c10.validation.642 | PairingRecord | pairingRuleIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.642 | c10.disposition.004 | — | — | 20 |
| c10.validation.643 | PairingRecord | pairingStateIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.643 | c10.disposition.004 | — | — | 20 |
| c10.validation.644 | PairingRecord | participantIds is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.644 | c10.disposition.004 | — | — | 20 |
| c10.validation.645 | PairingRecord | identityEqualityResults is present, has type array<boolean>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.645 | c10.disposition.004 | — | — | 20 |
| c10.validation.646 | PairingRecord | duplicateNormalizationReferences is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.646 | c10.disposition.004 | — | — | 20 |
| c10.validation.647 | PairingRecord | conflictReferences is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.647 | c10.disposition.004 | — | — | 20 |
| c10.validation.648 | PairingRecord | revisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.648 | c10.disposition.004 | — | — | 20 |
| c10.validation.649 | PairingRecord | when its applicability condition is true, predecessorPairingRecordId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.649 | c10.disposition.004 | — | — | 20 |
| c10.validation.650 | PairingRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.650 | c10.disposition.004 | — | — | 20 |
| c10.validation.651 | PairingRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.651 | c10.disposition.004 | — | — | 20 |
| c10.validation.652 | PairingRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.652 | c10.disposition.004 | — | — | 20 |
| c10.validation.655 | Contract6DeterminabilityPackage | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.655 | c10.disposition.004 | — | — | 20 |
| c10.validation.660 | BasisLinkRecord | basisLinkRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.660 | c10.disposition.004 | — | — | 20 |
| c10.validation.661 | BasisLinkRecord | annotationUnitId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.661 | c10.disposition.004 | — | — | 20 |
| c10.validation.662 | BasisLinkRecord | basisIdentities is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.662 | c10.disposition.004 | — | — | 20 |
| c10.validation.663 | BasisLinkRecord | evidenceReferences is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.663 | c10.disposition.004 | — | — | 20 |
| c10.validation.664 | BasisLinkRecord | revisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.664 | c10.disposition.004 | — | — | 20 |
| c10.validation.665 | BasisLinkRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.665 | c10.disposition.004 | — | — | 20 |
| c10.validation.666 | BasisLinkRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.666 | c10.disposition.004 | — | — | 20 |
| c10.validation.667 | BasisLinkRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.667 | c10.disposition.004 | — | — | 20 |
| c10.validation.670 | OutcomeDecisionRecord | outcomeDecisionRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.670 | c10.disposition.004 | — | — | 20 |
| c10.validation.671 | OutcomeDecisionRecord | annotationUnitId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.671 | c10.disposition.004 | — | — | 20 |
| c10.validation.672 | OutcomeDecisionRecord | outcomeIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.672 | c10.disposition.004 | — | — | 20 |
| c10.validation.673 | OutcomeDecisionRecord | derivationOrAdjudicationBasisReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.673 | c10.disposition.004 | — | — | 20 |
| c10.validation.674 | OutcomeDecisionRecord | revisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.674 | c10.disposition.004 | — | — | 20 |
| c10.validation.675 | OutcomeDecisionRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.675 | c10.disposition.004 | — | — | 20 |
| c10.validation.676 | OutcomeDecisionRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.676 | c10.disposition.004 | — | — | 20 |
| c10.validation.677 | OutcomeDecisionRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.677 | c10.disposition.004 | — | — | 20 |
| c10.validation.680 | Contract6SealingRecord | sealingRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.680 | c10.disposition.004 | — | — | 20 |
| c10.validation.681 | Contract6SealingRecord | annotationUnitId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.681 | c10.disposition.004 | — | — | 20 |
| c10.validation.682 | Contract6SealingRecord | lifecycleTransitionIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.682 | c10.disposition.004 | — | — | 20 |
| c10.validation.683 | Contract6SealingRecord | authorityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.683 | c10.disposition.004 | — | — | 20 |
| c10.validation.684 | Contract6SealingRecord | sealedRevisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.684 | c10.disposition.004 | — | — | 20 |
| c10.validation.685 | Contract6SealingRecord | when its applicability condition is true, predecessorSealingRecordId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.685 | c10.disposition.004 | — | — | 20 |
| c10.validation.686 | Contract6SealingRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.686 | c10.disposition.004 | — | — | 20 |
| c10.validation.687 | Contract6SealingRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.687 | c10.disposition.004 | — | — | 20 |
| c10.validation.690 | AdjudicationRecord | adjudicationRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.690 | c10.disposition.004 | — | — | 20 |
| c10.validation.691 | AdjudicationRecord | annotationUnitId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.691 | c10.disposition.004 | — | — | 20 |
| c10.validation.692 | AdjudicationRecord | triggerIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.692 | c10.disposition.004 | — | — | 20 |
| c10.validation.693 | AdjudicationRecord | retainedBasisReferences is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.693 | c10.disposition.004 | — | — | 20 |
| c10.validation.694 | AdjudicationRecord | rationaleReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.694 | c10.disposition.004 | — | — | 20 |
| c10.validation.695 | AdjudicationRecord | authorityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.695 | c10.disposition.004 | — | — | 20 |
| c10.validation.696 | AdjudicationRecord | dispositionIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.696 | c10.disposition.004 | — | — | 20 |
| c10.validation.697 | AdjudicationRecord | revisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.697 | c10.disposition.004 | — | — | 20 |
| c10.validation.698 | AdjudicationRecord | when its applicability condition is true, predecessorAdjudicationRecordId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.698 | c10.disposition.004 | — | — | 20 |
| c10.validation.699 | AdjudicationRecord | integrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.699 | c10.disposition.004 | — | — | 20 |
| c10.validation.700 | AdjudicationRecord | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.700 | c10.disposition.004 | — | — | 20 |
| c10.validation.704 | Contract8EvaluationPackage | packageId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.704 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.705 | Contract8EvaluationPackage | evaluationConfigurationReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.705 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.706 | Contract8EvaluationPackage | rawAssertions is present, has type array<RawMechanismAssertionArtifact>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.706 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.707 | Contract8EvaluationPackage | projectionFacts is present, has type array<ETAPAssertionProjectionFact>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.707 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.708 | Contract8EvaluationPackage | records is present, has type array<C8EvaluationRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.708 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.709 | Contract8EvaluationPackage | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.709 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.710 | RawMechanismAssertionArtifact | rawAssertionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.710 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.711 | RawMechanismAssertionArtifact | untouchedPayloadReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.711 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.712 | RawMechanismAssertionArtifact | semanticCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.712 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.713 | RawMechanismAssertionArtifact | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.713 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.714 | RawMechanismAssertionArtifact | contributingImageAssetIds is present, has type array<string>, cardinality 1..6, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.714 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.715 | RawMechanismAssertionArtifact | when its applicability condition is true, rawEmittedCode satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.715 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.716 | RawMechanismAssertionArtifact | when its applicability condition is true, rawSubject satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.716 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.717 | RawMechanismAssertionArtifact | when its applicability condition is true, rawTarget satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.717 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.718 | RawMechanismAssertionArtifact | when its applicability condition is true, rawLocus satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.718 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.719 | RawMechanismAssertionArtifact | when its applicability condition is true, providerConfigurationReference satisfies type string, cardinality exactly 1 iff output was generated by a concrete provider/mechanism configuration; otherwise 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.719 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.720 | RawMechanismAssertionArtifact | evaluationConfigurationReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.720 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.721 | RawMechanismAssertionArtifact | normalizationStatus is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.721 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.722 | RawMechanismAssertionArtifact | when its applicability condition is true, producedNormalizedClaimLinks satisfies type array<string>, cardinality normalizationStatus .001 or .002: 1..N; status .003: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.722 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.723 | RawMechanismAssertionArtifact | when its applicability condition is true, rawMalformedComparisonLink satisfies type string, cardinality normalizationStatus .001: 0 and prohibited; status .002 or .003: exactly 1 carrying c8.comparisonresult.016, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.723 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.724 | RawMechanismAssertionArtifact | when its applicability condition is true, assertionProjectionFactId satisfies type string, cardinality 0..1 while pre-final blocked; exactly 1 after valid finalization, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.724 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.725 | RawMechanismAssertionArtifact | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.725 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.730 | ETAPAssertionProjectionFact | projectionFactId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.730 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.731 | ETAPAssertionProjectionFact | rawAssertionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.731 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.732 | ETAPAssertionProjectionFact | normalizedProducedClaimLinks is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.732 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.733 | ETAPAssertionProjectionFact | atomicComparisonLinks is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.733 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.734 | ETAPAssertionProjectionFact | when its applicability condition is true, rawMalformedComparisonLink satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.734 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.735 | ETAPAssertionProjectionFact | projectionResult is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.735 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.736 | ETAPAssertionProjectionFact | versionConfigurationBundle is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.736 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.737 | ETAPAssertionProjectionFact | etapConsumptionState is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.737 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.740 | C8EvaluationRecord | recordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.740 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.741 | C8EvaluationRecord | recordTypeIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.741 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.742 | C8EvaluationRecord | semanticCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.742 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.743 | C8EvaluationRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.743 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.744 | C8EvaluationRecord | when its applicability condition is true, claimCodeIdentity satisfies type string, cardinality record types .001-.003: exactly 1; .004: 0..1 only when safely assignable; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.744 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.745 | C8EvaluationRecord | when its applicability condition is true, dispositionIdentity satisfies type string, cardinality record types .001-.003: exactly 1; .004: 0..1 only when a governed claim code exists; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.745 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.746 | C8EvaluationRecord | when its applicability condition is true, requirementLevelIdentity satisfies type string, cardinality record type .001: exactly c8.requirementlevel.001; .002: exactly c8.requirementlevel.002; .003-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.746 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.747 | C8EvaluationRecord | when its applicability condition is true, assertionScopeIdentity satisfies type string, cardinality record types .001-.003: exactly 1; .004: 0..1 only when a governed claim code exists; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.747 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.748 | C8EvaluationRecord | when its applicability condition is true, subject satisfies type string, cardinality record types .001-.004: exactly 1 iff the selected claim code requires subject; otherwise 0; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.748 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.749 | C8EvaluationRecord | when its applicability condition is true, target satisfies type string, cardinality record types .001-.004: exactly 1 iff the selected claim code requires target/complement; otherwise 0; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.749 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.750 | C8EvaluationRecord | when its applicability condition is true, locus satisfies type string, cardinality record types .001-.004: exactly 1 iff the selected claim code requires locus; diagnostic-only values permitted for case-scope prohibition matching; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.750 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.751 | C8EvaluationRecord | when its applicability condition is true, expectedState satisfies type enum, cardinality record types .001-.002: exactly 1; .003-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.751 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.752 | C8EvaluationRecord | when its applicability condition is true, rawAssertionId satisfies type string, cardinality record type .003: exactly 1; all other record types: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.752 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.753 | C8EvaluationRecord | when its applicability condition is true, normalizationTransformationId satisfies type string, cardinality record type .003: exactly 1; all other record types: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.753 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.754 | C8EvaluationRecord | when its applicability condition is true, normalizedAtomicInterpretationId satisfies type string, cardinality record type .003: exactly 1; all other record types: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.754 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.755 | C8EvaluationRecord | when its applicability condition is true, expectationOrProhibitionRecordId satisfies type string, cardinality record type .004: 0..1; required for expectation/prohibition comparison and absent for unmatched-produced or raw-malformed comparison; all other types: prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.755 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.756 | C8EvaluationRecord | when its applicability condition is true, matchedProducedRecordId satisfies type string, cardinality record type .004: 0..1; all other types: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.756 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.757 | C8EvaluationRecord | when its applicability condition is true, rawAssertionDefectLink satisfies type string, cardinality record type .004: exactly 1 iff primary result is c8.comparisonresult.016; otherwise 0; all other types: prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.757 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.758 | C8EvaluationRecord | when its applicability condition is true, primaryComparisonResultIdentity satisfies type string, cardinality record type .004: exactly 1 (pre-final only while adjudication-required, final before sealing); all other types: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.758 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.759 | C8EvaluationRecord | when its applicability condition is true, secondaryFailureIdentities satisfies type array<string>, cardinality record type .004: 0..N; all other types: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.759 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.760 | C8EvaluationRecord | when its applicability condition is true, evidenceReferences satisfies type array<string>, cardinality record types .001-.005: 0..N as type-specific supporting/contradicting evidence; record types .006-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.760 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.761 | C8EvaluationRecord | when its applicability condition is true, contributingImageAssetIds satisfies type array<string>, cardinality record types .001-.005: 1..6; record types .006-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.761 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.762 | C8EvaluationRecord | subsetReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.762 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.763 | C8EvaluationRecord | lineageReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.763 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.764 | C8EvaluationRecord | contractSemanticVersionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.764 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.765 | C8EvaluationRecord | when its applicability condition is true, claimVocabularyVersionReference satisfies type string, cardinality record types .001-.004: exactly 1; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.765 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.766 | C8EvaluationRecord | ruleRegistryVersionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.766 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.767 | C8EvaluationRecord | validationRegistryVersionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.767 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.768 | C8EvaluationRecord | when its applicability condition is true, comparisonPolicyVersionReference satisfies type string, cardinality record types .004-.005: exactly 1; .001-.003 and .006-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.768 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.769 | C8EvaluationRecord | when its applicability condition is true, providerConfigurationReference satisfies type string, cardinality record types .003-.004: exactly 1 iff output came from a concrete provider/mechanism configuration; otherwise 0; all other types: prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.769 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.770 | C8EvaluationRecord | when its applicability condition is true, evaluationConfigurationReference satisfies type string, cardinality record types .001-.005: exactly 1; .006-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.770 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.771 | C8EvaluationRecord | lifecycle is present, has type C8LifecycleBundle, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.771 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.772 | C8EvaluationRecord | when its applicability condition is true, adjudicationRecordId satisfies type string, cardinality record types .001-.004: 0..1 and exactly 1 only when adjudication opens; .005-.007: 0 and prohibited, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.772 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.773 | C8EvaluationRecord | when its applicability condition is true, replacementRecordId satisfies type string, cardinality all record types: 0..1 and exactly 1 in replacement/supersession paths, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.773 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.774 | C8LifecycleBundle | lifecycleStateIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.774 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.775 | C8LifecycleBundle | recordRevisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.775 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.776 | C8LifecycleBundle | when its applicability condition is true, predecessorRecordId satisfies type string, cardinality 0..1; required for a successor/supersession/replacement revision, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.776 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.777 | C8LifecycleBundle | when its applicability condition is true, successorRecordId satisfies type string, cardinality 0..1; required when lifecycleStateIdentity=c8.lifecycle.007, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.777 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.778 | C8LifecycleBundle | when its applicability condition is true, sealedAt satisfies type RFC3339 timestamp, cardinality exactly 1 after a seal event; 0 before seal, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.778 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.779 | C8LifecycleBundle | when its applicability condition is true, sealIntegrityReference satisfies type string, cardinality exactly 1 after a seal event; 0 before seal, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.779 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.780 | C8LifecycleBundle | historyReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.780 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.781 | C8LifecycleBundle | when its applicability condition is true, exclusionReasonIdentity satisfies type string, cardinality exactly 1 iff lifecycleStateIdentity=c8.lifecycle.006, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.781 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.782 | C8LifecycleBundle | when its applicability condition is true, invalidationReasonIdentity satisfies type string, cardinality exactly 1 iff lifecycleStateIdentity=c8.lifecycle.008, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.782 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.783 | C8LifecycleBundle | when its applicability condition is true, replacementReasonIdentity satisfies type string, cardinality exactly 1 iff lifecycleStateIdentity=c8.lifecycle.009 or a replacement record is created, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.783 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.784 | C8LifecycleBundle | transitionEvents is present, has type array<C8LifecycleTransitionEvent>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.784 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.785 | C8LifecycleTransitionEvent | transitionEventId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.785 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.786 | C8LifecycleTransitionEvent | when its applicability condition is true, fromStateIdentity satisfies type enum, cardinality 0..1; absent only for the initial draft event, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.786 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.787 | C8LifecycleTransitionEvent | toStateIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.787 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.788 | C8LifecycleTransitionEvent | transitionDisposition is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.788 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.789 | C8LifecycleTransitionEvent | when its applicability condition is true, conditionEvidenceReferences satisfies type array<string>, cardinality 1..N for CONDITIONAL; 0..N otherwise, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.789 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.790 | C8LifecycleTransitionEvent | actorRoleReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.790 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.791 | C8LifecycleTransitionEvent | occurredAt is present, has type RFC3339 timestamp, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.791 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.792 | C8LifecycleTransitionEvent | eventIntegrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.792 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.800 | ComparisonOutcome | comparisonId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.800 | c10.disposition.005 | — | c9.failure.comparison-identity-mismatch | 35 |
| c10.validation.801 | ComparisonOutcome | fixtureId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.801 | c10.disposition.005 | — | c9.failure.comparison-identity-mismatch | 35 |
| c10.validation.802 | ComparisonOutcome | entryIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.802 | c10.disposition.005 | — | c9.failure.comparison-wrong-entry | 35 |
| c10.validation.803 | ComparisonOutcome | observedResultReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.803 | c10.disposition.005 | — | c9.failure.comparison-result-missing | 35 |
| c10.validation.804 | ComparisonOutcome | comparisonOutcomeIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.804 | c10.disposition.005 | — | c9.failure.comparison-prohibited-outcome | 35 |
| c10.validation.805 | ComparisonOutcome | when its applicability condition is true, primaryFailureIdentity satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.805 | c10.disposition.005 | — | c9.failure.comparison-multiple-results | 35 |
| c10.validation.806 | ComparisonOutcome | when its applicability condition is true, retryabilityAssessment satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.806 | c10.disposition.005 | — | c9.failure.comparison-wrong-retryability | 35 |
| c10.validation.807 | ComparisonOutcome | subsetRole is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.807 | c10.disposition.005 | — | c9.failure.comparison-subset-mismatch | 35 |
| c10.validation.808 | ComparisonOutcome | sealedAt is present, has type RFC3339 timestamp, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.808 | c10.disposition.005 | — | — | 35 |
| c10.validation.809 | ComparisonOutcome | sealIntegrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.809 | c10.disposition.005 | — | — | 35 |
| c10.validation.810 | ComparisonOutcome | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.810 | c10.disposition.005 | — | — | 35 |
| c10.validation.811 | ComparisonOutcome | contractVersionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.811 | c10.disposition.005 | — | — | 35 |
| c10.validation.812 | ComparisonOutcome | governingSourceIdentityReferences is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.812 | c10.disposition.005 | — | — | 35 |
| c10.validation.813 | ComparisonOutcome | suiteIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.813 | c10.disposition.005 | — | — | 35 |
| c10.validation.814 | ComparisonOutcome | subtypeToken is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.814 | c10.disposition.005 | — | — | 35 |
| c10.validation.815 | ComparisonOutcome | expectedResultFamily is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.815 | c10.disposition.005 | — | — | 35 |
| c10.validation.816 | ComparisonOutcome | expectedStage is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.816 | c10.disposition.005 | — | — | 35 |
| c10.validation.817 | ComparisonOutcome | expectedReasonToken is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.817 | c10.disposition.005 | — | — | 35 |
| c10.validation.818 | ComparisonOutcome | expectedRetryabilityIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.818 | c10.disposition.005 | — | — | 35 |
| c10.validation.819 | ComparisonOutcome | prohibitedOutcomeIdentities is present, has type array<string>, cardinality 1..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.819 | c10.disposition.005 | — | — | 35 |
| c10.validation.820 | ComparisonOutcome | fixtureLineageId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.820 | c10.disposition.005 | — | — | 35 |
| c10.validation.821 | ComparisonOutcome | when its applicability condition is true, observedResultFamily satisfies type string, cardinality exactly 1 iff an observed primary result exists; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.821 | c10.disposition.005 | — | — | 35 |
| c10.validation.822 | ComparisonOutcome | when its applicability condition is true, observedStage satisfies type string, cardinality exactly 1 iff an observed primary result exists; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.822 | c10.disposition.005 | — | — | 35 |
| c10.validation.823 | ComparisonOutcome | when its applicability condition is true, observedReasonToken satisfies type string, cardinality exactly 1 iff the observed family requires a reason; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.823 | c10.disposition.005 | — | — | 35 |
| c10.validation.824 | ComparisonOutcome | when its applicability condition is true, observedRetryabilityIdentity satisfies type string, cardinality exactly 1 iff retryability is evaluable for the observed result; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.824 | c10.disposition.005 | — | — | 35 |
| c10.validation.825 | ComparisonOutcome | comparisonValidationIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.825 | c10.disposition.005 | — | — | 35 |
| c10.validation.826 | ComparisonOutcome | when its applicability condition is true, primaryEscalationIdentity satisfies type string, cardinality exactly 1 iff comparisonOutcomeIdentity is non-PASS; otherwise 0, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.826 | c10.disposition.005 | — | — | 35 |
| c10.validation.827 | ComparisonOutcome | secondaryFailureIdentities is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.827 | c10.disposition.005 | — | — | 35 |
| c10.validation.828 | ComparisonOutcome | countConsumptionIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.828 | c10.disposition.005 | — | — | 35 |
| c10.validation.829 | ComparisonOutcome | immutableTraceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.829 | c10.disposition.005 | — | — | 35 |
| c10.validation.900 | ConformanceValidationReport | reportId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.900 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.901 | ConformanceValidationReport | targetArtifactId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.901 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.902 | ConformanceValidationReport | targetArtifactKind is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.902 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.903 | ConformanceValidationReport | validationBundleVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.903 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.904 | ConformanceValidationReport | findings is present, has type array<ConformanceFinding>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.904 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.905 | ConformanceValidationReport | when its applicability condition is true, primaryFindingId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.905 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.906 | ConformanceValidationReport | valid is present, has type boolean, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.906 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.907 | ConformanceValidationReport | sealedAt is present, has type RFC3339 timestamp, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.907 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.908 | ConformanceValidationReport | sealIntegrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.908 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.909 | ConformanceValidationReport | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.909 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.910 | ConformanceFinding | findingId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.910 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.911 | ConformanceFinding | validationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.911 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.912 | ConformanceFinding | failureIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.912 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.913 | ConformanceFinding | targetPath is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.913 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.914 | ConformanceFinding | dispositionIdentity is present, has type enum, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.914 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.915 | ConformanceFinding | when its applicability condition is true, externalOutcomeToken satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.915 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.916 | ConformanceFinding | secondaryEvidenceReferences is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.916 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.917 | ConformanceFinding | precedence is present, has type integer, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.917 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.918 | ConformanceFinding | upstreamFailureIdentities is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.918 | c10.disposition.002 | c10.conformance.validation-report-invalid | — | 5 |
| c10.validation.920 | SealVerificationResult | schemaVersion is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.920 | c10.disposition.004 | — | — | 20 |
| c10.validation.921 | SealVerificationResult | verificationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.921 | c10.disposition.004 | — | — | 20 |
| c10.validation.922 | SealVerificationResult | targetArtifactId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.922 | c10.disposition.004 | — | — | 20 |
| c10.validation.923 | SealVerificationResult | targetArtifactKind is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.923 | c10.disposition.004 | — | — | 20 |
| c10.validation.924 | SealVerificationResult | presentedSealIntegrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.924 | c10.disposition.004 | — | — | 20 |
| c10.validation.925 | SealVerificationResult | recomputedSealIntegrityReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.925 | c10.disposition.004 | — | — | 20 |
| c10.validation.926 | SealVerificationResult | valid is present, has type boolean, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.926 | c10.disposition.004 | — | — | 20 |
| c10.validation.927 | SealVerificationResult | verifiedAt is present, has type RFC3339 timestamp, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.927 | c10.disposition.004 | — | — | 20 |
| c10.validation.928 | SealVerificationResult | when its applicability condition is true, failureIdentity satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.928 | c10.disposition.004 | — | — | 20 |
| c10.validation.929 | SealVerificationResult | verificationMethodIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.929 | c10.disposition.004 | — | — | 20 |
| c10.validation.950 | PairingRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.950 | c10.disposition.004 | — | — | 20 |
| c10.validation.951 | BasisLinkRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.951 | c10.disposition.004 | — | — | 20 |
| c10.validation.952 | OutcomeDecisionRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.952 | c10.disposition.004 | — | — | 20 |
| c10.validation.953 | Contract6SealingRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.953 | c10.disposition.004 | — | — | 20 |
| c10.validation.954 | AdjudicationRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.954 | c10.disposition.004 | — | — | 20 |
| c10.validation.955 | ConfidenceSourceSignalRecord | recordTypeIdentity is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.955 | c10.disposition.004 | — | — | 20 |
| c10.validation.956 | AnnotationUnitRecord | when its applicability condition is true, multiViewStateIdentity satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.956 | c10.disposition.004 | — | — | 20 |
| c10.validation.957 | BasisLinkRecord | operationId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.957 | c10.disposition.004 | — | — | 20 |
| c10.validation.958 | BasisLinkRecord | roomCaseId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.958 | c10.disposition.004 | — | — | 20 |
| c10.validation.959 | BasisLinkRecord | unitSubjectId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.959 | c10.disposition.004 | — | — | 20 |
| c10.validation.960 | BasisLinkRecord | basisApplicabilityRationale is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.960 | c10.disposition.004 | — | — | 20 |
| c10.validation.961 | BasisLinkRecord | when its applicability condition is true, predecessorBasisLinkRecordId satisfies type string, cardinality 0..1, value and reference constraints; otherwise it is absent | conditional presence/absence and all constraints pass | conditionality mismatch or any listed constraint fails | c10.failure.961 | c10.disposition.004 | — | — | 20 |
| c10.validation.962 | AdjudicationRecord | candidateOrMemberIds is present, has type array<string>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.962 | c10.disposition.004 | — | — | 20 |
| c10.validation.963 | AdjudicationRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.963 | c10.disposition.004 | — | — | 20 |
| c10.validation.964 | Contract6SealingRecord | traceReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.964 | c10.disposition.004 | — | — | 20 |
| c10.validation.965 | Contract6SealingRecord | revisionId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.965 | c10.disposition.004 | — | — | 20 |
| c10.validation.966 | Contract8EvaluationPackage | unseenClaimRecords is present, has type array<UnseenClaimRecord>, cardinality 0..N, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.966 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.967 | UnseenClaimRecord | unseenClaimRecordId is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.967 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.968 | UnseenClaimRecord | rawAssertionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.968 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.969 | UnseenClaimRecord | assertionProjectionReference is present, has type string, cardinality 1, and satisfies value/reference constraints | all required type, cardinality, value and reference constraints pass | field missing or any listed constraint fails | c10.failure.969 | c10.disposition.005 | — | c8.failure.008 | 35 |

Field-bound validation count: **531**. Every active field has exactly one field-bound validation and one Contract-10 failure identity. `External outcome token = —` means the defect is sidecar-only and cannot alter the existing runtime result family.

## 10. Cross-field and lifecycle validation registry

| Rule ID | Target | Predicate | PASS | FAIL | Primary failure identity | Disposition identity | External outcome token | Upstream cause identity | Precedence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| c10.validation.S001 | CaptureSetIntake | imageAssets is present as an array and every member conforms to ImageAsset | all conditions true | field absent/not-array or member malformed | c10.failure.S001 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.S002 | RoomCase | exactly one RoomCase exists in each admitted PerceptionOperation | exactly one | zero or more than one | c10.failure.S002 | c10.disposition.004 | — | — | 20 |
| c10.validation.S003 | RoomCase | each admitted imageAssetId maps bijectively to one atomic, non-fabricated sourceAssetId | one-to-one non-fabricated mapping | duplicate reuse, fabrication or set-valued mapping | c10.failure.S003 | c10.disposition.001 | c9.failure.fabricated-identity | c9.failure.fabricated-identity | 0 |
| c10.validation.S004 | SameRoomValidationRecord | roomCaseId exists iff outcome=same-room-confirmed | condition satisfied | mismatch | c10.failure.S004 | c10.disposition.004 | — | — | 20 |
| c10.validation.S005 | SameRoomValidationRecord | inputSetId exists iff outcome is mixed-room-rejected, temporal-state-conflict or capture-set-invalid | condition satisfied | mismatch | c10.failure.S005 | c10.disposition.004 | — | — | 20 |
| c10.validation.S006 | MixedRoomValidationRequest | roomCaseId is absent | absent | present | c10.failure.S006 | c10.disposition.001 | c9.failure.mixed-room-roomcase-fabrication | c9.failure.mixed-room-roomcase-fabrication | 0 |
| c10.validation.S007 | VlmSceneCandidate | candidateNodeId values are unique within the candidate | all unique | duplicate candidateNodeId | c10.failure.S007 | c10.disposition.004 | — | c2.node.duplicate_id | 20 |
| c10.validation.S008 | StructuredSceneV0 | exactly one Room node exists | exactly one | zero | c10.failure.S008 | c10.disposition.004 | — | c3.room.missing | 20 |
| c10.validation.S009 | StructuredSceneV0 | exactly one Room node exists | exactly one | more than one | c10.failure.S009 | c10.disposition.004 | — | c3.room.invalid_cardinality | 20 |
| c10.validation.S010 | StructuredSceneV0 | Room node alone carries Residential-34 spaceTypeId | correct placement | missing, invalid or misplaced | c10.failure.S010 | c10.disposition.004 | — | — | 20 |
| c10.validation.S011 | StructuredSceneV0 | relation endpoints resolve to two distinct nodes | resolved and distinct | dangling or identical endpoints | c10.failure.S011 | c10.disposition.004 | — | c2.relation.dangling_endpoint | 20 |
| c10.validation.S012 | StructuredSceneV0 | asserted relation type/category pair is Contract-3-applicable | applicable | not applicable | c10.failure.S012 | c10.disposition.004 | — | — | 20 |
| c10.validation.S013 | StructuredSceneV0 | relations array may be empty regardless of applicability | field present as array | field absent or not array | c10.failure.S013 | c10.disposition.004 | — | — | 20 |
| c10.validation.S014 | Artifact separation | StructuredSceneV0 contains no evidence, confidence, determinability or diagnostics records | none embedded | any forbidden record embedded | c10.failure.S014 | c10.disposition.004 | — | — | 20 |
| c10.validation.S015 | Artifact separation | PerceptionEvidenceArtifact contains no operational stage log | none embedded | operational diagnostics embedded | c10.failure.S015 | c10.disposition.004 | — | — | 20 |
| c10.validation.S016 | PerceptionResult | exactly one discriminated union variant is represented | one variant | zero or multiple variants | c10.failure.S016 | c10.disposition.004 | — | — | 20 |
| c10.validation.S017 | SceneResult | scene exists only when status=scene and evidence sidecar resolves | all true | mismatch or unresolved | c10.failure.S017 | c10.disposition.004 | — | — | 20 |
| c10.validation.S018 | Non-scene results | scene field is absent | absent | present | c10.failure.S018 | c10.disposition.004 | — | — | 20 |
| c10.validation.S019 | InsufficientEvidenceResult | same-room-unconfirmed path has no fabricated roomCaseId | absent | present | c10.failure.S019 | c10.disposition.001 | c9.failure.mixed-room-roomcase-fabrication | c9.failure.mixed-room-roomcase-fabrication | 0 |
| c10.validation.S020 | RejectedResult | when rejectionStage=c10.stage.006 and the referenced SameRoomValidationRecord outcome=mixed-room-rejected, inputSetId and rejectionContextReference are present, roomCaseId/scene/contractViolations are absent | all branch conditions true and the reference resolves | any branch field is missing/misplaced or the reference does not resolve to mixed-room-rejected | c10.failure.S020 | c10.disposition.004 | — | — | 20 |
| c10.validation.S021 | PerceptionEvidenceArtifact | operationId, roomCaseId and contributing images equal SceneResult/RoomCase | all equal | any mismatch | c10.failure.S021 | c10.disposition.004 | — | — | 20 |
| c10.validation.S022 | GroundingRecord | every target resolves to a scene element or value revision and every image resolves to RoomCase | all resolve | any orphan | c10.failure.S022 | c10.disposition.004 | — | — | 20 |
| c10.validation.S023 | ProvenanceAttachmentRecord | provenance, producing stage and parent cardinality obey Contract 4 | all obey | any violation | c10.failure.S023 | c10.disposition.004 | — | — | 20 |
| c10.validation.S024 | BestEffortFieldAssessmentRecord | exactly one assessment exists per applicable field-owner pair | exactly one | missing or duplicate | c10.failure.S024 | c10.disposition.004 | — | — | 20 |
| c10.validation.S025 | AttributeEvidenceArtifact | AEA exists only for a produced value and all joins remain in one RoomCase | all true | any false | c10.failure.S025 | c10.disposition.004 | — | — | 20 |
| c10.validation.S026 | DeterminabilityEvidenceBasisRecord | no-value assessment has zero AEA and non-empty outcome-neutral basis | all true | any false | c10.failure.S026 | c10.disposition.004 | — | — | 20 |
| c10.validation.S027 | EvidenceSetRecord | target kind is exclusive: value revision xor assessment basis | exactly one target kind | mixed or missing target | c10.failure.S027 | c10.disposition.004 | — | — | 20 |
| c10.validation.S028 | ConfidenceAssertionRecord | source, transformation, signals and conditional method/profile fields obey Contract 5 | all true | any false | c10.failure.S028 | c10.disposition.004 | — | — | 20 |
| c10.validation.S029 | Contract6DeterminabilityPackage | every annotation unit has pairing and basis; terminal outcome precedes sealing | all prerequisites met | missing, duplicate or premature seal | c10.failure.S029 | c10.disposition.004 | — | — | 20 |
| c10.validation.S030 | Contract6DeterminabilityPackage | Contract-6 outcome never rewrites confidence, provenance, evidence or best-effort value | no rewrite | rewrite detected | c10.failure.S030 | c10.disposition.004 | — | — | 20 |
| c10.validation.S031 | RawMechanismAssertionArtifact | raw payload is immutable and evaluator fields do not overwrite raw fields | immutable/separate | mutation or conflation | c10.failure.S031 | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | 0 |
| c10.validation.S032 | RawMechanismAssertionArtifact | normalization-status cardinalities for claims and malformed comparison obey Contract 8 | all true | any false | c10.failure.S032 | c10.disposition.005 | — | c8.failure.008 | 35 |
| c10.validation.S033 | ETAPAssertionProjectionFact | exactly one final or blocked projection exists per valid raw assertion | exactly one | missing or multiple | c10.failure.S033 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.S034 | ETAPAssertionProjectionFact | mixed child PASS/FAIL deterministically yields final-fail | final-fail | pass or blocked | c10.failure.S034 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.S035 | ComparisonOutcome | runtime PerceptionResult is referenced, never mutated or embedded with evaluation metadata | reference only | embedded or mutated | c10.failure.S035 | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | 0 |
| c10.validation.S036 | ComparisonOutcome | exactly one c9.comparison outcome and at most one primary c9.failure identity | valid cardinality | zero/multiple primary outcomes or failures | c10.failure.S036 | c10.disposition.005 | — | c9.failure.comparison-multiple-results | 35 |
| c10.validation.S037 | Sealing | seal hash excludes sealIntegrityReference itself and follows canonical serialization | verifies | self-reference or mismatch | c10.failure.S037 | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | 0 |
| c10.validation.S038 | Sealing | sealed artifact is immutable; correction creates a new revision with predecessor reference | immutable/new revision | in-place mutation | c10.failure.S038 | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | 0 |
| c10.validation.S039 | Source eligibility | only LICENSED/SYNTHETIC/STAGED sources are admitted | eligible | ineligible or real-user source | c10.failure.S039 | c10.disposition.001 | c9.failure.ineligible-source | c9.failure.ineligible-source | 0 |
| c10.validation.S040 | Controlled Learning | no feedback collection, training or autonomous behavior change is activated | not active | activation detected | c10.failure.S040 | c10.disposition.001 | c9.failure.learning-activation | c9.failure.learning-activation | 0 |
| c10.validation.S041 | Localization | every Contract-10 field, validation, failure, identity rule, cross-reference rule, disposition and construct identity has one EN canonical label and one RU derived label | identity-level localization complete | any missing or range-only label | c10.failure.S041 | c10.disposition.004 | — | — | 20 |
| c10.validation.S042 | Authorization | no Contract 11, provider activity, corpus, implementation or downstream sequence is started | within boundary | authorization leak | c10.failure.S042 | c10.disposition.001 | c9.failure.downstream-authorization-leak | c9.failure.downstream-authorization-leak | 0 |
| c10.validation.S043 | EvidenceRelationshipRecord | subject cardinality and subject kind obey the selected Contract-4 relationship identity | all compatible | incompatible relationship/subject combination | c10.failure.S043 | c10.disposition.004 | — | — | 20 |
| c10.validation.S044 | BestEffortValueRevision | each value lineage has exactly one active revision and supersession names its predecessor | all true | multiple active revisions or missing predecessor | c10.failure.S044 | c10.disposition.004 | — | — | 20 |
| c10.validation.S045 | ConfidenceAssertionRecord | non-missing confidence has 1..N resolvable source signals; source=missing has zero source-signal records and the missing signal type | all true | signal cardinality or source mismatch | c10.failure.S045 | c10.disposition.004 | — | — | 20 |
| c10.validation.S046 | PerceptionEvidenceArtifact | every provenance-bearing annotation revision resolves to exactly one ProvenanceAttachmentRecord | exactly one | missing or duplicate | c10.failure.S046 | c10.disposition.004 | — | — | 20 |
| c10.validation.S047 | PerceptionEvidenceArtifact | every target requiring governed confidence resolves to exactly one compatible ConfidenceAssertionRecord revision | exactly one | missing, duplicate or incompatible | c10.failure.S047 | c10.disposition.004 | — | c3.confidence.missing | 20 |
| c10.validation.S048 | Contract8EvaluationPackage | each finalized RawMechanismAssertionArtifact resolves to exactly one UnseenClaimRecord joining that raw artifact to exactly one final ETAPAssertionProjectionFact | exactly one valid wrapper | missing, duplicate or mismatched wrapper | c10.failure.S048 | c10.disposition.005 | — | c8.failure.027 | 35 |
| c10.validation.S056 | CaptureSetIntake | imageAssets count is not zero | count >= 1 | count = 0 | c10.failure.S056 | c10.disposition.003 | zero-assets | — | 10 |
| c10.validation.S057 | CaptureSetIntake | imageAssets count does not exceed six | count <= 6 | count > 6 | c10.failure.S057 | c10.disposition.003 | too-many-assets | — | 10 |
| c10.validation.S058 | RejectedResult | when rejectionStage=c10.stage.006 and the referenced SameRoomValidationRecord outcome=temporal-state-conflict, inputSetId and rejectionContextReference are present, roomCaseId/scene/contractViolations are absent | all branch conditions true and the reference resolves | any branch field is missing/misplaced or the reference does not resolve to temporal-state-conflict | c10.failure.S058 | c10.disposition.004 | — | — | 20 |
| c10.validation.S059 | RejectedResult | when rejectionStage=c10.stage.006 and the referenced SameRoomValidationRecord outcome=capture-set-invalid, inputSetId and rejectionContextReference are present, roomCaseId/scene/contractViolations are absent | all branch conditions true and the reference resolves | any branch field is missing/misplaced or the reference does not resolve to capture-set-invalid | c10.failure.S059 | c10.disposition.004 | — | — | 20 |
| c10.validation.S060 | RejectedResult | when rejectionStage is c10.stage.004 or c10.stage.007, roomCaseId and contractViolations[1..N] are present, every token is one of the exact 14 Contract-9 runtime violation tokens, and inputSetId/rejectionContextReference are absent | all post-admission branch conditions true | missing/misplaced branch field or any non-Contract-9 violation token | c10.failure.S060 | c10.disposition.004 | — | — | 20 |
| c10.validation.S061 | RejectedResult | RejectedResult represents exactly one branch: c10.stage.006 context-reference branch XOR c10.stage.004/c10.stage.007 Contract-9-violation branch | exactly one branch is complete | zero branches, mixed branches or multiple branches represented | c10.failure.S061 | c10.disposition.004 | — | — | 20 |
| c10.validation.S062 | PerceptionOperation | operationState=completed has exactly one resolvable sealed resultReference; earlier states have none | lifecycle cardinality valid | missing, duplicate, premature or unresolved result reference | c10.failure.S062 | c10.disposition.004 | — | — | 20 |
| c10.validation.S063 | VlmSceneCandidate | every candidate relation has exactly two distinct resolvable endpointCandidateNodeIds | all endpoints valid | dangling, duplicate or wrong-cardinality endpoints | c10.failure.S063 | c10.disposition.004 | — | c2.relation.dangling_endpoint | 20 |
| c10.validation.S064 | VlmSceneCandidate | at least one Room candidate exists before C.2 admission | one or more Room candidates | zero Room candidates | c10.failure.S064 | c10.disposition.004 | — | c2.room.missing_candidate | 20 |
| c10.validation.S065 | VlmSceneCandidate | no more than one Room candidate proceeds into one bounded C.2 admission | zero or one at precheck; exactly one at admission | more than one Room candidate | c10.failure.S065 | c10.disposition.004 | — | — | 20 |
| c10.validation.S066 | CandidateNode | spaceTypeId is present only on Room; typeLabel is present only on StructuralElement/Object; FreeSpaceRegion carries neither | placement valid | missing or misplaced type field | c10.failure.S066 | c10.disposition.004 | — | — | 20 |
| c10.validation.S067 | UnsupportedInput | observedAssetCount equals the actual intake asset count when the intake array is readable | counts equal | count mismatch | c10.failure.S067 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.S068 | UnsupportedInput | reason matches the detected admission predicate: zero, over-six, unsupported format, decode failure or malformed envelope | exact reason selected | reason/predicate mismatch | c10.failure.S068 | c10.disposition.003 | malformed-envelope | — | 10 |
| c10.validation.S069 | ComparisonOutcome | entryIdentity, suiteIdentity and subtypeToken resolve to one exact Contract-9 row | all three identify the same row | mismatch or unresolved row | c10.failure.S069 | c10.disposition.006 | c9.comparison.wrong-entry -> c9.failure.comparison-wrong-entry | c9.failure.comparison-wrong-entry | 40 |
| c10.validation.S070 | ComparisonOutcome | expected result family, stage, reason, retryability and prohibited set equal the exact selected Contract-9 entry facts | all exact | any drift or omission | c10.failure.S070 | c10.disposition.006 | c9.comparison.wrong-entry -> c9.failure.comparison-wrong-entry | c9.failure.comparison-wrong-entry | 40 |
| c10.validation.S071 | ComparisonOutcome | observed result family, stage, reason and retryability are derived from exactly one sealed observed result without mutation | all derived and consistent | missing, multiple, inconsistent or mutated observed result | c10.failure.S071 | c10.disposition.006 | c9.comparison.multiple-results -> c9.failure.comparison-multiple-results | c9.failure.comparison-multiple-results | 40 |
| c10.validation.S072 | ComparisonOutcome | primaryFailureIdentity and primaryEscalationIdentity equal the exact mapping of the selected non-PASS comparison outcome; both are absent for PASS | mapping exact | mapping mismatch or PASS carries failure/escalation | c10.failure.S072 | c10.disposition.006 | c9.comparison.prohibited-outcome -> c9.failure.comparison-prohibited-outcome | c9.failure.comparison-prohibited-outcome | 40 |
| c10.validation.S073 | ComparisonOutcome | fixtureLineageId and subsetRole preserve development/held-out lineage isolation | isolated and consistent | lineage crossover or subset mismatch | c10.failure.S073 | c10.disposition.001 | c9.failure.lineage-crossover | c9.failure.lineage-crossover | 0 |
| c10.validation.S074 | ComparisonOutcome | countConsumptionIdentity is unique for fixtureId plus subsetRole and is consumed once | unique single consumption | duplicate consumption | c10.failure.S074 | c10.disposition.006 | c9.comparison.double-count -> c9.failure.counting-duplication | c9.failure.counting-duplication | 40 |
| c10.validation.S075 | ComparisonOutcome | governing source identities, contract version, validation identity and immutable trace all resolve to the exact locked comparison bundle | all exact and resolvable | source/version/trace mismatch | c10.failure.S075 | c10.disposition.006 | c9.comparison.source-identity-mismatch -> c9.failure.comparison-source-identity-mismatch | c9.failure.comparison-source-identity-mismatch | 40 |
| c10.validation.S076 | BestEffortFieldAssessmentRecord | fieldIdentity resolves to exactly one of c4.besteffort.field.001-.008 and capabilityIdentity matches that registry row | exact row match | unknown field or capability mismatch | c10.failure.S076 | c10.disposition.004 | — | c4.failure.110 | 20 |
| c10.validation.S077 | BestEffortFieldAssessmentRecord | ownerKind and owner node type satisfy the exact Contract-4 field applicability row | applicable | not-applicable field-owner pair | c10.failure.S077 | c10.disposition.004 | — | c4.failure.109 | 20 |
| c10.validation.S078 | BestEffortFieldAssessmentRecord | scalar fields .001-.005 and .007 expose at most one active value revision | 0..1 active value | more than one active value | c10.failure.S078 | c10.disposition.004 | — | c4.failure.112 | 20 |
| c10.validation.S079 | BestEffortFieldAssessmentRecord | multi-value fields .006 and .008 expose unique active value elements | all unique | duplicate active element | c10.failure.S079 | c10.disposition.004 | — | c4.failure.113 | 20 |
| c10.validation.S080 | BestEffortValueRevision | valuePayload resolves to the exact field-specific Contract-4 value domain | domain member valid | invalid or unregistered member | c10.failure.S080 | c10.disposition.004 | — | c4.failure.114 | 20 |
| c10.validation.S081 | BestEffortValueRevision | extent fields .004 and .005 satisfy the structured extent representation and lower/upper-bound rules | valid extent | invalid extent representation | c10.failure.S081 | c10.disposition.004 | — | c4.failure.115 | 20 |
| c10.validation.S082 | BestEffortValueRevision | extent fields .004 and .005 carry the required comparison-profile or calibrated-scale basis | basis present | comparison or scale basis missing | c10.failure.S082 | c10.disposition.004 | — | c4.failure.116 | 20 |
| c10.validation.S083 | BestEffortFieldAssessmentRecord | illumination role field .008 is consistent with base relevance field .007 for the same owner | consistent | role without relevant state or contradictory state/role | c10.failure.S083 | c10.disposition.004 | — | c4.failure.117 | 20 |
| c10.validation.S084 | C8LifecycleBundle | every lifecycle transition is an ALLOWED, satisfied CONDITIONAL, or same-state NO-OP cell in the closed Contract-8 9x9 matrix | legal transition | FORBIDDEN or unsatisfied transition | c10.failure.S084 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.S085 | C8LifecycleBundle | recordTypeIdentity and lifecycleStateIdentity satisfy Contract-8 record-type lifecycle applicability | applicable | forbidden record-type/state combination | c10.failure.S085 | c10.disposition.005 | — | c8.failure.022 | 35 |
| c10.validation.S086 | C8LifecycleBundle | ready-for-sealing enters sealed only after all applicable validations pass and no adjudication remains unresolved | seal gate complete | premature or incomplete seal | c10.failure.S086 | c10.disposition.005 | — | c8.failure.023 | 35 |
| c10.validation.S087 | C8LifecycleBundle | sealed/superseded/post-seal-invalidated records carry sealedAt and sealIntegrityReference; pre-seal records carry neither | state/cardinality valid | seal fields missing or premature | c10.failure.S087 | c10.disposition.005 | — | c8.failure.023 | 35 |
| c10.validation.S088 | C8LifecycleBundle | predecessor/successor and replacement chains are single-predecessor, resolvable and acyclic | acyclic and complete | cycle, missing link or multiple predecessors | c10.failure.S088 | c10.disposition.005 | — | c8.failure.025 | 35 |
| c10.validation.S089 | C8LifecycleBundle | excluded, invalidated and replacement-required states carry their exact governed reason and remain visible in immutable history | reason and history complete | missing reason or audit history | c10.failure.S089 | c10.disposition.005 | — | c8.failure.025 | 35 |
| c10.validation.S090 | Operation identity | operationId is globally unique across distinct operation lineages | no reuse or collision | same operationId assigned to distinct lineages | c10.failure.S090 | c10.disposition.004 | — | — | 20 |
| c10.validation.S091 | RoomCase/ImageAsset identity | one RoomCase contains 1..6 ImageAssets, imageAssetId values are unique, and every contributing list is duplicate-free | cardinality and uniqueness valid | zero, over six, duplicate imageAssetId or duplicate contributing reference | c10.failure.S091 | c10.disposition.004 | — | — | 20 |
| c10.validation.S092 | Artifact identity consistency | operationId, roomCaseId and contributingImageAssetIds remain equal and resolvable across all artifacts in one operation lineage | all identities consistent | mismatch, orphan or cross-lineage reference | c10.failure.S092 | c10.disposition.004 | — | — | 20 |
| c10.validation.S093 | Semantic ownership | each Contract-4, Contract-5 and Contract-6 field resolves only against its exact owner registry and version | all owner domains preserved | cross-domain substitution or ownership drift | c10.failure.S093 | c10.disposition.004 | — | — | 20 |
| c10.validation.S094 | RejectedResult branch exclusivity | c10.stage.006 context branch and c10.stage.004/c10.stage.007 Contract-9 violation branch are mutually exclusive and collectively exhaustive for RejectedResult | exactly one branch | zero, mixed or multiple branches | c10.failure.S094 | c10.disposition.004 | — | — | 20 |
| c10.validation.S095 | FailureResult reason/retryability | technicalReasonCategory is one of the exact four Contract-9 tokens and retryability equals the fixed mapping in §5.2 | exact token and mapping | unknown token or wrong retryability | c10.failure.S095 | c10.disposition.004 | — | — | 20 |
| c10.validation.S096 | Negative-set identity boundary | a c10.stage.006 RejectedResult has inputSetId and rejectionContextReference, no roomCaseId, and resolves to one negative SameRoomValidationRecord outcome | identity boundary valid | missing inputSetId/reference, fabricated roomCaseId, or unresolved negative outcome | c10.failure.S096 | c10.disposition.004 | — | — | 20 |
| c10.validation.S097 | Artifact envelope separation | runtime result, semantic evidence, diagnostics and evaluation facts remain in distinct immutable envelopes | separation preserved | forbidden embedding, aliasing or mutation | c10.failure.S097 | c10.disposition.004 | — | — | 20 |
| c10.validation.S098 | SealVerificationResult consistency | valid is true iff presented and recomputed digests match; failureIdentity is absent when true and present when false; verificationMethodIdentity is exact | all equivalences true | digest/result/failure/method mismatch | c10.failure.S098 | c10.disposition.004 | — | — | 20 |

Standalone validation count: **91**. Every row explicitly names one failure identity, one disposition identity, one optional external token and one optional upstream semantic cause. No deprecated Contract-10 conformance pseudo-token is emitted into a runtime result.

## 11. Contract-10 failure registry and deterministic reachability

| Failure identity | EN label | RU label | Disposition identity | External outcome token | Upstream cause identity | Representable destination |
| --- | --- | --- | --- | --- | --- | --- |
| c10.failure.001 | Invalid field: CaptureSetIntake.operationId | Некорректное поле: CaptureSetIntake «operationId» | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.002 | Invalid field: CaptureSetIntake.inputArtifactId | Некорректное поле: CaptureSetIntake «inputArtifactId» | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.003 | Invalid field: CaptureSetIntake.imageAssets | Некорректное поле: CaptureSetIntake «imageAssets» | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.004 | Invalid field: ImageAsset.imageAssetId | Некорректное поле: ImageAsset «imageAssetId» | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.005 | Invalid field: ImageAsset.sourceAssetId | Некорректное поле: ImageAsset «sourceAssetId» | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.006 | Invalid field: ImageAsset.sourceClass | Некорректное поле: ImageAsset «sourceClass» | c10.disposition.001 | c9.failure.ineligible-source | c9.failure.ineligible-source | ConformanceValidationReport.findings[] |
| c10.failure.007 | Invalid field: ImageAsset.mediaType | Некорректное поле: ImageAsset «mediaType» | c10.disposition.003 | unsupported-format | — | ConformanceValidationReport.findings[] |
| c10.failure.008 | Invalid field: ImageAsset.contentIntegrityReference | Некорректное поле: ImageAsset «contentIntegrityReference» | c10.disposition.003 | decode-failure | — | ConformanceValidationReport.findings[] |
| c10.failure.009 | Invalid field: ImageAsset.preprocessingLineageReference | Некорректное поле: ImageAsset «preprocessingLineageReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.010 | Invalid field: SameRoomValidationRecord.sameRoomValidationId | Некорректное поле: SameRoomValidationRecord «sameRoomValidationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.011 | Invalid field: SameRoomValidationRecord.operationId | Некорректное поле: SameRoomValidationRecord «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.012 | Invalid field: SameRoomValidationRecord.contributingImageAssetIds | Некорректное поле: SameRoomValidationRecord «contributingImageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.013 | Invalid field: SameRoomValidationRecord.outcome | Некорректное поле: SameRoomValidationRecord «outcome» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.014 | Invalid field: SameRoomValidationRecord.basisReferences | Некорректное поле: SameRoomValidationRecord «basisReferences» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.015 | Invalid field: SameRoomValidationRecord.roomCaseId | Некорректное поле: SameRoomValidationRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.016 | Invalid field: SameRoomValidationRecord.inputSetId | Некорректное поле: SameRoomValidationRecord «inputSetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.017 | Invalid field: PerceptionOperation.operationId | Некорректное поле: PerceptionOperation «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.018 | Invalid field: PerceptionOperation.roomCase | Некорректное поле: PerceptionOperation «roomCase» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.019 | Invalid field: RoomCase.roomCaseId | Некорректное поле: RoomCase «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.020 | Invalid field: RoomCase.imageAssets | Некорректное поле: RoomCase «imageAssets» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.021 | Invalid field: RoomCase.sameRoomValidationReference | Некорректное поле: RoomCase «sameRoomValidationReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.022 | Invalid field: MixedRoomValidationRequest.operationId | Некорректное поле: MixedRoomValidationRequest «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.023 | Invalid field: MixedRoomValidationRequest.inputSetId | Некорректное поле: MixedRoomValidationRequest «inputSetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.024 | Invalid field: MixedRoomValidationRequest.imageAssets | Некорректное поле: MixedRoomValidationRequest «imageAssets» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.025 | Invalid field: MixedRoomValidationRequest.roomCaseId | Некорректное поле: MixedRoomValidationRequest «roomCaseId» | c10.disposition.001 | c9.failure.mixed-room-roomcase-fabrication | c9.failure.mixed-room-roomcase-fabrication | ConformanceValidationReport.findings[] |
| c10.failure.026 | Invalid field: UnsupportedInput.operationId | Некорректное поле: UnsupportedInput «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.027 | Invalid field: UnsupportedInput.inputArtifactId | Некорректное поле: UnsupportedInput «inputArtifactId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.028 | Invalid field: UnsupportedInput.reason | Некорректное поле: UnsupportedInput «reason» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.029 | Invalid field: UnsupportedInput.observedAssetCount | Некорректное поле: UnsupportedInput «observedAssetCount» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.030 | Invalid field: PerceptionOperation.operationState | Некорректное поле: PerceptionOperation «operationState» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.031 | Invalid field: PerceptionOperation.resultReference | Некорректное поле: PerceptionOperation «resultReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.032 | Invalid field: CaptureSetIntake.schemaVersion | Некорректное поле: CaptureSetIntake «schemaVersion» | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.033 | Invalid field: SameRoomValidationRecord.schemaVersion | Некорректное поле: SameRoomValidationRecord «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.034 | Invalid field: PerceptionOperation.schemaVersion | Некорректное поле: PerceptionOperation «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.035 | Invalid field: MixedRoomValidationRequest.schemaVersion | Некорректное поле: MixedRoomValidationRequest «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.036 | Invalid field: UnsupportedInput.schemaVersion | Некорректное поле: UnsupportedInput «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.100 | Invalid field: VlmSceneCandidate.candidateId | Некорректное поле: VlmSceneCandidate «candidateId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.101 | Invalid field: VlmSceneCandidate.operationId | Некорректное поле: VlmSceneCandidate «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.102 | Invalid field: VlmSceneCandidate.roomCaseId | Некорректное поле: VlmSceneCandidate «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.103 | Invalid field: VlmSceneCandidate.contributingImageAssetIds | Некорректное поле: VlmSceneCandidate «contributingImageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.104 | Invalid field: VlmSceneCandidate.producingStageIdentity | Некорректное поле: VlmSceneCandidate «producingStageIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.105 | Invalid field: VlmSceneCandidate.rawProviderOutputReference | Некорректное поле: VlmSceneCandidate «rawProviderOutputReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.106 | Invalid field: VlmSceneCandidate.candidateNodes | Некорректное поле: VlmSceneCandidate «candidateNodes» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.107 | Invalid field: CandidateNode.candidateNodeId | Некорректное поле: CandidateNode «candidateNodeId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.108 | Invalid field: CandidateNode.kind | Некорректное поле: CandidateNode «kind» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.109 | Invalid field: CandidateNode.spaceTypeId | Некорректное поле: CandidateNode «spaceTypeId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.110 | Invalid field: CandidateNode.typeLabel | Некорректное поле: CandidateNode «typeLabel» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.111 | Invalid field: CandidateNode.geometryCandidate | Некорректное поле: CandidateNode «geometryCandidate» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.112 | Invalid field: VlmSceneCandidate.candidateRelations | Некорректное поле: VlmSceneCandidate «candidateRelations» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.113 | Invalid field: CandidateRelation.candidateRelationId | Некорректное поле: CandidateRelation «candidateRelationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.114 | Invalid field: CandidateRelation.relationTypeIdentity | Некорректное поле: CandidateRelation «relationTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.115 | Invalid field: CandidateRelation.endpointCandidateNodeIds | Некорректное поле: CandidateRelation «endpointCandidateNodeIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.116 | Invalid field: VlmSceneCandidate.schemaVersion | Некорректное поле: VlmSceneCandidate «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.120 | Invalid field: StructuredSceneV0.sceneId | Некорректное поле: StructuredSceneV0 «sceneId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.121 | Invalid field: StructuredSceneV0.operationId | Некорректное поле: StructuredSceneV0 «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.122 | Invalid field: StructuredSceneV0.roomCaseId | Некорректное поле: StructuredSceneV0 «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.123 | Invalid field: StructuredSceneV0.contributingImageAssetIds | Некорректное поле: StructuredSceneV0 «contributingImageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.124 | Invalid field: StructuredSceneV0.sceneRevisionId | Некорректное поле: StructuredSceneV0 «sceneRevisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.125 | Invalid field: StructuredSceneV0.nodes | Некорректное поле: StructuredSceneV0 «nodes» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.126 | Invalid field: SceneNode.nodeId | Некорректное поле: SceneNode «nodeId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.127 | Invalid field: SceneNode.kind | Некорректное поле: SceneNode «kind» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.128 | Invalid field: SceneNode.spaceTypeId | Некорректное поле: SceneNode «spaceTypeId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.129 | Invalid field: SceneNode.typeLabel | Некорректное поле: SceneNode «typeLabel» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.130 | Invalid field: SceneNode.geometry | Некорректное поле: SceneNode «geometry» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.131 | Invalid field: StructuredSceneV0.relations | Некорректное поле: StructuredSceneV0 «relations» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.132 | Invalid field: SceneRelation.relationId | Некорректное поле: SceneRelation «relationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.133 | Invalid field: SceneRelation.relationTypeIdentity | Некорректное поле: SceneRelation «relationTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.134 | Invalid field: SceneRelation.endpointNodeIds | Некорректное поле: SceneRelation «endpointNodeIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.135 | Invalid field: SceneRelation.relationRevisionId | Некорректное поле: SceneRelation «relationRevisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.136 | Invalid field: StructuredSceneV0.schemaVersion | Некорректное поле: StructuredSceneV0 «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.200 | Invalid field: PerceptionResultCommon.operationId | Некорректное поле: PerceptionResultCommon «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.201 | Invalid field: PerceptionResultCommon.status | Некорректное поле: PerceptionResultCommon «status» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.202 | Invalid field: PerceptionResultCommon.roomCaseId | Некорректное поле: PerceptionResultCommon «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.203 | Invalid field: PerceptionResultCommon.contributingImageAssetIds | Некорректное поле: PerceptionResultCommon «contributingImageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.204 | Invalid field: PerceptionResultCommon.diagnosticsReference | Некорректное поле: PerceptionResultCommon «diagnosticsReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.205 | Invalid field: PerceptionResultCommon.schemaVersion | Некорректное поле: PerceptionResultCommon «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.206 | Invalid field: PerceptionResultCommon.ruleSetVersion | Некорректное поле: PerceptionResultCommon «ruleSetVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.207 | Invalid field: PerceptionResultCommon.contractBundleReference | Некорректное поле: PerceptionResultCommon «contractBundleReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.208 | Invalid field: PerceptionResultCommon.vocabularyVersion | Некорректное поле: PerceptionResultCommon «vocabularyVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.209 | Invalid field: PerceptionResultCommon.providerConfigurationVersionReference | Некорректное поле: PerceptionResultCommon «providerConfigurationVersionReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.210 | Invalid field: PerceptionResultCommon.sealedAt | Некорректное поле: PerceptionResultCommon «sealedAt» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.211 | Invalid field: PerceptionResultCommon.sealIntegrityReference | Некорректное поле: PerceptionResultCommon «sealIntegrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.212 | Invalid field: PerceptionResultCommon.predecessorResultReference | Некорректное поле: PerceptionResultCommon «predecessorResultReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.213 | Invalid field: PerceptionResultCommon.resultId | Некорректное поле: PerceptionResultCommon «resultId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.214 | Invalid field: PerceptionResultCommon.resultRevisionId | Некорректное поле: PerceptionResultCommon «resultRevisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.220 | Invalid field: SceneResult.scene | Некорректное поле: SceneResult «scene» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.221 | Invalid field: SceneResult.completeness | Некорректное поле: SceneResult «completeness» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.222 | Invalid field: SceneResult.evidenceArtifactReference | Некорректное поле: SceneResult «evidenceArtifactReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.230 | Invalid field: InsufficientEvidenceResult.reasonCategory | Некорректное поле: InsufficientEvidenceResult «reasonCategory» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.231 | Invalid field: InsufficientEvidenceResult.recommendedNextAction | Некорректное поле: InsufficientEvidenceResult «recommendedNextAction» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.240 | Invalid field: FailureResult.technicalReasonCategory | Некорректное поле: FailureResult «technicalReasonCategory» | c10.disposition.004 | — | c3.general.result_metadata | ConformanceValidationReport.findings[] |
| c10.failure.241 | Invalid field: FailureResult.retryability | Некорректное поле: FailureResult «retryability» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.250 | Invalid field: RejectedResult.contractViolations | Некорректное поле: RejectedResult «contractViolations» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.251 | Invalid field: RejectedResult.inputSetId | Некорректное поле: RejectedResult «inputSetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.252 | Invalid field: RejectedResult.rejectionStage | Некорректное поле: RejectedResult «rejectionStage» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.253 | Invalid field: RejectedResult.rejectionContextReference | Некорректное поле: RejectedResult «rejectionContextReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.260 | Invalid field: PerceptionOperationDiagnostics.diagnosticsId | Некорректное поле: PerceptionOperationDiagnostics «diagnosticsId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.261 | Invalid field: PerceptionOperationDiagnostics.operationId | Некорректное поле: PerceptionOperationDiagnostics «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.262 | Invalid field: PerceptionOperationDiagnostics.roomCaseId | Некорректное поле: PerceptionOperationDiagnostics «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.263 | Invalid field: PerceptionOperationDiagnostics.stageEvents | Некорректное поле: PerceptionOperationDiagnostics «stageEvents» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.264 | Invalid field: StageEvent.stageIdentity | Некорректное поле: StageEvent «stageIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.265 | Invalid field: StageEvent.status | Некорректное поле: StageEvent «status» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.266 | Invalid field: StageEvent.startedAt | Некорректное поле: StageEvent «startedAt» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.267 | Invalid field: StageEvent.completedAt | Некорректное поле: StageEvent «completedAt» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.268 | Invalid field: StageEvent.failureCode | Некорректное поле: StageEvent «failureCode» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.269 | Invalid field: PerceptionOperationDiagnostics.imageDiagnosticReferences | Некорректное поле: PerceptionOperationDiagnostics «imageDiagnosticReferences» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.270 | Invalid field: PerceptionOperationDiagnostics.traceReference | Некорректное поле: PerceptionOperationDiagnostics «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.271 | Invalid field: PerceptionOperationDiagnostics.integrityReference | Некорректное поле: PerceptionOperationDiagnostics «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.272 | Invalid field: PerceptionOperationDiagnostics.schemaVersion | Некорректное поле: PerceptionOperationDiagnostics «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.280 | Invalid field: ImageAssetProcessingDiagnostic.imageDiagnosticId | Некорректное поле: ImageAssetProcessingDiagnostic «imageDiagnosticId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.281 | Invalid field: ImageAssetProcessingDiagnostic.operationId | Некорректное поле: ImageAssetProcessingDiagnostic «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.282 | Invalid field: ImageAssetProcessingDiagnostic.imageAssetId | Некорректное поле: ImageAssetProcessingDiagnostic «imageAssetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.283 | Invalid field: ImageAssetProcessingDiagnostic.processingStatus | Некорректное поле: ImageAssetProcessingDiagnostic «processingStatus» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.284 | Invalid field: ImageAssetProcessingDiagnostic.failureStage | Некорректное поле: ImageAssetProcessingDiagnostic «failureStage» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.285 | Invalid field: ImageAssetProcessingDiagnostic.failureCode | Некорректное поле: ImageAssetProcessingDiagnostic «failureCode» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.286 | Invalid field: ImageAssetProcessingDiagnostic.retryability | Некорректное поле: ImageAssetProcessingDiagnostic «retryability» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.287 | Invalid field: ImageAssetProcessingDiagnostic.providerTraceReference | Некорректное поле: ImageAssetProcessingDiagnostic «providerTraceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.288 | Invalid field: ImageAssetProcessingDiagnostic.preprocessingTraceReference | Некорректное поле: ImageAssetProcessingDiagnostic «preprocessingTraceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.289 | Invalid field: ImageAssetProcessingDiagnostic.evidenceAvailability | Некорректное поле: ImageAssetProcessingDiagnostic «evidenceAvailability» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.290 | Invalid field: ImageAssetProcessingDiagnostic.excludedFromFusionReason | Некорректное поле: ImageAssetProcessingDiagnostic «excludedFromFusionReason» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.291 | Invalid field: ImageAssetProcessingDiagnostic.schemaVersion | Некорректное поле: ImageAssetProcessingDiagnostic «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.300 | Invalid field: PerceptionEvidenceArtifact.evidenceArtifactId | Некорректное поле: PerceptionEvidenceArtifact «evidenceArtifactId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.301 | Invalid field: PerceptionEvidenceArtifact.operationId | Некорректное поле: PerceptionEvidenceArtifact «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.302 | Invalid field: PerceptionEvidenceArtifact.roomCaseId | Некорректное поле: PerceptionEvidenceArtifact «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.303 | Invalid field: PerceptionEvidenceArtifact.contributingImageAssetIds | Некорректное поле: PerceptionEvidenceArtifact «contributingImageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.304 | Invalid field: PerceptionEvidenceArtifact.sceneReference | Некорректное поле: PerceptionEvidenceArtifact «sceneReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.305 | Invalid field: PerceptionEvidenceArtifact.groundingRecords | Некорректное поле: PerceptionEvidenceArtifact «groundingRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.306 | Invalid field: GroundingRecord.groundingRecordId | Некорректное поле: GroundingRecord «groundingRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.307 | Invalid field: GroundingRecord.targetElementId | Некорректное поле: GroundingRecord «targetElementId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.308 | Invalid field: GroundingRecord.imageAssetIds | Некорректное поле: GroundingRecord «imageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.309 | Invalid field: GroundingRecord.evidenceReference | Некорректное поле: GroundingRecord «evidenceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.310 | Invalid field: GroundingRecord.evidenceType | Некорректное поле: GroundingRecord «evidenceType» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.311 | Invalid field: GroundingRecord.confidenceAssertionReference | Некорректное поле: GroundingRecord «confidenceAssertionReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.312 | Invalid field: GroundingRecord.provenanceAttachmentReference | Некорректное поле: GroundingRecord «provenanceAttachmentReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.313 | Invalid field: GroundingRecord.mechanismVersionReference | Некорректное поле: GroundingRecord «mechanismVersionReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.314 | Invalid field: GroundingRecord.promptVersionReference | Некорректное поле: GroundingRecord «promptVersionReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.315 | Invalid field: GroundingRecord.preprocessingTransformReference | Некорректное поле: GroundingRecord «preprocessingTransformReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.316 | Invalid field: PerceptionEvidenceArtifact.provenanceAttachments | Некорректное поле: PerceptionEvidenceArtifact «provenanceAttachments» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.317 | Invalid field: PerceptionEvidenceArtifact.bestEffortAssessments | Некорректное поле: PerceptionEvidenceArtifact «bestEffortAssessments» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.318 | Invalid field: PerceptionEvidenceArtifact.attributeEvidenceArtifacts | Некорректное поле: PerceptionEvidenceArtifact «attributeEvidenceArtifacts» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.319 | Invalid field: PerceptionEvidenceArtifact.evidenceSets | Некорректное поле: PerceptionEvidenceArtifact «evidenceSets» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.320 | Invalid field: PerceptionEvidenceArtifact.determinabilityBasisRecords | Некорректное поле: PerceptionEvidenceArtifact «determinabilityBasisRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.321 | Invalid field: PerceptionEvidenceArtifact.confidenceAssertions | Некорректное поле: PerceptionEvidenceArtifact «confidenceAssertions» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.322 | Invalid field: PerceptionEvidenceArtifact.contract6PackageReference | Некорректное поле: PerceptionEvidenceArtifact «contract6PackageReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.323 | Invalid field: PerceptionEvidenceArtifact.integrityReference | Некорректное поле: PerceptionEvidenceArtifact «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.324 | Invalid field: PerceptionEvidenceArtifact.historyReference | Некорректное поле: PerceptionEvidenceArtifact «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.325 | Invalid field: PerceptionEvidenceArtifact.bestEffortValues | Некорректное поле: PerceptionEvidenceArtifact «bestEffortValues» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.326 | Invalid field: PerceptionEvidenceArtifact.confidenceSourceSignals | Некорректное поле: PerceptionEvidenceArtifact «confidenceSourceSignals» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.327 | Invalid field: PerceptionEvidenceArtifact.schemaVersion | Некорректное поле: PerceptionEvidenceArtifact «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.330 | Invalid field: ProvenanceAttachmentRecord.provenanceAttachmentId | Некорректное поле: ProvenanceAttachmentRecord «provenanceAttachmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.331 | Invalid field: ProvenanceAttachmentRecord.targetAnnotationId | Некорректное поле: ProvenanceAttachmentRecord «targetAnnotationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.332 | Invalid field: ProvenanceAttachmentRecord.targetKind | Некорректное поле: ProvenanceAttachmentRecord «targetKind» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.333 | Invalid field: ProvenanceAttachmentRecord.provenanceIdentity | Некорректное поле: ProvenanceAttachmentRecord «provenanceIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.334 | Invalid field: ProvenanceAttachmentRecord.producingStageIdentity | Некорректное поле: ProvenanceAttachmentRecord «producingStageIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.335 | Invalid field: ProvenanceAttachmentRecord.producerIdentityAndVersions | Некорректное поле: ProvenanceAttachmentRecord «producerIdentityAndVersions» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.336 | Invalid field: ProvenanceAttachmentRecord.parentEvidenceOrValueIds | Некорректное поле: ProvenanceAttachmentRecord «parentEvidenceOrValueIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.337 | Invalid field: ProvenanceAttachmentRecord.roomCaseId | Некорректное поле: ProvenanceAttachmentRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.338 | Invalid field: ProvenanceAttachmentRecord.contractSemanticVersion | Некорректное поле: ProvenanceAttachmentRecord «contractSemanticVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.339 | Invalid field: ProvenanceAttachmentRecord.traceReference | Некорректное поле: ProvenanceAttachmentRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.340 | Invalid field: ProvenanceAttachmentRecord.integrityReference | Некорректное поле: ProvenanceAttachmentRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.341 | Invalid field: ProvenanceAttachmentRecord.historyReference | Некорректное поле: ProvenanceAttachmentRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.350 | Invalid field: BestEffortFieldAssessmentRecord.assessmentId | Некорректное поле: BestEffortFieldAssessmentRecord «assessmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.351 | Invalid field: BestEffortFieldAssessmentRecord.fieldIdentity | Некорректное поле: BestEffortFieldAssessmentRecord «fieldIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.352 | Invalid field: BestEffortFieldAssessmentRecord.capabilityIdentity | Некорректное поле: BestEffortFieldAssessmentRecord «capabilityIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.353 | Invalid field: BestEffortFieldAssessmentRecord.ownerId | Некорректное поле: BestEffortFieldAssessmentRecord «ownerId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.354 | Invalid field: BestEffortFieldAssessmentRecord.ownerKind | Некорректное поле: BestEffortFieldAssessmentRecord «ownerKind» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.355 | Invalid field: BestEffortFieldAssessmentRecord.roomCaseId | Некорректное поле: BestEffortFieldAssessmentRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.356 | Invalid field: BestEffortFieldAssessmentRecord.linkedValueIds | Некорректное поле: BestEffortFieldAssessmentRecord «linkedValueIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.357 | Invalid field: BestEffortFieldAssessmentRecord.determinabilityBasisRecordId | Некорректное поле: BestEffortFieldAssessmentRecord «determinabilityBasisRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.358 | Invalid field: BestEffortFieldAssessmentRecord.contractSemanticVersion | Некорректное поле: BestEffortFieldAssessmentRecord «contractSemanticVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.359 | Invalid field: BestEffortFieldAssessmentRecord.producingStageIdentity | Некорректное поле: BestEffortFieldAssessmentRecord «producingStageIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.360 | Invalid field: BestEffortFieldAssessmentRecord.traceReference | Некорректное поле: BestEffortFieldAssessmentRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.361 | Invalid field: BestEffortFieldAssessmentRecord.integrityReference | Некорректное поле: BestEffortFieldAssessmentRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.362 | Invalid field: BestEffortFieldAssessmentRecord.historyReference | Некорректное поле: BestEffortFieldAssessmentRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.370 | Invalid field: AttributeEvidenceArtifact.attributeEvidenceArtifactId | Некорректное поле: AttributeEvidenceArtifact «attributeEvidenceArtifactId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.371 | Invalid field: AttributeEvidenceArtifact.fieldAssessmentId | Некорректное поле: AttributeEvidenceArtifact «fieldAssessmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.372 | Invalid field: AttributeEvidenceArtifact.bestEffortValueId | Некорректное поле: AttributeEvidenceArtifact «bestEffortValueId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.373 | Invalid field: AttributeEvidenceArtifact.ownerId | Некорректное поле: AttributeEvidenceArtifact «ownerId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.374 | Invalid field: AttributeEvidenceArtifact.evidenceKindIdentity | Некорректное поле: AttributeEvidenceArtifact «evidenceKindIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.375 | Invalid field: AttributeEvidenceArtifact.provenanceAttachmentId | Некорректное поле: AttributeEvidenceArtifact «provenanceAttachmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.376 | Invalid field: AttributeEvidenceArtifact.roomCaseId | Некорректное поле: AttributeEvidenceArtifact «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.377 | Invalid field: AttributeEvidenceArtifact.atomicContributions | Некорректное поле: AttributeEvidenceArtifact «atomicContributions» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.378 | Invalid field: AttributeEvidenceArtifact.producingStageIdentity | Некорректное поле: AttributeEvidenceArtifact «producingStageIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.379 | Invalid field: AttributeEvidenceArtifact.producerIdentityAndVersions | Некорректное поле: AttributeEvidenceArtifact «producerIdentityAndVersions» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.380 | Invalid field: AttributeEvidenceArtifact.derivationParentIds | Некорректное поле: AttributeEvidenceArtifact «derivationParentIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.381 | Invalid field: AttributeEvidenceArtifact.contractSemanticVersion | Некорректное поле: AttributeEvidenceArtifact «contractSemanticVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.382 | Invalid field: AttributeEvidenceArtifact.serializationSchemaReference | Некорректное поле: AttributeEvidenceArtifact «serializationSchemaReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.383 | Invalid field: AttributeEvidenceArtifact.reasonOrTraceReference | Некорректное поле: AttributeEvidenceArtifact «reasonOrTraceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.384 | Invalid field: AttributeEvidenceArtifact.integrityReference | Некорректное поле: AttributeEvidenceArtifact «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.385 | Invalid field: AttributeEvidenceArtifact.dataUseEligibilityReference | Некорректное поле: AttributeEvidenceArtifact «dataUseEligibilityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.386 | Invalid field: AttributeEvidenceArtifact.consentEligibilityReference | Некорректное поле: AttributeEvidenceArtifact «consentEligibilityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.387 | Invalid field: AttributeEvidenceArtifact.authorizationStateReference | Некорректное поле: AttributeEvidenceArtifact «authorizationStateReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.388 | Invalid field: AttributeEvidenceArtifact.retentionDeletionPolicyReference | Некорректное поле: AttributeEvidenceArtifact «retentionDeletionPolicyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.389 | Invalid field: AttributeEvidenceArtifact.safeFailureReference | Некорректное поле: AttributeEvidenceArtifact «safeFailureReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.390 | Invalid field: AttributeEvidenceArtifact.tamperEvidentHistoryReference | Некорректное поле: AttributeEvidenceArtifact «tamperEvidentHistoryReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.391 | Invalid field: AttributeEvidenceArtifact.futureFeedbackLinkReference | Некорректное поле: AttributeEvidenceArtifact «futureFeedbackLinkReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.392 | Invalid field: AttributeEvidenceArtifact.noRegressionEvaluationReference | Некорректное поле: AttributeEvidenceArtifact «noRegressionEvaluationReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.393 | Invalid field: AttributeEvidenceArtifact.rollbackCompatibilityReference | Некорректное поле: AttributeEvidenceArtifact «rollbackCompatibilityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.394 | Invalid field: AttributeEvidenceArtifact.predecessorArtifactId | Некорректное поле: AttributeEvidenceArtifact «predecessorArtifactId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.395 | Invalid field: AttributeEvidenceArtifact.artifactRevisionState | Некорректное поле: AttributeEvidenceArtifact «artifactRevisionState» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.400 | Invalid field: AtomicEvidenceContribution.contributionId | Некорректное поле: AtomicEvidenceContribution «contributionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.401 | Invalid field: AtomicEvidenceContribution.imageAssetId | Некорректное поле: AtomicEvidenceContribution «imageAssetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.402 | Invalid field: AtomicEvidenceContribution.sourceAssetId | Некорректное поле: AtomicEvidenceContribution «sourceAssetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.403 | Invalid field: AtomicEvidenceContribution.locatorOrInferenceBasisReference | Некорректное поле: AtomicEvidenceContribution «locatorOrInferenceBasisReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.404 | Invalid field: AtomicEvidenceContribution.preprocessingLineageReference | Некорректное поле: AtomicEvidenceContribution «preprocessingLineageReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.405 | Invalid field: AtomicEvidenceContribution.integrityReference | Некорректное поле: AtomicEvidenceContribution «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.406 | Invalid field: AtomicEvidenceContribution.historyReference | Некорректное поле: AtomicEvidenceContribution «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.407 | Invalid field: AtomicEvidenceContribution.producingStageVersionReference | Некорректное поле: AtomicEvidenceContribution «producingStageVersionReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.410 | Invalid field: EvidenceSetRecord.evidenceSetId | Некорректное поле: EvidenceSetRecord «evidenceSetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.411 | Invalid field: EvidenceSetRecord.targetKind | Некорректное поле: EvidenceSetRecord «targetKind» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.412 | Invalid field: EvidenceSetRecord.fieldAssessmentId | Некорректное поле: EvidenceSetRecord «fieldAssessmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.413 | Invalid field: EvidenceSetRecord.bestEffortValueId | Некорректное поле: EvidenceSetRecord «bestEffortValueId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.414 | Invalid field: EvidenceSetRecord.roomCaseId | Некорректное поле: EvidenceSetRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.415 | Invalid field: EvidenceSetRecord.contributionIds | Некорректное поле: EvidenceSetRecord «contributionIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.416 | Invalid field: EvidenceSetRecord.distinctImageAssetIds | Некорректное поле: EvidenceSetRecord «distinctImageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.417 | Invalid field: EvidenceSetRecord.fusionOperationIdentity | Некорректное поле: EvidenceSetRecord «fusionOperationIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.418 | Invalid field: EvidenceSetRecord.fusionOperationVersion | Некорректное поле: EvidenceSetRecord «fusionOperationVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.419 | Invalid field: EvidenceSetRecord.fingerprintRuleIdentity | Некорректное поле: EvidenceSetRecord «fingerprintRuleIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.420 | Invalid field: EvidenceSetRecord.relationshipRecords | Некорректное поле: EvidenceSetRecord «relationshipRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.421 | Invalid field: EvidenceSetRecord.contradictionReferences | Некорректное поле: EvidenceSetRecord «contradictionReferences» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.422 | Invalid field: EvidenceSetRecord.integrityReference | Некорректное поле: EvidenceSetRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.423 | Invalid field: EvidenceSetRecord.historyReference | Некорректное поле: EvidenceSetRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.430 | Invalid field: DeterminabilityEvidenceBasisRecord.determinabilityBasisRecordId | Некорректное поле: DeterminabilityEvidenceBasisRecord «determinabilityBasisRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.431 | Invalid field: DeterminabilityEvidenceBasisRecord.fieldAssessmentId | Некорректное поле: DeterminabilityEvidenceBasisRecord «fieldAssessmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.432 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedBestEffortValueIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedBestEffortValueIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.433 | Invalid field: DeterminabilityEvidenceBasisRecord.roomCaseId | Некорректное поле: DeterminabilityEvidenceBasisRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.434 | Invalid field: DeterminabilityEvidenceBasisRecord.basisIdentities | Некорректное поле: DeterminabilityEvidenceBasisRecord «basisIdentities» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.435 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedAttributeEvidenceArtifactIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedAttributeEvidenceArtifactIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.436 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedEvidenceSetIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedEvidenceSetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.437 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedFailureIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedFailureIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.438 | Invalid field: DeterminabilityEvidenceBasisRecord.contractSemanticVersion | Некорректное поле: DeterminabilityEvidenceBasisRecord «contractSemanticVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.439 | Invalid field: DeterminabilityEvidenceBasisRecord.traceReference | Некорректное поле: DeterminabilityEvidenceBasisRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.440 | Invalid field: DeterminabilityEvidenceBasisRecord.integrityReference | Некорректное поле: DeterminabilityEvidenceBasisRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.441 | Invalid field: DeterminabilityEvidenceBasisRecord.historyReference | Некорректное поле: DeterminabilityEvidenceBasisRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.450 | Invalid field: EvidenceRelationshipRecord.relationshipRecordId | Некорректное поле: EvidenceRelationshipRecord «relationshipRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.451 | Invalid field: EvidenceRelationshipRecord.evidenceSetId | Некорректное поле: EvidenceRelationshipRecord «evidenceSetId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.452 | Invalid field: EvidenceRelationshipRecord.relationshipIdentity | Некорректное поле: EvidenceRelationshipRecord «relationshipIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.453 | Invalid field: EvidenceRelationshipRecord.subjectKindIdentity | Некорректное поле: EvidenceRelationshipRecord «subjectKindIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.454 | Invalid field: EvidenceRelationshipRecord.subjectIds | Некорректное поле: EvidenceRelationshipRecord «subjectIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.455 | Invalid field: EvidenceRelationshipRecord.aspectIdentity | Некорректное поле: EvidenceRelationshipRecord «aspectIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.456 | Invalid field: EvidenceRelationshipRecord.producingRuleAndVersion | Некорректное поле: EvidenceRelationshipRecord «producingRuleAndVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.457 | Invalid field: EvidenceRelationshipRecord.roomCaseId | Некорректное поле: EvidenceRelationshipRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.458 | Invalid field: EvidenceRelationshipRecord.integrityReference | Некорректное поле: EvidenceRelationshipRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.459 | Invalid field: EvidenceRelationshipRecord.historyReference | Некорректное поле: EvidenceRelationshipRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.460 | Invalid field: BestEffortValueRevision.bestEffortValueId | Некорректное поле: BestEffortValueRevision «bestEffortValueId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.461 | Invalid field: BestEffortValueRevision.fieldAssessmentId | Некорректное поле: BestEffortValueRevision «fieldAssessmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.462 | Invalid field: BestEffortValueRevision.valueElementIdentity | Некорректное поле: BestEffortValueRevision «valueElementIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.463 | Invalid field: BestEffortValueRevision.valueRevisionId | Некорректное поле: BestEffortValueRevision «valueRevisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.464 | Invalid field: BestEffortValueRevision.valuePayload | Некорректное поле: BestEffortValueRevision «valuePayload» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.465 | Invalid field: BestEffortValueRevision.provenanceAttachmentId | Некорректное поле: BestEffortValueRevision «provenanceAttachmentId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.466 | Invalid field: BestEffortValueRevision.predecessorValueId | Некорректное поле: BestEffortValueRevision «predecessorValueId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.467 | Invalid field: BestEffortValueRevision.revisionState | Некорректное поле: BestEffortValueRevision «revisionState» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.468 | Invalid field: BestEffortValueRevision.integrityReference | Некорректное поле: BestEffortValueRevision «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.469 | Invalid field: BestEffortValueRevision.historyReference | Некорректное поле: BestEffortValueRevision «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.500 | Invalid field: ConfidenceAssertionRecord.recordTypeIdentity | Некорректное поле: ConfidenceAssertionRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.501 | Invalid field: ConfidenceAssertionRecord.confidenceAssertionId | Некорректное поле: ConfidenceAssertionRecord «confidenceAssertionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.502 | Invalid field: ConfidenceAssertionRecord.subjectId | Некорректное поле: ConfidenceAssertionRecord «subjectId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.503 | Invalid field: ConfidenceAssertionRecord.subjectKindIdentity | Некорректное поле: ConfidenceAssertionRecord «subjectKindIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.504 | Invalid field: ConfidenceAssertionRecord.stateIdentity | Некорректное поле: ConfidenceAssertionRecord «stateIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.505 | Invalid field: ConfidenceAssertionRecord.sourceIdentity | Некорректное поле: ConfidenceAssertionRecord «sourceIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.506 | Invalid field: ConfidenceAssertionRecord.transformationIdentity | Некорректное поле: ConfidenceAssertionRecord «transformationIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.507 | Invalid field: ConfidenceAssertionRecord.signalTypeIdentities | Некорректное поле: ConfidenceAssertionRecord «signalTypeIdentities» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.508 | Invalid field: ConfidenceAssertionRecord.sourceSignalIds | Некорректное поле: ConfidenceAssertionRecord «sourceSignalIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.509 | Invalid field: ConfidenceAssertionRecord.generationMethodId | Некорректное поле: ConfidenceAssertionRecord «generationMethodId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.510 | Invalid field: ConfidenceAssertionRecord.normalizationProfileId | Некорректное поле: ConfidenceAssertionRecord «normalizationProfileId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.511 | Invalid field: ConfidenceAssertionRecord.mappingRuleId | Некорректное поле: ConfidenceAssertionRecord «mappingRuleId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.512 | Invalid field: ConfidenceAssertionRecord.producerIdentityAndVersions | Некорректное поле: ConfidenceAssertionRecord «producerIdentityAndVersions» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.513 | Invalid field: ConfidenceAssertionRecord.operationId | Некорректное поле: ConfidenceAssertionRecord «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.514 | Invalid field: ConfidenceAssertionRecord.roomCaseId | Некорректное поле: ConfidenceAssertionRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.515 | Invalid field: ConfidenceAssertionRecord.producingStageIdentity | Некорректное поле: ConfidenceAssertionRecord «producingStageIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.516 | Invalid field: ConfidenceAssertionRecord.contractSemanticVersion | Некорректное поле: ConfidenceAssertionRecord «contractSemanticVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.517 | Invalid field: ConfidenceAssertionRecord.assertionRevisionId | Некорректное поле: ConfidenceAssertionRecord «assertionRevisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.518 | Invalid field: ConfidenceAssertionRecord.predecessorAssertionId | Некорректное поле: ConfidenceAssertionRecord «predecessorAssertionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.519 | Invalid field: ConfidenceAssertionRecord.traceReference | Некорректное поле: ConfidenceAssertionRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.520 | Invalid field: ConfidenceAssertionRecord.integrityReference | Некорректное поле: ConfidenceAssertionRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.521 | Invalid field: ConfidenceAssertionRecord.historyReference | Некорректное поле: ConfidenceAssertionRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.530 | Invalid field: ConfidenceSourceSignalRecord.sourceSignalId | Некорректное поле: ConfidenceSourceSignalRecord «sourceSignalId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.531 | Invalid field: ConfidenceSourceSignalRecord.sourceIdentity | Некорректное поле: ConfidenceSourceSignalRecord «sourceIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.532 | Invalid field: ConfidenceSourceSignalRecord.signalTypeIdentity | Некорректное поле: ConfidenceSourceSignalRecord «signalTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.533 | Invalid field: ConfidenceSourceSignalRecord.generationMethodId | Некорректное поле: ConfidenceSourceSignalRecord «generationMethodId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.534 | Invalid field: ConfidenceSourceSignalRecord.originalRawTypeDomain | Некорректное поле: ConfidenceSourceSignalRecord «originalRawTypeDomain» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.535 | Invalid field: ConfidenceSourceSignalRecord.rawSignalOrUnavailabilityReason | Некорректное поле: ConfidenceSourceSignalRecord «rawSignalOrUnavailabilityReason» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.536 | Invalid field: ConfidenceSourceSignalRecord.producerIdentityAndVersions | Некорректное поле: ConfidenceSourceSignalRecord «producerIdentityAndVersions» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.537 | Invalid field: ConfidenceSourceSignalRecord.operationId | Некорректное поле: ConfidenceSourceSignalRecord «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.538 | Invalid field: ConfidenceSourceSignalRecord.roomCaseId | Некорректное поле: ConfidenceSourceSignalRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.539 | Invalid field: ConfidenceSourceSignalRecord.contributingImageAssetIds | Некорректное поле: ConfidenceSourceSignalRecord «contributingImageAssetIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.540 | Invalid field: ConfidenceSourceSignalRecord.producingStageIdentity | Некорректное поле: ConfidenceSourceSignalRecord «producingStageIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.541 | Invalid field: ConfidenceSourceSignalRecord.integrityReference | Некорректное поле: ConfidenceSourceSignalRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.542 | Invalid field: ConfidenceSourceSignalRecord.revisionId | Некорректное поле: ConfidenceSourceSignalRecord «revisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.600 | Invalid field: Contract6DeterminabilityPackage.packageId | Некорректное поле: Contract6DeterminabilityPackage «packageId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.601 | Invalid field: Contract6DeterminabilityPackage.operationId | Некорректное поле: Contract6DeterminabilityPackage «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.602 | Invalid field: Contract6DeterminabilityPackage.roomCaseId | Некорректное поле: Contract6DeterminabilityPackage «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.603 | Invalid field: Contract6DeterminabilityPackage.annotationUnits | Некорректное поле: Contract6DeterminabilityPackage «annotationUnits» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.604 | Invalid field: Contract6DeterminabilityPackage.pairingRecords | Некорректное поле: Contract6DeterminabilityPackage «pairingRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.605 | Invalid field: Contract6DeterminabilityPackage.basisLinkRecords | Некорректное поле: Contract6DeterminabilityPackage «basisLinkRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.606 | Invalid field: Contract6DeterminabilityPackage.outcomeDecisionRecords | Некорректное поле: Contract6DeterminabilityPackage «outcomeDecisionRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.607 | Invalid field: Contract6DeterminabilityPackage.sealingRecords | Некорректное поле: Contract6DeterminabilityPackage «sealingRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.608 | Invalid field: Contract6DeterminabilityPackage.adjudicationRecords | Некорректное поле: Contract6DeterminabilityPackage «adjudicationRecords» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.609 | Invalid field: Contract6DeterminabilityPackage.integrityReference | Некорректное поле: Contract6DeterminabilityPackage «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.610 | Invalid field: AnnotationUnitRecord.annotationUnitId | Некорректное поле: AnnotationUnitRecord «annotationUnitId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.611 | Invalid field: AnnotationUnitRecord.recordTypeIdentity | Некорректное поле: AnnotationUnitRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.612 | Invalid field: AnnotationUnitRecord.operationId | Некорректное поле: AnnotationUnitRecord «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.613 | Invalid field: AnnotationUnitRecord.roomCaseId | Некорректное поле: AnnotationUnitRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.614 | Invalid field: AnnotationUnitRecord.subjectId | Некорректное поле: AnnotationUnitRecord «subjectId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.615 | Invalid field: AnnotationUnitRecord.subjectKindIdentity | Некорректное поле: AnnotationUnitRecord «subjectKindIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.616 | Invalid field: AnnotationUnitRecord.unitTypeIdentity | Некорректное поле: AnnotationUnitRecord «unitTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.617 | Invalid field: AnnotationUnitRecord.unitGranularityIdentity | Некорректное поле: AnnotationUnitRecord «unitGranularityIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.618 | Invalid field: AnnotationUnitRecord.viewScopeIdentity | Некорректное поле: AnnotationUnitRecord «viewScopeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.619 | Invalid field: AnnotationUnitRecord.importedSemanticIds | Некорректное поле: AnnotationUnitRecord «importedSemanticIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.620 | Invalid field: AnnotationUnitRecord.memberId | Некорректное поле: AnnotationUnitRecord «memberId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.621 | Invalid field: AnnotationUnitRecord.revisionId | Некорректное поле: AnnotationUnitRecord «revisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.622 | Invalid field: AnnotationUnitRecord.predecessorAnnotationUnitId | Некорректное поле: AnnotationUnitRecord «predecessorAnnotationUnitId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.623 | Invalid field: AnnotationUnitRecord.basisLinkRecordId | Некорректное поле: AnnotationUnitRecord «basisLinkRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.624 | Invalid field: AnnotationUnitRecord.pairingRecordId | Некорректное поле: AnnotationUnitRecord «pairingRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.625 | Invalid field: AnnotationUnitRecord.outcomeDecisionRecordId | Некорректное поле: AnnotationUnitRecord «outcomeDecisionRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.626 | Invalid field: AnnotationUnitRecord.sealingRecordId | Некорректное поле: AnnotationUnitRecord «sealingRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.627 | Invalid field: AnnotationUnitRecord.adjudicationRecordId | Некорректное поле: AnnotationUnitRecord «adjudicationRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.628 | Invalid field: AnnotationUnitRecord.traceReference | Некорректное поле: AnnotationUnitRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.629 | Invalid field: AnnotationUnitRecord.integrityReference | Некорректное поле: AnnotationUnitRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.630 | Invalid field: AnnotationUnitRecord.historyReference | Некорректное поле: AnnotationUnitRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.640 | Invalid field: PairingRecord.pairingRecordId | Некорректное поле: PairingRecord «pairingRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.641 | Invalid field: PairingRecord.annotationUnitId | Некорректное поле: PairingRecord «annotationUnitId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.642 | Invalid field: PairingRecord.pairingRuleIdentity | Некорректное поле: PairingRecord «pairingRuleIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.643 | Invalid field: PairingRecord.pairingStateIdentity | Некорректное поле: PairingRecord «pairingStateIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.644 | Invalid field: PairingRecord.participantIds | Некорректное поле: PairingRecord «participantIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.645 | Invalid field: PairingRecord.identityEqualityResults | Некорректное поле: PairingRecord «identityEqualityResults» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.646 | Invalid field: PairingRecord.duplicateNormalizationReferences | Некорректное поле: PairingRecord «duplicateNormalizationReferences» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.647 | Invalid field: PairingRecord.conflictReferences | Некорректное поле: PairingRecord «conflictReferences» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.648 | Invalid field: PairingRecord.revisionId | Некорректное поле: PairingRecord «revisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.649 | Invalid field: PairingRecord.predecessorPairingRecordId | Некорректное поле: PairingRecord «predecessorPairingRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.650 | Invalid field: PairingRecord.traceReference | Некорректное поле: PairingRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.651 | Invalid field: PairingRecord.integrityReference | Некорректное поле: PairingRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.652 | Invalid field: PairingRecord.historyReference | Некорректное поле: PairingRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.655 | Invalid field: Contract6DeterminabilityPackage.schemaVersion | Некорректное поле: Contract6DeterminabilityPackage «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.660 | Invalid field: BasisLinkRecord.basisLinkRecordId | Некорректное поле: BasisLinkRecord «basisLinkRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.661 | Invalid field: BasisLinkRecord.annotationUnitId | Некорректное поле: BasisLinkRecord «annotationUnitId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.662 | Invalid field: BasisLinkRecord.basisIdentities | Некорректное поле: BasisLinkRecord «basisIdentities» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.663 | Invalid field: BasisLinkRecord.evidenceReferences | Некорректное поле: BasisLinkRecord «evidenceReferences» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.664 | Invalid field: BasisLinkRecord.revisionId | Некорректное поле: BasisLinkRecord «revisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.665 | Invalid field: BasisLinkRecord.traceReference | Некорректное поле: BasisLinkRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.666 | Invalid field: BasisLinkRecord.integrityReference | Некорректное поле: BasisLinkRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.667 | Invalid field: BasisLinkRecord.historyReference | Некорректное поле: BasisLinkRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.670 | Invalid field: OutcomeDecisionRecord.outcomeDecisionRecordId | Некорректное поле: OutcomeDecisionRecord «outcomeDecisionRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.671 | Invalid field: OutcomeDecisionRecord.annotationUnitId | Некорректное поле: OutcomeDecisionRecord «annotationUnitId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.672 | Invalid field: OutcomeDecisionRecord.outcomeIdentity | Некорректное поле: OutcomeDecisionRecord «outcomeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.673 | Invalid field: OutcomeDecisionRecord.derivationOrAdjudicationBasisReference | Некорректное поле: OutcomeDecisionRecord «derivationOrAdjudicationBasisReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.674 | Invalid field: OutcomeDecisionRecord.revisionId | Некорректное поле: OutcomeDecisionRecord «revisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.675 | Invalid field: OutcomeDecisionRecord.traceReference | Некорректное поле: OutcomeDecisionRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.676 | Invalid field: OutcomeDecisionRecord.integrityReference | Некорректное поле: OutcomeDecisionRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.677 | Invalid field: OutcomeDecisionRecord.historyReference | Некорректное поле: OutcomeDecisionRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.680 | Invalid field: Contract6SealingRecord.sealingRecordId | Некорректное поле: Contract6SealingRecord «sealingRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.681 | Invalid field: Contract6SealingRecord.annotationUnitId | Некорректное поле: Contract6SealingRecord «annotationUnitId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.682 | Invalid field: Contract6SealingRecord.lifecycleTransitionIdentity | Некорректное поле: Contract6SealingRecord «lifecycleTransitionIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.683 | Invalid field: Contract6SealingRecord.authorityReference | Некорректное поле: Contract6SealingRecord «authorityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.684 | Invalid field: Contract6SealingRecord.sealedRevisionId | Некорректное поле: Contract6SealingRecord «sealedRevisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.685 | Invalid field: Contract6SealingRecord.predecessorSealingRecordId | Некорректное поле: Contract6SealingRecord «predecessorSealingRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.686 | Invalid field: Contract6SealingRecord.integrityReference | Некорректное поле: Contract6SealingRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.687 | Invalid field: Contract6SealingRecord.historyReference | Некорректное поле: Contract6SealingRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.690 | Invalid field: AdjudicationRecord.adjudicationRecordId | Некорректное поле: AdjudicationRecord «adjudicationRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.691 | Invalid field: AdjudicationRecord.annotationUnitId | Некорректное поле: AdjudicationRecord «annotationUnitId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.692 | Invalid field: AdjudicationRecord.triggerIdentity | Некорректное поле: AdjudicationRecord «triggerIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.693 | Invalid field: AdjudicationRecord.retainedBasisReferences | Некорректное поле: AdjudicationRecord «retainedBasisReferences» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.694 | Invalid field: AdjudicationRecord.rationaleReference | Некорректное поле: AdjudicationRecord «rationaleReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.695 | Invalid field: AdjudicationRecord.authorityReference | Некорректное поле: AdjudicationRecord «authorityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.696 | Invalid field: AdjudicationRecord.dispositionIdentity | Некорректное поле: AdjudicationRecord «dispositionIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.697 | Invalid field: AdjudicationRecord.revisionId | Некорректное поле: AdjudicationRecord «revisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.698 | Invalid field: AdjudicationRecord.predecessorAdjudicationRecordId | Некорректное поле: AdjudicationRecord «predecessorAdjudicationRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.699 | Invalid field: AdjudicationRecord.integrityReference | Некорректное поле: AdjudicationRecord «integrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.700 | Invalid field: AdjudicationRecord.historyReference | Некорректное поле: AdjudicationRecord «historyReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.704 | Invalid field: Contract8EvaluationPackage.packageId | Некорректное поле: Contract8EvaluationPackage «packageId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.705 | Invalid field: Contract8EvaluationPackage.evaluationConfigurationReference | Некорректное поле: Contract8EvaluationPackage «evaluationConfigurationReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.706 | Invalid field: Contract8EvaluationPackage.rawAssertions | Некорректное поле: Contract8EvaluationPackage «rawAssertions» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.707 | Invalid field: Contract8EvaluationPackage.projectionFacts | Некорректное поле: Contract8EvaluationPackage «projectionFacts» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.708 | Invalid field: Contract8EvaluationPackage.records | Некорректное поле: Contract8EvaluationPackage «records» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.709 | Invalid field: Contract8EvaluationPackage.schemaVersion | Некорректное поле: Contract8EvaluationPackage «schemaVersion» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.710 | Invalid field: RawMechanismAssertionArtifact.rawAssertionId | Некорректное поле: RawMechanismAssertionArtifact «rawAssertionId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.711 | Invalid field: RawMechanismAssertionArtifact.untouchedPayloadReference | Некорректное поле: RawMechanismAssertionArtifact «untouchedPayloadReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.712 | Invalid field: RawMechanismAssertionArtifact.semanticCaseId | Некорректное поле: RawMechanismAssertionArtifact «semanticCaseId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.713 | Invalid field: RawMechanismAssertionArtifact.roomCaseId | Некорректное поле: RawMechanismAssertionArtifact «roomCaseId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.714 | Invalid field: RawMechanismAssertionArtifact.contributingImageAssetIds | Некорректное поле: RawMechanismAssertionArtifact «contributingImageAssetIds» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.715 | Invalid field: RawMechanismAssertionArtifact.rawEmittedCode | Некорректное поле: RawMechanismAssertionArtifact «rawEmittedCode» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.716 | Invalid field: RawMechanismAssertionArtifact.rawSubject | Некорректное поле: RawMechanismAssertionArtifact «rawSubject» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.717 | Invalid field: RawMechanismAssertionArtifact.rawTarget | Некорректное поле: RawMechanismAssertionArtifact «rawTarget» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.718 | Invalid field: RawMechanismAssertionArtifact.rawLocus | Некорректное поле: RawMechanismAssertionArtifact «rawLocus» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.719 | Invalid field: RawMechanismAssertionArtifact.providerConfigurationReference | Некорректное поле: RawMechanismAssertionArtifact «providerConfigurationReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.720 | Invalid field: RawMechanismAssertionArtifact.evaluationConfigurationReference | Некорректное поле: RawMechanismAssertionArtifact «evaluationConfigurationReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.721 | Invalid field: RawMechanismAssertionArtifact.normalizationStatus | Некорректное поле: RawMechanismAssertionArtifact «normalizationStatus» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.722 | Invalid field: RawMechanismAssertionArtifact.producedNormalizedClaimLinks | Некорректное поле: RawMechanismAssertionArtifact «producedNormalizedClaimLinks» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.723 | Invalid field: RawMechanismAssertionArtifact.rawMalformedComparisonLink | Некорректное поле: RawMechanismAssertionArtifact «rawMalformedComparisonLink» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.724 | Invalid field: RawMechanismAssertionArtifact.assertionProjectionFactId | Некорректное поле: RawMechanismAssertionArtifact «assertionProjectionFactId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.725 | Invalid field: RawMechanismAssertionArtifact.historyReference | Некорректное поле: RawMechanismAssertionArtifact «historyReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.730 | Invalid field: ETAPAssertionProjectionFact.projectionFactId | Некорректное поле: ETAPAssertionProjectionFact «projectionFactId» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.731 | Invalid field: ETAPAssertionProjectionFact.rawAssertionId | Некорректное поле: ETAPAssertionProjectionFact «rawAssertionId» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.732 | Invalid field: ETAPAssertionProjectionFact.normalizedProducedClaimLinks | Некорректное поле: ETAPAssertionProjectionFact «normalizedProducedClaimLinks» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.733 | Invalid field: ETAPAssertionProjectionFact.atomicComparisonLinks | Некорректное поле: ETAPAssertionProjectionFact «atomicComparisonLinks» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.734 | Invalid field: ETAPAssertionProjectionFact.rawMalformedComparisonLink | Некорректное поле: ETAPAssertionProjectionFact «rawMalformedComparisonLink» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.735 | Invalid field: ETAPAssertionProjectionFact.projectionResult | Некорректное поле: ETAPAssertionProjectionFact «projectionResult» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.736 | Invalid field: ETAPAssertionProjectionFact.versionConfigurationBundle | Некорректное поле: ETAPAssertionProjectionFact «versionConfigurationBundle» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.737 | Invalid field: ETAPAssertionProjectionFact.etapConsumptionState | Некорректное поле: ETAPAssertionProjectionFact «etapConsumptionState» | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.740 | Invalid field: C8EvaluationRecord.recordId | Некорректное поле: C8EvaluationRecord «recordId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.741 | Invalid field: C8EvaluationRecord.recordTypeIdentity | Некорректное поле: C8EvaluationRecord «recordTypeIdentity» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.742 | Invalid field: C8EvaluationRecord.semanticCaseId | Некорректное поле: C8EvaluationRecord «semanticCaseId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.743 | Invalid field: C8EvaluationRecord.roomCaseId | Некорректное поле: C8EvaluationRecord «roomCaseId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.744 | Invalid field: C8EvaluationRecord.claimCodeIdentity | Некорректное поле: C8EvaluationRecord «claimCodeIdentity» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.745 | Invalid field: C8EvaluationRecord.dispositionIdentity | Некорректное поле: C8EvaluationRecord «dispositionIdentity» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.746 | Invalid field: C8EvaluationRecord.requirementLevelIdentity | Некорректное поле: C8EvaluationRecord «requirementLevelIdentity» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.747 | Invalid field: C8EvaluationRecord.assertionScopeIdentity | Некорректное поле: C8EvaluationRecord «assertionScopeIdentity» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.748 | Invalid field: C8EvaluationRecord.subject | Некорректное поле: C8EvaluationRecord «subject» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.749 | Invalid field: C8EvaluationRecord.target | Некорректное поле: C8EvaluationRecord «target» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.750 | Invalid field: C8EvaluationRecord.locus | Некорректное поле: C8EvaluationRecord «locus» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.751 | Invalid field: C8EvaluationRecord.expectedState | Некорректное поле: C8EvaluationRecord «expectedState» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.752 | Invalid field: C8EvaluationRecord.rawAssertionId | Некорректное поле: C8EvaluationRecord «rawAssertionId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.753 | Invalid field: C8EvaluationRecord.normalizationTransformationId | Некорректное поле: C8EvaluationRecord «normalizationTransformationId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.754 | Invalid field: C8EvaluationRecord.normalizedAtomicInterpretationId | Некорректное поле: C8EvaluationRecord «normalizedAtomicInterpretationId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.755 | Invalid field: C8EvaluationRecord.expectationOrProhibitionRecordId | Некорректное поле: C8EvaluationRecord «expectationOrProhibitionRecordId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.756 | Invalid field: C8EvaluationRecord.matchedProducedRecordId | Некорректное поле: C8EvaluationRecord «matchedProducedRecordId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.757 | Invalid field: C8EvaluationRecord.rawAssertionDefectLink | Некорректное поле: C8EvaluationRecord «rawAssertionDefectLink» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.758 | Invalid field: C8EvaluationRecord.primaryComparisonResultIdentity | Некорректное поле: C8EvaluationRecord «primaryComparisonResultIdentity» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.759 | Invalid field: C8EvaluationRecord.secondaryFailureIdentities | Некорректное поле: C8EvaluationRecord «secondaryFailureIdentities» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.760 | Invalid field: C8EvaluationRecord.evidenceReferences | Некорректное поле: C8EvaluationRecord «evidenceReferences» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.761 | Invalid field: C8EvaluationRecord.contributingImageAssetIds | Некорректное поле: C8EvaluationRecord «contributingImageAssetIds» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.762 | Invalid field: C8EvaluationRecord.subsetReference | Некорректное поле: C8EvaluationRecord «subsetReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.763 | Invalid field: C8EvaluationRecord.lineageReference | Некорректное поле: C8EvaluationRecord «lineageReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.764 | Invalid field: C8EvaluationRecord.contractSemanticVersionReference | Некорректное поле: C8EvaluationRecord «contractSemanticVersionReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.765 | Invalid field: C8EvaluationRecord.claimVocabularyVersionReference | Некорректное поле: C8EvaluationRecord «claimVocabularyVersionReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.766 | Invalid field: C8EvaluationRecord.ruleRegistryVersionReference | Некорректное поле: C8EvaluationRecord «ruleRegistryVersionReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.767 | Invalid field: C8EvaluationRecord.validationRegistryVersionReference | Некорректное поле: C8EvaluationRecord «validationRegistryVersionReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.768 | Invalid field: C8EvaluationRecord.comparisonPolicyVersionReference | Некорректное поле: C8EvaluationRecord «comparisonPolicyVersionReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.769 | Invalid field: C8EvaluationRecord.providerConfigurationReference | Некорректное поле: C8EvaluationRecord «providerConfigurationReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.770 | Invalid field: C8EvaluationRecord.evaluationConfigurationReference | Некорректное поле: C8EvaluationRecord «evaluationConfigurationReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.771 | Invalid field: C8EvaluationRecord.lifecycle | Некорректное поле: C8EvaluationRecord «lifecycle» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.772 | Invalid field: C8EvaluationRecord.adjudicationRecordId | Некорректное поле: C8EvaluationRecord «adjudicationRecordId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.773 | Invalid field: C8EvaluationRecord.replacementRecordId | Некорректное поле: C8EvaluationRecord «replacementRecordId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.774 | Invalid field: C8LifecycleBundle.lifecycleStateIdentity | Некорректное поле: C8LifecycleBundle «lifecycleStateIdentity» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.775 | Invalid field: C8LifecycleBundle.recordRevisionId | Некорректное поле: C8LifecycleBundle «recordRevisionId» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.776 | Invalid field: C8LifecycleBundle.predecessorRecordId | Некорректное поле: C8LifecycleBundle «predecessorRecordId» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.777 | Invalid field: C8LifecycleBundle.successorRecordId | Некорректное поле: C8LifecycleBundle «successorRecordId» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.778 | Invalid field: C8LifecycleBundle.sealedAt | Некорректное поле: C8LifecycleBundle «sealedAt» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.779 | Invalid field: C8LifecycleBundle.sealIntegrityReference | Некорректное поле: C8LifecycleBundle «sealIntegrityReference» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.780 | Invalid field: C8LifecycleBundle.historyReference | Некорректное поле: C8LifecycleBundle «historyReference» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.781 | Invalid field: C8LifecycleBundle.exclusionReasonIdentity | Некорректное поле: C8LifecycleBundle «exclusionReasonIdentity» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.782 | Invalid field: C8LifecycleBundle.invalidationReasonIdentity | Некорректное поле: C8LifecycleBundle «invalidationReasonIdentity» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.783 | Invalid field: C8LifecycleBundle.replacementReasonIdentity | Некорректное поле: C8LifecycleBundle «replacementReasonIdentity» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.784 | Invalid field: C8LifecycleBundle.transitionEvents | Некорректное поле: C8LifecycleBundle «transitionEvents» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.785 | Invalid field: C8LifecycleTransitionEvent.transitionEventId | Некорректное поле: C8LifecycleTransitionEvent «transitionEventId» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.786 | Invalid field: C8LifecycleTransitionEvent.fromStateIdentity | Некорректное поле: C8LifecycleTransitionEvent «fromStateIdentity» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.787 | Invalid field: C8LifecycleTransitionEvent.toStateIdentity | Некорректное поле: C8LifecycleTransitionEvent «toStateIdentity» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.788 | Invalid field: C8LifecycleTransitionEvent.transitionDisposition | Некорректное поле: C8LifecycleTransitionEvent «transitionDisposition» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.789 | Invalid field: C8LifecycleTransitionEvent.conditionEvidenceReferences | Некорректное поле: C8LifecycleTransitionEvent «conditionEvidenceReferences» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.790 | Invalid field: C8LifecycleTransitionEvent.actorRoleReference | Некорректное поле: C8LifecycleTransitionEvent «actorRoleReference» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.791 | Invalid field: C8LifecycleTransitionEvent.occurredAt | Некорректное поле: C8LifecycleTransitionEvent «occurredAt» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.792 | Invalid field: C8LifecycleTransitionEvent.eventIntegrityReference | Некорректное поле: C8LifecycleTransitionEvent «eventIntegrityReference» | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.800 | Invalid field: ComparisonOutcome.comparisonId | Некорректное поле: ComparisonOutcome «comparisonId» | c10.disposition.005 | — | c9.failure.comparison-identity-mismatch | ConformanceValidationReport.findings[] |
| c10.failure.801 | Invalid field: ComparisonOutcome.fixtureId | Некорректное поле: ComparisonOutcome «fixtureId» | c10.disposition.005 | — | c9.failure.comparison-identity-mismatch | ConformanceValidationReport.findings[] |
| c10.failure.802 | Invalid field: ComparisonOutcome.entryIdentity | Некорректное поле: ComparisonOutcome «entryIdentity» | c10.disposition.005 | — | c9.failure.comparison-wrong-entry | ConformanceValidationReport.findings[] |
| c10.failure.803 | Invalid field: ComparisonOutcome.observedResultReference | Некорректное поле: ComparisonOutcome «observedResultReference» | c10.disposition.005 | — | c9.failure.comparison-result-missing | ConformanceValidationReport.findings[] |
| c10.failure.804 | Invalid field: ComparisonOutcome.comparisonOutcomeIdentity | Некорректное поле: ComparisonOutcome «comparisonOutcomeIdentity» | c10.disposition.005 | — | c9.failure.comparison-prohibited-outcome | ConformanceValidationReport.findings[] |
| c10.failure.805 | Invalid field: ComparisonOutcome.primaryFailureIdentity | Некорректное поле: ComparisonOutcome «primaryFailureIdentity» | c10.disposition.005 | — | c9.failure.comparison-multiple-results | ConformanceValidationReport.findings[] |
| c10.failure.806 | Invalid field: ComparisonOutcome.retryabilityAssessment | Некорректное поле: ComparisonOutcome «retryabilityAssessment» | c10.disposition.005 | — | c9.failure.comparison-wrong-retryability | ConformanceValidationReport.findings[] |
| c10.failure.807 | Invalid field: ComparisonOutcome.subsetRole | Некорректное поле: ComparisonOutcome «subsetRole» | c10.disposition.005 | — | c9.failure.comparison-subset-mismatch | ConformanceValidationReport.findings[] |
| c10.failure.808 | Invalid field: ComparisonOutcome.sealedAt | Некорректное поле: ComparisonOutcome «sealedAt» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.809 | Invalid field: ComparisonOutcome.sealIntegrityReference | Некорректное поле: ComparisonOutcome «sealIntegrityReference» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.810 | Invalid field: ComparisonOutcome.schemaVersion | Некорректное поле: ComparisonOutcome «schemaVersion» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.811 | Invalid field: ComparisonOutcome.contractVersionReference | Некорректное поле: ComparisonOutcome «contractVersionReference» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.812 | Invalid field: ComparisonOutcome.governingSourceIdentityReferences | Некорректное поле: ComparisonOutcome «governingSourceIdentityReferences» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.813 | Invalid field: ComparisonOutcome.suiteIdentity | Некорректное поле: ComparisonOutcome «suiteIdentity» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.814 | Invalid field: ComparisonOutcome.subtypeToken | Некорректное поле: ComparisonOutcome «subtypeToken» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.815 | Invalid field: ComparisonOutcome.expectedResultFamily | Некорректное поле: ComparisonOutcome «expectedResultFamily» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.816 | Invalid field: ComparisonOutcome.expectedStage | Некорректное поле: ComparisonOutcome «expectedStage» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.817 | Invalid field: ComparisonOutcome.expectedReasonToken | Некорректное поле: ComparisonOutcome «expectedReasonToken» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.818 | Invalid field: ComparisonOutcome.expectedRetryabilityIdentity | Некорректное поле: ComparisonOutcome «expectedRetryabilityIdentity» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.819 | Invalid field: ComparisonOutcome.prohibitedOutcomeIdentities | Некорректное поле: ComparisonOutcome «prohibitedOutcomeIdentities» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.820 | Invalid field: ComparisonOutcome.fixtureLineageId | Некорректное поле: ComparisonOutcome «fixtureLineageId» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.821 | Invalid field: ComparisonOutcome.observedResultFamily | Некорректное поле: ComparisonOutcome «observedResultFamily» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.822 | Invalid field: ComparisonOutcome.observedStage | Некорректное поле: ComparisonOutcome «observedStage» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.823 | Invalid field: ComparisonOutcome.observedReasonToken | Некорректное поле: ComparisonOutcome «observedReasonToken» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.824 | Invalid field: ComparisonOutcome.observedRetryabilityIdentity | Некорректное поле: ComparisonOutcome «observedRetryabilityIdentity» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.825 | Invalid field: ComparisonOutcome.comparisonValidationIdentity | Некорректное поле: ComparisonOutcome «comparisonValidationIdentity» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.826 | Invalid field: ComparisonOutcome.primaryEscalationIdentity | Некорректное поле: ComparisonOutcome «primaryEscalationIdentity» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.827 | Invalid field: ComparisonOutcome.secondaryFailureIdentities | Некорректное поле: ComparisonOutcome «secondaryFailureIdentities» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.828 | Invalid field: ComparisonOutcome.countConsumptionIdentity | Некорректное поле: ComparisonOutcome «countConsumptionIdentity» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.829 | Invalid field: ComparisonOutcome.immutableTraceReference | Некорректное поле: ComparisonOutcome «immutableTraceReference» | c10.disposition.005 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.900 | Invalid field: ConformanceValidationReport.reportId | Некорректное поле: ConformanceValidationReport «reportId» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.901 | Invalid field: ConformanceValidationReport.targetArtifactId | Некорректное поле: ConformanceValidationReport «targetArtifactId» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.902 | Invalid field: ConformanceValidationReport.targetArtifactKind | Некорректное поле: ConformanceValidationReport «targetArtifactKind» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.903 | Invalid field: ConformanceValidationReport.validationBundleVersion | Некорректное поле: ConformanceValidationReport «validationBundleVersion» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.904 | Invalid field: ConformanceValidationReport.findings | Некорректное поле: ConformanceValidationReport «findings» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.905 | Invalid field: ConformanceValidationReport.primaryFindingId | Некорректное поле: ConformanceValidationReport «primaryFindingId» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.906 | Invalid field: ConformanceValidationReport.valid | Некорректное поле: ConformanceValidationReport «valid» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.907 | Invalid field: ConformanceValidationReport.sealedAt | Некорректное поле: ConformanceValidationReport «sealedAt» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.908 | Invalid field: ConformanceValidationReport.sealIntegrityReference | Некорректное поле: ConformanceValidationReport «sealIntegrityReference» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.909 | Invalid field: ConformanceValidationReport.schemaVersion | Некорректное поле: ConformanceValidationReport «schemaVersion» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.910 | Invalid field: ConformanceFinding.findingId | Некорректное поле: ConformanceFinding «findingId» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.911 | Invalid field: ConformanceFinding.validationId | Некорректное поле: ConformanceFinding «validationId» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.912 | Invalid field: ConformanceFinding.failureIdentity | Некорректное поле: ConformanceFinding «failureIdentity» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.913 | Invalid field: ConformanceFinding.targetPath | Некорректное поле: ConformanceFinding «targetPath» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.914 | Invalid field: ConformanceFinding.dispositionIdentity | Некорректное поле: ConformanceFinding «dispositionIdentity» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.915 | Invalid field: ConformanceFinding.externalOutcomeToken | Некорректное поле: ConformanceFinding «externalOutcomeToken» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.916 | Invalid field: ConformanceFinding.secondaryEvidenceReferences | Некорректное поле: ConformanceFinding «secondaryEvidenceReferences» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.917 | Invalid field: ConformanceFinding.precedence | Некорректное поле: ConformanceFinding «precedence» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.918 | Invalid field: ConformanceFinding.upstreamFailureIdentities | Некорректное поле: ConformanceFinding «upstreamFailureIdentities» | c10.disposition.002 | c10.conformance.validation-report-invalid | — | none — terminal base case |
| c10.failure.920 | Invalid field: SealVerificationResult.schemaVersion | Некорректное поле: SealVerificationResult «schemaVersion» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.921 | Invalid field: SealVerificationResult.verificationId | Некорректное поле: SealVerificationResult «verificationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.922 | Invalid field: SealVerificationResult.targetArtifactId | Некорректное поле: SealVerificationResult «targetArtifactId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.923 | Invalid field: SealVerificationResult.targetArtifactKind | Некорректное поле: SealVerificationResult «targetArtifactKind» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.924 | Invalid field: SealVerificationResult.presentedSealIntegrityReference | Некорректное поле: SealVerificationResult «presentedSealIntegrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.925 | Invalid field: SealVerificationResult.recomputedSealIntegrityReference | Некорректное поле: SealVerificationResult «recomputedSealIntegrityReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.926 | Invalid field: SealVerificationResult.valid | Некорректное поле: SealVerificationResult «valid» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.927 | Invalid field: SealVerificationResult.verifiedAt | Некорректное поле: SealVerificationResult «verifiedAt» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.928 | Invalid field: SealVerificationResult.failureIdentity | Некорректное поле: SealVerificationResult «failureIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.929 | Invalid field: SealVerificationResult.verificationMethodIdentity | Некорректное поле: SealVerificationResult «verificationMethodIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.950 | Invalid field: PairingRecord.recordTypeIdentity | Некорректное поле: PairingRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.951 | Invalid field: BasisLinkRecord.recordTypeIdentity | Некорректное поле: BasisLinkRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.952 | Invalid field: OutcomeDecisionRecord.recordTypeIdentity | Некорректное поле: OutcomeDecisionRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.953 | Invalid field: Contract6SealingRecord.recordTypeIdentity | Некорректное поле: Contract6SealingRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.954 | Invalid field: AdjudicationRecord.recordTypeIdentity | Некорректное поле: AdjudicationRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.955 | Invalid field: ConfidenceSourceSignalRecord.recordTypeIdentity | Некорректное поле: ConfidenceSourceSignalRecord «recordTypeIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.956 | Invalid field: AnnotationUnitRecord.multiViewStateIdentity | Некорректное поле: AnnotationUnitRecord «multiViewStateIdentity» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.957 | Invalid field: BasisLinkRecord.operationId | Некорректное поле: BasisLinkRecord «operationId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.958 | Invalid field: BasisLinkRecord.roomCaseId | Некорректное поле: BasisLinkRecord «roomCaseId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.959 | Invalid field: BasisLinkRecord.unitSubjectId | Некорректное поле: BasisLinkRecord «unitSubjectId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.960 | Invalid field: BasisLinkRecord.basisApplicabilityRationale | Некорректное поле: BasisLinkRecord «basisApplicabilityRationale» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.961 | Invalid field: BasisLinkRecord.predecessorBasisLinkRecordId | Некорректное поле: BasisLinkRecord «predecessorBasisLinkRecordId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.962 | Invalid field: AdjudicationRecord.candidateOrMemberIds | Некорректное поле: AdjudicationRecord «candidateOrMemberIds» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.963 | Invalid field: AdjudicationRecord.traceReference | Некорректное поле: AdjudicationRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.964 | Invalid field: Contract6SealingRecord.traceReference | Некорректное поле: Contract6SealingRecord «traceReference» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.965 | Invalid field: Contract6SealingRecord.revisionId | Некорректное поле: Contract6SealingRecord «revisionId» | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.966 | Invalid field: Contract8EvaluationPackage.unseenClaimRecords | Некорректное поле: Contract8EvaluationPackage «unseenClaimRecords» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.967 | Invalid field: UnseenClaimRecord.unseenClaimRecordId | Некорректное поле: UnseenClaimRecord «unseenClaimRecordId» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.968 | Invalid field: UnseenClaimRecord.rawAssertionReference | Некорректное поле: UnseenClaimRecord «rawAssertionReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.969 | Invalid field: UnseenClaimRecord.assertionProjectionReference | Некорректное поле: UnseenClaimRecord «assertionProjectionReference» | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.S001 | Cross-field violation S001: CaptureSetIntake | Межполевая ошибка S001: CaptureSetIntake | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.S002 | Cross-field violation S002: RoomCase | Межполевая ошибка S002: RoomCase | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S003 | Cross-field violation S003: RoomCase | Межполевая ошибка S003: RoomCase | c10.disposition.001 | c9.failure.fabricated-identity | c9.failure.fabricated-identity | ConformanceValidationReport.findings[] |
| c10.failure.S004 | Cross-field violation S004: SameRoomValidationRecord | Межполевая ошибка S004: SameRoomValidationRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S005 | Cross-field violation S005: SameRoomValidationRecord | Межполевая ошибка S005: SameRoomValidationRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S006 | Cross-field violation S006: MixedRoomValidationRequest | Межполевая ошибка S006: MixedRoomValidationRequest | c10.disposition.001 | c9.failure.mixed-room-roomcase-fabrication | c9.failure.mixed-room-roomcase-fabrication | ConformanceValidationReport.findings[] |
| c10.failure.S007 | Cross-field violation S007: VlmSceneCandidate | Межполевая ошибка S007: VlmSceneCandidate | c10.disposition.004 | — | c2.node.duplicate_id | ConformanceValidationReport.findings[] |
| c10.failure.S008 | Cross-field violation S008: StructuredSceneV0 | Межполевая ошибка S008: StructuredSceneV0 | c10.disposition.004 | — | c3.room.missing | ConformanceValidationReport.findings[] |
| c10.failure.S009 | Cross-field violation S009: StructuredSceneV0 | Межполевая ошибка S009: StructuredSceneV0 | c10.disposition.004 | — | c3.room.invalid_cardinality | ConformanceValidationReport.findings[] |
| c10.failure.S010 | Cross-field violation S010: StructuredSceneV0 | Межполевая ошибка S010: StructuredSceneV0 | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S011 | Cross-field violation S011: StructuredSceneV0 | Межполевая ошибка S011: StructuredSceneV0 | c10.disposition.004 | — | c2.relation.dangling_endpoint | ConformanceValidationReport.findings[] |
| c10.failure.S012 | Cross-field violation S012: StructuredSceneV0 | Межполевая ошибка S012: StructuredSceneV0 | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S013 | Cross-field violation S013: StructuredSceneV0 | Межполевая ошибка S013: StructuredSceneV0 | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S014 | Cross-field violation S014: Artifact separation | Межполевая ошибка S014: Разделение артефактов | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S015 | Cross-field violation S015: Artifact separation | Межполевая ошибка S015: Разделение артефактов | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S016 | Cross-field violation S016: PerceptionResult | Межполевая ошибка S016: PerceptionResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S017 | Cross-field violation S017: SceneResult | Межполевая ошибка S017: SceneResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S018 | Cross-field violation S018: Non-scene results | Межполевая ошибка S018: Результаты без сцены | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S019 | Cross-field violation S019: InsufficientEvidenceResult | Межполевая ошибка S019: InsufficientEvidenceResult | c10.disposition.001 | c9.failure.mixed-room-roomcase-fabrication | c9.failure.mixed-room-roomcase-fabrication | ConformanceValidationReport.findings[] |
| c10.failure.S020 | Cross-field violation S020: RejectedResult | Межполевая ошибка S020: RejectedResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S021 | Cross-field violation S021: PerceptionEvidenceArtifact | Межполевая ошибка S021: PerceptionEvidenceArtifact | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S022 | Cross-field violation S022: GroundingRecord | Межполевая ошибка S022: GroundingRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S023 | Cross-field violation S023: ProvenanceAttachmentRecord | Межполевая ошибка S023: ProvenanceAttachmentRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S024 | Cross-field violation S024: BestEffortFieldAssessmentRecord | Межполевая ошибка S024: BestEffortFieldAssessmentRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S025 | Cross-field violation S025: AttributeEvidenceArtifact | Межполевая ошибка S025: AttributeEvidenceArtifact | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S026 | Cross-field violation S026: DeterminabilityEvidenceBasisRecord | Межполевая ошибка S026: DeterminabilityEvidenceBasisRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S027 | Cross-field violation S027: EvidenceSetRecord | Межполевая ошибка S027: EvidenceSetRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S028 | Cross-field violation S028: ConfidenceAssertionRecord | Межполевая ошибка S028: ConfidenceAssertionRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S029 | Cross-field violation S029: Contract6DeterminabilityPackage | Межполевая ошибка S029: Contract6DeterminabilityPackage | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S030 | Cross-field violation S030: Contract6DeterminabilityPackage | Межполевая ошибка S030: Contract6DeterminabilityPackage | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S031 | Cross-field violation S031: RawMechanismAssertionArtifact | Межполевая ошибка S031: RawMechanismAssertionArtifact | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | ConformanceValidationReport.findings[] |
| c10.failure.S032 | Cross-field violation S032: RawMechanismAssertionArtifact | Межполевая ошибка S032: RawMechanismAssertionArtifact | c10.disposition.005 | — | c8.failure.008 | ConformanceValidationReport.findings[] |
| c10.failure.S033 | Cross-field violation S033: ETAPAssertionProjectionFact | Межполевая ошибка S033: ETAPAssertionProjectionFact | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.S034 | Cross-field violation S034: ETAPAssertionProjectionFact | Межполевая ошибка S034: ETAPAssertionProjectionFact | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.S035 | Cross-field violation S035: ComparisonOutcome | Межполевая ошибка S035: ComparisonOutcome | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | ConformanceValidationReport.findings[] |
| c10.failure.S036 | Cross-field violation S036: ComparisonOutcome | Межполевая ошибка S036: ComparisonOutcome | c10.disposition.005 | — | c9.failure.comparison-multiple-results | ConformanceValidationReport.findings[] |
| c10.failure.S037 | Cross-field violation S037: Sealing | Межполевая ошибка S037: Запечатывание | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | ConformanceValidationReport.findings[] |
| c10.failure.S038 | Cross-field violation S038: Sealing | Межполевая ошибка S038: Запечатывание | c10.disposition.001 | c9.failure.post-result-mutation | c9.failure.post-result-mutation | ConformanceValidationReport.findings[] |
| c10.failure.S039 | Cross-field violation S039: Source eligibility | Межполевая ошибка S039: Допустимость источника | c10.disposition.001 | c9.failure.ineligible-source | c9.failure.ineligible-source | ConformanceValidationReport.findings[] |
| c10.failure.S040 | Cross-field violation S040: Controlled Learning | Межполевая ошибка S040: Контролируемое обучение | c10.disposition.001 | c9.failure.learning-activation | c9.failure.learning-activation | ConformanceValidationReport.findings[] |
| c10.failure.S041 | Cross-field violation S041: Localization | Межполевая ошибка S041: Локализация | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S042 | Cross-field violation S042: Authorization | Межполевая ошибка S042: Авторизация | c10.disposition.001 | c9.failure.downstream-authorization-leak | c9.failure.downstream-authorization-leak | ConformanceValidationReport.findings[] |
| c10.failure.S043 | Cross-field violation S043: EvidenceRelationshipRecord | Межполевая ошибка S043: EvidenceRelationshipRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S044 | Cross-field violation S044: BestEffortValueRevision | Межполевая ошибка S044: BestEffortValueRevision | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S045 | Cross-field violation S045: ConfidenceAssertionRecord | Межполевая ошибка S045: ConfidenceAssertionRecord | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S046 | Cross-field violation S046: PerceptionEvidenceArtifact | Межполевая ошибка S046: PerceptionEvidenceArtifact | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S047 | Cross-field violation S047: PerceptionEvidenceArtifact | Межполевая ошибка S047: PerceptionEvidenceArtifact | c10.disposition.004 | — | c3.confidence.missing | ConformanceValidationReport.findings[] |
| c10.failure.S048 | Cross-field violation S048: Contract8EvaluationPackage | Межполевая ошибка S048: Contract8EvaluationPackage | c10.disposition.005 | — | c8.failure.027 | ConformanceValidationReport.findings[] |
| c10.failure.S056 | Cross-field violation S056: CaptureSetIntake | Межполевая ошибка S056: CaptureSetIntake | c10.disposition.003 | zero-assets | — | ConformanceValidationReport.findings[] |
| c10.failure.S057 | Cross-field violation S057: CaptureSetIntake | Межполевая ошибка S057: CaptureSetIntake | c10.disposition.003 | too-many-assets | — | ConformanceValidationReport.findings[] |
| c10.failure.S058 | Cross-field violation S058: RejectedResult | Межполевая ошибка S058: RejectedResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S059 | Cross-field violation S059: RejectedResult | Межполевая ошибка S059: RejectedResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S060 | Cross-field violation S060: RejectedResult | Межполевая ошибка S060: RejectedResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S061 | Cross-field violation S061: RejectedResult | Межполевая ошибка S061: RejectedResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S062 | Cross-field violation S062: PerceptionOperation | Межполевая ошибка S062: PerceptionOperation | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S063 | Cross-field violation S063: VlmSceneCandidate | Межполевая ошибка S063: VlmSceneCandidate | c10.disposition.004 | — | c2.relation.dangling_endpoint | ConformanceValidationReport.findings[] |
| c10.failure.S064 | Cross-field violation S064: VlmSceneCandidate | Межполевая ошибка S064: VlmSceneCandidate | c10.disposition.004 | — | c2.room.missing_candidate | ConformanceValidationReport.findings[] |
| c10.failure.S065 | Cross-field violation S065: VlmSceneCandidate | Межполевая ошибка S065: VlmSceneCandidate | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S066 | Cross-field violation S066: CandidateNode | Межполевая ошибка S066: CandidateNode | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S067 | Cross-field violation S067: UnsupportedInput | Межполевая ошибка S067: UnsupportedInput | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.S068 | Cross-field violation S068: UnsupportedInput | Межполевая ошибка S068: UnsupportedInput | c10.disposition.003 | malformed-envelope | — | ConformanceValidationReport.findings[] |
| c10.failure.S069 | Cross-field violation S069: ComparisonOutcome | Межполевая ошибка S069: ComparisonOutcome | c10.disposition.006 | c9.comparison.wrong-entry -> c9.failure.comparison-wrong-entry | c9.failure.comparison-wrong-entry | ConformanceValidationReport.findings[] |
| c10.failure.S070 | Cross-field violation S070: ComparisonOutcome | Межполевая ошибка S070: ComparisonOutcome | c10.disposition.006 | c9.comparison.wrong-entry -> c9.failure.comparison-wrong-entry | c9.failure.comparison-wrong-entry | ConformanceValidationReport.findings[] |
| c10.failure.S071 | Cross-field violation S071: ComparisonOutcome | Межполевая ошибка S071: ComparisonOutcome | c10.disposition.006 | c9.comparison.multiple-results -> c9.failure.comparison-multiple-results | c9.failure.comparison-multiple-results | ConformanceValidationReport.findings[] |
| c10.failure.S072 | Cross-field violation S072: ComparisonOutcome | Межполевая ошибка S072: ComparisonOutcome | c10.disposition.006 | c9.comparison.prohibited-outcome -> c9.failure.comparison-prohibited-outcome | c9.failure.comparison-prohibited-outcome | ConformanceValidationReport.findings[] |
| c10.failure.S073 | Cross-field violation S073: ComparisonOutcome | Межполевая ошибка S073: ComparisonOutcome | c10.disposition.001 | c9.failure.lineage-crossover | c9.failure.lineage-crossover | ConformanceValidationReport.findings[] |
| c10.failure.S074 | Cross-field violation S074: ComparisonOutcome | Межполевая ошибка S074: ComparisonOutcome | c10.disposition.006 | c9.comparison.double-count -> c9.failure.counting-duplication | c9.failure.counting-duplication | ConformanceValidationReport.findings[] |
| c10.failure.S075 | Cross-field violation S075: ComparisonOutcome | Межполевая ошибка S075: ComparisonOutcome | c10.disposition.006 | c9.comparison.source-identity-mismatch -> c9.failure.comparison-source-identity-mismatch | c9.failure.comparison-source-identity-mismatch | ConformanceValidationReport.findings[] |
| c10.failure.S076 | Cross-field violation S076: BestEffortFieldAssessmentRecord | Межполевая ошибка S076: BestEffortFieldAssessmentRecord | c10.disposition.004 | — | c4.failure.110 | ConformanceValidationReport.findings[] |
| c10.failure.S077 | Cross-field violation S077: BestEffortFieldAssessmentRecord | Межполевая ошибка S077: BestEffortFieldAssessmentRecord | c10.disposition.004 | — | c4.failure.109 | ConformanceValidationReport.findings[] |
| c10.failure.S078 | Cross-field violation S078: BestEffortFieldAssessmentRecord | Межполевая ошибка S078: BestEffortFieldAssessmentRecord | c10.disposition.004 | — | c4.failure.112 | ConformanceValidationReport.findings[] |
| c10.failure.S079 | Cross-field violation S079: BestEffortFieldAssessmentRecord | Межполевая ошибка S079: BestEffortFieldAssessmentRecord | c10.disposition.004 | — | c4.failure.113 | ConformanceValidationReport.findings[] |
| c10.failure.S080 | Cross-field violation S080: BestEffortValueRevision | Межполевая ошибка S080: BestEffortValueRevision | c10.disposition.004 | — | c4.failure.114 | ConformanceValidationReport.findings[] |
| c10.failure.S081 | Cross-field violation S081: BestEffortValueRevision | Межполевая ошибка S081: BestEffortValueRevision | c10.disposition.004 | — | c4.failure.115 | ConformanceValidationReport.findings[] |
| c10.failure.S082 | Cross-field violation S082: BestEffortValueRevision | Межполевая ошибка S082: BestEffortValueRevision | c10.disposition.004 | — | c4.failure.116 | ConformanceValidationReport.findings[] |
| c10.failure.S083 | Cross-field violation S083: BestEffortFieldAssessmentRecord | Межполевая ошибка S083: BestEffortFieldAssessmentRecord | c10.disposition.004 | — | c4.failure.117 | ConformanceValidationReport.findings[] |
| c10.failure.S084 | Cross-field violation S084: C8LifecycleBundle | Межполевая ошибка S084: C8LifecycleBundle | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.S085 | Cross-field violation S085: C8LifecycleBundle | Межполевая ошибка S085: C8LifecycleBundle | c10.disposition.005 | — | c8.failure.022 | ConformanceValidationReport.findings[] |
| c10.failure.S086 | Cross-field violation S086: C8LifecycleBundle | Межполевая ошибка S086: C8LifecycleBundle | c10.disposition.005 | — | c8.failure.023 | ConformanceValidationReport.findings[] |
| c10.failure.S087 | Cross-field violation S087: C8LifecycleBundle | Межполевая ошибка S087: C8LifecycleBundle | c10.disposition.005 | — | c8.failure.023 | ConformanceValidationReport.findings[] |
| c10.failure.S088 | Cross-field violation S088: C8LifecycleBundle | Межполевая ошибка S088: C8LifecycleBundle | c10.disposition.005 | — | c8.failure.025 | ConformanceValidationReport.findings[] |
| c10.failure.S089 | Cross-field violation S089: C8LifecycleBundle | Межполевая ошибка S089: C8LifecycleBundle | c10.disposition.005 | — | c8.failure.025 | ConformanceValidationReport.findings[] |
| c10.failure.S090 | Cross-field violation S090: Operation identity | Межполевая ошибка S090: Идентичность операции | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S091 | Cross-field violation S091: RoomCase/ImageAsset identity | Межполевая ошибка S091: Идентичность RoomCase/ImageAsset | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S092 | Cross-field violation S092: Artifact identity consistency | Межполевая ошибка S092: Согласованность идентичностей артефактов | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S093 | Cross-field violation S093: Semantic ownership | Межполевая ошибка S093: Семантическое владение | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S094 | Cross-field violation S094: RejectedResult branch exclusivity | Межполевая ошибка S094: Взаимоисключаемость ветвей RejectedResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S095 | Cross-field violation S095: FailureResult reason/retryability | Межполевая ошибка S095: Причина и повторяемость FailureResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S096 | Cross-field violation S096: Negative-set identity boundary | Межполевая ошибка S096: Граница идентичности отрицательного набора | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S097 | Cross-field violation S097: Artifact envelope separation | Межполевая ошибка S097: Разделение оболочек артефактов | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |
| c10.failure.S098 | Cross-field violation S098: SealVerificationResult consistency | Межполевая ошибка S098: Согласованность SealVerificationResult | c10.disposition.004 | — | — | ConformanceValidationReport.findings[] |

Every Contract-10 failure is represented in exactly one `ConformanceValidationReport.findings[]` entry, except a report-integrity terminal failure, which is the explicit non-recursive base case. The disposition registry controls handling:

```text
c10.disposition.001 — halt under the exact security chain;
c10.disposition.002 — terminate because the report itself is untrustworthy;
c10.disposition.003 — emit UnsupportedInput outside PerceptionResult;
c10.disposition.004 — mark the existing artifact revision nonconformant in the sidecar only;
c10.disposition.005 — invalidate an evaluator-owned artifact without runtime blame;
c10.disposition.006 — produce one exact Contract-9 comparison determination.
```

`c10.failure.*` never appears in `FailureResult.technicalReasonCategory`, `RejectedResult.contractViolations[]` or `ComparisonOutcome.primaryFailureIdentity`. `upstreamFailureIdentities[]` preserves exact upstream semantic causes; `externalOutcomeToken` is absent for sidecar-only findings.

## 12. Conformance validation lifecycle

```text
1. Validate the target artifact with every field-bound rule and every applicable standalone rule.
2. Create one immutable ConformanceValidationReport for the target revision.
3. Preserve every failed predicate as one immutable ConformanceFinding.
4. Select one primary finding by lowest disposition precedence, then lexical validation ID.
5. Apply exactly one c10.disposition.* handling identity.
6. Preserve all non-primary findings as secondary evidence.
7. Seal the report independently from the target artifact.
```

`valid=true` requires `findings=[]` and no `primaryFindingId`. `valid=false` requires one or more findings and exactly one resolvable primary finding.

A conformance validation never mutates or reclassifies an existing runtime result. Specifically:

```text
SceneResult remains SceneResult;
InsufficientEvidenceResult remains InsufficientEvidenceResult;
FailureResult remains FailureResult;
RejectedResult remains RejectedResult.
```

`c10.disposition.004` marks that exact artifact revision nonconformant in the sidecar only. `c10.disposition.003` is the sole disposition that creates an external non-PerceptionResult classification (`UnsupportedInput`). `c10.disposition.006` creates a separate evaluation-only Contract-9 comparison determination. Security-stop precedence is always zero.

## 13. Contract 9 role separation

```text
c9.entry.*       — 18 fixture subtype identities; ComparisonOutcome only.
runtime tokens   — exact reason/violation values in FailureResult or RejectedResult.
c9.failure.*     — 52 Contract-9 governance/comparison failure identities.
c9.escalation.*  — 14 escalation identities.
c9.rule.*        — 41 Contract-9 rules.
c9.validation.*  — 41 Contract-9 validations.
c9.comparison.*  — 15 deterministic comparison outcomes.
```

The six families are disjoint. Contract 10 does not reinterpret fixture subtype IDs as runtime reasons and does not put Contract-9 comparison metadata inside a runtime `PerceptionResult`.

Every fixture comparison terminates in exactly one `c9.comparison.*` outcome. `c9.comparison.post-result-mutation` has highest precedence and maps to `c9.failure.post-result-mutation` and `c9.escalation.security-stop`.


## 14. Canonical sealing and integrity algorithm

For `PerceptionResult`, `ComparisonOutcome`, `ConformanceValidationReport`, `SealVerificationResult` and every Contract-10-sealed artifact:

```text
Canonicalization: RFC 8785 JSON Canonicalization Scheme (JCS), UTF-8.
Object properties and JSON numbers: exactly RFC 8785; NaN and Infinity prohibited.
Array order: preserved exactly; never sorted implicitly.
String handling: no additional Unicode normalization.
Timestamp: construct-local sealedAt is set first in RFC3339 UTC form with Z suffix.
Hash exclusion: only the construct-local sealIntegrityReference being computed.
Hash inclusion: every other construct property, including sealedAt and predecessor reference.
Hash: SHA-256 over canonical UTF-8 bytes.
Wire form: sha256:<64 lowercase hexadecimal characters>.
Verification: remove only sealIntegrityReference, canonicalize, hash and compare decoded digest bytes in constant time.
```

A verification attempt emits one immutable `SealVerificationResult`; it never modifies the target artifact.

### 14.1 Mechanical test vector

Input object before adding its seal:

```json
{
  "resultId": "result-001",
  "sealedAt": "2026-07-30T08:00:00Z",
  "status": "failure",
  "technicalReasonCategory": "provider.timeout"
}
```

RFC-8785 canonical byte sequence for this simple string-only vector:

```text
{"resultId":"result-001","sealedAt":"2026-07-30T08:00:00Z","status":"failure","technicalReasonCategory":"provider.timeout"}
```

Expected seal:

```text
sha256:dfd0425486462a3d3ec8ec8e6c2b6bf0bc7a64990256176797469498673f8679
```

Any post-seal mutation, self-referential hash input or digest mismatch triggers the exact applicable security chain and produces `SealVerificationResult.valid=false`.

## 15. Stable identity and reference rule registry

| Identity rule | EN label | RU label | Normative predicate | PASS condition | FAIL condition | Applicable constructs | Linked validations | Linked failures | Disposition identity |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| c10.identity.001 | Operation identity uniqueness | Уникальность идентичности операции | operationId is stable and is never reused by two distinct operations | one operation lineage per operationId | reuse or collision | CaptureSetIntake; PerceptionOperation; PerceptionResult; sidecars | c10.validation.S090 | c10.failure.S090 | c10.disposition.004 |
| c10.identity.002 | Exactly one admitted RoomCase | Ровно один допущенный RoomCase | each admitted PerceptionOperation embeds exactly one RoomCase | exactly one RoomCase | zero or more than one | PerceptionOperation; RoomCase | c10.validation.S002 | c10.failure.S002 | c10.disposition.004 |
| c10.identity.003 | RoomCase image identity set | Набор идентичностей изображений RoomCase | one RoomCase contains 1..6 ImageAssets with unique imageAssetId values | 1..6 unique ImageAssets | zero, over six, or duplicate imageAssetId | RoomCase; ImageAsset | c10.validation.S091 | c10.failure.S091 | c10.disposition.004 |
| c10.identity.004 | Atomic image/source pairing | Атомарное сопоставление изображения и источника | each ImageAsset has exactly one imageAssetId and one atomic sourceAssetId | one-to-one pair | missing, set-valued or duplicate pair | ImageAsset | c10.validation.S003 | c10.failure.S003 | c10.disposition.001 |
| c10.identity.005 | No fabricated source identity | Запрет вымышленной идентичности источника | sourceAssetId is never fabricated and is not shared across distinct imageAssetId values in one operation | all mappings resolve to governed atomic sources | fabrication or unauthorized sharing | ImageAsset; RoomCase | c10.validation.S003 | c10.failure.S003 | c10.disposition.001 |
| c10.identity.006 | Negative-set identity boundary | Граница идентичности отрицательного набора | a FusionConsistencyStage negative has inputSetId and no fabricated roomCaseId | inputSetId present and roomCaseId absent | missing inputSetId or fabricated roomCaseId | MixedRoomValidationRequest; SameRoomValidationRecord; RejectedResult | c10.validation.S096 | c10.failure.S096 | c10.disposition.004 |
| c10.identity.007 | Operation/RoomCase/image consistency | Согласованность операции, RoomCase и изображений | all RoomCase-level artifacts preserve the same operationId, roomCaseId and contributing image identities | all identities equal and resolvable | mismatch or orphan | PerceptionResult; evidence; diagnostics; Contract-6 package | c10.validation.S021; c10.validation.S092 | c10.failure.S021; c10.failure.S092 | c10.disposition.004 |
| c10.identity.008 | Relation endpoint locality | Локальность конечных точек связи | each relation endpoint resolves to a distinct node in the same candidate or scene revision | two distinct local endpoints | dangling, cross-revision or identical endpoints | CandidateRelation; SceneRelation | c10.validation.S011; c10.validation.S063 | c10.failure.S011; c10.failure.S063 | c10.disposition.004 |
| c10.identity.009 | Evidence contribution locality | Локальность вклада свидетельств | each evidence contribution resolves to an admitted ImageAsset in the same RoomCase | all evidence joins local and resolvable | orphan or cross-RoomCase join | GroundingRecord; AttributeEvidenceArtifact; AtomicEvidenceContribution | c10.validation.S022; c10.validation.S025 | c10.failure.S022; c10.failure.S025 | c10.disposition.004 |
| c10.identity.010 | Semantic owner preservation | Сохранение семантического владельца | Contract-4, Contract-5 and Contract-6 records preserve their exact semantic owner and revision identity | owner and domain preserved | cross-domain substitution or ownership drift | evidence; confidence; determinability records | c10.validation.S023; c10.validation.S028; c10.validation.S030; c10.validation.S093 | c10.failure.S023; c10.failure.S028; c10.failure.S030; c10.failure.S093 | c10.disposition.004 |
| c10.identity.011 | Raw assertion immutability | Неизменяемость исходного утверждения | raw mechanism payload remains immutable and evaluator projections remain separate | immutable and separate | mutation or evaluator overwrite | RawMechanismAssertionArtifact; ETAPAssertionProjectionFact | c10.validation.S031 | c10.failure.S031 | c10.disposition.001 |
| c10.identity.012 | Artifact envelope separation | Разделение оболочек артефактов | runtime result, semantic evidence, diagnostics and evaluation facts remain in distinct immutable artifacts | no forbidden embedding or mutation | cross-envelope embedding or mutation | StructuredSceneV0; PerceptionEvidenceArtifact; PerceptionResult; ComparisonOutcome | c10.validation.S097 | c10.failure.S097 | c10.disposition.004 |

The prior unnumbered prose list is retired. `c10.identity.001`–`012` is the sole stable identity-rule registry for Revision 1.

### 15A. Stable cross-reference registry

| Cross-reference ID | EN label | RU label | Source path | Target path | Resolution scope | PASS condition | FAIL condition | Linked validations | Linked failures | Disposition identity |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| c10.xref.001 | Operation identity chain | Цепочка идентичности операции | PerceptionOperation.operationId | CaptureSetIntake.operationId; PerceptionResultCommon.operationId; evidence/diagnostic operationId | one operation lineage | all values equal and resolvable | mismatch or orphan | c10.validation.S092 | c10.failure.S092 | c10.disposition.004 |
| c10.xref.002 | RoomCase identity chain | Цепочка идентичности RoomCase | PerceptionOperation.roomCase.roomCaseId | PerceptionResultCommon.roomCaseId; evidence/diagnostic roomCaseId | one admitted RoomCase | all present values equal | mismatch, fabrication or orphan | c10.validation.S021; c10.validation.S092 | c10.failure.S021; c10.failure.S092 | c10.disposition.004 |
| c10.xref.003 | Image/source contribution chain | Цепочка вклада изображения и источника | RoomCase.imageAssets[*].imageAssetId/sourceAssetId | contributingImageAssetIds; grounding and atomic contribution references | one operation/RoomCase | all references resolve to admitted atomic pairs | orphan, duplicate or fabricated reference | c10.validation.S003; c10.validation.S022; c10.validation.S091 | c10.failure.S003; c10.failure.S022; c10.failure.S091 | c10.disposition.004 |
| c10.xref.004 | Same-room admission reference | Ссылка допуска одной комнаты | RoomCase.sameRoomValidationReference | SameRoomValidationRecord.sameRoomValidationId with outcome=same-room-confirmed | one admitted RoomCase | exact confirmed record resolves | missing, non-confirmed or mismatched record | c10.validation.S004 | c10.failure.S004 | c10.disposition.004 |
| c10.xref.005 | Operation result reference | Ссылка результата операции | PerceptionOperation.resultReference | one sealed PerceptionResult.resultId/resultRevisionId | one completed operation | exactly one sealed result resolves when completed | missing, premature, duplicate or unresolved result | c10.validation.S062 | c10.failure.S062 | c10.disposition.004 |
| c10.xref.006 | Scene relation endpoints | Конечные точки связей сцены | SceneRelation.endpointNodeIds[*] | StructuredSceneV0.nodes[*].nodeId | one scene revision | two distinct local nodes resolve | dangling or cross-revision endpoint | c10.validation.S011 | c10.failure.S011 | c10.disposition.004 |
| c10.xref.007 | Evidence target resolution | Разрешение цели свидетельства | GroundingRecord.targetIdentity; AEA field/value references | scene node/relation or governed value revision in same result lineage | one RoomCase/result lineage | all targets resolve locally | orphan or cross-lineage target | c10.validation.S022; c10.validation.S025 | c10.failure.S022; c10.failure.S025 | c10.disposition.004 |
| c10.xref.008 | Observed-result evaluation reference | Ссылка оценки на наблюдаемый результат | ComparisonOutcome.observedResultReference | one sealed PerceptionResult revision | one comparison execution | reference resolves without embedding or mutation | missing, embedded, duplicate or mutated result | c10.validation.S035 | c10.failure.S035 | c10.disposition.001 |
| c10.xref.009 | Contract-8 raw/projection join | Связь исходного утверждения и проекции Contract 8 | UnseenClaimRecord.rawAssertionReference | one RawMechanismAssertionArtifact and one final ETAPAssertionProjectionFact | one evaluator package | exact one-to-one join | missing, duplicate or mismatched join | c10.validation.S048 | c10.failure.S048 | c10.disposition.005 |
| c10.xref.010 | Immutable predecessor and seal lineage | Неизменяемая цепочка предшественника и печати | predecessor references and seal fields | prior immutable revision and canonical payload | one artifact lineage | acyclic lineage and valid seal | cycle, mutation, missing predecessor or seal mismatch | c10.validation.S038; c10.validation.S044; c10.validation.S088 | c10.failure.S038; c10.failure.S044; c10.failure.S088 | c10.disposition.001 |

`c10.xref.*` identifies the cross-artifact relationship. The linked `c10.validation.*` identity remains the executable predicate and the linked `c10.failure.*` identity remains the failed result. No duplicate validation namespace is created.

## 16. Residential-34 and node rules

`SceneNode.kind` is exactly one of `Room`, `StructuralElement`, `Object`, `FreeSpaceRegion`.

- Exactly one `Room` node exists in a successful `StructuredSceneV0`.
- Only the Room node carries `spaceTypeId`, which resolves to the active Residential-34 profile.
- `primary_bedroom`, `guest_bedroom` and `children_room` remain specializations of `bedroom` and inherit applicability in full.
- `kitchen_living_room` remains the named composite profile `living_room + kitchen` and is not a 35th category.
- StructuralElement and Object nodes carry `typeLabel`; FreeSpaceRegion carries neither `spaceTypeId` nor `typeLabel`.
- Relation applicability limits which asserted relations are legal; it never requires a relation instance to exist.


## 17. Bilingual identity-level localization registry

| Identity | EN canonical label | RU derived label |
| --- | --- | --- |
| c10.field.001 | CaptureSetIntake.operationId | Поле CaptureSetIntake «operationId» |
| c10.validation.001 | Validate CaptureSetIntake.operationId | Проверка поля CaptureSetIntake «operationId» |
| c10.failure.001 | Invalid field: CaptureSetIntake.operationId | Некорректное поле: CaptureSetIntake «operationId» |
| c10.identity.001 | Operation identity uniqueness | Уникальность идентичности операции |
| c10.xref.001 | Operation identity chain | Цепочка идентичности операции |
| c10.disposition.001 | Security stop | Остановка по безопасности |
| c10.construct.001 | ConformanceValidationReport | Отчёт проверки соответствия |
| c10.field.002 | CaptureSetIntake.inputArtifactId | Поле CaptureSetIntake «inputArtifactId» |
| c10.validation.002 | Validate CaptureSetIntake.inputArtifactId | Проверка поля CaptureSetIntake «inputArtifactId» |
| c10.failure.002 | Invalid field: CaptureSetIntake.inputArtifactId | Некорректное поле: CaptureSetIntake «inputArtifactId» |
| c10.identity.002 | Exactly one admitted RoomCase | Ровно один допущенный RoomCase |
| c10.xref.002 | RoomCase identity chain | Цепочка идентичности RoomCase |
| c10.disposition.002 | Validation-report integrity terminal | Терминальный отказ целостности отчёта валидации |
| c10.construct.002 | ConformanceFinding | Заключение проверки соответствия |
| c10.field.003 | CaptureSetIntake.imageAssets | Поле CaptureSetIntake «imageAssets» |
| c10.validation.003 | Validate CaptureSetIntake.imageAssets | Проверка поля CaptureSetIntake «imageAssets» |
| c10.failure.003 | Invalid field: CaptureSetIntake.imageAssets | Некорректное поле: CaptureSetIntake «imageAssets» |
| c10.identity.003 | RoomCase image identity set | Набор идентичностей изображений RoomCase |
| c10.xref.003 | Image/source contribution chain | Цепочка вклада изображения и источника |
| c10.disposition.003 | Pre-admission unsupported input | Неподдерживаемый вход до допуска |
| c10.construct.003 | ValidationDispositionRegistry | Реестр диспозиций валидации |
| c10.field.004 | ImageAsset.imageAssetId | Поле ImageAsset «imageAssetId» |
| c10.validation.004 | Validate ImageAsset.imageAssetId | Проверка поля ImageAsset «imageAssetId» |
| c10.failure.004 | Invalid field: ImageAsset.imageAssetId | Некорректное поле: ImageAsset «imageAssetId» |
| c10.identity.004 | Atomic image/source pairing | Атомарное сопоставление изображения и источника |
| c10.xref.004 | Same-room admission reference | Ссылка допуска одной комнаты |
| c10.disposition.004 | Artifact nonconformant | Артефакт не соответствует контракту |
| c10.construct.004 | SealVerificationResult | Результат проверки печати |
| c10.field.005 | ImageAsset.sourceAssetId | Поле ImageAsset «sourceAssetId» |
| c10.validation.005 | Validate ImageAsset.sourceAssetId | Проверка поля ImageAsset «sourceAssetId» |
| c10.failure.005 | Invalid field: ImageAsset.sourceAssetId | Некорректное поле: ImageAsset «sourceAssetId» |
| c10.identity.005 | No fabricated source identity | Запрет вымышленной идентичности источника |
| c10.xref.005 | Operation result reference | Ссылка результата операции |
| c10.disposition.005 | Evaluation artifact invalid | Артефакт оценки некорректен |
| c10.field.006 | ImageAsset.sourceClass | Поле ImageAsset «sourceClass» |
| c10.validation.006 | Validate ImageAsset.sourceClass | Проверка поля ImageAsset «sourceClass» |
| c10.failure.006 | Invalid field: ImageAsset.sourceClass | Некорректное поле: ImageAsset «sourceClass» |
| c10.identity.006 | Negative-set identity boundary | Граница идентичности отрицательного набора |
| c10.xref.006 | Scene relation endpoints | Конечные точки связей сцены |
| c10.disposition.006 | Contract-9 comparison determination | Определение результата сравнения Contract 9 |
| c10.field.007 | ImageAsset.mediaType | Поле ImageAsset «mediaType» |
| c10.validation.007 | Validate ImageAsset.mediaType | Проверка поля ImageAsset «mediaType» |
| c10.failure.007 | Invalid field: ImageAsset.mediaType | Некорректное поле: ImageAsset «mediaType» |
| c10.identity.007 | Operation/RoomCase/image consistency | Согласованность операции, RoomCase и изображений |
| c10.xref.007 | Evidence target resolution | Разрешение цели свидетельства |
| c10.field.008 | ImageAsset.contentIntegrityReference | Поле ImageAsset «contentIntegrityReference» |
| c10.validation.008 | Validate ImageAsset.contentIntegrityReference | Проверка поля ImageAsset «contentIntegrityReference» |
| c10.failure.008 | Invalid field: ImageAsset.contentIntegrityReference | Некорректное поле: ImageAsset «contentIntegrityReference» |
| c10.identity.008 | Relation endpoint locality | Локальность конечных точек связи |
| c10.xref.008 | Observed-result evaluation reference | Ссылка оценки на наблюдаемый результат |
| c10.field.009 | ImageAsset.preprocessingLineageReference | Поле ImageAsset «preprocessingLineageReference» |
| c10.validation.009 | Validate ImageAsset.preprocessingLineageReference | Проверка поля ImageAsset «preprocessingLineageReference» |
| c10.failure.009 | Invalid field: ImageAsset.preprocessingLineageReference | Некорректное поле: ImageAsset «preprocessingLineageReference» |
| c10.identity.009 | Evidence contribution locality | Локальность вклада свидетельств |
| c10.xref.009 | Contract-8 raw/projection join | Связь исходного утверждения и проекции Contract 8 |
| c10.field.010 | SameRoomValidationRecord.sameRoomValidationId | Поле SameRoomValidationRecord «sameRoomValidationId» |
| c10.validation.010 | Validate SameRoomValidationRecord.sameRoomValidationId | Проверка поля SameRoomValidationRecord «sameRoomValidationId» |
| c10.failure.010 | Invalid field: SameRoomValidationRecord.sameRoomValidationId | Некорректное поле: SameRoomValidationRecord «sameRoomValidationId» |
| c10.identity.010 | Semantic owner preservation | Сохранение семантического владельца |
| c10.xref.010 | Immutable predecessor and seal lineage | Неизменяемая цепочка предшественника и печати |
| c10.field.011 | SameRoomValidationRecord.operationId | Поле SameRoomValidationRecord «operationId» |
| c10.validation.011 | Validate SameRoomValidationRecord.operationId | Проверка поля SameRoomValidationRecord «operationId» |
| c10.failure.011 | Invalid field: SameRoomValidationRecord.operationId | Некорректное поле: SameRoomValidationRecord «operationId» |
| c10.identity.011 | Raw assertion immutability | Неизменяемость исходного утверждения |
| c10.field.012 | SameRoomValidationRecord.contributingImageAssetIds | Поле SameRoomValidationRecord «contributingImageAssetIds» |
| c10.validation.012 | Validate SameRoomValidationRecord.contributingImageAssetIds | Проверка поля SameRoomValidationRecord «contributingImageAssetIds» |
| c10.failure.012 | Invalid field: SameRoomValidationRecord.contributingImageAssetIds | Некорректное поле: SameRoomValidationRecord «contributingImageAssetIds» |
| c10.identity.012 | Artifact envelope separation | Разделение оболочек артефактов |
| c10.field.013 | SameRoomValidationRecord.outcome | Поле SameRoomValidationRecord «outcome» |
| c10.validation.013 | Validate SameRoomValidationRecord.outcome | Проверка поля SameRoomValidationRecord «outcome» |
| c10.failure.013 | Invalid field: SameRoomValidationRecord.outcome | Некорректное поле: SameRoomValidationRecord «outcome» |
| c10.field.014 | SameRoomValidationRecord.basisReferences | Поле SameRoomValidationRecord «basisReferences» |
| c10.validation.014 | Validate SameRoomValidationRecord.basisReferences | Проверка поля SameRoomValidationRecord «basisReferences» |
| c10.failure.014 | Invalid field: SameRoomValidationRecord.basisReferences | Некорректное поле: SameRoomValidationRecord «basisReferences» |
| c10.field.015 | SameRoomValidationRecord.roomCaseId | Поле SameRoomValidationRecord «roomCaseId» |
| c10.validation.015 | Validate SameRoomValidationRecord.roomCaseId | Проверка поля SameRoomValidationRecord «roomCaseId» |
| c10.failure.015 | Invalid field: SameRoomValidationRecord.roomCaseId | Некорректное поле: SameRoomValidationRecord «roomCaseId» |
| c10.field.016 | SameRoomValidationRecord.inputSetId | Поле SameRoomValidationRecord «inputSetId» |
| c10.validation.016 | Validate SameRoomValidationRecord.inputSetId | Проверка поля SameRoomValidationRecord «inputSetId» |
| c10.failure.016 | Invalid field: SameRoomValidationRecord.inputSetId | Некорректное поле: SameRoomValidationRecord «inputSetId» |
| c10.field.017 | PerceptionOperation.operationId | Поле PerceptionOperation «operationId» |
| c10.validation.017 | Validate PerceptionOperation.operationId | Проверка поля PerceptionOperation «operationId» |
| c10.failure.017 | Invalid field: PerceptionOperation.operationId | Некорректное поле: PerceptionOperation «operationId» |
| c10.field.018 | PerceptionOperation.roomCase | Поле PerceptionOperation «roomCase» |
| c10.validation.018 | Validate PerceptionOperation.roomCase | Проверка поля PerceptionOperation «roomCase» |
| c10.failure.018 | Invalid field: PerceptionOperation.roomCase | Некорректное поле: PerceptionOperation «roomCase» |
| c10.field.019 | RoomCase.roomCaseId | Поле RoomCase «roomCaseId» |
| c10.validation.019 | Validate RoomCase.roomCaseId | Проверка поля RoomCase «roomCaseId» |
| c10.failure.019 | Invalid field: RoomCase.roomCaseId | Некорректное поле: RoomCase «roomCaseId» |
| c10.field.020 | RoomCase.imageAssets | Поле RoomCase «imageAssets» |
| c10.validation.020 | Validate RoomCase.imageAssets | Проверка поля RoomCase «imageAssets» |
| c10.failure.020 | Invalid field: RoomCase.imageAssets | Некорректное поле: RoomCase «imageAssets» |
| c10.field.021 | RoomCase.sameRoomValidationReference | Поле RoomCase «sameRoomValidationReference» |
| c10.validation.021 | Validate RoomCase.sameRoomValidationReference | Проверка поля RoomCase «sameRoomValidationReference» |
| c10.failure.021 | Invalid field: RoomCase.sameRoomValidationReference | Некорректное поле: RoomCase «sameRoomValidationReference» |
| c10.field.022 | MixedRoomValidationRequest.operationId | Поле MixedRoomValidationRequest «operationId» |
| c10.validation.022 | Validate MixedRoomValidationRequest.operationId | Проверка поля MixedRoomValidationRequest «operationId» |
| c10.failure.022 | Invalid field: MixedRoomValidationRequest.operationId | Некорректное поле: MixedRoomValidationRequest «operationId» |
| c10.field.023 | MixedRoomValidationRequest.inputSetId | Поле MixedRoomValidationRequest «inputSetId» |
| c10.validation.023 | Validate MixedRoomValidationRequest.inputSetId | Проверка поля MixedRoomValidationRequest «inputSetId» |
| c10.failure.023 | Invalid field: MixedRoomValidationRequest.inputSetId | Некорректное поле: MixedRoomValidationRequest «inputSetId» |
| c10.field.024 | MixedRoomValidationRequest.imageAssets | Поле MixedRoomValidationRequest «imageAssets» |
| c10.validation.024 | Validate MixedRoomValidationRequest.imageAssets | Проверка поля MixedRoomValidationRequest «imageAssets» |
| c10.failure.024 | Invalid field: MixedRoomValidationRequest.imageAssets | Некорректное поле: MixedRoomValidationRequest «imageAssets» |
| c10.field.025 | MixedRoomValidationRequest.roomCaseId | Поле MixedRoomValidationRequest «roomCaseId» |
| c10.validation.025 | Validate MixedRoomValidationRequest.roomCaseId | Проверка поля MixedRoomValidationRequest «roomCaseId» |
| c10.failure.025 | Invalid field: MixedRoomValidationRequest.roomCaseId | Некорректное поле: MixedRoomValidationRequest «roomCaseId» |
| c10.field.026 | UnsupportedInput.operationId | Поле UnsupportedInput «operationId» |
| c10.validation.026 | Validate UnsupportedInput.operationId | Проверка поля UnsupportedInput «operationId» |
| c10.failure.026 | Invalid field: UnsupportedInput.operationId | Некорректное поле: UnsupportedInput «operationId» |
| c10.field.027 | UnsupportedInput.inputArtifactId | Поле UnsupportedInput «inputArtifactId» |
| c10.validation.027 | Validate UnsupportedInput.inputArtifactId | Проверка поля UnsupportedInput «inputArtifactId» |
| c10.failure.027 | Invalid field: UnsupportedInput.inputArtifactId | Некорректное поле: UnsupportedInput «inputArtifactId» |
| c10.field.028 | UnsupportedInput.reason | Поле UnsupportedInput «reason» |
| c10.validation.028 | Validate UnsupportedInput.reason | Проверка поля UnsupportedInput «reason» |
| c10.failure.028 | Invalid field: UnsupportedInput.reason | Некорректное поле: UnsupportedInput «reason» |
| c10.field.029 | UnsupportedInput.observedAssetCount | Поле UnsupportedInput «observedAssetCount» |
| c10.validation.029 | Validate UnsupportedInput.observedAssetCount | Проверка поля UnsupportedInput «observedAssetCount» |
| c10.failure.029 | Invalid field: UnsupportedInput.observedAssetCount | Некорректное поле: UnsupportedInput «observedAssetCount» |
| c10.field.030 | PerceptionOperation.operationState | Поле PerceptionOperation «operationState» |
| c10.validation.030 | Validate PerceptionOperation.operationState | Проверка поля PerceptionOperation «operationState» |
| c10.failure.030 | Invalid field: PerceptionOperation.operationState | Некорректное поле: PerceptionOperation «operationState» |
| c10.field.031 | PerceptionOperation.resultReference | Поле PerceptionOperation «resultReference» |
| c10.validation.031 | Validate PerceptionOperation.resultReference | Проверка поля PerceptionOperation «resultReference» |
| c10.failure.031 | Invalid field: PerceptionOperation.resultReference | Некорректное поле: PerceptionOperation «resultReference» |
| c10.field.032 | CaptureSetIntake.schemaVersion | Поле CaptureSetIntake «schemaVersion» |
| c10.validation.032 | Validate CaptureSetIntake.schemaVersion | Проверка поля CaptureSetIntake «schemaVersion» |
| c10.failure.032 | Invalid field: CaptureSetIntake.schemaVersion | Некорректное поле: CaptureSetIntake «schemaVersion» |
| c10.field.033 | SameRoomValidationRecord.schemaVersion | Поле SameRoomValidationRecord «schemaVersion» |
| c10.validation.033 | Validate SameRoomValidationRecord.schemaVersion | Проверка поля SameRoomValidationRecord «schemaVersion» |
| c10.failure.033 | Invalid field: SameRoomValidationRecord.schemaVersion | Некорректное поле: SameRoomValidationRecord «schemaVersion» |
| c10.field.034 | PerceptionOperation.schemaVersion | Поле PerceptionOperation «schemaVersion» |
| c10.validation.034 | Validate PerceptionOperation.schemaVersion | Проверка поля PerceptionOperation «schemaVersion» |
| c10.failure.034 | Invalid field: PerceptionOperation.schemaVersion | Некорректное поле: PerceptionOperation «schemaVersion» |
| c10.field.035 | MixedRoomValidationRequest.schemaVersion | Поле MixedRoomValidationRequest «schemaVersion» |
| c10.validation.035 | Validate MixedRoomValidationRequest.schemaVersion | Проверка поля MixedRoomValidationRequest «schemaVersion» |
| c10.failure.035 | Invalid field: MixedRoomValidationRequest.schemaVersion | Некорректное поле: MixedRoomValidationRequest «schemaVersion» |
| c10.field.036 | UnsupportedInput.schemaVersion | Поле UnsupportedInput «schemaVersion» |
| c10.validation.036 | Validate UnsupportedInput.schemaVersion | Проверка поля UnsupportedInput «schemaVersion» |
| c10.failure.036 | Invalid field: UnsupportedInput.schemaVersion | Некорректное поле: UnsupportedInput «schemaVersion» |
| c10.field.100 | VlmSceneCandidate.candidateId | Поле VlmSceneCandidate «candidateId» |
| c10.validation.100 | Validate VlmSceneCandidate.candidateId | Проверка поля VlmSceneCandidate «candidateId» |
| c10.failure.100 | Invalid field: VlmSceneCandidate.candidateId | Некорректное поле: VlmSceneCandidate «candidateId» |
| c10.field.101 | VlmSceneCandidate.operationId | Поле VlmSceneCandidate «operationId» |
| c10.validation.101 | Validate VlmSceneCandidate.operationId | Проверка поля VlmSceneCandidate «operationId» |
| c10.failure.101 | Invalid field: VlmSceneCandidate.operationId | Некорректное поле: VlmSceneCandidate «operationId» |
| c10.field.102 | VlmSceneCandidate.roomCaseId | Поле VlmSceneCandidate «roomCaseId» |
| c10.validation.102 | Validate VlmSceneCandidate.roomCaseId | Проверка поля VlmSceneCandidate «roomCaseId» |
| c10.failure.102 | Invalid field: VlmSceneCandidate.roomCaseId | Некорректное поле: VlmSceneCandidate «roomCaseId» |
| c10.field.103 | VlmSceneCandidate.contributingImageAssetIds | Поле VlmSceneCandidate «contributingImageAssetIds» |
| c10.validation.103 | Validate VlmSceneCandidate.contributingImageAssetIds | Проверка поля VlmSceneCandidate «contributingImageAssetIds» |
| c10.failure.103 | Invalid field: VlmSceneCandidate.contributingImageAssetIds | Некорректное поле: VlmSceneCandidate «contributingImageAssetIds» |
| c10.field.104 | VlmSceneCandidate.producingStageIdentity | Поле VlmSceneCandidate «producingStageIdentity» |
| c10.validation.104 | Validate VlmSceneCandidate.producingStageIdentity | Проверка поля VlmSceneCandidate «producingStageIdentity» |
| c10.failure.104 | Invalid field: VlmSceneCandidate.producingStageIdentity | Некорректное поле: VlmSceneCandidate «producingStageIdentity» |
| c10.field.105 | VlmSceneCandidate.rawProviderOutputReference | Поле VlmSceneCandidate «rawProviderOutputReference» |
| c10.validation.105 | Validate VlmSceneCandidate.rawProviderOutputReference | Проверка поля VlmSceneCandidate «rawProviderOutputReference» |
| c10.failure.105 | Invalid field: VlmSceneCandidate.rawProviderOutputReference | Некорректное поле: VlmSceneCandidate «rawProviderOutputReference» |
| c10.field.106 | VlmSceneCandidate.candidateNodes | Поле VlmSceneCandidate «candidateNodes» |
| c10.validation.106 | Validate VlmSceneCandidate.candidateNodes | Проверка поля VlmSceneCandidate «candidateNodes» |
| c10.failure.106 | Invalid field: VlmSceneCandidate.candidateNodes | Некорректное поле: VlmSceneCandidate «candidateNodes» |
| c10.field.107 | CandidateNode.candidateNodeId | Поле CandidateNode «candidateNodeId» |
| c10.validation.107 | Validate CandidateNode.candidateNodeId | Проверка поля CandidateNode «candidateNodeId» |
| c10.failure.107 | Invalid field: CandidateNode.candidateNodeId | Некорректное поле: CandidateNode «candidateNodeId» |
| c10.field.108 | CandidateNode.kind | Поле CandidateNode «kind» |
| c10.validation.108 | Validate CandidateNode.kind | Проверка поля CandidateNode «kind» |
| c10.failure.108 | Invalid field: CandidateNode.kind | Некорректное поле: CandidateNode «kind» |
| c10.field.109 | CandidateNode.spaceTypeId | Поле CandidateNode «spaceTypeId» |
| c10.validation.109 | Validate CandidateNode.spaceTypeId | Проверка поля CandidateNode «spaceTypeId» |
| c10.failure.109 | Invalid field: CandidateNode.spaceTypeId | Некорректное поле: CandidateNode «spaceTypeId» |
| c10.field.110 | CandidateNode.typeLabel | Поле CandidateNode «typeLabel» |
| c10.validation.110 | Validate CandidateNode.typeLabel | Проверка поля CandidateNode «typeLabel» |
| c10.failure.110 | Invalid field: CandidateNode.typeLabel | Некорректное поле: CandidateNode «typeLabel» |
| c10.field.111 | CandidateNode.geometryCandidate | Поле CandidateNode «geometryCandidate» |
| c10.validation.111 | Validate CandidateNode.geometryCandidate | Проверка поля CandidateNode «geometryCandidate» |
| c10.failure.111 | Invalid field: CandidateNode.geometryCandidate | Некорректное поле: CandidateNode «geometryCandidate» |
| c10.field.112 | VlmSceneCandidate.candidateRelations | Поле VlmSceneCandidate «candidateRelations» |
| c10.validation.112 | Validate VlmSceneCandidate.candidateRelations | Проверка поля VlmSceneCandidate «candidateRelations» |
| c10.failure.112 | Invalid field: VlmSceneCandidate.candidateRelations | Некорректное поле: VlmSceneCandidate «candidateRelations» |
| c10.field.113 | CandidateRelation.candidateRelationId | Поле CandidateRelation «candidateRelationId» |
| c10.validation.113 | Validate CandidateRelation.candidateRelationId | Проверка поля CandidateRelation «candidateRelationId» |
| c10.failure.113 | Invalid field: CandidateRelation.candidateRelationId | Некорректное поле: CandidateRelation «candidateRelationId» |
| c10.field.114 | CandidateRelation.relationTypeIdentity | Поле CandidateRelation «relationTypeIdentity» |
| c10.validation.114 | Validate CandidateRelation.relationTypeIdentity | Проверка поля CandidateRelation «relationTypeIdentity» |
| c10.failure.114 | Invalid field: CandidateRelation.relationTypeIdentity | Некорректное поле: CandidateRelation «relationTypeIdentity» |
| c10.field.115 | CandidateRelation.endpointCandidateNodeIds | Поле CandidateRelation «endpointCandidateNodeIds» |
| c10.validation.115 | Validate CandidateRelation.endpointCandidateNodeIds | Проверка поля CandidateRelation «endpointCandidateNodeIds» |
| c10.failure.115 | Invalid field: CandidateRelation.endpointCandidateNodeIds | Некорректное поле: CandidateRelation «endpointCandidateNodeIds» |
| c10.field.116 | VlmSceneCandidate.schemaVersion | Поле VlmSceneCandidate «schemaVersion» |
| c10.validation.116 | Validate VlmSceneCandidate.schemaVersion | Проверка поля VlmSceneCandidate «schemaVersion» |
| c10.failure.116 | Invalid field: VlmSceneCandidate.schemaVersion | Некорректное поле: VlmSceneCandidate «schemaVersion» |
| c10.field.120 | StructuredSceneV0.sceneId | Поле StructuredSceneV0 «sceneId» |
| c10.validation.120 | Validate StructuredSceneV0.sceneId | Проверка поля StructuredSceneV0 «sceneId» |
| c10.failure.120 | Invalid field: StructuredSceneV0.sceneId | Некорректное поле: StructuredSceneV0 «sceneId» |
| c10.field.121 | StructuredSceneV0.operationId | Поле StructuredSceneV0 «operationId» |
| c10.validation.121 | Validate StructuredSceneV0.operationId | Проверка поля StructuredSceneV0 «operationId» |
| c10.failure.121 | Invalid field: StructuredSceneV0.operationId | Некорректное поле: StructuredSceneV0 «operationId» |
| c10.field.122 | StructuredSceneV0.roomCaseId | Поле StructuredSceneV0 «roomCaseId» |
| c10.validation.122 | Validate StructuredSceneV0.roomCaseId | Проверка поля StructuredSceneV0 «roomCaseId» |
| c10.failure.122 | Invalid field: StructuredSceneV0.roomCaseId | Некорректное поле: StructuredSceneV0 «roomCaseId» |
| c10.field.123 | StructuredSceneV0.contributingImageAssetIds | Поле StructuredSceneV0 «contributingImageAssetIds» |
| c10.validation.123 | Validate StructuredSceneV0.contributingImageAssetIds | Проверка поля StructuredSceneV0 «contributingImageAssetIds» |
| c10.failure.123 | Invalid field: StructuredSceneV0.contributingImageAssetIds | Некорректное поле: StructuredSceneV0 «contributingImageAssetIds» |
| c10.field.124 | StructuredSceneV0.sceneRevisionId | Поле StructuredSceneV0 «sceneRevisionId» |
| c10.validation.124 | Validate StructuredSceneV0.sceneRevisionId | Проверка поля StructuredSceneV0 «sceneRevisionId» |
| c10.failure.124 | Invalid field: StructuredSceneV0.sceneRevisionId | Некорректное поле: StructuredSceneV0 «sceneRevisionId» |
| c10.field.125 | StructuredSceneV0.nodes | Поле StructuredSceneV0 «nodes» |
| c10.validation.125 | Validate StructuredSceneV0.nodes | Проверка поля StructuredSceneV0 «nodes» |
| c10.failure.125 | Invalid field: StructuredSceneV0.nodes | Некорректное поле: StructuredSceneV0 «nodes» |
| c10.field.126 | SceneNode.nodeId | Поле SceneNode «nodeId» |
| c10.validation.126 | Validate SceneNode.nodeId | Проверка поля SceneNode «nodeId» |
| c10.failure.126 | Invalid field: SceneNode.nodeId | Некорректное поле: SceneNode «nodeId» |
| c10.field.127 | SceneNode.kind | Поле SceneNode «kind» |
| c10.validation.127 | Validate SceneNode.kind | Проверка поля SceneNode «kind» |
| c10.failure.127 | Invalid field: SceneNode.kind | Некорректное поле: SceneNode «kind» |
| c10.field.128 | SceneNode.spaceTypeId | Поле SceneNode «spaceTypeId» |
| c10.validation.128 | Validate SceneNode.spaceTypeId | Проверка поля SceneNode «spaceTypeId» |
| c10.failure.128 | Invalid field: SceneNode.spaceTypeId | Некорректное поле: SceneNode «spaceTypeId» |
| c10.field.129 | SceneNode.typeLabel | Поле SceneNode «typeLabel» |
| c10.validation.129 | Validate SceneNode.typeLabel | Проверка поля SceneNode «typeLabel» |
| c10.failure.129 | Invalid field: SceneNode.typeLabel | Некорректное поле: SceneNode «typeLabel» |
| c10.field.130 | SceneNode.geometry | Поле SceneNode «geometry» |
| c10.validation.130 | Validate SceneNode.geometry | Проверка поля SceneNode «geometry» |
| c10.failure.130 | Invalid field: SceneNode.geometry | Некорректное поле: SceneNode «geometry» |
| c10.field.131 | StructuredSceneV0.relations | Поле StructuredSceneV0 «relations» |
| c10.validation.131 | Validate StructuredSceneV0.relations | Проверка поля StructuredSceneV0 «relations» |
| c10.failure.131 | Invalid field: StructuredSceneV0.relations | Некорректное поле: StructuredSceneV0 «relations» |
| c10.field.132 | SceneRelation.relationId | Поле SceneRelation «relationId» |
| c10.validation.132 | Validate SceneRelation.relationId | Проверка поля SceneRelation «relationId» |
| c10.failure.132 | Invalid field: SceneRelation.relationId | Некорректное поле: SceneRelation «relationId» |
| c10.field.133 | SceneRelation.relationTypeIdentity | Поле SceneRelation «relationTypeIdentity» |
| c10.validation.133 | Validate SceneRelation.relationTypeIdentity | Проверка поля SceneRelation «relationTypeIdentity» |
| c10.failure.133 | Invalid field: SceneRelation.relationTypeIdentity | Некорректное поле: SceneRelation «relationTypeIdentity» |
| c10.field.134 | SceneRelation.endpointNodeIds | Поле SceneRelation «endpointNodeIds» |
| c10.validation.134 | Validate SceneRelation.endpointNodeIds | Проверка поля SceneRelation «endpointNodeIds» |
| c10.failure.134 | Invalid field: SceneRelation.endpointNodeIds | Некорректное поле: SceneRelation «endpointNodeIds» |
| c10.field.135 | SceneRelation.relationRevisionId | Поле SceneRelation «relationRevisionId» |
| c10.validation.135 | Validate SceneRelation.relationRevisionId | Проверка поля SceneRelation «relationRevisionId» |
| c10.failure.135 | Invalid field: SceneRelation.relationRevisionId | Некорректное поле: SceneRelation «relationRevisionId» |
| c10.field.136 | StructuredSceneV0.schemaVersion | Поле StructuredSceneV0 «schemaVersion» |
| c10.validation.136 | Validate StructuredSceneV0.schemaVersion | Проверка поля StructuredSceneV0 «schemaVersion» |
| c10.failure.136 | Invalid field: StructuredSceneV0.schemaVersion | Некорректное поле: StructuredSceneV0 «schemaVersion» |
| c10.field.200 | PerceptionResultCommon.operationId | Поле PerceptionResultCommon «operationId» |
| c10.validation.200 | Validate PerceptionResultCommon.operationId | Проверка поля PerceptionResultCommon «operationId» |
| c10.failure.200 | Invalid field: PerceptionResultCommon.operationId | Некорректное поле: PerceptionResultCommon «operationId» |
| c10.field.201 | PerceptionResultCommon.status | Поле PerceptionResultCommon «status» |
| c10.validation.201 | Validate PerceptionResultCommon.status | Проверка поля PerceptionResultCommon «status» |
| c10.failure.201 | Invalid field: PerceptionResultCommon.status | Некорректное поле: PerceptionResultCommon «status» |
| c10.field.202 | PerceptionResultCommon.roomCaseId | Поле PerceptionResultCommon «roomCaseId» |
| c10.validation.202 | Validate PerceptionResultCommon.roomCaseId | Проверка поля PerceptionResultCommon «roomCaseId» |
| c10.failure.202 | Invalid field: PerceptionResultCommon.roomCaseId | Некорректное поле: PerceptionResultCommon «roomCaseId» |
| c10.field.203 | PerceptionResultCommon.contributingImageAssetIds | Поле PerceptionResultCommon «contributingImageAssetIds» |
| c10.validation.203 | Validate PerceptionResultCommon.contributingImageAssetIds | Проверка поля PerceptionResultCommon «contributingImageAssetIds» |
| c10.failure.203 | Invalid field: PerceptionResultCommon.contributingImageAssetIds | Некорректное поле: PerceptionResultCommon «contributingImageAssetIds» |
| c10.field.204 | PerceptionResultCommon.diagnosticsReference | Поле PerceptionResultCommon «diagnosticsReference» |
| c10.validation.204 | Validate PerceptionResultCommon.diagnosticsReference | Проверка поля PerceptionResultCommon «diagnosticsReference» |
| c10.failure.204 | Invalid field: PerceptionResultCommon.diagnosticsReference | Некорректное поле: PerceptionResultCommon «diagnosticsReference» |
| c10.field.205 | PerceptionResultCommon.schemaVersion | Поле PerceptionResultCommon «schemaVersion» |
| c10.validation.205 | Validate PerceptionResultCommon.schemaVersion | Проверка поля PerceptionResultCommon «schemaVersion» |
| c10.failure.205 | Invalid field: PerceptionResultCommon.schemaVersion | Некорректное поле: PerceptionResultCommon «schemaVersion» |
| c10.field.206 | PerceptionResultCommon.ruleSetVersion | Поле PerceptionResultCommon «ruleSetVersion» |
| c10.validation.206 | Validate PerceptionResultCommon.ruleSetVersion | Проверка поля PerceptionResultCommon «ruleSetVersion» |
| c10.failure.206 | Invalid field: PerceptionResultCommon.ruleSetVersion | Некорректное поле: PerceptionResultCommon «ruleSetVersion» |
| c10.field.207 | PerceptionResultCommon.contractBundleReference | Поле PerceptionResultCommon «contractBundleReference» |
| c10.validation.207 | Validate PerceptionResultCommon.contractBundleReference | Проверка поля PerceptionResultCommon «contractBundleReference» |
| c10.failure.207 | Invalid field: PerceptionResultCommon.contractBundleReference | Некорректное поле: PerceptionResultCommon «contractBundleReference» |
| c10.field.208 | PerceptionResultCommon.vocabularyVersion | Поле PerceptionResultCommon «vocabularyVersion» |
| c10.validation.208 | Validate PerceptionResultCommon.vocabularyVersion | Проверка поля PerceptionResultCommon «vocabularyVersion» |
| c10.failure.208 | Invalid field: PerceptionResultCommon.vocabularyVersion | Некорректное поле: PerceptionResultCommon «vocabularyVersion» |
| c10.field.209 | PerceptionResultCommon.providerConfigurationVersionReference | Поле PerceptionResultCommon «providerConfigurationVersionReference» |
| c10.validation.209 | Validate PerceptionResultCommon.providerConfigurationVersionReference | Проверка поля PerceptionResultCommon «providerConfigurationVersionReference» |
| c10.failure.209 | Invalid field: PerceptionResultCommon.providerConfigurationVersionReference | Некорректное поле: PerceptionResultCommon «providerConfigurationVersionReference» |
| c10.field.210 | PerceptionResultCommon.sealedAt | Поле PerceptionResultCommon «sealedAt» |
| c10.validation.210 | Validate PerceptionResultCommon.sealedAt | Проверка поля PerceptionResultCommon «sealedAt» |
| c10.failure.210 | Invalid field: PerceptionResultCommon.sealedAt | Некорректное поле: PerceptionResultCommon «sealedAt» |
| c10.field.211 | PerceptionResultCommon.sealIntegrityReference | Поле PerceptionResultCommon «sealIntegrityReference» |
| c10.validation.211 | Validate PerceptionResultCommon.sealIntegrityReference | Проверка поля PerceptionResultCommon «sealIntegrityReference» |
| c10.failure.211 | Invalid field: PerceptionResultCommon.sealIntegrityReference | Некорректное поле: PerceptionResultCommon «sealIntegrityReference» |
| c10.field.212 | PerceptionResultCommon.predecessorResultReference | Поле PerceptionResultCommon «predecessorResultReference» |
| c10.validation.212 | Validate PerceptionResultCommon.predecessorResultReference | Проверка поля PerceptionResultCommon «predecessorResultReference» |
| c10.failure.212 | Invalid field: PerceptionResultCommon.predecessorResultReference | Некорректное поле: PerceptionResultCommon «predecessorResultReference» |
| c10.field.213 | PerceptionResultCommon.resultId | Поле PerceptionResultCommon «resultId» |
| c10.validation.213 | Validate PerceptionResultCommon.resultId | Проверка поля PerceptionResultCommon «resultId» |
| c10.failure.213 | Invalid field: PerceptionResultCommon.resultId | Некорректное поле: PerceptionResultCommon «resultId» |
| c10.field.214 | PerceptionResultCommon.resultRevisionId | Поле PerceptionResultCommon «resultRevisionId» |
| c10.validation.214 | Validate PerceptionResultCommon.resultRevisionId | Проверка поля PerceptionResultCommon «resultRevisionId» |
| c10.failure.214 | Invalid field: PerceptionResultCommon.resultRevisionId | Некорректное поле: PerceptionResultCommon «resultRevisionId» |
| c10.field.220 | SceneResult.scene | Поле SceneResult «scene» |
| c10.validation.220 | Validate SceneResult.scene | Проверка поля SceneResult «scene» |
| c10.failure.220 | Invalid field: SceneResult.scene | Некорректное поле: SceneResult «scene» |
| c10.field.221 | SceneResult.completeness | Поле SceneResult «completeness» |
| c10.validation.221 | Validate SceneResult.completeness | Проверка поля SceneResult «completeness» |
| c10.failure.221 | Invalid field: SceneResult.completeness | Некорректное поле: SceneResult «completeness» |
| c10.field.222 | SceneResult.evidenceArtifactReference | Поле SceneResult «evidenceArtifactReference» |
| c10.validation.222 | Validate SceneResult.evidenceArtifactReference | Проверка поля SceneResult «evidenceArtifactReference» |
| c10.failure.222 | Invalid field: SceneResult.evidenceArtifactReference | Некорректное поле: SceneResult «evidenceArtifactReference» |
| c10.field.230 | InsufficientEvidenceResult.reasonCategory | Поле InsufficientEvidenceResult «reasonCategory» |
| c10.validation.230 | Validate InsufficientEvidenceResult.reasonCategory | Проверка поля InsufficientEvidenceResult «reasonCategory» |
| c10.failure.230 | Invalid field: InsufficientEvidenceResult.reasonCategory | Некорректное поле: InsufficientEvidenceResult «reasonCategory» |
| c10.field.231 | InsufficientEvidenceResult.recommendedNextAction | Поле InsufficientEvidenceResult «recommendedNextAction» |
| c10.validation.231 | Validate InsufficientEvidenceResult.recommendedNextAction | Проверка поля InsufficientEvidenceResult «recommendedNextAction» |
| c10.failure.231 | Invalid field: InsufficientEvidenceResult.recommendedNextAction | Некорректное поле: InsufficientEvidenceResult «recommendedNextAction» |
| c10.field.240 | FailureResult.technicalReasonCategory | Поле FailureResult «technicalReasonCategory» |
| c10.validation.240 | Validate FailureResult.technicalReasonCategory | Проверка поля FailureResult «technicalReasonCategory» |
| c10.failure.240 | Invalid field: FailureResult.technicalReasonCategory | Некорректное поле: FailureResult «technicalReasonCategory» |
| c10.field.241 | FailureResult.retryability | Поле FailureResult «retryability» |
| c10.validation.241 | Validate FailureResult.retryability | Проверка поля FailureResult «retryability» |
| c10.failure.241 | Invalid field: FailureResult.retryability | Некорректное поле: FailureResult «retryability» |
| c10.field.250 | RejectedResult.contractViolations | Поле RejectedResult «contractViolations» |
| c10.validation.250 | Validate RejectedResult.contractViolations | Проверка поля RejectedResult «contractViolations» |
| c10.failure.250 | Invalid field: RejectedResult.contractViolations | Некорректное поле: RejectedResult «contractViolations» |
| c10.field.251 | RejectedResult.inputSetId | Поле RejectedResult «inputSetId» |
| c10.validation.251 | Validate RejectedResult.inputSetId | Проверка поля RejectedResult «inputSetId» |
| c10.failure.251 | Invalid field: RejectedResult.inputSetId | Некорректное поле: RejectedResult «inputSetId» |
| c10.field.252 | RejectedResult.rejectionStage | Поле RejectedResult «rejectionStage» |
| c10.validation.252 | Validate RejectedResult.rejectionStage | Проверка поля RejectedResult «rejectionStage» |
| c10.failure.252 | Invalid field: RejectedResult.rejectionStage | Некорректное поле: RejectedResult «rejectionStage» |
| c10.field.253 | RejectedResult.rejectionContextReference | Поле RejectedResult «rejectionContextReference» |
| c10.validation.253 | Validate RejectedResult.rejectionContextReference | Проверка поля RejectedResult «rejectionContextReference» |
| c10.failure.253 | Invalid field: RejectedResult.rejectionContextReference | Некорректное поле: RejectedResult «rejectionContextReference» |
| c10.field.260 | PerceptionOperationDiagnostics.diagnosticsId | Поле PerceptionOperationDiagnostics «diagnosticsId» |
| c10.validation.260 | Validate PerceptionOperationDiagnostics.diagnosticsId | Проверка поля PerceptionOperationDiagnostics «diagnosticsId» |
| c10.failure.260 | Invalid field: PerceptionOperationDiagnostics.diagnosticsId | Некорректное поле: PerceptionOperationDiagnostics «diagnosticsId» |
| c10.field.261 | PerceptionOperationDiagnostics.operationId | Поле PerceptionOperationDiagnostics «operationId» |
| c10.validation.261 | Validate PerceptionOperationDiagnostics.operationId | Проверка поля PerceptionOperationDiagnostics «operationId» |
| c10.failure.261 | Invalid field: PerceptionOperationDiagnostics.operationId | Некорректное поле: PerceptionOperationDiagnostics «operationId» |
| c10.field.262 | PerceptionOperationDiagnostics.roomCaseId | Поле PerceptionOperationDiagnostics «roomCaseId» |
| c10.validation.262 | Validate PerceptionOperationDiagnostics.roomCaseId | Проверка поля PerceptionOperationDiagnostics «roomCaseId» |
| c10.failure.262 | Invalid field: PerceptionOperationDiagnostics.roomCaseId | Некорректное поле: PerceptionOperationDiagnostics «roomCaseId» |
| c10.field.263 | PerceptionOperationDiagnostics.stageEvents | Поле PerceptionOperationDiagnostics «stageEvents» |
| c10.validation.263 | Validate PerceptionOperationDiagnostics.stageEvents | Проверка поля PerceptionOperationDiagnostics «stageEvents» |
| c10.failure.263 | Invalid field: PerceptionOperationDiagnostics.stageEvents | Некорректное поле: PerceptionOperationDiagnostics «stageEvents» |
| c10.field.264 | StageEvent.stageIdentity | Поле StageEvent «stageIdentity» |
| c10.validation.264 | Validate StageEvent.stageIdentity | Проверка поля StageEvent «stageIdentity» |
| c10.failure.264 | Invalid field: StageEvent.stageIdentity | Некорректное поле: StageEvent «stageIdentity» |
| c10.field.265 | StageEvent.status | Поле StageEvent «status» |
| c10.validation.265 | Validate StageEvent.status | Проверка поля StageEvent «status» |
| c10.failure.265 | Invalid field: StageEvent.status | Некорректное поле: StageEvent «status» |
| c10.field.266 | StageEvent.startedAt | Поле StageEvent «startedAt» |
| c10.validation.266 | Validate StageEvent.startedAt | Проверка поля StageEvent «startedAt» |
| c10.failure.266 | Invalid field: StageEvent.startedAt | Некорректное поле: StageEvent «startedAt» |
| c10.field.267 | StageEvent.completedAt | Поле StageEvent «completedAt» |
| c10.validation.267 | Validate StageEvent.completedAt | Проверка поля StageEvent «completedAt» |
| c10.failure.267 | Invalid field: StageEvent.completedAt | Некорректное поле: StageEvent «completedAt» |
| c10.field.268 | StageEvent.failureCode | Поле StageEvent «failureCode» |
| c10.validation.268 | Validate StageEvent.failureCode | Проверка поля StageEvent «failureCode» |
| c10.failure.268 | Invalid field: StageEvent.failureCode | Некорректное поле: StageEvent «failureCode» |
| c10.field.269 | PerceptionOperationDiagnostics.imageDiagnosticReferences | Поле PerceptionOperationDiagnostics «imageDiagnosticReferences» |
| c10.validation.269 | Validate PerceptionOperationDiagnostics.imageDiagnosticReferences | Проверка поля PerceptionOperationDiagnostics «imageDiagnosticReferences» |
| c10.failure.269 | Invalid field: PerceptionOperationDiagnostics.imageDiagnosticReferences | Некорректное поле: PerceptionOperationDiagnostics «imageDiagnosticReferences» |
| c10.field.270 | PerceptionOperationDiagnostics.traceReference | Поле PerceptionOperationDiagnostics «traceReference» |
| c10.validation.270 | Validate PerceptionOperationDiagnostics.traceReference | Проверка поля PerceptionOperationDiagnostics «traceReference» |
| c10.failure.270 | Invalid field: PerceptionOperationDiagnostics.traceReference | Некорректное поле: PerceptionOperationDiagnostics «traceReference» |
| c10.field.271 | PerceptionOperationDiagnostics.integrityReference | Поле PerceptionOperationDiagnostics «integrityReference» |
| c10.validation.271 | Validate PerceptionOperationDiagnostics.integrityReference | Проверка поля PerceptionOperationDiagnostics «integrityReference» |
| c10.failure.271 | Invalid field: PerceptionOperationDiagnostics.integrityReference | Некорректное поле: PerceptionOperationDiagnostics «integrityReference» |
| c10.field.272 | PerceptionOperationDiagnostics.schemaVersion | Поле PerceptionOperationDiagnostics «schemaVersion» |
| c10.validation.272 | Validate PerceptionOperationDiagnostics.schemaVersion | Проверка поля PerceptionOperationDiagnostics «schemaVersion» |
| c10.failure.272 | Invalid field: PerceptionOperationDiagnostics.schemaVersion | Некорректное поле: PerceptionOperationDiagnostics «schemaVersion» |
| c10.field.280 | ImageAssetProcessingDiagnostic.imageDiagnosticId | Поле ImageAssetProcessingDiagnostic «imageDiagnosticId» |
| c10.validation.280 | Validate ImageAssetProcessingDiagnostic.imageDiagnosticId | Проверка поля ImageAssetProcessingDiagnostic «imageDiagnosticId» |
| c10.failure.280 | Invalid field: ImageAssetProcessingDiagnostic.imageDiagnosticId | Некорректное поле: ImageAssetProcessingDiagnostic «imageDiagnosticId» |
| c10.field.281 | ImageAssetProcessingDiagnostic.operationId | Поле ImageAssetProcessingDiagnostic «operationId» |
| c10.validation.281 | Validate ImageAssetProcessingDiagnostic.operationId | Проверка поля ImageAssetProcessingDiagnostic «operationId» |
| c10.failure.281 | Invalid field: ImageAssetProcessingDiagnostic.operationId | Некорректное поле: ImageAssetProcessingDiagnostic «operationId» |
| c10.field.282 | ImageAssetProcessingDiagnostic.imageAssetId | Поле ImageAssetProcessingDiagnostic «imageAssetId» |
| c10.validation.282 | Validate ImageAssetProcessingDiagnostic.imageAssetId | Проверка поля ImageAssetProcessingDiagnostic «imageAssetId» |
| c10.failure.282 | Invalid field: ImageAssetProcessingDiagnostic.imageAssetId | Некорректное поле: ImageAssetProcessingDiagnostic «imageAssetId» |
| c10.field.283 | ImageAssetProcessingDiagnostic.processingStatus | Поле ImageAssetProcessingDiagnostic «processingStatus» |
| c10.validation.283 | Validate ImageAssetProcessingDiagnostic.processingStatus | Проверка поля ImageAssetProcessingDiagnostic «processingStatus» |
| c10.failure.283 | Invalid field: ImageAssetProcessingDiagnostic.processingStatus | Некорректное поле: ImageAssetProcessingDiagnostic «processingStatus» |
| c10.field.284 | ImageAssetProcessingDiagnostic.failureStage | Поле ImageAssetProcessingDiagnostic «failureStage» |
| c10.validation.284 | Validate ImageAssetProcessingDiagnostic.failureStage | Проверка поля ImageAssetProcessingDiagnostic «failureStage» |
| c10.failure.284 | Invalid field: ImageAssetProcessingDiagnostic.failureStage | Некорректное поле: ImageAssetProcessingDiagnostic «failureStage» |
| c10.field.285 | ImageAssetProcessingDiagnostic.failureCode | Поле ImageAssetProcessingDiagnostic «failureCode» |
| c10.validation.285 | Validate ImageAssetProcessingDiagnostic.failureCode | Проверка поля ImageAssetProcessingDiagnostic «failureCode» |
| c10.failure.285 | Invalid field: ImageAssetProcessingDiagnostic.failureCode | Некорректное поле: ImageAssetProcessingDiagnostic «failureCode» |
| c10.field.286 | ImageAssetProcessingDiagnostic.retryability | Поле ImageAssetProcessingDiagnostic «retryability» |
| c10.validation.286 | Validate ImageAssetProcessingDiagnostic.retryability | Проверка поля ImageAssetProcessingDiagnostic «retryability» |
| c10.failure.286 | Invalid field: ImageAssetProcessingDiagnostic.retryability | Некорректное поле: ImageAssetProcessingDiagnostic «retryability» |
| c10.field.287 | ImageAssetProcessingDiagnostic.providerTraceReference | Поле ImageAssetProcessingDiagnostic «providerTraceReference» |
| c10.validation.287 | Validate ImageAssetProcessingDiagnostic.providerTraceReference | Проверка поля ImageAssetProcessingDiagnostic «providerTraceReference» |
| c10.failure.287 | Invalid field: ImageAssetProcessingDiagnostic.providerTraceReference | Некорректное поле: ImageAssetProcessingDiagnostic «providerTraceReference» |
| c10.field.288 | ImageAssetProcessingDiagnostic.preprocessingTraceReference | Поле ImageAssetProcessingDiagnostic «preprocessingTraceReference» |
| c10.validation.288 | Validate ImageAssetProcessingDiagnostic.preprocessingTraceReference | Проверка поля ImageAssetProcessingDiagnostic «preprocessingTraceReference» |
| c10.failure.288 | Invalid field: ImageAssetProcessingDiagnostic.preprocessingTraceReference | Некорректное поле: ImageAssetProcessingDiagnostic «preprocessingTraceReference» |
| c10.field.289 | ImageAssetProcessingDiagnostic.evidenceAvailability | Поле ImageAssetProcessingDiagnostic «evidenceAvailability» |
| c10.validation.289 | Validate ImageAssetProcessingDiagnostic.evidenceAvailability | Проверка поля ImageAssetProcessingDiagnostic «evidenceAvailability» |
| c10.failure.289 | Invalid field: ImageAssetProcessingDiagnostic.evidenceAvailability | Некорректное поле: ImageAssetProcessingDiagnostic «evidenceAvailability» |
| c10.field.290 | ImageAssetProcessingDiagnostic.excludedFromFusionReason | Поле ImageAssetProcessingDiagnostic «excludedFromFusionReason» |
| c10.validation.290 | Validate ImageAssetProcessingDiagnostic.excludedFromFusionReason | Проверка поля ImageAssetProcessingDiagnostic «excludedFromFusionReason» |
| c10.failure.290 | Invalid field: ImageAssetProcessingDiagnostic.excludedFromFusionReason | Некорректное поле: ImageAssetProcessingDiagnostic «excludedFromFusionReason» |
| c10.field.291 | ImageAssetProcessingDiagnostic.schemaVersion | Поле ImageAssetProcessingDiagnostic «schemaVersion» |
| c10.validation.291 | Validate ImageAssetProcessingDiagnostic.schemaVersion | Проверка поля ImageAssetProcessingDiagnostic «schemaVersion» |
| c10.failure.291 | Invalid field: ImageAssetProcessingDiagnostic.schemaVersion | Некорректное поле: ImageAssetProcessingDiagnostic «schemaVersion» |
| c10.field.300 | PerceptionEvidenceArtifact.evidenceArtifactId | Поле PerceptionEvidenceArtifact «evidenceArtifactId» |
| c10.validation.300 | Validate PerceptionEvidenceArtifact.evidenceArtifactId | Проверка поля PerceptionEvidenceArtifact «evidenceArtifactId» |
| c10.failure.300 | Invalid field: PerceptionEvidenceArtifact.evidenceArtifactId | Некорректное поле: PerceptionEvidenceArtifact «evidenceArtifactId» |
| c10.field.301 | PerceptionEvidenceArtifact.operationId | Поле PerceptionEvidenceArtifact «operationId» |
| c10.validation.301 | Validate PerceptionEvidenceArtifact.operationId | Проверка поля PerceptionEvidenceArtifact «operationId» |
| c10.failure.301 | Invalid field: PerceptionEvidenceArtifact.operationId | Некорректное поле: PerceptionEvidenceArtifact «operationId» |
| c10.field.302 | PerceptionEvidenceArtifact.roomCaseId | Поле PerceptionEvidenceArtifact «roomCaseId» |
| c10.validation.302 | Validate PerceptionEvidenceArtifact.roomCaseId | Проверка поля PerceptionEvidenceArtifact «roomCaseId» |
| c10.failure.302 | Invalid field: PerceptionEvidenceArtifact.roomCaseId | Некорректное поле: PerceptionEvidenceArtifact «roomCaseId» |
| c10.field.303 | PerceptionEvidenceArtifact.contributingImageAssetIds | Поле PerceptionEvidenceArtifact «contributingImageAssetIds» |
| c10.validation.303 | Validate PerceptionEvidenceArtifact.contributingImageAssetIds | Проверка поля PerceptionEvidenceArtifact «contributingImageAssetIds» |
| c10.failure.303 | Invalid field: PerceptionEvidenceArtifact.contributingImageAssetIds | Некорректное поле: PerceptionEvidenceArtifact «contributingImageAssetIds» |
| c10.field.304 | PerceptionEvidenceArtifact.sceneReference | Поле PerceptionEvidenceArtifact «sceneReference» |
| c10.validation.304 | Validate PerceptionEvidenceArtifact.sceneReference | Проверка поля PerceptionEvidenceArtifact «sceneReference» |
| c10.failure.304 | Invalid field: PerceptionEvidenceArtifact.sceneReference | Некорректное поле: PerceptionEvidenceArtifact «sceneReference» |
| c10.field.305 | PerceptionEvidenceArtifact.groundingRecords | Поле PerceptionEvidenceArtifact «groundingRecords» |
| c10.validation.305 | Validate PerceptionEvidenceArtifact.groundingRecords | Проверка поля PerceptionEvidenceArtifact «groundingRecords» |
| c10.failure.305 | Invalid field: PerceptionEvidenceArtifact.groundingRecords | Некорректное поле: PerceptionEvidenceArtifact «groundingRecords» |
| c10.field.306 | GroundingRecord.groundingRecordId | Поле GroundingRecord «groundingRecordId» |
| c10.validation.306 | Validate GroundingRecord.groundingRecordId | Проверка поля GroundingRecord «groundingRecordId» |
| c10.failure.306 | Invalid field: GroundingRecord.groundingRecordId | Некорректное поле: GroundingRecord «groundingRecordId» |
| c10.field.307 | GroundingRecord.targetElementId | Поле GroundingRecord «targetElementId» |
| c10.validation.307 | Validate GroundingRecord.targetElementId | Проверка поля GroundingRecord «targetElementId» |
| c10.failure.307 | Invalid field: GroundingRecord.targetElementId | Некорректное поле: GroundingRecord «targetElementId» |
| c10.field.308 | GroundingRecord.imageAssetIds | Поле GroundingRecord «imageAssetIds» |
| c10.validation.308 | Validate GroundingRecord.imageAssetIds | Проверка поля GroundingRecord «imageAssetIds» |
| c10.failure.308 | Invalid field: GroundingRecord.imageAssetIds | Некорректное поле: GroundingRecord «imageAssetIds» |
| c10.field.309 | GroundingRecord.evidenceReference | Поле GroundingRecord «evidenceReference» |
| c10.validation.309 | Validate GroundingRecord.evidenceReference | Проверка поля GroundingRecord «evidenceReference» |
| c10.failure.309 | Invalid field: GroundingRecord.evidenceReference | Некорректное поле: GroundingRecord «evidenceReference» |
| c10.field.310 | GroundingRecord.evidenceType | Поле GroundingRecord «evidenceType» |
| c10.validation.310 | Validate GroundingRecord.evidenceType | Проверка поля GroundingRecord «evidenceType» |
| c10.failure.310 | Invalid field: GroundingRecord.evidenceType | Некорректное поле: GroundingRecord «evidenceType» |
| c10.field.311 | GroundingRecord.confidenceAssertionReference | Поле GroundingRecord «confidenceAssertionReference» |
| c10.validation.311 | Validate GroundingRecord.confidenceAssertionReference | Проверка поля GroundingRecord «confidenceAssertionReference» |
| c10.failure.311 | Invalid field: GroundingRecord.confidenceAssertionReference | Некорректное поле: GroundingRecord «confidenceAssertionReference» |
| c10.field.312 | GroundingRecord.provenanceAttachmentReference | Поле GroundingRecord «provenanceAttachmentReference» |
| c10.validation.312 | Validate GroundingRecord.provenanceAttachmentReference | Проверка поля GroundingRecord «provenanceAttachmentReference» |
| c10.failure.312 | Invalid field: GroundingRecord.provenanceAttachmentReference | Некорректное поле: GroundingRecord «provenanceAttachmentReference» |
| c10.field.313 | GroundingRecord.mechanismVersionReference | Поле GroundingRecord «mechanismVersionReference» |
| c10.validation.313 | Validate GroundingRecord.mechanismVersionReference | Проверка поля GroundingRecord «mechanismVersionReference» |
| c10.failure.313 | Invalid field: GroundingRecord.mechanismVersionReference | Некорректное поле: GroundingRecord «mechanismVersionReference» |
| c10.field.314 | GroundingRecord.promptVersionReference | Поле GroundingRecord «promptVersionReference» |
| c10.validation.314 | Validate GroundingRecord.promptVersionReference | Проверка поля GroundingRecord «promptVersionReference» |
| c10.failure.314 | Invalid field: GroundingRecord.promptVersionReference | Некорректное поле: GroundingRecord «promptVersionReference» |
| c10.field.315 | GroundingRecord.preprocessingTransformReference | Поле GroundingRecord «preprocessingTransformReference» |
| c10.validation.315 | Validate GroundingRecord.preprocessingTransformReference | Проверка поля GroundingRecord «preprocessingTransformReference» |
| c10.failure.315 | Invalid field: GroundingRecord.preprocessingTransformReference | Некорректное поле: GroundingRecord «preprocessingTransformReference» |
| c10.field.316 | PerceptionEvidenceArtifact.provenanceAttachments | Поле PerceptionEvidenceArtifact «provenanceAttachments» |
| c10.validation.316 | Validate PerceptionEvidenceArtifact.provenanceAttachments | Проверка поля PerceptionEvidenceArtifact «provenanceAttachments» |
| c10.failure.316 | Invalid field: PerceptionEvidenceArtifact.provenanceAttachments | Некорректное поле: PerceptionEvidenceArtifact «provenanceAttachments» |
| c10.field.317 | PerceptionEvidenceArtifact.bestEffortAssessments | Поле PerceptionEvidenceArtifact «bestEffortAssessments» |
| c10.validation.317 | Validate PerceptionEvidenceArtifact.bestEffortAssessments | Проверка поля PerceptionEvidenceArtifact «bestEffortAssessments» |
| c10.failure.317 | Invalid field: PerceptionEvidenceArtifact.bestEffortAssessments | Некорректное поле: PerceptionEvidenceArtifact «bestEffortAssessments» |
| c10.field.318 | PerceptionEvidenceArtifact.attributeEvidenceArtifacts | Поле PerceptionEvidenceArtifact «attributeEvidenceArtifacts» |
| c10.validation.318 | Validate PerceptionEvidenceArtifact.attributeEvidenceArtifacts | Проверка поля PerceptionEvidenceArtifact «attributeEvidenceArtifacts» |
| c10.failure.318 | Invalid field: PerceptionEvidenceArtifact.attributeEvidenceArtifacts | Некорректное поле: PerceptionEvidenceArtifact «attributeEvidenceArtifacts» |
| c10.field.319 | PerceptionEvidenceArtifact.evidenceSets | Поле PerceptionEvidenceArtifact «evidenceSets» |
| c10.validation.319 | Validate PerceptionEvidenceArtifact.evidenceSets | Проверка поля PerceptionEvidenceArtifact «evidenceSets» |
| c10.failure.319 | Invalid field: PerceptionEvidenceArtifact.evidenceSets | Некорректное поле: PerceptionEvidenceArtifact «evidenceSets» |
| c10.field.320 | PerceptionEvidenceArtifact.determinabilityBasisRecords | Поле PerceptionEvidenceArtifact «determinabilityBasisRecords» |
| c10.validation.320 | Validate PerceptionEvidenceArtifact.determinabilityBasisRecords | Проверка поля PerceptionEvidenceArtifact «determinabilityBasisRecords» |
| c10.failure.320 | Invalid field: PerceptionEvidenceArtifact.determinabilityBasisRecords | Некорректное поле: PerceptionEvidenceArtifact «determinabilityBasisRecords» |
| c10.field.321 | PerceptionEvidenceArtifact.confidenceAssertions | Поле PerceptionEvidenceArtifact «confidenceAssertions» |
| c10.validation.321 | Validate PerceptionEvidenceArtifact.confidenceAssertions | Проверка поля PerceptionEvidenceArtifact «confidenceAssertions» |
| c10.failure.321 | Invalid field: PerceptionEvidenceArtifact.confidenceAssertions | Некорректное поле: PerceptionEvidenceArtifact «confidenceAssertions» |
| c10.field.322 | PerceptionEvidenceArtifact.contract6PackageReference | Поле PerceptionEvidenceArtifact «contract6PackageReference» |
| c10.validation.322 | Validate PerceptionEvidenceArtifact.contract6PackageReference | Проверка поля PerceptionEvidenceArtifact «contract6PackageReference» |
| c10.failure.322 | Invalid field: PerceptionEvidenceArtifact.contract6PackageReference | Некорректное поле: PerceptionEvidenceArtifact «contract6PackageReference» |
| c10.field.323 | PerceptionEvidenceArtifact.integrityReference | Поле PerceptionEvidenceArtifact «integrityReference» |
| c10.validation.323 | Validate PerceptionEvidenceArtifact.integrityReference | Проверка поля PerceptionEvidenceArtifact «integrityReference» |
| c10.failure.323 | Invalid field: PerceptionEvidenceArtifact.integrityReference | Некорректное поле: PerceptionEvidenceArtifact «integrityReference» |
| c10.field.324 | PerceptionEvidenceArtifact.historyReference | Поле PerceptionEvidenceArtifact «historyReference» |
| c10.validation.324 | Validate PerceptionEvidenceArtifact.historyReference | Проверка поля PerceptionEvidenceArtifact «historyReference» |
| c10.failure.324 | Invalid field: PerceptionEvidenceArtifact.historyReference | Некорректное поле: PerceptionEvidenceArtifact «historyReference» |
| c10.field.325 | PerceptionEvidenceArtifact.bestEffortValues | Поле PerceptionEvidenceArtifact «bestEffortValues» |
| c10.validation.325 | Validate PerceptionEvidenceArtifact.bestEffortValues | Проверка поля PerceptionEvidenceArtifact «bestEffortValues» |
| c10.failure.325 | Invalid field: PerceptionEvidenceArtifact.bestEffortValues | Некорректное поле: PerceptionEvidenceArtifact «bestEffortValues» |
| c10.field.326 | PerceptionEvidenceArtifact.confidenceSourceSignals | Поле PerceptionEvidenceArtifact «confidenceSourceSignals» |
| c10.validation.326 | Validate PerceptionEvidenceArtifact.confidenceSourceSignals | Проверка поля PerceptionEvidenceArtifact «confidenceSourceSignals» |
| c10.failure.326 | Invalid field: PerceptionEvidenceArtifact.confidenceSourceSignals | Некорректное поле: PerceptionEvidenceArtifact «confidenceSourceSignals» |
| c10.field.327 | PerceptionEvidenceArtifact.schemaVersion | Поле PerceptionEvidenceArtifact «schemaVersion» |
| c10.validation.327 | Validate PerceptionEvidenceArtifact.schemaVersion | Проверка поля PerceptionEvidenceArtifact «schemaVersion» |
| c10.failure.327 | Invalid field: PerceptionEvidenceArtifact.schemaVersion | Некорректное поле: PerceptionEvidenceArtifact «schemaVersion» |
| c10.field.330 | ProvenanceAttachmentRecord.provenanceAttachmentId | Поле ProvenanceAttachmentRecord «provenanceAttachmentId» |
| c10.validation.330 | Validate ProvenanceAttachmentRecord.provenanceAttachmentId | Проверка поля ProvenanceAttachmentRecord «provenanceAttachmentId» |
| c10.failure.330 | Invalid field: ProvenanceAttachmentRecord.provenanceAttachmentId | Некорректное поле: ProvenanceAttachmentRecord «provenanceAttachmentId» |
| c10.field.331 | ProvenanceAttachmentRecord.targetAnnotationId | Поле ProvenanceAttachmentRecord «targetAnnotationId» |
| c10.validation.331 | Validate ProvenanceAttachmentRecord.targetAnnotationId | Проверка поля ProvenanceAttachmentRecord «targetAnnotationId» |
| c10.failure.331 | Invalid field: ProvenanceAttachmentRecord.targetAnnotationId | Некорректное поле: ProvenanceAttachmentRecord «targetAnnotationId» |
| c10.field.332 | ProvenanceAttachmentRecord.targetKind | Поле ProvenanceAttachmentRecord «targetKind» |
| c10.validation.332 | Validate ProvenanceAttachmentRecord.targetKind | Проверка поля ProvenanceAttachmentRecord «targetKind» |
| c10.failure.332 | Invalid field: ProvenanceAttachmentRecord.targetKind | Некорректное поле: ProvenanceAttachmentRecord «targetKind» |
| c10.field.333 | ProvenanceAttachmentRecord.provenanceIdentity | Поле ProvenanceAttachmentRecord «provenanceIdentity» |
| c10.validation.333 | Validate ProvenanceAttachmentRecord.provenanceIdentity | Проверка поля ProvenanceAttachmentRecord «provenanceIdentity» |
| c10.failure.333 | Invalid field: ProvenanceAttachmentRecord.provenanceIdentity | Некорректное поле: ProvenanceAttachmentRecord «provenanceIdentity» |
| c10.field.334 | ProvenanceAttachmentRecord.producingStageIdentity | Поле ProvenanceAttachmentRecord «producingStageIdentity» |
| c10.validation.334 | Validate ProvenanceAttachmentRecord.producingStageIdentity | Проверка поля ProvenanceAttachmentRecord «producingStageIdentity» |
| c10.failure.334 | Invalid field: ProvenanceAttachmentRecord.producingStageIdentity | Некорректное поле: ProvenanceAttachmentRecord «producingStageIdentity» |
| c10.field.335 | ProvenanceAttachmentRecord.producerIdentityAndVersions | Поле ProvenanceAttachmentRecord «producerIdentityAndVersions» |
| c10.validation.335 | Validate ProvenanceAttachmentRecord.producerIdentityAndVersions | Проверка поля ProvenanceAttachmentRecord «producerIdentityAndVersions» |
| c10.failure.335 | Invalid field: ProvenanceAttachmentRecord.producerIdentityAndVersions | Некорректное поле: ProvenanceAttachmentRecord «producerIdentityAndVersions» |
| c10.field.336 | ProvenanceAttachmentRecord.parentEvidenceOrValueIds | Поле ProvenanceAttachmentRecord «parentEvidenceOrValueIds» |
| c10.validation.336 | Validate ProvenanceAttachmentRecord.parentEvidenceOrValueIds | Проверка поля ProvenanceAttachmentRecord «parentEvidenceOrValueIds» |
| c10.failure.336 | Invalid field: ProvenanceAttachmentRecord.parentEvidenceOrValueIds | Некорректное поле: ProvenanceAttachmentRecord «parentEvidenceOrValueIds» |
| c10.field.337 | ProvenanceAttachmentRecord.roomCaseId | Поле ProvenanceAttachmentRecord «roomCaseId» |
| c10.validation.337 | Validate ProvenanceAttachmentRecord.roomCaseId | Проверка поля ProvenanceAttachmentRecord «roomCaseId» |
| c10.failure.337 | Invalid field: ProvenanceAttachmentRecord.roomCaseId | Некорректное поле: ProvenanceAttachmentRecord «roomCaseId» |
| c10.field.338 | ProvenanceAttachmentRecord.contractSemanticVersion | Поле ProvenanceAttachmentRecord «contractSemanticVersion» |
| c10.validation.338 | Validate ProvenanceAttachmentRecord.contractSemanticVersion | Проверка поля ProvenanceAttachmentRecord «contractSemanticVersion» |
| c10.failure.338 | Invalid field: ProvenanceAttachmentRecord.contractSemanticVersion | Некорректное поле: ProvenanceAttachmentRecord «contractSemanticVersion» |
| c10.field.339 | ProvenanceAttachmentRecord.traceReference | Поле ProvenanceAttachmentRecord «traceReference» |
| c10.validation.339 | Validate ProvenanceAttachmentRecord.traceReference | Проверка поля ProvenanceAttachmentRecord «traceReference» |
| c10.failure.339 | Invalid field: ProvenanceAttachmentRecord.traceReference | Некорректное поле: ProvenanceAttachmentRecord «traceReference» |
| c10.field.340 | ProvenanceAttachmentRecord.integrityReference | Поле ProvenanceAttachmentRecord «integrityReference» |
| c10.validation.340 | Validate ProvenanceAttachmentRecord.integrityReference | Проверка поля ProvenanceAttachmentRecord «integrityReference» |
| c10.failure.340 | Invalid field: ProvenanceAttachmentRecord.integrityReference | Некорректное поле: ProvenanceAttachmentRecord «integrityReference» |
| c10.field.341 | ProvenanceAttachmentRecord.historyReference | Поле ProvenanceAttachmentRecord «historyReference» |
| c10.validation.341 | Validate ProvenanceAttachmentRecord.historyReference | Проверка поля ProvenanceAttachmentRecord «historyReference» |
| c10.failure.341 | Invalid field: ProvenanceAttachmentRecord.historyReference | Некорректное поле: ProvenanceAttachmentRecord «historyReference» |
| c10.field.350 | BestEffortFieldAssessmentRecord.assessmentId | Поле BestEffortFieldAssessmentRecord «assessmentId» |
| c10.validation.350 | Validate BestEffortFieldAssessmentRecord.assessmentId | Проверка поля BestEffortFieldAssessmentRecord «assessmentId» |
| c10.failure.350 | Invalid field: BestEffortFieldAssessmentRecord.assessmentId | Некорректное поле: BestEffortFieldAssessmentRecord «assessmentId» |
| c10.field.351 | BestEffortFieldAssessmentRecord.fieldIdentity | Поле BestEffortFieldAssessmentRecord «fieldIdentity» |
| c10.validation.351 | Validate BestEffortFieldAssessmentRecord.fieldIdentity | Проверка поля BestEffortFieldAssessmentRecord «fieldIdentity» |
| c10.failure.351 | Invalid field: BestEffortFieldAssessmentRecord.fieldIdentity | Некорректное поле: BestEffortFieldAssessmentRecord «fieldIdentity» |
| c10.field.352 | BestEffortFieldAssessmentRecord.capabilityIdentity | Поле BestEffortFieldAssessmentRecord «capabilityIdentity» |
| c10.validation.352 | Validate BestEffortFieldAssessmentRecord.capabilityIdentity | Проверка поля BestEffortFieldAssessmentRecord «capabilityIdentity» |
| c10.failure.352 | Invalid field: BestEffortFieldAssessmentRecord.capabilityIdentity | Некорректное поле: BestEffortFieldAssessmentRecord «capabilityIdentity» |
| c10.field.353 | BestEffortFieldAssessmentRecord.ownerId | Поле BestEffortFieldAssessmentRecord «ownerId» |
| c10.validation.353 | Validate BestEffortFieldAssessmentRecord.ownerId | Проверка поля BestEffortFieldAssessmentRecord «ownerId» |
| c10.failure.353 | Invalid field: BestEffortFieldAssessmentRecord.ownerId | Некорректное поле: BestEffortFieldAssessmentRecord «ownerId» |
| c10.field.354 | BestEffortFieldAssessmentRecord.ownerKind | Поле BestEffortFieldAssessmentRecord «ownerKind» |
| c10.validation.354 | Validate BestEffortFieldAssessmentRecord.ownerKind | Проверка поля BestEffortFieldAssessmentRecord «ownerKind» |
| c10.failure.354 | Invalid field: BestEffortFieldAssessmentRecord.ownerKind | Некорректное поле: BestEffortFieldAssessmentRecord «ownerKind» |
| c10.field.355 | BestEffortFieldAssessmentRecord.roomCaseId | Поле BestEffortFieldAssessmentRecord «roomCaseId» |
| c10.validation.355 | Validate BestEffortFieldAssessmentRecord.roomCaseId | Проверка поля BestEffortFieldAssessmentRecord «roomCaseId» |
| c10.failure.355 | Invalid field: BestEffortFieldAssessmentRecord.roomCaseId | Некорректное поле: BestEffortFieldAssessmentRecord «roomCaseId» |
| c10.field.356 | BestEffortFieldAssessmentRecord.linkedValueIds | Поле BestEffortFieldAssessmentRecord «linkedValueIds» |
| c10.validation.356 | Validate BestEffortFieldAssessmentRecord.linkedValueIds | Проверка поля BestEffortFieldAssessmentRecord «linkedValueIds» |
| c10.failure.356 | Invalid field: BestEffortFieldAssessmentRecord.linkedValueIds | Некорректное поле: BestEffortFieldAssessmentRecord «linkedValueIds» |
| c10.field.357 | BestEffortFieldAssessmentRecord.determinabilityBasisRecordId | Поле BestEffortFieldAssessmentRecord «determinabilityBasisRecordId» |
| c10.validation.357 | Validate BestEffortFieldAssessmentRecord.determinabilityBasisRecordId | Проверка поля BestEffortFieldAssessmentRecord «determinabilityBasisRecordId» |
| c10.failure.357 | Invalid field: BestEffortFieldAssessmentRecord.determinabilityBasisRecordId | Некорректное поле: BestEffortFieldAssessmentRecord «determinabilityBasisRecordId» |
| c10.field.358 | BestEffortFieldAssessmentRecord.contractSemanticVersion | Поле BestEffortFieldAssessmentRecord «contractSemanticVersion» |
| c10.validation.358 | Validate BestEffortFieldAssessmentRecord.contractSemanticVersion | Проверка поля BestEffortFieldAssessmentRecord «contractSemanticVersion» |
| c10.failure.358 | Invalid field: BestEffortFieldAssessmentRecord.contractSemanticVersion | Некорректное поле: BestEffortFieldAssessmentRecord «contractSemanticVersion» |
| c10.field.359 | BestEffortFieldAssessmentRecord.producingStageIdentity | Поле BestEffortFieldAssessmentRecord «producingStageIdentity» |
| c10.validation.359 | Validate BestEffortFieldAssessmentRecord.producingStageIdentity | Проверка поля BestEffortFieldAssessmentRecord «producingStageIdentity» |
| c10.failure.359 | Invalid field: BestEffortFieldAssessmentRecord.producingStageIdentity | Некорректное поле: BestEffortFieldAssessmentRecord «producingStageIdentity» |
| c10.field.360 | BestEffortFieldAssessmentRecord.traceReference | Поле BestEffortFieldAssessmentRecord «traceReference» |
| c10.validation.360 | Validate BestEffortFieldAssessmentRecord.traceReference | Проверка поля BestEffortFieldAssessmentRecord «traceReference» |
| c10.failure.360 | Invalid field: BestEffortFieldAssessmentRecord.traceReference | Некорректное поле: BestEffortFieldAssessmentRecord «traceReference» |
| c10.field.361 | BestEffortFieldAssessmentRecord.integrityReference | Поле BestEffortFieldAssessmentRecord «integrityReference» |
| c10.validation.361 | Validate BestEffortFieldAssessmentRecord.integrityReference | Проверка поля BestEffortFieldAssessmentRecord «integrityReference» |
| c10.failure.361 | Invalid field: BestEffortFieldAssessmentRecord.integrityReference | Некорректное поле: BestEffortFieldAssessmentRecord «integrityReference» |
| c10.field.362 | BestEffortFieldAssessmentRecord.historyReference | Поле BestEffortFieldAssessmentRecord «historyReference» |
| c10.validation.362 | Validate BestEffortFieldAssessmentRecord.historyReference | Проверка поля BestEffortFieldAssessmentRecord «historyReference» |
| c10.failure.362 | Invalid field: BestEffortFieldAssessmentRecord.historyReference | Некорректное поле: BestEffortFieldAssessmentRecord «historyReference» |
| c10.field.370 | AttributeEvidenceArtifact.attributeEvidenceArtifactId | Поле AttributeEvidenceArtifact «attributeEvidenceArtifactId» |
| c10.validation.370 | Validate AttributeEvidenceArtifact.attributeEvidenceArtifactId | Проверка поля AttributeEvidenceArtifact «attributeEvidenceArtifactId» |
| c10.failure.370 | Invalid field: AttributeEvidenceArtifact.attributeEvidenceArtifactId | Некорректное поле: AttributeEvidenceArtifact «attributeEvidenceArtifactId» |
| c10.field.371 | AttributeEvidenceArtifact.fieldAssessmentId | Поле AttributeEvidenceArtifact «fieldAssessmentId» |
| c10.validation.371 | Validate AttributeEvidenceArtifact.fieldAssessmentId | Проверка поля AttributeEvidenceArtifact «fieldAssessmentId» |
| c10.failure.371 | Invalid field: AttributeEvidenceArtifact.fieldAssessmentId | Некорректное поле: AttributeEvidenceArtifact «fieldAssessmentId» |
| c10.field.372 | AttributeEvidenceArtifact.bestEffortValueId | Поле AttributeEvidenceArtifact «bestEffortValueId» |
| c10.validation.372 | Validate AttributeEvidenceArtifact.bestEffortValueId | Проверка поля AttributeEvidenceArtifact «bestEffortValueId» |
| c10.failure.372 | Invalid field: AttributeEvidenceArtifact.bestEffortValueId | Некорректное поле: AttributeEvidenceArtifact «bestEffortValueId» |
| c10.field.373 | AttributeEvidenceArtifact.ownerId | Поле AttributeEvidenceArtifact «ownerId» |
| c10.validation.373 | Validate AttributeEvidenceArtifact.ownerId | Проверка поля AttributeEvidenceArtifact «ownerId» |
| c10.failure.373 | Invalid field: AttributeEvidenceArtifact.ownerId | Некорректное поле: AttributeEvidenceArtifact «ownerId» |
| c10.field.374 | AttributeEvidenceArtifact.evidenceKindIdentity | Поле AttributeEvidenceArtifact «evidenceKindIdentity» |
| c10.validation.374 | Validate AttributeEvidenceArtifact.evidenceKindIdentity | Проверка поля AttributeEvidenceArtifact «evidenceKindIdentity» |
| c10.failure.374 | Invalid field: AttributeEvidenceArtifact.evidenceKindIdentity | Некорректное поле: AttributeEvidenceArtifact «evidenceKindIdentity» |
| c10.field.375 | AttributeEvidenceArtifact.provenanceAttachmentId | Поле AttributeEvidenceArtifact «provenanceAttachmentId» |
| c10.validation.375 | Validate AttributeEvidenceArtifact.provenanceAttachmentId | Проверка поля AttributeEvidenceArtifact «provenanceAttachmentId» |
| c10.failure.375 | Invalid field: AttributeEvidenceArtifact.provenanceAttachmentId | Некорректное поле: AttributeEvidenceArtifact «provenanceAttachmentId» |
| c10.field.376 | AttributeEvidenceArtifact.roomCaseId | Поле AttributeEvidenceArtifact «roomCaseId» |
| c10.validation.376 | Validate AttributeEvidenceArtifact.roomCaseId | Проверка поля AttributeEvidenceArtifact «roomCaseId» |
| c10.failure.376 | Invalid field: AttributeEvidenceArtifact.roomCaseId | Некорректное поле: AttributeEvidenceArtifact «roomCaseId» |
| c10.field.377 | AttributeEvidenceArtifact.atomicContributions | Поле AttributeEvidenceArtifact «atomicContributions» |
| c10.validation.377 | Validate AttributeEvidenceArtifact.atomicContributions | Проверка поля AttributeEvidenceArtifact «atomicContributions» |
| c10.failure.377 | Invalid field: AttributeEvidenceArtifact.atomicContributions | Некорректное поле: AttributeEvidenceArtifact «atomicContributions» |
| c10.field.378 | AttributeEvidenceArtifact.producingStageIdentity | Поле AttributeEvidenceArtifact «producingStageIdentity» |
| c10.validation.378 | Validate AttributeEvidenceArtifact.producingStageIdentity | Проверка поля AttributeEvidenceArtifact «producingStageIdentity» |
| c10.failure.378 | Invalid field: AttributeEvidenceArtifact.producingStageIdentity | Некорректное поле: AttributeEvidenceArtifact «producingStageIdentity» |
| c10.field.379 | AttributeEvidenceArtifact.producerIdentityAndVersions | Поле AttributeEvidenceArtifact «producerIdentityAndVersions» |
| c10.validation.379 | Validate AttributeEvidenceArtifact.producerIdentityAndVersions | Проверка поля AttributeEvidenceArtifact «producerIdentityAndVersions» |
| c10.failure.379 | Invalid field: AttributeEvidenceArtifact.producerIdentityAndVersions | Некорректное поле: AttributeEvidenceArtifact «producerIdentityAndVersions» |
| c10.field.380 | AttributeEvidenceArtifact.derivationParentIds | Поле AttributeEvidenceArtifact «derivationParentIds» |
| c10.validation.380 | Validate AttributeEvidenceArtifact.derivationParentIds | Проверка поля AttributeEvidenceArtifact «derivationParentIds» |
| c10.failure.380 | Invalid field: AttributeEvidenceArtifact.derivationParentIds | Некорректное поле: AttributeEvidenceArtifact «derivationParentIds» |
| c10.field.381 | AttributeEvidenceArtifact.contractSemanticVersion | Поле AttributeEvidenceArtifact «contractSemanticVersion» |
| c10.validation.381 | Validate AttributeEvidenceArtifact.contractSemanticVersion | Проверка поля AttributeEvidenceArtifact «contractSemanticVersion» |
| c10.failure.381 | Invalid field: AttributeEvidenceArtifact.contractSemanticVersion | Некорректное поле: AttributeEvidenceArtifact «contractSemanticVersion» |
| c10.field.382 | AttributeEvidenceArtifact.serializationSchemaReference | Поле AttributeEvidenceArtifact «serializationSchemaReference» |
| c10.validation.382 | Validate AttributeEvidenceArtifact.serializationSchemaReference | Проверка поля AttributeEvidenceArtifact «serializationSchemaReference» |
| c10.failure.382 | Invalid field: AttributeEvidenceArtifact.serializationSchemaReference | Некорректное поле: AttributeEvidenceArtifact «serializationSchemaReference» |
| c10.field.383 | AttributeEvidenceArtifact.reasonOrTraceReference | Поле AttributeEvidenceArtifact «reasonOrTraceReference» |
| c10.validation.383 | Validate AttributeEvidenceArtifact.reasonOrTraceReference | Проверка поля AttributeEvidenceArtifact «reasonOrTraceReference» |
| c10.failure.383 | Invalid field: AttributeEvidenceArtifact.reasonOrTraceReference | Некорректное поле: AttributeEvidenceArtifact «reasonOrTraceReference» |
| c10.field.384 | AttributeEvidenceArtifact.integrityReference | Поле AttributeEvidenceArtifact «integrityReference» |
| c10.validation.384 | Validate AttributeEvidenceArtifact.integrityReference | Проверка поля AttributeEvidenceArtifact «integrityReference» |
| c10.failure.384 | Invalid field: AttributeEvidenceArtifact.integrityReference | Некорректное поле: AttributeEvidenceArtifact «integrityReference» |
| c10.field.385 | AttributeEvidenceArtifact.dataUseEligibilityReference | Поле AttributeEvidenceArtifact «dataUseEligibilityReference» |
| c10.validation.385 | Validate AttributeEvidenceArtifact.dataUseEligibilityReference | Проверка поля AttributeEvidenceArtifact «dataUseEligibilityReference» |
| c10.failure.385 | Invalid field: AttributeEvidenceArtifact.dataUseEligibilityReference | Некорректное поле: AttributeEvidenceArtifact «dataUseEligibilityReference» |
| c10.field.386 | AttributeEvidenceArtifact.consentEligibilityReference | Поле AttributeEvidenceArtifact «consentEligibilityReference» |
| c10.validation.386 | Validate AttributeEvidenceArtifact.consentEligibilityReference | Проверка поля AttributeEvidenceArtifact «consentEligibilityReference» |
| c10.failure.386 | Invalid field: AttributeEvidenceArtifact.consentEligibilityReference | Некорректное поле: AttributeEvidenceArtifact «consentEligibilityReference» |
| c10.field.387 | AttributeEvidenceArtifact.authorizationStateReference | Поле AttributeEvidenceArtifact «authorizationStateReference» |
| c10.validation.387 | Validate AttributeEvidenceArtifact.authorizationStateReference | Проверка поля AttributeEvidenceArtifact «authorizationStateReference» |
| c10.failure.387 | Invalid field: AttributeEvidenceArtifact.authorizationStateReference | Некорректное поле: AttributeEvidenceArtifact «authorizationStateReference» |
| c10.field.388 | AttributeEvidenceArtifact.retentionDeletionPolicyReference | Поле AttributeEvidenceArtifact «retentionDeletionPolicyReference» |
| c10.validation.388 | Validate AttributeEvidenceArtifact.retentionDeletionPolicyReference | Проверка поля AttributeEvidenceArtifact «retentionDeletionPolicyReference» |
| c10.failure.388 | Invalid field: AttributeEvidenceArtifact.retentionDeletionPolicyReference | Некорректное поле: AttributeEvidenceArtifact «retentionDeletionPolicyReference» |
| c10.field.389 | AttributeEvidenceArtifact.safeFailureReference | Поле AttributeEvidenceArtifact «safeFailureReference» |
| c10.validation.389 | Validate AttributeEvidenceArtifact.safeFailureReference | Проверка поля AttributeEvidenceArtifact «safeFailureReference» |
| c10.failure.389 | Invalid field: AttributeEvidenceArtifact.safeFailureReference | Некорректное поле: AttributeEvidenceArtifact «safeFailureReference» |
| c10.field.390 | AttributeEvidenceArtifact.tamperEvidentHistoryReference | Поле AttributeEvidenceArtifact «tamperEvidentHistoryReference» |
| c10.validation.390 | Validate AttributeEvidenceArtifact.tamperEvidentHistoryReference | Проверка поля AttributeEvidenceArtifact «tamperEvidentHistoryReference» |
| c10.failure.390 | Invalid field: AttributeEvidenceArtifact.tamperEvidentHistoryReference | Некорректное поле: AttributeEvidenceArtifact «tamperEvidentHistoryReference» |
| c10.field.391 | AttributeEvidenceArtifact.futureFeedbackLinkReference | Поле AttributeEvidenceArtifact «futureFeedbackLinkReference» |
| c10.validation.391 | Validate AttributeEvidenceArtifact.futureFeedbackLinkReference | Проверка поля AttributeEvidenceArtifact «futureFeedbackLinkReference» |
| c10.failure.391 | Invalid field: AttributeEvidenceArtifact.futureFeedbackLinkReference | Некорректное поле: AttributeEvidenceArtifact «futureFeedbackLinkReference» |
| c10.field.392 | AttributeEvidenceArtifact.noRegressionEvaluationReference | Поле AttributeEvidenceArtifact «noRegressionEvaluationReference» |
| c10.validation.392 | Validate AttributeEvidenceArtifact.noRegressionEvaluationReference | Проверка поля AttributeEvidenceArtifact «noRegressionEvaluationReference» |
| c10.failure.392 | Invalid field: AttributeEvidenceArtifact.noRegressionEvaluationReference | Некорректное поле: AttributeEvidenceArtifact «noRegressionEvaluationReference» |
| c10.field.393 | AttributeEvidenceArtifact.rollbackCompatibilityReference | Поле AttributeEvidenceArtifact «rollbackCompatibilityReference» |
| c10.validation.393 | Validate AttributeEvidenceArtifact.rollbackCompatibilityReference | Проверка поля AttributeEvidenceArtifact «rollbackCompatibilityReference» |
| c10.failure.393 | Invalid field: AttributeEvidenceArtifact.rollbackCompatibilityReference | Некорректное поле: AttributeEvidenceArtifact «rollbackCompatibilityReference» |
| c10.field.394 | AttributeEvidenceArtifact.predecessorArtifactId | Поле AttributeEvidenceArtifact «predecessorArtifactId» |
| c10.validation.394 | Validate AttributeEvidenceArtifact.predecessorArtifactId | Проверка поля AttributeEvidenceArtifact «predecessorArtifactId» |
| c10.failure.394 | Invalid field: AttributeEvidenceArtifact.predecessorArtifactId | Некорректное поле: AttributeEvidenceArtifact «predecessorArtifactId» |
| c10.field.395 | AttributeEvidenceArtifact.artifactRevisionState | Поле AttributeEvidenceArtifact «artifactRevisionState» |
| c10.validation.395 | Validate AttributeEvidenceArtifact.artifactRevisionState | Проверка поля AttributeEvidenceArtifact «artifactRevisionState» |
| c10.failure.395 | Invalid field: AttributeEvidenceArtifact.artifactRevisionState | Некорректное поле: AttributeEvidenceArtifact «artifactRevisionState» |
| c10.field.400 | AtomicEvidenceContribution.contributionId | Поле AtomicEvidenceContribution «contributionId» |
| c10.validation.400 | Validate AtomicEvidenceContribution.contributionId | Проверка поля AtomicEvidenceContribution «contributionId» |
| c10.failure.400 | Invalid field: AtomicEvidenceContribution.contributionId | Некорректное поле: AtomicEvidenceContribution «contributionId» |
| c10.field.401 | AtomicEvidenceContribution.imageAssetId | Поле AtomicEvidenceContribution «imageAssetId» |
| c10.validation.401 | Validate AtomicEvidenceContribution.imageAssetId | Проверка поля AtomicEvidenceContribution «imageAssetId» |
| c10.failure.401 | Invalid field: AtomicEvidenceContribution.imageAssetId | Некорректное поле: AtomicEvidenceContribution «imageAssetId» |
| c10.field.402 | AtomicEvidenceContribution.sourceAssetId | Поле AtomicEvidenceContribution «sourceAssetId» |
| c10.validation.402 | Validate AtomicEvidenceContribution.sourceAssetId | Проверка поля AtomicEvidenceContribution «sourceAssetId» |
| c10.failure.402 | Invalid field: AtomicEvidenceContribution.sourceAssetId | Некорректное поле: AtomicEvidenceContribution «sourceAssetId» |
| c10.field.403 | AtomicEvidenceContribution.locatorOrInferenceBasisReference | Поле AtomicEvidenceContribution «locatorOrInferenceBasisReference» |
| c10.validation.403 | Validate AtomicEvidenceContribution.locatorOrInferenceBasisReference | Проверка поля AtomicEvidenceContribution «locatorOrInferenceBasisReference» |
| c10.failure.403 | Invalid field: AtomicEvidenceContribution.locatorOrInferenceBasisReference | Некорректное поле: AtomicEvidenceContribution «locatorOrInferenceBasisReference» |
| c10.field.404 | AtomicEvidenceContribution.preprocessingLineageReference | Поле AtomicEvidenceContribution «preprocessingLineageReference» |
| c10.validation.404 | Validate AtomicEvidenceContribution.preprocessingLineageReference | Проверка поля AtomicEvidenceContribution «preprocessingLineageReference» |
| c10.failure.404 | Invalid field: AtomicEvidenceContribution.preprocessingLineageReference | Некорректное поле: AtomicEvidenceContribution «preprocessingLineageReference» |
| c10.field.405 | AtomicEvidenceContribution.integrityReference | Поле AtomicEvidenceContribution «integrityReference» |
| c10.validation.405 | Validate AtomicEvidenceContribution.integrityReference | Проверка поля AtomicEvidenceContribution «integrityReference» |
| c10.failure.405 | Invalid field: AtomicEvidenceContribution.integrityReference | Некорректное поле: AtomicEvidenceContribution «integrityReference» |
| c10.field.406 | AtomicEvidenceContribution.historyReference | Поле AtomicEvidenceContribution «historyReference» |
| c10.validation.406 | Validate AtomicEvidenceContribution.historyReference | Проверка поля AtomicEvidenceContribution «historyReference» |
| c10.failure.406 | Invalid field: AtomicEvidenceContribution.historyReference | Некорректное поле: AtomicEvidenceContribution «historyReference» |
| c10.field.407 | AtomicEvidenceContribution.producingStageVersionReference | Поле AtomicEvidenceContribution «producingStageVersionReference» |
| c10.validation.407 | Validate AtomicEvidenceContribution.producingStageVersionReference | Проверка поля AtomicEvidenceContribution «producingStageVersionReference» |
| c10.failure.407 | Invalid field: AtomicEvidenceContribution.producingStageVersionReference | Некорректное поле: AtomicEvidenceContribution «producingStageVersionReference» |
| c10.field.410 | EvidenceSetRecord.evidenceSetId | Поле EvidenceSetRecord «evidenceSetId» |
| c10.validation.410 | Validate EvidenceSetRecord.evidenceSetId | Проверка поля EvidenceSetRecord «evidenceSetId» |
| c10.failure.410 | Invalid field: EvidenceSetRecord.evidenceSetId | Некорректное поле: EvidenceSetRecord «evidenceSetId» |
| c10.field.411 | EvidenceSetRecord.targetKind | Поле EvidenceSetRecord «targetKind» |
| c10.validation.411 | Validate EvidenceSetRecord.targetKind | Проверка поля EvidenceSetRecord «targetKind» |
| c10.failure.411 | Invalid field: EvidenceSetRecord.targetKind | Некорректное поле: EvidenceSetRecord «targetKind» |
| c10.field.412 | EvidenceSetRecord.fieldAssessmentId | Поле EvidenceSetRecord «fieldAssessmentId» |
| c10.validation.412 | Validate EvidenceSetRecord.fieldAssessmentId | Проверка поля EvidenceSetRecord «fieldAssessmentId» |
| c10.failure.412 | Invalid field: EvidenceSetRecord.fieldAssessmentId | Некорректное поле: EvidenceSetRecord «fieldAssessmentId» |
| c10.field.413 | EvidenceSetRecord.bestEffortValueId | Поле EvidenceSetRecord «bestEffortValueId» |
| c10.validation.413 | Validate EvidenceSetRecord.bestEffortValueId | Проверка поля EvidenceSetRecord «bestEffortValueId» |
| c10.failure.413 | Invalid field: EvidenceSetRecord.bestEffortValueId | Некорректное поле: EvidenceSetRecord «bestEffortValueId» |
| c10.field.414 | EvidenceSetRecord.roomCaseId | Поле EvidenceSetRecord «roomCaseId» |
| c10.validation.414 | Validate EvidenceSetRecord.roomCaseId | Проверка поля EvidenceSetRecord «roomCaseId» |
| c10.failure.414 | Invalid field: EvidenceSetRecord.roomCaseId | Некорректное поле: EvidenceSetRecord «roomCaseId» |
| c10.field.415 | EvidenceSetRecord.contributionIds | Поле EvidenceSetRecord «contributionIds» |
| c10.validation.415 | Validate EvidenceSetRecord.contributionIds | Проверка поля EvidenceSetRecord «contributionIds» |
| c10.failure.415 | Invalid field: EvidenceSetRecord.contributionIds | Некорректное поле: EvidenceSetRecord «contributionIds» |
| c10.field.416 | EvidenceSetRecord.distinctImageAssetIds | Поле EvidenceSetRecord «distinctImageAssetIds» |
| c10.validation.416 | Validate EvidenceSetRecord.distinctImageAssetIds | Проверка поля EvidenceSetRecord «distinctImageAssetIds» |
| c10.failure.416 | Invalid field: EvidenceSetRecord.distinctImageAssetIds | Некорректное поле: EvidenceSetRecord «distinctImageAssetIds» |
| c10.field.417 | EvidenceSetRecord.fusionOperationIdentity | Поле EvidenceSetRecord «fusionOperationIdentity» |
| c10.validation.417 | Validate EvidenceSetRecord.fusionOperationIdentity | Проверка поля EvidenceSetRecord «fusionOperationIdentity» |
| c10.failure.417 | Invalid field: EvidenceSetRecord.fusionOperationIdentity | Некорректное поле: EvidenceSetRecord «fusionOperationIdentity» |
| c10.field.418 | EvidenceSetRecord.fusionOperationVersion | Поле EvidenceSetRecord «fusionOperationVersion» |
| c10.validation.418 | Validate EvidenceSetRecord.fusionOperationVersion | Проверка поля EvidenceSetRecord «fusionOperationVersion» |
| c10.failure.418 | Invalid field: EvidenceSetRecord.fusionOperationVersion | Некорректное поле: EvidenceSetRecord «fusionOperationVersion» |
| c10.field.419 | EvidenceSetRecord.fingerprintRuleIdentity | Поле EvidenceSetRecord «fingerprintRuleIdentity» |
| c10.validation.419 | Validate EvidenceSetRecord.fingerprintRuleIdentity | Проверка поля EvidenceSetRecord «fingerprintRuleIdentity» |
| c10.failure.419 | Invalid field: EvidenceSetRecord.fingerprintRuleIdentity | Некорректное поле: EvidenceSetRecord «fingerprintRuleIdentity» |
| c10.field.420 | EvidenceSetRecord.relationshipRecords | Поле EvidenceSetRecord «relationshipRecords» |
| c10.validation.420 | Validate EvidenceSetRecord.relationshipRecords | Проверка поля EvidenceSetRecord «relationshipRecords» |
| c10.failure.420 | Invalid field: EvidenceSetRecord.relationshipRecords | Некорректное поле: EvidenceSetRecord «relationshipRecords» |
| c10.field.421 | EvidenceSetRecord.contradictionReferences | Поле EvidenceSetRecord «contradictionReferences» |
| c10.validation.421 | Validate EvidenceSetRecord.contradictionReferences | Проверка поля EvidenceSetRecord «contradictionReferences» |
| c10.failure.421 | Invalid field: EvidenceSetRecord.contradictionReferences | Некорректное поле: EvidenceSetRecord «contradictionReferences» |
| c10.field.422 | EvidenceSetRecord.integrityReference | Поле EvidenceSetRecord «integrityReference» |
| c10.validation.422 | Validate EvidenceSetRecord.integrityReference | Проверка поля EvidenceSetRecord «integrityReference» |
| c10.failure.422 | Invalid field: EvidenceSetRecord.integrityReference | Некорректное поле: EvidenceSetRecord «integrityReference» |
| c10.field.423 | EvidenceSetRecord.historyReference | Поле EvidenceSetRecord «historyReference» |
| c10.validation.423 | Validate EvidenceSetRecord.historyReference | Проверка поля EvidenceSetRecord «historyReference» |
| c10.failure.423 | Invalid field: EvidenceSetRecord.historyReference | Некорректное поле: EvidenceSetRecord «historyReference» |
| c10.field.430 | DeterminabilityEvidenceBasisRecord.determinabilityBasisRecordId | Поле DeterminabilityEvidenceBasisRecord «determinabilityBasisRecordId» |
| c10.validation.430 | Validate DeterminabilityEvidenceBasisRecord.determinabilityBasisRecordId | Проверка поля DeterminabilityEvidenceBasisRecord «determinabilityBasisRecordId» |
| c10.failure.430 | Invalid field: DeterminabilityEvidenceBasisRecord.determinabilityBasisRecordId | Некорректное поле: DeterminabilityEvidenceBasisRecord «determinabilityBasisRecordId» |
| c10.field.431 | DeterminabilityEvidenceBasisRecord.fieldAssessmentId | Поле DeterminabilityEvidenceBasisRecord «fieldAssessmentId» |
| c10.validation.431 | Validate DeterminabilityEvidenceBasisRecord.fieldAssessmentId | Проверка поля DeterminabilityEvidenceBasisRecord «fieldAssessmentId» |
| c10.failure.431 | Invalid field: DeterminabilityEvidenceBasisRecord.fieldAssessmentId | Некорректное поле: DeterminabilityEvidenceBasisRecord «fieldAssessmentId» |
| c10.field.432 | DeterminabilityEvidenceBasisRecord.linkedBestEffortValueIds | Поле DeterminabilityEvidenceBasisRecord «linkedBestEffortValueIds» |
| c10.validation.432 | Validate DeterminabilityEvidenceBasisRecord.linkedBestEffortValueIds | Проверка поля DeterminabilityEvidenceBasisRecord «linkedBestEffortValueIds» |
| c10.failure.432 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedBestEffortValueIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedBestEffortValueIds» |
| c10.field.433 | DeterminabilityEvidenceBasisRecord.roomCaseId | Поле DeterminabilityEvidenceBasisRecord «roomCaseId» |
| c10.validation.433 | Validate DeterminabilityEvidenceBasisRecord.roomCaseId | Проверка поля DeterminabilityEvidenceBasisRecord «roomCaseId» |
| c10.failure.433 | Invalid field: DeterminabilityEvidenceBasisRecord.roomCaseId | Некорректное поле: DeterminabilityEvidenceBasisRecord «roomCaseId» |
| c10.field.434 | DeterminabilityEvidenceBasisRecord.basisIdentities | Поле DeterminabilityEvidenceBasisRecord «basisIdentities» |
| c10.validation.434 | Validate DeterminabilityEvidenceBasisRecord.basisIdentities | Проверка поля DeterminabilityEvidenceBasisRecord «basisIdentities» |
| c10.failure.434 | Invalid field: DeterminabilityEvidenceBasisRecord.basisIdentities | Некорректное поле: DeterminabilityEvidenceBasisRecord «basisIdentities» |
| c10.field.435 | DeterminabilityEvidenceBasisRecord.linkedAttributeEvidenceArtifactIds | Поле DeterminabilityEvidenceBasisRecord «linkedAttributeEvidenceArtifactIds» |
| c10.validation.435 | Validate DeterminabilityEvidenceBasisRecord.linkedAttributeEvidenceArtifactIds | Проверка поля DeterminabilityEvidenceBasisRecord «linkedAttributeEvidenceArtifactIds» |
| c10.failure.435 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedAttributeEvidenceArtifactIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedAttributeEvidenceArtifactIds» |
| c10.field.436 | DeterminabilityEvidenceBasisRecord.linkedEvidenceSetIds | Поле DeterminabilityEvidenceBasisRecord «linkedEvidenceSetIds» |
| c10.validation.436 | Validate DeterminabilityEvidenceBasisRecord.linkedEvidenceSetIds | Проверка поля DeterminabilityEvidenceBasisRecord «linkedEvidenceSetIds» |
| c10.failure.436 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedEvidenceSetIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedEvidenceSetIds» |
| c10.field.437 | DeterminabilityEvidenceBasisRecord.linkedFailureIds | Поле DeterminabilityEvidenceBasisRecord «linkedFailureIds» |
| c10.validation.437 | Validate DeterminabilityEvidenceBasisRecord.linkedFailureIds | Проверка поля DeterminabilityEvidenceBasisRecord «linkedFailureIds» |
| c10.failure.437 | Invalid field: DeterminabilityEvidenceBasisRecord.linkedFailureIds | Некорректное поле: DeterminabilityEvidenceBasisRecord «linkedFailureIds» |
| c10.field.438 | DeterminabilityEvidenceBasisRecord.contractSemanticVersion | Поле DeterminabilityEvidenceBasisRecord «contractSemanticVersion» |
| c10.validation.438 | Validate DeterminabilityEvidenceBasisRecord.contractSemanticVersion | Проверка поля DeterminabilityEvidenceBasisRecord «contractSemanticVersion» |
| c10.failure.438 | Invalid field: DeterminabilityEvidenceBasisRecord.contractSemanticVersion | Некорректное поле: DeterminabilityEvidenceBasisRecord «contractSemanticVersion» |
| c10.field.439 | DeterminabilityEvidenceBasisRecord.traceReference | Поле DeterminabilityEvidenceBasisRecord «traceReference» |
| c10.validation.439 | Validate DeterminabilityEvidenceBasisRecord.traceReference | Проверка поля DeterminabilityEvidenceBasisRecord «traceReference» |
| c10.failure.439 | Invalid field: DeterminabilityEvidenceBasisRecord.traceReference | Некорректное поле: DeterminabilityEvidenceBasisRecord «traceReference» |
| c10.field.440 | DeterminabilityEvidenceBasisRecord.integrityReference | Поле DeterminabilityEvidenceBasisRecord «integrityReference» |
| c10.validation.440 | Validate DeterminabilityEvidenceBasisRecord.integrityReference | Проверка поля DeterminabilityEvidenceBasisRecord «integrityReference» |
| c10.failure.440 | Invalid field: DeterminabilityEvidenceBasisRecord.integrityReference | Некорректное поле: DeterminabilityEvidenceBasisRecord «integrityReference» |
| c10.field.441 | DeterminabilityEvidenceBasisRecord.historyReference | Поле DeterminabilityEvidenceBasisRecord «historyReference» |
| c10.validation.441 | Validate DeterminabilityEvidenceBasisRecord.historyReference | Проверка поля DeterminabilityEvidenceBasisRecord «historyReference» |
| c10.failure.441 | Invalid field: DeterminabilityEvidenceBasisRecord.historyReference | Некорректное поле: DeterminabilityEvidenceBasisRecord «historyReference» |
| c10.field.450 | EvidenceRelationshipRecord.relationshipRecordId | Поле EvidenceRelationshipRecord «relationshipRecordId» |
| c10.validation.450 | Validate EvidenceRelationshipRecord.relationshipRecordId | Проверка поля EvidenceRelationshipRecord «relationshipRecordId» |
| c10.failure.450 | Invalid field: EvidenceRelationshipRecord.relationshipRecordId | Некорректное поле: EvidenceRelationshipRecord «relationshipRecordId» |
| c10.field.451 | EvidenceRelationshipRecord.evidenceSetId | Поле EvidenceRelationshipRecord «evidenceSetId» |
| c10.validation.451 | Validate EvidenceRelationshipRecord.evidenceSetId | Проверка поля EvidenceRelationshipRecord «evidenceSetId» |
| c10.failure.451 | Invalid field: EvidenceRelationshipRecord.evidenceSetId | Некорректное поле: EvidenceRelationshipRecord «evidenceSetId» |
| c10.field.452 | EvidenceRelationshipRecord.relationshipIdentity | Поле EvidenceRelationshipRecord «relationshipIdentity» |
| c10.validation.452 | Validate EvidenceRelationshipRecord.relationshipIdentity | Проверка поля EvidenceRelationshipRecord «relationshipIdentity» |
| c10.failure.452 | Invalid field: EvidenceRelationshipRecord.relationshipIdentity | Некорректное поле: EvidenceRelationshipRecord «relationshipIdentity» |
| c10.field.453 | EvidenceRelationshipRecord.subjectKindIdentity | Поле EvidenceRelationshipRecord «subjectKindIdentity» |
| c10.validation.453 | Validate EvidenceRelationshipRecord.subjectKindIdentity | Проверка поля EvidenceRelationshipRecord «subjectKindIdentity» |
| c10.failure.453 | Invalid field: EvidenceRelationshipRecord.subjectKindIdentity | Некорректное поле: EvidenceRelationshipRecord «subjectKindIdentity» |
| c10.field.454 | EvidenceRelationshipRecord.subjectIds | Поле EvidenceRelationshipRecord «subjectIds» |
| c10.validation.454 | Validate EvidenceRelationshipRecord.subjectIds | Проверка поля EvidenceRelationshipRecord «subjectIds» |
| c10.failure.454 | Invalid field: EvidenceRelationshipRecord.subjectIds | Некорректное поле: EvidenceRelationshipRecord «subjectIds» |
| c10.field.455 | EvidenceRelationshipRecord.aspectIdentity | Поле EvidenceRelationshipRecord «aspectIdentity» |
| c10.validation.455 | Validate EvidenceRelationshipRecord.aspectIdentity | Проверка поля EvidenceRelationshipRecord «aspectIdentity» |
| c10.failure.455 | Invalid field: EvidenceRelationshipRecord.aspectIdentity | Некорректное поле: EvidenceRelationshipRecord «aspectIdentity» |
| c10.field.456 | EvidenceRelationshipRecord.producingRuleAndVersion | Поле EvidenceRelationshipRecord «producingRuleAndVersion» |
| c10.validation.456 | Validate EvidenceRelationshipRecord.producingRuleAndVersion | Проверка поля EvidenceRelationshipRecord «producingRuleAndVersion» |
| c10.failure.456 | Invalid field: EvidenceRelationshipRecord.producingRuleAndVersion | Некорректное поле: EvidenceRelationshipRecord «producingRuleAndVersion» |
| c10.field.457 | EvidenceRelationshipRecord.roomCaseId | Поле EvidenceRelationshipRecord «roomCaseId» |
| c10.validation.457 | Validate EvidenceRelationshipRecord.roomCaseId | Проверка поля EvidenceRelationshipRecord «roomCaseId» |
| c10.failure.457 | Invalid field: EvidenceRelationshipRecord.roomCaseId | Некорректное поле: EvidenceRelationshipRecord «roomCaseId» |
| c10.field.458 | EvidenceRelationshipRecord.integrityReference | Поле EvidenceRelationshipRecord «integrityReference» |
| c10.validation.458 | Validate EvidenceRelationshipRecord.integrityReference | Проверка поля EvidenceRelationshipRecord «integrityReference» |
| c10.failure.458 | Invalid field: EvidenceRelationshipRecord.integrityReference | Некорректное поле: EvidenceRelationshipRecord «integrityReference» |
| c10.field.459 | EvidenceRelationshipRecord.historyReference | Поле EvidenceRelationshipRecord «historyReference» |
| c10.validation.459 | Validate EvidenceRelationshipRecord.historyReference | Проверка поля EvidenceRelationshipRecord «historyReference» |
| c10.failure.459 | Invalid field: EvidenceRelationshipRecord.historyReference | Некорректное поле: EvidenceRelationshipRecord «historyReference» |
| c10.field.460 | BestEffortValueRevision.bestEffortValueId | Поле BestEffortValueRevision «bestEffortValueId» |
| c10.validation.460 | Validate BestEffortValueRevision.bestEffortValueId | Проверка поля BestEffortValueRevision «bestEffortValueId» |
| c10.failure.460 | Invalid field: BestEffortValueRevision.bestEffortValueId | Некорректное поле: BestEffortValueRevision «bestEffortValueId» |
| c10.field.461 | BestEffortValueRevision.fieldAssessmentId | Поле BestEffortValueRevision «fieldAssessmentId» |
| c10.validation.461 | Validate BestEffortValueRevision.fieldAssessmentId | Проверка поля BestEffortValueRevision «fieldAssessmentId» |
| c10.failure.461 | Invalid field: BestEffortValueRevision.fieldAssessmentId | Некорректное поле: BestEffortValueRevision «fieldAssessmentId» |
| c10.field.462 | BestEffortValueRevision.valueElementIdentity | Поле BestEffortValueRevision «valueElementIdentity» |
| c10.validation.462 | Validate BestEffortValueRevision.valueElementIdentity | Проверка поля BestEffortValueRevision «valueElementIdentity» |
| c10.failure.462 | Invalid field: BestEffortValueRevision.valueElementIdentity | Некорректное поле: BestEffortValueRevision «valueElementIdentity» |
| c10.field.463 | BestEffortValueRevision.valueRevisionId | Поле BestEffortValueRevision «valueRevisionId» |
| c10.validation.463 | Validate BestEffortValueRevision.valueRevisionId | Проверка поля BestEffortValueRevision «valueRevisionId» |
| c10.failure.463 | Invalid field: BestEffortValueRevision.valueRevisionId | Некорректное поле: BestEffortValueRevision «valueRevisionId» |
| c10.field.464 | BestEffortValueRevision.valuePayload | Поле BestEffortValueRevision «valuePayload» |
| c10.validation.464 | Validate BestEffortValueRevision.valuePayload | Проверка поля BestEffortValueRevision «valuePayload» |
| c10.failure.464 | Invalid field: BestEffortValueRevision.valuePayload | Некорректное поле: BestEffortValueRevision «valuePayload» |
| c10.field.465 | BestEffortValueRevision.provenanceAttachmentId | Поле BestEffortValueRevision «provenanceAttachmentId» |
| c10.validation.465 | Validate BestEffortValueRevision.provenanceAttachmentId | Проверка поля BestEffortValueRevision «provenanceAttachmentId» |
| c10.failure.465 | Invalid field: BestEffortValueRevision.provenanceAttachmentId | Некорректное поле: BestEffortValueRevision «provenanceAttachmentId» |
| c10.field.466 | BestEffortValueRevision.predecessorValueId | Поле BestEffortValueRevision «predecessorValueId» |
| c10.validation.466 | Validate BestEffortValueRevision.predecessorValueId | Проверка поля BestEffortValueRevision «predecessorValueId» |
| c10.failure.466 | Invalid field: BestEffortValueRevision.predecessorValueId | Некорректное поле: BestEffortValueRevision «predecessorValueId» |
| c10.field.467 | BestEffortValueRevision.revisionState | Поле BestEffortValueRevision «revisionState» |
| c10.validation.467 | Validate BestEffortValueRevision.revisionState | Проверка поля BestEffortValueRevision «revisionState» |
| c10.failure.467 | Invalid field: BestEffortValueRevision.revisionState | Некорректное поле: BestEffortValueRevision «revisionState» |
| c10.field.468 | BestEffortValueRevision.integrityReference | Поле BestEffortValueRevision «integrityReference» |
| c10.validation.468 | Validate BestEffortValueRevision.integrityReference | Проверка поля BestEffortValueRevision «integrityReference» |
| c10.failure.468 | Invalid field: BestEffortValueRevision.integrityReference | Некорректное поле: BestEffortValueRevision «integrityReference» |
| c10.field.469 | BestEffortValueRevision.historyReference | Поле BestEffortValueRevision «historyReference» |
| c10.validation.469 | Validate BestEffortValueRevision.historyReference | Проверка поля BestEffortValueRevision «historyReference» |
| c10.failure.469 | Invalid field: BestEffortValueRevision.historyReference | Некорректное поле: BestEffortValueRevision «historyReference» |
| c10.field.500 | ConfidenceAssertionRecord.recordTypeIdentity | Поле ConfidenceAssertionRecord «recordTypeIdentity» |
| c10.validation.500 | Validate ConfidenceAssertionRecord.recordTypeIdentity | Проверка поля ConfidenceAssertionRecord «recordTypeIdentity» |
| c10.failure.500 | Invalid field: ConfidenceAssertionRecord.recordTypeIdentity | Некорректное поле: ConfidenceAssertionRecord «recordTypeIdentity» |
| c10.field.501 | ConfidenceAssertionRecord.confidenceAssertionId | Поле ConfidenceAssertionRecord «confidenceAssertionId» |
| c10.validation.501 | Validate ConfidenceAssertionRecord.confidenceAssertionId | Проверка поля ConfidenceAssertionRecord «confidenceAssertionId» |
| c10.failure.501 | Invalid field: ConfidenceAssertionRecord.confidenceAssertionId | Некорректное поле: ConfidenceAssertionRecord «confidenceAssertionId» |
| c10.field.502 | ConfidenceAssertionRecord.subjectId | Поле ConfidenceAssertionRecord «subjectId» |
| c10.validation.502 | Validate ConfidenceAssertionRecord.subjectId | Проверка поля ConfidenceAssertionRecord «subjectId» |
| c10.failure.502 | Invalid field: ConfidenceAssertionRecord.subjectId | Некорректное поле: ConfidenceAssertionRecord «subjectId» |
| c10.field.503 | ConfidenceAssertionRecord.subjectKindIdentity | Поле ConfidenceAssertionRecord «subjectKindIdentity» |
| c10.validation.503 | Validate ConfidenceAssertionRecord.subjectKindIdentity | Проверка поля ConfidenceAssertionRecord «subjectKindIdentity» |
| c10.failure.503 | Invalid field: ConfidenceAssertionRecord.subjectKindIdentity | Некорректное поле: ConfidenceAssertionRecord «subjectKindIdentity» |
| c10.field.504 | ConfidenceAssertionRecord.stateIdentity | Поле ConfidenceAssertionRecord «stateIdentity» |
| c10.validation.504 | Validate ConfidenceAssertionRecord.stateIdentity | Проверка поля ConfidenceAssertionRecord «stateIdentity» |
| c10.failure.504 | Invalid field: ConfidenceAssertionRecord.stateIdentity | Некорректное поле: ConfidenceAssertionRecord «stateIdentity» |
| c10.field.505 | ConfidenceAssertionRecord.sourceIdentity | Поле ConfidenceAssertionRecord «sourceIdentity» |
| c10.validation.505 | Validate ConfidenceAssertionRecord.sourceIdentity | Проверка поля ConfidenceAssertionRecord «sourceIdentity» |
| c10.failure.505 | Invalid field: ConfidenceAssertionRecord.sourceIdentity | Некорректное поле: ConfidenceAssertionRecord «sourceIdentity» |
| c10.field.506 | ConfidenceAssertionRecord.transformationIdentity | Поле ConfidenceAssertionRecord «transformationIdentity» |
| c10.validation.506 | Validate ConfidenceAssertionRecord.transformationIdentity | Проверка поля ConfidenceAssertionRecord «transformationIdentity» |
| c10.failure.506 | Invalid field: ConfidenceAssertionRecord.transformationIdentity | Некорректное поле: ConfidenceAssertionRecord «transformationIdentity» |
| c10.field.507 | ConfidenceAssertionRecord.signalTypeIdentities | Поле ConfidenceAssertionRecord «signalTypeIdentities» |
| c10.validation.507 | Validate ConfidenceAssertionRecord.signalTypeIdentities | Проверка поля ConfidenceAssertionRecord «signalTypeIdentities» |
| c10.failure.507 | Invalid field: ConfidenceAssertionRecord.signalTypeIdentities | Некорректное поле: ConfidenceAssertionRecord «signalTypeIdentities» |
| c10.field.508 | ConfidenceAssertionRecord.sourceSignalIds | Поле ConfidenceAssertionRecord «sourceSignalIds» |
| c10.validation.508 | Validate ConfidenceAssertionRecord.sourceSignalIds | Проверка поля ConfidenceAssertionRecord «sourceSignalIds» |
| c10.failure.508 | Invalid field: ConfidenceAssertionRecord.sourceSignalIds | Некорректное поле: ConfidenceAssertionRecord «sourceSignalIds» |
| c10.field.509 | ConfidenceAssertionRecord.generationMethodId | Поле ConfidenceAssertionRecord «generationMethodId» |
| c10.validation.509 | Validate ConfidenceAssertionRecord.generationMethodId | Проверка поля ConfidenceAssertionRecord «generationMethodId» |
| c10.failure.509 | Invalid field: ConfidenceAssertionRecord.generationMethodId | Некорректное поле: ConfidenceAssertionRecord «generationMethodId» |
| c10.field.510 | ConfidenceAssertionRecord.normalizationProfileId | Поле ConfidenceAssertionRecord «normalizationProfileId» |
| c10.validation.510 | Validate ConfidenceAssertionRecord.normalizationProfileId | Проверка поля ConfidenceAssertionRecord «normalizationProfileId» |
| c10.failure.510 | Invalid field: ConfidenceAssertionRecord.normalizationProfileId | Некорректное поле: ConfidenceAssertionRecord «normalizationProfileId» |
| c10.field.511 | ConfidenceAssertionRecord.mappingRuleId | Поле ConfidenceAssertionRecord «mappingRuleId» |
| c10.validation.511 | Validate ConfidenceAssertionRecord.mappingRuleId | Проверка поля ConfidenceAssertionRecord «mappingRuleId» |
| c10.failure.511 | Invalid field: ConfidenceAssertionRecord.mappingRuleId | Некорректное поле: ConfidenceAssertionRecord «mappingRuleId» |
| c10.field.512 | ConfidenceAssertionRecord.producerIdentityAndVersions | Поле ConfidenceAssertionRecord «producerIdentityAndVersions» |
| c10.validation.512 | Validate ConfidenceAssertionRecord.producerIdentityAndVersions | Проверка поля ConfidenceAssertionRecord «producerIdentityAndVersions» |
| c10.failure.512 | Invalid field: ConfidenceAssertionRecord.producerIdentityAndVersions | Некорректное поле: ConfidenceAssertionRecord «producerIdentityAndVersions» |
| c10.field.513 | ConfidenceAssertionRecord.operationId | Поле ConfidenceAssertionRecord «operationId» |
| c10.validation.513 | Validate ConfidenceAssertionRecord.operationId | Проверка поля ConfidenceAssertionRecord «operationId» |
| c10.failure.513 | Invalid field: ConfidenceAssertionRecord.operationId | Некорректное поле: ConfidenceAssertionRecord «operationId» |
| c10.field.514 | ConfidenceAssertionRecord.roomCaseId | Поле ConfidenceAssertionRecord «roomCaseId» |
| c10.validation.514 | Validate ConfidenceAssertionRecord.roomCaseId | Проверка поля ConfidenceAssertionRecord «roomCaseId» |
| c10.failure.514 | Invalid field: ConfidenceAssertionRecord.roomCaseId | Некорректное поле: ConfidenceAssertionRecord «roomCaseId» |
| c10.field.515 | ConfidenceAssertionRecord.producingStageIdentity | Поле ConfidenceAssertionRecord «producingStageIdentity» |
| c10.validation.515 | Validate ConfidenceAssertionRecord.producingStageIdentity | Проверка поля ConfidenceAssertionRecord «producingStageIdentity» |
| c10.failure.515 | Invalid field: ConfidenceAssertionRecord.producingStageIdentity | Некорректное поле: ConfidenceAssertionRecord «producingStageIdentity» |
| c10.field.516 | ConfidenceAssertionRecord.contractSemanticVersion | Поле ConfidenceAssertionRecord «contractSemanticVersion» |
| c10.validation.516 | Validate ConfidenceAssertionRecord.contractSemanticVersion | Проверка поля ConfidenceAssertionRecord «contractSemanticVersion» |
| c10.failure.516 | Invalid field: ConfidenceAssertionRecord.contractSemanticVersion | Некорректное поле: ConfidenceAssertionRecord «contractSemanticVersion» |
| c10.field.517 | ConfidenceAssertionRecord.assertionRevisionId | Поле ConfidenceAssertionRecord «assertionRevisionId» |
| c10.validation.517 | Validate ConfidenceAssertionRecord.assertionRevisionId | Проверка поля ConfidenceAssertionRecord «assertionRevisionId» |
| c10.failure.517 | Invalid field: ConfidenceAssertionRecord.assertionRevisionId | Некорректное поле: ConfidenceAssertionRecord «assertionRevisionId» |
| c10.field.518 | ConfidenceAssertionRecord.predecessorAssertionId | Поле ConfidenceAssertionRecord «predecessorAssertionId» |
| c10.validation.518 | Validate ConfidenceAssertionRecord.predecessorAssertionId | Проверка поля ConfidenceAssertionRecord «predecessorAssertionId» |
| c10.failure.518 | Invalid field: ConfidenceAssertionRecord.predecessorAssertionId | Некорректное поле: ConfidenceAssertionRecord «predecessorAssertionId» |
| c10.field.519 | ConfidenceAssertionRecord.traceReference | Поле ConfidenceAssertionRecord «traceReference» |
| c10.validation.519 | Validate ConfidenceAssertionRecord.traceReference | Проверка поля ConfidenceAssertionRecord «traceReference» |
| c10.failure.519 | Invalid field: ConfidenceAssertionRecord.traceReference | Некорректное поле: ConfidenceAssertionRecord «traceReference» |
| c10.field.520 | ConfidenceAssertionRecord.integrityReference | Поле ConfidenceAssertionRecord «integrityReference» |
| c10.validation.520 | Validate ConfidenceAssertionRecord.integrityReference | Проверка поля ConfidenceAssertionRecord «integrityReference» |
| c10.failure.520 | Invalid field: ConfidenceAssertionRecord.integrityReference | Некорректное поле: ConfidenceAssertionRecord «integrityReference» |
| c10.field.521 | ConfidenceAssertionRecord.historyReference | Поле ConfidenceAssertionRecord «historyReference» |
| c10.validation.521 | Validate ConfidenceAssertionRecord.historyReference | Проверка поля ConfidenceAssertionRecord «historyReference» |
| c10.failure.521 | Invalid field: ConfidenceAssertionRecord.historyReference | Некорректное поле: ConfidenceAssertionRecord «historyReference» |
| c10.field.530 | ConfidenceSourceSignalRecord.sourceSignalId | Поле ConfidenceSourceSignalRecord «sourceSignalId» |
| c10.validation.530 | Validate ConfidenceSourceSignalRecord.sourceSignalId | Проверка поля ConfidenceSourceSignalRecord «sourceSignalId» |
| c10.failure.530 | Invalid field: ConfidenceSourceSignalRecord.sourceSignalId | Некорректное поле: ConfidenceSourceSignalRecord «sourceSignalId» |
| c10.field.531 | ConfidenceSourceSignalRecord.sourceIdentity | Поле ConfidenceSourceSignalRecord «sourceIdentity» |
| c10.validation.531 | Validate ConfidenceSourceSignalRecord.sourceIdentity | Проверка поля ConfidenceSourceSignalRecord «sourceIdentity» |
| c10.failure.531 | Invalid field: ConfidenceSourceSignalRecord.sourceIdentity | Некорректное поле: ConfidenceSourceSignalRecord «sourceIdentity» |
| c10.field.532 | ConfidenceSourceSignalRecord.signalTypeIdentity | Поле ConfidenceSourceSignalRecord «signalTypeIdentity» |
| c10.validation.532 | Validate ConfidenceSourceSignalRecord.signalTypeIdentity | Проверка поля ConfidenceSourceSignalRecord «signalTypeIdentity» |
| c10.failure.532 | Invalid field: ConfidenceSourceSignalRecord.signalTypeIdentity | Некорректное поле: ConfidenceSourceSignalRecord «signalTypeIdentity» |
| c10.field.533 | ConfidenceSourceSignalRecord.generationMethodId | Поле ConfidenceSourceSignalRecord «generationMethodId» |
| c10.validation.533 | Validate ConfidenceSourceSignalRecord.generationMethodId | Проверка поля ConfidenceSourceSignalRecord «generationMethodId» |
| c10.failure.533 | Invalid field: ConfidenceSourceSignalRecord.generationMethodId | Некорректное поле: ConfidenceSourceSignalRecord «generationMethodId» |
| c10.field.534 | ConfidenceSourceSignalRecord.originalRawTypeDomain | Поле ConfidenceSourceSignalRecord «originalRawTypeDomain» |
| c10.validation.534 | Validate ConfidenceSourceSignalRecord.originalRawTypeDomain | Проверка поля ConfidenceSourceSignalRecord «originalRawTypeDomain» |
| c10.failure.534 | Invalid field: ConfidenceSourceSignalRecord.originalRawTypeDomain | Некорректное поле: ConfidenceSourceSignalRecord «originalRawTypeDomain» |
| c10.field.535 | ConfidenceSourceSignalRecord.rawSignalOrUnavailabilityReason | Поле ConfidenceSourceSignalRecord «rawSignalOrUnavailabilityReason» |
| c10.validation.535 | Validate ConfidenceSourceSignalRecord.rawSignalOrUnavailabilityReason | Проверка поля ConfidenceSourceSignalRecord «rawSignalOrUnavailabilityReason» |
| c10.failure.535 | Invalid field: ConfidenceSourceSignalRecord.rawSignalOrUnavailabilityReason | Некорректное поле: ConfidenceSourceSignalRecord «rawSignalOrUnavailabilityReason» |
| c10.field.536 | ConfidenceSourceSignalRecord.producerIdentityAndVersions | Поле ConfidenceSourceSignalRecord «producerIdentityAndVersions» |
| c10.validation.536 | Validate ConfidenceSourceSignalRecord.producerIdentityAndVersions | Проверка поля ConfidenceSourceSignalRecord «producerIdentityAndVersions» |
| c10.failure.536 | Invalid field: ConfidenceSourceSignalRecord.producerIdentityAndVersions | Некорректное поле: ConfidenceSourceSignalRecord «producerIdentityAndVersions» |
| c10.field.537 | ConfidenceSourceSignalRecord.operationId | Поле ConfidenceSourceSignalRecord «operationId» |
| c10.validation.537 | Validate ConfidenceSourceSignalRecord.operationId | Проверка поля ConfidenceSourceSignalRecord «operationId» |
| c10.failure.537 | Invalid field: ConfidenceSourceSignalRecord.operationId | Некорректное поле: ConfidenceSourceSignalRecord «operationId» |
| c10.field.538 | ConfidenceSourceSignalRecord.roomCaseId | Поле ConfidenceSourceSignalRecord «roomCaseId» |
| c10.validation.538 | Validate ConfidenceSourceSignalRecord.roomCaseId | Проверка поля ConfidenceSourceSignalRecord «roomCaseId» |
| c10.failure.538 | Invalid field: ConfidenceSourceSignalRecord.roomCaseId | Некорректное поле: ConfidenceSourceSignalRecord «roomCaseId» |
| c10.field.539 | ConfidenceSourceSignalRecord.contributingImageAssetIds | Поле ConfidenceSourceSignalRecord «contributingImageAssetIds» |
| c10.validation.539 | Validate ConfidenceSourceSignalRecord.contributingImageAssetIds | Проверка поля ConfidenceSourceSignalRecord «contributingImageAssetIds» |
| c10.failure.539 | Invalid field: ConfidenceSourceSignalRecord.contributingImageAssetIds | Некорректное поле: ConfidenceSourceSignalRecord «contributingImageAssetIds» |
| c10.field.540 | ConfidenceSourceSignalRecord.producingStageIdentity | Поле ConfidenceSourceSignalRecord «producingStageIdentity» |
| c10.validation.540 | Validate ConfidenceSourceSignalRecord.producingStageIdentity | Проверка поля ConfidenceSourceSignalRecord «producingStageIdentity» |
| c10.failure.540 | Invalid field: ConfidenceSourceSignalRecord.producingStageIdentity | Некорректное поле: ConfidenceSourceSignalRecord «producingStageIdentity» |
| c10.field.541 | ConfidenceSourceSignalRecord.integrityReference | Поле ConfidenceSourceSignalRecord «integrityReference» |
| c10.validation.541 | Validate ConfidenceSourceSignalRecord.integrityReference | Проверка поля ConfidenceSourceSignalRecord «integrityReference» |
| c10.failure.541 | Invalid field: ConfidenceSourceSignalRecord.integrityReference | Некорректное поле: ConfidenceSourceSignalRecord «integrityReference» |
| c10.field.542 | ConfidenceSourceSignalRecord.revisionId | Поле ConfidenceSourceSignalRecord «revisionId» |
| c10.validation.542 | Validate ConfidenceSourceSignalRecord.revisionId | Проверка поля ConfidenceSourceSignalRecord «revisionId» |
| c10.failure.542 | Invalid field: ConfidenceSourceSignalRecord.revisionId | Некорректное поле: ConfidenceSourceSignalRecord «revisionId» |
| c10.field.600 | Contract6DeterminabilityPackage.packageId | Поле Contract6DeterminabilityPackage «packageId» |
| c10.validation.600 | Validate Contract6DeterminabilityPackage.packageId | Проверка поля Contract6DeterminabilityPackage «packageId» |
| c10.failure.600 | Invalid field: Contract6DeterminabilityPackage.packageId | Некорректное поле: Contract6DeterminabilityPackage «packageId» |
| c10.field.601 | Contract6DeterminabilityPackage.operationId | Поле Contract6DeterminabilityPackage «operationId» |
| c10.validation.601 | Validate Contract6DeterminabilityPackage.operationId | Проверка поля Contract6DeterminabilityPackage «operationId» |
| c10.failure.601 | Invalid field: Contract6DeterminabilityPackage.operationId | Некорректное поле: Contract6DeterminabilityPackage «operationId» |
| c10.field.602 | Contract6DeterminabilityPackage.roomCaseId | Поле Contract6DeterminabilityPackage «roomCaseId» |
| c10.validation.602 | Validate Contract6DeterminabilityPackage.roomCaseId | Проверка поля Contract6DeterminabilityPackage «roomCaseId» |
| c10.failure.602 | Invalid field: Contract6DeterminabilityPackage.roomCaseId | Некорректное поле: Contract6DeterminabilityPackage «roomCaseId» |
| c10.field.603 | Contract6DeterminabilityPackage.annotationUnits | Поле Contract6DeterminabilityPackage «annotationUnits» |
| c10.validation.603 | Validate Contract6DeterminabilityPackage.annotationUnits | Проверка поля Contract6DeterminabilityPackage «annotationUnits» |
| c10.failure.603 | Invalid field: Contract6DeterminabilityPackage.annotationUnits | Некорректное поле: Contract6DeterminabilityPackage «annotationUnits» |
| c10.field.604 | Contract6DeterminabilityPackage.pairingRecords | Поле Contract6DeterminabilityPackage «pairingRecords» |
| c10.validation.604 | Validate Contract6DeterminabilityPackage.pairingRecords | Проверка поля Contract6DeterminabilityPackage «pairingRecords» |
| c10.failure.604 | Invalid field: Contract6DeterminabilityPackage.pairingRecords | Некорректное поле: Contract6DeterminabilityPackage «pairingRecords» |
| c10.field.605 | Contract6DeterminabilityPackage.basisLinkRecords | Поле Contract6DeterminabilityPackage «basisLinkRecords» |
| c10.validation.605 | Validate Contract6DeterminabilityPackage.basisLinkRecords | Проверка поля Contract6DeterminabilityPackage «basisLinkRecords» |
| c10.failure.605 | Invalid field: Contract6DeterminabilityPackage.basisLinkRecords | Некорректное поле: Contract6DeterminabilityPackage «basisLinkRecords» |
| c10.field.606 | Contract6DeterminabilityPackage.outcomeDecisionRecords | Поле Contract6DeterminabilityPackage «outcomeDecisionRecords» |
| c10.validation.606 | Validate Contract6DeterminabilityPackage.outcomeDecisionRecords | Проверка поля Contract6DeterminabilityPackage «outcomeDecisionRecords» |
| c10.failure.606 | Invalid field: Contract6DeterminabilityPackage.outcomeDecisionRecords | Некорректное поле: Contract6DeterminabilityPackage «outcomeDecisionRecords» |
| c10.field.607 | Contract6DeterminabilityPackage.sealingRecords | Поле Contract6DeterminabilityPackage «sealingRecords» |
| c10.validation.607 | Validate Contract6DeterminabilityPackage.sealingRecords | Проверка поля Contract6DeterminabilityPackage «sealingRecords» |
| c10.failure.607 | Invalid field: Contract6DeterminabilityPackage.sealingRecords | Некорректное поле: Contract6DeterminabilityPackage «sealingRecords» |
| c10.field.608 | Contract6DeterminabilityPackage.adjudicationRecords | Поле Contract6DeterminabilityPackage «adjudicationRecords» |
| c10.validation.608 | Validate Contract6DeterminabilityPackage.adjudicationRecords | Проверка поля Contract6DeterminabilityPackage «adjudicationRecords» |
| c10.failure.608 | Invalid field: Contract6DeterminabilityPackage.adjudicationRecords | Некорректное поле: Contract6DeterminabilityPackage «adjudicationRecords» |
| c10.field.609 | Contract6DeterminabilityPackage.integrityReference | Поле Contract6DeterminabilityPackage «integrityReference» |
| c10.validation.609 | Validate Contract6DeterminabilityPackage.integrityReference | Проверка поля Contract6DeterminabilityPackage «integrityReference» |
| c10.failure.609 | Invalid field: Contract6DeterminabilityPackage.integrityReference | Некорректное поле: Contract6DeterminabilityPackage «integrityReference» |
| c10.field.610 | AnnotationUnitRecord.annotationUnitId | Поле AnnotationUnitRecord «annotationUnitId» |
| c10.validation.610 | Validate AnnotationUnitRecord.annotationUnitId | Проверка поля AnnotationUnitRecord «annotationUnitId» |
| c10.failure.610 | Invalid field: AnnotationUnitRecord.annotationUnitId | Некорректное поле: AnnotationUnitRecord «annotationUnitId» |
| c10.field.611 | AnnotationUnitRecord.recordTypeIdentity | Поле AnnotationUnitRecord «recordTypeIdentity» |
| c10.validation.611 | Validate AnnotationUnitRecord.recordTypeIdentity | Проверка поля AnnotationUnitRecord «recordTypeIdentity» |
| c10.failure.611 | Invalid field: AnnotationUnitRecord.recordTypeIdentity | Некорректное поле: AnnotationUnitRecord «recordTypeIdentity» |
| c10.field.612 | AnnotationUnitRecord.operationId | Поле AnnotationUnitRecord «operationId» |
| c10.validation.612 | Validate AnnotationUnitRecord.operationId | Проверка поля AnnotationUnitRecord «operationId» |
| c10.failure.612 | Invalid field: AnnotationUnitRecord.operationId | Некорректное поле: AnnotationUnitRecord «operationId» |
| c10.field.613 | AnnotationUnitRecord.roomCaseId | Поле AnnotationUnitRecord «roomCaseId» |
| c10.validation.613 | Validate AnnotationUnitRecord.roomCaseId | Проверка поля AnnotationUnitRecord «roomCaseId» |
| c10.failure.613 | Invalid field: AnnotationUnitRecord.roomCaseId | Некорректное поле: AnnotationUnitRecord «roomCaseId» |
| c10.field.614 | AnnotationUnitRecord.subjectId | Поле AnnotationUnitRecord «subjectId» |
| c10.validation.614 | Validate AnnotationUnitRecord.subjectId | Проверка поля AnnotationUnitRecord «subjectId» |
| c10.failure.614 | Invalid field: AnnotationUnitRecord.subjectId | Некорректное поле: AnnotationUnitRecord «subjectId» |
| c10.field.615 | AnnotationUnitRecord.subjectKindIdentity | Поле AnnotationUnitRecord «subjectKindIdentity» |
| c10.validation.615 | Validate AnnotationUnitRecord.subjectKindIdentity | Проверка поля AnnotationUnitRecord «subjectKindIdentity» |
| c10.failure.615 | Invalid field: AnnotationUnitRecord.subjectKindIdentity | Некорректное поле: AnnotationUnitRecord «subjectKindIdentity» |
| c10.field.616 | AnnotationUnitRecord.unitTypeIdentity | Поле AnnotationUnitRecord «unitTypeIdentity» |
| c10.validation.616 | Validate AnnotationUnitRecord.unitTypeIdentity | Проверка поля AnnotationUnitRecord «unitTypeIdentity» |
| c10.failure.616 | Invalid field: AnnotationUnitRecord.unitTypeIdentity | Некорректное поле: AnnotationUnitRecord «unitTypeIdentity» |
| c10.field.617 | AnnotationUnitRecord.unitGranularityIdentity | Поле AnnotationUnitRecord «unitGranularityIdentity» |
| c10.validation.617 | Validate AnnotationUnitRecord.unitGranularityIdentity | Проверка поля AnnotationUnitRecord «unitGranularityIdentity» |
| c10.failure.617 | Invalid field: AnnotationUnitRecord.unitGranularityIdentity | Некорректное поле: AnnotationUnitRecord «unitGranularityIdentity» |
| c10.field.618 | AnnotationUnitRecord.viewScopeIdentity | Поле AnnotationUnitRecord «viewScopeIdentity» |
| c10.validation.618 | Validate AnnotationUnitRecord.viewScopeIdentity | Проверка поля AnnotationUnitRecord «viewScopeIdentity» |
| c10.failure.618 | Invalid field: AnnotationUnitRecord.viewScopeIdentity | Некорректное поле: AnnotationUnitRecord «viewScopeIdentity» |
| c10.field.619 | AnnotationUnitRecord.importedSemanticIds | Поле AnnotationUnitRecord «importedSemanticIds» |
| c10.validation.619 | Validate AnnotationUnitRecord.importedSemanticIds | Проверка поля AnnotationUnitRecord «importedSemanticIds» |
| c10.failure.619 | Invalid field: AnnotationUnitRecord.importedSemanticIds | Некорректное поле: AnnotationUnitRecord «importedSemanticIds» |
| c10.field.620 | AnnotationUnitRecord.memberId | Поле AnnotationUnitRecord «memberId» |
| c10.validation.620 | Validate AnnotationUnitRecord.memberId | Проверка поля AnnotationUnitRecord «memberId» |
| c10.failure.620 | Invalid field: AnnotationUnitRecord.memberId | Некорректное поле: AnnotationUnitRecord «memberId» |
| c10.field.621 | AnnotationUnitRecord.revisionId | Поле AnnotationUnitRecord «revisionId» |
| c10.validation.621 | Validate AnnotationUnitRecord.revisionId | Проверка поля AnnotationUnitRecord «revisionId» |
| c10.failure.621 | Invalid field: AnnotationUnitRecord.revisionId | Некорректное поле: AnnotationUnitRecord «revisionId» |
| c10.field.622 | AnnotationUnitRecord.predecessorAnnotationUnitId | Поле AnnotationUnitRecord «predecessorAnnotationUnitId» |
| c10.validation.622 | Validate AnnotationUnitRecord.predecessorAnnotationUnitId | Проверка поля AnnotationUnitRecord «predecessorAnnotationUnitId» |
| c10.failure.622 | Invalid field: AnnotationUnitRecord.predecessorAnnotationUnitId | Некорректное поле: AnnotationUnitRecord «predecessorAnnotationUnitId» |
| c10.field.623 | AnnotationUnitRecord.basisLinkRecordId | Поле AnnotationUnitRecord «basisLinkRecordId» |
| c10.validation.623 | Validate AnnotationUnitRecord.basisLinkRecordId | Проверка поля AnnotationUnitRecord «basisLinkRecordId» |
| c10.failure.623 | Invalid field: AnnotationUnitRecord.basisLinkRecordId | Некорректное поле: AnnotationUnitRecord «basisLinkRecordId» |
| c10.field.624 | AnnotationUnitRecord.pairingRecordId | Поле AnnotationUnitRecord «pairingRecordId» |
| c10.validation.624 | Validate AnnotationUnitRecord.pairingRecordId | Проверка поля AnnotationUnitRecord «pairingRecordId» |
| c10.failure.624 | Invalid field: AnnotationUnitRecord.pairingRecordId | Некорректное поле: AnnotationUnitRecord «pairingRecordId» |
| c10.field.625 | AnnotationUnitRecord.outcomeDecisionRecordId | Поле AnnotationUnitRecord «outcomeDecisionRecordId» |
| c10.validation.625 | Validate AnnotationUnitRecord.outcomeDecisionRecordId | Проверка поля AnnotationUnitRecord «outcomeDecisionRecordId» |
| c10.failure.625 | Invalid field: AnnotationUnitRecord.outcomeDecisionRecordId | Некорректное поле: AnnotationUnitRecord «outcomeDecisionRecordId» |
| c10.field.626 | AnnotationUnitRecord.sealingRecordId | Поле AnnotationUnitRecord «sealingRecordId» |
| c10.validation.626 | Validate AnnotationUnitRecord.sealingRecordId | Проверка поля AnnotationUnitRecord «sealingRecordId» |
| c10.failure.626 | Invalid field: AnnotationUnitRecord.sealingRecordId | Некорректное поле: AnnotationUnitRecord «sealingRecordId» |
| c10.field.627 | AnnotationUnitRecord.adjudicationRecordId | Поле AnnotationUnitRecord «adjudicationRecordId» |
| c10.validation.627 | Validate AnnotationUnitRecord.adjudicationRecordId | Проверка поля AnnotationUnitRecord «adjudicationRecordId» |
| c10.failure.627 | Invalid field: AnnotationUnitRecord.adjudicationRecordId | Некорректное поле: AnnotationUnitRecord «adjudicationRecordId» |
| c10.field.628 | AnnotationUnitRecord.traceReference | Поле AnnotationUnitRecord «traceReference» |
| c10.validation.628 | Validate AnnotationUnitRecord.traceReference | Проверка поля AnnotationUnitRecord «traceReference» |
| c10.failure.628 | Invalid field: AnnotationUnitRecord.traceReference | Некорректное поле: AnnotationUnitRecord «traceReference» |
| c10.field.629 | AnnotationUnitRecord.integrityReference | Поле AnnotationUnitRecord «integrityReference» |
| c10.validation.629 | Validate AnnotationUnitRecord.integrityReference | Проверка поля AnnotationUnitRecord «integrityReference» |
| c10.failure.629 | Invalid field: AnnotationUnitRecord.integrityReference | Некорректное поле: AnnotationUnitRecord «integrityReference» |
| c10.field.630 | AnnotationUnitRecord.historyReference | Поле AnnotationUnitRecord «historyReference» |
| c10.validation.630 | Validate AnnotationUnitRecord.historyReference | Проверка поля AnnotationUnitRecord «historyReference» |
| c10.failure.630 | Invalid field: AnnotationUnitRecord.historyReference | Некорректное поле: AnnotationUnitRecord «historyReference» |
| c10.field.640 | PairingRecord.pairingRecordId | Поле PairingRecord «pairingRecordId» |
| c10.validation.640 | Validate PairingRecord.pairingRecordId | Проверка поля PairingRecord «pairingRecordId» |
| c10.failure.640 | Invalid field: PairingRecord.pairingRecordId | Некорректное поле: PairingRecord «pairingRecordId» |
| c10.field.641 | PairingRecord.annotationUnitId | Поле PairingRecord «annotationUnitId» |
| c10.validation.641 | Validate PairingRecord.annotationUnitId | Проверка поля PairingRecord «annotationUnitId» |
| c10.failure.641 | Invalid field: PairingRecord.annotationUnitId | Некорректное поле: PairingRecord «annotationUnitId» |
| c10.field.642 | PairingRecord.pairingRuleIdentity | Поле PairingRecord «pairingRuleIdentity» |
| c10.validation.642 | Validate PairingRecord.pairingRuleIdentity | Проверка поля PairingRecord «pairingRuleIdentity» |
| c10.failure.642 | Invalid field: PairingRecord.pairingRuleIdentity | Некорректное поле: PairingRecord «pairingRuleIdentity» |
| c10.field.643 | PairingRecord.pairingStateIdentity | Поле PairingRecord «pairingStateIdentity» |
| c10.validation.643 | Validate PairingRecord.pairingStateIdentity | Проверка поля PairingRecord «pairingStateIdentity» |
| c10.failure.643 | Invalid field: PairingRecord.pairingStateIdentity | Некорректное поле: PairingRecord «pairingStateIdentity» |
| c10.field.644 | PairingRecord.participantIds | Поле PairingRecord «participantIds» |
| c10.validation.644 | Validate PairingRecord.participantIds | Проверка поля PairingRecord «participantIds» |
| c10.failure.644 | Invalid field: PairingRecord.participantIds | Некорректное поле: PairingRecord «participantIds» |
| c10.field.645 | PairingRecord.identityEqualityResults | Поле PairingRecord «identityEqualityResults» |
| c10.validation.645 | Validate PairingRecord.identityEqualityResults | Проверка поля PairingRecord «identityEqualityResults» |
| c10.failure.645 | Invalid field: PairingRecord.identityEqualityResults | Некорректное поле: PairingRecord «identityEqualityResults» |
| c10.field.646 | PairingRecord.duplicateNormalizationReferences | Поле PairingRecord «duplicateNormalizationReferences» |
| c10.validation.646 | Validate PairingRecord.duplicateNormalizationReferences | Проверка поля PairingRecord «duplicateNormalizationReferences» |
| c10.failure.646 | Invalid field: PairingRecord.duplicateNormalizationReferences | Некорректное поле: PairingRecord «duplicateNormalizationReferences» |
| c10.field.647 | PairingRecord.conflictReferences | Поле PairingRecord «conflictReferences» |
| c10.validation.647 | Validate PairingRecord.conflictReferences | Проверка поля PairingRecord «conflictReferences» |
| c10.failure.647 | Invalid field: PairingRecord.conflictReferences | Некорректное поле: PairingRecord «conflictReferences» |
| c10.field.648 | PairingRecord.revisionId | Поле PairingRecord «revisionId» |
| c10.validation.648 | Validate PairingRecord.revisionId | Проверка поля PairingRecord «revisionId» |
| c10.failure.648 | Invalid field: PairingRecord.revisionId | Некорректное поле: PairingRecord «revisionId» |
| c10.field.649 | PairingRecord.predecessorPairingRecordId | Поле PairingRecord «predecessorPairingRecordId» |
| c10.validation.649 | Validate PairingRecord.predecessorPairingRecordId | Проверка поля PairingRecord «predecessorPairingRecordId» |
| c10.failure.649 | Invalid field: PairingRecord.predecessorPairingRecordId | Некорректное поле: PairingRecord «predecessorPairingRecordId» |
| c10.field.650 | PairingRecord.traceReference | Поле PairingRecord «traceReference» |
| c10.validation.650 | Validate PairingRecord.traceReference | Проверка поля PairingRecord «traceReference» |
| c10.failure.650 | Invalid field: PairingRecord.traceReference | Некорректное поле: PairingRecord «traceReference» |
| c10.field.651 | PairingRecord.integrityReference | Поле PairingRecord «integrityReference» |
| c10.validation.651 | Validate PairingRecord.integrityReference | Проверка поля PairingRecord «integrityReference» |
| c10.failure.651 | Invalid field: PairingRecord.integrityReference | Некорректное поле: PairingRecord «integrityReference» |
| c10.field.652 | PairingRecord.historyReference | Поле PairingRecord «historyReference» |
| c10.validation.652 | Validate PairingRecord.historyReference | Проверка поля PairingRecord «historyReference» |
| c10.failure.652 | Invalid field: PairingRecord.historyReference | Некорректное поле: PairingRecord «historyReference» |
| c10.field.655 | Contract6DeterminabilityPackage.schemaVersion | Поле Contract6DeterminabilityPackage «schemaVersion» |
| c10.validation.655 | Validate Contract6DeterminabilityPackage.schemaVersion | Проверка поля Contract6DeterminabilityPackage «schemaVersion» |
| c10.failure.655 | Invalid field: Contract6DeterminabilityPackage.schemaVersion | Некорректное поле: Contract6DeterminabilityPackage «schemaVersion» |
| c10.field.660 | BasisLinkRecord.basisLinkRecordId | Поле BasisLinkRecord «basisLinkRecordId» |
| c10.validation.660 | Validate BasisLinkRecord.basisLinkRecordId | Проверка поля BasisLinkRecord «basisLinkRecordId» |
| c10.failure.660 | Invalid field: BasisLinkRecord.basisLinkRecordId | Некорректное поле: BasisLinkRecord «basisLinkRecordId» |
| c10.field.661 | BasisLinkRecord.annotationUnitId | Поле BasisLinkRecord «annotationUnitId» |
| c10.validation.661 | Validate BasisLinkRecord.annotationUnitId | Проверка поля BasisLinkRecord «annotationUnitId» |
| c10.failure.661 | Invalid field: BasisLinkRecord.annotationUnitId | Некорректное поле: BasisLinkRecord «annotationUnitId» |
| c10.field.662 | BasisLinkRecord.basisIdentities | Поле BasisLinkRecord «basisIdentities» |
| c10.validation.662 | Validate BasisLinkRecord.basisIdentities | Проверка поля BasisLinkRecord «basisIdentities» |
| c10.failure.662 | Invalid field: BasisLinkRecord.basisIdentities | Некорректное поле: BasisLinkRecord «basisIdentities» |
| c10.field.663 | BasisLinkRecord.evidenceReferences | Поле BasisLinkRecord «evidenceReferences» |
| c10.validation.663 | Validate BasisLinkRecord.evidenceReferences | Проверка поля BasisLinkRecord «evidenceReferences» |
| c10.failure.663 | Invalid field: BasisLinkRecord.evidenceReferences | Некорректное поле: BasisLinkRecord «evidenceReferences» |
| c10.field.664 | BasisLinkRecord.revisionId | Поле BasisLinkRecord «revisionId» |
| c10.validation.664 | Validate BasisLinkRecord.revisionId | Проверка поля BasisLinkRecord «revisionId» |
| c10.failure.664 | Invalid field: BasisLinkRecord.revisionId | Некорректное поле: BasisLinkRecord «revisionId» |
| c10.field.665 | BasisLinkRecord.traceReference | Поле BasisLinkRecord «traceReference» |
| c10.validation.665 | Validate BasisLinkRecord.traceReference | Проверка поля BasisLinkRecord «traceReference» |
| c10.failure.665 | Invalid field: BasisLinkRecord.traceReference | Некорректное поле: BasisLinkRecord «traceReference» |
| c10.field.666 | BasisLinkRecord.integrityReference | Поле BasisLinkRecord «integrityReference» |
| c10.validation.666 | Validate BasisLinkRecord.integrityReference | Проверка поля BasisLinkRecord «integrityReference» |
| c10.failure.666 | Invalid field: BasisLinkRecord.integrityReference | Некорректное поле: BasisLinkRecord «integrityReference» |
| c10.field.667 | BasisLinkRecord.historyReference | Поле BasisLinkRecord «historyReference» |
| c10.validation.667 | Validate BasisLinkRecord.historyReference | Проверка поля BasisLinkRecord «historyReference» |
| c10.failure.667 | Invalid field: BasisLinkRecord.historyReference | Некорректное поле: BasisLinkRecord «historyReference» |
| c10.field.670 | OutcomeDecisionRecord.outcomeDecisionRecordId | Поле OutcomeDecisionRecord «outcomeDecisionRecordId» |
| c10.validation.670 | Validate OutcomeDecisionRecord.outcomeDecisionRecordId | Проверка поля OutcomeDecisionRecord «outcomeDecisionRecordId» |
| c10.failure.670 | Invalid field: OutcomeDecisionRecord.outcomeDecisionRecordId | Некорректное поле: OutcomeDecisionRecord «outcomeDecisionRecordId» |
| c10.field.671 | OutcomeDecisionRecord.annotationUnitId | Поле OutcomeDecisionRecord «annotationUnitId» |
| c10.validation.671 | Validate OutcomeDecisionRecord.annotationUnitId | Проверка поля OutcomeDecisionRecord «annotationUnitId» |
| c10.failure.671 | Invalid field: OutcomeDecisionRecord.annotationUnitId | Некорректное поле: OutcomeDecisionRecord «annotationUnitId» |
| c10.field.672 | OutcomeDecisionRecord.outcomeIdentity | Поле OutcomeDecisionRecord «outcomeIdentity» |
| c10.validation.672 | Validate OutcomeDecisionRecord.outcomeIdentity | Проверка поля OutcomeDecisionRecord «outcomeIdentity» |
| c10.failure.672 | Invalid field: OutcomeDecisionRecord.outcomeIdentity | Некорректное поле: OutcomeDecisionRecord «outcomeIdentity» |
| c10.field.673 | OutcomeDecisionRecord.derivationOrAdjudicationBasisReference | Поле OutcomeDecisionRecord «derivationOrAdjudicationBasisReference» |
| c10.validation.673 | Validate OutcomeDecisionRecord.derivationOrAdjudicationBasisReference | Проверка поля OutcomeDecisionRecord «derivationOrAdjudicationBasisReference» |
| c10.failure.673 | Invalid field: OutcomeDecisionRecord.derivationOrAdjudicationBasisReference | Некорректное поле: OutcomeDecisionRecord «derivationOrAdjudicationBasisReference» |
| c10.field.674 | OutcomeDecisionRecord.revisionId | Поле OutcomeDecisionRecord «revisionId» |
| c10.validation.674 | Validate OutcomeDecisionRecord.revisionId | Проверка поля OutcomeDecisionRecord «revisionId» |
| c10.failure.674 | Invalid field: OutcomeDecisionRecord.revisionId | Некорректное поле: OutcomeDecisionRecord «revisionId» |
| c10.field.675 | OutcomeDecisionRecord.traceReference | Поле OutcomeDecisionRecord «traceReference» |
| c10.validation.675 | Validate OutcomeDecisionRecord.traceReference | Проверка поля OutcomeDecisionRecord «traceReference» |
| c10.failure.675 | Invalid field: OutcomeDecisionRecord.traceReference | Некорректное поле: OutcomeDecisionRecord «traceReference» |
| c10.field.676 | OutcomeDecisionRecord.integrityReference | Поле OutcomeDecisionRecord «integrityReference» |
| c10.validation.676 | Validate OutcomeDecisionRecord.integrityReference | Проверка поля OutcomeDecisionRecord «integrityReference» |
| c10.failure.676 | Invalid field: OutcomeDecisionRecord.integrityReference | Некорректное поле: OutcomeDecisionRecord «integrityReference» |
| c10.field.677 | OutcomeDecisionRecord.historyReference | Поле OutcomeDecisionRecord «historyReference» |
| c10.validation.677 | Validate OutcomeDecisionRecord.historyReference | Проверка поля OutcomeDecisionRecord «historyReference» |
| c10.failure.677 | Invalid field: OutcomeDecisionRecord.historyReference | Некорректное поле: OutcomeDecisionRecord «historyReference» |
| c10.field.680 | Contract6SealingRecord.sealingRecordId | Поле Contract6SealingRecord «sealingRecordId» |
| c10.validation.680 | Validate Contract6SealingRecord.sealingRecordId | Проверка поля Contract6SealingRecord «sealingRecordId» |
| c10.failure.680 | Invalid field: Contract6SealingRecord.sealingRecordId | Некорректное поле: Contract6SealingRecord «sealingRecordId» |
| c10.field.681 | Contract6SealingRecord.annotationUnitId | Поле Contract6SealingRecord «annotationUnitId» |
| c10.validation.681 | Validate Contract6SealingRecord.annotationUnitId | Проверка поля Contract6SealingRecord «annotationUnitId» |
| c10.failure.681 | Invalid field: Contract6SealingRecord.annotationUnitId | Некорректное поле: Contract6SealingRecord «annotationUnitId» |
| c10.field.682 | Contract6SealingRecord.lifecycleTransitionIdentity | Поле Contract6SealingRecord «lifecycleTransitionIdentity» |
| c10.validation.682 | Validate Contract6SealingRecord.lifecycleTransitionIdentity | Проверка поля Contract6SealingRecord «lifecycleTransitionIdentity» |
| c10.failure.682 | Invalid field: Contract6SealingRecord.lifecycleTransitionIdentity | Некорректное поле: Contract6SealingRecord «lifecycleTransitionIdentity» |
| c10.field.683 | Contract6SealingRecord.authorityReference | Поле Contract6SealingRecord «authorityReference» |
| c10.validation.683 | Validate Contract6SealingRecord.authorityReference | Проверка поля Contract6SealingRecord «authorityReference» |
| c10.failure.683 | Invalid field: Contract6SealingRecord.authorityReference | Некорректное поле: Contract6SealingRecord «authorityReference» |
| c10.field.684 | Contract6SealingRecord.sealedRevisionId | Поле Contract6SealingRecord «sealedRevisionId» |
| c10.validation.684 | Validate Contract6SealingRecord.sealedRevisionId | Проверка поля Contract6SealingRecord «sealedRevisionId» |
| c10.failure.684 | Invalid field: Contract6SealingRecord.sealedRevisionId | Некорректное поле: Contract6SealingRecord «sealedRevisionId» |
| c10.field.685 | Contract6SealingRecord.predecessorSealingRecordId | Поле Contract6SealingRecord «predecessorSealingRecordId» |
| c10.validation.685 | Validate Contract6SealingRecord.predecessorSealingRecordId | Проверка поля Contract6SealingRecord «predecessorSealingRecordId» |
| c10.failure.685 | Invalid field: Contract6SealingRecord.predecessorSealingRecordId | Некорректное поле: Contract6SealingRecord «predecessorSealingRecordId» |
| c10.field.686 | Contract6SealingRecord.integrityReference | Поле Contract6SealingRecord «integrityReference» |
| c10.validation.686 | Validate Contract6SealingRecord.integrityReference | Проверка поля Contract6SealingRecord «integrityReference» |
| c10.failure.686 | Invalid field: Contract6SealingRecord.integrityReference | Некорректное поле: Contract6SealingRecord «integrityReference» |
| c10.field.687 | Contract6SealingRecord.historyReference | Поле Contract6SealingRecord «historyReference» |
| c10.validation.687 | Validate Contract6SealingRecord.historyReference | Проверка поля Contract6SealingRecord «historyReference» |
| c10.failure.687 | Invalid field: Contract6SealingRecord.historyReference | Некорректное поле: Contract6SealingRecord «historyReference» |
| c10.field.690 | AdjudicationRecord.adjudicationRecordId | Поле AdjudicationRecord «adjudicationRecordId» |
| c10.validation.690 | Validate AdjudicationRecord.adjudicationRecordId | Проверка поля AdjudicationRecord «adjudicationRecordId» |
| c10.failure.690 | Invalid field: AdjudicationRecord.adjudicationRecordId | Некорректное поле: AdjudicationRecord «adjudicationRecordId» |
| c10.field.691 | AdjudicationRecord.annotationUnitId | Поле AdjudicationRecord «annotationUnitId» |
| c10.validation.691 | Validate AdjudicationRecord.annotationUnitId | Проверка поля AdjudicationRecord «annotationUnitId» |
| c10.failure.691 | Invalid field: AdjudicationRecord.annotationUnitId | Некорректное поле: AdjudicationRecord «annotationUnitId» |
| c10.field.692 | AdjudicationRecord.triggerIdentity | Поле AdjudicationRecord «triggerIdentity» |
| c10.validation.692 | Validate AdjudicationRecord.triggerIdentity | Проверка поля AdjudicationRecord «triggerIdentity» |
| c10.failure.692 | Invalid field: AdjudicationRecord.triggerIdentity | Некорректное поле: AdjudicationRecord «triggerIdentity» |
| c10.field.693 | AdjudicationRecord.retainedBasisReferences | Поле AdjudicationRecord «retainedBasisReferences» |
| c10.validation.693 | Validate AdjudicationRecord.retainedBasisReferences | Проверка поля AdjudicationRecord «retainedBasisReferences» |
| c10.failure.693 | Invalid field: AdjudicationRecord.retainedBasisReferences | Некорректное поле: AdjudicationRecord «retainedBasisReferences» |
| c10.field.694 | AdjudicationRecord.rationaleReference | Поле AdjudicationRecord «rationaleReference» |
| c10.validation.694 | Validate AdjudicationRecord.rationaleReference | Проверка поля AdjudicationRecord «rationaleReference» |
| c10.failure.694 | Invalid field: AdjudicationRecord.rationaleReference | Некорректное поле: AdjudicationRecord «rationaleReference» |
| c10.field.695 | AdjudicationRecord.authorityReference | Поле AdjudicationRecord «authorityReference» |
| c10.validation.695 | Validate AdjudicationRecord.authorityReference | Проверка поля AdjudicationRecord «authorityReference» |
| c10.failure.695 | Invalid field: AdjudicationRecord.authorityReference | Некорректное поле: AdjudicationRecord «authorityReference» |
| c10.field.696 | AdjudicationRecord.dispositionIdentity | Поле AdjudicationRecord «dispositionIdentity» |
| c10.validation.696 | Validate AdjudicationRecord.dispositionIdentity | Проверка поля AdjudicationRecord «dispositionIdentity» |
| c10.failure.696 | Invalid field: AdjudicationRecord.dispositionIdentity | Некорректное поле: AdjudicationRecord «dispositionIdentity» |
| c10.field.697 | AdjudicationRecord.revisionId | Поле AdjudicationRecord «revisionId» |
| c10.validation.697 | Validate AdjudicationRecord.revisionId | Проверка поля AdjudicationRecord «revisionId» |
| c10.failure.697 | Invalid field: AdjudicationRecord.revisionId | Некорректное поле: AdjudicationRecord «revisionId» |
| c10.field.698 | AdjudicationRecord.predecessorAdjudicationRecordId | Поле AdjudicationRecord «predecessorAdjudicationRecordId» |
| c10.validation.698 | Validate AdjudicationRecord.predecessorAdjudicationRecordId | Проверка поля AdjudicationRecord «predecessorAdjudicationRecordId» |
| c10.failure.698 | Invalid field: AdjudicationRecord.predecessorAdjudicationRecordId | Некорректное поле: AdjudicationRecord «predecessorAdjudicationRecordId» |
| c10.field.699 | AdjudicationRecord.integrityReference | Поле AdjudicationRecord «integrityReference» |
| c10.validation.699 | Validate AdjudicationRecord.integrityReference | Проверка поля AdjudicationRecord «integrityReference» |
| c10.failure.699 | Invalid field: AdjudicationRecord.integrityReference | Некорректное поле: AdjudicationRecord «integrityReference» |
| c10.field.700 | AdjudicationRecord.historyReference | Поле AdjudicationRecord «historyReference» |
| c10.validation.700 | Validate AdjudicationRecord.historyReference | Проверка поля AdjudicationRecord «historyReference» |
| c10.failure.700 | Invalid field: AdjudicationRecord.historyReference | Некорректное поле: AdjudicationRecord «historyReference» |
| c10.field.704 | Contract8EvaluationPackage.packageId | Поле Contract8EvaluationPackage «packageId» |
| c10.validation.704 | Validate Contract8EvaluationPackage.packageId | Проверка поля Contract8EvaluationPackage «packageId» |
| c10.failure.704 | Invalid field: Contract8EvaluationPackage.packageId | Некорректное поле: Contract8EvaluationPackage «packageId» |
| c10.field.705 | Contract8EvaluationPackage.evaluationConfigurationReference | Поле Contract8EvaluationPackage «evaluationConfigurationReference» |
| c10.validation.705 | Validate Contract8EvaluationPackage.evaluationConfigurationReference | Проверка поля Contract8EvaluationPackage «evaluationConfigurationReference» |
| c10.failure.705 | Invalid field: Contract8EvaluationPackage.evaluationConfigurationReference | Некорректное поле: Contract8EvaluationPackage «evaluationConfigurationReference» |
| c10.field.706 | Contract8EvaluationPackage.rawAssertions | Поле Contract8EvaluationPackage «rawAssertions» |
| c10.validation.706 | Validate Contract8EvaluationPackage.rawAssertions | Проверка поля Contract8EvaluationPackage «rawAssertions» |
| c10.failure.706 | Invalid field: Contract8EvaluationPackage.rawAssertions | Некорректное поле: Contract8EvaluationPackage «rawAssertions» |
| c10.field.707 | Contract8EvaluationPackage.projectionFacts | Поле Contract8EvaluationPackage «projectionFacts» |
| c10.validation.707 | Validate Contract8EvaluationPackage.projectionFacts | Проверка поля Contract8EvaluationPackage «projectionFacts» |
| c10.failure.707 | Invalid field: Contract8EvaluationPackage.projectionFacts | Некорректное поле: Contract8EvaluationPackage «projectionFacts» |
| c10.field.708 | Contract8EvaluationPackage.records | Поле Contract8EvaluationPackage «records» |
| c10.validation.708 | Validate Contract8EvaluationPackage.records | Проверка поля Contract8EvaluationPackage «records» |
| c10.failure.708 | Invalid field: Contract8EvaluationPackage.records | Некорректное поле: Contract8EvaluationPackage «records» |
| c10.field.709 | Contract8EvaluationPackage.schemaVersion | Поле Contract8EvaluationPackage «schemaVersion» |
| c10.validation.709 | Validate Contract8EvaluationPackage.schemaVersion | Проверка поля Contract8EvaluationPackage «schemaVersion» |
| c10.failure.709 | Invalid field: Contract8EvaluationPackage.schemaVersion | Некорректное поле: Contract8EvaluationPackage «schemaVersion» |
| c10.field.710 | RawMechanismAssertionArtifact.rawAssertionId | Поле RawMechanismAssertionArtifact «rawAssertionId» |
| c10.validation.710 | Validate RawMechanismAssertionArtifact.rawAssertionId | Проверка поля RawMechanismAssertionArtifact «rawAssertionId» |
| c10.failure.710 | Invalid field: RawMechanismAssertionArtifact.rawAssertionId | Некорректное поле: RawMechanismAssertionArtifact «rawAssertionId» |
| c10.field.711 | RawMechanismAssertionArtifact.untouchedPayloadReference | Поле RawMechanismAssertionArtifact «untouchedPayloadReference» |
| c10.validation.711 | Validate RawMechanismAssertionArtifact.untouchedPayloadReference | Проверка поля RawMechanismAssertionArtifact «untouchedPayloadReference» |
| c10.failure.711 | Invalid field: RawMechanismAssertionArtifact.untouchedPayloadReference | Некорректное поле: RawMechanismAssertionArtifact «untouchedPayloadReference» |
| c10.field.712 | RawMechanismAssertionArtifact.semanticCaseId | Поле RawMechanismAssertionArtifact «semanticCaseId» |
| c10.validation.712 | Validate RawMechanismAssertionArtifact.semanticCaseId | Проверка поля RawMechanismAssertionArtifact «semanticCaseId» |
| c10.failure.712 | Invalid field: RawMechanismAssertionArtifact.semanticCaseId | Некорректное поле: RawMechanismAssertionArtifact «semanticCaseId» |
| c10.field.713 | RawMechanismAssertionArtifact.roomCaseId | Поле RawMechanismAssertionArtifact «roomCaseId» |
| c10.validation.713 | Validate RawMechanismAssertionArtifact.roomCaseId | Проверка поля RawMechanismAssertionArtifact «roomCaseId» |
| c10.failure.713 | Invalid field: RawMechanismAssertionArtifact.roomCaseId | Некорректное поле: RawMechanismAssertionArtifact «roomCaseId» |
| c10.field.714 | RawMechanismAssertionArtifact.contributingImageAssetIds | Поле RawMechanismAssertionArtifact «contributingImageAssetIds» |
| c10.validation.714 | Validate RawMechanismAssertionArtifact.contributingImageAssetIds | Проверка поля RawMechanismAssertionArtifact «contributingImageAssetIds» |
| c10.failure.714 | Invalid field: RawMechanismAssertionArtifact.contributingImageAssetIds | Некорректное поле: RawMechanismAssertionArtifact «contributingImageAssetIds» |
| c10.field.715 | RawMechanismAssertionArtifact.rawEmittedCode | Поле RawMechanismAssertionArtifact «rawEmittedCode» |
| c10.validation.715 | Validate RawMechanismAssertionArtifact.rawEmittedCode | Проверка поля RawMechanismAssertionArtifact «rawEmittedCode» |
| c10.failure.715 | Invalid field: RawMechanismAssertionArtifact.rawEmittedCode | Некорректное поле: RawMechanismAssertionArtifact «rawEmittedCode» |
| c10.field.716 | RawMechanismAssertionArtifact.rawSubject | Поле RawMechanismAssertionArtifact «rawSubject» |
| c10.validation.716 | Validate RawMechanismAssertionArtifact.rawSubject | Проверка поля RawMechanismAssertionArtifact «rawSubject» |
| c10.failure.716 | Invalid field: RawMechanismAssertionArtifact.rawSubject | Некорректное поле: RawMechanismAssertionArtifact «rawSubject» |
| c10.field.717 | RawMechanismAssertionArtifact.rawTarget | Поле RawMechanismAssertionArtifact «rawTarget» |
| c10.validation.717 | Validate RawMechanismAssertionArtifact.rawTarget | Проверка поля RawMechanismAssertionArtifact «rawTarget» |
| c10.failure.717 | Invalid field: RawMechanismAssertionArtifact.rawTarget | Некорректное поле: RawMechanismAssertionArtifact «rawTarget» |
| c10.field.718 | RawMechanismAssertionArtifact.rawLocus | Поле RawMechanismAssertionArtifact «rawLocus» |
| c10.validation.718 | Validate RawMechanismAssertionArtifact.rawLocus | Проверка поля RawMechanismAssertionArtifact «rawLocus» |
| c10.failure.718 | Invalid field: RawMechanismAssertionArtifact.rawLocus | Некорректное поле: RawMechanismAssertionArtifact «rawLocus» |
| c10.field.719 | RawMechanismAssertionArtifact.providerConfigurationReference | Поле RawMechanismAssertionArtifact «providerConfigurationReference» |
| c10.validation.719 | Validate RawMechanismAssertionArtifact.providerConfigurationReference | Проверка поля RawMechanismAssertionArtifact «providerConfigurationReference» |
| c10.failure.719 | Invalid field: RawMechanismAssertionArtifact.providerConfigurationReference | Некорректное поле: RawMechanismAssertionArtifact «providerConfigurationReference» |
| c10.field.720 | RawMechanismAssertionArtifact.evaluationConfigurationReference | Поле RawMechanismAssertionArtifact «evaluationConfigurationReference» |
| c10.validation.720 | Validate RawMechanismAssertionArtifact.evaluationConfigurationReference | Проверка поля RawMechanismAssertionArtifact «evaluationConfigurationReference» |
| c10.failure.720 | Invalid field: RawMechanismAssertionArtifact.evaluationConfigurationReference | Некорректное поле: RawMechanismAssertionArtifact «evaluationConfigurationReference» |
| c10.field.721 | RawMechanismAssertionArtifact.normalizationStatus | Поле RawMechanismAssertionArtifact «normalizationStatus» |
| c10.validation.721 | Validate RawMechanismAssertionArtifact.normalizationStatus | Проверка поля RawMechanismAssertionArtifact «normalizationStatus» |
| c10.failure.721 | Invalid field: RawMechanismAssertionArtifact.normalizationStatus | Некорректное поле: RawMechanismAssertionArtifact «normalizationStatus» |
| c10.field.722 | RawMechanismAssertionArtifact.producedNormalizedClaimLinks | Поле RawMechanismAssertionArtifact «producedNormalizedClaimLinks» |
| c10.validation.722 | Validate RawMechanismAssertionArtifact.producedNormalizedClaimLinks | Проверка поля RawMechanismAssertionArtifact «producedNormalizedClaimLinks» |
| c10.failure.722 | Invalid field: RawMechanismAssertionArtifact.producedNormalizedClaimLinks | Некорректное поле: RawMechanismAssertionArtifact «producedNormalizedClaimLinks» |
| c10.field.723 | RawMechanismAssertionArtifact.rawMalformedComparisonLink | Поле RawMechanismAssertionArtifact «rawMalformedComparisonLink» |
| c10.validation.723 | Validate RawMechanismAssertionArtifact.rawMalformedComparisonLink | Проверка поля RawMechanismAssertionArtifact «rawMalformedComparisonLink» |
| c10.failure.723 | Invalid field: RawMechanismAssertionArtifact.rawMalformedComparisonLink | Некорректное поле: RawMechanismAssertionArtifact «rawMalformedComparisonLink» |
| c10.field.724 | RawMechanismAssertionArtifact.assertionProjectionFactId | Поле RawMechanismAssertionArtifact «assertionProjectionFactId» |
| c10.validation.724 | Validate RawMechanismAssertionArtifact.assertionProjectionFactId | Проверка поля RawMechanismAssertionArtifact «assertionProjectionFactId» |
| c10.failure.724 | Invalid field: RawMechanismAssertionArtifact.assertionProjectionFactId | Некорректное поле: RawMechanismAssertionArtifact «assertionProjectionFactId» |
| c10.field.725 | RawMechanismAssertionArtifact.historyReference | Поле RawMechanismAssertionArtifact «historyReference» |
| c10.validation.725 | Validate RawMechanismAssertionArtifact.historyReference | Проверка поля RawMechanismAssertionArtifact «historyReference» |
| c10.failure.725 | Invalid field: RawMechanismAssertionArtifact.historyReference | Некорректное поле: RawMechanismAssertionArtifact «historyReference» |
| c10.field.730 | ETAPAssertionProjectionFact.projectionFactId | Поле ETAPAssertionProjectionFact «projectionFactId» |
| c10.validation.730 | Validate ETAPAssertionProjectionFact.projectionFactId | Проверка поля ETAPAssertionProjectionFact «projectionFactId» |
| c10.failure.730 | Invalid field: ETAPAssertionProjectionFact.projectionFactId | Некорректное поле: ETAPAssertionProjectionFact «projectionFactId» |
| c10.field.731 | ETAPAssertionProjectionFact.rawAssertionId | Поле ETAPAssertionProjectionFact «rawAssertionId» |
| c10.validation.731 | Validate ETAPAssertionProjectionFact.rawAssertionId | Проверка поля ETAPAssertionProjectionFact «rawAssertionId» |
| c10.failure.731 | Invalid field: ETAPAssertionProjectionFact.rawAssertionId | Некорректное поле: ETAPAssertionProjectionFact «rawAssertionId» |
| c10.field.732 | ETAPAssertionProjectionFact.normalizedProducedClaimLinks | Поле ETAPAssertionProjectionFact «normalizedProducedClaimLinks» |
| c10.validation.732 | Validate ETAPAssertionProjectionFact.normalizedProducedClaimLinks | Проверка поля ETAPAssertionProjectionFact «normalizedProducedClaimLinks» |
| c10.failure.732 | Invalid field: ETAPAssertionProjectionFact.normalizedProducedClaimLinks | Некорректное поле: ETAPAssertionProjectionFact «normalizedProducedClaimLinks» |
| c10.field.733 | ETAPAssertionProjectionFact.atomicComparisonLinks | Поле ETAPAssertionProjectionFact «atomicComparisonLinks» |
| c10.validation.733 | Validate ETAPAssertionProjectionFact.atomicComparisonLinks | Проверка поля ETAPAssertionProjectionFact «atomicComparisonLinks» |
| c10.failure.733 | Invalid field: ETAPAssertionProjectionFact.atomicComparisonLinks | Некорректное поле: ETAPAssertionProjectionFact «atomicComparisonLinks» |
| c10.field.734 | ETAPAssertionProjectionFact.rawMalformedComparisonLink | Поле ETAPAssertionProjectionFact «rawMalformedComparisonLink» |
| c10.validation.734 | Validate ETAPAssertionProjectionFact.rawMalformedComparisonLink | Проверка поля ETAPAssertionProjectionFact «rawMalformedComparisonLink» |
| c10.failure.734 | Invalid field: ETAPAssertionProjectionFact.rawMalformedComparisonLink | Некорректное поле: ETAPAssertionProjectionFact «rawMalformedComparisonLink» |
| c10.field.735 | ETAPAssertionProjectionFact.projectionResult | Поле ETAPAssertionProjectionFact «projectionResult» |
| c10.validation.735 | Validate ETAPAssertionProjectionFact.projectionResult | Проверка поля ETAPAssertionProjectionFact «projectionResult» |
| c10.failure.735 | Invalid field: ETAPAssertionProjectionFact.projectionResult | Некорректное поле: ETAPAssertionProjectionFact «projectionResult» |
| c10.field.736 | ETAPAssertionProjectionFact.versionConfigurationBundle | Поле ETAPAssertionProjectionFact «versionConfigurationBundle» |
| c10.validation.736 | Validate ETAPAssertionProjectionFact.versionConfigurationBundle | Проверка поля ETAPAssertionProjectionFact «versionConfigurationBundle» |
| c10.failure.736 | Invalid field: ETAPAssertionProjectionFact.versionConfigurationBundle | Некорректное поле: ETAPAssertionProjectionFact «versionConfigurationBundle» |
| c10.field.737 | ETAPAssertionProjectionFact.etapConsumptionState | Поле ETAPAssertionProjectionFact «etapConsumptionState» |
| c10.validation.737 | Validate ETAPAssertionProjectionFact.etapConsumptionState | Проверка поля ETAPAssertionProjectionFact «etapConsumptionState» |
| c10.failure.737 | Invalid field: ETAPAssertionProjectionFact.etapConsumptionState | Некорректное поле: ETAPAssertionProjectionFact «etapConsumptionState» |
| c10.field.740 | C8EvaluationRecord.recordId | Поле C8EvaluationRecord «recordId» |
| c10.validation.740 | Validate C8EvaluationRecord.recordId | Проверка поля C8EvaluationRecord «recordId» |
| c10.failure.740 | Invalid field: C8EvaluationRecord.recordId | Некорректное поле: C8EvaluationRecord «recordId» |
| c10.field.741 | C8EvaluationRecord.recordTypeIdentity | Поле C8EvaluationRecord «recordTypeIdentity» |
| c10.validation.741 | Validate C8EvaluationRecord.recordTypeIdentity | Проверка поля C8EvaluationRecord «recordTypeIdentity» |
| c10.failure.741 | Invalid field: C8EvaluationRecord.recordTypeIdentity | Некорректное поле: C8EvaluationRecord «recordTypeIdentity» |
| c10.field.742 | C8EvaluationRecord.semanticCaseId | Поле C8EvaluationRecord «semanticCaseId» |
| c10.validation.742 | Validate C8EvaluationRecord.semanticCaseId | Проверка поля C8EvaluationRecord «semanticCaseId» |
| c10.failure.742 | Invalid field: C8EvaluationRecord.semanticCaseId | Некорректное поле: C8EvaluationRecord «semanticCaseId» |
| c10.field.743 | C8EvaluationRecord.roomCaseId | Поле C8EvaluationRecord «roomCaseId» |
| c10.validation.743 | Validate C8EvaluationRecord.roomCaseId | Проверка поля C8EvaluationRecord «roomCaseId» |
| c10.failure.743 | Invalid field: C8EvaluationRecord.roomCaseId | Некорректное поле: C8EvaluationRecord «roomCaseId» |
| c10.field.744 | C8EvaluationRecord.claimCodeIdentity | Поле C8EvaluationRecord «claimCodeIdentity» |
| c10.validation.744 | Validate C8EvaluationRecord.claimCodeIdentity | Проверка поля C8EvaluationRecord «claimCodeIdentity» |
| c10.failure.744 | Invalid field: C8EvaluationRecord.claimCodeIdentity | Некорректное поле: C8EvaluationRecord «claimCodeIdentity» |
| c10.field.745 | C8EvaluationRecord.dispositionIdentity | Поле C8EvaluationRecord «dispositionIdentity» |
| c10.validation.745 | Validate C8EvaluationRecord.dispositionIdentity | Проверка поля C8EvaluationRecord «dispositionIdentity» |
| c10.failure.745 | Invalid field: C8EvaluationRecord.dispositionIdentity | Некорректное поле: C8EvaluationRecord «dispositionIdentity» |
| c10.field.746 | C8EvaluationRecord.requirementLevelIdentity | Поле C8EvaluationRecord «requirementLevelIdentity» |
| c10.validation.746 | Validate C8EvaluationRecord.requirementLevelIdentity | Проверка поля C8EvaluationRecord «requirementLevelIdentity» |
| c10.failure.746 | Invalid field: C8EvaluationRecord.requirementLevelIdentity | Некорректное поле: C8EvaluationRecord «requirementLevelIdentity» |
| c10.field.747 | C8EvaluationRecord.assertionScopeIdentity | Поле C8EvaluationRecord «assertionScopeIdentity» |
| c10.validation.747 | Validate C8EvaluationRecord.assertionScopeIdentity | Проверка поля C8EvaluationRecord «assertionScopeIdentity» |
| c10.failure.747 | Invalid field: C8EvaluationRecord.assertionScopeIdentity | Некорректное поле: C8EvaluationRecord «assertionScopeIdentity» |
| c10.field.748 | C8EvaluationRecord.subject | Поле C8EvaluationRecord «subject» |
| c10.validation.748 | Validate C8EvaluationRecord.subject | Проверка поля C8EvaluationRecord «subject» |
| c10.failure.748 | Invalid field: C8EvaluationRecord.subject | Некорректное поле: C8EvaluationRecord «subject» |
| c10.field.749 | C8EvaluationRecord.target | Поле C8EvaluationRecord «target» |
| c10.validation.749 | Validate C8EvaluationRecord.target | Проверка поля C8EvaluationRecord «target» |
| c10.failure.749 | Invalid field: C8EvaluationRecord.target | Некорректное поле: C8EvaluationRecord «target» |
| c10.field.750 | C8EvaluationRecord.locus | Поле C8EvaluationRecord «locus» |
| c10.validation.750 | Validate C8EvaluationRecord.locus | Проверка поля C8EvaluationRecord «locus» |
| c10.failure.750 | Invalid field: C8EvaluationRecord.locus | Некорректное поле: C8EvaluationRecord «locus» |
| c10.field.751 | C8EvaluationRecord.expectedState | Поле C8EvaluationRecord «expectedState» |
| c10.validation.751 | Validate C8EvaluationRecord.expectedState | Проверка поля C8EvaluationRecord «expectedState» |
| c10.failure.751 | Invalid field: C8EvaluationRecord.expectedState | Некорректное поле: C8EvaluationRecord «expectedState» |
| c10.field.752 | C8EvaluationRecord.rawAssertionId | Поле C8EvaluationRecord «rawAssertionId» |
| c10.validation.752 | Validate C8EvaluationRecord.rawAssertionId | Проверка поля C8EvaluationRecord «rawAssertionId» |
| c10.failure.752 | Invalid field: C8EvaluationRecord.rawAssertionId | Некорректное поле: C8EvaluationRecord «rawAssertionId» |
| c10.field.753 | C8EvaluationRecord.normalizationTransformationId | Поле C8EvaluationRecord «normalizationTransformationId» |
| c10.validation.753 | Validate C8EvaluationRecord.normalizationTransformationId | Проверка поля C8EvaluationRecord «normalizationTransformationId» |
| c10.failure.753 | Invalid field: C8EvaluationRecord.normalizationTransformationId | Некорректное поле: C8EvaluationRecord «normalizationTransformationId» |
| c10.field.754 | C8EvaluationRecord.normalizedAtomicInterpretationId | Поле C8EvaluationRecord «normalizedAtomicInterpretationId» |
| c10.validation.754 | Validate C8EvaluationRecord.normalizedAtomicInterpretationId | Проверка поля C8EvaluationRecord «normalizedAtomicInterpretationId» |
| c10.failure.754 | Invalid field: C8EvaluationRecord.normalizedAtomicInterpretationId | Некорректное поле: C8EvaluationRecord «normalizedAtomicInterpretationId» |
| c10.field.755 | C8EvaluationRecord.expectationOrProhibitionRecordId | Поле C8EvaluationRecord «expectationOrProhibitionRecordId» |
| c10.validation.755 | Validate C8EvaluationRecord.expectationOrProhibitionRecordId | Проверка поля C8EvaluationRecord «expectationOrProhibitionRecordId» |
| c10.failure.755 | Invalid field: C8EvaluationRecord.expectationOrProhibitionRecordId | Некорректное поле: C8EvaluationRecord «expectationOrProhibitionRecordId» |
| c10.field.756 | C8EvaluationRecord.matchedProducedRecordId | Поле C8EvaluationRecord «matchedProducedRecordId» |
| c10.validation.756 | Validate C8EvaluationRecord.matchedProducedRecordId | Проверка поля C8EvaluationRecord «matchedProducedRecordId» |
| c10.failure.756 | Invalid field: C8EvaluationRecord.matchedProducedRecordId | Некорректное поле: C8EvaluationRecord «matchedProducedRecordId» |
| c10.field.757 | C8EvaluationRecord.rawAssertionDefectLink | Поле C8EvaluationRecord «rawAssertionDefectLink» |
| c10.validation.757 | Validate C8EvaluationRecord.rawAssertionDefectLink | Проверка поля C8EvaluationRecord «rawAssertionDefectLink» |
| c10.failure.757 | Invalid field: C8EvaluationRecord.rawAssertionDefectLink | Некорректное поле: C8EvaluationRecord «rawAssertionDefectLink» |
| c10.field.758 | C8EvaluationRecord.primaryComparisonResultIdentity | Поле C8EvaluationRecord «primaryComparisonResultIdentity» |
| c10.validation.758 | Validate C8EvaluationRecord.primaryComparisonResultIdentity | Проверка поля C8EvaluationRecord «primaryComparisonResultIdentity» |
| c10.failure.758 | Invalid field: C8EvaluationRecord.primaryComparisonResultIdentity | Некорректное поле: C8EvaluationRecord «primaryComparisonResultIdentity» |
| c10.field.759 | C8EvaluationRecord.secondaryFailureIdentities | Поле C8EvaluationRecord «secondaryFailureIdentities» |
| c10.validation.759 | Validate C8EvaluationRecord.secondaryFailureIdentities | Проверка поля C8EvaluationRecord «secondaryFailureIdentities» |
| c10.failure.759 | Invalid field: C8EvaluationRecord.secondaryFailureIdentities | Некорректное поле: C8EvaluationRecord «secondaryFailureIdentities» |
| c10.field.760 | C8EvaluationRecord.evidenceReferences | Поле C8EvaluationRecord «evidenceReferences» |
| c10.validation.760 | Validate C8EvaluationRecord.evidenceReferences | Проверка поля C8EvaluationRecord «evidenceReferences» |
| c10.failure.760 | Invalid field: C8EvaluationRecord.evidenceReferences | Некорректное поле: C8EvaluationRecord «evidenceReferences» |
| c10.field.761 | C8EvaluationRecord.contributingImageAssetIds | Поле C8EvaluationRecord «contributingImageAssetIds» |
| c10.validation.761 | Validate C8EvaluationRecord.contributingImageAssetIds | Проверка поля C8EvaluationRecord «contributingImageAssetIds» |
| c10.failure.761 | Invalid field: C8EvaluationRecord.contributingImageAssetIds | Некорректное поле: C8EvaluationRecord «contributingImageAssetIds» |
| c10.field.762 | C8EvaluationRecord.subsetReference | Поле C8EvaluationRecord «subsetReference» |
| c10.validation.762 | Validate C8EvaluationRecord.subsetReference | Проверка поля C8EvaluationRecord «subsetReference» |
| c10.failure.762 | Invalid field: C8EvaluationRecord.subsetReference | Некорректное поле: C8EvaluationRecord «subsetReference» |
| c10.field.763 | C8EvaluationRecord.lineageReference | Поле C8EvaluationRecord «lineageReference» |
| c10.validation.763 | Validate C8EvaluationRecord.lineageReference | Проверка поля C8EvaluationRecord «lineageReference» |
| c10.failure.763 | Invalid field: C8EvaluationRecord.lineageReference | Некорректное поле: C8EvaluationRecord «lineageReference» |
| c10.field.764 | C8EvaluationRecord.contractSemanticVersionReference | Поле C8EvaluationRecord «contractSemanticVersionReference» |
| c10.validation.764 | Validate C8EvaluationRecord.contractSemanticVersionReference | Проверка поля C8EvaluationRecord «contractSemanticVersionReference» |
| c10.failure.764 | Invalid field: C8EvaluationRecord.contractSemanticVersionReference | Некорректное поле: C8EvaluationRecord «contractSemanticVersionReference» |
| c10.field.765 | C8EvaluationRecord.claimVocabularyVersionReference | Поле C8EvaluationRecord «claimVocabularyVersionReference» |
| c10.validation.765 | Validate C8EvaluationRecord.claimVocabularyVersionReference | Проверка поля C8EvaluationRecord «claimVocabularyVersionReference» |
| c10.failure.765 | Invalid field: C8EvaluationRecord.claimVocabularyVersionReference | Некорректное поле: C8EvaluationRecord «claimVocabularyVersionReference» |
| c10.field.766 | C8EvaluationRecord.ruleRegistryVersionReference | Поле C8EvaluationRecord «ruleRegistryVersionReference» |
| c10.validation.766 | Validate C8EvaluationRecord.ruleRegistryVersionReference | Проверка поля C8EvaluationRecord «ruleRegistryVersionReference» |
| c10.failure.766 | Invalid field: C8EvaluationRecord.ruleRegistryVersionReference | Некорректное поле: C8EvaluationRecord «ruleRegistryVersionReference» |
| c10.field.767 | C8EvaluationRecord.validationRegistryVersionReference | Поле C8EvaluationRecord «validationRegistryVersionReference» |
| c10.validation.767 | Validate C8EvaluationRecord.validationRegistryVersionReference | Проверка поля C8EvaluationRecord «validationRegistryVersionReference» |
| c10.failure.767 | Invalid field: C8EvaluationRecord.validationRegistryVersionReference | Некорректное поле: C8EvaluationRecord «validationRegistryVersionReference» |
| c10.field.768 | C8EvaluationRecord.comparisonPolicyVersionReference | Поле C8EvaluationRecord «comparisonPolicyVersionReference» |
| c10.validation.768 | Validate C8EvaluationRecord.comparisonPolicyVersionReference | Проверка поля C8EvaluationRecord «comparisonPolicyVersionReference» |
| c10.failure.768 | Invalid field: C8EvaluationRecord.comparisonPolicyVersionReference | Некорректное поле: C8EvaluationRecord «comparisonPolicyVersionReference» |
| c10.field.769 | C8EvaluationRecord.providerConfigurationReference | Поле C8EvaluationRecord «providerConfigurationReference» |
| c10.validation.769 | Validate C8EvaluationRecord.providerConfigurationReference | Проверка поля C8EvaluationRecord «providerConfigurationReference» |
| c10.failure.769 | Invalid field: C8EvaluationRecord.providerConfigurationReference | Некорректное поле: C8EvaluationRecord «providerConfigurationReference» |
| c10.field.770 | C8EvaluationRecord.evaluationConfigurationReference | Поле C8EvaluationRecord «evaluationConfigurationReference» |
| c10.validation.770 | Validate C8EvaluationRecord.evaluationConfigurationReference | Проверка поля C8EvaluationRecord «evaluationConfigurationReference» |
| c10.failure.770 | Invalid field: C8EvaluationRecord.evaluationConfigurationReference | Некорректное поле: C8EvaluationRecord «evaluationConfigurationReference» |
| c10.field.771 | C8EvaluationRecord.lifecycle | Поле C8EvaluationRecord «lifecycle» |
| c10.validation.771 | Validate C8EvaluationRecord.lifecycle | Проверка поля C8EvaluationRecord «lifecycle» |
| c10.failure.771 | Invalid field: C8EvaluationRecord.lifecycle | Некорректное поле: C8EvaluationRecord «lifecycle» |
| c10.field.772 | C8EvaluationRecord.adjudicationRecordId | Поле C8EvaluationRecord «adjudicationRecordId» |
| c10.validation.772 | Validate C8EvaluationRecord.adjudicationRecordId | Проверка поля C8EvaluationRecord «adjudicationRecordId» |
| c10.failure.772 | Invalid field: C8EvaluationRecord.adjudicationRecordId | Некорректное поле: C8EvaluationRecord «adjudicationRecordId» |
| c10.field.773 | C8EvaluationRecord.replacementRecordId | Поле C8EvaluationRecord «replacementRecordId» |
| c10.validation.773 | Validate C8EvaluationRecord.replacementRecordId | Проверка поля C8EvaluationRecord «replacementRecordId» |
| c10.failure.773 | Invalid field: C8EvaluationRecord.replacementRecordId | Некорректное поле: C8EvaluationRecord «replacementRecordId» |
| c10.field.774 | C8LifecycleBundle.lifecycleStateIdentity | Поле C8LifecycleBundle «lifecycleStateIdentity» |
| c10.validation.774 | Validate C8LifecycleBundle.lifecycleStateIdentity | Проверка поля C8LifecycleBundle «lifecycleStateIdentity» |
| c10.failure.774 | Invalid field: C8LifecycleBundle.lifecycleStateIdentity | Некорректное поле: C8LifecycleBundle «lifecycleStateIdentity» |
| c10.field.775 | C8LifecycleBundle.recordRevisionId | Поле C8LifecycleBundle «recordRevisionId» |
| c10.validation.775 | Validate C8LifecycleBundle.recordRevisionId | Проверка поля C8LifecycleBundle «recordRevisionId» |
| c10.failure.775 | Invalid field: C8LifecycleBundle.recordRevisionId | Некорректное поле: C8LifecycleBundle «recordRevisionId» |
| c10.field.776 | C8LifecycleBundle.predecessorRecordId | Поле C8LifecycleBundle «predecessorRecordId» |
| c10.validation.776 | Validate C8LifecycleBundle.predecessorRecordId | Проверка поля C8LifecycleBundle «predecessorRecordId» |
| c10.failure.776 | Invalid field: C8LifecycleBundle.predecessorRecordId | Некорректное поле: C8LifecycleBundle «predecessorRecordId» |
| c10.field.777 | C8LifecycleBundle.successorRecordId | Поле C8LifecycleBundle «successorRecordId» |
| c10.validation.777 | Validate C8LifecycleBundle.successorRecordId | Проверка поля C8LifecycleBundle «successorRecordId» |
| c10.failure.777 | Invalid field: C8LifecycleBundle.successorRecordId | Некорректное поле: C8LifecycleBundle «successorRecordId» |
| c10.field.778 | C8LifecycleBundle.sealedAt | Поле C8LifecycleBundle «sealedAt» |
| c10.validation.778 | Validate C8LifecycleBundle.sealedAt | Проверка поля C8LifecycleBundle «sealedAt» |
| c10.failure.778 | Invalid field: C8LifecycleBundle.sealedAt | Некорректное поле: C8LifecycleBundle «sealedAt» |
| c10.field.779 | C8LifecycleBundle.sealIntegrityReference | Поле C8LifecycleBundle «sealIntegrityReference» |
| c10.validation.779 | Validate C8LifecycleBundle.sealIntegrityReference | Проверка поля C8LifecycleBundle «sealIntegrityReference» |
| c10.failure.779 | Invalid field: C8LifecycleBundle.sealIntegrityReference | Некорректное поле: C8LifecycleBundle «sealIntegrityReference» |
| c10.field.780 | C8LifecycleBundle.historyReference | Поле C8LifecycleBundle «historyReference» |
| c10.validation.780 | Validate C8LifecycleBundle.historyReference | Проверка поля C8LifecycleBundle «historyReference» |
| c10.failure.780 | Invalid field: C8LifecycleBundle.historyReference | Некорректное поле: C8LifecycleBundle «historyReference» |
| c10.field.781 | C8LifecycleBundle.exclusionReasonIdentity | Поле C8LifecycleBundle «exclusionReasonIdentity» |
| c10.validation.781 | Validate C8LifecycleBundle.exclusionReasonIdentity | Проверка поля C8LifecycleBundle «exclusionReasonIdentity» |
| c10.failure.781 | Invalid field: C8LifecycleBundle.exclusionReasonIdentity | Некорректное поле: C8LifecycleBundle «exclusionReasonIdentity» |
| c10.field.782 | C8LifecycleBundle.invalidationReasonIdentity | Поле C8LifecycleBundle «invalidationReasonIdentity» |
| c10.validation.782 | Validate C8LifecycleBundle.invalidationReasonIdentity | Проверка поля C8LifecycleBundle «invalidationReasonIdentity» |
| c10.failure.782 | Invalid field: C8LifecycleBundle.invalidationReasonIdentity | Некорректное поле: C8LifecycleBundle «invalidationReasonIdentity» |
| c10.field.783 | C8LifecycleBundle.replacementReasonIdentity | Поле C8LifecycleBundle «replacementReasonIdentity» |
| c10.validation.783 | Validate C8LifecycleBundle.replacementReasonIdentity | Проверка поля C8LifecycleBundle «replacementReasonIdentity» |
| c10.failure.783 | Invalid field: C8LifecycleBundle.replacementReasonIdentity | Некорректное поле: C8LifecycleBundle «replacementReasonIdentity» |
| c10.field.784 | C8LifecycleBundle.transitionEvents | Поле C8LifecycleBundle «transitionEvents» |
| c10.validation.784 | Validate C8LifecycleBundle.transitionEvents | Проверка поля C8LifecycleBundle «transitionEvents» |
| c10.failure.784 | Invalid field: C8LifecycleBundle.transitionEvents | Некорректное поле: C8LifecycleBundle «transitionEvents» |
| c10.field.785 | C8LifecycleTransitionEvent.transitionEventId | Поле C8LifecycleTransitionEvent «transitionEventId» |
| c10.validation.785 | Validate C8LifecycleTransitionEvent.transitionEventId | Проверка поля C8LifecycleTransitionEvent «transitionEventId» |
| c10.failure.785 | Invalid field: C8LifecycleTransitionEvent.transitionEventId | Некорректное поле: C8LifecycleTransitionEvent «transitionEventId» |
| c10.field.786 | C8LifecycleTransitionEvent.fromStateIdentity | Поле C8LifecycleTransitionEvent «fromStateIdentity» |
| c10.validation.786 | Validate C8LifecycleTransitionEvent.fromStateIdentity | Проверка поля C8LifecycleTransitionEvent «fromStateIdentity» |
| c10.failure.786 | Invalid field: C8LifecycleTransitionEvent.fromStateIdentity | Некорректное поле: C8LifecycleTransitionEvent «fromStateIdentity» |
| c10.field.787 | C8LifecycleTransitionEvent.toStateIdentity | Поле C8LifecycleTransitionEvent «toStateIdentity» |
| c10.validation.787 | Validate C8LifecycleTransitionEvent.toStateIdentity | Проверка поля C8LifecycleTransitionEvent «toStateIdentity» |
| c10.failure.787 | Invalid field: C8LifecycleTransitionEvent.toStateIdentity | Некорректное поле: C8LifecycleTransitionEvent «toStateIdentity» |
| c10.field.788 | C8LifecycleTransitionEvent.transitionDisposition | Поле C8LifecycleTransitionEvent «transitionDisposition» |
| c10.validation.788 | Validate C8LifecycleTransitionEvent.transitionDisposition | Проверка поля C8LifecycleTransitionEvent «transitionDisposition» |
| c10.failure.788 | Invalid field: C8LifecycleTransitionEvent.transitionDisposition | Некорректное поле: C8LifecycleTransitionEvent «transitionDisposition» |
| c10.field.789 | C8LifecycleTransitionEvent.conditionEvidenceReferences | Поле C8LifecycleTransitionEvent «conditionEvidenceReferences» |
| c10.validation.789 | Validate C8LifecycleTransitionEvent.conditionEvidenceReferences | Проверка поля C8LifecycleTransitionEvent «conditionEvidenceReferences» |
| c10.failure.789 | Invalid field: C8LifecycleTransitionEvent.conditionEvidenceReferences | Некорректное поле: C8LifecycleTransitionEvent «conditionEvidenceReferences» |
| c10.field.790 | C8LifecycleTransitionEvent.actorRoleReference | Поле C8LifecycleTransitionEvent «actorRoleReference» |
| c10.validation.790 | Validate C8LifecycleTransitionEvent.actorRoleReference | Проверка поля C8LifecycleTransitionEvent «actorRoleReference» |
| c10.failure.790 | Invalid field: C8LifecycleTransitionEvent.actorRoleReference | Некорректное поле: C8LifecycleTransitionEvent «actorRoleReference» |
| c10.field.791 | C8LifecycleTransitionEvent.occurredAt | Поле C8LifecycleTransitionEvent «occurredAt» |
| c10.validation.791 | Validate C8LifecycleTransitionEvent.occurredAt | Проверка поля C8LifecycleTransitionEvent «occurredAt» |
| c10.failure.791 | Invalid field: C8LifecycleTransitionEvent.occurredAt | Некорректное поле: C8LifecycleTransitionEvent «occurredAt» |
| c10.field.792 | C8LifecycleTransitionEvent.eventIntegrityReference | Поле C8LifecycleTransitionEvent «eventIntegrityReference» |
| c10.validation.792 | Validate C8LifecycleTransitionEvent.eventIntegrityReference | Проверка поля C8LifecycleTransitionEvent «eventIntegrityReference» |
| c10.failure.792 | Invalid field: C8LifecycleTransitionEvent.eventIntegrityReference | Некорректное поле: C8LifecycleTransitionEvent «eventIntegrityReference» |
| c10.field.800 | ComparisonOutcome.comparisonId | Поле ComparisonOutcome «comparisonId» |
| c10.validation.800 | Validate ComparisonOutcome.comparisonId | Проверка поля ComparisonOutcome «comparisonId» |
| c10.failure.800 | Invalid field: ComparisonOutcome.comparisonId | Некорректное поле: ComparisonOutcome «comparisonId» |
| c10.field.801 | ComparisonOutcome.fixtureId | Поле ComparisonOutcome «fixtureId» |
| c10.validation.801 | Validate ComparisonOutcome.fixtureId | Проверка поля ComparisonOutcome «fixtureId» |
| c10.failure.801 | Invalid field: ComparisonOutcome.fixtureId | Некорректное поле: ComparisonOutcome «fixtureId» |
| c10.field.802 | ComparisonOutcome.entryIdentity | Поле ComparisonOutcome «entryIdentity» |
| c10.validation.802 | Validate ComparisonOutcome.entryIdentity | Проверка поля ComparisonOutcome «entryIdentity» |
| c10.failure.802 | Invalid field: ComparisonOutcome.entryIdentity | Некорректное поле: ComparisonOutcome «entryIdentity» |
| c10.field.803 | ComparisonOutcome.observedResultReference | Поле ComparisonOutcome «observedResultReference» |
| c10.validation.803 | Validate ComparisonOutcome.observedResultReference | Проверка поля ComparisonOutcome «observedResultReference» |
| c10.failure.803 | Invalid field: ComparisonOutcome.observedResultReference | Некорректное поле: ComparisonOutcome «observedResultReference» |
| c10.field.804 | ComparisonOutcome.comparisonOutcomeIdentity | Поле ComparisonOutcome «comparisonOutcomeIdentity» |
| c10.validation.804 | Validate ComparisonOutcome.comparisonOutcomeIdentity | Проверка поля ComparisonOutcome «comparisonOutcomeIdentity» |
| c10.failure.804 | Invalid field: ComparisonOutcome.comparisonOutcomeIdentity | Некорректное поле: ComparisonOutcome «comparisonOutcomeIdentity» |
| c10.field.805 | ComparisonOutcome.primaryFailureIdentity | Поле ComparisonOutcome «primaryFailureIdentity» |
| c10.validation.805 | Validate ComparisonOutcome.primaryFailureIdentity | Проверка поля ComparisonOutcome «primaryFailureIdentity» |
| c10.failure.805 | Invalid field: ComparisonOutcome.primaryFailureIdentity | Некорректное поле: ComparisonOutcome «primaryFailureIdentity» |
| c10.field.806 | ComparisonOutcome.retryabilityAssessment | Поле ComparisonOutcome «retryabilityAssessment» |
| c10.validation.806 | Validate ComparisonOutcome.retryabilityAssessment | Проверка поля ComparisonOutcome «retryabilityAssessment» |
| c10.failure.806 | Invalid field: ComparisonOutcome.retryabilityAssessment | Некорректное поле: ComparisonOutcome «retryabilityAssessment» |
| c10.field.807 | ComparisonOutcome.subsetRole | Поле ComparisonOutcome «subsetRole» |
| c10.validation.807 | Validate ComparisonOutcome.subsetRole | Проверка поля ComparisonOutcome «subsetRole» |
| c10.failure.807 | Invalid field: ComparisonOutcome.subsetRole | Некорректное поле: ComparisonOutcome «subsetRole» |
| c10.field.808 | ComparisonOutcome.sealedAt | Поле ComparisonOutcome «sealedAt» |
| c10.validation.808 | Validate ComparisonOutcome.sealedAt | Проверка поля ComparisonOutcome «sealedAt» |
| c10.failure.808 | Invalid field: ComparisonOutcome.sealedAt | Некорректное поле: ComparisonOutcome «sealedAt» |
| c10.field.809 | ComparisonOutcome.sealIntegrityReference | Поле ComparisonOutcome «sealIntegrityReference» |
| c10.validation.809 | Validate ComparisonOutcome.sealIntegrityReference | Проверка поля ComparisonOutcome «sealIntegrityReference» |
| c10.failure.809 | Invalid field: ComparisonOutcome.sealIntegrityReference | Некорректное поле: ComparisonOutcome «sealIntegrityReference» |
| c10.field.810 | ComparisonOutcome.schemaVersion | Поле ComparisonOutcome «schemaVersion» |
| c10.validation.810 | Validate ComparisonOutcome.schemaVersion | Проверка поля ComparisonOutcome «schemaVersion» |
| c10.failure.810 | Invalid field: ComparisonOutcome.schemaVersion | Некорректное поле: ComparisonOutcome «schemaVersion» |
| c10.field.811 | ComparisonOutcome.contractVersionReference | Поле ComparisonOutcome «contractVersionReference» |
| c10.validation.811 | Validate ComparisonOutcome.contractVersionReference | Проверка поля ComparisonOutcome «contractVersionReference» |
| c10.failure.811 | Invalid field: ComparisonOutcome.contractVersionReference | Некорректное поле: ComparisonOutcome «contractVersionReference» |
| c10.field.812 | ComparisonOutcome.governingSourceIdentityReferences | Поле ComparisonOutcome «governingSourceIdentityReferences» |
| c10.validation.812 | Validate ComparisonOutcome.governingSourceIdentityReferences | Проверка поля ComparisonOutcome «governingSourceIdentityReferences» |
| c10.failure.812 | Invalid field: ComparisonOutcome.governingSourceIdentityReferences | Некорректное поле: ComparisonOutcome «governingSourceIdentityReferences» |
| c10.field.813 | ComparisonOutcome.suiteIdentity | Поле ComparisonOutcome «suiteIdentity» |
| c10.validation.813 | Validate ComparisonOutcome.suiteIdentity | Проверка поля ComparisonOutcome «suiteIdentity» |
| c10.failure.813 | Invalid field: ComparisonOutcome.suiteIdentity | Некорректное поле: ComparisonOutcome «suiteIdentity» |
| c10.field.814 | ComparisonOutcome.subtypeToken | Поле ComparisonOutcome «subtypeToken» |
| c10.validation.814 | Validate ComparisonOutcome.subtypeToken | Проверка поля ComparisonOutcome «subtypeToken» |
| c10.failure.814 | Invalid field: ComparisonOutcome.subtypeToken | Некорректное поле: ComparisonOutcome «subtypeToken» |
| c10.field.815 | ComparisonOutcome.expectedResultFamily | Поле ComparisonOutcome «expectedResultFamily» |
| c10.validation.815 | Validate ComparisonOutcome.expectedResultFamily | Проверка поля ComparisonOutcome «expectedResultFamily» |
| c10.failure.815 | Invalid field: ComparisonOutcome.expectedResultFamily | Некорректное поле: ComparisonOutcome «expectedResultFamily» |
| c10.field.816 | ComparisonOutcome.expectedStage | Поле ComparisonOutcome «expectedStage» |
| c10.validation.816 | Validate ComparisonOutcome.expectedStage | Проверка поля ComparisonOutcome «expectedStage» |
| c10.failure.816 | Invalid field: ComparisonOutcome.expectedStage | Некорректное поле: ComparisonOutcome «expectedStage» |
| c10.field.817 | ComparisonOutcome.expectedReasonToken | Поле ComparisonOutcome «expectedReasonToken» |
| c10.validation.817 | Validate ComparisonOutcome.expectedReasonToken | Проверка поля ComparisonOutcome «expectedReasonToken» |
| c10.failure.817 | Invalid field: ComparisonOutcome.expectedReasonToken | Некорректное поле: ComparisonOutcome «expectedReasonToken» |
| c10.field.818 | ComparisonOutcome.expectedRetryabilityIdentity | Поле ComparisonOutcome «expectedRetryabilityIdentity» |
| c10.validation.818 | Validate ComparisonOutcome.expectedRetryabilityIdentity | Проверка поля ComparisonOutcome «expectedRetryabilityIdentity» |
| c10.failure.818 | Invalid field: ComparisonOutcome.expectedRetryabilityIdentity | Некорректное поле: ComparisonOutcome «expectedRetryabilityIdentity» |
| c10.field.819 | ComparisonOutcome.prohibitedOutcomeIdentities | Поле ComparisonOutcome «prohibitedOutcomeIdentities» |
| c10.validation.819 | Validate ComparisonOutcome.prohibitedOutcomeIdentities | Проверка поля ComparisonOutcome «prohibitedOutcomeIdentities» |
| c10.failure.819 | Invalid field: ComparisonOutcome.prohibitedOutcomeIdentities | Некорректное поле: ComparisonOutcome «prohibitedOutcomeIdentities» |
| c10.field.820 | ComparisonOutcome.fixtureLineageId | Поле ComparisonOutcome «fixtureLineageId» |
| c10.validation.820 | Validate ComparisonOutcome.fixtureLineageId | Проверка поля ComparisonOutcome «fixtureLineageId» |
| c10.failure.820 | Invalid field: ComparisonOutcome.fixtureLineageId | Некорректное поле: ComparisonOutcome «fixtureLineageId» |
| c10.field.821 | ComparisonOutcome.observedResultFamily | Поле ComparisonOutcome «observedResultFamily» |
| c10.validation.821 | Validate ComparisonOutcome.observedResultFamily | Проверка поля ComparisonOutcome «observedResultFamily» |
| c10.failure.821 | Invalid field: ComparisonOutcome.observedResultFamily | Некорректное поле: ComparisonOutcome «observedResultFamily» |
| c10.field.822 | ComparisonOutcome.observedStage | Поле ComparisonOutcome «observedStage» |
| c10.validation.822 | Validate ComparisonOutcome.observedStage | Проверка поля ComparisonOutcome «observedStage» |
| c10.failure.822 | Invalid field: ComparisonOutcome.observedStage | Некорректное поле: ComparisonOutcome «observedStage» |
| c10.field.823 | ComparisonOutcome.observedReasonToken | Поле ComparisonOutcome «observedReasonToken» |
| c10.validation.823 | Validate ComparisonOutcome.observedReasonToken | Проверка поля ComparisonOutcome «observedReasonToken» |
| c10.failure.823 | Invalid field: ComparisonOutcome.observedReasonToken | Некорректное поле: ComparisonOutcome «observedReasonToken» |
| c10.field.824 | ComparisonOutcome.observedRetryabilityIdentity | Поле ComparisonOutcome «observedRetryabilityIdentity» |
| c10.validation.824 | Validate ComparisonOutcome.observedRetryabilityIdentity | Проверка поля ComparisonOutcome «observedRetryabilityIdentity» |
| c10.failure.824 | Invalid field: ComparisonOutcome.observedRetryabilityIdentity | Некорректное поле: ComparisonOutcome «observedRetryabilityIdentity» |
| c10.field.825 | ComparisonOutcome.comparisonValidationIdentity | Поле ComparisonOutcome «comparisonValidationIdentity» |
| c10.validation.825 | Validate ComparisonOutcome.comparisonValidationIdentity | Проверка поля ComparisonOutcome «comparisonValidationIdentity» |
| c10.failure.825 | Invalid field: ComparisonOutcome.comparisonValidationIdentity | Некорректное поле: ComparisonOutcome «comparisonValidationIdentity» |
| c10.field.826 | ComparisonOutcome.primaryEscalationIdentity | Поле ComparisonOutcome «primaryEscalationIdentity» |
| c10.validation.826 | Validate ComparisonOutcome.primaryEscalationIdentity | Проверка поля ComparisonOutcome «primaryEscalationIdentity» |
| c10.failure.826 | Invalid field: ComparisonOutcome.primaryEscalationIdentity | Некорректное поле: ComparisonOutcome «primaryEscalationIdentity» |
| c10.field.827 | ComparisonOutcome.secondaryFailureIdentities | Поле ComparisonOutcome «secondaryFailureIdentities» |
| c10.validation.827 | Validate ComparisonOutcome.secondaryFailureIdentities | Проверка поля ComparisonOutcome «secondaryFailureIdentities» |
| c10.failure.827 | Invalid field: ComparisonOutcome.secondaryFailureIdentities | Некорректное поле: ComparisonOutcome «secondaryFailureIdentities» |
| c10.field.828 | ComparisonOutcome.countConsumptionIdentity | Поле ComparisonOutcome «countConsumptionIdentity» |
| c10.validation.828 | Validate ComparisonOutcome.countConsumptionIdentity | Проверка поля ComparisonOutcome «countConsumptionIdentity» |
| c10.failure.828 | Invalid field: ComparisonOutcome.countConsumptionIdentity | Некорректное поле: ComparisonOutcome «countConsumptionIdentity» |
| c10.field.829 | ComparisonOutcome.immutableTraceReference | Поле ComparisonOutcome «immutableTraceReference» |
| c10.validation.829 | Validate ComparisonOutcome.immutableTraceReference | Проверка поля ComparisonOutcome «immutableTraceReference» |
| c10.failure.829 | Invalid field: ComparisonOutcome.immutableTraceReference | Некорректное поле: ComparisonOutcome «immutableTraceReference» |
| c10.field.900 | ConformanceValidationReport.reportId | Поле ConformanceValidationReport «reportId» |
| c10.validation.900 | Validate ConformanceValidationReport.reportId | Проверка поля ConformanceValidationReport «reportId» |
| c10.failure.900 | Invalid field: ConformanceValidationReport.reportId | Некорректное поле: ConformanceValidationReport «reportId» |
| c10.field.901 | ConformanceValidationReport.targetArtifactId | Поле ConformanceValidationReport «targetArtifactId» |
| c10.validation.901 | Validate ConformanceValidationReport.targetArtifactId | Проверка поля ConformanceValidationReport «targetArtifactId» |
| c10.failure.901 | Invalid field: ConformanceValidationReport.targetArtifactId | Некорректное поле: ConformanceValidationReport «targetArtifactId» |
| c10.field.902 | ConformanceValidationReport.targetArtifactKind | Поле ConformanceValidationReport «targetArtifactKind» |
| c10.validation.902 | Validate ConformanceValidationReport.targetArtifactKind | Проверка поля ConformanceValidationReport «targetArtifactKind» |
| c10.failure.902 | Invalid field: ConformanceValidationReport.targetArtifactKind | Некорректное поле: ConformanceValidationReport «targetArtifactKind» |
| c10.field.903 | ConformanceValidationReport.validationBundleVersion | Поле ConformanceValidationReport «validationBundleVersion» |
| c10.validation.903 | Validate ConformanceValidationReport.validationBundleVersion | Проверка поля ConformanceValidationReport «validationBundleVersion» |
| c10.failure.903 | Invalid field: ConformanceValidationReport.validationBundleVersion | Некорректное поле: ConformanceValidationReport «validationBundleVersion» |
| c10.field.904 | ConformanceValidationReport.findings | Поле ConformanceValidationReport «findings» |
| c10.validation.904 | Validate ConformanceValidationReport.findings | Проверка поля ConformanceValidationReport «findings» |
| c10.failure.904 | Invalid field: ConformanceValidationReport.findings | Некорректное поле: ConformanceValidationReport «findings» |
| c10.field.905 | ConformanceValidationReport.primaryFindingId | Поле ConformanceValidationReport «primaryFindingId» |
| c10.validation.905 | Validate ConformanceValidationReport.primaryFindingId | Проверка поля ConformanceValidationReport «primaryFindingId» |
| c10.failure.905 | Invalid field: ConformanceValidationReport.primaryFindingId | Некорректное поле: ConformanceValidationReport «primaryFindingId» |
| c10.field.906 | ConformanceValidationReport.valid | Поле ConformanceValidationReport «valid» |
| c10.validation.906 | Validate ConformanceValidationReport.valid | Проверка поля ConformanceValidationReport «valid» |
| c10.failure.906 | Invalid field: ConformanceValidationReport.valid | Некорректное поле: ConformanceValidationReport «valid» |
| c10.field.907 | ConformanceValidationReport.sealedAt | Поле ConformanceValidationReport «sealedAt» |
| c10.validation.907 | Validate ConformanceValidationReport.sealedAt | Проверка поля ConformanceValidationReport «sealedAt» |
| c10.failure.907 | Invalid field: ConformanceValidationReport.sealedAt | Некорректное поле: ConformanceValidationReport «sealedAt» |
| c10.field.908 | ConformanceValidationReport.sealIntegrityReference | Поле ConformanceValidationReport «sealIntegrityReference» |
| c10.validation.908 | Validate ConformanceValidationReport.sealIntegrityReference | Проверка поля ConformanceValidationReport «sealIntegrityReference» |
| c10.failure.908 | Invalid field: ConformanceValidationReport.sealIntegrityReference | Некорректное поле: ConformanceValidationReport «sealIntegrityReference» |
| c10.field.909 | ConformanceValidationReport.schemaVersion | Поле ConformanceValidationReport «schemaVersion» |
| c10.validation.909 | Validate ConformanceValidationReport.schemaVersion | Проверка поля ConformanceValidationReport «schemaVersion» |
| c10.failure.909 | Invalid field: ConformanceValidationReport.schemaVersion | Некорректное поле: ConformanceValidationReport «schemaVersion» |
| c10.field.910 | ConformanceFinding.findingId | Поле ConformanceFinding «findingId» |
| c10.validation.910 | Validate ConformanceFinding.findingId | Проверка поля ConformanceFinding «findingId» |
| c10.failure.910 | Invalid field: ConformanceFinding.findingId | Некорректное поле: ConformanceFinding «findingId» |
| c10.field.911 | ConformanceFinding.validationId | Поле ConformanceFinding «validationId» |
| c10.validation.911 | Validate ConformanceFinding.validationId | Проверка поля ConformanceFinding «validationId» |
| c10.failure.911 | Invalid field: ConformanceFinding.validationId | Некорректное поле: ConformanceFinding «validationId» |
| c10.field.912 | ConformanceFinding.failureIdentity | Поле ConformanceFinding «failureIdentity» |
| c10.validation.912 | Validate ConformanceFinding.failureIdentity | Проверка поля ConformanceFinding «failureIdentity» |
| c10.failure.912 | Invalid field: ConformanceFinding.failureIdentity | Некорректное поле: ConformanceFinding «failureIdentity» |
| c10.field.913 | ConformanceFinding.targetPath | Поле ConformanceFinding «targetPath» |
| c10.validation.913 | Validate ConformanceFinding.targetPath | Проверка поля ConformanceFinding «targetPath» |
| c10.failure.913 | Invalid field: ConformanceFinding.targetPath | Некорректное поле: ConformanceFinding «targetPath» |
| c10.field.914 | ConformanceFinding.dispositionIdentity | Поле ConformanceFinding «dispositionIdentity» |
| c10.validation.914 | Validate ConformanceFinding.dispositionIdentity | Проверка поля ConformanceFinding «dispositionIdentity» |
| c10.failure.914 | Invalid field: ConformanceFinding.dispositionIdentity | Некорректное поле: ConformanceFinding «dispositionIdentity» |
| c10.field.915 | ConformanceFinding.externalOutcomeToken | Поле ConformanceFinding «externalOutcomeToken» |
| c10.validation.915 | Validate ConformanceFinding.externalOutcomeToken | Проверка поля ConformanceFinding «externalOutcomeToken» |
| c10.failure.915 | Invalid field: ConformanceFinding.externalOutcomeToken | Некорректное поле: ConformanceFinding «externalOutcomeToken» |
| c10.field.916 | ConformanceFinding.secondaryEvidenceReferences | Поле ConformanceFinding «secondaryEvidenceReferences» |
| c10.validation.916 | Validate ConformanceFinding.secondaryEvidenceReferences | Проверка поля ConformanceFinding «secondaryEvidenceReferences» |
| c10.failure.916 | Invalid field: ConformanceFinding.secondaryEvidenceReferences | Некорректное поле: ConformanceFinding «secondaryEvidenceReferences» |
| c10.field.917 | ConformanceFinding.precedence | Поле ConformanceFinding «precedence» |
| c10.validation.917 | Validate ConformanceFinding.precedence | Проверка поля ConformanceFinding «precedence» |
| c10.failure.917 | Invalid field: ConformanceFinding.precedence | Некорректное поле: ConformanceFinding «precedence» |
| c10.field.918 | ConformanceFinding.upstreamFailureIdentities | Поле ConformanceFinding «upstreamFailureIdentities» |
| c10.validation.918 | Validate ConformanceFinding.upstreamFailureIdentities | Проверка поля ConformanceFinding «upstreamFailureIdentities» |
| c10.failure.918 | Invalid field: ConformanceFinding.upstreamFailureIdentities | Некорректное поле: ConformanceFinding «upstreamFailureIdentities» |
| c10.field.920 | SealVerificationResult.schemaVersion | Поле SealVerificationResult «schemaVersion» |
| c10.validation.920 | Validate SealVerificationResult.schemaVersion | Проверка поля SealVerificationResult «schemaVersion» |
| c10.failure.920 | Invalid field: SealVerificationResult.schemaVersion | Некорректное поле: SealVerificationResult «schemaVersion» |
| c10.field.921 | SealVerificationResult.verificationId | Поле SealVerificationResult «verificationId» |
| c10.validation.921 | Validate SealVerificationResult.verificationId | Проверка поля SealVerificationResult «verificationId» |
| c10.failure.921 | Invalid field: SealVerificationResult.verificationId | Некорректное поле: SealVerificationResult «verificationId» |
| c10.field.922 | SealVerificationResult.targetArtifactId | Поле SealVerificationResult «targetArtifactId» |
| c10.validation.922 | Validate SealVerificationResult.targetArtifactId | Проверка поля SealVerificationResult «targetArtifactId» |
| c10.failure.922 | Invalid field: SealVerificationResult.targetArtifactId | Некорректное поле: SealVerificationResult «targetArtifactId» |
| c10.field.923 | SealVerificationResult.targetArtifactKind | Поле SealVerificationResult «targetArtifactKind» |
| c10.validation.923 | Validate SealVerificationResult.targetArtifactKind | Проверка поля SealVerificationResult «targetArtifactKind» |
| c10.failure.923 | Invalid field: SealVerificationResult.targetArtifactKind | Некорректное поле: SealVerificationResult «targetArtifactKind» |
| c10.field.924 | SealVerificationResult.presentedSealIntegrityReference | Поле SealVerificationResult «presentedSealIntegrityReference» |
| c10.validation.924 | Validate SealVerificationResult.presentedSealIntegrityReference | Проверка поля SealVerificationResult «presentedSealIntegrityReference» |
| c10.failure.924 | Invalid field: SealVerificationResult.presentedSealIntegrityReference | Некорректное поле: SealVerificationResult «presentedSealIntegrityReference» |
| c10.field.925 | SealVerificationResult.recomputedSealIntegrityReference | Поле SealVerificationResult «recomputedSealIntegrityReference» |
| c10.validation.925 | Validate SealVerificationResult.recomputedSealIntegrityReference | Проверка поля SealVerificationResult «recomputedSealIntegrityReference» |
| c10.failure.925 | Invalid field: SealVerificationResult.recomputedSealIntegrityReference | Некорректное поле: SealVerificationResult «recomputedSealIntegrityReference» |
| c10.field.926 | SealVerificationResult.valid | Поле SealVerificationResult «valid» |
| c10.validation.926 | Validate SealVerificationResult.valid | Проверка поля SealVerificationResult «valid» |
| c10.failure.926 | Invalid field: SealVerificationResult.valid | Некорректное поле: SealVerificationResult «valid» |
| c10.field.927 | SealVerificationResult.verifiedAt | Поле SealVerificationResult «verifiedAt» |
| c10.validation.927 | Validate SealVerificationResult.verifiedAt | Проверка поля SealVerificationResult «verifiedAt» |
| c10.failure.927 | Invalid field: SealVerificationResult.verifiedAt | Некорректное поле: SealVerificationResult «verifiedAt» |
| c10.field.928 | SealVerificationResult.failureIdentity | Поле SealVerificationResult «failureIdentity» |
| c10.validation.928 | Validate SealVerificationResult.failureIdentity | Проверка поля SealVerificationResult «failureIdentity» |
| c10.failure.928 | Invalid field: SealVerificationResult.failureIdentity | Некорректное поле: SealVerificationResult «failureIdentity» |
| c10.field.929 | SealVerificationResult.verificationMethodIdentity | Поле SealVerificationResult «verificationMethodIdentity» |
| c10.validation.929 | Validate SealVerificationResult.verificationMethodIdentity | Проверка поля SealVerificationResult «verificationMethodIdentity» |
| c10.failure.929 | Invalid field: SealVerificationResult.verificationMethodIdentity | Некорректное поле: SealVerificationResult «verificationMethodIdentity» |
| c10.field.950 | PairingRecord.recordTypeIdentity | Поле PairingRecord «recordTypeIdentity» |
| c10.validation.950 | Validate PairingRecord.recordTypeIdentity | Проверка поля PairingRecord «recordTypeIdentity» |
| c10.failure.950 | Invalid field: PairingRecord.recordTypeIdentity | Некорректное поле: PairingRecord «recordTypeIdentity» |
| c10.field.951 | BasisLinkRecord.recordTypeIdentity | Поле BasisLinkRecord «recordTypeIdentity» |
| c10.validation.951 | Validate BasisLinkRecord.recordTypeIdentity | Проверка поля BasisLinkRecord «recordTypeIdentity» |
| c10.failure.951 | Invalid field: BasisLinkRecord.recordTypeIdentity | Некорректное поле: BasisLinkRecord «recordTypeIdentity» |
| c10.field.952 | OutcomeDecisionRecord.recordTypeIdentity | Поле OutcomeDecisionRecord «recordTypeIdentity» |
| c10.validation.952 | Validate OutcomeDecisionRecord.recordTypeIdentity | Проверка поля OutcomeDecisionRecord «recordTypeIdentity» |
| c10.failure.952 | Invalid field: OutcomeDecisionRecord.recordTypeIdentity | Некорректное поле: OutcomeDecisionRecord «recordTypeIdentity» |
| c10.field.953 | Contract6SealingRecord.recordTypeIdentity | Поле Contract6SealingRecord «recordTypeIdentity» |
| c10.validation.953 | Validate Contract6SealingRecord.recordTypeIdentity | Проверка поля Contract6SealingRecord «recordTypeIdentity» |
| c10.failure.953 | Invalid field: Contract6SealingRecord.recordTypeIdentity | Некорректное поле: Contract6SealingRecord «recordTypeIdentity» |
| c10.field.954 | AdjudicationRecord.recordTypeIdentity | Поле AdjudicationRecord «recordTypeIdentity» |
| c10.validation.954 | Validate AdjudicationRecord.recordTypeIdentity | Проверка поля AdjudicationRecord «recordTypeIdentity» |
| c10.failure.954 | Invalid field: AdjudicationRecord.recordTypeIdentity | Некорректное поле: AdjudicationRecord «recordTypeIdentity» |
| c10.field.955 | ConfidenceSourceSignalRecord.recordTypeIdentity | Поле ConfidenceSourceSignalRecord «recordTypeIdentity» |
| c10.validation.955 | Validate ConfidenceSourceSignalRecord.recordTypeIdentity | Проверка поля ConfidenceSourceSignalRecord «recordTypeIdentity» |
| c10.failure.955 | Invalid field: ConfidenceSourceSignalRecord.recordTypeIdentity | Некорректное поле: ConfidenceSourceSignalRecord «recordTypeIdentity» |
| c10.field.956 | AnnotationUnitRecord.multiViewStateIdentity | Поле AnnotationUnitRecord «multiViewStateIdentity» |
| c10.validation.956 | Validate AnnotationUnitRecord.multiViewStateIdentity | Проверка поля AnnotationUnitRecord «multiViewStateIdentity» |
| c10.failure.956 | Invalid field: AnnotationUnitRecord.multiViewStateIdentity | Некорректное поле: AnnotationUnitRecord «multiViewStateIdentity» |
| c10.field.957 | BasisLinkRecord.operationId | Поле BasisLinkRecord «operationId» |
| c10.validation.957 | Validate BasisLinkRecord.operationId | Проверка поля BasisLinkRecord «operationId» |
| c10.failure.957 | Invalid field: BasisLinkRecord.operationId | Некорректное поле: BasisLinkRecord «operationId» |
| c10.field.958 | BasisLinkRecord.roomCaseId | Поле BasisLinkRecord «roomCaseId» |
| c10.validation.958 | Validate BasisLinkRecord.roomCaseId | Проверка поля BasisLinkRecord «roomCaseId» |
| c10.failure.958 | Invalid field: BasisLinkRecord.roomCaseId | Некорректное поле: BasisLinkRecord «roomCaseId» |
| c10.field.959 | BasisLinkRecord.unitSubjectId | Поле BasisLinkRecord «unitSubjectId» |
| c10.validation.959 | Validate BasisLinkRecord.unitSubjectId | Проверка поля BasisLinkRecord «unitSubjectId» |
| c10.failure.959 | Invalid field: BasisLinkRecord.unitSubjectId | Некорректное поле: BasisLinkRecord «unitSubjectId» |
| c10.field.960 | BasisLinkRecord.basisApplicabilityRationale | Поле BasisLinkRecord «basisApplicabilityRationale» |
| c10.validation.960 | Validate BasisLinkRecord.basisApplicabilityRationale | Проверка поля BasisLinkRecord «basisApplicabilityRationale» |
| c10.failure.960 | Invalid field: BasisLinkRecord.basisApplicabilityRationale | Некорректное поле: BasisLinkRecord «basisApplicabilityRationale» |
| c10.field.961 | BasisLinkRecord.predecessorBasisLinkRecordId | Поле BasisLinkRecord «predecessorBasisLinkRecordId» |
| c10.validation.961 | Validate BasisLinkRecord.predecessorBasisLinkRecordId | Проверка поля BasisLinkRecord «predecessorBasisLinkRecordId» |
| c10.failure.961 | Invalid field: BasisLinkRecord.predecessorBasisLinkRecordId | Некорректное поле: BasisLinkRecord «predecessorBasisLinkRecordId» |
| c10.field.962 | AdjudicationRecord.candidateOrMemberIds | Поле AdjudicationRecord «candidateOrMemberIds» |
| c10.validation.962 | Validate AdjudicationRecord.candidateOrMemberIds | Проверка поля AdjudicationRecord «candidateOrMemberIds» |
| c10.failure.962 | Invalid field: AdjudicationRecord.candidateOrMemberIds | Некорректное поле: AdjudicationRecord «candidateOrMemberIds» |
| c10.field.963 | AdjudicationRecord.traceReference | Поле AdjudicationRecord «traceReference» |
| c10.validation.963 | Validate AdjudicationRecord.traceReference | Проверка поля AdjudicationRecord «traceReference» |
| c10.failure.963 | Invalid field: AdjudicationRecord.traceReference | Некорректное поле: AdjudicationRecord «traceReference» |
| c10.field.964 | Contract6SealingRecord.traceReference | Поле Contract6SealingRecord «traceReference» |
| c10.validation.964 | Validate Contract6SealingRecord.traceReference | Проверка поля Contract6SealingRecord «traceReference» |
| c10.failure.964 | Invalid field: Contract6SealingRecord.traceReference | Некорректное поле: Contract6SealingRecord «traceReference» |
| c10.field.965 | Contract6SealingRecord.revisionId | Поле Contract6SealingRecord «revisionId» |
| c10.validation.965 | Validate Contract6SealingRecord.revisionId | Проверка поля Contract6SealingRecord «revisionId» |
| c10.failure.965 | Invalid field: Contract6SealingRecord.revisionId | Некорректное поле: Contract6SealingRecord «revisionId» |
| c10.field.966 | Contract8EvaluationPackage.unseenClaimRecords | Поле Contract8EvaluationPackage «unseenClaimRecords» |
| c10.validation.966 | Validate Contract8EvaluationPackage.unseenClaimRecords | Проверка поля Contract8EvaluationPackage «unseenClaimRecords» |
| c10.failure.966 | Invalid field: Contract8EvaluationPackage.unseenClaimRecords | Некорректное поле: Contract8EvaluationPackage «unseenClaimRecords» |
| c10.field.967 | UnseenClaimRecord.unseenClaimRecordId | Поле UnseenClaimRecord «unseenClaimRecordId» |
| c10.validation.967 | Validate UnseenClaimRecord.unseenClaimRecordId | Проверка поля UnseenClaimRecord «unseenClaimRecordId» |
| c10.failure.967 | Invalid field: UnseenClaimRecord.unseenClaimRecordId | Некорректное поле: UnseenClaimRecord «unseenClaimRecordId» |
| c10.field.968 | UnseenClaimRecord.rawAssertionReference | Поле UnseenClaimRecord «rawAssertionReference» |
| c10.validation.968 | Validate UnseenClaimRecord.rawAssertionReference | Проверка поля UnseenClaimRecord «rawAssertionReference» |
| c10.failure.968 | Invalid field: UnseenClaimRecord.rawAssertionReference | Некорректное поле: UnseenClaimRecord «rawAssertionReference» |
| c10.field.969 | UnseenClaimRecord.assertionProjectionReference | Поле UnseenClaimRecord «assertionProjectionReference» |
| c10.validation.969 | Validate UnseenClaimRecord.assertionProjectionReference | Проверка поля UnseenClaimRecord «assertionProjectionReference» |
| c10.failure.969 | Invalid field: UnseenClaimRecord.assertionProjectionReference | Некорректное поле: UnseenClaimRecord «assertionProjectionReference» |
| c10.validation.S001 | Validate rule S001: CaptureSetIntake | Проверка правила S001 для CaptureSetIntake |
| c10.failure.S001 | Cross-field violation S001: CaptureSetIntake | Межполевая ошибка S001: CaptureSetIntake |
| c10.validation.S002 | Validate rule S002: RoomCase | Проверка правила S002 для RoomCase |
| c10.failure.S002 | Cross-field violation S002: RoomCase | Межполевая ошибка S002: RoomCase |
| c10.validation.S003 | Validate rule S003: RoomCase | Проверка правила S003 для RoomCase |
| c10.failure.S003 | Cross-field violation S003: RoomCase | Межполевая ошибка S003: RoomCase |
| c10.validation.S004 | Validate rule S004: SameRoomValidationRecord | Проверка правила S004 для SameRoomValidationRecord |
| c10.failure.S004 | Cross-field violation S004: SameRoomValidationRecord | Межполевая ошибка S004: SameRoomValidationRecord |
| c10.validation.S005 | Validate rule S005: SameRoomValidationRecord | Проверка правила S005 для SameRoomValidationRecord |
| c10.failure.S005 | Cross-field violation S005: SameRoomValidationRecord | Межполевая ошибка S005: SameRoomValidationRecord |
| c10.validation.S006 | Validate rule S006: MixedRoomValidationRequest | Проверка правила S006 для MixedRoomValidationRequest |
| c10.failure.S006 | Cross-field violation S006: MixedRoomValidationRequest | Межполевая ошибка S006: MixedRoomValidationRequest |
| c10.validation.S007 | Validate rule S007: VlmSceneCandidate | Проверка правила S007 для VlmSceneCandidate |
| c10.failure.S007 | Cross-field violation S007: VlmSceneCandidate | Межполевая ошибка S007: VlmSceneCandidate |
| c10.validation.S008 | Validate rule S008: StructuredSceneV0 | Проверка правила S008 для StructuredSceneV0 |
| c10.failure.S008 | Cross-field violation S008: StructuredSceneV0 | Межполевая ошибка S008: StructuredSceneV0 |
| c10.validation.S009 | Validate rule S009: StructuredSceneV0 | Проверка правила S009 для StructuredSceneV0 |
| c10.failure.S009 | Cross-field violation S009: StructuredSceneV0 | Межполевая ошибка S009: StructuredSceneV0 |
| c10.validation.S010 | Validate rule S010: StructuredSceneV0 | Проверка правила S010 для StructuredSceneV0 |
| c10.failure.S010 | Cross-field violation S010: StructuredSceneV0 | Межполевая ошибка S010: StructuredSceneV0 |
| c10.validation.S011 | Validate rule S011: StructuredSceneV0 | Проверка правила S011 для StructuredSceneV0 |
| c10.failure.S011 | Cross-field violation S011: StructuredSceneV0 | Межполевая ошибка S011: StructuredSceneV0 |
| c10.validation.S012 | Validate rule S012: StructuredSceneV0 | Проверка правила S012 для StructuredSceneV0 |
| c10.failure.S012 | Cross-field violation S012: StructuredSceneV0 | Межполевая ошибка S012: StructuredSceneV0 |
| c10.validation.S013 | Validate rule S013: StructuredSceneV0 | Проверка правила S013 для StructuredSceneV0 |
| c10.failure.S013 | Cross-field violation S013: StructuredSceneV0 | Межполевая ошибка S013: StructuredSceneV0 |
| c10.validation.S014 | Validate rule S014: Artifact separation | Проверка правила S014 для Разделение артефактов |
| c10.failure.S014 | Cross-field violation S014: Artifact separation | Межполевая ошибка S014: Разделение артефактов |
| c10.validation.S015 | Validate rule S015: Artifact separation | Проверка правила S015 для Разделение артефактов |
| c10.failure.S015 | Cross-field violation S015: Artifact separation | Межполевая ошибка S015: Разделение артефактов |
| c10.validation.S016 | Validate rule S016: PerceptionResult | Проверка правила S016 для PerceptionResult |
| c10.failure.S016 | Cross-field violation S016: PerceptionResult | Межполевая ошибка S016: PerceptionResult |
| c10.validation.S017 | Validate rule S017: SceneResult | Проверка правила S017 для SceneResult |
| c10.failure.S017 | Cross-field violation S017: SceneResult | Межполевая ошибка S017: SceneResult |
| c10.validation.S018 | Validate rule S018: Non-scene results | Проверка правила S018 для Результаты без сцены |
| c10.failure.S018 | Cross-field violation S018: Non-scene results | Межполевая ошибка S018: Результаты без сцены |
| c10.validation.S019 | Validate rule S019: InsufficientEvidenceResult | Проверка правила S019 для InsufficientEvidenceResult |
| c10.failure.S019 | Cross-field violation S019: InsufficientEvidenceResult | Межполевая ошибка S019: InsufficientEvidenceResult |
| c10.validation.S020 | Validate rule S020: RejectedResult | Проверка правила S020 для RejectedResult |
| c10.failure.S020 | Cross-field violation S020: RejectedResult | Межполевая ошибка S020: RejectedResult |
| c10.validation.S021 | Validate rule S021: PerceptionEvidenceArtifact | Проверка правила S021 для PerceptionEvidenceArtifact |
| c10.failure.S021 | Cross-field violation S021: PerceptionEvidenceArtifact | Межполевая ошибка S021: PerceptionEvidenceArtifact |
| c10.validation.S022 | Validate rule S022: GroundingRecord | Проверка правила S022 для GroundingRecord |
| c10.failure.S022 | Cross-field violation S022: GroundingRecord | Межполевая ошибка S022: GroundingRecord |
| c10.validation.S023 | Validate rule S023: ProvenanceAttachmentRecord | Проверка правила S023 для ProvenanceAttachmentRecord |
| c10.failure.S023 | Cross-field violation S023: ProvenanceAttachmentRecord | Межполевая ошибка S023: ProvenanceAttachmentRecord |
| c10.validation.S024 | Validate rule S024: BestEffortFieldAssessmentRecord | Проверка правила S024 для BestEffortFieldAssessmentRecord |
| c10.failure.S024 | Cross-field violation S024: BestEffortFieldAssessmentRecord | Межполевая ошибка S024: BestEffortFieldAssessmentRecord |
| c10.validation.S025 | Validate rule S025: AttributeEvidenceArtifact | Проверка правила S025 для AttributeEvidenceArtifact |
| c10.failure.S025 | Cross-field violation S025: AttributeEvidenceArtifact | Межполевая ошибка S025: AttributeEvidenceArtifact |
| c10.validation.S026 | Validate rule S026: DeterminabilityEvidenceBasisRecord | Проверка правила S026 для DeterminabilityEvidenceBasisRecord |
| c10.failure.S026 | Cross-field violation S026: DeterminabilityEvidenceBasisRecord | Межполевая ошибка S026: DeterminabilityEvidenceBasisRecord |
| c10.validation.S027 | Validate rule S027: EvidenceSetRecord | Проверка правила S027 для EvidenceSetRecord |
| c10.failure.S027 | Cross-field violation S027: EvidenceSetRecord | Межполевая ошибка S027: EvidenceSetRecord |
| c10.validation.S028 | Validate rule S028: ConfidenceAssertionRecord | Проверка правила S028 для ConfidenceAssertionRecord |
| c10.failure.S028 | Cross-field violation S028: ConfidenceAssertionRecord | Межполевая ошибка S028: ConfidenceAssertionRecord |
| c10.validation.S029 | Validate rule S029: Contract6DeterminabilityPackage | Проверка правила S029 для Contract6DeterminabilityPackage |
| c10.failure.S029 | Cross-field violation S029: Contract6DeterminabilityPackage | Межполевая ошибка S029: Contract6DeterminabilityPackage |
| c10.validation.S030 | Validate rule S030: Contract6DeterminabilityPackage | Проверка правила S030 для Contract6DeterminabilityPackage |
| c10.failure.S030 | Cross-field violation S030: Contract6DeterminabilityPackage | Межполевая ошибка S030: Contract6DeterminabilityPackage |
| c10.validation.S031 | Validate rule S031: RawMechanismAssertionArtifact | Проверка правила S031 для RawMechanismAssertionArtifact |
| c10.failure.S031 | Cross-field violation S031: RawMechanismAssertionArtifact | Межполевая ошибка S031: RawMechanismAssertionArtifact |
| c10.validation.S032 | Validate rule S032: RawMechanismAssertionArtifact | Проверка правила S032 для RawMechanismAssertionArtifact |
| c10.failure.S032 | Cross-field violation S032: RawMechanismAssertionArtifact | Межполевая ошибка S032: RawMechanismAssertionArtifact |
| c10.validation.S033 | Validate rule S033: ETAPAssertionProjectionFact | Проверка правила S033 для ETAPAssertionProjectionFact |
| c10.failure.S033 | Cross-field violation S033: ETAPAssertionProjectionFact | Межполевая ошибка S033: ETAPAssertionProjectionFact |
| c10.validation.S034 | Validate rule S034: ETAPAssertionProjectionFact | Проверка правила S034 для ETAPAssertionProjectionFact |
| c10.failure.S034 | Cross-field violation S034: ETAPAssertionProjectionFact | Межполевая ошибка S034: ETAPAssertionProjectionFact |
| c10.validation.S035 | Validate rule S035: ComparisonOutcome | Проверка правила S035 для ComparisonOutcome |
| c10.failure.S035 | Cross-field violation S035: ComparisonOutcome | Межполевая ошибка S035: ComparisonOutcome |
| c10.validation.S036 | Validate rule S036: ComparisonOutcome | Проверка правила S036 для ComparisonOutcome |
| c10.failure.S036 | Cross-field violation S036: ComparisonOutcome | Межполевая ошибка S036: ComparisonOutcome |
| c10.validation.S037 | Validate rule S037: Sealing | Проверка правила S037 для Запечатывание |
| c10.failure.S037 | Cross-field violation S037: Sealing | Межполевая ошибка S037: Запечатывание |
| c10.validation.S038 | Validate rule S038: Sealing | Проверка правила S038 для Запечатывание |
| c10.failure.S038 | Cross-field violation S038: Sealing | Межполевая ошибка S038: Запечатывание |
| c10.validation.S039 | Validate rule S039: Source eligibility | Проверка правила S039 для Допустимость источника |
| c10.failure.S039 | Cross-field violation S039: Source eligibility | Межполевая ошибка S039: Допустимость источника |
| c10.validation.S040 | Validate rule S040: Controlled Learning | Проверка правила S040 для Контролируемое обучение |
| c10.failure.S040 | Cross-field violation S040: Controlled Learning | Межполевая ошибка S040: Контролируемое обучение |
| c10.validation.S041 | Validate rule S041: Localization | Проверка правила S041 для Локализация |
| c10.failure.S041 | Cross-field violation S041: Localization | Межполевая ошибка S041: Локализация |
| c10.validation.S042 | Validate rule S042: Authorization | Проверка правила S042 для Авторизация |
| c10.failure.S042 | Cross-field violation S042: Authorization | Межполевая ошибка S042: Авторизация |
| c10.validation.S043 | Validate rule S043: EvidenceRelationshipRecord | Проверка правила S043 для EvidenceRelationshipRecord |
| c10.failure.S043 | Cross-field violation S043: EvidenceRelationshipRecord | Межполевая ошибка S043: EvidenceRelationshipRecord |
| c10.validation.S044 | Validate rule S044: BestEffortValueRevision | Проверка правила S044 для BestEffortValueRevision |
| c10.failure.S044 | Cross-field violation S044: BestEffortValueRevision | Межполевая ошибка S044: BestEffortValueRevision |
| c10.validation.S045 | Validate rule S045: ConfidenceAssertionRecord | Проверка правила S045 для ConfidenceAssertionRecord |
| c10.failure.S045 | Cross-field violation S045: ConfidenceAssertionRecord | Межполевая ошибка S045: ConfidenceAssertionRecord |
| c10.validation.S046 | Validate rule S046: PerceptionEvidenceArtifact | Проверка правила S046 для PerceptionEvidenceArtifact |
| c10.failure.S046 | Cross-field violation S046: PerceptionEvidenceArtifact | Межполевая ошибка S046: PerceptionEvidenceArtifact |
| c10.validation.S047 | Validate rule S047: PerceptionEvidenceArtifact | Проверка правила S047 для PerceptionEvidenceArtifact |
| c10.failure.S047 | Cross-field violation S047: PerceptionEvidenceArtifact | Межполевая ошибка S047: PerceptionEvidenceArtifact |
| c10.validation.S048 | Validate rule S048: Contract8EvaluationPackage | Проверка правила S048 для Contract8EvaluationPackage |
| c10.failure.S048 | Cross-field violation S048: Contract8EvaluationPackage | Межполевая ошибка S048: Contract8EvaluationPackage |
| c10.validation.S056 | Validate rule S056: CaptureSetIntake | Проверка правила S056 для CaptureSetIntake |
| c10.failure.S056 | Cross-field violation S056: CaptureSetIntake | Межполевая ошибка S056: CaptureSetIntake |
| c10.validation.S057 | Validate rule S057: CaptureSetIntake | Проверка правила S057 для CaptureSetIntake |
| c10.failure.S057 | Cross-field violation S057: CaptureSetIntake | Межполевая ошибка S057: CaptureSetIntake |
| c10.validation.S058 | Validate rule S058: RejectedResult | Проверка правила S058 для RejectedResult |
| c10.failure.S058 | Cross-field violation S058: RejectedResult | Межполевая ошибка S058: RejectedResult |
| c10.validation.S059 | Validate rule S059: RejectedResult | Проверка правила S059 для RejectedResult |
| c10.failure.S059 | Cross-field violation S059: RejectedResult | Межполевая ошибка S059: RejectedResult |
| c10.validation.S060 | Validate rule S060: RejectedResult | Проверка правила S060 для RejectedResult |
| c10.failure.S060 | Cross-field violation S060: RejectedResult | Межполевая ошибка S060: RejectedResult |
| c10.validation.S061 | Validate rule S061: RejectedResult | Проверка правила S061 для RejectedResult |
| c10.failure.S061 | Cross-field violation S061: RejectedResult | Межполевая ошибка S061: RejectedResult |
| c10.validation.S062 | Validate rule S062: PerceptionOperation | Проверка правила S062 для PerceptionOperation |
| c10.failure.S062 | Cross-field violation S062: PerceptionOperation | Межполевая ошибка S062: PerceptionOperation |
| c10.validation.S063 | Validate rule S063: VlmSceneCandidate | Проверка правила S063 для VlmSceneCandidate |
| c10.failure.S063 | Cross-field violation S063: VlmSceneCandidate | Межполевая ошибка S063: VlmSceneCandidate |
| c10.validation.S064 | Validate rule S064: VlmSceneCandidate | Проверка правила S064 для VlmSceneCandidate |
| c10.failure.S064 | Cross-field violation S064: VlmSceneCandidate | Межполевая ошибка S064: VlmSceneCandidate |
| c10.validation.S065 | Validate rule S065: VlmSceneCandidate | Проверка правила S065 для VlmSceneCandidate |
| c10.failure.S065 | Cross-field violation S065: VlmSceneCandidate | Межполевая ошибка S065: VlmSceneCandidate |
| c10.validation.S066 | Validate rule S066: CandidateNode | Проверка правила S066 для CandidateNode |
| c10.failure.S066 | Cross-field violation S066: CandidateNode | Межполевая ошибка S066: CandidateNode |
| c10.validation.S067 | Validate rule S067: UnsupportedInput | Проверка правила S067 для UnsupportedInput |
| c10.failure.S067 | Cross-field violation S067: UnsupportedInput | Межполевая ошибка S067: UnsupportedInput |
| c10.validation.S068 | Validate rule S068: UnsupportedInput | Проверка правила S068 для UnsupportedInput |
| c10.failure.S068 | Cross-field violation S068: UnsupportedInput | Межполевая ошибка S068: UnsupportedInput |
| c10.validation.S069 | Validate rule S069: ComparisonOutcome | Проверка правила S069 для ComparisonOutcome |
| c10.failure.S069 | Cross-field violation S069: ComparisonOutcome | Межполевая ошибка S069: ComparisonOutcome |
| c10.validation.S070 | Validate rule S070: ComparisonOutcome | Проверка правила S070 для ComparisonOutcome |
| c10.failure.S070 | Cross-field violation S070: ComparisonOutcome | Межполевая ошибка S070: ComparisonOutcome |
| c10.validation.S071 | Validate rule S071: ComparisonOutcome | Проверка правила S071 для ComparisonOutcome |
| c10.failure.S071 | Cross-field violation S071: ComparisonOutcome | Межполевая ошибка S071: ComparisonOutcome |
| c10.validation.S072 | Validate rule S072: ComparisonOutcome | Проверка правила S072 для ComparisonOutcome |
| c10.failure.S072 | Cross-field violation S072: ComparisonOutcome | Межполевая ошибка S072: ComparisonOutcome |
| c10.validation.S073 | Validate rule S073: ComparisonOutcome | Проверка правила S073 для ComparisonOutcome |
| c10.failure.S073 | Cross-field violation S073: ComparisonOutcome | Межполевая ошибка S073: ComparisonOutcome |
| c10.validation.S074 | Validate rule S074: ComparisonOutcome | Проверка правила S074 для ComparisonOutcome |
| c10.failure.S074 | Cross-field violation S074: ComparisonOutcome | Межполевая ошибка S074: ComparisonOutcome |
| c10.validation.S075 | Validate rule S075: ComparisonOutcome | Проверка правила S075 для ComparisonOutcome |
| c10.failure.S075 | Cross-field violation S075: ComparisonOutcome | Межполевая ошибка S075: ComparisonOutcome |
| c10.validation.S076 | Validate rule S076: BestEffortFieldAssessmentRecord | Проверка правила S076 для BestEffortFieldAssessmentRecord |
| c10.failure.S076 | Cross-field violation S076: BestEffortFieldAssessmentRecord | Межполевая ошибка S076: BestEffortFieldAssessmentRecord |
| c10.validation.S077 | Validate rule S077: BestEffortFieldAssessmentRecord | Проверка правила S077 для BestEffortFieldAssessmentRecord |
| c10.failure.S077 | Cross-field violation S077: BestEffortFieldAssessmentRecord | Межполевая ошибка S077: BestEffortFieldAssessmentRecord |
| c10.validation.S078 | Validate rule S078: BestEffortFieldAssessmentRecord | Проверка правила S078 для BestEffortFieldAssessmentRecord |
| c10.failure.S078 | Cross-field violation S078: BestEffortFieldAssessmentRecord | Межполевая ошибка S078: BestEffortFieldAssessmentRecord |
| c10.validation.S079 | Validate rule S079: BestEffortFieldAssessmentRecord | Проверка правила S079 для BestEffortFieldAssessmentRecord |
| c10.failure.S079 | Cross-field violation S079: BestEffortFieldAssessmentRecord | Межполевая ошибка S079: BestEffortFieldAssessmentRecord |
| c10.validation.S080 | Validate rule S080: BestEffortValueRevision | Проверка правила S080 для BestEffortValueRevision |
| c10.failure.S080 | Cross-field violation S080: BestEffortValueRevision | Межполевая ошибка S080: BestEffortValueRevision |
| c10.validation.S081 | Validate rule S081: BestEffortValueRevision | Проверка правила S081 для BestEffortValueRevision |
| c10.failure.S081 | Cross-field violation S081: BestEffortValueRevision | Межполевая ошибка S081: BestEffortValueRevision |
| c10.validation.S082 | Validate rule S082: BestEffortValueRevision | Проверка правила S082 для BestEffortValueRevision |
| c10.failure.S082 | Cross-field violation S082: BestEffortValueRevision | Межполевая ошибка S082: BestEffortValueRevision |
| c10.validation.S083 | Validate rule S083: BestEffortFieldAssessmentRecord | Проверка правила S083 для BestEffortFieldAssessmentRecord |
| c10.failure.S083 | Cross-field violation S083: BestEffortFieldAssessmentRecord | Межполевая ошибка S083: BestEffortFieldAssessmentRecord |
| c10.validation.S084 | Validate rule S084: C8LifecycleBundle | Проверка правила S084 для C8LifecycleBundle |
| c10.failure.S084 | Cross-field violation S084: C8LifecycleBundle | Межполевая ошибка S084: C8LifecycleBundle |
| c10.validation.S085 | Validate rule S085: C8LifecycleBundle | Проверка правила S085 для C8LifecycleBundle |
| c10.failure.S085 | Cross-field violation S085: C8LifecycleBundle | Межполевая ошибка S085: C8LifecycleBundle |
| c10.validation.S086 | Validate rule S086: C8LifecycleBundle | Проверка правила S086 для C8LifecycleBundle |
| c10.failure.S086 | Cross-field violation S086: C8LifecycleBundle | Межполевая ошибка S086: C8LifecycleBundle |
| c10.validation.S087 | Validate rule S087: C8LifecycleBundle | Проверка правила S087 для C8LifecycleBundle |
| c10.failure.S087 | Cross-field violation S087: C8LifecycleBundle | Межполевая ошибка S087: C8LifecycleBundle |
| c10.validation.S088 | Validate rule S088: C8LifecycleBundle | Проверка правила S088 для C8LifecycleBundle |
| c10.failure.S088 | Cross-field violation S088: C8LifecycleBundle | Межполевая ошибка S088: C8LifecycleBundle |
| c10.validation.S089 | Validate rule S089: C8LifecycleBundle | Проверка правила S089 для C8LifecycleBundle |
| c10.failure.S089 | Cross-field violation S089: C8LifecycleBundle | Межполевая ошибка S089: C8LifecycleBundle |
| c10.validation.S090 | Validate rule S090: Operation identity | Проверка правила S090 для Идентичность операции |
| c10.failure.S090 | Cross-field violation S090: Operation identity | Межполевая ошибка S090: Идентичность операции |
| c10.validation.S091 | Validate rule S091: RoomCase/ImageAsset identity | Проверка правила S091 для Идентичность RoomCase/ImageAsset |
| c10.failure.S091 | Cross-field violation S091: RoomCase/ImageAsset identity | Межполевая ошибка S091: Идентичность RoomCase/ImageAsset |
| c10.validation.S092 | Validate rule S092: Artifact identity consistency | Проверка правила S092 для Согласованность идентичностей артефактов |
| c10.failure.S092 | Cross-field violation S092: Artifact identity consistency | Межполевая ошибка S092: Согласованность идентичностей артефактов |
| c10.validation.S093 | Validate rule S093: Semantic ownership | Проверка правила S093 для Семантическое владение |
| c10.failure.S093 | Cross-field violation S093: Semantic ownership | Межполевая ошибка S093: Семантическое владение |
| c10.validation.S094 | Validate rule S094: RejectedResult branch exclusivity | Проверка правила S094 для Взаимоисключаемость ветвей RejectedResult |
| c10.failure.S094 | Cross-field violation S094: RejectedResult branch exclusivity | Межполевая ошибка S094: Взаимоисключаемость ветвей RejectedResult |
| c10.validation.S095 | Validate rule S095: FailureResult reason/retryability | Проверка правила S095 для Причина и повторяемость FailureResult |
| c10.failure.S095 | Cross-field violation S095: FailureResult reason/retryability | Межполевая ошибка S095: Причина и повторяемость FailureResult |
| c10.validation.S096 | Validate rule S096: Negative-set identity boundary | Проверка правила S096 для Граница идентичности отрицательного набора |
| c10.failure.S096 | Cross-field violation S096: Negative-set identity boundary | Межполевая ошибка S096: Граница идентичности отрицательного набора |
| c10.validation.S097 | Validate rule S097: Artifact envelope separation | Проверка правила S097 для Разделение оболочек артефактов |
| c10.failure.S097 | Cross-field violation S097: Artifact envelope separation | Межполевая ошибка S097: Разделение оболочек артефактов |
| c10.validation.S098 | Validate rule S098: SealVerificationResult consistency | Проверка правила S098 для Согласованность SealVerificationResult |
| c10.failure.S098 | Cross-field violation S098: SealVerificationResult consistency | Межполевая ошибка S098: Согласованность SealVerificationResult |
| c10.schema.capture-set-intake.v1 | Capture-set intake schema | Схема приёма набора снимков |
| c10.schema.same-room-validation.v1 | Same-room validation schema | Схема проверки одной комнаты |
| c10.schema.perception-operation.v1 | Perception operation schema | Схема операции восприятия |
| c10.schema.mixed-room-validation-request.v1 | Mixed-room validation request schema | Схема запроса проверки разных комнат |
| c10.schema.unsupported-input.v1 | Unsupported-input schema | Схема неподдерживаемого входа |
| c10.schema.vlm-scene-candidate.v1 | VLM scene-candidate schema | Схема VLM-кандидата сцены |
| c10.schema.structured-scene-v0.v1 | StructuredSceneV0 schema | Схема StructuredSceneV0 |
| c10.schema.perception-result.v1 | PerceptionResult schema | Схема PerceptionResult |
| c10.schema.perception-operation-diagnostics.v1 | Operation diagnostics schema | Схема диагностики операции |
| c10.schema.image-asset-processing-diagnostic.v1 | Image processing diagnostic schema | Схема диагностики обработки изображения |
| c10.schema.perception-evidence-artifact.v1 | Perception evidence schema | Схема свидетельств восприятия |
| c10.schema.contract6-determinability-package.v1 | Contract-6 determinability package schema | Схема пакета определимости Contract 6 |
| c10.schema.contract8-evaluation-package.v1 | Contract-8 evaluation package schema | Схема пакета оценки Contract 8 |
| c10.schema.comparison-outcome.v1 | Comparison outcome schema | Схема результата сравнения |
| c10.schema.conformance-validation-report.v1 | Conformance validation report schema | Схема отчёта проверки соответствия |
| c10.schema.seal-verification-result.v1 | Seal verification result schema | Схема результата проверки печати |

Localization counts:

```text
fields: 531 EN / 531 RU
validations: 622 EN / 622 RU
failures: 622 EN / 622 RU
identity rules: 12 EN / 12 RU
cross-reference rules: 10 EN / 10 RU
dispositions: 6 EN / 6 RU
construct identities: 4 EN / 4 RU
missing: 0
```

Each listed identity has its own label pair. No range-level label substitutes for an individual identity. Stable IDs and JSON paths remain language-neutral. English is canonical; Russian is the complete derived locale; platform fallback to English remains mandatory outside this complete registry.

## 18. Controlled Learning, Security and Diagnosability compatibility boundary

```text
Current state:
LEARNING-READY
NOT LEARNING-ACTIVE
```

Permitted only as compatibility fields: model/rule/contract/vocabulary/provider-configuration versions, evidence, provenance, traceability, reproducibility, immutable history, no-regression references, rollback references and future consent/data-use eligibility references.

Prohibited: feedback collection activation, learning analytics, training, automatic rule or threshold change, autonomous production behavior modification, real-user-data use, real-user-photo use, provider invocation with governed data, production credentials and full Diagnosability/Security architecture work.

Diagnostics may preserve operational traces but never hidden chain-of-thought, secrets, raw credentials, held-out ground truth or prohibited payloads.


## 19. Mechanical acceptance invariants

A candidate byte identity is eligible for independent review only when all checks pass:

```text
active fields: 531
field-bound validations: 531
standalone validations: 91
failures: 622
identity rules: 12
cross-reference rules: 10
dispositions: 6
construct identities: 4

- every active field appears exactly once;
- every active field has one field-bound validation and one failure identity;
- every standalone validation has one explicit failure identity;
- every validation has one disposition identity and one precedence;
- every sidecar-only finding has no external outcome token;
- every external token belongs to an authorized UnsupportedInput, Contract-9 comparison or security domain;
- the FailureResult runtime reason set equals the exact four-token Contract-9 set;
- the post-admission RejectedResult violation set equals the exact fourteen-token Contract-9 set;
- no mixed-room/temporal/capture-set fact appears inside contractViolations[];
- every identity/xref/disposition/construct identity has individual EN/RU labels;
- runtime, evidence, diagnostics and evaluation envelopes remain separate;
- sealing is non-self-referential and matches the test vector;
- every Markdown table has a stable column count;
- all internal section references resolve.
```

## 20. Full non-sampled Correction Cycle 5 author-review record

The generated artifact was rechecked through complete, non-sampled passes:

1. authority, Track-A scope and non-authorization boundary;
2. exact Contract-9 four-token and fourteen-token set equality;
3. runtime/evidence/diagnostics/evaluation separation;
4. all active field IDs and JSON paths;
5. all field-bound validations and failure mappings;
6. all standalone validations, including nine new full-coverage rules;
7. all `c10.identity.*`, `c10.xref.*`, `c10.disposition.*` and `c10.construct.*` links;
8. mixed-room/temporal/capture-set RejectedResult branch logic;
9. evidence/provenance/confidence/determinability ownership;
10. RFC-8785/SHA-256 seal test vector;
11. identity-level EN/RU localization;
12. Markdown, section-reference, duplicate-ID, orphan-reference and reachability checks.

This author review preserves closure of the Correction Cycle 3 findings and closes the single admissible Correction Cycle 4 MINOR finding by exact Contract-6 namespace alignment at `c10.field.643`. It does not replace the required independent consolidated review and does not assert that no possible defect can exist.

## 21. Final governance status and non-authorization

```text
DRAFT
CORRECTION CYCLE 5 COMPLETE
FULL NON-SAMPLED AUTHOR REVIEW COMPLETE
READY FOR ONE FULL INDEPENDENT CONSOLIDATED REVIEW
```

Not asserted and not authorized:

```text
OWNER-ACCEPTED
CANDIDATE-LOCKED
REPOSITORY-PERSISTED
TECHNICALLY REVIEW-CLOSED
Contract 11
corpus or fixture creation
annotation or held-out sealing
provider/model evaluation or invocation
real-user data or real-user photographs
production credentials
Implementation Package or implementation
bounded proof or deployment
Controlled Learning activation
Combined Diagnosability & Security Compatibility Assessment
AI Brain Diagnosability Architecture
Security Architecture Baseline
Tracks B–H
commit or push
```
