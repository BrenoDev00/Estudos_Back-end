import express, { Express } from "express";
import { userRouter } from "./routes/user-routes.js";
import { corsOptions } from "./utils/cors-options.js";
import errorHandler from "./middlewares/error-handler.js";
import helmet from "helmet";
import cors from "cors";

const app: Express = express();

app.use(helmet());

app.use(cors(corsOptions));

app.use(express.json());

app.use("/user/registration", userRouter);

app.use(errorHandler);

export default app;
