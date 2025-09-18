import { User } from "@prisma/client";
import { Login } from "../login.type.js";

export interface IUserRepository {
  getUserById(id: string): Promise<Omit<User, "password"> | null>;

  getUserEmail(email: string): Promise<{ email: string } | null>;

  getUserIdByCredentials(userCredentials: Login): Promise<string | undefined>;

  addUser(userData: Omit<User, "id">): Promise<User>;

  changeUserStatus(id: string, status: boolean): Promise<void>;
}
