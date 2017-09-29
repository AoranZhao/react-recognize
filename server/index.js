import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import ioRedis from 'ioredis';
import socketIOEmitter from 'socket.io-emitter';
import socketIORedis from 'socket.io-redis';

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

let redis = () => {
    return ioRedis({
        port: 6379,
        host: 'localhost',
        retryStrategy: function (times) {
            return null; // no retry
        }
    })
}
let io_redis = () => {
    return socketIORedis({
        port: 6379,
        host: 'localhost'
    })
}
let emitter = () => {
    return socketIOEmitter({
        port: 6379,
        host: 'localhost'
    })
}
io.adapter(io_redis());

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(bodyParser.json({
    type: 'application/json'
}))
app.use(bodyParser.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: true
}))
app.use(cors())

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-App-Key, X-Account, X-Auth-Token, X-Token, Verified-Token')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    next()
})

app.post('/api/callback', (req, res) => {
    // body: {output: output, script_dur: end_time - script_start_time}
    console.log('callback');
    let emitter_io = emitter(),
        ioRedis = redis(),
        socket_id = req.body.socket_id;
    console.log('socket_id:', socket_id);
    console.log('req.body:', req.body);
    var data = {
        output: req.body.output,
        script_dur: req.body.script_dur,
        status: req.body.status
    }
    emitter_io.to(socket_id).emit('message', data);
    res.status(200).send('ok');
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
})

server.listen(2979, () => {
    console.log('listening on port 2979.....');
})

io.on('connection', (socket) => {
})
