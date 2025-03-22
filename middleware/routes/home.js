import express from "express";

export const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.status(200).send("<h1>Bem vindo ao site!</h1>");
});
