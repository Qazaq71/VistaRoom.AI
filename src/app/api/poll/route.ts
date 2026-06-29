import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { put } from '@vercel/blob'

export const dynamic    = 'force-dynamic'
export const maxDuration = 60

type FalStatus = 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'

interface FalStatusResponse {
  status:        FalStatus
  request_id?:   string
  response_url?: string
}

interface FalResultResponse {
  images?: { url: string }[]
}

const WATERMARK_TEXT = 'VistaRoom.AI'

async function applyWatermark(imageBuffer: Buffer): Promise<Buffer> {
  // Outer try/catch: watermark failures must NEVER propagate — generation must always succeed.
  try {
    const { width: w = 1024, height: h = 1024 } = await sharp(imageBuffer).metadata()

    const fontSize = Math.max(16, Math.round(w * 0.034))
    const ptSize   = Math.max(12, Math.round(fontSize * 0.75))
    const margin   = Math.round(w * 0.025)
    const padX     = Math.round(fontSize * 0.8)
    const padY     = Math.round(fontSize * 0.5)

    // Render black text on transparent background, then negate RGB → white text.
    // Single pipeline reduces Sharp overhead vs. two separate toBuffer() calls.
    const textBuf = await sharp({
      text: { text: WATERMARK_TEXT, font: `Sans Bold ${ptSize}`, rgba: true, dpi: 96 },
    })
      .negate({ alpha: false })
      .png()
      .toBuffer()

    const { width: tw = Math.round(fontSize * 7), height: th = Math.round(fontSize * 1.4) } =
      await sharp(textBuf).metadata()

    const badgeW = tw + padX * 2
    const badgeH = th + padY * 2
    const bx     = Math.max(0, w - badgeW - margin)
    const by     = Math.max(0, h - badgeH - margin)
    const rx     = Math.round(badgeH / 2)

    const bgSvg = [
      `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`,
      `<rect x="${bx}" y="${by}" width="${badgeW}" height="${badgeH}"`,
      ` rx="${rx}" ry="${rx}" fill="black" fill-opacity="0.60"/>`,
      `</svg>`,
    ].join('')

    return await sharp(imageBuffer)
      .composite([
        { input: Buffer.from(bgSvg), blend: 'over' },
        { input: textBuf, left: bx + padX, top: by + Math.round((badgeH - th) / 2), blend: 'over' },
      ])
      .jpeg({ quality: 88 })
      .toBuffer()

  } catch (err) {
    console.error('[applyWatermark] failed, skipping watermark:', err instanceof Error ? err.message : err)
    return sharp(imageBuffer).jpeg({ quality: 88 }).toBuffer()
  }
}

export async function GET(req: NextRequest) {
  try {
    const id        = req.nextUrl.searchParams.get('id')
    const statusUrl = req.nextUrl.searchParams.get('statusUrl')

    if (!id) return NextResponse.json({ error: 'Missing prediction ID' }, { status: 400 })

    const pollUrl = statusUrl
      ? decodeURIComponent(statusUrl)
      : `https://queue.fal.run/fal-ai/flux-pro/requests/${id}/status`

    const statusRes = await fetch(pollUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
    })

    if (!statusRes.ok) {
      const errText = await statusRes.text()
      console.error('[/api/poll] status error', statusRes.status, errText)
      return NextResponse.json({ error: 'Status check failed: ' + errText }, { status: 500 })
    }

    const statusData: FalStatusResponse = await statusRes.json()
    console.log('[/api/poll] status:', statusData.status, 'id:', id)

    if (statusData.status === 'IN_QUEUE' || statusData.status === 'IN_PROGRESS') {
      return NextResponse.json({ id, status: 'processing', outputUrl: null })
    }

    if (statusData.status === 'FAILED') {
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'Generation failed' })
    }

    const responseUrl =
      statusData.response_url ??
      `https://queue.fal.run/fal-ai/flux-pro/requests/${id}`

    const resultRes = await fetch(responseUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
    })

    if (!resultRes.ok) {
      const errText = await resultRes.text()
      console.error('[/api/poll] result error', resultRes.status, errText)
      return NextResponse.json({ error: 'Result fetch failed: ' + errText }, { status: 500 })
    }

    const resultData: FalResultResponse = await resultRes.json()
    const rawUrl = resultData.images?.[0]?.url ?? null

    if (!rawUrl) {
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'No image in response' })
    }

    const imgRes = await fetch(rawUrl)
    if (!imgRes.ok) {
      console.error('[/api/poll] image download error', imgRes.status)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'Failed to download generated image' })
    }

    // Watermark + Blob upload is best-effort.
    // Any failure falls back to the raw fal.ai URL so generation always completes.
    let outputUrl: string = rawUrl
    try {
      const imgBuf      = Buffer.from(await imgRes.arrayBuffer())
      const watermarked = await applyWatermark(imgBuf)
      const { url }     = await put(
        `results/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
        watermarked,
        { access: 'public', contentType: 'image/jpeg' },
      )
      outputUrl = url
    } catch (wmErr) {
      console.error('[/api/poll] watermark/upload failed, using raw url:', wmErr instanceof Error ? wmErr.message : wmErr)
    }

    return NextResponse.json({ id, status: 'succeeded', outputUrl, error: null })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/poll]', message)
    return NextResponse.json({ error: 'Poll error: ' + message }, { status: 500 })
  }
}
