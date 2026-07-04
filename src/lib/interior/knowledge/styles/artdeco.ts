import type { StyleKnowledge } from "../types";

export const ARTDECO_KNOWLEDGE: StyleKnowledge = {
  id: "artdeco_knowledge",
  styleId: "artdeco",
  displayName: "Art Deco",

  description:
    "Geometric glamour from the 1930s: bold symmetrical patterns, " +
    "metallic finishes, and lacquered surfaces composed with theatrical " +
    "confidence.",

  designGoals: [
    "Evoke 1930s glamour through geometry and metallic shine",
    "Build strong symmetrical focal compositions",
    "Contrast bold color with polished black/gold accents",
  ],
  corePrinciples: [
    "Geometric repetition (chevrons, sunbursts, stepped forms)",
    "High-contrast, high-gloss finishes",
    "Period-accurate motifs over modern minimalism",
  ],

  knowledgeRefs: {
    materials: [
      { id: "lacquered-wood", name: "Lacquered wood", category: "material" },
      { id: "polished-brass", name: "Polished brass", category: "material" },
    ],
    furniture: [
      { id: "geometric-cabinetry", name: "Geometric cabinetry", category: "furniture" },
      { id: "curved-sofa", name: "Curved sofa", category: "furniture" },
    ],
    lighting: [
      { id: "sunburst-fixture", name: "Sunburst fixture", category: "lighting" },
      { id: "wall-sconces", name: "Wall sconces", category: "lighting" },
    ],
    decor: [
      { id: "geometric-patterned-rug", name: "Geometric patterned rug", category: "decor" },
      { id: "mirrored-accents", name: "Mirrored accents", category: "decor" },
    ],
    colors: [
      { id: "bold-jewel-tones", name: "Bold jewel tones", category: "color" },
      { id: "black-and-gold", name: "Black and gold", category: "color" },
    ],
    composition: [
      { id: "symmetrical-geometry", name: "Symmetrical geometry", category: "composition" },
      { id: "stepped-forms", name: "Stepped forms", category: "composition" },
    ],
    constraints: [
      { id: "period-accurate-motifs", name: "Period-accurate motifs", category: "constraint" },
    ],
    rendering: [
      { id: "high-gloss-reflections", name: "High-gloss reflections", category: "rendering" },
      { id: "sharp-geometric-shadows", name: "Sharp geometric shadows", category: "rendering" },
    ],
    architecture: [
      { id: "stepped-ceiling-details", name: "Stepped ceiling details", category: "architecture" },
      { id: "arched-doorways", name: "Arched doorways", category: "architecture" },
    ],
    space: [
      { id: "formal-layout", name: "Formal layout", category: "space" },
    ],
    mood: [
      { id: "glamorous", name: "Glamorous", category: "mood" },
      { id: "dramatic", name: "Dramatic", category: "mood" },
    ],
    quality: [
      { id: "fine-detailing", name: "Fine detailing", category: "quality" },
    ],
  },

  promptFragments: {
    style: "Art Deco style, geometric patterns, bold colors, metallic finishes, glamorous 1930s",
    materials: "lacquered wood, polished brass, black marble",
    lighting: "sunburst light fixtures, wall sconces",
    furniture: "geometric cabinetry, curved velvet sofas",
    decor: "geometric patterned rugs, mirrored accents",
    negative: "no rustic textures, no muted minimalism, no plain undecorated surfaces",
  },

  negativeCharacteristics: [
    "Rustic or raw textures",
    "Muted minimalist palettes",
    "Plain undecorated surfaces",
    "Asymmetrical casual arrangements",
  ],
  qualityNotes: [
    "Geometric patterns should repeat with precision, not freehand",
    "Metallic finishes should read as genuinely polished",
  ],
  references: [],
};
