export const ROOM_NAMES: Record<string, string> = {
  office:   'modern office interior',
  cafe:     'cafe and coffee shop interior',
  shop:     'retail store and boutique interior',
  salon:    'luxury beauty salon interior',
  living:   'living room interior',
  bedroom:  'bedroom interior',
  kitchen:  'kitchen interior',
  bathroom: 'bathroom interior',
  toilet:   'toilet room interior',
  kids:     "children's room interior",
}

export const STYLES: Record<string, { label: string; emoji: string; prompt: string }> = {
  minimalist:    { label: 'Минимализм',      emoji: '🤍', prompt: 'modern minimalist style, clean lines, neutral palette, uncluttered' },
  loft:          { label: 'Лофт',            emoji: '🏭', prompt: 'industrial loft style, exposed brick walls, warm Edison bulbs, metal elements, reclaimed wood' },
  scandinavian:  { label: 'Скандинавский',   emoji: '🌿', prompt: 'scandinavian style, light wood, white walls, cozy textiles, hygge atmosphere' },
  luxury:        { label: 'Люкс',            emoji: '✨', prompt: 'luxury interior, marble surfaces, gold accents, crystal chandelier, high-end materials, opulent' },
  japandi:       { label: 'Japandi',         emoji: '⛩️', prompt: 'japandi style, wabi-sabi, natural materials, muted earth tones, zen minimalism' },
  biophilic:     { label: 'Биофилик',        emoji: '🍃', prompt: 'biophilic design, lush living plant walls, natural wood, organic forms, earthy green palette' },
  artdeco:       { label: 'Арт-деко',        emoji: '🔶', prompt: 'art deco style, geometric patterns, brass fixtures, velvet upholstery, glamorous 1930s elegance' },
  mediterranean: { label: 'Средиземноморье', emoji: '🏛️', prompt: 'mediterranean style, warm terracotta tiles, white arches, mosaic accents, sunlit' },
  cyberpunk:     { label: 'Киберпанк',       emoji: '🌆', prompt: 'cyberpunk style, purple neon lights, dark walls, holographic panels, futuristic tech aesthetic' },
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

// Переводим HEX в описание цвета для промпта
function hexToColorName(hex: string): string {
  if (!hex || hex.length < 7) return ''
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  const brightness = (r*299 + g*587 + b*114) / 1000
  const max = Math.max(r,g,b), min = Math.min(r,g,b)
  const diff = max - min
  if (diff < 30) {
    if (brightness > 230) return 'pure white'
    if (brightness > 180) return 'light gray'
    if (brightness > 100) return 'medium gray'
    if (brightness > 40)  return 'dark gray'
    return 'near black'
  }
  if (r > g && r > b) {
    if (g > 100) return brightness > 180 ? 'warm beige' : 'terracotta'
    return brightness > 150 ? 'soft pink' : 'deep red'
  }
  if (g > r && g > b) return brightness > 150 ? 'sage green' : 'forest green'
  if (b > r && b > g) return brightness > 150 ? 'soft blue' : 'navy blue'
  if (r > 150 && g > 150 && b < 100) return 'warm yellow'
  if (r > 150 && b > 150 && g < 100) return 'violet'
  return `color rgb(${r},${g},${b})`
}

export function buildPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): string {
  const room  = ROOM_NAMES[roomKey]  ?? 'interior'
  const style = STYLES[styleKey]?.prompt ?? 'modern contemporary style'

  // Начинаем с очень конкретного описания — это ключ к соблюдению деталей
  const parts: string[] = []

  // 1. Тип комнаты и стиль — ПЕРВЫМИ, они самые важные
  parts.push(`photorealistic interior design render of a ${room}`)
  parts.push(style)

  if (details) {
    // 2. Размер и потолок
    if (details.size)          parts.push(`room area is ${details.size}`)
    if (details.ceilingHeight) parts.push(`ceiling height ${details.ceilingHeight}`)

    // 3. Стены — цвет и отделка (КОНКРЕТНО)
    const wallColor = hexToColorName(details.wallColorHex || '')
    if (wallColor) parts.push(`walls are painted ${wallColor}`)

    if (details.wallFinish?.length) {
      const finishMap: Record<string, string> = {
        'Покраска / колеровка': 'smooth painted walls',
        'Обои':                 'textured wallpaper on walls',
        'Декоративная штукатурка': 'decorative venetian plaster walls',
        'Кирпич':               'exposed brick wall texture, visible individual bricks with mortar joints',
        'Дерево / вагонка':     'wooden wall paneling, natural wood planks on walls',
        'Керамогранит':         'large format porcelain tile wall cladding',
        'Мрамор':               'marble wall cladding with visible veining',
        'Гипсовые панели':      '3D gypsum decorative wall panels',
        'Жидкие обои':          'liquid wallpaper textured wall coating',
        'Микроцемент':          'microcement smooth wall finish',
        'Металлические панели': 'metal cladding panels on walls',
        'Стеклянные панели':    'glass wall panels',
        'Мозаика':              'mosaic tile wall covering',
        'Имитация бетона':      'concrete effect wall finish',
        'Натуральный камень':   'natural stone wall cladding',
        'Пробка':               'cork wall tiles',
      }
      const translated = details.wallFinish.map(f => finishMap[f] || f)
      parts.push(translated.join(', '))
    }

    // 4. Пол — материал и цвет (КОНКРЕТНО)
    const floorColor = hexToColorName(details.floorColorHex || '')
    if (details.floorMaterial) {
      const floorMap: Record<string, string> = {
        'Паркет светлый':  'light oak hardwood parquet flooring',
        'Паркет тёмный':   'dark walnut hardwood parquet flooring',
        'Ламинат':         'laminate flooring planks',
        'Плитка':          'ceramic tile floor',
        'Бетон':           'polished concrete floor',
        'Ковёр':           'fitted carpet flooring',
        'Мрамор':          'white marble floor with grey veining',
        'Керамогранит':    'large format porcelain stoneware floor tiles',
        'Линолеум':        'vinyl linoleum floor covering',
      }
      const floorDesc = floorMap[details.floorMaterial] || details.floorMaterial
      parts.push(floorColor ? `${floorColor} ${floorDesc}` : floorDesc)
    } else if (floorColor) {
      parts.push(`${floorColor} floor`)
    }

    // 5. Зоны кафеля (ОЧЕНЬ конкретно для кухни/ванной)
    if (details.tilezone?.length) {
      const tileMap: Record<string, string> = {
        'Фартук кухни':    'kitchen backsplash with ceramic tiles between countertop and upper cabinets',
        'Пол кухни':       'kitchen floor covered with tiles',
        'Стены ванной':    'bathroom walls fully tiled from floor to ceiling',
        'Пол ванной':      'bathroom floor with non-slip tiles',
        'Стены туалета':   'toilet room walls with tile cladding',
        'Пол туалета':     'toilet room tiled floor',
        'Душевая зона':    'shower area with mosaic or large tile enclosure',
        'Вокруг ванны':    'tile surround around the bathtub',
      }
      const tileDesc = details.tilezone.map(z => tileMap[z] || z)
      parts.push(tileDesc.join(', '))
    }

    // 6. Мебель
    if (details.furniture?.length) {
      parts.push(`furniture includes: ${details.furniture.join(', ')}`)
    }

    // 7. Освещение
    if (details.lighting?.length) {
      const lightMap: Record<string, string> = {
        'Естественный свет':    'large windows with abundant natural daylight',
        'Тёплый свет':         'warm ambient lighting 2700K',
        'Холодный свет':       'cool white lighting 5000K',
        'Точечные светильники':'recessed spotlights in ceiling',
        'Люстра':              'decorative chandelier as centerpiece',
        'Торшер':              'floor lamp in corner',
        'Подсветка':           'LED strip accent lighting',
        'Светодиодная лента':  'LED ribbon light strips',
        'Бра':                 'wall sconces',
        'Пендант':             'pendant lights hanging from ceiling',
      }
      const lightDesc = details.lighting.map(l => lightMap[l] || l)
      parts.push(lightDesc.join(', '))
    }

    // 8. Бытовая техника
    if (details.appliances?.length) {
      const appMap: Record<string, string> = {
        'Холодильник':          'stainless steel refrigerator',
        'Микроволновка':        'built-in microwave oven',
        'Посудомоечная машина': 'integrated dishwasher',
        'Стиральная машина':    'front-loading washing machine',
        'Кухонная плита':       'gas or electric cooking range with hob',
        'Духовой шкаф':        'built-in electric oven',
        'Вытяжка':             'range hood above cooktop',
        'Кофемашина':          'espresso coffee machine on counter',
        'Кондиционер':         'wall-mounted air conditioner unit',
        'Телевизор':           'flat screen TV mounted on wall',
      }
      const appDesc = details.appliances.map(a => appMap[a] || a)
      parts.push(`appliances visible: ${appDesc.join(', ')}`)
    }

    // 9. Дополнительные пожелания
    if (details.extraNotes) parts.push(details.extraNotes)
  }

  // 10. Качество — в конце
  parts.push(
    'preserve all windows and doors and room architecture',
    'hyperrealistic architectural visualization',
    '8k uhd photorealistic render',
    'sharp focus, perfect exposure',
    'professional interior photography',
    'physically based rendering, ray traced lighting',
    'realistic material textures'
  )

  return parts.join(', ')
}

export const NEGATIVE_PROMPT = [
  'remove windows, block windows, no windows',
  'cartoon, illustration, painting, drawing, sketch, anime',
  'blurry, low quality, distorted, deformed, ugly',
  'oversaturated, overexposed, underexposed, washed out',
  'watermark, text, logo, signature',
  'floating furniture, wrong perspective, impossible geometry',
  'extra limbs, duplicate objects',
  'unrealistic materials, plastic-looking surfaces',
].join(', ')
