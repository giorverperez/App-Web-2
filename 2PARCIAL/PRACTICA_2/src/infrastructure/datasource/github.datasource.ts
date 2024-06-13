import axios from 'axios';

export class GithubDatasource {
    private readonly githubApiUrl = 'https://api.github.com/user/repos';
    private readonly token: string;

    constructor() {
        this.token = process.env.GITHUB_TOKEN || '';
        if (!this.token) {
            throw new Error('GitHub token is not defined in environment variables');
        }
    }

    async getUserRepos(): Promise<any[]> {
        const response = await axios.get(this.githubApiUrl, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });

        return response.data;
    }
}
