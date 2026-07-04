import type { MaterialKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real material knowledge
// entries in a later stage — see ./README.md.
export const MATERIAL_KNOWLEDGE_REGISTRY: readonly MaterialKnowledge[] = [];

export function getMaterialKnowledge(id: string): MaterialKnowledge | undefined {
  return MATERIAL_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllMaterialKnowledge(): readonly MaterialKnowledge[] {
  return MATERIAL_KNOWLEDGE_REGISTRY;
}
