import { Request, Response } from "express";
import { PetRepository } from "../repositories/index.js";
import {
  PetControllerInterface,
  HttpStatusCodeEnum,
  PetInterface,
  ResponseMensageInterface,
} from "../types/index.js";
import { v4 as uuidv4 } from "uuid";

export class PetController implements PetControllerInterface {
  private repository: PetRepository;

  constructor(repository: PetRepository) {
    this.repository = repository;
  }

  getPets(
    req: Request,
    res: Response<ResponseMensageInterface | PetInterface[]>
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
    res: Response<ResponseMensageInterface>
  ): Response {
    try {
      const { body } = req;

      this.repository.addPet({ id: uuidv4(), ...body });

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
