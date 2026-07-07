import type { FormatterPromptDraft, FormatterPromptElement } from "../formatter/formatter.types";
import type {
  Acs004RuleSet,
  DomainDecision,
  StructuralValidationFailure,
} from "./acs004-prompt-builder-rules.types";

/**
 * Gate 1: assembles a FormatterPromptDraft EXCLUSIVELY from domainDecisions[].
 * structuredScene and projectDesignContext are accepted per the ACS-004
 * contract (Public Contract requires these parameters), but are NOT
 * decomposed into elements — see Gate1-Prompt-Pipeline-TZ.md section 5
 * (Open Architectural Gap). This is a deliberate Gate 1 limitation, not an
 * oversight.
 */
export function buildPromptDraft(
  structuredScene: unknown,       // opaque for Gate 1, see TZ section 5
  projectDesignContext: unknown,  // opaque for Gate 1, see TZ section 5
  domainDecisions: DomainDecision[]
): FormatterPromptDraft {
  const elements: FormatterPromptElement[] = domainDecisions.map((d) => ({
    element: d.element,
    value: d.value,
    sourceRule: d.sourceRule,
  }));
  return { elements };
}

/**
 * Gate 1: structural validation only. Does NOT resolve semantic conflicts
 * between elements (decisions 1-3, TZ section 2). Preserves elements[]
 * order unchanged (decision 4).
 *
 * Returns the original FormatterPromptDraft when there are no violations,
 * or an explicit StructuralValidationFailure ({ violations }) when there
 * are — never throws (decision 9, TZ section 9 "Error Handling"). This
 * mirrors ACS-002's `RegionDescriptor | ErrorNotFound` refusal-as-value
 * pattern rather than introducing exceptions into this module.
 */
export function applyRules(
  promptDraft: FormatterPromptDraft,
  ruleSet: Acs004RuleSet
): FormatterPromptDraft | StructuralValidationFailure {
  const violations = promptDraft.elements.flatMap((element) =>
    ruleSet.rules
      .map((rule) => rule.validate(element))
      .filter((violation): violation is NonNullable<typeof violation> => violation !== null)
  );

  if (violations.length > 0) {
    return { violations };
  }

  return promptDraft; // order and content unchanged
}

/**
 * Type guard distinguishing the two members of applyRules' return union
 * (TZ section 3.4) — symmetric to how a caller of ACS-002's
 * `deriveMaskRegion` distinguishes RegionDescriptor from ErrorNotFound by
 * shape, not by catching an exception.
 */
export function isStructuralValidationFailure(
  result: FormatterPromptDraft | StructuralValidationFailure
): result is StructuralValidationFailure {
  return "violations" in result;
}

export const GATE1_DEFAULT_RULESET: Acs004RuleSet = {
  rules: [
    {
      name: "non-empty-element",
      validate: (d) => (!d.element ? { element: d.element, reason: "missing element" } : null),
    },
    {
      name: "non-empty-value",
      validate: (d) => (!d.value ? { element: d.element, reason: "missing value" } : null),
    },
  ],
};
