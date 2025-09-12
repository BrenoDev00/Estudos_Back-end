import { User } from "@prisma/client";
import { prisma } from "../config/prisma-client.js";
import { IUserRepository } from "../types/repositories/user-repository.type.js";

class UserRepository implements IUserRepository {
  async getUserEmail(email: string): Promise<{ email: string } | null> {
    const userEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: { email: true },
    });

    return userEmail;
  }

  async addUser(userData: Omit<User, "id">): Promise<void> {
    await prisma.user.create({ data: userData });
  }
}

const userRepository = new UserRepository();

export default userRepository;
