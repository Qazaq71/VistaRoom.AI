/**
 * ADR-005 Formatter contract types. Independent of Track-1
 * (`../types.ts` `PromptResult`/`PromptFormatter`, `../builder/PromptDraft.ts`
 * `PromptDraft`) — new names to avoid collision, per Architecture Freeze
 * Resolution R4. Track-1 types are not reused, extended, or modified here.
 */

/**
 * One element of the future prompt as seen by the Formatter, before it is
 * turned into a `DecisionRecord`. `sourceRule` is optional on input —
 * Domain Intelligence may not always supply one; `format()` normalizes a
 * missing/undefined `sourceRule` to `null` in the resulting `DecisionRecord`
 * (ADR-005 decisionTrace Contract).
 */
export interface FormatterPromptElement {
  readonly element: string;
  readonly value: string;
  readonly sourceRule?: string | null;
}

/**
 * Input to `format()` (ADR-005 Public Contract). A flat list of prompt
 * elements to be rendered into `promptString` and traced into
 * `decisionTrace`.
 */
export interface FormatterPromptDraft {
  readonly elements: readonly FormatterPromptElement[];
}

/**
 * One traced decision in a `FormatterResult.decisionTrace` (ADR-005
 * decisionTrace Contract). `sourceRule` is `null`, never omitted, when no
 * source was provided — a fabricated `sourceRule` is a contract violation.
 */
export interface DecisionRecord {
  readonly element: string;
  readonly value: string;
  readonly sourceRule: string | null;
}

/**
 * Output of `format()` (ADR-005 Public Contract). Distinct from Track-1
 * `PromptResult` — carries a single `promptString` plus the mandatory
 * `decisionTrace`, not `positivePrompt`/`negativePrompt`.
 */
export interface FormatterResult {
  readonly promptString: string;
  readonly decisionTrace: DecisionRecord[];
}
