import type { PromptContext } from "../../prompt-domain";
import type { PromptRuleSet } from "../types";
import type { RuleEngine } from "./RuleEngine";

/**
 * First `RuleEngine` implementation (DS-6.3). Applies every rule in
 * `ruleSet.rules`, in array order, feeding each rule's output `PromptContext`
 * into the next rule as its input. Never mutates the `PromptContext` it
 * receives — each step (including the starting copy) produces a new
 * instance. With an empty `rules` array — the only case possible today,
 * see `RuleRegistry.ts` — it returns a new `PromptContext` carrying the
 * same data, unchanged.
 */
export class DefaultRuleEngine implements RuleEngine {
  applyRules(context: Readonly<PromptContext>, ruleSet: PromptRuleSet): PromptContext {
    return ruleSet.rules.reduce<PromptContext>(
      (currentContext, rule) => rule.apply(currentContext),
      { ...context },
    );
  }
}
