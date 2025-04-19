import { BaseRepository } from "./base-repository.js";

export class ProductRepository extends BaseRepository {
  async getAll() {
    try {
      return await super.getAll("products");
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      return await super.getById("products", id);
    } catch (error) {
      throw error;
    }
  }
}
