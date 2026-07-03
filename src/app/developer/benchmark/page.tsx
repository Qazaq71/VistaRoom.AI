"use client";

import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import BenchmarkControls from "./components/BenchmarkControls";
import BenchmarkToolbar from "./components/BenchmarkToolbar";
import BenchmarkResult from "./components/BenchmarkResult";
import BenchmarkPrompt from "./components/BenchmarkPrompt";
import { BenchmarkService } from "./services/BenchmarkService";
import type {
  BenchmarkCategory,
  BenchmarkImage,
  BenchmarkStyle,
  BenchmarkSession,
} from "./types/benchmark";

export default function BenchmarkPage() {
  const [categories, setCategories] = useState<BenchmarkCategory[]>([]);
  const [images, setImages] = useState<BenchmarkImage[]>([]);
  const [styles, setStyles] = useState<BenchmarkStyle[]>([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [selectedStyleId, setSelectedStyleId] = useState<string | null>(null);

  const [session, setSession] = useState<BenchmarkSession | null>(null);
  const [status, setStatus] = useState<BenchmarkSession["status"]>("idle");

  useEffect(() => {
    BenchmarkService.getCategories().then(setCategories);
    BenchmarkService.getStyles().then(setStyles);
  }, []);

  useEffect(() => {
    if (!selectedCategoryId) {
      setImages([]);
      setSelectedImageId(null);
      return;
    }
    BenchmarkService.getImages(selectedCategoryId).then(setImages);
    setSelectedImageId(null);
  }, [selectedCategoryId]);

  const canGenerate = Boolean(selectedCategoryId && selectedImageId && selectedStyleId);

  async function handleGenerate() {
    if (!selectedCategoryId || !selectedImageId || !selectedStyleId) {
      return;
    }

    setStatus("generating");

    const result = await BenchmarkService.generate({
      categoryId: selectedCategoryId,
      imageId: selectedImageId,
      styleId: selectedStyleId,
    });

    setSession(result);
    setStatus(result.status);
  }

  function handleClear() {
    setSession(null);
    setStatus("idle");
  }

  return (
    <>
      <SectionHeader
        title="Benchmark"
        description="Compare generation quality across models and settings."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <BenchmarkControls
            categories={categories}
            images={images}
            styles={styles}
            selectedCategoryId={selectedCategoryId}
            selectedImageId={selectedImageId}
            selectedStyleId={selectedStyleId}
            onSelectCategory={setSelectedCategoryId}
            onSelectImage={setSelectedImageId}
            onSelectStyle={setSelectedStyleId}
          />

          <BenchmarkToolbar
            status={status}
            canGenerate={canGenerate}
            onGenerate={handleGenerate}
            onClear={handleClear}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="mb-4 text-sm font-medium text-neutral-700">Result</h2>
            <BenchmarkResult session={session} />
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="mb-4 text-sm font-medium text-neutral-700">Prompt & metadata</h2>
            <BenchmarkPrompt session={session} />
          </div>
        </div>
      </div>
    </>
  );
}
