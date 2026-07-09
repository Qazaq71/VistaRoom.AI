import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { put } from '@vercel/blob'
import { RoomDetails } from '@/lib/prompts'
import { getRateLimit } from '@/lib/rateLimit'
import { InteriorService } from '@/services/InteriorService'
import { createImageProvider } from '@/providers/image/createImageProvider'
import type { InteriorMode } from '@/types/image'
import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'
import { mapToDomainDecisions } from '@/lib/interior/prompt-engine/bridge/mapToDomainDecisions'
import {
  buildPromptDraft,
  applyRules,
  isStructuralValidationFailure,
  GATE1_DEFAULT_RULESET,
} from '@/lib/interior/prompt-engine/acs004-prompt-builder-rules/acs004-prompt-builder-rules'
import { format } from '@/lib/interior/prompt-engine/formatter/formatter'
import { checkMaskInvariant } from '@/lib/interior/generation-intelligence/acs001-mask-invariant/acs001-mask-invariant'

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

// Retained for mode === 'clear' and any future callers; no longer invoked in the
// style/partial branches below, which build promptUsed via the Gate 1 ACS-004
// pipeline (mapToDomainDecisions → buildPromptDraft → applyRules → format) instead.
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

const interiorService = new InteriorService(createImageProvider())

export async function POST(req: NextRequest) {
  const t0 = Date.now()
  console.log('[Timing] Generate START')
  // Hoisted so the catch-all below can log them without exposing them to the client.
  let mode: string | undefined
  let operation: InteriorEditRequest['operation'] | undefined
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
    mode = (form.get('mode')  as string) || 'style'

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

    const maskInvariantCheck = checkMaskInvariant(mode as InteriorMode, !!maskUrl)
    if (!maskInvariantCheck.valid) {
      console.error(JSON.stringify({
        event: 'mask_invariant_violation',
        mode: maskInvariantCheck.mode,
        hasMask: maskInvariantCheck.hasMask,
        reason: maskInvariantCheck.reason,
      }))
      return NextResponse.json(
        {
          error: 'Некорректная комбинация режима и маски для этого запроса.',
          code: 'mask_invariant_violation',
        },
        { status: 400 },
      )
    }

    const tFalStart = Date.now()
    let promptUsed = ''
    let editRequest: InteriorEditRequest

    if (mode === 'clear' && maskUrl) {
      // erase accepts no prompt — model fills background autonomously
      editRequest = {
        operation: 'erase',
        mode: mode as InteriorMode,
        image:     imageUrl,
        mask:      maskUrl,
        prompt:    '',
      }
    } else if (mode === 'partial' && maskUrl) {
      const domainDecisions = mapToDomainDecisions(details, room, style)

      // Gate 1 limitation: structuredScene/projectDesignContext mapping — открытый
      // архитектурный вопрос (blocking ADR gap). Для Step 3 передаются как opaque
      // null-плейсхолдеры без декомпозиции в elements.
      const promptDraft = buildPromptDraft(null, null, domainDecisions)

      const ruleResult = applyRules(promptDraft, GATE1_DEFAULT_RULESET)

      if (isStructuralValidationFailure(ruleResult)) {
        console.error(JSON.stringify({
          event: 'prompt_structural_validation_failed',
          mode,
          violations: ruleResult.violations,
        }))
        return NextResponse.json(
          { error: 'Не удалось сформировать промпт для генерации. Попробуйте изменить параметры.' },
          { status: 500 },
        )
      }

      const formatted = format(ruleResult, 'gpt-image-2/edit')
      promptUsed = formatted.promptString.substring(0, 950)
      editRequest = {
        operation: 'replace',
        mode:      mode as InteriorMode,
        image:     imageUrl,
        mask:      maskUrl,
        prompt:    promptUsed,
      }
    } else {
      const domainDecisions = mapToDomainDecisions(details, room, style)

      // Gate 1 limitation: structuredScene/projectDesignContext mapping — открытый
      // архитектурный вопрос (blocking ADR gap). Для Step 3 передаются как opaque
      // null-плейсхолдеры без декомпозиции в elements.
      const promptDraft = buildPromptDraft(null, null, domainDecisions)

      const ruleResult = applyRules(promptDraft, GATE1_DEFAULT_RULESET)

      if (isStructuralValidationFailure(ruleResult)) {
        console.error(JSON.stringify({
          event: 'prompt_structural_validation_failed',
          mode,
          violations: ruleResult.violations,
        }))
        return NextResponse.json(
          { error: 'Не удалось сформировать промпт для генерации. Попробуйте изменить параметры.' },
          { status: 500 },
        )
      }

      const formatted = format(ruleResult, 'gpt-image-2/edit')
      promptUsed = formatted.promptString.substring(0, 950)
      const aspectRatio = nearestAspectRatio(imgWidth, imgHeight)
      editRequest = {
        operation:     'redesign',
        mode:          mode as InteriorMode,
        image:         imageUrl,
        prompt:        promptUsed,
        aspectRatio,
        guidanceScale: 7,
      }
    }

    operation = editRequest.operation

    const submitResult: InteriorEditResult = await interiorService.submit(editRequest)

    console.log(`[Timing] Submit to Fal.ai Queue: ${Date.now() - tFalStart}ms`)

    console.log(`[Timing] Total Generate Time (task queued): ${Date.now() - t0}ms`)
    return NextResponse.json({
      predictionId: submitResult.requestId,
      statusUrl:    submitResult.statusUrl,
      responseUrl:  submitResult.responseUrl,
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
    const error = err instanceof Error ? err : new Error(String(err))

    // Full detail stays server-side only — never forwarded to the client.
    console.error(JSON.stringify({
      event: 'generation_route_failed',
      operation,
      mode,
      errorName: error.name,
      errorMessage: error.message,
      stack: error.stack,
    }))
    console.log(`[Timing] Total Generate Time (exception): ${Date.now() - t0}ms`)

    return NextResponse.json(
      { error: 'Image generation failed. Please try again.' },
      { status: 500 },
    )
  }
}
