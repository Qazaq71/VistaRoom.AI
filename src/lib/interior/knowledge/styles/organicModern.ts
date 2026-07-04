import type { StyleKnowledge } from "../types";

export const ORGANIC_MODERN_KNOWLEDGE: StyleKnowledge = {
  id: "organic_modern_knowledge",
  styleId: "organic_modern",
  displayName: "Organic Modern",

  description:
    "Modern forms softened by natural materials and curved silhouettes " +
    "— warm earth tones and tactile textures over sharp minimalism.",

  designGoals: [
    "Soften modern minimalism with organic curves and warmth",
    "Favor natural materials in their honest, textured state",
    "Build a grounded, warm-neutral color story",
  ],
  corePrinciples: [
    "Curved silhouettes over sharp geometry",
    "Natural materials preferred over synthetic",
    "Warmth through texture and tone, not pattern",
  ],

  knowledgeRefs: {
    materials: [
      { id: "natural-stone", name: "Natural stone", category: "materials" },
      { id: "warm-toned-wood", name: "Warm-toned wood", category: "materials" },
    ],
    furniture: [
      { id: "curved-organic-furniture", name: "Curved organic furniture", category: "furniture" },
      { id: "soft-boucle-seating", name: "Soft bouclé seating", category: "furniture" },
    ],
    lighting: [
      { id: "warm-ambient-light", name: "Warm ambient light", category: "lighting" },
      { id: "sculptural-lamp", name: "Sculptural lamp", category: "lighting" },
    ],
    decor: [
      { id: "handcrafted-ceramics", name: "Handcrafted ceramics", category: "decor" },
      { id: "organic-textile-throw", name: "Organic textile throw", category: "decor" },
    ],
    colors: [
      { id: "warm-earth-tones", name: "Warm earth tones", category: "colors" },
      { id: "muted-neutral", name: "Muted neutral", category: "colors" },
    ],
    composition: [
      { id: "flowing-curved-lines", name: "Flowing curved lines", category: "composition" },
      { id: "organic-asymmetry", name: "Organic asymmetry", category: "composition" },
    ],
    constraints: [
      { id: "natural-materials-preferred", name: "Natural materials preferred", category: "constraints" },
      { id: "soften-hard-edges", name: "Soften hard edges", category: "constraints" },
    ],
    rendering: [
      { id: "soft-warm-light", name: "Soft warm light", category: "rendering" },
    ],
    architecture: [
      { id: "curved-wall-elements", name: "Curved wall elements", category: "architecture" },
    ],
    space: [
      { id: "open-flowing-layout", name: "Open flowing layout", category: "space" },
    ],
    mood: [
      { id: "warm", name: "Warm", category: "mood" },
      { id: "grounded", name: "Grounded", category: "mood" },
    ],
    quality: [
      { id: "tactile-natural-finish", name: "Tactile natural finish", category: "quality" },
    ],
  },

  promptFragments: {
    style: "organic modern style, natural materials, warm earth tones, curved forms, biophilic",
    materials: "natural stone, warm-toned wood",
    lighting: "warm ambient light, sculptural lamps",
    furniture: "curved organic furniture, soft bouclé seating",
    decor: "handcrafted ceramics, organic textile throws",
    negative: "no sharp cold geometry, no synthetic gloss, no stark monochrome",
  },

  negativeCharacteristics: [
    "Sharp cold geometric forms",
    "Synthetic glossy surfaces",
    "Stark monochrome palettes",
    "Industrial metal-heavy furniture",
  ],
  qualityNotes: [
    "Curves should look intentional and structural, not decorative afterthought",
    "Material texture should be visibly tactile",
  ],
  references: [],
};
