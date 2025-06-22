import "reflect-metada";
import express, { Express } from "express";
import { petRouter } from "./routes/pet-routes.js";
import helmet from "helmet";
import { AppDataSource } from "./config/data-source.ts";

const app: Express = express();

app.use(helmet());

app.use(express.json());

app.use("/pets", petRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado.");
  })
  .catch((error) =>
    console.error("Não foi possível conectar ao banco de dados: ", error)
  );

export default app;
