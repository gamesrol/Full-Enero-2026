var prompt = require('prompt-sync')();

function isEven(num) {
    if(num % 2 === 0) {
        return "It is even";
    } else {
        return "It is odd";
    }
}

var inputNumber = parseInt(prompt("Enter a number: "));
console.log(isEven(inputNumber));
