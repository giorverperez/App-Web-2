import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 4000;
const registros = [
    { id: 1, platoId: 1, pacienteId: 1, fecha: '2024-06-01', hora: '10:00', caloriasConsumidas: 500, numeroPorciones: 2, estado: 'activo' },
    { id: 2, platoId: 2, pacienteId: 2, fecha: '2024-06-02', hora: '11:00', caloriasConsumidas: 750, numeroPorciones: 3, estado: 'inactivo' }
  ];
  
  app.get('/obtener-registro/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const registro = registros.find(registro => registro.id === id);
    if (registro) {
      res.json(registro);
    } else {
      res.status(404).json({ message: 'Registro no encontrado' });
    }
  });

app.get('/obtener-gasto-segundo-servicio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`http://localhost:3000/obtener-gasto/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener gasto del segundo servicio:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en puerto ${PORT}`);
});
