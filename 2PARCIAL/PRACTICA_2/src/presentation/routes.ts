import { Router } from "express";

import { RegistroRoutes } from "./Registro/routes";
import { PlatoRoutes } from "./Plato/routes";
import { PacienteRoutes } from "./Paciente/routes";
import { GithubRoutes } from "./github/github.routes";

export class AppRoutes { 

    static get routes(): Router {
        const router = Router();

        router.use('/registros', RegistroRoutes.routes);
        router.use('/platos', PlatoRoutes.routes);
        router.use('/pacientes', PacienteRoutes.routes);

        //github
        router.use('/github', GithubRoutes.routes);

        return router;
    }
}
