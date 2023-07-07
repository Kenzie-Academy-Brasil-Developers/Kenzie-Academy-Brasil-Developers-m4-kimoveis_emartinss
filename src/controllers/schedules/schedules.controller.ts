import { Request, Response } from "express";
import { createScheduleService, readScheduleService } from "../../services/schedules/schedule.service";
import { RealEstate } from "../../entities";

export const createScheduleController = async (req: Request, res: Response): Promise<Response | void> => {
  const body = res.locals.validated;
  const userId: string = res.locals.decoded.sub;

  await createScheduleService(body, parseInt(userId));

  res.status(201).json({ message: "Schedule created" });
};

export const readScheduleController = async (req: Request, res: Response): Promise<Response> => {
  const id: string = req.params.id;
  const schedule: RealEstate | null = await readScheduleService(id);

  return res.status(200).json(schedule);
};
