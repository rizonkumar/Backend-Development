const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (clientData) => {
    console.log("Data received from client", clientData);
  });
  socket.write("received on server thank you");
});

server.listen(8080, () => {
  console.log("new server up on port 8080");
});
