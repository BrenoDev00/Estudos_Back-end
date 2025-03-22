import express from "express";
import { teamSchema } from "../schemas.js";
import { generateTeamsArray } from "../data.js";

export const teamsRouter = express.Router();

teamsRouter.get("/", (req, res) => {
  const teams = generateTeamsArray();

  res.status(200).send(teams);
});

teamsRouter.get("/standings/:position", (req, res) => {
  const teams = generateTeamsArray();

  const { position } = req.params;

  const { error } = teamSchema.validate(position);

  if (error) return res.status(400).send("Informe uma posição válida.");

  const selectedTeam = teams[position - 1];

  res.status(200).send(selectedTeam);
});
