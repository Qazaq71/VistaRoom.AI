export type BenchmarkProvider = "mock" | "public" | "local" | "blob" | "s3";

export type BenchmarkCategory = {
  id: string;
  name: string;
  slug: string;
};

export type BenchmarkImage = {
  id: string;
  categoryId: string;
  name: string;
  src: string;
  width?: number;
  height?: number;
};

export type BenchmarkStyle = {
  id: string;
  name: string;
  description?: string;
};

export type BenchmarkGenerationStatus = "idle" | "generating" | "success" | "error";

export type BenchmarkSession = {
  id: string;
  categoryId: string;
  imageId: string;
  styleId: string;
  originalImageSrc: string;
  generatedImageSrc?: string;
  prompt?: string;
  model?: string;
  generationTimeMs?: number;
  status: BenchmarkGenerationStatus;
  error?: string;
  createdAt: string;
};
