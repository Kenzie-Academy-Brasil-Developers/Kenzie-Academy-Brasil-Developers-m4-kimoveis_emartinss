import { Router } from "express";
import { createCategoriesController } from "../controllers/categories/categories.conroller";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { categorieCreate } from "../schemas/categories.schema";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("", validatedBody(categorieCreate), createCategoriesController);
