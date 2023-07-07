import { RealEstate, Schedule } from "../../entities";
import AppError from "../../error";
import { IScheduleCreate } from "../../interfaces/schedules/schedules.interfaces";
import realEstateRepositorys from "../../repositories/realEstate.repositorys";
import scheduleRepositorys from "../../repositories/schedule.repositorys";

export const createScheduleService = async (body: IScheduleCreate, user: any): Promise<Schedule> => {
  const realEstate = await realEstateRepositorys.findOneBy({ id: body.realEstateId });

  const conflictingScheduleRealEstate = await scheduleRepositorys
    .createQueryBuilder("s")
    .where("s.date = :date", { date: body.date })
    .andWhere("s.hour = :hour", { hour: body.hour })
    .andWhere("s.realEstate = :realEstateId", { realEstateId: body.realEstateId })
    .getOne();

  const conflictScheduleUser = await scheduleRepositorys
    .createQueryBuilder("s")
    .where("s.date = :date", { date: body.date })
    .andWhere("s.hour = :hour", { hour: body.hour })
    .andWhere("s.user = :userId", { userId: user })
    .getOne();

  const isWithinWorkingHours = (date: Date): boolean => {
    const startWorkingHour = new Date(date);
    startWorkingHour.setHours(8, 0, 0, 0);

    const endWorkingHour = new Date(date);
    endWorkingHour.setHours(18, 0, 0, 0);

    return date >= startWorkingHour && date <= endWorkingHour;
  };

  const appointmentTime = new Date(body.date);
  appointmentTime.setHours(parseInt(body.hour.split(":")[0], 10), parseInt(body.hour.split(":")[1], 10), 0, 0);

  const isWeekday = (date: Date): boolean => {
    const weekday = date.getDay();
    return weekday >= 1 && weekday <= 5;
  };
  const appointmentDate = new Date(body.date);

  if (!isWeekday(appointmentDate)) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  if (!isWithinWorkingHours(appointmentTime)) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (conflictScheduleUser) {
    throw new AppError("User schedule to this real estate at this date and time already exists", 409);
  }

  if (conflictingScheduleRealEstate) {
    throw new AppError("Schedule to this real estate at this date and time already exists", 409);
  }

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const scheduleBody = {
    realEstate: { id: body.realEstateId },
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
