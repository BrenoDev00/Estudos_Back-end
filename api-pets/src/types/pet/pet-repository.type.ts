import { PetEntity } from "../../repositories/index.js";
import { UUIDTypes } from "uuid";

export interface PetRepositoryInterface {
  getPets(): Promise<PetEntity[]>;
  addPet(pet: PetEntity): void;
  updatePet(id: UUIDTypes, pet: PetEntity): void;
  deletePet(id: UUIDTypes, pet: PetEntity): void;
}
