'use client'

import { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import { buildEditPrompt, detectConflicts, type RoomDetails } from '@/lib/prompts'
import StylePicker from '@/app/components/StylePicker'
import RoomTypeSelector from '@/app/components/RoomTypeSelector'
import RoomSettings, { StepHeader, type MyStyleStep } from '@/app/components/RoomSettings'
import MyStylePalette from '@/app/components/MyStylePalette'

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

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

// ─────────────────────────────────────────────────────────────────────────────

// ─── Main component ───────────────────────────────────────────────────────────

const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

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

  const [pollUrl, setPollUrl] = useState<string | null>(null)

  const fileRef      = useRef<HTMLInputElement>(null)
  const activeGenRef = useRef(0)   // incremented on each generate() call; stale upload completions check this

  // Hard timeout for flux-pro generation: 5 minutes.
  // Without this, a stuck IN_PROGRESS task hangs the UI indefinitely.
  const POLL_TIMEOUT_MS = 5 * 60 * 1000

  // Polling is owned entirely by this effect. React guarantees the cleanup runs
  // synchronously before the effect re-fires, so it is structurally impossible for
  // two poll loops to run concurrently regardless of how many renders occur.
  useEffect(() => {
    if (!pollUrl) return

    let stopped = false
    const controller = new AbortController()
    // Compute an absolute deadline so elapsed sleeps don't erode the budget
    const deadline = Date.now() + POLL_TIMEOUT_MS

    ;(async () => {
      while (!stopped) {
        await delay(3000)
        if (stopped) break

        // Enforce the hard timeout before each request
        if (Date.now() > deadline) {
          setStatus('error')
          setStatusMsg('Генерация заняла слишком долго (более 5 минут). Попробуйте ещё раз.')
          stopped = true
          break
        }

        try {
          const res = await fetch(
            `/api/check-status?url=${encodeURIComponent(pollUrl)}`,
            { signal: controller.signal },
          )

          if (!res.ok) {
            console.error('Proxy error:', res.status)
            await delay(5000)
            continue
          }

          const data = await res.json()
          console.log('Fal.ai poll data:', data)

          const s = (data.status || '').toUpperCase()

          if (s === 'COMPLETED' || s === 'OK') {
            // Fal.ai can return COMPLETED with error/error_type fields instead of FAILED
            // when the model itself encounters an internal problem (e.g. safety filter hit)
            if (data.error || data.error_type) {
              console.error('COMPLETED with fal.ai error:', data.error, data.error_type)
              setStatus('error')
              setStatusMsg(`Ошибка fal.ai: ${data.error || data.error_type}`)
              stopped = true
              break
            }

            const imgUrl =
              data.response?.images?.[0]?.url ||
              data.images?.[0]?.url ||
              data.output?.images?.[0]?.url
            if (imgUrl) {
              setOutputUrl(imgUrl)
              setStatus('done')
            } else {
              console.error('COMPLETED but no image URL:', data)
              setStatus('error')
              setStatusMsg('Ошибка: Не удалось прочитать URL картинки')
            }
            stopped = true
          } else if (s === 'FAILED' || s === 'ERROR') {
            setStatus('error')
            setStatusMsg('Ошибка генерации на сервере fal.ai')
            stopped = true
          }
          // IN_QUEUE / IN_PROGRESS: fall through, loop sleeps 3 s and retries
        } catch (err) {
          if ((err as Error).name === 'AbortError') break
          console.error('Polling crash, retrying...', err)
          await delay(4000)
        }
      }
    })()

    return () => {
      stopped = true
      controller.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollUrl])

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
    setImageFile(null); setImagePreview(null); setOutputUrl(null); setStatus('idle')
    setPollUrl(null)
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
    setPollUrl(null) // kill any in-progress poll before starting a new generation

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
        setPollUrl(data.statusUrl as string)
      } else {
        setStatus('error'); setStatusMsg(data.error || 'Ошибка запуска генерации.')
      }
    } catch { setStatus('error'); setStatusMsg('Нет соединения с сервером.') }
  }, [imageFile, room, style, isMyStyle, wallColorHex, wallFinish,
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
                <button className="btn-regen" onClick={generate} disabled={isLoading}>Ещё вариант</button>
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
