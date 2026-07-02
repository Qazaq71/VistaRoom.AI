import type { ImageProviderSubmitRequest, ImageProviderSubmitResult } from '@/types/image'

export interface ImageProvider {
  submit(request: ImageProviderSubmitRequest): Promise<ImageProviderSubmitResult>
}
