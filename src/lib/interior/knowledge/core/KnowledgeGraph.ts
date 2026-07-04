import type { KnowledgeEntity } from "./Entity";
import type { KnowledgeFeature } from "./Feature";
import type { KnowledgeRelation } from "./Relation";

/**
 * The future shape of "all knowledge and how it connects" — entities,
 * features, and the relations between them. A contract only: no
 * implementation builds, stores, traverses, or queries a `KnowledgeGraph`
 * on DS-6.4.2. See `./README.md`.
 *
 * DS-6.4.2 reviewed this shape against dependency graphs, recommendations,
 * material compatibility, conflicts, brands, compositions, and
 * Feature↔Feature / Style↔Feature / Room↔Feature links (`./README.md`
 * "KnowledgeGraph sufficiency"), and did not extend it. `relations` is
 * generic enough (opaque string ids + typed `RelationType`) to express any
 * of the above without new fields; `entities` is a generic bucket for
 * anything identifiable (including future non-Feature nodes like brands).
 * Style↔Feature and Room↔Feature links are only *syntactically* expressible
 * today (any string id works as `from`/`to`) — `StyleKnowledge` does not
 * itself implement `KnowledgeEntity`, and "Room" belongs to Prompt Domain,
 * not Knowledge Base. Making them full graph citizens is deliberately
 * deferred to the Migration Strategy (`./README.md`), not solved here.
 */
export interface KnowledgeGraph {
  readonly entities: readonly KnowledgeEntity[];
  readonly features: readonly KnowledgeFeature[];
  readonly relations: readonly KnowledgeRelation[];
}
