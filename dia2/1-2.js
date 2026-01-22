var prompt = require('prompt-sync')();

function saludar() {
    var name = prompt('¿Cual es tu nombre? ');
    console.log(`Hola, ${name}!`);
}

saludar();