import { Request, Response } from "express";
import { createRealEstateService, readRealEstateService } from "../../services/realEstate/realEstate.service";

export const createRealEstateController = async (req: Request, res: Response) => {
  const body = res.locals.validated;
  const newRealEstate = await createRealEstateService(req.body);

  return res.status(201).json(newRealEstate);
};

export const readRealEstateController = async (req: Request, res: Response) => {
  const realEstate = await readRealEstateService();

  return res.status(200).json(realEstate);
};
