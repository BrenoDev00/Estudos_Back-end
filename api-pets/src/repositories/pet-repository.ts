import { UUIDTypes } from "uuid";
import { PetRepositoryInterface } from "../types/index.js";
import { PetEntity } from "./entities/pet-entity.js";
import { Repository } from "typeorm";

export class PetRepository implements PetRepositoryInterface {
  private repository: Repository<PetEntity>;

  constructor(repository: Repository<PetEntity>) {
    this.repository = repository;
  }

  // getPets(): PetEntity[] {
  //   return
  // }

  addPet(pet: PetEntity): void {
    this.repository.save(pet);
  }

  updatePet(id: UUIDTypes, pet: PetEntity): void {}

  deletePet(id: UUIDTypes, pet: PetEntity): void {}
}
