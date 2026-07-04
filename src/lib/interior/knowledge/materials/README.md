# Materials Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `MaterialKnowledge` entries (`../types.ts`) — real-world/rendering
knowledge about materials (wood, stone, textiles, metals, ...) that
`StyleKnowledge.knowledgeRefs.materials` (`../styles/*.ts`) can point to
via `KnowledgeReference`.

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `MATERIAL_KNOWLEDGE_REGISTRY` plus two lookup functions,
`index.ts` re-exports the type and registry. No real entries are
populated yet — see `../README.md` §6 and §9 for how to extend this once
a later stage needs it.
