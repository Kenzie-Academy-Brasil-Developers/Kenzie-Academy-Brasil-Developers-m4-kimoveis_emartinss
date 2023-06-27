import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController,
} from "../controllers/users/users.controller";
import { usersCreate, usersUpdate } from "../schemas/users.schema";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { verifyNameExistCreate } from "../middlewares/users/verifyEmailExist.middleware";
import { idExists } from "../middlewares/idExist.middleware";
import { validateAdmin } from "../middlewares/validatedAdmin.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { VerifyUserToken } from "../middlewares/checkTokenOwner.middleware";

export const usersRoutes: Router = Router();

usersRoutes.post("", verifyNameExistCreate, validatedBody(usersCreate), createUserController);
usersRoutes.get("", verifyToken, validateAdmin, readUsersController);
usersRoutes.patch("/:id", idExists, verifyToken, VerifyUserToken, validatedBody(usersUpdate), updateUserController);
usersRoutes.delete("/:id", idExists, verifyToken, validateAdmin, deleteUserController);
