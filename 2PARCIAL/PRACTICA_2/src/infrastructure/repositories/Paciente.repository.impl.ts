import { CreatePacienteDto, CreateRegistroDto,
    PacienteDatasource,
    PacienteEntity,
    PacienteRepository,
    UpdatePacienteDto } from '../../domain';


export class PacienteRepositoryImpl implements PacienteRepository {

constructor(
private readonly datasource: PacienteDatasource,
) { }


create( createPacienteDto: CreatePacienteDto ): Promise<PacienteEntity> {
return this.datasource.create( createPacienteDto );
}

getAll(): Promise<PacienteEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<PacienteEntity> {
return this.datasource.findById( id );
}

updateById( updatePacienteDto: UpdatePacienteDto ): Promise<PacienteEntity> {
return this.datasource.updateById( updatePacienteDto );
}

deleteById( id: number ): Promise<PacienteEntity> {
return this.datasource.deleteById( id );
}

}


