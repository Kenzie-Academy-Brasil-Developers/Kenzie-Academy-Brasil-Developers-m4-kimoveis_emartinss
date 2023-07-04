import { Request, Response } from "express";
import { createScheduleService, readScheduleService } from "../../services/schedules/schedule.service";

export const createScheduleController = async (req: Request, res: Response) => {
  const body = res.locals.validated;
  const userId = res.locals.decoded.sub

  const schedule = await createScheduleService(body, parseInt(userId));

  res.status(201).json(schedule);
};

export const readScheduleController = async (req: Request, res: Response) => {
  const schedule = await readScheduleService();

  return res.status(200).json(schedule);
};
