import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import ioRedis from 'ioredis';
import socketIOEmitter from 'socket.io-emitter';
import socketIORedis from 'socket.io-redis';
import rds from 'redis';

import apiFunc from './api';

let app = express();
let server = http.createServer(app);
// let io = socketIO(server);
// const PORT = process.env.PORT || 2979;
const PORT = 2991;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'Gelenk0408',
    REDIS_PORT = process.env.REDIS_PORT || 9851,
    REDIS_HOST = process.env.REDIS_HOST || 'localhost';

const EXPIRE_TIME = 60 * 60 * 24;

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use('/icon', express.static(path.join(__dirname, '../../client')));
app.use(bodyParser.json({
    type: 'application/json'
}))
app.use(bodyParser.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: true
}))
// app.use(cors())

// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-App-Key, X-Account, X-Auth-Token, X-Token, Verified-Token')
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
//     next()
// })

app.post('/api/sendemail', (req, res) => {
    apiFunc.sendEmail(req, res);
})

app.get(/\/[0-9a-zA-Z\/]*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}.....`);
})
