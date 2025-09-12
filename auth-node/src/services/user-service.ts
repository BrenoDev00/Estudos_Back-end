import { User } from "@prisma/client";
import userRepository from "../repositories/user-repository.js";
import { IUserService } from "../types/services/index.js";
import { emailAlreadyInUseMessage } from "../utils/constants.js";

class UserService implements IUserService {
  async addUser(userData: Omit<User, "id">): Promise<void> {
    const searchedUserEmail = await userRepository.getUserEmail(userData.email);

    if (searchedUserEmail) {
      throw new Error(emailAlreadyInUseMessage);
    }

    await userRepository.addUser(userData);
  }
}

const userService = new UserService();

export default userService;
