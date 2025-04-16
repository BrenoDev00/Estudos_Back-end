import "dotenv/config";
import express from "express";
import { userRouter } from "./routes/user-routes.js";

const app = express();

app.use("/users", userRouter)

app.listen(3001, () => console.log("API rodando na porta 3001"));
