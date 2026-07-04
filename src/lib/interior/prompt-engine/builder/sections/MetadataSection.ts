import type { PromptQualityLevel } from "../../../prompt-domain";

/**
 * Draft-side counterpart of `PromptMetadata` (`prompt-domain/types.ts`,
 * `MetadataContext` + `qualityLevel`). Same fields, no `BaseDomainContext`
 * bookkeeping duplicated beyond `createdAt` (kept here because
 * `MetadataContext` itself carries it as domain data, not just plumbing)
 * — see `StyleSection.ts`.
 */
export type MetadataSection = {
  provider: string;
  model: string;
  version: string;
  createdAt: string;
  qualityLevel?: PromptQualityLevel;
};
