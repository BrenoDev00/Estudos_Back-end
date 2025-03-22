import express from "express";
import { posts } from "../data.js";

export const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.status(200).send(posts);
});
