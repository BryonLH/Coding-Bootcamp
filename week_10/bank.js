var fs = require("fs");

var command = process.argv[2];
var amount = process.argv[3];

if (command === "total") {
    fs.readFile("./bank.txt", "utf8", function(err, data) {
        if(err) return console.log(err);
        var data = data.split(",");
var total = data.reduce(function(accumulator, currentVal) {
    return Number(accumulator) + Number(currentVal)
}, 0)
        console.log(total);

        // console.log("Total = " + total);
    })
} else if (command === "deposit") {
    fs.appendFile("bank.txt", ", " + amount, function (err) {
        if (err) return console.log(err);
        console.log("deposited " + amount);
    })
} else if (command === "withdraw") {
    fs.appendFile("bank.txt", ", -" + amount, function (err) {
        if (err) return console.log(err);
        console.log("withdrawn " + amount);
    })
} else if (command === "lotto") {
    fs.appendFile("bank.txt", ", " + amount, function (err) {
        if (err) return console.log(err);
        console.log("append success");
    })
}
