import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import sharp from 'sharp'
import { getRateLimit } from '@/lib/rateLimit'
import { buildEditPrompt, RoomDetails } from '@/lib/prompts'

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
    const strength  = parseFloat((form.get('strength') as string) || '0.85')

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
    const dataUri = await compressImage(buffer)

    // ✅ FIX: buildEditPrompt now returns { positive, negative }
    const { positive, negative } = buildEditPrompt(room, style, details)
    const prompt       = toAscii(positive)
    const finalNegPrompt = toAscii(negative)

    const clampedStrength = Math.min(0.95, Math.max(0.5, strength))

    // For my_style — increase guidance and steps to force strict adherence to user params
    const isMyStyle = style === 'my_style'
    const guidanceScale    = isMyStyle ? 20 : 15
    const inferenceSteps   = isMyStyle ? 60 : 50

    const prediction = await replicate.predictions.create({
      version: INTERIOR_MODEL,
      input: {
        image:               dataUri,
        prompt:              prompt,
        negative_prompt:     finalNegPrompt,
        guidance_scale:      guidanceScale,
        num_inference_steps: inferenceSteps,
        strength:            clampedStrength,
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
    const msg = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
