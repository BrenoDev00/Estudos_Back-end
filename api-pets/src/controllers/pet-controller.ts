import { Request, Response } from "express";
import { petList } from "../utils/pet-list.js";
import { PetControllerInterface } from "../types/index.js";
import { v4 as uuidv4 } from "uuid";

export class PetController implements PetControllerInterface {
  getPets(req: Request, res: Response): Response {
    try {
      return res.status(200).send(petList);
    } catch (error) {
      return res.status(500).send({ message: "Erro interno do servidor." });
    }
  }

  addPet(req: Request, res: Response): Response {
    try {
      const { body } = req;

      petList.push({ id: uuidv4(), ...body });

      return res.status(201).send({ message: "Pet adicionado com sucesso!" });
    } catch (error) {
      return res.status(500).send({ message: "Erro interno do servidor." });
    }
  }
}
