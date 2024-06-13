import { Router } from 'express';
import { PlatoController } from './controller.ddd';
import { PlatoDatasourceImpl } from '../../infrastructure/datasource/Plato.datasource.impl';
import { PlatoRepositoryImpl } from '../../infrastructure/repositories/Plato.repository.impl';


export class PlatoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PlatoDatasourceImpl();
    const PlatoRepository = new PlatoRepositoryImpl( datasource );
    const platoController = new PlatoController(PlatoRepository);

    router.get('/', platoController.getPlato );
    router.get('/:id', platoController.getPlatoById );
    
    router.post('/', platoController.createPlato );
    router.put('/:id', platoController.updatePlato );
    router.delete('/:id', platoController.deleteTodo );


    return router;
  }


}

