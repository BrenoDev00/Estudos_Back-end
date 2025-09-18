import { User } from "@prisma/client";
import { prisma } from "../config/prisma-client.js";
import { IUserRepository } from "../types/repositories/user-repository.type.js";
import { Login } from "../types/login.type.js";

class UserRepository implements IUserRepository {
  async getUserById(id: string): Promise<Omit<User, "password"> | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        status: true,
      },
    });

    return user;
  }

  async getUserEmail(email: string): Promise<{ email: string } | null> {
    const userEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: { email: true },
    });

    return userEmail;
  }

  async getUserIdByCredentials(
    userCredentials: Login
  ): Promise<string | undefined> {
    const { email, password } = userCredentials;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
      select: {
        id: true,
      },
    });

    return user?.id;
  }

  async addUser(userData: Omit<User, "id">): Promise<User> {
    const user = await prisma.user.create({ data: userData });

    return user;
  }

  async changeUserStatus(id: string, status: boolean): Promise<void> {
    await prisma.user.update({
      data: {
        status: status,
      },
      where: {
        id: id,
      },
    });
  }
}

const userRepository = new UserRepository();

export default userRepository;
