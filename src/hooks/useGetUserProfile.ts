import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetUserProfile = (email: string) => {
  const [userProfile, setUserProfile] = React.useState(undefined);
  useEffect(() => {
    const backendService = new BackendService();
    backendService.getUserProfile(email)
      .then((profile: any) => setUserProfile(profile))
      .catch((error: Error) => {
        console.log(error.message);
      })
  }, [email])
  return { userProfile };
}
