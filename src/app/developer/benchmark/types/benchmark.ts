// Where Benchmark's input test images come from — a storage/data-source
// selector, unrelated to AI vendor integration. See
// docs/adr/ADR-001-Provider-Terminology.md ("Provider" is reserved for
// AI/model integrations; this concept uses "Source" instead).
export type BenchmarkSource = "mock" | "public" | "local" | "blob" | "s3";

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
