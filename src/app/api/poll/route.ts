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
  // Any failure here must NEVER propagate — generation must always complete.
  try {
    const { width: w = 1024, height: h = 1024 } = await sharp(imageBuffer).metadata()

    const ptSize = Math.max(10, Math.round(w * 0.016))
    const padX   = 10
    const padY   = 5
    const margin = Math.round(w * 0.02)

    // Plain black text — Pango default, no markup, no negate, maximum reliability.
    const textBuf = await sharp({
      text: { text: WATERMARK_TEXT, font: `Sans Bold ${ptSize}`, rgba: true, dpi: 96 },
    }).png().toBuffer()

    const { width: tw = 0, height: th = 0 } = await sharp(textBuf).metadata()
    if (!tw || !th) return sharp(imageBuffer).jpeg({ quality: 88 }).toBuffer()

    // White semi-transparent badge via sharp.create — no SVG, no librsvg fonts needed.
    const badgeW   = tw + padX * 2
    const badgeH   = th + padY * 2
    const badgeBuf = await sharp({
      create: { width: badgeW, height: badgeH, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0.72 } },
    }).png().toBuffer()

    const bx = Math.max(0, w - badgeW - margin)
    const by = Math.max(0, h - badgeH - margin)

    return await sharp(imageBuffer)
      .composite([
        { input: badgeBuf, left: bx,        top: by,        blend: 'over' },
        { input: textBuf,  left: bx + padX,  top: by + padY, blend: 'over' },
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
