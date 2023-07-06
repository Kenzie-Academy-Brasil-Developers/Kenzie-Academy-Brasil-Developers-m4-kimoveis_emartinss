import { Schedule, User } from "../../entities";
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


export const readScheduleService = async (id: string): Promise<Schedule | null> => {
  const realEstate = await realEstateRepositorys.findOneBy({ id: parseInt(id) });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  return await scheduleRepositorys
    .createQueryBuilder("s")
    .leftJoinAndSelect("s.user", "u")
    .leftJoinAndSelect("s.realEstate", "rs")
    .leftJoinAndSelect("rs.address", "a")
    .leftJoinAndSelect("rs.category", "c")
    .where("rs.id = :id", { id: parseInt(id) })
    .andWhere("s.realEstate = :id", { id: id })
    .getOne();
};
