import express, { Express } from "express";

const app: Express = express();

app.get("/", (_, res) => {
  res.status(200).send("OK!");
});

export default app;
