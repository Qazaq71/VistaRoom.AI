/**
 * Space Type — вторая пространственная ось AI Core (DS-7.2), сразу под
 * Design Domain (`src/lib/interior/design-domain`).
 *
 * Только типы. Ни одной функции, ни одной единицы бизнес-логики.
 * См. ./README.md за полным архитектурным обоснованием.
 */

import type { DesignDomainId } from "../design-domain";

/**
 * Идентификатор конкретного типа пространства.
 *
 * Это НЕ Design Domain (категория назначения на уровень выше) и НЕ
 * `RoomContext.roomType` (свободный текст пользователя, Prompt Domain,
 * ADR-004) — это классифицированный, контролируемый словарь конкретных
 * помещений/объектов внутри какого-либо Design Domain.
 *
 * Список иллюстративный и намеренно неполный — модуль спроектирован так,
 * чтобы новые значения добавлялись без изменения формы существующих
 * (см. ./README.md, "Универсальность").
 */
export type SpaceTypeId =
  // Residential
  | "living_room"
  | "bedroom"
  | "kitchen"
  | "dining_room"
  | "bathroom"
  | "home_office"
  | "hallway"
  | "closet"
  | "laundry"
  | "balcony"
  | "garage"
  // Commercial
  | "office"
  | "meeting_room"
  | "reception"
  | "coworking"
  | "open_office"
  | "private_office"
  | "shop"
  | "retail_showroom"
  | "salon"
  | "gym"
  | "conference_room"
  | "exhibition_booth"
  // Hospitality
  | "cafe"
  | "restaurant"
  | "hotel"
  | "hotel_lobby"
  | "hotel_room"
  // Industrial
  | "warehouse"
  | "factory"
  | "workshop"
  | "laboratory"
  // Healthcare
  | "hospital_ward"
  | "clinic"
  | "operating_room"
  | "waiting_area"
  // Education
  | "classroom"
  | "lecture_hall"
  | "library"
  // Transportation (включая Marine и Aircraft — см. ./README.md, "Universality")
  | "airport_terminal"
  | "train_station"
  | "cabin"
  | "deck"
  | "passenger_cabin"
  | "cockpit"
  // Outdoor
  | "garden"
  | "terrace"
  | "courtyard"
  | "pool_area"
  // Public (Exhibition)
  | "museum"
  | "gallery";

/**
 * Второстепенные данные о Space Type: приоритет отображения, включён ли
 * тип, и произвольные заметки. Тот же паттерн, что и
 * `DesignDomainMetadata` (design-domain/types.ts) — метаданные являются
 * точкой будущего расширения, а не набором реальных полей.
 *
 * Это официальная точка расширения Space Type (DS-7.2). Иллюстративные,
 * НЕ реализованные разделы, под которые зарезервировано это поле (ничего
 * из перечисленного не существует как поле типа — см. ./README.md,
 * "Evolution Strategy"):
 *
 * - `capabilities`   — что в принципе можно делать с этим типом пространства
 * - `analysisHints`  — подсказки для будущего Room/Space Analyzer
 * - `renderHints`    — подсказки для рендеринга/визуализации
 * - `providerHints`  — подсказки, специфичные для AI-провайдера
 * - `generationHints`— подсказки для будущей генерации
 * - `qualityHints`   — подсказки для контроля качества результата
 * - `futureFlags`    — feature-flags для экспериментальных возможностей
 *
 * А внутри них, ещё более иллюстративно: Defaults, Accessibility,
 * Occupancy, Workflow, Safety, LightingScenario, Acoustics, Climate,
 * Privacy. Ничего из этого не реализовано на DS-7.2 — это архитектурная
 * подготовка перед DS-7.3/DS-7.4, а не roadmap и не TODO.
 */
export type SpaceTypeMetadata = {
  readonly priority: number;
  readonly enabled: boolean;
  readonly notes?: string;
};

/**
 * Один конкретный Space Type.
 *
 * Ссылается на `DesignDomainId` (Principle 21, ADR-000) — а не на весь
 * объект `DesignDomain` — сохраняя независимость реестров (design-domain
 * может измениться, не требуя импорта самого модуля design-domain кроме
 * его типа-идентификатора).
 *
 * Намеренно НЕ содержит: Style, Knowledge, Prompt, Provider, Rule,
 * PromptContext, RoomContext — ни ссылок, ни вложенных полей (ADR-004,
 * Forbidden Evolution).
 */
export type SpaceType = {
  readonly id: SpaceTypeId;
  readonly designDomainId: DesignDomainId;
  readonly displayName: string;
  readonly description: string;
  readonly icon: string;
  readonly metadata: SpaceTypeMetadata;
};

/**
 * Полный набор Space Types. Просто типизированный массив — без
 * дополнительной структуры, по аналогии с `DesignDomainRegistry`
 * (design-domain/types.ts).
 */
export type SpaceTypeRegistry = readonly SpaceType[];
