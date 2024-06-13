import { Router } from 'express';
import { GithubController } from './github.controller';

export class GithubRoutes {
    static get routes(): Router {
        const router = Router();
        const githubController = new GithubController();

        router.get('/repos', githubController.getUserRepos);

        return router;
    }
}
