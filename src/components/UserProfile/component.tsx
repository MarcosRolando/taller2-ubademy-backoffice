import React from "react";
import { BasicInfo } from "./BasicInfo";
import { Interests } from "./Interests";
import { ProfileCourses } from "./ProfileCourses";
import './styles.css';

export const UserProfile = ({ profile, courses }: any) => {
  const {_name, _email, _location, _subType, 
          _genres, _wallet_data, _profile_image} = profile;

  const {_collaborator, _creator, _student } = courses;

  return (
    <div className='UserProfile'>
      <BasicInfo
        name={_name} 
        location={_location} 
        subType={_subType} 
        email={_email}
        wallet_data={_wallet_data}
        profile_image={_profile_image}
      />
      <Interests 
        genres={_genres}
      />
      <ProfileCourses 
        collaborator={_collaborator}
        creator={_creator}
        student={_student}
      />
    </div>
  );
}
