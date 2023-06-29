import { scheduleCreate, scheduleSchema } from "../../schemas/schedules.schema";

export type ISchedule = Zod.infer<typeof scheduleSchema>;
export type IScheduleCreate = Zod.infer<typeof scheduleCreate>;
