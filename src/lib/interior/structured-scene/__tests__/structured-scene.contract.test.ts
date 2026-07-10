import { describe, expect, it } from "vitest";

import {
  CONFIDENCE_STATES,
  PROVENANCE_STATES,
  STRUCTURED_SCENE_NODE_CATEGORIES,
  STRUCTURED_SCENE_RELATION_CATEGORIES,
  STRUCTURED_SCENE_SCHEMA_VERSION,
} from "../types";
import {
  unknownNotInferableAttribute,
  validCompleteStructuredScene,
  validPartialStructuredScene,
} from "../fixtures";

describe("StructuredScene v0 contract (Gate 2 C8, Step 1)", () => {
  it("valid complete StructuredSceneV0 fixture passes type/contract expectations", () => {
    expect(validCompleteStructuredScene.schemaVersion).toBe(
      STRUCTURED_SCENE_SCHEMA_VERSION,
    );
    expect(validCompleteStructuredScene.nodes.length).toBeGreaterThan(0);
    expect(validCompleteStructuredScene.relations.length).toBeGreaterThan(0);
  });

  it("valid partial StructuredSceneV0 fixture is representable", () => {
    expect(validPartialStructuredScene.schemaVersion).toBe(
      STRUCTURED_SCENE_SCHEMA_VERSION,
    );
    const roomNode = validPartialStructuredScene.nodes.find(
      (node) => node.category === "Room",
    );
    expect(roomNode).toBeDefined();
    expect(validPartialStructuredScene.relations).toEqual([]);
  });

  it("unknown_not_inferable is representable and structurally distinct from a present value", () => {
    expect(unknownNotInferableAttribute.confidence).toBe(
      "unknown_not_inferable",
    );
    expect(unknownNotInferableAttribute.provenance).toBe(
      "unknown_not_inferable",
    );
    expect("value" in unknownNotInferableAttribute).toBe(false);

    const doorNode = validPartialStructuredScene.nodes.find(
      (node) => node.id === "node-door",
    );
    expect(doorNode).toBeDefined();
    if (doorNode?.category === "StructuralElement") {
      expect(doorNode.approximatePlacement.confidence).toBe(
        "unknown_not_inferable",
      );
      expect("value" in doorNode.approximatePlacement).toBe(false);
    } else {
      throw new Error("expected node-door to be a StructuralElement");
    }
  });

  it("schemaVersion field exists on every StructuredSceneV0 fixture", () => {
    expect(validCompleteStructuredScene).toHaveProperty("schemaVersion");
    expect(validPartialStructuredScene).toHaveProperty("schemaVersion");
  });

  it('schemaVersion value is "structured-scene.v0"', () => {
    expect(STRUCTURED_SCENE_SCHEMA_VERSION).toBe("structured-scene.v0");
    expect(validCompleteStructuredScene.schemaVersion).toBe(
      "structured-scene.v0",
    );
  });

  it("closed node categories are represented", () => {
    expect(STRUCTURED_SCENE_NODE_CATEGORIES).toEqual([
      "Room",
      "StructuralElement",
      "Object",
      "FreeSpaceRegion",
    ]);

    const categoriesInFixture = Array.from(
      new Set(validCompleteStructuredScene.nodes.map((node) => node.category)),
    );
    for (const category of categoriesInFixture) {
      expect(STRUCTURED_SCENE_NODE_CATEGORIES).toContain(category);
    }
    // The complete fixture exercises every closed node category.
    expect(categoriesInFixture.slice().sort()).toEqual(
      STRUCTURED_SCENE_NODE_CATEGORIES.slice().sort(),
    );
  });

  it("closed relation categories are represented", () => {
    expect(STRUCTURED_SCENE_RELATION_CATEGORIES).toEqual([
      "Adjacency",
      "Containment",
      "Blocking",
    ]);

    const categoriesInFixture = Array.from(
      new Set(
        validCompleteStructuredScene.relations.map((relation) => relation.category),
      ),
    );
    for (const category of categoriesInFixture) {
      expect(STRUCTURED_SCENE_RELATION_CATEGORIES).toContain(category);
    }
    expect(categoriesInFixture.slice().sort()).toEqual(
      STRUCTURED_SCENE_RELATION_CATEGORIES.slice().sort(),
    );
  });

  it("confidence states are represented", () => {
    expect(CONFIDENCE_STATES).toEqual([
      "known_with_confidence",
      "known_with_uncertainty",
      "unknown_not_inferable",
    ]);

    const roomNode = validCompleteStructuredScene.nodes.find(
      (node) => node.category === "Room",
    );
    expect(roomNode?.category).toBe("Room");
    if (roomNode?.category === "Room") {
      expect(CONFIDENCE_STATES).toContain(roomNode.spaceTypeId.confidence);
    }
    expect(unknownNotInferableAttribute.confidence).toBe(
      "unknown_not_inferable",
    );
  });

  it("provenance states are represented", () => {
    expect(PROVENANCE_STATES).toEqual([
      "visually_observed",
      "user_provided_hint",
      "inferred_assumption",
      "unknown_not_inferable",
    ]);

    const provenanceValuesInFixture = new Set<string>();
    for (const node of validCompleteStructuredScene.nodes) {
      for (const [key, attribute] of Object.entries(node)) {
        if (key === "id" || key === "category") continue;
        const observed = attribute as { provenance?: string };
        if (observed && typeof observed.provenance === "string") {
          provenanceValuesInFixture.add(observed.provenance);
        }
      }
    }
    for (const provenance of Array.from(provenanceValuesInFixture)) {
      expect(PROVENANCE_STATES).toContain(provenance);
    }
    expect(provenanceValuesInFixture.size).toBeGreaterThan(1);
  });

  it("Room node can reference SpaceTypeId without duplicating SpaceType classification", () => {
    const roomNode = validCompleteStructuredScene.nodes.find(
      (node) => node.category === "Room",
    );
    expect(roomNode?.category).toBe("Room");
    if (roomNode?.category === "Room") {
      // The Room node carries a reference value only (a SpaceTypeId string
      // wrapped in Observed<T>) — it has no nested classification fields,
      // display name, or category-derivation logic of its own.
      expect(typeof roomNode.spaceTypeId).toBe("object");
      if (roomNode.spaceTypeId.confidence !== "unknown_not_inferable") {
        expect(typeof roomNode.spaceTypeId.value).toBe("string");
      }
      expect(Object.keys(roomNode)).toEqual(
        expect.arrayContaining(["id", "category", "spaceTypeId", "spatialExtent"]),
      );
      expect(Object.keys(roomNode)).toHaveLength(4);
    }
  });
});
