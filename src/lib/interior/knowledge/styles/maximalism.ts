import type { StyleKnowledge } from "../types";

export const MAXIMALISM_KNOWLEDGE: StyleKnowledge = {
  id: "maximalism_knowledge",
  styleId: "maximalism",
  displayName: "Maximalism",

  description:
    "\"More is more\": bold saturated colors, rich clashing patterns, " +
    "and densely layered decor composed into an expressive, curated " +
    "abundance.",

  designGoals: [
    "Layer color, pattern, and object density confidently",
    "Create multiple expressive focal points, not one",
    "Curate abundance rather than let it read as chaos",
  ],
  corePrinciples: [
    "More is more — negative space is minimized deliberately",
    "Bold, clashing complementary colors",
    "Every surface tells a story through collected objects",
  ],

  knowledgeRefs: {
    materials: [
      { id: "mixed-pattern-textile", name: "Mixed pattern textile", category: "materials" },
      { id: "lacquered-surfaces", name: "Lacquered surfaces", category: "materials" },
    ],
    furniture: [
      { id: "bold-statement-furniture", name: "Bold statement furniture", category: "furniture" },
      { id: "layered-seating", name: "Layered seating", category: "furniture" },
    ],
    lighting: [
      { id: "layered-statement-lighting", name: "Layered statement lighting", category: "lighting" },
      { id: "colorful-glass-fixture", name: "Colorful glass fixture", category: "lighting" },
    ],
    decor: [
      { id: "gallery-wall", name: "Gallery wall", category: "decor" },
      { id: "curated-collectibles", name: "Curated collectibles", category: "decor" },
    ],
    colors: [
      { id: "saturated-bold-palette", name: "Saturated bold palette", category: "colors" },
      { id: "clashing-complementary-colors", name: "Clashing complementary colors", category: "colors" },
    ],
    composition: [
      { id: "dense-layered-arrangement", name: "Dense layered arrangement", category: "composition" },
      { id: "eclectic-focal-points", name: "Eclectic focal points", category: "composition" },
    ],
    constraints: [
      { id: "more-is-more", name: "More is more", category: "constraints" },
      { id: "avoid-empty-negative-space", name: "Avoid empty negative space", category: "constraints" },
    ],
    rendering: [
      { id: "rich-saturated-light", name: "Rich saturated light", category: "rendering" },
    ],
    architecture: [
      { id: "ornate-detailing", name: "Ornate detailing", category: "architecture" },
      { id: "layered-wall-treatments", name: "Layered wall treatments", category: "architecture" },
    ],
    space: [
      { id: "densely-furnished-floor", name: "Densely furnished floor", category: "space" },
    ],
    mood: [
      { id: "vibrant", name: "Vibrant", category: "mood" },
      { id: "expressive", name: "Expressive", category: "mood" },
    ],
    quality: [
      { id: "rich-layered-detail", name: "Rich layered detail", category: "quality" },
    ],
  },

  promptFragments: {
    style: "maximalism style, bold colors, rich patterns, layered decor, expressive",
    materials: "mixed pattern textiles, lacquered surfaces",
    lighting: "layered statement lighting, colorful glass fixtures",
    furniture: "bold statement furniture, layered seating",
    decor: "dense gallery wall, curated collectibles",
    negative: "no empty minimalist surfaces, no monochrome restraint, no single-focal-point sparseness",
  },

  negativeCharacteristics: [
    "Empty minimalist surfaces",
    "Monochrome restrained palette",
    "Single sparse focal point",
    "Uniform matching furniture",
  ],
  qualityNotes: [
    "Density should read as curated, not cluttered or accidental",
    "Color clashes should feel intentional and confident",
  ],
  references: [],
};
