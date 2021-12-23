import { BackendService } from '../services/backend';

export const useLogout = () => {
  const backendService = new BackendService();
  const logout = async () => {
    await backendService.logout();
  }
  return logout;
}
