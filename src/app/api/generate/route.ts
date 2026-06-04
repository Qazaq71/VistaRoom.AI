import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'
import { getRateLimit } from '@/lib/rateLimit'
import { buildPrompt, NEGATIVE_PROMPT } from '@/lib/prompts'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

// Stable Diffusion XL img2img — отличный результат для интерьеров
const MODEL_VERSION =
  '7762fd07cf82c948538e41f63f77d685e02b063e37e496241f10aa99441669b8'

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting по IP
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-real-ip') ??
      '127.0.0.1'

    const { ok, remaining, limit } = getRateLimit(ip)

    if (!ok) {
      return NextResponse.json(
        {
          error: `Лимит исчерпан. Вы можете генерировать до ${limit} изображений в день. Попробуйте завтра.`,
          code: 'RATE_LIMIT',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(limit),
            'X-RateLimit-Remaining': '0',
          },
        }
      )
    }

    // 2. Разбираем multipart form
    const form = await req.formData()
    const imageFile = form.get('image') as File | null
    const room = (form.get('room') as string) || 'living'
    const style = (form.get('style') as string) || 'minimalist'
    const strength = parseFloat((form.get('strength') as string) || '0.65')

    if (!imageFile) {
      return NextResponse.json({ error: 'Изображение не загружено' }, { status: 400 })
    }

    // Валидация файла
    if (!imageFile.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Файл должен быть изображением' }, { status: 400 })
    }
    if (imageFile.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'Файл слишком большой (макс. 10 МБ)' }, { status: 400 })
    }

    // 3. Конвертируем в base64 для Replicate
    const arrayBuffer = await imageFile.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')
    const dataUri = `data:${imageFile.type};base64,${base64}`

    // 4. Строим промпт
    const prompt = buildPrompt(room, style)
    const clampedStrength = Math.min(0.9, Math.max(0.4, strength))

    // 5. Запускаем предикцию (асинхронно — не ждём результата)
    const prediction = await replicate.predictions.create({
      version: MODEL_VERSION,
      input: {
        image: dataUri,
        prompt,
        negative_prompt: NEGATIVE_PROMPT,
        num_inference_steps: 30,
        strength: clampedStrength,
        guidance_scale: 7.5,
        scheduler: 'K_EULER',
      },
    })

    return NextResponse.json(
      {
        predictionId: prediction.id,
        status: prediction.status,
        remaining,
        limit,
      },
      {
        headers: {
          'X-RateLimit-Limit': String(limit),
          'X-RateLimit-Remaining': String(remaining),
        },
      }
    )
  } catch (err: unknown) {
    console.error('[/api/generate]', err)
    const message = err instanceof Error ? err.message : 'Внутренняя ошибка сервера'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
