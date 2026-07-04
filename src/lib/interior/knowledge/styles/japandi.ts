import type { StyleKnowledge } from "../types";

export const JAPANDI_KNOWLEDGE: StyleKnowledge = {
  id: "japandi_knowledge",
  styleId: "japandi",
  displayName: "Japandi",

  description:
    "A hybrid of Japanese wabi-sabi restraint and Scandinavian " +
    "functionality: low furniture, natural materials, muted tones, and " +
    "quiet negative space.",

  designGoals: [
    "Merge Japanese simplicity with Scandinavian warmth",
    "Favor craftsmanship and natural materials over trend-driven decor",
    "Create a calm, contemplative atmosphere",
  ],
  corePrinciples: [
    "Quality over quantity",
    "Balanced asymmetry rather than strict symmetry",
    "Natural materials left honest, not over-finished",
  ],

  knowledgeRefs: {
    materials: [
      { id: "raw-wood", name: "Raw wood", category: "material" },
      { id: "natural-linen", name: "Natural linen", category: "material" },
    ],
    furniture: [
      { id: "low-wood-furniture", name: "Low wood furniture", category: "furniture" },
    ],
    lighting: [
      { id: "soft-ambient-light", name: "Soft ambient light", category: "lighting" },
      { id: "paper-lantern", name: "Paper lantern", category: "lighting" },
    ],
    decor: [
      { id: "minimal-ceramics", name: "Minimal ceramics", category: "decor" },
      { id: "single-branch-arrangement", name: "Single branch arrangement", category: "decor" },
    ],
    colors: [
      { id: "muted-earth-tones", name: "Muted earth tones", category: "color" },
      { id: "warm-neutral", name: "Warm neutral", category: "color" },
    ],
    composition: [
      { id: "balanced-asymmetry", name: "Balanced asymmetry", category: "composition" },
      { id: "negative-space", name: "Negative space", category: "composition" },
    ],
    constraints: [
      { id: "quality-over-quantity", name: "Quality over quantity", category: "constraint" },
      { id: "few-objects", name: "Few objects", category: "constraint" },
    ],
    rendering: [
      { id: "soft-natural-light", name: "Soft natural light", category: "rendering" },
    ],
    architecture: [
      { id: "clean-joinery", name: "Clean joinery", category: "architecture" },
    ],
    space: [
      { id: "uncluttered-floor", name: "Uncluttered floor", category: "space" },
      { id: "calm-circulation", name: "Calm circulation", category: "space" },
    ],
    mood: [
      { id: "serene", name: "Serene", category: "mood" },
      { id: "contemplative", name: "Contemplative", category: "mood" },
    ],
    quality: [
      { id: "handcrafted-finish", name: "Handcrafted finish", category: "quality" },
    ],
  },

  promptFragments: {
    style: "Japandi style, wabi-sabi, natural materials, muted tones, Zen simplicity",
    materials: "raw wood, natural linen, matte stoneware",
    lighting: "soft diffused ambient light, paper lantern glow",
    furniture: "low wood furniture, understated joinery",
    decor: "minimal ceramics, a single branch arrangement",
    negative: "no clutter, no glossy surfaces, no bright saturated colors",
  },

  negativeCharacteristics: [
    "Cluttered surfaces",
    "Glossy or high-shine finishes",
    "Bright saturated colors",
    "Ornate Western decor",
  ],
  qualityNotes: [
    "Materials should look honest and slightly imperfect, not machine-uniform",
    "Every object should feel deliberately placed",
  ],
  references: [],
};
