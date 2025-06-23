import { Router, Request, Response } from "express";
import { PetController } from "../controllers/pet-controller.js";
import { PetRepository } from "../repositories/pet-repository.js";
import { AppDataSource } from "../config/data-source.js";

export const petRouter: Router = Router();

const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity")
);

petRouter.get("/", (req: Request, res: Response) => {
  new PetController(petRepository).getPets(req, res);
});

petRouter.post("/", (req: Request, res: Response) => {
  new PetController(petRepository).addPet(req, res);
});
