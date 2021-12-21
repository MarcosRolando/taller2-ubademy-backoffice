import React from "react";
import { useGetUserMetrics } from "../../hooks/useGetUserMetrics";
import { UserMetrics } from './component';

export const UserMetricsContainer = () => {
  const { userMetrics } = useGetUserMetrics();

  return (
    <UserMetrics userMetrics={userMetrics}/>
  );
}
