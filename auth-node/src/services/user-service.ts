import { User } from "@prisma/client";
import userRepository from "../repositories/user-repository.js";
import { IUserService } from "../types/services/index.js";
import { EMAIL_ALREADY_IN_USE, USER_NOT_FOUND } from "../utils/constants.js";
import { hash } from "bcrypt";

class UserService implements IUserService {
  async getUserById(id: string): Promise<Omit<User, "password">> {
    const user = await userRepository.getUserById(id);

    if (user) return user;

    throw new Error(USER_NOT_FOUND);
  }

  async addUser(userData: Omit<User, "id">): Promise<User> {
    const searchedUserEmail = await userRepository.getUserEmail(userData.email);

    if (searchedUserEmail) {
      throw new Error(EMAIL_ALREADY_IN_USE);
    }

    const encryptedPassword = await hash(userData.password, 12);

    const user = await userRepository.addUser({
      ...userData,
      password: encryptedPassword,
    });

    return user;
  }
}

const userService = new UserService();

export default userService;
