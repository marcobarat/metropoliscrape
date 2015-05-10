var http = require('http');
var net = require('net');

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/index.html'
};

http.get(options, function(res) {
  console.log("Got response: " + res);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});