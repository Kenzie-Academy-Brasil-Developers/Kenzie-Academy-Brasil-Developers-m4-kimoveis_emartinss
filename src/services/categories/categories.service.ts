import { Category } from "../../entities";
import AppError from "../../error";
import { ICategories, ICategoriesCreate } from "../../interfaces/categories/categories.interfaces";
import categoriesRepositorys from "../../repositories/categories.repositorys";
import realEstateRepositorys from "../../repositories/realEstate.repositorys";

export const createCategoriesService = async (body: ICategoriesCreate): Promise<ICategories> => {
  const categorie: Category = categoriesRepositorys.create(body);
  await categoriesRepositorys.save(categorie);

  return categorie;
};

export const readCategoriesService = async () => {
  return categoriesRepositorys.find();
};

export const readRealEstateByCategoryService = async (categorieId: string) => {
  const categorie = await categoriesRepositorys.findOne({ where: { id: parseInt(categorieId) }, relations: { realEstate: true } });

  if (!categorie) {
    throw new AppError("Category not found", 404);
  }

  return categorie;
};
