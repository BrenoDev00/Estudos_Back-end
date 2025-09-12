import { Router, Request, Response } from "express";
import userController from "../controllers/user-controller.js";

export const userRouter: Router = Router();

userRouter.post("/", async (req: Request, res: Response) => {
  await userController.addUser(req, res);
});

userRouter.get("/", (_: Request, res: Response) => {
  res.status(200).send("teste");
});
