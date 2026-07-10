import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { STRUCTURED_SCENE_NODE_CATEGORIES, STRUCTURED_SCENE_RELATION_CATEGORIES, STRUCTURED_SCENE_SCHEMA_VERSION } from "../../types";
import { VLM_CANDIDATE_SHAPE_STATUS } from "../candidate-types";
import { HEURISTIC_VALIDATION_STATUS, validateAndNormalizeCandidateScene } from "../validate";
import {
  inventedCertaintyCandidate,
  missingIdentityCandidate,
  unsupportedCategoryCandidate,
  validSceneCandidate,
} from "../fixtures";

describe("Step 2 — Hybrid VLM + heuristic validation mechanism boundary (Gate 2 C8)", () => {
  it("synthetic candidate input can produce a StructuredSceneV0", () => {
    const result = validateAndNormalizeCandidateScene(validSceneCandidate);
    expect(result.status).toBe("success");
    if (result.status !== "success") throw new Error("expected success");
    expect(result.scene.nodes.length).toBeGreaterThan(0);
    expect(result.scene.relations.length).toBeGreaterThan(0);
    expect(result.scene.roomId).toBe("room-candidate-001");
  });

  it('output schemaVersion is "structured-scene.v0"', () => {
    const result = validateAndNormalizeCandidateScene(validSceneCandidate);
    expect(result.status).toBe("success");
    if (result.status !== "success") throw new Error("expected success");
    expect(result.scene.schemaVersion).toBe("structured-scene.v0");
    expect(result.scene.schemaVersion).toBe(STRUCTURED_SCENE_SCHEMA_VERSION);
  });

  it("unsupported node-like candidate input is rejected/excluded without silent category expansion", () => {
    const result = validateAndNormalizeCandidateScene(unsupportedCategoryCandidate);
    expect(result.status).toBe("success");
    if (result.status !== "success") throw new Error("expected success");

    // The bogus node never made it into the output.
    expect(result.scene.nodes.some((node) => node.id === "node-mystery")).toBe(false);
    // The exclusion was reported, not silently dropped.
    expect(
      result.excludedNodes.some(
        (reason) => reason.code === "unsupported_node_category" && reason.candidateId === "node-mystery",
      ),
    ).toBe(true);
    // The closed category list itself was never mutated/expanded.
    expect(STRUCTURED_SCENE_NODE_CATEGORIES).not.toContain("Furniture");
    for (const node of result.scene.nodes) {
      expect(STRUCTURED_SCENE_NODE_CATEGORIES).toContain(node.category);
    }
  });

  it("unsupported relation-like candidate input is rejected/excluded without silent category expansion", () => {
    const result = validateAndNormalizeCandidateScene(unsupportedCategoryCandidate);
    expect(result.status).toBe("success");
    if (result.status !== "success") throw new Error("expected success");

    expect(result.scene.relations.some((relation) => relation.id === "rel-proximity")).toBe(false);
    expect(
      result.excludedRelations.some(
        (reason) => reason.code === "unsupported_relation_category" && reason.candidateId === "rel-proximity",
      ),
    ).toBe(true);
    expect(STRUCTURED_SCENE_RELATION_CATEGORIES).not.toContain("Proximity");
    for (const relation of result.scene.relations) {
      expect(STRUCTURED_SCENE_RELATION_CATEGORIES).toContain(relation.category);
    }
  });

  it("uncertain candidate data remains known_with_uncertainty or unknown_not_inferable", () => {
    const result = validateAndNormalizeCandidateScene(validSceneCandidate);
    expect(result.status).toBe("success");
    if (result.status !== "success") throw new Error("expected success");

    const roomNode = result.scene.nodes.find((node) => node.category === "Room");
    expect(roomNode?.category).toBe("Room");
    if (roomNode?.category === "Room") {
      // Candidate declared spatialExtent as known_with_uncertainty — must not be
      // silently upgraded to known_with_confidence.
      expect(roomNode.spatialExtent.confidence).toBe("known_with_uncertainty");
    }
  });

  it("missing candidate data is not converted into invented certainty", () => {
    const result = validateAndNormalizeCandidateScene(inventedCertaintyCandidate);
    expect(result.status).toBe("success");
    if (result.status !== "success") throw new Error("expected success");

    const roomNode = result.scene.nodes.find((node) => node.category === "Room");
    expect(roomNode?.category).toBe("Room");
    if (roomNode?.category === "Room") {
      // Candidate claimed known_with_confidence but supplied no value — the
      // heuristic layer must not invent one, so it collapses to unknown.
      expect(roomNode.spaceTypeId.confidence).toBe("unknown_not_inferable");
      expect("value" in roomNode.spaceTypeId).toBe(false);
    }
  });

  it("provenance is preserved or represented honestly", () => {
    const result = validateAndNormalizeCandidateScene(validSceneCandidate);
    expect(result.status).toBe("success");
    if (result.status !== "success") throw new Error("expected success");

    const sofaNode = result.scene.nodes.find((node) => node.id === "node-sofa");
    expect(sofaNode?.category).toBe("Object");
    if (sofaNode?.category === "Object") {
      // Candidate explicitly said visually_observed — preserved verbatim.
      expect(sofaNode.typeLabel.provenance).toBe("visually_observed");
    }

    // Where the candidate's confidence claim was contradictory (no backing value),
    // provenance is honestly represented as unknown_not_inferable rather than
    // carrying forward an unsupported claim.
    const inventedResult = validateAndNormalizeCandidateScene(inventedCertaintyCandidate);
    expect(inventedResult.status).toBe("success");
    if (inventedResult.status === "success") {
      const roomNode = inventedResult.scene.nodes.find((node) => node.category === "Room");
      if (roomNode?.category === "Room") {
        expect(roomNode.spaceTypeId.provenance).toBe("unknown_not_inferable");
      }
    }
  });

  it("structured rejection includes clear reasons", () => {
    const result = validateAndNormalizeCandidateScene(missingIdentityCandidate);
    expect(result.status).toBe("rejected");
    if (result.status !== "rejected") throw new Error("expected rejected");
    expect(result.reasons.length).toBeGreaterThan(0);
    expect(result.reasons.some((reason) => reason.code === "missing_room_id")).toBe(true);
    for (const reason of result.reasons) {
      expect(typeof reason.code).toBe("string");
      expect(reason.code.length).toBeGreaterThan(0);
      expect(typeof reason.message).toBe("string");
      expect(reason.message.length).toBeGreaterThan(0);
    }
  });

  it("mechanism is clearly marked temporary/bounded/replaceable", () => {
    expect(VLM_CANDIDATE_SHAPE_STATUS).toBe("temporary_bounded_replaceable");
    expect(HEURISTIC_VALIDATION_STATUS).toBe("temporary_bounded_replaceable");
  });

  it("no provider/vendor/model dependency exists", () => {
    const forbiddenTokens = [
      "openai",
      "anthropic",
      "claude",
      "gemini",
      "vertex",
      "bedrock",
      "azure",
      "fetch(",
      "http://",
      "https://",
      "process.env",
      "require(\"http",
    ];

    const filesToCheck = ["../candidate-types.ts", "../validate.ts", "../index.ts"];
    for (const relativeFile of filesToCheck) {
      const absolutePath = path.resolve(__dirname, relativeFile);
      const contents = readFileSync(absolutePath, "utf-8").toLowerCase();
      for (const token of forbiddenTokens) {
        expect(contents.includes(token)).toBe(false);
      }
    }
  });
});
