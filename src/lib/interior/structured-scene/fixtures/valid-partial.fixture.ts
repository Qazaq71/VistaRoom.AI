/**
 * Hand-authored synthetic fixture: a valid *partial* StructuredSceneV0
 * instance. Some attributes are unknown_not_inferable — a normal, valid
 * state (ADR-013 §4.1 "Partial StructuredScene is first-class"), not an
 * error. Pure data — no real user photo, no external sourcing.
 */

import type { StructuredSceneV0 } from "../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../types";

export const validPartialStructuredScene: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-fixture-002",
  sceneId: "scene-fixture-002",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: "bedroom",
      },
      // Spatial extent could not be inferred from the available photo.
      spatialExtent: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
    },
    {
      id: "node-door",
      category: "StructuralElement",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "door",
      },
      // Placement partially obscured; not inferable from this angle.
      approximatePlacement: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
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
