var operator = process.argv[2];
var num1 = Number(process.argv[3]);
var num2 = Number(process.argv[4]);

if (operator === "add") {
    console.log(num1 + num2);
} else if (operator === "subtract") {
    console.log(num1 - num2);
} else if (operator === "multiply") {
    console.log(num1 * num2);
} else if (operator === "divide") {
    console.log(num1 / num2);
} else if (operator === "remainder") {
    console.log(num1 % num2);
} else if (operator === "exp") {
    console.log(Math.pow(num1, num2))
} else if (operator === "algebra") {
    var equation = process.argv[3];
    console.log(equation);
    var numb1 = Number(equation.substring(0, 1));
    var numb2 = Number(equation.substring(3, 4));
    var equalNum = Number(equation.substring(5, 7));
    console.log(numb1);
    console.log(numb2);
    console.log(equalNum);
    console.log((equalNum - numb2)/numb1);
}