import { users, usersCreate, usersRead, usersReturn } from "../../schemas/users.schema";
import { z } from "zod";

export type IUser = z.infer<typeof users>;
export type IUserCreate = z.infer<typeof usersCreate>;
export type IUserReturn = z.infer<typeof usersReturn>;
export type IUserRead = z.infer<typeof usersRead>;
