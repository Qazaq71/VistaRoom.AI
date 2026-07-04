import type { PromptContext } from "../../prompt-domain";
import type { PromptRuleSet } from "../types";

/**
 * Contract for applying every `PromptRule` inside a single `PromptRuleSet`
 * to a `PromptContext`, in sequence. Distinct from `PromptPipeline`
 * (`../types.ts`), which will orchestrate the whole Builder → Rules →
 * Formatter run — `RuleEngine` only owns running one `RuleSet`'s rules.
 * No string logic, no knowledge of Formatter, Provider, Generation
 * Engine, or any AI model. See `README.md`.
 */
export interface RuleEngine {
  applyRules(context: Readonly<PromptContext>, ruleSet: PromptRuleSet): PromptContext;
}
