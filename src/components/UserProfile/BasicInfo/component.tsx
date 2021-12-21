import React from "react";
import profilePhoto from '../../../images/default.png';
import './styles.css';

export const BasicInfo = ({ name, location, email, subType, wallet_data, _profile_image }: any) => {

  return (
    <div className='BasicInfo'>
      <div className='ProfilePhotoContainer'>
        <img src={(_profile_image === "") ? _profile_image : profilePhoto} className='ProfilePhoto' alt='Logo' />
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
      <p className='InfoText'>
        Wallet
      </p>
      <p className='Info'>
        Address: {wallet_data.address}
      </p>
      <p className='Info'>
        Balance: {`${wallet_data.balance} ETH`}
      </p>
    </div>
  );
}
