// lib/prompts.ts — Оптимальная версия для точных цветов

export type RoomDetails = any;

export const ROOM_NAMES: Record<string, string> = {
  office: 'office interior',
  cafe: 'cafe interior',
  shop: 'retail store interior',
  salon: 'beauty salon interior',
  living: 'living room interior',
  bedroom: 'bedroom interior',
  kitchen: 'kitchen interior',
  bathroom: 'bathroom interior',
  toilet: 'toilet room interior',
  kids: "children's room interior",
};

export function buildEditPrompt(
  roomKey: string,
  styleKey: string,
  details?: Partial<RoomDetails>
): { positive: string; negative: string } {
  
  const room = ROOM_NAMES[roomKey] || 'interior';
  const isMyStyle = styleKey === 'my_style';

  let positive = `Professional photorealistic interior photography of a ${room}, 8k, sharp focus, natural lighting, highly detailed`;

  if (!isMyStyle) {
    positive += `, ${styleKey} style`;
  } else {
    // ── Мой стиль — с акцентом на точные цвета ──
    positive = `Professional photorealistic photo of a ${room}, custom interior design, `;

    // Стены
    if (details?.wallColorHex) {
      positive += `walls exactly color ${details.wallColorHex}, precise ${details.wallColorHex} wall color, `;
    }
    if (details?.wallFinish?.length) {
      positive += `walls finished with ${details.wallFinish.join(' and ')}, `;
    }

    // Пол
    if (details?.floorColorHex) {
      positive += `floor exactly color ${details.floorColorHex}, precise ${details.floorColorHex} floor color, `;
    }
    if (details?.floorMaterial) {
      positive += `${details.floorMaterial} floor, `;
    }

    // Плитка
    if (details?.tileColorHex) {
      positive += `tiles exactly color ${details.tileColorHex}, precise ${details.tileColorHex} tile color, `;
    }

    // Дополнительно
    if (details?.lighting?.length) positive += `lighting: ${details.lighting.join(', ')}, `;
    if (details?.furniture?.length) positive += `furniture: ${details.furniture.join(', ')}, `;
    if (details?.extraNotes) positive += `${details.extraNotes}, `;
  }

  // Усиление точности цвета (самое важное)
  positive += `color accurate, exact color matching, faithful to selected color palette, precise hex color reproduction`;

  // Жёсткий лимит длины
  if (positive.length > 950) {
    positive = positive.substring(0, 950);
  }

  const negative = `blurry, low quality, text, watermark, people, cartoon, deformed, wrong color, incorrect wall color, wrong floor color, color mismatch, different color, inaccurate color, desaturated, oversaturated`;

  return { positive, negative };
}

export function detectConflicts(roomKey: string, details: any): string[] {
  return [];
}