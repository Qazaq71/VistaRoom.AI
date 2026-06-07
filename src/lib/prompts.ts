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

export const STYLE_PROMPTS: Record<string, string> = {
  minimalist:    'minimalist style, plain white walls, simple clean-line furniture, neutral palette, uncluttered',
  loft:          'industrial loft style, exposed red brick walls, black metal frames, Edison bulb pendant lights, concrete accents',
  scandinavian:  'Scandinavian hygge style, white walls, light birch furniture, wool textiles, warm cozy atmosphere',
  luxury:        'luxury interior, white marble walls and floor, gold brass hardware, crystal chandelier, velvet upholstery',
  japandi:       'Japandi wabi-sabi style, warm natural oak panels, low furniture, paper lantern light, muted sand and charcoal tones, zen',
  biophilic:     'biophilic design, lush indoor plants, moss wall, rattan furniture, natural wood, earthy green palette',
  artdeco:       'Art Deco style, geometric gold wallpaper, brass fixtures, velvet armchairs, chevron marble floor, 1930s glamour',
  mediterranean: 'Mediterranean style, whitewashed walls, terracotta tile floor, blue mosaic accents, arched elements, warm sunlight',
  cyberpunk:     'cyberpunk style, dark walls, purple and cyan neon LED strips, holographic panels, glossy black surfaces, futuristic',
}

// Keep STYLES export for page.tsx import compatibility
export const STYLES: Record<string, { label: string; emoji: string; prompt: string }> = {
  minimalist:    { label: 'Minimalism',    emoji: '-', prompt: STYLE_PROMPTS.minimalist },
  loft:          { label: 'Loft',          emoji: '-', prompt: STYLE_PROMPTS.loft },
  scandinavian:  { label: 'Scandinavian',  emoji: '-', prompt: STYLE_PROMPTS.scandinavian },
  luxury:        { label: 'Luxury',        emoji: '-', prompt: STYLE_PROMPTS.luxury },
  japandi:       { label: 'Japandi',       emoji: '-', prompt: STYLE_PROMPTS.japandi },
  biophilic:     { label: 'Biophilic',     emoji: '-', prompt: STYLE_PROMPTS.biophilic },
  artdeco:       { label: 'Art Deco',      emoji: '-', prompt: STYLE_PROMPTS.artdeco },
  mediterranean: { label: 'Mediterranean', emoji: '-', prompt: STYLE_PROMPTS.mediterranean },
  cyberpunk:     { label: 'Cyberpunk',     emoji: '-', prompt: STYLE_PROMPTS.cyberpunk },
}

export interface RoomDetails {
  size: string
  ceilingHeight: string
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

// Direct English lookup by key - no translation needed
const WALL_FINISH_EN: Record<string, string> = {
  paint:       'smooth painted walls',
  wallpaper:   'decorative patterned wallpaper on walls',
  plaster:     'Venetian decorative plaster texture on walls',
  brick:       'exposed red brick walls with clearly visible individual bricks and white mortar joints',
  wood:        'horizontal wooden plank wall cladding with visible wood grain',
  porcelain:   'large format porcelain stoneware wall tiles',
  marble:      'polished white marble wall panels with grey veining',
  gypsum:      '3D decorative gypsum relief wall panels',
  liquidwalls: 'liquid wallpaper textured wall coating',
  microcement: 'seamless grey microcement wall finish',
  metal:       'brushed metal wall cladding panels',
  glass:       'glass wall panels',
  mosaic:      'small colorful mosaic wall tiles',
  concrete:    'raw concrete decorative effect on walls',
  stone:       'natural stone wall cladding with visible texture',
  cork:        'natural cork tile wall covering',
}

const FLOOR_EN: Record<string, string> = {
  light_parquet: 'light oak herringbone parquet floor with visible wood grain',
  dark_parquet:  'dark walnut herringbone parquet floor',
  laminate:      'laminate wood floor planks',
  ceramic_tile:  'ceramic square floor tiles',
  concrete:      'smooth polished grey concrete floor',
  carpet:        'thick fitted carpet floor',
  marble:        'polished white marble floor with grey veining',
  porcelain:     'large format porcelain stoneware floor tiles',
  linoleum:      'vinyl linoleum floor covering',
}

const TILE_EN: Record<string, string> = {
  kitchen_backsplash: 'white subway tile backsplash on the kitchen wall between counter and upper cabinets',
  kitchen_floor:      'porcelain tile kitchen floor',
  bath_walls:         'ceramic tiles covering all bathroom walls from floor to ceiling',
  bath_floor:         'non-slip ceramic mosaic tiles on bathroom floor',
  toilet_walls:       'ceramic wall tiles in the toilet room',
  toilet_floor:       'ceramic tile toilet room floor',
  shower:             'mosaic tiles in the shower enclosure walls and floor',
  tub_surround:       'ceramic tile panels around the bathtub',
}

const LIGHT_EN: Record<string, string> = {
  natural:    'abundant natural daylight through windows',
  warm:       'warm golden 2700K ambient lighting',
  cool:       'cool white 5000K lighting',
  recessed:   'recessed ceiling spotlights in a grid pattern',
  chandelier: 'large decorative chandelier hanging from ceiling',
  floor_lamp: 'floor lamp in the corner',
  accent:     'LED accent backlight strips',
  strip:      'LED strip lights along ceiling cornice',
  sconce:     'decorative wall sconce lights',
  pendant:    'pendant lights hanging from ceiling',
}

const APP_EN: Record<string, string> = {
  fridge:     'stainless steel refrigerator',
  microwave:  'built-in microwave oven',
  dishwasher: 'integrated dishwasher',
  washer:     'front-loading washing machine',
  stove:      'gas cooking range with hob',
  oven:       'built-in electric oven',
  hood:       'kitchen range hood above cooktop',
  coffee:     'espresso coffee machine on counter',
  ac:         'wall-mounted air conditioning unit',
  tv:         'large flat screen TV mounted on wall',
}

const FURN_EN: Record<string, string> = {
  sofa:         'sofa',
  bed:          'bed',
  dining_table: 'dining table',
  desk:         'work desk',
  wardrobe:     'wardrobe',
  tv_unit:      'TV unit',
  armchair:     'armchair',
  dresser:      'dresser',
  bookshelf:    'bookshelf',
  ottoman:      'ottoman',
  bar_table:    'bar table',
  kitchen_set:  'kitchen cabinet set',
  bathtub:      'bathtub',
  shower_cabin: 'shower cabin',
}

function hexToColorName(hex: string): string {
  if (!hex || hex.length < 7) return ''
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  const br = (r*299 + g*587 + b*114) / 1000
  const diff = Math.max(r,g,b) - Math.min(r,g,b)
  if (diff < 25) {
    if (br > 235) return 'pure white'
    if (br > 190) return 'light grey'
    if (br > 120) return 'medium grey'
    if (br > 50)  return 'dark charcoal'
    return 'black'
  }
  if (r > g && r > b) return g > 130 ? (br > 180 ? 'warm beige' : 'terracotta') : (br > 160 ? 'soft pink' : 'deep red')
  if (g > r && g > b) return br > 160 ? 'sage green' : 'forest green'
  if (b > r && b > g) return br > 160 ? 'sky blue' : 'navy blue'
  return ''
}

export function buildEditPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): string {
  const room  = ROOM_NAMES[roomKey] ?? 'interior'
  const style = STYLE_PROMPTS[styleKey] ?? 'modern contemporary style'
  const tokens: string[] = []

  // 1. Room + style
  tokens.push(room)
  tokens.push(style)

  // 2. Walls
  const wallColor = hexToColorName(details?.wallColorHex || '')
  if (details?.wallFinish?.length) {
    const f = details.wallFinish.map(k => WALL_FINISH_EN[k]).filter(Boolean)
    if (f.length) tokens.push(...f)
    if (wallColor) tokens.push(wallColor + ' wall color')
  } else if (wallColor) {
    tokens.push(wallColor + ' walls')
  }

  // 3. Floor
  const floorColor = hexToColorName(details?.floorColorHex || '')
  if (details?.floorMaterial) {
    const f = FLOOR_EN[details.floorMaterial]
    if (f) tokens.push(floorColor ? floorColor + ' ' + f : f)
  } else if (floorColor) {
    tokens.push(floorColor + ' floor')
  }

  // 4. Tile zones
  if (details?.tilezone?.length) {
    const t = details.tilezone.map(k => TILE_EN[k]).filter(Boolean)
    if (t.length) tokens.push(...t)
  }

  // 5. Furniture
  if (details?.furniture?.length) {
    const f = details.furniture.map(k => FURN_EN[k] || k).filter(Boolean)
    if (f.length) tokens.push('furniture: ' + f.join(', '))
  }

  // 6. Lighting
  if (details?.lighting?.length) {
    const l = details.lighting.map(k => LIGHT_EN[k]).filter(Boolean)
    if (l.length) tokens.push(...l)
  }

  // 7. Appliances
  if (details?.appliances?.length) {
    const a = details.appliances.map(k => APP_EN[k]).filter(Boolean)
    if (a.length) tokens.push(a.join(', '))
  }

  // 8. Size / notes
  if (details?.size)         tokens.push('room size ' + details.size.replace(/[^\x00-\x7F]/g,'').trim())
  if (details?.ceilingHeight) tokens.push('ceiling height ' + details.ceilingHeight.replace(/[^\x00-\x7F]/g,'').trim())
  if (details?.extraNotes)   tokens.push(details.extraNotes.replace(/[^\x00-\x7F]/g,'').trim())

  // 9. Quality
  tokens.push(
    'photorealistic', 'hyperrealistic', '8k resolution',
    'professional interior photography', 'sharp focus',
    'realistic materials and textures', 'perfect lighting'
  )

  return tokens.filter(Boolean).join(', ')
}

export const NEGATIVE_PROMPT =
  'cartoon, anime, sketch, painting, watercolor, blurry, low quality, distorted, deformed, watermark, text, logo, ugly, window removed, missing window, blocked window, unrealistic, plastic look, oversaturated'
