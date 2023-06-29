import { z } from "zod";
import { RealEstateSchema, realEstateCreate, realEstateRead } from "../../schemas/realEstate.schema";
import { Address } from "../../entities";

export type IRealEstate = z.infer<typeof RealEstateSchema>;
export type IRealEstateCreate = z.infer<typeof realEstateCreate>;
export type IRealEstateRead = z.infer<typeof realEstateRead>;

export interface IrealEstateReturn {
  address: Address;
  size: number;
  value: number | string;
  category: number;
}
