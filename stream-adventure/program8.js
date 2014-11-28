var request = require('request');
var server = 'http://localhost:8000';
var r = request.post(server);
process.stdin.pipe(r).pipe(process.stdout);
