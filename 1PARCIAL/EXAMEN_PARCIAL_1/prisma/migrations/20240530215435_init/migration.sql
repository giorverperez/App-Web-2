-- CreateTable
CREATE TABLE "Auditoria" (
    "id" SERIAL NOT NULL,
    "entidad" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "id_auditado" INTEGER NOT NULL,

    CONSTRAINT "Auditoria_pkey" PRIMARY KEY ("id")
);
