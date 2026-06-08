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

const FURNITURE_OPTIONS = [
  { key: 'sofa',         label: 'Диван' },
  { key: 'bed',          label: 'Кровать' },
  { key: 'dining_table', label: 'Обеденный стол' },
  { key: 'desk',         label: 'Рабочий стол' },
  { key: 'wardrobe',     label: 'Шкаф' },
  { key: 'tv_unit',      label: 'ТВ-зона' },
  { key: 'armchair',     label: 'Кресло' },
  { key: 'dresser',      label: 'Комод' },
  { key: 'bookshelf',    label: 'Стеллаж' },
  { key: 'ottoman',      label: 'Пуф' },
  { key: 'bar_table',    label: 'Барный стол' },
  { key: 'kitchen_set',  label: 'Кухонный гарнитур' },
  { key: 'bathtub',      label: 'Ванна' },
  { key: 'shower_cabin', label: 'Душевая кабина' },
]

const LIGHTING_OPTIONS = [
  { key: 'natural',    label: 'Естественный свет' },
  { key: 'warm',       label: 'Тёплый свет' },
  { key: 'cool',       label: 'Холодный свет' },
  { key: 'recessed',   label: 'Точечные светильники' },
  { key: 'chandelier', label: 'Люстра' },
  { key: 'floor_lamp', label: 'Торшер' },
  { key: 'accent',     label: 'Подсветка' },
  { key: 'strip',      label: 'Светодиодная лента' },
  { key: 'sconce',     label: 'Бра' },
  { key: 'pendant',    label: 'Пендант' },
]

const APPLIANCE_OPTIONS = [
  { key: 'fridge',     label: 'Холодильник' },
  { key: 'microwave',  label: 'Микроволновка' },
  { key: 'dishwasher', label: 'Посудомоечная машина' },
  { key: 'washer',     label: 'Стиральная машина' },
  { key: 'stove',      label: 'Кухонная плита' },
  { key: 'oven',       label: 'Духовой шкаф' },
  { key: 'hood',       label: 'Вытяжка' },
  { key: 'coffee',     label: 'Кофемашина' },
  { key: 'ac',         label: 'Кондиционер' },
  { key: 'tv',         label: 'Телевизор' },
]

const WALL_COLORS_PRESET = [
  { label: 'Белый',        hex: '#FFFFFF' },
  { label: 'Бежевый',      hex: '#EFE8D8' },
  { label: 'Светло-серый', hex: '#D0D0D0' },
  { label: 'Серый',        hex: '#9E9E9E' },
  { label: 'Голубой',      hex: '#90CAF9' },
  { label: 'Мятный',       hex: '#80CBC4' },
  { label: 'Зелёный',      hex: '#81C784' },
  { label: 'Оливковый',    hex: '#9CAF6A' },
  { label: 'Жёлтый',       hex: '#FFE033' },
  { label: 'Персиковый',   hex: '#FFAB91' },
  { label: 'Розовый',      hex: '#F48FB1' },
  { label: 'Терракота',    hex: '#C97B63' },
  { label: 'Тёмно-синий',  hex: '#283593' },
  { label: 'Антрацит',     hex: '#37474F' },
  { label: 'Чёрный',       hex: '#212121' },
]

const FLOOR_MATERIALS = [
  { key: 'light_parquet', label: 'Паркет светлый' },
  { key: 'dark_parquet',  label: 'Паркет тёмный' },
  { key: 'laminate',      label: 'Ламинат' },
  { key: 'ceramic_tile',  label: 'Плитка' },
  { key: 'concrete',      label: 'Бетон' },
  { key: 'carpet',        label: 'Ковёр' },
  { key: 'marble',        label: 'Мрамор' },
  { key: 'porcelain',     label: 'Керамогранит' },
  { key: 'linoleum',      label: 'Линолеум' },
]

const WALL_FINISHES = [
  { key: 'paint',        label: 'Покраска / колеровка' },
  { key: 'wallpaper',    label: 'Обои' },
  { key: 'plaster',      label: 'Декоративная штукатурка' },
  { key: 'brick',        label: 'Кирпич' },
  { key: 'wood',         label: 'Дерево / вагонка' },
  { key: 'porcelain',    label: 'Керамогранит' },
  { key: 'marble',       label: 'Мрамор' },
  { key: 'gypsum',       label: 'Гипсовые панели' },
  { key: 'liquidwalls',  label: 'Жидкие обои' },
  { key: 'microcement',  label: 'Микроцемент' },
  { key: 'metal',        label: 'Металлические панели' },
  { key: 'glass',        label: 'Стеклянные панели' },
  { key: 'mosaic',       label: 'Мозаика' },
  { key: 'concrete',     label: 'Имитация бетона' },
  { key: 'stone',        label: 'Натуральный камень' },
  { key: 'cork',         label: 'Пробка' },
]

const TILE_ZONES = [
  { key: 'kitchen_backsplash', label: 'Фартук кухни' },
  { key: 'kitchen_floor',      label: 'Пол кухни' },
  { key: 'bath_walls',         label: 'Стены ванной' },
  { key: 'bath_floor',         label: 'Пол ванной' },
  { key: 'toilet_walls',       label: 'Стены туалета' },
  { key: 'toilet_floor',       label: 'Пол туалета' },
  { key: 'shower',             label: 'Душевая зона' },
  { key: 'tub_surround',       label: 'Вокруг ванны' },
]

const FLOOR_COLORS_PRESET = [
  { label: 'Белый',       hex: '#F5F5F5' },
  { label: 'Светлый',     hex: '#E0C9A6' },
  { label: 'Натуральный', hex: '#C8A87A' },
  { label: 'Средний',     hex: '#A0785A' },
  { label: 'Тёмный',      hex: '#5D3A1A' },
  { label: 'Серый',       hex: '#9E9E9E' },
  { label: 'Бетон',       hex: '#7B7B7B' },
  { label: 'Чёрный',      hex: '#1A1A1A' },
]

const TILE_COLORS_PRESET = [
  { label: 'Белый',        hex: '#FFFFFF' },
  { label: 'Кремовый',     hex: '#FFF0C8' },
  { label: 'Бежевый',      hex: '#E8D5B0' },
  { label: 'Песочный',     hex: '#D4B483' },
  { label: 'Светло-серый', hex: '#C8C8C8' },
  { label: 'Серый',        hex: '#9E9E9E' },
  { label: 'Антрацит',     hex: '#37474F' },
  { label: 'Голубой',      hex: '#90CAF9' },
  { label: 'Бирюзовый',    hex: '#4DB6AC' },
  { label: 'Синий',        hex: '#3949AB' },
  { label: 'Зелёный',      hex: '#66BB6A' },
  { label: 'Терракота',    hex: '#C97B63' },
  { label: 'Коричневый',   hex: '#8D6E63' },
  { label: 'Чёрный',       hex: '#212121' },
  { label: 'Мрамор белый', hex: '#F0EDE8' },
  { label: 'Мрамор серый', hex: '#B0ADA8' },
]

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'
type DetailTab = 'basic' | 'advanced'

// ─── Sub-components ───────────────────────────────────────────────────────────

function ColorPicker({ label, presets, customColor, onCustomChange, selectedPreset, onPresetClick }: {
  label: string
  presets: { label: string; hex: string }[]
  customColor: string
  onCustomChange: (v: string) => void
  selectedPreset: string
  onPresetClick: (hex: string) => void
}) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <div className="color-grid">
        {presets.map(c => (
          <button
            key={c.hex}
            title={c.label}
            className={`color-swatch${selectedPreset === c.hex ? ' selected' : ''}`}
            style={{ background: c.hex, border: c.hex === '#FFFFFF' || c.hex === '#F5F5F5' ? '1px solid #ccc' : 'none' }}
            onClick={() => onPresetClick(c.hex)}
          />
        ))}
        <div className="color-custom-wrap" title="Свой цвет">
          <input type="color" className="color-custom" value={customColor || '#ffffff'} onChange={e => onCustomChange(e.target.value)} />
          <span className="color-custom-label">Свой</span>
        </div>
      </div>
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
    <div
      ref={measuredRef}
      className="ba-slider"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      style={{ touchAction: 'none' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt="After" className="ba-img" draggable={false} />
      <div className="ba-before-clip" style={{ width: position + '%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt="Before"
          className="ba-before"
          draggable={false}
          style={{ width: containerWidth > 0 ? containerWidth + 'px' : '100%' }}
        />
      </div>
      <div className="ba-line" style={{ left: position + '%' }}>
        <div className="ba-handle">
          <div className="ba-arrow-left" />
          <div className="ba-arrow-right" />
        </div>
      </div>
      <div className="ba-label ba-label-before" style={{ opacity: position > 15 ? 1 : 0 }}>До</div>
      <div className="ba-label ba-label-after" style={{ opacity: position < 85 ? 1 : 0 }}>После</div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Home() {
  const [imageFile, setImageFile]       = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [room, setRoom]                 = useState('living')
  const [style, setStyle]               = useState('minimalist')

  // strength removed — adirik/interior-design uses prompt_strength=1.0 internally

  const isMyStyle = style === 'my_style'

  // Detail tab: 'basic' (walls, floor, lighting) or 'advanced' (tile zones, appliances, furniture, notes)
  const [detailTab, setDetailTab]       = useState<DetailTab>('basic')
  const [detailsOpen, setDetailsOpen]   = useState(false)

  // "Basic" tab fields
  const [wallPreset, setWallPreset]     = useState('')
  const [wallCustom, setWallCustom]     = useState('')
  const [wallFinish, setWallFinish]     = useState<string[]>([])
  const [floorMaterial, setFloorMaterial] = useState('')
  const [floorPreset, setFloorPreset]   = useState('')
  const [floorCustom, setFloorCustom]   = useState('')
  const [lighting, setLighting]         = useState<string[]>([])
  const [extraNotes, setExtraNotes]     = useState('')

  // "Advanced" tab fields
  const [tilezone, setTilezone]         = useState<string[]>([])
  const [tilePreset, setTilePreset]     = useState('')
  const [tileCustom, setTileCustom]     = useState('')
  const [furniture, setFurniture]       = useState<string[]>([])
  const [appliances, setAppliances]     = useState<string[]>([])

  const [status, setStatus]             = useState<Status>('idle')
  const [statusMsg, setStatusMsg]       = useState('')
  const [outputUrl, setOutputUrl]       = useState<string | null>(null)
  const [remaining, setRemaining]       = useState<number | null>(null)
  const [dragOver, setDragOver]         = useState(false)
  const [promptPreviewOpen, setPromptPreviewOpen] = useState(false)

  const fileRef = useRef<HTMLInputElement>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const toggleArr = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const wallColorHex  = wallCustom  || wallPreset
  const floorColorHex = floorCustom || floorPreset
  const tileColorHex  = tileCustom  || tilePreset

  

  // ── Live prompt preview ─────────────────────────────────────────────────────
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

  // ── Conflict detection ──────────────────────────────────────────────────────
  const conflicts = useMemo(() => {
    if (!isMyStyle) return []
    return detectConflicts(room, liveDetails)
  }, [isMyStyle, room, liveDetails])

  // ── File handling ───────────────────────────────────────────────────────────
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

  // ── Polling ─────────────────────────────────────────────────────────────────
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

  // ── Generate ────────────────────────────────────────────────────────────────
  const generate = useCallback(async () => {
    if (!imageFile) { setStatus('error'); setStatusMsg('Загрузите фотографию помещения'); return }
    if (pollRef.current) clearInterval(pollRef.current)
    setStatus('uploading'); setStatusMsg('Отправляю изображение...'); setOutputUrl(null)

    const sendDetails = isMyStyle

    const form = new FormData()
    form.append('image',        imageFile)
    form.append('room',         room)
    form.append('style',        isMyStyle ? 'my_style' : style)
    // prompt_strength is now fixed at 1.0 in route.ts (handled server-side)
    form.append('size',         '')
    form.append('ceilingHeight','')
    form.append('wallColorHex', sendDetails ? wallColorHex : '')
    form.append('wallFinish',   sendDetails ? JSON.stringify(wallFinish) : '[]')
    form.append('floorMaterial',sendDetails ? floorMaterial : '')
    form.append('floorColorHex',sendDetails ? floorColorHex : '')
    form.append('tilezone',     sendDetails ? JSON.stringify(tilezone) : '[]')
    form.append('tileColorHex', sendDetails ? tileColorHex : '')
    form.append('furniture',    sendDetails ? JSON.stringify(furniture) : '[]')
    form.append('lighting',     sendDetails ? JSON.stringify(lighting) : '[]')
    form.append('appliances',   sendDetails ? JSON.stringify(appliances) : '[]')
    form.append('extraNotes',   sendDetails ? extraNotes : '')

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

  const isLoading   = status === 'uploading' || status === 'processing'
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

          {/* ── Upload ── */}
          {!imagePreview ? (
            <div>
              <div className="field-label">Загрузите фото помещения</div>
              <div
                className={`upload-zone${dragOver ? ' drag-over' : ''}`}
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
              >
                <input ref={fileRef} type="file" accept="image/*" onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])} />
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

          {/* ── Room type ── */}
          <div>
            <div className="field-label">Тип помещения</div>
            <div className="chips">
              {Object.entries(ROOM_LABELS).map(([k, label]) => (
                <button key={k} className={`chip${room === k ? ' active' : ''}`} onClick={() => setRoom(k)}>{label}</button>
              ))}
            </div>
          </div>

          {/* ── Style ── */}
          <div>
            <div className="field-label">Стиль</div>
            <div className="style-grid">
              {Object.entries(STYLE_DISPLAY).map(([k, s]) => (
                <button
                  key={k}
                  className={`style-chip${style === k ? ' active' : ''}${k === 'my_style' ? ' my-style-chip' : ''}`}
                  onClick={() => {
                    setStyle(k)
                    if (k !== 'my_style') {
                      setWallPreset(''); setWallCustom(''); setWallFinish([])
                      setFloorMaterial(''); setFloorPreset(''); setFloorCustom('')
                      setTilezone([]); setTilePreset(''); setTileCustom('')
                      setFurniture([]); setLighting([]); setAppliances([])
                      setExtraNotes('')
                    }
                  }}
                >
                  <span className="em">{s.emoji}</span>{s.label}
                  {k === 'my_style' && <span className="my-style-badge">Свои параметры</span>}
                </button>
              ))}
            </div>
          </div>


          {/* ── my_style details panel ── */}
          {isMyStyle && (
            <div className="details-block my-style-details">
              <div className="my-style-header">
                <span className="my-style-header-icon">🎨</span>
                <div>
                  <div className="my-style-header-title">Мой стиль — настройте всё сами</div>
                  <div className="my-style-header-sub">Укажите параметры, и ИИ создаст дизайн точно под ваши предпочтения</div>
                </div>
              </div>

              {/* ── Conflict warnings ── */}
              {conflicts.length > 0 && (
                <div className="conflict-box">
                  <div className="conflict-title">⚠️ Возможные конфликты параметров</div>
                  {conflicts.map((w, i) => (
                    <div key={i} className="conflict-item">{w}</div>
                  ))}
                </div>
              )}

              {/* ── Tab switcher: Basic / Advanced ── */}
              <div className="detail-tabs">
                <button
                  className={`detail-tab${detailTab === 'basic' ? ' active' : ''}`}
                  onClick={() => setDetailTab('basic')}
                >
                  Основное
                </button>
                <button
                  className={`detail-tab${detailTab === 'advanced' ? ' active' : ''}`}
                  onClick={() => setDetailTab('advanced')}
                >
                  Детально
                </button>
              </div>

              <div className="details-body">
                {/* ════ BASIC TAB ════ */}
                {detailTab === 'basic' && (
                  <>
                    {/* Wall color */}
                    <ColorPicker
                      label="Цвет стен"
                      presets={WALL_COLORS_PRESET}
                      customColor={wallCustom}
                      onCustomChange={v => { setWallCustom(v); setWallPreset('') }}
                      selectedPreset={wallPreset}
                      onPresetClick={hex => { setWallPreset(hex); setWallCustom('') }}
                    />

                    {/* Wall finish */}
                    <div>
                      <label className="field-label">Вид отделки стен</label>
                      <div className="detail-chips" style={{ marginTop: 6 }}>
                        {WALL_FINISHES.map(f => (
                          <button key={f.key} className={`dchip${wallFinish.includes(f.key) ? ' on' : ''}`}
                            onClick={() => toggleArr(wallFinish, setWallFinish, f.key)}>{f.label}</button>
                        ))}
                      </div>
                    </div>

                    {/* Floor material */}
                    <div>
                      <label className="field-label">Материал пола</label>
                      <div className="detail-chips" style={{ marginTop: 6 }}>
                        {FLOOR_MATERIALS.map(f => (
                          <button key={f.key} className={`dchip${floorMaterial === f.key ? ' on' : ''}`}
                            onClick={() => setFloorMaterial(floorMaterial === f.key ? '' : f.key)}>{f.label}</button>
                        ))}
                      </div>
                    </div>

                    {/* Floor color */}
                    <ColorPicker
                      label="Цвет пола"
                      presets={FLOOR_COLORS_PRESET}
                      customColor={floorCustom}
                      onCustomChange={v => { setFloorCustom(v); setFloorPreset('') }}
                      selectedPreset={floorPreset}
                      onPresetClick={hex => { setFloorPreset(hex); setFloorCustom('') }}
                    />

                    {/* Lighting */}
                    <div>
                      <label className="field-label">Освещение</label>
                      <div className="detail-chips" style={{ marginTop: 6 }}>
                        {LIGHTING_OPTIONS.map(l => (
                          <button key={l.key} className={`dchip${lighting.includes(l.key) ? ' on' : ''}`}
                            onClick={() => toggleArr(lighting, setLighting, l.key)}>{l.label}</button>
                        ))}
                      </div>
                    </div>

                    {/* Extra notes — in basic tab for prominence */}
                    <div>
                      <label className="field-label">Дополнительные пожелания</label>
                      <textarea className="detail-textarea"
                        placeholder="Например: рабочее место у окна, много света, место для растений..."
                        value={extraNotes} onChange={e => setExtraNotes(e.target.value)} rows={3} />
                    </div>
                  </>
                )}

                {/* ════ ADVANCED TAB ════ */}
                {detailTab === 'advanced' && (
                  <>
                    {/* Tile zones — only for relevant rooms */}
                    {showTileZone ? (
                      <div>
                        <label className="field-label">Зоны кафеля / мрамора / керамогранита</label>
                        <div className="detail-chips" style={{ marginTop: 6 }}>
                          {TILE_ZONES.map(z => (
                            <button key={z.key} className={`dchip${tilezone.includes(z.key) ? ' on' : ''}`}
                              onClick={() => toggleArr(tilezone, setTilezone, z.key)}>{z.label}</button>
                          ))}
                        </div>
                        <div style={{ marginTop: 12 }}>
                          <ColorPicker
                            label="Цвет кафеля"
                            presets={TILE_COLORS_PRESET}
                            customColor={tileCustom}
                            onCustomChange={v => { setTileCustom(v); setTilePreset('') }}
                            selectedPreset={tilePreset}
                            onPresetClick={hex => { setTilePreset(hex); setTileCustom('') }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="adv-note">
                        Зоны кафеля доступны для кухни, ванной и туалета. Выберите нужный тип помещения выше.
                      </div>
                    )}

                    {/* Furniture */}
                    <div>
                      <label className="field-label">Мебель</label>
                      <div className="adv-hint">Указывайте только предметы, которые уже есть на фото или заведомо помещаются в комнату</div>
                      <div className="detail-chips" style={{ marginTop: 6 }}>
                        {FURNITURE_OPTIONS.map(f => (
                          <button key={f.key} className={`dchip${furniture.includes(f.key) ? ' on' : ''}`}
                            onClick={() => toggleArr(furniture, setFurniture, f.key)}>{f.label}</button>
                        ))}
                      </div>
                    </div>

                    {/* Appliances */}
                    <div>
                      <label className="field-label">Бытовая техника</label>
                      <div className="detail-chips" style={{ marginTop: 6 }}>
                        {APPLIANCE_OPTIONS.map(a => (
                          <button key={a.key} className={`dchip${appliances.includes(a.key) ? ' on' : ''}`}
                            onClick={() => toggleArr(appliances, setAppliances, a.key)}>{a.label}</button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* ── Live prompt preview (both tabs) ── */}
                {livePrompt && (
                  <div className="prompt-preview">
                    <button
                      className="prompt-preview-toggle"
                      onClick={() => setPromptPreviewOpen(o => !o)}
                    >
                      {promptPreviewOpen ? '▾' : '▸'} Промпт для генерации
                    </button>
                    {promptPreviewOpen && (
                      <div className="prompt-text">{livePrompt}</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Optional detail toggle for preset styles ── */}
          {!isMyStyle && (
            <button className="details-toggle" onClick={() => setDetailsOpen(o => !o)}>
              {detailsOpen ? '▾ Скрыть детали' : '▸ Дополнительные настройки'}
            </button>
          )}
          {!isMyStyle && detailsOpen && (
            <div className="details-block">
              <div className="details-body">
                <ColorPicker
                  label="Цвет стен"
                  presets={WALL_COLORS_PRESET}
                  customColor={wallCustom}
                  onCustomChange={v => { setWallCustom(v); setWallPreset('') }}
                  selectedPreset={wallPreset}
                  onPresetClick={hex => { setWallPreset(hex); setWallCustom('') }}
                />
                <ColorPicker
                  label="Цвет пола"
                  presets={FLOOR_COLORS_PRESET}
                  customColor={floorCustom}
                  onCustomChange={v => { setFloorCustom(v); setFloorPreset('') }}
                  selectedPreset={floorPreset}
                  onPresetClick={hex => { setFloorPreset(hex); setFloorCustom('') }}
                />
                <div>
                  <label className="field-label">Освещение</label>
                  <div className="detail-chips" style={{ marginTop: 6 }}>
                    {LIGHTING_OPTIONS.map(l => (
                      <button key={l.key} className={`dchip${lighting.includes(l.key) ? ' on' : ''}`}
                        onClick={() => toggleArr(lighting, setLighting, l.key)}>{l.label}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Status ── */}
          {status === 'error' && <div className="status-box error show">{statusMsg}</div>}
          {isLoading && (
            <div className="status-box loading show">
              <div className="spinner-row">
                <div className="spinner" /><span>{statusMsg}</span>
              </div>
            </div>
          )}

          {/* ── Result ── */}
          {status === 'done' && outputUrl && (
            <div className="result-wrap show">
              <div className="field-label">Результат — перетащите линию для сравнения</div>
              {imagePreview ? (
                <BeforeAfterSlider before={imagePreview} after={outputUrl} />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={outputUrl} alt="Result" className="result-img" />
              )}
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
