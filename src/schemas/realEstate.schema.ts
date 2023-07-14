import { z } from "zod";
import { AddressSchema, addressCreate } from "./address.schema";
import { CategoriesSchema } from "./categories.schema";

export const RealEstateSchema = z.object({
  id: z.number().min(1),
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
    id: z.number(),
    size: z.number(),
    sold: z.boolean(),
    value: z.string().or(z.number()),
    category: CategoriesSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .array();
