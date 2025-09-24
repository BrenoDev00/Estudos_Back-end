import { User } from "@prisma/client";

export interface IUserService {
  getUserById(id: string): Promise<Omit<User, "password">>;

  changeUserStatus(id: string, status: boolean): Promise<void>;
}
