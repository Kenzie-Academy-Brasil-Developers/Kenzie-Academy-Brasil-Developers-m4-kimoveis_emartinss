import { Request, Response } from "express";
import {
  createCategoriesService,
  readCategoriesService,
  readRealEstateByCategoryService,
} from "../../services/categories/categories.service";
import { ICategories, ICategoriesCreate, ICategoriesRead } from "../../interfaces/categories/categories.interfaces";
import { Category } from "../../entities";

export const createCategoriesController = async (req: Request, res: Response): Promise<Response> => {
  const body: ICategoriesCreate = res.locals.validated;

  const categorie: ICategories = await createCategoriesService(body);

  return res.status(201).json(categorie);
};

export const readCategoriesController = async (req: Request, res: Response): Promise<Response | void> => {
  const categories: ICategoriesRead = await readCategoriesService();

  res.status(200).json(categories);
};

export const readRealEstateByCategoryController = async (req: Request, res: Response): Promise<Response | void> => {
  const categorieId: string = req.params.id;

  const realEstateByCategory: Category = await readRealEstateByCategoryService(categorieId);

  res.status(200).json(realEstateByCategory);
};
