
export class Paciente {
  id: number;
  nombre: string;
  identificacion: string;
  // Asumiendo que Registro es una clase o interfaz definida en otro lugar
  estado: string;

  constructor(id: number, nombre: string, identificacion: string,  estado: string = "activo") {
    this.id = id;
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.estado = estado;
  }
}

export class CreatePacienteDto {

  private constructor(
    public readonly nombre: string,
    public readonly identificacion: string,
    public readonly estado: string = "activo",
  ){}

  static create( props: {[key:string]: any} ): [string?, CreatePacienteDto?]  {

    const { nombre, identificacion, estado } = props;

    if ( !nombre ) return ['Nombre property is required', undefined];
    if ( !identificacion ) return ['Identificacion property is required', undefined];

    return [undefined, new CreatePacienteDto(nombre, identificacion, estado)];
  }
}