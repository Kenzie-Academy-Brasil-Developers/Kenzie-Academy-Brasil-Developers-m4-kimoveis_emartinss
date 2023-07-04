import { z } from "zod";
import { AddressSchema, addressCreate } from "./address.schema";

export const RealEstateSchema = z.object({
  id: z.number(),
  value: z.string().or(z.number()),
  size: z.number().int().positive(),
  address: addressCreate,
  categoryId: z.number(),
  sold: z.boolean().default(false),
  updatedAt: z.string(),
  createdAt: z.string(),
});

export const realEstateCreate = RealEstateSchema.omit({ id: true, updatedAt: true, sold: true, createdAt: true });
export const realEstateRead = z
  .object({
    address: AddressSchema,
    createdAt: z.string(),
    id: z.number(),
    size: z.number(),
    sold: z.boolean(),
    updatedAt: z.string(),
    value: z.string().or(z.number()),
    categoryId: z.number().nullish(),
  })
  .array();
