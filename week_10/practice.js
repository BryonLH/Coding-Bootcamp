// var item1 = Number(process.argv[2]);
// var item2 = Number(process.argv[3]);

// // if (item1 === item2) {
// //     console.log("these are the same!");
// // } else {
// //     console.log("These are not the same!!")
// // }

// console.log(item1 % 7 === 0 && item2 % 7 === 0);

// This will create a file
var fs = require("fs");

// fs.writeFile("litfam.txt", "It's litfam🔥🔥🔥🔥🔥!", function(err) {
// fs.writeFile("movies.txt", "Frozen, Die Hard, Star Wars", function(err) {
//     if (err) return console.log(err);
//     console.log("file wrie success");
// });

// This will read a file
fs.readFile("./movies.txt", "utf8", function(err, data) {
    if(err) return
    console.log(data);
});