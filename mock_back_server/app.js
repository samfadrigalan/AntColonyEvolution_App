/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();
app.set('port', (process.env.PORT || 3001));
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.get('/api/experiment/:id', function (req, res) {
  var arr = [];
  var i;
  for (i=0; i<1000; i++) {
    arr[i] = getRandomInt(1, 5000);
  }
  res.json(arr);
});

app.get('/api/generation/:id', function (req, res) {
  var arr = [];
  var i, max;
  max = 64000;
  for (i=0; i<64; i++) {
    arr[i] = 0;
  }
  for (i=0; i<max; i++) {
    var index = getRandomInt(0,64);
    arr[index] += 1;
  }
  for (i=0; i<64; i++) {
    arr[i] = arr[i] / max;
  }
  res.json(arr);
});
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// start server on the specified port and binding host
//app.listen(appEnv.port, '0.0.0.0', function() {
//  // print a message when the server starts listening
//  console.log("server starting on " + appEnv.url);
//});
app.listen(app.get('port'), function() {
  console.log('Find the server at: http://localhost:' + app.get('port')); // eslint-disable-line no-console
});