import React from "react";
import { CircularProgress } from "@mui/material";
import { useGetUserProfile } from "../../hooks/useGetUserProfile";
import { UserProfile } from './component';

export const UserProfileContainer = ({ email }: any) => {
  const { userProfile } = useGetUserProfile(email);

  return (
    (userProfile !== undefined) ?
      <UserProfile 
        profile={userProfile}
      />
    :
      <CircularProgress size={60}  style={{marginTop: '10em'}} />
  );
}
