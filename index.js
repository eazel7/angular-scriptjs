var express = require('express');
var app = module.exports = express();

app.use(express.static(require('path').join(__dirname, 'static')));

app.listen(process.env.PORT, process.env.IP);