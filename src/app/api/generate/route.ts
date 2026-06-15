import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export const maxDuration = 10
import { getRateLimit } from '@/lib/rateLimit'
import { buildEditPrompt, RoomDetails } from '@/lib/prompts'

function buildColorPrefix(details: Partial<RoomDetails>, style: string): string {
  if (style !== 'my_style') return ''
  const parts: string[] = []

  const wallHex  = details.wallColorHex?.toUpperCase()
  const floorHex = details.floorColorHex?.toUpperCase()
  const tileHex  = details.tileColorHex?.toUpperCase()

  if (wallHex) {
    parts.push(
      `walls painted ${wallHex}`,
      `wall color ${wallHex}`,
      `${wallHex} colored walls`
    )
  }
  if (floorHex) {
    parts.push(
      `floor color ${floorHex}`,
      `${floorHex} floor`,
      `flooring in color ${floorHex}`
    )
  }
  if (tileHex) {
    parts.push(
      `backsplash tiles ${tileHex}`,
      `${tileHex} kitchen backsplash`,
      `tile color ${tileHex}`
    )
  }

  return parts.length ? parts.join(', ') + ', ' : ''
}

async function compressImage(buffer: Buffer): Promise<Buffer> {
  return await sharp(buffer)
    .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 90 })
    .toBuffer()
}

function toAscii(text: string): string {
  return text.replace(/[^\x00-\x7F]/g, '').replace(/\s+/g, ' ').trim()
}

type ModelsLabResponse = {
  status: string
  id?: number | string
  output?: string[]
  future_links?: string[]
  message?: string
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
      ?? req.headers.get('x-real-ip') ?? '127.0.0.1'

    const { ok, remaining, limit } = getRateLimit(ip)
    if (!ok) {
      return NextResponse.json(
        { error: 'Daily limit reached. Try again tomorrow.', code: 'RATE_LIMIT' },
        { status: 429 }
      )
    }

    const form = await req.formData()
    const imageFile = form.get('image') as File | null
    const room      = (form.get('room')  as string) || 'living'
    const style     = (form.get('style') as string) || 'minimalist'

    const details: Partial<RoomDetails> = {
      size:          (form.get('size')          as string) || '',
      ceilingHeight: (form.get('ceilingHeight') as string) || '',
      wallColorHex:  (form.get('wallColorHex')  as string) || '',
      wallFinish:    JSON.parse((form.get('wallFinish')  as string) || '[]'),
      floorMaterial: (form.get('floorMaterial') as string) || '',
      floorColorHex: (form.get('floorColorHex') as string) || '',
      tilezone:      JSON.parse((form.get('tilezone')    as string) || '[]'),
      tileColorHex:  (form.get('tileColorHex')  as string) || '',
      furniture:     JSON.parse((form.get('furniture')   as string) || '[]'),
      lighting:      JSON.parse((form.get('lighting')    as string) || '[]'),
      appliances:    JSON.parse((form.get('appliances')  as string) || '[]'),
      extraNotes:    (form.get('extraNotes')    as string) || '',
    }

    if (!imageFile)
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 })
    if (!imageFile.type.startsWith('image/'))
      return NextResponse.json({ error: 'File must be an image' }, { status: 400 })
    if (imageFile.size > 10 * 1024 * 1024)
      return NextResponse.json({ error: 'File too large (max 10MB)' }, { status: 400 })

    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const compressedBuffer = await compressImage(buffer)

    const imageUrl = `data:image/jpeg;base64,${compressedBuffer.toString('base64')}`

    const { positive, negative } = buildEditPrompt(room, style, details)
    const colorPrefix = buildColorPrefix(details, style)
    const prompt    = toAscii(colorPrefix + positive)
    const negPrompt = toAscii(negative)
    const isMyStyle = style === 'my_style'

    const mlRes = await fetch('https://modelslab.com/api/v6/interior/make', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key:                 process.env.MODELSLAB_API_KEY,
        prompt,
        negative_prompt:     negPrompt,
        init_image:          imageUrl,
        strength:            isMyStyle ? 7 : 5,
        guidance_scale:      12,
        num_inference_steps: 31,
        enhance_prompt:      'no',
        width:               '512',
        height:              '512',
      }),
    })

    const mlData = await mlRes.json() as ModelsLabResponse

    if (mlData.status === 'error') {
      return NextResponse.json(
        { error: mlData.message ?? 'ModelsLab error' },
        { status: 500 }
      )
    }

    const outputUrl = mlData.output?.[0] ?? null

    return NextResponse.json({
      predictionId: String(mlData.id ?? ''),
      outputUrl,
      status:       mlData.status === 'success' ? 'succeeded' : 'processing',
      remaining,
      limit,
      promptUsed:   prompt,
    })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
