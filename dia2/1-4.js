var prompt = require('prompt-sync')();

function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

function despedir(nombre) {
    console.log(`Adiós, ${nombre}!`);
}

function procesarEntradaUsuario(callback) {
    var name = prompt('¿Cual es tu nombre? ');
    callback(name);
}

procesarEntradaUsuario(saludar);
procesarEntradaUsuario(despedir);