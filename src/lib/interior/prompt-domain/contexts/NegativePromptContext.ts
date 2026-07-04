import type { BaseDomainContext } from "./BaseDomainContext";

export type NegativePromptContext = BaseDomainContext & {
  negativePrompts: string[];
};
