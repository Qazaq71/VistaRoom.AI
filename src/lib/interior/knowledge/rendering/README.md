# Rendering Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `RenderingKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.rendering` (`../styles/*.ts`) can point to
via `KnowledgeReference` — e.g. lighting/shadow/reflection behavior
specific to a style, as opposed to `lighting/` (light *sources* and
fixtures).

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `RENDERING_KNOWLEDGE_REGISTRY` plus two lookup functions,
`index.ts` re-exports the type and registry. See `../README.md` §6/§9.
