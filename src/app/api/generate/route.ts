import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { put } from '@vercel/blob'
import { buildEditPrompt, RoomDetails } from '@/lib/prompts'
import { getRateLimit } from '@/lib/rateLimit'

export const maxDuration = 60

const MAX_IMAGE_SIZE = 10 * 1024 * 1024 // 10 MB

function validateImageFile(file: File): string | null {
  const type = typeof file.type === 'string' ? file.type : ''
  if (type !== '' && !type.startsWith('image/')) {
    return 'Файл должен быть изображением (JPG, PNG, WEBP)'
  }
  if (file.size > MAX_IMAGE_SIZE) {
    return 'Размер файла не должен превышать 10 МБ'
  }
  return null
}

async function compressImage(buffer: Buffer): Promise<Buffer> {
  if (buffer.length < 200 * 1024) return buffer
  return await sharp(buffer)
    .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85 })
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

async function submitCanny(imageUrl: string, prompt: string, negative: string): Promise<Response> {
  return fetch('https://queue.fal.run/fal-ai/flux-pro/v1/canny', {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.FAL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      control_image_url: imageUrl,
      prompt,
      negative_prompt: negative,
      num_images: 1,
      guidance_scale: 10,
      controlnet_conditioning_scale: 0.65,
      num_inference_steps: 24,
      safety_tolerance: '5',
    }),
  })
}

async function submitFill(imageUrl: string, maskUrl: string, prompt: string, negative: string): Promise<Response> {
  return fetch('https://queue.fal.run/fal-ai/flux-pro/v1/fill', {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.FAL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_url: imageUrl,
      mask_url: maskUrl,
      prompt,
      negative_prompt: negative,
      num_images: 1,
      num_inference_steps: 24,
      guidance_scale: 12,
      safety_tolerance: '5',
    }),
  })
}

export async function POST(req: NextRequest) {
  const t0 = Date.now()
  console.log('[Timing] Generate START')
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '127.0.0.1'
    const { ok, remaining, limit } = await getRateLimit(ip)
    if (!ok) {
      return NextResponse.json(
        { error: 'Превышен лимит генераций. Попробуйте завтра.', code: 'RATE_LIMIT' },
        { status: 429 },
      )
    }

    const form      = await req.formData()
    const imageFile = form.get('image') as File | null
    const maskFile  = form.get('mask')  as File | null
    const room      = (form.get('room')  as string) || 'living'
    const style     = (form.get('style') as string) || 'minimalist'
    const mode      = (form.get('mode')  as string) || 'style'

    let wallFinish: string[]
    let tilezone:   string[]
    let furniture:  string[]
    let lighting:   string[]
    let appliances: string[]
    try {
      wallFinish  = JSON.parse((form.get('wallFinish')  as string) || '[]')
      tilezone    = JSON.parse((form.get('tilezone')    as string) || '[]')
      furniture   = JSON.parse((form.get('furniture')   as string) || '[]')
      lighting    = JSON.parse((form.get('lighting')    as string) || '[]')
      appliances  = JSON.parse((form.get('appliances')  as string) || '[]')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid JSON'
      return NextResponse.json({ error: `Некорректный JSON в параметрах запроса: ${msg}` }, { status: 400 })
    }

    const details: Partial<RoomDetails> = {
      wallColorHex:  (form.get('wallColorHex')  as string) || '',
      wallFinish,
      floorMaterial: (form.get('floorMaterial') as string) || '',
      floorColorHex: (form.get('floorColorHex') as string) || '',
      tilezone,
      tileColorHex:  (form.get('tileColorHex')  as string) || '',
      furniture,
      lighting,
      appliances,
      extraNotes:    (form.get('extraNotes')    as string) || '',
    }

    if (!imageFile) return NextResponse.json({ error: 'No image uploaded' }, { status: 400 })

    const imageError = validateImageFile(imageFile)
    if (imageError) return NextResponse.json({ error: imageError }, { status: 400 })

    if (maskFile) {
      const maskError = validateImageFile(maskFile)
      if (maskError) return NextResponse.json({ error: `Маска: ${maskError}` }, { status: 400 })
    }

    const imgBuffer     = Buffer.from(await imageFile.arrayBuffer())
    const compressedImg = await compressImage(imgBuffer)
    const tBlobStart = Date.now()
    const { url: imageUrl } = await put(
      `interior/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
      compressedImg,
      { access: 'public', contentType: 'image/jpeg' },
    )
    console.log(`[Timing] Upload Source Image to Blob: ${Date.now() - tBlobStart}ms`)

    let maskUrl: string | null = null
    if (maskFile) {
      const maskBuffer  = Buffer.from(await maskFile.arrayBuffer())
      const resizedMask = await sharp(maskBuffer)
        .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
        .png()
        .toBuffer()
      const tMaskStart = Date.now()
      const { url } = await put(
        `masks/${Date.now()}-${Math.random().toString(36).slice(2)}.png`,
        resizedMask,
        { access: 'public', contentType: 'image/png' },
      )
      console.log(`[Timing] Upload Mask to Blob: ${Date.now() - tMaskStart}ms`)
      maskUrl = url
    }

    const { positive, negative } = buildEditPrompt(room, style, details, mode as 'style' | 'partial' | 'clear')
    const colorPrefix = buildColorPrefix(details, style)
    const prompt      = (colorPrefix + positive).substring(0, 950)

    const tFalStart = Date.now()
    let falRes: Response
    if ((mode === 'partial' || mode === 'clear') && maskUrl) {
      falRes = await submitFill(imageUrl, maskUrl, prompt, negative)
    } else {
      falRes = await submitCanny(imageUrl, prompt, negative)
    }
    console.log(`[Timing] Submit to Fal.ai Queue: ${Date.now() - tFalStart}ms`)

    if (!falRes.ok) {
      const errText = await falRes.text()
      console.error('[fal.ai submit error]', errText)
      console.log(`[Timing] Total Generate Time (error): ${Date.now() - t0}ms`)
      return NextResponse.json({ error: 'fal.ai request failed: ' + errText }, { status: 500 })
    }

    const falData = await falRes.json() as {
      request_id:   string
      response_url: string
      status_url:   string
      cancel_url:   string
    }

    console.log('[fal.ai queue response]', JSON.stringify(falData))

    if (!falData.request_id) {
      console.error('[fal.ai] missing request_id:', JSON.stringify(falData))
      console.log(`[Timing] Total Generate Time (error): ${Date.now() - t0}ms`)
      return NextResponse.json({ error: 'Сервис генерации не вернул ID задачи. Попробуйте снова.' }, { status: 500 })
    }

    console.log(`[Timing] Total Generate Time (task queued): ${Date.now() - t0}ms`)
    return NextResponse.json({
      predictionId: falData.request_id,
      statusUrl:    falData.status_url,
      responseUrl:  falData.response_url,
      outputUrl:    null,
      status:       'processing',
      mode,
      remaining,
      limit,
      promptUsed:   prompt.substring(0, 300) + '...',
    })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    console.error('[/api/generate]', message)
    console.log(`[Timing] Total Generate Time (exception): ${Date.now() - t0}ms`)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
