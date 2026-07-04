import type { DesignDomain } from "./types";

/**
 * Единый список верхнеуровневых Design Domains (DS-7.1).
 *
 * Это НЕ список помещений и НЕ список объектов — это исключительно
 * категории пространств, самый верхний уровень будущей Spatial
 * Architecture. Space Types (комнаты, объекты) будут построены отдельно
 * в DS-7.2 и будут ссылаться на `DesignDomainId` из этого файла, а не
 * наоборот.
 */
export const DESIGN_DOMAINS: DesignDomain[] = [
  {
    id: "residential",
    displayName: "Residential",
    description: "Жилые пространства: квартиры, дома, апартаменты.",
    icon: "🏠",
    metadata: { priority: 1, enabled: true },
  },
  {
    id: "commercial",
    displayName: "Commercial",
    description: "Коммерческие пространства: офисы, магазины, шоу-румы.",
    icon: "🏢",
    metadata: { priority: 2, enabled: true },
  },
  {
    id: "hospitality",
    displayName: "Hospitality",
    description: "Гостиничные и ресторанные пространства: отели, рестораны, кафе.",
    icon: "🏨",
    metadata: { priority: 3, enabled: true },
  },
  {
    id: "public",
    displayName: "Public",
    description: "Общественные пространства: библиотеки, музеи, государственные учреждения.",
    icon: "🏛️",
    metadata: { priority: 4, enabled: true },
  },
  {
    id: "outdoor",
    displayName: "Outdoor",
    description: "Открытые и ландшафтные пространства: дворы, террасы, сады.",
    icon: "🌳",
    metadata: { priority: 5, enabled: true },
  },
  {
    id: "industrial",
    displayName: "Industrial",
    description: "Промышленные и производственные пространства: заводы, склады, цеха.",
    icon: "🏭",
    metadata: { priority: 6, enabled: true },
  },
  {
    id: "entertainment",
    displayName: "Entertainment",
    description: "Развлекательные пространства: кинотеатры, клубы, арены.",
    icon: "🎭",
    metadata: { priority: 7, enabled: true },
  },
  {
    id: "transportation",
    displayName: "Transportation",
    description: "Транспортные пространства: аэропорты, вокзалы, станции.",
    icon: "✈️",
    metadata: { priority: 8, enabled: true },
  },
  {
    id: "healthcare",
    displayName: "Healthcare",
    description: "Медицинские пространства: клиники, больницы, кабинеты.",
    icon: "🏥",
    metadata: { priority: 9, enabled: true },
  },
  {
    id: "education",
    displayName: "Education",
    description: "Образовательные пространства: школы, университеты, кампусы.",
    icon: "🎓",
    metadata: { priority: 10, enabled: true },
  },
  {
    id: "mixed_use",
    displayName: "Mixed-Use",
    description: "Многофункциональные пространства, сочетающие несколько назначений.",
    icon: "🧩",
    metadata: { priority: 11, enabled: true },
  },
];
