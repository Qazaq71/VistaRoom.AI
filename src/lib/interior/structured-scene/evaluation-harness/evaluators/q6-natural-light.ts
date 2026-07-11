/**
 * Step 6 — Q6: Natural-light blocking (ADR-012 §4.2 Q6, ADR-011 §5 class
 * 5). A blocker qualifies only when: the Blocking relation's exact
 * `blockingType === "light"`, it passes confidence gating, and one
 * endpoint is a StructuralElement with a *known* `typeLabel.value ===
 * "window"`. No computed light physics, no significance ranking, no
 * "nothing blocks" claim when there is no usable evidence.
 */

import type { BlockingRelation, StructuralElementNode, StructuredSceneV0 } from "../../types";
import type { GroundingReference, Q6Answer, Q6BlockerItem, QueryEvaluationOutcome } from "../types";
import { insufficient, isKnown, relationEvidence, toEvidence } from "./shared";

export function evaluateQ6(scene: StructuredSceneV0): QueryEvaluationOutcome<Q6Answer> {
  const lightBlocking = scene.relations.filter(
    (relation): relation is BlockingRelation => relation.category === "Blocking" && relation.blockingType === "light",
  );

  const structuralById = new Map(
    scene.nodes
      .filter((node): node is StructuralElementNode => node.category === "StructuralElement")
      .map((node) => [node.id, node] as const),
  );

  const blockers: Q6BlockerItem[] = [];
  let anyUnknownExcluded = false;

  for (const relation of lightBlocking) {
    const relationEv = relationEvidence(relation);
    if (!relationEv) {
      anyUnknownExcluded = true;
      continue;
    }

    let matched = false;
    let hadUnknownWindowLabel = false;

    for (const nodeId of [relation.fromNodeId, relation.toNodeId]) {
      const node = structuralById.get(nodeId);
      if (!node) continue;
      if (!isKnown(node.typeLabel)) {
        hadUnknownWindowLabel = true;
        continue;
      }
      if (node.typeLabel.value !== "window") continue;

      blockers.push({
        relationId: relation.id,
        windowNodeId: node.id,
        relationEvidence: relationEv,
        windowTypeLabelEvidence: toEvidence(node.typeLabel),
      });
      matched = true;
      break;
    }

    if (!matched && hadUnknownWindowLabel) {
      anyUnknownExcluded = true;
    }
  }

  if (blockers.length === 0) {
    return insufficient(
      "No usable evidence of a light-blocking relation to a known window in the accepted StructuredScene.",
      "no_light_blocking_evidence",
    );
  }

  const grounding: GroundingReference[] = blockers.flatMap(
    (blocker): GroundingReference[] => [
      { kind: "relation", relationId: blocker.relationId },
      { kind: "relation_attribute", relationId: blocker.relationId, attribute: "blockingType" },
      { kind: "node", nodeId: blocker.windowNodeId },
      { kind: "node_attribute", nodeId: blocker.windowNodeId, attribute: "typeLabel" },
    ],
  );

  return {
    outcome: "answered",
    answer: { blockers },
    grounding,
    completeness: anyUnknownExcluded ? "partial_due_to_unknown_scene_data" : "complete_for_known_scene_data",
  };
}
