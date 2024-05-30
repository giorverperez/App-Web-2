import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Obtener todos los registros
router.get("/", async (req, res) => {
  try {
    const registros = await prisma.registro.findMany({
      where: { estado: "activo" },
    });
    res.json(registros);
  } catch (error) {
    res.json({ error });
  }
});

// Obtener un registro por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const registro = await prisma.registro.findUnique({
      where: { id: Number(id) },
    });
    res.json(registro);
  } catch (error) {
    res.json({ error });
  }
});

// Crear un nuevo registro
router.post("/", async (req, res) => {
  const { platoId, pacienteId, fecha, hora, caloriasConsumidas, numeroPorciones, estado = "activo" } = req.body;
  try {
    const registroCreado = await prisma.registro.create({
      data: {
        platoId,
        pacienteId,
        fecha,
        hora,
        caloriasConsumidas,
        numeroPorciones,
        estado,
      },
    });
    res.json(registroCreado);
  } catch (error) {
    res.json({ error });
  }
});

// Actualizar un registro por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { platoId, pacienteId, fecha, hora, caloriasConsumidas, numeroPorciones, estado } = req.body;
  try {
    const registroActualizado = await prisma.registro.update({
      where: { id: Number(id) },
      data: {
        platoId,
        pacienteId,
        fecha,
        hora,
        caloriasConsumidas,
        numeroPorciones,
        estado,
      },
    });
    res.json(registroActualizado);
  } catch (error) {
    res.json({ error });
  }
});

// Eliminar un registro por ID (marcar como eliminado)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.registro.update({
      where: { id: Number(id) },
      data: {
        estado: "eliminado",
      },
    });
    res.json("Registro marcado como eliminado");
  } catch (error) {
    res.json({ error });
  }
});

export default router;