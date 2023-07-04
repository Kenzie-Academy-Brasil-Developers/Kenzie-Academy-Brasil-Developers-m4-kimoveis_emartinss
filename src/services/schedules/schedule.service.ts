import { User } from "../../entities";
import { IScheduleCreate } from "../../interfaces/schedules/schedules.interfaces";
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

export const readScheduleService = async () => {
  return await scheduleRepositorys.find();
};
