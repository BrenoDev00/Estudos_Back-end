import express, { Express } from "express";
import contactRouter from "./routes/contact-routes";

export const app: Express = express();

app.use(express.json());

app.use("/contacts", contactRouter);

export default app;
