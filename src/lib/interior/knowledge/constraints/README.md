# Constraints Knowledge (DS-6.4)

TODO: Future expansion domain.

Holds `ConstraintKnowledge` entries (`../types.ts`) that
`StyleKnowledge.knowledgeRefs.constraints` (`../styles/*.ts`) can point to
via `KnowledgeReference`. Not to be confused with `ConstraintContext`
(`prompt-domain/contexts/ConstraintContext.ts`), which is a Prompt Domain
data shape, not knowledge.

On DS-6.4 this is an empty, ready-to-fill scaffold: `registry.ts` exports
an empty `CONSTRAINT_KNOWLEDGE_REGISTRY` plus two lookup functions,
`index.ts` re-exports the type and registry. See `../README.md` §6/§9.
