import { User } from "@prisma/client";
import { Login } from "../login.type.js";

export interface IUserRepository {
  getUserById(id: string): Promise<Omit<User, "password"> | null>;

  getUserEmail(email: string): Promise<{ email: string } | null>;

  getUserPassword(
    userCredentials: Login
  ): Promise<{ password: string } | null>;

  addUser(userData: Omit<User, "id">): Promise<User>;

  changeUserStatus(id: string, status: boolean): Promise<void>;
}
