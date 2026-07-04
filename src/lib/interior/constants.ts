// Single source of truth for the "Мой стиль" custom-generation-mode
// identifier. See docs/adr/ADR-002-MyStyle-Identifier.md. Production
// call sites (StylePicker.tsx, prompts.ts, route.ts, page.tsx,
// useImageGeneration.ts) still use the raw "my_style" literal — their
// migration to this constant is deferred to a later stage.
export const MY_STYLE_ID = "my_style" as const;
