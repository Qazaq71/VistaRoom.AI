import type { StyleKnowledge } from "../types";

export const BIOPHILIC_KNOWLEDGE: StyleKnowledge = {
  id: "biophilic_knowledge",
  styleId: "biophilic",
  displayName: "Biophilic",

  description:
    "Interiors built around a direct connection to nature: abundant " +
    "living plants, natural materials, and maximized daylight.",

  designGoals: [
    "Maximize the presence of living greenery",
    "Blur the boundary between indoor and outdoor",
    "Use only natural, breathable materials",
  ],
  corePrinciples: [
    "Greenery is structural, not decorative",
    "Daylight and airflow are design priorities",
    "Organic imperfection over manufactured uniformity",
  ],

  knowledgeRefs: {
    materials: [
      { id: "rattan", name: "Rattan", category: "materials" },
      { id: "live-edge-wood", name: "Live-edge wood", category: "materials" },
    ],
    furniture: [
      { id: "woven-seating", name: "Woven seating", category: "furniture" },
      { id: "planter-integrated-furniture", name: "Planter-integrated furniture", category: "furniture" },
    ],
    lighting: [
      { id: "abundant-natural-light", name: "Abundant natural light", category: "lighting" },
      { id: "skylight", name: "Skylight", category: "lighting" },
    ],
    decor: [
      { id: "living-wall", name: "Living wall", category: "decor" },
      { id: "hanging-plants", name: "Hanging plants", category: "decor" },
    ],
    colors: [
      { id: "greens-and-earth-tones", name: "Greens and earth tones", category: "colors" },
    ],
    composition: [
      { id: "organic-flow", name: "Organic flow", category: "composition" },
      { id: "plant-clusters", name: "Plant clusters", category: "composition" },
    ],
    constraints: [
      { id: "maximize-daylight", name: "Maximize daylight", category: "constraints" },
      { id: "integrate-greenery", name: "Integrate greenery", category: "constraints" },
    ],
    rendering: [
      { id: "dappled-natural-light", name: "Dappled natural light", category: "rendering" },
    ],
    architecture: [
      { id: "large-glazing", name: "Large glazing", category: "architecture" },
      { id: "indoor-outdoor-connection", name: "Indoor-outdoor connection", category: "architecture" },
    ],
    space: [
      { id: "open-breathable-layout", name: "Open breathable layout", category: "space" },
    ],
    mood: [
      { id: "fresh", name: "Fresh", category: "mood" },
      { id: "rejuvenating", name: "Rejuvenating", category: "mood" },
    ],
    quality: [
      { id: "lush-greenery-density", name: "Lush greenery density", category: "quality" },
    ],
  },

  promptFragments: {
    style: "biophilic style, abundant plants, rattan, wood, natural light, living walls",
    materials: "rattan, live-edge wood, natural stone",
    lighting: "abundant natural daylight, skylights",
    furniture: "woven rattan seating, planter-integrated furniture",
    decor: "living wall, hanging plants, natural textures",
    negative: "no artificial plants, no synthetic materials, no closed-off dark rooms",
  },

  negativeCharacteristics: [
    "Artificial or plastic plants",
    "Synthetic, non-breathable materials",
    "Closed-off, dark rooms",
    "Sterile clinical surfaces",
  ],
  qualityNotes: [
    "Plants must look alive, healthy, and varied in scale",
    "Natural materials should show authentic grain/texture",
  ],
  references: [],
};
