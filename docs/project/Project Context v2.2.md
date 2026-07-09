# Project Context v2.2 — VistaRoom AI

**Version:** 2.2

**Status:** Active (Current Baseline)

**Document Type:** Project Baseline

**Owner:** Platform Architecture

**Date:** 2026-07-09

---

# Project Status

Проект продолжает реализацию **Phase C — Integration Foundation (Gate 1 Closure Preparation)**.

Prompt Pipeline и оба ADR Integration (ADR-005, ADR-006) полностью реализованы и верифицированы. Prompt Engine как отдельная, более широкая сущность (полный жизненный цикл: `refinePromptDraft`, reasoning, orchestration) остаётся explicitly deferred и не входит в scope Gate 1.

## Architecture

**Status:** Completed

Architecture Freeze baseline includes ADR-000 through ADR-006 as originally accepted. Subsequent Gate 1 governance documents formalize production integration without modifying this frozen baseline.

Полностью завершены:

- Living Strategic Roadmap v1.3
- PCS-001 … PCS-010
- ACS-001 … ACS-010
- ADR-000 … ADR-006
- ADR Registry
- ADR Map
- Architecture Documentation
- Decision Governance
- Architecture Freeze Review
- Architecture Freeze Resolution
- Architecture Freeze Validation
- Architecture Freeze Completed

## Gate 1 Governance Additions

Following the Architecture Freeze, Gate 1 introduced governance over implementation of the frozen architecture without modifying the Architecture Freeze.

Included documents:

- ED-004 — ADR-006 Integration Readiness Assessment
- ADR-007 — StructuredScene/ProjectDesignContext Null Placeholder
- ADR-008 — Generation Intelligence Architectural Boundaries
- ADR-009 — Production Integration Contract for ADR-006 Generation Intelligence
- Architecture-Engineering-Responsibility-Model
- ADR-006 Implementation Package v1.0
- ADR-006 Implementation Completion Report

## Engineering

**Phase A:** Frozen

**Phase B:** Frozen

**Architecture Freeze:** Completed

**Current Phase:** Phase C — Integration Foundation (Gate 1 Closure Preparation)

### Current Gate

**Gate 1**

**Status:** In Progress

#### Completed Components

- ADR-005 Formatter Foundation
- ADR-005 Contract Verification
- ED-001 — Project Test Runner
- Engineering Decisions Guide
- Prompt Pipeline (Prompt Builder, Rule Engine, Formatter, Bridge Layer)
- ADR-005 Integration — реализована полностью, включая реальный HTTP smoke test
- Gate 1 Governance Additions (ED-004, ADR-007, ADR-008, ADR-009, Architecture-Engineering-Responsibility-Model)
- ADR-006 Integration completed and verified (see ADR-006 Implementation Completion Report)

**ADR-005 Formatter Foundation**

**Status:** Completed

**Contract:** Verified

Созданы:

- `formatter.ts`
- `formatter.types.ts`

Formatter реализован как независимый контракт ADR-005 без изменения существующей Track-1 реализации.

**Contract Verification**

В проект внедрена инфраструктура контрактной проверки.

Принято инженерное решение **ED-001 — Project Test Runner**. Стандартный тестовый раннер проекта — **Vitest**.

Контракт ADR-005 успешно верифицирован автоматическими тестами. Подтверждено:

- promptString contract;
- decisionTrace contract;
- DecisionRecord structure;
- sourceRule preservation;
- undefined → null normalization;
- отсутствие fabricated sourceRule;
- отсутствие colorTranslationStrategy;
- отсутствие изменений Track-1.

**ADR-006 Implementation Package v1.0**

**Status:** Completed

**Contract:** Verified (static + runtime)

All ADR-009 decisions have been fully dispositioned according to the accepted implementation plan:

- **Implemented:** Decision 1 (Mode/Operation Dispatch — documented as contract, dispatch unchanged), Decision 3 (Mask Invariant — implemented in `acs001-mask-invariant`, wired before dispatch), Decision 4 quality propagation (explicit quality propagation implemented through `InteriorEditRequest` → provider).
- **Documented, boundary-only:** Decision 4 Dimensions (isolated boundary artifact `acs001-dimensions`, payload integration intentionally deferred — no ADR defines the payload schema), Decision 5 (`mode === 'clear'`, traceability comment only, code unchanged).
- **Intentionally deferred:** Decision 2 (Sync/Async Reconciliation) — Resolution Phase remains out of scope for v1.0, requires a separate future Implementation Package.

Полное описание — ADR-006 Implementation Completion Report.

#### Remaining Scope

Remaining Gate 1 scope will be determined during the next Gate review after completion of the currently accepted Integration Foundation deliverables.

Prompt Engine (полный жизненный цикл: `refinePromptDraft`, reasoning, orchestration) **не входит** в Remaining Scope Gate 1 — explicitly deferred согласно Gate1-Prompt-Pipeline-TZ Revision 2.

Resolution Phase (ADR-009 Decision 2) **не входит** в Remaining Scope Gate 1 в рамках ADR-006 Implementation Package v1.0 — требует отдельного будущего Implementation Package после отдельного engineering design.

#### Next Milestone

Prepare formal Gate 1 closure and initiate planning for the next engineering stage.

---

# Mission

Создать AI-платформу мирового уровня для проектирования жилых и коммерческих пространств.

Главное конкурентное преимущество платформы — интеллектуальная генерация интерьеров, сохраняющая структуру помещения и принимающая архитектурно обоснованные решения.

---

# Architecture Principles

## Architecture First

Архитектура управляет кодом. Код не изменяет архитектуру.

---

## Capability First

Порядок разработки платформы: Capability → AI → Code.

Сначала определяется пользовательская ценность (Capability), затем AI-логика, после чего реализуется код.

---

## Single Source of Truth

Каждая логика описывается только в одном месте.

Не допускается: дублирование архитектурных решений; дублирование контрактов; параллельные описания одной и той же функциональности; расхождение документации между уровнями Roadmap, PCS, ACS, ADR и Engineering Decisions.

---

## Decision Governance

Архитектурные изменения проходят исключительно через: ADR → Decision Governance → Roadmap Update.

Инженерные решения оформляются через Engineering Decision (ED). Engineering Decisions не изменяют архитектуру платформы и не заменяют Architecture Decision Records.

Engineering Decisions определяют: инженерные стандарты; правила выбора инструментов; процессы разработки; инженерные соглашения; практики тестирования; правила документирования инженерных решений.

**Уточнение (v2.2):** Architecture-Engineering-Responsibility-Model формализует эту границу как общий governance-принцип, применимый ко всем будущим ADR проекта — ADR фиксирует архитектурный контракт; поддержание соответствия реализации контракту обеспечивается инженерными артефактами (Implementation Package, contract tests, regression tests, CI), а не расширением содержания ADR.

---

# Documentation Principles

## Documentation Neutrality

Нормативная документация должна описывать исключительно: утверждённые решения; проверенные факты; текущее состояние проекта; роли и зоны ответственности; правила управления платформой.

Нормативная документация не должна содержать личные мнения, самооценки, качественные суждения, мотивационные утверждения, субъективные комментарии автора.

Documentation Neutrality применяется ко всем нормативным документам платформы, включая Project Context, Living Strategic Roadmap, PCS, ACS, ADR, ED.

---

# Documentation Ecosystem

```text
Platform Vision
        ↓
Living Strategic Roadmap
        ↓
Platform Capability Specifications (PCS)
        ↓
AI Capability Specifications (ACS)
        ↓
Architecture Decision Records (ADR)
        ↓
Engineering Decisions (ED)
        ↓
Implementation
        ↓
Contract Tests
```

Каждый уровень документации имеет собственную область ответственности. Документы не должны дублировать друг друга.

**Уточнение (v2.2):** Governance-документы (`docs/governance/`) — отдельный, недавно формализованный слой, определяющий не архитектурные решения и не инженерные стандарты, а правила распределения ответственности между ADR и Engineering artifacts (см. Architecture-Engineering-Responsibility-Model).

---

# Developer Studio

Developer Studio является инженерной платформой управления развитием VistaRoom AI.

Назначение: управление Platform Capabilities, AI Capability, архитектурой, инженерными решениями, знаниями; инженерная аналитика; контрактная верификация; benchmark и performance analysis; разработка Prompt Intelligence.

Основные модули: Capability Explorer, AI Module Explorer, Architecture Explorer, Knowledge Explorer, Decision Dashboard, Performance Dashboard, Benchmark, Prompt Lab, Style Lab.

---

# Knowledge Architecture

Knowledge Layer является независимым уровнем платформы. Все Knowledge Packs должны оставаться независимыми от Provider Layer.

Замена AI Provider не должна требовать изменения Knowledge Packs, Prompt Intelligence, Domain Intelligence, Platform Architecture.

---

# Prompt Philosophy

Prompt не рассматривается как текст. Prompt является результатом работы Prompt Intelligence.

Распределение ответственности:

### Prompt Pipeline

Отвечает за подготовку **PromptDraft**. **Статус (v2.2): Completed** — реализован полностью в рамках Gate 1 (Prompt Builder, Rule Engine, Bridge Layer).

### Formatter

Преобразует **PromptDraft** в provider-ready prompt в соответствии с ADR-005. **Статус (v2.2): Integrated** (ADR-005 Integration, завершена).

### Prompt Engine

Управляет полным жизненным циклом подготовки Prompt. **Статус (v2.2): Deferred** — не входит в scope Gate 1 (Gate1-Prompt-Pipeline-TZ Revision 2).

---

# Domain Intelligence

Domain Intelligence включает: Furniture Intelligence, Layout Intelligence, Material Intelligence, Color Intelligence, Style Intelligence.

Добавление новых Domain Intelligence допускается только через PCS → ACS → ADR.

---

# Personal AI Designer

"My Style" не является отдельным Domain Intelligence. Рассматривается как пользовательский источник данных.

Style Intelligence обязан одинаково работать как с Preset Style, так и с Custom Style — без изменения архитектурного контракта.

---

# Current Repository Status

## Strategy
- Living Strategic Roadmap

## Platform
- PCS
- ACS

## Architecture
- ADR-000 … ADR-006 (Architecture Freeze)
- Architecture Documentation

## Gate 1 Governance
- ED-004
- ADR-007
- ADR-008
- ADR-009
- Architecture-Engineering-Responsibility-Model

## Engineering
- Engineering Decisions
- ED-001 — Project Test Runner
- Engineering Decisions Guide

## Implementation
- Formatter Foundation
- Prompt Pipeline
- ADR-005 Integration
- ADR-006 Implementation Package v1.0

## Verification
- Vitest
- ADR-005 Contract Tests
- ADR-006 Contract Tests (Mask Invariant, Dimensions)
- ADR-005 Real HTTP Smoke Test
- ADR-006 Real HTTP Smoke Test
- Runtime verification included both invariant rejection scenarios and successful production dispatch scenarios

---

# Current Objective

Prepare formal Gate 1 closure and initiate planning for the next engineering stage.

Prompt Engine остаётся explicitly deferred и не является частью текущего объектива.

Все дальнейшие работы должны выполняться в соответствии с Living Strategic Roadmap, PCS, ACS, ADR, Engineering Decisions.

---

# Working Mode

Работа над платформой ведётся в следующих ролях: Chief Software Architect, Platform Architect, Lead AI Engineer.

Все дальнейшие решения обязаны соответствовать Living Strategic Roadmap, PCS, ACS, ADR; учитывать Engineering Decisions; не нарушать утверждённую архитектуру; обеспечивать долгосрочную эволюцию платформы.

---

# Baseline Approval

**Document:** Project Context v2.2

**Status:** Approved

**Baseline Status:** Current Baseline

**Approval Date:** 2026-07-09

---

# Review Scope

## Architecture Consistency

- соответствие Living Strategic Roadmap v1.3;
- соответствие PCS, ACS;
- соответствие ADR-000 … ADR-006 (Architecture Freeze, без изменений);
- соответствие Gate 1 Governance Additions (ED-004, ADR-007, ADR-008, ADR-009, Architecture-Engineering-Responsibility-Model) как отдельному governance-слою, не пересматривающему Architecture Freeze;
- отсутствие противоречий Decision Governance.

## Engineering Consistency

Подтверждено соответствие фактического инженерного состояния проекта (Prompt Pipeline, ADR-005 Integration, ADR-006 Implementation Package v1.0 — все завершены и верифицированы, включая реальные HTTP smoke tests) состоянию, зафиксированному в разделе **Project Status**.

## Documentation Consistency

Подтверждено: отсутствие внутренних противоречий; отсутствие дублирования архитектурных решений; соблюдение Single Source of Truth; соблюдение Documentation Neutrality; соответствие принятой структуре документации проекта.

---

# Baseline Policy

Начиная с даты утверждения настоящего документа, Project Context v2.2 является единственным актуальным описанием состояния проекта — до выпуска следующей версии.

---

# Version Policy

Следующая версия Project Context выпускается только при наличии существенного изменения состояния проекта: завершение Gate 1; переход к следующему Gate; завершение очередной инженерной стадии; изменение состава Platform Capabilities; изменение архитектуры платформы; изменение структуры документационной экосистемы.

До наступления одного из перечисленных событий действующей базовой версией проекта является **Project Context v2.2**.

---

# References

- Living Strategic Roadmap v1.3
- Platform Capability Specifications (PCS)
- AI Capability Specifications (ACS)
- Architecture Decision Records (ADR)
- Decision Governance
- Engineering Decisions (ED)
- Gate 1 Governance Additions (ED-004, ADR-007, ADR-008, ADR-009, Architecture-Engineering-Responsibility-Model)

---

# Version History

## Project Context v2.0

Зафиксирован переход проекта от Architecture Freeze к инженерной реализации.

## Project Context v2.1

Зафиксировано начало инженерной реализации платформы. Добавлены ADR-005 Formatter Foundation, ADR-005 Contract Verification, инженерная инфраструктура тестирования (Vitest), Engineering Decisions, ED-001, Engineering Decisions Guide.

## Project Context v2.2

Зафиксировано завершение Prompt Pipeline, ADR-005 Integration (полностью, включая реальный HTTP smoke test) и ADR-006 Integration через Gate 1 Governance Additions (ED-004, ADR-007, ADR-008, ADR-009, Architecture-Engineering-Responsibility-Model) и ADR-006 Implementation Package v1.0 (все ADR-009 decisions fully dispositioned — implemented, documented, or intentionally deferred — per the accepted implementation plan). Prompt Engine подтверждён как explicitly deferred, вне scope Gate 1. Architecture Freeze baseline (ADR-000…ADR-006) зафиксирован как неизменный; Gate 1 Governance Additions оформлены отдельным слоем поверх него, не расширяя и не пересматривая заморозку.

---

# Document Status

**Document:** Project Context v2.2

**Version:** 2.2

**Status:** Active

**Baseline:** Current Baseline

Данный документ является единственным актуальным описанием состояния проекта. Все последующие изменения состояния платформы фиксируются выпуском новой версии Project Context (v2.3 и далее) после завершения соответствующего инженерного этапа.
