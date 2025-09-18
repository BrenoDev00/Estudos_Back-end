import { User } from "@prisma/client";

export interface IUserService {
  getUserById(id: string): Promise<Omit<User, "password">>;

  addUser(userData: Omit<User, "id">): Promise<User>;
}
