import { Router } from 'express';
import { PacienteController } from './controller.ddd';
import { PacienteDatasourceImpl } from '../../infrastructure/datasource/Paciente.datasource.impl';
import { PacienteRepositoryImpl } from '../../infrastructure/repositories/Paciente.repository.impl';
export class PacienteRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PacienteDatasourceImpl();
    const PacienteRepository = new PacienteRepositoryImpl( datasource );
    const pacienteController = new PacienteController(PacienteRepository);

    router.get('/', pacienteController.getPaciente );
    router.get('/:id', pacienteController.getPacienteById );
    
    router.post('/', pacienteController.createPaciente );
    router.put('/:id', pacienteController.updatePaciente );
    router.delete('/:id', pacienteController.deleteTodo );


    return router;
  }


}

