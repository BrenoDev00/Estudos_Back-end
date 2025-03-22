import express from "express"; // instancia a principal função do pacote express
import Joi from "joi";
import { drivers, generateTeamsArray } from "./data.js";
import { randomUUID } from "node:crypto";

const app = express();

// .json() é um middleware para lidar com json
app.use(express.json());

const baseAPIroute = "/api/v1";

app.get(baseAPIroute + "/teams", (req, res) => {
  const teams = generateTeamsArray();

  res.status(200).send(teams);
});

app.get(baseAPIroute + "/teams/standings/:position", (req, res) => {
  const teams = generateTeamsArray();

  const teamSchema = Joi.number().min(1).max(teams.length);

  const { position } = req.params;

  const { error } = teamSchema.validate(position);

  if (error) return res.status(400).send("Informe uma posição válida.");

  const selectedTeam = teams[position - 1];

  res.status(200).send(selectedTeam);
});

// o get é usado para obter o resultado de um endpoint
app.get(baseAPIroute + "/drivers", (req, res) => {
  res.status(200).send(drivers);
});

// ":position" é a sintaxe usada para parâmetros de rota
app.get(baseAPIroute + "/drivers/standings/:position", (req, res) => {
  const positionSchema = Joi.number().min(1).max(drivers.length);

  const { position } = req.params;

  const { error } = positionSchema.validate(position);

  if (error) return res.status(400).send("Informe uma posição válida.");

  const selectedDriver = drivers[position - 1];

  res.status(200).send(selectedDriver);
});

app.get(baseAPIroute + "/drivers/:id", (req, res) => {
  const { id } = req.params;

  const selectedDriver = drivers.find((driver) => driver.id === id);

  if (!selectedDriver) return res.status(404).send("Piloto não encontrado.");

  res.status(200).send(selectedDriver);
});

app.post(baseAPIroute + "/drivers", (req, res) => {
  const driverSchema = Joi.object({
    name: Joi.string().min(3).max(64).required(),
    team: Joi.string().min(3).max(64).required(),
    points: Joi.number().min(0).max(1000).default(0),
  });

  const { error } = driverSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .send("Não foi possível cadastrar o piloto, tente novamente.");
  }

  const newDriver = { ...req.body, id: randomUUID() };

  drivers.push(newDriver);

  drivers.sort((b, a) => {
    if (a.points > b.points) return 1;

    if (b.points > a.points) return -1;

    return 0;
  });

  res.status(201).send("Piloto criado com sucesso!");

  console.log(newDriver);
});

app.put(baseAPIroute + "/drivers/:id", (req, res) => {
  const updateDriverSchema = Joi.object({
    name: Joi.string().min(3).max(64),
    team: Joi.string().min(3).max(64),
    points: Joi.number().min(0).max(1000),
  }).min(1);

  const { error } = updateDriverSchema.validate(res.body);

  if (error) return res.status(400).send("Insira informações válidas.");

  const { id } = req.params;

  const selectedDriver = drivers.find((driver) => driver.id === id);

  if (!selectedDriver) return res.status(404).send("Piloto não encontrado.");

  for (const key in selectedDriver) {
    if (req.body[key]) {
      selectedDriver[key] = req.body[key];
    }
  }

  drivers.sort((b, a) => {
    if (a.points > b.points) return 1;

    if (b.points > a.points) return -1;

    return 0;
  });

  res.status(200).send("Piloto editado com sucesso!");

  console.log(selectedDriver);
});

app.delete(baseAPIroute + "/drivers/:id", (req, res) => {
  const { id } = req.params;

  const selectedDriver = drivers.find((driver) => driver.id == id);

  if (!selectedDriver) return res.status(404).send("Piloto não encontrado.");

  const selectedDriverIndex = drivers.indexOf(selectedDriver);

  drivers.splice(selectedDriverIndex, 1);

  drivers.sort((b, a) => {
    if (a.points > b.points) return 1;

    if (b.points > a.points) return -1;

    return 0;
  });

  res.status(200).send("Piloto excluído com sucesso!");

  console.log(selectedDriver);
});

const port = 3001;

app.listen(port, () => console.log("API rodando na porta 3001"));
