const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { addUser, getUser, getUserInGroup } =require('./user.js')

const PORT = process.env.PORT || 5000
const router = require('./router')
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('new connection')

    socket.on('join', ({ name, group }, callback) => {
        console.log(name, group)
        const error = true;

        if (error) {
            callback({ error: 'error' })
        }
    });

    socket.on('disconnect', () => {
        console.log('user left')
    })
})

app.use(router);
server.listen(PORT, () => console.log(`server node-js is running in PORT : ${PORT}`));



