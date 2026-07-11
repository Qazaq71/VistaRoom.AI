/**
 * Step 6 — Q7: Lighting affordances (ADR-012 §4.2 Q7, ADR-011 §5 class 5).
 * An Object qualifies if its known `affordances.value` contains the exact
 * literal "illumination", or its known `illuminationRelevance.value` is
 * `true`. No synonyms, no inference from typeLabel/appearance, no treating
 * unknown as false.
 */

import type { ObjectNode, StructuredSceneV0 } from "../../types";
import type { GroundingReference, Q7Answer, Q7ObjectItem, QueryEvaluationOutcome } from "../types";
import { insufficient, isKnown, toEvidence } from "./shared";

export function evaluateQ7(scene: StructuredSceneV0): QueryEvaluationOutcome<Q7Answer> {
  const objects = scene.nodes.filter((node): node is ObjectNode => node.category === "Object");
  if (objects.length === 0) {
    return insufficient("No Object nodes are present in the accepted StructuredScene.", "no_object_nodes");
  }

  const items: Q7ObjectItem[] = [];
  const grounding: GroundingReference[] = [];
  let anyUnknown = false;

  for (const object of objects) {
    if (isKnown(object.affordances) && object.affordances.value.includes("illumination")) {
      items.push({ nodeId: object.id, matchedVia: "affordances", evidence: toEvidence(object.affordances) });
      grounding.push(
        { kind: "node", nodeId: object.id },
        { kind: "node_attribute", nodeId: object.id, attribute: "affordances" },
      );
      continue;
    }

    if (isKnown(object.illuminationRelevance) && object.illuminationRelevance.value === true) {
      items.push({
        nodeId: object.id,
        matchedVia: "illuminationRelevance",
        evidence: toEvidence(object.illuminationRelevance),
      });
      grounding.push(
        { kind: "node", nodeId: object.id },
        { kind: "node_attribute", nodeId: object.id, attribute: "illuminationRelevance" },
      );
      continue;
    }

    if (!isKnown(object.affordances) || !isKnown(object.illuminationRelevance)) {
      anyUnknown = true;
    }
  }

  if (items.length === 0) {
    return insufficient(
      "No Object node has known evidence of an illumination affordance or illumination relevance.",
      "no_illumination_evidence",
    );
  }

  return {
    outcome: "answered",
    answer: { objects: items },
    grounding,
    completeness: anyUnknown ? "partial_due_to_unknown_scene_data" : "complete_for_known_scene_data",
  };
}
