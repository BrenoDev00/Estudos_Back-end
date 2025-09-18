import express, { Express } from "express";
import { corsOptions } from "./utils/cors-options.js";
import errorHandler from "./middlewares/error-handler.js";
import helmet from "helmet";
import cors from "cors";
import userRouter from "./routers/user-router.js";
import authRouter from "./routers/auth-router.js";

const app: Express = express();

app.use(helmet());

app.use(cors(corsOptions));

app.use(express.json());

app.use("/login", authRouter);

app.use("/user", userRouter);

app.use(errorHandler);

export default app;
