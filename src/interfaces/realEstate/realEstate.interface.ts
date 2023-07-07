import { z } from "zod";
import { RealEstateSchema, realEstateCreate, realEstateRead } from "../../schemas/realEstate.schema";
import { Address } from "../../entities";

export type IRealEstate = z.infer<typeof RealEstateSchema>;
export type IRealEstateCreate = z.infer<typeof realEstateCreate>;
export type IRealEstateRead = z.infer<typeof realEstateRead>;

export interface IrealEstateReturn {
  address: Address;
  createdAt: string;
  updatedAt: string;
  id: number;
  size: number;
  sold: boolean;
  value: number | string;
  categoryId: number | null | undefined;
}
