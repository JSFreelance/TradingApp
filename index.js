//Server config and run
var express = require('express');
var server = express();

server.use('/', express.static(__dirname + '/public'));
server.listen(8080, function () {
    console.log('Server running at:8080');
});