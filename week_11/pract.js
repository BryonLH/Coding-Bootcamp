var suh = function () {
    console.log('suh');
}
var caller = function (someFunc) {
    someFunc();
}
// call initial log function using caller

caller(suh);

// call anonymous function - function () {} - with caller. Can do whatever you want

caller(function() {
    console.log("breh");
})