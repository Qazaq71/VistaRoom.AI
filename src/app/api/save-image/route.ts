import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export const maxDuration = 30

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body.outputUrl !== 'string' || !body.outputUrl) {
      return NextResponse.json({ error: 'outputUrl обязателен' }, { status: 400 })
    }

    const { outputUrl } = body as { outputUrl: string }

    // Only allow fal.ai CDN URLs to prevent SSRF
    const allowedHosts = ['fal.media', 'cdn.fal.ai', 'storage.googleapis.com', 'v3.fal.media']
    let parsedUrl: URL
    try {
      parsedUrl = new URL(outputUrl)
    } catch {
      return NextResponse.json({ error: 'Некорректный URL изображения' }, { status: 400 })
    }
    const isAllowed = allowedHosts.some(host => parsedUrl.hostname === host || parsedUrl.hostname.endsWith('.' + host))
    if (!isAllowed) {
      return NextResponse.json({ error: 'Источник изображения не разрешён' }, { status: 400 })
    }

    // Download from fal.ai with timeout
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 25_000)

    let imageRes: Response
    try {
      imageRes = await fetch(outputUrl, { signal: controller.signal })
    } catch (err) {
      const msg = err instanceof Error && err.name === 'AbortError' ? 'Таймаут загрузки изображения' : 'Не удалось загрузить изображение'
      console.error('[save-image] fetch error:', err)
      return NextResponse.json({ error: msg }, { status: 502 })
    } finally {
      clearTimeout(timeout)
    }

    if (!imageRes.ok) {
      console.error('[save-image] upstream HTTP error:', imageRes.status)
      return NextResponse.json({ error: `Ошибка загрузки изображения: HTTP ${imageRes.status}` }, { status: 502 })
    }

    const contentType = imageRes.headers.get('content-type') ?? 'image/png'
    if (!contentType.startsWith('image/')) {
      return NextResponse.json({ error: 'Ответ не является изображением' }, { status: 400 })
    }

    const imageBuffer = Buffer.from(await imageRes.arrayBuffer())
    if (imageBuffer.length === 0) {
      return NextResponse.json({ error: 'Изображение пустое' }, { status: 400 })
    }

    // Detect extension from content-type
    const ext = contentType.includes('jpeg') || contentType.includes('jpg') ? 'jpg'
              : contentType.includes('webp') ? 'webp'
              : 'png'

    const filename = `results/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

    const { url: savedUrl } = await put(filename, imageBuffer, {
      access: 'public',
      contentType,
    })

    return NextResponse.json({ success: true, savedUrl })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Внутренняя ошибка сервера'
    console.error('[save-image] unexpected error:', err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
