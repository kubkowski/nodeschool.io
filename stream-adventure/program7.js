var http = require('http');
var through = require('through');
var tr = through(write);
var port = process.argv[2];

var server = http.createServer( function ( request, response ) {
  if (request.method === 'POST') {
    request.pipe(tr).pipe(response);
    response.end();
  }
});
server.listen(port);

function write (buffer) {
  this.queue(buffer.toString().toUpperCase());
}