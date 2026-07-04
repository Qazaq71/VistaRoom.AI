import type { PromptContext } from "../../prompt-domain";
import type { PromptDraft } from "./PromptDraft";

/**
 * First `PromptDraft` builder (DS-6.5). Reads a `PromptContext` and copies
 * its data, field by field, into the matching `PromptDraft` section — no
 * defaults filled in, no fields derived, no sections merged, nothing
 * enriched. It exists to prove the `PromptContext` → `PromptDraft` seam
 * end-to-end before Rule Engine or Formatter read/write `PromptDraft`.
 *
 * This is deliberately not a `PromptBuilder` (`../types.ts`) implementation
 * — that contract returns `PromptContext`, this one returns `PromptDraft`.
 * See `README.md`.
 */
export class PromptDraftBuilder {
  build(context: Readonly<PromptContext>): PromptDraft {
    return {
      style: {
        generationMode: context.style.generationMode,
        style: context.style.style,
        myStyle: context.style.myStyle,
      },
      room: {
        roomType: context.room.roomType,
        roomName: context.room.roomName,
        dimensions: context.room.dimensions,
        windows: context.room.windows,
        doors: context.room.doors,
        existingFurniture: context.room.existingFurniture,
      },
      materials: {
        materials: context.materials.materials,
        floorMaterial: context.materials.floorMaterial,
        wallMaterial: context.materials.wallMaterial,
        ceilingMaterial: context.materials.ceilingMaterial,
      },
      furniture: {
        items: context.furniture.items,
        layout: context.furniture.layout,
        replaceExisting: context.furniture.replaceExisting,
      },
      lighting: {
        lighting: context.lighting.lighting,
        lightingType: context.lighting.lightingType,
        temperature: context.lighting.temperature,
        naturalLight: context.lighting.naturalLight,
        accentLighting: context.lighting.accentLighting,
      },
      decor: {
        decor: context.decor.decor,
        plants: context.decor.plants,
        artwork: context.decor.artwork,
        textiles: context.decor.textiles,
      },
      constraints: {
        preserveGeometry: context.constraints.preserveGeometry,
        preserveWindows: context.constraints.preserveWindows,
        preserveDoors: context.constraints.preserveDoors,
        preserveFloor: context.constraints.preserveFloor,
        preserveCeiling: context.constraints.preserveCeiling,
        budgetLevel: context.constraints.budgetLevel,
      },
      negative: {
        negativePrompts: context.negativePrompt.negativePrompts,
      },
      metadata: {
        provider: context.metadata.provider,
        model: context.metadata.model,
        version: context.metadata.version,
        createdAt: context.metadata.createdAt,
        qualityLevel: context.metadata.qualityLevel,
      },
    };
  }
}
