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

async function compressImage(buffer: Buffer): Promise<{ data: Buffer; width: number; height: number }> {
  let data: Buffer
  if (buffer.length < 200 * 1024) {
    data = buffer
  } else {
    data = await sharp(buffer)
      .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer()
  }
  const { width = 1024, height = 1024 } = await sharp(data).metadata()
  return { data, width, height }
}

function buildColorPrefix(details: Partial<RoomDetails>, style: string): string {
  if (style !== 'my_style') return ''
  const parts: string[] = []
  if (details.wallColorHex)  parts.push(`wall color exactly ${details.wallColorHex}`)
  if (details.floorColorHex) parts.push(`floor color exactly ${details.floorColorHex}`)
  if (details.tileColorHex)  parts.push(`tile color exactly ${details.tileColorHex}`)
  return parts.length ? parts.join(', ') + ', ' : ''
}

function nearestAspectRatio(width: number, height: number): string {
  const ratios: Record<string, number> = {
    '21:9': 21/9, '16:9': 16/9, '4:3': 4/3, '3:2': 3/2, '1:1': 1,
    '2:3': 2/3, '3:4': 3/4, '9:16': 9/16, '9:21': 9/21,
  }
  const target = width / height
  let best = '1:1'
  let bestDiff = Infinity
  for (const [key, value] of Object.entries(ratios)) {
    const diff = Math.abs(value - target)
    if (diff < bestDiff) { bestDiff = diff; best = key }
  }
  return best
}

async function submitRedesign(
  imageUrl: string,
  prompt: string,
  aspectRatio: string,
  guidanceScale: number = 7,
): Promise<Response> {
  return fetch('https://queue.fal.run/fal-ai/flux-pro/kontext', {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.FAL_API_KEY}`,
      'Content-Type': 'application/json',
      'X-Fal-Request-Timeout': '300',
    },
    body: JSON.stringify({
      image_url: imageUrl,
      prompt,
      guidance_scale: guidanceScale,
      aspect_ratio: aspectRatio,
      safety_tolerance: '2',
      output_format: 'jpeg',
      num_images: 1,
    }),
  })
}

// fal-ai/flux-pro/v1/fill — inpainting for partial furniture/decor replacement.
// image_url and mask_url are resized to identical dimensions before upload.
async function submitReplace(imageUrl: string, maskUrl: string, prompt: string): Promise<Response> {
  return fetch('https://queue.fal.run/fal-ai/flux-pro/v1/fill', {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.FAL_API_KEY}`,
      'Content-Type': 'application/json',
      'X-Fal-Request-Timeout': '300',
    },
    body: JSON.stringify({
      image_url: imageUrl,
      mask_url: maskUrl,
      prompt,
      safety_tolerance: '2',
      enhance_prompt: false,
      num_images: 1,
      output_format: 'jpeg',
      sync_mode: false,
    }),
  })
}

// fal-ai/flux-pro/v1/erase — erases the masked region and fills with plausible
// background (walls/floor). No prompt: the model inpaints autonomously.
// image_url and mask_url are resized to identical dimensions before upload.
async function submitErase(imageUrl: string, maskUrl: string): Promise<Response> {
  return fetch('https://queue.fal.run/fal-ai/flux-pro/v1/erase', {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.FAL_API_KEY}`,
      'Content-Type': 'application/json',
      'X-Fal-Request-Timeout': '300',
    },
    body: JSON.stringify({
      image_url: imageUrl,
      mask_url: maskUrl,
      dilate_pixels: 10,
      output_format: 'jpeg',
      sync_mode: false,
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

    const imgRaw = Buffer.from(await imageFile.arrayBuffer())
    const tBlobStart = Date.now()
    const { data: compressedImg, width: imgWidth, height: imgHeight } = await compressImage(imgRaw)
    const { url: imageUrl } = await put(
      `interior/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
      compressedImg,
      { access: 'public', contentType: 'image/jpeg' },
    )
    console.log(`[Timing] Upload Source Image to Blob: ${Date.now() - tBlobStart}ms`)

    let maskUrl: string | null = null
    if (maskFile) {
      const maskBuffer  = Buffer.from(await maskFile.arrayBuffer())
      // Resize mask to exactly match compressed image pixel dimensions for fill/erase alignment
      const resizedMask = await sharp(maskBuffer)
        .resize(imgWidth, imgHeight, { fit: 'fill' })
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

    const tFalStart = Date.now()
    let falRes: Response
    let promptUsed = ''

    if (mode === 'clear' && maskUrl) {
      // erase accepts no prompt — model fills background autonomously
      falRes = await submitErase(imageUrl, maskUrl)
    } else if (mode === 'partial' && maskUrl) {
      const { positive } = buildEditPrompt(room, style, details, 'partial')
      const colorPrefix  = buildColorPrefix(details, style)
      promptUsed = (colorPrefix + positive).substring(0, 950)
      falRes = await submitReplace(imageUrl, maskUrl, promptUsed)
    } else {
      const { positive } = buildEditPrompt(room, style, details, 'style')
      const colorPrefix  = buildColorPrefix(details, style)
      promptUsed = (colorPrefix + positive).substring(0, 950)
      const aspectRatio = nearestAspectRatio(imgWidth, imgHeight)
      falRes = await submitRedesign(imageUrl, promptUsed, aspectRatio, 7)
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
      promptUsed:   promptUsed
        ? promptUsed.substring(0, 300) + '...'
        : '(no prompt — erase mode)',
    })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    console.error('[/api/generate]', message)
    console.log(`[Timing] Total Generate Time (exception): ${Date.now() - t0}ms`)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
