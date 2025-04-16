import "dotenv/config";
import express from "express";
import { BaseRepository } from "./repository/base-repository.js";

const app = express();

app.get("/users", async (req, res) => {
  const result = await new BaseRepository().getAll("users");

  res.status(200).send(result);
});

app.listen(3001, () => console.log("API  rodando na porta 3001"));
