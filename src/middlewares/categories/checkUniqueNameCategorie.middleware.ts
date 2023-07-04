import { NextFunction, Request, Response } from "express";
import { Category } from "../../entities";
import AppError from "../../error";
import categoriesRepositorys from "../../repositories/categories.repositorys";

export const checkNameCategorieExist = async (req: Request, res: Response, next: NextFunction) => {
  const categorie: Category | null = await categoriesRepositorys.findOneBy({ name: req.body.name });

  if(categorie){
    throw new AppError("Category already exists", 409)
  }

  return next()
};
