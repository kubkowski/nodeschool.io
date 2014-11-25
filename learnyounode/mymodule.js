module.exports = function ( directory, extension, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(directory, function ( err, data ) {
    if (err) {
      return callback(err);
    };
    var newdata = [];
    for ( var i = 0; i < data.length; i++ ) {
      if (path.extname(data[i]) === '.' + extension) {
        newdata.push(data[i]);
      }
    }
    callback(null, newdata);
  });

};