//Server config and run
var express = require('express');
var server = express();
var port = 8080
server.use('/', express.static(__dirname + '/public'));
server.listen(port, function () {
    console.log('Server running at:8080');
});
