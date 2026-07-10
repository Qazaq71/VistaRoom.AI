/**
 * Hand-authored synthetic VLM-style candidate carrying an unsupported node
 * category ("Furniture") and an unsupported relation category ("Proximity")
 * alongside otherwise-valid entries — exercises per-item exclusion without
 * silently expanding the closed category lists. Pure data.
 */

import type { VlmSceneCandidate } from "../candidate-types";

export const unsupportedCategoryCandidate: VlmSceneCandidate = {
  roomId: "room-candidate-002",
  sceneId: "scene-candidate-002",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "bedroom",
      },
      spatialExtent: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativeSize: "small" },
      },
    },
    {
      id: "node-mystery",
      category: "Furniture",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "unknown object",
      },
    },
  ],
  relations: [
    {
      id: "rel-proximity",
      category: "Proximity",
      fromNodeId: "node-room",
      toNodeId: "node-mystery",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
  ],
};
