import type { StyleKnowledge } from "../types";
import { ALL_STYLE_KNOWLEDGE } from "../styles";

/**
 * Looks up a `StyleKnowledge` entry by `styleId` (the id it shares with
 * the matching `InteriorStyle` in the Style Registry). Returns `undefined`
 * for an unknown id — this is a plain lookup over `ALL_STYLE_KNOWLEDGE`,
 * not a factory.
 *
 * Only `styles/` is wired up on DS-6.4; the other eleven knowledge domains
 * (materials, furniture, lighting, ...) each own their own
 * `<domain>/registry.ts` lookup for now (see `../README.md` §6).
 */
export function getStyleKnowledge(styleId: string): StyleKnowledge | undefined {
  return ALL_STYLE_KNOWLEDGE.find((entry) => entry.styleId === styleId);
}

/** Returns every registered `StyleKnowledge` entry, in registration order. */
export function getAllStyleKnowledge(): readonly StyleKnowledge[] {
  return ALL_STYLE_KNOWLEDGE;
}
