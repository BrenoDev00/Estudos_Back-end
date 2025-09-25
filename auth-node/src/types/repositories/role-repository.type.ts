export interface IRoleRepository {
  getRoleId(id: string): Promise<{ id: string } | null>;
}
