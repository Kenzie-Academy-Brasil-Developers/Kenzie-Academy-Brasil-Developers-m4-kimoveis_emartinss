import { Request, Response } from "express";
import { loginService } from "../../services/login/login.service";
import { ILogin, Token } from "../../interfaces/login/login.interface";

export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const body:ILogin = res.locals.validated;

  const token:Token = await loginService(body);

  return res.status(200).json(token);
};
