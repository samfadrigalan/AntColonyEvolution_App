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

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use('/scripts/materialize', express.static(__dirname + '/node_modules/materialize-css/dist/'));

app.use('/scripts/highcharts', express.static(__dirname + '/node_modules/highcharts/'));
app.use('/css', express.static(__dirname + '/node_modules/material-css/dist/css/'));
//

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
app.get('/api/hello', function (req, res) {
    res.send("hello worlds");
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});
