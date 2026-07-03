import type { BenchmarkCategory, BenchmarkImage, BenchmarkStyle } from "../types/benchmark";
import BenchmarkImagePicker from "./BenchmarkImagePicker";

type BenchmarkControlsProps = {
  categories: BenchmarkCategory[];
  images: BenchmarkImage[];
  styles: BenchmarkStyle[];
  selectedCategoryId: string | null;
  selectedImageId: string | null;
  selectedStyleId: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSelectImage: (imageId: string) => void;
  onSelectStyle: (styleId: string) => void;
};

export default function BenchmarkControls({
  categories,
  images,
  styles,
  selectedCategoryId,
  selectedImageId,
  selectedStyleId,
  onSelectCategory,
  onSelectImage,
  onSelectStyle,
}: BenchmarkControlsProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">Room category</label>
        <select
          value={selectedCategoryId ?? ""}
          onChange={(event) => onSelectCategory(event.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">Benchmark image</label>
        {selectedCategoryId ? (
          <BenchmarkImagePicker
            images={images}
            selectedImageId={selectedImageId}
            onSelect={onSelectImage}
          />
        ) : (
          <p className="rounded-md border border-dashed border-neutral-300 p-4 text-sm text-neutral-400">
            Select a category first.
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">Style</label>
        <select
          value={selectedStyleId ?? ""}
          onChange={(event) => onSelectStyle(event.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
        >
          <option value="" disabled>
            Select a style
          </option>
          {styles.map((style) => (
            <option key={style.id} value={style.id}>
              {style.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
