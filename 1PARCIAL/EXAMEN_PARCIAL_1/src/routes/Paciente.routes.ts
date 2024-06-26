import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Obtener todos los pacientes
router.get("/", async (req, res) => {
  try {
    const pacientes = await prisma.paciente.findMany({
      where: { estado: "activo" },
    });
    res.json(pacientes);
  } catch (error) {
    res.json({ error });
  }
});

// Obtener un paciente por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await prisma.paciente.findUnique({
      where: { id: Number(id) },
    });
    res.json(paciente);
  } catch (error) {
    res.json({ error });
  }
});

// Crear un nuevo paciente
router.post("/", async (req, res) => {
  const { nombre, identificacion, estado = "activo" } = req.body;
  try {
    const pacienteCreado = await prisma.paciente.create({
      data: {
        nombre,
        identificacion,
        estado,
      },
    });
    res.json(pacienteCreado);
  } catch (error) {
    res.json({ error });
  }
});

// Actualizar un paciente por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, identificacion, estado } = req.body;
  try {
    const pacienteActualizado = await prisma.paciente.update({
      where: { id: Number(id) },
      data: {
        nombre,
        identificacion,
        estado,
      },
    });
    res.json(pacienteActualizado);
  } catch (error) {
    res.json({ error });
  }
});

// Eliminar un paciente por ID (marcar como eliminado)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.paciente.update({
      where: { id: Number(id) },
      data: {
        estado: "eliminado",
      },
    });
    res.json("Paciente marcado como eliminado");
  } catch (error) {
    res.json({ error });
  }
});

export default router;