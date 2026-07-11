/**
 * Step 6 — Q8: Object affordances, grouped (ADR-012 §4.2 Q8, ADR-011 §5
 * class 6). Groups Object nodes by their exact known `affordances.value`
 * strings. No ontology creation, no synonym mapping, no inference from
 * typeLabel, no treating unknown affordances as empty.
 */

import type { ObjectNode, StructuredSceneV0 } from "../../types";
import type {
  GroundingReference,
  Q8AffordanceEvidence,
  Q8AffordanceGroup,
  Q8Answer,
  QueryEvaluationOutcome,
} from "../types";
import { insufficient, isKnown, toEvidence } from "./shared";

export function evaluateQ8(scene: StructuredSceneV0): QueryEvaluationOutcome<Q8Answer> {
  const objects = scene.nodes.filter((node): node is ObjectNode => node.category === "Object");
  if (objects.length === 0) {
    return insufficient("No Object nodes are present in the accepted StructuredScene.", "no_object_nodes");
  }

  const groupMap = new Map<string, Q8AffordanceEvidence[]>();
  const grounding: GroundingReference[] = [];
  let anyUnknown = false;

  for (const object of objects) {
    if (!isKnown(object.affordances)) {
      anyUnknown = true;
      continue;
    }

    const evidence = toEvidence(object.affordances);
    for (const tag of object.affordances.value) {
      const list = groupMap.get(tag) ?? [];
      list.push({ nodeId: object.id, evidence });
      groupMap.set(tag, list);
    }
    grounding.push(
      { kind: "node", nodeId: object.id },
      { kind: "node_attribute", nodeId: object.id, attribute: "affordances" },
    );
  }

  const groups: Q8AffordanceGroup[] = Array.from(groupMap.entries()).map(([affordance, items]) => ({
    affordance,
    items,
  }));

  if (groups.length === 0) {
    return insufficient("No Object node has known affordance tags.", "no_known_affordances");
  }

  return {
    outcome: "answered",
    answer: { groups },
    grounding,
    completeness: anyUnknown ? "partial_due_to_unknown_scene_data" : "complete_for_known_scene_data",
  };
}
