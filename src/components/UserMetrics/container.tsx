import { CircularProgress } from "@mui/material";
import React from "react";
import { useGetUserMetrics } from "../../hooks/useGetUserMetrics";
import { UserMetrics } from './component';

export const UserMetricsContainer = () => {
  const { userMetrics } = useGetUserMetrics();

  if (Object.keys(userMetrics).length === 0) {
    return (
      <CircularProgress size={60} style={{marginTop: '10em'}} />
    );
  }

  return (
    <UserMetrics userMetrics={userMetrics}/>
  );
}
