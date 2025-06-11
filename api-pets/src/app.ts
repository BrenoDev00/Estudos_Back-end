import express, { Express } from "express";
import { petRouter } from "./routes/pet-routes.js";

const app: Express = express();

app.use(express.json());

app.use("/pets", petRouter);


export default app;
