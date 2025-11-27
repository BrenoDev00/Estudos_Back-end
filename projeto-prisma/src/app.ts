import express, { Express } from "express";
import contactRouter from "./routes/contact-routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerJson from "../swagger.json";

export const app: Express = express();

app.use(express.json());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use("/contacts", contactRouter);

export default app;
