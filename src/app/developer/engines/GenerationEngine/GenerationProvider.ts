import type { GenerationProviderType, GenerationRequest, GenerationResponse } from "./types";

export interface GenerationProvider {
  provider: GenerationProviderType;
  generate(request: GenerationRequest): Promise<GenerationResponse>;
}
