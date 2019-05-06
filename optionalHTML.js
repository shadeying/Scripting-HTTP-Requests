var https = require('https');

function getAndPrintHTML (options) {

  var info = '';

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){
      info += data;
    });

    response.on('end', function(){
      console.log(info);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
