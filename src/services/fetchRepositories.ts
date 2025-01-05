import { UserRepositories } from '../interfaces/UserRepos';
import { api } from '../lib/axios';

export const fetchRepositories = async (userName: string) => {
  const { data } = await api.get<UserRepositories[]>(`/${userName}/repos`);

  return data;
};
