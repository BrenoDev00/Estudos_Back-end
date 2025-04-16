import "dotenv/config";
import { pool } from "./data-base.js";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const result = (await pool.query("SELECT * FROM public.users")).rows;

  res.status(200).send(result);
});

app.listen(3001, () => console.log("API  rodando na porta 3001"));
