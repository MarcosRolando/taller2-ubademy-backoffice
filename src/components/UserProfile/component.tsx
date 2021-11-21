import React from "react";
import { BasicInfo } from "./BasicInfo";
import { ProfileCourses } from "./ProfileCourses";
import './styles.css';

export const UserProfile = () => {
  return (
    <div className='UserProfile'>
      <BasicInfo />
      <ProfileCourses />
    </div>
  );
}
