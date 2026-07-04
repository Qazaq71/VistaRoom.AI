import type { BaseDomainContext } from "./BaseDomainContext";
import type { InteriorStyle, InteriorMyStyle } from "../../styles/types";
import type { PromptGenerationMode } from "../types";

/**
 * Wraps the existing Style Registry model (`InteriorStyle` /
 * `InteriorMyStyle`) instead of redefining it. Prompt Domain never owns
 * style data — it only references it.
 */
export type StyleContext = BaseDomainContext & {
  generationMode: PromptGenerationMode;
  style?: InteriorStyle;
  myStyle?: InteriorMyStyle;
};
