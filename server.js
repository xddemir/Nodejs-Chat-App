const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.send("Hello Dogukan");
});

const server = app.listen(8080, () => {
  console.log("Listening on 8080:");
});

const io = require("./socket").init(server);

let list = []

io.on("connection", (socket) => {
  console.log("User:" + " Connected..");

  io.emit("chat message", "Server: New User Joined!");

  socket.on("disconnect", () => {
    console.log("User:" + " disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log(msg)
    io.emit("chat message", msg);
  });

});

