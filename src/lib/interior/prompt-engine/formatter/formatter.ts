import type {
  FormatterPromptDraft,
  FormatterResult,
  DecisionRecord,
} from "./formatter.types";

/**
 * ADR-005 Formatter. Converts a `FormatterPromptDraft` into a
 * `promptString` plus a mandatory `decisionTrace` (ADR-005 Public
 * Contract / decisionTrace Contract). Every element in `promptDraft`
 * produces exactly one `DecisionRecord`; `sourceRule` is copied through
 * when present and set to `null` when absent — never inferred.
 *
 * `providerTarget` is part of the public contract signature (ACS-004) but
 * is not read here: provider-specific formatting is out of scope for this
 * Gate (see formatter/README.md).
 */
export function format(
  promptDraft: FormatterPromptDraft,
  providerTarget: string
): FormatterResult {
  const decisionTrace: DecisionRecord[] = promptDraft.elements.map(
    (element) => ({
      element: element.element,
      value: element.value,
      sourceRule: element.sourceRule ?? null,
    })
  );

  const promptString = promptDraft.elements.map((element) => element.value).join(", ");

  return { promptString, decisionTrace };
}
