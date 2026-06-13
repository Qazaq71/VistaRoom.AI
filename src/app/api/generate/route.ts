import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import sharp from 'sharp'
import { getRateLimit } from '@/lib/rateLimit'
import { buildEditPrompt, RoomDetails } from '@/lib/prompts'

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! })

// adirik/interior-design — MLSD + segmentation ControlNet pipeline
// Preserves walls/floors/windows/doors, removes furniture, respects text prompt colors
// $0.0073/run, ~8 seconds, 2.1M runs
const INTERIOR_MODEL = '76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38'

async function compressImage(buffer: Buffer): Promise<string> {
  const compressed = await sharp(buffer)
    .resize(1280, 1280, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 95 })
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

    const { positive, negative } = buildEditPrompt(room, style, details)
    const prompt       = toAscii(positive)
    const negPrompt    = toAscii(negative)

    // adirik/interior-design API parameters:
    // - image: base64 data URI of the room photo
    // - prompt: describes the desired interior design
    // - negative_prompt: what to avoid
    // - prompt_strength: how strongly to follow the prompt (0-1)
    //   1.0 = full redesign following prompt, furniture removed
    //   0.7 = moderate redesign, some original elements may persist
    //   For "Мой стиль" we want maximum redesign = 1.0
    //   For preset styles we want high redesign = 0.9
    // - num_inference_steps: quality steps (default 50)
    // - guidance_scale: how closely to follow prompt (default 15)

    const isMyStyle = style === 'my_style'

    // prompt_strength controls how much the model deviates from the source image.
    // 1.0 = full redraw — MLSD should preserve geometry but in practice windows move.
    // 0.8 = strong redesign (changes materials, style, furniture) while keeping
    //       the room's structural geometry (walls, windows, doors) intact.
    // 0.75 for preset styles = slightly more conservative, better window preservation.
    const promptStrength    = isMyStyle ? 0.8 : 0.75
    const guidanceScale     = isMyStyle ? 15 : 12
    const numInferenceSteps = isMyStyle ? 50 : 40

    const prediction = await replicate.predictions.create({
      version: INTERIOR_MODEL,
      input: {
        image:                dataUri,
        prompt:               prompt,
        negative_prompt:      negPrompt,
        prompt_strength:      promptStrength,
        num_inference_steps:  numInferenceSteps,
        guidance_scale:       guidanceScale,
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
