var prompt = require('prompt-sync')();

// Ejerciocio 1-1
console.log("\nEjercicio 1-1");
console.log("Gustavo Adolfo Mesa Roldan");

// Ejerciocio 1-2
console.log("\nEjercicio 1-2");
let number = 100 * 100;
console.log(number);

// Ejerciocio 1-3
console.log("\nEjercicio 1-3");
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`El numero entre 50 y 500 es ${randomNumber(50, 500)}`);

// Ejerciocio 2-1
console.log("\nEjercicio 2-1");
 for (let i = 1; i <= 5; i++) {
    let text = "";
    for (let j = 1; j <= 5; j++) {
        text += "**";
    }
    console.log(text);
}

// Ejerciocio 2-2
console.log("\nEjercicio 2-2");
 for (let i = 1; i <= 5; i++) {
    let text = "";
    for (let j = 1; j <= 5; j++) {
        if (j == 1 || j == 5 || i == 1 || i == 5) {
            text += "**";
        } else {
            text += "  ";
        }
    }
    console.log(text);
}

// Ejerciocio 2-3
console.log("\nEjercicio 2-3");
 for (let i = 1; i <= 5; i++) {
    let text = "";
    for (let j = 1; j <= 5; j++) {
        if (j<=i) {
            text += "*";
        } else {
            text += " ";
        }
    }
    console.log(text);
}

// Ejerciocio 2-4
console.log("\nEjercicio 2-4");
 for (let i = 1; i <= 5; i++) {
    let text = "";
    for (let j = 1; j <= 5; j++) {
        if (j>=i) {
            text += "*";
        } else {
            text += " ";
        }
    }
    console.log(text);
}


console.log("\nEjercicio 3-1");
var n1 = prompt('¿Dame un numero? ');
var n2 = prompt('¿Dame otro numero? ');
console.log(`La suma es ${parseInt(n1) + parseInt(n2)}`);