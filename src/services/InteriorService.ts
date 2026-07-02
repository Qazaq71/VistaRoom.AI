import type { ImageProvider } from '@/providers/image/ImageProvider'
import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'

// Thin domain-facing orchestration layer between route.ts and the configured
// ImageProvider. Works exclusively with the InteriorEditRequest/-Result domain
// model — knows nothing about Fal.ai, URLs, or provider payload shapes.
export class InteriorService {
  constructor(private readonly provider: ImageProvider) {}

  async submit(request: InteriorEditRequest): Promise<InteriorEditResult> {
    return this.provider.submit(request)
  }
}
