# Candidate A Bounded Scope Decision — Accepted Bounded First-Iteration Scope for the VLM Interpretation Sub-component (Mechanism Class B)

```text
Document type: Accepted Owner Governance Scope Decision (not an ADR,
    not an Implementation Package)
Status: Accepted
Revision: 3 (targeted closure pass; supersedes Revision 2 and all
    earlier proposed drafts in full; corrected exactly three items
    per the prior targeted-revision Owner review — SceneResult
    formation point, annotation disagreement handling, and corpus-
    before-provider-assessment sequencing)
Prepared by: Claude (Chief Software Architect / Specification Partner)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-14
Accepted by: Project Owner
Acceptance date: 2026-07-14
Accepted architecture baseline: Perception Mechanism Selection and
    Evaluation Architecture, Revision 3 (Accepted, 2026-07-14)
Repository: Qazaq71/VistaRoom.AI, branch main
Repository persistence: Not yet performed; requires separate explicit
    Owner authorization
Implementation: Not authorized by this document
```

---

## Part A — Source Verification and Accepted Inputs

### A.1 Source verification result (выполнена перед подготовкой Revision 2)

```text
Repository path принятой архитектуры:
docs/engineering-decisions/reviews/Perception-Mechanism-Selection-
and-Evaluation-Architecture-Rev3.md

Retrieved напрямую через raw.githubusercontent.com (main branch, HTTP
200) и дополнительно через commit-pinned URL (328d5fbf9a6a1a02f187db
7d3456bcf193a62392, HTTP 200) — оба ответа byte-identical.

Метаданные, подтверждённые прямым чтением: Status: Accepted; Accepted
by: Project Owner; Acceptance date: 2026-07-14; Revision: 3. Полный
текст (1382 строки) получен и прочитан — complete: yes.

Все 13 authoritative source files, использованных для подготовки
Revision 3 (Project Context v2.3, Living Strategic Roadmap v1.4,
Post-Gate2-Comparative-Next-Stage-Architecture-Assessment-Rev3,
Gate2-C8-Closure-Review, Final-Gate-2-Scope-Decision-C8, C8-
Semantic-Spatial-Intelligence-Core-Architecture-Assessment, Gate2-C8-
Implementation-Package-v1.0, ADR-010–014, ADR_INDEX), повторно
получены и побайтово сверены с ранее прочитанными версиями — все
без изменений (byte-identical).

Существующий draft Candidate A Bounded Scope Decision (initial
proposed version) — полностью прочитан повторно перед подготовкой
Revision 2; полнота подтверждена.

Заключение (Revision 2): могла безопасно продолжаться. Полное
повторное чтение authoritative sources не требовалось (freshness
подтверждена byte-identical сравнением); code inspection не требовалась
ни для одного factual claim.

### A.1a Дополнительная проверка перед Revision 3 (targeted closure pass)

Перед подготовкой настоящей targeted Revision 3 повторно получен
docs/engineering-decisions/reviews/Perception-Mechanism-Selection-and-
Evaluation-Architecture-Rev3.md через raw.githubusercontent.com (main
branch, HTTP 200) и побайтово сверен с версией, ранее верифицированной
через commit-pinned URL (328d5fb) — без изменений (byte-identical).
Candidate A Bounded Scope Decision Revision 2 (существующий draft) —
прочитан полностью повторно перед внесением точечных правок.
Заключение: targeted Revision 3 может безопасно продолжаться.
```

### A.2 Accepted inputs, зафиксированные Revision 3 и семью Owner Decisions (не переоткрываются)

```text
Mechanism class: Class B — Hybrid VLM + heuristic validation —
    Selected.
Topology: Room photo → VLM Interpretation → untrusted
    VlmSceneCandidate → existing Step 2 (heuristic validation/
    normalization) → StructuredSceneV0 → Boundary Validator →
    evaluation.
Prior Gate 2 declaration (Implementation Package §5): historical
    precedent only; Candidate A cycle independently selected Class B.
Grounding boundary: PerceptionEvidenceArtifact — Selected.
PerceptionResult boundary: operation-level envelope (SceneResult /
    InsufficientEvidenceResult / FailureResult / RejectedResult) —
    Accepted.
Bounded Coverage Matrix (Revision 3, Part E) — Accepted as recommended.
```

---

## Part B — Document Status, Purpose and Decision Scope

### B.1 Статус (обновлено — Owner Acceptance получен 2026-07-14)

Revision 3 настоящего Scope Decision была принята Project Owner 2026-07-14 (Part T). Она является authoritative bounded scope для первой итерации Candidate A. Документ остаётся Scope Decision — не ADR и не Implementation Package.

Owner Acceptance НЕ авторизует: repository persistence; corpus preparation или creation; provider/model evaluation или selection; Implementation Package; implementation (полный перечень — Part O, Part T).

### B.2 Purpose

Настоящий документ операционализирует принятую Perception Mechanism Selection and Evaluation Architecture (Revision 3) в конкретный, проверяемый и implementation-ready bounded scope: exact input contract (Part E), полную PerceptionResult operation matrix (Part F), минимальный evidence-контракт (Part G), operational Bounded Coverage Matrix (Part H), Tier 1 corpus specification (Part I), Layer 3 metric matrix (Part J), threshold-governance путь (Part K), provider/model evaluation boundary (Part L), privacy/test-data decision boundaries (Part M), version-identification requirement (Part N), readiness gates (Part P) и governance sequence (Part U). Все перечисленные положения приняты Project Owner 2026-07-14 (Part T).

### B.3 Закрытый review set (историческая справка)

Revision 2 разрешила 16 пунктов закрытого consolidated review set первого Owner review этого Scope Decision. Revision 3 — targeted closure pass, разрешившая ровно три пункта второго Owner review (Part F — SceneResult formation point; Part J.1 — annotation disagreement handling; Part K/L.2/P/U — corpus-before-provider-assessment sequencing), не открывая новый exploratory architecture review и не расширяя scope. Revision 3 в этой редакции принята Project Owner в полном объёме, без дальнейших правок архитектурного содержания.

---

## Part C — Fixed Architecture Baseline

Не переоткрывается: Class B selection и topology; prior Gate 2 historical-precedent treatment; PerceptionEvidenceArtifact selection; PerceptionResult four-outcome architecture; Revision 3 Coverage Matrix basis; SpaceTypeId reference-input boundary (не re-derived); Layer 1/2/3 evaluation architecture; ADR-010–014; StructuredSceneV0; existing Step 2/5/6; temporary/bounded/replaceable статус механизма; запрет real user photos; запрет whole-home/multi-room scope; отсутствие Implementation Package/implementation authorization.

```text
Layer 1 — Schema/Boundary Validation: existing Step 5, без изменений.
Layer 2 — Representation Queryability: existing Step 6, без изменений.
Layer 3 — Perception Fidelity/Semantic Truth: новый, предмет Part J.
```

---

## Part D — Bounded Proof Objective

Реализовать и оценить VLM Interpretation Sub-component (Class B) на ограниченном, точно специфицированном входном и выходном контракте (Parts E–J), с thresholds, утверждаемыми отдельным будущим шагом (Part K) до proof execution, — таким образом, чтобы Bounded Proof Completion (все mandatory метрики исполнены) была структурно отличима от Bounded Proof Acceptance (метрики соответствуют заранее утверждённым порогам), и ни одна из них не могла быть достигнута молчаливым обходом неисполнимой обязательной метрики (исправление 2).

---

## Part E — Exact Input Scope

Исправление 3 — принят точный bounded input contract.

### E.1 Рекомендуемый первый scope

```text
One licensed, synthetic or deliberately staged single-room
photograph per perception operation.
```

### E.2 Включено

```text
One image only.
Single room.
Ordinary perspective room photograph (не панорама, не floor plan).
Original image retained as provenance root (Revision 3, Part P.1).
Optional user-provided context, с явным provenance-тегом.
Optional SpaceTypeId reference input (не re-derived).
Preprocessing traceability (Revision 3, Part P.1) — каждая transform
    прослеживаема к original image.
Minimum readability validation — базовая проверка, что файл технически
    читаем, до вызова perception mechanism.
Unsupported-input classification — явная категория для форматов/
    типов входа, не поддерживаемых первой итерацией.
```

### E.3 Явно исключено

```text
Real user photos (Part M).
Multiple images per operation.
Multi-view fusion.
Panorama stitching.
360-degree panoramas.
Floor plans.
Video.
Video frames как отдельный input mode.
Cross-image reasoning.
Whole-home image sets.
```

### E.4 Boundary outcomes (связь с Part F)

```text
FailureResult: unreadable/corrupt file; unsupported encoding;
    preprocessing failure; provider technical failure; timeout;
    malformed provider response.
InsufficientEvidenceResult: технически читаемое изображение, но
    недостаточное visual evidence для содержательного SceneResult.
Partial SceneResult: валидная сцена, где часть элементов/отношений
    неизвестна, не видна или не inferable, но существует достаточная
    meaningful scene representation.
```

---

## Part F — PerceptionResult Operation Matrix

Исправление 4 — полная operation matrix для всех четырёх исходов.

### F.1 SceneResult (исправлено — точка формирования, §3 поручения Revision 3)

Корректный операционный контракт:

```text
Room photo
→ VLM Interpretation (C.1)
→ VlmSceneCandidate
→ existing Step 2 normalization/conformance (C.2)
→ StructuredSceneV0
→ Boundary Validator (C.3)
→ final outcome classification
→ SceneResult | RejectedResult.
```

`SceneResult` формируется ТОЛЬКО когда:

```text
1. VLM Interpretation (C.1) произвела VlmSceneCandidate.
2. Existing Step 2 (C.2) успешно произвёл StructuredSceneV0.
3. Boundary Validator (C.3) принял StructuredSceneV0.
```

`SceneResult` не существует до прохождения C.2 и C.3 — ранее принятая формулировка (Revision 2), допускавшая обратное толкование ("передать SceneResult в Step 2/Boundary Validator"), исправлена.

```text
Entry conditions: C.2 и C.3 завершены успешно (см. контракт выше).
Required fields: status: scene; completeness: full | partial; scene:
    StructuredSceneV0; evidenceArtifactReference (если применимо,
    Part G); diagnostics.
Reason categories: не применимо (успешный исход).
Retryability: не применимо.
Required diagnostics: mechanism/prompt/provider version (Revision 3,
    Part P.2); preprocessing transform metadata.
Recommended orchestration action: вернуть SceneResult в downstream
    orchestration/evaluation (Evaluation Harness, Layer 2/3) — не
    "передать SceneResult в C.2/C.3", поскольку SceneResult является
    результатом успешного прохождения C.2 и C.3, а не их входом.
Layer 3 treatment: evaluated for semantic fidelity (Part J).
Completion relevance: contributes to all applicable scene metrics
    (Part H, Part J).
Acceptance relevance: подлежит thresholds Evaluation Threshold and
    Acceptance Plan (Part K).
Room node: обязателен только для SceneResult (Revision 3, §3.7).
```

### F.2 InsufficientEvidenceResult

```text
Entry conditions: фото технически прочитано (прошло readability
    validation, E.2), но VLM Interpretation (C.1) не имеет достаточного
    visual evidence для производства содержательного VlmSceneCandidate
    — исход может наступить ДО C.2 (существующий Step 2 не вызывается,
    поскольку нет candidate, который можно было бы нормализовать).
Required fields: status: insufficient-evidence; reason category;
    diagnostics; recommended next action.
Reason categories: minimum — "low information content", "ambiguous
    scene", "resolution/quality insufficient for interpretation".
Retryability: зависит от reason — может рекомендовать лучшее
    изображение (recommended next action).
Required diagnostics: то же, что F.1.
Recommended orchestration action: не передавать в C.2/C.3 — это не
    valid candidate и не partial scene.
Layer 3 treatment: evaluated as classification outcome (корректно ли
    классифицирован, Part J — "insufficient-evidence classification").
Completion relevance: included in insufficient-evidence handling
    metrics (Part H, Part J) — обязательная фикстура (Part I).
Acceptance relevance: подлежит thresholds Threshold Plan.
Room node: не создаётся искусственно (Revision 3, §3.7).
```

### F.3 FailureResult

```text
Entry conditions: техническая ошибка на этапе preprocessing, provider
    invocation или provider/mechanism adapter (Revision 3, Part L.1) —
    может наступить до C.1 завершения (preprocessing/provider failure)
    или внутри C.1 (adapter-уровень); не связана с C.2/C.3.
Required fields: status: failure; technical reason category;
    retryability; diagnostics.
Reason categories: unreadable/corrupt file; unsupported encoding;
    preprocessing failure; provider technical failure; timeout;
    malformed provider response.
Retryability: явно указывается для каждой reason category (например,
    timeout — retryable; malformed encoding — не retryable без
    изменения входа).
Recommended orchestration action: не передаётся в C.2/C.3.
Layer 3 treatment: excluded from scene-semantic denominators; included
    in reliability/failure reporting (Part J).
Completion relevance: mandatory failure fixtures (Part I) должны быть
    исполнены и корректно классифицированы.
Acceptance relevance: failure rate — Layer 3 метрика (Part J).
Room node: не создаётся.
```

### F.4 RejectedResult

```text
Entry conditions: возникает ПОСЛЕ C.2 (existing Step 2 отклоняет
    candidate) или ПОСЛЕ C.3 (Boundary Validator отклоняет уже
    сформированный StructuredSceneV0) — не на уровне provider adapter
    (Revision 3, Part L.1/L.6) и не до C.2. RejectedResult и SceneResult
    (F.1) — взаимоисключающие исходы одной и той же точки после C.3.
Required fields: status: rejected; validation stage (C.2 или C.3);
    contract violations; diagnostics.
Reason categories: перечень существующих 13 кодов нарушений Boundary
    Validator (для C.3-уровня rejection) + любые structural rejection
    codes existing Step 2 (для C.2-уровня).
Retryability: обычно не retryable без изменения mechanism/prompt
    (структурная, не временная ошибка).
Recommended orchestration action: зафиксировать validation stage для
    диагностики (различие C.2 vs C.3 rejection — Revision 3, Part G,
    "candidate-level diagnostics").
Layer 3 treatment: included in rejection-rate and failure-mode
    analysis (Part J).
Completion relevance: mandatory rejection fixtures (и для C.2, и для
    C.3 уровня — Part I) должны быть исполнены.
Acceptance relevance: rejection rate — Layer 3 метрика (Part J).
Room node: не создаётся.
```

---

## Part G — Minimum PerceptionEvidenceArtifact / EvidenceReference Contract

Исправление 5.

### G.1 EvidenceReference union

```text
EvidenceReference =
    BoundingBoxReference
    | PolygonReference
    | MaskReference
    | CropReference
    | NormalizedProviderReference
```

### G.2 Статус для bounded first proof

```text
BoundingBoxReference: mandatory normalized node-grounding form —
    каждый node evidence, используемый для Layer 3 acceptance, обязан
    быть представим в этой форме.
CropReference: optional diagnostic form.
PolygonReference: optional.
MaskReference: optional.
NormalizedProviderReference: может сохраняться внутренне (например,
    "как есть" от провайдера), но обязана быть convertible в
    accepted normalized form (BoundingBoxReference) для любого evidence,
    используемого в Layer 3 acceptance.
```

### G.3 Evidence semantics по типу элемента

```text
NodeEvidence: одна или несколько image-region references, связанных
    со stable node identity (ADR-013 Identity attribute).
RelationEvidence: references на relevant node evidence + relation
    basis (geometric; visual; или explicit inference basis).
AttributeEvidence: image region; pixel cue; user-provided evidence;
    или explicit inference basis.
```

### G.4 Что не решается здесь

Точные TypeScript-типы и storage layout — Implementation Package (Part R). Implementation Package не выбирает semantic minimum contract — он уже зафиксирован G.1–G.3.

---

## Part H — Final Operational Bounded Coverage Matrix

Исправление 6 — операционализация Revision 3 Part E.

| Category | Scope status | Production obligation | Evidence obligation | Layer 3 metric | Proof Completion relevance | Proof Acceptance relevance | Behavior when absent/incorrect |
|---|---|---|---|---|---|---|---|
| Room | Required production capability | Обязателен для каждого SceneResult | SpaceTypeId — reference only | SpaceTypeId preservation correctness | Обязательна | Threshold-bearing | Отсутствие Room в SceneResult — contract violation → RejectedResult |
| StructuralElement | Required production capability + required corpus coverage | Обязательна precision + recall (см. H.1) | Image region evidence (BoundingBoxReference) для каждого произведённого item | Structural-element precision, recall | Обязательна | Recall — threshold-bearing per Threshold Plan | Пропуск — учитывается в recall; ложное срабатывание — в precision, не игнорируется |
| Object | Required production capability + required corpus coverage | Обязательна precision + recall (H.1) | Image region evidence для каждого item | Object precision, recall | Обязательна | Recall — threshold-bearing per Threshold Plan | Аналогично StructuralElement |
| FreeSpaceRegion | Deferred (выбрано однозначно, не "schema-valid but not evaluated") | Не требуется в bounded proof | Не требуется | Не измеряется в первой итерации | Не влияет | Не влияет | Отсутствие не является failure |
| Adjacency | Required production capability | Обязательна для случаев Tier 1 покрытия | Evidence связанных nodes + relation basis | Relation correctness | Обязательна | Threshold-bearing | Некорректная relation — учитывается в relation correctness |
| Containment | Required production capability | Аналогично Adjacency | Аналогично | Relation correctness | Обязательна | Threshold-bearing | Аналогично |
| Blocking | Required production capability | Аналогично | Аналогично | Relation correctness | Обязательна | Threshold-bearing | Аналогично |
| Type/Category | Required production capability | Обязательна для каждого произведённого Object/StructuralElement | Image region или inference basis | Entity detection correctness | Обязательна | Threshold-bearing | Некорректная категория — учитывается в entity detection correctness |
| Approximate placement | Best effort | Production allowed, не required for Completion | Если произведён — evidence/provenance compliant | Diagnostic-only, если не elevated отдельным решением | Не блокирует | Не блокирует (если не elevated) | Отсутствие — не failure |
| Spatial extent | Best effort | Аналогично | Аналогично | Diagnostic-only | Не блокирует | Не блокирует | Отсутствие — не failure |
| Affordance | Best effort | Аналогично | Аналогично | Diagnostic-only (косвенно влияет на Object inventory) | Не блокирует | Не блокирует | Отсутствие — не failure |
| Illumination relevance | Best effort | Аналогично | Аналогично | Diagnostic-only | Не блокирует | Не блокирует | Отсутствие — не failure |
| Confidence | Required production capability | Обязательна для каждого произведённого элемента | Reported + Normalized (Revision 3, Part O.1) | Confidence calibration measurement | Обязательна | Threshold-bearing (измерение обязательно; связывание с thresholds — Threshold Plan) | Отсутствие confidence — contract violation → RejectedResult на C.2/C.3 |
| Provenance | Required production capability | Обязательна для каждого произведённого элемента | Operational definitions (Revision 3, Part O.4) | Unknown/uncertain handling | Обязательна | Threshold-bearing | Отсутствие provenance — contract violation |

### H.1 Уточнение Best effort (§10 поручения)

Best effort НЕ означает "не измерять". Best-effort output может быть diagnostic-only или иметь non-blocking provisional metric — production таких категорий разрешена, но не обязательна для Bounded Proof Completion; если произведена, обязана оставаться evidence/provenance-compliant (не может нарушать confidence/provenance требования просто потому, что сама категория best-effort).

### H.2 Уточнение StructuralElement/Object

```text
Category production: required.
Evidence for every produced item: required.
Precision: mandatory metric.
Recall: mandatory measured metric; threshold-bearing status
    определяется Evaluation Threshold and Acceptance Plan (Part K), не
    настоящим документом.
Completeness: не гарантируется нормативно (мechanism не обязан
    находить 100% объектов), но обязана измеряться (recall), не
    скрываться словом "best effort" — StructuralElement/Object НЕ
    являются best-effort категориями.
```

### H.3 FreeSpaceRegion — явный выбор

Выбрано: **Deferred**, не "schema-valid but not evaluated" — консистентно с уже принятым Deferred-статусом Q4/Q5 (Revision 3, Part E.8) FreeSpaceRegion-зависимых запросов.

Не расширяет ADR-013.

---

## Part I — Tier 1 Corpus Specification

Исправление 7.

```text
Segment: Residential-first.
Room types: living room; bedroom; kitchen; bathroom.
```

### I.1 Scenario coverage на каждый room type

```text
Normal readable scene.
Moderate clutter.
Partial occlusion.
Partial-room framing.
Lighting variation.
Camera-angle variation.
```

### I.2 Обязательные cross-room scenario groups

```text
Low-information scenes.
Empty or near-empty rooms.
Insufficient-evidence cases (F.2).
Unreadable/corrupt input fixtures (F.3).
Provider/technical failure fixtures (F.3).
Candidate normalization rejection fixtures (F.4, C.2-уровень).
Final Boundary Validator rejection fixtures (F.4, C.3-уровень).
```

### I.3 Data source

Licensed; synthetic; deliberately staged. Real user photos — исключены (Part M).

### I.4 Dataset separation

Development/prompt-tuning set строго отделён от held-out acceptance set (Revision 3, Part S.2 — запрет использования одних и тех же изображений для обеих целей).

### I.5 Ground truth

Versioned annotations; element identities; required evidence references (Part G); inconclusive label; annotator disagreement record; annotation provenance.

### I.6 Minimum coverage rule (без произвольного окончательного количества)

```text
Каждый required room type присутствует в development и held-out
    subsets.
Каждая mandatory scenario category (I.1, I.2) имеет заранее
    определённое corpus coverage.
Точное численное количество изображений устанавливается Candidate A
    Evaluation Threshold and Acceptance Plan (Part K) до provider/model
    assessment, не настоящим документом.
```

Сам корпус не создаётся настоящим документом.

---

## Part J — Layer 3 Metric Matrix

Исправление 8.

| Metric | Definition | Aggregation level | Required corpus subset | Ground-truth dependency | Completion requirement | Acceptance threshold-bearing status |
|---|---|---|---|---|---|---|
| Entity detection correctness | Корректность идентификации Type/Category присутствующих элементов | Per-scene, aggregated | Tier 1, все room types | Да | Обязательна | Threshold-bearing (Threshold Plan) |
| Structural-element precision | Доля корректно распознанных StructuralElement среди произведённых | Per-scene, aggregated | Tier 1 | Да | Обязательна | Threshold-bearing |
| Structural-element recall | Доля ground-truth StructuralElement, действительно обнаруженных | Per-scene, aggregated | Tier 1 | Да | Обязательна | Threshold-bearing |
| Object precision | Аналогично StructuralElement, для Object | Per-scene, aggregated | Tier 1 | Да | Обязательна | Threshold-bearing |
| Object recall | Аналогично | Per-scene, aggregated | Tier 1 | Да | Обязательна | Threshold-bearing |
| Relation correctness | Корректность Adjacency/Containment/Blocking относительно фото | Per-relation, aggregated | Tier 1 | Да | Обязательна | Threshold-bearing |
| SpaceTypeId preservation | Корректность сохранения supplied SpaceTypeId; отсутствие unauthorized reclassification | Per-scene | Tier 1, случаи с/без SpaceTypeId reference | Да (для случаев с reference) | Обязательна | Threshold-bearing |
| Unknown/uncertain handling | Корректность присвоения unknown-not-inferable там, где evidence недостаточно | Per-element | Tier 1 | Да | Обязательна | Threshold-bearing |
| Insufficient-evidence classification | Корректность классификации InsufficientEvidenceResult (F.2) отдельно от valid partial SceneResult | Per-operation | Tier 1, I.2 фикстуры | Да | Обязательна | Threshold-bearing |
| Hallucination rate | Частота случаев, где произведённый элемент не подтверждён evidence (измеряемая, не абсолютная метрика) | Per-scene, aggregated | Tier 1 | Да | Обязательна | Threshold-bearing |
| Confidence calibration measurement | Соответствие Reported/Normalized confidence фактической correctness (Calibrated confidence, Revision 3 Part O.1) | Per-confidence-class, aggregated | Tier 1 | Да | Обязательна (измерение) | Threshold-bearing |
| Grounding-to-image traceability | Исполнимость связи scene element ↔ PerceptionEvidenceArtifact (Part G) | Per-element | Tier 1 | Нет (структурная проверка) | Обязательна | Threshold-bearing |
| Partial-scene behavior | Корректность SceneResult.completeness=partial поведения | Per-scene | Tier 1 | Да | Обязательна | Threshold-bearing |
| Failure rate | Доля операций, завершившихся FailureResult | Aggregated по corpus | Tier 1, I.2 failure фикстуры | Нет | Обязательна | Диагностическая/provisional (Threshold Plan решает) |
| Rejection rate | Доля операций, завершившихся RejectedResult (C.2 и C.3 отдельно) | Aggregated | Tier 1, I.2 rejection фикстуры | Нет | Обязательна | Диагностическая/provisional |
| Latency | Время выполнения perception operation | Per-operation, aggregated | Tier 1 | Нет | Обязательна (измерение) | Диагностическая до Threshold Plan (Revision 3, Part U.3) |
| Cost | Стоимость perception operation | Per-operation, aggregated | Tier 1 | Нет | Обязательна (измерение) | Диагностическая до Threshold Plan |

### J.1 Annotation disagreement and uncertainty handling (новое, §4 поручения Revision 3)

Обязательное семантическое правило, применимое ко всей Layer 3 Metric Matrix:

```text
Аннотации, помеченные inconclusive, исключаются из обычных precision/
    recall/correctness denominators и репортируются отдельно.

Annotator disagreement обязан сохраняться и репортироваться, не
    скрываться.

Disputed annotations НЕ должны молча конвертироваться в: mechanism
    success; mechanism failure; false positive; false negative.

Resolved consensus annotation может входить в обычные metric
    denominators только после применения принятого annotation-
    resolution процесса.

Unresolved disagreement остаётся uncertainty-исходом и репортируется
    отдельно, не смешиваясь с обычными correct/incorrect категориями.

Candidate A Evaluation Threshold and Acceptance Plan (Part K)
    определяет численную обработку и пороги репортирования; настоящий
    Scope Decision фиксирует именно СЕМАНТИЧЕСКУЮ обработку, не числа.
```

Применимость по метрикам (Part J, основная таблица):

```text
Требуют annotation/uncertainty handling (ground-truth-зависимые):
entity detection correctness; structural-element precision/recall;
object precision/recall; relation correctness; unknown/uncertain
handling; insufficient-evidence classification; hallucination rate;
confidence calibration measurement; partial-scene behavior.

Не применимо / structural-operational measurement (не зависят от
    annotation): SpaceTypeId preservation (структурная проверка
    сохранения supplied значения, не аннотационная); grounding-to-image
    traceability (структурная проверка наличия evidence-ссылки);
    failure rate; rejection rate; latency; cost.
```

Численные disagreement-пороги настоящим документом не изобретаются — они принадлежат Threshold Plan (Part K).

### J.2 Обязательное различие (§12 поручения)

```text
Persistent calibrated-confidence behavior (сам механизм, поддерживающий
    заранее заданную калибровку) — вне scope Implementation Package
    первой итерации.
Measurement of confidence calibration — в Layer 3 scope и обязательно
    для Bounded Proof Completion (J, строка "Confidence calibration
    measurement").
```

Latency и cost — обязательное измерение; их threshold-bearing статус (провизорный envelope или строгий) решается Evaluation Threshold and Acceptance Plan (Part K), не настоящим документом.

---

## Part K — Threshold-Governance Path

Исправление 9.

```text
Следующий governance artifact: Candidate A Evaluation Threshold and
    Acceptance Plan.

Статус: separately prepared; separately reviewed; separately accepted
    Project Owner; completed до provider/model evaluation и proof
    execution.

Должен определить: numeric provisional thresholds; metric formulas;
    aggregation methods; minimum corpus coverage (количественно, I.6);
    pass/fail/inconclusive rules; missing evidence handling; annotation
    disagreement handling; held-out policy; confidence/uncertainty
    reporting; latency/cost treatment; Owner approval и threshold lock.

Запрет: Thresholds не могут впервые появиться внутри исполняемого
    Implementation Package. Thresholds не могут выбираться после того,
    как финальные результаты proof уже известны.
```

Настоящий документ не изобретает численные значения (Part T, Decision 8 — авторизация подготовки Threshold Plan, не сами числа).

Threshold Plan предшествует не только proof execution, но и Tier 1 Corpus Preparation Authorization (Part L.2, Part U) — минимальное corpus coverage (I.6) и metric definitions (Part J) должны быть зафиксированы Threshold Plan до того, как corpus фактически создаётся, чтобы corpus проектировался под уже принятые метрики и покрытие, а не наоборот.

---

## Part L — Provider/Model Evaluation Boundary

Исправление 10. Провайдер/модель не выбираются здесь.

### L.1 Candidate eligibility criteria (будущий evaluation contract)

```text
Image input support; structured output capability; VlmSceneCandidate
compatibility; native or convertible grounding (совместимость с
BoundingBoxReference, Part G); confidence/provenance support; model/
version identification; prompt/version traceability; privacy and
retention terms; training-use policy; data residency; security;
provider logging; deletion capability; rate limits; latency; cost;
failure semantics; model drift/update policy.
```

### L.2 Governance sequence (провайдер/модель) — исправлено, corpus перед provider assessment (§5 поручения Revision 3)

```text
Scope Decision accepted
→ Candidate A Evaluation Threshold and Acceptance Plan prepared
→ Owner accepts Threshold and Acceptance Plan
→ Test Data Handling Decision accepted (Part M)
→ отдельная Tier 1 Corpus Preparation Authorization
→ Tier 1 corpus creation, annotation and versioning (Part I)
→ development/held-out separation and sealing
→ Provider/Model Evaluation Authorization (отдельная)
→ Provider/Model Assessment (на созданном и sealed Tier 1 corpus)
→ Owner Provider/Model Selection
→ Selected-Provider Privacy/Retention Decision
→ отдельная Implementation Package preparation authorization.
```

Provider/Model Assessment (L.1 eligibility criteria) исполняется ПРОТИВ уже созданного и versioned Tier 1 corpus (не до его существования) — это устраняет прежнюю ошибочную последовательность Revision 2, где provider/model assessment предшествовал фактическому созданию corpus.

Provider/model selection не происходит внутри Implementation Package (Part R).

---

## Part M — Privacy and Test-Data Decision Boundaries

Исправление 11 — три раздельных решения, не единая "privacy тема".

### M.1 Test Data Handling Decision

Требуется ДО любых external-provider experiments (в том числе с test data, не только с real user photos). Охватывает: licensed/synthetic/staged image eligibility; external transfer rules; provider training-use policy; provider retention; logging; deletion; diagnostic crops; raw provider output; VlmSceneCandidate; StructuredSceneV0; PerceptionEvidenceArtifact; annotations; evaluation reports; local storage; access control.

### M.2 Real User Photo Privacy Decision

Требуется ДО любой обработки реальных пользовательских фото. В bounded first proof: real user photos исключены полностью (Part E.3) — это решение не блокирует staged/synthetic proof, но заранее известно как отдельный, будущий, ещё не подготовленный шаг.

### M.3 Production Data Handling Decision

Требуется ДО production hardening/deployment — отдельно от M.1 и M.2, более широкая по объёму (Revision 3, Part U.2 — полный retention scope: original image, preprocessed image, diagnostic crops, raw provider output, VlmSceneCandidate, StructuredSceneV0, PerceptionEvidenceArtifact, provider logs, prompt traces, ground-truth annotations, evaluation reports).

---

## Part N — VlmSceneCandidate Contract Versioning Requirement

Исправление 14.

```text
Requirement: VlmSceneCandidate contract version обязана быть explicitly
    identifiable — не остаётся автоматически неблокирующим вопросом.

Допустимые способы: schemaVersion field; versioned TypeScript
    contract; package-level contract version; иной explicit Engineering
    Decision.

Точный способ может быть выбран отдельным Engineering Decision, но
    обязан быть разрешён ДО Gate E (Implementation Package readiness,
    Part P) — поскольку candidate fixtures, normalization (existing
    Step 2), provider adapter и evaluation зависят от version
    compatibility.
```

---

## Part O — Explicit Exclusions

```text
Не авторизовано настоящим документом: provider/model selection;
    provider experiments; numeric threshold approval; Test Data
    Handling Decision acceptance; test corpus creation; image
    downloading or annotation; real user photo processing; ADR
    creation or numbering; repository modification (включая создание
    или обновление файла самого Scope Decision); commit; push;
    ADR_INDEX/README/Project Context/Roadmap updates; Implementation
    Package preparation; implementation; Claude Code implementation
    prompt; Candidate B/C work; Class A/C/D implementation; whole-home/
    multi-room work; floor plans; multi-view; 3D reconstruction; auth,
    Clerk, payments, Stripe, database, marketplace работа.
```

---

## Part P — Readiness Gates

Исправление 12 — минимум пять gates.

### Gate A — Scope Decision Acceptance readiness

Input scope fixed (Part E); PerceptionResult matrix fixed (Part F); minimum EvidenceReference contract fixed (Part G); operational Coverage Matrix fixed (Part H); Tier 1 composition fixed (Part I); Layer 3 metric set fixed (Part J); threshold-governance path selected (Part K); privacy/test-data path selected (Part M); provider evaluation sequence fixed (Part L); explicit exclusions fixed (Part O).

### Gate B — Evaluation Threshold Plan readiness

Metric definitions complete; numeric provisional thresholds defined; aggregation defined; minimum corpus coverage defined (I.6, количественно); held-out rules defined; annotation disagreement rules defined; pass/fail/inconclusive defined; Owner approval point defined.

### Gate C — Tier 1 Corpus Preparation readiness (исправлено/переименовано, §5 поручения Revision 3)

Scope Decision accepted; Threshold Plan accepted; Test Data Handling Decision accepted (M.1); Tier 1 specification accepted (Part I); corpus preparation отдельно авторизована; no real user photos.

### Gate D — Provider/Model Evaluation readiness (исправлено — требует созданного corpus)

Tier 1 corpus создан; annotations версионированы; development и held-out subsets разделены; held-out subset sealed; candidate eligibility criteria accepted (L.1); provider/model experiments отдельно авторизованы.

### Gate E — Implementation Package readiness

Scope Decision accepted; Threshold Plan accepted; provider/model selected Owner (на основании Gate D); selected-provider privacy/retention reviewed; minimum EvidenceReference contract accepted (Part G); VlmSceneCandidate contract-version подход разрешён (Part N); Tier 1 corpus (уже созданный на Gate C/D) specification accepted; Implementation Package preparation отдельно авторизована.

### Gate F — Proof Execution readiness

Implementation Package accepted; implementation отдельно авторизована; thresholds locked; provider/model version зафиксирована; test-data controls активны; необходимая observability на месте. (Tier 1 corpus уже создан и sealed на Gate C/D — не повторяется здесь как отдельное условие.)

---

## Part Q — Risks and Mitigations

| Риск | Митигация |
|---|---|
| Обязательная метрика неисполнима, но proof молча считается completed | Правило Part D/Bounded Proof Completion: неисполнимая обязательная метрика блокирует Completion, если только не classified заранее как diagnostic-only/deferred/not-applicable (Part H, Part J) |
| Grounding evidence format не зафиксирован до Implementation Package | Minimum EvidenceReference contract (Part G) фиксирует mandatory normalized form (BoundingBoxReference) на architecture-уровне |
| Insufficient-evidence outcome используется небезопасно | Отдельная обязательная метрика "Insufficient-evidence classification" (Part J) и обязательные фикстуры (Part I.2) |
| Best-effort категории ошибочно трактуются как "не измерять" | Явное разъяснение H.1 — best effort ≠ не измеряется |
| Tier 1 corpus подвержен overfitting/benchmark leakage | Development/held-out separation (Part I.4), annotation disagreement tracking (Part I.5) |
| Provider/model selection происходит раньше положенного (например, внутри Implementation Package) | Governance sequence (Part L.2, Part U) явно размещает provider selection ДО Implementation Package |
| VlmSceneCandidate version identification откладывается неопределённо | Explicit requirement (Part N) с привязкой к Gate E |
| Privacy decision трактуется как единая, не тройная | Три раздельных решения (Part M.1–M.3) с разными триггерами |

---

## Part R — Future Implementation Package Boundaries

Исправление 13.

### R.1 Implementation Package получает уже принятыми (не выбирает)

Mechanism class; provider/model; minimum EvidenceReference contract (Part G); PerceptionResult contract (Part F); operational Coverage Matrix (Part H); Tier 1 corpus — уже созданный, annotated и versioned per исправленной последовательности Part L.2/U (не только specification, Part I); Layer 3 metric definitions (Part J), включая annotation disagreement handling (Part J.1); numeric thresholds (Part K); privacy/retention constraints (Part M); VlmSceneCandidate version-identification подход (Part N).

### R.2 Implementation Package может выбирать

TypeScript types; module/file paths; adapter implementation details; storage layout within accepted boundaries; test file layout; error mappings; execution order; engineering task breakdown; migration details, если разрешены отдельно.

### R.3 Implementation Package не может выбирать

Provider/model; acceptance thresholds; corpus scope; minimum grounding contract; privacy policy; fundamental outcome semantics (Part F).

---

## Part S — Recommended Bounded First Scope (консолидированное резюме)

```text
Mechanism class: Class B (Part C — fixed, не переоткрывается).
Input scope: Part E — single licensed/synthetic/staged room photo.
Outcome contract: Part F — четыре PerceptionResult исхода, полная
    operation matrix.
Grounding: Part G — PerceptionEvidenceArtifact + EvidenceReference,
    BoundingBoxReference mandatory normalized form.
Coverage: Part H — operational matrix, StructuralElement/Object
    precision+recall обязательны, FreeSpaceRegion — Deferred.
Corpus: Part I — Tier 1, residential-first, 4 room types + cross-room
    scenario groups, dev/held-out separation.
Evaluation: Part J — 17-метричная Layer 3 matrix.
Threshold governance: Part K — отдельный будущий Plan, не изобретается
    здесь.
Provider evaluation: Part L — eligibility criteria + sequence, без
    выбора.
Privacy: Part M — три раздельных решения.
Versioning: Part N — обязательное требование, способ — отдельный
    Engineering Decision.
Readiness: Part P — шесть gates (A–F), включая отдельный Gate C для
    Tier 1 Corpus Preparation readiness, предшествующий Provider/Model
    Evaluation readiness (Gate D).
```

---

## Part T — Owner Decision Record

```text
Decision date: 2026-07-14
Decision authority: Project Owner
Document reviewed: Candidate A Bounded Scope Decision Revision 3
Disposition: Accepted
```

```text
Decision 1 — Document Acceptance: Document Accepted.
Decision 2 — Input Scope (Part E): Accepted as proposed. Bounded
    input — one licensed, synthetic or deliberately staged single-room
    photograph per perception operation, with all inclusions and
    exclusions of Part E preserved.
Decision 3 — PerceptionResult Operation Matrix (Part F): Accepted as
    proposed. SceneResult forms only after successful C.2 and C.3;
    InsufficientEvidenceResult may terminate the operation before C.2;
    FailureResult covers preprocessing/provider/adapter failure;
    RejectedResult arises at C.2 or C.3.
Decision 4 — Minimum EvidenceReference Contract (Part G): Accepted as
    proposed. EvidenceReference = BoundingBoxReference | Polygon
    Reference | MaskReference | CropReference | NormalizedProvider
    Reference; BoundingBoxReference is the mandatory normalized
    node-grounding form for bounded first proof.
Decision 5 — Operational Coverage Matrix (Part H): Accepted as
    proposed. Room required; StructuralElement and Object required
    production capability with mandatory precision/recall measurement;
    Adjacency/Containment/Blocking required within Tier 1 coverage;
    Confidence and Provenance required; FreeSpaceRegion Deferred;
    best-effort categories measured when produced, not automatically
    Completion-blocking.
Decision 6 — Tier 1 Corpus Specification (Part I): Accepted as
    proposed. Residential-first; room types — living room, bedroom,
    kitchen, bathroom; data — licensed/synthetic/deliberately staged
    only, real user photos excluded; development and held-out subsets
    strictly separated. This decision does not authorize corpus
    preparation or corpus creation.
Decision 7 — Layer 3 Metric Set (Part J): Accepted as proposed. Full
    metric set (entity detection correctness; structural-element and
    object precision/recall; relation correctness; SpaceTypeId
    preservation; unknown/uncertain handling; insufficient-evidence
    classification; hallucination rate; confidence calibration
    measurement; grounding-to-image traceability; partial-scene
    behavior; failure rate; rejection rate; latency; cost), including
    the semantic handling rule for inconclusive annotations, annotator
    disagreement, disputed annotations, and unresolved uncertainty
    (Part J.1). Numeric thresholds not accepted.
Decision 8 — Threshold Governance (Part K): Candidate A Evaluation
    Threshold and Acceptance Plan selected as the next threshold-
    governance artifact; its preparation authorized as a separate
    document, to be separately prepared, reviewed, and accepted by
    Project Owner. This authorization does not approve numeric
    thresholds.
Decision 9 — Provider/Model Evaluation Sequence (Part L): Accepted as
    proposed. Accepted Scope Decision → Accepted Evaluation Threshold
    and Acceptance Plan → Accepted Test Data Handling Decision →
    separate Tier 1 Corpus Preparation Authorization → corpus creation,
    annotation and versioning → development/held-out separation and
    sealing → separate Provider/Model Evaluation Authorization →
    Provider/Model Assessment → Owner Provider/Model Selection →
    Selected-Provider Privacy/Retention Decision → separate
    Implementation Package preparation authorization.
Decision 10 — Privacy/Test-Data Boundary (Part M): Accepted —
    three-decision governance model (Test Data Handling Decision; Real
    User Photo Privacy Decision; Production Data Handling Decision).
    These three future documents are not yet prepared or accepted.
Decision 11 — Next Governance Authorization: Preparation of Candidate A
    Evaluation Threshold and Acceptance Plan Authorized.
```

These Owner Decisions do not authorize: repository persistence; Tier 1 corpus preparation; corpus creation; image downloading or annotation; provider/model experiments; provider/model evaluation; provider/model selection; numeric threshold acceptance; Test Data Handling Decision acceptance; Implementation Package preparation; implementation; real user photo processing.

---

## Part U — Governance Sequence

```text
Governance sequence: Accepted by Project Owner on 2026-07-14.
```

Последовательность (архитектурно не изменена относительно Revision 3 targeted closure pass — corpus creation остаётся перед provider/model assessment, per Part T, Decision 9):

```text
Accepted Perception Architecture Revision 3
→ Candidate A Bounded Scope Decision (настоящий документ — Accepted)
→ Owner Scope Decision (получено 2026-07-14)
→ Candidate A Evaluation Threshold and Acceptance Plan
→ Owner Acceptance of Threshold Plan
→ Test Data Handling Decision
→ отдельная Tier 1 Corpus Preparation Authorization
→ Tier 1 corpus creation, annotation and versioning
→ development / held-out separation and sealing
→ Provider/Model Evaluation Authorization
→ Provider/Model Assessment
→ Owner Provider/Model Selection
→ Selected-Provider Privacy/Retention Decision
→ отдельная Implementation Package preparation authorization
→ Implementation Package
→ отдельная implementation authorization
→ bounded proof execution
→ Layer 3 evaluation
→ Completion Decision
→ Acceptance Decision
→ hardening or replacement.
```

Настоящий Owner Acceptance покрывает только подготовку и принятие самого Scope Decision (document preparation only, per следующий разрешённый шаг ниже) — он не авторизует corpus creation. Future создание corpus обязано происходить после Threshold Plan и Test Data Handling Decision, до Provider/Model Assessment, под отдельной explicit Owner-авторизацией (Tier 1 Corpus Preparation Authorization).

Следующий разрешённый шаг: **Preparation of Candidate A Evaluation Threshold and Acceptance Plan** — не Implementation Package preparation authorization и не corpus creation.

---

## Part V — Architect Review Note

```text
Document status: Accepted.
Accepted by: Project Owner.
Acceptance date: 2026-07-14.
Revision: 3, targeted closure pass, supersedes Revision 2 and all
    earlier proposed drafts in full.
Revision 3 passed the targeted closure review. All three closure
    corrections were verified:
1. SceneResult formation point (Part F.1–F.4) — SceneResult forms
   only after C.2 (existing Step 2) and C.3 (Boundary Validator)
   succeed; InsufficientEvidenceResult and FailureResult termination
   points clarified as preceding C.2/C.1 respectively.
2. Annotation disagreement and uncertainty handling (Part J.1) —
   mandatory semantic rule applied across the Layer 3 Metric Matrix,
   with explicit applicability per metric; no numeric disagreement
   threshold invented.
3. Corpus-before-provider-assessment sequencing (Part K, Part L.2,
   Part P Gates C–F, Part U) — Tier 1 corpus creation, annotation,
   versioning, and development/held-out sealing precede Provider/Model
   Evaluation Authorization and Assessment.
Owner review completed. Document reviewed and Accepted in full,
    including all 11 Owner Decisions (Part T).
No repository file was created, modified, staged, committed, or
    pushed. No test corpus was created. No image was downloaded or
    annotated. No real user photo was processed.
No provider, vendor, model, or API was selected or evaluated.
No numeric threshold was invented, approved, or accepted.
No architecture or scope content was changed as part of this
    acceptance update — only acceptance metadata, the Owner Decision
    Record (Part T), and minimal status-consistency edits.
```

---

```text
Document status:
Accepted.

Revision:
3.

Accepted by:
Project Owner.

Acceptance date:
2026-07-14.

Revision 3:
Supersedes Scope Decision Revision 2 and all earlier proposed drafts
in full.

Accepted architecture baseline:
Perception Mechanism Selection and Evaluation Architecture Revision 3.

Mechanism class:
Class B — selected by Project Owner.

Bounded scope:
Accepted.

Input Scope:
Accepted.

PerceptionResult Operation Matrix:
Accepted.

Minimum EvidenceReference Contract:
Accepted.

Operational Coverage Matrix:
Accepted.

Tier 1 Corpus Specification:
Accepted.

Layer 3 Metric Set:
Accepted.

Threshold governance path:
Candidate A Evaluation Threshold and Acceptance Plan — selected.

Provider/Model Evaluation Sequence:
Accepted.

Privacy/Test-Data three-decision model:
Accepted.

Readiness Gates:
Accepted.

Next authorized governance step:
Preparation of Candidate A Evaluation Threshold and Acceptance Plan.

Repository persistence:
Not yet performed; requires separate explicit Owner authorization.

Tier 1 corpus preparation:
Not authorized.

Corpus creation:
Not authorized.

Provider/model evaluation:
Not authorized.

Provider/model selection:
Not authorized.

Numeric thresholds:
Not yet accepted.

Implementation Package:
Not authorized.

Implementation:
Not authorized.

Real user photo processing:
Not authorized.
```
