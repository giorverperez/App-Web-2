// Definir una interfaz por cada objeto y asignarla como tipo de objeto

 export interface Registro {
    getID(): string;
    getPlato(): any; 
    getPaciente(): any; 
    getFecha(): string;
    getHora(): string;
    getNumeroCaloriasConsumidas(): number;
    getNumeroPorciones(): number;
}