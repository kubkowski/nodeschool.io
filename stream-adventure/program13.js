var combine = require('stream-combiner');
var split = require('split');
var zlib = require('zlib');
var through = require('through');
var current;

module.exports = function() {
  return combine(
    split(),
    through(groupBooks, writeGenre),
    zlib.createGzip()
  );
}


function groupBooks(buf) {
  if (buf.length > 0) {
    var o = JSON.parse(buf.toString());
    if (o.type === 'genre') {
      if (current) {
        this.queue(JSON.stringify(current) + '\n');
      }
      current = { name: o.name, books: [] };
    } else if (o.type === 'book') {
      current.books.push(o.name);
    }
  }
}

function writeGenre() {
  if (current) {
    this.queue(JSON.stringify(current) + '\n');
  }
  this.queue(null);
}
