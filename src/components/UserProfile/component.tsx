import React from "react";
import { BasicInfo } from "./BasicInfo";
import { Interests } from "./Interests";
import { ProfileCourses } from "./ProfileCourses";
import './styles.css';

export const UserProfile = ({ profile }: any) => {
  const {_name, _email, _location, _subType, 
          _genres, _wallet_data} = profile;

  return (
    <div className='UserProfile'>
      <BasicInfo
        name={_name} 
        location={_location} 
        subType={_subType} 
        email={_email}
        wallet_data={_wallet_data}
      />
      <Interests 
        genres={_genres}
      />
      <ProfileCourses />
    </div>
  );
}
