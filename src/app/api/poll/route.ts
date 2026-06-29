import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { put } from '@vercel/blob'

export const dynamic    = 'force-dynamic'
export const maxDuration = 30

type FalStatus = 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'

interface FalStatusResponse {
  status:        FalStatus
  request_id?:   string
  response_url?: string
}

interface FalResultResponse {
  images?: { url: string }[]
}

const WATERMARK_TEXT   = 'VistaRoom.AI'
const CHAR_WIDTH_RATIO = 0.57   // bold Arial: approx char width / fontSize

async function applyWatermark(imageBuffer: Buffer): Promise<Buffer> {
  const { width: w = 1024, height: h = 1024 } = await sharp(imageBuffer).metadata()

  const fontSize = Math.max(13, Math.round(w * 0.034))
  const padX     = Math.round(fontSize * 0.7)
  const padY     = Math.round(fontSize * 0.45)
  const textW    = Math.round(WATERMARK_TEXT.length * fontSize * CHAR_WIDTH_RATIO)
  const badgeW   = textW + padX * 2
  const badgeH   = fontSize + padY * 2
  const margin   = Math.round(w * 0.025)
  const bx       = w - badgeW - margin
  const by       = h - badgeH - margin
  const rx       = Math.round(badgeH / 2)

  const svg = [
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`,
    `  <rect x="${bx}" y="${by}" width="${badgeW}" height="${badgeH}"`,
    `        rx="${rx}" ry="${rx}" fill="black" fill-opacity="0.55"/>`,
    `  <text x="${bx + padX}" y="${by + Math.round(badgeH / 2)}"`,
    `        font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="600"`,
    `        fill="white" fill-opacity="0.92" dominant-baseline="middle"`,
    `  >${WATERMARK_TEXT}</text>`,
    `</svg>`,
  ].join('\n')

  return sharp(imageBuffer)
    .composite([{ input: Buffer.from(svg), blend: 'over' }])
    .jpeg({ quality: 88 })
    .toBuffer()
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

    const imgBuf      = Buffer.from(await imgRes.arrayBuffer())
    const watermarked = await applyWatermark(imgBuf)
    const { url: outputUrl } = await put(
      `results/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
      watermarked,
      { access: 'public', contentType: 'image/jpeg' },
    )

    return NextResponse.json({ id, status: 'succeeded', outputUrl, error: null })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/poll]', message)
    return NextResponse.json({ error: 'Poll error: ' + message }, { status: 500 })
  }
}
