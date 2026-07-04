import type { BaseDomainContext } from "./BaseDomainContext";
import type { MaterialReference } from "../references/MaterialReference";

export type MaterialContext = BaseDomainContext & {
  materials: MaterialReference[];
  floorMaterial?: MaterialReference;
  wallMaterial?: MaterialReference;
  ceilingMaterial?: MaterialReference;
};
