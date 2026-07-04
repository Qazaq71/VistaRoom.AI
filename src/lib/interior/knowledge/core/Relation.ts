import type { RelationType } from "./RelationType";

/**
 * A directed edge between two `KnowledgeEntity`/`KnowledgeFeature` ids
 * (`from` → `to`), typed by `RelationType`. Pure data — nothing resolves
 * `from`/`to` to an actual entity, and nothing produces or consumes a
 * `KnowledgeRelation` yet.
 *
 * `type` here is `RelationType` (what *kind of edge* this is —
 * `requires`/`conflicts`/...), not `KnowledgeEntityKind` (`./Entity.ts`,
 * what *kind of node* an entity is). The two `type` fields live on
 * unrelated shapes and are never compared to each other.
 *
 * This is the graph-shaped counterpart to `KnowledgeFeature.relatedFeatures`
 * (`./Feature.ts`) — see `./README.md` "Relation mechanisms" for when to
 * reach for which.
 */
export type KnowledgeRelation = {
  readonly from: string;
  readonly to: string;
  readonly type: RelationType;
  /** Strength of this specific edge — distinct from `KnowledgeFeature.weight`. */
  readonly weight?: number;
};
