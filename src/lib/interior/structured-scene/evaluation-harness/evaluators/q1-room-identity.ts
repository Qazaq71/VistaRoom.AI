/**
 * Step 6 — Q1: Room identity and approximate spatial extent (ADR-012 §4.2
 * Q1, ADR-011 §5 class 1). Reads only the Room node's `spaceTypeId` and
 * `spatialExtent`. No reclassification, no metric conversion, no inferred
 * exact geometry.
 */

import type { RoomNode, StructuredSceneV0 } from "../../types";
import type { GroundingReference, Q1Answer, QueryEvaluationOutcome } from "../types";
import { insufficient, isKnown, toEvidence } from "./shared";

export function evaluateQ1(scene: StructuredSceneV0): QueryEvaluationOutcome<Q1Answer> {
  const room = scene.nodes.find((node): node is RoomNode => node.category === "Room");
  if (!room) {
    return insufficient("No Room node is present in the accepted StructuredScene.", "no_room_node");
  }

  const identity: Q1Answer["identity"] = isKnown(room.spaceTypeId)
    ? { known: true, spaceTypeId: room.spaceTypeId.value, evidence: toEvidence(room.spaceTypeId) }
    : { known: false };

  const extent: Q1Answer["extent"] = isKnown(room.spatialExtent)
    ? {
        known: true,
        qualitativeSize: room.spatialExtent.value.qualitativeSize,
        evidence: toEvidence(room.spatialExtent),
      }
    : { known: false };

  if (!identity.known && !extent.known) {
    return insufficient(
      "Room identity (spaceTypeId) and spatial extent are both unknown_not_inferable.",
      "room_identity_and_extent_unknown",
    );
  }

  const grounding: GroundingReference[] = [{ kind: "node", nodeId: room.id }];
  if (identity.known) grounding.push({ kind: "node_attribute", nodeId: room.id, attribute: "spaceTypeId" });
  if (extent.known) grounding.push({ kind: "node_attribute", nodeId: room.id, attribute: "spatialExtent" });

  return {
    outcome: "answered",
    answer: { identity, extent },
    grounding,
    completeness: identity.known && extent.known ? "complete_for_known_scene_data" : "partial_due_to_unknown_scene_data",
  };
}
