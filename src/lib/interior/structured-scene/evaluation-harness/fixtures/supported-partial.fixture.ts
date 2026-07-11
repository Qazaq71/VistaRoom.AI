/**
 * Step 6 fixture: a partially-known StructuredSceneV0. Room identity is
 * known but extent is unknown_not_inferable; one Object node's typeLabel is
 * unknown_not_inferable. Exercises partial completeness across Q1 and Q2.
 */

import type { StructuredSceneV0 } from "../../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../../types";

export const supportedPartialScene: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-eh-002",
  sceneId: "scene-eh-002",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        provenance: "user_provided_hint",
        value: "bedroom",
      },
      spatialExtent: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
    },
    {
      id: "node-mystery-object",
      category: "Object",
      typeLabel: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      approximatePlacement: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      affordances: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      illuminationRelevance: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
    },
    {
      id: "node-bed",
      category: "Object",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "bed",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "against west wall" },
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
  ],
  relations: [],
};
