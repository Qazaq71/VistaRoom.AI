import type { StyleKnowledge } from "../types";

export const MID_CENTURY_KNOWLEDGE: StyleKnowledge = {
  id: "mid_century_knowledge",
  styleId: "mid_century",
  displayName: "Mid-Century",

  description:
    "1950s–60s modernism: tapered wood legs, iconic silhouettes, and a " +
    "retro palette of mustard, teal, and warm wood tones.",

  designGoals: [
    "Reproduce iconic 1950s-60s furniture silhouettes accurately",
    "Balance geometric form with functional zoning",
    "Use a confident retro color palette",
  ],
  corePrinciples: [
    "Tapered legs and organic-geometric hybrid forms",
    "Function-driven furniture groupings",
    "Warm wood tones as the material anchor",
  ],

  knowledgeRefs: {
    materials: [
      { id: "teak-wood", name: "Teak wood", category: "material" },
      { id: "tapered-wood-legs", name: "Tapered wood legs", category: "material" },
    ],
    furniture: [
      { id: "iconic-lounge-chair", name: "Iconic lounge chair", category: "furniture" },
      { id: "low-profile-credenza", name: "Low-profile credenza", category: "furniture" },
    ],
    lighting: [
      { id: "sputnik-chandelier", name: "Sputnik chandelier", category: "lighting" },
      { id: "arc-floor-lamp", name: "Arc floor lamp", category: "lighting" },
    ],
    decor: [
      { id: "abstract-art", name: "Abstract art", category: "decor" },
      { id: "starburst-mirror", name: "Starburst mirror", category: "decor" },
    ],
    colors: [
      { id: "retro-mustard-and-teal", name: "Retro mustard and teal", category: "color" },
      { id: "warm-wood-tone", name: "Warm wood tone", category: "color" },
    ],
    composition: [
      { id: "geometric-symmetry", name: "Geometric symmetry", category: "composition" },
      { id: "functional-zoning", name: "Functional zoning", category: "composition" },
    ],
    constraints: [
      { id: "period-accurate-silhouettes", name: "Period-accurate silhouettes", category: "constraint" },
    ],
    rendering: [
      { id: "warm-retro-light", name: "Warm retro light", category: "rendering" },
    ],
    architecture: [
      { id: "open-plan-with-defined-zones", name: "Open plan with defined zones", category: "architecture" },
      { id: "large-picture-windows", name: "Large picture windows", category: "architecture" },
    ],
    space: [
      { id: "clear-furniture-groupings", name: "Clear furniture groupings", category: "space" },
    ],
    mood: [
      { id: "nostalgic", name: "Nostalgic", category: "mood" },
      { id: "optimistic", name: "Optimistic", category: "mood" },
    ],
    quality: [
      { id: "iconic-silhouette-accuracy", name: "Iconic silhouette accuracy", category: "quality" },
    ],
  },

  promptFragments: {
    style: "mid-century modern style, 1950s wood furniture, geometric forms, retro palette",
    materials: "warm teak wood, tapered wooden legs",
    lighting: "sputnik chandelier, arc floor lamp",
    furniture: "iconic lounge chair, low-profile credenza",
    decor: "abstract art, starburst mirror",
    negative: "no ornate Victorian details, no glossy futuristic surfaces, no pastel Scandinavian palette",
  },

  negativeCharacteristics: [
    "Ornate Victorian detailing",
    "Glossy futuristic surfaces",
    "Overly soft pastel Scandinavian palette",
    "Overstuffed contemporary sofas",
  ],
  qualityNotes: [
    "Furniture silhouettes should be period-accurate, not generic retro pastiche",
    "Wood joinery should look precise and well-crafted",
  ],
  references: [],
};
