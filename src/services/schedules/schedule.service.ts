import { IScheduleCreate } from "../../interfaces/schedules/schedules.interfaces";
import scheduleRepositorys from "../../repositories/schedule.repositorys";

export const createScheduleService = async (body: IScheduleCreate) => {
  const schedule = scheduleRepositorys.create(body);
  await scheduleRepositorys.save(schedule);

  return schedule;
};

export const readScheduleService = async () => {
  return await scheduleRepositorys.find();
};
