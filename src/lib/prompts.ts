export const ROOM_NAMES: Record<string, string> = {
  office:   'office',
  cafe:     'cafe',
  shop:     'retail store',
  salon:    'beauty salon',
  living:   'living room',
  bedroom:  'bedroom',
  kitchen:  'kitchen',
  bathroom: 'bathroom',
  toilet:   'toilet room',
  kids:     "children's room",
}

export const STYLES: Record<string, { label: string; emoji: string; moodPrompt: string; wallDefault: string; floorDefault: string; furnitureDefault: string; lightDefault: string }> = {
  minimalist: {
    label: 'Минимализм', emoji: '🤍',
    moodPrompt:       'minimalist interior atmosphere, clean and uncluttered, calm neutral mood',
    wallDefault:      'plain smooth white painted walls',
    floorDefault:     'light ash wood flooring',
    furnitureDefault: 'simple white and light oak furniture with clean straight lines',
    lightDefault:     'soft diffuse natural daylight',
  },
  loft: {
    label: 'Лофт', emoji: '🏭',
    moodPrompt:       'industrial loft interior atmosphere, raw and edgy urban feel',
    wallDefault:      'exposed red brick walls with white mortar joints',
    floorDefault:     'polished dark concrete floor',
    furnitureDefault: 'black metal and reclaimed wood furniture',
    lightDefault:     'warm Edison bulb pendant lights on black cables',
  },
  scandinavian: {
    label: 'Скандинавский', emoji: '🌿',
    moodPrompt:       'Scandinavian interior atmosphere, cozy hygge feel, warm and inviting',
    wallDefault:      'white painted walls',
    floorDefault:     'light pine herringbone parquet',
    furnitureDefault: 'light birch wood furniture with wool cushions and sheepskin rug',
    lightDefault:     'warm 2700K lighting with candles',
  },
  luxury: {
    label: 'Люкс', emoji: '✨',
    moodPrompt:       'luxury high-end interior atmosphere, opulent and sophisticated',
    wallDefault:      'white marble wall panels with grey veining',
    floorDefault:     'polished white marble floor',
    furnitureDefault: 'velvet sofa in emerald green, gold brass side tables',
    lightDefault:     'large crystal chandelier and brass wall sconces',
  },
  japandi: {
    label: 'Japandi', emoji: '⛩️',
    moodPrompt:       'Japandi interior atmosphere, zen minimalism, peaceful wabi-sabi feel',
    wallDefault:      'warm natural bamboo wood wall panels',
    floorDefault:     'light natural oak floor planks',
    furnitureDefault: 'low platform bed or sofa in natural linen, handcrafted ceramic pots',
    lightDefault:     'paper lantern pendant light, warm dim lighting',
  },
  biophilic: {
    label: 'Биофилик', emoji: '🍃',
    moodPrompt:       'biophilic interior atmosphere, nature-inspired, lush and organic',
    wallDefault:      'vertical living moss and plant wall',
    floorDefault:     'natural travertine stone floor',
    furnitureDefault: 'rattan and cane furniture, large tropical potted plants',
    lightDefault:     'abundant natural light through large windows',
  },
  artdeco: {
    label: 'Арт-деко', emoji: '🔶',
    moodPrompt:       'Art Deco interior atmosphere, glamorous 1930s elegance',
    wallDefault:      'dark green and gold geometric patterned wallpaper',
    floorDefault:     'black and white geometric marble tile floor',
    furnitureDefault: 'midnight blue velvet armchairs, brass and glass coffee table',
    lightDefault:     'crystal chandelier and brass wall sconces',
  },
  mediterranean: {
    label: 'Средиземноморье', emoji: '🏛️',
    moodPrompt:       'Mediterranean interior atmosphere, warm sunny southern European feel',
    wallDefault:      'rough whitewashed plaster walls',
    floorDefault:     'terracotta hexagonal tile floor',
    furnitureDefault: 'whitewashed wood furniture, blue ceramic accents',
    lightDefault:     'warm sunlight through arched windows, wrought iron chandelier',
  },
  cyberpunk: {
    label: 'Киберпанк', emoji: '🌆',
    moodPrompt:       'cyberpunk interior atmosphere, dark futuristic neon-lit mood',
    wallDefault:      'dark charcoal walls with glowing cyan circuit pattern',
    floorDefault:     'glossy black epoxy floor',
    furnitureDefault: 'geometric black furniture with neon underglow',
    lightDefault:     'purple and cyan neon LED strip lights along all ceiling edges',
  },
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
    return 'near black'
  }
  if (r > g && r > b) { return g > 130 ? (br > 180 ? 'warm beige' : 'terracotta') : (br > 160 ? 'soft pink' : 'deep red') }
  if (g > r && g > b) return br > 160 ? 'sage green' : 'forest green'
  if (b > r && b > g) return br > 160 ? 'sky blue' : 'navy blue'
  return ''
}

const WALL_FINISH_MAP: Record<string,string> = {
  'Покраска / колеровка':    'smoothly painted walls',
  'Обои':                    'decorative patterned wallpaper',
  'Декоративная штукатурка': 'rough Venetian decorative plaster texture',
  'Кирпич':                  'exposed red brick — clearly visible individual bricks with white mortar joints',
  'Дерево / вагонка':        'horizontal wooden plank wall cladding with visible grain',
  'Керамогранит':            'large 60x60cm porcelain stoneware wall tiles',
  'Мрамор':                  'polished white marble wall panels with grey veining',
  'Гипсовые панели':         '3D geometric white gypsum relief wall panels',
  'Жидкие обои':             'smooth silky liquid wallpaper wall coating',
  'Микроцемент':             'seamless grey microcement wall finish',
  'Металлические панели':    'brushed stainless steel wall panels',
  'Стеклянные панели':       'large glass wall panels',
  'Мозаика':                 'small colorful mosaic wall tiles',
  'Имитация бетона':         'raw concrete decorative effect on walls',
  'Натуральный камень':      'rough natural stone wall cladding',
  'Пробка':                  'natural cork tile wall covering',
}

const FLOOR_MAP: Record<string,string> = {
  'Паркет светлый':  'light oak herringbone parquet floor with visible wood grain',
  'Паркет тёмный':   'dark walnut herringbone parquet floor',
  'Ламинат':         'wood-look laminate floor planks',
  'Плитка':          'ceramic square floor tiles',
  'Бетон':           'smooth polished grey concrete floor',
  'Ковёр':           'thick fitted carpet',
  'Мрамор':          'polished white marble floor tiles with grey veining',
  'Керамогранит':    'large-format porcelain stoneware floor tiles',
  'Линолеум':        'vinyl linoleum floor',
}

const TILE_MAP: Record<string,string> = {
  'Фартук кухни':    'white subway tile backsplash on kitchen wall between countertop and upper cabinets',
  'Пол кухни':       'porcelain tile kitchen floor',
  'Стены ванной':    'ceramic tiles covering all bathroom walls floor to ceiling',
  'Пол ванной':      'non-slip ceramic mosaic bathroom floor tiles',
  'Стены туалета':   'ceramic tiles on toilet room walls',
  'Пол туалета':     'ceramic tile toilet room floor',
  'Душевая зона':    'mosaic tiles on shower area walls and floor',
  'Вокруг ванны':    'ceramic tile surround panels around the bathtub',
}

const LIGHT_MAP: Record<string,string> = {
  'Тёплый свет':         'warm golden 2700K ambient light',
  'Холодный свет':       'cool white 5000K light',
  'Точечные светильники':'recessed ceiling spotlights in a grid',
  'Люстра':              'large decorative chandelier on ceiling',
  'Торшер':              'floor lamp in the corner',
  'Подсветка':           'LED backlight strips behind furniture',
  'Светодиодная лента':  'LED strip lights along ceiling cornice',
  'Бра':                 'wall sconce lights',
  'Пендант':             'pendant lights hanging from ceiling',
}

const APP_MAP: Record<string,string> = {
  'Холодильник':          'stainless steel refrigerator',
  'Микроволновка':        'built-in microwave',
  'Посудомоечная машина': 'integrated dishwasher',
  'Стиральная машина':    'front-loading washing machine',
  'Кухонная плита':       'gas cooktop range',
  'Духовой шкаф':        'built-in electric oven',
  'Вытяжка':             'kitchen range hood',
  'Кофемашина':          'espresso machine on counter',
  'Кондиционер':         'wall-mounted AC unit',
  'Телевизор':           'large flat screen TV mounted on wall',
}

export function buildEditPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): string {
  const room  = ROOM_NAMES[roomKey]  ?? 'room'
  const style = STYLES[styleKey]
  const hasDetails = details && (
    details.wallFinish?.length || details.wallColorHex ||
    details.floorMaterial || details.floorColorHex ||
    details.tilezone?.length || details.furniture?.length ||
    details.lighting?.length || details.appliances?.length ||
    details.extraNotes
  )

  const parts: string[] = []

  // ── Часть 1: ОБЩИЙ СТИЛЬ И НАСТРОЕНИЕ ──────────────────────────────
  // Стиль всегда задаёт атмосферу и цветовую палитру
  if (style) {
    parts.push(`Redesign this ${room} interior. Keep all windows, doors, ceiling and floor plan exactly as they are — do not remove or cover any window or door. Replace all furniture, curtains, decor, and wall finishes completely. Apply ${style.moodPrompt}.`)
  } else {
    parts.push(`Redesign this ${room} interior with modern contemporary style. Keep all windows, doors, ceiling and floor plan exactly as they are — do not remove or cover any window or door. Replace all furniture, curtains, decor, and wall finishes completely.`)
  }

  // ── Часть 2: СТЕНЫ ─────────────────────────────────────────────────
  // Если пользователь выбрал отделку — она ПЕРЕКРЫВАЕТ дефолт стиля
  const wallColor = hexToColorName(details?.wallColorHex || '')
  if (details?.wallFinish?.length) {
    const finishes = details.wallFinish.map(f => WALL_FINISH_MAP[f]).filter(Boolean)
    if (finishes.length) {
      const colorPart = wallColor ? ` in ${wallColor}` : ''
      parts.push(`Walls: ${finishes.join(', ')}${colorPart}.`)
    }
  } else if (wallColor) {
    parts.push(`Paint all walls ${wallColor}.`)
  } else if (style) {
    // Дефолт стиля только если пользователь ничего не выбрал
    parts.push(`Walls: ${style.wallDefault}.`)
  }

  // ── Часть 3: ПОЛ ───────────────────────────────────────────────────
  const floorColor = hexToColorName(details?.floorColorHex || '')
  if (details?.floorMaterial) {
    const floorDesc = FLOOR_MAP[details.floorMaterial] || details.floorMaterial
    const colorPart = floorColor ? ` in ${floorColor}` : ''
    parts.push(`Floor: ${floorDesc}${colorPart}.`)
  } else if (floorColor) {
    parts.push(`Floor color: ${floorColor}.`)
  } else if (style) {
    parts.push(`Floor: ${style.floorDefault}.`)
  }

  // ── Часть 4: ЗОНЫ КАФЕЛЯ ───────────────────────────────────────────
  if (details?.tilezone?.length) {
    const tiles = details.tilezone.map(z => TILE_MAP[z]).filter(Boolean)
    if (tiles.length) parts.push(`Tiling: ${tiles.join('; ')}.`)
  }

  // ── Часть 5: МЕБЕЛЬ ────────────────────────────────────────────────
  if (details?.furniture?.length) {
    parts.push(`Furniture: ${details.furniture.join(', ')}.`)
  } else if (style) {
    parts.push(`Furniture: ${style.furnitureDefault}.`)
  }

  // ── Часть 6: ОСВЕЩЕНИЕ ─────────────────────────────────────────────
  if (details?.lighting?.length) {
    const lights = details.lighting.map(l => LIGHT_MAP[l]).filter(Boolean)
    if (lights.length) parts.push(`Lighting: ${lights.join(', ')}.`)
  } else if (style) {
    parts.push(`Lighting: ${style.lightDefault}.`)
  }

  // ── Часть 7: ТЕХНИКА ───────────────────────────────────────────────
  if (details?.appliances?.length) {
    const apps = details.appliances.map(a => APP_MAP[a]).filter(Boolean)
    if (apps.length) parts.push(`Appliances visible: ${apps.join(', ')}.`)
  }

  // ── Часть 8: РАЗМЕРЫ И ДОППОЖЕЛАНИЯ ────────────────────────────────
  if (details?.size)          parts.push(`Room area: ${details.size}.`)
  if (details?.ceilingHeight) parts.push(`Ceiling height: ${details.ceilingHeight}.`)
  if (details?.extraNotes)    parts.push(details.extraNotes + '.')

  // ── Часть 9: КАЧЕСТВО ──────────────────────────────────────────────
  parts.push(
    'Photorealistic architectural visualization.',
    '8K resolution, sharp focus, professional interior photography.',
    'Realistic PBR materials, accurate lighting and shadows.'
  )

  return parts.join(' ')
}

export const NEGATIVE_PROMPT =
  'cartoon, anime, sketch, painting, watercolor, blurry, low quality, distorted, watermark, text, unrealistic materials, plastic look, missing window, window covered, window removed, blocked window, wall where window should be, old furniture, old curtains, old decor, original furniture remaining'
