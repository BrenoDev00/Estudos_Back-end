import http from "node:http";

const server = http.createServer();

server.addListener("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write("Olá mundo!");
  response.end();
});

server.listen(8000);
