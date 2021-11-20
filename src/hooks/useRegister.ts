import { BackendService } from '../services/backend';

export const useRegister = () => {
  const backendService = new BackendService();
  const register = async (email: string, password: string) => {
    await backendService.register(email, password);
  }
  return { register };
}
