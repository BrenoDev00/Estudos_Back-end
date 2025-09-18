import { Login } from "../types/login.type.js";
import { IAuthService } from "../types/services/auth-service.type.js";
import userRepository from "../repositories/user-repository.js";
import bcrypt from "bcrypt";
import { INVALID_USER_CREDENTIALS } from "../utils/constants.js";

class AuthService implements IAuthService {
  async login(userCredentials: Login): Promise<void> {
    const userPassword = await userRepository.getUserPassword(userCredentials);

    if (!userPassword) throw new Error(INVALID_USER_CREDENTIALS);

    const { password } = userPassword;

    const comparedPassword = await bcrypt.compare(
      userCredentials.password,
      password
    );

    // return access token
  }
}

const authService = new AuthService();

export default authService;
