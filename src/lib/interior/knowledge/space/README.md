# Space Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `SpaceKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.space` (`../styles/*.ts`) can point to via
`KnowledgeReference` — layout, flow, and zoning concerns, as opposed to
`architecture/` (fixed structural features).

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `SPACE_KNOWLEDGE_REGISTRY` plus two lookup functions, `index.ts`
re-exports the type and registry. See `../README.md` §6/§9.

DS-6.4.2: `SpaceKnowledge` is now a type alias for `SpaceFeature`
(`../core/Feature.ts`) — see `../core/README.md` §8 "Дедупликация". This
file did not need to change.
