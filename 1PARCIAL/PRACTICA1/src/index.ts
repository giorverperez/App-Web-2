interface RegistroCalorias {
    id: number;
    fechaHora: Date;
    caloriasConsumidas: number;
    idPlato: number;
    cantidadConsumida: number;
}

interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    genero: string;
    peso: number;
    altura: number;
    metaCaloriasDiarias: number;
    nivelActividad: string;
}

interface Ingrediente {
    id: number;
    nombre: string;
    caloriasPorPorcion: number;
    porcionEstandar: string;
    tipo: string;
}

const registros: RegistroCalorias[] = [
    {
        id: 1,
        fechaHora: new Date(),
        caloriasConsumidas: 500,
        idPlato: 1,
        cantidadConsumida: 1
    },
    {
        id: 2,
        fechaHora: new Date(),
        caloriasConsumidas: 300,
        idPlato: 2,
        cantidadConsumida: 0.5
    },
    // Add more objects as needed
];

const usuarios: Usuario[] = [
    {
        id: 1,
        nombre: "John Doe",
        edad: 30,
        genero: "Male",
        peso: 70,
        altura: 170,
        metaCaloriasDiarias: 2000,
        nivelActividad: "Moderate"
    },
    {
        id: 2,
        nombre: "Jane Smith",
        edad: 25,
        genero: "Female",
        peso: 60,
        altura: 160,
        metaCaloriasDiarias: 1800,
        nivelActividad: "Light"
    },
    // Add more objects as needed
];

const ingredientes: Ingrediente[] = [
    {
        id: 1,
        nombre: "Chicken Breast",
        caloriasPorPorcion: 150,
        porcionEstandar: "100g",
        tipo: "Meat"
    },
    {
        id: 2,
        nombre: "Broccoli",
        caloriasPorPorcion: 55,
        porcionEstandar: "100g",
        tipo: "Vegetable"
    },
    // Add more objects as needed
];
/*
// Using forEach
console.log("Using forEach:");
console.log("Registros:");
registros.forEach((registro) => {
    console.log(registro);
});
console.log("Usuarios:");
usuarios.forEach((usuario) => {
    console.log(usuario);
});
console.log("Ingredientes:");
ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
});

// Using for...in
console.log("Using for...in:");
console.log("Registros:");
for (const index in registros) {
    console.log(registros[index]);
}
console.log("Usuarios:");
for (const index in usuarios) {
    console.log(usuarios[index]);
}
console.log("Ingredientes:");
for (const index in ingredientes) {
    console.log(ingredientes[index]);
}

// Using for...of
console.log("Using for...of:");
console.log("Registros:");
for (const registro of registros) {
    console.log(registro);
}
console.log("Usuarios:");
for (const usuario of usuarios) {
    console.log(usuario);
}
console.log("Ingredientes:");
for (const ingrediente of ingredientes) {
    console.log(ingrediente);
}


function findElementById(arr: any[], id: number, callback: (element: any) => void) {
    const foundElement = arr.find((element) => element.id === id);
    callback(foundElement);
}

console.log("Using callback:");
findElementById(registros, 1, (element) => {
    console.log("Registro:");
    console.log(element);
});

findElementById(usuarios, 2, (element) => {
    console.log("Usuario:");
    console.log(element);
});

findElementById(ingredientes, 1, (element) => {
    console.log("Ingrediente:");
    console.log(element);
});

// Fetch with Promises
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
*/