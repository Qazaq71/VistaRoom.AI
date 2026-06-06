import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import sharp from 'sharp'
import { getRateLimit } from '@/lib/rateLimit'
import { buildEditPrompt, NEGATIVE_PROMPT, RoomDetails } from '@/lib/prompts'

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! })

const INTERIOR_MODEL = '76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38'

async function compressImage(buffer: Buffer): Promise<string> {
  const compressed = await sharp(buffer)
    .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 90 })
    .toBuffer()
  return `data:image/jpeg;base64,${compressed.toString('base64')}`
}

function toAscii(text: string): string {
  return text.replace(/[^\x00-\x7F]/g, '').replace(/\s+/g, ' ').trim()
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
    const dataUri = await compressImage(buffer)

    const rawPrompt = buildEditPrompt(room, style, details)
    const prompt = toAscii(rawPrompt)
    const negPrompt = toAscii(NEGATIVE_PROMPT)

    console.log('[PROMPT]', prompt)

    const prediction = await replicate.predictions.create({
      version: INTERIOR_MODEL,
      input: {
        image:               dataUri,
        prompt:              prompt,
        negative_prompt:     negPrompt,
        guidance_scale:      15,
        num_inference_steps: 50,
        strength:            0.85,
      },
    })

    return NextResponse.json({
      predictionId: prediction.id,
      status:       prediction.status,
      remaining,
      limit,
      promptUsed:   prompt,
    })
  } catch (err: unknown) {
    console.error('[/api/generate]', err)
    const msg = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
