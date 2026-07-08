# Engineering Decisions

This document defines the Engineering Decision (ED) process for VistaRoom AI.

It is NOT an ADR. It is NOT Architecture documentation. It is a governance
document for implementation-level engineering decisions.

------------------------------------------------------------

## Purpose

An Engineering Decision (ED) documents an implementation-level decision that
affects engineering practice but does not change platform architecture.

Examples of decisions that belong in an ED:

- test runner
- formatter tooling
- code generation conventions
- linting
- formatting
- CI configuration
- development workflow
- repository structure
- coding standards

Architecture decisions belong in ADR. Engineering implementation decisions
belong in ED.

------------------------------------------------------------

## When to create an ED

Create an Engineering Decision whenever:

- the decision affects the engineering process;
- the decision affects implementation tooling;
- multiple engineers should follow the same practice;
- the decision is expected to remain valid over multiple Gates;
- the decision should be documented instead of living only in chat history.

Typical examples:

- choosing Vitest
- choosing ESLint configuration
- repository conventions
- branching strategy
- CI pipeline conventions
- code generation standards

------------------------------------------------------------

## When NOT to create an ED

Do NOT create an ED for:

- platform architecture;
- AI capability boundaries;
- domain model decisions;
- public contracts;
- module ownership;
- capability decomposition.

Those belong in ADR.

------------------------------------------------------------

## Decision Flow

```
New implementation question?
        ↓
Does it change platform architecture?
        ↓
       YES → Create ADR
        ↓
        NO
        ↓
Does it affect engineering practice, tooling,
development workflow or implementation standards?
        ↓
       YES → Create Engineering Decision (ED)
        ↓
        NO
        ↓
   Implement directly
```

An ADR is required whenever architecture changes.

An Engineering Decision is required whenever an engineering practice becomes
shared across the project.

Small, local implementation decisions usually do not require either an ADR
or an ED.

------------------------------------------------------------

## Difference between ADR and ED

| ADR | ED |
|---|---|
| architecture | engineering process |
| long-term platform structure | tooling |
| capabilities | implementation practices |
| contracts | developer workflow |
| module boundaries | testing |
| public interfaces | repository conventions |

ADR answers: **"How is the platform architected?"**

ED answers: **"How is the platform engineered?"**

------------------------------------------------------------

## Naming Convention

Engineering Decisions use sequential numbering:

```
ED-001
ED-002
ED-003
```

File naming follows the pattern `ED-XXX-short-description.md`, for example:

```
ED-001-project-test-runner.md
```

Numbers are never reused. Deprecated decisions remain in history rather than
being deleted or renumbered.

------------------------------------------------------------

## Recommended Document Structure

Each ED should contain the following sections:

- **Status** — current lifecycle state of the decision (see [Lifecycle](#lifecycle)).
- **Date** — date the decision was recorded.
- **Owner** — team or role responsible for the decision.
- **Context** — the engineering situation that made the decision necessary.
- **Decision** — the concise statement of what was decided.
- **Rationale** — why this option was chosen over the alternatives.
- **Alternatives Considered** — other options evaluated and why they were rejected.
- **Scope** — what the decision covers and, explicitly, what it does not cover.
- **Consequences** — the practical effects of adopting the decision.
- **Review Criteria** — the conditions under which the decision should be revisited.
- **Related Documents** — links to related ADRs, roadmap entries, or commits.

------------------------------------------------------------

## Relationship with ADR

An ED may reference an ADR. An ADR may reference an ED when useful.

However, an ED must never redefine architecture established by an ADR.

If an engineering decision requires an architectural change, an ED is not
sufficient — a new ADR must be created first.

------------------------------------------------------------

## Relationship with Governance Records

Engineering Decisions are distinct from the formal decision records kept
under [../governance/records/](../governance/records/). Governance records
capture organizational and process decisions at the project level; EDs
capture implementation-level engineering practice. An ED does not replace or
duplicate the governance decision process described in
[../governance/decision-playbook/](../governance/decision-playbook/).

------------------------------------------------------------

## Documentation Hierarchy

Engineering Decisions sit inside a larger VistaRoom AI documentation
ecosystem:

```
Platform Vision
        ↓
Living Strategic Roadmap
        ↓
Architecture Decision Records (ADR)
        ↓
Engineering Decisions (ED)
        ↓
Implementation
        ↓
Tests
```

Architecture answers: **"What should the platform become?"**

Engineering answers: **"How should we implement it consistently?"**

Implementation answers: **"How is the solution built?"**

Tests answer: **"How do we verify the implementation?"**

------------------------------------------------------------

## Lifecycle

```
Proposal
   ↓
Accepted
   ↓
Implemented
   ↓
Deprecated (optional)
```

------------------------------------------------------------

## Repository Location

Engineering Decisions live in:

```
docs/engineering-decisions/
```

ADR documents remain in:

```
docs/adr/
```

------------------------------------------------------------

## Initial Engineering Decisions

- [ED-001 — Project Test Runner (Vitest)](ED-001-project-test-runner.md)
- [ED-002 — ACS-004/ADR-005 Type Naming (Track-1 Collision Avoidance)](ED-002-acs004-type-naming.md)
- [ED-004 — ADR-006 Integration Readiness Assessment](ED-004-ADR-006-Integration-Readiness-Assessment.md)
