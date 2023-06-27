import { z } from "zod";
import { AddressSchema } from "./address.schema";

export const RealEstateSchema = z.object({
  id: z.number(),
  value: z.number(),
  size: z.number(),
  address: AddressSchema,
  categoryId: z.number(),
  sold: z.boolean().default(false),
  updatedAt: z.string(),
});

export const realEstateCreate = RealEstateSchema.omit({ id: true, updatedAt: true }).extend({ address: AddressSchema });
