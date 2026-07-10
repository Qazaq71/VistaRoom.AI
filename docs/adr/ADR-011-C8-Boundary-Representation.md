# ADR-011 — C8 Boundary / Representation

**Status:** Accepted
**Accepted by:** Project Owner
**Date:** 2026-07-10
**Layer:** Gate 2 Readiness — Semantic Spatial Intelligence Core (C8)
**Depends on (unchanged):** ADR-004, ADR-007, ADR-010, Architecture Freeze (ADR-000–006)
**Confirmed sequence:**
1. ADR-011 — C8 Boundary / Representation ADR (настоящий документ)
2. ADR-012 — C8 Evaluation Contract ADR
3. ADR-013 — StructuredScene / Scene Graph Schema v0 ADR
4. ADR-014 — Perception Boundary ADR
5. Final Gate 2 Scope Decision
6. Implementation Package
**Input context:** Formal C8 Architecture Assessment (Accepted as readiness artifact), Owner Decision Option C, confirmed ADR sequence, strategic critique refinements (this session and prior session)

---

## 1. Что такое C8

C8 (Semantic Spatial Intelligence Core) — capability платформы, ответственная за построение и предоставление структурированного представления пространственного и семантического содержимого помещения (StructuredScene), пригодного для использования другими capabilities платформы для reasoning о пространстве, а не только для его визуального воспроизведения.

C8 — это **representation capability**: она определяет, *что* платформа знает о пространстве в структурированном виде, и обеспечивает, чтобы это знание могло отвечать на содержательные вопросы о пространстве (basic spatial queries, объяснение design reasoning, consistency checks), а не только устранять `null`-заглушку.

## 2. Что C8 не является

- Не perception-провайдер. C8 не определяет и не фиксирует, каким механизмом (CV / hybrid / LLM-based) получается StructuredScene — это Perception Boundary ADR.
- Не Prompt Engine и не Prompt Intelligence. C8 не формирует и не форматирует промпты — она предоставляет данные, которые Prompt Intelligence может использовать.
- Не Generation Intelligence. C8 не участвует в генерации изображения и не оценивает её визуальный результат напрямую — она предоставляет основу, относительно которой согласованность может быть проверена.
- Не marketplace, не renovation planning, не AI Agent, не furniture sizing/placement, не object detection, не automatic masks.
- Не Scene Graph Schema (конкретная схема данных) — это следующий отдельный ADR, идущий после Evaluation Contract ADR.

## 3. Почему C8 — representation capability, а не perception-провайдер и не prompt engine

Разделение обусловлено тем, что три вопроса — *что представляется*, *как это оценивается* и *как это производится* — являются независимо изменяемыми решениями:

- Изменение механизма perception (CV → hybrid → LLM-based) не должно требовать пересмотра того, что представляет StructuredScene.
- Изменение того, как Prompt Intelligence форматирует промпт, не должно требовать пересмотра структуры StructuredScene.
- Смешение этих уровней в одном ADR воспроизвело бы проблему, которую ADR-010 уже явно предотвратил на уровне Room Analyzer (classification vs scene analysis не схлопываются). C8 Boundary следует тому же принципу на уровень выше: representation, evaluation и perception — отдельные архитектурные решения, принимаемые последовательно.

## 4. Отношение C8 к существующим границам

- **Room Analyzer (ADR-010):** Room Analyzer — компонент, чья ответственность scene analysis (photo → StructuredScene, с использованием SpaceTypeId) реализует часть C8. C8 — capability уровня выше; Room Analyzer — один из её producers.
- **SpaceType:** остаётся классификацией, независимой от StructuredScene (ADR-004 инвариант не меняется). SpaceTypeId используется как вход в StructuredScene, не заменяется и не дублируется C8.
- **StructuredScene:** является основным артефактом, производимым в рамках C8. Настоящий ADR определяет её роль и границу; конкретная схема — предмет Scene Graph Schema ADR.
- **ProjectDesignContext:** остаётся отдельным artifact (ADR-007), также временно `null`. Настоящий ADR не разрешает эту заглушку и не меняет ADR-007; C8 в данной итерации ограничена StructuredScene.
- **SpatialPromptContext (ADR-007):** остаётся валидным placeholder-механизмом до появления реального consumer-contract; ADR-007 не переоткрывается.
- **Prompt Intelligence:** потенциальный потребитель StructuredScene для формирования PromptDraft с учётом пространственного контекста. Природа потребления — не форматирование, а reasoning-вход.
- **Generation Intelligence:** потенциальный потребитель для consistency checks до/после генерации (сравнение ожидаемого пространственного состояния с результатом).
- **Future AI Interior Designer / Reasoning Layer:** долгосрочный потребитель, для которого StructuredScene — основа рассуждений о пространстве, а не только входные данные для генерации изображения.

## 5. Minimum value-oriented slice, требуемый для рассмотрения в Gate 2

Gate 2 slice не ограничивается наличием непустой схемы. Минимально достаточный slice должен обеспечивать:

- **Basic spatial queries** — возможность содержательно ответить на вопрос о пространстве на основе StructuredScene (например, что находится в помещении, в каком количестве, в каком базовом расположении — без точного object detection/sizing).
- **Basic explanation of design reasoning** — возможность связать элемент StructuredScene с причиной архитектурного/дизайн-решения на минимальном уровне детализации.
- **Consistency checks before/after generation** — возможность сравнить состояние StructuredScene до генерации с результатом после, на уровне, достаточном для обнаружения явных расхождений.
- **Foundation for future AI Interior Designer capabilities** — структура должна быть расширяемой без разрушающих изменений, а не одноразовым representation, спроектированным только для устранения `null`.

Это условие обязательно для того, чтобы minimal coherent slice считался product-relevant, а не только governance-slice.

StructuredScene, которая не может ответить на элементарные вопросы о типе помещения, ключевых объектах, свободном пространстве, traffic paths, естественном освещении и базовых affordances, ещё не составляет spatial understanding — это остаётся структурированной подписью к изображению (structured caption of an image).

**Version-awareness как требование к representation.** StructuredScene representations, производимые C8, должны быть version-aware. Gate 2 не реализует полноценную Project Memory, но representation C8 должна сохранять достаточную идентичность версии и структурную непрерывность, чтобы поддерживать будущую Project Memory, before/after comparison и evaluation согласованности. Это требование к representation, а не отдельная capability и не реализация Project Memory внутри настоящего ADR.

### Query Capability Requirement

C8 representation должна быть queryable. Точный набор запросов и evaluation protocol будут определены в ADR-012 — C8 Evaluation Contract ADR. Однако граница representation, установленная настоящим ADR-011, должна поддерживать вопросы следующих классов:

1. Room identity и приблизительный пространственный extent
2. Инвентарь ключевых структурных элементов и design-relevant объектов
3. Базовые пространственные отношения между элементами, включая adjacency, blocking, containment и illumination
4. Free space и feasibility traffic path
5. Natural light blockers и lighting affordances
6. Базовые object affordances, такие как seating, storage, illumination, surface support
7. Структурные различия между двумя версиями одной и той же модели помещения, before/after

Эти классы определяют минимальную выразительность, требуемую от StructuredScene. Конкретная схема, реализующая их, остаётся вне scope ADR-011 и относится к ADR-013 — StructuredScene / Scene Graph Schema v0 ADR.

## 6. Что должно оставаться вне Gate 2

- Полная Scene Graph schema (финализация — ADR-013)
- Full CV pipeline
- Object detection / instance segmentation pipeline
- Precise furniture sizing
- SKU fit / real catalog fit / "will this product fit" reasoning
- Automatic masks
- Marketplace
- Budget estimation
- Renovation planning
- Shopping cart
- AI Agent behavior
- Multi-room consistency
- Full Prompt Engine lifecycle
- Provider integration / generation pipeline changes
- Выбор постоянного perception-механизма (ADR-014)
- Consumer Contract как отдельный ADR (пока не требуется — см. раздел 7)

Временный perception-механизм (LLM-based или hybrid) может использоваться в Gate 2 **только** если явно помечен как temporary и bounded; выбор и обоснование конкретного механизма остаются предметом Perception Boundary ADR и не решаются в настоящем документе.

## 7. Downstream consumers, которые должны быть учтены (lightweight consumer guidance)

Representation не проектируется изолированно. При определении структуры StructuredScene в рамках данного ADR и последующих должны учитываться ожидания следующих потребителей:

- **Prompt Intelligence** — использует StructuredScene как reasoning-вход для построения PromptDraft; ожидает доступ к семантическому содержимому, не к форматированному тексту.
- **Generation Intelligence** — использует StructuredScene как точку сравнения для consistency checks относительно результата генерации.
- **Future Reasoning Layer** — использует StructuredScene как основу для более сложных умозаключений о пространстве, выходящих за рамки одного акта генерации.
- **Future AI Interior Designer** — использует StructuredScene кумулятивно, как долгоживущее знание о пространстве, а не как одноразовый вход.
- **Future Project Memory** — future downstream consumer, использующий version-aware StructuredScene для хранения и сравнения состояний пространства во времени. Не реализуется в Gate 2; не создаёт capability внутри настоящего ADR.

Это не создаёт отдельный Consumer Contract ADR на данном этапе. Это ограничение, при котором представление проектируется с учётом хотя бы этих потребителей, чтобы не потребовать разрушающего пересмотра сразу после ADR-012. Классы вопросов, перечисленные в Query Capability Requirement (раздел 5), отражают минимальную выразительность, необходимую именно для того, чтобы эти потребители могли получать содержательные ответы от StructuredScene.

## 8. Почему Evaluation Contract идёт следующим

Определение того, что представляет C8, без определения, как оценивается корректность/полнота этого представления, оставляет границу непроверяемой. Прежде чем финализировать конкретную схему (ADR-013) или выбрать механизм получения данных (ADR-014), необходимо зафиксировать критерий, по которому будет оцениваться "understanding" — иначе оба последующих решения не будут иметь объективной точки проверки. Confirmed ADR sequence:

1. ADR-011 — C8 Boundary / Representation ADR (настоящий документ)
2. ADR-012 — C8 Evaluation Contract ADR
3. ADR-013 — StructuredScene / Scene Graph Schema v0 ADR
4. ADR-014 — Perception Boundary ADR
5. Final Gate 2 Scope Decision
6. Implementation Package

## 9. Решения, отложенные до последующих ADR

- Конкретная схема данных StructuredScene (поля, типы, версионирование) — **ADR-013**
- Критерии и метод оценки корректности/полноты StructuredScene — **ADR-012**
- Механизм получения StructuredScene (CV / hybrid / LLM-based), включая условия допустимости temporary-варианта для Gate 2 — **ADR-014**
- Формализация Consumer Contract как отдельного документа — не решено; остаётся открытым вопросом для будущего рассмотрения, не блокирует текущую последовательность

---

## Governance note

Настоящий документ — accepted ADR. Он не изменяет ADR-004, ADR-007, ADR-010 и не переоткрывает Architecture Freeze (ADR-000–006). Он не утверждает final Gate 2 scope, не создаёт Implementation Package и не изменяет Project Context или Roadmap.
