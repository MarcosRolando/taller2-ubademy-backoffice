import React from "react";
import profilePhoto from '../../../images/example.jpg';
import './styles.css';

export const BasicInfo = ({ name, location, email, subType }: any) => {

  return (
    <div className='BasicInfo'>
      <div className='ProfilePhotoContainer'>
        <img src={profilePhoto} className='ProfilePhoto' alt='Logo' />
      </div>
      <p className='Username'>
        {name}
      </p>
      <p className='InfoText'>
        Info
      </p>
      <p className='Info'>
        Email: {email}
      </p>
      <p className='Info'>
        Location: {location}
      </p>
      <p className='Info'>
        Subscription type: {subType}
      </p>
    </div>
  );
}
