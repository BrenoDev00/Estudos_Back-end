import express, { Express } from "express";
import { userRouter } from "./routes/user-router.js";
import cors from "cors";

const app: Express = express();

app.use(cors());

app.use(express.json());

app.use("/teste", userRouter);

export default app;
