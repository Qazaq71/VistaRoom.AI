# Composition Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `CompositionKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.composition` (`../styles/*.ts`) can point to
via `KnowledgeReference`.

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `COMPOSITION_KNOWLEDGE_REGISTRY` plus two lookup functions,
`index.ts` re-exports the type and registry. See `../README.md` §6/§9.

DS-6.4.2: `CompositionKnowledge` is now a type alias for
`CompositionFeature` (`../core/Feature.ts`) — see `../core/README.md` §8
"Дедупликация". This file did not need to change.
