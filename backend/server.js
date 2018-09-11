const path = require('path');
const http =require('http');
const express = require('express');
const socketIO = require('socket.io');

var publicpath = path.join (__dirname, '../frontend');
var app = express();
app.use(express.static(publicpath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection' ,(socket)=>{
    console.log("new user connected");
    socket.on('disconnect', ()=>{
        console.log("client disconnected from server");
    })
})



const port = process.env.PORT || 3000 ;
server.listen(port, ()=>{
    console.log('app running on localhost' + port);
})