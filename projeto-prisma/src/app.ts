import express, { Express, Request, Response } from "express";
import contactRouter from "./routes/contact-routes";

export const app: Express = express();

app.use("/contacts", contactRouter);

export default app;
