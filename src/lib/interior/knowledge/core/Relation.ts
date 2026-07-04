import type { RelationType } from "./RelationType";

/**
 * A directed edge between two `KnowledgeEntity`/`KnowledgeFeature` ids
 * (`from` → `to`), typed by `RelationType`. Pure data — nothing resolves
 * `from`/`to` to an actual entity, and nothing produces or consumes a
 * `KnowledgeRelation` yet.
 */
export type KnowledgeRelation = {
  readonly from: string;
  readonly to: string;
  readonly type: RelationType;
  readonly weight?: number;
};
