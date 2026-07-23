# VistaRoom AI — Contract 1 Transfer and Layer 2 Activation Preparation Directive — Corrected Revision 3

## 1. Document status

```text
Document type:
Owner-directed root-transition preparation directive

Primary Active Module:
Bounded Room Understanding / Spatial Perception

Strategic Track:
Track A

Governance:
Module-Completion-First

Revision:
Corrected Revision 3

Preparation date:
2026-07-20

Status:
DRAFT FOR PROJECT OWNER REVIEW

Supersedes for review:
Corrected Revision 2

Repository persistence:
NOT AUTHORIZED

Contract 1 successor drafting:
NOT YET AUTHORIZED BY THIS DRAFT

Layer 2 effective activation:
NOT YET EFFECTIVE

Corpus / annotation:
NOT AUTHORIZED

Provider/model evaluation:
NOT AUTHORIZED

Implementation:
NOT AUTHORIZED

Production:
NOT AUTHORIZED
```

## 2. Purpose and truth boundary

This directive prepares one compatible root transition. It specifies:

- the correct ontology topology;
- required Layer 1, cross-layer and Layer 2 registries;
- the complete Owner-selected Layer 2 candidate inventory;
- exact activation-wave assignment for every selected Layer 2 identity;
- exact Facility Context ↔ Canonical Space Type applicability;
- exact Space Type ↔ Functional Zone and Space Use relations;
- runtime, migration, Contract 2 and downstream synchronization requirements.

This directive is not the Contract 1 successor and does not claim that the complete source-verified Layer 1 inventory has already been populated.


# 3. Normative topology

## 3.1 Facility taxonomy

```text
Platform Domain
└── Facility Context
```

## 3.2 Space taxonomy

```text
Platform Domain
└── Space Family
    └── Canonical Space Type
        └── Space Subtype
```

## 3.3 Relation architecture

```text
Facility Context
↔ Facility-to-Space Applicability Registry
↔ Canonical Space Type

Canonical Space Type
↔ Space-to-Zone Applicability Registry
↔ Functional Zone

Canonical Space Type
↔ Space Use Applicability Registry
↔ Space Use
```

## 3.4 Orthogonal axes

```text
Property Composition
Space Environment / Enclosure
Attachment Mode
Lifecycle / Migration
Activation Role
Evidence Mode
Evaluation Applicability
```

A Facility Context is not a room. A Functional Zone is not automatically a separately enclosed room. A Space Use does not create a new room identity merely because a profession or service differs.


# 4. Registry separation

## 4.1 Layer 1 Master Vocabulary registries

```text
Platform Domain Registry
Property Composition Registry
Space Environment / Enclosure Registry
Attachment Mode Registry
Facility Context Registry
Space Family Registry
Canonical Space Type Registry
Space Subtype Registry
Functional Zone Registry
Space Use Registry
Component Identity Registry
Shared Concept Group Registry
Alias and Contextual Disambiguation Registry
Localization Registry
Lifecycle and Migration Registry
```

## 4.2 Cross-layer relation and binding registries

```text
Facility-to-Space Applicability Registry
Space-to-Zone Applicability Registry
Space Use Applicability Registry
Runtime Binding Registry
Platform Domain ↔ DesignDomainId Binding Registry
Layer 1 ↔ Layer 2 Referential-Integrity Registry
```

## 4.3 Layer 2 registry

```text
Layer 2 Activation Registry
```

The Layer 2 Activation Registry may be governed inside Contract 1, but it is not part of Layer 1.


# 5. Layer 1 full-platform requirements

## 5.1 Platform Domains

```text
residential
workplace
hospitality
food_service
healthcare
retail
education
wellness_fitness
beauty_personal_care
public_civic
culture_entertainment
religious_community
transport_travel
service_light_industrial
warehouse_logistics
professional_services
```

`professional_services` is a new Owner-required domain. Missing runtime or DesignDomainId support must be recorded as a governed gap; no code change is authorized.

## 5.2 Full Layer 1 inventory requirement

The Contract 1 successor must physically reconcile:

```text
all accepted Contract 1 Rev12 identities
all 51 runtime SpaceTypeId values
all 11 DesignDomainId values
all Owner-required additions
all inactive but architecturally defined identities
all legacy flat identities that represent Facility Contexts
all aliases, localization, lifecycle and migration states
```

It must not claim Layer 1 completion until every row is physically present and source-verified.


# 6. Mandatory source-freeze baseline

| Authoritative input | Current lock/status | Required hash | Execution rule |
|---|---|---|---|
| Supporting Contract 1 Revision 12 | C1-REV12-CL-001 | exact SHA-256 required | resolve directly from authoritative repository before drafting; hard stop if unavailable |
| Supporting Contract 2 Revision 2 | C2-REV2-CL-001 | exact SHA-256 required | resolve directly from authoritative repository before drafting; hard stop if unavailable |
| Candidate-A-Root-Architecture-Correction-Specification | no lock assumed | exact revision and SHA-256 required | resolve exact authoritative file; mark superseded scope provisions explicitly |
| Candidate-A-Bounded-Scope-Decision-Rev5 | accepted baseline | exact SHA-256 required | resolve directly; prepare full supersession |
| Candidate-A-Evaluation-Threshold-and-Acceptance-Plan-Rev15 | accepted baseline | exact SHA-256 required | resolve directly; no five-room counts may be reused silently |
| Candidate-A-Contracts-1-10-Preparation-and-Dependency-Plan-Rev11 | accepted baseline | exact SHA-256 required | resolve directly; prepare successor |
| Module Applicability Profile Rev18 | accepted baseline | exact SHA-256 required | resolve directly; prepare successor |
| Project Context v2.4 | authoritative project context | exact SHA-256 required | resolve directly; prepare synchronization |
| Living Strategic Roadmap v1.4 | accepted strategic baseline | exact SHA-256 required | resolve directly; prepare synchronization |

Drafting hard stop:

```text
If any listed authoritative file, revision, candidate lock or exact SHA-256
cannot be confirmed directly from the repository, do not begin Contract 1
successor drafting and do not substitute summaries.
```


# 7. Layer 2 selection and effective-status model

```text
ownerSelected:
true

profileSelectionStatus:
owner_selected

rootTransitionStatus:
pending_drafting_review_and_atomic_acceptance

effectiveActivationStatus:
not_yet_effective

evaluationMethodologyStatus:
pending

corpusAuthorizationStatus:
not_authorized

providerModelEvaluationStatus:
not_authorized

implementationAuthorizationStatus:
not_authorized

productionAuthorizationStatus:
not_authorized
```

## 7.1 Profile version policy

```text
profileId:
candidate-a-layer2-active-evaluation-profile

profileVersion:
L2-PROFILE-REV1-CANDIDATE

effectiveContract1Revision:
pending

effectiveContract1CandidateLock:
pending
```

A new profile version is required whenever selected identities, applicability relations or wave assignments change.


# 8. Required Canonical Space Type record schema

Every Canonical Space Type in the Contract 1 successor must contain:

```text
canonicalSpaceTypeId
platformDomainId
parentSpaceFamilyId
sharedConceptGroupId
normativeDefinition
positiveEvidence
negativeEvidence
excludes
requiredOrTypicalFeatures
applicableFacilityContexts
environmentAndEnclosure
attachmentModeApplicability
allowedFunctionalZones
allowedSpaceUses
ambiguityFallback
runtimeBindingKind
runtimeBindingStatus
lifecycleStatus
```

This requirement applies to every Canonical Space Type, not only ambiguous examples.


# 9. Layer 2 Owner-selected candidate — `residential`

## Facility Context Registry references

```text
facility.residential.apartment
facility.residential.private_house
facility.residential.cottage_house
facility.residential.country_house
facility.residential.townhouse
```

## Space Family → Canonical Space Type references

### `family.residential.primary_living`

```text
space.residential.living_room
space.residential.bedroom
```

### `family.residential.food_preparation`

```text
space.residential.kitchen
```

### `family.residential.sanitary`

```text
space.residential.bathroom
space.residential.toilet_room
space.residential.shower_room
space.residential.combined_bathroom
```

### `family.residential.entrance_circulation`

```text
space.residential.entryway
space.residential.vestibule
space.residential.hall
space.residential.corridor
```

### `family.residential.storage_dressing`

```text
space.residential.dressing_room
space.residential.walk_in_closet
```

### `family.residential.attached_outdoor`

```text
space.residential.balcony
space.residential.terrace
```

### `family.residential.roof_level`

```text
space.residential.attic
space.residential.mansard_room
```

### `family.residential.vertical_circulation`

```text
space.residential.staircase_space
space.residential.stair_hall
```

### `family.residential.vehicle_storage`

```text
space.residential.garage
```

## Supporting Component references

```text
component.stair.flight
component.stair.landing
component.stair.steps
component.stair.railing
```

## Same-domain Layer 1-only identities in the current wave

```text
space.residential.carport
```


# 10. Layer 2 Owner-selected candidate — `workplace`

## Facility Context Registry references

```text
facility.workplace.office_suite
facility.workplace.office_building
facility.workplace.business_center
facility.workplace.coworking
```

## Space Family → Canonical Space Type references

### `family.workplace.arrival_waiting`

```text
space.workplace.reception_room
space.workplace.waiting_room
```

### `family.workplace.work`

```text
space.workplace.open_plan_office
space.workplace.private_office
space.workplace.focus_room
space.workplace.phone_booth
```

### `family.workplace.collaboration`

```text
space.workplace.meeting_room
space.workplace.conference_room
space.workplace.boardroom
space.workplace.training_room
```

### `family.workplace.staff_support`

```text
space.workplace.break_room
space.workplace.office_kitchen
```

### `family.workplace.operations_support`

```text
space.workplace.copy_print_room
space.workplace.archive_room
space.workplace.server_room
space.workplace.office_storage
```

### `family.workplace.circulation_sanitary`

```text
space.workplace.office_corridor
space.workplace.staff_toilet
space.workplace.accessible_toilet
```

## Functional Zone references

```text
zone.workplace.reception
zone.workplace.waiting
```


# 11. Layer 2 Owner-selected candidate — `food_service`

## Facility Context Registry references

```text
facility.food_service.cafe
facility.food_service.restaurant
facility.food_service.coffee_shop
```

## Space Family → Canonical Space Type references

### `family.food_service.customer_dining`

```text
space.food_service.dining_room
space.food_service.private_dining_room
```

### `family.food_service.food_production`

```text
space.food_service.commercial_kitchen
space.food_service.prep_room
space.food_service.dishwashing_room
```

### `family.food_service.storage`

```text
space.food_service.dry_storage
space.food_service.cold_storage
```

### `family.food_service.staff_service`

```text
space.food_service.staff_room
space.food_service.staff_changing_room
space.food_service.service_corridor
space.food_service.waste_room
```

### `family.food_service.sanitary`

```text
space.food_service.guest_toilet
space.food_service.staff_toilet
space.food_service.accessible_toilet
```

## Functional Zone references

```text
zone.food_service.cashier
zone.food_service.waiter_station
zone.food_service.takeaway
zone.food_service.delivery_pickup
zone.food_service.queue
```


# 12. Layer 2 Owner-selected candidate — `retail`

## Facility Context Registry references

```text
facility.retail.shop
facility.retail.grocery_store
facility.retail.boutique
```

## Space Family → Canonical Space Type references

### `family.retail.sales`

```text
space.retail.sales_floor
space.retail.fitting_room
```

### `family.retail.storage_logistics`

```text
space.retail.stock_room
space.retail.receiving_room
space.retail.dry_storage
space.retail.cold_storage
```

### `family.retail.operations_support`

```text
space.retail.back_office
space.retail.staff_room
space.retail.customer_service_room
```

### `family.retail.sanitary`

```text
space.retail.customer_toilet
space.retail.staff_toilet
space.retail.accessible_toilet
```

## Functional Zone references

```text
zone.retail.checkout
zone.retail.queue
zone.retail.display
zone.retail.customer_service
zone.retail.produce
zone.retail.bakery
zone.retail.meat
zone.retail.dairy
```

## Same-domain Layer 1-only identities in the current wave

```text
facility.retail.supermarket
facility.retail.hypermarket
zone.retail.large_checkout
```


# 13. Layer 2 Owner-selected candidate — `beauty_personal_care`

## Facility Context Registry references

```text
facility.beauty_personal_care.beauty_salon
facility.beauty_personal_care.hair_salon
facility.beauty_personal_care.barbershop
facility.beauty_personal_care.nail_salon
facility.beauty_personal_care.beauty_cosmetology_studio
```

## Space Family → Canonical Space Type references

### `family.beauty_personal_care.arrival_waiting`

```text
space.beauty_personal_care.reception_room
space.beauty_personal_care.waiting_room
```

### `family.beauty_personal_care.service`

```text
space.beauty_personal_care.service_hall
space.beauty_personal_care.private_treatment_room
space.beauty_personal_care.cosmetology_treatment_room
space.beauty_personal_care.massage_treatment_room
```

### `family.beauty_personal_care.support`

```text
space.beauty_personal_care.sterilization_room
space.beauty_personal_care.storage_room
space.beauty_personal_care.staff_room
space.beauty_personal_care.customer_toilet
```

## Functional Zone references

```text
zone.beauty_personal_care.hair_service
zone.beauty_personal_care.hair_washing
zone.beauty_personal_care.barber_service
zone.beauty_personal_care.nail_service
zone.beauty_personal_care.makeup
zone.beauty_personal_care.waiting
zone.beauty_personal_care.product_display
```

## Space Use references

```text
use.beauty_personal_care.hairdressing
use.beauty_personal_care.barbering
use.beauty_personal_care.nail_care
use.beauty_personal_care.non_medical_cosmetology
use.beauty_personal_care.beauty_massage
```

## Same-domain Layer 1-only identities in the current wave

```text
facility.beauty_personal_care.tattoo_studio
facility.beauty_personal_care.tanning_salon
```


# 14. Layer 2 Owner-selected candidate — `wellness_fitness`

## Facility Context Registry references

```text
facility.wellness_fitness.fitness_center
facility.wellness_fitness.gym
facility.wellness_fitness.sports_club
```

## Space Family → Canonical Space Type references

### `family.wellness_fitness.arrival`

```text
space.wellness_fitness.reception_room
```

### `family.wellness_fitness.training`

```text
space.wellness_fitness.fitness_hall
space.wellness_fitness.group_training_room
```

### `family.wellness_fitness.changing_hygiene`

```text
space.wellness_fitness.changing_room
space.wellness_fitness.shower_room
```

### `family.wellness_fitness.support`

```text
space.wellness_fitness.coach_room
space.wellness_fitness.first_aid_room
space.wellness_fitness.equipment_storage
space.wellness_fitness.staff_room
space.wellness_fitness.accessible_toilet
```

## Functional Zone references

```text
zone.wellness_fitness.reception
zone.wellness_fitness.locker
zone.wellness_fitness.changing_cubicle
zone.wellness_fitness.cardio
zone.wellness_fitness.strength_training
zone.wellness_fitness.free_weights
zone.wellness_fitness.functional_training
zone.wellness_fitness.stretching
```

## Same-domain Layer 1-only identities in the current wave

```text
facility.wellness_fitness.swimming_center
facility.wellness_fitness.martial_arts_complex
facility.wellness_fitness.large_multi_sport_complex
```


# 15. Layer 2 Owner-selected candidate — `healthcare`

## Facility Context Registry references

```text
facility.healthcare.medical_center
facility.healthcare.clinic
facility.healthcare.dental_clinic
facility.healthcare.private_medical_practice
facility.healthcare.rehabilitation_center
facility.healthcare.psychology_clinic
```

## Space Family → Canonical Space Type references

### `family.healthcare.consultation_diagnostics`

```text
space.healthcare.consultation_room
space.healthcare.examination_room
space.healthcare.diagnostic_room
space.healthcare.dental_treatment_room
```

### `family.healthcare.treatment_therapy`

```text
space.healthcare.procedure_room
space.healthcare.therapy_room
space.healthcare.rehabilitation_therapy_room
```

### `family.healthcare.arrival_waiting`

```text
space.healthcare.reception_room
space.healthcare.waiting_room
```

### `family.healthcare.clinical_support`

```text
space.healthcare.sterilization_room
space.healthcare.medical_storage
space.healthcare.staff_room
```

### `family.healthcare.sanitary`

```text
space.healthcare.patient_toilet
space.healthcare.accessible_toilet
```

## Functional Zone references

```text
zone.healthcare.reception
zone.healthcare.waiting
```

## Space Use references

```text
use.healthcare.general_medical_consultation
use.healthcare.clinical_psychology_consultation
use.healthcare.medical_massage
use.healthcare.rehabilitation_therapy
use.healthcare.dental_treatment
```

## Same-domain Layer 1-only identities in the current wave

```text
facility.healthcare.hospital
space.healthcare.patient_room
space.healthcare.ward
space.healthcare.operating_room
space.healthcare.intensive_care_room
space.healthcare.recovery_room
```


# 16. Layer 2 Owner-selected candidate — `education`

## Facility Context Registry references

```text
facility.education.educational_center
facility.education.child_development_center
facility.education.kindergarten
facility.education.preschool_center
facility.education.tutoring_center
facility.education.language_school
```

## Space Family → Canonical Space Type references

### `family.education.learning`

```text
space.education.classroom
space.education.training_room
space.education.activity_room
space.education.creative_workshop
```

### `family.education.child_development`

```text
space.education.playroom
space.education.nap_room
space.education.sensory_room
space.education.specialist_therapy_room
```

### `family.education.staff_admin`

```text
space.education.teacher_room
space.education.administration_office
space.education.waiting_room
space.education.medical_room
```

### `family.education.children_support`

```text
space.education.children_cloakroom
space.education.children_toilet
space.education.accessible_toilet
```

## Functional Zone references

```text
zone.education.waiting
```

## Space Use references

```text
use.education.language_instruction
use.education.child_psychology_support
use.education.speech_therapy
use.education.sensory_development
use.education.creative_learning
```

## Same-domain Layer 1-only identities in the current wave

```text
facility.education.school
facility.education.university
facility.education.large_educational_campus
space.education.specialized_laboratory
```


# 17. Layer 2 Owner-selected candidate — `professional_services`

## Facility Context Registry references

```text
facility.professional_services.law_office
facility.professional_services.accounting_practice
facility.professional_services.psychology_practice
facility.professional_services.notary_office
facility.professional_services.consulting_office
```

## Space Family → Canonical Space Type references

### `family.professional_services.client_work`

```text
space.professional_services.private_office
space.professional_services.consultation_room
space.professional_services.client_meeting_room
```

### `family.professional_services.arrival_waiting`

```text
space.professional_services.reception_room
space.professional_services.waiting_room
```

### `family.professional_services.records_support`

```text
space.professional_services.archive_room
space.professional_services.document_storage
space.professional_services.staff_room
space.professional_services.customer_toilet
```

## Functional Zone references

```text
zone.professional_services.reception
zone.professional_services.waiting
```

## Space Use references

```text
use.professional_services.legal_consultation
use.professional_services.accounting_services
use.professional_services.tax_consultation
use.professional_services.psychological_consultation
use.professional_services.notary_services
use.professional_services.business_consultation
```


# 18. Layer 2 Owner-selected candidate — `culture_entertainment`

## Facility Context Registry references

```text
facility.culture_entertainment.gaming_arcade
facility.culture_entertainment.gaming_club
facility.culture_entertainment.esports_club
facility.culture_entertainment.vr_arcade
facility.culture_entertainment.billiard_club
```

## Space Family → Canonical Space Type references

### `family.culture_entertainment.gaming`

```text
space.culture_entertainment.gaming_hall
space.culture_entertainment.esports_room
space.culture_entertainment.vr_room
space.culture_entertainment.billiard_hall
```

### `family.culture_entertainment.arrival_waiting`

```text
space.culture_entertainment.reception_room
space.culture_entertainment.waiting_room
```

### `family.culture_entertainment.support`

```text
space.culture_entertainment.staff_room
space.culture_entertainment.storage_room
space.culture_entertainment.visitor_toilet
```

## Functional Zone references

```text
zone.culture_entertainment.reception
zone.culture_entertainment.waiting
```

## Same-domain Layer 1-only identities in the current wave

```text
facility.culture_entertainment.museum
facility.culture_entertainment.gallery
```


# 19. Cross-domain boundary and exclusion registry

| Identity A | Identity B | Mandatory boundary |
|---|---|---|
| facility.beauty_personal_care.beauty_cosmetology_studio | facility.healthcare.medical_cosmetology_clinic | non-medical beauty cosmetology versus clinically regulated medical cosmetology |
| facility.beauty_personal_care.beauty_salon | facility.wellness_fitness.wellness_spa | beauty-service establishment versus wellness/spa establishment |
| space.beauty_personal_care.massage_treatment_room | space.healthcare.therapy_room | beauty/non-clinical massage versus medical massage or clinical therapy |

Cross-domain boundary identities remain under their own Platform Domains and must not be inserted into another domain’s hierarchy.


# 20. Mandatory discriminative definitions

## 20.1 Sanitary rooms

```text
space.residential.toilet_room:
toilet fixture present;
bathtub absent;
bathing_shower_fixture absent;
hygienic_spray_fixture may be present.

space.residential.bathroom:
bathtub present;
bathing shower optional;
toilet fixture absent.

space.residential.shower_room:
bathing_shower_fixture present;
bathtub absent;
toilet fixture absent.

space.residential.combined_bathroom:
toilet fixture present;
bathtub and/or bathing_shower_fixture present.
```

When required fixtures are not visible:

```text
ambiguityFallback:
insufficient_evidence | bounded_alternative_set
```

## 20.2 Residential circulation

```text
entryway:
primary arrival space immediately inside the dwelling.

vestibule:
small intermediate buffer between exterior and interior.

hall:
larger arrival or distribution space not defined primarily by a staircase.

corridor:
elongated circulation space connecting other rooms.

staircase_space:
space whose primary organizing function is the stair and vertical movement.

stair_hall:
separately bounded distribution space organized around a staircase;
must contain or directly adjoin the staircase;
must also distribute access to two or more other spaces;
excludes a simple staircase enclosure and excludes a general hall with
no staircase-organized circulation.
```

`hallway` is an alias, not an active Canonical Space Type. A stair landing remains a component.

## 20.3 Roof-level rooms

```text
attic:
primarily storage, service or unfinished roof-volume space;
limited habitual occupancy;
typically reduced finish or accessibility.

mansard_room:
finished, occupiable room within a mansard/roof level;
normal room function and intentional interior use.
```

## 20.4 Healthcare diagnostics

```text
diagnostic_room:
separately bounded room primarily configured for non-imaging diagnostic
testing or assessment using dedicated diagnostic equipment;
excludes ordinary consultation;
excludes basic physical examination;
excludes minor procedure room;
specialized imaging rooms remain distinct Layer 1 identities.
```

## 20.5 Enclosed room versus open zone

```text
customer_service_room:
separately enclosed room.

customer_service zone:
open functional area within sales_floor.

reception_room:
separately bounded room.

reception zone:
open functional area within another room.
```


# 21. Shared Concept Group Registry

| sharedConceptGroupId | resolutionPolicy | Member Canonical Space Types | Decision rationale |
|---|---|---|---|
| `shared.arrival.reception_room` | `shared_baseline_domain_qualified` | space.workplace.reception_room<br>space.beauty_personal_care.reception_room<br>space.wellness_fitness.reception_room<br>space.healthcare.reception_room<br>space.professional_services.reception_room<br>space.culture_entertainment.reception_room | common arrival/reception baseline; domain-qualified semantics retained |
| `shared.arrival.waiting_room` | `shared_baseline_domain_qualified` | space.workplace.waiting_room<br>space.beauty_personal_care.waiting_room<br>space.healthcare.waiting_room<br>space.education.waiting_room<br>space.professional_services.waiting_room<br>space.culture_entertainment.waiting_room | common waiting baseline; domain requirements may differ |
| `shared.support.staff_room` | `shared_baseline_domain_qualified` | space.food_service.staff_room<br>space.retail.staff_room<br>space.beauty_personal_care.staff_room<br>space.wellness_fitness.staff_room<br>space.healthcare.staff_room<br>space.professional_services.staff_room<br>space.culture_entertainment.staff_room | common staff-support baseline |
| `shared.sanitary.accessible_toilet` | `shared_baseline_domain_qualified` | space.workplace.accessible_toilet<br>space.food_service.accessible_toilet<br>space.retail.accessible_toilet<br>space.wellness_fitness.accessible_toilet<br>space.healthcare.accessible_toilet<br>space.education.accessible_toilet | common accessibility baseline with domain regulatory overlays |
| `shared.consultation.consultation_room` | `shared_baseline_domain_qualified` | space.healthcare.consultation_room<br>space.professional_services.consultation_room | common consultation baseline; clinical and non-clinical uses remain distinct |
| `shared.storage.storage_room` | `shared_baseline_domain_qualified` | space.beauty_personal_care.storage_room<br>space.culture_entertainment.storage_room | generic enclosed storage baseline |
| `shared.records.archive_room` | `shared_baseline_domain_qualified` | space.workplace.archive_room<br>space.professional_services.archive_room | records/archive baseline |
| `shared.storage.dry_storage` | `shared_baseline_domain_qualified` | space.food_service.dry_storage<br>space.retail.dry_storage | dry goods storage baseline; hygiene and inventory overlays differ |
| `shared.storage.cold_storage` | `shared_baseline_domain_qualified` | space.food_service.cold_storage<br>space.retail.cold_storage | temperature-controlled storage baseline |
| `shared.sanitary.customer_toilet` | `shared_baseline_domain_qualified` | space.retail.customer_toilet<br>space.beauty_personal_care.customer_toilet<br>space.professional_services.customer_toilet | customer toilet baseline |
| `shared.sanitary.staff_toilet` | `shared_baseline_domain_qualified` | space.workplace.staff_toilet<br>space.food_service.staff_toilet<br>space.retail.staff_toilet | staff toilet baseline |
| `shared.work.private_office` | `shared_baseline_domain_qualified` | space.workplace.private_office<br>space.professional_services.private_office | enclosed individual-work baseline |
| `shared.sanitary.shower_room` | `materially_distinct_domain_qualified` | space.residential.shower_room<br>space.wellness_fitness.shower_room | shared bathing fixture concept, but residential and communal changing/hygiene contexts remain materially distinct |
| `shared.support.sterilization_room` | `materially_distinct_domain_qualified` | space.beauty_personal_care.sterilization_room<br>space.healthcare.sterilization_room | shared sterilization function, but medical regulatory semantics remain materially distinct |
| `shared.learning.training_room` | `materially_distinct_domain_qualified` | space.workplace.training_room<br>space.education.training_room | shared instructional layout concept, but workplace and education programs remain distinct |

Every repeated Canonical Space Type label in the selected Layer 2 inventory has an explicit resolution decision.

Policy:

```text
shared_baseline_domain_qualified:
common baseline semantics are recorded;
domain-qualified identities remain because operational or regulatory overlays differ.

materially_distinct_domain_qualified:
the repeated label is acknowledged, but a single shared canonical identity is
prohibited because the spatial or regulatory semantics materially differ.
```


# 22. Exact Layer 2 Activation Registry

Every selected identity has exactly one explicit activation-wave assignment.

Common status for every row:

```text
profileSelectionStatus: owner_selected
effectiveActivationStatus: not_yet_effective
evaluationMethodologyStatus: pending
corpusAuthorizationStatus: not_authorized
providerModelEvaluationStatus: not_authorized
implementationAuthorizationStatus: not_authorized
productionAuthorizationStatus: not_authorized
```

| activationEntryId | masterIdentityId | identityKind | platformDomainId | spaceFamilyId | sharedConceptGroupId | activationRole | evidenceMode | activationWaveId |
|---|---|---|---|---|---|---|---|---|
| L2-ACT-0001 | facility.residential.apartment | facility_context | residential | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W1 |
| L2-ACT-0002 | facility.residential.private_house | facility_context | residential | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W1 |
| L2-ACT-0003 | facility.residential.cottage_house | facility_context | residential | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W1 |
| L2-ACT-0004 | facility.residential.country_house | facility_context | residential | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W1 |
| L2-ACT-0005 | facility.residential.townhouse | facility_context | residential | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W1 |
| L2-ACT-0006 | family.residential.primary_living | space_family | residential | family.residential.primary_living | none | grouping_identity | not_inferred | L2-W1 |
| L2-ACT-0007 | space.residential.living_room | canonical_space_type | residential | family.residential.primary_living | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W1 |
| L2-ACT-0008 | space.residential.bedroom | canonical_space_type | residential | family.residential.primary_living | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W1 |
| L2-ACT-0009 | family.residential.food_preparation | space_family | residential | family.residential.food_preparation | none | grouping_identity | not_inferred | L2-W1 |
| L2-ACT-0010 | space.residential.kitchen | canonical_space_type | residential | family.residential.food_preparation | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W1 |
| L2-ACT-0011 | family.residential.sanitary | space_family | residential | family.residential.sanitary | none | grouping_identity | not_inferred | L2-W1 |
| L2-ACT-0012 | space.residential.bathroom | canonical_space_type | residential | family.residential.sanitary | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W1 |
| L2-ACT-0013 | space.residential.toilet_room | canonical_space_type | residential | family.residential.sanitary | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W1 |
| L2-ACT-0014 | space.residential.shower_room | canonical_space_type | residential | family.residential.sanitary | shared.sanitary.shower_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W1 |
| L2-ACT-0015 | space.residential.combined_bathroom | canonical_space_type | residential | family.residential.sanitary | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W1 |
| L2-ACT-0016 | family.residential.entrance_circulation | space_family | residential | family.residential.entrance_circulation | none | grouping_identity | not_inferred | L2-W2 |
| L2-ACT-0017 | space.residential.entryway | canonical_space_type | residential | family.residential.entrance_circulation | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0018 | space.residential.vestibule | canonical_space_type | residential | family.residential.entrance_circulation | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0019 | space.residential.hall | canonical_space_type | residential | family.residential.entrance_circulation | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0020 | space.residential.corridor | canonical_space_type | residential | family.residential.entrance_circulation | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0021 | family.residential.storage_dressing | space_family | residential | family.residential.storage_dressing | none | grouping_identity | not_inferred | L2-W2 |
| L2-ACT-0022 | space.residential.dressing_room | canonical_space_type | residential | family.residential.storage_dressing | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0023 | space.residential.walk_in_closet | canonical_space_type | residential | family.residential.storage_dressing | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0024 | family.residential.attached_outdoor | space_family | residential | family.residential.attached_outdoor | none | grouping_identity | not_inferred | L2-W2 |
| L2-ACT-0025 | space.residential.balcony | canonical_space_type | residential | family.residential.attached_outdoor | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0026 | space.residential.terrace | canonical_space_type | residential | family.residential.attached_outdoor | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0027 | family.residential.roof_level | space_family | residential | family.residential.roof_level | none | grouping_identity | not_inferred | L2-W2 |
| L2-ACT-0028 | space.residential.attic | canonical_space_type | residential | family.residential.roof_level | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0029 | space.residential.mansard_room | canonical_space_type | residential | family.residential.roof_level | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0030 | family.residential.vertical_circulation | space_family | residential | family.residential.vertical_circulation | none | grouping_identity | not_inferred | L2-W2 |
| L2-ACT-0031 | space.residential.staircase_space | canonical_space_type | residential | family.residential.vertical_circulation | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0032 | space.residential.stair_hall | canonical_space_type | residential | family.residential.vertical_circulation | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0033 | family.residential.vehicle_storage | space_family | residential | family.residential.vehicle_storage | none | grouping_identity | not_inferred | L2-W2 |
| L2-ACT-0034 | space.residential.garage | canonical_space_type | residential | family.residential.vehicle_storage | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0035 | component.stair.flight | component | residential | family.residential.vertical_circulation | none | supporting_component | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0036 | component.stair.landing | component | residential | family.residential.vertical_circulation | none | supporting_component | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0037 | component.stair.steps | component | residential | family.residential.vertical_circulation | none | supporting_component | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0038 | component.stair.railing | component | residential | family.residential.vertical_circulation | none | supporting_component | visual_inference<br>hybrid | L2-W2 |
| L2-ACT-0039 | facility.workplace.office_suite | facility_context | workplace | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0040 | facility.workplace.office_building | facility_context | workplace | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0041 | facility.workplace.business_center | facility_context | workplace | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0042 | facility.workplace.coworking | facility_context | workplace | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0043 | family.workplace.arrival_waiting | space_family | workplace | family.workplace.arrival_waiting | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0044 | space.workplace.reception_room | canonical_space_type | workplace | family.workplace.arrival_waiting | shared.arrival.reception_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0045 | space.workplace.waiting_room | canonical_space_type | workplace | family.workplace.arrival_waiting | shared.arrival.waiting_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0046 | family.workplace.work | space_family | workplace | family.workplace.work | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0047 | space.workplace.open_plan_office | canonical_space_type | workplace | family.workplace.work | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0048 | space.workplace.private_office | canonical_space_type | workplace | family.workplace.work | shared.work.private_office | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0049 | space.workplace.focus_room | canonical_space_type | workplace | family.workplace.work | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0050 | space.workplace.phone_booth | canonical_space_type | workplace | family.workplace.work | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0051 | family.workplace.collaboration | space_family | workplace | family.workplace.collaboration | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0052 | space.workplace.meeting_room | canonical_space_type | workplace | family.workplace.collaboration | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0053 | space.workplace.conference_room | canonical_space_type | workplace | family.workplace.collaboration | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0054 | space.workplace.boardroom | canonical_space_type | workplace | family.workplace.collaboration | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0055 | space.workplace.training_room | canonical_space_type | workplace | family.workplace.collaboration | shared.learning.training_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0056 | family.workplace.staff_support | space_family | workplace | family.workplace.staff_support | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0057 | space.workplace.break_room | canonical_space_type | workplace | family.workplace.staff_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0058 | space.workplace.office_kitchen | canonical_space_type | workplace | family.workplace.staff_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0059 | family.workplace.operations_support | space_family | workplace | family.workplace.operations_support | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0060 | space.workplace.copy_print_room | canonical_space_type | workplace | family.workplace.operations_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0061 | space.workplace.archive_room | canonical_space_type | workplace | family.workplace.operations_support | shared.records.archive_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0062 | space.workplace.server_room | canonical_space_type | workplace | family.workplace.operations_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0063 | space.workplace.office_storage | canonical_space_type | workplace | family.workplace.operations_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0064 | family.workplace.circulation_sanitary | space_family | workplace | family.workplace.circulation_sanitary | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0065 | space.workplace.office_corridor | canonical_space_type | workplace | family.workplace.circulation_sanitary | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0066 | space.workplace.staff_toilet | canonical_space_type | workplace | family.workplace.circulation_sanitary | shared.sanitary.staff_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0067 | space.workplace.accessible_toilet | canonical_space_type | workplace | family.workplace.circulation_sanitary | shared.sanitary.accessible_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0068 | zone.workplace.reception | functional_zone | workplace | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0069 | zone.workplace.waiting | functional_zone | workplace | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0070 | facility.food_service.cafe | facility_context | food_service | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W4 |
| L2-ACT-0071 | facility.food_service.restaurant | facility_context | food_service | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W4 |
| L2-ACT-0072 | facility.food_service.coffee_shop | facility_context | food_service | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W4 |
| L2-ACT-0073 | family.food_service.customer_dining | space_family | food_service | family.food_service.customer_dining | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0074 | space.food_service.dining_room | canonical_space_type | food_service | family.food_service.customer_dining | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0075 | space.food_service.private_dining_room | canonical_space_type | food_service | family.food_service.customer_dining | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0076 | family.food_service.food_production | space_family | food_service | family.food_service.food_production | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0077 | space.food_service.commercial_kitchen | canonical_space_type | food_service | family.food_service.food_production | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0078 | space.food_service.prep_room | canonical_space_type | food_service | family.food_service.food_production | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0079 | space.food_service.dishwashing_room | canonical_space_type | food_service | family.food_service.food_production | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0080 | family.food_service.storage | space_family | food_service | family.food_service.storage | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0081 | space.food_service.dry_storage | canonical_space_type | food_service | family.food_service.storage | shared.storage.dry_storage | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0082 | space.food_service.cold_storage | canonical_space_type | food_service | family.food_service.storage | shared.storage.cold_storage | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0083 | family.food_service.staff_service | space_family | food_service | family.food_service.staff_service | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0084 | space.food_service.staff_room | canonical_space_type | food_service | family.food_service.staff_service | shared.support.staff_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0085 | space.food_service.staff_changing_room | canonical_space_type | food_service | family.food_service.staff_service | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0086 | space.food_service.service_corridor | canonical_space_type | food_service | family.food_service.staff_service | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0087 | space.food_service.waste_room | canonical_space_type | food_service | family.food_service.staff_service | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0088 | family.food_service.sanitary | space_family | food_service | family.food_service.sanitary | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0089 | space.food_service.guest_toilet | canonical_space_type | food_service | family.food_service.sanitary | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0090 | space.food_service.staff_toilet | canonical_space_type | food_service | family.food_service.sanitary | shared.sanitary.staff_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0091 | space.food_service.accessible_toilet | canonical_space_type | food_service | family.food_service.sanitary | shared.sanitary.accessible_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0092 | zone.food_service.cashier | functional_zone | food_service | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0093 | zone.food_service.waiter_station | functional_zone | food_service | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0094 | zone.food_service.takeaway | functional_zone | food_service | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0095 | zone.food_service.delivery_pickup | functional_zone | food_service | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0096 | zone.food_service.queue | functional_zone | food_service | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0097 | facility.retail.shop | facility_context | retail | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W4 |
| L2-ACT-0098 | facility.retail.grocery_store | facility_context | retail | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W4 |
| L2-ACT-0099 | facility.retail.boutique | facility_context | retail | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W4 |
| L2-ACT-0100 | family.retail.sales | space_family | retail | family.retail.sales | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0101 | space.retail.sales_floor | canonical_space_type | retail | family.retail.sales | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0102 | space.retail.fitting_room | canonical_space_type | retail | family.retail.sales | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0103 | family.retail.storage_logistics | space_family | retail | family.retail.storage_logistics | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0104 | space.retail.stock_room | canonical_space_type | retail | family.retail.storage_logistics | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0105 | space.retail.receiving_room | canonical_space_type | retail | family.retail.storage_logistics | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0106 | space.retail.dry_storage | canonical_space_type | retail | family.retail.storage_logistics | shared.storage.dry_storage | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0107 | space.retail.cold_storage | canonical_space_type | retail | family.retail.storage_logistics | shared.storage.cold_storage | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0108 | family.retail.operations_support | space_family | retail | family.retail.operations_support | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0109 | space.retail.back_office | canonical_space_type | retail | family.retail.operations_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0110 | space.retail.staff_room | canonical_space_type | retail | family.retail.operations_support | shared.support.staff_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0111 | space.retail.customer_service_room | canonical_space_type | retail | family.retail.operations_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0112 | family.retail.sanitary | space_family | retail | family.retail.sanitary | none | grouping_identity | not_inferred | L2-W4 |
| L2-ACT-0113 | space.retail.customer_toilet | canonical_space_type | retail | family.retail.sanitary | shared.sanitary.customer_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0114 | space.retail.staff_toilet | canonical_space_type | retail | family.retail.sanitary | shared.sanitary.staff_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0115 | space.retail.accessible_toilet | canonical_space_type | retail | family.retail.sanitary | shared.sanitary.accessible_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0116 | zone.retail.checkout | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0117 | zone.retail.queue | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0118 | zone.retail.display | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0119 | zone.retail.customer_service | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0120 | zone.retail.produce | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0121 | zone.retail.bakery | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0122 | zone.retail.meat | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0123 | zone.retail.dairy | functional_zone | retail | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W4 |
| L2-ACT-0124 | facility.beauty_personal_care.beauty_salon | facility_context | beauty_personal_care | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0125 | facility.beauty_personal_care.hair_salon | facility_context | beauty_personal_care | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0126 | facility.beauty_personal_care.barbershop | facility_context | beauty_personal_care | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0127 | facility.beauty_personal_care.nail_salon | facility_context | beauty_personal_care | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0128 | facility.beauty_personal_care.beauty_cosmetology_studio | facility_context | beauty_personal_care | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0129 | family.beauty_personal_care.arrival_waiting | space_family | beauty_personal_care | family.beauty_personal_care.arrival_waiting | none | grouping_identity | not_inferred | L2-W5 |
| L2-ACT-0130 | space.beauty_personal_care.reception_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.arrival_waiting | shared.arrival.reception_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0131 | space.beauty_personal_care.waiting_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.arrival_waiting | shared.arrival.waiting_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0132 | family.beauty_personal_care.service | space_family | beauty_personal_care | family.beauty_personal_care.service | none | grouping_identity | not_inferred | L2-W5 |
| L2-ACT-0133 | space.beauty_personal_care.service_hall | canonical_space_type | beauty_personal_care | family.beauty_personal_care.service | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0134 | space.beauty_personal_care.private_treatment_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.service | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0135 | space.beauty_personal_care.cosmetology_treatment_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.service | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0136 | space.beauty_personal_care.massage_treatment_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.service | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0137 | family.beauty_personal_care.support | space_family | beauty_personal_care | family.beauty_personal_care.support | none | grouping_identity | not_inferred | L2-W5 |
| L2-ACT-0138 | space.beauty_personal_care.sterilization_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.support | shared.support.sterilization_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0139 | space.beauty_personal_care.storage_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.support | shared.storage.storage_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0140 | space.beauty_personal_care.staff_room | canonical_space_type | beauty_personal_care | family.beauty_personal_care.support | shared.support.staff_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0141 | space.beauty_personal_care.customer_toilet | canonical_space_type | beauty_personal_care | family.beauty_personal_care.support | shared.sanitary.customer_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0142 | zone.beauty_personal_care.hair_service | functional_zone | beauty_personal_care | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0143 | zone.beauty_personal_care.hair_washing | functional_zone | beauty_personal_care | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0144 | zone.beauty_personal_care.barber_service | functional_zone | beauty_personal_care | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0145 | zone.beauty_personal_care.nail_service | functional_zone | beauty_personal_care | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0146 | zone.beauty_personal_care.makeup | functional_zone | beauty_personal_care | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0147 | zone.beauty_personal_care.waiting | functional_zone | beauty_personal_care | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0148 | zone.beauty_personal_care.product_display | functional_zone | beauty_personal_care | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0149 | use.beauty_personal_care.hairdressing | space_use | beauty_personal_care | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0150 | use.beauty_personal_care.barbering | space_use | beauty_personal_care | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0151 | use.beauty_personal_care.nail_care | space_use | beauty_personal_care | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0152 | use.beauty_personal_care.non_medical_cosmetology | space_use | beauty_personal_care | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0153 | use.beauty_personal_care.beauty_massage | space_use | beauty_personal_care | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0154 | facility.wellness_fitness.fitness_center | facility_context | wellness_fitness | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0155 | facility.wellness_fitness.gym | facility_context | wellness_fitness | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0156 | facility.wellness_fitness.sports_club | facility_context | wellness_fitness | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W5 |
| L2-ACT-0157 | family.wellness_fitness.arrival | space_family | wellness_fitness | family.wellness_fitness.arrival | none | grouping_identity | not_inferred | L2-W5 |
| L2-ACT-0158 | space.wellness_fitness.reception_room | canonical_space_type | wellness_fitness | family.wellness_fitness.arrival | shared.arrival.reception_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0159 | family.wellness_fitness.training | space_family | wellness_fitness | family.wellness_fitness.training | none | grouping_identity | not_inferred | L2-W5 |
| L2-ACT-0160 | space.wellness_fitness.fitness_hall | canonical_space_type | wellness_fitness | family.wellness_fitness.training | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0161 | space.wellness_fitness.group_training_room | canonical_space_type | wellness_fitness | family.wellness_fitness.training | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0162 | family.wellness_fitness.changing_hygiene | space_family | wellness_fitness | family.wellness_fitness.changing_hygiene | none | grouping_identity | not_inferred | L2-W5 |
| L2-ACT-0163 | space.wellness_fitness.changing_room | canonical_space_type | wellness_fitness | family.wellness_fitness.changing_hygiene | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0164 | space.wellness_fitness.shower_room | canonical_space_type | wellness_fitness | family.wellness_fitness.changing_hygiene | shared.sanitary.shower_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0165 | family.wellness_fitness.support | space_family | wellness_fitness | family.wellness_fitness.support | none | grouping_identity | not_inferred | L2-W5 |
| L2-ACT-0166 | space.wellness_fitness.coach_room | canonical_space_type | wellness_fitness | family.wellness_fitness.support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0167 | space.wellness_fitness.first_aid_room | canonical_space_type | wellness_fitness | family.wellness_fitness.support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0168 | space.wellness_fitness.equipment_storage | canonical_space_type | wellness_fitness | family.wellness_fitness.support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0169 | space.wellness_fitness.staff_room | canonical_space_type | wellness_fitness | family.wellness_fitness.support | shared.support.staff_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0170 | space.wellness_fitness.accessible_toilet | canonical_space_type | wellness_fitness | family.wellness_fitness.support | shared.sanitary.accessible_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0171 | zone.wellness_fitness.reception | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0172 | zone.wellness_fitness.locker | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0173 | zone.wellness_fitness.changing_cubicle | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0174 | zone.wellness_fitness.cardio | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0175 | zone.wellness_fitness.strength_training | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0176 | zone.wellness_fitness.free_weights | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0177 | zone.wellness_fitness.functional_training | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0178 | zone.wellness_fitness.stretching | functional_zone | wellness_fitness | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W5 |
| L2-ACT-0179 | facility.healthcare.medical_center | facility_context | healthcare | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0180 | facility.healthcare.clinic | facility_context | healthcare | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0181 | facility.healthcare.dental_clinic | facility_context | healthcare | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0182 | facility.healthcare.private_medical_practice | facility_context | healthcare | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0183 | facility.healthcare.rehabilitation_center | facility_context | healthcare | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0184 | facility.healthcare.psychology_clinic | facility_context | healthcare | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0185 | family.healthcare.consultation_diagnostics | space_family | healthcare | family.healthcare.consultation_diagnostics | none | grouping_identity | not_inferred | L2-W6 |
| L2-ACT-0186 | space.healthcare.consultation_room | canonical_space_type | healthcare | family.healthcare.consultation_diagnostics | shared.consultation.consultation_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0187 | space.healthcare.examination_room | canonical_space_type | healthcare | family.healthcare.consultation_diagnostics | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0188 | space.healthcare.diagnostic_room | canonical_space_type | healthcare | family.healthcare.consultation_diagnostics | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0189 | space.healthcare.dental_treatment_room | canonical_space_type | healthcare | family.healthcare.consultation_diagnostics | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0190 | family.healthcare.treatment_therapy | space_family | healthcare | family.healthcare.treatment_therapy | none | grouping_identity | not_inferred | L2-W6 |
| L2-ACT-0191 | space.healthcare.procedure_room | canonical_space_type | healthcare | family.healthcare.treatment_therapy | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0192 | space.healthcare.therapy_room | canonical_space_type | healthcare | family.healthcare.treatment_therapy | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0193 | space.healthcare.rehabilitation_therapy_room | canonical_space_type | healthcare | family.healthcare.treatment_therapy | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0194 | family.healthcare.arrival_waiting | space_family | healthcare | family.healthcare.arrival_waiting | none | grouping_identity | not_inferred | L2-W6 |
| L2-ACT-0195 | space.healthcare.reception_room | canonical_space_type | healthcare | family.healthcare.arrival_waiting | shared.arrival.reception_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0196 | space.healthcare.waiting_room | canonical_space_type | healthcare | family.healthcare.arrival_waiting | shared.arrival.waiting_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0197 | family.healthcare.clinical_support | space_family | healthcare | family.healthcare.clinical_support | none | grouping_identity | not_inferred | L2-W6 |
| L2-ACT-0198 | space.healthcare.sterilization_room | canonical_space_type | healthcare | family.healthcare.clinical_support | shared.support.sterilization_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0199 | space.healthcare.medical_storage | canonical_space_type | healthcare | family.healthcare.clinical_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0200 | space.healthcare.staff_room | canonical_space_type | healthcare | family.healthcare.clinical_support | shared.support.staff_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0201 | family.healthcare.sanitary | space_family | healthcare | family.healthcare.sanitary | none | grouping_identity | not_inferred | L2-W6 |
| L2-ACT-0202 | space.healthcare.patient_toilet | canonical_space_type | healthcare | family.healthcare.sanitary | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0203 | space.healthcare.accessible_toilet | canonical_space_type | healthcare | family.healthcare.sanitary | shared.sanitary.accessible_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0204 | zone.healthcare.reception | functional_zone | healthcare | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0205 | zone.healthcare.waiting | functional_zone | healthcare | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W6 |
| L2-ACT-0206 | use.healthcare.general_medical_consultation | space_use | healthcare | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0207 | use.healthcare.clinical_psychology_consultation | space_use | healthcare | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0208 | use.healthcare.medical_massage | space_use | healthcare | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0209 | use.healthcare.rehabilitation_therapy | space_use | healthcare | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0210 | use.healthcare.dental_treatment | space_use | healthcare | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W6 |
| L2-ACT-0211 | facility.education.educational_center | facility_context | education | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0212 | facility.education.child_development_center | facility_context | education | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0213 | facility.education.kindergarten | facility_context | education | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0214 | facility.education.preschool_center | facility_context | education | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0215 | facility.education.tutoring_center | facility_context | education | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0216 | facility.education.language_school | facility_context | education | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0217 | family.education.learning | space_family | education | family.education.learning | none | grouping_identity | not_inferred | L2-W7 |
| L2-ACT-0218 | space.education.classroom | canonical_space_type | education | family.education.learning | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0219 | space.education.training_room | canonical_space_type | education | family.education.learning | shared.learning.training_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0220 | space.education.activity_room | canonical_space_type | education | family.education.learning | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0221 | space.education.creative_workshop | canonical_space_type | education | family.education.learning | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0222 | family.education.child_development | space_family | education | family.education.child_development | none | grouping_identity | not_inferred | L2-W7 |
| L2-ACT-0223 | space.education.playroom | canonical_space_type | education | family.education.child_development | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0224 | space.education.nap_room | canonical_space_type | education | family.education.child_development | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0225 | space.education.sensory_room | canonical_space_type | education | family.education.child_development | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0226 | space.education.specialist_therapy_room | canonical_space_type | education | family.education.child_development | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0227 | family.education.staff_admin | space_family | education | family.education.staff_admin | none | grouping_identity | not_inferred | L2-W7 |
| L2-ACT-0228 | space.education.teacher_room | canonical_space_type | education | family.education.staff_admin | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0229 | space.education.administration_office | canonical_space_type | education | family.education.staff_admin | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0230 | space.education.waiting_room | canonical_space_type | education | family.education.staff_admin | shared.arrival.waiting_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0231 | space.education.medical_room | canonical_space_type | education | family.education.staff_admin | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0232 | family.education.children_support | space_family | education | family.education.children_support | none | grouping_identity | not_inferred | L2-W7 |
| L2-ACT-0233 | space.education.children_cloakroom | canonical_space_type | education | family.education.children_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0234 | space.education.children_toilet | canonical_space_type | education | family.education.children_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0235 | space.education.accessible_toilet | canonical_space_type | education | family.education.children_support | shared.sanitary.accessible_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0236 | zone.education.waiting | functional_zone | education | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W7 |
| L2-ACT-0237 | use.education.language_instruction | space_use | education | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0238 | use.education.child_psychology_support | space_use | education | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0239 | use.education.speech_therapy | space_use | education | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0240 | use.education.sensory_development | space_use | education | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0241 | use.education.creative_learning | space_use | education | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W7 |
| L2-ACT-0242 | facility.professional_services.law_office | facility_context | professional_services | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0243 | facility.professional_services.accounting_practice | facility_context | professional_services | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0244 | facility.professional_services.psychology_practice | facility_context | professional_services | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0245 | facility.professional_services.notary_office | facility_context | professional_services | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0246 | facility.professional_services.consulting_office | facility_context | professional_services | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0247 | family.professional_services.client_work | space_family | professional_services | family.professional_services.client_work | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0248 | space.professional_services.private_office | canonical_space_type | professional_services | family.professional_services.client_work | shared.work.private_office | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0249 | space.professional_services.consultation_room | canonical_space_type | professional_services | family.professional_services.client_work | shared.consultation.consultation_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0250 | space.professional_services.client_meeting_room | canonical_space_type | professional_services | family.professional_services.client_work | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0251 | family.professional_services.arrival_waiting | space_family | professional_services | family.professional_services.arrival_waiting | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0252 | space.professional_services.reception_room | canonical_space_type | professional_services | family.professional_services.arrival_waiting | shared.arrival.reception_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0253 | space.professional_services.waiting_room | canonical_space_type | professional_services | family.professional_services.arrival_waiting | shared.arrival.waiting_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0254 | family.professional_services.records_support | space_family | professional_services | family.professional_services.records_support | none | grouping_identity | not_inferred | L2-W3 |
| L2-ACT-0255 | space.professional_services.archive_room | canonical_space_type | professional_services | family.professional_services.records_support | shared.records.archive_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0256 | space.professional_services.document_storage | canonical_space_type | professional_services | family.professional_services.records_support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0257 | space.professional_services.staff_room | canonical_space_type | professional_services | family.professional_services.records_support | shared.support.staff_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0258 | space.professional_services.customer_toilet | canonical_space_type | professional_services | family.professional_services.records_support | shared.sanitary.customer_toilet | classification_target<br>output_label | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0259 | zone.professional_services.reception | functional_zone | professional_services | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0260 | zone.professional_services.waiting | functional_zone | professional_services | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W3 |
| L2-ACT-0261 | use.professional_services.legal_consultation | space_use | professional_services | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0262 | use.professional_services.accounting_services | space_use | professional_services | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0263 | use.professional_services.tax_consultation | space_use | professional_services | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0264 | use.professional_services.psychological_consultation | space_use | professional_services | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0265 | use.professional_services.notary_services | space_use | professional_services | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0266 | use.professional_services.business_consultation | space_use | professional_services | not_applicable | none | supporting_semantic_qualifier | user_declared<br>metadata_supplied<br>hybrid | L2-W3 |
| L2-ACT-0267 | facility.culture_entertainment.gaming_arcade | facility_context | culture_entertainment | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W8 |
| L2-ACT-0268 | facility.culture_entertainment.gaming_club | facility_context | culture_entertainment | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W8 |
| L2-ACT-0269 | facility.culture_entertainment.esports_club | facility_context | culture_entertainment | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W8 |
| L2-ACT-0270 | facility.culture_entertainment.vr_arcade | facility_context | culture_entertainment | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W8 |
| L2-ACT-0271 | facility.culture_entertainment.billiard_club | facility_context | culture_entertainment | not_applicable | none | supporting_context<br>applicability_constraint | user_declared<br>metadata_supplied<br>hybrid | L2-W8 |
| L2-ACT-0272 | family.culture_entertainment.gaming | space_family | culture_entertainment | family.culture_entertainment.gaming | none | grouping_identity | not_inferred | L2-W8 |
| L2-ACT-0273 | space.culture_entertainment.gaming_hall | canonical_space_type | culture_entertainment | family.culture_entertainment.gaming | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0274 | space.culture_entertainment.esports_room | canonical_space_type | culture_entertainment | family.culture_entertainment.gaming | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0275 | space.culture_entertainment.vr_room | canonical_space_type | culture_entertainment | family.culture_entertainment.gaming | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0276 | space.culture_entertainment.billiard_hall | canonical_space_type | culture_entertainment | family.culture_entertainment.gaming | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0277 | family.culture_entertainment.arrival_waiting | space_family | culture_entertainment | family.culture_entertainment.arrival_waiting | none | grouping_identity | not_inferred | L2-W8 |
| L2-ACT-0278 | space.culture_entertainment.reception_room | canonical_space_type | culture_entertainment | family.culture_entertainment.arrival_waiting | shared.arrival.reception_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0279 | space.culture_entertainment.waiting_room | canonical_space_type | culture_entertainment | family.culture_entertainment.arrival_waiting | shared.arrival.waiting_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0280 | family.culture_entertainment.support | space_family | culture_entertainment | family.culture_entertainment.support | none | grouping_identity | not_inferred | L2-W8 |
| L2-ACT-0281 | space.culture_entertainment.staff_room | canonical_space_type | culture_entertainment | family.culture_entertainment.support | shared.support.staff_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0282 | space.culture_entertainment.storage_room | canonical_space_type | culture_entertainment | family.culture_entertainment.support | shared.storage.storage_room | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0283 | space.culture_entertainment.visitor_toilet | canonical_space_type | culture_entertainment | family.culture_entertainment.support | none | classification_target<br>output_label | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0284 | zone.culture_entertainment.reception | functional_zone | culture_entertainment | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W8 |
| L2-ACT-0285 | zone.culture_entertainment.waiting | functional_zone | culture_entertainment | not_applicable | none | secondary_output | visual_inference<br>hybrid | L2-W8 |

Counts exclude every identity marked Layer 1-only:

```text
Platform Domains: 10
Facility Contexts: 45
Space Families: 46
Canonical Space Types: 132
Functional Zones: 37
Space Uses: 21
Supporting Components: 4
Total selected Layer 2 identities: 285
```


# 23. Exact Facility Context ↔ Canonical Space Type Applicability Registry

Applicability meanings:

```text
core:
normal supported facility profile; does not assert physical presence
in every real instance.

conditional:
valid only when facility program, layout or supplied metadata supports it.

not_applicable:
not selected for this Facility Context in the current Layer 2 profile.
```

| facilityContextId | canonicalSpaceTypeId | applicability | conditionExpression | activationRole | evidenceMode |
|---|---|---|---|---|---|
| facility.residential.apartment | space.residential.living_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.bedroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.toilet_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.shower_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.combined_bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.entryway | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.vestibule | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.corridor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.dressing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.walk_in_closet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.balcony | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.terrace | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.attic | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.mansard_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.staircase_space | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.stair_hall | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.apartment | space.residential.garage | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.living_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.bedroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.toilet_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.shower_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.combined_bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.entryway | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.vestibule | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.corridor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.dressing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.walk_in_closet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.balcony | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.terrace | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.attic | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.mansard_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.staircase_space | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.stair_hall | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.private_house | space.residential.garage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.living_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.bedroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.toilet_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.shower_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.combined_bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.entryway | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.vestibule | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.corridor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.dressing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.walk_in_closet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.balcony | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.terrace | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.attic | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.mansard_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.staircase_space | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.stair_hall | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.cottage_house | space.residential.garage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.living_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.bedroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.toilet_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.shower_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.combined_bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.entryway | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.vestibule | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.corridor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.dressing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.walk_in_closet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.balcony | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.terrace | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.attic | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.mansard_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.staircase_space | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.stair_hall | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.country_house | space.residential.garage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.living_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.bedroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.toilet_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.shower_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.combined_bathroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.entryway | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.vestibule | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.corridor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.dressing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.walk_in_closet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.balcony | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.terrace | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.attic | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.mansard_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.staircase_space | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.stair_hall | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.residential.townhouse | space.residential.garage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.open_plan_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.private_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.focus_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.phone_booth | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.meeting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.conference_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.boardroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.break_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.office_kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.copy_print_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.server_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.office_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.office_corridor | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_suite | space.workplace.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.reception_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.waiting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.open_plan_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.private_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.focus_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.phone_booth | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.meeting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.conference_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.boardroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.break_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.office_kitchen | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.copy_print_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.server_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.office_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.office_corridor | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.office_building | space.workplace.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.reception_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.waiting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.open_plan_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.private_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.focus_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.phone_booth | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.meeting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.conference_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.boardroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.break_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.office_kitchen | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.copy_print_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.server_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.office_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.office_corridor | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.business_center | space.workplace.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.open_plan_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.private_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.focus_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.phone_booth | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.meeting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.conference_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.boardroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.break_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.office_kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.copy_print_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.server_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.office_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.office_corridor | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.workplace.coworking | space.workplace.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.dining_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.private_dining_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.commercial_kitchen | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.prep_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.dishwashing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.dry_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.cold_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.staff_changing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.service_corridor | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.waste_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.guest_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.cafe | space.food_service.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.dining_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.private_dining_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.commercial_kitchen | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.prep_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.dishwashing_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.dry_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.cold_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.staff_changing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.service_corridor | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.waste_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.guest_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.restaurant | space.food_service.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.dining_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.private_dining_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.commercial_kitchen | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.prep_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.dishwashing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.dry_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.cold_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.staff_changing_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.service_corridor | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.waste_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.guest_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.food_service.coffee_shop | space.food_service.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.sales_floor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.fitting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.stock_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.receiving_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.dry_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.cold_storage | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.back_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.customer_service_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.shop | space.retail.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.sales_floor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.fitting_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.stock_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.receiving_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.dry_storage | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.cold_storage | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.back_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.customer_service_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.grocery_store | space.retail.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.sales_floor | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.fitting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.stock_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.receiving_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.dry_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.cold_storage | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.back_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.customer_service_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.staff_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.retail.boutique | space.retail.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.service_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.private_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.cosmetology_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.massage_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.sterilization_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_salon | space.beauty_personal_care.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.service_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.private_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.cosmetology_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.massage_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.sterilization_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.hair_salon | space.beauty_personal_care.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.service_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.private_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.cosmetology_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.massage_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.sterilization_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.barbershop | space.beauty_personal_care.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.service_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.private_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.cosmetology_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.massage_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.sterilization_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.nail_salon | space.beauty_personal_care.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.service_hall | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.private_treatment_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.cosmetology_treatment_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.massage_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.sterilization_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.beauty_personal_care.beauty_cosmetology_studio | space.beauty_personal_care.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.fitness_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.group_training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.changing_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.shower_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.coach_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.first_aid_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.equipment_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.fitness_center | space.wellness_fitness.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.fitness_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.group_training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.changing_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.shower_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.coach_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.first_aid_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.equipment_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.gym | space.wellness_fitness.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.fitness_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.group_training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.changing_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.shower_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.coach_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.first_aid_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.equipment_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.wellness_fitness.sports_club | space.wellness_fitness.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.consultation_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.examination_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.diagnostic_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.dental_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.procedure_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.therapy_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.rehabilitation_therapy_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.sterilization_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.medical_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.patient_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.medical_center | space.healthcare.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.consultation_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.examination_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.diagnostic_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.dental_treatment_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.procedure_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.therapy_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.rehabilitation_therapy_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.sterilization_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.medical_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.patient_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.clinic | space.healthcare.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.consultation_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.examination_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.diagnostic_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.dental_treatment_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.procedure_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.rehabilitation_therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.sterilization_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.medical_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.patient_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.dental_clinic | space.healthcare.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.consultation_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.examination_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.diagnostic_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.dental_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.procedure_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.rehabilitation_therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.reception_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.waiting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.sterilization_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.medical_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.patient_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.private_medical_practice | space.healthcare.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.consultation_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.examination_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.diagnostic_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.dental_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.procedure_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.therapy_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.rehabilitation_therapy_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.sterilization_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.medical_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.patient_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.rehabilitation_center | space.healthcare.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.consultation_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.examination_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.diagnostic_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.dental_treatment_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.procedure_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.rehabilitation_therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.sterilization_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.medical_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.patient_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.healthcare.psychology_clinic | space.healthcare.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.classroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.training_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.activity_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.creative_workshop | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.playroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.nap_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.sensory_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.specialist_therapy_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.teacher_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.administration_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.medical_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.children_cloakroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.children_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.educational_center | space.education.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.classroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.activity_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.creative_workshop | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.playroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.nap_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.sensory_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.specialist_therapy_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.teacher_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.administration_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.medical_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.children_cloakroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.children_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.child_development_center | space.education.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.classroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.training_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.activity_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.creative_workshop | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.playroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.nap_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.sensory_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.specialist_therapy_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.teacher_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.administration_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.waiting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.medical_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.children_cloakroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.children_toilet | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.kindergarten | space.education.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.classroom | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.training_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.activity_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.creative_workshop | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.playroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.nap_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.sensory_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.specialist_therapy_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.teacher_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.administration_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.waiting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.medical_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.children_cloakroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.children_toilet | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.preschool_center | space.education.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.classroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.training_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.activity_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.creative_workshop | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.playroom | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.nap_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.sensory_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.specialist_therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.teacher_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.administration_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.medical_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.children_cloakroom | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.children_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.tutoring_center | space.education.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.classroom | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.training_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.activity_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.creative_workshop | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.playroom | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.nap_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.sensory_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.specialist_therapy_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.teacher_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.administration_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.medical_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.children_cloakroom | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.children_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.education.language_school | space.education.accessible_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.private_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.consultation_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.client_meeting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.document_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.law_office | space.professional_services.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.private_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.consultation_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.client_meeting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.document_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.accounting_practice | space.professional_services.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.private_office | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.consultation_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.client_meeting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.document_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.psychology_practice | space.professional_services.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.private_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.consultation_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.client_meeting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.document_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.notary_office | space.professional_services.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.private_office | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.consultation_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.client_meeting_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.archive_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.document_storage | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.professional_services.consulting_office | space.professional_services.customer_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.gaming_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.esports_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.vr_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.billiard_hall | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_arcade | space.culture_entertainment.visitor_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.gaming_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.esports_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.vr_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.billiard_hall | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.gaming_club | space.culture_entertainment.visitor_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.gaming_hall | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.esports_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.vr_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.billiard_hall | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.esports_club | space.culture_entertainment.visitor_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.gaming_hall | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.esports_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.vr_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.billiard_hall | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.vr_arcade | space.culture_entertainment.visitor_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.gaming_hall | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.esports_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.vr_room | not_applicable | not selected for this Facility Context in the current Layer 2 applicability profile | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.billiard_hall | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.reception_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.waiting_room | core | normal supported facility profile; physical presence remains instance-dependent | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.staff_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.storage_room | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |
| facility.culture_entertainment.billiard_club | space.culture_entertainment.visitor_toilet | conditional | requires facility program, layout or supplied metadata supporting this space | classification_target | visual_inference|hybrid |

Every selected Facility Context × every selected same-domain Canonical Space Type pair appears exactly once.


# 24. Exact Canonical Space Type ↔ Functional Zone Registry

| functionalZoneId | canonicalSpaceTypeId | facilityContextApplicability | applicability | conditionExpression |
|---|---|---|---|---|
| `zone.workplace.reception` | `space.workplace.reception_room` | `facility.workplace.office_suite`<br>`facility.workplace.office_building`<br>`facility.workplace.business_center`<br>`facility.workplace.coworking` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.workplace.reception` | `space.workplace.open_plan_office` | `facility.workplace.office_suite`<br>`facility.workplace.office_building`<br>`facility.workplace.business_center`<br>`facility.workplace.coworking` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.workplace.waiting` | `space.workplace.waiting_room` | `facility.workplace.office_suite`<br>`facility.workplace.office_building`<br>`facility.workplace.business_center`<br>`facility.workplace.coworking` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.workplace.waiting` | `space.workplace.reception_room` | `facility.workplace.office_suite`<br>`facility.workplace.office_building`<br>`facility.workplace.business_center`<br>`facility.workplace.coworking` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.food_service.cashier` | `space.food_service.dining_room` | `facility.food_service.cafe`<br>`facility.food_service.restaurant`<br>`facility.food_service.coffee_shop` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.food_service.waiter_station` | `space.food_service.dining_room` | `facility.food_service.cafe`<br>`facility.food_service.restaurant` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.food_service.takeaway` | `space.food_service.dining_room` | `facility.food_service.cafe`<br>`facility.food_service.restaurant`<br>`facility.food_service.coffee_shop` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.food_service.delivery_pickup` | `space.food_service.dining_room` | `facility.food_service.cafe`<br>`facility.food_service.restaurant`<br>`facility.food_service.coffee_shop` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.food_service.queue` | `space.food_service.dining_room` | `facility.food_service.cafe`<br>`facility.food_service.restaurant`<br>`facility.food_service.coffee_shop` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.checkout` | `space.retail.sales_floor` | `facility.retail.shop`<br>`facility.retail.grocery_store`<br>`facility.retail.boutique` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.queue` | `space.retail.sales_floor` | `facility.retail.shop`<br>`facility.retail.grocery_store`<br>`facility.retail.boutique` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.display` | `space.retail.sales_floor` | `facility.retail.shop`<br>`facility.retail.grocery_store`<br>`facility.retail.boutique` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.customer_service` | `space.retail.sales_floor` | `facility.retail.shop`<br>`facility.retail.grocery_store`<br>`facility.retail.boutique` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.produce` | `space.retail.sales_floor` | `facility.retail.grocery_store` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.bakery` | `space.retail.sales_floor` | `facility.retail.grocery_store` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.meat` | `space.retail.sales_floor` | `facility.retail.grocery_store` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.retail.dairy` | `space.retail.sales_floor` | `facility.retail.grocery_store` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.hair_service` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.hair_salon` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.hair_washing` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.hair_salon`<br>`facility.beauty_personal_care.barbershop` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.barber_service` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.barbershop` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.nail_service` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.nail_salon` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.makeup` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.beauty_salon` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.waiting` | `space.beauty_personal_care.waiting_room` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.hair_salon`<br>`facility.beauty_personal_care.barbershop`<br>`facility.beauty_personal_care.nail_salon`<br>`facility.beauty_personal_care.beauty_cosmetology_studio` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.waiting` | `space.beauty_personal_care.reception_room` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.hair_salon`<br>`facility.beauty_personal_care.barbershop`<br>`facility.beauty_personal_care.nail_salon`<br>`facility.beauty_personal_care.beauty_cosmetology_studio` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.product_display` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.hair_salon`<br>`facility.beauty_personal_care.barbershop`<br>`facility.beauty_personal_care.nail_salon`<br>`facility.beauty_personal_care.beauty_cosmetology_studio` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.beauty_personal_care.product_display` | `space.beauty_personal_care.reception_room` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.hair_salon`<br>`facility.beauty_personal_care.barbershop`<br>`facility.beauty_personal_care.nail_salon`<br>`facility.beauty_personal_care.beauty_cosmetology_studio` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.reception` | `space.wellness_fitness.reception_room` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.locker` | `space.wellness_fitness.changing_room` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.changing_cubicle` | `space.wellness_fitness.changing_room` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.cardio` | `space.wellness_fitness.fitness_hall` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.strength_training` | `space.wellness_fitness.fitness_hall` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.free_weights` | `space.wellness_fitness.fitness_hall` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.functional_training` | `space.wellness_fitness.fitness_hall` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.functional_training` | `space.wellness_fitness.group_training_room` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.stretching` | `space.wellness_fitness.fitness_hall` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.wellness_fitness.stretching` | `space.wellness_fitness.group_training_room` | `facility.wellness_fitness.fitness_center`<br>`facility.wellness_fitness.gym`<br>`facility.wellness_fitness.sports_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.healthcare.reception` | `space.healthcare.reception_room` | `facility.healthcare.medical_center`<br>`facility.healthcare.clinic`<br>`facility.healthcare.dental_clinic`<br>`facility.healthcare.private_medical_practice`<br>`facility.healthcare.rehabilitation_center`<br>`facility.healthcare.psychology_clinic` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.healthcare.waiting` | `space.healthcare.waiting_room` | `facility.healthcare.medical_center`<br>`facility.healthcare.clinic`<br>`facility.healthcare.dental_clinic`<br>`facility.healthcare.private_medical_practice`<br>`facility.healthcare.rehabilitation_center`<br>`facility.healthcare.psychology_clinic` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.healthcare.waiting` | `space.healthcare.reception_room` | `facility.healthcare.medical_center`<br>`facility.healthcare.clinic`<br>`facility.healthcare.dental_clinic`<br>`facility.healthcare.private_medical_practice`<br>`facility.healthcare.rehabilitation_center`<br>`facility.healthcare.psychology_clinic` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.education.waiting` | `space.education.waiting_room` | `facility.education.educational_center`<br>`facility.education.child_development_center`<br>`facility.education.kindergarten`<br>`facility.education.preschool_center`<br>`facility.education.tutoring_center`<br>`facility.education.language_school` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.professional_services.reception` | `space.professional_services.reception_room` | `facility.professional_services.law_office`<br>`facility.professional_services.accounting_practice`<br>`facility.professional_services.psychology_practice`<br>`facility.professional_services.notary_office`<br>`facility.professional_services.consulting_office` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.professional_services.waiting` | `space.professional_services.waiting_room` | `facility.professional_services.law_office`<br>`facility.professional_services.accounting_practice`<br>`facility.professional_services.psychology_practice`<br>`facility.professional_services.notary_office`<br>`facility.professional_services.consulting_office` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.professional_services.waiting` | `space.professional_services.reception_room` | `facility.professional_services.law_office`<br>`facility.professional_services.accounting_practice`<br>`facility.professional_services.psychology_practice`<br>`facility.professional_services.notary_office`<br>`facility.professional_services.consulting_office` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.culture_entertainment.reception` | `space.culture_entertainment.reception_room` | `facility.culture_entertainment.gaming_arcade`<br>`facility.culture_entertainment.gaming_club`<br>`facility.culture_entertainment.esports_club`<br>`facility.culture_entertainment.vr_arcade`<br>`facility.culture_entertainment.billiard_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.culture_entertainment.waiting` | `space.culture_entertainment.waiting_room` | `facility.culture_entertainment.gaming_arcade`<br>`facility.culture_entertainment.gaming_club`<br>`facility.culture_entertainment.esports_club`<br>`facility.culture_entertainment.vr_arcade`<br>`facility.culture_entertainment.billiard_club` | `allowed` | open functional zone; room-level enclosure is not implied |
| `zone.culture_entertainment.waiting` | `space.culture_entertainment.reception_room` | `facility.culture_entertainment.gaming_arcade`<br>`facility.culture_entertainment.gaming_club`<br>`facility.culture_entertainment.esports_club`<br>`facility.culture_entertainment.vr_arcade`<br>`facility.culture_entertainment.billiard_club` | `allowed` | open functional zone; room-level enclosure is not implied |

A Functional Zone does not imply a separately enclosed room. Facility applicability is explicit and does not automatically propagate to every facility that contains the parent room.


# 25. Exact Space Use Applicability Registry

| spaceUseId | canonicalSpaceTypeId | facilityContextApplicability | applicability | conditionExpression |
|---|---|---|---|---|
| `use.beauty_personal_care.hairdressing` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.hair_salon` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.beauty_personal_care.barbering` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.barbershop` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.beauty_personal_care.nail_care` | `space.beauty_personal_care.service_hall` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.nail_salon` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.beauty_personal_care.non_medical_cosmetology` | `space.beauty_personal_care.cosmetology_treatment_room` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.beauty_cosmetology_studio` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.beauty_personal_care.non_medical_cosmetology` | `space.beauty_personal_care.private_treatment_room` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.beauty_cosmetology_studio` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.beauty_personal_care.beauty_massage` | `space.beauty_personal_care.massage_treatment_room` | `facility.beauty_personal_care.beauty_salon`<br>`facility.beauty_personal_care.beauty_cosmetology_studio` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.healthcare.general_medical_consultation` | `space.healthcare.consultation_room` | `facility.healthcare.medical_center`<br>`facility.healthcare.clinic`<br>`facility.healthcare.private_medical_practice`<br>`facility.healthcare.rehabilitation_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.healthcare.clinical_psychology_consultation` | `space.healthcare.consultation_room` | `facility.healthcare.psychology_clinic`<br>`facility.healthcare.medical_center`<br>`facility.healthcare.clinic` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.healthcare.medical_massage` | `space.healthcare.therapy_room` | `facility.healthcare.rehabilitation_center`<br>`facility.healthcare.medical_center`<br>`facility.healthcare.clinic` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.healthcare.rehabilitation_therapy` | `space.healthcare.rehabilitation_therapy_room` | `facility.healthcare.rehabilitation_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.healthcare.dental_treatment` | `space.healthcare.dental_treatment_room` | `facility.healthcare.dental_clinic` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.language_instruction` | `space.education.classroom` | `facility.education.educational_center`<br>`facility.education.tutoring_center`<br>`facility.education.language_school` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.language_instruction` | `space.education.training_room` | `facility.education.educational_center`<br>`facility.education.tutoring_center`<br>`facility.education.language_school` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.child_psychology_support` | `space.education.specialist_therapy_room` | `facility.education.educational_center`<br>`facility.education.child_development_center`<br>`facility.education.kindergarten`<br>`facility.education.preschool_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.speech_therapy` | `space.education.specialist_therapy_room` | `facility.education.educational_center`<br>`facility.education.child_development_center`<br>`facility.education.kindergarten`<br>`facility.education.preschool_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.sensory_development` | `space.education.sensory_room` | `facility.education.child_development_center`<br>`facility.education.kindergarten`<br>`facility.education.preschool_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.sensory_development` | `space.education.activity_room` | `facility.education.child_development_center`<br>`facility.education.kindergarten`<br>`facility.education.preschool_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.creative_learning` | `space.education.creative_workshop` | `facility.education.educational_center`<br>`facility.education.child_development_center`<br>`facility.education.kindergarten`<br>`facility.education.preschool_center`<br>`facility.education.tutoring_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.education.creative_learning` | `space.education.activity_room` | `facility.education.educational_center`<br>`facility.education.child_development_center`<br>`facility.education.kindergarten`<br>`facility.education.preschool_center`<br>`facility.education.tutoring_center` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.legal_consultation` | `space.professional_services.consultation_room` | `facility.professional_services.law_office` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.legal_consultation` | `space.professional_services.private_office` | `facility.professional_services.law_office` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.accounting_services` | `space.professional_services.private_office` | `facility.professional_services.accounting_practice` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.tax_consultation` | `space.professional_services.consultation_room` | `facility.professional_services.accounting_practice`<br>`facility.professional_services.consulting_office` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.tax_consultation` | `space.professional_services.private_office` | `facility.professional_services.accounting_practice`<br>`facility.professional_services.consulting_office` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.psychological_consultation` | `space.professional_services.consultation_room` | `facility.professional_services.psychology_practice` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.notary_services` | `space.professional_services.private_office` | `facility.professional_services.notary_office` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.notary_services` | `space.professional_services.consultation_room` | `facility.professional_services.notary_office` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.business_consultation` | `space.professional_services.consultation_room` | `facility.professional_services.consulting_office` | `allowed` | Space Use qualifies function without creating a profession-named room |
| `use.professional_services.business_consultation` | `space.professional_services.client_meeting_room` | `facility.professional_services.consulting_office` | `allowed` | Space Use qualifies function without creating a profession-named room |

Space Use qualifies function without creating a profession-named room. Facility applicability is explicit.


# 26. Sequential wave definitions

```text
L2-W1 — Residential Core
L2-W2 — Residential Extension
L2-W3 — Workplace and Professional Services
L2-W4 — Retail and Food Service
L2-W5 — Beauty and Fitness
L2-W6 — Healthcare
L2-W7 — Education
L2-W8 — Gaming and Entertainment
```

The exact assignment is normative in the Layer 2 Activation Registry. Broad wave names are descriptive only.

Module-Completion-First rule:

```text
A wave may become operationally effective only after the preceding wave’s
required architecture, applicability, evaluation-methodology and governance
conditions are closed or an explicit Owner Decision authorizes a different order.
```


# 27. Runtime and migration model

```text
runtimeBindingKind:
space_type
facility_context
functional_zone
space_use
component
alias
not_applicable
```

```text
runtimeBindingStatus:
existing_legacy_flat_binding
canonical_binding_ready
unmapped_pending_authorization
not_applicable_to_space_type_runtime
alias_only
supporting_identity_only
```

Legacy values representing facilities are preserved:

```text
bindingKind:
existing_legacy_flat_binding

canonicalIdentityKind:
facility_context

migrationStatus:
preserved_pending_separately_authorized_runtime_normalization
```

An unmapped identity is an implementation gap, not a semantic failure.


# 28. Contract 1 / Contract 2 compatible root transition

## 28.1 Contract 1

```text
1. Draft complete Contract 1 successor.
2. Perform one full consolidated review of its exact hash.
3. Close the complete findings set in a corrected successor revision.
4. Issue a new Contract 1 candidate lock.
5. Preserve C1-REV12-CL-001 as historical and supersede it prospectively.
```

## 28.2 Contract 2

Contract 2 relation semantics remain unchanged, but its exact locked artifact must not be silently edited.

Required transition:

```text
1. Prepare a Contract 2 successor or formally governed metadata-sync revision.
2. Update the upstream Contract 1 revision, exact SHA-256 and candidate-lock reference.
3. Preserve all Contract 2 semantic Annexes unchanged unless a separately
   identified semantic requirement is approved.
4. Compute the exact new Contract 2 file SHA-256.
5. Perform one full consolidated review of that exact artifact.
6. Issue a new Contract 2 candidate lock.
7. Preserve C2-REV2-CL-001 as historical and supersede it prospectively.
8. Include both new candidate locks in the atomic root-transition acceptance set.
```


# 29. Downstream synchronization sequence

```text
1. Source freeze and exact verification
2. Contract 1 successor
3. Contract 1 consolidated review and successor lock
4. Contract 2 successor/metadata-sync revision
5. Contract 2 consolidated review and successor lock
6. Bounded Scope Decision Rev5 full supersession
7. Evaluation Threshold and Acceptance Plan Rev15 successor
8. Contracts 1–10 Preparation and Dependency Plan Rev11 successor
9. Module Applicability Profile Rev18 successor
10. Project Context v2.4 synchronization
11. Living Strategic Roadmap v1.4 synchronization
12. Atomic Owner acceptance of the compatible transition set
13. Layer 2 becomes effective only after the acceptance conditions are satisfied
14. Contract 3 drafting only after root closure
```

No former five-room corpus or evaluation counts may be reused without a successor Threshold Plan.


# 30. Blocking validation rules

The transition fails if any of the following is true:

```text
Layer 2 Activation Registry placed inside Layer 1
Layer 2 identity absent from Layer 1
duplicate stable ID
missing activationWaveId
an activation identity resolves to more than one wave
Facility-to-Space relation uses prose instead of exact IDs
a Facility Context × selected same-domain Space Type pair is missing
Facility Context represented as Canonical Space Type
Space Family omitted
Functional Zone represented as room without enclosure evidence
Space Use represented as profession-named room
Functional Zone lacks exact Facility Context applicability
Space Use lacks exact Facility Context applicability
Facility Context treated as default one-photo classification target
bathroom, shower_room, toilet_room or combined_bathroom overlap
hygienic spray treated as bathing shower
hallway activated as duplicate Canonical Space Type
stair_hall lacks positive and negative criteria
stair landing represented as room
garage attachment mode omitted
diagnostic_room left undefined
cross-domain identity inserted into the wrong domain hierarchy
shared concept group declared without registry membership
Russian `салон` mapped deterministically to one facility
beauty, wellness and healthcare boundaries conflated
supermarket or hypermarket accidentally activated
grocery_store omitted
grocery zones prohibited solely because supermarkets are inactive
professional_services lacks binding-gap status
profile selection misrepresented as effective activation
effective activation misrepresented as evaluation, corpus, implementation or production authorization
Contract 2 exact artifact edited without successor hash and lock
former five-room counts silently reused
Contract 3 drafted before root closure
```


# 31. Required deliverables

```text
A. Complete Contract 1 successor
B. Complete source-verified Layer 1 inventory
C. Shared Concept Group Registry
D. Exact Layer 2 Activation Registry
E. Exact Facility-to-Space Applicability Registry
F. Exact Space-to-Zone Applicability Registry
G. Exact Space Use Applicability Registry
H. Alias and localization registry
I. Runtime binding and migration gap register
J. Contract 2 successor / metadata-sync revision
K. New Contract 1 and Contract 2 candidate locks
L. Downstream synchronization map
M. One-pass consolidated review reports
N. Atomic Owner acceptance checklist
```


# 32. Non-authorization boundary

This directive does not authorize:

```text
repository persistence
git add, commit or push
runtime enum changes
schema or adapter changes
corpus preparation
annotation
provider/model evaluation
implementation
production rollout
real user photos
Contract 3 drafting before root closure
Diagnosability Architecture
Security Architecture
```


# 33. Closure of Revision 2 control-review findings

| Finding | Revision 3 closure |
|---|---|
| B-01 Layer 2 registry mixed into Layer 1 | Section 4 separates Layer 1, cross-layer and Layer 2 registries. |
| B-02 invalid applicability matrix | Section 23 supplies exact stable-ID relations for every Facility Context × selected same-domain Space Type pair. |
| B-03 waves not assigned | Section 22 assigns one exact wave to all 285 selected identities. |
| B-04 incomplete Contract 2 transition | Section 28.2 requires successor artifact, hash, review, new lock and atomic inclusion. |
| M-01 shared concept policy not operational | Sections 21 and 22 add registry membership and sharedConceptGroupId. |
| M-02 cross-domain identities in beauty hierarchy | Section 19 moves them to a cross-domain boundary registry. |
| M-03 stair_hall undefined | Section 20.2 provides positive and negative criteria. |
| M-04 diagnostic_room undefined | Section 20.4 supplies a non-overlapping definition. |
| M-05 source-freeze baseline incomplete | Section 6 lists every authoritative input and imposes a hard verification stop. |
| M-06 no mandatory definition schema | Section 8 mandates the full record schema for every Canonical Space Type. |
| M-07 premature closure claims | This closure table is generated only after physical corrections are present. |
| N-01 shower terminology informal | Section 20.1 distinguishes bathing shower and hygienic spray. |
| N-02 counts unclear | Section 22 explicitly excludes Layer 1-only entries. |
| N-03 waves use shorthand | Section 22 contains exact stable IDs for every assignment. |
| N-04 profile version unspecified | Section 7.1 defines profile ID and version policy. |


# 34. Final preparation state

```text
Corrected Revision 3:
READY FOR INDEPENDENT CONTROL REVIEW

Project Owner approval:
NOT YET RECORDED

Transfer to Claude Project:
NOT YET AUTHORIZED

Layer 2 effective activation:
NOT YET EFFECTIVE

Repository persistence:
NOT AUTHORIZED
```
