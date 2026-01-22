var prompt = require('prompt-sync')();

function triangleArea(base, height) {
    return (base * height) / 2;
}

var base = parseFloat(prompt("Enter the base of the triangle: "));
var height = parseFloat(prompt("Enter the height of the triangle: "));
console.log(`The area of the triangle is: ${triangleArea(base, height)}`);