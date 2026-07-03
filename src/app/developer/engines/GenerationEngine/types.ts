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
  metadata?: Record<string, unknown>;
};

export type GenerationResponse = {
  status: GenerationStatus;
  generatedImageSrc?: string;
  prompt?: string;
  model: string;
  provider: GenerationProviderType;
  generationTimeMs: number;
  error?: string;
  metadata?: Record<string, unknown>;
};
