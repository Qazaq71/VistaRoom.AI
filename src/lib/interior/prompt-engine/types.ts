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
 * sub-context fields. Takes a `PromptContext`, returns a new
 * `PromptContext`. The input is `Readonly` — implementations must not
 * mutate it, only derive a new value from it (see ADR-000 Principle 15,
 * "PromptContext immutable"). No string logic. See `builder/README.md`.
 * No implementation yet.
 */
export interface PromptBuilder {
  build(context: Readonly<PromptContext>): PromptContext;
}

/**
 * Contract for the single step that turns a fully assembled
 * `PromptContext` into a `PromptResult`. This is the only place in the
 * Prompt Engine where prompt strings are allowed to be produced. The
 * input is `Readonly` — Formatter reads `PromptContext`, it never writes
 * back to it (ADR-000 Principle 15). See `formatter/README.md`. No
 * implementation yet.
 */
export interface PromptFormatter {
  format(context: Readonly<PromptContext>): PromptResult;
}

/**
 * Contract for a single, composable transformation of a `PromptContext`
 * (e.g. a constraint, a normalization, a domain-specific adjustment).
 * Takes a `PromptContext`, returns a new `PromptContext`. The input is
 * `Readonly` — implementations must not mutate it (ADR-000 Principle 15).
 * Rules are independent: a rule must not know about, call, or depend on
 * the order of other rules (ADR-000 Principle 16) — sequencing is owned
 * exclusively by `PromptPipeline`. No string logic. See
 * `rules/README.md`. No implementation yet.
 */
export interface PromptRule {
  apply(context: Readonly<PromptContext>): PromptContext;
}

/**
 * Contract for checking whether a `PromptContext` is well-formed enough
 * to proceed through the pipeline. No string logic, no side effects —
 * the input is `Readonly` and is never written back to (ADR-000
 * Principle 15). See `validators/README.md`. No implementation yet.
 */
export interface PromptValidator {
  validate(context: Readonly<PromptContext>): boolean;
}

/**
 * Contract for a reusable, named shape of `PromptContext` transformation
 * (e.g. a preset combination of rules for a generation mode). Takes a
 * `PromptContext`, returns a new `PromptContext`. The input is `Readonly`
 * — implementations must not mutate it (ADR-000 Principle 15). No string
 * logic. See `templates/README.md`. No implementation yet.
 */
export interface PromptTemplate {
  apply(context: Readonly<PromptContext>): PromptContext;
}

/**
 * Contract for the orchestrator that composes Builder → Rules →
 * Formatter into a single run producing a `PromptResult`. `PromptPipeline`
 * is the single place that decides the order Rules run in (ADR-000
 * Principle 16) — no other layer sequences them. See `pipeline/README.md`.
 * No implementation yet.
 */
export interface PromptPipeline {
  run(context: Readonly<PromptContext>): PromptResult;
}
