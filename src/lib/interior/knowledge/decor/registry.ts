import type { DecorKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real decor knowledge
// entries in a later stage — see ./README.md.
export const DECOR_KNOWLEDGE_REGISTRY: readonly DecorKnowledge[] = [];

export function getDecorKnowledge(id: string): DecorKnowledge | undefined {
  return DECOR_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllDecorKnowledge(): readonly DecorKnowledge[] {
  return DECOR_KNOWLEDGE_REGISTRY;
}
