# Post–Gate 2 Comparative Next-Stage Architecture Assessment — VistaRoom AI

```text
Status: Accepted
Accepted by: Project Owner
Acceptance date: 2026-07-14
Revision: 3 (final consolidated pass, replaces Revision 2 in full,
    fully self-contained — does not require reading Revision 1 or
    Revision 2 to understand scope, method, or content)
Prepared by: Claude (Chief Software Architect / Specification Partner)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-14
Baseline: Project Context v2.3 (Accepted, 2026-07-14)
Strategic Baseline: Living Strategic Roadmap v1.4 (Accepted, 2026-07-13)
Supersedes: Revision 1 and Revision 2 of this document (both:
    Owner review result — Revision Required)
Repository modification: Not performed. Not authorized by this document.
Implementation: Not authorized by this document.
```

Настоящая редакция — финальный консолидированный revision pass. Документ не выбирает track от имени Project Owner, не изменяет Roadmap/Project Context/ADR_INDEX/README/ADR/ED и не авторизует реализацию.

---

## Revision Log — соответствие замечаниям второго Owner review

| № замечания | Классификация | Раздел-исправление |
|---|---|---|
| 1. Assessment одновременно недостаточен и предназначен для track selection | Блокирующее | Part A.4 (переформулировано: достаточен для выбора cycle, недостаточен для implementation/cost/duration/provider) |
| 2. Candidate A ошибочно завершает Stage 2 | Блокирующее | Part D.14, Part J (переформулировано: "required path", не "completes") |
| 3. Scope определён через query subset, не через scene-output contract | Блокирующее | Part D.3 (переписан: bounded StructuredSceneV0 output contract первичен, Q-subset — следствие) |
| 4. Абсолютный `no hallucination` criterion | Существенное | Part D.11 (разделено на normative behavior / measured quality) |
| 5. Автоматический перенос Gate 2 exclusions | Существенное | Part D.4 (переформулировано: рекомендация, требует явного подтверждения) |
| 6. Противоречие Candidate B downstream impact | Существенное | Part E.15 (согласовано с E.6) |
| 7. Дублирующаяся нумерация Part E | Существенное | Part E полностью перенумерован E.1–E.16 |
| 8. Завышенная обязательность ACS-005–010 для C | Существенное | Part F.6 (смягчено: full-spectrum vs bounded slice) |
| 9. Неутверждённая роль decisionTrace | Существенное | Part F.4/F.5 (нейтрализовано, потенциальные входы) |
| 10. Proof до Scope Decision/Implementation Package | Существенное | Part H.2 (цепочка развёрнута полностью) |
| 11. Неподтверждённые Short/Medium/Long time-to-evidence | Существенное | Part G (строки удалены/заменены) |
| 12. Option 3 — двойной commitment без capacity-оценки | Существенное | Part M (разделено на primary + secondary) |
| 13. ADR и registry remediation смешаны | Существенное | Part L (переименован, разделён) |
| 14. Документ не self-contained | Редакционное | Parts B, C переписаны полностью, без ссылок на прежние редакции |
| 15. Неточная классификация "прочитано полностью" | Редакционное | Part A.2 (колонка типа чтения добавлена) |

---

## Part A — Source Verification

### A.1 Источники, прочитанные полностью (full-document read)

| Документ | Объём |
|---|---|
| `docs/project/Project Context v2.3.md` | 601 строка |
| `docs/roadmap/Living-Strategic-Roadmap-v1.4.md` | 396 строк |
| `docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md` | 362 строки |
| `docs/adr/ADR-010-Room-Analyzer-SpaceType-StructuredScene-Boundary.md` | 149 строк |
| `docs/adr/ADR-011-C8-Boundary-Representation.md` | 137 строк |
| `docs/adr/ADR-012-C8-Evaluation-Contract.md` | 190 строк |
| `docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md` | 188 строк |
| `docs/adr/ADR-014-Perception-Boundary.md` | 203 строки |
| `docs/platform/pcs/PCS-003-Project-Intelligence.md` | 101 строка |
| `docs/platform/acs/ACS-004-Prompt-Intelligence.md` | 136 строк |
| `docs/engineering-decisions/reviews/Final-Gate-2-Scope-Decision-C8.md` | 156 строк |
| `docs/engineering-decisions/reviews/C8-Semantic-Spatial-Intelligence-Core-Architecture-Assessment.md` | 191 строка |
| `docs/engineering-decisions/reviews/Gate2-Candidate-Assessment.md` | 303 строки |

### A.2 Источники, прочитанные целевыми завершёнными разделами (targeted complete-section read)

| Документ | Прочитанные разделы | Тип чтения |
|---|---|---|
| `docs/adr/ADR_INDEX.md` (855 строк) | Заголовок, "Architecture Status", целевой grep по ADR-010–014 | Targeted complete-section read — разделы, необходимые для проверки registry gap, прочитаны построчно; остальные 800+ строк (per-ADR записи ADR-000–009 и навигационные разделы) не относятся к предмету настоящего Assessment и не читались |
| `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md` (639 строк) | §11–16 (Boundary Validation, Evaluation Harness, Fixture policy, Required Tests) | Targeted complete-section read — прочитаны построчно целиком; остальные разделы (§1–10, реализация Steps 1–5, process deviation records §16+) описывают инженерную реализацию, не относящуюся напрямую к предмету сравнительного Assessment |

### A.3 Источники, не прочитанные напрямую в этой сессии

```text
Gate2-C8-Step6-Scope-Decision.md, Gate2-C8-Step7-Scope-Decision.md,
Gate2-C8-Step7-Closure-Readiness.md — не прочитаны напрямую;
содержание процитировано внутри Gate2-C8-Closure-Review.md,
который прочитан полностью (A.1).
PCS-005/006/008/009/010, ACS-005–010 — не прочитаны; не являются
governing-документами для трёх кандидатов, названных в авторизации
Owner, и не требуются для track-уровневого сравнительного Assessment.
```

### A.4 Заключение о полноте источников — исправлено

```text
Source completeness is sufficient for an Owner decision selecting
the next architecture cycle among Candidate A, Candidate B, and
Candidate C.

Source completeness is insufficient for:
- implementation authorization;
- fixed cost or duration commitments;
- provider, vendor, or model selection;
- final production-readiness commitments.

Each of the four items above requires candidate-specific
architecture and engineering evidence, produced only after the
next architecture cycle is selected and its own Architecture
Decision (Part L) is prepared — not by this comparative Assessment.
```

Это разрешает кажущееся противоречие второго Owner review: Assessment одновременно способен обосновать выбор следующего architecture cycle и честно не содержит данных, необходимых для commitment на implementation/бюджет/срок/провайдера — это два разных governance-события (выбор направления vs. авторизация конкретной реализации), и именно это разделение проведено явно.

### A.5 Верифицированные grep-факты

```text
grep по "ADR-010|ADR-011|ADR-012|ADR-013|ADR-014" в ADR_INDEX.md:
0 совпадений (кроме служебного заголовка "Architecture Status").
ADR_INDEX.md, строка 15: "Current value: Spatial Intelligence
    Foundation Complete (A2)"
```

### A.6 Заключение

```text
No blocking contradiction found across the fifteen source documents
read in full or by targeted complete section in this Assessment.
```

---

## Part B — Assessment Scope and Method (полностью самодостаточный текст)

### B.1 Мандат

Согласно явной авторизации Project Owner: подготовка одного консолидированного сравнительного Architecture Assessment по трём кандидатам —

```text
Candidate A — Spatial Perception / VLM Interpretation
Candidate B — Project & Asset Foundation
Candidate C — Designer Intelligence Foundation
```

— включающего source verification, architecture analysis, comparative assessment, risk analysis, dependency analysis, architecture recommendation и Owner Decision options.

Явно авторизовано: source verification; architecture analysis; comparative assessment; risk analysis; dependency analysis; подготовка одного полного консолидированного Assessment; architecture recommendation; Owner Decision options.

Явно не авторизовано: выбор кандидата от имени Owner; создание или изменение файлов репозитория; staging; commit; push; подготовка Implementation Package; реализация; изменение Roadmap, Project Context, ADR_INDEX, README, ADR или ED; выбор конкретных провайдеров, БД, auth или payment-систем; whole-home реализация.

### B.2 Метод

Для каждого кандидата анализ строится на основании: (1) текста Living Strategic Roadmap v1.4 (PARALLEL ENGINEERING TRACKS, LEVEL 3, CURRENT STRATEGIC STATE AFTER GATE 2); (2) текста Project Context v2.3 (§9–12, §18); (3) полного набора governing-документов Gate 2 C8 для Candidate A (пять ADR, Final Gate 2 Scope Decision, C8 Architecture Assessment, Gate2-Candidate-Assessment, целевые разделы Implementation Package); (4) PCS-003 для Candidate B; (5) ACS-004 для Candidate C.

Оценка ведётся по единым осям для всех трёх кандидатов: reusable accepted foundations, candidate-specific architecture completeness, governance scope-creep risk, technical/R&D uncertainty, operational complexity, external-service dependency, evaluation difficulty, reversibility, data/privacy exposure, strategic unblock effect, user-visible value horizon (Part G).

Каждому кандидату посвящён раздел единой standardized assessment structure: Goal, In Scope, Out of Scope, Inputs, Outputs, Dependencies, Architecture Decisions Required, Technical Complexity, Cost/Duration Range, Readiness Criteria, Acceptance Criteria, Evaluation Plan, Implementation Package Outline, Downstream Impact, Open Questions, плюс кандидат-специфичные уточняющие подпункты там, где это требуется для корректности (например, трёхслойная evaluation-модель для Candidate A).

### B.3 Что этот документ не делает — и явное разрешение KPI-вопроса

Не проводит Decision Review в смысле Roadmap v1.4 DECISION GOVERNANCE — этот процесс регулирует изменение самого Roadmap (выбор профиля KPI → сбор фактических данных → Decision Review → Decision Scorecard → Decision Record → опциональное обновление Roadmap), а не выбор следующего engineering track внутри уже принятого Roadmap. Выбор track управляется отдельным, более лёгким циклом, зафиксированным в Project Context v2.3 §10: Architecture Assessment → Owner Decision → Implementation Package → отдельная implementation authorization. Настоящий документ — это Architecture Assessment в рамках именно этого второго цикла, не первого.

Отсюда следует: KPI-профиль — необязательное вспомогательное свидетельство, а не обязательное условие выбора следующего track. Для pre-implementation выбора track более непосредственно полезны: technical evidence plan, оценка effort, dependency map, risk-adjusted value, proof-of-concept exit criteria — каждый из них представлен ниже по каждому кандидату (Parts D–F) в мере, доступной без выбора конкретного кандидата.

Не собирает и не оценивает количественно cost, duration, effort ни для одного кандидата (см. Part A.4) — это требует candidate-specific архитектурного решения, отсутствующего сегодня для всех трёх кандидатов.

---

## Part C — Current Architecture Baseline (полностью самодостаточный текст)

```text
Architecture Freeze (ADR-000–006): Completed and unchanged.
Gate 1 (Phase C — Integration Foundation): Closed, 2026-07-09.
Gate 2 (Phase D — Scene Intelligence, C8): Closed within
    representation-first scope, 2026-07-13.
```

**Реализовано и верифицировано в рамках Gate 2 C8:**

```text
StructuredSceneV0 (ADR-013): node categories (Room, StructuralElement,
    Object, FreeSpaceRegion), relation categories (Adjacency,
    Containment, parameterized Blocking), confidence model
    (known-with-confidence / known-with-uncertainty / unknown-not-
    inferable), versioning model, grounding support structure.
Candidate → normalization / heuristic validation boundary (Step 2) —
    реализована только Heuristic Validation Sub-component.
Boundary Validator (Step 5) — структурная/schema-валидация,
    13 кодов нарушений.
Staged Evaluation Harness (Step 6): Q1, Q2, Q3, Q6, Q7, Q8, Q9 —
    supported; Q4, Q5, Q10, Q11 — deferred.
Perception Boundary contract (ADR-014): 4 допустимых класса
    механизма (LLM/VLM-based, Hybrid VLM+heuristic, CV-based,
    Heuristic/temporary), permanent-механизм не выбран.
```

**Не реализовано:** VLM Interpretation Sub-component; real-image perception; live VLM interpretation; production room photo → Scene Candidate → StructuredScene (полная цепочка). Явно подтверждено Owner Interpretation Acknowledgement (Gate2-C8-Closure-Review.md §18): отсутствие VLM Interpretation Sub-component принято как не блокирующее закрытие Gate 2, но не принято как реализованное.

**Не авторизовано на реализацию:** ни один из Tracks A–H (Project Context v2.3 §10; Roadmap v1.4 — "Ни один трек не авторизован к реализации настоящим Roadmap update").

**Lightweight Project & Asset Direction** (Project, Room, RoomView, ImageAsset, UploadBatch): стратегически принято как направление; архитектура не оценена; схема не утверждена; persistence-стратегия не выбрана (Project Context v2.3 §11).

---

## Part D — Candidate A: Spatial Perception / VLM Interpretation

### D.1 Goal

Реализовать VLM Interpretation Sub-component — отсутствующий сегодня компонент, преобразующий реальную фотографию помещения в кандидатную сцену (`VlmSceneCandidate`), которая затем проходит уже реализованную нормализацию (Step 2) и валидацию (Step 5).

### D.2 Архитектурная готовность

```text
Candidate A has the strongest reusable architectural foundation
among the three candidates, not a fully completed architecture.

ADR-010–ADR-013 establish the surrounding representation,
normalization, schema, and queryability contracts — reusable
upstream/downstream foundation, not Track-A-specific architecture.

ADR-014 establishes the perception boundary contract and four
permitted mechanism classes at the class level only.

The concrete photo-interpretation architecture remains unassessed:
mechanism selection within the four ADR-014 classes, orchestration,
failure handling, provider abstraction, image preprocessing,
candidate production, semantic-truth validation design, operational
limits, and evaluation design each still require a Candidate-A-
specific architecture decision (D.7).
```

Gate2-C8-Closure-Review.md §18 подтверждает: VLM Interpretation Sub-component "must be treated as a separate future implementation boundary", требующий "its own separate architecture assessment, scope decision, implementation package, Owner authorization, and evaluation process".

### D.3 In Scope — исправлено: scene-output contract первичен, query subset вторичен

Прежняя формулировка определяла scope через query subset (Q1–Q3, Q6–Q9), что смешивало два разных уровня: perception output contract (что механизм должен произвести) и downstream query evaluation (что можно спросить у уже произведённой сцены). Исправлено:

```text
Initial Candidate A scope:
- produce a bounded StructuredSceneV0 from a single room photo,
  conforming to ADR-013 node/relation/attribute categories;
- support the node, relation, and attribute categories required
  for the currently implemented Q1–Q3 and Q6–Q9 downstream
  evaluation — as a CONSEQUENCE of bounded scene coverage, not
  as the primary contract itself;
- preserve partial/unknown outputs rather than force completeness
  (ADR-014 §4.5, item 4);
- provide confidence and provenance for every produced element
  (ADR-014 §4.6, four-way provenance distinction);
- explicitly exclude categories needed only for deferred Q4, Q5,
  Q10, Q11, as a scope-bounding choice, not as a schema limitation
  (ADR-013 schema itself remains unchanged and unnarrowed).
```

Выбор ОДНОГО механизма из 4 уже принятых классов (ADR-014 §4.4) остаётся частью этого scope. Явная маркировка выбранного механизма как temporary/bounded, если не финальный производственный выбор (ADR-014 §4.3).

### D.4 Out of Scope — исправлено: рекомендация, не автоматическое наследование

Прежняя формулировка утверждала, что исключения Final Gate 2 Scope Decision "логически переносятся" на следующий этап — это governance-инверсия: Scope Decision действует на scope, для которого он был принят, и не управляет автоматически следующим этапом. Исправлено:

```text
The following items were excluded from Gate 2 scope (Final Gate 2
Scope Decision §7) and are RECOMMENDED to remain excluded from the
first Candidate A iteration:

Permanent-механизм выбор.
Численная калибровка ADR-012 порогов (Query Accuracy threshold,
    SUS weights и т.д.).
Q4, Q5, Q10, Q11.
Production benchmark platform, annotation platform, public user study.
Track B, Track C.

Their exclusion from Candidate A is a RECOMMENDATION, not an
automatic inheritance from Gate 2. It must be explicitly confirmed
in the future Candidate A Scope Decision (D.7), which may adopt,
narrow, or widen this list with its own justification.
```

### D.5 Inputs / D.6 Outputs

```text
Inputs: room photo (обязательно); optional user-provided context
    (room purpose, known dimensions); SpaceTypeId, если уже доступен
    от Room Analyzer classification (ADR-010) — reference input.
Outputs: StructuredSceneV0 instance, ADR-013-conformant, полный или
    partial; confidence/provenance для каждого произведённого узла/
    отношения/атрибута.
```

### D.7 Architecture Decisions Required

```text
Perception Mechanism Selection and Evaluation Architecture.

Внутри этого решения должно быть определено: temporary или
permanent классификация выбранного механизма; выбранный класс
механизма (из 4 уже принятых ADR-014 классов); provider abstraction;
input/output boundary конкретной реализации; failure и fallback
model; confidence policy калибровки; prompt/version policy, если
механизм — LLM/VLM-based; semantic-truth evaluation design (D.12,
Layer 3); replacement triggers, конкретизирующие ADR-014 §4.9;
operational constraints (latency/cost envelope); явное подтверждение
или пересмотр рекомендованного Out of Scope списка (D.4).
```

### D.8 Technical Complexity

```text
Governance / architectural-integration complexity: Low–Medium.
Engineering / R&D complexity: Medium–High.
Rationale: governance-путь полностью определён принятыми ADR;
    техническая реализуемость (насколько надёжно VLM интерпретирует
    произвольную фотографию помещения) — открытый R&D-вопрос,
    не решаемый архитектурой заранее.
```

### D.9 Cost / Duration Range

```text
Не оценено количественно. Требует отдельного Engineering Decision
    или Implementation Package для определения: выбранного
    VLM-провайдера и его тарифов, объёма test image corpus, объёма
    ground-truth разметки, числа итераций prompt-tuning.
Смежный количественный прецедент (не Track A напрямую, а Generation
    Intelligence, ACS-001, унаследовано в PCS-003): ≤ $0.061 и
    ~60 сек за одну image-generation операцию — приведён только как
    пример существующей практики измерения в проекте, не как оценка
    Track A.
```

### D.10 Readiness Criteria

```text
Perception Mechanism Selection and Evaluation Architecture (D.7)
    подготовлен и принят Owner.
Test image corpus и ground-truth создание спланированы (не
    обязательно завершены) до начала Implementation Package.
```

### D.11 Acceptance Criteria — исправлено: `no hallucination` разделён на normative behavior и measured quality

Прежняя формулировка требовала соответствия hard constraint "no hallucination" как абсолютного критерия — недостижимого для вероятностной VLM-системы. Исправлено:

```text
Normative behavior (архитектурный принцип, ADR-014 §4.5, item 5):
The mechanism must not intentionally represent an inferred
assumption as a directly observed visual fact, must not force-fill
unknown values to appear complete, must not suppress reported
uncertainty, and must not silently accept a semantically incorrect
scene without any diagnosable signal.

Measured quality (эмпирическая метрика, не архитектурный принцип):
Hallucination rate must be measured against the accepted test
corpus (Layer 3, D.12) and remain within a threshold. The specific
threshold is deferred to the future Candidate A architecture and
evaluation decision (D.7) — it is not, and cannot be, "zero
hallucinations" as an absolute, provable property of a probabilistic
mechanism.
```

Остальные acceptance criteria без изменений: выбранный механизм соответствует прочим пяти hard constraints ADR-014 §4.5; Layer 3 semantic-truth evaluation (D.12) исполним против test image corpus и даёт честный отчёт; механизм маркирован temporary/bounded, если не финальный выбор.

### D.12 Evaluation Plan — трёхслойная evaluation model

Существующий Evaluation Harness (Step 6) спроектирован и верифицирован против synthetic/curated фикстур `StructuredSceneV0` — fixture policy Gate2-C8-Implementation-Package-v1.0.md §14 прямо запрещает использование реальных user photos в качестве фикстур. Harness отвечает на вопрос "можно ли честно опросить уже произведённую сцену", но не на вопрос "была ли эта сцена корректно произведена из этой фотографии". Это два разных evaluation boundary:

```text
Layer 1 — Schema / Boundary Validation.
    Существующий Step 5 validator. Переиспользуется без изменений.

Layer 2 — Representation Queryability.
    Существующий ADR-012 staged Evaluation Harness (Step 6).
    Переиспользуется как один из downstream evaluation слоёв,
    но недостаточен сам по себе для Candidate A acceptance.

Layer 3 — Perception Fidelity / Semantic Truth.
    Новый, не существующий сегодня evaluation package, оценивающий
    соответствие произведённой StructuredScene исходной фотографии.
```

Минимальные категории Layer 3 (для будущего Engineering Decision / Implementation Package, не выполняется в рамках настоящего Assessment):

```text
Entity detection correctness. SpaceType correctness. Structural-
element correctness. Object inventory precision/recall. Relation
correctness. Unknown/uncertain handling. Hallucination rate
(измеряемая метрика, не абсолютный критерий — D.11). Confidence
calibration. Grounding-to-image traceability. Partial-scene
behavior. Failure/rejection behavior. Latency and cost diagnostics.
```

### D.13 Implementation Package Outline (индикативный, не авторизованный к подготовке настоящим документом)

```text
1. Perception Mechanism Selection and Evaluation Architecture —
   отдельный governing document (D.7), предшествующий этому пакету.
2. Provider/mechanism abstraction layer.
3. Photo → VlmSceneCandidate producer, temporary-labeled.
4. Layer 3 semantic-truth evaluation package (новый).
5. Integration test: photo → candidate → (существующие Step 2/5/6).
6. Traceability / closure readiness артефакт.
```

### D.14 Downstream Impact — исправлено: Candidate A как путь, не как автоматическое завершение

Прежняя формулировка утверждала, что Candidate A "завершает Stage 2 продуктовой зрелости целиком" — некорректно как безусловное следствие выбора или начальной реализации трека. Исправлено:

```text
Candidate A is the required path toward completing Stage 2
продуктовой зрелости (Project Context v2.3 §2: Stage 2 не достигнут
именно из-за отсутствия real-image perception).

Stage 2 may be declared reached only after real-image perception
separately meets accepted fidelity, reliability, and production-
integration criteria — not automatically upon track selection, and
not automatically upon completion of an initial bounded proof
(D.3). The specific criteria for this declaration are not defined
by this Assessment and require a separate future decision once
Layer 3 evaluation (D.12) produces evidence.

Разблокирует production-валидацию Candidate C (см. Part F —
"Production validation depends on Track A").

Не влияет напрямую на Track D (Editing/Continuity) или Track E
(MultiView/Project Memory) — эти треки зависят прежде всего от
Track B (identity/provenance foundation), per Roadmap v1.4.

Не влияет на whole-home generation — остаётся отдельно
non-authorized независимо от прогресса Track A.
```

### D.15 Open Questions

```text
Какой из 4 классов ADR-014 будет выбран — не решено ни одним
    прочитанным документом.
Существует ли уже собранный test image corpus / ground truth
    набор — не подтверждено ни одним источником.
Численные пороги замены/калибровки и hallucination-rate threshold
    (D.11) — не определены.
Privacy/retention-политика для загружаемых пользователем фотографий
    помещений в контексте perception-вызова — не поднята ни одним
    прочитанным документом; требует отдельного рассмотрения, если
    выбранный механизм предполагает отправку фото внешнему провайдеру.
```

---

## Part E — Candidate B: Project & Asset Foundation

*(Полностью перенумерован E.1–E.16 без пропусков и дублирования — исправление структурной ошибки Revision 2.)*

### E.1 Goal

Ввести лёгкий фундамент данных: `Project, Room, RoomView, ImageAsset, UploadBatch`, без whole-home generation и без полного Project Mode (Project Context v2.3 §11; Roadmap v1.4, Track B).

### E.2 In Scope

```text
Project, Room, RoomView, ImageAsset, UploadBatch — базовые сущности
    и их отношения.
Идентичность и происхождение загрузок (upload provenance) —
    необходимая предпосылка для Track E.
```

### E.3 Out of Scope

```text
Whole-home / apartment generation. Полный Project Mode. Automatic
    room grouping. Cross-room consistency. 3D reconstruction. Mass
    editing. Все — явно и неоднократно зафиксированы как
    non-authorized (Roadmap v1.4, Project Context v2.3 §12).
```

### E.4 Ближайшая продуктовая ценность

```text
Immediate workflow value: Medium–High.
Возможные немедленные выгоды лёгкого фундамента данных, не требующие
    полной PCS-003 Project Intelligence capability (которая привязана
    к Gate 6 / Phase H, per PCS-003 "Integration Gates"): несколько
    изображений в одном проекте; происхождение загрузок; связь
    исходника и генераций; история вариантов; повторное открытие
    проекта; основа для undo/version comparison; управление комнатами
    и видами; подготовка к professional workflow.
Long-term maturity contribution: опора для Stage 5 (Consistent
    Project Designer) и Track E (MultiView and Project Memory).
```

Оговорка: эта немедленная ценность не подтверждена архитектурно — указывает на потенциал, а не на уже спроектированную capability.

### E.5 Inputs

```text
Пользовательские загрузки фотографий; метаданные комнаты;
    существующие сгенерированные изображения (из уже работающего
    Stage 1 AI Visualizer).
```

### E.6 Outputs

```text
Устойчивая идентичность Project/Room/RoomView/ImageAsset/UploadBatch,
    пригодная для последующего использования как источник фото для
    Track A, как единица группировки StructuredScene для Track C, и
    как identity/version foundation для Track E.
```

### E.7 Dependencies

```text
Не зависит от Track A (архитектурно самостоятелен).
Не зависит от Track C.
Ожидается как опора для будущего PCS-003, "при условии отдельного
    полного review совместимости" (Roadmap v1.4, LEVEL 2, п.3) —
    этот review не выполнен ни в этом документе, ни ранее.
Является обязательной предпосылкой для Track E (MultiView and
    Project Memory) — единственная обязательная downstream-
    зависимость, зафиксированная Roadmap v1.4.
```

### E.8 Architecture Decisions Required

```text
Project & Asset Foundation — Schema and Persistence Architecture.
    Включая: identity semantics; ownership; ordering; deletion
    policy; deduplication; asset provenance; transient versus
    persistent storage; upload failure handling; семантика RoomView
    (представляет ли source image, generated view, edited version
    или все три); связь с уже существующими generation logs/assets
    (Developer Studio's Generation Logs, Project Context v2.3 §17).
```

### E.9 Technical Complexity

```text
Governance / architectural-integration complexity: Medium.
    (Ни одного ADR не существует — полный Architecture Assessment
    предстоит выполнить с нуля, но предметная область — стандартная
    data-modeling задача, не открытая R&D-проблема.)
Engineering / R&D complexity: Low–Medium.
```

### E.10 Cost / Duration Range

```text
Не оценено количественно — требует отдельного Architecture
    Assessment с определением схемы и persistence-стратегии, которое
    отсутствует сегодня целиком (Project Context v2.3 §11: "Schema:
    Not approved. Persistence strategy: Not selected.").
```

### E.11 Readiness Criteria

```text
Собственный полный Architecture Assessment для Track B (E.8)
    подготовлен и принят Owner до Implementation Package.
```

### E.12 Acceptance Criteria

```text
Индикативно, не решено: проект из нескольких помещений сохраняет
    identity и provenance между сессиями без потери данных;
    удаление/дедупликация ассетов определены явно, не по умолчанию
    "не удалять никогда".
```

### E.13 Evaluation Plan

```text
Не определён ни одним источником — Candidate B, в отличие от
    Candidate A, не имеет предшествующего Evaluation Contract
    (аналога ADR-012). Открытый вопрос будущего Architecture
    Assessment.
```

### E.14 Implementation Package Outline (индикативный)

```text
1. Project & Asset Foundation — Schema and Persistence Architecture
   ADR (E.8), предшествующий этому пакету.
2. Схема сущностей и отношений.
3. Persistence-слой.
4. Интеграция с существующим Stage 1 generation flow.
```

### E.15 Downstream Impact — исправлено: устранено противоречие с E.6/E.7

Прежняя формулировка одновременно утверждала, что Candidate B создаёт foundation для Track A и Track C (E.6/E.7 в этой редакции), и что он "не влияет напрямую" ни на один из них — внутреннее противоречие. Исправлено:

```text
Candidate B is not a prerequisite for Candidate A or for the
architecture-only phase of Candidate C — both can proceed without it.

It can nevertheless improve the future PRODUCTION workflows of both:
stable room, asset, view, identity, and provenance boundaries make
it easier to organize photo inputs for Track A and to group
StructuredScene instances by room/project for Track C, once both
reach production maturity.

It is an explicit, mandatory prerequisite only for Track E
(MultiView and Project Memory), per Roadmap v1.4.

Ожидаемая (не подтверждённая) опора для PCS-003 (Project
    Intelligence, Gate 6).
```

### E.16 Open Questions

```text
Совместимость с PCS-003 — "при условии отдельного полного review",
    который не выполнен (Roadmap v1.4).
Соотношение с уже существующими Generation Logs (Developer Studio) —
    не определено ни одним источником.
Смешанные объекты (жилая+коммерческая часть) — отдельная future
    задача, явно не покрыта в PCS-003 первой версии.
```

---

## Part F — Candidate C: Designer Intelligence Foundation

### F.1 Goal

Архитектурная разработка и изолированная оценка Designer Reasoning на synthetic/curated StructuredScene (Roadmap v1.4, Track C).

### F.2 In Scope

```text
Архитектурная фаза: определение контракта Designer Reasoning,
    работающего на synthetic/curated StructuredScene, независимо
    от production-готовности Track A.
```

### F.3 Out of Scope

```text
Production-валидация на реальных сценах (зависит от Track A —
    см. F.6 для уточнения природы этой и других зависимостей).
Personal AI Designer / глубокая персонализация без отдельного
    privacy/consent Architecture Assessment (Roadmap v1.4).
```

### F.4 Inputs — исправлено: decisionTrace как потенциальный, не окончательный вход

Прежняя формулировка фиксировала `StructuredSceneV0 + decisionTrace` как вход Candidate C, притом что сам документ признаёт: входной/выходной контракт Designer Reasoning не определён. Исправлено:

```text
Potential inputs (не окончательный контракт):
- StructuredSceneV0;
- user/project constraints;
- Domain Intelligence decisions (там, где доступны — см. F.6);
- существующий ADR-005 Formatter decisionTrace — как опциональный
  evidence source, там, где семантически применимо.

The future Designer Reasoning Architecture Boundary ADR (F.7) must
determine whether the existing ADR-005 decisionTrace is:
- a direct input;
- an auxiliary evidence source;
- an output-adjacent trace;
- or insufficient, requiring a separate design-decision trace type.

Ни один из этих вариантов не выбран настоящим Assessment.
```

### F.5 Outputs

```text
Design brief, constraints, design decision, rationale/explanation,
    generation intent — конкретная форма и контракт не определены
    ни в одном прочитанном документе; открытый вопрос (F.15).
```

### F.6 Зависимости — переклассифицировано дважды

**Prompt Reasoning vs Designer Reasoning.** ACS-004 §"Ключевая архитектурная связь с PCS-008 (Design Reasoning)" устанавливает producer/consumer границу: Formatter (Prompt Intelligence) производит `decisionTrace` — прослеживаемую запись `{element, value, sourceRule}` — которую Design Reasoning потребляет, но "формулирует объяснение самостоятельно" (ACS-004, дословно). Это не конкурирующие слои reasoning, а уже установленная на ACS-уровне и закрытая ADR-005 граница. Отдельный ADR для разрешения "конфликта" не требуется.

**Domain Intelligence ACS-модули — смягчено.** ACS-004 отмечает, что активация PCS-008 как потребителя `decisionTrace` "отложена до появления ACS Domain Intelligence модулей" (ACS-005–010: Furniture, Layout & Ergonomics, Material, Color, Style, Quality Intelligence), ни один из которых сегодня не реализован. Прежняя формулировка Revision 2 из этого сделала слишком категоричный вывод — что production-реализация Design Reasoning "зависит от появления" этих модулей, рискуя заранее превратить Candidate C в обязательную реализацию всех ACS-005–010. Исправлено:

```text
Full-spectrum Designer Reasoning is expected to depend on Domain
Intelligence capabilities (ACS-005–010), per ACS-004's own
disclosed activation dependency for PCS-008.

A bounded Candidate C slice may be possible with a limited,
explicitly approved subset or with mock/curated domain decisions —
e.g. a small curated rule set, a single domain, an explicit
mock/stub boundary, layout constraints only, or style/material
rationale only.

The future Candidate C Architecture Assessment (F.7) must determine:
- which Domain Intelligence capabilities are mandatory for a
  bounded first slice;
- which may be mocked or curated;
- which remain deferred to a later, full-spectrum iteration.
```

Итоговая классификация:

```text
Prompt Reasoning ↔ Designer Reasoning: Not a blocking hidden
    dependency — producer/consumer boundary already established
    (ACS-004, ADR-005).
Domain Intelligence ACS-модули: Full-spectrum reasoning is expected
    to depend on them; a bounded subset remains an open architecture
    question, not an automatic blocker.
```

### F.7 Architecture Decisions Required

```text
Designer Reasoning Architecture Boundary — должен явно зафиксировать:
входной/выходной контракт (включая статус decisionTrace, F.4);
различие между design brief, constraints, decision, explanation и
generation intent; deterministic vs model-generated logic; источники
policy/rule; confidence; unsupported decisions; evaluation strategy;
отделение recommendation от explanation; какие Domain Intelligence
capabilities обязательны/mock/deferred для bounded первой итерации
(F.6).
```

### F.8 Technical Complexity

```text
Governance / architectural-integration complexity: Medium–High.
Engineering / R&D complexity: Medium — если ограничена bounded
    slice (F.6) с mock/curated Domain Intelligence; выше, если
    рассматривается сразу full-spectrum реализация.
```

### F.9 Cost / Duration Range

```text
Не оценено количественно — оценка невозможна до принятия Designer
    Reasoning Architecture Boundary ADR, определяющего сам контракт
    и объём bounded first slice (F.6).
```

### F.10 Readiness Criteria

```text
Designer Reasoning Architecture Boundary ADR принят; явно решено,
    какой объём Domain Intelligence (mock/curated/deferred)
    закладывается в первую bounded итерацию.
```

### F.11 Acceptance Criteria

```text
Индикативно не определено — зависит от решений внутри будущего ADR.
```

### F.12 Evaluation Plan — расширено за пределы Q10

Q10 (Explanation, ADR-012) — один переиспользуемый evaluation-вход, относящийся к explanation StructuredScene-уровня, но не полный evaluation contract для Candidate C, который шире:

```text
StructuredScene → constraints → design brief → design alternatives
    → design decision → rationale → generation intent
```

Q10 сам сегодня Deferred в Evaluation Harness (ADR-012 §4.2, Step 6). Исправленная evaluation-модель Candidate C:

```text
Constraint fidelity. Decision trace completeness. Rule compliance.
Design rationale faithfulness. Consistency between decision and
generation intent. Unsupported-decision handling. Human expert
review.
```

Q10-evaluator (сегодня не реализован) может быть переиспользован как один вход в Design Rationale Faithfulness, но не заменяет остальные шесть категорий.

### F.13 Implementation Package Outline (индикативный)

```text
1. Designer Reasoning Architecture Boundary ADR (F.7).
2. Contract definition: design brief / constraints / decision /
   rationale / generation intent; статус decisionTrace (F.4).
3. Architecture-only prototype на synthetic/curated StructuredScene,
   с явно определённым mock/curated Domain Intelligence boundary (F.6).
4. Evaluation model (F.12) — минимум constraint fidelity и decision
   trace completeness.
```

### F.14 Downstream Impact

```text
Соответствует Sustainable Competitive Advantage компоненту №3
    (Designer Reasoning, Roadmap v1.4).
Production validation depends on Track A.
Full-spectrum reasoning is expected to depend on Domain
    Intelligence; a bounded subset remains an open architecture
    question (F.6) — не абсолютный блокер архитектурной фазы.
Пересекается с Personal AI Designer / глубокой персонализацией —
    архитектурная фаза должна явно исключить сбор персональных
    данных сверх уже принятого scope.
```

### F.15 Open Questions

```text
Полный входной/выходной контракт Design Reasoning — не определён.
Статус decisionTrace как входа (F.4) — не решён.
Объём bounded first slice относительно Domain Intelligence (F.6) —
    не решён.
Deterministic rule-based логика или model-based (LLM) reasoning —
    открытый вопрос (та же нерешённость отмечена в ACS-004 для
    смежного Rule Engine/Prompt Reasoning).
```

---

## Part G — Comparative Matrix

Метрика "количество Accepted ADR" разделена на две (reusable foundations vs candidate-specific completeness). Строки "Time to first/production evidence" удалены как неподтверждённые количественные/порядковые оценки (Short/Medium/Long — это оценка длительности, не подтверждённая engineering decomposition ни для одного кандидата, per D.9/E.10/F.9) и заменены качественным, не estimated описанием evidence path.

| Ось | Candidate A | Candidate B | Candidate C |
|---|---|---|---|
| Reusable accepted foundations | High (ADR-010–013 + Final Gate 2 Scope Decision + C8 Architecture Assessment) | Medium/Unknown (PCS-003 описывает Gate 6 capability, не Track B foundation напрямую) | Medium/Unknown (ACS-004 даёт producer/consumer границу, не архитектуру Design Reasoning) |
| Candidate-specific architecture completeness | Medium (ADR-014 — контракт и классы механизма, не конкретная реализация) | Low (0 ADR, Architecture: Not assessed) | Low (0 ADR, Architecture: Not assessed) |
| Governance scope-creep risk | Low | Low–Medium | Medium |
| Technical / R&D uncertainty | Medium–High | Low–Medium | Medium |
| Operational complexity | Medium | Low–Medium | Medium |
| External-service dependency | Medium–High (провайдер VLM/LLM) | Low | Low (архитектурная фаза); High (production-фаза, зависит от Track A) |
| Evaluation difficulty | High (требует нового Layer 3) | Medium (нет прецедента Evaluation Contract) | High (шире Q10, F.12) |
| Reversibility | Medium (ADR-014 §4.9 требует replaceability) | Medium (persistence-решения обычно менее обратимы) | Medium |
| Data/privacy exposure | Medium (загрузка фото внешнему провайдеру) | Low–Medium (upload provenance, ownership) | Low (архитектурная фаза); Medium (если Personal AI Designer пересечение не исключено явно) |
| Strategic unblock effect | High (требуемый путь к Stage 2; разблокирует production-фазу Candidate C) | Medium (опора для Stage 5, Track E; возможная ранняя ценность — E.4) | Medium (продвигает Stage 3, зависит от Track A для production) |
| Relative evidence path (не estimated по длительности) | Potentially direct architecture-to-first-signal path, но с высокой R&D-неопределённостью (D.8) | Требует architecture и data-model definition с нуля перед любым сигналом | Требует architecture и dependency disposition (F.6) перед любым сигналом |

---

## Part H — Dependency and Sequencing Analysis

### H.1 Формальная структура зависимостей

```text
Track A: не зависит от B/C.
Track B: не зависит от A/C; ожидаемая (не подтверждённая) опора
    для PCS-003; обязательная предпосылка только для Track E.
Track C: архитектурная фаза не зависит от A/B; production-фаза
    зависит от Track A; full-spectrum реализация ожидаемо зависит
    от Domain Intelligence ACS-модулей, но bounded slice — открытый
    архитектурный вопрос, не установленный блокер (F.6).
```

### H.2 Sequencing Scenarios — цепочки развёрнуты полностью (исправление: proof не предшествует Scope Decision/Implementation Package)

**Scenario 1 — Intelligence-first**

```text
A architecture decision (D.7)
→ A Owner Scope Decision
→ A bounded proof Implementation Package
→ separate implementation authorization
→ A proof execution and Layer 3 evaluation (D.12)
→ C architecture (на реальных данных, если Layer 3 evaluation
   даёт приемлемый уровень достоверности; иначе — на curated
   сценах, per F.6)
→ B architecture
```
Плюсы: максимально быстрый information gain о реальной работоспособности perception. Минусы: B откладывается, хотя архитектурно независим. Trigger перехода: Layer 3 evaluation Track A завершена (независимо от результата — успешный результат определяет вход C на real-данных, неуспешный — на curated).

**Scenario 2 — Product-foundation-first**

```text
B architecture decision
→ B Owner Scope Decision
→ B lightweight Implementation Package
→ separate implementation authorization
→ B minimal implementation stabilized
→ A architecture decision → A Scope Decision → A proof → A
   Layer 3 evaluation
→ C
```
Плюсы: быстрее накапливается продуктовая ценность (E.4), не дожидаясь решения открытого R&D-вопроса Track A. Минусы: откладывает information gain о reliability perception. Trigger перехода: B foundation architecture принята и minimal implementation стабильна.

**Scenario 3 — Recommended balanced sequence**

```text
A architecture decision (D.7)
→ A Owner Scope Decision
→ A bounded proof Implementation Package
→ separate implementation authorization
→ A proof execution and Layer 3 evaluation (D.12)
→ B architecture may proceed in parallel with A execution/evaluation
   (не требует ожидания A — архитектурно независимы)
→ A hardening decision (по результатам Layer 3 evaluation)
→ C architecture on real (при успешной оценке A) or curated
   (при неуспешной) scenes
```
Плюсы: не блокирует B ожиданием A; использует Track A information gain для информирования момента запуска production-фазы C. Минусы: требует параллельного governance-внимания к двум архитектурным трекам (см. Part M, Option 3 — операционная нагрузка требует отдельного подтверждения Owner). Trigger перехода к C production-фазе: Layer 3 evaluation Track A завершена.

Ни один из трёх сценариев не выбран настоящим документом.

---

## Part I — Risk Register

### I.1 Governance-риски

| № | Риск | Затрагивает |
|---|---|---|
| 1 | Выбор permanent perception-механизма без отдельного governance-цикла | Track A |
| 2 | Незаметное расширение Track B в сторону whole-home / Project Mode | Track B |
| 3 | Track B реализуется без Architecture Assessment | Track B |
| 4 | Track C архитектура на synthetic-данных расходится с реальным Track A выводом | Track C |
| 5 | Bounded slice Candidate C незаметно расширяется в требование полного набора ACS-005–010 вместо явного mock/curated boundary (F.6) | Track C |
| 6 | ADR_INDEX registry gap может вызвать коллизию номеров при создании новых ADR | Все три |
| 7 | Отсутствие KPI-профиля/эксплуатационных данных — метод сравнения архитектурный, не эксплуатационный (см. Part B.3 — не блокер, а явно раскрытое ограничение метода) | Все три |
| 8 | Track C может расшириться в сторону Personal AI Designer без privacy/consent review | Track C |

### I.2 Разделённая оценка риска Candidate A

```text
Governance scope-creep risk: Low.
Technical / R&D uncertainty: Medium–High.
Operational risk: Medium.
Provider dependency risk: Medium–High.
```

### I.3 Технические/R&D-риски Candidate A

| № | Риск |
|---|---|
| 9 | Semantic hallucination from image input (измеряемый rate, не абсолютное свойство — см. D.11) |
| 10 | Confidence miscalibration |
| 11 | Single-view ambiguity and occlusion |
| 12 | Lack of image-grounded benchmark dataset |
| 13 | Provider/model behavior drift |
| 14 | Cost and latency unpredictability |
| 15 | Privacy and retention risk for uploaded room photos |
| 16 | Prompt/version reproducibility |
| 17 | Error propagation: incorrect perception → incorrect Designer Reasoning (Track C downstream) |
| 18 | False confidence created by structurally valid but semantically wrong scenes (мотивация для Layer 3, D.12) |

### I.4 Риски Candidate B

| № | Риск |
|---|---|
| 19 | Identity and provenance model становится несовместимой с последующим MultiView (Track E) |
| 20 | Premature persistence/provider coupling |
| 21 | Asset lifecycle and deletion ambiguity |

### I.5 Риски Candidate C

| № | Риск |
|---|---|
| 22 | Plausible but unfaithful reasoning |
| 23 | Design rules без авторитетного источника (policy/rule provenance не определён) |
| 24 | Explanation генерируется после решения, а не из decision trace |

---

## Part J — Recommended Candidate and Scope

Это архитектурная рекомендация, а не Owner Decision.

```text
Candidate A is provisionally recommended as the next architecture
cycle, subject to completion of a Candidate-A-specific architecture
and evaluation design (D.7, D.12).

Basis:
- Largest current capability gap: Candidate A addresses the
  remaining gap preventing Stage 2 (real-image perception), but
  does NOT automatically complete Stage 2 by track selection or by
  an initial bounded proof — Stage 2 completion requires separately
  accepted fidelity, reliability, and production-integration
  criteria (D.14).
- Strongest dependency-unblocking effect: production-фаза
  Candidate C структурно зависит от Track A; ни Candidate B, ни
  архитектурная фаза Candidate C не зависят от Candidate A.
- Maximum reuse of completed Gate 2 assets: ADR-010–014, Boundary
  Validator (Layer 1), staged Evaluation Harness (Layer 2)
  переиспользуются как часть, но не полнота, evaluation архитектуры
  Candidate A (см. трёхслойную модель D.12).
- Highest strategic information gain: Track A эмпирически проверит,
  соответствует ли реальный VLM-вывод StructuredSceneV0 без
  немедленного изменения ADR-013 — информирует, а не предвосхищает,
  будущие решения по Track C production-фазе.
```

**Следующий авторизуемый governance-шаг**, если Track A будет выбран: не Implementation Package, а подготовка Perception Mechanism Selection and Evaluation Architecture (D.7), включая проектирование Layer 3 (D.12). Implementation Package (даже "bounded proof") следует только после отдельного Owner Scope Decision (Part H.2).

**Архитектурно допустимая альтернатива:** параллельное ведение Track A (как primary cycle) и Architecture Assessment Track B (как secondary governance activity) — см. Part M, Option 3, с явной оговоркой об операционной нагрузке.

---

## Part K — Explicit Exclusions

### K.1 Что исключено из предмета настоящего Assessment

```text
Numeric/operational оценки cost, duration, effort для всех трёх
    кандидатов (Part A.4, D.9, E.10, F.9).
Полное чтение PCS-005/006/008/009/010, ACS-005–010.
```

### K.2 Что рекомендовано исключить из первой итерации Candidate A (требует явного подтверждения в будущем Candidate A Scope Decision — не автоматическое наследование, см. D.4)

```text
Permanent-механизм выбор. Численная калибровка ADR-012 порогов.
Q4, Q5, Q10, Q11. Production benchmark platform, annotation
platform, public user study. Track B, Track C.
```

### K.3 Что запрещено Roadmap v1.4 / Project Context v2.3 независимо от выбора track

```text
Whole-home / apartment generation. Полный Project Mode. Automatic
    room grouping. Cross-room consistency implementation. Full
    multi-room graph. 3D reconstruction. Mass editing. Выбор
    конкретного вендора, модели, провайдера, БД, auth или payment-
    системы. Изменение существующего поведения Partial Edit, Clear,
    масок, inpainting. Personal AI Designer / глубокую
    персонализацию без отдельного privacy/consent Architecture
    Assessment. Реализацию любого из Tracks A–H. Изменение Roadmap,
    Project Context, ADR_INDEX, README, ADR, ED. Staging, commit,
    push.
```

---

## Part L — Required Future Governance Artifacts (переименовано и разделено — исправление смешения ADR и remediation activity)

### L.1 Architecture Decisions (требуют полного ADR-цикла: Proposed → review → Owner Decision → Accepted)

| № | Рабочее название | Относится к |
|---|---|---|
| 1 | Perception Mechanism Selection and Evaluation Architecture | Track A (D.7) |
| 2 | Project & Asset Foundation — Schema and Persistence Architecture | Track B (E.8) |
| 3 | Designer Reasoning Architecture Boundary | Track C (F.7) |

### L.2 Governance Maintenance (не ADR — рутинное исправление реестра, не архитектурное решение)

| № | Активность | Относится к |
|---|---|---|
| 1 | ADR_INDEX Registry Remediation (регистрация ADR-010–014, обновление устаревшей метки "Spatial Intelligence Foundation Complete (A2)") | Governance, все треки — не блокирует ни один из них, но рекомендуется предшествовать присвоению новых номеров ADR из L.1 |

Ни один из пунктов L.1 или L.2 не создаётся, не нумеруется и не проектируется настоящим документом.

---

## Part M — Owner Decision Options

```text
Option 1 — Select Candidate A for the next architecture cycle.
    Next authorized governance step: prepare a Perception Mechanism
    Selection and Evaluation Architecture decision (D.7), including
    mechanism class, provider abstraction, photo-to-candidate
    contract, failure model, confidence policy, semantic-truth
    evaluation design (D.12), and explicit confirmation or revision
    of the recommended Out-of-Scope list (D.4). No Implementation
    Package yet. Only after this decision is accepted: Owner Scope
    Decision → Implementation Package preparation authorization →
    separate implementation authorization → proof execution and
    Layer 3 evaluation.

Option 2 — Select Candidate B only.
    Requires: separate Architecture Assessment for Track B (E.8)
    before any Implementation Package.

Option 3 — Select Candidate A as the primary next architecture
    cycle and authorize a Candidate B Architecture Assessment as a
    secondary, parallel GOVERNANCE activity only (not parallel
    implementation). This option requires separate Owner
    confirmation that sufficient governance and engineering
    capacity exists for two concurrent architecture-review threads
    — this Assessment does not evaluate available capacity and
    does not assume it is sufficient.

Option 4 — Select Candidate C, architecture-only phase
    (synthetic/curated StructuredScene), in parallel with A or B.
    Requires: separate Architecture Assessment for Track C
    (Designer Reasoning Architecture Boundary, F.7), including
    explicit disposition of which Domain Intelligence capabilities
    are mandatory, mocked, or deferred for a bounded first slice (F.6).

Option 5 — Defer all candidate selection.
    A KPI profile is optional supporting evidence, not a mandatory
    Roadmap v1.4 Decision Governance requirement for selecting the
    next architecture track (Part B.3). More directly useful: a
    technical evidence plan, effort estimate, dependency map,
    risk-adjusted value, and proof-of-concept exit criteria — each
    provided per candidate in Parts D–F to the extent possible
    without selecting one. This option may instead request ADR_INDEX
    registry remediation (Part L.2) before proceeding with any track.

Option 6 — Request additional sources before deciding.
    All sources requested in prior Owner reviews have now been read
    (Part A.1–A.2). Remaining unread sources (Part A.3) concern
    Step 6/7 scope-decision detail not required at this comparative
    level, or PCS/ACS documents unrelated to the three named
    candidates; Owner may still request them for deeper detail.
```

Ни одна из опций не выбрана настоящим документом.

---

## Part N — Architect Review Note

```text
Document status: Accepted.
Accepted by: Project Owner.
Acceptance date: 2026-07-14.
Revision: 3, final consolidated pass, fully self-contained.
All blocking, substantive, and editorial findings from both prior
    Owner reviews were addressed — see Revision Log at the top of
    this document.
No repository file was created, modified, staged, committed, or
    pushed in the preparation of this document.
No candidate was selected on behalf of the Project Owner.
No Implementation Package was prepared.
No new ADR was created, numbered, or drafted.
This document requires explicit Owner Review before any further
    governance step.
```

---

## References

```text
docs/project/Project Context v2.3.md
docs/roadmap/Living-Strategic-Roadmap-v1.4.md
docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md
docs/adr/ADR-010-Room-Analyzer-SpaceType-StructuredScene-Boundary.md
docs/adr/ADR-011-C8-Boundary-Representation.md
docs/adr/ADR-012-C8-Evaluation-Contract.md
docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md
docs/adr/ADR-014-Perception-Boundary.md
docs/adr/ADR_INDEX.md (targeted complete-section read)
docs/platform/pcs/PCS-003-Project-Intelligence.md
docs/platform/acs/ACS-004-Prompt-Intelligence.md
docs/engineering-decisions/reviews/Final-Gate-2-Scope-Decision-C8.md
docs/engineering-decisions/reviews/C8-Semantic-Spatial-Intelligence-Core-Architecture-Assessment.md
docs/engineering-decisions/reviews/Gate2-Candidate-Assessment.md
docs/implementation/Gate2-C8-Implementation-Package-v1.0.md (targeted
    complete-section read, §11–16)
```

Все — репозиторий `Qazaq71/VistaRoom.AI`, branch `main`, получены напрямую через `raw.githubusercontent.com`.
