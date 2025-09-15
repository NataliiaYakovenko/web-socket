const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");

const PORT = process.env.PORT ?? 5000;

const httpServer = http.createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("Connected established", socket);
});

httpServer.listen(PORT, () => {
  console.log(`Server is running!`);
});
