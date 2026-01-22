const logger = require('node-color-log');

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function multiply(...numbers) {
  return numbers.reduce((total, num) => total * num, 1);
}

console.log("Suma:", sum(1, 2, 3, 4, 5)); // Suma: 15
console.log("Multiplicación:", multiply(1, 2, 3, 4, 5)); // Multiplicación: 120


console.log("\n\n\n\n\n");

let object1 = { name: "Alice", age: 30, city: "New York" };
let object2 = {...object1};



console.log("Antes de la modificación:");
console.log("object1:", object1);
console.log("object2:", object2);

object2.age = 31;

console.log("Después de la modificación:");
console.log("object1:", object1);
console.log("object2:", object2);


console.log("\n\n\n\n\n");

let array1 = ["apple", "banana", "cherry"];
let [manzana, plátano, cereza] = array1;

console.log("Frutas:");
console.log("Manzana:", manzana);
console.log("Plátano:", plátano);
console.log("Cereza:", cereza);

console.log("\n\n\n\n\n");

let object3 = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010
};

let { title, director, year } = object3;

console.log("Película:");
console.log("Título:", title);
console.log("Director:", director);
console.log("Año:", year);


console.log("\n\n\n\n\n");

let array2 = [1, 2, 3, 4, 5];
let array3 = [6, 7, 8, 9, 10];

let combinedArray = [...array2, ...array3];

console.log("Array combinado:", combinedArray);


console.log("\n\n\n\n\n");

let object4 = { a: 1, b: 2 };
let object5 = { a: 3, d: 4 };

let combinedObject = { ...object4, ...object5 };
console.log("Objeto combinado:", combinedObject);
