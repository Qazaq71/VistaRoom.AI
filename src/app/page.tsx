'use client'

import { useState, useRef, useCallback, useMemo } from 'react'
import { buildEditPrompt, detectConflicts, type RoomDetails } from '@/lib/prompts'

// ─── Static data ──────────────────────────────────────────────────────────────

const STYLE_DISPLAY: Record<string, { label: string; emoji: string }> = {
  my_style:      { label: 'Мой стиль',       emoji: '🎨' },
  minimalist:    { label: 'Минимализм',      emoji: '🤍' },
  loft:          { label: 'Лофт',            emoji: '🏭' },
  scandinavian:  { label: 'Скандинавский',   emoji: '🌿' },
  luxury:        { label: 'Люкс',            emoji: '✨' },
  japandi:       { label: 'Japandi',         emoji: '⛩️' },
  biophilic:     { label: 'Биофилик',        emoji: '🍃' },
  artdeco:       { label: 'Арт-деко',        emoji: '🔶' },
  mediterranean: { label: 'Средиземноморье', emoji: '🏛️' },
  cyberpunk:     { label: 'Киберпанк',       emoji: '🌆' },
}

const ROOM_LABELS: Record<string, string> = {
  living: 'Гостиная', bedroom: 'Спальня', kitchen: 'Кухня',
  bathroom: 'Ванная', toilet: 'Туалет', office: 'Офис',
  kids: 'Детская', cafe: 'Кафе', shop: 'Магазин', salon: 'Салон',
}

const TILE_ROOMS = ['kitchen', 'bathroom', 'toilet']

// ─── Visual card data ─────────────────────────────────────────────────────────
// Each card encodes finish + color in one choice.
// The hex is used for swatch preview; finish+colorHex go to prompts.ts.

const WALL_CARDS = [
  // key = wallFinish value, label, hex for preview, wallColorHex for prompt
  { key: 'paint',       label: 'Белая краска',      hex: '#F5F5F5', colorHex: '#FFFFFF' },
  { key: 'paint',       label: 'Бежевая краска',     hex: '#EFE8D8', colorHex: '#EFE8D8', id: 'paint_beige' },
  { key: 'paint',       label: 'Серая краска',       hex: '#9E9E9E', colorHex: '#9E9E9E', id: 'paint_grey' },
  { key: 'paint',       label: 'Голубая краска',     hex: '#90CAF9', colorHex: '#90CAF9', id: 'paint_blue' },
  { key: 'paint',       label: 'Зелёная краска',     hex: '#81C784', colorHex: '#81C784', id: 'paint_green' },
  { key: 'paint',       label: 'Розовая краска',     hex: '#F48FB1', colorHex: '#F48FB1', id: 'paint_pink' },
  { key: 'paint',       label: 'Терракота',          hex: '#C97B63', colorHex: '#C97B63', id: 'paint_terra' },
  { key: 'paint',       label: 'Антрацит',           hex: '#37474F', colorHex: '#37474F', id: 'paint_dark' },
  { key: 'wallpaper',   label: 'Обои нейтральные',   hex: '#E8E0D0', colorHex: '#EFE8D8' },
  { key: 'wallpaper',   label: 'Обои зелёные',       hex: '#A5C8A0', colorHex: '#81C784', id: 'wp_green' },
  { key: 'wallpaper',   label: 'Обои синие',         hex: '#90CAF9', colorHex: '#5C9FD6', id: 'wp_blue' },
  { key: 'wallpaper',   label: 'Обои жёлтые',        hex: '#FFE033', colorHex: '#FFE033', id: 'wp_yellow' },
  { key: 'brick',       label: 'Кирпич красный',     hex: '#B5533C', colorHex: '#B5533C' },
  { key: 'brick',       label: 'Кирпич белый',       hex: '#EDE8E0', colorHex: '#EDE8E0', id: 'brick_white' },
  { key: 'microcement', label: 'Микроцемент серый',  hex: '#8D8D8D', colorHex: '#8D8D8D' },
  { key: 'microcement', label: 'Микроцемент беж',    hex: '#C4B9A8', colorHex: '#C4B9A8', id: 'mc_beige' },
  { key: 'plaster',     label: 'Штукатурка белая',   hex: '#F0EDE8', colorHex: '#F0EDE8' },
  { key: 'plaster',     label: 'Штукатурка беж',     hex: '#D4C5B0', colorHex: '#D4C5B0', id: 'pl_beige' },
  { key: 'wood',        label: 'Дерево светлое',     hex: '#D4B896', colorHex: '#D4B896' },
  { key: 'wood',        label: 'Дерево тёмное',      hex: '#6B4226', colorHex: '#6B4226', id: 'wood_dark' },
  { key: 'marble',      label: 'Мрамор белый',       hex: '#F0EDE8', colorHex: '#F0EDE8' },
  { key: 'marble',      label: 'Мрамор чёрный',      hex: '#2C2C2C', colorHex: '#2C2C2C', id: 'mb_black' },
  { key: 'concrete',    label: 'Бетон серый',        hex: '#888888', colorHex: '#888888' },
]

const FLOOR_CARDS = [
  { key: 'light_parquet', label: 'Паркет светлый',   hex: '#D4B896', colorHex: '#D4B896' },
  { key: 'dark_parquet',  label: 'Паркет тёмный',    hex: '#5C3D1E', colorHex: '#5C3D1E' },
  { key: 'laminate',      label: 'Ламинат дуб',      hex: '#C8A87A', colorHex: '#C8A87A' },
  { key: 'laminate',      label: 'Ламинат серый',    hex: '#9E9E9E', colorHex: '#9E9E9E', id: 'lam_grey' },
  { key: 'marble',        label: 'Мрамор белый',     hex: '#F0EDE8', colorHex: '#F0EDE8' },
  { key: 'ceramic_tile',  label: 'Плитка серая',     hex: '#B0B0B0', colorHex: '#B0B0B0' },
  { key: 'ceramic_tile',  label: 'Плитка бежевая',   hex: '#D4B896', colorHex: '#D4B896', id: 'ct_beige' },
  { key: 'concrete',      label: 'Бетон',            hex: '#888888', colorHex: '#888888' },
  { key: 'porcelain',     label: 'Керамогранит светл',hex: '#D9D9D9', colorHex: '#D9D9D9' },
  { key: 'porcelain',     label: 'Керамогранит тёмн', hex: '#37474F', colorHex: '#37474F', id: 'pg_dark' },
  { key: 'carpet',        label: 'Ковёр бежевый',    hex: '#C8B49A', colorHex: '#C8B49A' },
  { key: 'carpet',        label: 'Ковёр серый',      hex: '#8C8C8C', colorHex: '#8C8C8C', id: 'carp_grey' },
]

// Ready-made color schemes: walls + floor + accent combinations
// Instead of picking hex per zone, user picks one "palette"
const COLOR_SCHEMES = [
  {
    id: 'neutral',
    label: 'Нейтральный',
    desc: 'Белый + светлый паркет',
    swatches: ['#F5F5F5', '#D4B896'],
    wallFinish: 'paint', wallColorHex: '#FFFFFF',
    floorMaterial: 'light_parquet', floorColorHex: '#D4B896',
  },
  {
    id: 'warm_beige',
    label: 'Тёплый бежевый',
    desc: 'Бежевые стены + тёмный дуб',
    swatches: ['#EFE8D8', '#5C3D1E'],
    wallFinish: 'paint', wallColorHex: '#EFE8D8',
    floorMaterial: 'dark_parquet', floorColorHex: '#5C3D1E',
  },
  {
    id: 'nordic',
    label: 'Скандинавский',
    desc: 'Белая штукатурка + светлый ламинат',
    swatches: ['#F0EDE8', '#C8A87A'],
    wallFinish: 'plaster', wallColorHex: '#F0EDE8',
    floorMaterial: 'laminate', floorColorHex: '#C8A87A',
  },
  {
    id: 'sage_green',
    label: 'Зелёный сейдж',
    desc: 'Зелёные стены + дуб',
    swatches: ['#81C784', '#C8A87A'],
    wallFinish: 'paint', wallColorHex: '#81C784',
    floorMaterial: 'light_parquet', floorColorHex: '#D4B896',
  },
  {
    id: 'urban_grey',
    label: 'Городской серый',
    desc: 'Микроцемент + бетонный пол',
    swatches: ['#8D8D8D', '#888888'],
    wallFinish: 'microcement', wallColorHex: '#8D8D8D',
    floorMaterial: 'concrete', floorColorHex: '#888888',
  },
  {
    id: 'dark_loft',
    label: 'Тёмный лофт',
    desc: 'Антрацит + тёмный паркет',
    swatches: ['#37474F', '#5C3D1E'],
    wallFinish: 'paint', wallColorHex: '#37474F',
    floorMaterial: 'dark_parquet', floorColorHex: '#5C3D1E',
  },
  {
    id: 'terracotta',
    label: 'Терракота',
    desc: 'Тёплые стены + бежевая плитка',
    swatches: ['#C97B63', '#D4B896'],
    wallFinish: 'paint', wallColorHex: '#C97B63',
    floorMaterial: 'ceramic_tile', floorColorHex: '#D4B896',
  },
  {
    id: 'marble_luxury',
    label: 'Мрамор / люкс',
    desc: 'Белый мрамор везде',
    swatches: ['#F0EDE8', '#F0EDE8'],
    wallFinish: 'marble', wallColorHex: '#F0EDE8',
    floorMaterial: 'marble', floorColorHex: '#F0EDE8',
  },
]

const LIGHTING_CARDS = [
  { key: 'natural',    label: 'Дневной свет',      icon: '☀️' },
  { key: 'warm',       label: 'Тёплый',            icon: '🕯️' },
  { key: 'recessed',   label: 'Точечные',          icon: '💡' },
  { key: 'chandelier', label: 'Люстра',            icon: '🔆' },
  { key: 'pendant',    label: 'Пендант',           icon: '🪔' },
  { key: 'strip',      label: 'LED лента',         icon: '〰️' },
]

const TILE_CARDS = [
  { hex: '#FFFFFF', label: 'Белый',     key: 'tile_white' },
  { hex: '#D9D9D9', label: 'Светлый',   key: 'tile_lgrey' },
  { hex: '#9E9E9E', label: 'Серый',     key: 'tile_grey' },
  { hex: '#37474F', label: 'Антрацит',  key: 'tile_dark' },
  { hex: '#90CAF9', label: 'Голубой',   key: 'tile_blue' },
  { hex: '#4DB6AC', label: 'Бирюзовый', key: 'tile_teal' },
  { hex: '#66BB6A', label: 'Зелёный',   key: 'tile_green' },
  { hex: '#C97B63', label: 'Терракота', key: 'tile_terra' },
  { hex: '#8D6E63', label: 'Коричневый',key: 'tile_brown' },
  { hex: '#F0EDE8', label: 'Мрамор',    key: 'tile_marble' },
]

const TILE_ZONE_LABELS: Record<string, string> = {
  kitchen_backsplash: 'Фартук кухни',
  kitchen_floor:      'Пол кухни',
  bath_walls:         'Стены ванной',
  bath_floor:         'Пол ванной',
  toilet_walls:       'Стены туалета',
  toilet_floor:       'Пол туалета',
  shower:             'Душевая зона',
  tub_surround:       'Вокруг ванны',
}

const FURNITURE_CARDS = [
  { key: 'sofa',         label: 'Диван',          icon: '🛋️' },
  { key: 'bed',          label: 'Кровать',         icon: '🛏️' },
  { key: 'dining_table', label: 'Стол',            icon: '🍽️' },
  { key: 'desk',         label: 'Рабочий стол',    icon: '💻' },
  { key: 'wardrobe',     label: 'Шкаф',            icon: '🗄️' },
  { key: 'tv_unit',      label: 'ТВ-зона',         icon: '📺' },
  { key: 'armchair',     label: 'Кресло',          icon: '🪑' },
  { key: 'bookshelf',    label: 'Стеллаж',         icon: '📚' },
  { key: 'kitchen_set',  label: 'Кухня',           icon: '🍳' },
  { key: 'bathtub',      label: 'Ванна',           icon: '🛁' },
  { key: 'shower_cabin', label: 'Душ',             icon: '🚿' },
]

const APPLIANCE_CARDS = [
  { key: 'fridge',     label: 'Холодильник', icon: '🧊' },
  { key: 'stove',      label: 'Плита',       icon: '🔥' },
  { key: 'hood',       label: 'Вытяжка',     icon: '💨' },
  { key: 'oven',       label: 'Духовка',     icon: '🫕' },
  { key: 'dishwasher', label: 'Посудомойка', icon: '🍴' },
  { key: 'washer',     label: 'Стиралка',    icon: '👕' },
  { key: 'ac',         label: 'Кондиционер', icon: '❄️' },
  { key: 'tv',         label: 'Телевизор',   icon: '📺' },
  { key: 'coffee',     label: 'Кофемашина',  icon: '☕' },
]

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'
type MyStyleStep = 'palette' | 'walls' | 'floors' | 'lighting' | 'extras'

// ─── Sub-components ───────────────────────────────────────────────────────────

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
    setPosition(Math.round(pct))
  }, [])

  const onDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true)
    updatePosition(e.clientX)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [updatePosition])

  const onMove = useCallback((e: React.PointerEvent) => {
    if (isDragging) updatePosition(e.clientX)
  }, [isDragging, updatePosition])

  const onUp = useCallback(() => setIsDragging(false), [])

  const measuredRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      (containerRef as React.MutableRefObject<HTMLDivElement>).current = node
      const observer = new ResizeObserver(entries => {
        for (const entry of entries) setContainerWidth(entry.contentRect.width)
      })
      observer.observe(node)
    }
  }, [])

  return (
    <div ref={measuredRef} className="ba-slider"
      onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
      style={{ touchAction: 'none' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt="After" className="ba-img" draggable={false} />
      <div className="ba-before-clip" style={{ width: position + '%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before} alt="Before" className="ba-before" draggable={false}
          style={{ width: containerWidth > 0 ? containerWidth + 'px' : '100%' }} />
      </div>
      <div className="ba-line" style={{ left: position + '%' }}>
        <div className="ba-handle">
          <div className="ba-arrow-left" /><div className="ba-arrow-right" />
        </div>
      </div>
      <div className="ba-label ba-label-before" style={{ opacity: position > 15 ? 1 : 0 }}>До</div>
      <div className="ba-label ba-label-after"  style={{ opacity: position < 85 ? 1 : 0 }}>После</div>
    </div>
  )
}

// Visual swatch card — used for walls, floors, lighting, furniture
function SwatchCard({ label, icon, hex, selected, onClick, small }: {
  label: string; icon?: string; hex?: string; selected: boolean; onClick: () => void; small?: boolean
}) {
  return (
    <button
      className={`swatch-card${selected ? ' selected' : ''}${small ? ' small' : ''}`}
      onClick={onClick}
    >
      {hex && (
        <div className="swatch-card-color" style={{ background: hex,
          border: hex === '#FFFFFF' || hex === '#F5F5F5' || hex === '#F0EDE8' ? '1px solid #ddd' : 'none' }} />
      )}
      {icon && !hex && <div className="swatch-card-icon">{icon}</div>}
      <div className="swatch-card-label">{label}</div>
      {selected && <div className="swatch-card-check">✓</div>}
    </button>
  )
}

// Step header for my_style wizard
function StepHeader({ step, current, label, done, onClick }: {
  step: MyStyleStep; current: MyStyleStep; label: string; done: boolean; onClick: () => void
}) {
  const isActive = step === current
  return (
    <button className={`step-header${isActive ? ' active' : ''}${done ? ' done' : ''}`} onClick={onClick}>
      <span className="step-dot">{done ? '✓' : ''}</span>
      <span className="step-label">{label}</span>
      <span className="step-arrow">{isActive ? '▾' : '›'}</span>
    </button>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Home() {
  const [imageFile, setImageFile]       = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [room, setRoom]                 = useState('living')
  const [style, setStyle]               = useState('minimalist')
  const isMyStyle = style === 'my_style'

  // my_style: wizard step
  const [myStep, setMyStep] = useState<MyStyleStep>('palette')

  // Palette mode: either a scheme is picked OR custom (walls/floor picked individually)
  const [schemeId, setSchemeId]       = useState<string>('')   // '' = custom
  const [wallFinishKey, setWallFinishKey]   = useState<string>('') // wall card id/key combo
  const [wallFinish, setWallFinish]         = useState<string[]>([])
  const [wallColorHex, setWallColorHex]     = useState<string>('')
  const [floorMaterialKey, setFloorMaterialKey] = useState<string>('')
  const [floorMaterial, setFloorMaterial]       = useState<string>('')
  const [floorColorHex, setFloorColorHex]       = useState<string>('')

  const [lighting, setLighting]       = useState<string[]>([])
  const [extraNotes, setExtraNotes]   = useState('')

  // Advanced
  const [tilezone, setTilezone]       = useState<string[]>([])
  const [tileColorHex, setTileColorHex] = useState<string>('#FFFFFF')
  const [furniture, setFurniture]     = useState<string[]>([])
  const [appliances, setAppliances]   = useState<string[]>([])
  const [showExtras, setShowExtras]   = useState(false)

  const [detailsOpen, setDetailsOpen] = useState(false)

  const [status, setStatus]       = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [outputUrl, setOutputUrl] = useState<string | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [dragOver, setDragOver]   = useState(false)
  const [promptPreviewOpen, setPromptPreviewOpen] = useState(false)

  const fileRef = useRef<HTMLInputElement>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const toggleArr = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  // Apply a color scheme
  const applyScheme = useCallback((scheme: typeof COLOR_SCHEMES[0]) => {
    setSchemeId(scheme.id)
    setWallFinish([scheme.wallFinish])
    setWallColorHex(scheme.wallColorHex)
    setWallFinishKey(scheme.id + '_wall')
    setFloorMaterial(scheme.floorMaterial)
    setFloorColorHex(scheme.floorColorHex)
    setFloorMaterialKey(scheme.id + '_floor')
  }, [])

  // Apply a wall card
  const applyWallCard = useCallback((card: typeof WALL_CARDS[0]) => {
    const cardId = card.id || card.key
    setSchemeId('')  // deselect scheme
    setWallFinishKey(cardId)
    setWallFinish([card.key])
    setWallColorHex(card.colorHex)
  }, [])

  // Apply a floor card
  const applyFloorCard = useCallback((card: typeof FLOOR_CARDS[0]) => {
    const cardId = card.id || card.key
    setSchemeId('')
    setFloorMaterialKey(cardId)
    setFloorMaterial(card.key)
    setFloorColorHex(card.colorHex)
  }, [])

  // Computed for prompts
  const liveDetails: Partial<RoomDetails> = useMemo(() => ({
    wallColorHex, wallFinish, floorMaterial, floorColorHex,
    tilezone, tileColorHex, furniture, lighting, appliances, extraNotes,
    size: '', ceilingHeight: '',
  }), [wallColorHex, wallFinish, floorMaterial, floorColorHex,
       tilezone, tileColorHex, furniture, lighting, appliances, extraNotes])

  const livePrompt = useMemo(() => {
    if (!isMyStyle) return ''
    const { positive } = buildEditPrompt(room, 'my_style', liveDetails)
    return positive
  }, [isMyStyle, room, liveDetails])

  const conflicts = useMemo(() => {
    if (!isMyStyle) return []
    return detectConflicts(room, liveDetails)
  }, [isMyStyle, room, liveDetails])

  // Completion flags for step headers
  const paletteDone  = !!(wallFinish.length && floorMaterial)
  const lightingDone = lighting.length > 0
  const extrasDone   = !!(tilezone.length || furniture.length || appliances.length || extraNotes)

  // File handling
  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    setImageFile(file)
    const r = new FileReader()
    r.onload = e => setImagePreview(e.target?.result as string)
    r.readAsDataURL(file)
    setOutputUrl(null); setStatus('idle')
  }, [])

  const clearImage = () => {
    setImageFile(null); setImagePreview(null); setOutputUrl(null); setStatus('idle')
    if (fileRef.current) fileRef.current.value = ''
  }

  const pollPrediction = useCallback((id: string) => {
    let attempts = 0
    pollRef.current = setInterval(async () => {
      attempts++
      if (attempts > 90) {
        clearInterval(pollRef.current!)
        setStatus('error'); setStatusMsg('Превышено время ожидания. Попробуйте снова.')
        return
      }
      try {
        const res  = await fetch(`/api/poll?id=${id}`)
        const data = await res.json()
        if (data.status === 'succeeded' && data.outputUrl) {
          clearInterval(pollRef.current!)
          setOutputUrl(data.outputUrl); setStatus('done')
        } else if (data.status === 'failed') {
          clearInterval(pollRef.current!)
          setStatus('error'); setStatusMsg(data.error || 'Генерация не удалась.')
        } else {
          setStatusMsg(`Генерирую дизайн... (${Math.min(attempts * 2, 60)} сек)`)
        }
      } catch { /* continue */ }
    }, 2000)
  }, [])

  const generate = useCallback(async () => {
    if (!imageFile) { setStatus('error'); setStatusMsg('Загрузите фотографию помещения'); return }
    if (pollRef.current) clearInterval(pollRef.current)
    setStatus('uploading'); setStatusMsg('Отправляю изображение...'); setOutputUrl(null)

    const sendDetails = isMyStyle
    const form = new FormData()
    form.append('image',         imageFile)
    form.append('room',          room)
    form.append('style',         isMyStyle ? 'my_style' : style)
    form.append('size',          '')
    form.append('ceilingHeight', '')
    form.append('wallColorHex',  sendDetails ? wallColorHex : '')
    form.append('wallFinish',    sendDetails ? JSON.stringify(wallFinish) : '[]')
    form.append('floorMaterial', sendDetails ? floorMaterial : '')
    form.append('floorColorHex', sendDetails ? floorColorHex : '')
    form.append('tilezone',      sendDetails ? JSON.stringify(tilezone) : '[]')
    form.append('tileColorHex',  sendDetails ? tileColorHex : '')
    form.append('furniture',     sendDetails ? JSON.stringify(furniture) : '[]')
    form.append('lighting',      sendDetails ? JSON.stringify(lighting) : '[]')
    form.append('appliances',    sendDetails ? JSON.stringify(appliances) : '[]')
    form.append('extraNotes',    sendDetails ? extraNotes : '')

    try {
      const res  = await fetch('/api/generate', { method: 'POST', body: form })
      const data = await res.json()
      if (!res.ok) { setStatus('error'); setStatusMsg(data.error || 'Ошибка сервера'); return }
      setRemaining(data.remaining)
      setStatus('processing'); setStatusMsg('Генерирую дизайн...')
      pollPrediction(data.predictionId)
    } catch { setStatus('error'); setStatusMsg('Нет соединения с сервером.') }
  }, [imageFile, room, style, isMyStyle, wallColorHex, wallFinish,
      floorMaterial, floorColorHex, tilezone, tileColorHex,
      furniture, lighting, appliances, extraNotes, pollPrediction])

  const download = async () => {
    if (!outputUrl) return
    try {
      const blob = await (await fetch(outputUrl)).blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob); a.download = `spaceai-${style}-${Date.now()}.png`; a.click()
    } catch { window.open(outputUrl, '_blank') }
  }

  const isLoading    = status === 'uploading' || status === 'processing'
  const showTileZone = TILE_ROOMS.includes(room)

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      <nav className="nav">
        <div className="logo">Space<span className="logo-accent">AI</span></div>
        <a href="#pricing" className="nav-cta">Тарифы</a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="eyebrow">ИИ-дизайн интерьеров</div>
          <h1>Преобразите<br />пространство за<br /><em>30 секунд</em></h1>
          <p className="hero-desc">Загрузите фото, опишите параметры комнаты и получите гиперреалистичный дизайн в любом стиле. Без дизайнера, без согласований.</p>
          <a href="#generate" className="btn-primary">Попробовать бесплатно</a>
          <div className="hero-stats">
            <div><div className="stat-num">10</div><div className="stat-label">Стилей дизайна</div></div>
            <div><div className="stat-num">8K</div><div className="stat-label">Разрешение</div></div>
            <div><div className="stat-num">30 сек</div><div className="stat-label">Генерация</div></div>
          </div>
        </div>

        <div className="hero-right" id="generate">
          <div>
            <div className="panel-heading">Создайте дизайн</div>
            <div className="panel-sub">Первые 3 генерации бесплатно</div>
          </div>

          {remaining !== null && (
            <div className="quota-badge">
              <span className="quota-dot" style={{ background: remaining > 0 ? 'var(--warm)' : '#f87171' }} />
              Осталось генераций сегодня: {remaining}
            </div>
          )}

          {/* Upload */}
          {!imagePreview ? (
            <div>
              <div className="field-label">Загрузите фото помещения</div>
              <div className={`upload-zone${dragOver ? ' drag-over' : ''}`}
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}>
                <input ref={fileRef} type="file" accept="image/*"
                  onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])} />
                <div className="upload-icon">📷</div>
                <div className="upload-text">Перетащите фото или нажмите</div>
                <div className="upload-hint">JPG, PNG, WEBP — до 10 МБ</div>
              </div>
            </div>
          ) : (
            <div>
              <div className="field-label">Ваше фото</div>
              <div className="preview-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imagePreview} alt="preview" className="preview-img" />
                <button className="preview-clear" onClick={clearImage}>✕</button>
              </div>
            </div>
          )}

          {/* Room type */}
          <div>
            <div className="field-label">Тип помещения</div>
            <div className="chips">
              {Object.entries(ROOM_LABELS).map(([k, label]) => (
                <button key={k} className={`chip${room === k ? ' active' : ''}`}
                  onClick={() => setRoom(k)}>{label}</button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div>
            <div className="field-label">Стиль</div>
            <div className="style-grid">
              {Object.entries(STYLE_DISPLAY).map(([k, s]) => (
                <button key={k}
                  className={`style-chip${style === k ? ' active' : ''}${k === 'my_style' ? ' my-style-chip' : ''}`}
                  onClick={() => {
                    setStyle(k)
                    if (k !== 'my_style') {
                      setWallFinish([]); setWallColorHex(''); setWallFinishKey(''); setSchemeId('')
                      setFloorMaterial(''); setFloorColorHex(''); setFloorMaterialKey('')
                      setTilezone([]); setTileColorHex('#FFFFFF')
                      setFurniture([]); setLighting([]); setAppliances([])
                      setExtraNotes('')
                    }
                  }}>
                  <span className="em">{s.emoji}</span>{s.label}
                  {k === 'my_style' && <span className="my-style-badge">Свои параметры</span>}
                </button>
              ))}
            </div>
          </div>

          {/* ══════════════ MY STYLE WIZARD ══════════════ */}
          {isMyStyle && (
            <div className="wizard-block">

              {/* ── STEP 1: Palette ── */}
              <StepHeader step="palette" current={myStep} label="Цвет и материалы" done={paletteDone}
                onClick={() => setMyStep(s => s === 'palette' ? 'lighting' : 'palette')} />

              {myStep === 'palette' && (
                <div className="wizard-body">

                  {/* Ready schemes */}
                  <div className="field-label" style={{ marginBottom: 8 }}>Готовые палитры — один клик</div>
                  <div className="scheme-grid">
                    {COLOR_SCHEMES.map(sc => (
                      <button key={sc.id}
                        className={`scheme-card${schemeId === sc.id ? ' selected' : ''}`}
                        onClick={() => applyScheme(sc)}>
                        <div className="scheme-swatches">
                          {sc.swatches.map((hex, i) => (
                            <div key={i} className="scheme-swatch" style={{
                              background: hex,
                              border: hex === '#F0EDE8' || hex === '#F5F5F5' ? '1px solid #ddd' : 'none'
                            }} />
                          ))}
                        </div>
                        <div className="scheme-name">{sc.label}</div>
                        <div className="scheme-desc">{sc.desc}</div>
                        {schemeId === sc.id && <div className="scheme-check">✓</div>}
                      </button>
                    ))}
                  </div>

                  <div className="wizard-divider">или выбери отдельно</div>

                  {/* Wall cards */}
                  <div className="field-label" style={{ marginBottom: 8 }}>Стены</div>
                  <div className="swatch-grid">
                    {WALL_CARDS.map(card => {
                      const cardId = card.id || card.key
                      return (
                        <SwatchCard key={cardId} label={card.label} hex={card.hex}
                          selected={wallFinishKey === cardId}
                          onClick={() => applyWallCard(card)} small />
                      )
                    })}
                  </div>

                  {/* Floor cards */}
                  <div className="field-label" style={{ marginBottom: 8, marginTop: 16 }}>Пол</div>
                  <div className="swatch-grid">
                    {FLOOR_CARDS.map(card => {
                      const cardId = card.id || card.key
                      return (
                        <SwatchCard key={cardId} label={card.label} hex={card.hex}
                          selected={floorMaterialKey === cardId}
                          onClick={() => applyFloorCard(card)} small />
                      )
                    })}
                  </div>

                  {/* Current selection summary */}
                  {(wallFinish.length > 0 || floorMaterial) && (
                    <div className="selection-summary">
                      {wallFinish.length > 0 && (
                        <span className="sel-tag">
                          <span className="sel-dot" style={{ background: wallColorHex,
                            border: wallColorHex === '#FFFFFF' || wallColorHex === '#F0EDE8' ? '1px solid #ccc' : 'none' }} />
                          Стены: {WALL_CARDS.find(c => (c.id || c.key) === wallFinishKey)?.label || '—'}
                        </span>
                      )}
                      {floorMaterial && (
                        <span className="sel-tag">
                          <span className="sel-dot" style={{ background: floorColorHex,
                            border: floorColorHex === '#F0EDE8' || floorColorHex === '#D9D9D9' ? '1px solid #ccc' : 'none' }} />
                          Пол: {FLOOR_CARDS.find(c => (c.id || c.key) === floorMaterialKey)?.label || '—'}
                        </span>
                      )}
                    </div>
                  )}

                  {paletteDone && (
                    <button className="wizard-next" onClick={() => setMyStep('lighting')}>
                      Далее: освещение →
                    </button>
                  )}
                </div>
              )}

              {/* ── STEP 2: Lighting ── */}
              <StepHeader step="lighting" current={myStep} label="Освещение" done={lightingDone}
                onClick={() => setMyStep(s => s === 'lighting' ? 'palette' : 'lighting')} />

              {myStep === 'lighting' && (
                <div className="wizard-body">
                  <div className="swatch-grid">
                    {LIGHTING_CARDS.map(l => (
                      <SwatchCard key={l.key} label={l.label} icon={l.icon}
                        selected={lighting.includes(l.key)}
                        onClick={() => toggleArr(lighting, setLighting, l.key)} small />
                    ))}
                  </div>
                  <button className="wizard-next" style={{ marginTop: 12 }}
                    onClick={() => setMyStep('extras')}>
                    Готово — к деталям →
                  </button>
                </div>
              )}

              {/* ── STEP 3: Extras (tile, furniture, appliances, notes) ── */}
              <StepHeader step="extras" current={myStep} label="Детали (необязательно)" done={extrasDone}
                onClick={() => setMyStep(s => s === 'extras' ? 'lighting' : 'extras')} />

              {myStep === 'extras' && (
                <div className="wizard-body">

                  {/* Tile zones — only relevant rooms */}
                  {showTileZone && (
                    <div style={{ marginBottom: 16 }}>
                      <div className="field-label" style={{ marginBottom: 8 }}>Зоны плитки</div>
                      <div className="swatch-grid" style={{ marginBottom: 10 }}>
                        {Object.entries(TILE_ZONE_LABELS)
                          .filter(([k]) => {
                            if (room === 'kitchen') return k.startsWith('kitchen')
                            if (room === 'bathroom') return ['bath_walls','bath_floor','shower','tub_surround'].includes(k)
                            if (room === 'toilet') return k.startsWith('toilet')
                            return false
                          })
                          .map(([k, label]) => (
                            <SwatchCard key={k} label={label}
                              selected={tilezone.includes(k)}
                              onClick={() => toggleArr(tilezone, setTilezone, k)} small />
                          ))}
                      </div>
                      {tilezone.length > 0 && (
                        <>
                          <div className="field-label" style={{ marginBottom: 6 }}>Цвет плитки</div>
                          <div className="swatch-grid">
                            {TILE_CARDS.map(t => (
                              <SwatchCard key={t.key} label={t.label} hex={t.hex}
                                selected={tileColorHex === t.hex}
                                onClick={() => setTileColorHex(t.hex)} small />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Furniture */}
                  <div style={{ marginBottom: 16 }}>
                    <div className="field-label" style={{ marginBottom: 4 }}>Мебель в кадре</div>
                    <div className="adv-hint" style={{ marginBottom: 8 }}>Что должно быть в готовом дизайне</div>
                    <div className="swatch-grid">
                      {FURNITURE_CARDS.map(f => (
                        <SwatchCard key={f.key} label={f.label} icon={f.icon}
                          selected={furniture.includes(f.key)}
                          onClick={() => toggleArr(furniture, setFurniture, f.key)} small />
                      ))}
                    </div>
                  </div>

                  {/* Appliances */}
                  <div style={{ marginBottom: 16 }}>
                    <div className="field-label" style={{ marginBottom: 8 }}>Техника</div>
                    <div className="swatch-grid">
                      {APPLIANCE_CARDS.map(a => (
                        <SwatchCard key={a.key} label={a.label} icon={a.icon}
                          selected={appliances.includes(a.key)}
                          onClick={() => toggleArr(appliances, setAppliances, a.key)} small />
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <div className="field-label" style={{ marginBottom: 6 }}>Дополнительно</div>
                    <textarea className="detail-textarea"
                      placeholder="Например: много растений, рабочее место у окна..."
                      value={extraNotes} onChange={e => setExtraNotes(e.target.value)} rows={2} />
                  </div>
                </div>
              )}

              {/* Conflicts */}
              {conflicts.length > 0 && (
                <div className="conflict-box">
                  <div className="conflict-title">⚠️ Возможные конфликты</div>
                  {conflicts.map((w, i) => <div key={i} className="conflict-item">{w}</div>)}
                </div>
              )}

              {/* Live prompt preview */}
              {livePrompt && (
                <div className="prompt-preview" style={{ margin: '8px 0 0' }}>
                  <button className="prompt-preview-toggle"
                    onClick={() => setPromptPreviewOpen(o => !o)}>
                    {promptPreviewOpen ? '▾' : '▸'} Промпт для генерации
                  </button>
                  {promptPreviewOpen && <div className="prompt-text">{livePrompt}</div>}
                </div>
              )}
            </div>
          )}

          {/* Optional extras for preset styles */}
          {!isMyStyle && (
            <button className="details-toggle" onClick={() => setDetailsOpen(o => !o)}>
              {detailsOpen ? '▾ Скрыть детали' : '▸ Дополнительные настройки'}
            </button>
          )}
          {!isMyStyle && detailsOpen && (
            <div className="details-block">
              <div className="details-body">
                <div>
                  <div className="field-label" style={{ marginBottom: 8 }}>Освещение</div>
                  <div className="swatch-grid">
                    {LIGHTING_CARDS.map(l => (
                      <SwatchCard key={l.key} label={l.label} icon={l.icon}
                        selected={lighting.includes(l.key)}
                        onClick={() => toggleArr(lighting, setLighting, l.key)} small />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Status */}
          {status === 'error' && <div className="status-box error show">{statusMsg}</div>}
          {isLoading && (
            <div className="status-box loading show">
              <div className="spinner-row">
                <div className="spinner" /><span>{statusMsg}</span>
              </div>
            </div>
          )}

          {/* Result */}
          {status === 'done' && outputUrl && (
            <div className="result-wrap show">
              <div className="field-label">Результат — перетащите линию для сравнения</div>
              {imagePreview
                ? <BeforeAfterSlider before={imagePreview} after={outputUrl} />
                : /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={outputUrl} alt="Result" className="result-img" />}
              <div className="result-actions">
                <button className="btn-dl" onClick={download}>↓ Скачать</button>
                <button className="btn-regen" onClick={generate}>Ещё вариант</button>
              </div>
            </div>
          )}

          <button className="gen-btn" onClick={generate} disabled={isLoading}>
            {isLoading
              ? <><div className="spinner" style={{ borderTopColor: '#fff', borderColor: 'rgba(255,255,255,.3)' }} />Генерирую...</>
              : <>✦ Сгенерировать дизайн</>}
          </button>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="section-eyebrow">Тарифы</div>
        <h2 className="section-title">Прозрачные цены без сюрпризов</h2>
        <div className="pricing-grid">
          {[
            { name: 'Старт',     price: '$19',  period: 'в месяц', features: ['20 генераций', 'Все 10 стилей', 'HD качество', 'Коммерческое использование'], featured: false },
            { name: 'Профи',     price: '$49',  period: 'в месяц', features: ['100 генераций', 'Полная детализация', '8K качество', 'Цветовая палитра', 'Поддержка 24/7'], featured: true },
            { name: 'Агентство', price: '$149', period: 'в месяц', features: ['Безлимит', 'API доступ', 'White-label', '5 рабочих мест', 'Персональный менеджер'], featured: false },
          ].map(plan => (
            <div key={plan.name} className={`plan${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <div className="plan-badge">Популярный</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price}</div>
              <div className="plan-period">{plan.period}</div>
              <ul className="plan-features">{plan.features.map(f => <li key={f}>{f}</li>)}</ul>
              <button className="plan-btn">Начать</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="logo">Space<span className="logo-accent">AI</span></div>
        <div className="footer-copy">© {new Date().getFullYear()} SpaceAI. Все права защищены.</div>
      </footer>
    </>
  )
}
