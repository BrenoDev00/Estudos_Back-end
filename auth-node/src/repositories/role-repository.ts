import { prisma } from "../config/prisma-client.js";
import { IRoleRepository } from "../types/repositories/role-repository.type.js";

class RoleRepository implements IRoleRepository {
  async getRoleId(id: string): Promise<{ id: string } | null> {
    const roleId = await prisma.role.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    return roleId;
  }
}

const roleRepository = new RoleRepository();

export default roleRepository;
