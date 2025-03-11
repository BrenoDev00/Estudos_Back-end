import express from "express"; // instancia a principal função do pacote express
import { drivers } from "./data.js";

const app = express();

const baseAPIroute = "/api/v1";

app.get(baseAPIroute + "/drivers", (req, res) => {
  res.status(200).send(drivers);
}); // o get é usado para obter o resultado de um endpoint

const port = 3001;

app.listen(port, () => console.log("API rodando na porta 3001"));
