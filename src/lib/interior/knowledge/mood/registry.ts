import type { MoodKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real mood knowledge
// entries in a later stage — see ./README.md.
export const MOOD_KNOWLEDGE_REGISTRY: readonly MoodKnowledge[] = [];

export function getMoodKnowledge(id: string): MoodKnowledge | undefined {
  return MOOD_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllMoodKnowledge(): readonly MoodKnowledge[] {
  return MOOD_KNOWLEDGE_REGISTRY;
}
