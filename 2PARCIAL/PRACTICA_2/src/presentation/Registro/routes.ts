import { Router } from 'express';
import { RegistroController } from './controller.ddd';
import { RegistroDatasourceImpl } from '../../infrastructure/datasource/Registro.datasource.impl';
import { RegistroRepositoryImpl } from '../../infrastructure/repositories/Registro.repository.impl';

export class RegistroRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new RegistroDatasourceImpl();
    const registroRepository = new RegistroRepositoryImpl(datasource);
    const registroController = new RegistroController(registroRepository);

    router.get('/', registroController.getRegistros);
    router.get('/:id', registroController.getRegistroById);
    router.post('/', registroController.createRegistro);
    router.put('/:id', registroController.updateRegistro);
    router.delete('/:id', registroController.deleteRegistro);

    return router;
  }
}





