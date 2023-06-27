import { z } from "zod";

export const users = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

export const usersCreate = users.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true });
export const usersReturn = users.omit({ password: true });
export const usersRead = z.array(usersReturn);
export const usersUpdate = users.omit({ id: true, admin: true }).partial();
