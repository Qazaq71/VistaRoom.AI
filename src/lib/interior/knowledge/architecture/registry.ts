import type { ArchitectureKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real architecture
// knowledge entries in a later stage — see ./README.md.
export const ARCHITECTURE_KNOWLEDGE_REGISTRY: readonly ArchitectureKnowledge[] = [];

export function getArchitectureKnowledge(id: string): ArchitectureKnowledge | undefined {
  return ARCHITECTURE_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllArchitectureKnowledge(): readonly ArchitectureKnowledge[] {
  return ARCHITECTURE_KNOWLEDGE_REGISTRY;
}
