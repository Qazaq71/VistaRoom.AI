/**
 * Hand-authored synthetic VLM-style candidate that claims
 * "known_with_confidence" for an attribute but omits the actual value — a
 * self-contradictory candidate. The heuristic layer must collapse this to
 * unknown_not_inferable rather than inventing a value or trusting the
 * claimed confidence. Pure data.
 */

import type { VlmSceneCandidate } from "../candidate-types";

export const inventedCertaintyCandidate: VlmSceneCandidate = {
  roomId: "room-candidate-003",
  sceneId: "scene-candidate-003",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        // value intentionally omitted
      },
      spatialExtent: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativeSize: "large" },
      },
    },
  ],
  relations: [],
};
