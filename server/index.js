const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");

const PORT = process.env.PORT ?? 5000;

const httpServer = http.createServer(app);

const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Connected established", socket);
  socket.emit("HELLO_SELF", "Hello on our service");
  socket.broadcast.emit("NEW_ANOTHER_SOCKET", "New socked was added");
  io.emit("TO_EVERYONE", "Service will reboot at 5 minut");



  socket.on("TO_SERVER", (payload) => {
    console.log(payload);
   // alert(payload);
  });


  socket.on("NEW_MESSAGE", (payload) => {
    console.log(payload);
   // alert(payload);
  });


});





httpServer.listen(PORT, () => {
  console.log(`Server is running!`);
});
