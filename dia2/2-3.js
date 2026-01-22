var prompt = require('prompt-sync')();

function pow(num) {
    return Math.pow(num, num);
}

var inputNumber = parseInt(prompt("Enter a number: "));
console.log(pow(inputNumber));