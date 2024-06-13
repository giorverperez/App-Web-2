import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePlatoDto, UpdatePlatoDto } from '../../domain/dtos';
import { PlatoRepository } from '../../domain';


export class PlatoController {

  //* Dependency Injection
  constructor(
    private readonly PlatoRepository: PlatoRepository,
  ) { }


  public getPlato = async ( req: Request, res: Response ) => {
    const Plato = await this.PlatoRepository.getAll();
    return res.json( Plato );
  };

  public getPlatoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const Plato = await this.PlatoRepository.findById( id );
      res.json( Plato );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createPlato = async ( req: Request, res: Response ) => {
    const [ error, createPlatoDto ] = CreatePlatoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.PlatoRepository.create( createPlatoDto! );
    res.json( todo );

  };

  public updatePlato = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePlatoDto ] = UpdatePlatoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedPlato = await this.PlatoRepository.updateById( updatePlatoDto! );
    return res.json( updatedPlato );

  };


  public deleteTodo = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.PlatoRepository.deleteById( id );
    res.json( deletedTodo );

  };



}