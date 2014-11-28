var trumpet = require('trumpet');
var tm = trumpet();
var through = require('through');
var tr = through(write);
var stream = tm.select('.loud').createStream();

process.stdin.pipe(tm).pipe(process.stdout);
stream.pipe(tr).pipe(stream);

function write ( buffer ) {
    this.queue(buffer.toString().toUpperCase());
}


