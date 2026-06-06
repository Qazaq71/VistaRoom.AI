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

export const STYLES: Record<string, { label: string; emoji: string; prompt: string }> = {
  minimalist: {
    label: 'Минимализм', emoji: '🤍',
    prompt: 'minimalist style, plain white walls, simple furniture with clean straight lines, neutral palette, uncluttered',
  },
  loft: {
    label: 'Лофт', emoji: '🏭',
    prompt: 'industrial loft style, exposed red brick walls, black metal frames, Edison bulb pendant lights, concrete accents',
  },
  scandinavian: {
    label: 'Скандинавский', emoji: '🌿',
    prompt: 'Scandinavian hygge style, white walls, light birch furniture, wool textiles, warm cozy atmosphere',
  },
  luxury: {
    label: 'Люкс', emoji: '✨',
    prompt: 'luxury interior, white marble walls and floor, gold brass hardware, crystal chandelier, velvet upholstery, opulent',
  },
  japandi: {
    label: 'Japandi', emoji: '⛩️',
    prompt: 'Japandi wabi-sabi style, warm natural oak panels, low furniture, paper lantern light, muted sand and charcoal tones, zen',
  },
  biophilic: {
    label: 'Биофилик', emoji: '🍃',
    prompt: 'biophilic design, lush indoor plants, moss wall, rattan furniture, natural wood, earthy green palette',
  },
  artdeco: {
    label: 'Арт-деко', emoji: '🔶',
    prompt: 'Art Deco style, geometric gold wallpaper, brass fixtures, velvet armchairs, chevron marble floor, 1930s glamour',
  },
  mediterranean: {
    label: 'Средиземноморье', emoji: '🏛️',
    prompt: 'Mediterranean style, whitewashed walls, terracotta tile floor, blue mosaic accents, arched elements, warm sunlight',
  },
  cyberpunk: {
    label: 'Киберпанк', emoji: '🌆',
    prompt: 'cyberpunk style, dark walls, purple and cyan neon LED strips, holographic panels, glossy black surfaces, futuristic',
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
    return 'black'
  }
  if (r > g && r > b) return g > 130 ? (br > 180 ? 'warm beige' : 'terracotta') : (br > 160 ? 'soft pink' : 'deep red')
  if (g > r && g > b) return br > 160 ? 'sage green' : 'forest green'
  if (b > r && b > g) return br > 160 ? 'sky blue' : 'navy blue'
  return ''
}

const WALL_FINISH_MAP: Record<string,string> = {
  'Покраска / колеровка':    'smooth painted walls',
  'Обои':                    'decorative patterned wallpaper on walls',
  'Декоративная штукатурка': 'Venetian decorative plaster texture on walls',
  'Кирпич':                  'exposed red brick walls with visible mortar joints',
  'Дерево / вагонка':        'horizontal wooden plank wall cladding',
  'Керамогранит':            'large format porcelain stoneware wall tiles',
  'Мрамор':                  'polished white marble wall panels with grey veining',
  'Гипсовые панели':         '3D gypsum decorative relief wall panels',
  'Жидкие обои':             'liquid wallpaper textured wall coating',
  'Микроцемент':             'seamless grey microcement wall finish',
  'Металлические панели':    'brushed metal wall cladding panels',
  'Стеклянные панели':       'glass wall panels',
  'Мозаика':                 'mosaic tile wall covering',
  'Имитация бетона':         'concrete effect wall finish',
  'Натуральный камень':      'natural stone wall cladding',
  'Пробка':                  'cork tile wall covering',
}

const FLOOR_MAP: Record<string,string> = {
  'Паркет светлый':  'light oak herringbone parquet floor',
  'Паркет тёмный':   'dark walnut herringbone parquet floor',
  'Ламинат':         'laminate wood floor planks',
  'Плитка':          'ceramic floor tiles',
  'Бетон':           'polished concrete floor',
  'Ковёр':           'fitted carpet floor',
  'Мрамор':          'polished white marble floor',
  'Керамогранит':    'large format porcelain stoneware floor tiles',
  'Линолеум':        'vinyl linoleum floor',
}

const TILE_MAP: Record<string,string> = {
  'Фартук кухни':    'white subway tile backsplash between counter and upper cabinets',
  'Пол кухни':       'porcelain tile kitchen floor',
  'Стены ванной':    'ceramic tiles on all bathroom walls floor to ceiling',
  'Пол ванной':      'non-slip ceramic mosaic bathroom floor',
  'Стены туалета':   'ceramic tile toilet room walls',
  'Пол туалета':     'ceramic tile toilet floor',
  'Душевая зона':    'mosaic tile shower enclosure',
  'Вокруг ванны':    'tile surround around bathtub',
}

const LIGHT_MAP: Record<string,string> = {
  'Тёплый свет':         'warm 2700K ambient lighting',
  'Холодный свет':       'cool white 5000K lighting',
  'Точечные светильники':'recessed ceiling spotlights',
  'Люстра':              'decorative chandelier on ceiling',
  'Торшер':              'floor lamp',
  'Подсветка':           'LED accent strip lights',
  'Светодиодная лента':  'LED strip lights along ceiling',
  'Бра':                 'wall sconce lights',
  'Пендант':             'pendant lights from ceiling',
}

const APP_MAP: Record<string,string> = {
  'Холодильник':          'stainless steel refrigerator',
  'Микроволновка':        'built-in microwave',
  'Посудомоечная машина': 'integrated dishwasher',
  'Стиральная машина':    'front-loading washing machine',
  'Кухонная плита':       'gas cooking range',
  'Духовой шкаф':        'built-in electric oven',
  'Вытяжка':             'kitchen range hood',
  'Кофемашина':          'espresso machine',
  'Кондиционер':         'wall-mounted AC unit',
  'Телевизор':           'flat screen TV on wall',
}

export function buildEditPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): string {
  const room  = ROOM_NAMES[roomKey] ?? 'interior'
  const style = STYLES[styleKey]
  const tokens: string[] = []

  // 1. Тип комнаты + стиль — основа промпта
  tokens.push(room)
  if (style) tokens.push(style.prompt)

  // 2. Стены
  const wallColor = hexToColorName(details?.wallColorHex || '')
  if (details?.wallFinish?.length) {
    const f = details.wallFinish.map(w => WALL_FINISH_MAP[w]).filter(Boolean)
    if (f.length) tokens.push(f.join(', '))
    if (wallColor) tokens.push(`${wallColor} wall color`)
  } else if (wallColor) {
    tokens.push(`${wallColor} walls`)
  }

  // 3. Пол
  const floorColor = hexToColorName(details?.floorColorHex || '')
  if (details?.floorMaterial) {
    const f = FLOOR_MAP[details.floorMaterial] || details.floorMaterial
    tokens.push(floorColor ? `${floorColor} ${f}` : f)
  } else if (floorColor) {
    tokens.push(`${floorColor} floor`)
  }

  // 4. Кафель
  if (details?.tilezone?.length) {
    const t = details.tilezone.map(z => TILE_MAP[z]).filter(Boolean)
    if (t.length) tokens.push(t.join(', '))
  }

  // 5. Мебель
  if (details?.furniture?.length) {
    tokens.push(`furniture: ${details.furniture.join(', ')}`)
  }

  // 6. Освещение
  if (details?.lighting?.length) {
    const l = details.lighting.map(x => LIGHT_MAP[x]).filter(Boolean)
    if (l.length) tokens.push(l.join(', '))
  }

  // 7. Техника
  if (details?.appliances?.length) {
    const a = details.appliances.map(x => APP_MAP[x]).filter(Boolean)
    if (a.length) tokens.push(a.join(', '))
  }

  // 8. Размеры
  if (details?.size)          tokens.push(`room size ${details.size}`)
  if (details?.ceilingHeight) tokens.push(`ceiling height ${details.ceilingHeight}`)
  if (details?.extraNotes)    tokens.push(details.extraNotes)

  // 9. Качество — всегда в конце
  tokens.push(
    'photorealistic', 'hyperrealistic', '8k resolution',
    'professional interior photography', 'sharp focus',
    'realistic materials and textures', 'perfect lighting'
  )

  return tokens.join(', ')
}

export const NEGATIVE_PROMPT =
  'cartoon, anime, sketch, painting, watercolor, blurry, low quality, distorted, deformed, watermark, text, logo, ugly, window removed, missing window, blocked window, unrealistic, plastic look, oversaturated'
