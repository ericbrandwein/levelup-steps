var http = require('http');
var descriptions = require('./levelup-descriptions.js')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(descriptions.get(descriptions.Classes.BARBARIAN, 2));
}).listen(8080);


