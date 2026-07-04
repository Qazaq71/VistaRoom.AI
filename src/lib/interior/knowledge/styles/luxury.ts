import type { StyleKnowledge } from "../types";

export const LUXURY_KNOWLEDGE: StyleKnowledge = {
  id: "luxury_knowledge",
  styleId: "luxury",
  displayName: "Luxury",

  description:
    "Premium materials, gold accents, and rich textures composed into a " +
    "formal, sophisticated atmosphere. Every element signals quality.",

  designGoals: [
    "Communicate wealth and refinement through material quality",
    "Create a formal, photogenic focal point per room",
    "Layer lighting for a dramatic, polished atmosphere",
  ],
  corePrinciples: [
    "Premium materials only, no budget substitutes",
    "Symmetry and formality over casualness",
    "Gold/metallic accents used deliberately, not sparingly hidden",
  ],

  knowledgeRefs: {
    materials: [
      { id: "marble", name: "Marble", category: "materials" },
      { id: "brushed-gold-metal", name: "Brushed gold metal", category: "materials" },
    ],
    furniture: [
      { id: "velvet-upholstery", name: "Velvet upholstery", category: "furniture" },
      { id: "statement-armchair", name: "Statement armchair", category: "furniture" },
    ],
    lighting: [
      { id: "crystal-chandelier", name: "Crystal chandelier", category: "lighting" },
      { id: "layered-accent-lighting", name: "Layered accent lighting", category: "lighting" },
    ],
    decor: [
      { id: "fine-art-piece", name: "Fine art piece", category: "decor" },
      { id: "decorative-mirror", name: "Decorative mirror", category: "decor" },
    ],
    colors: [
      { id: "rich-jewel-tones", name: "Rich jewel tones", category: "colors" },
      { id: "gold-accent", name: "Gold accent", category: "colors" },
    ],
    composition: [
      { id: "symmetrical-layout", name: "Symmetrical layout", category: "composition" },
      { id: "focal-point", name: "Focal point", category: "composition" },
    ],
    constraints: [
      { id: "premium-materials-only", name: "Premium materials only", category: "constraints" },
    ],
    rendering: [
      { id: "glossy-reflective-surfaces", name: "Glossy reflective surfaces", category: "rendering" },
      { id: "dramatic-highlights", name: "Dramatic highlights", category: "rendering" },
    ],
    architecture: [
      { id: "high-ceilings", name: "High ceilings", category: "architecture" },
      { id: "ornate-molding", name: "Ornate molding", category: "architecture" },
    ],
    space: [
      { id: "generous-spacing", name: "Generous spacing", category: "space" },
    ],
    mood: [
      { id: "opulent", name: "Opulent", category: "mood" },
      { id: "sophisticated", name: "Sophisticated", category: "mood" },
    ],
    quality: [
      { id: "flawless-craftsmanship", name: "Flawless craftsmanship", category: "quality" },
    ],
  },

  promptFragments: {
    style: "luxury style, premium materials, gold accents, rich textures, sophisticated atmosphere",
    materials: "polished marble, brushed gold metal, fine velvet",
    lighting: "crystal chandelier, layered dramatic accent lighting",
    furniture: "velvet upholstered furniture, statement armchairs",
    decor: "fine art, ornate mirrors, curated luxury accessories",
    negative: "no cheap materials, no plastic finishes, no cluttered budget decor",
  },

  negativeCharacteristics: [
    "Cheap or synthetic-looking materials",
    "Plastic finishes",
    "Mismatched budget furniture",
    "Cluttered, informal arrangement",
  ],
  qualityNotes: [
    "Reflections and highlights should look genuinely polished, not plastic",
    "Symmetry should read as formal composition, not accidental",
  ],
  references: [],
};
