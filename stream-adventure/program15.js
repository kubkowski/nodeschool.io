var crypto = require('crypto');
var tar = require('tar');
var through = require('through');
var zlib = require('zlib');

var stream = crypto.createDecipher(process.argv[2], process.argv[3]);
var gunzip = zlib.createGunzip();
var parser = tar.Parse();

parser.on('entry', function ( e ) {
  function write ( buf ) {
    this.queue(buf.toString() + ' ' + e.path + '\n');
  }
  if (e.type === 'File') {
    var hash = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hash)
      .pipe(through(write))
      .pipe(process.stdout);
  }
});

process.stdin.pipe(stream).pipe(gunzip).pipe(parser);
