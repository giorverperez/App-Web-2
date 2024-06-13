

export class CreatePlatoDto {

  private constructor(
    public readonly nombre: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreatePlatoDto?]  {

    const { nombre } = props;

    if ( !nombre ) return ['Nombre property is required', undefined];


    return [undefined, new CreatePlatoDto(nombre)];
  }


}