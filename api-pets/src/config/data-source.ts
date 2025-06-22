import { DataSource } from "typeorm";

export const AppDataSource: DataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [],
  synchronize: true,
});
