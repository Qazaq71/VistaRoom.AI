import type { QualityKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real quality knowledge
// entries in a later stage — see ./README.md.
export const QUALITY_KNOWLEDGE_REGISTRY: readonly QualityKnowledge[] = [];

export function getQualityKnowledge(id: string): QualityKnowledge | undefined {
  return QUALITY_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllQualityKnowledge(): readonly QualityKnowledge[] {
  return QUALITY_KNOWLEDGE_REGISTRY;
}
