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
var http = require('http');

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

app.get('/api/name/:name', function (req, res) {
    res.json({"name": req.params.name});
});
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

app.get('/api/backendTest/:id', function (req, res) {
    http.get({
        hostname: 'localhost',
        port: 3001,
        path: '/api/generation/' + req.params.id,
        agent: false  // create a new agent just for this one request
    }, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));

        var bodyChunks = [];
        console.log(response);
        response.on('data', function(chunk) {
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);
            console.log('BODY: ' + body);
            res.json(JSON.parse(body));
            // ...and/or process the entire body here.
        });
        //res.send(response);
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});
