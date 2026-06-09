import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import sharp from 'sharp'

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! })

// Tiers that get a watermark (all except 'agency')
// plan param is sent from the client — 'free' | 'starter' | 'pro' | 'agency'
// Default: 'free' (no paid plan) — always watermarked
const NO_WATERMARK_PLANS = new Set(['agency'])

// Build SVG watermark overlay
// Sharp compositing requires SVG as Buffer
function buildWatermarkSvg(width: number, height: number): Buffer {
  const fontSize  = Math.max(14, Math.round(width * 0.038))
  const padding   = Math.round(fontSize * 0.7)
  const text      = 'VistaRoom-AI'
  // Approximate text width (DM Sans ~0.55× ratio)
  const textW     = Math.round(text.length * fontSize * 0.55)
  const badgeW    = textW + padding * 2
  const badgeH    = Math.round(fontSize * 1.6)
  const margin    = Math.round(width * 0.025)
  // Bottom-right corner
  const x = width  - badgeW - margin
  const y = height - badgeH - margin

  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="${x}" y="${y}"
    width="${badgeW}" height="${badgeH}"
    rx="${Math.round(badgeH / 2)}"
    fill="rgba(0,0,0,0.52)"
  />
  <text
    x="${x + badgeW / 2}" y="${y + badgeH * 0.67}"
    font-family="Arial, sans-serif"
    font-size="${fontSize}"
    font-weight="600"
    fill="rgba(255,255,255,0.92)"
    text-anchor="middle"
  >${text}</text>
</svg>`

  return Buffer.from(svg)
}

async function applyWatermark(imageUrl: string): Promise<string> {
  // Download image from Replicate CDN
  const res    = await fetch(imageUrl)
  const buffer = Buffer.from(await res.arrayBuffer())

  const img      = sharp(buffer)
  const metadata = await img.metadata()
  const w        = metadata.width  ?? 768
  const h        = metadata.height ?? 768

  const watermarked = await img
    .composite([{
      input:   buildWatermarkSvg(w, h),
      blend:   'over',
      gravity: 'southeast',
    }])
    .jpeg({ quality: 88 })
    .toBuffer()

  return `data:image/jpeg;base64,${watermarked.toString('base64')}`
}

export async function GET(req: NextRequest) {
  try {
    const id   = req.nextUrl.searchParams.get('id')
    const plan = req.nextUrl.searchParams.get('plan') ?? 'free'

    if (!id || !/^[a-z0-9]{20,}$/.test(id)) {
      return NextResponse.json({ error: 'Invalid prediction ID' }, { status: 400 })
    }

    const prediction = await replicate.predictions.get(id)

    if (prediction.status !== 'succeeded') {
      return NextResponse.json({
        id:        prediction.id,
        status:    prediction.status,
        outputUrl: null,
        error:     prediction.error ?? null,
      })
    }

    const rawUrl = Array.isArray(prediction.output)
      ? prediction.output[0]
      : prediction.output

    if (!rawUrl) {
      return NextResponse.json({ id: prediction.id, status: 'succeeded', outputUrl: null, error: 'No output' })
    }

    // Apply watermark for all plans except agency
    const needsWatermark = !NO_WATERMARK_PLANS.has(plan)

    const outputUrl = needsWatermark
      ? await applyWatermark(rawUrl)
      : rawUrl

    return NextResponse.json({
      id:        prediction.id,
      status:    'succeeded',
      outputUrl,
      error:     null,
    })

  } catch (err: unknown) {
    console.error('[/api/poll]', err)
    return NextResponse.json({ error: 'Poll error' }, { status: 500 })
  }
}
