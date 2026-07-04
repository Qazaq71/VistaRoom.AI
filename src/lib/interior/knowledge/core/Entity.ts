/**
 * Every position an object can hold in the Entity/Feature/Relation
 * hierarchy (`./README.md` §2). This is a structural axis — "what kind of
 * thing is this in the knowledge model" — and is intentionally distinct
 * from `FeatureType` (`./FeatureTypes.ts`), which is a subject-matter axis
 * ("which design domain does this belong to"). A `KnowledgeFeature` has
 * both: `type: "feature"` (structural) and `domain: FeatureType`
 * (subject-matter).
 *
 * `"relation"` is reserved for a future *reified* relation — a relation
 * that itself needs an id/name/metadata beyond the lightweight
 * `{ from, to, type, weight? }` edge shape of `KnowledgeRelation`
 * (`./Relation.ts`). No such entity exists yet; `KnowledgeRelation` stays
 * the only relation shape until one is needed.
 */
export type KnowledgeEntityKind = "entity" | "feature" | "relation";

/**
 * The most basic unit of the Knowledge Base: anything that can be
 * identified, named, and described, regardless of domain. `KnowledgeFeature`
 * (`./Feature.ts`) is the only thing that extends it on DS-6.4.2 — no
 * other file, existing or planned, reads or produces a bare
 * `KnowledgeEntity` yet. See `./README.md`.
 *
 * Pure data — no methods, no validation, no default values.
 */
export type KnowledgeEntity = {
  readonly id: string;
  readonly type: KnowledgeEntityKind;
  readonly name: string;
  readonly description?: string;
  readonly tags?: readonly string[];
  readonly metadata?: Readonly<Record<string, unknown>>;
};
