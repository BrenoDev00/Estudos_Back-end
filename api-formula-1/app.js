import express from "express"; // instancia a principal função do pacote express
import { driversRouter } from "./routes/driver.js";
import { teamsRouter } from "./routes/team.js";

const app = express();

const baseAPIroute = "/api/v1";

// .json() é um middleware para lidar com json
app.use(express.json());

app.use(baseAPIroute + "/drivers", driversRouter);

app.use(baseAPIroute + "/teams", teamsRouter);

const port = 3001;

app.listen(port, () => console.log("API rodando na porta 3001"));
