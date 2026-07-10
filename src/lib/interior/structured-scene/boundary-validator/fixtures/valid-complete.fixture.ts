/**
 * Hand-authored synthetic fixture: a fully valid StructuredSceneV0 instance,
 * distinct from the Step 1 fixture of the same name, exercising every closed
 * node/relation category. Pure data — no real user photo, no external
 * sourcing.
 */

import type { StructuredSceneV0 } from "../../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../../types";

export const boundaryValidComplete: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-boundary-001",
  sceneId: "scene-boundary-001",
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
      id: "node-wall",
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
      id: "node-free-space",
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
      id: "rel-wall-adjacent-room",
      category: "Adjacency",
      fromNodeId: "node-wall",
      toNodeId: "node-room",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-sofa-in-room",
      category: "Containment",
      fromNodeId: "node-room",
      toNodeId: "node-sofa",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
    {
      id: "rel-sofa-blocks-traffic",
      category: "Blocking",
      fromNodeId: "node-sofa",
      toNodeId: "node-free-space",
      blockingType: "traffic",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
  ],
};
