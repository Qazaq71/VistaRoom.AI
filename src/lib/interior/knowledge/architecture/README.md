# Architecture Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `ArchitectureKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.architecture` (`../styles/*.ts`) can point
to via `KnowledgeReference` — structural/architectural features (columns,
beams, windows, ...), as opposed to `space/` (room layout and flow).

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `ARCHITECTURE_KNOWLEDGE_REGISTRY` plus two lookup functions,
`index.ts` re-exports the type and registry. See `../README.md` §6/§9.
