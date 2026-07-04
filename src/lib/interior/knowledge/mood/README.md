# Mood Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `MoodKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.mood` (`../styles/*.ts`) can point to via
`KnowledgeReference` — the emotional/atmospheric quality a style aims for
(calm, opulent, raw, ...).

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `MOOD_KNOWLEDGE_REGISTRY` plus two lookup functions, `index.ts`
re-exports the type and registry. See `../README.md` §6/§9.

DS-6.4.2: `MoodKnowledge` is now a type alias for `MoodFeature`
(`../core/Feature.ts`) — see `../core/README.md` §8 "Дедупликация". This
file did not need to change.
