/**
 * ACS-004 Gate 1 contract types (Prompt Builder + Rule Engine). Independent
 * of Track-1 (`../types.ts` `PromptRuleSet`/`PromptRule`, `../rules/*`) —
 * new names to avoid collision, per the same naming precedent ADR-005
 * established for Formatter. Directory naming and Acs004RuleSet naming are
 * owner-confirmed governance corrections. Track-1 types are not reused,
 * extended, or modified here.
 */

/**
 * One element of a decision from a Domain Intelligence module (ACS-004
 * Inputs, domainDecisions[]). Structurally identical to
 * FormatterPromptElement, but declared separately — this module does not
 * import Formatter's internal types directly, only converts into them at
 * the output of buildPromptDraft.
 */
export interface DomainDecision {
  readonly element: string;
  readonly value: string;
  readonly sourceRule?: string | null;
}

/**
 * One structural rule for Gate 1. Validates only the shape of a single
 * DomainDecision (e.g. "non-empty value") — never domain content, never
 * cross-element conflicts (Gate 1 scope decisions, confirmed by the
 * project owner; see ACS-004 Responsibilities/Non-responsibilities).
 */
export interface StructuralRule {
  readonly name: string;
  readonly validate: (decision: DomainDecision) => StructuralViolation | null;
}

export interface StructuralViolation {
  readonly element: string;
  readonly reason: string; // e.g. "missing value", "empty element"
}

/**
 * Minimal, structural-only RuleSet for Gate 1. Carries no domain priority
 * and resolves no semantic conflicts (Gate 1 scope decisions, confirmed by
 * the project owner).
 *
 * Named `Acs004RuleSet` (not bare `RuleSet`) because Track-1 already
 * declares `PromptRuleSet` in `prompt-engine/types.ts` for an unrelated
 * entity — this prefix removes a naming ambiguity. Directory naming and
 * Acs004RuleSet naming are owner-confirmed governance corrections.
 */
export interface Acs004RuleSet {
  readonly rules: readonly StructuralRule[];
}

/**
 * Explicit refusal instead of a guessed result — the same principle
 * already applied in ACS-002 (`ErrorNotFound`) and ADR-005
 * (`sourceRule: null`). Not an exception: an ordinary return value,
 * returned as the alternative member of the union type produced by
 * `applyRules` (see acs004-prompt-builder-rules.ts). Union-return contract
 * for `applyRules` is owner-confirmed post-review.
 */
export interface StructuralValidationFailure {
  readonly violations: readonly StructuralViolation[];
}
