import type { PromptContext } from "../prompt-domain";

/**
 * Final output of the Prompt Engine pipeline: the two strings a
 * Generation Engine / Provider actually consumes. This is the only type
 * in the Prompt Engine that is allowed to contain assembled prompt text —
 * everywhere else in this module works with `PromptContext` data, not
 * strings. Not produced yet (Foundation stage, DS-6.1) — see
 * `formatter/README.md`.
 */
export type PromptResult = {
  positivePrompt: string;
  negativePrompt: string;
};

/**
 * Contract for a step that builds/enriches a `PromptContext` before
 * formatting — e.g. filling defaults, merging style data, deriving
 * sub-context fields. Takes a `PromptContext`, returns a `PromptContext`.
 * No string logic. See `builder/README.md`. No implementation yet.
 */
export interface PromptBuilder {
  build(context: PromptContext): PromptContext;
}

/**
 * Contract for the single step that turns a fully assembled
 * `PromptContext` into a `PromptResult`. This is the only place in the
 * Prompt Engine where prompt strings are allowed to be produced. See
 * `formatter/README.md`. No implementation yet.
 */
export interface PromptFormatter {
  format(context: PromptContext): PromptResult;
}

/**
 * Contract for a single, composable transformation of a `PromptContext`
 * (e.g. a constraint, a normalization, a domain-specific adjustment).
 * Takes a `PromptContext`, returns a `PromptContext`. No string logic.
 * See `rules/README.md`. No implementation yet.
 */
export interface PromptRule {
  apply(context: PromptContext): PromptContext;
}

/**
 * Contract for checking whether a `PromptContext` is well-formed enough
 * to proceed through the pipeline. No string logic, no side effects.
 * See `validators/README.md`. No implementation yet.
 */
export interface PromptValidator {
  validate(context: PromptContext): boolean;
}

/**
 * Contract for a reusable, named shape of `PromptContext` transformation
 * (e.g. a preset combination of rules for a generation mode). Takes a
 * `PromptContext`, returns a `PromptContext`. No string logic. See
 * `templates/README.md`. No implementation yet.
 */
export interface PromptTemplate {
  apply(context: PromptContext): PromptContext;
}

/**
 * Contract for the orchestrator that composes Builder → Rules →
 * Formatter into a single run producing a `PromptResult`. See
 * `pipeline/README.md`. No implementation yet.
 */
export interface PromptPipeline {
  run(context: PromptContext): PromptResult;
}
