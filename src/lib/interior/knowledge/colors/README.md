# Colors Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `ColorKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.colors` (`../styles/*.ts`) can point to via
`KnowledgeReference`.

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `COLOR_KNOWLEDGE_REGISTRY` plus two lookup functions, `index.ts`
re-exports the type and registry. See `../README.md` §6/§9.

DS-6.4.2: the category literal used across `styles/*.ts` for this domain
changed from `"colors"` to `"color"` (unifying with `FeatureType`, see
`../core/README.md` §3) and `ColorKnowledge` is now a type alias for
`ColorFeature` (`../core/Feature.ts`, see §8 "Дедупликация"). This file
did not otherwise need to change.
