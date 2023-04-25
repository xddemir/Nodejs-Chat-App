let id = Math.floor(Math.random() * 10);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = require("socket.io-client");
const socket = client.io("http://127.0.0.1:8080/")

socket.on("chat message", receivedMsg=> {
    if(!receivedMsg.startsWith("User" + id)){
        console.log(receivedMsg)
    };
    readline.question("", msg => {
        socket.emit("chat message", "User" + id + ": " + msg)
    })
})