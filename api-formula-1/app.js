import express from "express"; // instancia a principal função do pacote express
import { drivers } from "./data.js";
import { randomUUID } from "node:crypto";

const app = express();

// .json() é um middleware para lidar com json
app.use(express.json());

const baseAPIroute = "/api/v1";

// o get é usado para obter o resultado de um endpoint
app.get(baseAPIroute + "/drivers", (req, res) => {
  res.status(200).send(drivers);
});

// ":position" é a sintaxe usada para parâmetros de rota
app.get(baseAPIroute + "/drivers/standings/:position", (req, res) => {
  const position = req.params;

  const selectedDriver = drivers[position - 1];

  res.status(200).send(selectedDriver);
});

app.get(baseAPIroute + "/drivers/:id", (req, res) => {
  const { id } = req.params;

  const selectedDriver = drivers.find((driver) => driver.id === id);

  res.status(200).send(selectedDriver);
});

app.post(baseAPIroute + "/drivers", (req, res) => {
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

const port = 3001;

app.listen(port, () => console.log("API rodando na porta 3001"));
