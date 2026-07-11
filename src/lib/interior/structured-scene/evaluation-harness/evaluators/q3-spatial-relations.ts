/**
 * Step 6 — Q3: Direct relations for an explicit nodeId (ADR-012 §4.2 Q3,
 * ADR-011 §5 class 3). Requires `queryParameters.Q3.nodeId`. Returns only
 * direct Adjacency/Containment/Blocking relations where the requested node
 * is `fromNodeId` or `toNodeId` — no transitive inference, no relation
 * inference from placement, no endpoint-direction rewriting.
 */

import type { EvaluationHarnessInput } from "../types";
import type { StructuredSceneV0 } from "../../types";
import type { GroundingReference, Q3Answer, Q3RelationItem, QueryEvaluationOutcome } from "../types";
import { insufficient, relationEvidence } from "./shared";

export function evaluateQ3(
  scene: StructuredSceneV0,
  queryParameters: EvaluationHarnessInput["queryParameters"],
): QueryEvaluationOutcome<Q3Answer> {
  const nodeId = queryParameters?.Q3?.nodeId;
  if (!nodeId) {
    return insufficient("Q3 requires queryParameters.Q3.nodeId to be provided.", "missing_q3_node_id");
  }

  const nodeExists = scene.nodes.some((node) => node.id === nodeId);
  if (!nodeExists) {
    return insufficient(
      `No node with id "${nodeId}" exists in the accepted StructuredScene.`,
      "unknown_q3_node_id",
    );
  }

  const direct = scene.relations.filter((relation) => relation.fromNodeId === nodeId || relation.toNodeId === nodeId);

  const usable: Q3RelationItem[] = [];
  let anyExcluded = false;

  for (const relation of direct) {
    const evidence = relationEvidence(relation);
    if (!evidence) {
      anyExcluded = true;
      continue;
    }
    usable.push({
      relationId: relation.id,
      category: relation.category,
      direction: relation.fromNodeId === nodeId ? "from" : "to",
      otherNodeId: relation.fromNodeId === nodeId ? relation.toNodeId : relation.fromNodeId,
      blockingType: relation.category === "Blocking" ? relation.blockingType : null,
      evidence,
    });
  }

  if (usable.length === 0) {
    return insufficient(
      `No usable (non-unknown-confidence) direct relations were found for node "${nodeId}".`,
      "no_usable_relations_for_node",
    );
  }

  const grounding: GroundingReference[] = [
    { kind: "node", nodeId },
    ...usable.map((item): GroundingReference => ({ kind: "relation", relationId: item.relationId })),
  ];

  return {
    outcome: "answered",
    answer: { nodeId, relations: usable },
    grounding,
    completeness: anyExcluded ? "partial_due_to_unknown_scene_data" : "complete_for_known_scene_data",
  };
}
