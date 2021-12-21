import React from "react";
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
    <></>
  );
}
