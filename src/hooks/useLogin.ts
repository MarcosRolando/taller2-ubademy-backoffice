import { BackendService } from '../services/backend';

export const useLogin = () => {
  const backendService = new BackendService();
  const login = async (email: string, password: string) => {
    await backendService.login(email, password);
  }
  return { login };
}
