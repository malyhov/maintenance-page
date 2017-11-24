var fs = require('fs'),
    https = require('https'),
    express = require('express');

var balancer_port = 8443;
var clients_port = 443;

var options = {
    key: fs.readFileSync('cedar.key'),
    cert: fs.readFileSync('cedar.cer'),
    requestCert: true
};


var balancer_app = express();
balancer_app.get('/*', function (req, res) {
    res.send('');
});
var balancer_server = https.createServer(options, balancer_app);
balancer_server.listen(balancer_port, function() {
    console.log("Start server on port " + balancer_port);
});


var clients_app = express();
clients_app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
var clients_server = https.createServer(options, clients_app);
clients_server.listen(clients_port, function() {
    console.log("Start server on port " + clients_port);
});
