import { pool } from "./data-base.js";

export class BaseRepository {
  async getAll(table, columns) {
    try {
      return (
        await pool.query(`SELECT ${columns.join(", ")} FROM public.${table}`)
      ).rows;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, id, columns) {
    try {
      const query = `SELECT ${columns.join(
        ", "
      )} FROM public.${table} WHERE id = $1`; // É usada a flag $1 para evitar SQL injection.

      return (await pool.query(query, [id])).rows;
    } catch (error) {
      throw error;
    }
  }
}
