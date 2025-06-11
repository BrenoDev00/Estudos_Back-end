import app from "./src/app.js";

const PORTA: number = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor executando em http://localhost:${PORTA}`);
});
