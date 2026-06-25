export type RoomDetails = {
  wallColorHex:  string
  wallFinish:    string[]
  floorMaterial: string
  floorColorHex: string
  tilezone:      string[]
  tileColorHex:  string
  furniture:     string[]
  lighting:      string[]
  appliances:    string[]
  extraNotes:    string
}

export const ROOM_NAMES: Record<string, string> = {
  office:   'office interior',
  cafe:     'cafe interior',
  shop:     'retail store interior',
  salon:    'beauty salon interior',
  living:   'living room interior',
  bedroom:  'bedroom interior',
  kitchen:  'kitchen interior',
  bathroom: 'bathroom interior',
  toilet:   'toilet room interior',
  kids:     "children's room interior",
}

const STYLE_DESCRIPTIONS: Record<string, string> = {
  minimalist:       'minimalist style, clean lines, neutral colors, uncluttered space',
  scandinavian:     'Scandinavian style, light wood, white walls, cozy textiles, functional furniture',
  luxury:           'luxury style, premium materials, gold accents, rich textures, sophisticated atmosphere',
  artdeco:          'Art Deco style, geometric patterns, bold colors, metallic finishes, glamorous 1930s',
  art_deco:         'Art Deco style, geometric patterns, bold colors, metallic finishes, glamorous 1930s',
  cyberpunk:        'cyberpunk style, neon lights, dark atmosphere, high-tech elements, futuristic city',
  japandi:          'Japandi style, wabi-sabi, natural materials, muted tones, Zen simplicity',
  industrial:       'industrial style, exposed brick, metal pipes, concrete floors, Edison bulbs',
  loft:             'loft style, exposed brick walls, metal pipes, Edison bulbs, open space',
  mediterranean:    'Mediterranean style, warm terracotta, arched niches, mosaic tiles, natural light',
  bohemian:         'bohemian style, layered textiles, eclectic decor, warm earthy tones, plants',
  boho:             'bohemian style, layered textiles, eclectic decor, warm earthy tones, plants',
  classic:          'classic style, symmetry, ornate details, rich wood tones, elegant furniture',
  neoclassical:     'neoclassical style, elegant columns, symmetry, marble, refined luxury',
  organic_modern:   'organic modern style, natural materials, warm earth tones, curved forms, biophilic',
  contemporary:     'contemporary style, clean lines, neutral palette, functional and modern',
  mid_century:      'mid-century modern style, 1950s wood furniture, geometric forms, retro palette',
  coastal:          'coastal style, light blues and whites, natural textures, airy beach atmosphere',
  biophilic:        'biophilic style, abundant plants, rattan, wood, natural light, living walls',
  wabi_sabi:        'wabi-sabi style, natural imperfection, earthy ceramics, raw textures, muted tones',
  modern_farmhouse: 'modern farmhouse style, shiplap walls, natural wood, rustic charm',
  maximalism:       'maximalism style, bold colors, rich patterns, layered decor, expressive',
  japanese_zen:     'Japanese Zen style, minimalist meditation space, tatami, natural wood, serenity',
}

export function buildEditPrompt(
  roomKey:  string,
  styleKey: string,
  details?: Partial<RoomDetails>,
  mode: 'style' | 'partial' | 'clear' = 'style',
): { positive: string; negative: string } {

  const room      = ROOM_NAMES[roomKey] || 'interior'
  const isMyStyle = styleKey === 'my_style'

  if (mode === 'clear') {
    const parts = [
      `Empty ${room} without any furniture,`,
      `bare walls, clean floor, no furniture no objects no decor, architectural shell only,`,
    ]
    if (isMyStyle && details?.wallColorHex)  parts.push(`walls color ${details.wallColorHex},`)
    if (isMyStyle && details?.floorColorHex) parts.push(`floor color ${details.floorColorHex},`)
    parts.push(`professional interior photography, photorealistic, sharp focus, natural lighting`)
    const negative = 'furniture, sofa, chair, table, bed, cabinet, wardrobe, shelf, lamp, decoration, plant, rug, clutter, objects, appliances, blurry, low quality, text, watermark, people, cartoon, deformed'
    return { positive: parts.join(' ').substring(0, 950), negative }
  }

  if (mode === 'partial') {
    const stylePart = isMyStyle ? buildMyStylePart(details) : (STYLE_DESCRIPTIONS[styleKey] || styleKey + ' style')
    const parts = [`Professional photorealistic photo of a ${room},`, `${stylePart},`]
    if (details?.furniture?.length) parts.push(`replace with: ${details.furniture.join(', ')},`)
    if (details?.extraNotes) parts.push(`${details.extraNotes},`)
    parts.push(`seamlessly blending with surrounding interior, photorealistic, sharp focus, natural lighting`)
    const negative = 'blurry, low quality, text, watermark, people, cartoon, deformed, visible mask edges, unnatural transition, mismatched lighting, wrong perspective'
    return { positive: parts.join(' ').substring(0, 950), negative }
  }

  const stylePart = isMyStyle ? buildMyStylePart(details) : (STYLE_DESCRIPTIONS[styleKey] || styleKey + ' style')
  const parts: string[] = [
    `Professional photorealistic interior photography of a ${room},`,
    `${stylePart},`,
  ]
  if (details?.lighting?.length)   parts.push(`${details.lighting.join(', ')} lighting,`)
  if (details?.furniture?.length)  parts.push(`${details.furniture.join(', ')},`)
  if (details?.appliances?.length) parts.push(`${details.appliances.join(', ')},`)
  if (details?.extraNotes)         parts.push(`${details.extraNotes},`)
  parts.push(`photorealistic, sharp focus, natural lighting, highly detailed,`)
  parts.push(`preserve all windows preserve all doors keep room geometry keep room proportions,`)
  if (isMyStyle) parts.push(`color accurate, exact color matching, precise hex color reproduction`)

  const negative = [
    'remove windows, remove doors, change room shape, alter proportions, change ceiling height,',
    'blurry, low quality, text, watermark, people, cartoon, deformed, distorted, fish-eye,',
    isMyStyle ? 'wrong color, incorrect wall color, wrong floor color, color mismatch, desaturated,' : '',
  ].filter(Boolean).join(' ')

  return { positive: parts.join(' ').substring(0, 950), negative }
}

function hexToColorDescription(hex: string): string {
  const h = hex.replace('#', '').toLowerCase()
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  const map: Record<string, string> = {
    '37474f': 'dark anthracite gray',
    '455a64': 'dark blue gray',
    '263238': 'very dark charcoal',
    '5c3d1e': 'dark walnut brown',
    '4e342e': 'dark espresso brown',
    '3e2723': 'very dark chocolate brown',
    '1c1c1c': 'near black',
    '333333': 'dark charcoal gray',
    '212121': 'almost black',
    'ffffff': 'pure white',
    'f5f5f5': 'off white',
    'fafafa': 'bright white',
    'e0e0e0': 'light gray',
    'bdbdbd': 'medium gray',
    '9e9e9e': 'warm gray',
    'f5f0e8': 'warm cream white',
    'fff8dc': 'warm ivory',
    '8b4513': 'saddle brown',
    'd2691e': 'chocolate brown',
    'a0522d': 'sienna brown',
    '6d4c41': 'medium brown',
    '795548': 'warm brown',
    '2e7d32': 'dark forest green',
    '1b5e20': 'very dark green',
    '0d47a1': 'dark navy blue',
    '1a237e': 'very dark navy',
    'b71c1c': 'dark burgundy red',
    '880e4f': 'dark wine red',
    'f57f17': 'dark amber',
    'e65100': 'dark burnt orange',
  }

  if (map[h]) return map[h]

  if (brightness < 50) return 'very dark ' + getHue(r, g, b)
  if (brightness < 100) return 'dark ' + getHue(r, g, b)
  if (brightness < 160) return 'medium ' + getHue(r, g, b)
  if (brightness < 210) return 'light ' + getHue(r, g, b)
  return 'very light ' + getHue(r, g, b)
}

function getHue(r: number, g: number, b: number): string {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  if (max - min < 30) return 'gray'
  if (r > g && r > b) return b > g ? 'pink' : 'red'
  if (g > r && g > b) return r > b ? 'yellow green' : 'green'
  if (b > r && b > g) return r > g ? 'purple' : 'blue'
  if (r > b && g > b) return 'yellow'
  return 'gray'
}

function buildMyStylePart(details?: Partial<RoomDetails>): string {
  console.log('[buildMyStylePart] details:', JSON.stringify(details))
  const parts: string[] = ['custom interior design']
  if (details?.wallColorHex) {
    const wallColor = hexToColorDescription(details.wallColorHex)
    parts.push(`${wallColor} walls, painted walls in ${wallColor} color`)
  }
  if (details?.wallFinish?.length) parts.push(`walls finished with ${details.wallFinish.join(' and ')}`)
  if (details?.floorColorHex) {
    const floorColor = hexToColorDescription(details.floorColorHex)
    parts.push(`${floorColor} floor, ${floorColor} flooring`)
  }
  if (details?.floorMaterial)    parts.push(`${details.floorMaterial} flooring`)
  if (details?.tileColorHex) {
    const tileColor = hexToColorDescription(details.tileColorHex)
    parts.push(`${tileColor} tiles, ${tileColor} tile color`)
  }
  if (details?.tilezone?.length) parts.push(`tile zones: ${details.tilezone.join(', ')}`)
  return parts.join(', ')
}

export function detectConflicts(_roomKey: string, _details: any): string[] {
  return []
}
