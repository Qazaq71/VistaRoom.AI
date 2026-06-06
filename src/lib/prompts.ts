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

export const STYLES: Record<string, { label: string; emoji: string; editPrompt: string }> = {
  minimalist:    { label: 'Минимализм',      emoji: '🤍', editPrompt: 'minimalist style with clean lines, neutral whites and beiges, uncluttered surfaces' },
  loft:          { label: 'Лофт',            emoji: '🏭', editPrompt: 'industrial loft style with exposed brick walls, Edison bulb lighting, raw metal elements, reclaimed wood surfaces' },
  scandinavian:  { label: 'Скандинавский',   emoji: '🌿', editPrompt: 'Scandinavian style with light pine wood, white walls, cozy wool textiles, hygge atmosphere' },
  luxury:        { label: 'Люкс',            emoji: '✨', editPrompt: 'luxury style with marble surfaces, gold hardware, crystal chandelier, rich velvet upholstery, opulent decor' },
  japandi:       { label: 'Japandi',         emoji: '⛩️', editPrompt: 'Japandi style with wabi-sabi aesthetics, muted earth tones, natural linen textiles, minimal zen decor' },
  biophilic:     { label: 'Биофилик',        emoji: '🍃', editPrompt: 'biophilic design with abundant indoor plants, living moss wall, natural wood, rattan furniture, earthy greens' },
  artdeco:       { label: 'Арт-деко',        emoji: '🔶', editPrompt: 'Art Deco style with geometric brass fixtures, chevron patterns, velvet upholstery, mirrored surfaces, 1930s glamour' },
  mediterranean: { label: 'Средиземноморье', emoji: '🏛️', editPrompt: 'Mediterranean style with terracotta floor tiles, whitewashed walls, mosaic accents, arched doorways, warm sunlight' },
  cyberpunk:     { label: 'Киберпанк',       emoji: '🌆', editPrompt: 'cyberpunk style with purple and cyan neon strip lights, dark charcoal walls, holographic panels, futuristic tech aesthetic' },
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
  if (!hex || hex.length < 4) return ''
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  const br = (r*299 + g*587 + b*114) / 1000
  const max = Math.max(r,g,b)
  const diff = max - Math.min(r,g,b)
  if (diff < 25) {
    if (br > 235) return 'pure white'
    if (br > 190) return 'light grey'
    if (br > 120) return 'medium grey'
    if (br > 50)  return 'dark grey'
    return 'black'
  }
  if (r === max) {
    if (g > 130) return br > 180 ? 'warm beige' : 'terracotta'
    return br > 160 ? 'light pink' : 'deep red'
  }
  if (g === max) return br > 160 ? 'sage green' : 'deep green'
  return br > 160 ? 'light blue' : 'deep navy blue'
}

// Строим промпт как ИНСТРУКЦИЮ ДЛЯ РЕДАКТИРОВАНИЯ — ключевое отличие от старого подхода
export function buildEditPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): string {
  const room  = ROOM_NAMES[roomKey]  ?? 'room'
  const style = STYLES[styleKey]?.editPrompt ?? 'modern contemporary style'

  // Начинаем с ключевой инструкции: сохранить структуру, изменить отделку
  const instructions: string[] = [
    `Redesign this ${room} interior.`,
    `Keep the exact same room layout, all windows, all doors, all architectural elements, ceiling height, and furniture positions.`,
    `Apply ${style}.`,
  ]

  if (details) {
    // Стены
    const wallColor = hexToColorName(details.wallColorHex || '')

    if (details.wallFinish?.length) {
      const finishMap: Record<string,string> = {
        'Покраска / колеровка':    `Paint all walls ${wallColor || 'in the style color'}`,
        'Обои':                    `Cover walls with patterned wallpaper${wallColor ? ` in ${wallColor} tones` : ''}`,
        'Декоративная штукатурка': 'Apply Venetian decorative plaster texture to walls',
        'Кирпич':                  'Replace wall surface with exposed red brick texture — show individual bricks with mortar joints clearly',
        'Дерево / вагонка':        'Clad walls with horizontal wooden planks — show wood grain texture clearly',
        'Керамогранит':            'Clad walls with large-format porcelain stoneware slabs',
        'Мрамор':                  'Clad walls with white marble panels showing grey veining',
        'Гипсовые панели':         'Install 3D decorative gypsum wall panels with geometric relief',
        'Жидкие обои':             'Apply textured liquid wallpaper coating to walls',
        'Микроцемент':             'Apply smooth microcement coating to walls in concrete look',
        'Металлические панели':    'Install brushed metal wall cladding panels',
        'Стеклянные панели':       'Install glass wall panels',
        'Мозаика':                 'Cover walls with small mosaic tiles',
        'Имитация бетона':         'Apply decorative concrete-effect finish to walls',
        'Натуральный камень':      'Clad walls with natural stone — show stone texture and joints',
        'Пробка':                  'Install cork tile wall covering',
      }
      details.wallFinish.forEach(f => {
        if (finishMap[f]) instructions.push(finishMap[f] + '.')
      })
    } else if (wallColor) {
      instructions.push(`Paint walls ${wallColor}.`)
    }

    // Пол
    const floorColor = hexToColorName(details.floorColorHex || '')
    if (details.floorMaterial) {
      const floorMap: Record<string,string> = {
        'Паркет светлый':  'Replace floor with light oak herringbone parquet — show wood grain',
        'Паркет тёмный':   'Replace floor with dark walnut parquet — show rich wood texture',
        'Ламинат':         'Replace floor with laminate planks',
        'Плитка':          `Replace floor with ceramic tiles${floorColor ? ` in ${floorColor}` : ''}`,
        'Бетон':           'Replace floor with polished concrete — show smooth grey concrete texture',
        'Ковёр':           `Cover floor with fitted carpet${floorColor ? ` in ${floorColor}` : ''}`,
        'Мрамор':          'Replace floor with white marble tiles showing grey veining — highly polished',
        'Керамогранит':    `Replace floor with large-format porcelain stoneware tiles${floorColor ? ` in ${floorColor}` : ''}`,
        'Линолеум':        `Replace floor with vinyl linoleum${floorColor ? ` in ${floorColor}` : ''}`,
      }
      const desc = floorMap[details.floorMaterial] || `Replace floor with ${details.floorMaterial}`
      instructions.push(desc + '.')
    }

    // Зоны кафеля
    if (details.tilezone?.length) {
      const tileMap: Record<string,string> = {
        'Фартук кухни':    'Add ceramic tile backsplash between the kitchen countertop and upper cabinets',
        'Пол кухни':       'Replace kitchen floor with ceramic or porcelain tiles',
        'Стены ванной':    'Tile all bathroom walls floor-to-ceiling with ceramic tiles',
        'Пол ванной':      'Replace bathroom floor with non-slip ceramic tiles',
        'Стены туалета':   'Tile toilet room walls with ceramic tiles',
        'Пол туалета':     'Replace toilet room floor with ceramic tiles',
        'Душевая зона':    'Clad shower enclosure walls and floor with mosaic tiles',
        'Вокруг ванны':    'Add tile surround panels around the bathtub',
      }
      details.tilezone.forEach(z => {
        if (tileMap[z]) instructions.push(tileMap[z] + '.')
      })
    }

    // Освещение
    if (details.lighting?.length) {
      const lightMap: Record<string,string> = {
        'Естественный свет':    'Keep natural daylight through windows',
        'Тёплый свет':         'Use warm 2700K ambient lighting',
        'Холодный свет':       'Use cool 5000K white lighting',
        'Точечные светильники':'Add recessed spotlights in the ceiling',
        'Люстра':              'Add a statement chandelier on the ceiling',
        'Торшер':              'Add a floor lamp in the corner',
        'Подсветка':           'Add LED accent backlight strips',
        'Светодиодная лента':  'Add LED strip lights along ceiling perimeter',
        'Бра':                 'Add wall sconce lights',
        'Пендант':             'Add pendant lights hanging from ceiling',
      }
      const lights = details.lighting.map(l => lightMap[l] || l).filter(Boolean)
      if (lights.length) instructions.push(lights.join(', ') + '.')
    }

    // Бытовая техника
    if (details.appliances?.length) {
      const appMap: Record<string,string> = {
        'Холодильник':          'stainless steel refrigerator',
        'Микроволновка':        'built-in microwave',
        'Посудомоечная машина': 'integrated dishwasher',
        'Стиральная машина':    'front-loading washing machine',
        'Кухонная плита':       'gas cooking range with hob',
        'Духовой шкаф':        'built-in electric oven',
        'Вытяжка':             'kitchen range hood above cooktop',
        'Кофемашина':          'espresso machine on counter',
        'Кондиционер':         'wall-mounted air conditioning unit',
        'Телевизор':           'flat screen TV on wall',
      }
      const apps = details.appliances.map(a => appMap[a] || a)
      instructions.push(`Show these appliances: ${apps.join(', ')}.`)
    }

    // Мебель
    if (details.furniture?.length) {
      instructions.push(`Include this furniture: ${details.furniture.join(', ')}.`)
    }

    // Размер
    if (details.size)          instructions.push(`Room area is ${details.size}.`)
    if (details.ceilingHeight) instructions.push(`Ceiling height is ${details.ceilingHeight}.`)

    // Дополнительно
    if (details.extraNotes) instructions.push(details.extraNotes)
  }

  // Финальные инструкции для качества
  instructions.push(
    'Photorealistic architectural visualization, 8K quality.',
    'Realistic material textures, physically based rendering.',
    'Perfect lighting and shadows.',
    'Professional interior photography.'
  )

  return instructions.join(' ')
}

export const NEGATIVE_PROMPT =
  'cartoon, anime, illustration, painting, sketch, blurry, low quality, distorted, watermark, text, logo, extra windows removed, blocked windows, missing windows'
