import { Request, Response } from "express";
import { petList } from "../utils/pet-list.js";
import {
  PetControllerInterface,
  HttpStatusCodeEnum,
  PetInterface,
  MessageResponse,
} from "../types/index.js";
import { v4 as uuidv4 } from "uuid";

export class PetController implements PetControllerInterface {
  getPets(
    req: Request,
    res: Response<MessageResponse | PetInterface[]>
  ): Response {
    try {
      return res.status(HttpStatusCodeEnum.Ok).send(petList);
    } catch (error) {
      return res
        .status(HttpStatusCodeEnum.InternalError)
        .send({ message: "Erro interno do servidor." });
    }
  }

  addPet(
    req: Request<{}, {}, Omit<PetInterface, "id">>,
    res: Response<MessageResponse>
  ): Response {
    try {
      const { body } = req;

      petList.push({ id: uuidv4(), ...body });

      return res
        .status(HttpStatusCodeEnum.Created)
        .send({ message: "Pet adicionado com sucesso!" });
    } catch (error) {
      return res
        .status(HttpStatusCodeEnum.InternalError)
        .send({ message: "Erro interno do servidor." });
    }
  }
}
