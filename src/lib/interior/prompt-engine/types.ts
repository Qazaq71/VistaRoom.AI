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
 * Descriptive metadata every `PromptRule` must carry (DS-6.3.1). Entirely
 * readonly — a rule's metadata is fixed identity/documentation, not
 * mutable state. `id`/`name`/`description` are documentation only; they
 * are not read by `RuleEngine` or `PromptPipeline` today. `enabled` and
 * `priority` are reserved for future use (e.g. a future Pipeline that
 * skips disabled rules, or sequences by priority) — as of DS-6.3.1
 * neither field is read anywhere, and no rule may read its own or
 * another rule's `enabled`/`priority` to change its behavior (that would
 * turn metadata into rule logic, which ADR-000 Principle 18 forbids for
 * `priority` specifically, and which this contract forbids for `enabled`
 * by the same reasoning). See `rules/README.md`.
 */
export interface PromptRuleMetadata {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly enabled: boolean;
  readonly priority: number;
}

/**
 * Contract for a single, composable transformation of a `PromptContext`
 * (e.g. a constraint, a normalization, a domain-specific adjustment).
 * Takes a `PromptContext`, returns a new `PromptContext`. The input is
 * `Readonly` — implementations must not mutate it (ADR-000 Principle 15).
 * Rules are independent: a rule must not know about, call, or depend on
 * the order of other rules (ADR-000 Principle 16) — sequencing is owned
 * exclusively by `PromptPipeline`. No string logic. `metadata` (DS-6.3.1)
 * is descriptive only — see `PromptRuleMetadata` above and
 * `rules/README.md`. No implementation yet.
 */
export interface PromptRule {
  readonly metadata: PromptRuleMetadata;
  apply(context: Readonly<PromptContext>): PromptContext;
}

/**
 * A named, logical grouping of independent `PromptRule`s — e.g. all rules
 * concerning lighting, or all rules for a specific `PromptGenerationMode`
 * (future instances: `InteriorRuleSet`, `LightingRuleSet`,
 * `FurnitureRuleSet`, `MaterialRuleSet`, `DecorRuleSet`,
 * `ConstraintRuleSet`, `MyStyleRuleSet`). Purely an organizational
 * contract — grouping rules into a `PromptRuleSet` does not give them any
 * knowledge of each other or of execution order; rules inside a set are
 * still independent (ADR-000 Principle 16), and only `PromptPipeline`
 * decides how sets/rules are sequenced. `priority` is optional metadata
 * `PromptPipeline` may use for that sequencing later — it is not read or
 * branched on by any `PromptRule` implementation, and no sorting logic is
 * implemented yet (ADR-000 Principle 18). No implementation yet — see
 * `rules/README.md`.
 */
export interface PromptRuleSet {
  id: string;
  name: string;
  rules: PromptRule[];
  priority?: number;
}

/**
 * How serious a single `RuleDiagnostics` entry is. Purely descriptive —
 * nothing in Prompt Engine branches on it yet (DS-6.3.1).
 */
export type RuleDiagnosticSeverity = "info" | "warning" | "error";

/**
 * One diagnostic note a `PromptRule` run could in the future attach to
 * its `RuleResult` — e.g. "this rule found nothing to normalize" or "this
 * constraint would have removed all furniture". DS-6.3.1: type only. No
 * rule produces `RuleDiagnostics` yet, and `RuleEngine`/`DefaultRuleEngine`
 * do not read, collect, or forward them — this is a contract for a future
 * Developer Studio / Benchmark-facing analysis layer, not for Rule Engine
 * itself. See `rules/README.md`.
 */
export interface RuleDiagnostics {
  readonly ruleId: string;
  readonly message: string;
  readonly severity: RuleDiagnosticSeverity;
}

/**
 * Measurements a single `PromptRule` run could in the future report
 * alongside its `RuleResult` — how long it took, how many fields it
 * changed. DS-6.3.1: type only, nothing computes or reads these values
 * yet. See `rules/README.md`.
 */
export interface RuleMetrics {
  readonly executionTime: number;
  readonly changes: number;
}

/**
 * The richer, future return shape of running a `PromptRule` (or a whole
 * `PromptRuleSet`) — the resulting `PromptContext` plus optional
 * diagnostics/warnings/metrics for Developer Studio, Benchmark, or future
 * Prompt Engine quality analysis to consume. DS-6.3.1: type only.
 * `RuleEngine`/`DefaultRuleEngine` (`rules/RuleEngine.ts`,
 * `rules/DefaultRuleEngine.ts`) are unchanged by this type and continue
 * to work directly with `PromptContext` — `RuleResult` is not produced,
 * returned, or consumed anywhere yet. See `rules/README.md`.
 */
export interface RuleResult {
  context: PromptContext;
  diagnostics?: RuleDiagnostics[];
  warnings?: string[];
  metrics?: RuleMetrics;
}

/**
 * Future flag(s) for asking `RuleEngine` to record a trace of how a
 * `PromptContext` changed as it passed through a `PromptRuleSet`.
 * DS-6.3.1: type only — `RuleEngine`/`DefaultRuleEngine` accept no such
 * option today and write no trace anywhere. Reserved for Developer
 * Studio / Benchmark tooling that wants to inspect rule-by-rule changes.
 * See `rules/README.md`.
 */
export interface RuleTraceOptions {
  readonly enableTrace: boolean;
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
