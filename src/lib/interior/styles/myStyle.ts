import type { InteriorMyStyle } from "./types";
import { MY_STYLE_ID } from "../constants";

/**
 * "Мой стиль" is a custom-configuration generation mode, not a design style.
 * It is intentionally kept out of INTERIOR_STYLE_REGISTRY — see ./README.md.
 */
export const MY_STYLE: InteriorMyStyle = {
  id: MY_STYLE_ID,
  displayName: "Мой стиль",
  emoji: "🎨",
  description: "Настройте интерьер самостоятельно.",
};
