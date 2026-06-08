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

// Tile zone EN templates — {C} = color, {ZONE} = zone restriction label
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

// Is this tile zone a backsplash (needs stricter spatial isolation)?
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

function hexToColorName(hex: string): string {
  if (!hex || hex.length < 7) return ''
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  const br = (r*299 + g*587 + b*114) / 1000
  const max = Math.max(r,g,b), min = Math.min(r,g,b)
  const diff = max - min

  if (diff < 20) {
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
  const s = diff / max

  if (s < 0.25) {
    if (br > 200) return 'off-white'
    if (br > 120) return 'light grey'
    return 'dark grey'
  }

  if (h < 10)  return br > 160 ? 'soft pink'       : 'deep red'
  if (h < 40)  return br > 160 ? 'peach'           : 'terracotta'
  if (h < 50)  return br > 160 ? 'golden yellow'   : 'amber'
  if (h < 70)  return br > 180 ? 'yellow'          : 'olive'
  if (h < 90)  return br > 160 ? 'lime green'      : 'olive green'
  if (h < 150) return br > 160 ? 'sage green'      : 'forest green'
  if (h < 170) return br > 160 ? 'mint green'      : 'emerald green'
  if (h < 200) return br > 160 ? 'turquoise'       : 'teal'
  if (h < 230) return br > 160 ? 'sky blue'        : 'royal blue'
  if (h < 260) return br > 140 ? 'cornflower blue' : 'navy blue'
  if (h < 290) return br > 140 ? 'lavender'        : 'deep purple'
  if (h < 330) return br > 140 ? 'orchid pink'     : 'plum'
  return br > 160 ? 'rose pink' : 'crimson red'
}

// ─── Main export ─────────────────────────────────────────────────────────────

/**
 * Builds a strictly zone-isolated prompt for interior image generation.
 * Returns { positive, negative } so the caller can pass both to the API.
 *
 * Usage:
 *   const { positive, negative } = buildEditPrompt(roomKey, styleKey, details)
 *   // For backward-compat callers that expect a plain string:
 *   const prompt = buildEditPrompt(roomKey, styleKey, details) as unknown as string
 */
export function buildEditPrompt(
  roomKey:  string,
  styleKey: string,
  details?: Partial<RoomDetails>
): { positive: string; negative: string } {

  const room      = ROOM_NAMES[roomKey] ?? 'interior'
  const isMyStyle = styleKey === 'my_style'

  // ── Preset styles: unchanged behaviour, wrapped in new return shape ────────
  if (!isMyStyle) {
    const sk = styleKey || 'minimalist'
    const positive = [
      room,
      STYLE_BASE[sk]         || STYLE_BASE.minimalist,
      STYLE_WALL_DEFAULT[sk] || '',
      STYLE_FLOOR_DEFAULT[sk]|| '',
      'photorealistic', 'hyperrealistic', '8k resolution',
      'professional interior photography', 'sharp focus',
      'realistic materials and textures', 'perfect lighting',
    ].filter(Boolean).join(', ')

    return { positive, negative: NEGATIVE_PROMPT_BASE }
  }

  // ── my_style: fully structured, zone-isolated prompt ──────────────────────

  const wallColor  = hexToColorName(details?.wallColorHex  || '')
  const floorColor = hexToColorName(details?.floorColorHex || '')
  const tileColor  = hexToColorName(details?.tileColorHex  || '')

  // Resolve wall finish descriptions and short names for negative prompt
  const wallFinishDescs:  string[] = []
  const wallFinishShorts: string[] = []

  if (details?.wallFinish?.length) {
    for (const k of details.wallFinish) {
      const desc  = WALL_FINISH_EN[k]
      const short = WALL_FINISH_SHORT[k]
      if (desc) {
        wallFinishDescs.push(
          wallColor
            ? desc.replace('{WC}', wallColor)
            : desc.replace('{WC} ', '')
        )
      }
      if (short) wallFinishShorts.push(short)
    }
  }

  // Resolve tile zones — separate backsplash zones from other tile zones
  const backsplashDescs: string[] = []
  const otherTileDescs:  string[] = []
  const tileColorWord = tileColor || 'white'

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
  sections.push(
    `Professional interior design photography of a ${room}, custom style.`
  )

  // [1] WALLS ZONE
  if (wallFinishDescs.length) {
    sections.push(
      `WALLS ZONE: ${wallFinishDescs.join(' and ')}, ` +
      `applied ONLY to vertical wall surfaces. ` +
      `Do NOT apply this wall material to the ceiling. ` +
      `Do NOT apply this wall material to the floor. ` +
      `Do NOT apply this wall material to the backsplash area.`
    )
  } else if (wallColor) {
    sections.push(
      `WALLS ZONE: all vertical wall surfaces painted ${wallColor}. ` +
      `No other material or texture on the walls. ` +
      `Ceiling is NOT ${wallColor}.`
    )
  } else {
    sections.push(`WALLS ZONE: clean neutral walls.`)
  }

  // [2] CEILING ZONE — always explicit to prevent contamination
  sections.push(
    `CEILING ZONE: smooth plain white painted ceiling. ` +
    `Absolutely NO wall material, NO wall texture, NO wall color on the ceiling. ` +
    `Ceiling must look completely different from the walls.`
  )

  // [3] FLOOR ZONE
  if (details?.floorMaterial) {
    const floorDesc = FLOOR_EN[details.floorMaterial]
    if (floorDesc) {
      const full = floorColor ? `${floorColor} ${floorDesc}` : floorDesc
      sections.push(
        `FLOOR ZONE: ${full}. ` +
        `This material covers ONLY the horizontal floor surface, not the walls.`
      )
    }
  } else if (floorColor) {
    sections.push(
      `FLOOR ZONE: floor in ${floorColor} color. ` +
      `Floor surface only — not applied to walls or ceiling.`
    )
  }

  // [4] BACKSPLASH ZONE (kitchen only, highly localized)
  // Strategy: repeat the backsplash instruction THREE times in different phrasings.
  // Diffusion models are token-frequency-sensitive — repetition raises attention weight.
  // We also add an explicit "override" guard so the wall finish doesn't bleed in.
  if (backsplashDescs.length) {
    const bsColor = tileColorWord

    // 4a. Primary instruction — spatial anchor
    sections.push(
      `KITCHEN BACKSPLASH ZONE: the area between the kitchen countertop and upper cabinets ` +
      `is covered with ${bsColor} subway tiles. ` +
      `This is a mandatory design element. The backsplash MUST be visible and rendered as ${bsColor} tiles. ` +
      `The wall finish (${wallFinishShorts.join(', ') || 'wall material'}) does NOT appear in the backsplash zone — ` +
      `the backsplash overrides the wall in this area.`
    )

    // 4b. Reinforcement — color emphasis
    sections.push(
      `BACKSPLASH COLOR OVERRIDE: the kitchen backsplash strip is strictly ${bsColor}. ` +
      `Color of backsplash tiles: ${bsColor}. ` +
      `The backsplash is clearly ${bsColor}, not white, not grey, not the same as the wall. ` +
      `It creates a strong visual contrast against the surrounding wall finish.`
    )

    // 4c. Spatial isolation — prevent tile spread
    sections.push(
      `BACKSPLASH BOUNDARIES: ${bsColor} tiles exist ONLY in the backsplash strip. ` +
      `Do NOT spread ${bsColor} tiles onto the main walls beyond the backsplash zone. ` +
      `Do NOT extend ${bsColor} tiles to the ceiling. ` +
      `Do NOT place ${bsColor} tiles on the floor. ` +
      `The backsplash is a separate, isolated surface element.`
    )
  }

  // [5] OTHER TILE ZONES
  if (otherTileDescs.length) {
    sections.push(
      `TILE ZONES: ${otherTileDescs.join('; ')}. ` +
      `Each tile zone is confined strictly to its designated surface.`
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

  // [9] ZONE ISOLATION RULE (repeated at end for emphasis)
  sections.push(
    `ZONE ISOLATION RULE: each material and finish is strictly confined to its designated zone. ` +
    `Wall materials stay on walls only. ` +
    `Ceiling is white and plain. ` +
    `Floor material stays on the floor only. ` +
    `Backsplash tiles stay in the backsplash zone only.`
  )

  // [10] Optional room dimensions / notes
  if (details?.size)          sections.push(`Room size: ${details.size.replace(/[^\x00-\x7F]/g,'').trim()}.`)
  if (details?.ceilingHeight) sections.push(`Ceiling height: ${details.ceilingHeight.replace(/[^\x00-\x7F]/g,'').trim()}.`)
  if (details?.extraNotes)    sections.push(details.extraNotes.replace(/[^\x00-\x7F]/g,'').trim())

  // [11] Quality tail
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
  if (wallColor) {
    negParts.push(
      `${wallColor} ceiling`,
      `${wallColor} floor`,
    )
  }

  // Prevent wall finish from covering the backsplash zone
  if (backsplashDescs.length) {
    for (const short of wallFinishShorts) {
      negParts.push(
        `${short} in backsplash area`,
        `${short} between countertop and cabinets`,
      )
    }
    negParts.push(
      `no backsplash`,
      `missing backsplash`,
      `backsplash same as wall`,
      `wall covering entire kitchen wall with no backsplash break`,
      `wallpaper covering backsplash zone`,
    )
  }

  // Prevent tile/backsplash color from bleeding onto walls/ceiling
  if (tileColor && backsplashDescs.length) {
    negParts.push(
      `${tileColor} walls`,
      `${tileColor} ceiling`,
      `${tileColor} floor`,
      `backsplash tiles on main walls`,
      `tile pattern on ceiling`,
      `white backsplash`,
      `grey backsplash`,
    )
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

/** Base negative tokens always included regardless of user selections */
const NEGATIVE_PROMPT_BASE_PARTS: string[] = [
  'cartoon', 'anime', 'sketch', 'painting', 'watercolor',
  'blurry', 'low quality', 'distorted', 'deformed',
  'watermark', 'text', 'logo', 'ugly',
  'window removed', 'missing window', 'blocked window',
  'unrealistic', 'plastic look', 'oversaturated',
  'mixed materials', 'tiling errors', 'inconsistent surfaces',
  'material bleeding', 'wrong zone materials',
]

/** Backward-compat static export (for callers that reference NEGATIVE_PROMPT directly) */
export const NEGATIVE_PROMPT = NEGATIVE_PROMPT_BASE_PARTS.join(', ')

const NEGATIVE_PROMPT_BASE = NEGATIVE_PROMPT
