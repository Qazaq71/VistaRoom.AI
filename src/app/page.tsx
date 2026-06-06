'use client'

import { useState, useRef, useCallback } from 'react'
import { STYLES } from '@/lib/prompts'

const ROOM_LABELS: Record<string, string> = {
  office: 'Офис', cafe: 'Кафе', shop: 'Магазин', salon: 'Салон',
  living: 'Гостиная', bedroom: 'Спальня', kitchen: 'Кухня', kids: 'Детская',
}

const FURNITURE_OPTIONS = ['Диван', 'Кровать', 'Обеденный стол', 'Рабочий стол', 'Шкаф', 'ТВ-зона', 'Кресло', 'Комод', 'Стеллаж', 'Пуф']
const LIGHTING_OPTIONS = ['Естественный свет', 'Тёплый свет', 'Холодный свет', 'Точечные светильники', 'Люстра', 'Торшер', 'Подсветка']
const MATERIAL_OPTIONS = ['Дерево', 'Бетон', 'Мрамор', 'Текстиль', 'Металл', 'Стекло', 'Кирпич', 'Штукатурка', 'Керамика']

const WALL_COLORS = ['Белые', 'Бежевые', 'Серые', 'Голубые', 'Зелёные', 'Тёмные', 'Другой цвет']
const FLOOR_MATERIALS = ['Паркет светлый', 'Паркет тёмный', 'Ламинат', 'Плитка', 'Бетон', 'Ковер', 'Мрамор']

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

export default function Home() {
  // Основные поля
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [room, setRoom] = useState('living')
  const [style, setStyle] = useState('minimalist')
  const [strength, setStrength] = useState(65)

  // Детали комнаты
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [roomSize, setRoomSize] = useState('')
  const [ceilingHeight, setCeilingHeight] = useState('')
  const [wallColor, setWallColor] = useState('')
  const [floorMaterial, setFloorMaterial] = useState('')
  const [furniture, setFurniture] = useState<string[]>([])
  const [lighting, setLighting] = useState<string[]>([])
  const [materials, setMaterials] = useState<string[]>([])
  const [extraNotes, setExtraNotes] = useState('')

  // Статус
  const [status, setStatus] = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [outputUrl, setOutputUrl] = useState<string | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [promptPreview, setPromptPreview] = useState('')

  const fileRef = useRef<HTMLInputElement>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const toggleArr = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])
  }

  const hasDetails = !!(roomSize || ceilingHeight || wallColor || floorMaterial || furniture.length || lighting.length || materials.length || extraNotes)

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = e => setImagePreview(e.target?.result as string)
    reader.readAsDataURL(file)
    setOutputUrl(null)
    setStatus('idle')
  }, [])

  const clearImage = () => {
    setImageFile(null)
    setImagePreview(null)
    setOutputUrl(null)
    setStatus('idle')
    if (fileRef.current) fileRef.current.value = ''
  }

  const pollPrediction = useCallback((id: string) => {
    let attempts = 0
    pollRef.current = setInterval(async () => {
      attempts++
      if (attempts > 90) {
        clearInterval(pollRef.current!)
        setStatus('error')
        setStatusMsg('Превышено время ожидания. Попробуйте снова.')
        return
      }
      try {
        const res = await fetch(`/api/poll?id=${id}`)
        const data = await res.json()
        if (data.status === 'succeeded' && data.outputUrl) {
          clearInterval(pollRef.current!)
          setOutputUrl(data.outputUrl)
          setStatus('done')
        } else if (data.status === 'failed') {
          clearInterval(pollRef.current!)
          setStatus('error')
          setStatusMsg(data.error || 'Генерация не удалась. Попробуйте другое фото.')
        } else {
          setStatusMsg(`Генерирую дизайн... (${Math.min(attempts * 2, 60)} сек)`)
        }
      } catch { /* сетевой сбой — продолжаем */ }
    }, 2000)
  }, [])

  const generate = useCallback(async () => {
    if (!imageFile) { setStatus('error'); setStatusMsg('Загрузите фотографию помещения'); return }
    if (pollRef.current) clearInterval(pollRef.current)

    setStatus('uploading')
    setStatusMsg('Отправляю изображение...')
    setOutputUrl(null)

    const form = new FormData()
    form.append('image', imageFile)
    form.append('room', room)
    form.append('style', style)
    form.append('strength', String(strength / 100))
    form.append('size', roomSize)
    form.append('ceilingHeight', ceilingHeight)
    form.append('wallColor', wallColor)
    form.append('floorMaterial', floorMaterial)
    form.append('furniture', JSON.stringify(furniture))
    form.append('lighting', JSON.stringify(lighting))
    form.append('materials', JSON.stringify(materials))
    form.append('extraNotes', extraNotes)

    try {
      const res = await fetch('/api/generate', { method: 'POST', body: form })
      const data = await res.json()
      if (!res.ok) { setStatus('error'); setStatusMsg(data.error || 'Ошибка сервера'); return }
      setRemaining(data.remaining)
      if (data.promptUsed) setPromptPreview(data.promptUsed)
      setStatus('processing')
      setStatusMsg('Генерирую дизайн...')
      pollPrediction(data.predictionId)
    } catch {
      setStatus('error')
      setStatusMsg('Нет соединения с сервером.')
    }
  }, [imageFile, room, style, strength, roomSize, ceilingHeight, wallColor, floorMaterial, furniture, lighting, materials, extraNotes, pollPrediction])

  const download = async () => {
    if (!outputUrl) return
    try {
      const res = await fetch(outputUrl)
      const blob = await res.blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `spaceai-${style}-${Date.now()}.png`
      a.click()
    } catch { window.open(outputUrl, '_blank') }
  }

  const isLoading = status === 'uploading' || status === 'processing'

  return (
    <>
      <nav className="nav">
        <div className="logo">Space<span className="logo-accent">AI</span></div>
        <a href="#pricing" className="nav-cta">Тарифы</a>
      </nav>

      <section className="hero">
        {/* ── Left ── */}
        <div className="hero-left">
          <div className="eyebrow">ИИ-дизайн интерьеров</div>
          <h1>Преобразите<br />пространство за<br /><em>30 секунд</em></h1>
          <p className="hero-desc">
            Загрузите фото, опишите параметры комнаты и получите
            персонализированный дизайн в любом стиле. Без дизайнера,
            без долгих согласований.
          </p>
          <a href="#generate" className="btn-primary">Попробовать бесплатно</a>
          <div className="hero-stats">
            <div><div className="stat-num">9</div><div className="stat-label">Стилей дизайна</div></div>
            <div><div className="stat-num">30 сек</div><div className="stat-label">На генерацию</div></div>
            <div><div className="stat-num">90%+</div><div className="stat-label">Маржинальность</div></div>
          </div>
        </div>

        {/* ── Right — Generator ── */}
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

          {/* Room type */}
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
              {Object.entries(STYLES).map(([k, s]) => (
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
              <input
                type="range" min={40} max={90} value={strength}
                className="slider"
                style={{ ['--pct' as string]: `${((strength - 40) / 50 * 100).toFixed(0)}%` }}
                onChange={e => setStrength(Number(e.target.value))}
              />
              <span className="slider-val">{strength}%</span>
            </div>
            <div className="slider-labels"><span>Сохранить структуру</span><span>Полное изменение</span></div>
          </div>

          {/* ── DETAILS BLOCK ── */}
          <div className="details-block">
            <button className="details-toggle" onClick={() => setDetailsOpen(o => !o)}>
              <span>Детализация комнаты</span>
              {hasDetails && <span className="details-badge">заполнено</span>}
              <span className="details-arrow" style={{ transform: detailsOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
            </button>
            <div className="details-hint">Опционально — для точного и персонализированного результата</div>

            {detailsOpen && (
              <div className="details-body">

                {/* Size + Ceiling */}
                <div className="details-row">
                  <div className="details-field">
                    <label className="field-label">Площадь комнаты</label>
                    <input
                      className="detail-input"
                      type="text"
                      placeholder="например: 20 м²"
                      value={roomSize}
                      onChange={e => setRoomSize(e.target.value)}
                    />
                  </div>
                  <div className="details-field">
                    <label className="field-label">Высота потолка</label>
                    <input
                      className="detail-input"
                      type="text"
                      placeholder="например: 2.8 м"
                      value={ceilingHeight}
                      onChange={e => setCeilingHeight(e.target.value)}
                    />
                  </div>
                </div>

                {/* Wall + Floor */}
                <div className="details-row">
                  <div className="details-field">
                    <label className="field-label">Цвет стен</label>
                    <div className="detail-chips">
                      {WALL_COLORS.map(c => (
                        <button key={c} className={`dchip${wallColor === c ? ' on' : ''}`} onClick={() => setWallColor(wallColor === c ? '' : c)}>{c}</button>
                      ))}
                    </div>
                  </div>
                  <div className="details-field">
                    <label className="field-label">Материал пола</label>
                    <div className="detail-chips">
                      {FLOOR_MATERIALS.map(f => (
                        <button key={f} className={`dchip${floorMaterial === f ? ' on' : ''}`} onClick={() => setFloorMaterial(floorMaterial === f ? '' : f)}>{f}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Furniture */}
                <div>
                  <label className="field-label">Имеющаяся мебель</label>
                  <div className="detail-chips" style={{ marginTop: 6 }}>
                    {FURNITURE_OPTIONS.map(f => (
                      <button key={f} className={`dchip${furniture.includes(f) ? ' on' : ''}`} onClick={() => toggleArr(furniture, setFurniture, f)}>{f}</button>
                    ))}
                  </div>
                </div>

                {/* Lighting */}
                <div>
                  <label className="field-label">Освещение</label>
                  <div className="detail-chips" style={{ marginTop: 6 }}>
                    {LIGHTING_OPTIONS.map(l => (
                      <button key={l} className={`dchip${lighting.includes(l) ? ' on' : ''}`} onClick={() => toggleArr(lighting, setLighting, l)}>{l}</button>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <label className="field-label">Материалы отделки</label>
                  <div className="detail-chips" style={{ marginTop: 6 }}>
                    {MATERIAL_OPTIONS.map(m => (
                      <button key={m} className={`dchip${materials.includes(m) ? ' on' : ''}`} onClick={() => toggleArr(materials, setMaterials, m)}>{m}</button>
                    ))}
                  </div>
                </div>

                {/* Extra notes */}
                <div>
                  <label className="field-label">Дополнительные пожелания</label>
                  <textarea
                    className="detail-textarea"
                    placeholder="Например: хочу рабочее место у окна, много естественного света, место для растений, без лишних деталей..."
                    value={extraNotes}
                    onChange={e => setExtraNotes(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Prompt preview */}
                {promptPreview && (
                  <div className="prompt-preview">
                    <div className="field-label" style={{ marginBottom: 4 }}>Последний использованный промпт</div>
                    <div className="prompt-text">{promptPreview}</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Status */}
          {status === 'error' && <div className="status-box error show">{statusMsg}</div>}
          {isLoading && (
            <div className="status-box loading show">
              <div className="spinner-row">
                <div className="spinner" />
                <span>{statusMsg}</span>
              </div>
            </div>
          )}

          {/* Result */}
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

          {/* Generate */}
          <button className="gen-btn" onClick={generate} disabled={isLoading}>
            {isLoading
              ? <><div className="spinner" style={{ borderTopColor: '#fff', borderColor: 'rgba(255,255,255,.3)' }} />Генерирую...</>
              : <>✦ Сгенерировать дизайн</>
            }
          </button>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="pricing-section" id="pricing">
        <div className="section-eyebrow">Тарифы</div>
        <h2 className="section-title">Прозрачные цены без сюрпризов</h2>
        <div className="pricing-grid">
          {[
            { name: 'Старт', price: '$19', period: 'в месяц', features: ['20 генераций', 'Все 9 стилей', 'HD качество', 'Коммерческое использование'], featured: false },
            { name: 'Профи', price: '$49', period: 'в месяц', features: ['100 генераций', 'Полная детализация комнаты', '4K качество', 'Пакетная загрузка', 'Поддержка 24/7'], featured: true },
            { name: 'Агентство', price: '$149', period: 'в месяц', features: ['Безлимит', 'API доступ', 'White-label', '5 рабочих мест', 'Персональный менеджер'], featured: false },
          ].map(plan => (
            <div key={plan.name} className={`plan${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <div className="plan-badge">Популярный</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price}</div>
              <div className="plan-period">{plan.period}</div>
              <ul className="plan-features">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button className="plan-btn">Начать</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="logo">Space<span className="logo-accent">AI</span></div>
        <div className="footer-copy">© 2025 SpaceAI. Все права защищены.</div>
      </footer>
    </>
  )
}
