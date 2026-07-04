import type { BaseDomainContext } from "./BaseDomainContext";

export type MetadataContext = BaseDomainContext & {
  provider: string;
  model: string;
  version: string;
  createdAt: string;
};
