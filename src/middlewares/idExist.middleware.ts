import { NextFunction, Request, Response } from "express";
import AppError from "../error";
import { User } from "../entities";
import userRepositorys from "../repositories/user.repositorys";

export const idExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: User | null = await userRepositorys.findOneBy({ id });
  if (!foundEntity) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
