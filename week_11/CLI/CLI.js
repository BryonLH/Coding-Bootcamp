
var search = process.argv[2];
var term = process.argv.slice(3).join(' ');
var TV = require('./TV');


if (search === 'actor') {
    //search actor
    var newTV = new TV(search, term);
    newTV.findActor();
} else if (search ==='show') {
    //search show
    var newTV = new TV(search, term);
    newTV.findShow();
} else {
    console.log(`${search} is not a valid entry`);
}