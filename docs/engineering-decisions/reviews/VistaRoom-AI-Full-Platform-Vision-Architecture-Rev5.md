# VistaRoom AI — Full-Platform Vision Architecture — Revision 5
## Residential-First AI Interior Designer Platform
### Full Consolidated Controlled Learning Synchronization Successor

```text
Document type:
VISION ARCHITECTURE

Status:
FULL CONSOLIDATED SUCCESSOR FOR PROJECT OWNER REVIEW

Accepted predecessor:
VistaRoom-AI-Full-Platform-Vision-Architecture-Rev3.md
1321 lines
SHA-256:
a482596914090255a3b8a47ac011a1716b8151af6247eba06186237d65ee2017

Accepted predecessor decision:
VistaRoom-AI-Full-Platform-Vision-Architecture-
Rev3-Owner-Acceptance-Decision.md
261 lines
SHA-256:
cb4b25a7da68c4819dbe6cad940f701627d4161e3ce808f915c89bbe5cd0842d

Reviewed intermediate successor:
VistaRoom-AI-Full-Platform-Vision-Architecture-Rev4.md
703 lines
SHA-256:
c38bd665b71ae71eb2c0deefa9a1bc98395b9b343055efddcd678fa793668163

Revision 4 review result:
BLOCKER: 0
MAJOR: 1
MINOR: 0
IMPROVEMENT: 0
Verdict: FAIL — FULL CONSOLIDATED SUCCESSOR REQUIRED

Revision 4 content assessment:
CONTROLLED LEARNING SYNCHRONIZATION — PASS
UNRELATED ARCHITECTURE PRESERVATION — PASS
SUCCESSOR FORM — NOT ACCEPTABLE

Accepted Product Feature Vision:
VistaRoom-AI-Consolidated-Feature-Vision-Rev5.md
769 lines
SHA-256:
294196fccbf666ab82105e3dabda083b60243af957449033bad505b2b6833228

Accepted Product Feature Vision decision:
VistaRoom-AI-Consolidated-Feature-Vision-
Rev5-Owner-Acceptance-Decision.md
681 lines
SHA-256:
dc3e55f70030cdfd8c91de7d864245bcd8096fa856398f8e04a6bd6af0c95a62

Revision 5 correction scope:
- closes Revision 4 MAJOR-1 by replacing the two-file
  incorporation-by-reference form with one complete, self-contained,
  mechanically reviewable Vision Architecture artifact;
- preserves the complete accepted Revision 3 architecture;
- embeds only the already reviewed Controlled Learning status,
  compatibility foundation, safety boundaries and directly related
  governance synchronization;
- creates one line count and one SHA-256 for the full effective document.

No unrelated architectural section, Strategic Track, Major Module,
residential category, capability boundary, sequencing rule, integration
boundary or governance state is reopened or substantively changed.

This document is:
- a complete self-contained target platform-architecture map;
- a reconciliation of the accepted Product Feature Vision with the
  authoritative Strategic Tracks A–H;
- a non-binding map of future Major Modules and capability boundaries;
- the full consolidated successor required by the Revision 4 review.

This document is NOT:
- a Root Impact Assessment;
- a Contract 1 / Contract 2 / Bounded Scope successor;
- Contract 3 drafting;
- an Implementation Package;
- implementation or deployment authorization;
- repository-persistence authorization;
- an authorization to open any future Major Module;
- authorization for feedback collection, learning-data use, training,
  release, rollout or autonomous production self-modification.

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

Revision 5 also synchronizes one later explicit Project Owner Decision:
Controlled Learning & Continuous Improvement is an Owner-confirmed future
cross-cutting foundation, while the current Spatial Perception cycle requires
only a Minimal Controlled Learning Compatibility Foundation.

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
Accepted predecessor:
VistaRoom-AI-Full-Platform-Vision-Architecture-Rev3.md
1321 lines
SHA-256:
a482596914090255a3b8a47ac011a1716b8151af6247eba06186237d65ee2017
Status:
OWNER-ACCEPTED FULL-PLATFORM VISION ARCHITECTURE BASELINE

Accepted predecessor decision:
VistaRoom-AI-Full-Platform-Vision-Architecture-
Rev3-Owner-Acceptance-Decision.md
261 lines
SHA-256:
cb4b25a7da68c4819dbe6cad940f701627d4161e3ce808f915c89bbe5cd0842d

Reviewed intermediate successor:
VistaRoom-AI-Full-Platform-Vision-Architecture-Rev4.md
703 lines
SHA-256:
c38bd665b71ae71eb2c0deefa9a1bc98395b9b343055efddcd678fa793668163
Review result:
BLOCKER: 0
MAJOR: 1
MINOR: 0
IMPROVEMENT: 0
Verdict:
FAIL — FULL CONSOLIDATED SUCCESSOR REQUIRED

Accepted Product Feature Vision:
VistaRoom-AI-Consolidated-Feature-Vision-Rev5.md
769 lines
SHA-256:
294196fccbf666ab82105e3dabda083b60243af957449033bad505b2b6833228
Status:
OWNER-ACCEPTED CONSOLIDATED PRODUCT FEATURE VISION BASELINE

Accepted Product Feature Vision decision:
VistaRoom-AI-Consolidated-Feature-Vision-
Rev5-Owner-Acceptance-Decision.md
681 lines
SHA-256:
dc3e55f70030cdfd8c91de7d864245bcd8096fa856398f8e04a6bd6af0c95a62

Historical predecessor:
VistaRoom-AI-Vision-Architecture.md
288 lines
SHA-256:
21f2fae251650e2567ad5d9ae0ce1a6e2a06085a939c55d629fa51f9c3a8cf94

Governance references:
- Module Completion and Sequencing Policy — Revision 4;
- Living Strategic Roadmap v1.4;
- Owner-Approved Roadmap Amendment — Module-Completion-First Rev5;
- current Project Context v2.4 baseline;
- later explicit Project Owner Decisions listed in §2.3.
```

Revision 4 is not imported as a second effective baseline. Its reviewed
Controlled Learning content is integrated directly into this complete
self-contained Revision 5.

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

12. Controlled Learning & Continuous Improvement is an
    OWNER-CONFIRMED FUTURE CROSS-CUTTING FOUNDATION.

    The current Bounded Room Understanding / Spatial Perception architecture
    cycle requires only a Minimal Controlled Learning Compatibility Foundation.

    The current module must be learning-ready but not learning-active.

    Full Controlled Learning Architecture, feedback collection, real-user-data
    use for learning, analytics, model/rule training, release and rollout remain
    a separate future governance cycle and are not authorized by this decision.
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

A client-feedback correction loop is not a direct production-learning loop.
Any future use of feedback for Controlled Learning remains governed by §16.

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

Controlled Learning compatibility requirements applicable to this current
module are defined separately and exhaustively in §16.2.

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
specification, controlled learning and other future modules may also require
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

The platform has five Owner-confirmed cross-cutting foundations.

Four are described in this section. Controlled Learning & Continuous Improvement
is described separately in §16 because it has a two-level current/future
governance model.

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

## 16. Owner-confirmed future cross-cutting foundation

### 16.1 Controlled Learning & Continuous Improvement

```text
Status:
OWNER-CONFIRMED FUTURE CROSS-CUTTING FOUNDATION

Current-cycle requirement:
MINIMAL CONTROLLED LEARNING COMPATIBILITY FOUNDATION

Current Spatial Perception module:
LEARNING-READY
NOT LEARNING-ACTIVE

Full Controlled Learning Architecture:
FUTURE SEPARATE GOVERNANCE CYCLE
```

Controlled Learning & Continuous Improvement is a future cross-cutting
foundation for safe, governed, testable and reversible improvement of models,
rules, recommendations and recognition behavior.

It is not:

- an independent hidden Major Module opened in parallel;
- authorization for feedback collection;
- authorization for real-user-data use;
- authorization for model or rule training;
- authorization for automatic production behavior changes;
- authorization for implementation;
- authorization for rollout;
- authorization for autonomous self-modification.

### 16.2 Minimal Controlled Learning Compatibility Foundation

The current Spatial Perception architecture cycle must preserve the ability to
support future Controlled Learning without broad foundation redesign.

The minimum compatibility requirement includes the ability to support:

1. model version references;
2. rule-set version references;
3. contract version references;
4. vocabulary version references;
5. provider configuration version references;
6. evidence;
7. provenance;
8. explicit traceability;
9. reproducibility;
10. future linkage between a result and user confirmation, rejection or
    correction;
11. feedback semantic classification compatibility;
12. mandatory separation of subjective user preference/taste from factual
    system-error correction;
13. consent and data-use eligibility extension points;
14. immutable result and correction history;
15. no-regression evaluation hooks;
16. controlled rollout compatibility;
17. rollback compatibility.

This section defines compatibility requirements only.

It does not decide exact schemas, field names, service ownership, storage,
retention, event models, training pipelines, feedback UI, analytics systems,
rollout mechanisms or implementation technology.

Those details require separately authorized downstream architecture and
governance work.

### 16.3 Personalization boundary

A user-specific taste profile, if separately accepted as a product capability,
is governed by the following boundary:

```text
USER-SPECIFIC TASTE PROFILE:
PERSONALIZATION ONLY

GLOBAL PRODUCTION MODEL/RULE LEARNING:
NO

AUTOMATIC TRAINING SIGNAL:
NO
```

Subjective preference or taste must not be treated as equivalent to factual
correction of a system error.

Examples:

```text
"I prefer warmer colors":
subjective preference/taste.

"The system identified a window as a door":
factual error-correction signal.
```

The two signal classes require separate future semantics, eligibility rules and
governance treatment.

This boundary does not activate the proposed evolving taste-profile capability.

### 16.4 Future Full Controlled Learning Architecture

The Full Controlled Learning & Continuous Improvement Architecture remains a
future separate governance cycle.

It must cover, at minimum:

1. consent-based feedback collection;
2. feedback classification;
3. analytics;
4. training eligibility;
5. model and rule improvement;
6. held-out evaluation;
7. no-regression testing;
8. versioned release;
9. limited rollout;
10. monitoring;
11. rollback;
12. auditability.

The following hard rule applies:

```text
User feedback must never directly modify production behavior.
```

Every future production model or rule change must be:

- prepared;
- versioned;
- tested;
- evaluated;
- separately authorized;
- observable;
- reversible.

### 16.5 Current non-authorization status

```text
Feedback collection:
NOT AUTHORIZED

Real-user-data use for learning:
NOT AUTHORIZED

Model training:
NOT AUTHORIZED

Rule training:
NOT AUTHORIZED

Production rollout:
NOT AUTHORIZED

Autonomous production self-modification:
PROHIBITED

Controlled Learning implementation:
NOT AUTHORIZED

Root Impact Assessment:
NOT AUTHORIZED

Repository persistence:
NOT AUTHORIZED
```

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

Controlled Learning data-use eligibility does not bypass this gate.

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
| Controlled Learning | Owner-confirmed future cross-cutting foundation; no learning-active system is authorized | Minimal Controlled Learning Compatibility Foundation; learning-ready, not learning-active | Full Controlled Learning & Continuous Improvement Architecture through a separate future governance cycle |

This table is intentionally cautious. It does not convert a future requirement
into a claim that the full architecture is already accepted, implemented or
authorized for execution.

Owner confirmation of the Controlled Learning foundation does not mean that
feedback collection, training, release or rollout already exists or is
authorized.

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

### 19.2 Controlled Learning ownership boundary

Controlled Learning does not create duplicate semantic ownership.

Future Controlled Learning architecture must define ownership for:

- feedback;
- classification;
- eligibility;
- evaluation;
- release;
- rollout;
- monitoring;
- rollback;
- auditability.

It must do so without silently taking ownership away from:

- Track A observed spatial evidence;
- Track B project and asset identity;
- Track C design semantics and assigned design intent;
- Track D controlled transformation;
- Track G delivery specifications;
- Track H runtime routing and operational telemetry.

Exact Controlled Learning ownership is not decided by this Vision Architecture.

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

### 20.4 Controlled Learning sequencing boundary

Controlled Learning confirmation does not open a parallel Major Module.

Before current Module Closure, only the Minimal Controlled Learning
Compatibility Foundation may be applied, and only where directly necessary for
the current Spatial Perception module.

```text
Allowed now:
compatibility hooks required for current-module completion,
subject to separately authorized downstream document synchronization.

Not allowed automatically:
Full Controlled Learning Architecture;
feedback system architecture;
analytics architecture;
training architecture;
release/rollout architecture;
implementation;
evaluation execution;
production activation.
```

This document does not insert the Full Controlled Learning Architecture into or
otherwise modify the accepted Diagnosability and Security sequence.

The sequencing relationship between the future Full Controlled Learning cycle
and other future foundation cycles remains reserved for a separate Project
Owner decision.

### 20.5 Selection of the next Major Module

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

For Controlled Learning, the current compatibility foundation must include
version references, traceability, reproducibility, future feedback-linkage
compatibility, no-regression hooks and rollback compatibility.

This clarification does not constitute a Root Impact Assessment and does not
determine exact downstream changes.

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

Controlled Learning compatibility must therefore preserve provider
configuration version references without making one provider the architecture
owner.

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
feedback collection;
use of real-user data for learning;
feedback analytics execution;
model training;
rule training;
training-data eligibility decisions;
versioned production release;
limited or broad production rollout;
autonomous production self-modification;
Controlled Learning implementation;
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
5. authorization, sequencing, scope or acceptance of the future Full
   Controlled Learning & Continuous Improvement Architecture, including any
   feedback collection, analytics, training, evaluation, release, rollout,
   monitoring, rollback or audit system;
6. acceptance of proposed advanced features such as realtor batch processing,
   contractor marketplace and AR;
7. any commercial-domain activation;
8. any external catalogue or commerce integration;
9. repository persistence.

---

## 25. Recommended next governance step

```text
CURRENT STATUS:
VISION ARCHITECTURE REVISION 5
FULL CONSOLIDATED SUCCESSOR
DRAFT FOR PROJECT OWNER REVIEW

ACCEPTED PREDECESSOR:
VISION ARCHITECTURE REVISION 3
OWNER-ACCEPTED

CONTROLLED LEARNING STATUS:
OWNER-CONFIRMED FUTURE CROSS-CUTTING FOUNDATION

CURRENT-CYCLE CONTROLLED LEARNING REQUIREMENT:
MINIMAL COMPATIBILITY FOUNDATION ONLY

CURRENT MODULE:
LEARNING-READY
NOT LEARNING-ACTIVE

ROOT IMPACT ASSESSMENT:
NOT AUTHORIZED

REPOSITORY PERSISTENCE:
NOT AUTHORIZED

NEXT ACTION:
one full consolidated closure-review of this exact Revision 5 artifact.

AFTER PASS:
Project Owner may accept or return Revision 5.

AFTER OWNER ACCEPTANCE:
repository persistence remains subject to a separate direct authorization.
```

No Root Impact Assessment, contract, corpus, provider, implementation, Project
Context, Roadmap or repository action begins without a new direct Project Owner
instruction.

---

## 26. Full consolidated successor declaration

```text
This Revision 5 is one complete, self-contained Vision Architecture artifact.

It preserves the accepted Revision 3 architecture and directly embeds only:

- Controlled Learning foundation status;
- Minimal Controlled Learning Compatibility Foundation;
- learning-ready / not learning-active boundary;
- personalization versus production-learning boundary;
- future Full Controlled Learning Architecture controls;
- directly associated ownership, sequencing, impact-caution,
  non-authorization and reserved-decision statements;
- source and review metadata required to establish one mechanically
  verifiable successor.

Revision 4 remains a reviewed historical intermediate artifact and is not
required to reconstruct the effective Revision 5 baseline.

No unrelated architecture is opened, altered or authorized.
```
