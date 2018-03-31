const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'admin',
        text: 'Welecome to the chat',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined the chat',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {        
        socket.broadcast.emit('newMessage', {
                from: message.from,
                text: message.text,
                createAt: new Date().getTime()
            });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

//new message from text created at

server.listen(port, () => console.log(`Started on Port ${port}`));

