var fs = require("fs");

var file = process.argv[2];
var thingyToAppend = process.argv[3];
fs.appendFile(file, ", " + thingyToAppend, function (err) {
    if (err) return console.log(err);
    console.log("append success");
})