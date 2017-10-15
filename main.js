var http = require('http');
var express = require('express');
var app = express();
var descriptions = require('./levelup-descriptions.js');

app.get('/', function(req, res) {
    var clazz = req.query.class;
    if (clazz) {
        clazz = descriptions.getClassByName(req.query.class);
    } else {
        clazz = descriptions.Classes.BARBARIAN;
    }
    var level = req.query.level;
    if (level) {
        level = parseInt(req.query.level);
    } else {
        level = 2;
    }

    descriptions.get(clazz, level, (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

app.listen(8080);
