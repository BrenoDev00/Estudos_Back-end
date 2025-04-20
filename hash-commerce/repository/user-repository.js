import { BaseRepository } from "./base-repository.js";

export class UserRepository extends BaseRepository {
  async getAll() {
    try {
      return await super.getAll("users", ["id", "name", "surname", "email"]);
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      return await super.getById("users", id, [
        "id",
        "name",
        "surname",
        "email",
      ]);
    } catch (error) {
      throw error;
    }
  }
}
