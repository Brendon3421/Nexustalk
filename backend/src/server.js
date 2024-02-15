const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.WEBSOCKET_PORT || 3000 });


wss.on("connection", (ws) => {
    ws.on("error", console.error)

    ws.on("message", (data) => {
        wss.clients.forEach((client) => client.send(data.toString()))
    })

    console.log("client connected")
})