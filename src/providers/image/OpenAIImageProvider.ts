import {
  OPENAI_IMAGE_MODEL_URL,
  OPENAI_IMAGE_DEFAULT_QUALITY,
  FAL_REQUEST_TIMEOUT_HEADER,
  FAL_OUTPUT_FORMAT,
  FAL_NUM_IMAGES,
} from '@/config/image'
import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'
import type { ImageProvider } from './ImageProvider'

// Fal.ai's queue submit response wire shape — Fal-specific naming stays local
// to this file; nothing outside OpenAIImageProvider should ever see it.
interface FalSubmitResponse {
  request_id: string
  response_url: string
  status_url: string
  cancel_url: string
}

// The only module allowed to talk to queue.fal.run, read FAL_API_KEY, or know
// about the GPT Image 2 Edit payload shape (image_urls, mask_url, request_id, ...).
// It is the adapter between VisataRoom AI's InteriorEditRequest/-Result domain
// model and Fal.ai's wire format for openai/gpt-image-2/edit. Named after the
// OpenAI image model family (not the specific "gpt-image-2" version) so a
// future GPT Image 3/4 edit endpoint only requires a config change here.
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

// GPT Image 2 Edit has no promptless "erase" mode — /api/generate submits an
// empty prompt for that operation (masked-object removal), so this fallback
// tells the model what to do with the masked region.
const ERASE_FALLBACK_PROMPT =
  'Remove the object inside the masked area completely and realistically fill the region to match the surrounding background, textures, lighting and perspective.'

export class OpenAIImageProvider implements ImageProvider {
  async submit(request: InteriorEditRequest): Promise<InteriorEditResult> {
    const prompt = request.prompt || (request.operation === 'erase' ? ERASE_FALLBACK_PROMPT : '')

    // Fields match Fal.ai's openai/gpt-image-2/edit input schema exactly:
    // image_urls (list, required), mask_url (string, optional), prompt,
    // quality, num_images, output_format.
    const payload: Record<string, unknown> = {
      image_urls: [request.image],
      prompt,
      quality: OPENAI_IMAGE_DEFAULT_QUALITY,
      num_images: FAL_NUM_IMAGES,
      output_format: FAL_OUTPUT_FORMAT,
    }
    if (request.mask) payload.mask_url = request.mask

    return submitToFal(OPENAI_IMAGE_MODEL_URL, payload)
  }
}
