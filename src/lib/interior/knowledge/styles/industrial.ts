import type { StyleKnowledge } from "../types";

export const INDUSTRIAL_KNOWLEDGE: StyleKnowledge = {
  id: "industrial_knowledge",
  styleId: "industrial",
  displayName: "Industrial",

  description:
    "Raw, utilitarian interiors built from steel, concrete, and exposed " +
    "structure — function and honest material over decorative softness.",

  designGoals: [
    "Expose and celebrate structural/mechanical elements",
    "Build a utilitarian, no-frills furniture layout",
    "Keep the material palette raw and unfinished",
  ],
  corePrinciples: [
    "Raw, unfinished surfaces over decorative softness",
    "Metal and concrete as primary materials",
    "Structural honesty over ornament",
  ],

  knowledgeRefs: {
    materials: [
      { id: "raw-steel", name: "Raw steel", category: "material" },
      { id: "exposed-concrete", name: "Exposed concrete", category: "material" },
    ],
    furniture: [
      { id: "metal-frame-furniture", name: "Metal frame furniture", category: "furniture" },
      { id: "reclaimed-wood-table", name: "Reclaimed wood table", category: "furniture" },
    ],
    lighting: [
      { id: "exposed-bulb-fixture", name: "Exposed bulb fixture", category: "lighting" },
      { id: "industrial-cage-lamp", name: "Industrial cage lamp", category: "lighting" },
    ],
    decor: [
      { id: "metal-signage", name: "Metal signage", category: "decor" },
      { id: "vintage-machinery-accent", name: "Vintage machinery accent", category: "decor" },
    ],
    colors: [
      { id: "charcoal-and-rust-palette", name: "Charcoal and rust palette", category: "color" },
      { id: "raw-metal-tone", name: "Raw metal tone", category: "color" },
    ],
    composition: [
      { id: "exposed-structure-focal-point", name: "Exposed structure focal point", category: "composition" },
      { id: "utilitarian-layout", name: "Utilitarian layout", category: "composition" },
    ],
    constraints: [
      { id: "raw-unfinished-surfaces", name: "Raw unfinished surfaces", category: "constraint" },
      { id: "avoid-decorative-softness", name: "Avoid decorative softness", category: "constraint" },
    ],
    rendering: [
      { id: "harsh-directional-light", name: "Harsh directional light", category: "rendering" },
      { id: "strong-industrial-shadows", name: "Strong industrial shadows", category: "rendering" },
    ],
    architecture: [
      { id: "exposed-ductwork", name: "Exposed ductwork", category: "architecture" },
      { id: "steel-beam-structure", name: "Steel beam structure", category: "architecture" },
    ],
    space: [
      { id: "open-warehouse-layout", name: "Open warehouse layout", category: "space" },
    ],
    mood: [
      { id: "raw", name: "Raw", category: "mood" },
      { id: "utilitarian", name: "Utilitarian", category: "mood" },
    ],
    quality: [
      { id: "authentic-raw-finish", name: "Authentic raw finish", category: "quality" },
    ],
  },

  promptFragments: {
    style: "industrial style, exposed brick, metal pipes, concrete floors, Edison bulbs",
    materials: "raw steel, exposed concrete",
    lighting: "exposed bulb fixtures, industrial cage lamps",
    furniture: "metal-frame furniture, reclaimed wood table",
    decor: "metal signage, vintage machinery accents",
    negative: "no soft decorative textiles, no pastel colors, no ornate traditional furniture",
  },

  negativeCharacteristics: [
    "Soft decorative textiles",
    "Pastel color palette",
    "Ornate traditional furniture",
    "Fully finished drywall surfaces",
  ],
  qualityNotes: [
    "Metal and concrete should show authentic wear and raw texture",
    "Structural elements should stay visually dominant",
  ],
  references: [],
};
