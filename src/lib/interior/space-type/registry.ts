import { SPACE_TYPES } from "./space-types";
import type { SpaceType, SpaceTypeId, SpaceTypeRegistry } from "./types";

/**
 * Single Source of Truth для всех Space Types — по аналогии с
 * `DESIGN_DOMAIN_REGISTRY` (design-domain/registry.ts) и
 * `INTERIOR_STYLE_REGISTRY` (styles/registry.ts).
 *
 * Никакой логики: обычный typed lookup над `SPACE_TYPES`.
 */
export const SPACE_TYPE_REGISTRY: SpaceTypeRegistry = SPACE_TYPES;

export function getSpaceType(id: SpaceTypeId): SpaceType | undefined {
  return SPACE_TYPE_REGISTRY.find((spaceType) => spaceType.id === id);
}

export function getAllSpaceTypes(): SpaceTypeRegistry {
  return SPACE_TYPE_REGISTRY;
}
