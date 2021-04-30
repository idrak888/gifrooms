const path = require('path');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3200;

var users = [];
var clients = [];

app.use(express.static(__dirname + '/../../build'));
io.sockets.on('connection', socket => {
    socket.on('newUser', data => {
        clients.push(socket);
        users.push({name: data.name, room: data.room});
        console.log(users); 

        socket.broadcast.emit('userJoined', {
            name: data.name,
            room: data.room
        });
        io.emit('updateList', users);
    });
    socket.on('sendNewGif', data => {
        io.emit('newSentGifs', {
            roomName: data.room,
            newGif: data.newGif
        });
    });
    socket.on('disconnect', () => {
        var i = clients.indexOf(socket);

        clients.splice(i, 1);
        users.splice(i, 1);
        io.emit('updateList', users);
    });
});

server.listen(port, () => {
    console.log('Server started on port ' + port);
});