import type { StyleKnowledge } from "../types";

export const COASTAL_KNOWLEDGE: StyleKnowledge = {
  id: "coastal_knowledge",
  styleId: "coastal",
  displayName: "Coastal",

  description:
    "A light, breezy interior in a seaside palette of blues and whites, " +
    "built for maximum daylight and an airy, relaxed atmosphere.",

  designGoals: [
    "Maximize brightness and airiness",
    "Evoke a relaxed seaside atmosphere",
    "Keep materials light in both color and weight",
  ],
  corePrinciples: [
    "Light blue and white as the base palette",
    "Natural, breathable textures (linen, rattan, driftwood)",
    "Open sightlines toward light/outdoors",
  ],

  knowledgeRefs: {
    materials: [
      { id: "whitewashed-wood", name: "Whitewashed wood", category: "material" },
      { id: "natural-linen-fabric", name: "Natural linen fabric", category: "material" },
    ],
    furniture: [
      { id: "rattan-armchair", name: "Rattan armchair", category: "furniture" },
      { id: "slipcovered-sofa", name: "Slipcovered sofa", category: "furniture" },
    ],
    lighting: [
      { id: "bright-natural-daylight", name: "Bright natural daylight", category: "lighting" },
      { id: "nautical-pendant", name: "Nautical pendant", category: "lighting" },
    ],
    decor: [
      { id: "woven-baskets", name: "Woven baskets", category: "decor" },
      { id: "driftwood-accent", name: "Driftwood accent", category: "decor" },
    ],
    colors: [
      { id: "light-blue-and-white", name: "Light blue and white", category: "color" },
      { id: "sandy-neutral", name: "Sandy neutral", category: "color" },
    ],
    composition: [
      { id: "airy-open-layout", name: "Airy open layout", category: "composition" },
      { id: "breezy-symmetry", name: "Breezy symmetry", category: "composition" },
    ],
    constraints: [
      { id: "light-and-airy-only", name: "Light and airy only", category: "constraint" },
    ],
    rendering: [
      { id: "bright-diffuse-daylight", name: "Bright diffuse daylight", category: "rendering" },
    ],
    architecture: [
      { id: "large-windows", name: "Large windows", category: "architecture" },
      { id: "open-veranda-connection", name: "Open veranda connection", category: "architecture" },
    ],
    space: [
      { id: "open-breezy-layout", name: "Open breezy layout", category: "space" },
    ],
    mood: [
      { id: "relaxed", name: "Relaxed", category: "mood" },
      { id: "breezy", name: "Breezy", category: "mood" },
    ],
    quality: [
      { id: "light-natural-texture", name: "Light natural texture", category: "quality" },
    ],
  },

  promptFragments: {
    style: "coastal style, light blues and whites, natural textures, airy beach atmosphere",
    materials: "whitewashed wood, natural linen",
    lighting: "bright natural daylight, nautical pendant fixture",
    furniture: "rattan armchair, slipcovered sofa",
    decor: "woven baskets, driftwood accents",
    negative: "no dark heavy furniture, no saturated warm colors, no closed-off small windows",
  },

  negativeCharacteristics: [
    "Dark heavy furniture",
    "Saturated warm color palette",
    "Small, closed-off windows",
    "Cluttered, busy decor",
  ],
  qualityNotes: [
    "Light should feel bright and diffuse, almost overexposed",
    "Textures should read as light, natural, and breathable",
  ],
  references: [],
};
