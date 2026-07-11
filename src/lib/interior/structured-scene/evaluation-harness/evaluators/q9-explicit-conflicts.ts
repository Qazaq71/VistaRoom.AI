/**
 * Step 6 — Q9: Explicit traffic/clearance conflicts (ADR-012 §4.2 Q9,
 * ADR-011 §5 class 3 refinement per ADR-012 §4.2 clarification). Only
 * Blocking relations with exact `blockingType === "traffic"` or
 * `"clearance"` qualify, subject to confidence gating. No path analysis,
 * no distance calculation, no ergonomics, no "no conflicts" claim absent
 * usable evidence.
 */

import type { BlockingRelation, StructuredSceneV0 } from "../../types";
import type { GroundingReference, Q9Answer, Q9ConflictItem, QueryEvaluationOutcome } from "../types";
import { insufficient, relationEvidence } from "./shared";

function isSupportedConflictType(value: string): value is "traffic" | "clearance" {
  return value === "traffic" || value === "clearance";
}

export function evaluateQ9(scene: StructuredSceneV0): QueryEvaluationOutcome<Q9Answer> {
  const candidates = scene.relations.filter(
    (relation): relation is BlockingRelation =>
      relation.category === "Blocking" && isSupportedConflictType(relation.blockingType),
  );

  const conflicts: Q9ConflictItem[] = [];
  let anyExcluded = false;

  for (const relation of candidates) {
    const evidence = relationEvidence(relation);
    if (!evidence) {
      anyExcluded = true;
      continue;
    }
    if (!isSupportedConflictType(relation.blockingType)) continue;
    conflicts.push({
      relationId: relation.id,
      blockingType: relation.blockingType,
      fromNodeId: relation.fromNodeId,
      toNodeId: relation.toNodeId,
      evidence,
    });
  }

  if (conflicts.length === 0) {
    return insufficient(
      "No usable traffic/clearance Blocking relation evidence is present in the accepted StructuredScene.",
      "no_usable_conflict_evidence",
    );
  }

  const grounding: GroundingReference[] = conflicts.flatMap(
    (conflict): GroundingReference[] => [
      { kind: "relation", relationId: conflict.relationId },
      { kind: "relation_attribute", relationId: conflict.relationId, attribute: "blockingType" },
    ],
  );

  return {
    outcome: "answered",
    answer: { conflicts },
    grounding,
    completeness: anyExcluded ? "partial_due_to_unknown_scene_data" : "complete_for_known_scene_data",
  };
}
