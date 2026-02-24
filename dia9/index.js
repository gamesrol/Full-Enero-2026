const fs = require('node:fs');

// let contenido = '';

// for (let i = 1; i <= 1000000; i++) {
//   contenido += `Línea ${i}\n`;
// }

// // 3. Crear el archivo de forma asíncrona (recomendado)
// fs.writeFile('archivo.txt', contenido, (err) => {
//   if (err) throw err;
//   console.log('El archivo ha sido creado correctamente.');
// });


const readStream = fs.createReadStream('archivo.txt');

readStream.on('data', (chunk) => {
  console.log('--- NUEVO BLOQUE ---');
  console.log(chunk.toString());
});

readStream.on('end', () => {
  console.log('--- FIN DE LA LECTURA ---');
});

readStream.on('error', (err) => {
  console.error('Error al leer el archivo:', err);
});