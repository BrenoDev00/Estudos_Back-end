import { SpeciesEnum } from "../species.type.js";

export interface PetInterface {
  id: string;
  name: string;
  specie: SpeciesEnum;
  birthdayDate: Date;
  adopted: boolean;
}
