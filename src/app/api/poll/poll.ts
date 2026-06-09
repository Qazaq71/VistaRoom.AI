import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import sharp from 'sharp'

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! })

const NO_WATERMARK_PLANS = new Set(['agency'])

// ── 5×7 pixel-font bitmaps — zero font/SVG dependency ────────────────────────
const FONT5X7: Record<string, number[]> = {
  'V': [0b10001,0b10001,0b10001,0b01010,0b01010,0b00100,0b00100],
  'i': [0b00100,0b00000,0b00100,0b00100,0b00100,0b00100,0b00100],
  's': [0b01110,0b10000,0b10000,0b01110,0b00001,0b00001,0b11110],
  't': [0b11111,0b00100,0b00100,0b00100,0b00100,0b00100,0b00011],
  'a': [0b00000,0b01110,0b00001,0b01111,0b10001,0b10011,0b01101],
  'R': [0b11110,0b10001,0b10001,0b11110,0b10100,0b10010,0b10001],
  'o': [0b00000,0b01110,0b10001,0b10001,0b10001,0b10001,0b01110],
  'm': [0b00000,0b11010,0b10101,0b10101,0b10001,0b10001,0b10001],
  '-': [0b00000,0b00000,0b00000,0b11111,0b00000,0b00000,0b00000],
  'A': [0b00100,0b01010,0b10001,0b11111,0b10001,0b10001,0b10001],
  'I': [0b01110,0b00100,0b00100,0b00100,0b00100,0b00100,0b01110],
}

// Render text to raw RGBA Buffer — returns pixels + dimensions
function renderTextRGBA(text: string, scale: number) {
  const CW = 5, CH = 7
  const gap  = scale
  const charW = CW * scale
  const charH = CH * scale
  const totalW = text.length * (charW + gap) - gap
  const totalH = charH
  const pixels = Buffer.alloc(totalW * totalH * 4, 0)

  let cx = 0
  for (const ch of text) {
    const rows = FONT5X7[ch] ?? FONT5X7['i']
    for (let row = 0; row < CH; row++) {
      for (let col = 0; col < CW; col++) {
        if (!((rows[row] >> (CW - 1 - col)) & 1)) continue
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const px = cx + col * scale + sx
            const py = row * scale + sy
            const idx = (py * totalW + px) * 4
            pixels[idx]     = 255
            pixels[idx + 1] = 255
            pixels[idx + 2] = 255
            pixels[idx + 3] = 230
          }
        }
      }
    }
    cx += charW + gap
  }
  return { pixels, width: totalW, height: totalH }
}

// Build pill background as raw RGBA — rounded rectangle, no SVG
function renderPillRGBA(w: number, h: number, rx: number) {
  const pixels = Buffer.alloc(w * h * 4, 0)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      // Check if inside rounded rect
      const inCornerTL = x < rx      && y < rx      && (x - rx) ** 2 + (y - rx) ** 2 > rx * rx
      const inCornerTR = x >= w - rx && y < rx      && (x - (w - rx)) ** 2 + (y - rx) ** 2 > rx * rx
      const inCornerBL = x < rx      && y >= h - rx && (x - rx) ** 2 + (y - (h - rx)) ** 2 > rx * rx
      const inCornerBR = x >= w - rx && y >= h - rx && (x - (w - rx)) ** 2 + (y - (h - rx)) ** 2 > rx * rx
      if (inCornerTL || inCornerTR || inCornerBL || inCornerBR) continue
      const idx = (y * w + x) * 4
      pixels[idx]     = 0
      pixels[idx + 1] = 0
      pixels[idx + 2] = 0
      pixels[idx + 3] = 140  // ~55% opacity
    }
  }
  return pixels
}

async function buildWatermarkPng(imgW: number, imgH: number): Promise<Buffer> {
  const text  = 'VistaRoom-AI'
  const scale = Math.max(2, Math.round(imgW / 130))

  const { pixels: textPixels, width: textW, height: textH } = renderTextRGBA(text, scale)

  const padX   = scale * 4
  const padY   = scale * 3
  const badgeW = textW + padX * 2
  const badgeH = textH + padY * 2
  const rx     = Math.round(badgeH / 2)
  const margin = Math.round(imgW * 0.025)

  // Pill background as raw RGBA
  const pillPixels = renderPillRGBA(badgeW, badgeH, rx)

  // Composite text onto pill by direct pixel write
  for (let ty = 0; ty < textH; ty++) {
    for (let tx = 0; tx < textW; tx++) {
      const srcIdx = (ty * textW + tx) * 4
      const dstX   = tx + padX
      const dstY   = ty + padY
      if (dstX >= badgeW || dstY >= badgeH) continue
      const dstIdx = (dstY * badgeW + dstX) * 4
      const srcA   = textPixels[srcIdx + 3] / 255
      if (srcA === 0) continue
      // Alpha composite text over pill
      pillPixels[dstIdx]     = Math.round(textPixels[srcIdx]     * srcA + pillPixels[dstIdx]     * (1 - srcA))
      pillPixels[dstIdx + 1] = Math.round(textPixels[srcIdx + 1] * srcA + pillPixels[dstIdx + 1] * (1 - srcA))
      pillPixels[dstIdx + 2] = Math.round(textPixels[srcIdx + 2] * srcA + pillPixels[dstIdx + 2] * (1 - srcA))
      pillPixels[dstIdx + 3] = Math.min(255, pillPixels[dstIdx + 3] + Math.round(textPixels[srcIdx + 3] * srcA))
    }
  }

  // Build badge PNG from merged pixels
  const badgePng = await sharp(pillPixels, {
    raw: { width: badgeW, height: badgeH, channels: 4 }
  }).png().toBuffer()

  // Embed badge into full transparent image at bottom-right
  const fullPng = await sharp({
    create: { width: imgW, height: imgH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  })
    .composite([{
      input: badgePng,
      left:  imgW - badgeW - margin,
      top:   imgH - badgeH - margin,
    }])
    .png()
    .toBuffer()

  return fullPng
}

async function applyWatermark(imageUrl: string): Promise<string> {
  const res    = await fetch(imageUrl)
  const buffer = Buffer.from(await res.arrayBuffer())

  const img      = sharp(buffer)
  const metadata = await img.metadata()
  const w        = metadata.width  ?? 768
  const h        = metadata.height ?? 768

  const overlay = await buildWatermarkPng(w, h)

  const result = await img
    .composite([{ input: overlay, blend: 'over' }])
    .jpeg({ quality: 88 })
    .toBuffer()

  return `data:image/jpeg;base64,${result.toString('base64')}`
}

// ─────────────────────────────────────────────────────────────────────────────

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
