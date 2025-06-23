import { Request, Response } from "express";
import { PetEntity, PetRepository } from "../repositories/index.js";
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
      return res.status(HttpStatusCodeEnum.Ok).send({ message: "temp" });
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

      const newPet = new PetEntity();

      newPet.id = uuidv4();
      newPet.name = body.name;
      newPet.specie = body.specie;
      newPet.birthdayDate = new Date(body.birthdayDate);
      newPet.adopted = Boolean(body.adopted);

      this.repository.addPet(newPet);

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
