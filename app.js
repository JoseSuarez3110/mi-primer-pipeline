// app.js
const express = require('express');
const app = express();

function sumar(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola Mundo desde mi Pipeline CI/CD' });
});

app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

module.exports = { sumar };