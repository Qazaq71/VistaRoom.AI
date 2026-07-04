import type { PromptRuleSet } from "../types";

/**
 * Single named owner of the `"default"` RuleSet id (ADR-000 Principle 11)
 * — every lookup goes through `getRuleSet`, nothing re-types this string.
 */
export const DEFAULT_RULE_SET_ID = "default";

/**
 * The only `PromptRuleSet` registered as of DS-6.3: an empty rule set,
 * proving `RuleRegistry`/`RuleEngine` work end-to-end before any real
 * rule exists. Universal Interior Rules (DS-6.4) will populate `rules`
 * here and/or register further RuleSets.
 */
const DEFAULT_RULE_SET: PromptRuleSet = {
  id: DEFAULT_RULE_SET_ID,
  name: "Default Rule Set",
  rules: [],
};

const RULE_SETS: Readonly<Record<string, PromptRuleSet>> = {
  [DEFAULT_RULE_SET_ID]: DEFAULT_RULE_SET,
};

/**
 * Looks up a registered `PromptRuleSet` by id. Returns `undefined` for an
 * unknown id — this is a plain lookup, not a factory that builds RuleSets
 * on demand.
 */
export function getRuleSet(id: string): PromptRuleSet | undefined {
  return RULE_SETS[id];
}
