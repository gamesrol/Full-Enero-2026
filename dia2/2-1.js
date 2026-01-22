var prompt = require('prompt-sync')();

function containsS(str) {
    return str.includes('s') || str.includes('S');
}

var inputString = prompt("Enter a string: ");
console.log(containsS(inputString));