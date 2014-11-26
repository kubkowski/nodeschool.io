var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer( function ( request, response ) {
  if (request.method != 'GET') {
    return response.end('Send me a GET request\n');
  };
  var requestData = url.parse(request.url, true);
  var query = requestData.query['iso'];
  var answer = {};
  if (requestData.pathname === '/api/parsetime') {
    answer.hour = new Date(query).getHours();
    answer.minute = new Date(query).getMinutes();
    answer.second = new Date(query).getSeconds();
  }
  if (requestData.pathname === '/api/unixtime') {
    answer.unixtime = new Date(query).getTime();
  }
  var data = JSON.stringify(answer);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  return response.end(data);
});
server.listen(port);