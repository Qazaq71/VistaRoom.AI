import type { StyleKnowledge } from "../types";

export const NEOCLASSICAL_KNOWLEDGE: StyleKnowledge = {
  id: "neoclassical_knowledge",
  styleId: "neoclassical",
  displayName: "Neoclassical",

  description:
    "A modern interpretation of classical grandeur: columns, symmetry, " +
    "marble, and gilded detailing composed with restrained elegance.",

  designGoals: [
    "Apply classical proportion and symmetry rules",
    "Balance ornate detailing with a refined, uncluttered feel",
    "Use marble and gold as the material signature",
  ],
  corePrinciples: [
    "Strict formal symmetry along a central axis",
    "Classical architectural elements (columns, cornices)",
    "Restraint in color, richness in material",
  ],

  knowledgeRefs: {
    materials: [
      { id: "marble", name: "Marble", category: "material" },
      { id: "gilded-wood-detailing", name: "Gilded wood detailing", category: "material" },
    ],
    furniture: [
      { id: "carved-wood-furniture", name: "Carved wood furniture", category: "furniture" },
      { id: "upholstered-armchair", name: "Upholstered armchair", category: "furniture" },
    ],
    lighting: [
      { id: "crystal-chandelier", name: "Crystal chandelier", category: "lighting" },
      { id: "wall-sconces", name: "Wall sconces", category: "lighting" },
    ],
    decor: [
      { id: "classical-sculpture", name: "Classical sculpture", category: "decor" },
      { id: "ornate-mirror", name: "Ornate mirror", category: "decor" },
    ],
    colors: [
      { id: "soft-ivory-palette", name: "Soft ivory palette", category: "color" },
      { id: "gold-accent", name: "Gold accent", category: "color" },
    ],
    composition: [
      { id: "strict-symmetry", name: "Strict symmetry", category: "composition" },
      { id: "formal-axis", name: "Formal axis", category: "composition" },
    ],
    constraints: [
      { id: "classical-proportion-rules", name: "Classical proportion rules", category: "constraint" },
    ],
    rendering: [
      { id: "soft-formal-light", name: "Soft formal light", category: "rendering" },
    ],
    architecture: [
      { id: "columns", name: "Columns", category: "architecture" },
      { id: "ornate-cornice-molding", name: "Ornate cornice molding", category: "architecture" },
    ],
    space: [
      { id: "formal-room-arrangement", name: "Formal room arrangement", category: "space" },
    ],
    mood: [
      { id: "refined", name: "Refined", category: "mood" },
      { id: "timeless", name: "Timeless", category: "mood" },
    ],
    quality: [
      { id: "precise-classical-detailing", name: "Precise classical detailing", category: "quality" },
    ],
  },

  promptFragments: {
    style: "neoclassical style, elegant columns, symmetry, marble, refined luxury",
    materials: "polished marble, gilded wood detailing",
    lighting: "crystal chandelier, formal wall sconces",
    furniture: "carved wood furniture, upholstered armchairs",
    decor: "classical sculpture, ornate gilded mirror",
    negative: "no industrial materials, no asymmetric modern layout, no bare minimalism",
  },

  negativeCharacteristics: [
    "Industrial raw materials",
    "Asymmetric modern layouts",
    "Bare minimalist surfaces",
    "Bright neon or saturated colors",
  ],
  qualityNotes: [
    "Symmetry should be exact along the central axis",
    "Gilded detailing should look refined, not gaudy",
  ],
  references: [],
};
