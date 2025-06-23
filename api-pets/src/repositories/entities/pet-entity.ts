import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { SpeciesEnum } from "../../types/index.js";

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column({ type: "text" })
  specie: SpeciesEnum;
  @Column()
  birthdayDate: Date;
  @Column()
  adopted: boolean;
}
