import type { LightingKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real lighting knowledge
// entries in a later stage — see ./README.md.
export const LIGHTING_KNOWLEDGE_REGISTRY: readonly LightingKnowledge[] = [];

export function getLightingKnowledge(id: string): LightingKnowledge | undefined {
  return LIGHTING_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllLightingKnowledge(): readonly LightingKnowledge[] {
  return LIGHTING_KNOWLEDGE_REGISTRY;
}
