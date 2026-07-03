import type { GenerationProvider } from "../GenerationProvider";
import type { GenerationRequest, GenerationResponse } from "../types";

const MIN_DELAY_MS = 700;
const MAX_DELAY_MS = 1200;

function randomDelayMs(): number {
  return MIN_DELAY_MS + Math.floor(Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS));
}

function buildMockPrompt(request: GenerationRequest): string {
  return `Mock prompt: categoryId="${request.categoryId}", imageId="${request.imageId}", styleId="${request.styleId}"`;
}

export class MockGenerationProvider implements GenerationProvider {
  provider: GenerationProvider["provider"] = "mock";

  async generate(request: GenerationRequest): Promise<GenerationResponse> {
    const startedAt = Date.now();
    await new Promise((resolve) => setTimeout(resolve, randomDelayMs()));

    return {
      status: "success",
      generatedImageSrc: request.originalImageSrc,
      prompt: buildMockPrompt(request),
      model: "mock",
      provider: "mock",
      generationTimeMs: Date.now() - startedAt,
    };
  }
}
