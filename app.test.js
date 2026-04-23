// app.test.js
// Importamos la función que queremos probar
const { sumar } = require('./app');

// "describe" agrupa tests relacionados bajo un nombre
describe('Función sumar', () => {

  // Cada "test" verifica una cosa específica
  test('debe sumar 2 + 3 y dar 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('debe sumar números negativos correctamente', () => {
    expect(sumar(-1, -1)).toBe(-2);
  });

});