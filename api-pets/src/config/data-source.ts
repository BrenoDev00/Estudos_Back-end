import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { PetEntity } from "../repositories/index.js";

export const AppDataSource: DataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [PetEntity],
  synchronize: true,
  logging: true,
  migrations: [],
  subscribers: [],
});
