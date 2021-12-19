import { BackendService } from '../services/backend';

export const useChangeBlockedStatus = () => {
  const backendService = new BackendService();
  const changeBlockedStatus = async (email: string, isBlocked: boolean) => {
    await backendService.changeBlockedStatus(email, isBlocked);
  }
  return { changeBlockedStatus };
}
