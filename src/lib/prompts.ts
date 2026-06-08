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

// Style split: base = atmosphere/furniture (always), walls/floor = only if user didn't specify
// my_style = fully custom, no preset atmosphere — all details come from user input
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

// Keep STYLE_PROMPTS for backward compat
export const STYLE_PROMPTS: Record<string, string> = Object.fromEntries(
  Object.keys(STYLE_BASE).map(k => [k,
    STYLE_BASE[k] + ', ' + STYLE_WALL_DEFAULT[k] + ', ' + STYLE_FLOOR_DEFAULT[k]
  ])
)

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
  tileColorHex: string
  furniture: string[]
  lighting: string[]
  appliances: string[]
  extraNotes: string
}

// Direct English lookup by key - no translation needed
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
  kitchen_backsplash: '{C} subway tile backsplash on the kitchen wall between counter and upper cabinets',
  kitchen_floor:      '{C} porcelain tile kitchen floor',
  bath_walls:         '{C} ceramic tiles covering all bathroom walls from floor to ceiling',
  bath_floor:         '{C} non-slip ceramic tiles on bathroom floor',
  toilet_walls:       '{C} ceramic wall tiles in the toilet room',
  toilet_floor:       '{C} ceramic tile toilet room floor',
  shower:             '{C} mosaic tiles in the shower enclosure walls and floor',
  tub_surround:       '{C} ceramic tile panels around the bathtub',
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
  const max = Math.max(r,g,b), min = Math.min(r,g,b)
  const diff = max - min

  // Achromatic (greys)
  if (diff < 20) {
    if (br > 240) return 'pure white'
    if (br > 200) return 'off-white'
    if (br > 160) return 'light grey'
    if (br > 100) return 'medium grey'
    if (br > 50)  return 'dark grey'
    return 'black'
  }

  // Calculate hue
  let h = 0
  if (max === r)      h = 60 * (((g - b) / diff) % 6)
  else if (max === g) h = 60 * ((b - r) / diff + 2)
  else                h = 60 * ((r - g) / diff + 4)
  if (h < 0) h += 360
  const s = diff / max

  // Map hue + brightness + saturation to color name
  if (s < 0.25) {
    if (br > 200) return 'off-white'
    if (br > 120) return 'light grey'
    return 'dark grey'
  }

  // Red-orange-yellow range (0-60)
  if (h < 10)  return br > 160 ? 'soft pink' : 'deep red'
  if (h < 40)  return br > 160 ? 'peach' : 'terracotta'
  if (h < 50)  return br > 160 ? 'golden yellow' : 'amber'
  if (h < 70)  return br > 180 ? 'yellow' : 'olive'

  // Green range (70-160)
  if (h < 90)  return br > 160 ? 'lime green' : 'olive green'
  if (h < 150) return br > 160 ? 'sage green' : 'forest green'
  if (h < 170) return br > 160 ? 'mint green' : 'emerald green'

  // Teal-Cyan range (170-200)
  if (h < 200) return br > 160 ? 'turquoise' : 'teal'

  // Blue range (200-260)
  if (h < 230) return br > 160 ? 'sky blue' : 'royal blue'
  if (h < 260) return br > 140 ? 'cornflower blue' : 'navy blue'

  // Purple-Violet range (260-310)
  if (h < 290) return br > 140 ? 'lavender' : 'deep purple'
  if (h < 330) return br > 140 ? 'orchid pink' : 'plum'

  // Pink-Red range (330-360)
  return br > 160 ? 'rose pink' : 'crimson red'
}

export function buildEditPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): string {
  const room  = ROOM_NAMES[roomKey] ?? 'interior'
  const isMyStyle = styleKey === 'my_style'
  const tokens: string[] = []

  // 1. Room type
  tokens.push(room)

  // Determine if user specified custom walls/floor/tile
  const hasCustomWalls = !!(details?.wallFinish?.length || details?.wallColorHex)
  const hasCustomFloor = !!(details?.floorMaterial || details?.floorColorHex)
  const hasCustomTile  = !!(details?.tilezone?.length)

  // ── For "my_style": user parameters are the ONLY source of truth ──
  // We push strong override instructions first so the model obeys them

  if (isMyStyle) {
    // 2a. Wall color — explicit override
    const wallColor = hexToColorName(details?.wallColorHex || '')
    if (details?.wallFinish?.length) {
      const f = details.wallFinish.map(k => {
        const desc = WALL_FINISH_EN[k]
        if (!desc) return ''
        return wallColor ? desc.replace('{WC}', wallColor) : desc.replace('{WC} ', '')
      }).filter(Boolean)
      if (f.length) {
        // Strong instruction: ONLY these wall finishes, nothing else
        tokens.push('IMPORTANT: walls must have ONLY the following finish: ' + f.join('; '))
        if (wallColor) tokens.push('wall color is strictly ' + wallColor + ', do NOT add any other wall material')
      }
    } else if (wallColor) {
      tokens.push('IMPORTANT: all walls must be painted ' + wallColor + ' only, no brick, no stone, no other texture')
    } else {
      // No wall specified — keep walls neutral
      tokens.push('keep walls neutral and clean')
    }

    // 2b. Floor — explicit override
    const floorColor = hexToColorName(details?.floorColorHex || '')
    if (details?.floorMaterial) {
      const f = FLOOR_EN[details.floorMaterial]
      if (f) {
        const floorDesc = floorColor ? floorColor + ' ' + f : f
        tokens.push('IMPORTANT: floor must be ' + floorDesc + ' only')
      }
    } else if (floorColor) {
      tokens.push('IMPORTANT: floor color must be ' + floorColor + ' only')
    }

    // 2c. Tile zones — explicit override, only in specified zones
    if (hasCustomTile) {
      const tileColor = hexToColorName(details?.tileColorHex || '')
      const colorWord = tileColor || 'white'
      const t = details!.tilezone!.map(k => {
        const template = TILE_EN[k]
        if (!template) return ''
        return template.replace('{C}', colorWord)
      }).filter(Boolean)
      if (t.length) {
        if (tileColor) {
          // Repeat color name multiple times for strong signal to the model
          tokens.push(
            'IMPORTANT: ALL tiles must be ' + tileColor + ' color',
            'tile color: ' + tileColor,
            colorWord + ' colored tiles only'
          )
        }
        tokens.push(...t)
        if (tileColor) {
          tokens.push(
            'every tile surface is ' + tileColor,
            tileColor + ' tile finish, strictly ' + tileColor + ' tiles, no white tiles, no other tile color'
          )
        }
      }
    }

    // 2d. Furniture
    if (details?.furniture?.length) {
      const f = details.furniture.map(k => FURN_EN[k] || k).filter(Boolean)
      if (f.length) tokens.push('include these furniture items: ' + f.join(', '))
    }

    // 2e. Lighting
    if (details?.lighting?.length) {
      const l = details.lighting.map(k => LIGHT_EN[k]).filter(Boolean)
      if (l.length) tokens.push(...l)
    }

    // 2f. Appliances
    if (details?.appliances?.length) {
      const a = details.appliances.map(k => APP_EN[k]).filter(Boolean)
      if (a.length) tokens.push(a.join(', '))
    }

    // 2g. Style tag — minimal, just quality marker
    tokens.push('custom interior design, tailored to exact user specifications')

    // 2h. Size / notes
    if (details?.size)          tokens.push('room size ' + details.size.replace(/[^\x00-\x7F]/g,'').trim())
    if (details?.ceilingHeight) tokens.push('ceiling height ' + details.ceilingHeight.replace(/[^\x00-\x7F]/g,'').trim())
    if (details?.extraNotes)    tokens.push(details.extraNotes.replace(/[^\x00-\x7F]/g,'').trim())

  } else {
    // ── For preset styles: use style defaults, ignore details ──

    // 2. Walls (style default only)
    // 3. Floor (style default only)
    // 4. Tile — not used for preset styles

    // 5. Furniture (not used for preset styles)
    // 6. Lighting (not used for preset styles)
    // 7. Appliances (not used for preset styles)

    // 8. Style — full preset
    const styleKey2 = styleKey || 'minimalist'
    tokens.push(STYLE_BASE[styleKey2] || STYLE_BASE.minimalist)
    tokens.push(STYLE_WALL_DEFAULT[styleKey2] || '')
    tokens.push(STYLE_FLOOR_DEFAULT[styleKey2] || '')
  }

  // Quality — always last
  tokens.push(
    'photorealistic', 'hyperrealistic', '8k resolution',
    'professional interior photography', 'sharp focus',
    'realistic materials and textures', 'perfect lighting'
  )

  return tokens.filter(Boolean).join(', ')
}

export const NEGATIVE_PROMPT =
  'cartoon, anime, sketch, painting, watercolor, blurry, low quality, distorted, deformed, watermark, text, logo, ugly, window removed, missing window, blocked window, unrealistic, plastic look, oversaturated'
