import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'

export interface ImageProvider {
  submit(request: InteriorEditRequest): Promise<InteriorEditResult>
}
