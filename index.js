const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlwares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlwares);
server.use(router);

server.listen(port);
