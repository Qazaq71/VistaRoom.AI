import type { BaseDomainContext } from "./BaseDomainContext";
import type { FurnitureReference } from "../references/FurnitureReference";

export type RoomDimensions = {
  width?: number;
  length?: number;
  height?: number;
  unit?: "m" | "ft";
};

export type RoomOpenings = {
  count?: number;
  description?: string;
};

export type RoomContext = BaseDomainContext & {
  roomType: string;
  roomName?: string;
  dimensions?: RoomDimensions;
  windows?: RoomOpenings;
  doors?: RoomOpenings;
  existingFurniture?: FurnitureReference[];
};
