import type { RenderingKnowledge } from "../types";

// TODO: Future expansion domain. Populate with real rendering knowledge
// entries in a later stage — see ./README.md.
export const RENDERING_KNOWLEDGE_REGISTRY: readonly RenderingKnowledge[] = [];

export function getRenderingKnowledge(id: string): RenderingKnowledge | undefined {
  return RENDERING_KNOWLEDGE_REGISTRY.find((entry) => entry.id === id);
}

export function getAllRenderingKnowledge(): readonly RenderingKnowledge[] {
  return RENDERING_KNOWLEDGE_REGISTRY;
}
