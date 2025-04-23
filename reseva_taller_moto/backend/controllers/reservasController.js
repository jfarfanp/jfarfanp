const db = require('../data/database');

exports.crearReserva = (req, res) => {
  try {
    const nuevaReserva = {
      id: Date.now(),
      ...req.body,
      fecha: new Date().toISOString()
    };
    
    db.reservas.push(nuevaReserva);
    res.status(201).json({
      success: true,
      data: nuevaReserva
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.obtenerReservas = (req, res) => {
  res.json({
    success: true,
    data: db.reservas
  });
};