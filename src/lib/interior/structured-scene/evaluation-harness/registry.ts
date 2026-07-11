/**
 * Step 6 — Q1-Q11 registry (Gate 2 C8, Final Gate 2 Scope Decision §9,
 * Implementation Package v1.0 §13). Fixes the stable Q1..Q11 order and the
 * staged capability status for each query. Deferred queries carry a
 * traceable reason; the registry never silently drops a query.
 */

import { QUERY_IDS, type QueryId, type QueryRegistryEntry } from "./types";

/**
 * Unsupported is empty because each Q1-Q11 query remains part of the
 * accepted ADR-012 contract. Queries that are not executable in the current
 * staged slice are deferred rather than permanently excluded.
 */
export const UNSUPPORTED_QUERY_EXPLANATION =
  "Unsupported is empty because each Q1-Q11 query remains part of the accepted ADR-012 contract. Queries that are not executable in the current staged slice are deferred rather than permanently excluded.";

export const QUERY_REGISTRY: readonly QueryRegistryEntry[] = [
  { queryId: "Q1", capabilityStatus: "supported" },
  { queryId: "Q2", capabilityStatus: "supported" },
  { queryId: "Q3", capabilityStatus: "supported" },
  {
    queryId: "Q4",
    capabilityStatus: "deferred",
    reason:
      "Traffic feasibility requires path connectivity, route traversal, and geometric feasibility reasoning that StructuredScene v0 and this staged harness do not implement.",
    reasonCode: "traffic_path_analysis_out_of_scope",
  },
  {
    queryId: "Q5",
    capabilityStatus: "deferred",
    reason:
      "Free space comparison requires an ordering rule over qualitativeSize (an open string), which would require inventing size semantics (e.g. small < medium < large) not defined by ADR-013.",
    reasonCode: "free_space_ordering_not_defined",
  },
  { queryId: "Q6", capabilityStatus: "supported" },
  { queryId: "Q7", capabilityStatus: "supported" },
  { queryId: "Q8", capabilityStatus: "supported" },
  { queryId: "Q9", capabilityStatus: "supported" },
  {
    queryId: "Q10",
    capabilityStatus: "deferred",
    reason:
      "Explaining why a placement is suboptimal or notable requires design-judgment rules (e.g. for \"suboptimal\", \"notable\") that are out of scope for Step 6.",
    reasonCode: "design_judgment_out_of_scope",
  },
  {
    queryId: "Q11",
    capabilityStatus: "deferred",
    reason:
      "Versioning readiness primitives (roomId, sceneId, sequence, stable node/relation identity) exist in StructuredScene v0, but a two-scene input contract, diff algorithm, and history storage are not implemented by this harness.",
    reasonCode: "versioning_readiness_demonstrated",
  },
];

export const UNSUPPORTED_QUERY_IDS: readonly QueryId[] = [];

// Registry invariant checks (fail fast if the static table above drifts).
if (QUERY_REGISTRY.length !== QUERY_IDS.length) {
  throw new Error("Step 6 QUERY_REGISTRY must contain exactly one entry per QueryId.");
}
QUERY_IDS.forEach((id, index) => {
  if (QUERY_REGISTRY[index]?.queryId !== id) {
    throw new Error(`Step 6 QUERY_REGISTRY order violation: expected "${id}" at index ${index}.`);
  }
});
