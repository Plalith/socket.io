const path = require('path');
const http =require('http');
const express = require('express');
const socketIO = require('socket.io');
var generatemessage = require('./utilits/message');
var publicpath = path.join (__dirname, '../frontend');
var app = express();
// app.use(express.static(publicpath));

// var server = http.createServer(app);
// var io = socketIO(server);

// io.on('connection' ,(socket)=>{
//     console.log("new user connected");
//     socket.emit('dummydata', generatemessage('admin', 'Hia you are connected to our server'));
//     socket.broadcast.emit('dummydata', generatemessage('admin', 'Hey !! someone connected'));

//     socket.on('createmail', (data , ack)=>{
//         console.log(data);
//         socket.broadcast.emit('recpit', generatemessage(data.from ,data.text , data.time));
//         ack(generatemessage(data.from ,data.text , data.time));
//     });

//     socket.on('disconnect', ()=>{
//         console.log("client disconnected from server");
//     })
// });




app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.header('idd') == '1')
    { 
        console.log(req.header('idd'));
        next();
    }
    else {
        console.log(req.body);
        return res.status(501).send("http intersecpetor failed ");
    }
    // next();
})



app.get('/insert',(req,res)=>{
    res.send({status:'Hi You reached server'});
})

const port = process.env.PORT || 3000 ;
app.listen(port, ()=>{
    console.log('app running on localhost' + port);
})