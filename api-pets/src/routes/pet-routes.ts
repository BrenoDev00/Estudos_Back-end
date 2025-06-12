import { Router, Request, Response } from "express";
import { PetController } from "../controllers/pet-controller.js";

export const petRouter: Router = Router();

petRouter.get("/", (req: Request, res: Response) => {
  new PetController().getPets(req, res);
});

petRouter.post("/", (req: Request, res: Response) => {
  new PetController().addPet(req, res);
});
