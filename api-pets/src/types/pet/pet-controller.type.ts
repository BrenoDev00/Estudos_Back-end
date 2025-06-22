import { Request, Response } from "express";
import { PetInterface } from "./pet.type.js";
import { MessageResponse } from "../message-response.type.js";

export interface PetControllerInterface {
  getPets: (
    req: Request,
    res: Response<MessageResponse | PetInterface[]>
  ) => Response;

  addPet: (
    req: Request<{}, {}, Omit<PetInterface, "id">>,
    res: Response<MessageResponse>
  ) => Response;
}
