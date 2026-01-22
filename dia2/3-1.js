var prompt = require('prompt-sync')();

function pow(num, exp) {
    return Math.pow(num, exp);
}

var inputNumber = parseInt(prompt("Enter a number: "));
var inputExp = parseInt(prompt("Enter the exponent: "));
console.log(pow(inputNumber, inputExp));