import { Router } from "express";
import {
  createCategoriesController,
  readCategoriesController,
  readRealEstateByCategoryController,
} from "../controllers/categories/categories.conroller";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { categorieCreate } from "../schemas/categories.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateAdmin } from "../middlewares/validatedAdmin.middleware";
import { checkNameCategorieExist } from "../middlewares/categories/checkUniqueNameCategorie.middleware";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("", verifyToken, validateAdmin, validatedBody(categorieCreate), checkNameCategorieExist, createCategoriesController);
categoriesRoutes.get("/:id/realEstate", readRealEstateByCategoryController);
categoriesRoutes.get("", readCategoriesController);
