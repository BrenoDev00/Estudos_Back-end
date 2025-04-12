import pg from "pg";

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "hash-commerce",
});

console.log(await pool.query("SELECT * FROM public.users"));
