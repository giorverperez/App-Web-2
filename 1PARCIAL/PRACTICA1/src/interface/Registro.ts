// Definir una interfaz por cada objeto y asignarla como tipo de objeto

 export interface Registro {
    id: Number;
    Plato: any; 
    Paciente: any; 
    Fecha: string;
    Hora: string;
    NumeroCaloriasConsumidas: number;
    NumeroPorciones: number;
}