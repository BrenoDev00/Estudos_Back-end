import { pool } from "./data-base.js";

export class BaseRepository {
  async getAll(table) {
    const result = (await pool.query(`SELECT * FROM public.${table}`)).rows;

    return result;
  }
}
