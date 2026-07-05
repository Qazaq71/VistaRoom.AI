**VistaRoom AI — Living Strategic Roadmap v1.3**

**Mission**

**Создать интеллектуальную AI-платформу для проектирования жилых и коммерческих пространств, где умная генерация является ядром, а остальные возможности расширяют её до полного цикла — от идеи до реализации проекта.**

**LEVEL 0 — PLATFORM GOVERNANCE**

**Platform Governance → Platform Vision → Platform Capabilities → AI Capabilities → Engineering Roadmap**

**Отвечает на вопрос: как развивается сама платформа.**

**DOCUMENT ECOSYSTEM**

**Living Strategic Roadmap — не единственный документ проекта, а часть экосистемы:**

- **Living Strategic Roadmap — стратегическая карта верхнего уровня;**
- **PCS (Platform Capability Specifications) — паспорта пользовательских возможностей;**
- **ACS (AI Capability Specifications) — паспорта AI-модулей;**
- **Architecture — архитектурная документация;**
- **ADR — архитектурные решения;**
- **Decision Governance Playbook — процесс управления изменениями;**
- **Developer Studio — инженерный инструмент управления платформой.**

**Каждый документ отвечает только за свой уровень.**

**LEVEL 1 — PLATFORM VISION**

**Идея → Анализ пространства → Умная генерация → Редактирование → Проектирование → Подбор мебели и материалов → Оценка бюджета → Подготовка проекта → Реализация**

**LEVEL 2 — PLATFORM CAPABILITIES**

1.  **Smart Interior Generation (Core) — главное конкурентное преимущество. Учитывает геометрию, назначение пространства (Residential/Commercial), эргономику, стиль, мебель, материалы, ограничения помещения.**
2.  **Intelligent Room Transformation — Full/Partial Style Transfer, Full/Partial Room Clearing, Full/Partial Furniture Replacement, Object Replacement, Targeted Inpainting.**
3.  **Project Intelligence — единая модель проекта: комната, квартира, дом, офис, ресторан, магазин, гостиница, клиника.**
4.  **Commercial Design — второе измерение платформы, развивается параллельно с Residential.**
5.  **Product Intelligence — Furniture Matching, Material Matching, Alternatives, Regional Availability, Prices, Affiliate Integration.**
6.  **Renovation Intelligence — Renovation Cart, Budget Estimator, Material Estimation, Procurement Suggestions.**
7.  **Design Planning — функциональное зонирование, расстановка мебели, эргономика, рекомендации.**
8.  **Design Reasoning — объясняет решения только на основании структурированных данных, реально использованных AI Core.**
9.  **Personal AI Designer — история проектов, предпочтения, любимые стили, персональная память.**
10. **Collaboration Platform — дизайнер, клиент, семья, команда.**

**PCS-001…PCS-010 — отдельный паспорт на каждую capability, содержит: Purpose, Business Value, User Stories, AI Modules, Knowledge Packs, Dependencies, Integration Gates, Performance Budget, Success Criteria, KPIs, Future Evolution, ADR References.**

**Правило: каждая Platform Capability имеет собственный Performance Budget, который может отличаться от бюджета фазы Engineering Roadmap.**

**LEVEL 3 — AI CAPABILITIES**

**AI развивается только тогда, когда усиливает Platform Capabilities.**

- **Scene Intelligence: Input Handler, Room Analyzer, Structured Scene.**
- **AI Orchestration: AI Orchestrator, Context Composer, Agent Framework.**
- **Knowledge Packs: Residential, Commercial, Hospitality, Retail, Workspace, Luxury, Small Apartment.**
- **Domain Intelligence (по продуктовой потребности): Furniture Intelligence, Layout & Ergonomics Intelligence, Material Intelligence, Color Intelligence, Style Intelligence, Lighting Intelligence (при подтверждённой ценности).**
- **Prompt Intelligence: Prompt Builder, Formatter, Rule Engine, Prompt Reasoning.**
- **Generation Intelligence: Multi-stage Generation, Provider Layer, ControlNet, Regional Prompt.**
- **Quality Intelligence: Critic, Validation, Consistency, Refinement, Targeted Inpainting.**

**ACS-001, ACS-002... — паспорт на каждый AI-модуль: Purpose, Responsibilities, Non-responsibilities, Inputs, Outputs, Dependencies, Consumers, Public Contract, Extension Points, Knowledge Packs, ADR References, Tests, Performance Expectations.**

**Правило: каждый AI-модуль обязан иметь чёткие границы, публичный контракт, список потребителей, список запрещённых зависимостей.**

**LEVEL 4 — ENGINEERING ROADMAP**

| **Фаза** | **Содержание** | **Gate** |
| --- | --- | --- |
| **A** | **AI Core Foundation** | **✅ Frozen** |
| **B** | **Spatial Intelligence Foundation** | **✅ Frozen** |
| **C** | **Integration Foundation** | **Gate 1** |
| **D** | **Scene Intelligence** | **Gate 2** |
| **E** | **AI Orchestration** | **Gate 3** |
| **F** | **Domain Intelligence** | **Gate 4** |
| **G** | **Room Transformation** | **Gate 5** |
| **H** | **Project Intelligence** | **Gate 6** |
| **I** | **Product Intelligence** | **Gate 7** |
| **J** | **Commercial Design** | **Gate 8** |
| **K** | **Quality Intelligence** | **Gate 9** |
| **L** | **User Intelligence** | **Gate 10** |
| **M** | **Production Platform** | **Gate 11** |
| **N** | **Developer Studio** | **—** |
| **O** | **Refactoring 2.0** | **—** |

**Engineering Rules: каждая фаза содержит Scope, Implementation, Tests, Integration Gate, Exit Criteria, Success Criteria, Performance Budget. Каждая Capability — PCS, Capability Performance Budget, Capability Success Criteria. Каждый AI-модуль — ACS, Public Contract, Dependency Boundaries.**

**DECISION GOVERNANCE**

**Integration Gate → Выбор профиля KPI → Сбор фактических данных → Decision Review → Decision Scorecard → Decision Record → Обновление Roadmap (опционально)**

**Профили метрик (унифицированная терминология — везде русский язык):**

- **Технический профиль (ранние этапы): доля успешных генераций, задержка отклика, стоимость AI-вызовов, стабильность, регрессии.**
- **Продуктовый профиль (после появления пользователей): использование функций, завершение сценариев, повторное использование, удержание.**
- **Бизнес-профиль (после запуска монетизации): конверсия в платную подписку, ARPU, переходы по партнёрским ссылкам, использование Product Intelligence.**
- **Корпоративный профиль (после появления команд/API): проекты команд, использование API, совместная работа, время подготовки проекта.**

**Сбор фактических данных (обязательный этап перед Decision Review). Источники: бенчмарки, логи, телеметрия, метрики производительности, отчёты об ошибках, обратная связь пользователей, скриншоты, стоимость AI-вызовов, отчёты по задержке. Decision Review запрещено проводить без собранных данных.**

**DOCUMENTATION INTEGRITY CHECK (новый раздел)**

**Дополнение к Decision Governance — механизм, не привязанный к Integration Gate.**

**Проверка Decision Governance срабатывает только в момент прохождения Gate. Между гейтами документы (ADR_INDEX, README, статусы модулей) могут расходиться с реальным состоянием кода — именно так возник drift, зафиксированный в архитектурном аудите (модуль, уже реализованный и стабилизированный, продолжал числиться как "pending" в бэклоге).**

**Правило: независимо от близости следующего Integration Gate, раз в фиксированный период (например, раз в месяц или при каждом пятом значимом коммите в src/lib/interior/\*\* — конкретную частоту определяете вы исходя из темпа разработки) проводится короткая сверка:**

- **статусы в ADR_INDEX.md соответствуют фактическому состоянию модулей;**
- **README.md описывает реально используемую инфраструктуру, а не устаревшую;**
- **Capability/AI-модуль, отмеченный как "готов", реально импортируется production-кодом (а не только существует в src/lib/interior/\*\*).**

**Результат — короткая заметка (не полноценный Decision Record), фиксирующая найденные расхождения и срок их устранения.**

**DEVELOPER STUDIO**

**Становится инженерной платформой управления VistaRoom AI:**

- **Capability Explorer — все PCS.**
- **AI Module Explorer — все ACS.**
- **Decision Dashboard — история Integration Gate, Decision Review, Decision Record, изменения Roadmap.**
- **Knowledge Explorer — все Knowledge Packs.**
- **Performance Dashboard — Performance Budget, стоимость AI-вызовов, задержка, регрессии.**
- **Architecture Explorer — архитектура, ADR, зависимости.**

**LIVING ROADMAP GOVERNANCE**

**Roadmap может изменяться только при выполнении всех условий:**

1.  **Завершён Integration Gate.**
2.  **Выбран профиль KPI.**
3.  **Собраны фактические данные.**
4.  **Выполнен Decision Review.**
5.  **Создан Decision Record.**
6.  **Есть объективные основания изменить стратегию.**

**Без выполнения всех шести условий изменение Living Strategic Roadmap запрещено.**

**GUIDING PRINCIPLES**

1.  **Умная генерация — ядро платформы и её главное конкурентное преимущество.**
2.  **Residential и Commercial развиваются как равноправные направления.**
3.  **Каждая фаза завершается Integration Gate.**
4.  **Каждая фаза имеет Success Criteria и Performance Budget.**
5.  **Design Reasoning строится только на структурированных данных, реально использованных AI Core.**
6.  **Roadmap изменяется только через процесс Decision Governance.**
7.  **Capability First, AI Second — любая новая разработка начинается с описания пользовательской ценности (Platform Capability), затем проектируются AI-возможности, необходимые для её реализации.**