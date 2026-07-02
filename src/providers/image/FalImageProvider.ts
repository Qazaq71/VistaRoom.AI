import {
  REDESIGN_MODEL_URL,
  REPLACE_MODEL_URL,
  ERASE_MODEL_URL,
  FAL_REQUEST_TIMEOUT_HEADER,
  FAL_SAFETY_TOLERANCE,
  FAL_OUTPUT_FORMAT,
  FAL_NUM_IMAGES,
  FAL_DEFAULT_GUIDANCE_SCALE,
  FAL_ERASE_DILATE_PIXELS,
} from '@/config/image'
import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'
import type { ImageProvider } from './ImageProvider'

// Fal.ai's queue submit response wire shape — Fal-specific naming stays local
// to this file; nothing outside FalImageProvider should ever see it.
interface FalSubmitResponse {
  request_id: string
  response_url: string
  status_url: string
  cancel_url: string
}

// The only module allowed to talk to queue.fal.run, read FAL_API_KEY, or know
// about Fal's payload naming (image_url, mask_url, request_id, guidance_scale, ...).
// It is the adapter between VisataRoom AI's InteriorEditRequest/-Result domain
// model and Fal.ai's wire format.
function falHeaders(): Record<string, string> {
  return {
    Authorization: `Key ${process.env.FAL_API_KEY}`,
    'Content-Type': 'application/json',
    'X-Fal-Request-Timeout': FAL_REQUEST_TIMEOUT_HEADER,
  }
}

async function submitToFal(url: string, body: Record<string, unknown>): Promise<InteriorEditResult> {
  const res = await fetch(url, {
    method: 'POST',
    headers: falHeaders(),
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errText = await res.text()
    console.error('[fal.ai submit error]', errText)
    throw new Error('fal.ai request failed: ' + errText)
  }

  const data = await res.json() as FalSubmitResponse
  console.log('[fal.ai queue response]', JSON.stringify(data))

  if (!data.request_id) {
    console.error('[fal.ai] missing request_id:', JSON.stringify(data))
    throw new Error('Сервис генерации не вернул ID задачи. Попробуйте снова.')
  }

  return {
    requestId: data.request_id,
    statusUrl: data.status_url,
    responseUrl: data.response_url,
    provider: 'fal',
    raw: data,
  }
}

export class FalImageProvider implements ImageProvider {
  async submit(request: InteriorEditRequest): Promise<InteriorEditResult> {
    switch (request.operation) {
      case 'redesign': {
        const aspectRatio = request.aspectRatio ?? '1:1'
        const guidanceScale = request.guidanceScale ?? FAL_DEFAULT_GUIDANCE_SCALE
        return submitToFal(REDESIGN_MODEL_URL, {
          image_url: request.image,
          prompt: request.prompt,
          guidance_scale: guidanceScale,
          aspect_ratio: aspectRatio,
          safety_tolerance: FAL_SAFETY_TOLERANCE,
          output_format: FAL_OUTPUT_FORMAT,
          num_images: FAL_NUM_IMAGES,
        })
      }

      // fal-ai/flux-pro/v1/fill — inpainting for partial furniture/decor replacement.
      case 'replace':
        return submitToFal(REPLACE_MODEL_URL, {
          image_url: request.image,
          mask_url: request.mask,
          prompt: request.prompt,
          safety_tolerance: FAL_SAFETY_TOLERANCE,
          enhance_prompt: false,
          num_images: FAL_NUM_IMAGES,
          output_format: FAL_OUTPUT_FORMAT,
          sync_mode: false,
        })

      // fal-ai/flux-pro/v1/erase — erases the masked region and fills with plausible
      // background. No prompt: the model inpaints autonomously.
      case 'erase':
        return submitToFal(ERASE_MODEL_URL, {
          image_url: request.image,
          mask_url: request.mask,
          dilate_pixels: FAL_ERASE_DILATE_PIXELS,
          output_format: FAL_OUTPUT_FORMAT,
          sync_mode: false,
        })

      default: {
        const exhaustive: never = request.operation
        throw new Error(`Unsupported operation: ${exhaustive}`)
      }
    }
  }
}
