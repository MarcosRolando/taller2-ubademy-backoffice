import React from "react";
import './styles.css';

export const User = ({ email, username}: any) => {

  return (
    <div className='User'>
      <p className='Email'>
        {email}
      </p>
      <p className='Username'>
        {username}
      </p>
    </div>
  );
}
