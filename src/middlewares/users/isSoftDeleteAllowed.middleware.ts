import { NextFunction, Request, Response } from "express";
import AppError from "../../error";
import userRepositorys from "../../repositories/user.repositorys";

export const isSoftDeleteAllowed = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const user = await userRepositorys.findOneBy({ id: parseInt(req.params.id) });
  if (user?.deletedAt !== null) {
    throw new AppError("already deleted user", 409);
  }
  return next();
};
