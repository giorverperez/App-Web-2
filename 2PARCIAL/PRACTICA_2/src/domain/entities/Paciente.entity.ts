



export class PacienteEntity {

    constructor(
      public id: number,
      public nombre: string,
    ) {}
  
    
  
    public static fromObject( object: {[key: string]: any} ): PacienteEntity {
      const { id, nombre } = object;
      if ( !id ) throw 'Id is required';
      if ( !nombre ) throw 'nombre is required';
  
      let newNombre;
      if ( nombre ) {
        newNombre = nombre.toUpperCase();
        if (  newNombre !== nombre  ) {
          throw 'Nombre must be uppercase'
        }
      }
      return new PacienteEntity(id, nombre)

    }
  
  }
  
  
  