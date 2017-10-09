var http = require('http');
var express = require('express');
var app = express();
var descriptions = require('./levelup-descriptions.js')

app.get('/', function(req, res) {
    descriptions.get(descriptions.Classes.BARBARIAN, 2, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.end(data);
    });
});

app.listen(8080, function (req, res) {

});
