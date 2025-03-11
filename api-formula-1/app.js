import express from "express"; // instancia a principal função do pacote express
import { drivers } from "./data.js";

const app = express();

const baseAPIroute = "/api/v1";

// o get é usado para obter o resultado de um endpoint
app.get(baseAPIroute + "/drivers", (req, res) => {
  res.status(200).send(drivers);
});

// ":position" é a sintaxe usada para parâmetros de rota
app.get(baseAPIroute + "/drivers/standings/:position", (req, res) => {
  const position = req.params.position;
  const selectedDriver = drivers[position - 1];

  res.status(200).send(selectedDriver);
});

const port = 3001;

app.listen(port, () => console.log("API rodando na porta 3001"));
