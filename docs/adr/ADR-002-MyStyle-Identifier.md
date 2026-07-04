# ADR-002 — `"my_style"` Identifier

## Status

Accepted. Partially applied in DS-5.1 (see "Update — DS-5.1 Architecture
Cleanup" below) — the constant now exists and is used by the two
domain-only modules; production call sites remain migrated in a later
stage.

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

A single canonical constant, `MY_STYLE_ID`, is the one source of truth for
this literal. It is exported from a new shared module,
`src/lib/interior/constants.ts` (not from `myStyle.ts` itself, so that
both `styles/**` and `prompt-domain/**` can depend on it without depending
on each other). Every comparison and assignment site listed above should
eventually import and reference this constant instead of retyping
`"my_style"`.

## Consequences

- This is a narrower, concrete instance of the general terminology
  discipline described in ADR-001 — one literal, one owner.
- Production call sites are migrated in a later stage in one pass (not
  partially), to avoid two sources of truth being active at once (see
  "Update" below for what remains).

## Update — DS-5.1 Architecture Cleanup

`MY_STYLE_ID` now exists: `src/lib/interior/constants.ts` exports
`export const MY_STYLE_ID = "my_style" as const;`. It is now the future
single source of truth referenced by this ADR.

**Applied (new domain modules only, as scoped for this stage):**

- `src/lib/interior/styles/myStyle.ts` — `MY_STYLE.id` now reads
  `MY_STYLE_ID` instead of the raw literal.
- `src/lib/interior/prompt-domain/types.ts` — `PromptGenerationMode` now
  reads `"preset" | typeof MY_STYLE_ID` instead of
  `"preset" | "my_style"`.

**Deliberately NOT touched (deferred to a future stage, per DS-5.1
scope):**

- `src/lib/interior/styles/types.ts` (`InteriorMyStyle.id: "my_style"`
  literal type) — not in the DS-5.1 scope (`myStyle.ts` and
  `prompt-domain/**` only); left as its own literal type for now.
- `src/lib/prompts.ts`, `src/app/api/generate/route.ts`,
  `src/app/page.tsx`, `src/hooks/useImageGeneration.ts`,
  `src/app/components/StylePicker.tsx` — all still use the raw
  `'my_style'` literal untouched, as required (no production/public-site
  changes in DS-5.1). Migrating these five files to `MY_STYLE_ID` remains
  future work, to be done in one pass per the Decision above.

## Update — DS-5.2 AI Core Final Polish

Re-audited; no change. DS-5.2's explicit constraint was "не менять Prompt
Domain," so `src/lib/interior/prompt-domain/**` (including
`types.ts`'s `typeof MY_STYLE_ID` usage from DS-5.1) was left exactly as
is. `src/lib/interior/styles/types.ts`'s standalone `"my_style"` literal
type and the five production call sites listed above remain unmigrated,
same as DS-5.1. This ADR's concrete direction is now folded under
[ADR-000](ADR-000-Architecture-Principles.md) principle 11
("Минимизировать magic strings").
