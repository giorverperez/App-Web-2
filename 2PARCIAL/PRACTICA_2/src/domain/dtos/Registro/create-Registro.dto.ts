// create-Registro.dto.ts

export class Registro {
  id: number;
  platoId: number;
  pacienteId: number;
  fecha: Date;
  hora: Date;
  caloriasConsumidas: number;
  numeroPorciones: number;
  estado: string;

  constructor(id: number, platoId: number, pacienteId: number, fecha: Date, hora: Date, caloriasConsumidas: number, numeroPorciones: number, estado: string = "activo") {
    this.id = id;
    this.platoId = platoId;
    this.pacienteId = pacienteId;
    this.fecha = fecha;
    this.hora = hora;
    this.caloriasConsumidas = caloriasConsumidas;
    this.numeroPorciones = numeroPorciones;
    this.estado = estado;
  }
}

export class CreateRegistroDto {
  static create(body: any): [any, any] {
    throw new Error('Method not implemented.');
  }
  platoId: number;
  pacienteId: number;
  fecha: Date;
  hora: Date;
  caloriasConsumidas: number;
  numeroPorciones: number;

  constructor(platoId: number, pacienteId: number, fecha: Date, hora: Date, caloriasConsumidas: number, numeroPorciones: number) {
    this.platoId = platoId;
    this.pacienteId = pacienteId;
    this.fecha = fecha;
    this.hora = hora;
    this.caloriasConsumidas = caloriasConsumidas;
    this.numeroPorciones = numeroPorciones;
  }
}

function crearRegistro(pacienteId: number, platoId: number, fecha: Date, hora: Date, caloriasConsumidas: number, numeroPorciones: number): Registro {
  return new Registro(1, platoId, pacienteId, fecha, hora, caloriasConsumidas, numeroPorciones, "activo");
}
