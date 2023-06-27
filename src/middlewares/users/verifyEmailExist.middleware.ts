import { Repository } from "typeorm";
import AppError from "../../error";
import { User } from "../../entities";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";

export const verifyNameExistCreate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepo.findOneBy({ email: req.body.email });

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
