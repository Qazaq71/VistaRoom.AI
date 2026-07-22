# Perception Mechanism Selection and Evaluation Architecture — VistaRoom AI

```text
Document type: Accepted architecture decision-support artifact
Status: Accepted
Accepted by: Project Owner
Acceptance date: 2026-07-14
Revision: 3 (full consolidated pass; supersedes Revision 2 as the
    accepted baseline)
Prepared by: Claude (Chief Software Architect / Specification Partner)
Prepared for: Project Owner (Nurlan)
Preparation date: 2026-07-14
Baseline: Project Context v2.3 (Accepted, 2026-07-14)
Strategic Baseline: Living Strategic Roadmap v1.4 (Accepted, 2026-07-13)
Prior revisions: Revision 1 (Revision Required), Revision 2
    (Revision Required — this document resolved the closed
    consolidated review set from that decision)
Repository: Qazaq71/VistaRoom.AI, branch main
Repository persistence: Authorized by Project Owner for this accepted
    document. Not committed or pushed by this action.
Implementation: Not authorized by this document.

In-place correction applied, in the Claude Project sandbox only (this file's body, unchanged except where noted): Part C, Part M, and
Part N have been extended, in place, under the same filename and
Revision 3 identity, to add explicit multi-image (1–6 ImageAsset)
support consistent with the binding 34-category/1–6-image root-
transition (Bounded Scope Rev5, in-place corrected, commit
565a3a03294086f319ccec5ff2e77afb5af8a9e1). This correction does not
create Revision 4. Mechanism Class B (already selected, Part AC
Decision 2) is not reopened; Class A/C/D comparative content
elsewhere in this document is retained unchanged as historical
comparative analysis. Git history preserves the pre-correction text.

This Phase 3 correction status: OWNER-ACCEPTED. Accepted by: Project
Owner (Nurlan). Phase 3 acceptance date: 2026-07-22. Repository
persistence: Authorized for direct persistence to main. Revision 4
was not created. Push is not authorized by this acceptance action.
The "Accepted" status and 2026-07-14 acceptance date above describe
the pre-existing Revision 3 baseline only; this Phase 3 correction
is accepted separately per the metadata immediately above.

Base SHA-256 (pre-correction, Accepted 2026-07-14):
658401949dfda49b7e59e6fa57855071a2a83a97396b16bc2d3476583acadf9a
(1382 lines)
```

## Non-authorization statement

Revision 3 accepted by Project Owner on 2026-07-14 (Part AC, Decision 1). Mechanism Class B selected (Part AC, Decision 2). PerceptionEvidenceArtifact selected as the grounding evidence boundary (Part AC, Decision 4). The operation-level PerceptionResult envelope accepted (Part AC, Decision 5). Bounded Coverage Matrix accepted (Part AC, Decision 6). Preparation of the Candidate A Bounded Scope Decision authorized (Part AC, Decision 7).

Настоящий документ по-прежнему не выбирает провайдера, модель, API или коммерческий план; не создаёт и не нумерует ADR; не изменяет ADR-010–014, `StructuredSceneV0`, ADR_INDEX, README, Project Context или Roadmap; не изменяет существующую Gate 2-реализацию; не запускает Claude Code и не готовит Implementation Package; не авторизует реализацию; не обрабатывает реальные пользовательские фото. Полный перечень — Part X.

---

## Part A — Source Freshness and Verification

### A.1 Freshness verification, выполненная перед подготовкой Revision 3

```text
Все 13 authoritative source files, использованных для Revision 1 и
Revision 2, повторно получены напрямую через
raw.githubusercontent.com/Qazaq71/VistaRoom.AI/main/... (HTTP 200 на
каждый запрос) и побайтово сверены (diff) с версиями, прочитанными
ранее.

Результат: ВСЕ 13 файлов — без изменений (byte-identical) с момента
подготовки Revision 1 и Revision 2.

Проверенные источники: Project Context v2.3.md, Living-Strategic-
Roadmap-v1.4.md, Post-Gate2-Comparative-Next-Stage-Architecture-
Assessment-Rev3.md, Gate2-C8-Closure-Review.md, Final-Gate-2-Scope-
Decision-C8.md, C8-Semantic-Spatial-Intelligence-Core-Architecture-
Assessment.md, Gate2-C8-Implementation-Package-v1.0.md, ADR-010–014.md
(все пять), ADR_INDEX.md.

Заключение: Revision 3 может безопасно продолжаться на основании уже
прочитанных полных текстов; повторное полное чтение не требовалось
(условие §2.2 поручения). Исходный код не инспектировался — не
требовался ни для одного factual claim в настоящей ревизии.
```

### A.2 Источники, прочитанные полностью

| Документ | Объём | Статус |
|---|---|---|
| `docs/project/Project Context v2.3.md` | 601 строка | Accepted, 2026-07-14 |
| `docs/roadmap/Living-Strategic-Roadmap-v1.4.md` | 396 строк | Accepted, 2026-07-13 |
| `docs/engineering-decisions/reviews/Post-Gate2-Comparative-Next-Stage-Architecture-Assessment-Rev3.md` | 1138 строк | Accepted, 2026-07-14 |
| `docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md` | 362 строки | Accepted — Gate 2 Closed, 2026-07-13 |
| `docs/engineering-decisions/reviews/Final-Gate-2-Scope-Decision-C8.md` | 156 строк | Accepted, 2026-07-10 |
| `docs/engineering-decisions/reviews/C8-Semantic-Spatial-Intelligence-Core-Architecture-Assessment.md` | 191 строка | Accepted as readiness artifact |
| `docs/adr/ADR-010-...md` | 149 строк | Accepted, 2026-07-09 |
| `docs/adr/ADR-011-...md` | 137 строк | Accepted, 2026-07-10 |
| `docs/adr/ADR-012-...md` | 190 строк | Accepted, 2026-07-10 |
| `docs/adr/ADR-013-...md` | 188 строк | Accepted, 2026-07-10 |
| `docs/adr/ADR-014-...md` | 203 строки | Accepted, 2026-07-10 |

### A.3 Целевые завершённые разделы (подтверждены неизменными)

`Gate2-C8-Implementation-Package-v1.0.md` §5–16; `ADR_INDEX.md` — targeted grep по ADR-010–014 и по "Spatial Intelligence Foundation Complete" (0 совпадений на регистрацию ADR-010–014; строка 15 всё ещё содержит устаревшую метку).

### A.4 Prior scoped mechanism declaration (перенесено из Revision 2 без изменений по существу)

```text
Gate2-C8-Implementation-Package-v1.0.md §5 задекларировал "Mechanism
class: Hybrid VLM + heuristic validation" для ограниченного Gate 2
engineering scope. Это релевантный historical precedent для
настоящего документа, не автоматическая authorization для нового
Candidate A governance cycle. Governance-обработка этого факта — Part
AC, Decision 3 (упрощена по требованию §8.2 настоящего поручения).
```

### A.5 Заключение о полноте источников

Source completeness достаточна для architecture-level рекомендации по mechanism class, bounded coverage, evidence/outcome contracts, evaluation design и governance-последовательности. Недостаточна для provider/model selection, численных threshold-commitments, Implementation Package.

---

## Part B — Proposal Scope and Method

### B.1 Мандат

Revision 3 полностью заменяет Revision 2 как текущий proposed draft, разрешая закрытый consolidated review set поручения (разделы 3–8 авторизации), без введения новых архитектурных направлений или product capabilities за пределами необходимых для устранения перечисленных несогласованностей.

### B.2 Метод

Единый comparative pipeline (Part C) применяется последовательно ко всем четырём классам ADR-014 §4.4. Классификация Class A/Class B (Part C.1, Part F, Part G) основана на прямом architecture-level разграничении трёх функций (Part C), а не на вопросе, какой код технически исполняется — это снимает противоречие между Revision 1 и Revision 2 по вопросу роли existing Step 2 (см. Part C.4).

### B.3 Что этот документ не делает

Не выбирает провайдера, модель, API, вендора, mechanism class, grounding boundary или PerceptionResult boundary от имени Owner (эти решения — Part AC, независимые Decisions 1–7). Не создаёт ADR. Не авторизует Implementation Package, proof execution, real-user-photo processing или test corpus creation. Не пересматривает ADR-013/012/014. Не переоткрывает Gate 2 closure.

---

## Part C — Perception Architecture Functional Boundaries

Три архитектурные функции, определяемые один раз и однозначно (устраняет неоднозначность Revision 1/Revision 2 относительно роли existing Step 2):

### C.1 Perception interpretation

Получает изображение (+ опциональный контекст/SpaceTypeId) и производит семантическую информацию о сцене. Это единственная функция, требующая image access.

**Multi-image extension (Bounded Scope Rev5 Section 2B, Section 8A/8B — 1–6 ImageAsset per RoomCase, Class B binding):** в рамках текущего bounded operation C.1 вызывается один раз на каждый `ImageAsset` (от 1 до 6), производя одно per-image observation/evidence. Сам контракт C.1 (один образ → одна семантическая интерпретация) не меняется независимо от числа вызовов; topology вызовов (последовательно, параллельно, batched) остаётся provider-neutral и не фиксируется этим документом.

### C.1.5 MultiImageFusion (новая функция, обязательна при N > 1)

Присутствует между C.1 (все N вызовов) и C.2. Не заменяет и не дублирует ни C.1, ни C.2.

```text
Вход:  N per-image observations/evidence (1<=N<=6), каждое со своим
       imageAssetId (Part M, PerceptionEvidenceArtifact).
Выход: один FusedRoomCandidate.

Обязанности:
- SameRoomAssessment — подтверждение, что все ImageAsset относятся к
  одному физическому помещению;
- CrossViewEntityCorrespondence — связывание наблюдений одного и того
  же объекта/элемента across views в единый claim, без дублирования;
- Contradiction Analysis — обнаружение и сохранение (не сокрытие)
  противоречий между изображениями;
- duplicate suppression и near-duplicate down-weighting (Bounded Scope
  Rev5 Section 8A.1) — дубликаты никогда не увеличивают итоговую
  confidence искусственно;
- temporal/material consistency checking — обнаружение before/after
  пар и существенной перестановки мебели между кадрами;
- claim-to-image traceability — каждый итоговый claim сохраняет
  ссылки на конкретные ImageAsset, из которых он выведен.
```

**FusionConsistencyStage (governed boundary):** MultiImageFusion производит один из следующих исходов, определённых в Bounded Scope Rev5 Section 8C:

```text
- продолжение к FusedRoomCandidate (путь к C.2);
- RejectedResult (mixed-room set, before/after пара, существенное
  изменение состояния помещения между кадрами, нарушение
  capture-set invariants);
- InsufficientEvidenceResult (same-room identity не подтверждена, или
  совокупный evidence недостаточен);
- управляемая передача технической ошибки в FailureResult, отдельно
  от семантического отклонения.
```

Semantic rejection и technical failure никогда не объединяются в один неразличимый исход (Bounded Scope Rev5 Section 8B.1).

При N=1 (единственное изображение) MultiImageFusion присутствует формально, но SameRoomAssessment и CrossViewEntityCorrespondence тривиальны (нечего сопоставлять); pipeline остаётся полностью обратно совместимым с исторической one-image моделью — N=1 является частным случаем 1–6, не отдельным путём выполнения.

### C.2 Candidate conformance / normalization

Преобразует, ограничивает или отклоняет untrusted intermediate candidate до формирования ADR-013-compatible scene. Не требует image access — работает над уже произведённой structural-репрезентацией.

**Multi-image extension:** при N>1 вход C.2 — это `FusedRoomCandidate` (результат C.1.5), а не единичный per-image candidate. C.2 сохраняет multi-source provenance внутри каждого claim (не сплющивает ссылки на несколько ImageAsset в одну), сохраняет contradiction records, переданные из C.1.5, и нормализует Composite Space Profile evidence (Bounded Scope Rev5 Section 6.3), где применимо, не теряя evidence ни одного из двух компонентов.

### C.3 Final boundary validation

Проверяет уже сформированный `StructuredSceneV0`. Не исправляет semantic content, не выполняет image interpretation, не доказывает semantic truth. Принимает или отклоняет результат. Это существующий Step 5 (Boundary Validator) — без изменений, применим ко всем классам одинаково.

**Multi-image extension:** набор проверок Boundary Validator (ADR-014 §4.7, 13 кодов нарушений) расширяется дополнительными inвариантами: source-image reference validity (все imageAssetId в claims существуют), RoomCase/capture-set cardinality (1–6), same-room invariant, contradiction preservation (contradiction records не были тихо отброшены), Composite Space Profile invariants, claim-to-image lineage. Топология самого C.3 (существующий Step 5) не меняется — расширяется только набор проверяемых инвариантов.

### Единый comparative pipeline

```text
Input (1–6 ImageAsset per RoomCase, Bounded Scope Rev5 Section 8A)
→ mechanism-specific interpretation (C.1, один раз на каждый ImageAsset)
→ [N>1: MultiImageFusion / FusionConsistencyStage (C.1.5) →
    FusedRoomCandidate] ИЛИ [N=1: тривиальный проход через C.1.5]
→ declared intermediate candidate ИЛИ direct scene output
    (зависит от класса — Part F/G/H/I)
→ optional candidate conformance (C.2 — присутствует у Class B,
    отсутствует у Class A по определению, Part F)
→ final boundary validation (C.3 — Step 5, всегда применяется)
→ evaluation (Part Q)
```

### C.4 Разрешение противоречия Revision 1 / Revision 2 по роли existing Step 2

```text
Revision 1: existing Step 2 — mechanism-agnostic downstream boundary.
Revision 2: existing Step 2 — heuristic-половина, определяющая
    Class B специфично, и поэтому Class A требует нового
    conformance-компонента.

Исправленное architecture-level разграничение (настоящая ревизия,
    по прямому указанию Owner review §3.1):

Existing Step 2 реализует функцию C.2 (candidate conformance/
    normalization) КАК ЧАСТЬ mechanism Class B (Hybrid VLM +
    heuristic validation), консистентно с Implementation Package
    §5/§7 (Part A.4).

Class A по определению НЕ включает функцию C.2 как отдельный шаг:
    VLM в Class A самостоятельно отвечает за производство ADR-013-
    conformant StructuredSceneV0 напрямую, без промежуточного
    untrusted-candidate-состояния, проходящего через отдельный
    normalization-слой. Это не означает, что Class A требует НОВОГО
    инженерного компонента, эквивалентного existing Step 2 — Class A
    архитектурно СЖИМАЕТ функции C.1 и C.2 в один шаг (VLM
    отвечает за обе), полагаясь строго на C.3 (Boundary Validator,
    уже существующий, применимый к любому классу) как единственную
    последующую проверку.

Таким образом Revision 2 ошибочно утверждал, что Class A "требует
    нового conformance-компонента" — это неверно: Class A требует не
    НОВОГО КОМПОНЕНТА C.2, а строгой DIRECT-SCHEMA-CONFORMANCE
    ответственности со стороны самой VLM-интерпретации (C.1),
    принимая риск, что модель не всегда сможет надёжно производить
    напрямую валидный результат — см. Part F.

Class B, напротив, явно сохраняет отдельный шаг C.2 (existing Step 2)
    между C.1 (VLM) и C.3 (Boundary Validator) — это единственное
    структурное отличие Class A от Class B на уровне topology.
```

---

## Part D — Current Baseline

```text
Architecture Freeze (ADR-000–006): Completed and unchanged.
Gate 1: Closed, 2026-07-09. Gate 2 (C8): Closed within representation-
    first scope, 2026-07-13.

Реализовано и верифицировано: StructuredSceneV0 (ADR-013); existing
    Step 2 (Heuristic Validation Sub-component, функция C.2, часть
    Class B per Implementation Package §5/§7); Boundary Validator
    (Step 5, функция C.3, ADR-014 §4.7, 13 кодов нарушений, не
    проверяет semantic truth); staged Evaluation Harness (Step 6,
    Q1/Q2/Q3/Q6/Q7/Q8/Q9 supported, Q4/Q5/Q10/Q11 deferred).

Не реализовано: VLM Interpretation Sub-component (функция C.1); live
    вызов VLM/LLM; production room photo → StructuredSceneV0.
    Owner Interpretation Acknowledgement (Gate2-C8-Closure-Review.md
    §18) явно принял это как не блокирующее Gate 2 closure.
```

**Photo-to-scene boundary согласно единому pipeline (Part C):**

```text
1–6 governed ImageAsset objects per RoomCase (+ опциональный контекст
    + опциональный SpaceTypeId reference input, не re-derived;
    Bounded Scope Rev5 Section 8A)
→ C.1 perception interpretation, один раз на каждый ImageAsset (не
    реализовано — предмет документа)
→ MultiImageFusion / FusionConsistencyStage (C.1.5, Part C) —
    тривиальна при N=1
→ [Class B (binding): FusedRoomCandidate → C.2 existing Step 2] ИЛИ
   [Class A: direct ADR-013-conformant output, C.2 отсутствует —
   historical comparative alternative, не активный путь, Part AC
   Decision 2]
→ C.3 Boundary Validator (Step 5, существующий, расширенный набор
   инвариантов — Part C)
→ Evaluation Harness (Step 6, существующий, Layer 2)
```

---

## Part E — Bounded Coverage Matrix

Новая часть по требованию §4.1 поручения. Заменяет Revision 2 подход "query subset как следствие" более полной таблицей.

| Category | Scope status | Evidence expectation | Layer 3 metric | Acceptance relevance |
|---|---|---|---|---|
| Room | Required in bounded proof | SpaceTypeId — reference only, не re-derived (Part D, Part R) | SpaceTypeId preservation correctness | Влияет на proof completion и acceptance |
| StructuralElement | Required in bounded proof | Image region evidence, best effort по полноте | Structural-element correctness | Влияет на completion; полнота — best effort, не acceptance-блокер |
| Object | Required in bounded proof | Image region evidence, best effort по полноте | Object inventory precision/recall | Влияет на completion; полнота — best effort |
| FreeSpaceRegion | Schema-valid but not evaluated | Не требуется в bounded proof | Не измеряется в первой итерации | Не влияет на acceptance первой итерации |
| Adjacency | Required in bounded proof | Evidence связанных nodes + relation basis | Relation correctness | Влияет на completion и acceptance |
| Containment | Required in bounded proof | Evidence связанных nodes + relation basis | Relation correctness | Влияет на completion и acceptance |
| Blocking | Required in bounded proof (Q3/Q6/Q9-relevant) | Evidence связанных nodes + relation basis | Relation correctness | Влияет на completion и acceptance |
| Type/Category | Required in bounded proof | Image region или inference basis | Entity detection correctness | Влияет на completion и acceptance |
| Approximate placement | Best effort | Image region evidence, "if inferable" | Structural/relation correctness (косвенно) | Не самостоятельный acceptance-критерий |
| Spatial extent | Best effort | "if inferable" | Не отдельная метрика первой итерации | Не acceptance-блокер |
| Affordance | Best effort | Image region/inference basis, где определимо | Object inventory (косвенно) | Не acceptance-блокер |
| Illumination relevance | Best effort | Image region evidence, где определимо | Не отдельная метрика первой итерации | Не acceptance-блокер |
| Confidence | Required in bounded proof | Reported + Normalized (Part O) | Confidence calibration | Влияет на completion и acceptance |
| Provenance | Required in bounded proof | Operational definitions (Part O.4) | Unknown/uncertain handling | Влияет на completion и acceptance |

Не расширяет ADR-013. Q1–Q3, Q6–Q9 (Layer 2) — следствие покрытия Room/StructuralElement/Object/Adjacency/Containment/Blocking/Type/Confidence/Provenance выше, не отдельный первичный критерий (Part E.1 ниже).

### E.1 Query subset как Layer 2 следствие (§4.2 поручения)

```text
Q1–Q3 и Q6–Q9 — Layer 2 representation-queryability coverage.
Они НЕ являются основной Layer 3 acceptance model. Поддержка query
subset не доказывает, что perception semantic output корректен —
это доказывается только Layer 3 (Part Q, Part R) на основании
настоящей Bounded Coverage Matrix, не списка queries.
```

---

## Part F — Mechanism Class A: Direct VLM-to-StructuredScene

```text
Определение (исправлено по §3.1 поручения):

Room photo → VLM Interpretation → напрямую ADR-013-conformant
StructuredSceneV0 → Boundary Validator (C.3) → Evaluation.

VLM самостоятельно отвечает за производство ADR-013-conformant
StructuredSceneV0. Отдельный candidate-normalization layer (C.2) НЕ
является обязательной частью этого класса. Existing Boundary
Validator (Step 5) может принять или отклонить конечный результат, но
НЕ исправляет candidate и не превращает Class A в Hybrid Class B при
отклонении/принятии.

Не утверждается (в отличие от Revision 2), что Class A обязательно
требует БОЛЬШЕ нового кода, чем Class B — Class A требует НОВОГО
компонента C.1 (VLM Interpretation), как и Class B, но НЕ требует
нового компонента C.2, поскольку C.2 в этом классе отсутствует по
определению, а не заменяется чем-то новым.

Главные риски Class A:
- direct schema-conformance burden — вся ответственность за ADR-013
  соответствие лежит на самой VLM-интерпретации, без структурного
  барьера между ней и StructuredSceneV0;
- strict structured-output dependency — модель обязана надёжно
  производить структурированный, а не свободный текстовый вывод;
- higher rejection probability на Boundary Validator (C.3), поскольку
  нет промежуточного слоя, который мог бы скорректировать
  незначительные несоответствия перед финальной проверкой;
- greater dependence on model reliability;
- lack of candidate correction/normalization — любая
  структурная неточность модели напрямую ведёт к rejection, а не к
  скорректированному partial output;
- prompt and model drift sensitivity — выше, чем у Class B, поскольку
  нет промежуточного буфера.

Grounding potential: как и в Class B, зависит от explicit prompt/
output design (Part M) — reasoning trace не является image grounding.

Evaluation difficulty: высокая — при отклонении Boundary Validator
нет промежуточного candidate-состояния для диагностики, была ли
ошибка в интерпретации или в структурировании.

Пригодность для bounded первой итерации: ниже, чем Class B, по
критерию rejection risk и отсутствия candidate-level диагностики —
не по критерию "требует больше нового кода" (это утверждение
Revision 2 удалено).

Пригодность как temporary/permanent: применимо в равной мере с
Class B; ADR-014 не различает классы по этому признаку.
```

---

## Part G — Mechanism Class B: Hybrid VLM + Heuristic Validation

```text
Определение (сохранено): Room photo → VLM Interpretation → untrusted
VlmSceneCandidate → existing Step 2 (C.2, candidate normalization/
correction, часть hybrid mechanism per Implementation Package §5/§7)
→ StructuredSceneV0 → Boundary Validator (C.3) → Evaluation.

Отличие от Class A — исключительно наличие отдельного шага C.2
(existing Step 2) между C.1 и C.3 (Part C.4) — не "больший/меньший
инженерный объём" сам по себе.

Сильные стороны: переиспользование уже принятого и верифицированного
Step 2; candidate-level diagnostics при rejection (можно отличить
ошибку VLM-интерпретации от ошибки нормализации); ниже rejection risk
на C.3 благодаря промежуточной коррекции.

Ограничения (сохранено и усилено, §3.11 поручения):

Existing Step 2 (C.2) reduces STRUCTURAL and CONTRACT-LEVEL
invalidity risk. Он НЕ доказывает image-grounded semantic
correctness; НЕ проверяет, действительно ли объект присутствует на
фото; НЕ калибрует confidence; НЕ доказывает правдивость "visually
observed" provenance. Semantic hallucination для Class B остаётся
unknown until Layer 3 evaluation — наравне с Class A, не ниже
(§3.11 поручения; см. Part J, Part T).

Grounding potential: как у Class A — зависит от explicit design
(Part M), не от наличия C.2.

Пригодность для bounded первой итерации: выше Class A по критерию
engineering reuse и candidate-level diagnostics.

Пригодность как temporary/permanent: применимо в равной мере;
hardening per Part V.
```

---

## Part H — Mechanism Class C: CV-Based Interpretation

```text
Определение (ADR-014 §4.4): традиционные/обученные CV-техники
(детекция, сегментация), отображаемые в категории StructuredSceneV0.

Topology (уточнено по §3.3 поручения — не фиксируется окончательно):

CV output → CV-to-scene mapping adapter → VlmSceneCandidate ИЛИ
    direct StructuredSceneV0 (не решено настоящим документом, какой
    именно intermediate contract будет выбран — это зависит от
    будущего архитектурного решения при выборе Class C) →
    применимые conformance/validation stages (C.2, если выбран
    candidate-путь; либо напрямую C.3, если выбран direct-путь,
    аналогично Class A topology).

Термин VlmSceneCandidate НЕ используется здесь как обязательное
    естественное имя для чистого CV output — CV-выход (bounding
    boxes/masks/labels) содержательно отличается от VLM-текстового
    candidate и требует отдельного mapping adapter независимо от
    того, какое имя присвоено промежуточной структуре.

Grounding assessment (исправлено по §3.12 поручения — не
    "наивысший grounding для всей сцены"):

    Entity localization grounding: сильная сторона CV, если детектор
        производит boxes/masks — это НАИБОЛЕЕ естественный формат
        evidence среди четырёх классов для отдельных обнаруженных
        объектов/элементов.

    Relation and attribute semantic grounding: НЕ возникает
        автоматически из наличия bounding box — adjacency,
        containment, blocking, affordance требуют ДОПОЛНИТЕЛЬНОГО
        mapping, geometric reasoning, inference basis и, как и для
        Class A/B, Layer 3 evaluation для подтверждения semantic
        correctness.

Ограничения: object detection/segmentation имплементация explicitly
    вне scope ADR-013/014 — наибольший новый инженерный/R&D-объём;
    открытый vocabulary плохо сочетается с закрытыми CV-таксономиями;
    слабая relation-level поддержка без дополнительной геометрической
    логики.

Пригодность для bounded первой итерации: низкая — наибольший новый
    объём, наименьшее переиспользование Gate 2 активов, и
    неопределённый intermediate contract (требует отдельного
    архитектурного решения до реализации).

Пригодность как temporary/permanent: скорее permanent-кандидат при
    доказанной зрелости.
```

---

## Part I — Mechanism Class D Variants

Разделено на три подварианта по требованию §3.3 поручения (Revision 1/2 трактовали Class D монолитно).

```text
D1 — Mock/manual fixture producer.
    Ручной или жёстко закодированный candidate/scene, без обработки
    изображения. НЕ является реальным Candidate A perception proof.
    Единственная законная роль: integration-test harness для
    пайплайна C.2→C.3→Layer 2 (проверка Step 2/5/6 end-to-end без
    реального VLM-вызова). No external image exposure (§3.10
    Revision 2 wording, сохранено).

D2 — Bounded image heuristic.
    Может анализировать изображение примитивными, не-ML средствами
    (например, простая эвристика по метаданным изображения или
    ограниченный pixel-level анализ), но имеет очень ограниченную
    capability — не эквивалент VLM/CV-интерпретации. Если обрабатывает
    изображение локально, требует внутренней privacy/retention-
    политики (Part U), даже без внешнего провайдера.

D3 — Metadata-only heuristic.
    Использует только метаданные (например, EXIF, имя файла,
    пользовательский контекст), не пиксельное содержимое. НЕ доказывает
    visual perception ни в каком смысле.

Ни один из трёх подвариантов не рекомендуется как основной Candidate A
    mechanism, если Owner отдельно не выберет крайне узкий proof scope
    (например, изолированную проверку пайплайна без реальной image-
    интерпретации, отдельно от вопроса perception fidelity).
```

---

## Part J — Comparative Matrix

| Ось | Class A (Direct) | Class B (Hybrid) | Class C (CV-based) | Class D (D1/D2/D3) |
|---|---|---|---|---|
| Наличие C.2 (candidate conformance) в mechanism | Отсутствует по определению | Присутствует (existing Step 2) | Присутствует (новый mapping adapter, форма не решена) | D1: тривиальная/отсутствует; D2/D3: минимальная |
| Structural invalidity risk | Выше (нет промежуточной коррекции; выше rejection на C.3) | Ниже (Step 2 корректирует до C.3) | Средний (новый adapter может содержать ошибки) | Низкий, но неинформативен |
| Semantic hallucination risk (image-grounded) | Unknown, требует Layer 3 | Unknown, требует Layer 3 — НЕ ниже, чем у Class A (§3.11) | Unknown, требует Layer 3; возможно ниже для "выдумки" целых объектов (детектор либо находит, либо нет), но не для relation/affordance семантики | D1/D3: не применимо (нет image-интерпретации); D2: unknown, ограниченная capability |
| Entity localization grounding | Требует explicit design | Требует explicit design | Наивысший (естественный bounding box/mask) | Не применимо/минимальный |
| Relation/attribute semantic grounding | Не автоматический, требует Layer 3 | Не автоматический, требует Layer 3 | Не автоматический — требует mapping + geometric reasoning + Layer 3 (§3.12, не "наивысший для всей сцены") | Не применимо |
| Candidate-level diagnostics при rejection | Отсутствуют (прямой rejection на C.3) | Присутствуют (можно изолировать C.1 vs C.2 ошибку) | Присутствуют, зависят от выбранного intermediate contract | Не применимо к цели Layer 3 |
| Engineering complexity (новый объём) | Средняя (новый C.1, C.2 отсутствует по определению) | Низкая (новый C.1; C.2 переиспользуется) | Высокая (новый C.1 + новый mapping adapter) | Минимальная (D1); низкая-средняя (D2/D3) |
| Rejection probability | Выше | Ниже | Зависит от зрелости adapter | Не применимо |
| Provider dependency | Высокая | Средняя | Средняя–высокая | Отсутствует (mock) |
| Evaluation difficulty | Высокая (нет candidate-уровня) | Средняя (два уровня диагностики) | Высокая (adapter специфичен) | Не применимо к Layer 3 |
| Suitability for bounded first proof | Средняя–низкая (rejection risk выше) | Наивысшая | Низкая | D1 — только test harness; D2/D3 — не рекомендуются как основной механизм |
| Suitability for production hardening | Возможна при доказанной надёжности модели | Возможна, лучшая база для итеративного hardening | Возможна при большей инвестиции | Не применимо |

---

## Part K — Architectural Recommendation

Class B is the Owner-selected mechanism class for the Candidate A bounded architecture cycle (Part AC, Decision 2). The comparative reasoning below remains the accepted basis for that Owner Decision.

```text
Mechanism Class B (Hybrid VLM + heuristic validation, per уточнённой
topology Part C.4/Part G) остаётся рекомендуемым классом для VLM
Interpretation Sub-component.

Обоснование (уточнено относительно Revision 2):
- Ниже structural invalidity risk и rejection probability на
  Boundary Validator, благодаря сохранённому шагу C.2 (existing
  Step 2) — это structural/engineering преимущество, НЕ доказанное
  преимущество по semantic hallucination (Part G, Part J, Part T —
  оба класса unknown до Layer 3).
- Candidate-level diagnostics облегчают изоляцию источника ошибки
  при Layer 3.
- Максимальное переиспользование уже принятой архитектуры (Step 2,
  5, 6).
- Prior Gate 2 Implementation Package §5 declaration (Part A.4) —
  релевантный precedent, не автоматическая authorization для нового
  cycle; governance-обработка — Part AC, Decision 3.

Class A остаётся архитектурно допустимой альтернативой при явном
признании более высокого rejection risk и отсутствия candidate-level
diagnostics (Part F) — не как "более затратный по коду" вариант.

Class C — при явном стратегическом решении инвестировать в CV-подход,
с учётом неопределённого сегодня intermediate contract (Part H).

Class D — не рекомендуется как основной механизм ни в одном из трёх
подвариантов (Part I); D1 пригоден только как integration-test harness.
```

---

## Part L — Provider, Mechanism and Orchestration Abstractions

Новая, более детализированная структура по требованию §3.6 и §7.1 поручения.

### L.1 Provider/mechanism adapter (низкоуровневый интерфейс)

```text
interpretPhoto(...) → raw provider/mechanism output | provider/
    technical failure.

Изолирует provider-специфичный формат запроса/ответа, аутентификацию,
лимиты. НЕ возвращает `rejected` — rejection возникает только после
C.3 validation (§3.6 поручения — исправление относительно более
ранних ревизий, где границы ответственности были менее чёткими).
НЕ классифицирует insufficient evidence как provider error — это
отдельная категория PerceptionResult (Part N).
```

### L.2 Perception orchestration (более высокий уровень)

```text
perceivePhoto(...) → PerceptionResult (Part N).

Отвечает за: preprocessing (Part P.1); provider invocation; candidate
transformation; normalization, если применимо (C.2, только для
Class B); boundary validation (C.3); outcome classification (Part N);
evidence artifact assembly (Part M); diagnostics.
```

### L.3 Provider abstraction vs Mechanism abstraction (§7.1 поручения)

```text
Provider abstraction: позволяет менять provider/model ВНУТРИ одного
    принятого mechanism class, если сохраняются accepted contracts
    (Part L.4 — правило смены provider).

Mechanism abstraction: обеспечивает общий внешний PerceptionResult
    contract (Part N), единый для всех классов. Internal topology,
    candidate format, mapping и conformance stages МОГУТ различаться
    между классами (Part C.4, Part F/G/H/I) — mechanism abstraction
    не требует одинаковой internal topology, только одинакового
    внешнего контракта.

Mechanism-class replacement: требует отдельного architectural review,
    если меняет candidate topology, evidence model, conformance
    stages, privacy assumptions или evaluation model (Part V).
    Existing Step 2 НЕ гарантированно остаётся неизменным при любой
    смене mechanism class — только при смене provider ВНУТРИ Class B.
```

### L.4 Правило смены provider (§7.2 поручения)

```text
Смена provider НЕ требует нового architecture review, только если
новый provider:
- остаётся внутри принятого abstraction contract (L.1);
- не меняет privacy/retention assumptions (Part U);
- не меняет data residency/security assumptions;
- поддерживает required evidence (Part M);
- поддерживает accepted version traceability (Part P);
- не ломает accepted latency/cost envelope (Part U.3);
- не меняет evaluation assumptions (Part Q).

В противном случае — targeted review или отдельный Engineering
Decision, не рутинная замена.
```

---

## Part M — PerceptionEvidenceArtifact and Grounding Contract

Разрешение архитектурного gap Revision 1/2 через рекомендуемую boundary-модель (§3.4 поручения).

### M.1 Определения

```text
Reasoning trace: текстовое объяснение модели. НЕ является image
    grounding.
Image grounding: проверяемая связь произведённого элемента с
    конкретной областью/evidence исходного изображения.
```

### M.2 Рекомендуемая boundary-модель: PerceptionEvidenceArtifact

```text
Отдельный, provider-neutral diagnostic/evaluation artifact, не
изменяющий ADR-013 StructuredSceneV0, не являющийся частью production
scene graph, не являющийся Project Memory.

Связывает:
- source image identifier(s) — одно или несколько, при claim-level
  evidence, полученном из нескольких ImageAsset одного RoomCase
  (Bounded Scope Rev5 Section 8A, Section 8D); при single-image claim
  (N=1 или evidence виден только в одном кадре) — одно значение, как
  и прежде;
- preprocessed image identifier, если применимо (Part P.1);
- candidate or scene element identifier (stable identity, ADR-013
  Identity attribute — не новое поле в самой StructuredSceneV0);
- evidence reference (bounding box / polygon / mask / crop identifier
  / provider-specific reference, нормализованная за provider
  abstraction — конкретный формат не выбирается здесь);
- evidence type;
- confidence/provenance (Part O);
- mechanism version, prompt version, provider/model identifier
  (Part P);
- preprocessing transform metadata (Part P.1).

Используется Layer 3 evaluation и regression diagnostics; имеет
отдельную privacy/retention policy (Part U.2).
```

### M.3 Evidence semantics по типу элемента

```text
Node evidence: обычно одна или несколько image regions.
Relation evidence: references на evidence связанных nodes + relation
    basis (geometric или inferential support).
Attribute evidence: image region, pixel cue, user-provided evidence
    или explicit inference basis.
```

### M.4 Grounding lifecycle

```text
Evidence создаётся perception mechanism (C.1).
Evidence сохраняется в PerceptionEvidenceArtifact, не в самой
    StructuredSceneV0.
StructuredSceneV0 хранит только stable element identity, позволяющую
    связать scene element с evidence artifact (не требует изменения
    ADR-013 — Identity attribute уже существует, ADR-013 §4.4).
Layer 3 получает evidence через artifact, не через изменение ADR-013
    schema.
```

### M.5 Статус модели

```text
PerceptionEvidenceArtifact selected by Project Owner on 2026-07-14
(Part AC, Decision 4). Authoritative sources do not make this model
incompatible with the accepted schema — re-reading of ADR-013/ADR-014
in this session found the model compatible with ADR-013 §4.4 (Identity
attribute) and ADR-014 §4.5 item 6 (grounding to nodes/relations/
attributes), without modification of those ADRs.
```

### M.6 Разделение evidence и diagnostics (Bounded Scope Rev5 Section 8D)

Multi-image extension вводит два дополнительных, отдельных от `PerceptionEvidenceArtifact` артефакта — оба operational/technical, не semantic:

```text
PerceptionOperationDiagnostics: как обрабатывалась операция технически
    в целом (operation-level trace, stage/status на уровне RoomCase).

ImageAssetProcessingDiagnostic: как обработан один конкретный
    ImageAsset — processing status, failure stage, failure code,
    retryability, provider trace, preprocessing trace, evidence
    availability, excludedFromFusionReason.
```

`PerceptionEvidenceArtifact` остаётся ответом на вопрос «почему система сделала semantic claim»; оба diagnostics-артефакта отвечают на вопрос «как это было технически обработано». Diagnostics не подменяют evidence; evidence не используется как технический лог. Governed cross-references между ними допускаются (например, claim в `PerceptionEvidenceArtifact` может ссылаться на `imageAssetId`, для которого существует `ImageAssetProcessingDiagnostic`, без смешения содержимого двух артефактов).

Оба diagnostics-артефакта размещаются как provider-neutral, не изменяющие ADR-013 StructuredSceneV0 — тот же архитектурный принцип, что уже применён к `PerceptionEvidenceArtifact` (M.2).

---

## Part N — PerceptionResult Outcome Contract

Provider-independent semantic contract (§3.5 поручения), заменяет менее формальную "outcome model" Revision 2.

The operation-level PerceptionResult envelope was accepted by Project Owner on 2026-07-14 (Part AC, Decision 5).

```text
PerceptionResult =
    SceneResult
    | InsufficientEvidenceResult
    | FailureResult
    | RejectedResult
```

**Multi-image extension (Bounded Scope Rev5 Section 2B, Section 8C):** до вызова C.1 поддерживается `UnsupportedInput` — классификация вне семейства `PerceptionResult` (не SceneResult/InsufficientEvidenceResult/FailureResult/RejectedResult), применяемая к нарушениям входа на уровне набора изображений (0 или >6 ImageAsset, неподдерживаемый формат до любой семантической интерпретации). Она не заменяет и не расширяет ни один из четырёх исходов ниже — это отдельная, предшествующая им категория.

### N.1 SceneResult

```text
status: scene
scene: StructuredSceneV0
completeness: full | partial
diagnostics
evidenceArtifactReference, если применимо (Part M)
```

Room node обязателен ТОЛЬКО для каждого successful SceneResult (§3.7 поручения — исправление относительно более ранних ревизий, где минимальный Room node мог создаваться и для иных исходов).

### N.2 InsufficientEvidenceResult

```text
status: insufficient-evidence
reason category
diagnostics
recommended next action
```

Это НЕ provider error и НЕ partial scene. Возникает, когда фото технически прочитано, но механизм не получил достаточного свидетельства для содержательного scene output.

**Multi-image extension:** также возникает на уровне MultiImageFusion/FusionConsistencyStage (Part C, C.1.5), когда same-room identity нескольких ImageAsset не может быть достоверно подтверждена, или совокупный evidence набора недостаточен — тот же семантический смысл («технически прочитано, но недостаточно для содержательного результата»), примененный на уровне RoomCase, а не одного изображения.

### N.3 FailureResult

```text
status: failure
technical reason category
retryability
diagnostics
```

Примеры: unreadable input; timeout; provider authentication error; rate limit; malformed response; preprocessing failure.

### N.4 RejectedResult

```text
status: rejected
contract violations
diagnostics
```

Возникает после C.2 (conformance, если применимо), C.3 (final boundary validation), или после MultiImageFusion/FusionConsistencyStage (Part C, C.1.5) — не является ответственностью provider adapter (Part L.1).

**Multi-image extension — mandatory cases at FusionConsistencyStage (Bounded Scope Rev5 Section 8C.1):** ImageAsset объекты относятся к разным физическим помещениям; обнаружена before/after пара; произошло существенное изменение состояния помещения между кадрами; capture set нарушает mandatory consistency rules (Bounded Scope Rev5 Section 8A.1).

### N.5 Искусственный Room node не создаётся (§3.7 поручения)

Для `insufficient-evidence`, `failure` или `rejected` результата НЕ создаётся искусственный минимальный Room node — эти три статуса не являются вариантами SceneResult и не должны маскироваться под partial scene.

---

## Part O — Confidence and Provenance Policy

### O.1 Четырёхуровневая confidence-модель (уточнено по §3.9 поручения)

```text
Reported confidence: confidence, заявленная mechanism/provider
    напрямую.
Normalized confidence: значение, приведённое existing Step 2 (C.2,
    только для Class B) к трёхсторонней ADR-013 confidence model
    (known with confidence / known with uncertainty / unknown-not-
    inferable).
Calibrated confidence: эмпирически подтверждённая связь confidence с
    фактической correctness на test corpus — производится ТОЛЬКО
    Layer 3 evaluation, не C.2.
Evaluation uncertainty: неопределённость самого ground truth,
    аннотаций и измеренной метрики (Part T.4) — отдельная от
    неопределённости, заявленной механизмом.
```

### O.2 Обязанности existing Step 2 (C.2, сохранено из Revision 2)

**Может:** normalize representation; preserve uncertainty; понижать confidence по принятому rule; не повышать confidence без основания; проверять наличие/допустимость confidence/provenance fields; отклонять структурно недопустимый candidate.

**Не может:** создавать calibrated confidence; проверять, является ли "visually observed" утверждение правдивым; устанавливать присутствие объекта на фото; проверять корректность relation относительно фото. Эти задачи — Layer 3 (Part Q, Part T).

### O.3 Уточнение для Class A

Поскольку Class A не включает C.2 (Part F), нормализация confidence происходит непосредственно внутри C.1 (сама VLM-интерпретация обязана производить уже normalized-по-форме confidence) — это часть direct schema-conformance burden Class A (Part F), не отдельная функция.

### O.4 Operational definitions provenance (§3.10 поручения)

```text
Visually observed: поддерживается identifiable image evidence и не
    требует дополнительного semantic assumption.
Inferred: следует из одного или нескольких visual/context signals, но
    требует рассуждения сверх прямого наблюдения.
User-provided: приходит из user context, даже если согласуется с
    фотографией.
Unknown / not inferable: нет достаточного evidence.
```

Эти определения используются единообразно в: mechanism prompt/output policy (Part P); annotation instructions (Part S); Layer 3 evaluation (Part Q, Part R); confidence/provenance review (настоящая Part O).

### O.5 Численные пороги

Не изобретаются; provisional per ADR-012 §4.5 (Part T.3 — threshold governance).

---

## Part P — Preprocessing, Prompt, Evidence and Version Policy

### P.1 Preprocessing responsibility и traceability (§3.8 поручения)

```text
Preprocessing — часть perception orchestration (Part L.2), не
    отдельный mechanism-специфичный этап.

Любая transform (orientation correction, resize, crop, compression,
    normalization, иная image transformation) обязана быть traceable.

Original image asset остаётся provenance root — все evidence
    references (Part M) обязаны указывать, к какой ИМЕННО версии
    изображения (original или конкретный preprocessed вариант) они
    относятся.

PerceptionEvidenceArtifact (Part M.2) обязан позволять связать
    processed image обратно с original image через
    preprocessed/source image identifiers.

Конкретные preprocessing-алгоритмы не выбираются настоящим документом.
```

### P.2 Prompt и version policy (для Class A/B/C, если LLM/VLM-based)

```text
Prompt version — версионный идентификатор для каждого промпт-текста,
    фиксируемый вместе с PerceptionResult для diagnostic
    traceability.
Mechanism version, provider/model identifier — фиксируются в
    PerceptionEvidenceArtifact (Part M.2).
Schema version для промежуточного candidate (Class B) — остаётся
    открытым вопросом (Part AB), не решается здесь.
Reproducibility — фиксация версий достаточна для диагностики
    регрессий; не требует полной детерминированности вероятностного
    механизма.
Изменение промпта не требует изменения ADR-013/012/014 или existing
    Step 2 — provider-abstraction-внутренняя деталь (Part L).
```

---

## Part Q — Three-Layer Evaluation Architecture

```text
Layer 1 — Schema / Boundary Validation.
    Existing Step 5 (функция C.3). Без изменений. Применяется
    одинаково ко всем классам.

Layer 2 — Representation Queryability.
    Existing Step 6 (ADR-012 staged Harness). Без изменений.
    Недостаточен сам по себе — Q1–Q3/Q6–Q9 являются его следствием
    (Part E.1), не основой Layer 3 acceptance model.

Layer 3 — Perception Fidelity / Semantic Truth.
    Новый evaluation package. Обязательно использует: source images;
    ground truth; PerceptionEvidenceArtifact (Part M); PerceptionResult
    outcomes (Part N); versioned mechanism/prompt/model identifiers
    (Part P). Метрики — Part R.
```

---

## Part R — Layer 3 Metrics

Метрики соотнесены с Bounded Coverage Matrix (Part E), не свободным перечнем.

```text
Entity detection correctness — Type/Category категории (Part E).
Structural-element correctness — StructuralElement (Part E).
Object inventory precision/recall — Object (Part E).
Relation correctness — Adjacency/Containment/Blocking (Part E);
    оценивается независимо от структурной валидности (Step 2/C.2 её
    не гарантирует, Part G).
SpaceTypeId preservation correctness — Room (Part E): корректность
    сохранения supplied SpaceTypeId, отсутствие unauthorized
    reclassification, корректное unknown-поведение при отсутствии
    reference input. НЕ "SpaceType inference correctness" — Candidate A
    bounded first scope не классифицирует SpaceType самостоятельно.
Unknown/uncertain handling — Confidence/Provenance (Part E).
Insufficient-evidence handling — корректность классификации
    InsufficientEvidenceResult (Part N.2) отдельно от valid partial
    SceneResult (Part N.1).
Hallucination rate — измеряемая метрика (Part T.1), НЕ предполагается
    сниженной одним лишь наличием C.2 у Class B (§3.11).
Confidence calibration — Part O.1 (Calibrated confidence), Part T.2.
Grounding-to-image traceability — исполнима через
    PerceptionEvidenceArtifact (Part M), не требует изменения
    ADR-013.
Partial-scene behavior — SceneResult.completeness (Part N.1).
Failure/rejection behavior — по четырёхчастной модели PerceptionResult
    (Part N), не по бинарной модели.
Latency and cost diagnostics — Part U.3.
```

---

## Part S — Staged Corpus and Ground-Truth Strategy

### S.1 Три tier (сохранено, Tier 2 переименован по §5.4 поручения)

```text
Tier 1 — Core bounded proof corpus.
    Используется для Bounded Proof Completion и Bounded Proof
    Acceptance (Part Z). Небольшой, контролируемый набор. Не обязан
    покрывать оба сегмента (residential/commercial) одновременно.

Tier 2 — Expansion and regression corpus.
    Используется для: scope expansion; mechanism regression; provider/
    model change regression (Part L.4); hardening evidence (Part V).

Tier 3 — Production qualification corpus.
    Используется для production hardening; обязан включать
    residential и commercial coverage (Roadmap v1.4, Guiding
    Principle 2 — только на этой стадии становится обязательным
    критерием).
```

Численный размер не устанавливается без evidence.

### S.2 Annotation uncertainty и benchmark leakage risks (новое, §5.5 поручения)

```text
Ground-truth ambiguity: single-view изображение не всегда позволяет
    однозначно определить relation, depth, hidden geometry или
    affordance — аннотация сама несёт неопределённость (Evaluation
    uncertainty, Part O.1).

Benchmark leakage / overfitting: prompt или mechanism может быть
    настроен под небольшой Tier 1 corpus, искусственно завышая
    результаты.

Минимальные mitigation requirements:
- annotator disagreement tracking;
- inconclusive labels (для случаев, где даже аннотатор не может
  однозначно определить ground truth);
- held-out evaluation set, отдельный от prompt-tuning выборки;
- versioned corpus (Part P.2, симметрично dataset versioning);
- строгое разделение prompt-tuning images и final proof acceptance
  images — использование одних и тех же изображений для обеих целей
  запрещено.
```

Сам корпус не создаётся настоящим документом.

---

## Part T — Hallucination, Calibration and Evaluation Uncertainty

### T.1 Normative behaviour vs measured quality (сохранено, ADR-014 §4.5 item 5)

```text
Normative: не выдавать инференцию за наблюдение; не force-fill; не
    подавлять неопределённость; не молча принимать семантически
    некорректную сцену.
Measured: hallucination rate измеряется против Tier 1/2 corpus (Layer
    3, Part R) для КАЖДОГО класса одинаково — без предположения, что
    Class B структурно ниже Class A (§3.11, Part G, Part J). Порог —
    provisional, определяется до proof execution (Part T.3), не
    "нулевая hallucination".
```

### T.2 Confidence calibration strategy

Сравнение Reported/Normalized confidence (Part O.1) с фактической частотой correctness на corpus → Calibrated confidence. Производится только Layer 3, не C.2 (Part O.2).

### T.3 Threshold governance (новое, §5.3 поручения)

```text
Thresholds и decision rules утверждаются ДО proof execution, не после
получения результатов. До запуска proof определяются: metric
definitions; aggregation method; minimum corpus coverage;
pass/fail/inconclusive rules; handling of missing evidence; annotation
disagreement policy (Part S.2); uncertainty reporting; threshold
ownership; Owner approval point.

Численные значения могут быть provisional, но принимаются ДО, не
изобретаются задним числом. Конкретные числа не вводятся настоящим
документом.
```

### T.4 Evaluation uncertainty (Part O.1)

Неопределённость ground truth и измеренной метрики (Part S.2) учитывается отдельно от confidence, заявленной механизмом — смешение этих двух источников неопределённости искажает Layer 3-выводы.

---

## Part U — Privacy, Retention, Security, Cost and Latency

### U.1 Разделение proof data и real user data (§6.1 поручения)

```text
Licensed / synthetic / staged evaluation images: могут использоваться
    в bounded proof (Tier 1/2, Part S) при принятой test-data
    handling policy (аналогично принципу Implementation Package §14
    для Gate 2 фикстур).

Real user photos: НЕ могут передаваться внешнему provider до
    отдельного privacy/retention decision, consent policy, deletion
    rules, provider retention review и production data-handling
    authorization. Privacy decision может не блокировать полностью
    staged/synthetic proof, но блокирует real-user-photo processing
    без исключений.
```

No explicit perception-specific privacy/retention decision was identified in the reviewed authoritative source set (сохранено из Revision 2, точная формулировка).

### U.2 Retention scope (§6.2 поручения — расширенный список)

Retention policy обязана охватывать: original image; preprocessed image; diagnostic crops; raw provider output; VlmSceneCandidate (Class B); StructuredSceneV0; PerceptionEvidenceArtifact (Part M); provider logs; prompt traces; ground-truth annotations; evaluation reports.

### U.3 Cost и latency по уровню зрелости (§6.3 поручения)

```text
Architecture level: observable dimensions, без численных целей.
Bounded proof: измеряется и репортируется (диагностически).
Bounded proof acceptance: может использовать provisional envelope,
    если это предусмотрено Scope Decision.
Production hardening: обязательные accepted limits (Part Z).
```

Конкретные значения не изобретаются. Ссылка Revision 1 на ACS-001 остаётся удалённой (не normative authority).

### U.4 Security

Стандартные требования transport security; не специфично для Candidate A.

---

## Part V — Replacement and Hardening Triggers

```text
Замена temporary-механизма (ADR-014 §4.9): Layer 3 evaluation ниже
    будущего порога (Part T.3); принято решение о permanent-механизме;
    давление на схему ADR-013.

Hardening в пределах того же класса: успешный Layer 3 результат в
    рамках будущего порога + Owner Decision.

Смена mechanism class: отдельный architectural review, если меняет
    candidate topology, evidence model, conformance stages, privacy
    assumptions или evaluation model (Part L.3).

Смена provider внутри класса: см. правило Part L.4 — не требует
    review при соблюдении всех условий; иначе — targeted review.

Расширенные triggers (§7.3 поручения):
- provider не может дать required grounding evidence (Part M);
- provider retention policy нарушает accepted privacy rules (Part
  U.1–U.2);
- model version невозможно надёжно идентифицировать (Part P.2);
- provider drift ломает reproducibility;
- cost/latency превышают accepted envelope (Part U.3);
- insufficient-evidence behavior систематически небезопасно (Part N.2);
- confidence остаётся materially miscalibrated (Part T.2);
- evidence topology несовместима с accepted Layer 3 evaluation
  (Part M, Part R).

ADR-013 пересматривается только при доказанной evidence
    недостаточности схемы, не из-за плохой работы конкретного
    провайдера.
```

---

## Part W — Recommended Bounded First Scope

```text
Mechanism class: Class B (Part K) — selected by Project Owner
    (Part AC, Decision 2).
Coverage: Bounded Coverage Matrix (Part E) целиком — accepted by
    Project Owner (Part AC, Decision 6); Required in bounded proof /
    Best effort / Deferred / Schema-valid but not evaluated статусы,
    не расширяющие ADR-013.
Outcome contract: PerceptionResult (Part N) envelope — accepted by
    Project Owner (Part AC, Decision 5); все четыре исхода.
Grounding: PerceptionEvidenceArtifact (Part M) — selected by Project
    Owner (Part AC, Decision 4).
SpaceType: не классифицируется самостоятельно (Part D, Part R).
Test corpus: Tier 1 (Part S.1) — не требует Tier 3 residential+
    commercial покрытия для первой итерации.
Явно исключено: permanent-механизм выбор; численная калибровка
    порогов (устанавливается до proof, Part T.3, но не в этом
    документе); Q4/Q5/Q10/Q11 (Deferred, Part E); production
    benchmark/annotation platform/public user study; Track B, Track C;
    real user photo processing (Part U.1).
Evaluation: Layer 1/2 без изменений; Layer 3 (Part Q/R) обязателен для
    acceptance (Part Z). Конкретный bounded scope определяется
    отдельным Candidate A Bounded Scope Decision.
```

---

## Part X — Explicit Exclusions

```text
Не выбран: провайдер, вендор, API, модель (Part AC — независимые
    Owner Decisions; provider/model selection остаётся отдельным
    будущим шагом).
Выбраны Project Owner 2026-07-14: mechanism class (Class B), grounding
    boundary (PerceptionEvidenceArtifact), PerceptionResult boundary
    (operation-level envelope), Bounded Coverage Matrix (Part AC,
    Decisions 2, 4, 5, 6).
Не сделаны: коммерческие обязательства.
Не создан/не пронумерован: ADR.
Не изменены иные файлы репозитория, кроме persistence настоящего
    accepted документа (Part AC, Decision 7 авторизует только эту
    persistence).
Не выполнены: staging, commit, push.
Не обновлены: ADR_INDEX, README, Project Context, Roadmap.
Не изменены: ADR-010–014, StructuredSceneV0, существующая Gate 2
    реализация.
Не подготовлен: Implementation Package.
Не начаты: реализация, proof-of-concept, эксперименты с провайдерами,
    создание test corpus.
Не обрабатываются: реальные пользовательские фото (Part U.1).
Не запущен: Claude Code; не подготовлен Claude Code prompt.
Не начата: архитектурная работа по Candidate B/C.
Не авторизованы: whole-home/multi-room scope, auth/payments/Clerk/
    Stripe/database работа.
```

---

## Part Y — Risk Register

| № | Риск | Категория |
|---|---|---|
| 1 | Image-grounded semantic hallucination — unknown для ВСЕХ классов (A/B/C) до Layer 3; не снижается наличием C.2 у Class B (Part G, Part J, Part T) | Технический/R&D |
| 2 | Confidence miscalibration, не детектируемая C.2 (Part O.2) | Технический/R&D |
| 3 | Single-view ambiguity, occlusion, ground-truth ambiguity (Part S.2) | Технический/R&D |
| 4 | Benchmark leakage / overfitting на малый Tier 1 corpus (Part S.2) | Технический/R&D |
| 5 | Отсутствие image-grounded benchmark dataset сегодня | Технический/R&D |
| 6 | Provider/model behavior drift; невозможность надёжной идентификации версии (Part P.2, Part V) | Операционный |
| 7 | Cost/latency непредсказуемость (Part U.3) | Операционный |
| 8 | Privacy/retention — no explicit perception-specific decision identified (Part U.1) | Governance/Privacy |
| 9 | Prompt/version reproducibility | Операционный |
| 10 | Error propagation в будущий Track C downstream | Downstream |
| 11 | Prior Gate 2 declaration ambiguity — resolved 2026-07-14: the Candidate A cycle independently selected Class B; prior declaration treated as historical precedent only (Part A.4, Part AC Decision 3). Decision resolved; implementation compliance risk remains | Governance |
| 12 | Class D (любой подвариант) ошибочно принят как достаточное решение без реальной image-интерпретации (Part I) | Governance |
| 13 | Расширение bounded scope без отдельного Scope Decision | Governance scope-creep |
| 14 | Grounding evidence boundary pending — resolved 2026-07-14: Project Owner selected PerceptionEvidenceArtifact (Part M, Part AC Decision 4). Decision resolved; implementation compliance risk remains (exact region-reference format still open, Part AB) | Architecture gap |
| 15 | Class A rejection risk (Part F) недооценён при выборе без учёта отсутствия candidate-level diagnostics | Технический/Governance |
| 16 | Class C intermediate contract (VlmSceneCandidate vs direct StructuredSceneV0, Part H) не решён — риск начала реализации без этого решения, если выбран Class C | Architecture gap |
| 17 | Insufficient-evidence outcome (Part N.2) систематически используется небезопасно (например, слишком часто/редко classified), маскируя реальное качество perception | Технический/R&D |

---

## Part Z — Execution, Completion, Acceptance and Production Levels

Четыре уровня (уточнено по §5.2 поручения; Architecture Acceptance вынесен в governance-decision, Part AA/AC, не Z-уровень).

```text
Execution Attempt.
    Proof был запущен, но обязательные метрики могли не завершиться.

Bounded Proof Completion.
    Все метрики, заранее обязательные для принятого bounded scope
    (Part E, Part T.3 threshold governance), исполнены и
    зарегистрированы. Нельзя считать proof completed, если
    обязательная метрика оказалась неисполнимой — метрика может быть
    не выполнена только если она заранее исключена Scope Decision.

Bounded Proof Acceptance.
    Все обязательные метрики соответствуют заранее утверждённым
    thresholds и decision rules (Part T.3).

Production Hardening Acceptance.
    Выполнены более строгие: quality; reliability; privacy (Part
    U.1–U.2); retention; security; latency/cost (Part U.3);
    calibration (Part T.2); observability; failure handling (Part N)
    requirements.
```

Механизм не может считаться accepted на уровне Bounded Proof Acceptance только потому, что hallucination rate была измерена на уровне Bounded Proof Completion — это разные события.

---

## Part AA — Indicative Future Governance and Implementation Sequence

Правильная governance-последовательность (§8.3 поручения):

```text
Architecture Proposal (настоящий документ)
→ Owner Architecture Acceptance (Part AC, Decision 1)
→ Owner Mechanism / Evidence / Outcome Decisions (Part AC,
   Decisions 2, 4, 5)
→ Candidate A Bounded Scope Decision preparation
→ Owner Scope Decision
→ Evaluation thresholds and acceptance plan confirmed (Part T.3)
→ отдельная Implementation Package preparation authorization
→ Implementation Package
→ отдельная implementation authorization
→ bounded proof execution (Execution Attempt, Part Z)
→ Layer 3 evaluation
→ proof completion decision (Bounded Proof Completion, Part Z)
→ proof acceptance decision (Bounded Proof Acceptance, Part Z)
→ hardening or replacement decision (Part V, Production Hardening
   Acceptance, Part Z)
```

Grounding boundary (Part M) и PerceptionResult contract (Part N) обязаны быть решены Owner Decision (Part AC, Decisions 4–5) ДО Implementation Package preparation authorization, если они входят в bounded scope (Part W).

Индикативные шаги самого Implementation Package (не авторизуется настоящим документом): provider/mechanism abstraction layer (Part L); photo→PerceptionResult producer, temporary-labeled (Part K/W); Layer 3 package (Part R); Tier 1 corpus creation (Part S); integration test; privacy/retention Engineering Decision (Part U.1, вероятно предшествующий).

---

## Part AB — Remaining Open Questions

```text
Resolved 2026-07-14: Owner independently selected Class B for the
    Candidate A cycle; prior Gate 2 scoped declaration (Part A.4)
    treated as historical precedent only, not automatic authorization
    (Part AC, Decision 3).

Class C intermediate contract — VlmSceneCandidate vs direct
    StructuredSceneV0 — не решён (Part H, Risk №16).
Конкретный формат region reference внутри PerceptionEvidenceArtifact
    (bounding box/polygon/mask/crop identifier/provider-specific) — не
    решён (Part M.2).
Нужен ли отдельный schemaVersion для промежуточного candidate
    (Class B) — не решено (Part P.2).
Существует ли уже собранный test image corpus/ground truth — не
    подтверждено.
Численные thresholds для Bounded Proof Acceptance и replacement/
    hardening triggers — не определены (Part T.3, Part V).
Provider/model selection — не решён.
D2/D3 (Part I) — точная граница "bounded image heuristic" и
    "metadata-only heuristic" как integration-инструментов, если Owner
    выберет их для узкого proof scope — не специфицирована глубже
    текущего описания.
```

---

## Part AC — Owner Decision Record

```text
Decision date: 2026-07-14
Decision authority: Project Owner
```

Семь независимых решений (§8.2 поручения), не единый список опций.

### Decision 1 — Document Acceptance

```text
Options were: Accept Revision 3; Request Revision (Revision 4);
    Reject.

Owner Decision: Accept Revision 3.
```

### Decision 2 — Mechanism Class Selection

```text
Options were: Class A; Class B (recommended, Part K); Class C;
    Class D only under explicitly narrow proof scope (Part I);
    Defer selection.

Owner Decision: Class B — Hybrid VLM + heuristic validation —
    selected.
```

### Decision 3 — Prior Gate 2 Declaration Interpretation (упрощено по §8.2 поручения)

```text
Новый Candidate A decision самостоятельно выбирает mechanism class.
Prior Gate 2 declaration (Implementation Package §5, Part A.4)
    остаётся historical precedent и не является автоматической
    authorization.
Если новый выбор отличается от Class B: новый выбор supersedes prior
    scoped declaration ТОЛЬКО для нового Candidate A cycle, не
    переписывая исторические Gate 2 records.

Owner Decision: The new Candidate A cycle independently selects
    Class B. The prior Gate 2 declaration remains historical precedent
    and is not treated as automatic authorization.
```

### Decision 4 — Grounding Evidence Boundary

```text
Options were: Select PerceptionEvidenceArtifact (Part M, recommended);
    Select another boundary; Defer grounding from bounded scope
    (принимая, что часть Layer 3 метрик — Grounding-to-image
    traceability — станет неисполнимой, Part R).

Owner Decision: PerceptionEvidenceArtifact selected.
```

### Decision 5 — PerceptionResult Boundary

```text
Options were: Accept operation-level outcome envelope (Part N,
    recommended); Request alternative outcome contract.

Owner Decision: The proposed operation-level PerceptionResult envelope
    accepted.
```

### Decision 6 — Bounded Coverage

```text
Options were: Accept recommended coverage matrix (Part E); Narrow it;
    Expand it (в пределах ADR-013, без расширения схемы).

Owner Decision: The recommended Bounded Coverage Matrix accepted.
```

### Decision 7 — Next Governance Authorization

```text
Options were: Authorize preparation of Candidate A Bounded Scope
    Decision; Do not authorize next step; Request additional
    verification (например, targeted code inspection существующего
    Step 2/5/6, не выполненная в этой сессии).

Owner Decision: Preparation of the Candidate A Bounded Scope Decision
    authorized.
```

These decisions do not authorize:
repository changes beyond persistence of this accepted document;
ADR creation;
provider/model selection;
Implementation Package;
implementation;
test corpus creation;
real-user-photo processing.

---

## Part AD — Architect Review Note

```text
Document status: Accepted.
Accepted by: Project Owner.
Acceptance date: 2026-07-14.
Document type: Accepted architecture decision-support artifact.
Revision: 3, full consolidated pass, supersedes Revision 2 in full.
Source freshness: verified — all 13 authoritative sources unchanged
    since Revision 1/2 (byte-identical, see Part A).
Repository persistence of this accepted document was authorized by
    Project Owner (Part AC, Decision 7). No test corpus was created.
    No real user photo was processed.
Mechanism class: Class B — selected (Part AC, Decision 2).
Grounding boundary: PerceptionEvidenceArtifact — selected (Part AC,
    Decision 4).
PerceptionResult: Accepted (Part AC, Decision 5).
Bounded Coverage Matrix: Accepted (Part AC, Decision 6).
Next authorized governance work: Preparation of the Candidate A
    Bounded Scope Decision (Part AC, Decision 7).
Provider/model: Not selected.
No Implementation Package was prepared. No new ADR was created,
    numbered, or drafted. Implementation Package and implementation
    remain not authorized.
The Class A/Class B topology contradiction between Revision 1 and
    Revision 2 was resolved via an explicit three-function boundary
    model (Part C), not a further compromise.
One architecture detail remains explicitly open, not silently
    resolved: exact region-reference format within
    PerceptionEvidenceArtifact (Part M.2, Part AB). Class C
    intermediate contract (Part H, Part AB) remains open as a
    conditional future branch, outside the accepted bounded scope.
```

---

## References

```text
docs/project/Project Context v2.3.md
docs/roadmap/Living-Strategic-Roadmap-v1.4.md
docs/engineering-decisions/reviews/Post-Gate2-Comparative-Next-Stage-Architecture-Assessment-Rev3.md
docs/engineering-decisions/reviews/Gate2-C8-Closure-Review.md
docs/engineering-decisions/reviews/Final-Gate-2-Scope-Decision-C8.md
docs/engineering-decisions/reviews/C8-Semantic-Spatial-Intelligence-Core-Architecture-Assessment.md
docs/implementation/Gate2-C8-Implementation-Package-v1.0.md (targeted
    complete-section read, §5–16)
docs/adr/ADR-010-Room-Analyzer-SpaceType-StructuredScene-Boundary.md
docs/adr/ADR-011-C8-Boundary-Representation.md
docs/adr/ADR-012-C8-Evaluation-Contract.md
docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md
docs/adr/ADR-014-Perception-Boundary.md
docs/adr/ADR_INDEX.md (targeted grep verification)
```

Все — репозиторий `Qazaq71/VistaRoom.AI`, branch `main`, freshness подтверждена побайтовой сверкой перед подготовкой Revision 3.

---

```text
Document status: Accepted.
Revision: 3.
Accepted by: Project Owner.
Acceptance date: 2026-07-14.

Revision 3:
Accepted authoritative architecture baseline
for the Candidate A perception mechanism cycle.

Mechanism class:
Class B — Hybrid VLM + heuristic validation — Selected.

Prior Gate 2 declaration:
Historical precedent only.
The Candidate A cycle independently selects Class B.

Grounding boundary:
PerceptionEvidenceArtifact — Selected.

PerceptionResult boundary:
Operation-level PerceptionResult envelope — Accepted.

Bounded Coverage Matrix:
Accepted as recommended.

Next authorized governance step:
Preparation of Candidate A Bounded Scope Decision.

Provider/model:
Not selected.

Repository persistence:
Authorized for this accepted document.

ADR creation:
Not authorized.

Implementation Package:
Not authorized.

Implementation:
Not authorized.

Real user photo processing:
Not authorized.
```
