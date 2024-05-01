import { Paciente } from "./interface/Paciente";
import  { Plato } from "./interface/Plato";
import { Registro } from "./interface/Registro"

  
  // 3. Creando un array de objetos basado en las entidades con más atributos y más IDs
 
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

// 4. Crear una función que reciba el arreglo del punto anterior y un ID (u otro atributo que
//no se repita) y proceder a eliminar el elemento del arreglo.


function eliminarElemento(arreglo: any[], id: number): void {
    const index = arreglo.findIndex((element) => element.id === id);
    if (index !== -1) {
        arreglo.splice(index, 1);
    }
}

//5.Agregar a la función anterior un Callback que le permita acceder por última vez a los
//datos del elemento eliminado y mostrarlo por consola


function eliminarElementos(arreglo: any[], id: number, callback: (element: any) => void): void {
    const index = arreglo.findIndex((element) => element.id === id);
    if (index !== -1) {
        const deletedElement = arreglo.splice(index, 1)[0];
        callback(deletedElement);
    }
}

//6.

// Definir interfaz para la respuesta del servicio REST
interface RestResponse {
  data: (Plato | Paciente | Registro)[];
}

// Función para consultar el servicio REST
async function fetchData(url: string): Promise<RestResponse | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Aquí puedes validar que la respuesta cumpla con la estructura esperada antes de retornarla
    return data as RestResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// URL de ejemplo de un servicio REST gratuito
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Ejemplo de uso de la función fetchData
fetchData(apiUrl).then(response => {
  if (response) {
    console.log("Data from REST service:", response);
  } else {
    console.log("Failed to fetch data from REST service.");
  }
});

export { fetchData };