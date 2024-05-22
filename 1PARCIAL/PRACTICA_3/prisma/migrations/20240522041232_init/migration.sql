-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'activo';

-- AlterTable
ALTER TABLE "Plato" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'activo';

-- AlterTable
ALTER TABLE "Registro" ALTER COLUMN "estado" SET DEFAULT 'activo',
ALTER COLUMN "estado" SET DATA TYPE TEXT;
