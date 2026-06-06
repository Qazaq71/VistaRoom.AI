export const ROOM_NAMES: Record<string, string> = {
  office: 'modern office interior',
  cafe: 'cafe and coffee shop interior',
  shop: 'retail store and boutique interior',
  salon: 'luxury beauty salon interior',
  living: 'living room interior',
  bedroom: 'bedroom interior',
  kitchen: 'kitchen interior',
  bathroom: 'bathroom interior',
  toilet: 'toilet room interior',
  kids: "children's room interior",
}

export const STYLES: Record<string, { label: string; emoji: string; prompt: string }> = {
  minimalist: { label: 'Минимализм', emoji: '🤍', prompt: 'modern minimalist style, clean lines, neutral palette, natural light, uncluttered' },
  loft:       { label: 'Лофт',        emoji: '🏭', prompt: 'industrial loft style, exposed brick walls, warm Edison bulbs, metal elements, reclaimed wood' },
  scandinavian:{ label: 'Скандинавский', emoji: '🌿', prompt: 'scandinavian style, light wood, white walls, cozy textiles, hygge atmosphere, simple forms' },
  luxury:     { label: 'Люкс',        emoji: '✨', prompt: 'luxury interior design, marble surfaces, gold accents, elegant lighting, high-end materials, sophisticated' },
  japandi:    { label: 'Japandi',     emoji: '⛩️', prompt: 'japandi style, wabi-sabi aesthetic, natural materials, muted tones, zen minimalism, handcrafted elements' },
  biophilic:  { label: 'Биофилик',   emoji: '🍃', prompt: 'biophilic design, living plant walls, natural wood, organic forms, earthy green palette, nature-inspired' },
  artdeco:    { label: 'Арт-деко',   emoji: '🔶', prompt: 'art deco style, geometric patterns, bold contrast, brass and chrome, glamorous 1930s elegance' },
  mediterranean:{ label: 'Средиземноморье', emoji: '🏛️', prompt: 'mediterranean style, warm terracotta, white arches, mosaic tiles, sunlit ambiance, rustic charm' },
  cyberpunk:  { label: 'Киберпанк',  emoji: '🌆', prompt: 'cyberpunk style, neon lights, dark walls, holographic elements, futuristic tech aesthetic, purple and cyan' },
}

export interface RoomDetails {
  size: string
  ceilingHeight: string
  wallColor: string
  wallColorHex: string
  wallFinish: string[]
  floorMaterial: string
  floorColorHex: string
  tilezone: string[]
  furniture: string[]
  lighting: string[]
  appliances: string[]
  extraNotes: string
}

export function buildPrompt(roomKey: string, styleKey: string, details?: Partial<RoomDetails>): string {
  const room = ROOM_NAMES[roomKey] ?? 'interior'
  const style = STYLES[styleKey]?.prompt ?? 'modern contemporary style'

  const parts: string[] = [`${room}, ${style}`]

  if (details) {
    if (details.size)            parts.push(`room size ${details.size}`)
    if (details.ceilingHeight)   parts.push(`ceiling height ${details.ceilingHeight}`)
    if (details.wallColor && details.wallColor !== 'custom') parts.push(`${details.wallColor} walls`)
    if (details.wallColorHex)    parts.push(`wall color ${details.wallColorHex}`)
    if (details.wallFinish?.length) parts.push(`wall finish: ${details.wallFinish.join(', ')}`)
    if (details.floorMaterial)   parts.push(`${details.floorMaterial} flooring`)
    if (details.floorColorHex)   parts.push(`floor color ${details.floorColorHex}`)
    if (details.tilezone?.length) parts.push(`tile zones: ${details.tilezone.join(', ')}`)
    if (details.furniture?.length) parts.push(`furniture: ${details.furniture.join(', ')}`)
    if (details.lighting?.length)  parts.push(`${details.lighting.join(', ')} lighting`)
    if (details.appliances?.length) parts.push(`appliances: ${details.appliances.join(', ')}`)
    if (details.extraNotes)      parts.push(details.extraNotes)
  }

  // Максимальный реализм
  parts.push(
    'photorealistic, hyperrealistic interior photography',
    '8k resolution, ultra detailed, sharp focus',
    'professional architectural photography, Canon EOS R5',
    'perfect lighting, ambient occlusion, ray tracing',
    'realistic textures and materials, physically based rendering'
  )

  return parts.join(', ')
}

export const NEGATIVE_PROMPT = [
  'blurry, low quality, distorted, deformed, ugly',
  'cartoon, illustration, painting, drawing, sketch',
  'oversaturated, overexposed, underexposed',
  'watermark, text, logo, signature',
  'extra furniture, floating objects, wrong perspective',
  'unrealistic proportions, bad architecture',
].join(', ')
