import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateRegistroDto, UpdateRegistroDto } from '../../domain/dtos';
import { RegistroRepository } from '../../domain';

export class RegistroController {

  //* Dependency Injection
  constructor(
    private readonly registroRepository: RegistroRepository,
  ) {}

  public getRegistros = async (req: Request, res: Response) => {
    const registros = await this.registroRepository.getAll();
    return res.json(registros);
  };

  public getRegistroById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const registro = await this.registroRepository.findById(id);
      res.json(registro);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createRegistro = async (req: Request, res: Response) => {
    const [error, createRegistroDto] = CreateRegistroDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const nuevoRegistro = await this.registroRepository.create(createRegistroDto!);
    res.json(nuevoRegistro);
  };

  public updateRegistro = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateRegistroDto] = UpdateRegistroDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedRegistro = await this.registroRepository.updateById(updateRegistroDto!);
    return res.json(updatedRegistro);
  };

  public deleteRegistro = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedRegistro = await this.registroRepository.deleteById(id);
    res.json(deletedRegistro);
  };
}
