/**
 * Draft-side counterpart of `NegativePromptContext`
 * (`prompt-domain/contexts/NegativePromptContext.ts`). Same field, no
 * `BaseDomainContext` bookkeeping — see `StyleSection.ts`. `negativePrompts`
 * is a list of individual negative-prompt tokens carried through unchanged
 * — joining them into one string is Formatter's job (DS-6.6+), not this
 * section's.
 */
export type NegativeSection = {
  negativePrompts: string[];
};
