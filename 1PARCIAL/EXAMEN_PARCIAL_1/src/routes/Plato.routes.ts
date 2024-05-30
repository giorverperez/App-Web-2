import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Obtener todos los platos
router.get("/", async (req, res) => {
  try {
    const platos = await prisma.plato.findMany({
      where: { estado: "activo" },
    });
    res.json(platos);
  } catch (error) {
    res.json({ error });
  }
});

// Obtener un plato por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const plato = await prisma.plato.findUnique({
      where: { id: Number(id) },
    });
    res.json(plato);
  } catch (error) {
    res.json({ error });
  }
});

// Crear un nuevo plato
router.post("/", async (req, res) => {
  const { nombre, estado = "activo" } = req.body;
  try {
    const platoCreado = await prisma.plato.create({
      data: {
        nombre,
        estado,
      },
    });
    res.json(platoCreado);
  } catch (error) {
    res.json({ error });
  }
});

// Actualizar un plato por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, estado } = req.body;
  try {
    const platoActualizado = await prisma.plato.update({
      where: { id: Number(id) },
      data: {
        nombre,
        estado,
      },
    });
    res.json(platoActualizado);
  } catch (error) {
    res.json({ error });
  }
});

// Eliminar un plato por ID (marcar como eliminado)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.plato.update({
      where: { id: Number(id) },
      data: {
        estado: "eliminado",
      },
    });
    res.json("Plato marcado como eliminado");
  } catch (error) {
    res.json({ error });
  }
});

export default router;