import type { RoomDimensions, RoomOpenings, FurnitureReference } from "../../../prompt-domain";

/**
 * Draft-side counterpart of `RoomContext` (`prompt-domain/contexts/RoomContext.ts`).
 * Same fields, no `BaseDomainContext` bookkeeping — see `StyleSection.ts`.
 */
export type RoomSection = {
  roomType: string;
  roomName?: string;
  dimensions?: RoomDimensions;
  windows?: RoomOpenings;
  doors?: RoomOpenings;
  existingFurniture?: FurnitureReference[];
};
