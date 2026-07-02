import { useCallback, useRef, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

interface UseImageGenerationProps {
  imageFile: File | null
  room: string
  style: string
  isMyStyle: boolean
  mode: 'style' | 'partial' | 'clear'
  // Все поля MyStyle
  wallColorHex: string
  wallFinish: string[]
  floorMaterial: string
  floorColorHex: string
  tilezone: string[]
  tileColorHex: string
  furniture: string[]
  lighting: string[]
  appliances: string[]
  extraNotes: string
}

interface UseImageGenerationReturn {
  status: Status
  statusMsg: string
  outputUrl: string | null
  remaining: number | null
  isLoading: boolean
  generate: () => Promise<void>
  download: () => Promise<void>
  reset: () => void
}

// ─────────────────────────────────────────────────────────────────────────────

const POLL_TIMEOUT_MS = 5 * 60 * 1000

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

export function useImageGeneration(props: UseImageGenerationProps): UseImageGenerationReturn {
  const {
    imageFile, room, style, isMyStyle, mode,
    wallColorHex, wallFinish, floorMaterial, floorColorHex,
    tilezone, tileColorHex, furniture, lighting, appliances, extraNotes,
  } = props

  const [status, setStatus]       = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [outputUrl, setOutputUrl] = useState<string | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)

  // incremented on each generate() call; stale upload/polling completions check this
  const activeGenRef = useRef(0)

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

  const download = useCallback(async () => {
    if (!outputUrl) return
    try {
      const blob = await (await fetch(outputUrl)).blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob); a.download = `spaceai-${style}-${Date.now()}.png`; a.click()
    } catch { window.open(outputUrl, '_blank') }
  }, [outputUrl, style])

  const reset = useCallback(() => {
    activeGenRef.current++
    setOutputUrl(null); setStatus('idle')
  }, [])

  const isLoading = status === 'uploading' || status === 'processing'

  return { status, statusMsg, outputUrl, remaining, isLoading, generate, download, reset }
}
