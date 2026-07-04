import type { StyleKnowledge } from "../types";

export const WABI_SABI_KNOWLEDGE: StyleKnowledge = {
  id: "wabi_sabi_knowledge",
  styleId: "wabi_sabi",
  displayName: "Wabi-Sabi",

  description:
    "The Japanese aesthetic of embracing imperfection and impermanence " +
    "— raw, weathered materials and asymmetric simplicity over polish.",

  designGoals: [
    "Celebrate natural imperfection and asymmetry",
    "Favor aged, handmade materials over mass-produced uniformity",
    "Create a contemplative, uncluttered atmosphere",
  ],
  corePrinciples: [
    "Imperfection as beauty, not flaw",
    "Muted, earthy, weathered tones",
    "Empty space treated as meaningful",
  ],

  knowledgeRefs: {
    materials: [
      { id: "raw-ceramic", name: "Raw ceramic", category: "materials" },
      { id: "unfinished-wood", name: "Unfinished wood", category: "materials" },
    ],
    furniture: [
      { id: "low-simple-furniture", name: "Low simple furniture", category: "furniture" },
      { id: "handmade-stool", name: "Handmade stool", category: "furniture" },
    ],
    lighting: [
      { id: "soft-diffused-light", name: "Soft diffused light", category: "lighting" },
      { id: "candlelight-accent", name: "Candlelight accent", category: "lighting" },
    ],
    decor: [
      { id: "imperfect-pottery", name: "Imperfect pottery", category: "decor" },
      { id: "dried-botanical-arrangement", name: "Dried botanical arrangement", category: "decor" },
    ],
    colors: [
      { id: "muted-earthy-tones", name: "Muted earthy tones", category: "colors" },
      { id: "weathered-neutral", name: "Weathered neutral", category: "colors" },
    ],
    composition: [
      { id: "asymmetric-simplicity", name: "Asymmetric simplicity", category: "composition" },
      { id: "empty-space-appreciation", name: "Empty space appreciation", category: "composition" },
    ],
    constraints: [
      { id: "embrace-imperfection", name: "Embrace imperfection", category: "constraints" },
      { id: "avoid-mass-produced-symmetry", name: "Avoid mass-produced symmetry", category: "constraints" },
    ],
    rendering: [
      { id: "soft-natural-light", name: "Soft natural light", category: "rendering" },
    ],
    architecture: [
      { id: "aged-natural-materials", name: "Aged natural materials", category: "architecture" },
    ],
    space: [
      { id: "minimal-uncluttered-floor", name: "Minimal uncluttered floor", category: "space" },
      { id: "contemplative-emptiness", name: "Contemplative emptiness", category: "space" },
    ],
    mood: [
      { id: "contemplative", name: "Contemplative", category: "mood" },
      { id: "humble", name: "Humble", category: "mood" },
    ],
    quality: [
      { id: "authentic-imperfection", name: "Authentic imperfection", category: "quality" },
    ],
  },

  promptFragments: {
    style: "wabi-sabi style, natural imperfection, earthy ceramics, raw textures, muted tones",
    materials: "raw ceramic, unfinished natural wood",
    lighting: "soft diffused light, warm candlelight accents",
    furniture: "low simple furniture, handmade stool",
    decor: "imperfect handmade pottery, dried botanical arrangement",
    negative: "no glossy perfection, no mass-produced symmetry, no bright artificial colors",
  },

  negativeCharacteristics: [
    "Glossy machine-perfect finishes",
    "Mass-produced symmetrical decor",
    "Bright artificial colors",
    "Overcrowded surfaces",
  ],
  qualityNotes: [
    "Surfaces should show authentic texture, cracks, or weathering",
    "Composition should feel unforced and asymmetric",
  ],
  references: [],
};
