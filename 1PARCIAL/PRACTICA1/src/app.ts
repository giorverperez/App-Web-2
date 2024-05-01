import { Paciente } from "./interface/Paciente";
import  { Plato } from "./interface/Plato";
import { Registro } from "./interface/Registro"

  
  // Creando un array de objetos basado en las entidades con más atributos y más IDs
 
const pacientes: Paciente[] = [
    { id: 2, nombre: "Pedro", Identificacion: "123456789" },
    { id: 3, nombre: "Ana", Identificacion: "987654321" },
    { id: 4, nombre: "Carlos", Identificacion: "456789123" },
    { id: 5, nombre: "Maria", Identificacion: "321654987" },
];

  
const platos: Plato[] = [
    { id: 2, Nombre: "Sopa" },
    { id: 3, Nombre: "Pasta" },
    { id: 4, Nombre: "Pizza" },
    { id: 5, Nombre: "Ensalada de frutas" },
];
  
 
const registros: Registro[] = [
    { 
        id: 2, 
        Plato: { id: 2, Nombre: "Sopa" }, 
        Paciente: { id: 2, nombre: "Pedro", Identificacion: "123456789" }, 
        Fecha: new Date().toISOString(), 
        Hora: "12:00", 
        NumeroCaloriasConsumidas: 150, 
        NumeroPorciones: 1 
    },
    { 
        id: 3, 
        Plato: { id: 3, Nombre: "Pasta" }, 
        Paciente: { id: 3, nombre: "Ana", Identificacion: "987654321" }, 
        Fecha: new Date().toISOString(), 
        Hora: "13:00", 
        NumeroCaloriasConsumidas: 300, 
        NumeroPorciones: 1 
    },
    { 
        id: 4, 
        Plato: { id: 4, Nombre: "Pizza" }, 
        Paciente: { id: 4, nombre: "Carlos", Identificacion: "456789123" }, 
        Fecha: new Date().toISOString(), 
        Hora: "14:00", 
        NumeroCaloriasConsumidas: 400, 
        NumeroPorciones: 1 
    },
    { 
        id: 5, 
        Plato: { id: 5, Nombre: "Ensalada de frutas" }, 
        Paciente: { id: 5, nombre: "Maria", Identificacion: "321654987" }, 
        Fecha: new Date().toISOString(), 
        Hora: "15:00", 
        NumeroCaloriasConsumidas: 100, 
        NumeroPorciones: 1 
    }
];


  