import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import sharp from 'sharp'

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! })

const NO_WATERMARK_PLANS = new Set(['agency'])

// ── Watermark via pure sharp primitives — zero font/librsvg dependency ────────
//
// Strategy: build the badge as a raw RGBA pixel buffer using sharp.
// 1. Create a white semi-transparent rounded-rectangle PNG (the pill background)
// 2. Create each letter of "VistaRoom-AI" as a tiny white-on-transparent PNG
//    using a hand-coded 5×7 pixel-font bitmap — no system fonts needed.
// 3. Composite letters side by side onto the pill, then composite onto photo.
//
// 5×7 pixel font — each letter is a 5-wide × 7-tall bitmask (row-major, MSB left)
// Only the characters we need: V i s t a R o m - A I
// ─────────────────────────────────────────────────────────────────────────────

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

// Render "VistaRoom-AI" to a raw RGBA Buffer at given scale
// scale=1 → each pixel = 1px (5×7 per char), scale=3 → 15×21 per char
function renderTextBuffer(text: string, scale: number): { data: Buffer; width: number; height: number } {
  const CW = 5, CH = 7
  const gap = 1                         // pixels between letters
  const charW = CW * scale
  const charH = CH * scale
  const totalW = text.length * (charW + gap * scale) - gap * scale
  const totalH = charH
  const pixels = Buffer.alloc(totalW * totalH * 4, 0) // RGBA all transparent

  let cx = 0
  for (const ch of text) {
    const rows = FONT5X7[ch] ?? FONT5X7['i']
    for (let row = 0; row < CH; row++) {
      for (let col = 0; col < CW; col++) {
        const bit = (rows[row] >> (CW - 1 - col)) & 1
        if (!bit) continue
        // Scale up: fill scale×scale block
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const px = cx + col * scale + sx
            const py = row * scale + sy
            const idx = (py * totalW + px) * 4
            pixels[idx]     = 255  // R
            pixels[idx + 1] = 255  // G
            pixels[idx + 2] = 255  // B
            pixels[idx + 3] = 230  // A
          }
        }
      }
    }
    cx += charW + gap * scale
  }

  return { data: pixels, width: totalW, height: totalH }
}

async function buildWatermark(imgW: number, imgH: number): Promise<Buffer> {
  const text  = 'VistaRoom-AI'
  // Scale the pixel font proportionally to image size
  const scale = Math.max(2, Math.round(imgW / 120))

  const { data: textData, width: textW, height: textH } = renderTextBuffer(text, scale)

  const padX   = Math.round(scale * 4)
  const padY   = Math.round(scale * 3)
  const badgeW = textW + padX * 2
  const badgeH = textH + padY * 2
  const margin = Math.round(imgW * 0.025)

  // Build pill background: semi-transparent dark rounded rect
  const rx = Math.round(badgeH / 2)
  const pillSvg = Buffer.from(
    `<svg width="${badgeW}" height="${badgeH}" xmlns="http://www.w3.org/2000/svg">` +
    `<rect x="0" y="0" width="${badgeW}" height="${badgeH}" rx="${rx}" ry="${rx}" fill="rgba(0,0,0,0.55)"/>` +
    `</svg>`
  )

  // Composite: pill background + pixel-font text on top
  const badge = await sharp(pillSvg)
    .composite([{
      input: {
        raw: { width: textW, height: textH, channels: 4 },
        // @ts-ignore — sharp accepts Buffer for raw input
      },
      // We pass the raw pixel buffer via a workaround:
      // create a PNG from raw pixels first, then composite
    }])
    .png()
    .toBuffer()
    .catch(() => sharp(pillSvg).png().toBuffer()) // fallback: pill only

  // Actually build text PNG from raw pixels
  const textPng = await sharp(textData, {
    raw: { width: textW, height: textH, channels: 4 }
  }).png().toBuffer()

  // Pill + text
  const badgeFinal = await sharp(pillSvg)
    .composite([{ input: textPng, left: padX, top: padY }])
    .png()
    .toBuffer()

  // Position in bottom-right of full image
  const fullOverlay = await sharp({
    create: { width: imgW, height: imgH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  })
    .composite([{
      input: badgeFinal,
      left:  imgW - badgeW - margin,
      top:   imgH - badgeH - margin,
    }])
    .png()
    .toBuffer()

  return fullOverlay
}

async function applyWatermark(imageUrl: string): Promise<string> {
  const res    = await fetch(imageUrl)
  const buffer = Buffer.from(await res.arrayBuffer())

  const img      = sharp(buffer)
  const metadata = await img.metadata()
  const w        = metadata.width  ?? 768
  const h        = metadata.height ?? 768

  const overlay = await buildWatermark(w, h)

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
        id:     prediction.id,
        status: prediction.status,
        outputUrl: null,
        error:  prediction.error ?? null,
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
      id:     prediction.id,
      status: 'succeeded',
      outputUrl,
      error:  null,
    })

  } catch (err: unknown) {
    console.error('[/api/poll]', err)
    return NextResponse.json({ error: 'Poll error' }, { status: 500 })
  }
}
