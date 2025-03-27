import express from "express";
import { posts } from "../data.js";

export const postsRouter = express.Router();

postsRouter
  .route("/")
  .get((req, res) => {
    res.status(200).send(posts);
  })
  .post((req, res) => {
    res.status(200).send("usuário criado!");
  })
  .put((req, res) => {
    res.status(200).send("usuário editado!");
  })
  .delete((req, res) => {
    res.status(200).send("usuário excluído!");
  });
