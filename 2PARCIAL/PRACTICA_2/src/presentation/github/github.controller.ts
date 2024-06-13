import { Request, Response } from 'express';
import { GithubDatasource } from '../../infrastructure/datasource/github.datasource';

export class GithubController {
    private readonly githubDatasource: GithubDatasource;

    constructor() {
        this.githubDatasource = new GithubDatasource();
    }

    public getUserRepos = async (req: Request, res: Response) => {
        try {
            const repos = await this.githubDatasource.getUserRepos();
            res.json(repos);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}
