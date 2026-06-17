import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { put } from '@vercel/blob'
import { buildEditPrompt, RoomDetails } from '@/lib/prompts'
import { getRateLimit } from '@/lib/rateLimit'

export const maxDuration = 10

function buildColorPrefix(details: Partial<RoomDetails>, style: string): string {
  if (style !== 'my_style') return ''
  const parts: string[] = []
  if (details.wallColorHex) parts.push(`wall color exactly ${details.wallColorHex}`)
  if (details.floorColorHex) parts.push(`floor color exactly ${details.floorColorHex}`)
  if (details.tileColorHex) parts.push(`tile color exactly ${details.tileColorHex}`)
  return parts.length ? parts.join(', ') + ', ' : ''
}

async function compressImage(buffer: Buffer): Promise<Buffer> {
  if (buffer.length < 200 * 1024) return buffer
  return await sharp(buffer)
    .resize(768, 768, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toBuffer()
}

function toAscii(text: string): string {
  return text.replace(/[^\x00-\x7F]/g, '').replace(/\s+/g, ' ').trim()
}

type ModelsLabResponse = {
  status: string
  id?: number | string
  output?: string[]
  message?: string
  fetch_result?: string
  future_links?: string[]
  eta?: number
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '127.0.0.1'
    
    const { ok, remaining, limit } = getRateLimit(ip)
    if (!ok) {
      return NextResponse.json({ error: 'Daily limit reached.', code: 'RATE_LIMIT' }, { status: 429 })
    }

    const form = await req.formData()
    const imageFile = form.get('image') as File | null
    const room = (form.get('room') as string) || 'living'
    const style = (form.get('style') as string) || 'minimalist'

    const details: Partial<RoomDetails> = {
      wallColorHex: (form.get('wallColorHex') as string) || '',
      wallFinish: JSON.parse((form.get('wallFinish') as string) || '[]'),
      floorMaterial: (form.get('floorMaterial') as string) || '',
      floorColorHex: (form.get('floorColorHex') as string) || '',
      tilezone: JSON.parse((form.get('tilezone') as string) || '[]'),
      tileColorHex: (form.get('tileColorHex') as string) || '',
      furniture: JSON.parse((form.get('furniture') as string) || '[]'),
      lighting: JSON.parse((form.get('lighting') as string) || '[]'),
      appliances: JSON.parse((form.get('appliances') as string) || '[]'),
      extraNotes: (form.get('extraNotes') as string) || '',
    }

    if (!imageFile) return NextResponse.json({ error: 'No image uploaded' }, { status: 400 })

    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const compressedBuffer = await compressImage(buffer)

    const { url: imageUrl } = await put(
      `interior/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
      compressedBuffer,
      { access: 'public', contentType: 'image/jpeg' }
    )

    // Получаем промпт
    const { positive, negative } = buildEditPrompt(room, style, details)
    const colorPrefix = buildColorPrefix(details, style)
    const prompt = toAscii(colorPrefix + positive)
    const negPrompt = toAscii(negative)

    const isMyStyle = style === 'my_style'

    const mlRes = await fetch('https://modelslab.com/api/v6/interior/make', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: process.env.MODELSLAB_API_KEY,
        prompt,
        negative_prompt: negPrompt,
        init_image: imageUrl,
        strength: isMyStyle ? 0.78 : 0.65,        // чуть снизили
        guidance_scale: 11,
        num_inference_steps: 28,                  // снизили с 31
        enhance_prompt: 'no',
        width: '512',
        height: '512',
        safety_checker: 'no',
      }),
    })

    const mlData = await mlRes.json() as ModelsLabResponse
    console.log('[ModelsLab raw response]', JSON.stringify(mlData))

    if (mlData.status === 'error') {
      return NextResponse.json({ error: mlData.message ?? 'Generation error' }, { status: 500 })
    }

    return NextResponse.json({
      predictionId: String(mlData.id ?? ''),
      fetchResultUrl: mlData.fetch_result ?? null,
      outputUrl: mlData.output?.[0] ?? null,
      status: mlData.status === 'success' ? 'succeeded' : 'processing',
      remaining,
      limit,
      promptUsed: prompt.substring(0, 300) + '...',
    })

  } catch (err: any) {
    console.error('API Error:', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}