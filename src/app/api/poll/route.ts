import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id')

    if (!id || !/^[a-z0-9]{20,}$/.test(id)) {
      return NextResponse.json({ error: 'Неверный ID предикции' }, { status: 400 })
    }

    const prediction = await replicate.predictions.get(id)

    // Извлекаем URL результата
    const outputUrl =
      prediction.status === 'succeeded'
        ? Array.isArray(prediction.output)
          ? prediction.output[0]
          : prediction.output
        : null

    return NextResponse.json({
      id: prediction.id,
      status: prediction.status, // starting | processing | succeeded | failed | canceled
      outputUrl,
      error: prediction.error ?? null,
    })
  } catch (err: unknown) {
    console.error('[/api/poll]', err)
    const message = err instanceof Error ? err.message : 'Ошибка получения статуса'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
