import { Request, Response } from "express";
import { createRealEstateService, readRealEstateService } from "../../services/realEstate/realEstate.service";
import { IRealEstateCreate, IRealEstateRead } from "../../interfaces/realEstate/realEstate.interface";
import { RealEstate } from "../../entities";

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
  const body: IRealEstateCreate = res.locals.validated;
  const newRealEstate: RealEstate = await createRealEstateService(body);

  return res.status(201).json(newRealEstate);
};

export const readRealEstateController = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: IRealEstateRead = await readRealEstateService();

  return res.status(200).json(realEstate);
};
