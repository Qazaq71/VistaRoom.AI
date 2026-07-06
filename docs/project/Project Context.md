# Project Context v2.1 — VistaRoom AI

**Version:** 2.1

**Status:** Active (Current Baseline)

**Document Type:** Project Baseline

**Owner:** Platform Architecture

**Date:** 2026-07-06

---

# Project Status

Проект завершил архитектурную стадию и официально перешёл к инженерной реализации.

Architecture Freeze завершён.

Начата реализация **Phase C — Integration Foundation**.

Первый инженерный компонент новой архитектуры реализован и контрактно верифицирован.

---

# Mission

Создать AI-платформу мирового уровня для проектирования жилых и коммерческих пространств.

Главное конкурентное преимущество платформы — интеллектуальная генерация интерьеров, сохраняющая структуру помещения и принимающая архитектурно обоснованные решения.

---

# Current State

## Architecture

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

Архитектура считается утверждённой.

---

# Engineering

В рамках **Gate 1** реализован первый инженерный компонент новой архитектуры.

## Completed Component

### ADR-005 Formatter Foundation

Созданы:

- `formatter.ts`
- `formatter.types.ts`

Formatter реализован как независимый контракт ADR-005 без изменения существующей Track-1 реализации.

---

# Contract Verification

В проект внедрена инфраструктура контрактной проверки.

Принято инженерное решение:

**ED-001 — Project Test Runner**

Стандартный тестовый раннер проекта:

**Vitest**

Vitest выбран как единый тестовый раннер проекта, поскольку он:

- полностью соответствует стеку Next.js / React / TypeScript;
- не конфликтует с существующей инфраструктурой проекта;
- требует минимальной конфигурации;
- обеспечивает быстрый запуск контрактных тестов во время Integration Gates.

Полное обоснование приведено в **ED-001**.

Контракт ADR-005 успешно верифицирован автоматическими тестами.

Подтверждено:

- promptString contract;
- decisionTrace contract;
- DecisionRecord structure;
- sourceRule preservation;
- undefined → null normalization;
- отсутствие fabricated sourceRule;
- отсутствие colorTranslationStrategy;
- отсутствие изменений Track-1.

---

# Engineering Decisions

В проекте появился отдельный уровень инженерной документации.

Engineering Decisions предназначены для фиксации инженерных решений, не изменяющих архитектуру платформы.

Созданы:

- ED-001 — Project Test Runner
- Engineering Decisions Guide

Engineering Decisions определяют:

- инженерные стандарты;
- правила выбора инструментов;
- процессы разработки;
- инженерные соглашения;
- практики тестирования;
- правила документирования инженерных решений.

---

# Engineering Roadmap

## Phase A

**Status:** Frozen

## Phase B

**Status:** Frozen

## Architecture Freeze

**Status:** Completed

## Current Phase

**Phase C — Integration Foundation**

---

# Current Gate

## Gate 1

**Status:** In Progress

### Completed

✅ Formatter Foundation

**Status:** Completed

**Contract:** Verified

### Remaining Scope

Для завершения Gate 1 необходимо реализовать:

- Prompt Pipeline
- Prompt Engine
- ADR-005 Integration
- ADR-006 Integration

### Next Milestone

Complete Gate 1 — Integration Foundation.

---

# Architecture Principles

## Architecture First

Архитектура управляет кодом.

Код не изменяет архитектуру.

---

## Capability First

Порядок разработки платформы:

Capability

↓

AI

↓

Code

Сначала определяется пользовательская ценность (Capability), затем AI-логика, после чего реализуется код.

---

## Single Source of Truth

Каждая логика описывается только в одном месте.

Не допускается:

- дублирование архитектурных решений;
- дублирование контрактов;
- параллельные описания одной и той же функциональности;
- расхождение документации между уровнями Roadmap, PCS, ACS, ADR и Engineering Decisions.

---

## Decision Governance

Архитектурные изменения проходят исключительно через:

ADR

↓

Decision Governance

↓

Roadmap Update

Инженерные решения оформляются через:

Engineering Decision (ED)

Engineering Decisions не изменяют архитектуру платформы и не заменяют Architecture Decision Records.

---

# Documentation Principles

## Documentation Neutrality

Нормативная документация должна описывать исключительно:

- утверждённые решения;
- проверенные факты;
- текущее состояние проекта;
- роли и зоны ответственности;
- правила управления платформой.

Нормативная документация не должна содержать:

- личные мнения;
- самооценки;
- качественные суждения;
- мотивационные утверждения;
- субъективные комментарии автора.

Documentation Neutrality применяется ко всем нормативным документам платформы, включая:

- Project Context;
- Living Strategic Roadmap;
- Platform Capability Specifications (PCS);
- AI Capability Specifications (ACS);
- Architecture Decision Records (ADR);
- Engineering Decisions (ED).

---

# Documentation Ecosystem

Документация VistaRoom AI организована по уровням ответственности.

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

Каждый уровень документации имеет собственную область ответственности.

Документы не должны дублировать друг друга.

---

# Developer Studio

Developer Studio является инженерной платформой управления развитием VistaRoom AI.

Назначение:

- управление Platform Capabilities;
- управление AI Capability;
- управление архитектурой;
- управление инженерными решениями;
- управление знаниями;
- инженерная аналитика;
- контрактная верификация;
- benchmark и performance analysis;
- разработка Prompt Intelligence.

Основные модули:

- Capability Explorer
- AI Module Explorer
- Architecture Explorer
- Knowledge Explorer
- Decision Dashboard
- Performance Dashboard
- Benchmark
- Prompt Lab
- Style Lab

---

# Knowledge Architecture

Knowledge Layer является независимым уровнем платформы.

Все Knowledge Packs должны оставаться независимыми от Provider Layer.

Замена AI Provider не должна требовать изменения:

- Knowledge Packs;
- Prompt Intelligence;
- Domain Intelligence;
- Platform Architecture.

---

# Prompt Philosophy

Prompt не рассматривается как текст.

Prompt является результатом работы Prompt Intelligence.

Распределение ответственности:

### Prompt Pipeline

Отвечает за подготовку **PromptDraft**.

### Formatter

Преобразует **PromptDraft** в provider-ready prompt в соответствии с ADR-005.

### Prompt Engine

Управляет полным жизненным циклом подготовки Prompt.

---

# Domain Intelligence

Domain Intelligence включает следующие AI Capability:

- Furniture Intelligence
- Layout Intelligence
- Material Intelligence
- Color Intelligence
- Style Intelligence

Добавление новых Domain Intelligence допускается только через:

PCS

↓

ACS

↓

ADR

---

# Personal AI Designer

"My Style"

не является отдельным Domain Intelligence.

"My Style" рассматривается как пользовательский источник данных.

Style Intelligence обязан одинаково работать как с:

- Preset Style;
- Custom Style.

Это обеспечивается без изменения архитектурного контракта.

---

# Current Repository Status

## Strategy

- Living Strategic Roadmap

## Platform

- PCS
- ACS

## Architecture

- ADR
- Architecture Documentation

## Governance

- Decision Governance

## Engineering

- Engineering Decisions
- ED-001 — Project Test Runner
- Engineering Decisions Guide

## Implementation

- Formatter Foundation

## Verification

- Vitest
- ADR-005 Contract Tests

---

# Current Objective

Продолжить реализацию **Phase C — Integration Foundation**.

Ближайшая инженерная цель:

- реализовать Prompt Pipeline;
- интегрировать Prompt Engine;
- завершить Gate 1 в соответствии с утверждённым Scope.

Все дальнейшие работы должны выполняться в соответствии с:

- Living Strategic Roadmap;
- PCS;
- ACS;
- ADR;
- Engineering Decisions.

---

# Working Mode

Работа над платформой ведётся в следующих ролях:

- Chief Software Architect
- Platform Architect
- Lead AI Engineer

Все дальнейшие решения обязаны:

- соответствовать Living Strategic Roadmap;
- соответствовать PCS;
- соответствовать ACS;
- соответствовать ADR;
- учитывать Engineering Decisions;
- не нарушать утверждённую архитектуру;
- обеспечивать долгосрочную эволюцию платформы.

---

# Baseline Approval

**Document:** Project Context v2.1

**Status:** Approved

**Baseline Status:** Current Baseline

**Approval Date:** 2026-07-06

---

# Review Scope

В ходе архитектурного и инженерного ревью подтверждено.

## Architecture Consistency

- соответствие Living Strategic Roadmap v1.3;
- соответствие PCS;
- соответствие ACS;
- соответствие ADR-000 … ADR-006;
- отсутствие противоречий Decision Governance.

## Engineering Consistency

Подтверждено:

- корректный статус Gate 1;
- корректный статус Formatter Foundation;
- корректный статус Contract Verification;
- корректная интеграция Engineering Decisions;
- корректная интеграция ED-001.

## Documentation Consistency

Подтверждено:

- отсутствие внутренних противоречий;
- отсутствие дублирования архитектурных решений;
- соблюдение принципа Single Source of Truth;
- соблюдение принципа Documentation Neutrality;
- соответствие принятой структуре документации проекта.

---

# Approved Project State

На момент утверждения Project Context v2.1 состояние проекта определяется следующим образом.

## Architecture

**Status:** Completed

Architecture Freeze завершён.

Архитектура платформы утверждена.

---

## Engineering

**Current Phase**

Phase C — Integration Foundation

**Current Gate**

Gate 1

**Status**

In Progress

---

## Completed

- ADR-005 Formatter Foundation
- ADR-005 Contract Verification
- ED-001 — Project Test Runner
- Engineering Decisions Guide

---

## Remaining Gate 1 Scope

Для завершения Gate 1 необходимо реализовать:

- Prompt Pipeline
- Prompt Engine
- ADR-005 Integration
- ADR-006 Integration

---

# Baseline Policy

Начиная с даты утверждения настоящего документа:

Project Context v2.1 является единственным актуальным описанием состояния проекта.

Все последующие:

- инженерные решения;
- Engineering Decisions;
- изменения реализации;
- новые Platform Capability;
- новые AI Capability;
- изменения документации;

оцениваются относительно **Project Context v2.1** до выпуска следующей версии документа.

---

# Version Policy

Следующая версия Project Context выпускается только при наличии существенного изменения состояния проекта.

Основаниями для выпуска новой версии являются:

- завершение Gate 1;
- переход к следующему Gate;
- завершение очередной инженерной стадии;
- изменение состава Platform Capabilities;
- изменение архитектуры платформы;
- изменение структуры документационной экосистемы.

До наступления одного из перечисленных событий действующей базовой версией проекта является:

**Project Context v2.1**

**Status:** Active (Current Baseline)

---

# References

Настоящий документ является частью экосистемы документации VistaRoom AI и должен использоваться совместно со следующими документами:

- Living Strategic Roadmap v1.3
- Platform Capability Specifications (PCS)
- AI Capability Specifications (ACS)
- Architecture Decision Records (ADR)
- Decision Governance
- Engineering Decisions (ED)

---

# Version History

## Project Context v2.0

Зафиксирован переход проекта от Architecture Freeze к инженерной реализации.

---

## Project Context v2.1

Зафиксировано начало инженерной реализации платформы.

Добавлены:

- ADR-005 Formatter Foundation;
- ADR-005 Contract Verification;
- инженерная инфраструктура тестирования (Vitest);
- Engineering Decisions;
- ED-001 — Project Test Runner;
- Engineering Decisions Guide;
- обновлённая экосистема документации.

Gate 1 остаётся **In Progress** до завершения:

- Prompt Pipeline;
- Prompt Engine;
- ADR-005 Integration;
- ADR-006 Integration.

---

# Document Status

**Document:** Project Context v2.1

**Version:** 2.1

**Status:** Active

**Baseline:** Current Baseline

Данный документ является единственным актуальным описанием состояния проекта.

Все последующие изменения состояния платформы фиксируются выпуском новой версии Project Context (v2.2, v2.3 и далее) после завершения соответствующего инженерного этапа.
