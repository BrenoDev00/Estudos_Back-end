import { Router } from "express";
import { UserRepository } from "../repository/user-repository.js";

export const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const result = await new UserRepository().getAll();

  res.status(200).send(result);
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await new UserRepository().getById(id);

  res.status(200).send(result);
});
