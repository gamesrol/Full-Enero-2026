var prompt = require('prompt-sync')();

function rectArea(length, width) {
    return length * width;
}

var length = parseFloat(prompt("Enter the length of the rectangle: "));
var width = parseFloat(prompt("Enter the width of the rectangle: "));
console.log(`The area of the rectangle is: ${rectArea(length, width)}`);