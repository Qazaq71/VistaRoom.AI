# VistaRoom AI  
# Module Completion and Sequencing Policy — Revision 4

```text
Document type:
Proposed Project Owner Governance Policy

Document classification:
Not an ADR
Not an Implementation Package
Not a Roadmap revision
Not a Project Context revision

Status:
ACCEPTED — PROJECT OWNER

Acceptance date:
2026-07-17

Revision:
4

Supersedes:
Module Completion and Sequencing Policy — Revision 3
as the current acceptance candidate

Prepared for:
Project Owner — Nurlan

Preparation date:
2026-07-17

Repository:
Qazaq71/VistaRoom.AI

Target branch:
main

Repository persistence:
AUTHORIZED AND COMPLETED

Revision scope:
Targeted revision closing five non-blocking clarification findings
from the completed consolidated review of Revision 3

Normative change:
NONE

Lifecycle change:
NONE

Bounded Scope change:
NONE

Authorization change:
NONE
```

---

# Part I — Permanent Module Completion and Sequencing Policy

# 1. Purpose

Настоящая Policy нормативно закрепляет постоянный принцип исполнения проекта VistaRoom AI:

## Module-Completion-First

Основное правило:

> VistaRoom AI должен иметь один Primary Active Module, последовательно доводить его до полного архитектурного и практического завершения в принятом Bounded Scope и только после формального закрытия открывать следующий Major Module.

Проект не должен одновременно распределять основной governance-, architecture-, implementation- и evaluation-фокус между несколькими крупными модулями.

Иная крупная работа до закрытия текущего Primary Active Module допускается только на основании отдельного явного решения Project Owner.

Настоящая Policy регулирует:

- определение Major Module;
- назначение Primary Active Module;
- lifecycle Major Module;
- правила переходов между состояниями;
- Module Applicability Profile;
- Definition of Done;
- Closure Readiness;
- Module Closure;
- Post-Closure Governance;
- Cross-Cutting Dependencies;
- Owner-Authorized Exception Workstreams;
- временные multi-module exceptions;
- Bounded Scope Change Control;
- residual risks;
- termination;
- выбор следующего Primary Active Module;
- взаимодействие Policy с Roadmap, Project Context, ADR и специализированными governance-документами.

---

# 2. Policy Intent

Module-Completion-First предназначен для предотвращения:

- открытия нескольких крупных интеллектуальных направлений одновременно;
- распыления внимания и ресурсов;
- накопления незавершённых архитектурных веток;
- преждевременного перехода к новым возможностям;
- длительного разрыва между архитектурой и работающей системой;
- смешения архитектурной готовности с implementation;
- смешения implementation с formal evaluation;
- открытия следующего модуля до доказанного закрытия текущего;
- использования cross-cutting work как обходного пути;
- потери governance traceability;
- ложного объявления готовности или завершения.

Policy не запрещает сквозную работу, необходимую для завершения Primary Active Module.

Она запрещает использовать такую работу для скрытого открытия самостоятельной capability другого Major Module.

---

# 3. Scope

Policy применяется:

- ко всем текущим и будущим Major Modules;
- к governance-событиям их открытия, ведения, оценки и закрытия;
- к architecture cycles;
- к implementation preparation;
- к implementation;
- к formal evaluation;
- к Module Closure;
- к cross-cutting work;
- к Owner-authorized exceptions;
- к выбору следующего Primary Active Module.

Policy не изменяет автоматически:

- содержание принятых ADR;
- содержание специализированных architecture decisions;
- принятые Bounded Scope Decisions;
- evaluation thresholds;
- data-governance requirements;
- security requirements;
- diagnosability requirements;
- provider-governance boundaries;
- repository authorizations;
- ранее принятые non-authorization boundaries.

Изменение таких положений требует отдельного применимого governance-события.

---

# 4. Document Authority and Conflict Resolution

## 4.1 Document functions

### Explicit Project Owner Decision

Создаёт или изменяет конкретную:

- authorization;
- selection;
- exception;
- acceptance;
- rejection;
- suspension;
- termination;
- scope change;
- governance resolution.

### Module Completion and Sequencing Policy

Регулирует порядок исполнения и последовательность Major Modules.

### Living Strategic Roadmap

Определяет стратегические направления и долгосрочную последовательность, но сам по себе не авторизует:

- architecture drafting;
- implementation;
- provider invocation;
- governed-data exposure;
- repository changes.

Внутренняя процедура `Decision Governance`, установленная Living Strategic Roadmap для изменения самого Roadmap, остаётся самостоятельной governance-процедурой. Она не заменяется lifecycle-состояниями настоящей Policy, а настоящая Policy не отменяет требования Roadmap к собственным amendment, Decision Review, Scorecard, Decision Record или Roadmap Update.

### Project Context

Фиксирует authoritative snapshot текущего состояния проекта, но не создаёт новую authorization.

### ADR и специализированные governance-документы

Регулируют собственную architecture-, evaluation-, data-, security-, provider- или implementation-subject area.

Они не отменяют sequencing rules настоящей Policy без более позднего явного Project Owner Decision.

## 4.2 Conflict-resolution order

При конфликте применяется следующий порядок:

1. Более позднее явное Project Owner Decision имеет приоритет над более ранним общим текстом в пределах явно изменённого вопроса.
2. Настоящая Policy имеет приоритет в вопросах sequencing, Primary Active Module и parallel-work restrictions.
3. Living Strategic Roadmap определяет стратегическое направление, но не создаёт execution authorization.
4. Project Context отражает состояние, но не создаёт или не изменяет нормативную власть.
5. Специализированный authoritative документ имеет приоритет в своей subject area, если не противоречит более позднему Owner Decision.
6. Module-specific governance sequence имеет приоритет над общими перечнями допустимых lifecycle activities.
7. Неразрешённый конфликт создаёт Governance Stop.

## 4.3 Governance Stop

При неразрешённом конфликте запрещено:

- выполнять спорный lifecycle transition;
- расширять Bounded Scope;
- начинать implementation;
- начинать provider invocation;
- передавать governed data;
- объявлять readiness;
- объявлять Module Closure.

Работа возобновляется после явного Owner Resolution Decision.

---

# 5. Definitions

## 5.1 Major Module

**Major Module** — отдельно определённая Project Owner ограниченная продуктовая или платформенная capability, значимость которой требует собственного цикла:

```text
governance
→ architecture
→ preparation
→ implementation
→ verification
→ evaluation
→ closure
```

Major Module не обязан полностью совпадать со Strategic Track.

Один Strategic Track может содержать несколько Major Modules.

Один Major Module может зависеть от нескольких Strategic Tracks.

## 5.2 Primary Active Module

**Primary Active Module** — единственный Project Owner-designated Major Module, которому присвоен основной приоритет и для которого разрешено последовательное продвижение по lifecycle строго в пределах отдельных authorizations.

Статус Primary Active Module сам по себе не авторизует:

- architecture drafting;
- Implementation Package;
- implementation;
- provider activity;
- governed-data exposure;
- evaluation;
- repository persistence.

## 5.3 Bounded Scope

**Bounded Scope** — явно ограниченный и принятый Project Owner объём Major Module, включающий применимые:

- purpose;
- inputs;
- outputs;
- operations;
- data types;
- categories;
- environments;
- provider boundaries;
- exclusions;
- non-goals;
- success conditions.

## 5.4 Module Applicability Profile

**Module Applicability Profile** — отдельный принятый governance artifact, определяющий требования конкретного Major Module к:

- architecture readiness;
- supporting contracts;
- evaluation;
- diagnosability;
- security;
- privacy;
- governed data;
- providers;
- corpus;
- annotation;
- operational readiness;
- retention;
- deletion;
- audit;
- closure.

## 5.5 Cross-Cutting Dependency

**Cross-Cutting Dependency** — строго ограниченная работа, непосредственно необходимая для завершения Primary Active Module и не являющаяся самостоятельной capability другого Major Module.

## 5.6 Owner-Authorized Exception Workstream

**Owner-Authorized Exception Workstream** — отдельная ограниченная работа вне обычной последовательности Module-Completion-First.

Она не является вторым Primary Active Module и не получает автоматического права на полный lifecycle.

## 5.7 Temporary Multi-Module Exception

**Temporary Multi-Module Exception** — исключительное Project Owner Decision, временно разрешающее существование более одного полноценного active Major Module.

Оно не может возникнуть автоматически или как следствие обычного Exception Workstream.

## 5.8 Architectural Readiness

**Architectural Readiness** — состояние, при котором приняты все architecture-level deliverables, определённые применимым Module Applicability Profile, и отсутствуют unresolved blocking architecture findings.

## 5.9 Practical Completion

**Practical Completion** — фактическая реализация и интеграция Major Module без утверждения, что formal evaluation или Module Closure завершены.

## 5.10 Closure Readiness

**Closure Readiness** — подтверждённое состояние, при котором выполнены все pre-closure requirements и Major Module может быть вынесен на отдельное Project Owner Module Closure Decision.

## 5.11 Module Closure

**Module Closure** — состояние, достигаемое только после отдельного Project Owner Acceptance of Module Closure.

## 5.12 Blocking Finding

**Blocking Finding** — finding, дефект, нарушение или риск, который должен быть закрыт до применимого lifecycle transition или Module Closure.

## 5.13 Residual Risk

**Residual Risk** — известный неблокирующий риск, оставшийся после выполнения обязательных требований и отдельно представленный Project Owner для принятия или отклонения.

## 5.14 Governance-Level Terminology Separation

Одинаковые или похожие термины, используемые в разных authoritative документах, не считаются автоматически взаимозаменяемыми.

В частности:

- module-level `Suspended`, определённый настоящей Policy, относится к состоянию или управлению полным Major Module cycle;
- `suspend`, используемый в data-, provider-, incident- или clearance-governance документах, может относиться только к отдельному data asset, provider exposure, evaluation use, clearance или incident action;
- artifact-level `draft`, `candidate-lock` и `locked`, используемые в Supporting Contracts governance, относятся к readiness отдельного contract artifact;
- `Closure Ready` и другие lifecycle terms настоящей Policy относятся к Major Module в целом.

Любое cross-document использование таких терминов должно сопровождаться указанием governance-уровня и authoritative source.

---

# 6. Lifecycle Model

## 6.1 Primary progression states

Основной lifecycle состоит из следующих состояний:

```text
1. Identified
2. Selected as Primary Active Module
3. Authorized Architecture Cycle
4. Architecture Cycle In Progress
5. Architecturally Ready
6. Authorized for Implementation Preparation
7. Implementation Preparation Complete
8. Authorized for Implementation
9. Implementation In Progress
10. Practically Complete
11. Authorized for Formal Evaluation
12. Formal Evaluation In Progress
13A. Evaluation Passed
13B. Evaluation Failed
14. Closure Readiness Review
15. Closure Ready
16. Module Closed
17. Post-Closure Synchronization In Progress
18. Post-Closure Governance Complete
```

Нормативное правило:

```text
architecture accepted ≠ implementation authorized
implementation authorized ≠ implemented
implemented ≠ evaluated
evaluation passed ≠ closure ready
closure ready ≠ module closed
module closed ≠ post-closure governance complete
```

---

# 7. Transition Authority Classes

Каждый lifecycle transition должен иметь определённый тип authority.

## 7.1 Class O — Project Owner Decision

Требуется для:

- выбора Primary Active Module;
- authorization architecture cycle;
- Architectural Readiness, если не делегировано отдельным решением;
- authorization Implementation Preparation;
- authorization Implementation;
- authorization Formal Evaluation;
- remediation scope после blocking failure, если требуется новая работа;
- Bounded Scope change;
- Module Closure;
- Owner Exception;
- suspension или termination на Owner level.

## 7.2 Class R — Accepted Review Outcome

Может подтверждать:

- отсутствие blocking findings;
- readiness deliverable quality;
- Implementation Package completeness;
- Practical Completion readiness;
- evaluation outcome;
- Closure Readiness.

Review outcome не создаёт работу, для которой требуется отдельная Class O authorization.

## 7.3 Class A — Authorized Assessor or Architect Certification

Может подтверждать технический факт, если соответствующая authority заранее делегирована Project Owner.

Примеры:

- implementation completed;
- tests passed;
- traceability present;
- conformance evidence available.

Class A не может самостоятельно:

- расширять scope;
- авторизовать implementation;
- авторизовать provider activity;
- принимать Module Closure.

## 7.4 Class E — Evidence-Based Administrative Status

Может фиксировать факт начала или завершения уже авторизованной работы.

Примеры:

- Architecture Cycle In Progress после начала разрешённой работы;
- Implementation In Progress после начала разрешённой реализации;
- Post-Closure Synchronization In Progress после Module Closure.

Class E не создаёт новую authorization.

---

# 8. Primary Progression State Rules

## 8.1 Identified

Capability признана возможным будущим Major Module.

Разрешены:

- обсуждение;
- Owner-requested comparison;
- preliminary non-normative assessment.

Без отдельной authorization запрещены:

- normative document drafting;
- persistent architecture deliverables;
- implementation artifacts;
- provider activity.

## 8.2 Selected as Primary Active Module

Требует Class O.

Selection сам по себе не авторизует architecture work.

## 8.3 Authorized Architecture Cycle

Требует Class O.

Owner Decision должен определить:

- authorized scope;
- expected deliverables;
- exclusions;
- non-authorization boundaries.

## 8.4 Architecture Cycle In Progress

Class E после фактического начала разрешённой architecture work.

Разрешаются только отдельно authorized activities.

Generic lifecycle permissions не отменяют более строгий module-specific governance sequence.

## 8.5 Architecturally Ready

Entry criteria:

- приняты все architecture-readiness artifacts, установленные Module Applicability Profile;
- закрыты blocking identity, terminology и dependency conflicts;
- подтверждена traceability;
- отсутствуют unresolved blocking architecture findings.

Authority: Class O либо специально делегированный Class R.

Architectural Readiness не авторизует Implementation Preparation.

## 8.6 Authorized for Implementation Preparation

Требует Class O.

Разрешается только подготовка Implementation Package и явно перечисленных preparation artifacts.

## 8.7 Implementation Preparation Complete

Подтверждается Class R или Class A в пределах делегированной authority.

Не авторизует implementation.

## 8.8 Authorized for Implementation

Требует Class O.

Authorization должна определить bounded implementation scope.

## 8.9 Implementation In Progress

Class E после начала разрешённой implementation.

## 8.10 Practically Complete

Подтверждается Class R или Class A.

Entry criteria:

- bounded implementation complete;
- integration complete;
- required tests complete;
- blocking implementation findings closed.

Practical Completion не означает Evaluation Passed или Module Closed.

## 8.11 Authorized for Formal Evaluation

Требует Class O.

Entry criteria должны включать применимые:

- evaluation readiness;
- protected evaluation assets;
- provider/data authorization;
- held-out integrity;
- formal evaluation contract.

## 8.12 Formal Evaluation In Progress

Class E после начала разрешённой evaluation.

## 8.13 Evaluation Passed

Подтверждается Class R на основании принятого evaluation contract.

Не означает Module Closure.

## 8.14 Evaluation Failed

Evaluation failure:

- не закрывает модуль;
- не авторизует automatic remediation;
- не авторизует automatic re-evaluation;
- не разрешает повторное использование governed evaluation assets без применимого решения.

Требуются:

- finding classification;
- impact assessment;
- evaluation-integrity assessment;
- отдельное решение о remediation, scope change, suspension или termination.

## 8.15 Closure Readiness Review

Проводится после Evaluation Passed либо после иного принятого verification outcome, предусмотренного Module Applicability Profile.

## 8.16 Closure Ready

Подтверждается Class R.

Closure Ready не означает Module Closed.

## 8.17 Module Closed

Требует отдельного Class O Project Owner Acceptance.

## 8.18 Post-Closure Synchronization In Progress

Class E после Module Closure.

## 8.19 Post-Closure Governance Complete

Подтверждается Class R или Class E после выполнения всех обязательных post-closure actions.

Только после этого разрешается начать governance-процесс выбора следующего Primary Active Module.

---

# 9. Remediation States

Remediation State не является новым authorization.

Он показывает, что переход вперёд заблокирован.

## 9.1 Architecture Remediation Required

Возникает при blocking architecture findings.

Разрешённая remediation требует:

- существующей applicable authorization; или
- новой Class O authorization, если scope remediation выходит за её пределы.

Возврат возможен только в:

- Architecture Cycle In Progress;
- readiness review;
- Suspended;
- Terminated.

## 9.2 Implementation Preparation Remediation Required

Возникает при blocking findings в Implementation Package или preparation artifacts.

Возврат возможен в Implementation Preparation stage после authorized remediation.

## 9.3 Implementation Remediation Required

Возникает при blocking implementation, integration или test findings.

Не авторизует scope expansion.

## 9.4 Evaluation Remediation Required

Возникает после Evaluation Failed, если Project Owner разрешил remediation.

Новая formal evaluation требует отдельной applicable authorization и соблюдения evaluation-asset governance.

## 9.5 Closure Remediation Required

Возникает, если Closure Readiness Review обнаружил blocking findings.

Возврат в Closure Readiness Review допускается после закрытия authorized remediation.

---

# 10. Control States and Modifiers

## 10.1 Suspended

**Suspended** означает:

- выполнение работ приостановлено;
- новые execution actions запрещены;
- ранее принятые artifacts сохраняют исторический статус, если решение о suspension не говорит иначе;
- возобновление требует применимой Owner reauthorization.

## 10.2 Authorization Withdrawn

**Authorization Withdrawn** означает:

- ранее разрешённая будущая работа запрещена с момента вступления решения в силу;
- уже созданные artifacts не уничтожаются автоматически;
- решение должно определить их дальнейший статус и допустимость использования.

## 10.3 Evaluation Invalidated

**Evaluation Invalidated** означает:

- evaluation evidence не может поддерживать lifecycle transition;
- причины invalidation должны быть зафиксированы;
- новый evaluation attempt требует применимой authorization;
- governed evaluation assets обрабатываются по соответствующим правилам integrity и consumption.

## 10.4 Module Terminated

**Module Terminated** означает завершение текущего module cycle без успешного Module Closure.

При termination:

- успешное завершение не заявляется;
- существующие artifacts сохраняют исторический статус;
- Project Context должен отразить причину;
- unresolved risks и retained assets фиксируются;
- следующий модуль не авторизуется автоматически;
- restart требует отдельного Owner Decision;
- Owner должен отдельно определить, допускается ли переход к выбору другого Primary Active Module.

---

# 11. Universal Module Closure Requirements

Для каждого Major Module обязательны:

1. Принятые purpose и Bounded Scope.
2. Принятый Module Applicability Profile.
3. Принятые применимые architecture decisions.
4. Принятые применимые supporting contracts.
5. Отдельная authorization Implementation Preparation.
6. Принятый Implementation Package или эквивалентный preparation artifact.
7. Отдельная implementation authorization.
8. Выполненная implementation в Bounded Scope.
9. Применимые tests и conformance checks.
10. Применимая formal evaluation или отдельно принятый эквивалентный verification mechanism.
11. Закрытие всех Blocking Findings.
12. Классификация Residual Risks.
13. Closure Readiness Review.
14. Project Owner Module Closure Decision.
15. Post-Closure Governance.

Специализированные требования определяются Module Applicability Profile.

---

# 12. Module Applicability Profile

## 12.1 Requirement

Для каждого Primary Active Module должен быть отдельно подготовлен и принят Module Applicability Profile.

## 12.2 Applicability dimensions

Profile должен определить требования к:

- architecture readiness;
- supporting contracts;
- evaluation;
- diagnosability;
- security;
- privacy;
- governed data;
- providers;
- corpus;
- annotation;
- held-out assets;
- operational readiness;
- incident handling;
- deployment;
- retention;
- deletion;
- audit;
- closure.

## 12.3 Risk-based applicability

Applicability определяется:

- attack surface;
- data surface;
- access surface;
- integration surface;
- external exposure;
- operational criticality;
- failure impact;
- privacy impact;
- user impact;
- provider interaction;
- persistence.

Отсутствие probabilistic AI не означает неприменимость Diagnosability или Security.

## 12.4 Non-applicability

Признание Diagnosability, Security, Privacy или Data Governance неприменимыми требует:

- documented rationale;
- risk assessment;
- Project Owner Acceptance.

---

# 13. Module-Specific Sequence Precedence

Общие перечни lifecycle activities определяют только максимально возможные категории работ.

Они:

- не являются authorization;
- не отменяют module-specific governance sequence;
- не разрешают раннее начало downstream work;
- не отменяют prerequisite gates.

Если Module Applicability Profile, Roadmap amendment, accepted preparation plan, specialized governance document или Owner Decision устанавливает более строгую последовательность, применяется более строгая последовательность.

---

# 14. Bounded Scope Change Control

## 14.1 Scope expansion

Любое расширение Bounded Scope требует Class O Owner Decision.

До решения должен быть подготовлен impact assessment, включающий:

- architecture impact;
- contract impact;
- data impact;
- privacy impact;
- security impact;
- diagnosability impact;
- provider impact;
- implementation impact;
- evaluation impact;
- held-out integrity impact;
- schedule and resource impact.

## 14.2 Scope reduction

Scope reduction также требует Class O.

Она должна:

- честно определить, что исключено;
- обновить success claims;
- обновить evaluation claims;
- переоценить applicability;
- не скрывать blocking failure.

## 14.3 Revalidation

После scope change Project Owner должен определить, какие ранее принятые artifacts:

- остаются действительными;
- требуют revalidation;
- требуют revision;
- становятся invalidated.

## 14.4 Closure claim

Module Closure относится только к окончательно принятому Bounded Scope.

---

# 15. Cross-Cutting Dependencies

Cross-cutting work разрешена только при одновременном выполнении всех условий:

1. Имеет прямую traceability к requirement Primary Active Module.
2. Имеет отдельный Owner-authorized Bounded Scope.
3. Не создаёт самостоятельную capability другого Major Module.
4. Не создаёт неограниченный foundation для будущих модулей.
5. Не расширяет implementation scope.
6. Имеет closure condition.
7. Прекращается после выполнения closure condition либо требует новой authorization.
8. Не нарушает Hard Security Stop.
9. Не используется как обход Module-Completion-First.

К допустимым категориям могут относиться:

- evaluation;
- test-data governance;
- diagnosability;
- security;
- provider due diligence без governed-data exposure;
- repository governance;
- documentation synchronization;
- строго ограниченная shared technical support для текущего Primary Active Module.

Формулировки `foundation`, `platform work` или `future-proofing` сами по себе не являются authorization.

---

# 16. Parallel Major-Module Work Prohibition

Ранее принятые стратегические утверждения о потенциально параллельном развитии отдельных Tracks не являются текущей authorization на открытие таких направлений после принятия настоящей Policy.

Существенная architecture-, implementation- или evaluation-work другого Major Module разрешается только:

1. после Post-Closure Governance Complete текущего Primary Active Module; или
2. через Owner-Authorized Exception Workstream; или
3. через отдельное Temporary Multi-Module Exception Decision.

Использование synthetic, curated или mocked inputs не превращает самостоятельную capability другого Major Module в Cross-Cutting Dependency.

---

# 17. Owner-Authorized Exception Workstream

## 17.1 General rule

Exception Workstream разрешается только отдельным Project Owner Decision.

Отсутствие возражения не является authorization.

## 17.2 Required decision contents

Decision должен определить:

1. разрешённую работу;
2. business или governance rationale;
3. Bounded Scope;
4. разрешённые activities;
5. запрещённые activities;
6. duration или closure condition;
7. resources;
8. влияние на Primary Active Module;
9. priority;
10. risks of dispersion;
11. termination criteria;
12. extension criteria;
13. reporting;
14. closure record.

## 17.3 Priority

По умолчанию Primary Active Module имеет приоритет.

Иной приоритет должен быть установлен явно.

## 17.4 No automatic lifecycle

Exception Workstream не получает автоматического права на:

- полный architecture cycle;
- Implementation Package;
- implementation;
- provider invocation;
- evaluation;
- production deployment.

---

# 18. Temporary Multi-Module Exception

Открытие второго полноценного active Major Module допускается только через отдельное:

```text
Temporary Multi-Module Exception Decision
```

Такое решение должно явно приостановить обычное правило одного Primary Active Module в определённых границах и установить:

- перечень concurrent modules;
- primary и secondary priority;
- lifecycle rules каждого;
- resource allocation;
- separate applicability profiles;
- separate closure requirements;
- conflict resolution;
- expiry date или closure condition;
- termination criteria;
- return to single-module mode.

Обычный Owner-Authorized Exception Workstream не является Temporary Multi-Module Exception.

---

# 19. Residual Risk Acceptance

## 19.1 Blocking risk

Blocking risk не может быть принят как Residual Risk.

Он должен привести к:

- remediation;
- scope change;
- suspension;
- termination;
- rejection of closure.

## 19.2 Residual Risk Record

Каждый Residual Risk должен содержать:

- identifier;
- description;
- affected scope;
- impact;
- likelihood;
- severity;
- non-blocking rationale;
- mitigation;
- owner;
- monitoring;
- review or expiry condition;
- dependency impact.

## 19.3 Acceptance

Residual Risk считается принятым только после явного Project Owner Acceptance.

Непринятый Residual Risk блокирует Module Closure.

## 19.4 No hidden deferral

Residual Risk нельзя использовать для обхода:

- blocking thresholds;
- security requirements;
- privacy requirements;
- data-governance requirements;
- held-out integrity;
- diagnosability requirements.

---

# 20. Closure Process

## 20.1 Stage A — Closure Readiness

До Closure Decision должны быть выполнены:

- Universal Module Closure Requirements;
- Module Applicability Profile;
- applicable evaluation;
- blocking findings closure;
- residual-risk classification;
- Closure Readiness Review.

Возможные результаты:

```text
CLOSURE READY
CLOSURE REMEDIATION REQUIRED
CLOSURE REVIEW INVALIDATED
```

## 20.2 Stage B — Module Closure Decision

Project Owner решает:

- принять Module Closure;
- отклонить Module Closure;
- вернуть на remediation;
- изменить Bounded Scope;
- suspend;
- terminate.

Только Project Owner Acceptance создаёт состояние:

```text
MODULE CLOSED
```

## 20.3 Stage C — Post-Closure Governance

После Module Closure обязательны:

- Project Context synchronization;
- применимое Roadmap update;
- closure record;
- repository persistence после отдельной authorization;
- residual-obligation assignment;
- traceability;
- next-step status.

---

# 21. Post-Closure Governance Completion Check

Перед выбором следующего Primary Active Module должно быть подтверждено:

- Module Closure принято;
- Project Context синхронизирован;
- required Roadmap update завершено;
- closure record подготовлен;
- persistence выполнена, если отдельно авторизована;
- Residual Risk obligations назначены;
- unresolved blocking governance findings отсутствуют;
- status установлен как Post-Closure Governance Complete.

---

# 22. Opening the Next Primary Active Module

Следующий Primary Active Module может быть выбран только после:

1. Module Closure текущего Primary Active Module.
2. Post-Closure Governance Complete.
3. Отдельного Project Owner selection.
4. Определения purpose.
5. Определения preliminary Bounded Scope.
6. Authorization preparation of Module Applicability Profile.
7. Отдельной authorization architecture cycle.

Закрытие текущего модуля не авторизует следующий автоматически.

Roadmap priority не заменяет Owner selection.

---

# 23. Substantive Review Rule

Каждая substantive version governance-документа должна проходить:

```text
ONE FULL DEEP CONSOLIDATED REVIEW
```

Review должен:

- охватывать полный текст версии;
- выявлять все доступные findings за один проход;
- выдавать один закрытый findings set;
- не дополняться замечаниями к неизменённой версии без новых фактов.

Не считаются отдельным substantive review:

- точная metadata-only acceptance update;
- repository persistence verification;
- commit/push verification;
- synchronization report без изменения нормативного содержания.

Если такие действия изменяют нормативный смысл, они становятся substantive revision и требуют нового полного review.

---

# 24. Non-Authorization

Настоящая Revision 4 и её подготовка не авторизуют:

- Project Owner Acceptance;
- repository persistence;
- file creation или modification;
- staging;
- commit;
- push;
- Roadmap amendment drafting;
- Project Context v2.4 drafting;
- Supporting Contracts 1–10 drafting;
- Contract 10 identity alignment;
- дополнительные contracts;
- corpus creation;
- fixtures;
- annotation;
- synthetic-source generation;
- provider contact;
- provider invocation;
- provider credentials;
- governed-data exposure;
- provider/model evaluation;
- provider/model selection;
- ADR creation;
- Implementation Package;
- implementation;
- deployment;
- Exception Workstream;
- Temporary Multi-Module Exception;
- следующий Major Module.

---

# Part II — Annex A  
# Initial Application at Policy Adoption

```text
Annex status:
PROPOSED INITIAL APPLICATION RECORD

Nature:
Time-bounded project-state designation

Effect:
Records the initial application of the permanent Policy
on its adoption date.

Future lifecycle changes:
Must be recorded through Project Owner Decisions and Project Context.
They do not require revision of the permanent Policy unless the
Policy rules themselves change.
```

---

# A.1 Initial Primary Active Module Designation

Текущим Primary Active Module определяется:

```text
Bounded Room Understanding / Spatial Perception
```

---

# A.2 Initial Bounded Scope

Целевой результат:

> VistaRoom AI получает одну фотографию одной комнаты за одну операцию, формирует проверяемое структурированное понимание сцены, различает помещение, конструкции, предметы, свободные зоны и пространственные отношения, сохраняет evidence и confidence, корректно обрабатывает неизвестность и проходит утверждённые критерии качества.

Initial Bounded Scope:

- одна фотография;
- одна комната;
- одна операция;
- Tier 1:
  - living room;
  - bedroom;
  - kitchen;
  - bathroom;
- residential-first;
- licensed images;
- synthetic images;
- deliberately staged images;
- real-user photos исключены;
- production-user data исключены.

Annex не расширяет и не сужает ранее принятый Candidate A Bounded Scope.

---

# A.3 Initial Lifecycle State

Текущий Primary Active Module находится в состоянии:

```text
ARCHITECTURE CYCLE IN PROGRESS
```

Current substatus:

```text
Core Candidate A governance architecture:
ACCEPTED TO THE CURRENT AUTHORIZED EXTENT

Supporting Contracts 1–10 Preparation and Dependency Plan:
ACCEPTED

Supporting Contracts 1–10 Drafting:
NOT AUTHORIZED

Contract 1:
NOT STARTED

Contract 10 Identity Alignment:
NOT AUTHORIZED

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

Текущий модуль не может перейти выше состояния `Architecture Cycle In Progress`, пока отдельный Module Applicability Profile остаётся предварительным и не принят Project Owner, поскольку Architectural Readiness по разделам 8.5 и 12 требует принятия всех применимых architecture-readiness requirements.

---

# A.4 Current Module Applicability Profile Status

Настоящий Annex не принимает окончательный Module Applicability Profile.

Следующий принцип применяется:

```text
CURRENT MODULE APPLICABILITY PROFILE:
PRELIMINARY — REQUIRES SEPARATE PREPARATION,
FULL BASELINE VERIFICATION,
CONSOLIDATED REVIEW
AND PROJECT OWNER ACCEPTANCE
BEFORE ARCHITECTURAL READINESS.
```

Предварительно применимыми направлениями считаются:

- architecture and supporting contracts;
- evaluation;
- diagnosability;
- security;
- data governance;
- provider governance;
- implementation;
- formal closure.

Точный authoritative перечень должен быть установлен отдельным Module Applicability Profile.

---

# A.5 Current Mandatory Sequence

Для текущего Primary Active Module применяется более строгая module-specific sequence:

```text
Supporting Contracts 1–10 accepted
→ Combined Diagnosability & Security Compatibility Assessment
→ Project Owner checkpoint on Assessment Criteria
→ one retrospective compatibility pass
→ AI Brain Diagnosability Architecture
→ Security Architecture Baseline
→ mandatory Diagnosability ↔ Security cross-check
→ Phase-1 Scope Decision / Execution Profile
→ applicable data-governance artifacts
→ Tier 1 Corpus Preparation Authorization
```

До принятия Supporting Contracts 1–10 не авторизованы:

- Combined Diagnosability & Security Compatibility Assessment;
- AI Brain Diagnosability Architecture drafting;
- Security Architecture Baseline drafting;

если более позднее явное Project Owner Decision не изменит последовательность.

Не запрещается безопасное обсуждение или подготовка будущего Owner Decision, если она отдельно авторизована и не создаёт нормативный artifact преждевременно.

---

# A.6 Hard Security Stop

Для текущего Primary Active Module действует:

> До принятия и проверки применимых security requirements запрещены реальные внешние provider invocations с governed data, использование рабочих provider credentials и передача governed data внешним AI-провайдерам.

Разрешена безопасная due diligence:

- изучение публичной документации;
- анализ terms;
- сравнение возможностей;
- работа без governed-data exposure;
- работа без production credentials.

Due diligence не авторизует provider evaluation, selection, implementation или data exposure.

---

# A.7 Initial Governance Synchronization Sequence

После принятия Policy должен соблюдаться порядок:

```text
Module Completion and Sequencing Policy accepted
→ new append-only amendment to Living Strategic Roadmap v1.4
   dedicated to Module-Completion-First
→ Project Context v2.4
→ separate Project Owner authorization
   for Supporting Contracts 1–10 Drafting Cycle
```

Каждый этап:

- готовится отдельно;
- проходит отдельный substantive review;
- требует отдельного Project Owner Acceptance;
- требует отдельной repository-persistence authorization.

Project Context v2.3 был принят до выбора Candidate A и до последующего принятия Perception Mechanism Rev3, Candidate A Bounded Scope Rev3, Evaluation Threshold Plan Rev13, Test Data Handling Decision Rev9 и Supporting Contracts Plan Rev4. Это не является противоречием, поскольку v2.3 остаётся authoritative snapshot на дату своего принятия; именно накопившийся после него governance gap должен быть закрыт Project Context v2.4.

---

# A.8 Known Non-Blocking Documentation Drift

Следующий documentation drift должен быть отражён в реестре известных расхождений при подготовке Project Context v2.4:

```text
Candidate A Evaluation Threshold and Acceptance Plan — Revision 13

Accepted metadata:
Accepted — Project Owner, 2026-07-15

Remaining stale internal heading:
"Proposed Project Owner Decisions"

Remaining stale decision wording:
"Accept Revision 13, request Revision 14, or reject"
```

Этот drift:

- не отменяет Acceptance Revision 13;
- не изменяет её нормативное содержание;
- не авторизует редактирование Revision 13;
- не требует переоткрытия принятого документа;
- должен быть зарегистрирован как known documentation drift.

---

# A.9 Annex Non-Authorization

Annex A не авторизует:

- изменение current lifecycle state;
- Roadmap amendment;
- Project Context v2.4;
- Contracts 1–10 drafting;
- Contract 10 identity alignment;
- Module Applicability Profile drafting;
- diagnosability/security normative work;
- data creation;
- provider activity;
- implementation;
- repository changes.

---

# Part III — Required Project Owner Decisions

Для принятия Revision 4 необходим следующий закрытый набор решений.

## Decision Group 1 — Policy and authority

1. Принять или отклонить Revision 4 в целом.
2. Принять Module-Completion-First.
3. Принять Document Authority and Conflict Resolution.
4. Принять Governance Stop rule.
5. Подтвердить разграничение Module lifecycle governance и внутренней Decision Governance процедуры Living Strategic Roadmap.

## Decision Group 2 — Module model

6. Принять определение Major Module.
7. Принять правило одного Primary Active Module.
8. Принять различие Primary Active Module, Exception Workstream и Temporary Multi-Module Exception.
9. Принять разграничение одинаковых терминов между module-, artifact-, data- и incident-governance уровнями.

## Decision Group 3 — Lifecycle

10. Принять Primary Progression States.
11. Принять Transition Authority Classes.
12. Принять Remediation States.
13. Принять Control States, включая suspension, withdrawal, invalidation и termination.

## Decision Group 4 — Closure and applicability

14. Принять Universal Module Closure Requirements.
15. Принять обязательность отдельного Module Applicability Profile.
16. Принять risk-based applicability.
17. Принять Closure Readiness → Module Closure → Post-Closure Governance sequence.

## Decision Group 5 — Scope and risk

18. Принять Bounded Scope Change Control.
19. Принять Residual Risk Acceptance Rule.
20. Принять запрет скрывать blocking failures через scope reduction или residual-risk classification.

## Decision Group 6 — Sequencing protections

21. Принять Cross-Cutting Dependency rules.
22. Принять Parallel Major-Module Work Prohibition.
23. Принять precedence module-specific sequence над generic lifecycle permissions.

## Decision Group 7 — Exceptions

24. Принять Owner-Authorized Exception Workstream.
25. Принять Temporary Multi-Module Exception model.
26. Подтвердить приоритет Primary Active Module по умолчанию.

## Decision Group 8 — Initial application

27. Подтвердить Bounded Room Understanding / Spatial Perception как текущий Primary Active Module.
28. Подтвердить состояние `Architecture Cycle In Progress`.
29. Подтвердить substatus Supporting Contracts drafting `NOT AUTHORIZED`.
30. Подтвердить причинную связь: без принятого Module Applicability Profile Architectural Readiness не достигается.
31. Подтвердить, что Module Applicability Profile требует отдельной подготовки и принятия.
32. Подтвердить current mandatory sequence.
33. Подтвердить Hard Security Stop.
34. Подтвердить known documentation drift Evaluation Threshold Plan Rev13 для будущего Project Context v2.4 drift registry.

## Decision Group 9 — Synchronization

35. Подтвердить последовательность:
   Policy → Roadmap amendment → Project Context v2.4 → separate Contracts drafting authorization.
36. Подтвердить, что Annex A является initial application record, а будущие state changes фиксируются в Project Context и Owner Decisions без обязательной revision постоянной Policy.
37. Подтвердить, что Project Context v2.4 должен закрыть governance gap, возникший после даты принятия Project Context v2.3.

## Decision Group 10 — Governance boundaries

38. Принять Non-Authorization boundaries.
39. Принять Substantive Review Rule.

---

# Part IV — Targeted Revision Report

## R.1 Closed clarification 1

Добавлено явное объяснение, почему текущий Primary Active Module не может перейти выше `Architecture Cycle In Progress`, пока Module Applicability Profile не принят.

## R.2 Closed clarification 2

Добавлено объяснение, что Project Context v2.3 предшествует Candidate A selection и последующим accepted governance documents, а Project Context v2.4 должен закрыть этот gap.

## R.3 Closed clarification 3

Добавлен known documentation drift для Evaluation Threshold Plan Rev13 без переоткрытия или изменения принятого документа.

## R.4 Closed clarification 4

Добавлено разграничение module-level, artifact-level, data-level и incident-level терминов `Suspended`, `suspend`, `draft`, `candidate-lock`, `locked`, `Closure Ready`.

## R.5 Closed clarification 5

Добавлено разграничение между Module Completion and Sequencing lifecycle и внутренней `Decision Governance` процедурой Living Strategic Roadmap.

## R.6 Normative impact

```text
Module-Completion-First:
UNCHANGED

Lifecycle states:
UNCHANGED

Transition authority:
UNCHANGED

Definition of Done:
UNCHANGED

Module Applicability Profile:
UNCHANGED

Current Primary Active Module:
UNCHANGED

Current lifecycle status:
UNCHANGED

Current mandatory sequence:
UNCHANGED

Hard Security Stop:
UNCHANGED

Non-Authorization:
UNCHANGED
```

## R.7 Review status

Revision 4 содержит только пять non-blocking clarification corrections, уже определённых единым закрытым consolidated review Revision 3.

Поскольку они не изменяют нормативное содержание, отдельный новый полный architecture review не требуется, если Project Owner принимает их как точное targeted closure закрытого findings set в соответствии с Substantive Review Rule.

Если будет установлено, что хотя бы одно изменение изменяет нормативный смысл, Revision 4 должна пройти новый полный consolidated review до Acceptance.

## R.8 Repository status

```text
Files created or modified:
NONE

Staging:
NONE

Commit:
NONE

Push:
NONE

Repository persistence:
NOT AUTHORIZED
```

---

# Final Status

```text
DOCUMENT:
VistaRoom AI
Module Completion and Sequencing Policy — Revision 4

STATUS:
ACCEPTED — PROJECT OWNER

REVISION 3 BASELINE COMPATIBILITY:
CONFIRMED

REVISION 3 BLOCKING FINDINGS:
NONE

REVISION 3 NON-BLOCKING CLARIFICATIONS:
CLOSED IN REVISION 4

NORMATIVE CONTENT:
UNCHANGED

READY FOR:
PROJECT OWNER ACCEPTANCE DECISION

REPOSITORY PERSISTENCE:
NOT AUTHORIZED

ROADMAP AMENDMENT:
NOT AUTHORIZED

PROJECT CONTEXT V2.4:
NOT AUTHORIZED

SUPPORTING CONTRACTS 1–10 DRAFTING:
NOT AUTHORIZED
```
