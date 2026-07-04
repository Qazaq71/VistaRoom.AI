/**
 * Every kind of relationship a `KnowledgeRelation` (`./Relation.ts`) can
 * express between two `KnowledgeEntity`/`KnowledgeFeature` ids.
 */
export type RelationType =
  | "requires"
  | "supports"
  | "conflicts"
  | "enhances"
  | "optional"
  | "alternative"
  | "inherits";
