import { CreateRegistroDto,
    RegistroDatasource,
    RegistroEntity,
    RegistroRepository,
    UpdateRegistroDto } from '../../domain';


export class RegistroRepositoryImpl implements RegistroRepository {

constructor(
private readonly datasource: RegistroDatasource,
) { }


create( createRegistroDto: CreateRegistroDto ): Promise<RegistroEntity> {
return this.datasource.create( createRegistroDto );
}

getAll(): Promise<RegistroEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<RegistroEntity> {
return this.datasource.findById( id );
}

updateById( updateRegistroDto: UpdateRegistroDto ): Promise<RegistroEntity> {
return this.datasource.updateById( updateRegistroDto );
}

deleteById( id: number ): Promise<RegistroEntity> {
return this.datasource.deleteById( id );
}

}


