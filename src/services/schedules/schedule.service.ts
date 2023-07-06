import { And } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import AppError from "../../error";
import { IScheduleCreate } from "../../interfaces/schedules/schedules.interfaces";
import realEstateRepositorys from "../../repositories/realEstate.repositorys";
import scheduleRepositorys from "../../repositories/schedule.repositorys";

export const createScheduleService = async (body: IScheduleCreate, user: any) => {
  const scheduleBody = {
    realEstate: { id: body.realEstate },
    date: body.date,
    hour: body.hour,
  };
  const schedule = scheduleRepositorys.create({ ...scheduleBody, user });
  await scheduleRepositorys.save(schedule);

  return schedule;
};

export const readScheduleService = async (id: string): Promise<RealEstate | null> => {
  const realEstate = await realEstateRepositorys.findOneBy({ id: parseInt(id) });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  return await realEstateRepositorys.findOne({
    where: { id: parseInt(id) },
    relations: {
      schedules: { user: true },
      category: true,
      address: true,
    },
  });
};
