'use client'

import { useState, useRef, useCallback } from 'react'

// Style display data — only used in frontend, never sent to server
const STYLE_DISPLAY: Record<string, { label: string; emoji: string }> = {
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
  { label: 'Белый',    hex: '#FFFFFF' },
  { label: 'Бежевый',  hex: '#F5F0E8' },
  { label: 'Светло-серый', hex: '#D9D9D9' },
  { label: 'Серый',    hex: '#9E9E9E' },
  { label: 'Голубой',  hex: '#B3D9F2' },
  { label: 'Мятный',   hex: '#B2DFDB' },
  { label: 'Зелёный',  hex: '#A5C8A0' },
  { label: 'Оливковый',hex: '#A8A87A' },
  { label: 'Жёлтый',  hex: '#FFF176' },
  { label: 'Персиковый',hex: '#FFCCBC' },
  { label: 'Розовый',  hex: '#F8BBD0' },
  { label: 'Терракота',hex: '#C97B63' },
  { label: 'Тёмно-синий',hex: '#283593' },
  { label: 'Антрацит', hex: '#37474F' },
  { label: 'Чёрный',   hex: '#212121' },
]

const FLOOR_MATERIALS = [
  { key: 'light_parquet',  label: 'Паркет светлый' },
  { key: 'dark_parquet',   label: 'Паркет тёмный' },
  { key: 'laminate',       label: 'Ламинат' },
  { key: 'ceramic_tile',   label: 'Плитка' },
  { key: 'concrete',       label: 'Бетон' },
  { key: 'carpet',         label: 'Ковёр' },
  { key: 'marble',         label: 'Мрамор' },
  { key: 'porcelain',      label: 'Керамогранит' },
  { key: 'linoleum',       label: 'Линолеум' },
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
  { label: 'Белый',     hex: '#F5F5F5' },
  { label: 'Светлый',   hex: '#E0C9A6' },
  { label: 'Натуральный', hex: '#C8A87A' },
  { label: 'Средний',   hex: '#A0785A' },
  { label: 'Тёмный',    hex: '#5D3A1A' },
  { label: 'Серый',     hex: '#9E9E9E' },
  { label: 'Бетон',     hex: '#7B7B7B' },
  { label: 'Чёрный',    hex: '#1A1A1A' },
]

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

function ColorPicker({ label, presets, customColor, onCustomChange, selectedPreset, onPresetClick }:{
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

export default function Home() {
  const [imageFile, setImageFile]     = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [room, setRoom]               = useState('living')
  const [style, setStyle]             = useState('minimalist')
  const [strength, setStrength]       = useState(70)

  const [detailsOpen, setDetailsOpen] = useState(false)
  const [roomSize, setRoomSize]       = useState('')
  const [ceilingHeight, setCeilingHeight] = useState('')

  const [wallPreset, setWallPreset]   = useState('')
  const [wallCustom, setWallCustom]   = useState('')
  const [wallFinish, setWallFinish]   = useState<string[]>([])

  const [floorMaterial, setFloorMaterial] = useState('')
  const [floorPreset, setFloorPreset] = useState('')
  const [floorCustom, setFloorCustom] = useState('')

  const [tilezone, setTilezone]       = useState<string[]>([])
  const [furniture, setFurniture]     = useState<string[]>([])
  const [lighting, setLighting]       = useState<string[]>([])
  const [appliances, setAppliances]   = useState<string[]>([])
  const [extraNotes, setExtraNotes]   = useState('')

  const [status, setStatus]           = useState<Status>('idle')
  const [statusMsg, setStatusMsg]     = useState('')
  const [outputUrl, setOutputUrl]     = useState<string | null>(null)
  const [remaining, setRemaining]     = useState<number | null>(null)
  const [dragOver, setDragOver]       = useState(false)
  const [promptPreview, setPromptPreview] = useState('')

  const fileRef  = useRef<HTMLInputElement>(null)
  const pollRef  = useRef<ReturnType<typeof setInterval> | null>(null)

  const toggleArr = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const wallColorHex  = wallCustom  || wallPreset
  const floorColorHex = floorCustom || floorPreset

  const hasDetails = !!(roomSize || ceilingHeight || wallPreset || wallCustom || wallFinish.length ||
    floorMaterial || floorPreset || floorCustom || tilezone.length ||
    furniture.length || lighting.length || appliances.length || extraNotes)

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
      } catch { /* продолжаем */ }
    }, 2000)
  }, [])

  const generate = useCallback(async () => {
    if (!imageFile) { setStatus('error'); setStatusMsg('Загрузите фотографию помещения'); return }
    if (pollRef.current) clearInterval(pollRef.current)
    setStatus('uploading'); setStatusMsg('Отправляю изображение...'); setOutputUrl(null)

    const form = new FormData()
    form.append('image',        imageFile)
    form.append('room',         room)
    form.append('style',        style)
    form.append('strength',    String(strength / 100))
    form.append('size',         roomSize)
    form.append('ceilingHeight',ceilingHeight)
    form.append('wallColor',    wallPreset ? 'custom' : '')
    form.append('wallColorHex', wallColorHex)
    form.append('wallFinish',   JSON.stringify(wallFinish))
    form.append('floorMaterial',floorMaterial)
    form.append('floorColorHex',floorColorHex)
    form.append('tilezone',     JSON.stringify(tilezone))
    form.append('furniture',    JSON.stringify(furniture))
    form.append('lighting',     JSON.stringify(lighting))
    form.append('appliances',   JSON.stringify(appliances))
    form.append('extraNotes',   extraNotes)

    try {
      const res  = await fetch('/api/generate', { method: 'POST', body: form })
      const data = await res.json()
      if (!res.ok) { setStatus('error'); setStatusMsg(data.error || 'Ошибка сервера'); return }
      setRemaining(data.remaining)
      if (data.promptUsed) setPromptPreview(data.promptUsed)
      setStatus('processing'); setStatusMsg('Генерирую дизайн...')
      pollPrediction(data.predictionId)
    } catch { setStatus('error'); setStatusMsg('Нет соединения с сервером.') }
  }, [imageFile, room, style, strength, roomSize, ceilingHeight, wallPreset, wallColorHex, wallFinish, floorMaterial, floorColorHex, tilezone, furniture, lighting, appliances, extraNotes, pollPrediction])

  const download = async () => {
    if (!outputUrl) return
    try {
      const blob = await (await fetch(outputUrl)).blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob); a.download = `spaceai-${style}-${Date.now()}.png`; a.click()
    } catch { window.open(outputUrl, '_blank') }
  }

  const isLoading = status === 'uploading' || status === 'processing'
  const showTileZone = TILE_ROOMS.includes(room)

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
            <div><div className="stat-num">9</div><div className="stat-label">Стилей дизайна</div></div>
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
                <img src={imagePreview} alt="preview" className="preview-img" />
                <button className="preview-clear" onClick={clearImage}>✕</button>
              </div>
            </div>
          )}

          {/* Room */}
          <div>
            <div className="field-label">Тип помещения</div>
            <div className="chips">
              {Object.entries(ROOM_LABELS).map(([k, label]) => (
                <button key={k} className={`chip${room === k ? ' active' : ''}`} onClick={() => setRoom(k)}>{label}</button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div>
            <div className="field-label">Стиль</div>
            <div className="style-grid">
              {Object.entries(STYLE_DISPLAY).map(([k, s]) => (
                <button key={k} className={`style-chip${style === k ? ' active' : ''}`} onClick={() => setStyle(k)}>
                  <span className="em">{s.emoji}</span>{s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Strength */}
          <div>
            <div className="field-label">Сила преобразования</div>
            <div className="slider-wrap">
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>Мягко</span>
              <input type="range" min={50} max={95} value={strength} className="slider"
                style={{ ['--pct' as string]: `${((strength - 50) / 45 * 100).toFixed(0)}%` }}
                onChange={e => setStrength(Number(e.target.value))} />
              <span className="slider-val">{strength}%</span>
            </div>
            <div className="slider-labels"><span>Сохранить структуру</span><span>Полное изменение</span></div>
          </div>

          {/* ── DETAILS ── */}
          <div className="details-block">
            <button className="details-toggle" onClick={() => setDetailsOpen(o => !o)}>
              <span>Детализация комнаты</span>
              {hasDetails && <span className="details-badge">заполнено</span>}
              <span className="details-arrow" style={{ transform: detailsOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
            </button>
            <div className="details-hint">Опционально — для максимально точного и реалистичного результата</div>

            {detailsOpen && (
              <div className="details-body">

                {/* Size + Ceiling */}
                <div className="details-row">
                  <div className="details-field">
                    <label className="field-label">Площадь</label>
                    <input className="detail-input" placeholder="20 м²" value={roomSize} onChange={e => setRoomSize(e.target.value)} />
                  </div>
                  <div className="details-field">
                    <label className="field-label">Высота потолка</label>
                    <input className="detail-input" placeholder="2.8 м" value={ceilingHeight} onChange={e => setCeilingHeight(e.target.value)} />
                  </div>
                </div>

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

                {/* Tile zones — only for kitchen/bathroom/toilet */}
                {showTileZone && (
                  <div>
                    <label className="field-label">Зоны кафеля / мрамора / керамогранита</label>
                    <div className="detail-chips" style={{ marginTop: 6 }}>
                      {TILE_ZONES.map(z => (
                        <button key={z.key} className={`dchip${tilezone.includes(z.key) ? ' on' : ''}`}
                          onClick={() => toggleArr(tilezone, setTilezone, z.key)}>{z.label}</button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Furniture */}
                <div>
                  <label className="field-label">Мебель</label>
                  <div className="detail-chips" style={{ marginTop: 6 }}>
                    {FURNITURE_OPTIONS.map(f => (
                      <button key={f.key} className={`dchip${furniture.includes(f.key) ? ' on' : ''}`}
                        onClick={() => toggleArr(furniture, setFurniture, f.key)}>{f.label}</button>
                    ))}
                  </div>
                </div>

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

                {/* Extra notes */}
                <div>
                  <label className="field-label">Дополнительные пожелания</label>
                  <textarea className="detail-textarea"
                    placeholder="Например: рабочее место у окна, много света, место для растений..."
                    value={extraNotes} onChange={e => setExtraNotes(e.target.value)} rows={3} />
                </div>

                {/* Prompt preview */}
                {promptPreview && (
                  <div className="prompt-preview">
                    <div className="field-label" style={{ marginBottom: 4 }}>Промпт для генерации</div>
                    <div className="prompt-text">{promptPreview}</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {status === 'error' && <div className="status-box error show">{statusMsg}</div>}
          {isLoading && (
            <div className="status-box loading show">
              <div className="spinner-row">
                <div className="spinner" /><span>{statusMsg}</span>
              </div>
            </div>
          )}

          {status === 'done' && outputUrl && (
            <div className="result-wrap show">
              <div className="field-label">Результат</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={outputUrl} alt="Сгенерированный дизайн" className="result-img" />
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
            { name: 'Старт',     price: '$19', period: 'в месяц', features: ['20 генераций', 'Все 9 стилей', 'HD качество', 'Коммерческое использование'], featured: false },
            { name: 'Профи',     price: '$49', period: 'в месяц', features: ['100 генераций', 'Полная детализация', '8K качество', 'Цветовая палитра', 'Поддержка 24/7'], featured: true },
            { name: 'Агентство', price: '$149',period: 'в месяц', features: ['Безлимит', 'API доступ', 'White-label', '5 рабочих мест', 'Персональный менеджер'], featured: false },
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
