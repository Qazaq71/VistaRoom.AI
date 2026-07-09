# Source Review: mode/operation dispatch — сбор данных

Дата: 2026-07-09

Цель: подтвердить или опровергнуть, что диспетчеризация mode/operation,
найденная ранее в `app/api/generate/route.ts`, является единственной точкой
такой логики в проекте, а не дублируется/переопределяется где-то ещё.

Этот документ содержит только сырые данные (полное содержимое файлов и
результаты grep). Интерпретация находок не производится.

---

## 1. Полное содержимое файлов

### src/types/image.ts

```ts
// TODO(Stage 3+): future operations may include upscale, expand, outpaint,
// restyle, replace_furniture, clear_room, and prompt intelligence (automatic
// prompt enhancement/validation before submission). Do not add them here
// until the domain/service/provider logic actually supports them.
export type InteriorOperation = 'redesign' | 'replace' | 'erase'

export type InteriorMode = 'style' | 'partial' | 'clear'

// Named `ImageProviderName` (not `ImageProvider`) to avoid colliding with the
// `ImageProvider` interface in providers/image/ImageProvider.ts — both would
// otherwise be unimportable together under the same identifier.
export type ImageProviderName = 'fal'

// OpenAIImageProvider always submits 'medium' for now — 'low'/'high' are
// reserved for a future quality-tier feature.
export type ImageQuality = 'low' | 'medium' | 'high'

// Not used by the Fal provider yet — reserved for providers that accept an
// explicit output resolution instead of an aspect ratio.
export type ImageResolution = '1024x1024' | '1024x768' | '768x1024' | '1920x1080'
```

### src/domain/interior/InteriorEditRequest.ts

```ts
import type { InteriorOperation, InteriorMode, ImageQuality, ImageResolution } from '@/types/image'

// VisataRoom AI's single internal representation of "what the user wants done
// to their room photo". Provider-agnostic: no Fal (or any other vendor) field
// names, payload shapes, or transport details belong here — only domain intent.
export interface InteriorEditRequest {
  operation: InteriorOperation
  mode: InteriorMode
  prompt: string
  image: string
  mask?: string
  references?: string[]
  quality?: ImageQuality
  resolution?: ImageResolution
  guidanceScale?: number
  aspectRatio?: string
  metadata?: Record<string, unknown>
}
```

### src/domain/interior/InteriorEditResult.ts

```ts
import type { ImageProviderName } from '@/types/image'

// VisataRoom AI's single internal representation of what a provider handed
// back after accepting a generation request. Provider-agnostic result shape.
export interface InteriorEditResult {
  requestId: string
  statusUrl?: string
  responseUrl?: string
  provider: ImageProviderName
  raw?: unknown
}
```

### src/services/InteriorService.ts

```ts
import type { ImageProvider } from '@/providers/image/ImageProvider'
import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'

// Thin domain-facing orchestration layer between route.ts and the configured
// ImageProvider. Works exclusively with the InteriorEditRequest/-Result domain
// model — knows nothing about Fal.ai, URLs, or provider payload shapes.
export class InteriorService {
  constructor(private readonly provider: ImageProvider) {}

  async submit(request: InteriorEditRequest): Promise<InteriorEditResult> {
    return this.provider.submit(request)
  }
}
```

### src/providers/image/createImageProvider.ts

```ts
import { OpenAIImageProvider } from './OpenAIImageProvider'
import type { ImageProvider } from './ImageProvider'

// Single point where the concrete ImageProvider is instantiated. GPT Image 2
// Edit (via Fal.ai) is the only generation engine.
export function createImageProvider(): ImageProvider {
  return new OpenAIImageProvider()
}
```

### src/providers/image/ImageProvider.ts

```ts
import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'

export interface ImageProvider {
  submit(request: InteriorEditRequest): Promise<InteriorEditResult>
}
```

### src/providers/image/OpenAIImageProvider.ts

```ts
import {
  OPENAI_IMAGE_MODEL_URL,
  OPENAI_IMAGE_DEFAULT_QUALITY,
  FAL_REQUEST_TIMEOUT_HEADER,
  FAL_OUTPUT_FORMAT,
  FAL_NUM_IMAGES,
} from '@/config/image'
import type { InteriorEditRequest } from '@/domain/interior/InteriorEditRequest'
import type { InteriorEditResult } from '@/domain/interior/InteriorEditResult'
import type { ImageProvider } from './ImageProvider'

// Fal.ai's queue submit response wire shape — Fal-specific naming stays local
// to this file; nothing outside OpenAIImageProvider should ever see it.
interface FalSubmitResponse {
  request_id: string
  response_url: string
  status_url: string
  cancel_url: string
}

// Structured, production-safe logging confined to this file (no project-wide
// logger exists yet). Full diagnostic detail goes here; only sanitized
// messages are ever thrown up to the API route / client.
const PROVIDER_NAME = 'fal'
const MODEL_NAME = 'openai/gpt-image-2/edit'

function logInfo(event: string, fields: Record<string, unknown>): void {
  console.info(JSON.stringify({ level: 'info', source: 'OpenAIImageProvider', event, ...fields }))
}

function logError(event: string, fields: Record<string, unknown>): void {
  console.error(JSON.stringify({ level: 'error', source: 'OpenAIImageProvider', event, ...fields }))
}

// User-facing fallback message — never includes upstream response bodies,
// URLs, or payloads. Full detail is always logged via logError() above.
const GENERIC_FAILURE_MESSAGE = 'Сервис генерации временно недоступен. Попробуйте позже.'

// The only module allowed to talk to queue.fal.run, read FAL_API_KEY, or know
// about the GPT Image 2 Edit payload shape (image_urls, mask_url, request_id, ...).
// It is the adapter between VisataRoom AI's InteriorEditRequest/-Result domain
// model and Fal.ai's wire format for openai/gpt-image-2/edit. Named after the
// OpenAI image model family (not the specific "gpt-image-2" version) so a
// future GPT Image 3/4 edit endpoint only requires a config change here.
function falHeaders(): Record<string, string> {
  return {
    Authorization: `Key ${process.env.FAL_API_KEY}`,
    'Content-Type': 'application/json',
    'X-Fal-Request-Timeout': FAL_REQUEST_TIMEOUT_HEADER,
  }
}

async function submitToFal(
  url: string,
  body: Record<string, unknown>,
  operation: string,
): Promise<InteriorEditResult> {
  const startedAt = Date.now()

  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: falHeaders(),
      body: JSON.stringify(body),
    })
  } catch (err: unknown) {
    logError('generation_request_error', {
      provider: PROVIDER_NAME,
      model: MODEL_NAME,
      operation,
      durationMs: Date.now() - startedAt,
      error: err instanceof Error ? err.message : String(err),
    })
    throw new Error(GENERIC_FAILURE_MESSAGE)
  }

  if (!res.ok) {
    const errText = await res.text()
    logError('generation_failed', {
      provider: PROVIDER_NAME,
      model: MODEL_NAME,
      operation,
      status: res.status,
      durationMs: Date.now() - startedAt,
      responseBody: errText,
    })
    throw new Error(GENERIC_FAILURE_MESSAGE)
  }

  const data = await res.json() as FalSubmitResponse

  if (!data.request_id) {
    logError('generation_missing_request_id', {
      provider: PROVIDER_NAME,
      model: MODEL_NAME,
      operation,
      durationMs: Date.now() - startedAt,
      responseBody: JSON.stringify(data),
    })
    throw new Error(GENERIC_FAILURE_MESSAGE)
  }

  logInfo('generation_finished', {
    provider: PROVIDER_NAME,
    model: MODEL_NAME,
    operation,
    durationMs: Date.now() - startedAt,
    outputFormat: FAL_OUTPUT_FORMAT,
  })

  return {
    requestId: data.request_id,
    statusUrl: data.status_url,
    responseUrl: data.response_url,
    provider: 'fal',
    raw: data,
  }
}

// GPT Image 2 Edit has no promptless "erase" mode — /api/generate submits an
// empty prompt for that operation (masked-object removal), so this fallback
// tells the model what to do with the masked region.
const ERASE_FALLBACK_PROMPT =
  'Remove the object inside the masked area completely and realistically fill the region to match the surrounding background, textures, lighting and perspective.'

export class OpenAIImageProvider implements ImageProvider {
  async submit(request: InteriorEditRequest): Promise<InteriorEditResult> {
    const prompt = request.prompt || (request.operation === 'erase' ? ERASE_FALLBACK_PROMPT : '')

    // Fields match Fal.ai's openai/gpt-image-2/edit input schema exactly:
    // image_urls (list, required), mask_url (string, optional), prompt,
    // quality, num_images, output_format.
    const payload: Record<string, unknown> = {
      image_urls: [request.image],
      prompt,
      quality: OPENAI_IMAGE_DEFAULT_QUALITY,
      num_images: FAL_NUM_IMAGES,
      output_format: FAL_OUTPUT_FORMAT,
    }
    if (request.mask) payload.mask_url = request.mask

    logInfo('generation_started', {
      provider: PROVIDER_NAME,
      model: MODEL_NAME,
      operation: request.operation,
      quality: OPENAI_IMAGE_DEFAULT_QUALITY,
    })

    return submitToFal(OPENAI_IMAGE_MODEL_URL, payload, request.operation)
  }
}
```

---

## 2. Grep-результаты по всему репозиторию

Поиск выполнен рекурсивно по всему репозиторию, исключая `node_modules`,
`.git`, `dist`, `build`, `.next`. Формат: `путь:строка:текст строки`.

### mode

Найдено **369** совпадений в **70** файлах. Список > 50 совпадений — разделён
по директориям (без сокращения количества результатов внутри каждой группы),
общее число указано выше и повторяется под каждой группой.

#### (root) — 3 совпадения

```
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:14:## 2. Replace (с маской, mode=partial)
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:21:## 3. Erase (с маской, mode=clear)
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:24:- Проверить в логах: `promptUsed` в ответе `/api/generate` = `"(no prompt — erase mode)"`,
```

#### docs\AI_CORE_CHECKLIST.md — 9 совпадений

```
docs\AI_CORE_CHECKLIST.md:35:      `FLUX`/`Gemini`/`Claude`/`ComfyUI`/local-model branching anywhere
docs\AI_CORE_CHECKLIST.md:215:- [ ] AI Core Evolution Axiom ("Metadata enriches an existing model.
docs\AI_CORE_CHECKLIST.md:216:      Composition combines existing models. Registry organizes reusable
docs\AI_CORE_CHECKLIST.md:217:      models. Top-level contract changes are the last resort.")
docs\AI_CORE_CHECKLIST.md:222:      (21) / model evolution (22), каждый отвечает ровно на один вопрос
docs\AI_CORE_CHECKLIST.md:311:      model was created (DS-7.3, ADR-000 Principle 19)
docs\AI_CORE_CHECKLIST.md:382:- [ ] Metadata Evolution documented, current model unchanged — the
docs\AI_CORE_CHECKLIST.md:474:- [ ] `SpatialPromptContext` is a new composition model, not a
docs\AI_CORE_CHECKLIST.md:600:      model itself (Registry shape, Versioning/Stability/Confidence/Review
```

#### docs\ARCHITECTURE.md + docs\architecture\audits\ — 14 совпадений

```
docs\architecture\audits\Architecture-Freeze-Resolution.md:66:  - **ADR-006** — Generation Intelligence `mode`-контракт (номер из backlog подтверждён без изменений).
docs\architecture\audits\Architecture-Freeze-Resolution.md:139:| R4 | Формализация ADR-005 (Formatter) и ADR-006 (Generation mode) | Architecture | Critical | **Да** | ✅ Закрыто |
docs\ARCHITECTURE.md:49:  — терминология "Provider = AI/model integration, Source = данные/сторедж"
docs\ARCHITECTURE.md:771:migration, 21 — spatial architecture, 22 — model evolution), **AI Core
docs\ARCHITECTURE.md:926:model сам является механизмом эволюции, будущие модули развиваются внутри
docs\ARCHITECTURE.md:965:**permanently**: after this stage, the governance model built across
docs\ARCHITECTURE.md:985:extend this foundation rather than redesign it. The governance model is
docs\ARCHITECTURE.md:992:of modifying the governance model itself. Governance changes should occur
docs\ARCHITECTURE.md:1000:redesign of the governance model itself requires a new architecture
docs\ARCHITECTURE.md:1064:follow the existing governance model. Changing the governance model itself
docs\ARCHITECTURE.md:1287:  `energy`, `sustainability`), explicitly none implemented, current model
docs\ARCHITECTURE.md:1332:Adapter/Mapping component, not as a change to either model's own shape").
docs\ARCHITECTURE.md:1361:  independent composition model — not a replacement of, inheritance of, or
docs\ARCHITECTURE.md:1379:- **`README.md`** — full architectural rationale: the composition model,
```

#### docs\adr\ — 134 совпадения

```
docs\adr\ADR-004-Spatial-Classification-Boundary.md:73:- `SpaceType` is an **independent spatial model**, belonging to
docs\adr\ADR-004-Spatial-Classification-Boundary.md:104:turns one into the other. The two stay two distinct models connected only
docs\adr\ADR-004-Spatial-Classification-Boundary.md:114:> metadata, mappings or intermediate models.
docs\adr\ADR-004-Spatial-Classification-Boundary.md:119:> Both models must remain independent concepts throughout the lifetime
docs\adr\ADR-004-Spatial-Classification-Boundary.md:125:it from eroding later — the most common failure mode in large AI
docs\adr\ADR-004-Spatial-Classification-Boundary.md:126:projects is not a single deliberate decision to merge two models, but a
docs\adr\ADR-004-Spatial-Classification-Boundary.md:184:model to stop being what Section 2 says it is.
docs\adr\ADR-004-Spatial-Classification-Boundary.md:204:1. Does `RoomContext` remain a model of user input?
docs\adr\ADR-004-Spatial-Classification-Boundary.md:205:2. Does `SpaceType` remain a model of spatial classification?
docs\adr\ADR-004-Spatial-Classification-Boundary.md:208:4. Does the change avoid merging the two models into one?
docs\adr\ADR-004-Spatial-Classification-Boundary.md:262:  models through an explicit adapter, rather than by extending
docs\adr\ADR-004-Spatial-Classification-Boundary.md:265:  Contract` change to either model.
docs\adr\ADR-004-Spatial-Classification-Boundary.md:323:An explicit, named mapping step translates one model into the other. Both
docs\adr\ADR-004-Spatial-Classification-Boundary.md:324:models keep their own identity; the mapping is the only thing that knows
docs\adr\ADR-004-Spatial-Classification-Boundary.md:354:and that it is the sole point of contact between the two models. Choosing
docs\adr\ADR-004-Spatial-Classification-Boundary.md:384:  `SpaceType` is built as an independent model under Spatial
docs\adr\ADR-004-Spatial-Classification-Boundary.md:389:  a change to either model's own shape.
docs\adr\ADR-004-Spatial-Classification-Boundary.md:436:  independent composition model — not `RoomContext`, not `SpaceType`, and
docs\adr\ADR_MAP.md:145:| PROVIDER | ADR-001 | `Provider` (AI/model vendor) vs `Source` (data/storage origin) | Optional future rename pass unifying `ImageProvider`/`GenerationProvider` → `AIProvider` (Phase 10) |
docs\adr\ADR_MAP.md:149:| KNOWLEDGE | none yet (ADR-000 Principles 19/22) | Knowledge Core stays composition-based, not a parallel model hierarchy | Candidate: Knowledge Graph ADR if graph semantics become load-bearing |
docs\adr\ADR_MAP.md:154:| BRIDGE-GENERATION | ADR-006 | `mode` Invariant (`FULL_GENERATION` ↔ `PARTIAL_EDIT`/`INPAINTING` vs. `maskRegion`) | Contract tests (Gate 1); future `MULTI_STAGE` mode requires a new ADR, not an extension of ADR-006 |
docs\adr\ADR-003-PromptContext-Contracts.md:12:pure-data domain model with **no consumers yet** — per its own README
docs\adr\ADR-003-PromptContext-Contracts.md:72:decided: `openai/gpt-image-2/edit` (today's only production model,
docs\adr\ADR-003-PromptContext-Contracts.md:75:folded into the positive prompt text, dropped for this model, or requires
docs\adr\ADR-003-PromptContext-Contracts.md:76:a model change is left open.
docs\adr\ADR-003-PromptContext-Contracts.md:78:## Contract 2 — `generationMode` ↔ production mode/operation enums
docs\adr\ADR-003-PromptContext-Contracts.md:80:Three differently-scoped "mode"-shaped enums exist today and are **not**
docs\adr\ADR-003-PromptContext-Contracts.md:85:  model performs.
docs\adr\ADR-003-PromptContext-Contracts.md:87:  — the production API's request mode, used in `route.ts` to choose which
docs\adr\ADR-003-PromptContext-Contracts.md:114:   it into the existing mode/operation enums.
docs\adr\ADR-003-PromptContext-Contracts.md:116:   already shares the word "mode" with `InteriorMode` for a different axis
docs\adr\ADR_INDEX.md:100:| **PROVIDER** | AI/model vendor integration, storage/source terminology | ADR-001 |
docs\adr\ADR_INDEX.md:106:| **BRIDGE-GENERATION** | Track 1 ↔ Track 2 bridge — Generation Intelligence `mode` contract (mapped to ACS-001 Generation Intelligence) | ADR-006 |
docs\adr\ADR_INDEX.md:147:[строка пропущена инструментом поиска: превышена длина строки для инлайн-вывода]
docs\adr\ADR_INDEX.md:148:[строка пропущена инструментом поиска: превышена длина строки для инлайн-вывода]
docs\adr\ADR_INDEX.md:219:| 1.0 | Created — formalizes the `mode` contract (`FULL_GENERATION`/`PARTIAL_EDIT`/`INPAINTING`) already fully specified in ACS-001, plus the R1 narrow Track1↔Track2 bridge row for Generation Intelligence, per Architecture Freeze Resolution R4. No new decision content; no code changed. |
docs\adr\ADR_INDEX.md:234:| ADR-006 | Every Phase | `Accepted` status; the `mode` contract must be re-verified as each subsequent Generation Intelligence consumer (Gate 1 Formatter, Gate 5 Room Transformation, Gate 9 Quality Intelligence refinement) is implemented. |
docs\adr\ADR_INDEX.md:289:| **Cardinality today** | Every ADR-001..006 depends on ADR-000 only | ADR-001↔ADR-002 (terminology family), ADR-002↔ADR-003 (`MY_STYLE_ID` reference), ADR-003↔ADR-004 (`PromptContext` family), ADR-003↔ADR-005 (Prompt Engine/Formatter family), ADR-001↔ADR-006 (Provider/Generation Engine family), ADR-003↔ADR-006 (both name a "mode"-shaped concept, explicitly non-equivalent) |
docs\adr\ADR_INDEX.md:322:| BRIDGE-GENERATION | ADR-006 | Complete (documented) | Growing | Medium | `mode` invariant contract tests, Gate 1; possible `MULTI_STAGE` mode extension at Phase H requires a new ADR, not an extension of ADR-006 |
docs\adr\ADR_INDEX.md:326:A five-level maturity model for AI Core's architecture documentation,
docs\adr\ADR_INDEX.md:333:| 2 | **Boundaries** | Concrete boundaries between specific models are fixed and protected (ADR-004 `RoomContext` ↔ `SpaceType`, Prompt Domain/UI boundary) | ✓ Complete |
docs\adr\ADR_INDEX.md:336:| 5 | **Evolution** | The governance model itself supports controlled, long-term change — new decisions are added *through* the model (Registry rows, History entries, Review Frequency, Confidence), not by inventing a new process each time | ✓ **Achieved (DS-7.1.3d)** |
docs\adr\ADR_INDEX.md:341:governance model itself (Versioning Policy, Stability Policy, Review
docs\adr\ADR_INDEX.md:346:this existing governance model** — they register a new ADR or extend an
docs\adr\ADR_INDEX.md:364:      by ADR-004; `decisionTrace` Invariant by ADR-005; `mode` Invariant by
docs\adr\ADR_INDEX.md:398:  that protects one specific pair of models or one specific area belongs
docs\adr\ADR_INDEX.md:413:3. **Every boundary has one owner.** A boundary between two models is
docs\adr\ADR_INDEX.md:494:implementation is Gate 1 / R3, and the `mode` invariant has no tests yet —
docs\adr\ADR_INDEX.md:549:- **ADR-006 → Growing.** The `mode` contract and its invariant are
docs\adr\ADR_INDEX.md:559:| Boundary Invariant | ADR-004 | `RoomContext` ↔ `SpaceType` | Prevents `RoomContext` and `SpaceType` from collapsing into one model; only an explicit Adapter/Mapping connects them. |
docs\adr\ADR_INDEX.md:561:| `mode` Invariant | ADR-006 | Generation Intelligence `generate()` input (`mode` ↔ `maskRegion`) | Generation Intelligence must reject any call where `mode = FULL_GENERATION` carries a `maskRegion`, or where `mode = PARTIAL_EDIT`/`INPAINTING` lacks one — enforced by contract tests, never left to caller discipline. |
docs\adr\ADR_INDEX.md:571:   terminology decisions, not model boundaries)
docs\adr\ADR_INDEX.md:585:| ADR-001 | ✓ | — (terminology decision, no model boundary) | — | ✓ (table) | ✓ (3 entries) | ✓ | ✓ (Phase 10 renaming pass) | ✓ On-modify / High |
docs\adr\ADR_INDEX.md:586:| ADR-002 | ✓ | — (single-constant decision, no model boundary) | — | ✓ | ✓ (3 entries) | ✓ | ✓ (production migration, one pass) | ✓ On-modify / High |
docs\adr\ADR_INDEX.md:590:| ADR-006 | ✓ | ✓ (`mode` Invariant) | ✓ (Track1↔Track2 Generation Intelligence bridge row, R1) | ✓ | ✓ (1 entry) | ✓ (Principles 7, 8) | ✓ (Gate 1 contract tests, future `MULTI_STAGE` mode via new ADR) | ✓ Every Phase / Medium |
docs\adr\ADR_INDEX.md:612:  across different ADRs (the exact failure mode ADR-001/ADR-000 Principle
docs\adr\ADR_INDEX.md:678:  not a model boundary — as ADR-001/002 already do)
docs\adr\ADR_INDEX.md:758:| **Boundary** | The documented line between two models or layers that must never collapse into each other (e.g. `RoomContext` ↔ `SpaceType`, ADR-004). |
docs\adr\ADR_INDEX.md:760:| **Registry** | A plain, typed lookup structure that organizes reusable instances of a model (Style Registry, Knowledge Registry, Design Domain Registry, Rule Registry). |
docs\adr\ADR_INDEX.md:761:| **Composition** | Building a new, larger structure out of existing models, each keeping its own identity (ADR-000 Principle 19; e.g. `PromptContext` composed of sub-contexts). |
docs\adr\ADR_INDEX.md:762:| **Metadata** | A field on an existing model reserved for extending that model without changing its top-level shape (e.g. `DesignDomain.metadata`). |
docs\adr\ADR_INDEX.md:847:**without changing the governance model itself** — the Registry shape,
docs\adr\ADR-002-MyStyle-Identifier.md:13:generation mode (as opposed to a catalog style from
docs\adr\ADR-001-Provider-Terminology.md:18:   `InteriorEditRequest`/`InteriorEditResult` domain model and a real AI
docs\adr\ADR-001-Provider-Terminology.md:73:| Vendor/model identifier string carried on a request/result | `ImageProviderName` | Keep as-is — already correctly disambiguated |
docs\adr\ADR-001-Provider-Terminology.md:91:**Rule fixed:** `Provider` is reserved exclusively for AI/model
docs\adr\ADR-001-Provider-Terminology.md:111:  table above, this is legitimately an AI/model-integration concept (the
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:11:Intelligence: контракт режимов `mode`»).
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:37:разграничение по параметру `mode`, а не по отдельным реализациям:
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:41:| **Режим (`mode`)** | `FULL_GENERATION` | `PARTIAL_EDIT` или `INPAINTING` |
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:52:на основании явно переданного параметра `mode`**, а не самостоятельного
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:55:- `mode = FULL_GENERATION`, но передана маска/регион — несогласованный
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:57:- `mode = PARTIAL_EDIT` или `INPAINTING`, но маска/регион отсутствует.
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:100:  `mode = FULL_GENERATION`.
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:102:  `mode = PARTIAL_EDIT` или `INPAINTING`.
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:135:  mode: "FULL_GENERATION" | "PARTIAL_EDIT" | "INPAINTING",
docs\adr\ADR-006-Generation-Intelligence-Mode-Contract.md:171:  требует явного расширения enum `mode` и отдельного ADR, а не неявного
docs\adr\ADR-Backlog-Consolidated.md:16:| ADR-006 (предл.) | Generation Intelligence: контракт режимов `mode` | ACS-001 | Явное разграничение `FULL_GENERATION` (PCS-001) и `PARTIAL_EDIT`/`INPAINTING` (PCS-002) как инвариант контракта, проверяемый тестами. | Да — перед Gate 1 и Gate 5. |
docs\adr\ADR-008-Generation-Intelligence-Architectural-Boundaries.md:30:(fal.ai queue); mask-инвариант ADR-006 нигде не реализован; терминология `mode`
docs\adr\ADR-008-Generation-Intelligence-Architectural-Boundaries.md:31:в коде не совпадает 1:1 с enum ADR-006; `mode === 'clear'` не покрыт ADR-006
docs\adr\ADR-008-Generation-Intelligence-Architectural-Boundaries.md:43:между диспетчеризацией по `mode` в `route.ts` и вызовом провайдера. Решение:
docs\adr\ADR-008-Generation-Intelligence-Architectural-Boundaries.md:64:Mapping production mode ↔ ADR-006 выходит за рамки настоящего документа и будет
docs\adr\ADR-008-Generation-Intelligence-Architectural-Boundaries.md:76:- Mapping production mode ↔ ADR-006 enum.
docs\adr\ADR-000-Architecture-Principles.md:30:   the domain models themselves must never import from
docs\adr\ADR-000-Architecture-Principles.md:68:   adapters that call a real external AI/model vendor API (`ImageProvider`
docs\adr\ADR-000-Architecture-Principles.md:79:    "mode" — see ADR-003 Contract 2), one of the two gets a different
docs\adr\ADR-000-Architecture-Principles.md:97:    model, not the other way around.
docs\adr\ADR-000-Architecture-Principles.md:101:    ComfyUI, or any local model. It works only with `PromptContext`.
docs\adr\ADR-000-Architecture-Principles.md:102:    Which specific AI model/vendor is used is exclusively Provider's
docs\adr\ADR-000-Architecture-Principles.md:135:    blocks — a new independent model is allowed only when it both (a)
docs\adr\ADR-000-Architecture-Principles.md:163:    model — Design Domain, Space Type, Knowledge, Prompt Domain, Prompt
docs\adr\ADR-000-Architecture-Principles.md:167:    top-level property or a new independent model. The single official
docs\adr\ADR-000-Architecture-Principles.md:168:    evaluation order is: reuse an existing model; if the model already
docs\adr\ADR-000-Architecture-Principles.md:357:introduced with independent Section models) and DS-6.5.1 (Section models
docs\adr\ADR-000-Architecture-Principles.md:426:- The static, enumerated model is simpler to read, write, and reason
docs\adr\ADR-000-Architecture-Principles.md:462:over Duplication) both describe how a single step or a single new model
docs\adr\ADR-000-Architecture-Principles.md:503:  (production) kept running unmodified — the new domain model didn't
docs\adr\ADR-000-Architecture-Principles.md:541:  make room for a new internal model, when the new model could instead be
docs\adr\ADR-000-Architecture-Principles.md:572:  change: 19 stops you from building a *parallel model* that duplicates
docs\adr\ADR-000-Architecture-Principles.md:715:statement, the natural failure mode for any small, stable top-level
docs\adr\ADR-000-Architecture-Principles.md:722:extension point and writing down the order in which any AI Core model —
docs\adr\ADR-000-Architecture-Principles.md:733:any model is evaluated in this order, stopping at the first step that
docs\adr\ADR-000-Architecture-Principles.md:739:Metadata (only if the model already has it)
docs\adr\ADR-000-Architecture-Principles.md:749:object, for any model that already has an established `metadata` field —
docs\adr\ADR-000-Architecture-Principles.md:751:cheaper than composing a new one. For a model with no `metadata` field,
docs\adr\ADR-000-Architecture-Principles.md:801:  in one place (the existing model's `metadata`), not in a second,
docs\adr\ADR-000-Architecture-Principles.md:808:  instinct applied to a single model's own field list, not just to
docs\adr\ADR-000-Architecture-Principles.md:821:`Design Domain` (and every other AI Core model), not what they build.
docs\adr\ADR-000-Architecture-Principles.md:851:Reuse existing model?             ── YES ──▶ Reuse
docs\adr\ADR-000-Architecture-Principles.md:867:every model, with one conditional step: "Can existing metadata express
docs\adr\ADR-000-Architecture-Principles.md:868:it?" only applies to models that already have a `metadata` field — see
docs\adr\ADR-000-Architecture-Principles.md:869:§3 below for models that don't.
docs\adr\ADR-000-Architecture-Principles.md:876:- **Metadata extends an existing model.** It adds descriptive/operational
docs\adr\ADR-000-Architecture-Principles.md:877:  information *to* a single model that already exists, without changing
docs\adr\ADR-000-Architecture-Principles.md:880:- **Composition combines existing models.** It builds a new, larger
docs\adr\ADR-000-Architecture-Principles.md:881:  structure *out of* other already-existing models, each keeping its own
docs\adr\ADR-000-Architecture-Principles.md:887:first only when it is actually on the table (the model already supports
docs\adr\ADR-000-Architecture-Principles.md:889:than composing a new object. When a model has no `metadata` field, there
docs\adr\ADR-000-Architecture-Principles.md:895:If a model has no `metadata` field, its Decision Flow simplifies to:
docs\adr\ADR-000-Architecture-Principles.md:908:`metadata` does not exist for that model to extend. Examples of models
docs\adr\ADR-000-Architecture-Principles.md:944:| **22** — Evolution through Composition | **Model evolution** — in what order should any single model be extended? |
docs\adr\ADR-000-Architecture-Principles.md:948:Principle 21 (and every future model) must follow when it grows. Neither
docs\adr\ADR-000-Architecture-Principles.md:956:> Metadata enriches an existing model.
docs\adr\ADR-000-Architecture-Principles.md:957:> Composition combines existing models.
docs\adr\ADR-000-Architecture-Principles.md:958:> Registry organizes reusable models.
docs\adr\ADR-000-Architecture-Principles.md:968:- **Metadata adds information** to a model that already exists, without
docs\adr\ADR-000-Architecture-Principles.md:969:  changing what the model fundamentally is.
docs\adr\ADR-000-Architecture-Principles.md:970:- **Composition creates larger structures from existing models** — the
docs\adr\ADR-000-Architecture-Principles.md:974:  of an existing model are collected and looked up, without changing the
docs\adr\ADR-000-Architecture-Principles.md:975:  model's shape.
docs\adr\ADR-000-Architecture-Principles.md:990:Reuse existing model?
docs\adr\ADR-000-Architecture-Principles.md:1005:The Principles most relevant to model evolution form one coherent chain,
docs\adr\ADR-000-Architecture-Principles.md:1026:the first concrete spatial model built under that discipline; Principle
docs\adr\ADR-000-Architecture-Principles.md:1028:composition) into a rule for every model; the Axiom (§6) is that same
```

Примечание: строки `ADR_INDEX.md:147` и `ADR_INDEX.md:148` были возвращены
инструментом поиска как `[Omitted long matching line]` (инструмент опустил
содержимое из-за длины строки) — сам факт совпадения зафиксирован, точный
текст строки не был получен через использованный инструмент.

#### src\lib\ — 115 совпадений

```
src\lib\prompts.ts:42:  organic_modern:   'organic modern style, natural materials, warm earth tones, curved forms, biophilic',
src\lib\prompts.ts:43:  contemporary:     'contemporary style, clean lines, neutral palette, functional and modern',
src\lib\prompts.ts:44:  mid_century:      'mid-century modern style, 1950s wood furniture, geometric forms, retro palette',
src\lib\prompts.ts:48:  modern_farmhouse: 'modern farmhouse style, shiplap walls, natural wood, rustic charm',
src\lib\prompts.ts:57:  mode: 'style' | 'partial' = 'style',
src\lib\prompts.ts:63:  if (mode === 'partial') {
src\lib\prompts.ts:254:  // Skin/terracotta: moderate saturation, red dominant
src\lib\interior\styles\registry.ts:69:    id: "organic_modern",
src\lib\interior\styles\registry.ts:70:    slug: "organic_modern",
src\lib\interior\styles\registry.ts:75:    promptFragment: "organic modern style, natural materials, warm earth tones, curved forms, biophilic",
src\lib\interior\styles\registry.ts:92:    promptFragment: "contemporary style, clean lines, neutral palette, functional and modern",
src\lib\interior\styles\registry.ts:109:    promptFragment: "mid-century modern style, 1950s wood furniture, geometric forms, retro palette",
src\lib\interior\styles\registry.ts:260:    id: "modern_farmhouse",
src\lib\interior\styles\registry.ts:261:    slug: "modern_farmhouse",
src\lib\interior\styles\registry.ts:266:    promptFragment: "modern farmhouse style, shiplap walls, natural wood, rustic charm",
src\lib\interior\styles\README.md:18:остальными (например, `MOCK_STYLES` содержит `"modern"`, которого нет ни в
src\lib\interior\styles\myStyle.ts:5: * "Мой стиль" is a custom-configuration generation mode, not a design style.
src\lib\interior\design-domain\README.md:147:> **AI Core Evolution Axiom** — Metadata enriches an existing model.
src\lib\interior\design-domain\README.md:148:> Composition combines existing models. Registry organizes reusable
src\lib\interior\design-domain\README.md:149:> models. Top-level contract changes are the last resort.
src\lib\interior\design-domain\README.md:165:Reuse existing model?             ── YES ──▶ Reuse
src\lib\interior\constants.ts:1:// Single source of truth for the "Мой стиль" custom-generation-mode
src\lib\interior\prompt-integration\types.ts:20: * own models (ADR-000 Principle 22, "Metadata" step). Nothing populates
src\lib\interior\prompt-integration\types.ts:35: * duplication of its fields — it is a new, independent composition model
src\lib\interior\prompt-integration\README.md:12:explicit Adapter/Mapping component, not as a change to either model's own
src\lib\interior\prompt-integration\README.md:81:## 3. `SpatialPromptContext` — a new composition model
src\lib\interior\prompt-integration\README.md:84:model — **not** a replacement of `PromptContext` (`prompt-domain/types.ts`),
src\lib\interior\prompt-integration\README.md:449:`RoomContext` and `SpaceType` into one model:
src\lib\interior\knowledge\core\Entity.ts:4: * thing is this in the knowledge model" — and is intentionally distinct
src\lib\interior\knowledge\styles\README.md:12:`mediterranean`, `loft`, `cyberpunk`, `organic_modern`, `contemporary`,
src\lib\interior\knowledge\styles\README.md:14:`modern_farmhouse`, `maximalism`, `industrial`, `japanese_zen`.
src\lib\interior\knowledge\styles\artdeco.ts:21:    "Period-accurate motifs over modern minimalism",
src\lib\interior\knowledge\styles\index.ts:18:import { MODERN_FARMHOUSE_KNOWLEDGE } from "./modernFarmhouse";
src\lib\interior\knowledge\styles\organicModern.ts:4:  id: "organic_modern_knowledge",
src\lib\interior\knowledge\styles\organicModern.ts:5:  styleId: "organic_modern",
src\lib\interior\knowledge\styles\organicModern.ts:13:    "Soften modern minimalism with organic curves and warmth",
src\lib\interior\knowledge\styles\organicModern.ts:71:    style: "organic modern style, natural materials, warm earth tones, curved forms, biophilic",
src\lib\interior\knowledge\styles\contemporary.ts:9:    "A current, ever-evolving take on modern living: clean lines, a " +
src\lib\interior\knowledge\styles\contemporary.ts:72:    style: "contemporary style, clean lines, neutral palette, functional and modern",
src\lib\interior\knowledge\styles\mediterranean.ts:76:    negative: "no cold industrial finishes, no dark closed rooms, no glossy modern surfaces",
src\lib\interior\knowledge\styles\mediterranean.ts:82:    "Glossy modern surfaces",
src\lib\interior\knowledge\styles\loft.ts:85:    "Overly polished modern finishes",
src\lib\interior\prompt-domain\types.ts:15: * Registry) or from a user-defined custom style (`MY_STYLE_ID` mode).
src\lib\interior\prompt-domain\types.ts:28: * (provider/model/version bookkeeping) and adds the domain-wide quality
src\lib\interior\prompt-domain\types.ts:36: * The central domain model of VisataRoom AI's AI Core: a complete,
src\lib\interior\knowledge\spaces\registry.ts:21: * lives in `metadata` — extending an existing model field rather than
src\lib\interior\knowledge\spaces\registry.ts:107:    tags: ["residential", "semi-private", "moderate-traffic", "social"],
src\lib\interior\knowledge\spaces\registry.ts:114:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:284:    tags: ["commercial", "semi-public", "moderate-traffic", "work-intensive"],
src\lib\interior\knowledge\spaces\registry.ts:291:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:296:      acousticExpectations: "moderate noise control between workstations and meeting areas",
src\lib\interior\knowledge\spaces\registry.ts:308:    tags: ["commercial", "private", "moderate-traffic", "collaborative"],
src\lib\interior\knowledge\spaces\registry.ts:315:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:438:    tags: ["commercial", "public", "moderate-traffic", "retail", "presentation"],
src\lib\interior\knowledge\spaces\registry.ts:445:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:458:    tags: ["commercial", "semi-private", "moderate-traffic", "wet-area", "service"],
src\lib\interior\knowledge\spaces\registry.ts:465:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:504:    tags: ["commercial", "private", "moderate-traffic", "formal", "presentation"],
src\lib\interior\knowledge\spaces\registry.ts:511:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:548:    tags: ["hospitality", "public", "moderate-traffic", "social", "wet-area"],
src\lib\interior\knowledge\spaces\registry.ts:555:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:559:      acousticExpectations: "tolerant of moderate ambient conversation noise",
src\lib\interior\knowledge\spaces\registry.ts:562:      occupancyCharacteristics: "moderate dwell time, frequent turnover",
src\lib\interior\knowledge\spaces\registry.ts:626:      occupancyCharacteristics: "continuous variable traffic, brief-to-moderate dwell time",
src\lib\interior\knowledge\spaces\registry.ts:660:    tags: ["industrial", "semi-public", "moderate-traffic", "storage-intensive", "large-scale"],
src\lib\interior\knowledge\spaces\registry.ts:667:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:682:    tags: ["industrial", "semi-public", "moderate-traffic", "process-driven", "large-scale"],
src\lib\interior\knowledge\spaces\registry.ts:689:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:750:    tags: ["healthcare", "private", "moderate-traffic", "controlled-environment", "accessible"],
src\lib\interior\knowledge\spaces\registry.ts:757:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:773:    tags: ["healthcare", "semi-private", "moderate-traffic", "controlled-environment"],
src\lib\interior\knowledge\spaces\registry.ts:780:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:819:    tags: ["healthcare", "public", "moderate-traffic", "seated"],
src\lib\interior\knowledge\spaces\registry.ts:826:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:830:      acousticExpectations: "moderate noise tolerance with calming background level",
src\lib\interior\knowledge\spaces\registry.ts:842:    tags: ["education", "semi-public", "moderate-traffic", "instructional"],
src\lib\interior\knowledge\spaces\registry.ts:849:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:887:    tags: ["education", "public", "moderate-traffic", "quiet"],
src\lib\interior\knowledge\spaces\registry.ts:894:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:988:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:1009:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:1071:    tags: ["outdoor", "semi-private", "moderate-traffic", "social"],
src\lib\interior\knowledge\spaces\registry.ts:1078:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:1113:    tags: ["outdoor", "semi-private", "moderate-traffic", "wet-area", "leisure"],
src\lib\interior\knowledge\spaces\registry.ts:1120:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:1136:    tags: ["public", "public-access", "moderate-traffic", "presentation", "controlled-environment"],
src\lib\interior\knowledge\spaces\registry.ts:1143:      trafficLevel: "moderate",
src\lib\interior\knowledge\spaces\registry.ts:1158:    tags: ["public", "public-access", "moderate-traffic", "presentation"],
src\lib\interior\knowledge\spaces\registry.ts:1165:      trafficLevel: "moderate",
src\lib\interior\knowledge\styles\midCentury.ts:9:    "1950s–60s modernism: tapered wood legs, iconic silhouettes, and a " +
src\lib\interior\knowledge\styles\midCentury.ts:71:    style: "mid-century modern style, 1950s wood furniture, geometric forms, retro palette",
src\lib\interior\knowledge\spaces\README.md:52:## 3. Represented as `KnowledgeFeature` — no custom models
src\lib\interior\knowledge\spaces\README.md:128:Three models answer three different questions, and none of them
src\lib\interior\knowledge\spaces\README.md:211:`design-domain/types.ts` for `DesignDomainMetadata`. The current model
src\lib\interior\knowledge\spaces\README.md:440:Core model (ADR-000 Principles 19–22):
src\lib\interior\knowledge\spaces\README.md:548:§16) — closing the governance model for this domain the same way DS-7.2.1
src\lib\interior\knowledge\styles\neoclassical.ts:9:    "A modern interpretation of classical grandeur: columns, symmetry, " +
src\lib\interior\knowledge\styles\neoclassical.ts:76:    negative: "no industrial materials, no asymmetric modern layout, no bare minimalism",
src\lib\interior\knowledge\styles\neoclassical.ts:81:    "Asymmetric modern layouts",
src\lib\interior\knowledge\styles\modernFarmhouse.ts:4:  id: "modern_farmhouse_knowledge",
src\lib\interior\knowledge\styles\modernFarmhouse.ts:5:  styleId: "modern_farmhouse",
src\lib\interior\knowledge\styles\modernFarmhouse.ts:11:    "everyday modern living.",
src\lib\interior\knowledge\styles\modernFarmhouse.ts:14:    "Balance rustic warmth with modern functionality",
src\lib\interior\knowledge\styles\modernFarmhouse.ts:73:    style: "modern farmhouse style, shiplap walls, natural wood, rustic charm",
src\lib\interior\knowledge\styles\modernFarmhouse.ts:78:    negative: "no cold industrial finishes, no glossy modern surfaces, no formal ornate decor",
src\lib\interior\prompt-engine\types.ts:173: * (e.g. a preset combination of rules for a generation mode). Takes a
src\lib\interior\prompt-engine\bridge\mapToDomainDecisions.contract.test.ts:134:  it("never emits negative/mode/operation/aspectRatio/guidanceScale/structuredScene/projectDesignContext elements", () => {
src\lib\interior\prompt-engine\bridge\mapToDomainDecisions.contract.test.ts:138:      "mode",
src\lib\interior\prompt-engine\rules\RuleEngine.ts:10: * Engine, or any AI model. See `README.md`.
src\lib\interior\prompt-domain\contexts\StyleContext.ts:6: * Wraps the existing Style Registry model (`InteriorStyle` /
src\lib\interior\prompt-engine\builder\README.md:167:**container**, not a domain model: it names the same nine concerns
src\lib\interior\prompt-domain\contexts\MetadataContext.ts:5:  model: string;
src\lib\interior\prompt-engine\builder\PromptBuilderFactory.ts:7: * function is the seam where future mode-specific builders
src\lib\interior\prompt-engine\builder\PromptDraft.ts:16: * not a string array, and not a set of parallel "Section" models: a
src\lib\interior\prompt-engine\builder\PromptDraft.ts:24: * domain model: it holds `PromptContext`'s own sub-contexts, unchanged,
```

#### src\app\ — 45 совпадений

```
src\app\page.tsx:24:  // Palette mode: either a scheme is picked OR custom (walls/floor picked individually)
src\app\page.tsx:45:  const [mode, setMode] = useState<'style' | 'partial' | 'clear'>('style')
src\app\page.tsx:52:    imageFile, room, style, isMyStyle, mode,
src\app\page.tsx:256:            <div className="mode-switcher">
src\app\page.tsx:264:                  className={`mode-btn${mode === m.value ? ' mode-btn-active' : ''}`}
src\app\page.tsx:272:            {(mode === 'partial' || mode === 'clear') && (
src\app\page.tsx:273:              <div className="mode-hint">
src\app\globals.css:356:.mode-switcher { display: flex; gap: 6px; }
src\app\globals.css:357:.mode-btn {
src\app\globals.css:370:.mode-btn:hover { border-color: var(--warm); color: var(--ink); }
src\app\globals.css:371:.mode-btn-active { background: var(--ink); color: var(--paper); border-color: var(--ink); }
src\app\globals.css:372:.mode-btn-active:hover { border-color: var(--ink); color: var(--paper); }
src\app\globals.css:373:.mode-hint {
src\app\components\StylePicker.tsx:16:  organic_modern:    { label: 'Organic Modern',     emoji: '🌱', desc: 'Натуральные материалы, тёплые оттенки и природная эстетика', preview: 'https://images.unsplash.com/photo-1586023492125-27264fee7bef?w=360&q=80&auto=format&fit=crop' },
src\app\components\StylePicker.tsx:23:  modern_farmhouse:  { label: 'Modern Farmhouse',   emoji: '🌾', desc: 'Уютный деревенский стиль с натуральными материалами', preview: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=360&q=80&auto=format&fit=crop' },
src\app\components\StylePicker.tsx:33:    keys: ['minimalist', 'scandinavian', 'japandi', 'organic_modern', 'contemporary', 'mid_century', 'boho', 'coastal'],
src\app\components\StylePicker.tsx:43:    keys: ['biophilic', 'mediterranean', 'wabi_sabi', 'modern_farmhouse'],
src\app\api\proxy\route.ts:9:  'modelslab.com',
src\app\api\generate\route.ts:49:// Retained for mode === 'clear' and any future callers; no longer invoked in the
src\app\api\generate\route.ts:82:  let mode: string | undefined
src\app\api\generate\route.ts:99:    mode = (form.get('mode')  as string) || 'style'
src\app\api\generate\route.ts:172:    if (mode === 'clear' && maskUrl) {
src\app\api\generate\route.ts:173:      // erase accepts no prompt — model fills background autonomously
src\app\api\generate\route.ts:176:        mode: mode as InteriorMode,
src\app\api\generate\route.ts:181:    } else if (mode === 'partial' && maskUrl) {
src\app\api\generate\route.ts:194:          mode,
src\app\api\generate\route.ts:207:        mode:      mode as InteriorMode,
src\app\api\generate\route.ts:225:          mode,
src\app\api\generate\route.ts:239:        mode:          mode as InteriorMode,
src\app\api\generate\route.ts:260:      mode,
src\app\api\generate\route.ts:265:        : '(no prompt — erase mode)',
src\app\api\generate\route.ts:275:      mode,
src\app\developer\benchmark\types\benchmark.ts:4:// AI/model integrations; this concept uses "Source" instead).
src\app\developer\benchmark\types\benchmark.ts:38:  model?: string;
src\app\developer\engines\GenerationEngine\types.ts:31:  model: string;
src\app\developer\engines\GenerationEngine\README.md:7:never talk to a specific AI model or vendor SDK directly — they only talk
src\app\developer\engines\GenerationEngine\README.md:11:models, ComfyUI, ...) without ever touching `Benchmark`, `Prompt Lab`,
src\app\developer\engines\GenerationEngine\README.md:63:- Always returns `status: "success"`, `provider: "mock"`, `model: "mock"`,
src\app\developer\engines\GenerationEngine\README.md:66:  so it's obvious in the UI that no real AI model was called.
src\app\developer\benchmark\services\BenchmarkService.ts:68:  { id: "modern", name: "Modern" },
src\app\developer\benchmark\services\BenchmarkService.ts:132:      model: result.model,
src\app\developer\benchmark\page.tsx:72:        description="Compare generation quality across models and settings."
src\app\developer\engines\GenerationEngine\providers\MockGenerationProvider.ts:26:      model: "mock",
src\app\developer\benchmark\components\BenchmarkPrompt.tsx:27:          <span className="font-medium text-neutral-700">Model:</span> {session.model ?? "—"}
src\app\developer\lib\navigation.ts:14:    description: "Compare generation quality across models and settings.",
```

#### docs\platform\acs\ — 15 совпадений

```
docs\platform\acs\ACS-001-Generation-Intelligence.md:17:- Определять, какой режим вызова провайдера использовать, **на основании явно переданного параметра `mode`**, а не самостоятельного анализа контекста.
docs\platform\acs\ACS-001-Generation-Intelligence.md:38:| **Режим (`mode`)** | `FULL_GENERATION` | `PARTIAL_EDIT` или `INPAINTING` |
docs\platform\acs\ACS-001-Generation-Intelligence.md:44:- `mode = FULL_GENERATION`, но передана маска/регион (несогласованный вызов — вероятно, ошибка на стороне вызывающего PCS);
docs\platform\acs\ACS-001-Generation-Intelligence.md:45:- `mode = PARTIAL_EDIT` или `INPAINTING`, но маска/регион отсутствует.
docs\platform\acs\ACS-001-Generation-Intelligence.md:54:| `mode` | Обязательно | `FULL_GENERATION` \| `PARTIAL_EDIT` \| `INPAINTING`. |
docs\platform\acs\ACS-001-Generation-Intelligence.md:82:- PCS-001 (Smart Interior Generation) — вызывает с `mode = FULL_GENERATION`.
docs\platform\acs\ACS-001-Generation-Intelligence.md:83:- PCS-002 (Intelligent Room Transformation) — вызывает с `mode = PARTIAL_EDIT` или `INPAINTING`.
docs\platform\acs\ACS-001-Generation-Intelligence.md:93:  mode: "FULL_GENERATION" | "PARTIAL_EDIT" | "INPAINTING",
docs\platform\acs\ACS-001-Generation-Intelligence.md:111:- Добавление нового режима (например, `MULTI_STAGE` для Phase H — Generation Intelligence в широком смысле Roadmap) требует явного расширения enum `mode` и отдельного ADR, а не неявного расширения поведения существующих режимов.
docs\platform\acs\ACS-001-Generation-Intelligence.md:121:- **Контрактные тесты:** вызов с `mode = FULL_GENERATION` и переданной маской должен завершаться ошибкой; вызов с `mode = PARTIAL_EDIT`/`INPAINTING` без маски — тоже ошибкой.
docs\platform\acs\ACS-001-Generation-Intelligence.md:123:- **Golden-тесты:** фиксированный набор `promptString` + `mode` даёт стабильно корректный (по формату, не по художественному качеству) результат вызова провайдера.
docs\platform\acs\ACS-001-Generation-Intelligence.md:139:Не заполнено — требует создания отдельного ADR, фиксирующего именно это разграничение режимов (`mode`) как архитектурное решение, а не только описание в этом документе. Рекомендуется оформить как отдельный ADR перед началом реализации Gate 1/Gate 5.
docs\platform\acs\ACS-001-Generation-Intelligence.md:141:**Закрыто:** [ADR-006 — Generation Intelligence Mode Contract](../../adr/ADR-006-Generation-Intelligence-Mode-Contract.md) (Architecture Freeze Resolution R4) формализует разграничение режимов `mode`, уже описанное в этом документе, как архитектурное решение.
docs\platform\acs\ACS-002-Scene-Intelligence.md:39:| `mode` | Обязательно | Соответствует режиму из ACS-001: определяет, требуется ли только Structured Scene (для `FULL_GENERATION`) или дополнительно `maskRegion` (для `PARTIAL_EDIT`/`INPAINTING`). |
docs\platform\acs\ACS-002-Scene-Intelligence.md:69:  mode: "FULL_GENERATION" | "PARTIAL_EDIT" | "INPAINTING"
```

#### src\providers\ — 9 совпадений

```
src\providers\image\OpenAIImageProvider.ts:42:// model and Fal.ai's wire format for openai/gpt-image-2/edit. Named after the
src\providers\image\OpenAIImageProvider.ts:43:// OpenAI image model family (not the specific "gpt-image-2" version) so a
src\providers\image\OpenAIImageProvider.ts:70:      model: MODEL_NAME,
src\providers\image\OpenAIImageProvider.ts:82:      model: MODEL_NAME,
src\providers\image\OpenAIImageProvider.ts:96:      model: MODEL_NAME,
src\providers\image\OpenAIImageProvider.ts:106:    model: MODEL_NAME,
src\providers\image\OpenAIImageProvider.ts:121:// GPT Image 2 Edit has no promptless "erase" mode — /api/generate submits an
src\providers\image\OpenAIImageProvider.ts:123:// tells the model what to do with the masked region.
src\providers\image\OpenAIImageProvider.ts:145:      model: MODEL_NAME,
```

#### docs\implementation\ — 9 совпадений

```
docs\implementation\ADR-005-Integration-TZ-final-for-Claude-Code.md:30:- mode
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:29:| src/app/api/generate/route.ts | Замена buildEditPrompt() + buildColorPrefix() на вызов mapToDomainDecisions() → buildPromptDraft() → applyRules() → format() для построения promptUsed. negative, mode, operation, aspectRatio, guidanceScale остаются как есть (owner decisions 2, 3) |
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:75:negative, mode, operation, aspectRatio, guidanceScale вне этой цепочки — собираются в route.ts как прежде.
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:83:Step 3 — подключить в route.ts вызов mapToDomainDecisions() → buildPromptDraft() → applyRules() → format() для веток mode === 'style' и mode === 'partial'. Обработка StructuralValidationFailure (возврат из applyRules()) — как явная ветка, без throw.
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:85:Step 4 — проверить, что mode === 'clear' (erase) не затронут — там prompt: '' и новый pipeline не вызывается.
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:105:НЕ добавлять mode/operation/aspectRatio/guidanceScale в elements[]
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:144:route.ts (mode: style) → полная цепочка mapToDomainDecisions → buildPromptDraft → applyRules → format возвращает непустой promptString
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:145:route.ts (mode: partial) — то же самое
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:172:- [ ] mode/operation/aspectRatio/guidanceScale не появились в elements[]
```

#### src\hooks\ — 5 совпадений

```
src\hooks\useImageGeneration.ts:12:  mode: 'style' | 'partial' | 'clear'
src\hooks\useImageGeneration.ts:57:    imageFile, room, style, isMyStyle, mode,
src\hooks\useImageGeneration.ts:82:    form.append('mode',          mode)
src\hooks\useImageGeneration.ts:97:      if (mode === 'partial' || mode === 'clear') {
src\hooks\useImageGeneration.ts:159:  }, [imageFile, room, style, isMyStyle, mode, wallColorHex, wallFinish,
```

#### docs\engineering-decisions\ — 7 совпадений

```
docs\engineering-decisions\reviews\Gate1-Prompt-Pipeline-TZ.md:229:2. Явное правило: какие поля этих двух объектов становятся элементами `promptString`, а какие используются только для `mode`/`maskRegion` в Generation Intelligence (ADR-006) и в промпт не попадают.
docs\engineering-decisions\README.md:59:- domain model decisions;
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:34:   режимов, инвариантов или разграничения `mode`.
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:39:4. Терминология `mode` в ADR-006/ACS-001 (`FULL_GENERATION`/`PARTIAL_EDIT`/
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:41:   'clear'` как `mode`, `'redesign'/'replace'/'erase'` как `operation`) —
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:47:6. `mode === 'clear'` (erase) не описан в ADR-006 mode-enum вообще; у него
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:67:`mode === 'clear'`. Вопрос остаётся открытым до отдельного owner decision.
```

#### docs\governance\ — 1 совпадение

```
docs\governance\Architecture-Engineering-Responsibility-Model.md:18:Define the boundary of responsibility between **architectural decisions** (ADR) and **engineering implementation** (Implementation Package, contract tests, regression tests, CI, traceability). This document is not an ADR authoring rule — it is a governance-model principle applicable to all future architectural decisions in the project.
```

#### src\services\ — 1 совпадение

```
src\services\InteriorService.ts:7:// model — knows nothing about Fal.ai, URLs, or provider payload shapes.
```

#### src\domain\ — 1 совпадение

```
src\domain\interior\InteriorEditRequest.ts:8:  mode: InteriorMode
```

#### src\config\ — 1 совпадение

```
src\config\image.ts:4:// Fal.ai's queue API. Overridable via env so the exact model path can move
```

---

### operation

Найдено **49** совпадений в **17** файлах.

```
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:17:- Ожидается тот же flow, что и в п.1, но `operation: 'replace'`, `mask_url` присутствует в payload
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:18:  (проверяется логами `OpenAIImageProvider`: `generation_started` с `operation: "replace"`).
docs\AI_CORE_CHECKLIST.md:198:      `generation`, `analysis`, `providers`, `operations`, `quality`,
docs\AI_CORE_CHECKLIST.md:384:      `accessibility`, `operations`, `compliance`, `buildingCode`,
docs\ARCHITECTURE.md:1223:  commercial/medical/industrial operations, hospitality/retail behavior,
docs\ARCHITECTURE.md:1285:  `workflow`, `environment`, `accessibility`, `operations`, `compliance`,
src\types\image.ts:1:// TODO(Stage 3+): future operations may include upscale, expand, outpaint,
docs\implementation\ADR-005-Integration-TZ-final-for-Claude-Code.md:31:- operation
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:29:| src/app/api/generate/route.ts | Замена buildEditPrompt() + buildColorPrefix() на вызов mapToDomainDecisions() → buildPromptDraft() → applyRules() → format() для построения promptUsed. negative, mode, operation, aspectRatio, guidanceScale остаются как есть (owner decisions 2, 3) |
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:75:negative, mode, operation, aspectRatio, guidanceScale вне этой цепочки — собираются в route.ts как прежде.
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:105:НЕ добавлять mode/operation/aspectRatio/guidanceScale в elements[]
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:172:- [ ] mode/operation/aspectRatio/guidanceScale не появились в elements[]
src\domain\interior\InteriorEditRequest.ts:7:  operation: InteriorOperation
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:41:   'clear'` как `mode`, `'redesign'/'replace'/'erase'` как `operation`) —
src\providers\image\OpenAIImageProvider.ts:56:  operation: string,
src\providers\image\OpenAIImageProvider.ts:71:      operation,
src\providers\image\OpenAIImageProvider.ts:83:      operation,
src\providers\image\OpenAIImageProvider.ts:97:      operation,
src\providers\image\OpenAIImageProvider.ts:107:    operation,
src\providers\image\OpenAIImageProvider.ts:122:// empty prompt for that operation (masked-object removal), so this fallback
src\providers\image\OpenAIImageProvider.ts:129:    const prompt = request.prompt || (request.operation === 'erase' ? ERASE_FALLBACK_PROMPT : '')
src\providers\image\OpenAIImageProvider.ts:146:      operation: request.operation,
src\providers\image\OpenAIImageProvider.ts:150:    return submitToFal(OPENAI_IMAGE_MODEL_URL, payload, request.operation)
docs\adr\ADR-003-PromptContext-Contracts.md:78:## Contract 2 — `generationMode` ↔ production mode/operation enums
docs\adr\ADR-003-PromptContext-Contracts.md:109:   only the pixel operation via `InteriorOperation`/`InteriorMode`.
docs\adr\ADR-003-PromptContext-Contracts.md:114:   it into the existing mode/operation enums.
docs\adr\ADR-000-Architecture-Principles.md:185:- `docs/AI_CORE_CHECKLIST.md` operationalizes these principles as a
docs\adr\ADR-000-Architecture-Principles.md:778:`operations`, `quality`, `defaults`, `roomAnalyzerHints`,
docs\adr\ADR-000-Architecture-Principles.md:876:- **Metadata extends an existing model.** It adds descriptive/operational
src\lib\interior\design-domain\README.md:128:- `operations`
src\app\api\generate\route.ts:83:  let operation: InteriorEditRequest['operation'] | undefined
src\app\api\generate\route.ts:175:        operation: 'erase',
src\app\api\generate\route.ts:206:        operation: 'replace',
src\app\api\generate\route.ts:238:        operation:     'redesign',
src\app\api\generate\route.ts:247:    operation = editRequest.operation
src\app\api\generate\route.ts:274:      operation,
src\lib\interior\prompt-engine\bridge\mapToDomainDecisions.contract.test.ts:134:  it("never emits negative/mode/operation/aspectRatio/guidanceScale/structuredScene/projectDesignContext elements", () => {
src\lib\interior\prompt-engine\bridge\mapToDomainDecisions.contract.test.ts:139:      "operation",
src\lib\interior\knowledge\README.md:233:behavior/workflow/environment/accessibility/operations/compliance/
src\lib\interior\knowledge\spaces\README.md:199:`accessibility`, `operations`, `compliance`, `buildingCode`, `security`,
src\lib\interior\knowledge\spaces\README.md:202:safety, medical operations, industrial process, hospitality behavior,
src\lib\interior\knowledge\spaces\registry.ts:605:      safetyConsiderations: ["fire egress across multiple floors/zones", "24-hour operational safety"],
src\lib\interior\knowledge\spaces\registry.ts:685:      typicalActivities: ["assembly line work", "machine operation", "quality inspection"],
src\lib\interior\knowledge\spaces\registry.ts:707:      typicalActivities: ["hand-tool work", "machine-tool operation", "assembly"],
src\lib\interior\knowledge\spaces\registry.ts:927:      environmentalConstraints: ["large-volume climate control", "24-hour operation"],
src\lib\interior\knowledge\spaces\registry.ts:980:    description: "Open exterior space aboard a marine vessel used for circulation, leisure, and operations.",
src\lib\interior\knowledge\spaces\registry.ts:983:      primaryFunctions: ["outdoor leisure", "circulation", "vessel operations access"],
src\lib\interior\knowledge\spaces\registry.ts:984:      typicalActivities: ["walking", "sitting/lounging", "operational tasks"],
src\lib\interior\knowledge\spaces\registry.ts:986:      functionalZones: ["leisure/seating zone", "circulation walkway", "operational access zone"],
```

---

### maskUrl

Найдено **6** совпадений в **1** файле.

```
src\app\api\generate\route.ts:150:    let maskUrl: string | null = null
src\app\api\generate\route.ts:165:      maskUrl = url
src\app\api\generate\route.ts:172:    if (mode === 'clear' && maskUrl) {
src\app\api\generate\route.ts:178:        mask:      maskUrl,
src\app\api\generate\route.ts:181:    } else if (mode === 'partial' && maskUrl) {
src\app\api\generate\route.ts:209:        mask:      maskUrl,
```

---

### InteriorMode

Найдено **14** совпадений в **4** файлах.

```
src\types\image.ts:7:export type InteriorMode = 'style' | 'partial' | 'clear'
src\domain\interior\InteriorEditRequest.ts:1:import type { InteriorOperation, InteriorMode, ImageQuality, ImageResolution } from '@/types/image'
src\domain\interior\InteriorEditRequest.ts:8:  mode: InteriorMode
docs\adr\ADR-003-PromptContext-Contracts.md:86:- `InteriorMode` (`src/types/image.ts:7`) — `'style' | 'partial' | 'clear'`
docs\adr\ADR-003-PromptContext-Contracts.md:94:  `InteriorMode: 'style'` or `'partial'` while its style source is either
docs\adr\ADR-003-PromptContext-Contracts.md:109:   only the pixel operation via `InteriorOperation`/`InteriorMode`.
docs\adr\ADR-003-PromptContext-Contracts.md:112:   that does not collide with `InteriorMode`, e.g. `styleSource`) so it is
docs\adr\ADR-003-PromptContext-Contracts.md:116:   already shares the word "mode" with `InteriorMode` for a different axis
docs\adr\ADR-003-PromptContext-Contracts.md:138:  `generationMode` with `InteriorMode`/`InteriorOperation`" as two
docs\adr\ADR-003-PromptContext-Contracts.md:142:  production's `InteriorMode`/`InteriorOperation` at the Production
src\app\api\generate\route.ts:8:import type { InteriorMode } from '@/types/image'
src\app\api\generate\route.ts:176:        mode: mode as InteriorMode,
src\app\api\generate\route.ts:207:        mode:      mode as InteriorMode,
src\app\api\generate\route.ts:239:        mode:          mode as InteriorMode,
```

---

### redesign

Найдено **18** совпадений в **10** файлах.

```
src\types\image.ts:5:export type InteriorOperation = 'redesign' | 'replace' | 'erase'
docs\ARCHITECTURE.md:968:expected to consist of adding new ADRs and new modules, not of redesigning
docs\ARCHITECTURE.md:985:extend this foundation rather than redesign it. The governance model is
docs\ARCHITECTURE.md:1000:redesign of the governance model itself requires a new architecture
docs\ARCHITECTURE.md:1075:new knowledge — rather than architectural redesign.
docs\ARCHITECTURE.md:1172:(DS-7.4) — not by redesigning `SpaceType`'s own contract or registry.
docs\ARCHITECTURE.md:1415:Principle, no architecture redesign — this section only **declares**
docs\ARCHITECTURE.md:1450:future phase should redesign them; future work extends them through
docs\ARCHITECTURE.md:1511:> rather than redesign it. Architectural redesign requires an explicit
src\lib\prompts.ts:76:    `Completely redesign and transform this ${room} into ${stylePart}.`,
docs\adr\ADR_MAP.md:84:documents as redesign; only the two nodes exercised by Gate 1 are mapped.
docs\adr\ADR-003-PromptContext-Contracts.md:84:  `'redesign' | 'replace' | 'erase'` — which pixel transformation the
docs\AI_CORE_CHECKLIST.md:438:      not to be redesigned by any future phase (DS-7.3.2)
docs\AI_CORE_CHECKLIST.md:445:- [ ] No redesign required — Milestone A2 introduces no new
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:41:   'clear'` как `mode`, `'redesign'/'replace'/'erase'` как `operation`) —
src\app\api\generate\route.ts:238:        operation:     'redesign',
docs\platform\pcs\PCS-001-Smart-Interior-Generation.md:13:Отличие от типовых "AI room redesign" сервисов: генерация не является прямой передачей пользовательского промпта в модель — она проходит через понимание сцены и структурированные знания (Domain Intelligence), прежде чем сформировать финальный запрос к провайдеру генерации.
docs\platform\pcs\PCS-004-Commercial-Design.md:18:- Дифференцирует продукт от большинства типовых "AI room redesign" сервисов, которые ориентированы почти исключительно на жилые интерьеры.
```

---

### replace

Найдено **36** совпадений в **22** файлах.

```
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:17:- Ожидается тот же flow, что и в п.1, но `operation: 'replace'`, `mask_url` присутствует в payload
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:18:  (проверяется логами `OpenAIImageProvider`: `generation_started` с `operation: "replace"`).
docs\AI_CORE_CHECKLIST.md:451:      rewrite/merge-responsibilities/collapse-layers/replace-contracts
docs\AI_CORE_CHECKLIST.md:475:      `PromptContext` replacement — `prompt-integration/types.ts` does not
src\types\image.ts:2:// restyle, replace_furniture, clear_room, and prompt intelligence (automatic
src\types\image.ts:5:export type InteriorOperation = 'redesign' | 'replace' | 'erase'
src\lib\prompts.ts:66:    if (details?.furniture?.length) parts.push(`replace with: ${details.furniture.join(', ')},`)
src\lib\prompts.ts:77:    `Fully replace and repaint all wall coverings, ceiling, flooring, cabinetry fronts, curtains, and lighting fixtures to match this style.`,
src\lib\prompts.ts:98:  const h = hex.replace('#', '').toLowerCase()
docs\ARCHITECTURE.md:1361:  independent composition model — not a replacement of, inheritance of, or
docs\ARCHITECTURE.md:1492:layers, or replace any Stable Contract listed above — unless a future ADR
docs\governance\Architecture-Engineering-Responsibility-Model.md:68:- replace or modify `ADR-Authoring-Convention.md` or `ADR-Numbering-Policy.md`;
docs\adr\ADR-004-Spatial-Classification-Boundary.md:116:> However, these extensions must never collapse, merge, replace or
docs\adr\ADR-004-Spatial-Classification-Boundary.md:267:  *alongside* `RoomContext`, not as a replacement for it. `RoomContext`
docs\adr\ADR-000-Architecture-Principles.md:142:    is introduced *alongside* the one it will eventually replace —
docs\adr\ADR-000-Architecture-Principles.md:173:    capability. This does not replace Principles 3, 19, or 20 — it names
docs\adr\ADR-000-Architecture-Principles.md:416:(DS-6.5.1) is the reference design, not a stopgap awaiting replacement.
docs\adr\ADR-000-Architecture-Principles.md:539:  and whatever consumes it are actually ready to fully replace that path.
docs\adr\ADR-000-Architecture-Principles.md:550:Before introducing a change that breaks or replaces a working
docs\adr\ADR-000-Architecture-Principles.md:574:  implementation before its replacement has actually earned that. A
docs\adr\ADR-000-Architecture-Principles.md:796:Principle 22 does not replace Principles 3, 19, or 20 — it names the one
docs\engineering-decisions\ED-002-acs004-type-naming.md:38:replaced the existing Track-1 ones, which they do not — Track-1 remains
docs\adr\ADR_INDEX.md:148:[строка пропущена инструментом поиска: превышена длина строки для инлайн-вывода]
docs\adr\ADR_INDEX.md:482:- Superseded ADRs must point to their replacement.
docs\adr\ADR-003-PromptContext-Contracts.md:84:  `'redesign' | 'replace' | 'erase'` — which pixel transformation the
docs\engineering-decisions\reviews\Gate1-Prompt-Builder-Rule-Engine-Governance-Review.md:58:  подтверждённый владельцем проекта" were replaced with
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:41:   'clear'` как `mode`, `'redesign'/'replace'/'erase'` как `operation`) —
src\app\api\generate\route.ts:206:        operation: 'replace',
docs\engineering-decisions\README.md:171:capture implementation-level engineering practice. An ED does not replace or
src\lib\interior\prompt-integration\types.ts:33: * This is **not** a replacement of `PromptContext`
src\lib\interior\prompt-integration\README.md:84:model — **not** a replacement of `PromptContext` (`prompt-domain/types.ts`),
src\lib\interior\prompt-engine\builder\README.md:147:entirely and replaces it with direct composition.**
src\lib\interior\knowledge\types.ts:42: * Deliberately **not** replaced by `KnowledgeFeature` (`./core/Feature.ts`,
src\lib\interior\knowledge\core\FeatureTypes.ts:29: * vocabulary it may want to replace with its own.
src\lib\interior\knowledge\spaces\README.md:19:replacement for any of them, and not connected to Prompt Engine,
src\lib\interior\prompt-domain\contexts\FurnitureContext.ts:7:  replaceExisting?: boolean;
```

Примечание: строка `docs\adr\ADR_INDEX.md:148` (совпадение по слову
`replacement`) также была возвращена инструментом поиска как
`[Omitted long matching line]` — см. примечание в разделе `mode` выше.

---

### erase

Найдено **15** совпадений в **7** файлах.

```
STAGE_2.5_MANUAL_TEST_CHECKLIST.md:24:- Проверить в логах: `promptUsed` в ответе `/api/generate` = `"(no prompt — erase mode)"`,
src\types\image.ts:5:export type InteriorOperation = 'redesign' | 'replace' | 'erase'
src\providers\image\OpenAIImageProvider.ts:121:// GPT Image 2 Edit has no promptless "erase" mode — /api/generate submits an
src\providers\image\OpenAIImageProvider.ts:129:    const prompt = request.prompt || (request.operation === 'erase' ? ERASE_FALLBACK_PROMPT : '')
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:85:Step 4 — проверить, что mode === 'clear' (erase) не затронут — там prompt: '' и новый pipeline не вызывается.
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:116:Legacy-функциональность (erase, negative prompt, aspectRatio) не сломана
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:122:Режим clear / erase (не затронут новым pipeline)
docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md:128:Финальный запрос к провайдеру (OpenAIImageProvider.submit()) получает непустой prompt во всех сценариях кроме erase
docs\adr\ADR-003-PromptContext-Contracts.md:84:  `'redesign' | 'replace' | 'erase'` — which pixel transformation the
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:41:   'clear'` как `mode`, `'redesign'/'replace'/'erase'` как `operation`) —
docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md:47:6. `mode === 'clear'` (erase) не описан в ADR-006 mode-enum вообще; у него
src\app\api\generate\route.ts:153:      // Resize mask to exactly match compressed image pixel dimensions for fill/erase alignment
src\app\api\generate\route.ts:173:      // erase accepts no prompt — model fills background autonomously
src\app\api\generate\route.ts:175:        operation: 'erase',
src\app\api\generate\route.ts:265:        : '(no prompt — erase mode)',
```

---

## 3. Файлы, где встречается более одного из семи терминов

Всего таких файлов: **25**.

| Файл | Термины (из mode, operation, maskUrl, InteriorMode, redesign, replace, erase) | Кол-во |
|---|---|---|
| `src\app\api\generate\route.ts` | mode, operation, maskUrl, InteriorMode, redesign, replace, erase | 7 |
| `docs\adr\ADR-003-PromptContext-Contracts.md` | mode, operation, InteriorMode, redesign, replace, erase | 6 |
| `docs\engineering-decisions\ED-004-ADR-006-Integration-Readiness-Assessment.md` | mode, operation, redesign, replace, erase | 5 |
| `src\types\image.ts` | operation, InteriorMode, redesign, replace, erase | 5 |
| `STAGE_2.5_MANUAL_TEST_CHECKLIST.md` | mode, operation, replace, erase | 4 |
| `docs\AI_CORE_CHECKLIST.md` | mode, operation, redesign, replace | 4 |
| `docs\ARCHITECTURE.md` | mode, operation, redesign, replace | 4 |
| `docs\adr\ADR-000-Architecture-Principles.md` | mode, operation, replace | 3 |
| `docs\implementation\ADR-005-Integration-Implementation-Package-v1.0.md` | mode, operation, erase | 3 |
| `src\domain\interior\InteriorEditRequest.ts` | mode, operation, InteriorMode | 3 |
| `src\lib\interior\knowledge\spaces\README.md` | mode, operation, replace | 3 |
| `src\lib\prompts.ts` | mode, redesign, replace | 3 |
| `src\providers\image\OpenAIImageProvider.ts` | mode, operation, erase | 3 |
| `docs\adr\ADR-004-Spatial-Classification-Boundary.md` | mode, replace | 2 |
| `docs\adr\ADR_INDEX.md` | mode, replace | 2 |
| `docs\adr\ADR_MAP.md` | mode, redesign | 2 |
| `docs\engineering-decisions\README.md` | mode, replace | 2 |
| `docs\governance\Architecture-Engineering-Responsibility-Model.md` | mode, replace | 2 |
| `docs\implementation\ADR-005-Integration-TZ-final-for-Claude-Code.md` | mode, operation | 2 |
| `src\lib\interior\design-domain\README.md` | mode, operation | 2 |
| `src\lib\interior\knowledge\spaces\registry.ts` | mode, operation | 2 |
| `src\lib\interior\prompt-engine\bridge\mapToDomainDecisions.contract.test.ts` | mode, operation | 2 |
| `src\lib\interior\prompt-engine\builder\README.md` | mode, replace | 2 |
| `src\lib\interior\prompt-integration\README.md` | mode, replace | 2 |
| `src\lib\interior\prompt-integration\types.ts` | mode, replace | 2 |

---

## 4. Количество файлов

- Всего файлов просканировано (grep scope, весь репозиторий за вычетом
  `node_modules`, `.git`, `dist`, `build`, `.next`): **308**.
- Файлов, содержащих хотя бы один из семи терминов (`mode`, `operation`,
  `maskUrl`, `InteriorMode`, `redesign`, `replace`, `erase`): **79**
  (объединение уникальных путей по всем семи grep-поискам).
- Файлы из раздела 1 (целевые 7 файлов): найдено **7 из 7**, не найдено — **0**.
  - `src/types/image.ts` — найден (путь совпал с указанным в задаче).
  - `src/domain/interior/InteriorEditRequest.ts` — найден.
  - `src/domain/interior/InteriorEditResult.ts` — найден.
  - `src/services/InteriorService.ts` — найден.
  - `src/providers/image/createImageProvider.ts` — найден.
  - `src/providers/image/ImageProvider.ts` — найден.
  - `src/providers/image/OpenAIImageProvider.ts` — найден.
