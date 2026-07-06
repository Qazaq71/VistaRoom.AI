# ED-001 — Project Test Runner

Status: Accepted

Date: 2026-07-06

Owner: Engineering

------------------------------------------------------------

## Context

VistaRoom AI has entered the engineering implementation phase after Architecture Freeze.

Gate 1 introduces executable contract verification for AI components.

The first component requiring verification is the ADR-005 Formatter Contract.

Repository inspection confirmed that, at the time of this decision, the project contained:

- no configured test runner;
- no test script;
- no testing dependencies;
- no *.test.ts or *.spec.ts files.

A project-wide testing strategy therefore had to be established before contract verification could become part of the engineering process.

------------------------------------------------------------

## Decision

Vitest is adopted as the standard project test runner for engineering contract tests and unit tests.

------------------------------------------------------------

## Rationale

Vitest was selected because it best matches the current engineering architecture of VistaRoom AI.

At the time of this decision the project stack consists primarily of:

- Next.js
- TypeScript
- React

Vitest was chosen because it:

- integrates naturally with the existing Next.js / TypeScript stack;
- introduces no conflicts with the current project dependencies;
- requires minimal configuration;
- provides very fast execution suitable for frequent Integration Gate verification;
- supports Jest-compatible describe / it / expect syntax, reducing onboarding effort and preserving future migration flexibility;
- is well suited for contract verification of AI components such as Formatter, Prompt Pipeline and Prompt Engine.

The first practical application of this decision is the verification of the ADR-005 Formatter Contract.

------------------------------------------------------------

## Alternatives Considered

### Jest

Advantages

- mature ecosystem;
- extensive community adoption;
- broad tooling support.

Reasons not selected

- provides no practical advantage for the current project architecture;
- introduces additional setup and maintenance overhead without solving any current engineering problem.

The decision may be revisited if future engineering requirements justify migration.

------------------------------------------------------------

## Scope

This decision applies to:

- contract tests;
- unit tests;
- TypeScript logic;
- AI component verification;
- Integration Gate verification.

This decision does NOT define:

- end-to-end testing;
- browser testing;
- Playwright;
- Cypress;
- visual regression testing;
- performance benchmarking;
- production monitoring.

Those decisions will be documented separately if required.

------------------------------------------------------------

## Consequences

As a consequence of this decision:

- package.json contains a Vitest test script;
- Vitest becomes the standard engineering test runner;
- ADR-005 Formatter contract tests become executable;
- future AI modules should provide contract tests using Vitest unless superseded by a later Engineering Decision.

------------------------------------------------------------

## Review Criteria

This Engineering Decision should only be reviewed if one or more of the following occurs:

- migration away from the current Next.js / TypeScript stack;
- project-wide testing requirements exceed Vitest capabilities;
- adoption of a unified enterprise testing platform;
- measurable engineering drawbacks are identified during future Integration Gates.

------------------------------------------------------------

## Related Documents

- Living Strategic Roadmap v1.3
- Project Context v2.0
- ADR-005 — Formatter decisionTrace Contract
- ADR-006
- Gate 1 — Integration Foundation
- Commit 2618e4c — Implement minimal ADR-005 formatter contract
