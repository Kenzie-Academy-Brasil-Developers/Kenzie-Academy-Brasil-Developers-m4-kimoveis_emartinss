import { Request, Response } from "express";
import { createScheduleService, readScheduleService } from "../../services/schedules/schedule.service";

export const createScheduleController = async (req: Request, res: Response) => {
  const body = res.locals.validated;
  const userId = res.locals.decoded.sub;
 
  const schedule = await createScheduleService(body, parseInt(userId));

  res.status(201).json(schedule);
};

export const readScheduleController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const schedule = await readScheduleService(id);

  return res.status(200).json(schedule);
};
