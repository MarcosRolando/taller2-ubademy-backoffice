import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetUsers = () => {
  const [users, setUsers] = React.useState([]);
  const backendService = new BackendService();
  useEffect(() => {
    backendService.getUsers()
      .then((_users: any) => setUsers(_users))
      .catch((error: Error) => {
        console.log(error.message);
      })
  })
  return { users };
}
