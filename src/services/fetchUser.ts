import { UserGitHub } from '../interfaces/UserGitHub';
import { api } from '../lib/axios';

export const fetchUser = async (userName: string) => {
  const { data } = await api.get<UserGitHub>(`/${userName}`);
  return data;
};
