import type { SpaceTypeId } from "../space-type";
import { getAllSpaceTypes } from "../space-type";
import type { SpatialPromptContext } from "./types";
import { DefaultSpatialPromptAdapter } from "./adapter";

/**
 * This module's own lookup surface — by analogy with `getSpaceType`/
 * `getAllSpaceTypes` (`space-type/registry.ts`) and `getSpatialKnowledge`/
 * `getAllSpatialKnowledge` (`knowledge/spaces/registry.ts`). A future
 * Prompt Engine consumer reads through these two functions only; it does
 * not need to import `space-type/**` or `knowledge/spaces/**` itself, and
 * it does not need to know a `SpatialPromptAdapter` exists (see
 * ./README.md §6, "Knowledge Usage").
 *
 * Not a static array like `SPACE_TYPE_REGISTRY`/`SPATIAL_KNOWLEDGE_REGISTRY`
 * — `SpatialPromptContext` is composed on demand from those two registries
 * via `DefaultSpatialPromptAdapter`, not pre-populated data of its own.
 */
const adapter = new DefaultSpatialPromptAdapter();

export function getSpatialPromptContext(spaceTypeId: SpaceTypeId): SpatialPromptContext | undefined {
  return adapter.adapt(spaceTypeId);
}

export function getAllSpatialPromptContexts(): readonly SpatialPromptContext[] {
  return getAllSpaceTypes()
    .map((spaceType) => adapter.adapt(spaceType.id))
    .filter((context): context is SpatialPromptContext => context !== undefined);
}
