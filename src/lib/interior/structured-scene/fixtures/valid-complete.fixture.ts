/**
 * Hand-authored synthetic fixture: a complete StructuredSceneV0 instance.
 * Every attribute is known (mix of known_with_confidence /
 * known_with_uncertainty) with a plausible provenance. Pure data — no real
 * user photo, no external sourcing (Implementation Package §14).
 */

import type { StructuredSceneV0 } from "../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../types";

export const validCompleteStructuredScene: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-fixture-001",
  sceneId: "scene-fixture-001",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        provenance: "user_provided_hint",
        value: "living_room",
      },
      spatialExtent: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativeSize: "medium" },
      },
    },
    {
      id: "node-wall-north",
      category: "StructuralElement",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "wall",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "north wall" },
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: false,
      },
    },
    {
      id: "node-window-north",
      category: "StructuralElement",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "window",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "centered on north wall" },
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: true,
      },
    },
    {
      id: "node-sofa",
      category: "Object",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "sofa",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "against south wall" },
      },
      affordances: {
        confidence: "known_with_confidence",
        provenance: "inferred_assumption",
        value: ["seating"],
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: false,
      },
    },
    {
      id: "node-free-space-center",
      category: "FreeSpaceRegion",
      spatialExtent: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativeSize: "small" },
      },
      approximatePlacement: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativePosition: "center of room" },
      },
    },
  ],
  relations: [
    {
      id: "rel-window-adjacent-wall",
      category: "Adjacency",
      fromNodeId: "node-window-north",
      toNodeId: "node-wall-north",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-sofa-in-free-space",
      category: "Containment",
      fromNodeId: "node-free-space-center",
      toNodeId: "node-sofa",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
    {
      id: "rel-sofa-blocks-traffic",
      category: "Blocking",
      fromNodeId: "node-sofa",
      toNodeId: "node-free-space-center",
      blockingType: "traffic",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
  ],
};
