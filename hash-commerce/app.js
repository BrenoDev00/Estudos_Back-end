import "dotenv/config";
import { pool } from "./data-base.js";

console.log((await pool.query("SELECT * FROM public.users")).rows);
