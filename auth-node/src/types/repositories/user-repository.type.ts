import { User } from "@prisma/client";
import { UserCredentials } from "../user-credentials.js";

export interface IUserRepository {
  getUserById(id: string): Promise<Omit<User, "password"> | null>;

  getUserCredentialsByEmail(email: string): Promise<UserCredentials | null>;

  addUser(userData: Omit<User, "id">): Promise<User>;

  changeUserStatus(id: string, status: boolean): Promise<void>;
}
