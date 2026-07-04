import type { StyleKnowledge } from "../types";

export const LOFT_KNOWLEDGE: StyleKnowledge = {
  id: "loft_knowledge",
  styleId: "loft",
  displayName: "Loft",

  description:
    "Open, high-ceilinged spaces that expose their raw industrial " +
    "structure — brick, pipes, concrete — instead of hiding it behind " +
    "finished walls.",

  designGoals: [
    "Preserve and celebrate raw structural elements",
    "Maximize open volume and ceiling height",
    "Furnish with a mix of reclaimed and industrial pieces",
  ],
  corePrinciples: [
    "Exposed structure as the main design feature",
    "Open-plan zoning instead of enclosed rooms",
    "Warm accents against cold raw surfaces",
  ],

  knowledgeRefs: {
    materials: [
      { id: "exposed-brick", name: "Exposed brick", category: "material" },
      { id: "raw-concrete", name: "Raw concrete", category: "material" },
    ],
    furniture: [
      { id: "reclaimed-wood-furniture", name: "Reclaimed wood furniture", category: "furniture" },
      { id: "leather-sofa", name: "Leather sofa", category: "furniture" },
    ],
    lighting: [
      { id: "edison-bulb-fixture", name: "Edison bulb fixture", category: "lighting" },
      { id: "industrial-pendant", name: "Industrial pendant", category: "lighting" },
    ],
    decor: [
      { id: "metal-wall-art", name: "Metal wall art", category: "decor" },
      { id: "vintage-signage", name: "Vintage signage", category: "decor" },
    ],
    colors: [
      { id: "neutral-industrial-palette", name: "Neutral industrial palette", category: "color" },
      { id: "warm-brick-red", name: "Warm brick red", category: "color" },
    ],
    composition: [
      { id: "open-plan-zoning", name: "Open-plan zoning", category: "composition" },
    ],
    constraints: [
      { id: "preserve-raw-surfaces", name: "Preserve raw surfaces", category: "constraint" },
    ],
    rendering: [
      { id: "high-ceiling-light-falloff", name: "High-ceiling light falloff", category: "rendering" },
      { id: "moody-shadows", name: "Moody shadows", category: "rendering" },
    ],
    architecture: [
      { id: "high-ceilings", name: "High ceilings", category: "architecture" },
      { id: "exposed-ductwork", name: "Exposed ductwork", category: "architecture" },
    ],
    space: [
      { id: "open-plan-living", name: "Open-plan living", category: "space" },
      { id: "mezzanine-zones", name: "Mezzanine zones", category: "space" },
    ],
    mood: [
      { id: "raw", name: "Raw", category: "mood" },
      { id: "urban-cool", name: "Urban cool", category: "mood" },
    ],
    quality: [
      { id: "authentic-patina", name: "Authentic patina", category: "quality" },
    ],
  },

  promptFragments: {
    style: "loft style, exposed brick walls, metal pipes, Edison bulbs, open space",
    materials: "exposed brick, raw concrete floor",
    lighting: "Edison bulb fixtures, industrial pendant lamps",
    furniture: "reclaimed wood furniture, worn leather sofa",
    decor: "metal wall art, vintage industrial signage",
    negative: "no drywall-covered structure, no delicate ornate decor, no pastel colors",
  },

  negativeCharacteristics: [
    "Fully drywalled, hidden structure",
    "Delicate ornate decor",
    "Pastel color palettes",
    "Overly polished modern finishes",
  ],
  qualityNotes: [
    "Raw materials should show authentic wear/patina",
    "Ceiling height and volume should be emphasized in framing",
  ],
  references: [],
};
