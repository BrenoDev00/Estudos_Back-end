import { Router } from "express";
import { BaseRepository } from "../repository/base-repository.js";

export const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const result = await new BaseRepository().getAll("users");

  res.status(200).send(result);
});
