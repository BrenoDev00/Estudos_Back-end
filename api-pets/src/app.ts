import express, { Express } from "express";
import { petRouter } from "./routes/pet-routes.js";
import helmet from "helmet";

const app: Express = express();

app.use(helmet());

app.use(express.json());

app.use("/pets", petRouter);

export default app;
