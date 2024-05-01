export { Paciente } from "./interface/Paciente";
export  { Plato } from "./interface/Plato";
export { Registro } from "./interface/Registro"

// Definiendo objetos para cada entidad
const paciente: Paciente = {
  // propiedades del objeto paciente
};

const plato: Plato = {
  // propiedades del objeto plato
};

const registro: Registro = {
  // propiedades del objeto registro
};

// Creando un array de objetos basado en las entidades con más atributos y más IDs
const pacientes: Paciente[] = [
    paciente,
    { id: 2, nombre: "Pedro", edad: 40, genero: "Masculino", direccion: "Calle 456" },
    { id: 3, nombre: "Ana", edad: 35, genero: "Femenino", direccion: "Calle 789" },
    { id: 4, nombre: "Carlos", edad: 45, genero: "Masculino", direccion: "Calle 1011" },
    { id: 5, nombre: "Maria", edad: 50, genero: "Femenino", direccion: "Calle 1213" },
  ];
  
  const platos: Plato[] = [
    plato,
    { id: 2, nombre: "Sopa", calorias: 150, ingredientes: ["Agua", "Verduras"], tipo: "Vegano" },
    { id: 3, nombre: "Pasta", calorias: 300, ingredientes: ["Pasta", "Salsa"], tipo: "Normal" },
    { id: 4, nombre: "Pizza", calorias: 400, ingredientes: ["Masa", "Tomate", "Queso"], tipo: "Normal" },
    { id: 5, nombre: "Ensalada de frutas", calorias: 100, ingredientes: ["Manzana", "Pera", "Naranja"], tipo: "Vegano" },
  ];
  
  const registros: Registro[] = [
    registro,
    { id: 2, pacienteId: 2, platoId: 2, fecha: new Date(), valor_cancelado: 17.75, metodo_pago: "Efectivo" },
    { id: 3, pacienteId: 3, platoId: 3, fecha: new Date(), valor_cancelado: 23.00, metodo_pago: "Tarjeta" },
    { id: 4, pacienteId: 4, platoId: 4, fecha: new Date(), valor_cancelado: 25.00, metodo_pago: "Efectivo" },
    { id: 5, pacienteId: 5, platoId: 5, fecha: new Date(), valor_cancelado: 30.00, metodo_pago: "Tarjeta" },
  ];