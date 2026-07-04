import type { CompositionKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real composition knowledge
// entries in a later stage — see ./README.md.
export const COMPOSITION_KNOWLEDGE_REGISTRY: readonly CompositionKnowledge[] = [];

export function getCompositionKnowledge(id: string): CompositionKnowledge | undefined {
  return COMPOSITION_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllCompositionKnowledge(): readonly CompositionKnowledge[] {
  return COMPOSITION_KNOWLEDGE_REGISTRY;
}
