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
import type { ImageProviderSubmitRequest, ImageProviderSubmitResult, FalSubmitResult } from '@/types/image'
import type { ImageProvider } from './ImageProvider'

// The only module allowed to talk to queue.fal.run or read FAL_API_KEY.
function falHeaders(): Record<string, string> {
  return {
    Authorization: `Key ${process.env.FAL_API_KEY}`,
    'Content-Type': 'application/json',
    'X-Fal-Request-Timeout': FAL_REQUEST_TIMEOUT_HEADER,
  }
}

async function submitToFal(url: string, body: Record<string, unknown>): Promise<ImageProviderSubmitResult> {
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

  const data = await res.json() as FalSubmitResult
  console.log('[fal.ai queue response]', JSON.stringify(data))

  if (!data.request_id) {
    console.error('[fal.ai] missing request_id:', JSON.stringify(data))
    throw new Error('Сервис генерации не вернул ID задачи. Попробуйте снова.')
  }

  return {
    requestId: data.request_id,
    statusUrl: data.status_url,
    responseUrl: data.response_url,
    raw: data,
  }
}

export class FalImageProvider implements ImageProvider {
  async submit(request: ImageProviderSubmitRequest): Promise<ImageProviderSubmitResult> {
    switch (request.operation) {
      case 'redesign': {
        const aspectRatio = (request.metadata?.aspectRatio as string | undefined) ?? '1:1'
        const guidanceScale = (request.metadata?.guidanceScale as number | undefined) ?? FAL_DEFAULT_GUIDANCE_SCALE
        return submitToFal(REDESIGN_MODEL_URL, {
          image_url: request.imageUrl,
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
          image_url: request.imageUrl,
          mask_url: request.maskUrl,
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
          image_url: request.imageUrl,
          mask_url: request.maskUrl,
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
