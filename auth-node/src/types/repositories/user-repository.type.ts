import { User } from "@prisma/client";

export interface IUserRepository {
  getUserById(id: string): Promise<Omit<User, "password"> | null>;

  getUserEmail(email: string): Promise<{ email: string } | null>;

  addUser(userData: Omit<User, "id">): Promise<User>;

  changeUserStatus(id: string, status: boolean): Promise<void>;
}
