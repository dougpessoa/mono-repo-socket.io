import express from 'express'
import cors from 'cors';
import { Server } from 'socket.io'
import http from 'http';

const app = express()
app.use(cors());

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

const messages: any = [];

io.on('connection', (socket) => {
  console.log(`Socket conectado: ${socket.id}`)
  
  socket.on('sendMessage', data => {
    messages.push(data)

    console.log(data)

    socket.broadcast.emit('messages', messages)
  })
})


httpServer.listen(3333, () => {
  console.log('server is online')
})