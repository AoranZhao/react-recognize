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

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
let Redis_Password = 'Gelenk0408';


let redis = () => {
    return ioRedis({
        port: 9851,
        host: 'localhost',
	password: Redis_Password,
        retryStrategy: function (times) {
            return null; // no retry
        }
    })
}
let io_redis = () => {
    return socketIORedis({
	pubClient: rds.createClient(9851, 'localhost', { auth_pass: Redis_Password }),
	subClient: rds.createClient(9851, 'localhost', { auth_pass: Redis_Password })
    })
}
let emitter = () => {
    return socketIOEmitter(rds.createClient(9851, 'localhost', { auth_pass: Redis_Password }))
}
let emitter_io = emitter(),
    io_Redis = redis();
const EXPIRE_TIME = 60 * 60 * 24;

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
    let uuid = req.body.uuid;
    console.log('uuid:', uuid);
    console.log('req.body:', req.body);
    var data = {
        output: req.body.output,
        script_dur: req.body.script_dur,
        status: req.body.status,
        length: req.body.length
    }
    io_Redis.get(uuid, (err, result) => {
        if(!err && result) {
	    console.log(result);
            emitter_io.to(result).emit('message', data);
            res.status(200).send('ok');
        }
    })
    // emitter_io.to(socket_id).emit('message', data);
    // res.status(200).send('ok');
})

app.get(/\/[0-9a-zA-Z\/]*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
})

server.listen(2979, () => {
    console.log('listening on port 2979.....');
})

io.on('connection', (socket) => {
    console.log('connection:', socket.id);
    socket.on('initial', (data) => {
        console.log('data:', data);
        let uuid = data.uuid,
            socket_id = data.socket_id;
        // set socket id in redis
        io_Redis.set(uuid, socket_id, 'ex', EXPIRE_TIME);
    })
})
