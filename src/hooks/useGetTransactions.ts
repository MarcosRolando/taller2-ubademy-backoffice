import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetTransactions = () => {
  const [transactions, setTransactions] = React.useState([]);
  useEffect(() => {
    const backendService = new BackendService();
    backendService.getTransactions()
      .then((_transactions: any) => setTransactions(_transactions))
      .catch((error: Error) => {
        console.log(error.message);
      })
  }, [])
  return { transactions };
}
