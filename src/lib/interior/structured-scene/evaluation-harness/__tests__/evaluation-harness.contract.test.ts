import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import {
  boundaryRejectedArbitraryUnknown,
  boundaryRejectedMissingSchemaVersion,
  boundaryRejectedPrimitive,
  supportedCompleteScene,
  supportedPartialScene,
  uncertainConfidenceScene,
  unknownConfidenceScene,
} from "../fixtures";
import { QUERY_REGISTRY, UNSUPPORTED_QUERY_EXPLANATION, UNSUPPORTED_QUERY_IDS } from "../registry";
import { validateGroundingReferences } from "../grounding";
import { evaluateStructuredScene } from "../evaluate";
import { QUERY_IDS } from "../types";
import type {
  EvaluationHarnessResult,
  EvaluationQueryResult,
  Q1Result,
  Q2Result,
  Q3Result,
  Q6Result,
  Q7Result,
  Q8Result,
  Q9Result,
} from "../types";

function queryResult<TId extends (typeof QUERY_IDS)[number]>(
  result: EvaluationHarnessResult,
  queryId: TId,
): EvaluationQueryResult {
  if (!result.accepted) throw new Error("expected accepted result");
  const found = result.report.queries.find((query) => query.queryId === queryId);
  if (!found) throw new Error(`no result for ${queryId}`);
  return found;
}

describe("Step 6 — Evaluation Harness registry", () => {
  it("contains each Q1-Q11 query exactly once, in stable order", () => {
    expect(QUERY_REGISTRY.map((entry) => entry.queryId)).toEqual(QUERY_IDS);
  });

  it("marks the approved staged subset as supported", () => {
    const supported = QUERY_REGISTRY.filter((e) => e.capabilityStatus === "supported").map((e) => e.queryId);
    expect(supported).toEqual(["Q1", "Q2", "Q3", "Q6", "Q7", "Q8", "Q9"]);
  });

  it("marks Q4, Q5, Q10, Q11 as deferred with a reason and reasonCode", () => {
    const deferred = QUERY_REGISTRY.filter((e) => e.capabilityStatus === "deferred");
    expect(deferred.map((e) => e.queryId)).toEqual(["Q4", "Q5", "Q10", "Q11"]);
    for (const entry of deferred) {
      expect(entry.reason.length).toBeGreaterThan(0);
      expect(entry.reasonCode.length).toBeGreaterThan(0);
    }
    const q11 = deferred.find((e) => e.queryId === "Q11");
    expect(q11?.reasonCode).toBe("versioning_readiness_demonstrated");
  });

  it("leaves unsupported empty, with an explicit explanation", () => {
    expect(UNSUPPORTED_QUERY_IDS).toEqual([]);
    expect(UNSUPPORTED_QUERY_EXPLANATION.length).toBeGreaterThan(0);
  });

  it("deferred queries in a real report carry no execution outcome, answer, or grounding", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    if (!result.accepted) throw new Error("expected accepted result");
    for (const q of ["Q4", "Q5", "Q10", "Q11"] as const) {
      const entry = queryResult(result, q);
      expect(entry.capabilityStatus).toBe("deferred");
      expect(entry).not.toHaveProperty("executionOutcome");
      expect(entry).not.toHaveProperty("answer");
      expect(entry).not.toHaveProperty("grounding");
    }
  });
});

describe("Step 6 — Boundary (Step 5 first)", () => {
  it("rejected scene short-circuits: accepted:false, diagnostics preserved, report:null", () => {
    const result = evaluateStructuredScene({ scene: boundaryRejectedMissingSchemaVersion });
    expect(result.accepted).toBe(false);
    if (result.accepted) throw new Error("unreachable");
    expect(result.report).toBeNull();
    expect(result.boundaryDiagnostics.length).toBeGreaterThan(0);
    expect(result.boundaryDiagnostics.some((v) => v.code === "missing_schema_version")).toBe(true);
  });

  it("arbitrary unknown input does not throw and is rejected", () => {
    expect(() => evaluateStructuredScene({ scene: boundaryRejectedArbitraryUnknown })).not.toThrow();
    expect(() => evaluateStructuredScene({ scene: boundaryRejectedPrimitive })).not.toThrow();
    expect(() => evaluateStructuredScene({ scene: null })).not.toThrow();
    expect(() => evaluateStructuredScene({ scene: undefined })).not.toThrow();
    const result = evaluateStructuredScene({ scene: boundaryRejectedArbitraryUnknown });
    expect(result.accepted).toBe(false);
  });

  it("does not mutate the input scene", () => {
    const before = JSON.parse(JSON.stringify(supportedCompleteScene));
    evaluateStructuredScene({ scene: supportedCompleteScene, queryParameters: { Q3: { nodeId: "node-sofa" } } });
    expect(JSON.parse(JSON.stringify(supportedCompleteScene))).toEqual(before);
  });

  it("accepted scene carries no boundary diagnostics and a full report", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    expect(result.accepted).toBe(true);
    if (!result.accepted) throw new Error("unreachable");
    expect(result.boundaryDiagnostics).toEqual([]);
    expect(result.report).not.toBeNull();
    expect(result.report.queries.length).toBe(11);
  });
});

describe("Step 6 — Grounding validator", () => {
  it("accepts a valid node reference", () => {
    expect(validateGroundingReferences(supportedCompleteScene, [{ kind: "node", nodeId: "node-room" }]).valid).toBe(
      true,
    );
  });

  it("accepts a valid relation reference", () => {
    expect(
      validateGroundingReferences(supportedCompleteScene, [
        { kind: "relation", relationId: "rel-sofa-adjacent-window" },
      ]).valid,
    ).toBe(true);
  });

  it("accepts a valid node attribute reference", () => {
    expect(
      validateGroundingReferences(supportedCompleteScene, [
        { kind: "node_attribute", nodeId: "node-room", attribute: "spaceTypeId" },
      ]).valid,
    ).toBe(true);
  });

  it("accepts a valid relation attribute reference", () => {
    expect(
      validateGroundingReferences(supportedCompleteScene, [
        { kind: "relation_attribute", relationId: "rel-bookshelf-blocks-window-light", attribute: "blockingType" },
      ]).valid,
    ).toBe(true);
  });

  it("rejects a missing node id", () => {
    const result = validateGroundingReferences(supportedCompleteScene, [{ kind: "node", nodeId: "does-not-exist" }]);
    expect(result.valid).toBe(false);
  });

  it("rejects a missing relation id", () => {
    const result = validateGroundingReferences(supportedCompleteScene, [
      { kind: "relation", relationId: "does-not-exist" },
    ]);
    expect(result.valid).toBe(false);
  });

  it("rejects an attribute that does not exist on the node's category", () => {
    const result = validateGroundingReferences(supportedCompleteScene, [
      { kind: "node_attribute", nodeId: "node-room", attribute: "typeLabel" },
    ]);
    expect(result.valid).toBe(false);
  });

  it("rejects an attribute that does not exist on the relation's category", () => {
    const result = validateGroundingReferences(supportedCompleteScene, [
      { kind: "relation_attribute", relationId: "rel-sofa-adjacent-window", attribute: "blockingType" },
    ]);
    expect(result.valid).toBe(false);
  });

  it("rejects an empty grounding array", () => {
    expect(validateGroundingReferences(supportedCompleteScene, []).valid).toBe(false);
  });
});

describe("Step 6 — Q1 (room identity and extent)", () => {
  it("answers with known identity and extent, complete", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q1 = queryResult(result, "Q1") as Q1Result;
    if (q1.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q1.answer.identity.known).toBe(true);
    expect(q1.answer.extent.known).toBe(true);
    expect(q1.completeness).toBe("complete_for_known_scene_data");
    expect(q1.grounding.length).toBeGreaterThan(0);
    expect(validateGroundingReferences(supportedCompleteScene, q1.grounding).valid).toBe(true);
  });

  it("discloses uncertainty via embedded evidence", () => {
    const result = evaluateStructuredScene({ scene: uncertainConfidenceScene });
    const q1 = queryResult(result, "Q1") as Q1Result;
    if (q1.executionOutcome !== "answered") throw new Error("expected answered");
    if (!q1.answer.identity.known) throw new Error("expected known identity");
    expect(q1.answer.identity.evidence.confidence).toBe("known_with_uncertainty");
  });

  it("known identity + unknown extent is partial", () => {
    const result = evaluateStructuredScene({ scene: supportedPartialScene });
    const q1 = queryResult(result, "Q1") as Q1Result;
    if (q1.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q1.answer.identity.known).toBe(true);
    expect(q1.answer.extent.known).toBe(false);
    expect(q1.completeness).toBe("partial_due_to_unknown_scene_data");
  });

  it("no metric conversion: extent stays a qualitative string", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q1 = queryResult(result, "Q1") as Q1Result;
    if (q1.executionOutcome !== "answered") throw new Error("expected answered");
    if (!q1.answer.extent.known) throw new Error("expected known extent");
    expect(typeof q1.answer.extent.qualitativeSize).toBe("string");
  });

  it("insufficient when no Room node is present", () => {
    const sceneWithoutRoom = { ...supportedCompleteScene, nodes: supportedCompleteScene.nodes.filter((n) => n.category !== "Room") };
    const result = evaluateStructuredScene({ scene: sceneWithoutRoom });
    const q1 = queryResult(result, "Q1") as Q1Result;
    expect(q1.executionOutcome).toBe("insufficient_scene_data");
    if (q1.executionOutcome === "insufficient_scene_data") {
      expect(q1.reasonCode).toBe("no_room_node");
      expect(q1).not.toHaveProperty("answer");
      expect(q1).not.toHaveProperty("grounding");
    }
  });

  it("is room_identity_and_extent_unknown when the Room node exists but both identity and extent are unknown_not_inferable", () => {
    const roomIdentityAndExtentUnknownScene = {
      ...supportedCompleteScene,
      nodes: supportedCompleteScene.nodes.map((n) =>
        n.id === "node-room" && n.category === "Room"
          ? {
              ...n,
              spaceTypeId: { confidence: "unknown_not_inferable" as const, provenance: "unknown_not_inferable" as const },
              spatialExtent: { confidence: "unknown_not_inferable" as const, provenance: "unknown_not_inferable" as const },
            }
          : n,
      ),
    };
    const result = evaluateStructuredScene({ scene: roomIdentityAndExtentUnknownScene });
    const q1 = queryResult(result, "Q1") as Q1Result;
    expect(q1.capabilityStatus).toBe("supported");
    expect(q1.executionOutcome).toBe("insufficient_scene_data");
    if (q1.executionOutcome === "insufficient_scene_data") {
      expect(q1.reasonCode).toBe("room_identity_and_extent_unknown");
      expect(q1).not.toHaveProperty("answer");
      expect(q1).not.toHaveProperty("grounding");
    }
  });
});

describe("Step 6 — Q2 (inventory)", () => {
  it("returns all Object/StructuralElement nodes, complete when all typeLabels known", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q2 = queryResult(result, "Q2") as Q2Result;
    if (q2.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q2.answer.items.length).toBe(4);
    expect(q2.completeness).toBe("complete_for_known_scene_data");
  });

  it("preserves unknown label without inventing a value, partial completeness", () => {
    const result = evaluateStructuredScene({ scene: supportedPartialScene });
    const q2 = queryResult(result, "Q2") as Q2Result;
    if (q2.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q2.answer.items.length).toBe(2);
    const mystery = q2.answer.items.find((item) => item.nodeId === "node-mystery-object");
    expect(mystery?.typeLabel.known).toBe(false);
    expect(q2.completeness).toBe("partial_due_to_unknown_scene_data");
  });

  it("insufficient when there are no Object/StructuralElement nodes", () => {
    const emptyScene = { ...supportedCompleteScene, nodes: supportedCompleteScene.nodes.filter((n) => n.category === "Room"), relations: [] };
    const result = evaluateStructuredScene({ scene: emptyScene });
    const q2 = queryResult(result, "Q2") as Q2Result;
    expect(q2.executionOutcome).toBe("insufficient_scene_data");
    if (q2.executionOutcome === "insufficient_scene_data") {
      expect(q2.reasonCode).toBe("no_inventory_nodes");
      expect(q2).not.toHaveProperty("answer");
      expect(q2).not.toHaveProperty("grounding");
    }
  });
});

describe("Step 6 — Q3 (direct relations for explicit nodeId)", () => {
  it("returns only direct relations touching the requested node", () => {
    const result = evaluateStructuredScene({
      scene: supportedCompleteScene,
      queryParameters: { Q3: { nodeId: "node-sofa" } },
    });
    const q3 = queryResult(result, "Q3") as Q3Result;
    if (q3.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q3.answer.relations.length).toBe(4);
    expect(q3.answer.relations.every((r) => r.otherNodeId !== "node-sofa")).toBe(true);
    expect(q3.completeness).toBe("complete_for_known_scene_data");
  });

  it("is missing_q3_node_id when no nodeId is provided", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q3 = queryResult(result, "Q3") as Q3Result;
    expect(q3.executionOutcome).toBe("insufficient_scene_data");
    if (q3.executionOutcome === "insufficient_scene_data") expect(q3.reasonCode).toBe("missing_q3_node_id");
  });

  it("is unknown_q3_node_id when the nodeId does not exist", () => {
    const result = evaluateStructuredScene({
      scene: supportedCompleteScene,
      queryParameters: { Q3: { nodeId: "does-not-exist" } },
    });
    const q3 = queryResult(result, "Q3") as Q3Result;
    expect(q3.executionOutcome).toBe("insufficient_scene_data");
    if (q3.executionOutcome === "insufficient_scene_data") expect(q3.reasonCode).toBe("unknown_q3_node_id");
  });

  it("excludes unknown-confidence relations and discloses partial completeness", () => {
    const result = evaluateStructuredScene({
      scene: unknownConfidenceScene,
      queryParameters: { Q3: { nodeId: "node-bookshelf" } },
    });
    const q3 = queryResult(result, "Q3") as Q3Result;
    if (q3.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q3.answer.relations.some((r) => r.relationId === "rel-unknown-light")).toBe(false);
    expect(q3.answer.relations.some((r) => r.relationId === "rel-bookshelf-adjacent-sofa")).toBe(true);
    expect(q3.completeness).toBe("partial_due_to_unknown_scene_data");
  });

  it("is insufficient when the node's only direct relation is unknown-confidence", () => {
    const result = evaluateStructuredScene({
      scene: unknownConfidenceScene,
      queryParameters: { Q3: { nodeId: "node-mystery" } },
    });
    const q3 = queryResult(result, "Q3") as Q3Result;
    expect(q3.executionOutcome).toBe("insufficient_scene_data");
    if (q3.executionOutcome === "insufficient_scene_data") expect(q3.reasonCode).toBe("no_usable_relations_for_node");
  });

  it("discloses uncertain relation evidence", () => {
    const result = evaluateStructuredScene({
      scene: uncertainConfidenceScene,
      queryParameters: { Q3: { nodeId: "node-bookshelf" } },
    });
    const q3 = queryResult(result, "Q3") as Q3Result;
    if (q3.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q3.answer.relations[0]?.evidence.confidence).toBe("known_with_uncertainty");
  });
});

describe("Step 6 — Q6 (natural-light blocking)", () => {
  it("matches an exact light-blocking relation to a known window", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q6 = queryResult(result, "Q6") as Q6Result;
    if (q6.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q6.answer.blockers.length).toBe(1);
    expect(q6.answer.blockers[0]?.windowNodeId).toBe("node-window");
    expect(q6.completeness).toBe("complete_for_known_scene_data");
  });

  it("discloses uncertain relation and window-label evidence", () => {
    const result = evaluateStructuredScene({ scene: uncertainConfidenceScene });
    const q6 = queryResult(result, "Q6") as Q6Result;
    if (q6.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q6.answer.blockers[0]?.relationEvidence.confidence).toBe("known_with_uncertainty");
    expect(q6.answer.blockers[0]?.windowTypeLabelEvidence.confidence).toBe("known_with_uncertainty");
  });

  it("excludes an unknown-confidence relation and an unknown window label, still answers with partial completeness", () => {
    const result = evaluateStructuredScene({ scene: unknownConfidenceScene });
    const q6 = queryResult(result, "Q6") as Q6Result;
    if (q6.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q6.answer.blockers.map((b) => b.relationId)).toEqual(["rel-known-light"]);
    expect(q6.completeness).toBe("partial_due_to_unknown_scene_data");
  });

  it("does not assert 'nothing blocks light' when there is no usable evidence", () => {
    const noLightScene = {
      ...supportedCompleteScene,
      relations: supportedCompleteScene.relations.filter((r) => !(r.category === "Blocking" && r.blockingType === "light")),
    };
    const result = evaluateStructuredScene({ scene: noLightScene });
    const q6 = queryResult(result, "Q6") as Q6Result;
    expect(q6.executionOutcome).toBe("insufficient_scene_data");
    if (q6.executionOutcome === "insufficient_scene_data") {
      expect(q6.reasonCode).toBe("no_light_blocking_evidence");
      expect(q6).not.toHaveProperty("answer");
      expect(q6).not.toHaveProperty("grounding");
    }
  });
});

describe("Step 6 — Q7 (lighting affordances)", () => {
  it("matches the exact 'illumination' affordance tag", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q7 = queryResult(result, "Q7") as Q7Result;
    if (q7.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q7.answer.objects.some((o) => o.nodeId === "node-lamp" && o.matchedVia === "affordances")).toBe(true);
  });

  it("matches illuminationRelevance === true", () => {
    const objectOnlyRelevance = {
      ...supportedCompleteScene,
      nodes: supportedCompleteScene.nodes.map((n) =>
        n.id === "node-lamp" && n.category === "Object" ? { ...n, affordances: { confidence: "known_with_confidence" as const, provenance: "visually_observed" as const, value: [] } } : n,
      ),
    };
    const result = evaluateStructuredScene({ scene: objectOnlyRelevance });
    const q7 = queryResult(result, "Q7") as Q7Result;
    if (q7.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q7.answer.objects.some((o) => o.nodeId === "node-lamp" && o.matchedVia === "illuminationRelevance")).toBe(
      true,
    );
  });

  it("discloses an uncertain matching attribute", () => {
    const result = evaluateStructuredScene({ scene: uncertainConfidenceScene });
    const q7 = queryResult(result, "Q7") as Q7Result;
    if (q7.executionOutcome !== "answered") throw new Error("expected answered");
    const bookshelf = q7.answer.objects.find((o) => o.nodeId === "node-bookshelf");
    expect(bookshelf?.evidence.confidence).toBe("known_with_uncertainty");
  });

  it("does not treat unknown affordances/illuminationRelevance as false", () => {
    const result = evaluateStructuredScene({ scene: unknownConfidenceScene });
    const q7 = queryResult(result, "Q7") as Q7Result;
    if (q7.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q7.answer.objects.some((o) => o.nodeId === "node-mystery")).toBe(false);
    expect(q7.completeness).toBe("partial_due_to_unknown_scene_data");
  });

  it("does not apply synonyms (e.g. 'lighting' does not match 'illumination')", () => {
    const synonymScene = {
      ...supportedCompleteScene,
      nodes: supportedCompleteScene.nodes.map((n) =>
        n.id === "node-lamp" && n.category === "Object"
          ? {
              ...n,
              affordances: { confidence: "known_with_confidence" as const, provenance: "visually_observed" as const, value: ["lighting"] },
              illuminationRelevance: { confidence: "known_with_confidence" as const, provenance: "visually_observed" as const, value: false },
            }
          : n,
      ),
    };
    const result = evaluateStructuredScene({ scene: synonymScene });
    const q7 = queryResult(result, "Q7") as Q7Result;
    expect(q7.executionOutcome).toBe("insufficient_scene_data");
    if (q7.executionOutcome === "insufficient_scene_data") {
      expect(q7.reasonCode).toBe("no_illumination_evidence");
      expect(q7).not.toHaveProperty("answer");
      expect(q7).not.toHaveProperty("grounding");
    }
  });

  it("is no_object_nodes when the scene has no Object nodes at all", () => {
    const noObjectsScene = {
      ...supportedCompleteScene,
      nodes: supportedCompleteScene.nodes.filter((n) => n.category !== "Object"),
      relations: [],
    };
    const result = evaluateStructuredScene({ scene: noObjectsScene });
    const q7 = queryResult(result, "Q7") as Q7Result;
    expect(q7.executionOutcome).toBe("insufficient_scene_data");
    if (q7.executionOutcome === "insufficient_scene_data") {
      expect(q7.reasonCode).toBe("no_object_nodes");
      expect(q7).not.toHaveProperty("answer");
      expect(q7).not.toHaveProperty("grounding");
    }
  });
});

describe("Step 6 — Q8 (object affordances, grouped)", () => {
  it("groups objects by exact known affordance tags", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q8 = queryResult(result, "Q8") as Q8Result;
    if (q8.executionOutcome !== "answered") throw new Error("expected answered");
    const affordances = q8.answer.groups.map((g) => g.affordance).sort();
    expect(affordances).toEqual(["illumination", "seating", "storage"]);
    expect(q8.completeness).toBe("complete_for_known_scene_data");
  });

  it("discloses uncertain affordance evidence", () => {
    const result = evaluateStructuredScene({ scene: uncertainConfidenceScene });
    const q8 = queryResult(result, "Q8") as Q8Result;
    if (q8.executionOutcome !== "answered") throw new Error("expected answered");
    const storageGroup = q8.answer.groups.find((g) => g.affordance === "storage");
    expect(storageGroup?.items[0]?.evidence.confidence).toBe("known_with_uncertainty");
  });

  it("reflects unknown-affordance partiality without inventing tags", () => {
    const result = evaluateStructuredScene({ scene: supportedPartialScene });
    const q8 = queryResult(result, "Q8") as Q8Result;
    if (q8.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q8.completeness).toBe("partial_due_to_unknown_scene_data");
    expect(q8.answer.groups.every((g) => g.items.every((i) => i.nodeId !== "node-mystery-object"))).toBe(true);
  });

  it("is no_object_nodes when the scene has no Object nodes at all", () => {
    const noObjectsScene = {
      ...supportedCompleteScene,
      nodes: supportedCompleteScene.nodes.filter((n) => n.category !== "Object"),
      relations: [],
    };
    const result = evaluateStructuredScene({ scene: noObjectsScene });
    const q8 = queryResult(result, "Q8") as Q8Result;
    expect(q8.executionOutcome).toBe("insufficient_scene_data");
    if (q8.executionOutcome === "insufficient_scene_data") {
      expect(q8.reasonCode).toBe("no_object_nodes");
      expect(q8).not.toHaveProperty("answer");
      expect(q8).not.toHaveProperty("grounding");
    }
  });

  it("is no_known_affordances when Object nodes exist but none have known affordances", () => {
    const noKnownAffordancesScene = {
      ...supportedCompleteScene,
      nodes: supportedCompleteScene.nodes.map((n) =>
        n.category === "Object"
          ? { ...n, affordances: { confidence: "unknown_not_inferable" as const, provenance: "unknown_not_inferable" as const } }
          : n,
      ),
    };
    const result = evaluateStructuredScene({ scene: noKnownAffordancesScene });
    const q8 = queryResult(result, "Q8") as Q8Result;
    expect(q8.executionOutcome).toBe("insufficient_scene_data");
    if (q8.executionOutcome === "insufficient_scene_data") {
      expect(q8.reasonCode).toBe("no_known_affordances");
      expect(q8).not.toHaveProperty("answer");
      expect(q8).not.toHaveProperty("grounding");
    }
  });
});

describe("Step 6 — Q9 (explicit traffic/clearance conflicts)", () => {
  it("matches exact 'traffic' blocking type", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q9 = queryResult(result, "Q9") as Q9Result;
    if (q9.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q9.answer.conflicts.some((c) => c.blockingType === "traffic")).toBe(true);
  });

  it("matches exact 'clearance' blocking type", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    const q9 = queryResult(result, "Q9") as Q9Result;
    if (q9.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q9.answer.conflicts.some((c) => c.blockingType === "clearance")).toBe(true);
  });

  it("discloses uncertain relation evidence", () => {
    const result = evaluateStructuredScene({ scene: uncertainConfidenceScene });
    const q9 = queryResult(result, "Q9") as Q9Result;
    if (q9.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q9.answer.conflicts[0]?.evidence.confidence).toBe("known_with_uncertainty");
  });

  it("excludes unknown-confidence relations, partial completeness", () => {
    const result = evaluateStructuredScene({ scene: unknownConfidenceScene });
    const q9 = queryResult(result, "Q9") as Q9Result;
    if (q9.executionOutcome !== "answered") throw new Error("expected answered");
    expect(q9.answer.conflicts.map((c) => c.relationId)).toEqual(["rel-clearance-known"]);
    expect(q9.completeness).toBe("partial_due_to_unknown_scene_data");
  });

  it("does not assert 'no conflicts' when there is no usable evidence", () => {
    const noConflictScene = {
      ...supportedCompleteScene,
      relations: supportedCompleteScene.relations.filter(
        (r) => !(r.category === "Blocking" && (r.blockingType === "traffic" || r.blockingType === "clearance")),
      ),
    };
    const result = evaluateStructuredScene({ scene: noConflictScene });
    const q9 = queryResult(result, "Q9") as Q9Result;
    expect(q9.executionOutcome).toBe("insufficient_scene_data");
    if (q9.executionOutcome === "insufficient_scene_data") {
      expect(q9.reasonCode).toBe("no_usable_conflict_evidence");
      expect(q9).not.toHaveProperty("answer");
      expect(q9).not.toHaveProperty("grounding");
    }
  });
});

describe("Step 6 — PerceptionFidelity", () => {
  it("is always the fixed diagnostic-only, not-measured value", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    if (!result.accepted) throw new Error("expected accepted result");
    expect(result.report.perceptionFidelity).toEqual({
      status: "not_measured",
      role: "diagnostic_only",
      reason: "Real-photo perception fidelity is outside Step 6 synthetic representation-queryability evaluation.",
    });
    expect(result.report.perceptionFidelity).not.toHaveProperty("score");
    expect(result.report.perceptionFidelity).not.toHaveProperty("threshold");
  });

  it("lists the ADR-012 evaluation dimensions this harness does not compute", () => {
    const result = evaluateStructuredScene({ scene: supportedCompleteScene });
    if (!result.accepted) throw new Error("expected accepted result");
    expect(result.report.unmeasuredEvaluationDimensions).toContain("Query Accuracy");
    expect(result.report.unmeasuredEvaluationDimensions).toContain("Human Understanding Review");
  });
});

describe("Step 6 — Regression", () => {
  const STEP2_FORBIDDEN_STRINGS = [
    "hybrid-validation",
    "validateAndNormalizeCandidateScene",
    "normalizeObserved",
    "VlmSceneCandidate",
    "CandidateNode",
    "CandidateRelation",
    "CandidateObserved",
  ] as const;

  function collectStep6SourceFiles(dir: string): string[] {
    const files: string[] = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      // Exclude __tests__: this spec file legitimately holds the forbidden strings above as
      // test data (the list itself), which would otherwise flag itself as a violation.
      if (entry.isDirectory()) {
        if (entry.name === "__tests__") continue;
        files.push(...collectStep6SourceFiles(path.join(dir, entry.name)));
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(".ts")) {
        files.push(path.join(dir, entry.name));
      }
    }
    return files;
  }

  it("does not reference Step 2 candidate-normalization internals in any Step 6 production source file", () => {
    const rootDir = path.resolve(__dirname, "..");
    const sourceFiles = collectStep6SourceFiles(rootDir);

    expect(sourceFiles.length).toBeGreaterThan(0);

    for (const file of sourceFiles) {
      const contents = readFileSync(file, "utf-8");
      for (const forbidden of STEP2_FORBIDDEN_STRINGS) {
        expect(contents.includes(forbidden)).toBe(false);
      }
    }
  });
});
