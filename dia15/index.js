const bcrypt = require('bcrypt');

const password = 'cristina me pega';
const saltRounds = 10; // coste de encriptación

async function ejemplo() {
  try {
    // 🔐 Hashear contraseña
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Hash generado:', hash);

    // 🔍 Comparar contraseña con el hash
    const coincide = await bcrypt.compare(password, "$2b$10$PrcpeAjfy0K5x2MLf8zs4.IBi4QyEjjTgKYjXEEl/h43acAeVyIt.");
    console.log('¿La contraseña es correcta?', coincide);

    // ❌ Probar con contraseña incorrecta
    const coincideMal = await bcrypt.compare('password_incorrecto', hash);
    console.log('¿Contraseña incorrecta coincide?', coincideMal);

  } catch (error) {
    console.error('Error:', error);
  }
}

ejemplo();
