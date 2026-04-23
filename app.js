// app.js
// Esta es nuestra "aplicación". Por ahora, solo una función que suma.
// Más adelante será una API web real.

function sumar(a, b) {
  return a + b;
}

// Esta línea hace que la función esté disponible para otros archivos (como el test)
module.exports = { sumar };