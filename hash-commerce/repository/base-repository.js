import { pool } from "./data-base.js";

export class BaseRepository {
  async getAll(table) {
    try {
      return (await pool.query(`SELECT * FROM public.${table}`)).rows;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, id) {
    try {
      const query = `SELECT * FROM public.${table} WHERE id = $1`; // É usada a flag $1 para evitar SQL injection.

      return (await pool.query(query, [id])).rows;
    } catch (error) {
      throw error;
    }
  }
}
