export type GenerationProviderType =
  | "mock"
  | "openai"
  | "flux"
  | "gemini"
  | "local"
  | "comfyui";

export type GenerationStatus = "success" | "error";

export type GenerationRequest = {
  id?: string;
  categoryId: string;
  imageId: string;
  styleId: string;
  originalImageSrc: string;
  prompt?: string;
  // Type-only contract stub for the future PromptContext -> Prompt Engine ->
  // GenerationRequest -> Provider -> Model path (see
  // docs/adr/ADR-003-PromptContext-Contracts.md, Contract 1). Not wired to
  // any logic yet — providers may ignore it.
  negativePrompt?: string;
  metadata?: Record<string, unknown>;
};

export type GenerationResponse = {
  status: GenerationStatus;
  generatedImageSrc?: string;
  prompt?: string;
  negativePrompt?: string;
  model: string;
  provider: GenerationProviderType;
  generationTimeMs: number;
  error?: string;
  metadata?: Record<string, unknown>;
};
