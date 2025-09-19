import { Login } from "../login.type.js";

export interface IAuthService {
  login(userCredentials: Login): Promise<{ accessToken: string }>;
}
