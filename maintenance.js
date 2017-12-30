var fs = require('fs');
var https = require('https');
var express = require('express');

var balancerPort = 8443;
var clientsPort = 443;

var options = {
  key: fs.readFileSync('ssl.key'),
  cert: fs.readFileSync('ssl.cer'),
  requestCert: true
};


var balancerApp = express();
balancerApp.get('/*', function (req, res) {
  res.send('');
});
var balancerServer = https.createServer(options, balancerApp);
balancerServer.listen(balancerPort, function() {
  console.log("Start server on port " + balancerPort);
});


var clientsApp = express();
clientsApp.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
var clientsServer = https.createServer(options, clientsApp);
clientsServer.listen(clientsPort, function() {
  console.log("Start server on port " + clientsPort);
});
