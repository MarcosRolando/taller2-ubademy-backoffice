import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetUserMetrics = () => {
  const [userMetrics, setUserMetrics] = React.useState({});

  useEffect(() => {
    const backendService = new BackendService();
    backendService.getUserMetrics()
      .then((metrics: any) => {
        setUserMetrics(metrics);
      })
      .catch((error: Error) => {
        console.log(error.message); 
      })
  }, [])
  return { userMetrics };
}
