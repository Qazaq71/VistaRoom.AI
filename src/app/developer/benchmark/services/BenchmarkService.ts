import { developerConfig } from "../../config/developer.config";
import { GenerationEngine } from "../../engines/GenerationEngine";
import type {
  BenchmarkCategory,
  BenchmarkImage,
  BenchmarkStyle,
  BenchmarkSession,
} from "../types/benchmark";

const MOCK_CATEGORIES: BenchmarkCategory[] = [
  { id: "living-room", name: "Living room", slug: "living-room" },
  { id: "kitchen", name: "Kitchen", slug: "kitchen" },
  { id: "bedroom", name: "Bedroom", slug: "bedroom" },
  { id: "bathroom", name: "Bathroom", slug: "bathroom" },
  { id: "office", name: "Office", slug: "office" },
  { id: "kids-room", name: "Kids room", slug: "kids-room" },
  { id: "cafe", name: "Cafe", slug: "cafe" },
  { id: "salon", name: "Salon", slug: "salon" },
  { id: "shop", name: "Shop", slug: "shop" },
  { id: "toilet", name: "Toilet", slug: "toilet" },
];

const MOCK_IMAGES: BenchmarkImage[] = [
  {
    id: "living-001",
    categoryId: "living-room",
    name: "Living room 001",
    src: `${developerConfig.benchmark.publicPath}/living-room/living-001.jpg`,
  },
  {
    id: "living-002",
    categoryId: "living-room",
    name: "Living room 002",
    src: `${developerConfig.benchmark.publicPath}/living-room/living-002.jpg`,
  },
  {
    id: "kitchen-001",
    categoryId: "kitchen",
    name: "Kitchen 001",
    src: `${developerConfig.benchmark.publicPath}/kitchen/kitchen-001.jpg`,
  },
  {
    id: "kitchen-002",
    categoryId: "kitchen",
    name: "Kitchen 002",
    src: `${developerConfig.benchmark.publicPath}/kitchen/kitchen-002.jpg`,
  },
  {
    id: "bedroom-001",
    categoryId: "bedroom",
    name: "Bedroom 001",
    src: `${developerConfig.benchmark.publicPath}/bedroom/bedroom-001.jpg`,
  },
  {
    id: "bedroom-002",
    categoryId: "bedroom",
    name: "Bedroom 002",
    src: `${developerConfig.benchmark.publicPath}/bedroom/bedroom-002.jpg`,
  },
];

// TODO: Replace mock styles with shared project styles source.
const MOCK_STYLES: BenchmarkStyle[] = [
  { id: "japandi", name: "Japandi" },
  { id: "scandinavian", name: "Scandinavian" },
  { id: "modern", name: "Modern" },
  { id: "minimalist", name: "Minimalist" },
  { id: "coastal", name: "Coastal" },
  { id: "industrial", name: "Industrial" },
];

export type GenerateInput = {
  categoryId: string;
  imageId: string;
  styleId: string;
};

export const BenchmarkService = {
  async getCategories(): Promise<BenchmarkCategory[]> {
    return MOCK_CATEGORIES;
  },

  async getImages(categoryId: string): Promise<BenchmarkImage[]> {
    return MOCK_IMAGES.filter((image) => image.categoryId === categoryId);
  },

  async getStyles(): Promise<BenchmarkStyle[]> {
    return MOCK_STYLES;
  },

  async generate(input: GenerateInput): Promise<BenchmarkSession> {
    const category = MOCK_CATEGORIES.find((item) => item.id === input.categoryId);
    const image = MOCK_IMAGES.find((item) => item.id === input.imageId);
    const style = MOCK_STYLES.find((item) => item.id === input.styleId);

    if (!category || !image || !style) {
      return {
        id: crypto.randomUUID(),
        categoryId: input.categoryId,
        imageId: input.imageId,
        styleId: input.styleId,
        originalImageSrc: image?.src ?? "",
        status: "error",
        error: "Invalid category, image, or style selection.",
        createdAt: new Date().toISOString(),
      };
    }

    const result = await GenerationEngine.generate({
      categoryId: category.id,
      imageId: image.id,
      styleId: style.id,
      originalImageSrc: image.src,
    });

    return {
      id: crypto.randomUUID(),
      categoryId: category.id,
      imageId: image.id,
      styleId: style.id,
      originalImageSrc: image.src,
      generatedImageSrc: result.generatedImageSrc,
      prompt: result.prompt,
      model: result.model,
      generationTimeMs: result.generationTimeMs,
      status: result.status,
      error: result.error,
      createdAt: new Date().toISOString(),
    };
  },
};
