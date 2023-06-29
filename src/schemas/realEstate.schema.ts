import { z } from "zod";
import { AddressSchema, addressCreate } from "./address.schema";

export const RealEstateSchema = z.object({
  id: z.number(),
  value: z.union([z.string(), z.number()]),
  size: z.number(),
  address: addressCreate,
  category: z.number(),
  sold: z.boolean().default(false),
  updatedAt: z.string(),
});

export const realEstateCreate = RealEstateSchema.omit({ id: true, updatedAt: true })
export const realEstateRead = z
  .object({
    address: AddressSchema,
    createdAt: z.string(),
    id: z.number(),
    size: z.number(),
    sold: z.boolean(),
    updatedAt: z.string(),
    value: z.union([z.string(), z.number()]),
    category: z.number().nullish(),
  })
  .array();
