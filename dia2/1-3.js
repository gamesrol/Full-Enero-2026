var prompt = require('prompt-sync')();

function getTableOf(number) {
    console.log("Table of " + number + ":");
    for (var i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

var num = parseInt(prompt("Enter a number to get its multiplication table: "));
getTableOf(num);