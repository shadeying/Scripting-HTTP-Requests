var https = require('https');

module.exports = function getHTML (options, callback) {

  var info = '';

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){
      info += data;
    });

    response.on('end', function(){
      callback(info);
    });

  });

};
