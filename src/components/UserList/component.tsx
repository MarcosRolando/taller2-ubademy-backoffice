import React from 'react';
import { User } from './User';
import './styles.css';

export const UserList = ({ users }: any) => {

  return (
    <div className='UserList'>
      <div className='Description'>
        <p className='EmailText'>
          Email
        </p>
        <p className='UsernameText'>
          Username
        </p>
      </div>
      {users.map(({email, username}: any) => <User email={email} username={username}/>)}
    </div>
  );
}
