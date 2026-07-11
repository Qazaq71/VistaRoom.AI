/**
 * Step 6 — Grounding validator (Gate 2 C8, Implementation Package v1.0
 * Step 6 Scope Decision §14). Validates that `GroundingReference`s produced
 * by this harness's own evaluators actually point at real nodes/relations
 * (and, for attribute references, a real attribute on that node/relation's
 * category) within the accepted `StructuredSceneV0`. This is NOT a
 * duplicate of the Step 5 Boundary Validator's full structural validation
 * — it only checks that grounding is truthful, not that the scene as a
 * whole is schema-conformant (Step 5 already guarantees that).
 */

import type { StructuredSceneV0 } from "../types";
import type { GroundingReference } from "./types";

export type GroundingValidationResult = { readonly valid: true } | { readonly valid: false; readonly reason: string };

/** Attribute keys present on each closed node category, per Step 1 (../types.ts). */
const NODE_CATEGORY_ATTRIBUTES: Record<string, readonly string[]> = {
  Room: ["spaceTypeId", "spatialExtent"],
  StructuralElement: ["typeLabel", "approximatePlacement", "illuminationRelevance"],
  Object: ["typeLabel", "approximatePlacement", "affordances", "illuminationRelevance"],
  FreeSpaceRegion: ["spatialExtent", "approximatePlacement"],
};

/** Attribute keys present on each closed relation category, per Step 1 (../types.ts). */
const RELATION_CATEGORY_ATTRIBUTES: Record<string, readonly string[]> = {
  Adjacency: [],
  Containment: [],
  Blocking: ["blockingType"],
};

function invalid(reason: string): GroundingValidationResult {
  return { valid: false, reason };
}

/**
 * Validates a set of grounding references against the accepted scene.
 * Pure and deterministic: no mutation, no I/O.
 */
export function validateGroundingReferences(
  scene: StructuredSceneV0,
  references: readonly GroundingReference[],
): GroundingValidationResult {
  if (references.length === 0) {
    return invalid("grounding must not be empty for an answered query result");
  }

  const nodesById = new Map(scene.nodes.map((node) => [node.id, node]));
  const relationsById = new Map(scene.relations.map((relation) => [relation.id, relation]));

  for (const ref of references) {
    if (ref.kind === "node" || ref.kind === "node_attribute") {
      const node = nodesById.get(ref.nodeId);
      if (!node) {
        return invalid(`grounding references node "${ref.nodeId}", which does not exist in the accepted scene`);
      }
      if (ref.kind === "node_attribute") {
        const allowed = NODE_CATEGORY_ATTRIBUTES[node.category] ?? [];
        if (!allowed.includes(ref.attribute)) {
          return invalid(
            `grounding references attribute "${ref.attribute}" on node "${ref.nodeId}" (category "${node.category}"), which does not carry that attribute`,
          );
        }
      }
      continue;
    }

    const relation = relationsById.get(ref.relationId);
    if (!relation) {
      return invalid(`grounding references relation "${ref.relationId}", which does not exist in the accepted scene`);
    }
    if (ref.kind === "relation_attribute") {
      const allowed = RELATION_CATEGORY_ATTRIBUTES[relation.category] ?? [];
      if (!allowed.includes(ref.attribute)) {
        return invalid(
          `grounding references attribute "${ref.attribute}" on relation "${ref.relationId}" (category "${relation.category}"), which does not carry that attribute`,
        );
      }
    }
  }

  return { valid: true };
}
