import { User } from "@prisma/client";
import userRepository from "../repositories/user-repository.js";
import { IUserService } from "../types/services/user-service.type.js";
import { USER_NOT_FOUND } from "../utils/constants.js";

class UserService implements IUserService {
  async getUserById(id: string): Promise<Omit<User, "password">> {
    const user = await userRepository.getUserById(id);

    if (user) return user;

    throw new Error(USER_NOT_FOUND);
  }

  async changeUserStatus(id: string, status: boolean): Promise<void> {
    const searchedUser = await userRepository.getUserById(id);

    if (!searchedUser) throw new Error(USER_NOT_FOUND);

    await userRepository.changeUserStatus(id, status);
  }
}

const userService = new UserService();

export default userService;
