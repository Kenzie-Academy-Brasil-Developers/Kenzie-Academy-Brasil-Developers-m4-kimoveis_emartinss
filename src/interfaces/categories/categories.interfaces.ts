import { TypeOf, z } from "zod";
import { CategoriesSchema, categorieCreate } from "../../schemas/categories.schema";

export type ICategories = z.infer<typeof CategoriesSchema>;
export type ICategoriesCreate = z.infer<typeof categorieCreate>;
