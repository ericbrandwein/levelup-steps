var http = require('http');
var express = require('express');
var app = express();
var descriptions = require('./levelup-descriptions.js');
var paths = require('./paths/paths.js');

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
    var additionalInfo = req.query.additionalInfo;
    if (!additionalInfo) {
        var pathsForClass = paths.getPathsForClass(clazz.name);
        if (pathsForClass) {
            additionalInfo = pathsForClass[0];
            shouldRedirect = true;
        }
    }

    if (shouldRedirect) {
        res.redirect('/?class=' + clazz.name + '&level=' + level
            + '&additionalInfo=' + additionalInfo);
    } else {
        descriptions.get(clazz, level, additionalInfo, (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
});

app.get('/classes-with-additional-info.js', function(req, res) {
    res.sendFile(__dirname + '/classes-with-additional-info.js');
});

app.listen(8080);
