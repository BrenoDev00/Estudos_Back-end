export interface IRoleService {
  getRoleId(id: string): Promise<{ id: string } | null>;
}
