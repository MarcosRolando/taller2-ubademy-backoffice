import React from "react";
import { CircularProgress } from "@mui/material";
import { useGetUserProfile } from "../../hooks/useGetUserProfile";
import { useGetUserCourses } from "../../hooks/useGetUserCourses";
import { UserProfile } from './component';

export const UserProfileContainer = ({ email }: any) => {
  const { userProfile } = useGetUserProfile(email);
  const { courses } = useGetUserCourses(email);

  return (
    (userProfile !== undefined && courses !== undefined) ?
    <UserProfile 
      profile={userProfile}
      courses={courses}
    />
    :
      <CircularProgress size={60}  style={{marginTop: '10em'}} />
  );
}
