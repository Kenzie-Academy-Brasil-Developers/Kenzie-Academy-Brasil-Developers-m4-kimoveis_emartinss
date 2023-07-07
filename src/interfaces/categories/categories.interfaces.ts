import { z } from "zod";
import { CategoriesSchema, categorieCreate, categorieRead } from "../../schemas/categories.schema";

export type ICategories = z.infer<typeof CategoriesSchema>;
export type ICategoriesCreate = z.infer<typeof categorieCreate>; 
export type ICategoriesRead = z.infer<typeof categorieRead>; 
