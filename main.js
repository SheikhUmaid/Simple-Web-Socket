import express from "express";
import http from "http"
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app)
const io = new Server(server)



io.on('connection', (socket)=>{
    console.log("connected to somenoen", socket.id)
    socket.on("req", (mes)=>{
        console.log("message->", mes);
        io.emit('bc', mes)
    })
})



app.use(express.static("."))
app.get("/", function(req,res){
    res.sendFile("./index.html")
})

server.listen(900, ()=>console.log("listening"))