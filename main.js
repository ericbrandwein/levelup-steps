var http = require('http');
var express = require('express');
var app = express();
var descriptions = require('./levelup-descriptions.js');

app.get('/', function(req, res) {
    var clazz = descriptions.getClassByName(req.query.class);
    var level = parseInt(req.query.level);
    descriptions.get(clazz, level, (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

app.listen(8080);
