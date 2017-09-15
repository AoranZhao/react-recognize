'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, '../../client/dist')));

app.get('/', function (req, res) {
    res.sendFile(_path2.default.join(__dirname, '../../client', 'index.html'));
});

app.listen(2979, function () {
    console.log('listening on port 2979.....');
});