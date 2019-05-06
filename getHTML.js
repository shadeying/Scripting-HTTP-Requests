var https = require('https');

function getHTML (options, callback) {

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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);