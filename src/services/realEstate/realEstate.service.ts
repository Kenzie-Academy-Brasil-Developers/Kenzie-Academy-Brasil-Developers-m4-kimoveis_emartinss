import { IRealEstateCreate, IrealEstateReturn } from "../../interfaces/realEstate/address.interface";
import addressRepositorys from "../../repositories/address.repositorys";
import realEstateRepositorys from "../../repositories/realEstate.repositorys";
import { realEstateRead } from "../../schemas/realEstate.schema";

export const createRealEstateService = async ({ address, ...body }: IRealEstateCreate): Promise<IrealEstateReturn> => {
  const saveAddress = addressRepositorys.create(address);
  await addressRepositorys.save(saveAddress);

  const realEstate = {
    address: saveAddress,
    size: body.size,
    value: body.value,
    category: body.category,
  };

  const createRealEstate = realEstateRepositorys.create({ ...realEstate });
  await realEstateRepositorys.save(createRealEstate);

  return realEstate;
};

export const readRealEstateService = async () => {
  return realEstateRead.parse(
    await realEstateRepositorys.find({
      relations: { address: true },
    })
  );
};
