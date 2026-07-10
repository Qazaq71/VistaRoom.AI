/**
 * Hand-authored synthetic VLM-style candidate missing the required top-level
 * `roomId` identity field. StructuredSceneV0 has no "unknown" representation
 * for its own root identity, so this must produce a structured rejection
 * rather than a partial scene. Pure data.
 */

import type { VlmSceneCandidate } from "../candidate-types";

export const missingIdentityCandidate: VlmSceneCandidate = {
  sceneId: "scene-candidate-004",
  sequence: 1,
  nodes: [],
  relations: [],
};
