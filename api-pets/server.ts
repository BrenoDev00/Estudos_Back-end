import "reflect-metadata";
import { AppDataSource } from "./src/config/data-source.js";
import app from "./src/app.js";

const port: number = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado.");

    app.listen(port, () => {
      console.log(`Servidor executando em http://localhost:${port}`);
    });
  })
  .catch((error) =>
    console.log("Não foi possível conectar ao banco de dados: ", error)
  );
