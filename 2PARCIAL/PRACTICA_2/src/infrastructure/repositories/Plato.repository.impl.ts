import { CreatePlatoDto,
    PlatoDatasource,
    PlatoEntity,
    PlatoRepository,
    UpdatePlatoDto } from '../../domain';


export class PlatoRepositoryImpl implements PlatoRepository {

constructor(
private readonly datasource: PlatoDatasource,
) { }


create( createPlatoDto: CreatePlatoDto ): Promise<PlatoEntity> {
return this.datasource.create( createPlatoDto );
}

getAll(): Promise<PlatoEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<PlatoEntity> {
return this.datasource.findById( id );
}

updateById( updatePlatoDto: UpdatePlatoDto ): Promise<PlatoEntity> {
return this.datasource.updateById( updatePlatoDto );
}

deleteById( id: number ): Promise<PlatoEntity> {
return this.datasource.deleteById( id );
}

}


