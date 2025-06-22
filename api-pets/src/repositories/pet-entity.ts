import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { SpeciesEnum } from "../types/index.js";

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  especie: SpeciesEnum;
  @Column()
  birthDate: Date;
  @Column()
  adopted: boolean;
}
