import type { StyleKnowledge } from "../types";

export const BOHO_KNOWLEDGE: StyleKnowledge = {
  id: "boho_knowledge",
  styleId: "boho",
  displayName: "Boho",

  description:
    "A free-spirited mix of layered textiles, eclectic global-inspired " +
    "decor, and warm earthy tones, embracing pattern-clash and " +
    "imperfection.",

  designGoals: [
    "Layer texture and pattern for a lived-in, collected feel",
    "Mix eclectic global influences freely",
    "Fill the space with plants and warm natural light",
  ],
  corePrinciples: [
    "Imperfection and eclecticism over matching sets",
    "Texture layering (rugs, throws, macrame)",
    "Warm, earthy, sun-baked color story",
  ],

  knowledgeRefs: {
    materials: [
      { id: "woven-rattan", name: "Woven rattan", category: "material" },
      { id: "natural-jute", name: "Natural jute", category: "material" },
    ],
    furniture: [
      { id: "floor-cushions", name: "Floor cushions", category: "furniture" },
      { id: "vintage-eclectic-furniture", name: "Vintage eclectic furniture", category: "furniture" },
    ],
    lighting: [
      { id: "warm-string-lights", name: "Warm string lights", category: "lighting" },
      { id: "rattan-pendant", name: "Rattan pendant", category: "lighting" },
    ],
    decor: [
      { id: "layered-textiles", name: "Layered textiles", category: "decor" },
      { id: "macrame-wall-hanging", name: "Macrame wall hanging", category: "decor" },
    ],
    colors: [
      { id: "warm-earthy-palette", name: "Warm earthy palette", category: "color" },
      { id: "eclectic-accent-colors", name: "Eclectic accent colors", category: "color" },
    ],
    composition: [
      { id: "layered-eclectic-mix", name: "Layered eclectic mix", category: "composition" },
      { id: "relaxed-asymmetry", name: "Relaxed asymmetry", category: "composition" },
    ],
    constraints: [
      { id: "embrace-imperfection", name: "Embrace imperfection", category: "constraint" },
      { id: "mix-patterns-freely", name: "Mix patterns freely", category: "constraint" },
    ],
    rendering: [
      { id: "warm-soft-light", name: "Warm soft light", category: "rendering" },
    ],
    architecture: [
      { id: "relaxed-informal-layout", name: "Relaxed informal layout", category: "architecture" },
    ],
    space: [
      { id: "cozy-layered-floor", name: "Cozy layered floor", category: "space" },
      { id: "plant-filled-corners", name: "Plant-filled corners", category: "space" },
    ],
    mood: [
      { id: "free-spirited", name: "Free-spirited", category: "mood" },
      { id: "warm", name: "Warm", category: "mood" },
    ],
    quality: [
      { id: "handcrafted-eclectic-detail", name: "Handcrafted eclectic detail", category: "quality" },
    ],
  },

  promptFragments: {
    style: "bohemian style, layered textiles, eclectic decor, warm earthy tones, plants",
    materials: "woven rattan, natural jute fiber",
    lighting: "warm string lights, rattan pendant lamp",
    furniture: "floor cushions, vintage eclectic furniture pieces",
    decor: "layered textiles, macrame wall hangings, abundant plants",
    negative: "no sterile minimalism, no rigid symmetry, no cold monochrome palette",
  },

  negativeCharacteristics: [
    "Sterile minimalist surfaces",
    "Rigid formal symmetry",
    "Cold monochrome palette",
    "Uniform matching furniture sets",
  ],
  qualityNotes: [
    "Pattern mixing should feel curated-chaotic, not accidental",
    "Textures should look tactile and well-worn, not new",
  ],
  references: [],
};
