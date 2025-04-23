require('dotenv').config();
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

// Middlewares esenciales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', apiRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});