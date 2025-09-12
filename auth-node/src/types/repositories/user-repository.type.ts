import { User } from "@prisma/client";

export interface IUserRepository {
  getUserEmail(email: string): Promise<{ email: string } | null>;

  addUser(userData: Omit<User, "id">): Promise<User>;
}
