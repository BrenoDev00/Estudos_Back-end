import { User } from "@prisma/client";
import userRepository from "../repositories/user-repository.js";
import { IUserService } from "../types/services/index.js";
import { EMAIL_ALREADY_IN_USE } from "../utils/constants.js";

class UserService implements IUserService {
  async addUser(userData: Omit<User, "id">): Promise<User> {
    const searchedUserEmail = await userRepository.getUserEmail(userData.email);

    if (searchedUserEmail) {
      throw new Error(EMAIL_ALREADY_IN_USE);
    }

    const user = await userRepository.addUser(userData);

    return user;
  }
}

const userService = new UserService();

export default userService;
