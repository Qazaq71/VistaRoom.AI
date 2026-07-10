/**
 * Hand-authored synthetic fixture isolating the unknown_not_inferable
 * terminal state (ADR-013 §4.5). Demonstrates that "unknown / not
 * inferable" is representable and structurally distinct from a present
 * value — not merely an empty/default value. Pure data.
 */

import type { Observed } from "../types";

export const unknownNotInferableAttribute: Observed<string> = {
  confidence: "unknown_not_inferable",
  provenance: "unknown_not_inferable",
};
