import { IRealEstateCreate, IrealEstateReturn } from "../../interfaces/realEstate/realEstate.interface";
import addressRepositorys from "../../repositories/address.repositorys";
import categoriesRepositorys from "../../repositories/categories.repositorys";
import realEstateRepositorys from "../../repositories/realEstate.repositorys";
import { realEstateRead } from "../../schemas/realEstate.schema";

export const createRealEstateService = async ({ address, ...body }: IRealEstateCreate): Promise<any> => {
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
  
  console.log(realEstate);
  
  return createRealEstate;
};





export const readRealEstateService = async () => {
  return realEstateRead.parse(
    await realEstateRepositorys.find({
      relations: { address: true },
    })
  );
};
