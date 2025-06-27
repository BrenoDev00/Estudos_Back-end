import { PetEntity } from "../../repositories/index.js";
import { UUIDTypes } from "uuid";

export interface PetRepositoryInterface {
  getPets(): Promise<PetEntity[]>;
  addPet(pet: PetEntity): Promise<void>;
  updatePet(id: UUIDTypes, pet: PetEntity): Promise<void>;
  deletePet(id: UUIDTypes, pet: PetEntity): Promise<void>;
}
