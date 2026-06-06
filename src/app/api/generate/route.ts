import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import { getRateLimit } from '@/lib/rateLimit'
import { buildEditPrompt, RoomDetails } from '@/lib/prompts'

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! })

const MODEL = 'black-forest-labs/flux-kontext-pro'

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
      ?? req.headers.get('x-real-ip') ?? '127.0.0.1'

    const { ok, remaining, limit } = getRateLimit(ip)
    if (!ok) {
      return NextResponse.json(
        { error: `Лимит исчерпан. До ${limit} генераций в день. Попробуйте завтра.`, code: 'RATE_LIMIT' },
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
      return NextResponse.json({ error: 'Изображение не загружено' }, { status: 400 })
    if (!imageFile.type.startsWith('image/'))
      return NextResponse.json({ error: 'Файл должен быть изображением' }, { status: 400 })
    if (imageFile.size > 10 * 1024 * 1024)
      return NextResponse.json({ error: 'Файл слишком большой (макс. 10 МБ)' }, { status: 400 })

    const arrayBuffer = await imageFile.arrayBuffer()
    const base64  = Buffer.from(arrayBuffer).toString('base64')
    const dataUri = `data:${imageFile.type};base64,${base64}`

    const prompt = buildEditPrompt(room, style, details)

    console.log('[PROMPT]', prompt)

    const prediction = await replicate.predictions.create({
      model: MODEL,
      input: {
        input_image:      dataUri,
        prompt,
        // guidance 4.5 — баланс: меняет отделку, но сохраняет архитектуру (окна, двери)
        // 7.5 было слишком агрессивно — модель закрашивала окна
        guidance:         4.5,
        output_format:    'png',
        output_quality:   100,
        safety_tolerance: 2,
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
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Внутренняя ошибка' },
      { status: 500 }
    )
  }
}
