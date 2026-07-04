import type { StyleKnowledge } from "../types";

export const CONTEMPORARY_KNOWLEDGE: StyleKnowledge = {
  id: "contemporary_knowledge",
  styleId: "contemporary",
  displayName: "Contemporary",

  description:
    "A current, ever-evolving take on modern living: clean lines, a " +
    "neutral base palette, and functional furniture without commitment " +
    "to one historical style.",

  designGoals: [
    "Reflect current design trends without dating quickly",
    "Balance function and clean visual simplicity",
    "Use one confident accent color against a neutral base",
  ],
  corePrinciples: [
    "Clean lines over ornament",
    "Neutral palette punctuated by a single accent",
    "Furniture chosen for proportion and function",
  ],

  knowledgeRefs: {
    materials: [
      { id: "engineered-wood", name: "Engineered wood", category: "materials" },
      { id: "matte-metal-accent", name: "Matte metal accent", category: "materials" },
    ],
    furniture: [
      { id: "clean-lined-sofa", name: "Clean-lined sofa", category: "furniture" },
      { id: "functional-storage-unit", name: "Functional storage unit", category: "furniture" },
    ],
    lighting: [
      { id: "layered-ambient-light", name: "Layered ambient light", category: "lighting" },
      { id: "statement-pendant", name: "Statement pendant", category: "lighting" },
    ],
    decor: [
      { id: "curated-art-piece", name: "Curated art piece", category: "decor" },
    ],
    colors: [
      { id: "neutral-palette", name: "Neutral palette", category: "colors" },
      { id: "single-accent-color", name: "Single accent color", category: "colors" },
    ],
    composition: [
      { id: "balanced-asymmetry", name: "Balanced asymmetry", category: "composition" },
      { id: "clear-focal-point", name: "Clear focal point", category: "composition" },
    ],
    constraints: [
      { id: "current-trend-alignment", name: "Current trend alignment", category: "constraints" },
    ],
    rendering: [
      { id: "even-daylight", name: "Even daylight", category: "rendering" },
    ],
    architecture: [
      { id: "clean-lines", name: "Clean lines", category: "architecture" },
      { id: "open-floor-plan", name: "Open floor plan", category: "architecture" },
    ],
    space: [
      { id: "functional-zoning", name: "Functional zoning", category: "space" },
    ],
    mood: [
      { id: "fresh", name: "Fresh", category: "mood" },
      { id: "effortless", name: "Effortless", category: "mood" },
    ],
    quality: [
      { id: "crisp-finish", name: "Crisp finish", category: "quality" },
      { id: "well-proportioned-furniture", name: "Well-proportioned furniture", category: "quality" },
    ],
  },

  promptFragments: {
    style: "contemporary style, clean lines, neutral palette, functional and modern",
    materials: "engineered wood, matte metal accents",
    lighting: "layered ambient light, a statement pendant",
    furniture: "clean-lined sofa, functional storage units",
    decor: "one curated art piece, minimal accessories",
    negative: "no dated period motifs, no heavy ornamentation, no clutter",
  },

  negativeCharacteristics: [
    "Dated period-specific motifs",
    "Heavy ornamentation",
    "Cluttered surfaces",
    "Mismatched furniture proportions",
  ],
  qualityNotes: [
    "Lines and edges should read as crisp and current",
    "The single accent color should be confidently saturated, not timid",
  ],
  references: [],
};
