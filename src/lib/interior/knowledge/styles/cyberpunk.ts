import type { StyleKnowledge } from "../types";

export const CYBERPUNK_KNOWLEDGE: StyleKnowledge = {
  id: "cyberpunk_knowledge",
  styleId: "cyberpunk",
  displayName: "Киберпанк",

  description:
    "A futuristic, high-tech interior lit by neon and built from dark " +
    "glossy surfaces — a domestic space that reads like a scene from a " +
    "near-future city.",

  designGoals: [
    "Create a high-tech, futuristic atmosphere",
    "Use neon lighting as the primary light source and color driver",
    "Favor sleek synthetic materials over natural ones",
  ],
  corePrinciples: [
    "Neon glow against dark backdrops",
    "High-tech surfaces and visible tech elements",
    "Layered depth through lighting, not ornament",
  ],

  knowledgeRefs: {
    materials: [
      { id: "brushed-metal", name: "Brushed metal", category: "materials" },
      { id: "glossy-black-panel", name: "Glossy black panel", category: "materials" },
    ],
    furniture: [
      { id: "sleek-modular-seating", name: "Sleek modular seating", category: "furniture" },
      { id: "holographic-display-unit", name: "Holographic display unit", category: "furniture" },
    ],
    lighting: [
      { id: "neon-strip-lighting", name: "Neon strip lighting", category: "lighting" },
      { id: "backlit-panels", name: "Backlit panels", category: "lighting" },
    ],
    decor: [
      { id: "glowing-signage", name: "Glowing signage", category: "decor" },
      { id: "tech-gadgetry", name: "Tech gadgetry", category: "decor" },
    ],
    colors: [
      { id: "neon-pink-and-blue", name: "Neon pink and blue", category: "colors" },
      { id: "dark-charcoal-base", name: "Dark charcoal base", category: "colors" },
    ],
    composition: [
      { id: "layered-depth", name: "Layered depth", category: "composition" },
      { id: "asymmetric-tech-clusters", name: "Asymmetric tech clusters", category: "composition" },
    ],
    constraints: [
      { id: "high-tech-only", name: "High-tech only", category: "constraints" },
      { id: "avoid-organic-natural-materials", name: "Avoid organic natural materials", category: "constraints" },
    ],
    rendering: [
      { id: "neon-glow-bloom", name: "Neon glow bloom", category: "rendering" },
      { id: "high-contrast-dark-scene", name: "High-contrast dark scene", category: "rendering" },
    ],
    architecture: [
      { id: "exposed-cabling-aesthetic", name: "Exposed cabling aesthetic", category: "architecture" },
    ],
    space: [
      { id: "dense-vertical-layering", name: "Dense vertical layering", category: "space" },
    ],
    mood: [
      { id: "futuristic", name: "Futuristic", category: "mood" },
      { id: "edgy", name: "Edgy", category: "mood" },
    ],
    quality: [
      { id: "crisp-neon-clarity", name: "Crisp neon clarity", category: "quality" },
    ],
  },

  promptFragments: {
    style: "cyberpunk style, neon lights, dark atmosphere, high-tech elements, futuristic city",
    materials: "brushed metal, glossy black panels",
    lighting: "vivid neon strip lighting, backlit panels",
    furniture: "sleek modular seating, holographic display units",
    decor: "glowing signage, visible tech gadgetry",
    negative: "no rustic natural materials, no warm cozy textiles, no daylight-lit scenes",
  },

  negativeCharacteristics: [
    "Rustic or natural materials",
    "Warm cozy textiles",
    "Bright daylight-lit scenes",
    "Traditional ornate furniture",
  ],
  qualityNotes: [
    "Neon glow should look luminous with realistic bloom, not flat color",
    "Dark areas should stay legible, not crushed to pure black",
  ],
  references: [],
};
