export const ROOM_NAMES: Record<string, string> = {
  office: 'modern office interior',
  cafe: 'cafe and coffee shop interior',
  shop: 'retail store and boutique interior',
  salon: 'luxury beauty salon interior',
  living: 'living room interior',
  bedroom: 'bedroom interior',
  kitchen: 'kitchen interior',
  kids: "children's room interior",
}

export const STYLES: Record<string, { label: string; emoji: string; prompt: string }> = {
  minimalist: {
    label: 'Минимализм',
    emoji: '🤍',
    prompt: 'modern minimalist style, clean lines, neutral palette, natural light, uncluttered',
  },
  loft: {
    label: 'Лофт',
    emoji: '🏭',
    prompt: 'industrial loft style, exposed brick walls, warm Edison bulbs, metal elements, reclaimed wood',
  },
  scandinavian: {
    label: 'Скандинавский',
    emoji: '🌿',
    prompt: 'scandinavian style, light wood, white walls, cozy textiles, hygge atmosphere, simple forms',
  },
  luxury: {
    label: 'Люкс',
    emoji: '✨',
    prompt: 'luxury interior design, marble surfaces, gold accents, elegant lighting, high-end materials, sophisticated',
  },
  japandi: {
    label: 'Japandi',
    emoji: '⛩️',
    prompt: 'japandi style, wabi-sabi aesthetic, natural materials, muted tones, zen minimalism, handcrafted elements',
  },
  biophilic: {
    label: 'Биофилик',
    emoji: '🍃',
    prompt: 'biophilic design, living plant walls, natural wood, organic forms, earthy green palette, nature-inspired',
  },
  artdeco: {
    label: 'Арт-деко',
    emoji: '🔶',
    prompt: 'art deco style, geometric patterns, bold contrast, brass and chrome, glamorous 1930s elegance',
  },
  mediterranean: {
    label: 'Средиземноморье',
    emoji: '🏛️',
    prompt: 'mediterranean style, warm terracotta, white arches, mosaic tiles, sunlit ambiance, rustic charm',
  },
  cyberpunk: {
    label: 'Киберпанк',
    emoji: '🌆',
    prompt: 'cyberpunk style, neon lights, dark walls, holographic elements, futuristic tech aesthetic, purple and cyan',
  },
}

export interface RoomDetails {
  size: string
  ceilingHeight: string
  wallColor: string
  floorMaterial: string
  furniture: string[]
  lighting: string[]
  materials: string[]
  extraNotes: string
}

export function buildPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): string {
  const room = ROOM_NAMES[roomKey] ?? 'interior'
  const style = STYLES[styleKey]?.prompt ?? 'modern contemporary style'

  const parts: string[] = [`${room}, ${style}`]

  if (details) {
    if (details.size) parts.push(`room size ${details.size}`)
    if (details.ceilingHeight) parts.push(`ceiling height ${details.ceilingHeight}`)
    if (details.wallColor) parts.push(`${details.wallColor} walls`)
    if (details.floorMaterial) parts.push(`${details.floorMaterial} floor`)
    if (details.furniture?.length) parts.push(`existing furniture: ${details.furniture.join(', ')}`)
    if (details.lighting?.length) parts.push(`${details.lighting.join(', ')} lighting`)
    if (details.materials?.length) parts.push(`finishing materials: ${details.materials.join(', ')}`)
    if (details.extraNotes) parts.push(details.extraNotes)
  }

  parts.push('4k ultra detailed, professional interior design photography, award winning, realistic lighting, high resolution')

  return parts.join(', ')
}

export const NEGATIVE_PROMPT =
  'blurry, low quality, distorted proportions, ugly, deformed, oversaturated, amateur, dark, gloomy, clutter, text, watermark'
