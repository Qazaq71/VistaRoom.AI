/**
 * Hand-authored synthetic fixture: a valid *partial* StructuredSceneV0
 * instance, distinct from the Step 1 fixture of the same name. Absent
 * information is represented via the accepted unknown_not_inferable
 * Observed<T> state, which must be accepted as a valid terminal state, not
 * an error. Pure data.
 */

import type { StructuredSceneV0 } from "../../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../../types";

export const boundaryValidPartial: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-boundary-002",
  sceneId: "scene-boundary-002",
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
      spatialExtent: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
    },
    {
      id: "node-free-space",
      category: "FreeSpaceRegion",
      spatialExtent: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      approximatePlacement: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
    },
  ],
  relations: [],
};
