import { Request, Response } from "express";
import { createCategoriesService } from "../../services/categories/categories.service";

export const createCategoriesController = async (req: Request, res: Response) => {
  const body = res.locals.validated;

  const categorie = await createCategoriesService(body);

  return res.status(201).json(categorie);
};
