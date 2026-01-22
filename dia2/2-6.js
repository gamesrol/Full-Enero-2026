var prompt = require('prompt-sync')();

function circleArea(radius) {
    return Math.PI * radius * radius;
}

var radius = parseFloat(prompt("Enter the radius of the circle: "));
console.log(`The area of the circle is: ${circleArea(radius)}`);