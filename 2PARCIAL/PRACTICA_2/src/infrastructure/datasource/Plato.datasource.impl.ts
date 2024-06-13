import { prisma } from '../../data/postgres';
import { CreatePlatoDto, PlatoDatasource, PlatoEntity, UpdatePlatoDto } from '../../domain';

export class PlatoDatasourceImpl implements PlatoDatasource {

  async create( createPlatoDto: CreatePlatoDto ): Promise<PlatoEntity> {
    const plato = await prisma.plato.create({
      data: createPlatoDto!
    });

    return PlatoEntity.fromObject( plato );
  }

  async getAll(): Promise<PlatoEntity[]> {
    const platos = await prisma.plato.findMany();
    return platos.map( plato => PlatoEntity.fromObject(plato) );
  }

  async findById( id: number ): Promise<PlatoEntity> {
    const plato = await prisma.plato.findFirst({
      where: { id }
    });

    if ( !plato ) throw `Plato with id ${ id } not found`;
    return PlatoEntity.fromObject(plato);
  }

  async updateById( updatePlatoDto: UpdatePlatoDto ): Promise<PlatoEntity> {
    await this.findById( updatePlatoDto.id );
    
    const updatedPlato = await prisma.plato.update({
      where: { id: updatePlatoDto.id },
      data: updatePlatoDto!.values
    });

    return PlatoEntity.fromObject(updatedPlato);
  }

  async deleteById( id: number ): Promise<PlatoEntity> {
    await this.findById( id );
    const deleted = await prisma.plato.delete({
      where: { id }
    });

    return PlatoEntity.fromObject( deleted );
  }

}