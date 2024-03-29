import http from "http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && "/users") res.end("Hello World !\n");
});

server.listen(3333);
