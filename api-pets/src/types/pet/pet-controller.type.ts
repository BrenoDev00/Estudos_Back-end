import { Request, Response } from "express";
import { PetInterface } from "./pet.type.js";
import { ResponseMensageInterface } from "../response-message.type.js";

export interface PetControllerInterface {
  getPets: (
    req: Request,
    res: Response<ResponseMensageInterface | PetInterface[]>
  ) => Promise<Response<ResponseMensageInterface | PetInterface[]>>;

  addPet: (
    req: Request<{}, {}, Omit<PetInterface, "id">>,
    res: Response<ResponseMensageInterface>
  ) => Response;
}
