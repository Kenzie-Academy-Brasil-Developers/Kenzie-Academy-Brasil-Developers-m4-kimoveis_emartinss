import { Category } from "../../entities";
import { ICategories, ICategoriesCreate } from "../../interfaces/categories/categories.interfaces";
import categoriesRepositorys from "../../repositories/categories.repositorys";

export const createCategoriesService = async (body: ICategoriesCreate): Promise<ICategories> => {
  const categorie: Category = categoriesRepositorys.create(body);
  await categoriesRepositorys.save(categorie);

  return categorie;
};
