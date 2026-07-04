/**
 * Common shape shared by every Prompt Domain context. Holds no business
 * logic — only the bookkeeping fields every context needs regardless of
 * what domain data it carries.
 */
export type BaseDomainContext = {
  version: string;
  createdAt: string;
  metadata?: Record<string, unknown>;
};
