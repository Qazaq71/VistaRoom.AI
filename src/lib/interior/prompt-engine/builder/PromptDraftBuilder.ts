import type { PromptContext } from "../../prompt-domain";
import type { PromptDraft } from "./PromptDraft";

/**
 * First `PromptDraft` builder (DS-6.5, revised DS-6.5.1). Reads a
 * `PromptContext` and composes its existing sub-contexts, unchanged, into
 * a `PromptDraft` — no defaults filled in, no fields derived, no sections
 * merged, nothing enriched, and (since DS-6.5.1) no per-field copying:
 * each `PromptDraft` key is a direct reference to the matching
 * `PromptContext` sub-context. It exists to prove the `PromptContext` →
 * `PromptDraft` seam end-to-end before Rule Engine or Formatter read
 * `PromptDraft`.
 *
 * This is deliberately not a `PromptBuilder` (`../types.ts`) implementation
 * — that contract returns `PromptContext`, this one returns `PromptDraft`.
 * See `README.md`.
 */
export class PromptDraftBuilder {
  build(context: Readonly<PromptContext>): PromptDraft {
    return {
      room: context.room,
      style: context.style,
      materials: context.materials,
      furniture: context.furniture,
      lighting: context.lighting,
      decor: context.decor,
      constraints: context.constraints,
      negative: context.negativePrompt,
      metadata: context.metadata,
    };
  }
}
