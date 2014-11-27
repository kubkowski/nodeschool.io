var split = require('split');
var through = require ('through');
var tr = through(write);
var count = 1;
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

function write (buf) {
  if (count % 2 === 0) {
    this.queue(buf.toString().toUpperCase() + '\n');
  } else {
    this.queue(buf.toString().toLowerCase() + '\n');
  }
  count += 1;
}

