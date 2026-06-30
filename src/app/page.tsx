'use client'

import { useState, useRef, useCallback, useMemo } from 'react'
import { buildEditPrompt, detectConflicts, type RoomDetails } from '@/lib/prompts'
import StylePicker from '@/app/components/StylePicker'
import RoomTypeSelector from '@/app/components/RoomTypeSelector'

// ─── Static data ──────────────────────────────────────────────────────────────

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
    swatches: ['#FFFFFF', '#D4B896'],
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
    swatches: ['#81C784', '#D4B896'],
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
type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'
type MyStyleStep = 'palette' | 'lighting' | 'extras'

// ─── Sub-components ───────────────────────────────────────────────────────────

function Toast({ msg, type, onDismiss }: { msg: string; type: 'success' | 'error'; onDismiss: () => void }) {
  return (
    <div className={`toast toast-${type}`} role="alert">
      <span>{type === 'success' ? '✓' : '✕'}</span>
      <span>{msg}</span>
      <button className="toast-close" onClick={onDismiss} aria-label="Закрыть">✕</button>
    </div>
  )
}

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

// ─────────────────────────────────────────────────────────────────────────────

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


  const [detailsOpen, setDetailsOpen] = useState(false)

  const [status, setStatus]       = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [outputUrl, setOutputUrl] = useState<string | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [dragOver, setDragOver]   = useState(false)
  const [promptPreviewOpen, setPromptPreviewOpen] = useState(false)

  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null)

  const showToast = useCallback((msg: string, type: 'success' | 'error') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }, [])

  const saveImage = useCallback(async () => {
    if (!outputUrl || saveStatus === 'saving') return
    setSaveStatus('saving')
    try {
      const res = await fetch('/api/save-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ outputUrl }),
      })
      const data = await res.json()
      if (!res.ok || !data.savedUrl) {
        throw new Error(data.error || 'Ошибка сохранения')
      }
      setOutputUrl(data.savedUrl)
      setSaveStatus('saved')
      showToast('Изображение успешно сохранено', 'success')
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Ошибка сохранения'
      setSaveStatus('error')
      showToast(msg, 'error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    }
  }, [outputUrl, saveStatus, showToast])

  const fileRef = useRef<HTMLInputElement>(null)
  const pollRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleArr = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  // Apply a color scheme
  const applyScheme = useCallback((scheme: typeof COLOR_SCHEMES[0]) => {
    setSchemeId(scheme.id)
    setWallFinish([scheme.wallFinish])
    setWallColorHex(scheme.wallColorHex)
    const wallCard = WALL_CARDS.find(c => c.key === scheme.wallFinish && c.colorHex === scheme.wallColorHex)
    setWallFinishKey(wallCard ? (wallCard.id || wallCard.key) : scheme.wallFinish)
    setFloorMaterial(scheme.floorMaterial)
    setFloorColorHex(scheme.floorColorHex)
    const floorCard = FLOOR_CARDS.find(c => c.key === scheme.floorMaterial && c.colorHex === scheme.floorColorHex)
    setFloorMaterialKey(floorCard ? (floorCard.id || floorCard.key) : scheme.floorMaterial)
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

  const [billingYearly, setBillingYearly] = useState(false)

  const clearImage = () => {
    setImageFile(null); setImagePreview(null); setOutputUrl(null); setStatus('idle')
    setSaveStatus('idle')
    if (fileRef.current) fileRef.current.value = ''
  }

  const handleStyleChange = useCallback((s: string) => {
    setStyle(s)
    if (s !== 'my_style') {
      setWallFinish([]); setWallColorHex(''); setWallFinishKey(''); setSchemeId('')
      setFloorMaterial(''); setFloorColorHex(''); setFloorMaterialKey('')
      setTilezone([]); setTileColorHex('#FFFFFF')
      setFurniture([]); setLighting([]); setAppliances([])
      setExtraNotes('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pollPrediction = useCallback((id: string, statusUrl: string | null) => {
    let attempts = 0
    const startTime = Date.now()
    const MAX_ATTEMPTS = 45 // ~6 min max with backoff

    const tick = async () => {
      attempts++
      if (attempts > MAX_ATTEMPTS) {
        pollRef.current = null
        setStatus('error')
        setStatusMsg('Превышено время ожидания. Попробуйте снова.')
        return
      }

      try {
        const statusParam = statusUrl ? `&statusUrl=${encodeURIComponent(statusUrl)}` : ''
        const res = await fetch(`/api/poll?id=${id}${statusParam}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        if (data.status === 'succeeded' && data.outputUrl) {
          pollRef.current = null
          setOutputUrl(data.outputUrl)
          setStatus('done')
          return
        }
        if (data.status === 'failed') {
          pollRef.current = null
          setStatus('error')
          setStatusMsg(data.error || 'Генерация не удалась.')
          return
        }
        // IN_PROGRESS / IN_QUEUE — update elapsed and reschedule
        const elapsed = Math.round((Date.now() - startTime) / 1000)
        setStatusMsg(`Генерирую дизайн... (${elapsed} сек)`)
      } catch {
        // network or HTTP error — will retry
      }

      // Exponential backoff: 4s → 12s cap
      const delay = Math.min(4000 * Math.pow(1.2, Math.min(attempts - 1, 10)), 12000)
      pollRef.current = setTimeout(tick, delay)
    }

    pollRef.current = setTimeout(tick, 4000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generate = useCallback(async () => {
    if (!imageFile) { setStatus('error'); setStatusMsg('Загрузите фотографию помещения'); return }
    if (pollRef.current) { clearTimeout(pollRef.current); pollRef.current = null }
    setStatus('uploading'); setStatusMsg('Отправляю изображение...'); setOutputUrl(null)

    const sendDetails = isMyStyle
    const form = new FormData()
    form.append('image',         imageFile)
    form.append('room',          room)
    form.append('style',         isMyStyle ? 'my_style' : style)
    form.append('mode',          'style')
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
      if (data.outputUrl) {
        setOutputUrl(data.outputUrl); setStatus('done')
      } else if (data.predictionId) {
        setStatus('processing'); setStatusMsg('Генерирую дизайн...')
        pollPrediction(data.predictionId, data.statusUrl ?? null)
      } else {
        setStatus('error'); setStatusMsg(data.error || 'Ошибка запуска генерации.')
      }
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
        <div className="logo">VistaRoom<span className="logo-accent">-AI</span></div>
        <a href="#pricing" className="nav-cta">Тарифы</a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="eyebrow">ИИ-дизайн интерьеров</div>
          <h1>Преобразите<br />пространство за<br /><em>30 секунд</em></h1>
          <p className="hero-desc">Загрузите фото, опишите параметры комнаты и получите гиперреалистичный дизайн в любом стиле. Без дизайнера, без согласований.</p>
          <a href="#generate" className="btn-primary">Попробовать бесплатно</a>
          <div className="hero-stats">
            <div><div className="stat-num">20+</div><div className="stat-label">Стилей дизайна</div></div>
            <div><div className="stat-num">3</div><div className="stat-label">Бесплатно</div></div>
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
          <RoomTypeSelector selectedRoomType={room} onRoomTypeChange={setRoom} />

          {/* Style */}
          <StylePicker
            selectedStyle={style}
            onStyleChange={handleStyleChange}
          />
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

          {/* Toast */}
          {toast && (
            <Toast msg={toast.msg} type={toast.type} onDismiss={() => setToast(null)} />
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
                {saveStatus !== 'saved' && (
                  <button
                    className="btn-save"
                    onClick={saveImage}
                    disabled={saveStatus === 'saving'}
                  >
                    {saveStatus === 'saving'
                      ? <><div className="spinner spinner-sm" />Сохраняем...</>
                      : saveStatus === 'error'
                        ? '↻ Повторить'
                        : '☁ Сохранить'}
                  </button>
                )}
                {saveStatus === 'saved' && (
                  <span className="btn-saved">✓ Сохранено</span>
                )}
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
        <h2 className="section-title">Дизайнер берёт от $500 за проект.<br />Мы — от $12 в месяц.</h2>

        {/* Billing toggle */}
        <div className="billing-toggle">
          <span className={!billingYearly ? 'toggle-label active' : 'toggle-label'}>Месяц</span>
          <button
            className={`toggle-switch${billingYearly ? ' on' : ''}`}
            onClick={() => setBillingYearly(b => !b)}
            aria-label="Переключить период оплаты"
          >
            <span className="toggle-knob" />
          </button>
          <span className={billingYearly ? 'toggle-label active' : 'toggle-label'}>
            Год <span className="toggle-save">−2 месяца бесплатно</span>
          </span>
        </div>

        <div className="pricing-grid">
          {[
            {
              name: 'Старт',
              price: '$12',
              priceYear: '$10',
              saveYear: '$24',
              period: 'в месяц',
              sub: 'Для домашнего использования',
              features: [
                '30 генераций в месяц',
                'Все 10 стилей дизайна',
                'Режим «Мой стиль»',
                'Скачивание результата',
              ],
              featured: false,
              badge: null,
            },
            {
              name: 'Профи',
              price: '$34',
              priceYear: '$28',
              saveYear: '$72',
              period: 'в месяц',
              sub: 'Для дизайнеров и риелторов',
              features: [
                '200 генераций в месяц',
                'Все 10 стилей дизайна',
                'Режим «Мой стиль»',
                'Без водяного знака',
                'Приоритетная генерация',
              ],
              featured: true,
              badge: 'Популярный',
            },
            {
              name: 'Агентство',
              price: '$99',
              priceYear: '$82',
              saveYear: '$204',
              period: 'в месяц',
              sub: 'Для команд и агентств',
              features: [
                '600 генераций в месяц',
                'Все 10 стилей дизайна',
                'Режим «Мой стиль»',
                'Без водяного знака',
                'До 5 пользователей',
                'Коммерческое использование',
                'Приоритетная поддержка',
              ],
              featured: false,
              badge: 'Лучшая ценность',
            },
          ].map(plan => (
            <div key={plan.name} className={`plan${plan.featured ? ' featured' : ''}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-sub-name">{plan.sub}</div>
              <div className="plan-price">
                {billingYearly ? plan.priceYear : plan.price}
                {billingYearly && <span className="plan-price-old">{plan.price}</span>}
              </div>
              <div className="plan-period">
                {billingYearly
                  ? <><span className="plan-save-badge">Экономия {plan.saveYear}/год</span></>
                  : <>{plan.period}</>
                }
              </div>
              <ul className="plan-features">{plan.features.map(f => <li key={f}>{f}</li>)}</ul>
              <button className="plan-btn">
                {billingYearly ? 'Оплатить за год' : 'Начать'}
              </button>
            </div>
          ))}
        </div>
        <p className="pricing-footer-note">Все планы включают 3 бесплатные генерации без регистрации. Отмена подписки в любой момент.</p>
      </section>

      <footer>
        <div className="logo">VistaRoom<span className="logo-accent">-AI</span></div>
        <div className="footer-copy">© {new Date().getFullYear()} VistaRoom-AI. Все права защищены.</div>
      </footer>
    </>
  )
}
