import { NextFunction, Request, Response } from "express";
import { Address } from "../../entities";
import AppError from "../../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";

export const checkAddressExist = async (req: Request, res: Response, next: NextFunction) => {
  const requestAddress: Address = req.body.address;

  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

  let findAddress: Address | null;

  if (requestAddress.number) {
    findAddress = await addressRepository.findOne({
      where: {
        street: requestAddress.street,
        zipCode: requestAddress.zipCode,
        city: requestAddress.city,
        state: requestAddress.state,
        number: requestAddress.number,
      },
    });
  } else {
    findAddress = await addressRepository.findOne({
      where: {
        street: requestAddress.street,
        zipCode: requestAddress.zipCode,
        city: requestAddress.city,
        state: requestAddress.state,
      },
    });
  }

  if (findAddress) {
    throw new AppError("Address already exists", 409);
  }

  next();
};
