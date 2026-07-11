/**
 * Step 6 — Evaluation Harness entry point (Gate 2 C8, Implementation
 * Package v1.0, Step 6 Scope Decision). The first runtime action is always
 * `validateStructuredSceneBoundary` (Step 5). On rejection, no evaluator
 * runs and no report is built. On acceptance, every Q1-Q11 registry entry
 * is evaluated in stable order.
 */

import { validateStructuredSceneBoundary } from "../boundary-validator";
import type { StructuredSceneV0 } from "../types";
import {
  evaluateQ1,
  evaluateQ2,
  evaluateQ3,
  evaluateQ6,
  evaluateQ7,
  evaluateQ8,
  evaluateQ9,
} from "./evaluators";
import { validateGroundingReferences } from "./grounding";
import { QUERY_REGISTRY, UNSUPPORTED_QUERY_EXPLANATION, UNSUPPORTED_QUERY_IDS } from "./registry";
import type {
  EvaluationHarnessInput,
  EvaluationHarnessResult,
  EvaluationQueryResult,
  EvaluationReport,
  PerceptionFidelity,
  QueryEvaluationOutcome,
  QueryId,
  SupportedQueryResult,
} from "./types";

const PERCEPTION_FIDELITY: PerceptionFidelity = {
  status: "not_measured",
  role: "diagnostic_only",
  reason: "Real-photo perception fidelity is outside Step 6 synthetic representation-queryability evaluation.",
};

/** ADR-012 §4.4 dimensions this Step 6 harness does not compute. */
const UNMEASURED_EVALUATION_DIMENSIONS: readonly string[] = [
  "Query Accuracy",
  "Graph / Relation Consistency",
  "Explanation Faithfulness",
  "Version / Before-After Consistency",
  "Human Understanding Review",
];

function toSupportedResult<TId extends QueryId, TAnswer>(
  queryId: TId,
  outcome: QueryEvaluationOutcome<TAnswer>,
): SupportedQueryResult<TId, TAnswer> {
  if (outcome.outcome === "answered") {
    return {
      queryId,
      capabilityStatus: "supported",
      executionOutcome: "answered",
      answer: outcome.answer,
      grounding: outcome.grounding,
      completeness: outcome.completeness,
    };
  }
  return {
    queryId,
    capabilityStatus: "supported",
    executionOutcome: "insufficient_scene_data",
    reason: outcome.reason,
    reasonCode: outcome.reasonCode,
  };
}

function assertValidGrounding(scene: StructuredSceneV0, result: EvaluationQueryResult): void {
  if (result.capabilityStatus !== "supported" || result.executionOutcome !== "answered") return;
  const validation = validateGroundingReferences(scene, result.grounding);
  if (!validation.valid) {
    throw new Error(`Step 6 internal contract violation for ${result.queryId}: ${validation.reason}`);
  }
}

function evaluateSupportedQuery(
  queryId: QueryId,
  scene: StructuredSceneV0,
  queryParameters: EvaluationHarnessInput["queryParameters"],
): EvaluationQueryResult {
  switch (queryId) {
    case "Q1":
      return toSupportedResult("Q1", evaluateQ1(scene));
    case "Q2":
      return toSupportedResult("Q2", evaluateQ2(scene));
    case "Q3":
      return toSupportedResult("Q3", evaluateQ3(scene, queryParameters));
    case "Q6":
      return toSupportedResult("Q6", evaluateQ6(scene));
    case "Q7":
      return toSupportedResult("Q7", evaluateQ7(scene));
    case "Q8":
      return toSupportedResult("Q8", evaluateQ8(scene));
    case "Q9":
      return toSupportedResult("Q9", evaluateQ9(scene));
    default:
      throw new Error(`Step 6 internal contract violation: "${queryId}" is registered as supported but has no evaluator.`);
  }
}

function buildReport(scene: StructuredSceneV0, queryParameters: EvaluationHarnessInput["queryParameters"]): EvaluationReport {
  const queries: EvaluationQueryResult[] = QUERY_REGISTRY.map((entry) => {
    if (entry.capabilityStatus === "deferred") {
      // Cast is safe: registry.ts asserts at module load that each QueryId appears exactly
      // once, in stable order, so entry.queryId here is always the specific literal that
      // pairs with a Q4Result | Q5Result | Q10Result | Q11Result member of EvaluationQueryResult.
      return {
        queryId: entry.queryId,
        capabilityStatus: "deferred",
        reason: entry.reason,
        reasonCode: entry.reasonCode,
      } as EvaluationQueryResult;
    }
    const result = evaluateSupportedQuery(entry.queryId, scene, queryParameters);
    assertValidGrounding(scene, result);
    return result;
  });

  return {
    queries,
    perceptionFidelity: PERCEPTION_FIDELITY,
    unmeasuredEvaluationDimensions: UNMEASURED_EVALUATION_DIMENSIONS,
    stagedSubset: {
      supported: QUERY_REGISTRY.filter((entry) => entry.capabilityStatus === "supported").map((entry) => entry.queryId),
      deferred: QUERY_REGISTRY.filter((entry) => entry.capabilityStatus === "deferred").map((entry) => entry.queryId),
      unsupported: UNSUPPORTED_QUERY_IDS,
      unsupportedExplanation: UNSUPPORTED_QUERY_EXPLANATION,
    },
  };
}

/**
 * Public Step 6 entry point. Always validates `input.scene` through the
 * Step 5 Boundary Validator first; only an accepted scene is evaluated
 * against the Q1-Q11 registry.
 */
export function evaluateStructuredScene(input: EvaluationHarnessInput): EvaluationHarnessResult {
  const boundary = validateStructuredSceneBoundary(input.scene);

  if (!boundary.valid) {
    return { accepted: false, boundaryDiagnostics: boundary.violations, report: null };
  }

  const scene = input.scene as StructuredSceneV0;
  const report = buildReport(scene, input.queryParameters);

  return { accepted: true, boundaryDiagnostics: [], report };
}
