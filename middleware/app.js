import express from "express";
import { homeRouter } from "./routes/home.js";
import { postsRouter } from "./routes/posts.js";
import helmet from "helmet";

// Middlewares são algoritmos ou trechos de código que atuam entre uma requisição e resposta HTTP.

const app = express();

// Chama os middlewares
app.use(registerRequest);
app.use(registerOnDatabase);

// O helmet é um middleware que ajuda proteger a API contra vulnerabilidades relacionadas ao cabeçalho HTTP.
app.use(helmet());

app.use("/", homeRouter);
app.use("/posts", postsRouter);

// Essa função representa um middleware
function registerRequest(req, res, next) {
  console.log("nova solicitação HTTP");
  console.log("endpoint solicitado: ", req.url);

  next();
}

// Essa função representa um middleware
function registerOnDatabase(req, res, next) {
  console.log("Acessando o banco de dados");
  console.log("Registrando transação");

  next();
}

const port = 3001;

app.listen(port, () => console.log("Servidor rodando na porta 3001"));
