import { User } from "@prisma/client";

export interface IUserService {
  addUser(userData: Omit<User, "id">): Promise<User>;
}
