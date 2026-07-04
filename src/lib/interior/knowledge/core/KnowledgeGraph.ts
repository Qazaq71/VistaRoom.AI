import type { KnowledgeEntity } from "./Entity";
import type { KnowledgeFeature } from "./Feature";
import type { KnowledgeRelation } from "./Relation";

/**
 * The future shape of "all knowledge and how it connects" — entities,
 * features, and the relations between them. A contract only: no
 * implementation builds, stores, traverses, or queries a `KnowledgeGraph`
 * on DS-6.4.1. See `./README.md`.
 */
export interface KnowledgeGraph {
  readonly entities: readonly KnowledgeEntity[];
  readonly features: readonly KnowledgeFeature[];
  readonly relations: readonly KnowledgeRelation[];
}
