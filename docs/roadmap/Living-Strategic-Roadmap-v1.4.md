# VistaRoom AI — Living Strategic Roadmap v1.4

```text
Status: Accepted
Accepted by: Project Owner
Acceptance Date: 2026-07-13
Supersedes: Living Strategic Roadmap v1.3
```

## Mission

Создать интеллектуальную AI-платформу для проектирования жилых и коммерческих пространств, где умная генерация является ядром, а остальные возможности расширяют её до полного цикла — от идеи до реализации проекта.

---

## STRATEGIC AMBITION

1. VistaRoom AI стремится стать лидирующей AI-платформой для дизайна интерьера.
2. Конечный продукт — полноценный **AI Interior Designer**, а не генератор изображений.
3. Основная интеллектуальная ценность платформы создаётся вокруг генеративной модели, а не сводится к ней.
4. Генерация изображения — один этап полного design workflow, а не его центр.
5. Продукт должен доводить пользователя от фотографии и потребности через анализ и проектирование к управляемому дизайну и далее — к товарам, бюджету и реализации.
6. Каждая новая capability должна усиливать категорийное лидерство, а не добавляться только потому, что технически возможна.

```text
Strategic direction previously established by the Project Owner.
Formally accepted by the Project Owner on 2026-07-13.
Market leadership — long-term target, not current status.
```

---

## SUSTAINABLE COMPETITIVE ADVANTAGE

Доступ к одной генеративной модели (GPT Image, Flux, Seedream или любой будущей) не создаёт долгосрочного преимущества — эти модели рассматриваются как заменяемый provider/infrastructure слой (см. Generation Intelligence, Level 3). Устойчивое преимущество VistaRoom AI строится вокруг собственной интеллектуальной системы:

1. **User Understanding** — образ жизни, состав семьи, дети, животные, сценарии использования, потребности хранения, бюджет, регион, доступность, безопасность, личные предпочтения.
2. **Spatial Understanding** — геометрия, архитектурные элементы, существующие объекты, свободные зоны, ограничения, связи между объектами, несколько видов помещения.
3. **Designer Reasoning** — функциональная логика, стилистическая целостность, композиция, материалы, свет, мебель, объяснимые решения.
4. **Planning and Ergonomics** — зонирование, расстановка мебели, маршруты движения, ширина проходов, рабочие зоны, естественное и искусственное освещение, безопасность, доступность.
5. **Controlled Editing** — выбор объекта или зоны, локальное изменение, сохранение остального дизайна, изменение отдельных решений без полной перегенерации.
6. **Consistency** — между версиями, между видами одной комнаты, между комнатами проекта, между стилем, материалами и объектами.
7. **Project Memory** — история, решения, предпочтения, версии, ограничения, причины выбора.
8. **Implementation Support** — товары, материалы, количества, стоимость, варианты бюджета, подготовка к реализации.

---

## LEVEL 0 — PLATFORM GOVERNANCE

Platform Governance → Platform Vision → Platform Capabilities → AI Capabilities → Engineering Roadmap.

---

## DOCUMENT ECOSYSTEM

Living Strategic Roadmap — часть экосистемы: Living Strategic Roadmap (стратегическая карта верхнего уровня), PCS, ACS, Architecture, ADR, Decision Governance Playbook, Developer Studio. Каждый документ отвечает только за свой уровень. Roadmap не содержит дат закрытия документов, commit hash'ей, названий тестовых артефактов или деталей implementation-контрактов.

---

## LEVEL 1 — PLATFORM VISION

Идея → Анализ пространства → Умная генерация → Редактирование → Проектирование → Подбор мебели и материалов → Оценка бюджета → Подготовка проекта → Реализация

---

## END-TO-END AI DESIGN WORKFLOW

```text
Понять пользователя
        ↓
Понять пространство
        ↓
Выявить ограничения и возможности
        ↓
Сформировать дизайн-бриф
        ↓
Создать дизайн-концепции
        ↓
Спланировать пространство
        ↓
Принять и объяснить решения
        ↓
Создать визуализацию
        ↓
Оценить результат
        ↓
Отредактировать
        ↓
Сохранить согласованность
        ↓
Подобрать товары и материалы
        ↓
Рассчитать бюджет
        ↓
Подготовить проект к реализации
```

```text
Не generateImage() как центр системы,
а полный управляемый design lifecycle.
```

Концептуальные (не контрактные) обозначения: `understandUser()`, `analyzeSpace()`, `identifyConstraints()`, `createDesignBrief()`, `planDesign()`, `makeDesignDecisions()`, `generateVisualization()`, `evaluateDesign()`, `editDesign()`, `maintainConsistency()`, `prepareImplementation()`.

---

## AI INTERIOR DESIGNER CAPABILITY MODEL

```text
Target capability model. Not current implementation status.
```

1. Понимать пользователя и его жизненный контекст.
2. Понимать помещение и его назначение.
3. Анализировать фотографию, геометрию и архитектурные элементы.
4. Распознавать мебель, оборудование, свободные зоны и ограничения.
5. Определять проблемы и возможности пространства.
6. Формировать дизайн-бриф.
7. Предлагать несколько обоснованных концепций.
8. Планировать функциональные зоны.
9. Планировать мебель и маршруты движения.
10. Проверять эргономику, безопасность и доступность.
11. Проектировать свет, материалы, цвет и композицию.
12. Принимать объяснимые дизайнерские решения.
13. Генерировать визуализацию, соответствующую принятому плану.
14. Оценивать качество результата.
15. Обнаруживать противоречия и ошибки.
16. Редактировать отдельные объекты, зоны и решения.
17. Сохранять геометрию и неизменяемые части помещения.
18. Сохранять стиль и дизайн-логику между версиями.
19. Работать с несколькими видами одного помещения.
20. Поддерживать согласованность проекта.
21. Запоминать пользовательские предпочтения и решения.
22. Подбирать реальные товары и материалы.
23. Оценивать количества и бюджет.
24. Подготавливать проект к согласованию, закупке и реализации.
25. Поддерживать профессиональный workflow дизайнера и клиента.

---

## PRODUCT MATURITY LADDER

```text
Current maturity position:
Stage 1 foundation is operational.
Stage 2 representation foundation is implemented (StructuredScene,
structural validation, evaluation), while real-image perception
remains incomplete — Stage 2 is not yet fully reached.
Stages 3–7 are future strategic maturity levels, not current status.
```

**Stage 1 — AI Visualizer.** Качественная генерация, готовые стили, пользовательский стиль, базовое локальное редактирование. *Ценность:* быстрый привлекательный результат. *Барьер:* качество и управляемость генерации. *Доказать перед переходом:* стабильное качество генерации и базового редактирования.

**Stage 2 — Spatially Aware Generator.** Понимание структуры помещения, архитектурных элементов, объектов, свободных зон, ограничений; разделение representation и perception. *Ценность:* результат учитывает реальное пространство. *Барьер:* надёжное понимание сцены. *Доказать:* устойчивое представление сцены и надёжное восприятие из реального фото.

**Stage 3 — Explainable AI Designer.** Дизайн-бриф, пользовательский контекст, концепции, объяснимые дизайнерские решения, оценка качества. *Ценность:* пользователь понимает, почему предложено именно так. *Барьер:* decision trace и Designer Reasoning. *Доказать:* прослеживаемость решений от данных до результата.

**Stage 4 — AI Space Planner.** Функциональное зонирование, расстановка мебели, эргономика, проходы, свет, безопасность, варианты планировки. *Ценность:* не только красиво, но и функционально корректно. *Барьер:* пространственное планирование и эргономика. *Доказать:* соответствие эргономическим и функциональным критериям.

**Stage 5 — Consistent Project Designer.** Project/Room/RoomView, версии, история, MultiView, consistency, Project Memory. *Ценность:* проект, а не разрозненные картинки. *Барьер:* устойчивая идентичность и согласованность во времени и между видами. *Доказать:* устойчивость решений между версиями и видами.

**Stage 6 — Implementation Assistant.** Товары, материалы, количества, бюджет, региональная доступность, варианты реализации. *Ценность:* от картинки к реальной покупке. *Барьер:* надёжное соответствие рекомендаций пространству и бюджету. *Доказать:* точность подбора и оценки количеств/бюджета.

**Stage 7 — Professional Design Platform.** Дизайнер, клиент, семья, команда, сравнение вариантов, согласования, экспорт, handoff, collaboration. *Ценность:* платформа для профессионального использования. *Барьер:* многопользовательский workflow и согласования. *Доказать:* завершение реального профессионального проекта на платформе.

*(Полный whole-project cross-room intellect — за пределами Stage 5; см. Track E.)*

---

## CATEGORY LEADERSHIP CRITERIA

```text
Image quality is necessary but insufficient.
```

1. Точность понимания пространства.
2. Сохранение архитектуры и геометрии.
3. Качество функциональной планировки.
4. Соблюдение эргономики.
5. Качество дизайнерских решений.
6. Объяснимость решений.
7. Персонализация под жизнь пользователя.
8. Управляемость редактирования.
9. Сохранение неизменяемых частей.
10. Consistency между версиями и видами.
11. Надёжность project memory.
12. Способность довести проект до реализации.
13. Скорость получения полезного результата.
14. Стоимость достижения результата.
15. Доверие пользователя к системе.
16. Повторное использование и завершение проектов.

Числовые метрики определяются позднее через Decision Governance, PCS, ACS и Evaluation Contracts — не задаются в Roadmap.

---

## CURRENT STRATEGIC STATE AFTER GATE 2

**Implemented and accepted foundation:**
- Gate 1 — **Closed.**
- Gate 2 — **Closed within representation-first scope** (StructuredScene представление, структурная валидация, основа оценки).
- Prompt Intelligence foundation: **Prompt Builder, Rule Engine, Formatter** — реализованы и интегрированы.

**Deferred (осознанно рассмотрено и отложено):**
- **Prompt Reasoning и полный жизненный цикл `refinePromptDraft`** — не реализован, explicitly deferred.

**Future architecture decision — not yet assessed or authorized:**
- Постоянный (production) механизм восприятия сцены из реального фото.

**Strategically accepted directions (архитектура не оценена):**
- Лёгкий Project & Asset Foundation.

**Near-term architecture candidates:**
- VLM Interpretation;
- Project & Asset Foundation;
- Designer Reasoning (архитектурный фундамент, не production-контур).

**Later architecture candidates:**
- Editing Intelligence;
- Versioning;
- MultiView;
- Project Memory;
- Professional Workflow;
- Implementation & Commerce;
- Platform Operations.

**Explicitly not authorized:** whole-home generation, полный Project Mode, cross-room consistency, 3D reconstruction, любой выбор конкретного вендора/модели/провайдера.

---

## LEVEL 2 — PLATFORM CAPABILITIES

1. **Smart Interior Generation (Core)** — текущее продуктовое ядро и основная работающая пользовательская capability текущего этапа. Учитывает геометрию, назначение пространства (Residential/Commercial), эргономику, стиль, мебель, материалы, ограничения помещения.
2. **Intelligent Room Transformation** — Full/Partial Style Transfer, Full/Partial Room Clearing, Full/Partial Furniture Replacement, Object Replacement, Targeted Inpainting.
3. **Project Intelligence** — единая модель проекта: комната, квартира, дом, офис, ресторан, магазин, гостиница, клиника. Ожидается, что лёгкий Project & Asset Foundation (Level 4) послужит опорой для этой capability — при условии отдельного полного review совместимости с PCS-003.
4. **Commercial Design** — второе измерение платформы, развивается параллельно с Residential.
5. **Product Intelligence** — Furniture Matching, Material Matching, Alternatives, Regional Availability, Prices, Affiliate Integration.
6. **Renovation Intelligence** — Renovation Cart, Budget Estimator, Material Estimation, Procurement Suggestions.
7. **Design Planning** — функциональное зонирование, расстановка мебели, маршруты движения, ширина проходов, зоны открывания дверей и шкафов, рабочий треугольник кухни, доступ к окнам и радиаторам, естественное и искусственное освещение, точки фокуса, визуальный баланс, хранение, безопасность детей, потребности животных, доступность, назначение помещения.
8. **Design Reasoning** — объясняет решения только на основании структурированных данных, реально использованных AI Core.
9. **Personal AI Designer** — история проектов, предпочтения, любимые стили, персональная память; глубокая персонализация (см. ниже).
10. **Collaboration Platform** — дизайнер, клиент, семья, команда.

```text
Designer Reasoning = почему решение принято.
Design Planning    = какое пространственное решение принято.
Generation         = как это решение визуализировано.
```

**Углублённая персонализация:** не ограничивается любимыми стилями и историей изображений — учитывает состав семьи, возраст, детей, животных, привычки, работу из дома, приём гостей, потребности хранения, собственное проживание или аренду, Airbnb/инвестиционный сценарий, безопасность, доступность, климат, регион, бюджет, обслуживание интерьера, срок использования, экологические предпочтения, допустимый уровень изменений. Один и тот же интерьер для разных пользователей может требовать разных решений. Сбор такой информации **не считается автоматически разрешённым** — требует отдельного проектирования privacy, consent, минимизации данных и управляемой памяти пользователя (Architecture Assessment не выполнено).

**Platform Operations (обеспечивающий слой, не пронумерованная capability):** идентификация пользователя, устойчивое хранение проектов и монетизация — место закреплено в Level 4, Track H.

---

## LEVEL 3 — AI CAPABILITIES

- **Scene Intelligence:** Input Handler, Room Analyzer, Structured Scene. Слой представления реализован; слой восприятия — Level 4, Track A.
- **AI Orchestration:** AI Orchestrator, Context Composer, Agent Framework.
- **Knowledge Packs:** Residential, Commercial, Hospitality, Retail, Workspace, Luxury, Small Apartment.
- **Domain Intelligence:** Furniture Intelligence, Layout & Ergonomics Intelligence, Material Intelligence, Color Intelligence, Style Intelligence, Lighting Intelligence (при подтверждённой ценности).
- **Prompt Intelligence:** Prompt Builder, Formatter, Rule Engine, Prompt Reasoning. (Первые три — реализованы; Prompt Reasoning — deferred, см. Current Strategic State.)
- **Generation Intelligence:** Multi-stage Generation, Provider Layer, ControlNet, Regional Prompt. (Provider Layer — заменяемая инфраструктура, не источник устойчивого преимущества.)
- **Quality Intelligence:** Critic, Validation, Consistency, Refinement, Targeted Inpainting.

**Фундамент данных:** Project, Room, RoomView, ImageAsset, UploadBatch — не AI-модуль, не получает ACS-паспорт.

---

## LEVEL 4 — ENGINEERING ROADMAP

| Фаза | Содержание | Gate | Статус |
|---|---|---|---|
| A | AI Core Foundation | — | Frozen |
| B | Spatial Intelligence Foundation | — | Frozen |
| C | Integration Foundation | Gate 1 | Closed |
| D | Scene Intelligence | Gate 2 | Closed within representation-first scope |
| E | AI Orchestration | Gate 3 | Не начата |
| F | Domain Intelligence | Gate 4 | Не начата |
| G | Room Transformation | Gate 5 | Не начата |
| H | Project Intelligence | Gate 6 | Не начата |
| I | Product Intelligence | Gate 7 | Не начата |
| J | Commercial Design | Gate 8 | Не начата |
| K | Quality Intelligence | Gate 9 | Не начата |
| L | User Intelligence | Gate 10 | Не начата |
| M | Production Platform | Gate 11 | Не начата |
| N | Developer Studio | — | Existing foundation implemented; strategic expansion in progress (см. раздел Developer Studio) |
| O | Refactoring 2.0 | — | Не начата |

**Важное разъяснение о порядке:** упорядоченная таблица фаз остаётся долгосрочной картой capability, а не предрешённым следующим шагом. Следующий фактически авторизуемый этап выбирается отдельно, через post-Gate Architecture Assessment и Owner Decision; следующая строка таблицы не авторизует и не определяет автоматически следующий этап реализации.

### PARALLEL ENGINEERING TRACKS (Post–Gate 2)

Ни один трек не авторизован к реализации настоящим Roadmap update.

**Track A — Spatial Perception.** VLM Interpretation: производство надёжного StructuredScene из реального фото. ADR-014 установил текущую границу восприятия и класс временного механизма для уже принятого объёма Gate 2; выбор постоянного production-механизма остаётся отдельным будущим решением, ещё не оценённым.

**Track B — Project & Asset Foundation.** Лёгкий фундамент данных (Project, Room, RoomView, ImageAsset, UploadBatch) без whole-home generation и полного Project Mode — принят как направление; архитектура, объём и порядок реализации не оценены. Ожидается как опора для будущего PCS-003, при условии отдельного полного review совместимости. Может развиваться частично параллельно с Track A.

**Track C — Designer Intelligence.** Архитектурная разработка и изолированная оценка Designer Reasoning могут использовать synthetic/curated StructuredScene и начинаться независимо от Track A; production-валидация требует надёжного реального выхода восприятия из Track A.

**Track D — Editing and Continuity.** Понимание объектов/регионов → editing intent → выбор/маска → ограниченное редактирование → версия/история → согласованность. Не переопределяет существующее поведение Partial Edit, Clear, маски и inpainting.

**Track E — MultiView and Project Memory.** Обязательный фундамент — идентичность и происхождение (Track B); зрелая стадия — полноценное версионирование, Project Memory, межвидовая согласованность (в пределах одного проекта). **Cross-room consistency остаётся более поздней whole-project возможностью и не входит в лёгкий Project & Asset Foundation.**

**Track F — Professional Workflow.** Альтернативы, сравнение версий, история, экспорт, согласования, коллаборация, передача профессионалу.

**Track G — Implementation and Commerce.** Товарные рекомендации → количества → бюджет → маркетплейс → сценарии покупки. Зависит от надёжного понимания сцены и Designer Reasoning.

**Track H — Platform Operations.** Четыре этапа с разными триггерами: (1) локальное/сессионное хранение; (2) устойчивое хранение проекта; (3) идентификация пользователя; (4) монетизация и биллинг. Конкретный провайдер не выбирается.

**Explicitly non-authorized:** whole-home/apartment generation, automatic room grouping, полный multi-room graph, 3D reconstruction, mass editing, автоматический сценарий покупки, полная маркетплейс-интеграция, любой выбор конкретного вендора/модели/провайдера.

---

## DECISION GOVERNANCE

Integration Gate → Выбор профиля KPI → Сбор фактических данных → Decision Review → Decision Scorecard → Decision Record → Обновление Roadmap (опционально).

**Профили метрик** (унифицированная терминология — везде русский язык):

- **Технический профиль** (ранние этапы): доля успешных генераций, задержка отклика, стоимость AI-вызовов, стабильность, регрессии.
- **Продуктовый профиль** (после появления пользователей): использование функций, завершение сценариев, повторное использование, удержание.
- **Бизнес-профиль** (после запуска монетизации): конверсия в платную подписку, ARPU, переходы по партнёрским ссылкам, использование Product Intelligence.
- **Корпоративный профиль** (после появления команд/API): проекты команд, использование API, совместная работа, время подготовки проекта.

Сбор фактических данных (обязательный этап перед Decision Review). Источники: бенчмарки, логи, телеметрия, метрики производительности, отчёты об ошибках, обратная связь пользователей, скриншоты, стоимость AI-вызовов, отчёты по задержке. Decision Review запрещено проводить без собранных данных.

**Статус настоящей ревизии относительно этого правила:**

```text
Настоящий документ является Proposed Roadmap и не считается
принятым до отдельного Owner Decision.

До repository persistence необходимо определить и выполнить
требуемую действующей governance-моделью форму фиксации решения
по Roadmap v1.4.

Настоящий документ не переопределяет требования
Decision Governance и не объявляет commit заменой
Decision Review, Decision Scorecard или Decision Record.
```

Дальнейший выбор процедуры остаётся отдельным Owner-решением:

```text
Вариант A: сначала отдельный Roadmap Decision Record,
затем Owner Acceptance и persistence.

Вариант B: Owner отдельно утверждает специальную процедуру,
по которой Closure Review + Strategic Review + Owner Decision
образуют достаточную governance-цепочку.
```

Ни один из вариантов не выбран этим документом.

---

## DOCUMENTATION INTEGRITY CHECK

Между Gate документы (ADR_INDEX, README, Project Context) могут расходиться с фактическим состоянием кода. Периодическая сверка проверяет: соответствие ADR_INDEX фактическому состоянию модулей; актуальность README; фактическое использование production-кодом capability, отмеченных «готово»; отражение Project Context последнего закрытого Gate. Результат — короткая заметка о расхождениях, не полноценный Decision Record.

---

## DEVELOPER STUDIO

**Existing foundation** (по сведениям Project Owner; не верифицировано построчно в рамках данного review): Benchmark, Prompt Lab, Style Lab, My Style Lab, Generation Logs.

**Future strategic expansion** (не реализовано): Capability Explorer, AI Module Explorer, Decision Dashboard, Knowledge Explorer, Performance Dashboard, Architecture Explorer.

---

## LIVING ROADMAP GOVERNANCE

Roadmap может изменяться только при выполнении всех условий: завершён Integration Gate; выбран профиль KPI; собраны фактические данные; выполнен Decision Review; создан Decision Record; есть объективные основания изменить стратегию.

Принятие настоящего документа как v1.4 само по себе не является Architecture Assessment или implementation authorization ни для одного из треков Level 4, и не заменяет собой ни один из шести перечисленных условий изменения Roadmap (см. Decision Governance выше).

---

## GUIDING PRINCIPLES

1. Умная генерация — ядро платформы и текущее продуктовое ядро, но не конечная цель платформы.
2. Residential и Commercial развиваются как равноправные направления.
3. Каждая фаза завершается Integration Gate.
4. Каждая фаза имеет Success Criteria и Performance Budget.
5. Design Reasoning строится только на структурированных данных, реально использованных AI Core.
6. Roadmap изменяется только через процесс Decision Governance.
7. Capability First, AI Second.
8. Представление данных и восприятие — разные архитектурные уровни ответственности.
9. Стратегическое направление и авторизация конкретной архитектуры/реализации — разные governance-события.
10. Устойчивое конкурентное преимущество строится вокруг собственной интеллектуальной системы платформы, а не вокруг конкретной заменяемой генеративной модели.
11. Категорийное лидерство измеряется совокупностью критериев, а не только визуальным качеством генерации.

---
---

## OWNER-APPROVED ROADMAP AMENDMENT (2026-07-16)

Настоящий раздел является явно датированным Owner-approved дополнением к принятому **Living Strategic Roadmap v1.4**.

Он не изменяет и не переоткрывает существующие разделы документа, включая Mission, Strategic Ambition, Levels 0–4, Decision Governance, Living Roadmap Governance и Guiding Principles.

Дополнение внесено прямым решением Project Owner для фиксации обязательной последовательности будущих архитектурных и governance-шагов.

**Статус:** Owner-approved amendment, 2026-07-16  
**Тип:** Governance sequencing addition; не Architecture Assessment и не implementation authorization  
**Effect on document version:** Roadmap остаётся v1.4; настоящее дополнение не создаёт v1.5 и не требует отдельного sequencing-документа

### Mandatory Next Sequence After Supporting Contracts 1–10

Текущая авторизованная работа:

**Revision 13 Supporting Contracts 1–10 Preparation Cycle.**

После подготовки, review и Project Owner acceptance Supporting Contracts 1–10 обязательна следующая последовательность:

1. **Combined Diagnosability & Security Compatibility Assessment**
   1. **Assessment Criteria checkpoint** — критерии оценки должны быть явно подтверждены Project Owner до начала оценки уже принятых архитектурных блоков.
   2. **One full retrospective compatibility pass** — один полный review, одна compatibility matrix и один консолидированный результат, без автоматического переоткрытия или изменения принятых решений.
2. **AI Brain Diagnosability Architecture**
3. **Security Architecture Baseline**
4. **Mandatory cross-check** между AI Brain Diagnosability Architecture и Security Architecture Baseline, включая совместимость provider-boundary, logging, evidence, incident и configuration contracts.
5. **Phase-1 Scope Decision / Execution Profile**
6. **Section 22 data-governance artifacts 1–7 and 9–10**
7. **Tier 1 Corpus Preparation Authorization**

### Hard Security Stop

Никакой реальный внешний provider invocation, использование рабочих provider credentials или экспозиция governed data внешнему provider не допускаются до принятия применимых требований Security Architecture и верификации обязательных security controls.

Предварительное изучение публичной документации, условий использования и иных материалов для due diligence не является provider invocation или governed-data exposure и само по себе не авторизует дальнейшее взаимодействие.

### Diagnosability and Security Integration Boundary

Diagnosability requirements не могут служить основанием для хранения или раскрытия:

- secrets и raw credentials;
- запрещённых персональных данных;
- неавторизованных sensitive payloads;
- held-out ground truth;
- иных данных, запрещённых действующими security, privacy и data-governance решениями.

Diagnostic и security contracts, относящиеся к одной provider-boundary operation, должны использовать совместимую identity, event и incident model и пройти обязательную взаимную сверку до принятия соответствующих архитектур.

### Non-Authorization

Настоящее дополнение фиксирует только обязательность и порядок будущих шагов.

Оно не авторизует:

- начало Combined Diagnosability & Security Compatibility Assessment;
- подготовку или применение Assessment Criteria;
- retrospective compatibility review;
- подготовку AI Brain Diagnosability Architecture;
- подготовку Security Architecture Baseline;
- Phase-1 Scope Decision или Execution Profile;
- подготовку Section 22 data-governance artifacts;
- Tier 1 Corpus Preparation;
- provider invocation, использование рабочих provider credentials или governed-data exposure;
- repository persistence иных документов;
- Implementation Package;
- implementation.

Единственная текущая авторизованная работа — **Revision 13 Supporting Contracts 1–10 Preparation Cycle**.

---
---

## OWNER-APPROVED ROADMAP AMENDMENT — MODULE-COMPLETION-FIRST (REVISION 5, 2026-07-17)

```text
Amendment status:
OWNER-APPROVED ROADMAP AMENDMENT

Proposed amendment date:
2026-07-17

Acceptance date:
2026-07-17

Effective date:
2026-07-17

Amendment type:
Append-only governance sequencing addition

Roadmap version:
v1.4

New lifecycle framework:
NONE

New sequencing framework:
NONE

Authoritative sequencing source:
Module Completion and Sequencing Policy — Revision 4
```

### Section A — Permanent Roadmap Sequencing Rule

#### A.1 Purpose

Настоящий append-only amendment — отдельное неразрушающее дополнение к принятому Living Strategic Roadmap v1.4.

Его цель — применить принцип:

```text
Module-Completion-First
```

к стратегической структуре Roadmap, включая раздел:

```text
PARALLEL ENGINEERING TRACKS (Post–Gate 2)
```

и Tracks A–H.

Настоящий Amendment не создаёт:

- собственную lifecycle-модель;
- собственные Transition Authority Classes;
- отдельную Definition of Done;
- отдельный Module Applicability Profile;
- собственные Remediation States;
- собственные Control States;
- новые exception-механизмы;
- отдельный sequencing framework.

Единственным нормативным владельцем этих механизмов остаётся:

```text
VistaRoom AI
Module Completion and Sequencing Policy — Revision 4
```

Roadmap фиксирует только стратегическое применение Policy к своей структуре Tracks.

#### A.2 Relationship to Existing Roadmap Content

Настоящий Amendment не редактирует исторический текст:

- Mission;
- Strategic Ambition;
- Levels 0–4;
- Guiding Principles;
- Decision Governance;
- Living Roadmap Governance;
- PARALLEL ENGINEERING TRACKS;
- Tracks A–H;
- Owner-Approved Roadmap Amendment от 2026-07-16.

```text
Historical Roadmap text:
UNCHANGED

Historical Amendment dated 2026-07-16:
UNCHANGED

Prospective sequencing interpretation:
QUALIFIED BY THIS LATER AMENDMENT
ONLY AFTER PROJECT OWNER ACCEPTANCE
```

Если более ранняя формулировка Roadmap допускает более широкое параллельное прочтение, чем принятая Policy Revision 4 и настоящий более поздний Amendment, применяется более позднее явное Project Owner Decision в пределах sequencing-вопроса.

Настоящий Amendment не изменяет внутреннюю `Decision Governance` процедуру Living Strategic Roadmap.

Изменения самого Roadmap по-прежнему должны выполняться в соответствии с его собственной governance-процедурой.

#### A.3 Governing Source

Настоящий Amendment операционализирует:

```text
VistaRoom AI
Module Completion and Sequencing Policy — Revision 4

Status:
ACCEPTED — PROJECT OWNER

Acceptance date:
2026-07-17

Repository:
docs/engineering-decisions/reviews/Module-Completion-and-Sequencing-Policy-Rev4.md
```

Policy Revision 4 остаётся единственным нормативным владельцем:

- определения Major Module;
- Primary Active Module;
- lifecycle states;
- Transition Authority Classes;
- Architectural Readiness;
- Practical Completion;
- Closure Readiness;
- Module Closure;
- Post-Closure Governance;
- Module Applicability Profile;
- Bounded Scope Change Control;
- Cross-Cutting Dependencies;
- Owner-Authorized Exception Workstreams;
- Temporary Multi-Module Exceptions;
- residual-risk handling;
- remediation;
- suspension;
- termination;
- Non-Authorization boundaries.

Настоящий Amendment не копирует, не заменяет и не изменяет эти механизмы.

#### A.4 Strategic Track and Major Module Separation

Strategic Track и Major Module являются различными governance-единицами.

```text
Strategic Track:
Long-term strategic development direction recorded in the Roadmap

Major Module:
Separately bounded capability governed through its own
architecture, preparation, implementation, evaluation and closure cycle
```

Применяются следующие правила:

1. Один Strategic Track может содержать несколько Major Modules.
2. Один Major Module может зависеть от нескольких Strategic Tracks.
3. Наличие Track в Roadmap не означает, что соответствующий Major Module выбран.
4. Roadmap priority не означает architecture authorization.
5. Roadmap priority не означает implementation authorization.
6. Закрытие одного bounded Major Module не означает автоматического закрытия всего Strategic Track.
7. Открытие одного Major Module внутри Track не открывает автоматически все capabilities этого Track.

#### A.5 Module-Completion-First Applied to Tracks A–H

С даты Project Owner Acceptance настоящего Amendment стратегические Tracks A–H должны интерпретироваться совместно с Policy Revision 4.

Roadmap сохраняет Tracks A–H как долгосрочные стратегические направления.

Их присутствие в Roadmap само по себе не создаёт:

- Primary Active Module selection;
- architecture-cycle authorization;
- Implementation Preparation authorization;
- implementation authorization;
- formal evaluation authorization;
- provider authorization;
- governed-data authorization;
- repository-persistence authorization.

В обычном режиме проект имеет один Primary Active Module.

Другой Major Module не открывается автоматически из-за:

- стратегической важности Track;
- возможности использовать synthetic data;
- доступности provider;
- наличия свободных ресурсов;
- perceived technical independence;
- желания создать foundation;
- будущей коммерческой ценности.

#### A.6 Ordinary Opening of the Next Primary Active Module

Обычное открытие следующего Primary Active Module допускается только после:

```text
Module Closure текущего Primary Active Module
→ Post-Closure Synchronization
→ Post-Closure Governance Complete
→ отдельное Project Owner Decision о выборе следующего Primary Active Module
→ preliminary Bounded Scope
→ отдельная authorization подготовки Module Applicability Profile
→ отдельная authorization architecture cycle
```

Само Module Closure:

- не выбирает следующий Major Module;
- не открывает следующий Track;
- не авторизует architecture work;
- не авторизует implementation;
- не авторизует formal evaluation;
- не заменяет отдельное Project Owner selection.

Roadmap sequence или strategic priority также не заменяют отдельные lifecycle authorizations.

#### A.7 Prospective Interpretation of Track C

Исторический текст Roadmap о возможности независимого начала Track C на synthetic или curated data сохраняется физически без изменений.

После Project Owner Acceptance настоящего Amendment эта формулировка:

```text
не создаёт самостоятельной execution authorization
```

и не разрешает автоматическое открытие Designer Intelligence как второго active Major Module.

До состояния:

```text
Post-Closure Governance Complete
```

текущего Primary Active Module любая существенная работа, способная продвигать самостоятельную Designer Intelligence capability, допускается только через один из механизмов Policy Revision 4.

К такой существенной работе относятся:

- normative architecture drafting;
- acceptance-oriented architecture work;
- persistent architecture deliverables;
- Implementation Package preparation;
- implementation;
- integration;
- formal evaluation;
- provider-enabled execution;
- governed-data processing;
- создание самостоятельной capability Track C.

Без открытия Track C допустимы:

- ненормативное обсуждение;
- Owner-requested comparison;
- preliminary non-normative assessment;
- анализ альтернатив без создания persistent architecture deliverables;
- подготовка будущего Owner Decision.

Подготовка будущего Owner Decision допускается только:

1. по прямому поручению Project Owner; либо
2. на основании ранее принятой применимой authorization.

Подготовка такого решения:

- не авторизует предмет будущего решения;
- не создаёт accepted architecture;
- не создаёт implementation artifacts;
- не создаёт execution authorization;
- не должна использоваться как обход Module-Completion-First.

#### A.8 Permitted Governance Mechanisms for Pre-Closure Track C Work

##### A.8.1 Cross-Cutting Dependency

Каждая конкретная Cross-Cutting Dependency требует отдельного Owner-authorized Bounded Scope и должна полностью удовлетворять Policy Revision 4 §15.

В частности, она должна:

- иметь прямую traceability к requirement текущего Primary Active Module;
- иметь отдельный Owner-authorized Bounded Scope;
- не создавать самостоятельную capability другого Major Module;
- не создавать неограниченный foundation для будущих модулей;
- не расширять implementation scope;
- иметь closure condition;
- прекращаться после выполнения closure condition либо требовать новой authorization;
- не нарушать Hard Security Stop;
- не использоваться как обход Module-Completion-First.

Приведённый перечень воспроизводит девять условий Policy Revision 4 §15 для удобства чтения.

Единственным нормативным источником требований к Cross-Cutting Dependency остаётся Policy Revision 4 §15.

Если reference-list настоящего Amendment расходится с Policy Revision 4 §15:

```text
POLICY REVISION 4 §15 PREVAILS
```

и применяется Documentation Synchronization Stop до исправления reference-list.

Настоящий Amendment только признаёт существование механизма Cross-Cutting Dependency.

Он не авторизует ни одну конкретную Cross-Cutting Dependency.

##### A.8.2 Owner-Authorized Exception Workstream

Работа должна быть отдельно разрешена по Policy Revision 4 §17 с явным определением:

- rationale;
- Bounded Scope;
- разрешённых activities;
- запрещённых activities;
- duration или closure condition;
- priority;
- resource impact;
- dispersion risk;
- termination criteria;
- reporting;
- closure record.

Настоящий Amendment не создаёт Exception Workstream автоматически.

##### A.8.3 Temporary Multi-Module Exception

Полноценное параллельное открытие дополнительного active Major Module допускается только через отдельное:

```text
Temporary Multi-Module Exception Decision
```

по Policy Revision 4 §18.

Настоящий Amendment не является таким решением.

##### A.8.4 Synthetic Data Rule

Использование:

- synthetic data;
- curated data;
- mocked data;
- isolated fixtures;

само по себе:

- не создаёт authorization;
- не создаёт Cross-Cutting Dependency;
- не создаёт Exception Workstream;
- не открывает Track C;
- не открывает Designer Intelligence как самостоятельный Major Module.

#### A.9 Relationship to the Owner-Approved Amendment Dated 2026-07-16

Owner-Approved Roadmap Amendment от 2026-07-16 остаётся действующим и не изменяется.

Настоящий Amendment:

- не редактирует его текст;
- не переоткрывает его решения;
- не переупорядочивает Mandatory Next Sequence;
- не ослабляет Hard Security Stop;
- не изменяет Diagnosability/Security Integration Boundary.

Module-Completion-First определяет:

```text
какой Major Module является активным
```

Amendment от 2026-07-16 определяет:

```text
обязательную внутреннюю последовательность
внутри текущего Primary Active Module
```

Эти governance-слои дополняют друг друга.

#### A.10 Authoritative Mandatory Next Sequence Reference

Для текущего Primary Active Module действует Mandatory Next Sequence, установленная Owner-Approved Roadmap Amendment от 2026-07-16:

```text
Supporting Contracts 1–10 accepted
→ Combined Diagnosability & Security Compatibility Assessment
→ Project Owner checkpoint on Assessment Criteria
→ one retrospective compatibility pass
→ AI Brain Diagnosability Architecture
→ Security Architecture Baseline
→ mandatory Diagnosability ↔ Security cross-check
→ Phase-1 Scope Decision / Execution Profile
→ Section 22 data-governance artifacts 1–7, 9–10
→ Tier 1 Corpus Preparation Authorization
```

Приведённая последовательность является reference-copy для удобства чтения.

Единственным нормативным источником этой последовательности остаётся:

```text
Owner-Approved Roadmap Amendment (2026-07-16)
```

При обнаружении любого расхождения между reference-copy и Amendment от 2026-07-16 применяется:

```text
DOCUMENTATION SYNCHRONIZATION STOP
```

В этом случае:

- reference-copy не должна использоваться для execution;
- reference-copy не должна использоваться как authorization basis;
- reference-copy должна быть исправлена через применимое governance-действие;
- нормативный Amendment от 2026-07-16 остаётся действующим;
- его authoritative sequence продолжает применяться без изменения.

Настоящий Amendment:

- не изменяет состав Section 22 artifacts;
- не добавляет новые artifacts;
- не исключает artifacts 1–7, 9–10;
- не изменяет prerequisite order;
- не создаёт authorization на выполнение любого этапа.

#### A.11 Hard Security Stop

Hard Security Stop, установленный Owner-Approved Roadmap Amendment от 2026-07-16 и подтверждённый Policy Revision 4, остаётся без изменений.

Для удобства чтения его применимый смысл кратко воспроизводится следующим образом:

До принятия и проверки применимых security requirements запрещены:

- реальные внешние provider invocations с governed data;
- использование рабочих provider credentials;
- передача governed data внешним AI-провайдерам.

Безопасная due diligence может проводиться только в отдельно допустимых границах:

- анализ публичной документации;
- сравнение capabilities;
- анализ terms;
- работа без governed-data exposure;
- работа без production credentials.

Due diligence не авторизует:

- provider evaluation;
- provider selection;
- implementation;
- governed-data exposure.

Настоящий раздел является reference-paraphrase для удобства чтения, а не отдельным нормативным определением Hard Security Stop.

Единственным нормативным источником Hard Security Stop остаётся:

```text
Owner-Approved Roadmap Amendment (2026-07-16)
```

Если reference-paraphrase настоящего §A.11 расходится с нормативным текстом Amendment от 2026-07-16, применяется:

```text
DOCUMENTATION SYNCHRONIZATION STOP
```

В этом случае:

- reference-paraphrase не должна использоваться для execution;
- reference-paraphrase не должна использоваться как authorization basis;
- она должна быть исправлена через применимое governance-действие;
- нормативный Hard Security Stop от 2026-07-16 остаётся действующим;
- более строгая применимая граница сохраняется до устранения расхождения.

#### A.12 Roadmap Version Effect

Living Strategic Roadmap остаётся:

```text
Version 1.4
```

Настоящий Amendment:

- не создаёт v1.5;
- не заменяет Roadmap v1.4;
- не создаёт самостоятельный sequencing framework;
- не заменяет Policy Revision 4;
- добавляется append-only после Amendment от 2026-07-16.

#### A.13 Permanent Non-Authorization

Настоящий Amendment не авторизует:

- открытие Track B, C, D, E, F, G или H как Primary Active Module;
- открытие связанного будущего Major Module;
- normative architecture drafting другого Major Module;
- acceptance-oriented architecture work другого Major Module;
- persistent architecture deliverables другого Major Module;
- Implementation Package другого Major Module;
- implementation другого Major Module;
- formal evaluation другого Major Module;
- Cross-Cutting Dependency;
- Owner-Authorized Exception Workstream;
- Temporary Multi-Module Exception;
- изменение Mandatory Next Sequence;
- изменение Hard Security Stop;
- изменение Section 22 artifact set;
- provider contact;
- provider invocation;
- provider credentials;
- governed-data exposure;
- provider/model evaluation;
- provider/model selection;
- любую implementation или deployment, не разрешённые отдельным применимым Project Owner Decision;
- repository persistence иных документов.

Каждая конкретная downstream authorization требует отдельного применимого Project Owner Decision.

### Section B — Initial Application Record

```text
Record type:
Time-bounded initial Roadmap application record

Record date:
2026-07-17

Nature:
Current-state snapshot, not permanent sequencing law

Future state changes:
Must be recorded through Project Owner Decisions and Project Context.

Roadmap amendment revision:
Not required solely because current module state later changes,
unless the permanent sequencing rule itself changes.
```

#### B.1 Current Primary Active Module

На дату вступления настоящего Amendment в силу текущим Primary Active Module является:

```text
Bounded Room Understanding / Spatial Perception
```

Его strategic Roadmap placement:

```text
Track A — Spatial Perception
```

Это является mapping текущего bounded Major Module к Strategic Track.

Это не означает, что:

- весь Track A является одним Major Module;
- весь Track A открыт;
- весь Track A входит в текущий Bounded Scope;
- закрытие текущего модуля автоматически закрывает Track A;
- будущие perception capabilities Track A уже авторизованы.

#### B.2 Current Bounded Scope Reference

Текущий Bounded Scope определяется исключительно действующими authoritative Candidate A governance documents и Policy Revision 4 Annex A.

Настоящий Amendment:

- не воспроизводит полный Bounded Scope;
- не создаёт отдельное scope definition;
- не изменяет действующий scope;
- не заменяет Candidate A Bounded Scope Decision;
- не заменяет Test Data Handling Decision;
- не заменяет Evaluation Threshold Plan.

Ненормативное краткое описание:

```text
Current bounded module:
single-room spatial perception from a single image,
as defined by the authoritative Candidate A baseline

Classification:
INFORMATIONAL SUMMARY ONLY —
NOT A SEPARATE SCOPE DEFINITION
```

#### B.3 Current Lifecycle State

```text
Current Primary Active Module:
Bounded Room Understanding / Spatial Perception

Current lifecycle state:
ARCHITECTURE CYCLE IN PROGRESS

Architectural Readiness:
NOT ACHIEVED

Implementation Preparation:
NOT AUTHORIZED

Implementation:
NOT AUTHORIZED

Formal Evaluation:
NOT AUTHORIZED

Module Closure:
NOT ACHIEVED
```

#### B.4 Current Roadmap Status of Tracks B–H

Tracks B–H сохраняют Roadmap-status:

```text
PLANNED
```

`Planned` является Roadmap-status и не является lifecycle-state Policy Revision 4.

На эту дату ни один bounded Major Module, стратегически относящийся к Tracks B–H:

- не выбран как Primary Active Module;
- не имеет automatic architecture authorization;
- не имеет automatic implementation authorization;
- не имеет automatic formal evaluation authorization.

Если отдельное Project Owner Decision не установило иной статус конкретного bounded Major Module, такой модуль не считается продвинутым выше:

```text
Identified
```

Это time-bounded status statement, а не вечное присвоение одного lifecycle-state всем будущим модулям Tracks B–H.

#### B.5 Current Tracks B–H

```text
Track B — Project & Asset Foundation
Roadmap status: PLANNED
Currently selected bounded Major Module from this Track: NONE

Track C — Designer Intelligence
Roadmap status: PLANNED
Currently selected bounded Major Module from this Track: NONE

Track D — Editing and Continuity
Roadmap status: PLANNED
Currently selected bounded Major Module from this Track: NONE

Track E — MultiView and Project Memory
Roadmap status: PLANNED
Currently selected bounded Major Module from this Track: NONE

Track F — Professional Workflow
Roadmap status: PLANNED
Currently selected bounded Major Module from this Track: NONE

Track G — Implementation and Commerce
Roadmap status: PLANNED
Currently selected bounded Major Module from this Track: NONE

Track H — Platform Operations
Roadmap status: PLANNED
Currently selected bounded Major Module from this Track: NONE
```

#### B.6 Current Mandatory Internal Sequence

Для текущего Primary Active Module действует Mandatory Next Sequence Amendment от 2026-07-16.

Настоящий Initial Application Record только фиксирует факт её применимости.

Он:

- не изменяет sequence;
- не авторизует следующий этап;
- не утверждает выполнение Supporting Contracts 1–10;
- не авторизует Diagnosability/Security Assessment;
- не авторизует Security Architecture;
- не авторизует Phase-1;
- не авторизует Section 22 artifacts;
- не авторизует corpus preparation.

#### B.7 Current Governance Status

```text
Roadmap Amendment Revision 5:
OWNER-APPROVED

Project Owner Acceptance:
COMPLETED — 2026-07-17

Open findings:
NONE

Repository persistence:
PERSISTED

Project Context v2.4 drafting:
NOT AUTHORIZED

Supporting Contracts 1–10 drafting:
NOT AUTHORIZED

Contract 10 Identity Alignment:
NOT AUTHORIZED

Module Applicability Profile drafting:
NOT AUTHORIZED

Implementation Preparation:
NOT AUTHORIZED

Implementation:
NOT AUTHORIZED

Formal Evaluation:
NOT AUTHORIZED

Provider activity with governed data:
PROHIBITED BY HARD SECURITY STOP
```

#### B.8 Initial Application Record Update Rule

Будущие изменения:

- Primary Active Module;
- lifecycle state;
- status конкретного bounded module;
- Module Closure;
- selection следующего module;
- exception authorizations;

должны фиксироваться через:

- отдельные Project Owner Decisions;
- Project Context;
- применимые governance records.

Они не требуют нового Roadmap Amendment, если постоянные правила Section A не изменяются.

### Section C — Amendment-Level Non-Authorization

Настоящий accepted Amendment не создаёт downstream authorization.

Он не авторизует:

- Project Context v2.4;
- Supporting Contracts 1–10 drafting;
- Contract 10 Identity Alignment;
- Module Applicability Profile drafting;
- Cross-Cutting Dependency;
- Exception Workstream;
- Temporary Multi-Module Exception;
- provider activity;
- governed-data exposure;
- corpus;
- fixtures;
- annotation;
- ADR;
- Implementation Package;
- implementation;
- deployment.

### Section D — Effective Date and Acceptance/Persistence Separation

#### D.1 Effective Date

```text
Amendment status:
OWNER-APPROVED ROADMAP AMENDMENT

Acceptance date:
2026-07-17

Effective date:
2026-07-17

Roadmap normative effect:
ACTIVE
```

#### D.2 Acceptance-Date Synchronization

Metadata-only acceptance synchronization has been resolved as follows:

```text
Amendment status:
OWNER-APPROVED ROADMAP AMENDMENT

Effective date:
2026-07-17

Initial Application Record date:
2026-07-17

Project Owner Acceptance:
COMPLETED

Open findings:
NONE
```

This synchronization does not alter the normative content.

#### D.3 Repository Persistence

Repository persistence is authorized only by the direct Project Owner instruction contained in the execution prompt for this amendment.

```text
Repository persistence:
PERSISTED
```

The commit recording this persistence is identified in the repository's own commit history (`git log`) rather than restated here, since a commit cannot record its own hash in advance.

Do not infer authorization for any other artifact or downstream activity.
