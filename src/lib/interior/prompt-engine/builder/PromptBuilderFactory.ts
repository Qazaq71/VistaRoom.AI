import type { PromptBuilder } from "../types";
import { DefaultPromptBuilder } from "./PromptBuilder";

/**
 * Returns the `PromptBuilder` to use. DS-6.2 always returns
 * `DefaultPromptBuilder` — there is only one implementation yet. This
 * function is the seam where future mode-specific builders
 * (`InteriorPromptBuilder`, `FurniturePromptBuilder`,
 * `ReplacePromptBuilder`, `CleanRoomPromptBuilder`,
 * `RoomAnalysisPromptBuilder`) will be selected instead, without changing
 * any caller. See `README.md`.
 */
export function createPromptBuilder(): PromptBuilder {
  return new DefaultPromptBuilder();
}
