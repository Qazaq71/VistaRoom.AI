# VistaRoom AI — Full-Platform Vision Architecture — Revision 3
## Residential-First AI Interior Designer Platform

```text
Document type:
VISION ARCHITECTURE

Status:
DRAFT SUCCESSOR FOR PROJECT OWNER REVIEW

Supersedes for review purposes only:
VistaRoom-AI-Full-Platform-Vision-Architecture-Rev2.md
1260 lines
SHA-256: 393630932446529c5a3ec2f112e250a8955e136e188437701e2fe1d1db39a9d6

Revision 3 correction scope:
- closes MAJOR-1 from the final consolidated review of Revision 2 by
  preserving the Owner-confirmed architectural form of four residential
  categories while leaving identifier and downstream mapping details for a
  separately authorized Root Impact Assessment;
- closes MINOR-1 by synchronizing the Product Feature Vision source reference.

No other architectural section is reopened or substantively changed.

This document is:
- a target platform-architecture map;
- a reconciliation of Product Feature Vision with authoritative
  Strategic Tracks A–H;
- a non-binding map of future Major Modules and capability boundaries.

This document is NOT:
- a Root Impact Assessment;
- a Contract 1 / Contract 2 / Bounded Scope successor;
- Contract 3 drafting;
- an Implementation Package;
- implementation or deployment authorization;
- repository-persistence authorization;
- an authorization to open any future Major Module.

Root Impact Assessment:
NOT AUTHORIZED

Contract 3 drafting:
NOT AUTHORIZED

Repository persistence:
NOT AUTHORIZED
```

---

## 1. Purpose

The purpose of this document is to describe how the complete VistaRoom AI
Product Feature Vision can fit into one coherent platform architecture without:

- replacing the authoritative Living Strategic Roadmap;
- inventing a second Track naming system;
- violating Module-Completion-First;
- opening parallel Major Modules;
- silently changing locked or accepted architecture artifacts;
- confusing cross-cutting foundations with product modules;
- confusing current implementation scope with long-term Master Vision.

The document provides a stable target map for future owner-authorized
architecture cycles. It does not itself authorize any of those cycles.

---

## 2. Source and authority model

### 2.1 Governing hierarchy

This Vision Architecture is subordinate to:

1. explicit Project Owner Decisions;
2. accepted Module Completion and Sequencing Policy;
3. accepted Living Strategic Roadmap and its Owner-approved amendments;
4. current authoritative Project Context;
5. accepted ADRs, specialized governance decisions and locked contracts;
6. this Vision Architecture;
7. Product Feature Vision and other non-governance working references.

Where this document conflicts with a higher-authority source, the
higher-authority source controls.

### 2.2 Primary source set used for this revision

```text
Reviewed predecessor:
VistaRoom-AI-Full-Platform-Vision-Architecture-Rev2.md
1260 lines
SHA-256:
393630932446529c5a3ec2f112e250a8955e136e188437701e2fe1d1db39a9d6
Review result:
BLOCKER: 0
MAJOR: 1
MINOR: 1
IMPROVEMENT: 0
Verdict: FAIL — SUCCESSOR/CORRECTION REQUIRED

Historical predecessor:
VistaRoom-AI-Vision-Architecture.md
288 lines
SHA-256:
21f2fae251650e2567ad5d9ae0ce1a6e2a06085a939c55d629fa51f9c3a8cf94

Product feature reference:
VistaRoom-AI-Consolidated-Feature-Vision-v2.md
595 lines
SHA-256:
bc75d9db57ec4b98d50c3980e734748093dc895a35f6ace99f531db1ed58f8bb
Status: current working Product Feature Vision reference, not an accepted Contract.

Governance references:
- Module Completion and Sequencing Policy — Revision 4;
- Living Strategic Roadmap v1.4;
- Owner-Approved Roadmap Amendment — Module-Completion-First Rev5;
- current Project Context v2.4 baseline;
- later explicit Project Owner Decisions listed in §2.3.
```

### 2.3 Later explicit Owner Decisions reconciled here

This revision reflects the following Project Owner directions:

```text
1. Current active product domain is RESIDENTIAL ONLY.

2. Residential property contexts include:
   apartment;
   private house;
   cottage;
   country house;
   townhouse.

3. Every selected residential room must be active, fully implemented,
   fully evaluated, fully verified and deployed as one complete working
   residential scope.

4. No phased room activation, partial room rollout, five-room-only launch,
   dormant selected room or deferred selected residential room is allowed.

5. Commercial and other non-residential domains remain in the full-platform
   Master Vision and Master Vocabulary, but are not active in the current
   implementation/evaluation/deployment scope.

6. Pantone is excluded from planned Color & Material scope.

7. Color & Material compatibility foundations must be considered now;
   the full Color & Material Intelligence module is future work.

8. Diagnosability and Security foundations must be embedded in the current
   Spatial Perception architecture work; full separate architectures follow
   through the authoritative post-contract governance sequence.

9. English is the canonical internal language.
   Russian is a full derived locale.
   One global language switch is required.
   English fallback is mandatory.
   The platform is bilingual EN + RU from day one.

10. Root Impact Assessment starts only after a separate direct Project Owner
    authorization.

11. The architectural form of four residential categories is already
    OWNER-CONFIRMED:
    - kitchen_living_room is an active named Composite Space Profile formed
      from living_room + kitchen;
    - primary_bedroom, guest_bedroom and children_room are active
      specializations of the base Canonical Space Type bedroom.
    This confirmed form does not determine the final Layer 1 identifiers,
    registry placement, design rules, applicability or evaluation requirements.
```

---

## 3. Terminology and status legend

### 3.1 Strategic Track versus Major Module

```text
Strategic Track:
a long-lived Roadmap container.

Major Module:
a bounded capability unit with its own lifecycle, Bounded Scope,
Module Applicability Profile, architecture, implementation, evaluation,
Closure Readiness and Module Closure.

Primary Active Module:
the single Major Module currently receiving the project's main governance,
architecture, implementation and evaluation focus.
```

A Strategic Track is not itself a Primary Active Module.

### 3.2 Status legend

```text
OWNER-CONFIRMED:
explicitly directed by the Project Owner.

AUTHORITATIVE BASELINE:
accepted and currently controlling governance or architecture source.

CURRENT ACTIVE MODULE:
the one Primary Active Module in progress.

PLANNED:
preserved in Roadmap/Master Vision but not opened.

PROPOSED:
a working Vision Architecture concept requiring separate Owner Decision.

CROSS-CUTTING FOUNDATION:
a limited compatibility requirement necessary across modules; not an
independent hidden Major Module.

GOVERNANCE GATE:
a controlled authorization boundary, not a product track.

INTEGRATION-DEPENDENT:
requires authorized external data, APIs, licensing or contractual access.

NOT ASSESSED:
exact architectural impact is unknown until an authorized assessment.

NOT AUTHORIZED:
no drafting, execution, persistence or implementation permission exists.
```

---

## 4. Product-domain scope

### 4.1 Full-platform Master Vision

The long-term Master Vision may preserve residential, commercial, public and
specialized domains so the architecture is not permanently impoverished.

Preservation in Master Vision does not equal current activation.

### 4.2 Current active product domain — OWNER-CONFIRMED

```text
CURRENT ACTIVE PRODUCT DOMAIN:
RESIDENTIAL ONLY
```

Active residential property contexts:

```text
apartment
private_house
cottage_house
country_house
townhouse
```

### 4.3 Complete residential working scope

The Product Owner selected 34 residential room/space categories for the
product vision. The current target is full working support for the complete
selected residential set, not a first-wave subset.

```text
living_room
bedroom
children_room
guest_bedroom
primary_bedroom
kitchen
dining_room
kitchen_living_room
home_office
library
bathroom
toilet_room
shower_room
combined_bathroom
entryway
vestibule
hall
corridor
dressing_room
walk_in_closet
pantry
laundry_room
utility_room
mechanical_room
staircase_space
stair_hall
attic
mansard_room
basement
garage
balcony
terrace
veranda
winter_garden
```

This list is a Product Vision room list.

The following architectural form is already OWNER-CONFIRMED and is not reopened
by this Vision document:

```text
kitchen_living_room:
  active named Composite Space Profile
  composition: living_room + kitchen
  composite status does not mean deferred, optional or partially supported

primary_bedroom:
guest_bedroom:
children_room:
  active specializations of the base Canonical Space Type bedroom
  specialization status does not mean deferred, optional or partially supported
```

Each of these four categories remains part of the mandatory complete residential
working scope and must receive its own stable product identity, user-facing name,
design behavior and evaluation coverage.

A separately authorized Root Impact Assessment and subsequent Contract work are
still required to determine:

- the exact Layer 1 identifiers and registry entries for these four categories;
- whether any required identity already exists under the same or another ID;
- detailed design rules, applicability and evaluation requirements;
- downstream Contract, Bounded Scope, Threshold Plan and MAP impact;
- the exact Canonical Space Type, specialization, composite profile, alias or
  new-identifier mapping for the remaining 30 residential categories.

No additional architectural mapping beyond the four Owner-confirmed forms above
is silently accepted by this Vision document.

### 4.4 Commercial and non-residential domains

```text
MASTER VISION STATUS:
PRESERVED

CURRENT ACTIVATION STATUS:
NOT ACTIVE

CURRENT CORPUS / EVALUATION / IMPLEMENTATION / DEPLOYMENT:
OUT OF SCOPE

FUTURE ACTIVATION:
REQUIRES A SEPARATE EXPLICIT OWNER-AUTHORIZED CYCLE
```

---

## 5. Platform backbone

### 5.1 Primary capability flow

```text
Client Brief & Residential Context
→ Room / Surface / Object Perception
→ Observed Material / Color Evidence
→ Design Intent & Constraints
→ Color & Material Intelligence
→ Design Composition
   (Style + Space Planning + Furniture + Lighting)
→ Controlled Generation & Editing
→ Design Validation
→ Client Revision Loop
→ Specification, Reporting and Delivery
→ Procurement / External Integrations where authorized
```

### 5.2 Required feedback loops

The platform is not a one-way pipeline. It must support explicit correction
loops:

```text
Design Validation
→ Space Planning / Color / Furniture / Lighting correction

Generation Validation
→ Controlled Generation / Editing correction

Client Feedback
→ Brief / preference / design-intent revision

Specification Validation
→ material, color, quantity and product-assignment correction

Diagnosability findings
→ failing stage, contract or provider correction

Security findings
→ input, data flow, storage, provider or access-control correction
```

### 5.3 Separation of observed state and design intent

```text
Observed room truth
≠ inferred design recommendation
≠ assigned design intent
≠ rendered pixel appearance
≠ client-approved specification
```

This separation is mandatory for traceability, accurate color/material
reporting, controlled editing and reproducibility.

---

## 6. Authoritative Strategic Tracks A–H

This document preserves the Roadmap's authoritative Track identifiers.
It does not create a second Track A–I model.

```text
Track A — Spatial Perception
Track B — Project & Asset Foundation
Track C — Designer Intelligence
Track D — Editing and Continuity
Track E — MultiView and Project Memory
Track F — Professional Workflow
Track G — Implementation and Commerce
Track H — Platform Operations
```

Tracks B–H remain PLANNED unless separately opened through the accepted
Module-Completion-First governance process.

---

## 7. Track A — Spatial Perception

### 7.1 Current Primary Active Module

```text
Strategic Track:
Track A — Spatial Perception

Primary Active Module:
Bounded Room Understanding / Spatial Perception

Lifecycle:
ARCHITECTURE CYCLE IN PROGRESS
```

Track A is the strategic container. The current Primary Active Module is the
bounded module inside it.

### 7.2 Current bounded operation

```text
one governed input image/photo
one residential room per operation
one operation-level result
complete selected residential room scope across supported operations
```

The single-room operation boundary does not permit a five-room-only product
scope. Each selected residential room category must be supported by the same
governed operation model before the module may be declared complete.

### 7.3 Current module responsibility

The current module owns the perception-side representation required to:

- classify the active residential room/space context;
- identify structural elements;
- identify visible objects;
- represent surfaces and free space where required by the accepted boundary;
- represent observable relations;
- retain evidence, confidence and uncertainty;
- reject unsupported or insufficient-evidence conclusions safely;
- provide stable references for future design modules.

### 7.4 Boundary with future Designer Intelligence

Track A may expose observed or provisional evidence, but it does not own final
design decisions.

```text
Track A may own:
- observed structure;
- observed object/surface evidence;
- provisional observed material/color evidence;
- confidence, provenance and uncertainty;
- spatial relations and free-space evidence.

Track A does not own:
- final material assignment;
- palette harmony;
- final style selection;
- furniture recommendation;
- lighting design;
- final client specification;
- product procurement.
```

### 7.5 Current cross-cutting requirements

Only foundations directly necessary to complete the current Primary Active
Module may be embedded now:

- stable identifiers;
- evidence/provenance references;
- confidence and validation outcomes;
- reason/error extension points;
- safe unknown and insufficient-evidence behavior;
- data classification and trust hooks;
- input-validation and security hooks;
- localization-neutral identifiers and EN/RU output hooks;
- surface/object bindings needed for future observed color/material evidence.

These foundations do not authorize the full future modules that consume them.

---

## 8. Track B — Project & Asset Foundation

```text
Status:
PLANNED — NOT OPENED
```

### 8.1 Vision responsibility

Track B is the owner of stable project and asset state required across the
platform:

- Project identity;
- residential property identity;
- Room identity;
- RoomView identity;
- ImageAsset and other governed asset references;
- upload/session grouping;
- project versions and approved states;
- design alternatives and revision lineage;
- links between source images, generated results and specifications;
- project-level retention and deletion references;
- future whole-home and cross-room project state.

### 8.2 Why this foundation is separate

Project history, B2B workflow, client reports, reproducibility, multi-room
consistency and commerce must not independently invent their own project or
asset identifiers.

### 8.3 Non-authorization

No Project & Asset architecture, schema, persistence strategy or implementation
is authorized by this Vision document.

---

## 9. Track C — Designer Intelligence

```text
Status:
PLANNED — NOT OPENED
```

Track C is the strategic container for future Major Modules that transform
perception and client requirements into design decisions.

### 9.1 Proposed future Major Module domains

Each item below is a proposed bounded Major Module candidate, not an opened
module and not a final governance identifier.

#### C1. Client Brief & Preference Intelligence

Owns:

- conversational requirement gathering;
- structured design brief;
- user constraints and preserved items;
- residential-use scenarios;
- preference profile;
- regional and climate context where accepted;
- explanation-ready client intent.

#### C2. Material Understanding

Owns design-ready material semantics beyond raw observation:

- normalized material identity;
- finish semantics;
- material properties relevant to interior use;
- durability and maintenance attributes;
- material compatibility;
- design-ready material representation.

It consumes Track A observed evidence and does not duplicate perception.

#### C3. Color & Material Intelligence — OWNER-CONFIRMED FUTURE CAPABILITY

Owns:

- harmonious palette generation;
- hue/lightness/chroma/proportion reasoning;
- material-aware and lighting-aware color decisions;
- user override with warnings rather than hard prohibition;
- canonical color representation;
- assigned-color and observed-color separation;
- exact/nearest-match semantics;
- color and material specification output.

Provider-neutral core:

```text
CIEXYZ / CIELAB
CIEDE2000 / ΔE00
sRGB / HEX
ICC-aware display representation
external catalogue adapter boundary
```

Pantone is excluded.

RAL, NCS and manufacturer catalogues are INTEGRATION-DEPENDENT and require
separate licensing/data-access review.

#### C4. Style Intelligence

Owns:

- style taxonomy and explanation;
- style inference from references and preferences;
- mixed-style coherence;
- whole-project style consistency;
- style-specific rules and constraints.

Style is a product capability, not a cross-cutting infrastructure foundation.

#### C5. Space Planning Intelligence

Owns:

- functional zoning;
- traffic flow;
- access and clearance;
- ergonomic layouts;
- room-purpose rules;
- kitchen work zones and other room-specific planning rules;
- layout alternatives and explanation.

#### C6. Furniture Selection & Placement

Owns:

- furniture requirements;
- size and fit constraints;
- style/color/material compatibility;
- placement alternatives;
- preservation, removal and replacement intent;
- product-equivalent matching boundary.

#### C7. Lighting Design

Owns:

- general, task, accent and decorative lighting intent;
- color temperature recommendations;
- daylight/artificial-light balance;
- day/evening scenarios;
- lighting specification intent.

#### C8. Quality & Design Validation

Owns semantic design-quality checks across planning, color, materials,
furniture, lighting and client constraints.

It must integrate with Tracks D and G but must not be postponed until client
delivery.

### 9.2 Track C opening rule

No Track C Major Module may be opened before the current Primary Active Module
closes, except through a separately accepted Cross-Cutting Dependency,
Owner-Authorized Exception Workstream or Temporary Multi-Module Exception.

A product-vision description is not an execution authorization.

---

## 10. Track D — Editing and Continuity

```text
Status:
PLANNED — NOT OPENED
```

### 10.1 Vision responsibility

Track D owns controlled transformation of an approved design intent into
visual results and revisions:

- controlled generation;
- geometry and structure preservation;
- object- and region-level masking;
- natural-language editing;
- remove/replace/move/add operations;
- room cleanup with ambiguity handling;
- edit history and continuity;
- result-to-specification synchronization;
- before/after comparison;
- future AR visualization where separately authorized.

### 10.2 Existing foundation versus deferred capability

```text
Verified current foundation direction:
- image generation/editing capability;
- Formatter integration;
- Prompt Pipeline foundation.

Deferred / incomplete:
- full Prompt Engine;
- full reasoning lifecycle;
- design-plan-controlled generation;
- semantic continuity validation;
- production-grade controlled editing.
```

The full Prompt Engine must not be described as already complete.

---

## 11. Track E — MultiView and Project Memory

```text
Status:
PLANNED — NOT OPENED
```

### 11.1 Vision responsibility

Track E owns future capabilities beyond the current bounded operation:

- multiple images of one room;
- multi-view evidence fusion;
- long-term room/project memory;
- cross-room consistency;
- whole-home graph;
- spatial continuity across sessions;
- possible 3D reconstruction successors;
- video-derived spatial evidence where separately assessed.

### 11.2 Foundation-impact qualification

Track E is currently the highest-known candidate for substantial successors to
StructuredScene and the perception boundary.

However:

```text
EXACT FOUNDATION IMPACT:
NOT ASSESSED

CLAIM THAT TRACK E IS THE ONLY AREA REQUIRING FOUNDATION CHANGE:
NOT PERMITTED
```

Project & Asset state, material models, localization outputs, real-user data,
specification, continuous learning and other future modules may also require
foundation successors. Only an authorized assessment may determine this.

---

## 12. Track F — Professional Workflow

```text
Status:
PLANNED — NOT OPENED
```

### 12.1 Vision responsibility

Track F owns professional and B2B workflow:

- multiple clients and projects;
- team roles and permissions;
- comments and approvals;
- branded presentations and reports;
- reusable libraries and templates;
- design alternative governance;
- batch workflows for real-estate professionals, if later Owner-confirmed;
- professional export and handoff workflows.

### 12.2 Proposed features

Batch processing for realtors and other advanced B2B features remain proposed
unless separately confirmed by Project Owner.

Any market-impact or ROI estimate must:

- use identified regional data;
- disclose period and assumptions;
- report confidence/uncertainty;
- never guarantee a sales-price or rental-price outcome.

---

## 13. Track G — Implementation and Commerce

```text
Status:
PLANNED — NOT OPENED
```

Track G must not be treated as one undifferentiated mega-module.
It is a strategic container for separate future Major Module candidates.

### 13.1 Proposed future Major Module domains

#### G1. Project Delivery & Reporting

- client-facing final design package;
- color/material/furniture/lighting specification;
- quantities and assumptions;
- PDF, spreadsheet and machine-readable exports;
- localized EN/RU reports;
- approved-state traceability.

#### G2. Material Quantity & Budget Intelligence

- area and quantity estimates;
- waste and confidence assumptions;
- category budgets;
- regional currency and cost context;
- alternatives and cost trade-offs.

#### G3. Product & Catalogue Integration

- product matching;
- dimensions, material, color and price;
- availability and freshness controls;
- authorized catalogue adapters;
- provider-neutral internal product references.

#### G4. Procurement & Commerce

- procurement list;
- multi-seller alternatives;
- delivery-aware planning;
- cart and purchase handoff where authorized;
- payments only after separate security, legal and provider decisions.

#### G5. Contractor Marketplace — PROPOSED

A contractor marketplace remains proposed and requires separate Product Owner,
business, legal, safety and platform decisions.

### 13.2 External-integration rule

All price, availability, delivery, catalogue, marketplace and payment features
are INTEGRATION-DEPENDENT.

Activation requires:

- authorized data source;
- API or contractual access;
- licensing review;
- regional availability;
- data-freshness controls;
- security/privacy review;
- operational fallback.

---

## 14. Track H — Platform Operations

```text
Status:
PLANNED AS STRATEGIC TRACK
No new Major Module is opened by this document.
```

### 14.1 Vision responsibility

Track H owns the operational platform foundation that product modules depend on:

- runtime orchestration;
- model/provider routing;
- queues and retry behavior;
- rate limits and quotas;
- observability and operational telemetry;
- availability and resilience;
- deployment and rollback;
- cost controls;
- backups and disaster recovery;
- incident operations;
- configuration and secrets boundaries;
- production supportability.

Diagnosability and Security integrate with Track H but do not replace it.

---

## 15. Owner-confirmed cross-cutting foundations

The platform currently has four Owner-confirmed cross-cutting foundation areas.
They are not independent hidden product modules.

### 15.1 Color & Material Integration Foundation

Purpose now:

- preserve stable surface/object references;
- allow observed color/material evidence;
- represent uncertainty caused by lighting and white balance;
- separate observation from design assignment;
- avoid blocking the future full Color & Material Intelligence module.

This foundation does not authorize palette intelligence, catalogue integration
or full material design.

### 15.2 Diagnosability & Explainability Foundation

Every relevant future contract must support, as applicable:

- stable identifiers;
- trace/correlation references;
- evidence/provenance;
- confidence and validation outcomes;
- reason/error codes;
- failure localization;
- reproducibility hooks;
- distinction among data, model, rule and integration failure;
- user-facing explanation boundaries where appropriate.

Full AI Brain Diagnosability Architecture remains a separate governance cycle
controlled by the authoritative sequence.

### 15.3 Security & Privacy Foundation

Every relevant future contract must support, as applicable:

- input validation;
- trusted/untrusted distinction;
- data classification;
- integrity references;
- retention/deletion awareness;
- privacy boundaries;
- safe failure;
- audit/security event hooks;
- external-provider boundaries.

Full Security Architecture remains a separate governance cycle and the Hard
Security Stop remains controlling.

### 15.4 Bilingual Localization Foundation — EN + RU

```text
Status:
OWNER-CONFIRMED
```

Mandatory model:

```text
English:
canonical internal language.

Russian:
full derived locale.

Language control:
one global platform language switch.

Fallback:
English is mandatory when a Russian localized unit is unavailable.

Coverage:
platform-wide from day one.
```

Applies to:

- interface;
- client dialogue;
- design explanations;
- room/style/material/color names;
- reports and specifications;
- export content;
- localized validation messages;
- future module output contracts.

Stable identifiers remain language-neutral.

Localization is not classified as optional, voluntary or merely a low-cost
registry extension.

---

## 16. Proposed cross-cutting foundation

### 16.1 Controlled Learning & Continuous Improvement — PROPOSED

Potential future responsibility:

- consent-based feedback collection;
- accepted/rejected design analytics;
- error-pattern discovery;
- controlled model/rule improvement;
- held-out evaluation before rollout;
- versioned deployment;
- reversible changes;
- prevention of uncontrolled self-modification.

This foundation is not Owner-confirmed by this document and is not authorized
for architecture or implementation.

---

## 17. Real User Data Enablement — governance gate, not a Track

Real user photographs and governed personal data are not a separate product
Track and do not own Privacy Architecture.

```text
Real User Data Enablement:
a controlled governance gate for transition from licensed/synthetic/staged
sources to real user data.
```

The gate requires, at minimum:

- applicable Security & Privacy architecture;
- retention and deletion decision;
- provider data-handling decision;
- access-control boundary;
- auditability;
- governed-data authorization;
- explicit Project Owner approval.

No client-facing production use of real user photographs may bypass the Hard
Security Stop.

---

## 18. Verified current state versus future target

| Area | Verified/current direction | Foundation required in current cycle | Full future capability |
|---|---|---|---|
| Spatial Perception | StructuredScene direction, structural validation, current architecture cycle | Stable IDs, evidence, uncertainty, security/localization hooks | Current Primary Active Module must reach closure |
| Project & Assets | Lightweight direction only; not opened | Stable cross-document references where directly needed | Track B future modules |
| Material/Color | No full design module | Observation and binding compatibility only | Track C Material + Color Intelligence |
| Style/Planning/Furniture/Lighting | Not implemented as full Designer Intelligence | No hidden module opening | Track C future modules |
| Controlled Editing | Image generation/editing and Prompt Pipeline foundation exist | Traceable design-to-edit boundary later | Track D future modules |
| MultiView/Memory/3D | Not implemented | No cheap unverified promise | Track E future modules |
| Professional Workflow | Not implemented | None beyond necessary neutral IDs | Track F future modules |
| Delivery/Commerce | Not implemented as full platform capability | Specification-ready references only where necessary | Track G future modules |
| Platform Operations | Partial operational needs exist | Hooks for current module operability | Track H strategic development |
| Diagnosability | Partial concepts/hooks | Mandatory foundation now | Full architecture via authoritative sequence |
| Security/Privacy | Partial data-handling constraints | Mandatory foundation now | Full architecture via authoritative sequence |
| Bilingual EN/RU | Partial registries/input aliases may exist | Mandatory platform-wide foundation now | Complete localized outputs across modules |
| Controlled Learning | Not confirmed | None unless Owner confirms | Proposed future foundation |

This table is intentionally cautious. It does not convert a future requirement
into a claim that the architecture is already accepted or implemented.

---

## 19. Ownership and contract-boundary principles

Every future Major Module architecture must define:

```text
1. Inputs.
2. Outputs.
3. Data owner.
4. Upstream and downstream dependencies.
5. Stable identifiers.
6. Versioning.
7. Evidence and diagnostic behavior.
8. Security/privacy applicability.
9. Localization applicability.
10. Validation and evaluation criteria.
11. Definition of Done.
12. Explicit non-ownership boundaries.
```

### 19.1 Single-owner rule

A semantic artifact must have one authoritative owner.

Examples:

```text
Observed spatial evidence:
Track A owner.

Project and asset identity:
Track B owner.

Design-ready material semantics:
Track C Material Understanding owner.

Assigned palette and color intent:
Track C Color & Material Intelligence owner.

Controlled image transformation:
Track D owner.

Project delivery specification:
Track G Project Delivery owner.

Runtime provider routing and operational telemetry:
Track H owner.
```

Cross-cutting foundations attach requirements to these owners; they do not
create duplicate ownership.

---

## 20. Module-Completion-First sequencing

### 20.1 Current rule

```text
One Primary Active Module at a time.
```

The current Primary Active Module must be brought through its complete
applicable lifecycle before another Major Module is opened, unless the Project
Owner separately authorizes an exception permitted by Policy.

### 20.2 What is allowed before current Module Closure

Allowed only when directly necessary for current-module completion:

- cross-cutting compatibility foundations;
- read-only vision documents;
- dependency analysis explicitly allowed by current governance;
- a separately authorized Owner Exception Workstream.

Not allowed automatically:

- architecture cycle of a Track B–H Major Module;
- drafting its contracts;
- implementation;
- evaluation;
- activation or deployment.

### 20.3 Diagnosability and Security authoritative sequence

This Vision document does not rewrite the accepted Roadmap sequence.
The controlling high-level order remains:

```text
Supporting Contracts / current root package as governed
→ Combined Diagnosability & Security Compatibility Assessment
→ Project Owner checkpoint on assessment criteria
→ one retrospective compatibility pass
→ AI Brain Diagnosability Architecture
→ Security Architecture Baseline
→ mandatory Diagnosability ↔ Security cross-check
→ subsequent data, corpus, provider and implementation gates
  only as separately authorized
```

Foundations are embedded now; full architectures follow through this sequence.
They are not postponed until two or three future product Tracks are operating.

### 20.4 Selection of the next Major Module

This Vision Architecture does not select the next Primary Active Module after
Track A closure.

Selection requires a separate Project Owner decision based on:

- module readiness;
- dependencies;
- product priority;
- risk;
- current Roadmap;
- completed Module Closure and Post-Closure Governance.

---

## 21. Architecture impact cautions

### 21.1 No absolute “only one foundation rewrite” claim

No future Track or Major Module may be declared foundation-neutral without an
authorized assessment.

### 21.2 Known high-impact candidates

Current high-impact candidates include, without claiming exclusivity:

- multi-image and whole-home representation;
- 3D reconstruction;
- project/asset versioning;
- design-ready material model;
- platform-wide bilingual output schemas;
- real-user-data security and privacy;
- client specification and procurement model;
- controlled learning and model/rule versioning.

### 21.3 Successor discipline

If a future decision conflicts with a frozen or accepted artifact:

- do not edit the frozen artifact in place;
- create an authorized successor;
- preserve history and source identity;
- conduct one full consolidated review;
- obtain the required Owner decision;
- persist only after separate authorization.

---

## 22. External systems and standards

### 22.1 Provider-neutral core

The platform core must not depend on one commercial vendor, catalogue or AI
provider.

### 22.2 Color standards

```text
Pantone:
EXCLUDED

CIEXYZ / CIELAB / CIEDE2000 / sRGB / HEX / ICC:
provider-neutral technical foundation candidates.

RAL / NCS / manufacturer catalogues:
INTEGRATION-DEPENDENT
```

### 22.3 Commerce and marketplace systems

Product catalogues, prices, stock, delivery, payments, contractor marketplaces
and shopping carts require separate:

- business decision;
- legal/licensing review;
- security/privacy architecture;
- integration architecture;
- provider selection;
- operational-readiness evidence.

---

## 23. Non-authorization boundary

This document does not authorize:

```text
Root Impact Assessment;
Contract 1 successor;
Contract 2 compatibility assessment or successor;
Bounded Scope successor;
Threshold Plan successor;
Preparation Plan successor;
Module Applicability Profile successor;
Project Context synchronization;
Roadmap synchronization;
Contract 3 or Contracts 4–10 drafting;
ADR creation;
corpus or annotation;
provider/model contact, invocation, evaluation or selection;
real-user-data use;
Implementation Package;
implementation;
deployment;
repository file creation, modification, staging, commit or push.
```

The local creation of this draft does not itself constitute repository
persistence or governance acceptance.

---

## 24. Decision points reserved for Project Owner

The following are not decided by this document:

1. acceptance or correction of this Vision Architecture revision;
2. authorization of Root Impact Assessment;
3. exact Layer 1 identifiers, registry placement, detailed rules and
   downstream mapping for the four Owner-confirmed forms, plus the exact
   architectural mapping of the remaining 30 residential room categories;
4. exact next Primary Active Module after Track A closure;
5. acceptance of Controlled Learning as a cross-cutting foundation;
6. acceptance of proposed advanced features such as realtor batch processing,
   contractor marketplace and AR;
7. any commercial-domain activation;
8. any external catalogue or commerce integration;
9. repository persistence.

---

## 25. Recommended next governance step

```text
CURRENT STATUS:
VISION ARCHITECTURE REVISION 3 — DRAFT FOR OWNER REVIEW

ROOT IMPACT ASSESSMENT:
NOT AUTHORIZED

NEXT ACTION:
Project Owner reviews this Vision Architecture and either:
- accepts it as a non-governance Vision baseline;
- returns it for correction;
- or separately authorizes the next governance action.
```

No Root Impact Assessment, contract work or repository action begins without a
new direct Project Owner instruction.
