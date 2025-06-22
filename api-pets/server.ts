import "reflect-metadata";
import { AppDataSource } from "./src/config/data-source.js";
import app from "./src/app.js";

const PORTA: number = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado.");

    app.listen(PORTA, () => {
      console.log(`Servidor executando em http://localhost:${PORTA}`);
    });
  })
  .catch((error) =>
    console.log("Não foi possível conectar ao banco de dados: ", error)
  );
