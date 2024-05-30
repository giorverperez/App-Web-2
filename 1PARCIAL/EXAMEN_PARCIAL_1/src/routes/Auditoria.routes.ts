import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Obtener todas las auditorías
router.get("/", async (req, res) => {
  try {
    const auditorias = await prisma.auditoria.findMany({
      where: { estado: "Activo" },
    });
    res.json(auditorias);
  } catch (error) {
    res.json({ error });
  }
});

// Obtener una auditoría por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const auditoria = await prisma.auditoria.findUnique({
      where: { id: Number(id) },
    });
    res.json(auditoria);
  } catch (error) {
    res.json({ error });
  }
});

// Crear una nueva auditoría
router.post("/", async (req, res) => {
  const { entidad, detalle, fecha, id_auditado, estado = "Activo" } = req.body;
  try {
    const auditoriaCreada = await prisma.auditoria.create({
      data: {
        entidad,
        detalle,
        fecha,
        id_auditado,
        estado,
      },
    });
    res.json(auditoriaCreada);
  } catch (error) {
    res.json({ error });
  }
});

// Actualizar una auditoría por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { entidad, detalle, fecha, id_auditado, estado } = req.body;
  try {
    const auditoriaActualizada = await prisma.auditoria.update({
      where: { id: Number(id) },
      data: {
        entidad,
        detalle,
        fecha,
        id_auditado,
        estado,
      },
    });
    res.json(auditoriaActualizada);
  } catch (error) {
    res.json({ error });
  }
});

// Eliminar una auditoría por ID (marcar como eliminado)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.auditoria.update({
      where: { id: Number(id) },
      data: {
        estado: "Eliminado",
      },
    });
    res.json("Auditoría marcada como eliminada");
  } catch (error) {
    res.json({ error });
  }
});

export default router;