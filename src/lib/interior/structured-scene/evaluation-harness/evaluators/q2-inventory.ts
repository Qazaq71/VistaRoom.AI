/**
 * Step 6 — Q2: Inventory (ADR-012 §4.2 Q2, ADR-011 §5 class 2). Returns
 * every accepted Object/StructuralElement node, with actual known
 * typeLabel or an explicit unknown state. No semantic filtering, no
 * inferred labels, no synonym normalization, no exclusion of
 * unknown-labelled nodes.
 */

import type { ObjectNode, StructuralElementNode, StructuredSceneV0 } from "../../types";
import type { GroundingReference, Q2Answer, Q2InventoryItem, QueryEvaluationOutcome } from "../types";
import { insufficient, isKnown, toEvidence } from "./shared";

export function evaluateQ2(scene: StructuredSceneV0): QueryEvaluationOutcome<Q2Answer> {
  const nodes = scene.nodes.filter(
    (node): node is ObjectNode | StructuralElementNode =>
      node.category === "Object" || node.category === "StructuralElement",
  );

  if (nodes.length === 0) {
    return insufficient(
      "No Object or StructuralElement nodes are present in the accepted StructuredScene.",
      "no_inventory_nodes",
    );
  }

  const items: Q2InventoryItem[] = [];
  const grounding: GroundingReference[] = [];
  let anyUnknown = false;

  for (const node of nodes) {
    grounding.push({ kind: "node", nodeId: node.id });
    if (isKnown(node.typeLabel)) {
      grounding.push({ kind: "node_attribute", nodeId: node.id, attribute: "typeLabel" });
      items.push({
        nodeId: node.id,
        category: node.category,
        typeLabel: { known: true, value: node.typeLabel.value, evidence: toEvidence(node.typeLabel) },
      });
    } else {
      anyUnknown = true;
      items.push({ nodeId: node.id, category: node.category, typeLabel: { known: false } });
    }
  }

  return {
    outcome: "answered",
    answer: { items },
    grounding,
    completeness: anyUnknown ? "partial_due_to_unknown_scene_data" : "complete_for_known_scene_data",
  };
}
