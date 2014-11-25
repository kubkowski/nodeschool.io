 var mymodule = require('./mymodule.js');

 mymodule(process.argv[2], process.argv[3], function( err, data) {
  if (err) {
    return console.error('There was an error:', err);
  };
  for ( var i = 0; i < data.length; i++ ) {
    console.log(data[i]);
  };
 });