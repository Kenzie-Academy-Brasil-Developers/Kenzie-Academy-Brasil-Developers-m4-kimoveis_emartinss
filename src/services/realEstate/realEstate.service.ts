import { RealEstate } from "../../entities";
import { IRealEstateCreate, IRealEstateRead } from "../../interfaces/realEstate/realEstate.interface";
import addressRepositorys from "../../repositories/address.repositorys";
import categoriesRepositorys from "../../repositories/categories.repositorys";
import realEstateRepositorys from "../../repositories/realEstate.repositorys";
import { realEstateRead } from "../../schemas/realEstate.schema";

export const createRealEstateService = async ({ address, ...body }: IRealEstateCreate): Promise<RealEstate> => {
  const saveAddress = addressRepositorys.create(address);
  await addressRepositorys.save(saveAddress);

  const category = await categoriesRepositorys.findOneBy({ id: body.categoryId });

  const realEstate = {
    address: saveAddress,
    ...body,
    category: category!,
  };

  const createRealEstate = realEstateRepositorys.create(realEstate);
  await realEstateRepositorys.save(createRealEstate);

  return createRealEstate;
};

export const readRealEstateService = async (): Promise<IRealEstateRead> => {
  return await realEstateRepositorys.find({
    relations: { address: true, category: true },
  });
};
