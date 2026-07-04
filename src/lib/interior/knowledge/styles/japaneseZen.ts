import type { StyleKnowledge } from "../types";

export const JAPANESE_ZEN_KNOWLEDGE: StyleKnowledge = {
  id: "japanese_zen_knowledge",
  styleId: "japanese_zen",
  displayName: "Japanese Zen",

  description:
    "A meditative, minimalist interior built from tatami, natural " +
    "bamboo, and soft filtered light — extreme restraint in service of " +
    "serenity.",

  designGoals: [
    "Create a meditative, distraction-free atmosphere",
    "Reduce visual elements to the essential few",
    "Use natural materials and soft filtered light",
  ],
  corePrinciples: [
    "Extreme minimalism — no visual clutter",
    "Low horizontal furniture lines",
    "Generous negative space as a meditative element",
  ],

  knowledgeRefs: {
    materials: [
      { id: "tatami-mat", name: "Tatami mat", category: "materials" },
      { id: "natural-bamboo", name: "Natural bamboo", category: "materials" },
    ],
    furniture: [
      { id: "low-wood-furniture", name: "Low wood furniture", category: "furniture" },
      { id: "floor-seating", name: "Floor seating", category: "furniture" },
    ],
    lighting: [
      { id: "soft-diffused-light", name: "Soft diffused light", category: "lighting" },
      { id: "paper-shoji-lamp", name: "Paper shoji lamp", category: "lighting" },
    ],
    decor: [
      { id: "single-ikebana-arrangement", name: "Single ikebana arrangement", category: "decor" },
      { id: "minimal-scroll-art", name: "Minimal scroll art", category: "decor" },
    ],
    colors: [
      { id: "muted-natural-palette", name: "Muted natural palette", category: "colors" },
      { id: "soft-neutral-tone", name: "Soft neutral tone", category: "colors" },
    ],
    composition: [
      { id: "strict-minimal-balance", name: "Strict minimal balance", category: "composition" },
      { id: "generous-negative-space", name: "Generous negative space", category: "composition" },
    ],
    constraints: [
      { id: "extreme-minimalism", name: "Extreme minimalism", category: "constraints" },
      { id: "no-visual-clutter", name: "No visual clutter", category: "constraints" },
    ],
    rendering: [
      { id: "soft-filtered-light", name: "Soft filtered light", category: "rendering" },
    ],
    architecture: [
      { id: "shoji-screens", name: "Shoji screens", category: "architecture" },
      { id: "low-horizontal-lines", name: "Low horizontal lines", category: "architecture" },
    ],
    space: [
      { id: "uncluttered-meditative-floor", name: "Uncluttered meditative floor", category: "space" },
      { id: "clear-circulation", name: "Clear circulation", category: "space" },
    ],
    mood: [
      { id: "serene", name: "Serene", category: "mood" },
      { id: "meditative", name: "Meditative", category: "mood" },
    ],
    quality: [
      { id: "precise-craftsmanship", name: "Precise craftsmanship", category: "quality" },
      { id: "quiet-refinement", name: "Quiet refinement", category: "quality" },
    ],
  },

  promptFragments: {
    style: "Japanese Zen style, minimalist meditation space, tatami, natural wood, serenity",
    materials: "tatami mat flooring, natural bamboo",
    lighting: "soft diffused light, paper shoji lamp glow",
    furniture: "low wood furniture, floor seating",
    decor: "a single ikebana arrangement, minimal scroll art",
    negative: "no clutter, no bright saturated colors, no ornate Western decor",
  },

  negativeCharacteristics: [
    "Cluttered surfaces",
    "Bright saturated colors",
    "Ornate Western decor",
    "Tall bulky furniture",
  ],
  qualityNotes: [
    "Negative space should dominate the composition",
    "Every remaining object must be deliberate and singular",
  ],
  references: [],
};
