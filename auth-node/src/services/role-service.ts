import { IRoleService } from "../types/services/role-service.type.js";
import roleRepository from "../repositories/role-repository.js";

class RoleService implements IRoleService {
  async getRoleId(id: string): Promise<{ id: string } | null> {
    const roleId = await roleRepository.getRoleId(id);

    return roleId;
  }
}

const roleService = new RoleService();

export default roleService;
