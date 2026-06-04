'use client'

import { useState, useRef, useCallback } from 'react'
import { STYLES, ROOM_NAMES } from '@/lib/prompts'

const ROOMS = Object.entries(ROOM_NAMES).map(([k, v]) => ({
  key: k,
  label: v.split(' ')[0].charAt(0).toUpperCase() + v.split(' ')[0].slice(1),
  fullLabel: v,
}))

const ROOM_LABELS: Record<string, string> = {
  office: 'Офис', cafe: 'Кафе', shop: 'Магазин', salon: 'Салон',
  living: 'Гостиная', bedroom: 'Спальня', kitchen: 'Кухня', kids: 'Детская',
}

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

export default function Home() {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [room, setRoom] = useState('office')
  const [style, setStyle] = useState('minimalist')
  const [strength, setStrength] = useState(65)
  const [status, setStatus] = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [outputUrl, setOutputUrl] = useState<string | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = e => setImagePreview(e.target?.result as string)
    reader.readAsDataURL(file)
    setOutputUrl(null)
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
      if (attempts > 90) { // max 3 min
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
          setStatusMsg(`Генерирую дизайн... (~${Math.min(attempts * 2, 30)} сек)`)
        }
      } catch {
        // network hiccup, keep polling
      }
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

    try {
      const res = await fetch('/api/generate', { method: 'POST', body: form })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setStatusMsg(data.error || 'Ошибка сервера')
        return
      }

      setRemaining(data.remaining)
      setStatus('processing')
      setStatusMsg('Генерирую дизайн...')
      pollPrediction(data.predictionId)
    } catch {
      setStatus('error')
      setStatusMsg('Нет соединения с сервером. Проверьте интернет.')
    }
  }, [imageFile, room, style, strength, pollPrediction])

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
      {/* ── Nav ── */}
      <nav className="nav">
        <div className="logo">Space<span className="logo-accent">AI</span></div>
        <a href="#pricing" className="nav-cta">Тарифы</a>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        {/* Left */}
        <div className="hero-left">
          <div className="eyebrow">ИИ-дизайн интерьеров</div>
          <h1>Преобразите<br />пространство за<br /><em>30 секунд</em></h1>
          <p className="hero-desc">
            Загрузите фото вашего офиса, кафе или квартиры и получите
            профессиональный дизайн в любом стиле. Без дизайнера, без
            долгих согласований.
          </p>
          <a href="#generate" className="btn-primary">Попробовать бесплатно</a>
          <div className="hero-stats">
            <div><div className="stat-num">9</div><div className="stat-label">Стилей дизайна</div></div>
            <div><div className="stat-num">30 сек</div><div className="stat-label">На генерацию</div></div>
            <div><div className="stat-num">90%+</div><div className="stat-label">Маржинальность</div></div>
          </div>
        </div>

        {/* Right — Generator */}
        <div className="hero-right" id="generate">
          <div>
            <div className="panel-heading">Попробуйте прямо сейчас</div>
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
                <button className="preview-clear" onClick={clearImage} title="Удалить">✕</button>
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

          {/* Status */}
          {status === 'error' && (
            <div className={`status-box error show`}>{statusMsg}</div>
          )}
          {isLoading && (
            <div className={`status-box loading show`}>
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
            {isLoading ? (
              <><div className="spinner" style={{ borderTopColor: '#fff', borderColor: 'rgba(255,255,255,.3)' }} />Генерирую...</>
            ) : (
              <>✦ Сгенерировать дизайн</>
            )}
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
            { name: 'Профи', price: '$49', period: 'в месяц', features: ['100 генераций', 'Приоритетная обработка', '4K качество', 'Пакетная загрузка', 'Поддержка 24/7'], featured: true },
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
