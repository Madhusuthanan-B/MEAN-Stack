const express = require('express');
const app = require('./server/index.js');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);
console.log('Node server running in port:', port);