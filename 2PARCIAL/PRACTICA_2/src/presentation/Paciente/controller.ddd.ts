import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePacienteDto, UpdatePacienteDto } from '../../domain/dtos';
import { PacienteRepository } from '../../domain';


export class PacienteController {

  //* Dependency Injection
  constructor(
    private readonly PacienteRepository: PacienteRepository,
  ) { }


  public getPaciente = async ( req: Request, res: Response ) => {
    const Paciente = await this.PacienteRepository.getAll();
    return res.json( Paciente );
  };

  public getPacienteById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const Paciente = await this.PacienteRepository.findById( id );
      res.json( Paciente );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createPaciente = async ( req: Request, res: Response ) => {
    const [ error, createPacienteDto ] = CreatePacienteDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.PacienteRepository.create( createPacienteDto! );
    res.json( todo );

  };

  public updatePaciente = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePacienteDto ] = UpdatePacienteDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedPaciente = await this.PacienteRepository.updateById( updatePacienteDto! );
    return res.json( updatedPaciente );

  };


  public deleteTodo = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.PacienteRepository.deleteById( id );
    res.json( deletedTodo );

  };



}