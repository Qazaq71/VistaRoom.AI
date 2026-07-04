# Lighting Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `LightingKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.lighting` (`../styles/*.ts`) can point to
via `KnowledgeReference`.

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `LIGHTING_KNOWLEDGE_REGISTRY` plus two lookup functions,
`index.ts` re-exports the type and registry. See `../README.md` §6/§9.

DS-6.4.2: `LightingKnowledge` is now a type alias for `LightingFeature`
(`../core/Feature.ts`) — see `../core/README.md` §8 "Дедупликация". This
file did not need to change.
