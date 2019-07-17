var bands = require("./band");

// console.log(bandDetails.classic);

for (var genre in bands) {
    console.log("A " + genre + " band is " + bands[genre]);
}