import type { StyleKnowledge } from "../types";

export const MODERN_FARMHOUSE_KNOWLEDGE: StyleKnowledge = {
  id: "modern_farmhouse_knowledge",
  styleId: "modern_farmhouse",
  displayName: "Modern Farmhouse",

  description:
    "A cozy, family-friendly rustic style built on shiplap walls, " +
    "reclaimed wood, and warm whites — country charm updated for " +
    "everyday modern living.",

  designGoals: [
    "Balance rustic warmth with modern functionality",
    "Create a welcoming, family-oriented atmosphere",
    "Use natural, honest materials over synthetic finishes",
  ],
  corePrinciples: [
    "Shiplap and reclaimed wood as signature materials",
    "Warm white base palette with muted accents",
    "Cozy groupings over formal symmetry",
  ],

  knowledgeRefs: {
    materials: [
      { id: "shiplap-wood", name: "Shiplap wood", category: "materials" },
      { id: "reclaimed-barn-wood", name: "Reclaimed barn wood", category: "materials" },
    ],
    furniture: [
      { id: "farmhouse-dining-table", name: "Farmhouse dining table", category: "furniture" },
      { id: "slipcovered-armchair", name: "Slipcovered armchair", category: "furniture" },
    ],
    lighting: [
      { id: "lantern-style-pendant", name: "Lantern-style pendant", category: "lighting" },
      { id: "warm-ambient-light", name: "Warm ambient light", category: "lighting" },
    ],
    decor: [
      { id: "woven-baskets", name: "Woven baskets", category: "decor" },
      { id: "vintage-farm-accents", name: "Vintage farm accents", category: "decor" },
    ],
    colors: [
      { id: "warm-white-palette", name: "Warm white palette", category: "colors" },
      { id: "muted-earth-accent", name: "Muted earth accent", category: "colors" },
    ],
    composition: [
      { id: "balanced-rustic-symmetry", name: "Balanced rustic symmetry", category: "composition" },
      { id: "cozy-groupings", name: "Cozy groupings", category: "composition" },
    ],
    constraints: [
      { id: "rustic-authenticity", name: "Rustic authenticity", category: "constraints" },
    ],
    rendering: [
      { id: "warm-soft-light", name: "Warm soft light", category: "rendering" },
    ],
    architecture: [
      { id: "shiplap-walls", name: "Shiplap walls", category: "architecture" },
      { id: "exposed-beams", name: "Exposed beams", category: "architecture" },
    ],
    space: [
      { id: "open-family-friendly-layout", name: "Open family-friendly layout", category: "space" },
      { id: "cozy-nooks", name: "Cozy nooks", category: "space" },
    ],
    mood: [
      { id: "cozy", name: "Cozy", category: "mood" },
      { id: "welcoming", name: "Welcoming", category: "mood" },
    ],
    quality: [
      { id: "authentic-rustic-detail", name: "Authentic rustic detail", category: "quality" },
    ],
  },

  promptFragments: {
    style: "modern farmhouse style, shiplap walls, natural wood, rustic charm",
    materials: "shiplap wood paneling, reclaimed barn wood",
    lighting: "lantern-style pendant, warm ambient light",
    furniture: "farmhouse dining table, slipcovered armchair",
    decor: "woven baskets, vintage farm accents",
    negative: "no cold industrial finishes, no glossy modern surfaces, no formal ornate decor",
  },

  negativeCharacteristics: [
    "Cold industrial finishes",
    "Glossy high-tech surfaces",
    "Formal ornate decor",
    "Bright saturated color palette",
  ],
  qualityNotes: [
    "Wood should show authentic reclaimed texture, not faux-distressed print",
    "Overall feel should read as lived-in and family-friendly",
  ],
  references: [],
};
