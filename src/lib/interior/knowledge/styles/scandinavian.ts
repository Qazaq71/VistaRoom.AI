import type { StyleKnowledge } from "../types";

export const SCANDINAVIAN_KNOWLEDGE: StyleKnowledge = {
  id: "scandinavian_knowledge",
  styleId: "scandinavian",
  displayName: "Скандинавский",

  description:
    "Light-filled, functional interiors built around pale wood, white " +
    "surfaces, and cozy textiles — comfort through simplicity rather than " +
    "ornament.",

  designGoals: [
    "Maximize daylight and perceived brightness",
    "Balance minimal form with tactile coziness (hygge)",
    "Favor functional, well-made furniture over decoration",
  ],
  corePrinciples: [
    "Light wood and white as the base palette",
    "Warmth added through texture, not color saturation",
    "Everyday functionality over formality",
  ],

  knowledgeRefs: {
    materials: [
      { id: "light-oak", name: "Light oak", category: "materials" },
      { id: "pale-birch", name: "Pale birch", category: "materials" },
    ],
    furniture: [
      { id: "functional-wood-furniture", name: "Functional wood furniture", category: "furniture" },
      { id: "wicker-accents", name: "Wicker accents", category: "furniture" },
    ],
    lighting: [
      { id: "soft-daylight", name: "Soft daylight", category: "lighting" },
      { id: "warm-pendant-lamp", name: "Warm pendant lamp", category: "lighting" },
    ],
    decor: [
      { id: "cozy-textiles", name: "Cozy textiles", category: "decor" },
      { id: "potted-plant", name: "Potted plant", category: "decor" },
    ],
    colors: [
      { id: "white-and-light-wood", name: "White and light wood", category: "colors" },
      { id: "soft-pastel-accent", name: "Soft pastel accent", category: "colors" },
    ],
    composition: [
      { id: "airy-layout", name: "Airy layout", category: "composition" },
    ],
    constraints: [
      { id: "functional-only", name: "Functional only", category: "constraints" },
      { id: "limited-ornamentation", name: "Limited ornamentation", category: "constraints" },
    ],
    rendering: [
      { id: "bright-diffuse-light", name: "Bright diffuse light", category: "rendering" },
    ],
    architecture: [
      { id: "large-windows", name: "Large windows", category: "architecture" },
      { id: "high-ceilings", name: "High ceilings", category: "architecture" },
    ],
    space: [
      { id: "open-airy-layout", name: "Open airy layout", category: "space" },
    ],
    mood: [
      { id: "cozy", name: "Cozy", category: "mood" },
      { id: "hygge-comfort", name: "Hygge comfort", category: "mood" },
    ],
    quality: [
      { id: "natural-finish", name: "Natural finish", category: "quality" },
    ],
  },

  promptFragments: {
    style: "Scandinavian style, light wood, white walls, cozy textiles, functional furniture",
    materials: "pale oak and birch, white painted wood, wool and linen textiles",
    lighting: "bright soft daylight, warm pendant lamps",
    furniture: "functional wood furniture, wicker accents, simple silhouettes",
    decor: "cozy throws, potted plants, understated accessories",
    negative: "no dark heavy furniture, no ornate carving, no overcrowded surfaces",
  },

  negativeCharacteristics: [
    "Dark heavy furniture",
    "Ornate carved details",
    "Overcrowded surfaces",
    "Cold clinical finishes",
  ],
  qualityNotes: [
    "Wood grain should read as natural and light-toned, not stained dark",
    "Textiles should look tactile and inviting",
  ],
  references: [],
};
