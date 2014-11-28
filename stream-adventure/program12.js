var duplexer = require('duplexer');
var through = require('through');


module.exports = function ( counter ) {
  var counts = {};
  var output = through(write, end);  
  return duplexer(output, counter);

  function write( row ) {
    counts[row.country] = (counts[row.country] || 0) + 1;
  };

  function end () {
    counter.setCounts(counts);
  };
}