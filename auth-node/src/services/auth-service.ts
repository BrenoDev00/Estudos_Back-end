import { Login } from "../types/login.type.js";
import { IAuthService } from "../types/services/auth-service.type.js";
import userRepository from "../repositories/user-repository.js";
import bcrypt from "bcrypt";
import {
  INVALID_USER_CREDENTIALS,
  USER_NOT_FOUND,
} from "../utils/constants.js";
import { sign } from "jsonwebtoken";
import jwtSecret from "../config/jwt-secret.js";

class AuthService implements IAuthService {
  async login(loginData: Login): Promise<{ accessToken: string }> {
    const userCredentialsData = await userRepository.getUserCredentialsByEmail(
      loginData.email
    );

    if (!userCredentialsData) throw new Error(USER_NOT_FOUND);

    const samePasswords = await bcrypt.compare(
      loginData.password,
      userCredentialsData.password
    );

    if (!samePasswords) throw new Error(INVALID_USER_CREDENTIALS);

    const accessToken = sign(
      {
        email: userCredentialsData.email,
      },
      jwtSecret,
      {
        expiresIn: 86400, // 1 dia
      }
    );

    return { accessToken };
  }
}

const authService = new AuthService();

export default authService;
