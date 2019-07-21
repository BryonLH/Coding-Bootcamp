// Best Things Ever Activity

var fs = require("fs");

// This will read a file
fs.readFile("./best_things_ever.txt", "utf8", function(err, data) {
    if(err) return console.log(err);
    var items = data.split(",");
    // console.log(items.trim());
    items.forEach(function(item) {
        console.log(item.trimLeft());
    });
});