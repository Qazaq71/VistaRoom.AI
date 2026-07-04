import type { FurnitureKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real furniture knowledge
// entries in a later stage — see ./README.md.
export const FURNITURE_KNOWLEDGE_REGISTRY: readonly FurnitureKnowledge[] = [];

export function getFurnitureKnowledge(id: string): FurnitureKnowledge | undefined {
  return FURNITURE_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllFurnitureKnowledge(): readonly FurnitureKnowledge[] {
  return FURNITURE_KNOWLEDGE_REGISTRY;
}
