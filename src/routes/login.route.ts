import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { login } from "../schemas/login.shema";

export const loginRoutes: Router = Router();

loginRoutes.post("", validatedBody(login), loginController);
