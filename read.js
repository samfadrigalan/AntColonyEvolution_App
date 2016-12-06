var fs = require("fs");
var lineReader = require('line-reader');

var arr = [];
// read all lines:
lineReader.eachLine('sample_output.txt', function(line, last) {
    arr.push(JSON.parse(line));
    if (last) {
        console.log(arr);
    }
});

console.log(arr);

