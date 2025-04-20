import { BaseRepository } from "./base-repository.js";

export class ProductRepository extends BaseRepository {
  async getAll() {
    try {
      return await super.getAll("products", [
        "id",
        "name",
        "price_in_cents",
        "size",
      ]);
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      return await super.getById("products", id, [
        "id",
        "name",
        "price_in_cents",
        "size",
      ]);
    } catch (error) {
      throw error;
    }
  }
}
