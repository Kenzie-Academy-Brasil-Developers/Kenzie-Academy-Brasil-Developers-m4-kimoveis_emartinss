import { compare } from "bcryptjs";
import AppError from "../../error";
import { ILogin, Token } from "../../interfaces/login/login.interface";
import userRepositorys from "../../repositories/user.repositorys";
import { sign } from "jsonwebtoken";
import { IUser } from "../../interfaces/users/users.interfaces";
import { User } from "../../entities";

export const loginService = async (loginData: ILogin): Promise<Token> => {
  const user: User | null = await userRepositorys.findOneBy({ email: loginData.email });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const samePassword: boolean = await compare(loginData.password, user.password);
  if (!samePassword) {
    throw new AppError("Invalid credentials", 401);
  }
  const token: string = sign({ email: user.email, admin: user.admin }, process.env.SECRET_KEY!, {
    subject: user.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });

  return { token };
};
