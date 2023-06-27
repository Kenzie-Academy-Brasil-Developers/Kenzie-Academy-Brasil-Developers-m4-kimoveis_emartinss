import { z } from "zod";

export const CategoriesSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});

export const categorieCreate = CategoriesSchema.omit({ id: true });
