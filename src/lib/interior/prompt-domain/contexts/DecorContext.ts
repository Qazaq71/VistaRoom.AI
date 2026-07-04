import type { BaseDomainContext } from "./BaseDomainContext";
import type { DecorReference } from "../references/DecorReference";

export type DecorContext = BaseDomainContext & {
  decor: DecorReference[];
  plants?: boolean;
  artwork?: boolean;
  textiles?: boolean;
};
