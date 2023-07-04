import { Router } from "express";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstate/realEstate.controller";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { realEstateCreate } from "../schemas/realEstate.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateAdmin } from "../middlewares/validatedAdmin.middleware";
import { checkAddressExist } from "../middlewares/realEstates/checkAddressExist.middleware";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post("", verifyToken, validateAdmin, validatedBody(realEstateCreate), checkAddressExist, createRealEstateController);
realEstateRoutes.get("", readRealEstateController);
