import { Request, Response } from "express";
import {
  createCategoriesService,
  readCategoriesService,
  readRealEstateByCategoryService,
} from "../../services/categories/categories.service";
import { ICategories, ICategoriesCreate } from "../../interfaces/categories/categories.interfaces";

export const createCategoriesController = async (req: Request, res: Response) => {
  const body: ICategoriesCreate = res.locals.validated;

  const categorie: ICategories = await createCategoriesService(body);

  return res.status(201).json(categorie);
};

export const readCategoriesController = async (req: Request, res: Response) => {
  const categories = await readCategoriesService();
console.log(categories)
  res.status(200).json(categories)
};

export const readRealEstateByCategoryController = async (req: Request, res: Response) => {
  const categorieId = req.params.id;

  const realEstateByCategory = await readRealEstateByCategoryService(categorieId);

  res.status(200).json(realEstateByCategory);
};
