import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    //insertar registros
    async function insertData() {
        const platoRecords = await prisma.plato.createMany({
            data: [
                {
                    nombre: 'guineo',
                },
                {
                    nombre: 'manzana',
                },
                {
                    nombre: 'fresa',
                },
            ],
        });
        console.log({ platoRecords });

        const pacienteRecords = await prisma.paciente.createMany({
            data: [
                {
                    nombre: 'Giorver',
                    identificacion: '12345678',
                },
                {
                    nombre: 'Romulo',
                    identificacion: '87654321',
                },
                {
                    nombre: 'Guadamud',
                    identificacion: '11223344',
                },
            ],
        });
        console.log({ pacienteRecords });

        const registroRecords = await prisma.registro.createMany({
            data: [
                {
                    fecha: "2021-10-10",
                    hora: "2021-10-10T12:00:00",
                    caloriasConsumidas: 500,
                    numeroPorciones: 2,
                    platoId: 1,
                    pacienteId: 1,
                    estado : true,
                },
                {
                    fecha: "2021-10-11",
                    hora: "2021-10-11T12:00:00",
                    caloriasConsumidas: 600,
                    numeroPorciones: 3,
                    platoId: 2,
                    pacienteId: 2,
                    estado : true,
                },
                {
                    fecha: "2021-10-12",
                    hora: "2021-10-12T12:00:00",
                    caloriasConsumidas: 700,
                    numeroPorciones: 4,
                    platoId: 3,
                    pacienteId: 3,
                    estado : false,

                },
            ],
        });
        console.log({ registroRecords });
    }

    await insertData();
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

//aqui se va a eliminar la funcion 
async function eliminar(id: number) {
    const registro = await prisma.registro.findUnique({
        where: { id: id },
    });

    if (registro) {
        await prisma.registro.update({
            where: { id: id },
            data: { estado: false },
        });
    } else {
        console.log(`Registro con id ${id} no encontrado`);
    }
}

eliminar(1)
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

//aqui se va a recuperar la funcion 
async function recuperar(id: number) {
    const registro = await prisma.registro.findUnique({
        where: { id: id },
    });

    if (registro) {
        await prisma.registro.update({
            where: { id: id },
            data: { estado: true },
        });
    } else {
        console.log(`Registro con id ${id} no encontrado`);
    }
}   

recuperar(1)
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
