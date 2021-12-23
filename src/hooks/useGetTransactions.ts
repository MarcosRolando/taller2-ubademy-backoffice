import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetTransactions = (filter: any) => {
  const [transactions, setTransactions] = React.useState(undefined);
  useEffect(() => {
    const backendService = new BackendService();
    backendService.getTransactions(filter)
      .then((_transactions: any) => setTransactions(_transactions))
      .catch((error: Error) => {
        console.log(error.message);
      })
  }, [filter])
  return { transactions };
}
