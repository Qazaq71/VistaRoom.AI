import type { ImageProvider } from '@/providers/image/ImageProvider'
import type { InteriorMode, InteriorOperation, ImageProviderSubmitResult } from '@/types/image'

export interface InteriorSubmitParams {
  mode: InteriorMode
  imageUrl: string
  maskUrl?: string | null
  prompt?: string
  aspectRatio?: string
  guidanceScale?: number
}

// Routes a generation request to the provider via a single submit() call.
// Knows nothing about Fal.ai, URLs, or payload shapes — those live in the provider.
export class InteriorService {
  constructor(private readonly provider: ImageProvider) {}

  async submit(params: InteriorSubmitParams): Promise<ImageProviderSubmitResult> {
    const { mode, imageUrl, maskUrl, prompt, aspectRatio, guidanceScale } = params

    // Same fallback as before: 'partial'/'clear' without a mask degrades to 'redesign'.
    let operation: InteriorOperation = 'redesign'
    if (mode === 'clear' && maskUrl) {
      operation = 'erase'
    } else if (mode === 'partial' && maskUrl) {
      operation = 'replace'
    }

    return this.provider.submit({
      operation,
      mode,
      imageUrl,
      prompt: prompt ?? '',
      maskUrl: maskUrl ?? undefined,
      metadata: { aspectRatio, guidanceScale },
    })
  }
}
