// var fs = require("fs");

var nums = [];
for (var i = 2; i < process.argv.length; i++) {
    nums.push(process.argv[i])
}
nums.sort(function(a, b) {
    return a - b
})
console.log(nums)

