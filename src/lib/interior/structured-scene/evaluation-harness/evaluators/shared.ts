/**
 * Step 6 — tiny shared helpers used by multiple query evaluators. Not a
 * framework: just the narrow, repeated Observed<T>/relation-evidence
 * extraction that every evaluator needs.
 */

import type { Observed, StructuredSceneRelation } from "../../types";
import type { EvidenceConfidence, QueryInsufficientOutcome } from "../types";

type KnownObserved<T> = Extract<Observed<T>, { readonly value: T }>;

export function isKnown<T>(observed: Observed<T>): observed is KnownObserved<T> {
  return observed.confidence !== "unknown_not_inferable";
}

export function toEvidence<T>(observed: KnownObserved<T>): EvidenceConfidence {
  return { confidence: observed.confidence, provenance: observed.provenance };
}

/**
 * Confidence/provenance gating for relations (Step 6 Scope Decision §16):
 * an unknown-confidence relation may never participate in an `answered`
 * result. Returns null when the relation is unusable.
 */
export function relationEvidence(relation: StructuredSceneRelation): EvidenceConfidence | null {
  if (relation.confidence === "unknown_not_inferable") return null;
  if (relation.provenance === "unknown_not_inferable") return null;
  return { confidence: relation.confidence, provenance: relation.provenance };
}

export function insufficient(reason: string, reasonCode: string): QueryInsufficientOutcome {
  return { outcome: "insufficient_scene_data", reason, reasonCode };
}
