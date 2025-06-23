import { PetEntity } from "../../repositories/index.js";
import { UUIDTypes } from "uuid";

export interface PetRepositoryInterface {
  addPet(pet: PetEntity): void;
  getPets(): PetEntity[];
  updatePet(id: UUIDTypes, pet: PetEntity): void;
  deletePet(id: UUIDTypes, pet: PetEntity): void;
}
