import http from "node:http";
import { stock } from "./stock.mjs";
import { URL } from "node:url";

const server = http.createServer();

server.addListener("request", (request, response) => {
  const urlObject = new URL(`http://${request.headers.host}${request.url}`);

  if (urlObject.pathname === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(stock));
    response.end();
    return;
  }

  if (urlObject.pathname === "/get-by-id") {
    const idParam = urlObject.searchParams.get("id");

    if (!idParam || isNaN(idParam)) {
      response.writeHead(400, { "content-type": "text/plain" });
      response.write("Informe um id numérico.");
      response.end();
      return;
    }

    const selectedObject = stock.find(
      (product) => product.id === Number(idParam)
    );

    if (!selectedObject) {
      response.writeHead(404, { "content-type": "text-plain" });
      response.write("Nenhum resultado encontrado.");
      response.end();
      return;
    }

    response.writeHead(200, { "Content-Type": "application-json" });
    response.write(JSON.stringify(selectedObject));
    response.end();
    return;
  }

  if (urlObject.pathname === "/produtos-indisponiveis") {
    const unavaliableProducts = stock.filter(
      (product) => product.amountLeft == 0
    );

    response.writeHead(200, { "Content-Type": "application-json" });
    response.write(JSON.stringify(unavaliableProducts));
    response.end();
    return;
  }
});

server.listen(8000);
