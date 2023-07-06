import { Router } from "express";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { scheduleCreate } from "../schemas/schedules.schema";
import { createScheduleController, readScheduleController } from "../controllers/schedules/schedules.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateAdmin } from "../middlewares/validatedAdmin.middleware";

export const scheduleRoutes: Router = Router();

scheduleRoutes.post("", verifyToken, validateAdmin, validatedBody(scheduleCreate), createScheduleController);
scheduleRoutes.get("/realEstate/:id", verifyToken, validateAdmin, readScheduleController);
