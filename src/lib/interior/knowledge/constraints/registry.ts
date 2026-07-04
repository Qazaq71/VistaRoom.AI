import type { ConstraintKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real constraint knowledge
// entries in a later stage — see ./README.md.
export const CONSTRAINT_KNOWLEDGE_REGISTRY: readonly ConstraintKnowledge[] = [];

export function getConstraintKnowledge(id: string): ConstraintKnowledge | undefined {
  return CONSTRAINT_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllConstraintKnowledge(): readonly ConstraintKnowledge[] {
  return CONSTRAINT_KNOWLEDGE_REGISTRY;
}
