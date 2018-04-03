const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const {generateMessage, generateLocationMessage} = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined the chat')) 

    socket.on('createMessage', (message, callback) => {        
        io.emit('newMessage', generateMessage(message.from, message.text))
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

//new message from text created at

server.listen(port, () => console.log(`Started on Port ${port}`));

module.exports = {
    io
};