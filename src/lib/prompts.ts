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

export const STYLE_BASE: Record<string, string> = {
  my_style:      'custom interior design style, tailored to user specifications',
  minimalist:    'minimalist style, simple clean-line furniture, neutral palette, uncluttered, calm atmosphere',
  loft:          'industrial loft style, black metal frames, Edison bulb pendant lights, raw industrial furniture',
  scandinavian:  'Scandinavian hygge style, light birch furniture, wool textiles, warm cozy atmosphere',
  luxury:        'luxury interior, gold brass hardware, crystal chandelier, velvet upholstery, opulent decor',
  japandi:       'Japandi wabi-sabi style, low furniture, paper lantern light, handcrafted ceramics, zen atmosphere',
  biophilic:     'biophilic design, lush indoor plants, rattan furniture, natural wood accents, organic forms',
  artdeco:       'Art Deco style, brass fixtures, velvet armchairs, geometric patterns, 1930s glamour',
  mediterranean: 'Mediterranean style, arched elements, warm sunlight, rustic wooden furniture, ceramic accents',
  cyberpunk:     'cyberpunk style, holographic panels, glossy black surfaces, futuristic furniture, neon accents',
}

export const STYLE_WALL_DEFAULT: Record<string, string> = {
  my_style:      '',
  minimalist:    'plain white walls',
  loft:          'exposed red brick walls',
  scandinavian:  'white painted walls',
  luxury:        'white marble wall panels',
  japandi:       'warm natural oak wall panels',
  biophilic:     'living moss wall accent',
  artdeco:       'geometric gold wallpaper',
  mediterranean: 'whitewashed plaster walls',
  cyberpunk:     'dark charcoal walls',
}

export const STYLE_FLOOR_DEFAULT: Record<string, string> = {
  my_style:      '',
  minimalist:    'light wood floor',
  loft:          'polished concrete floor',
  scandinavian:  'light pine floor',
  luxury:        'white marble floor',
  japandi:       'natural oak floor',
  biophilic:     'natural stone floor',
  artdeco:       'chevron marble floor',
  mediterranean: 'terracotta tile floor',
  cyberpunk:     'glossy black epoxy floor',
}

export const STYLE_PROMPTS: Record<string, string> = Object.fromEntries(
  Object.keys(STYLE_BASE).map(k => [k,
    STYLE_BASE[k] + ', ' + STYLE_WALL_DEFAULT[k] + ', ' + STYLE_FLOOR_DEFAULT[k]
  ])
)

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
  tileColorHex: string
  furniture: string[]
  lighting: string[]
  appliances: string[]
  extraNotes: string
}

// ─── English lookup tables ────────────────────────────────────────────────────

// FIX: color placeholder moved AFTER material name.
// Diffusion models tokenize left-to-right — material name must come first
// so the model knows WHAT to render before it reads the color.
// Old: '{WC} decorative wallpaper' → model sees unknown token then 'wallpaper' → uses wallpaper default color
// New: 'decorative wallpaper, color: {WC}' → model renders wallpaper, then applies specified color
const WALL_FINISH_EN: Record<string, string> = {
  paint:       'smooth painted walls, wall color: {WC}',
  wallpaper:   'decorative wallpaper on walls, wallpaper color: {WC}',
  plaster:     'Venetian decorative plaster on walls, plaster color: {WC}',
  brick:       'exposed brick walls, brick color: {WC}',
  wood:        'horizontal wooden plank wall cladding, wood color: {WC}',
  porcelain:   'porcelain stoneware wall tiles, tile color: {WC}',
  marble:      'polished marble wall panels with veining, marble color: {WC}',
  gypsum:      '3D decorative gypsum relief wall panels, panel color: {WC}',
  liquidwalls: 'liquid wallpaper textured wall coating, color: {WC}',
  microcement: 'seamless microcement wall finish, color: {WC}',
  metal:       'brushed metal wall cladding panels, metal color: {WC}',
  glass:       'glass wall panels, glass tint: {WC}',
  mosaic:      'small mosaic wall tiles, mosaic color: {WC}',
  concrete:    'concrete decorative wall finish, concrete tone: {WC}',
  stone:       'natural stone wall cladding, stone color: {WC}',
  cork:        'natural cork tile wall covering, cork color: {WC}',
}

// Used when no color selected — no placeholder at all
const WALL_FINISH_EN_NOCOLOR: Record<string, string> = {
  paint:       'smooth painted walls',
  wallpaper:   'decorative wallpaper on walls',
  plaster:     'Venetian decorative plaster on walls',
  brick:       'exposed brick walls with clearly visible bricks and mortar joints',
  wood:        'horizontal wooden plank wall cladding with visible wood grain',
  porcelain:   'porcelain stoneware wall tiles on walls',
  marble:      'polished marble wall panels with veining',
  gypsum:      '3D decorative gypsum relief wall panels',
  liquidwalls: 'liquid wallpaper textured wall coating',
  microcement: 'seamless microcement wall finish',
  metal:       'brushed metal wall cladding panels',
  glass:       'glass wall panels',
  mosaic:      'small mosaic wall tiles on walls',
  concrete:    'concrete decorative wall finish',
  stone:       'natural stone wall cladding with visible texture',
  cork:        'natural cork tile wall covering',
}

const WALL_FINISH_SHORT: Record<string, string> = {
  paint:       'painted wall texture',
  wallpaper:   'wallpaper',
  plaster:     'plaster texture',
  brick:       'brick texture',
  wood:        'wood wall cladding',
  porcelain:   'porcelain wall tiles',
  marble:      'marble wall panels',
  gypsum:      'gypsum relief panels',
  liquidwalls: 'liquid wallpaper',
  microcement: 'microcement texture',
  metal:       'metal wall cladding',
  glass:       'glass wall panels',
  mosaic:      'mosaic wall tiles',
  concrete:    'concrete wall texture',
  stone:       'stone wall cladding',
  cork:        'cork wall covering',
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
  kitchen_backsplash: '{C} ceramic subway tile backsplash',
  kitchen_floor:      '{C} porcelain tile kitchen floor',
  bath_walls:         '{C} ceramic tiles covering all bathroom walls from floor to ceiling',
  bath_floor:         '{C} non-slip ceramic tiles on bathroom floor',
  toilet_walls:       '{C} ceramic wall tiles in the toilet room',
  toilet_floor:       '{C} ceramic tile toilet room floor',
  shower:             '{C} mosaic tiles in the shower enclosure walls and floor',
  tub_surround:       '{C} ceramic tile panels around the bathtub',
}

const IS_BACKSPLASH: Record<string, boolean> = {
  kitchen_backsplash: true,
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

// ─── Hex → color name ────────────────────────────────────────────────────────

// FIX: replaced s = diff/max (HSV saturation) with correct HSL saturation formula.
// HSV formula severely underestimates saturation of pastel colors causing them
// to fall into the grey zone. Examples with old formula:
//   green #81C784 → 'light grey'  (should be 'light green')
//   pink  #F48FB1 → 'off-white'   (should be 'light pink')
//   mint  #80CBC4 → 'light grey'  (should be 'mint green')
function hexToColorName(hex: string): string {
  if (!hex || hex.length < 7) return ''
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  const br = (r*299 + g*587 + b*114) / 1000
  const max = Math.max(r,g,b), min = Math.min(r,g,b)
  const diff = max - min

  // Truly achromatic
  if (diff < 15) {
    if (br > 240) return 'pure white'
    if (br > 200) return 'off-white'
    if (br > 160) return 'light grey'
    if (br > 100) return 'medium grey'
    if (br > 50)  return 'dark grey'
    return 'black'
  }

  let h = 0
  if (max === r)      h = 60 * (((g - b) / diff) % 6)
  else if (max === g) h = 60 * ((b - r) / diff + 2)
  else                h = 60 * ((r - g) / diff + 4)
  if (h < 0) h += 360

  // Correct HSL saturation (not HSV)
  const l = (max + min) / 2 / 255
  const s_hsl = diff / 255 / (1 - Math.abs(2 * l - 1))

  // Near-grey: hue present but saturation too low
  if (s_hsl < 0.10) {
    if (br > 220) return 'off-white'
    if (br > 160) return 'light grey'
    if (br > 80)  return 'medium grey'
    return 'dark grey'
  }

  // Warm beige: low-sat warm tone at high brightness
  if (s_hsl < 0.50 && br > 210 && h >= 25 && h <= 55) return 'warm beige'

  // Dark tones: low brightness
  if (br < 85) {
    if (s_hsl < 0.25) return br < 50 ? 'black' : 'charcoal grey'
    if (h < 30 || h >= 330) return 'dark brown'
    if (h < 70)             return 'dark olive'
    if (h < 170)            return 'dark green'
    if (h < 265)            return 'dark blue'
    if (h < 295)            return 'dark indigo'
    return 'dark purple'
  }

  const light = br > 160

  if (h < 15)  return light ? 'light salmon'       : 'terracotta'
  if (h < 30)  return light ? 'peach'              : 'burnt orange'
  if (h < 50)  return light ? 'golden yellow'      : 'amber'
  if (h < 65)  return light ? 'pale yellow'        : 'yellow-green'
  if (h < 80)  return light ? 'olive'              : 'dark olive'
  if (h < 90)  return light ? 'light yellow-green' : 'yellow-green'
  if (h < 150) return light ? 'light green'        : 'forest green'
  if (h < 170) return light ? 'mint green'         : 'emerald green'
  if (h < 200) return light ? 'light cyan'         : 'teal'
  if (h < 220) return light ? 'light blue'         : 'sky blue'
  if (h < 250) return light ? 'cornflower blue'    : 'royal blue'
  if (h < 270) return light ? 'periwinkle'         : 'navy blue'
  if (h < 295) return light ? 'light lavender'     : 'deep purple'
  if (h < 330) return light ? 'light pink'         : 'plum'
  return light ? 'light rose' : 'crimson'
}

// ─── Conflict detector ────────────────────────────────────────────────────────

export function detectConflicts(
  roomKey: string,
  details: Partial<RoomDetails>
): string[] {
  const warnings: string[] = []

  if (details.wallFinish?.includes('brick') && details.wallColorHex) {
    const name = hexToColorName(details.wallColorHex)
    const lightColors = ['pure white','off-white','light grey','pale yellow','light green','light blue','light pink','light salmon','mint green','light cyan','cornflower blue','periwinkle','light lavender','light rose','warm beige']
    if (lightColors.includes(name)) {
      warnings.push(`Кирпич + светлый цвет: модель может проигнорировать цвет, кирпич имеет свой тон`)
    }
  }

  if (details.wallFinish?.includes('marble') && details.wallColorHex) {
    const name = hexToColorName(details.wallColorHex)
    if (name && !['pure white','off-white','light grey','warm beige'].includes(name)) {
      warnings.push(`Мрамор + цвет: мраморные панели имеют собственный рисунок, цвет может не применяться точно`)
    }
  }

  const kitchenTileZones = ['kitchen_backsplash','kitchen_floor']
  const bathTileZones    = ['bath_walls','bath_floor','shower','tub_surround']
  const toiletTileZones  = ['toilet_walls','toilet_floor']

  if (details.tilezone?.some(z => kitchenTileZones.includes(z)) && roomKey !== 'kitchen')
    warnings.push(`Кухонные зоны плитки выбраны, но тип помещения — не кухня`)
  if (details.tilezone?.some(z => bathTileZones.includes(z)) && roomKey !== 'bathroom')
    warnings.push(`Зоны ванной выбраны, но тип помещения — не ванная`)
  if (details.tilezone?.some(z => toiletTileZones.includes(z)) && roomKey !== 'toilet')
    warnings.push(`Зоны туалета выбраны, но тип помещения — не туалет`)

  return warnings
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function buildEditPrompt(
  roomKey:  string,
  styleKey: string,
  details?: Partial<RoomDetails>
): { positive: string; negative: string } {

  const room      = ROOM_NAMES[roomKey] ?? 'interior'
  const isMyStyle = styleKey === 'my_style'

  if (!isMyStyle) {
    const sk = styleKey || 'minimalist'
    const positive = [
      room,
      STYLE_BASE[sk]          || STYLE_BASE.minimalist,
      STYLE_WALL_DEFAULT[sk]  || '',
      STYLE_FLOOR_DEFAULT[sk] || '',
      'ALL windows and doors MUST remain in their EXACT original positions from the source photo',
      'window openings are FIXED — same size, same shape, same location on the wall',
      'door openings are FIXED — same size, same shape, same location',
      'do NOT remove any window', 'do NOT add any window', 'do NOT resize any window',
      'do NOT remove any door', 'do NOT block any opening',
      'the architectural structure of the room is UNCHANGED',
      'photorealistic', 'hyperrealistic', '8k resolution',
      'professional interior photography', 'magazine editorial quality', 'luxury lifestyle photography',
      'soft natural lighting', 'cinematic lighting', 'sharp focus',
      'ultra-detailed', 'high definition textures', 'HDR lighting', 'real camera lens',
      'realistic materials and textures', 'perfect lighting', 'subtle shadows', 'realistic reflections',
      'vibrant color grading', 'crisp studio lighting', 'high contrast', 'perfect straight geometry', 'sharp volumetric lighting', 'professional interior photography', 'award-winning architectural design', 'clean crisp focus',
    ].filter(Boolean).join(', ')
    return { positive, negative: NEGATIVE_PROMPT_BASE }
  }

  // ── my_style ──────────────────────────────────────────────────────────────

  const wallColorName  = hexToColorName(details?.wallColorHex  || '')
  const floorColorName = hexToColorName(details?.floorColorHex || '')
  const tileColorName  = hexToColorName(details?.tileColorHex  || '')

  // Hex values — passed separately as additional color signal
  const wallHex  = details?.wallColorHex  ? details.wallColorHex.toUpperCase()  : ''
  const floorHex = details?.floorColorHex ? details.floorColorHex.toUpperCase() : ''
  const tileHex  = details?.tileColorHex  ? details.tileColorHex.toUpperCase()  : ''

  // Combined color description: "light green, exact hex #81C784"
  // Comma-separated — no parentheses which confuse the tokenizer
  const wallColorDesc  = wallColorName  && wallHex  ? `${wallColorName}, exact hex ${wallHex}`  : wallColorName  || ''
  const floorColorDesc = floorColorName && floorHex ? `${floorColorName}, exact hex ${floorHex}` : floorColorName || ''
  const tileColorDesc  = tileColorName  && tileHex  ? `${tileColorName}, exact hex ${tileHex}`  : tileColorName  || ''

  // Wall finish descriptions — color comes AFTER material name
  const wallFinishDescs:  string[] = []
  const wallFinishShorts: string[] = []

  if (details?.wallFinish?.length) {
    for (const k of details.wallFinish) {
      const short = WALL_FINISH_SHORT[k]
      let desc: string
      if (wallColorDesc) {
        const template = WALL_FINISH_EN[k]
        desc = template ? template.replace('{WC}', wallColorDesc) : ''
      } else {
        desc = WALL_FINISH_EN_NOCOLOR[k] || ''
      }
      if (desc) wallFinishDescs.push(desc)
      if (short) wallFinishShorts.push(short)
    }
  }

  // Tile zones
  const backsplashZones: string[] = []
  const otherTileDescs:  string[] = []
  // Use short color name only for tile templates — cleaner token weight
  const tileColorForTile = tileColorName || 'white'

  if (details?.tilezone?.length) {
    for (const k of details.tilezone) {
      const template = TILE_EN[k]
      if (!template) continue
      const desc = template.replace('{C}', tileColorForTile)
      if (IS_BACKSPLASH[k]) backsplashZones.push(desc)
      else otherTileDescs.push(desc)
    }
  }

  const furnitureList  = (details?.furniture  ?? []).map(k => FURN_EN[k]  || k).filter(Boolean)
  const lightingList   = (details?.lighting   ?? []).map(k => LIGHT_EN[k] || '').filter(Boolean)
  const appliancesList = (details?.appliances ?? []).map(k => APP_EN[k]   || '').filter(Boolean)

  // ── Assemble prompt ───────────────────────────────────────────────────────

  const sections: string[] = []

  // [0] Header
  sections.push(`Professional interior design photography of a ${room}, custom style.`)

  // [0b] Structural preservation — repeated and reinforced
  sections.push(
    `CRITICAL STRUCTURAL RULE: ALL windows and doors from the original photo MUST be preserved EXACTLY. ` +
    `Every window opening stays in the same position, same size, same shape on the wall. ` +
    `Every door opening stays in the same position, same size, same shape. ` +
    `Do NOT remove any window. Do NOT add any window. Do NOT resize or relocate any window. ` +
    `Do NOT remove any door. Do NOT block any door or window opening. ` +
    `The room geometry and all architectural openings are FIXED and absolutely unchanged.`
  )

  // [1] WALLS
  if (wallFinishDescs.length) {
    sections.push(
      `WALLS: ${wallFinishDescs.join(' and ')}, ` +
      `applied to vertical wall surfaces only. Use the exact selected wall color. Not on ceiling. Not on floor. Not on backsplash.`
    )
  } else if (wallColorDesc) {
    sections.push(
      `WALLS: all vertical wall surfaces painted ${wallColorDesc}. Use the exact selected wall color. Ceiling is NOT this color.`
    )
  } else {
    sections.push(`WALLS: clean neutral walls.`)
  }

  // [2] CEILING
  sections.push(
    `CEILING: smooth plain white painted ceiling. ` +
    `No wall material, no wall color, no texture on the ceiling.`
  )

  // [3] FLOOR
  if (details?.floorMaterial) {
    const floorDesc = FLOOR_EN[details.floorMaterial]
    if (floorDesc) {
      const full = floorColorDesc ? `${floorDesc}, floor color: ${floorColorDesc}` : floorDesc
      sections.push(`FLOOR: ${full}. Floor surface only, not on walls. Use the exact selected floor color.`)
    }
  } else if (floorColorDesc) {
    sections.push(`FLOOR: floor surface in ${floorColorDesc}. Use the exact selected floor color.`)
  }

  // [4] BACKSPLASH — FIX: explicit color repeated 3x, hex included, "visible" enforced
  if (backsplashZones.length) {
    const bsName = tileColorForTile
    const bsHex  = tileHex ? `, hex ${tileHex}` : ''

    sections.push(
      `KITCHEN BACKSPLASH ZONE: there MUST be a clearly visible backsplash tile strip ` +
      `between the kitchen countertop and upper cabinets. ` +
      `This strip is covered with ${bsName}${bsHex} ceramic subway tiles. ` +
      `The backsplash tile color is ${bsName}${bsHex}. ` +
      `The backsplash is ${bsName} and is clearly visible and distinct from the wall color. ` +
      `The wall finish does NOT continue into the backsplash zone — tiles override the wall here. ` +
      `Backsplash tiles exist ONLY in this strip between countertop and cabinets.`
    )
  }

  // [5] OTHER TILE ZONES
  if (otherTileDescs.length) {
    sections.push(
      `TILE ZONES: ${otherTileDescs.join('; ')}. Each zone confined to its surface.`
    )
  }

  // [6] FURNITURE
  if (furnitureList.length) {
    sections.push(`FURNITURE: ${furnitureList.join(', ')}.`)
  }

  // [7] LIGHTING
  if (lightingList.length) {
    sections.push(`LIGHTING: ${lightingList.join(', ')}.`)
  }

  // [8] APPLIANCES
  if (appliancesList.length) {
    sections.push(`APPLIANCES: ${appliancesList.join(', ')}.`)
  }

  // [9] ZONE ISOLATION RULE
  sections.push(
    `ZONE RULE: wall finish on walls only. Ceiling plain white. Floor material on floor only. ` +
    `Backsplash tiles only in backsplash strip. ` +
    `Use the selected palette colors exactly; do not substitute alternate wall or floor colors. ` +
    `REMINDER: all windows and doors are UNCHANGED from original photo — same position, same size.`
  )

  // [10] Notes
  if (details?.extraNotes) sections.push(details.extraNotes.replace(/[^\x00-\x7F]/g,'').trim())

  // [11] Quality + final window reminder
  sections.push(
    `High-end architectural rendering, realistic textures, sharp details, ` +
    `8k resolution, professional studio lighting, magazine editorial quality, ` +
    `luxury lifestyle photography, soft natural lighting, cinematic lighting, ` +
    `photorealistic, hyperrealistic, ultra-detailed, high definition textures, ` +
    `HDR lighting, real camera lens, subtle shadows, realistic reflections, ` +
    `vibrant color grading, crisp studio lighting, high contrast, perfect straight geometry, ` +
    `sharp volumetric lighting, professional interior photography, award-winning architectural design, clean crisp focus. ` +
    `All windows visible and in original positions.`
  )

  const positive = sections.join(' ')

  // ── Negative prompt ───────────────────────────────────────────────────────

  const negParts: string[] = [...NEGATIVE_PROMPT_BASE_PARTS]

  for (const short of wallFinishShorts) {
    negParts.push(`${short} on ceiling`, `${short} on floor`, `${short} on backsplash`)
  }

  if (wallColorName) {
    negParts.push(`${wallColorName} ceiling`, `${wallColorName} floor`)
  }

  if (backsplashZones.length) {
    for (const short of wallFinishShorts) {
      negParts.push(`${short} in backsplash area`, `${short} between countertop and cabinets`)
    }
    negParts.push(
      `no backsplash`,
      `missing backsplash`,
      `invisible backsplash`,
      `backsplash same color as wall`,
      `wall covering entire kitchen wall with no backsplash`,
    )
    if (wallColorName) {
      negParts.push(`${wallColorName} backsplash`, `${wallColorName} tiles`)
    }
    if (tileColorName) {
      negParts.push(`${tileColorName} walls`, `${tileColorName} ceiling`, `${tileColorName} floor`)
    }
  }

  if (details?.floorMaterial) {
    const floorShort = details.floorMaterial.replace(/_/g, ' ')
    negParts.push(`${floorShort} on walls`, `${floorShort} on ceiling`)
  }

  const negative = negParts.join(', ')

  return { positive, negative }
}

// ─── Static negative prompt parts ────────────────────────────────────────────

const NEGATIVE_PROMPT_BASE_PARTS: string[] = [
  'cartoon', 'anime', 'sketch', 'painting', 'watercolor',
  'blurry', 'soft focus', 'out of focus', 'low quality', 'low resolution',
  'grainy', 'noisy', 'distorted', 'deformed',
  'watermark', 'text', 'logo', 'ugly', 'duplicated objects', 'cluttered shelves',
  'fused objects', 'deformed light fixtures', 'cropped furniture', 'cut off objects', 'chairs out of frame',
  // Color accuracy
  'wrong wall color', 'wrong floor color', 'incorrect wall color', 'incorrect floor color',
  'wrong paint color', 'wrong tile color', 'color mismatch',
  // Window preservation — comprehensive
  'window removed', 'missing window', 'no window', 'window gone',
  'blocked window', 'covered window', 'bricked up window',
  'wall where window was', 'window replaced by wall',
  'window moved', 'window resized', 'window relocated',
  'smaller window', 'larger window', 'extra window', 'added window',
  'different window position', 'window in wrong place',
  // Door preservation
  'door removed', 'missing door', 'no door', 'door gone',
  'blocked door', 'door replaced by wall', 'wall where door was',
  'door moved', 'door resized',
  // General structural
  'structural changes', 'architectural changes', 'room layout changed',
  'walls moved', 'room restructured', 'different room shape',
  // Quality
  'unrealistic', 'plastic look', 'oversaturated',
  'mixed materials', 'tiling errors', 'inconsistent surfaces',
  'material bleeding', 'wrong zone materials',
  'deformed structures', 'crooked lines', 'extra legs', 'warped furniture', 'ugly',
  'low-contrast', 'dull colors', 'dark moody shadows', 'blurry details', 'poor reflections',
]

export const NEGATIVE_PROMPT = NEGATIVE_PROMPT_BASE_PARTS.join(', ')
const NEGATIVE_PROMPT_BASE = NEGATIVE_PROMPT
