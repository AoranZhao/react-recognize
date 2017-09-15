import express from 'express';
import path from 'path';

let app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
})

app.listen(2979, () => {
    console.log('listening on port 2979.....');
})