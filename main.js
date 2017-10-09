var http = require('http');
var express = require('express');
var app = express();
var descriptions = require('./levelup-descriptions.js')

app.get('/:className/:level', function (req, res) {
    var characterClass = descriptions.getClassByName(req.params.className);
    console.log(req.params.className);
    console.log(characterClass);
    descriptions.get(characterClass, req.params.level, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.end(data);
    });
});

app.get('/', function(req, res) {
    descriptions.get(descriptions.Classes.BARBARIAN, 2, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.end(data);
    });
});

app.listen(8080, function (req, res) {});
