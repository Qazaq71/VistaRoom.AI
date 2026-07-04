import type { SpaceKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real space knowledge
// entries in a later stage — see ./README.md.
export const SPACE_KNOWLEDGE_REGISTRY: readonly SpaceKnowledge[] = [];

export function getSpaceKnowledge(id: string): SpaceKnowledge | undefined {
  return SPACE_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllSpaceKnowledge(): readonly SpaceKnowledge[] {
  return SPACE_KNOWLEDGE_REGISTRY;
}
