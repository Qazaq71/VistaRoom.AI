import type { PromptContext } from "../../prompt-domain";
import type { PromptBuilder } from "../types";

/**
 * First `PromptBuilder` implementation (DS-6.2). An "identity" builder:
 * it produces a new `PromptContext` instance that carries the exact same
 * data as the one it received — no defaults filled in, no fields derived,
 * nothing enriched yet. It exists to prove the Builder contract end-to-end
 * (Readonly in, new instance out) before any real enrichment logic is
 * written. See `README.md`.
 */
export class DefaultPromptBuilder implements PromptBuilder {
  build(context: Readonly<PromptContext>): PromptContext {
    return { ...context };
  }
}
