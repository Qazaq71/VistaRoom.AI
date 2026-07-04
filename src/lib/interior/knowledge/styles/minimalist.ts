import type { StyleKnowledge } from "../types";

export const MINIMALIST_KNOWLEDGE: StyleKnowledge = {
  id: "minimalist_knowledge",
  styleId: "minimalist",
  displayName: "Минимализм",

  description:
    "Reduces the room to essential forms and functions: clean lines, " +
    "neutral tones, and no visual noise. Every remaining object earns its " +
    "place.",

  designGoals: [
    "Maximize perceived calm through restraint",
    "Let architecture and light be the main decoration",
    "Keep every surface purposeful, nothing purely ornamental",
  ],
  corePrinciples: [
    "Less but better",
    "Negative space is a design element, not empty space",
    "Function dictates form",
  ],

  knowledgeRefs: {
    materials: [
      { id: "oak-wood", name: "Oak wood", category: "materials" },
      { id: "matte-white-paint", name: "Matte white paint", category: "materials" },
    ],
    furniture: [
      { id: "low-profile-sofa", name: "Low-profile sofa", category: "furniture" },
      { id: "built-in-storage", name: "Built-in storage", category: "furniture" },
    ],
    lighting: [
      { id: "recessed-lighting", name: "Recessed lighting", category: "lighting" },
      { id: "natural-daylight", name: "Natural daylight", category: "lighting" },
    ],
    decor: [
      { id: "single-statement-piece", name: "Single statement piece", category: "decor" },
    ],
    colors: [
      { id: "neutral-palette", name: "Neutral palette", category: "colors" },
      { id: "monochrome-white", name: "Monochrome white", category: "colors" },
    ],
    composition: [
      { id: "grid-alignment", name: "Grid alignment", category: "composition" },
      { id: "generous-negative-space", name: "Generous negative space", category: "composition" },
    ],
    constraints: [
      { id: "no-clutter", name: "No clutter", category: "constraints" },
      { id: "limited-object-count", name: "Limited object count", category: "constraints" },
    ],
    rendering: [
      { id: "soft-even-shadows", name: "Soft even shadows", category: "rendering" },
    ],
    architecture: [
      { id: "open-floor-plan", name: "Open floor plan", category: "architecture" },
    ],
    space: [
      { id: "uncluttered-floor", name: "Uncluttered floor", category: "space" },
    ],
    mood: [
      { id: "calm", name: "Calm", category: "mood" },
      { id: "serene", name: "Serene", category: "mood" },
    ],
    quality: [
      { id: "flawless-finish", name: "Flawless finish", category: "quality" },
    ],
  },

  promptFragments: {
    style: "minimalist style, clean lines, neutral colors, uncluttered space",
    materials: "matte white walls, natural oak wood, smooth uninterrupted surfaces",
    lighting: "soft even daylight, recessed lighting, no harsh shadows",
    furniture: "low-profile furniture, built-in storage, no visual clutter",
    decor: "one deliberate statement piece, otherwise bare surfaces",
    negative: "no clutter, no ornate details, no busy patterns",
  },

  negativeCharacteristics: [
    "Cluttered surfaces",
    "Ornate or decorative trim",
    "Busy patterns",
    "Mismatched furniture styles",
  ],
  qualityNotes: [
    "Every visible edge should be precise and intentional",
    "Negative space must read as designed, not unfinished",
  ],
  references: [],
};
