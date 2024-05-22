import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Obtener todos los pacientes
router.get("/", async (req, res) => {
  try {
    const pacientes = await prisma.paciente.findMany();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los pacientes" });
  }
});

// Obtener un paciente por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await prisma.paciente.findUnique({
      where: { id: Number(id) },
    });
    if (!paciente) {
      res.status(404).json({ error: "Paciente no encontrado" });
    } else {
      res.json(paciente);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el paciente" });
  }
});

// Crear un nuevo paciente
router.post("/", async (req, res) => {
  const { nombre, identificacion } = req.body;
  try {
    const pacienteCreado = await prisma.paciente.create({
      data: {
        nombre,
        identificacion,
      },
    });
    res.status(201).json(pacienteCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el paciente" });
  }
});

// Actualizar un paciente por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, identificacion } = req.body;
  try {
    const pacienteActualizado = await prisma.paciente.update({
      where: { id: Number(id) },
      data: {
        nombre,
        identificacion,
      },
    });
    res.json(pacienteActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el paciente" });
  }
});

// Eliminar un paciente por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.paciente.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Paciente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el paciente" });
  }
});

export default router;