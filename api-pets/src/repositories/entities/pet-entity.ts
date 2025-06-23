import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { SpeciesEnum } from "../../types/index.js";

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  specie: SpeciesEnum;
  @Column()
  birthdayDate: Date;
  @Column()
  adopted: boolean;
}
