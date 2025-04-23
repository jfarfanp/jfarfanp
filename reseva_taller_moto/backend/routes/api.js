const express = require('express');
const router = express.Router();

// Ruta GET de ejemplo CORRECTA
router.get('/servicios', (req, res) => {  // ✅ Correcto: usa función de flecha
  res.json([
    { id: 1, nombre: "Mantenimiento Básico" },
    { id: 2, nombre: "Reparación de Frenos" }
  ]);
});

// Ruta POST de ejemplo
router.post('/reservas', (req, res) => {
  const reserva = req.body;
  // Aquí iría la lógica para guardar en BD
  res.status(201).json({ success: true, data: reserva });
});

module.exports = router;