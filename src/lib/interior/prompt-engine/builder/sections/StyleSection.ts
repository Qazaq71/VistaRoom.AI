import type { PromptGenerationMode } from "../../../prompt-domain";
import type { InteriorStyle, InteriorMyStyle } from "../../../styles/types";

/**
 * Draft-side counterpart of `StyleContext` (`prompt-domain/contexts/StyleContext.ts`).
 * Same fields, no `BaseDomainContext` bookkeeping (`version`/`createdAt`/
 * `metadata`) — that stays on `PromptContext`, not on the draft AST. Wraps
 * the existing Style Registry model (`InteriorStyle`/`InteriorMyStyle`)
 * instead of redefining it (ADR-000 Principle 19).
 */
export type StyleSection = {
  generationMode: PromptGenerationMode;
  style?: InteriorStyle;
  myStyle?: InteriorMyStyle;
};
