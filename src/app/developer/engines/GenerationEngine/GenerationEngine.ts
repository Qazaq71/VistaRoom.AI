import { developerConfig } from "../../config/developer.config";
import { createGenerationProvider } from "./ProviderFactory";
import type { GenerationProvider } from "./GenerationProvider";
import type { GenerationRequest, GenerationResponse } from "./types";

class GenerationEngineImpl {
  private provider: GenerationProvider;

  constructor() {
    this.provider = createGenerationProvider(developerConfig.generation.provider);
  }

  async generate(request: GenerationRequest): Promise<GenerationResponse> {
    return this.provider.generate(request);
  }
}

export const GenerationEngine = new GenerationEngineImpl();
