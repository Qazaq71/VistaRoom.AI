import type { ColorKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real color knowledge
// entries in a later stage — see ./README.md.
export const COLOR_KNOWLEDGE_REGISTRY: readonly ColorKnowledge[] = [];

export function getColorKnowledge(id: string): ColorKnowledge | undefined {
  return COLOR_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllColorKnowledge(): readonly ColorKnowledge[] {
  return COLOR_KNOWLEDGE_REGISTRY;
}
