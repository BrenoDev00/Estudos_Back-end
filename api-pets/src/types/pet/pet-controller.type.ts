import { Request, Response } from "express";

export interface PetControllerInterface {
  addPet: (req: Request, res: Response) => Response;
}
