import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { put } from '@vercel/blob'
import { buildEditPrompt, RoomDetails } from '@/lib/prompts'
import { getRateLimit } from '@/lib/rateLimit'

export const maxDuration = 10

async function compressImage(buffer: Buffer): Promise<Buffer> {
  if (buffer.length < 200 * 1024) return buffer
  return await sharp(buffer)
    .resize(768, 768, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toBuffer()
}

function buildColorPrefix(details: Partial<RoomDetails>, style: string): string {
  if (style !== 'my_style') return ''
  const parts: string[] = []
  if (details.wallColorHex)  parts.push(`wall color exactly ${details.wallColorHex}`)
  if (details.floorColorHex) parts.push(`floor color exactly ${details.floorColorHex}`)
  if (details.tileColorHex)  parts.push(`tile color exactly ${details.tileColorHex}`)
  return parts.length ? parts.join(', ') + ', ' : ''
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '127.0.0.1'
    const { ok, remaining, limit } = getRateLimit(ip)
    if (!ok) {
      return NextResponse.json({ error: 'Daily limit reached.', code: 'RATE_LIMIT' }, { status: 429 })
    }

    const form      = await req.formData()
    const imageFile = form.get('image') as File | null
    const room      = (form.get('room')  as string) || 'living'
    const style     = (form.get('style') as string) || 'minimalist'

    const details: Partial<RoomDetails> = {
      wallColorHex:  (form.get('wallColorHex')  as string) || '',
      wallFinish:    JSON.parse((form.get('wallFinish')  as string) || '[]'),
      floorMaterial: (form.get('floorMaterial') as string) || '',
      floorColorHex: (form.get('floorColorHex') as string) || '',
      tilezone:      JSON.parse((form.get('tilezone')   as string) || '[]'),
      tileColorHex:  (form.get('tileColorHex')  as string) || '',
      furniture:     JSON.parse((form.get('furniture')  as string) || '[]'),
      lighting:      JSON.parse((form.get('lighting')   as string) || '[]'),
      appliances:    JSON.parse((form.get('appliances') as string) || '[]'),
      extraNotes:    (form.get('extraNotes')    as string) || '',
    }

    if (!imageFile) return NextResponse.json({ error: 'No image uploaded' }, { status: 400 })

    const arrayBuffer      = await imageFile.arrayBuffer()
    const buffer           = Buffer.from(arrayBuffer)
    const compressedBuffer = await compressImage(buffer)

    const { url: imageUrl } = await put(
      `interior/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
      compressedBuffer,
      { access: 'public', contentType: 'image/jpeg' }
    )

    const { positive, negative } = buildEditPrompt(room, style, details)
    const colorPrefix = buildColorPrefix(details, style)
    const prompt = (colorPrefix + positive).substring(0, 950)

    // flux-pro/v1/canny — сохраняет геометрию комнаты, меняет стиль
    const falRes = await fetch('https://queue.fal.run/fal-ai/flux-pro/v1/canny', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${process.env.FAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        control_image_url:      imageUrl,
        prompt,
        num_images:             1,
        guidance_scale:         30,
        controlnet_conditioning_scale: 0.6,
        num_inference_steps:    28,
        safety_tolerance:       '5',
      }),
    })

    if (!falRes.ok) {
      const errText = await falRes.text()
      console.error('[fal.ai submit error]', errText)
      return NextResponse.json({ error: 'fal.ai request failed: ' + errText }, { status: 500 })
    }

    const falData = await falRes.json() as {
      request_id:   string
      response_url: string
      status_url:   string
      cancel_url:   string
    }

    console.log('[fal.ai queue response]', JSON.stringify(falData))

    return NextResponse.json({
      predictionId: falData.request_id,
      statusUrl:    falData.status_url,
      responseUrl:  falData.response_url,
      outputUrl:    null,
      status:       'processing',
      remaining,
      limit,
      promptUsed:   prompt.substring(0, 300) + '...',
    })

  } catch (err: any) {
    console.error('[/api/generate]', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
