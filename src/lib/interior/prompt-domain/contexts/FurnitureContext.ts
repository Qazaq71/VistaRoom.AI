import type { BaseDomainContext } from "./BaseDomainContext";
import type { FurnitureReference } from "../references/FurnitureReference";

export type FurnitureContext = BaseDomainContext & {
  items: FurnitureReference[];
  layout?: string;
  replaceExisting?: boolean;
};
