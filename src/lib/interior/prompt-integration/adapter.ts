import type { SpaceType, SpaceTypeId } from "../space-type";
import { getSpaceType } from "../space-type";
import type { KnowledgeFeature } from "../knowledge/spaces";
import { getSpatialKnowledge } from "../knowledge/spaces";
import type { SpatialPromptContext } from "./types";

/**
 * The sole point of contact between Spatial Intelligence's two registries
 * (`space-type/registry.ts`, `knowledge/spaces/registry.ts`) and anything
 * that will eventually consume them for prompt generation. Nothing else
 * in `prompt-integration/**` reads either registry directly — see
 * ./README.md §6, "Knowledge Usage".
 *
 * `adapt` takes an already-classified `SpaceTypeId` — it does not
 * classify, analyze, or detect anything itself. Producing a `SpaceTypeId`
 * from a `RoomContext` (or an image) is the job of the future Room
 * Analyzer (see ./README.md §7), which does not exist yet and is not
 * called from here.
 */
export interface SpatialPromptAdapter {
  adapt(spaceTypeId: SpaceTypeId): SpatialPromptContext | undefined;
}

/**
 * First and only implementation of `SpatialPromptAdapter` (DS-7.4).
 * Composes `SpaceType` + Spatial Knowledge into a `SpatialPromptContext`
 * — plain lookups and object construction, no branching, no scoring, no
 * heuristics.
 */
export class DefaultSpatialPromptAdapter implements SpatialPromptAdapter {
  adapt(spaceTypeId: SpaceTypeId): SpatialPromptContext | undefined {
    const spaceType: SpaceType | undefined = getSpaceType(spaceTypeId);
    if (!spaceType) {
      return undefined;
    }

    const spatialKnowledge: KnowledgeFeature | undefined = getSpatialKnowledge(spaceType.id);

    return {
      spaceTypeId: spaceType.id,
      designDomainId: spaceType.designDomainId,
      spatialKnowledge,
    };
  }
}
