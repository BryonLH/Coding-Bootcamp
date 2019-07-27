function getNegative(num) {
    var num = Number(str);
    if(!isNaN(num)) {
        if(num > 0) {
            return num * -1;
        } else {
            return num;
        }
    } else {
        throw new Error("Is not a number!");
    }
}

console.log(getNegative).processArgv