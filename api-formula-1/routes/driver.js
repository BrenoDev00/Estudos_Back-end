import express from "express";
import {
  positionSchema,
  driverSchema,
  updateDriverSchema,
} from "../schemas.js";
import { drivers } from "../data.js";
import { randomUUID } from "node:crypto";

export const driversRouter = express.Router();

// o get é usado para obter o resultado de um endpoint
driversRouter.get("/", (req, res) => {
  res.status(200).send(drivers);
});

// ":position" é a sintaxe usada para parâmetros de rota
driversRouter.get("/standings/:position", (req, res) => {
  const { position } = req.params;

  const { error } = positionSchema.validate(position);

  if (error) return res.status(400).send("Informe uma posição válida.");

  const selectedDriver = drivers[position - 1];

  res.status(200).send(selectedDriver);
});

driversRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  const selectedDriver = drivers.find((driver) => driver.id === id);

  if (!selectedDriver) return res.status(404).send("Piloto não encontrado.");

  res.status(200).send(selectedDriver);
});

driversRouter.post("/", (req, res) => {
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

driversRouter.put("/:id", (req, res) => {
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

driversRouter.delete("/:id", (req, res) => {
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

