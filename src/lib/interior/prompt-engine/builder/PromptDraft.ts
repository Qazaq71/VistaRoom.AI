import type {
  RoomContext,
  StyleContext,
  MaterialContext,
  FurnitureContext,
  LightingContext,
  DecorContext,
  ConstraintContext,
  NegativePromptContext,
  PromptMetadata,
} from "../../prompt-domain";

/**
 * Intermediate representation of a future prompt — the AST `PromptDraftBuilder`
 * produces from a `PromptContext` (DS-6.5, revised DS-6.5.1). Not a string,
 * not a string array, and not a set of parallel "Section" models: a
 * composition of the exact same Prompt Domain context types that make up
 * `PromptContext` (ADR-000 Principle 19 — Composition over Duplication).
 *
 * DS-6.5 originally introduced independent `StyleSection`/`RoomSection`/...
 * types that structurally duplicated `StyleContext`/`RoomContext`/... —
 * flagged as a Principle 19 violation in that stage's own architecture
 * review and removed here. `PromptDraft` is a container, not a new
 * domain model: it holds `PromptContext`'s own sub-contexts, unchanged,
 * under the same nine names `PromptContext` already uses (`negative`
 * instead of `negativePrompt` is the one renamed key, kept for
 * readability — the *type* is still exactly `NegativePromptContext`, not a
 * new one).
 *
 * This is the type Rule Engine (once retargeted, not yet) and Formatter
 * (DS-6.6, not yet built) will read and transform next — no
 * `positivePrompt`/`negativePrompt` string exists anywhere on this type.
 * See `README.md` "Prompt compilation flow".
 */
export type PromptDraft = {
  readonly room: RoomContext;
  readonly style: StyleContext;
  readonly materials: MaterialContext;
  readonly furniture: FurnitureContext;
  readonly lighting: LightingContext;
  readonly decor: DecorContext;
  readonly constraints: ConstraintContext;
  readonly negative: NegativePromptContext;
  readonly metadata: PromptMetadata;
};
