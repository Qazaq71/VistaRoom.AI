# Styles Knowledge (DS-6.4)

One file per catalog style, each exporting exactly one `StyleKnowledge`
value (`../types.ts`). `styleId` must match an existing `InteriorStyle.id`
in `src/lib/interior/styles/registry.ts` — this directory never invents a
new style id, it only attaches meaning to one that already exists in the
Style Registry.

All 20 catalog styles are covered:

`minimalist`, `scandinavian`, `japandi`, `luxury`, `artdeco`, `biophilic`,
`mediterranean`, `loft`, `cyberpunk`, `organic_modern`, `contemporary`,
`mid_century`, `boho`, `coastal`, `neoclassical`, `wabi_sabi`,
`modern_farmhouse`, `maximalism`, `industrial`, `japanese_zen`.

`my_style` is intentionally absent — see `../README.md` §5.

`index.ts` aggregates every file into `ALL_STYLE_KNOWLEDGE`, which is the
only thing `../registry/KnowledgeRegistry.ts` reads. To add a new style,
see `../README.md` §8.
