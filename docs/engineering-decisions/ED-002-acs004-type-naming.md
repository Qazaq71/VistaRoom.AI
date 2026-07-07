# ED-002 — ACS-004/ADR-005 Type Naming (Track-1 Collision Avoidance)

Status: Accepted

Date: 2026-07-07

Owner: Engineering

Accepted by: Project Owner (2026-07-07)

------------------------------------------------------------

## Context

ACS-004 (Prompt Intelligence) and ADR-005 (Formatter decisionTrace Contract)
define their Public Contracts in language-agnostic form, using the bare
names `PromptDraft`, `RuleSet`, `DecisionRecord`. Both Formatter
(`src/lib/interior/prompt-engine/formatter/`, ADR-005) and Prompt Builder +
Rule Engine (`src/lib/interior/prompt-engine/acs004-prompt-builder-rules/`,
Gate 1) implement these contracts as concrete TypeScript inside
`src/lib/interior/prompt-engine/`, which already contains a Track-1
implementation with its own types of the same or adjacent names:

- `src/lib/interior/prompt-engine/builder/PromptDraft.ts:35` — Track-1
  `PromptDraft`, a container of nine domain sub-contexts (`room`, `style`,
  `materials`, `furniture`, `lighting`, `decor`, `constraints`, `negative`,
  `metadata`). Structurally incompatible with ACS-004's `PromptDraft`
  (a flat `{ elements: [{ element, value, sourceRule }] }` list).
- `src/lib/interior/prompt-engine/types.ts:93` — Track-1 `PromptRuleSet`,
  an unrelated rule-grouping entity for `PromptContext`.
- `src/lib/interior/prompt-engine/types.ts:11` — Track-1 `PromptResult`
  (`positivePrompt`/`negativePrompt`), structurally incompatible with
  ADR-005's Formatter output (`promptString` + `decisionTrace`).

Reusing the bare ACS-004/ADR-005 names as-is for the new TypeScript
declarations would either collide at compile time (same name, same
directory tree, different shape) or read as if the new types extended or
replaced the existing Track-1 ones, which they do not — Track-1 remains
legacy and unmodified (Architecture Freeze Resolution R1/R3/R4;
`Gate1-Prompt-Pipeline-TZ.md` section 6).

------------------------------------------------------------

## Decision

Where a bare ACS-004/ADR-005 contract name collides with an existing
Track-1 type in `src/lib/interior/prompt-engine/`, the TypeScript
implementation uses a disambiguated name instead of the bare contract
name. Where no collision exists, the bare contract name is reused
unchanged. Function names from the ACS-004 Public Contract
(`buildPromptDraft`, `applyRules`, `format`) are never renamed — only
type names are disambiguated.

### Type mapping

| ACS-004 / ADR-005 contract name | Concrete TypeScript name | Declared in | Reused as-is? | Reason |
|---|---|---|---|---|
| `PromptDraft` (Formatter input/output shape) | `FormatterPromptDraft` | `formatter/formatter.types.ts` | No | Collides with Track-1 `PromptDraft` (`builder/PromptDraft.ts:35`) — different shape, same name would be a compile-time and conceptual collision. |
| element of `PromptDraft.elements[]` (unnamed in contract text) | `FormatterPromptElement` | `formatter/formatter.types.ts` | No | Declared to pair with `FormatterPromptDraft`; no Track-1 equivalent, named for consistency with it. |
| `RuleSet` (`applyRules` second parameter) | `Acs004RuleSet` | `acs004-prompt-builder-rules/acs004-prompt-builder-rules.types.ts` | No | Collides in meaning (not compile-time, but same module, adjacent directory) with Track-1 `PromptRuleSet` (`types.ts:93`). |
| `DecisionRecord` (`decisionTrace[]` entry) | `DecisionRecord` | `formatter/formatter.types.ts` | Yes | No Track-1 equivalent exists — reused verbatim, unchanged. |
| Formatter's `{ promptString, decisionTrace }` return shape (unnamed in ACS-004 contract text) | `FormatterResult` | `formatter/formatter.types.ts` | No | Collides with Track-1 `PromptResult` (`types.ts:11`, `positivePrompt`/`negativePrompt` shape). |
| `domainDecisions[]` entry (ACS-004 Inputs) | `DomainDecision` | `acs004-prompt-builder-rules/acs004-prompt-builder-rules.types.ts` | Yes (new type, no Track-1 equivalent) | Structurally identical to `FormatterPromptElement` but declared separately: Prompt Builder does not import Formatter's internal types as its own input contract, only converts into them at the output of `buildPromptDraft`. |

Contract function names (`buildPromptDraft`, `applyRules`, `format`) are
kept identical to the ACS-004/ADR-005 Public Contract in all cases —
renaming a function would change the contract itself, which this decision
does not do.

------------------------------------------------------------

## Rationale

- Track-1 (`types.ts`, `builder/`, `rules/`, `pipeline/`, `templates/`,
  `validators/`) is frozen legacy and must not be modified or reinterpreted
  (Architecture Freeze Resolution R1/R3). Renaming Track-1's existing
  `PromptDraft`/`PromptRuleSet`/`PromptResult` to free up the bare names
  for ACS-004 was therefore not an available option.
- ADR-005 already established this exact precedent for Formatter
  (`formatter.types.ts` docstring: "Independent of Track-1 ... new names to
  avoid collision, per Architecture Freeze Resolution R4"). Gate 1 Prompt
  Builder + Rule Engine applies the same precedent rather than introducing
  a second, inconsistent convention.
- Disambiguating only where a real collision exists (and reusing the bare
  name otherwise, as with `DecisionRecord`) keeps the implementation names
  as close to the ACS-004/ADR-005 contract vocabulary as the coexistence
  with Track-1 allows, rather than prefixing everything defensively.
- Contract function names are left untouched because ACS-004/ADR-005 fix
  them as part of the Public Contract; renaming a function would be an
  architecture-level change requiring an ADR, not an engineering-level
  naming decision.

------------------------------------------------------------

## Alternatives Considered

### Reuse bare `PromptDraft`/`RuleSet`/`PromptResult` names, shadowing Track-1 via module-local imports

Advantages

- Implementation types match the ACS-004/ADR-005 contract text exactly.

Reasons not selected

- `PromptDraft` would be declared twice with incompatible shapes inside
  the same `prompt-engine/` tree, relying on callers never importing both
  from the wrong path — a latent source of confusion and mis-import for
  any future reader or agent, not just a cosmetic issue.

### Migrate/rename Track-1's `PromptDraft`/`PromptRuleSet`/`PromptResult`

Advantages

- Frees up the bare contract names for ACS-004 use without any prefix.

Reasons not selected

- Track-1 is explicitly frozen and out of scope for Gate 1 (Architecture
  Freeze Resolution R1/R3; `Gate1-Prompt-Pipeline-TZ.md` section 6).
  Modifying it would exceed this decision's scope and risk regressions in
  code this Gate does not own.

------------------------------------------------------------

## Scope

This decision applies to:

- TypeScript type names used to implement ACS-004 (Prompt Builder, Rule
  Engine) and ADR-005 (Formatter) inside `src/lib/interior/prompt-engine/`.
- Future ACS-004 components implemented in the same directory tree
  (Prompt Reasoning, full `refinePromptDraft` lifecycle), where the same
  Track-1 collisions apply.

This decision does NOT define:

- Any change to the ACS-004 or ADR-005 Public Contract (function
  signatures, parameter names, return semantics).
- Any change to Track-1 code, types, or file structure.
- Naming conventions for AI capabilities outside
  `src/lib/interior/prompt-engine/`.

------------------------------------------------------------

## Consequences

- `FormatterPromptDraft`, `FormatterPromptElement`, `FormatterResult`, and
  `Acs004RuleSet` remain the concrete names used in code; `DecisionRecord`
  and `DomainDecision` remain unprefixed.
- Future readers/agents should consult the mapping table above rather than
  assume the bare ACS-004/ADR-005 contract names exist as TypeScript
  declarations in this repository.
- Any new ACS-004 component added to this directory must check for a
  Track-1 name collision before declaring a bare contract-name type, and
  follow the same disambiguation pattern if one exists.

------------------------------------------------------------

## Review Criteria

This Engineering Decision should only be reviewed if one or more of the
following occurs:

- Track-1 (`prompt-engine/types.ts`, `builder/`, `rules/`) is deprecated or
  removed, eliminating the underlying collisions.
- ACS-004 Public Contract is revised in a way that changes the shapes
  described in the mapping table.
- A future ADR formally migrates Track-1 onto the ACS-004/ADR-005 type
  vocabulary, superseding the need for disambiguated names.

------------------------------------------------------------

## Related Documents

- ACS-004 — Prompt Intelligence (`docs/platform/acs/ACS-004-Prompt-Intelligence.md`)
- ADR-005 — Formatter decisionTrace Contract (`docs/adr/ADR-005-Formatter-DecisionTrace-Contract.md`)
- `Gate1-Prompt-Pipeline-TZ.md` (Revision 2, section 9, item 3 — Type / Function Name Collision)
- `Gate1-Prompt-Builder-Rule-Engine-Governance-Review.md`
- `src/lib/interior/prompt-engine/formatter/formatter.types.ts`
- `src/lib/interior/prompt-engine/acs004-prompt-builder-rules/acs004-prompt-builder-rules.types.ts`
- `src/lib/interior/prompt-engine/acs004-prompt-builder-rules/README.md`
- ED-001 — Project Test Runner
