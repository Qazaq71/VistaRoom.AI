# Gate 2 — C8 Implementation Package v1.0

## 1. Status Block

- Документ: Gate 2 C8 Implementation Package v1.0
- Статус: Accepted
- Accepted by: Project Owner
- Date: 2026-07-10
- Трассировка: Final Gate 2 Scope Decision (Accepted, c22ca8a) → Gate 2 C8 Implementation Package Scope Proposal (Accepted with clarification) → ADR-011, ADR-012, ADR-013, ADR-014 (Accepted) → Owner Decision по выбору mechanism class (текущая сессия)
- Составлен: Claude (architect/specification partner)
- Статус исполнения: Принятие данного документа НЕ является авторизацией начала реализации Claude Code. Каждый шаг раздела 16 требует отдельной явной авторизации Owner перед началом.

## 2. Purpose

Перевести принятую архитектуру (ADR-011–014, Final Gate 2 Scope Decision, Scope Proposal, Owner Decision по mechanism class) в implementation-ready инженерный контракт для Gate 2 C8 scene-analysis path, без инициирования реализации.

## 3. Binding Architecture Inputs

- ADR-011 — C8 Boundary / Representation
- ADR-012 — C8 Evaluation Contract (Q1–Q11, Grounding Requirement, evaluation dimensions)
- ADR-013 — StructuredScene / Scene Graph Schema v0
- ADR-014 — Perception Boundary (4 mechanism classes, hard constraints, provenance model)
- Final Gate 2 Scope Decision — C8 (In/Out of Scope, §9 staged closure conditions, раздел 11 Implementation Package Instructions)
- Gate 2 C8 Implementation Package Scope Proposal — Accepted with clarification
- Owner Decision (текущая сессия) — выбор ADR-014 mechanism class: Hybrid VLM + heuristic validation

Ни один из перечисленных документов данным Implementation Package не переоткрывается и не изменяется.

## 4. Non-Goals

Данный Implementation Package не покрывает и не одобряет:

- Permanent perception mechanism
- Full CV pipeline
- Provider/vendor/model lock-in
- Precise geometry
- Furniture sizing / "will it fit"
- Layout optimization / design scoring
- Full Project Memory
- Multi-room graph
- 3D reconstruction
- Prompt Engine changes (включая `refinePromptDraft`)
- Generation Intelligence changes
- Consumer Contract formalization
- UI exposure
- Marketplace / budget / AI Agent
- Production monitoring
- Annotation platform
- Public user study
- Изменения Project Context или Roadmap
- Reopening ADR-011–014
- Создание ADR-015

## 5. Selected ADR-014 Mechanism Class Declaration

**Mechanism class: Hybrid VLM + heuristic validation.**

- Первичная интерпретация сцены производится через LLM/VLM-based visual reasoning.
- Ограниченный (bounded) слой heuristic validation обязателен и приводит выход к ADR-013-совместимому StructuredScene v0.
- Механизм явно маркируется как temporary, bounded, replaceable — как в коде (комментарии/naming), так и в сопроводительной документации.
- Механизм не трактуется как постоянная perception-архитектура.
- Критерии замены/формализации temporary-механизма определены в ADR-014 и данным документом не дублируются и не переопределяются.

## 6. Implementation Slice

Единственный покрываемый end-to-end путь:

photo (+ опциональный user-context с provenance) → Room Analyzer (Hybrid VLM + heuristic validation) → ADR-013-совместимый StructuredScene v0 (полный или partial) → Boundary Validation (структурная) → Minimal Evaluation Harness (Q1–Q11, staged) → Evaluation Report (supported/deferred/unsupported)

Другие пути реализации (альтернативные mechanism classes, комбинации) вне данного Implementation Package.

## 7. Proposed Module Boundary

Логические (не кодовые) границы модулей:

1. **Room Analyzer** — orchestration scene-analysis path
2. **VLM Interpretation Sub-component** — temporary, bounded, реализует primary visual reasoning
3. **Heuristic Validation Sub-component** — temporary, bounded, приводит вывод VLM к ADR-013-контракту
4. **StructuredScene v0 Producer/Assembler** — сборка итогового объекта по ADR-013
5. **Boundary Validator** — структурная валидация по ADR-014 §4.7
6. **Evaluation Harness** — прогон против Q1–Q11 (ADR-012)
7. **Traceability/Reporting Layer** — связывание артефактов с node/relation/attribute-определениями ADR-012/ADR-013 и формирование staged-отчёта

Внутренняя структура кода (файлы, классы, функции) — предмет решения на этапе исполнения Claude Code, не фиксируется данным документом.

## 8. StructuredScene v0 Engineering Contract

Согласно ADR-013:

- **Node categories** (закрытый список): Room, StructuralElement, Object, FreeSpaceRegion
- **Relation categories** (закрытый список): Adjacency, Containment, parameterized Blocking — любое расширение требует отдельного Engineering Decision, вне scope данного пакета
- **Attribute categories**: Identity (nodes и relations), Type/Category label, Spatial extent, Approximate spatial placement, Affordance, Illumination relevance
- **Confidence model**: known with confidence / known with uncertainty / unknown-not-inferable
- **Versioning model + schema-version awareness**: обязательны на architecture-contract уровне

**Engineering-конвенция schema-version (данный Implementation Package, per ADR-013 deferred item):**

- Корневое поле: `schemaVersion`
- Значение для Gate 2 C8 v1.0: `"structured-scene.v0"`
- `schemaVersion` обязателен для каждого `StructuredSceneV0`
- Отсутствие `schemaVersion` — fail boundary validation
- Неподдерживаемое/неожиданное значение `schemaVersion` — fail boundary validation
- Это engineering naming convention данного Implementation Package, не ADR и не изменение архитектуры

- **Room node / SpaceTypeId invariant** (ADR-004): сохраняется — Room может ссылаться на SpaceTypeId, но не дублирует классификацию

Точные типы остальных полей и формат сериализации — инженерная детализация данного пакета, не предопределены ADR-013 и не фиксируются в данном разделе как решение; определяются на этапе реализации в рамках указанных категорий.

## 9. Confidence and Provenance Model

- **Confidence** (ADR-013): known with confidence / known with uncertainty / unknown-not-inferable — обязателен для значимых nodes, relations, attributes.
- **Provenance** (ADR-014): visually observed / user-provided hints / inferred assumptions / unknown-not-inferable.
- Heuristic validation layer обязан обеспечивать отсутствие invented certainty: любое значение confidence/provenance должно быть выводимо из фактического источника данных, а не назначено по умолчанию.

## 10. Partial StructuredScene Handling

- Partial StructuredScene — валидное состояние, не ошибка.
- unknown-not-inferable — валидный терминальный статус для node/relation/attribute.
- Boundary Validator обязан принимать partial-сцены как валидные при соблюдении структурных требований (см. §11) — согласно hard constraint ADR-014 "partial-data validity".

## 11. Boundary Validation

Ограничена структурной валидацией (ADR-014 §4.7): schema conformance + наличие confidence/provenance. Не является semantic truth validation — проверка фактической корректности интерпретации сцены остаётся в объёме ADR-012 evaluation (раздел 12) и не выполняется Boundary Validator.

Обязательные проверки:

- допустимы только node categories из ADR-013 (закрытый список)
- допустимы только relation categories из ADR-013 (закрытый список)
- наличие schema-version
- наличие confidence
- наличие provenance
- валидность partial StructuredScene
- корректная обработка unknown-not-inferable
- отсутствие silent category expansion
- отсутствие invented certainty

## 12. Minimal Evaluation Harness aligned with ADR-012 Q1–Q11

- Назначение: измерение против normative Canonical Query Suite Q1–Q11 (ADR-012).
- Обязательная фиксация per-query статуса: supported / deferred / unsupported.
- PerceptionFidelity — diagnostic metric, не входит в primary acceptance criteria (ADR-012).
- Numeric thresholds, веса, SUS formula, benchmark/pilot scale — вне scope данного пакета, deferred to future Engineering Decision.

## 13. Staged Q1–Q11 Reporting

Canonical Query Suite (ADR-012): room identity, inventory, spatial relations, traffic feasibility, free space, natural light, lighting affordances, object affordances, constraint awareness, explanation, consistency/versioning (Q1–Q11).

Требования (Final Gate 2 Scope Decision §9):

- явный список staged subset (какие query поддержаны на момент closure)
- каждый неподдержанный query зафиксирован как traceable и deferred, не удалён
- schema-поддержка всех Q1–Q11 остаётся нетронутой независимо от staged-статуса
- evaluation harness честно фиксирует supported/deferred/unsupported статус для каждого query
- отсутствие silent permanent exclusion любого query

## 14. Required Fixtures

**Fixture policy:**

- Contract tests преимущественно используют hand-authored синтетические фикстуры `StructuredSceneV0`
- Тесты boundary validation не зависят от реальной интерпретации фото
- Room Analyzer path может использовать минимальный controlled image fixture set только при необходимости
- Использование реальных user photos в качестве фикстур запрещено
- Автоматический внешний/веб-сорсинг изображений запрещён
- Любая image-фикстура: локальная, test-only, non-user-private, нейтральная по provenance
- Fixture set остаётся минимальным и не превращается в annotation platform, benchmark dataset или public user study

**Обязательное покрытие фикстурами:**

- valid complete scene
- valid partial scene
- unknown-not-inferable case
- invalid missing confidence
- invalid missing provenance
- invalid unsupported node category
- invalid unsupported relation category
- user-context provenance case
- Q1–Q11 staged reporting case

## 15. Required Tests / Verification

- Contract tests: schema conformance StructuredScene v0 (ADR-013)
- Contract tests: поведение Boundary Validator по всем проверкам §11
- Прогон Evaluation Harness против Q1–Q11 с зафиксированным per-query статусом
- Regression-проверка: артефакты ADR-011–014 не изменены; Track-1 / существующие formatter types не изменены
- Чистый `tsc`
- Полный проход Vitest suite (ED-001)
- Explicit sign-off артефакт: staged subset listing для Final Gate 2 Closure Review, подтверждающий отсутствие ADR-012 rollback

## 16. Claude Code Execution Plan — staged, but not yet authorized

Порядок шагов (по аналогии с ADR-006 Implementation Package). **Данный план не является авторизацией начала выполнения.**

1. StructuredScene v0 — реализация схемы + contract tests
2. Hybrid VLM + heuristic validation mechanism — реализация, с явной пометкой temporary
3. Confidence/provenance propagation — реализация
4. Partial StructuredScene handling — реализация
5. Boundary Validation — реализация всех проверок §11
6. Evaluation Harness — реализация + staged Q1–Q11 reporting
7. Traceability comments + Closure Review readiness артефакт

Каждый шаг: review diff → confirm scope → commit → push, с явным подтверждением владельца перед началом следующего шага. Ни один шаг не начинается без отдельной авторизации.

## 17. Acceptance Checks

- Schema conformance StructuredScene v0 — пройдена
- Все проверки Boundary Validation (§11) — пройдены
- Confidence/provenance присутствуют на всех значимых nodes/relations/attributes
- Partial-сцены валидируются корректно
- Q1–Q11 статус явно зафиксирован по каждому query
- ADR-011–014 не изменены
- Track-1 / formatter types не изменены
- `tsc` — чистый
- Vitest suite — полный проход
- Mechanism явно маркирован как temporary/bounded/replaceable в коде и документации
- Отсутствуют артефакты, указывающие на permanent perception mechanism

## 18. Closure Evidence Required for Final Gate 2 Closure Review

- Явный список supported/deferred/unsupported по Q1–Q11
- Подтверждение отсутствия ADR-012 rollback
- Результаты regression-тестов
- Результаты contract tests
- Обновление/подтверждение traceability matrix (nodes/relations/attributes → Q1–Q11)
- Подтверждение, что mechanism остаётся маркирован как temporary
- Подтверждение отсутствия расширения scope за пределы Final Gate 2 Scope Decision

## 19. Explicit Out-of-Scope Confirmation

Настоящий Implementation Package не одобряет и не покрывает:

- Permanent perception mechanism
- Full CV pipeline
- Provider/vendor/model lock-in
- Precise geometry
- Furniture sizing / "will it fit"
- Layout optimization
- Project Memory
- Prompt Engine changes
- Generation Intelligence changes
- UI exposure
- Reopening ADR-011–014
- Создание ADR-015
- Изменения Project Context или Roadmap

## 20. Execution Trace / Owner Decisions

### Step 3 — Confidence/Provenance Propagation Beyond Normalization Boundary

Status: Deferred by Owner Decision.
Implementation: Not authorized.

Rationale:
Step 1 defines confidence/provenance as part of `StructuredSceneV0` through `Observed<T>`.
Step 2 enforces confidence/provenance at the temporary candidate → `StructuredSceneV0` normalization boundary through `normalizeObserved`.
No downstream `StructuredSceneV0` consumer is currently scoped.
Standalone Step 3 implementation would either duplicate Step 2 behavior or require speculative assumptions about future consumers, creating hidden scope expansion.

Disposition:
Step 3 is explicitly deferred, not silently removed.
The question may return only when a concrete downstream `StructuredSceneV0` consumer is explicitly proposed and scoped.

Constraints:

- No Step 3 implementation is authorized.
- No candidate normalization changes.
- No Room Analyzer orchestration.
- No downstream consumer.
- No BoundaryValidator.
- No Evaluation Harness.
- No Q1–Q11 reporting.

### Step 4 — Partial StructuredScene Handling

Status: Reduced to trace/documentation clarification pending Step 5 Boundary Validator scope review.
Implementation: Not authorized as standalone Step 4.

Rationale:
Step 1 already supports partial-scene representation through `StructuredSceneV0`, `Observed<T>`, and the valid partial fixture.
Step 2 already handles candidate-level partiality through candidate → `StructuredSceneV0` normalization, including handling of insufficient or unknown values.
The remaining question — partial `StructuredSceneV0` validity and acceptance — overlaps with Step 5 Boundary Validator responsibility.
Standalone Step 4 implementation would risk duplicating Step 1 schema/type behavior, duplicating Step 2 normalization behavior, or prematurely implementing Step 5 Boundary Validator responsibility.

Disposition:
Step 4 is not silently removed.
Step 4 is reduced to trace/documentation clarification.
Partial-scene representation remains covered by Step 1.
Partial candidate normalization remains covered by Step 2.
Partial-scene validity/acceptance must be explicitly reviewed under Step 5 Boundary Validator scope.

Constraints:

- No standalone Step 4 implementation is authorized.
- No changes to `Observed<T>`.
- No changes to `StructuredSceneV0`.
- No changes to `normalizeObserved`.
- No BoundaryValidator implementation under Step 4.
- No Evaluation Harness.
- No Q1–Q11 reporting.

### Step 5 — Boundary Validator Scope

Status: Accepted by Owner Decision.
Implementation: Authorized for execution planning only; implementation requires a separate Claude Code execution prompt.

Rationale:
Step 1 defines the `StructuredSceneV0` schema/type contract, including closed node categories, closed relation categories, `schemaVersion`, confidence/provenance representation, and partial scene representation.

Step 2 defines the candidate → `StructuredSceneV0` normalization boundary.

Neither Step 1 nor Step 2 provides an independent runtime validator for arbitrary StructuredScene-like objects. Step 5 is therefore necessary as a separate boundary validation layer.

Accepted Scope:
Step 5 is limited to read-only structural validation of arbitrary runtime objects. The preferred function shape is:

`validateStructuredSceneBoundary(scene: unknown): BoundaryValidationResult`

The validator must:

* accept `unknown`;
* validate structure only;
* validate `schemaVersion`;
* validate closed node categories;
* validate closed relation categories;
* validate required identity and structural fields;
* validate confidence/provenance presence where required by the `Observed<T>` contract;
* validate structurally valid partial scenes;
* reject unsupported contract expansion;
* return structured accept/reject diagnostics;
* remain pure and deterministic;
* not mutate input.

Boundaries:

* Step 1 owns schema/types/constants.
* Step 2 owns candidate → `StructuredSceneV0` normalization.
* Step 5 must not normalize, repair, mutate, enrich, or semantically interpret the scene.
* Step 5 must not check whether the scene matches the original room photo.
* Step 5 must not implement Room Analyzer, Evaluation Harness, Q1–Q11 reporting, or downstream consumer integration.

Step 4 Resolution Note:
Step 5 may close the residual Step 4 partial-validity question only after implementation and explicit verification that the Step 5 partial-validity rule covers the original Step 4 concern. This must be recorded as explicit review/commit trace, not assumed automatically.

---

### Step 4 Resolution — Partial Validity Covered by Step 5 Boundary Validator

Status: Resolved. Step 4 residual question closed.

Prior disposition (see Step 4 record above):
Step 4 was reduced to trace/documentation clarification. Partial-scene representation was covered by Step 1 (`StructuredSceneV0`, `Observed<T>`, valid-partial fixture). Partial candidate normalization was covered by Step 2 (`normalizeObserved`). The remaining open question — partial `StructuredSceneV0` validity and acceptance — was explicitly deferred to Step 5 Boundary Validator scope review, with closure permitted only after implementation and explicit verification that the Step 5 partial-validity rule covers the original Step 4 concern.

Verification:
Step 5 Boundary Validator (commit `3d56d178f0829c5b47efaf05956e7131bbeebda9`) implements read-only structural validation of arbitrary `StructuredSceneV0`-like objects, including explicit handling of partial scenes:

* The `Observed<T>` unknown branch (`confidence: "unknown_not_inferable"`, `provenance: "unknown_not_inferable"`, no `value` field) is validated as a structurally valid terminal state, not rejected as an error.
* A dedicated `valid-partial` fixture exercises this path and is accepted by `validateStructuredSceneBoundary`.
* Contract tests for this behavior are included in `boundary-validator.contract.test.ts` and pass.
* Architect review during Step 5 post-implementation review confirmed the implementation against the Step 1 contract (`types.ts`) field-by-field and found no invented structural requirements beyond what Step 1 declares.

Disposition:
The Step 4 partial-validity question is closed. No standalone Step 4 implementation was required. Partial-scene structural validity is fully covered by the combination of Step 1 (representation), Step 2 (candidate normalization), and Step 5 (independent boundary validation, this resolution).

Constraints (unchanged):
No retroactive changes to Step 1 types, Step 2 normalization, or Step 5 Boundary Validator are authorized by this resolution record. This is a trace/documentation entry only.

---
