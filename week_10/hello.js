var item1 = process.argv[2];
var item2 = process.argv[3];

if (item1 === item2) {
    console.log("entries are the same")
} else if (item1 != item2) {
    console.log("entries are not the same")
};

console.log(item1 === item2);
