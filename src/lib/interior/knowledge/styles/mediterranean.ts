import type { StyleKnowledge } from "../types";

export const MEDITERRANEAN_KNOWLEDGE: StyleKnowledge = {
  id: "mediterranean_knowledge",
  styleId: "mediterranean",
  displayName: "Mediterranean",

  description:
    "Warm, sun-drenched interiors inspired by southern European coastal " +
    "homes: terracotta, whitewashed plaster, arches, and mosaic detail.",

  designGoals: [
    "Evoke warm, sun-filled coastal living",
    "Blend rustic materials with airy, breezy layouts",
    "Celebrate handmade tile and pottery craft",
  ],
  corePrinciples: [
    "Warm terracotta and whitewash as the base palette",
    "Arched openings over sharp rectangular framing",
    "Indoor-outdoor flow",
  ],

  knowledgeRefs: {
    materials: [
      { id: "terracotta-tile", name: "Terracotta tile", category: "materials" },
      { id: "whitewashed-plaster", name: "Whitewashed plaster", category: "materials" },
    ],
    furniture: [
      { id: "wrought-iron-furniture", name: "Wrought iron furniture", category: "furniture" },
      { id: "wood-dining-table", name: "Wood dining table", category: "furniture" },
    ],
    lighting: [
      { id: "sun-drenched-light", name: "Sun-drenched natural light", category: "lighting" },
      { id: "lantern-fixture", name: "Lantern fixture", category: "lighting" },
    ],
    decor: [
      { id: "mosaic-tilework", name: "Mosaic tilework", category: "decor" },
      { id: "ceramic-pottery", name: "Ceramic pottery", category: "decor" },
    ],
    colors: [
      { id: "warm-terracotta", name: "Warm terracotta", category: "colors" },
      { id: "sea-blue-accent", name: "Sea blue accent", category: "colors" },
    ],
    composition: [
      { id: "arched-openings", name: "Arched openings", category: "composition" },
      { id: "courtyard-flow", name: "Courtyard flow", category: "composition" },
    ],
    constraints: [
      { id: "rustic-authenticity", name: "Rustic authenticity", category: "constraints" },
    ],
    rendering: [
      { id: "warm-golden-light", name: "Warm golden light", category: "rendering" },
    ],
    architecture: [
      { id: "arched-niches", name: "Arched niches", category: "architecture" },
      { id: "exposed-wood-beams", name: "Exposed wood beams", category: "architecture" },
    ],
    space: [
      { id: "indoor-outdoor-flow", name: "Indoor-outdoor flow", category: "space" },
    ],
    mood: [
      { id: "relaxed", name: "Relaxed", category: "mood" },
      { id: "sun-warmed", name: "Sun-warmed", category: "mood" },
    ],
    quality: [
      { id: "handmade-tile-authenticity", name: "Handmade tile authenticity", category: "quality" },
    ],
  },

  promptFragments: {
    style: "Mediterranean style, warm terracotta, arched niches, mosaic tiles, natural light",
    materials: "terracotta tile, whitewashed plaster walls",
    lighting: "warm sun-drenched natural light, wrought iron lanterns",
    furniture: "wrought iron furniture, solid wood dining table",
    decor: "mosaic tilework, handmade ceramic pottery",
    negative: "no cold industrial finishes, no dark closed rooms, no glossy modern surfaces",
  },

  negativeCharacteristics: [
    "Cold industrial finishes",
    "Dark, closed-off rooms",
    "Glossy modern surfaces",
    "Monochrome gray palette",
  ],
  qualityNotes: [
    "Tile patterns should look handmade, not perfectly uniform",
    "Light should read as warm, golden, and abundant",
  ],
  references: [],
};
