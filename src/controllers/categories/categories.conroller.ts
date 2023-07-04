import { Request, Response } from "express";
import { createCategoriesService } from "../../services/categories/categories.service";
import { ICategories, ICategoriesCreate } from "../../interfaces/categories/categories.interfaces";

export const createCategoriesController = async (req: Request, res: Response) => {
  const body:ICategoriesCreate = res.locals.validated;

  const categorie:ICategories = await createCategoriesService(body);

  return res.status(201).json(categorie);
};
