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

const WALL_FINISH_EN: Record<string, string> = {
  paint:       '{WC} smooth painted walls',
  wallpaper:   '{WC} decorative patterned wallpaper on walls',
  plaster:     '{WC} Venetian decorative plaster texture on walls',
  brick:       '{WC} exposed brick walls with clearly visible individual bricks and mortar joints',
  wood:        '{WC} horizontal wooden plank wall cladding with visible wood grain',
  porcelain:   '{WC} porcelain stoneware wall tiles',
  marble:      '{WC} polished marble wall panels with veining',
  gypsum:      '{WC} 3D decorative gypsum relief wall panels',
  liquidwalls: '{WC} liquid wallpaper textured wall coating',
  microcement: '{WC} seamless microcement wall finish',
  metal:       '{WC} brushed metal wall cladding panels',
  glass:       '{WC} glass wall panels',
  mosaic:      '{WC} small mosaic wall tiles',
  concrete:    '{WC} concrete decorative effect on walls',
  stone:       '{WC} natural stone wall cladding with visible texture',
  cork:        '{WC} natural cork tile wall covering',
}

// Human-readable short names for negative prompt building
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
  kitchen_backsplash: '{C} subway tile kitchen backsplash',
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

// ─── Hex → dual description (name + hex code for model accuracy) ─────────────
// Returns both a human-readable color name AND the raw hex value.
// Diffusion models (SDXL, Flux) understand hex codes directly and this
// gives much more precise color matching than names alone.

function hexToColorDescription(hex: string): string {
  if (!hex || hex.length < 7) return ''
  const name = hexToColorName(hex)
  // Return "color-name (hex #XXXXXX)" — model uses whichever signal is stronger
  return name ? `${name} (hex ${hex.toUpperCase()})` : `hex ${hex.toUpperCase()}`
}

function hexToColorName(hex: string): string {
  if (!hex || hex.length < 7) return ''
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  const br = (r*299 + g*587 + b*114) / 1000
  const max = Math.max(r,g,b), min = Math.min(r,g,b)
  const diff = max - min

  // Truly achromatic — no usable hue
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

  // HSL saturation — correct formula (not diff/max which breaks for pastels)
  const l = (max + min) / 2 / 255
  const s_hsl = diff / 255 / (1 - Math.abs(2 * l - 1))

  // Near-grey: hue exists but saturation is too low to name
  if (s_hsl < 0.10) {
    if (br > 220) return 'off-white'
    if (br > 160) return 'light grey'
    if (br > 80)  return 'medium grey'
    return 'dark grey'
  }

  // Warm beige: yellowish hue, low-medium saturation, high brightness — name as beige
  if (s_hsl < 0.50 && br > 210 && h >= 25 && h <= 55) return 'warm beige'

  // Dark tones: low brightness — saturation decides if we name the hue
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

  if (h < 15)  return light ? 'light salmon'      : 'terracotta'
  if (h < 30)  return light ? 'peach'             : 'burnt orange'
  if (h < 50)  return light ? 'golden yellow'     : 'amber'
  if (h < 65)  return light ? 'pale yellow'       : 'yellow-green'
  if (h < 80)  return light ? 'olive'             : 'dark olive'
  if (h < 90)  return light ? 'light yellow-green': 'yellow-green'
  if (h < 150) return light ? 'light green'       : 'forest green'
  if (h < 170) return light ? 'mint green'        : 'emerald green'
  if (h < 200) return light ? 'light cyan'        : 'teal'
  if (h < 220) return light ? 'light blue'        : 'sky blue'
  if (h < 250) return light ? 'cornflower blue'   : 'royal blue'
  if (h < 270) return light ? 'periwinkle'        : 'navy blue'
  if (h < 295) return light ? 'light lavender'    : 'deep purple'
  if (h < 330) return light ? 'light pink'        : 'plum'
  return light ? 'light rose' : 'crimson'
}

// ─── Conflict detector ────────────────────────────────────────────────────────

/**
 * Returns a list of human-readable conflict warnings for the given details.
 * Used by the UI to warn users before generating.
 */
export function detectConflicts(
  roomKey: string,
  details: Partial<RoomDetails>
): string[] {
  const warnings: string[] = []

  // Brick wall + pastel/light color — model will be confused
  if (details.wallFinish?.includes('brick') && details.wallColorHex) {
    const name = hexToColorName(details.wallColorHex)
    const lightColors = ['pure white','off-white','light grey','soft pink','peach','golden yellow','yellow','lime green','mint green','turquoise','sky blue','lavender','orchid pink','rose pink']
    if (lightColors.includes(name)) {
      warnings.push(`Кирпич + ${name}: модель может проигнорировать цвет, так как кирпич уже имеет свой цвет`)
    }
  }

  // Marble wall + color — marble has its own veining, color override rarely works
  if (details.wallFinish?.includes('marble') && details.wallColorHex) {
    const name = hexToColorName(details.wallColorHex)
    if (name && !['pure white','off-white','light grey'].includes(name)) {
      warnings.push(`Мрамор + ${name}: мраморные панели имеют собственный рисунок, цвет может не применяться точно`)
    }
  }

  // Backsplash selected but room is not kitchen
  const kitchenTileZones = ['kitchen_backsplash','kitchen_floor']
  const bathTileZones = ['bath_walls','bath_floor','shower','tub_surround']
  const toiletTileZones = ['toilet_walls','toilet_floor']

  if (details.tilezone?.some(z => kitchenTileZones.includes(z)) && roomKey !== 'kitchen') {
    warnings.push(`Кухонный фартук / пол кухни выбраны, но тип помещения — не кухня`)
  }
  if (details.tilezone?.some(z => bathTileZones.includes(z)) && roomKey !== 'bathroom') {
    warnings.push(`Зоны ванной выбраны, но тип помещения — не ванная`)
  }
  if (details.tilezone?.some(z => toiletTileZones.includes(z)) && roomKey !== 'toilet') {
    warnings.push(`Зоны туалета выбраны, но тип помещения — не туалет`)
  }

  // Multiple wall finishes — model may blend them unpredictably
  if ((details.wallFinish?.length ?? 0) > 2) {
    warnings.push(`Выбрано ${details.wallFinish!.length} видов отделки стен — модель может смешать их непредсказуемо, рекомендуется 1–2`)
  }

  return warnings
}

// ─── Main export ─────────────────────────────────────────────────────────────

/**
 * Builds a strictly zone-isolated prompt for interior image generation.
 * Returns { positive, negative } so the caller can pass both to the API.
 *
 * Key improvements:
 * - Colors passed as "name (hex #XXXXXX)" for maximum model accuracy
 * - Backsplash section consolidated from 3 blocks into 1 (reduces token bloat)
 * - Size/ceiling omitted from prompt (they don't affect img2img output)
 * - extraNotes placed right after header for higher attention weight
 */
export function buildEditPrompt(
  roomKey:  string,
  styleKey: string,
  details?: Partial<RoomDetails>
): { positive: string; negative: string } {

  const room      = ROOM_NAMES[roomKey] ?? 'interior'
  const isMyStyle = styleKey === 'my_style'

  // ── Preset styles ─────────────────────────────────────────────────────────
  if (!isMyStyle) {
    const sk = styleKey || 'minimalist'
    const positive = [
      room,
      STYLE_BASE[sk]         || STYLE_BASE.minimalist,
      STYLE_WALL_DEFAULT[sk] || '',
      STYLE_FLOOR_DEFAULT[sk]|| '',
      'keep all existing windows and doors in their exact original positions',
      'preserve all window and door openings exactly as in the original photo',
      'do not add or remove any windows or doors',
      'photorealistic', 'hyperrealistic', '8k resolution',
      'professional interior photography', 'sharp focus',
      'realistic materials and textures', 'perfect lighting',
    ].filter(Boolean).join(', ')

    return { positive, negative: NEGATIVE_PROMPT_BASE }
  }

  // ── my_style: fully structured, zone-isolated prompt ──────────────────────

  // Use dual description (name + hex) for accurate color rendering
  const wallColorDesc  = hexToColorDescription(details?.wallColorHex  || '')
  const floorColorDesc = hexToColorDescription(details?.floorColorHex || '')
  const tileColorDesc  = hexToColorDescription(details?.tileColorHex  || '')

  // Keep plain name for negative prompt (shorter tokens)
  const wallColorName  = hexToColorName(details?.wallColorHex  || '')
  const floorColorName = hexToColorName(details?.floorColorHex || '')
  const tileColorName  = hexToColorName(details?.tileColorHex  || '')

  // Resolve wall finish descriptions and short names for negative prompt
  const wallFinishDescs:  string[] = []
  const wallFinishShorts: string[] = []

  if (details?.wallFinish?.length) {
    for (const k of details.wallFinish) {
      const desc  = WALL_FINISH_EN[k]
      const short = WALL_FINISH_SHORT[k]
      if (desc) {
        wallFinishDescs.push(
          wallColorDesc
            ? desc.replace('{WC}', wallColorDesc)
            : desc.replace('{WC} ', '')
        )
      }
      if (short) wallFinishShorts.push(short)
    }
  }

  // Resolve tile zones — separate backsplash from other tiles
  const backsplashDescs: string[] = []
  const otherTileDescs:  string[] = []
  const tileColorWord = tileColorDesc || 'white'
  const tileColorShort = tileColorName || 'white'

  if (details?.tilezone?.length) {
    for (const k of details.tilezone) {
      const template = TILE_EN[k]
      if (!template) continue
      const desc = template.replace('{C}', tileColorWord)
      if (IS_BACKSPLASH[k]) backsplashDescs.push(desc)
      else otherTileDescs.push(desc)
    }
  }

  // Resolve furniture, lighting, appliances
  const furnitureList  = (details?.furniture  ?? []).map(k => FURN_EN[k]  || k).filter(Boolean)
  const lightingList   = (details?.lighting   ?? []).map(k => LIGHT_EN[k] || '').filter(Boolean)
  const appliancesList = (details?.appliances ?? []).map(k => APP_EN[k]   || '').filter(Boolean)

  // ── Assemble structured positive prompt ─────────────────────────────────

  const sections: string[] = []

  // [0] Header
  sections.push(`Professional interior design photography of a ${room}, custom style.`)

  // [0b] User notes — placed early for high attention weight
  // (extraNotes are most important to honor, so they come before zone instructions)
  if (details?.extraNotes) {
    sections.push(
      `DESIGN INTENT: ${details.extraNotes.replace(/[^\x00-\x7F]/g,'').trim()}.`
    )
  }

  // [0c] STRUCTURAL PRESERVATION
  sections.push(
    `FIXED STRUCTURE: preserve ALL existing windows and doors exactly as in the original photo — ` +
    `same position, size and shape. Do not add, remove, block or move any windows or doors.`
  )

  // [1] WALLS ZONE
  if (wallFinishDescs.length) {
    sections.push(
      `WALLS: ${wallFinishDescs.join(' and ')}, ` +
      `on vertical wall surfaces only. Not on ceiling, not on floor, not on backsplash.`
    )
  } else if (wallColorDesc) {
    sections.push(
      `WALLS: all vertical wall surfaces painted ${wallColorDesc}. ` +
      `Ceiling is NOT this color.`
    )
  } else {
    sections.push(`WALLS: clean neutral walls.`)
  }

  // [2] CEILING ZONE
  sections.push(`CEILING: smooth plain white painted ceiling, no wall material on ceiling.`)

  // [3] FLOOR ZONE
  if (details?.floorMaterial) {
    const floorDesc = FLOOR_EN[details.floorMaterial]
    if (floorDesc) {
      const full = floorColorDesc ? `${floorColorDesc} ${floorDesc}` : floorDesc
      sections.push(`FLOOR: ${full}. Covers only the horizontal floor surface.`)
    }
  } else if (floorColorDesc) {
    sections.push(`FLOOR: floor surface in ${floorColorDesc} color.`)
  }

  // [4] BACKSPLASH ZONE — consolidated single instruction (was 3 redundant blocks)
  if (backsplashDescs.length) {
    sections.push(
      `KITCHEN BACKSPLASH: the strip between countertop and upper cabinets is covered with ` +
      `${tileColorWord} subway tiles. This zone is mandatory and overrides the wall finish. ` +
      `Backsplash tiles stay ONLY in this strip — not on main walls, not on ceiling, not on floor.`
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
    `ZONE RULE: wall finish on walls only, floor material on floor only, ceiling stays white. ` +
    `Windows and doors unchanged from original photo.`
  )

  // [10] Quality tail
  sections.push(
    `High-end architectural rendering, realistic textures, sharp details, ` +
    `8k resolution, professional studio lighting, photorealistic, hyperrealistic.`
  )

  const positive = sections.join(' ')

  // ── Assemble dynamic negative prompt ────────────────────────────────────

  const negParts: string[] = [...NEGATIVE_PROMPT_BASE_PARTS]

  // Prevent wall material from bleeding into other zones
  for (const short of wallFinishShorts) {
    negParts.push(
      `${short} on ceiling`,
      `${short} on floor`,
      `${short} on backsplash`,
    )
  }

  // Prevent wall color from appearing on wrong surfaces
  if (wallColorName) {
    negParts.push(
      `${wallColorName} ceiling`,
      `${wallColorName} floor`,
    )
  }

  // Backsplash negative tokens (consolidated)
  if (backsplashDescs.length) {
    for (const short of wallFinishShorts) {
      negParts.push(`${short} in backsplash area`)
    }
    negParts.push(
      `no backsplash`,
      `missing backsplash`,
      `backsplash same as wall`,
    )
    if (tileColorShort) {
      negParts.push(
        `${tileColorShort} on main walls`,
        `${tileColorShort} on ceiling`,
      )
    }
  }

  // Prevent floor material from appearing on walls
  if (details?.floorMaterial) {
    const floorShort = details.floorMaterial.replace(/_/g, ' ')
    negParts.push(
      `${floorShort} on walls`,
      `${floorShort} on ceiling`,
    )
  }

  const negative = negParts.join(', ')

  return { positive, negative }
}

// ─── Static negative prompt parts ────────────────────────────────────────────

const NEGATIVE_PROMPT_BASE_PARTS: string[] = [
  'cartoon', 'anime', 'sketch', 'painting', 'watercolor',
  'blurry', 'low quality', 'distorted', 'deformed',
  'watermark', 'text', 'logo', 'ugly',
  'window removed', 'missing window', 'blocked window', 'covered window',
  'bricked up window', 'wall where window was', 'window replaced by wall',
  'door removed', 'missing door', 'blocked door', 'door replaced by wall',
  'wall where door was', 'door opening closed',
  'changed window position', 'moved window', 'changed door position',
  'new window', 'extra window', 'added window', 'added door',
  'structural changes', 'architectural changes', 'layout change',
  'unrealistic', 'plastic look', 'oversaturated',
  'mixed materials', 'tiling errors', 'inconsistent surfaces',
  'material bleeding', 'wrong zone materials',
]

export const NEGATIVE_PROMPT = NEGATIVE_PROMPT_BASE_PARTS.join(', ')

const NEGATIVE_PROMPT_BASE = NEGATIVE_PROMPT
