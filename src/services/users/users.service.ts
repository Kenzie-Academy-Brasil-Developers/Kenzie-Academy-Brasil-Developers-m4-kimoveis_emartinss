import { User } from "../../entities";
import { IUserCreate, IUserRead, IUserReturn } from "../../interfaces/users/users.interfaces";
import { hash } from "bcryptjs";
import { usersRead, usersReturn } from "../../schemas/users.schema";
import userRepositorys from "../../repositories/user.repositorys";

export const createUserService = async (userBody: IUserCreate): Promise<IUserReturn> => {
  userBody.password = await hash(userBody.password, 10);

  const newUser: User = userRepositorys.create(userBody);
  await userRepositorys.save(newUser);

  return usersReturn.parse(newUser);
};

export const readUsersService = async (): Promise<IUserRead> => {
  return usersRead.parse(await userRepositorys.find());
};

export const updateUserService = async (userBody: IUserCreate, userId: User): Promise<IUserReturn> => {
  const userUpdate = userRepositorys.create({ ...userId, ...userBody });
  await userRepositorys.save(userUpdate);

  return usersReturn.parse(userUpdate);
};

export const deleteUserService = async (userId: User): Promise<void> => {
  await userRepositorys.softRemove(userId);
};
