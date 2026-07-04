/**
 * Design Domain — верхняя пространственная ось AI Core (DS-7.1).
 *
 * Только типы. Ни одной функции, ни одной единицы бизнес-логики.
 * См. ./README.md за полным архитектурным обоснованием.
 */

/**
 * Идентификатор верхнеуровневой категории пространства.
 *
 * Это НЕ тип помещения (Space Type придёт в DS-7.2) и НЕ стиль
 * (Style Registry, src/lib/interior/styles) — это категория назначения
 * пространства, самый верхний уровень будущей Spatial Architecture.
 */
export type DesignDomainId =
  | "residential"
  | "commercial"
  | "hospitality"
  | "public"
  | "outdoor"
  | "industrial"
  | "entertainment"
  | "transportation"
  | "healthcare"
  | "education"
  | "mixed_use";

/**
 * Второстепенные данные о Design Domain: приоритет отображения,
 * включён ли домен, и произвольные заметки. Отделены от основных
 * описательных полей `DesignDomain` по тому же принципу, что и
 * `PromptRuleMetadata` (prompt-engine/types.ts) — метаданные не incrementally
 * меняют форму основной сущности.
 */
export type DesignDomainMetadata = {
  readonly priority: number;
  readonly enabled: boolean;
  readonly notes?: string;
};

/**
 * Один верхнеуровневый Design Domain.
 *
 * Содержит исключительно общую информацию о категории пространства.
 * Намеренно НЕ содержит: SpaceType, Style, Knowledge, Prompt, Provider,
 * Rule, PromptContext — ни ссылок, ни вложенных полей.
 */
export type DesignDomain = {
  readonly id: DesignDomainId;
  readonly displayName: string;
  readonly description: string;
  readonly icon: string;
  readonly metadata: DesignDomainMetadata;
};

/**
 * Полный набор Design Domains. Просто типизированный массив — без
 * дополнительной структуры (нет группировки по категориям, в отличие от
 * `INTERIOR_STYLE_REGISTRY`, потому что Design Domain уже сам является
 * самым верхним уровнем категоризации).
 */
export type DesignDomainRegistry = readonly DesignDomain[];
