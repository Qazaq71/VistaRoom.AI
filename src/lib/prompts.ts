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

  // Explicit map for all common interior hex codes
  const map: Record<string, string> = {
    // Whites and creams
    'ffffff': 'pure white',
    'f5f5f5': 'off white',
    'fafafa': 'bright white',
    'f0ede8': 'warm ivory white',
    'ede8e0': 'warm cream white',
    'f5f0e8': 'soft warm cream',
    'fff8dc': 'ivory cream',
    'efe8d8': 'warm beige cream',
    'efebe0': 'light warm cream',
    'fdf6ec': 'very light cream',
    'f8f4ee': 'pale cream',

    // Light grays
    'e8e8e8': 'light gray',
    'e0e0e0': 'light gray',
    'd9d9d9': 'light silver gray',
    'bdbdbd': 'medium light gray',
    'c4b9a8': 'warm light gray beige',
    '9e9e9e': 'medium gray',
    '8d8d8d': 'medium gray concrete',
    '888888': 'medium gray',

    // Dark grays and charcoals
    '757575': 'dark gray',
    '616161': 'dark gray',
    '37474f': 'dark anthracite gray',
    '455a64': 'dark blue gray',
    '263238': 'very dark charcoal',
    '333333': 'dark charcoal gray',
    '2c2c2c': 'near black charcoal',
    '212121': 'almost black',
    '1c1c1c': 'near black',

    // Beiges and tans — IMPORTANT: prevent misidentification as red
    'f2e8d9': 'light beige',
    'ede0cf': 'warm light beige',
    'e8ddd0': 'light warm beige',
    'd4c5b0': 'medium warm beige',
    'd4b896': 'warm tan beige',
    'c8a87a': 'warm oak tan',
    'c8b49a': 'soft warm beige',
    'c4a882': 'medium warm tan',
    'b8956a': 'warm medium tan',
    'a08060': 'medium tan brown',

    // Browns
    '8b4513': 'saddle brown',
    '6b4226': 'dark chocolate brown',
    '6d4c41': 'medium warm brown',
    '5c3d1e': 'dark walnut brown',
    '795548': 'warm medium brown',
    '4e342e': 'dark espresso brown',
    '3e2723': 'very dark chocolate brown',
    'a0522d': 'sienna brown',
    'd2691e': 'warm chocolate brown',
    '8d6e63': 'warm brownish gray',

    // Terracotta and earthy reds — warm but NOT red walls
    'c97b63': 'warm terracotta orange',
    'b5533c': 'deep terracotta red',
    'c4704f': 'warm terracotta',
    'bf6b58': 'muted terracotta',
    'cd8b6a': 'light terracotta orange',
    'e07b54': 'vivid terracotta',

    // Blues
    '0d47a1': 'dark navy blue',
    '1a237e': 'very dark navy',
    '1565c0': 'dark blue',
    '1976d2': 'medium blue',
    '5c9fd6': 'medium sky blue',
    '90caf9': 'light sky blue',
    '42a5f5': 'medium light blue',
    'bbdefb': 'very light blue',
    'e3f2fd': 'pale light blue',
    '4fc3f7': 'light cyan blue',

    // Greens
    '1b5e20': 'very dark forest green',
    '2e7d32': 'dark forest green',
    '388e3c': 'dark green',
    '43a047': 'medium green',
    '66bb6a': 'medium light green',
    '81c784': 'soft sage green',
    'a5d6a7': 'light sage green',
    'c8e6c9': 'very light green',
    '4db6ac': 'medium teal green',
    '80cbc4': 'light teal',
    '00897b': 'teal green',
    'a8d5a2': 'soft muted green',

    // Pinks and roses
    'f48fb1': 'soft pink',
    'f06292': 'medium pink',
    'e91e63': 'bright pink',
    'fce4ec': 'very light pink',
    'f8bbd0': 'light pale pink',
    'ec407a': 'deep rose pink',

    // Purples
    '880e4f': 'dark wine red',
    'b71c1c': 'dark burgundy red',
    '6a1b9a': 'dark purple',
    '7b1fa2': 'medium purple',
    'ab47bc': 'light purple',
    'ce93d8': 'pale lavender purple',
    '9c27b0': 'purple',
    '7c4dff': 'medium violet',

    // Yellows and ambers
    'f57f17': 'dark amber yellow',
    'e65100': 'dark burnt orange',
    'ff8f00': 'amber orange',
    'ffa000': 'warm amber',
    'ffb300': 'golden amber',
    'ffca28': 'warm yellow gold',
    'ffd54f': 'light golden yellow',
    'ffe082': 'pale yellow',
    'fff9c4': 'very pale yellow',
    'f9a825': 'golden yellow',

  }

  if (map[h]) return map[h]

  // Fallback: compute from RGB
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  const hue = getHueFromRGB(r, g, b)

  if (brightness > 220) return 'very light ' + hue
  if (brightness > 180) return 'light ' + hue
  if (brightness > 120) return 'medium ' + hue
  if (brightness > 60)  return 'dark ' + hue
  return 'very dark ' + hue
}

function getHueFromRGB(r: number, g: number, b: number): string {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min
  const saturation = max === 0 ? 0 : delta / max

  // Very low saturation = achromatic
  if (saturation < 0.10) return 'gray'

  // Beige/tan detection: warm, low-medium saturation, red dominant but subtle
  if (saturation < 0.35 && r > 150 && r > g && g > b && r - b < 100) return 'beige'

  // Skin/terracotta: moderate saturation, red dominant
  if (saturation >= 0.20 && saturation < 0.55 && r > g && r > b && r - b > 60 && r > 150) {
    if (g > 100) return 'terracotta orange'
    return 'warm red'
  }

  // Standard hue detection
  if (r >= max && b >= min) return 'orange red'
  if (r >= max && g >= min) return 'pink'
  if (g >= max && r >= min) return 'yellow green'
  if (g >= max && b >= min) return 'green'
  if (b >= max && g >= min) return 'cyan blue'
  if (b >= max && r >= min) return 'purple blue'

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
