import React from "react";
import profilePhoto from '../../../images/example.jpg';
import './styles.css';

export const BasicInfo = () => {

  return (
    <div className='BasicInfo'>
      <div className='ProfilePhotoContainer'>
        <img src={profilePhoto} className='ProfilePhoto' alt='Logo' />
      </div>
      <p className='Username'>
        Mark Anthony
      </p>
      <p className='InfoText'>
        Info
      </p>
      <p className='Info'>
        Email: example@gmail.com
      </p>
      <p className='Info'>
        Location: Argentina
      </p>
    </div>
  );
}
