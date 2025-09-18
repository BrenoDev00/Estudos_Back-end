import { Login } from "../types/login.type.js";
import { IAuthService } from "../types/services/auth-service.type.js";
import userRepository from "../repositories/user-repository.js";
import { INVALID_USER_CREDENTIALS } from "../utils/constants.js";

class AuthService implements IAuthService {
  async login(userCredentials: Login): Promise<void> {
    const userId = await userRepository.getUserIdByCredentials(userCredentials);

    if (!userId) throw new Error(INVALID_USER_CREDENTIALS);

    // return access token
  }
}

const authService = new AuthService();

export default authService;
