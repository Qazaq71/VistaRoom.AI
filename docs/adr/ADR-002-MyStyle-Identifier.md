# ADR-002 — `"my_style"` Identifier

## Status

Accepted (direction only — no constant created yet).

## Context

The string literal **`"my_style"`** identifies the "Мой стиль" custom
generation mode (as opposed to a catalog style from
`INTERIOR_STYLE_REGISTRY`). It is currently duplicated as a raw literal in
at least these locations:

- `src/lib/interior/styles/myStyle.ts:8` — `MY_STYLE.id = "my_style"` (the
  one place that already looks like a canonical source of truth: an
  exported `const MY_STYLE: InteriorMyStyle` object).
- `src/lib/interior/styles/types.ts:29` — `InteriorMyStyle.id: "my_style"`
  redeclared as its own string-literal type, independent of the constant
  above.
- `src/lib/interior/prompt-domain/types.ts:16` —
  `PromptGenerationMode = "preset" | "my_style"`, a third independent
  re-declaration of the literal as a type.
- `src/lib/prompts.ts:61` — `const isMyStyle = styleKey === 'my_style'`.
- `src/app/api/generate/route.ts:42` — `if (style !== 'my_style') return ''`.
- `src/app/page.tsx:19,67,98` — compared against and passed as `'my_style'`
  three times.
- `src/hooks/useImageGeneration.ts:81` — `isMyStyle ? 'my_style' : style`.
- `src/app/components/StylePicker.tsx:6,221,222` — used as an object key
  and compared against `'my_style'` twice.

Even though `MY_STYLE.id` already exists as an exported value, none of the
comparison sites above import and compare against it — they all re-type
the raw string literal independently. This means the "single source of
truth" object exists in name but not in practice: renaming or namespacing
this identifier today would require editing every call site listed above,
with no compiler assistance beyond `types.ts`'s type-level literal (which
only catches typos in typed contexts, not the untyped `styleKey`/`style`
string params used in `prompts.ts`, `route.ts`, and `page.tsx`).

## Decision

In a future stage (not this one), a single canonical constant — e.g.
`MY_STYLE_ID` — should become the one source of truth for this literal,
exported from `src/lib/interior/styles/myStyle.ts` (alongside, or as part
of, the existing `MY_STYLE` object). Every comparison and assignment site
listed above should import and reference that constant instead of
retyping `"my_style"`.

No constant is created and no call site is changed as part of this ADR.
This document only fixes the direction so that DS-6 and later stages
introduce new `"my_style"`-adjacent code against a known target instead of
adding a ninth independent copy of the literal.

## Consequences

- No code changes in this stage.
- Future work that introduces a `MY_STYLE_ID` constant should update all
  call sites listed above in the same change, not partially, to avoid
  leaving two sources of truth active at once.
- This is a narrower, concrete instance of the general terminology
  discipline described in ADR-001 — one literal, one owner.
