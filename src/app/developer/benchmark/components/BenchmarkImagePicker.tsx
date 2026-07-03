"use client";

import { useState } from "react";
import type { BenchmarkImage } from "../types/benchmark";

type BenchmarkImagePickerProps = {
  images: BenchmarkImage[];
  selectedImageId: string | null;
  onSelect: (imageId: string) => void;
};

function ImageThumb({ image }: { image: BenchmarkImage }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-24 w-full items-center justify-center rounded-md bg-neutral-100 text-xs text-neutral-400">
        No preview
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={image.src}
      alt={image.name}
      className="h-24 w-full rounded-md object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function BenchmarkImagePicker({
  images,
  selectedImageId,
  onSelect,
}: BenchmarkImagePickerProps) {
  if (images.length === 0) {
    return (
      <p className="rounded-md border border-dashed border-neutral-300 p-4 text-sm text-neutral-400">
        No benchmark images in this category yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((image) => {
        const isSelected = image.id === selectedImageId;
        return (
          <button
            key={image.id}
            type="button"
            onClick={() => onSelect(image.id)}
            className={`flex flex-col gap-2 rounded-md border p-2 text-left transition ${
              isSelected
                ? "border-neutral-900 ring-1 ring-neutral-900"
                : "border-neutral-200 hover:border-neutral-400"
            }`}
          >
            <ImageThumb image={image} />
            <span className="truncate text-xs text-neutral-600">{image.name}</span>
          </button>
        );
      })}
    </div>
  );
}
