var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];
var server = net.createServer( function ( socket ) {
  var date = new Date();
  date.getTime();
  socket.end(strftime('%F %R', date));
});
server.listen(port);