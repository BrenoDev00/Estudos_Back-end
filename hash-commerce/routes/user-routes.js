import { Router } from "express";
import { BaseRepository } from "../repository/base-repository.js";

export const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const result = await new BaseRepository().getAll("users");

  res.status(200).send(result);
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await new BaseRepository().getById("users", id);

  res.status(200).send(result);
});
