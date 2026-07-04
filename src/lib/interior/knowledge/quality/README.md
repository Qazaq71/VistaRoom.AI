# Quality Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `QualityKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.quality` (`../styles/*.ts`) can point to via
`KnowledgeReference` — craftsmanship/finish expectations for a style, not
to be confused with `PromptQualityLevel` (`prompt-domain/types.ts`,
provider-facing generation fidelity).

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `QUALITY_KNOWLEDGE_REGISTRY` plus two lookup functions,
`index.ts` re-exports the type and registry. See `../README.md` §6/§9.

DS-6.4.2: `QualityKnowledge` is now a type alias for `QualityFeature`
(`../core/Feature.ts`) — see `../core/README.md` §8 "Дедупликация". This
file did not need to change.
