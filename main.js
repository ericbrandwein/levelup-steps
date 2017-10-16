var http = require('http');
var express = require('express');
var app = express();
var descriptions = require('./levelup-descriptions.js');

app.get('/', function(req, res) {
    var shouldRedirect = false;

    var clazz = req.query.class;
    if (clazz) {
        clazz = descriptions.getClassByName(req.query.class);
    } else {
        clazz = descriptions.Classes.BARBARIAN;
        shouldRedirect = true;
    }
    var level = req.query.level;
    if (level) {
        level = parseInt(req.query.level);
    } else {
        level = 2;
        shouldRedirect = true;
    }

    if (shouldRedirect) {
        res.redirect('/?class=' + clazz.name + '&level=' + level);
    } else {
        descriptions.get(clazz, level, req.query.additionalInfo, (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
});

app.listen(8080);
