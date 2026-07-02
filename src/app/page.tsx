'use client'

import { useState, useRef, useCallback, useMemo } from 'react'
import { buildEditPrompt, detectConflicts, type RoomDetails } from '@/lib/prompts'
import StylePicker from '@/app/components/StylePicker'
import RoomTypeSelector from '@/app/components/RoomTypeSelector'
import RoomSettings, { StepHeader, type MyStyleStep } from '@/app/components/RoomSettings'
import MyStylePalette from '@/app/components/MyStylePalette'
import ResultPanel from '@/app/components/ResultPanel'

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

// ─────────────────────────────────────────────────────────────────────────────

// ─── Main component ───────────────────────────────────────────────────────────

const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

function createTestMask(): Promise<Blob> {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1024
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, 1024, 1024)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(256, 256, 512, 512)
  return new Promise(resolve => canvas.toBlob(b => resolve(b!), 'image/png'))
}

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


  const [status, setStatus]       = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [outputUrl, setOutputUrl] = useState<string | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [dragOver, setDragOver]   = useState(false)
  const [promptPreviewOpen, setPromptPreviewOpen] = useState(false)
  const [mode, setMode] = useState<'style' | 'partial' | 'clear'>('style')

  const fileRef      = useRef<HTMLInputElement>(null)
  const activeGenRef = useRef(0)   // incremented on each generate() call; stale upload completions check this

  const POLL_TIMEOUT_MS = 5 * 60 * 1000

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

  const paletteDone = !!(wallFinish.length && floorMaterial)

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
    activeGenRef.current++
    setImageFile(null); setImagePreview(null); setOutputUrl(null); setStatus('idle')
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


  const generate = useCallback(async () => {
    if (!imageFile) { setStatus('error'); setStatusMsg('Загрузите фотографию помещения'); return }

    const currentGenId = ++activeGenRef.current

    setStatus('uploading'); setStatusMsg('Отправляю изображение...'); setOutputUrl(null)

    const sendDetails = isMyStyle
    const form = new FormData()
    form.append('image',         imageFile)
    form.append('room',          room)
    form.append('style',         isMyStyle ? 'my_style' : style)
    form.append('mode',          mode)
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
      if (mode === 'partial' || mode === 'clear') {
        const maskBlob = await createTestMask()
        form.append('mask', maskBlob, 'mask.png')
      }

      const res = await fetch('/api/generate', { method: 'POST', body: form })

      if (activeGenRef.current !== currentGenId) return

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}))
        setStatus('error'); setStatusMsg(errBody.error || 'Ошибка сервера')
        return
      }
      const data = await res.json()
      setRemaining(data.remaining)
      if (data.outputUrl) {
        setOutputUrl(data.outputUrl); setStatus('done')
      } else if (data.predictionId && data.statusUrl) {
        if (activeGenRef.current !== currentGenId) return
        setStatus('processing'); setStatusMsg('Генерирую дизайн...')

        const deadline = Date.now() + POLL_TIMEOUT_MS
        while (true) {
          await delay(3000)
          if (activeGenRef.current !== currentGenId) return

          if (Date.now() > deadline) {
            setStatus('error')
            setStatusMsg('Генерация заняла слишком долго (более 5 минут). Попробуйте ещё раз.')
            return
          }

          try {
            const pollRes = await fetch(
              `/api/poll?id=${encodeURIComponent(data.predictionId)}&statusUrl=${encodeURIComponent(data.statusUrl)}`
            )
            if (!pollRes.ok) { await delay(2000); continue }

            const pollData = await pollRes.json()
            if (activeGenRef.current !== currentGenId) return

            if (pollData.status === 'succeeded' && pollData.outputUrl) {
              setOutputUrl(pollData.outputUrl)
              setStatus('done')
              return
            } else if (pollData.status === 'failed') {
              setStatus('error')
              setStatusMsg(pollData.error || 'Ошибка генерации на сервере fal.ai')
              return
            }
            // 'processing' → loop continues
          } catch (err) {
            if (activeGenRef.current !== currentGenId) return
            console.error('Polling error, retrying...', err)
            await delay(4000)
          }
        }
      } else {
        setStatus('error'); setStatusMsg(data.error || 'Ошибка запуска генерации.')
      }
    } catch { setStatus('error'); setStatusMsg('Нет соединения с сервером.') }
  }, [imageFile, room, style, isMyStyle, mode, wallColorHex, wallFinish,
      floorMaterial, floorColorHex, tilezone, tileColorHex,
      furniture, lighting, appliances, extraNotes])

  const download = async () => {
    if (!outputUrl) return
    try {
      const blob = await (await fetch(outputUrl)).blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob); a.download = `spaceai-${style}-${Date.now()}.png`; a.click()
    } catch { window.open(outputUrl, '_blank') }
  }

  const isLoading = status === 'uploading' || status === 'processing'

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
                onClick={() => setMyStep(myStep === 'palette' ? 'lighting' : 'palette')} />

              {myStep === 'palette' && (
                <MyStylePalette
                  wallFinish={wallFinish}
                  setWallFinish={setWallFinish}
                  wallColorHex={wallColorHex}
                  setWallColorHex={setWallColorHex}
                  wallFinishKey={wallFinishKey}
                  setWallFinishKey={setWallFinishKey}
                  floorMaterial={floorMaterial}
                  setFloorMaterial={setFloorMaterial}
                  floorColorHex={floorColorHex}
                  setFloorColorHex={setFloorColorHex}
                  floorMaterialKey={floorMaterialKey}
                  setFloorMaterialKey={setFloorMaterialKey}
                  schemeId={schemeId}
                  setSchemeId={setSchemeId}
                  onNext={() => setMyStep('lighting')}
                />
              )}

              {/* ── STEPS 2+3: Lighting & Extras via RoomSettings ── */}
              <RoomSettings
                isMyStyle
                myStep={myStep}
                setMyStep={setMyStep}
                room={room}
                lighting={lighting} setLighting={setLighting}
                tilezone={tilezone} setTilezone={setTilezone}
                tileColorHex={tileColorHex} setTileColorHex={setTileColorHex}
                furniture={furniture} setFurniture={setFurniture}
                appliances={appliances} setAppliances={setAppliances}
                extraNotes={extraNotes} setExtraNotes={setExtraNotes}
              />

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

          {/* Дополнительные настройки для preset-стилей */}
          {!isMyStyle && (
            <RoomSettings
              room={room}
              lighting={lighting} setLighting={setLighting}
              tilezone={tilezone} setTilezone={setTilezone}
              tileColorHex={tileColorHex} setTileColorHex={setTileColorHex}
              furniture={furniture} setFurniture={setFurniture}
              appliances={appliances} setAppliances={setAppliances}
              extraNotes={extraNotes} setExtraNotes={setExtraNotes}
            />
          )}

          {/* Mode switcher */}
          <div>
            <div className="field-label">Режим генерации</div>
            <div className="mode-switcher">
              {([
                { value: 'style',   label: 'Стиль целиком' },
                { value: 'partial', label: 'Частичная замена' },
                { value: 'clear',   label: 'Очистка области' },
              ] as const).map(m => (
                <button
                  key={m.value}
                  className={`mode-btn${mode === m.value ? ' mode-btn-active' : ''}`}
                  onClick={() => setMode(m.value)}
                  disabled={isLoading}
                >
                  {m.label}
                </button>
              ))}
            </div>
            {(mode === 'partial' || mode === 'clear') && (
              <div className="mode-hint">
                Тестовая маска: белый прямоугольник 50% в центре. Впоследствии будет заменена на загружаемую или рисуемую пользователем маску.
              </div>
            )}
          </div>

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
          <ResultPanel
            outputUrl={outputUrl}
            imagePreview={imagePreview}
            isLoading={isLoading}
            onDownload={download}
            onRegenerate={generate}
          />

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
