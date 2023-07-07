import { Request, Response } from "express";
import { createUserService, deleteUserService, updateUserService } from "../../services/users/users.service";
import { readUsersService } from "../../services/users/users.service";
import { IUserCreate, IUserRead } from "../../interfaces/users/users.interfaces";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const body: IUserCreate = res.locals.validated;
  const userCreate = await createUserService(body);

  return res.status(201).json(userCreate);
};

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users: IUserRead = await readUsersService();

  return res.status(200).json(users);
};

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const userBody = res.locals.validated;
  const updateUser = await updateUserService(userBody, res.locals.foundEntity);

  return res.status(200).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  await deleteUserService(res.locals.foundEntity);

  return res.status(204).json();
};
