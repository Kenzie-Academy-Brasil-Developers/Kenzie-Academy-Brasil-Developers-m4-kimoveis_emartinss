import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstate: z.number(),
  userId: z.number(),
});

export const scheduleCreate = scheduleSchema.omit({ id: true});
